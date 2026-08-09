import { describe, expect, it } from "vitest";
import {
  checkFigures,
  extractFigures,
  isAllowedFigureHost,
  isPlaceholder,
} from "@/lib/figures";

const URL_OK =
  "https://res.cloudinary.com/devdash54321/image/upload/v1/witus/courses/here-be-dragons/x.jpg";
const good = `:::figure ${URL_OK} ||| A circle divided by a T into three labelled parts ||| The T-O diagram from the 1472 printing ||| Isidore. Etymologiae. Public domain. https://commons.wikimedia.org/wiki/File:X`;

const problems = (body: string) => checkFigures(body).map((f) => f.problem);

describe("extractFigures", () => {
  it("parses all four fields in order", () => {
    const [f] = extractFigures(good);
    expect(f.url).toBe(URL_OK);
    expect(f.alt).toBe("A circle divided by a T into three labelled parts");
    expect(f.caption).toBe("The T-O diagram from the 1472 printing");
    expect(f.credit).toContain("Public domain");
  });

  it("returns nothing for an empty or absent body", () => {
    expect(extractFigures("")).toEqual([]);
    expect(extractFigures(null)).toEqual([]);
    expect(extractFigures(undefined)).toEqual([]);
  });

  it("finds figures among ordinary prose and other directives, in order", () => {
    const body = [
      "Some prose.",
      good,
      ":::reveal Q ||| A",
      good.replace("x.jpg", "y.jpg"),
    ].join("\n");
    const found = extractFigures(body);
    expect(found).toHaveLength(2);
    expect(found[1].url).toContain("y.jpg");
  });

  it("ignores a malformed figure rather than half-parsing it", () => {
    expect(extractFigures(`:::figure ${URL_OK} ||| only two ||| fields`)).toEqual([]);
  });
});

describe("checkFigures: a well-formed figure", () => {
  it("reports nothing", () => {
    expect(checkFigures(good)).toEqual([]);
  });

  it("reports nothing for a body with no figures at all", () => {
    expect(checkFigures("Just prose.\n\n## Sources\n- Someone. (2020).")).toEqual([]);
  });
});

describe("checkFigures: the failures that are invisible in the app", () => {
  it("catches a malformed directive (too few fields)", () => {
    expect(problems(`:::figure ${URL_OK} ||| alt ||| caption`)).toContain("malformed");
  });

  it("catches an indented directive, which never renders", () => {
    expect(problems(`   ${good}`)).toContain("indented");
  });

  it("does not double-report an indented line as malformed too", () => {
    expect(problems(`   :::figure broken`)).toEqual(["indented"]);
  });

  it("catches a non-Cloudinary host", () => {
    const hotlinked = good.replace(URL_OK, "https://upload.wikimedia.org/a/b/c.jpg");
    expect(problems(hotlinked)).toContain("bad-host");
  });

  it("catches plain http even on the allowed host", () => {
    expect(isAllowedFigureHost(URL_OK.replace("https:", "http:"))).toBe(false);
  });

  it("catches a placeholder credit, which looks like provenance and is not", () => {
    const bad = `:::figure ${URL_OK} ||| a real description ||| a real caption ||| TODO`;
    expect(problems(bad)).toContain("placeholder-credit");
  });

  it("catches a placeholder alt", () => {
    const bad = `:::figure ${URL_OK} ||| image ||| a real caption ||| Someone. Public domain.`;
    expect(problems(bad)).toContain("placeholder-alt");
  });

  it("catches alt duplicated as the caption", () => {
    const same = `:::figure ${URL_OK} ||| The same sentence ||| the same sentence ||| Someone. CC0.`;
    expect(problems(same)).toContain("alt-equals-caption");
  });

  it("reports every problem on one line, not just the first", () => {
    const bad = `:::figure http://example.com/x.jpg ||| tbd ||| tbd ||| tbd`;
    const p = problems(bad);
    expect(p).toContain("bad-host");
    expect(p).toContain("placeholder-alt");
    expect(p).toContain("placeholder-caption");
    expect(p).toContain("placeholder-credit");
  });

  it("reports the 1-based line number so the guard output is navigable", () => {
    const body = ["prose", "more prose", `:::figure ${URL_OK} ||| a ||| b`].join("\n");
    expect(checkFigures(body)[0].line).toBe(3);
  });
});

describe("isPlaceholder", () => {
  it("matches only a whole field, so real prose containing the word is safe", () => {
    expect(isPlaceholder("TODO")).toBe(true);
    expect(isPlaceholder("  n/a ")).toBe(true);
    expect(isPlaceholder("Public domain")).toBe(true);
    // A real credit that merely CONTAINS a placeholder-ish word must not trip.
    expect(isPlaceholder("Olaus Magnus. Carta marina, 1539. Public domain.")).toBe(false);
    expect(isPlaceholder("A photo of the source material")).toBe(false);
  });

  it("ignores trailing punctuation", () => {
    expect(isPlaceholder("unknown.")).toBe(true);
  });
});
