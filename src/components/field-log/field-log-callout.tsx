import Link from "next/link";
import { templateByKey } from "@/lib/field-log-templates";

// Rendered from a `:::field-log <templateKey> | optional CTA` line in a lesson body (the capstone
// "Start your project" deep-link). Server component — just a styled link into /field-log/start,
// which handles auth + creation. Unknown templates still link (the start page validates).
export function FieldLogCallout({ templateKey, cta }: { templateKey: string; cta?: string }) {
  const t = templateByKey(templateKey);
  const href = `/field-log/start?template=${encodeURIComponent(templateKey)}`;
  return (
    <div className="my-5 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <p className="font-semibold">{cta ?? "Start your project"}</p>
      {t ? <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{t.description}</p> : null}
      <Link
        href={href}
        className="mt-3 inline-block rounded-md px-4 py-2 text-sm font-medium text-white"
        style={{ backgroundColor: "var(--accent)" }}
      >
        Start your project →
      </Link>
    </div>
  );
}
