import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3040"),

  // Neon Postgres. Pooled for runtime; unpooled for migrations (falls back to pooled).
  DATABASE_URL: z.string().url(),
  DATABASE_URL_UNPOOLED: z.string().url().optional(),

  // Better Auth (magic-link)
  BETTER_AUTH_SECRET: z.string().min(32),
  // Canonical app base. Dev: http://localhost:3040. Prod: https://learn.witus.online.
  // Magic links are rewritten to the request's tenant host at send time.
  BETTER_AUTH_URL: z.string().url(),
  // Extra comma-separated origins to trust for auth (every tenant domain), e.g.
  // "https://learn.witus.online,https://bettervice.club".
  TRUSTED_ORIGINS: z.string().optional(),
  PLATFORM_OWNER_EMAIL: z.string().email().optional(),
  DEV_TENANT_HOST: z.string().optional(),

  // Email (Mailgun). Per-tenant senders live in the tenants table.
  MAILGUN_API_KEY: z.string().optional(),
  MAILGUN_DOMAIN: z.string().optional(),
  MAILGUN_REGION: z.enum(["us", "eu"]).default("us"),
  MAIL_FROM: z.string().default("Learn.WitUS <no-reply@witus.online>"),

  // Stripe (Phase 5)
  STRIPE_SECRET_KEY: z.string().optional(),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),

  // Gemini (Phase 6 embeddings + AI tutor)
  GOOGLE_GEMINI_API_KEY: z.string().optional(),

  // Multi-provider AI (the tutor). All optional; the tutor needs at least one key.
  ANTHROPIC_API_KEY: z.string().optional(),
  CEREBRAS_API_KEY: z.string().optional(),
  OPENROUTER_API_KEY: z.string().optional(),
  MISTRAL_API_KEY: z.string().optional(),
  TOGETHER_API_KEY: z.string().optional(),
  OLLAMA_BASE_URL: z.string().optional(),
  OLLAMA_EMBED_MODEL: z.string().optional(),
  COACH_EMBED_PROVIDER: z.string().optional(),
  /** Primary tutor provider: google|anthropic|cerebras|openrouter|mistral|together|ollama. */
  AI_PROVIDER: z.string().optional(),
  /** Comma-separated fallback chain, e.g. "cerebras,openrouter,google". */
  COACH_FALLBACK_PROVIDERS: z.string().optional(),
  LANGSMITH_API_KEY: z.string().optional(),
  LANGSMITH_PROJECT: z.string().optional(),
  LANGSMITH_TRACING: z.string().optional(),

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

// The Vercel–Neon integration provisions the connection string under names that
// depend on the chosen prefix — e.g. DATABASE_URL, POSTGRES_URL, or the
// STORAGE_-prefixed STORAGE_DATABASE_URL / STORAGE_POSTGRES_URL. Accept any so a
// deploy works whether the URL was set by hand or by the integration.
const firstEnv = (...names: string[]): string | undefined => {
  for (const n of names) if (process.env[n]) return process.env[n];
  return undefined;
};
const pooledDbUrl = firstEnv(
  "DATABASE_URL",
  "STORAGE_DATABASE_URL",
  "POSTGRES_URL",
  "STORAGE_POSTGRES_URL",
);
const unpooledDbUrl =
  firstEnv(
    "DATABASE_URL_UNPOOLED",
    "STORAGE_DATABASE_URL_UNPOOLED",
    "POSTGRES_URL_NON_POOLING",
    "STORAGE_POSTGRES_URL_NON_POOLING",
  ) ?? pooledDbUrl;

const input = {
  ...process.env,
  DATABASE_URL: pooledDbUrl ?? (allowDevDefaults ? devPlaceholders.DATABASE_URL : undefined),
  DATABASE_URL_UNPOOLED: unpooledDbUrl,
  BETTER_AUTH_SECRET:
    process.env.BETTER_AUTH_SECRET ??
    (allowDevDefaults ? devPlaceholders.BETTER_AUTH_SECRET : undefined),
  BETTER_AUTH_URL:
    process.env.BETTER_AUTH_URL ?? (allowDevDefaults ? devPlaceholders.BETTER_AUTH_URL : undefined),
};

const parsed = schema.safeParse(input);
if (!parsed.success) {
  const fields = parsed.error.flatten().fieldErrors;
  throw new Error(
    `Invalid environment variables:\n${JSON.stringify(fields, null, 2)}\n` +
      "On Vercel, set these in Project → Settings → Environment Variables for the deployed " +
      "environment (Production/Preview). DATABASE_URL may instead arrive as POSTGRES_URL from " +
      "the Neon integration — both are accepted; if neither is present this error is shown.",
  );
}

export const env = parsed.data;

/** True once the DB points at a real Neon instance (not the dev placeholder). */
export const hasDatabase = !env.DATABASE_URL.includes("placeholder");
export const hasMailgun = Boolean(env.MAILGUN_API_KEY && env.MAILGUN_DOMAIN);
export const hasStripe = Boolean(env.STRIPE_SECRET_KEY);
export const hasGemini = Boolean(env.GOOGLE_GEMINI_API_KEY);
export const hasCloudinary = Boolean(
  env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME && env.CLOUDINARY_UPLOAD_PRESET,
);
/** At least one chat-LLM provider is configured (the tutor can run). */
export const hasAiProvider = Boolean(
  env.GOOGLE_GEMINI_API_KEY ||
    env.ANTHROPIC_API_KEY ||
    env.CEREBRAS_API_KEY ||
    env.OPENROUTER_API_KEY ||
    env.MISTRAL_API_KEY ||
    env.TOGETHER_API_KEY ||
    env.OLLAMA_BASE_URL,
);
