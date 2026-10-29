/**
 * Generate the Invest.WitUS Python tutorial as a PRIVATE draft course, for the owner to read and
 * export (the "Download EPUB" and "Download PDF" buttons on /teach/[courseId]).
 *
 *   pnpm exec tsx scripts/gen-invest-tutorial-course.ts                 reads ../invest-witus
 *   INVEST_WITUS_DIR=/path/to/invest-witus pnpm exec tsx scripts/gen-invest-tutorial-course.ts
 *   ... --source <dir> --tag v10 --out <file.json>
 *
 * then `pnpm seed:local-private` (or `:prod`) seeds it, and `pnpm export:epub
 * learn-python-by-building-invest-witus` exports it without a database.
 *
 * WHERE THE TEXT COMES FROM. The chapters (`docs/chapters/*.md`) of a local clone of the invest-witus
 * repository, read with `git show <tag>:<path>` at ONE pinned tag, so the working tree's state never
 * matters and the course is exactly what that tag says. Bumping PINNED_TAG (or passing --tag) is the
 * only edit when a chapter is added or fixed.
 *
 * WHERE IT GOES, AND WHY NOT scripts/data. invest-witus is a private repository and its course brief
 * (plans/future-courses/money-and-property, "Open: where CI reads the chapters") has not decided when
 * its text may be public. This repository is public, so the generated course is written to
 * content/private-courses/, which is gitignored and guarded by check-private-courses (see
 * scripts/seed-local-private.ts). Nothing tracked here carries a line of chapter text: this file, the
 * splitter (scripts/lib/invest-tutorial.ts) and the Key Terms list are the whole tracked footprint.
 *
 * HOW LEARNERS ARE KEPT OUT. The file says visibility "private", free, with a hold reason;
 * seed-local-private refuses anything else and re-asserts private and unpublished on every run. A
 * private course is "not found" to everyone but the platform owner and its instructor
 * (courseViewGate in src/lib/vetting.ts, canAccessCourse in src/lib/api.ts). The lessons themselves
 * are published, because the export routes take only published lessons (src/lib/course-export.ts).
 *
 * No quizzes: a held private draft does not need them, and the brief leaves the quiz design open.
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { buildInvestTutorialCourse, type ChapterSource } from "./lib/invest-tutorial";
import { INVEST_TUTORIAL_TERMS } from "./lib/invest-tutorial-terms";
import { argValue, expandHome } from "./lib/course-export-input";

const ROOT = join(import.meta.dirname, "..");
const PINNED_TAG = "v10";
const COURSE_SLUG = "learn-python-by-building-invest-witus";
const CHAPTER_DIR = "docs/chapters";

const TITLE = "Learn Python by Building Invest.WitUS (draft)";
const DESCRIPTION =
  "A reading draft of the Invest.WitUS Python tutorial. You build the app in your own repository, " +
  "chapter by chapter: plain Python first (uv, pytest, ruff and pyright; money as Decimal; a price " +
  "file; a written method reviewed against a journal), then a Django site on Vercel and Neon with " +
  "sign-in through WitUS, a nightly price pull, a watch list and the method engine. Every chapter " +
  "starts from the previous chapter's tag and ends when its tests pass. This is the tutorial's own " +
  "text, generated from the reference repository at one tag; it teaches code, not investing, and is " +
  "information, not advice.";

function git(dir: string, args: string[]): string {
  return execFileSync("git", ["-C", dir, ...args], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
}

/** "00-set-up-your-machine.md" gives "00"; "06a-vercel-web-analytics.md" gives "06a". */
function chapterNumber(file: string): string | null {
  return /^(\d{2}[a-z]?)-.*\.md$/.exec(file)?.[1] ?? null;
}

function main() {
  const source = resolve(expandHome(argValue("--source") ?? process.env.INVEST_WITUS_DIR ?? join(ROOT, "..", "invest-witus")));
  const tag = argValue("--tag") ?? PINNED_TAG;
  const out = resolve(
    expandHome(argValue("--out") ?? join(ROOT, "content", "private-courses", `${COURSE_SLUG}.json`)),
  );

  let commit: string;
  try {
    commit = git(source, ["rev-list", "-n", "1", tag]).trim();
  } catch {
    console.error(
      `Cannot read tag ${tag} in ${source}. Clone invest-witus there (or set INVEST_WITUS_DIR / --source) and \`git fetch --tags\`.`,
    );
    process.exit(1);
  }

  const files = git(source, ["ls-tree", "--name-only", `${tag}:${CHAPTER_DIR}`])
    .split("\n")
    .map((f) => f.trim())
    .filter((f) => chapterNumber(f) !== null)
    .sort();
  if (!files.length) {
    console.error(`No chapters under ${CHAPTER_DIR} at ${tag}.`);
    process.exit(1);
  }

  const chapters: ChapterSource[] = files.map((f) => ({
    number: chapterNumber(f) as string,
    markdown: git(source, ["show", `${tag}:${CHAPTER_DIR}/${f}`]),
  }));
  const missing = chapters.filter((c) => !INVEST_TUTORIAL_TERMS[c.number]?.length).map((c) => c.number);
  if (missing.length) {
    console.error(
      `No Key Terms for chapter(s) ${missing.join(", ")}. Add them to scripts/lib/invest-tutorial-terms.ts first.`,
    );
    process.exit(1);
  }

  const course = buildInvestTutorialCourse({ title: TITLE, description: DESCRIPTION }, chapters, (n) => INVEST_TUTORIAL_TERMS[n]);

  const entry = {
    slug: COURSE_SLUG,
    category: "AI & Technology",
    additionalCategories: ["Money & Property"],
    visibility: "private",
    publishHoldReason:
      "Draft: Python tutorial from Invest.WitUS chapters, not reviewed. Private because the invest-witus " +
      "repository is private and the course brief is still awaiting review; generated for the owner to " +
      "read and export, not for learners.",
    price: 0,
    priceType: "free",
    navigationMode: "linear",
    buildNotes:
      `Generated by scripts/gen-invest-tutorial-course.ts from invest-witus ${tag} (${commit}), ` +
      `${chapters.length} chapters. Do not edit by hand: fix the chapter in invest-witus, tag it, and regenerate.`,
    course,
  };

  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, `${JSON.stringify(entry, null, 2)}\n`);
  const modules = new Set(course.lessons.map((l) => l.section)).size;
  const words = course.lessons.reduce((n, l) => n + (l.body ?? "").split(/\s+/).filter(Boolean).length, 0);
  console.log(
    `Wrote ${out}\n  ${tag} (${commit.slice(0, 7)}): ${modules} modules, ${course.lessons.length} lessons, ${words} words`,
  );
}

main();
