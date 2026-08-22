// reports:triage — move a problem report off `new`, and say WHY.
//
//   pnpm reports:triage <id-prefix> --status triaged --note "already shipped in 0054"
//   pnpm reports:triage <id-prefix> --status closed  --note "declined: out of scope, see plans/71"
//
// WHY THIS EXISTS. `pnpm reports:list` could count the backlog but nothing could close a row, so the
// only way to triage was the admin UI, and rows that were satisfied months ago sat at `new` making
// the backlog lie about its own size. plans/app-improvements/02-feedback-triage.md opens with
// exactly that failure: a doc that was accurate the day it was written became the reason a real
// signal went unseen for a week.
//
// WHY --note IS REQUIRED. A closed report with no reason is worse than an open one: it stops anyone
// looking again and records nothing about whether the thing was fixed, already shipped, declined, or
// duplicated. Same rule the citation board enforces, for the same reason. The note lands in
// `resolution`; the reporter's own words in `message` are never touched.

import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";

const STATUSES = ["new", "triaged", "closed"] as const;
type Status = (typeof STATUSES)[number];

function flag(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

async function main() {
  const idPrefix = process.argv[2];
  const status = flag("status") as Status | undefined;
  const note = flag("note");

  if (!idPrefix || idPrefix.startsWith("--") || !status || !note) {
    console.error(
      'Usage: pnpm reports:triage <id-prefix> --status <triaged|closed> --note "why"\n\n' +
        "  The note is REQUIRED. A row closed without a reason stops anyone looking again,\n" +
        "  and records nothing about whether it was fixed, already shipped, or declined.\n" +
        "  Find ids with: pnpm reports:list --status new",
    );
    process.exit(1);
  }
  if (!STATUSES.includes(status)) {
    console.error(`--status must be one of: ${STATUSES.join(", ")}`);
    process.exit(1);
  }

  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED).");
    process.exit(1);
  }
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema });

  // Match on a prefix so you can paste the first few characters of a uuid from reports:list.
  const matches = await db
    .select({ id: schema.problemReports.id, status: schema.problemReports.status, message: schema.problemReports.message })
    .from(schema.problemReports)
    // `id` is a uuid, and Postgres has no uuid LIKE operator, so cast before matching a prefix.
    .where(sql`${schema.problemReports.id}::text like ${`${idPrefix}%`}`)
    .limit(5);

  if (matches.length === 0) {
    console.error(`No report whose id starts with "${idPrefix}".`);
    await pool.end();
    process.exit(1);
  }
  // Refuse an ambiguous prefix rather than guessing which report the operator meant.
  if (matches.length > 1) {
    console.error(`"${idPrefix}" matches ${matches.length} reports. Use more characters:`);
    for (const m of matches) console.error(`  ${m.id}  [${m.status}]  ${m.message.slice(0, 60)}`);
    await pool.end();
    process.exit(1);
  }

  const row = matches[0];
  await db
    .update(schema.problemReports)
    .set({ status, resolution: note, resolvedAt: new Date() })
    .where(eq(schema.problemReports.id, row.id));

  console.log(`${row.id}\n  ${row.status} -> ${status}\n  ${note}`);
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
