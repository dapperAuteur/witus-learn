// Pure quiz-placement logic for the FAA import (scripts/seed-faa.ts), split out so it can
// be unit-tested (tests/faa-quiz-placement.test.ts) without importing the seed script — which
// runs its `main()` on load and would touch content/ and the DB.
//
// Background: the FAA course's module quizzes historically ALL sat at the module end (see
// content/drone-curriculum/academy-import/quizzes-import.csv, whose `lesson_order` is a global
// end-of-course sequence number, not a within-module lesson index). To let a quiz that covers a
// specific SECTION of a module land mid-module instead, a quiz may opt in with an
// `after_lesson_order` = the lesson `n` it should follow. This module decides the resulting order.

/** One slot in a module's rendered order. */
export type ModuleItemPlan =
  | { kind: "lesson"; lessonNumber: number }
  | { kind: "review" }
  | { kind: "quiz"; quizIndex: number; afterLessonNumber: number | null };

/**
 * Decide the display order of a module's items (lessons, its review, its quizzes).
 *
 * Lessons always run in ascending `n`. A quiz whose `afterLessonNumber` names a lesson `n`
 * that this module actually has is placed immediately AFTER that lesson — a mid-module quiz
 * lands mid-module. Several quizzes tagged for the same lesson keep their input order. A quiz
 * with no `afterLessonNumber`, or one pointing at a lesson the module does not have, falls back
 * to the module END, after the review — exactly where the legacy import put every quiz. So when
 * NOTHING is tagged the output is `lessons…, review, quizzes…`, byte-for-byte the old layout;
 * turning this on is a no-op until the CSV opts a quiz in.
 *
 * `quizAfterLessonNumbers[i]` corresponds to the caller's quiz array index `i`; the returned
 * `quiz` slots carry that same `quizIndex`, and every index appears exactly once (nothing is
 * dropped or duplicated).
 *
 * Pure and side-effect-free.
 */
export function sequenceModuleItems(
  lessonNumbers: number[],
  quizAfterLessonNumbers: (number | null | undefined)[],
  hasReview: boolean,
): ModuleItemPlan[] {
  const sortedNs = [...lessonNumbers].sort((a, b) => a - b);
  const lessonSet = new Set(sortedNs);
  const placed = new Array(quizAfterLessonNumbers.length).fill(false);
  // A quiz only interleaves when its target lesson really exists in the module.
  const resolvedAfter = quizAfterLessonNumbers.map((a) => (a != null && lessonSet.has(a) ? a : null));
  const out: ModuleItemPlan[] = [];

  for (const n of sortedNs) {
    out.push({ kind: "lesson", lessonNumber: n });
    resolvedAfter.forEach((after, i) => {
      if (!placed[i] && after === n) {
        out.push({ kind: "quiz", quizIndex: i, afterLessonNumber: after });
        placed[i] = true;
      }
    });
  }
  if (hasReview) out.push({ kind: "review" });
  // Everything not interleaved (untagged, or an unresolved tag) stays at the module end, in
  // input order — preserving the current all-at-the-end behaviour for untagged quizzes.
  resolvedAfter.forEach((_after, i) => {
    if (!placed[i]) {
      out.push({ kind: "quiz", quizIndex: i, afterLessonNumber: null });
      placed[i] = true;
    }
  });
  return out;
}
