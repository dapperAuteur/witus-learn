import "server-only";
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { futureWorkNotes, type FutureWorkNote } from "@/db/schema";

// Notes the owner leaves on Future Classes & Features items (/admin/future). Every read and write
// is tenant-scoped; the tenant is always resolved server-side from the host, never from the client.

export interface NewFutureWorkNote {
  tenantId: string;
  itemKey: string;
  body: string;
  authorUserId: string | null;
}

export async function insertFutureWorkNote(n: NewFutureWorkNote): Promise<FutureWorkNote> {
  const [row] = await db.insert(futureWorkNotes).values(n).returning();
  return row;
}

/** All notes for a tenant, oldest first (they read as a thread under each item). */
export async function listFutureWorkNotes(tenantId: string): Promise<FutureWorkNote[]> {
  return db
    .select()
    .from(futureWorkNotes)
    .where(eq(futureWorkNotes.tenantId, tenantId))
    .orderBy(asc(futureWorkNotes.createdAt))
    .limit(1000);
}

/** Notes grouped by item key — what the board renders under each item. */
export async function futureWorkNotesByItem(tenantId: string): Promise<Map<string, FutureWorkNote[]>> {
  const map = new Map<string, FutureWorkNote[]>();
  for (const note of await listFutureWorkNotes(tenantId)) {
    const list = map.get(note.itemKey);
    if (list) list.push(note);
    else map.set(note.itemKey, [note]);
  }
  return map;
}

/** Flip a note open ⇄ done (tenant-scoped; a note from another school is invisible, not 403). */
export async function setFutureWorkNoteStatus(
  tenantId: string,
  id: string,
  status: "open" | "done",
): Promise<FutureWorkNote | null> {
  const [row] = await db
    .update(futureWorkNotes)
    .set({ status })
    .where(and(eq(futureWorkNotes.tenantId, tenantId), eq(futureWorkNotes.id, id)))
    .returning();
  return row ?? null;
}
