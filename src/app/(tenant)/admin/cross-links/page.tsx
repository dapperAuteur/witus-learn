import Link from "next/link";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { requirePlatformOwner } from "@/lib/session";
import {
  CROSS_LINKS_GENERATED_AT,
  buildCrossLinkTargets,
  crossLinkKey,
  crossLinkTarget,
  groupedCrossLinks,
} from "@/lib/cross-links";
import {
  buildLessonLinkIndex,
  courseTitleFor,
  lessonTitleFor,
  reviewLocation,
} from "@/lib/lesson-links";
import { phraseAppearsIn } from "@/lib/lesson-excerpt";
import { countReviewGroup, crossLinkGroupSummary, reviewGroupStartsOpen } from "@/lib/review-lists";
import { ReviewContext } from "@/components/review-context";
import { CrossLinkDecision, type CrossLinkState } from "@/components/cross-link-decision";

export const metadata: Metadata = {
  title: "Cross-course links",
  description: "Approve the links between courses that learners see, one mention at a time.",
};

// The third review board, beside /admin/citations and /admin/research, and the one that decides what
// learners SEE rather than what the catalog claims.
//
// `pnpm cross-links` finds where one course talks about another and does not link to it. Its own
// header says the load-bearing thing about those findings: whether two courses should link is a
// JUDGMENT CALL. So the finding is offered here as a candidate and nothing renders on the lesson
// until the owner approves it, one mention at a time, exactly like the ebook board.
//
// Each card carries THE SENTENCE THE MENTION SITS IN, and that is not decoration. A decision made
// blind is worse than no decision, because it closes the item and nobody looks again
// (src/lib/lesson-links.ts). Judging "does the architecture course mean the Who Gets Named course,
// or is that phrase ordinary English here" is impossible from two slugs and trivial from one
// sentence.
//
// Tenant scope: the candidate list is global (a mention is a property of the text), every decision
// and every lookup on this page is scoped to the tenant resolved from the request host, and a target
// this school does not host says so instead of offering a link that would 404.
const statusClass: Record<CrossLinkState, string> = {
  unreviewed: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
  approved: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100",
  dismissed: "bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
};

const STATUS_LABEL: Record<CrossLinkState, string> = {
  unreviewed: "Not reviewed",
  approved: "Approved, live on the lesson",
  dismissed: "Dismissed",
};

