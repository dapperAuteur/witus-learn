import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { magicLink } from "better-auth/plugins/magic-link";
import { db, schema } from "@/db/client";
import { userProfiles } from "@/db/schema";
import { env } from "./env";
import { sendEmail } from "./mailer";
import { getTenantByHost } from "./tenant";

export const auth = betterAuth({
  appName: "Learn.WitUS",
  baseURL: env.BETTER_AUTH_URL,
  secret: env.BETTER_AUTH_SECRET,
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
        // BVC sign-in mail never says Learn.WitUS / CentenarianOS.
        const host =
          request?.headers?.get("x-forwarded-host") ?? request?.headers?.get("host");
        const tenant = await getTenantByHost(host);
        const brand = tenant?.theme.name ?? tenant?.name ?? "Learn.WitUS";
        await sendEmail({
          to: email,
          subject: `Your ${brand} sign-in link`,
          text: `Sign in to ${brand}:\n${url}\n\nThis link expires in 10 minutes. If you didn't request it, ignore this email.`,
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
