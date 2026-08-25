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

/** Which visibility rule put a note into a search result (plans/61 §4). The four are exhaustive:
 *  the SQL in src/db/queries/notes.ts admits nothing else. */
export type NoteSearchSource = "mine" | "teacher" | "shared" | "sent";

/**
 * Label a search hit by WHOSE note it is. Pure, and separate from the route, because getting it
 * wrong is a privacy-shaped bug rather than a cosmetic one: an unlabelled hit reads as the
 * viewer's own writing, and a note a student shared must never be presented that way.
 *
 * `viewerId` is the active learner (own notes follow the act-as chokepoint); `accountId` is the
 * signed-in account (the teaching half). They differ only when a parent is acting as a managed
 * child, and then the teaching half must NOT be attributed to the child.
 */
export function noteSearchSource(
  note: { kind: string; authorId: string },
  viewerId: string,
  accountId: string,
): NoteSearchSource {
  if (note.kind === "teacher") return note.authorId === accountId ? "sent" : "teacher";
  return note.authorId === viewerId ? "mine" : "shared";
}

/** Field caps, enforced in the API and mirrored in the composer UI. */
export const NOTE_BODY_MAX = 8000;
export const NOTE_QUOTE_MAX = 1000;
export const NOTE_CONTEXT_MAX = 200;
export const NOTE_BLOCK_ID_MAX = 64;
