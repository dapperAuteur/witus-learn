// gen:cross-links: regenerate the COMMITTED cross-link candidate registry from the lessons in the
// DATABASE, so the owner's approval queue at /admin/cross-links has something to review.
//
//   pnpm gen:cross-links               # every course in the database
//   pnpm gen:cross-links --dry-run     # report counts, write nothing
//   pnpm gen:cross-links --course <slug>   # only mentions made BY that course
//
// WHY THE DATABASE AND NOT scripts/data/*-course.ts. Same reason `pnpm gen:citations` reads the
// database: a large part of this catalog is not committed TypeScript. BVC episodes come from CSVs in
// the gitignored content/bvc/, the health courses are generated, FAA and the languages have their
// own seeders. `pnpm cross-links` (scripts/find-cross-links.ts) reads source files and skips what it
// cannot load, which is right for a developer report run offline and wrong for a REVIEW QUEUE: a
// queue that silently omits a third of the library still looks finished when the owner reaches the
// bottom of it, and he would have no way to know what was never offered.
//
// WHY A COMMITTED REGISTRY AND NOT A TABLE. Same split as the citation boards. The finding is a
// property of the TEXT and is identical on every tenant, so it belongs in git where a diff shows it
// changing and a code review can see a new candidate arrive; only the DECISION is per-tenant state
// and it lives in cross_link_approvals / cross_link_dismissals. A candidates table would also have
// to be written into production by a script run, and the write path for something learners can see
// is exactly the path worth not having.
//
// The output module is committed and is all the app imports, so nothing reads the database at
// request time. Re-run this after adding or rewriting courses, then commit the result.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { asc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { detectMentions, eligibleTargets, mentionPattern } from "../src/lib/cross-link-detect";
import { excerptForPattern } from "../src/lib/lesson-excerpt";
import { resolveDbUrl } from "./db-url";

const OUT_DIR = join(import.meta.dirname, "..", "src", "lib", "cross-link-content");

interface Row {
  sourceCourseSlug: string;
  sourceCourseTitle: string;
  sourceLessonSlug: string;
  sourceLessonTitle: string;
  targetCourseSlug: string;
  targetCourseTitle: string;
  via: "title" | "slug";
  sentence: string;
}

function lit(s: string): string {
  return JSON.stringify(s);
}

async function main() {
  const args = process.argv.slice(2);
  const only = args.includes("--course") ? args[args.indexOf("--course") + 1] : null;

  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED) in .env.local.");
    process.exit(1);
  }
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema });

  const courses = await db
    .select({ id: schema.courses.id, slug: schema.courses.slug, title: schema.courses.title })
    .from(schema.courses)
    .orderBy(asc(schema.courses.slug));

  // A slug can exist on more than one tenant. A mention is a property of the TEXT, not of the
  // tenant, so identical text on two tenants produces one candidate, exactly like a citation. Which
  // tenants can actually SHOW the link is decided at render time by the scoped lookup, never here.
  const bySlug = new Map<string, { id: string; slug: string; title: string }>();
  for (const c of courses) {
    if (!c.slug || bySlug.has(c.slug)) continue;
    bySlug.set(c.slug, { id: c.id, slug: c.slug, title: c.title });
  }

  const targets = eligibleTargets([...bySlug.values()]);
  const rows: Row[] = [];
  let lessonsScanned = 0;
  let noSentence = 0;

  for (const course of bySlug.values()) {
    if (only && course.slug !== only) continue;
    const lessons = await db
      .select({
        slug: schema.lessons.slug,
        title: schema.lessons.title,
        text: schema.lessons.textContent,
      })
      .from(schema.lessons)
      .where(eq(schema.lessons.courseId, course.id))
      .orderBy(asc(schema.lessons.sortOrder));

    for (const lesson of lessons) {
      const text = lesson.text ?? "";
      if (!lesson.slug || !text) continue;
      lessonsScanned++;
      for (const m of detectMentions(text, course.slug, targets)) {
        // The sentence is the evidence the owner decides on, so a mention without one is not
        // offered at all. See CrossLinkCandidate.sentence: a card with a blank where the evidence
        // goes invites a decision made blind, and a decision made blind closes the item forever.
        const sentence = excerptForPattern(
          text,
          mentionPattern({ slug: m.targetSlug, title: m.targetTitle }, m.via),
        );
        if (!sentence) {
          noSentence++;
          continue;
        }
        rows.push({
          sourceCourseSlug: course.slug,
          sourceCourseTitle: course.title,
          sourceLessonSlug: lesson.slug,
          sourceLessonTitle: lesson.title,
          targetCourseSlug: m.targetSlug,
          targetCourseTitle: m.targetTitle,
          via: m.via,
          sentence,
        });
      }
    }
  }

  rows.sort(
    (a, b) =>
      a.sourceCourseSlug.localeCompare(b.sourceCourseSlug) ||
      a.sourceLessonSlug.localeCompare(b.sourceLessonSlug) ||
      a.targetCourseSlug.localeCompare(b.targetCourseSlug),
  );

  const perCourse = new Map<string, number>();
  for (const r of rows) perCourse.set(r.sourceCourseSlug, (perCourse.get(r.sourceCourseSlug) ?? 0) + 1);
  for (const [slug, n] of [...perCourse.entries()].sort((a, b) => b[1] - a[1]).slice(0, 20)) {
    console.log(`  ${slug.padEnd(38)} ${String(n).padStart(4)} candidate(s)`);
  }
  console.log(
    `\n${rows.length} candidate(s) from ${perCourse.size} course(s), ${lessonsScanned} lesson(s) scanned against ${targets.length} title(s).`,
  );
  console.log(
    `${noSentence} mention(s) skipped: the sentence could not be located, usually because the only match is inside a Sources block.`,
  );

  if (args.includes("--dry-run")) {
    console.log("(dry run, nothing written)");
    await pool.end();
    return;
  }

  const body = rows
    .map(
      (r) =>
        `  {\n    sourceCourseSlug: ${lit(r.sourceCourseSlug)},\n    sourceCourseTitle: ${lit(r.sourceCourseTitle)},\n` +
        `    sourceLessonSlug: ${lit(r.sourceLessonSlug)},\n    sourceLessonTitle: ${lit(r.sourceLessonTitle)},\n` +
        `    targetCourseSlug: ${lit(r.targetCourseSlug)},\n    targetCourseTitle: ${lit(r.targetCourseTitle)},\n` +
        `    via: ${lit(r.via)},\n    sentence: ${lit(r.sentence)},\n  },`,
    )
    .join("\n");

  mkdirSync(OUT_DIR, { recursive: true });
  const out =
    `// GENERATED by \`pnpm gen:cross-links\` from the lessons in the database, DO NOT EDIT BY HAND.\n` +
    `// Regenerate after adding or rewriting courses, then commit this file.\n` +
    `// The types and the tenant-resolution rules live in src/lib/cross-links.ts.\n\n` +
    `import type { CrossLinkCandidate } from "@/lib/cross-links";\n\n` +
    `/** When this registry was last rebuilt, so the board can say how old its queue is. */\n` +
    `export const CROSS_LINKS_GENERATED_AT: string | null = ${lit(new Date().toISOString().slice(0, 10))};\n\n` +
    `export const CROSS_LINK_CANDIDATES: CrossLinkCandidate[] = [\n${body}\n];\n`;
  writeFileSync(join(OUT_DIR, "cross-links.ts"), out);
  console.log("Wrote src/lib/cross-link-content/cross-links.ts");
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
