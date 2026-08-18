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
// None of the page-facing reads here select the `pdf` column: it holds up to a few megabytes of
// base64 per row and the pages only need to know whether a download link belongs on the screen
// (hasPdf) and how big the file is (pdfBytes). The bytes themselves are fetched exclusively by
// getLibraryDocumentPdf() for the download route.

export type LibraryDocumentSummary = Pick<
  LibraryDocument,
  "slug" | "title" | "description" | "updatedAt" | "pdfBytes"
> & { hasPdf: boolean };

export async function listLibraryDocuments(): Promise<LibraryDocumentSummary[]> {
  return db
    .select({
      slug: libraryDocuments.slug,
      title: libraryDocuments.title,
      description: libraryDocuments.description,
      updatedAt: libraryDocuments.updatedAt,
      hasPdf: sql<boolean>`${libraryDocuments.pdf} is not null`,
      pdfBytes: libraryDocuments.pdfBytes,
    })
    .from(libraryDocuments)
    .orderBy(asc(libraryDocuments.sortOrder), asc(libraryDocuments.title))
    .limit(500);
}

export type LibraryDocumentForReader = Omit<LibraryDocument, "pdf"> & { hasPdf: boolean };

export async function getLibraryDocument(slug: string): Promise<LibraryDocumentForReader | null> {
  const [row] = await db
    .select({
      id: libraryDocuments.id,
      slug: libraryDocuments.slug,
      title: libraryDocuments.title,
      description: libraryDocuments.description,
      content: libraryDocuments.content,
      pdfBytes: libraryDocuments.pdfBytes,
      sortOrder: libraryDocuments.sortOrder,
      updatedAt: libraryDocuments.updatedAt,
      hasPdf: sql<boolean>`${libraryDocuments.pdf} is not null`,
    })
    .from(libraryDocuments)
    .where(eq(libraryDocuments.slug, slug))
    .limit(1);
  return row ?? null;
}

/** The stored base64 PDF for one document, or null when the document or its PDF is missing.
 *  The only read that touches the `pdf` payload; used by /admin/library/[slug]/download. */
export async function getLibraryDocumentPdf(
  slug: string,
): Promise<{ slug: string; pdf: string } | null> {
  const [row] = await db
    .select({ slug: libraryDocuments.slug, pdf: libraryDocuments.pdf })
    .from(libraryDocuments)
    .where(eq(libraryDocuments.slug, slug))
    .limit(1);
  if (!row?.pdf) return null;
  return { slug: row.slug, pdf: row.pdf };
}
