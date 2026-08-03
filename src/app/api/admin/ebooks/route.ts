import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { getEbook } from "@/lib/ebooks";
import { approveEbook, unapproveEbook } from "@/db/queries/ebook-approvals";

// Approve or withdraw an ebook. Owner-only: publishing a marketing asset under the school's name is
// not a brand-admin action, and until it is approved the ebook is not public anywhere.
const Schema = z.object({
  slug: z.string().min(1).max(120),
  approved: z.boolean(),
  note: z.string().trim().max(2000).optional(),
});

export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  if (!getEbook(parsed.data.slug)) return errorJson("Unknown ebook", 404);

  if (parsed.data.approved) {
    await approveEbook({
      tenantId: sdb.tenantId,
      ebookSlug: parsed.data.slug,
      approvedBy: session.user.id,
      note: parsed.data.note?.trim() || null,
    });
  } else {
    await unapproveEbook(sdb.tenantId, parsed.data.slug);
  }
  return json({ slug: parsed.data.slug, approved: parsed.data.approved });
}
