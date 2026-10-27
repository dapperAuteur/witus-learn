// Citation registry — every source cited by a staged course, as a checkable list.
//
// This is LIST A of the two-list verification system (docs/citation-verification-plan.md).
// List B is src/lib/research-checks.ts: the small, hand-written queue of facts Claude could not
// confirm. They are deliberately separate surfaces, because mixing ten questions that need judgment
// into six thousand citations that are probably fine buries the ten that matter.
//
// WHERE THE DATA COMES FROM. `pnpm gen:citations` reads `lessons.text_content` from the DATABASE for
// the staged courses and writes src/lib/citation-content/citations.ts, which this file imports.
// Reading the database rather than scripts/data/*-course.ts is the load-bearing choice: a large part
// of this catalog is not committed TypeScript. BVC episodes come from CSVs in the gitignored
// content/bvc/, health courses are generated, FAA and the languages have their own seeders. A
// generator reading only the committed course modules would cover about two thirds of the library
// and report success, which is the failure mode this whole feature exists to prevent.
//
// Nothing here touches the filesystem or the database at request time.

import { STAGED_CITATIONS } from "@/lib/citation-content/citations";

export type CitationStatus = "unverified" | "verified" | "broken" | "mismatch";

export const CITATION_STATUS_LABEL: Record<CitationStatus, string> = {
  unverified: "Not checked yet",
  verified: "Verified: exists and supports the claim",
  broken: "Link is dead or the source cannot be found",
  mismatch: "Source exists but does not say what the lesson claims",
};

export interface Citation {
  /** `<courseSlug>:<hash>` — the join key for course_citation_checks.citation_key.
   *
   *  The hash is of the NORMALIZED entry text, so reordering a Sources list does not disturb the
   *  keys, and editing a citation DOES mint a new one. That second half is deliberate: an edited
   *  citation is a different claim and should be re-verified. It is the opposite call from
   *  quiz_attempts.questionKey, where a reworded prompt must not reset a learner's history, and the
   *  difference is that a quiz answer is a person's record while a citation check is a statement
   *  about the text as it stands today. */
  key: string;
  courseSlug: string;
  courseTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  /** The citation entry as it appears in the lesson, minus the leading bullet. */
  text: string;
  /** First URL or DOI found in the entry, when there is one. Most of the checking is clicking this. */
  url?: string;
  /**
   * The sentence in the lesson that carries this source's in-text citation, when one was found.
   *
   * This is the whole question the reviewer is being asked, in one line: the board asks whether the
   * source "says what the lesson claims", and until now it showed the source and not the claim. It
   * is computed at generation time by `pnpm gen:citations` (src/lib/lesson-excerpt.ts) and committed
   * with the rest of the registry, so this module still reads no database at request time.
   *
   * ABSENT MEANS NOT FOUND, never "there is none". A course that cites in a style the matcher does
   * not recognise gets no excerpt and the reviewer follows the lesson link instead. Showing a
   * nearby-looking sentence would be worse than showing nothing: it reads as the lesson's own words.
   */
  excerpt?: string;
}

/**
 * Courses whose citations have been generated, in rollout order.
 *
 * STAGE 1 (2026-08-03): the four courses just created, which nobody has ever checked, plus the
 * twelve BAM is enrolled in, because those are the ones he can read alongside the citation list.
 *
 * To advance a stage: add slugs here, run `pnpm gen:citations`, commit the regenerated module. There
 * is no code change after stage 1. The plan for stages 2-5 is in docs/citation-verification-plan.md.
 */
