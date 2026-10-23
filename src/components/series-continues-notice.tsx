// "This series continues on <home school>" (src/lib/series-previews.ts). Rendered on the course
// landing page and after the last lesson of a course that this school shows only as a PREVIEW of a
// series living elsewhere. Every other course renders nothing and costs no query. Server component.
import { getHomeSchool } from "@/db/queries/home-school";
import { seriesContinuation, seriesPreviewFor, type SeriesContinuation } from "@/lib/series-previews";

export async function SeriesContinuesNotice({
  tenantSlug,
  courseSlug,
}: {
  tenantSlug: string;
  courseSlug: string | null;
}) {
  const preview = seriesPreviewFor(tenantSlug, courseSlug);
  if (!preview) return null;
  const continuation = seriesContinuation(preview, await getHomeSchool(preview.homeSchool));
  return continuation ? <SeriesContinuesView continuation={continuation} /> : null;
}

/** The markup alone, so it can be rendered and tested without a database. */
export function SeriesContinuesView({ continuation }: { continuation: SeriesContinuation }) {
  return (
    <aside
      aria-label="Where this series continues"
      className="mt-6 rounded-lg border border-neutral-200 p-4 text-sm dark:border-neutral-800"
    >
      <p className="text-neutral-700 dark:text-neutral-300">
        This series continues on{" "}
        {continuation.href ? (
          <a
            href={continuation.href}
            className="font-medium underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: "var(--accent)" }}
          >
            {continuation.schoolName}
          </a>
        ) : (
          continuation.schoolName
        )}
        .
      </p>
    </aside>
  );
}
