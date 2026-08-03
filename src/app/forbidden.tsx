import type { CSSProperties } from "react";
import Link from "next/link";
import { getSession } from "@/lib/session";
import { resolveTenant } from "@/lib/tenant";
import { loginPathFor, PATHNAME_HEADER } from "@/lib/next-path";
import { headers } from "next/headers";

// The UI for forbidden() — Next renders its own unstyled fallback when this file is absent, which
// is what a denied visitor used to see (and what produced the bare NEXT_HTTP_ERROR_FALLBACK;403
// page). Two audiences land here, and they need opposite things:
//
//   - Signed OUT (an API-shaped guard reached from a page, e.g. an /admin route): the answer is
//     "sign in", so lead with that and carry them back afterwards.
//   - Signed IN but lacking the role: signing in again fixes nothing, so say so plainly and offer
//     a way back into the app instead of a login loop.
//
// Isolation: never name the resource, the tenant that owns it, or the role required. "You do not
// have access" is the entire message — anything more confirms that a thing exists to be denied.
export default async function Forbidden() {
  const [session, tenant, h] = await Promise.all([getSession(), resolveTenant(), headers()]);
  const accent = tenant?.theme.colors?.accent ?? tenant?.theme.themeColor ?? "#4338ca";
  const accentFg = tenant?.theme.colors?.accentFg ?? "#ffffff";
  const style = { "--accent": accent, "--accent-fg": accentFg } as CSSProperties;
  const signedIn = Boolean(session);

  return (
    <main
      style={style}
      className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-4 px-6 text-center"
    >
      <h1 className="text-5xl font-bold">403</h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        {signedIn
          ? "You do not have access to this page. If you think that is wrong, ask whoever manages your school to check your role."
          : "This page is for signed-in members. Sign in and we will bring you right back here."}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {signedIn ? null : (
          <Link
            href={loginPathFor(h.get(PATHNAME_HEADER))}
            className="min-h-11 rounded-md px-5 py-2.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
            style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg)" }}
          >
            Sign in
          </Link>
        )}
        <Link
          href="/"
          className="min-h-11 rounded-md border border-neutral-300 px-5 py-2.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 pointer-coarse:min-h-12"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
