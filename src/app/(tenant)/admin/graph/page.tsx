import type { Metadata } from "next";
import Link from "next/link";
import { getScopedDb } from "@/db/scoped";
import { requirePlatformOwner } from "@/lib/session";
import { ENTITIES } from "@/lib/entities";
import {
  buildClusterLayout,
  buildCourseGraph,
  buildEgoLayout,
  categoryColor,
  EDGE_KINDS,
  EDGE_KIND_LABEL,
  type EdgeKind,
} from "@/lib/course-graph";
import { ClusterGraphSvg, EgoGraphSvg } from "@/components/course-graph-svg";
import { CourseGraphReport } from "@/components/course-graph-report";

export const metadata: Metadata = { title: "Connection graph" };

// ─────────────────────────────────────────────────────────────────────────────
// /admin/graph — the owner-only course connection graph (plans/57).
//
// DERIVED AT REQUEST TIME. There is no course_graph table, no migration, no cron and no cache: the
// picture is rebuilt from live rows on every load, so a new course, a renamed course, or a
// prerequisite added in /admin/paths shows up on the next refresh and can never be stale. The one
// exception is stated in the UI rather than hidden: ENTITIES is a code constant, so entity links
// move on DEPLOY, not on save.
//
// Owner-only via requirePlatformOwner(), and `ownerOnly: true` in ADMIN_NAV. That is not just a
// permissions choice: a PUBLIC graph renders a node's NEIGHBOURS, which makes it a far better
// cross-tenant leak vector than an ordinary page, since the hide-an-entity-with-fewer-than-two
// -published-courses rule would have to be re-implemented at every hop. Owner-only means the graph
// legitimately sees this school's whole catalog, which is also the only view where it is useful.
// Every read is still tenant-scoped through ScopedDb, so "whole catalog" means THIS school's.
//
// State lives in the query string (a GET form, no client JS), so a view is shareable and
// bookmarkable and the page stays a server component.
// ─────────────────────────────────────────────────────────────────────────────

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

const card =
  "rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900";
const controlBase =
  "min-h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12";

function asArray(v: string | string[] | undefined): string[] {
  if (v == null) return [];
  return Array.isArray(v) ? v : [v];
}

