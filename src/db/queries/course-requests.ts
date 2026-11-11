import "server-only";
import { and, desc, eq } from "drizzle-orm";
import { alias } from "drizzle-orm/pg-core";
import { db } from "@/db/client";
import {
  courseInstructorChanges,
  courseOffers,
  courseRequests,
  courses,
  tenantMemberships,
  userProfiles,
  users,
  type Course,
  type CourseRequest,
} from "@/db/schema";
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
  /** Kind existing: the requested course's title and who teaches it now, by name or username. */
  requestedCourseTitle: string | null;
  requestedCourseInstructorId: string | null;
  requestedCourseInstructorLabel: string | null;
}

// The requested course (kind existing) and its current instructor's profile, joined under their own names.
const requestedCourse = alias(courses, "requested_course");
const requestedInstructor = alias(userProfiles, "requested_instructor");

const withRequester = {
  request: courseRequests,
  requesterName: users.name,
  requesterDisplayName: userProfiles.displayName,
  requesterEmail: users.email,
  requesterUsername: userProfiles.username,
  courseSlug: courses.slug,
  requestedCourseTitle: requestedCourse.title,
  requestedCourseInstructorId: requestedCourse.instructorId,
  requestedInstructorDisplayName: requestedInstructor.displayName,
  requestedInstructorUsername: requestedInstructor.username,
};

function toRow(r: {
  request: CourseRequest;
  requesterName: string | null;
  requesterDisplayName: string | null;
  requesterEmail: string;
  requesterUsername: string | null;
  courseSlug: string | null;
  requestedCourseTitle: string | null;
  requestedCourseInstructorId: string | null;
  requestedInstructorDisplayName: string | null;
  requestedInstructorUsername: string | null;
}): CourseRequestRow {
  return {
    ...r.request,
    requesterName: r.requesterDisplayName?.trim() || r.requesterName?.trim() || null,
    requesterEmail: r.requesterEmail,
    requesterUsername: r.requesterUsername,
    courseSlug: r.courseSlug,
    requestedCourseTitle: r.requestedCourseTitle,
    requestedCourseInstructorId: r.requestedCourseInstructorId,
    requestedCourseInstructorLabel:
      r.requestedInstructorDisplayName?.trim() || (r.requestedInstructorUsername ? `@${r.requestedInstructorUsername}` : r.requestedCourseInstructorId ? "unnamed" : null),
  };
}

/** Join the requester, the linked course and, for kind existing, the requested course and its teacher. */
function selectRows() {
  return db
    .select(withRequester)
    .from(courseRequests)
    .innerJoin(users, eq(users.id, courseRequests.requesterUserId))
    .leftJoin(userProfiles, eq(userProfiles.userId, courseRequests.requesterUserId))
    .leftJoin(courses, eq(courses.id, courseRequests.courseId))
    .leftJoin(requestedCourse, eq(requestedCourse.id, courseRequests.requestedCourseId))
    .leftJoin(requestedInstructor, eq(requestedInstructor.userId, requestedCourse.instructorId));
}

export async function createCourseRequest(tenantId: string, requesterUserId: string, input: CourseRequestInput): Promise<CourseRequest> {
  const [row] = await db
    .insert(courseRequests)
    .values({ tenantId, requesterUserId, title: input.title, description: input.description, reason: input.reason, briefUrl: input.briefUrl })
    .returning();
  return row;
}

/**
 * A request to teach an EXISTING course of this school. The caller resolved the course in this tenant
 * (tenant-scoped DAL); the row keeps its title at the time of asking, so the request still reads right
 * if the course is renamed, and points at it by id.
 */
export async function createExistingCourseRequest(
  tenantId: string,
  requesterUserId: string,
  input: { course: Pick<Course, "id" | "title">; reason: string },
): Promise<CourseRequest> {
  const [row] = await db
    .insert(courseRequests)
    .values({
      tenantId,
      requesterUserId,
      kind: "existing",
      requestedCourseId: input.course.id,
      title: input.course.title,
      description: "",
      reason: input.reason,
    })
    .returning();
  return row;
}

