"use client";

import { useState } from "react";

export interface RecallItem {
  prompt: string;
  answer: string;
}

// Active-recall cards: the learner reads the prompt, tries to answer from memory, reveals, then
// self-grades ("I got it" / "Missed it"). Grades post to /api/.../recall so the teacher can compare
// in-lesson recall vs quiz accuracy. Revealing works even signed-out; only grading is tracked.
export function RecallPlayer({
  courseId,
  lessonId,
  items,
}: {
  courseId: string;
  lessonId: string;
  items: RecallItem[];
}) {
  if (items.length === 0) return null;
  return (
    <section className="my-6 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800" aria-label="Quick recall">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Quick recall</h2>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Try to answer from memory first — then reveal and grade yourself. Testing yourself here makes
        it stick better than re-reading.
      </p>
      <ol className="mt-4 space-y-4">
        {items.map((item, i) => (
          <RecallCard key={i} courseId={courseId} lessonId={lessonId} index={i} item={item} />
        ))}
      </ol>
    </section>
  );
}

function RecallCard({
  courseId,
  lessonId,
  index,
  item,
}: {
  courseId: string;
  lessonId: string;
  index: number;
  item: RecallItem;
}) {
  const [revealed, setRevealed] = useState(false);
  const [graded, setGraded] = useState<null | boolean>(null);

  function grade(gotIt: boolean) {
    setGraded(gotIt);
    void fetch(`/api/courses/${courseId}/lessons/${lessonId}/recall`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ promptIndex: index, gotIt }),
    }).catch(() => {});
  }

  return (
    <li className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
      <p className="font-medium">{item.prompt}</p>
      {!revealed ? (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="mt-2 min-h-9 rounded-md border border-neutral-300 px-3 text-sm dark:border-neutral-700"
        >
          Reveal answer
        </button>
      ) : (
        <div className="mt-2">
          <p className="text-neutral-700 dark:text-neutral-300">{item.answer}</p>
          {graded === null ? (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-neutral-500">Did you get it?</span>
              <button
                type="button"
                onClick={() => grade(true)}
                className="min-h-9 rounded-md border border-green-300 px-3 text-green-700 dark:border-green-800 dark:text-green-400"
              >
                ✓ I got it
              </button>
              <button
                type="button"
                onClick={() => grade(false)}
                className="min-h-9 rounded-md border border-amber-300 px-3 text-amber-700 dark:border-amber-800 dark:text-amber-400"
              >
                ✗ Missed it
              </button>
            </div>
          ) : (
            <p className="mt-3 text-sm font-medium" style={{ color: graded ? "var(--accent)" : undefined }}>
              {graded ? "Nice — logged as recalled." : "Logged — review this one before the quiz."}
            </p>
          )}
        </div>
      )}
    </li>
  );
}
