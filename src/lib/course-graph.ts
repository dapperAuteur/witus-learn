// The course connection graph (plans/57), built PURE and DB-free on purpose.
//
// The caller hands in the courses it already fetched (tenant-scoped, via ScopedDb), the
// prerequisite rows for those courses, and the ENTITIES registry. This module turns them into
// `{ nodes, edges }` plus the orphan-and-weak-link report, and knows nothing about the database,
// the request, or the tenant. Two payoffs: it can never widen the tenant boundary on its own, and
// the whole thing is exercisable offline by the unit suite.
//
// DERIVED AT REQUEST TIME, never stored (plans/57 §3). There is no `course_graph` table, no
// migration, no cron, no cache. A new course appears on the next page load; a prerequisite added in
// /admin/paths appears on the next page load. The one honest gap is that ENTITIES is a code
// constant, so entity edges move on DEPLOY, not on save. The page says so out loud.

/** Edge kinds, strongest first. The ring number in the ego view is the index in this list plus one. */
export type EdgeKind = "required" | "recommended" | "entity";

export const EDGE_KINDS: EdgeKind[] = ["required", "recommended", "entity"];

export const EDGE_KIND_LABEL: Record<EdgeKind, string> = {
  required: "Required prerequisite",
  recommended: "Recommended prerequisite",
  entity: "Shared entity",
};

/** Ring 1 is the innermost (strongest) tie. Ring 4 (semantic / CYOA) is deliberately not built. */
export const RING_OF: Record<EdgeKind, number> = { required: 1, recommended: 2, entity: 3 };

export const UNCATEGORISED = "Uncategorised";

// ── Inputs ───────────────────────────────────────────────────────────────────

export interface GraphCourseInput {
  id: string;
  slug: string | null;
  title: string;
  category: string | null;
  seriesTitle: string | null;
  isPublished: boolean;
}

export interface PrerequisiteEdgeInput {
  /** The course that HAS the prerequisite (the dependent). */
  courseId: string;
  /** The course that must (or should) come first. */
  prerequisiteCourseId: string;
  /** "required" | "recommended". Anything else is ignored; the DB CHECK allows only those two. */
  enforcement: string;
}

/** The shape this module needs from `src/lib/entities.ts`, narrowed so tests can build fixtures. */
export interface EntityInput {
  slug: string;
  name: string;
  kind: string;
  courses: { courseSlug: string; note: string }[];
}

export interface BuildGraphInput {
  courses: GraphCourseInput[];
  prerequisites: PrerequisiteEdgeInput[];
  entities: EntityInput[];
}

// ── Outputs ──────────────────────────────────────────────────────────────────

export interface GraphNode {
  id: string;
  slug: string | null;
  title: string;
  /** Never null: a course with no category is grouped under "Uncategorised" so it still clusters. */
  category: string;
  seriesTitle: string | null;
  isPublished: boolean;
  /** How many DISTINCT other courses this one touches, across every edge kind. */
  degree: number;
}

export interface GraphEdge {
  kind: EdgeKind;
  /**
   * DIRECTED for the two prerequisite kinds: `from` is the course that comes FIRST (the
   * prerequisite) and `to` is the course that needs it, which is the direction an arrowhead
   * should point. Entity edges are undirected; they are stored with the alphabetically smaller
   * node id as `from` purely so a pair is deduplicated consistently.
   */
  from: string;
  to: string;
  /** Set on entity edges only: the entity that joins the two courses. */
  entitySlug?: string;
  entityName?: string;
  /** One line a human can read in the report list, so the SVG is never the only way to see an edge. */
  label: string;
}

export interface OrphanRow {
  id: string;
  slug: string | null;
  title: string;
  category: string;
}

export interface WeakLinkRow extends OrphanRow {
  /** The single course it touches. */
  neighbourTitle: string;
  neighbourKind: EdgeKind;
}

