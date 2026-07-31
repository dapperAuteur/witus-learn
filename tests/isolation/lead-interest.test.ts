import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  COURSE_NOTIFY_SOURCE,
  countByBundle,
  countByCourse,
  countBySource,
  countByTrack,
  entriesOf,
  filterInterest,
  interestQuery,
  readFilter,
  resolveCourseIds,
  type InterestBundle,
  type InterestCourse,
  type InterestLead,
} from "@/lib/lead-interest";

// The /admin/leads interest dashboard, guarded from both sides:
//
//   the filters must resolve ONLY against courses and bundles the caller already scoped to one
//   tenant (so a course id or bundle slug pasted in from another school selects nobody), and a
//   track or bundle filter must expand to exactly the right course set, no wider.
//
// The resolution itself is pure (src/lib/lead-interest.ts), so it runs offline. The two places
// where the tenant boundary has to be spelled into a page or a route are checked by reading the
// source, which is how this repo already guards its other invariants.
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

// One tenant's catalog. "Acme" ids exist only to be handed to a filter and rejected.
const COURSES: InterestCourse[] = [
  { id: "c-drone", title: "FAA Part 107", seriesSlug: "aviation", seriesTitle: "Aviation" },
  { id: "c-wx", title: "Aviation weather", seriesSlug: "aviation", seriesTitle: "Aviation" },
  { id: "c-knots", title: "Knot tying", seriesSlug: null, seriesTitle: null },
];

const BUNDLES: InterestBundle[] = [
  { slug: "flight-pack", title: "Flight pack", courseIds: ["c-drone", "c-wx"] },
  { slug: "outdoors", title: "Outdoors", courseIds: ["c-knots"] },
];

function notify(courseId: string, courseTitle: string, at: string) {
  return { source: COURSE_NOTIFY_SOURCE, courseId, courseTitle, at };
}

const LEADS: InterestLead[] = [
  {
    email: "ada@example.invalid",
    name: "Ada",
    source: COURSE_NOTIFY_SOURCE,
    createdAt: new Date("2026-07-01T00:00:00Z"),
    inquiries: [
      notify("c-drone", "FAA Part 107", "2026-07-01T00:00:00Z"),
      notify("c-wx", "Aviation weather", "2026-07-05T00:00:00Z"),
    ],
  },
  {
    email: "bob@example.invalid",
    name: null,
    source: COURSE_NOTIFY_SOURCE,
    createdAt: new Date("2026-07-02T00:00:00Z"),
    inquiries: [notify("c-knots", "Knot tying", "2026-07-02T00:00:00Z")],
  },
  {
    email: "cat@example.invalid",
    name: "Cat",
    source: "explore-pricing",
    createdAt: new Date("2026-07-03T00:00:00Z"),
    inquiries: [
      {
        source: "explore-pricing",
        role: "teacher",
        students: 30,
        message: "What does a class licence cost?",
        at: "2026-07-03T00:00:00Z",
      },
    ],
  },
  {
    // A plain newsletter signup: no inquiries at all.
    email: "dee@example.invalid",
    name: null,
    source: "home",
    createdAt: new Date("2026-07-04T00:00:00Z"),
    inquiries: [],
  },
];

describe("readFilter", () => {
  it("treats empty and 'all' as no filter, and takes the first of a repeated param", () => {
    expect(readFilter(undefined)).toBeNull();
    expect(readFilter("")).toBeNull();
    expect(readFilter("all")).toBeNull();
    expect(readFilter(" c-drone ")).toBe("c-drone");
    expect(readFilter(["c-drone", "c-wx"])).toBe("c-drone");
  });
});

describe("entriesOf", () => {
  it("synthesizes one entry for a lead with no inquiries, so a signup is still listed", () => {
    const e = entriesOf(LEADS[3]!);
    expect(e).toHaveLength(1);
    expect(e[0]!.source).toBe("home");
    expect(e[0]!.implicit).toBe(true);
    expect(e[0]!.courseId).toBeNull();
  });
});

