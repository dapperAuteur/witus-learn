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
 * PDF = the sibling `<same-name>.pdf`, if one sits next to the markdown. It is stored base64
 *   encoded (see src/db/schema/library.ts for why base64 and not bytea) and served by
 *   /admin/library/<slug>/download. No sibling file means the column is cleared, so deleting a
 *   stale PDF locally removes it here on the next run.
 * EPUB = the sibling `<same-name>.epub` (witus.online's `npm run library:epub` writes it), handled
 *   exactly like the PDF and served by /admin/library/<slug>/download?format=epub.
 * Size cap: a PDF or EPUB over 4 MiB is not stored (its column is cleared and a warning printed),
 *   because the download route returns the whole file in one response and Vercel caps function
 *   responses at 4.5 MB. See src/lib/library-formats.mjs.
 */
import { readFileSync } from "node:fs";
import { basename } from "node:path";
import { neon } from "@neondatabase/serverless";
import { MAX_LIBRARY_FILE_BYTES, readSibling } from "../src/lib/library-formats.mjs";

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

/** The sibling file of one format, or null when there is none. A file over the size cap is
 *  reported and treated as missing, so its column is cleared. */
function siblingFor(file, format) {
  const found = readSibling(file, format, (path) => readFileSync(path));
  if (found?.tooLarge) {
    console.warn(
      `WARNING: ${basename(found.path)} is ${found.bytes}B, over the ${MAX_LIBRARY_FILE_BYTES}B cap ` +
        `(Vercel's 4.5 MB function response limit); not stored, ${format} column cleared.`,
    );
    return null;
  }
  return found;
}

function noteFor(found, format) {
  return found ? `+ ${format} ${basename(found.path)} (${found.bytes}B)` : `no sibling ${format}`;
}

const sql = neon(dbUrl);

let order = 0;
for (const file of files) {
  const content = readFileSync(file, "utf8");
  const slug = slugFor(file);
  const title = titleFor(content, slug);
  const description = descriptionFor(content);
  const pdf = siblingFor(file, "pdf");
  const epub = siblingFor(file, "epub");
  order += 10;
  await sql`
    INSERT INTO library_documents (slug, title, description, content, pdf, pdf_bytes, epub, epub_bytes, sort_order, updated_at)
    VALUES (${slug}, ${title}, ${description}, ${content}, ${pdf?.base64 ?? null}, ${pdf?.bytes ?? null}, ${epub?.base64 ?? null}, ${epub?.bytes ?? null}, ${order}, now())
    ON CONFLICT (slug) DO UPDATE SET
      title = excluded.title,
      description = excluded.description,
      content = excluded.content,
      pdf = excluded.pdf,
      pdf_bytes = excluded.pdf_bytes,
      epub = excluded.epub,
      epub_bytes = excluded.epub_bytes,
      sort_order = excluded.sort_order,
      updated_at = now()
  `;
  console.log(`upserted ${slug}  (${title})  ${noteFor(pdf, "pdf")}  ${noteFor(epub, "epub")}`);
}

const rows = await sql`
  SELECT slug, title, length(content) AS bytes, pdf_bytes, epub_bytes, sort_order, updated_at
  FROM library_documents ORDER BY sort_order, title
`;
console.log("\nlibrary_documents now contains:");
for (const r of rows) {
  const pdfCol = r.pdf_bytes == null ? "no pdf" : `pdf ${r.pdf_bytes}B`;
  const epubCol = r.epub_bytes == null ? "no epub" : `epub ${r.epub_bytes}B`;
  console.log(
    `  ${String(r.sort_order).padStart(3)}  ${r.slug}  ${r.bytes}B  ${pdfCol}  ${epubCol}  ${r.updated_at.toISOString?.() ?? r.updated_at}`,
  );
}
