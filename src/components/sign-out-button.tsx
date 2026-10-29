"use client";

import { useId, useTransition } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { clearVisitedPages, purgeSensitivePages, settleOfflineSaves } from "@/lib/offline";
import {
  SIGN_OUT_EVERYWHERE_HELP,
  SIGN_OUT_EVERYWHERE_LABEL,
  SIGN_OUT_LABEL,
  SIGN_OUT_PENDING_LABEL,
  signOutEverywhere,
  signOutHere,
} from "@/lib/sign-out";

// `className` lets callers restyle these as a plain inline link (default) or as a full-width
// menu row (nav-menu.tsx / mobile-nav.tsx). `menuItem` adds the ARIA + focus-management hooks
// (`role="menuitem"` + `data-menu-item`) those dropdowns use for arrow-key navigation, without
// forcing that semantic on the default standalone usage.
//
// SIGN-OUT ALSO TAKES THE PRIVATE DOWNLOADS WITH IT, from BOTH controls. The owner can save
// /admin/future for offline, and the cached HTML holds their notes in plain text on the device, so
// signing out has to remove it, or "sign out" would leave a readable copy of an admin page behind
// on a shared laptop. We purge BEFORE destroying the session (a purge is a local cache delete, not
// a request, so it can't be refused mid-way) and it is deliberately awaited: sign-out taking
// another 20ms is worth it. Public lessons are untouched: signing out must not cost a learner the
// course they downloaded. The visited-pages cache goes too: those copies were rendered for the
// person signing out.
//
// TWO CONTROLS (BAM, 2026-10-29, witus task 128 option (b)). "Sign out" ends only this app's
// session; it never goes to the IdP and is never relabeled. "Sign out of WitUS everywhere" also
// ends the WitUS session, and renders only when the caller passes an end-session URL. The caller
// resolves that on the SERVER and passes null for any tenant outside the ecosystem: a white-label
// school's learner must never be redirected to the shared IdP, which would leak the ecosystem
// exactly as a silent sign-in would.

async function purgeOffline(): Promise<void> {
  // `null` = "nobody is signed in now", so every sensitive cached page is purged.
  // Best-effort by design: an unsupported browser has no Cache API to purge, and a failure
  // here must never trap someone in a session they asked to leave.
  // First stop every offline save still running (here and in the service worker), so a page
  // fetched for this session cannot be written after the purge below and outlive it.
  await settleOfflineSaves().catch(() => {});
  await purgeSensitivePages(null).catch(() => {});
  await clearVisitedPages().catch(() => {});
}

const DEFAULT_CLASS =
  "hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";

export function SignOutButton({
  className,
  menuItem = false,
}: { className?: string; menuItem?: boolean }) {
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
          await signOutHere({
            purgeOffline,
            signOut: () => authClient.signOut(),
            goLocal: (path) => {
              router.push(path);
              router.refresh();
            },
          });
        })
      }
      className={className ?? DEFAULT_CLASS}
    >
      {pending ? SIGN_OUT_PENDING_LABEL : SIGN_OUT_LABEL}
    </button>
  );
}

export function SignOutEverywhereButton({
  className,
  menuItem = false,
  endSessionUrl,
}: { className?: string; menuItem?: boolean; endSessionUrl: string | null }) {
  const helpId = useId();
  const [pending, startTransition] = useTransition();
  if (!endSessionUrl) return null;
  return (
    <>
      <button
        type="button"
        disabled={pending}
        role={menuItem ? "menuitem" : undefined}
        data-menu-item={menuItem ? "true" : undefined}
        aria-describedby={helpId}
        onClick={() =>
          startTransition(async () => {
            await signOutEverywhere({
              purgeOffline,
              signOut: () => authClient.signOut(),
              navigate: (url) => window.location.assign(url),
              endSessionUrl,
              origin: window.location.origin,
            });
          })
        }
        className={className ?? DEFAULT_CLASS}
      >
        {pending ? SIGN_OUT_PENDING_LABEL : SIGN_OUT_EVERYWHERE_LABEL}
      </button>
      {/* Inside a role="menu" panel only menu items may be exposed, so there the help text is
          hidden from the accessibility tree and reaches assistive tech through aria-describedby
          (which reads hidden elements). Everywhere else it is ordinary visible text. */}
      <p
        id={helpId}
        aria-hidden={menuItem ? "true" : undefined}
        className="px-3 pb-2 text-xs leading-snug text-neutral-600 dark:text-neutral-400"
      >
        {SIGN_OUT_EVERYWHERE_HELP}
      </p>
    </>
  );
}
