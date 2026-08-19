// The third-party-certification notice (plans/67; sibling of unvetted-disclosure.tsx). Rendered
// on the course landing page for any course registered in CERT_DISCLAIMERS, so "not affiliated
// with NASM/NBHWC" is a page fact a buyer sees before enrolling, never a sentence buried in
// lesson prose. Server component; no state, no fetch.
import { certDisclaimerFor } from "@/lib/cert-disclaimer";

export function CertAffiliationNotice({ courseSlug }: { courseSlug: string | null }) {
  const disclaimer = certDisclaimerFor(courseSlug);
  if (!disclaimer) return null;
  return (
    <aside
      aria-label="Certification affiliation notice"
      className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400"
    >
      {disclaimer.text}
    </aside>
  );
}
