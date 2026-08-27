"use client";

import { useState } from "react";

// The three-state control on /admin/cross-links: approve this mention as a link, dismiss it, or
// reopen a decision. Same interaction as the ebook approval and the citation row, and deliberately
// dense: the queue is long, so a decision is one optional line of text and one button.
//
// The three states are NOT a select. A select makes "not reviewed" a value you can choose, and it is
// not one: it is the absence of both rows in the database (src/db/schema/cross-links.ts). Two verbs
// and an undo say the same thing without inviting the reviewer to set an item back to a state that
// only exists by never having been touched.

export type CrossLinkState = "unreviewed" | "approved" | "dismissed";

export function CrossLinkDecision({
  sourceCourseSlug,
  sourceLessonSlug,
  targetCourseSlug,
  initialState,
  initialNote,
  targetIsLinkable,
}: {
  sourceCourseSlug: string;
  sourceLessonSlug: string;
  targetCourseSlug: string;
  initialState: CrossLinkState;
  initialNote: string;
  /** False when this school cannot address the target, so approving would render nothing here. */
  targetIsLinkable: boolean;
}) {
  const [state, setState] = useState<CrossLinkState>(initialState);
  const [note, setNote] = useState(initialNote);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const id = `${sourceCourseSlug}-${sourceLessonSlug}-${targetCourseSlug}`;

  async function decide(decision: "approve" | "dismiss" | "reset") {
    setError(null);
    if (decision === "dismiss" && !note.trim()) {
      setError("Say why before dismissing a candidate.");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/admin/cross-links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sourceCourseSlug,
          sourceLessonSlug,
          targetCourseSlug,
          decision,
          note,
        }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? `Failed (${res.status})`);
      }
      setState(decision === "approve" ? "approved" : decision === "dismiss" ? "dismissed" : "unreviewed");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed");
    } finally {
      setBusy(false);
    }
  }

  const buttonBase =
    "inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-medium disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12";

  return (
    <div className="mt-3">
      <p className="text-sm font-medium">
        {state === "approved"
          ? targetIsLinkable
            ? "Approved. Learners see this course under Related courses on that lesson."
            : "Approved, but nothing renders here until this school hosts and publishes that course."
          : state === "dismissed"
            ? "Dismissed. No link renders, and this stays off your queue."
            : "Not reviewed. Nothing renders on the lesson."}
      </p>

      <label
        htmlFor={`note-${id}`}
        className="mt-3 block text-xs font-medium text-neutral-600 dark:text-neutral-400"
      >
        {state === "dismissed" ? "Why you turned it down" : "What you checked (required to dismiss)"}
      </label>
      <input
        id={`note-${id}`}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12"
      />

      <div className="mt-3 flex flex-wrap gap-2">
        {state !== "approved" ? (
          <button
            type="button"
            disabled={busy}
            onClick={() => decide("approve")}
            className={`${buttonBase} bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900`}
          >
            {busy ? "Saving…" : "Approve link"}
          </button>
        ) : null}
        {state !== "dismissed" ? (
          <button
            type="button"
            disabled={busy}
            onClick={() => decide("dismiss")}
            className={`${buttonBase} border border-neutral-300 text-neutral-800 dark:border-neutral-700 dark:text-neutral-200`}
          >
            Dismiss
          </button>
        ) : null}
        {state !== "unreviewed" ? (
          <button
            type="button"
            disabled={busy}
            onClick={() => decide("reset")}
            className={`${buttonBase} border border-neutral-300 text-neutral-800 dark:border-neutral-700 dark:text-neutral-200`}
          >
            Undo
          </button>
        ) : null}
      </div>

      {error ? (
        <p role="alert" className="mt-2 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
