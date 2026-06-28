import { defineConfig } from "drizzle-kit";

// Migrations run against the UNPOOLED (direct) Neon connection; the pooled URL
// is for the app runtime. Fall back to the pooled URL, then a placeholder so
// `drizzle-kit generate` (offline diff) works with no env set.
const databaseUrl =
  process.env.DATABASE_URL_UNPOOLED ??
  process.env.DATABASE_URL ??
  "postgres://placeholder:placeholder@localhost/witus_learn_dev";

export default defineConfig({
  schema: "./src/db/schema/index.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: { url: databaseUrl },
  casing: "snake_case",
  verbose: true,
  strict: true,
});
