/**
 * Measure a course instead of reading it.
 *
 *   pnpm audit:course <slug>                one course, full report
 *   pnpm audit:course --all                 every registered course, one line each
 *   pnpm audit:course --series <seriesSlug> every course in one series
 *   pnpm audit:course <slug> --spec         also check pools against the Tier-0 assessment spec
 *   pnpm audit:course --all --strict        exit 1 if anything structural is found
 *
 * WHY THIS EXISTS (plans/71 Tier 0.3). The nine WELL courses passed all twelve guards in `pnpm lint`
 * and every single one of them was missing its terminal-section quiz. Twenty-seven lessons appeared
 * only inside a final's pool, so a learner met them once, at the end, in a random draw. One lesson
 * had no question anywhere in its course. Nothing failed, because nothing was measuring: a guard
 * cannot see a hole it was not written to look for, and a human reading 139 lessons will not notice
 * that the fourth section of the fifth course has no quiz. A forty-line script found all of it in
 * one run.
 *
 * WHY IT IS A TOOL AND NOT A THIRTEENTH GUARD. The findings below are true of a lot of the existing
 * catalog, which was authored before any of this was a rule. A guard that fails on two hundred
 * legacy courses gets allowlisted into uselessness, which is worse than no guard (the same argument
 * `check-assessment-fit` makes about widening its rules). So this runs on demand, prints what it
 * finds, and exits 0 unless you ask for `--strict` — which is what a course's own final commit, or
 * a future per-course ratchet, would use.
 *
 * WHAT IT DELIBERATELY DOES NOT CHECK. Whether a question is any good, whether an explanation is
 * true, whether a section deserves its own quiz. Those are judgment calls, and the repo's rule is
 * that judgment belongs in the advisory LLM audits (`/api/courses/[id]/audit-reveals`), never in a
 * deterministic check.
 */

import type { AuthoredCourse, AuthoredLesson } from "./data/authored-course";
import { MAX_QUESTIONS_PER_ATTEMPT } from "../src/lib/quiz";
import { allSeedEntries, loadCourse, type SeedEntry } from "./lib/seed-registry";

/** The Tier-0 assessment spec from plans/71: pool sized by content density, serving a small subset
 *  so a retake draws fresh questions. Checked only under --spec, because the older catalog predates
 *  it and reporting every course against it would be noise rather than information. */
const WORDS_PER_QUESTION = 35;
const POOL_MIN = 40;
const POOL_MAX = 100;
const FINAL_POOL_MIN = 40;
const PASSING_SCORE = 80;
// Section quizzes are NOT checked for how many they serve. The spec says 5, but any value from 5 to
// 10 satisfies the instruction the pools were sized under, and `toSafeQuiz` caps every attempt at 10
// regardless, so a bank serving 8 is a choice rather than a defect. Flagging it would contradict a
// decision instead of finding a bug, which is how a check earns an allowlist.
/** How far under target a pool may sit before it is worth saying. A 65-against-67 miss is rounding,
 *  not a hole, and a check that reports it teaches people to skim the output. */
const POOL_TOLERANCE = 0.9;

/**
 * Courses whose pools are DELIBERATELY under the density target, with the decision that made them
 * so. Same shape and same purpose as the BACKLOG in check-standards-coverage and the ORPHAN_OK map
 * in check-page-reachability: a documented exception is a decision, an undocumented one is a bug.
 *
 * Never add a line here to make new content pass. Add one only when a human decided the gap, and
 * say who and when, so a later pass does not "fix" it.
 */
const SPEC_EXCEPTIONS: Record<string, string> = {
  // BAM, 2026-08-23. Three courses closed in the wave-1 assessment pass whose sections are SHORT,
  // so the pool rule's floor of 40 binds instead of its density half. Broadcasting's sections run
  // 600-726 words, how-to-research 712-869, off-grid-survival 546-933. Forty questions on 600 words
  // is one per fifteen words, which is precisely the trivia the density rule exists to prevent, and
  // padding to reach it would also walk straight into the length-tell guard. Each section was sized
  // at its own density target instead, every lesson in them is assessed, and the gap is deliberate.
  // Same decision, same reasoning, as well-movement-longevity below.
  "broadcasting-break-in":
    "BAM, 2026-08-23: sections run 600-726 words, so the floor of 40 binds rather than the density rule. Sized at density; every lesson is assessed. Padding to 40 would be trivia.",
  "how-to-research":
    "BAM, 2026-08-23: sections run 712-869 words, so the floor of 40 binds rather than the density rule. Sized at density; every lesson is assessed. Padding to 40 would be trivia.",
  "off-grid-survival":
    "BAM, 2026-08-23: sections run 546-933 words, so the floor of 40 binds rather than the density rule. Sized at density; every lesson is assessed. Padding to 40 would be trivia.",
  "well-movement-longevity":
    "BAM, 2026-08-20: four of five sections run 484-996 words, so the floor of 40 binds instead of the density rule. Offered drop-the-floor / merge / leave-the-gap; he chose to leave the gap and let the sections run smaller. Padding them would be exactly the trivia the rule exists to avoid.",
};

