import "server-only";
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { quizAttempts, type QuizAttempt } from "@/db/schema/learning";

// Append one row per quiz submission (history). lesson_progress still holds the latest for gating.
export async function recordQuizAttempt(input: {
  tenantId: string;
  userId: string;
  courseId: string;
  lessonId: string;
  score: number;
  passed: boolean;
  correct: number;
  total: number;
  responses: { questionIndex: number; optionIndex: number; correct: boolean }[];
}): Promise<void> {
  await db.insert(quizAttempts).values(input);
}

// All of a learner's quiz attempts in one course, oldest-first (so the UI can show scores over
// time). Tenant-scoped by the caller. Grouping/aggregation happens in the results view.
export async function getUserCourseQuizAttempts(
  tenantId: string,
  userId: string,
  courseId: string,
): Promise<QuizAttempt[]> {
  return db
    .select()
    .from(quizAttempts)
    .where(
      and(
        eq(quizAttempts.tenantId, tenantId),
        eq(quizAttempts.userId, userId),
        eq(quizAttempts.courseId, courseId),
      ),
    )
    .orderBy(asc(quizAttempts.createdAt));
}
