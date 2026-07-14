"use client";

/**
 * The OFFLINE OUTBOX — a general queue for writes made with no network, replayed when it returns.
 *
 * Built for BAM's bug report: "user should be able to submit comment, correction, question, bug,
 * feedback, idea, other when offline and it syncs when back online". Today only the /admin/future
 * notes form uses it, but nothing here knows what a note is: an item is `{ url, method, body }`
 * plus a label to show the human. Point any other form at it (report-a-problem, feedback, course
 * corrections) by giving it a new `kind`.
 *
 * ── The rule this module exists to enforce ────────────────────────────────────────────────────
 * A QUEUED WRITE IS NEVER SILENTLY LOST. Everything else is a consequence of that:
 *
 *  • It survives a reload, a crash, and a closed tab → localStorage, written BEFORE the UI ever
 *    says "queued" (same order-of-operations rule as the offline manifest: persist, then claim).
 *  • It is visible → `outboxFor()` feeds a "Pending" row in the very form that created it, so a
 *    queued note looks queued and not sent.
 *  • It is only ever DELETED on a 2xx from the server, or by the person who wrote it clicking
 *    Discard. Not on failure. Not on a 4xx. Not on a hundred failed attempts.
 *  • A permanent failure is REPORTED, not swallowed → `failed: true` + `lastError`, rendered as an
 *    error the human can read and act on, with the text still there to copy out.
 *
 * ── Why localStorage, again ───────────────────────────────────────────────────────────────────
 * Same reasoning as ./offline-manifest.ts: tiny (a note is ~8 KB max, and the queue is normally
 * 0–3 items), synchronous reads so a form can render its pending rows on first paint with no
 * network, and per-origin — so one tenant's queue can never be seen from another's domain. The
 * read-modify-write is not atomic across tabs; the worst case is one tab's item being dropped from
 * the queue before it sends, which is the one thing that WOULD be a silent loss — so writes go
 * through `mutate()`, which re-reads immediately before writing to keep that window as small as
 * localStorage allows.
 */

const KEY = "witus-offline-outbox-v1";

/** Fired on the window whenever the queue changes, so every mounted form re-renders. */
export const OUTBOX_CHANGED = "witus:outbox-changed";
/** Fired when an item successfully reaches the server. `detail` carries the item + the server's
 *  response body, so the form that queued it can swap the pending row for the real record. */
export const OUTBOX_SYNCED = "witus:outbox-synced";

export type OutboxItem = {
  id: string;
  /** Which form queued this — `"future-note"` today. Lets a form show only its own pending rows. */
  kind: string;
  url: string;
  method: "POST" | "PATCH";
  /** JSON-serialisable request body. */
  body: unknown;
  /** What the human wrote, so the pending row can show it without the form re-deriving it. */
  label: string;
  createdAt: number;
  attempts: number;
  /** Why the last attempt failed, in words a person can act on. */
  lastError: string | null;
  /** The server rejected this in a way retrying won't fix. Kept and shown; never auto-deleted. */
  failed: boolean;
};

export type OutboxSyncedDetail = { item: OutboxItem; response: unknown };

function storage(): Storage | null {
  try {
    if (typeof localStorage === "undefined") return null;
    return localStorage;
  } catch {
    return null;
  }
}

/** False in SSR and storage-blocked browsers (Safari private mode). Callers then keep the form's
 *  online-only behaviour and say so, rather than pretending to queue into nothing. */
export function outboxSupported(): boolean {
  return storage() !== null;
}

function isItem(value: unknown): value is OutboxItem {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === "string" &&
    typeof v.kind === "string" &&
    typeof v.url === "string" &&
    (v.method === "POST" || v.method === "PATCH") &&
    typeof v.label === "string"
  );
}

/** The queue, oldest first. Never throws: a corrupt blob reads as empty. */
export function readOutbox(): OutboxItem[] {
  const ls = storage();
  if (!ls) return [];
  try {
    const raw = ls.getItem(KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isItem).sort((a, b) => a.createdAt - b.createdAt);
  } catch {
    return [];
  }
}

function announce(): void {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent(OUTBOX_CHANGED));
}

