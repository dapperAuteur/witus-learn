"use client";

// Route-segment error boundary. Neutral (no tenant branding) so an error never
// leaks another brand's identity, and never exposes internals to the visitor.
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        We hit an unexpected error. Please try again in a moment.
      </p>
      <button
        type="button"
        onClick={reset}
        className="min-h-11 rounded-md border border-neutral-300 px-5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700"
      >
        Try again
      </button>
    </main>
  );
}
