// reveal:convert — convert a course's inline "Check yourself" prompts to the :::reveal directive,
// REUSING each lesson's answer from the NEXT lesson's recall cards (the spaced pattern). Prompts with
// no candidate answer (usually the last content lesson, before the exercise/quiz) are LEFT UNTOUCHED and
// reported, so nothing ships with a missing/placeholder answer — author those by hand afterward.
//   pnpm reveal:convert us-constitution            # dry-run (preview)
//   pnpm reveal:convert us-constitution --write     # apply
//   pnpm reveal:convert civics-101 us-constitution state-vs-federal --write   # several at once
//
// After --write: run `pnpm exec tsc --noEmit`, review the diff, then `pnpm seed:courses` to apply.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

type Lesson = { body?: string; recallContent?: { prompt: string; answer: string }[] };
type Course = { title?: string; lessons?: Lesson[] };

// Pick the SINGLE next-lesson recall card whose prompt best matches the check-yourself question
// (word overlap), rather than joining all of them — the next lesson often has an unrelated second card.
const STOP = new Set(
  "the a an and or of to in is are was were how what which who whom whose does do did two one three under for on it its that this by as with name give explain describe list state say tell your you can could would should when where why".split(" "),
);
function toks(s: string): Set<string> {
  return new Set((s.toLowerCase().match(/[a-z]+/g) ?? []).filter((w) => w.length > 2 && !STOP.has(w)));
}
function bestRecallAnswer(question: string, cards: { prompt: string; answer: string }[]): string {
  const q = toks(question);
  // Join every card that clearly matches the question (>=2 shared meaningful words), in order —
  // captures multi-part answers while dropping the next lesson's unrelated card(s).
  const matched = cards.filter((c) => {
    const ct = toks(c.prompt);
    let score = 0;
    for (const w of q) if (ct.has(w)) score++;
    return score >= 2;
  });
  return matched.map((c) => c.answer.trim()).join(" ");
}

async function main() {
  const write = process.argv.includes("--write");
  const targets = process.argv.slice(2).filter((a) => !a.startsWith("--"));
  if (targets.length === 0) {
    console.error("Usage: pnpm reveal:convert <course-filename-substring> [more…] [--write]");
    process.exit(1);
  }

  const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "data");
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith("-course.ts"))
    .filter((f) => targets.some((t) => f.includes(t)));

  if (files.length === 0) {
    console.error(`No -course.ts files matched: ${targets.join(", ")}`);
    process.exit(1);
  }

  let totalConverted = 0;
  let totalLeft = 0;

  for (const file of files) {
    const full = path.join(dir, file);
    const mod = (await import(full)) as Record<string, unknown>;
    const course = Object.values(mod).find(
      (v): v is Course => Boolean(v) && typeof v === "object" && Array.isArray((v as Course).lessons),
    );
    if (!course?.lessons) continue;

    let text = fs.readFileSync(full, "utf8");
    let converted = 0;
    let left = 0;

    course.lessons.forEach((lesson, i) => {
      const body = lesson.body ?? "";
      const m = body.match(/\*\*Check yourself\.\*\*\s*(.+)/);
      if (!m) return;
      const target = m[0]; // exact "**Check yourself.** <Q>" substring (also verbatim in the file)
      const q = m[1].trim();

      const recall = course.lessons?.[i + 1]?.recallContent ?? [];
      const answer = bestRecallAnswer(q, recall);

      if (!answer || answer.includes("`") || answer.includes("${") || answer.includes("|||")) {
        left++; // no safe candidate — leave as-is for manual authoring
        return;
      }
      if (!text.includes(target)) {
        left++;
        return;
      }
      text = text.replace(target, `:::reveal ${q} ||| ${answer}`);
      converted++;
    });

    console.log(`${file}: ${converted} converted, ${left} left for authoring${write ? " (written)" : " (dry-run)"}`);
    if (write && converted > 0) fs.writeFileSync(full, text);
    totalConverted += converted;
    totalLeft += left;
  }

  console.log(`\nTOTAL: ${totalConverted} converted, ${totalLeft} left for manual authoring.${write ? "" : "  (dry-run — add --write to apply)"}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
