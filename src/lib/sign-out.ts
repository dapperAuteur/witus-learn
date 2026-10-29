/**
 * Sign-out semantics (BAM, 2026-10-29, witus task 128 option (b)).
 *
 * - "Sign out" ends ONLY this app's session and goes to "/". It never navigates to the IdP, so the
 *   WitUS session and every other WitUS app stay signed in.
 * - "Sign out of WitUS everywhere" is a second control, offered only on a school the WitUS IdP has
 *   registered (the caller passes a null URL everywhere else, so a white-label school's learner
 *   never sees it and is never sent to the shared IdP). It ends this app's session, then sends the
 *   browser to the IdP's RP-initiated logout endpoint, which ends the WitUS session. Other WitUS
 *   apps keep their own sessions until you sign out of them (the IdP has no back-channel logout),
 *   and the help text says so.
 *
 * This replaces the 2026-08-30 behaviour where the plain button also ended the WitUS session.
 * Pure helpers only (no window, no React) so tests drive them with fakes.
 */

export const SIGN_OUT_LABEL = "Sign out";
export const SIGN_OUT_EVERYWHERE_LABEL = "Sign out of WitUS everywhere";
export const SIGN_OUT_EVERYWHERE_HELP =
  "Also signs you out of WitUS. Other WitUS apps you are signed in to stay signed in until you sign out of them.";
export const SIGN_OUT_PENDING_LABEL = "Signing out…";

/**
 * Where plain "Sign out" lands: a PUBLIC page, never a refresh in place. If you signed out from a
 * gated page (an admin or dashboard route), re-rendering it logged-out would forbidden() into a
 * 403. "/" is the public front door (the landing/catalog), so sign-out always lands somewhere open.
 */
export const LOCAL_SIGN_OUT_DESTINATION = "/";

/**
 * The IdP logout URL for "Sign out of WitUS everywhere".
 *
 * `endSessionUrl` is `witusEndSessionEndpoint` from src/lib/env.ts: the IdP's endsession endpoint
 * with the REQUIRED `?client_id=...` already baked in on the server. `&`, not `?`, for that reason.
 *
 * Trailing slash is REQUIRED. better-auth exact-matches post_logout_redirect_uri against the
 * client's registered redirectUrls, and gemini/witus registers `https://learn.witus.online/`
 * (EcosystemApp.postLogoutPath = "/"). Drop the slash and the IdP returns invalid_request. If the
 * origin is not registered at all, the IdP refuses the redirect and lands the visitor on its own
 * page instead; they are still signed out either way.
 */
export function endSessionNavigationUrl(endSessionUrl: string, origin: string): string {
  return `${endSessionUrl}&post_logout_redirect_uri=${encodeURIComponent(`${origin}/`)}`;
}

type Steps = {
  /** Remove this person's private offline copies. Best-effort; must never throw past here. */
  purgeOffline: () => Promise<void>;
  signOut: () => Promise<unknown>;
};

/** Plain "Sign out": this app only. Deliberately takes no IdP URL. */
export async function signOutHere(deps: Steps & { goLocal: (path: string) => void }): Promise<void> {
  // Purge BEFORE destroying the session (see sign-out-button.tsx for why).
  await deps.purgeOffline().catch(() => {});
  try {
    await deps.signOut();
  } catch {
    // Still leave: a failed sign-out call must not strand the person on a gated page.
  }
  deps.goLocal(LOCAL_SIGN_OUT_DESTINATION);
}

/** "Sign out of WitUS everywhere": offline purge, then this app's session, then the IdP. */
export async function signOutEverywhere(
  deps: Steps & { navigate: (url: string) => void; endSessionUrl: string; origin: string },
): Promise<void> {
  await deps.purgeOffline().catch(() => {});
  // ORDER IS THE SAFETY PROPERTY. The local session is destroyed before we hand off, so if the IdP
  // refuses the logout, is unreachable, or the redirect never completes, the person is still
  // signed out HERE. Never hand off first and destroy locally afterwards: that turns any IdP
  // failure into "I clicked sign out and I am still signed in".
  try {
    await deps.signOut();
  } catch {
    // Swallowed: the hand-off below still ends the WitUS session.
  }
  // A full navigation, not router.push: this leaves our origin for the IdP, which then returns to
  // `<origin>/`.
  deps.navigate(endSessionNavigationUrl(deps.endSessionUrl, deps.origin));
}
