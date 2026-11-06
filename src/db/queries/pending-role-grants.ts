import { and, eq, isNull, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { pendingRoleGrants, tenantMemberships } from "@/db/schema";

/**
 * Turn every unclaimed role grant waiting for this address into a membership, the moment the account
 * is created (better-auth's user.create hook, src/lib/auth.ts). Each grant names ONE school, so a
 * claim only ever writes a membership on the school the owner named for that address; an existing
 * membership is left as it is. Returns how many grants were claimed.
 *
 * Runs for every new account, so it must never break a sign-up: the hook catches and logs any error.
 */
export async function claimPendingRoleGrants(userId: string, email: string): Promise<number> {
  const grants = await db
    .select()
    .from(pendingRoleGrants)
    .where(and(sql`${pendingRoleGrants.email} = ${email.trim()}`, isNull(pendingRoleGrants.claimedAt)));
  for (const g of grants) {
    await db
      .insert(tenantMemberships)
      .values({ tenantId: g.tenantId, userId, role: g.role })
      .onConflictDoNothing({ target: [tenantMemberships.tenantId, tenantMemberships.userId] });
    await db
      .update(pendingRoleGrants)
      .set({ claimedAt: new Date(), claimedUserId: userId })
      .where(and(eq(pendingRoleGrants.id, g.id), isNull(pendingRoleGrants.claimedAt)));
  }
  return grants.length;
}
