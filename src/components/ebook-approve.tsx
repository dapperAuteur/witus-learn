"use client";

import { useState } from "react";

// Approve or withdraw an ebook from /admin/ebooks. Until approved, the ebook is visible only here
// and in the repo: the public page and the download both 404, checked server-side.
export function EbookApprove({
  slug,
  initialApproved,
  initialNote,
}: {
  slug: string;
  initialApproved: boolean;
  initialNote: string;
}) {
  const [approved, setApproved] = useState(initialApproved);
  const [note, setNote] = useState(initialNote);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function set(next: boolean) {
    setError(null);
    setBusy(true);
    try {
      const res = await fetch("/api/admin/ebooks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, approved: next, note }),
      });
      if (!res.ok) throw new Error(`Failed (${res.status})`);
      setApproved(next);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-4 rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
      <p className="text-sm font-medium">
        {approved ? "Approved and downloadable on its landing page." : "Not approved. Private to you."}
      </p>
      <label htmlFor={`note-${slug}`} className="mt-3 block text-xs font-medium text-neutral-600 dark:text-neutral-400">
        What you checked before approving (optional)
      </label>
      <input
        id={`note-${slug}`}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12"
      />
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          disabled={busy}
          onClick={() => set(!approved)}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-neutral-100 dark:text-neutral-900 pointer-coarse:min-h-12"
        >
          {busy ? "Saving…" : approved ? "Withdraw" : "Approve and publish"}
        </button>
      </div>
      {error ? (
        <p role="alert" className="mt-2 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
