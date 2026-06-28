"use client";

import { useState } from "react";

// Learner tool to suggest a correction / comment / question on a lesson. Posts to
// the feedback API (tenant-scoped server-side). A learner improving the curriculum
// is a trust signal, so this lives on every lesson.
export function CurriculumFeedback({ courseId, lessonId }: { courseId: string; lessonId: string }) {
  const [kind, setKind] = useState<"correction" | "comment" | "question">("correction");
  const [body, setBody] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    const r = await fetch(`/api/courses/${courseId}/lessons/${lessonId}/feedback`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ kind, body }),
    });
    setState(r.ok ? "done" : "error");
    if (r.ok) setBody("");
  }

  if (state === "done") {
    return (
      <p className="mt-10 text-sm text-green-700 dark:text-green-400">
        Thanks — your note was sent to the instructor.
      </p>
    );
  }

  return (
    <details className="mt-10 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <summary className="cursor-pointer text-sm font-medium">
        Suggest a correction, comment, or question
      </summary>
      <form onSubmit={submit} className="mt-3 space-y-3">
        <div className="flex flex-wrap gap-3 text-sm">
          {(["correction", "comment", "question"] as const).map((k) => (
            <label key={k} className="flex items-center gap-1.5 capitalize">
              <input type="radio" name="kind" checked={kind === k} onChange={() => setKind(k)} />
              {k}
            </label>
          ))}
        </div>
        <label htmlFor="cf-body" className="sr-only">
          Your note
        </label>
        <textarea
          id="cf-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          minLength={3}
          maxLength={4000}
          rows={3}
          placeholder="What should we fix or clarify? Cite a source if you can."
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
        />
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={state === "sending" || body.trim().length < 3}
            className="min-h-9 rounded-md px-3 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {state === "sending" ? "Sending…" : "Send to instructor"}
          </button>
          {state === "error" ? (
            <span className="text-sm text-red-600">Could not send. Try again.</span>
          ) : null}
        </div>
      </form>
    </details>
  );
}
