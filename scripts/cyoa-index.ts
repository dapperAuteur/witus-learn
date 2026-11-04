// cyoa:index: build or refresh the CYOA crossroads index (lesson_embeddings.embedding_v2, Mistral's
// mistral-embed, migration 0079), a thin CLI over indexCrossroads in src/lib/cyoa/crossroads-index.ts. The
// course page's "Re-index crossroads" button and the publish auto-index call the same function; the seed
// workflow (.github/workflows/seed-production.yml, the "cyoa" input) runs this script after a merge.
//
//   pnpm cyoa:index --list                     # read-only counts: CYOA courses, lessons, lessons needing embedding
//   pnpm cyoa:index --needing                  # the backfill: every CYOA course's missing or changed lessons
//   pnpm cyoa:index --all                      # re-embed every CYOA course from scratch
//   pnpm cyoa:index --course <slug> [--tenant <slug>] [--force]
//
// Needs the DB url, and MISTRAL_API_KEY for everything but --list. Optional pacing env as rag:index
// (RAG_EMBED_REQUESTS_PER_MINUTE, RAG_EMBED_TOKENS_PER_MINUTE, RAG_EMBED_MAX_RETRIES). Attempts every
// course, then exits 1 if any failed. Prints ids and counts only, never lesson text or keys.

import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { CYOA_INDEX_USAGE, parseCyoaIndexArgs } from "../src/lib/cyoa/cyoa-index-args";
import { cyoaCoursesNeedingIndex, indexCrossroads, listCyoaCrossroadsStates } from "../src/lib/cyoa/crossroads-index";
import { findCoursesBySlug, type RagDb } from "../src/lib/rag/index-course";

async function main() {
  const args = parseCyoaIndexArgs(process.argv.slice(2));
  if ("error" in args) {
    console.error(`${args.error}\n${CYOA_INDEX_USAGE}`);
    process.exit(1);
  }
  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED).");
    process.exit(1);
  }
  if (args.mode !== "list" && !process.env.MISTRAL_API_KEY) {
    console.error("MISTRAL_API_KEY is not set; the crossroads index is embedded with mistral-embed.");
    process.exit(1);
  }
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema }) as RagDb;

  let targets: { courseId: string; label: string }[] = [];
  let force = false;
  if (args.mode === "course") {
    const found = await findCoursesBySlug(args.course, args.tenant, { db });
    if (found.length !== 1) {
      console.error(
        found.length === 0
          ? `No course with slug "${args.course}"${args.tenant ? ` in "${args.tenant}"` : ""}.`
          : `Slug "${args.course}" matches ${found.length} courses (${found.map((f) => f.tenantSlug).join(", ")}); pass --tenant.`,
      );
      await pool.end();
      process.exit(1);
    }
    targets = [{ courseId: found[0].courseId, label: `${found[0].tenantSlug}/${args.course}` }];
    force = args.force;
  } else {
    const states = await listCyoaCrossroadsStates({ db });
    const lessons = states.reduce((s, r) => s + r.published, 0);
    const stale = states.reduce((s, r) => s + r.stale, 0);
    console.log(`CYOA courses: ${states.length}; published lessons: ${lessons}; needing embedding: ${stale}.`);
    if (args.mode === "list") {
      for (const r of states) {
        console.log(`${r.stale > 0 ? "needs" : "ok   "} ${r.tenantSlug}/${r.courseSlug ?? r.courseId}: ${r.stale} of ${r.published} lessons${r.isPublished ? "" : " (not published)"}`);
      }
      await pool.end();
      return;
    }
    force = args.mode === "all";
    const pick = force ? states : cyoaCoursesNeedingIndex(states);
    targets = pick.map((r) => ({ courseId: r.courseId, label: `${r.tenantSlug}/${r.courseSlug ?? r.courseId}` }));
  }

  console.log(`Embedding ${targets.length} course${targets.length === 1 ? "" : "s"}${force ? " (every lesson)" : " (missing or changed lessons)"}.`);
  const failed: string[] = [];
  let embedded = 0;
  for (const [i, t] of targets.entries()) {
    try {
      const r = await indexCrossroads(t.courseId, {
        db,
        force,
        onProgress: (p) => console.error(`  [${i + 1}/${targets.length}] ${t.label}: ${p.message}`),
      });
      embedded += r.embedded;
      console.log(`ok ${t.label}: ${r.embedded} embedded, ${r.current} already current`);
    } catch (err) {
      failed.push(t.label);
      console.log(`FAILED ${t.label}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }
  await pool.end();
  console.log(`Done: ${targets.length - failed.length} courses, ${embedded} lessons embedded, ${failed.length} failed.`);
  if (failed.length) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
