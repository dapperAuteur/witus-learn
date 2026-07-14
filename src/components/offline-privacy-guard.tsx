"use client";

import { useEffect } from "react";
import { purgeSensitivePages } from "@/lib/offline";

/**
 * Deletes any PRIVATE page cached for offline that doesn't belong to whoever is signed in now.
 *
 * `/admin/future` can be saved for offline, and its cached HTML contains the owner's own notes.
 * Sign-out clears it (src/components/sign-out-button.tsx calls the same purge before destroying the
 * session) — but sign-out is not the only way a session ends. It can simply expire; a different
 * person can sign in on the same laptop. This closes that: every ONLINE page load under the
 * (tenant) layout re-asserts "cached private pages belong to the current user, or they go".
 *
 * ⚠️ ONLINE ONLY, and that condition is load-bearing.
 *
 * `userId` is baked into the HTML at render time. When the service worker replays a page from
 * cache, it replays a STALE `userId` — the one that was signed in when the page was saved. Acting
 * on that would let a cached signed-out page delete the owner's own downloads the first time he
 * opened one on a plane. So we only trust `userId` when it came fresh off the network. That's safe
 * to defer: signing in as anybody REQUIRES the network, so a user switch always produces an online
 * page load, and the purge always gets its chance before the new user can do anything.
 */
export function OfflinePrivacyGuard({ userId }: { userId: string | null }) {
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.onLine === false) return;
    void purgeSensitivePages(userId).catch(() => {
      /* best-effort: a browser with no Cache API has nothing to purge */
    });
  }, [userId]);

  return null;
}
