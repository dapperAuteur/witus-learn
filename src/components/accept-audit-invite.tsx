"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Status = "accepting" | "done" | "error";

interface Accepted {
  courseTitle: string;
  href: string;
  signedIn: boolean;
}

/**
 * Redeems an audit invite token (plans/52 §5). Runs once on mount so following the link is the
 * whole action. Accepting works signed out (it marks the invite accepted for that email address),
 * but the course only OPENS once the person signs in with the address that was invited, so the
 * signed-out case says exactly that instead of sending them to a page that would still read
 * "Coming soon".
 */
export function AcceptAuditInvite({ token }: { token: string }) {
  const [status, setStatus] = useState<Status>("accepting");
  const [accepted, setAccepted] = useState<Accepted | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    async function accept() {
      try {
        const res = await fetch("/api/courses/auditors/accept", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data = await res.json().catch(() => ({}));
        if (!alive) return;
        if (res.ok) {
          setStatus("done");
          setAccepted({ courseTitle: data.courseTitle, href: data.href, signedIn: Boolean(data.signedIn) });
        } else {
          setStatus("error");
          setMessage(data.error ?? "This invite link isn't valid.");
        }
      } catch {
        if (alive) {
          setStatus("error");
          setMessage("Network error, please try again.");
        }
      }
    }
    void accept();
    return () => {
      alive = false;
    };
  }, [token]);

  if (status === "accepting") return <p className="text-neutral-500">Opening the course…</p>;

  if (status === "error" || !accepted) {
    return (
      <div>
        <p role="alert" className="text-amber-700 dark:text-amber-400">
          {message ?? "This invite link isn't valid."}
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          Ask whoever invited you for a fresh link, or{" "}
          <Link href="/" className="underline">
            head back home
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-green-700 dark:text-green-400">
        ✓ You can now read &ldquo;{accepted.courseTitle}&rdquo;.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Nothing you do is recorded: no progress, no quiz scores, no certificate. Send your notes to
        whoever invited you.
      </p>
      {accepted.signedIn ? (
        <Link
          href={accepted.href}
          className="mt-4 inline-flex min-h-11 items-center rounded-md px-5 py-2.5 font-medium text-white"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Open the course
        </Link>
      ) : (
        <>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            Sign in with the email address this invite was sent to, then open the course.
          </p>
          <Link
            href="/login"
            className="mt-3 inline-flex min-h-11 items-center rounded-md px-5 py-2.5 font-medium text-white"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Sign in
          </Link>
        </>
      )}
    </div>
  );
}
