import "server-only";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { sourceChunks, type SourceChunk } from "@/db/schema/rag";

// Retrieval for "chat with the sources". Everything is scoped by tenant AND course so the corpus of one
// course/tenant can never leak into another's answers (isolation invariant). Embeddings are 768-dim
// Gemini vectors; distance is cosine (`<=>`) backed by the hnsw index.

export interface ChunkInsert {
  tenantId: string;
  courseId: string;
  sourceId?: string | null;
  kind: "public_domain_text" | "lesson" | "citation";
  title?: string | null;
  text: string;
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
      embedding: c.embedding,
      ord: c.ord ?? 0,
    })),
  );
}

/** Whether a course has been indexed yet (used to hide the chat panel until there's a corpus). */
export async function courseHasChunks(tenantId: string, courseId: string): Promise<boolean> {
  const rows = await db
    .select({ id: sourceChunks.id })
    .from(sourceChunks)
    .where(and(eq(sourceChunks.tenantId, tenantId), eq(sourceChunks.courseId, courseId)))
    .limit(1);
  return rows.length > 0;
}

export type RetrievedChunk = Omit<SourceChunk, "embedding"> & { distance: number };

/** Top-k nearest chunks for a query embedding, scoped to (tenant, course). Lower distance = closer. */
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
      distance: sql<number>`${sourceChunks.embedding} <=> ${vec}::vector`,
    })
    .from(sourceChunks)
    .where(and(eq(sourceChunks.tenantId, tenantId), eq(sourceChunks.courseId, courseId)))
    .orderBy(sql`${sourceChunks.embedding} <=> ${vec}::vector`)
    .limit(k);
  return rows as RetrievedChunk[];
}
