"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

// `className` lets callers restyle this as a plain inline link (default) or as a full-width
// menu row (nav-menu.tsx / mobile-nav.tsx). `menuItem` adds the ARIA + focus-management hooks
// (`role="menuitem"` + `data-menu-item`) those dropdowns use for arrow-key navigation, without
// forcing that semantic on the default standalone usage.
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
