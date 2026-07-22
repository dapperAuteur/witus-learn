// tracker:show — print the Documentarian program tracker (checkboxes, per-item notes, and the
// comment log the owner leaves at /admin/documentarian) so Claude can read it between sessions.
//   pnpm tracker:show                      # every school that has a tracker
//   pnpm tracker:show --tenant bvc          # one school

import { neonConfig, Pool } from "@neondatabase/serverless";
import { and, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { DOCUMENTARIAN_PLAN, type TrackerComment, type TrackerItem } from "../src/lib/documentarian-plan";
import { resolveDbUrl } from "./db-url";

const KEY = "documentarian_tracker";

const flag = (n: string) => {
  const i = process.argv.indexOf(`--${n}`);
  return i !== -1 ? process.argv[i + 1] : undefined;
};

// id → { section title, label } for pretty printing.
const META = new Map<string, { section: string; label: string }>();
for (const sec of DOCUMENTARIAN_PLAN) {
  for (const it of sec.items) META.set(it.id, { section: sec.title, label: it.label });
}

async function main() {
  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED).");
    process.exit(1);
  }
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema });

  const conds = [eq(schema.platformSettings.key, KEY)];
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
    conds.push(eq(schema.platformSettings.tenantId, t.id));
  }

  const rows = await db
    .select({
      slug: schema.tenants.slug,
      value: schema.platformSettings.value,
      updatedAt: schema.platformSettings.updatedAt,
    })
    .from(schema.platformSettings)
    .leftJoin(schema.tenants, eq(schema.tenants.id, schema.platformSettings.tenantId))
    .where(and(...conds));

  if (!rows.length) {
    console.error("No Documentarian tracker saved yet.");
    await pool.end();
    return;
  }

  for (const row of rows) {
    let items: Record<string, TrackerItem> = {};
    let comments: TrackerComment[] = [];
    try {
      const parsed = JSON.parse(row.value ?? "{}") as { items?: Record<string, TrackerItem>; comments?: TrackerComment[] };
      items = parsed.items ?? {};
      comments = parsed.comments ?? [];
    } catch {
      // fall through with empties
    }
    const done = Object.values(items).filter((i) => i.done).length;
    console.log(`\n=== ${row.slug ?? "(no tenant)"} · ${done}/${META.size} done · updated ${row.updatedAt ? new Date(row.updatedAt).toISOString() : "-"} ===`);
    for (const [id, meta] of META) {
      const st = items[id];
      const box = st?.done ? "[x]" : "[ ]";
      console.log(`  ${box} ${meta.label}`);
      if (st?.note) console.log(`       ↳ ${st.note.replace(/\n/g, "\n         ")}`);
    }
    if (comments.length) {
      console.log(`  --- comments (${comments.length}) ---`);
      for (const c of comments) console.log(`  • ${c.at}: ${c.text.replace(/\n/g, "\n    ")}`);
    }
  }

  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
