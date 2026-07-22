"use client";

import { useCallback, useEffect, useState } from "react";
import { OUTBOX_SYNCED, discard, enqueue, outboxSupported, type OutboxSyncedDetail } from "@/lib/offline-outbox";
import { useOnline, useOutbox } from "@/lib/use-outbox";

// The feedback channel on /admin/future: leave a note on any proposed course/feature, and it lands
// in `future_work_notes` — where Claude reads it with `pnpm future:list`, no copy-paste. Mirrors the
// problem-report flow. Owner-only; the API re-checks (this component is only rendered for owners).
//
// ── Writing a note with no network ────────────────────────────────────────────────────────────
// /admin/future can be saved for offline (SavePageOfflineButton), so BAM reads it on a plane — and
// the notes are the entire point of reading it. But notes are DB-backed, and a POST with no network
// just throws. The two honest options were "disable the form and say so" and "queue it"; a plane is
// exactly where the ideas happen, so it QUEUES: the note goes into the offline outbox
// (src/lib/offline-outbox.ts) and is sent the moment there's a connection, from whatever page is
// open at the time.
//
// Which means this component's real job is to never lose what was typed:
//   • a queued note is written to storage BEFORE the textarea is cleared, and if that write fails
//     (quota, blocked storage) the text stays put and says so — the draft is never thrown away on
//     the strength of a save that didn't happen;
//   • it renders as "Waiting to send", not as a saved note, so a pending note never masquerades as
//     a real one;
//   • when it syncs, the pending row is replaced by the server's actual record;
//   • if the server rejects it, the note stays on screen with the error, and BAM decides.
// Toggling done/reopen is NOT queued: it's a fiddly merge against a note that may not exist server-
// side yet, and getting it wrong could resurrect a closed note. Offline, it's disabled and says so.

export interface FutureNote {
  id: string;
  body: string;
  status: string;
  createdAt: string;
}

const OUTBOX_KIND = "future-note";
const NOTES_URL = "/api/admin/future/notes";

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

/** Shape of the body we queue — also what tells a pending item which item it belongs to. */
type QueuedNote = { itemKey: string; body: string };

function queuedFor(body: unknown, itemKey: string): body is QueuedNote {
  return Boolean(
    body && typeof body === "object" && (body as QueuedNote).itemKey === itemKey,
  );
}

