"use client";

import { useEffect } from "react";
import Link from "next/link";
import { reportClientError } from "@/lib/client-error";

// Route-segment error boundary. Neutral (no tenant branding) so an error never leaks another
// brand's identity or internals. Auto-reports to an admin (problem_reports + WitUS Inbox), and
// always gives the visitor a way forward: retry, or route back into the app.
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    reportClientError({ message: error.message || "Unhandled client error", digest: error.digest });
  }, [error]);

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        We hit an unexpected error, and our team has been notified. You can try again, or head back to
        the app.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="min-h-11 rounded-md px-5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Try again
        </button>
        <Link
          href="/"
          className="min-h-11 rounded-md border border-neutral-300 px-5 py-2.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700"
        >
          Back to home
        </Link>
      </div>
      {error.digest ? (
        <p className="text-xs text-neutral-600">Reference: {error.digest}</p>
      ) : null}
    </main>
  );
}
