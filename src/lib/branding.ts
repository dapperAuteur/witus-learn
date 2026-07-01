import type { Metadata, Viewport } from "next";
import type { TenantRecord } from "./tenant";
import { ogImageUrl } from "./og";

/** Display name for a tenant (theme override → name → platform fallback). */
export function brandName(tenant: TenantRecord | null): string {
  return tenant?.theme.name ?? tenant?.name ?? "Learn.WitUS";
}

/**
 * Server-resolved metadata for a tenant. All SEO chrome (title template, OG,
 * favicon) is driven by the tenant row, never hardcoded — so no brand's name
 * leaks onto another's domain. Phase 2 extends this with OG image routes + JSON-LD.
 */
export function tenantMetadata(tenant: TenantRecord | null, baseUrl?: string | null): Metadata {
  const name = brandName(tenant);
  const description = tenant?.tagline ?? "A multi-tenant learning platform.";
  // Default social card: an explicit tenant OG image if set, else the generated brand card.
  // Pages (course/lesson) override `images` with a page-relevant card.
  const image = tenant?.theme.ogDefaultUrl ?? ogImageUrl({});
  return {
    // Absolute base so relative og:image / canonical URLs resolve for crawlers.
    metadataBase: baseUrl ? new URL(baseUrl) : undefined,
    title: { default: name, template: `%s · ${name}` },
    description,
    applicationName: name,
    icons: tenant?.theme.faviconUrl ? { icon: tenant.theme.faviconUrl } : undefined,
    manifest: tenant?.theme.manifestUrl ?? "/manifest.webmanifest",
    openGraph: {
      type: "website",
      siteName: name,
      title: name,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description,
      images: [image],
    },
  };
}

export function tenantViewport(tenant: TenantRecord | null): Viewport {
  return {
    themeColor: tenant?.theme.themeColor ?? "#111111",
  };
}
