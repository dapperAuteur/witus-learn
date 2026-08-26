"use client";

import { useState } from "react";
import type { ResearchCheckStatus } from "@/lib/research-checks";

// The answer form on /admin/research. One per check: pick a status, say what you found, save.
//
// Deliberately NOT offline-queued, unlike the notes form on /admin/future. A research answer is the
// product of looking something up, which needs a network anyway, so queueing would only create the
// chance of a half-finished answer syncing later and reading as settled. If there is no connection
// the save fails loudly and the text stays in the box.
//
// The API refuses any status other than "open" without an answer, and so does this form, so a check
// can never read as closed with no evidence behind it. That rule is the entire point of the feature:
// a check marked verified with nothing written down is worse than an open one, because it stops
// anyone looking again.

const STATUSES: { value: ResearchCheckStatus; label: string }[] = [
  { value: "open", label: "Still open" },
  { value: "verified", label: "Verified against a primary source" },
  { value: "corrected", label: "Course was wrong, needs correcting" },
  { value: "blocked", label: "Tried, could not settle it" },
];

const btn =
  "inline-flex min-h-11 items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-neutral-100 dark:text-neutral-900 pointer-coarse:min-h-12";

export function ResearchCheckForm({
  checkKey,
  initialStatus,
  initialAnswer,
  updatedAt,
}: {
  checkKey: string;
  initialStatus: ResearchCheckStatus;
  initialAnswer: string;
  updatedAt: string | null;
}) {
  const [status, setStatus] = useState<ResearchCheckStatus>(initialStatus);
  const [answer, setAnswer] = useState(initialAnswer);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<string | null>(updatedAt);

  const statusId = `status-${checkKey}`;
  const answerId = `answer-${checkKey}`;

  async function save() {
    setError(null);
    if (status !== "open" && !answer.trim()) {
      setError("Say what you found before closing a check.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/admin/research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ checkKey, status, answer }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? `Save failed (${res.status})`);
      }
      const saved = (await res.json()) as { updatedAt: string };
      setSavedAt(saved.updatedAt);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mt-4 rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor={statusId} className="block text-xs font-medium text-neutral-600 dark:text-neutral-400">
            Status
          </label>
          <select
            id={statusId}
            value={status}
            onChange={(e) => setStatus(e.target.value as ResearchCheckStatus)}
            className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12"
          >
            {STATUSES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <label htmlFor={answerId} className="mt-3 block text-xs font-medium text-neutral-600 dark:text-neutral-400">
        What you found
      </label>
      <textarea
        id={answerId}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows={4}
        placeholder="Paste the quote, the citation, the URL and the date you read it. Or what the clerk told you, and when."
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
