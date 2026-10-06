// gen:future-work: regenerate the COMMITTED future-work content modules from the local planning
// notes in `plans/future-courses/` (which is GITIGNORED and therefore does not exist in a deploy).
//
//   pnpm gen:future-work                       # write src/lib/future-work-content/*.ts
//   pnpm gen:future-work -- --out <dir>        # dry run: write the modules somewhere else
//   pnpm gen:future-work -- --keys             # dry run: print key / source / group / provenance / body hash
//   pnpm gen:future-work -- --allow-drop a,b   # permit removing committed keys a and b (see the drop guard)
//   pnpm gen:future-work -- --from <dir>       # read the notes from another checkout
//
// Why this exists: /admin/future renders these proposals in the deployed app, so the content cannot
// be read from `plans/` at runtime, that directory isn't in the repo, isn't in the build, and isn't
// on the server. This script is a DEV-TIME step: it reads the local markdown once and writes plain
// TypeScript string modules under `src/lib/future-work-content/`, which ARE committed and are the only
// thing the app ever imports. Nothing in `src/` touches the filesystem or `plans/` at request time.
//
// Re-run it after editing the source notes, then commit the regenerated modules.
//
// THE LAYOUT IT READS (since 2026-10-05). The notes folder mirrors the app's course categories:
//
//   plans/future-courses/
//     README.md                       skipped
//     <category>/                     a folder named in scripts/lib/plan-categories.ts: TRANSPARENT
//       YYYY-MM-DD-<note>.md          a loose note; key = the undated filename
//       <area>/*.md                   a topic bundle; key = `<area>-<undated, un-numbered filename>`
//       she-did-the-work/             the one specially handled bundle, found by name
//     _platform/                      same rules; notes about the product, not a course
//     completed/                      skipped (shipped notes; dropping one orphans its notes on purpose)
//     tpt-packets/                    skipped (build artifacts named by app code, not notes)
//
// The category folder adds NOTHING to a key. That is deliberate and load-bearing: item keys are the
// join column for `future_work_notes`, and a note filed against `mansa-gold-interview-prep` must still
// render after the folder it sits in moves from `plans/future-courses/bvc-taster/mansa-gold/` to
// `plans/future-courses/bvc-taster/mansa-gold/`. A folder at the top level that is NOT in the category
// map is still read as a legacy area (with a warning), so an unfiled bundle is visible rather than lost.
//
// PRIVATE STUDY. A bundle folder that contains a `*READ-ME-FIRST-private-study-only.md` marker holds
// material BAM reads but does not publish (plans/future-courses/culture-and-history/uncredited/00-READ-ME-FIRST…). Pushing
// its text into this committed module would publish it to GitHub, so such a folder emits nothing. The
// one exception is a key that was already committed before the rule existed (GRANDFATHERED_PRIVATE_KEYS),
// because removing it would orphan notes filed against it.
//
// THE DROP GUARD. Before writing, the script compares the keys it is about to emit with the keys in the
// committed modules. Any committed key that would disappear stops the run unless it is named in
// `--allow-drop`. A changed key shows up as a drop plus an add, which is exactly the mistake this guards
// against. Archiving a note to `completed/` is the legitimate case, and `--allow-drop` is how you say so.

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { isPlanCategoryDir } from "./lib/plan-categories";

/**
 * Strip em-dashes and en-dashes from generated prose.
 *
 * The SOURCE for this generator is `plans/future-courses/`, which is GITIGNORED and therefore was
 * never touched by the repo-wide em-dash sweep. The modules it writes under `src/lib/` ARE tracked
 * and WERE swept, so regenerating without this would silently undo the sweep and fail
 * `pnpm lint` (which runs scripts/check-em-dashes.ts). That is exactly what happened the first time
 * this ran after the sweep: 862 violations, all reintroduced by one generator pass.
 *
 * Same approach as scripts/gen-health-data.ts: fix it in the generator, not in the artifact, so it
 * survives the next regeneration. Year and number ranges become hyphens; a spaced dash becomes a
 * comma; a tight one becomes a hyphen.
 */
