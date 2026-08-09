import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  buildLessonLinkIndex,
  courseHref,
  courseTitleFor,
  lessonHref,
  lessonTitleFor,
  reviewLocation,
  type LessonLocationRow,
} from "@/lib/lesson-links";
import {
  apaSignals,
  inTextCitationExcerpt,
  phraseAppearsIn,
  proseAroundNeedle,
  stripSourcesBlock,
} from "@/lib/lesson-excerpt";

// Tenant isolation for the "where in the course does this appear" context on the review boards
// (/admin/citations, /audit/citations, /admin/research, /admin/media).
//
// THE RISK THIS GUARDS. The citation registry and the source-check index are GLOBAL committed data:
// a citation is a property of a lesson's text, not of a brand, and the same list renders on every
// school. Turning an entry into a "read this lesson" link therefore has to consult the database, and
// that is the moment a global list could start pointing at a course a school does not host. The
// answer is that the link is built only from rows read through the tenant-scoped DAL, and that a
// slug with no matching row gets no link and a sentence saying why.
//
// The second risk is narrower and worse: /audit/citations shows an invited reviewer exactly one
// course. The slug list handed to the lookup must come from the same `groups` that already encode
// that grant, never from the registry at large, or an auditor would learn the lesson titles of
// courses they were never invited to.
//
// The link and excerpt logic is pure, so it is exercised directly. The scoping is asserted by
// reading the source, the same way course-auditors.test.ts and media-verify.test.ts do.
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

const BVC_ROWS: LessonLocationRow[] = [
  {
    courseId: "c-1",
    courseSlug: "coffee",
    courseTitle: "Coffee",
    lessonSlug: "coffee-extraction",
    lessonTitle: "Extraction",
    username: "bam",
  },
  {
    courseId: "c-1",
    courseSlug: "coffee",
    courseTitle: "Coffee",
    lessonSlug: "coffee-roasting",
    lessonTitle: "Roasting",
    username: "bam",
  },
];

describe("the lesson lookup is a tenant-scoped read, not a global one", () => {
  it("queries lessons and courses with tenant_id on BOTH tables", () => {
    const q = src("src/db/queries/lesson-locations.ts");
    expect(q).toContain('import "server-only"');
    // The join itself is scoped, so a foreign course can never supply a row...
    expect(q).toContain("eq(courses.id, lessons.courseId), eq(courses.tenantId, tenantId)");
    // ...and the lesson side is scoped too, on the query the whole feature's links depend on.
    expect(q.match(/eq\(lessons\.tenantId, tenantId\)/g)?.length).toBe(2);
  });

  it("never reads the whole catalog when the caller has nothing on screen", () => {
    // An empty list must not degrade into "every lesson in the brand".
    const q = src("src/db/queries/lesson-locations.ts");
    expect(q).toContain("if (slugs.length === 0) return [];");
    expect(q).toContain("if (pairs.length === 0) return [];");
  });

  it("is reachable only through ScopedDb", () => {
    const scoped = src("src/db/scoped.ts");
    expect(scoped).toContain("listLessonLocations(this.tenantId, courseSlugs)");
    expect(scoped).toContain("listLessonBodies(this.tenantId, refs)");
    for (const page of [
      "src/app/(tenant)/admin/citations/page.tsx",
      "src/app/(tenant)/audit/citations/page.tsx",
      "src/app/(tenant)/admin/research/page.tsx",
      "src/app/(tenant)/admin/media/page.tsx",
    ]) {
      const body = src(page);
      expect(body).toContain("sdb.listLessonLocations");
      expect(body).not.toContain("@/db/queries/lesson-locations");
    }
  });
});

describe("the auditor board asks for locations only in the courses it already shows", () => {
  it("derives the slug list from `groups`, which is the authorisation decision", () => {
    const page = src("src/app/(tenant)/audit/citations/page.tsx");
    // Unchanged: the grant is still what decides which courses appear at all.
    expect(page).toContain("const audited = await listAuditedCourseSlugs(");
    expect(page).toContain("citationsByCourse(owner ? undefined : audited)");
    // New: the lookup is fed from those same groups, so it cannot widen the grant.
    expect(page).toContain("sdb.listLessonLocations(groups.map((g) => g.courseSlug))");
    expect(page).not.toContain("STAGED_COURSES");
  });
});

