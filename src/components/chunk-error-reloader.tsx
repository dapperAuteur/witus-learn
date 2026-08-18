"use client";

import { useEffect } from "react";

/**
 * RECOVER FROM A STALE-DEPLOY ChunkLoadError.
 *
 * Next.js code-splits routes into content-hashed chunks (`/_next/static/chunks/…`). When a new build
 * deploys, the hashes change and the old chunk files are eventually removed from the CDN. A tab that
 * has been open across the deploy — or a page served from a stale cache — then lazy-loads a route or
 * CSS chunk by its OLD hash, gets a 404, and dies with a `ChunkLoadError`: a blank screen the user
 * can't click out of. (Reported on bettervice.club: "Loading chunk 5035 failed", "Loading chunk 9760
 * failed".) The service worker caches `/_next/static/` cache-first, which is correct for hashed
 * assets but does nothing for a chunk that was never cached and no longer exists on the server.
 *
 * The fix is the well-worn one: catch the error and hard-reload ONCE, which fetches fresh HTML that
 * points at the current chunks. A short sessionStorage cooldown stops an infinite reload loop if the
 * reload itself can't recover (a real outage, not a stale build) — one failed reload beats a tab that
 * reloads forever. Mounted once in the root layout, so it covers every tenant page.
 */
export const CHUNK_RELOAD_GUARD_KEY = "witus:chunk-reload-at";
const GUARD_KEY = CHUNK_RELOAD_GUARD_KEY;
const COOLDOWN_MS = 10_000;

export function isChunkLoadError(reason: unknown): boolean {
  if (!reason) return false;
  const err = reason as { name?: string; message?: string };
  if (err.name === "ChunkLoadError") return true;
  const msg = String(err.message ?? reason);
  return /Loading (CSS )?chunk [^\s]+ failed/i.test(msg) || /ChunkLoadError/i.test(msg);
}

export function ChunkErrorReloader() {
  useEffect(() => {
    function recover() {
      let last = 0;
      try {
        last = Number(sessionStorage.getItem(GUARD_KEY) ?? 0);
      } catch {
        // sessionStorage can throw (private mode / disabled); fall through and reload anyway.
      }
      if (Date.now() - last < COOLDOWN_MS) return; // already tried a reload just now — don't loop
      try {
        sessionStorage.setItem(GUARD_KEY, String(Date.now()));
      } catch {
        // ignore — the worst case is a second reload, still bounded by nothing worse than before
      }
      window.location.reload();
    }
    function onError(e: ErrorEvent) {
      if (isChunkLoadError(e.error) || isChunkLoadError(e.message)) recover();
    }
    function onRejection(e: PromiseRejectionEvent) {
      // Webpack surfaces a failed dynamic import as a rejected promise — this is the common path.
      if (isChunkLoadError(e.reason)) recover();
    }
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
