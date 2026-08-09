import type { ClusterLayout, EdgeKind, EgoLayout } from "@/lib/course-graph";

// Server-rendered SVG for the connection graph (plans/57 §4). Deterministic trigonometry, no
// force simulation and no new dependency: `d3-force` is not installed and is not being added. The
// same course always renders the same way, so two screenshots taken a month apart are comparable.
//
// BOTH drawings are aria-hidden on purpose. They are a second view of data that is already fully
// present as text: the neighbour list sits directly under the ego view and the report tables carry
// every node and every edge as a link. Marking the SVG as an image with a long description would
// duplicate that list into a place a keyboard user cannot act on it.

/** Ring 1 solid with an arrowhead, ring 2 dashed with an arrowhead, ring 3 solid and unarrowed. */
const EDGE_STYLE: Record<EdgeKind, { stroke: string; dash?: string; width: number; arrow: boolean }> = {
  required: { stroke: "#525252", width: 2, arrow: true },
  recommended: { stroke: "#737373", width: 1.6, dash: "6 4", arrow: true },
  entity: { stroke: "#a3a3a3", width: 1.2, arrow: false },
};

function short(text: string, max: number): string {
  return text.length <= max ? text : `${text.slice(0, max - 1)}…`;
}

function Arrowheads() {
  return (
    <defs>
      <marker
        id="cg-arrow"
        viewBox="0 0 10 10"
        refX="16"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#525252" />
      </marker>
    </defs>
  );
}

export function EgoGraphSvg({ layout }: { layout: EgoLayout }) {
  const { width, height, centre, placed, edges } = layout;
  const cx = width / 2;
  const cy = height / 2;
  const neighbours = placed.filter((p) => p.ring > 0);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      className="h-auto w-[720px] max-w-none"
      role="presentation"
    >
      <Arrowheads />

      {/* Ring guides, faint. Their labels sit on the vertical so they never collide with a node. */}
      {[110, 190, 268].map((r) => (
        <circle
          key={r}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#d4d4d4"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
      ))}

      {edges.map((e, i) => {
        const style = EDGE_STYLE[e.edge.kind];
        return (
          <g key={`${e.edge.kind}-${e.edge.from}-${e.edge.to}-${i}`}>
            <line
              x1={e.x1}
              y1={e.y1}
              x2={e.x2}
              y2={e.y2}
              stroke={style.stroke}
              strokeWidth={style.width}
              strokeDasharray={style.dash}
              markerEnd={style.arrow ? "url(#cg-arrow)" : undefined}
            />
            {e.edge.entityName ? (
              <text
                x={(e.x1 + e.x2) / 2}
                y={(e.y1 + e.y2) / 2 - 4}
                textAnchor="middle"
                fontSize="9"
                fill="#737373"
              >
                {short(e.edge.entityName, 22)}
              </text>
            ) : null}
          </g>
        );
      })}

      {neighbours.map((p) => (
        <g key={p.node.id}>
          <circle cx={p.x} cy={p.y} r={9} fill={p.color} stroke="#ffffff" strokeWidth="2" />
          <text x={p.x} y={p.y + 22} textAnchor="middle" fontSize="10" fill="#404040">
            {short(p.node.title, 26)}
          </text>
        </g>
      ))}

      <circle cx={centre.x} cy={centre.y} r={15} fill={centre.color} stroke="#ffffff" strokeWidth="3" />
      <text
        x={centre.x}
        y={centre.y - 24}
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        fill="#171717"
      >
        {short(centre.node.title, 34)}
      </text>
    </svg>
  );
}

export function ClusterGraphSvg({ layout }: { layout: ClusterLayout }) {
  const { width, height, clusters, edges } = layout;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      className="h-auto w-[1000px] max-w-none"
      role="presentation"
    >
      <Arrowheads />

      {clusters.map((c) => (
        <g key={c.category}>
          <circle
            cx={c.cx}
            cy={c.cy}
            r={c.radius + 24}
            fill={c.color}
            fillOpacity="0.06"
            stroke={c.color}
            strokeOpacity="0.35"
            strokeWidth="1"
          />
          <text
            x={c.cx}
            y={c.cy - c.radius - 32}
            textAnchor="middle"
            fontSize="13"
            fontWeight="600"
            fill="#404040"
          >
            {short(c.category, 28)} ({c.nodes.length})
          </text>
        </g>
      ))}

      {edges.map((e, i) => {
        const style = EDGE_STYLE[e.edge.kind];
        return (
          <line
            key={`${e.edge.kind}-${e.edge.from}-${e.edge.to}-${i}`}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            stroke={style.stroke}
            strokeWidth={style.width}
            strokeDasharray={style.dash}
            markerEnd={style.arrow ? "url(#cg-arrow)" : undefined}
          />
        );
      })}

      {clusters.flatMap((c) =>
        c.nodes.map((p) => (
          <circle
            key={p.node.id}
            cx={p.x}
            cy={p.y}
            r={p.node.degree > 0 ? 5 : 3}
            fill={p.color}
            fillOpacity={p.node.degree > 0 ? 1 : 0.45}
            stroke="#ffffff"
            strokeWidth="1"
          />
        )),
      )}
    </svg>
  );
}
