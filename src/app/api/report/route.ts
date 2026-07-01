import { NextResponse, after } from "next/server";
import { z } from "zod";
import { getScopedDb } from "@/db/scoped";
import { getSession } from "@/lib/session";
import { insertProblemReport } from "@/db/queries/problem-reports";
import { sendToInbox } from "@/lib/ecosystem-webhook";

// POST /api/report — anyone can file a bug/problem/idea for the current school. Stored
// tenant-scoped and mirrored to the central WitUS Inbox (fire-and-forget, after response).

const Body = z.object({
  kind: z.enum(["bug", "idea", "other"]).default("bug"),
  message: z.string().min(3).max(4000),
  pageUrl: z.string().max(500).optional(),
  email: z.string().email().max(200).optional(),
});

export async function POST(req: Request) {
  const sdb = await getScopedDb();
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid report." }, { status: 400 });
  const { kind, message, pageUrl, email } = parsed.data;

  const session = await getSession();
  await insertProblemReport({
    tenantId: sdb.tenantId,
    userId: session?.user.id ?? null,
    kind,
    message,
    pageUrl: pageUrl ?? null,
    email: email ?? null,
  });

  // Mirror to the central WitUS Inbox for triage (no-op if unconfigured; never blocks the user).
  after(
    sendToInbox({
      form_type: "learn-witus-problem-report",
      submitter_email: email ?? session?.user.email ?? undefined,
      submitter_name: session?.user.name ?? undefined,
      priority: kind === "bug" ? "high" : "normal",
      payload: { kind, message, page_url: pageUrl ?? null, school: sdb.tenant.slug },
    }),
  );

  return NextResponse.json({ ok: true });
}