export interface CategoryStatRow {
  category: string;
  courses: number;
  /** Edges where both ends sit in this category. */
  internalEdges: number;
  /** Edges with exactly one end in this category. Zero means the category is an island. */
  outboundEdges: number;
  /** The other categories it reaches, sorted, for the report line. */
  reaches: string[];
  isIsland: boolean;
}

export interface EntityCoverageRow {
  slug: string;
  name: string;
  kind: string;
  /** How many course slugs the registry declares for this entity. */
  declared: number;
  /** How many of those resolve to a course in this catalog. */
  resolved: number;
  resolvedTitles: string[];
  /** Declared slugs that resolve to nothing here. */
  dangling: string[];
  /**
   * True when fewer than two courses resolve. The entity page hides an entity with fewer than two
   * of the tenant's published courses, so this one is invisible AND doing no work: it produces no
   * edge and no cross-course link. Worth seeing, and this is the only place it is visible.
   */
  isInert: boolean;
}

export interface DanglingEntityRefRow {
  entitySlug: string;
  entityName: string;
  courseSlug: string;
  note: string;
  /**
   * How many of this entity's OTHER course slugs did resolve here. The two cases read completely
   * differently and must not be presented as one number: a missing slug on an entity that is
   * otherwise present is probably a typo in the registry, while an entity none of whose courses
   * are in this school is simply not this school's subject. On a white-label school the second
   * case is every entity, so merging them would bury the real signal under noise.
   */
  entityResolvedHere: number;
}

export interface AsymmetryRow {
  fromTitle: string;
  toTitle: string;
  fromId: string;
  toId: string;
}

export interface GraphReport {
  totalCourses: number;
  publishedCourses: number;
  totalEdges: number;
  edgeCountByKind: Record<EdgeKind, number>;
  /** Published courses with zero edges of any kind. The thing you actually want to find. */
  orphans: OrphanRow[];
  /** Unpublished courses with zero edges. Counted, not listed: a draft is allowed to be alone. */
  unpublishedOrphanCount: number;
  /** Published courses touching exactly one other course. Connected, but by a single thread. */
  weakLinks: WeakLinkRow[];
  categories: CategoryStatRow[];
  categoryIslands: CategoryStatRow[];
  entityCoverage: EntityCoverageRow[];
  /** An ENTITIES courseSlug matching no course in this catalog. Nothing else catches these. */
  danglingEntityRefs: DanglingEntityRefRow[];
  /** A recommends B while B does not recommend A. Usually an authoring oversight. */
  asymmetries: AsymmetryRow[];
}

export interface CourseGraph {
  nodes: GraphNode[];
  edges: GraphEdge[];
  report: GraphReport;
  byId: Map<string, GraphNode>;
  /** Node ids this node shares an edge with, per kind. Ring assignment reads this. */
  neighbours: Map<string, Map<string, EdgeKind>>;
}

// ── Build ────────────────────────────────────────────────────────────────────

function pairKey(a: string, b: string): string {
  return a < b ? `${a} ${b}` : `${b} ${a}`;
}

function byTitle(a: { title: string }, b: { title: string }): number {
  return a.title.localeCompare(b.title);
}

/**
 * Turn courses + prerequisite rows + the entity registry into the graph and its report.
 *
 * Deterministic: nodes come back sorted by category then title, edges sorted by kind then by the
 * titles at each end. The same input always produces the same output, which is what makes a
 * screenshot of the graph comparable between two sessions.
 */
