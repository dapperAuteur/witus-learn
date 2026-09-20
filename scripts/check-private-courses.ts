// Guard: nothing under content/private-courses/ may ever be tracked by git.
//
//   pnpm check:private-courses      (runs inside pnpm lint)
//
// WHAT IT PROTECTS. `scripts/seed-local-private.ts` exists so a course BAM builds from a book he
// owns can live in the database without its text living on GitHub. That protection is one
// `git add -f` away from being undone, and the damage is not recoverable: a push is publication,
// and deleting the file later does not remove it from the history or from anyone's clone.
//
// So this fails the build on a tracked file under that directory, and it fails LOUDLY, naming the
// command that undoes it. It is not a ratchet and it has no allowlist, because there is no version
// of "this one copyrighted course text is fine in the repo" that is true.
//
// It also checks the two settings that decide whether such a course could ever be shown, so a file
// that says `"visibility": "public"` is caught here rather than at seed time.

import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const REL = "content/private-courses";
const DIR = join(ROOT, REL);

const violations: string[] = [];

// 1. Tracked files. `git ls-files` lists what is in the index, so this catches a forced add even
//    before it is committed, which is the moment it is still free to undo.
let tracked: string[] = [];
try {
  tracked = execFileSync("git", ["ls-files", REL], { cwd: ROOT, stdio: ["ignore", "pipe", "ignore"] })
    .toString()
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
} catch {
  // Not a git checkout. Nothing to check.
}
for (const f of tracked) {
  violations.push(
    `${f} is TRACKED BY GIT. This directory holds course text built from books that may not be ` +
      `published. Run: git rm --cached "${f}" and confirm it was never pushed.`,
  );
}

// 2. The settings inside each file, so a wrong one is caught before a seed rather than after.
let checked = 0;
if (existsSync(DIR)) {
  for (const f of readdirSync(DIR).filter((n) => n.endsWith(".json"))) {
    checked++;
    let parsed: { visibility?: string; publishHoldReason?: string; price?: number; priceType?: string };
    try {
      parsed = JSON.parse(readFileSync(join(DIR, f), "utf-8"));
    } catch (err) {
      violations.push(`${REL}/${f} is not valid JSON: ${err instanceof Error ? err.message : err}`);
      continue;
    }
    if (parsed.visibility !== "private") {
      violations.push(`${REL}/${f} has visibility ${JSON.stringify(parsed.visibility)}, must be "private"`);
    }
    if (!parsed.publishHoldReason?.trim()) {
      violations.push(`${REL}/${f} has no publishHoldReason, which is what the owner reads on the page`);
    }
    if ((parsed.price != null && parsed.price !== 0) || (parsed.priceType != null && parsed.priceType !== "free")) {
      violations.push(`${REL}/${f} is not free. A course built from someone else's book is not sold.`);
    }
  }
}

console.log(`Scanned ${REL}: ${checked} local private course(s), ${violations.length} violation(s).`);
if (violations.length) {
  for (const v of violations) console.error(`  ✗ ${v}`);
  console.error(
    "\nThis guard has no allowlist on purpose. See scripts/seed-local-private.ts for why the text stays out of git.",
  );
  process.exit(1);
}
