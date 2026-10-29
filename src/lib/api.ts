import "server-only";
import { NextResponse } from "next/server";
import type { Course } from "@/db/schema";
import { getScopedDb, type ScopedDb } from "@/db/scoped";
import { isEnrolled } from "@/db/queries/enrollment";
import { isCourseAuditor } from "@/db/queries/course-auditors";
import { AUDITOR_READ_ONLY_MESSAGE, isReadOnlyAuditor } from "@/lib/auditors";
import type { Session } from "@/lib/auth";
import { getMembership, getSession, isPlatformOwner } from "@/lib/session";
import { canSeeUnvettedContent, isUnvetted, isVettingLocked } from "@/lib/vetting";
import { exportAccess, type CourseActor } from "@/lib/course-visibility";

export const json = (data: unknown, status = 200) => NextResponse.json(data, { status });
export const errorJson = (error: string, status: number) => json({ error }, status);

export interface ApiContext {
  sdb: ScopedDb;
  session: Session | null;
}

/** Resolve the tenant (404s an unknown host) + the optional session for a route. */
export async function apiContext(): Promise<ApiContext> {
  const sdb = await getScopedDb();
  const session = await getSession();
  return { sdb, session };
}

export async function isTenantAdmin(session: Session | null, tenantId: string): Promise<boolean> {
  if (!session) return false;
  if (await isPlatformOwner(session.user.id)) return true;
  return (await getMembership(session.user.id, tenantId)) === "brand_admin";
}

export async function isTenantInstructor(
  session: Session | null,
  tenantId: string,
): Promise<boolean> {
  if (!session) return false;
  if (await isPlatformOwner(session.user.id)) return true;
  const role = await getMembership(session.user.id, tenantId);
  return role === "instructor" || role === "brand_admin";
}

/**
 * Who the viewer is relative to ONE course already resolved in `tenantId` (the request's school):
 * the platform owner, the course's own instructor, a brand_admin of THAT school. Membership is read
 * for this tenant only, so a brand_admin of another school is no admin here.
 */
export async function courseActor(session: Session, tenantId: string, course: Course): Promise<CourseActor> {
  const isOwner = await isPlatformOwner(session.user.id);
  const isInstructor = course.instructorId === session.user.id;
  // The membership read is skipped when it cannot change any answer (owner or own instructor).
  const isSchoolAdmin =
    isOwner || isInstructor ? isOwner : (await getMembership(session.user.id, tenantId)) === "brand_admin";
  return { isOwner, isInstructor, isSchoolAdmin };
}

/**
 * The looser editor test the learner-facing routes use for "may skip the gating" (progress, quiz,
 * tutor, source chat, submissions). Instructor or tenant admin, as before, except that an OWNER-ONLY
 * course (courses.owner_only, src/lib/course-visibility.ts) admits no brand_admin: its text must not
 * reach a school admin through the tutor or source chat either.
 */
export async function canEditCourse(
  session: Session | null,
  tenantId: string,
  course: Course,
): Promise<boolean> {
  if (!session) return false;
  if (course.instructorId === session.user.id) return true;
  if (course.ownerOnly) return isPlatformOwner(session.user.id);
  return isTenantAdmin(session, tenantId);
}

/**
 * Who may open a course's AUTHORING workspace (/teach/[courseId] and its sub-pages: the course page,
 * script, embed and submissions). The same rule as canAccessCourse: its own instructor, the platform
 * owner, and a brand_admin of the course's school, whether the course is private, held or open
 * (BAM 2026-10-29: a school's brand_admin controls that school's courses). An OWNER-ONLY course
 * (courses.owner_only: the private pipeline's review copies, some built from copyrighted books)
 * opens only for the owner and its own instructor.
 *
 * Callers answer a refusal with the same not-found a learner gets, never a 403, so the response
 * does not confirm the course exists.
 */
export async function canOpenCourseWorkspace(
  session: Session | null,
  tenantId: string,
  course: Course,
): Promise<boolean> {
  return canAccessCourse(session, tenantId, course);
}

/**
 * The EPUB/PDF export gate (/api/admin/courses/[id]/epub and /pdf), for a course already resolved
 * in the request's tenant (exportAccess in src/lib/course-visibility.ts):
 *   - an OWNER-ONLY course exports only for the platform owner and its own instructor;
 *   - a private or held course for those two and the school's brand_admin;
 *   - anyone else gets "not-found", the answer a learner gets, so the route does not confirm it exists;
 *   - an open course exports for a tenant admin (brand_admin or platform owner), as it always has;
 *     anyone else gets "forbidden".
 */
export async function courseExportAccess(
  session: Session,
  tenantId: string,
  course: Course,
): Promise<"ok" | "not-found" | "forbidden"> {
  return exportAccess(await courseActor(session, tenantId, course), course);
}

/**
 * Is this course OWNER-ONLY and the viewer neither the platform owner nor its own instructor? Routes
 * that gate on a role rather than on canAccessCourse (the hold release, the visibility switch, the
 * reviewer grants) ask this first and answer the learner's not-found.
 */
export async function ownerOnlyHidden(session: Session, course: Course): Promise<boolean> {
  if (!course.ownerOnly || course.instructorId === session.user.id) return false;
  return !(await isPlatformOwner(session.user.id));
}

