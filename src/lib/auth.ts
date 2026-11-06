import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { magicLink } from "better-auth/plugins/magic-link";
import { genericOAuth } from "better-auth/plugins";
import { db, schema } from "@/db/client";
import { userProfiles } from "@/db/schema";
import { claimPendingRoleGrants } from "@/db/queries/pending-role-grants";
import { env } from "./env";
import { rewriteOrigin } from "./auth-url";
import { sendEmail } from "./mailer";
import { getTenantByHost } from "./tenant";
import { computeTrustedOrigins } from "./auth-origins";
import { kidLoginPlugin } from "./kid-login-plugin";
import { demoLoginPlugin } from "./demo-login-plugin";

/** Origins allowed to drive auth. DYNAMIC: every brand has its own domain(s), so we
 *  trust the request's origin when its host resolves to a registered tenant — that's
 *  why custom domains like www.bettervice.club work without hardcoding each in env.
 *  (Previously static + env-only, which 403'd magic-link sign-in on tenant domains.)
 *  The computation lives in ./auth-origins so the kid-login plugin's CSRF check reuses
 *  the exact same trusted set (single source of truth). */
async function trustedOrigins(request?: Request): Promise<string[]> {
  return computeTrustedOrigins(request?.headers);
}

export const auth = betterAuth({
  appName: "Learn.WitUS",
  baseURL: env.BETTER_AUTH_URL,
  secret: env.BETTER_AUTH_SECRET,
  trustedOrigins,
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
    usePlural: true,
  }),
  // Passwordless: magic link only. Open self-serve — anyone can sign up; the
  // user.create hook provisions their global profile. Per-tenant roles are
  // granted separately (instructor onboarding / brand-admin assignment).
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, url }, request) => {
        // Brand the email per the tenant whose domain the request came from, so
        // BVC sign-in mail never says Learn.WitUS / CentenarianOS. Point the link
        // at that same host so the session cookie lands on the right brand.
        const host =
          request?.headers?.get("x-forwarded-host") ?? request?.headers?.get("host");
        const proto = request?.headers?.get("x-forwarded-proto");
        const link = rewriteOrigin(url, host, proto);
        const tenant = await getTenantByHost(host);
        const brand = tenant?.theme.name ?? tenant?.name ?? "Learn.WitUS";
        await sendEmail({
          to: email,
          subject: `Your ${brand} sign-in link`,
          text: `Sign in to ${brand}:\n${link}\n\nThis link expires in 10 minutes. If you didn't request it, ignore this email.`,
          from: tenant?.email.from,
          replyTo: tenant?.email.replyTo,
          // Mirrored to the WitUS Inbox as metadata only — `link` is a bearer credential (it signs
          // the recipient in), so src/lib/email-redact.ts strips it from the mirrored body.
          kind: "magic-link",
          tenant: tenant?.slug,
        });
      },
    }),
    // "Sign in with WitUS" — the ecosystem IdP as an OIDC provider. Added only
    // when configured, so a missing env never breaks the build. The login page
    // only SHOWS the button for tenants whose flags.ecosystemSso is true (the
    // WitUS-branded base tenant) — white-label tenants stay isolated, so they
    // never redirect to accounts.witus.online.
    ...(process.env.WITUS_OIDC_CLIENT_ID
      ? [
          genericOAuth({
            config: [
              {
                providerId: "witus",
                discoveryUrl:
                  process.env.WITUS_OIDC_DISCOVERY_URL ??
                  "https://accounts.witus.online/api/idp/.well-known/openid-configuration",
                clientId: process.env.WITUS_OIDC_CLIENT_ID,
                clientSecret: process.env.WITUS_OIDC_CLIENT_SECRET ?? "",
                scopes: ["openid", "email", "profile"],
                pkce: true,
                // The IdP registers /api/auth/oauth2/callback/witus (the ecosystem-wide
                // better-auth 1.6 path, exact-match validated). better-auth 1.7 serves the
                // callback at the core /api/auth/callback/:id, so the authorize/token
                // redirect_uri is pinned to the registered form and the catch-all route
                // 307s it to the core handler. Same shim as vogoat.
                redirectURI: new URL("/api/auth/oauth2/callback/witus", env.BETTER_AUTH_URL).toString(),
                // "Sign out" ends ONLY this app's session (witus task 128 option (b)). better-auth
                // 1.7 made RP-initiated logout the default: without this flag, signOut() answers
                // with the IdP's end_session_endpoint + id_token_hint and the client follows it,
                // which strands the person on accounts.witus.online and ends the shared WitUS
                // session. "Sign out of WitUS everywhere" does its own handoff (signOutEverywhere()
                // in src/lib/sign-out.ts: authClient.signOut(), then a full navigation to the
                // end-session URL with client_id and post_logout_redirect_uri), so it never relied
                // on this.
                // Pinned by tests/sign-out-local-only.test.ts.
                disableProviderLogout: true,
              },
            ],
          }),
        ]
      : []),
    // Avatar + PIN kid login (Option A of plans/kid-login-avatar-pin-design.md) — a
    // dedicated endpoint that mints a child's own session without email or a password.
    // See src/lib/kid-login-plugin.ts for why this is a plugin, not a hand-rolled cookie.
    kidLoginPlugin(),
    // "Try the demo" (Acme tenant only) — mints a session for the shared demo account.
    // See src/lib/demo-login-plugin.ts for the tenant-lock + secret-lock security model.
    demoLoginPlugin(),
    nextCookies(),
  ],
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          // Bootstrap the LMS-owned profile; grant platform-owner to the seed email.
          const isOwner =
            !!env.PLATFORM_OWNER_EMAIL &&
            user.email.toLowerCase() === env.PLATFORM_OWNER_EMAIL.toLowerCase();
          await db
            .insert(userProfiles)
            .values({ userId: user.id, isPlatformOwner: isOwner })
            .onConflictDoNothing();
          // A role the owner granted this address before it had an account (pnpm test-users:prod)
          // lands now, whichever way the account was made: a magic link on any school, or "Sign in
          // with WitUS" on learn.witus.online. Never allowed to fail a sign-up.
          try {
            await claimPendingRoleGrants(user.id, user.email);
          } catch (err) {
            console.error("[auth] pending role grants not claimed", err);
          }
        },
      },
    },
  },
});

export type Session = typeof auth.$Infer.Session;
