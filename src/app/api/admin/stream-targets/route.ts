import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { getStreamTargets, setStreamTargets } from "@/db/queries/stream-targets";

const Schema = z.object({
  targets: z
    .array(
      z.object({
        label: z.string().min(1).max(80),
        // Must be an rtmp/rtmps ingest URL (a social's Live ingest), not an arbitrary URL.
        rtmpUrl: z
          .string()
          .max(500)
          .refine((u) => /^rtmps?:\/\//i.test(u.trim()), "RTMP URL must start with rtmp:// or rtmps://"),
        streamKey: z.string().max(500),
      }),
    )
    .max(20),
});

// PATCH /api/admin/stream-targets — replace the CURRENT tenant's RTMP fan-out targets
// (copy-paste destinations for OBS multi-output). Owner / brand admin only; tenant from host.
export async function PATCH(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) return errorJson("Forbidden", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return errorJson(parsed.error.issues[0]?.message ?? "Invalid input", 400);
  }
  const targets = parsed.data.targets.map((t) => ({
    label: t.label.trim(),
    rtmpUrl: t.rtmpUrl.trim(),
    streamKey: t.streamKey.trim(),
  }));
  await setStreamTargets(sdb.tenantId, targets);
  return json({ ok: true, targets });
}

export async function GET() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) return errorJson("Forbidden", 403);
  return json({ targets: await getStreamTargets(sdb.tenantId) });
}
