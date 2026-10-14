"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Take a tour from the field off a lesson (/teach/tours). The slot goes back to empty and the lesson
// back to its "forthcoming" wording; the capture in the Field Log is untouched.
export function RemoveTourButton({ courseId, lessonId, lessonTitle }: { courseId: string; lessonId: string; lessonTitle: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function remove() {
    if (!window.confirm(`Take the tour off "${lessonTitle}"? The capture stays in the Field Log.`)) return;
    setBusy(true);
    setError(null);
    const res = await fetch(`/api/courses/${courseId}/lessons/${lessonId}/tour`, { method: "DELETE" }).catch(() => null);
    setBusy(false);
    if (!res?.ok) {
      const data = (await res?.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error ?? "Could not remove the tour. Please try again.");
      return;
    }
    router.refresh();
  }

  return (
    <span className="inline-flex flex-col items-start gap-1">
      <button
        type="button"
        onClick={remove}
        disabled={busy}
        aria-label={`Remove the tour from ${lessonTitle}`}
        className="min-h-11 rounded-md border border-neutral-300 px-3 text-sm font-medium disabled:opacity-60 dark:border-neutral-700"
      >
        {busy ? "Removing…" : "Remove tour"}
      </button>
      {error ? (
        <span role="alert" className="text-xs text-red-700 dark:text-red-300">
          {error}
        </span>
      ) : null}
    </span>
  );
}
