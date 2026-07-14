"use client";

import { useEffect, useState } from "react";
import { OUTBOX_SYNCED, discard, enqueue, outboxSupported, type OutboxSyncedDetail } from "@/lib/offline-outbox";
import { PROBLEM_REPORT, problemReportDraft, type ProblemKind } from "@/lib/outbox-kinds";
import { useOnline, useOutbox } from "@/lib/use-outbox";

// A small fixed "Report a problem" button on every page → a popover form that POSTs to
// /api/report (bug / feedback / idea / other + message + optional email). Captures the current URL
// so the admin sees where it was filed from. Works signed-in or anonymous.
//
// ── Reporting a problem with no network ───────────────────────────────────────────────────────
// The moment you most want to file a bug is the moment the app is misbehaving — and "the network
// died" is one of the ways it misbehaves. A report form that only works when everything already
// works is a report form that misses its own worst bugs. So when the POST can't leave the device,
// the report goes into the offline outbox (src/lib/offline-outbox.ts) and is sent automatically the
// moment there's a connection, from whatever page is open at the time.
//
// Online behaviour is UNCHANGED: a healthy submission goes straight to /api/report and is never
// routed through the queue. The queue is a fallback for a failure, not a new default path — pushing
// healthy writes through it would turn a synchronous "sent ✓" into a "probably sent, eventually".
//
// Signed-out works exactly the same, because /api/report itself allows anonymous reports (userId is
// nullable). There is no 401 on this path to recover from: a report queued signed-out flushes
// signed-out. (If it somehow does 401, the outbox keeps it and retries after sign-in — it is never
// dropped.)
//
// The pending count sits on the collapsed button on purpose. Someone who files a bug, sees nothing
// happen, and gets no acknowledgement will file it again — and a duplicate bug report is a small
// tax on both of us. "1 waiting to send" is the honest, and cheaper, answer.
export function ReportProblem({ defaultEmail }: { defaultEmail?: string }) {
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<ProblemKind>("bug");
  const [message, setMessage] = useState("");
  // Prefilled with the signed-in user's email (still editable, so they confirm or change it).
  const [email, setEmail] = useState(defaultEmail ?? "");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "queued" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const online = useOnline();
  const { items: pending } = useOutbox(PROBLEM_REPORT);

  // A queued report that reached the server while the popover was closed still deserves an answer.
  useEffect(() => {
    const onSynced = (event: Event) => {
      const { item } = (event as CustomEvent<OutboxSyncedDetail>).detail;
      if (item.kind !== PROBLEM_REPORT) return;
      setState("sent");
      setTimeout(() => setState((s) => (s === "sent" ? "idle" : s)), 3000);
    };
    window.addEventListener(OUTBOX_SYNCED, onSynced);
    return () => window.removeEventListener(OUTBOX_SYNCED, onSynced);
  }, []);

  /** Persist the report for later. False when it couldn't be stored — the caller then KEEPS the
   *  text in the textarea, because a cleared box over a save that didn't happen is the loss. */
  function queue(text: string): boolean {
    return (
      enqueue(
        problemReportDraft({
          kind,
          message: text,
          email: email || undefined,
          // Where the problem was SEEN. Captured now, not at flush time — by then the browser is
          // somewhere else entirely and the report would point at the wrong page.
          pageUrl:
            typeof window !== "undefined"
              ? window.location.pathname + window.location.search
              : undefined,
        }),
      ) !== null
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = message.trim();
    if (text.length < 3) return;
    setError(null);

    // Known-offline: don't pretend to try. Queue it and say so.
    if (!online) {
      if (!outboxSupported()) {
        setState("error");
        setError("You're offline and this browser can't hold the report. Copy your text somewhere safe.");
      } else if (queue(text)) {
        setMessage("");
        setState("queued");
      } else {
        setState("error");
        setError("Couldn't hold that report (storage is full). Your text is still here — copy it somewhere safe.");
      }
      return;
    }

    setState("sending");
    try {
      const r = await fetch("/api/report", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(problemReportDraft({
          kind,
          message: text,
          email: email || undefined,
          pageUrl:
            typeof window !== "undefined"
              ? window.location.pathname + window.location.search
              : undefined,
        }).body),
      });
      if (!r.ok) {
        // The server answered and said no. That is not an offline problem, and queueing it would
        // just fail again on every flush — show it instead.
        setState("error");
        setError("Couldn't send — please try again.");
        return;
      }
      setState("sent");
      setMessage("");
      // Keep the form open so a learner can send more than one report from the same page.
      setTimeout(() => setState((s) => (s === "sent" ? "idle" : s)), 1500);
    } catch {
      // `navigator.onLine` said yes and the request still died — a flaky connection, a captive
      // portal, the network going away mid-sentence. Queue it rather than lose it.
      if (outboxSupported() && queue(text)) {
        setMessage("");
        setState("queued");
      } else {
        setState("error");
        setError("Network error, and the report couldn't be held. Your text is still here — copy it somewhere safe.");
      }
    }
  }

  const busy = state === "sending";

  return (
    <div className="fixed bottom-4 right-4 z-40 print:hidden">
      {open ? (
        <form
          onSubmit={submit}
          className="w-80 max-w-[90vw] rounded-xl border border-neutral-200 bg-white p-4 shadow-xl dark:border-neutral-700 dark:bg-neutral-900"
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="font-medium">Report a problem</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="-m-2 flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded text-neutral-400 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2">
              ✕
            </button>
          </div>

          {/* Reports waiting for a connection. Framed as NOT sent — a pending report must never be
              mistaken for a filed one, or it gets filed twice. */}
          {pending.length > 0 ? (
            <ul className="mb-3 space-y-2">
              {pending.map((item) => (
                <li
                  key={item.id}
                  className="rounded-lg border border-dashed border-amber-300 bg-amber-50/60 p-2 text-xs dark:border-amber-900/60 dark:bg-amber-950/20"
                >
                  <p className="line-clamp-3 whitespace-pre-wrap wrap-break-word">{item.label}</p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3">
                    <span
                      role="status"
                      className={item.failed ? "font-medium text-red-700 dark:text-red-400" : "text-amber-700 dark:text-amber-500"}
                    >
                      {item.failed
                        ? (item.lastError ?? "This report wasn't sent.")
                        : "Waiting to send — goes out when you're back online"}
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

          <div role="group" aria-label="Report type" className="mb-2 flex flex-wrap gap-1 text-xs">
            {(["bug", "feedback", "idea", "other"] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKind(k)}
                aria-pressed={kind === k}
                className={`inline-flex min-h-8 items-center rounded-full px-3 py-1 capitalize pointer-coarse:min-h-11 ${kind === k ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black" : "bg-neutral-100 dark:bg-neutral-800"}`}
              >
                {k}
              </button>
            ))}
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            minLength={3}
            maxLength={4000}
            rows={4}
            aria-label="Describe the problem or idea"
            placeholder="What went wrong, or what would help?"
            className="w-full rounded-md border border-neutral-300 p-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Your email (optional)"
            placeholder="Email (optional, if you'd like a reply)"
            className="mt-2 w-full rounded-md border border-neutral-300 p-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          />
          <button
            type="submit"
            disabled={busy || message.trim().length < 3}
            className="mt-2 min-h-11 w-full rounded-md px-3 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 pointer-coarse:min-h-12"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {busy
              ? "Sending…"
              : state === "sent"
                ? "✓ Thank you!"
                : online
                  ? "Send report"
                  : "Save report"}
          </button>
          {state === "queued" ? (
            <p role="status" className="mt-1 text-xs text-amber-700 dark:text-amber-500">
              Saved on this device — it&rsquo;ll send itself when you&rsquo;re back online. You can close this.
            </p>
          ) : null}
          {state === "error" && error ? (
            <p role="status" className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>
          ) : null}
          {!online ? (
            <p className="mt-1 text-xs text-neutral-500">
              You&rsquo;re offline. Reports are held here and sent automatically when you reconnect.
            </p>
          ) : null}
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 py-2 text-sm shadow-lg hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800 pointer-coarse:min-h-12"
        >
          🐞 Report a problem
          {/* Somebody who can't see their queued report will file it again. */}
          {pending.length > 0 ? (
            <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-950 dark:text-amber-400">
              {pending.length} waiting
            </span>
          ) : null}
        </button>
      )}
    </div>
  );
}
