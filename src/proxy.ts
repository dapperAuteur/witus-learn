import { NextResponse, type NextRequest } from "next/server";
import { isBlockedSurfacePath } from "@/lib/tenant-util";
import { PATHNAME_HEADER } from "@/lib/next-path";

// Next 16's renamed middleware. Edge-light (no DB): static route-surface gating
// only — CentOS-style dashboard/module/pricing routes redirect to the tenant
// home. Tenant resolution + flag-driven gating happen server-side where the
// resolved tenant is available.
export function proxy(req: NextRequest) {
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

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api|sitemap.xml|robots.txt).*)"],
};
