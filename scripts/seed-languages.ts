import { readFileSync } from "node:fs";
import { join } from "node:path";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { parse } from "csv-parse/sync";
import { and, eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import type { AuthoredCourse } from "./data/authored-course";
import { SPANISH_COURSE } from "./data/spanish-course";
import { FRENCH_COURSE } from "./data/french-course";

// Builds language courses on the Learn.WitUS school. Spanish uses an authored,
// tense-progressive structure (scripts/data/spanish-course.ts); the others fall
// back to the gitignored content/language/ "Curb Appeall" datasets (glossary from
// the verb list, lessons from the story chunked).
//
// RE-SEEDABLE: lessons + glossary upsert by their unique keys, so editing the
// authored course and re-running `pnpm seed:languages` updates lessons IN PLACE
// (lesson IDs are preserved, so embeddings + learner progress survive).
// Run: pnpm seed:languages

neonConfig.webSocketConstructor = ws;
const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  console.error("DATABASE_URL is not set. Put a real Neon string in .env.local.");
  process.exit(1);
}
const pool = new Pool({ connectionString });
const db = drizzle(pool, { schema, casing: "snake_case" });

const CONTENT = join(process.cwd(), "content", "language", "foreign language");
const SENTENCES_PER_LESSON = 15;
const MAX_GLOSSARY = 120;

interface Lang {
  name: string;
  slug: string;
  verbsFile: string;
  sentencesFile: string;
  /** Column index of the target language (the other column is English). The
   *  files differ: Spanish is [target, English]; French is [English, target]. */
  target: 0 | 1;
  /** Authored tense-progressive lessons; when set, used instead of CSV chunking. */
  authored?: AuthoredCourse;
}

// Add more languages here as their files land (Portuguese/Italian/Ewe/Twi/Igbo).
// Confirm each file's column order and set `target` accordingly. Author a
// tense-progressive course (like Spanish) per language to replace CSV chunking.
const LANGUAGES: Lang[] = [
  { name: "Spanish", slug: "spanish", verbsFile: "spanishVerbs.csv", sentencesFile: "spanishSentences.csv", target: 0, authored: SPANISH_COURSE },
  { name: "French", slug: "french", verbsFile: "frenchVerbs.csv", sentencesFile: "frenchSentences.csv", target: 1, authored: FRENCH_COURSE },
];

