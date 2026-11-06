"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import { reportClientError } from "@/lib/client-error";
import { NeutralChrome } from "@/components/neutral-chrome";
import { ErrorContent } from "@/components/error-content";
import "./globals.css";

// Root error boundary: catches errors thrown in the root layout itself. It replaces that layout, so it
// renders its own <html>/<body> and loads the stylesheet itself, and wears the neutral header and
// footer (with Sign in) rather than rendering bare: the school's own need the database and the layout,
// which may be what failed. Auto-reports to an admin and to Sentry.
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Existing home-grown admin report (survives with or without Sentry)...
    reportClientError({ message: error.message || "Unhandled root error", digest: error.digest });
    // ...plus Sentry for a real stack trace (no-op when no DSN is configured).
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen text-neutral-900 antialiased dark:text-neutral-100">
        <NeutralChrome>
          <ErrorContent
            title="Service temporarily unavailable"
            message="We could not load this page, and our team has been notified. Please try again shortly."
          >
            <button
              type="button"
              onClick={reset}
              className="inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700"
            >
              Try again
            </button>
          </ErrorContent>
          {error.digest ? <p className="pb-8 text-center text-xs text-neutral-600">Reference: {error.digest}</p> : null}
        </NeutralChrome>
      </body>
    </html>
  );
}
