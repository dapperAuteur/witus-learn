import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { ADMIN_NAV, VETTING_QUEUE, adminNavFor } from "@/lib/admin-nav";

// The admin rail's single source of truth. Pure data + one filter, so it is pinned here without a
// database. The vetting-queue entry gets extra attention because it is the one item that is NOT an
// /admin/* page and the one that has to stay word-for-word identical to the site header's copy.

const HEADER_SOURCE = readFileSync(
  fileURLToPath(new URL("../src/components/site-header.tsx", import.meta.url)),
  "utf8",
);

describe("adminNavFor", () => {
  it("hides every ownerOnly item from a brand admin and shows all of them to the owner", () => {
    const brandAdmin = adminNavFor(false);
    const owner = adminNavFor(true);

    expect(brandAdmin.every((i) => !i.ownerOnly)).toBe(true);
    expect(owner).toEqual(ADMIN_NAV);
    expect(brandAdmin.length).toBeLessThan(owner.length);
  });

  it("every item has a title, a description, and an icon", () => {
    for (const i of ADMIN_NAV) {
      expect(i.href.startsWith("/"), i.href).toBe(true);
      expect(i.title.length, i.href).toBeGreaterThan(0);
      expect(i.desc.length, i.href).toBeGreaterThan(0);
      expect(i.icon.length, i.href).toBeGreaterThan(0);
    }
  });

  it("has no duplicate hrefs", () => {
    const hrefs = ADMIN_NAV.map((i) => i.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});

describe("the vetting queue entry", () => {
  const entry = ADMIN_NAV.find((i) => i.href === VETTING_QUEUE.href);

  it("points at /teach with the unvetted filter preselected", () => {
    // Not /admin/*: the bulk Mark vetted buttons live on the teach catalog, which reads this exact
    // query param to preselect the filter (teach/page.tsx → initialStatus).
    expect(VETTING_QUEUE.href).toBe("/teach?status=unvetted");
    expect(entry).toBeDefined();
  });

  it("is owner-only, because marking a course vetted is owner-only server-side", () => {
    expect(entry?.ownerOnly).toBe(true);
    expect(adminNavFor(false).map((i) => i.href)).not.toContain(VETTING_QUEUE.href);
    expect(adminNavFor(true).map((i) => i.href)).toContain(VETTING_QUEUE.href);
  });

  it("wears the same label in the admin rail as in the site header", () => {
    expect(entry?.title).toBe(VETTING_QUEUE.label);
  });

  it("is reached from the site header through the shared constant, not a copied string", () => {
    // A hardcoded "/teach?status=unvetted" in the header would let the two menus drift apart in
    // wording or destination, which is precisely the bug this entry exists to avoid.
    expect(HEADER_SOURCE).toContain("VETTING_QUEUE");
    expect(HEADER_SOURCE).not.toContain('"/teach?status=unvetted"');
  });

  it("is offered by the header only to the platform owner, not to every instructor", () => {
    // The Teach dropdown is built for canTeach (instructor | brand_admin | owner); this one item
    // must be narrowed to `owner`, or an instructor lands on a queue whose buttons reject them.
    const line = HEADER_SOURCE.split("\n").find((l) => l.includes("VETTING_QUEUE.href"));
    expect(line).toBeDefined();
    expect(line).toContain("session && owner");
    expect(line).not.toContain("canTeach");
  });
});
