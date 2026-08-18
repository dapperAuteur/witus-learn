import "server-only";
import { notFound } from "next/navigation";
import { requireTenant, type TenantRecord } from "@/lib/tenant";
import {
  getContentVersions,
  getCourseById,
  getCourseByIdOrSlug,
  listCategories,
  listSeries,
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
import {
  getMediaAsset,
  listMediaAssets,
  setMediaAssetStatus,
  upsertMediaAsset,
  type SetMediaAssetStatus,
  type UpsertMediaAsset,
} from "@/db/queries/media-assets";
import { listTenantPrerequisiteEdges } from "@/db/queries/prerequisites";
import {
  listLessonBodies,
  listLessonLocations,
  type LessonBodyRef,
} from "@/db/queries/lesson-locations";
import { listPublishedLessonSearchRows } from "@/db/queries/course-search";
import {
  createNote,
  createTeacherNote,
  deleteOwnNote,
  getLessonBodyText,
  listNoteShares,
  listNotesSharedWithTeacher,
  listOwnCourseNotes,
  listOwnLessonNotes,
  listSentTeacherNotes,
  listTeacherNotesForStudent,
  listTeacherNotesSentToStudent,
  listTeachersForLearner,
  searchNotesInCourse,
  shareNoteWithTeacher,
  unshareNote,
  updateOwnNote,
  type CreateNoteInput,
  type CreateTeacherNoteInput,
} from "@/db/queries/notes";

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

  /** Every series this tenant publishes, summarised for the /series index. */
  listSeries() {
    return listSeries(this.tenantId);
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

  // ── Media verification (/admin/media) ──────────────────────────────────────
  // Uploaded images/video/audio/documents awaiting the owner's approve/reject decision. Scoped
  // here like every other content read: one school's unreviewed media is invisible to another,
  // and a by-id read for a foreign asset returns nothing (the route 404s, never redirects).

  /** Every registered asset for THIS tenant, newest first. */
  listMediaAssets() {
    return listMediaAssets(this.tenantId);
  }

  /** One asset, or undefined for an id that is not this tenant's. */
  getMediaAsset(id: string) {
    return getMediaAsset(this.tenantId, id);
  }

  /** Register an upload (or refresh its details); the decision is never reset by a re-register. */
  upsertMediaAsset(input: Omit<UpsertMediaAsset, "tenantId">) {
    return upsertMediaAsset({ tenantId: this.tenantId, ...input });
  }

  /** Record an approve/reject decision. Undefined when the id is not this tenant's. */
  setMediaAssetStatus(input: Omit<SetMediaAssetStatus, "tenantId">) {
    return setMediaAssetStatus({ tenantId: this.tenantId, ...input });
  }

  // ── Review context ("where in the course does this appear") ────────────────
  // The review boards hold items that name a course slug and usually a lesson slug: a citation, a
  // source check, an uploaded figure. These turn that into a link and a title the reviewer can
  // read. Scoped like every other content read, so a slug this brand does not host resolves to
  // nothing and the board shows the names without a link rather than pointing somewhere false.

  /** Lessons of the named courses, for this tenant, with the username half of the pretty URL. */
  listLessonLocations(courseSlugs: readonly string[]) {
    return listLessonLocations(this.tenantId, courseSlugs);
  }

  /** Bodies of specific lessons, for this tenant, so a board can quote the prose around an item. */
  listLessonBodies(refs: readonly LessonBodyRef[]) {
    return listLessonBodies(this.tenantId, refs);
  }

  // ── In-course search (plans/61 §5) ─────────────────────────────────────────

  /** PUBLISHED lessons of one of THIS tenant's courses, with bodies, for in-course search. */
  listPublishedLessonSearchRows(courseId: string) {
    return listPublishedLessonSearchRows(this.tenantId, courseId);
  }

  // ── Connection graph (/admin/graph, plans/57) ──────────────────────────────

  /** Every prerequisite relationship inside THIS tenant, both ends scoped. Ids only. */
  listPrerequisiteEdges() {
    return listTenantPrerequisiteEdges(this.tenantId);
  }

  // ── Notes and inline annotations (plans/61) ────────────────────────────────
  // Visibility rules live in src/db/queries/notes.ts; every method here bakes in tenant_id, so no
  // route can read or write a note outside its own tenant. The rules in one line: authors see
  // their own; a teacher sees a personal note only through an explicit share row; a student sees
  // a teacher note only through cohort membership (minus narrowing); guardians see teacher-sent
  // notes only, gated by isGuardianOf in the route.

  listOwnLessonNotes(authorId: string, lessonId: string) {
    return listOwnLessonNotes(this.tenantId, authorId, lessonId);
  }

  listOwnCourseNotes(authorId: string, courseId: string) {
    return listOwnCourseNotes(this.tenantId, authorId, courseId);
  }

  createNote(input: Omit<CreateNoteInput, "tenantId">) {
    return createNote({ tenantId: this.tenantId, ...input });
  }

  updateOwnNote(authorId: string, noteId: string, body: string) {
    return updateOwnNote(this.tenantId, authorId, noteId, body);
  }

  deleteOwnNote(authorId: string, noteId: string) {
    return deleteOwnNote(this.tenantId, authorId, noteId);
  }

  listTeachersForLearner(learnerId: string) {
    return listTeachersForLearner(this.tenantId, learnerId);
  }

  shareNoteWithTeacher(authorId: string, noteId: string, teacherUserId: string) {
    return shareNoteWithTeacher(this.tenantId, authorId, noteId, teacherUserId);
  }

  unshareNote(authorId: string, noteId: string, teacherUserId: string) {
    return unshareNote(this.tenantId, authorId, noteId, teacherUserId);
  }

  listNoteShares(authorId: string, noteIds: string[]) {
    return listNoteShares(this.tenantId, authorId, noteIds);
  }

  listNotesSharedWithTeacher(teacherUserId: string, lessonId: string) {
    return listNotesSharedWithTeacher(this.tenantId, teacherUserId, lessonId);
  }

  createTeacherNote(input: Omit<CreateTeacherNoteInput, "tenantId">) {
    return createTeacherNote({ tenantId: this.tenantId, ...input });
  }

  listTeacherNotesForStudent(studentUserId: string, lessonId: string) {
    return listTeacherNotesForStudent(this.tenantId, studentUserId, lessonId);
  }

  listSentTeacherNotes(teacherUserId: string, lessonId: string) {
    return listSentTeacherNotes(this.tenantId, teacherUserId, lessonId);
  }

  listTeacherNotesSentToStudent(studentUserId: string) {
    return listTeacherNotesSentToStudent(this.tenantId, studentUserId);
  }

  searchNotesInCourse(viewerId: string, courseId: string, query: string) {
    return searchNotesInCourse(this.tenantId, viewerId, courseId, query);
  }

  getLessonBodyText(lessonId: string) {
    return getLessonBodyText(this.tenantId, lessonId);
  }
}

/** Build a ScopedDb for the current request's tenant (404 on unknown host). */
export async function getScopedDb(): Promise<ScopedDb> {
  const tenant = await requireTenant();
  return new ScopedDb(tenant);
}
