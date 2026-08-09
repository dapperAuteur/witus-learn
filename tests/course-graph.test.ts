import { describe, expect, it } from "vitest";
import {
  buildClusterLayout,
  buildCourseGraph,
  buildEgoLayout,
  categoryColor,
  type BuildGraphInput,
  type EntityInput,
  type GraphCourseInput,
} from "@/lib/course-graph";
import { ENTITIES } from "@/lib/entities";

// The connection graph is built PURE (plans/57): courses in, `{ nodes, edges }` + the report out,
// no database and no request. These cover the three things that would silently corrupt the page:
// an edge counted twice or in the wrong direction, a report row that lies about the catalog, and a
// layout that moves between two loads (which would make a screenshot useless).

function course(over: Partial<GraphCourseInput> & { id: string }): GraphCourseInput {
  return {
    slug: over.id,
    title: over.id,
    category: "History",
    seriesTitle: null,
    isPublished: true,
    ...over,
  };
}

function build(over: Partial<BuildGraphInput> = {}) {
  return buildCourseGraph({ courses: [], prerequisites: [], entities: [], ...over });
}

describe("buildCourseGraph, nodes", () => {
  it("makes one node per course and keeps the id, slug and published flag", () => {
    const g = build({
      courses: [course({ id: "a", title: "Alpha" }), course({ id: "b", title: "Beta", isPublished: false })],
    });
    expect(g.nodes.map((n) => n.id)).toEqual(["a", "b"]);
    expect(g.byId.get("b")?.isPublished).toBe(false);
    expect(g.byId.get("a")?.slug).toBe("a");
  });

  it("groups a course with no category under one bucket rather than dropping it", () => {
    const g = build({
      courses: [course({ id: "a", category: null }), course({ id: "b", category: "   " })],
    });
    expect(g.nodes.every((n) => n.category === "Uncategorised")).toBe(true);
    expect(g.report.categories).toHaveLength(1);
  });

  it("sorts deterministically, by category then title, whatever order it is handed", () => {
    const forward = build({
      courses: [
        course({ id: "1", title: "Zebra", category: "Alpha" }),
        course({ id: "2", title: "Ant", category: "Alpha" }),
        course({ id: "3", title: "Ant", category: "Beta" }),
      ],
    });
    const reversed = build({
      courses: [
        course({ id: "3", title: "Ant", category: "Beta" }),
        course({ id: "2", title: "Ant", category: "Alpha" }),
        course({ id: "1", title: "Zebra", category: "Alpha" }),
      ],
    });
    expect(forward.nodes.map((n) => n.id)).toEqual(["2", "1", "3"]);
    expect(reversed.nodes.map((n) => n.id)).toEqual(forward.nodes.map((n) => n.id));
  });
});

describe("buildCourseGraph, prerequisite edges", () => {
  const courses = [course({ id: "a" }), course({ id: "b" })];

  it("points the edge FROM the prerequisite TO the course that needs it", () => {
    const g = build({
      courses,
      prerequisites: [{ courseId: "b", prerequisiteCourseId: "a", enforcement: "required" }],
    });
    expect(g.edges).toHaveLength(1);
    expect(g.edges[0]).toMatchObject({ kind: "required", from: "a", to: "b" });
    expect(g.edges[0].label).toContain("required before");
  });

  it("keeps required and recommended apart", () => {
    const g = build({
      courses,
      prerequisites: [{ courseId: "b", prerequisiteCourseId: "a", enforcement: "recommended" }],
    });
    expect(g.report.edgeCountByKind).toEqual({ required: 0, recommended: 1, entity: 0 });
  });

  it("ignores an enforcement value it does not understand rather than guessing", () => {
    const g = build({
      courses,
      prerequisites: [{ courseId: "b", prerequisiteCourseId: "a", enforcement: "suggested" }],
    });
    expect(g.edges).toHaveLength(0);
  });

  it("drops a prerequisite pointing outside the course list instead of inventing a node", () => {
    const g = build({
      courses,
      prerequisites: [{ courseId: "b", prerequisiteCourseId: "ghost", enforcement: "required" }],
    });
    expect(g.edges).toHaveLength(0);
    expect(g.nodes).toHaveLength(2);
  });

  it("drops a self-referencing row", () => {
    const g = build({
      courses,
      prerequisites: [{ courseId: "a", prerequisiteCourseId: "a", enforcement: "required" }],
    });
    expect(g.edges).toHaveLength(0);
  });

  it("counts a duplicated row once", () => {
    const g = build({
      courses,
      prerequisites: [
        { courseId: "b", prerequisiteCourseId: "a", enforcement: "required" },
        { courseId: "b", prerequisiteCourseId: "a", enforcement: "required" },
      ],
    });
    expect(g.edges).toHaveLength(1);
  });

  it("treats A-before-B and B-before-A as two different edges, because direction is meaning", () => {
    const g = build({
      courses,
      prerequisites: [
        { courseId: "b", prerequisiteCourseId: "a", enforcement: "recommended" },
        { courseId: "a", prerequisiteCourseId: "b", enforcement: "recommended" },
      ],
    });
    expect(g.edges).toHaveLength(2);
    expect(g.byId.get("a")?.degree).toBe(1);
  });
});

