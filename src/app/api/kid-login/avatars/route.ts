import { listKidLoginAvatars } from "@/db/queries/kid-login";
import { json } from "@/lib/api";

// GET /api/kid-login/avatars?classCode=XXXXXX — the avatar grid for a class code, kid
// login step 2. Deliberately never distinguishes "no such class code" from "a real class
// with zero avatar-pin kids": both return { avatars: [] } so a guesser can't enumerate
// valid codes by watching whether the list is empty vs. errors. No auth required — this
// IS the pre-auth step, gated only by knowing the code (shared out-of-band by the class
// owner) plus the rate-limited PIN check on the next step.
export async function GET(req: Request) {
  const url = new URL(req.url);
  const classCode = url.searchParams.get("classCode") ?? "";
  const avatars = await listKidLoginAvatars(classCode);
  return json({ avatars });
}
