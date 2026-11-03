import { handleCourseChat } from "@/lib/course-chat-handler";

// DEPRECATED (2026-11-03): POST /api/courses/[id]/tutor/evaluate ({ sentence }) forwards to the course chat's
// sentence coach (/api/courses/[id]/chat with mode "evaluate"). Same NDJSON as before (meta with usedLessons,
// tokens, done), with Deprecation and Link: rel="successor-version" headers. Nothing in the app calls it.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return handleCourseChat(req, id, "evaluate");
}
