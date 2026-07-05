"use client";

import { useEffect } from "react";
import Link from "next/link";
import { reportClientError } from "@/lib/client-error";

// Field Log segment error boundary — keeps the app shell, auto-reports to an admin, and routes
// the user back into the Field Log (not a dead end).
export default function FieldLogError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    reportClientError({ message: `Field Log: ${error.message || "Unhandled error"}`, digest: error.digest });
  }, [error]);

  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">This project hit a snag</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Something went wrong loading your Field Log, and our team has been notified.
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <button type="button" onClick={reset} className="min-h-10 rounded-md px-4 text-sm font-medium text-white" style={{ backgroundColor: "var(--accent)" }}>
          Try again
        </button>
        <Link href="/field-log" className="min-h-10 rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium dark:border-neutral-700">
          Back to My Field Log
        </Link>
      </div>
    </main>
  );
}
