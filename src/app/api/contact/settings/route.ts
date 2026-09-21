import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getAdultStatus } from "@/db/queries/teacher-age";
import { CONTACT_MODES, CONTACT_NOTE_MAX, CONTACT_PHONE_MAX, cleanContactField } from "@/lib/contact";
import { mayUseContact } from "@/lib/teacher-age";

const Body = z.object({
  parentsMode: z.enum(CONTACT_MODES),
  teachersMode: z.enum(CONTACT_MODES),
  phone: z.string().max(200).nullable().optional(),
  note: z.string().max(500).nullable().optional(),
});

// PUT /api/contact/settings: the signed-in adult's own contact defaults on THIS school (tenant from
// the request host): how parents of their students may reach them, how teachers of their children
// may reach them, and an optional phone and availability note. Changing these NEVER emails anyone,
// in either direction; a preference is not a notification.
export async function PUT(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  if (!mayUseContact(await getAdultStatus(session.user.id))) {
    return json({ error: "Confirm you are 18 or older first.", needsAdultAttestation: true }, 403);
  }

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const d = parsed.data;

  await sdb.saveContactSettings(session.user.id, {
    parentsMode: d.parentsMode,
    teachersMode: d.teachersMode,
    phone: cleanContactField(d.phone, CONTACT_PHONE_MAX),
    note: cleanContactField(d.note, CONTACT_NOTE_MAX),
  });
  return json({ ok: true });
}