describe("resolveCourseIds — the tenant boundary", () => {
  it("returns null when nothing narrows by course", () => {
    expect(resolveCourseIds({}, COURSES, BUNDLES)).toBeNull();
    expect(resolveCourseIds({ source: "explore-pricing" }, COURSES, BUNDLES)).toBeNull();
  });

  it("a course id this tenant does not own selects NOBODY (never everybody)", () => {
    const ids = resolveCourseIds({ course: "acme-secret-course" }, COURSES, BUNDLES);
    expect(ids).not.toBeNull();
    expect([...ids!]).toEqual([]);
  });

  it("a bundle slug this tenant does not own selects NOBODY", () => {
    const ids = resolveCourseIds({ bundle: "acme-bundle" }, COURSES, BUNDLES);
    expect([...ids!]).toEqual([]);
  });

  it("a track this tenant does not have selects NOBODY", () => {
    expect([...resolveCourseIds({ track: "acme-track" }, COURSES, BUNDLES)!]).toEqual([]);
  });

  it("a bundle cannot smuggle in a course id outside the tenant's own catalog", () => {
    const rogue: InterestBundle[] = [
      { slug: "flight-pack", title: "Flight pack", courseIds: ["c-drone", "acme-course"] },
    ];
    const ids = resolveCourseIds({ bundle: "flight-pack" }, COURSES, rogue);
    expect([...ids!].sort()).toEqual(["c-drone"]);
  });

  it("a track filter expands to every course in that series, and no more", () => {
    const ids = resolveCourseIds({ track: "aviation" }, COURSES, BUNDLES);
    expect([...ids!].sort()).toEqual(["c-drone", "c-wx"]);
  });

  it("a bundle filter expands to exactly that bundle's member courses", () => {
    expect([...resolveCourseIds({ bundle: "flight-pack" }, COURSES, BUNDLES)!].sort()).toEqual([
      "c-drone",
      "c-wx",
    ]);
    expect([...resolveCourseIds({ bundle: "outdoors" }, COURSES, BUNDLES)!]).toEqual(["c-knots"]);
  });

  it("several filters intersect rather than union", () => {
    const ids = resolveCourseIds({ track: "aviation", bundle: "outdoors" }, COURSES, BUNDLES);
    expect([...ids!]).toEqual([]);
    const both = resolveCourseIds({ track: "aviation", course: "c-wx" }, COURSES, BUNDLES);
    expect([...both!]).toEqual(["c-wx"]);
  });
});

describe("filterInterest", () => {
  const run = (filters: Parameters<typeof filterInterest>[0]["filters"]) =>
    filterInterest({ leads: LEADS, courses: COURSES, bundles: BUNDLES, filters }).map((r) => r.email);

  it("unfiltered lists everyone, newest activity first", () => {
    expect(run({})).toEqual([
      "ada@example.invalid", // latest entry 2026-07-05
      "dee@example.invalid", // 2026-07-04
      "cat@example.invalid", // 2026-07-03
      "bob@example.invalid", // 2026-07-02
    ]);
  });

  it("a course filter selects only the people who asked about that course", () => {
    expect(run({ course: "c-knots" })).toEqual(["bob@example.invalid"]);
  });

  it("a track filter selects anyone interested in ANY course in the track", () => {
    expect(run({ track: "aviation" })).toEqual(["ada@example.invalid"]);
  });

  it("a bundle filter selects anyone interested in ANY course the bundle contains", () => {
    expect(run({ bundle: "flight-pack" })).toEqual(["ada@example.invalid"]);
    expect(run({ bundle: "outdoors" })).toEqual(["bob@example.invalid"]);
  });

  it("a source filter separates 'wants this course' from 'asked about pricing'", () => {
    expect(run({ source: "explore-pricing" })).toEqual(["cat@example.invalid"]);
    expect(run({ source: COURSE_NOTIFY_SOURCE }).sort()).toEqual([
      "ada@example.invalid",
      "bob@example.invalid",
    ]);
  });

  it("carries only the MATCHING entries, so a filtered row does not show unrelated courses", () => {
    const [ada] = filterInterest({
      leads: LEADS,
      courses: COURSES,
      bundles: BUNDLES,
      filters: { course: "c-wx" },
    });
    expect(ada!.entries).toHaveLength(1);
    expect(ada!.entries[0]!.courseId).toBe("c-wx");
  });

  it("an unmatched filter yields an honest empty list, never the unfiltered one", () => {
    expect(run({ course: "acme-secret-course" })).toEqual([]);
    expect(run({ bundle: "acme-bundle" })).toEqual([]);
  });
});