export function buildCourseGraph(input: BuildGraphInput): CourseGraph {
  const nodes: GraphNode[] = input.courses
    .map((c) => ({
      id: c.id,
      slug: c.slug,
      title: c.title,
      category: c.category?.trim() || UNCATEGORISED,
      seriesTitle: c.seriesTitle,
      isPublished: c.isPublished,
      degree: 0,
    }))
    .sort((a, b) => a.category.localeCompare(b.category) || byTitle(a, b));

  const byId = new Map(nodes.map((n) => [n.id, n]));

  // A slug is unique per (tenant, instructor), not per tenant, so two instructors in one school
  // could share one. If that ever happens the entity edge is ambiguous, so we resolve to the FIRST
  // match in the sorted order above and stay deterministic rather than picking arbitrarily.
  const bySlug = new Map<string, GraphNode>();
  for (const n of nodes) {
    if (n.slug && !bySlug.has(n.slug)) bySlug.set(n.slug, n);
  }

  const edges: GraphEdge[] = [];
  const seenEdge = new Set<string>();

  // Prerequisite edges: directed, live from the database.
  for (const p of input.prerequisites) {
    if (p.enforcement !== "required" && p.enforcement !== "recommended") continue;
    const from = byId.get(p.prerequisiteCourseId);
    const to = byId.get(p.courseId);
    // A prerequisite pointing at a course outside this catalog cannot be drawn. That is not a
    // dangling reference in the ENTITIES sense (the foreign key guarantees the row exists); it
    // means the caller handed us a partial course list, so we skip it rather than invent a node.
    if (!from || !to || from.id === to.id) continue;
    const kind: EdgeKind = p.enforcement;
    const key = `${kind} ${from.id} ${to.id}`;
    if (seenEdge.has(key)) continue;
    seenEdge.add(key);
    edges.push({
      kind,
      from: from.id,
      to: to.id,
      label:
        kind === "required"
          ? `${from.title} is required before ${to.title}`
          : `${from.title} is recommended before ${to.title}`,
    });
  }

  // Entity edges: undirected, one per (entity, pair of courses). Two courses that share three
  // entities get three edges, because each carries a different human sentence.
  const danglingEntityRefs: DanglingEntityRefRow[] = [];
  const entityCoverage: EntityCoverageRow[] = [];

  for (const entity of input.entities) {
    const resolved: GraphNode[] = [];
    const dangling: string[] = [];
    const danglingLinks: { courseSlug: string; note: string }[] = [];
    for (const link of entity.courses) {
      const node = bySlug.get(link.courseSlug);
      if (node) {
        if (!resolved.some((r) => r.id === node.id)) resolved.push(node);
      } else {
        dangling.push(link.courseSlug);
        danglingLinks.push(link);
      }
    }

    // Counted only once the whole entity has been walked, because how a missing slug reads depends
    // on whether the REST of the entity is here.
    for (const link of danglingLinks) {
      danglingEntityRefs.push({
        entitySlug: entity.slug,
        entityName: entity.name,
        courseSlug: link.courseSlug,
        note: link.note,
        entityResolvedHere: resolved.length,
      });
    }

    entityCoverage.push({
      slug: entity.slug,
      name: entity.name,
      kind: entity.kind,
      declared: entity.courses.length,
      resolved: resolved.length,
      resolvedTitles: resolved.map((r) => r.title),
      dangling,
      isInert: resolved.length < 2,
    });

    for (let i = 0; i < resolved.length; i += 1) {
      for (let j = i + 1; j < resolved.length; j += 1) {
        const a = resolved[i];
        const b = resolved[j];
        const [from, to] = a.id < b.id ? [a, b] : [b, a];
        const key = `entity ${entity.slug} ${pairKey(a.id, b.id)}`;
        if (seenEdge.has(key)) continue;
        seenEdge.add(key);
        edges.push({
          kind: "entity",
          from: from.id,
          to: to.id,
          entitySlug: entity.slug,
          entityName: entity.name,
          label: `${from.title} and ${to.title} both cover ${entity.name}`,
        });
      }
    }
  }

  edges.sort(
    (a, b) =>
      EDGE_KINDS.indexOf(a.kind) - EDGE_KINDS.indexOf(b.kind) ||
      (byId.get(a.from)?.title ?? "").localeCompare(byId.get(b.from)?.title ?? "") ||
      (byId.get(a.to)?.title ?? "").localeCompare(byId.get(b.to)?.title ?? "") ||
      (a.entityName ?? "").localeCompare(b.entityName ?? ""),
  );

  // Neighbours, keeping the STRONGEST kind per pair: a pair joined by both a required prerequisite
  // and a shared entity sits on ring 1, not ring 3.
  const neighbours = new Map<string, Map<string, EdgeKind>>();
  for (const n of nodes) neighbours.set(n.id, new Map());
  for (const e of edges) {
    const a = neighbours.get(e.from);
    const b = neighbours.get(e.to);
    if (!a || !b) continue;
    const rank = EDGE_KINDS.indexOf(e.kind);
    const keepStrongest = (m: Map<string, EdgeKind>, other: string) => {
      const existing = m.get(other);
      if (existing == null || EDGE_KINDS.indexOf(existing) > rank) m.set(other, e.kind);
    };
    keepStrongest(a, e.to);
    keepStrongest(b, e.from);
  }
  for (const n of nodes) n.degree = neighbours.get(n.id)?.size ?? 0;

  // ── Report ─────────────────────────────────────────────────────────────────

  const published = nodes.filter((n) => n.isPublished);

  const orphans: OrphanRow[] = published
    .filter((n) => n.degree === 0)
    .map((n) => ({ id: n.id, slug: n.slug, title: n.title, category: n.category }));

  const unpublishedOrphanCount = nodes.filter((n) => !n.isPublished && n.degree === 0).length;

  const weakLinks: WeakLinkRow[] = published
    .filter((n) => n.degree === 1)
    .map((n) => {
      const only = [...(neighbours.get(n.id) ?? new Map<string, EdgeKind>())][0];
      const [otherId, kind] = only;
      return {
        id: n.id,
        slug: n.slug,
        title: n.title,
        category: n.category,
        neighbourTitle: byId.get(otherId)?.title ?? otherId,
        neighbourKind: kind,
      };
    });

  const categoryNames = [...new Set(nodes.map((n) => n.category))].sort((a, b) => a.localeCompare(b));
  const categoryOf = (id: string) => byId.get(id)?.category ?? UNCATEGORISED;

  const categories: CategoryStatRow[] = categoryNames.map((category) => {
    const courseCount = nodes.filter((n) => n.category === category).length;
    let internalEdges = 0;
    let outboundEdges = 0;
    const reaches = new Set<string>();
    for (const e of edges) {
      const ca = categoryOf(e.from);
      const cb = categoryOf(e.to);
      if (ca === category && cb === category) internalEdges += 1;
      else if (ca === category || cb === category) {
        outboundEdges += 1;
        reaches.add(ca === category ? cb : ca);
      }
    }
    return {
      category,
      courses: courseCount,
      internalEdges,
      outboundEdges,
      reaches: [...reaches].sort((a, b) => a.localeCompare(b)),
      isIsland: outboundEdges === 0,
    };
  });

  // Asymmetry is only a smell for RECOMMENDED edges. A required prerequisite is one-way by
  // definition (that is the whole point of an ordering), so flagging those would be noise.
  const recommendedPairs = new Set(
    edges.filter((e) => e.kind === "recommended").map((e) => `${e.from} ${e.to}`),
  );
  const asymmetries: AsymmetryRow[] = edges
    .filter((e) => e.kind === "recommended" && !recommendedPairs.has(`${e.to} ${e.from}`))
    .map((e) => ({
      fromId: e.from,
      toId: e.to,
      fromTitle: byId.get(e.from)?.title ?? e.from,
      toTitle: byId.get(e.to)?.title ?? e.to,
    }));

  const edgeCountByKind: Record<EdgeKind, number> = { required: 0, recommended: 0, entity: 0 };
  for (const e of edges) edgeCountByKind[e.kind] += 1;

  return {
    nodes,
    edges,
    byId,
    neighbours,
    report: {
      totalCourses: nodes.length,
      publishedCourses: published.length,
      totalEdges: edges.length,
      edgeCountByKind,
      orphans,
      unpublishedOrphanCount,
      weakLinks,
      categories,
      categoryIslands: categories.filter((c) => c.isIsland),
      entityCoverage: entityCoverage.sort(
        (a, b) => b.resolved - a.resolved || a.name.localeCompare(b.name),
      ),
      danglingEntityRefs,
      asymmetries,
    },
  };
}

