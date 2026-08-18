// In-course text search (plans/61 §5, build-order step 2). Pure functions, no DB and no
// next/headers, so the unit suite can exercise them directly and the API route stays thin.
//
// ── The honest bit about images (plans/61 §5, decided by BAM 2026-08-10) ─────────────────────────
// The app cannot search an image. What it CAN search is the text attached to one: a `:::figure`
// carries a required alt, caption and credit (scripts/check-figures.ts enforces them), and THOSE
// are what a figure match is. Every surface describing this feature must say "alt text, captions
// and credits", never "image search" — a box that promises to find pictures and actually greps
// their captions is judged on the promise. Result rows carry `kind: "figure"` so the UI can label
// the snippet ("Image:") and keep that description honest. The figure URL is NEVER searchable and
// never appears in a snippet.
//
// Segmentation mirrors how src/components/lesson-body.tsx splits a body: single-line `:::figure` /
// `:::reveal` directives become their own typed segments, `:::tool` / `:::field-log` lines and the
// `:::timeline` fence lines are directive SYNTAX and are skipped (a match inside them would render
// a `:::`-soup snippet no learner wrote), while the event lines BETWEEN timeline fences are real
// dated prose and stay searchable as text.

import { FIGURE_RE } from "@/lib/figures";
import { REVEAL_RE } from "@/lib/reveals";
import { TIMELINE_CLOSE, TIMELINE_OPEN_RE } from "@/lib/timeline";

export type SegmentKind = "text" | "figure" | "reveal";

export interface BodySegment {
  kind: SegmentKind;
  /** What a query may match. For a figure: alt + caption + credit, never the URL. */
  text: string;
}

const TOOL_RE = /^:::tool\b/;
const FIELD_LOG_RE = /^:::field-log\b/;
/** Any line that is (or is trying to be) directive syntax; never searchable as prose. */
const DIRECTIVE_LINE_RE = /^\s*:::/;

