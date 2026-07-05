import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { addReview } from "@/db/queries/field-log";

type Params = { params: Promise<{ id: string }> };

// POST /api/field-log/projects/[id]/reviews — a peer or teacher/owner reviews an in_review project.
// The data layer rejects (404) if the project isn't in_review or the caller is on its crew.
const ReviewSchema = z.object({
  verdict: z.enum(["endorse", "revise"]),
  rubric: z
    .object({
      gate: z.enum(["pass", "fail"]),
      criteria: z.record(z.string(), z.enum(["met", "developing", "not_met", "na"])),
    })
    .optional(),
  body: z.string().max(4000).nullish(),
  subjectUserId: z.string().max(64).nullish(),
});

export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const parsed = ReviewSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const review = await addReview(sdb.tenantId, session.user.id, id, parsed.data);
  if (!review) return errorJson("Not available for review", 404);
  return json(review, 201);
}
