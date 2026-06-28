import type { Metadata, Viewport } from "next";
import type { TenantRecord } from "./tenant";

/** Display name for a tenant (theme override → name → platform fallback). */
export function brandName(tenant: TenantRecord | null): string {
  return tenant?.theme.name ?? tenant?.name ?? "Learn.WitUS";
}

/**
 * Server-resolved metadata for a tenant. All SEO chrome (title template, OG,
 * favicon) is driven by the tenant row, never hardcoded — so no brand's name
 * leaks onto another's domain. Phase 2 extends this with OG image routes + JSON-LD.
 */
export function tenantMetadata(tenant: TenantRecord | null): Metadata {
  const name = brandName(tenant);
  const description = tenant?.tagline ?? "A multi-tenant learning platform.";
  return {
    title: { default: name, template: `%s · ${name}` },
    description,
    applicationName: name,
    icons: tenant?.theme.faviconUrl ? { icon: tenant.theme.faviconUrl } : undefined,
    manifest: tenant?.theme.manifestUrl,
    openGraph: {
      siteName: name,
      title: name,
      description,
      ...(tenant?.theme.ogDefaultUrl ? { images: [{ url: tenant.theme.ogDefaultUrl }] } : {}),
    },
  };
}

export function tenantViewport(tenant: TenantRecord | null): Viewport {
  return {
    themeColor: tenant?.theme.themeColor ?? "#111111",
  };
}