describe("buildCourseGraph, entity edges", () => {
  const entity = (over: Partial<EntityInput> = {}): EntityInput => ({
    slug: "berman",
    name: "Berman v. Parker",
    kind: "case",
    courses: [
      { courseSlug: "a", note: "the source" },
      { courseSlug: "b", note: "the doctrine" },
    ],
    ...over,
  });

  it("joins every pair of courses that claim the same entity, once each", () => {
    const g = build({
      courses: [course({ id: "a" }), course({ id: "b" }), course({ id: "c" })],
      entities: [
        entity({
          courses: [
            { courseSlug: "a", note: "1" },
            { courseSlug: "b", note: "2" },
            { courseSlug: "c", note: "3" },
          ],
        }),
      ],
    });
    // Three courses sharing one entity is a triangle: three edges, not six.
    expect(g.edges).toHaveLength(3);
    expect(g.edges.every((e) => e.kind === "entity")).toBe(true);
    expect(g.edges[0].entityName).toBe("Berman v. Parker");
  });

  it("draws one edge per SHARED entity, because each carries a different sentence", () => {
    const g = build({
      courses: [course({ id: "a" }), course({ id: "b" })],
      entities: [entity(), entity({ slug: "kelo", name: "Kelo v. New London" })],
    });
    expect(g.edges).toHaveLength(2);
    expect(g.edges.map((e) => e.entitySlug).sort()).toEqual(["berman", "kelo"]);
    // Two edges, but still ONE neighbour: degree counts distinct courses.
    expect(g.byId.get("a")?.degree).toBe(1);
  });

  it("draws nothing for an entity only one course claims", () => {
    const g = build({
      courses: [course({ id: "a" })],
      entities: [entity({ courses: [{ courseSlug: "a", note: "only one" }] })],
    });
    expect(g.edges).toHaveLength(0);
    expect(g.report.entityCoverage[0].isInert).toBe(true);
  });

  it("does not double-count an entity that names the same course twice", () => {
    const g = build({
      courses: [course({ id: "a" }), course({ id: "b" })],
      entities: [
        entity({
          courses: [
            { courseSlug: "a", note: "1" },
            { courseSlug: "a", note: "again" },
            { courseSlug: "b", note: "2" },
          ],
        }),
      ],
    });
    expect(g.edges).toHaveLength(1);
    expect(g.report.entityCoverage[0].resolved).toBe(2);
  });

  it("reports a course slug that resolves to nothing as a dangling reference", () => {
    const g = build({
      courses: [course({ id: "a" })],
      entities: [
        entity({
          courses: [
            { courseSlug: "a", note: "here" },
            { courseSlug: "typo-slug", note: "the note that will never render" },
          ],
        }),
      ],
    });
    expect(g.report.danglingEntityRefs).toHaveLength(1);
    expect(g.report.danglingEntityRefs[0]).toMatchObject({
      courseSlug: "typo-slug",
      entityName: "Berman v. Parker",
      note: "the note that will never render",
      entityResolvedHere: 1,
    });
    expect(g.report.entityCoverage[0]).toMatchObject({ declared: 2, resolved: 1 });
  });

  it("separates a probable typo from an entity that simply is not this school's subject", () => {
    // The entity is half here, so the missing slug is a registry mistake worth chasing.
    const partly = build({ courses: [course({ id: "a" })], entities: [entity()] });
    expect(partly.report.danglingEntityRefs.map((d) => d.entityResolvedHere)).toEqual([1]);

    // A white-label school with none of the entity's courses. Both slugs dangle, and neither is a
    // bug: without this distinction every such school would read as 22 broken references.
    const none = build({ courses: [course({ id: "z", slug: "unrelated" })], entities: [entity()] });
    expect(none.report.danglingEntityRefs.map((d) => d.entityResolvedHere)).toEqual([0, 0]);
  });

  it("ignores a course with no slug when resolving, rather than matching on null", () => {
    const g = build({
      courses: [course({ id: "a", slug: null }), course({ id: "b", slug: null })],
      entities: [entity()],
    });
    expect(g.edges).toHaveLength(0);
    expect(g.report.danglingEntityRefs).toHaveLength(2);
  });
});