/**
 * The course access gate. Its own instructor, the platform owner, and a tenant admin (a brand_admin
 * of the school the request resolved to) may view and edit the course, whatever its visibility: a
 * private course is closed to LEARNERS, not to its school (BAM 2026-10-29). An OWNER-ONLY course
 * (courses.owner_only) admits only the owner and its own instructor, never a brand_admin or
 * moderator. Use this, not canEditCourse, anywhere a viewer could reach an unpublished or private
 * course.
 *
 * This is the EDIT gate. It deliberately says nothing about vetting: `vetted_at` is the
 * platform owner's own review queue, and a white-label school's brand_admin must not lose
 * the ability to fix their own brand's courses just because the owner hasn't reviewed them
 * yet. Whether a viewer may see an UNVETTED course's content is a separate, stricter
 * question, answered by canSeeUnvettedCourse below.
 */
export async function canAccessCourse(
  session: Session | null,
  tenantId: string,
  course: Course,
): Promise<boolean> {
  if (!session) return false;
  if (course.instructorId === session.user.id) return true;
  if (course.ownerOnly) return isPlatformOwner(session.user.id);
  return isTenantAdmin(session, tenantId);
}

/**
 * CONTENT gate for an unvetted course (`vetted_at IS NULL`): may this viewer reach its
 * lessons, lesson titles and media URLs, or do they get the public "Coming soon" landing
 * face? Owner OR the course's own instructor OR anyone with an EXISTING enrollment OR an
 * accepted INVITED AUDITOR (plans/52 §5), which is the only kind of read-only access this
 * app grants: an auditor may read the lessons and may write nothing (src/lib/auditors.ts).
 *
 * A vetted course returns true immediately; ordinary publish/visibility/enrollment gating
 * still applies on top of this, exactly as before.
 *
 * Enrollees are non-negotiable: the migration that added `vetted_at` did not backfill, so
 * every existing course reads as unvetted at once, and dropping enrollees would cut off
 * every learner mid-course, including everyone who has paid.
 *
 * The auditor read is LAST on purpose: it is the only branch that costs a query, and the
 * three cheap in-memory/one-row checks above already answer for almost every caller.
 */
export async function canSeeUnvettedCourse(
  session: Session | null,
  course: Course,
): Promise<boolean> {
  // isVettingLocked, not isUnvetted: an owner-flagged "live but unvetted" course is open to
  // everyone (the pages carry the review-in-progress disclosure instead).
  if (!isVettingLocked(course)) return true;
  if (!session) return false;
  const isOwnerOrInstructor =
    course.instructorId === session.user.id || (await isPlatformOwner(session.user.id));
  if (isOwnerOrInstructor) return true;
  if (await isEnrolled(session.user.id, course.id)) return true;
  return canSeeUnvettedContent({
    isOwnerOrInstructor: false,
    isEnrolled: false,
    // The grant is per TENANT + per COURSE, and the tenant comes from the course row itself,
    // never from the caller, so this cannot be widened by anything a client sends.
    isAuditor: await isCourseAuditor({
      tenantId: course.tenantId,
      courseId: course.id,
      userId: session.user.id,
      email: session.user.email ?? null,
    }),
  });
}

/**
 * The read-only half of invite-to-audit (plans/52 §5): 403 when the caller's ONLY access to this
 * course is an audit grant. Call it in every route that WRITES a learner record (progress, quiz
 * attempts, recall grades, assignment submissions, enrollment, completion), before the write.
 *
 * Why it exists as its own check rather than leaning on lessonAccess: an auditor's lesson access is
 * deliberately open (they are here to read the course), so the read gate cannot also be the write
 * gate. Keeping their attempts out of the tables is the point, not a side effect. A reviewer
 * clicking through a quiz to check the wording must not move that quiz's statistics or any
 * dashboard average built on them.
 *
 * Returns null (no block) for everyone else, and costs no query at all on a vetted course, for an
 * editor, or for an enrollee.
 */
export async function auditorReadOnlyBlock(input: {
  session: Session;
  tenantId: string;
  course: Course;
  isEditor: boolean;
  isEnrolled: boolean;
}): Promise<NextResponse | null> {
  if (!isUnvetted(input.course) || input.isEditor || input.isEnrolled) return null;
  const isAuditor = await isCourseAuditor({
    tenantId: input.tenantId,
    courseId: input.course.id,
    userId: input.session.user.id,
    email: input.session.user.email ?? null,
  });
  return isReadOnlyAuditor({ isAuditor, isUnvetted: true, isEditor: false, isEnrolled: false })
    ? errorJson(AUDITOR_READ_ONLY_MESSAGE, 403)
    : null;
}

/** Load a course for editing: 404 if it isn't this tenant's, 403 if the caller
 *  can't edit it. Returns either the context or a ready-to-return response. */
export async function loadEditableCourse(
  id: string,
): Promise<{ sdb: ScopedDb; session: Session; course: Course } | { res: NextResponse }> {
  const { sdb, session } = await apiContext();
  const course = await sdb.getCourseById(id);
  if (!course) return { res: errorJson("Not found", 404) };
  // canAccessCourse (not canEditCourse): an OWNER-ONLY course can't be edited by brand_admins, and
  // is answered with the learner's not-found (a refusal there means the caller is neither the owner
  // nor its instructor), so the response does not confirm it exists.
  if (!(await canAccessCourse(session, sdb.tenantId, course))) {
    return { res: session && course.ownerOnly ? errorJson("Not found", 404) : errorJson("Forbidden", 403) };
  }
  return { sdb, session: session as Session, course };
}