export default async function ConnectionGraphPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  await requirePlatformOwner();
  const sdb = await getScopedDb();

  const [courses, prerequisites] = await Promise.all([
    sdb.listCourses({ includeUnpublished: true }),
    sdb.listPrerequisiteEdges(),
  ]);

  const graph = buildCourseGraph({
    courses: courses.map((c) => ({
      id: c.id,
      slug: c.slug,
      title: c.title,
      category: c.category,
      seriesTitle: c.seriesTitle,
      isPublished: c.isPublished,
    })),
    prerequisites,
    entities: ENTITIES,
  });

  const sp = await searchParams;
  const view = sp.view === "catalog" ? "catalog" : "ego";

  // An explicit `k` marker distinguishes "the operator unticked every box" from "first load, no
  // params at all". Without it, unticking everything would silently show everything.
  const kindsTouched = sp.k != null;
  const requested = asArray(sp.kind).filter((k): k is EdgeKind =>
    (EDGE_KINDS as string[]).includes(k),
  );
  const kinds: EdgeKind[] = kindsTouched ? requested : EDGE_KINDS;

  // Default centre: the most connected course, so the first load shows the graph doing something
  // rather than an empty ring. Ties break on the node order, which is already fixed and sorted.
  const mostConnected = [...graph.nodes].sort((a, b) => b.degree - a.degree)[0];
  const requestedCentre = typeof sp.course === "string" ? graph.byId.get(sp.course) : undefined;
  const centreNode = requestedCentre ?? mostConnected;

  const ego = centreNode ? buildEgoLayout(graph, centreNode.id, { kinds }) : null;
  const clusters = view === "catalog" ? buildClusterLayout(graph, { kinds }) : null;

  // The query string a re-centre link must preserve (everything except `course`).
  const kept = new URLSearchParams();
  if (view === "catalog") kept.set("view", "catalog");
  if (kindsTouched) {
    kept.set("k", "1");
    for (const k of kinds) kept.append("kind", k);
  }
  const keptQuery = kept.toString();

  const allCategories = graph.report.categories.map((c) => c.category);
  const connected = graph.nodes.filter((n) => n.degree > 0).length;
  const neighbourEdges = ego
    ? graph.edges.filter(
        (e) => kinds.includes(e.kind) && (e.from === centreNode?.id || e.to === centreNode?.id),
      )
    : [];

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">Connection graph</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        What is this course connected to, and what is connected to nothing? Built fresh from live
        rows every time you load this page: there is no stored copy to regenerate, so a course added
        or edited a minute ago is already in it.
      </p>

      <p className="mt-3 text-sm">
        <strong className="font-semibold">
          {connected} of {graph.report.totalCourses} courses
        </strong>{" "}
        connect to at least one other, across {graph.report.totalEdges} connections (
        {graph.report.edgeCountByKind.required} required, {graph.report.edgeCountByKind.recommended}{" "}
        recommended, {graph.report.edgeCountByKind.entity} shared entities).
      </p>
      {graph.report.orphans.length > graph.report.publishedCourses / 2 ? (
        <p className="mt-2 rounded-lg bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
          Most of the catalog connects to nothing. That is the expected reading today, not a broken
          page: prerequisites are authored one at a time and only {ENTITIES.length} entities are
          registered so far. The orphan table below is the worklist that changes it.
        </p>
      ) : null}

      <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
        Prerequisite links are live from the database. Entity links come from{" "}
        <code>src/lib/entities.ts</code>, which is code, so they change on{" "}
        <strong className="font-semibold">deploy</strong>, not when a course is saved. Semantic
        (CYOA) neighbours are deliberately not drawn: see the note under the picture.
      </p>

      {/* ── Controls ─────────────────────────────────────────────────────── */}
      <form method="get" action="/admin/graph" className={`${card} mt-6`}>
        <input type="hidden" name="k" value="1" />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="course" className="block text-sm font-medium">
              Centre the graph on
            </label>
            <select id="course" name="course" defaultValue={centreNode?.id ?? ""} className={`${controlBase} mt-1`}>
              {allCategories.map((cat) => (
                <optgroup key={cat} label={cat}>
                  {graph.nodes
                    .filter((n) => n.category === cat)
                    .map((n) => (
                      <option key={n.id} value={n.id}>
                        {n.title} ({n.degree})
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              The number is how many other courses it touches. Type to jump to a title.
            </p>
          </div>

          <div>
            <label htmlFor="view" className="block text-sm font-medium">
              View
            </label>
            <select id="view" name="view" defaultValue={view} className={`${controlBase} mt-1`}>
              <option value="ego">One course and its neighbours</option>
              <option value="catalog">Whole catalog, clustered by category</option>
            </select>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              The whole-catalog view clusters by category rather than scattering{" "}
              {graph.report.totalCourses} nodes into a hairball.
            </p>
          </div>
        </div>

        <fieldset className="mt-4">
          <legend className="text-sm font-medium">Show these connections</legend>
          <div className="mt-1 flex flex-col gap-1 sm:flex-row sm:gap-6">
            {EDGE_KINDS.map((k) => (
              <label key={k} className="flex min-h-11 items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="kind"
                  value={k}
                  defaultChecked={kinds.includes(k)}
                  className="h-4 w-4"
                />
                {EDGE_KIND_LABEL[k]} ({graph.report.edgeCountByKind[k]})
              </label>
            ))}
          </div>
        </fieldset>

        <button
          type="submit"
          className="mt-4 min-h-11 rounded-lg px-4 py-2 text-sm font-medium text-white pointer-coarse:min-h-12"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Update the graph
        </button>
      </form>

      {/* ── The picture ──────────────────────────────────────────────────── */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold tracking-tight">
          {view === "catalog"
            ? "The whole catalog, by category"
            : `Around ${centreNode?.title ?? "nothing yet"}`}
        </h2>

        {graph.nodes.length === 0 ? (
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            This school has no courses yet, so there is nothing to draw.
          </p>
        ) : view === "catalog" && clusters ? (
          <>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Every course in the school, grouped into its category. A solid dot has at least one
              connection; a faded dot has none. Lines that cross between two groups are the ones
              worth having.
            </p>
            <div className="mt-3 overflow-x-auto rounded-lg border border-neutral-200 p-2 dark:border-neutral-800">
              <ClusterGraphSvg layout={clusters} />
            </div>
          </>
        ) : ego ? (
          <>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Rings run outward from the strongest tie: required prerequisites, then recommended
              ones, then courses sharing an entity. Nothing is placed at random, so this picture is
              the same every time you load it.
            </p>
            <div className="mt-3 overflow-x-auto rounded-lg border border-neutral-200 p-2 dark:border-neutral-800">
              <EgoGraphSvg layout={ego} />
            </div>
          </>
        ) : null}

        {/* Legend, as real markup rather than SVG text, so it is readable and selectable. */}
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-600 dark:text-neutral-400">
          <span>Solid line with arrow: required prerequisite, pointing at the course that needs it.</span>
          <span>Dashed line with arrow: recommended prerequisite.</span>
          <span>Thin plain line: a shared entity, labelled with its name.</span>
        </div>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs" aria-label="Category colours">
          {allCategories.map((cat) => (
            <li key={cat} className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400">
              <span
                aria-hidden
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: categoryColor(cat, allCategories) }}
              />
              {cat}
            </li>
          ))}
        </ul>

        <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
          Semantic (CYOA) neighbours, the fourth ring in the plan, are not drawn. Two reasons, both
          honest: the similarity match is lesson-grained, so turning it into a course-to-course line
          needs a rollup rule (highest single match? a count above a threshold?) whose choice is
          visible in the output and is not obviously right yet; and the underlying query only
          considers courses that opted into cross-course CYOA, so the ring would quietly imply
          &ldquo;nothing similar&rdquo; about every course that has not. It ships when the rule is
          decided and can be labelled.
        </p>
      </section>

      {/* ── The neighbour list: the keyboard and screen-reader path through the picture ── */}
      {view === "ego" && centreNode ? (
        <section className="mt-6">
          <h2 className="text-lg font-semibold tracking-tight">
            {centreNode.title}: {neighbourEdges.length}{" "}
            {neighbourEdges.length === 1 ? "connection" : "connections"}
          </h2>
          {neighbourEdges.length === 0 ? (
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              This course connects to nothing under the current filters. If every box above is
              ticked, it is a genuine orphan: no prerequisite in either direction, and no entity
              shared with another course. Give it a prerequisite in{" "}
              <Link href="/admin/paths" className="underline" style={{ color: "var(--accent)" }}>
                Learning paths
              </Link>
              , or add it to an entity in <code>src/lib/entities.ts</code>.
            </p>
          ) : (
            <ul className="mt-2 space-y-1 text-sm">
              {neighbourEdges.map((e, i) => {
                const otherId = e.from === centreNode.id ? e.to : e.from;
                const other = graph.byId.get(otherId);
                return (
                  <li key={`${e.kind}-${otherId}-${e.entitySlug ?? i}`}>
                    <Link
                      href={`/admin/graph?${keptQuery ? `${keptQuery}&` : ""}course=${otherId}`}
                      className="inline-block min-h-11 py-2.5 underline underline-offset-2"
                      style={{ color: "var(--accent)" }}
                    >
                      {other?.title ?? otherId}
                    </Link>{" "}
                    <span className="text-neutral-600 dark:text-neutral-400">
                      ({EDGE_KIND_LABEL[e.kind]}
                      {e.entityName ? `: ${e.entityName}` : ""}). {e.label}.
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
          {centreNode.slug ? (
            <p className="mt-2 text-sm">
              <Link
                href={`/teach/${centreNode.id}`}
                className="underline"
                style={{ color: "var(--accent)" }}
              >
                Open {centreNode.title} in the course editor
              </Link>
            </p>
          ) : null}
        </section>
      ) : null}

      <CourseGraphReport graph={graph} report={graph.report} keptQuery={keptQuery} />
    </main>
  );
}
