"use client";

import { useState } from "react";
import {
  capacityLabel,
  grantsAuditOnDecision,
  type OwnerInterestView,
} from "@/lib/course-interest";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

/**
 * Self-nominations on one course, shown on its own /teach page to the owner, the course's
 * instructor, or a tenant admin. It is the ONLY surface in the app that displays a request's phone
 * number or credentials, and it is login-gated behind the same check that guards handing out an
 * audit invite by hand.
 *
 * Approving a beta tester or a subject matter expert mints the existing read-only audit grant and
 * hands back the invite link. The link is shown ONCE, at mint time, for the same reason the
 * auditors panel shows it once: the list endpoint deliberately never returns a live token. Approving
 * an interested learner records the decision and grants nothing, and the panel says so rather than
 * pretending a button did more than it did.
 */
export function CourseInterestPanel({
  courseId,
  initial,
  isUnvetted,
}: {
  courseId: string;
  initial: OwnerInterestView[];
  isUnvetted: boolean;
}) {
  const [rows, setRows] = useState<OwnerInterestView[]>(initial);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastLink, setLastLink] = useState<{ email: string; url: string; emailed: boolean } | null>(
    null,
  );

  const pending = rows.filter((r) => r.status === "pending");

  async function decide(row: OwnerInterestView, decision: "approve" | "decline") {
    setBusyId(row.id);
    setError(null);
    setLastLink(null);
    try {
      const res = await fetch(`/api/courses/${courseId}/interest/${row.id}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ decision }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.request) {
        setError(data.error ?? "That decision could not be saved.");
        return;
      }
      const updated = data.request as OwnerInterestView;
      setRows((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
      if (data.inviteUrl) {
        setLastLink({ email: updated.email, url: data.inviteUrl, emailed: data.emailed === true });
      }
    } catch {
      setError("Network error, please try again.");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <section
      id="course-interest"
      className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
    >
      <h2 className="font-semibold">
        People who put their hand up
        {pending.length > 0 ? (
          <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-900 dark:text-amber-100">
            {pending.length} waiting on you
          </span>
        ) : null}
      </h2>
      <p className="mt-1 text-sm text-neutral-600">
        Visitors who asked to take this course, to test it before it opens, or to vet it as a
        subject matter expert. Nobody here has any access yet. Approving a tester or an expert sends
        them a read-only review invite: they can read every lesson while this course is still
        &ldquo;Coming soon&rdquo;, and they cannot enroll, earn a certificate, or record any
        progress, so this course&apos;s statistics keep measuring learners only.
      </p>
      <p className="mt-2 text-sm text-neutral-600">
        Phone numbers and backgrounds below were given to you in confidence. They are shown on this
        page and nowhere else: not on the course page, not in any export, not in any email.
      </p>
      {/*
        Deciding again does not take a grant back, and pretending otherwise would be worse than
        saying nothing: revoking lives on the reviewer list, which is the one place that knows which
        grants exist. Said here because "I changed my mind" is the obvious next question after
        approving somebody.
      */}
      <p className="mt-2 text-sm text-neutral-600">
        Changed your mind about someone you approved? Remove them from{" "}
        <strong>Invite someone to review this course</strong>, just below. That is what actually
        takes their access away, and it applies on their next click.
      </p>
      {!isUnvetted ? (
        <p className="mt-2 text-sm text-neutral-600">
          This course is vetted, so its lessons are open anyway and the public form is no longer
          shown. Approving someone now changes nothing about what they can read.
        </p>
      ) : null}

      {error ? (
        <p role="alert" className="mt-3 text-sm text-amber-700 dark:text-amber-400">
          {error}
        </p>
      ) : null}

      {lastLink ? (
        <div className="mt-3 rounded-md bg-neutral-100 p-3 text-sm dark:bg-neutral-900">
          <p className="font-medium">
            {lastLink.emailed
              ? `Review invite emailed to ${lastLink.email}. The link, in case you want to send it yourself:`
              : `Email is not configured, so send this link to ${lastLink.email} yourself:`}
          </p>
          <p className="mt-1 break-all font-mono text-xs">{lastLink.url}</p>
          <p className="mt-1 text-neutral-600">
            Shown once. They still have to open it: an invite that is never accepted grants nothing.
          </p>
        </div>
      ) : null}

      {rows.length === 0 ? (
        <p className="mt-3 text-sm text-neutral-600">Nobody has put their hand up yet.</p>
      ) : (
        <ul className="mt-3 divide-y divide-neutral-100 dark:divide-neutral-800/60">
          {rows.map((r) => (
            <li key={r.id} className="py-3 text-sm">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-medium break-words">
                    {r.name}{" "}
                    <span className="ml-1 rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-normal text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                      {capacityLabel(r.capacity)}
                    </span>
                  </p>
                  <p className="mt-0.5 break-all text-neutral-600 dark:text-neutral-400">
                    <a href={`mailto:${r.email}`} className="hover:underline">
                      {r.email}
                    </a>
                    {r.phone ? (
                      <>
                        {" · "}
                        <a href={`tel:${r.phone}`} className="hover:underline">
                          {r.phone}
                        </a>
                      </>
                    ) : null}
                  </p>
                  {r.phoneRaw && r.phoneRaw !== r.phone ? (
                    <p className="mt-0.5 text-xs text-neutral-600">
                      As typed: <span className="font-mono">{r.phoneRaw}</span>
                    </p>
                  ) : null}
                  <p className="mt-0.5 text-xs text-neutral-600">
                    asked {fmt(r.createdAt)}
                    {r.status !== "pending" && r.decidedAt
                      ? `, ${r.status} ${fmt(r.decidedAt)}`
                      : ""}
                  </p>
                </div>
                {r.status === "pending" ? (
                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      disabled={busyId === r.id}
                      onClick={() => decide(r, "approve")}
                      className="min-h-11 rounded-md px-3 py-1 font-medium text-white disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      {grantsAuditOnDecision({ capacity: r.capacity, status: "approved" })
                        ? "Approve and invite"
                        : "Mark reviewed"}
                    </button>
                    <button
                      type="button"
                      disabled={busyId === r.id}
                      onClick={() => decide(r, "decline")}
                      className="min-h-11 rounded-md border border-neutral-300 px-3 py-1 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12 dark:border-neutral-700"
                    >
                      Decline
                    </button>
                  </div>
                ) : (
                  <span className="shrink-0 text-xs text-neutral-600">{r.status}</span>
                )}
              </div>
              {r.credentials ? (
                <p className="mt-2 whitespace-pre-wrap rounded-md bg-neutral-50 p-2 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                  {r.credentials}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
