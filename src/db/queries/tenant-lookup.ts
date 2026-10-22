import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { tenantDomains, tenants } from "@/db/schema";

export type TenantRow = typeof tenants.$inferSelect;

/**
 * The tenant that owns an already-normalized host, active or not (the caller decides what an
 * inactive tenant means). Plain query, no request scope: getTenantByHost calls it directly, and
 * resolveTenant goes through the cross-request cache (src/lib/public-cache.ts).
 */
export async function lookupTenantByHost(host: string): Promise<TenantRow | null> {
  const rows = await db
    .select({ tenant: tenants })
    .from(tenantDomains)
    .innerJoin(tenants, eq(tenantDomains.tenantId, tenants.id))
    .where(eq(tenantDomains.host, host))
    .limit(1);
  return rows[0]?.tenant ?? null;
}
