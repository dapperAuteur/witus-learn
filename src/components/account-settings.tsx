"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ACCOUNT_LIMITS, EMAIL_CONFIRM_MESSAGES, USERNAME_HELP, type EmailConfirmOutcome } from "@/lib/account-settings";

// Client half of /account (BAM, 2026-11-10: "users should be able to manage their accounts"). The
// server re-checks everything (PATCH /api/profile, POST/DELETE /api/account/email, POST
// /api/account/email/confirm, POST/DELETE /api/account/deletion-request). On a failed save every field
// keeps what was typed; the message says what to do next, never a raw error.

const field = "mt-1 min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900";
const primary = "min-h-11 rounded-md px-4 font-medium text-white disabled:opacity-60";
const secondary = "min-h-11 rounded-md border border-neutral-300 px-4 disabled:opacity-60 dark:border-neutral-700";

type Msg = { ok: boolean; text: string } | null;

function Status({ msg }: { msg: Msg }) {
  if (!msg) return null;
  return (
    <p role={msg.ok ? "status" : "alert"} className={`text-sm ${msg.ok ? "text-green-700 dark:text-green-400" : "text-red-600"}`}>
      {msg.text}
    </p>
  );
}

async function send(url: string, method: string, body?: unknown): Promise<{ ok: boolean; status: number; data: Record<string, unknown> }> {
  try {
    const res = await fetch(url, {
      method,
      headers: body === undefined ? undefined : { "content-type": "application/json" },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
    return { ok: res.ok, status: res.status, data };
  } catch {
    return { ok: false, status: 0, data: {} };
  }
}

function errorText(r: { status: number; data: Record<string, unknown> }, fallback: string): string {
  if (r.status === 0) return "You seem to be offline. Your changes are still here; try again when you're connected.";
  if (r.status === 401) return "Your session ended. Sign in again, then save.";
  if (r.status >= 500) return "Something went wrong on our side. Your changes are still here; try again in a minute.";
  return typeof r.data.error === "string" ? r.data.error : fallback;
}

export function AccountProfileForm({
  initial,
  locked,
}: {
  initial: { displayName: string; username: string };
  /** Why the username is fixed (a child's profile, the demo account), or null. */
  locked: string | null;
}) {
  const router = useRouter();
  const [displayName, setDisplayName] = useState(initial.displayName);
  const [username, setUsername] = useState(initial.username);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<Msg>(null);
  const usernameChanged = username.trim().toLowerCase() !== initial.username;

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const body: { displayName: string; username?: string } = { displayName };
    if (!locked && username.trim() !== "" && usernameChanged) body.username = username;
    const r = await send("/api/profile", "PATCH", body);
    setBusy(false);
    if (r.ok) {
      setMsg({ ok: true, text: "Saved." });
      router.refresh();
    } else {
      setMsg({ ok: false, text: errorText(r, "Couldn't save. Check the fields and try again.") });
    }
  }

  return (
    <form onSubmit={save} className="space-y-3 text-sm">
      <label className="block font-medium">
        Display name
        <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} maxLength={ACCOUNT_LIMITS.displayName} autoComplete="name" className={field} />
      </label>
      <label className="block font-medium">
        Username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          maxLength={ACCOUNT_LIMITS.usernameMax}
          disabled={Boolean(locked)}
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          aria-describedby="username-help"
          className={`${field} disabled:opacity-60`}
        />
        <span id="username-help" className="mt-1 block font-normal text-neutral-600 dark:text-neutral-400">
          {locked ?? `${USERNAME_HELP} If you teach, your course links and your instructor page use it, so changing it changes those links and old ones stop working.`}
        </span>
      </label>
      <button type="submit" disabled={busy} className={primary} style={{ backgroundColor: "var(--accent)" }}>
        {busy ? "Saving…" : "Save name and username"}
      </button>
      <Status msg={msg} />
    </form>
  );
}

