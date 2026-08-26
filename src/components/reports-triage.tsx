"use client";

import { useState } from "react";

export interface TriageReport {
  id: string;
  kind: string;
  message: string;
  pageUrl: string | null;
  email: string | null;
  status: string;
  createdAt: string;
  /** Why the row left `new`, recorded by `pnpm reports:triage --note` (migration 0058). */
  resolution: string | null;
}

const STATUSES = ["new", "triaged", "closed"] as const;

// Admin triage list for problem reports: filter by status, set each report's status, and
// bulk-select a batch to close/triage in one click (clears the false backlog of already-fixed items).
export function ReportsTriage({ reports }: { reports: TriageReport[] }) {
  const [rows, setRows] = useState(reports);
  const [filter, setFilter] = useState<"all" | "new" | "triaged" | "closed">("all");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [busy, setBusy] = useState(false);
  const visible = filter === "all" ? rows : rows.filter((r) => r.status === filter);

  async function setStatus(id: string, status: (typeof STATUSES)[number]) {
    setRows((p) => p.map((r) => (r.id === id ? { ...r, status } : r))); // optimistic
    try {
      await fetch(`/api/admin/reports/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
      });
    } catch {
      /* optimistic; a refresh will reconcile */
    }
  }

  function toggle(id: string) {
    setSelected((p) => {
      const next = new Set(p);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const allVisibleSelected = visible.length > 0 && visible.every((r) => selected.has(r.id));
  function toggleAllVisible() {
    setSelected((p) => {
      const next = new Set(p);
      if (allVisibleSelected) visible.forEach((r) => next.delete(r.id));
      else visible.forEach((r) => next.add(r.id));
      return next;
    });
  }

  async function bulkSet(status: (typeof STATUSES)[number]) {
    const ids = [...selected];
    if (ids.length === 0) return;
    setBusy(true);
    setRows((p) => p.map((r) => (selected.has(r.id) ? { ...r, status } : r))); // optimistic
    try {
      await fetch(`/api/admin/reports/bulk`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ids, status }),
      });
    } catch {
      /* optimistic; a refresh will reconcile */
    }
    setSelected(new Set());
    setBusy(false);
  }

  const counts = {
    all: rows.length,
    new: rows.filter((r) => r.status === "new").length,
    triaged: rows.filter((r) => r.status === "triaged").length,
    closed: rows.filter((r) => r.status === "closed").length,
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2 text-sm">
        {(["all", "new", "triaged", "closed"] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-3 py-1 capitalize ${filter === f ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black" : "bg-neutral-100 dark:bg-neutral-800"}`}
          >
            {f} ({counts[f]})
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="mb-3 flex flex-wrap items-center gap-3 rounded-lg border border-neutral-200 px-3 py-2 text-sm dark:border-neutral-800">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={allVisibleSelected}
              onChange={toggleAllVisible}
              className="min-h-4 min-w-4"
              aria-label="Select all visible reports"
            />
            <span className="text-neutral-600 dark:text-neutral-400">
              {selected.size > 0 ? `${selected.size} selected` : "Select all"}
            </span>
          </label>
          {selected.size > 0 ? (
            <>
              <span className="text-neutral-400">Mark selected:</span>
              {STATUSES.map((s) => (
                <button
                  key={s}
                  type="button"
                  disabled={busy}
                  onClick={() => bulkSet(s)}
                  className="rounded border border-neutral-300 px-2 py-1 capitalize hover:border-current focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700"
                >
                  {s}
                </button>
              ))}
            </>
          ) : null}
        </div>
      ) : null}

      {visible.length === 0 ? (
        <p className="text-neutral-600">No reports.</p>
      ) : (
        <ul className="space-y-3">
          {visible.map((r) => (
            <li
              key={r.id}
              className={`rounded-lg border p-4 dark:border-neutral-800 ${selected.has(r.id) ? "border-current" : "border-neutral-200"}`}
            >
              <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-neutral-600">
                <input
                  type="checkbox"
                  checked={selected.has(r.id)}
                  onChange={() => toggle(r.id)}
                  className="min-h-4 min-w-4"
                  aria-label={`Select report: ${r.message.slice(0, 40)}`}
                />
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 capitalize dark:bg-neutral-800">{r.kind}</span>
                <span>{new Date(r.createdAt).toLocaleString()}</span>
                {r.pageUrl ? <span className="break-all">· {r.pageUrl}</span> : null}
                {r.email ? <span className="break-all">· {r.email}</span> : null}
              </div>
              <p className="whitespace-pre-wrap text-sm">{r.message}</p>
              {/* The recorded reason, which is the whole point of storing one: a row that left
                  `new` with no reason stops anyone looking again and says nothing about whether it
                  was fixed, already shipped, declined or duplicated. Showing it here is what makes
                  `pnpm reports:triage --note` visible to a human instead of write-only, and a row
                  off `new` with nothing recorded now reads as the gap it is. */}
              {r.status !== "new" ? (
                <p className="mt-2 border-l-2 border-neutral-300 pl-3 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
                  {r.resolution ? (
                    <>
                      <span className="font-medium">Why: </span>
                      <span className="whitespace-pre-wrap">{r.resolution}</span>
                    </>
                  ) : (
                    <span className="italic">
                      No reason recorded. Close it again with{" "}
                      <code className="not-italic">pnpm reports:triage {r.id.slice(0, 8)} --status …</code>{" "}
                      so the next person knows why.
                    </span>
                  )}
                </p>
              ) : null}
              <div className="mt-2 flex gap-1 text-xs">
                {STATUSES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStatus(r.id, s)}
                    className={`rounded px-2 py-1 capitalize ${r.status === s ? "bg-green-600 text-white" : "border border-neutral-300 dark:border-neutral-700"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
