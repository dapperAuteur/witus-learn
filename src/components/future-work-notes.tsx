"use client";

import { useState } from "react";

// The feedback channel on /admin/future: leave a note on any proposed course/feature, and it lands
// in `future_work_notes` — where Claude reads it with `pnpm future:list`, no copy-paste. Mirrors the
// problem-report flow. Owner-only; the API re-checks (this component is only rendered for owners).

export interface FutureNote {
  id: string;
  body: string;
  status: string;
  createdAt: string;
}

const btn =
  "inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12";

function fmt(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function FutureWorkNotes({ itemKey, initial }: { itemKey: string; initial: FutureNote[] }) {
  const [notes, setNotes] = useState<FutureNote[]>(initial);
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ kind: "ok" | "err"; msg: string } | null>(null);

  async function add() {
    const body = draft.trim();
    if (!body) return;
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch("/api/admin/future/notes", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ itemKey, body }),
      });
      const data = (await res.json().catch(() => ({}))) as Partial<FutureNote> & { error?: string };
      if (!res.ok || !data.id) {
        setStatus({ kind: "err", msg: data.error ?? "Could not save." });
        return;
      }
      setNotes((prev) => [
        ...prev,
        { id: data.id!, body: data.body ?? body, status: data.status ?? "open", createdAt: data.createdAt ?? new Date().toISOString() },
      ]);
      setDraft("");
      setStatus({ kind: "ok", msg: "Saved — readable with `pnpm future:list`." });
    } catch {
      setStatus({ kind: "err", msg: "Network error. Try again." });
    } finally {
      setSaving(false);
    }
  }

  async function toggle(note: FutureNote) {
    const next = note.status === "done" ? "open" : "done";
    setNotes((prev) => prev.map((n) => (n.id === note.id ? { ...n, status: next } : n)));
    const res = await fetch("/api/admin/future/notes", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: note.id, status: next }),
    }).catch(() => null);
    if (!res || !res.ok) {
      setNotes((prev) => prev.map((n) => (n.id === note.id ? { ...n, status: note.status } : n)));
      setStatus({ kind: "err", msg: "Could not update that note." });
    }
  }

  return (
    <div className="mt-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
      {notes.length > 0 ? (
        <ul className="mb-4 space-y-2">
          {notes.map((n) => (
            <li
              key={n.id}
              className="rounded-lg bg-neutral-50 p-3 text-sm dark:bg-neutral-900/60"
            >
              <p className={`whitespace-pre-wrap wrap-break-word ${n.status === "done" ? "text-neutral-400 line-through dark:text-neutral-600" : ""}`}>
                {n.body}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                <time dateTime={n.createdAt}>{fmt(n.createdAt)}</time>
                <button
                  type="button"
                  onClick={() => toggle(n)}
                  className="inline-flex min-h-11 items-center underline pointer-coarse:min-h-12"
                >
                  {n.status === "done" ? "Reopen" : "Mark done"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      <label htmlFor={`note-${itemKey}`} className="block text-sm font-medium">
        Leave a note for Claude
      </label>
      <textarea
        id={`note-${itemKey}`}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        rows={3}
        maxLength={8000}
        placeholder="What to build, change, cut, or research next…"
        className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
      />
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={add}
          disabled={saving || !draft.trim()}
          className={btn}
          style={{ background: "var(--accent)" }}
        >
          {saving ? "Saving…" : "Save note"}
        </button>
        {status ? (
          <span
            role="status"
            className={`text-sm ${status.kind === "ok" ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"}`}
          >
            {status.msg}
          </span>
        ) : null}
      </div>
    </div>
  );
}
