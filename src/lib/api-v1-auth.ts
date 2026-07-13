import "server-only";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { tenants } from "@/db/schema";
import type { TenantRecord } from "@/lib/tenant";
import { extractBearerKey } from "@/lib/api-keys";
import { findActiveApiKeyByRaw, touchApiKeyLastUsed } from "@/db/queries/api-keys";
import { checkRateLimit } from "@/lib/rate-limit";

// Per-key budget for the public API. The limiter itself now lives in src/lib/rate-limit.ts so the
// public unauthenticated forms share ONE implementation with this route (see its caveats — it is
// in-memory and per-instance, not a durable shared store).
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 120;

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

  const rateLimited = checkRateLimit(`apiv1:${raw}`, {
    windowMs: WINDOW_MS,
    max: MAX_REQUESTS_PER_WINDOW,
  });
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

