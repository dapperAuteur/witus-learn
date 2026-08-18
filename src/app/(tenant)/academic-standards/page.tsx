import type { Metadata } from "next";
import { cache } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { ogImageUrl } from "@/lib/og";
import { getAlignedCourses } from "@/db/queries/standards";
import {
  NEXT_UP,
  US_JURISDICTIONS,
  allAlignedCourseSlugs,
  courseJurisdictions,
  coursesIn,
  filterGroups,
  isStateCode,
  jurisdictionData,
  jurisdictionName,
  mappedStates,
  scopeAlignments,
  standardsHref as href,
  subjectsIn,
  summarizeStandards,
  toPlainText,
  type AlignedCourseLike,
  type ScopedFramework,
  type StateCode,
  type Subject,
} from "@/lib/standards";
import { StandardsActions } from "@/components/standards-actions";

// ─────────────────────────────────────────────────────────────────────────────
// /academic-standards — the state-standards finder: a teacher, homeschooler, or administrator picks
// their state and sees which courses meet which of that state's standards, filterable by
// subject and course, printable and copyable for a state filing.
//
// THE RULE THIS PAGE LIVES BY: this page makes a claim, to teachers and to homeschooling
// parents who may file it with a state, about public education requirements. So:
//   · Every code and every quoted standard was fetched from its publisher and transcribed
//     verbatim (see src/lib/standards/index.ts). Nothing here is remembered.
//   · Every claim links out to the source document, so a teacher can check us in one click.
//   · "Partially covered" is stated as loudly as "covered", and the reason is given. We would
//     rather lose a checkbox than have a parent file something that isn't true.
//   · Each framework shows the date it was retrieved, because standards get revised and this
//     mapping can go stale.
//   · A state we have NOT mapped yet says so plainly — it is a real page with honest guidance,
//     never an empty error.
//
// Multi-tenant: the alignment table is a static file keyed by course SLUG. getAlignedCourses()
// is the tenant boundary — it returns only THIS tenant's published courses, and scopeAlignments()
// then drops any standard none of them cover. The state/subject/course filters only ever narrow
// that scoped set (filterGroups), so no filter combination can leak another tenant's catalog.
// ─────────────────────────────────────────────────────────────────────────────

// A repeated param (?course=a&course=b) arrives as an array, so every value is normalized through
// one() before anything calls a string method on it. A hand-edited URL must never 500.
type RawParam = string | string[] | undefined;
type SearchParams = Promise<{ state?: RawParam; subject?: RawParam; course?: RawParam }>;

function one(raw: RawParam): string | undefined {
  const v = Array.isArray(raw) ? raw[0] : raw;
  return typeof v === "string" && v.trim().length > 0 ? v.trim() : undefined;
}

function subjectSlug(s: Subject): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Normalize ?state= to a real code, or null. Anything unrecognizable 404s (never redirects). */
function parseState(raw: string | undefined): StateCode | null {
  if (!raw) return null;
  const up = raw.toUpperCase();
  return isStateCode(up) ? up : null;
}

/**
 * THE TENANT BOUNDARY, resolved once per request (generateMetadata and the render both need it,
 * and React's cache() keeps that to a single query).
 */
const loadFinder = cache(async (tenantId: string) => {
  const available = await getAlignedCourses(tenantId, allAlignedCourseSlugs());
  const allGroups = scopeAlignments(available);
  // Which mapped states have at least one claim THIS tenant's catalog can back. A state whose
  // data exists but rests entirely on courses this tenant does not publish is treated as
  // not-yet-available here; an honest empty is better than a page of dropped claims.
  const statesHere = mappedStates()
    .map((code) => ({ code, groups: scopeAlignments(available, code) }))
    .filter((s) => s.groups.length > 0);
  return { allGroups, statesHere };
});

/**
 * Resolve ?course= to a course, or undefined.
 *
 * It resolves against coursesIn(allGroups), the courses that survived the tenant scoping AND
 * actually back a standard here, so an unknown slug, a slug belonging to another tenant, and a
 * slug this tenant publishes but has no mapping for all land in exactly the same place: undefined.
 * That sameness is the point. Any difference in what the page does for a foreign slug versus an
 * invented one would leak which courses the other brands host.
 */
