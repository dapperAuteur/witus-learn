// "Where in the course does this appear" — the excerpt half of the review-context feature.
//
// A link answers the question after a page load. An EXCERPT answers it in place, which is the
// difference between checking twenty citations and checking two. So each review surface shows the
// sentence the item actually sits in, when one can be found HONESTLY:
//
//   citations  the in-text citation, e.g. "(Robinson, 2015)", and the sentence around it. That
//              sentence is the claim the reviewer is being asked to judge the source against, so it
//              is the single most useful thing the board can show. Computed once by
//              `pnpm gen:citations` and committed, because src/lib/citations.ts reads no database at
//              request time and that property is worth keeping.
//   media      the prose immediately before and after the `:::figure` line, which is how the lesson
//              actually uses the picture. Computed at request time from the lesson body, because
//              media assets live in the database and the board is owner-only and small.
//
// Everything here is pure and takes the body as a string, so the same code runs in the generator,
// in a server component, and in a unit test.
//
// NOTHING IS INFERRED. Every function returns null when it cannot find a real match. A guessed
// excerpt is worse than none: a reviewer reads it as the lesson's own words and judges the source
// against a sentence the lesson never wrote.

/** A `## Sources` / `## References` heading: the block a reference entry itself lives in. */
const SOURCES_HEADING = /^#{1,6}\s*(sources|references|further reading|bibliography)/i;

const MAX_EXCERPT = 320;

/** The `| --- | --- |` row that makes a block a markdown table rather than a paragraph. */
const TABLE_DELIMITER = /^\s*\|?[\s:|-]*-[\s:|-]*\|[\s:|-]*$/m;

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * The lesson body with its bibliography removed.
 *
 * An in-text citation must be found in the PROSE. Searching the whole body would match the reference
 * entry itself every time and quote the bibliography back at the reviewer, which tells them nothing
 * they are not already looking at. Heading detection matches the extractor in scripts/gen-citations.
 */
export function stripSourcesBlock(body: string): string {
  const out: string[] = [];
  let inSources = false;
  for (const raw of body.split("\n")) {
    if (/^#{1,6}\s/.test(raw)) {
      inSources = SOURCES_HEADING.test(raw);
      if (inSources) continue;
    }
    if (inSources) continue;
    out.push(raw);
  }
  return out.join("\n");
}

export interface ApaSignals {
  /** First surname, or the whole corporate author when there is no comma. */
  author: string;
  /** The publication year as written, or "n.d.". */
  year: string;
}

/**
 * Pull the two things an APA in-text citation is made of out of a reference entry.
 *
 * `Robinson, J. (Ed.). (2015). The Oxford companion to wine.` gives {Robinson, 2015}, which is what
 * "(Robinson, 2015)" and "Robinson (2015)" are both built from. A corporate author with no comma
 * ("International Organisation of Vine and Wine. (2021).") is kept whole, since that is how it is
 * written in text. Returns null for anything that does not parse, and the caller then shows no
 * excerpt rather than a bad one.
 */
export function apaSignals(entry: string): ApaSignals | null {
  const plain = entry.replace(/\*+/g, "").replace(/\s+/g, " ").trim();
  // The FIRST parenthetical that STARTS with a year, so "(Ed.)" and "(Trans.)" are skipped.
  const m = plain.match(/\((n\.d\.|\d{4}[a-z]?)[^)]*\)/i);
  if (!m || m.index === undefined) return null;
  const year = m[1];

  let authorPart = plain
    .slice(0, m.index)
    .replace(/\((?:ed|eds|trans|comp|host|director|producer)s?\.?\)/gi, "")
    .replace(/\s+/g, " ")
    .replace(/[.,;\s]+$/, "")
    .trim();
  if (!authorPart) return null;

  // Some banks label an entry before the author ("Stanford device accuracy study: Shcherbina, A.,
  // et al. (2017)"). The label is the bank's own note and never appears in an in-text citation, so
  // the author is what follows the last colon.
  const colon = authorPart.lastIndexOf(": ");
  if (colon > 0) authorPart = authorPart.slice(colon + 2).trim();

  const comma = authorPart.indexOf(",");
  if (comma > 0) authorPart = authorPart.slice(0, comma).trim();
  // One-letter or two-letter "surnames" are parse debris, not authors, and match everywhere.
  if (authorPart.length < 3) return null;
  return { author: authorPart, year };
}

