import "server-only";
import { cache } from "react";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { tenantDomains, tenants } from "@/db/schema";
import { env, hasDatabase } from "./env";

export type TenantRecord = typeof tenants.$inferSelect;

/** Lowercase + strip port/whitespace so "BVC.localhost:3040" → "bvc.localhost". */
export function normalizeHost(host: string | null | undefined): string {
  if (!host) return "";
  return host.trim().toLowerCase().split(":")[0];
}

/**
 * Look up the tenant that owns a host. Plain (un-cached) function safe to call
 * outside a request scope (e.g. the magic-link sender). Returns null for unknown
 * hosts or when the DB is not yet configured.
 */
export async function getTenantByHost(rawHost: string | null | undefined): Promise<TenantRecord | null> {
  const host = normalizeHost(rawHost);
  if (!host || !hasDatabase) return null;

  const rows = await db
    .select({ tenant: tenants })
    .from(tenantDomains)
    .innerJoin(tenants, eq(tenantDomains.tenantId, tenants.id))
    .where(eq(tenantDomains.host, host))
    .limit(1);

  const tenant = rows[0]?.tenant ?? null;
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
  return getTenantByHost(host);
});

/** Tenant or 404. Unknown host must never fall back to a default brand's content. */
export async function requireTenant(): Promise<TenantRecord> {
  const tenant = await resolveTenant();
  if (!tenant) notFound();
  return tenant;
}
