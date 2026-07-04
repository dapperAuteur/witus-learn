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
    const message = `[auto] ${input.message}${input.digest ? ` (digest ${input.digest})` : ""}`.slice(0, 4000);
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
