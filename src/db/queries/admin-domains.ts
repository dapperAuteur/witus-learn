import "server-only";
import { and, asc, eq, ne } from "drizzle-orm";
import { db } from "@/db/client";
import { tenants, tenantDomains } from "@/db/schema/tenancy";
import { normalizeHost } from "@/lib/tenant-util";

export interface TenantWithDomains {
  id: string;
  slug: string;
  name: string;
  domains: { id: string; host: string; isPrimary: boolean }[];
}

// Platform-owner domain administration. host→tenant mapping is the load-bearing
// multi-tenancy primitive, so writes normalize the host and keep one primary/tenant.
export async function listTenantsWithDomains(): Promise<TenantWithDomains[]> {
  const [ts, ds] = await Promise.all([
    db.select({ id: tenants.id, slug: tenants.slug, name: tenants.name }).from(tenants).orderBy(asc(tenants.name)),
    db
      .select({ id: tenantDomains.id, tenantId: tenantDomains.tenantId, host: tenantDomains.host, isPrimary: tenantDomains.isPrimary })
      .from(tenantDomains)
      .orderBy(asc(tenantDomains.host)),
  ]);
  return ts.map((t) => ({
    id: t.id,
    slug: t.slug,
    name: t.name,
    domains: ds.filter((d) => d.tenantId === t.id).map((d) => ({ id: d.id, host: d.host, isPrimary: d.isPrimary })),
  }));
}

/** Add a host to a tenant. Returns the normalized host, or an error string. */
export async function addDomain(tenantId: string, rawHost: string): Promise<{ host: string } | { error: string }> {
  const host = normalizeHost(rawHost);
  if (!host || !host.includes(".")) return { error: "Enter a valid domain (e.g. school.example.com)." };

  const existing = await db.select({ id: tenantDomains.id }).from(tenantDomains).where(eq(tenantDomains.host, host)).limit(1);
  if (existing[0]) return { error: "That domain is already mapped to a school." };

  const isFirst = (await db.select({ id: tenantDomains.id }).from(tenantDomains).where(eq(tenantDomains.tenantId, tenantId)).limit(1)).length === 0;
  await db.insert(tenantDomains).values({ tenantId, host, isPrimary: isFirst });
  return { host };
}

export async function removeDomain(id: string): Promise<void> {
  await db.delete(tenantDomains).where(eq(tenantDomains.id, id));
}

export async function setPrimaryDomain(id: string): Promise<void> {
  const row = (await db.select({ tenantId: tenantDomains.tenantId }).from(tenantDomains).where(eq(tenantDomains.id, id)).limit(1))[0];
  if (!row) return;
  await db.update(tenantDomains).set({ isPrimary: false }).where(and(eq(tenantDomains.tenantId, row.tenantId), ne(tenantDomains.id, id)));
  await db.update(tenantDomains).set({ isPrimary: true }).where(eq(tenantDomains.id, id));
}
