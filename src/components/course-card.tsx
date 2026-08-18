import Link from "next/link";
import type { Course } from "@/db/schema";
import { formatCourseCode } from "@/lib/series-code";
import { isVettingLocked } from "@/lib/vetting";
import { ComingSoonBadge } from "./coming-soon-course";
import { ProgressBar } from "./progress-bits";

// Catalog / profile / my-courses card. Pass `progress` (0–100) for an enrolled
// learner to show mastery instead of price; pass `href` to deep-link the pretty URL.
//
// An UNVETTED course still gets a card (finding a course marked "Coming soon" is useful
// anticipation, not a dead end) but shows the badge INSTEAD of a price, because it cannot be
// bought yet and a price beside it would be an offer we can't honour. A learner already enrolled
// is passed `progress`, so their own card keeps showing progress: the badge is for strangers.
export function CourseCard({
  course,
  progress,
  href,
}: {
  course: Course;
  progress?: number;
  href?: string;
}) {
  const meta = [course.seriesTitle, course.seasonNumber ? `Season ${course.seasonNumber}` : null]
    .filter(Boolean)
    .join(" · ");
  const isFree = course.priceType === "free" || Number(course.price) === 0;
  // The course code (STORY-00) is what makes a series legible from OUTSIDE the series page: a card
  // in search results or on an instructor profile still says which series this is and where in it
  // the course sits. Rendered as a badge rather than prefixed onto the title, because the title is
  // also the OG card, the JSON-LD name and the citation-list heading.
  const code = formatCourseCode(course.seriesCode, course.seriesPosition);

  // The series label is the natural place to ask "what else is in this, and where do I start?", but
  // the card is itself a link, so a nested <a> would be invalid HTML and unusable by keyboard. The
  // series link therefore sits OUTSIDE the card link, above it, and the card is unchanged below.
  const seriesHref = course.seriesSlug ? `/series/${course.seriesSlug}` : null;

  return (
    <div className="flex flex-col">
      {seriesHref ? (
        <Link
          href={seriesHref}
          className="mb-1 self-start text-xs font-medium text-neutral-500 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          See the whole path
        </Link>
      ) : null}
      <Link
        href={href ?? `/course/${course.id}`}
        className="group flex flex-1 flex-col rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
      >
        <span className="mb-3 h-1.5 w-12 rounded" style={{ backgroundColor: "var(--accent)" }} />
        {code || meta ? (
          <p className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-neutral-500">
            {code ? (
              <span className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono font-semibold tracking-normal text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                {code}
              </span>
            ) : null}
            {meta ? <span>{meta}</span> : null}
          </p>
        ) : null}
        <h3 className="mt-1 font-semibold group-hover:underline">{course.title}</h3>
        {course.description ? (
          <p className="mt-2 line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400">
            {course.description}
          </p>
        ) : null}
        <div className="mt-4 flex-1" />
        {progress != null ? (
          <div>
            <ProgressBar percent={progress} className="h-1.5" />
            <p className="mt-1.5 text-xs font-medium text-neutral-500">
              {progress >= 100 ? "Completed ✓" : `${progress}% complete`}
            </p>
          </div>
        ) : isVettingLocked(course) ? (
          <ComingSoonBadge />
        ) : (
          <p className="text-xs font-medium" style={{ color: "var(--accent)" }}>
            {isFree ? "Free" : `$${course.price}`}
          </p>
        )}
      </Link>
    </div>
  );
}
