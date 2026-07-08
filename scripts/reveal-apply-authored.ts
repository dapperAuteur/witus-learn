// reveal-apply-authored — apply hand-authored :::reveal answers from a JSON file. Each entry is
// { file, q, a }; we find the exact "**Check yourself.** <q>" line in scripts/data/<file>-course.ts
// and replace it with ":::reveal <q> ||| <a>". Idempotent: an already-converted prompt is skipped.
//   pnpm tsx scripts/reveal-apply-authored.ts <answers.json>
//   pnpm tsx scripts/reveal-apply-authored.ts <answers.json> --dry
// After: pnpm exec tsc --noEmit, review the diff, then pnpm seed:courses.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

type Entry = { file: string; q: string; a: string };

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function main() {
  const dry = process.argv.includes("--dry");
  const jsonArg = process.argv.slice(2).find((a) => !a.startsWith("--"));
  if (!jsonArg) {
    console.error("Usage: pnpm tsx scripts/reveal-apply-authored.ts <answers.json> [--dry]");
    process.exit(1);
  }
  const entries = JSON.parse(fs.readFileSync(jsonArg, "utf8")) as Entry[];
  const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "data");

  let applied = 0;
  let missing = 0;
  const byFile = new Map<string, Entry[]>();
  for (const e of entries) {
    const arr = byFile.get(e.file) ?? [];
    arr.push(e);
    byFile.set(e.file, arr);
  }

  for (const [file, es] of byFile) {
    const full = path.join(dir, `${file}-course.ts`);
    if (!fs.existsSync(full)) {
      console.error(`  MISSING FILE: ${file}-course.ts`);
      missing += es.length;
      continue;
    }
    let text = fs.readFileSync(full, "utf8");
    for (const e of es) {
      if (e.a.includes("|||")) {
        console.error(`  SKIP (answer contains |||): ${file} :: ${e.q.slice(0, 40)}…`);
        missing++;
        continue;
      }
      // Match the literal "**Check yourself.** " + question, tolerant of the trailing whitespace.
      const re = new RegExp("\\*\\*Check yourself\\.\\*\\*\\s*" + escapeRegex(e.q));
      if (!re.test(text)) {
        console.error(`  NOT FOUND: ${file} :: ${e.q.slice(0, 50)}…`);
        missing++;
        continue;
      }
      text = text.replace(re, `:::reveal ${e.q} ||| ${e.a}`);
      applied++;
    }
    if (!dry) fs.writeFileSync(full, text);
  }

  console.log(`\n${applied} applied, ${missing} not found/skipped.${dry ? "  (dry-run)" : ""}`);
  if (missing > 0) process.exit(2);
}

main();
