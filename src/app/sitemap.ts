import type { MetadataRoute } from "next";
import { resolveTenant } from "@/lib/tenant";
import { getSiteUrl } from "@/lib/site-url";
import { getStandardsCoverage } from "@/db/queries/standards";
import { tenantHasMapData } from "@/db/queries/map";

// Tenant-scoped sitemap: only THIS tenant's URLs, only routes that exist for it (a URL that would
// 404 for the tenant is never listed). Unknown host → empty.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tenant = await resolveTenant();
  if (!tenant) return [];

  const base = await getSiteUrl();
  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/courses`, changeFrequency: "weekly", priority: 0.8 },
  ];

  if (tenant.legal.termsUrl) entries.push({ url: `${base}/terms`, priority: 0.3 });
  if (tenant.legal.privacyUrl) entries.push({ url: `${base}/privacy`, priority: 0.3 });
  if (tenant.legal.safetyUrl) entries.push({ url: `${base}/safety`, priority: 0.3 });

  // The map explorer — only when this tenant has map data (it 404s otherwise).
  if (tenant.flags.commodityMap !== false && (await tenantHasMapData(tenant.id))) {
    entries.push({ url: `${base}/explore`, changeFrequency: "weekly", priority: 0.7 });
  }

  // The standards growth funnel: the finder, the cross-state matrix, and ONE indexable URL per
  // jurisdiction this tenant's catalog is actually aligned to — so a teacher searching "<state>
  // standards" can find the page that answers them. Scoped: getStandardsCoverage only returns
  // jurisdictions this tenant backs, so we never list a state page that would render as "not mapped".
  const { states } = await getStandardsCoverage(tenant.id);
  if (states.length > 0) {
    entries.push({ url: `${base}/academic-standards`, changeFrequency: "monthly", priority: 0.7 });
    entries.push({ url: `${base}/academic-standards/matrix`, changeFrequency: "monthly", priority: 0.6 });
    for (const s of states) {
      entries.push({
        url: `${base}/academic-standards?state=${s.code.toLowerCase()}`,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
