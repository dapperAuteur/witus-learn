"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { purgeSensitivePages } from "@/lib/offline";

// `className` lets callers restyle this as a plain inline link (default) or as a full-width
// menu row (nav-menu.tsx / mobile-nav.tsx). `menuItem` adds the ARIA + focus-management hooks
// (`role="menuitem"` + `data-menu-item`) those dropdowns use for arrow-key navigation, without
// forcing that semantic on the default standalone usage.
//
// SIGN-OUT ALSO TAKES THE PRIVATE DOWNLOADS WITH IT. The owner can save /admin/future for offline,
// and the cached HTML holds their notes in plain text on the device — so signing out has to remove
// it, or "sign out" would leave a readable copy of an admin page behind on a shared laptop. We
// purge BEFORE destroying the session (a purge is a local cache delete, not a request, so it can't
// be refused mid-way) and it is deliberately awaited: sign-out taking another 20ms is worth it.
// Public lessons are untouched — signing out must not cost a learner the course they downloaded.
// GLOBAL SIGN-OUT (BAM, 2026-08-30: "signout signs out of every app"). When `endSessionUrl` is
// present, sign-out also ends the shared session at accounts.witus.online, so signing out of Learn
// signs you out of every WitUS app in this browser. The caller resolves it on the SERVER and passes
// null for any tenant outside the ecosystem: a white-label school's learner must never be
// redirected to the shared IdP, which would leak the ecosystem exactly as a silent sign-in would.
export function SignOutButton({
  className,
  menuItem = false,
  endSessionUrl = null,
}: { className?: string; menuItem?: boolean; endSessionUrl?: string | null } = {}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      role={menuItem ? "menuitem" : undefined}
      data-menu-item={menuItem ? "true" : undefined}
      onClick={() =>
        startTransition(async () => {
          // `null` = "nobody is signed in now", so every sensitive cached page is purged.
          // Best-effort by design: an unsupported browser has no Cache API to purge, and a failure
          // here must never trap someone in a session they asked to leave.
          await purgeSensitivePages(null).catch(() => {});
          await authClient.signOut();
          // ORDER IS THE SAFETY PROPERTY. The local session is already destroyed by the line above,
          // so if the IdP refuses the logout, is unreachable, or the redirect never completes, the
          // person is still signed out HERE. Never hand off first and destroy locally afterwards:
          // that turns any IdP failure into "I clicked sign out and I am still signed in".
          if (endSessionUrl) {
            const back = `${window.location.origin}/`;
            // A full navigation, not router.push: this leaves our origin for the IdP, which then
            // returns to `back`. post_logout_redirect_uri must be registered for this client in
            // gemini/witus/lib/identity/clients.ts or the IdP will refuse the redirect and land the
            // visitor on its own page instead. They are still signed out either way.
            window.location.assign(
              `${endSessionUrl}?post_logout_redirect_uri=${encodeURIComponent(back)}`,
            );
            return;
          }
          // Go to a PUBLIC page, do not refresh in place: if you signed out from a gated page
          // (an admin or dashboard route), re-rendering it logged-out would forbidden() into a 403.
          // "/" is the public front door (the landing/catalog), so sign-out always lands somewhere open.
          router.push("/");
          router.refresh();
        })
      }
      className={
        className ??
        "hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
      }
    >
      {pending ? "Signing out…" : endSessionUrl ? "Sign out of WitUS" : "Sign out"}
    </button>
  );
}
