"use client";

import { useState } from "react";

// Grounded course-tutor chat. Posts to the tutor API (which scopes retrieval to
// this course) and shows the cited answer.
export function TutorChat({ courseId, courseTitle }: { courseId: string; courseTitle: string }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [used, setUsed] = useState<string[]>([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function ask(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim()) return;
    setPending(true);
    setError(null);
    setAnswer(null);
    setUsed([]);

    const r = await fetch(`/api/courses/${courseId}/tutor`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ question }),
    });

    if (!r.ok || !r.body) {
      setPending(false);
      const data = await r.json().catch(() => ({}));
      setError(data.error ?? "The tutor could not answer right now.");
      return;
    }

    // Consume the NDJSON stream (meta, then token events).
    const reader = r.body.getReader();
    const decoder = new TextDecoder();
    let buf = "";
    let acc = "";
    setAnswer("");
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
        if (ev.type === "meta") setUsed(ev.usedLessons ?? []);
        else if (ev.type === "token") {
          acc += ev.text ?? "";
          setAnswer(acc);
        } else if (ev.type === "error") setError(ev.message ?? "The tutor hit an error.");
      }
    }
    setPending(false);
  }

  return (
    <section className="mt-10 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 className="text-lg font-semibold">Ask the course tutor</h2>
      <p className="mt-1 text-sm text-neutral-500">
        Grounded only in this course&apos;s material. It won&apos;t make things up.
      </p>
      <form onSubmit={ask} className="mt-3 flex flex-col gap-2 sm:flex-row">
        <label htmlFor="tutor-q" className="sr-only">
          Your question about {courseTitle}
        </label>
        <input
          id="tutor-q"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. What's the main idea of this course?"
          className="min-h-11 flex-1 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
        />
        <button
          type="submit"
          disabled={pending}
          className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {pending ? "Thinking…" : "Ask"}
        </button>
      </form>
      {answer ? (
        <div role="status" className="mt-4">
          <p className="whitespace-pre-wrap text-neutral-800 dark:text-neutral-200">{answer}</p>
          {used.length > 0 ? (
            <p className="mt-2 text-xs text-neutral-500">Based on: {used.join(", ")}</p>
          ) : null}
        </div>
      ) : null}
      {error ? (
        <p role="alert" className="mt-3 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </section>
  );
}
