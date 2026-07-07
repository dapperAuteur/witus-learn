"use client";

import { useState } from "react";

interface Citation { n: number; kind: string; title: string | null; snippet: string }
interface ChatResult { answer: string; citations: Citation[]; usedChunks: number }

// Learner-facing "chat with the sources" panel on the course page. Answers strictly from the course's
// indexed sources (the server enforces access + grounding). Rendered only when the learner is allowed
// and the course has been indexed.
export function CourseSourceChat({ courseId, courseTitle }: { courseId: string; courseTitle: string }) {
  const [question, setQuestion] = useState("");
  const [asking, setAsking] = useState(false);
  const [result, setResult] = useState<ChatResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function ask() {
    if (!question.trim()) return;
    setAsking(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch(`/api/courses/${courseId}/source-chat`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question: question.trim() }),
      });
      const data = (await res.json().catch(() => ({}))) as ChatResult & { error?: string };
      if (res.ok) setResult(data);
      else setError(data.error ?? "Something went wrong. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setAsking(false);
    }
  }

  const field = "w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900";

  return (
    <section className="mt-8 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800" aria-label="Chat with the sources">
      <h2 className="font-semibold">Chat with the sources</h2>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Ask about <span className="font-medium">{courseTitle}</span>. Answers come only from this
        course&apos;s cited sources — if it&apos;s not in them, it&apos;ll say so.
      </p>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) ask(); }}
        rows={2}
        placeholder="e.g. What does the course say about…?"
        className={`mt-3 ${field}`}
      />
      <button
        type="button"
        onClick={ask}
        disabled={asking || !question.trim()}
        className="mt-2 min-h-9 rounded-md px-4 text-sm font-medium text-white disabled:opacity-60"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {asking ? "Thinking…" : "Ask"}
      </button>

      {error ? <p role="alert" className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p> : null}
      {result ? (
        <div className="mt-4 space-y-3">
          <div className="whitespace-pre-wrap rounded-md bg-neutral-50 p-3 text-sm dark:bg-neutral-900">{result.answer}</div>
          {result.citations.length ? (
            <details className="text-xs text-neutral-500">
              <summary className="cursor-pointer">Sources used ({result.citations.length})</summary>
              <ol className="mt-2 space-y-1">
                {result.citations.map((c) => (
                  <li key={c.n}>[{c.n}] <span className="font-medium">{c.kind}</span>{c.title ? ` · ${c.title}` : ""}: {c.snippet}…</li>
                ))}
              </ol>
            </details>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
