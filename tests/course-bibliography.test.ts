import { describe, expect, it } from "vitest";
import {
  bibliographyAccess,
  citationSignals,
  groupAbbreviations,
  buildCourseBibliography,
  citationSegments,
  pinpointsFor,
  splitLocatorClause,
  whereInSource,
} from "@/lib/course-bibliography";
import { apaSignals, stripSourcesBlock } from "@/lib/lesson-excerpt";
import { parseReleaseMarkers } from "@/lib/lesson-review";
import type { AuthoredCourse } from "../scripts/data/authored-course";
import { CABLES_AND_CONNECTORS_COURSE } from "../scripts/data/cables-and-connectors-course";
import { SOUND_CRAFT_COURSE } from "../scripts/data/sound-craft-course";
import { READING_A_LAND_DESCRIPTION_COURSE } from "../scripts/data/reading-a-land-description-course";
import { THE_SHOW_CREW_COURSE } from "../scripts/data/the-show-crew-course";
import { MAP_AND_COMPASS_COURSE } from "../scripts/data/map-and-compass-course";
import { WHERE_WE_RESTED_COURSE } from "../scripts/data/where-we-rested-course";

const BELDEN = "Belden. (2026a). *Product 1694A: 75 ohm SDI coax* [Data sheet]. https://catalog.belden.com/1694A.pdf";
const SMITH = "Smith, J., & Jones, K. (2020). *A book*. Publisher.";
const DOE = "Doe, A. (2019). *Another book*. Publisher.";
const HOF = "Hofstede de Groot, C. (1893). Judith Leyster. *Jahrbuch*, 14, 190-198.";
const NDA = "Blackmagic Design. (n.d.-a). *URSA Broadcast G2* [Product page]. https://www.blackmagicdesign.com/a";
const NDB = "Blackmagic Design. (n.d.-b). *URSA tech specs* [Product page]. https://www.blackmagicdesign.com/b";

describe("pinpointsFor", () => {
  it("reads a single parenthetical locator", () => {
    expect(pinpointsFor("It is sold as RG-6 (Belden, 2026a, p. 1).", BELDEN)).toEqual({ matched: true, pinpoints: ["p. 1"] });
  });

  it("splits a multi-cite group on semicolons and keeps each part's own locator", () => {
    const body = "Both agree (Smith & Jones, 2020, pp. 40-41; Doe, 2019, ch. 3).";
    expect(pinpointsFor(body, SMITH).pinpoints).toEqual(["pp. 40-41"]);
    expect(pinpointsFor(body, DOE).pinpoints).toEqual(["ch. 3"]);
  });

  it("reads a narrative citation, et al. and a second narrative form", () => {
    expect(pinpointsFor("Hofstede de Groot (1893, p. 190) printed it.", HOF).pinpoints).toEqual(["p. 190"]);
    expect(pinpointsFor("Smith et al. (2020, Part VI) disagree.", SMITH).pinpoints).toEqual(["Part VI"]);
  });

  it("matches a cite with no locator as a use with no pinpoint", () => {
    expect(pinpointsFor("As shown (Doe, 2019).", DOE)).toEqual({ matched: true, pinpoints: [] });
  });

  it("does not take a non-locator phrase as a pinpoint", () => {
    expect(pinpointsFor("(as Doe, 2019, argues)", DOE)).toEqual({ matched: true, pinpoints: [] });
  });

  it("keeps a letter-suffixed year exact: 2026a is not 2026b and 2026 is not 2026a", () => {
    expect(pinpointsFor("(Belden, 2026b, p. 2)", BELDEN).matched).toBe(false);
    const plain = "Belden. (2026). *Other*. Publisher.";
    expect(pinpointsFor("(Belden, 2026a, p. 2)", plain).matched).toBe(false);
  });

  it("keeps n.d. letter suffixes distinct", () => {
    const body = "Timecode in (Blackmagic Design, n.d.-a, \"Built in Timecode Generator\") and (Blackmagic Design, n.d.-b, section 2).";
    expect(pinpointsFor(body, NDA)).toEqual({ matched: true, pinpoints: [] });
    expect(pinpointsFor(body, NDB)).toEqual({ matched: true, pinpoints: ["section 2"] });
    const plainNd = "AJA Video Systems. (n.d.). *12GDA*.";
    expect(pinpointsFor("(AJA Video Systems, n.d., p. 3)", plainNd).pinpoints).toEqual(["p. 3"]);
    expect(pinpointsFor("(AJA Video Systems, n.d.-a, p. 3)", plainNd).matched).toBe(false);
  });

  it("matches a group author by the abbreviation the course defines, and a regulation by its section", () => {
    const smpte = "Society of Motion Picture and Television Engineers. (2018). *SMPTE OV 2082-0:2018*. SMPTE.";
    const body = "First (Society of Motion Picture and Television Engineers [SMPTE], 2018, p. 2). Later (SMPTE, 2018, pp. 1, 3).";
    const abbr = groupAbbreviations([body]);
    expect(abbr.get("society of motion picture and television engineers")).toEqual(["SMPTE"]);
    expect(pinpointsFor(body, smpte, abbr).pinpoints).toEqual(["p. 2", "pp. 1, 3"]);
    const cfr = "Definitions, 47 C.F.R. § 74.801 (2026). Electronic Code of Federal Regulations.";
    expect(citationSignals(cfr)).toEqual({ author: "47 C.F.R. § 74.801", year: "2026" });
    expect(pinpointsFor("Who may hold one (47 C.F.R. § 74.801, 2026).", cfr).matched).toBe(true);
  });

  it("ignores the Sources block itself, and an entry with no APA year", () => {
    expect(pinpointsFor(`Prose.\n\n## Sources\n\n- ${BELDEN} (Belden, 2026a, p. 9)`, BELDEN).matched).toBe(false);
    expect(pinpointsFor("Read https://www.nasm.org/ (NASM, p. 2).", "Read more at https://www.nasm.org/")).toEqual({ matched: false, pinpoints: [] });
  });
});

