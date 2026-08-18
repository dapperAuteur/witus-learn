import { requirePlatformOwner } from "@/lib/session";
import { safeFilename } from "@/lib/safe-filename";
import { getLibraryDocumentPdf } from "@/db/queries/library";

/**
 * Streams the stored PDF for one library document as an attachment.
 *
 * GATING: the library PAGES call requirePlatformOwner() themselves, but a layout or sibling page
 * guard never runs for a route handler, so this file repeats the exact same check. Per the
 * repo-wide rule (STYLE_GUIDE §1), a route handler answers with a STATUS, never a redirect:
 * requirePlatformOwner() 403s a non-owner via forbidden(). The role check runs before the slug is
 * even read, so the 403 confirms nothing about which documents exist; a missing document and a
 * document without a PDF both answer the same 404.
 */

// Never cached, at any layer. The response body is private owner-only content behind a session
// check, so a CDN or Data Cache copy would be a leak.
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

/** Fresh instance per call: a Response body is a stream and cannot be reused. */
function notFoundResponse(): Response {
  return new Response("Not found", {
    status: 404,
    headers: { "Content-Type": "text/plain", "Cache-Control": "no-store" },
  });
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
): Promise<Response> {
  await requirePlatformOwner();

  const { slug } = await params;
  const doc = await getLibraryDocumentPdf(slug);
  if (!doc) return notFoundResponse();

  // Stored base64 (see src/db/schema/library.ts for why base64 and not bytea).
  const bytes = Uint8Array.from(Buffer.from(doc.pdf, "base64"));

  return new Response(bytes, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${safeFilename(doc.slug)}.pdf"`,
      "Content-Length": String(bytes.byteLength),
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
