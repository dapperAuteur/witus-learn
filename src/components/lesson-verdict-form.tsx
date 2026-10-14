"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CORRECTION_MAX,
  KIND_TITLE,
  RESET_RULE,
  STATE_LABEL,
  VERDICT_LABEL,
  VERDICTS,
  type ReviewState,
  type Verdict,
  type VerdictNeedKind,
} from "@/lib/lesson-review";

export interface VerdictNeed {
  kind: VerdictNeedKind;
  whos: string[];
  state: ReviewState;
  /** The verdict on file, whoever recorded it. Null when nobody has. */
  current: { verdict: Verdict; correction: string | null } | null;
  /** Decided on the server (canRecordVerdict); the route re-checks it on every save. */
  canRecord: boolean;
}

/**
 * Reviewer sign-off (plans/93 section 1): the verdict form at the foot of a marked lesson. Shown to
 * anyone holding an ACCEPTED review grant on the course (even after the course is vetted, when the
 * page's read-only auditor flag has gone false), and to the platform owner for P needs.
 *
 * Three radios per need and, for "cleared with a correction", one textarea. The correction is
 * content attached to this lesson and this need: nobody is notified, nobody replies, and a later
 * verdict replaces it. That is what the label says, because it is the whole rule.
 */
export function LessonVerdictForm({
  courseId,
  lessonId,
  needs,
  credit,
  blockedReason,
}: {
  courseId: string;
  lessonId: string;
  needs: VerdictNeed[];
  credit: { name: string; credential: string } | null;
  blockedReason: string | null;
}) {
  return (
    <section
      aria-labelledby="lesson-verdict-heading"
      className="mt-6 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
    >
      <h2 id="lesson-verdict-heading" className="font-semibold">
        Your verdict on this lesson
      </h2>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        {credit ? `You will be credited as ${credit.name}, ${credit.credential}. ` : null}
        {RESET_RULE}
      </p>
      {blockedReason ? (
        <p className="mt-2 rounded-md bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
          {blockedReason}
        </p>
      ) : null}
      {needs.map((n) => (
        <NeedVerdict key={n.kind} courseId={courseId} lessonId={lessonId} need={n} />
      ))}
      <p className="mt-4 text-sm">
        <Link
          href="/audit/review"
          className="inline-flex min-h-11 items-center underline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ color: "var(--accent)" }}
        >
          Every lesson you are reviewing
        </Link>
      </p>
    </section>
  );
}

function NeedVerdict({ courseId, lessonId, need }: { courseId: string; lessonId: string; need: VerdictNeed }) {
  const router = useRouter();
  // A verdict on text that has since changed is no verdict, so the form starts empty for it.
  const startVerdict = need.current && need.state !== "changed_since_review" ? need.current.verdict : "";
  const [verdict, setVerdict] = useState<Verdict | "">(startVerdict);
  const [correction, setCorrection] = useState(need.current?.correction ?? "");
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const base = `verdict-${lessonId}-${need.kind}`;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!verdict) return;
    setBusy(true);
    setSaved(false);
    setError(null);
    try {
      const res = await fetch(`/api/courses/${courseId}/lessons/${lessonId}/review`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          needKind: need.kind,
          verdict,
          correction: verdict === "cleared_with_correction" ? correction : null,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "That verdict could not be saved.");
        return;
      }
      setSaved(true);
      router.refresh();
    } catch {
      setError("Network error, please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="mt-4 border-t border-neutral-100 pt-4 dark:border-neutral-800/60">
      <fieldset disabled={!need.canRecord || busy}>
        <legend className="text-sm font-medium">
          {KIND_TITLE[need.kind]}
          {need.whos.length ? `: ${need.whos.join("; ")}` : ""}
        </legend>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">Now: {STATE_LABEL[need.state]}</p>
        <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-4">
          {VERDICTS.map((v) => (
            <label key={v} className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm">
              <input
                type="radio"
                name={base}
                value={v}
                checked={verdict === v}
                onChange={() => setVerdict(v)}
                className="h-5 w-5"
              />
              {VERDICT_LABEL[v]}
            </label>
          ))}
        </div>
        {verdict === "cleared_with_correction" ? (
          <div className="mt-2">
            <label htmlFor={`${base}-correction`} className="block text-sm font-medium">
              Correction to make (attached to this lesson; no one replies to it)
            </label>
            <textarea
              id={`${base}-correction`}
              required
              rows={4}
              maxLength={CORRECTION_MAX}
              value={correction}
              onChange={(e) => setCorrection(e.target.value)}
              aria-describedby={`${base}-count`}
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
            />
            <p id={`${base}-count`} className="text-xs text-neutral-600 dark:text-neutral-400">
              {correction.trim().length} of {CORRECTION_MAX} characters
            </p>
          </div>
        ) : null}
        <button
          type="submit"
          disabled={!verdict}
          className="mt-3 min-h-11 rounded-md px-4 py-2 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {busy ? "Saving…" : "Record verdict"}
        </button>
      </fieldset>
      <p role="status" className="mt-2 text-sm text-emerald-700 dark:text-emerald-400">
        {saved ? "Saved. Thank you." : ""}
      </p>
      {error ? (
        <p role="alert" className="mt-1 text-sm text-amber-700 dark:text-amber-400">
          {error}
        </p>
      ) : null}
    </form>
  );
}