export default async function CrossLinksPage() {
  await requirePlatformOwner();
  const sdb = await getScopedDb();
  const groups = groupedCrossLinks();
  const { approvals, dismissals } = await sdb.listCrossLinkDecisions();

  const all = groups.flatMap((g) => g.candidates);

  // Where each mention sits, so the owner can open the lesson rather than judge two slugs. Scoped,
  // so a course this school does not host renders its names with no link and says why.
  const links = buildLessonLinkIndex(await sdb.listLessonLocations(groups.map((g) => g.courseSlug)));

  // The TARGET half, the hazard this feature has to get right: the registry is global and the
  // catalog is per tenant, so an approved link may point at a course this school does not host,
  // holds unpublished, or holds twice under two instructors. The board says which; the lesson page
  // renders nothing at all.
  const targets = buildCrossLinkTargets(
    await sdb.listCourseLocations(all.map((c) => c.targetCourseSlug)),
  );

  // The recorded sentence is checked against the live lesson rather than trusted, the same as the
  // source-check board: a candidate whose sentence has been rewritten out of the course is stale,
  // and approving a link on evidence that is gone is exactly the blind decision this page exists to
  // prevent.
  const bodies = await sdb.listLessonBodies(
    all.map((c) => ({ courseSlug: c.sourceCourseSlug, lessonSlug: c.sourceLessonSlug })),
  );
  const bodyByRef = new Map(bodies.map((b) => [`${b.courseSlug} ${b.lessonSlug}`, b.text]));

  function stateOf(key: string): CrossLinkState {
    if (approvals.has(key)) return "approved";
    if (dismissals.has(key)) return "dismissed";
    return "unreviewed";
  }

  const openCount = all.filter((c) => stateOf(crossLinkKey(c)) === "unreviewed").length;
  const approvedCount = all.filter((c) => stateOf(crossLinkKey(c)) === "approved").length;

  const counted = groups.map((group) => ({
    ...group,
    counts: countReviewGroup(group.candidates, (c) => stateOf(crossLinkKey(c)) === "unreviewed"),
  }));

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">Cross-course links</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Places where one course talks about another and does not link to it. Nothing here is live:
        a learner sees a link only after you approve that exact mention, and the lesson text itself is
        never edited.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Each candidate quotes the sentence the mention sits in, so you can tell a real pointer from a
        coincidence of ordinary English without opening the lesson.
      </p>
      <p className="mt-2 text-sm font-medium">
        {openCount} to review of {all.length} found, {approvedCount} approved, across{" "}
        {groups.length} course{groups.length === 1 ? "" : "s"}.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Courses start collapsed. Each summary line says how many mentions it holds and how many are
        still waiting on you.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        The other two review lists are{" "}
        <Link href="/admin/citations" className="underline">
          Citations
        </Link>{" "}
        and{" "}
        <Link href="/admin/research" className="underline">
          Source checks
        </Link>
        .
      </p>

      {all.length === 0 ? (
        <div className="mt-6 rounded-lg border border-neutral-200 p-4 text-sm dark:border-neutral-800">
          <p className="font-medium">No candidates in the registry yet.</p>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            The list is generated from the lessons in the database and committed to the repo. Run{" "}
            <code className="rounded bg-neutral-100 px-1 py-0.5 dark:bg-neutral-800">
              pnpm gen:cross-links
            </code>{" "}
            and commit{" "}
            <code className="rounded bg-neutral-100 px-1 py-0.5 dark:bg-neutral-800">
              src/lib/cross-link-content/cross-links.ts
            </code>
            . This is empty because nobody has run it, not because the catalog has no connections:{" "}
            <code className="rounded bg-neutral-100 px-1 py-0.5 dark:bg-neutral-800">
              pnpm cross-links
            </code>{" "}
            finds well over a hundred in the committed courses alone.
          </p>
        </div>
      ) : (
        <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
          Registry generated {CROSS_LINKS_GENERATED_AT ?? "at an unrecorded date"} by{" "}
          <code>pnpm gen:cross-links</code>. Re-run it after adding or rewriting courses.
        </p>
      )}

      {counted.map((group) => (
        <details
          key={group.courseSlug}
          open={reviewGroupStartsOpen(group.counts, counted.length)}
          className="group mt-4 rounded-lg border border-neutral-200 dark:border-neutral-800"
        >
          <summary className="flex min-h-11 cursor-pointer list-none flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12">
            <span aria-hidden="true" className="text-xs transition-transform group-open:rotate-90">
              ▶
            </span>
            <h2 className="text-base font-semibold tracking-tight sm:text-lg">{group.courseTitle}</h2>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {crossLinkGroupSummary(group.counts)}
            </span>
          </summary>
          <ul className="space-y-6 px-4 pt-2 pb-4">
            {group.candidates.map((c) => {
              const key = crossLinkKey(c);
              const state = stateOf(key);
              const decision = approvals.get(key) ?? dismissals.get(key);
              const where = reviewLocation(links, c.sourceCourseSlug, c.sourceLessonSlug);
              const target = crossLinkTarget(targets, c.targetCourseSlug);
              const body = bodyByRef.get(`${c.sourceCourseSlug} ${c.sourceLessonSlug}`) ?? null;
              const sentenceIsLive = phraseAppearsIn(body, c.sentence);
              const locationNote =
                body && !sentenceIsLive
                  ? "That sentence is no longer in this lesson. The course may have been rewritten since the registry was generated, so re-run pnpm gen:cross-links before deciding."
                  : where.note;
              return (
                <li
                  key={key}
                  className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusClass[state]}`}
                    >
                      {STATUS_LABEL[state]}
                    </span>
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                      found by {c.via}
                    </span>
                  </div>

                  <h3 className="mt-2 text-base font-semibold">
                    Link to {target.courseTitle ?? c.targetCourseTitle}
                  </h3>
                  {target.href ? (
                    <p className="text-sm">
                      <Link
                        href={target.href}
                        className="inline-flex min-h-11 items-center underline focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
                      >
                        Open the course a learner would be sent to
                      </Link>
                    </p>
                  ) : (
                    <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                      {target.note}
                    </p>
                  )}

                  <ReviewContext
                    courseLabel={courseTitleFor(links, c.sourceCourseSlug) ?? c.sourceCourseTitle}
                    lessonLabel={
                      lessonTitleFor(links, c.sourceCourseSlug, c.sourceLessonSlug) ??
                      c.sourceLessonTitle
                    }
                    href={where.href}
                    isLesson={where.isLesson}
                    note={locationNote}
                    excerpt={c.sentence}
                    excerptLabel="The sentence the mention sits in"
                  />

                  <CrossLinkDecision
                    sourceCourseSlug={c.sourceCourseSlug}
                    sourceLessonSlug={c.sourceLessonSlug}
                    targetCourseSlug={c.targetCourseSlug}
                    initialState={state}
                    initialNote={
                      (approvals.get(key)?.note ?? dismissals.get(key)?.reason ?? "") as string
                    }
                    targetIsLinkable={Boolean(target.href)}
                  />

                  {decision ? (
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                      Decided{" "}
                      {(state === "approved"
                        ? approvals.get(key)?.approvedAt
                        : dismissals.get(key)?.dismissedAt
                      )
                        ?.toISOString()
                        .slice(0, 10) ?? "at an unrecorded time"}
                      .
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </details>
      ))}
    </main>
  );
}
