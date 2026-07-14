"use client";

import { useEffect, useState } from "react";
import { OUTBOX_CHANGED, flushOutbox, outboxFor, type OutboxItem } from "./offline-outbox";

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
    let cancelled = false;
    const sync = () => {
      if (!cancelled) setOnline(navigator.onLine !== false);
    };
    // Async, not synchronous: the server rendered "online", so correcting it a microtask later
    // avoids a cascading render against the hydrated tree (repo convention + the lint rule).
    void Promise.resolve().then(sync);
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      cancelled = true;
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  return online;
}

/**
 * The pending items for one `kind`, kept in sync with the queue.
 *
 * Reads straight after mount and re-reads on OUTBOX_CHANGED — which every mutation fires — plus
 * the cross-tab `storage` event, so a note queued in one tab shows up in another. It needs no
 * network, which is the entire point: the queue lives in localStorage, so the pending rows render
 * on a page the service worker just served from cache.
 *
 * Starts EMPTY and fills asynchronously, even though localStorage reads are synchronous. The server
 * rendered zero pending rows; setting state synchronously in the effect would cascade a render
 * against that (and the repo's lint rule rightly refuses it). One microtask later is invisible.
 */
export function useOutbox(kind: string): { items: OutboxItem[] } {
  const [items, setItems] = useState<OutboxItem[]>([]);

  useEffect(() => {
    let cancelled = false;
    const refresh = () => {
      if (!cancelled) setItems(outboxFor(kind));
    };
    void Promise.resolve().then(refresh);
    window.addEventListener(OUTBOX_CHANGED, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      cancelled = true;
      window.removeEventListener(OUTBOX_CHANGED, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [kind]);

  return { items };
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
