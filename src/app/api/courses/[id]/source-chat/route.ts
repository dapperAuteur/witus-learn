import { handleCourseChat } from "@/lib/course-chat-handler";

// DEPRECATED (2026-11-03): POST /api/courses/[id]/source-chat forwards to the course chat
// (/api/courses/[id]/chat) and answers one JSON reply in the old shape ({ answer, citations, agents,
// usedChunks, savedId }, plus conversationId), with Deprecation and Link: rel="successor-version" headers.
// Kept so an old caller keeps working; nothing in the app calls it.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return handleCourseChat(req, id, "source-chat");
}