describe("buildCourseGraph, the report", () => {
  it("lists a published course with no edges as an orphan", () => {
    const g = build({ courses: [course({ id: "a", title: "Alone" })] });
    expect(g.report.orphans.map((o) => o.title)).toEqual(["Alone"]);
  });

  it("counts an unpublished lone course instead of listing it, because a draft may stand alone", () => {
    const g = build({ courses: [course({ id: "a", isPublished: false })] });
    expect(g.report.orphans).toHaveLength(0);
    expect(g.report.unpublishedOrphanCount).toBe(1);
    expect(g.report.publishedCourses).toBe(0);
  });

  it("calls a course with exactly one neighbour a weak link, and names that neighbour", () => {
    const g = build({
      courses: [course({ id: "a", title: "A" }), course({ id: "b", title: "B" }), course({ id: "c", title: "C" })],
      prerequisites: [
        { courseId: "b", prerequisiteCourseId: "a", enforcement: "required" },
        { courseId: "c", prerequisiteCourseId: "b", enforcement: "required" },
      ],
    });
    // B sits between A and C, so only A and C are single-thread.
    expect(g.report.weakLinks.map((w) => w.title).sort()).toEqual(["A", "C"]);
    expect(g.report.weakLinks.find((w) => w.title === "A")).toMatchObject({
      neighbourTitle: "B",
      neighbourKind: "required",
    });
  });

  it("marks a category with no edge leaving it as an island", () => {
    const g = build({
      courses: [
        course({ id: "a", category: "History" }),
        course({ id: "b", category: "History" }),
        course({ id: "c", category: "Aviation" }),
      ],
      prerequisites: [{ courseId: "b", prerequisiteCourseId: "a", enforcement: "required" }],
    });
    const history = g.report.categories.find((c) => c.category === "History");
    expect(history).toMatchObject({ courses: 2, internalEdges: 1, outboundEdges: 0, isIsland: true });
    expect(g.report.categoryIslands.map((c) => c.category).sort()).toEqual(["Aviation", "History"]);
  });

  it("stops calling a category an island as soon as one edge crosses out of it", () => {
    const g = build({
      courses: [course({ id: "a", category: "History" }), course({ id: "c", category: "Aviation" })],
      prerequisites: [{ courseId: "c", prerequisiteCourseId: "a", enforcement: "recommended" }],
    });
    expect(g.report.categoryIslands).toHaveLength(0);
    expect(g.report.categories.find((c) => c.category === "History")?.reaches).toEqual(["Aviation"]);
  });

  it("flags a one-way recommendation but never a one-way requirement", () => {
    const g = build({
      courses: [course({ id: "a", title: "A" }), course({ id: "b", title: "B" }), course({ id: "c", title: "C" })],
      prerequisites: [
        { courseId: "b", prerequisiteCourseId: "a", enforcement: "recommended" },
        { courseId: "c", prerequisiteCourseId: "a", enforcement: "required" },
      ],
    });
    expect(g.report.asymmetries).toHaveLength(1);
    expect(g.report.asymmetries[0]).toMatchObject({ fromTitle: "A", toTitle: "B" });
  });

  it("says nothing when both directions are recommended", () => {
    const g = build({
      courses: [course({ id: "a" }), course({ id: "b" })],
      prerequisites: [
        { courseId: "b", prerequisiteCourseId: "a", enforcement: "recommended" },
        { courseId: "a", prerequisiteCourseId: "b", enforcement: "recommended" },
      ],
    });
    expect(g.report.asymmetries).toHaveLength(0);
  });

  it("puts every edge in the report list, so nothing exists only in the picture", () => {
    const g = build({
      courses: [course({ id: "a" }), course({ id: "b" })],
      prerequisites: [{ courseId: "b", prerequisiteCourseId: "a", enforcement: "required" }],
      entities: [
        {
          slug: "e",
          name: "An entity",
          kind: "concept",
          courses: [
            { courseSlug: "a", note: "1" },
            { courseSlug: "b", note: "2" },
          ],
        },
      ],
    });
    expect(g.report.totalEdges).toBe(g.edges.length);
    expect(g.edges.every((e) => e.label.length > 0)).toBe(true);
  });
});

