import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  buildEmbedSnippet,
  cardPriceLabel,
  courseLandingPath,
  embedCardFace,
  embedClickThroughHref,
} from "@/lib/embed-card";

// The PUBLIC paste-anywhere course-card embed (/embed/card/[id]), guarded from both sides:
//
//   any third-party site may FRAME it (that is its whole point — next.config.ts scopes the
//   frame-ancestors exception to /embed/* alone), while the card itself may only ever show a
//   published + public course of the HOST-resolved tenant, with a vetting-locked course reduced
//   to its public Coming-soon face (title + description, no price, no offer) and everything
//   else a 404 — never a redirect, which would leak that the row exists.
//
// The decision logic is pure (src/lib/embed-card.ts), so most of this runs offline. Where the
// decision is spelled into a SQL predicate, a page branch, or a header matcher, the source is
// read directly — the same pattern as tests/isolation/vetting.test.ts. Cross-tenant behaviour
// against real rows is in embed-card.db.test.ts.
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const VETTED = new Date("2026-08-01T00:00:00Z");

describe("embedCardFace (anonymous viewer — an embed has no session and no escape hatches)", () => {
  it("reduces a vetting-locked course to its Coming-soon face", () => {
    expect(embedCardFace({ vettedAt: null, allowUnvettedPublic: false })).toBe("coming-soon");
  });

  it("opens a vetted course", () => {
    expect(embedCardFace({ vettedAt: VETTED, allowUnvettedPublic: false })).toBe("open");
  });

  it("honours the owner's explicit live-but-unvetted flag", () => {
    expect(embedCardFace({ vettedAt: null, allowUnvettedPublic: true })).toBe("open");
  });
});

describe("cardPriceLabel (matches the catalog-card conventions)", () => {
  it("labels free, one-time, and subscription prices", () => {
    expect(cardPriceLabel({ price: "0", priceType: "free", billingInterval: null })).toBe("Free");
    expect(cardPriceLabel({ price: "0.00", priceType: "one_time", billingInterval: null })).toBe("Free");
    expect(cardPriceLabel({ price: "19", priceType: "one_time", billingInterval: null })).toBe("$19");
    expect(cardPriceLabel({ price: "12", priceType: "subscription", billingInterval: null })).toBe("$12/mo");
    expect(cardPriceLabel({ price: "12", priceType: "subscription", billingInterval: "month" })).toBe("$12/mo");
    expect(cardPriceLabel({ price: "99", priceType: "subscription", billingInterval: "year" })).toBe("$99/yr");
  });
});

describe("click-through CTA", () => {
  const course = { id: "abc", slug: "civics-101", instructorUsername: "bam" };

  it("prefers the pretty landing path, falling back to /course/[id]", () => {
    expect(courseLandingPath(course)).toBe("/bam/civics-101");
    expect(courseLandingPath({ id: "abc", slug: null, instructorUsername: "bam" })).toBe("/course/abc");
    expect(courseLandingPath({ id: "abc", slug: "x", instructorUsername: null })).toBe("/course/abc");
  });

  it("routes through the EXISTING privacy-light counter, tagged so Link usage can tell embeds apart", () => {
    const href = embedClickThroughHref("https://school.example", course);
    expect(href.startsWith("https://school.example/api/link/click?u=")).toBe(true);
    expect(href).toContain("c=abc");
    // The target inside `u` is the tenant's own landing page, utm-tagged and URL-encoded.
    const u = new URL(href).searchParams.get("u")!;
    expect(u).toBe("https://school.example/bam/civics-101?utm_source=embed-card");
  });
});

describe("buildEmbedSnippet (pasteable on ANY site — so it must carry no secret)", () => {
  const snippet = buildEmbedSnippet({
    siteUrl: "https://school.example",
    courseId: "11111111-2222-3333-4444-555555555555",
    courseTitle: 'Civics <b>101</b> & "Beyond"',
    tenantName: "Acme Academy",
  });

  it("points at /embed/card on the tenant's OWN origin (white-label domains keep working)", () => {
    expect(snippet).toContain('src="https://school.example/embed/card/11111111-2222-3333-4444-555555555555"');
    expect(snippet).not.toContain("learn.witus.online");
  });

  it("contains no API key, bearer token, script tag, or query secret of any kind", () => {
    const lower = snippet.toLowerCase();
    for (const tell of ["key", "bearer", "token", "authorization", "<script", "secret"]) {
      expect(lower).not.toContain(tell);
    }
  });

  it("escapes interpolated HTML so a hostile course title can't break out of the attribute", () => {
    expect(snippet).toContain("&lt;b&gt;101&lt;/b&gt; &amp; &quot;Beyond&quot;");
    expect(snippet).not.toContain('"Beyond"');
  });

  it("is a single plain iframe with an accessible title naming course and school", () => {
    expect(snippet.startsWith("<iframe")).toBe(true);
    expect(snippet.endsWith("</iframe>")).toBe(true);
    expect(snippet).toContain("on Acme Academy");
  });
});

describe("the SQL predicate bakes the gate in (src/db/queries/embed.ts)", () => {
  const query = src("src/db/queries/embed.ts");

  it("filters tenant, published, and public in the WHERE — no unscoped variant exists", () => {
    expect(query).toContain("eq(courses.tenantId, tenantId)");
    expect(query).toContain("eq(courses.isPublished, true)");
    expect(query).toContain('eq(courses.visibility, "public")');
  });

  it("selects card metadata only — never a lesson, body, or media URL", () => {
    // Code-level checks (the doc comment legitimately mentions lessons while forbidding them).
    expect(query).not.toContain("from(lessons)");
    expect(query).not.toContain("lessons.");
    expect(query).not.toMatch(/mediaUrl|textContent/);
  });
});

describe("the route 404s and never redirects (src/app/embed/card/[id]/page.tsx)", () => {
  const page = src("src/app/embed/card/[id]/page.tsx");

  it("resolves the tenant from the request host server-side and scopes the read to it", () => {
    expect(page).toContain("requireTenant()");
    expect(page).toContain("getPublishedCourseCard(tenant.id, id)");
  });

  it("uses notFound() for every miss and contains no redirect at all", () => {
    expect(page).toContain("notFound()");
    expect(page).not.toMatch(/\bredirect\(/);
  });

  it("branches on the pure vetting face, not on ad-hoc checks", () => {
    expect(page).toContain("embedCardFace(course)");
  });
});

describe("framing headers are scoped to /embed/* alone (next.config.ts)", () => {
  const config = src("next.config.ts");

  it("allows all ancestors ONLY under the /embed matcher", () => {
    // The permissive VALUE must appear exactly once in code (comments aside), and in the
    // /embed/:path* block.
    const permissive = config.match(/value: "frame-ancestors \*"/g) ?? [];
    expect(permissive).toHaveLength(1);
    const embedBlock = config.slice(config.indexOf('source: "/embed/:path*"'));
    expect(embedBlock.slice(0, embedBlock.indexOf("},")).includes("frame-ancestors *")).toBe(true);
  });

  it("pins every non-embed route to same-origin framing", () => {
    expect(config).toContain('source: "/((?!embed/).*)"');
    expect(config).toContain('{ key: "X-Frame-Options", value: "SAMEORIGIN" }');
    expect(config).toContain("frame-ancestors 'self'");
  });
});
