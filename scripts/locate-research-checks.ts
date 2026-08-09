// locate:research-checks — propose the LESSON each source check belongs to, from evidence.
//
//   pnpm locate:research-checks              # every check
//   pnpm locate:research-checks ga-pay-direct-rule
//
// WHY THIS EXISTS. /admin/research asks BAM to judge a hedge without showing him the sentence that
// hedges. The fix is to record which lesson a check belongs to, but a check only carries a course
// slug, so the lesson has to come from somewhere. Keyword-guessing a lesson and printing it as fact
// is the worst available option: a wrong location sends the reviewer to the wrong page and they have
// no reason to doubt it.
//
// So this script does not decide anything. It extracts the SIGNALS a check is made of (the phrases
// its author quoted, the statute numbers it names) and reports which lessons of that course contain
// them, with the matching sentence, so a human can read the evidence and write `lesson` into
// src/lib/research-checks.ts by hand. A check whose signals appear in no lesson, or in five lessons
// equally, is reported as exactly that and stays unlocated.
//
// It reads the DATABASE for the same reason gen-citations does: much of this catalog is seeded from
// CSVs and generators rather than committed TypeScript, so a source-file reader would silently
// cover a fraction of it.

import { neonConfig, Pool } from "@neondatabase/serverless";
import { asc, eq, inArray } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { excerptForPhrase, phraseAppearsIn } from "../src/lib/lesson-excerpt";
import { RESEARCH_CHECKS, type ResearchCheck } from "../src/lib/research-checks";
import { resolveDbUrl } from "./db-url";

/** A phrase distinctive enough that finding it in a lesson means something. */
function signalsFor(check: ResearchCheck): string[] {
  const haystack = [check.question, check.claim, check.title, ...check.needs].join("\n");
  const out = new Set<string>();

  // Quoted fragments: the author already decided these were the load-bearing words.
  for (const m of haystack.matchAll(/['"“”]([^'"“”\n]{10,80})['"“”]/g)) out.add(m[1].trim());

  // Statute and rule numbers, the most specific tokens a legal check can carry.
  for (const m of haystack.matchAll(/§+\s*[\d.\-A-Za-z]+(?:\([a-z0-9]+\))?/g)) {
    out.add(m[0].replace(/§+\s*/, "").trim());
  }
  for (const m of haystack.matchAll(/\b\d{2,3}[.-]\d{1,4}(?:[.-]\d{1,4})*\b/g)) out.add(m[0]);

  // Capitalised multi-word names (agencies, programmes), which read as proper nouns in a lesson too.
  for (const m of haystack.matchAll(/\b(?:[A-Z][a-z]{2,}\s+){2,4}[A-Z][a-z]{2,}\b/g)) out.add(m[0]);

  return [...out].filter((s) => s.length >= 6);
}

async function main() {
  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED) in .env.local.");
    process.exit(1);
  }
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema });

  const only = process.argv.slice(2).filter((a) => !a.startsWith("--"));
  const checks = only.length
    ? RESEARCH_CHECKS.filter((c) => only.includes(c.key))
    : RESEARCH_CHECKS;

  const slugs = [...new Set(checks.map((c) => c.course))];
  const courses = await db
    .select({ id: schema.courses.id, slug: schema.courses.slug })
    .from(schema.courses)
    .where(inArray(schema.courses.slug, slugs));

  const courseIdBySlug = new Map<string, string>();
  for (const c of courses) if (c.slug && !courseIdBySlug.has(c.slug)) courseIdBySlug.set(c.slug, c.id);

  for (const check of checks) {
    console.log(`\n${"=".repeat(90)}\n${check.key}  (${check.course})\n  ${check.title}`);
    if (check.lesson) console.log(`  already recorded: lesson = ${check.lesson}`);

    const courseId = courseIdBySlug.get(check.course);
    if (!courseId) {
      console.log("  NO COURSE. `course` is a group label, not a slug in this database.");
      console.log("  Leave `lesson` unset; the board will say the location was never recorded.");
      continue;
    }

    const lessons = await db
      .select({
        slug: schema.lessons.slug,
        title: schema.lessons.title,
        text: schema.lessons.textContent,
      })
      .from(schema.lessons)
      .where(eq(schema.lessons.courseId, courseId))
      .orderBy(asc(schema.lessons.sortOrder));

    // A check that is already located gets audited instead of re-proposed: does its recorded lesson
    // exist, and is its recorded sentence still in it? Both are things a course edit can quietly
    // break, and a stale location is the failure this whole feature exists to avoid.
    if (check.lesson) {
      const home = lessons.find((l) => l.slug === check.lesson);
      if (!home) {
        console.log(`  STALE: no lesson "${check.lesson}" in this course any more.`);
      } else if (check.quote && !phraseAppearsIn(home.text, check.quote)) {
        console.log(`  STALE: the recorded sentence is no longer in "${home.title}".`);
      } else {
        console.log(`  OK: located in "${home.title}"${check.quote ? ", sentence still present" : ""}.`);
      }
      continue;
    }

    const signals = signalsFor(check);
    const scored = lessons
      .map((l) => {
        const body = l.text ?? "";
        const hits = signals.filter((s) => body.toLowerCase().includes(s.toLowerCase()));
        return { lesson: l, hits };
      })
      .filter((r) => r.hits.length > 0)
      .sort((a, b) => b.hits.length - a.hits.length);

    if (scored.length === 0) {
      console.log(`  No lesson contains any of the ${signals.length} signals. Leave it unlocated.`);
      continue;
    }

    for (const { lesson, hits } of scored.slice(0, 3)) {
      console.log(`\n  ${hits.length} signal(s)  lesson: ${lesson.slug}  "${lesson.title}"`);
      for (const h of hits.slice(0, 4)) {
        const sentence = excerptForPhrase(lesson.text, h);
        console.log(`    · ${JSON.stringify(h)}`);
        if (sentence) console.log(`      ${sentence}`);
      }
    }
    console.log("\n  Read the sentences above before writing `lesson`. Evidence, not the top score.");
  }

  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
