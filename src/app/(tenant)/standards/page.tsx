import type { Metadata } from "next";
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
  coursesIn,
  filterGroups,
  isStateCode,
  jurisdictionData,
  jurisdictionName,
  mappedStates,
  scopeAlignments,
  subjectsIn,
  summarizeStandards,
  toPlainText,
  type ScopedFramework,
  type StateCode,
  type Subject,
} from "@/lib/standards";
import { StandardsActions } from "@/components/standards-actions";

// ─────────────────────────────────────────────────────────────────────────────
// /standards — the state-standards finder: a teacher, homeschooler, or administrator picks
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

type SearchParams = Promise<{ state?: string; subject?: string; course?: string }>;

function subjectSlug(s: Subject): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function href(params: { state?: string; subject?: string; course?: string }): string {
  const qs = new URLSearchParams();
  if (params.state) qs.set("state", params.state);
  if (params.subject) qs.set("subject", params.subject);
  if (params.course) qs.set("course", params.course);
  const s = qs.toString();
  return s ? `/standards?${s}` : "/standards";
}

/** Normalize ?state= to a real code, or null. Anything unrecognizable 404s (never redirects). */
function parseState(raw: string | undefined): StateCode | null {
  if (!raw) return null;
  const up = raw.toUpperCase();
  return isStateCode(up) ? up : null;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const tenant = await requireTenant();
  const brand = brandName(tenant);
  const sp = await searchParams;
  const state = parseState(sp.state);

  const title = state ? `${jurisdictionName(state)} standards alignment` : "Find your state's standards";
  const description = state
    ? `Which ${jurisdictionName(state)} standards the ${brand} courses cover — the exact code, the standard's own words, and the lesson that covers it.`
    : `Pick your state and see which ${brand} courses meet which of its standards — exact codes, verbatim text, and source links, printable for a state filing.`;
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
  const state = parseState(sp.state);
  if (sp.state && !state) notFound();

  // Tenant boundary. Everything below is derived from what THIS tenant actually publishes.
  const available = await getAlignedCourses(tenant.id, allAlignedCourseSlugs());
  const allGroups = scopeAlignments(available);

  // A tenant that hosts none of the mapped curriculum gets no standards page at all — better a
  // 404 than a finder that implies an alignment for courses it does not have.
  if (allGroups.length === 0) notFound();

  // Which mapped states have at least one claim THIS tenant's catalog can back. A state whose
  // data exists but rests entirely on courses this tenant does not publish is treated as
  // not-yet-available here — an honest empty is better than a page of dropped claims.
  const statesHere = mappedStates()
    .map((code) => ({ code, groups: scopeAlignments(available, code) }))
    .filter((s) => s.groups.length > 0);

  if (!state) return <PickerView brand={brand} statesHere={statesHere} />;

  const stateEntry = statesHere.find((s) => s.code === state);
  if (!stateEntry) return <ComingView brand={brand} state={state} statesHere={statesHere} />;

  return (
    <StateView
      brand={brand}
      state={state}
      groups={stateEntry.groups}
      subjectParam={sp.subject}
      courseParam={sp.course}
    />
  );
}

// ── The picker — the finder's front door ─────────────────────────────────────

function PickerView({
  brand,
  statesHere,
}: {
  brand: string;
  statesHere: { code: StateCode; groups: ScopedFramework[] }[];
}) {
  const mappedCodes = new Set(statesHere.map((s) => s.code));
  const rest = US_JURISDICTIONS.filter((j) => !mappedCodes.has(j.code));

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest" style={accent}>
          {brand}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
          Find your state&apos;s standards
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          Pick your state to see which {brand} courses meet which of its published standards —
          the exact code, the standard&apos;s own words, the lesson that covers it, and a link to
          the source document. Built for teachers, homeschoolers, and administrators; printable
          and copyable for a state filing.
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
          How this map is made — and why most states aren&apos;t on it yet
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          We map a state only after fetching its actual standards documents and checking each
          standard against actual lesson content. Nothing is cited from memory, partial coverage
          is labelled as loudly as full coverage, and each framework shows the date it was
          retrieved. That takes time per state — so states appear here as their mapping is
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
            ? `${name}'s standards have been mapped, but none of the standards rest on courses ${brand} currently publishes — so there is nothing we can honestly show you here yet.`
            : isNext
              ? `${name} is next in the queue. We haven't published its mapping yet because our rule is fetch-then-verify: every code is retrieved from ${name}'s own standards documents and checked against actual lesson content before it appears here.`
              : `We haven't mapped ${name}'s standards yet. Every state gets the same treatment: fetch the actual standards documents, transcribe each code verbatim, and check it against actual lesson content — we publish nothing before that is done.`}
        </p>
      </header>

      <section className="mt-8" aria-labelledby="meanwhile-heading">
        <h2 id="meanwhile-heading" className="text-xl font-bold">
          What you can do meanwhile
        </h2>
        <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          <li>
            The courses work in {name} today — standards mapping changes the paperwork, not the
            teaching. Every course publishes its sources, so you can check any lesson against your
            own state&apos;s requirements.
          </li>
          <li>
            The mapped states below show exactly what a finished mapping looks like — codes,
            verbatim standard text, per-lesson evidence, and honest &ldquo;partial&rdquo; labels.
            {statesHere.length > 0 ? " Use them as the template for your own crosswalk." : ""}
          </li>
          {statesHere.map(({ code, groups }) => {
            const stats = summarizeStandards(groups);
            return (
              <li key={code}>
                <Link href={href({ state: code })} className={textLink} style={accent}>
                  {jurisdictionName(code)} — {stats.total} standards mapped
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
  const plainText = toPlainText(shown, brand);
  const filtered = Boolean(subject || course);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
      <nav className="text-sm print:hidden">
        <Link href={href({})} className={textLink} style={accent}>
          ← All states
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
          Designed for high school. Below is every {name} standard these courses cover — the
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
            changed without notice — Indiana currently publishes two live editions of several of
            its high-school standards documents, and their text differs. Confirm anything you file
            against your own jurisdiction&apos;s current requirements, using the source links
            below.
          </li>
          <li>
            <strong>We would rather claim less.</strong> Where the courses only partly cover a
            standard, this page says <em>partially covered</em> and explains the gap. Standards we
            considered and could not honestly claim are listed at the bottom, with the reasons.
          </li>
        </ul>
      </section>

      {/* Filters: plain links, so the page stays server-rendered, shareable, and printable. */}
      <section className="mt-8 print:hidden" aria-label="Filter the alignment">
        {subjects.length > 1 ? (
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Subject
            </h2>
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
          <details className="mt-4" open={course !== undefined}>
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
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400" aria-live="polite">
            Showing {stats.total} standard{stats.total === 1 ? "" : "s"}
            {subject ? ` in ${subject}` : ""}
            {course ? ` covered by ${course.title}` : ""}.{" "}
            <Link href={href({ state })} className={textLink} style={accent}>
              Clear filters
            </Link>
          </p>
        ) : null}
      </section>

      {shown.length === 0 ? (
        <p className="mt-10 text-neutral-600 dark:text-neutral-400">
          No standards match that combination of filters.{" "}
          <Link href={href({ state })} className={textLink} style={accent}>
            Clear the filters
          </Link>{" "}
          to see all {name} standards.
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

      <section className="mt-12 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800 print:hidden">
        <h2 className="text-xl font-bold">See it for yourself</h2>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Don&apos;t take the mapping on trust — open the lesson and check it against the standard.
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
            href={href({})}
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
