import { describe, expect, it } from "vitest";
import {
  UNCHECKABLE,
  anyTitleMatches,
  citedTitles,
  classify,
  classifyDetailed,
  cleanCitationUrl,
  decodeEntities,
  extractPageTitles,
  isRootUrl,
  looksLikeBotWall,
  looksLikeNotFound,
  nearMatch,
  normalizeTitle,
  slugMatches,
  titlesMatch,
  type FetchRecord,
} from "../scripts/lib/citation-titles";

/**
 * The classifier behind scripts/check-citation-titles.ts (bug: plans/bugs/2026-11-24-search-craft-
 * sources-are-landing-pages.md). No network: these pin how a cited title is read out of an APA entry,
 * how it is compared with a page title, and which class each fetch outcome gets. The Search Craft
 * cases are the real ones from the bug report.
 */

const rec = (over: Partial<FetchRecord>): FetchRecord => ({
  url: "https://example.org/guide/search",
  checkedAt: "2026-11-24T00:00:00.000Z",
  finalUrl: "https://example.org/guide/search",
  status: 200,
  contentType: "text/html; charset=utf-8",
  title: null,
  ogTitle: null,
  error: null,
  ...over,
});

describe("citedTitles reads the title out of an APA entry", () => {
  it("house style: the italic title after the year", () => {
    const t = citedTitles(
      "Coaxicom. (2015, June 18). *Understanding coaxial cable terms, specifications and applications*. https://coaxicom.com/understanding-coaxial-cable-terms/ Locator: opening paragraphs.",
    );
    expect(t.primary).toBe("Understanding coaxial cable terms, specifications and applications");
  });

  it("journal article: the plain title is primary, the italic journal is a further candidate", () => {
    const t = citedTitles(
      "Saltzer, J. H., & Schroeder, M. D. (1975). The protection of information in computer systems. *Proceedings of the IEEE, 63*(9), 1278-1308. https://doi.org/10.1109/PROC.1975.9939",
    );
    expect(t.primary).toBe("The protection of information in computer systems");
    expect(t.candidates).toContain("Proceedings of the IEEE, 63");
  });

  it("n.d. with a letter, and a work inside a larger work", () => {
    const t = citedTitles("Britannica, T. Editors of Encyclopaedia. (n.d.-d). *Muddy Waters*. In *Encyclopædia Britannica*. https://www.britannica.com/biography/Muddy-Waters");
    expect(t.primary).toBe("Muddy Waters");
    expect(t.candidates).toContain("Encyclopædia Britannica");
  });

  it("legal citation: the case name before the year is a candidate", () => {
    const t = citedTitles("Shelley v. Kraemer, 334 U.S. 1 (1948). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/supremecourt/text/334/1");
    expect(t.candidates).toContain("Shelley v. Kraemer, 334 U.S. 1");
  });

  it("a numbered entry and a cut-off parenthetical", () => {
    expect(
      citedTitles("3. Bhatt, D. L. (2012). The suprachiasmatic nucleus as master clock: SCN architecture, output pathways, and peripheral clock synchronization. *Progress in Neurobiology, 99*(3), 321-340.").primary,
    ).toBe("The suprachiasmatic nucleus as master clock: SCN architecture, output pathways, and peripheral clock synchronization");
    expect(citedTitles("Pinney, T. (2005). A history of wine in America: From the beginnings to Prohibition (Vol. 1). University of California Press.").primary).toBe(
      "A history of wine in America: From the beginnings to Prohibition",
    );
  });

  it("a question mark ends the title before the journal name", () => {
    expect(citedTitles("Maccarrone, M. (2018). Circulating endocannabinoids: From whence do they come and where are they going? *Neuropsychopharmacology, 43*(1), 155-172. https://doi.org/10.1038/npp.2017.130").primary).toBe(
      "Circulating endocannabinoids: From whence do they come and where are they going?",
    );
  });

  it("a bracketed descriptor ends the title", () => {
    const t = citedTitles("Belden. (2026a). *Product 1694A: 75 ohm SDI coax* [Technical data sheet, revision 0.716]. https://catalog.belden.com/techdata/EN/1694A_techdata.pdf Locator: p. 1.");
    expect(t.primary).toBe("Product 1694A: 75 ohm SDI coax");
  });

  it("an entry with no year still gets a title to show", () => {
    const t = citedTitles("FAA Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25C), Chapter 14: Airport Operations, pages 14-22 and 14-23.");
    expect(t.primary.startsWith("FAA Pilot's Handbook of Aeronautical Knowledge")).toBe(true);
    expect(t.candidates.length).toBeGreaterThan(0);
  });
});

