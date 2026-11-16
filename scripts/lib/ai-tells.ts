import type { AuthoredCourse } from "../data/authored-course";
import { lessonTexts } from "./no-ai-sources";
import { HIGH, LOW, MED } from "./ai-writing-tells";

/**
 * The matcher behind `pnpm check:ai-tells` (course-creation rubric v1.7, gate D4: "no AI tells").
 *
 * WHY: the IMS Director of Education's review of the Speedway course (2026-11-16) saw at once that
 * an AI had written its projects and worksheets. The em-dash guard was the only voice check in lint;
 * the stock phrases ("plays a crucial role", "a testament to", "let's explore") went through. The blog
 * already gates its drafts on a phrase list (bam-landing-page, scripts/lib/ai-writing-tells.mjs); this
 * holds the courses to the same list, copied into scripts/lib/ai-writing-tells.ts.
 *
 * WHAT IS SCANNED: every string a learner reads in a lesson (lessonTexts in no-ai-sources.ts: the
 * body, quiz prompts, options and explanations, exercise prompts, hints and explanations, recall
 * cards) and the course description.
 *
 * WHAT IS LEFT OUT, and why: words the course did not write. A tell inside a quotation or a cited
 * title is the source's voice, not the course's, and the blog's auditor leaves out code and URLs
 * for the same reason. So these are blanked before matching:
 *   - fenced code blocks and inline `code`;
 *   - URLs;
 *   - blockquote lines (`> ...`), where lessons quote their primary sources;
 *   - text inside double quotation marks, straight or curly;
 *   - a `## Sources` / `## References` / `## Bibliography` / `## Further reading` block, up to the
 *     next heading: titles are printed as published ("The Power of Habit").
 *
 * MATCHING: whole phrase, case-insensitive, no letter directly before or after, exactly as the blog's
 * auditor counts. A count is a prompt for a person to read the passage, not a verdict that an AI
 * wrote it: "crucial" and "on the other hand" are ordinary English. That is why the check is a
 * ratchet against a baseline and not a ban.
 *
 * Pure: no file I/O. scripts/check-ai-tells.ts loads the catalog and prints; the Vitest file feeds
 * this strings.
 */

export type Tier = "HIGH" | "MED" | "LOW";

export interface TellHit {
  course: string;
  lesson: string;
  /** Which text of the lesson: "body", "quiz[3].explanation", "recall[1].answer", "description". */
  field: string;
  /** 1-based line within that text. */
  line: number;
  phrase: string;
  tier: Tier;
}

export interface TextLocation {
  course: string;
  lesson: string;
  field: string;
}

const PHRASES: ReadonlyArray<{ phrase: string; tier: Tier; regex: RegExp }> = [
  ...HIGH.map((p) => ({ phrase: p, tier: "HIGH" as const })),
  ...MED.map((p) => ({ phrase: p, tier: "MED" as const })),
  ...LOW.map((p) => ({ phrase: p, tier: "LOW" as const })),
].map(({ phrase, tier }) => ({
  phrase,
  tier,
  regex: new RegExp(`(?<![a-z])${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![a-z])`, "gi"),
}));

