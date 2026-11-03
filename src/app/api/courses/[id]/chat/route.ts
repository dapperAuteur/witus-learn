import { handleCourseChat } from "@/lib/course-chat-handler";

// POST /api/courses/[id]/chat: the course chat, the one tool that replaced "Ask the course tutor" and "Chat
// with the sources" (2026-11-03). Multi-turn, grounded in the course's indexed sources with numbered citations
// that link to the passage, streamed as NDJSON (or one JSON reply with ?format=json). Body:
//   { mode?: "ask", question, history?: [{ question, answer }], conversationId?, config? }
//   { mode: "evaluate", sentence }   (the language courses' sentence coach)
// Access, grounding and saving: src/lib/course-chat-handler.ts.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return handleCourseChat(req, id);
}
