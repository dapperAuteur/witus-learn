// /audit/review while a reviewer's courses and lessons load (plans/97 v2). Per viewer, never cached,
// so a slow database shows this instead of a blank page.
export default function AuditReviewLoading() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div role="status" aria-live="polite">
        <span className="sr-only">Loading the lessons you are reviewing…</span>
        <div aria-hidden="true" className="space-y-4">
          <div className="h-8 w-56 max-w-full animate-pulse rounded bg-neutral-200 motion-reduce:animate-none dark:bg-neutral-800" />
          <div className="h-4 w-full animate-pulse rounded bg-neutral-200 motion-reduce:animate-none dark:bg-neutral-800" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-200 motion-reduce:animate-none dark:bg-neutral-800" />
          <div className="h-28 w-full animate-pulse rounded-lg bg-neutral-200 motion-reduce:animate-none dark:bg-neutral-800" />
        </div>
      </div>
    </main>
  );
}
