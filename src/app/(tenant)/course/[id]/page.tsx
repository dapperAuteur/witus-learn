import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";

// By-id course detail. getCourseById is tenant-scoped, so a foreign id 404s here
// exactly as it does in the API — the same isolation guard on the page surface.
// Modules/lessons + the pretty /{instructor}/{slug} URL land in Phases 3b/4.

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const sdb = await getScopedDb();
  const course = await sdb.getCourseById(id);
  return { title: course?.title ?? "Course" };
}

export default async function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sdb = await getScopedDb();
  const course = await sdb.getCourseById(id);
  if (!course) notFound();

  const meta = [course.seriesTitle, course.seasonNumber ? `Season ${course.seasonNumber}` : null]
    .filter(Boolean)
    .join(" · ");

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/" className="text-sm text-neutral-500 hover:underline">
        ← Back to catalog
      </Link>
      {meta ? (
        <p className="mt-6 text-xs uppercase tracking-wide text-neutral-500">{meta}</p>
      ) : null}
      <h1 className="mt-1 text-3xl font-bold">{course.title}</h1>
      {course.description ? (
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">{course.description}</p>
      ) : null}
      <p className="mt-6 text-sm text-neutral-500">
        Lessons and enrollment arrive in the next phases.
      </p>
    </main>
  );
}
