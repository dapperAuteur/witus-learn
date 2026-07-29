import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { userProfiles } from "@/db/schema";
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
