// rag:index — build the retrieval corpus for one course's "chat with the sources" (plans/future/17).
// Chunks + embeds (Gemini 768-dim) the course's LESSON bodies + bibliography CITATIONS, and — when a
// --source-url is given — a PUBLIC-DOMAIN full text (e.g. Puckett 1926 on the Internet Archive). Stores
// everything tenant/course-scoped in source_chunks (a clean rebuild each run).
//
//   pnpm rag:index --course hoodoo-tradition-of-resistance
//   pnpm rag:index --course hoodoo-tradition-of-resistance --source-url https://archive.org/stream/folkbeliefsofsou00puck/folkbeliefsofsou00puck_djvu.txt
//   pnpm rag:index --course <slug> --tenant <tenantSlug>    # disambiguate a slug shared across tenants
//
// Needs GOOGLE_GEMINI_API_KEY (embeddings) + the DB url (both via .env.local). Writes the DB.

import { neonConfig, Pool } from "@neondatabase/serverless";
import { and, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";

const GEMINI_MODEL = "gemini-embedding-001";
const DIMS = 768;

const flag = (n: string) => {
  const i = process.argv.indexOf(`--${n}`);
  return i !== -1 ? process.argv[i + 1] : undefined;
};

async function embed(text: string): Promise<number[]> {
  const key = process.env.GOOGLE_GEMINI_API_KEY;
  if (!key) throw new Error("GOOGLE_GEMINI_API_KEY is not set (add it to .env.local).");
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:embedContent`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-goog-api-key": key },
    body: JSON.stringify({
      model: `models/${GEMINI_MODEL}`,
      content: { parts: [{ text: text.slice(0, 8000) }] },
      outputDimensionality: DIMS,
    }),
  });
  if (!res.ok) throw new Error(`Gemini embed failed: ${res.status} ${await res.text().catch(() => "")}`);
  const data = (await res.json()) as { embedding?: { values?: number[] } };
  const values = data.embedding?.values;
  if (!Array.isArray(values) || values.length !== DIMS) throw new Error(`Unexpected embedding dim: ${values?.length}`);
  return values;
}

function chunkText(text: string, size = 1800, overlap = 200): string[] {
  const clean = text.replace(/\r/g, "").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
  if (clean.length <= size) return clean ? [clean] : [];
  const out: string[] = [];
  for (let i = 0; i < clean.length; i += size - overlap) out.push(clean.slice(i, i + size));
  return out;
}

async function main() {
  const slug = flag("course");
  if (!slug) {
    console.error("Usage: pnpm rag:index --course <slug> [--tenant <slug>] [--source-url <url>]");
    process.exit(1);
  }
  const tenantSlug = flag("tenant");
  const sourceUrl = flag("source-url");

  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED).");
    process.exit(1);
  }
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema });

  // Resolve the course (disambiguate a shared slug via --tenant).
  let tenantId: string | undefined;
  if (tenantSlug) {
    const [t] = await db.select({ id: schema.tenants.id }).from(schema.tenants).where(eq(schema.tenants.slug, tenantSlug)).limit(1);
    if (!t) { console.error(`Tenant "${tenantSlug}" not found.`); await pool.end(); process.exit(1); }
    tenantId = t.id;
  }
  const courseRows = await db
    .select({ id: schema.courses.id, tenantId: schema.courses.tenantId, title: schema.courses.title })
    .from(schema.courses)
    .where(tenantId ? and(eq(schema.courses.slug, slug), eq(schema.courses.tenantId, tenantId)) : eq(schema.courses.slug, slug));
  if (courseRows.length === 0) { console.error(`No course with slug "${slug}".`); await pool.end(); process.exit(1); }
  if (courseRows.length > 1) {
    console.error(`Slug "${slug}" matches ${courseRows.length} courses across tenants — pass --tenant <slug>.`);
    await pool.end();
    process.exit(1);
  }
  const course = courseRows[0];
  console.error(`Indexing "${course.title}" …`);

  // Clean rebuild.
  await db.delete(schema.sourceChunks).where(eq(schema.sourceChunks.courseId, course.id));

  const rows: (typeof schema.sourceChunks.$inferInsert)[] = [];

  // 1) Lessons.
  const lessons = await db
    .select({ title: schema.lessons.title, body: schema.lessons.textContent })
    .from(schema.lessons)
    .where(eq(schema.lessons.courseId, course.id));
  let lessonChunks = 0;
  for (const l of lessons) {
    if (!l.body) continue;
    const chunks = chunkText(l.body);
    for (let i = 0; i < chunks.length; i++) {
      rows.push({ tenantId: course.tenantId, courseId: course.id, kind: "lesson", title: l.title, text: chunks[i], embedding: await embed(chunks[i]), ord: i });
      lessonChunks++;
    }
  }

  // 2) Citations (bibliography — retrieve over the citation, not copyrighted full text).
  const sources = await db.select().from(schema.courseSources).where(eq(schema.courseSources.courseId, course.id));
  let citationChunks = 0;
  for (const s of sources) {
    const cite = s.apa || s.inText;
    if (!cite) continue;
    rows.push({ tenantId: course.tenantId, courseId: course.id, sourceId: s.id, kind: "citation", title: s.apa ?? null, text: cite, embedding: await embed(cite), ord: 0 });
    citationChunks++;
  }

  // 3) Public-domain full text (opt-in via --source-url).
  let pdChunks = 0;
  if (sourceUrl) {
    console.error(`Fetching public-domain text: ${sourceUrl}`);
    const res = await fetch(sourceUrl);
    if (!res.ok) { console.error(`Fetch failed: ${res.status}`); await pool.end(); process.exit(1); }
    const text = await res.text();
    const chunks = chunkText(text);
    for (let i = 0; i < chunks.length; i++) {
      rows.push({ tenantId: course.tenantId, courseId: course.id, kind: "public_domain_text", title: sourceUrl, text: chunks[i], embedding: await embed(chunks[i]), ord: i });
      pdChunks++;
    }
  }

  // Insert in batches (avoid oversized statements).
  for (let i = 0; i < rows.length; i += 100) {
    await db.insert(schema.sourceChunks).values(rows.slice(i, i + 100));
  }

  console.log(`Indexed ${rows.length} chunks for "${course.title}": ${lessonChunks} lesson, ${citationChunks} citation, ${pdChunks} public-domain.`);
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
