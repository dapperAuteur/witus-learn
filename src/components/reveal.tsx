"use client";

import { useState } from "react";
import { enqueue } from "@/lib/offline-outbox";
import { recallGradeDraft, recallUrl } from "@/lib/outbox-kinds";

// A click-to-reveal self-check, rendered from a `:::reveal <question> ||| <answer>` line in a lesson
// body (see lesson-body.tsx). Question shows; the answer is hidden until the learner tries, then
// reveals — and, signed in, the learner self-grades it ("I got it" / "Missed it") exactly like the
// quick-recall cards. Grades post to /api/.../recall keyed by a prompt-derived identity (see
// src/lib/reveals.ts) so the dashboard history can show which checks were missed, when, how often.
//
// Signed out (or outside a lesson, e.g. a preview) the reveal still works — grading is simply not
// offered, never errored. Offline, a grade is queued in the offline outbox and replayed when the
// network returns, so a self-grade on a plane is not silently lost.
export function Reveal({
  question,
  answer,
  courseId,
  lessonId,
  canTrack = false,
}: {
  question: string;
  answer: string;
  courseId?: string | null;
  lessonId?: string | null;
  canTrack?: boolean;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="my-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Check yourself</p>
      <p className="mt-1">{question}</p>
      {show ? (
        <RevealAnswerPanel
          question={question}
          answer={answer}
          courseId={courseId}
          lessonId={lessonId}
          canTrack={canTrack}
        />
      ) : (
        <button
          type="button"
          onClick={() => setShow(true)}
          className="mt-3 min-h-11 rounded-md border border-neutral-300 px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12 dark:border-neutral-700"
          aria-expanded={false}
        >
          Show answer
        </button>
      )}
    </div>
  );
}

/** Everything below the fold of a revealed check: the answer plus (when trackable) the
 *  self-grade, or (signed out, in a lesson) a gentle sign-in nudge. Exported so tests can
 *  render the revealed state directly. */
export function RevealAnswerPanel({
  question,
  answer,
  courseId,
  lessonId,
  canTrack,
}: {
  question: string;
  answer: string;
  courseId?: string | null;
  lessonId?: string | null;
  canTrack: boolean;
}) {
  const inLesson = Boolean(courseId && lessonId);
  return (
    <div className="mt-3">
      <p className="rounded-md bg-neutral-50 p-3 text-sm dark:bg-neutral-900">
        <span className="font-semibold">Answer. </span>
        {answer}
      </p>
      {inLesson && canTrack ? (
        <RevealGrade courseId={courseId as string} lessonId={lessonId as string} question={question} />
      ) : inLesson ? (
        <p className="mt-3 text-xs text-neutral-500">
          <a href="/login" className="underline">
            Sign in
          </a>{" "}
          to track which checks you get right — they show up in your dashboard history.
        </p>
      ) : null}
    </div>
  );
}

/** The "Did you get it?" self-grade for one reveal. Mirrors the quick-recall cards' language and
 *  writes to the same endpoint/table, keyed by the question text (identity derived server-side). */
export function RevealGrade({
  courseId,
  lessonId,
  question,
}: {
  courseId: string;
  lessonId: string;
  question: string;
}) {
  const [graded, setGraded] = useState<null | boolean>(null);
  // true = the grade is sitting in the offline outbox, not yet on the server.
  const [queued, setQueued] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function grade(gotIt: boolean) {
    // Double-tap guard: one grade per view — a second tap while saving (or after) is a no-op.
    if (busy || graded !== null) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(recallUrl(courseId, lessonId), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ prompt: question, gotIt }),
        credentials: "same-origin",
      });
      if (res.ok) {
        setGraded(gotIt);
      } else if (res.status === 401 || res.status === 403) {
        setError("Your session ended, so this wasn't recorded. Sign in and try again.");
      } else {
        setError("That didn't save. Try again in a moment.");
      }
    } catch {
      // No network. Queue it — the outbox replays it when the connection returns, so the
      // grade is never silently lost. If even queuing fails (blocked storage), say so.
      const item = enqueue(recallGradeDraft({ courseId, lessonId, prompt: question, gotIt }));
      if (item) {
        setGraded(gotIt);
        setQueued(true);
      } else {
        setError("You're offline and this couldn't be queued — it wasn't saved.");
      }
    } finally {
      setBusy(false);
    }
  }

  if (graded !== null) {
    return (
      <p role="status" className="mt-3 text-sm font-medium" style={{ color: graded ? "var(--accent)" : undefined }}>
        {graded ? "Nice — logged as recalled." : "Logged — review this one before the quiz."}
        {queued ? <span className="font-normal text-neutral-500"> Saved offline; it&apos;ll sync when you&apos;re back online.</span> : null}
      </p>
    );
  }

  return (
    <div className="mt-3 text-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-neutral-500">Did you get it?</span>
        <button
          type="button"
          onClick={() => void grade(true)}
          disabled={busy}
          aria-label={`I got it: ${question}`}
          className="min-h-11 rounded-md border border-green-300 px-3 text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 pointer-coarse:min-h-12 dark:border-green-800 dark:text-green-400"
        >
          ✓ I got it
        </button>
        <button
          type="button"
          onClick={() => void grade(false)}
          disabled={busy}
          aria-label={`Missed it: ${question}`}
          className="min-h-11 rounded-md border border-amber-300 px-3 text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 pointer-coarse:min-h-12 dark:border-amber-800 dark:text-amber-400"
        >
          ✗ Missed it
        </button>
      </div>
      {error ? (
        <p role="status" className="mt-2 text-xs text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
