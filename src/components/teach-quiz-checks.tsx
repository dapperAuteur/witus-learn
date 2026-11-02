import {
  QUIZ_CHECKS_EMPTY,
  QUIZ_CHECKS_FIX_ADVICE,
  QUIZ_CHECKS_SMALL,
  quizIntegrityLines,
  type CourseQuizIntegrity,
  type FailingQuizBank,
} from "@/lib/quiz-integrity";

/**
 * "Quiz checks" on /teach/[courseId] (plans/98 v2): the same sentences the public course panel shows
 * ("How this course's quizzes are built"), plus, for the course's editors only, the measured quizzes
 * that do not pass the length check yet, each linking to its lesson in the Lessons list on this page.
 *
 * Read from the DATABASE (ScopedDb.courseQuizIntegrity and listFailingQuizBanks), so it checks every
 * quiz the course holds, however it got there, with the figures the public panel shows. The lint
 * guards cover only the course files in the repository.
 *
 * Server-rendered with the page. A failed read shows an alert here and the rest of the page renders.
 */
export function TeachQuizChecks({
  summary,
  failing,
  failed = false,
}: {
  summary: CourseQuizIntegrity | null;
  failing: FailingQuizBank[];
  /** The measure query threw; say so instead of guessing. */
  failed?: boolean;
}) {
  return (
    <section aria-labelledby="quiz-checks-heading" className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 id="quiz-checks-heading" className="font-semibold">
        Quiz checks
      </h2>
      {failed ? (
        <p role="alert" className="mt-2 text-sm text-amber-800 dark:text-amber-300">
          Quiz checks could not load. The rest of this page is unaffected; reload to try again.
        </p>
      ) : !summary ? (
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{QUIZ_CHECKS_EMPTY}</p>
      ) : (
        <>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            What learners and educators read under &ldquo;How this course&apos;s quizzes are built&rdquo; on the course page.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            {quizIntegrityLines(summary).map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          {!summary.balance ? (
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{QUIZ_CHECKS_SMALL}</p>
          ) : null}
          {failing.length > 0 ? (
            <div className="mt-3 rounded-md bg-amber-50 p-3 text-sm text-amber-950 dark:bg-amber-950/40 dark:text-amber-100">
              <p className="font-medium">
                {failing.length === 1 ? "This quiz does not pass the length check yet:" : `These ${failing.length} quizzes do not pass the length check yet:`}
              </p>
              <ul className="mt-1">
                {failing.map((f) => (
                  <li key={f.lessonId}>
                    <a
                      href={`#lesson-${f.lessonId}`}
                      className="inline-flex min-h-11 items-center underline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{ color: "var(--accent)" }}
                    >
                      {f.title}
                    </a>{" "}
                    <span className="text-amber-900/90 dark:text-amber-200/90">({f.size} questions)</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2">{QUIZ_CHECKS_FIX_ADVICE}</p>
            </div>
          ) : null}
        </>
      )}
    </section>
  );
}
