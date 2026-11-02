// Seed drift (plans/97 Q5, BAM 2026-11-01): "skip and report, plus edit warnings".
//
// The seeders upsert every lesson's text from scripts/data on each run, and teachers can edit the
// same lesson in the app (/teach/<course>). Before this, a seed silently overwrote those edits, which
// is why seeds were never automated. Now:
//
//   1. The seeder remembers what it last wrote to each lesson: `lessons.seed_hash`, the hash of the
//      content fields below as written.
//   2. On the next seed, if the row no longer hashes to seed_hash, someone edited it in the app. The
//      seeder leaves the lesson's content alone and upserts a `lesson_seed_drifts` row holding the
//      file's version (and the hash of each side).
//   3. The lesson's instructor and the platform owner see a warning on /teach (every visit) and on
//      /admin, with the file-vs-app difference, until they acknowledge it: keep the app edit (quiet
//      until the FILE changes again) or take the file version (written into the lesson by the app).
//
// A null seed_hash (a lesson the seeder has not written since the column arrived) is a baseline:
// the seeder writes the file as it always did and records the hash. So an in-app edit made BEFORE
// the first seed after migration 0074 is overwritten exactly as before; every edit after it is kept.
//
// Pure apart from node:crypto, so the seeder (tsx) and the server share it. Never import it from a
// client component.

import { createHash } from "node:crypto";
import { stableStringify } from "@/lib/lesson-review";

/** The lesson fields a seed writes AND a teacher can edit: the ones whose disagreement is drift. */
export interface SeedContent {
  title: string;
  textContent: string | null;
  contentUrl: string | null;
  quizContent: unknown;
  exerciseContent: unknown;
  mapContent: unknown;
  recallContent: unknown;
}

export const SEED_CONTENT_FIELDS = [
  "title",
  "textContent",
  "contentUrl",
  "quizContent",
  "exerciseContent",
  "mapContent",
  "recallContent",
] as const satisfies readonly (keyof SeedContent)[];

export type SeedContentField = (typeof SEED_CONTENT_FIELDS)[number];

export const FIELD_LABEL: Record<SeedContentField, string> = {
  title: "Title",
  textContent: "Lesson text",
  contentUrl: "Media link",
  quizContent: "Quiz",
  exerciseContent: "Exercise",
  mapContent: "Map",
  recallContent: "Recall cards",
};

/** Pick exactly the content fields from a lesson row or a seed row (extra keys ignored). */
export function seedContentOf(row: SeedContent): SeedContent {
  return {
    title: row.title,
    textContent: row.textContent ?? null,
    contentUrl: row.contentUrl ?? null,
    quizContent: row.quizContent ?? null,
    exerciseContent: row.exerciseContent ?? null,
    mapContent: row.mapContent ?? null,
    recallContent: row.recallContent ?? null,
  };
}

/**
 * sha256 of the content fields. Exact text (a whitespace edit counts: it is an edit), and JSON with
 * sorted keys, because jsonb does not keep key order and the same quiz read back from Postgres must
 * hash the same as the one the seeder wrote.
 */
export function seedContentHash(c: SeedContent): string {
  const s = seedContentOf(c);
  return createHash("sha256")
    .update(
      stableStringify({
        v: 1,
        title: s.title,
        text: s.textContent,
        url: s.contentUrl,
        quiz: s.quizContent,
        exercise: s.exerciseContent,
        map: s.mapContent,
        recall: s.recallContent,
      }),
    )
    .digest("hex");
}

export type SeedAction =
  /** Write the file's version and record its hash (new lesson, unchanged in the app, baseline, or already equal). */
  | "write"
  /** Edited in the app; the author chose to keep it and the file has not changed since: skip silently. */
  | "skip_kept"
  /** Edited in the app and not (or no longer) acknowledged: skip and open or refresh a warning. */
  | "skip_report";

export interface SeedDecisionInput {
  /** lessons.seed_hash; null = never recorded (baseline). Undefined = the lesson is new. */
  seedHash: string | null | undefined;
  /** Hash of the row as it stands in the database (undefined for a new lesson). */
  appHash: string | undefined;
  /** Hash of the course file's version. */
  fileHash: string;
  /** The lesson's drift row, if one exists. */
  drift: { fileHash: string; resolution: string | null } | null;
}

