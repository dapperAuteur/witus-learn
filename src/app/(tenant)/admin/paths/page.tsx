import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { getScopedDb } from "@/db/scoped";
import { getPathBySlug, listPaths } from "@/db/queries/paths";
import { PathsAdmin } from "@/components/paths-admin";

export const metadata: Metadata = { title: "Learning paths" };

// Platform-owner learning-path management for the current school.
export default async function PathsAdminPage() {
  await requirePlatformOwner();
  const sdb = await getScopedDb();
  const [paths, courses] = await Promise.all([listPaths(sdb.tenantId), sdb.listCourses()]);

  // Each path's current course ids (for the checkboxes).
  const withCourses = await Promise.all(
    paths.map(async (p) => {
      const d = await getPathBySlug(sdb.tenantId, p.slug);
      return { id: p.id, slug: p.slug, title: p.title, courseIds: d?.courses.map((c) => c.id) ?? [] };
    }),
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Learning paths</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Curate ordered tracks of courses. Learners see them at <code>/paths</code> (the school needs
        the <code>paths</code> flag).
      </p>
      <div className="mt-6">
        <PathsAdmin paths={withCourses} courses={courses.map((c) => ({ id: c.id, title: c.title }))} />
      </div>
    </main>
  );
}
