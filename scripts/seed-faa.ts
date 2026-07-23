import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { parse } from "csv-parse/sync";
import { eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import { sequenceModuleItems } from "./lib/faa-quiz-placement";
import { cleanLessonMarkdown } from "./lib/faa-lesson-markdown";
import { AUTHORED_FAA_QUIZZES } from "./data/faa-part-107-quizzes";
import type { AuthoredCourse, AuthoredLesson } from "./data/authored-course";
import type { QuizContent } from "../src/lib/quiz";

// Imports the FAA Part 107 course (authored by CentOS, audio-first) from the
// gitignored content/drone-curriculum/academy-import/ into Learn.WitUS. Reads the
// per-module lesson JSONs (both their `lessons` AND their `review`) + quizzes CSV +
// glossary CSV, converts the CentOS quiz schema to ours, and seeds via the re-seedable
// importer.
//   pnpm seed:faa              # seed
//   pnpm seed:faa --dry-run    # print the module -> lesson/quiz/reveal breakdown, NO DB
//
// The dry run touches no database (Neon bills data transfer), so grouping and content
// transforms can be verified without a seed.

const CONTENT = join(process.cwd(), "content", "drone-curriculum", "academy-import");
const DRY_RUN = process.argv.includes("--dry-run");
const DUMP = process.argv.includes("--dump");

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

// Authoritative module titles, from content/.../00-course-metadata.md ("Module list (order)")
// and README-import.md. These become the course's SECTIONS: seed-authored-course.ts turns each
// distinct `section` label into a course_module, which the course page renders as a collapsible
// <details>. Without them FAA had zero modules and fell back to one flat list of ~90 lessons.
const MODULE_TITLES: Record<number, string> = {
  0: "Module 0 — Start Here",
  1: "Module 1 — Loading and Performance",
  2: "Module 2 — Regulations",
  3: "Module 3 — Airport Operations",
  4: "Module 4 — Radio Communications",
  5: "Module 5 — Airspace",
  6: "Module 6 — Sectional Charts",
  7: "Module 7 — Weather Theory",
  8: "Module 8 — Weather Services",
  9: "Module 9 — Aeronautical Decision Making",
  10: "Module 10 — Physiology and Night Operations",
  11: "Module 11 — Procedures and Maintenance",
  12: "Module 12 — Practice Exam",
  13: "Module 13 — Apply for Your Certificate",
};
function sectionFor(moduleOrder: number): string {
  return MODULE_TITLES[moduleOrder] ?? `Module ${moduleOrder}`;
}
/** "Module 5 — Airspace" -> "Airspace", for the review lesson's title. */
function topicFor(moduleOrder: number): string {
  return sectionFor(moduleOrder).replace(/^Module \d+\s*—\s*/, "");
}

// The audio-beat -> published-markdown conversion (beat headings, `:::reveal` checks, recall
// cards, the module-review Q/A runs, and the Carried Forward block) lives in
// scripts/lib/faa-lesson-markdown.ts so it can be unit-tested without loading this script.

// ---------------------------------------------------------------------------
// Source files
// ---------------------------------------------------------------------------

interface ModuleLesson {
  n: number;
  title: string;
  lessonMarkdown: string;
}

/** Each module JSON carries a `review` key BESIDE `lessons` — a ready-made recap of the module,
 *  same audio-beat markdown as any other lesson. The import ignored it for months and published
 *  the course without a single review. Modules 0, 12 and 13 ship `review: null` (course intro,
 *  practice exam, certificate paperwork — nothing to recap), so 11 modules have one. */
interface ModuleReview {
  lessonMarkdown: string;
  runTimeSec?: number;
}

interface SourceModule {
  moduleOrder: number;
  lessons: ModuleLesson[];
  review: ModuleReview | null;
}

function readModuleLessons(): SourceModule[] {
  const files = readdirSync(CONTENT).filter((f) => /^_module\d+-lessons\.json$/.test(f));
  return files
    .map((f) => {
      const moduleOrder = parseInt(f.match(/_module(\d+)/)![1], 10);
      const data = JSON.parse(readFileSync(join(CONTENT, f), "utf-8")) as {
        lessons?: ModuleLesson[];
        review?: ModuleReview | null;
      };
      return { moduleOrder, lessons: data.lessons ?? [], review: data.review ?? null };
    })
    .sort((a, b) => a.moduleOrder - b.moduleOrder);
}

// CentOS quiz schema -> witus QuizContent (options become a string[]; correctOptionId
// becomes the matching index; the citation is folded into the explanation).
interface CentOSQuiz {
  passingScore?: number;
  questions: {
    questionText: string;
    options: { id: string; text: string }[];
    correctOptionId: string;
    explanation?: string;
    citation?: string;
  }[];
}
function convertQuiz(c: CentOSQuiz): QuizContent {
  return {
    passingScore: c.passingScore ?? 80,
    questions: (c.questions ?? []).map((q) => {
      const idx = q.options.findIndex((o) => o.id === q.correctOptionId);
      const explanation = q.citation
        ? `${q.explanation ?? ""}\n\nReference: ${q.citation}`.trim()
        : q.explanation;
      return {
        prompt: q.questionText,
        options: q.options.map((o) => o.text),
        correctIndex: idx < 0 ? 0 : idx,
        explanation,
      };
    }),
  };
}

interface QuizRow {
  module_order: string;
  lesson_order: string;
  title: string;
  quiz_content: string;
  /** OPTIONAL, opt-in column. When set to a lesson `n` that exists in the same module,
   *  the importer places this quiz right AFTER that lesson (mid-module) instead of at the
   *  module end. Blank / absent / non-numeric / pointing at a missing lesson => the quiz
   *  keeps the legacy end-of-module placement. See `sequenceModuleItems`. */
  after_lesson_order?: string;
}
interface ModuleQuiz {
  moduleOrder: number;
  lessonOrder: number;
  title: string;
  quiz: QuizContent;
  origin: "csv" | "authored";
  /** Lesson `n` within the module to place this quiz after (opt-in). `undefined` => the
   *  quiz stays at the module end, which is every quiz today until the CSV is tagged. */
  afterLessonNumber?: number;
}
function readQuizzes(): ModuleQuiz[] {
  let rows: QuizRow[];
  try {
    const raw = readFileSync(join(CONTENT, "quizzes-import.csv"), "utf-8");
    rows = parse(raw, { columns: true, skip_empty_lines: true, relax_column_count: true }) as QuizRow[];
  } catch {
    return [];
  }
  return rows
    .filter((r) => r.quiz_content?.trim())
    .map((r) => {
      const after = r.after_lesson_order?.trim();
      return {
        moduleOrder: parseInt(r.module_order, 10),
        lessonOrder: parseInt(r.lesson_order, 10),
        title: r.title,
        quiz: convertQuiz(JSON.parse(r.quiz_content) as CentOSQuiz),
        origin: "csv" as const,
        // Only honour a clean positive integer; the placement helper still validates it
        // against the module's real lesson numbers and falls back to the end if it misses.
        ...(after && /^\d+$/.test(after) ? { afterLessonNumber: parseInt(after, 10) } : {}),
      };
    });
}

function readGlossary(): { term: string; definition: string }[] {
  try {
    const raw = readFileSync(join(CONTENT, "glossary.csv"), "utf-8");
    const rows = parse(raw, { columns: true, skip_empty_lines: true, relax_column_count: true }) as {
      term: string;
      definition: string;
    }[];
    const seen = new Set<string>();
    const out: { term: string; definition: string }[] = [];
    for (const r of rows) {
      const term = (r.term ?? "").trim();
      const key = term.toLowerCase();
      if (!term || seen.has(key)) continue;
      seen.add(key);
      out.push({ term, definition: (r.definition ?? "").trim() || term });
    }
    return out;
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Course assembly
// ---------------------------------------------------------------------------

interface BuildStats {
  modules: {
    order: number;
    section: string;
    lessons: number;
    /** The module's review lesson, when the source has one (modules 0/12/13 do not). */
    review: { title: string; reveals: number; recallCards: number } | null;
    quizzes: {
      title: string;
      questions: number;
      origin: "csv" | "authored";
      /** Lesson `n` this quiz was interleaved after, or null when it sits at the module end. */
      placedAfterLesson: number | null;
    }[];
    reveals: number;
    recallCards: number;
    unconvertedQa: number;
  }[];
}

function buildCourse(): { course: AuthoredCourse; stats: BuildStats } {
  const modules = readModuleLessons();
  const csvQuizzes = readQuizzes();
  const lessons: AuthoredLesson[] = [];
  const stats: BuildStats = { modules: [] };

  for (const m of modules) {
    const section = sectionFor(m.moduleOrder);
    const ordered = [...m.lessons].sort((a, b) => a.n - b.n);
    // n -> slug, so an authored quiz question can point at the lesson that teaches its answer.
    const slugByLessonNumber = new Map<number, string>();
    let reveals = 0;
    let recallCards = 0;
    let unconvertedQa = 0;

    // Build the lesson entries (keyed by `n`) but hold off pushing — quizzes may need to
    // interleave between them, so the final push order is decided by sequenceModuleItems below.
    const lessonEntryByN = new Map<number, AuthoredLesson>();
    for (const l of ordered) {
      const slug = `m${m.moduleOrder}-l${l.n}-${slugify(l.title)}`.slice(0, 100);
      slugByLessonNumber.set(l.n, slug);
      const cleaned = cleanLessonMarkdown(l.lessonMarkdown);
      reveals += cleaned.reveals;
      recallCards += cleaned.recall.length;
      unconvertedQa += cleaned.unconvertedQa;
      lessonEntryByN.set(l.n, {
        slug,
        title: l.title,
        section,
        body: cleaned.body,
        ...(cleaned.recall.length > 0 ? { recallContent: cleaned.recall } : {}),
      });
    }

    // The module REVIEW — a recap that sits at the module end, before the end-quizzes: review,
    // then test. Same `section` as the module's other lessons, so it lands inside the existing
    // collapsible section rather than orphaning itself into a new one.
    let review: BuildStats["modules"][number]["review"] = null;
    let reviewEntry: AuthoredLesson | null = null;
    if (m.review?.lessonMarkdown?.trim()) {
      const cleaned = cleanLessonMarkdown(m.review.lessonMarkdown, { review: true });
      reveals += cleaned.reveals;
      recallCards += cleaned.recall.length;
      unconvertedQa += cleaned.unconvertedQa;
      const title = `Module ${m.moduleOrder} Review — ${topicFor(m.moduleOrder)}`;
      reviewEntry = {
        slug: `m${m.moduleOrder}-review`,
        title,
        section,
        body: cleaned.body,
        ...(cleaned.recall.length > 0 ? { recallContent: cleaned.recall } : {}),
      };
      review = { title, reveals: cleaned.reveals, recallCards: cleaned.recall.length };
    }

    // Each module's quizzes. AUTHORED quizzes (scripts/data/faa-part-107-quizzes.ts) WIN over the
    // CSV import for any module they cover; modules they don't cover fall back to the CSV (1, 3, 12).
    //
    // Authored-wins matters because the CSV lives under /content, which is GITIGNORED — it is a
    // local-only artifact that does not travel with the repo. If precedence went the other way,
    // authored quizzes would only take effect on a machine where someone had also hand-deleted that
    // module's CSV rows, so the same commit would seed different quizzes on different machines.
    // Authored content is tracked, so it is the honest source of truth.
    //
    // By default a quiz sits at the module end; it opts into mid-module placement with
    // `afterLessonNumber` (authored) or the `after_lesson_order` column (CSV).
    const authoredForModule = AUTHORED_FAA_QUIZZES.filter((q) => q.moduleOrder === m.moduleOrder);
    const fromCsv = authoredForModule.length
      ? []
      : csvQuizzes
          .filter((q) => q.moduleOrder === m.moduleOrder)
          .sort((a, b) => a.lessonOrder - b.lessonOrder);
    const authored: ModuleQuiz[] = authoredForModule.map((q, i) => ({
          moduleOrder: q.moduleOrder,
          lessonOrder: 1000 + i, // stable ordering among same-module authored quizzes
          title: q.title,
          origin: "authored" as const,
          // A SECTION quiz opts in with `afterLessonNumber`; sequenceModuleItems then interleaves
          // it after that lesson instead of stacking it at the module end.
          ...(q.afterLessonNumber != null ? { afterLessonNumber: q.afterLessonNumber } : {}),
          quiz: {
            passingScore: q.passingScore ?? 80,
            // Rotating-pool controls flow straight into the QuizContent so `toSafeQuiz` serves a
            // fresh random subset (clamped to MAX_QUESTIONS_PER_ATTEMPT) and optionally shuffles.
            ...(q.questionsPerAttempt != null ? { questionsPerAttempt: q.questionsPerAttempt } : {}),
            ...(q.shuffleOptions != null ? { shuffleOptions: q.shuffleOptions } : {}),
            questions: q.questions.map((qq) => ({
              prompt: qq.prompt,
              options: qq.options,
              correctIndex: qq.correctIndex,
              explanation: qq.explanation,
              ...(slugByLessonNumber.has(qq.sourceLessonNumber)
                ? { sourceLessonSlug: slugByLessonNumber.get(qq.sourceLessonNumber) }
                : {}),
            })),
          },
        }));

    const quizzes = [...fromCsv, ...authored];
    const quizEntries = quizzes.map((q) => ({
      slug: `m${m.moduleOrder}-quiz-${q.lessonOrder}`,
      title: q.title,
      section,
      quiz: q.quiz,
    }));

    // Interleave: lessons in order, each quiz after the lesson it opts into, review, then any
    // remaining (untagged) quizzes at the module end. Untagged everywhere => the legacy layout.
    const plan = sequenceModuleItems(
      ordered.map((l) => l.n),
      quizzes.map((q) => q.afterLessonNumber),
      reviewEntry != null,
    );
    const placedAfterByQuiz = new Array<number | null>(quizzes.length).fill(null);
    for (const item of plan) {
      if (item.kind === "lesson") {
        lessons.push(lessonEntryByN.get(item.lessonNumber)!);
      } else if (item.kind === "review") {
        if (reviewEntry) lessons.push(reviewEntry);
      } else {
        lessons.push(quizEntries[item.quizIndex]);
        placedAfterByQuiz[item.quizIndex] = item.afterLessonNumber;
      }
    }

    stats.modules.push({
      order: m.moduleOrder,
      section,
      lessons: ordered.length,
      review,
      quizzes: quizzes.map((q, i) => ({
        title: q.title,
        questions: q.quiz.questions.length,
        origin: q.origin,
        placedAfterLesson: placedAfterByQuiz[i],
      })),
      reveals,
      recallCards,
      unconvertedQa,
    });
  }

  return {
    course: {
      title: "FAA Part 107: Pass the Remote Pilot Exam",
      description:
        "An audio-first course to earn your commercial drone license. Learn the knowledge behind the FAA Part 107 rules, module by module, then pass the written test. Some questions reference the official FAA figure supplement (FAA-CT-8080-2H) the test uses, so keep it handy for those. Connects to FlyWitUS for pre-flight checklists and flight records.",
      lessons,
    },
    stats,
  };
}

function printBreakdown(course: AuthoredCourse, stats: BuildStats): void {
  console.log(`\n${course.title}`);
  console.log(`${stats.modules.length} sections, ${course.lessons.length} lessons+quizzes\n`);
  let totalQuestions = 0;
  let authoredQuizzes = 0;
  let csvQuizzes = 0;
  let reveals = 0;
  let recall = 0;
  let unconverted = 0;
  let reviews = 0;
  for (const m of stats.modules) {
    const quizLabel = m.quizzes.length
      ? m.quizzes
          .map(
            (q) =>
              `${q.title} (${q.questions}q, ${q.origin}` +
              `${q.placedAfterLesson != null ? `, after lesson ${q.placedAfterLesson}` : ", module end"})`,
          )
          .join(", ")
      : "!! NO QUIZ !!";
    console.log(`  ${m.section}`);
    console.log(`    lessons: ${m.lessons}  reveals: ${m.reveals}  recall cards: ${m.recallCards}`);
    // The review sits between the lessons and the quiz — review, then test.
    console.log(
      `    review: ${
        m.review
          ? `${m.review.title} (${m.review.reveals} reveals, ${m.review.recallCards} recall cards)`
          : "none in source"
      }`,
    );
    console.log(`    quiz: ${quizLabel}`);
    if (m.unconvertedQa) console.log(`    Q/A beats left as prose (no answer recovered): ${m.unconvertedQa}`);
    for (const q of m.quizzes) {
      totalQuestions += q.questions;
      if (q.origin === "authored") authoredQuizzes++;
      else csvQuizzes++;
    }
    reveals += m.reveals;
    recall += m.recallCards;
    unconverted += m.unconvertedQa;
    if (m.review) reviews++;
  }
  const noQuiz = stats.modules.filter((m) => m.quizzes.length === 0);
  console.log(
    `\n  totals: ${reviews} module reviews; ${csvQuizzes} imported + ${authoredQuizzes} authored quizzes, ` +
      `${totalQuestions} questions; ${reveals} click-to-reveal checks; ${recall} recall cards; ` +
      `${unconverted} Q/A beats left as prose`,
  );
  console.log(`  modules with no quiz: ${noQuiz.length ? noQuiz.map((m) => m.order).join(", ") : "none"}`);
  console.log(
    `  modules with no review in source: ${
      stats.modules.filter((m) => !m.review).map((m) => m.order).join(", ") || "none"
    }`,
  );
  // Guard the strict shape the renderer needs: one line, exactly one ||| delimiter.
  const bad = course.lessons.flatMap((l) =>
    (l.body ?? "")
      .split("\n")
      .filter((line) => line.startsWith(":::reveal"))
      .filter((line) => (line.match(/\|\|\|/g) ?? []).length !== 1 || !/^:::reveal\s+.+?\s*\|\|\|\s*.+$/.test(line))
      .map((line) => `${l.slug}: ${line.slice(0, 80)}`),
  );
  console.log(`  malformed :::reveal lines: ${bad.length ? `\n    ${bad.join("\n    ")}` : "none"}`);

  // GUIDE-01: no audio stage directions may survive into published lesson text.
  const tagged = course.lessons
    .filter((l) => /\[(?:Beat|Sound:|tone|RECALL|CHECK|HOOK|TEACH|PICTURE|WELCOME|ON THE TEST|WATCH OUT)\b/i.test(l.body ?? ""))
    .map((l) => l.slug);
  console.log(`  lessons with leftover stage tags: ${tagged.length ? tagged.join(", ") : "none"}`);

  // --dump prints every converted card so a human can read what the learner will see. The
  // counts above prove the transform RAN; only reading the text proves it produced sense.
  if (!DUMP) return;
  for (const l of course.lessons) {
    const reveals = (l.body ?? "").split("\n").filter((line) => line.startsWith(":::reveal"));
    if (!reveals.length && !l.recallContent?.length) continue;
    console.log(`\n--- ${l.slug}`);
    for (const r of reveals) console.log(`  REVEAL ${r.slice("::: reveal".length)}`);
    for (const c of l.recallContent ?? []) console.log(`  RECALL Q: ${c.prompt}\n         A: ${c.answer}`);
  }
}

async function main() {
  const { course, stats } = buildCourse();
  if (course.lessons.length === 0) {
    console.error("No FAA content found: copy the academy-import into content/drone-curriculum/.");
    process.exit(1);
  }
  printBreakdown(course, stats);

  if (DRY_RUN) {
    console.log("\nDry run: no database was touched. Re-run without --dry-run to seed.\n");
    return;
  }

  neonConfig.webSocketConstructor = ws;
  const connectionString = resolveDbUrl(true);
  if (!connectionString || connectionString.includes("placeholder")) {
    console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
    process.exit(1);
  }
  const pool = new Pool({ connectionString });
  const db = drizzle(pool, { schema, casing: "snake_case" });

  try {
    // FAA Part 107 (the "drone" course) is consolidated onto Learn.WitUS with the other
    // former Trade School courses (was previously seeded into the standalone trade-school
    // tenant, which is why it wasn't showing on Learn.WitUS).
    const t = await db
      .select({ id: schema.tenants.id })
      .from(schema.tenants)
      .where(eq(schema.tenants.slug, "learn-witus"))
      .limit(1);
    const tenantId = t[0]?.id;
    if (!tenantId) {
      console.error("Learn.WitUS tenant missing: run `pnpm seed:tenants` first.");
      process.exit(1);
    }

    // BAM is the instructor on every Learn.WitUS course (see seed-courses.ts's ensureInstructor).
    // This used to seed a synthetic "trade-faculty" account, which put the course at
    // /trade-faculty/faa-part-107 instead of /bam/faa-part-107 — course URLs are
    // /{instructor-username}/{slug}. Match by email so the real logged-in account (which owns
    // bam@awews.com) keeps ownership; seedAuthoredCourse updates instructor_id on re-seed, so
    // one `pnpm seed:faa` re-run moves the live course to /bam/.
    const existing = await db
      .select({ id: schema.users.id })
      .from(schema.users)
      .where(eq(schema.users.email, "bam@awews.com"))
      .limit(1);
    const instructorId = existing[0]?.id ?? "bam";
    if (!existing[0]) {
      await db
        .insert(schema.users)
        .values({ id: instructorId, email: "bam@awews.com", emailVerified: true, name: "BAM" })
        .onConflictDoNothing();
    }
    await db
      .insert(schema.userProfiles)
      .values({ userId: instructorId, username: "bam", displayName: "BAM" })
      .onConflictDoNothing();
    await db
      .insert(schema.tenantMemberships)
      .values({ tenantId, userId: instructorId, role: "instructor" })
      .onConflictDoNothing();

    await db
      .insert(schema.courseCategories)
      .values({ tenantId, name: "Aviation", sortOrder: 2 })
      .onConflictDoNothing();

    const courseId = await seedAuthoredCourse(db, {
      tenantId,
      instructorId,
      slug: "faa-part-107",
      course,
      category: "Aviation",
      navigationMode: "linear",
    });

    const glossary = readGlossary().slice(0, 200);
    if (glossary.length) {
      await db
        .insert(schema.courseGlossaryTerms)
        .values(glossary.map((g, i) => ({ courseId, term: g.term, definition: g.definition, sortOrder: i })))
        .onConflictDoUpdate({
          target: [schema.courseGlossaryTerms.courseId, schema.courseGlossaryTerms.term],
          set: { definition: sql`excluded.definition` },
        });
      console.log(`  glossary: ${glossary.length} terms`);
    }
    console.log(`Done. FAA course: ${course.lessons.length} lessons/quizzes.`);
  } finally {
    await pool.end();
  }
}

main().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
