// Shared (server + client) helpers for notes and inline annotations (plans/61).
//
// Anchoring model: an annotation stores the exact QUOTE it was attached to, ~30 chars of context
// either side, and the content-derived id of the block it lived in. Whether the quote still
// resolves is recomputed against the CURRENT lesson body at read time — never persisted — so a
// re-seeded typo fix elsewhere in the lesson cannot permanently orphan a learner's work, and a
// fix that restores the original text un-orphans it for free.

/** Whitespace-insensitive form used for all quote matching. Case is preserved: a quote is an
 *  exact citation of the lesson, not a search query. */
export function normalizeForMatch(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

/** Does the quoted text still appear in the (current) lesson body? Whitespace-insensitive,
 *  case-exact. An empty/missing quote is a lesson-level note and always "resolves". */
export function quoteStillResolves(bodyText: string | null | undefined, quote: string | null | undefined): boolean {
  if (!quote) return true;
  if (!bodyText) return false;
  return normalizeForMatch(bodyText).includes(normalizeForMatch(quote));
}

/** Field caps, enforced in the API and mirrored in the composer UI. */
export const NOTE_BODY_MAX = 8000;
export const NOTE_QUOTE_MAX = 1000;
export const NOTE_CONTEXT_MAX = 200;
export const NOTE_BLOCK_ID_MAX = 64;