type FindingKind =
  | "section-without-quiz"
  | "lesson-never-assessed"
  | "final-only-lesson"
  | "orphan-source"
  | "question-without-source"
  | "pool-below-target"
  | "final-below-spec"
  | "passing-score-off-spec";

interface Finding {
  kind: FindingKind;
  detail: string;
}

interface SectionReport {
  name: string;
  lessons: number;
  words: number;
  reveals: number;
  pool: number | null;
  served: number | null;
  target: number;
}

interface CourseReport {
  slug: string;
  title: string;
  file: string;
  lessons: number;
  teaching: number;
  quizzes: number;
  questions: number;
  sections: SectionReport[];
  findings: Finding[];
}

const isQuiz = (l: AuthoredLesson) => !!l.quiz;
const words = (l: AuthoredLesson) => (l.body ? l.body.trim().split(/\s+/).filter(Boolean).length : 0);
const reveals = (l: AuthoredLesson) => (l.body?.match(/^:::reveal /gm) ?? []).length;
const targetPool = (w: number) =>
  Math.min(POOL_MAX, Math.max(POOL_MIN, Math.round(w / WORDS_PER_QUESTION)));
/** What an attempt actually serves, matching src/lib/quiz.ts rather than guessing. */
const served = (l: AuthoredLesson) => {
  const bank = l.quiz!.questions.length;
  const cap = Math.min(MAX_QUESTIONS_PER_ATTEMPT, bank);
  const asked = l.quiz!.questionsPerAttempt;
  return asked && asked > 0 ? Math.min(asked, cap) : cap;
};

function audit(entry: SeedEntry, course: AuthoredCourse, spec: boolean): CourseReport {
  const findings: Finding[] = [];
  const teaching = course.lessons.filter((l) => !isQuiz(l));
  const quizzes = course.lessons.filter(isQuiz);
  const slugs = new Set(course.lessons.map((l) => l.slug));

  // Which quiz lessons cite which teaching lesson, and from which section.
  const citedBy = new Map<string, { quiz: string; section: string | null }[]>();
  let unsourced = 0;
  for (const q of quizzes) {
    for (const question of q.quiz!.questions) {
      const src = (question as { sourceLessonSlug?: string }).sourceLessonSlug;
      if (!src) {
        unsourced++;
        continue;
      }
      if (!slugs.has(src)) {
        findings.push({
          kind: "orphan-source",
          detail: `${q.slug} cites "${src}", which is not a lesson in this course, so its review link resolves to nothing`,
        });
        continue;
      }
      const list = citedBy.get(src) ?? [];
      list.push({ quiz: q.slug, section: q.section ?? null });
      citedBy.set(src, list);
    }
  }
  if (unsourced > 0) {
    findings.push({
      kind: "question-without-source",
      detail: `${unsourced} question(s) carry no sourceLessonSlug, so a wrong answer names no lesson to reread`,
    });
  }

  // Per section: is there a quiz, and how big is its pool against the density target.
  const order: string[] = [];
  const bySection = new Map<string, AuthoredLesson[]>();
  for (const l of course.lessons) {
    const name = l.section ?? "(no section)";
    if (!bySection.has(name)) {
      bySection.set(name, []);
      order.push(name);
    }
    bySection.get(name)!.push(l);
  }
  const sections: SectionReport[] = [];
  for (const name of order) {
    const ls = bySection.get(name)!;
    const teach = ls.filter((l) => !isQuiz(l));
    const w = teach.reduce((a, l) => a + words(l), 0);
    const quiz = ls.find(isQuiz);
    const target = targetPool(w);
    sections.push({
      name,
      lessons: teach.length,
      words: w,
      reveals: teach.reduce((a, l) => a + reveals(l), 0),
      pool: quiz ? quiz.quiz!.questions.length : null,
      served: quiz ? served(quiz) : null,
      target,
    });
    // A section with no teaching lessons is a quiz-only section, not a hole.
    if (!quiz && teach.length > 0 && name !== "(no section)") {
      findings.push({
        kind: "section-without-quiz",
        detail: `"${name}" has ${teach.length} teaching lesson(s) and no quiz, so nothing in it is ever assessed in its own context`,
      });
    }
    if (spec && !SPEC_EXCEPTIONS[entry.slug] && quiz && quiz.quiz!.questions.length < target * POOL_TOLERANCE) {
      findings.push({
        kind: "pool-below-target",
        detail: `"${name}" pools ${quiz.quiz!.questions.length} against a target of ${target} for ${w} words`,
      });
    }
  }

  // Never assessed, and assessed only outside its own section.
  for (const l of teaching) {
    const cites = citedBy.get(l.slug) ?? [];
    if (cites.length === 0) {
      findings.push({
        kind: "lesson-never-assessed",
        detail: `${l.slug} ("${l.title}") is taught and never appears in any question`,
      });
      continue;
    }
    const own = l.section ?? null;
    if (own && cites.every((c) => c.section !== own)) {
      findings.push({
        kind: "final-only-lesson",
        detail: `${l.slug} is only assessed outside its own section (${[...new Set(cites.map((c) => c.quiz))].join(", ")}), so a learner may meet it once, in a random draw`,
      });
    }
  }

  if (spec) {
    // The final is the last quiz lesson: the one every course ends on, whatever it is named.
    const final = [...quizzes].reverse()[0];
    if (final) {
      const n = final.quiz!.questions.length;
      if (n < FINAL_POOL_MIN || served(final) < MAX_QUESTIONS_PER_ATTEMPT) {
        findings.push({
          kind: "final-below-spec",
          detail: `${final.slug} pools ${n} serving ${served(final)}; the spec is ${FINAL_POOL_MIN}+ serving ${MAX_QUESTIONS_PER_ATTEMPT}`,
        });
      }
    }
    for (const q of quizzes) {
      const score = q.quiz!.passingScore;
      if (score !== PASSING_SCORE) {
        findings.push({
          kind: "passing-score-off-spec",
          detail: `${q.slug} passes at ${score ?? "the default"}, not ${PASSING_SCORE}`,
        });
      }
    }
  }

  return {
    slug: entry.slug,
    title: course.title,
    file: entry.file,
    lessons: course.lessons.length,
    teaching: teaching.length,
    quizzes: quizzes.length,
    questions: quizzes.reduce((a, q) => a + q.quiz!.questions.length, 0),
    sections,
    findings,
  };
}

