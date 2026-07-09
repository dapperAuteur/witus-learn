import "server-only";
import { and, desc, eq, isNull } from "drizzle-orm";
import { db } from "@/db/client";
import { tenantApiKeys, type TenantApiKey } from "@/db/schema";
import { generateApiKey, hashApiKey } from "@/lib/api-keys";

// Admin CRUD for tenant_api_keys (mint/list/revoke). Every read/write here takes an
// explicit tenantId and filters on it — mirrors the ScopedDb chokepoint convention
// (src/db/scoped.ts) even though this table isn't wired into ScopedDb itself, since
// admin key management is host-resolved (brand-admin's own tenant), not key-resolved.

export type ApiKeySummary = Omit<TenantApiKey, "keyHash">;

function toSummary(row: TenantApiKey): ApiKeySummary {
  const { keyHash, ...rest } = row;
  void keyHash; // never let the hash leak into an admin-UI payload, even accidentally
  return rest;
}

/** All keys for a tenant (active + revoked), newest first. Never returns keyHash. */
export async function listApiKeys(tenantId: string): Promise<ApiKeySummary[]> {
  const rows = await db
    .select()
    .from(tenantApiKeys)
    .where(eq(tenantApiKeys.tenantId, tenantId))
    .orderBy(desc(tenantApiKeys.createdAt));
  return rows.map(toSummary);
}

/** Mint a new key for a tenant. Returns the summary row PLUS the raw key — the only
 *  time the raw key is ever available; the caller must show it once and discard it. */
export async function createApiKey(
  tenantId: string,
  name: string,
  createdByUserId: string | null,
): Promise<{ key: ApiKeySummary; raw: string }> {
  const generated = generateApiKey();
  const [row] = await db
    .insert(tenantApiKeys)
    .values({
      tenantId,
      name,
      keyHash: generated.hash,
      keyPrefix: generated.displayPrefix,
      createdByUserId,
    })
    .returning();
  return { key: toSummary(row), raw: generated.raw };
}

/** The tenant a key belongs to (for authorizing a brand admin's revoke). */
export async function getApiKeyTenantId(id: string): Promise<string | null> {
  const rows = await db
    .select({ tenantId: tenantApiKeys.tenantId })
    .from(tenantApiKeys)
    .where(eq(tenantApiKeys.id, id))
    .limit(1);
  return rows[0]?.tenantId ?? null;
}

/** Revoke a key (soft-delete: sets revokedAt, keeps the row for audit/lastUsedAt history). */
export async function revokeApiKey(id: string): Promise<void> {
  await db
    .update(tenantApiKeys)
    .set({ revokedAt: new Date() })
    .where(and(eq(tenantApiKeys.id, id), isNull(tenantApiKeys.revokedAt)));
}

/** Look up the ACTIVE key row by raw key (hashes it first). Used only by the v1 API
 *  auth gate, never by admin UI. Returns null on no match / revoked. */
export async function findActiveApiKeyByRaw(raw: string): Promise<TenantApiKey | null> {
  const hash = hashApiKey(raw);
  const rows = await db
    .select()
    .from(tenantApiKeys)
    .where(and(eq(tenantApiKeys.keyHash, hash), isNull(tenantApiKeys.revokedAt)))
    .limit(1);
  return rows[0] ?? null;
}

/** Fire-and-forget last-used stamp; never blocks/fails the request it's serving. */
export function touchApiKeyLastUsed(id: string): void {
  db.update(tenantApiKeys)
    .set({ lastUsedAt: new Date() })
    .where(eq(tenantApiKeys.id, id))
    .catch(() => {
      // Best-effort telemetry only — a failure here must never break the read it's tracking.
    });
}
