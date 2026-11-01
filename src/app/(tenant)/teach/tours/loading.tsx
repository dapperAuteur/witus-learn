// /teach/tours while its slots load (plans/96 v2). The list is per viewer and re-checked on every
// read, so it is never served from a cache and a slow database shows this instead of a blank page.
export default function TeachToursLoading() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <div role="status" aria-live="polite">
        <span className="sr-only">Loading your tour slots…</span>
        <div aria-hidden="true" className="space-y-4">
          <div className="h-8 w-64 max-w-full animate-pulse rounded bg-neutral-200 motion-reduce:animate-none dark:bg-neutral-800" />
          <div className="h-4 w-full animate-pulse rounded bg-neutral-200 motion-reduce:animate-none dark:bg-neutral-800" />
          <div className="h-24 w-full animate-pulse rounded-xl bg-neutral-200 motion-reduce:animate-none dark:bg-neutral-800" />
          <div className="h-24 w-full animate-pulse rounded-xl bg-neutral-200 motion-reduce:animate-none dark:bg-neutral-800" />
        </div>
      </div>
    </main>
  );
}