/**
 * Markdown out, prose in. The boards render the excerpt as text, not as markdown, so leaving the
 * source characters in would show a reviewer `**bold**` and a raw URL where the lesson shows a
 * sentence. The link TEXT is kept and the target dropped, since the target is noise here.
 */
function cleanExcerpt(value: string): string {
  return value
    .replace(/^\s*(?:[-*+>]\s+|#{1,6}\s+|\d+\.\s+)/, "")
    .replace(/!?\[([^\]]*)\]\([^)\s]*\)/g, "$1")
    .replace(/\*+/g, "")
    .replace(/`+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(value: string, limit = MAX_EXCERPT): string {
  if (value.length <= limit) return value;
  const cut = value.slice(0, limit);
  const space = cut.lastIndexOf(" ");
  return `${(space > limit * 0.6 ? cut.slice(0, space) : cut).trimEnd()}…`;
}

/**
 * The sentence containing `index`, widened to its paragraph when the sentence is too short to stand
 * on its own (a one-clause line usually means the split landed on an initial or an abbreviation).
 */
function sentenceAt(text: string, index: number, length: number): string {
  let pStart = text.lastIndexOf("\n\n", index);
  pStart = pStart === -1 ? 0 : pStart + 2;
  let pEnd = text.indexOf("\n\n", index + length);
  if (pEnd === -1) pEnd = text.length;

  const paragraph = text.slice(pStart, pEnd);
  const rel = index - pStart;

  // A markdown table is one paragraph with no sentence boundaries in it, so the generic path would
  // quote the whole grid. The claim being cited is the ROW, so narrow to it and turn the pipes into
  // separators a reader can follow.
  if (TABLE_DELIMITER.test(paragraph)) {
    let lStart = paragraph.lastIndexOf("\n", rel);
    lStart = lStart === -1 ? 0 : lStart + 1;
    let lEnd = paragraph.indexOf("\n", rel);
    if (lEnd === -1) lEnd = paragraph.length;
    const row = cleanExcerpt(
      paragraph
        .slice(lStart, lEnd)
        .replace(/^\s*\|/, "")
        .replace(/\|\s*$/, "")
        .replace(/\s*\|\s*/g, " · "),
    );
    if (row) return truncate(row);
  }

  const boundary = /[.!?]["'’”)\]]?\s+(?=[A-Z"'“(])/g;
  let start = 0;
  let end = paragraph.length;
  let m: RegExpExecArray | null;
  while ((m = boundary.exec(paragraph)) !== null) {
    const after = m.index + m[0].length;
    if (after <= rel) start = after;
    else {
      end = m.index + 1;
      break;
    }
  }

  const sentence = cleanExcerpt(paragraph.slice(start, end));
  if (sentence.length >= 60) return truncate(sentence);
  return truncate(cleanExcerpt(paragraph));
}

/**
 * The sentence in this lesson that cites this reference, or null.
 *
 * Two patterns, both precise on purpose. A loose "author within N characters of year" search matched
 * across sentence boundaries and quoted prose that cited nothing, which is exactly the guessing this
 * feature must not do:
 *
 *   parenthetical  (Robinson, 2015) · (Robinson & Jancis, 2015, p. 12) · (see Robinson, 2015)
 *   narrative      Robinson (2015) · Robinson et al. (2015)
 *
 * A course that cites in some other style simply gets no excerpt, and the reviewer follows the link.
 */
export function inTextCitationExcerpt(
  body: string | null | undefined,
  entry: string,
): string | null {
  if (!body) return null;
  const signals = apaSignals(entry);
  if (!signals) return null;

  const prose = stripSourcesBlock(body);
  const author = escapeRegExp(signals.author);
  const year = signals.year.toLowerCase() === "n.d." ? "n\\.d\\." : escapeRegExp(signals.year);

  const patterns = [
    // Author and year inside the SAME parenthetical, in either order of appearance.
    new RegExp(`\\([^)\\n]{0,120}${author}[^)\\n]{0,120}${year}[^)\\n]{0,40}\\)`, "i"),
    // Narrative form: the author, then a short connector, then the year in brackets.
    new RegExp(`${author}(?:'s|’s)?(?:,? (?:et al\\.|and [A-Z][\\w'’-]+|& [A-Z][\\w'’-]+)),? ?\\(${year}`, "i"),
    new RegExp(`${author}(?:'s|’s)? \\(${year}`, "i"),
  ];

  let best: { index: number; length: number } | null = null;
  for (const re of patterns) {
    const m = prose.match(re);
    if (m && m.index !== undefined && (!best || m.index < best.index)) {
      best = { index: m.index, length: m[0].length };
    }
  }
  if (!best) return null;
  const excerpt = sentenceAt(prose, best.index, best.length);
  return excerpt || null;
}

