import { apiContext, errorJson } from "@/lib/api";
import { getProjectBundle } from "@/db/queries/field-log";

type Params = { params: Promise<{ id: string }> };

// GET /api/field-log/projects/[id]/export — download the full project as JSON (owner/crew only).
// Learners own their content; this is the machine-readable export (a print → PDF view lives at
// /field-log/[id]/export). Includes a how-to note describing the shape.
export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const bundle = await getProjectBundle(sdb.tenantId, session.user.id, id);
  if (!bundle) return errorJson("Not found", 404);

  const payload = {
    _about:
      "Your Field Log project export. `project` is the project + its checklist; `legs` are the sites/nodes; " +
      "`captures` is the field bank (storage_url values are links to your own media, not hosted by us); " +
      "`comments` is the journal. You own this data; re-import or cite it freely.",
    ...bundle,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "content-disposition": `attachment; filename="field-log-${id}.json"`,
    },
  });
}