describe("a link is built only for a lesson this tenant actually holds", () => {
  const index = buildLessonLinkIndex(BVC_ROWS);

  it("links a course and lesson it holds", () => {
    expect(courseHref(index, "coffee")).toBe("/bam/coffee");
    expect(lessonHref(index, "coffee", "coffee-extraction")).toBe(
      "/bam/coffee/lesson/coffee-extraction",
    );
    expect(courseTitleFor(index, "coffee")).toBe("Coffee");
    expect(lessonTitleFor(index, "coffee", "coffee-roasting")).toBe("Roasting");
  });

  it("returns NO link for a course this tenant does not host, and says why", () => {
    // The registry entry still names the course and lesson (those are facts about the source), but
    // the school cannot address them, so there is no link and no invented title.
    expect(courseHref(index, "bvc-taster-wine")).toBeNull();
    expect(lessonHref(index, "bvc-taster-wine", "somm-how-this-works")).toBeNull();
    expect(courseTitleFor(index, "bvc-taster-wine")).toBeNull();
    expect(lessonTitleFor(index, "bvc-taster-wine", "somm-how-this-works")).toBeNull();

    const where = reviewLocation(index, "bvc-taster-wine", "somm-how-this-works");
    expect(where.href).toBeNull();
    expect(where.isLesson).toBe(false);
    expect(where.note).toMatch(/does not host/i);
  });

  it("returns NO link for a lesson missing from this school's copy of the course", () => {
    const where = reviewLocation(index, "coffee", "a-lesson-that-was-cut");
    expect(where.isLesson).toBe(false);
    expect(where.href).toBe("/bam/coffee");
    expect(where.note).toMatch(/not in this school's copy/i);
  });

  it("refuses to guess when one school holds two courses at the same slug", () => {
    // courses.slug is unique per (tenant, instructor), so /{username}/{slug} cannot say which one
    // is meant. getCourseByIdOrSlug returns null in the same situation rather than taking the first.
    const ambiguous = buildLessonLinkIndex([
      ...BVC_ROWS,
      {
        courseId: "c-2",
        courseSlug: "coffee",
        courseTitle: "Coffee (school edition)",
        lessonSlug: "coffee-extraction",
        lessonTitle: "A different lesson entirely",
        username: "teacher",
      },
    ]);
    expect(courseHref(ambiguous, "coffee")).toBeNull();
    expect(lessonHref(ambiguous, "coffee", "coffee-extraction")).toBeNull();
    expect(lessonTitleFor(ambiguous, "coffee", "coffee-extraction")).toBeNull();
    expect(reviewLocation(ambiguous, "coffee", "coffee-extraction").note).toMatch(/share that slug/i);
  });

  it("says so when no lesson was recorded at all", () => {
    // Source checks that span a whole course, or name a group label rather than a slug.
    const where = reviewLocation(index, "coffee", null);
    expect(where.href).toBe("/bam/coffee");
    expect(where.isLesson).toBe(false);
    expect(where.note).toMatch(/no lesson was recorded/i);
    expect(reviewLocation(index, "pricing: market anchors", null).note).toMatch(/does not host/i);
  });
});

describe("an excerpt is found or it is absent, never approximated", () => {
  const body = [
    "## What the paper argued",
    "",
    "Steps came out accurate to within two percent in good devices (Fuller et al., 2020).",
    "",
    "Robinson (2015) puts the same point in one sentence.",
    "",
    "## Sources",
    "",
    "- Fuller, D., et al. (2020). Reliability and validity of commercial wearables. *JMIR*.",
    "- Robinson, J. (Ed.). (2015). *The Oxford companion to wine* (4th ed.). Oxford University Press.",
    "- Van Duzer, C. (2013). *Sea monsters on medieval maps*. British Library.",
  ].join("\n");

  it("reads the author and year an in-text citation is built from", () => {
    expect(apaSignals("Robinson, J. (Ed.). (2015). *The Oxford companion to wine*.")).toEqual({
      author: "Robinson",
      year: "2015",
    });
    expect(apaSignals("New York Public Library. (n.d.). *Lenox Globe*.")).toEqual({
      author: "New York Public Library",
      year: "n.d.",
    });
    expect(apaSignals("A line of prose with no reference in it at all")).toBeNull();
  });

  it("quotes the sentence that cites the source, in both APA forms", () => {
    expect(inTextCitationExcerpt(body, "Fuller, D., et al. (2020). Reliability and validity.")).toBe(
      "Steps came out accurate to within two percent in good devices (Fuller et al., 2020).",
    );
    expect(
      inTextCitationExcerpt(body, "Robinson, J. (Ed.). (2015). *The Oxford companion to wine*."),
    ).toBe("Robinson (2015) puts the same point in one sentence.");
  });

  it("returns null when the prose never cites the source in text", () => {
    // Most of this catalog lists its sources at the end of a lesson without in-text citations. The
    // honest answer there is no excerpt: a nearby-looking sentence reads as the lesson's own claim
    // and would be judged as one.
    expect(
      inTextCitationExcerpt(body, "Van Duzer, C. (2013). *Sea monsters on medieval maps*."),
    ).toBeNull();
    expect(inTextCitationExcerpt(null, "Anything. (2020).")).toBeNull();
  });

  it("never quotes the bibliography back at the reviewer", () => {
    const prose = stripSourcesBlock(body);
    expect(prose).not.toContain("Van Duzer");
    expect(prose).toContain("Steps came out accurate");
  });

  it("finds the prose around a figure, and nothing when the figure is not there", () => {
    const lesson = [
      "The map's monsters are an argument, not decoration.",
      "",
      ":::figure https://example.test/carta.jpg ||| A sea serpent ||| Look at the ship ||| Public domain",
      "",
      "Notice what the engraver put beside the trade route.",
    ].join("\n");
    const around = proseAroundNeedle(lesson, "https://example.test/carta.jpg");
    expect(around.before).toBe("The map's monsters are an argument, not decoration.");
    expect(around.after).toBe("Notice what the engraver put beside the trade route.");
    expect(proseAroundNeedle(lesson, "https://example.test/absent.jpg")).toEqual({
      before: null,
      after: null,
    });
  });

  it("verifies a recorded sentence against the live lesson rather than trusting it", () => {
    const lesson = "The ladder runs **roughly two, three and five years** total, and is revised.";
    expect(phraseAppearsIn(lesson, "roughly two, three and five years total")).toBe(true);
    // A check whose hedge has been rewritten out of the course is stale, and the board says so.
    expect(phraseAppearsIn(lesson, "roughly one, two and four years total")).toBe(false);
    expect(phraseAppearsIn(null, "anything")).toBe(false);
  });
});

describe("the boards render the context and never invent it", () => {
  it("shows the lesson on every one of the four review surfaces", () => {
    expect(src("src/components/citation-list.tsx")).toContain("<ReviewContext");
    expect(src("src/components/media-verify-list.tsx")).toContain("<ReviewContext");
    expect(src("src/app/(tenant)/admin/research/page.tsx")).toContain("<ReviewContext");
    // Both citation boards render through the one shared list component.
    for (const page of [
      "src/app/(tenant)/admin/citations/page.tsx",
      "src/app/(tenant)/audit/citations/page.tsx",
    ]) {
      expect(src(page)).toContain("reviewLocation(links,");
    }
  });

  it("keeps the source-check location a hand-recorded field, never a keyword guess", () => {
    const checks = src("src/lib/research-checks.ts");
    expect(checks).toContain("lesson?: string;");
    expect(checks).toContain("quote?: string;");
    // The locator reports evidence for a human to read; it does not write the field.
    const locator = src("scripts/locate-research-checks.ts");
    expect(locator).toContain("does not decide anything");
    expect(locator).not.toContain("writeFileSync");
  });
});
