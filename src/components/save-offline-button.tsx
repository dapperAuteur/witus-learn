"use client";

import { useEffect, useState } from "react";
import { isSaved, saveLesson, removeLesson, type OfflineLessonMeta, type SavableLesson } from "@/lib/offline";
import { useOfflineReadiness } from "@/lib/use-offline-readiness";

// Learner-facing "Save for offline": caches the lesson's PAGE (HTML + RSC payload, so the page
// itself opens offline and "Next lesson" navigation keeps working) and its audio/video, if any,
// via the Cache API. The service worker (public/sw.js) serves both from cache when offline.
// Also saves the NEXT lesson (best-effort) so continuing the course offline works too.
// `meta` (course/section/lesson titles) is written to the offline manifest alongside the cache
// entry, so /downloads can list and remove this lesson by name later — with no network.
export function SaveOfflineButton({
  pagePath,
  mediaUrl,
  meta,
  next,
}: {
  pagePath: string;
  mediaUrl?: string | null;
  meta: OfflineLessonMeta;
  next?: SavableLesson | null;
}) {
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const { ready, works } = useOfflineReadiness();

  useEffect(() => {
    let cancelled = false;
    // Async setState only (no synchronous set-in-effect): mark "saved" if already cached.
    // Reads the CACHE, not the manifest — the cache is the source of truth for "is it there".
    isSaved(pagePath).then((saved) => {
      if (!cancelled) setState(saved ? "saved" : "idle");
    });
    return () => {
      cancelled = true;
    };
  }, [pagePath]);

  async function save() {
    setState("saving");
    try {
      await saveLesson({ pagePath, mediaUrl, meta });
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
    // Read it back out of the cache before claiming anything. saveLesson already verifies, but the
    // button the learner actually looks at should never say "✓ Saved" on hope alone.
    setState((await isSaved(pagePath)) ? "saved" : "error");
  }

  async function remove() {
    try {
      // Shared-media safe: removeLesson only deletes this lesson's media if no OTHER saved
      // lesson still references the same file.
      await removeLesson({ pagePath, mediaUrl });
    } catch {
      /* ignore */
    }
    setState("idle");
  }

  // The Cache API writes happily with no service worker — which is exactly how a learner ends up
  // with a green check and the browser's no-connection page in airplane mode. If nothing is
  // controlling this page, offline will NOT work, so say that instead of offering a save.
  if (ready !== null && !works) {
    return (
      <p role="status" className="mt-3 max-w-sm text-xs text-amber-700 dark:text-amber-500">
        ⚠️{" "}
        {!ready.storage || !ready.serviceWorkerApi
          ? "Offline downloads aren’t supported in this browser. (Private or incognito windows usually block the storage they need.)"
          : ready.registered
            ? "Offline mode is still starting up — reload the page to finish enabling downloads."
            : "Offline mode isn’t running on this page yet — reload the page to enable downloads."}
      </p>
    );
  }

  return (
    <div className="mt-3 text-sm" aria-live="polite">
      {state === "saved" ? (
        <span className="inline-flex flex-wrap items-center gap-2 text-green-700 dark:text-green-400">
          ✓ Saved for offline
          <button
            type="button"
            onClick={remove}
            className="min-h-8 text-xs text-neutral-500 underline focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-11"
          >
            remove
          </button>
          {/* Real <a>: this lesson page can itself be served from cache while offline, and a hard
              navigation is the only kind the service worker can answer for /downloads. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/downloads"
            className="min-h-8 text-xs text-neutral-500 underline focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-11"
          >
            manage downloads
          </a>
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