describe("buildCourseBibliography", () => {
  const lessons = [
    { slug: "one", title: "1 · First", position: 1, body: `Sold as RG-6 (Belden, 2026a, p. 1).\n\n## Sources\n\n- ${BELDEN} Locator: p. 1, "Product Description".` },
    { slug: "two", title: "2 · Second", position: 2, body: `Return loss (Belden, 2026a, p. 2).\n\n## Sources\n\n- ${BELDEN} Locator: p. 2, "Return Loss".\n- ${DOE}` },
    { slug: "three", title: "3 · Third", position: 3, body: `No list here, but a cite (Doe, 2019, p. 7).` },
  ];

  it("merges one work listed with different locators into one entry with a use per lesson", () => {
    const b = buildCourseBibliography(lessons);
    expect(b.map((e) => e.text)).toEqual([BELDEN, DOE]);
    const belden = b[0];
    expect(belden.url).toBe("https://catalog.belden.com/1694A.pdf");
    expect(belden.uses.map((u) => [u.lessonNumber, u.listed, u.pinpoints, u.entryLocators])).toEqual([
      [1, true, ["p. 1"], ['p. 1, "Product Description".']],
      [2, true, ["p. 2"], ['p. 2, "Return Loss".']],
    ]);
  });

  it("counts a lesson that cites a work in its text without listing it", () => {
    const doe = buildCourseBibliography(lessons)[1];
    expect(doe.uses.map((u) => [u.lessonNumber, u.listed, u.pinpoints])).toEqual([
      [2, true, []],
      [3, false, ["p. 7"]],
    ]);
  });

  it("whereInSource prefers the authored Locator clause, then the in-text pinpoints", () => {
    expect(whereInSource({ pinpoints: ["p. 1"], entryLocators: ['p. 1, "Product Description".'] })).toBe('p. 1, "Product Description"');
    expect(whereInSource({ pinpoints: ["p. 7", "pp. 9-10"], entryLocators: [] })).toBe("p. 7; pp. 9-10");
    expect(whereInSource({ pinpoints: [], entryLocators: [] })).toBeNull();
  });

  it("splitLocatorClause leaves an entry without one untouched", () => {
    expect(splitLocatorClause(DOE)).toEqual({ text: DOE, locator: null });
  });
});

describe("bibliographyAccess", () => {
  const live = {
    slug: "c",
    visibility: "public",
    isPublished: true,
    publishHoldReason: null as string | null,
    vettedAt: new Date("2026-10-01") as Date | null,
    allowUnvettedPublic: false,
  };
  const nobody = { isEditor: false, isAuditor: false };

  it("is public on a live course", () => {
    expect(bibliographyAccess(live, nobody)).toBe("public");
    expect(bibliographyAccess({ ...live, visibility: "members" }, nobody)).toBe("public");
  });

  it("is editors and auditors only on a held, unvetted, scheduled, unpublished or private course", () => {
    for (const c of [
      { ...live, publishHoldReason: "Held for a qualified reviewer" },
      { ...live, vettedAt: null },
      { ...live, visibility: "scheduled" },
      { ...live, isPublished: false },
      { ...live, visibility: "private" },
    ]) {
      expect(bibliographyAccess(c, nobody)).toBe("not-found");
      expect(bibliographyAccess(c, { isEditor: true, isAuditor: false })).toBe("preview");
      expect(bibliographyAccess(c, { isEditor: false, isAuditor: true })).toBe("preview");
    }
  });

  it("releasing the hold is what turns it on", () => {
    const held = { ...live, publishHoldReason: "Held" };
    expect(bibliographyAccess(held, nobody)).toBe("not-found");
    expect(bibliographyAccess({ ...held, publishHoldReason: null }, nobody)).toBe("public");
    // The owner's "live but unvetted" switch counts as released too.
    expect(bibliographyAccess({ ...live, vettedAt: null, allowUnvettedPublic: true }, nobody)).toBe("public");
  });
});

