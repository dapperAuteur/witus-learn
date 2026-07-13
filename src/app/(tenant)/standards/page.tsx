import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { ogImageUrl } from "@/lib/og";
import { getAlignedCourses } from "@/db/queries/standards";
import {
  STANDARDS_FETCHED_ON,
  allAlignedCourseSlugs,
  scopeAlignments,
  summarizeStandards,
  toPlainText,
} from "@/lib/standards";
import { StandardsActions } from "@/components/standards-actions";

// ─────────────────────────────────────────────────────────────────────────────
// /standards — what this curriculum actually satisfies, and what it does not.
//
// THE RULE THIS PAGE LIVES BY: this page makes a claim, to teachers and to homeschooling
// parents who may file it with a state, about public education requirements. So:
//   · Every code and every quoted standard was fetched from its publisher and transcribed
//     verbatim (see the header of src/lib/standards.ts). Nothing here is remembered.
//   · Every claim links out to the source document, so a teacher can check us in one click.
//   · "Partially covered" is stated as loudly as "covered", and the reason is given. We would
//     rather lose a checkbox than have a parent file something that isn't true.
//   · The fetch date is on the page, above the fold of the disclosure, because standards get
//     revised and this mapping can go stale.
//
// Multi-tenant: the alignment table is a static file keyed by course SLUG. getAlignedCourses()
// is the tenant boundary — it returns only THIS tenant's published courses, and scopeAlignments()
// then drops any standard none of them cover. A tenant that shares only Season 1 therefore sees
// only the Season 1 standards, and 404s entirely if it hosts none of this curriculum.
// ─────────────────────────────────────────────────────────────────────────────

export async function generateMetadata(): Promise<Metadata> {
  const tenant = await requireTenant();
  const brand = brandName(tenant);
  const title = "Standards alignment";
  const description = `Which Indiana and Washington, D.C. high-school standards the ${brand} curriculum covers, which lesson covers each one, and where it only covers them partly.`;
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

export default async function StandardsPage() {
  const tenant = await requireTenant();
  const brand = brandName(tenant);

  // Tenant boundary. Everything below is derived from what THIS tenant actually publishes.
  const available = await getAlignedCourses(tenant.id, allAlignedCourseSlugs());
  const groups = scopeAlignments(available);

  // A tenant that hosts none of this curriculum gets no standards page at all — better a 404
  // than a page that implies an alignment for courses it does not have.
  if (groups.length === 0) notFound();

  const stats = summarizeStandards(groups);
  const plainText = toPlainText(groups, brand);

  const card =
    "rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 print:border-neutral-400";
  const textLink = "font-medium underline focus-visible:outline-2 focus-visible:outline-offset-2";
  const accent = { color: "var(--accent)" };

  const jurisdictions = [...new Set(groups.map((g) => g.framework.jurisdiction))];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest" style={accent}>
          {brand}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">Standards alignment</h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          Designed for high school. Below is every {jurisdictions.join(" and ")} standard this
          curriculum covers — the exact code, the standard&apos;s own words, and the lesson that
          covers it. Where we only cover part of a standard, it says so, and says which part.
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
            the published standards. It has not been reviewed, endorsed, or approved by the Indiana
            Department of Education, by OSSE, or by any other education authority.
          </li>
          <li>
            <strong>Retrieved {STANDARDS_FETCHED_ON}.</strong> Every code and every quoted standard
            on this page was fetched from its publisher on that date and copied word for word.
          </li>
          <li>
            <strong>Standards get revised.</strong> A code can be renumbered or its wording changed
            without notice — Indiana currently publishes two live editions of its Economics
            standards, and their text differs. Confirm anything you file against your own
            jurisdiction&apos;s current requirements, using the source links below.
          </li>
          <li>
            <strong>We would rather claim less.</strong> Where the curriculum only partly covers a
            standard, this page says <em>partially covered</em> and explains the gap. Standards we
            considered and could not honestly claim are not listed at all.
          </li>
        </ul>
      </section>

      {groups.map(({ framework, alignments }) => (
        <section key={framework.id} className="mt-12" aria-labelledby={`fw-${framework.id}`}>
          <div className="border-b border-neutral-200 pb-4 dark:border-neutral-800">
            <p className="text-xs font-semibold uppercase tracking-widest" style={accent}>
              {framework.jurisdiction}
            </p>
            <h2 id={`fw-${framework.id}`} className="mt-1 text-2xl font-bold">
              {framework.name}
            </h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {framework.version} · {framework.publisher}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {framework.adoption}
            </p>
            <a
              href={framework.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${textLink} mt-2 inline-block wrap-break-word text-sm`}
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
                        <Link
                          href={`/course/${c.id}`}
                          className="inline-flex min-h-11 items-center rounded-full border border-neutral-300 px-3.5 py-1.5 text-sm transition-colors hover:border-current focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 pointer-coarse:min-h-12"
                        >
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

      <section className="mt-12" aria-labelledby="rejected-heading">
        <h2 id="rejected-heading" className="text-2xl font-bold">
          What we don&apos;t claim
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          A standards page is only worth reading if the omissions are honest too. We looked at
          these and left them out:
        </p>
        <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          <li>
            <strong>Mathematics — nothing.</strong> This curriculum does no mathematics
            instruction, so it meets no Common Core or Indiana mathematics standard.
          </li>
          <li>
            <strong>Science — almost nothing.</strong> There is no laboratory work, no
            investigation and no scientific modelling here. We claim a single NGSS performance
            expectation, partially, and we explain exactly why above. It is not a science course
            and we will not sell it as one.
          </li>
          <li>
            <strong>Prohibition and mass incarceration, in D.C.</strong> The curriculum teaches
            both. D.C.&apos;s 2023 social studies standards contain no standard on either, so
            there is nothing for us to cite. The gap is in the standards, not the lessons.
          </li>
          <li>
            <strong>D.C.&apos;s economics and geography strands.</strong> In the 2023 document
            these are un-numbered &ldquo;statements of practice&rdquo;, not coded standards. There
            is no code to cite, so we cite none — even though the economics content lines up well.
          </li>
        </ul>
      </section>

      <section className="mt-12 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800 print:hidden">
        <h2 className="text-xl font-bold">See it for yourself</h2>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Don&apos;t take the mapping on trust — open the lesson and check it against the standard.
          Every course publishes its sources too.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/explore"
            className="inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Back to the map
          </Link>
          <Link
            href="/courses"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-neutral-300 px-5 py-2.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 pointer-coarse:min-h-12"
          >
            Browse the courses
          </Link>
        </div>
      </section>
    </main>
  );
}
