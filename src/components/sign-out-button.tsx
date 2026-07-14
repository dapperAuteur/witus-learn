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
export function SignOutButton({
  className,
  menuItem = false,
}: { className?: string; menuItem?: boolean } = {}) {
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
          router.refresh();
        })
      }
      className={
        className ??
        "hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
      }
    >
      {pending ? "Signing out…" : "Sign out"}
    </button>
  );
}
