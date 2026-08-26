import Link from "next/link";
import { standardsForCourse } from "@/lib/standards";

/**
 * "Meets N academic standards" block for a course page, directly under the description, because
 * standards coverage is what an educator actually shops on and a separate page they must know
 * about is not discoverable. Collapsed by default so the course page stays clean: the summary line
 * carries the numbers, and the detail lives at /academic-standards?course=<slug>.
 *
 * An unmapped course renders NOTHING rather than "0 standards", which would read as "meets none"
 * when it means "not analysed yet". scripts/check-standards-coverage.ts is the guard on that
 * backlog. Pure lookup over committed data; no query, no await.
 *
 * Shared by the full course page and the "Coming soon" landing face of an unvetted course. The
 * standards are the main reason that landing page is worth keeping public, so both must show them.
 */
export function CourseStandards({ courseSlug }: { courseSlug: string }) {
  const courseStandards = standardsForCourse(courseSlug);
  if (courseStandards.total === 0) return null;

  return (
    <details className="group mt-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 px-4 text-sm font-medium pointer-coarse:min-h-12">
        <span aria-hidden="true">🎓</span>
        <span>
          Meets <strong>{courseStandards.total}</strong> academic standard
          {courseStandards.total === 1 ? "" : "s"} across{" "}
          <strong>{courseStandards.jurisdictions.length}</strong>{" "}
          {courseStandards.jurisdictions.length === 1 ? "jurisdiction" : "jurisdictions"}
        </span>
        {/* The affordance has to change when the card opens, or it tells the reader to do the thing
            they just did. Same CSS-only pattern as /admin/future: no state, no JS, and the native
            <summary> still announces expanded/collapsed to a screen reader. */}
        <span className="ml-auto text-xs text-neutral-600 group-open:hidden">show</span>
        <span className="ml-auto hidden text-xs text-neutral-600 group-open:inline">hide</span>
      </summary>
      <div className="px-4 pb-4">
        <ul className="mt-2 flex flex-wrap gap-2">
          {courseStandards.jurisdictions.map((j) => (
            <li key={j.state}>
              <Link
                href={`/academic-standards?state=${j.state.toLowerCase()}&course=${courseSlug}`}
                className="inline-flex items-center gap-1 rounded-full border border-neutral-300 px-3 py-1 text-xs hover:underline dark:border-neutral-700"
              >
                {j.jurisdiction}
                <span className="text-neutral-600">{j.count}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={`/academic-standards?course=${courseSlug}`}
          className="mt-3 inline-block text-sm underline underline-offset-2"
          style={{ color: "var(--accent)" }}
        >
          See the full standards detail for this course
        </Link>
      </div>
    </details>
  );
}
