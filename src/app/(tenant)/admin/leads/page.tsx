import type { Metadata } from "next";
import Link from "next/link";
import { requireBrandAdmin } from "@/lib/session";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { loadTenantInterest } from "@/db/queries/leads";
import {
  COURSE_NOTIFY_SOURCE,
  countByBundle,
  countByCourse,
  countBySource,
  countByTrack,
  filterInterest,
  interestQuery,
  readFilter,
  sourceLabel,
  type InterestCount,
  type InterestFilters,
} from "@/lib/lead-interest";

export const metadata: Metadata = { title: "Interest and leads" };

const ROLE_LABELS: Record<string, string> = {
  parent: "Parent",
  teacher: "Teacher",
  homeschooler: "Homeschooler",
  school_district: "School or district",
  other: "Other",
};

// ─────────────────────────────────────────────────────────────────────────────
// /admin/leads — who is waiting for what.
//
// Brand admins (and the platform owner) only; every read is tenant-scoped through
// loadTenantInterest(tenant.id), and the course / track / bundle filters can only ever resolve
// against THIS tenant's courses and bundles, so a course id pasted in from another school matches
// nothing rather than leaking a row.
//
// Filters are plain searchParams driven by a GET form and by links on the demand board, the same
// way /academic-standards filters. That keeps every view shareable, printable, and bookmarkable,
// and it means the CSV export can take the identical querystring.
//
// A lead is not just an email address: the /explore pricing form appends what the person actually
// ASKED, and an unvetted course's landing page appends which course they are waiting for. Both are
// rendered in full here, because this is where a pricing enquiry is still readable when its
// notification email failed to send.
//
// The jsonb filtering is done in JS on purpose. The trade, and what has to change before the list
// gets big, is documented at the top of src/lib/lead-interest.ts.
// ─────────────────────────────────────────────────────────────────────────────

const card =
  "rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900";
const controlBase =
  "min-h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12";
const accent = { color: "var(--accent)" };

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