/**
 * Read-modify-write the queue and tell everyone. Returns false when the write didn't land (quota,
 * blocked storage) — which callers MUST surface, because a queue that didn't persist is exactly
 * the silent loss this module exists to prevent.
 */
function mutate(fn: (items: OutboxItem[]) => OutboxItem[]): boolean {
  const ls = storage();
  if (!ls) return false;
  try {
    ls.setItem(KEY, JSON.stringify(fn(readOutbox())));
  } catch {
    return false;
  }
  announce();
  return true;
}

/** Only this `kind`'s items — a form shows its own pending rows and nobody else's. */
export function outboxFor(kind: string): OutboxItem[] {
  return readOutbox().filter((i) => i.kind === kind);
}

function newId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

/**
 * Queue a write. Returns the item on success, or null when it could NOT be persisted — the caller
 * must then tell the human their text wasn't saved, not silently drop it.
 */
export function enqueue(input: {
  kind: string;
  url: string;
  method: "POST" | "PATCH";
  body: unknown;
  label: string;
}): OutboxItem | null {
  const item: OutboxItem = {
    id: newId(),
    kind: input.kind,
    url: input.url,
    method: input.method,
    body: input.body,
    label: input.label,
    createdAt: Date.now(),
    attempts: 0,
    lastError: null,
    failed: false,
  };
  return mutate((items) => [...items, item]) ? item : null;
}

/** Drop an item because the human said so (a failed note they've given up on, or copied out). The
 *  ONLY deletion path other than a successful send. */
export function discard(id: string): void {
  mutate((items) => items.filter((i) => i.id !== id));
}

/** True while a flush is in flight — stops the `online` event and a mount racing each other into
 *  sending the same item twice. */
let flushing = false;

/**
 * Try to send everything queued, oldest first.
 *
 * Failure handling is the whole point, so it is explicit about which failures are which:
 *
 *   • 2xx           → done. Remove it, and announce the server's record so the form can show it.
 *   • 401 / 403     → NOT a failure of the note. The session went away (expired, or signed out with
 *                     something queued). Keep it PENDING with "Sign in and it'll save" — signing
 *                     back in and reloading retries it. Deleting it here would throw away writing
 *                     the person did.
 *   • 408/429/5xx   → the server is having a moment. Keep it pending; the next flush retries.
 *   • other 4xx     → the request itself is wrong (bad body, item deleted server-side). Retrying
 *                     can't fix it, so mark `failed` and show the error — but KEEP the text on
 *                     screen, because it is the only copy that exists.
 *   • network throw → still offline. Keep it pending, quietly. This is the normal case.
 */
export async function flushOutbox(): Promise<void> {
  if (flushing || !outboxSupported()) return;
  const queue = readOutbox().filter((i) => !i.failed);
  if (queue.length === 0) return;
  if (typeof navigator !== "undefined" && navigator.onLine === false) return;

  flushing = true;
  try {
    for (const item of queue) {
      let res: Response;
      try {
        res = await fetch(item.url, {
          method: item.method,
          headers: { "content-type": "application/json" },
          body: JSON.stringify(item.body),
          credentials: "same-origin",
        });
      } catch {
        // Still no network. Leave it exactly where it is and stop — the rest will fail too.
        mutate((items) =>
          items.map((i) => (i.id === item.id ? { ...i, attempts: i.attempts + 1 } : i)),
        );
        return;
      }

      if (res.ok) {
        const response: unknown = await res.json().catch(() => null);
        mutate((items) => items.filter((i) => i.id !== item.id));
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent<OutboxSyncedDetail>(OUTBOX_SYNCED, { detail: { item, response } }),
          );
        }
        continue;
      }

      const retryable = res.status === 401 || res.status === 403 || res.status === 408 || res.status === 429 || res.status >= 500;
      const lastError =
        res.status === 401 || res.status === 403
          ? "Sign in to save this — it's still here."
          : retryable
            ? "The server couldn't take it just then. It'll try again."
            : `The server rejected this (${res.status}). It hasn't been saved.`;
      mutate((items) =>
        items.map((i) =>
          i.id === item.id
            ? { ...i, attempts: i.attempts + 1, lastError, failed: !retryable }
            : i,
        ),
      );
    }
  } finally {
    flushing = false;
  }
}
