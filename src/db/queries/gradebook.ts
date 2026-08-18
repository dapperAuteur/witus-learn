import { and, eq, inArray, isNotNull, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  cohortMembers,
  cohorts,
  courses,
  enrollments,
  lessonProgress,
  lessons,
  quizAttempts,
  userProfiles,
  users,
} from "@/db/schema";
import { listMembers } from "./cohorts";
import { listMyCourses } from "./enrollment";
import { getCourseProgressSummary } from "./progress";
import { getUserCourseQuizAttempts } from "./quiz-attempts";

// The gradebook (plans/50): one row per (student, enrolled course) with the numbers a teacher, school,
// or parent actually asks for. Deliberately limited to values that are directly available and
// unambiguous (a completed-lesson COUNT, not a percentage whose denominator invites a wrong answer;
// the best of a learner's recorded quiz scores). Everything is tenant-scoped through the callers.
//
// One learner's report (Phase 2, the parent/family view) and a whole cohort's (Phase 1, teacher/school)
// are the SAME body: getCohortGradebook is just getLearnerGradebook run per member, so there is a single
// place where "what a gradebook row is" lives. Cohorts are class-sized, so a per-member loop (a couple
// of small reads per enrolled course) is fine; if a cohort ever grew large this would be the place to
// batch (see the plan).

export interface GradebookRow {
  student: string;
  courseTitle: string;
  lessonsCompleted: number;
  /** Best of the learner's recorded quiz scores (0-100), or null if they have not taken a quiz yet. */
  bestQuiz: number | null;
  enrolledAt: Date;
}

/** A learner's display name (displayName -> username -> "Learner"), matching listMembers so a cohort
 *  row and a family row show the same name. Not tenant-scoped: a profile name is global to the user. */
export async function getLearnerName(userId: string): Promise<string> {
  const rows = await db
    .select({ displayName: userProfiles.displayName, username: userProfiles.username })
    .from(userProfiles)
    .where(eq(userProfiles.userId, userId))
    .limit(1);
  return rows[0]?.displayName ?? rows[0]?.username ?? "Learner";
}

/** One learner's gradebook: per enrolled course, completion count + best quiz score, within `tenantId`.
 *  The caller MUST authorize first (the learner themselves, a cohort owner / tenant admin, or the
 *  learner's guardian via isGuardianOf); this only reads within `tenantId`. */
export async function getLearnerGradebook(tenantId: string, userId: string): Promise<GradebookRow[]> {
  const student = await getLearnerName(userId);
  const courses = await listMyCourses(tenantId, userId);
  const rows: GradebookRow[] = [];

  for (const { enrollment, course } of courses) {
    const [summary, attempts] = await Promise.all([
      getCourseProgressSummary(userId, course.id),
      getUserCourseQuizAttempts(tenantId, userId, course.id),
    ]);
    rows.push({
      student,
      courseTitle: course.title,
      lessonsCompleted: summary.completedLessonIds.size,
      bestQuiz: attempts.length ? Math.max(...attempts.map((a) => a.score)) : null,
      enrolledAt: enrollment.enrolledAt,
    });
  }

  return rows;
}

/** Every enrolled student in a cohort, with per-course completion count and best quiz score. The
 *  caller MUST authorize first (cohort owner or tenant admin); this only reads within `tenantId`. */
export async function getCohortGradebook(tenantId: string, cohortId: string): Promise<GradebookRow[]> {
  const members = await listMembers(tenantId, cohortId);
  const rows: GradebookRow[] = [];
  for (const member of members) {
    rows.push(...(await getLearnerGradebook(tenantId, member.userId)));
  }
  return rows;
}

// The school roll-up (plans/50, Phase 3's read-only half): ONE row per learner across the WHOLE
// tenant, for the tenant's admin. Unlike the per-cohort gradebook above (class-sized, per-member
// loop), a school can hold every learner on the brand, so this aggregates in four grouped queries
// instead of a loop, then merges by userId in memory. Same numbers as a GradebookRow, rolled up:
// a completed-lesson COUNT (not a percentage), and the average of the learner's best score per
// course (each course counts once no matter how many retakes).

