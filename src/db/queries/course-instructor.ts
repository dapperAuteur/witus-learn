import "server-only";
import { and, eq, inArray } from "drizzle-orm";
import { db } from "@/db/client";
import {
  courseInstructorChanges,
  courseOffers,
  courses,
  tenantMemberships,
  userProfiles,
  users,
  type Course,
  type TenantRole,
} from "@/db/schema";
import { expireCourse } from "@/lib/cache-tags";
import { ensureUsernameById, instructorSlugTaken } from "@/db/queries/authoring";
import { isPlatformOwner } from "@/lib/session";
import {
  decideInstructorAssignment,
  type InstructorAssignmentDecision,
  type InstructorChangeSource,
} from "@/lib/course-instructor";

// Handing a course to a teacher: the database half of src/lib/course-instructor.ts, shared by the
// course settings PATCH, the Users page route and (through recordInstructorChange) the seeders. The
// course is already resolved in the request's tenant by the caller (tenant-scoped DAL), so every
// read here is keyed on that tenant and the target's role is their role on THAT school only.

export interface AssignInstructorInput {
  tenantId: string;
  course: Course;
  newInstructorId: string;
  actor: { userId: string; isOwner: boolean; isSchoolAdmin: boolean };
  source: Exclude<InstructorChangeSource, "seed">;
}

export type AssignInstructorResult =
  | { ok: true; changed: boolean; course: Course }
  | { ok: false; status: 400 | 403 | 404 | 409; error: string };

/** The target's role on the school, or null. */
export async function schoolRoleOf(tenantId: string, userId: string): Promise<TenantRole | null> {
  const [row] = await db
    .select({ role: tenantMemberships.role })
    .from(tenantMemberships)
    .where(and(eq(tenantMemberships.tenantId, tenantId), eq(tenantMemberships.userId, userId)))
    .limit(1);
  return (row?.role as TenantRole | undefined) ?? null;
}

/**
 * Decide only (src/lib/course-instructor.ts): gather the target's facts on this school and run the rule,
 * writing nothing. Used before an OFFER is made (src/lib/course-offers.ts), so the admin hears "isn't a
 * teacher of this school" when they offer, not when the teacher accepts, and again at acceptance.
 */
export async function checkInstructorAssignment(input: Omit<AssignInstructorInput, "source">): Promise<InstructorAssignmentDecision> {
  const { tenantId, course, newInstructorId, actor } = input;
  const sameAsNow = newInstructorId === course.instructorId;
  const mayAct = actor.isOwner || (actor.isSchoolAdmin && !course.ownerOnly);
  const needsTarget = mayAct && !sameAsNow;
  const [role, targetIsOwner, username, slugTaken] = needsTarget
    ? await Promise.all([
        schoolRoleOf(tenantId, newInstructorId),
        isPlatformOwner(newInstructorId),
        ensureUsernameById(newInstructorId),
        course.slug ? instructorSlugTaken(tenantId, newInstructorId, course.slug, course.id) : Promise.resolve(false),
      ])
    : [null, false, null, false];
  return decideInstructorAssignment({
    actor: { isOwner: actor.isOwner, isSchoolAdmin: actor.isSchoolAdmin },
    course: { instructorId: course.instructorId, ownerOnly: course.ownerOnly },
    target: { userId: newInstructorId, role, isPlatformOwner: targetIsOwner, hasUsername: Boolean(username), slugTaken },
  });
}

/**
 * Decide (src/lib/course-instructor.ts) and apply: update the course and write the
 * course_instructor_changes row in one transaction. A decision that changes nothing writes nothing.
 * An open offer for the course (course_offers) is withdrawn in the same transaction: the course has
 * a new teacher, so the offer no longer describes a change anyone can accept.
 */
export async function assignCourseInstructor(input: AssignInstructorInput): Promise<AssignInstructorResult> {
  const { tenantId, course, newInstructorId, actor } = input;
  const sameAsNow = newInstructorId === course.instructorId;
  // The target's facts are read only when they can change the answer (a real reassignment by an
  // actor the rule admits); the rule itself still runs for every caller.
  const mayAct = actor.isOwner || (actor.isSchoolAdmin && !course.ownerOnly);
  const needsTarget = mayAct && !sameAsNow;
  const [role, targetIsOwner, username, slugTaken] = needsTarget
    ? await Promise.all([
        schoolRoleOf(tenantId, newInstructorId),
        isPlatformOwner(newInstructorId),
        ensureUsernameById(newInstructorId),
        course.slug ? instructorSlugTaken(tenantId, newInstructorId, course.slug, course.id) : Promise.resolve(false),
      ])
    : [null, false, null, false];

  const decision: InstructorAssignmentDecision = decideInstructorAssignment({
    actor: { isOwner: actor.isOwner, isSchoolAdmin: actor.isSchoolAdmin },
    course: { instructorId: course.instructorId, ownerOnly: course.ownerOnly },
    target: { userId: newInstructorId, role, isPlatformOwner: targetIsOwner, hasUsername: Boolean(username), slugTaken },
  });
  if (!decision.ok) return decision;
  if (!decision.changed) return { ok: true, changed: false, course };

  const updated = await db.transaction(async (tx) => {
    const [row] = await tx
      .update(courses)
      .set({ instructorId: newInstructorId, updatedAt: new Date() })
      .where(and(eq(courses.id, course.id), eq(courses.tenantId, tenantId)))
      .returning();
    if (!row) return null;
    await tx.insert(courseInstructorChanges).values({
      tenantId,
      courseId: course.id,
      fromInstructorId: course.instructorId,
      toInstructorId: newInstructorId,
      actorUserId: actor.userId,
      actorRole: decision.actorRole,
      source: input.source,
    });
    await tx
      .update(courseOffers)
      .set({ status: "withdrawn", decidedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(courseOffers.courseId, course.id), eq(courseOffers.tenantId, tenantId), eq(courseOffers.status, "offered")));
    return row;
  });
  if (!updated) return { ok: false, status: 404, error: "Not found" };
  expireCourse(tenantId, course.id);
  return { ok: true, changed: true, course: updated };
}

/** Someone a course can be handed to on this school, with enough to recognise them in a picker. */
export interface AssignableTeacher {
  userId: string;
  role: TenantRole;
  username: string | null;
  displayName: string | null;
  name: string | null;
  email: string;
}

/** Every teacher and admin of ONE school, for the Users page's assignment form. Tenant-scoped. */
export async function listAssignableTeachers(tenantId: string): Promise<AssignableTeacher[]> {
  const rows = await db
    .select({
      userId: tenantMemberships.userId,
      role: tenantMemberships.role,
      username: userProfiles.username,
      displayName: userProfiles.displayName,
      name: users.name,
      email: users.email,
    })
    .from(tenantMemberships)
    .innerJoin(users, eq(users.id, tenantMemberships.userId))
    .leftJoin(userProfiles, eq(userProfiles.userId, tenantMemberships.userId))
    .where(and(eq(tenantMemberships.tenantId, tenantId), inArray(tenantMemberships.role, ["instructor", "brand_admin"])))
    .orderBy(users.email);
  return rows.map((r) => ({ ...r, role: r.role as TenantRole }));
}
