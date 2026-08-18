// Content-derived block ids for lesson markdown (plans/61 §0/§2).
//
// The renderer stamps each prose block (paragraph, heading, list item) with an id DERIVED FROM
// ITS TEXT, never from its position: inserting a paragraph above must not renumber everything
// below it, or the ids are no better than character offsets. A short FNV-1a hash of the
// whitespace-normalized text is stable across formatting-only edits (emphasis added or removed,
// wrapping changed) and across edits ANYWHERE ELSE in the lesson.
//
// Two identical blocks in one lesson share an id by construction. That is accepted, not a bug:
// the annotation's quote + surrounding context disambiguates within the id's matches, which is
// exactly the plan's "disambiguating suffix" job done at match time instead of render time —
// doing it at render time would need cross-block occurrence counters, which reintroduce position
// dependence through the back door.

/** 32-bit FNV-1a over the normalized text, as 8 lowercase hex chars. */
function fnv1a32(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    // h *= 16777619, in 32-bit space without BigInt.
    h = (h + ((h << 1) >>> 0) + ((h << 4) >>> 0) + ((h << 7) >>> 0) + ((h << 8) >>> 0) + ((h << 24) >>> 0)) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

/** The id for one block's plain-text content, or null for blocks with no text to hash. */
export function blockIdForText(text: string): string | null {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length === 0) return null;
  return `b${fnv1a32(normalized)}`;
}

/** Minimal structural view of a hast node, enough to collect its text. Kept local so the
 *  renderer does not grow a dependency on hast's full typings. */
export interface TextBearingNode {
  type?: string;
  value?: string;
  children?: TextBearingNode[];
}

/** Plain text of a hast subtree, in document order (what the DOM's textContent will contain). */
export function hastText(node: TextBearingNode | undefined | null): string {
  if (!node) return "";
  if (typeof node.value === "string") return node.value;
  if (!node.children) return "";
  let out = "";
  for (const child of node.children) out += hastText(child);
  return out;
}
