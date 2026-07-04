"use client";

import { useMemo, useState } from "react";
import {
  DOCUMENTARIAN_PLAN,
  type TrackerComment,
  type TrackerItem,
  type TrackerState,
} from "@/lib/documentarian-plan";

// Owner-only tracker for the Documentarian course family. Checkboxes + per-item notes
// auto-save (on toggle / on blur); the comment log persists on add. Everything round-trips
// through PATCH /api/admin/documentarian → platform_settings, and is readable between
// sessions with `pnpm tracker:show`.
export function DocumentarianTracker({ initial }: { initial: TrackerState }) {
  const allItems = useMemo(() => DOCUMENTARIAN_PLAN.flatMap((s) => s.items), []);

  const [items, setItems] = useState<Record<string, TrackerItem>>(() => {
    const seed: Record<string, TrackerItem> = {};
    for (const it of allItems) {
      seed[it.id] = initial.items[it.id] ?? { done: false, note: "" };
    }
    return seed;
  });
  const [comments, setComments] = useState<TrackerComment[]>(initial.comments ?? []);
  const [updatedAt, setUpdatedAt] = useState<string | null>(initial.updatedAt);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState<{ kind: "ok" | "err"; msg: string } | null>(null);
  const [saving, setSaving] = useState(false);

  const doneCount = Object.values(items).filter((i) => i.done).length;
  const total = allItems.length;

  const field =
    "w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900";

  async function persist(nextItems: Record<string, TrackerItem>, nextComments: TrackerComment[]) {
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch("/api/admin/documentarian", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ items: nextItems, comments: nextComments }),
      });
      const data = (await res.json().catch(() => ({}))) as Partial<TrackerState> & { error?: string };
      if (!res.ok) {
        setStatus({ kind: "err", msg: data.error ?? "Could not save." });
        return false;
      }
      setUpdatedAt(data.updatedAt ?? null);
      if (data.comments) setComments(data.comments);
      setStatus({ kind: "ok", msg: "Saved." });
      return true;
    } catch {
      setStatus({ kind: "err", msg: "Network error. Try again." });
      return false;
    } finally {
      setSaving(false);
    }
  }

  function toggle(id: string) {
    const next = { ...items, [id]: { ...items[id], done: !items[id].done } };
    setItems(next);
    void persist(next, comments);
  }

  function editNote(id: string, note: string) {
    setItems((prev) => ({ ...prev, [id]: { ...prev[id], note } }));
  }

  function saveNotes() {
    void persist(items, comments);
  }

  async function addComment() {
    const text = draft.trim();
    if (!text) return;
    const next: TrackerComment[] = [...comments, { at: new Date().toISOString(), text }];
    const ok = await persist(items, next);
    if (ok) setDraft("");
  }

  return (
    <section aria-label="Documentarian program tracker" className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-neutral-600 dark:text-neutral-400" role="status">
          <span className="font-semibold text-neutral-900 dark:text-neutral-100">
            {doneCount}/{total}
          </span>{" "}
          done
          {updatedAt ? ` · last saved ${new Date(updatedAt).toLocaleString()}` : ""}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={saveNotes}
            disabled={saving}
            className="min-h-9 rounded-md px-4 text-sm font-medium text-white disabled:opacity-60"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {saving ? "Saving…" : "Save notes"}
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
      </div>

      {DOCUMENTARIAN_PLAN.map((sec) => (
        <div key={sec.key} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <h2 className="font-semibold">{sec.title}</h2>
          {sec.blurb ? (
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{sec.blurb}</p>
          ) : null}
          <ul className="mt-3 space-y-3">
            {sec.items.map((it) => {
              const state = items[it.id];
              return (
                <li key={it.id} className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={state.done}
                      onChange={() => toggle(it.id)}
                      className="mt-1 h-4 w-4 shrink-0"
                    />
                    <span className={`text-sm ${state.done ? "text-neutral-500 line-through" : ""}`}>
                      {it.label}
                    </span>
                  </label>
                  <textarea
                    value={state.note}
                    onChange={(e) => editNote(it.id, e.target.value)}
                    onBlur={saveNotes}
                    placeholder="Notes…"
                    rows={state.note ? 2 : 1}
                    className={`mt-2 ${field} text-sm`}
                    aria-label={`Note for: ${it.label}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 className="font-semibold">Comments</h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          A running log for anything not tied to a single item — questions, decisions, things for
          Claude to pick up next session (readable with <span className="font-mono">pnpm tracker:show</span>).
        </p>
        {comments.length ? (
          <ul className="mt-3 space-y-2">
            {comments
              .slice()
              .reverse()
              .map((c, i) => (
                <li key={`${c.at}-${i}`} className="rounded-md bg-neutral-50 p-3 text-sm dark:bg-neutral-900">
                  <div className="text-xs text-neutral-500">{new Date(c.at).toLocaleString()}</div>
                  <div className="mt-1 whitespace-pre-wrap">{c.text}</div>
                </li>
              ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-neutral-500">No comments yet.</p>
        )}
        <div className="mt-3 space-y-2">
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Add a comment…"
            rows={2}
            className={`${field} text-sm`}
            aria-label="Add a comment"
          />
          <button
            type="button"
            onClick={addComment}
            disabled={saving || !draft.trim()}
            className="min-h-9 rounded-md border border-neutral-300 px-4 text-sm font-medium disabled:opacity-60 dark:border-neutral-700"
          >
            Add comment
          </button>
        </div>
      </div>
    </section>
  );
}
