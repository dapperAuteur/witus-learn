import Link from "next/link";
import { headers } from "next/headers";
import type { Metadata } from "next";
import { ogImageUrl } from "@/lib/og";
import { getScopedDb } from "@/db/scoped";
import { getSession, getMembership, isPlatformOwner } from "@/lib/session";
import { resolveTenant } from "@/lib/tenant";
import { isWitusBrandedHost } from "@/lib/witus-host";
import { ecosystemProductBySlug } from "@/lib/ecosystem";
import { matchEntities } from "@/lib/entities";
import { isVettingLocked } from "@/lib/vetting";
import { coursePriceView } from "@/lib/sale-pricing";
import { CourseCard } from "@/components/course-card";

const TITLE = "Courses";
const DESCRIPTION =
  "The full catalog: cited, media-rich courses you can filter by subject and sort by where to start. Every claim ties back to a source you can check.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl({ title: TITLE, subtitle: "Browse the full catalog" })],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl({ title: TITLE, subtitle: "Browse the full catalog" })],
  },
};

type SearchParams = Promise<{ q?: string; category?: string; sort?: string }>;

// The full, filterable catalog. Tenant-scoped via the DAL. Editors (owner/instructor/brand_admin)
// also see their HIDDEN courses here — drafts, held, and their own private ones — badged, so the
// owner can find them in the catalog while learners never do.
export default async function CoursesPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const sdb = await getScopedDb();
  // Default is curriculum order (undefined → the DAL's curriculum branch): category order the
  // tenant chose, then position within a series. "Newest" is still one click away, but it is an
  // owner's view of the catalog, not a learner's — a learner wants to know where to start.
  const sort =
    sp.sort === "title" || sp.sort === "featured" || sp.sort === "newest" || sp.sort === "curriculum"
      ? sp.sort
      : undefined;

  const session = await getSession();
  const owner = session ? await isPlatformOwner(session.user.id) : false;
  const membership = session ? ((await getMembership(session.user.id, sdb.tenantId)) ?? "") : "";
  const isEditor = owner || ["instructor", "brand_admin"].includes(membership);

  const [rawCourses, categories, promotions] = await Promise.all([
    sdb.listCourses({ q: sp.q, category: sp.category, sort, includeUnpublished: isEditor }),
    sdb.listCategories(),
    // Active codeless promotions for THIS tenant only; each card resolves its own price from them.
    sdb.listActivePromotions(),
  ]);
  // Cross-course entities that match the search (plans/45 Part 3): a person/case/law the query names
  // is its own result type ("Milliken v. Bradley, appears in 3 courses"), not scattered lesson hits.
  // Only surfaced when at least TWO of the tenant's own published courses cover it, so it is genuinely
  // cross-course here. One extra query, only when there is a query that matches an entity.
  const matchedEntities = sp.q ? matchEntities(sp.q) : [];
  let entityResults: { slug: string; name: string; kind: string; count: number }[] = [];
  if (matchedEntities.length > 0) {
    const published = new Set((await sdb.listCourses({})).map((c) => c.slug));
    entityResults = matchedEntities
      .map((e) => ({ slug: e.slug, name: e.name, kind: e.kind, count: e.courses.filter((l) => published.has(l.courseSlug)).length }))
      .filter((e) => e.count >= 2);
  }

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
        <label className="sr-only" htmlFor="sort">Sort courses</label>
        <select id="sort" name="sort" defaultValue={sort ?? "curriculum"} className="min-h-11 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900">
          <option value="curriculum">Course order</option>
          <option value="newest">Newest</option>
          <option value="title">A-Z</option>
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
      {entityResults.length > 0 ? (
        <section aria-label="Topics that span courses" className="mb-4 rounded-lg border-2 p-4" style={{ borderColor: "var(--accent)" }}>
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
            Topics that span courses
          </p>
          <ul className="mt-2 space-y-1">
            {entityResults.map((e) => (
              <li key={e.slug} className="text-sm">
                <Link href={`/e/${e.slug}`} className="font-medium hover:underline">
                  {e.name}
                </Link>{" "}
                <span className="text-neutral-500">
                  · {e.kind} · appears in {e.count} courses
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
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
          Courses marked below are hidden from learners, only you (and editors) see them here.
        </p>
      ) : null}
      {courses.length === 0 ? (
        <p className="text-neutral-500">No courses found. <Link href="/courses" className="underline">Clear filters</Link>.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => {
            // "Coming soon" (unvetted) is a PUBLIC state, unlike the three editor-only badges
            // above it, so it is the fallback rather than a competing case: an editor looking at
            // an unvetted draft still wants to see "Draft" first.
            const badge =
              c.visibility === "private"
                ? "🔒 Private"
                : c.publishHoldReason
                  ? "⚠️ On hold"
                  : !c.isPublished
                    ? "Draft"
                    : isVettingLocked(c)
                      ? "🕒 Coming soon"
                      : null;
            return (
              <div key={c.id} className="relative">
                {badge ? (
                  <span className="absolute right-2 top-2 z-10 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-900 shadow dark:bg-amber-900 dark:text-amber-100">
                    {badge}
                  </span>
                ) : null}
                <CourseCard course={c} price={coursePriceView(c, sdb.tenantId, promotions)} />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