// Drop the header row(s) — these files have duplicate "Sentence (Spanish)" /
// "... Sentence - ..." headers scattered mid-file — and blank rows.
function readCsv(file: string): string[][] {
  const raw = readFileSync(join(CONTENT, file), "utf-8");
  const rows = parse(raw, { skip_empty_lines: true, relax_column_count: true }) as string[][];
  return rows.filter((r) => {
    const a = (r[0] ?? "").trim();
    if (!a) return false;
    if (/sentence\s*[(\-]|translation\s*[-(]/i.test(a)) return false;
    return true;
  });
}

// CSV fallback: chunk the story into "Part N" lessons (target-language bold,
// English below). Respects `target` so non-authored langs render the right column.
function buildCsvLessons(
  tenantId: string,
  courseId: string,
  sentences: string[][],
  target: 0 | 1,
) {
  const rows = [];
  for (let i = 0; i < sentences.length; i += SENTENCES_PER_LESSON) {
    const chunk = sentences.slice(i, i + SENTENCES_PER_LESSON);
    const part = Math.floor(i / SENTENCES_PER_LESSON) + 1;
    const body = chunk
      .map((r) => `**${(r[target] ?? "").trim()}**\n${(r[1 - target] ?? "").trim()}`)
      .join("\n\n");
    rows.push({
      tenantId,
      courseId,
      title: `Part ${part}`,
      slug: `part-${part}`,
      lessonType: "text" as const,
      contentFormat: "markdown" as const,
      textContent: body,
      sortOrder: part,
      isFreePreview: part === 1,
      isPublished: true,
    });
  }
  return rows;
}

async function ensureInstructor(tenantId: string): Promise<string> {
  const id = "seed-languages-instructor";
  await db
    .insert(schema.users)
    .values({ id, email: "faculty@languages.witus.online", emailVerified: true, name: "WitUS Languages" })
    .onConflictDoNothing();
  await db
    .insert(schema.userProfiles)
    .values({ userId: id, username: "witus-languages", displayName: "WitUS Languages" })
    .onConflictDoNothing();
  await db
    .insert(schema.tenantMemberships)
    .values({ tenantId, userId: id, role: "instructor" })
    .onConflictDoNothing();
  return id;
}

async function main() {
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
  const instructorId = await ensureInstructor(tenantId);
  await db
    .insert(schema.courseCategories)
    .values({ tenantId, name: "Languages", sortOrder: 1 })
    .onConflictDoNothing();

  for (const lang of LANGUAGES) {
    // Verbs feed the glossary (optional). Sentences only matter for CSV-built
    // (non-authored) courses; authored courses bring their own lessons.
    let verbs: string[][] = [];
    let sentences: string[][] = [];
    try {
      verbs = readCsv(lang.verbsFile);
    } catch {
      /* glossary is optional */
    }
    if (!lang.authored) {
      try {
        sentences = readCsv(lang.sentencesFile);
      } catch {
        console.log(`skip ${lang.name} (sentences file not found, no authored course)`);
        continue;
      }
    }

    const title = lang.authored?.title ?? `${lang.name} — the Curb Appeall Story`;
    const description =
      lang.authored?.description ??
      `Learn ${lang.name} through one continuous story about Curb Appeall and friends learning healthy-living habits. Communication-first, with the verbs and patterns you need to produce sentences yourself.`;

    // Course — insert, or refresh title/description so authored edits propagate.
    const existing = await db
      .select({ id: schema.courses.id })
      .from(schema.courses)
      .where(and(eq(schema.courses.tenantId, tenantId), eq(schema.courses.slug, lang.slug)))
      .limit(1);
    let courseId = existing[0]?.id;
    if (!courseId) {
      const [row] = await db
        .insert(schema.courses)
        .values({
          tenantId,
          instructorId,
          title,
          slug: lang.slug,
          description,
          category: "Languages",
          isPublished: true,
          publishedAt: new Date(),
          navigationMode: "linear",
        })
        .returning({ id: schema.courses.id });
      courseId = row.id;
      console.log(`+ course ${lang.slug}`);
    } else {
      await db.update(schema.courses).set({ title, description }).where(eq(schema.courses.id, courseId));
      console.log(`= course ${lang.slug} (refreshed)`);
    }

    // Glossary — deduped verbs, capped, upserted (term = the TARGET-language word).
    const seen = new Set<string>();
    const terms = [];
    for (const row of verbs) {
      const term = (row[lang.target] ?? "").trim();
      const def = (row[1 - lang.target] ?? "").trim();
      const key = term.toLowerCase();
      if (!key || seen.has(key)) continue;
      seen.add(key);
      terms.push({ courseId, term, definition: def || term, sortOrder: terms.length });
      if (terms.length >= MAX_GLOSSARY) break;
    }
    if (terms.length) {
      await db
        .insert(schema.courseGlossaryTerms)
        .values(terms)
        .onConflictDoUpdate({
          target: [schema.courseGlossaryTerms.courseId, schema.courseGlossaryTerms.term],
          set: { definition: sql`excluded.definition`, sortOrder: sql`excluded.sort_order` },
        });
      console.log(`  glossary: ${terms.length} terms`);
    }

    // Lessons — authored tense units, else CSV chunks. Upserted by (courseId, slug),
    // so re-running updates lessons in place (IDs preserved → embeddings/progress safe).
    const lessonRows = lang.authored
      ? lang.authored.lessons.map((l, i) => ({
          tenantId,
          courseId,
          title: l.title,
          slug: l.slug,
          lessonType: "text" as const,
          contentFormat: "markdown" as const,
          textContent: l.body,
          sortOrder: i + 1,
          isFreePreview: i === 0,
          isPublished: true,
        }))
      : buildCsvLessons(tenantId, courseId, sentences, lang.target);

    if (lessonRows.length) {
      await db
        .insert(schema.lessons)
        .values(lessonRows)
        .onConflictDoUpdate({
          target: [schema.lessons.courseId, schema.lessons.slug],
          targetWhere: sql`slug is not null`,
          set: {
            title: sql`excluded.title`,
            textContent: sql`excluded.text_content`,
            sortOrder: sql`excluded.sort_order`,
            isFreePreview: sql`excluded.is_free_preview`,
            lessonType: sql`excluded.lesson_type`,
            contentFormat: sql`excluded.content_format`,
            isPublished: sql`excluded.is_published`,
            updatedAt: new Date(),
          },
        });
      console.log(`  lessons: ${lessonRows.length} (upserted)`);
    }
  }

  await pool.end();
  console.log("Done.");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
