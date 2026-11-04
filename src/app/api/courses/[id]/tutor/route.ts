import { handleCourseChat } from "@/lib/course-chat-handler";

// DEPRECATED (2026-11-03): POST /api/courses/[id]/tutor ({ question }) forwards to the course chat
// (/api/courses/[id]/chat), which replaced the course tutor. It streams the same NDJSON as before (a meta event
// with usedLessons and lenses, then tokens, then done), now grounded in the course's indexed sources with
// numbered citations, with Deprecation and Link: rel="successor-version" headers. Nothing in the app calls it.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return handleCourseChat(req, id, "tutor");
}
