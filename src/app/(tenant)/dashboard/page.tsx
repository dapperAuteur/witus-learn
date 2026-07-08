import Link from "next/link";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { getSession } from "@/lib/session";
import { getLearnerDashboard, getLearnerStats } from "@/db/queries/dashboard";
import { ProgressBar, WeekBars } from "@/components/progress-bits";
import { DashboardProfileForm } from "@/components/dashboard-profile-form";

export const metadata: Metadata = { title: "Your dashboard" };

// A labeled stat: the visible value/label/hint are aria-hidden and the whole tile carries
// one combined aria-label, so screen readers announce it once instead of twice.
function StatTile({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div
      role="group"
      aria-label={hint ? `${label}: ${value}, ${hint}` : `${label}: ${value}`}
      className="rounded-2xl border border-neutral-200 bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div aria-hidden="true" className="text-2xl font-extrabold tabular-nums">
        {value}
      </div>
      <div aria-hidden="true" className="mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-500">
        {label}
      </div>
      {hint ? (
        <div aria-hidden="true" className="mt-0.5 text-[11px] text-neutral-400">
          {hint}
        </div>
      ) : null}
    </div>
  );
}

// The learner's stats hub: streaks, recall/quiz performance, XP + badges (gated per the
// tenant's gamification dose), earned credentials, and self-serve profile editing. Links
// out to /my-courses for the full enrolled-course grid. TENANT-SCOPED — every stat comes
// from getLearnerDashboard / getLearnerStats, both of which filter by tenant.id.
export default async function DashboardPage() {
  const tenant = await requireTenant();
  const session = await getSession();

  if (!session) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-2xl font-bold">Your dashboard</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Please{" "}
          <Link href="/login" className="underline">
            sign in
          </Link>{" "}
          to see your stats and manage your profile.
        </p>
      </main>
    );
  }

  const [dashboard, stats] = await Promise.all([
    getLearnerDashboard(tenant.id, session.user.id),
    getLearnerStats(tenant.id, session.user.id),
  ]);
  const { streak, bestStreak, week, courses, xp, level, xpIntoLevel, xpForLevel, badges } = dashboard;
  const lessonsCompleted = courses.reduce((sum, c) => sum + c.completed, 0);

  // Same gate as the tenant home / learner-dashboard.tsx: XP + badges only show at the
  // "full" gamification dose; streak/week are shown regardless (they're "light" content).
  const gamification = tenant.flags.gamification ?? "light";
  const full = gamification === "full";
  const earnedBadges = badges.filter((b) => b.earned);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-2xl font-bold">Your dashboard</h1>
        <Link href="/my-courses" className="shrink-0 text-sm font-medium underline" style={{ color: "var(--accent)" }}>
          See all my courses →
        </Link>
      </div>

      <section aria-label="Your stats" className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <StatTile label="Current streak" value={`🔥 ${streak}`} hint={`${streak === 1 ? "day" : "days"}`} />
        <StatTile label="Best streak" value={String(bestStreak)} hint={`${bestStreak === 1 ? "day" : "days"}`} />
        <StatTile label="Lessons completed" value={String(lessonsCompleted)} />
        <StatTile
          label="Recall accuracy"
          value={`${stats.recallAccuracy}%`}
          hint={stats.recallTotal > 0 ? `${stats.recallGotIt} of ${stats.recallTotal} got it` : "no attempts yet"}
        />
        <StatTile
          label="Quiz average"
          value={`${stats.quizAvg}%`}
          hint={`${stats.quizCount} attempt${stats.quizCount === 1 ? "" : "s"}`}
        />
      </section>

      <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">This week</h2>
        <div className="mt-3">
          <WeekBars week={week} />
        </div>
      </section>

      {full ? (
        <section aria-label="Level and badges" className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Level {level}</h2>
              <span className="text-xs font-medium tabular-nums text-neutral-500">{xp.toLocaleString()} XP</span>
            </div>
            <div className="mt-3">
              <ProgressBar percent={(xpIntoLevel / xpForLevel) * 100} />
            </div>
            <p className="mt-2 text-xs text-neutral-500">
              {xpForLevel - xpIntoLevel} XP to level {level + 1}
            </p>
          </div>

          {earnedBadges.length > 0 ? (
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Badges</h2>
              <ul className="mt-3 flex flex-wrap gap-3">
                {badges.map((b) => (
                  <li
                    key={b.key}
                    title={b.label}
                    className={`flex flex-col items-center gap-1 text-center ${b.earned ? "" : "opacity-30 grayscale"}`}
                  >
                    <span className="text-2xl" aria-hidden>
                      {b.icon}
                    </span>
                    <span className="w-14 text-[10px] leading-tight text-neutral-500">{b.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Credentials</h2>
        {stats.credentials.length === 0 ? (
          <p className="mt-2 text-sm text-neutral-500">Finish a course to earn your first credential.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {stats.credentials.map((c) => (
              <li key={c.token}>
                <Link
                  href={`/verify/${c.token}`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white p-4 hover:border-current dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <span className="font-medium">{c.courseTitle}</span>
                  <span className="shrink-0 text-xs text-neutral-500">
                    {c.completedAt.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Manage your profile</h2>
        <div className="mt-3">
          <DashboardProfileForm />
        </div>
      </section>
    </main>
  );
}