describe("normalizeTitle", () => {
  it("lowercases, drops punctuation, accents and possessives, reads & as and", () => {
    expect(normalizeTitle("Netflix’s ‘The Queen’s Gambit’ drives major boom in chess sales, games")).toBe(
      "netflix the queen gambit drives major boom in chess sales games",
    );
    expect(normalizeTitle("Medicine & Science in Sports & Exercise")).toBe("medicine and science in sports and exercise");
    expect(normalizeTitle("  Café   du  Monde ")).toBe("cafe du monde");
    expect(titlesMatch("SPJ code of ethics", "SPJ’s Code of Ethics | Society of Professional Journalists")).toBe(true);
  });
});

describe("titlesMatch", () => {
  it("matches through the site suffix after a dash or a pipe", () => {
    expect(titlesMatch("Understanding coaxial cable terms, specifications and applications", "Understanding Coaxial Cable Terms, Specifications and Applications - Coaxicom")).toBe(true);
    expect(titlesMatch("Muddy Waters", "Muddy Waters | Biography, Songs, & Facts | Britannica")).toBe(true);
  });

  it("the Search Craft cases: an invented title does not match a directory page", () => {
    expect(titlesMatch("Research guides: Getting started", "Home - Research Guides at Library of Congress")).toBe(false);
    expect(titlesMatch("Search strategies", "Home - Research Guides at Library of Congress")).toBe(false);
    expect(titlesMatch("PubMed user guide: Search techniques", "Help - PubMed")).toBe(false);
    expect(titlesMatch("Art and Architecture Thesaurus", "Vocabularies, Getty Tools and Databases")).toBe(false);
  });

  it("short cited titles match only exactly, never as a fragment", () => {
    expect(titlesMatch("GovInfo", "GovInfo")).toBe(true);
    expect(titlesMatch("Data.gov", "Data.gov Home")).toBe(true);
    expect(titlesMatch("Home", "Home - Research Guides at Library of Congress")).toBe(false);
    expect(titlesMatch("Help", "Help - PubMed")).toBe(false);
  });

  it("a site name inside the cited title is not a match, whichever side of the separator it sits", () => {
    expect(titlesMatch("Search tips for the National Archives Catalog", "Research Our Records | National Archives")).toBe(false);
    expect(titlesMatch("Search tips for the National Archives Catalog", "National Archives | Research Our Records")).toBe(false);
    expect(titlesMatch("Search tips for the National Archives Catalog", "Search Tips for the National Archives Catalog | National Archives")).toBe(true);
  });

  it("the page's own title is the first words of the cited one (a product page cited with its description)", () => {
    expect(titlesMatch("BST-55: Digital triax base station", "BST-55｜Ikegami USA")).toBe(true);
    expect(titlesMatch("UHK-430", "UHK-430｜Ikegami USA")).toBe(true);
    expect(titlesMatch("National Archives catalog search tips", "Research Our Records | National Archives")).toBe(false);
    expect(titlesMatch("SMPTE LTC generator", "SMPTE Linear Timecode Encoder")).toBe(false);
  });

  it("a page retitled by its site still matches through the URL slug", () => {
    const url = "https://coaxicom.com/understanding-coaxial-cable-terms-specifications-and-applications/";
    expect(slugMatches("Understanding coaxial cable terms, specifications and applications", url)).toBe(true);
    expect(slugMatches("Something else about cables", url)).toBe(false);
    expect(slugMatches("Help", "https://pubmed.ncbi.nlm.nih.gov/help/")).toBe(false);
    expect(slugMatches("Indianapolis Motor Speedway Radio Network", "https://www.ikegami.com/product/detail/1060/")).toBe(false);
    expect(anyTitleMatches(["Understanding coaxial cable terms, specifications and applications"], "Understanding Coaxial Cables | Coaxicom", null, [url])).toBe("slug");
    expect(anyTitleMatches(["Understanding coaxial cable terms, specifications and applications"], "Understanding Coaxial Cables | Coaxicom", null, [])).toBeNull();
  });

  it("a paraphrased title of six or more words nearly matches, never on a site root", () => {
    const cited = "Predicting the future climatic suitability for cocoa farming of the world's leading producing countries";
    const page = "Predicting the future climatic suitability for cocoa farming of the world’s leading producer countries, Ghana and Côte d’Ivoire | Climatic Change";
    expect(nearMatch(cited, page)).toBe(true);
    expect(anyTitleMatches([cited], page, null)).toBe("near");
    expect(anyTitleMatches([cited], page, null, [], true)).toBeNull();
    expect(nearMatch("Research guides: Getting started", "Home - Research Guides at Library of Congress")).toBe(false);
    expect(nearMatch("PubMed user guide: Search techniques and field tags", "Help - PubMed")).toBe(false);
    expect(anyTitleMatches(["Muddy Waters"], "Muddy Waters | Biography, Songs, & Facts | Britannica", null)).toBe("title");
    expect(anyTitleMatches(["Search tips"], "National Archives", "Search Tips | National Archives")).toBe("og");
  });

  it("either title inside the other, when long enough", () => {
    expect(
      titlesMatch(
        "Handbook of mathematical functions with formulas, graphs, and mathematical tables (Applied Mathematics Series 55)",
        "Handbook of mathematical functions with formulas, graphs, and mathematical tables",
      ),
    ).toBe(true);
    expect(titlesMatch("The impact of climate change on indigenous Arabica coffee", "The Impact of Climate Change on Indigenous Arabica Coffee (Coffea arabica): Predicting Future Trends | PLOS One")).toBe(true);
  });

  it("a truncated page title is a prefix of the cited one", () => {
    expect(titlesMatch("Understanding coaxial cable terms, specifications and applications", "Understanding coaxial cable terms, specifica...")).toBe(true);
    expect(titlesMatch("Something else entirely about cables", "Understanding coaxial cable terms, specifica...")).toBe(false);
  });

  it("an empty or unrelated title does not match", () => {
    expect(titlesMatch("", "Help - PubMed")).toBe(false);
    expect(titlesMatch("Cataloging and metadata", "")).toBe(false);
    expect(titlesMatch("Cataloging and metadata", "Page not found | OCLC")).toBe(false);
  });
});

