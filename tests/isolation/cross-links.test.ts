import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  CROSS_LINK_CANDIDATES,
  buildCrossLinkTargets,
  crossLinkKey,
  crossLinkTarget,
  groupedCrossLinks,
  isKnownCandidate,
  relatedCourseLinks,
  type CourseLocationRow,
  type CrossLinkCandidate,
} from "@/lib/cross-links";
import { detectMentions, eligibleTargets, mentionPattern } from "@/lib/cross-link-detect";
import { excerptForPattern } from "@/lib/lesson-excerpt";
import { crossLinkGroupSummary } from "@/lib/review-lists";

// Tenant isolation and honesty gates for approved cross-course links (/admin/cross-links).
//
// THE RISK THIS GUARDS, and it is the same shape as the citation registry's, one step more
// dangerous. The candidate list is GLOBAL committed data: one course mentioning another is a
// property of the text, so the same registry is compiled into every school. The DECISION is per
// tenant, and what an approved decision produces is a LINK A LEARNER CLICKS. Two things must
// therefore be true, and neither is true by construction:
//
//   1. A decision made on school A is invisible on school B. That is the database half, asserted
//      against a real database in cross-links.db.test.ts and by reading the source below.
//   2. Even inside one school, a link is offered ONLY to a course that school actually hosts,
//      publishes, and can address unambiguously. Otherwise the "related course" is a 404, or a claim
//      that this brand teaches something it does not. That is the pure half, exercised directly.
//
// The rule when any of that fails is SHOW NOTHING. A learner was never told a candidate existed, so
// there is nothing to explain to them, and a broken link is a worse answer than no link.
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

const ROW: CourseLocationRow = {
  courseId: "c-1",
  courseSlug: "who-gets-named",
  courseTitle: "Who Gets Named",
  username: "bam",
  isPublished: true,
};

describe("an approved link is only ever offered inside the tenant that hosts the target", () => {
  it("links to a hosted, published, unambiguous course", () => {
    const index = buildCrossLinkTargets([ROW]);
    const target = crossLinkTarget(index, "who-gets-named");
    expect(target.href).toBe("/bam/who-gets-named");
    expect(target.note).toBeNull();
    expect(relatedCourseLinks(["who-gets-named"], index)).toEqual([
      { href: "/bam/who-gets-named", title: "Who Gets Named", courseSlug: "who-gets-named" },
    ]);
  });

  it("renders NOTHING for a course this school does not host", () => {
    // The realistic case: BVC's owner approved the link, and the same registry compiles into a
    // white-label school that has never heard of that course. An empty index is what the scoped
    // lookup returns there.
    const index = buildCrossLinkTargets([]);
    const target = crossLinkTarget(index, "who-gets-named");
    expect(target.href).toBeNull();
    expect(target.note).toMatch(/does not host/i);
    expect(relatedCourseLinks(["who-gets-named"], index)).toEqual([]);
  });

  it("renders nothing for a slug two instructors in one school share", () => {
    // Same rule as getCourseByIdOrSlug and lesson-links: /{username}/{slug} cannot say which course
    // is meant, so it addresses neither.
    const index = buildCrossLinkTargets([ROW, { ...ROW, courseId: "c-2", username: "other" }]);
    const target = crossLinkTarget(index, "who-gets-named");
    expect(target.href).toBeNull();
    expect(target.note).toMatch(/share that slug/i);
    expect(relatedCourseLinks(["who-gets-named"], index)).toEqual([]);
  });

  it("renders nothing for an unpublished target", () => {
    const index = buildCrossLinkTargets([{ ...ROW, isPublished: false }]);
    expect(crossLinkTarget(index, "who-gets-named").href).toBeNull();
    expect(crossLinkTarget(index, "who-gets-named").note).toMatch(/not published/i);
    expect(relatedCourseLinks(["who-gets-named"], index)).toEqual([]);
  });

  it("renders nothing when the instructor has no public username", () => {
    const index = buildCrossLinkTargets([{ ...ROW, username: null }]);
    expect(crossLinkTarget(index, "who-gets-named").href).toBeNull();
    expect(relatedCourseLinks(["who-gets-named"], index)).toEqual([]);
  });

  it("does not mistake two rows for one course for an ambiguous slug", () => {
    const index = buildCrossLinkTargets([ROW, { ...ROW }]);
    expect(crossLinkTarget(index, "who-gets-named").href).toBe("/bam/who-gets-named");
  });

  it("drops duplicates and keeps only what resolves, in title order", () => {
    const index = buildCrossLinkTargets([
      ROW,
      {
        courseId: "c-9",
        courseSlug: "abolition",
        courseTitle: "Abolition Geographies",
        username: "bam",
        isPublished: true,
      },
    ]);
    const links = relatedCourseLinks(
      ["who-gets-named", "who-gets-named", "abolition", "not-hosted-here"],
      index,
    );
    expect(links.map((l) => l.title)).toEqual(["Abolition Geographies", "Who Gets Named"]);
  });
});

