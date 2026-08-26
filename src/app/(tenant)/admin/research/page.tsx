import Link from "next/link";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { requirePlatformOwner } from "@/lib/session";
import { researchChecksByKey } from "@/db/queries/research-checks";
import {
  RESEARCH_CHECK_STATUS_LABEL,
  groupedResearchChecks,
  type ResearchCheckStatus,
} from "@/lib/research-checks";
import {
  buildLessonLinkIndex,
  courseTitleFor,
  lessonTitleFor,
  reviewLocation,
} from "@/lib/lesson-links";
import { phraseAppearsIn } from "@/lib/lesson-excerpt";
import {
  countReviewGroup,
  researchGroupSummary,
  reviewGroupStartsOpen,
} from "@/lib/review-lists";
import { ResearchCheckForm } from "@/components/research-check-form";
import { ReviewContext } from "@/components/review-context";

export const metadata: Metadata = { title: "Source checks" };

// Owner-only. The facts in the catalog that need a PRIMARY source and that Claude could not get to.
//
// The checks are COMMITTED content (src/lib/research-checks.ts); only the status and the answer live
// in the database, scoped to the tenant resolved from the request host by getScopedDb(). Claude reads
// the answers back with `pnpm research:list`, fixes the lesson, and deletes the check from the index.
// The list shrinking is the progress bar, the same shape as the standards-coverage ratchet.

const statusClass: Record<ResearchCheckStatus, string> = {
  open: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
  verified: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100",
  corrected: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200",
  blocked: "bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
};

const severityClass = {
  high: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
  medium: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
  low: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
} as const;

