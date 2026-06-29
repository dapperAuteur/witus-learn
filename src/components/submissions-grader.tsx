"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export interface GradableSubmission {
  id: string;
  lessonTitle: string;
  userId: string;
  body: string;
  status: string;
  grade: number | null;
  feedback: string | null;
  when: string;
}

// Instructor grading list. Each submission gets a grade (0-100) + feedback; saving
// PATCHes the submission and marks it graded.
export function SubmissionsGrader({ courseId, items }: { courseId: string; items: GradableSubmission[] }) {
  if (items.length === 0) {
    return <p className="mt-6 text-neutral-500">No submissions yet.</p>;
  }
  return (
    <ul className="mt-6 space-y-4">
      {items.map((s) => (
        <SubmissionRow key={s.id} courseId={courseId} s={s} />
      ))}
    </ul>
  );
}

function SubmissionRow({ courseId, s }: { courseId: string; s: GradableSubmission }) {
  const router = useRouter();
  const [grade, setGrade] = useState<string>(s.grade != null ? String(s.grade) : "");
  const [feedback, setFeedback] = useState(s.feedback ?? "");
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function save() {
    const g = parseInt(grade, 10);
    if (Number.isNaN(g) || g < 0 || g > 100) {
      setState("error");
      return;
    }
    setState("saving");
    const r = await fetch(`/api/courses/${courseId}/submissions/${s.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ grade: g, feedback }),
    });
    setState(r.ok ? "saved" : "error");
    if (r.ok) router.refresh();
  }

  return (
    <li className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="font-medium">{s.lessonTitle}</span>
        <span className="text-neutral-500">· {s.userId.slice(0, 8)}</span>
        <span
          className={`rounded-full px-2 py-0.5 text-xs ${
            s.status === "graded"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
          }`}
        >
          {s.status}
        </span>
        <span className="ml-auto text-xs text-neutral-400">{s.when}</span>
      </div>

      <p className="mt-2 whitespace-pre-wrap rounded-md bg-neutral-50 p-3 text-sm text-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-200">
        {s.body}
      </p>

      <div className="mt-3 flex flex-wrap items-end gap-3">
        <label className="text-sm">
          Grade (0-100)
          <input
            type="number"
            min={0}
            max={100}
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="mt-1 block w-24 rounded-md border border-neutral-300 px-2 py-1 dark:border-neutral-700 dark:bg-neutral-900"
          />
        </label>
        <label className="flex-1 text-sm">
          Feedback
          <input
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            maxLength={10000}
            className="mt-1 block w-full rounded-md border border-neutral-300 px-2 py-1 dark:border-neutral-700 dark:bg-neutral-900"
          />
        </label>
        <button
          type="button"
          onClick={save}
          disabled={state === "saving"}
          className="min-h-9 rounded-md px-3 text-sm font-medium text-white disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {state === "saving" ? "Saving…" : "Save grade"}
        </button>
        {state === "saved" ? <span className="text-sm text-green-700 dark:text-green-400">Saved.</span> : null}
        {state === "error" ? <span className="text-sm text-red-600">Enter 0-100.</span> : null}
      </div>
    </li>
  );
}
