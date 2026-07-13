// "Continue where you left off" — which lesson does a learner actually land on?
//
// lesson_progress is keyed on (user, lesson), so skipping around is recorded faithfully:
// there is no linear pointer to be wrong about. The mistake to avoid is INTERPRETING that
// data linearly. Sending a learner to the "first incomplete lesson in course order" sends
// someone who skipped ahead to lesson 20 all the way back to lesson 3 — technically their
// first gap, but not remotely where they left off.
//
// So resume is driven by lesson_progress.last_viewed_at (the lesson they most recently
// OPENED), with first-incomplete kept only as the fallback for a learner who has never
// opened anything. Pure + dependency-free so it can be unit-tested without a database.

export interface ResumeSelection<T> {
  /** The lesson the "Continue" button goes to. Null only when the course is fully complete. */
  lesson: T | null;
  /** `lesson` first, then the following unfinished lessons in course order (for an "Up next" list). */
  upNext: T[];
}

/**
 * Pick the lesson to resume.
 *
 * 1. Most recently viewed lesson is UNFINISHED → resume there. (The skip-around case: they
 *    were reading lesson 20, so they go back to lesson 20 — not back to the lesson-3 gap.)
 * 2. Most recently viewed lesson is FINISHED → the next unfinished lesson after it, so
 *    finishing a lesson rolls forward instead of bouncing back to an earlier gap.
 * 3. Nothing viewed (or everything after the last view is done) → first unfinished lesson,
 *    which for a brand-new learner is simply lesson 1.
 * 4. Nothing unfinished → null (course complete).
 *
 * NOTE "viewed" is a strictly weaker signal than "completed" and never stands in for it —
 * `completedIds` is the only input that decides what counts as done.
 *
 * @param lessons Published lessons in course order.
 * @param completedIds Ids with a `completed_at` (NOT ids that were merely viewed).
 * @param lastViewedLessonId Most recent `last_viewed_at`, or null if they never opened one.
 */
export function selectResume<T extends { id: string }>(
  lessons: readonly T[],
  completedIds: ReadonlySet<string>,
  lastViewedLessonId: string | null,
  limit = 3,
): ResumeSelection<T> {
  const unfinished = lessons.filter((l) => !completedIds.has(l.id));
  if (unfinished.length === 0) return { lesson: null, upNext: [] };

  const viewedIdx = lastViewedLessonId ? lessons.findIndex((l) => l.id === lastViewedLessonId) : -1;

  let start: T | undefined;
  if (viewedIdx >= 0) {
    const viewed = lessons[viewedIdx];
    start = completedIds.has(viewed.id)
      ? lessons.slice(viewedIdx + 1).find((l) => !completedIds.has(l.id)) // (2) finished it → roll forward
      : viewed; // (1) left off part-way through → go back to it
  }
  start ??= unfinished[0]; // (3) never opened anything, or the tail after the last view is done

  const startIdx = lessons.indexOf(start);
  const after = lessons.slice(startIdx + 1).filter((l) => !completedIds.has(l.id));
  return { lesson: start, upNext: [start, ...after].slice(0, limit) };
}