/** Light markdown noise-stripping so snippets read as prose, not as syntax. */
function stripMdLine(line: string): string {
  return line
    .replace(/^#{1,6}\s+/, "") // heading marks
    .replace(/^>\s?/, "") // blockquote marks
    .replace(/^[-*+]\s+/, "") // list bullets
    .replace(/\*\*([^*]+)\*\*/g, "$1") // bold
    .replace(/\*([^*]+)\*/g, "$1") // italic
    .replace(/`([^`]+)`/g, "$1") // inline code
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1"); // links/images: keep the text, drop the URL
}

/**
 * Split a lesson body into typed searchable segments. Consecutive prose lines merge into one
 * paragraph segment (better snippet context than line-by-line); figures and reveals each become
 * their own segment; directive fence/syntax lines are skipped entirely.
 */
export function segmentBody(body: string | null | undefined): BodySegment[] {
  if (!body) return [];
  const out: BodySegment[] = [];
  let buf: string[] = [];
  let inTimeline = false;

  const flush = () => {
    const text = buf.join(" ").replace(/\s+/g, " ").trim();
    if (text) out.push({ kind: "text", text });
    buf = [];
  };

  for (const line of body.split("\n")) {
    if (inTimeline) {
      if (line.trim() === TIMELINE_CLOSE) {
        inTimeline = false;
        flush(); // the events are their own segment, not the opening of the next paragraph
        continue;
      }
      // Timeline EVENT lines are dated prose ("1936 | built | The first edition appears") and a
      // learner may well search the text half, so they stay searchable as ordinary text.
      buf.push(line);
      continue;
    }

    if (TIMELINE_OPEN_RE.test(line)) {
      flush();
      inTimeline = true;
      continue;
    }

    const fig = line.match(FIGURE_RE);
    if (fig) {
      flush();
      // alt + caption + credit — the enforced text attached to the image. Never fig[1] (the URL).
      out.push({ kind: "figure", text: `${fig[2]} · ${fig[3]} · ${fig[4]}` });
      continue;
    }

    const rv = line.match(REVEAL_RE);
    if (rv) {
      flush();
      out.push({ kind: "reveal", text: `${rv[1]} · ${rv[2]}` });
      continue;
    }

    // Everything else that starts with `:::` is directive syntax (:::tool, :::field-log, a
    // malformed figure/reveal, an unknown directive). Skip it: a snippet must never leak `:::`
    // lines or their URLs/slugs. The specific REs are kept for clarity of intent.
    if (TOOL_RE.test(line) || FIELD_LOG_RE.test(line) || DIRECTIVE_LINE_RE.test(line)) {
      flush();
      continue;
    }

    if (line.trim() === "") {
      flush(); // paragraph boundary
      continue;
    }

    buf.push(stripMdLine(line));
  }
  flush();
  return out;
}

export interface SearchableLesson {
  id: string;
  slug: string | null;
  title: string;
  body: string | null;
}

export interface LessonSearchResult {
  lessonId: string;
  slug: string | null;
  title: string;
  /** "title" = the match is the lesson title itself. "figure" tells the UI to prefix "Image:". */
  kind: SegmentKind | "title";
  snippet: string;
}

export const MAX_RESULTS = 20;
/** ~this many characters of context on each side of the first match. */
const SNIPPET_CONTEXT = 60;

/** Snippet: the match plus ~SNIPPET_CONTEXT chars either side, ellipsised at cut edges. */
function makeSnippet(text: string, matchIndex: number, matchLength: number): string {
  const start = Math.max(0, matchIndex - SNIPPET_CONTEXT);
  const end = Math.min(text.length, matchIndex + matchLength + SNIPPET_CONTEXT);
  // Cut on word boundaries where possible so the snippet doesn't open or close mid-word.
  let s = start;
  if (s > 0) {
    const sp = text.indexOf(" ", s);
    if (sp !== -1 && sp < matchIndex) s = sp + 1;
  }
  let e = end;
  if (e < text.length) {
    const sp = text.lastIndexOf(" ", e);
    if (sp > matchIndex + matchLength) e = sp;
  }
  return `${s > 0 ? "…" : ""}${text.slice(s, e).trim()}${e < text.length ? "…" : ""}`;
}

interface Candidate extends LessonSearchResult {
  /** Lower is better: 0 title-phrase, 1 title-words, 2 segment-phrase, 3 segment-words. */
  tier: number;
}

/**
 * Rank lessons against a query. Case-insensitive. Exact-phrase matches rank above all-words
 * matches, and title matches rank above body matches. One result per lesson (its best match),
 * capped at MAX_RESULTS, stable by lesson order within a tier.
 */
export function searchLessons(
  lessons: readonly SearchableLesson[],
  query: string,
): LessonSearchResult[] {
  const phrase = query.trim().replace(/\s+/g, " ").toLowerCase();
  if (!phrase) return [];
  const words = phrase.split(" ").filter(Boolean);

  const candidates: Candidate[] = [];

  for (const lesson of lessons) {
    const base = { lessonId: lesson.id, slug: lesson.slug, title: lesson.title };
    const titleLower = lesson.title.toLowerCase();

    if (titleLower.includes(phrase)) {
      candidates.push({ ...base, kind: "title", snippet: lesson.title, tier: 0 });
      continue;
    }
    if (words.length > 1 && words.every((w) => titleLower.includes(w))) {
      candidates.push({ ...base, kind: "title", snippet: lesson.title, tier: 1 });
      continue;
    }

    const segments = segmentBody(lesson.body);

    // Pass 1: exact phrase inside a segment.
    let found: Candidate | null = null;
    for (const seg of segments) {
      const idx = seg.text.toLowerCase().indexOf(phrase);
      if (idx !== -1) {
        found = {
          ...base,
          kind: seg.kind,
          snippet: makeSnippet(seg.text, idx, phrase.length),
          tier: 2,
        };
        break;
      }
    }

    // Pass 2: every word somewhere in one segment (only worth doing for multi-word queries —
    // a single word's all-words match IS its phrase match).
    if (!found && words.length > 1) {
      for (const seg of segments) {
        const lower = seg.text.toLowerCase();
        if (words.every((w) => lower.includes(w))) {
          const idx = lower.indexOf(words[0]);
          found = {
            ...base,
            kind: seg.kind,
            snippet: makeSnippet(seg.text, idx, words[0].length),
            tier: 3,
          };
          break;
        }
      }
    }

    if (found) candidates.push(found);
  }

  return candidates
    .sort((a, b) => a.tier - b.tier) // Array.prototype.sort is stable: lesson order holds per tier
    .slice(0, MAX_RESULTS)
    .map((c) => ({
      lessonId: c.lessonId,
      slug: c.slug,
      title: c.title,
      kind: c.kind,
      snippet: c.snippet,
    }));
}
