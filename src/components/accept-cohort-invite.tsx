"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Status = "accepting" | "done" | "error";

// Redeems a cohort invite token for the signed-in viewer. Runs once on mount so the
// student doesn't have to click anything extra after following the invite link.
export function AcceptCohortInvite({ token }: { token: string }) {
  const [status, setStatus] = useState<Status>("accepting");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    async function accept() {
      try {
        const res = await fetch("/api/cohorts/accept", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data = await res.json().catch(() => ({}));
        if (!alive) return;
        if (res.ok) {
          setStatus("done");
        } else {
          setStatus("error");
          setMessage(data.error ?? "This invite link isn't valid.");
        }
      } catch {
        if (alive) {
          setStatus("error");
          setMessage("Network error — please try again.");
        }
      }
    }
    void accept();
    return () => {
      alive = false;
    };
  }, [token]);

  if (status === "accepting") {
    return <p className="text-neutral-500">Joining your class…</p>;
  }

  if (status === "error") {
    return (
      <div>
        <p role="alert" className="text-amber-700 dark:text-amber-400">
          {message}
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          Ask your instructor for a fresh invite, or{" "}
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
      <p className="text-green-700 dark:text-green-400">✓ You&apos;re in! Welcome to the class.</p>
      <Link
        href="/live"
        className="mt-4 inline-block min-h-11 rounded-md px-5 py-2.5 font-medium text-white"
        style={{ backgroundColor: "var(--accent)" }}
      >
        Go to /live
      </Link>
    </div>
  );
}
