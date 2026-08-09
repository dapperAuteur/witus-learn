"use client";

import { useMemo, useState } from "react";
import { playableAudioSrc } from "@/lib/media";
import {
  MEDIA_KIND_LABEL,
  MEDIA_STATUS_LABEL,
  RIGHTS_STATUS_LABEL,
  isRightsStatus,
  mediaDecisionError,
  type MediaKind,
  type MediaStatus,
} from "@/lib/media-verify";

// The review list on /admin/media. One card per uploaded asset: what it actually looks or sounds
// like, who it belongs to, and two buttons.
//
// The preview is the point. A credit line and a rights status can be checked from a spreadsheet;
// whether the scan is legible, whether the caption matches the picture, and whether the audio is the
// take that was meant to ship cannot. So every card renders the real asset, not a filename.
//
// A REJECTION REQUIRES A NOTE, checked here and again in the API. Same rule as the citation and
// source-check boards, for the same reason: a decision with no reasoning behind it stops the next
// person from acting on it, and a rejected image whose problem was never written down gets
// re-uploaded unchanged.

export interface MediaAssetRow {
  id: string;
  courseSlug: string | null;
  lessonSlug: string | null;
  kind: MediaKind;
  url: string;
  alt: string | null;
  caption: string | null;
  credit: string;
  rightsStatus: string;
  sourceUrl: string;
  status: MediaStatus;
  reviewNote: string | null;
  reviewedAt: string | null;
  createdAt: string;
}

const statusClass: Record<MediaStatus, string> = {
  pending: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
  approved: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100",
  rejected: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
};

const btnBase =
  "inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-medium disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12";

function rightsLabel(value: string): string {
  return isRightsStatus(value) ? RIGHTS_STATUS_LABEL[value] : value;
}

