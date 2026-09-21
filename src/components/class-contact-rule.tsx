"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CONTACT_MODE_LABELS, CONTACT_MODES, type ContactMode } from "@/lib/contact";

// A teacher's rule for how the parents of THIS class may reach them (PUT /api/contact/cohort-overrides).
// Precedence: a rule set on one parent's card wins over this; this wins over the teacher's default.
export function ClassContactRule({
  cohortId,
  current,
  myDefault,
}: {
  cohortId: string;
  current: ContactMode | null;
  myDefault: ContactMode;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function change(next: string) {
    setBusy(true);
    setErr(null);
    const res = await fetch("/api/contact/cohort-overrides", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ cohortId, mode: next }),
    });
    setBusy(false);
    if (!res.ok) setErr("Couldn't save that. Try again.");
    router.refresh();
  }

  return (
    <section aria-labelledby="class-contact-h" className="rounded-lg border border-neutral-200 p-4 text-sm dark:border-neutral-800">
      <h2 id="class-contact-h" className="font-semibold">
        Parent contact for this class
      </h2>
      <label className="mt-2 block">
        Parents of students in this class may
        <select
          value={current ?? "default"}
          disabled={busy}
          onChange={(e) => change(e.target.value)}
          className="mt-1 block min-h-11 w-full rounded-md border border-neutral-300 bg-white px-2 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
        >
          <option value="default">Use my default ({CONTACT_MODE_LABELS[myDefault].toLowerCase()})</option>
          {CONTACT_MODES.map((m) => (
            <option key={m} value={m}>
              {CONTACT_MODE_LABELS[m]}
            </option>
          ))}
        </select>
      </label>
      <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
        A rule you set on one parent&apos;s card, below, still wins over this one. Changing it never
        notifies anyone.
      </p>
      {err ? <p role="alert" className="mt-1 text-red-600">{err}</p> : null}
    </section>
  );
}
