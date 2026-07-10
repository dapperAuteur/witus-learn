import "server-only";
import { and, asc, eq, ne } from "drizzle-orm";
import { db } from "@/db/client";
import { tenants, tenantDomains } from "@/db/schema/tenancy";
import { normalizeHost } from "@/lib/tenant-util";
import { dnsRecordsFor, isWildcardCovered, type DnsRecord } from "@/lib/domain-dns";
import { hasVercelDomains, hasVercelWildcard } from "@/lib/env";
import { attachDomain, detachDomain, type AttachResult } from "@/lib/vercel-domains";

// A school can self-serve up to this many domains (subdomains + custom) before BAM needs
// to get involved. The platform owner is exempt (see `exemptFromCap`).
export const MAX_DOMAINS_PER_TENANT = 5;

export interface TenantWithDomains {
  id: string;
  slug: string;
  name: string;
  domains: { id: string; host: string; isPrimary: boolean; wildcardCovered: boolean }[];
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
    domains: ds
      .filter((d) => d.tenantId === t.id)
      .map((d) => ({ id: d.id, host: d.host, isPrimary: d.isPrimary, wildcardCovered: isWildcardCovered(d.host) && hasVercelWildcard })),
  }));
}

export interface AddDomainResult {
  host: string;
  wildcardCovered: boolean;
  /** Generic DNS records to show (empty for a wildcard-covered subdomain — nothing to set). */
  dnsRecords: DnsRecord[];
  /** Present only for a custom domain when Vercel automation is configured. */
  vercel?: AttachResult;
}

/** Add a host to a tenant. Returns the normalized host (+ DNS/Vercel info for the UI), or
 *  an error string. Custom domains (not covered by the app's own wildcard zone) are
 *  auto-registered with the Vercel project when VERCEL_API_TOKEN/PROJECT_ID are set; if
 *  that call errors, the tenant_domains row is still kept (so the row can be retried /
 *  removed) and the error is surfaced to the caller instead of failing the whole add. */
export async function addDomain(
  tenantId: string,
  rawHost: string,
  opts?: { exemptFromCap?: boolean },
): Promise<AddDomainResult | { error: string }> {
  const host = normalizeHost(rawHost);
  if (!host || !host.includes(".")) return { error: "Enter a valid domain (e.g. school.example.com)." };

  const existing = await db.select({ id: tenantDomains.id }).from(tenantDomains).where(eq(tenantDomains.host, host)).limit(1);
  if (existing[0]) return { error: "That domain is already mapped to a school." };

  const tenantRows = await db.select({ id: tenantDomains.id }).from(tenantDomains).where(eq(tenantDomains.tenantId, tenantId));
  if (!opts?.exemptFromCap && tenantRows.length >= MAX_DOMAINS_PER_TENANT) {
    return { error: `A school can map up to ${MAX_DOMAINS_PER_TENANT} domains. Remove one first.` };
  }

  await db.insert(tenantDomains).values({ tenantId, host, isPrimary: tenantRows.length === 0 });

  // A base-zone subdomain is only "covered" (skip API + DNS) when a real Vercel WILDCARD DOMAIN is
  // configured (`hasVercelWildcard`, which needs Vercel nameservers). Otherwise attach it via the API
  // like any custom domain — that works with just a wildcard CNAME DNS record, no nameserver move.
  const wildcardCovered = isWildcardCovered(host) && hasVercelWildcard;
  const vercel = !wildcardCovered && hasVercelDomains ? await attachDomain(host) : undefined;
  const dnsRecords = wildcardCovered ? [] : dnsRecordsFor(host);
  return { host, wildcardCovered, dnsRecords, vercel };
}

export async function removeDomain(id: string): Promise<void> {
  const row = (
    await db.select({ host: tenantDomains.host }).from(tenantDomains).where(eq(tenantDomains.id, id)).limit(1)
  )[0];
  await db.delete(tenantDomains).where(eq(tenantDomains.id, id));
  // Best-effort: free up the domain slot on the Vercel project. Never blocks the unmap.
  if (row && hasVercelDomains && !isWildcardCovered(row.host)) {
    await detachDomain(row.host);
  }
}

/** The tenant a domain belongs to (for authorizing a brand admin's edit). */
export async function getDomainTenantId(id: string): Promise<string | null> {
  const row = (
    await db.select({ tenantId: tenantDomains.tenantId }).from(tenantDomains).where(eq(tenantDomains.id, id)).limit(1)
  )[0];
  return row?.tenantId ?? null;
}

/** The tenant that owns a given host (for authorizing the verify-status route, which
 *  is keyed by host rather than domain id). */
export async function getTenantIdForHost(rawHost: string): Promise<string | null> {
  const host = normalizeHost(rawHost);
  const row = (
    await db.select({ tenantId: tenantDomains.tenantId }).from(tenantDomains).where(eq(tenantDomains.host, host)).limit(1)
  )[0];
  return row?.tenantId ?? null;
}

export async function setPrimaryDomain(id: string): Promise<void> {
  const row = (await db.select({ tenantId: tenantDomains.tenantId }).from(tenantDomains).where(eq(tenantDomains.id, id)).limit(1))[0];
  if (!row) return;
  await db.update(tenantDomains).set({ isPrimary: false }).where(and(eq(tenantDomains.tenantId, row.tenantId), ne(tenantDomains.id, id)));
  await db.update(tenantDomains).set({ isPrimary: true }).where(eq(tenantDomains.id, id));
}