export interface SchoolRollupRow {
  userId: string;
  student: string;
  email: string;
  /** Enrollments in this tenant (matches listMyCourses: any status, so history is not hidden). */
  coursesEnrolled: number;
  lessonsCompleted: number;
  /** Rounded average of the learner's best quiz score per course (0-100), or null if no quiz yet. */
  bestQuizAvg: number | null;
  /** Names of this tenant's cohorts the learner belongs to (may be empty). */
  cohortNames: string[];
}

/** Tenant-wide gradebook roll-up. The caller MUST authorize first (tenant admin / platform owner);
 *  every sub-query filters `tenantId`, so nothing from another brand can appear in the result. */
export async function getSchoolRollup(tenantId: string): Promise<SchoolRollupRow[]> {
  // Best score per (learner, course) first, so a retaken quiz never counts twice in the average.
  const bestPerCourse = db
    .select({
      userId: quizAttempts.userId,
      best: sql<number>`max(${quizAttempts.score})`.as("best"),
    })
    .from(quizAttempts)
    .where(eq(quizAttempts.tenantId, tenantId))
    .groupBy(quizAttempts.userId, quizAttempts.courseId)
    .as("best_per_course");

  const [enrolled, completed, quizAvgs, cohortNames] = await Promise.all([
    db
      .select({ userId: enrollments.userId, n: sql<number>`count(*)::int` })
      .from(enrollments)
      .where(eq(enrollments.tenantId, tenantId))
      .groupBy(enrollments.userId),
    // lesson_progress has no tenant column; the tenant scope comes from the owning course.
    db
      .select({ userId: lessonProgress.userId, n: sql<number>`count(*)::int` })
      .from(lessonProgress)
      .innerJoin(lessons, eq(lessons.id, lessonProgress.lessonId))
      .innerJoin(courses, eq(courses.id, lessons.courseId))
      .where(and(eq(courses.tenantId, tenantId), isNotNull(lessonProgress.completedAt)))
      .groupBy(lessonProgress.userId),
    db
      .select({
        userId: bestPerCourse.userId,
        avg: sql<number>`round(avg(${bestPerCourse.best}))::int`,
      })
      .from(bestPerCourse)
      .groupBy(bestPerCourse.userId),
    db
      .select({
        userId: cohortMembers.userId,
        names: sql<string[]>`array_agg(${cohorts.name} order by ${cohorts.name})`,
      })
      .from(cohortMembers)
      .innerJoin(cohorts, eq(cohorts.id, cohortMembers.cohortId))
      .where(eq(cohortMembers.tenantId, tenantId))
      .groupBy(cohortMembers.userId),
  ]);

  // A learner belongs to the school if they hold an enrollment OR a cohort seat in this tenant
  // (progress and quiz rows imply an enrollment, so those sets add nobody new).
  const userIds = [...new Set([...enrolled.map((r) => r.userId), ...cohortNames.map((r) => r.userId)])];
  if (userIds.length === 0) return [];

  const identities = await db
    .select({
      userId: users.id,
      email: users.email,
      displayName: userProfiles.displayName,
      username: userProfiles.username,
    })
    .from(users)
    .leftJoin(userProfiles, eq(userProfiles.userId, users.id))
    .where(inArray(users.id, userIds));

  const enrolledBy = new Map(enrolled.map((r) => [r.userId, r.n]));
  const completedBy = new Map(completed.map((r) => [r.userId, r.n]));
  const quizBy = new Map(quizAvgs.map((r) => [r.userId, r.avg]));
  const cohortsBy = new Map(cohortNames.map((r) => [r.userId, r.names]));
  const identityBy = new Map(identities.map((r) => [r.userId, r]));

  const rows: SchoolRollupRow[] = userIds.map((userId) => {
    const who = identityBy.get(userId);
    return {
      userId,
      student: who?.displayName ?? who?.username ?? "Learner",
      email: who?.email ?? "",
      coursesEnrolled: enrolledBy.get(userId) ?? 0,
      lessonsCompleted: completedBy.get(userId) ?? 0,
      bestQuizAvg: quizBy.get(userId) ?? null,
      cohortNames: cohortsBy.get(userId) ?? [],
    };
  });
  rows.sort((a, b) => a.student.localeCompare(b.student) || a.userId.localeCompare(b.userId));
  return rows;
}
