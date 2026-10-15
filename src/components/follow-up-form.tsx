"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { FollowUpStatus } from "@/lib/launch-todos";

// The close form on /admin/follow-ups, one per follow-up: pick a status, say what was done, save.
// Like the source-check form, a follow-up cannot be closed without a note (the API refuses it too):
// "done" with nothing written down hides whether the post really went out.

const STATUSES: { value: FollowUpStatus; label: string }[] = [
  { value: "open", label: "Not done yet" },
  { value: "done", label: "Done" },
  { value: "skipped", label: "Not doing it" },
];

const btn =
  "inline-flex min-h-11 items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-neutral-100 dark:text-neutral-900 pointer-coarse:min-h-12";

export function FollowUpForm({
  followupKey,
  initialStatus,
  initialNote,
  updatedAt,
  suggestedNote,
}: {
  followupKey: string;
  initialStatus: FollowUpStatus;
  initialNote: string;
  updatedAt: string | null;
  /** Prefilled when the blog's feed already lists the post: its live URL. */
  suggestedNote?: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<FollowUpStatus>(initialStatus);
  const [note, setNote] = useState(initialNote || suggestedNote || "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<string | null>(updatedAt);

  const statusId = `fu-status-${followupKey}`;
  const noteId = `fu-note-${followupKey}`;

  async function save() {
    setError(null);
    if (status !== "open" && !note.trim()) {
      setError("Say what was done before closing this.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/admin/follow-ups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ followupKey, status, note }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? `Save failed (${res.status})`);
      }
      const saved = (await res.json()) as { updatedAt: string };
      setSavedAt(saved.updatedAt);
      // The page groups by state, so a closed follow-up should move out of "Due now".
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mt-4 rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
      <label htmlFor={statusId} className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">
        Status
      </label>
      <select
        id={statusId}
        value={status}
        onChange={(e) => setStatus(e.target.value as FollowUpStatus)}
        className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-64 dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12"
      >
        {STATUSES.map((s) => (
          <option key={s.value} value={s.value}>
            {s.label}
          </option>
        ))}
      </select>

      <label htmlFor={noteId} className="mt-3 block text-xs font-medium text-neutral-600 dark:text-neutral-400">
        What was done
      </label>
      <textarea
        id={noteId}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={3}
        placeholder="The live post's URL and the date, what you updated, or why you are not doing it."
        className="mt-1 w-full rounded-md border border-neutral-300 bg-white p-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900"
      />

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button type="button" onClick={save} disabled={saving} className={btn}>
          {saving ? "Saving…" : "Save"}
        </button>
        {savedAt ? (
          <span className="text-xs text-neutral-600 dark:text-neutral-400">
            Last saved {new Date(savedAt).toLocaleString("en-US")}
          </span>
        ) : null}
      </div>

      {error ? (
        <p role="alert" className="mt-2 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
