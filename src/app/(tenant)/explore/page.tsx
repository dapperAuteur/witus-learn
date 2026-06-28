import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireTenant } from "@/lib/tenant";
import { listCommodities } from "@/db/queries/map";
import { CommodityMap, type MapPin } from "@/components/commodity-map";

export const metadata: Metadata = { title: "Explore the Commodity Map" };

// The signature discovery surface. Tenant-scoped (only this brand's pins) and
// only for tenants with the map enabled.
export default async function ExplorePage() {
  const tenant = await requireTenant();
  if (!tenant.flags.commodityMap) notFound();

  const rows = await listCommodities(tenant.id);
  const pins: MapPin[] = rows.map((c) => ({
    id: c.id,
    name: c.name,
    geo: c.geo,
    lat: c.lat,
    lon: c.lon,
    color: c.color,
    seasonNumber: c.seasonNumber,
    isHome: c.isHome,
    courseId: c.courseId,
    episodeLabel: c.episodeLabel,
    summary: c.summary,
  }));

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">The Commodity Map</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Every episode at its origin. Click a pin to open the episode. Filter by season.
      </p>
      <div className="mt-8">
        {pins.length === 0 ? (
          <p className="text-neutral-500">The map dataset has not been seeded yet.</p>
        ) : (
          <CommodityMap commodities={pins} />
        )}
      </div>
    </main>
  );
}
