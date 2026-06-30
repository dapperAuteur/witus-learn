import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { magicLink } from "better-auth/plugins/magic-link";
import { db, schema } from "@/db/client";
import { userProfiles } from "@/db/schema";
import { env } from "./env";
import { sendEmail } from "./mailer";
import { getTenantByHost } from "./tenant";

/** Rewrite a URL's origin to the request host so magic links land on the tenant
 *  domain the user signed in from (sessions are per-domain; no cross-brand SSO). */
function rewriteOrigin(
  url: string,
  host: string | null | undefined,
  proto: string | null | undefined,
): string {
  if (!host) return url;
  try {
    const parsed = new URL(url);
    parsed.host = host;
    parsed.protocol = `${proto ?? (host.includes("localhost") ? "http" : "https")}:`;
    return parsed.toString();
  } catch {
    return url;
  }
}

/** Static, env-driven base origins (the platform's own URLs + any explicit extras). */
function staticTrustedOrigins(): string[] {
  const fromEnv = (env.TRUSTED_ORIGINS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const devHosts =
    env.NODE_ENV !== "production"
      ? ["http://localhost:3040", "http://bvc.localhost:3040", "http://acme.localhost:3040"]
      : [];
  return Array.from(
    new Set([env.BETTER_AUTH_URL, env.NEXT_PUBLIC_APP_URL, ...devHosts, ...fromEnv]),
  );
}

/** Origins allowed to drive auth. DYNAMIC: every brand has its own domain(s), so we
 *  trust the request's origin when its host resolves to a registered tenant — that's
 *  why custom domains like www.bettervice.club work without hardcoding each in env.
 *  (Previously static + env-only, which 403'd magic-link sign-in on tenant domains.) */
async function trustedOrigins(request?: Request): Promise<string[]> {
  const origins = new Set(staticTrustedOrigins());
  const host = request?.headers.get("x-forwarded-host") ?? request?.headers.get("host");
  if (host) {
    const tenant = await getTenantByHost(host);
    if (tenant) {
      const proto = request?.headers.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
      origins.add(`${proto}://${host}`);
    }
  }
  return Array.from(origins);
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
        });
      },
    }),
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
        },
      },
    },
  },
});

export type Session = typeof auth.$Infer.Session;
