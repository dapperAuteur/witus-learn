#!/usr/bin/env node
/**
 * tutorial:check — the coverage gate for help-article tutorial clips.
 * (Contract: gemini/witus/plans/33-ecosystem-launch-tutorial-production.md §4.)
 *
 * Every article the in-app Help Center renders must be named in e2e/tutorials/manifest.json,
 * with either a spec that exists on disk or a written waiver. Run:
 *
 *     pnpm tutorial:check            # launch-prep mode: "todo" entries are allowed
 *     pnpm tutorial:check --strict   # the launch gate: "todo" is a failure
 *
 * WHERE THE ARTICLE LIST COMES FROM. src/app/(tenant)/help/page.tsx and
 * src/app/(tenant)/help/[slug]/page.tsx both read `HELP_ARTICLES` from src/lib/help-articles.ts —
 * plain data in code, not a database table and not the markdown under docs/tutorials/. So this
 * script enumerates that same array, which is what §4.1 requires ("the same source the help page
 * renders from"). It parses the file with a regex rather than importing it, because this is a
 * plain .mjs script and help-articles.ts is TypeScript; the parse is anchored to the
 * `export const HELP_ARTICLES` array and fails loudly if it finds nothing, so a refactor that
 * moves the data breaks the check instead of silently reporting "0 articles, all covered".
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const HELP_SOURCE = "src/lib/help-articles.ts";
const MANIFEST = "e2e/tutorials/manifest.json";
const SPEC_DIR = "e2e/tutorials";

const STRICT = process.argv.includes("--strict");
const STATUSES = new Set(["recorded", "passes", "written-not-run", "blocked", "todo"]);
const KINDS = new Set(["lead", "quick-reference"]);
const SIDE_EFFECTS = new Set(["none", "creates-data", "sends-email", "spends-quota", "money"]);

const errors = [];
const fail = (msg) => errors.push(msg);

/** Every `{ slug, title }` in the HELP_ARTICLES array, in source order. */
function readHelpArticles() {
  const src = fs.readFileSync(path.join(ROOT, HELP_SOURCE), "utf8");
  const start = src.indexOf("export const HELP_ARTICLES");
  if (start < 0) {
    throw new Error(
      `${HELP_SOURCE}: no "export const HELP_ARTICLES" — the help page's source moved. ` +
        `Point this script (and the manifest's helpSource) at wherever /help reads from now.`,
    );
  }
  // The array literal ends at the first "];" that begins a line — the entries are indented.
  const end = src.indexOf("\n];", start);
  const block = src.slice(start, end < 0 ? src.length : end);
  // slug is always double-quoted; title may be single-quoted (one article's title contains ").
  const re = /^\s{4}slug:\s*"([^"]+)",\s*\n\s*title:\s*(?:"([^"]*)"|'([^']*)')/gm;
  const out = [];
  for (const m of block.matchAll(re)) out.push({ slug: m[1], title: m[2] ?? m[3] });
  if (out.length === 0) {
    throw new Error(`${HELP_SOURCE}: HELP_ARTICLES parsed to 0 articles — the shape changed.`);
  }
  const seen = new Set();
  for (const a of out) {
    if (seen.has(a.slug)) fail(`${HELP_SOURCE}: duplicate article slug "${a.slug}"`);
    seen.add(a.slug);
  }
  return out;
}

const articles = readHelpArticles();
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, MANIFEST), "utf8"));
const entries = Array.isArray(manifest.articles) ? manifest.articles : [];

if (manifest.helpSource !== HELP_SOURCE) {
  fail(`${MANIFEST}: helpSource is "${manifest.helpSource}"; this script enumerates "${HELP_SOURCE}".`);
}

// §4.2 — every help article appears in the manifest.
const byArticle = new Map();
for (const e of entries) {
  if (e.article == null) continue;
  if (byArticle.has(e.article)) fail(`${MANIFEST}: "${e.article}" appears more than once`);
  byArticle.set(e.article, e);
}
const knownSlugs = new Set(articles.map((a) => a.slug));
for (const { slug, title } of articles) {
  if (!byArticle.has(slug)) fail(`${MANIFEST}: missing help article "${slug}" (${title})`);
}
for (const slug of byArticle.keys()) {
  if (!knownSlugs.has(slug)) fail(`${MANIFEST}: "${slug}" is not a help article in ${HELP_SOURCE}`);
}

// §4.3 — spec or waiver, and a named spec must exist. "todo" may omit spec (fails under --strict).
const namedSpecs = new Set();
let todoCount = 0;
const byStatus = new Map();
let waiverCount = 0;

for (const e of entries) {
  const label = e.article ?? `(lead: ${e.spec ?? "?"})`;
  if (e.status !== undefined && !STATUSES.has(e.status)) {
    fail(`${MANIFEST}: "${label}" has status "${e.status}" (expected one of ${[...STATUSES].join(", ")})`);
  }
  if (e.kind !== undefined && !KINDS.has(e.kind)) {
    fail(`${MANIFEST}: "${label}" has kind "${e.kind}" (expected lead or quick-reference)`);
  }
  if (e.sideEffects !== undefined && !SIDE_EFFECTS.has(e.sideEffects)) {
    fail(`${MANIFEST}: "${label}" has sideEffects "${e.sideEffects}" (expected one of ${[...SIDE_EFFECTS].join(", ")})`);
  }
  if (e.waiver) {
    waiverCount += 1;
    if (e.spec) fail(`${MANIFEST}: "${label}" has BOTH a spec and a waiver — pick one`);
    if (String(e.waiver).trim().length < 20) {
      fail(`${MANIFEST}: "${label}" waiver is too short to be a reason: "${e.waiver}"`);
    }
    continue;
  }
  const status = e.status ?? "todo";
  byStatus.set(status, (byStatus.get(status) ?? 0) + 1);
  if (!e.spec) {
    if (status === "todo") {
      todoCount += 1;
      if (STRICT) fail(`${MANIFEST}: "${label}" is still todo (--strict)`);
      continue;
    }
    fail(`${MANIFEST}: "${label}" has neither a spec nor a waiver`);
    continue;
  }
  namedSpecs.add(e.spec);
  if (!fs.existsSync(path.join(ROOT, e.spec))) {
    fail(`${MANIFEST}: "${label}" names ${e.spec}, which does not exist`);
  }
  if (status === "todo") {
    todoCount += 1;
    if (STRICT) fail(`${MANIFEST}: "${label}" is still todo (--strict)`);
  }
}

// §4.4 — no orphan spec files. A lead demo with no article uses "article": null.
const onDisk = fs
  .readdirSync(path.join(ROOT, SPEC_DIR))
  .filter((f) => f.endsWith(".tutorial.ts"))
  .map((f) => `${SPEC_DIR}/${f}`);
for (const spec of onDisk) {
  if (!namedSpecs.has(spec)) {
    fail(`${MANIFEST}: ${spec} exists but no entry names it (a lead demo with no article uses "article": null)`);
  }
}

// §4.5 — the one-line summary.
const statusBits = [...byStatus.entries()]
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([k, n]) => `${k} ${n}`)
  .join(", ");
console.log(
  `tutorial:check — ${articles.length} help articles, ${entries.length} manifest entries, ` +
    `${onDisk.length} specs on disk, ${waiverCount} waivers, ${todoCount} todo` +
    `${statusBits ? ` · ${statusBits}` : ""}${STRICT ? " · strict" : ""}`,
);

if (errors.length > 0) {
  console.error(`\n${errors.length} problem${errors.length === 1 ? "" : "s"}:`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}
console.log("✓ every help article is covered by a spec, a waiver, or an open todo.");
