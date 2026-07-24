import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

/**
 * Guard: recall cards must quiz the PREVIOUS lesson, never the one they sit on.
 *
 *   pnpm check:recall            # exit 1 if any tracked course has recall on its first teaching lesson
 *   pnpm check:recall --list     # per-course recall counts
 *
 * `recallContent` renders at the TOP of a lesson, before its body (the lesson page comment:
 * "Open with recall: quiz the PREVIOUS lesson before this one's content"; the FAA source's [RECALL]
 * beat opens "Last lesson was about ..."). It is spaced retrieval: reach lesson N, get quizzed on
 * N-1 which you have read, THEN read N.
 *
 * The catch: recall on the FIRST teaching lesson is always wrong, because nothing precedes it, so any
 * recall there tests unread content. A learner reported it on the Green Book course; it was an
 * authoring-convention error shared across many hand-authored courses, fixed by
 * scripts/fix-recall-placement.ts (which shifts each lesson's recall onto the next teaching lesson).
 *
 * Parsing is LINE/MARKER based, not brace based: course bodies contain literal { } in prose, which
 * defeats brace counting. A lesson starts at a `slug:` key at six-space indent.
 */

const SLUG = /^\s{6}slug:\s*"/;
const RECALL = /^\s{6}recallContent:\s*\[/;
const BODY = /^\s{6}body:/;
const QUIZ = /^\s{6}quiz:\s*\{/;
const EXERCISE = /^\s{6}exercise:\s*\{/;
const MAPC = /^\s{6}mapContent:/;
const LTYPE = /^\s{6}lessonType:\s*"([^"]+)"/;

/** Ordered lessons, each tagged teaching + hasRecall. */
export function parseLessons(src: string): { teaching: boolean; hasRecall: boolean }[] {
  const lines = src.split("\n");
  const starts: number[] = [];
  lines.forEach((l, i) => {
    if (SLUG.test(l)) starts.push(i);
  });
  return starts.map((s, k) => {
    const end = k + 1 < starts.length ? starts[k + 1] : lines.length;
    let hasRecall = false;
    let hasBody = false;
    let hasQuiz = false;
    let hasExercise = false;
    let hasMap = false;
    let media = false;
    for (let i = s; i < end; i++) {
      if (RECALL.test(lines[i])) hasRecall = true;
      if (BODY.test(lines[i])) hasBody = true;
      if (QUIZ.test(lines[i])) hasQuiz = true;
      if (EXERCISE.test(lines[i])) hasExercise = true;
      if (MAPC.test(lines[i])) hasMap = true;
      const m = LTYPE.exec(lines[i]);
      if (m && ["virtual_tour", "photo_360", "360video", "assignment"].includes(m[1])) media = true;
    }
    return { teaching: hasBody && !hasQuiz && !hasExercise && !hasMap && !media, hasRecall };
  });
}

export function firstTeachingHasRecall(src: string): boolean {
  const first = parseLessons(src).find((l) => l.teaching);
  return Boolean(first?.hasRecall);
}

const listAll = process.argv.includes("--list");
const files = execFileSync("git", ["ls-files", "scripts/data"], { encoding: "utf-8" })
  .split("\n")
  .filter((f) => f.endsWith("-course.ts"));
const violations: string[] = [];
for (const file of files) {
  const src = readFileSync(file, "utf-8");
  if (listAll) {
    const n = parseLessons(src).filter((l) => l.hasRecall).length;
    if (n > 0) console.log(`  ${n.toString().padStart(3)} recall  ${file}`);
  }
  if (firstTeachingHasRecall(src)) violations.push(file);
}
console.log(`Scanned ${files.length} course files: ${violations.length} with recall on the first teaching lesson.`);
if (violations.length > 0) {
  console.error("\nRecall must quiz the PREVIOUS lesson. These carry it on lesson 1 (nothing precedes it):");
  for (const v of violations) console.error(`  ${v}`);
  console.error("\nFix: pnpm exec tsx scripts/fix-recall-placement.ts <file> --apply");
  process.exit(1);
}
