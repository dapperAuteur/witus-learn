import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getLessonById } from "@/db/queries/authoring";
import { getCohort, listMembers } from "@/db/queries/cohorts";
import {
  NOTE_BLOCK_ID_MAX,
  NOTE_BODY_MAX,
  NOTE_CONTEXT_MAX,
  NOTE_QUOTE_MAX,
} from "@/lib/annotations";

type Params = { params: Promise<{ id: string; lessonId: string }> };

const Schema = z.object({
  cohortId: z.string().uuid(),
  /** Narrow to these members; empty/omitted = the whole cohort. "Individual" is a narrowing of
   *  one; "group" is a narrowing of several — one audience model, not three (plans/61 §3). */
  recipientIds: z.array(z.string().min(1).max(200)).max(500).optional(),
  body: z.string().trim().min(1).max(NOTE_BODY_MAX),
  quote: z.string().min(1).max(NOTE_QUOTE_MAX).optional(),
  contextPrefix: z.string().max(NOTE_CONTEXT_MAX).optional(),
  contextSuffix: z.string().max(NOTE_CONTEXT_MAX).optional(),
  blockId: z.string().max(NOTE_BLOCK_ID_MAX).optional(),
});

// POST /api/courses/[id]/lessons/[lessonId]/teacher-notes — a teacher attaches a note to this
// lesson for their cohort (or a subset of it). The guardrail from plans/59, enforced by what
// this route does NOT do: it writes a row that renders on the lesson page for the audience.
// No notification, no inbox, no email — the moment it grows one, it becomes messaging.
//
// Authority = OWNING the cohort in this tenant. session.user.id, never the active learner: a
// parent studying as a child must not be able to send teacher notes through the child.
export async function POST(req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== id) return errorJson("Not found", 404);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const { cohortId, recipientIds, body, quote, contextPrefix, contextSuffix, blockId } = parsed.data;
  if (!quote && (contextPrefix || contextSuffix || blockId)) {
    return errorJson("Anchor context without a quote anchors nothing", 400);
  }

  const cohort = await getCohort(sdb.tenantId, cohortId);
  if (!cohort || cohort.ownerId !== session.user.id) {
    // A foreign or non-owned cohort is a plain 404: revealing "exists but not yours" leaks.
    return errorJson("Not found", 404);
  }
  if (recipientIds && recipientIds.length > 0) {
    const members = new Set((await listMembers(sdb.tenantId, cohortId)).map((m) => m.userId));
    if (!recipientIds.every((r) => members.has(r))) {
      return errorJson("Every recipient must be a member of the cohort", 400);
    }
  }

  const note = await sdb.createTeacherNote({
    courseId: id,
    lessonId,
    authorId: session.user.id,
    cohortId,
    recipientIds,
    body,
    quote: quote ?? null,
    contextPrefix: contextPrefix ?? null,
    contextSuffix: contextSuffix ?? null,
    blockId: blockId ?? null,
  });
  return json({ note }, 201);
}
