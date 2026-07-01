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
}

const STATUSES = ["new", "triaged", "closed"] as const;

// Admin triage list for problem reports: filter by status + set each report's status.
export function ReportsTriage({ reports }: { reports: TriageReport[] }) {
  const [rows, setRows] = useState(reports);
  const [filter, setFilter] = useState<"all" | "new" | "triaged" | "closed">("all");
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
      {visible.length === 0 ? (
        <p className="text-neutral-500">No reports.</p>
      ) : (
        <ul className="space-y-3">
          {visible.map((r) => (
            <li key={r.id} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
              <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 capitalize dark:bg-neutral-800">{r.kind}</span>
                <span>{new Date(r.createdAt).toLocaleString()}</span>
                {r.pageUrl ? <span className="truncate">· {r.pageUrl}</span> : null}
                {r.email ? <span>· {r.email}</span> : null}
              </div>
              <p className="whitespace-pre-wrap text-sm">{r.message}</p>
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
