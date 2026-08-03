import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { getResearchCheck } from "@/lib/research-checks";
import { upsertResearchCheck } from "@/db/queries/research-checks";

// Answer channel for source-verification checks (/admin/research). Owner-only: this is BAM's private
// research surface, like the Documentarian tracker and the future-work board, not a brand-admin one.
// The tenant comes from apiContext(), resolved server-side from the request host; the client never
// supplies it.
//
// Answers land in `course_research_checks` and are read back from the terminal with
// `pnpm research:list`, which is how Claude picks them up between sessions.

const AnswerSchema = z.object({
  checkKey: z.string().min(1).max(120),
  status: z.enum(["open", "verified", "corrected", "blocked"]),
  answer: z.string().trim().max(8000).optional(),
});

export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const parsed = AnswerSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  // Only keys that exist in the committed index, so an answer can never attach to a phantom check.
  if (!getResearchCheck(parsed.data.checkKey)) return errorJson("Unknown check", 404);

  // Marking anything other than "open" without saying what you found makes the board lie: the check
  // reads as settled and carries no evidence, which is the failure this whole feature exists to fix.
  const answer = parsed.data.answer?.trim() ?? "";
  if (parsed.data.status !== "open" && !answer) {
    return errorJson("Say what you found before closing a check", 400);
  }

  const row = await upsertResearchCheck({
    tenantId: sdb.tenantId,
    checkKey: parsed.data.checkKey,
    status: parsed.data.status,
    answer: answer || null,
    answeredBy: session.user.id,
  });

  return json({
    checkKey: row.checkKey,
    status: row.status,
    answer: row.answer,
    updatedAt: row.updatedAt.toISOString(),
  });
}
