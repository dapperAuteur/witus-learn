// ─────────────────────────────────────────────────────────────────────────────
// CALIFORNIA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ca` was written FROM California's own official sources (leginfo.legislature.ca.gov,
// sos.ca.gov, courts.ca.gov) — but note the flagship caveat in notClaimed: California's Grade 12
// Principles of American Democracy standards are overwhelmingly FEDERAL, so the course's
// California-structure lessons map only where California's own standards actually reach.
//
// THE INHERIT-VS-BESPOKE CALL (the point of this state), made per framework, from CDE's own
// documents rather than assumed:
//   · ELA — INHERITED. California adopted the Common Core State Standards in August 2010
//     (modified March 13, 2013, under SB 1200, which added California-specific standards marked
//     "CA" in the document). We compared all six standards our shared file cites against the CA
//     document: at grades 11-12 NONE of them carries a CA marker and the wording is identical —
//     the one variance is a serial comma in RI.11-12.6 ("persuasiveness, or beauty"). Verbatim
//     adoption of ../shared/common-core-ela is therefore honest; no aliases needed (California
//     kept the CCSS code style).
//   · Science — INHERITED. The SBE adopted the NGSS verbatim on September 4, 2013 (CA NGSS,
//     Education Code 60605.85). California's only edits are to seven CLARIFICATION statements
//     (we fetched CDE's "California's Edits to the NGSS Clarification Statements": 4-LS1-1,
//     4-PS3-1, 5-ESS1-1, 5-ESS2-1, 5-PS1-4, HS-ESS2-6, MS-LS1-1) — HS-ESS3-1, the one PE we
//     cite, is untouched. Verbatim adoption of ../shared/ngss is honest.
//   · Social studies — BESPOKE. Common Core never covered it and California's History–Social
//     Science Content Standards (adopted October 9, 1998, still the operative content standards;
//     the 2016 HSS Framework is curriculum guidance, not new standards) are California's own.
//     The Grade 12 civics and economics sections REUSE the same code numbers (both have a
//     12.4.1), so each section is its own framework here — codes stay unique within a framework.
//   · Health & PE — BESPOKE. California's own documents (Health Education Content Standards,
//     adopted March 12, 2008; PE Model Content Standards, adopted January 12, 2005). The two
//     high-school PE courses also reuse code numbers, so Course 1 and Course 2 are separate
//     frameworks for the same reason.
//
// Provenance: www.cde.ca.gov refuses connections from our tooling (Radware WAF, HTTP 303 to
// wafalert), so every CDE document was retrieved through the Wayback Machine and transcribed
// from the archived copy — all fetched 2026-07-17:
//   · CA CCSS ELA/Literacy PDF — snapshot 20260619230947
//   · History–Social Science Content Standards PDF — snapshot 20260716121707
//   · Health Education Content Standards PDF — snapshot 20260711155019
//   · PE Model Content Standards PDF — snapshot 20260711155019
//   · CDE NGSS standards page (adoption statement) — snapshot 20240524133522
//   · California's Edits to the NGSS Clarification Statements PDF — snapshot 20210625234900
// The HSS document numbers sub-standards 1., 2., 3. beneath each main standard; we cite them
// main.sub (10.4.3), the same convention CDE's own frameworks use.
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

