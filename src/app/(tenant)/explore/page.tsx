import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireTenant } from "@/lib/tenant";
import { listBelts, listCommodities } from "@/db/queries/map";
import { type MapPin } from "@/components/commodity-map";
import { type MapBelt } from "@/components/growing-belts-map";
import { MapTabs } from "@/components/map-tabs";

export const metadata: Metadata = { title: "Explore the Commodity Map" };

// The signature discovery surface. Tenant-scoped (only this brand's pins) and
// only for tenants with the map enabled.
export default async function ExplorePage() {
  const tenant = await requireTenant();
  if (!tenant.flags.commodityMap) notFound();

  const [rows, beltRows] = await Promise.all([listCommodities(tenant.id), listBelts(tenant.id)]);
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
  const belts: MapBelt[] = beltRows.map((b) => ({
    id: b.id,
    name: b.name,
    color: b.color,
    seasonNumber: b.seasonNumber,
    latMin: b.latMin,
    latMax: b.latMax,
    productionCountryCodes: b.productionCountryCodes,
    description: b.description,
  }));

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">The Commodity Map</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Every episode at its origin (click a pin to open it), and where each commodity is grown.
      </p>
      <div className="mt-8">
        {pins.length === 0 ? (
          <p className="text-neutral-500">The map dataset has not been seeded yet.</p>
        ) : (
          <MapTabs commodities={pins} belts={belts} />
        )}
      </div>
    </main>
  );
}
