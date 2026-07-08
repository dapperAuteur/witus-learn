import { cache } from "react";
import { and, asc, eq, type SQL } from "drizzle-orm";
import { db } from "@/db/client";
import { mapBelts, mapCommodities, type MapBelt, type MapCommodity } from "@/db/schema";

// Whether a tenant has any Commodity Map data. Drives whether the map surfaces (/explore, the home
// hero, the header link) show — so a school shows the map as soon as it's seeded, with no flag toggle
// needed. `cache` memoizes it per request (the header + page both call it). The commodityMap flag is
// only a force-hide override (set it false to hide the map even when data exists).
export const tenantHasMapData = cache(async (tenantId: string): Promise<boolean> => {
  const rows = await db.select({ id: mapCommodities.id }).from(mapCommodities).where(eq(mapCommodities.tenantId, tenantId)).limit(1);
  return rows.length > 0;
});

/** The tenant's commodity pins (optionally one season). Tenant-scoped. */
export async function listCommodities(tenantId: string, season?: number): Promise<MapCommodity[]> {
  const conds: SQL[] = [eq(mapCommodities.tenantId, tenantId)];
  if (season) conds.push(eq(mapCommodities.seasonNumber, season));
  return db
    .select()
    .from(mapCommodities)
    .where(and(...conds))
    .orderBy(asc(mapCommodities.sortOrder));
}

/** A single commodity pin by id, tenant-scoped (foreign id → null/404). */
export async function getCommodityById(
  tenantId: string,
  id: string,
): Promise<MapCommodity | null> {
  const rows = await db
    .select()
    .from(mapCommodities)
    .where(and(eq(mapCommodities.tenantId, tenantId), eq(mapCommodities.id, id)))
    .limit(1);
  return rows[0] ?? null;
}

export async function listBelts(tenantId: string): Promise<MapBelt[]> {
  return db
    .select()
    .from(mapBelts)
    .where(eq(mapBelts.tenantId, tenantId))
    .orderBy(asc(mapBelts.sortOrder));
}
