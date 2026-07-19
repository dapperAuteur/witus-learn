// ─────────────────────────────────────────────────────────────────────────────
// RHODE ISLAND — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ri` was written FROM Rhode Island's own official sources (rilegislature.gov,
// sos.ri.gov, courts.ri.gov, and the Rhode Island Constitution), so Rhode Island's civics
// flagship gets a genuine home: the 2023 HS Civics standards name RHODE ISLAND explicitly —
// SSHS.CVC.4.5 (the powers of "the state of Rhode Island" and the Narragansett tribal government),
// SSHS.CVC.2.4 and SSHS.CVC.3.2 (Rhode Island's refusal to send a delegate to, and reluctance to
// ratify out of, the Constitutional Convention), and SSHS.CVC.6.3 (the Dorr Rebellion in Rhode
// Island as a change in voting requirements).
//
// THE INHERIT-VS-BESPOKE CALL, made per framework from RIDE's own record (Rhode Island is
// INHERIT-heavy — the bespoke work is the 2023 social-studies frame):
//   · ELA — INHERITED (verbatim, no aliases). The Rhode Island Department of Education adopted the
//     Common Core State Standards for ELA and mathematics on July 1, 2010, with full implementation
//     in 2013-2014. Rhode Island adopted the CCSS as published and did NOT renumber them, so
//     ../shared/common-core-ela is adopted verbatim, keeping the canonical CCSS codes (contrast
//     Michigan, which prints the bare RH.11-12.6 form and therefore aliases). We claim no
//     mathematics standards.
//   · Science — INHERITED (verbatim). Rhode Island was the FIRST state to adopt the Next Generation
//     Science Standards (spring 2013) and was an NGSS Lead State; in 2024 the Rhode Island Board of
//     Education reaffirmed the NGSS as the state's official science and technology standards.
//     HS-ESS3-1, the one PE we cite, is a standard NGSS PE, so ../shared/ngss is adopted verbatim.
//     This is not a science course; see the note on the entry itself.
//   · Social studies — BESPOKE. The Rhode Island Social Studies Standards (2023), endorsed by the
//     Council on Elementary and Secondary Education in February 2023, are Rhode Island's own,
//     inquiry/C3-based. The High School Civics course is organized into eight Inquiry Topics, each
//     with a compelling question and standards coded SSHS.CVC.<topic>.<n>. Each standard prints a
//     short title and a one-sentence standard STATEMENT (the "Analyze…/Argue…/Explain…" descriptor);
//     we cite that STATEMENT verbatim as the standard's text.
//
// PROVENANCE (social studies): transcribed VERBATIM from the RIDE-published PDF at
// ride.ri.gov/.../HS_Civics_RI_SocialStudies_Standards.pdf (the "RHODE ISLAND SOCIAL STUDIES
// STANDARDS … HIGH SCHOOL – CIVICS" document, pages 190-222 of 366), fetched 2026-07-19; this is a
// public RIDE deep link that also serves the automated fetch, so no mirror was needed. The
// document's own curly quotation marks around terms it defines (“human rights”, “global
// citizenship”, “fix”, “and Providence Plantations”) are transcribed verbatim; one extraction
// artifact — the double space RIDE prints in "judicial  branch" (SSHS.CVC.4.4) and the stray space
// RIDE prints in "short- and long- term" (SSHS.CVC.6.4) — was collapsed to a single space and a
// single "short- and long-term" (a layout/line-wrap artifact, not citable text). Codes are cited
// exactly as printed (SSHS.CVC.4.5, etc.).
//
// SECURITY / injection: nothing in the RIDE document was instruction-shaped; it is ordinary
// standards prose. No embedded-instruction content was found.
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const RI_SS =
  "https://ride.ri.gov/sites/g/files/xkgbur806/files/2023-04/HS_Civics_RI_SocialStudies_Standards.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "RI",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      adoption:
        "The Rhode Island Department of Education adopted the Common Core State Standards for English language arts and mathematics on July 1, 2010, with full implementation in 2013-2014. Rhode Island adopted the standards as published and did not renumber them, so the shared Common Core ELA file is adopted verbatim with no aliases; the literacy-in-history/social-studies (RH), informational-reading (RI), and writing-in-history (WHST) grade 11-12 strands are the ones this catalog touches, and the text here is the CCSS publisher's verbatim wording (thecorestandards.org). We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "Rhode Island was the FIRST state to adopt the Next Generation Science Standards (spring 2013) and served as an NGSS Lead State; in 2024 the Rhode Island Board of Education reaffirmed the NGSS as the state's official science and technology standards (under RIGL § 16-22-31). HS-ESS3-1, the one performance expectation we cite, is a standard NGSS PE, so the shared NGSS file is adopted verbatim. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── Rhode Island Social Studies Standards (2023) — High School Civics (SSHS.CVC) ──
    {
      id: "ri-civics",
      subject: "Social Studies",
      name: "Rhode Island Social Studies Standards — High School Civics (SSHS.CVC)",
      publisher:
        "Rhode Island Department of Education (RIDE) / Council on Elementary and Secondary Education",
      version: "Rhode Island Social Studies Standards, 2023 · High School Civics (SSHS.CVC)",
      fetchedOn: "2026-07-19",
      sourceUrl: RI_SS,
      adoption:
        "Rhode Island's High School Civics course is the anchor for the Rhode Island Civics flagship. Its Inquiry Topic 4 standard on “State, local, and tribal governments” (SSHS.CVC.4.5) names the powers of the state of Rhode Island and the Narragansett tribal government explicitly, so — unlike the purely-federal states — the Rhode Island flagship's own-government lessons (no county governments, the 2004 separation-of-powers reform, a Supreme Court with life tenure, the weak veto, the 2020 name change) have a genuine home. The federal-ladder standards in Inquiry Topics 3 and 4 carry the general civics claims, Topic 2/3 host Rhode Island's ratification history, and Topic 6 hosts the Dorr Rebellion. Transcribed verbatim from the 2023 RIDE Social Studies Standards (see the file header for the provenance note).",
      standards: [
        // — The flagship's home: Rhode Island's own state and local government —
        {
          code: "SSHS.CVC.4.5",
          text: "Analyze other governmental systems of the United States, including state, local, and tribal governments, and their interactions with each other and the federal government",
          claimIds: [
            "civics.ri-separation-powers",
            "civics.ri-general-assembly",
            "civics.ri-life-tenure-court",
            "civics.ri-no-counties",
            "civics.local-government-layers",
            "civics.federalism-why-split-power",
          ],
          coverage: "partial",
          note: "This is the flagship's primary home: Rhode Island's own state and local structure is taught in depth — the plural executive and the 2004 separation-of-powers reform, the General Assembly and its weak (three-fifths override) veto, the life-tenure Supreme Court, and the two-tier system with NO county governments (39 cities and towns). Partial because the standard also requires TRIBAL governments — it names the Narragansett explicitly — and the course does not teach the Narragansett Tribe's government (see notClaimed).",
        },
        // — Rhode Island's ratification history (the flagship's founding lessons) —
        {
          code: "SSHS.CVC.3.2",
          text: "Argue the impacts of the compromises that went into the passage of the Constitution of the United States, including the addition of the Bill of Rights",
          claimIds: [
            "civics.ri-name-founding",
            "civics.bill-of-rights-origin",
            "civics.articles-to-constitution",
          ],
          coverage: "partial",
          note: "The Rhode Island angle the standard names — the reasons for Rhode Island's reluctance to ratify — is taught directly: the flagship teaches that Rhode Island was the last of the 13 to ratify, holding out until a Bill of Rights was assured, and the Bill of Rights is taught as a document. Partial because the standard's broader compromise survey (the anti-federalists, the Great Compromise) is not the course's focus.",
        },
        {
          code: "SSHS.CVC.2.4",
          text: "Argue the impacts of the challenges the founders faced to the creation of a new government under the Constitution of the United States",
          claimIds: ["civics.articles-to-constitution", "civics.federalism-why-split-power", "civics.ri-name-founding"],
          coverage: "partial",
          note: "The founding challenges the standard frames — the move from the Articles of Confederation to the 1787 Constitution and the federalism debate — are taught, and the flagship teaches Rhode Island's holdout on ratification. Partial because the standard's specific Rhode Island learning objective (why Rhode Island refused to send a delegate to the Constitutional Convention) and the Virginia/New Jersey-plan detail are set up rather than worked.",
        },
        {
          code: "SSHS.CVC.2.3",
          text: "Argue the impacts of the issues and challenges to the Articles of Confederation",
          claimIds: ["civics.articles-to-constitution"],
          coverage: "partial",
          note: "Why the Articles of Confederation failed — and how that produced the 1787 Constitution — is taught directly. Partial because the standard's named example, Shays' Rebellion, is not separately worked.",
        },
        // — The Constitution, the branches, and checks and balances (the federal ladder) —
        {
          code: "SSHS.CVC.3.1",
          text: "Argue the impact of the structure of government and law established by the Constitution of the United States and Bill of Rights",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.federal-articles-i-iii",
            "civics.separation-checks-balances",
          ],
          coverage: "partial",
          note: "The structure of government the Constitution establishes is taught article by article, with the Bill of Rights. Partial because the standard's Haudenosaunee-Confederacy-influence guiding question is not worked.",
        },
        {
          code: "SSHS.CVC.3.4",
          text: "Argue the impacts of interpreting and using the Constitution of the United States to expand freedom and opportunity",
          claimIds: ["rights.landmark-cases", "rights.scotus-precedent", "history.labor-civil-rights", "history.jim-crow-and-long-shadow"],
          coverage: "partial",
          note: "Using the Constitution to expand freedom is taught as usable rules — the landmark rights cases and how Supreme Court precedent expands rights over time — and the civil-rights arc is reached through the labor half of the movement and the Jim Crow order people fled. Partial because the specific amendments and cases the standard names (the 13th/14th/15th, Brown, the 1964 Civil Rights Act, the 19th) are not each worked.",
        },
        {
          code: "SSHS.CVC.4.1",
          text: "Argue the ways the Enlightenment idea of checks and balances as a deterrent to tyranny influenced the Constitution of the United States",
          claimIds: ["civics.separation-checks-balances", "civics.federalism-why-split-power"],
          coverage: "full",
          note: "Checks and balances as a deterrent to tyranny, both among the three branches and between the state and national governments (federalism), are taught directly in the Constitution and federalism courses.",
        },
        {
          code: "SSHS.CVC.4.2",
          text: "Analyze the structure and role of the legislative branch of the national government",
          claimIds: ["civics.federal-articles-i-iii", "civics.three-branches-federal", "civics.federal-bill-process"],
          coverage: "full",
          note: "Article I's legislative branch, its powers, and how it makes law (including the checks it exercises on the other branches) are taught end to end.",
        },
        {
          code: "SSHS.CVC.4.3",
          text: "Analyze the structure and role of the executive branch of the national government",
          claimIds: ["civics.federal-articles-i-iii", "civics.three-branches-federal"],
          coverage: "full",
          note: "Article II's executive branch, its powers, and its checks on the legislative and judicial branches are taught directly.",
        },
        {
          code: "SSHS.CVC.4.4",
          text: "Analyze the structure and role of the judicial branch of the national government",
          claimIds: ["civics.federal-judiciary-structure", "civics.judicial-review-marbury", "civics.scotus-nomination-confirmation"],
          coverage: "full",
          note: "Article III's judiciary, judicial review through Marbury v. Madison (the standard's own check example), and the nomination-and-confirmation process are each taught by name.",
        },
        // — Government, functions, and citizenship (Inquiry Topic 1) —
        {
          code: "SSHS.CVC.1.2",
          text: "Analyze the functions of government and ways that governments provide services and benefits to the population they serve",
          claimIds: ["civics.three-branches-federal", "civics.separation-checks-balances", "civics.preamble-purposes"],
          coverage: "partial",
          note: "The legislative, executive, and judicial functions of government and the checks on each are taught in depth, and the Preamble is worked clause by clause as the purposes of government. Partial because the standard's “provide services and benefits to the population” (welfare-state) framing is not the course's focus.",
        },
        {
          code: "SSHS.CVC.1.3",
          text: "Argue how different definitions of citizenship and how to act as a citizen have impacted different people over time",
          claimIds: ["civics.us-citizenship-law", "civics.citizenship-responsibilities"],
          coverage: "partial",
          note: "Legal citizenship (the 14th Amendment, birthright, naturalization) and the responsibilities of an active citizen are taught directly. Partial because the standard's historical analysis — how definitions of citizenship changed over time, the barriers, and who benefited — is lighter than its content.",
        },
        // — Participation, elections, and Rhode Island's voting history —
        {
          code: "SSHS.CVC.6.3",
          text: "Argue the impact of the political marginalization of different groups in American history",
          claimIds: ["civics.ri-name-founding", "history.jim-crow-and-long-shadow", "history.labor-civil-rights"],
          coverage: "partial",
          note: "The Rhode Island example the standard names — the Dorr Rebellion, which ended a property-restricted franchise and expanded suffrage — is taught in the flagship's founding lesson, and marginalization by race is reached through the Jim Crow order and the civil-rights movement. Partial because a full history of every group's fight for voting rights is not the arc.",
        },
        {
          code: "SSHS.CVC.5.4",
          text: "Argue the impacts people can have on the American political system by becoming involved with political parties, interest groups, and politics",
          claimIds: ["civics.ri-get-involved", "civics.show-up-every-level", "civics.campaign-help", "civics.citizenship-responsibilities"],
          coverage: "partial",
          note: "Becoming politically involved is taught as practice — Rhode Island's own on-ramps, showing up at every level, and helping a campaign lawfully. Partial because the standard's political-parties-and-interest-groups framing (why people join parties, the barriers to participation) is not the course's focus.",
        },
        {
          code: "SSHS.CVC.6.1",
          text: "Analyze the different types of voting systems and how people vote",
          claimIds: ["civics.election-mechanics", "civics.voter-registration", "civics.ri-get-involved"],
          coverage: "partial",
          note: "How people vote — registering, the voting process, and Rhode Island's own rules (early voting, mail ballots, voter ID) — is taught directly. Partial because the standard's comparison of voting systems (plurality, majority, proportional) and electoral-integrity principles are not the method.",
        },
        {
          code: "SSHS.CVC.6.2",
          text: "Explain the functions of primary and general elections in the United States",
          claimIds: ["civics.election-mechanics"],
          coverage: "full",
          note: "The functions of primary and general elections — and how the vote is monitored, counted, and certified — are taught directly in the elections course.",
        },
        {
          code: "SSHS.CVC.6.4",
          text: "Argue the short- and long-term implications of voter turnout and participation on the outcomes of the political process",
          claimIds: ["civics.electoral-college", "civics.ri-get-involved"],
          coverage: "partial",
          note: "Why turnout and participation matter to outcomes is taught as practice, and the Electoral College — one of the standard's named contemporary issues — is taught both mechanically and in purpose. Partial because gerrymandering and the specific Rhode Island contemporary-controversy example (allowing tribal IDs to vote) are not worked.",
        },
        // — Dissent, protest, and social movements (Inquiry Topic 7) —
        {
          code: "SSHS.CVC.7.1",
          text: "Argue the justifications for protest movements in the United States",
          claimIds: ["rights.landmark-cases", "civics.bill-of-rights-overview"],
          coverage: "partial",
          note: "The First Amendment rights that give protest its legal basis — freedom of speech, assembly, and the right to petition — are taught as applicable rules in the rights course. Partial because the standard's Fourteenth-Amendment-basis-for-protest framing is lighter.",
        },
        {
          code: "SSHS.CVC.7.2",
          text: "Argue the impacts of Americans who have acted to address social inequalities in the past",
          claimIds: ["history.labor-civil-rights", "history.gilded-age-labor", "bvc.plantation-economy-resistance"],
          coverage: "partial",
          note: "Two of the standard's three named movements are taught in depth — labor rights (the union movement from the Gilded Age to Randolph and Memphis) and the fight against slavery (plantation resistance). Partial because the women's-rights movement is not the worked case.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Rhode Island Common Core mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Rhode Island was the first state to adopt the NGSS (spring 2013) and reaffirmed it in 2024, so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "The Narragansett and other tribal governments (SSHS.CVC.4.5).",
      body: "Rhode Island's SSHS.CVC.4.5 names tribal governments and the Narragansett explicitly, and requires students to analyze the powers and structures of tribal governments and the relationships between the Narragansett and Rhode Island's state and local governments. Rhode Island Civics teaches Rhode Island's state and local structure in depth but does not teach the Narragansett Tribe's government, so SSHS.CVC.4.5 is claimed as partial. The gap is in the course, not the standard.",
    },
    {
      heading: "Rhode Island's own state structure is taught more fully than SSHS.CVC.4.5 captures.",
      body: "Rhode Island Civics teaches the 1843 constitution and the 2020 removal of “and Providence Plantations,” the two-tier system with 5 counties but NO county governments and 39 all-purpose cities and towns, the long legislative-supremacy tradition and the 2004 separation-of-powers amendment that reined it in, the plural executive with a separately elected Lieutenant Governor, the 75-member House and 38-member Senate with a veto overridable by only three-fifths (and no line-item veto), and the only state Supreme Court whose justices serve for life — all from Rhode Island's own sources. SSHS.CVC.4.5 hosts most of it, but this bespoke 2023 civics frame is inquiry-and-argument based, not a Rhode-Island-government checklist, so the life-tenure court, the 2004 reform, and the 2020 name change have no code of their own.",
    },
    {
      heading: "The comparative-government, political-science, and world-affairs standards we checked and rejected.",
      body: "The standards the courses do not genuinely teach are not claimed: SSHS.CVC.1.1 (the history and philosophy of different forms of government), SSHS.CVC.2.1 (18th-century philosophical ideas / the Enlightenment thinkers and the American Revolution), SSHS.CVC.2.2 (Common Sense and the Declaration of Independence), SSHS.CVC.3.3 (how the Constitution handled the system of slavery — the Three-Fifths and Fugitive Slave clauses), all of Inquiry Topic 5's party/interest-group standards except the participation standard (SSHS.CVC.5.1, 5.2, 5.3, and 5.5 — money, media, and polling in politics), SSHS.CVC.7.3 (contemporary policy debates such as mass incarceration, gun ownership, affordable housing, and immigration), and all of Inquiry Topic 8 (SSHS.CVC.8.1-8.3 — the Universal Declaration of Human Rights, U.S. human-rights interventions and genocides, and global citizenship). Rhode Island's own deep history in the North American slave trade would be a natural home for SSHS.CVC.3.3, but the course does not teach it, so we do not claim it.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "Rhode Island's closest frameworks for these (its digital-literacy/computer-science and world-languages standards) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no Rhode Island claims this pass.",
    },
  ],
};
