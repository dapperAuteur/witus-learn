"use client";

import { useState } from "react";

// Owner-only "Reset demo data now" (POST /api/admin/demo-reset). Same reset the nightly cron runs:
// wipes and re-seeds the shared demo account's data on the Acme school, and nothing else.
export function DemoResetButton() {
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function reset() {
    if (!confirm("Reset the demo account now? Everything a visitor did on the Acme demo school is wiped and re-seeded.")) return;
    setBusy(true);
    setMsg(null);
    const res = await fetch("/api/admin/demo-reset", { method: "POST" }).catch(() => null);
    const data = res ? await res.json().catch(() => ({})) : {};
    setBusy(false);
    if (res?.ok) setMsg({ ok: true, text: `Demo data reset at ${new Date(data.at ?? Date.now()).toLocaleTimeString()}.` });
    else setMsg({ ok: false, text: data.error ?? "Reset failed. Try again." });
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={reset}
        disabled={busy}
        className="min-h-11 rounded-md border border-neutral-300 px-4 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700 dark:hover:bg-neutral-900"
      >
        {busy ? "Resetting…" : "Reset demo data now"}
      </button>
      {msg ? (
        <p role={msg.ok ? "status" : "alert"} className={`text-sm ${msg.ok ? "text-green-700 dark:text-green-400" : "text-red-600"}`}>
          {msg.text}
        </p>
      ) : null}
    </div>
  );
}
