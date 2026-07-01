// course:script — generate a clean recording (narration) script for a course, so you can
// read it aloud to record the audio (and later video) version. Pulls the course + its lessons
// from the DB by slug, strips citations/markdown, and writes content/recording-scripts/<slug>.md.
//
// Usage:
//   pnpm course:script knot-tying                     # → content/recording-scripts/knot-tying.md
//   pnpm course:script off-grid-survival --stdout     # print instead of writing a file
//   pnpm course:script hoodoo-complete --tenant learn-witus
//   pnpm course:script --all                          # every course on the tenant (default learn-witus)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { and, asc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { courseToRecordingScript, type NarrationLesson } from "../src/lib/narration";

function flag(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 ? process.argv[i + 1] : undefined;
}
const has = (name: string) => process.argv.includes(`--${name}`);

const OUT_DIR = join(process.cwd(), "content", "recording-scripts");

async function main() {
  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED).");
    process.exit(1);
  }
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema });

  const tenantSlug = flag("tenant") ?? "learn-witus";
  const t = await db
    .select({ id: schema.tenants.id })
    .from(schema.tenants)
    .where(eq(schema.tenants.slug, tenantSlug))
    .limit(1);
  const tenantId = t[0]?.id;
  if (!tenantId) {
    console.error(`Tenant "${tenantSlug}" not found.`);
    await pool.end();
    process.exit(1);
  }

  const courseSlug = process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2] : undefined;
  const courseRows = await db
    .select({ id: schema.courses.id, slug: schema.courses.slug, title: schema.courses.title })
    .from(schema.courses)
    .where(
      has("all")
        ? eq(schema.courses.tenantId, tenantId)
        : and(eq(schema.courses.tenantId, tenantId), eq(schema.courses.slug, courseSlug ?? "")),
    );

  if (courseRows.length === 0) {
    console.error(has("all") ? "No courses on that tenant." : `Course "${courseSlug}" not found on ${tenantSlug}.`);
    await pool.end();
    process.exit(1);
  }

  if (!has("stdout")) mkdirSync(OUT_DIR, { recursive: true });

  for (const course of courseRows) {
    const lessonRows = await db
      .select({ title: schema.lessons.title, body: schema.lessons.textContent })
      .from(schema.lessons)
      .where(eq(schema.lessons.courseId, course.id))
      .orderBy(asc(schema.lessons.sortOrder));

    const lessons: NarrationLesson[] = lessonRows.map((l) => ({ title: l.title, body: l.body }));
    const script = courseToRecordingScript(course.title, lessons);

    if (has("stdout")) {
      process.stdout.write(script + "\n");
    } else {
      const file = join(OUT_DIR, `${course.slug ?? course.id}.md`);
      writeFileSync(file, script);
      console.error(`Wrote ${file} (${lessons.length} lessons)`);
    }
  }

  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