// ── Colour ───────────────────────────────────────────────────────────────────

// A small colour-blind-friendly set, same spirit as the timeline lanes. Assigned by the category's
// POSITION in the sorted category list, so a category keeps its colour between loads and the
// picture is comparable. Colour never carries meaning on its own: every node is labelled, and every
// node and edge also appears in the report tables below the graph.
const CATEGORY_COLORS = [
  "#0f766e",
  "#b45309",
  "#7c3aed",
  "#be123c",
  "#1d4ed8",
  "#4d7c0f",
  "#a16207",
  "#0e7490",
  "#9333ea",
  "#c2410c",
];

export function categoryColor(category: string, allCategories: string[]): string {
  const i = allCategories.indexOf(category);
  return CATEGORY_COLORS[(i < 0 ? 0 : i) % CATEGORY_COLORS.length];
}

// ── Ego-centric radial layout ────────────────────────────────────────────────
//
// Trigonometry, not a force simulation (plans/57 §4). Three reasons it is the better tool here:
// the same course always renders the same way so a screenshot is comparable; it needs no new
// dependency (`d3-force` is not installed and is not being added); and it renders on the server.

export interface PlacedNode {
  node: GraphNode;
  x: number;
  y: number;
  /** 0 = the course at the centre. */
  ring: number;
  /** How this node is tied to the centre. Undefined on the centre itself. */
  kind?: EdgeKind;
  color: string;
}