export default async function ResearchChecksPage() {
  await requirePlatformOwner();
  const sdb = await getScopedDb();
  const answers = await researchChecksByKey(sdb.tenantId);
  const groups = groupedResearchChecks();

  const all = groups.flatMap((g) => g.checks);

  // Where each hedge actually is. A check carries a course and, when someone recorded it, a lesson
  // (src/lib/research-checks.ts explains why that field is written by hand and never guessed). Both
  // resolve through the scoped DAL, so a check filed against a course this school does not host
  // renders its names without a link rather than pointing at another brand's lesson.
  //
  // `course` is a slug for most checks and a GROUP LABEL for the rest ("pricing: market anchors"),
  // which is exactly the case the lookup must not paper over: a label matches no course, so those
  // checks say the location was never recorded, which is true.
  const links = buildLessonLinkIndex(await sdb.listLessonLocations(groups.map((g) => g.course)));

  // The recorded sentence is verified against the live lesson rather than trusted. A check whose
  // hedge has since been rewritten out of the course is stale, and knowing that is worth more than
  // the quotation itself.
  const bodies = await sdb.listLessonBodies(
    all.flatMap((c) => (c.lesson ? [{ courseSlug: c.course, lessonSlug: c.lesson }] : [])),
  );
  const bodyByRef = new Map(bodies.map((b) => [`${b.courseSlug} ${b.lessonSlug}`, b.text]));
  const openCount = all.filter((c) => (answers.get(c.key)?.status ?? "open") === "open").length;

  // Each course collapses, so its summary line has to carry the counts or a collapsed board hides
  // the queue behind a row of course names. A check with no database row has never been looked at,
  // which is exactly "open".
  const counted = groups.map((group) => ({
    ...group,
    counts: countReviewGroup(
      group.checks,
      (c) => (answers.get(c.key)?.status ?? "open") === "open",
    ),
  }));

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">Source checks</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Facts in the catalog that need a primary source, and that Claude could not get to: paywalled
        statutes, a call to a county clerk, a trade body&rsquo;s current standard. Answer one and it
        goes straight to Claude, who fixes the lesson and removes the check.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Each check that is tied to a lesson quotes the hedging sentence and links to it, so you can
        read it in context before deciding. A few are not tied to one sentence, and those say so.
      </p>
      <p className="mt-2 text-sm font-medium">
        {openCount} open of {all.length} total.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Courses start collapsed, and each summary line says how many checks it holds and how many of
        those are still open.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        This is the flagged list. The other one,{" "}
        <Link href="/admin/citations" className="underline">
          Citations
        </Link>
        , holds every source cited by a staged course.
      </p>
      <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
        A check cannot be closed without saying what you found. A check marked verified with nothing
        written down is worse than an open one, because it stops anyone looking again.
      </p>

      {counted.map((group) => (
        <details
          key={group.course}
          open={reviewGroupStartsOpen(group.counts, counted.length)}
          className="group mt-4 rounded-lg border border-neutral-200 dark:border-neutral-800"
        >
          <summary className="flex min-h-11 cursor-pointer list-none flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12">
            <span aria-hidden="true" className="text-xs transition-transform group-open:rotate-90">
              ▶
            </span>
            <h2 className="text-base font-semibold tracking-tight sm:text-lg">{group.course}</h2>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {researchGroupSummary(group.counts)}
            </span>
          </summary>
          <ul className="space-y-6 px-4 pt-2 pb-4">
            {group.checks.map((check) => {
              const row = answers.get(check.key);
              const status = (row?.status ?? "open") as ResearchCheckStatus;
              const where = reviewLocation(links, check.course, check.lesson ?? null);
              const body = check.lesson
                ? (bodyByRef.get(`${check.course} ${check.lesson}`) ?? null)
                : null;
              // Three states, and the difference matters. Present: quote it. Recorded but gone from
              // the lesson: say so, because the check may be settling a question the course no
              // longer asks. Never recorded: say that instead of implying there is no hedge.
              const quoteIsLive = check.quote ? phraseAppearsIn(body, check.quote) : false;
              const locationNote = check.lesson
                ? check.quote && body && !quoteIsLive
                  ? "The recorded sentence is no longer in this lesson. The course may have been rewritten since this check was filed."
                  : where.note
                : where.href
                  ? "No lesson was recorded for this check, so it is not tied to one sentence."
                  : // Several checks name a group label rather than a course slug (the pricing
                    // anchors, a course that does not exist yet). Saying the course cannot be found
                    // is more useful than saying no lesson was recorded.
                    where.note;
              return (
                <li
                  key={check.key}
                  className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${severityClass[check.severity]}`}
                    >
                      {check.severity}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusClass[status]}`}
                    >
                      {RESEARCH_CHECK_STATUS_LABEL[status]}
                    </span>
                  </div>

                  <h3 className="mt-2 text-base font-semibold">{check.title}</h3>

                  <dl className="mt-3 space-y-3 text-sm">
                    <div>
                      <dt className="font-medium">The question</dt>
                      <dd className="text-neutral-700 dark:text-neutral-300">{check.question}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">What the course currently says</dt>
                      <dd className="text-neutral-700 dark:text-neutral-300">{check.claim}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Why it matters</dt>
                      <dd className="text-neutral-700 dark:text-neutral-300">{check.stakes}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">What Claude needs back</dt>
                      <dd>
                        <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
                          {check.needs.map((n) => (
                            <li key={n}>{n}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium">Where to look</dt>
                      <dd>
                        <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
                          {check.where.map((w) => (
                            <li key={w}>{w}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>

                  <ReviewContext
                    courseLabel={courseTitleFor(links, check.course) ?? check.course}
                    lessonLabel={
                      lessonTitleFor(links, check.course, check.lesson ?? null) ??
                      check.lesson ??
                      null
                    }
                    href={where.href}
                    isLesson={where.isLesson}
                    note={locationNote}
                    excerpt={quoteIsLive ? (check.quote ?? null) : null}
                    excerptLabel="The sentence in the lesson"
                  />

                  <ResearchCheckForm
                    checkKey={check.key}
                    initialStatus={status}
                    initialAnswer={row?.answer ?? ""}
                    updatedAt={row?.updatedAt ? row.updatedAt.toISOString() : null}
                  />
                </li>
              );
            })}
          </ul>
        </details>
      ))}
    </main>
  );
}