describe("buildEgoLayout", () => {
  const graph = () =>
    build({
      courses: [
        course({ id: "centre", title: "Centre" }),
        course({ id: "req", title: "Required one" }),
        course({ id: "rec", title: "Recommended one" }),
        course({ id: "ent", title: "Entity one" }),
        course({ id: "far", title: "Unrelated" }),
      ],
      prerequisites: [
        { courseId: "centre", prerequisiteCourseId: "req", enforcement: "required" },
        { courseId: "centre", prerequisiteCourseId: "rec", enforcement: "recommended" },
      ],
      entities: [
        {
          slug: "e",
          name: "An entity",
          kind: "concept",
          courses: [
            { courseSlug: "centre", note: "1" },
            { courseSlug: "ent", note: "2" },
          ],
        },
      ],
    });

  it("returns null for a course that is not in the graph, rather than an empty picture", () => {
    expect(buildEgoLayout(graph(), "nope")).toBeNull();
  });

  it("puts each neighbour on the ring for its tie strength and leaves strangers out", () => {
    const layout = buildEgoLayout(graph(), "centre");
    expect(layout?.ringCounts).toEqual({ 1: 1, 2: 1, 3: 1 });
    const ringOf = (id: string) => layout?.placed.find((p) => p.node.id === id)?.ring;
    expect(ringOf("req")).toBe(1);
    expect(ringOf("rec")).toBe(2);
    expect(ringOf("ent")).toBe(3);
    expect(ringOf("far")).toBeUndefined();
  });

  it("places the centre in the middle of the canvas", () => {
    const layout = buildEgoLayout(graph(), "centre", { width: 400, height: 400 });
    expect(layout?.centre).toMatchObject({ x: 200, y: 200, ring: 0 });
  });

  it("is deterministic: the same course lays out identically every time", () => {
    const a = buildEgoLayout(graph(), "centre");
    const b = buildEgoLayout(graph(), "centre");
    expect(a?.placed.map((p) => [p.node.id, p.x, p.y])).toEqual(
      b?.placed.map((p) => [p.node.id, p.x, p.y]),
    );
  });

  it("spaces a ring evenly and starts it at the top", () => {
    const g = build({
      courses: [
        course({ id: "c", title: "C" }),
        course({ id: "x", title: "X" }),
        course({ id: "y", title: "Y" }),
      ],
      prerequisites: [
        { courseId: "c", prerequisiteCourseId: "x", enforcement: "required" },
        { courseId: "c", prerequisiteCourseId: "y", enforcement: "required" },
      ],
    });
    const layout = buildEgoLayout(g, "c", { width: 400, height: 400 });
    const first = layout?.placed.find((p) => p.node.id === "x");
    const second = layout?.placed.find((p) => p.node.id === "y");
    // First neighbour straight above the centre, second directly below it.
    expect(first?.x).toBe(200);
    expect(first?.y).toBeLessThan(200);
    expect(second?.x).toBe(200);
    expect(second?.y).toBeGreaterThan(200);
  });

  it("honours the ring toggles: a hidden kind leaves both the node and its line out", () => {
    const layout = buildEgoLayout(graph(), "centre", { kinds: ["required"] });
    expect(layout?.ringCounts).toEqual({ 1: 1, 2: 0, 3: 0 });
    expect(layout?.edges).toHaveLength(1);
    expect(layout?.edges[0].edge.kind).toBe("required");
  });

  it("draws only edges that touch the centre, never neighbour-to-neighbour lines", () => {
    const g = build({
      courses: [course({ id: "c" }), course({ id: "x" }), course({ id: "y" })],
      prerequisites: [
        { courseId: "c", prerequisiteCourseId: "x", enforcement: "required" },
        { courseId: "c", prerequisiteCourseId: "y", enforcement: "required" },
        { courseId: "y", prerequisiteCourseId: "x", enforcement: "required" },
      ],
    });
    const layout = buildEgoLayout(g, "c");
    expect(layout?.edges).toHaveLength(2);
    expect(layout?.edges.every((e) => e.edge.from === "c" || e.edge.to === "c")).toBe(true);
  });

  it("keeps a pair on its strongest ring when two kinds join the same two courses", () => {
    const g = build({
      courses: [course({ id: "c" }), course({ id: "x" })],
      prerequisites: [{ courseId: "c", prerequisiteCourseId: "x", enforcement: "required" }],
      entities: [
        {
          slug: "e",
          name: "An entity",
          kind: "concept",
          courses: [
            { courseSlug: "c", note: "1" },
            { courseSlug: "x", note: "2" },
          ],
        },
      ],
    });
    const layout = buildEgoLayout(g, "c");
    expect(layout?.ringCounts).toEqual({ 1: 1, 2: 0, 3: 0 });
    // Both lines are still drawn: the entity edge carries a sentence the prerequisite does not.
    expect(layout?.edges).toHaveLength(2);
  });
});

