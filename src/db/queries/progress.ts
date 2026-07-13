import { and, desc, eq, isNotNull, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { lessonProgress, lessons, type LessonProgress } from "@/db/schema";

/** Ids of lessons in a course the user has COMPLETED (merely viewing one never counts). */
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

export interface CourseProgressSummary {
  /** Lessons with a `completed_at`. The ONLY set that feeds %, gating, and certificates. */
  completedLessonIds: Set<string>;
  /** The lesson this learner most recently OPENED in this course — the resume anchor. */
  lastViewedLessonId: string | null;
  /** lessonId → last playback position, so a media lesson resumes mid-track. */
  watchSeconds: Map<string, number>;
}

/**
 * Everything the course/lesson pages need about one learner's progress in one course, in ONE
 * round trip (it replaces — rather than adds to — the old completed-ids query, so the resume
 * feature costs no extra Neon egress). Rows are capped by the lessons the learner has actually
 * touched, so even FAA Part 107 (118 lessons) is a few KB of three small columns.
 */
export async function getCourseProgressSummary(
  userId: string,
  courseId: string,
): Promise<CourseProgressSummary> {
  const rows = await db
    .select({
      lessonId: lessonProgress.lessonId,
      completedAt: lessonProgress.completedAt,
      lastViewedAt: lessonProgress.lastViewedAt,
      watchSeconds: lessonProgress.watchSeconds,
    })
    .from(lessonProgress)
    .innerJoin(lessons, eq(lessons.id, lessonProgress.lessonId))
    .where(and(eq(lessonProgress.userId, userId), eq(lessons.courseId, courseId)));

  const completedLessonIds = new Set<string>();
  const watchSeconds = new Map<string, number>();
  let lastViewedLessonId: string | null = null;
  let lastViewedAt = 0;

  for (const r of rows) {
    if (r.completedAt) completedLessonIds.add(r.lessonId);
    if (r.watchSeconds > 0) watchSeconds.set(r.lessonId, r.watchSeconds);
    const at = r.lastViewedAt ? new Date(r.lastViewedAt).getTime() : 0;
    if (at > lastViewedAt) {
      lastViewedAt = at;
      lastViewedLessonId = r.lessonId;
    }
  }

  return { completedLessonIds, lastViewedLessonId, watchSeconds };
}

/** The lesson a learner most recently opened in a course, or null. Tenant scope rides on the course. */
export async function getLastViewedLessonId(userId: string, courseId: string): Promise<string | null> {
  const rows = await db
    .select({ lessonId: lessonProgress.lessonId })
    .from(lessonProgress)
    .innerJoin(lessons, eq(lessons.id, lessonProgress.lessonId))
    .where(
      and(
        eq(lessonProgress.userId, userId),
        eq(lessons.courseId, courseId),
        isNotNull(lessonProgress.lastViewedAt),
      ),
    )
    .orderBy(desc(lessonProgress.lastViewedAt))
    .limit(1);
  return rows[0]?.lessonId ?? null;
}

export async function getProgress(userId: string, lessonId: string): Promise<LessonProgress | null> {
  const rows = await db
    .select()
    .from(lessonProgress)
    .where(and(eq(lessonProgress.userId, userId), eq(lessonProgress.lessonId, lessonId)))
    .limit(1);
  return rows[0] ?? null;
}

/**
 * Record that a learner OPENED a lesson. Deliberately NOT a completion: it sets only
 * `last_viewed_at`, and does not touch `completed_at` (so the % / certificate are untouched)
 * or `updated_at` (which stays honest bookkeeping for real progress writes).
 *
 * Cheap by construction — Neon egress is a live budget concern:
 *   • one statement, no reads, no returning clause;
 *   • the `setWhere` guard makes a repeat ping within 30s a matched-but-not-updated row, so a
 *     chatty or re-mounting client can't produce a stream of row versions. The client throttles
 *     too (see LessonViewPing) — this is the belt-and-braces backstop, since the throttle lives
 *     in code a learner's browser controls.
 */
export async function recordLessonView(userId: string, lessonId: string): Promise<void> {
  await db
    .insert(lessonProgress)
    .values({ userId, lessonId, lastViewedAt: new Date() })
    .onConflictDoUpdate({
      target: [lessonProgress.userId, lessonProgress.lessonId],
      set: { lastViewedAt: new Date() },
      // Refers to the EXISTING row (`excluded.*` would be the proposed one) — i.e. "only
      // actually write if the last ping for this lesson is older than 30 seconds".
      setWhere: sql`${lessonProgress.lastViewedAt} is null or ${lessonProgress.lastViewedAt} < now() - interval '30 seconds'`,
    });
}

/**
 * Record the learner's playback position in an audio/video lesson, so it resumes mid-track
 * instead of restarting (the FAA Part 107 course is 118 lessons of audio — restarting a
 * 12-minute track because you closed the tab is the whole problem).
 *
 * Also refreshes `last_viewed_at`: listening IS being there. Still not a completion.
 * Write volume is bounded by the player, which sends at most one update every ~20s plus one
 * on pause/leave — never on the timeupdate tick (which fires ~4x/second).
 */
export async function recordWatchSeconds(
  userId: string,
  lessonId: string,
  watchSeconds: number,
): Promise<void> {
  const now = new Date();
  await db
    .insert(lessonProgress)
    .values({ userId, lessonId, watchSeconds, lastViewedAt: now })
    .onConflictDoUpdate({
      target: [lessonProgress.userId, lessonProgress.lessonId],
      set: { watchSeconds, lastViewedAt: now },
    });
}

export async function upsertProgress(
  userId: string,
  lessonId: string,
  patch: { completed?: boolean; watchSeconds?: number; quizScore?: number; quizAnswers?: unknown },
): Promise<void> {
  await db
    .insert(lessonProgress)
    .values({
      userId,
      lessonId,
      completedAt: patch.completed ? new Date() : null,
      watchSeconds: patch.watchSeconds ?? 0,
      quizScore: patch.quizScore != null ? String(patch.quizScore) : null,
      quizAnswers: patch.quizAnswers ?? null,
    })
    .onConflictDoUpdate({
      target: [lessonProgress.userId, lessonProgress.lessonId],
      set: {
        ...(patch.completed !== undefined ? { completedAt: patch.completed ? new Date() : null } : {}),
        ...(patch.watchSeconds !== undefined ? { watchSeconds: patch.watchSeconds } : {}),
        ...(patch.quizScore !== undefined ? { quizScore: String(patch.quizScore) } : {}),
        ...(patch.quizAnswers !== undefined ? { quizAnswers: patch.quizAnswers } : {}),
        updatedAt: new Date(),
      },
    });
}