export interface SurroundingProse {
  /** The prose paragraph immediately before the match, when there is one. */
  before: string | null;
  /** The prose paragraph immediately after the match, when there is one. */
  after: string | null;
}

/** Blocks that are structure rather than prose, and so say nothing about how a figure is used. */
function isProseBlock(block: string): boolean {
  const t = block.trim();
  if (!t) return false;
  if (t.startsWith(":::")) return false;
  if (t.startsWith("#")) return false;
  if (t.startsWith("|")) return false;
  if (t.startsWith("```")) return false;
  if (t.startsWith("![")) return false;
  return true;
}

/**
 * The prose either side of the line containing `needle`, for the media board.
 *
 * `needle` is the asset's URL, which appears in the lesson inside its `:::figure` directive (see
 * src/lib/figures.ts). The directive's own alt, caption and credit are already on the review card;
 * what the card cannot show is the argument the picture is standing in for, and that is the
 * paragraph before it, with the paragraph after it as the follow-through.
 */
export function proseAroundNeedle(
  body: string | null | undefined,
  needle: string,
): SurroundingProse {
  const empty: SurroundingProse = { before: null, after: null };
  if (!body || !needle) return empty;

  const blocks = body.split(/\n\s*\n/);
  const at = blocks.findIndex((b) => b.includes(needle));
  if (at === -1) return empty;

  let before: string | null = null;
  for (let i = at - 1; i >= 0; i--) {
    if (isProseBlock(blocks[i])) {
      before = truncate(cleanExcerpt(blocks[i]));
      break;
    }
  }
  let after: string | null = null;
  for (let i = at + 1; i < blocks.length; i++) {
    if (isProseBlock(blocks[i])) {
      after = truncate(cleanExcerpt(blocks[i]));
      break;
    }
  }
  return { before, after };
}

/**
 * Markdown, curly quotes and line breaks flattened, so a recorded quotation can be matched against
 * the lesson it was taken from. An author writes down a sentence; the lesson stores it with `**`
 * around half of it and a line break in the middle, and a raw substring search would call a quote
 * missing that is plainly there.
 */
function normalizeForCompare(value: string): string {
  return value
    .replace(/[*`_]/g, "")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/**
 * Is this recorded sentence still in this lesson?
 *
 * The source-check board shows the verbatim hedge a check was filed about, and a check whose
 * sentence has since been rewritten out of the course is STALE: answering it would settle a question
 * the catalog no longer asks. That is worth an afternoon, so the board checks rather than assumes,
 * and says which of the two it found.
 */
export function phraseAppearsIn(body: string | null | undefined, phrase: string): boolean {
  if (!body || !phrase.trim()) return false;
  return normalizeForCompare(body).includes(normalizeForCompare(phrase));
}

/**
 * The sentence in this lesson that contains `phrase`, or null when it does not appear.
 *
 * Used by the source-check board and by scripts/locate-research-checks.ts. It is an EXACT substring
 * search, case-insensitive, and nothing more: it can prove a lesson contains a hedge, and it never
 * proposes a lesson that does not.
 */
export function excerptForPhrase(
  body: string | null | undefined,
  phrase: string,
): string | null {
  if (!body || !phrase.trim()) return null;
  const prose = stripSourcesBlock(body);
  const at = prose.toLowerCase().indexOf(phrase.trim().toLowerCase());
  if (at === -1) return null;
  const excerpt = sentenceAt(prose, at, phrase.trim().length);
  return excerpt || null;
}
