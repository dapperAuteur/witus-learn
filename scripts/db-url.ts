// Resolve the Neon connection string across the names the Vercel–Neon integration
// may provision (plain, POSTGRES_, or a STORAGE_ prefix). Shared by drizzle.config,
// migrate, and the seed scripts so they all behave like the app's env.ts.
export function resolveDbUrl(preferDirect = false): string | undefined {
  const direct = [
    "DATABASE_URL_UNPOOLED",
    "STORAGE_DATABASE_URL_UNPOOLED",
    "POSTGRES_URL_NON_POOLING",
    "STORAGE_POSTGRES_URL_NON_POOLING",
  ];
  const pooled = ["DATABASE_URL", "STORAGE_DATABASE_URL", "POSTGRES_URL", "STORAGE_POSTGRES_URL"];
  const order = preferDirect ? [...direct, ...pooled] : [...pooled, ...direct];
  for (const n of order) if (process.env[n]) return process.env[n];
  return undefined;
}
