import Link from "next/link";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { CourseCard } from "@/components/course-card";

export const metadata: Metadata = { title: "Courses" };

type SearchParams = Promise<{ q?: string; category?: string; sort?: string }>;

// The full, filterable catalog. The home keeps a lean hero + track cards; this is where the
// complete list, search, category filter, and sort live — so the landing page never has to
// enumerate every course. Tenant-scoped via the DAL.
export default async function CoursesPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const sdb = await getScopedDb();
  const sort = sp.sort === "title" || sp.sort === "featured" || sp.sort === "newest" ? sp.sort : undefined;
  const [courses, categories] = await Promise.all([
    sdb.listCourses({ q: sp.q, category: sp.category, sort }),
    sdb.listCategories(),
  ]);

  const chip = "rounded-full border border-neutral-300 px-3 py-1 hover:border-current dark:border-neutral-700";
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Courses</h1>
        <Link href="/" className="text-sm underline" style={{ color: "var(--accent)" }}>← Home</Link>
      </div>

      <form method="get" className="mb-6 mt-4 flex flex-wrap items-center gap-3">
        <label className="sr-only" htmlFor="q">Search courses</label>
        <input
          id="q"
          name="q"
          defaultValue={sp.q ?? ""}
          placeholder="Search courses…"
          className="min-h-11 flex-1 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
        />
        {sp.category ? <input type="hidden" name="category" value={sp.category} /> : null}
        <select name="sort" defaultValue={sort ?? "newest"} className="min-h-11 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900">
          <option value="newest">Newest</option>
          <option value="title">A–Z</option>
          <option value="featured">Featured</option>
        </select>
        <button type="submit" className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2" style={{ backgroundColor: "var(--accent)" }}>
          Search
        </button>
      </form>

      {categories.length > 0 ? (
        <nav className="mb-6 flex flex-wrap gap-2 text-sm" aria-label="Categories">
          <Link href="/courses" className={`${chip} ${!sp.category ? "font-semibold" : ""}`} aria-current={!sp.category ? "true" : undefined}>All</Link>
          {categories.map((c) => (
            <Link key={c.id} href={`/courses?category=${encodeURIComponent(c.name)}`} className={`${chip} ${sp.category === c.name ? "font-semibold" : ""}`} aria-current={sp.category === c.name ? "true" : undefined}>
              {c.name}
            </Link>
          ))}
        </nav>
      ) : null}

      <p className="mb-3 text-sm text-neutral-500">
        {courses.length} course{courses.length === 1 ? "" : "s"}
        {sp.category ? ` in ${sp.category}` : ""}
        {sp.q ? ` matching “${sp.q}”` : ""}
      </p>
      {courses.length === 0 ? (
        <p className="text-neutral-500">No courses found. <Link href="/courses" className="underline">Clear filters</Link>.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      )}
    </main>
  );
}
