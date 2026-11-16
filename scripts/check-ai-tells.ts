import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { allSeedEntries, loadCourse } from "./lib/seed-registry";
import {
  compareToBaseline,
  countByCourse,
  nextBaseline,
  scanTellCourse,
  topPhrases,
  type TellBaseline,
  type TellHit,
} from "./lib/ai-tells";

/**
 * Guard: no new AI-writing tells in course text (course-creation rubric v1.7, gate D4).
 *
 *   pnpm check:ai-tells                    # exit 1 when a course has more tells than its baseline
 *   pnpm check:ai-tells --list             # hit counts per course, high to low, and the total
 *   pnpm check:ai-tells --update-baseline  # rewrite the baseline from today's counts (owner only)
 *
 * WHAT IT READS, offline, no DATABASE_URL: every course the seed registry knows
 * (scripts/lib/seed-registry.ts), loaded from its data module. A gitignored module that is not on
 * this machine is counted as unreadable, never failed, the same as the other guards.
 *
 * THE RATCHET. scripts/lib/ai-tells-baseline.json holds each course's hit count as it stood on
 * 2026-11-16, the day the rubric gained the gate. A course fails when its count goes ABOVE that
 * number, and a course with no entry (every new course) fails on its first hit. Fixing a course
 * lowers its count; the run then says so, and the owner lowers the file with --update-baseline, so
 * the baseline only shrinks. Never run --update-baseline to make a new hit pass: rewrite the
 * sentence. --update-baseline keeps the old count for any course this machine cannot read, so a
 * clone without the gitignored modules cannot forgive them.
 *
 * The phrase lists are a copy of the blog's (scripts/lib/ai-writing-tells.ts says where from and
 * when); what is skipped (quotations, blockquotes, code, URLs, the Sources block) is in
 * scripts/lib/ai-tells.ts.
 */

const BASELINE_PATH = join(process.cwd(), "scripts", "lib", "ai-tells-baseline.json");
const listAll = process.argv.includes("--list");
const update = process.argv.includes("--update-baseline");

async function main(): Promise<number> {
  const hits: TellHit[] = [];
  const read = new Set<string>();
  const unreadable: string[] = [];
  for (const entry of allSeedEntries()) {
    if (read.has(entry.slug) || unreadable.includes(entry.slug)) continue;
    const course = await loadCourse(entry);
    if (!course) {
      unreadable.push(entry.slug);
      continue;
    }
    read.add(entry.slug);
    hits.push(...scanTellCourse(entry.slug, course));
  }
  // A slug that failed to load from one registration but loaded from another is read, not unreadable.
  const stillUnreadable = unreadable.filter((s) => !read.has(s));

  const counts = countByCourse(hits);
  for (const slug of read) if (!counts.has(slug)) counts.set(slug, 0);
  const baseline = JSON.parse(readFileSync(BASELINE_PATH, "utf-8")) as TellBaseline;
  const total = hits.length;

  if (update) {
    const today = new Date().toISOString().slice(0, 10);
    const next = nextBaseline(counts, stillUnreadable, baseline, today);
    writeFileSync(BASELINE_PATH, `${JSON.stringify(next, null, 2)}\n`);
    const sum = Object.values(next.counts).reduce((a, b) => a + b, 0);
    console.log(`AI tells: baseline rewritten (${Object.keys(next.counts).length} course(s), ${sum} hit(s)), as of ${today}.`);
    return 0;
  }

  const { over, under } = compareToBaseline(counts, baseline);
  console.log(
    `AI tells: scanned ${read.size} course(s), ${stillUnreadable.length} unreadable (gitignored module not on this machine). ` +
      `${total} hit(s) in the catalog; ${over.length} course(s) over baseline.`,
  );

  if (listAll) {
    const ranked = [...counts].filter(([, n]) => n > 0).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    console.log(`\nHits per course, high to low (${ranked.length} course(s) with any hit, ${total} in total):`);
    for (const [slug, n] of ranked) {
      const base = baseline.counts[slug] ?? 0;
      const mark = n > base ? `  OVER baseline ${base}` : n < base ? `  (baseline ${base}, may lower)` : "";
      console.log(`  ${String(n).padStart(5)}  ${slug}${mark}  ${topPhrases(hits, slug, 3).join(", ")}`);
    }
    if (stillUnreadable.length) console.log(`\nUnreadable here: ${stillUnreadable.join(", ")}`);
  }

  if (under.length && !listAll) {
    console.log(
      `\nGood news: ${under.length} course(s) now have fewer tells than the baseline. The owner can lower it with ` +
        "`pnpm check:ai-tells --update-baseline`.",
    );
  }

  if (over.length) {
    console.error("\nThese courses have more AI-writing tells than the baseline allows (rubric v1.7, gate D4):");
    for (const o of over) console.error(`  ${o.slug}: ${o.count} hit(s), baseline ${o.baseline} (+${o.count - o.baseline})`);
    console.error("\nThe three worst, with where to look:");
    for (const o of over.slice(0, 3)) {
      console.error(`  ${o.slug}  ${topPhrases(hits, o.slug).join(", ")}`);
      for (const h of hits.filter((x) => x.course === o.slug).slice(0, 8)) {
        console.error(`      ${h.lesson} [${h.field}:${h.line}] ${h.tier} "${h.phrase}"`);
      }
    }
    console.error(
      "\nRewrite the sentence in plain words (say the specific thing the phrase stands in for). Quoting a\n" +
        "source is fine: put it in quotation marks or a blockquote. Never raise the baseline to make new\n" +
        "text pass. Rule: docs/course-method/course-creation-rubric.md, gate D4.",
    );
    return 1;
  }
  return 0;
}

main().then(
  (code) => process.exit(code),
  (err) => {
    console.error(err);
    process.exit(2);
  },
);
