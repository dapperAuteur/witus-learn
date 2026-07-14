import type { CSSProperties } from "react";
import { headers } from "next/headers";
import { requireTenant } from "@/lib/tenant";
import { getSession } from "@/lib/session";
import { hasAcknowledgedAge } from "@/lib/age-gate";
import { brandName } from "@/lib/branding";
import { getSiteUrl } from "@/lib/site-url";
import { isWitusBrandedHost } from "@/lib/witus-host";
import { organizationJsonLd } from "@/lib/seo/json-ld";
import { isDemoEmail } from "@/db/queries/demo";
import { SiteHeader } from "@/components/site-header";
import { DemoBanner } from "@/components/demo-banner";
import { SiteFooter } from "@/components/site-footer";
import { ReportProblem } from "@/components/report-problem";
import { EcosystemFooter } from "@/components/ecosystem-footer";
import { AgeGate } from "@/components/age-gate";
import { OfflinePrivacyGuard } from "@/components/offline-privacy-guard";

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

  // WitUS-branded surfaces (the apex + *.witus.online, incl. learn.witus.online)
  // and explicit opt-in tenants get the cross-product ecosystem footer; white-label
  // tenants on their own domains keep the isolated per-tenant footer.
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const showEcosystemFooter =
    isWitusBrandedHost(host) || tenant.flags.ecosystemSso === true;

  // Prefill the "Report a problem" email for a signed-in user (they can still edit it).
  const session = await getSession();
  const isDemo = isDemoEmail(session?.user.email);

  return (
    <div style={style} className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader tenant={tenant} />
      {isDemo ? <DemoBanner /> : null}
      <div id="main-content" className="flex-1">
        {children}
      </div>
      {showEcosystemFooter ? (
        <EcosystemFooter tenant={tenant} />
      ) : (
        <SiteFooter tenant={tenant} />
      )}
      <ReportProblem defaultEmail={session?.user.email ?? undefined} />
      {/* A saved /admin/future is signed-in content sitting in this device's cache. This deletes it
          the moment the person at the keyboard isn't the one who saved it — a session that expired,
          or somebody else signing in on the same laptop. Online loads only; see the component. */}
      <OfflinePrivacyGuard userId={session?.user.id ?? null} />
    </div>
  );
}
