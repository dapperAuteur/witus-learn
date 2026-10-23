import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { FULL_SHARE_TO_ELEMENTARY_MBA, allSeedEntries } from "../scripts/lib/seed-registry";
import { SERIES_PREVIEWS, seriesContinuation, type HomeSchool } from "@/lib/series-previews";
import { SeriesContinuesView } from "@/components/series-continues-notice";

// The "This series continues on <home school>" notice. The registry is checked against the seed
// registry offline, so an entry cannot name a course that is not actually a preview.
describe("series previews registry", () => {
  const entries = allSeedEntries();
  const previews = Object.entries(SERIES_PREVIEWS).flatMap(([school, bySlug]) =>
    Object.entries(bySlug).map(([slug, p]) => ({ school, slug, ...p })),
  );

  it("never lists a course that is shared whole", () => {
    // The seven business courses are on ElementaryMBA in full: their series does not continue elsewhere.
    expect(previews.filter((p) => FULL_SHARE_TO_ELEMENTARY_MBA.has(p.slug)).map((p) => p.slug)).toEqual([]);
  });

  it("lists only a series' first course, seeded on both the previewing school and its home school", () => {
    for (const p of previews) {
      const label = `${p.school}:${p.slug}`;
      expect(p.homeSchool, label).not.toBe(p.school);
      expect(entries.some((e) => e.slug === p.slug && e.school === p.school), label).toBe(true);
      const home = entries.find((e) => e.slug === p.slug && e.school === p.homeSchool);
      expect(home?.seriesPosition, label).toBe("01");
      expect(home?.seriesSlug, label).toBe(p.seriesSlug);
    }
  });
});

describe("seriesContinuation", () => {
  const preview = { homeSchool: "elementary-mba", seriesSlug: "firm" };
  const open: HomeSchool = { name: "ElementaryMBA", primaryHost: "elementarymba.example", isActive: true, comingSoon: false };

  it("links to the series on the home school's primary host", () => {
    expect(seriesContinuation(preview, open)).toEqual({
      schoolName: "ElementaryMBA",
      href: "https://elementarymba.example/series/firm",
    });
  });

  it("hides the link while the home school is coming soon, inactive, or has no primary host", () => {
    expect(seriesContinuation(preview, { ...open, comingSoon: true })?.href).toBeNull();
    expect(seriesContinuation(preview, { ...open, isActive: false })?.href).toBeNull();
    expect(seriesContinuation(preview, { ...open, primaryHost: null })?.href).toBeNull();
  });

  it("renders nothing for a home school that does not exist", () => {
    expect(seriesContinuation(preview, null)).toBeNull();
  });
});

describe("SeriesContinuesView", () => {
  it("names the home school and links to the series", () => {
    const html = renderToStaticMarkup(
      createElement(SeriesContinuesView, {
        continuation: { schoolName: "ElementaryMBA", href: "https://elementarymba.example/series/firm" },
      }),
    );
    expect(html).toMatch(
      /This series continues on <a[^>]*href="https:\/\/elementarymba\.example\/series\/firm"[^>]*>ElementaryMBA<\/a>\./,
    );
  });

  it("names the school without a link while the link is hidden", () => {
    const html = renderToStaticMarkup(
      createElement(SeriesContinuesView, { continuation: { schoolName: "ElementaryMBA", href: null } }),
    );
    expect(html).toContain("This series continues on ElementaryMBA.");
    expect(html).not.toMatch(/<a[\s>]/);
  });
});
