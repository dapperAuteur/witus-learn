#!/usr/bin/env node
/**
 * Upsert local markdown files into the platform-owner library (library_documents), readable at
 * /admin/library. The content intentionally never touches git: this repo is public, and the
 * library holds internal ebooks (interview prep, the commercial playbook). Mirrors the script of
 * the same name in the witus.online repo, adapted to this repo's env names and table.
 *
 * Usage (from the repo root; .env.local must provide a database URL):
 *   node scripts/sync-library.mjs path/to/2026-04-27-witus-commercial-playbook.md [more.md ...]
 *
 * Slug = filename without extension and without a leading YYYY-MM-DD- prefix.
 * Title = first `# ` heading (falls back to the slug).
 * Description = first plain prose line, truncated to 200 chars.
 * Sort order = position in the argument list.
 */
import { readFileSync } from "node:fs";
import { basename } from "node:path";
import { neon } from "@neondatabase/serverless";

try {
  process.loadEnvFile(".env.local");
} catch {
  // No .env.local; fall through to whatever the shell already exported.
}

// Same names, same direct-first order, as resolveDbUrl(true) in scripts/db-url.ts (which this
// plain-node script cannot import). A one-off writer wants the unpooled connection.
const DB_URL_NAMES = [
  "DATABASE_URL_UNPOOLED",
  "STORAGE_DATABASE_URL_UNPOOLED",
  "POSTGRES_URL_NON_POOLING",
  "STORAGE_POSTGRES_URL_NON_POOLING",
  "DATABASE_URL",
  "STORAGE_DATABASE_URL",
  "POSTGRES_URL",
  "STORAGE_POSTGRES_URL",
];
const dbUrl = DB_URL_NAMES.map((n) => process.env[n]).find(Boolean);

if (!dbUrl) {
  console.error(`No database URL found. Set one of: ${DB_URL_NAMES.join(", ")}`);
  process.exit(1);
}

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("Usage: node scripts/sync-library.mjs <markdown files...>");
  process.exit(1);
}

function slugFor(file) {
  return basename(file)
    .replace(/\.md$/i, "")
    .replace(/^\d{4}-\d{2}-\d{2}-/, "")
    .toLowerCase();
}

function titleFor(content, slug) {
  const m = content.match(/^#\s+(.+)$/m);
  return m ? m[1].replace(/[*_`]/g, "").trim() : slug;
}

function descriptionFor(content) {
  for (const line of content.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#") || t.startsWith(">") || t.startsWith("---")) continue;
    const plain = t.replace(/[*_`>#\[\]]/g, "").trim();
    if (plain.length < 10) continue;
    return plain.length > 200 ? `${plain.slice(0, 197)}...` : plain;
  }
  return null;
}

const sql = neon(dbUrl);

let order = 0;
for (const file of files) {
  const content = readFileSync(file, "utf8");
  const slug = slugFor(file);
  const title = titleFor(content, slug);
  const description = descriptionFor(content);
  order += 10;
  await sql`
    INSERT INTO library_documents (slug, title, description, content, sort_order, updated_at)
    VALUES (${slug}, ${title}, ${description}, ${content}, ${order}, now())
    ON CONFLICT (slug) DO UPDATE SET
      title = excluded.title,
      description = excluded.description,
      content = excluded.content,
      sort_order = excluded.sort_order,
      updated_at = now()
  `;
  console.log(`upserted ${slug}  (${title})`);
}

const rows = await sql`
  SELECT slug, title, length(content) AS bytes, sort_order, updated_at
  FROM library_documents ORDER BY sort_order, title
`;
console.log("\nlibrary_documents now contains:");
for (const r of rows) {
  console.log(
    `  ${String(r.sort_order).padStart(3)}  ${r.slug}  ${r.bytes}B  ${r.updated_at.toISOString?.() ?? r.updated_at}`,
  );
}