/** One "what is in demand" column. Each line links to its own filtered list. */
function DemandBoard({
  heading,
  param,
  counts,
  filters,
  emptyNote,
}: {
  heading: string;
  param: keyof InterestFilters;
  counts: InterestCount[];
  filters: InterestFilters;
  emptyNote: string;
}) {
  return (
    <section className={card}>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">{heading}</h3>
      {counts.length === 0 ? (
        <p className="mt-2 text-sm text-neutral-600">{emptyNote}</p>
      ) : (
        <ul className="mt-2 space-y-1">
          {counts.slice(0, 12).map((c) => {
            const active = filters[param] === c.key;
            const next = active
              ? { ...filters, [param]: null }
              : { ...filters, [param]: c.key };
            const qs = interestQuery(next);
            return (
              <li key={c.key}>
                <Link
                  href={qs ? `/admin/leads?${qs}` : "/admin/leads"}
                  aria-current={active ? "true" : undefined}
                  className={`flex min-h-11 items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-sm hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-800 pointer-coarse:min-h-12 ${
                    active ? "font-semibold" : ""
                  }`}
                  style={active ? accent : undefined}
                >
                  <span className="wrap-break-word">{c.label}</span>
                  <span className="shrink-0 rounded-full border border-neutral-300 px-2 text-xs tabular-nums dark:border-neutral-700">
                    {c.leads}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default async function LeadsPage({ searchParams }: { searchParams: SearchParams }) {
  const tenant = await requireTenant();
  await requireBrandAdmin(tenant.id);

  const sp = await searchParams;
  const filters: InterestFilters = {
    course: readFilter(sp.course),
    track: readFilter(sp.track),
    bundle: readFilter(sp.bundle),
    source: readFilter(sp.source),
  };

  const { leads, courses, bundles, truncated } = await loadTenantInterest(tenant.id);

  const byCourse = countByCourse(leads, courses);
  const byTrack = countByTrack(leads, courses);
  const byBundle = countByBundle(leads, courses, bundles);
  const bySource = countBySource(leads);

  const rows = filterInterest({ leads, courses, bundles, filters });
  const qs = interestQuery(filters);
  const isFiltered = qs.length > 0;

  const waiting = leads.filter((l) =>
    (l.inquiries ?? []).some((q) => q.source === COURSE_NOTIFY_SOURCE),
  ).length;

  // Human sentence for the active filter, so a shared link explains itself.
  const activeBits = [
    filters.course ? `course: ${courses.find((c) => c.id === filters.course)?.title ?? "unknown"}` : null,
    filters.track
      ? `track: ${byTrack.find((t) => t.key === filters.track)?.label ?? filters.track}`
      : null,
    filters.bundle
      ? `bundle: ${bundles.find((b) => b.slug === filters.bundle)?.title ?? filters.bundle}`
      : null,
    filters.source ? `source: ${sourceLabel(filters.source)}` : null,
  ].filter(Boolean) as string[];

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
      <h1 className="text-2xl font-bold sm:text-3xl">Interest and leads, {brandName(tenant)}</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {leads.length} {leads.length === 1 ? "person" : "people"} captured
        {waiting > 0
          ? `, ${waiting} waiting for a course to open`
          : ""}
        .
      </p>
      {truncated ? (
        <p className="mt-2 rounded-lg border border-amber-400 bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-950 dark:text-amber-200">
          Showing the most recent {leads.length} leads only. Older ones exist but are not on this
          page or in the export. See the scale note in <code>src/lib/lead-interest.ts</code>.
        </p>
      ) : null}

      {/* ── What is in demand ─────────────────────────────────────────────── */}
      <h2 className="mt-8 text-lg font-semibold">What is in demand</h2>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Distinct people, not signups. Tap a line to filter the list below to those people; tap it
        again to clear it.
      </p>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <DemandBoard
          heading="By course"
          param="course"
          counts={byCourse}
          filters={filters}
          emptyNote="Nobody has asked about a specific course yet."
        />
        <DemandBoard
          heading="By track"
          param="track"
          counts={byTrack}
          filters={filters}
          emptyNote="No interest in a course that belongs to a track yet."
        />
        <DemandBoard
          heading="By bundle"
          param="bundle"
          counts={byBundle}
          filters={filters}
          emptyNote="No interest in a course that sits in a bundle yet."
        />
        <DemandBoard
          heading="By source"
          param="source"
          counts={bySource}
          filters={filters}
          emptyNote="No leads yet."
        />
      </div>

      {/* ── Filters ───────────────────────────────────────────────────────── */}
      <h2 className="mt-8 text-lg font-semibold">Filter</h2>
      <form method="get" action="/admin/leads" className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="f-course" className="block text-sm font-medium">
            Course
          </label>
          <select id="f-course" name="course" defaultValue={filters.course ?? ""} className={`mt-1 ${controlBase}`}>
            <option value="">Any course</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="f-track" className="block text-sm font-medium">
            Learning track
          </label>
          <select id="f-track" name="track" defaultValue={filters.track ?? ""} className={`mt-1 ${controlBase}`}>
            <option value="">Any track</option>
            {[
              ...new Map(
                courses
                  .filter((c) => c.seriesSlug)
                  .map((c) => [c.seriesSlug!, c.seriesTitle ?? c.seriesSlug!] as const),
              ),
            ]
              .sort((a, b) => a[1].localeCompare(b[1]))
              .map(([slug, title]) => (
                <option key={slug} value={slug}>
                  {title}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="f-bundle" className="block text-sm font-medium">
            Bundle
          </label>
          <select id="f-bundle" name="bundle" defaultValue={filters.bundle ?? ""} className={`mt-1 ${controlBase}`}>
            <option value="">Any bundle</option>
            {bundles.map((b) => (
              <option key={b.slug} value={b.slug}>
                {b.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="f-source" className="block text-sm font-medium">
            Source
          </label>
          <select id="f-source" name="source" defaultValue={filters.source ?? ""} className={`mt-1 ${controlBase}`}>
            <option value="">Any source</option>
            {bySource.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
          <button
            type="submit"
            className="min-h-11 rounded-lg px-4 py-2 text-sm font-semibold text-white pointer-coarse:min-h-12"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Apply filters
          </button>
          {isFiltered ? (
            <Link
              href="/admin/leads"
              className="inline-flex min-h-11 items-center text-sm underline pointer-coarse:min-h-12"
              style={accent}
            >
              Clear
            </Link>
          ) : null}
          <a
            href={qs ? `/api/admin/leads.csv?${qs}` : "/api/admin/leads.csv"}
            className="inline-flex min-h-11 items-center text-sm underline pointer-coarse:min-h-12"
            style={accent}
          >
            Download this list as CSV
          </a>
        </div>
      </form>

      {/* ── The list ──────────────────────────────────────────────────────── */}
      <h2 className="mt-8 text-lg font-semibold">
        {isFiltered ? "Filtered list" : "Everyone"} ({rows.length})
      </h2>
      {activeBits.length > 0 ? (
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{activeBits.join(" · ")}</p>
      ) : null}

      {rows.length === 0 ? (
        <p className="mt-6 text-neutral-600">
          {leads.length === 0
            ? "No leads yet."
            : "Nobody matches this filter. Try clearing one of the filters above."}
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-neutral-200 dark:divide-neutral-800">
          {rows.map((l) => (
            <li key={l.email} className="py-3 text-sm">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                <span className="break-all font-mono">{l.email}</span>
                <span className="whitespace-nowrap text-neutral-600">
                  {l.createdAt.toLocaleDateString()}
                </span>
              </div>
              {l.name ? (
                <p className="mt-0.5 text-neutral-600 dark:text-neutral-400">{l.name}</p>
              ) : null}

              {l.entries.map((q, i) => (
                <div
                  key={`${l.email}-${i}`}
                  className="mt-2 rounded-lg border border-neutral-200 p-3 dark:border-neutral-800"
                >
                  <p className="text-xs text-neutral-600">
                    {[
                      sourceLabel(q.source),
                      q.role ? (ROLE_LABELS[q.role] ?? q.role) : null,
                      q.students != null
                        ? `${q.students} ${q.students === 1 ? "student" : "students"}`
                        : null,
                      new Date(q.at).toLocaleString(),
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                  {/* A "notify me when this course opens" signup carries no message, so name the
                      course instead: without it the entry would read as an empty enquiry. */}
                  {q.source === COURSE_NOTIFY_SOURCE ? (
                    <p className="mt-1.5 text-neutral-700 dark:text-neutral-300">
                      🕒 Waiting for <strong>{q.courseTitle ?? "a course"}</strong> to open.
                    </p>
                  ) : q.message ? (
                    <p className="mt-1.5 whitespace-pre-wrap wrap-break-word text-neutral-700 dark:text-neutral-300">
                      {q.message}
                    </p>
                  ) : q.implicit ? (
                    <p className="mt-1.5 text-neutral-600">Email signup, no question asked.</p>
                  ) : (
                    <p className="mt-1.5 text-neutral-600">No message.</p>
                  )}
                  <a
                    href={`mailto:${l.email}?subject=${encodeURIComponent(
                      q.source === COURSE_NOTIFY_SOURCE
                        ? `${brandName(tenant)}, ${q.courseTitle ?? "your course"}`
                        : `${brandName(tenant)}, pricing`,
                    )}`}
                    className="mt-2 inline-flex min-h-11 items-center font-medium underline focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
                    style={accent}
                  >
                    Reply →
                  </a>
                </div>
              ))}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
