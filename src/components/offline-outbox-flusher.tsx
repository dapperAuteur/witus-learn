"use client";

import { useOutboxFlush } from "@/lib/use-outbox";

/**
 * Drains the offline outbox (src/lib/offline-outbox.ts) whenever the network comes back.
 *
 * Mounted once in the ROOT layout, deliberately — a note queued on /admin/future must sync as soon
 * as there's a connection, on whatever page the owner happens to open next. Renders nothing, does
 * nothing when the queue is empty, and never blocks the page.
 */
export function OfflineOutboxFlusher() {
  useOutboxFlush();
  return null;
}
