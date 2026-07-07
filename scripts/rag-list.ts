// rag:list — print a Markdown checklist of every course and the `rag:index` command that builds its
// "chat with the sources" index, grouped by school. Check items off as you index them; index only the
// courses you want and leave the rest.
//   pnpm rag:list                       # print to the terminal
//   pnpm rag:list > plans/rag-index-checklist.md   # save a copy to check off

import { neonConfig, Pool } from "@neondatabase/serverless";
import { asc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";

async function main() {
  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED).");
    process.exit(1);
  }
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema });

  const rows = await db
    .select({
      title: schema.courses.title,
      slug: schema.courses.slug,
      published: schema.courses.isPublished,
      tenant: schema.tenants.slug,
      tenantName: schema.tenants.name,
    })
    .from(schema.courses)
    .innerJoin(schema.tenants, eq(schema.tenants.id, schema.courses.tenantId))
    .orderBy(asc(schema.tenants.name), asc(schema.courses.title));

  // A slug shared across schools needs --tenant to disambiguate.
  const slugCount = new Map<string, number>();
  for (const r of rows) if (r.slug) slugCount.set(r.slug, (slugCount.get(r.slug) ?? 0) + 1);

  const out: string[] = [];
  out.push("# RAG index checklist — chat with the sources");
  out.push("");
  out.push("Build each course's retrieval index so its **Chat with the sources** works. Check off as you go —");
  out.push("index only the courses you want; leave the rest for later. Needs `GOOGLE_GEMINI_API_KEY`.");
  out.push("");
  out.push("- Regenerate this list anytime: `pnpm rag:list > plans/rag-index-checklist.md`");
  out.push("- Add `--source-url <archive.org …_djvu.txt>` to a command to also ingest a **public-domain full text**.");
  out.push("- After indexing, set the course's access stage in `/admin/source-chat` (defaults to owner-only).");
  out.push("");

  let currentTenant = "";
  for (const r of rows) {
    if (r.tenantName !== currentTenant) {
      currentTenant = r.tenantName;
      out.push(`\n## ${currentTenant}\n`);
    }
    const pub = r.published ? "" : " _(unpublished)_";
    if (!r.slug) {
      out.push(`- [ ] **${r.title}**${pub} — _(no slug set; give it a slug first)_`);
      continue;
    }
    const tenantFlag = (slugCount.get(r.slug) ?? 0) > 1 ? ` --tenant ${r.tenant}` : "";
    out.push(`- [ ] **${r.title}**${pub} — \`pnpm rag:index --course ${r.slug}${tenantFlag}\``);
  }
  out.push(`\n_${rows.length} courses._`);

  console.log(out.join("\n"));
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
