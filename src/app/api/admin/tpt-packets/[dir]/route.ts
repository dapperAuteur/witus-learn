import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import { writePacketFile } from "@/lib/tpt-packets";
import { z } from "zod";

// PUT /api/admin/tpt-packets/[dir] — owner-only. Save an edit to one packet markdown file so a typo
// spotted in the PDF preview can be fixed and persisted. Local tooling: on a deployment the gitignored
// packet files aren't present, so writePacketFile returns false and this 400s harmlessly.
const Body = z.object({ name: z.string().max(80), content: z.string().max(500_000) });

export async function PUT(req: Request, { params }: { params: Promise<{ dir: string }> }) {
  const { session } = await apiContext();
  if (!session || !(await isPlatformOwner(session.user.id))) return errorJson("Forbidden", 403);

  const { dir } = await params;
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid request", 400);

  const ok = await writePacketFile(dir, parsed.data.name, parsed.data.content);
  if (!ok) return errorJson("Could not save (invalid path, or file not found locally)", 400);
  return json({ saved: true });
}
