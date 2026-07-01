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
import type { AuthoredCourse, AuthoredLesson } from "./data/authored-course";
import type { QuizContent } from "../src/lib/quiz";

// Imports the FAA Part 107 course (authored by CentOS, audio-first) from the
// gitignored content/drone-curriculum/academy-import/ into the Trade School. Reads
// the per-module lesson JSONs + quizzes CSV + glossary CSV, converts the CentOS quiz
// schema to ours, and seeds via the re-seedable importer. Run: pnpm seed:faa

neonConfig.webSocketConstructor = ws;
const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
  process.exit(1);
}
const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema, casing: "snake_case" });

const CONTENT = join(process.cwd(), "content", "drone-curriculum", "academy-import");

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

// GUIDE-01 hard rule: NO stage tags in published lesson text. Turn each audio beat
// marker into a descriptive heading and strip inline cues ([Beat], [Sound: ...]).
const BEAT_HEADINGS: Record<string, string> = {
  RECALL: "Quick recall",
  WELCOME: "Welcome",
  HOOK: "Why this matters",
  TEACH: "The idea",
  PICTURE: "Picture it",
  "ON THE TEST": "On the test",
  "WATCH OUT": "Watch out",
  CHECK: "Quick check",
};
function cleanLessonMarkdown(md: string): string {
  let out = md;
  for (const [tag, heading] of Object.entries(BEAT_HEADINGS)) {
    out = out.split(`[${tag}]`).join(`\n## ${heading}\n`);
  }
  out = out
    .replace(/\[Sound:[^\]]*\]/gi, "")
    .replace(/\[Beat\]/gi, "")
    .replace(/\[tone\]/gi, "")
    .replace(/ {2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return out;
}

interface ModuleLesson {
  n: number;
  title: string;
  lessonMarkdown: string;
}

function readModuleLessons(): { moduleOrder: number; lessons: ModuleLesson[] }[] {
  const files = readdirSync(CONTENT).filter((f) => /^_module\d+-lessons\.json$/.test(f));
  return files
    .map((f) => {
      const moduleOrder = parseInt(f.match(/_module(\d+)/)![1], 10);
      const data = JSON.parse(readFileSync(join(CONTENT, f), "utf-8")) as { lessons?: ModuleLesson[] };
      return { moduleOrder, lessons: data.lessons ?? [] };
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
}
function readQuizzes(): { moduleOrder: number; lessonOrder: number; title: string; quiz: QuizContent }[] {
  let rows: QuizRow[];
  try {
    const raw = readFileSync(join(CONTENT, "quizzes-import.csv"), "utf-8");
    rows = parse(raw, { columns: true, skip_empty_lines: true, relax_column_count: true }) as QuizRow[];
  } catch {
    return [];
  }
  return rows
    .filter((r) => r.quiz_content?.trim())
    .map((r) => ({
      moduleOrder: parseInt(r.module_order, 10),
      lessonOrder: parseInt(r.lesson_order, 10),
      title: r.title,
      quiz: convertQuiz(JSON.parse(r.quiz_content) as CentOSQuiz),
    }));
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

function buildCourse(): AuthoredCourse {
  const modules = readModuleLessons();
  const quizzes = readQuizzes();
  const lessons: AuthoredLesson[] = [];
  for (const m of modules) {
    for (const l of [...m.lessons].sort((a, b) => a.n - b.n)) {
      lessons.push({
        slug: `m${m.moduleOrder}-l${l.n}-${slugify(l.title)}`.slice(0, 100),
        title: l.title,
        body: cleanLessonMarkdown(l.lessonMarkdown),
      });
    }
    for (const q of quizzes
      .filter((q) => q.moduleOrder === m.moduleOrder)
      .sort((a, b) => a.lessonOrder - b.lessonOrder)) {
      lessons.push({ slug: `m${m.moduleOrder}-quiz-${q.lessonOrder}`, title: q.title, quiz: q.quiz });
    }
  }
  return {
    title: "FAA Part 107: Pass the Remote Pilot Exam",
    description:
      "An audio-first course to earn your commercial drone license. Learn the knowledge behind the FAA Part 107 rules, module by module, then pass the written test. Some questions reference the official FAA figure supplement (FAA-CT-8080-2H) the test uses, so keep it handy for those. Connects to FlyWitUS for pre-flight checklists and flight records.",
    lessons,
  };
}

async function main() {
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
    console.error("Learn.WitUS tenant missing — run `pnpm seed:tenants` first.");
    process.exit(1);
  }

  const instructorId = "seed-trade-faculty";
  await db
    .insert(schema.users)
    .values({ id: instructorId, email: "faculty@trade.witus.online", emailVerified: true, name: "WitUS Trade Faculty" })
    .onConflictDoNothing();
  await db
    .insert(schema.userProfiles)
    .values({ userId: instructorId, username: "trade-faculty", displayName: "WitUS Trade Faculty" })
    .onConflictDoNothing();
  await db
    .insert(schema.tenantMemberships)
    .values({ tenantId, userId: instructorId, role: "instructor" })
    .onConflictDoNothing();

  await db
    .insert(schema.courseCategories)
    .values({ tenantId, name: "Aviation", sortOrder: 2 })
    .onConflictDoNothing();

  const course = buildCourse();
  if (course.lessons.length === 0) {
    console.error("No FAA content found — copy the academy-import into content/drone-curriculum/.");
    process.exit(1);
  }
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

  await pool.end();
  console.log(`Done. FAA course: ${course.lessons.length} lessons/quizzes.`);
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
