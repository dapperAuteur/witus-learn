// DOWNLOADABLE DOCUMENTS — the committed registry of PDFs the owner can hand to somebody.
//
// Same pattern, and the same reason, as `gen:ebooks`: the markdown source lives in `plans/`, which
// is GITIGNORED, so the app cannot read it at runtime. `pnpm gen:pdfs` renders each source through
// the branded shell in `src/lib/pdf-branding.ts` and writes a PDF into `public/downloads/`, which IS
// committed and is the only thing the app serves.
//
// TO ADD A DOCUMENT: add a row here, put the markdown at `source`, run `pnpm gen:pdfs`, commit the
// generated PDF. There is no runtime PDF generation and deliberately so — a serverless function
// booting a browser engine to render a document that changes twice a year is cost and fragility
// bought for nothing.

export interface DownloadDoc {
  /** Stable slug; also the PDF filename under public/downloads/. */
  slug: string;
  title: string;
  /** One line for the admin list: what it is and who it is for. */
  description: string;
  /** Markdown source, repo-relative. Gitignored; only the generated PDF is committed. */
  source: string;
  /** Subtitle printed under the title on page one. */
  subtitle?: string;
  /** ISO date the content was last meaningfully revised. Printed in the PDF footer. */
  revised: string;
  /** Who this is written for, shown in the admin list so the wrong doc is not sent. */
  audience: string;
}

export const DOWNLOAD_DOCS: DownloadDoc[] = [
  {
    slug: "river-expedition-field-collection-guide",
    title: "River Expedition Field Collection Guide",
    subtitle: "For the paddling team · Indiana to the Gulf of Mexico · Spring",
    description:
      "What to collect on the river and how, with every item scored value-vs-effort, plus the prioritized list of places to document. Hand this to the paddlers before they launch.",
    source: "plans/future-courses/outdoors/river-expedition-field-collection-guide.md",
    revised: "2026-08-05",
    audience: "The paddling team (external)",
  },
];

export function downloadBySlug(slug: string): DownloadDoc | undefined {
  return DOWNLOAD_DOCS.find((d) => d.slug === slug);
}

/** Public path the committed PDF is served from. */
export function downloadHref(doc: DownloadDoc): string {
  return `/downloads/${doc.slug}.pdf`;
}
