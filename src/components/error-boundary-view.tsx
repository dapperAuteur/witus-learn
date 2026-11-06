"use client";

import { useEffect } from "react";
import { reportClientError } from "@/lib/client-error";
import { ErrorContent } from "@/components/error-content";

// The body of the route error boundaries (app/error.tsx, app/(tenant)/error.tsx): auto-reports to an
// admin (problem_reports + WitUS Inbox) and offers a retry plus the standard ways back. Neutral copy,
// so an error never leaks a brand's identity or internals; the reference is the opaque digest only.
export function ErrorBoundaryView({
  error,
  reset,
  fallbackMessage,
}: {
  error: Error & { digest?: string };
  reset: () => void;
  fallbackMessage: string;
}) {
  useEffect(() => {
    reportClientError({ message: error.message || fallbackMessage, digest: error.digest });
  }, [error, fallbackMessage]);

  return (
    <>
      <ErrorContent
        title="Something went wrong"
        message="We hit an unexpected error, and our team has been notified. You can try again, or head back to the app."
      >
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-11 items-center rounded-md px-5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: "var(--accent, #4338ca)", color: "var(--accent-fg, #ffffff)" }}
        >
          Try again
        </button>
      </ErrorContent>
      {error.digest ? <p className="pb-8 text-center text-xs text-neutral-600">Reference: {error.digest}</p> : null}
    </>
  );
}
