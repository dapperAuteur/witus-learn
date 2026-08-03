import { apiContext, errorJson } from "@/lib/api";
import { getEbook } from "@/lib/ebooks";
import { isEbookApproved } from "@/db/queries/ebook-approvals";

// The download itself. NO EMAIL REQUIRED and no session required: an approved ebook is a free
// download, and the email field on the page is explicitly optional.
//
// The gate is approval, checked server-side on every request against the tenant resolved from the
// host. An unapproved ebook 404s here exactly as it does on the page, so guessing the URL gains
// nothing: hiding the link would not have been a control.
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ebook = getEbook(slug);
  if (!ebook) return errorJson("Not found", 404);

  const { sdb } = await apiContext();
  if (!(await isEbookApproved(sdb.tenantId, ebook.slug))) return errorJson("Not found", 404);

  return new Response(ebook.body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${ebook.slug}.md"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
