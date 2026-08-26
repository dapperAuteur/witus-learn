import type { Metadata } from "next";
import Link from "next/link";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { ogImageUrl } from "@/lib/og";
import { getAlignedCourses } from "@/db/queries/standards";
import { allAlignedCourseSlugs, flattenAlignments, scopeAlignments } from "@/lib/standards";
import { StandardsMatrix } from "@/components/standards-matrix";

// ─────────────────────────────────────────────────────────────────────────────
// /academic-standards/matrix — the cross-state standards EXPLORER.
//
// The per-state finder (/academic-standards) answers "for MY state, which courses meet
// which standards?". This page answers the other direction: one searchable, sortable,
// filterable table flattening EVERY (state x standard x course) alignment at once, so a
// teacher or administrator can ask "which of these courses meets the most, and where?".
//
// SAME TENANT BOUNDARY AS THE FINDER, reused not re-implemented:
//   getAlignedCourses() -> the courses THIS tenant actually publishes (the load-bearing
//   tenant filter, db/queries/standards.ts). scopeAlignments() with no state -> every
//   mapped jurisdiction, dropping any standard no in-catalog course backs and rewriting
//   each to name only this tenant's courses. flattenAlignments() -> one row per surviving
//   (standard x course). No filter/search on the client can widen that set. A tenant with
//   zero mapped-catalog overlap gets an honest empty state here, NOT an error (the finder
//   404s because it is a per-state claim page; the explorer is a browse surface).
//
// Driven entirely off scopeAlignments()/mappedStates(), so states #10, #11 (OH/GA next)
// appear the moment their data files land — nothing on this page is hardcoded per state.
// ─────────────────────────────────────────────────────────────────────────────

export async function generateMetadata(): Promise<Metadata> {
  const tenant = await requireTenant();
  const brand = brandName(tenant);
  const title = "Standards explorer";
  const description = `Search, sort, and filter which ${brand} courses meet which standards across every mapped state at once, with the exact code, verbatim text, coverage, and a source link on every row.`;
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      images: [ogImageUrl({ title, subtitle: brand })],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

const textLink = "font-medium underline focus-visible:outline-2 focus-visible:outline-offset-2";
const accent = { color: "var(--accent)" };

export default async function StandardsMatrixPage() {
  const tenant = await requireTenant();
  const brand = brandName(tenant);

  // Tenant boundary — identical to the per-state finder.
  const available = await getAlignedCourses(tenant.id, allAlignedCourseSlugs());
  const groups = scopeAlignments(available);
  const rows = flattenAlignments(groups);
  const stateCount = new Set(groups.map((g) => g.framework.state)).size;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <nav className="text-sm print:hidden">
        <Link href="/academic-standards" className={textLink} style={accent}>
          ← Standards by state
        </Link>
      </nav>

      <header className="mt-4 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest" style={accent}>
          {brand}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">Standards explorer</h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          Every standard these courses meet, across every state we have mapped, in one table you can
          search, sort, and filter. Each row is one standard met by one course: its exact code, the
          standard&apos;s own words, the subject and framework, the coverage, and a link to the
          source document. Built for teachers and administrators comparing across states.
        </p>
        {rows.length > 0 ? (
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Looking for one state on its own?{" "}
            <Link href="/academic-standards" className={textLink} style={accent}>
              Use the per-state finder
            </Link>{" "}
            for a printable, filing-ready page.
          </p>
        ) : null}
      </header>

      {rows.length === 0 ? (
        <EmptyState brand={brand} />
      ) : (
        <>
          <p className="mt-2 text-sm text-neutral-600">
            {stateCount} state{stateCount === 1 ? "" : "s"} mapped so far.
          </p>
          <StandardsMatrix rows={rows} brand={brand} />
        </>
      )}
    </main>
  );
}

// An honest empty state, never an error: this brand simply hosts none of the mapped curriculum.
function EmptyState({ brand }: { brand: string }) {
  return (
    <section className="mt-10 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
      <h2 className="text-xl font-bold">No mapped standards for {brand} yet</h2>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Standards mapping is done course by course, and none of the courses {brand} currently
        publishes have been mapped to a state&apos;s standards yet. When they are, they will show up
        here automatically. The courses work in any state today; the mapping is the paperwork.
      </p>
      <div className="mt-4">
        <Link
          href="/courses"
          className="inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Browse the courses
        </Link>
      </div>
    </section>
  );
}