/** What the seeder does with one lesson. The whole rule, in one place, so it is unit-tested. */
export function decideSeedAction(i: SeedDecisionInput): SeedAction {
  if (i.appHash === undefined) return "write"; // new lesson
  if (i.seedHash == null) return "write"; // baseline: behave as seeds always did
  if (i.appHash === i.seedHash) return "write"; // nobody touched it since the last seed
  if (i.appHash === i.fileHash) return "write"; // edited, but to exactly the file's text
  if (i.drift?.resolution === "kept_app" && i.drift.fileHash === i.fileHash) return "skip_kept";
  return "skip_report";
}

// ── The difference shown to the author ─────────────────────────────────────

export type DiffLine = { op: "same" | "add" | "del"; text: string };

const MAX_DIFF_LINES = 1500;

/**
 * A line diff (longest common subsequence). "del" = only in the app, "add" = only in the file, so
 * the author reads it as "what taking the file version would change". Null when either side is too
 * long to diff on a page (the panel then says so and shows both lengths).
 */
export function lineDiff(app: string, file: string): DiffLine[] | null {
  const a = app.split("\n");
  const b = file.split("\n");
  if (a.length > MAX_DIFF_LINES || b.length > MAX_DIFF_LINES) return null;
  const n = a.length;
  const m = b.length;
  const lcs: Uint16Array[] = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--) lcs[i][j] = a[i] === b[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
  const out: DiffLine[] = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) {
      out.push({ op: "same", text: a[i] });
      i++;
      j++;
    } else if (lcs[i + 1][j] >= lcs[i][j + 1]) out.push({ op: "del", text: a[i++] });
    else out.push({ op: "add", text: b[j++] });
  }
  while (i < n) out.push({ op: "del", text: a[i++] });
  while (j < m) out.push({ op: "add", text: b[j++] });
  return out;
}

/** Only the changed lines and up to `context` unchanged lines around each, with "…" gaps. */
export function compactDiff(lines: DiffLine[], context = 2): (DiffLine | { op: "gap"; text: string })[] {
  const keep = new Array(lines.length).fill(false);
  lines.forEach((l, idx) => {
    if (l.op === "same") return;
    for (let k = Math.max(0, idx - context); k <= Math.min(lines.length - 1, idx + context); k++) keep[k] = true;
  });
  const out: (DiffLine | { op: "gap"; text: string })[] = [];
  let skipped = 0;
  lines.forEach((l, idx) => {
    if (keep[idx]) {
      if (skipped) out.push({ op: "gap", text: `${skipped} unchanged line${skipped === 1 ? "" : "s"}` });
      skipped = 0;
      out.push(l);
    } else skipped++;
  });
  if (skipped) out.push({ op: "gap", text: `${skipped} unchanged line${skipped === 1 ? "" : "s"}` });
  return out;
}

export interface FieldDiff {
  field: SeedContentField;
  label: string;
  /** Compact line diff, or null when too long to show. */
  lines: (DiffLine | { op: "gap"; text: string })[] | null;
  appLength: number;
  fileLength: number;
}

const asText = (field: SeedContentField, v: unknown): string => {
  if (v == null) return "";
  if (field === "title" || field === "textContent" || field === "contentUrl") return String(v);
  // JSON fields, pretty and key-sorted, so a reordered key is not a "difference".
  return JSON.stringify(JSON.parse(stableStringify(v)), null, 2);
};

/** Every content field that differs between the app's version and the file's. */
export function diffSeedContent(app: SeedContent, file: SeedContent): FieldDiff[] {
  const out: FieldDiff[] = [];
  for (const field of SEED_CONTENT_FIELDS) {
    const a = asText(field, app[field]);
    const f = asText(field, file[field]);
    if (a === f) continue;
    const d = lineDiff(a, f);
    out.push({ field, label: FIELD_LABEL[field], lines: d ? compactDiff(d) : null, appLength: a.length, fileLength: f.length });
  }
  return out;
}

/** Read a stored file_content defensively (jsonb from the database). */
export function readSeedContent(v: unknown): SeedContent | null {
  if (!v || typeof v !== "object") return null;
  const o = v as Record<string, unknown>;
  if (typeof o.title !== "string") return null;
  const str = (x: unknown) => (typeof x === "string" ? x : null);
  return {
    title: o.title,
    textContent: str(o.textContent),
    contentUrl: str(o.contentUrl),
    quizContent: o.quizContent ?? null,
    exerciseContent: o.exerciseContent ?? null,
    mapContent: o.mapContent ?? null,
    recallContent: o.recallContent ?? null,
  };
}

export type DriftAction = "keep_app" | "take_file";
export function parseDriftAction(v: unknown): DriftAction | null {
  return v === "keep_app" || v === "take_file" ? v : null;
}
