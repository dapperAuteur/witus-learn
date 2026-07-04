import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadCourseView } from "@/lib/course-access";
import { getUserCourseQuizAttempts } from "@/db/queries/quiz-attempts";
import { getUserCourseRecallStats } from "@/db/queries/recall";
import type { QuizContent } from "@/lib/quiz";

export const metadata: Metadata = { title: "Your results" };

type Params = { params: Promise<{ username: string; courseSlug: string }> };

function pct(correct: number, total: number): number {
  return total > 0 ? Math.round((correct / total) * 100) : 0;
}

// Compact score-over-time sparkline (single series → one accent hue, no legend; the attempt
// list below is the accessible table, and each point carries a native <title> for hover).
function Sparkline({ scores }: { scores: number[] }) {
  if (scores.length < 2) return null;
  const w = 140;
  const h = 32;
  const pad = 4;
  const n = scores.length;
  const x = (i: number) => pad + (i * (w - 2 * pad)) / (n - 1);
  const y = (s: number) => pad + (1 - s / 100) * (h - 2 * pad); // 0–100 band, inverted
  const d = scores.map((s, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(s).toFixed(1)}`).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} role="img" aria-label={`Score trend: ${scores.join("%, ")}%`}>
      <path d={d} fill="none" stroke="var(--accent)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      {scores.map((s, i) => (
        <circle key={i} cx={x(i)} cy={y(s)} r={i === n - 1 ? 3 : 1.8} fill="var(--accent)">
          <title>{`Attempt ${i + 1}: ${s}%`}</title>
        </circle>
      ))}
    </svg>
  );
}

// A learner's own results for one course: quiz scores over time (per lesson), per-question
// performance across retries, and in-lesson recall accuracy. Tenant + enrollment scoped via
// loadCourseView (a foreign tenant's URL 404s).
export default async function CourseResultsPage({ params }: Params) {
  const { username, courseSlug } = await params;
  const view = await loadCourseView(username, courseSlug);
  if (!view) notFound();
  const { course, tenant, session, lessons, modules } = view;
  const base = `/${username}/${courseSlug}`;

  if (!session) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold">Your results</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          <Link href="/login" className="underline">Sign in</Link> to see your quiz and recall history.
        </p>
      </main>
    );
  }

  const [attempts, recall] = await Promise.all([
    getUserCourseQuizAttempts(tenant.id, session.user.id, course.id),
    getUserCourseRecallStats(tenant.id, session.user.id, course.id),
  ]);

  const lessonById = new Map(lessons.map((l) => [l.id, l]));
  // Group attempts by lesson, preserving oldest-first order.
  const byLesson = new Map<string, typeof attempts>();
  for (const a of attempts) {
    const list = byLesson.get(a.lessonId) ?? [];
    list.push(a);
    byLesson.set(a.lessonId, list);
  }

  // Rollups (subject view): use each quiz's LATEST attempt so a rollup reflects where you stand now.
  const latestByLesson = new Map<string, (typeof attempts)[number]>();
  for (const [lid, list] of byLesson) latestByLesson.set(lid, list[list.length - 1]);
  const latests = [...latestByLesson.values()];
  const courseAvg = latests.length ? Math.round(latests.reduce((s, a) => s + a.score, 0) / latests.length) : null;
  const coursePassed = latests.filter((a) => a.passed).length;
  // Per-module average (a module = a "subject"). Only modules with at least one attempted quiz show.
  const moduleRollups = modules
    .map((m) => {
      const qs = [...latestByLesson.entries()]
        .filter(([lid]) => lessonById.get(lid)?.moduleId === m.id)
        .map(([, a]) => a);
      if (qs.length === 0) return null;
      return {
        title: m.title,
        count: qs.length,
        avg: Math.round(qs.reduce((s, a) => s + a.score, 0) / qs.length),
        passed: qs.filter((a) => a.passed).length,
      };
    })
    .filter((r): r is NonNullable<typeof r> => r !== null);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">Your results</h1>
        <Link href={base} className="text-sm underline">← {course.title}</Link>
      </div>

      <section className="mt-6 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Quick recall</h2>
        {recall.accuracy === null ? (
          <p className="mt-2 text-sm text-neutral-500">No recall attempts yet.</p>
        ) : (
          <p className="mt-2">
            <span className="text-2xl font-bold" style={{ color: "var(--accent)" }}>{recall.accuracy}%</span>{" "}
            recalled correctly <span className="text-neutral-500">({recall.gotIt}/{recall.attempts} attempts)</span>
          </p>
        )}
      </section>

      {courseAvg !== null ? (
        <section className="mt-6 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">By subject</h2>
          <p className="mt-2">
            <span className="text-2xl font-bold" style={{ color: "var(--accent)" }}>{courseAvg}%</span>{" "}
            course average <span className="text-neutral-500">({coursePassed}/{latests.length} quizzes passed)</span>
          </p>
          {moduleRollups.length > 1 ? (
            <ul className="mt-3 space-y-1 text-sm">
              {moduleRollups.map((m) => (
                <li key={m.title} className="flex items-center justify-between gap-3">
                  <span className="min-w-0 flex-1 truncate">{m.title}</span>
                  <span className="shrink-0 text-neutral-500">
                    {m.passed}/{m.count} passed ·{" "}
                    <span className={m.avg >= 80 ? "text-green-700 dark:text-green-400" : m.avg >= 50 ? "text-amber-600" : "text-red-600"}>{m.avg}%</span>
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ) : null}

      <section className="mt-6">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">Quizzes over time</h2>
        {byLesson.size === 0 ? (
          <p className="text-sm text-neutral-500">No quiz attempts yet. Take a quiz and your scores show up here.</p>
        ) : (
          <div className="space-y-6">
            {[...byLesson.entries()].map(([lessonId, list]) => {
              const lesson = lessonById.get(lessonId);
              const title = lesson?.title ?? "Quiz";
              const best = Math.max(...list.map((a) => a.score));
              const latest = list[list.length - 1];
              // Per-question hit rate across this lesson's attempts.
              const perQ = new Map<number, { correct: number; total: number }>();
              for (const a of list) {
                for (const r of a.responses ?? []) {
                  const agg = perQ.get(r.questionIndex) ?? { correct: 0, total: 0 };
                  agg.total += 1;
                  if (r.correct) agg.correct += 1;
                  perQ.set(r.questionIndex, agg);
                }
              }
              const quiz = lesson?.quizContent as QuizContent | null;
              return (
                <article key={lessonId} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <span className="text-sm text-neutral-500">
                      {list.length} attempt{list.length === 1 ? "" : "s"} · best {best}% · latest {latest.score}%
                      {latest.passed ? " · passed" : ""}
                    </span>
                  </div>

                  {list.length >= 2 ? (
                    <div className="mt-2" aria-hidden={false}>
                      <Sparkline scores={list.map((a) => a.score)} />
                    </div>
                  ) : null}

                  <ol className="mt-3 space-y-1 text-sm">
                    {list.map((a) => (
                      <li key={a.id} className="flex items-center justify-between gap-3">
                        <span className="text-neutral-500">{a.createdAt.toLocaleDateString()} {a.createdAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                        <span className={a.passed ? "text-green-700 dark:text-green-400" : "text-red-600"}>
                          {a.correct}/{a.total} ({a.score}%)
                        </span>
                      </li>
                    ))}
                  </ol>

                  {perQ.size > 0 ? (
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">By question</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        {[...perQ.entries()].sort((a, b) => a[0] - b[0]).map(([qi, agg]) => {
                          const prompt = quiz?.questions?.[qi]?.prompt ?? `Question ${qi + 1}`;
                          const rate = pct(agg.correct, agg.total);
                          return (
                            <li key={qi} className="flex items-start justify-between gap-3">
                              <span className="min-w-0 flex-1 truncate text-neutral-700 dark:text-neutral-300">{prompt}</span>
                              <span className={rate >= 100 ? "shrink-0 text-green-700 dark:text-green-400" : rate === 0 ? "shrink-0 text-red-600" : "shrink-0 text-amber-600"}>
                                {agg.correct}/{agg.total} right
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null}

                  {lesson?.slug ? (
                    <Link href={`${base}/lesson/${lesson.slug}`} className="mt-3 inline-block text-sm underline" style={{ color: "var(--accent)" }}>
                      Retake →
                    </Link>
                  ) : null}
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
