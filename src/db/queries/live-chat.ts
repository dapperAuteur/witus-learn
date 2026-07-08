import "server-only";
import { and, asc, desc, eq, gt } from "drizzle-orm";
import { db } from "@/db/client";
import { liveMessages, type LiveMessage } from "@/db/schema/live-chat";

// Live class chat — tenant-scoped. Read the recent messages (or just the new ones after a cursor),
// post a message, and (for moderators) delete one.

export async function postLiveMessage(
  tenantId: string,
  userId: string,
  name: string | null,
  body: string,
): Promise<LiveMessage> {
  const [row] = await db.insert(liveMessages).values({ tenantId, userId, name, body }).returning();
  return row;
}

/** Messages for the tenant's live room. With `after`, only newer ones (for polling); else the recent N. */
export async function listLiveMessages(tenantId: string, after?: Date, limit = 100): Promise<LiveMessage[]> {
  if (after) {
    return db
      .select()
      .from(liveMessages)
      .where(and(eq(liveMessages.tenantId, tenantId), gt(liveMessages.createdAt, after)))
      .orderBy(asc(liveMessages.createdAt))
      .limit(limit);
  }
  const rows = await db
    .select()
    .from(liveMessages)
    .where(eq(liveMessages.tenantId, tenantId))
    .orderBy(desc(liveMessages.createdAt))
    .limit(limit);
  return rows.reverse();
}

export async function deleteLiveMessage(tenantId: string, id: string): Promise<void> {
  await db.delete(liveMessages).where(and(eq(liveMessages.tenantId, tenantId), eq(liveMessages.id, id)));
}