export const STAGED_COURSES: string[] = [
  // The Crew Behind the Show, CREW-00 and CREW-04 to CREW-06 (staged 2026-10-26). CREW-04 and CREW-05
  // were meant to join after their 2026-10-21 merges and did not; CREW-00 joins on shipping. All four
  // are held for qualified reviewers, and their open questions sit in src/lib/research-checks.ts
  // (crew00-*, megalodon-*, crew05-*): a verifier should expect hedged sentences, not errors, there.
  "cables-and-connectors",
  "cinema-look-camera-rig",
  "arena-transmission",
  "renting-out-production-gear",
  // Newly created, never reviewed by anyone
  "read-the-statements",
  "map-and-compass",
  "the-slide-rule",
  "surveying-how-land-gets-measured",
  "reading-a-land-description",
  "stage-and-broadcast-rigging",
  "sound-craft",
  "light-on-set",
  "raising-animals-for-yarn",
  "manure-and-compost",
  "making-string",
  "crochet",
  "the-match",
  "written-by-himself",
  "territories-and-representation",
  "who-signs-the-print",
  "the-name-on-the-door",
  "who-gets-named",
  "voice-acting",
  "well-orientation-scope",
  "well-coaching-psychology",
  "well-coaching-movement",
  "well-coaching-nutrition",
  "well-recovery-stress",
  "well-sleep",
  "well-mental-wellbeing",
  "well-movement-longevity",
  "well-context-equity",
  "well-centenarian-capstone",
  "bvc-taster-wine",
  "bvc-taster-coffee",
  "bvc-taster-chocolate",
  "surplus-funds-basics",
  // BAM's enrolled courses
  "ai-b1-prompt-engineering",
  "ai-literacy",
  "coffee",
  "faa-part-107",
  "green-book-how-to-read-a-route",
  "education-leadership-doctoral-rigor",
  "how-to-create-a-course",
  "langgraph-triage-agent",
  "nasm-cpt",
  "read-your-bodys-data",
  "spanish",
  "state-civics-in",
  // Here Be Dragons (plans/58). Staged as a set, because the series' whole subject is the difference
  // between a claim and the evidence for it: a course teaching that, with sources nobody has checked,
  // would be the most self-undermining thing in the catalog. Several of these deliberately cite
  // CONTESTED scholarship (the griffin thesis and its 2024 rebuttal, the Brontosaurus proposal, the
  // Deccan-tempo papers that disagree with each other), so a verifier should expect to confirm that a
  // source exists and says what the lesson says it says, NOT that the field agrees with it.
  "monsters-at-the-edge-of-the-map",
  "giants-dragons-and-the-bones",
  "deep-time-and-the-dinosaur-renaissance",
  "wrong-for-good-reasons",
  "writing-the-world",
  // WARRANT-02. Staged because its whole argument rests on documents a reader can open: statutes on
  // uscode.house.gov, a Federal Register notice, two scanned census volumes read page by page, a
  // civil rights commission report that contradicts itself, CRS and GAO reports, filed court orders,
  // and one paywalled newspaper investigation whose byline, headline and date were confirmed through
  // an archived capture. A verifier should check that each source EXISTS, still resolves, and says
  // what the lesson says it says. Two known traps for whoever takes this on: the New York Times URL
  // returns 403 to automated fetch but resolves in a browser, and Cornell's agcensus archive, which
  // older writing on this subject cites, is retired and now redirects to USDA NASS.
  "the-county-committee",
  // The Negro Leagues: Who Owned the Game. Staged late and it should not have been: the course
  // shipped without ever joining this list, which the citation-verification rule requires of every
  // course when it ships. Caught while adding Section 7 (Outside the league), whose whole subject is
  // the difference between a cited claim and a repeated one, so shipping it with unchecked sources
  // would be self-undermining. Its `## Sources` blocks carry SABR biographies and research articles,
  // Hall of Fame pages, the New Georgia Encyclopedia, Seamheads, a peer-reviewed journal article and
  // a book review. Three things a verifier should expect and NOT treat as errors: the course
  // deliberately cites CONTESTED accounts (four incompatible versions of Rube Foster's cut, two
  // databases disagreeing on the single-season batting record, three different won-lost records for
  // interracial play from one book), it names figures it refuses to state, and Section 7 reports two
  // Peterson figures as attributed rather than verified because the page carrying them returns 403.
  "negro-leagues",
  // Every other PUBLIC course with sourced lessons in production, staged at once (BAM, 2026-10-26:
  // "stage all"). Listed from the database: visibility other than private, and lessons carrying
  // ## Sources or ## References. Private courses stay out (README: none is staged while private),
  // because this registry is committed to a public repository.
  "acting",
  "africa-before-colonization",
  "afrocentricity",
  "ai-b2-agents-automations",
  "ai-b3-rag",
  "ai-b4-fine-tuning",
  "ai-b5-deploying-evaluating",
  "ai-b6-ai-product-capstone",
  "ai-e1-marketing",
  "ai-e2-operations",
  "ai-e3-customer-research",
  "ai-e4-product-service",
  "ai-e5-finance-analytics-capstone",
  "ai-for-entrepreneurs",
  "ai-l1-advanced-prompting",
  "ai-l2-detecting-ai",
  "ai-l3-ethics",
  "ai-l4-privacy-security",
  "ai-l5-researching",
  "ai-y1-train-your-model",
  "ai-y2-robotics-ai",
  "ai-y3-creative-ai",
  "ai-y4-science-fair-capstone",
  "archives-and-finding-aids",
  "asia-before-european-colonization",
  "baltimore-the-whole-chain",
  "banking-abroad",
  "banking-and-the-unbanked",
  "beer",
  "broadcasting-break-in",
  "building-with-ai",
  "business-governance",
  "cannabis",
  "cash-flow-timing",
  "chess",
  "chocolate",
  "choose-a-form-capstone",
  "citizenship-naturalization",
  "civic-documentation",
  "coca",
  "cooperatives",
  "credit-decisions",
  "croquet",
  "cybersecurity-get-the-job",
  "dc-where-the-instrument-was-blessed",
  "demo-citizenship-naturalization",
  "demo-forms-of-government",
  "demo-how-countries-constitute",
  "demo-indiana-civics",
  "dental-health-101",
  "digital-social-storytelling",
  "documentary",
  "documents-against-people",
  "dual-citizenship",
  "ecs-fitness",
  "ecs-foundations",
  "ecs-neuroscience",
  "ecs-nutrition",
  "exported-how-others-studied-american-race-law",
  "fact-checking-as-a-discipline",
  "financing-without-access",
  "flying-coming-home",
  "football",
  "foreign-business-forms",
  "forest-wisdom",
  "forms-of-government",
  "fort-harrison-the-federal-footprint",
  "full-spectrum",
  "genealogy-for-yourself-and-your-community",
  "golf-play-know-work",
  "governments-without-states",
  "great-migration",
  "great-migration-and-the-world",
  "harvard-ed-l-d",
  "healthcare-abroad",
  "help-a-campaign",
  "history-of-bathing",
  "history-of-unions",
  "hoodoo-tradition-of-resistance",
  "housing-decisions",
  "how-a-bill-becomes-law",
  "how-countries-constitute",
  "how-power-changes-hands",
  "how-stories-work",
  "how-the-tools-travelled",
  "how-to-read-a-number",
  "how-to-research",
  "how-to-run-for-office",
  "how-we-know-whats-out-there",
  "indiana-avenue-a-district-and-what-replaced-it",
  "international-travel-basics",
  "intro-robotics-steam",
  "intro-to-citizen-science",
  "jury-duty-courts",
  "kava",
  "khat",
  "knot-tying",
  "know-your-rights",
  "know-your-rights-at-work",
  "labor-brazil",
  "labor-chile",
  "labor-germany",
  "labor-india",
  "labor-mexico",
  "labor-poland",
  "labor-south-africa",
  "labor-south-korea",
  "lacrosse-creators-game",
  "langgraph-per-agent-rag",
  "langgraph-reflection-loops",
  "learning-how-to-learn",
  "map-your-own-stack",
  "mockumentary",
  "monodrama-performing",
  "monodrama-writing",
  "moving-abroad-101",
  "mudsock-how-a-rivalry-marks-a-boundary",
  "naacp-learned-to-win",
  "nasm-ces",
  "nasm-cnc",
  "news-storytelling",
  "off-grid-survival",
  "opioids",
  "oral-history",
  "pan-africanism",
  "philadelphia-the-university-and-the-block",
  "pickleball",
  "pittsburgh-where-the-playbook-was-written",
  "precolumbian-mesoamerica",
  "predatory-products",
  "psychedelics",
  "reporter-capstone",
  "reporter-interviewing",
  "reporter-media-law",
  "reporter-pitch-and-shapes",
  "reporter-public-records",
  "reporter-reading-a-report",
  "reporter-solutions-journalism",
  "reporter-verification-on-deadline",
  "reporter-what-a-beat-is",
  "research-as-a-job",
  "researcher-capstone",
  "retirement-accounts",
  "retiring-abroad",
  "rights-permissions-and-clearances",
  "river-cairo-the-confluence",
  "river-finding-your-way",
  "river-living-on-the-water",
  "river-locks-dams-and-barges",
  "river-sold-down-the-river",
  "river-telling-the-river",
  "river-the-dead-zone",
  "river-the-delta-and-the-migration",
  "river-the-ohio-and-the-line",
  "river-the-wabash-headwaters",
  "river-what-an-expedition-is",
  "rum",
  "sake",
  "search-craft",
  "seattle-the-modern-bookend",
  "she-took-the-seat",
  "shipping-logistics-abroad",
  "shirley-graham",
  "short-form-drama",
  "speedway",
  "spotting-misleading-marketing",
  "state-civics-ak",
  "state-civics-al",
  "state-civics-ar",
  "state-civics-az",
  "state-civics-ca",
  "state-civics-co",
  "state-civics-ct",
  "state-civics-dc",
  "state-civics-de",
  "state-civics-fl",
  "state-civics-ga",
  "state-civics-hi",
  "state-civics-ia",
  "state-civics-id",
  "state-civics-il",
  "state-civics-ks",
  "state-civics-ky",
  "state-civics-la",
  "state-civics-ma",
  "state-civics-md",
  "state-civics-me",
  "state-civics-mi",
  "state-civics-mn",
  "state-civics-mo",
  "state-civics-ms",
  "state-civics-mt",
  "state-civics-nc",
  "state-civics-nd",
  "state-civics-ne",
  "state-civics-nh",
  "state-civics-nj",
  "state-civics-nm",
  "state-civics-nv",
  "state-civics-ny",
  "state-civics-oh",
  "state-civics-ok",
  "state-civics-or",
  "state-civics-pa",
  "state-civics-ri",
  "state-civics-sc",
  "state-civics-sd",
  "state-civics-tn",
  "state-civics-tx",
  "state-civics-ut",
  "state-civics-va",
  "state-civics-vt",
  "state-civics-wa",
  "state-civics-wi",
  "state-civics-wv",
  "state-civics-wy",
  "state-vs-federal",
  "studying-abroad",
  "sugar",
  "supreme-court-judicial-branch",
  "sweden-denmark-nordic-model",
  "synthesis",
  "taxes-americans-abroad",
  "taxes-and-filing",
  "tea",
  "tennis",
  "tequila-mezcal",
  "the-editor-of-the-crisis",
  "the-gym-and-the-color-line",
  "the-local-layer",
  "the-middle-layer",
  "the-moors",
  "the-paper-and-the-prize",
  "the-presidents-house",
  "the-research-file",
  "the-river-and-the-watershed",
  "the-schoolhouse-network",
  "the-toast",
  "tobacco",
  "tracing-a-person-through-records",
  "training-the-colonizer",
  "travel-visas-101",
  "tribal-nations-governance",
  "two-racetracks",
  "us-business-forms",
  "us-civics-101",
  "us-constitution-101",
  "us-passport",
  "us-state-local-government",
  "using-learn-build-a-course",
  "using-learn-cohorts",
  "using-learn-learner",
  "using-learn-parent",
  "using-learn-run-your-course",
  "using-learn-run-your-school",
  "voting-elections-101",
  "what-a-business-entity-is",
  "what-they-built",
  "where-we-rested",
  "whiskey",
  "who-gets-the-credit",
  "who-has-the-power",
  "who-made-the-record",
  "who-owns-the-steps",
  "wine",
  "woop-science-of-doing-it",
  "writing-poems-and-songs",
  "young-makers-ai",
];

export const CITATIONS: Citation[] = STAGED_CITATIONS;

export function getCitation(key: string): Citation | undefined {
  return CITATIONS.find((c) => c.key === key);
}

export interface CitationCourseGroup {
  courseSlug: string;
  courseTitle: string;
  citations: Citation[];
}

/** Grouped by course, in STAGED_COURSES order so the newest and least-checked sit at the top. */
export function citationsByCourse(limitToCourses?: string[]): CitationCourseGroup[] {
  const allowed = limitToCourses ? new Set(limitToCourses) : null;
  const groups = new Map<string, CitationCourseGroup>();
  for (const c of CITATIONS) {
    if (allowed && !allowed.has(c.courseSlug)) continue;
    const g = groups.get(c.courseSlug);
    if (g) g.citations.push(c);
    else groups.set(c.courseSlug, { courseSlug: c.courseSlug, courseTitle: c.courseTitle, citations: [c] });
  }
  const order = new Map(STAGED_COURSES.map((s, i) => [s, i] as const));
  return [...groups.values()].sort(
    (a, b) => (order.get(a.courseSlug) ?? 999) - (order.get(b.courseSlug) ?? 999),
  );
}
