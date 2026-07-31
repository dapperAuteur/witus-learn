import "server-only";
import { NextResponse } from "next/server";
import type { Course } from "@/db/schema";
import { getScopedDb, type ScopedDb } from "@/db/scoped";
import { isEnrolled } from "@/db/queries/enrollment";
import type { Session } from "@/lib/auth";
import { getMembership, getSession, isPlatformOwner } from "@/lib/session";
import { canSeeUnvettedContent, isUnvetted } from "@/lib/vetting";

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

export async function canEditCourse(
  session: Session | null,
  tenantId: string,
  course: Course,
): Promise<boolean> {
  if (!session) return false;
  if (course.instructorId === session.user.id) return true;
  return isTenantAdmin(session, tenantId);
}

/**
 * Access gate that respects a PRIVATE course. A course with visibility "private" is
 * owner-only — viewable/editable ONLY by the platform owner and the course's own
 * instructor, NEVER by brand_admins or moderators. Non-private courses fall back to
 * canEditCourse (instructor OR any tenant admin). Use this — not canEditCourse — anywhere
 * a viewer could reach an unpublished/private course, so future admin/moderator roles
 * can't see the owner's private drafts.
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
  if (course.visibility === "private") return isPlatformOwner(session.user.id);
  return isTenantAdmin(session, tenantId);
}

/**
 * CONTENT gate for an unvetted course (`vetted_at IS NULL`): may this viewer reach its
 * lessons, lesson titles and media URLs, or do they get the public "Coming soon" landing
 * face? Owner OR the course's own instructor OR anyone with an EXISTING enrollment (and,
 * once plans/52 §5 ships, an invited auditor: pass `isAuditor` into canSeeUnvettedContent
 * and nothing else here changes).
 *
 * A vetted course returns true immediately; ordinary publish/visibility/enrollment gating
 * still applies on top of this, exactly as before.
 *
 * Enrollees are non-negotiable: the migration that added `vetted_at` did not backfill, so
 * every existing course reads as unvetted at once, and dropping enrollees would cut off
 * every learner mid-course, including everyone who has paid.
 */
export async function canSeeUnvettedCourse(
  session: Session | null,
  course: Course,
): Promise<boolean> {
  if (!isUnvetted(course)) return true;
  if (!session) return false;
  const isOwnerOrInstructor =
    course.instructorId === session.user.id || (await isPlatformOwner(session.user.id));
  if (isOwnerOrInstructor) return true;
  return canSeeUnvettedContent({
    isOwnerOrInstructor: false,
    isEnrolled: await isEnrolled(session.user.id, course.id),
  });
}

/** Load a course for editing: 404 if it isn't this tenant's, 403 if the caller
 *  can't edit it. Returns either the context or a ready-to-return response. */
export async function loadEditableCourse(
  id: string,
): Promise<{ sdb: ScopedDb; session: Session; course: Course } | { res: NextResponse }> {
  const { sdb, session } = await apiContext();
  const course = await sdb.getCourseById(id);
  if (!course) return { res: errorJson("Not found", 404) };
  // canAccessCourse (not canEditCourse) so a PRIVATE course can't be edited by brand_admins.
  if (!(await canAccessCourse(session, sdb.tenantId, course))) return { res: errorJson("Forbidden", 403) };
  return { sdb, session: session as Session, course };
}
