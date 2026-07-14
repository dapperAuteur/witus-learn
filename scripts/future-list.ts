// future:list — dump the notes BAM left on Future Classes & Features items at /admin/future, so
// Claude can read them between sessions with no copy-paste (same idea as `pnpm reports:list`).
//   pnpm future:list                       # all schools, open notes, newest 100
//   pnpm future:list --tenant bvc          # one school
//   pnpm future:list --status done         # open (default) / done / all
//   pnpm future:list --item she-did-the-work
//   pnpm future:list --limit 200

import { neonConfig, Pool } from "@neondatabase/serverless";
import { and, asc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { getFutureWorkItem } from "../src/lib/future-work";
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
    conds.push(eq(schema.futureWorkNotes.tenantId, t.id));
  }
  // Default to the notes that still need acting on; --status all shows everything.
  const status = flag("status") ?? "open";
  if (status !== "all") conds.push(eq(schema.futureWorkNotes.status, status));
  const itemKey = flag("item");
  if (itemKey) conds.push(eq(schema.futureWorkNotes.itemKey, itemKey));
  const limit = flag("limit") ? parseInt(flag("limit") as string, 10) : 100;

  const rows = await db
    .select({
      created: schema.futureWorkNotes.createdAt,
      itemKey: schema.futureWorkNotes.itemKey,
      status: schema.futureWorkNotes.status,
      body: schema.futureWorkNotes.body,
      tenant: schema.tenants.slug,
    })
    .from(schema.futureWorkNotes)
    .innerJoin(schema.tenants, eq(schema.tenants.id, schema.futureWorkNotes.tenantId))
    .where(conds.length ? and(...conds) : undefined)
    .orderBy(asc(schema.futureWorkNotes.createdAt))
    .limit(limit);

  console.error(`${rows.length} note(s) [status: ${status}]:\n`);
  for (const r of rows) {
    const item = getFutureWorkItem(r.itemKey);
    // One header line per note, so it greps cleanly: [STATUS] item-key · Title · tenant · when
    console.log(
      `[${r.status.toUpperCase()}] ${r.itemKey} · ${item?.title ?? "(unknown item)"} · ${r.tenant} · ${new Date(r.created).toISOString()}\n  ${r.body.replace(/\n/g, "\n  ")}\n`,
    );
  }
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
