import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { grantTestUsers, parseTestUsersArgs } from "./lib/test-users";

// Give test addresses a teacher, school admin or learner role on ONE school (ElementaryMBA by
// default). What it does and refuses is in scripts/lib/test-users.ts. Idempotent: run it again any time.
//
//   pnpm test-users:prod --instructor <email> --admin <email> [--learner <email>] [--school <slug>]
//   pnpm test-users:prod --instructor <email> --admin <email> --check      (read-only report)
//
// The addresses come from the command line (or TEST_INSTRUCTOR_EMAIL / TEST_ADMIN_EMAIL /
// TEST_LEARNER_EMAIL); none is written into this repo. The connection string comes from the env file
// the package script loads and is never printed. Needs migration 0080 (pending_role_grants).

neonConfig.webSocketConstructor = ws;

async function main() {
  let input;
  try {
    input = parseTestUsersArgs(process.argv.slice(2), process.env);
  } catch (err) {
    console.error((err as Error).message);
    process.exit(1);
  }
  const connectionString = resolveDbUrl(true);
  if (!connectionString || connectionString.includes("placeholder")) {
    console.error("DATABASE_URL is not set. Run this through `pnpm test-users:prod`, which reads .env.prod.");
    process.exit(1);
  }
  const pool = new Pool({ connectionString });
  const db = drizzle(pool, { schema, casing: "snake_case" });
  try {
    const report = await grantTestUsers(db, input, { ownerEmail: process.env.PLATFORM_OWNER_EMAIL });
    for (const line of report.lines) console.log(line);
    console.log(input.check ? "Checked (nothing written)." : "Done.");
  } catch (err) {
    console.error((err as Error).message);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

void main();
