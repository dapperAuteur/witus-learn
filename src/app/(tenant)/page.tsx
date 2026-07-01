import Link from "next/link";
import { getScopedDb } from "@/db/scoped";
import { getSession } from "@/lib/session";
import { getLearnerDashboard, getWeeklyLeaderboard } from "@/db/queries/dashboard";
import { brandName } from "@/lib/branding";
import { CourseCard } from "@/components/course-card";
import { LearnerDashboardView } from "@/components/learner-dashboard";
import { ComingSoon } from "@/components/coming-soon";

type SearchParams = Promise<{ q?: string; category?: string; sort?: string; view?: string }>;

// Tenant home. Signed-in learners with enrollments get the "Continue / mastery"
// dashboard; everyone else (and `?view=catalog`) gets the catalog. All reads go
// through the scoped DAL, so only THIS tenant's content ever appears.
export default async function TenantHome({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const sdb = await getScopedDb();
  const tenant = sdb.tenant;

  // Pre-launch schools show a branded holding page instead of an empty catalog.
  if (tenant.flags.comingSoon) return <ComingSoon tenant={tenant} />;

  // Logged-in learner → mastery dashboard (unless they asked for the catalog).
  const session = await getSession();
  if (session && sp.view !== "catalog") {
    const gamification = tenant.flags.gamification ?? "light";
    const data = await getLearnerDashboard(tenant.id, session.user.id);
    if (data.courses.length > 0) {
      const name = session.user.name?.trim().split(/\s+/)[0] || "there";
      const leaderboard = gamification === "full" ? await getWeeklyLeaderboard(tenant.id) : [];
      return (
        <LearnerDashboardView
          data={data}
          name={name}
          gamification={gamification}
          leaderboard={leaderboard}
          userId={session.user.id}
        />
      );
    }
  }

  const [courses, categories] = await Promise.all([sdb.listCourses(), sdb.listCategories()]);
  const featured = courses.filter((c) => c.isFeatured);
  const countByCategory = new Map<string, number>();
  for (const c of courses) if (c.category) countByCategory.set(c.category, (countByCategory.get(c.category) ?? 0) + 1);

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
        {session ? (
          <Link href="/" className="mt-3 inline-block text-sm font-medium underline" style={{ color: "var(--accent)" }}>
            ← Your learning
          </Link>
        ) : null}
      </header>

      {tenant.flags.recruiting ? (
        <section className="mb-8 rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
          <h2 className="text-xl font-semibold">Run your own school on WitUS</h2>
          <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Bring your courses to the WitUS learning platform under your own brand and domain — cited,
            media-rich courses with progress tracking and built-in certificates. You teach; we host.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/teach"
              className="inline-block min-h-11 rounded-md px-4 py-2 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Start your school →
            </Link>
            <Link href="/schools" className="text-sm font-medium underline" style={{ color: "var(--accent)" }}>
              Explore our schools
            </Link>
          </div>
        </section>
      ) : null}

      <form method="get" action="/courses" className="mb-8 flex flex-wrap items-center gap-3">
        <label className="sr-only" htmlFor="q">Search courses</label>
        <input
          id="q"
          name="q"
          placeholder="Search all courses…"
          className="min-h-11 flex-1 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
        />
        <button
          type="submit"
          className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Search
        </button>
      </form>

      {categories.length > 0 ? (
        <section className="mb-10">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Browse by track</h2>
            <Link href="/courses" className="text-sm font-medium underline" style={{ color: "var(--accent)" }}>
              All courses →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const n = countByCategory.get(c.name) ?? 0;
              return (
                <Link
                  key={c.id}
                  href={`/courses?category=${encodeURIComponent(c.name)}`}
                  className="rounded-lg border border-neutral-200 p-5 transition-colors hover:border-current focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800"
                >
                  <span className="font-semibold">{c.name}</span>
                  <p className="mt-1 text-sm text-neutral-500">
                    {n} course{n === 1 ? "" : "s"} →
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
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

      {featured.length > 0 ? (
        <section className="mb-6">
          <h2 className="mb-3 text-lg font-semibold">Featured</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </section>
      ) : null}

      {courses.length === 0 ? (
        <p className="text-neutral-500">No courses yet.</p>
      ) : (
        <p className="text-sm text-neutral-500">
          <Link href="/courses" className="font-medium underline" style={{ color: "var(--accent)" }}>
            Browse all {courses.length} course{courses.length === 1 ? "" : "s"} →
          </Link>
        </p>
      )}
    </main>
  );
}
