// `:::figure` lesson images: one shared parser used by the lesson-body renderer, the lint guard
// (scripts/check-figures.ts) and the media-registration script, so what renders is exactly what gets
// checked and exactly what appears in the /admin/media review queue.
//
// ── Why a directive and not plain markdown ────────────────────────────────────────────────────────
// `src/components/markdown.tsx` already renders `![alt](url)` as a bare <img>. That is not enough
// here, for one reason that is specific to this catalog: it has nowhere to put a CREDIT.
//
// Every claim in these courses ties to a cited source. Publishing a 1539 map scan with no
// attribution line would be the visual equivalent of an uncited assertion, and for third-party media
// it is also how a takedown starts. So the credit is not decoration, it is the same discipline as
// the `## Sources` block, and it must be structurally impossible to omit. A markdown image cannot
// enforce that; a directive with a required field can.
//
// ── The syntax ────────────────────────────────────────────────────────────────────────────────────
//
//   :::figure <url> ||| <alt> ||| <caption> ||| <credit>
//
// One line, four `|||`-separated fields, matching `:::reveal`'s separator so authors learn one rule.
// Single-line (like :::reveal / :::tool) rather than a fenced block (like :::timeline) because a
// figure is one datum, not a list.
//
// ALT AND CAPTION ARE DIFFERENT THINGS and the guard enforces that they differ:
//   alt      what the image shows, for a reader who cannot see it. Never "image of a map".
//   caption  what to LOOK at and why it is in this lesson. Visible to everyone.
//   credit   creator, title, date, licence, source. Required. See the rights rule in plans/58 §3.
//
// A malformed directive falls through to ordinary markdown and renders as a line of literal text,
// which is invisible-in-review the same way a broken `:::reveal` is. That is exactly why
// check-figures.ts exists and runs in `pnpm lint`.

export const FIGURE_RE =
  /^:::figure\s+(\S+)\s*\|\|\|\s*(.+?)\s*\|\|\|\s*(.+?)\s*\|\|\|\s*(.+?)\s*$/;

/** A `:::figure` line that at least PARSED. Says nothing about whether its fields are any good. */
export interface FigureItem {
  url: string;
  alt: string;
  caption: string;
  credit: string;
}

/** Every well-formed `:::figure` in a lesson body, in order of appearance. */
export function extractFigures(body: string | null | undefined): FigureItem[] {
  if (!body) return [];
  const out: FigureItem[] = [];
  for (const line of body.split("\n")) {
    const m = line.match(FIGURE_RE);
    if (m) out.push({ url: m[1], alt: m[2], caption: m[3], credit: m[4] });
  }
  return out;
}

/** A line that is TRYING to be a figure, so the guard can tell "malformed" from "not a figure". */
export function looksLikeFigure(line: string): boolean {
  return /^\s*:::figure\b/.test(line);
}

/** Indented directives never render (the renderer matches from the start of the line). */
export function isIndentedFigure(line: string): boolean {
  return /^\s+:::figure\b/.test(line);
}

// Placeholder text that means an author left a field to finish later. Checked case-insensitively
// against the WHOLE trimmed field, so a real caption containing the word "todo" is not a false
// positive. A placeholder credit is worse than a missing one: it looks like provenance and is not.
const PLACEHOLDERS = [
  "tbd",
  "todo",
  "t.b.d.",
  "fixme",
  "xxx",
  "n/a",
  "na",
  "none",
  "unknown",
  "credit",
  "caption",
  "alt",
  "alt text",
  "image",
  "photo",
  "figure",
  "description",
  "source",
  "public domain",
];

export function isPlaceholder(value: string): boolean {
  return PLACEHOLDERS.includes(value.trim().toLowerCase().replace(/[.!]+$/, ""));
}

/**
 * Hosts a figure may load from.
 *
 * Cloudinary only, deliberately. Hotlinking a museum or library server means the image can rotate,
 * move or 404 without anyone noticing, and it puts load on an institution that never agreed to serve
 * it. `scripts/upload-course-media.mjs` copies every asset into Cloudinary precisely so the lesson
 * points at something under our control, with the SOURCE recorded in the credit rather than in the
 * `src`. Same reasoning as the authoritative-values rule: read from the source, then own your copy.
 */
export function isAllowedFigureHost(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === "https:" && u.hostname === "res.cloudinary.com";
  } catch {
    return false;
  }
}

export type FigureProblem =
  | "malformed"
  | "indented"
  | "empty-alt"
  | "placeholder-alt"
  | "empty-caption"
  | "placeholder-caption"
  | "empty-credit"
  | "placeholder-credit"
  | "alt-equals-caption"
  | "bad-host";

export const FIGURE_PROBLEM_LABEL: Record<FigureProblem, string> = {
  malformed: "not four ||| separated fields, so it renders as literal text and shows no image",
  indented: "indented, so the renderer never matches it and it renders as literal text",
  "empty-alt": "empty alt text, so the image is invisible to anyone using a screen reader",
  "placeholder-alt": "placeholder alt text left unfinished",
  "empty-caption": "empty caption, so nothing tells the reader why this image is here",
  "placeholder-caption": "placeholder caption left unfinished",
  "empty-credit": "no credit, which this catalog treats the same as an uncited claim",
  "placeholder-credit": "placeholder credit, which looks like provenance and is not",
  "alt-equals-caption":
    "alt and caption are the same, so a screen-reader user hears it twice and gets no description",
  "bad-host": "not an https res.cloudinary.com URL, so it hotlinks a server we do not control",
};

export interface FigureFinding {
  line: number;
  problem: FigureProblem;
  excerpt: string;
}

/**
 * Every problem with the `:::figure` lines in one body. Pure, so the guard and any future authoring
 * UI agree exactly. Returns [] for a body with no figures at all.
 */
export function checkFigures(body: string | null | undefined): FigureFinding[] {
  if (!body) return [];
  const out: FigureFinding[] = [];
  const lines = body.split("\n");

  lines.forEach((line, i) => {
    if (!looksLikeFigure(line) && !isIndentedFigure(line)) return;
    const at = i + 1;
    const excerpt = line.trim().slice(0, 120);

    if (isIndentedFigure(line)) {
      out.push({ line: at, problem: "indented", excerpt });
      return;
    }
    const m = line.match(FIGURE_RE);
    if (!m) {
      out.push({ line: at, problem: "malformed", excerpt });
      return;
    }

    const [, url, alt, caption, credit] = m;
    const push = (problem: FigureProblem) => out.push({ line: at, problem, excerpt });

    if (!isAllowedFigureHost(url)) push("bad-host");
    if (!alt.trim()) push("empty-alt");
    else if (isPlaceholder(alt)) push("placeholder-alt");
    if (!caption.trim()) push("empty-caption");
    else if (isPlaceholder(caption)) push("placeholder-caption");
    if (!credit.trim()) push("empty-credit");
    else if (isPlaceholder(credit)) push("placeholder-credit");
    if (alt.trim() && alt.trim().toLowerCase() === caption.trim().toLowerCase()) {
      push("alt-equals-caption");
    }
  });

  return out;
}
