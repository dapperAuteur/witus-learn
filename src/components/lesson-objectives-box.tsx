import { readLessonObjectives } from "@/lib/lesson-objectives";

// "After this lesson you can" (course-creation rubric v1.7, gate D10). Shown at the top of a lesson
// when its course file names objectives or success criteria (lessons.objectives, migration 0085), and
// nothing at all when it names neither, so the earlier catalog looks exactly as it did. A standard code
// an objective serves is shown beside it in small type, so a teacher can see which standard the lesson
// is for without leaving the page.
export function LessonObjectivesBox({ value }: { value: unknown }) {
  const o = readLessonObjectives(value);
  if (!o) return null;
  return (
    <section
      aria-label="Lesson objectives"
      className="mb-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm dark:border-neutral-800 dark:bg-neutral-900/40"
    >
      {o.objectives.length > 0 ? (
        <>
          <h2 className="font-semibold">After this lesson you can</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {o.objectives.map((obj, i) => (
              <li key={i}>
                {obj.text}
                {obj.standardCode ? (
                  <span className="ml-2 whitespace-nowrap text-xs text-neutral-600 dark:text-neutral-400">
                    Standard {obj.standardCode}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {o.successCriteria.length > 0 ? (
        <>
          <h2 className={o.objectives.length > 0 ? "mt-3 font-semibold" : "font-semibold"}>You will know you have it when</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {o.successCriteria.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </>
      ) : null}
    </section>
  );
}
