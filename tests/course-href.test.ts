import { describe, expect, it } from "vitest";
import { coursePagePath } from "@/lib/course-href";

// Course cards link straight to the canonical page: it saves a redirect online, and it is the only
// address the service worker can answer offline (it never stores a redirect).
describe("coursePagePath", () => {
  const course = { id: "c-123", slug: "knot-tying" };

  it("links the canonical /{username}/{courseSlug} page when both are known", () => {
    expect(coursePagePath(course, "bam")).toBe("/bam/knot-tying");
  });

  it("falls back to the /course/{id} redirect when the instructor has no username", () => {
    expect(coursePagePath(course, undefined)).toBe("/course/c-123");
    expect(coursePagePath(course, null)).toBe("/course/c-123");
    expect(coursePagePath(course, "")).toBe("/course/c-123");
  });

  it("falls back to the redirect when the course has no slug", () => {
    expect(coursePagePath({ id: "c-123", slug: "" }, "bam")).toBe("/course/c-123");
  });
});
