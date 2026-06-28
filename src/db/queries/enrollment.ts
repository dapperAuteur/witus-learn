import { randomBytes } from "node:crypto";
import { and, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  courseCompletions,
  courses,
  enrollments,
  lessons,
  lessonProgress,
  userProfiles,
  type Course,
  type CourseCompletion,
  type Enrollment,
} from "@/db/schema";

export async function isEnrolled(userId: string, courseId: string): Promise<boolean> {
  const rows = await db
    .select({ id: enrollments.id })
    .from(enrollments)
    .where(
      and(
        eq(enrollments.userId, userId),
        eq(enrollments.courseId, courseId),
        eq(enrollments.status, "active"),
      ),
    )
    .limit(1);
  return rows.length > 0;
}

/** Idempotent free enrollment. Returns the existing or new active enrollment. */
export async function enrollFree(
  tenantId: string,
  userId: string,
  courseId: string,
): Promise<Enrollment> {
  await db
    .insert(enrollments)
    .values({ tenantId, userId, courseId })
    .onConflictDoNothing({
      target: [enrollments.userId, enrollments.courseId, enrollments.attemptNumber],
    });
  const rows = await db
    .select()
    .from(enrollments)
    .where(and(eq(enrollments.userId, userId), eq(enrollments.courseId, courseId)))
    .limit(1);
  return rows[0];
}

/** Idempotent enrollment from a paid Stripe checkout (called by the webhook). */
export async function enrollPaid(
  tenantId: string,
  userId: string,
  courseId: string,
  checkoutSessionId: string,
  subscriptionId?: string | null,
): Promise<void> {
  await db
    .insert(enrollments)
    .values({
      tenantId,
      userId,
      courseId,
      stripeCheckoutSessionId: checkoutSessionId,
      stripeSubscriptionId: subscriptionId ?? null,
    })
    .onConflictDoNothing({
      target: [enrollments.userId, enrollments.courseId, enrollments.attemptNumber],
    });
}

/** Cancel the enrollment tied to a Stripe subscription (subscription.deleted). */
export async function cancelEnrollmentBySubscription(subscriptionId: string): Promise<void> {
  await db
    .update(enrollments)
    .set({ status: "cancelled" })
    .where(eq(enrollments.stripeSubscriptionId, subscriptionId));
}

/** The current tenant's active enrollments for a user, with their courses. */
export async function listMyCourses(
  tenantId: string,
  userId: string,
): Promise<{ enrollment: Enrollment; course: Course }[]> {
  return db
    .select({ enrollment: enrollments, course: courses })
    .from(enrollments)
    .innerJoin(courses, eq(courses.id, enrollments.courseId))
    .where(and(eq(enrollments.tenantId, tenantId), eq(enrollments.userId, userId)))
    .orderBy(desc(enrollments.enrolledAt));
}

/** True when the user has completed every published lesson in the course. */
export async function hasCompletedAllLessons(userId: string, courseId: string): Promise<boolean> {
  const [{ total }] = await db
    .select({ total: sql<number>`count(*)::int` })
    .from(lessons)
    .where(and(eq(lessons.courseId, courseId), eq(lessons.isPublished, true)));
  if (total === 0) return false;

  const [{ done }] = await db
    .select({ done: sql<number>`count(*)::int` })
    .from(lessonProgress)
    .innerJoin(lessons, eq(lessons.id, lessonProgress.lessonId))
    .where(
      and(
        eq(lessonProgress.userId, userId),
        eq(lessons.courseId, courseId),
        eq(lessons.isPublished, true),
        sql`${lessonProgress.completedAt} is not null`,
      ),
    );
  return done >= total;
}

/** Idempotent completion. `created` is true only the first time (so the caller
 *  sends the certificate email exactly once). */
export async function createCompletion(
  userId: string,
  courseId: string,
): Promise<{ completion: CourseCompletion; created: boolean }> {
  const existing = await db
    .select()
    .from(courseCompletions)
    .where(and(eq(courseCompletions.userId, userId), eq(courseCompletions.courseId, courseId)))
    .limit(1);
  if (existing[0]) return { completion: existing[0], created: false };

  const [row] = await db
    .insert(courseCompletions)
    .values({ userId, courseId, verificationToken: randomBytes(16).toString("hex") })
    .onConflictDoNothing({ target: [courseCompletions.userId, courseCompletions.courseId] })
    .returning();
  if (row) return { completion: row, created: true };

  // Lost a race — read the row the other request inserted.
  const again = await db
    .select()
    .from(courseCompletions)
    .where(and(eq(courseCompletions.userId, userId), eq(courseCompletions.courseId, courseId)))
    .limit(1);
  return { completion: again[0], created: false };
}

export interface VerifiedCertificate {
  completion: CourseCompletion;
  course: Course;
  studentName: string | null;
}

/** Verify a certificate by token, SCOPED to the current tenant (a token for
 *  another brand's course must not verify on this host). */
export async function getCompletionByToken(
  tenantId: string,
  token: string,
): Promise<VerifiedCertificate | null> {
  const rows = await db
    .select({
      completion: courseCompletions,
      course: courses,
      studentName: userProfiles.displayName,
    })
    .from(courseCompletions)
    .innerJoin(courses, eq(courses.id, courseCompletions.courseId))
    .leftJoin(userProfiles, eq(userProfiles.userId, courseCompletions.userId))
    .where(and(eq(courseCompletions.verificationToken, token), eq(courses.tenantId, tenantId)))
    .limit(1);
  const row = rows[0];
  if (!row) return null;
  return { completion: row.completion, course: row.course, studentName: row.studentName };
}
