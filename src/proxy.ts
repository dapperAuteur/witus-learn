import { NextResponse, type NextRequest } from "next/server";
import { isBlockedSurfacePath } from "@/lib/tenant-util";
import { PATHNAME_HEADER } from "@/lib/next-path";

// Next 16's renamed middleware. Edge-light (no DB): static route-surface gating
// only — CentOS-style dashboard/module/pricing routes redirect to the tenant
// home. Tenant resolution + flag-driven gating happen server-side where the
// resolved tenant is available.
export function proxy(req: NextRequest) {
  // next.config.ts sets skipTrailingSlashRedirect (PostHog's /ingest endpoints need their trailing
  // slashes), which switches Next's own "/page/ → /page" redirect off app-wide. Put it back here
  // for page routes so a page keeps exactly one URL. /ingest and /api never reach this function
  // (see the matcher), so the analytics proxy is untouched.
  const { pathname } = req.nextUrl;
  if (pathname.length > 1 && pathname.endsWith("/")) {
    // A plain URL, not nextUrl.clone(): NextURL re-adds the trailing slash it parsed when formatting.
    const url = new URL(req.url);
    url.pathname = pathname.replace(/\/+$/, "") || "/";
    return NextResponse.redirect(url, 308);
  }

  if (isBlockedSurfacePath(req.nextUrl.pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  // Stamp the path onto the REQUEST headers so server components can read it. Next gives a page
  // no way to know its own URL, and the signed-out guard needs it to build /login?next=<here> so
  // the magic link returns the learner to the page they actually wanted. Request-header only:
  // it is never sent to the browser, and the search string is deliberately left off so query
  // params (which can carry tokens) never ride along into a redirect URL.
  const headers = new Headers(req.headers);
  headers.set(PATHNAME_HEADER, req.nextUrl.pathname);
  return NextResponse.next({ request: { headers } });
}

// `ingest` is excluded on purpose: /ingest/* is the PostHog proxy rewrite (next.config.ts), and
// middleware runs BEFORE rewrites, so a redirect here would silently eat every analytics event.
// No app route may begin with /ingest.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api|ingest|sitemap.xml|robots.txt).*)"],
};
