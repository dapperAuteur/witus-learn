import "server-only";
import { asc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { libraryDocuments, type LibraryDocument } from "@/db/schema";

// Reads for the platform-owner library (/admin/library). Deliberately NOT tenant-scoped:
// library_documents is platform-level data with no tenant_id (see src/db/schema/library.ts), and
// every caller is behind requirePlatformOwner(). Same access pattern as the other admin query
// modules here (ebook-approvals, future-work-notes): "server-only" + the raw client, never
// src/db/scoped.ts. Unlike them there is no tenant filter, because there is no tenant_id.
//
// None of the page-facing reads here select the `pdf` or `epub` columns: each holds up to a few
// megabytes of base64 per row and the pages only need to know whether a download link belongs on
// the screen (hasPdf / hasEpub) and how big the file is (pdfBytes / epubBytes). The bytes
// themselves are fetched exclusively by getLibraryDocumentFile() for the download route.

export type LibraryDocumentSummary = Pick<
  LibraryDocument,
  "slug" | "title" | "description" | "updatedAt" | "pdfBytes" | "epubBytes"
> & { hasPdf: boolean; hasEpub: boolean };

export async function listLibraryDocuments(): Promise<LibraryDocumentSummary[]> {
  return db
    .select({
      slug: libraryDocuments.slug,
      title: libraryDocuments.title,
      description: libraryDocuments.description,
      updatedAt: libraryDocuments.updatedAt,
      hasPdf: sql<boolean>`${libraryDocuments.pdf} is not null`,
      pdfBytes: libraryDocuments.pdfBytes,
      hasEpub: sql<boolean>`${libraryDocuments.epub} is not null`,
      epubBytes: libraryDocuments.epubBytes,
    })
    .from(libraryDocuments)
    .orderBy(asc(libraryDocuments.sortOrder), asc(libraryDocuments.title))
    .limit(500);
}

export type LibraryDocumentForReader = Omit<LibraryDocument, "pdf" | "epub"> & {
  hasPdf: boolean;
  hasEpub: boolean;
};

export async function getLibraryDocument(slug: string): Promise<LibraryDocumentForReader | null> {
  const [row] = await db
    .select({
      id: libraryDocuments.id,
      slug: libraryDocuments.slug,
      title: libraryDocuments.title,
      description: libraryDocuments.description,
      content: libraryDocuments.content,
      pdfBytes: libraryDocuments.pdfBytes,
      epubBytes: libraryDocuments.epubBytes,
      sortOrder: libraryDocuments.sortOrder,
      updatedAt: libraryDocuments.updatedAt,
      hasPdf: sql<boolean>`${libraryDocuments.pdf} is not null`,
      hasEpub: sql<boolean>`${libraryDocuments.epub} is not null`,
    })
    .from(libraryDocuments)
    .where(eq(libraryDocuments.slug, slug))
    .limit(1);
  return row ?? null;
}

/** The stored base64 PDF or EPUB for one document, or null when the document or that file is
 *  missing. The only read that touches a file payload, and it selects just the one format asked
 *  for; used by /admin/library/[slug]/download. */
export async function getLibraryDocumentFile(
  slug: string,
  format: "pdf" | "epub",
): Promise<{ slug: string; file: string } | null> {
  const [row] = await db
    .select({
      slug: libraryDocuments.slug,
      file: format === "epub" ? libraryDocuments.epub : libraryDocuments.pdf,
    })
    .from(libraryDocuments)
    .where(eq(libraryDocuments.slug, slug))
    .limit(1);
  if (!row?.file) return null;
  return { slug: row.slug, file: row.file };
}
