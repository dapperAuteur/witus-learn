import Link from "next/link";
import { KIND_TITLE, needLabel, RESET_RULE, STATE_LABEL, type ReleaseReadiness } from "@/lib/lesson-review";
import type { LessonReviewSummary } from "@/lib/lesson-review-summary";
import { CorrectionAppliedButton, ReleaseReviewHoldButton } from "@/components/review-actions";

const fmt = (d: Date | string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });

export interface SignoffLesson {
  title: string;
  /** The lesson page, when the course has a readable URL. */
  href: string | null;
  summary: LessonReviewSummary;
}

const STATE_TONE: Record<string, string> = {
  cleared: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100",
  pending_correction: "bg-amber-100 text-amber-900 dark:bg-amber-900 dark:text-amber-100",
  not_cleared: "bg-rose-100 text-rose-900 dark:bg-rose-900 dark:text-rose-100",
  changed_since_review: "bg-sky-100 text-sky-900 dark:bg-sky-900 dark:text-sky-100",
  awaiting: "bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-100",
};

/**
 * Reviewer sign-off on a course's /teach page (plans/93 section 1), beside the reviewer invites.
 * One row per need, its state against the lesson as it stands now, the reviewer's credit, and any
 * correction still to apply (this one course only: no page lists corrections across courses).
 *
 * "Release the review hold" appears for the platform owner or this school's admin once every QR and P need is cleared and no
 * decision is left; the server re-checks before clearing anything. Vetting stays a separate step.
 */
export function ReviewSignoffPanel({
  courseId,
  lessons,
  readiness,
  isOwner,
  canRelease,
  holdReason,
}: {
  courseId: string;
  lessons: SignoffLesson[];
  readiness: ReleaseReadiness;
  /** The platform owner: may mark a correction "applied as written". */
  isOwner: boolean;
  /** The platform owner or this school's admin: may release the review hold (BAM, 2026-10-14). */
  canRelease: boolean;
  holdReason: string | null;
}) {
  return (
    <section aria-labelledby="review-signoff-heading" className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 id="review-signoff-heading" className="font-semibold">
        Reviewer sign-off
      </h2>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Lessons marked &ldquo;Before release&rdquo; and where each need stands. Qualified-reviewer needs: {readiness.qrCleared} of{" "}
        {readiness.qrTotal} cleared. Practitioner needs: {readiness.pCleared} of {readiness.pTotal} cleared.
        {readiness.openDecisions > 0
          ? ` ${readiness.openDecisions} decision ${readiness.openDecisions === 1 ? "marker is" : "markers are"} open; a decision clears only by editing the marker out of the course file.`
          : ""}{" "}
        {RESET_RULE}
      </p>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        A reviewer records a verdict only after you add their name and credential under &ldquo;Invite someone to review this
        course&rdquo;. The platform owner may clear practitioner needs with their own demonstration, never a qualified-reviewer need.
      </p>

      {canRelease && holdReason ? (
        readiness.ready ? (
          <ReleaseReviewHoldButton courseId={courseId} />
        ) : (
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            The hold can be released here once every qualified-reviewer and practitioner need is cleared and no decision is open.
          </p>
        )
      ) : null}

      <div className="mt-3 overflow-x-auto">
        <ul className="min-w-0 divide-y divide-neutral-100 dark:divide-neutral-800/60">
          {lessons.map((l) => (
            <li key={l.summary.lessonId} className="py-3 text-sm">
              {l.href ? (
                <Link href={l.href} className="font-medium underline hover:no-underline" style={{ color: "var(--accent)" }}>
                  {l.title}
                </Link>
              ) : (
                <span className="font-medium">{l.title}</span>
              )}
              <ul className="mt-1 space-y-2">
                {l.summary.rows.map((r) => (
                  <li key={r.kind}>
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="text-neutral-600 dark:text-neutral-400">{KIND_TITLE[r.kind]}</span>
                      <span className={`rounded-full px-2 py-0.5 text-xs ${STATE_TONE[r.state] ?? STATE_TONE.awaiting}`}>
                        {r.stillMarked ? STATE_LABEL[r.state] : `${STATE_LABEL[r.state]} (marker removed)`}
                      </span>
                    </span>
                    {r.whos.length ? <span className="block text-neutral-600 dark:text-neutral-400">Needs: {r.whos.join("; ")}</span> : null}
                    {r.review ? (
                      <span className="block text-neutral-600 dark:text-neutral-400">
                        {r.review.reviewerName}, {r.review.reviewerCredential}, {fmt(r.review.decidedAt)}
                        {r.review.correctionAppliedAt ? `, correction applied ${fmt(r.review.correctionAppliedAt)}` : ""}
                      </span>
                    ) : null}
                    {r.state === "pending_correction" && r.review?.correction ? (
                      <span className="mt-1 block rounded-md bg-amber-50 p-2 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
                        <span className="font-medium">Correction to make: </span>
                        <span className="whitespace-pre-line">{r.review.correction}</span>
                        {isOwner ? (
                          <span className="block">
                            <CorrectionAppliedButton courseId={courseId} lessonId={l.summary.lessonId} needKind={r.kind} />
                          </span>
                        ) : null}
                      </span>
                    ) : null}
                  </li>
                ))}
                {l.summary.decisions.map((d, i) => (
                  <li key={`decision-${i}`} className="text-neutral-600 dark:text-neutral-400">
                    <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs text-rose-900 dark:bg-rose-900 dark:text-rose-100">
                      Open
                    </span>{" "}
                    Needs {needLabel(d)}: {d.who}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
