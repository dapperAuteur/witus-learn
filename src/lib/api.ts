import "server-only";
import { NextResponse } from "next/server";
import type { Course } from "@/db/schema";
import { getScopedDb, type ScopedDb } from "@/db/scoped";
import type { Session } from "@/lib/auth";
import { getMembership, getSession, isPlatformOwner } from "@/lib/session";

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
