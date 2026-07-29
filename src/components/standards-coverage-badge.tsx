import Link from "next/link";
import { getStandardsCoverage } from "@/db/queries/standards";

// Advertises how many jurisdictions THIS tenant's courses are standards-aligned to, linking into the
// finder. Tenant-scoped (never a fabricated or platform-wide count): it renders NOTHING when the
// tenant backs no mapped jurisdiction, so an unaligned brand never shows "aligned to 0 states". The
// top of the standards growth funnel — a true, checkable coverage claim a teacher can act on.
export async function StandardsCoverageBadge({
  tenantId,
  className,
}: {
  tenantId: string;
  className?: string;
}) {
  const { stateCount, hasDC } = await getStandardsCoverage(tenantId);
  if (stateCount === 0 && !hasDC) return null;

  const states = `${stateCount} state${stateCount === 1 ? "" : "s"}`;
  const where =
    stateCount > 0 && hasDC ? `${states} and Washington, D.C.` : hasDC ? "Washington, D.C." : states;

  return (
    <Link
      href="/academic-standards"
      className={
        className ??
        "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
      }
      style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
    >
      <span aria-hidden>✓</span>
      Aligned to published standards in {where}
    </Link>
  );
}
