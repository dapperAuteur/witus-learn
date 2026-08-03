import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { ogImageUrl } from "@/lib/og";

// A series landing page: the whole track, in order, in one place.
//
// Why it exists: a series could already say "these courses belong together" (series_slug) but not
// "this one is first". The new courses.series_order column supplies the order, and this page is what
// makes a series read as ONE thing rather than three courses that happen to share a label.
//
// Tenant-scoped throughout: getScopedDb() resolves the tenant from the request host and listCourses
// filters on it, so a series slug that exists on another brand 404s here rather than leaking.
// Ordering is series_order first, then title, so a partially numbered series still renders sensibly.

async function loadSeries(slug: string) {
  const sdb = await getScopedDb();
  const courses = await sdb.listCourses({ seriesSlug: slug });
  if (courses.length === 0) return null;
  const ordered = [...courses].sort((a, b) => {
    const ao = a.seriesOrder ?? Number.MAX_SAFE_INTEGER;
    const bo = b.seriesOrder ?? Number.MAX_SAFE_INTEGER;
    return ao !== bo ? ao - bo : a.title.localeCompare(b.title);
  });
  return { title: ordered[0].seriesTitle ?? slug, courses: ordered };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const series = await loadSeries(slug);
  if (!series) return { title: "Series" };
  const title = series.title;
  const description = `${series.courses.length} courses in order, from ${series.courses[0].title}.`;
  const image = ogImageUrl({ title, subtitle: description });
  return {
    title,
    description,
    openGraph: { title, description, images: [image] },
    twitter: { title, description, images: [image] },
  };
}

export default async function SeriesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const series = await loadSeries(slug);
  if (!series) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">{series.title}</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {series.courses.length} courses, in the order they are meant to be taken. You can start
        anywhere, and they build.
      </p>

      <ol className="mt-8 space-y-4">
        {series.courses.map((course, i) => (
          <li
            key={course.id}
            className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
          >
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                {course.seriesOrder ?? i + 1} of {series.courses.length}
              </span>
              {course.requiresAgeGate ? (
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-950 dark:text-amber-200">
                  21+
                </span>
              ) : null}
            </div>
            <h2 className="mt-2 text-lg font-semibold">
              <Link
                href={`/course/${course.id}`}
                className="underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {course.title}
              </Link>
            </h2>
            {course.description ? (
              <p className="mt-1 line-clamp-3 text-sm text-neutral-700 dark:text-neutral-300">
                {course.description}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </main>
  );
}