describe("extractPageTitles", () => {
  it("reads <title> with entities and og:title in either attribute order", () => {
    const html = `<!doctype html><html><head>
      <title> Help &amp; Support &#39;Guide&#39; | PubMed </title>
      <meta content="PubMed Help" property="og:title">
      </head><body><svg><title>icon</title></svg></body></html>`;
    expect(extractPageTitles(html)).toEqual({ title: "Help & Support 'Guide' | PubMed", ogTitle: "PubMed Help" });
    expect(extractPageTitles(`<head><meta property='og:title' content='Single &quot;quoted&quot;'/></head>`)).toEqual({ title: null, ogTitle: 'Single "quoted"' });
  });

  it("no title at all", () => {
    expect(extractPageTitles("<html><body><h1>Research our records</h1></body></html>")).toEqual({ title: null, ogTitle: null });
  });
});

describe("bot walls and soft 404s", () => {
  it("recognises challenge pages by title or body marker", () => {
    expect(looksLikeBotWall("Just a moment...", "")).toBe(true);
    expect(looksLikeBotWall("Attention Required! | Cloudflare", "")).toBe(true);
    expect(looksLikeBotWall("Access Denied", "")).toBe(true);
    expect(looksLikeBotWall("Chronicling America", '<script src="/cdn-cgi/challenge-platform/h/b/orchestrate"></script>')).toBe(true);
    expect(looksLikeBotWall("Help - PubMed", "<p>Search PubMed</p>")).toBe(false);
  });

  it("recognises a 200 that says not found, and leaves a real title alone", () => {
    expect(looksLikeNotFound("Page not found | OCLC")).toBe(true);
    expect(looksLikeNotFound("404 Not Found")).toBe(true);
    expect(looksLikeNotFound("Help - PubMed")).toBe(false);
    expect(looksLikeNotFound("The 404 Club: a history")).toBe(false);
  });
});

