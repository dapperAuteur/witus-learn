"use client";

import { useCallback, useEffect, useState } from "react";
import {
  OUTBOX_CHANGED,
  flushOutbox,
  outboxFor,
  type OutboxItem,
} from "./offline-outbox";

/**
 * Live connection state.
 *
 * `navigator.onLine` is a hint, not a promise — it says "there is a network interface", not "the
 * server is reachable". So it is used only to CHOOSE A PATH (queue vs. send), never to claim
 * anything to the user: a form that thinks it's online and then fails to fetch falls back to the
 * queue anyway (see FutureWorkNotes.add). Starts `true` on the server and on first paint so a
 * hydrating page never flashes an "you're offline" state it's about to take back.
 */
export function useOnline(): boolean {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const sync = () => setOnline(navigator.onLine !== false);
    sync();
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  return online;
}

/**
 * The pending items for one `kind`, kept in sync with the queue.
 *
 * Reads on mount (localStorage is synchronous, so the pending rows are there on first paint with
 * no network) and re-reads on OUTBOX_CHANGED — which every mutation fires — plus the cross-tab
 * `storage` event, so queueing a note in one tab shows up in another.
 */
export function useOutbox(kind: string): { items: OutboxItem[]; refresh: () => void } {
  const [items, setItems] = useState<OutboxItem[]>([]);

  const refresh = useCallback(() => setItems(outboxFor(kind)), [kind]);

  useEffect(() => {
    refresh();
    window.addEventListener(OUTBOX_CHANGED, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(OUTBOX_CHANGED, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [refresh]);

  return { items, refresh };
}

/**
 * Drain the queue whenever we plausibly have a network: on mount (covers "queued yesterday, opened
 * the app today") and on the `online` event (covers "the plane landed while the tab was open").
 *
 * Mounted once, in the root layout, so a note queued on /admin/future syncs even if the owner never
 * goes back to /admin/future. flushOutbox() guards against overlapping runs itself.
 */
export function useOutboxFlush(): void {
  useEffect(() => {
    void flushOutbox();
    const onOnline = () => void flushOutbox();
    window.addEventListener("online", onOnline);
    return () => window.removeEventListener("online", onOnline);
  }, []);
}
