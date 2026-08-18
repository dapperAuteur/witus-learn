import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  canSeeUnvettedContent,
  courseViewGate,
  includeInSitemap,
  isOpenWhileUnvetted,
  isUnvetted,
  isVettingLocked,
} from "@/lib/vetting";

// Unvetted ("Coming soon") courses, guarded from both sides:
//
//   the landing page is PUBLIC (a stranger, and a search engine, must be able to read the title,
//   description and standards, because that is the public value of the page), while the course
//   BEHIND it is closed (no lesson, no lesson title, no media URL, for anyone but the owner, the
//   course's own instructor, or someone with an existing enrollment).
//
// The decision itself is pure (src/lib/vetting.ts), so most of this runs offline. The few places
// where the decision has to be spelled into a SQL predicate or a page branch are checked by
// reading the source, which is how the repo already guards its other invariants.
const VETTED = new Date("2026-07-29T00:00:00Z");
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

const published = { isPublished: true, visibility: "public", allowUnvettedPublic: false };
const stranger = { isEditor: false, canSeeUnvetted: false };

describe("isUnvetted", () => {
  it("is true only while vetted_at is NULL (the no-backfill migration's whole point)", () => {
    expect(isUnvetted({ vettedAt: null })).toBe(true);
    expect(isUnvetted({ vettedAt: VETTED })).toBe(false);
  });
});

describe("canSeeUnvettedContent", () => {
  it("admits the owner/instructor, an existing enrollee, and an invited auditor", () => {
    expect(canSeeUnvettedContent({ isOwnerOrInstructor: true, isEnrolled: false })).toBe(true);
    expect(canSeeUnvettedContent({ isOwnerOrInstructor: false, isEnrolled: true })).toBe(true);
    expect(
      canSeeUnvettedContent({ isOwnerOrInstructor: false, isEnrolled: false, isAuditor: true }),
    ).toBe(true);
  });

  it("refuses everyone else, and defaults the not-yet-built auditor slot to false", () => {
    expect(canSeeUnvettedContent({ isOwnerOrInstructor: false, isEnrolled: false })).toBe(false);
    expect(
      canSeeUnvettedContent({ isOwnerOrInstructor: false, isEnrolled: false, isAuditor: false }),
    ).toBe(false);
  });
});

describe("courseViewGate", () => {
  it("shows a stranger the Coming soon face, never the lessons", () => {
    expect(courseViewGate({ ...published, vettedAt: null, ...stranger })).toBe("coming-soon");
  });

  it("keeps an existing ENROLLEE in the real course (un-vetting must never revoke access)", () => {
    expect(
      courseViewGate({ ...published, vettedAt: null, isEditor: false, canSeeUnvetted: true }),
    ).toBe("open");
  });

  it("keeps the owner/instructor in the real course", () => {
    expect(
      courseViewGate({ ...published, vettedAt: null, isEditor: true, canSeeUnvetted: true }),
    ).toBe("open");
  });

  it("opens an unvetted course to a stranger when the owner flagged allow_unvetted_public", () => {
    expect(
      courseViewGate({ ...published, allowUnvettedPublic: true, vettedAt: null, ...stranger }),
    ).toBe("open");
  });

  it("the flag never overrides draft/private: still not-found", () => {
    expect(
      courseViewGate({
        isPublished: false,
        visibility: "public",
        allowUnvettedPublic: true,
        vettedAt: null,
        ...stranger,
      }),
    ).toBe("not-found");
  });

  it("isVettingLocked and isOpenWhileUnvetted split the unvetted state by the flag", () => {
    expect(isVettingLocked({ vettedAt: null, allowUnvettedPublic: false })).toBe(true);
    expect(isVettingLocked({ vettedAt: null, allowUnvettedPublic: true })).toBe(false);
    expect(isVettingLocked({ vettedAt: VETTED, allowUnvettedPublic: false })).toBe(false);
    expect(isOpenWhileUnvetted({ vettedAt: null, allowUnvettedPublic: true })).toBe(true);
    // The flag is meaningless once vetted: no disclosure on a reviewed course.
    expect(isOpenWhileUnvetted({ vettedAt: VETTED, allowUnvettedPublic: true })).toBe(false);
  });

  it("opens normally once vetted", () => {
    expect(courseViewGate({ ...published, vettedAt: VETTED, ...stranger })).toBe("open");
  });

  it("still 404s a draft or a private course, vetted or not", () => {
    expect(
      courseViewGate({ isPublished: false, visibility: "public", vettedAt: VETTED, allowUnvettedPublic: false, ...stranger }),
    ).toBe("not-found");
    expect(
      courseViewGate({ isPublished: true, visibility: "private", vettedAt: VETTED, allowUnvettedPublic: false, ...stranger }),
    ).toBe("not-found");
    expect(
      courseViewGate({ isPublished: false, visibility: "public", vettedAt: null, allowUnvettedPublic: false, ...stranger }),
    ).toBe("not-found");
  });
});

