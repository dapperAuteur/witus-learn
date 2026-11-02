"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { reportClientError } from "@/lib/client-error";

// A course's Sources page error boundary: keeps the app shell, reports to an admin, offers a retry,
// and points back to the course rather than leaving a dead end.
export default function CourseSourcesError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const params = useParams<{ username: string; courseSlug: string }>();
  const courseHref = params?.username && params?.courseSlug ? `/${params.username}/${params.courseSlug}` : "/";
  useEffect(() => {
    reportClientError({ message: `Course sources: ${error.message || "Unhandled error"}`, digest: error.digest });
  }, [error]);

  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">Sources and bibliography</h1>
      <p role="alert" className="mt-2 text-neutral-600 dark:text-neutral-400">
        The bibliography could not be shown, and our team has been notified.
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="min-h-11 rounded-md px-4 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Try again
        </button>
        <Link
          href={courseHref}
          className="inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700"
        >
          Back to the course
        </Link>
      </div>
    </main>
  );
}
