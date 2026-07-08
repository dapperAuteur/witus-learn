"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Creates a cohort (private class) from the cohorts list page.
export function CreateCohortForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function create(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    const res = await fetch("/api/cohorts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name }),
    });
    setBusy(false);
    if (res.ok) {
      setName("");
      router.refresh();
    } else {
      const d = await res.json().catch(() => ({}));
      setErr(d.error ?? "Couldn't create the class. Try again.");
    }
  }

  return (
    <form onSubmit={create} className="space-y-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <div className="flex items-end gap-3">
        <label className="flex-1 text-sm">
          Class name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Tuesday homeschool group"
            className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
          />
        </label>
        <button
          type="submit"
          disabled={busy || name.trim().length === 0}
          className="min-h-11 shrink-0 rounded-md px-4 font-medium text-white disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {busy ? "Creating…" : "Create class"}
        </button>
      </div>
      {err ? <p role="alert" className="text-sm text-red-600">{err}</p> : null}
    </form>
  );
}
