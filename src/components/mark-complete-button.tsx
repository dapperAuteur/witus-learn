"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Marks a lesson complete via the progress API, then refreshes so the syllabus +
// sequential gating update.
export function MarkCompleteButton({
  courseId,
  lessonId,
  completed,
}: {
  courseId: string;
  lessonId: string;
  completed: boolean;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  if (completed) {
    return (
      <p role="status" className="text-sm font-medium text-green-700 dark:text-green-400">
        ✓ Completed
      </p>
    );
  }

  async function onClick() {
    setPending(true);
    const res = await fetch(`/api/courses/${courseId}/lessons/${lessonId}/progress`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ completed: true }),
    });
    setPending(false);
    if (res.ok) router.refresh();
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={pending}
      className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
      style={{ backgroundColor: "var(--accent)" }}
    >
      {pending ? "Saving…" : "Mark complete"}
    </button>
  );
}