export const JURISDICTION: JurisdictionFile = {
  state: "CA",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      adoption:
        "California adopted the Common Core State Standards in August 2010; SB 1200 (2012) modifications of March 13, 2013, added California-specific standards flagged “CA” in the state's own document (California Common Core State Standards: ELA & Literacy in History/Social Studies, Science, and Technical Subjects). We compared every standard we cite against that document: at grades 11-12 none of the six carries a CA flag and the text is identical — the single variance is a serial comma printed in RI.11-12.6 (“persuasiveness, or beauty”). We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "On September 4, 2013, the State Board of Education adopted the Next Generation Science Standards for California Public Schools, Kindergarten through Grade Twelve (CA NGSS), as required by Education Code 60605.85. California's only edits to the NGSS are to seven clarification statements — we fetched CDE's edits document and HS-ESS3-1 is not among them, so the one performance expectation we cite is verbatim in California. This is not a science course; see the note on the entry itself.",
    },
  ],
  frameworks: [
    // ── HSS: Grade Ten — World History, Culture, and Geography ─────────────
    {
      id: "ca-hss-world",
      subject: "Social Studies",
      name: "History–Social Science Content Standards — Grade Ten: World History, Culture, and Geography: The Modern World",
      publisher: "California Department of Education (CDE) / State Board of Education",
      version: "Adopted October 9, 1998",
      fetchedOn: "2026-07-17",
      sourceUrl: "https://www.cde.ca.gov/be/st/ss/documents/histsocscistnd.pdf",
      adoption:
        "California's 1998 content standards remain the operative standards (the 2016 History–Social Science Framework is curriculum guidance built on them, not a replacement). Sub-standards are cited main.sub (10.4.3), CDE's own convention.",
      standards: [
        {
          code: "10.4.3",
          text: "Explain imperialism from the perspective of the colonizers and the colonized and the varied immediate and long-term responses by the people under colonial rule.",
          claimIds: [
            "bvc.imperialism-africa-asia-oceania",
            "bvc.whose-voice-differing-accounts",
            "bvc.plantation-economy-resistance",
          ],
          coverage: "full",
          note: "Both perspectives and the responses, which is exactly this curriculum's method: imperial and colonial systems worked through the commodities they ran, paired first-person accounts on each side (the Whose Voice lessons), and the resistance — from Maroon communities to revolution. The parent standard asks for at least two of its named regions; the courses reach Africa, China, India, and Latin America.",
        },
        {
          code: "10.4.1",
          text: "Describe the rise of industrial economies and their link to imperialism and colonialism (e.g., the role played by national security and strategic advantage; moral issues raised by the search for national hegemony, Social Darwinism, and the missionary impulse; material issues such as land, resources, and technology).",
          claimIds: ["bvc.imperialism-africa-asia-oceania", "bvc.colonialism-persists-today"],
          coverage: "partial",
          note: "Partial: the material link — industrial economies pulling land, resources, and labor out of colonies — is taught in depth through the cash-crop systems. The standard's national-security and ideological framings (Social Darwinism, the missionary impulse) are not worked head-on.",
        },
        {
          code: "10.3.4",
          text: "Trace the evolution of work and labor, including the demise of the slave trade and the effects of immigration, mining and manufacturing, division of labor, and the union movement.",
          claimIds: ["history.gilded-age-labor", "bvc.plantation-economy-resistance"],
          coverage: "partial",
          note: "Partial: the union movement is taught at real depth (the Knights, the AFL, Haymarket, Homestead, Pullman) and the end of plantation slavery is taught through the abolition lessons — but the parent standard spans England, France, Germany, Japan, and the United States, and our labor history is American.",
        },
        {
          code: "10.9.5",
          text: "Describe the uprisings in Poland (1956), Hungary (1956), and Czechoslovakia (1968) and those countries’ resurgence in the 1970s and 1980s as people in Soviet satellites sought freedom from Soviet control.",
          claimIds: ["history.solidarnosc-cold-war"],
          coverage: "partial",
          note: "Partial: the resurgence half is taught in real depth for ONE of the three countries — Poland, from the 1970 and 1976 strikes through Solidarność, martial law, and 1989. The 1956 uprisings and Czechoslovakia 1968 are not taught.",
        },
      ],
    },

    // ── HSS: Grade Eleven — United States History and Geography ────────────
    {
      id: "ca-hss-us",
      subject: "Social Studies",
      name: "History–Social Science Content Standards — Grade Eleven: United States History and Geography: Continuity and Change in the Twentieth Century",
      publisher: "California Department of Education (CDE) / State Board of Education",
      version: "Adopted October 9, 1998",
      fetchedOn: "2026-07-17",
      sourceUrl: "https://www.cde.ca.gov/be/st/ss/documents/histsocscistnd.pdf",
      adoption:
        "California's required 11th-grade U.S. history course. Sub-standards are cited main.sub (11.5.3), CDE's own convention. Note: the document prints “Malcom X” in 11.10.4; we transcribe codes and text verbatim, so that spelling is the standard's own.",
      standards: [
        {
          code: "11.5.3",
          text: "Examine the passage of the Eighteenth Amendment to the Constitution and the Volstead Act (Prohibition).",
          claimIds: ["bvc.prohibition"],
          coverage: "full",
          note: "Prohibition is taught as passed AND as experienced: the movement's rhetoric (Selling Prohibition), the Eighteenth Amendment and Volstead Act, and the results the standard's era saw.",
        },
        {
          code: "11.6.5",
          text: "Trace the advances and retreats of organized labor, from the creation of the American Federation of Labor and the Congress of Industrial Organizations to current issues of a postindustrial, multinational economy, including the United Farm Workers in California.",
          claimIds: [
            "history.gilded-age-labor",
            "history.wagner-act",
            "history.taft-hartley-patco",
            "history.nafta-usmca-labor",
          ],
          coverage: "full",
          note: "This is the unions course's exact arc — advances (the AFL, the Wagner Act) and retreats (Taft-Hartley, PATCO) through to the postindustrial, multinational economy (NAFTA→USMCA and its Rapid Response Mechanism). The United Farm Workers appear where they belong analytically: the grape strike and boycott taught as the workaround the Wagner Act's farmworker exclusion forced, through California's own Agricultural Labor Relations Act of 1975.",
        },
        {
          code: "11.10.4",
          text: "Examine the roles of civil rights advocates (e.g., A. Philip Randolph, Martin Luther King, Jr., Malcom X, Thurgood Marshall, James Farmer, Rosa Parks), including the significance of Martin Luther King, Jr.’s “Letter from Birmingham Jail” and “I Have a Dream” speech.",
          claimIds: ["history.labor-civil-rights"],
          coverage: "partial",
          note: "Partial, from the angle most curricula skip: A. Philip Randolph — the standard's first named advocate — is taught in depth, from the Brotherhood of Sleeping Car Porters through the 1963 March on Washington he architected to Memphis 1968. The standard's other named figures and the two King texts are not taught individually.",
        },
        {
          code: "11.10.1",
          text: "Explain how demands of African Americans helped produce a stimulus for civil rights, including President Roosevelt’s ban on racial discrimination in defense industries in 1941, and how African Americans’ service in World War II produced a stimulus for President Truman’s decision to end segregation in the armed forces in 1948.",
          claimIds: ["history.labor-civil-rights", "history.migration-civil-rights-politics"],
          coverage: "partial",
          note: "Partial: the 1941 half is taught in real depth — Randolph's threatened march and Executive Order 8802 barring discrimination in defense industries — and the Black urban vote's civil-rights politics gets its own lesson. The WWII-service-to-Truman-1948 half is referenced, not worked.",
        },
        {
          code: "11.6.4",
          text: "Analyze the effects of and the controversies arising from New Deal economic policies and the expanded role of the federal government in society and the economy since the 1930s (e.g., Works Progress Administration, Social Security, National Labor Relations Board, farm programs, regional development policies, and energy development projects such as the Tennessee Valley Authority, California Central Valley Project, and Bonneville Dam).",
          claimIds: ["history.wagner-act"],
          coverage: "partial",
          note: "Partial: one named piece of the New Deal — the National Labor Relations Board's statute, the Wagner Act — is taught in depth, including the controversy the standard asks for (who the law excluded, and why that mattered). The rest of the New Deal apparatus is not taught.",
        },
        {
          code: "11.5.5",
          text: "Describe the Harlem Renaissance and new trends in literature, music, and art, with special attention to the work of writers (e.g., Zora Neale Hurston, Langston Hughes).",
          claimIds: ["history.harlem-renaissance-black-press"],
          coverage: "partial",
          note: "Partial: the Harlem Renaissance and the New Negro are their own lesson, tied to the Great Migration that made them possible. The full literature-music-art survey with its named writers is not taught.",
        },
      ],
    },

    // ── HSS: Grade Twelve — Principles of American Democracy ───────────────
    {
      id: "ca-hss-gov",
      subject: "Social Studies",
      name: "History–Social Science Content Standards — Grade Twelve: Principles of American Democracy",
      publisher: "California Department of Education (CDE) / State Board of Education",
      version: "Adopted October 9, 1998",
      fetchedOn: "2026-07-17",
      sourceUrl: "https://www.cde.ca.gov/be/st/ss/documents/histsocscistnd.pdf",
      adoption:
        "California's one-semester 12th-grade civics course. The Grade 12 civics and economics sections of the 1998 document REUSE the same code numbers (each has a 12.4.1), so this framework carries the American Democracy section only — economics is its own framework below. Sub-standards are cited main.sub (12.6.5); 12.10 is a main standard with no sub-standards.",
      standards: [
        {
          code: "12.4.2",
          text: "Explain the process through which the Constitution can be amended.",
          claimIds: ["civics.article-v-amendment"],
          coverage: "full",
        },
        {
          code: "12.4.5",
          text: "Discuss Article III of the Constitution as it relates to judicial power, including the length of terms of judges and the jurisdiction of the Supreme Court.",
          claimIds: ["civics.federal-articles-i-iii", "civics.federal-judiciary-structure"],
          coverage: "full",
          note: "Article III gets its own lessons, and the judiciary course adds the structure the standard asks about: life tenure, the three-tier system, and what the Supreme Court's jurisdiction actually reaches.",
        },
        {
          code: "12.4.6",
          text: "Explain the processes of selection and confirmation of Supreme Court justices.",
          claimIds: ["civics.scotus-nomination-confirmation"],
          coverage: "full",
          note: "An entire lesson: Article II advice-and-consent, the Judiciary Committee's investigation and hearings, and how the cloture rules changed in 2013 and 2017.",
        },
        {
          code: "12.6.4",
          text: "Describe the means that citizens use to participate in the political process (e.g., voting, campaigning, lobbying, filing a legal challenge, demonstrating, petitioning, picketing, running for political office).",
          claimIds: [
            "civics.voter-registration",
            "civics.campaign-help",
            "civics.track-a-bill",
            "civics.show-up-every-level",
            "civics.run-for-office",
            "civics.ca-election-law",
            "civics.ca-get-involved",
          ],
          coverage: "full",
          note: "Participation is taught as practice across an entire course ladder: registering and voting (with California's own on-ramps), helping a campaign lawfully, tracking a live bill, showing up at every level, and running for office yourself.",
        },
        {
          code: "12.6.5",
          text: "Discuss the features of direct democracy in numerous states (e.g., the process of referendums, recall elections).",
          claimIds: [
            "civics.ca-constitution-direct-democracy",
            "civics.az-constitution-direct-democracy",
            "civics.ar-initiative-flux",
            "civics.ballot-measures-local-causes",
          ],
          coverage: "full",
          note: "“Numerous states” is taken literally: California's initiative, referendum, and recall in working detail (including the turnout-dependent thresholds), Arizona's Progressive-era direct democracy and Voter Protection Act, and Arkansas's Amendment 7 petitions — plus a practical lesson on helping ballot measures.",
        },
        {
          code: "12.7.3",
          text: "Discuss reserved powers and concurrent powers of state governments.",
          claimIds: ["civics.federal-powers-taxonomy"],
          coverage: "full",
          note: "Taught by name: reserved powers through the Tenth Amendment, concurrent powers as their own lesson, alongside the enumerated and implied powers that complete the taxonomy.",
        },
        {
          code: "12.7.7",
          text: "Identify the organization and jurisdiction of federal, state, and local (e.g., California) courts and the interrelationships among them.",
          claimIds: [
            "civics.federal-judiciary-structure",
            "civics.ca-courts",
            "civics.federalism-why-split-power",
          ],
          coverage: "full",
          note: "The standard's own example is California, and the flagship delivers it: the three-tier state system from the 58 county Superior Courts up, the appoint-confirm-retain selection for appellate justices — beside the federal judiciary course and the federalism course's state-federal interrelationships.",
        },
        {
          code: "12.2.3",
          text: "Discuss the individual’s legal obligations to obey the law, serve as a juror, and pay taxes.",
          claimIds: ["civics.jury-service", "civics.citizenship-responsibilities"],
          coverage: "full",
          note: "Jury service — the obligation curricula usually wave at — is an entire course here, and the responsibilities lesson covers the rest of the standard's list.",
        },
        {
          code: "12.2.6",
          text: "Explain how one becomes a citizen of the United States, including the process of naturalization (e.g., literacy, language, and other requirements).",
          claimIds: ["civics.us-citizenship-law"],
          coverage: "full",
          note: "The 14th Amendment, jus soli, citizenship through parents, and naturalization eligibility step by step — including the English and civics requirements the standard names.",
        },
        {
          code: "12.1.5",
          text: "Describe the systems of separated and shared powers, the role of organized interests (Federalist Paper Number 10), checks and balances (Federalist Paper Number 51), the importance of an independent judiciary (Federalist Paper Number 78), enumerated powers, rule of law, federalism, and civilian control of the military.",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.federal-powers-taxonomy",
            "civics.federal-judiciary-structure",
            "civics.federalism-why-split-power",
          ],
          coverage: "partial",
          note: "Partial: the systems themselves — separation of powers, checks and balances, judicial independence, enumerated powers, federalism — are all taught directly. The three Federalist Papers the standard cites are not worked as texts, and civilian control of the military is not taught.",
        },
        {
          code: "12.1.6",
          text: "Understand that the Bill of Rights limits the powers of the federal government and state governments.",
          claimIds: ["civics.bill-of-rights-origin", "rights.landmark-cases"],
          coverage: "partial",
          note: "Partial: the Bill of Rights as a limit on government is taught as a document and as applied rules a student can use. HOW it came to bind the states — the incorporation doctrine — is not taught in depth.",
        },
        {
          code: "12.2.1",
          text: "Discuss the meaning and importance of each of the rights guaranteed under the Bill of Rights and how each is secured (e.g., freedom of religion, speech, press, assembly, petition, privacy).",
          claimIds: ["civics.bill-of-rights-overview", "rights.landmark-cases", "rights.limits-on-rights"],
          coverage: "partial",
          note: "Partial, and the standard says “each”: speech, religion, press, assembly, and the Fourth Amendment's privacy protections are taught deeply, as applicable rules with their landmark cases and limits. The remaining amendments are introduced but not worked at that depth.",
        },
        {
          code: "12.2.4",
          text: "Understand the obligations of civic-mindedness, including voting, being informed on civic issues, volunteering and performing public service, and serving in the military or alternative service.",
          claimIds: ["civics.citizenship-responsibilities", "civics.voter-registration", "civics.campaign-help"],
          coverage: "partial",
          note: "Partial: voting, staying informed, and volunteering are taught as practices (registration walkthroughs, campaign volunteering with its legal guardrails). Military and alternative service are not taught.",
        },
        {
          code: "12.4.1",
          text: "Discuss Article I of the Constitution as it relates to the legislative branch, including eligibility for office and lengths of terms of representatives and senators; election to office; the roles of the House and Senate in impeachment proceedings; the role of the vice president; the enumerated legislative powers; and the process by which a bill becomes a law.",
          claimIds: ["civics.federal-articles-i-iii", "civics.federal-bill-process"],
          coverage: "partial",
          note: "Partial: Article I's structure, the enumerated powers, and the bill-to-law process are taught in depth (the process gets an entire course, committees through veto override). The impeachment roles and the vice president's legislative role are touched only in passing.",
        },
        {
          code: "12.4.4",
          text: "Discuss Article II of the Constitution as it relates to the executive branch, including eligibility for office and length of term, election to and removal from office, the oath of office, and the enumerated executive powers.",
          claimIds: ["civics.federal-articles-i-iii", "civics.electoral-college"],
          coverage: "partial",
          note: "Partial: Article II's structure and powers are taught, and election to office gets unusual depth — the Electoral College's mechanics AND its original purpose. Removal and the oath are named, not worked.",
        },
        {
          code: "12.5.1",
          text: "Understand the changing interpretations of the Bill of Rights over time, including interpretations of the basic freedoms (religion, speech, press, petition, and assembly) articulated in the First Amendment and the due process and equal-protection-of-the-law clauses of the Fourteenth Amendment.",
          claimIds: ["rights.landmark-cases", "rights.scotus-precedent"],
          coverage: "partial",
          note: "Partial: changing First Amendment interpretation is taught through the landmark-case line (Tinker, Brandenburg, and how precedent expands rights). The Fourteenth Amendment's due process and equal protection doctrines are named in our lessons but not taught in depth.",
        },
        {
          code: "12.5.3",
          text: "Evaluate the effects of the Court’s interpretations of the Constitution in Marbury v. Madison, McCulloch v. Maryland, and United States v. Nixon, with emphasis on the arguments espoused by each side in these cases.",
          claimIds: ["civics.judicial-review-marbury", "civics.federal-powers-taxonomy"],
          coverage: "partial",
          note: "Partial: two of the three named cases are taught as rules a student can apply — Marbury (judicial review) and McCulloch (implied powers and supremacy). United States v. Nixon is not taught.",
        },
        {
          code: "12.6.2",
          text: "Discuss the history of the nomination process for presidential candidates and the increasing importance of primaries in general elections.",
          claimIds: ["civics.election-mechanics"],
          coverage: "partial",
          note: "Partial: how primaries and caucuses actually work — and why they matter — is taught thoroughly. The historical development of the nomination process is sketched, not traced.",
        },
        {
          code: "12.6.6",
          text: "Analyze trends in voter turnout; the causes and effects of reapportionment and redistricting, with special attention to spatial districting and the rights of minorities; and the function of the Electoral College.",
          claimIds: ["civics.electoral-college"],
          coverage: "partial",
          note: "Partial: one of the standard's three clauses — the Electoral College's function — is taught in depth, mechanics and original purpose both. Turnout trends and redistricting are not taught.",
        },
        {
          code: "12.7.2",
          text: "Identify the major responsibilities and sources of revenue for state and local governments.",
          claimIds: ["civics.local-government-layers", "civics.ca-local-government"],
          coverage: "partial",
          note: "Partial: the responsibilities half is deep — what counties, cities, and special districts actually run, with California's own map (58 counties, charter cities, no townships). Revenue sources appear only where the lessons meet them (special districts' taxes and fees), not as a finance unit.",
        },
        {
          code: "12.7.4",
          text: "Discuss the Ninth and Tenth Amendments and interpretations of the extent of the federal government’s power.",
          claimIds: ["civics.federal-powers-taxonomy", "civics.federalism-why-split-power"],
          coverage: "partial",
          note: "Partial: the Tenth Amendment and the interpretive fight over federal power (McCulloch, the Commerce Clause's reach) are taught directly. The Ninth Amendment is not taught.",
        },
        {
          code: "12.7.6",
          text: "Compare the processes of lawmaking at each of the three levels of government, including the role of lobbying and the media.",
          claimIds: ["civics.federal-bill-process", "civics.ca-bill-process", "civics.local-government-layers"],
          coverage: "partial",
          note: "Partial: two of the three levels are taught in genuine procedural depth — the federal process and California's own (committee filter, two-thirds override, line-item veto) — and the local level's structure is taught. Local lawmaking procedure and the lobbying/media roles are not worked systematically.",
        },
        {
          code: "12.9.7",
          text: "Describe the ideologies that give rise to Communism, methods of maintaining control, and the movements to overthrow such governments in Czechoslovakia, Hungary, and Poland, including the roles of individuals (e.g., Alexander Solzhenitsyn, Pope John Paul II, Lech Walesa, Vaclav Havel).",
          claimIds: ["history.solidarnosc-cold-war", "history.poland-1989-democratization"],
          coverage: "partial",
          note: "Partial: ONE of the three named movements — Poland's — is taught in real depth, Lech Wałęsa's role included, from a workers' state's methods of control through martial law to the 1989 negotiated exit. Czechoslovakia, Hungary, and the other named individuals are not taught.",
        },
        {
          code: "12.10",
          text: "Students formulate questions about and defend their analyses of tensions within our constitutional democracy and the importance of maintaining a balance between the following concepts: majority rule and individual rights; liberty and equality; state and national authority in a federal system; civil disobedience and the rule of law; freedom of the press and the right to a fair trial; the relationship of religion and government.",
          claimIds: ["rights.limits-on-rights", "civics.federalism-why-split-power"],
          coverage: "partial",
          note: "Partial: two of the named tensions are taught as live questions — majority rule against individual rights (when government may constitutionally limit rights, and why) and state against national authority (an entire course). The formulate-and-defend performance happens in a classroom we don't run, and the remaining tensions are not taught as units.",
        },
      ],
    },

    // ── HSS: Grade Twelve — Principles of Economics ────────────────────────
    {
      id: "ca-hss-econ",
      subject: "Social Studies",
      name: "History–Social Science Content Standards — Grade Twelve: Principles of Economics",
      publisher: "California Department of Education (CDE) / State Board of Education",
      version: "Adopted October 9, 1998",
      fetchedOn: "2026-07-17",
      sourceUrl: "https://www.cde.ca.gov/be/st/ss/documents/histsocscistnd.pdf",
      adoption:
        "California's one-semester 12th-grade economics course — printed in the same document as Principles of American Democracy with its own 12.x numbering, so it is its own framework here (each section has a 12.4.1). We claim no personal-finance or macroeconomic-measurement standards.",
      standards: [
        {
          code: "12.4.1",
          text: "Understand the operations of the labor market, including the circumstances surrounding the establishment of principal American labor unions, procedures that unions use to gain benefits for their members, the effects of unionization, the minimum wage, and unemployment insurance.",
          claimIds: ["history.gilded-age-labor", "history.wagner-act"],
          coverage: "partial",
          note: "Partial: the union clauses are taught at unusual depth — the circumstances that built the principal unions, the procedures (strikes, boycotts, collective bargaining under the Wagner Act), and the measured effects of unionization. The minimum wage and unemployment insurance are not taught.",
        },
        {
          code: "12.4.4",
          text: "Explain the effects of international mobility of capital and labor on the U.S. economy.",
          claimIds: ["history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: taught through one worked case — NAFTA→USMCA, capital mobility's effect on organizing and wages on both sides of the border, through to the Rapid Response Mechanism. Not a general treatment of factor mobility.",
        },
        {
          code: "12.2.2",
          text: "Discuss the effects of changes in supply and/or demand on the relative scarcity, price, and quantity of particular products.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Partial: taught through real commodity markets — a frost in Brazil moving world coffee prices, and why inelastic demand absorbs the spike. Not a general supply-and-demand unit with curve-shifting exercises.",
        },
        {
          code: "12.6.1",
          text: "Identify the gains in consumption and production efficiency from trade, with emphasis on the main products and changing geographic patterns of twentieth-century trade among countries in the Western Hemisphere.",
          claimIds: ["bvc.value-chain-earnings", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: the geography of hemispheric trade in real products — coffee, sugar, chocolate — and who gains from it is the series' spine. The formal efficiency framework (comparative advantage by name) is not taught.",
        },
        {
          code: "12.6.2",
          text: "Compare the reasons for and the effects of trade restrictions during the Great Depression compared with present-day arguments among labor, business, and political leaders over the effects of free trade on the economic and social interests of various groups of Americans.",
          claimIds: ["bvc.sugar-program-trade-barriers", "history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: the present-day half is worked in depth — the sugar program's quotas and tariffs with their winners and losers, and the labor-side free-trade argument through NAFTA→USMCA. The Great Depression's trade restrictions (Smoot-Hawley) are not taught.",
        },
      ],
    },

    // ── Health Education Content Standards (Grades 9-12) ───────────────────
    {
      id: "ca-health-hs",
      subject: "Health & Wellness",
      name: "Health Education Content Standards for California Public Schools — High School (Grades Nine Through Twelve)",
      publisher: "California Department of Education (CDE) / State Board of Education",
      version: "Adopted March 12, 2008",
      fetchedOn: "2026-07-17",
      sourceUrl: "https://www.cde.ca.gov/be/st/ss/documents/healthstandmar08.pdf",
      adoption:
        "California's health standards are organized by content area with eight overarching standards; codes suffix the content area (P = Personal and Community Health). All claims below are from the high-school (grades 9-12) section, Personal and Community Health — the only content area these courses genuinely teach (see notClaimed).",
      standards: [
        {
          code: "3.5.P",
          text: "Assess ways to be a responsible consumer of health products and services.",
          claimIds: ["health.health-product-claims"],
          coverage: "full",
          note: "Taught head-on: how health and supplement marketing dodges the legal line (structure/function claims), and how to verify a claim yourself and follow the money.",
        },
        {
          code: "3.1.P",
          text: "Access valid information about personal health products and services available in the community.",
          claimIds: ["health.evaluate-dental-evidence", "health.health-product-claims"],
          coverage: "full",
          note: "Both fronts the standard spans: what valid health information looks like (evidence hierarchies, Cochrane reviews, myths debunked) and how to check a product or service claim before trusting it.",
        },
        {
          code: "6.1.P",
          text: "Develop a plan of preventive health management.",
          claimIds: ["health.blueprint-goal-plan", "health.woop-goal-setting"],
          coverage: "full",
          note: "Two courses have the learner actually do this: a data-grounded 90-day blueprint built from five weeks of the learner's own numbers, and a plan written with mental contrasting plus implementation intentions.",
        },
        {
          code: "1.1.P",
          text: "Discuss the value of actively managing personal health behaviors (e.g., getting adequate sleep, practicing ergonomics, and performing self-examinations).",
          claimIds: ["health.tracker-behavior-metrics"],
          coverage: "partial",
          note: "Partial: active management of sleep and activity is the tracker course's whole method — behaviors read daily against your own resting heart rate, steps, and sleep. The standard's other examples (ergonomics, self-examinations) are not taught.",
        },
        {
          code: "1.2.P",
          text: "Evaluate the importance of regular medical and dental checkups, vaccinations, and examinations.",
          claimIds: ["health.dental-care-access"],
          coverage: "partial",
          note: "Partial: the dental half is taught in depth — what a checkup actually catches, and the honestly-bounded mouth-body evidence. Medical checkups and vaccinations are not taught.",
        },
        {
          code: "6.2.P",
          text: "Develop a plan of preventive dental health management.",
          claimIds: ["health.oral-health-behaviors"],
          coverage: "partial",
          note: "Partial: every element such a plan needs — brushing, flossing, fluoride, diet, visit cadence, each tied to its measured effect — is taught rigorously, but the course prompts the plan rather than collecting and assessing a written one.",
        },
        {
          code: "7.1.P",
          text: "Analyze environmental barriers to adopting positive personal health practices and strategies for overcoming the barriers.",
          claimIds: ["health.woop-obstacle-strategies"],
          coverage: "partial",
          note: "Partial: barrier-first planning is the WOOP course's core — identify the obstacle, write the if-then that fires when it appears — with trial evidence. The method centres personal obstacles; environmental barriers as a category are covered only as they surface in the learner's own plan.",
        },
      ],
    },

    // ── PE Model Content Standards — High School Course 1 ──────────────────
    {
      id: "ca-pe-hs1",
      subject: "Physical Education",
      name: "Physical Education Model Content Standards — High School Course 1",
      publisher: "California Department of Education (CDE) / State Board of Education",
      version: "Adopted January 12, 2005",
      fetchedOn: "2026-07-17",
      sourceUrl: "https://www.cde.ca.gov/be/st/ss/documents/pestandards.pdf",
      adoption:
        "California's first required high-school PE course (individual/dual activities emphasis). Courses 1 and 2 reuse code numbers, so each is its own framework. An online course cannot demonstrate motor performance, so we claim knowledge- and planning-side standards only — each entry says so.",
      standards: [
        {
          code: "2.4",
          text: "Use physical fitness test results to set and adjust goals to improve fitness.",
          claimIds: ["pe.fitness-plan-blueprint", "health.n-of-1-implement-adjust"],
          coverage: "full",
          note: "The assess-set-adjust cycle is the data course's method: a baseline assessment, goals built from it, and an N-of-1 experiment that adjusts the plan against the learner's own numbers.",
        },
        {
          code: "2.7",
          text: "Develop and implement a one-month personal physical fitness plan.",
          claimIds: ["pe.fitness-plan-blueprint"],
          coverage: "full",
          note: "The capstone exceeds the standard's window: a 90-day personal plan — assessment, goals, activities, log, timeline — implemented through daily logging from week one.",
        },
        {
          code: "2.8",
          text: "Analyze consumer physical fitness products and programs.",
          claimIds: ["health.health-product-claims"],
          coverage: "partial",
          note: "Partial: analyzing product and supplement marketing claims — and verifying a claim yourself — is taught well; fitness PROGRAMS specifically (gym plans, training systems) are not the worked examples.",
        },
        {
          code: "1.4",
          text: "Explain and demonstrate advanced offensive, defensive, and transition strategies in aquatic and individual and dual activities.",
          claimIds: ["pe.sport-strategy-knowledge"],
          coverage: "partial",
          note: "Partial, and read this before relying on it: the EXPLAIN half is taught in genuine depth for individual and dual activities — tennis and pickleball court geometry and transition play, golf and croquet strategy. The DEMONSTRATE half happens on a court an online course cannot observe, and aquatic activities are not taught.",
        },
      ],
    },

    // ── PE Model Content Standards — High School Course 2 ──────────────────
    {
      id: "ca-pe-hs2",
      subject: "Physical Education",
      name: "Physical Education Model Content Standards — High School Course 2",
      publisher: "California Department of Education (CDE) / State Board of Education",
      version: "Adopted January 12, 2005",
      fetchedOn: "2026-07-17",
      sourceUrl: "https://www.cde.ca.gov/be/st/ss/documents/pestandards.pdf",
      adoption:
        "California's second required high-school PE course (team activities emphasis) — its own framework because Courses 1 and 2 reuse code numbers. Knowledge-side claims only, as with Course 1.",
      standards: [
        {
          code: "1.4",
          text: "Explain and demonstrate advanced offensive, defensive, and transition strategies and tactics in combative, gymnastic/tumbling, and team activities.",
          claimIds: ["pe.sport-strategy-knowledge"],
          coverage: "partial",
          note: "Partial: the EXPLAIN half is taught in depth for team activities — football formations, pressing, and transition; lacrosse offense, defense, and transition by name. Combative and gymnastic/tumbling activities are not taught, and the DEMONSTRATE half is out of reach of an online course.",
        },
        {
          code: "2.8",
          text: "Explain how to evaluate consumer physical fitness products and programs.",
          claimIds: ["health.health-product-claims"],
          coverage: "partial",
          note: "Partial: the how-to-evaluate method is taught — named persuasion tactics, the claims marketing may and may not legally make, and how to verify one yourself. Fitness programs specifically are not the worked cases.",
        },
        {
          code: "2.9",
          text: "Identify and evaluate ergogenic aids that claim to enhance body composition, appearance, physical fitness, and performance.",
          claimIds: ["health.health-product-claims"],
          coverage: "partial",
          note: "Partial: evaluating supplement claims — including the structure/function line such products exploit — is taught directly; ergogenic aids as a named category are not the worked examples.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no California Common Core mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "California adopted the NGSS verbatim (September 4, 2013), so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. We verified California's edits document: it touches seven clarification statements, none of them HS-ESS3-1. There is no laboratory work, no investigation, and no modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "The California Civics flagship's structure lessons have mostly no California code to cite.",
      body: "California Civics: How Your State Government Works teaches the 1879 constitution, the plural executive (a Lieutenant Governor elected separately from the Governor), the 120-seat Legislature, the top-two primary, and AB 37's universal mail ballots — from California's own official sources. But the 1998 Principles of American Democracy standards are overwhelmingly FEDERAL: state government enters only through the comparative 12.7 standards (lawmaking, courts, local responsibilities — which the course backs) and direct democracy through 12.6.5. The plural executive, the Legislature's shape, and California's election on-ramps have no code to cite. The gap is in the standards, not the course.",
    },
    {
      heading: "The Great Migration — California's 1998 standards never name it.",
      body: "An entire course teaches the Great Migration, but the 1998 document contains no standard on it: 11.2's rural-to-urban migration is the European-immigration industrial city, and 11.10.5's civil-rights diffusion names the churches, not the Migration. The Migration's content maps only where the standards name its people and politics (11.10.1, 11.10.4). The gap is in the standards, not the lessons.",
    },
    {
      heading: "10.2's named revolutions exclude Haiti.",
      body: "Our deep revolution is the Haitian Revolution — taught through to the 1825 indemnity. California's 10.2 compares the Glorious, American, and French Revolutions, and its philosopher list reaches Latin America only through Bolívar; Haiti is not named anywhere in the document. We do not stretch adjacency into coverage, so 10.2 is not claimed.",
    },
    {
      heading: "Most of the Grade 12 civics standards we checked.",
      body: "12.1.1-12.1.4 (the political-philosophy genealogy and the Federalist Papers as texts), 12.2.2 (economic rights), 12.2.5 (reciprocity of rights and obligations as a named concept), 12.3.1-12.3.4 (civil society), 12.4.3 (identify your current representatives — a live exercise our courses prompt but do not assess), 12.5.2 (judicial activism versus restraint), 12.5.4 (the civil-rights controversy case list), 12.6.1/12.6.3 (party history, polls and campaign funding), 12.7.1/12.7.5/12.7.8 (intergovernmental conflict resolution, public-policy formation, presidential case studies), 12.8.1-12.8.3 (media influence on political life — our media-literacy course is consumer protection, not political media analysis), and 12.9.1-12.9.6/12.9.8 (comparative systems beyond the Poland standard) — the courses do not genuinely teach these, so we do not claim them.",
    },
    {
      heading: "Economics standards we checked and rejected — and no economic-systems home.",
      body: "All of Econ 12.1 (scarcity, opportunity cost, incentives as named concepts), 12.2.1/12.2.3-12.2.10 (market mechanics as a unit), 12.3 (fiscal and monetary policy), 12.4.2/12.4.3 (the current labor market and wage theory), and 12.5 (macroeconomic measurement) are not genuinely taught. The reciprocity-versus-market-economies content — taught directly and at length — has no home either: California's 1998 economics section contains no comparative-economic-systems standard (12.9.1 in the civics section touches economic philosophies, but as regime ideology, which our courses reach only for Poland). The gap is in the standards, not the lessons.",
    },
    {
      heading: "Health content areas beyond Personal and Community Health.",
      body: "Nutrition and Physical Activity, Growth/Development and Sexual Health, Injury Prevention and Safety, Alcohol/Tobacco/Other Drugs, and Mental/Emotional/Social Health were checked against the grades 9-12 standards and are not genuinely taught by these courses. The BVC drug-history curriculum teaches the HISTORY and policy of substances, not the health-behavior content the ATOD standards ask for (e.g., 1.1.A's health benefits of abstaining), so it claims nothing there.",
    },
    {
      heading: "PE performance and participation standards — and no technology standard to cite.",
      body: "Every Course 1 and Course 2 standard that asks a student to DEMONSTRATE movement, PARTICIPATE in activity, or achieve measured fitness levels (all of Standard 1's performance halves, 2.1-2.3, 2.5, and the Standard 3 self-responsibility-in-activity outcomes) is out of reach of an online course; we claim knowledge- and planning-side standards only. And unlike Arizona (S3.H2.L2) and Arkansas (PFL.3.3), California's 2005 document predates wearables and has no technology-for-activity standard — so our tracker course's strongest PE claim has no California code. The gap is in the standards, not the course.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "California's closest frameworks (Computer Science, World Languages) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no California claims this pass.",
    },
  ],
};
