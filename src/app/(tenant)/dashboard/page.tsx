import Link from "next/link";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { getSession } from "@/lib/session";
import { getActiveLearner } from "@/lib/active-learner";
import { getLearnerDashboard, getLearnerStats, getSpecializations } from "@/db/queries/dashboard";
import { getRecallHistory } from "@/db/queries/recall";
import { ProgressBar, WeekBars } from "@/components/progress-bits";
import { DashboardProfileForm } from "@/components/dashboard-profile-form";
import { OfflineDownloadsSummary } from "@/components/offline-downloads-manager";
import { RecallHistoryView } from "@/components/recall-history";

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

  // Stats reflect whoever the parent is currently studying as (self, or a managed child) —
  // getActiveLearner re-verifies the "act-as" cookie server-side on every call. The profile
  // section below stays on the signed-in account regardless (see "Manage your profile").
  const learner = await getActiveLearner(session);
  const activeLearnerId = learner?.id ?? session.user.id;
  const [dashboard, stats, recallHistory, specializations] = await Promise.all([
    getLearnerDashboard(tenant.id, activeLearnerId),
    getLearnerStats(tenant.id, activeLearnerId),
    getRecallHistory(tenant.id, activeLearnerId),
    getSpecializations(tenant.id, activeLearnerId),
  ]);
  // Only specializations the learner has STARTED (or earned). An untouched track renders
  // nothing: listing every possible combination would bury the credentials that are real.
  const startedSpecializations = specializations.filter((s) => s.completedCount > 0);
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

      {/* Check-yourself / quick-recall history: what was missed, when, how often — plus the
          "review again" spaced-recall list. Covers BOTH the inline :::reveal checks and the
          recall cards, since both grade into recall_attempts. */}
      <section aria-label="Check-yourself history" className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Check-yourself history</h2>
        <RecallHistoryView history={recallHistory} />
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

        {startedSpecializations.length > 0 ? (
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Specializations</h3>
            <p className="mt-1 text-xs text-neutral-500">
              A specialization is earned here by completing all three of its courses. It is a record on
              this site, not an external certification or license.
            </p>
            <ul className="mt-3 space-y-3">
              {startedSpecializations.map((s) => (
                <li
                  key={s.slug}
                  className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-medium">{s.title}</span>
                    {s.earned && s.earnedAt ? (
                      <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                        Earned{" "}
                        {s.earnedAt.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </span>
                    ) : (
                      <span className="shrink-0 text-xs font-medium tabular-nums text-neutral-500">
                        {s.completedCount} of {s.courses.length} courses
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">{s.description}</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {s.courses.map((c) => (
                      <li key={c.courseSlug} className="flex items-center gap-2">
                        <span aria-hidden="true">{c.completed ? "✓" : "○"}</span>
                        {c.completed && c.verificationToken ? (
                          <Link href={`/verify/${c.verificationToken}`} className="underline">
                            {c.title}
                          </Link>
                        ) : (
                          <span className="text-neutral-500">{c.title}</span>
                        )}
                        <span className="sr-only">{c.completed ? "completed" : "not completed yet"}</span>
                      </li>
                    ))}
                  </ul>
                  {!s.earned ? (
                    <p className="mt-2 text-xs text-neutral-500">
                      Still to finish: {s.remaining.map((c) => c.title).join(", ")}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      {/* Discoverability only — the manager itself lives at /downloads, which is DB-free and
          precached so it still works with no network. This card reads the browser's own caches
          client-side, so it never adds a server round-trip to the dashboard. */}
      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Downloads</h2>
        <OfflineDownloadsSummary />
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Manage your profile</h2>
        {learner?.isChild ? (
          <p className="mt-1 text-xs text-neutral-500">
            This is your account, {learner.name ?? "the learner above"} is a managed profile.
          </p>
        ) : null}
        <div className="mt-3">
          <DashboardProfileForm />
        </div>
      </section>
    </main>
  );
}
