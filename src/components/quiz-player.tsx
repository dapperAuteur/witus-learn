"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SafeQuestion {
  prompt: string;
  options: string[];
  imageUrl?: string;
  imageAlt?: string;
}
interface SafeQuiz {
  questions: SafeQuestion[];
  passingScore?: number;
  /** Serve a random subset of this many questions per attempt (rotating pool). */
  questionsPerAttempt?: number;
  /** Shuffle each question's option order per attempt. */
  shuffleOptions?: boolean;
}

interface FeedbackItem {
  correctIndex: number;
  correct: boolean;
  explanation: string | null;
  source: { title: string; href: string } | null;
}

interface QuizResult {
  score: number;
  passed: boolean;
  correct: number;
  total: number;
  feedback?: FeedbackItem[];
}

// One served question for this attempt: the original question index, the question, and the
// display order of its options (original option indices). Rotation + shuffle live here so the
// learner sees a different subset/order each attempt; scoring is by ORIGINAL indices server-side.
interface Served {
  qi: number;
  q: SafeQuestion;
  optionOrder: number[];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildAttempt(content: SafeQuiz): Served[] {
  const n = content.questions.length;
  let indices = Array.from({ length: n }, (_, i) => i);
  const per = content.questionsPerAttempt;
  if (per && per > 0 && per < n) indices = shuffle(indices).slice(0, per);
  return indices.map((qi) => {
    const q = content.questions[qi];
    const optionOrder = content.shuffleOptions
      ? shuffle(Array.from({ length: q.options.length }, (_, i) => i))
      : Array.from({ length: q.options.length }, (_, i) => i);
    return { qi, q, optionOrder };
  });
}

// Quiz player. Correct answers are NOT in `content` (stripped server-side). A rotating pool +
// option shuffle mean retries show different questions/orders; the submit endpoint scores the
// SERVED subset and returns per-question feedback (explanation + link to the source lesson).
export function QuizPlayer({
  courseId,
  lessonId,
  content,
}: {
  courseId: string;
  lessonId: string;
  content: SafeQuiz;
}) {
  const router = useRouter();
  const [served, setServed] = useState<Served[]>(() => buildAttempt(content));
  // answers[servedPosition] = chosen ORIGINAL option index (-1 = unanswered).
  const [answers, setAnswers] = useState<number[]>(() => Array(served.length).fill(-1));
  const [result, setResult] = useState<QuizResult | null>(null);
  const [pending, setPending] = useState(false);

  function setAnswer(si: number, originalOptionIndex: number) {
    setAnswers((a) => {
      const next = [...a];
      next[si] = originalOptionIndex;
      return next;
    });
  }

  function retry() {
    const next = buildAttempt(content); // new random subset + shuffle
    setServed(next);
    setAnswers(Array(next.length).fill(-1));
    setResult(null);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    const responses = served.map((s, si) => ({ questionIndex: s.qi, optionIndex: answers[si] }));
    const r = await fetch(`/api/courses/${courseId}/lessons/${lessonId}/quiz`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ responses }),
    });
    setPending(false);
    if (r.ok) {
      const d: QuizResult = await r.json();
      setResult(d);
      if (d.passed) router.refresh();
    }
  }

  const graded = result?.feedback;
  const total = content.questions.length;
  const rotating = served.length < total;

  return (
    <form onSubmit={submit} className="space-y-6">
      {rotating ? (
        <p className="text-sm text-neutral-500">
          Showing {served.length} of {total} questions — retries draw a fresh set.
        </p>
      ) : null}

      {served.map((s, si) => {
        const fb = graded?.[si];
        return (
          <fieldset key={si}>
            <legend className="font-medium">
              {si + 1}. {s.q.prompt}
            </legend>
            {s.q.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={s.q.imageUrl} alt={s.q.imageAlt ?? ""} loading="lazy" className="my-2 h-auto max-w-full rounded-lg" />
            ) : null}
            <div className="mt-2 space-y-1">
              {s.optionOrder.map((oi) => {
                const isCorrect = fb && oi === fb.correctIndex;
                const isWrongPick = fb && oi === answers[si] && !fb.correct;
                return (
                  <label
                    key={oi}
                    className={`flex items-center gap-2 rounded px-1 ${
                      isCorrect
                        ? "text-green-700 dark:text-green-400"
                        : isWrongPick
                          ? "text-red-600 line-through"
                          : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q${si}`}
                      checked={answers[si] === oi}
                      disabled={!!result}
                      onChange={() => setAnswer(si, oi)}
                    />
                    <span>{s.q.options[oi]}</span>
                    {isCorrect ? <span aria-hidden>✓</span> : null}
                  </label>
                );
              })}
            </div>

            {fb ? (
              <div
                className={`mt-2 rounded-md border-l-4 p-3 text-sm ${
                  fb.correct
                    ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                    : "border-amber-500 bg-amber-50 dark:bg-amber-950/30"
                }`}
              >
                <p className="font-medium">{fb.correct ? "Correct" : "Not quite"}</p>
                {fb.explanation ? (
                  <p className="mt-1 text-neutral-700 dark:text-neutral-300">{fb.explanation}</p>
                ) : null}
                {fb.source ? (
                  <Link
                    href={fb.source.href}
                    className="mt-2 inline-block font-medium underline"
                    style={{ color: "var(--accent)" }}
                  >
                    Where to find this: {fb.source.title} →
                  </Link>
                ) : null}
              </div>
            ) : null}
          </fieldset>
        );
      })}

      {!result ? (
        <button
          type="submit"
          disabled={pending || answers.includes(-1)}
          className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {pending ? "Scoring…" : "Submit answers"}
        </button>
      ) : (
        <div className="space-y-3">
          <p
            role="status"
            className={result.passed ? "text-green-700 dark:text-green-400" : "text-red-600"}
          >
            {result.correct}/{result.total} correct ({result.score}%) —{" "}
            {result.passed ? "Passed!" : "Keep practicing."}
          </p>
          {!result.passed ? (
            <button
              type="button"
              onClick={retry}
              className="min-h-11 rounded-md border border-neutral-300 px-4 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700"
            >
              Try again
            </button>
          ) : null}
        </div>
      )}
    </form>
  );
}
