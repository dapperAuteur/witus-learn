// rag:index: build the retrieval corpus for "chat with the sources" (plans/future/17), a thin CLI over
// indexCourse in src/lib/rag/index-course.ts (the post-merge workflow and the admin page call the same
// function). Embeddings are batched under a per-minute token budget and retried on Gemini 429s
// (src/lib/rag/embed-batch.ts), so a course larger than the free tier's 30,000 tokens a minute
// finishes instead of failing every time.
//
//   pnpm rag:index --course hoodoo-tradition-of-resistance
//   pnpm rag:index --course <slug> --source-url https://archive.org/stream/…_djvu.txt   # also ingest a public-domain text
//   pnpm rag:index --course <slug> --tenant <tenantSlug>   # a slug shared across schools
//   pnpm rag:index --course <slug> --all-tenants           # every school's course with that slug
//   pnpm rag:index --courses-file changed.json             # [{ "tenantSlug": "...", "courseSlug": "..." }]
//   pnpm rag:index --needing [--changed-only]              # never indexed or changed since (rag:list shows them)
//
// Needs GOOGLE_GEMINI_API_KEY and the DB url. Optional: RAG_EMBED_TOKENS_PER_MINUTE (default 25000),
// RAG_EMBED_MAX_RETRIES (default 8). Attempts every course, then exits 1 if any failed.

import { readFileSync } from "node:fs";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { RAG_INDEX_USAGE, parseCoursesFile, parseRagIndexArgs, type CourseRef } from "../src/lib/rag/index-args";
import { findCoursesBySlug, indexCourse, listCoursesNeedingIndex, type RagDb } from "../src/lib/rag/index-course";

async function main() {
  const args = parseRagIndexArgs(process.argv.slice(2));
  if ("error" in args) {
    console.error(`${args.error}\n${RAG_INDEX_USAGE}`);
    process.exit(1);
  }
  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED).");
    process.exit(1);
  }
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema }) as RagDb;

  let targets: (CourseRef & { sourceUrl?: string })[] = [];
  if (args.mode === "course") {
    if (args.allTenants) {
      const found = await findCoursesBySlug(args.course, undefined, { db });
      targets = found.map((f) => ({ tenantSlug: f.tenantSlug, courseSlug: f.courseSlug }));
      if (targets.length === 0) console.error(`No course with slug "${args.course}".`);
    } else {
      // tenantSlug "" lets indexCourse resolve it (and say so when the slug is shared).
      targets = [{ tenantSlug: args.tenant ?? "", courseSlug: args.course, sourceUrl: args.sourceUrl }];
    }
  } else if (args.mode === "courses-file") {
    const parsed = parseCoursesFile(JSON.parse(readFileSync(args.path, "utf8")));
    if ("error" in parsed) {
      console.error(`${args.path}: ${parsed.error}`);
      await pool.end();
      process.exit(1);
    }
    targets = parsed;
  } else {
    const needing = await listCoursesNeedingIndex({ db });
    targets = needing
      .filter((n) => !args.changedOnly || n.reason === "changed")
      .map((n) => ({ tenantSlug: n.tenantSlug, courseSlug: n.courseSlug }));
  }

  console.log(`Indexing ${targets.length} course${targets.length === 1 ? "" : "s"}.`);
  const failed: string[] = [];
  for (const [i, t] of targets.entries()) {
    const label = `${t.tenantSlug || "?"}/${t.courseSlug}`;
    try {
      const r = await indexCourse(t.courseSlug, t.tenantSlug || undefined, {
        db,
        sourceUrl: t.sourceUrl,
        onProgress: (p) => console.error(`  [${i + 1}/${targets.length}] ${label}: ${p.message}`),
      });
      console.log(
        `ok ${r.tenantSlug}/${r.courseSlug}: ${r.lessonChunks} lesson, ${r.citationChunks} citation, ` +
          `${r.publicDomainChunks} public-domain${r.publicDomainKept ? " (kept)" : ""} chunks`,
      );
    } catch (err) {
      failed.push(label);
      console.log(`FAILED ${label}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }
  await pool.end();
  console.log(`Done: ${targets.length - failed.length} indexed, ${failed.length} failed.`);
  if (failed.length) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
