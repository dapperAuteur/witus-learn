import type { MetadataRoute } from "next";
import { resolveTenant } from "@/lib/tenant";
import { getSiteUrl } from "@/lib/site-url";

// Tenant-scoped sitemap: only THIS tenant's URLs, only routes that exist today.
// Catalog/course/explore URLs are added as those phases land. Unknown host → empty.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tenant = await resolveTenant();
  if (!tenant) return [];

  const base = await getSiteUrl();
  const paths = ["/"];
  if (tenant.legal.termsUrl) paths.push("/terms");
  if (tenant.legal.privacyUrl) paths.push("/privacy");
  if (tenant.legal.safetyUrl) paths.push("/safety");

  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
