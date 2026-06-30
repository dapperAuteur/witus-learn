import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { checkDomainDns, dnsRecordsFor } from "@/lib/domain-dns";

const Schema = z.object({ host: z.string().min(3).max(255) });

// POST /api/admin/domains/check — return the DNS records this host needs + a live
// status (does it point there yet). Admin-only; DNS data is public so it's read-safe.
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) return errorJson("Forbidden", 403);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const [status, records] = [await checkDomainDns(parsed.data.host), dnsRecordsFor(parsed.data.host)];
  return json({ status, records });
}
