import { quizIntegrityLines, type CourseQuizIntegrity as QuizIntegritySummary } from "@/lib/quiz-integrity";

/**
 * "How this course's quizzes are built", a collapsed card under the standards block on a course page.
 *
 * The quiz-integrity rule (CLAUDE.md) is enforced in lint, where a learner never sees it. This shows
 * the same facts to the person deciding whether a course is worth their time: whether the answer
 * options are reshuffled, whether the right answer can be found by length alone, whether each
 * question points back to the lesson that teaches it, and whether it explains itself. One sentence
 * per measure, counted from the quizzes themselves on every load (src/lib/quiz-integrity.ts), so no
 * badge can go stale.
 *
 * Takes COUNTS ONLY. The full course page computes them from the lessons it already holds; the
 * Coming-soon face gets them from a scoped query that never returns question text. A course with no
 * quiz renders NOTHING (the summary is null), and a measure with nothing to measure is left out
 * rather than shown as "0 of 0", the same choice CourseStandards makes for an unmapped course.
 */
export function CourseQuizIntegrity({ summary }: { summary: QuizIntegritySummary | null }) {
  if (!summary) return null;
  const { quizzes, questions } = summary;
  const lines = quizIntegrityLines(summary);

  return (
    <details className="group mt-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 px-4 text-sm font-medium pointer-coarse:min-h-12">
        <span aria-hidden="true">📝</span>
        <span>How this course&apos;s quizzes are built</span>
        {/* Same CSS-only affordance as CourseStandards: no state, no JS, and the native <summary>
            still announces expanded/collapsed to a screen reader. */}
        <span className="ml-auto text-xs text-neutral-600 group-open:hidden">show</span>
        <span className="ml-auto hidden text-xs text-neutral-600 group-open:inline">hide</span>
      </summary>
      <div className="px-4 pb-4 text-sm text-neutral-700 dark:text-neutral-300">
        <p className="mt-1">
          {quizzes} {quizzes === 1 ? "quiz" : "quizzes"}, {questions} {questions === 1 ? "question" : "questions"} in all.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-neutral-600">Counted from the quizzes themselves each time this page loads.</p>
      </div>
    </details>
  );
}
