"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// The platform owner's "Course chat for everyone else" switch on /admin/source-chat. Off (the default) keeps the
// course chat to the owner on every course; on hands each course to its stage. The server checks owner again.
const btn =
  "min-h-11 rounded-md px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";

export function CourseChatOpenSwitch({ on }: { on: boolean }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function set(next: boolean) {
    setBusy(true);
    setErr(null);
    const res = await fetch("/api/admin/source-chat/open-to-others", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ on: next }),
    });
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    setBusy(false);
    if (!res.ok) return setErr(data.error ?? "Couldn't change the switch.");
    setConfirming(false);
    router.refresh();
  }

  if (on) {
    return (
      <div className="mt-2 space-y-3 text-sm">
        <p role="status" className="font-medium text-green-700 dark:text-green-400">
          ON. Each course&apos;s &ldquo;Who can use it&rdquo; setting below decides who else gets the chat.
        </p>
        <button
          type="button"
          disabled={busy}
          onClick={() => set(false)}
          className={`${btn} border border-neutral-300 dark:border-neutral-700`}
        >
          {busy ? "Saving…" : "Turn off (only me again)"}
        </button>
        {err ? <p role="alert" className="text-red-600">{err}</p> : null}
      </div>
    );
  }

  return (
    <div className="mt-2 space-y-3 text-sm">
      <p role="status" className="font-medium">
        OFF (the default). Only you see the course chat, on every course and every school, whatever a course&apos;s
        setting below says.
      </p>
      {!confirming ? (
        <button
          type="button"
          onClick={() => setConfirming(true)}
          className={`${btn} text-white`}
          style={{ backgroundColor: "var(--accent)" }}
        >
          Turn on for everyone else…
        </button>
      ) : (
        <div className="space-y-3 rounded-md border border-amber-300 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950/40">
          <p className="font-semibold">This affects every school on the platform.</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              A course with nothing saved stays <strong>only you</strong>. Courses set to &ldquo;invited&rdquo; or
              &ldquo;paid&rdquo; open to their editors and enrolled learners at once.
            </li>
            <li>Each school&apos;s AI tutor switch in Brand settings still turns it off for that school&apos;s learners.</li>
            <li>Learners&apos; questions are never saved; every answer costs model calls.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={busy}
              onClick={() => set(true)}
              className={`${btn} text-white`}
              style={{ backgroundColor: "var(--accent)" }}
            >
              {busy ? "Saving…" : "Yes, turn it on"}
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={() => setConfirming(false)}
              className={`${btn} border border-neutral-300 dark:border-neutral-700`}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {err ? <p role="alert" className="text-red-600">{err}</p> : null}
    </div>
  );
}
