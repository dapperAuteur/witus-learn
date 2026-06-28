import { NextResponse, type NextRequest } from "next/server";
import { isBlockedSurfacePath } from "@/lib/tenant-util";

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
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api|sitemap.xml|robots.txt).*)"],
};