describe("URLs", () => {
  it("cleans trailing punctuation and gives a bare DOI its resolver", () => {
    expect(cleanCitationUrl("https://example.com/page.")).toBe("https://example.com/page");
    expect(cleanCitationUrl("10.1109/PROC.1975.9939")).toBe("https://doi.org/10.1109/PROC.1975.9939");
    expect(cleanCitationUrl("elections.wi.gov")).toBeNull();
    expect(cleanCitationUrl(undefined)).toBeNull();
  });

  it("knows a site root from a deep page", () => {
    expect(isRootUrl("https://www.oclc.org/")).toBe(true);
    expect(isRootUrl("https://www.oclc.org")).toBe(true);
    expect(isRootUrl("https://x.org/index.html")).toBe(true);
    expect(isRootUrl("https://www.oclc.org/en/cataloging.html")).toBe(false);
    expect(isRootUrl(null)).toBe(false);
  });
});

describe("classify", () => {
  const cited = ["Search tips for the National Archives Catalog"];
  const url = "https://example.org/guide/search";

  it("network outcomes", () => {
    expect(classify(cited, url, undefined)).toBe("unchecked");
    expect(classify(cited, url, rec({ error: "timeout", status: null, finalUrl: null }))).toBe("timeout");
    expect(classify(cited, url, rec({ error: "dns", status: null, finalUrl: null }))).toBe("dead");
    expect(classify(cited, url, rec({ error: "network", status: null, finalUrl: null, errorDetail: "CERT_HAS_EXPIRED" }))).toBe("error");
  });

  it("blocked beats everything else, including a 404-shaped wall", () => {
    expect(classify(cited, url, rec({ status: 403 }))).toBe("blocked");
    expect(classify(cited, url, rec({ status: 401 }))).toBe("blocked");
    expect(classify(cited, url, rec({ status: 429 }))).toBe("blocked");
    expect(classify(cited, url, rec({ status: 200, title: "Just a moment...", botWall: true }))).toBe("blocked");
    expect(classify(cited, url, rec({ status: 503, title: "Attention Required! | Cloudflare", botWall: true }))).toBe("blocked");
  });

  it("dead: 404, 410, and a 200 that says not found", () => {
    expect(classify(cited, url, rec({ status: 404 }))).toBe("dead");
    expect(classify(cited, url, rec({ status: 410 }))).toBe("dead");
    expect(classify(cited, url, rec({ status: 200, title: "Page not found | OCLC", softNotFound: true }))).toBe("dead");
  });

  it("other failures are errors, not dead", () => {
    expect(classify(cited, url, rec({ status: 500 }))).toBe("error");
    expect(classify(cited, url, rec({ status: 405 }))).toBe("error");
    expect(classify(cited, url, rec({ status: 302, finalUrl: url }))).toBe("error");
  });

  it("a PDF that answers 200 is ok without a title", () => {
    expect(classify(cited, "https://example.org/a.pdf", rec({ url: "https://example.org/a.pdf", finalUrl: "https://example.org/a.pdf", contentType: "application/pdf" }))).toBe("ok");
  });

  it("a deep link that lands on the site root", () => {
    expect(classify(cited, url, rec({ finalUrl: "https://example.org/", title: "Example" }))).toBe("redirect-to-home");
    expect(classify(["Example"], "https://example.org/", rec({ url: "https://example.org/", finalUrl: "https://example.org/", title: "Example" }))).toBe("ok");
  });

  it("a site root is judged strictly: the citation may not say more than the page (the Search Craft finding)", () => {
    const home = (title: string, ogTitle: string | null = null) =>
      rec({ url: "https://guides.loc.gov/", finalUrl: "https://guides.loc.gov/", title, ogTitle });
    const loc = home("Home - Research Guides at Library of Congress", "Research Guides");
    expect(classify(["Research guides: Getting started"], "https://guides.loc.gov/", loc)).toBe("title-mismatch");
    expect(classify(["Research guides: Search strategies"], "https://guides.loc.gov/", loc)).toBe("title-mismatch");
    expect(classify(["Research guides"], "https://guides.loc.gov/", loc)).toBe("ok");
    expect(classify(["GovInfo"], "https://www.govinfo.gov/", rec({ url: "https://www.govinfo.gov/", finalUrl: "https://www.govinfo.gov/", title: "GovInfo" }))).toBe("ok");
    expect(classify(["Data.gov"], "https://data.gov/", rec({ url: "https://data.gov/", finalUrl: "https://data.gov/", title: "Data.gov Home" }))).toBe("ok");
    // The same shape on a deep product page is a description added to a correctly named page.
    expect(classify(["BST-55: Digital triax base station"], "https://www.ikegami.com/product/detail/1058/", rec({ url: "https://www.ikegami.com/product/detail/1058/", finalUrl: "https://www.ikegami.com/product/detail/1058/", title: "BST-55｜Ikegami USA" }))).toBe("ok");
  });

  it("titles: none, a match through <title>, a match through og:title, a mismatch", () => {
    expect(classify(cited, url, rec({}))).toBe("no-title");
    expect(classify(cited, url, rec({ title: "Search Tips for the National Archives Catalog | National Archives" }))).toBe("ok");
    expect(classify(cited, url, rec({ title: "National Archives", ogTitle: "Search tips for the National Archives Catalog" }))).toBe("ok");
    expect(classify(cited, url, rec({ title: "Research Our Records | National Archives" }))).toBe("title-mismatch");
    expect(classifyDetailed(cited, url, rec({ title: "Search Tips for the National Archives Catalog | National Archives" }))).toEqual({ cls: "ok", matchedBy: "title" });
  });

  it("a deep page with only the host's one generic title, or a hostname for a title, is no-title and not counted", () => {
    const generic = (host: string, title: string) => host === "search.catalog.loc.gov" && title === "Library of Congress Catalog";
    const lccn = rec({ url: "https://lccn.loc.gov/76367365", finalUrl: "https://search.catalog.loc.gov/search?option=lccn&query=76367365", title: "Library of Congress Catalog" });
    expect(classifyDetailed(["The empty space"], "https://lccn.loc.gov/76367365", lccn, { isGenericTitle: generic })).toEqual({ cls: "no-title", genericTitle: "Library of Congress Catalog" });
    expect(classify(["The empty space"], "https://lccn.loc.gov/76367365", lccn)).toBe("title-mismatch");
    expect(classify(["Library of Congress Catalog"], "https://lccn.loc.gov/76367365", lccn, { isGenericTitle: generic })).toBe("ok");
    const pubmed = rec({ url: "https://pubmed.ncbi.nlm.nih.gov/9428819/", finalUrl: "https://pubmed.ncbi.nlm.nih.gov/9428819/", title: "pubmed.ncbi.nlm.nih.gov" });
    expect(classify(["Protective and damaging effects of stress mediators"], "https://pubmed.ncbi.nlm.nih.gov/9428819/", pubmed)).toBe("no-title");
    // A site root keeps its generic title: a home page cited for something specific is the finding.
    const root = rec({ url: "https://law.lis.virginia.gov/", finalUrl: "https://law.lis.virginia.gov/", title: "Virginia Law" });
    expect(classify(["Constitution of Virginia, Article V (Executive)"], "https://law.lis.virginia.gov/", root, { isGenericTitle: () => true })).toBe("title-mismatch");
    expect(UNCHECKABLE.has("no-title")).toBe(true);
    expect(UNCHECKABLE.has("title-mismatch")).toBe(false);
  });

  it("JavaScript interstitials are blocked, and the section sign decodes", () => {
    expect(looksLikeBotWall("Redirecting", "")).toBe(true);
    expect(looksLikeBotWall("Federal Register :: Request Access", "")).toBe(true);
    expect(decodeEntities("18 U.S. Code &sect; 2511")).toBe("18 U.S. Code § 2511");
  });
});
