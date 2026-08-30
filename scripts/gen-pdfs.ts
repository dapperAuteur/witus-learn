// gen:pdfs — render every document in src/lib/downloads.ts to a BRANDED PDF in public/downloads/.
//
//   pnpm gen:pdfs                 # all of them
//   pnpm gen:pdfs <slug>          # just one
//
// Same pattern, and the same reason, as `gen:ebooks`: the markdown sources live in `plans/`, which is
// gitignored, so the app cannot read them at runtime. This is a DEV-TIME step; the generated PDF is
// committed and the app serves it as a static file. Re-run after editing a source, then commit.
//
// WHY NOT GENERATE AT RUNTIME: it would mean shipping a browser engine into a serverless function to
// render a document that changes maybe twice a year. That is real cost and a real cold-start
// liability bought for nothing.
//
// RENDERING: headless Chrome, because it is already on every machine that would run this and it is
// the only engine that honours `position: fixed` as a repeated running header/footer, which is how
// the ecosystem mark lands on EVERY page rather than only page one. If Chrome is missing, this fails
// loudly with an install hint rather than writing a broken file.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { DOWNLOAD_DOCS, type DownloadDoc } from "../src/lib/downloads";
import { brandedPdfHtml } from "../src/lib/pdf-branding";

const ROOT = join(import.meta.dirname, "..");
const OUT_DIR = join(ROOT, "public", "downloads");

const CHROME_CANDIDATES = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
];

function findChrome(): string {
  const fromEnv = process.env.CHROME_PATH;
  if (fromEnv && existsSync(fromEnv)) return fromEnv;
  const found = CHROME_CANDIDATES.find((p) => existsSync(p));
  if (!found) {
    console.error(
      "Could not find Chrome or Chromium.\n" +
        "Install Google Chrome, or set CHROME_PATH to the binary.\n" +
        "Tried:\n  " +
        CHROME_CANDIDATES.join("\n  "),
    );
    process.exit(1);
  }
  return found;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Markdown → HTML for the subset these documents actually use: headings, tables, lists, bold,
 * italic, inline code, links, rules, paragraphs.
 *
 * Hand-rolled rather than pulling in a markdown library, because this runs at dev time over content
 * we write ourselves, and adding a runtime dependency to the app's package.json for a script is a
 * bad trade. It is deliberately strict: anything it does not understand passes through as a
 * paragraph rather than being silently dropped, so a formatting mistake is visible in the PDF
 * instead of vanishing.
 */
function renderMarkdown(src: string): string {
  const lines = src.split("\n");
  const out: string[] = [];
  let i = 0;

  const inline = (t: string): string => {
    let s = escapeHtml(t);
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
    return s;
  };

  while (i < lines.length) {
    const ln = lines[i];

    // Table: a pipe row followed by a separator row.
    if (ln.startsWith("|") && i + 1 < lines.length && /^\|[\s:|-]+\|?$/.test(lines[i + 1].trim())) {
      const header = ln.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(lines[i].replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
        i++;
      }
      out.push(
        "<table><thead><tr>" +
          header.map((c) => `<th>${inline(c)}</th>`).join("") +
          "</tr></thead><tbody>" +
          rows.map((r) => "<tr>" + r.map((c) => `<td>${inline(c)}</td>`).join("") + "</tr>").join("") +
          "</tbody></table>",
      );
      continue;
    }

    const heading = /^(#{1,4})\s+(.*)$/.exec(ln);
    if (heading) {
      const level = heading[1].length;
      // The document's own H1 is dropped: the branded shell already prints the title, and two
      // titles on page one reads as a mistake.
      if (level > 1) out.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      i++;
      continue;
    }

    if (ln.trim() === "---" || ln.trim() === "***") {
      out.push("<hr>");
      i++;
      continue;
    }

    if (/^\s*[-*]\s+/.test(ln) || /^\s*\d+\.\s+/.test(ln)) {
      const ordered = /^\s*\d+\.\s+/.test(ln);
      const tag = ordered ? "ol" : "ul";
      out.push(`<${tag}>`);
      while (i < lines.length && (/^\s*[-*]\s+/.test(lines[i]) || /^\s*\d+\.\s+/.test(lines[i]))) {
        out.push(`<li>${inline(lines[i].replace(/^\s*([-*]|\d+\.)\s+/, ""))}</li>`);
        i++;
        // A wrapped continuation line is indented and belongs to the item above it.
        while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !/^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
          out[out.length - 1] = out[out.length - 1].replace(/<\/li>$/, " " + inline(lines[i].trim()) + "</li>");
          i++;
        }
      }
      out.push(`</${tag}>`);
      continue;
    }

    if (ln.startsWith("> ")) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quote.push(lines[i].slice(2));
        i++;
      }
      out.push(`<blockquote><p>${inline(quote.join(" "))}</p></blockquote>`);
      continue;
    }

    if (ln.trim() === "") {
      i++;
      continue;
    }

    const para: string[] = [ln];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !/^(#{1,4}\s|\||>\s|\s*[-*]\s|\s*\d+\.\s|---$|\*\*\*$)/.test(lines[i])
    ) {
      para.push(lines[i]);
      i++;
    }
    out.push(`<p>${inline(para.map((l) => l.trim()).join(" "))}</p>`);
  }

  return out.join("\n");
}

