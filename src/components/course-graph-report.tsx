import Link from "next/link";
import { EDGE_KIND_LABEL, type CourseGraph, type GraphReport } from "@/lib/course-graph";

// The orphan-and-weak-link report (plans/57 §5): the half of /admin/graph that makes it a tool
// rather than a poster, and the ACCESSIBILITY answer for the picture above it. The SVG is
// aria-hidden by design; every node and every edge it draws is reachable here as text, as a link,
// and in tab order. Nothing is visible only in the drawing.
//
// Plain tables, no client JS, works at 360px (each table scrolls inside its own box).

function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-8 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{intro}</p>
      {children}
    </section>
  );
}

function TableBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full min-w-lg text-sm">{children}</table>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="py-2 pr-3 font-medium">{children}</th>;
}

function HeadRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="border-b border-neutral-200 text-left text-neutral-600 dark:border-neutral-800">
      {children}
    </tr>
  );
}

function BodyRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="border-b border-neutral-100 last:border-0 dark:border-neutral-800/60">
      {children}
    </tr>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">{children}</p>;
}

export function CourseGraphReport({
  graph,
  report,
  /** Everything in the page query string EXCEPT `course`, so a re-centre link keeps the toggles. */
  keptQuery,
}: {
  graph: CourseGraph;
  report: GraphReport;
  keptQuery: string;
}) {
  const centreHref = (id: string) => `/admin/graph?${keptQuery ? `${keptQuery}&` : ""}course=${id}`;

  // A missing slug on an entity that is otherwise present is probably a typo in the registry. A
  // missing slug on an entity NONE of whose courses are here just means the entity belongs to
  // another brand. Same row shape, opposite meaning, so they are shown apart.
  const likelyTypos = report.danglingEntityRefs.filter((d) => d.entityResolvedHere > 0);
  const absentEntities = report.danglingEntityRefs.filter((d) => d.entityResolvedHere === 0);

  const CourseLink = ({ id, title }: { id: string; title: string }) => (
    <Link
      href={centreHref(id)}
      className="inline-block min-h-11 py-2.5 underline underline-offset-2"
      style={{ color: "var(--accent)" }}
    >
      {title}
    </Link>
  );

  return (
    <>
      <Section
        id="orphans"
        title={`Orphans (${report.orphans.length})`}
        intro={
          <>
            Published courses connected to nothing: no prerequisite in either direction, and no
            entity shared with another course. This is the list the page exists for. A large number
            here is the catalog telling the truth about itself, not a broken graph.
          </>
        }
      >
        {report.orphans.length === 0 ? (
          <Empty>Every published course touches at least one other. That is rare, and good.</Empty>
        ) : (
          <details open>
            <summary className="min-h-11 cursor-pointer py-2.5 text-sm font-medium">
              Show the {report.orphans.length} unconnected published courses
            </summary>
            <TableBox>
              <thead>
                <HeadRow>
                  <Th>Course</Th>
                  <Th>Category</Th>
                </HeadRow>
              </thead>
              <tbody>
                {report.orphans.map((o) => (
                  <BodyRow key={o.id}>
                    <td className="py-1 pr-3">
                      <CourseLink id={o.id} title={o.title} />
                    </td>
                    <td className="py-1 pr-3 text-neutral-600 dark:text-neutral-400">{o.category}</td>
                  </BodyRow>
                ))}
              </tbody>
            </TableBox>
          </details>
        )}
        {report.unpublishedOrphanCount > 0 ? (
          <p className="mt-3 text-xs text-neutral-600 dark:text-neutral-400">
            Plus {report.unpublishedOrphanCount} unpublished courses with no connections, not listed:
            a draft is allowed to stand alone.
          </p>
        ) : null}
      </Section>

      <Section
        id="weak-links"
        title={`Weak links (${report.weakLinks.length})`}
        intro="Published courses hanging off the catalog by a single thread. Cut that one connection and they become orphans."
      >
        {report.weakLinks.length === 0 ? (
          <Empty>No course depends on a single connection.</Empty>
        ) : (
          <details>
            <summary className="min-h-11 cursor-pointer py-2.5 text-sm font-medium">
              Show the {report.weakLinks.length} single-thread courses
            </summary>
            <TableBox>
              <thead>
                <HeadRow>
                  <Th>Course</Th>
                  <Th>Its one connection</Th>
                  <Th>How</Th>
                </HeadRow>
              </thead>
              <tbody>
                {report.weakLinks.map((w) => (
                  <BodyRow key={w.id}>
                    <td className="py-1 pr-3">
                      <CourseLink id={w.id} title={w.title} />
                    </td>
                    <td className="py-1 pr-3 text-neutral-600 dark:text-neutral-400">
                      {w.neighbourTitle}
                    </td>
                    <td className="py-1 pr-3 text-neutral-600 dark:text-neutral-400">
                      {EDGE_KIND_LABEL[w.neighbourKind]}
                    </td>
                  </BodyRow>
                ))}
              </tbody>
            </TableBox>
          </details>
        )}
      </Section>

      <Section
        id="categories"
        title={`Category islands (${report.categoryIslands.length} of ${report.categories.length})`}
        intro="A category is an island when no course in it connects to a course in any other category. Islands are where a bridging course, or a shared entity, would do the most work."
      >
        <TableBox>
          <thead>
            <HeadRow>
              <Th>Category</Th>
              <Th>Courses</Th>
              <Th>Inside</Th>
              <Th>Outbound</Th>
              <Th>Reaches</Th>
            </HeadRow>
          </thead>
          <tbody>
            {report.categories.map((c) => (
              <BodyRow key={c.category}>
                <td className="py-2 pr-3">
                  {c.category}
                  {c.isIsland ? (
                    <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-950 dark:text-amber-200">
                      island
                    </span>
                  ) : null}
                </td>
                <td className="py-2 pr-3 tabular-nums">{c.courses}</td>
                <td className="py-2 pr-3 tabular-nums">{c.internalEdges}</td>
                <td className="py-2 pr-3 tabular-nums">{c.outboundEdges}</td>
                <td className="py-2 pr-3 text-neutral-600 dark:text-neutral-400">
                  {c.reaches.length > 0 ? c.reaches.join(", ") : "nothing"}
                </td>
              </BodyRow>
            ))}
          </tbody>
        </TableBox>
      </Section>

      <Section
        id="entities"
        title={`Entity coverage (${report.entityCoverage.length})`}
        intro={
          <>
            Every entity in the registry and the courses in this school that claim it. An entity
            resolving to fewer than two courses is inert: the entity page hides it (it is not
            cross-course for this school), and it produces no edge here either.
          </>
        }
      >
        {report.entityCoverage.length === 0 ? (
          <Empty>The entity registry is empty.</Empty>
        ) : (
          <TableBox>
            <thead>
              <HeadRow>
                <Th>Entity</Th>
                <Th>Kind</Th>
                <Th>Declared</Th>
                <Th>In this school</Th>
                <Th>Courses</Th>
              </HeadRow>
            </thead>
            <tbody>
              {report.entityCoverage.map((e) => (
                <BodyRow key={e.slug}>
                  <td className="py-2 pr-3">
                    {e.name}
                    {e.isInert ? (
                      <span className="ml-2 rounded-full bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                        inert
                      </span>
                    ) : null}
                  </td>
                  <td className="py-2 pr-3 text-neutral-600 dark:text-neutral-400">{e.kind}</td>
                  <td className="py-2 pr-3 tabular-nums">{e.declared}</td>
                  <td className="py-2 pr-3 tabular-nums">{e.resolved}</td>
                  <td className="py-2 pr-3 text-neutral-600 dark:text-neutral-400">
                    {e.resolvedTitles.length > 0 ? e.resolvedTitles.join("; ") : "none"}
                  </td>
                </BodyRow>
              ))}
            </tbody>
          </TableBox>
        )}
      </Section>

      <Section
        id="dangling"
        title={`Dangling entity references (${likelyTypos.length})`}
        intro={
          <>
            An entity in <code>src/lib/entities.ts</code> names a course slug that no course in this
            school has, while the rest of that entity IS here. The registry is code, so nothing else
            catches this: the entity page renders one fewer link and says nothing at all. A wrong
            slug looks exactly like a course that was never written.
          </>
        }
      >
        {likelyTypos.length === 0 ? (
          <Empty>
            No entity is missing a course this school otherwise teaches. Every slug that resolves
            partly, resolves fully.
          </Empty>
        ) : (
          <TableBox>
            <thead>
              <HeadRow>
                <Th>Entity</Th>
                <Th>Missing course slug</Th>
                <Th>Also here</Th>
                <Th>The note nobody will read</Th>
              </HeadRow>
            </thead>
            <tbody>
              {likelyTypos.map((d) => (
                <BodyRow key={`${d.entitySlug}-${d.courseSlug}`}>
                  <td className="py-2 pr-3">{d.entityName}</td>
                  <td className="py-2 pr-3 font-mono text-xs">{d.courseSlug}</td>
                  <td className="py-2 pr-3 tabular-nums">{d.entityResolvedHere}</td>
                  <td className="py-2 pr-3 text-neutral-600 dark:text-neutral-400">{d.note}</td>
                </BodyRow>
              ))}
            </tbody>
          </TableBox>
        )}

        {absentEntities.length > 0 ? (
          <details className="mt-4">
            <summary className="min-h-11 cursor-pointer py-2.5 text-sm font-medium">
              Plus {absentEntities.length} references belonging to entities this school does not
              teach at all
            </summary>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              None of these entities&rsquo; courses are in this school, so the registry is not wrong:
              the subject is simply another brand&rsquo;s. Listed separately so a real typo above is
              never buried under them.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              {absentEntities.map((d) => (
                <li key={`${d.entitySlug}-${d.courseSlug}`}>
                  {d.entityName}: <span className="font-mono text-xs">{d.courseSlug}</span>
                </li>
              ))}
            </ul>
          </details>
        ) : null}
      </Section>

      <Section
        id="asymmetries"
        title={`One-way recommendations (${report.asymmetries.length})`}
        intro="A recommends B, but B does not recommend A. Usually an authoring oversight rather than a decision. Required prerequisites are excluded: those are one-way on purpose, which is the whole point of an ordering."
      >
        {report.asymmetries.length === 0 ? (
          <Empty>Every recommendation is mutual.</Empty>
        ) : (
          <TableBox>
            <thead>
              <HeadRow>
                <Th>Recommended first</Th>
                <Th>On this course</Th>
                <Th>What is missing</Th>
              </HeadRow>
            </thead>
            <tbody>
              {report.asymmetries.map((a) => (
                <BodyRow key={`${a.fromId}-${a.toId}`}>
                  <td className="py-1 pr-3">
                    <CourseLink id={a.fromId} title={a.fromTitle} />
                  </td>
                  <td className="py-1 pr-3">
                    <CourseLink id={a.toId} title={a.toTitle} />
                  </td>
                  <td className="py-1 pr-3 text-neutral-600 dark:text-neutral-400">
                    no return recommendation
                  </td>
                </BodyRow>
              ))}
            </tbody>
          </TableBox>
        )}
      </Section>

      <Section
        id="all-edges"
        title={`Every connection (${graph.edges.length})`}
        intro="The full edge list in words. Nothing in the drawing above is missing from here, which is what makes the drawing safe to treat as decoration."
      >
        {graph.edges.length === 0 ? (
          <Empty>
            No course in this school connects to another yet. Add a prerequisite in Learning paths,
            or give two courses a shared entity.
          </Empty>
        ) : (
          <details>
            <summary className="min-h-11 cursor-pointer py-2.5 text-sm font-medium">
              Show all {graph.edges.length} connections
            </summary>
            <ul className="mt-2 space-y-1 text-sm">
              {graph.edges.map((e, i) => (
                <li key={`${e.kind}-${e.from}-${e.to}-${e.entitySlug ?? i}`}>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {EDGE_KIND_LABEL[e.kind]}:
                  </span>{" "}
                  {e.label}
                </li>
              ))}
            </ul>
          </details>
        )}
      </Section>
    </>
  );
}