export function FutureWorkNotes({ itemKey, initial }: { itemKey: string; initial: FutureNote[] }) {
  const [notes, setNotes] = useState<FutureNote[]>(initial);
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ kind: "ok" | "err" | "queued"; msg: string } | null>(null);
  const online = useOnline();
  const { items } = useOutbox(OUTBOX_KIND);

  // Only the queued notes belonging to THIS proposal.
  const pending = items.filter((i) => queuedFor(i.body, itemKey));

  // When the outbox drains, the note exists server-side for real — swap the pending row for the
  // server's record so the list is the truth and not an optimistic guess.
  useEffect(() => {
    const onSynced = (event: Event) => {
      const { item, response } = (event as CustomEvent<OutboxSyncedDetail>).detail;
      if (item.kind !== OUTBOX_KIND || !queuedFor(item.body, itemKey)) return;
      const note = response as Partial<FutureNote> | null;
      if (!note?.id) return;
      setNotes((prev) =>
        prev.some((n) => n.id === note.id)
          ? prev
          : [
              ...prev,
              {
                id: note.id!,
                body: note.body ?? item.label,
                status: note.status ?? "open",
                createdAt: note.createdAt ?? new Date().toISOString(),
              },
            ],
      );
    };
    window.addEventListener(OUTBOX_SYNCED, onSynced);
    return () => window.removeEventListener(OUTBOX_SYNCED, onSynced);
  }, [itemKey]);

  /** Queue a note for later. Returns false when it couldn't be persisted — the caller then keeps
   *  the draft in the textarea rather than clearing it over a save that didn't happen. */
  const queue = useCallback(
    (body: string): boolean => {
      const item = enqueue({
        kind: OUTBOX_KIND,
        url: NOTES_URL,
        method: "POST",
        body: { itemKey, body } satisfies QueuedNote,
        label: body,
      });
      return item !== null;
    },
    [itemKey],
  );

  async function add() {
    const body = draft.trim();
    if (!body) return;
    setSaving(true);
    setStatus(null);

    // Known-offline: don't even try the network — queue it and say so plainly.
    if (!online) {
      if (!outboxSupported()) {
        setStatus({
          kind: "err",
          msg: "You're offline and this browser can't queue notes. Copy your text somewhere safe before you leave this page.",
        });
      } else if (queue(body)) {
        setDraft("");
        setStatus({ kind: "queued", msg: "Waiting to send, it'll save itself when you're back online." });
      } else {
        setStatus({ kind: "err", msg: "Couldn't queue that note (storage is full). Your text is still here, copy it somewhere safe." });
      }
      setSaving(false);
      return;
    }

    try {
      const res = await fetch(NOTES_URL, {
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
      setStatus({ kind: "ok", msg: "Saved, readable with `pnpm future:list`." });
    } catch {
      // `navigator.onLine` said yes and the request still died — a flaky connection, a dropped
      // tunnel, the network going away mid-keystroke. Same answer: queue it. Losing the note here
      // is the failure this whole path exists to prevent.
      if (outboxSupported() && queue(body)) {
        setDraft("");
        setStatus({ kind: "queued", msg: "Couldn't reach the server, queued. It'll send when the connection is back." });
      } else {
        setStatus({ kind: "err", msg: "Network error, and the note couldn't be queued. Your text is still here, copy it somewhere safe." });
      }
    } finally {
      setSaving(false);
    }
  }

  async function toggle(note: FutureNote) {
    const next = note.status === "done" ? "open" : "done";
    setNotes((prev) => prev.map((n) => (n.id === note.id ? { ...n, status: next } : n)));
    const res = await fetch(NOTES_URL, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: note.id, status: next }),
    }).catch(() => null);
    if (!res || !res.ok) {
      setNotes((prev) => prev.map((n) => (n.id === note.id ? { ...n, status: note.status } : n)));
      setStatus({ kind: "err", msg: "Could not update that note." });
    }
  }

  const statusColor =
    status?.kind === "ok"
      ? "text-green-700 dark:text-green-400"
      : status?.kind === "queued"
        ? "text-amber-700 dark:text-amber-500"
        : "text-red-700 dark:text-red-400";

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
                {/* Offline, this is disabled rather than optimistically flipped: the PATCH can't be
                    queued safely, and a toggle that silently reverts on reload is a lie. */}
                <button
                  type="button"
                  onClick={() => toggle(n)}
                  disabled={!online}
                  title={online ? undefined : "Needs a connection"}
                  className="inline-flex min-h-11 items-center underline disabled:no-underline disabled:opacity-50 pointer-coarse:min-h-12"
                >
                  {n.status === "done" ? "Reopen" : "Mark done"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {/* Queued notes. Visibly NOT saved — same text, different frame, honest label. */}
      {pending.length > 0 ? (
        <ul className="mb-4 space-y-2">
          {pending.map((item) => (
            <li
              key={item.id}
              className="rounded-lg border border-dashed border-amber-300 bg-amber-50/60 p-3 text-sm dark:border-amber-900/60 dark:bg-amber-950/20"
            >
              <p className="whitespace-pre-wrap wrap-break-word">{item.label}</p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                <span
                  className={item.failed ? "font-medium text-red-700 dark:text-red-400" : "text-amber-700 dark:text-amber-500"}
                  role="status"
                >
                  {item.failed
                    ? (item.lastError ?? "This note wasn't saved.")
                    : (item.lastError ?? "Waiting to send, saves when you're back online")}
                </span>
                <button
                  type="button"
                  onClick={() => discard(item.id)}
                  className="inline-flex min-h-11 items-center text-neutral-500 underline pointer-coarse:min-h-12"
                >
                  Discard
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
          {saving ? "Saving…" : online ? "Save note" : "Queue note"}
        </button>
        {status ? (
          <span role="status" className={`text-sm ${statusColor}`}>
            {status.msg}
          </span>
        ) : null}
      </div>
      {!online ? (
        <p className="mt-2 text-xs text-neutral-500">
          You&rsquo;re offline. Notes are held on this device and sent automatically when you
          reconnect, you can keep writing.
        </p>
      ) : null}
    </div>
  );
}
