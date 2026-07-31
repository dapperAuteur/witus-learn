import { apiContext, errorJson, isTenantAdmin } from "@/lib/api";
import { loadTenantInterest } from "@/db/queries/leads";
import {
  filterInterest,
  readFilter,
  sourceLabel,
  type InterestFilters,
} from "@/lib/lead-interest";

// GET /api/admin/leads.csv — the CURRENT /admin/leads filter, as a CSV to paste into an email tool.
//
// Same gate as the page (brand admin of this tenant, or the platform owner) and the same tenant
// boundary: the tenant comes from the request host via apiContext, never from the querystring, and
// loadTenantInterest + filterInterest are the identical calls the page makes, so the file always
// matches what the reader is looking at. A course id or bundle slug from another school resolves
// against this tenant's own courses and bundles, so it matches nothing rather than leaking a row.
//
// ONE ROW PER PERSON, not per signup: an email tool wants a deduped address list, so the courses a
// person asked about are joined into a single cell. Email addresses are PII: attachment download,
// no caching, no third party.

function csvCell(value: string | number): string {
  const s = String(value);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export async function GET(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) return errorJson("Forbidden", 403);

  const url = new URL(req.url);
  const filters: InterestFilters = {
    course: readFilter(url.searchParams.get("course") ?? undefined),
    track: readFilter(url.searchParams.get("track") ?? undefined),
    bundle: readFilter(url.searchParams.get("bundle") ?? undefined),
    source: readFilter(url.searchParams.get("source") ?? undefined),
  };

  const { leads, courses, bundles } = await loadTenantInterest(sdb.tenantId);
  const rows = filterInterest({ leads, courses, bundles, filters });

  const header = ["Email", "Name", "Interested in", "Sources", "First captured", "Latest activity"];
  const lines = [header.join(",")];
  for (const r of rows) {
    const titles = [...new Set(r.entries.map((e) => e.courseTitle).filter(Boolean))] as string[];
    const sources = [...new Set(r.entries.map((e) => sourceLabel(e.source)))];
    lines.push(
      [
        csvCell(r.email),
        csvCell(r.name ?? ""),
        csvCell(titles.join("; ")),
        csvCell(sources.join("; ")),
        csvCell(r.createdAt.toISOString().slice(0, 10)),
        csvCell(r.latestAt.slice(0, 10)),
      ].join(","),
    );
  }

  // Name the file after the filter so two exports do not overwrite each other in Downloads.
  const tag =
    [filters.course, filters.track, filters.bundle, filters.source]
      .filter(Boolean)
      .join("-")
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase() || "all";

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${sdb.tenant.slug}-interest-${tag}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