describe("the demand board counts distinct PEOPLE", () => {
  it("by course, ties broken by title so the order is stable", () => {
    const counts = countByCourse(LEADS, COURSES);
    expect(counts.map((c) => [c.key, c.leads])).toEqual([
      ["c-wx", 1], // Aviation weather
      ["c-drone", 1], // FAA Part 107
      ["c-knots", 1], // Knot tying
    ]);
  });

  it("by course, sorts by demand descending", () => {
    const extra: InterestLead[] = [
      ...LEADS,
      {
        email: "fox@example.invalid",
        name: null,
        source: COURSE_NOTIFY_SOURCE,
        createdAt: new Date("2026-07-07T00:00:00Z"),
        inquiries: [notify("c-knots", "Knot tying", "2026-07-07T00:00:00Z")],
      },
    ];
    expect(countByCourse(extra, COURSES)[0]).toEqual({ key: "c-knots", label: "Knot tying", leads: 2 });
  });

  it("by track, counting a person once even when they want two courses in it", () => {
    expect(countByTrack(LEADS, COURSES)).toEqual([{ key: "aviation", label: "Aviation", leads: 1 }]);
  });

  it("by bundle", () => {
    expect(countByBundle(LEADS, COURSES, BUNDLES).map((c) => [c.key, c.leads])).toEqual([
      ["flight-pack", 1],
      ["outdoors", 1],
    ]);
  });

  it("by source, including the implicit entry of a lead with no inquiries", () => {
    const byKey = Object.fromEntries(countBySource(LEADS).map((c) => [c.key, c.leads]));
    expect(byKey[COURSE_NOTIFY_SOURCE]).toBe(2);
    expect(byKey["explore-pricing"]).toBe(1);
    expect(byKey["home"]).toBe(1);
  });

  it("drops a count for a course the tenant no longer has rather than showing a dead line", () => {
    const orphan: InterestLead[] = [
      {
        email: "eve@example.invalid",
        name: null,
        source: COURSE_NOTIFY_SOURCE,
        createdAt: new Date("2026-07-06T00:00:00Z"),
        inquiries: [notify("c-deleted", "Deleted course", "2026-07-06T00:00:00Z")],
      },
    ];
    expect(countByCourse(orphan, COURSES)).toEqual([]);
    // The person is still listed, so nobody is hidden.
    expect(
      filterInterest({ leads: orphan, courses: COURSES, bundles: BUNDLES, filters: {} }),
    ).toHaveLength(1);
  });
});

describe("interestQuery", () => {
  it("round-trips the filters the page and the CSV share", () => {
    expect(interestQuery({})).toBe("");
    expect(interestQuery({ track: "aviation", source: COURSE_NOTIFY_SOURCE })).toBe(
      "track=aviation&source=course-notify",
    );
  });
});

// ── Source-level guards: the tenant boundary is not something a filter can move ──

describe("the page and the CSV route are tenant-scoped and admin-gated", () => {
  const page = src("src/app/(tenant)/admin/leads/page.tsx");
  const route = src("src/app/api/admin/leads.csv/route.ts");
  const queries = src("src/db/queries/leads.ts");
  const bundleQueries = src("src/db/queries/bundles.ts");

  it("the page resolves the tenant server-side and requires a brand admin", () => {
    expect(page).toContain("requireTenant()");
    expect(page).toContain("requireBrandAdmin(tenant.id)");
    expect(page).toContain("loadTenantInterest(tenant.id)");
  });

  it("the page never reads a tenant from searchParams", () => {
    expect(page).not.toMatch(/sp\.tenant|searchParams\.get\("tenant"\)/);
  });

  it("the CSV route takes its tenant from the host (apiContext) and gates on isTenantAdmin", () => {
    expect(route).toContain("apiContext()");
    expect(route).toContain("isTenantAdmin(session, sdb.tenantId)");
    expect(route).toContain("loadTenantInterest(sdb.tenantId)");
    expect(route).not.toMatch(/searchParams\.get\("tenant"\)/);
  });

  it("the CSV route reuses the page's filter resolution, so the file matches the view", () => {
    expect(route).toContain("filterInterest(");
    for (const p of ["course", "track", "bundle", "source"]) {
      expect(route).toContain(`searchParams.get("${p}")`);
    }
  });

  it("every interest query filters on tenant_id", () => {
    expect(queries).toContain("eq(courses.tenantId, tenantId)");
    expect(queries).toContain("eq(leads.tenantId, tenantId)");
    expect(bundleQueries).toContain("eq(bundles.tenantId, tenantId)");
  });

  it("the jsonb-in-JS trade is documented rather than shipped silently", () => {
    expect(src("src/lib/lead-interest.ts")).toContain("SCALE HONESTY");
  });
});
