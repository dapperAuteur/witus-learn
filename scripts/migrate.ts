import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import { migrate } from "drizzle-orm/neon-serverless/migrator";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

// Migrations apply against the UNPOOLED (direct) connection when available.
const connectionString = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
if (!connectionString || connectionString.includes("placeholder")) {
  const isProd = process.env.npm_lifecycle_event === "db:migrate:prod";
  const hint = isProd
    ? "Set DATABASE_URL (or DATABASE_URL_UNPOOLED) in your shell — `pnpm db:migrate:prod` does not auto-load any .env file."
    : "Put a real Neon connection string in .env.local.";
  console.error(`DATABASE_URL is not set. ${hint}`);
  process.exit(1);
}

const pool = new Pool({ connectionString });
const db = drizzle(pool);

async function main() {
  // Postgres extensions must exist before any migration references their types
  // (citext columns, vector(768) embeddings). Idempotent.
  console.log("Ensuring extensions (citext, vector) …");
  await pool.query("CREATE EXTENSION IF NOT EXISTS citext");
  await pool.query("CREATE EXTENSION IF NOT EXISTS vector");

  console.log("Applying migrations from ./src/db/migrations …");
  await migrate(db, { migrationsFolder: "./src/db/migrations" });
  console.log("Migrations applied.");
  await pool.end();
}

main().catch((error) => {
  console.error("Migration failed:", error);
  pool.end().finally(() => process.exit(1));
});