export interface PlacedEdge {
  edge: GraphEdge;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface EgoLayout {
  width: number;
  height: number;
  centre: PlacedNode;
  placed: PlacedNode[];
  edges: PlacedEdge[];
  /** Neighbour count per ring, for the legend and the empty-state copy. */
  ringCounts: Record<number, number>;
}

export interface LayoutOptions {
  width?: number;
  height?: number;
  /** Edge kinds to draw. Anything not listed is left out of both the picture and the rings. */
  kinds?: EdgeKind[];
}

const RING_RADIUS: Record<number, number> = { 1: 110, 2: 190, 3: 268 };

/**
 * Place `centreId` in the middle and its neighbours on rings by tie strength, evenly spaced.
 *
 * The first neighbour on each ring sits at the top (angle -90 degrees) and the rest run clockwise,
 * in the title order the graph already fixed, so the arrangement is reproducible.
 */
export function buildEgoLayout(
  graph: CourseGraph,
  centreId: string,
  opts: LayoutOptions = {},
): EgoLayout | null {
  const centreNode = graph.byId.get(centreId);
  if (!centreNode) return null;

  const width = opts.width ?? 720;
  const height = opts.height ?? 720;
  const kinds = opts.kinds ?? EDGE_KINDS;
  const cx = width / 2;
  const cy = height / 2;
  const allCategories = graph.report.categories.map((c) => c.category);

  const centre: PlacedNode = {
    node: centreNode,
    x: cx,
    y: cy,
    ring: 0,
    color: categoryColor(centreNode.category, allCategories),
  };

  const byRing = new Map<number, GraphNode[]>();
  for (const [otherId, kind] of graph.neighbours.get(centreId) ?? new Map<string, EdgeKind>()) {
    if (!kinds.includes(kind)) continue;
    const other = graph.byId.get(otherId);
    if (!other) continue;
    const ring = RING_OF[kind];
    const list = byRing.get(ring) ?? [];
    list.push(other);
    byRing.set(ring, list);
  }

  const placed: PlacedNode[] = [centre];
  const ringCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0 };
  const positions = new Map<string, PlacedNode>([[centreNode.id, centre]]);

