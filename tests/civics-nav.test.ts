import { describe, expect, it } from "vitest";
import { civicsBackLink, isStateCivicsSlug } from "@/lib/civics-nav";

// A "back" link that lands somewhere unrelated is worse than none, so the mapping is narrow and
// pinned here: the state-civics family goes to the state map, other Civics courses go to the
// Civics catalog slice, everything else gets nothing.

describe("isStateCivicsSlug", () => {
  it("matches the two-letter state family only", () => {
    expect(isStateCivicsSlug("state-civics-in")).toBe(true);
    expect(isStateCivicsSlug("state-civics-dc")).toBe(true);
    expect(isStateCivicsSlug("state-civics-")).toBe(false);
    expect(isStateCivicsSlug("state-civics-indiana")).toBe(false);
    expect(isStateCivicsSlug("us-civics-101")).toBe(false);
    expect(isStateCivicsSlug(null)).toBe(false);
  });
});

describe("civicsBackLink", () => {
  it("sends a state-civics course to the state map", () => {
    expect(civicsBackLink({ slug: "state-civics-sc", category: "Civics" })).toEqual({
      href: "/civics",
      label: "All state civics courses",
    });
  });

  it("sends another Civics course to the Civics catalog slice", () => {
    expect(civicsBackLink({ slug: "how-a-bill-becomes-law", category: "Civics" })?.href).toBe(
      "/courses?category=Civics",
    );
  });

  it("gives a non-civics course no link at all", () => {
    expect(civicsBackLink({ slug: "voice-acting", category: "Careers & Media" })).toBeNull();
    expect(civicsBackLink({ slug: null, category: null })).toBeNull();
  });

  it("keeps the state family pointing at the map even if its category was renamed", () => {
    expect(civicsBackLink({ slug: "state-civics-tx", category: "Social Studies" })?.href).toBe(
      "/civics",
    );
  });
});