/** Has this teacher already asked for this existing course, with no answer yet? */
export async function hasOpenExistingRequest(tenantId: string, requesterUserId: string, courseId: string): Promise<boolean> {
  const rows = await db
    .select({ id: courseRequests.id })
    .from(courseRequests)
    .where(
      and(
        eq(courseRequests.tenantId, tenantId),
        eq(courseRequests.requesterUserId, requesterUserId),
        eq(courseRequests.requestedCourseId, courseId),
        eq(courseRequests.status, "requested"),
      ),
    )
    .limit(1);
  return Boolean(rows[0]);
}

/** Every request on this school, newest first; `status` narrows it. */
export async function listCourseRequests(tenantId: string, status?: "requested" | "approved" | "declined"): Promise<CourseRequestRow[]> {
  const conds = [eq(courseRequests.tenantId, tenantId)];
  if (status) conds.push(eq(courseRequests.status, status));
  const rows = await selectRows()
    .where(and(...conds))
    .orderBy(desc(courseRequests.createdAt));
  return rows.map(toRow);
}

/** One teacher's own requests on this school, newest first. */
export async function listOwnCourseRequests(tenantId: string, requesterUserId: string): Promise<CourseRequestRow[]> {
  const rows = await selectRows()
    .where(and(eq(courseRequests.tenantId, tenantId), eq(courseRequests.requesterUserId, requesterUserId)))
    .orderBy(desc(courseRequests.createdAt));
  return rows.map(toRow);
}

/** By id, on THIS school only: another school's request resolves to null (the route answers 404). */
export async function getCourseRequest(tenantId: string, id: string): Promise<CourseRequestRow | null> {
  const rows = await selectRows()
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

/**
 * Approve an EXISTING-course request: hand the course to the requester instead of creating a draft. In
 * one transaction: claim the request (guarded on its status), move the course's instructor, log the change
 * in course_instructor_changes (source course-request, the decider as the actor), withdraw any open offer
 * for the course, and link the course on the request. The caller has already run both rules
 * (decideCourseRequestAction and, through checkInstructorAssignment, decideInstructorAssignment). Null
 * when the request was decided meanwhile, so nothing changes.
 */
export async function approveExistingCourseRequest(input: {
  tenantId: string;
  request: CourseRequest;
  course: Course;
  deciderUserId: string;
  deciderRole: "platform_owner" | "brand_admin";
  note: string | null;
}): Promise<{ course: Course; request: CourseRequest } | null> {
  const { tenantId, request, course } = input;
  const result = await db.transaction(async (tx) => {
    const now = new Date();
    const [claimed] = await tx
      .update(courseRequests)
      .set({ status: "approved", decisionNote: input.note, decidedByUserId: input.deciderUserId, decidedAt: now, updatedAt: now, courseId: course.id })
      .where(and(eq(courseRequests.id, request.id), eq(courseRequests.tenantId, tenantId), eq(courseRequests.status, "requested")))
      .returning();
    if (!claimed) return null;
    const [moved] = await tx
      .update(courses)
      .set({ instructorId: request.requesterUserId, updatedAt: now })
      .where(and(eq(courses.id, course.id), eq(courses.tenantId, tenantId)))
      .returning();
    if (!moved) throw new Error("requested course vanished during approval");
    if (course.instructorId !== request.requesterUserId) {
      await tx.insert(courseInstructorChanges).values({
        tenantId,
        courseId: course.id,
        fromInstructorId: course.instructorId,
        toInstructorId: request.requesterUserId,
        actorUserId: input.deciderUserId,
        actorRole: input.deciderRole,
        source: "course-request",
      });
    }
    await tx
      .update(courseOffers)
      .set({ status: "withdrawn", decidedAt: now, updatedAt: now })
      .where(and(eq(courseOffers.courseId, course.id), eq(courseOffers.tenantId, tenantId), eq(courseOffers.status, "offered")));
    return { course: moved, request: claimed };
  });
  if (result) expireCourse(tenantId, course.id);
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
