import type { Metadata } from "next";
import Link from "next/link";
import { getScopedDb } from "@/db/scoped";
import { requirePlatformOwner } from "@/lib/session";
import { MIN_BANK, compareWorstFirst } from "@/lib/quiz-integrity";

export const metadata: Metadata = {
  title: "Quiz integrity",
  description:
    "Every course's quizzes, worst first: option shuffle, length balance, links back to the lesson, and explanations.",
};

// ─────────────────────────────────────────────────────────────────────────────
// /admin/quiz-integrity: the owner's view of the course-page quiz panel, one row per course in this
// school, worst first (plans/93 section 3). It doubles as the length-balance campaign's progress bar:
// the courses at the top are the next ones to fix, and the share at the top of the page is the bar.
//
// DERIVED AT REQUEST TIME, like /admin/graph: no table, no migration, no badge to go stale. The counts
// come from sdb.listQuizIntegrity(), where Postgres returns option LENGTHS rather than quiz JSON and
// src/lib/quiz-integrity.ts (the code the lint guards run) does the measuring.
//
// Owner-only via requirePlatformOwner() (an isPlatformOwner check) and `ownerOnly: true` in ADMIN_NAV.
// Every read is tenant-scoped through ScopedDb, so "every course" means THIS school's.
// ─────────────────────────────────────────────────────────────────────────────

const pct = (n: number, total: number) => (total > 0 ? Math.round((n / total) * 100) : 0);

/** "3 of 4" with its share as a percentage. */
function Share({ n, total }: { n: number; total: number }) {
  return (
    <span className="tabular-nums">
      {n} of {total}
      <span className="ml-1 text-xs text-neutral-600 dark:text-neutral-400">({pct(n, total)}%)</span>
    </span>
  );
}

export default async function QuizIntegrityPage() {
  await requirePlatformOwner();
  const sdb = await getScopedDb();
  const [courses, integrity] = await Promise.all([
    sdb.listCourses({ includeUnpublished: true }),
    sdb.listQuizIntegrity(),
  ]);

  const rows = courses
    .map((c) => ({ id: c.id, title: c.title, isPublished: c.isPublished, summary: integrity.get(c.id) ?? null }))
    .sort((a, b) => compareWorstFirst(a.summary, b.summary) || a.title.localeCompare(b.title));

  const measured = rows.reduce((n, r) => n + (r.summary?.balance?.measured ?? 0), 0);
  const passing = rows.reduce((n, r) => n + (r.summary?.balance?.passing ?? 0), 0);
  const withQuizzes = rows.filter((r) => r.summary).length;
  const cleanCourses = rows.filter((r) => r.summary?.balance && r.summary.balance.passing === r.summary.balance.measured).length;
  const measuredCourses = rows.filter((r) => r.summary?.balance).length;
  const share = pct(passing, measured);

  return (
    <main className="py-8">
      <Link href="/admin" className="text-sm underline" style={{ color: "var(--accent)" }}>
        ← Admin
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Quiz integrity</h1>
      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
        What each course&apos;s &ldquo;How this course&apos;s quizzes are built&rdquo; panel says, for every course in this
        school, worst first. A quiz passes the length check when no length position (shortest, second shortest,
        second longest, longest) beats chance by more than 15 points, so the right answer cannot be picked out by
        length. Quizzes with fewer than {MIN_BANK} questions are too small to measure.
      </p>

      <section aria-labelledby="progress-heading" className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 id="progress-heading" className="text-lg font-semibold">
          Length balance across the school
        </h2>
        {measured > 0 ? (
          <>
            <p className="mt-1 text-sm">
              <strong className="tabular-nums">{passing}</strong> of <strong className="tabular-nums">{measured}</strong>{" "}
              quizzes long enough to measure pass ({share}%). {cleanCourses} of {measuredCourses}{" "}
              {measuredCourses === 1 ? "course passes" : "courses pass"} on every measured quiz.
            </p>
            <div
              className="mt-3 h-3 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"
              aria-hidden="true"
            >
              <div className="h-full rounded-full" style={{ width: `${share}%`, background: "var(--accent)" }} />
            </div>
          </>
        ) : (
          <p className="mt-1 text-sm text-neutral-600">No quiz in this school has {MIN_BANK} or more questions yet.</p>
        )}
      </section>

      <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
        Measured from the database: the quiz content as last seeded, published quiz lessons only. The lint guards
        (check-longest-option, check-shortest-option and check-length-balance in <code>pnpm lint</code>) measure the
        authored source files instead and skip any question with a computed option, and the database counts
        characters slightly differently from JavaScript, so a figure here can differ slightly from lint. The lint
        figures are the ones that gate a commit; a course just fixed in source shows here after its next seed.
      </p>

      <p className="mt-4 text-sm text-neutral-600">
        {rows.length} {rows.length === 1 ? "course" : "courses"}, {withQuizzes} with a quiz.
      </p>

      {rows.length > 0 ? (
        <div className="mt-2 overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
          <table className="w-full min-w-[44rem] text-sm">
            <caption className="sr-only">Quiz integrity per course, worst first</caption>
            <thead>
              <tr className="border-b border-neutral-200 text-left text-neutral-600 dark:border-neutral-800">
                <th scope="col" className="p-3 font-medium">Course</th>
                <th scope="col" className="p-3 font-medium">Length balance</th>
                <th scope="col" className="p-3 font-medium">Quizzes</th>
                <th scope="col" className="p-3 font-medium">Shuffled</th>
                <th scope="col" className="p-3 font-medium">Linked to a lesson</th>
                <th scope="col" className="p-3 font-medium">Explained</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const s = r.summary;
                return (
                  <tr key={r.id} className="border-b border-neutral-100 align-top last:border-0 dark:border-neutral-800/60">
                    <th scope="row" className="p-3 text-left font-medium">
                      <Link href={`/teach/${r.id}`} className="inline-flex min-h-11 items-center hover:underline pointer-coarse:min-h-12">
                        {r.title}
                      </Link>
                      {!r.isPublished ? <span className="ml-2 text-xs font-normal text-neutral-600">unpublished</span> : null}
                    </th>
                    {s ? (
                      <>
                        <td className="p-3">
                          {s.balance ? (
                            <>
                              <Share n={s.balance.passing} total={s.balance.measured} />
                              {s.balance.passing < s.balance.measured ? (
                                <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-xs text-amber-900 dark:bg-amber-950 dark:text-amber-200">
                                  {s.balance.measured - s.balance.passing} to fix
                                </span>
                              ) : null}
                            </>
                          ) : (
                            <span className="text-neutral-600">too small to measure</span>
                          )}
                        </td>
                        <td className="p-3 tabular-nums">
                          {s.quizzes}
                          <div className="text-xs text-neutral-600">{s.questions} questions</div>
                        </td>
                        <td className="p-3"><Share n={s.shuffled} total={s.quizzes} /></td>
                        <td className="p-3"><Share n={s.tied} total={s.questions} /></td>
                        <td className="p-3"><Share n={s.explained} total={s.questions} /></td>
                      </>
                    ) : (
                      <td colSpan={5} className="p-3 text-neutral-600">No quiz in this course.</td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-2 text-sm text-neutral-600">This school has no courses yet.</p>
      )}
    </main>
  );
}
