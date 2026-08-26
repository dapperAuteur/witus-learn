"use client";

import { useEffect, useState } from "react";
import { isSaved, removeSavedPaths, savePageOffline, type OfflinePageMeta } from "@/lib/offline";
import { useOfflineReadiness } from "@/lib/use-offline-readiness";

/**
 * "Save for offline" for a page that ISN'T a lesson — today, the owner's /admin/future board.
 *
 * Same machinery as SaveOfflineButton (cache the HTML + the RSC payload + the /_next/static chunks
 * the page needs to actually render, then read it back out of the cache before claiming anything),
 * and the same refusal to lie: gated on `navigator.serviceWorker.controller`, because the Cache API
 * writes happily with no service worker and that is exactly how you end up with a green tick and a
 * dinosaur on a plane.
 *
 * What's different is the CONSENT. This page is signed-in, owner-only, and holds BAM's own notes,
 * so what it saves is private content in plain text in this browser's storage. The copy below says
 * that in words rather than burying it — and there is no auto-save anywhere: this button is the
 * only thing in the codebase that caches an authenticated page, and only when it's pressed.
 */
export function SavePageOfflineButton({
  pagePath,
  meta,
}: {
  pagePath: string;
  meta: OfflinePageMeta;
}) {
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const { ready, works } = useOfflineReadiness();

  useEffect(() => {
    let cancelled = false;
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
      await savePageOffline({ pagePath, meta });
    } catch {
      setState("error");
      return;
    }
    // Never say "saved" on hope alone — savePageOffline verifies, and so does the button.
    setState((await isSaved(pagePath)) ? "saved" : "error");
  }

  async function remove() {
    try {
      await removeSavedPaths([pagePath]);
    } catch {
      /* the isSaved re-read below reports the real state either way */
    }
    setState((await isSaved(pagePath)) ? "error" : "idle");
  }

  if (ready !== null && !works) {
    return (
      <p role="status" className="mt-4 rounded-xl border border-amber-200 p-3 text-xs text-amber-700 dark:border-amber-900/60 dark:text-amber-500">
        ⚠️{" "}
        {!ready.storage || !ready.serviceWorkerApi
          ? "This browser can’t store pages for offline. (Private / incognito windows usually block the storage it needs.)"
          : ready.registered
            ? "Offline mode is still starting up, reload the page to finish enabling it."
            : "Offline mode isn’t running on this page yet, reload the page to enable it."}
      </p>
    );
  }

  return (
    <div
      className="mt-4 rounded-xl border border-neutral-200 p-4 dark:border-neutral-800"
      aria-live="polite"
    >
      {state === "saved" ? (
        <>
          <p className="text-sm font-medium text-green-700 dark:text-green-400">
            ✓ Saved to this device, this page opens with no connection
          </p>
          <p className="mt-1 text-xs text-neutral-600">
            Every proposal on it, as it reads right now. Save it again after new proposals land to
            refresh the copy. Notes you write offline are queued and sent when you reconnect.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
            <button
              type="button"
              onClick={() => void remove()}
              className="inline-flex min-h-8 items-center text-neutral-600 underline focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-11"
            >
              Remove from this device
            </button>
            {/* Real <a>, not <Link>: /downloads is served from the SW's cache offline, and only a
                hard navigation is a request the SW can answer. See NavItem.hardNav. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/downloads"
              className="inline-flex min-h-8 items-center text-neutral-600 underline focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-11"
            >
              Manage downloads
            </a>
          </div>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => void save()}
            disabled={state === "saving"}
            className="inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-4 text-sm font-medium hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700 dark:hover:bg-neutral-800 pointer-coarse:min-h-12"
          >
            {state === "saving" ? "Saving…" : "⬇ Save this page for offline"}
          </button>
          {/* The honest disclosure. This is an admin page: saying "saved for offline" without
              saying WHAT gets stored, and WHERE, would be the lie. */}
          {meta.sensitive ? (
            <p className="mt-2 max-w-prose text-xs text-neutral-600">
              Read the proposals on a plane. This stores a copy of this page,{" "}
              <strong className="font-medium">including the notes on it</strong>, in this
              browser&rsquo;s storage on this device, where it isn&rsquo;t behind a password.
              Anyone who can use this device could read it. It&rsquo;s deleted automatically when
              you sign out, and you can remove it any time from Downloads.
            </p>
          ) : null}
        </>
      )}
      {state === "error" ? (
        <p className="mt-2 text-xs text-red-600 dark:text-red-400">
          Couldn&rsquo;t save this page, nothing was stored. Check your connection and try again.
        </p>
      ) : null}
    </div>
  );
}
