import { readFileSync } from "node:fs";
import { join } from "node:path";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { parse } from "csv-parse/sync";
import { and, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";

// Builds language courses on the Learn.WitUS school from content/language/ (the
// gitignored "Curb Appeall" datasets): glossary from the verb list, lessons from
// the story (chunked). Idempotent. Run: pnpm seed:languages
//
// Conjugation/production drills are intentionally left to the AI tutor (Layer 2).

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
}

// Add more languages here as their files land (Portuguese/Italian/Ewe/Twi/Igbo).
const LANGUAGES: Lang[] = [
  { name: "Spanish", slug: "spanish", verbsFile: "spanishVerbs.csv", sentencesFile: "spanishSentences.csv" },
  { name: "French", slug: "french", verbsFile: "frenchVerbs.csv", sentencesFile: "frenchSentences.csv" },
];

function readCsv(file: string): string[][] {
  const raw = readFileSync(join(CONTENT, file), "utf-8");
  const rows = parse(raw, { skip_empty_lines: true, relax_column_count: true }) as string[][];
  return rows.slice(1).filter((r) => r[0]?.trim()); // drop header + blanks
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
    let verbs: string[][];
    let sentences: string[][];
    try {
      verbs = readCsv(lang.verbsFile);
      sentences = readCsv(lang.sentencesFile);
    } catch {
      console.log(`skip ${lang.name} (content files not found)`);
      continue;
    }

    // Course
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
          title: `${lang.name} — the Curb Appeall Story`,
          slug: lang.slug,
          description: `Learn ${lang.name} through one continuous story about Curb Appeall and friends learning healthy-living habits. Communication-first, with the verbs and patterns you need to produce sentences yourself.`,
          category: "Languages",
          isPublished: true,
          publishedAt: new Date(),
          navigationMode: "linear",
        })
        .returning({ id: schema.courses.id });
      courseId = row.id;
      console.log(`+ course ${lang.slug}`);
    } else {
      console.log(`= course ${lang.slug} exists`);
    }

    // Glossary (deduped verbs, capped)
    const seen = new Set<string>();
    const terms = [];
    for (const [term, def] of verbs) {
      const key = term.trim().toLowerCase();
      if (!key || seen.has(key)) continue;
      seen.add(key);
      terms.push({ courseId, term: term.trim(), definition: (def ?? "").trim() || term.trim(), sortOrder: terms.length });
      if (terms.length >= MAX_GLOSSARY) break;
    }
    if (terms.length) {
      await db.insert(schema.courseGlossaryTerms).values(terms).onConflictDoNothing();
      console.log(`  glossary: ${terms.length} terms`);
    }

    // Lessons (story chunked), only if none yet
    const hasLessons = await db
      .select({ id: schema.lessons.id })
      .from(schema.lessons)
      .where(eq(schema.lessons.courseId, courseId))
      .limit(1);
    if (!hasLessons[0]) {
      const lessonRows = [];
      for (let i = 0; i < sentences.length; i += SENTENCES_PER_LESSON) {
        const chunk = sentences.slice(i, i + SENTENCES_PER_LESSON);
        const part = Math.floor(i / SENTENCES_PER_LESSON) + 1;
        const body = chunk
          .map(([s, e]) => `**${s.trim()}**\n${(e ?? "").trim()}`)
          .join("\n\n");
        lessonRows.push({
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
      if (lessonRows.length) {
        await db.insert(schema.lessons).values(lessonRows);
        console.log(`  lessons: ${lessonRows.length} parts`);
      }
    } else {
      console.log(`  lessons exist`);
    }
  }

  await pool.end();
  console.log("Done.");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  pool.end().finally(() => process.exit(1));
});
