import type { Metadata } from "next";
import { ogImageUrl } from "@/lib/og";
import { getScopedDb } from "@/db/scoped";
import { listCourses } from "@/db/queries/catalog";
import { GLOBE_PINS } from "@/lib/globe-pins";
import { CATALOG_TIMELINE } from "@/lib/catalog-timeline";
import { ExploreGlobe, type GlobeMarker } from "@/components/explore-globe";
import { TimelineBlock } from "@/components/timeline-block";

const TITLE = "Where our courses take place";
const DESCRIPTION =
  "A rotating globe of the places our courses are about. Drag to spin, zoom in for more, and open the course behind any pin.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl({ title: "Where our courses take place", subtitle: "Spin the globe, open a course" })],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl({ title: "Where our courses take place", subtitle: "Spin the globe, open a course" })],
  },
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
    return [{ id: p.id, lat: p.lat, lng: p.lng, title: p.title, href: `/course/${id}`, tier: p.tier, year: p.year }];
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

      {/* The timeline panel beside the map (plans/45 Part 2): the doctrinal-and-policy spine the route
          series argues about, so a visitor sees WHEN alongside WHERE. Place and time on one page. */}
      {markers.length > 0 ? (
        <section aria-labelledby="tl" className="mt-10">
          <h2 id="tl" className="text-xl font-semibold">
            And when: the century these places share
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
            The rulings and federal acts the route series traces, on one axis. Two tracks: what a court
            ruled, and what a legislature or agency did.
          </p>
          <TimelineBlock events={CATALOG_TIMELINE} />
        </section>
      ) : null}
    </main>
  );
}
