import type { CSSProperties, ReactNode } from "react";
import { headers } from "next/headers";
import { unstable_rethrow } from "next/navigation";
import { resolveTenant, type TenantRecord } from "@/lib/tenant";
import { hasAcknowledgedAge } from "@/lib/age-gate";
import { usesEcosystemFooter } from "@/lib/witus-host";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EcosystemFooter } from "@/components/ecosystem-footer";
import { NeutralChrome, PAGE_SURFACE } from "@/components/neutral-chrome";
import { ThemeKeeper } from "@/components/theme-keeper";

// The school's own header and footer around a server-rendered error page (app/not-found.tsx,
// app/forbidden.tsx). Those two render OUTSIDE the (tenant) layout: an unmatched URL never enters it,
// and notFound() / forbidden() thrown under it are caught by the root boundary, above it. Without this
// a 404 or 403 rendered bare, with no way to sign in or get back (BAM, 2026-11-04: "404 page should
// still have header/footer").
//
// Branded with the school the HOST resolves to, which is the school the visitor is already on, so
// nothing about another school can show. Falls back to the neutral chrome when there is no school (an
// unknown host), when the school's age gate has not been passed, and when drawing the school header
// fails (its database reads are the likeliest thing to be down when an error page is showing).
export async function ErrorChrome({ children }: { children: ReactNode }) {
  let tenant: TenantRecord | null = null;
  let header: ReactNode = null;
  let ecosystem = false;
  try {
    tenant = await resolveTenant();
    if (tenant && (await hasAcknowledgedAge(tenant))) {
      // Called directly so its data reads happen here, inside the try, instead of later in render.
      header = await SiteHeader({ tenant });
      const h = await headers();
      ecosystem = usesEcosystemFooter(h.get("x-forwarded-host") ?? h.get("host"), tenant);
    }
  } catch (err) {
    // Next's own signals (dynamic rendering, redirect, notFound) are not failures: let them through,
    // or a prerender would bake the neutral chrome into the page.
    unstable_rethrow(err);
    console.warn("[error-chrome] school header unavailable, using the neutral one", err);
    header = null;
  }
  if (!tenant || !header) {
    const accent = tenant?.theme.colors?.accent ?? tenant?.theme.themeColor;
    return accent ? (
      <div style={{ "--accent": accent } as CSSProperties}>
        <NeutralChrome>{children}</NeutralChrome>
      </div>
    ) : (
      <NeutralChrome>{children}</NeutralChrome>
    );
  }

  const accent = tenant.theme.colors?.accent ?? tenant.theme.themeColor ?? "#111111";
  const accentFg = tenant.theme.colors?.accentFg ?? "#ffffff";
  return (
    <div style={{ "--accent": accent, "--accent-fg": accentFg } as CSSProperties} className={`flex min-h-screen flex-col ${PAGE_SURFACE}`}>
      <ThemeKeeper />
      {header}
      <div id="main-content" className="flex-1">
        {children}
      </div>
      {ecosystem ? <EcosystemFooter tenant={tenant} /> : <SiteFooter tenant={tenant} />}
    </div>
  );
}
