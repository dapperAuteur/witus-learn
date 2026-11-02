"use client";

import { useEffect } from "react";
import Link from "next/link";
import { reportClientError } from "@/lib/client-error";

// /teach/tours error boundary (plans/96 v2): keeps the app shell, reports to an admin, offers a retry,
// and points back to Teach rather than leaving a dead end.
export default function TeachToursError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    reportClientError({ message: `Teach, Tours: ${error.message || "Unhandled error"}`, digest: error.digest });
  }, [error]);

  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">Tours from the field</h1>
      <p role="alert" className="mt-2 text-neutral-600 dark:text-neutral-400">
        The tour slots could not be shown, and our team has been notified.
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="min-h-11 rounded-md px-4 text-sm font-medium text-white"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Try again
        </button>
        <Link href="/teach" className="inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-4 text-sm font-medium dark:border-neutral-700">
          Back to your courses
        </Link>
      </div>
    </main>
  );
}
