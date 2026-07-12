"use client";

import { useEffect, useState } from "react";
import { isSaved, saveLesson, removeLesson, type SavableLesson } from "@/lib/offline";

// Learner-facing "Save for offline": caches the lesson's PAGE (HTML + RSC payload, so the page
// itself opens offline and "Next lesson" navigation keeps working) and its audio/video, if any,
// via the Cache API. The service worker (public/sw.js) serves both from cache when offline.
// Also saves the NEXT lesson (best-effort) so continuing the course offline works too.
export function SaveOfflineButton({
  pagePath,
  mediaUrl,
  next,
}: {
  pagePath: string;
  mediaUrl?: string | null;
  next?: SavableLesson | null;
}) {
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");

  useEffect(() => {
    let cancelled = false;
    // Async setState only (no synchronous set-in-effect): mark "saved" if already cached.
    isSaved(pagePath).then((saved) => {
      if (!cancelled && saved) setState("saved");
    });
    return () => {
      cancelled = true;
    };
  }, [pagePath]);

  async function save() {
    setState("saving");
    try {
      await saveLesson({ pagePath, mediaUrl });
    } catch {
      setState("error");
      return;
    }
    if (next) {
      // Best-effort: this lesson is already safely saved, so a flaky next-lesson fetch
      // shouldn't be reported as a failure of the button the learner just clicked.
      try {
        await saveLesson(next);
      } catch {
        /* ignore */
      }
    }
    setState("saved");
  }

  async function remove() {
    try {
      await removeLesson({ pagePath, mediaUrl });
    } catch {
      /* ignore */
    }
    setState("idle");
  }

  return (
    <div className="mt-3 text-sm" aria-live="polite">
      {state === "saved" ? (
        <span className="inline-flex flex-wrap items-center gap-2 text-green-700 dark:text-green-400">
          ✓ Saved for offline
          <button type="button" onClick={remove} className="text-xs text-neutral-500 underline">
            remove
          </button>
        </span>
      ) : (
        <div>
          <button
            type="button"
            onClick={save}
            disabled={state === "saving"}
            className="inline-flex min-h-9 items-center rounded-md border border-neutral-300 px-3 hover:bg-neutral-100 focus-visible:outline-2 disabled:opacity-60 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            {state === "saving" ? "Saving…" : "⬇ Save for offline"}
          </button>
          {next ? (
            <p className="mt-1 text-xs text-neutral-500">Also saves the next lesson, so you can keep going offline.</p>
          ) : null}
        </div>
      )}
      {state === "error" ? <p className="mt-1 text-xs text-red-600">Couldn&rsquo;t save this for offline.</p> : null}
    </div>
  );
}
