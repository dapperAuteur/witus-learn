"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SafeQuiz {
  questions: { prompt: string; options: string[] }[];
  passingScore?: number;
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

// Quiz player. The correct answers are NOT in `content` (stripped server-side); the
// submit endpoint scores, records progress, and returns per-question feedback — the
// explanation plus a link to the lesson where the answer is taught.
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
  const [answers, setAnswers] = useState<number[]>(() => Array(content.questions.length).fill(-1));
  const [result, setResult] = useState<QuizResult | null>(null);
  const [pending, setPending] = useState(false);

  function setAnswer(qi: number, oi: number) {
    setAnswers((a) => {
      const next = [...a];
      next[qi] = oi;
      return next;
    });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    const r = await fetch(`/api/courses/${courseId}/lessons/${lessonId}/quiz`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ answers }),
    });
    setPending(false);
    if (r.ok) {
      const d: QuizResult = await r.json();
      setResult(d);
      if (d.passed) router.refresh();
    }
  }

  const graded = result?.feedback;

  return (
    <form onSubmit={submit} className="space-y-6">
      {content.questions.map((q, qi) => {
        const fb = graded?.[qi];
        return (
          <fieldset key={qi}>
            <legend className="font-medium">
              {qi + 1}. {q.prompt}
            </legend>
            <div className="mt-2 space-y-1">
              {q.options.map((opt, oi) => {
                const isCorrect = fb && oi === fb.correctIndex;
                const isWrongPick = fb && oi === answers[qi] && !fb.correct;
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
                      name={`q${qi}`}
                      checked={answers[qi] === oi}
                      disabled={!!result}
                      onChange={() => setAnswer(qi, oi)}
                    />
                    <span>{opt}</span>
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
              onClick={() => {
                setResult(null);
                setAnswers(Array(content.questions.length).fill(-1));
              }}
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
