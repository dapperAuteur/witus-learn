// Pure matching core for inline-annotation anchors (plans/61 §2). Given a block's plain text and
// a stored anchor (quote + ~30 chars of context either side), find where the quote sits — or
// honestly fail so the note renders as orphaned instead of highlighting the wrong words.
//
// The DOM half (reading a live selection, painting <mark> elements across text nodes) lives in
// src/components/annotation-layer.tsx; everything here is string math so it can be unit-tested
// in the node environment.

export interface AnchorContext {
  quote: string;
  contextPrefix?: string | null;
  contextSuffix?: string | null;
}

export interface QuoteMatch {
  /** Character offsets into the block text passed in (raw, not normalized). */
  start: number;
  end: number;
}

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** A regex source that matches the quote with ANY whitespace where the quote has whitespace, so
 *  a reflowed or re-wrapped lesson still matches the original selection. */
function flexiblePattern(quote: string): string {
  return quote
    .trim()
    .split(/\s+/)
    .map(escapeRegExp)
    .join("\\s+");
}

/** All candidate positions of the quote in the text, whitespace-flexibly, case-exactly. */
function findAll(text: string, quote: string): QuoteMatch[] {
  const pattern = flexiblePattern(quote);
  if (pattern.length === 0) return [];
  const re = new RegExp(pattern, "g");
  const out: QuoteMatch[] = [];
  for (let m = re.exec(text); m; m = re.exec(text)) {
    out.push({ start: m.index, end: m.index + m[0].length });
    // Overlapping repeats aren't meaningful for prose; step past the match.
    re.lastIndex = m.index + Math.max(1, m[0].length);
  }
  return out;
}

/** How well the text around a candidate match agrees with the stored context. Compares the
 *  normalized tail of the prefix and head of the suffix; each side contributes up to 1. */
function contextScore(text: string, match: QuoteMatch, anchor: AnchorContext): number {
  const norm = (s: string) => s.replace(/\s+/g, " ");
  let score = 0;
  if (anchor.contextPrefix) {
    const want = norm(anchor.contextPrefix).slice(-20);
    const have = norm(text.slice(Math.max(0, match.start - 40), match.start)).slice(-20);
    score += similarityTail(have, want);
  }
  if (anchor.contextSuffix) {
    const want = norm(anchor.contextSuffix).slice(0, 20);
    const have = norm(text.slice(match.end, match.end + 40)).slice(0, 20);
    score += similarityHead(have, want);
  }
  return score;
}

/** Fraction of `want` that matches `have` comparing from the END (for prefixes). */
function similarityTail(have: string, want: string): number {
  if (want.length === 0) return 0;
  let i = 0;
  while (i < want.length && i < have.length && want[want.length - 1 - i] === have[have.length - 1 - i]) i++;
  return i / want.length;
}

/** Fraction of `want` that matches `have` comparing from the START (for suffixes). */
function similarityHead(have: string, want: string): number {
  if (want.length === 0) return 0;
  let i = 0;
  while (i < want.length && i < have.length && want[i] === have[i]) i++;
  return i / want.length;
}

/**
 * The best position of the anchor's quote inside `blockText`, or null when the quote no longer
 * appears (the orphan state — the caller shows the note without a highlight, never a wrong one).
 * With one candidate, context is ignored; with several, the context decides.
 */
export function findQuoteMatch(blockText: string, anchor: AnchorContext): QuoteMatch | null {
  const candidates = findAll(blockText, anchor.quote);
  if (candidates.length === 0) return null;
  if (candidates.length === 1) return candidates[0];
  let best = candidates[0];
  let bestScore = -1;
  for (const c of candidates) {
    const s = contextScore(blockText, c, anchor);
    if (s > bestScore) {
      bestScore = s;
      best = c;
    }
  }
  return best;
}
