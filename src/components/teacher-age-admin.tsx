"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  EXCEPTION_ACKS,
  EXCEPTION_REASON_MIN,
  MINOR_SIGNAL_ACK,
  MINOR_SIGNAL_LABELS,
  RULE_OFF_PHRASE,
  type AdultStatus,
  type ExceptionAckKey,
  type MinorSignal,
} from "@/lib/teacher-age";

// Client half of /admin/teacher-age (owner only). Every check here is repeated on the server; the
// point of the steps is that the owner reads each warning, not that the browser enforces them.

const btn =
  "min-h-11 rounded-md px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";
const input =
  "mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900";

export function TeacherAgeRuleSwitch({ on }: { on: boolean }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function set(next: boolean) {
    setBusy(true);
    setErr(null);
    const res = await fetch("/api/admin/teacher-age/rule", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ on: next, confirmText: phrase }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) return setErr(data.error ?? "Couldn't change the rule.");
    setConfirming(false);
    setPhrase("");
    router.refresh();
  }

  if (!on) {
    return (
      <div className="mt-2 space-y-3 text-sm">
        <p role="status" className="font-medium text-red-700 dark:text-red-400">
          OFF. Any teacher or admin can create classes, and anyone can be assigned to teach one,
          without confirming they are an adult.
        </p>
        <button type="button" disabled={busy} onClick={() => set(true)} className={`${btn} text-white`} style={{ backgroundColor: "var(--accent)" }}>
          {busy ? "Saving…" : "Turn the rule back on"}
        </button>
        {err ? <p role="alert" className="text-red-600">{err}</p> : null}
      </div>
    );
  }

  return (
    <div className="mt-2 space-y-3 text-sm">
      <p role="status" className="font-medium text-green-700 dark:text-green-400">
        ON (the default). Teachers must be confirmed adults.
      </p>
      {!confirming ? (
        <button type="button" onClick={() => setConfirming(true)} className={`${btn} border border-red-300 text-red-700 dark:border-red-800 dark:text-red-400`}>
          Turn the rule off…
        </button>
      ) : (
        <div className="space-y-3 rounded-md border border-red-300 bg-red-50 p-3 dark:border-red-800 dark:bg-red-950/40">
          <p className="font-semibold">Turning this off affects every school on the platform.</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Any teacher or admin can create a class without confirming they are 18 or older.</li>
            <li>Anyone, including an account that belongs to a student, can be assigned to teach a class.</li>
            <li>Parent and teacher contact is NOT affected: it still requires a confirmed adult.</li>
          </ul>
          <label className="block">
            Type <strong>{RULE_OFF_PHRASE}</strong> to confirm
            <input value={phrase} onChange={(e) => setPhrase(e.target.value)} className={input} autoComplete="off" />
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={busy || phrase.trim() !== RULE_OFF_PHRASE}
              onClick={() => set(false)}
              className={`${btn} bg-red-700 text-white`}
            >
              {busy ? "Saving…" : "Turn the rule off"}
            </button>
            <button type="button" onClick={() => { setConfirming(false); setPhrase(""); }} className={`${btn} border border-neutral-300 dark:border-neutral-700`}>
              Cancel
            </button>
          </div>
          {err ? <p role="alert" className="text-red-600">{err}</p> : null}
        </div>
      )}
    </div>
  );
}

interface Found {
  user: { id: string; email: string; name: string | null };
  status: AdultStatus;
  signals: MinorSignal[];
  attestedAt: string | null;
  hasException: boolean;
}