describe("the decision path cannot be widened by a client", () => {
  const candidate: CrossLinkCandidate = {
    sourceCourseSlug: "architecture",
    sourceCourseTitle: "Architecture",
    sourceLessonSlug: "tuskegee",
    sourceLessonTitle: "Tuskegee",
    targetCourseSlug: "who-gets-named",
    targetCourseTitle: "Who Gets Named",
    via: "title",
    sentence: "The argument in Who Gets Named applies to the campus itself.",
  };

  it("keys a decision on the triple, so a row and a registry entry match without a stored key", () => {
    expect(crossLinkKey(candidate)).toBe("architecture|tuskegee|who-gets-named");
  });

  it("accepts only triples the registry actually found", () => {
    expect(isKnownCandidate(candidate, [candidate])).toBe(true);
    // The attack the API's registry check exists for: the render path reads the approvals table
    // directly, so an approval minted for an arbitrary pair of slugs would put a link on a lesson
    // that never mentioned that course.
    expect(isKnownCandidate({ ...candidate, targetCourseSlug: "anything-else" }, [candidate])).toBe(
      false,
    );
    expect(isKnownCandidate({ ...candidate, sourceLessonSlug: "other-lesson" }, [candidate])).toBe(
      false,
    );
  });

  it("gates the API on the platform owner, the registry, and a reason to dismiss", () => {
    const route = src("src/app/api/admin/cross-links/route.ts");
    expect(route).toMatch(/isPlatformOwner/);
    expect(route).toMatch(/isKnownCandidate/);
    // The tenant comes from the request host via apiContext, never from the body.
    expect(route).toMatch(/apiContext\(\)/);
    expect(route).not.toMatch(/tenantId:\s*(parsed|body)/);
    expect(route).toMatch(/Say why before dismissing/);
  });

  it("reads and writes decisions only through the tenant-scoped DAL", () => {
    const queries = src("src/db/queries/cross-links.ts");
    // Every statement in the file filters the tenant. Counted rather than eyeballed: a new query
    // added without one is the whole failure mode.
    const statements = queries.match(/\.(select|insert|delete)\(/g) ?? [];
    expect(statements.length).toBeGreaterThan(0);
    expect(queries).not.toMatch(/from\(crossLink\w+\)\s*\.where\(eq\((?!crossLink\w+\.tenantId)/);
    expect(queries.match(/tenantId/g)?.length ?? 0).toBeGreaterThanOrEqual(statements.length);

    const page = src("src/app/(tenant)/admin/cross-links/page.tsx");
    expect(page).toMatch(/requirePlatformOwner\(\)/);
    expect(page).toMatch(/getScopedDb\(\)/);
    expect(page).toMatch(/sdb\.listCourseLocations/);
  });

  it("never lets the render path consult the dismissals table", () => {
    // The two-table shape only helps if the reading half honours it: the lesson page asks one
    // question ("what did the owner approve here"), and there is no column on that table whose
    // value could turn a row into a rejection.
    const queries = src("src/db/queries/cross-links.ts");
    const render = queries.slice(queries.indexOf("export async function listApprovedCrossLinkTargets"));
    const body = render.slice(0, render.indexOf("\n}\n"));
    expect(body).toMatch(/crossLinkApprovals/);
    expect(body).not.toMatch(/crossLinkDismissals/);

    const lesson = src("src/app/(tenant)/[username]/[courseSlug]/lesson/[lessonSlug]/page.tsx");
    expect(lesson).toMatch(/listApprovedCrossLinkTargets/);
    expect(lesson).not.toMatch(/[Dd]ismissal/);
  });
});

describe("a candidate is evidence, not a guess", () => {
  const LESSON = `## The campus

Robert R. Taylor drew the plan. The argument in Who Gets Named applies to the campus itself, since
the buildings carry donors' names and the builders' names are absent.

## Sources

- Weiss, E. (2012). *Robert R. Taylor and Tuskegee*. NewSouth Books.`;

  it("quotes the sentence the mention sits in", () => {
    const sentence = excerptForPattern(
      LESSON,
      mentionPattern({ slug: "who-gets-named", title: "Who Gets Named" }, "title"),
    );
    expect(sentence).toMatch(/^The argument in Who Gets Named applies/);
    expect(sentence).not.toMatch(/Robert R. Taylor drew the plan/);
  });

  it("matches a title case-sensitively, so ordinary English is not a mention", () => {
    const targets = eligibleTargets([{ slug: "the-match", title: "The Match" }]);
    expect(detectMentions("They lost the match in three sets.", "tennis", targets)).toEqual([]);
    expect(
      detectMentions("The Match tells that story in full.", "tennis", targets).map((m) => m.via),
    ).toEqual(["title"]);
  });

  it("says nothing about a mention that is already linked", () => {
    const targets = eligibleTargets([{ slug: "who-gets-named", title: "Who Gets Named" }]);
    const linked = "See [Who Gets Named](/bam/who-gets-named) for the argument.";
    expect(detectMentions(linked, "architecture", targets)).toEqual([]);
  });

  it("skips a one-word title and a one-word slug, which match ordinary English", () => {
    expect(eligibleTargets([{ slug: "acting", title: "Acting" }])).toEqual([]);
    const targets = eligibleTargets([{ slug: "acting", title: "Acting For Screen" }]);
    // The title does not appear; the bare slug must not be enough on its own.
    expect(detectMentions("She was acting on instinct.", "theatre", targets)).toEqual([]);
  });

  it("finds no sentence for a title that only appears in a Sources block", () => {
    const body = `## Body\n\nNothing here.\n\n## Sources\n\n- Who Gets Named (2020).`;
    expect(
      excerptForPattern(body, mentionPattern({ slug: "wgn", title: "Who Gets Named" }, "title")),
    ).toBeNull();
  });
});

describe("the committed registry", () => {
  it("carries a quotable sentence on every candidate and never links a course to itself", () => {
    for (const c of CROSS_LINK_CANDIDATES) {
      expect(c.sentence.trim().length).toBeGreaterThan(0);
      expect(c.sourceCourseSlug).not.toBe(c.targetCourseSlug);
      expect(c.sourceLessonSlug.trim().length).toBeGreaterThan(0);
    }
  });

  it("holds one entry per triple", () => {
    const keys = CROSS_LINK_CANDIDATES.map(crossLinkKey);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("groups by the course doing the mentioning", () => {
    const groups = groupedCrossLinks([
      {
        sourceCourseSlug: "a",
        sourceCourseTitle: "A course",
        sourceLessonSlug: "one",
        sourceLessonTitle: "One",
        targetCourseSlug: "b",
        targetCourseTitle: "B",
        via: "title",
        sentence: "s",
      },
      {
        sourceCourseSlug: "a",
        sourceCourseTitle: "A course",
        sourceLessonSlug: "two",
        sourceLessonTitle: "Two",
        targetCourseSlug: "c",
        targetCourseTitle: "C",
        via: "slug",
        sentence: "s",
      },
    ]);
    expect(groups).toHaveLength(1);
    expect(groups[0].candidates).toHaveLength(2);
  });

  it("counts a dismissed candidate as decided, not as outstanding work", () => {
    expect(crossLinkGroupSummary({ total: 8, open: 3 })).toBe("8 mentions, 3 to review");
    expect(crossLinkGroupSummary({ total: 8, open: 0 })).toBe("8 mentions, all decided");
    expect(crossLinkGroupSummary({ total: 0, open: 0 })).toBe("no mentions found");
  });
});