function isLink(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

function Preview({ row }: { row: MediaAssetRow }) {
  const frame =
    "mt-3 overflow-x-auto rounded-md border border-neutral-200 bg-neutral-50 p-2 dark:border-neutral-800 dark:bg-neutral-900";

  if (row.kind === "image") {
    return (
      <div className={frame}>
        {/* Plain <img>: these are arbitrary Cloudinary URLs reviewed once by one person, so the
            optimizer would add a remote-pattern config and a cache for no benefit. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={row.url}
          alt={row.alt ?? ""}
          loading="lazy"
          className="mx-auto h-auto max-h-72 w-auto max-w-full rounded"
        />
      </div>
    );
  }

  if (row.kind === "video") {
    return (
      <div className={frame}>
        <video src={row.url} controls preload="metadata" className="mx-auto max-h-72 w-full rounded">
          <track kind="captions" />
        </video>
      </div>
    );
  }

  if (row.kind === "audio") {
    return (
      <div className={frame}>
        <audio src={playableAudioSrc(row.url)} controls preload="metadata" className="w-full" />
      </div>
    );
  }

  return (
    <p className={`${frame} text-sm`}>
      <a
        href={row.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Open the document in a new tab
      </a>
    </p>
  );
}

function MediaCard({ row, onDecided }: { row: MediaAssetRow; onDecided: (next: MediaStatus) => void }) {
  const [status, setStatus] = useState<MediaStatus>(row.status);
  const [note, setNote] = useState(row.reviewNote ?? "");
  const [saving, setSaving] = useState<MediaStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const noteId = `note-${row.id}`;

  async function decide(next: MediaStatus) {
    setError(null);
    setSaved(false);
    const problem = mediaDecisionError({ status: next, note, rightsStatus: row.rightsStatus });
    if (problem) {
      setError(problem);
      return;
    }
    setSaving(next);
    try {
      const res = await fetch(`/api/admin/media/${row.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next, note }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? `Save failed (${res.status})`);
      }
      setStatus(next);
      setSaved(true);
      onDecided(next);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(null);
    }
  }

  return (
    <li className="rounded-lg border border-neutral-200 p-3 dark:border-neutral-800 sm:p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusClass[status]}`}>
          {MEDIA_STATUS_LABEL[status]}
        </span>
        <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
          {MEDIA_KIND_LABEL[row.kind]}
        </span>
        {row.lessonSlug ? (
          <span className="text-xs text-neutral-500 dark:text-neutral-400">{row.lessonSlug}</span>
        ) : null}
      </div>

      <Preview row={row} />

      <dl className="mt-3 space-y-2 text-sm">
        <div>
          <dt className="font-medium">Alt text</dt>
          <dd className="text-neutral-700 dark:text-neutral-300">
            {row.alt ?? (
              <span className="text-neutral-500 dark:text-neutral-400">
                None. An image with no alt text is invisible to a screen reader.
              </span>
            )}
          </dd>
        </div>
        <div>
          <dt className="font-medium">Caption</dt>
          <dd className="text-neutral-700 dark:text-neutral-300">
            {row.caption ?? <span className="text-neutral-500 dark:text-neutral-400">None</span>}
          </dd>
        </div>
        <div>
          <dt className="font-medium">Credit</dt>
          <dd className="text-neutral-700 dark:text-neutral-300">{row.credit}</dd>
        </div>
        <div>
          <dt className="font-medium">Rights</dt>
          <dd className="text-neutral-700 dark:text-neutral-300">{rightsLabel(row.rightsStatus)}</dd>
        </div>
        <div>
          <dt className="font-medium">Source</dt>
          <dd className="break-words text-neutral-700 dark:text-neutral-300">
            {isLink(row.sourceUrl) ? (
              <a
                href={row.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {row.sourceUrl}
              </a>
            ) : (
              row.sourceUrl
            )}
          </dd>
        </div>
      </dl>

      <label
        htmlFor={noteId}
        className="mt-3 block text-xs font-medium text-neutral-600 dark:text-neutral-400"
      >
        Review note (required to reject)
      </label>
      <textarea
        id={noteId}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={2}
        placeholder="What is wrong with it, or what you checked before approving."
        className="mt-1 w-full rounded-md border border-neutral-300 bg-white p-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900"
      />

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => decide("approved")}
          disabled={saving !== null}
          className={`${btnBase} bg-emerald-700 text-white`}
        >
          {saving === "approved" ? "Saving…" : "Approve"}
        </button>
        <button
          type="button"
          onClick={() => decide("rejected")}
          disabled={saving !== null}
          className={`${btnBase} border border-red-700 text-red-800 dark:border-red-500 dark:text-red-300`}
        >
          {saving === "rejected" ? "Saving…" : "Reject"}
        </button>
        {saved ? (
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Saved</span>
        ) : row.reviewedAt ? (
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            Last reviewed {new Date(row.reviewedAt).toLocaleString("en-US")}
          </span>
        ) : null}
      </div>

      {error ? (
        <p role="alert" className="mt-2 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </li>
  );
}

export function MediaVerifyList({
  courseSlug,
  rows,
}: {
  courseSlug: string;
  rows: MediaAssetRow[];
}) {
  // Decisions live here so the "only pending" filter reacts to a save without a page reload.
  const [decided, setDecided] = useState<Record<string, MediaStatus>>({});
  const [onlyPending, setOnlyPending] = useState(true);
  const toggleId = `only-pending-${courseSlug}`;

  const statusOf = useMemo(
    () => (row: MediaAssetRow) => decided[row.id] ?? row.status,
    [decided],
  );
  const pending = rows.filter((r) => statusOf(r) === "pending").length;
  const shown = onlyPending ? rows.filter((r) => statusOf(r) === "pending") : rows;

  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold tracking-tight break-words">{courseSlug}</h2>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        {rows.length - pending} of {rows.length} decided.
      </p>
      <div className="mt-2 flex items-center gap-2">
        <input
          id={toggleId}
          type="checkbox"
          checked={onlyPending}
          onChange={(e) => setOnlyPending(e.target.checked)}
          className="h-4 w-4"
        />
        <label htmlFor={toggleId} className="text-sm">
          Show only pending
        </label>
      </div>

      <ul className="mt-4 space-y-4">
        {shown.map((r) => (
          <MediaCard
            key={r.id}
            row={r}
            onDecided={(next) => setDecided((d) => ({ ...d, [r.id]: next }))}
          />
        ))}
      </ul>

      {shown.length === 0 ? (
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
          Nothing pending in this course.
        </p>
      ) : null}
    </section>
  );
}
