"use client";

import { useState } from "react";

// A click-to-reveal self-check, rendered from a `:::reveal <question> ||| <answer>` line in a lesson
// body (see lesson-body.tsx). Gives "Check yourself" prompts a revealable answer, like the quick-recall
// cards. Question shows; the answer is hidden until the learner tries, then reveals.
export function Reveal({ question, answer }: { question: string; answer: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className="my-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Check yourself</p>
      <p className="mt-1">{question}</p>
      {show ? (
        <p className="mt-3 rounded-md bg-neutral-50 p-3 text-sm dark:bg-neutral-900">
          <span className="font-semibold">Answer. </span>
          {answer}
        </p>
      ) : (
        <button
          type="button"
          onClick={() => setShow(true)}
          className="mt-3 min-h-9 rounded-md border border-neutral-300 px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700"
          aria-expanded={false}
        >
          Show answer
        </button>
      )}
    </div>
  );
}
