import { NextResponse, after } from "next/server";
import { z } from "zod";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { announceCourseToOutbox } from "@/lib/course-announce";
import { hasOutbox } from "@/lib/ecosystem-webhook";

// POST /api/teach/announce — dispatch a BATCH of course announcements to the WitUS Outbox
// as drafts (optionally scheduled), and stamp announced_at. Brand-admin/owner only, and
// tenant-scoped: only the current brand's courses can be announced. Lets BAM announce
// many courses over time in controlled batches rather than all at once.

const Body = z.object({
  courseIds: z.array(z.string().uuid()).min(1).max(50),
  /** Optional ISO datetime to schedule the drafts (stagger a batch); omit for none. */
  scheduledAt: z.string().datetime().optional(),
});

export async function POST(req: Request) {
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId); // 403s for non-admins

  // Refuse if the Outbox isn't configured — otherwise we'd mark courses "announced"
  // while sendToOutbox silently no-ops. Same safe-fail shape as the Cloudinary route.
  if (!hasOutbox) {
    return NextResponse.json(
      { error: "The WitUS Outbox is not configured. Set OUTBOX_INGEST_URL / OUTBOX_SOURCE_SLUG / OUTBOX_INGEST_SECRET." },
      { status: 503 },
    );
  }

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const { courseIds, scheduledAt } = parsed.data;

  // Validate ownership by intersecting the requested ids with THIS tenant's courses.
  const mine = await sdb.listCourses({ includeUnpublished: true });
  const selected = mine.filter((c) => courseIds.includes(c.id));
  if (selected.length === 0) {
    return NextResponse.json({ error: "No matching courses for this brand." }, { status: 400 });
  }

  // Mark announced now (only rows that belong to the tenant are touched), then fire the
  // drafts after the response. The request origin is the tenant's own host, so course
  // links in the caption point at the right brand.
  const marked = await sdb.markCoursesAnnounced(selected.map((c) => c.id));
  const origin = new URL(req.url).origin;
  const tenant = sdb.tenant;
  after(async () => {
    for (const c of selected) {
      await announceCourseToOutbox(tenant, origin, c, scheduledAt);
    }
  });

  return NextResponse.json({ announced: marked.length, scheduled: Boolean(scheduledAt) });
}
