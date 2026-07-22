"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Status = "accepting" | "done" | "error";

// Redeems a guardian (parent) invite token for the signed-in viewer. Runs once on mount,
// mirroring AcceptCohortInvite. On success we show which child was linked so the parent
// gets an immediate, concrete confirmation of what they now have access to.
export function AcceptGuardianInvite({ token }: { token: string }) {
  const [status, setStatus] = useState<Status>("accepting");
  const [message, setMessage] = useState<string | null>(null);
  const [childName, setChildName] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    async function accept() {
      try {
        const res = await fetch("/api/family/accept", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data = await res.json().catch(() => ({}));
        if (!alive) return;
        if (res.ok) {
          setChildName(data.studentDisplayName ?? "your child");
          setStatus("done");
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

  if (status === "accepting") {
    return <p className="text-neutral-500">Linking your account…</p>;
  }

  if (status === "error") {
    return (
      <div>
        <p role="alert" className="text-amber-700 dark:text-amber-400">
          {message}
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          Ask the teacher for a fresh invite, or{" "}
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
      <p className="text-green-700 dark:text-green-400">✓ You&apos;re now linked to {childName}.</p>
      <Link
        href="/family"
        className="mt-4 inline-block min-h-11 rounded-md px-5 py-2.5 font-medium text-white"
        style={{ backgroundColor: "var(--accent)" }}
      >
        Go to Family
      </Link>
    </div>
  );
}
