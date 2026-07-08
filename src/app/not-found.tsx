import Link from "next/link";
import { NotFoundReport } from "@/components/not-found-report";

// Neutral 404 — an unknown host or cross-tenant resource resolves here. It must never reveal another
// brand's name or content (isolation rule). Always gives a way back into the app, and reports broken
// internal links to an admin so they can be tracked and fixed.
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
      <NotFoundReport />
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        We couldn&apos;t find that page. It may have moved, or the link may be out of date.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="min-h-11 rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: "var(--accent, #4338ca)" }}
        >
          Back to home
        </Link>
        <Link
          href="/courses"
          className="min-h-11 rounded-md border border-neutral-300 px-5 py-2.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700"
        >
          Browse courses
        </Link>
      </div>
    </main>
  );
}
