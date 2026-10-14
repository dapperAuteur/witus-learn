"use client";

import { useState } from "react";

export interface AuditorRow {
  id: string;
  email: string;
  invitedAt: string | Date;
  acceptedAt: string | Date | null;
  /** How this reviewer is credited on a lesson they clear (reviewer sign-off). Set here, by the inviter. */
  reviewerName?: string | null;
  reviewerCredential?: string | null;
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

  function credited(updated: AuditorRow) {
    setRows((prev) => prev.map((r) => (r.id === updated.id ? { ...r, ...updated } : r)));
  }

  return (
    <section className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 className="font-semibold">Invite someone to review this course</h2>
      <p className="mt-1 text-sm text-neutral-600">
        A reviewer can read every lesson of this course while it is still &ldquo;Coming soon&rdquo;.
        They cannot enroll, earn a certificate, or record any progress, and their quiz answers are
        never counted, so this course&apos;s statistics keep measuring learners only.
      </p>
      <p className="mt-1 text-sm text-neutral-600">
        To let a reviewer sign off lessons marked &ldquo;Before release&rdquo;, add the name and
        credential they will be credited with (for example &ldquo;Large-animal veterinarian,
        Indiana&rdquo;). You set it, not the reviewer, so the credit is not only self-reported.
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
            <li key={r.id} className="py-2 text-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
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
              </div>
              <ReviewerCredit courseId={courseId} row={r} onSaved={credited} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

/** The inviter-set credit line for one reviewer: name + credential, shown on every lesson they clear. */
function ReviewerCredit({
  courseId,
  row,
  onSaved,
}: {
  courseId: string;
  row: AuditorRow;
  onSaved: (r: AuditorRow) => void;
}) {
  const [name, setName] = useState(row.reviewerName ?? "");
  const [credential, setCredential] = useState(row.reviewerCredential ?? "");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const isSet = Boolean(row.reviewerName?.trim() && row.reviewerCredential?.trim());

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/courses/${courseId}/auditors/${row.id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ reviewerName: name, reviewerCredential: credential }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMessage(data.error ?? "That credit could not be saved.");
        return;
      }
      onSaved(data.auditor);
      setMessage("Saved.");
    } catch {
      setMessage("Network error, please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <details className="mt-1">
      <summary className="inline-flex min-h-11 cursor-pointer items-center text-neutral-600">
        {isSet ? `Credited as ${row.reviewerName}, ${row.reviewerCredential}` : "Not credited yet: add a name and credential"}
      </summary>
      <form onSubmit={save} className="mt-2 grid gap-2 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
        <div>
          <label htmlFor={`credit-name-${row.id}`} className="block text-xs font-medium">
            Name as credited
          </label>
          <input
            id={`credit-name-${row.id}`}
            value={name}
            maxLength={120}
            onChange={(e) => setName(e.target.value)}
            className="min-h-11 w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
          />
        </div>
        <div>
          <label htmlFor={`credit-credential-${row.id}`} className="block text-xs font-medium">
            Credential
          </label>
          <input
            id={`credit-credential-${row.id}`}
            value={credential}
            maxLength={200}
            onChange={(e) => setCredential(e.target.value)}
            className="min-h-11 w-full rounded-md border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900"
          />
        </div>
        <button
          type="submit"
          disabled={busy}
          className="min-h-11 rounded-md border border-neutral-300 px-3 py-1 dark:border-neutral-700 disabled:opacity-60"
        >
          {busy ? "Saving…" : "Save credit"}
        </button>
      </form>
      <p role="status" className="mt-1 text-xs text-neutral-600">
        {message ?? ""}
      </p>
    </details>
  );
}
