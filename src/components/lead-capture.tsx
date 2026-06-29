"use client";

import { useState } from "react";

// Email capture for the lead funnel (coming-soon "notify me", home signup, etc.).
export function LeadCapture({ source, label }: { source?: string; label?: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    const r = await fetch("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, source }),
    });
    setState(r.ok ? "done" : "error");
    if (r.ok) setEmail("");
  }

  if (state === "done") {
    return <p className="mt-6 text-sm text-green-700 dark:text-green-400">Thanks — we&apos;ll be in touch.</p>;
  }

  return (
    <form onSubmit={submit} className="mt-6 flex w-full max-w-sm flex-col gap-2 sm:flex-row">
      <label htmlFor="lead-email" className="sr-only">
        Email
      </label>
      <input
        id="lead-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="you@email.com"
        className="min-h-11 flex-1 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
      />
      <button
        type="submit"
        disabled={state === "sending"}
        className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {state === "sending" ? "…" : (label ?? "Notify me")}
      </button>
      {state === "error" ? <span className="self-center text-sm text-red-600">Try again.</span> : null}
    </form>
  );
}
