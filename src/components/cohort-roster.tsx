"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Member {
  userId: string;
  displayName: string;
  present: boolean;
}

// Click-to-copy chip for the generated invite URL.
function Copyable({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      title="Click to copy"
      className="group inline-flex items-center gap-1 rounded px-1 hover:bg-neutral-200 dark:hover:bg-neutral-800"
    >
      <span className="break-all font-mono text-xs">{value}</span>
      <span aria-hidden className="text-[10px] text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
        {copied ? "copied ✓" : "⧉"}
      </span>
    </button>
  );
}

// Per-member "Invite a parent/guardian" action: a collapsed toggle that reveals a small
// email form. POSTs to /api/cohorts/[id]/guardian-invite, then shows the invite URL to
// copy/share (same pattern as the student invite above) — the parent lands on
// /family/accept/[token] and gets a read-only view of ONLY this one child.
function GuardianInvite({ cohortId, studentUserId }: { cohortId: string; studentUserId: string }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [invite, setInvite] = useState<{ url: string; emailed: boolean } | null>(null);

  async function invite_(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    setInvite(null);
    const res = await fetch(`/api/cohorts/${cohortId}/guardian-invite`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ studentUserId, email }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (res.ok) {
      setEmail("");
      setInvite({ url: data.inviteUrl, emailed: Boolean(data.emailed) });
    } else {
      setErr(data.error ?? "Couldn't send that invite. Try again.");
    }
  }

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="text-xs text-neutral-500 hover:underline">
        Invite a parent/guardian
      </button>
    );
  }

  return (
    <form onSubmit={invite_} className="mt-2 space-y-2 rounded-md bg-neutral-50 p-3 text-sm dark:bg-neutral-900/60">
      <label className="block text-xs">
        Parent&apos;s email
        <div className="mt-1 flex items-end gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="parent@example.com"
            className="min-h-9 flex-1 rounded-md border border-neutral-300 px-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          />
          <button
            type="submit"
            disabled={busy || email.trim().length === 0}
            className="min-h-9 shrink-0 rounded-md px-3 text-xs font-medium text-white disabled:opacity-60"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {busy ? "Sending…" : "Send"}
          </button>
        </div>
      </label>
      {err ? <p role="alert" className="text-xs text-red-600">{err}</p> : null}
      {invite ? (
        <div>
          {invite.emailed ? (
            <p className="text-xs text-green-700 dark:text-green-400">✓ Invite emailed. Link to share:</p>
          ) : (
            <p className="text-xs text-amber-700 dark:text-amber-400">
              Email delivery isn&apos;t set up yet — copy and share this link directly:
            </p>
          )}
          <div className="mt-1">
            <Copyable value={invite.url} />
          </div>
        </div>
      ) : null}
    </form>
  );
}

// A cohort's roster: invite-by-email form (shows the resulting invite URL to copy/share),
// the member list ("● here" if present in /live right now), and a remove control.
export function CohortRoster({ cohortId, members }: { cohortId: string; members: Member[] }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [invite, setInvite] = useState<{ url: string; emailed: boolean } | null>(null);

  async function invitePerson(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    setInvite(null);
    const res = await fetch(`/api/cohorts/${cohortId}/invite`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (res.ok) {
      setEmail("");
      setInvite({ url: data.inviteUrl, emailed: Boolean(data.emailed) });
    } else {
      setErr(data.error ?? "Couldn't send that invite. Try again.");
    }
  }

  async function remove(userId: string) {
    if (!confirm("Remove this student from the class?")) return;
    await fetch(`/api/cohorts/${cohortId}/members/${userId}`, { method: "DELETE" }).catch(() => {});
    router.refresh();
  }

  return (
    <div className="space-y-8">
      <form onSubmit={invitePerson} className="space-y-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 className="font-semibold">Invite a student</h2>
        <div className="flex items-end gap-3">
          <label className="flex-1 text-sm">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@example.com"
              className="mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
            />
          </label>
          <button
            type="submit"
            disabled={busy || email.trim().length === 0}
            className="min-h-11 shrink-0 rounded-md px-4 font-medium text-white disabled:opacity-60"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {busy ? "Sending…" : "Send invite"}
          </button>
        </div>
        {err ? <p role="alert" className="text-sm text-red-600">{err}</p> : null}
        {invite ? (
          <div className="rounded-md bg-neutral-50 p-3 text-sm dark:bg-neutral-900/60">
            {invite.emailed ? (
              <p className="text-green-700 dark:text-green-400">✓ Invite emailed. You can also share the link:</p>
            ) : (
              <p className="text-amber-700 dark:text-amber-400">
                Email delivery isn&apos;t set up yet — copy and share this link directly:
              </p>
            )}
            <div className="mt-1">
              <Copyable value={invite.url} />
            </div>
          </div>
        ) : null}
      </form>

      <div>
        <h2 className="font-semibold">Students</h2>
        <ul className="mt-2 divide-y divide-neutral-200 dark:divide-neutral-800">
          {members.map((m) => (
            <li key={m.userId} className="py-2 text-sm">
              <div className="flex items-center justify-between gap-3">
                <span>
                  {m.displayName}
                  {m.present ? (
                    <span className="ml-2 text-xs text-green-700 dark:text-green-400">● here</span>
                  ) : null}
                </span>
                <button type="button" onClick={() => remove(m.userId)} className="text-xs text-red-600 hover:underline">
                  Remove
                </button>
              </div>
              <div className="mt-1">
                <GuardianInvite cohortId={cohortId} studentUserId={m.userId} />
              </div>
            </li>
          ))}
          {members.length === 0 ? <li className="py-2 text-sm text-neutral-500">No students yet — invite one above.</li> : null}
        </ul>
      </div>
    </div>
  );
}
