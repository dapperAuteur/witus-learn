"use client";

import { useState } from "react";

export interface AuditorRow {
  id: string;
  email: string;
  invitedAt: string | Date;
  acceptedAt: string | Date | null;
}

const fmt = (d: string | Date) =>
  new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

/**
 * Invite-to-audit management (plans/52 §5), shown on a course's own /teach page to the owner, the
 * course's instructor, or a tenant admin.
 *
 * The invite URL is shown after inviting because Mailgun may not be configured, and because "copy
 * me the link" is how most of these actually get sent. It is shown ONCE, at mint time: the list
 * endpoint deliberately never returns a live token.
 */
export function CourseAuditorsPanel({
  courseId,
  initial,
  isUnvetted,
}: {
  courseId: string;
  initial: AuditorRow[];
  isUnvetted: boolean;
}) {
  const [rows, setRows] = useState<AuditorRow[]>(initial);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastLink, setLastLink] = useState<string | null>(null);
  const [notEmailed, setNotEmailed] = useState(false);

  async function invite(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setLastLink(null);
    try {
      const res = await fetch(`/api/courses/${courseId}/auditors`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "That invite could not be sent.");
        return;
      }
      setRows((prev) => [data.auditor, ...prev.filter((r) => r.email !== data.auditor.email)]);
      setLastLink(data.inviteUrl ?? null);
      setNotEmailed(data.emailed === false);
      setEmail("");
    } catch {
      setError("Network error, please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function revoke(id: string) {
    setError(null);
    const res = await fetch(`/api/courses/${courseId}/auditors/${id}`, { method: "DELETE" });
    if (!res.ok) {
      setError("That reviewer could not be removed.");
      return;
    }
    setRows((prev) => prev.filter((r) => r.id !== id));
  }

  return (
    <section className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 className="font-semibold">Invite someone to review this course</h2>
      <p className="mt-1 text-sm text-neutral-600">
        A reviewer can read every lesson of this course while it is still &ldquo;Coming soon&rdquo;.
        They cannot enroll, earn a certificate, or record any progress, and their quiz answers are
        never counted, so this course&apos;s statistics keep measuring learners only.
      </p>
      {!isUnvetted ? (
        <p className="mt-2 text-sm text-neutral-600">
          This course is vetted, so its lessons are open anyway. A review invite only changes what
          someone sees while a course is still unvetted.
        </p>
      ) : null}

      <form onSubmit={invite} className="mt-3 flex flex-col gap-2 sm:flex-row">
        <label htmlFor="auditor-email" className="sr-only">
          Reviewer email address
        </label>
        <input
          id="auditor-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="reviewer@example.com"
          className="min-h-11 flex-1 rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
        />
        <button
          type="submit"
          disabled={busy}
          className="min-h-11 rounded-md px-4 py-2 font-medium text-white disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {busy ? "Inviting…" : "Send invite"}
        </button>
      </form>

      {error ? (
        <p role="alert" className="mt-2 text-sm text-amber-700 dark:text-amber-400">
          {error}
        </p>
      ) : null}

      {lastLink ? (
        <div className="mt-3 rounded-md bg-neutral-100 p-3 text-sm dark:bg-neutral-900">
          <p className="font-medium">
            {notEmailed ? "Email is not configured, so send this link yourself:" : "Invite link (also emailed):"}
          </p>
          <p className="mt-1 break-all font-mono text-xs">{lastLink}</p>
          <p className="mt-1 text-neutral-600">
            Shown once. If it is lost, invite the same address again for a fresh link.
          </p>
        </div>
      ) : null}

      {rows.length === 0 ? (
        <p className="mt-3 text-sm text-neutral-600">Nobody is reviewing this course yet.</p>
      ) : (
        <ul className="mt-3 divide-y divide-neutral-100 dark:divide-neutral-800/60">
          {rows.map((r) => (
            <li key={r.id} className="flex flex-wrap items-center justify-between gap-2 py-2 text-sm">
              <span className="min-w-0 break-all">
                {r.email}
                <span className="ml-2 text-neutral-600">
                  {r.acceptedAt ? `accepted ${fmt(r.acceptedAt)}` : `invited ${fmt(r.invitedAt)}, not accepted yet`}
                </span>
              </span>
              <button
                type="button"
                onClick={() => revoke(r.id)}
                className="min-h-11 rounded-md border border-neutral-300 px-3 py-1 dark:border-neutral-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
