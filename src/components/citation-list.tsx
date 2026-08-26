"use client";

import { useMemo, useState } from "react";
import { CITATION_STATUS_LABEL, type Citation, type CitationStatus } from "@/lib/citations";
import {
  citationGroupSummary,
  countReviewGroup,
  reviewGroupStartsOpen,
} from "@/lib/review-lists";
import { ReviewContext } from "@/components/review-context";

// The citation verification list, shared by the owner board (/admin/citations) and the auditor board
// (/audit/citations). Same component, different data: the server decides which courses a viewer may
// see and passes only those, so this file contains no authorisation logic at all.
//
// The interaction is deliberately dense rather than pretty. There are 675 citations staged today and
// several thousand to come, so the job is throughput: the link is one click, the status is one
// select, and the note is one box. Anything more elaborate makes a 200-citation course unfinishable.
//
// Each course is a COLLAPSED <details> for the same reason: expanded, the board is one scroll of
// several hundred cards and picking a course to work on means paging past every other course. The
// summary line carries the counts so collapsing hides the cards, not the queue.

export interface CitationRow extends Citation {
  status: CitationStatus;
  note: string | null;
  /** Where to read the lesson this source is cited in, resolved server-side and tenant-scoped. */
  lessonHref: string | null;
  /** True when lessonHref opens the lesson itself rather than the course landing page. */
  lessonIsLinked: boolean;
  /** Why the lesson could not be linked, when it could not. */
  locationNote: string | null;
}

const STATUSES: CitationStatus[] = ["unverified", "verified", "broken", "mismatch"];

const statusClass: Record<CitationStatus, string> = {
  unverified: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
  verified: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100",
  broken: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
  mismatch: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
};

function CitationItem({ row }: { row: CitationRow }) {
  const [status, setStatus] = useState<CitationStatus>(row.status);
  const [note, setNote] = useState(row.note ?? "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function save() {
    setError(null);
    setSaved(false);
    if (status !== "unverified" && !note.trim()) {
      setError("Say what you found before closing a citation.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/citations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ citationKey: row.key, status, note }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? `Save failed (${res.status})`);
      }
      setSaved(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <li className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusClass[status]}`}>
          {CITATION_STATUS_LABEL[status]}
        </span>
      </div>

      <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-200">{row.text}</p>

      {row.url ? (
        <p className="mt-1 text-sm">
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Open the source
          </a>
        </p>
      ) : (
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
          No link in this entry. Verify it against a library or publisher catalog.
        </p>
      )}

      {/* The lesson this source is cited in, and where possible the sentence that cites it. The
          question on this board is whether the source says what the LESSON claims, and until this
          card existed the lesson was the one thing the board never showed. */}
      <ReviewContext
        courseLabel={row.courseTitle}
        lessonLabel={row.lessonTitle}
        href={row.lessonHref}
        isLesson={row.lessonIsLinked}
        note={row.locationNote}
        excerpt={row.excerpt ?? null}
        excerptLabel="The sentence that cites it"
      />

      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label htmlFor={`st-${row.key}`} className="sr-only">
          Status for this citation
        </label>
        <select
          id={`st-${row.key}`}
          value={status}
          onChange={(e) => setStatus(e.target.value as CitationStatus)}
          className="min-h-11 rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12"
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {CITATION_STATUS_LABEL[s]}
            </option>
          ))}
        </select>
        <label htmlFor={`nt-${row.key}`} className="sr-only">
          What you found
        </label>
        <input
          id={`nt-${row.key}`}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="What you found (required to close)"
          className="min-h-11 flex-1 rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12"
        />
        <button
          type="button"
          onClick={save}
          disabled={saving}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-neutral-100 dark:text-neutral-900 pointer-coarse:min-h-12"
        >
          {saving ? "Saving…" : saved ? "Saved" : "Save"}
        </button>
      </div>

      {error ? (
        <p role="alert" className="mt-2 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </li>
  );
}

export function CitationList({
  courseSlug,
  courseTitle,
  rows,
  groupCount = 1,
}: {
  courseSlug: string;
  courseTitle: string;
  rows: CitationRow[];
  /** How many courses are on this board, so a one-course board does not open collapsed and empty. */
  groupCount?: number;
}) {
  const [onlyOpen, setOnlyOpen] = useState(true);
  const shown = useMemo(
    () => (onlyOpen ? rows.filter((r) => r.status === "unverified") : rows),
    [onlyOpen, rows],
  );
  const counts = useMemo(
    () => countReviewGroup(rows, (r) => r.status === "unverified"),
    [rows],
  );
  // The <details> is controlled rather than left to the browser: this component re-renders whenever
  // the "show only unchecked" box is ticked, and an uncontrolled panel that React later patches can
  // snap shut mid-review. onToggle keeps the state and the element in step in both directions.
  const [open, setOpen] = useState(() => reviewGroupStartsOpen(counts, groupCount));
  const done = counts.total - counts.open;
  const toggleId = `only-open-${courseSlug}`;

  return (
    <details
      open={open}
      onToggle={(e) => setOpen(e.currentTarget.open)}
      className="group mt-4 rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <summary className="flex min-h-11 cursor-pointer list-none flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12">
        <span aria-hidden="true" className="text-xs transition-transform group-open:rotate-90">
          ▶
        </span>
        <h2 className="text-base font-semibold tracking-tight sm:text-lg">{courseTitle}</h2>
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          {citationGroupSummary(counts)}
        </span>
      </summary>
      <div className="px-4 pb-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {done} of {counts.total} checked.
        </p>
        <div className="mt-2 flex items-center gap-2">
          <input
            id={toggleId}
            type="checkbox"
            checked={onlyOpen}
            onChange={(e) => setOnlyOpen(e.target.checked)}
            className="h-4 w-4"
          />
          <label htmlFor={toggleId} className="text-sm">
            Show only unchecked
          </label>
        </div>
        <ul className="mt-4 space-y-3">
          {shown.map((r) => (
            <CitationItem key={r.key} row={r} />
          ))}
        </ul>
        {shown.length === 0 ? (
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Nothing left unchecked in this course.
          </p>
        ) : null}
      </div>
    </details>
  );
}
