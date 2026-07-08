// reveal-dump — for every remaining inline "**Check yourself.**" prompt, print the course file, the
// lesson title, the question, and the ~700 chars of lesson body that precede the prompt (where the
// answer lives). Used to author grounded :::reveal answers. Read-only.
//   pnpm tsx scripts/reveal-dump.ts > /tmp/reveal-todo.json
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

type Course = { lessons?: { title?: string; body?: string }[] };

async function main() {
  const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "data");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith("-course.ts"));
  const out: { file: string; lesson: string; question: string; context: string }[] = [];

  for (const file of files) {
    const mod = (await import(path.join(dir, file))) as Record<string, unknown>;
    const course = Object.values(mod).find(
      (v): v is Course => Boolean(v) && typeof v === "object" && Array.isArray((v as Course).lessons),
    );
    if (!course?.lessons) continue;

    for (const lesson of course.lessons) {
      const body = lesson.body ?? "";
      const m = body.match(/\*\*Check yourself\.\*\*\s*(.+)/);
      if (!m) continue;
      const question = m[1].trim();
      const before = body.slice(0, m.index ?? 0);
      // strip a trailing "## Sources"/heading noise; keep the last ~700 chars of prose
      const context = before.replace(/\s+/g, " ").trim().slice(-800);
      out.push({ file: file.replace("-course.ts", ""), lesson: lesson.title ?? "", question, context });
    }
  }

  process.stdout.write(JSON.stringify(out, null, 2));
  process.stderr.write(`\n${out.length} prompts dumped\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
