import type { CSSProperties } from "react";
import { requireTenant } from "@/lib/tenant";
import { hasAcknowledgedAge } from "@/lib/age-gate";
import { brandName } from "@/lib/branding";
import { getSiteUrl } from "@/lib/site-url";
import { organizationJsonLd } from "@/lib/seo/json-ld";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AgeGate } from "@/components/age-gate";

// Wraps every tenant-facing surface. Resolves the brand from the host (404 on an
// unknown host), applies the accent token, gates content behind the age-gate when
// required, and emits tenant-scoped Organization JSON-LD.
export default async function TenantLayout({ children }: { children: React.ReactNode }) {
  const tenant = await requireTenant();
  const accent = tenant.theme.colors?.accent ?? tenant.theme.themeColor ?? "#111111";
  const accentFg = tenant.theme.colors?.accentFg ?? "#ffffff";
  const style = { "--accent": accent, "--accent-fg": accentFg } as CSSProperties;

  if (!(await hasAcknowledgedAge(tenant))) {
    return (
      <div style={style}>
        <AgeGate brand={brandName(tenant)} hasSafety={Boolean(tenant.legal.safetyUrl)} />
      </div>
    );
  }

  const jsonLd = organizationJsonLd(tenant, await getSiteUrl());

  return (
    <div style={style} className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader tenant={tenant} />
      <div id="main-content" className="flex-1">
        {children}
      </div>
      <SiteFooter tenant={tenant} />
    </div>
  );
}
