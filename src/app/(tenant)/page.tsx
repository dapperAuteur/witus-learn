import Link from "next/link";
import { getScopedDb } from "@/db/scoped";
import { brandName } from "@/lib/branding";
import { CourseCard } from "@/components/course-card";
import { ComingSoon } from "@/components/coming-soon";

type SearchParams = Promise<{ q?: string; category?: string; sort?: string }>;

// Tenant catalog. All reads go through the scoped DAL, so only THIS tenant's
// published courses ever appear. Search/category/sort are server-driven via the
// query string. Pretty per-instructor URLs land in Phase 3b.
export default async function CatalogHome({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const sdb = await getScopedDb();
  const tenant = sdb.tenant;

  // Pre-launch schools show a branded holding page instead of an empty catalog.
  if (tenant.flags.comingSoon) return <ComingSoon tenant={tenant} />;

  const sort =
    sp.sort === "title" || sp.sort === "featured" || sp.sort === "newest" ? sp.sort : undefined;
  const [courses, categories] = await Promise.all([
    sdb.listCourses({ q: sp.q, category: sp.category, sort }),
    sdb.listCategories(),
  ]);
  const featured = courses.filter((c) => c.isFeatured);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <p className="text-sm uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          {brandName(tenant)}
        </p>
        <h1 className="mt-1 text-3xl font-bold">{tenant.name}</h1>
        {tenant.tagline ? (
          <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">{tenant.tagline}</p>
        ) : null}
      </header>

      {tenant.flags.recruiting ? (
        <section className="mb-8 rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
          <h2 className="text-xl font-semibold">Run your own school on WitUS</h2>
          <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Bring your courses to the WitUS learning platform under your own brand and domain — cited,
            media-rich courses with progress tracking and built-in certificates. You teach; we host.
          </p>
          <Link
            href="/teach"
            className="mt-4 inline-block min-h-11 rounded-md px-4 py-2 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Start your school →
          </Link>
        </section>
      ) : null}

      <form method="get" className="mb-6 flex flex-wrap items-center gap-3">
        <label className="sr-only" htmlFor="q">
          Search courses
        </label>
        <input
          id="q"
          name="q"
          defaultValue={sp.q ?? ""}
          placeholder="Search courses…"
          className="min-h-11 flex-1 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
        />
        <select
          name="sort"
          defaultValue={sort ?? "newest"}
          className="min-h-11 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
        >
          <option value="newest">Newest</option>
          <option value="title">A–Z</option>
          <option value="featured">Featured</option>
        </select>
        <button
          type="submit"
          className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Search
        </button>
      </form>

      {categories.length > 0 ? (
        <nav className="mb-8 flex flex-wrap gap-2 text-sm" aria-label="Categories">
          <Link
            href="/"
            className="rounded-full border border-neutral-300 px-3 py-1 dark:border-neutral-700"
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/?category=${encodeURIComponent(c.name)}`}
              className="rounded-full border border-neutral-300 px-3 py-1 hover:border-current dark:border-neutral-700"
            >
              {c.name}
            </Link>
          ))}
        </nav>
      ) : null}

      {categories.some((c) => c.name === "Languages") ? (
        <Link
          href="/languages"
          className="mb-8 flex items-center justify-between gap-3 rounded-lg border border-neutral-200 p-4 hover:border-current dark:border-neutral-800"
        >
          <span className="font-medium">🌍 Language Atlas — see where each language comes from and how it spread</span>
          <span aria-hidden style={{ color: "var(--accent)" }}>→</span>
        </Link>
      ) : null}

      {featured.length > 0 && !sp.q && !sp.category ? (
        <section className="mb-10">
          <h2 className="mb-3 text-lg font-semibold">Featured</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </section>
      ) : null}

      <section>
        <h2 className="mb-3 text-lg font-semibold">
          {sp.q || sp.category ? "Results" : "All courses"}
        </h2>
        {courses.length === 0 ? (
          <p className="text-neutral-500">No courses yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