export function AccountEmailForm({
  currentEmail,
  pending,
  locked,
  confirmOutcome,
}: {
  currentEmail: string;
  pending: { newEmail: string; expiresAt: string } | null;
  locked: string | null;
  /** The ?email= outcome when the person lands here from the confirm page. */
  confirmOutcome: EmailConfirmOutcome | null;
}) {
  const router = useRouter();
  const [newEmail, setNewEmail] = useState("");
  const [busy, setBusy] = useState<"send" | "cancel" | null>(null);
  const [msg, setMsg] = useState<Msg>(confirmOutcome ? EMAIL_CONFIRM_MESSAGES[confirmOutcome] : null);

  async function start(e: React.FormEvent) {
    e.preventDefault();
    setBusy("send");
    setMsg(null);
    const r = await send("/api/account/email", "POST", { newEmail });
    setBusy(null);
    if (r.ok) {
      setMsg({ ok: true, text: `Check ${newEmail.trim()} for a link. Your address changes when you open it and press Confirm.` });
      setNewEmail("");
      router.refresh();
    } else {
      setMsg({ ok: false, text: errorText(r, "Couldn't start the change. Check the address and try again.") });
    }
  }

  async function cancel() {
    setBusy("cancel");
    setMsg(null);
    const r = await send("/api/account/email", "DELETE");
    setBusy(null);
    if (r.ok) {
      setMsg({ ok: true, text: "Cancelled. The link in that email no longer works." });
      router.refresh();
    } else {
      setMsg({ ok: false, text: errorText(r, "Couldn't cancel. Try again.") });
    }
  }

  return (
    <div className="space-y-3 text-sm">
      <p>
        Signed in as <span className="break-all font-medium">{currentEmail}</span>. Sign-in links go to this address.
      </p>
      {pending ? (
        <div className="rounded-md border border-amber-300 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950">
          <p>
            Waiting for you to confirm <span className="break-all font-medium">{pending.newEmail}</span>. The link works until{" "}
            {new Date(pending.expiresAt).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}.
          </p>
          <button type="button" onClick={cancel} disabled={busy !== null} className={`${secondary} mt-2`}>
            {busy === "cancel" ? "Cancelling…" : "Cancel this change"}
          </button>
        </div>
      ) : null}
      {locked ? (
        <p className="text-neutral-600 dark:text-neutral-400">{locked}</p>
      ) : (
        <form onSubmit={start} className="space-y-3">
          <label className="block font-medium">
            New email address
            <input
              type="email"
              required
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              maxLength={ACCOUNT_LIMITS.email}
              autoComplete="email"
              className={field}
            />
          </label>
          <button type="submit" disabled={busy !== null} className={primary} style={{ backgroundColor: "var(--accent)" }}>
            {busy === "send" ? "Sending…" : pending ? "Send a new link" : "Send a confirmation link"}
          </button>
          <p className="text-neutral-600 dark:text-neutral-400">
            We email a link to the new address. Nothing changes until you open it; then this address gets a notice that it changed.
          </p>
        </form>
      )}
      <Status msg={msg} />
    </div>
  );
}

export function DeletionRequestCard({ openSince }: { openSince: string | null }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<Msg>(null);

  async function ask() {
    setBusy(true);
    setMsg(null);
    const r = await send("/api/account/deletion-request", "POST");
    setBusy(false);
    if (r.ok) {
      setConfirming(false);
      setMsg({ ok: true, text: "Asked. The site's owner handles it by hand; you can withdraw the request here until then." });
      router.refresh();
    } else {
      setMsg({ ok: false, text: errorText(r, "Couldn't send the request. Try again.") });
    }
  }

  async function withdraw() {
    setBusy(true);
    setMsg(null);
    const r = await send("/api/account/deletion-request", "DELETE");
    setBusy(false);
    if (r.ok) {
      setMsg({ ok: true, text: "Withdrawn. Your account stays." });
      router.refresh();
    } else {
      setMsg({ ok: false, text: errorText(r, "Couldn't withdraw. Try again.") });
    }
  }

  return (
    <div className="space-y-3 text-sm">
      {openSince ? (
        <>
          <p>
            You asked for this account to be deleted on{" "}
            {new Date(openSince).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}. The site&apos;s owner handles
            it by hand.
          </p>
          <button type="button" onClick={withdraw} disabled={busy} className={secondary}>
            {busy ? "Withdrawing…" : "Withdraw the request"}
          </button>
        </>
      ) : (
        <>
          <p>
            Deleting an account removes your progress, notes and certificates on every school that uses this sign-in. It is done by the
            site&apos;s owner, not instantly: ask here and they will take care of it.
          </p>
          {confirming ? (
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={ask} disabled={busy} className="min-h-11 rounded-md border border-red-300 px-4 text-red-700 disabled:opacity-60 dark:border-red-800 dark:text-red-400">
                {busy ? "Sending…" : "Yes, ask to delete my account"}
              </button>
              <button type="button" onClick={() => setConfirming(false)} disabled={busy} className={secondary}>
                Keep my account
              </button>
            </div>
          ) : (
            <button type="button" onClick={() => setConfirming(true)} className={secondary}>
              Ask to delete my account
            </button>
          )}
        </>
      )}
      <Status msg={msg} />
    </div>
  );
}

export function ConfirmEmailChange({ token }: { token: string }) {
  const [busy, setBusy] = useState(false);
  const [outcome, setOutcome] = useState<EmailConfirmOutcome | null>(null);
  const [problem, setProblem] = useState<string | null>(null);

  async function confirm() {
    setBusy(true);
    setProblem(null);
    const r = await send("/api/account/email/confirm", "POST", { token });
    setBusy(false);
    const o = r.data.outcome;
    if (o === "changed" || o === "expired" || o === "invalid" || o === "taken") setOutcome(o);
    else setProblem(errorText(r, "Couldn't confirm just now. Try the link again in a minute."));
  }

  if (outcome) {
    const m = EMAIL_CONFIRM_MESSAGES[outcome];
    return (
      <div className="space-y-3 text-sm">
        <p role={m.ok ? "status" : "alert"} className={m.ok ? "text-green-700 dark:text-green-400" : "text-red-600"}>
          {m.text}
        </p>
        <Link href={`/account?email=${outcome}`} className="inline-flex min-h-11 items-center underline" style={{ color: "var(--accent)" }}>
          Go to your account settings
        </Link>
      </div>
    );
  }
  return (
    <div className="space-y-3 text-sm">
      <button type="button" onClick={confirm} disabled={busy} className={primary} style={{ backgroundColor: "var(--accent)" }}>
        {busy ? "Confirming…" : "Confirm my new email address"}
      </button>
      {problem ? (
        <p role="alert" className="text-red-600">
          {problem}
        </p>
      ) : null}
    </div>
  );
}
