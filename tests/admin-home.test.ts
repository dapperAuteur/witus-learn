import { describe, expect, it } from "vitest";
import { adminStatTiles, type AdminHomeCounts } from "@/lib/admin-home";

// The /admin landing's tile builder is the page's only logic: which tiles a viewer sees
// (owner-only counts are null for brand admins), where each number links, and the
// published-courses hint. Pure, so it is pinned here without a database.

function counts(overrides: Partial<AdminHomeCounts> = {}): AdminHomeCounts {
  return {
    stats: {
      learners: 12,
      enrollments: 30,
      courses: 10,
      publishedCourses: 7,
      unvettedCourses: 2,
      completions: 5,
    },
    openReports: 3,
    leads: 9,
    openFeedback: null,
    pendingMedia: null,
    upcomingLive: null,
    ...overrides,
  };
}

describe("adminStatTiles", () => {
  it("brand admins get the shared tiles only — no owner surfaces", () => {
    const tiles = adminStatTiles(counts());
    const hrefs = tiles.map((t) => t.href);
    expect(hrefs).toEqual([
      "/admin/dashboard",
      "/admin/dashboard",
      "/courses",
      "/admin/gradebook",
      "/admin/reports",
      "/admin/leads",
    ]);
    expect(hrefs).not.toContain("/admin/media");
    expect(hrefs).not.toContain("/admin/live");
    expect(hrefs).not.toContain("/teach/feedback");
  });

  it("the owner additionally gets feedback, media, and live tiles (zero still renders)", () => {
    const tiles = adminStatTiles(counts({ openFeedback: 0, pendingMedia: 4, upcomingLive: 1 }));
    const byHref = Object.fromEntries(tiles.map((t) => [t.href, t]));
    expect(byHref["/teach/feedback"]?.value).toBe(0);
    expect(byHref["/admin/media"]?.value).toBe(4);
    expect(byHref["/admin/live"]?.value).toBe(1);
  });

  it("published-courses tile carries the total and the unvetted count in its hint", () => {
    const tile = adminStatTiles(counts()).find((t) => t.href === "/courses");
    expect(tile?.value).toBe(7);
    expect(tile?.hint).toBe("of 10 total · 2 unvetted");
  });

  it("omits the unvetted note when nothing is unvetted", () => {
    const c = counts();
    c.stats = { ...c.stats, unvettedCourses: 0 };
    const tile = adminStatTiles(c).find((t) => t.href === "/courses");
    expect(tile?.hint).toBe("of 10 total");
  });

  it("flags open queues for attention only when non-zero", () => {
    const withOpen = adminStatTiles(counts({ pendingMedia: 2 }));
    expect(withOpen.find((t) => t.href === "/admin/reports")?.attention).toBe(true);
    expect(withOpen.find((t) => t.href === "/admin/media")?.attention).toBe(true);

    const allClear = adminStatTiles(counts({ openReports: 0, pendingMedia: 0 }));
    expect(allClear.find((t) => t.href === "/admin/reports")?.attention).toBe(false);
    expect(allClear.find((t) => t.href === "/admin/media")?.attention).toBe(false);
  });
});