describe("citationSegments", () => {
  it("renders emphasis and links as segments, never HTML", () => {
    expect(citationSegments("Doe. (2019). *Book <b>x</b>*. https://x.org/a. 10.1000/xyz")).toEqual([
      { kind: "text", value: "Doe. (2019). " },
      { kind: "em", value: "Book <b>x</b>" },
      { kind: "text", value: ". " },
      { kind: "link", value: "https://x.org/a", href: "https://x.org/a" },
      { kind: "text", value: ". " },
      { kind: "link", value: "10.1000/xyz", href: "https://doi.org/10.1000/xyz" },
    ]);
  });
});

// Coverage over real courses, so the pinpoint claim is a measured number and not a hope. The figures
// are printed for the handoff and loosely asserted, so a parser regression shows up here.
describe("pinpoint coverage on real course files", () => {
  const courses: [string, AuthoredCourse][] = [
    ["cables-and-connectors", CABLES_AND_CONNECTORS_COURSE],
    ["sound-craft", SOUND_CRAFT_COURSE],
    ["reading-a-land-description", READING_A_LAND_DESCRIPTION_COURSE],
    ["the-show-crew", THE_SHOW_CREW_COURSE],
    ["map-and-compass", MAP_AND_COMPASS_COURSE],
    ["where-we-rested", WHERE_WE_RESTED_COURSE],
  ];

  it("measures entries with a pinpoint, entries with no APA year, and in-text cites with no entry", () => {
    const rows: string[] = [];
    let totalEntries = 0;
    let totalWithWhere = 0;
    for (const [slug, course] of courses) {
      const lessons = course.lessons.map((l, i) => ({ slug: l.slug, title: l.title, position: i + 1, body: parseReleaseMarkers(l.body).body }));
      const b = buildCourseBibliography(lessons);
      const withInText = b.filter((e) => e.uses.some((u) => u.pinpoints.length > 0)).length;
      const withWhere = b.filter((e) => e.uses.some((u) => whereInSource(u))).length;
      const noYear = b.filter((e) => !apaSignals(e.text)).length;
      const abbr = groupAbbreviations(lessons.map((l) => l.body));
      const signals = b
        .map((e) => citationSignals(e.text))
        .filter((s): s is NonNullable<typeof s> => s !== null)
        .flatMap((s) => [s, ...(abbr.get(s.author.toLowerCase()) ?? []).map((a) => ({ author: a, year: s.year }))]);
      // In-text parenthetical parts shaped "Name ..., 2020" or "Name ..., n.d." that no entry claims.
      let cites = 0;
      let unmatched = 0;
      for (const l of lessons) {
        const prose = stripSourcesBlock(l.body ?? "");
        for (const g of prose.matchAll(/\(([^()\n]{1,500})\)/g)) {
          for (const part of g[1].split(";")) {
            const m = /([A-Z][^,()]{1,80}?)(?: et al\.)?,\s+(\d{4}[a-z]?|n\.d\.)/.exec(part);
            if (!m) continue;
            cites++;
            const hit = signals.some(
              (s) => part.toLowerCase().includes(s.author.toLowerCase()) && part.toLowerCase().includes(s.year.toLowerCase()),
            );
            if (!hit) unmatched++;
          }
        }
      }
      totalEntries += b.length;
      totalWithWhere += withWhere;
      rows.push(
        `${slug}: ${b.length} sources; ${withWhere} with a location (${withInText} from in-text pinpoints); ${noYear} with no APA year; ${cites} in-text cites, ${unmatched} matching no entry`,
      );
      expect(b.length).toBeGreaterThan(0);
    }
    console.log(`Pinpoint coverage:\n  ${rows.join("\n  ")}\n  total: ${totalWithWhere} of ${totalEntries} sources carry a location`);
    expect(totalWithWhere / totalEntries).toBeGreaterThan(0.5);
  });
});