  for (const ring of [1, 2, 3]) {
    const members = (byRing.get(ring) ?? []).sort(byTitle);
    ringCounts[ring] = members.length;
    const r = RING_RADIUS[ring];
    members.forEach((node, i) => {
      // Start at the top and go clockwise. A single neighbour sits straight above the centre.
      const angle = (i / members.length) * Math.PI * 2 - Math.PI / 2;
      const p: PlacedNode = {
        node,
        x: round(cx + r * Math.cos(angle)),
        y: round(cy + r * Math.sin(angle)),
        ring,
        kind: EDGE_KINDS[ring - 1],
        color: categoryColor(node.category, allCategories),
      };
      placed.push(p);
      positions.set(node.id, p);
    });
  }

  const edges: PlacedEdge[] = graph.edges
    .filter(
      (e) =>
        kinds.includes(e.kind) &&
        (e.from === centreId || e.to === centreId) &&
        positions.has(e.from) &&
        positions.has(e.to),
    )
    .map((e) => {
      const a = positions.get(e.from) as PlacedNode;
      const b = positions.get(e.to) as PlacedNode;
      return { edge: e, x1: a.x, y1: a.y, x2: b.x, y2: b.y };
    });

  return { width, height, centre, placed, edges, ringCounts };
}

// ── Whole-catalog category clusters ──────────────────────────────────────────

export interface ClusterGroup {
  category: string;
  color: string;
  cx: number;
  cy: number;
  radius: number;
  nodes: PlacedNode[];
}

export interface ClusterLayout {
  width: number;
  height: number;
  clusters: ClusterGroup[];
  edges: PlacedEdge[];
  /** Courses drawn, which is every course: nothing is dropped from the picture. */
  nodeCount: number;
}

/**
 * The whole catalog, clustered by category rather than as free-floating nodes. Categories sit on
 * one big circle in the order the report already sorted them; each category's courses sit on a
 * smaller circle inside it, sized so a big category does not swallow its neighbours. Deterministic
 * for the same reason the ego view is.
 */
export function buildClusterLayout(graph: CourseGraph, opts: LayoutOptions = {}): ClusterLayout {
  const width = opts.width ?? 1000;
  const height = opts.height ?? 1000;
  const kinds = opts.kinds ?? EDGE_KINDS;
  const cx = width / 2;
  const cy = height / 2;

  const allCategories = graph.report.categories.map((c) => c.category);
  const positions = new Map<string, PlacedNode>();

  const outer = Math.min(width, height) / 2 - 120;
  const clusters: ClusterGroup[] = allCategories.map((category, ci) => {
    const members = graph.nodes.filter((n) => n.category === category);
    const angle = (ci / Math.max(allCategories.length, 1)) * Math.PI * 2 - Math.PI / 2;
    // One category alone belongs in the middle, not orbiting an empty centre.
    const clusterCx = allCategories.length === 1 ? cx : round(cx + outer * Math.cos(angle));
    const clusterCy = allCategories.length === 1 ? cy : round(cy + outer * Math.sin(angle));
    // Grow the cluster with its member count but cap it, so a 60-course category stays on canvas.
    const radius = Math.min(95, 16 + members.length * 3);
    const color = categoryColor(category, allCategories);

    const nodes = members.map((node, i) => {
      const a = (i / Math.max(members.length, 1)) * Math.PI * 2 - Math.PI / 2;
      // A lone course sits at its cluster's centre instead of one radius off to the side.
      const r = members.length === 1 ? 0 : radius;
      const p: PlacedNode = {
        node,
        x: round(clusterCx + r * Math.cos(a)),
        y: round(clusterCy + r * Math.sin(a)),
        ring: 0,
        color,
      };
      positions.set(node.id, p);
      return p;
    });

    return { category, color, cx: clusterCx, cy: clusterCy, radius, nodes };
  });

  const edges: PlacedEdge[] = graph.edges
    .filter((e) => kinds.includes(e.kind) && positions.has(e.from) && positions.has(e.to))
    .map((e) => {
      const a = positions.get(e.from) as PlacedNode;
      const b = positions.get(e.to) as PlacedNode;
      return { edge: e, x1: a.x, y1: a.y, x2: b.x, y2: b.y };
    });

  return { width, height, clusters, edges, nodeCount: positions.size };
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}
