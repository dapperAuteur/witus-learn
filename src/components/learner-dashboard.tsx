import Link from "next/link";
import type { LearnerDashboard, DashboardCourse, NextLesson } from "@/db/queries/dashboard";
import { ProgressBar, MasteryRing, WeekBars } from "@/components/progress-bits";

const TYPE_ICON: Record<string, string> = {
  text: "📖",
  exercise: "✍️",
  quiz: "🧠",
  map: "🗺️",
  video: "🎬",
  "360video": "🎬",
  audio: "🎧",
  assignment: "📝",
};
const icon = (t: string) => TYPE_ICON[t] ?? "📄";

function courseHref(d: DashboardCourse) {
  return d.username && d.course.slug ? `/${d.username}/${d.course.slug}` : `/course/${d.course.id}`;
}
function lessonHref(d: DashboardCourse, l: NextLesson) {
  return d.username && d.course.slug ? `/${d.username}/${d.course.slug}/lesson/${l.slug}` : `/course/${d.course.id}`;
}

// The learner home (Direction B — mastery dashboard). Resume + Up next + course
// mastery on the left; streak / weekly activity / milestone on the right. The
// gamification dose (off / light / full) is per-tenant.
export function LearnerDashboardView({
  data,
  name,
  gamification = "light",
}: {
  data: LearnerDashboard;
  name: string;
  gamification?: "off" | "light" | "full";
}) {
  const { resume, upNext, courses, streak, bestStreak, week, xp, level, xpIntoLevel, xpForLevel, badges } = data;
  const next = upNext[0] ?? null;
  const remaining = resume ? Math.max(0, resume.total - resume.completed) : 0;
  const showActivity = gamification !== "off";
  const full = gamification === "full";
  const earnedBadges = badges.filter((b) => b.earned);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">Welcome back, {name}</h1>
          <p className="mt-0.5 text-sm text-neutral-500">
            {resume
              ? remaining > 0
                ? `You're ${remaining} lesson${remaining === 1 ? "" : "s"} from finishing ${resume.course.title}.`
                : "Pick up where you left off."
              : "Ready to start something new?"}
          </p>
        </div>
        <Link href="/explore" className="shrink-0 text-sm font-medium underline" style={{ color: "var(--accent)" }}>
          Browse catalog →
        </Link>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* LEFT */}
        <div className="space-y-6 lg:col-span-2">
          {resume ? (
            <section className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center">
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Continue</div>
                  <div className="mt-0.5 truncate text-lg font-bold">{next ? next.title : resume.course.title}</div>
                  <div className="mt-1 text-sm text-neutral-500">{resume.course.title}</div>
                  <div className="mt-3 flex items-center gap-3">
                    <ProgressBar percent={resume.percent} className="flex-1" />
                    <span className="text-xs font-medium tabular-nums text-neutral-500">
                      {resume.completed} of {resume.total}
                    </span>
                  </div>
                </div>
                <Link
                  href={next ? lessonHref(resume, next) : courseHref(resume)}
                  className="grid min-h-11 place-items-center rounded-xl px-6 text-center font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg, #fff)" }}
                >
                  Continue →
                </Link>
              </div>
            </section>
          ) : (
            <section className="rounded-2xl border border-dashed border-neutral-300 p-8 text-center dark:border-neutral-700">
              <p className="font-medium">You&apos;ve finished everything you&apos;re enrolled in. 🎉</p>
              <Link href="/explore" className="mt-2 inline-block text-sm underline" style={{ color: "var(--accent)" }}>
                Find your next course →
              </Link>
            </section>
          )}

          {upNext.length > 0 && resume ? (
            <section className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Up next</div>
              <ul className="mt-3 divide-y divide-neutral-100 dark:divide-neutral-800">
                {upNext.map((l) => (
                  <li key={l.slug}>
                    <Link href={lessonHref(resume, l)} className="flex items-center gap-3 py-2.5 hover:opacity-80">
                      <span aria-hidden className="grid h-8 w-8 place-items-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                        {icon(l.lessonType)}
                      </span>
                      <span className="flex-1 text-sm font-medium">{l.title}</span>
                      <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500 dark:bg-neutral-800">
                        {l.lessonType}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Your courses</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {courses.map((d) => (
                <Link
                  key={d.course.id}
                  href={courseHref(d)}
                  className="rounded-xl border border-neutral-200 bg-white p-4 hover:border-current dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="flex items-center justify-between">
                    <span className="truncate text-sm font-semibold">{d.course.title}</span>
                    <span className="ml-2 shrink-0 text-xs font-semibold" style={{ color: "var(--accent)" }}>
                      {d.percent}%
                    </span>
                  </div>
                  <ProgressBar percent={d.percent} className="mt-2 h-1.5" />
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT RAIL */}
        <aside className="space-y-6">
          {full ? (
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Level {level}</div>
                <div className="text-xs font-medium tabular-nums text-neutral-500">{xp.toLocaleString()} XP</div>
              </div>
              <div className="mt-3">
                <ProgressBar percent={(xpIntoLevel / xpForLevel) * 100} />
              </div>
              <p className="mt-2 text-xs text-neutral-500">
                {xpForLevel - xpIntoLevel} XP to level {level + 1}
              </p>
            </div>
          ) : null}

          {showActivity ? (
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">This week</div>
              <div className="mt-3">
                <WeekBars week={week} />
              </div>
              <p className="mt-3 text-sm">
                <strong className="tabular-nums">{week.reduce((s, d) => s + d.count, 0)}</strong>{" "}
                <span className="text-neutral-500">lessons completed</span>
              </p>
            </div>
          ) : null}

          {showActivity ? (
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 text-center dark:border-neutral-800 dark:bg-neutral-900">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Streak</div>
              <div className="mt-2 text-4xl font-extrabold text-orange-500 tabular-nums">
                {streak} <span aria-hidden>🔥</span>
              </div>
              <p className="mt-1 text-xs text-neutral-500">
                {streak === 0 ? "Complete a lesson today to start one." : `Best: ${bestStreak} day${bestStreak === 1 ? "" : "s"}`}
              </p>
            </div>
          ) : null}

          {full && earnedBadges.length > 0 ? (
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Badges</div>
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

          {resume ? (
            <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800" style={{ background: "color-mix(in srgb, var(--accent) 8%, transparent)" }}>
              <div className="flex items-center gap-3">
                <MasteryRing percent={resume.percent} size={64} />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Next milestone</div>
                  <p className="mt-0.5 text-sm font-semibold">Finish {resume.course.title}</p>
                  <p className="text-xs text-neutral-500">{remaining} lesson{remaining === 1 ? "" : "s"} to your certificate.</p>
                </div>
              </div>
            </div>
          ) : null}
        </aside>
      </div>
    </main>
  );
}
