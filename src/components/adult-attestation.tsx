"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// "I am 18 or older", recorded once per account (POST /api/account/adult). Shown wherever an adult
// is required and the signed-in person has not said so yet: creating a class, and parent/teacher
// contact. The server refuses it for an account the platform knows is a child's, so this card is a
// convenience, never the gate.
export function AdultAttestation({ purpose }: { purpose: string }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function confirm(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    const res = await fetch("/api/account/adult", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ confirm: true }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (res.ok) router.refresh();
    else setErr(data.error ?? "Couldn't save that. Try again.");
  }

  return (
    <form onSubmit={confirm} className="space-y-3 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm dark:border-amber-800 dark:bg-amber-950/40">
      <p className="font-semibold">Confirm you are an adult</p>
      <p className="text-neutral-700 dark:text-neutral-300">{purpose}</p>
      <label className="flex min-h-11 items-start gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="mt-1 size-5 shrink-0"
        />
        <span>I am 18 or older.</span>
      </label>
      <button
        type="submit"
        disabled={!checked || busy}
        className="min-h-11 rounded-md px-4 font-medium text-white disabled:opacity-60"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {busy ? "Saving…" : "Confirm"}
      </button>
      {err ? <p role="alert" className="text-red-600">{err}</p> : null}
    </form>
  );
}
