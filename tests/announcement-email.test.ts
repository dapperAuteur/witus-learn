import { describe, expect, it } from "vitest";
import {
  announcementBody,
  announcementSubject,
  announcementTagline,
  buildCourseUrl,
  mailtoHref,
} from "@/lib/marketing/announcement-email";

// The "Compose announcement" draft on /admin/marketing is built entirely from these pure
// helpers, so what they return is exactly what an admin copies into their email tool.

describe("announcementTagline", () => {
  it("takes the first line of the description", () => {
    expect(announcementTagline("Learn the real history.\n\nSecond paragraph.")).toBe(
      "Learn the real history.",
    );
  });

  it("returns empty for a missing description", () => {
    expect(announcementTagline(null)).toBe("");
    expect(announcementTagline("   ")).toBe("");
  });

  it("trims a long first line to a caption length", () => {
    const long = "x".repeat(400);
    const out = announcementTagline(long);
    expect(out.length).toBe(178); // 177 chars + ellipsis
    expect(out.endsWith("…")).toBe(true);
  });
});

describe("buildCourseUrl", () => {
  it("joins origin and course path", () => {
    expect(buildCourseUrl("https://learn.witus.online", "abc")).toBe(
      "https://learn.witus.online/course/abc",
    );
  });

  it("tolerates a trailing slash on the origin", () => {
    expect(buildCourseUrl("https://school.example/", "abc")).toBe(
      "https://school.example/course/abc",
    );
  });
});

describe("announcementSubject / announcementBody", () => {
  const course = { id: "c1", title: "River Commodities", description: "Follow the cargo.\nMore." };

  it("subject matches the social caption grammar", () => {
    expect(announcementSubject("Better Vice Club", course.title)).toBe(
      "New on Better Vice Club: River Commodities",
    );
  });

  it("body carries title, tagline and link, in that order", () => {
    const body = announcementBody({
      brand: "Better Vice Club",
      course,
      courseUrl: "https://bvc.example/course/c1",
    });
    expect(body).toBe(
      "River Commodities is now open on Better Vice Club.\n\nFollow the cargo.\n\nStart here: https://bvc.example/course/c1",
    );
  });

  it("body skips the tagline when the course has no description", () => {
    const body = announcementBody({
      brand: "BVC",
      course: { id: "c2", title: "Knots", description: null },
      courseUrl: "https://bvc.example/course/c2",
    });
    expect(body).toBe("Knots is now open on BVC.\n\nStart here: https://bvc.example/course/c2");
  });
});

describe("mailtoHref", () => {
  it("encodes subject and body so newlines and ampersands survive", () => {
    const href = mailtoHref("A & B", "line one\nline two");
    expect(href).toBe("mailto:?subject=A%20%26%20B&body=line%20one%0Aline%20two");
  });

  it("has no recipient, so the admin's email tool asks for one", () => {
    expect(mailtoHref("s", "b").startsWith("mailto:?")).toBe(true);
  });
});
