import "server-only";
import { and, asc, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { courses } from "@/db/schema/courses";
import { liveSessions, type LiveSession } from "@/db/schema/learning";
import { tenants } from "@/db/schema/tenancy";

export interface NewLiveSession {
  courseId: string | null;
  title: string;
  description: string | null;
  scheduledAt: Date | null;
  visibility: string;
  playbackUrl: string | null;
}

/** Sessions for a school's /live page (live first, then soonest upcoming, then rest). */
export async function listLiveForViewer(tenantId: string): Promise<LiveSession[]> {
  return db
    .select()
    .from(liveSessions)
    .where(eq(liveSessions.tenantId, tenantId))
    .orderBy(desc(liveSessions.isLive), asc(liveSessions.scheduledAt), desc(liveSessions.createdAt));
}

/** Sessions attached to a specific course (rendered on the course page). Tenant-scoped. */
export async function listLiveForCourse(tenantId: string, courseId: string): Promise<LiveSession[]> {
  return db
    .select()
    .from(liveSessions)
    .where(and(eq(liveSessions.tenantId, tenantId), eq(liveSessions.courseId, courseId)))
    .orderBy(desc(liveSessions.isLive), asc(liveSessions.scheduledAt), desc(liveSessions.createdAt));
}

export async function listLiveForAdmin(tenantId: string): Promise<LiveSession[]> {
  return db
    .select()
    .from(liveSessions)
    .where(eq(liveSessions.tenantId, tenantId))
    .orderBy(desc(liveSessions.createdAt));
}

/** Fan-out: one stream broadcast to several schools = one row per tenant. A courseId only
 * ever attaches to the row of the tenant that OWNS the course (courseOwnerTenantId) — never to
 * another school's session (a course belongs to exactly one tenant; cross-attaching would leak). */
export async function createLiveSessions(
  tenantIds: string[],
  data: NewLiveSession,
  createdBy: string,
  courseOwnerTenantId?: string | null,
): Promise<number> {
  if (tenantIds.length === 0) return 0;
  await db.insert(liveSessions).values(
    tenantIds.map((tenantId) => ({
      tenantId,
      createdBy,
      ...data,
      courseId: data.courseId && tenantId === courseOwnerTenantId ? data.courseId : null,
    })),
  );
  return tenantIds.length;
}

/** The tenant that owns a course (for validating a live-session course attachment). */
export async function getCourseTenantId(courseId: string): Promise<string | null> {
  const [row] = await db.select({ tenantId: courses.tenantId }).from(courses).where(eq(courses.id, courseId)).limit(1);
  return row?.tenantId ?? null;
}

export async function getLiveTenantId(id: string): Promise<string | null> {
  const r = await db.select({ tenantId: liveSessions.tenantId }).from(liveSessions).where(eq(liveSessions.id, id)).limit(1);
  return r[0]?.tenantId ?? null;
}

export async function updateLiveSession(
  id: string,
  patch: Partial<{ isLive: boolean; recordingUrl: string | null; playbackUrl: string | null; title: string; visibility: string }>,
): Promise<void> {
  await db.update(liveSessions).set(patch).where(eq(liveSessions.id, id));
}

export async function deleteLiveSession(id: string): Promise<void> {
  await db.delete(liveSessions).where(eq(liveSessions.id, id));
}

/** All schools, for the broadcast fan-out picker (platform owner). */
export async function listAllTenants(): Promise<{ id: string; name: string }[]> {
  return db.select({ id: tenants.id, name: tenants.name }).from(tenants).orderBy(asc(tenants.name));
}

/** A school's courses (id + title) to populate the live-session course picker. Tenant-scoped. */
export async function listCourseOptions(tenantId: string): Promise<{ id: string; title: string }[]> {
  return db
    .select({ id: courses.id, title: courses.title })
    .from(courses)
    .where(eq(courses.tenantId, tenantId))
    .orderBy(asc(courses.title));
}
