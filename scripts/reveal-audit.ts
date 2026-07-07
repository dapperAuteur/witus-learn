// reveal:audit — inventory every inline "Check yourself" self-check across the authored courses so the
// `:::reveal` rollout (plans/future/18-reveal-rollout.md) is a checklist, not a hunt. For each prompt it
// reports the course, lesson, and whether a plausible answer already exists in the NEXT lesson's
// recall cards (the spaced pattern most courses use) — so we maximize answer-reuse before authoring.
//   pnpm reveal:audit                 # summary + per-course counts
//   pnpm reveal:audit --list          # also print every unconverted prompt
//   pnpm reveal:audit --course hoodoo # filter by filename substring
//
// Read-only: imports the data modules, touches no DB.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

type Lesson = { slug?: string; title?: string; body?: string; recallContent?: { prompt: string; answer: string }[] };
type Course = { title?: string; lessons?: Lesson[] };

const flag = (n: string) => {
  const i = process.argv.indexOf(`--${n}`);
  return i !== -1 ? (process.argv[i + 1]?.startsWith("--") ? true : process.argv[i + 1]) : undefined;
};

const CHECK_RE = /\*\*Check yourself\.\*\*\s*(.+)/g;

async function main() {
  const list = Boolean(flag("list"));
  const courseFilter = typeof flag("course") === "string" ? (flag("course") as string) : undefined;

  const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "data");
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith("-course.ts"))
    .filter((f) => !courseFilter || f.includes(courseFilter))
    .sort();

  let totalPrompts = 0;
  let totalConverted = 0;
  let totalWithCandidate = 0;
  let totalNoCandidate = 0;
  const rows: { file: string; course: string; prompts: number; converted: number; withCand: number; noCand: number }[] = [];

  for (const file of files) {
    const mod = (await import(path.join(dir, file))) as Record<string, unknown>;
    const course = Object.values(mod).find(
      (v): v is Course => Boolean(v) && typeof v === "object" && Array.isArray((v as Course).lessons),
    );
    if (!course?.lessons) continue;

    let prompts = 0;
    let converted = 0;
    let withCand = 0;
    let noCand = 0;
    const details: string[] = [];

    course.lessons.forEach((lesson, i) => {
      const body = lesson.body ?? "";
      converted += (body.match(/^:::reveal/gm) ?? []).length;
      const matches = [...body.matchAll(CHECK_RE)];
      if (matches.length === 0) return;
      const nextRecall = course.lessons?.[i + 1]?.recallContent?.length ?? 0;
      for (const m of matches) {
        prompts += 1;
        const hasCand = nextRecall > 0;
        if (hasCand) withCand += 1;
        else noCand += 1;
        if (list) {
          details.push(`    [${hasCand ? `~${nextRecall} recall cards next` : "NO candidate"}] ${lesson.title ?? lesson.slug}: ${m[1].slice(0, 90)}`);
        }
      }
    });

    if (prompts > 0 || converted > 0) {
      rows.push({ file, course: course.title ?? file, prompts, converted, withCand, noCand });
      totalPrompts += prompts;
      totalConverted += converted;
      totalWithCandidate += withCand;
      totalNoCandidate += noCand;
      if (list && details.length) {
        console.log(`\n${course.title ?? file}  (${file})`);
        for (const d of details) console.log(d);
      }
    }
  }

  if (!list) {
    rows.sort((a, b) => b.prompts - a.prompts);
    console.log("unconverted | converted | reuse | author | course");
    for (const r of rows) {
      console.log(`${String(r.prompts).padStart(11)} | ${String(r.converted).padStart(9)} | ${String(r.withCand).padStart(5)} | ${String(r.noCand).padStart(6)} | ${r.course}`);
    }
  }

  console.log(
    `\nTOTAL: ${totalPrompts} unconverted prompts across ${rows.filter((r) => r.prompts > 0).length} courses · ` +
      `${totalConverted} already :::reveal · ${totalWithCandidate} have candidate recall answers to reuse · ` +
      `${totalNoCandidate} need answers authored.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
