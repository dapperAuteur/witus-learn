// research:list — dump the answers BAM left on source checks at /admin/research, so Claude can read
// them between sessions with no copy-paste (same idea as `pnpm future:list` and `pnpm reports:list`).
//
//   pnpm research:list                        # all schools, answered checks, plus open ones
//   pnpm research:list --tenant better-vice-club
//   pnpm research:list --status verified      # open | verified | corrected | blocked | all
//   pnpm research:list --course surplus-funds-basics
//
// The workflow this closes: BAM answers a check, Claude reads it here, edits the lesson to state the
// verified fact with its citation, and DELETES the check from src/lib/research-checks.ts. A check
// that stays in the file after its answer has been applied is the failure mode to watch for.

import { neonConfig, Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { RESEARCH_CHECKS, getResearchCheck } from "../src/lib/research-checks";
import { resolveDbUrl } from "./db-url";

const flag = (n: string) => {
  const i = process.argv.indexOf(`--${n}`);
  return i !== -1 ? process.argv[i + 1] : undefined;
};

async function main() {
  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED).");
    process.exit(1);
  }
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema });

  const wantStatus = flag("status") ?? "all";
  const wantCourse = flag("course");
  const tenantSlug = flag("tenant");

  let tenantId: string | undefined;
  if (tenantSlug) {
    const [t] = await db
      .select({ id: schema.tenants.id })
      .from(schema.tenants)
      .where(eq(schema.tenants.slug, tenantSlug))
      .limit(1);
    if (!t) {
      console.error(`Tenant "${tenantSlug}" not found.`);
      await pool.end();
      process.exit(1);
    }
    tenantId = t.id;
  }

  const rows = tenantId
    ? await db
        .select()
        .from(schema.courseResearchChecks)
        .where(eq(schema.courseResearchChecks.tenantId, tenantId))
    : await db.select().from(schema.courseResearchChecks);

  const byKey = new Map(rows.map((r) => [r.checkKey, r]));

  // Iterate the COMMITTED index, not the table, so a check nobody has touched still prints as open.
  // Reading only the table would hide exactly the checks that most need doing.
  const checks = RESEARCH_CHECKS.filter((c) => !wantCourse || c.course === wantCourse);

  let shown = 0;
  for (const check of checks) {
    const row = byKey.get(check.key);
    const status = row?.status ?? "open";
    if (wantStatus !== "all" && status !== wantStatus) continue;
    shown++;
    console.log(`\n── ${check.key}  [${status}]  (${check.severity}, ${check.course})`);
    console.log(`   ${check.title}`);
    console.log(`   Q: ${check.question}`);
    if (row?.answer) {
      console.log(`   ANSWER (${row.updatedAt.toISOString().slice(0, 10)}):`);
      for (const line of row.answer.split("\n")) console.log(`     ${line}`);
    } else {
      console.log("   ANSWER: (none yet)");
    }
  }

  // Any answered check whose key is no longer in the index: its lesson fix probably shipped and the
  // definition was deleted, which is the intended end state. Surfaced so the row can be tidied.
  const orphans = rows.filter((r) => !getResearchCheck(r.checkKey));
  if (orphans.length) {
    console.log(`\n(${orphans.length} answered row(s) for checks no longer in the index: ${orphans.map((o) => o.checkKey).join(", ")})`);
  }

  console.log(`\n${shown} check(s) shown, ${RESEARCH_CHECKS.length} in the index.`);
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
