import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3040"),

  // Neon Postgres. Pooled for runtime; unpooled for migrations (falls back to pooled).
  DATABASE_URL: z.string().url(),
  DATABASE_URL_UNPOOLED: z.string().url().optional(),

  // Better Auth (magic-link)
  BETTER_AUTH_SECRET: z.string().min(32),
  BETTER_AUTH_URL: z.string().url(),
  PLATFORM_OWNER_EMAIL: z.string().email().optional(),
  DEV_TENANT_HOST: z.string().optional(),

  // Email (Resend). Per-tenant senders live in the tenants table.
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.string().default("Learn.WitUS <no-reply@witus.online>"),

  // Stripe (Phase 5)
  STRIPE_SECRET_KEY: z.string().optional(),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),

  // Gemini (Phase 6)
  GOOGLE_GEMINI_API_KEY: z.string().optional(),

  // Cloudinary (Phases 4/8)
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_UPLOAD_PRESET: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),

  // Ecosystem integrations (optional; features no-op until set).
  FLASHLEARN_ECO_API_KEY: z.string().optional(),
  INBOX_INGEST_URL: z.string().url().optional(),
  INBOX_SOURCE_SLUG: z.string().optional(),
  INBOX_INGEST_SECRET: z.string().optional(),
});

const isProd = process.env.NODE_ENV === "production";
// `next build` runs with NODE_ENV=production but is not a live runtime; allow
// placeholders so a build (and CI typecheck) never needs real secrets.
const isBuildPhase = process.env.NEXT_PHASE === "phase-production-build";
const allowDevDefaults = !isProd || isBuildPhase;

const devPlaceholders = {
  DATABASE_URL: "postgres://placeholder:placeholder@localhost/witus_learn_dev",
  BETTER_AUTH_SECRET: "dev-secret-minimum-32-characters-xxxxxxxxxxxx",
  BETTER_AUTH_URL: "http://localhost:3040",
} as const;

const input = {
  ...process.env,
  DATABASE_URL:
    process.env.DATABASE_URL ?? (allowDevDefaults ? devPlaceholders.DATABASE_URL : undefined),
  BETTER_AUTH_SECRET:
    process.env.BETTER_AUTH_SECRET ??
    (allowDevDefaults ? devPlaceholders.BETTER_AUTH_SECRET : undefined),
  BETTER_AUTH_URL:
    process.env.BETTER_AUTH_URL ?? (allowDevDefaults ? devPlaceholders.BETTER_AUTH_URL : undefined),
};

const parsed = schema.safeParse(input);
if (!parsed.success) {
  throw new Error(
    `Invalid environment variables:\n${JSON.stringify(parsed.error.flatten().fieldErrors, null, 2)}`,
  );
}

export const env = parsed.data;

/** True once the DB points at a real Neon instance (not the dev placeholder). */
export const hasDatabase = !env.DATABASE_URL.includes("placeholder");
export const hasResend = Boolean(env.RESEND_API_KEY);
export const hasStripe = Boolean(env.STRIPE_SECRET_KEY);
export const hasGemini = Boolean(env.GOOGLE_GEMINI_API_KEY);
export const hasCloudinary = Boolean(
  env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME && env.CLOUDINARY_UPLOAD_PRESET,
);
