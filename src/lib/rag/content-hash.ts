// What a course's retrieval index was built FROM, as one hash (plans/97 Q5). Stored per course in
// course_rag_index.content_hash after a rebuild, so "which courses changed since they were indexed"
// is a comparison. PURE: computable in JS (tests, the indexer's cross-check) and, with the same
// algorithm, in SQL (RAG_CONTENT_HASH_SQL in ./index-course.ts), so listing every course's state is
// one query instead of reading the whole catalog's lesson text into memory.
//
// Algorithm (both sides must agree):
//   item fingerprint = md5("L" + US + title + US + body) for each lesson with a non-empty body,
//                      md5("C" + US + citation) for each source whose (apa || inText) is non-empty,
//   US = the unit separator, character 31;
//   hash = sha256_hex(HEADER + "\n" + fingerprints sorted by byte order, joined with "\n").
// HEADER names the model, dimensions and chunking, so changing any of them marks every course stale.
// Lesson ORDER is deliberately not in the hash: reordering lessons does not change what is embedded.

import { createHash } from "node:crypto";
import { EMBED_DIMS, EMBED_MODEL } from "./embed-batch";

export const CHUNK_SIZE = 1800;
export const CHUNK_OVERLAP = 200;
// Since migration 0076 this reads "rag-v1|mistral-embed|1024|1800/200", so every course indexed with
// Gemini became "changed" and the admin page lists it for a re-index.
export const RAG_HASH_HEADER = `rag-v1|${EMBED_MODEL}|${EMBED_DIMS}|${CHUNK_SIZE}/${CHUNK_OVERLAP}`;
const US = String.fromCharCode(31);

export interface RagLessonInput {
  title: string;
  body: string | null;
}
export interface RagSourceInput {
  apa: string | null;
  inText: string | null;
}

/** The citation text the indexer embeds for a source, or null when it embeds nothing. */
export function citationText(s: RagSourceInput): string | null {
  return s.apa || s.inText || null;
}

const md5 = (s: string) => createHash("md5").update(s, "utf8").digest("hex");

export function courseRagContentHash(lessons: readonly RagLessonInput[], sources: readonly RagSourceInput[]): string {
  const fps: string[] = [];
  for (const l of lessons) if (l.body) fps.push(md5(`L${US}${l.title}${US}${l.body}`));
  for (const s of sources) {
    const c = citationText(s);
    if (c) fps.push(md5(`C${US}${c}`));
  }
  // md5 hex is ASCII, so the default sort is byte order, matching COLLATE "C" in SQL.
  fps.sort();
  return createHash("sha256").update(`${RAG_HASH_HEADER}\n${fps.join("\n")}`, "utf8").digest("hex");
}

/**
 * The whitespace clean-up chunkText applies before slicing. Every chunk is a substring of this, so it
 * is also how a chunk is found again in its lesson body (src/lib/source-chat-links.ts).
 */
export function cleanChunkSource(text: string): string {
  return text.replace(/\r/g, "").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
}

/** Split a body into overlapping chunks, exactly as the indexer always has. */
export function chunkText(text: string, size = CHUNK_SIZE, overlap = CHUNK_OVERLAP): string[] {
  const clean = cleanChunkSource(text);
  if (clean.length <= size) return clean ? [clean] : [];
  const out: string[] = [];
  for (let i = 0; i < clean.length; i += size - overlap) out.push(clean.slice(i, i + size));
  return out;
}
