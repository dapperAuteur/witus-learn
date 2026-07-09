import "server-only";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { tenants } from "@/db/schema";
import type { TenantRecord } from "@/lib/tenant";
import { extractBearerKey } from "@/lib/api-keys";
import { findActiveApiKeyByRaw, touchApiKeyLastUsed } from "@/db/queries/api-keys";

/**
 * Auth gate for the read-only, versioned, tenant-scoped public API (src/app/api/v1).
 *
 * LOAD-BEARING: the tenant for every /api/v1 request comes ONLY from the API key —
 * never from the request host, never from a client-supplied tenant id/slug/query param.
 * A key for tenant A must be structurally incapable of returning tenant B's data, so
 * every v1 route MUST call this first and build all its reads off `tenant.id`.
 */
export type ApiV1AuthResult =
  | { ok: true; tenant: TenantRecord }
  | { ok: false; status: 401 | 403; error: string };

export async function authenticateApiV1Request(request: Request): Promise<ApiV1AuthResult> {
  const raw = extractBearerKey(request.headers.get("authorization"));
  if (!raw) {
    return { ok: false, status: 401, error: "Missing API key. Send Authorization: Bearer <key>." };
  }

  const rateLimited = checkRateLimit(raw);
  if (!rateLimited.allowed) {
    return { ok: false, status: 403, error: "Rate limit exceeded. Try again shortly." };
  }

  // Generic error for "not found" and "revoked" alike — never let a caller distinguish
  // a wrong key from a revoked one (that would leak whether a key once existed).
  const keyRow = await findActiveApiKeyByRaw(raw);
  if (!keyRow) {
    return { ok: false, status: 401, error: "Invalid or revoked API key." };
  }

  const tenantRows = await db.select().from(tenants).where(eq(tenants.id, keyRow.tenantId)).limit(1);
  const tenant = tenantRows[0];
  if (!tenant || !tenant.isActive) {
    return { ok: false, status: 401, error: "Invalid or revoked API key." };
  }

  touchApiKeyLastUsed(keyRow.id);
  return { ok: true, tenant };
}

// ── Best-effort per-process rate limiting ───────────────────────────────────────────
// MVP only: an in-memory sliding window keyed by the raw key. This is NOT durable across
// serverless instances/cold starts and resets on redeploy — it protects against a single
// runaway client on a single instance, nothing more. Before this API takes real third-
// party traffic at scale, replace with a shared store (Vercel Firewall rate limiting,
// Upstash Redis, etc.) — see plans/wanderlearn-embed-design.md "Rate limiting".
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 120;
const hits = new Map<string, number[]>();

function checkRateLimit(rawKey: string): { allowed: boolean } {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const existing = (hits.get(rawKey) ?? []).filter((t) => t > windowStart);
  if (existing.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(rawKey, existing);
    return { allowed: false };
  }
  existing.push(now);
  hits.set(rawKey, existing);
  // Bound memory: forget keys once in a while so an attacker cycling random invalid
  // keys can't grow this map unboundedly. Cheap, approximate, fine for MVP.
  if (hits.size > 5000) hits.clear();
  return { allowed: true };
}
