import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { REVEAL_RE, normalizeRevealPrompt } from "../src/lib/reveals";

/**
 * Guard: `:::reveal` self-check cards must be well-formed, or they silently rot into dead prose.
 *
 *   pnpm check:reveals            # exit 1 on any malformed / broken reveal card
 *   pnpm check:reveals --list     # per-file reveal counts
 *
 * A reveal is authored as one flush-left line: `:::reveal <question> ||| <answer>`. The lesson-body
 * renderer matches it with REVEAL_RE anchored at ^ (src/lib/reveals.ts). So a line that INTENDS to be
 * a reveal but is malformed never becomes a gradable card — it just renders as literal text, and no
 * learner is ever quizzed by it. That failure is invisible in the app, which is exactly why it needs
 * a lint. This is a ratchet like check-longest-option: the corpus is currently clean (0 violations),
 * so any NEW broken reveal fails the build. This is the STRUCTURAL half; the SEMANTIC half (does the
 * answer actually match the lesson?) is an advisory AI audit on the instructor tools, not a CI gate.
 *
 * Definitively-wrong things caught here (no judgment calls, so safe to gate):
 *   1. `:::reveal` at column 0 that doesn't match REVEAL_RE  → malformed (missing `|||` or empty side)
 *   2. `:::reveal` with leading whitespace                   → indented, ^ fails, won't render
 *   3. answer is a placeholder (TODO / TBD / FIXME / XXX)    → unfinished card shipped
 *   4. answer equals the question                            → copy-paste error, reveals nothing
 *
 * Comment lines that merely MENTION `:::reveal` in prose are unaffected: `:::reveal` there is not at
 * line start (it follows `//` or other text), so neither pattern matches.
 */

const FLUSH = /^:::reveal(\s|$)/; // a reveal the renderer WILL try to parse
const INDENTED = /^\s+:::reveal(\s|$)/; // author meant a reveal but ^ won't match at runtime
const PLACEHOLDER = /^(todo|tbd|fixme|xxx|\.\.\.|answer here|\?+)$/i;

interface Violation {
  file: string;
  line: number;
  reason: string;
  text: string;
}

function checkFile(file: string, src: string): Violation[] {
  const out: Violation[] = [];
  const lines = src.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const at = (reason: string) => out.push({ file, line: i + 1, reason, text: raw.trim().slice(0, 80) });

    if (INDENTED.test(raw)) {
      at("indented: must be flush-left or it renders as prose, never a card");
      continue;
    }
    if (!FLUSH.test(raw)) continue;

    const m = raw.match(REVEAL_RE);
    if (!m) {
      at("malformed: needs `:::reveal <question> ||| <answer>`");
      continue;
    }
    const question = m[1].trim();
    const answer = m[2].trim();
    if (PLACEHOLDER.test(answer)) at(`placeholder answer (${answer})`);
    else if (normalizeRevealPrompt(question) === normalizeRevealPrompt(answer))
      at("answer equals the question (reveals nothing)");
  }
  return out;
}

const listAll = process.argv.includes("--list");
const files = execFileSync("git", ["ls-files", "scripts/data"], { encoding: "utf-8" })
  .split("\n")
  .filter((f) => f.endsWith("-course.ts"));

const violations: Violation[] = [];
let total = 0;
for (const file of files) {
  const src = readFileSync(file, "utf-8");
  const n = src.split("\n").filter((l) => FLUSH.test(l)).length;
  total += n;
  if (listAll && n > 0) console.log(`  ${n.toString().padStart(3)} reveal  ${file}`);
  violations.push(...checkFile(file, src));
}

console.log(`Scanned ${files.length} course files: ${total} reveal cards, ${violations.length} broken.`);
if (violations.length > 0) {
  console.error("\nBroken :::reveal cards (they render as dead prose and never quiz anyone):");
  for (const v of violations) console.error(`  ${v.file}:${v.line}  ${v.reason}\n      ${v.text}`);
  process.exit(1);
}
