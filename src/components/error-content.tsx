import type { ReactNode } from "react";

// The body of every error page (404, 403, 500): one h1, a plain message, and a way forward (home, the
// catalog, the catalog's search). No hooks and no server-only imports, so the client error boundaries
// can render it as well as the server not-found and forbidden pages. Plain anchors rather than
// next/link: the root error boundaries render outside a working router, and an error page should
// load its next page in full anyway.
//
// Isolation: never names the resource that failed or the school that owns it.
export function ErrorContent({
  code,
  title,
  message,
  children,
}: {
  /** Shown above the title ("404"), or omitted. */
  code?: string;
  title: string;
  message: string;
  /** Extra actions, placed before the standard links (e.g. "Try again", "Sign in"). */
  children?: ReactNode;
}) {
  const link =
    "inline-flex min-h-11 items-center justify-center rounded-md border border-neutral-300 px-5 py-2.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700";
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6">
      {code ? (
        <p className="text-5xl font-bold" aria-hidden="true">
          {code}
        </p>
      ) : null}
      <h1 className="text-2xl font-bold sm:text-3xl">
        {code ? <span className="sr-only">{`Error ${code}: `}</span> : null}
        {title}
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400">{message}</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {children}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className={link}>
          Back to home
        </a>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/courses" className={link}>
          Browse courses
        </a>
      </div>
      <form action="/courses" method="get" role="search" className="flex w-full max-w-sm flex-wrap gap-2">
        <label htmlFor="error-search" className="sr-only">
          Search courses
        </label>
        <input
          id="error-search"
          name="q"
          type="search"
          placeholder="Search courses"
          className="min-h-11 min-w-0 flex-1 rounded-md border border-neutral-300 bg-transparent px-3 dark:border-neutral-700"
        />
        <button type="submit" className={link}>
          Search
        </button>
      </form>
    </main>
  );
}
