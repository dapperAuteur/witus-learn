"use client";

import { useEffect, useState } from "react";
import { saveCourse, isCourseSaved, type SavableLesson, type SaveCourseProgress } from "@/lib/offline";

// "Save whole course for offline": downloads every accessible lesson's page (+ media, when
// direct-media) so a learner can work through the entire course without a connection. Reuses
// the same Cache API caches SaveOfflineButton and the service worker (public/sw.js) share.
export function SaveCourseOfflineButton({ lessons }: { lessons: SavableLesson[] }) {
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [progress, setProgress] = useState<SaveCourseProgress | null>(null);

  useEffect(() => {
    let cancelled = false;
    isCourseSaved(lessons).then((saved) => {
      if (!cancelled && saved) setState("saved");
    });
    return () => {
      cancelled = true;
    };
  }, [lessons]);

  if (lessons.length === 0) return null;

  async function save() {
    setState("saving");
    setProgress({ done: 0, total: lessons.length });
    const { failed } = await saveCourse(lessons, setProgress);
    setState(failed.length > 0 ? "error" : "saved");
  }

  return (
    <div className="mt-3 text-sm" aria-live="polite">
      {state === "saved" ? (
        <span className="inline-flex items-center gap-2 text-green-700 dark:text-green-400">
          ✓ Whole course saved for offline
        </span>
      ) : (
        <button
          type="button"
          onClick={save}
          disabled={state === "saving"}
          className="inline-flex min-h-9 items-center rounded-md border border-neutral-300 px-3 hover:bg-neutral-100 focus-visible:outline-2 disabled:opacity-60 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          {state === "saving" && progress
            ? `Saving… ${progress.done}/${progress.total} saved`
            : `⬇ Save whole course for offline (${lessons.length} lesson${lessons.length === 1 ? "" : "s"})`}
        </button>
      )}
      {state === "error" ? (
        <p className="mt-1 text-xs text-red-600">
          Saved most lessons, but some couldn&rsquo;t be downloaded. Try again with a better connection.
        </p>
      ) : null}
    </div>
  );
}