// Four steps: 1 find the person, 2 read the warnings about THIS account and tick each one,
// 3 write a reason and type their email back, 4 review everything and grant.
export function TeacherAgeExceptionWizard() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [email, setEmail] = useState("");
  const [found, setFound] = useState<Found | null>(null);
  const [acks, setAcks] = useState<Partial<Record<ExceptionAckKey, boolean>>>({});
  const [minorAck, setMinorAck] = useState(false);
  const [reason, setReason] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);

  function reset() {
    setStep(1);
    setFound(null);
    setAcks({});
    setMinorAck(false);
    setReason("");
    setConfirmEmail("");
    setErr(null);
  }

  async function lookup(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    setDone(null);
    const res = await fetch("/api/admin/teacher-age/lookup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) return setErr(data.error ?? "Lookup failed.");
    setFound(data as Found);
    setStep(2);
  }

  async function grant() {
    if (!found) return;
    setBusy(true);
    setErr(null);
    const res = await fetch("/api/admin/teacher-age/exceptions", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userId: found.user.id, confirmEmail, reason, acks, minorSignalAck: minorAck }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) return setErr(data.error ?? "Couldn't grant the exception.");
    setDone(`Exception granted to ${found.user.email}.`);
    setEmail("");
    reset();
    router.refresh();
  }

  const allAcked = (Object.keys(EXCEPTION_ACKS) as ExceptionAckKey[]).every((k) => acks[k]);
  const needsMinorAck = (found?.signals.length ?? 0) > 0;
  const reasonOk = reason.trim().length >= EXCEPTION_REASON_MIN;
  const emailOk = found ? confirmEmail.trim().toLowerCase() === found.user.email.toLowerCase() : false;

  return (
    <div className="mt-3 space-y-3 text-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
        Step {step} of 4
      </p>

      {step === 1 ? (
        <form onSubmit={lookup} className="space-y-2">
          <label className="block">
            The person&apos;s account email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={input} />
          </label>
          <button type="submit" disabled={busy || !email.trim()} className={`${btn} border border-neutral-300 dark:border-neutral-700`}>
            {busy ? "Looking…" : "Find this person"}
          </button>
        </form>
      ) : null}

      {found && step >= 2 ? (
        <div className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
          <p className="break-words font-medium">
            {found.user.name ? `${found.user.name}, ` : ""}
            {found.user.email}
          </p>
          <p className="mt-1">
            {found.hasException
              ? "Already has an active exception. Revoke it below before granting another."
              : found.status === "adult"
                ? `Confirmed as an adult${found.attestedAt ? ` on ${found.attestedAt.slice(0, 10)}` : ""}. No exception is needed.`
                : found.status === "unattested"
                  ? "Has not confirmed they are 18 or older."
                  : "This account shows signs of belonging to a child:"}
          </p>
          {found.signals.length > 0 ? (
            <ul className="mt-1 list-disc pl-5 text-red-700 dark:text-red-400">
              {found.signals.map((s) => (
                <li key={s}>{MINOR_SIGNAL_LABELS[s]}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      {found && step === 2 ? (
        <div className="space-y-3">
          {found.hasException || found.status === "adult" ? (
            <button type="button" onClick={reset} className={`${btn} border border-neutral-300 dark:border-neutral-700`}>
              Start over
            </button>
          ) : (
            <>
              <fieldset className="space-y-2 rounded-md border border-amber-300 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950/40">
                <legend className="px-1 font-semibold">Read and tick each one</legend>
                {(Object.keys(EXCEPTION_ACKS) as ExceptionAckKey[]).map((k) => (
                  <label key={k} className="flex min-h-11 items-start gap-3">
                    <input
                      type="checkbox"
                      checked={Boolean(acks[k])}
                      onChange={(e) => setAcks((a) => ({ ...a, [k]: e.target.checked }))}
                      className="mt-1 size-5 shrink-0"
                    />
                    <span>{EXCEPTION_ACKS[k]}</span>
                  </label>
                ))}
                {needsMinorAck ? (
                  <label className="flex min-h-11 items-start gap-3 font-medium text-red-700 dark:text-red-400">
                    <input type="checkbox" checked={minorAck} onChange={(e) => setMinorAck(e.target.checked)} className="mt-1 size-5 shrink-0" />
                    <span>{MINOR_SIGNAL_ACK}</span>
                  </label>
                ) : null}
              </fieldset>
              <div className="flex flex-wrap gap-2">
                <button type="button" disabled={!allAcked || (needsMinorAck && !minorAck)} onClick={() => setStep(3)} className={`${btn} border border-neutral-300 dark:border-neutral-700`}>
                  Continue
                </button>
                <button type="button" onClick={reset} className={`${btn} text-neutral-600`}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      ) : null}

      {found && step === 3 ? (
        <div className="space-y-3">
          <label className="block">
            Why does this person need to teach? (at least {EXCEPTION_REASON_MIN} characters, kept on record)
            <textarea value={reason} onChange={(e) => setReason(e.target.value)} rows={3} className={`${input} py-2`} />
          </label>
          <label className="block">
            Type <strong className="break-all">{found.user.email}</strong> to confirm who this is for
            <input value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} className={input} autoComplete="off" />
          </label>
          <div className="flex flex-wrap gap-2">
            <button type="button" disabled={!reasonOk || !emailOk} onClick={() => setStep(4)} className={`${btn} border border-neutral-300 dark:border-neutral-700`}>
              Review
            </button>
            <button type="button" onClick={() => setStep(2)} className={`${btn} text-neutral-600`}>
              Back
            </button>
          </div>
        </div>
      ) : null}

      {found && step === 4 ? (
        <div className="space-y-3 rounded-md border border-red-300 bg-red-50 p-3 dark:border-red-800 dark:bg-red-950/40">
          <p className="font-semibold">Last check before granting</p>
          <p>
            <strong className="break-all">{found.user.email}</strong> will be able to create and teach
            classes on every school while the rule is on, without being confirmed as an adult. Families
            still cannot contact them through the app. You can revoke this at any time.
          </p>
          <p className="break-words">
            <span className="font-medium">Reason:</span> {reason.trim()}
          </p>
          <div className="flex flex-wrap gap-2">
            <button type="button" disabled={busy} onClick={grant} className={`${btn} bg-red-700 text-white`}>
              {busy ? "Granting…" : "Grant the exception"}
            </button>
            <button type="button" onClick={() => setStep(3)} className={`${btn} text-neutral-600`}>
              Back
            </button>
          </div>
        </div>
      ) : null}

      {err ? <p role="alert" className="text-red-600">{err}</p> : null}
      {done ? <p role="status" className="text-green-700 dark:text-green-400">{done}</p> : null}
    </div>
  );
}

export function RevokeExceptionButton({ userId, label }: { userId: string; label: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  async function revoke() {
    if (!confirm(`Revoke the exception for ${label}? They keep any class they already run, but can't create or be assigned to new ones while the rule is on.`)) return;
    setBusy(true);
    await fetch(`/api/admin/teacher-age/exceptions/${encodeURIComponent(userId)}`, { method: "DELETE" }).catch(() => {});
    setBusy(false);
    router.refresh();
  }
  return (
    <button type="button" disabled={busy} onClick={revoke} className={`${btn} shrink-0 border border-red-300 text-red-700 dark:border-red-800 dark:text-red-400`}>
      {busy ? "Revoking…" : "Revoke"}
    </button>
  );
}
