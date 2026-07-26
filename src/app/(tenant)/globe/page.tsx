import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { listCourses } from "@/db/queries/catalog";
import { GLOBE_PINS } from "@/lib/globe-pins";
import { ExploreGlobe, type GlobeMarker } from "@/components/explore-globe";

export const metadata: Metadata = {
  title: "Where our courses take place",
  description: "A rotating globe of the places our courses are about. Drag to spin, zoom for more.",
};

// The explore globe (plans/45). Tenant-scoped: a pin only appears if the tenant actually publishes
// the course it points to, so a school never sees a place linked to a course it does not have. The
// pin list is real text (accessibility + the no-JS fallback), so the page is useful even where the
// interactive globe is not.
export default async function GlobePage() {
  const sdb = await getScopedDb();
  const courses = await listCourses(sdb.tenantId);
  const idBySlug = new Map(courses.map((c) => [c.slug, c.id] as const));

  const markers: GlobeMarker[] = GLOBE_PINS.flatMap((p) => {
    const id = idBySlug.get(p.courseSlug);
    if (!id) return []; // the tenant does not publish this course
    return [{ id: p.id, lat: p.lat, lng: p.lng, title: p.title, href: `/course/${id}`, tier: p.tier }];
  });

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">Where our courses take place</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Every pin is a real place a course is about. Drag to spin the globe, zoom in to reveal more,
        and tap a place to open its course. Prefer a flat map or a plain list? Both are here.
      </p>

      {markers.length === 0 ? (
        <p className="mt-8 text-neutral-500">No place-based courses are published yet.</p>
      ) : (
        <div className="mt-6">
          <ExploreGlobe markers={markers} />
        </div>
      )}
    </main>
  );
}
