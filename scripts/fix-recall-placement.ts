import { readFileSync, writeFileSync } from "node:fs";

/**
 * Shift each teaching lesson's `recallContent` onto the NEXT teaching lesson, so recall quizzes the
 * PREVIOUS lesson (already read) instead of the one it sits on (not yet read). See
 * scripts/check-recall-placement.ts for the why.
 *
 *   pnpm exec tsx scripts/fix-recall-placement.ts <file>          # dry run
 *   pnpm exec tsx scripts/fix-recall-placement.ts <file> --apply  # write
 *
 * ONLY for a course whose recall currently tests its OWN lesson (the flagged set). It MOVES card
 * blocks, never edits a card. Lesson 1 loses its recall; the last teaching lesson's recall drops.
 *
 * Parsing is LINE/MARKER based, not brace based: course bodies contain literal { } in prose, which
 * defeats brace counting (it once collapsed 13 lessons into 1). A lesson starts at a `slug:` key at
 * six-space indent; a recallContent block runs from its `recallContent: [` line to the next line
 * that is exactly six spaces then `],`.
 */

interface Lesson {
  startLine: number; // index into lines[] of the `slug:` line
  endLine: number; // exclusive
  teaching: boolean;
  recall: { from: number; to: number; lines: string[] } | null; // line range of the recall block
  insertAt: number; // line index to insert a block if the lesson has none (before `body:`)
}

const SLUG = /^\s{6}slug:\s*"/;
const RECALL = /^\s{6}recallContent:\s*\[/;
const BLOCK_END = /^\s{6}\],?\s*$/;
const BODY = /^\s{6}body:/;
const QUIZ = /^\s{6}quiz:\s*\{/;
const EXERCISE = /^\s{6}exercise:\s*\{/;
const MAPC = /^\s{6}mapContent:/;
const LTYPE = /^\s{6}lessonType:\s*"([^"]+)"/;

function parse(lines: string[]): Lesson[] {
  const starts: number[] = [];
  lines.forEach((l, i) => {
    if (SLUG.test(l)) starts.push(i);
  });
  return starts.map((s, k) => {
    const end = k + 1 < starts.length ? starts[k + 1] : lines.length;
    let recall: Lesson["recall"] = null;
    let hasBody = false;
    let hasQuiz = false;
    let hasExercise = false;
    let hasMap = false;
    let media = false;
    let insertAt = s + 1;
    for (let i = s; i < end; i++) {
      if (BODY.test(lines[i])) {
        hasBody = true;
        insertAt = i;
      }
      if (QUIZ.test(lines[i])) hasQuiz = true;
      if (EXERCISE.test(lines[i])) hasExercise = true;
      if (MAPC.test(lines[i])) hasMap = true;
      const m = LTYPE.exec(lines[i]);
      if (m && ["virtual_tour", "photo_360", "360video", "assignment"].includes(m[1])) media = true;
      if (RECALL.test(lines[i]) && !recall) {
        let j = i;
        while (j < end && !BLOCK_END.test(lines[j])) j++;
        recall = { from: i, to: j, lines: lines.slice(i, j + 1) };
      }
    }
    const teaching = hasBody && !hasQuiz && !hasExercise && !hasMap && !media;
    return { startLine: s, endLine: end, teaching, recall, insertAt };
  });
}

const file = process.argv[2];
const apply = process.argv.includes("--apply");
if (!file) {
  console.error("usage: fix-recall-placement.ts <file> [--apply]");
  process.exit(2);
}
const lines = readFileSync(file, "utf-8").split("\n");
const lessons = parse(lines);
const teaching = lessons.filter((l) => l.teaching);

// desired[idx] = the PREVIOUS teaching lesson's current recall block lines (or null for lesson 1)
const desired: (string[] | null)[] = teaching.map((_, i) => (i === 0 ? null : teaching[i - 1].recall?.lines ?? null));

// Build line-range replacements. Apply bottom-up so indices stay valid.
type Edit = { from: number; to: number; lines: string[] }; // replace lines[from..to] inclusive with lines
const edits: Edit[] = [];
teaching.forEach((l, i) => {
  const want = desired[i];
  if (l.recall && want === null) {
    edits.push({ from: l.recall.from, to: l.recall.to, lines: [] }); // delete
  } else if (l.recall && want && want.join("\n") !== l.recall.lines.join("\n")) {
    edits.push({ from: l.recall.from, to: l.recall.to, lines: want }); // replace
  } else if (!l.recall && want) {
    edits.push({ from: l.insertAt, to: l.insertAt - 1, lines: want }); // insert before body line (to<from = pure insert)
  }
});

console.log(
  `${file}: ${teaching.length} teaching lessons, ${teaching.filter((l) => l.recall).length} carry recall. ${edits.length} edit(s).`,
);
if (!apply) {
  console.log("(dry run)");
  process.exit(0);
}

edits.sort((a, b) => b.from - a.from);
const out = lines.slice();
for (const e of edits) {
  const count = e.to >= e.from ? e.to - e.from + 1 : 0;
  out.splice(e.from, count, ...e.lines);
}
writeFileSync(file, out.join("\n"));
console.log("applied.");
