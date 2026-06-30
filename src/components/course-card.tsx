import Link from "next/link";
import type { Course } from "@/db/schema";
import { ProgressBar } from "./progress-bits";

// Catalog / profile / my-courses card. Pass `progress` (0–100) for an enrolled
// learner to show mastery instead of price; pass `href` to deep-link the pretty URL.
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

  return (
    <Link
      href={href ?? `/course/${course.id}`}
      className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
    >
      <span className="mb-3 h-1.5 w-12 rounded" style={{ backgroundColor: "var(--accent)" }} />
      {meta ? <p className="text-xs uppercase tracking-wide text-neutral-500">{meta}</p> : null}
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
      ) : (
        <p className="text-xs font-medium" style={{ color: "var(--accent)" }}>
          {isFree ? "Free" : `$${course.price}`}
        </p>
      )}
    </Link>
  );
}
