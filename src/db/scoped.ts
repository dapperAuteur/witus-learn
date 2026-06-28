import "server-only";
import { notFound } from "next/navigation";
import { requireTenant, type TenantRecord } from "@/lib/tenant";

/**
 * The mandatory tenant-scoped data-access chokepoint.
 *
 * Every content query in the app must go through a ScopedDb so `tenant_id` is
 * baked in and no route handler can run an unscoped catalog query. The rules
 * (see docs/spec MULTITENANCY_AND_BRANDING):
 *   - list/catalog  → WHERE tenant_id = current
 *   - by-id/by-slug → fetch, then 404 if row.tenant_id !== current (never redirect)
 *   - cross-course CYOA / AI recs → candidate set filtered by tenant before use
 *
 * Phase 1 establishes the boundary + guards; Phases 3+ hang the typed repository
 * methods (courses, lessons, paths, map, …) off this object.
 */
export class ScopedDb {
  readonly tenantId: string;
  readonly tenant: TenantRecord;

  constructor(tenant: TenantRecord) {
    this.tenant = tenant;
    this.tenantId = tenant.id;
  }

  /**
   * Guard for by-id/by-slug reads: returns the row only if it belongs to this
   * tenant, otherwise 404s. A redirect would leak the row's existence, so we
   * always notFound().
   */
  ownOrNotFound<T extends { tenantId: string } | undefined | null>(row: T): NonNullable<T> {
    if (!row || row.tenantId !== this.tenantId) notFound();
    return row;
  }
}

/** Build a ScopedDb for the current request's tenant (404 on unknown host). */
export async function getScopedDb(): Promise<ScopedDb> {
  const tenant = await requireTenant();
  return new ScopedDb(tenant);
}
