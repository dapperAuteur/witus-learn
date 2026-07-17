// `:::reveal` check-yourself cards: one shared parser + one shared identity, used by the
// lesson-body renderer (client), the recall API route (server), and the dashboard history
// query (server). Keeping all three on this module is what makes a learner's history line
// up with what the lesson actually shows.
//
// ── Identity: why a NEGATIVE prompt-derived promptIndex ───────────────────────────────────
// Self-grades land in the existing `recall_attempts` table, whose only identity column is
// `prompt_index` (an int4 — historically the position in the lesson's recall_content array,
// always >= 0). Reveals get the SAME table with no migration by claiming the negative half
// of that integer:
//
//   recall card  → promptIndex >= 0   (position in recall_content, unchanged)
//   :::reveal    → promptIndex <  0   (-(hash(question) + 1), see revealPromptIndex)
//
// The sign is the discriminator, so the two kinds stay distinguishable but queryable
// together (one accuracy stat, one history). The magnitude is a 28-bit hash of the
// NORMALIZED question text — like quizAttempts.questionKey it is prompt-derived, so the
// identity survives reveals being reordered or new ones inserted above (a positional index
// would not), and the same check graded across sessions aggregates onto one row. Editing a
// question's wording resets that one item's history, which is honest: it is a new question.
// Collisions: within one lesson (tens of reveals) the 2^28 space makes a clash ~1e-6 —
// acceptable for self-grades. The full range [-(2^28), -1] sits comfortably inside int4.

export const REVEAL_RE = /^:::reveal\s+(.+?)\s*\|\|\|\s*(.+?)\s*$/;

export interface RevealItem {
  question: string;
  answer: string;
}

/** Every `:::reveal <question> ||| <answer>` in a lesson body, in order of appearance. */
export function extractReveals(body: string | null | undefined): RevealItem[] {
  if (!body) return [];
  const out: RevealItem[] = [];
  for (const line of body.split("\n")) {
    const m = line.match(REVEAL_RE);
    if (m) out.push({ question: m[1], answer: m[2] });
  }
  return out;
}

/** Whitespace-insensitive canonical form, so a double-space edit doesn't orphan history. */
export function normalizeRevealPrompt(question: string): string {
  return question.replace(/\s+/g, " ").trim();
}

/** 28-bit djb2 hash of the normalized question (same family as quizAttempts.questionKey). */
export function revealKey(question: string): number {
  const s = normalizeRevealPrompt(question);
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return h >>> 4; // 0 … 2^28-1
}

/** The recall_attempts.prompt_index a reveal grade is stored under. Always negative. */
export function revealPromptIndex(question: string): number {
  return -(revealKey(question) + 1); // -1 … -(2^28)
}

/** Discriminator: was this attempt row a `:::reveal` check (vs a recall card)? */
export function isRevealPromptIndex(promptIndex: number): boolean {
  return promptIndex < 0;
}

/** Reverse lookup for history views: which reveal in this body produced this promptIndex? */
export function findRevealByPromptIndex(
  body: string | null | undefined,
  promptIndex: number,
): RevealItem | null {
  if (!isRevealPromptIndex(promptIndex)) return null;
  return extractReveals(body).find((r) => revealPromptIndex(r.question) === promptIndex) ?? null;
}

/** The reveal in `body` matching a learner-submitted prompt (whitespace-insensitive), or null. */
export function matchReveal(body: string | null | undefined, prompt: string): RevealItem | null {
  const wanted = normalizeRevealPrompt(prompt);
  if (!wanted) return null;
  return extractReveals(body).find((r) => normalizeRevealPrompt(r.question) === wanted) ?? null;
}