describe("buildClusterLayout", () => {
  it("draws every course, so the whole-catalog view hides nothing", () => {
    const g = build({
      courses: [
        course({ id: "a", category: "History" }),
        course({ id: "b", category: "History" }),
        course({ id: "c", category: "Aviation" }),
      ],
    });
    const layout = buildClusterLayout(g);
    expect(layout.nodeCount).toBe(3);
    expect(layout.clusters.map((c) => c.category)).toEqual(["Aviation", "History"]);
  });

  it("centres a single category instead of orbiting an empty middle", () => {
    const g = build({ courses: [course({ id: "a" }), course({ id: "b" })] });
    const layout = buildClusterLayout(g, { width: 500, height: 500 });
    expect(layout.clusters[0]).toMatchObject({ cx: 250, cy: 250 });
  });

  it("is deterministic between two builds of the same catalog", () => {
    const g = build({
      courses: [course({ id: "a", category: "A" }), course({ id: "b", category: "B" })],
    });
    const one = buildClusterLayout(g);
    const two = buildClusterLayout(g);
    expect(one.clusters.map((c) => [c.category, c.cx, c.cy])).toEqual(
      two.clusters.map((c) => [c.category, c.cx, c.cy]),
    );
  });

  it("honours the toggles when drawing lines", () => {
    const g = build({
      courses: [course({ id: "a" }), course({ id: "b" })],
      prerequisites: [{ courseId: "b", prerequisiteCourseId: "a", enforcement: "recommended" }],
    });
    expect(buildClusterLayout(g).edges).toHaveLength(1);
    expect(buildClusterLayout(g, { kinds: ["required"] }).edges).toHaveLength(0);
  });
});

describe("categoryColor", () => {
  it("gives one category the same colour every time, and different categories different ones", () => {
    const cats = ["Aviation", "History", "Language"];
    expect(categoryColor("History", cats)).toBe(categoryColor("History", cats));
    expect(categoryColor("History", cats)).not.toBe(categoryColor("Aviation", cats));
  });

  it("returns a colour for a category it has never seen rather than undefined", () => {
    expect(categoryColor("Nowhere", ["Aviation"])).toMatch(/^#[0-9a-f]{6}$/i);
  });
});

describe("the real ENTITIES registry", () => {
  it("keeps entity slugs unique, so one entity cannot be counted twice", () => {
    const slugs = ENTITIES.map((e) => e.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("reports an entity declaring a single course as inert, since it can never form an edge", () => {
    const declaredSingle = ENTITIES.filter((e) => e.courses.length < 2).map((e) => e.slug);
    const g = build({
      courses: [...new Set(ENTITIES.flatMap((e) => e.courses.map((c) => c.courseSlug)))].map(
        (s, i) => course({ id: `c${i}`, slug: s, title: s }),
      ),
      entities: ENTITIES,
    });
    const inert = g.report.entityCoverage.filter((e) => e.isInert).map((e) => e.slug);
    expect(inert.sort()).toEqual(declaredSingle.sort());
  });

  it("carries a non-empty note on every link, which is what an entity edge says out loud", () => {
    for (const e of ENTITIES) {
      for (const link of e.courses) {
        expect(link.note.trim().length).toBeGreaterThan(0);
        expect(link.courseSlug.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("produces real edges when its courses exist, and flags them all as dangling when they do not", () => {
    const slugs = [...new Set(ENTITIES.flatMap((e) => e.courses.map((c) => c.courseSlug)))];
    const present = build({
      courses: slugs.map((s, i) => course({ id: `c${i}`, slug: s, title: s })),
      entities: ENTITIES,
    });
    expect(present.report.danglingEntityRefs).toHaveLength(0);
    expect(present.edges.length).toBeGreaterThan(0);

    const absent = build({ courses: [course({ id: "x", slug: "unrelated" })], entities: ENTITIES });
    expect(absent.edges).toHaveLength(0);
    expect(absent.report.danglingEntityRefs).toHaveLength(
      ENTITIES.reduce((n, e) => n + e.courses.length, 0),
    );
  });
});
