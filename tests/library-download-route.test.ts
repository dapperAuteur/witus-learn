import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * GET /admin/library/[slug]/download: the owner gate runs first, `?format=` picks the stored file
 * (PDF by default, EPUB on `format=epub`), only that one payload is read, and every miss (unknown
 * format, missing document, missing file) is the same 404. Session and the query are mocked; the
 * route, the format rules and the filename guard run for real.
 */

const mocks = vi.hoisted(() => ({
  requirePlatformOwner: vi.fn(),
  getLibraryDocumentFile: vi.fn(),
}));

vi.mock("@/lib/session", () => ({ requirePlatformOwner: mocks.requirePlatformOwner }));
vi.mock("@/db/queries/library", () => ({ getLibraryDocumentFile: mocks.getLibraryDocumentFile }));

import { GET } from "@/app/(tenant)/admin/library/[slug]/download/route";

const PDF = Buffer.from("%PDF-1.7 fake");
const EPUB = Buffer.from("PK\u0003\u0004mimetypeapplication/epub+zip");

const call = (query = "", slug = "heritage-courses-work-list") =>
  GET(new Request(`http://learn.test/admin/library/${slug}/download${query}`), {
    params: Promise.resolve({ slug }),
  });

beforeEach(() => {
  vi.clearAllMocks();
  mocks.requirePlatformOwner.mockResolvedValue({ user: { id: "owner" } });
  mocks.getLibraryDocumentFile.mockImplementation(async (slug: string, format: "pdf" | "epub") => ({
    slug,
    file: (format === "epub" ? EPUB : PDF).toString("base64"),
  }));
});

describe("library download route", () => {
  it("serves the PDF exactly as before when no format is given", async () => {
    const res = await call();
    expect(res.status).toBe(200);
    expect(mocks.getLibraryDocumentFile).toHaveBeenCalledWith("heritage-courses-work-list", "pdf");
    expect(res.headers.get("Content-Type")).toBe("application/pdf");
    expect(res.headers.get("Content-Disposition")).toBe(
      'attachment; filename="heritage-courses-work-list.pdf"',
    );
    expect(res.headers.get("Content-Length")).toBe(String(PDF.length));
    expect(res.headers.get("Cache-Control")).toContain("no-store");
    expect(Buffer.from(await res.arrayBuffer())).toEqual(PDF);
  });

  it("serves the EPUB with its own content type and filename on ?format=epub", async () => {
    const res = await call("?format=epub");
    expect(res.status).toBe(200);
    expect(mocks.getLibraryDocumentFile).toHaveBeenCalledWith("heritage-courses-work-list", "epub");
    expect(res.headers.get("Content-Type")).toBe("application/epub+zip");
    expect(res.headers.get("Content-Disposition")).toBe(
      'attachment; filename="heritage-courses-work-list.epub"',
    );
    expect(res.headers.get("Content-Length")).toBe(String(EPUB.length));
    expect(res.headers.get("Cache-Control")).toContain("no-store");
    expect(res.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(Buffer.from(await res.arrayBuffer())).toEqual(EPUB);
  });

  it("answers 404 for an unknown format without reading anything", async () => {
    const res = await call("?format=mobi");
    expect(res.status).toBe(404);
    expect(mocks.getLibraryDocumentFile).not.toHaveBeenCalled();
  });

  it("answers 404 when the document or its EPUB is missing", async () => {
    mocks.getLibraryDocumentFile.mockResolvedValue(null);
    const res = await call("?format=epub");
    expect(res.status).toBe(404);
    expect(res.headers.get("Cache-Control")).toBe("no-store");
  });

  it("runs the owner gate before anything else, for the EPUB too", async () => {
    mocks.requirePlatformOwner.mockRejectedValue(new Error("NEXT_HTTP_ERROR_FALLBACK;403"));
    await expect(call("?format=epub")).rejects.toThrow(/403/);
    expect(mocks.getLibraryDocumentFile).not.toHaveBeenCalled();
  });
});
