import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { seedAuthoredCourse } from "./lib/seed-authored-course";
import type { AuthoredCourse } from "./data/authored-course";
import { buildFaaCourse, readFaaGlossary, type BuildStats } from "./lib/faa-course";

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

const DRY_RUN = process.argv.includes("--dry-run");
const DUMP = process.argv.includes("--dump");

// Course assembly (sources, quiz conversion, interleaving) lives in scripts/lib/faa-course.ts so the
// EPUB export builds the same course this seeds.

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
  const { course, stats } = buildFaaCourse();
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

    const glossary = readFaaGlossary().slice(0, 200);
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
