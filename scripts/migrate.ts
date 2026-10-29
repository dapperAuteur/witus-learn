import { appendFileSync, readFileSync } from "node:fs";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import { migrate } from "drizzle-orm/neon-serverless/migrator";
import ws from "ws";
import { resolveDbUrl } from "./db-url";

neonConfig.webSocketConstructor = ws;

// Migrations apply against the UNPOOLED (direct) connection when available.
const connectionString = resolveDbUrl(true);
if (!connectionString || connectionString.includes("placeholder")) {
  const isProd = process.env.npm_lifecycle_event === "db:migrate:prod";
  const hint = process.env.GITHUB_ACTIONS
    ? "Set the repository secret NEON_DIRECT_URL (OPERATING.md, section 3a)."
    : isProd
      ? "Set DATABASE_URL (or DATABASE_URL_UNPOOLED) in .env.prod, which `pnpm db:migrate:prod` loads."
      : "Put a real Neon connection string in .env.local.";
  console.error(`DATABASE_URL is not set. ${hint}`);
  process.exit(1);
}

const pool = new Pool({ connectionString });
const db = drizzle(pool);

const MIGRATIONS_FOLDER = "./src/db/migrations";

/** Rows in Drizzle's ledger (drizzle.__drizzle_migrations), or 0 before the first migration ever ran. */
async function ledgerCount(): Promise<number> {
  const exists = await pool.query("SELECT to_regclass('drizzle.__drizzle_migrations') IS NOT NULL AS ok");
  if (!exists.rows[0]?.ok) return 0;
  const r = await pool.query("SELECT count(*)::int AS n FROM drizzle.__drizzle_migrations");
  return Number(r.rows[0]?.n ?? 0);
}

/** Migrations committed in the repo: the journal Drizzle applies from. */
function journalTags(): string[] {
  const journal = JSON.parse(readFileSync(`${MIGRATIONS_FOLDER}/meta/_journal.json`, "utf8")) as {
    entries: { tag: string }[];
  };
  return journal.entries.map((e) => e.tag);
}

async function main() {
  // Postgres extensions must exist before any migration references their types
  // (citext columns, vector(768) embeddings). Idempotent.
  console.log("Ensuring extensions (citext, vector) …");
  await pool.query("CREATE EXTENSION IF NOT EXISTS citext");
  await pool.query("CREATE EXTENSION IF NOT EXISTS vector");

  const before = await ledgerCount();
  console.log(`Applying migrations from ${MIGRATIONS_FOLDER} …`);
  await migrate(db, { migrationsFolder: MIGRATIONS_FOLDER });
  const after = await ledgerCount();
  const tags = journalTags();
  const applied = Math.max(0, after - before);
  const line = `Migrations applied: ${applied} new this run; ${after} recorded in drizzle.__drizzle_migrations; ${tags.length} in the repo (latest ${tags.at(-1) ?? "none"}).`;
  console.log(line);

  // In GitHub Actions (migrate-production.yml), the same numbers go to the run's summary page.
  if (process.env.GITHUB_STEP_SUMMARY) {
    const newTags = applied > 0 ? tags.slice(-applied) : [];
    appendFileSync(
      process.env.GITHUB_STEP_SUMMARY,
      [
        "### Production migrations",
        "",
        `- Applied this run: **${applied}**`,
        `- Recorded in the database: ${after}`,
        `- In the repo: ${tags.length} (latest \`${tags.at(-1) ?? "none"}\`)`,
        ...(newTags.length ? ["", "Applied (newest last, assuming they were the pending tail):", ...newTags.map((t) => `- \`${t}\``)] : []),
        "",
      ].join("\n"),
    );
  }
  await pool.end();
}

main().catch((error) => {
  console.error("Migration failed:", error);
  pool.end().finally(() => process.exit(1));
});
