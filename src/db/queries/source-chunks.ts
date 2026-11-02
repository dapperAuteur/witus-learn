import "server-only";
import { and, eq, isNotNull, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { sourceChunks, type SourceChunk } from "@/db/schema/rag";

// Retrieval for "chat with the sources". Everything is scoped by tenant AND course so the corpus of one
// course/tenant can never leak into another's answers (isolation invariant). Since migration 0076 the
// vectors are 1024-dim mistral-embed in `embedding_v2` (src/lib/rag/embed-batch.ts), and the QUESTION
// must be embedded with the same model (embedQuery there). Distance is cosine (`<=>`) backed by the
// hnsw index on embedding_v2. A chunk with no embedding_v2 (indexed before 0076) is never returned.

export interface ChunkInsert {
  tenantId: string;
  courseId: string;
  sourceId?: string | null;
  kind: "public_domain_text" | "lesson" | "citation";
  title?: string | null;
  text: string;
  /** 1024-dim mistral-embed vector, stored in embedding_v2. */
  embedding: number[];
  ord?: number;
}

/** Drop a course's chunks (called before a re-index so it's a clean rebuild). */
export async function clearCourseChunks(courseId: string): Promise<void> {
  await db.delete(sourceChunks).where(eq(sourceChunks.courseId, courseId));
}

export async function insertChunks(chunks: ChunkInsert[]): Promise<void> {
  if (chunks.length === 0) return;
  await db.insert(sourceChunks).values(
    chunks.map((c) => ({
      tenantId: c.tenantId,
      courseId: c.courseId,
      sourceId: c.sourceId ?? null,
      kind: c.kind,
      title: c.title ?? null,
      text: c.text,
      embeddingV2: c.embedding,
      ord: c.ord ?? 0,
    })),
  );
}

/**
 * Whether a course has been indexed with the current model yet (used to hide the chat panel until
 * there's a corpus it can search). Chunks with only the legacy vector do not count.
 */
export async function courseHasChunks(tenantId: string, courseId: string): Promise<boolean> {
  const rows = await db
    .select({ id: sourceChunks.id })
    .from(sourceChunks)
    .where(and(eq(sourceChunks.tenantId, tenantId), eq(sourceChunks.courseId, courseId), isNotNull(sourceChunks.embeddingV2)))
    .limit(1);
  return rows.length > 0;
}

export type RetrievedChunk = Omit<SourceChunk, "embedding" | "embeddingV2"> & { distance: number };

/**
 * Top-k nearest chunks for a query embedding (1024-dim mistral-embed, from embedQuery), scoped to
 * (tenant, course). Lower distance = closer. Rows without embedding_v2 are skipped.
 */
export async function retrieveChunks(
  tenantId: string,
  courseId: string,
  queryEmbedding: number[],
  k = 6,
): Promise<RetrievedChunk[]> {
  const vec = `[${queryEmbedding.join(",")}]`;
  const rows = await db
    .select({
      id: sourceChunks.id,
      tenantId: sourceChunks.tenantId,
      courseId: sourceChunks.courseId,
      sourceId: sourceChunks.sourceId,
      kind: sourceChunks.kind,
      title: sourceChunks.title,
      text: sourceChunks.text,
      ord: sourceChunks.ord,
      createdAt: sourceChunks.createdAt,
      distance: sql<number>`${sourceChunks.embeddingV2} <=> ${vec}::vector`,
    })
    .from(sourceChunks)
    .where(and(eq(sourceChunks.tenantId, tenantId), eq(sourceChunks.courseId, courseId), isNotNull(sourceChunks.embeddingV2)))
    .orderBy(sql`${sourceChunks.embeddingV2} <=> ${vec}::vector`)
    .limit(k);
  return rows as RetrievedChunk[];
}
