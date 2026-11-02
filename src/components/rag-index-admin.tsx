"use client";

import { useRef, useState } from "react";
import { REASON_LABEL, type RagAdminRow } from "@/lib/rag/admin-list";

// /admin/rag: the Run and Run all buttons. Each run is ONE request for ONE course
// (POST /api/admin/rag/index); Run all is a loop here in the browser, one course at a time, so no
// request runs long, progress is visible, and closing the tab just leaves the rest listed for later.

type RunState =
  | { kind: "idle" }
  | { kind: "running" }
  | { kind: "done"; chunkCount: number; indexedAt: string }
  | { kind: "failed"; error: string };

const fmt = (iso: string | null) =>
  iso
    ? new Date(iso).toLocaleString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })
    : "never";

export function RagIndexAdmin({ initial }: { initial: RagAdminRow[] }) {
  const [rows, setRows] = useState(initial);
  const [states, setStates] = useState<Record<string, RunState>>({});
  const [runningAll, setRunningAll] = useState(false);
  const [progress, setProgress] = useState<string>("");
  const stopRef = useRef(false);

  async function runOne(row: RagAdminRow): Promise<boolean> {
    setStates((s) => ({ ...s, [row.courseId]: { kind: "running" } }));
    try {
      const res = await fetch("/api/admin/rag/index", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ courseId: row.courseId }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStates((s) => ({ ...s, [row.courseId]: { kind: "failed", error: data.error ?? `Failed (${res.status}).` } }));
        return false;
      }
      setStates((s) => ({ ...s, [row.courseId]: { kind: "done", chunkCount: data.chunkCount, indexedAt: data.indexedAt } }));
      setRows((rs) => rs.map((r) => (r.courseId === row.courseId ? { ...r, chunkCount: data.chunkCount, indexedAt: data.indexedAt } : r)));
      return true;
    } catch {
      setStates((s) => ({ ...s, [row.courseId]: { kind: "failed", error: "Network error; the old index is unchanged." } }));
      return false;
    }
  }

  async function runAll() {
    stopRef.current = false;
    setRunningAll(true);
    const todo = rows.filter((r) => states[r.courseId]?.kind !== "done");
    let ok = 0;
    let failed = 0;
    for (const [i, row] of todo.entries()) {
      if (stopRef.current) break;
      setProgress(`Indexing ${i + 1} of ${todo.length}: ${row.title}`);
      if (await runOne(row)) ok++;
      else failed++;
    }
    setProgress(
      `${stopRef.current ? "Stopped. " : ""}${ok} indexed, ${failed} failed${
        todo.length - ok - failed > 0 ? `, ${todo.length - ok - failed} not started` : ""
      }.`,
    );
    setRunningAll(false);
  }

  if (rows.length === 0) {
    return (
      <p className="rounded-md border border-neutral-200 p-4 text-sm dark:border-neutral-800">
        Every course&apos;s index is current. Nothing to run.
      </p>
    );
  }

  const remaining = rows.filter((r) => states[r.courseId]?.kind !== "done").length;

  return (
    <section aria-labelledby="rag-list-heading">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 id="rag-list-heading" className="font-semibold">
          {rows.length} {rows.length === 1 ? "course needs" : "courses need"} indexing
        </h2>
        {runningAll ? (
          <button
            type="button"
            onClick={() => {
              stopRef.current = true;
            }}
            className="min-h-11 rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700"
          >
            Stop after this course
          </button>
        ) : (
          <button
            type="button"
            onClick={() => void runAll()}
            disabled={remaining === 0}
            className="min-h-11 rounded-md px-4 py-2 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Run all ({remaining})
          </button>
        )}
      </div>
      <p role="status" aria-live="polite" className="mt-2 min-h-5 text-sm text-neutral-600 dark:text-neutral-400">
        {progress}
      </p>

      <ul className="mt-3 divide-y divide-neutral-100 rounded-lg border border-neutral-200 dark:divide-neutral-800/60 dark:border-neutral-800">
        {rows.map((r) => {
          const st = states[r.courseId] ?? { kind: "idle" };
          return (
            <li key={r.courseId} className="flex flex-col gap-2 p-3 text-sm sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <p className="font-medium break-words">{r.title}</p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {r.tenantName} · <span className="break-all font-mono text-xs">{r.courseSlug}</span>
                  {r.isPublished ? "" : " · not published"}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {st.kind === "done" ? "Indexed just now" : REASON_LABEL[r.reason]}. Last indexed {fmt(r.indexedAt)},{" "}
                  {r.chunkCount} {r.chunkCount === 1 ? "chunk" : "chunks"}.
                </p>
                {st.kind === "failed" ? (
                  <p role="alert" className="mt-1 text-amber-700 dark:text-amber-400">
                    {st.error}
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={() => void runOne(r)}
                disabled={st.kind === "running" || runningAll}
                aria-label={`Run the index for ${r.title}`}
                className="min-h-11 shrink-0 self-start rounded-md border border-neutral-300 px-4 py-2 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700"
              >
                {st.kind === "running" ? "Running…" : st.kind === "done" ? "Run again" : st.kind === "failed" ? "Retry" : "Run"}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
