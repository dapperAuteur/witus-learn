import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadCourseView } from "@/lib/course-access";
import { getUserCourseQuizAttempts } from "@/db/queries/quiz-attempts";
import { getUserCourseRecallStats } from "@/db/queries/recall";
import { questionKey, type QuizContent, type QuizQuestion } from "@/lib/quiz";

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

// The ACTIVE learner's results for one course: quiz scores over time (per lesson), per-question
// performance across retries, and in-lesson recall accuracy. If a parent is studying as a managed
// child, this shows the child's results, not the parent's. Tenant + enrollment scoped via
// loadCourseView (a foreign tenant's URL 404s).
export default async function CourseResultsPage({ params }: Params) {
  const { username, courseSlug } = await params;
  const view = await loadCourseView(username, courseSlug);
  if (!view) notFound();
  // An unvetted ("Coming soon") course has no lessons this viewer can take, so it can have no
  // results for them either. 404 rather than render an empty scoreboard for a closed course.
  if (view.isComingSoon) notFound();
  const { course, tenant, session, activeLearnerId, lessons, modules } = view;
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

  // The active learner's results (self, or a managed child if a parent is studying as one) —
  // activeLearnerId is re-verified server-side inside loadCourseView, never trusted from a cookie here.
  const learnerId = activeLearnerId ?? session.user.id;
  const [attempts, recall] = await Promise.all([
    getUserCourseQuizAttempts(tenant.id, learnerId, course.id),
    getUserCourseRecallStats(tenant.id, learnerId, course.id),
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
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">Quick recall</h2>
        {recall.accuracy === null ? (
          <p className="mt-2 text-sm text-neutral-600">No recall attempts yet.</p>
        ) : (
          <p className="mt-2">
            <span className="text-2xl font-bold" style={{ color: "var(--accent)" }}>{recall.accuracy}%</span>{" "}
            recalled correctly <span className="text-neutral-600">({recall.gotIt}/{recall.attempts} attempts)</span>
          </p>
        )}
      </section>

      {courseAvg !== null ? (
        <section className="mt-6 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">By subject</h2>
          <p className="mt-2">
            <span className="text-2xl font-bold" style={{ color: "var(--accent)" }}>{courseAvg}%</span>{" "}
            course average <span className="text-neutral-600">({coursePassed}/{latests.length} quizzes passed)</span>
          </p>
          {moduleRollups.length > 1 ? (
            <ul className="mt-3 space-y-1 text-sm">
              {moduleRollups.map((m) => (
                <li key={m.title} className="flex items-center justify-between gap-3">
                  <span className="min-w-0 flex-1 truncate">{m.title}</span>
                  <span className="shrink-0 text-neutral-600">
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
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-600">Quizzes over time</h2>
        {byLesson.size === 0 ? (
          <p className="text-sm text-neutral-600">No quiz attempts yet. Take a quiz and your scores show up here.</p>
        ) : (
          <div className="space-y-6">
            {[...byLesson.entries()].map(([lessonId, list]) => {
              const lesson = lessonById.get(lessonId);
              const title = lesson?.title ?? "Quiz";
              const best = Math.max(...list.map((a) => a.score));
              const latest = list[list.length - 1];
              const quiz = lesson?.quizContent as QuizContent | null;
              // Map each CURRENT question's stable key (and its original index, for pre-key rows) to
              // its prompt + display order, so per-question history lines up even after a reorder.
              const promptByKey = new Map<string, string>();
              const orderByKey = new Map<string, number>();
              // Also keep the whole question (options + correctIndex) so we can replay the learner's
              // chosen option vs the right one — server-side only, so correctIndex never leaks to a
              // live quiz; here the attempt is already over.
              const questionByKey = new Map<string, QuizQuestion>();
              quiz?.questions?.forEach((q, i) => {
                const k = questionKey(q.prompt);
                promptByKey.set(k, q.prompt);
                orderByKey.set(k, i);
                questionByKey.set(k, q);
                promptByKey.set(String(i), q.prompt); // fallback: old rows keyed by original index
                orderByKey.set(String(i), i);
                questionByKey.set(String(i), q);
              });
              // Per-question hit rate across this lesson's attempts, keyed by stable identity.
              const perQ = new Map<string, { correct: number; total: number; prompt: string }>();
              for (const a of list) {
                for (const r of a.responses ?? []) {
                  const key = r.questionKey ?? String(r.questionIndex);
                  const prompt =
                    promptByKey.get(key) ?? promptByKey.get(String(r.questionIndex)) ?? `Question ${r.questionIndex + 1}`;
                  const agg = perQ.get(key) ?? { correct: 0, total: 0, prompt };
                  agg.total += 1;
                  if (r.correct) agg.correct += 1;
                  perQ.set(key, agg);
                }
              }
              return (
                <article key={lessonId} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <span className="text-sm text-neutral-600">
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
                        <span className="text-neutral-600">{a.createdAt.toLocaleDateString()} {a.createdAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                        <span className={a.passed ? "text-green-700 dark:text-green-400" : "text-red-600"}>
                          {a.correct}/{a.total} ({a.score}%)
                        </span>
                      </li>
                    ))}
                  </ol>

                  {perQ.size > 0 ? (
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">By question</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        {[...perQ.entries()]
                          .sort((a, b) => (orderByKey.get(a[0]) ?? 999) - (orderByKey.get(b[0]) ?? 999))
                          .map(([key, agg]) => {
                          const rate = pct(agg.correct, agg.total);
                          return (
                            <li key={key} className="flex items-start justify-between gap-3">
                              <span className="min-w-0 flex-1 truncate text-neutral-700 dark:text-neutral-300">{agg.prompt}</span>
                              <span className={rate >= 100 ? "shrink-0 text-green-700 dark:text-green-400" : rate === 0 ? "shrink-0 text-red-600" : "shrink-0 text-amber-600"}>
                                {agg.correct}/{agg.total} right
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null}

                  {latest.responses?.length ? (
                    <details className="mt-4">
                      <summary className="cursor-pointer text-xs font-semibold uppercase tracking-wide text-neutral-600">
                        Review your answers · latest attempt ({latest.createdAt.toLocaleDateString()})
                      </summary>
                      <ol className="mt-2 space-y-2 text-sm">
                        {latest.responses.map((r, ri) => {
                          // Match the response to the CURRENT question by stable key (falls back to
                          // the original index for pre-key rows). Skip a question deleted since.
                          const q =
                            questionByKey.get(r.questionKey ?? "") ?? questionByKey.get(String(r.questionIndex));
                          if (!q) return null;
                          const chosen = q.options[r.optionIndex] ?? "-";
                          const answer = q.options[q.correctIndex] ?? "-";
                          return (
                            <li key={ri} className="rounded-md border border-neutral-200 p-2 dark:border-neutral-800">
                              <p className="font-medium text-neutral-800 dark:text-neutral-200">{q.prompt}</p>
                              <p className={r.correct ? "mt-1 text-green-700 dark:text-green-400" : "mt-1 text-red-600"}>
                                {r.correct ? "✓" : "✗"} You chose: {chosen}
                              </p>
                              {!r.correct ? (
                                <p className="mt-0.5 text-neutral-700 dark:text-neutral-300">Correct answer: {answer}</p>
                              ) : null}
                              {q.explanation ? <p className="mt-1 text-xs text-neutral-600">{q.explanation}</p> : null}
                            </li>
                          );
                        })}
                      </ol>
                    </details>
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
