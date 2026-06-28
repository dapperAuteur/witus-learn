import Link from "next/link";
import type { Course } from "@/db/schema";

export function CourseCard({ course }: { course: Course }) {
  const meta = [course.seriesTitle, course.seasonNumber ? `Season ${course.seasonNumber}` : null]
    .filter(Boolean)
    .join(" · ");
  const isFree = course.priceType === "free" || Number(course.price) === 0;

  return (
    <Link
      href={`/course/${course.id}`}
      className="group flex flex-col rounded-lg border border-neutral-200 p-4 transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800"
    >
      <span className="mb-3 h-1.5 w-12 rounded" style={{ backgroundColor: "var(--accent)" }} />
      {meta ? <p className="text-xs uppercase tracking-wide text-neutral-500">{meta}</p> : null}
      <h3 className="mt-1 font-semibold group-hover:underline">{course.title}</h3>
      {course.description ? (
        <p className="mt-2 line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400">
          {course.description}
        </p>
      ) : null}
      <p className="mt-3 text-xs font-medium" style={{ color: "var(--accent)" }}>
        {isFree ? "Free" : `$${course.price}`}
      </p>
    </Link>
  );
}
