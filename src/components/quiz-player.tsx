"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SafeQuiz {
  questions: { prompt: string; options: string[] }[];
  passingScore?: number;
}

// Quiz player. The correct answers are NOT in `content` (stripped server-side);
// the submit endpoint scores and records progress.
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
  const [result, setResult] = useState<{
    score: number;
    passed: boolean;
    correct: number;
    total: number;
  } | null>(null);
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
      const d = await r.json();
      setResult(d);
      if (d.passed) router.refresh();
    }
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      {content.questions.map((q, qi) => (
        <fieldset key={qi}>
          <legend className="font-medium">
            {qi + 1}. {q.prompt}
          </legend>
          <div className="mt-2 space-y-1">
            {q.options.map((opt, oi) => (
              <label key={oi} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`q${qi}`}
                  checked={answers[qi] === oi}
                  onChange={() => setAnswer(qi, oi)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <button
        type="submit"
        disabled={pending || answers.includes(-1)}
        className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {pending ? "Scoring…" : "Submit answers"}
      </button>
      {result ? (
        <p
          role="status"
          className={result.passed ? "text-green-700 dark:text-green-400" : "text-red-600"}
        >
          {result.correct}/{result.total} correct ({result.score}%) —{" "}
          {result.passed ? "Passed!" : "Keep practicing."}
        </p>
      ) : null}
    </form>
  );
}