function printOne(r: CourseReport, spec: boolean) {
  console.log(`\n${r.slug}: ${r.title}`);
  console.log(`  ${r.file} · ${r.teaching} teaching lesson(s), ${r.quizzes} quiz(zes), ${r.questions} pooled question(s)\n`);
  const head = spec
    ? "  section                                        lessons   words  reveals    pool  served  target"
    : "  section                                        lessons   words  reveals    pool  served";
  console.log(head);
  for (const s of r.sections) {
    const name = s.name.length > 44 ? `${s.name.slice(0, 43)}…` : s.name;
    const cells = [
      String(s.lessons).padStart(7),
      String(s.words).padStart(8),
      String(s.reveals).padStart(9),
      (s.pool == null ? "none" : String(s.pool)).padStart(8),
      (s.served == null ? "-" : String(s.served)).padStart(8),
    ];
    if (spec) cells.push(String(s.target).padStart(8));
    console.log(`  ${name.padEnd(44)}${cells.join("")}`);
  }
  if (r.findings.length === 0) {
    console.log("\n  No structural findings.");
    return;
  }
  console.log(`\n  ${r.findings.length} finding(s):`);
  for (const f of r.findings) console.log(`    [${f.kind}] ${f.detail}`);
}

async function main() {
  const argv = process.argv.slice(2);
  const spec = argv.includes("--spec");
  const strict = argv.includes("--strict");
  const all = argv.includes("--all");
  const seriesAt = argv.indexOf("--series");
  const series = seriesAt === -1 ? null : argv[seriesAt + 1];
  const slugs = argv.filter((a) => !a.startsWith("--") && a !== series);

  const entries = allSeedEntries();
  let targets: SeedEntry[];
  if (all) targets = entries;
  else if (series) targets = entries.filter((e) => e.seriesSlug === series);
  else targets = entries.filter((e) => slugs.includes(e.slug));

  if (targets.length === 0) {
    console.error(
      slugs.length || series
        ? `No registered course matched. Try \`pnpm audit:course --all\` to list what exists.`
        : `Usage: pnpm audit:course <slug> | --all | --series <seriesSlug>  [--spec] [--strict]`,
    );
    process.exit(1);
  }

  const reports: CourseReport[] = [];
  const unreadable: string[] = [];
  for (const e of targets) {
    const course = await loadCourse(e);
    if (!course) {
      unreadable.push(e.slug);
      continue;
    }
    reports.push(audit(e, course, spec));
  }

  const single = reports.length === 1 && !all && !series;
  if (single) {
    printOne(reports[0], spec);
  } else {
    for (const r of reports.sort((a, b) => b.findings.length - a.findings.length)) {
      const flag = r.findings.length ? String(r.findings.length).padStart(3) : "  .";
      console.log(
        `${flag}  ${r.slug.padEnd(38)} ${String(r.teaching).padStart(3)} lessons  ${String(r.questions).padStart(4)} questions  ${r.sections.length} section(s)`,
      );
    }
  }

  const byKind = new Map<FindingKind, number>();
  for (const r of reports) for (const f of r.findings) byKind.set(f.kind, (byKind.get(f.kind) ?? 0) + 1);
  const total = [...byKind.values()].reduce((a, b) => a + b, 0);

  console.log(
    `\nAudited ${reports.length} course(s)${unreadable.length ? `, ${unreadable.length} unreadable (generated modules not on disk)` : ""}: ${total} finding(s).`,
  );
  for (const [kind, n] of [...byKind.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(n).padStart(5)}  ${kind}`);
  }
  if (unreadable.length && all) {
    console.log(`\n  Unreadable: ${unreadable.slice(0, 8).join(", ")}${unreadable.length > 8 ? ` +${unreadable.length - 8} more` : ""}`);
  }

  if (strict && total > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
