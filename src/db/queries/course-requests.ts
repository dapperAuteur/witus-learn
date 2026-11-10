import "server-only";
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { courseRequests, courses, tenantMemberships, userProfiles, users, type Course, type CourseRequest } from "@/db/schema";
import { NEW_COURSE_STATE } from "@/lib/course-visibility";
import { slugify } from "@/lib/slug";
import { expireCourse } from "@/lib/cache-tags";
import type { CourseRequestInput } from "@/lib/course-requests";

// Course requests: the database half of src/lib/course-requests.ts. Every read and write is keyed on
// the tenant the request's host resolved to, so a request is never listed, read or decided from
// another school; a by-id read for another school's request returns null and the route answers 404.

export interface CourseRequestRow extends CourseRequest {
  requesterName: string | null;
  requesterEmail: string;
  requesterUsername: string | null;
  /** The approved course's slug, when the course still exists. */
  courseSlug: string | null;
}

const withRequester = {
  request: courseRequests,
  requesterName: users.name,
  requesterDisplayName: userProfiles.displayName,
  requesterEmail: users.email,
  requesterUsername: userProfiles.username,
  courseSlug: courses.slug,
};

function toRow(r: {
  request: CourseRequest;
  requesterName: string | null;
  requesterDisplayName: string | null;
  requesterEmail: string;
  requesterUsername: string | null;
  courseSlug: string | null;
}): CourseRequestRow {
  return {
    ...r.request,
    requesterName: r.requesterDisplayName?.trim() || r.requesterName?.trim() || null,
    requesterEmail: r.requesterEmail,
    requesterUsername: r.requesterUsername,
    courseSlug: r.courseSlug,
  };
}

export async function createCourseRequest(tenantId: string, requesterUserId: string, input: CourseRequestInput): Promise<CourseRequest> {
  const [row] = await db
    .insert(courseRequests)
    .values({ tenantId, requesterUserId, title: input.title, description: input.description, reason: input.reason, briefUrl: input.briefUrl })
    .returning();
  return row;
}

/** Every request on this school, newest first; `status` narrows it. */
export async function listCourseRequests(tenantId: string, status?: "requested" | "approved" | "declined"): Promise<CourseRequestRow[]> {
  const conds = [eq(courseRequests.tenantId, tenantId)];
  if (status) conds.push(eq(courseRequests.status, status));
  const rows = await db
    .select(withRequester)
    .from(courseRequests)
    .innerJoin(users, eq(users.id, courseRequests.requesterUserId))
    .leftJoin(userProfiles, eq(userProfiles.userId, courseRequests.requesterUserId))
    .leftJoin(courses, eq(courses.id, courseRequests.courseId))
    .where(and(...conds))
    .orderBy(desc(courseRequests.createdAt));
  return rows.map(toRow);
}

/** One teacher's own requests on this school, newest first. */
export async function listOwnCourseRequests(tenantId: string, requesterUserId: string): Promise<CourseRequestRow[]> {
  const rows = await db
    .select(withRequester)
    .from(courseRequests)
    .innerJoin(users, eq(users.id, courseRequests.requesterUserId))
    .leftJoin(userProfiles, eq(userProfiles.userId, courseRequests.requesterUserId))
    .leftJoin(courses, eq(courses.id, courseRequests.courseId))
    .where(and(eq(courseRequests.tenantId, tenantId), eq(courseRequests.requesterUserId, requesterUserId)))
    .orderBy(desc(courseRequests.createdAt));
  return rows.map(toRow);
}

/** By id, on THIS school only: another school's request resolves to null (the route answers 404). */
export async function getCourseRequest(tenantId: string, id: string): Promise<CourseRequestRow | null> {
  const rows = await db
    .select(withRequester)
    .from(courseRequests)
    .innerJoin(users, eq(users.id, courseRequests.requesterUserId))
    .leftJoin(userProfiles, eq(userProfiles.userId, courseRequests.requesterUserId))
    .leftJoin(courses, eq(courses.id, courseRequests.courseId))
    .where(and(eq(courseRequests.id, id), eq(courseRequests.tenantId, tenantId)))
    .limit(1);
  return rows[0] ? toRow(rows[0]) : null;
}

export async function countOpenCourseRequests(tenantId: string): Promise<number> {
  const rows = await db
    .select({ id: courseRequests.id })
    .from(courseRequests)
    .where(and(eq(courseRequests.tenantId, tenantId), eq(courseRequests.status, "requested")));
  return rows.length;
}

/**
 * Approve: create the draft course for the requester (born private and unpublished, like every
 * course) and mark the request, in one transaction. The caller has already run the rule
 * (decideCourseRequestAction) and made sure the requester has a username. Returns null when the
 * request was decided meanwhile (the status guard in the UPDATE lost the race), so nothing is created.
 */
export async function approveCourseRequest(input: {
  tenantId: string;
  request: CourseRequest;
  deciderUserId: string;
  note: string | null;
}): Promise<{ course: Course; request: CourseRequest } | null> {
  const { tenantId, request } = input;
  const result = await db.transaction(async (tx) => {
    // Claim the request first, guarded on its status: if another decision landed meanwhile, no row
    // comes back and nothing below runs, so no course is created for a request that was declined.
    const [claimed] = await tx
      .update(courseRequests)
      .set({ status: "approved", decisionNote: input.note, decidedByUserId: input.deciderUserId, decidedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(courseRequests.id, request.id), eq(courseRequests.tenantId, tenantId), eq(courseRequests.status, "requested")))
      .returning();
    if (!claimed) return null;

    const baseSlug = slugify(request.title) || "course";
    let slug = baseSlug;
    for (let i = 2; i < 50; i++) {
      const hit = await tx
        .select({ id: courses.id })
        .from(courses)
        .where(and(eq(courses.tenantId, tenantId), eq(courses.instructorId, request.requesterUserId), eq(courses.slug, slug)))
        .limit(1);
      if (!hit[0]) break;
      slug = `${baseSlug}-${i}`;
    }
    const [course] = await tx
      .insert(courses)
      .values({
        tenantId,
        instructorId: request.requesterUserId,
        title: request.title,
        slug,
        description: request.description,
        ...NEW_COURSE_STATE,
      })
      .returning();
    const [updated] = await tx
      .update(courseRequests)
      .set({ courseId: course.id })
      .where(eq(courseRequests.id, request.id))
      .returning();
    return { course, request: updated ?? claimed };
  });
  if (result) expireCourse(tenantId, result.course.id);
  return result;
}

/** Decline with the note the teacher reads. Null when the request was decided meanwhile. */
export async function declineCourseRequest(input: {
  tenantId: string;
  requestId: string;
  deciderUserId: string;
  note: string;
}): Promise<CourseRequest | null> {
  const [updated] = await db
    .update(courseRequests)
    .set({ status: "declined", decisionNote: input.note, decidedByUserId: input.deciderUserId, decidedAt: new Date(), updatedAt: new Date() })
    .where(and(eq(courseRequests.id, input.requestId), eq(courseRequests.tenantId, input.tenantId), eq(courseRequests.status, "requested")))
    .returning();
  return updated ?? null;
}

/** The account emails of this school's admins, for the request notification. Tenant-scoped. */
export async function listSchoolAdminEmails(tenantId: string): Promise<string[]> {
  const rows = await db
    .select({ email: users.email })
    .from(tenantMemberships)
    .innerJoin(users, eq(users.id, tenantMemberships.userId))
    .where(and(eq(tenantMemberships.tenantId, tenantId), eq(tenantMemberships.role, "brand_admin")));
  return rows.map((r) => r.email);
}
