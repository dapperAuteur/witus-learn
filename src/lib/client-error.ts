import { CHUNK_RELOAD_GUARD_KEY, isChunkLoadError } from "@/components/chunk-error-reloader";

/** How long after an attempted reload a chunk error still counts as "the reload did not fix it". */
const POST_RELOAD_WINDOW_MS = 60_000;

/**
 * Should this chunk-load error be reported at all?
 *
 * The 08-2026 triage found the [auto] chunk reports were ~90% noise: ChunkErrorReloader recovers
 * the tab with one reload (stale-deploy chunk hashes), but the error boundary fired the report
 * BEFORE the reload, so every successful self-recovery still logged a "bug". The stream buried
 * the one question that matters (task 226: did a refresh fail?). So: a chunk error reports ONLY
 * when the guard shows a reload was already attempted moments ago — meaning the reload did NOT
 * fix it, which is the genuine signal. First-sight chunk errors are the reloader's job, not a
 * report. Exported for tests.
 */
export function shouldReportChunkError(message: string, now = Date.now()): boolean {
  if (!isChunkLoadError(message)) return true; // not a chunk error: always report
  try {
    const last = Number(sessionStorage.getItem(CHUNK_RELOAD_GUARD_KEY) ?? 0);
    return last > 0 && now - last < POST_RELOAD_WINDOW_MS;
  } catch {
    // No sessionStorage (private mode): we cannot tell first sight from post-reload, and the
    // reloader also could not set its guard, so a reload loop is impossible — report it.
    return true;
  }
}

// Fire-and-forget client → admin error reporting. Posts to /api/report (the same pipeline as
// "Report a problem"): stored tenant-scoped in problem_reports AND mirrored to the WitUS Inbox
// for triage. Used by the route error boundaries and the client API helper so 500-class failures
// are always communicated to an admin to investigate. NEVER throws (reporting must not cascade).
export async function reportClientError(input: {
  message: string;
  digest?: string;
  pageUrl?: string;
}): Promise<void> {
  try {
    if (!shouldReportChunkError(input.message)) return;
    const marker = isChunkLoadError(input.message) ? "[auto][post-reload] " : "[auto] ";
    const message = `${marker}${input.message}${input.digest ? ` (digest ${input.digest})` : ""}`.slice(0, 4000);
    const pageUrl = (input.pageUrl ?? (typeof location !== "undefined" ? location.href : undefined))?.slice(0, 500);
    await fetch("/api/report", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ kind: "bug", message, pageUrl }),
      keepalive: true,
    });
  } catch {
    // Reporting is best-effort; a failure here must never surface to the user.
  }
}
