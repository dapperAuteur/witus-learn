/**
 * Print a course, a series, or the catalog as a structured outline, GENERATED FROM THE COMMITTED
 * COURSE DATA rather than written by hand.
 *
 *   pnpm gen:outline <slug> [<slug>...]        one or more courses
 *   pnpm gen:outline --series <seriesSlug>     every course in a series, in seed order
 *   pnpm gen:outline --all                     the whole catalog (long)
 *   pnpm gen:outline --series well-wellness-coaching > plans/well-review/01-outline-for-review.md
 *
 * WHY IT IS GENERATED (plans/71). This exists to be pasted into another model for an adversarial
 * review pass, and a hand-written outline is the wrong input for that: it drifts from what is
 * actually seeded, so the reviewer attacks a description of the course instead of the course. The
 * WELL review found real holes precisely because what Gemini read was produced from the same
 * modules the seeder reads. It replaces scripts/gen-well-outline.ts, which did this for one series.
 *
 * WHAT IT EXTRACTS, and why each part earns its place in a review:
 *   - bold lead-ins, which in this catalog's house style ARE the lesson's claim structure
 *   - the Vocabulary terms, which show what the lesson expects a learner to hold afterwards
 *   - the `## Sources` block, so a reviewer can attack the evidence rather than guess at it
 *   - the `:::reveal` questions, which show what the lesson thinks it taught
 *   - quiz pool size, questions served, and passing score, so assessment holes are visible
 *
 * THE RULE THAT TRAVELS WITH THE OUTPUT. Whatever a model says about this outline is a research
 * input, not a finding. Nothing it claims enters a lesson without verification against a primary
 * source. In this project one model returned ten PubMed IDs of which eight pointed at real papers
 * about unrelated science, off by a few digits, as live links rather than 404s.
 */

import type { AuthoredCourse } from "./data/authored-course";
import { MAX_QUESTIONS_PER_ATTEMPT } from "../src/lib/quiz";
import { allSeedEntries, loadCourse, type SeedEntry } from "./lib/seed-registry";

function renderCourse(entry: SeedEntry, course: AuthoredCourse, out: string[]) {
  const code =
    entry.seriesCode && entry.seriesPosition ? `${entry.seriesCode}-${entry.seriesPosition} · ` : "";
  out.push(`\n## ${code}${course.title}\n`);
  out.push(`**Slug:** \`${entry.slug}\`${entry.category ? ` · **Category:** ${entry.category}` : ""}\n`);
  out.push(`**Description:** ${course.description}\n`);

  let section = "";
  for (const l of course.lessons) {
    if (l.section && l.section !== section) {
      section = l.section;
      out.push(`\n### ${section}\n`);
    }
    if (l.quiz) {
      const n = l.quiz.questions.length;
      const asked = l.quiz.questionsPerAttempt;
      const cap = Math.min(MAX_QUESTIONS_PER_ATTEMPT, n);
      const serve = asked && asked > 0 ? Math.min(asked, cap) : cap;
      out.push(
        `- **${l.title}**: QUIZ, ${n} question(s) pooled, ${serve} served, pass ${l.quiz.passingScore ?? "default"}%`,
      );
      continue;
    }
    out.push(`- **${l.title}**`);
    const body = l.body ?? "";
    const beats = [...body.matchAll(/^\*\*(.+?)\*\*/gm)].map((m) => m[1].replace(/\.$/, ""));
    if (beats.length) out.push(`  - Beats: ${beats.join(" · ")}`);
    const vocab = /## Vocabulary\n([\s\S]*?)(?=\n## |$)/.exec(body);
    if (vocab) {
      const terms = [...vocab[1].matchAll(/^- \*\*(.+?)\*\*/gm)].map((m) => m[1]);
      if (terms.length) out.push(`  - Vocabulary: ${terms.join(", ")}`);
    }
    const src = /## Sources\n([\s\S]*?)$/.exec(body);
    if (src) {
      const cites = src[1]
        .split("\n\n")
        .map((s) => s.trim())
        .filter(Boolean);
      out.push(
        `  - Sources (${cites.length}): ${cites.map((c) => c.replace(/\s+/g, " ").slice(0, 120)).join(" | ")}`,
      );
    }
    const reveals = [...body.matchAll(/^:::reveal (.+?) \|\|\|/gm)].map((m) => m[1]);
    if (reveals.length) out.push(`  - Self-checks: ${reveals.map((r) => `"${r}"`).join(" ")}`);
    if (l.recallContent?.length) {
      out.push(`  - Recall cards: ${l.recallContent.map((r) => `"${r.prompt}"`).join(" ")}`);
    }
  }
}

async function main() {
  const argv = process.argv.slice(2);
  const all = argv.includes("--all");
  const seriesAt = argv.indexOf("--series");
  const series = seriesAt === -1 ? null : argv[seriesAt + 1];
  const titleAt = argv.indexOf("--title");
  const customTitle = titleAt === -1 ? null : argv[titleAt + 1];
  // Skip the VALUE that follows each flag, and only when that flag is actually present: with
  // seriesAt === -1, "seriesAt + 1" is index 0, which would silently eat the first slug.
  const consumed = new Set([seriesAt, titleAt].filter((i) => i !== -1).map((i) => i + 1));
  const slugs = argv.filter((a, i) => !a.startsWith("--") && !consumed.has(i));

  const entries = allSeedEntries();
  let targets: SeedEntry[];
  if (all) targets = entries;
  else if (series) targets = entries.filter((e) => e.seriesSlug === series);
  else targets = slugs.flatMap((s) => entries.filter((e) => e.slug === s));

  if (targets.length === 0) {
    console.error(
      "Usage: pnpm gen:outline <slug> [<slug>...] | --series <seriesSlug> | --all  [--title <text>]",
    );
    process.exit(1);
  }

  const out: string[] = [];
  const unreadable: string[] = [];
  let courses = 0;
  let lessons = 0;
  let questions = 0;
  for (const e of targets) {
    const course = await loadCourse(e);
    if (!course) {
      unreadable.push(e.slug);
      continue;
    }
    courses++;
    lessons += course.lessons.filter((l) => !l.quiz).length;
    questions += course.lessons.reduce((a, l) => a + (l.quiz?.questions.length ?? 0), 0);
    renderCourse(e, course, out);
  }

  const title = customTitle ?? (series ? `${series}: full outline` : "Course outline");
  console.log(`# ${title}

Generated from the committed course data, so it matches what is actually seeded. Regenerate after
any content change rather than editing this file.

**Scope:** ${courses} course(s), ${lessons} teaching lesson(s), ${questions} pooled quiz question(s).${
    unreadable.length ? `\n\n**Unreadable** (generated modules not on disk): ${unreadable.join(", ")}.` : ""
  }

> Anything a model says about this outline is a research input, not a finding. Nothing it claims
> enters a lesson without verification against a primary source.
${out.join("\n")}
`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
