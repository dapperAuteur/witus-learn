// PDF BRANDING — the one shell every downloadable PDF is wrapped in.
//
// THE RULE THIS FILE EXISTS TO ENFORCE: a PDF leaves this platform and travels. It gets emailed,
// printed, handed to a paddler at a launch ramp, forwarded to a school. By the time someone reads
// it, the page it came from is long gone. So every PDF carries the ecosystem mark, the app it came
// from, and a date, or a reader has no way to tell what they are holding or whether it is current.
//
// Consequently: nothing generates a PDF by hand-rolling its own HTML. `scripts/gen-pdfs.ts` renders
// markdown into THIS shell, so adding a document is adding a row to `src/lib/downloads.ts` rather
// than reinventing a stylesheet.
//
// ── BRAND SOURCE ────────────────────────────────────────────────────────────────────────────────
// The canonical brand package is `gemini/witus/public/brand/` (README: "every other ecosystem app
// references this folder and copies what it needs"). We copied `03-type-dot/wordmark.svg` into
// `public/brand/witus-wordmark.svg`. That package's marks are drawn for DARK backgrounds
// (`#f8fafc`), and a PDF page is white, so the wordmark below is re-tinted to slate-900 exactly as
// the brand README instructs for light surfaces. It is inlined rather than linked because a PDF
// renderer resolving an external file is one more thing that can silently produce a blank box.

/** The WitUS wordmark, re-tinted for a white page. Geometry matches public/brand/witus-wordmark.svg. */
const WORDMARK_LIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="108" height="34" viewBox="0 0 180 56" role="img" aria-label="WitUS">
  <text x="4" y="38" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" font-size="34" font-weight="800" fill="#0f172a" letter-spacing="-0.8">WitUS</text>
  <circle cx="120" cy="34" r="5" fill="#64748b"/>
</svg>`;

export interface PdfBrandingOptions {
  /** Document title, shown in the running header and used as the PDF's <title>. */
  title: string;
  /** One line under the title on page one. */
  subtitle?: string;
  /** The app this came from, e.g. "Learn.WitUS.Online". */
  appName?: string;
  /** Public URL a reader can go to. */
  appUrl?: string;
  /** ISO date. Passed in rather than read from the clock so a regenerated PDF is byte-stable. */
  generatedOn: string;
}

/**
 * Wrap rendered body HTML in the branded page shell.
 *
 * The header and footer are `position: fixed`, which is how a print renderer repeats them on EVERY
 * page. That matters more than it sounds: a PDF is read out of order and printed in pieces, so a
 * mark that appears only on page one is a mark most readers never see.
 */
export function brandedPdfHtml(body: string, opts: PdfBrandingOptions): string {
  const appName = opts.appName ?? "Learn.WitUS.Online";
  const appUrl = opts.appUrl ?? "learn.witus.online";
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${esc(opts.title)}</title>
<style>
  @page {
    size: letter;
    /* Top and bottom margins leave room for the fixed running header and footer. */
    margin: 24mm 16mm 20mm;
  }
  * { box-sizing: border-box; }
  body {
    font: 10.5pt/1.5 -apple-system, "Helvetica Neue", Arial, sans-serif;
    color: #111827; margin: 0;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }

  /* Fixed = repeated on every printed page. */
  .pdf-header {
    position: fixed; top: -18mm; left: 0; right: 0; height: 12mm;
    display: flex; align-items: flex-end; justify-content: space-between;
    border-bottom: 1px solid #e5e7eb; padding-bottom: 2mm;
  }
  .pdf-header .mark { display: flex; align-items: center; gap: 6px; }
  .pdf-header .doc { font-size: 8pt; color: #6b7280; text-align: right; max-width: 60%; }
  .pdf-footer {
    position: fixed; bottom: -14mm; left: 0; right: 0; height: 10mm;
    display: flex; align-items: flex-start; justify-content: space-between;
    border-top: 1px solid #e5e7eb; padding-top: 2mm;
    font-size: 8pt; color: #6b7280;
  }

  h1 { font-size: 19pt; margin: 0 0 2pt; letter-spacing: -0.4px; }
  .subtitle { color: #4b5563; font-size: 11pt; margin: 0 0 12pt; }
  h2 { font-size: 13.5pt; margin: 16pt 0 5pt; padding-bottom: 3pt;
       border-bottom: 1px solid #d1d5db; page-break-after: avoid; }
  h3 { font-size: 11.5pt; margin: 11pt 0 3pt; page-break-after: avoid; }
  h4 { font-size: 10.5pt; margin: 9pt 0 2pt; }
  p { margin: 5pt 0; }
  ul, ol { margin: 5pt 0 5pt 17pt; padding: 0; }
  li { margin: 2pt 0; }
  table { border-collapse: collapse; width: 100%; margin: 7pt 0; font-size: 9pt;
          page-break-inside: avoid; }
  th, td { border: 1px solid #d1d5db; padding: 3.5pt 5pt; text-align: left; vertical-align: top; }
  th { background: #f3f4f6; font-weight: 700; }
  code { background: #f3f4f6; padding: 1pt 3pt; border-radius: 2px; font-size: 9pt; }
  hr { border: none; border-top: 1px solid #e5e7eb; margin: 12pt 0; }
  strong { font-weight: 700; color: #0f172a; }
  a { color: #1d4ed8; text-decoration: none; }
</style></head>
<body>
  <div class="pdf-header">
    <span class="mark">${WORDMARK_LIGHT}</span>
    <span class="doc">${esc(opts.title)} &middot; ${esc(appName)}</span>
  </div>
  <div class="pdf-footer">
    <span>${esc(appUrl)} &middot; part of the WitUS ecosystem</span>
    <span>Generated ${esc(opts.generatedOn)}</span>
  </div>
  <h1>${esc(opts.title)}</h1>
  ${opts.subtitle ? `<p class="subtitle">${esc(opts.subtitle)}</p>` : ""}
  ${body}
</body></html>`;
}
