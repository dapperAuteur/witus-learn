import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { getCitation } from "@/lib/citations";
import { listAuditedCourseSlugs } from "@/db/queries/course-auditors";
import { upsertCitationCheck } from "@/db/queries/citation-checks";

// Citation verification writes. Unlike /api/admin/research, this is NOT owner-only: an accepted
// course auditor may verify the citations of the course they were invited to audit, and only that
// course.
//
// The authorisation shape, in order, because the order is the security property:
//   1. Signed in, or 401.
//   2. The citation key must exist in the COMMITTED registry, or 404. A client cannot invent a key
//      and write a row against it.
//   3. Platform owner passes. Otherwise the citation's course slug must appear in this viewer's
//      accepted audit grants FOR THIS TENANT. An auditor of course A writing against course B's key
//      is refused here, and the tenant comes from apiContext() (the request host), never the client.
//
// Everything else follows the source-checks precedent: a check cannot be closed without saying what
// was found, because a citation marked verified with no evidence stops anyone looking again.

const CheckSchema = z.object({
  citationKey: z.string().min(1).max(200),
  status: z.enum(["unverified", "verified", "broken", "mismatch"]),
  note: z.string().trim().max(4000).optional(),
});

export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);

  const parsed = CheckSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const citation = getCitation(parsed.data.citationKey);
  if (!citation) return errorJson("Unknown citation", 404);

  const owner = await isPlatformOwner(session.user.id);
  if (!owner) {
    const audited = await listAuditedCourseSlugs(sdb.tenantId, {
      userId: session.user.id,
      email: session.user.email ?? null,
    });
    if (!audited.includes(citation.courseSlug)) return errorJson("Forbidden", 403);
  }

  const note = parsed.data.note?.trim() ?? "";
  if (parsed.data.status !== "unverified" && !note) {
    return errorJson("Say what you found before closing a citation", 400);
  }

  const row = await upsertCitationCheck({
    tenantId: sdb.tenantId,
    citationKey: citation.key,
    courseSlug: citation.courseSlug,
    status: parsed.data.status,
    note: note || null,
    checkedBy: session.user.id,
  });

  return json({
    citationKey: row.citationKey,
    status: row.status,
    note: row.note,
    updatedAt: row.updatedAt.toISOString(),
  });
}
