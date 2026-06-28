import type { TenantRecord } from "../tenant";
import { brandName } from "../branding";

// Tenant-scoped structured data. The Organization/Course schemas use the resolved
// tenant's name + domain — never a hardcoded brand (the CentOS bug this rebuild
// fixes). Pure functions so the isolation suite can assert no cross-tenant leak.

export function organizationJsonLd(tenant: TenantRecord, siteUrl: string): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brandName(tenant),
    url: siteUrl,
    ...(tenant.theme.logoUrl ? { logo: tenant.theme.logoUrl } : {}),
    ...(tenant.tagline ? { description: tenant.tagline } : {}),
  };
}
