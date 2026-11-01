import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { formatBytes } from "@/lib/format-bytes";
import { safeFilename } from "@/lib/safe-filename";
import {
  LIBRARY_FORMATS,
  MAX_LIBRARY_FILE_BYTES,
  libraryDownloadHref,
  parseLibraryFormat,
  readSibling,
  siblingPath,
} from "@/lib/library-formats.mjs";

// Pure helpers behind the /admin/library PDF and EPUB downloads: the file-size label the pages
// render, the Content-Disposition filename guard the download route depends on, the ?format=
// parser and link builder, and the sibling-file reader scripts/sync-library.mjs uses.

describe("formatBytes", () => {
  it("returns null for missing or invalid sizes so callers render nothing", () => {
    expect(formatBytes(null)).toBeNull();
    expect(formatBytes(undefined)).toBeNull();
    expect(formatBytes(-1)).toBeNull();
    expect(formatBytes(Number.NaN)).toBeNull();
    expect(formatBytes(Number.POSITIVE_INFINITY)).toBeNull();
  });

  it("formats bytes, KB, and MB at the right thresholds", () => {
    expect(formatBytes(0)).toBe("0 B");
    expect(formatBytes(1023)).toBe("1023 B");
    expect(formatBytes(1024)).toBe("1 KB");
    expect(formatBytes(908_288)).toBe("887 KB");
    expect(formatBytes(1024 * 1024)).toBe("1.0 MB");
    expect(formatBytes(1_258_291)).toBe("1.2 MB");
  });
});

describe("safeFilename", () => {
  it("passes ordinary slugs through untouched", () => {
    expect(safeFilename("witus-commercial-playbook")).toBe("witus-commercial-playbook");
    expect(safeFilename("interview_prep.v2")).toBe("interview_prep.v2");
  });

  it("neutralises header-injection and path characters", () => {
    expect(safeFilename('a"b\r\nc')).toBe("a-b--c");
    expect(safeFilename("../../etc/passwd")).toBe("..-..-etc-passwd");
    expect(safeFilename("slash/slug")).toBe("slash-slug");
  });

  it("caps length and never returns an empty name", () => {
    expect(safeFilename("x".repeat(300))).toHaveLength(100);
    expect(safeFilename("")).toBe("document");
    expect(safeFilename("///")).toBe("---");
  });
});

describe("parseLibraryFormat", () => {
  it("treats a missing or empty format as pdf, so the old PDF links keep working", () => {
    expect(parseLibraryFormat(null)).toBe("pdf");
    expect(parseLibraryFormat(undefined)).toBe("pdf");
    expect(parseLibraryFormat("")).toBe("pdf");
    expect(parseLibraryFormat("pdf")).toBe("pdf");
  });

  it("accepts epub in any case and nothing else", () => {
    expect(parseLibraryFormat("epub")).toBe("epub");
    expect(parseLibraryFormat("EPUB")).toBe("epub");
    expect(parseLibraryFormat("mobi")).toBeNull();
    expect(parseLibraryFormat("pdf\r\nX-Evil: 1")).toBeNull();
  });
});

describe("library download formats", () => {
  it("pairs each format with its content type and extension", () => {
    expect(LIBRARY_FORMATS.pdf).toEqual({ ext: "pdf", label: "PDF", contentType: "application/pdf" });
    expect(LIBRARY_FORMATS.epub).toEqual({
      ext: "epub",
      label: "EPUB",
      contentType: "application/epub+zip",
    });
  });

  it("keeps the PDF link as it was and adds ?format=epub for the EPUB", () => {
    expect(libraryDownloadHref("heritage-courses-work-list", "pdf")).toBe(
      "/admin/library/heritage-courses-work-list/download",
    );
    expect(libraryDownloadHref("heritage-courses-work-list", "epub")).toBe(
      "/admin/library/heritage-courses-work-list/download?format=epub",
    );
  });

  it("finds the sibling by swapping only the .md extension", () => {
    expect(siblingPath("plans/playbook/2026-11-01-heritage-courses-work-list.md", "epub")).toBe(
      "plans/playbook/2026-11-01-heritage-courses-work-list.epub",
    );
    expect(siblingPath("a/b.MD", "pdf")).toBe("a/b.pdf");
  });
});

describe("readSibling", () => {
  const reader = (files: Record<string, Buffer>) => (path: string) => {
    if (path in files) return files[path];
    throw Object.assign(new Error(`ENOENT: ${path}`), { code: "ENOENT" });
  };

  it("returns the base64 payload and the decoded size", () => {
    const buf = Buffer.from("PK\u0003\u0004 fake epub");
    const got = readSibling("x/doc.md", "epub", reader({ "x/doc.epub": buf }));
    expect(got).toEqual({ base64: buf.toString("base64"), bytes: buf.length, path: "x/doc.epub" });
  });

  it("returns null with no sibling, so the sync clears the column", () => {
    expect(readSibling("x/doc.md", "epub", reader({ "x/doc.pdf": Buffer.from("pdf") }))).toBeNull();
  });

  it("rethrows errors other than a missing file", () => {
    const denied = () => {
      throw Object.assign(new Error("EACCES"), { code: "EACCES" });
    };
    expect(() => readSibling("x/doc.md", "epub", denied)).toThrow(/EACCES/);
  });

  it("refuses files over the cap, which sits under Vercel's 4.5 MB response limit", () => {
    expect(MAX_LIBRARY_FILE_BYTES).toBeLessThan(4_500_000);
    const atCap = Buffer.alloc(MAX_LIBRARY_FILE_BYTES);
    const over = Buffer.alloc(MAX_LIBRARY_FILE_BYTES + 1);
    expect(readSibling("d.md", "epub", reader({ "d.epub": atCap }))).toMatchObject({
      bytes: MAX_LIBRARY_FILE_BYTES,
    });
    expect(readSibling("d.md", "epub", reader({ "d.epub": over }))).toEqual({
      tooLarge: true,
      bytes: MAX_LIBRARY_FILE_BYTES + 1,
      path: "d.epub",
    });
  });
});

describe("migration 0072_library_epub", () => {
  it("adds the two epub columns as nullable, without touching anything else", () => {
    const sql = readFileSync(
      join(import.meta.dirname, "..", "src/db/migrations/0072_library_epub.sql"),
      "utf8",
    );
    expect(sql).toContain('ALTER TABLE "library_documents" ADD COLUMN "epub" text;');
    expect(sql).toContain('ALTER TABLE "library_documents" ADD COLUMN "epub_bytes" integer;');
    expect(sql).not.toMatch(/NOT NULL|DROP/i);
  });
});
