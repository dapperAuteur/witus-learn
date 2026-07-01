"use client";

import { useState } from "react";

// A small fixed "Report a problem" button on every page → a popover form that POSTs to
// /api/report (bug / idea / other + message + optional email). Captures the current URL so
// the admin sees where it was filed from. Works signed-in or anonymous.
export function ReportProblem() {
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<"bug" | "idea" | "other">("bug");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (message.trim().length < 3) return;
    setState("sending");
    try {
      const r = await fetch("/api/report", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          kind,
          message,
          email: email || undefined,
          pageUrl: typeof window !== "undefined" ? window.location.pathname + window.location.search : undefined,
        }),
      });
      if (!r.ok) {
        setState("error");
        return;
      }
      setState("sent");
      setMessage("");
      setTimeout(() => {
        setOpen(false);
        setState("idle");
      }, 1500);
    } catch {
      setState("error");
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 print:hidden">
      {open ? (
        <form
          onSubmit={submit}
          className="w-80 max-w-[90vw] rounded-xl border border-neutral-200 bg-white p-4 shadow-xl dark:border-neutral-700 dark:bg-neutral-900"
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="font-medium">Report a problem</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="text-neutral-400 hover:text-neutral-600">
              ✕
            </button>
          </div>
          <div role="group" aria-label="Report type" className="mb-2 flex gap-1 text-xs">
            {(["bug", "idea", "other"] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKind(k)}
                aria-pressed={kind === k}
                className={`rounded-full px-2 py-1 capitalize ${kind === k ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black" : "bg-neutral-100 dark:bg-neutral-800"}`}
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
            disabled={state === "sending" || message.trim().length < 3}
            className="mt-2 min-h-9 w-full rounded-md px-3 text-sm font-medium text-white disabled:opacity-60"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {state === "sending" ? "Sending…" : state === "sent" ? "✓ Thank you!" : "Send report"}
          </button>
          {state === "error" ? <p className="mt-1 text-xs text-red-600">Couldn’t send — please try again.</p> : null}
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full border border-neutral-300 bg-white px-3 py-2 text-sm shadow-lg hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        >
          🐞 Report a problem
        </button>
      )}
    </div>
  );
}
