import { ecosystemProductBySlug, type EcosystemProduct } from "@/lib/ecosystem";
import { trackedHref } from "@/lib/tracked-link";

// Cross-promotion idea #1: a small, instructor-curated "Related WitUS tools" card on the
// course page (0–3 sibling apps). Labeled + off-domain, never an ad unit. Outbound clicks are
// counted as kind=ecosystem. The caller gates visibility to WitUS-branded hosts.
export function RelatedTools({ slugs, courseId }: { slugs: string[]; courseId: string }) {
  const products = slugs
    .map(ecosystemProductBySlug)
    .filter((p): p is EcosystemProduct => Boolean(p))
    .slice(0, 3);
  if (products.length === 0) return null;

  return (
    <section className="mt-10 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Related WitUS tools</h2>
      <ul className="mt-3 space-y-3">
        {products.map((p) => (
          <li key={p.slug}>
            <a
              href={trackedHref(p.href, { courseId, kind: "ecosystem" })}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline"
              style={{ color: "var(--accent)" }}
            >
              {p.name} ↗
            </a>
            {p.tagline ? (
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{p.tagline}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