const FENCE = /^\s*(```|~~~)/;
const BLOCKQUOTE = /^\s*>/;
const SOURCES_HEADING = /^\s*#{1,6}\s*(sources|references|further reading|bibliography)\b/i;
const ANY_HEADING = /^\s*#{1,6}\s+/;
/** Spans blanked before matching: inline code, URLs, and double-quoted text (straight or curly). */
const BLANKED = /`[^`\n]*`|https?:\/\/\S+|"[^"\n]*"|“[^”\n]*”/g;

/** The course's own words on one line, with quoted, code and URL spans replaced by spaces. */
function ownWords(line: string): string {
  return line.replace(BLANKED, (m) => " ".repeat(m.length));
}

/** Every tell phrase in one text, line by line, skipping what the course did not write. */
export function scanTellText(text: string, where: TextLocation): TellHit[] {
  const hits: TellHit[] = [];
  const lines = text.split("\n");
  let inFence = false;
  let inSources = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (FENCE.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (SOURCES_HEADING.test(line)) {
      inSources = true;
      continue;
    }
    if (inSources && ANY_HEADING.test(line)) inSources = false;
    if (inSources || BLOCKQUOTE.test(line)) continue;
    const own = ownWords(line);
    for (const p of PHRASES) {
      const n = own.match(p.regex)?.length ?? 0;
      for (let k = 0; k < n; k++) hits.push({ ...where, line: i + 1, phrase: p.phrase, tier: p.tier });
    }
  }
  return hits;
}

/** Every tell in a course: its description and every lesson's texts. */
export function scanTellCourse(slug: string, course: AuthoredCourse): TellHit[] {
  const hits = scanTellText(course.description ?? "", { course: slug, lesson: "(course)", field: "description" });
  for (const lesson of course.lessons) {
    for (const { field, text } of lessonTexts(lesson)) {
      hits.push(...scanTellText(text, { course: slug, lesson: lesson.slug, field }));
    }
  }
  return hits;
}

/** The baseline file's shape: hit counts per course slug as of `asOf`. Courses with no hits are left out. */
export interface TellBaseline {
  asOf: string;
  note: string;
  counts: Record<string, number>;
}

export interface RatchetResult {
  /** Courses over their baseline (or with any hit and no baseline entry), worst excess first. */
  over: Array<{ slug: string; count: number; baseline: number }>;
  /** Courses now under their baseline: the owner may lower the file with --update-baseline. */
  under: Array<{ slug: string; count: number; baseline: number }>;
}

/**
 * Compare measured counts with the baseline. `counts` holds only the courses that were READ on this
 * machine; a baseline course this machine cannot read (a gitignored module) is neither over nor under.
 */
export function compareToBaseline(counts: ReadonlyMap<string, number>, baseline: TellBaseline): RatchetResult {
  const over: RatchetResult["over"] = [];
  const under: RatchetResult["under"] = [];
  for (const [slug, count] of counts) {
    const base = baseline.counts[slug] ?? 0;
    if (count > base) over.push({ slug, count, baseline: base });
    else if (count < base) under.push({ slug, count, baseline: base });
  }
  over.sort((a, b) => b.count - b.baseline - (a.count - a.baseline) || a.slug.localeCompare(b.slug));
  under.sort((a, b) => a.slug.localeCompare(b.slug));
  return { over, under };
}

/**
 * The baseline the owner writes with --update-baseline: today's counts for every course read here,
 * and the old count kept for any course this machine could not read, so running it on a clone without
 * the gitignored modules never silently forgives those courses.
 */
export function nextBaseline(
  counts: ReadonlyMap<string, number>,
  unreadable: readonly string[],
  previous: TellBaseline,
  asOf: string,
): TellBaseline {
  const next: Record<string, number> = {};
  for (const slug of unreadable) if (previous.counts[slug]) next[slug] = previous.counts[slug];
  for (const [slug, count] of counts) if (count > 0) next[slug] = count;
  const sorted = Object.fromEntries(Object.entries(next).sort(([a], [b]) => a.localeCompare(b)));
  return { asOf, note: previous.note, counts: sorted };
}

/** Hit counts per course. */
export function countByCourse(hits: readonly TellHit[]): Map<string, number> {
  const out = new Map<string, number>();
  for (const h of hits) out.set(h.course, (out.get(h.course) ?? 0) + 1);
  return out;
}

/** The phrases a course leans on most, "phrase x n", for the report. */
export function topPhrases(hits: readonly TellHit[], course: string, n = 5): string[] {
  const by = new Map<string, number>();
  for (const h of hits) if (h.course === course) by.set(h.phrase, (by.get(h.phrase) ?? 0) + 1);
  return [...by]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, n)
    .map(([p, c]) => `"${p}" x${c}`);
}
