// rag:list — print a Markdown checklist of every course and the `rag:index` command that builds its
// "chat with the sources" index, grouped by school. Check items off as you index them; index only the
// courses you want and leave the rest.
//   pnpm rag:list                       # print to the terminal
//   pnpm rag:list > plans/rag-index-checklist.md   # save a copy to check off
//
// Each line now carries the course's index state from listCourseIndexStates
// (src/lib/rag/index-course.ts): never indexed, changed since it was indexed, current, or nothing to
// index. Check boxes come pre-ticked for current courses. The summary at the top counts each state, and
// `pnpm rag:index --needing` indexes every never/changed course in one run.

import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "../src/db/schema";
import { resolveDbUrl } from "./db-url";
import { listCourseIndexStates, type RagDb } from "../src/lib/rag/index-course";

async function main() {
  const url = resolveDbUrl(true);
  if (!url) {
    console.error("Set DATABASE_URL (or DATABASE_URL_UNPOOLED).");
    process.exit(1);
  }
  neonConfig.webSocketConstructor = ws;
  const pool = new Pool({ connectionString: url });
  const db = drizzle(pool, { schema });

  const states = await listCourseIndexStates({ db: db as RagDb });
  const rows = states.map((st) => ({ ...st, slug: st.courseSlug, tenant: st.tenantSlug, tenantName: st.tenantName }));
  const count = (k: string) => states.filter((st) => st.state === k).length;

  // A slug shared across schools needs --tenant to disambiguate.
  const slugCount = new Map<string, number>();
  for (const r of rows) if (r.slug) slugCount.set(r.slug, (slugCount.get(r.slug) ?? 0) + 1);

  const out: string[] = [];
  out.push("# RAG index checklist, chat with the sources");
  out.push("");
  out.push("Build each course's retrieval index so its **Chat with the sources** works. Check off as you go");
  out.push("index only the courses you want; leave the rest for later. Needs `GOOGLE_GEMINI_API_KEY`.");
  out.push("");
  out.push("- Regenerate this list anytime: `pnpm rag:list > plans/rag-index-checklist.md`");
  out.push("- Add `--source-url <archive.org …_djvu.txt>` to a command to also ingest a **public-domain full text**.");
  out.push("- After indexing, set the course's access stage in `/admin/source-chat` (defaults to owner-only).");
  out.push("");
  out.push(
    `**State:** ${count("never")} never indexed, ${count("changed")} changed since indexed, ${count("current")} current, ` +
      `${count("empty")} with nothing to index. Index every never/changed course: \`pnpm rag:index --needing\` ` +
      `(or \`--needing --changed-only\` for the stale ones only).`,
  );
  out.push("");

  let currentTenant = "";
  for (const r of rows) {
    if (r.tenantName !== currentTenant) {
      currentTenant = r.tenantName;
      out.push(`\n## ${currentTenant}\n`);
    }
    const tenantFlag = (slugCount.get(r.slug) ?? 0) > 1 ? ` --tenant ${r.tenant}` : "";
    const box = r.state === "current" ? "[x]" : "[ ]";
    const when = r.indexedAt ? ` ${new Date(r.indexedAt).toISOString().slice(0, 10)}` : "";
    const note =
      r.state === "current"
        ? `current (${r.chunkCount} chunks, indexed${when})`
        : r.state === "changed"
          ? `CHANGED since indexed${when}`
          : r.state === "never"
            ? "never indexed"
            : "nothing to index";
    const pub = r.isPublished ? "" : " _(unpublished)_";
    out.push(`- ${box} **${r.title}**${pub}, ${note}, \`pnpm rag:index --course ${r.slug}${tenantFlag}\``);
  }
  out.push(`\n_${rows.length} courses with a slug (a course without one cannot be indexed; give it a slug first)._`);

  console.log(out.join("\n"));
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
