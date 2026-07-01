import { ecosystemProductBySlug } from "@/lib/ecosystem";
import { trackedHref } from "@/lib/tracked-link";

// Cross-promotion idea #2: an authored "practice / go further" callout that an instructor
// drops inside lesson content with `:::tool <slug> | optional call to action`. Rendered as a
// clearly-labeled card (not inline prose); the outbound click is counted as kind=ecosystem.
// Renders nothing if the slug is unknown, so a typo can't break the lesson.
export function EcosystemCallout({
  slug,
  cta,
  courseId,
  lessonId,
}: {
  slug: string;
  cta?: string;
  courseId?: string | null;
  lessonId?: string | null;
}) {
  const product = ecosystemProductBySlug(slug);
  if (!product) return null;
  const href = trackedHref(product.href, { courseId, lessonId, kind: "ecosystem" });

  return (
    <aside className="my-5 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/60">
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Related WitUS tool</p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-1 inline-block font-semibold underline"
        style={{ color: "var(--accent)" }}
      >
        {cta?.trim() || `Go further in ${product.name}`} ↗
      </a>
      {product.tagline ? (
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{product.tagline}</p>
      ) : null}
    </aside>
  );
}
