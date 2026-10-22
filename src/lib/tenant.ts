import "server-only";
import { cache } from "react";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { tenants } from "@/db/schema";
import { lookupTenantByHost } from "@/db/queries/tenant-lookup";
import { cachedTenantByHost } from "@/lib/public-cache";
import { env, hasDatabase } from "./env";
import { normalizeHost } from "./tenant-util";

export type TenantRecord = typeof tenants.$inferSelect;
export { normalizeHost };

/**
 * Look up the tenant that owns a host. Plain (un-cached) function safe to call
 * outside a request scope (e.g. the magic-link sender). Returns null for unknown
 * hosts or when the DB is not yet configured.
 */
export async function getTenantByHost(rawHost: string | null | undefined): Promise<TenantRecord | null> {
  const host = normalizeHost(rawHost);
  if (!host || !hasDatabase) return null;

  const tenant = await lookupTenantByHost(host);
  if (!tenant || !tenant.isActive) return null;
  return tenant;
}

/**
 * getTenantByHost through the cross-request data cache (tag `tenants`, cleared by every tenant,
 * domain and activation write). Request scope only: unstable_cache throws outside one, so code
 * that may run elsewhere (the magic-link sender, auth hooks) keeps the plain lookup above.
 */
export async function getTenantByHostCached(rawHost: string | null | undefined): Promise<TenantRecord | null> {
  const host = normalizeHost(rawHost);
  if (!host || !hasDatabase) return null;
  const tenant = await cachedTenantByHost(host);
  if (!tenant || !tenant.isActive) return null;
  return tenant;
}

/**
 * Resolve the current request's tenant from its Host header. React-cached so it
 * runs once per request across every RSC/handler. A DEV_TENANT_HOST override lets
 * `localhost:3040` map to a brand without subdomains in local dev.
 */
export const resolveTenant = cache(async (): Promise<TenantRecord | null> => {
  const h = await headers();
  const host = env.DEV_TENANT_HOST || h.get("x-forwarded-host") || h.get("host");
  return getTenantByHostCached(host);
});

/** Tenant or 404. Unknown host must never fall back to a default brand's content. */
export async function requireTenant(): Promise<TenantRecord> {
  const tenant = await resolveTenant();
  if (!tenant) notFound();
  return tenant;
}
