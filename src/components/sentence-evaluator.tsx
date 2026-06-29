"use client";

import { useState } from "react";
import { Markdown } from "./markdown";

// Open production practice: the learner writes a sentence and the AI coach checks
// grammar/structure grounded ONLY in this course (paid-gated server-side). Streams
// NDJSON from /api/courses/[id]/tutor/evaluate, the same shape the tutor chat uses.
export function SentenceEvaluator({ courseId }: { courseId: string }) {
  const [sentence, setSentence] = useState("");
  const [feedback, setFeedback] = useState("");
  const [lessons, setLessons] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (sentence.trim().length < 2 || busy) return;
    setBusy(true);
    setFeedback("");
    setLessons([]);
    setError(null);
    try {
      const res = await fetch(`/api/courses/${courseId}/tutor/evaluate`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ sentence }),
      });
      if (!res.ok || !res.body) {
        setError(
          res.status === 403
            ? "The AI coach is for enrolled paid students."
            : "Could not reach the coach. Please try again.",
        );
        setBusy(false);
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split("\n");
        buf = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.trim()) continue;
          let ev: { type?: string; text?: string; usedLessons?: string[]; message?: string };
          try {
            ev = JSON.parse(line);
          } catch {
            continue;
          }
          if (ev.type === "meta") setLessons(ev.usedLessons ?? []);
          else if (ev.type === "token") setFeedback((f) => f + (ev.text ?? ""));
          else if (ev.type === "error") setError(ev.message ?? "Something went wrong.");
        }
      }
    } catch {
      setError("Could not reach the coach. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h3 className="font-semibold">Check your own sentence</h3>
      <p className="mt-1 text-sm text-neutral-500">
        Write a sentence using this lesson&apos;s grammar and the coach will check it, correct it, and
        point you to the rule.
      </p>
      <textarea
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
        rows={2}
        maxLength={600}
        placeholder="Type a sentence in the language you're learning…"
        className="mt-3 w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
      />
      <button
        type="submit"
        disabled={busy || sentence.trim().length < 2}
        className="mt-2 min-h-10 rounded-md px-4 text-sm font-medium text-white disabled:opacity-50"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {busy ? "Checking…" : "Check my sentence"}
      </button>

      {error ? <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p> : null}
      {feedback ? (
        <div className="mt-3 rounded-md bg-neutral-50 p-3 text-sm dark:bg-neutral-900">
          <Markdown>{feedback}</Markdown>
          {lessons.length ? (
            <p className="mt-2 text-xs text-neutral-500">Based on: {lessons.join(", ")}</p>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}
