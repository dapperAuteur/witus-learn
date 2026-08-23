import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { getSession } from "@/lib/session";
import { canAccessCourse } from "@/lib/api";
import { ogImageUrl } from "@/lib/og";
import { describePosition, formatCourseCode, groupSeries } from "@/lib/series-code";

// A series landing page: the whole curriculum, in order, in one place.
//
// Why it exists: a series could already say "these courses belong together" (series_slug) but not
// "this one is first". series_order supplies the order, and this page is what makes a series read as
// ONE thing rather than three courses that happen to share a label.
//
// What changed with course codes: a series may FORK. Storytelling has one core course, three
// parallel tracks and a capstone, and rendering that as a flat numbered list told a learner
// something false — that course 7 requires course 6. So the page now draws the shape: start, then
// the tracks side by side, then the capstone, with each group saying in words what it is claiming.
// A series with no codes at all still renders as the plain ordered list it always was, because
// groupSeries() puts uncoded courses in a final "Also in this series" group rather than dropping
// them. Half-coding a series must degrade to a list, never to a page missing courses.
//
// Tenant-scoped throughout: getScopedDb() resolves the tenant from the request host and listCourses
// filters on it, so a series slug that exists on another brand 404s here rather than leaking.

async function loadSeries(slug: string) {
  const sdb = await getScopedDb();

  // A series of PRIVATE courses used to 404 for the one person entitled to read it. The WELL
  // program is ten owner-only courses, so `listCourses` (which excludes unpublished by default)
  // returned nothing and the page called notFound() — while the course page happily rendered a
  // link TO this page. The owner was shown a link to his own 404, seven times, by the automatic
  // broken-link reporter.
  //
  // So: fetch unpublished too, then keep only the courses THIS viewer may actually see, using the
  // same canAccessCourse gate the course page and the enroll/complete routes use. For a signed-out
  // visitor that filter removes everything and the page still 404s, which is the required
  // behaviour: an unpublished course must not become discoverable through a series page, and a
  // 404 rather than a redirect is what keeps the page from confirming the series exists at all.
  const all = await sdb.listCourses({ seriesSlug: slug, includeUnpublished: true });
  const session = await getSession();
  const visible: typeof all = [];
  for (const c of all) {
    if (c.isPublished) {
      visible.push(c);
      continue;
    }
    if (await canAccessCourse(session, sdb.tenantId, c)) visible.push(c);
  }
  const courses = visible;
  if (courses.length === 0) return null;
  const ordered = [...courses].sort((a, b) => {
    const ao = a.seriesOrder ?? Number.MAX_SAFE_INTEGER;
    const bo = b.seriesOrder ?? Number.MAX_SAFE_INTEGER;
    return ao !== bo ? ao - bo : a.title.localeCompare(b.title);
  });
  const groups = groupSeries(ordered);
  const trackCount = groups.filter((g) => g.kind === "track").length;
  return { title: ordered[0].seriesTitle ?? slug, courses: ordered, groups, trackCount };
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
        {series.trackCount > 1
          ? `${series.courses.length} courses. Start with the first one, then take whichever of the ${series.trackCount} tracks you want: they run in parallel, and none of them needs another.`
          : `${series.courses.length} courses, in the order they are meant to be taken. You can start anywhere, and they build.`}
      </p>

      {/* How to read a course code, stated once rather than assumed. It is two lines, and without
          it the badge is a mystery string that a learner has to reverse-engineer from examples. */}
      {series.groups.some((g) => g.kind !== "unplaced") ? (
        <details className="mt-4 rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800">
          <summary className="cursor-pointer font-medium">How to read the course codes</summary>
          <ul className="mt-2 space-y-1 text-neutral-700 dark:text-neutral-300">
            <li>
              <span className="font-mono font-semibold">-00</span> means start here.
            </li>
            <li>
              <span className="font-mono font-semibold">-01</span>,{" "}
              <span className="font-mono font-semibold">-02</span> are steps on one path, in order.
            </li>
            <li>
              A letter (<span className="font-mono font-semibold">-T1</span>,{" "}
              <span className="font-mono font-semibold">-P2</span>) marks a track. Tracks run in
              parallel: take any track you like, in any order, without taking the others.
            </li>
            <li>
              <span className="font-mono font-semibold">-99</span> is the capstone. Take it last.
            </li>
          </ul>
        </details>
      ) : null}

      {series.groups.map((group) => (
        <section key={`${group.kind}:${group.letter ?? ""}`} className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            {group.kind === "track" ? `${group.label} track` : group.label}
          </h2>
          <ol className="mt-3 space-y-4">
            {group.courses.map((course, i) => {
              const code = formatCourseCode(course.seriesCode, course.seriesPosition);
              const note = describePosition(course.seriesPosition, course.seriesTrack);
              return (
                <li
                  key={course.id}
                  className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
                >
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="rounded bg-neutral-100 px-2 py-0.5 font-mono text-xs font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                      {code ?? `${course.seriesOrder ?? i + 1} of ${series.courses.length}`}
                    </span>
                    {course.requiresAgeGate ? (
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-950 dark:text-amber-200">
                        21+
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">
                    <Link
                      href={`/course/${course.id}`}
                      className="underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      {course.title}
                    </Link>
                  </h3>
                  {note ? (
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{note}</p>
                  ) : null}
                  {course.description ? (
                    <p className="mt-1 line-clamp-3 text-sm text-neutral-700 dark:text-neutral-300">
                      {course.description}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </main>
  );
}
