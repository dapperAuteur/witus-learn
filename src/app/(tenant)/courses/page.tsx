import Link from "next/link";
import { headers } from "next/headers";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { getSession, getMembership, isPlatformOwner } from "@/lib/session";
import { resolveTenant } from "@/lib/tenant";
import { isWitusBrandedHost } from "@/lib/witus-host";
import { ecosystemProductBySlug } from "@/lib/ecosystem";
import { CourseCard } from "@/components/course-card";

export const metadata: Metadata = { title: "Courses" };

type SearchParams = Promise<{ q?: string; category?: string; sort?: string }>;

// The full, filterable catalog. Tenant-scoped via the DAL. Editors (owner/instructor/brand_admin)
// also see their HIDDEN courses here — drafts, held, and their own private ones — badged, so the
// owner can find them in the catalog while learners never do.
export default async function CoursesPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const sdb = await getScopedDb();
  const sort = sp.sort === "title" || sp.sort === "featured" || sp.sort === "newest" ? sp.sort : undefined;

  const session = await getSession();
  const owner = session ? await isPlatformOwner(session.user.id) : false;
  const membership = session ? ((await getMembership(session.user.id, sdb.tenantId)) ?? "") : "";
  const isEditor = owner || ["instructor", "brand_admin"].includes(membership);

  const [rawCourses, categories] = await Promise.all([
    sdb.listCourses({ q: sp.q, category: sp.category, sort, includeUnpublished: isEditor }),
    sdb.listCategories(),
  ]);
  // A private course stays owner-only: keep it only for the platform owner or its own instructor.
  const courses = rawCourses.filter(
    (c) => c.visibility !== "private" || owner || (session && c.instructorId === session.user.id),
  );

  // Cross-promotion idea #3: when browsing an active category that's mapped to a WitUS
  // ecosystem product, show a single labeled chip (WitUS-branded hosts / opt-in tenants only).
  const activeCategory = sp.category ? categories.find((c) => c.name === sp.category) : undefined;
  let ecosystemChip: { name: string; href: string } | null = null;
  if (activeCategory?.ecosystemProductSlug) {
    const h = await headers();
    const host = h.get("x-forwarded-host") || h.get("host");
    const tenant = await resolveTenant();
    const showEcosystem = isWitusBrandedHost(host) || tenant?.flags.ecosystemSso === true;
    const product = ecosystemProductBySlug(activeCategory.ecosystemProductSlug);
    if (showEcosystem && product) ecosystemChip = { name: product.name, href: product.href };
  }

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
      {ecosystemChip ? (
        <a
          href={ecosystemChip.href}
          target="_blank"
          rel="noreferrer"
          className="mb-4 inline-flex items-center gap-1 rounded-full border border-neutral-300 px-3 py-1 text-xs hover:border-current dark:border-neutral-700"
        >
          Explore in the WitUS ecosystem: <span className="font-medium">{ecosystemChip.name}</span> ↗
        </a>
      ) : null}
      {isEditor && courses.some((c) => !c.isPublished || c.visibility === "private") ? (
        <p className="mb-3 text-xs text-neutral-500">
          Courses marked below are hidden from learners — only you (and editors) see them here.
        </p>
      ) : null}
      {courses.length === 0 ? (
        <p className="text-neutral-500">No courses found. <Link href="/courses" className="underline">Clear filters</Link>.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => {
            const badge =
              c.visibility === "private"
                ? "🔒 Private"
                : c.publishHoldReason
                  ? "⚠️ On hold"
                  : !c.isPublished
                    ? "Draft"
                    : null;
            return (
              <div key={c.id} className="relative">
                {badge ? (
                  <span className="absolute right-2 top-2 z-10 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-900 shadow dark:bg-amber-900 dark:text-amber-100">
                    {badge}
                  </span>
                ) : null}
                <CourseCard course={c} />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
