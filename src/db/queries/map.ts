import { and, asc, eq, type SQL } from "drizzle-orm";
import { db } from "@/db/client";
import { mapBelts, mapCommodities, type MapBelt, type MapCommodity } from "@/db/schema";

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

export async function listBelts(tenantId: string): Promise<MapBelt[]> {
  return db
    .select()
    .from(mapBelts)
    .where(eq(mapBelts.tenantId, tenantId))
    .orderBy(asc(mapBelts.sortOrder));
}
