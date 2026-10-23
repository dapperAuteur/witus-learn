import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { tenantDomains, tenants } from "@/db/schema";
import type { HomeSchool } from "@/lib/series-previews";

/**
 * The public identity of a series' home school, for the "This series continues on ..." notice
 * (src/lib/series-previews.ts). This reads ANOTHER tenant's row, so the limits are the point:
 *   - the slug comes from the committed SERIES_PREVIEWS registry, never from a request;
 *   - it returns the name, the primary host and two flags, the same things the school's own front
 *     page shows anyone, and no course, lesson, learner or catalog data;
 * so it is an owner-authored outbound link to a sibling school, not a cross-tenant catalog query.
 */
export async function getHomeSchool(slug: string): Promise<HomeSchool | null> {
  const rows = await db
    .select({ tenant: tenants, host: tenantDomains.host })
    .from(tenants)
    .leftJoin(tenantDomains, and(eq(tenantDomains.tenantId, tenants.id), eq(tenantDomains.isPrimary, true)))
    .where(eq(tenants.slug, slug))
    .limit(1);
  const row = rows[0];
  if (!row) return null;
  return {
    name: row.tenant.theme.name ?? row.tenant.name,
    primaryHost: row.host ?? null,
    isActive: row.tenant.isActive,
    comingSoon: row.tenant.flags.comingSoon === true,
  };
}