function generate(doc: DownloadDoc, chrome: string): void {
  const srcPath = join(ROOT, doc.source);
  if (!existsSync(srcPath)) {
    console.error(`  MISSING  ${doc.slug}: source not found at ${doc.source}`);
    console.error("           (plans/ is gitignored, so this is expected on a fresh clone.)");
    return;
  }

  const md = readFileSync(srcPath, "utf8");
  const html = brandedPdfHtml(renderMarkdown(md), {
    title: doc.title,
    subtitle: doc.subtitle,
    generatedOn: doc.revised,
  });

  printPdf(html, doc.slug, join(OUT_DIR, `${doc.slug}.pdf`), chrome);
}

/** Write `html` to a temp file and drive headless Chrome over it. Shared by the registered-document
 *  path and the ad-hoc `--file` path below. */
function printPdf(html: string, label: string, outPdf: string, chrome: string): void {
  const tmpHtml = join(tmpdir(), `witus-pdf-${label.replace(/[^a-z0-9-]/gi, "-")}.html`);
  writeFileSync(tmpHtml, html);

  try {
    execFileSync(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        // An isolated profile. Without it, headless Chrome attaches to the profile of an already
        // running Chrome and hangs forever instead of printing, which is a very confusing failure
        // on a machine where the browser is open (i.e. every developer machine).
        `--user-data-dir=${join(tmpdir(), "witus-pdf-chrome")}`,
        "--no-first-run",
        // Chrome's own header/footer would print the file:// path and a page number in a font we do
        // not control, on top of the branded ones. Off.
        "--no-pdf-header-footer",
        `--print-to-pdf=${outPdf}`,
        tmpHtml,
      ],
      { stdio: "pipe" },
    );
  } catch (err) {
    console.error(`  FAILED   ${label}:`, err instanceof Error ? err.message : err);
    return;
  } finally {
    try {
      unlinkSync(tmpHtml);
    } catch {
      /* best effort */
    }
  }

  const bytes = readFileSync(outPdf).length;
  console.log(`  ok       ${outPdf}  (${Math.round(bytes / 1024)} KB)`);
}

/**
 * Render ONE markdown file that is not a registered download.
 *
 *   pnpm gen:pdfs --file plans/detroit/00-detroit-360-capture-report.md --title "Detroit"
 *
 * WHY THIS EXISTS. `DOWNLOAD_DOCS` is the registry of documents the APP SERVES, and registering a
 * field brief or a review pack there would put it on the site. Plenty of documents want the same
 * branded PDF treatment without being published: trip briefs, review packs, anything in `plans/`
 * that BAM reads away from the editor. The PDF lands beside its source rather than in
 * public/downloads, precisely so it cannot be mistaken for a shipped download.
 */
function generateFile(
  src: string,
  chrome: string,
  title?: string,
  subtitle?: string,
  generatedOn?: string,
): void {
  if (!existsSync(src)) {
    console.error(`No such file: ${src}`);
    process.exit(1);
  }
  const md = readFileSync(src, "utf8");
  // Fall back to the document's own first H1, then to its filename, so --title is optional.
  const h1 = /^#\s+(.+)$/m.exec(md)?.[1];
  const base = src.replace(/\.md$/, "");
  // `generatedOn` is passed rather than read from the clock so a regenerated PDF is byte-stable.
  // For an ad-hoc file the document's own "**Written:** YYYY-MM-DD" line is the honest date, and
  // --date overrides it.
  const written = /\*\*Written:\*\*\s*(\d{4}-\d{2}-\d{2})/.exec(md)?.[1];
  const html = brandedPdfHtml(renderMarkdown(md), {
    title: title ?? h1 ?? base.split("/").pop() ?? "Document",
    subtitle,
    generatedOn: generatedOn ?? written ?? "",
  });
  printPdf(html, base.split("/").pop() ?? "doc", `${base}.pdf`, chrome);
}

function main() {
  const argv = process.argv.slice(2);
  const fileAt = argv.indexOf("--file");
  if (fileAt !== -1) {
    const src = argv[fileAt + 1];
    const titleAt = argv.indexOf("--title");
    const subAt = argv.indexOf("--subtitle");
    const dateAt = argv.indexOf("--date");
    if (!src) {
      console.error(
        'Usage: pnpm gen:pdfs --file <path.md> [--title "..."] [--subtitle "..."] [--date YYYY-MM-DD]',
      );
      process.exit(1);
    }
    generateFile(
      src,
      findChrome(),
      titleAt === -1 ? undefined : argv[titleAt + 1],
      subAt === -1 ? undefined : argv[subAt + 1],
      dateAt === -1 ? undefined : argv[dateAt + 1],
    );
    return;
  }

  const only = process.argv[2];
  const docs = only ? DOWNLOAD_DOCS.filter((d) => d.slug === only) : DOWNLOAD_DOCS;
  if (docs.length === 0) {
    console.error(only ? `No document with slug "${only}".` : "No documents registered.");
    process.exit(1);
  }
  mkdirSync(OUT_DIR, { recursive: true });
  const chrome = findChrome();
  console.log(`Rendering ${docs.length} document(s) to public/downloads/`);
  for (const doc of docs) generate(doc, chrome);
}

main();
