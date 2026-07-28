import { listMembers } from "./cohorts";
import { listMyCourses } from "./enrollment";
import { getCourseProgressSummary } from "./progress";
import { getUserCourseQuizAttempts } from "./quiz-attempts";

// The cohort gradebook (plans/50, Phase 1): one row per (student, enrolled course) with the numbers a
// teacher or school actually asks for. Deliberately limited to values that are directly available and
// unambiguous (a completed-lesson COUNT, not a percentage whose denominator invites a wrong answer;
// the best of a learner's recorded quiz scores). Everything is tenant-scoped through the callers.
//
// Cohorts are class-sized, so a per-member loop (two small reads per enrolled course) is fine. If a
// cohort ever grew large this would be the place to batch; see the plan.

export interface GradebookRow {
  student: string;
  courseTitle: string;
  lessonsCompleted: number;
  /** Best of the learner's recorded quiz scores (0-100), or null if they have not taken a quiz yet. */
  bestQuiz: number | null;
  enrolledAt: Date;
}

/** Every enrolled student in a cohort, with per-course completion count and best quiz score. The
 *  caller MUST authorize first (cohort owner or tenant admin); this only reads within `tenantId`. */
export async function getCohortGradebook(tenantId: string, cohortId: string): Promise<GradebookRow[]> {
  const members = await listMembers(tenantId, cohortId);
  const rows: GradebookRow[] = [];

  for (const member of members) {
    const courses = await listMyCourses(tenantId, member.userId);
    for (const { enrollment, course } of courses) {
      const [summary, attempts] = await Promise.all([
        getCourseProgressSummary(member.userId, course.id),
        getUserCourseQuizAttempts(tenantId, member.userId, course.id),
      ]);
      rows.push({
        student: member.displayName,
        courseTitle: course.title,
        lessonsCompleted: summary.completedLessonIds.size,
        bestQuiz: attempts.length ? Math.max(...attempts.map((a) => a.score)) : null,
        enrolledAt: enrollment.enrolledAt,
      });
    }
  }

  return rows;
}
