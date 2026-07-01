import { after } from "next/server";
import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { addLead } from "@/db/queries/leads";
import { sendToInbox } from "@/lib/ecosystem-webhook";

const Schema = z.object({
  email: z.string().email().max(320),
  name: z.string().max(200).optional(),
  source: z.string().max(60).optional(),
});

// POST /api/leads — public email capture for the current school (tenant from host).
// Gated by the school's flags.leadFunnel.
export async function POST(req: Request) {
  const { sdb } = await apiContext();
  if (!sdb.tenant.flags.leadFunnel && !sdb.tenant.flags.comingSoon) {
    return errorJson("Not accepting signups", 404);
  }
  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Enter a valid email", 400);

  await addLead({
    tenantId: sdb.tenantId,
    email: parsed.data.email,
    name: parsed.data.name ?? null,
    source: parsed.data.source ?? null,
  });

  // Mirror the lead into the central WitUS Inbox triage (fire-and-forget after the response;
  // no-op if the inbox isn't configured). Keeps the lead in the school's own DB either way.
  after(
    sendToInbox({
      form_type: "learn-witus-lead",
      submitter_email: parsed.data.email,
      submitter_name: parsed.data.name,
      payload: {
        email: parsed.data.email,
        name: parsed.data.name ?? null,
        source: parsed.data.source ?? null,
        school: sdb.tenant.slug,
      },
    }),
  );
  return json({ ok: true });
}
