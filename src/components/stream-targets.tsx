"use client";

import { useState } from "react";
import type { StreamTarget } from "@/db/queries/stream-targets";

// Admin card for RTMP fan-out targets. You add each social's Live ingest URL + stream key,
// then copy them into OBS's multiple-output so one broadcast goes to LinkedIn, YouTube, etc.
// The app only stores the config; OBS does the pushing. Owner/brand-admin only.
export function StreamTargets({ initial }: { initial: StreamTarget[] }) {
  const [targets, setTargets] = useState<StreamTarget[]>(initial);
  const [status, setStatus] = useState<{ kind: "ok" | "err"; msg: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const field =
    "w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900";

  function update(i: number, patch: Partial<StreamTarget>) {
    setTargets((ts) => ts.map((t, idx) => (idx === i ? { ...t, ...patch } : t)));
  }
  function add() {
    setTargets((ts) => [...ts, { label: "", rtmpUrl: "", streamKey: "" }]);
  }
  function remove(i: number) {
    setTargets((ts) => ts.filter((_, idx) => idx !== i));
  }
  async function copy(text: string, tag: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(tag);
      setTimeout(() => setCopied((c) => (c === tag ? null : c)), 1500);
    } catch {
      /* clipboard blocked; ignore */
    }
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch("/api/admin/stream-targets", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ targets }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; targets?: StreamTarget[] };
      if (!res.ok) setStatus({ kind: "err", msg: data.error ?? "Could not save." });
      else {
        if (data.targets) setTargets(data.targets);
        setStatus({ kind: "ok", msg: "Targets saved." });
      }
    } catch {
      setStatus({ kind: "err", msg: "Network error. Try again." });
    } finally {
      setSaving(false);
    }
  }

  const copyBtn = "shrink-0 rounded-md border border-neutral-300 px-2 text-xs dark:border-neutral-700";

  return (
    <section className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800" aria-label="Multistream targets">
      <h2 className="font-semibold">Multistream targets</h2>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        RTMP destinations to fan your broadcast out to (LinkedIn Live, YouTube, and the like). Add each
        one here, then paste the URL + key into OBS&apos;s multiple-output. The app stores the config;
        OBS does the streaming. Stream keys are often single-use, so update them before each broadcast.
      </p>

      <form onSubmit={save} className="mt-4 space-y-4">
        {targets.length === 0 ? (
          <p className="text-sm text-neutral-500">No targets yet. Add one below.</p>
        ) : null}

        {targets.map((t, i) => (
          <div key={i} className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <input
                value={t.label}
                onChange={(e) => update(i, { label: e.target.value })}
                placeholder="Label (e.g. LinkedIn Live)"
                className={field}
                required
              />
              <button type="button" onClick={() => remove(i)} className={copyBtn} aria-label="Remove target">
                Remove
              </button>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <input
                value={t.rtmpUrl}
                onChange={(e) => update(i, { rtmpUrl: e.target.value })}
                placeholder="rtmps://…  (ingest URL)"
                className={`${field} font-mono text-xs`}
                required
              />
              <button type="button" onClick={() => copy(t.rtmpUrl, `url-${i}`)} className={copyBtn}>
                {copied === `url-${i}` ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <input
                value={t.streamKey}
                onChange={(e) => update(i, { streamKey: e.target.value })}
                placeholder="stream key"
                className={`${field} font-mono text-xs`}
              />
              <button type="button" onClick={() => copy(t.streamKey, `key-${i}`)} className={copyBtn}>
                {copied === `key-${i}` ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        ))}

        <div className="flex flex-wrap items-center gap-3">
          <button type="button" onClick={add} className="min-h-9 rounded-md border border-neutral-300 px-3 text-sm dark:border-neutral-700">
            + Add target
          </button>
          <button
            type="submit"
            disabled={saving}
            className="min-h-9 rounded-md px-4 text-sm font-medium text-white disabled:opacity-60"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {saving ? "Saving…" : "Save targets"}
          </button>
          {status ? (
            <span
              role="status"
              className={`text-sm ${status.kind === "ok" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}
            >
              {status.msg}
            </span>
          ) : null}
        </div>
      </form>
    </section>
  );
}
