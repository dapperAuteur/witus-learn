import "server-only";
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { courses, tenants } from "@/db/schema";
import { sourceChatHistory, type SavedSourceChatCitation } from "@/db/schema/rag";

// Saved "chat with the sources" answers, platform owner only (src/lib/source-chat-history.ts decides
// WHEN to save; this only reads and writes). Every read and delete is keyed by the asker's user id, so
// one user can never see or remove another's rows, whatever the caller passes.

export interface NewSavedSourceChat {
  tenantId: string;
  courseId: string;
  userId: string;
  question: string;
  answer: string;
  citations: SavedSourceChatCitation[];
  agents: string[];
  grounding: string | null;
  provider: string | null;
  temperature: number | null;
  topK: number | null;
  usedChunks: number;
}

export interface SavedSourceChat {
  id: string;
  courseId: string;
  courseTitle: string;
  tenantName: string;
  question: string;
  answer: string;
  citations: SavedSourceChatCitation[];
  agents: string[];
  grounding: string | null;
  createdAt: Date;
}

/** Insert one saved answer; returns its id. */
export async function insertSavedSourceChat(row: NewSavedSourceChat): Promise<string> {
  const [saved] = await db.insert(sourceChatHistory).values(row).returning({ id: sourceChatHistory.id });
  return saved.id;
}

/** This user's saved answers, newest first, optionally for one course. */
export async function listSavedSourceChats(
  userId: string,
  opts: { courseId?: string | null; limit?: number } = {},
): Promise<SavedSourceChat[]> {
  const where = opts.courseId
    ? and(eq(sourceChatHistory.userId, userId), eq(sourceChatHistory.courseId, opts.courseId))
    : eq(sourceChatHistory.userId, userId);
  return db
    .select({
      id: sourceChatHistory.id,
      courseId: sourceChatHistory.courseId,
      courseTitle: courses.title,
      tenantName: tenants.name,
      question: sourceChatHistory.question,
      answer: sourceChatHistory.answer,
      citations: sourceChatHistory.citations,
      agents: sourceChatHistory.agents,
      grounding: sourceChatHistory.grounding,
      createdAt: sourceChatHistory.createdAt,
    })
    .from(sourceChatHistory)
    .innerJoin(courses, eq(courses.id, sourceChatHistory.courseId))
    .innerJoin(tenants, eq(tenants.id, sourceChatHistory.tenantId))
    .where(where)
    .orderBy(desc(sourceChatHistory.createdAt))
    .limit(Math.min(Math.max(opts.limit ?? 200, 1), 500));
}

/** The courses this user has saved answers for, for the admin page's filter. */
export async function listSavedSourceChatCourses(userId: string): Promise<{ courseId: string; courseTitle: string; tenantName: string }[]> {
  return db
    .selectDistinct({ courseId: courses.id, courseTitle: courses.title, tenantName: tenants.name })
    .from(sourceChatHistory)
    .innerJoin(courses, eq(courses.id, sourceChatHistory.courseId))
    .innerJoin(tenants, eq(tenants.id, sourceChatHistory.tenantId))
    .where(eq(sourceChatHistory.userId, userId))
    .orderBy(courses.title);
}

/** Delete one of THIS user's saved answers. False when there was no such row of theirs. */
export async function deleteSavedSourceChat(userId: string, id: string): Promise<boolean> {
  const rows = await db
    .delete(sourceChatHistory)
    .where(and(eq(sourceChatHistory.userId, userId), eq(sourceChatHistory.id, id)))
    .returning({ id: sourceChatHistory.id });
  return rows.length > 0;
}

/** Delete all of THIS user's saved answers (or all for one course). Returns how many went. */
export async function deleteAllSavedSourceChats(userId: string, courseId?: string | null): Promise<number> {
  const where = courseId
    ? and(eq(sourceChatHistory.userId, userId), eq(sourceChatHistory.courseId, courseId))
    : eq(sourceChatHistory.userId, userId);
  const rows = await db.delete(sourceChatHistory).where(where).returning({ id: sourceChatHistory.id });
  return rows.length;
}
