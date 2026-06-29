import "server-only";
import { asc, ne } from "drizzle-orm";
import { db } from "@/db/client";
import { tenants, tenantDomains } from "@/db/schema/tenancy";

export interface DirectorySchool {
  slug: string;
  name: string;
  tagline: string | null;
  accent: string | null;
  comingSoon: boolean;
  /** Public domain to link out to (a non-localhost host), or null if none yet. */
  host: string | null;
}

// Hand-curated brand directory for the platform front door (Learn.WitUS). This is a
// controlled cross-tenant read of BRAND METADATA only (name, tagline, public host) —
// NOT a catalog query, so it does not breach content isolation. It links OUT to each
// brand's own domain; it never renders another brand's courses inline.
export async function listSchoolDirectory(excludeSlug: string): Promise<DirectorySchool[]> {
  const rows = await db
    .select({ id: tenants.id, slug: tenants.slug, name: tenants.name, tagline: tenants.tagline, theme: tenants.theme, flags: tenants.flags })
    .from(tenants)
    .where(ne(tenants.slug, "acme-academy"))
    .orderBy(asc(tenants.name));

  const hostRows = await db
    .select({ tenantId: tenantDomains.tenantId, host: tenantDomains.host })
    .from(tenantDomains);

  // Public host per tenant: the first non-*.localhost domain.
  const publicHost = new Map<string, string>();
  for (const h of hostRows) {
    if (h.host.endsWith(".localhost") || h.host === "localhost") continue;
    if (!publicHost.has(h.tenantId)) publicHost.set(h.tenantId, h.host);
  }

  return rows
    .filter((r) => r.slug !== excludeSlug)
    .map((r) => ({
      slug: r.slug,
      name: r.name,
      tagline: r.tagline,
      accent: r.theme?.colors?.accent ?? r.theme?.themeColor ?? null,
      comingSoon: Boolean(r.flags?.comingSoon),
      host: publicHost.get(r.id) ?? null,
    }));
}
