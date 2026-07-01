"use client";

import { useMemo, useState } from "react";

// Batch-announce UI: shows every course with its "announced" status, lets BAM pick a
// subset (or filter to the not-yet-announced), optionally schedule the batch, and send
// them to the Outbox as drafts. Announce them all over time — a batch at a time.

export interface AnnounceCourseRow {
  id: string;
  title: string;
  coverImageUrl: string | null;
  isPublished: boolean;
  /** ISO string or null. */
  announcedAt: string | null;
}

function fmtDate(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString();
}

export function AnnounceManager({
  courses,
  outboxConfigured,
}: {
  courses: AnnounceCourseRow[];
  outboxConfigured: boolean;
}) {
  const [rows, setRows] = useState(courses);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [hideAnnounced, setHideAnnounced] = useState(false);
  const [scheduleAt, setScheduleAt] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  const visible = useMemo(
    () => (hideAnnounced ? rows.filter((r) => !r.announcedAt) : rows),
    [rows, hideAnnounced],
  );
  const announcedCount = rows.filter((r) => r.announcedAt).length;

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
  function selectAllVisible() {
    setSelected(new Set(visible.map((r) => r.id)));
  }
  function clearSelection() {
    setSelected(new Set());
  }

  async function announce() {
    if (selected.size === 0 || busy) return;
    setBusy(true);
    setMsg(null);
    try {
      const body: { courseIds: string[]; scheduledAt?: string } = { courseIds: [...selected] };
      if (scheduleAt) body.scheduledAt = new Date(scheduleAt).toISOString();
      const res = await fetch("/api/teach/announce", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMsg({ kind: "err", text: data.error || "Announcement failed." });
        return;
      }
      // Reflect the new state locally: stamp the just-announced rows.
      const now = new Date().toISOString();
      setRows((prev) => prev.map((r) => (selected.has(r.id) ? { ...r, announcedAt: now } : r)));
      clearSelection();
      setMsg({
        kind: "ok",
        text: `${data.announced} course${data.announced === 1 ? "" : "s"} sent to the Outbox as draft${data.announced === 1 ? "" : "s"}${
          data.scheduled ? " (scheduled)" : ""
        }. Review and pick social profiles in the Outbox.`,
      });
    } catch {
      setMsg({ kind: "err", text: "Network error — please try again." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      {!outboxConfigured ? (
        <p className="mb-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200">
          The WitUS Outbox isn&rsquo;t configured yet, so announcing is disabled. Set{" "}
          <code>OUTBOX_INGEST_URL</code>, <code>OUTBOX_SOURCE_SLUG</code>, and{" "}
          <code>OUTBOX_INGEST_SECRET</code> to enable it.
        </p>
      ) : null}

      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        {announcedCount} of {rows.length} courses announced. Drafts go to the Outbox for your review —
        nothing publishes automatically. Announce a batch at a time.
      </p>

      <div className="mb-4 flex flex-wrap items-end gap-3">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={hideAnnounced} onChange={(e) => setHideAnnounced(e.target.checked)} />
          Hide already-announced
        </label>
        <div>
          <label htmlFor="scheduleAt" className="block text-xs text-neutral-500">
            Schedule (optional)
          </label>
          <input
            id="scheduleAt"
            type="datetime-local"
            value={scheduleAt}
            onChange={(e) => setScheduleAt(e.target.value)}
            className="min-h-9 rounded-md border border-neutral-300 px-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          />
        </div>
        <button type="button" onClick={selectAllVisible} className="text-sm underline">
          Select all shown
        </button>
        {selected.size > 0 ? (
          <button type="button" onClick={clearSelection} className="text-sm underline">
            Clear ({selected.size})
          </button>
        ) : null}
        <button
          type="button"
          onClick={announce}
          disabled={!outboxConfigured || selected.size === 0 || busy}
          className="ml-auto min-h-9 rounded-md px-4 text-sm font-medium text-white disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {busy ? "Announcing…" : `Announce ${selected.size || ""} as draft${selected.size === 1 ? "" : "s"}`}
        </button>
      </div>

      {msg ? (
        <p
          className={`mb-4 rounded-md p-3 text-sm ${
            msg.kind === "ok"
              ? "border border-green-300 bg-green-50 text-green-800 dark:border-green-700 dark:bg-green-950/40 dark:text-green-200"
              : "border border-red-300 bg-red-50 text-red-800 dark:border-red-700 dark:bg-red-950/40 dark:text-red-200"
          }`}
        >
          {msg.text}
        </p>
      ) : null}

      <ul className="divide-y divide-neutral-200 rounded-lg border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        {visible.length === 0 ? (
          <li className="p-4 text-sm text-neutral-500">No courses to show.</li>
        ) : (
          visible.map((r) => (
            <li key={r.id} className="flex items-center gap-3 p-3">
              <input
                type="checkbox"
                checked={selected.has(r.id)}
                onChange={() => toggle(r.id)}
                aria-label={`Select ${r.title}`}
              />
              {r.coverImageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={r.coverImageUrl} alt="" className="h-10 w-16 flex-none rounded object-cover" />
              ) : (
                <div className="h-10 w-16 flex-none rounded bg-neutral-100 dark:bg-neutral-800" />
              )}
              <span className="min-w-0 flex-1 truncate font-medium">
                {r.title}
                {!r.isPublished ? (
                  <span className="ml-2 rounded bg-neutral-100 px-1.5 py-0.5 text-xs text-neutral-500 dark:bg-neutral-800">
                    draft
                  </span>
                ) : null}
              </span>
              {r.announcedAt ? (
                <span className="flex-none text-xs text-green-700 dark:text-green-400">
                  ✓ Announced {fmtDate(r.announcedAt)}
                </span>
              ) : (
                <span className="flex-none text-xs text-neutral-400">Not announced</span>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
