"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export interface SubmissionState {
  body: string;
  status: string;
  grade: number | null;
  feedback: string | null;
}

// Learner's assignment submission box. Shows their current submission (and the
// grade/feedback once graded) and lets them submit or re-submit.
export function AssignmentSubmit({
  courseId,
  lessonId,
  initial,
}: {
  courseId: string;
  lessonId: string;
  initial: SubmissionState | null;
}) {
  const router = useRouter();
  const [body, setBody] = useState(initial?.body ?? "");
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");

  const graded = initial?.status === "graded";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("saving");
    const r = await fetch(`/api/courses/${courseId}/lessons/${lessonId}/submission`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ body }),
    });
    setState(r.ok ? "saved" : "error");
    if (r.ok) router.refresh();
  }

  return (
    <section className="mt-8 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 className="font-semibold">Your submission</h2>

      {graded ? (
        <div className="mt-3 rounded-md border-l-4 border-green-500 bg-green-50 p-3 text-sm dark:bg-green-950/30">
          <p className="font-medium">Graded: {initial?.grade}/100</p>
          {initial?.feedback ? (
            <p className="mt-1 whitespace-pre-wrap text-neutral-700 dark:text-neutral-300">{initial.feedback}</p>
          ) : null}
        </div>
      ) : initial ? (
        <p className="mt-2 text-sm text-neutral-500">Submitted. Awaiting grading. You can revise and resubmit below.</p>
      ) : null}

      <form onSubmit={submit} className="mt-3 space-y-3">
        <label htmlFor="assignment-body" className="sr-only">
          Your response
        </label>
        <textarea
          id="assignment-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          minLength={1}
          maxLength={20000}
          rows={8}
          placeholder="Write your response here…"
          className="w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
        />
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={state === "saving" || body.trim().length < 1}
            className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {state === "saving" ? "Submitting…" : initial ? "Resubmit" : "Submit"}
          </button>
          {state === "saved" ? <span className="text-sm text-green-700 dark:text-green-400">Submitted.</span> : null}
          {state === "error" ? <span className="text-sm text-red-600">Could not submit.</span> : null}
        </div>
      </form>
    </section>
  );
}
