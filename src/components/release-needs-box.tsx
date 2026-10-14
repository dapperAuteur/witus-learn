import { KIND_TITLE, needLabel, REVIEW_DISCLAIMER } from "@/lib/lesson-review";
import type { LessonReviewSummary, NeedSummary } from "@/lib/lesson-review-summary";
import { CorrectionAppliedButton } from "@/components/review-actions";

const fmt = (d: Date | string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

function statusNote(r: NeedSummary): string {
  if (!r.review) return "";
  if (r.state === "changed_since_review") return ` It changed after a review on ${fmt(r.review.decidedAt)} and needs a fresh one.`;
  if (r.state === "not_cleared") return ` A reviewer did not clear it on ${fmt(r.review.decidedAt)}.`;
  if (r.state === "pending_correction") return " A reviewer cleared it with a correction that has not been applied yet.";
  return "";
}

/**
 * Reviewer sign-off (plans/93 section 1), at the top of a lesson page. Server component.
 *
 * Open needs render in a box that begins "Before release", which keeps the rigging course's quiz
 * question ("a box at the top that begins 'Before release'") true now that the marker lines have
 * left the lesson text. A cleared need becomes a credit line: who reviewed it, as what, and when,
 * with one sentence saying what a review is NOT, so a name is never read as an endorsement or as a
 * qualification the learner earns.
 *
 * Editors also see a pending correction, in an amber box, and the owner gets "Applied as written".
 * The correction is content on this lesson, not a message: there is nothing here to reply with.
 */
export function ReleaseNeedsBox({
  summary,
  courseId,
  showCorrections,
  canApply,
}: {
  summary: LessonReviewSummary;
  courseId: string;
  /** The viewer can edit this course. */
  showCorrections: boolean;
  /** The viewer is the platform owner. */
  canApply: boolean;
}) {
  const open = summary.rows.filter((r) => r.stillMarked && r.state !== "cleared");
  const cleared = summary.rows.filter((r) => r.state === "cleared" && r.review);
  const pending = showCorrections
    ? summary.rows.filter((r) => r.state === "pending_correction" && r.review?.correction)
    : [];
  if (open.length === 0 && summary.decisions.length === 0 && cleared.length === 0 && pending.length === 0) return null;

  return (
    <div className="mb-6 space-y-3">
      {open.length > 0 || summary.decisions.length > 0 ? (
        <aside
          aria-label="Before release"
          className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200"
        >
          <p className="font-semibold">Before release</p>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            {open.map((r) => (
              <li key={r.kind}>
                This lesson needs {needLabel({ kind: r.kind, who: "" })}: {r.whos.join("; ")}.{statusNote(r)}
              </li>
            ))}
            {summary.decisions.map((d, i) => (
              <li key={`decision-${i}`}>
                This lesson needs {needLabel(d)}: {d.who}.
              </li>
            ))}
          </ul>
        </aside>
      ) : null}

      {pending.map((r) => (
        <div
          key={`correction-${r.kind}`}
          className="rounded-lg border border-amber-400 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200"
        >
          <p className="font-semibold">Correction to make ({KIND_TITLE[r.kind].toLowerCase()} review)</p>
          <p className="mt-1 whitespace-pre-line">{r.review!.correction}</p>
          <p className="mt-2 text-xs">
            From {r.review!.reviewerName}, {r.review!.reviewerCredential}, on {fmt(r.review!.decidedAt)}. Edit the
            lesson to apply it; an edit resets the verdict for a fresh review
            {canApply ? ", unless you mark it applied as written once the lesson reads exactly as asked" : ""}.
          </p>
          {canApply ? (
            <CorrectionAppliedButton courseId={courseId} lessonId={summary.lessonId} needKind={r.kind} />
          ) : null}
        </div>
      ))}

      {cleared.length > 0 ? (
        <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
          <ul className="space-y-1">
            {cleared.map((r) => (
              <li key={`cleared-${r.kind}`}>
                Reviewed by {r.review!.reviewerName}, {r.review!.reviewerCredential}, on {fmt(r.review!.decidedAt)}.
                {r.review!.correctionAppliedAt ? ` Correction applied ${fmt(r.review!.correctionAppliedAt)}.` : ""}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs">{REVIEW_DISCLAIMER}</p>
        </div>
      ) : null}
    </div>
  );
}
