import "server-only";
import { asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { libraryDocuments, type LibraryDocument } from "@/db/schema";

// Reads for the platform-owner library (/admin/library). Deliberately NOT tenant-scoped:
// library_documents is platform-level data with no tenant_id (see src/db/schema/library.ts), and
// every caller is behind requirePlatformOwner(). Same access pattern as the other admin query
// modules here (ebook-approvals, future-work-notes): "server-only" + the raw client, never
// src/db/scoped.ts. Unlike them there is no tenant filter, because there is no tenant_id.

export type LibraryDocumentSummary = Pick<
  LibraryDocument,
  "slug" | "title" | "description" | "updatedAt"
>;

export async function listLibraryDocuments(): Promise<LibraryDocumentSummary[]> {
  return db
    .select({
      slug: libraryDocuments.slug,
      title: libraryDocuments.title,
      description: libraryDocuments.description,
      updatedAt: libraryDocuments.updatedAt,
    })
    .from(libraryDocuments)
    .orderBy(asc(libraryDocuments.sortOrder), asc(libraryDocuments.title))
    .limit(500);
}

export async function getLibraryDocument(slug: string): Promise<LibraryDocument | null> {
  const [row] = await db
    .select()
    .from(libraryDocuments)
    .where(eq(libraryDocuments.slug, slug))
    .limit(1);
  return row ?? null;
}