function deDash(text: string): string {
  let out = text;
  out = out.replace(/(\d)\s*[\u2013\u2014]\s*(\d)/g, "$1-$2");
  out = out.replace(/\s+[\u2013\u2014]\s+/g, ", ");
  out = out.replace(/([A-Za-z0-9'")])[\u2013\u2014](?=[A-Za-z0-9'"(])/g, "$1-");
  out = out.replace(/\s*[\u2013\u2014]\s*/g, ", ");
  out = out.replace(/,\s*([.,;:!?])/g, "$1");
  out = out.replace(/,\s+,/g, ",");
  return out;
}

const ROOT = join(import.meta.dirname, "..");
const OUT_DIR = join(ROOT, "src", "lib", "future-work-content");

// ── Flags ─────────────────────────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
function flagValue(name: string): string | null {
  const i = argv.indexOf(name);
  return i !== -1 && argv[i + 1] ? argv[i + 1] : null;
}
const FROM = flagValue("--from");
const OUT = flagValue("--out");
const KEYS_ONLY = argv.includes("--keys");
const ALLOW_DROP = new Set(
  (flagValue("--allow-drop") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
);

// `--from <dir>` overrides. Otherwise: this checkout's plans/, then the main checkout's plans/
// (a git worktree never has the gitignored dir, but it sits three levels under the main one).
const SRC_DIRS = FROM
  ? [FROM]
  : [join(ROOT, "plans", "future-courses"), join(ROOT, "..", "..", "..", "plans", "future-courses")];

function sourceDir(): string {
  for (const d of SRC_DIRS) {
    try {
      readdirSync(d);
      return d;
    } catch {
      // try next
    }
  }
  console.error(`No plans/future-courses/ found. Looked in:\n  ${SRC_DIRS.join("\n  ")}`);
  process.exit(1);
}

/** Escape a markdown body for embedding in a TS template literal. */
function lit(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

/** One-line summary: the "Who she is." sentence, de-bolded and trimmed. */
function summarize(body: string): string {
  const m = body.match(/\*\*Who she is\.\*\*\s*([\s\S]*?)(?:\n\n|$)/);
  const raw = m
    ? m[1]
    : (body
        .split("\n")
        .find((l) => l.trim() && !l.startsWith("http") && !l.startsWith("#")) ?? "");
  const flat = raw.replace(/\*\*/g, "").replace(/\*/g, "").replace(/\s+/g, " ").trim();
  if (flat.length <= 160) return flat;
  // Cut on a word boundary. Sentence-splitting mangles "J.P.", "B.S.", "John W. Rogers".
  const head = flat.slice(0, 157);
  return head.slice(0, head.lastIndexOf(" ")).replace(/[,;:]$/, "") + "…";
}

const header = (from: string) =>
  `// GENERATED by \`pnpm gen:future-work\` from ${from}, DO NOT EDIT BY HAND.\n` +
  `// The source notes live in the gitignored \`plans/\` dir, so the content is committed here as\n` +
  `// plain strings: the deployed app imports this module and never reads the filesystem.\n\n`;

/**
 * Strip the `YYYY-MM-DD-` prefix every note under plans/future-courses/ gained on 2026-08-26.
 * Item keys are the join column for future_work_notes, so they must survive a file rename.
 */
function undatedName(f: string): string {
  return f.replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

// ── Discovery ─────────────────────────────────────────────────────────────────────────────────────

const SKIP_DIRS = new Set(["completed", "tpt-packets"]);
/** README, underscore-prefixed working files and dotfiles are never items. */
const SKIP_FILE = /^(README\.md|_.*|\..*)$/i;
const PRIVATE_MARKER = /READ-ME-FIRST.*private-study-only\.md$/i;
/** Keys committed before the private-study rule existed; dropping them would orphan notes. */
const GRANDFATHERED_PRIVATE_KEYS = new Set(["reporter-learn-to-be-a-reporter"]);

interface LooseNote {
  dir: string;
  /** Path segment(s) between plans/future-courses/ and the file, with a trailing slash, or "". */
  rel: string;
  file: string;
}
interface Area {
  name: string;
  dir: string;
  rel: string;
}
interface Discovered {
  sdtw: { dir: string; rel: string };
  loose: LooseNote[];
  areas: Area[];
}

function discover(root: string): Discovered {
  const loose: LooseNote[] = [];
  const areas: Area[] = [];
  const sdtws: { dir: string; rel: string }[] = [];

  const addArea = (name: string, dir: string, rel: string) => {
    if (areas.some((a) => a.name === name)) {
      throw new Error(
        `Two topic folders are both named "${name}" (${rel} and ${areas.find((a) => a.name === name)!.rel}). ` +
          `Area names must be unique because they prefix item keys.`,
      );
    }
    areas.push({ name, dir, rel });
  };

  for (const e of readdirSync(root, { withFileTypes: true })) {
    if (e.isFile()) {
      if (e.name.endsWith(".md") && !SKIP_FILE.test(e.name)) {
        console.warn(`unfiled note at the top level (file it under a category folder): ${e.name}`);
        loose.push({ dir: root, rel: "", file: e.name });
      }
      continue;
    }
    if (!e.isDirectory() || SKIP_DIRS.has(e.name)) continue;
    if (e.name === "she-did-the-work") {
      sdtws.push({ dir: join(root, e.name), rel: "" });
      continue;
    }
    if (!isPlanCategoryDir(e.name)) {
      // `_platform` is in the category map, so this only skips dot-folders and stray `_` folders.
      if (SKIP_FILE.test(e.name)) continue;
      console.warn(`top-level folder "${e.name}" is not a category folder; read as a legacy topic bundle`);
      addArea(e.name, join(root, e.name), `${e.name}/`);
      continue;
    }
    // A category folder: transparent. Its files are loose notes, its folders are areas.
    const catDir = join(root, e.name);
    for (const c of readdirSync(catDir, { withFileTypes: true })) {
      if (c.isFile()) {
        if (c.name.endsWith(".md") && !SKIP_FILE.test(c.name)) loose.push({ dir: catDir, rel: `${e.name}/`, file: c.name });
        continue;
      }
      if (!c.isDirectory() || SKIP_DIRS.has(c.name) || SKIP_FILE.test(c.name)) continue;
      if (c.name === "she-did-the-work") {
        sdtws.push({ dir: join(catDir, c.name), rel: `${e.name}/` });
        continue;
      }
      addArea(c.name, join(catDir, c.name), `${e.name}/${c.name}/`);
    }
  }

  if (sdtws.length !== 1) {
    throw new Error(`expected exactly one she-did-the-work/ folder, found ${sdtws.length}: ${sdtws.map((s) => s.rel + "she-did-the-work").join(", ") || "(none)"}`);
  }
  return { sdtw: sdtws[0], loose, areas };
}

// ── Keys: these two rules are the contract with future_work_notes.item_key. Never change them. ──

/** A loose note's key: filename without .md and without the date prefix. An `NN-` prefix is KEPT. */
function looseKey(file: string): string {
  return deDash(file.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, ""));
}

/** An area note's key: `<area>-<filename without .md, date prefix and NN- prefix>`. Case is kept. */
function areaKey(area: string, file: string): string {
  // undatedName() first: `^\d+-` alone eats only the YEAR of `2026-07-13-00-interview-prep.md`,
  // leaving `mansa-gold-07-13-00-interview-prep` where the committed key is
  // `mansa-gold-interview-prep`. That drift orphans every future_work_notes row on the old key.
  const base = undatedName(file).replace(/\.md$/, "").replace(/^\d+-/, "");
  return deDash(`${area}-${base}`);
}

function provenance(rel: string, file: string): string {
  return deDash(`plans/future-courses/${rel}${file}`);
}

const sha = (s: string) => createHash("sha256").update(s).digest("hex").slice(0, 16);

// ── Main ──────────────────────────────────────────────────────────────────────────────────────────

interface Emitted {
  key: string;
  source: "proposal" | "subdir" | "sdtw";
  group: string;
  provenance: string;
  body: string;
}

function main() {
  const dir = sourceDir();
  const { sdtw, loose, areas } = discover(dir);
  const emitted: Emitted[] = [];
  const undated = undatedName;

  // ── She Did The Work: the proposal + one seed file per subject ───────────────────────────────
  // Every note under plans/future-courses/ was renamed to `YYYY-MM-DD-<original>.md` on 2026-08-26.
  // Strip that prefix BEFORE any name-based logic. Without this the `NN-` index-doc filter below
  // matches all 32 files (they all begin with a date) and the generator writes ZERO subjects, and
  // the hardcoded `00-course-proposals.md` read throws ENOENT. Both were live: the committed output
  // survived only because it was generated before the rename.
  const sdtwFiles = readdirSync(sdtw.dir).filter((f) => f.endsWith(".md") && !SKIP_FILE.test(f));
  const proposalFile = sdtwFiles.find((f) => undated(f) === "00-course-proposals.md");
  if (!proposalFile) throw new Error(`no 00-course-proposals.md in ${sdtw.dir} (date prefix allowed)`);
  const proposal = deDash(readFileSync(join(sdtw.dir, proposalFile), "utf8").trim());
  const sdtwRel = `${sdtw.rel}she-did-the-work/`;
  // Subject seeds are named after the woman (`abigail-adams.md`). A NUMBER-PREFIXED file is an index
  // or list doc, not a person: `00-course-proposals.md` is read separately above, and a later
  // `01-list-of-women-that-did-the-work.md` was silently emitted as a 30th "subject" whose 88-char
  // body then failed tests/future-work.test.ts. Skipping the whole `NN-` convention rather than just
  // `00-` fixes the class instead of the instance.
  const subjectFiles = sdtwFiles.filter((f) => !/^\d+-/.test(undated(f))).sort();

  const subjects = subjectFiles.map((f) => {
    // Key off the UNDATED name so `abigail-adams` survives the rename. The key is the join column
    // for future_work_notes; changing it orphans every note filed against it.
    const name = undated(f).replace(/\.md$/, "");
    const body = deDash(readFileSync(join(sdtw.dir, f), "utf8").trim());
    return { key: slugify(name), name, summary: summarize(body), body, provenance: provenance(sdtwRel, f) };
  });
  emitted.push({ key: "she-did-the-work", source: "sdtw", group: "She Did the Work", provenance: provenance(sdtwRel, proposalFile), body: proposal });
  for (const s of subjects) emitted.push({ key: `sdtw-${s.key}`, source: "sdtw", group: "She Did the Work, subject research", provenance: s.provenance, body: s.body });

  let out = header(`plans/future-courses/${sdtwRel}`);
  out += `/** The full "She Did the Work" course-proposal document (9 proposed courses, the build order,\n *  the 14 factual errors in the source calendar, and the rights/permissions table). */\n`;
  out += `export const SHE_DID_THE_WORK_PROPOSAL = \`${lit(proposal)}\`;\n\n`;
  out += `/** Where the proposal document lives locally (gitignored; not read at runtime). */\n`;
  out += `export const SHE_DID_THE_WORK_PROVENANCE = ${JSON.stringify(provenance(sdtwRel, proposalFile))};\n\n`;
  out += `export interface SubjectSeed {\n  /** Stable slug, e.g. "ava-duvernay". */\n  key: string;\n  name: string;\n  summary: string;\n  /** The full seed file: sources, fact-checks, course concept. */\n  body: string;\n  /** The local planning file this was generated from (gitignored; not read at runtime). */\n  provenance: string;\n}\n\n`;
  out += `/** One research seed file per woman in the calendar (${subjects.length}). */\nexport const SHE_DID_THE_WORK_SUBJECTS: SubjectSeed[] = [\n`;
  for (const s of subjects) {
    out += `  {\n    key: ${JSON.stringify(s.key)},\n    name: ${JSON.stringify(s.name)},\n    summary: ${JSON.stringify(s.summary)},\n    body: \`${lit(s.body)}\`,\n    provenance: ${JSON.stringify(s.provenance)},\n  },\n`;
  }
  out += `];\n`;

  // ── Loose notes (auto-discovered) ────────────────────────────────────────────────────────────
  // AUTO-DISCOVERED, deliberately. These used to be two hardcoded filenames, which meant every new
  // planning note BAM dropped in `plans/future-courses/` was SILENTLY IGNORED by /admin/future until
  // someone remembered to edit this script. Now every `.md` directly inside a category folder (or at
  // the top level) becomes an item automatically. Add a note, run `pnpm gen:future-work`, done.
  // Sorted by filename across all category folders, exactly as the single top-level listing used to
  // be, so a regeneration after a move changes provenance lines and nothing else.
  const looseSorted = [...loose].sort((a, b) => (a.file < b.file ? -1 : a.file > b.file ? 1 : a.rel < b.rel ? -1 : a.rel > b.rel ? 1 : 0));

  let out2 = header("plans/future-courses/<category>/*.md (auto-discovered, add a .md, re-run, done)");
  out2 += `export interface ProposalDoc {\n  /** Stable key: the filename without .md and without its date prefix. Used as the /admin/future item key. */\n  key: string;\n  /** Human title: the doc's first \`# heading\`, else the de-slugged filename. */\n  title: string;\n  /** First real line of prose, for the card. */\n  summary: string;\n  body: string;\n  provenance: string;\n}\n\n`;
  out2 += `export const PROPOSAL_DOCS: ProposalDoc[] = [\n`;
  for (const n of looseSorted) {
    const body = deDash(readFileSync(join(n.dir, n.file), "utf8").trim());
    if (!body) continue;
    // deDash the FILENAME too, not just the body. A source note whose filename contains an en-dash
    // (one does) otherwise writes that dash straight into `key`, `title` and `provenance` in this
    // committed module, and `pnpm lint` fails on every regeneration for a reason that looks like it
    // came from nowhere. The date prefix is stripped so the key survives the 2026-08-26 rename; an
    // `NN-` prefix is kept, because 15 committed keys carry one.
    const key = looseKey(n.file);
    // Title: prefer the doc's own H1; fall back to the filename, de-slugged.
    const h1 = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
    const title = h1 ?? key.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
    const prov = provenance(n.rel, n.file);
    emitted.push({ key, source: "proposal", group: "Proposals", provenance: prov, body });
    out2 += `  {\n    key: ${JSON.stringify(key)},\n    title: ${JSON.stringify(title)},\n    summary: ${JSON.stringify(summarize(body))},\n    body: \`${lit(body)}\`,\n    provenance: ${JSON.stringify(prov)},\n  },\n`;
  }
  out2 += `];\n`;

  // ── Topic bundles (auto-discovered) ──────────────────────────────────────────────────────────
  // A folder inside a category folder is a multi-file bundle (e.g. mansa-gold/ = an interview-prep
  // doc + its background research). Every `.md` in it becomes one item, grouped by the folder. Same
  // deal as the loose notes: drop a folder in, re-run, it appears. (she-did-the-work has its own
  // richer block above, so it is skipped here.) `*-FULL.md` is skipped by convention: it is a
  // concatenation of the sibling files for PDF export, and including it would duplicate them.
  // Folders are read ONE level deep, as they always were: `health/dossiers/**` is not an item.
  const areasSorted = [...areas].sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));

  out2 += `\nexport interface SubdirDoc extends ProposalDoc {\n  /** The folder it came from, used as the /admin/future group. */\n  group: string;\n}\n\n`;
  out2 += `export const SUBDIR_DOCS: SubdirDoc[] = [\n`;
  for (const area of areasSorted) {
    const children = readdirSync(area.dir);
    const isPrivate = children.some((f) => PRIVATE_MARKER.test(f));
    const files = children
      .filter((f) => f.endsWith(".md") && !f.endsWith("-FULL.md") && !SKIP_FILE.test(f) && !PRIVATE_MARKER.test(f))
      .sort();
    const group = area.name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    for (const f of files) {
      const key = areaKey(area.name, f);
      if (isPrivate && !GRANDFATHERED_PRIVATE_KEYS.has(key)) {
        console.error(`private study, not emitted: ${area.rel}${f}`);
        continue;
      }
      const body = deDash(readFileSync(join(area.dir, f), "utf8").trim());
      if (!body) continue;
      const h1 = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
      const base = undatedName(f).replace(/\.md$/, "").replace(/^\d+-/, "");
      const title = h1 ?? base.replace(/-/g, " ");
      const prov = provenance(area.rel, f);
      emitted.push({ key, source: "subdir", group, provenance: prov, body });
      out2 += `  {\n    key: ${JSON.stringify(key)},\n    title: ${JSON.stringify(title)},\n    group: ${JSON.stringify(group)},\n    summary: ${JSON.stringify(summarize(body))},\n    body: \`${lit(body)}\`,\n    provenance: ${JSON.stringify(prov)},\n  },\n`;
    }
  }
  out2 += `];\n`;

  // ── Guards: unique keys, and no committed key disappears unannounced ─────────────────────────
  const seen = new Map<string, string>();
  for (const e of emitted) {
    const prev = seen.get(e.key);
    if (prev) throw new Error(`duplicate item key "${e.key}": ${prev} and ${e.provenance}`);
    seen.set(e.key, e.provenance);
  }

  if (KEYS_ONLY) {
    for (const e of emitted) console.log([e.key, e.source, e.group, e.provenance, sha(e.body)].join("\t"));
    return;
  }

  const committedKeys = new Set<string>();
  for (const f of ["proposals.ts", "she-did-the-work.ts"]) {
    const p = join(OUT_DIR, f);
    if (!existsSync(p)) continue;
    const src = readFileSync(p, "utf8");
    for (const m of src.matchAll(/^    key: "((?:[^"\\]|\\.)*)",$/gm)) {
      committedKeys.add(f === "she-did-the-work.ts" ? `sdtw-${JSON.parse(`"${m[1]}"`)}` : JSON.parse(`"${m[1]}"`));
    }
    if (f === "she-did-the-work.ts" && /SHE_DID_THE_WORK_PROPOSAL/.test(src)) committedKeys.add("she-did-the-work");
  }
  const dropped = [...committedKeys].filter((k) => !seen.has(k) && !ALLOW_DROP.has(k));
  if (dropped.length) {
    console.error(
      `REFUSING TO WRITE: ${dropped.length} committed item key(s) would disappear, which orphans every ` +
        `future_work_notes row filed against them. If a note was archived to completed/ on purpose, re-run ` +
        `with --allow-drop <key,key>. Missing:\n  ${dropped.join("\n  ")}`,
    );
    process.exit(1);
  }

  const outDir = OUT ?? OUT_DIR;
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "she-did-the-work.ts"), out);
  writeFileSync(join(outDir, "proposals.ts"), out2);

  console.log(
    `Wrote ${outDir === OUT_DIR ? "src/lib/future-work-content" : outDir}/she-did-the-work.ts (${subjects.length} subjects) + proposals.ts ` +
      `(${emitted.filter((e) => e.source === "proposal").length} proposals, ${emitted.filter((e) => e.source === "subdir").length} bundle items)`,
  );
}

main();
