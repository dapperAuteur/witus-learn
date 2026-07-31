import "server-only";
import { notFound } from "next/navigation";
import { requireTenant, type TenantRecord } from "@/lib/tenant";
import {
  getContentVersions,
  getCourseById,
  getCourseByIdOrSlug,
  listCategories,
  listCourses,
  listSitemapCourses,
  type CatalogQuery,
} from "@/db/queries/catalog";
import { markCoursesAnnounced } from "@/db/queries/announce";
import {
  inviteCourseAuditor,
  isCourseAuditor,
  listCourseAuditors,
  revokeCourseAuditor,
} from "@/db/queries/course-auditors";

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

  /** Course by uuid OR slug, scoped to this tenant, for the readable /teach/<slug> URLs.
   *  Callers must use the resolved `course.id` downstream, not the raw URL segment. */
  getCourseByIdOrSlug(idOrSlug: string) {
    return getCourseByIdOrSlug(this.tenantId, idOrSlug);
  }

  /** Live `content_version` per course id, tenant-scoped (foreign ids are omitted). */
  getContentVersions(ids: string[]) {
    return getContentVersions(this.tenantId, ids);
  }

  listCategories() {
    return listCategories(this.tenantId);
  }

  /** Course rows for THIS tenant's sitemap (see listSitemapCourses). */
  listSitemapCourses() {
    return listSitemapCourses(this.tenantId);
  }

  /** Stamp `announced_at` on the given courses (tenant-scoped). Returns the ids updated. */
  markCoursesAnnounced(courseIds: string[], at: Date = new Date()) {
    return markCoursesAnnounced(this.tenantId, courseIds, at);
  }

  // ── Invite-to-audit (plans/52 §5) ──────────────────────────────────────────
  // Read-only grants on ONE unvetted course. Scoped here like every other content read, so no
  // route can list, mint, or revoke a grant outside its own tenant.

  /** Auditors invited to one of THIS tenant's courses. */
  listCourseAuditors(courseId: string) {
    return listCourseAuditors(this.tenantId, courseId);
  }

  /** Invite (or re-invite, refreshing the token) an email to audit one of this tenant's courses. */
  inviteCourseAuditor(input: { courseId: string; email: string; invitedBy: string }) {
    return inviteCourseAuditor({ tenantId: this.tenantId, ...input });
  }

  /** Revoke a grant. A grant id from another tenant or another course deletes nothing. */
  revokeCourseAuditor(courseId: string, auditorId: string) {
    return revokeCourseAuditor(this.tenantId, courseId, auditorId);
  }

  /** Is this person an ACCEPTED auditor of this course, in this tenant? */
  isCourseAuditor(input: { courseId: string; userId: string | null; email: string | null }) {
    return isCourseAuditor({ tenantId: this.tenantId, ...input });
  }
}

/** Build a ScopedDb for the current request's tenant (404 on unknown host). */
export async function getScopedDb(): Promise<ScopedDb> {
  const tenant = await requireTenant();
  return new ScopedDb(tenant);
}
