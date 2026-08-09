import Link from "next/link";

// "Where in the course does this appear" — one card, used by all four review surfaces.
//
// /admin/citations, /audit/citations, /admin/research and /admin/media all ask for the same judgment
// on a fragment cut out of a lesson, so they all get the same answer in the same place and the same
// words. Presentational only: it holds no hooks and no authorisation logic, so a server page and a
// client list component can both render it, and the server decides what a viewer may be shown.
//
// THE HONESTY RULES IT ENFORCES BY SHAPE:
//   · No link is never silent. `note` says why, so "no link" cannot read as a bug.
//   · The excerpt is labelled with WHERE it came from and is quoted, never presented as the item's
//     own text. A reviewer must be able to tell the lesson's words from the board's.
//   · Nothing here can invent a location: it renders what it is handed.

export interface ReviewContextProps {
  /** The course as this item names it. A title when the school holds the course, else the slug. */
  courseLabel: string | null;
  /** The lesson as this item names it, when it names one. */
  lessonLabel?: string | null;
  /** Where to read it, from reviewLocation(). */
  href: string | null;
  /** True when href opens the lesson itself rather than the course landing page. */
  isLesson?: boolean;
  /** Why the lesson could not be linked. Shown whenever there is no lesson link. */
  note?: string | null;
  /** The lesson's own words around this item, when they could be found honestly. */
  excerpt?: string | null;
  /** What the excerpt IS, e.g. "The sentence that cites it". Required whenever excerpt is set. */
  excerptLabel?: string;
  /** A second excerpt, for the media board's "and what follows it". */
  secondExcerpt?: string | null;
  secondExcerptLabel?: string;
}

const linkClass =
  "inline-flex min-h-11 items-center gap-1 underline focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12";

function Quote({ label, text }: { label: string; text: string }) {
  return (
    <figure className="mt-2">
      <figcaption className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
        {label}
      </figcaption>
      <blockquote className="mt-1 border-l-2 border-neutral-300 pl-2 text-sm text-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
        {text}
      </blockquote>
    </figure>
  );
}

export function ReviewContext({
  courseLabel,
  lessonLabel,
  href,
  isLesson = false,
  note,
  excerpt,
  excerptLabel,
  secondExcerpt,
  secondExcerptLabel,
}: ReviewContextProps) {
  return (
    <div className="mt-3 rounded-md border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-900/60">
      <h4 className="text-xs font-semibold tracking-wide text-neutral-600 uppercase dark:text-neutral-400">
        Where this appears
      </h4>

      <p className="mt-1 text-sm break-words text-neutral-800 dark:text-neutral-200">
        {courseLabel ?? "Course not recorded"}
        {lessonLabel ? (
          <>
            {" "}
            <span aria-hidden="true">&rsaquo;</span>{" "}
            <span className="sr-only">lesson:</span>
            {lessonLabel}
          </>
        ) : null}
      </p>

      {href ? (
        <p className="text-sm">
          <Link href={href} className={linkClass}>
            {isLesson ? "Read this lesson" : "Open the course"}
          </Link>
        </p>
      ) : null}

      {note ? (
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">{note}</p>
      ) : null}

      {excerpt && excerptLabel ? <Quote label={excerptLabel} text={excerpt} /> : null}
      {secondExcerpt && secondExcerptLabel ? (
        <Quote label={secondExcerptLabel} text={secondExcerpt} />
      ) : null}
    </div>
  );
}
