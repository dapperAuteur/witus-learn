import Link from "next/link";
import type { EditionLink } from "@/db/queries/catalog";
import { coursePagePath } from "@/lib/course-href";

// The archived-edition banner (plans/101 section 5): the top of an archived course's page and of
// every one of its lesson pages. It says what the course is (the stored archived_reason, the default
// label or the owner's own words) and where the maintained course is. A server component: it reads
// nothing and decides nothing, the page passes it the row and the resolved replacement.
//
// role="note", not role="alert": nothing went wrong, and a screen reader should meet it in reading
// order rather than have it interrupt. Amber, the same family as the on-hold notice editors see, so
// the two "this course is not what it looks like" states read as kin.
export function ArchivedEditionBanner({
  reason,
  replacement,
  compact = false,
}: {
  reason: string | null;
  replacement: EditionLink | null;
  /** Lesson pages: one tighter block above the lesson title instead of the course page's full card. */
  compact?: boolean;
}) {
  return (
    <aside
      role="note"
      aria-label="Archived edition"
      className={`rounded-lg border border-amber-400 bg-amber-50 text-amber-950 dark:border-amber-600 dark:bg-amber-950/40 dark:text-amber-100 ${compact ? "mb-4 p-3 text-sm" : "mt-4 p-4 text-sm"}`}
    >
      <p className="font-semibold">Archived edition</p>
      {reason ? <p className="mt-1 whitespace-pre-line">{reason}</p> : null}
      {replacement ? (
        <p className="mt-2">
          <Link
            href={coursePagePath(replacement, replacement.username)}
            className="inline-flex min-h-11 items-center font-medium underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Go to the current edition: {replacement.title}
          </Link>
        </p>
      ) : null}
    </aside>
  );
}

/** The small "Archived" badge for course lists: catalog cards, series pages, my-courses. */
export function ArchivedBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-950 dark:text-amber-200 ${className}`}
    >
      Archived
    </span>
  );
}
