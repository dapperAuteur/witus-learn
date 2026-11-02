// A course's Sources page while its lessons are read (the bibliography is built on every request
// from the published lessons, so a slow database shows this instead of a blank page).
export default function CourseSourcesLoading() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div role="status" aria-live="polite">
        <span className="sr-only">Loading the course bibliography…</span>
        <div aria-hidden="true" className="space-y-4">
          <div className="h-8 w-72 max-w-full animate-pulse rounded bg-neutral-200 motion-reduce:animate-none dark:bg-neutral-800" />
          <div className="h-4 w-full animate-pulse rounded bg-neutral-200 motion-reduce:animate-none dark:bg-neutral-800" />
          <div className="h-16 w-full animate-pulse rounded-lg bg-neutral-200 motion-reduce:animate-none dark:bg-neutral-800" />
          <div className="h-16 w-full animate-pulse rounded-lg bg-neutral-200 motion-reduce:animate-none dark:bg-neutral-800" />
          <div className="h-16 w-full animate-pulse rounded-lg bg-neutral-200 motion-reduce:animate-none dark:bg-neutral-800" />
        </div>
      </div>
    </main>
  );
}