function resolveCourse(
  allGroups: ScopedFramework[],
  raw: string | undefined,
): AlignedCourseLike | undefined {
  if (!raw) return undefined;
  return coursesIn(allGroups).find((c) => c.slug === raw);
}

/** A rejected ?course= value is echoed back to the reader, so cap what we will echo. */
function shortSlug(raw: string): string {
  return raw.length > 48 ? `${raw.slice(0, 48)}…` : raw;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const tenant = await requireTenant();
  const brand = brandName(tenant);
  const sp = await searchParams;
  const state = parseState(one(sp.state));

  let title = state ? `${jurisdictionName(state)} standards alignment` : "Find your state's standards";
  let description = state
    ? `Which ${jurisdictionName(state)} standards the ${brand} courses cover: the exact code, the standard's own words, and the lesson that covers it.`
    : `Pick your state and see which ${brand} courses meet which of its standards. Exact codes, verbatim text, and source links, printable for a state filing.`;

  // The course-scoped picker is a different page to a reader, so it says so in the tab, the search
  // result, and the share card. Resolved through the same tenant boundary as the render: a course
  // this tenant does not publish falls back to the generic finder title and names nothing.
  if (!state) {
    const courseSlug = one(sp.course);
    if (courseSlug) {
      const { allGroups, statesHere } = await loadFinder(tenant.id);
      const course = resolveCourse(allGroups, courseSlug);
      const perState = course ? courseJurisdictions(statesHere, course.slug) : [];
      if (course && perState.length > 0) {
        const stats = summarizeStandards(perState.flatMap((s) => s.groups));
        title = `${course.title}: standards by state`;
        description = `${course.title} meets ${stats.total} published academic standard${stats.total === 1 ? "" : "s"} across ${perState.length} jurisdiction${perState.length === 1 ? "" : "s"}. Pick a state for the exact codes, the standard's own words, and the lesson that covers each one.`;
      }
    }
  }

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

const card =
  "rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 print:border-neutral-400";
const textLink = "font-medium underline focus-visible:outline-2 focus-visible:outline-offset-2";
const chipBase =
  "inline-flex min-h-11 items-center rounded-full border px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12";
const chipIdle = `${chipBase} border-neutral-300 hover:border-current dark:border-neutral-700`;
const chipActive = `${chipBase} border-current font-semibold`;
const accent = { color: "var(--accent)" };

export default async function StandardsPage({ searchParams }: { searchParams: SearchParams }) {
  const tenant = await requireTenant();
  const brand = brandName(tenant);
  const sp = await searchParams;

  // ?state= must be a real jurisdiction. Garbage 404s — never a redirect, never a guess.
  const rawState = one(sp.state);
  const state = parseState(rawState);
  if (rawState && !state) notFound();

  // Tenant boundary. Everything below is derived from what THIS tenant actually publishes.
  const { allGroups, statesHere } = await loadFinder(tenant.id);

  // A tenant that hosts none of the mapped curriculum gets no standards page at all — better a
  // 404 than a finder that implies an alignment for courses it does not have.
  if (allGroups.length === 0) notFound();

  const rawCourse = one(sp.course);

  if (!state) {
    // ?course= with no ?state= is the link every course page emits ("See the full standards detail
    // for this course"). It gets the course's OWN jurisdictions, not the generic state list: the
    // reader asked where THIS course counts. Each card carries the course param into the state.
    const course = resolveCourse(allGroups, rawCourse);
    const perState = course ? courseJurisdictions(statesHere, course.slug) : [];
    if (course && perState.length > 0) {
      return (
        <CoursePickerView
          brand={brand}
          course={course}
          statesHere={perState}
          totalMapped={statesHere.length}
        />
      );
    }
    // Unknown slug, another tenant's slug, or one with no mapping here: keep the finder working,
    // say plainly that the filter was dropped, and claim nothing about the course. Never a 404:
    // this page is a real destination and ?course= is a filter on it, not its identity.
    return (
      <PickerView
        brand={brand}
        statesHere={statesHere}
        droppedCourse={rawCourse ? shortSlug(rawCourse) : undefined}
      />
    );
  }

  const stateEntry = statesHere.find((s) => s.code === state);
  if (!stateEntry) return <ComingView brand={brand} state={state} statesHere={statesHere} />;

  return (
    <StateView
      brand={brand}
      state={state}
      groups={stateEntry.groups}
      subjectParam={one(sp.subject)}
      courseParam={rawCourse}
    />
  );
}

// ── The picker — the finder's front door ─────────────────────────────────────

function PickerView({
  brand,
  statesHere,
  droppedCourse,
}: {
  brand: string;
  statesHere: { code: StateCode; groups: ScopedFramework[] }[];
  droppedCourse?: string;
}) {
  const mappedCodes = new Set(statesHere.map((s) => s.code));
  const rest = US_JURISDICTIONS.filter((j) => !mappedCodes.has(j.code));
  // Coverage headline, derived from what THIS tenant can back (not a platform-wide boast).
  const stateCount = statesHere.filter((s) => s.code !== "DC").length;
  const hasDC = statesHere.some((s) => s.code === "DC");
  const coverageWhere =
    stateCount > 0 && hasDC
      ? `${stateCount} state${stateCount === 1 ? "" : "s"} and Washington, D.C.`
      : hasDC
        ? "Washington, D.C."
        : `${stateCount} state${stateCount === 1 ? "" : "s"}`;

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest" style={accent}>
          {brand}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
          Find your state&apos;s standards
        </h1>
        {/* A ?course= we could not honour. Said out loud rather than dropped silently, because
            the counts below are then about the WHOLE catalog, not the course the reader asked
            about, and a reader who does not know that would file the wrong number. */}
        {droppedCourse ? (
          <p
            className="mt-4 rounded-xl border-2 px-4 py-3 text-sm leading-relaxed"
            style={{ borderColor: "var(--accent)" }}
            role="status"
          >
            <strong>Showing every course.</strong> There is no standards mapping for a course called{" "}
            <span className="font-mono wrap-break-word">{droppedCourse}</span> in the {brand}{" "}
            catalog, so that filter was ignored. Everything below covers the full catalog.
          </p>
        ) : null}
        {statesHere.length > 0 ? (
          <p
            className="mt-3 inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold"
            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
          >
            ✓ Aligned to published standards in {coverageWhere}
          </p>
        ) : null}
        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          Pick your state to see which {brand} courses meet which of its published standards:
          the exact code, the standard&apos;s own words, the lesson that covers it, and a link to
          the source document. Built for teachers, homeschoolers, and administrators; printable
          and copyable for a state filing.
        </p>
        <p className="mt-4 text-base">
          <Link href="/academic-standards/matrix" className={textLink} style={accent}>
            Prefer one searchable table across every state? Open the standards explorer →
          </Link>
        </p>
      </header>

      <section className="mt-8" aria-labelledby="mapped-heading">
        <h2 id="mapped-heading" className="text-xl font-bold">
          Mapped so far
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {statesHere.map(({ code, groups }) => {
            const stats = summarizeStandards(groups);
            return (
              <li key={code}>
                <Link
                  href={href({ state: code })}
                  className={`${card} block transition-colors hover:border-current focus-visible:outline-2 focus-visible:outline-offset-2`}
                >
                  <span className="text-lg font-bold">{jurisdictionName(code)}</span>
                  <span className="mt-1 block text-sm text-neutral-600 dark:text-neutral-400">
                    {stats.total} standards mapped · {stats.full} fully covered · {stats.partial}{" "}
                    partially · {stats.frameworks} frameworks
                  </span>
                  <span className="mt-2 inline-block text-sm font-medium" style={accent}>
                    See the alignment →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section
        className="mt-8 rounded-2xl border-2 p-5 sm:p-6"
        style={{ borderColor: "var(--accent)" }}
        aria-labelledby="honesty-short"
      >
        <h2 id="honesty-short" className="text-lg font-bold">
          How this map is made, and why most states aren&apos;t on it yet
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          We map a state only after fetching its actual standards documents and checking each
          standard against actual lesson content. Nothing is cited from memory, partial coverage
          is labeled as loudly as full coverage, and each framework shows the date it was
          retrieved. That takes time per state, so states appear here as their mapping is
          verified, not before. The courses themselves work anywhere; only the paperwork mapping
          is state-by-state.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="coming-heading">
        <h2 id="coming-heading" className="text-xl font-bold">
          Not mapped yet
        </h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Next in the queue:{" "}
          {NEXT_UP.map((code, i) => (
            <span key={code}>
              {i > 0 ? " and " : ""}
              <Link href={href({ state: code })} className={textLink} style={accent}>
                {jurisdictionName(code)}
              </Link>
            </span>
          ))}
          . Every other state follows the same fetch-then-verify method.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {rest.map((j) => (
            <li key={j.code}>
              <Link
                href={href({ state: j.code })}
                className={`${chipIdle} ${NEXT_UP.includes(j.code as StateCode) ? "border-current font-semibold" : "text-neutral-600 dark:text-neutral-400"}`}
              >
                {j.name}
                {NEXT_UP.includes(j.code as StateCode) ? " · next" : ""}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800 print:hidden">
        <h2 className="text-xl font-bold">The courses don&apos;t wait for the paperwork</h2>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Every course publishes its sources and can be used in any state today. The state mapping
          is what turns &ldquo;this is good teaching&rdquo; into &ldquo;this meets standard X&rdquo;
          for a filing.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/courses"
            className="inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Browse the courses
          </Link>
        </div>
      </section>
    </main>
  );
}

// ── The picker, narrowed to one course ───────────────────────────────────────
//
// Where a reader lands from a course page's "See the full standards detail for this course".
// They asked a course question, so they get a course answer: the jurisdictions where THIS course
// carries standards, with its own counts, and every link on into a state carries ?course= so the
// filter survives the click. Deliberately NOT a cross-state dump of the course's standards: that
// is what /academic-standards/matrix already is, and this page's job is the per-state filing.

function CoursePickerView({
  brand,
  course,
  statesHere,
  totalMapped,
}: {
  brand: string;
  course: AlignedCourseLike;
  statesHere: { code: StateCode; groups: ScopedFramework[] }[];
  totalMapped: number;
}) {
  const stats = summarizeStandards(statesHere.flatMap((s) => s.groups));
  // Busiest jurisdictions first: the reader is scanning for their own state, and a long list
  // sorted by nothing is harder to scan than one whose strongest claims lead.
  const ordered = [...statesHere].sort(
    (a, b) =>
      summarizeStandards(b.groups).total - summarizeStandards(a.groups).total ||
      jurisdictionName(a.code).localeCompare(jurisdictionName(b.code)),
  );
  const elsewhere = totalMapped - statesHere.length;

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
      <nav className="text-sm print:hidden">
        <Link href={href({})} className={textLink} style={accent}>
          ← All courses, all states
        </Link>
      </nav>

      <header className="mt-4 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest" style={accent}>
          {brand}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
          {course.title}: standards by state
        </h1>
        <p
          className="mt-3 inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold"
          style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
        >
          ✓ {stats.total} standard{stats.total === 1 ? "" : "s"} across {statesHere.length}{" "}
          jurisdiction{statesHere.length === 1 ? "" : "s"}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          These are the jurisdictions where <strong>{course.title}</strong> meets published
          standards. Pick yours to read the exact code, the standard&apos;s own words, the lesson
          that covers it, and a link to the source document, still filtered to this course and
          printable for a state filing.
        </p>
        {elsewhere > 0 ? (
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {brand} has mapped {totalMapped} jurisdictions in all. This course carries no standards
            we can honestly claim in the other {elsewhere}; other courses do.{" "}
            <Link href={href({})} className={textLink} style={accent}>
              See every state
            </Link>
            .
          </p>
        ) : null}
      </header>

      <section className="mt-8" aria-labelledby="course-states-heading">
        <h2 id="course-states-heading" className="text-xl font-bold">
          Where this course counts
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {ordered.map(({ code, groups }) => {
            const s = summarizeStandards(groups);
            return (
              <li key={code}>
                <Link
                  href={href({ state: code, course: course.slug })}
                  className={`${card} block transition-colors hover:border-current focus-visible:outline-2 focus-visible:outline-offset-2`}
                >
                  <span className="text-lg font-bold">{jurisdictionName(code)}</span>
                  <span className="mt-1 block text-sm text-neutral-600 dark:text-neutral-400">
                    {s.total} standard{s.total === 1 ? "" : "s"} · {s.full} fully covered ·{" "}
                    {s.partial} partially · {s.frameworks} framework
                    {s.frameworks === 1 ? "" : "s"}
                  </span>
                  <span className="mt-2 inline-block text-sm font-medium" style={accent}>
                    See the alignment →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section
        className="mt-8 rounded-2xl border-2 p-5 sm:p-6"
        style={{ borderColor: "var(--accent)" }}
        aria-labelledby="course-honesty"
      >
        <h2 id="course-honesty" className="text-lg font-bold">
          Read this before you rely on it
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          This alignment was made by {brand} against each jurisdiction&apos;s published standards,
          fetched from the publisher and transcribed word for word. It has not been reviewed or
          endorsed by any education authority. Where the course only partly covers a standard, the
          state page says <em>partially covered</em> and explains the gap, and every framework
          shows the date it was retrieved, because standards get revised.
        </p>
      </section>

      <section className="mt-12 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800 print:hidden">
        <h2 className="text-xl font-bold">Check it against the course itself</h2>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Don&apos;t take the mapping on trust. Open the course, read the lesson named as evidence,
          and hold it against the standard.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={`/course/${course.id}`}
            className="inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Open {course.title}
          </Link>
          <Link
            href="/academic-standards/matrix"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-neutral-300 px-5 py-2.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 pointer-coarse:min-h-12"
          >
            Compare every course in one table
          </Link>
        </div>
      </section>
    </main>
  );
}

// ── A state we have not mapped yet — a real page, never an empty error ───────

function ComingView({
  brand,
  state,
  statesHere,
}: {
  brand: string;
  state: StateCode;
  statesHere: { code: StateCode; groups: ScopedFramework[] }[];
}) {
  const name = jurisdictionName(state);
  const isNext = NEXT_UP.includes(state);
  // Distinguish "we have data for this state, but none of it applies to this tenant's catalog"
  // from "nobody has mapped this state yet" — the first is about THIS brand's courses.
  const mappedElsewhere = jurisdictionData(state) !== undefined;

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
      <nav className="text-sm">
        <Link href={href({})} className={textLink} style={accent}>
          ← All states
        </Link>
      </nav>
      <header className="mt-4 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest" style={accent}>
          {brand}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
          {name}: not mapped yet
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          {mappedElsewhere
            ? `${name}'s standards have been mapped, but none of the standards rest on courses ${brand} currently publishes, so there is nothing we can honestly show you here yet.`
            : isNext
              ? `${name} is next in the queue. We haven't published its mapping yet because our rule is fetch-then-verify: every code is retrieved from ${name}'s own standards documents and checked against actual lesson content before it appears here.`
              : `We haven't mapped ${name}'s standards yet. Every state gets the same treatment: fetch the actual standards documents, transcribe each code verbatim, and check it against actual lesson content, and we publish nothing before that is done.`}
        </p>
      </header>

      <section className="mt-8" aria-labelledby="meanwhile-heading">
        <h2 id="meanwhile-heading" className="text-xl font-bold">
          What you can do meanwhile
        </h2>
        <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          <li>
            The courses work in {name} today. Standards mapping changes the paperwork, not the
            teaching. Every course publishes its sources, so you can check any lesson against your
            own state&apos;s requirements.
          </li>
          <li>
            The mapped states below show exactly what a finished mapping looks like: codes,
            verbatim standard text, per-lesson evidence, and honest &ldquo;partial&rdquo; labels.
            {statesHere.length > 0 ? " Use them as the template for your own crosswalk." : ""}
          </li>
          {statesHere.map(({ code, groups }) => {
            const stats = summarizeStandards(groups);
            return (
              <li key={code}>
                <Link href={href({ state: code })} className={textLink} style={accent}>
                  {jurisdictionName(code)}: {stats.total} standards mapped
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap print:hidden">
        <Link
          href="/courses"
          className="inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Browse the courses
        </Link>
        <Link
          href={href({})}
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-neutral-300 px-5 py-2.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 pointer-coarse:min-h-12"
        >
          Pick a different state
        </Link>
      </section>
    </main>
  );
}

// ── The state view — the alignment itself, filterable ────────────────────────

function StateView({
  brand,
  state,
  groups,
  subjectParam,
  courseParam,
}: {
  brand: string;
  state: StateCode;
  groups: ScopedFramework[];
  subjectParam?: string;
  courseParam?: string;
}) {
  const name = jurisdictionName(state);
  const subjects = subjectsIn(groups);
  const courses = coursesIn(groups);

  // Filters resolve against what THIS tenant may see; anything else is silently no-filter.
  const subject = subjects.find((s) => subjectSlug(s) === subjectParam);
  const course = courses.find((c) => c.slug === courseParam);
  const shown = filterGroups(groups, { subject, courseSlug: course?.slug });

  const stats = summarizeStandards(shown);
  // The unfiltered totals, so a narrowed list can say what it was narrowed FROM.
  const allStats = summarizeStandards(groups);
  const plainText = toPlainText(shown, brand);
  const filtered = Boolean(subject || course);
  const canFilter = subjects.length > 1 || courses.length > 1;

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
      {/* Back out to the state list WITHOUT losing the course, when there is one: a reader who
          arrived from a course page is still asking a course question. */}
      <nav className="text-sm print:hidden">
        <Link href={href({ course: course?.slug })} className={textLink} style={accent}>
          {course ? `← All states for ${course.title}` : "← All states"}
        </Link>
      </nav>

      <header className="mt-4 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest" style={accent}>
          {brand}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
          {name} standards alignment
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          Designed for high school. Below is every {name} standard these courses cover: the
          exact code, the standard&apos;s own words, and the lesson that covers it. Where we only
          cover part of a standard, it says so, and says which part.
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { value: stats.total, label: "standards mapped" },
            { value: stats.full, label: "fully covered" },
            { value: stats.partial, label: "partially covered" },
            { value: stats.frameworks, label: "frameworks" },
          ].map((t) => (
            <div
              key={t.label}
              className="rounded-xl border border-neutral-200 p-3 dark:border-neutral-800"
            >
              <dd className="text-2xl font-bold" style={accent}>
                {t.value}
              </dd>
              <dt className="mt-0.5 text-xs leading-snug text-neutral-600 dark:text-neutral-400">
                {t.label}
              </dt>
            </div>
          ))}
        </dl>

        {/* The filter STATUS lives up here, next to the numbers it explains, because the filter
            CONTROLS now sit below the standards. Someone who arrives on a filtered link (every
            course page links here as ?state=..&course=..) has to learn in the first screenful that
            the counts above are a narrowed view, not the whole state. It is deliberately not
            print:hidden: a printed filing must say what it left out. Only the reset link, useless
            on paper, is hidden. */}
        {filtered ? (
          <p
            className="mt-5 rounded-xl border-2 px-4 py-3 text-sm leading-relaxed"
            style={{ borderColor: "var(--accent)" }}
            aria-live="polite"
          >
            <strong>This list is filtered.</strong> Showing {stats.total} standard
            {stats.total === 1 ? "" : "s"}
            {subject ? ` in ${subject}` : ""}
            {course ? ` covered by ${course.title}` : ""}, out of {allStats.total} mapped for{" "}
            {name}.{" "}
            <Link href={href({ state })} className={`${textLink} print:hidden`} style={accent}>
              Clear filters
            </Link>
          </p>
        ) : null}

        {canFilter ? (
          <p className="mt-4 print:hidden">
            <a
              href="#narrow"
              className={`${textLink} inline-flex min-h-11 items-center text-sm pointer-coarse:min-h-12`}
              style={accent}
            >
              {filtered ? "Change the filters" : "Narrow by subject or course"} ↓
            </a>
          </p>
        ) : null}

        <StandardsActions plainText={plainText} />
      </header>

      {/* THE DISCLAIMER. Not in the footer, not in small grey type at the bottom — here, before
          a single standard is claimed, because a teacher acting on a stale mapping is the exact
          harm this page could do. */}
      <section
        className="mt-8 rounded-2xl border-2 p-5 sm:p-6"
        style={{ borderColor: "var(--accent)" }}
        aria-labelledby="honesty-heading"
      >
        <h2 id="honesty-heading" className="text-lg font-bold">
          Read this before you rely on it
        </h2>
        <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          <li>
            <strong>We mapped this ourselves.</strong> This alignment was done by {brand} against
            the published standards. It has not been reviewed, endorsed, or approved by{" "}
            {name}&apos;s education authority or by anyone else.
          </li>
          <li>
            <strong>Every code was fetched, then transcribed word for word.</strong> Each
            framework below shows the date its codes and text were retrieved from the publisher.
          </li>
          <li>
            <strong>Standards get revised.</strong> A code can be renumbered or its wording
            changed without notice, and some states publish more than one live edition of the same
            document. Confirm anything you file against your own jurisdiction&apos;s current
            requirements, using the source links below.
          </li>
          <li>
            <strong>We would rather claim less.</strong> Where the courses only partly cover a
            standard, this page says <em>partially covered</em> and explains the gap. Standards we
            considered and could not honestly claim are listed at the bottom, with the reasons.
          </li>
        </ul>
      </section>

      {shown.length === 0 ? (
        <p className="mt-10 text-neutral-600 dark:text-neutral-400">
          No standards match that combination of filters.{" "}
          <Link href={href({ state })} className={textLink} style={accent}>
            Clear the filters
          </Link>{" "}
          to see all {name} standards, or{" "}
          <a href="#narrow" className={textLink} style={accent}>
            change your selection below
          </a>
          .
        </p>
      ) : null}

      {shown.map(({ framework, alignments }) => (
        <section key={framework.id} className="mt-12" aria-labelledby={`fw-${framework.id}`}>
          <div className="border-b border-neutral-200 pb-4 dark:border-neutral-800">
            <p className="text-xs font-semibold uppercase tracking-widest" style={accent}>
              {framework.jurisdiction} · {framework.subject}
            </p>
            <h2 id={`fw-${framework.id}`} className="mt-1 text-2xl font-bold">
              {framework.name}
            </h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {framework.version} · {framework.publisher} · retrieved {framework.fetchedOn}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {framework.adoption}
            </p>
            {/* The most important control on the page: it is how a teacher checks us. It is a
                real touch target, not a 20px inline link. */}
            <a
              href={framework.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${textLink} mt-1 inline-flex min-h-11 items-center wrap-break-word text-sm pointer-coarse:min-h-12`}
              style={accent}
            >
              Read the source document →
            </a>
          </div>

          <ul className="mt-5 space-y-4">
            {alignments.map((a) => (
              <li key={`${framework.id}-${a.code}`} className={card}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="font-mono text-base font-bold wrap-break-word">{a.code}</h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      a.coverage === "full"
                        ? "bg-green-100 text-green-900 dark:bg-green-950 dark:text-green-200"
                        : "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200"
                    }`}
                  >
                    {a.coverage === "full" ? "Covered" : "Partially covered"}
                  </span>
                </div>

                <blockquote className="mt-3 border-l-2 border-neutral-300 pl-3 text-sm leading-relaxed text-neutral-700 dark:border-neutral-700 dark:text-neutral-300">
                  {a.text}
                </blockquote>

                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    Covered by
                  </h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {a.courses.map((c) => (
                      <li key={c.id}>
                        <Link href={`/course/${c.id}`} className={chipIdle}>
                          {c.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-3 space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                    {a.lessons.map((l) => (
                      <li key={l} className="wrap-break-word">
                        · {l}
                      </li>
                    ))}
                  </ul>
                </div>

                {a.note ? (
                  <p className="mt-4 rounded-xl bg-neutral-50 p-3 text-sm leading-relaxed text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300">
                    <span className="font-semibold">
                      {a.coverage === "partial" ? "What we do and don't cover: " : "Note: "}
                    </span>
                    {a.note}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <NotClaimed state={state} />

      {/* THE FILTERS, below the standards on purpose. A teacher who lands on their state wants to
          see standards, not controls: refinement is what you reach for after you have seen what is
          there. They stay plain links driven by searchParams, so every filtered view is still a
          server-rendered URL a reader can share, bookmark, and print, and print:hidden keeps them
          off a state filing. Following one of these links scrolls back to the top of the page,
          which is what we want: the filtered notice in the header explains the new counts.
          tabIndex={-1} on the section so the jump link in the header moves keyboard FOCUS here,
          not just the scroll position, the same reason a skip link carries one. */}
      {canFilter ? (
        <section
          id="narrow"
          tabIndex={-1}
          className="mt-12 print:hidden"
          aria-labelledby="narrow-heading"
        >
          <h2 id="narrow-heading" className="text-2xl font-bold">
            Narrow this list
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
            Filtering rewrites the address bar, so you can bookmark or send a colleague exactly the
            slice you are looking at.
          </p>

          {subjects.length > 1 ? (
            <div className="mt-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Subject
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                <li>
                  <Link
                    href={href({ state, course: course?.slug })}
                    className={subject === undefined ? chipActive : chipIdle}
                    aria-current={subject === undefined ? "true" : undefined}
                  >
                    All subjects
                  </Link>
                </li>
                {subjects.map((s) => (
                  <li key={s}>
                    <Link
                      href={href({ state, subject: subjectSlug(s), course: course?.slug })}
                      className={subject === s ? chipActive : chipIdle}
                      aria-current={subject === s ? "true" : undefined}
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {courses.length > 1 ? (
            <details className="mt-5" open={course !== undefined}>
              <summary className="inline-flex min-h-11 cursor-pointer list-none items-center text-sm font-medium underline focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12">
                {course ? `Filtering by course: ${course.title}` : "Filter by course"}
              </summary>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li>
                  <Link
                    href={href({ state, subject: subject && subjectSlug(subject) })}
                    className={course === undefined ? chipActive : chipIdle}
                    aria-current={course === undefined ? "true" : undefined}
                  >
                    All courses
                  </Link>
                </li>
                {courses.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={href({
                        state,
                        subject: subject && subjectSlug(subject),
                        course: c.slug,
                      })}
                      className={course?.slug === c.slug ? chipActive : chipIdle}
                      aria-current={course?.slug === c.slug ? "true" : undefined}
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ) : null}

          {filtered ? (
            <p className="mt-5 text-sm text-neutral-600 dark:text-neutral-400">
              Showing {stats.total} of {allStats.total} {name} standard
              {allStats.total === 1 ? "" : "s"}.{" "}
              <Link href={href({ state })} className={textLink} style={accent}>
                Clear filters
              </Link>
            </p>
          ) : null}
        </section>
      ) : null}

      <section className="mt-12 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800 print:hidden">
        <h2 className="text-xl font-bold">See it for yourself</h2>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Don&apos;t take the mapping on trust. Open the lesson and check it against the standard.
          Every course publishes its sources too.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/courses"
            className="inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Browse the courses
          </Link>
          <Link
            href={href({ course: course?.slug })}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-neutral-300 px-5 py-2.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 pointer-coarse:min-h-12"
          >
            Pick a different state
          </Link>
        </div>
      </section>
    </main>
  );
}

// The honest omissions — the evidence the map was not padded. Rendered whole (not filtered):
// the rejected list is jurisdiction-level context a filer should always see.
function NotClaimed({ state }: { state: StateCode }) {
  const data = jurisdictionData(state);
  if (!data || data.notClaimed.length === 0) return null;

  return (
    <section className="mt-12" aria-labelledby="rejected-heading">
      <h2 id="rejected-heading" className="text-2xl font-bold">
        What we don&apos;t claim
      </h2>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        A standards page is only worth reading if the omissions are honest too. We looked at these
        and left them out:
      </p>
      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
        {data.notClaimed.map((n) => (
          <li key={n.heading}>
            <strong>{n.heading}</strong> {n.body}
          </li>
        ))}
      </ul>
    </section>
  );
}
