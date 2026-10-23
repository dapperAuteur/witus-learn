// The school-name disclaimer (src/lib/school-disclaimer.ts; sibling of cert-affiliation-notice.tsx).
// Renders nothing for a school with no entry. "notice" is the boxed version for the front page and
// the certificate; "footer" is the small line that sits with DISCLAIMER_SHORT. Server component.
import { schoolDisclaimerFor } from "@/lib/school-disclaimer";

export function SchoolDisclaimerNotice({
  tenantSlug,
  variant = "notice",
}: {
  tenantSlug: string;
  variant?: "notice" | "footer";
}) {
  const disclaimer = schoolDisclaimerFor(tenantSlug);
  if (!disclaimer) return null;
  if (variant === "footer") {
    return <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">{disclaimer.text}</p>;
  }
  return (
    <aside
      aria-label="About this school's name"
      className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-left text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400"
    >
      {disclaimer.text}
    </aside>
  );
}
