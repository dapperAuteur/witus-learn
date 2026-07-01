import "server-only";
import { notFound } from "next/navigation";
import { requireTenant, type TenantRecord } from "@/lib/tenant";
import {
  getCourseById,
  listCategories,
  listCourses,
  type CatalogQuery,
} from "@/db/queries/catalog";
import { markCoursesAnnounced } from "@/db/queries/announce";

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

  // ── Catalog (Phase 3) ──────────────────────────────────────────────────────
  listCourses(opts: CatalogQuery = {}) {
    return listCourses(this.tenantId, opts);
  }

  /** Course by id, scoped to this tenant (null → caller 404s; never cross-tenant). */
  getCourseById(id: string) {
    return getCourseById(this.tenantId, id);
  }

  listCategories() {
    return listCategories(this.tenantId);
  }

  /** Stamp `announced_at` on the given courses (tenant-scoped). Returns the ids updated. */
  markCoursesAnnounced(courseIds: string[], at: Date = new Date()) {
    return markCoursesAnnounced(this.tenantId, courseIds, at);
  }
}

/** Build a ScopedDb for the current request's tenant (404 on unknown host). */
export async function getScopedDb(): Promise<ScopedDb> {
  const tenant = await requireTenant();
  return new ScopedDb(tenant);
}
