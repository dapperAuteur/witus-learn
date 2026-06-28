import { and, eq, isNotNull } from "drizzle-orm";
import { db } from "@/db/client";
import { lessonProgress, lessons, type LessonProgress } from "@/db/schema";

/** Ids of lessons in a course the user has completed. */
export async function getCompletedLessonIds(userId: string, courseId: string): Promise<string[]> {
  const rows = await db
    .select({ lessonId: lessonProgress.lessonId })
    .from(lessonProgress)
    .innerJoin(lessons, eq(lessons.id, lessonProgress.lessonId))
    .where(
      and(
        eq(lessonProgress.userId, userId),
        eq(lessons.courseId, courseId),
        isNotNull(lessonProgress.completedAt),
      ),
    );
  return rows.map((r) => r.lessonId);
}

export async function getProgress(userId: string, lessonId: string): Promise<LessonProgress | null> {
  const rows = await db
    .select()
    .from(lessonProgress)
    .where(and(eq(lessonProgress.userId, userId), eq(lessonProgress.lessonId, lessonId)))
    .limit(1);
  return rows[0] ?? null;
}

export async function upsertProgress(
  userId: string,
  lessonId: string,
  patch: { completed?: boolean; watchSeconds?: number },
): Promise<void> {
  await db
    .insert(lessonProgress)
    .values({
      userId,
      lessonId,
      completedAt: patch.completed ? new Date() : null,
      watchSeconds: patch.watchSeconds ?? 0,
    })
    .onConflictDoUpdate({
      target: [lessonProgress.userId, lessonProgress.lessonId],
      set: {
        ...(patch.completed !== undefined ? { completedAt: patch.completed ? new Date() : null } : {}),
        ...(patch.watchSeconds !== undefined ? { watchSeconds: patch.watchSeconds } : {}),
        updatedAt: new Date(),
      },
    });
}
