import type { ReactNode } from "react";

// The header and footer an error page uses when the school's own cannot be drawn: an unknown host
// (no school to brand), an error in the school layout itself (root error.tsx), the root layout
// failing (global-error.tsx), or the age gate not yet passed. Neutral on purpose: no school name, no
// logo, no nav built from a school's data, so it can never show one brand on another's domain, and it
// needs nothing (no database, no session, no hooks) that might be what just failed.
//
// It keeps a Sign in control in the header at every width: an error page is not a reason to lose the
// way in (gemini/witus/docs/shared-ui-ux-dx.md, "never remove the header Sign in control").
// Plain anchors: the root boundaries render outside a working router.

const linkClass =
  "inline-flex min-h-11 items-center px-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2";

export function NeutralHeader() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <nav aria-label="Main" className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className={`${linkClass} text-lg font-bold`} style={{ color: "var(--accent, inherit)" }}>
          Home
        </a>
        <ul className="flex flex-wrap items-center gap-1 text-sm">
          <li>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/courses" className={linkClass}>
              Browse Catalog
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/login" className={linkClass}>
              Sign in
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function NeutralFooter() {
  return (
    <footer className="mt-12 border-t border-neutral-200 dark:border-neutral-800">
      <ul className="mx-auto flex max-w-5xl flex-wrap gap-x-4 gap-y-1 px-4 py-6 text-sm text-neutral-600 dark:text-neutral-400">
        <li>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/help" className={linkClass}>
            Help
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/terms" className={linkClass}>
            Terms
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/privacy" className={linkClass}>
            Privacy
          </a>
        </li>
      </ul>
    </footer>
  );
}

/** Header, the page, footer: the same column the school layout lays out. */
export function NeutralChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <NeutralHeader />
      <div id="main-content" className="flex-1">
        {children}
      </div>
      <NeutralFooter />
    </div>
  );
}
