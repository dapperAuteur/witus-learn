import "server-only";
import { cookies } from "next/headers";
import { getManagedChildName, isManagedChildOf } from "@/db/queries/family";
import type { Session } from "@/lib/auth";

// Family Model B "act-as" chokepoint. A parent studies as a managed child by selecting
// them via POST /api/family/act-as, which sets this httpOnly cookie to the child's
// user id. EVERY read of that cookie is re-verified here against
// `managedByUserId === session.user.id` — the cookie alone is NEVER trusted, so a
// forged/stale cookie (e.g. left over after switching accounts, or a value copied from
// another browser) can only ever fall back to "me", never grant access to someone
// else's child.

export const ACTIVE_LEARNER_COOKIE = "active_learner";

export interface ActiveLearner {
  id: string;
  name: string | null;
  isChild: boolean;
}

/**
 * Resolve who the signed-in user is currently acting as: either themselves, or — if the
 * `active_learner` cookie names a child they actually manage — that child. Call this
 * (not `session.user.id` directly) at every point that ATTRIBUTES a learning action
 * (enrollment, progress, recall, quiz, submission, live presence/chat) or GATES access
 * to the learner's own content (enrollment checks on lesson/course pages).
 *
 * Never used for account/permission checks (teach/admin/authoring) — those must keep
 * using `session.user.id` directly.
 */
export async function getActiveLearner(session: Session | null): Promise<ActiveLearner | null> {
  if (!session) return null;

  const store = await cookies();
  const cookieChildId = store.get(ACTIVE_LEARNER_COOKIE)?.value;
  if (cookieChildId) {
    // Re-verify against the DB on every call — the cookie only ever carries an id,
    // never a trust decision.
    const allowed = await isManagedChildOf(session.user.id, cookieChildId);
    if (allowed) {
      const name = await getManagedChildName(cookieChildId);
      return { id: cookieChildId, name, isChild: true };
    }
    // Cookie points at a child this user does NOT manage (forged, stale, or the
    // managing relationship was removed) — silently fall back to "me".
  }

  return { id: session.user.id, name: session.user.name ?? null, isChild: false };
}
