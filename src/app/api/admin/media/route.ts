import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { MEDIA_KINDS, RIGHTS_STATUSES } from "@/lib/media-verify";

// The media-verification board's data channel (/admin/media). Owner-only, like the citations,
// source-checks and ebook-approval surfaces: deciding what is published under a school's name with
// someone else's photograph in it is not a brand-admin action.
//
// The tenant comes from apiContext(), resolved server-side from the request host. It is never read
// from the body, so no caller can list or register another school's media by asking nicely.

const RegisterSchema = z.object({
  url: z.string().url().max(2000),
  kind: z.enum(MEDIA_KINDS),
  courseSlug: z.string().trim().max(200).nullish(),
  lessonSlug: z.string().trim().max(200).nullish(),
  publicId: z.string().trim().max(500).nullish(),
  alt: z.string().trim().max(1000).nullish(),
  caption: z.string().trim().max(2000).nullish(),
  // The provenance triple. Required, because an asset nobody can account for should never reach a
  // review queue looking like a decision waiting to happen; it is a gap in the record.
  credit: z.string().trim().min(1).max(500),
  rightsStatus: z.enum(RIGHTS_STATUSES),
  sourceUrl: z.string().trim().min(1).max(2000),
});

/** GET /api/admin/media, every registered asset for this tenant, newest first. */
export async function GET() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const assets = await sdb.listMediaAssets();
  return json({ assets });
}

/** POST /api/admin/media, register an upload (or refresh the details of one already registered). */
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = RegisterSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const v = parsed.data;

  const asset = await sdb.upsertMediaAsset({
    url: v.url,
    kind: v.kind,
    courseSlug: v.courseSlug?.trim() || null,
    lessonSlug: v.lessonSlug?.trim() || null,
    publicId: v.publicId?.trim() || null,
    alt: v.alt?.trim() || null,
    caption: v.caption?.trim() || null,
    credit: v.credit,
    rightsStatus: v.rightsStatus,
    sourceUrl: v.sourceUrl,
  });

  return json({ asset }, 201);
}
