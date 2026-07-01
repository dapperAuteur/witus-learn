"use client";

import { useEffect, useState } from "react";

// Learner-facing "Save for offline": stores a lesson's audio/video file in the Cache API
// (the "witus-media" cache the service worker serves from when offline). Works for direct
// media files (incl. Cloudinary, which sends CORS); embeds like YouTube can't be cached.
const MEDIA_CACHE = "witus-media-v1";

export function SaveOfflineButton({ url }: { url: string }) {
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");

  useEffect(() => {
    if (typeof caches === "undefined") return;
    // Async setState only (no synchronous set-in-effect): mark "saved" if already cached.
    caches
      .open(MEDIA_CACHE)
      .then((c) => c.match(url))
      .then((hit) => {
        if (hit) setState("saved");
      })
      .catch(() => {});
  }, [url]);

  async function save() {
    setState("saving");
    try {
      const c = await caches.open(MEDIA_CACHE);
      await c.add(url); // fetches + stores; needs a CORS-ok response (Cloudinary is fine)
      setState("saved");
    } catch {
      setState("error");
    }
  }

  async function remove() {
    try {
      const c = await caches.open(MEDIA_CACHE);
      await c.delete(url);
    } catch {
      /* ignore */
    }
    setState("idle");
  }

  return (
    <div className="mt-3 text-sm">
      {state === "saved" ? (
        <span className="inline-flex items-center gap-2 text-green-700 dark:text-green-400">
          ✓ Saved for offline
          <button type="button" onClick={remove} className="text-xs text-neutral-500 underline">remove</button>
        </span>
      ) : (
        <button
          type="button"
          onClick={save}
          disabled={state === "saving"}
          className="inline-flex min-h-9 items-center rounded-md border border-neutral-300 px-3 hover:bg-neutral-100 focus-visible:outline-2 disabled:opacity-60 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          {state === "saving" ? "Saving…" : "⬇ Save for offline"}
        </button>
      )}
      {state === "error" ? <p className="mt-1 text-xs text-red-600">Couldn&rsquo;t save this for offline.</p> : null}
    </div>
  );
}
