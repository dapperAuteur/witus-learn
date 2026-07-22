import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { requireTenant } from "@/lib/tenant";
import { listCourses } from "@/db/queries/catalog";
import { GreatMigrationMap } from "@/components/great-migration-map";

export const metadata: Metadata = { title: "The Great Migration, Interactive Map" };

const VALID_FOCUS = new Set(["chicago", "harlem", "detroit", "vanport"]);

type SP = { searchParams: Promise<{ focus?: string | string[] }> };

// The Great Migration course's signature map — surfaced the same way the civics map is
// (grep `us-states-map`): a standalone route, gated on this TENANT actually offering the
// course (never trust a client-supplied tenant; scoped by the tenant's own course list, per
// CLAUDE.md's multi-tenancy rule). The map component itself ships no DB query — it is a
// teaching visual, tenant-agnostic — but the page it's mounted on is tenant-scoped.
export default async function GreatMigrationMapPage({ searchParams }: SP) {
  const tenant = await requireTenant();
  const courses = await listCourses(tenant.id);
  const course = courses.find((c) => c.slug === "great-migration");
  if (!course) notFound();

  const sp = await searchParams;
  const focusParam = typeof sp.focus === "string" ? sp.focus : undefined;
  const initialFocus = focusParam && VALID_FOCUS.has(focusParam) ? focusParam : undefined;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold">The Great Migration, interactive map</h1>
      <p className="mt-1 text-neutral-600 dark:text-neutral-400">
        Trace the three migration streams and click a destination, Chicago, Harlem, Detroit, or
        Vanport, Oregon, for a short story, a historical event, a figure, and a work of art tied
        to that place. Pairs with{" "}
        <Link href={`/course/${course.id}`} className="underline" style={{ color: "var(--accent)" }}>
          {course.title}
        </Link>
        .
      </p>

      <div className="mt-6">
        <GreatMigrationMap initialFocus={initialFocus} />
      </div>
    </main>
  );
}
