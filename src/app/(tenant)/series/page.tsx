import Link from "next/link";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { ogImageUrl } from "@/lib/og";

// The series index: every curriculum this brand teaches, with its shape and where to start.
//
// WHY IT EXISTS. /series/<slug> could already explain one path, but nothing linked to it and nothing
// listed the others, so a learner had to already know a series existed to find the page explaining
// it. That is the same menu-orphan failure the page-reachability guard was written for, one level
// up: the pages were fine and undiscoverable. This page is the front door, and it is linked from the
// header nav so a series is reachable without knowing its slug.
//
// WHAT IT DELIBERATELY SHOWS. Not a list of names: the two facts a learner actually needs, which are
// WHERE TO START and WHETHER THERE IS MORE THAN ONE ROUTE. A series with parallel tracks says so
// here rather than on the page you reach after committing to a click.
//
// Tenant-scoped: listSeries filters on the host-resolved tenant, so another brand's curriculum is
// not merely unreachable but invisible. A series NAME is itself information about another school.

const TITLE = "Course paths";
const DESCRIPTION =
  "Every series we teach, in the order the courses are meant to be taken, with where to start and whether there is more than one route through.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl({ title: TITLE, subtitle: "Where to start, and what follows" })],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl({ title: TITLE, subtitle: "Where to start, and what follows" })],
  },
};

export default async function SeriesIndexPage() {
  const sdb = await getScopedDb();
  const series = await sdb.listSeries();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">{TITLE}</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        A series is several courses that build on each other. Each one has a page showing the whole
        path in order, so you never have to guess which course comes first.
      </p>

      {series.length === 0 ? (
        <p className="mt-8 rounded-lg border border-neutral-200 p-4 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
          No multi-course paths yet. Every course in the{" "}
          <Link href="/courses" className="underline underline-offset-2">
            catalog
          </Link>{" "}
          stands on its own.
        </p>
      ) : (
        <ul className="mt-8 space-y-4">
          {series.map((s) => (
            <li
              key={s.slug}
              className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                {s.code ? (
                  <span className="rounded bg-neutral-100 px-2 py-0.5 font-mono text-xs font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    {s.code}
                  </span>
                ) : null}
                <span className="text-xs uppercase tracking-wide text-neutral-600">
                  {s.courseCount} {s.courseCount === 1 ? "course" : "courses"}
                </span>
              </div>
              <h2 className="mt-2 text-lg font-semibold">
                <Link
                  href={`/series/${s.slug}`}
                  className="underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {s.title}
                </Link>
              </h2>

              {/* The two facts worth putting on a card: where to start, and whether the path forks.
                  A learner who sees "3 tracks" here knows to expect a choice rather than a queue. */}
              {s.startsWith ? (
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                  Start with <span className="font-medium">{s.startsWith}</span>.
                </p>
              ) : null}
              {s.tracks.length > 1 ? (
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                  Then {s.tracks.length} parallel tracks, {s.tracks.join(", ")}, which you can take
                  in any order and without taking the others.
                </p>
              ) : s.tracks.length === 1 ? (
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                  One track: {s.tracks[0]}.
                </p>
              ) : (
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                  A single path, in order.
                </p>
              )}
              {s.hasCapstone ? (
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  Ends with a capstone that uses everything before it.
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )}

      <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400">
        Not looking for a path?{" "}
        <Link href="/courses" className="underline underline-offset-2">
          Browse every course
        </Link>
        .
      </p>
    </main>
  );
}
