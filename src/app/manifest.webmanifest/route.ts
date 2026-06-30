import { resolveTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";

// Tenant-aware web app manifest (resolved from the request host). Used when a tenant has
// no custom theme.manifestUrl. Icons come from the tenant logo when set — installability
// is best with 192/512 PNGs, but the manifest is valid (theme/display) without them.
export const dynamic = "force-dynamic";

export async function GET() {
  const tenant = await resolveTenant();
  const theme = tenant?.theme ?? {};
  const name = brandName(tenant);

  const icons = theme.logoUrl
    ? [
        { src: theme.logoUrl, sizes: "192x192", type: "image/png", purpose: "any" },
        { src: theme.logoUrl, sizes: "512x512", type: "image/png", purpose: "any" },
      ]
    : [];

  const manifest = {
    name,
    short_name: theme.shortName ?? name,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: theme.themeColor ?? "#111111",
    icons,
  };

  return Response.json(manifest, {
    headers: {
      "content-type": "application/manifest+json",
      "cache-control": "public, max-age=3600",
    },
  });
}
