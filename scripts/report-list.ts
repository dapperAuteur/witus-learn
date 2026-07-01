// reports:list — dump recent in-app problem reports so they can be read directly (no copy-paste).
//   pnpm reports:list                      # all schools, newest 50
//   pnpm reports:list --tenant learn-witus # one school
//   pnpm reports:list --status new         # only new/triaged/closed
//   pnpm reports:list --limit 100

import { neonConfig, Pool } from "@neondatabase/serverless";
import { and, desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
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

  const conds = [];
  const tenantSlug = flag("tenant");
  if (tenantSlug) {
    const [t] = await db.select({ id: schema.tenants.id }).from(schema.tenants).where(eq(schema.tenants.slug, tenantSlug)).limit(1);
    if (!t) {
      console.error(`Tenant "${tenantSlug}" not found.`);
      await pool.end();
      process.exit(1);
    }
    conds.push(eq(schema.problemReports.tenantId, t.id));
  }
  const status = flag("status");
  if (status) conds.push(eq(schema.problemReports.status, status));
  const limit = flag("limit") ? parseInt(flag("limit") as string, 10) : 50;

  const rows = await db
    .select({
      created: schema.problemReports.createdAt,
      kind: schema.problemReports.kind,
      status: schema.problemReports.status,
      message: schema.problemReports.message,
      page: schema.problemReports.pageUrl,
      email: schema.problemReports.email,
      tenant: schema.tenants.slug,
    })
    .from(schema.problemReports)
    .innerJoin(schema.tenants, eq(schema.tenants.id, schema.problemReports.tenantId))
    .where(conds.length ? and(...conds) : undefined)
    .orderBy(desc(schema.problemReports.createdAt))
    .limit(limit);

  console.error(`${rows.length} report(s):\n`);
  for (const r of rows) {
    console.log(
      `[${r.status.toUpperCase()}] ${r.kind} · ${r.tenant} · ${new Date(r.created).toISOString()}${r.page ? ` · ${r.page}` : ""}${r.email ? ` · ${r.email}` : ""}\n  ${r.message.replace(/\n/g, "\n  ")}\n`,
    );
  }
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