describe("sitemap includes unvetted courses (discovery, not routing)", () => {
  it("lists an unvetted course: its landing page is real indexable content", () => {
    expect(includeInSitemap({ ...published, slug: "faa-part-107" })).toBe(true);
  });

  it("omits URLs that would 404: drafts, private courses, and courses with no slug", () => {
    expect(includeInSitemap({ isPublished: false, visibility: "public", slug: "x" })).toBe(false);
    expect(includeInSitemap({ isPublished: true, visibility: "private", slug: "x" })).toBe(false);
    expect(includeInSitemap({ ...published, slug: null })).toBe(false);
  });

  it("the sitemap actually emits per-course URLs, and gates them ONLY on includeInSitemap", () => {
    const sitemap = src("src/app/sitemap.ts");
    expect(sitemap).toContain("listSitemapCourses");
    expect(sitemap).toContain("includeInSitemap");
    expect(sitemap).toContain("${base}/${c.username}/${c.slug}");
    // No second, contradictory filter: a `vettedAt` test here would silently un-index every
    // Coming soon page, which is the decision this branch reversed.
    expect(sitemap).not.toContain("vettedAt");
  });
});

describe("lesson-routing surfaces exclude unvetted courses", () => {
  it("cross-course CYOA (match_lessons_global) requires vetted_at", () => {
    const cyoa = src("src/db/queries/cyoa.ts");
    const globalFn = cyoa.slice(cyoa.indexOf("export async function matchLessonsGlobal"));
    expect(globalFn).toContain("isNotNull(courses.vettedAt)");
  });

  it("the api-v1 reads that return LESSONS require vetted_at, the course LIST does not", () => {
    const api = src("src/db/queries/api-v1.ts");
    const detail = api.slice(
      api.indexOf("export async function getPublishedCourseWithLessons"),
      api.indexOf("export async function getPublishedLesson"),
    );
    const lesson = api.slice(api.indexOf("export async function getPublishedLesson"));
    const list = api.slice(
      api.indexOf("export async function listPublishedCourses"),
      api.indexOf("export interface ApiLessonListItem"),
    );
    expect(detail).toContain("isNotNull(courses.vettedAt)");
    expect(lesson).toContain("isNotNull(courses.vettedAt)");
    expect(list).not.toContain("vettedAt");
  });
});

describe("the Coming soon face cannot leak the closed course", () => {
  const face = src("src/components/coming-soon-course.tsx");

  it("touches no lesson field, no media URL and no price", () => {
    // Code, not prose: the copy is allowed to say "the lessons are not available yet", but the
    // component must never READ a lesson. Comments are stripped first, then we look for the shapes
    // only real data access takes. If any of these appears, content has reached the open page.
    const code = face.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
    for (const forbidden of [
      "lessons.",
      "lessons:",
      "lessons}",
      "lesson.",
      "Lesson",
      "contentUrl",
      "mediaUrl",
      "isFreePreview",
      "priceType",
      "course.price",
    ]) {
      expect(code).not.toContain(forbidden);
    }
  });

  it("describes the course in JSON-LD but never OFFERS it", () => {
    expect(face).toContain('"@type": "Course"');
    expect(face).not.toContain("offers");
    expect(face).not.toContain("Offer");
  });

  it("loadCourseView withholds lessons and sections from a coming-soon viewer", () => {
    const access = src("src/lib/course-access.ts");
    expect(access).toContain("courseViewGate");
    expect(access).toContain("const all = isComingSoon ? [] : await listLessons(course.id)");
    expect(access).toContain("const modules = isComingSoon");
  });

  it("the notify-me form is reachable ONLY from the coming-soon face", () => {
    // A permitted viewer (owner, instructor, enrollee) never renders that face, so they can never
    // be shown a notify-me box on a course they can already study.
    const page = src("src/app/(tenant)/[username]/[courseSlug]/page.tsx");
    expect(page).toContain("if (view.isComingSoon)");
    expect(page).toContain("<ComingSoonCourseFace");
    expect(page).not.toContain("CourseNotifyForm");
    expect(face).toContain("<CourseNotifyForm");
  });
});

describe("vetting is owner-only, and never takes a client timestamp", () => {
  const route = src("src/app/api/courses/[id]/route.ts");

  it("accepts a boolean and stamps the column server-side", () => {
    expect(route).toContain("vetted: z.boolean().optional()");
    expect(route).not.toContain("vettedAt: z.");
    expect(route).toContain("patch.vettedAt = wantVetted");
  });

  it("drops the field for anyone but the platform owner, and never writes `vetted`", () => {
    expect(route).toContain("delete patch.vetted;");
    expect(route).toContain("if (await isPlatformOwner(session.user.id))");
  });
});

describe("the notify-me endpoint treats the public form as hostile input", () => {
  const route = src("src/app/api/course-notify/route.ts");

  it("resolves the tenant from the host and the course through the scoped DAL", () => {
    expect(route).toContain("apiContext()");
    expect(route).toContain("sdb.getCourseById(parsed.data.courseId)");
    // Never a tenant id from the body.
    expect(route).not.toContain("tenantId: parsed.data");
  });

  it("only accepts signups for a published, non-private, VETTING-LOCKED course", () => {
    expect(route).toContain("!course.isPublished");
    expect(route).toContain('course.visibility === "private"');
    // isVettingLocked, not isUnvetted: a course the owner flagged "live but unvetted" has no
    // Coming-soon page, so there is nothing to be notified about and the signup 404s.
    expect(route).toContain("!isVettingLocked(course)");
  });

  it("has a honeypot, a rate limit, and mirrors to the Inbox after the response", () => {
    expect(route).toContain("checkRateLimit");
    expect(route).toContain("if (parsed.data.company)");
    expect(route).toContain("after(");
    expect(route).toContain('form_type: "learn-course-notify"');
  });
});
