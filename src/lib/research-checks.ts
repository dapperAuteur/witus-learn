// Source-verification checks — the committed index of facts in the catalog that need a PRIMARY
// source, and that Claude could not get to.
//
// THE PROBLEM THIS SOLVES. This catalog's rule is that every claim is cited. Some claims can only be
// pinned by someone with access Claude does not have: a paywalled code section, a phone call to a
// county clerk, a regulator who answers email, a trade body's current standard behind a login. Until
// now those were prose caveats inside a lesson ("verify before relying on this"), which is honest and
// unactionable: no list exists, nothing records whether it was ever done, and the hedge ships to
// learners forever.
//
// HOW IT WORKS. Check definitions live here, committed, so the editorial call is reviewable in a
// diff. BAM answers them at /admin/research, which writes status and answer to
// `course_research_checks`. Claude reads the answers back with `pnpm research:list`, updates the
// lesson, and DELETES the check from this file. The list shrinking is the progress bar, exactly like
// the standards-coverage and length-tell ratchets.
//
// TO ADD A CHECK: append an entry. Do it whenever you write a lesson sentence containing a hedge you
// cannot resolve yourself. A hedge in a lesson without a check here is a hedge nobody will ever
// clear.

export type ResearchCheckStatus = "open" | "verified" | "corrected" | "blocked";

export const RESEARCH_CHECK_STATUS_LABEL: Record<ResearchCheckStatus, string> = {
  open: "Open, nobody has looked",
  verified: "Verified against a primary source",
  corrected: "Course was wrong, corrected",
  blocked: "Tried, could not settle it",
};

export interface ResearchCheck {
  /** Stable key and the join key for course_research_checks.check_key. Never renumber. */
  key: string;
  /** Course slug this affects, or a group label when it spans several. */
  course: string;
  /**
   * Slug of the lesson the hedge is actually in, when it is known. OPTIONAL, and unset means
   * "nobody recorded it", which /admin/research says in those words.
   *
   * WHY IT IS FILLED IN BY HAND. A reviewer is being asked to settle a hedge and cannot read the
   * sentence that hedges, so the board needs to link to the lesson. A check only carries a course,
   * so the lesson has to come from somewhere, and keyword-matching one and printing it as fact is
   * the worst option available: a wrong location sends the reviewer to the wrong page and they have
   * no reason to doubt it. `pnpm locate:research-checks` reports which lessons contain a check's
   * quoted phrases and statute numbers, WITH the matching sentence, and a human writes this field
   * after reading that evidence. Some checks span a whole course, or name a course that does not
   * exist yet, and those legitimately stay unset forever.
   */
  lesson?: string;
  /**
   * The verbatim hedging sentence from the lesson, when one was recorded.
   *
   * The board verifies it against the live lesson before showing it, and says plainly when it no
   * longer appears: a check whose sentence has been rewritten out of the course is stale, and that
   * is worth knowing before spending an afternoon on a phone call to settle it.
   */
  quote?: string;
  /** Short label for the list. */
  title: string;
  /** How urgent, in terms of what is at stake if the current text is wrong. */
  severity: "high" | "medium" | "low";
  /** The precise question. One question, answerable. */
  question: string;
  /** The sentence or claim currently in the course, so BAM can see exactly what is at stake. */
  claim: string;
  /** What breaks, or who is misled, if the current text is wrong. */
  stakes: string;
  /** Exactly what Claude needs back to close this. Be specific: a quote, a number, a URL, a date. */
  needs: string[];
  /** Where to look. Primary sources first. */
  where: string[];
}

export const RESEARCH_CHECKS: ResearchCheck[] = [
  // ── Surplus Funds Basics ──────────────────────────────────────────────────────────────────────
  {
    key: "ga-pay-direct-rule",
    course: "surplus-funds-basics",
    lesson: "surplus-georgia",
    quote:
      'Located funds must be paid directly to the owner and may not be paid to the finder, "whether pursuant to a duly executed power of attorney or otherwise"',
    title: "Georgia: must recovered funds be paid directly to the owner?",
    severity: "high",
    question:
      "Does O.C.G.A. § 44-12-224 (or a related provision) actually require that located property be paid directly to the owner and NOT to the finder, including under a power of attorney? Quote the operative sentence.",
    claim:
      "The course states, marked as reported rather than verified, that funds must be paid directly to the owner and may not be paid to the finder, 'whether pursuant to a duly executed power of attorney or otherwise.'",
    stakes:
      "This is the single most operationally consequential item in the course. If it holds, an operator cannot net their fee at source: they invoice and carry collection risk on every file, which changes cash flow, the contract and how much working capital is needed before the first fee arrives. Teaching the wrong answer sends someone into Georgia with a business model that does not work.",
    needs: [
      "The exact statutory sentence, quoted, with the code section and subsection",
      "Whether it applies only to property already delivered to the commissioner, or more broadly",
      "The URL of the primary source you read it in, and the date you read it",
    ],
    where: [
      "Georgia General Assembly's own code site, rather than Justia or FindLaw",
      "Georgia Department of Revenue unclaimed property program, which may state it plainly",
      "A call to the Georgia DOR unclaimed property office",
    ],
  },
  {
    key: "ga-county-held-finder-rules",
    course: "surplus-funds-basics",
    lesson: "surplus-georgia",
    quote:
      "Whether Georgia regulates finders for county-held excess funds, as distinct from state-held unclaimed property, is not established here.",
    title: "Georgia: are finders regulated for COUNTY-held excess funds?",
    severity: "high",
    question:
      "Does any Georgia rule cap fees, require registration, or impose a waiting period for someone assisting with COUNTY-held excess funds under O.C.G.A. § 48-4-5, as distinct from state-held unclaimed property under § 44-12-224?",
    claim:
      "The course says plainly that this is not established, and treats the 10 percent cap and 24-month unenforceability as applying to state-held property only.",
    stakes:
      "It is the one hole in the three-state comparison table. If county-held funds are unregulated, Georgia is a materially better market than the course implies before the five-year cliff. If they are regulated and the course says nothing, a learner could charge an unlawful fee.",
    needs: [
      "Yes or no, with the code section if yes",
      "If yes: the cap, any registration requirement, and any waiting period",
      "Whether the Claimant Designated Representative registration introduced 1 July 2024 reaches county-held funds",
    ],
    where: [
      "Georgia code, Title 48 Chapter 4 and Title 44 Chapter 12",
      "Georgia DOR guidance on Claimant Designated Representatives",
      "A call to one county tax commissioner's office, which will know what they require in practice",
    ],
  },
  {
    key: "fl-197582-tax-deed-clock",
    course: "surplus-funds-basics",
    lesson: "surplus-florida",
    quote:
      "Reported requirements, and this one has not been read against the primary text yet, so verify before relying on it: claimants have 120 days from the date of the notice to file with the clerk, and claims other than the property owner's that miss the 120th day are barred.",
    title: "Florida: the 120-day tax deed surplus clock",
    severity: "medium",
    question:
      "In Fla. Stat. § 197.582, is the claim period 120 days from the date of the NOTICE, and are non-owner claims barred after it while the property owner is treated differently? Quote the operative subsection.",
    claim:
      "The course states this as reported from secondary sources, and explicitly says it has not been read against the primary text.",
    stakes:
      "A wrong deadline is the failure mode that permanently costs a homeowner their money, and it is the number a learner is most likely to repeat to someone.",
    needs: [
      "The operative sentence quoted, with the subsection",
      "Confirmation of what event starts the clock, notice date versus sale date",
      "How the property owner's position differs from other claimants",
    ],
    where: [
      "flsenate.gov statutes for the current year, section 197.582",
      "A Florida clerk of court's tax deed surplus page, which usually restates the rule",
    ],
  },
  {
    key: "tx-attorney-referral-fees",
    course: "surplus-funds-basics",
    lesson: "surplus-texas",
    quote:
      "Note that attorneys generally may not split fees with non-lawyers under the rules of professional conduct, so a referral-fee arrangement needs its own check with a Texas lawyer.",
    title: "Texas: can a non-attorney take a referral fee from an attorney?",
    severity: "medium",
    question:
      "Under the Texas Disciplinary Rules of Professional Conduct, may a Texas attorney pay a referral fee to a non-attorney who sends them an excess-proceeds client, and if not, what arrangements are permitted?",
    claim:
      "The course offers 'free information plus referral to an attorney' as one of three lawful Texas models, and flags that fee-splitting with non-lawyers is generally prohibited and needs its own check.",
    stakes:
      "It determines whether Texas can be a revenue market at all for a non-attorney, or only a goodwill one. The course currently leaves it open, which is honest but unhelpful to someone planning.",
    needs: [
      "The rule number and what it permits or prohibits",
      "Whether any arrangement, such as employment or a marketing fee, is permitted instead",
      "A Texas lawyer's read, since this is a professional-conduct question rather than a statute lookup",
    ],
    where: [
      "State Bar of Texas, Disciplinary Rules of Professional Conduct",
      "The lawyer you engage for the review, as question one",
    ],
  },

  // ── Sommelier series ──────────────────────────────────────────────────────────────────────────
  {
    key: "rioja-ageing-ladder",
    course: "bvc-taster-wine",
    lesson: "somm-reading-old-world-labels",
    quote:
      "For red Rioja the ladder runs roughly two, three and five years total, with one, one and two of those in oak, and the exact requirements are set and periodically revised by the Consejo Regulador",
    title: "Rioja: current minimum ageing for Crianza, Reserva, Gran Reserva",
    severity: "medium",
    question:
      "What are the CURRENT minimum total ageing and minimum barrel ageing periods for red Rioja at Crianza, Reserva and Gran Reserva, per the Consejo Regulador?",
    claim:
      "The lesson gives the ladder as 'broadly two, three and five years total, with one, one and two of those in barrel' and tells the reader to check the current rules because they are periodically revised.",
    stakes:
      "Low harm, since the lesson already hedges and the ladder's ORDER is the teaching point. But a course that prints approximate numbers when exact ones exist is doing less than it could.",
    needs: [
      "The current figures for red, and whether white and rosado differ",
      "The date of the most recent revision",
      "A link to the Consejo Regulador's own statement of them",
    ],
    where: ["Consejo Regulador DOCa Rioja, riojawine.com", "The DOCa Rioja reglamento itself"],
  },
  {
    key: "sca-extraction-window",
    course: "bvc-taster-coffee",
    lesson: "coffee-extraction",
    quote:
      "The Specialty Coffee Association's brewing control work puts a widely used target range at roughly 18 to 22 percent extraction yield, with strength around 1.15 to 1.35 percent dissolved solids for filter coffee.",
    title: "SCA: is the 18-22% extraction and 1.15-1.35% strength window current?",
    severity: "medium",
    question:
      "Does the Specialty Coffee Association still publish the brewing control window as roughly 18-22 percent extraction yield and 1.15-1.35 percent strength, and has the Coffee Value Assessment work changed it?",
    claim:
      "The course teaches those two ranges as a window to steer within, cited to the SCA's brewing control work.",
    stakes:
      "It is the most quoted pair of numbers in specialty coffee and the course presents them as current. If the SCA has revised them, the course is teaching a superseded standard while claiming to teach the current one, which is the exact failure it criticises elsewhere.",
    needs: [
      "Whether the figures are current, and the SCA page or standard that states them",
      "Whether the cupping ratio of 8.25 g per 150 ml is also still current",
      "Any date the SCA gives for the most recent revision",
    ],
    where: ["sca.coffee protocols and standards", "The SCA Coffee Value Assessment documentation"],
  },
  {
    key: "norc-child-labour-figure",
    course: "bvc-taster-chocolate",
    lesson: "choc-ethics",
    quote:
      "estimated approximately 1.56 million children in child labor in cocoa production in those two countries in the 2018/19 season, with a large majority engaged in hazardous work as defined by the survey",
    title: "Chocolate: the 1.56 million child labor figure and its survey years",
    severity: "high",
    question:
      "Does the NORC at the University of Chicago report state approximately 1.56 million children in child labor in cocoa production in Côte d'Ivoire and Ghana, and for which survey year?",
    claim:
      "The course states roughly 1.56 million children in child labor in cocoa in those two countries in 2018/19, with a large majority in hazardous work.",
    stakes:
      "This is the most serious factual claim in the sommelier series and it concerns real harm to real children. Getting the number or the years wrong, in either direction, is worse than not citing a number at all. It is also the claim most likely to be quoted back at BAM.",
    needs: [
      "The figure as the report states it, with the page or table",
      "The exact survey year or years it covers",
      "Whether a more recent NORC or successor survey has since superseded it",
    ],
    where: ["norc.org, the cocoa child labor report", "US Department of Labor, which commissioned it"],
  },

  // ── Storytelling / Documentarian ──────────────────────────────────────────────────────────────
  {
    key: "documenters-permission",
    course: "civic-documentation (planned)",
    title: "Documenters: tell City Bureau and Mirror Indy the course exists",
    severity: "medium",
    question:
      "Are City Bureau and Mirror Indy content for a paid course to teach the Documenters practice from their published Field Guide, citing it and directing learners to apply to the real program?",
    claim:
      "The planned Civic Documentation course is built on the Field Guide's structure and standards, cites them, and sends learners to documenters.org to apply. It claims no endorsement and no affiliation.",
    stakes:
      "The course is a benefit to them, since it produces trained applicants for a program that trains and pays people. That is exactly why it should not arrive as a surprise. It is also a rights question about how much of the Guide may be quoted rather than taught.",
    needs: [
      "A reply from City Bureau (documenters@citybureau.org) and Mirror Indy (documenters@mirrorindy.org)",
      "Any wording they want used, or want avoided, when the course names them",
      "Whether they object to the course pointing learners at the Indianapolis program",
    ],
    where: [
      "documenters@citybureau.org and documenters@mirrorindy.org",
      "The Field Guide's own Contact us section",
    ],
  },

  // ── Civics ────────────────────────────────────────────────────────────────────────────────────
  {
    key: "trump-v-barbara-status",
    course: "citizenship-naturalization",
    lesson: "birthright-citizenship",
    quote:
      "the Supreme Court struck down a 2025 executive order that had sought to limit birthright citizenship",
    title: "Trump v. Barbara: current status and whether the lesson still holds",
    severity: "high",
    question:
      "What is the current procedural status of Trump v. Barbara (decided 30 June 2026), including any rehearing petition or further proceedings, and does the lesson's description of the holding and the vote split remain accurate?",
    claim:
      "The lesson describes the Court striking down the 2025 executive order 6-3, splitting 5-4 on the underlying constitutional question, and itself tells the reader to confirm the current status because further proceedings were reported as of July 2026.",
    stakes:
      "A civics course teaching birthright citizenship is exactly where being out of date is least acceptable, and the lesson currently carries its own hedge, which is a signal it is unfinished rather than a solution.",
    needs: [
      "Current status: final, rehearing pending, or further proceedings",
      "Confirmation of the vote split as described",
      "Whether anything in the holding has been narrowed or clarified since",
    ],
    where: ["supremecourt.gov docket for the case", "The Court's opinion and any subsequent orders"],
  },
  {
    key: "baltimore-grant-figures",
    course: "baltimore-chain",
    title: "Baltimore: are the grant figures still current?",
    severity: "low",
    question:
      "Are the grant amounts and program names cited in the Baltimore course still accurate, and are the programs still running?",
    claim:
      "The course tells the learner to re-check every figure before relying on it, since grants change.",
    stakes:
      "Grant programs change or close, and a learner acting on a closed program wastes real effort. Low severity only because the lesson already tells them to check.",
    needs: [
      "For each program named: still running, yes or no",
      "Current amounts if changed",
      "The program page URL and the date checked",
    ],
    where: ["The administering agency's own site for each program"],
  },

  // ── Pricing anchors (src/lib/market-comparison.ts) ───────────────────────────────────────────
  // These differ from every other check in this file: they do not fix a sentence in a lesson, they
  // clear a number used to REASON about our own prices, and gate whether that number may ever be
  // quoted publicly. BAM said he would verify prices himself, so they live on the same list he
  // already works, /admin/research, rather than in a separate doc nobody opens.
  //
  // Each `price-*` key matches a MarketComparison `key`. When one is answered, update the entry's
  // price + gatheredOn, flip `needsVerification` to false, and DELETE the check from this file.
  {
    key: "price-dla-part-107",
    course: "pricing: market anchors",
    title: "Drone Launch Academy, Part 107 exam prep, current price?",
    severity: "medium",
    question:
      "What does Drone Launch Academy charge TODAY for its FAA Part 107 Exam Prep course, at full list price and at any standing discount?",
    claim:
      "market-comparison.ts records $199 as of 2026-08-04, and the Drone Services bundle's justification says $99 'undercuts their $199 exam prep ALONE'.",
    stakes:
      "This is the single comparison the drone bundle's price is argued from. If their real price is $99 on a standing sale, our headline is wrong and the bundle is mispriced. It is also the number most likely to end up in marketing copy, where a wrong figure about a named competitor is worse than no figure.",
    needs: [
      "Current list price in USD",
      "Any standing or seasonal discount, and what it reduces to",
      "The URL and the date checked",
    ],
    where: ["dronelaunchacademy.com course/pricing pages", "Their checkout, which is the only authoritative price"],
  },
  {
    key: "price-dla-roof-inspection",
    course: "pricing: market anchors",
    title: "Drone Launch Academy, Aerial Roof Inspection Pro: price, and what $499 actually buys",
    severity: "medium",
    question:
      "What is the current price of Aerial Roof Inspection Pro, and what does it include that our planned drone-roof-property-and-claims course does not, sample reports, client deliverables, an industry affiliation, live support?",
    claim:
      "market-comparison.ts records $499 as of 2026-08-04 and notes the $499-vs-$29 gap is 'worth investigating rather than boasting about'.",
    stakes:
      "The widest gap in the comparison table, so it is both our best marketing line and our biggest blind spot. If $499 buys sample deliverables and report templates, that is a real product gap in course 07 worth closing before launch, a competitive-intelligence answer, not just a price.",
    needs: [
      "Current price",
      "The course's syllabus or module list",
      "Whether it ships templates, sample reports, or any credential",
      "URL and date checked",
    ],
    where: ["dronelaunchacademy.com", "Their sales page's curriculum section", "Buying it once is a legitimate way to answer this"],
  },
  {
    key: "price-pilot-institute-part-107",
    course: "pricing: market anchors",
    title: "Pilot Institute, Part 107 and the Part 107 + Business bundle: standing prices?",
    severity: "medium",
    question:
      "What are Pilot Institute's standing (non-promotional) prices for the Part 107 course and for the Commercial Drone Pilot Bundle (Part 107 + Drone Business)?",
    claim:
      "market-comparison.ts records ~$149 as of 2026-08-04 with a note that it was 'reported as a LIMITED-TIME reduction', and that the full bundle price could not be established.",
    stakes:
      "The least reliable figure in the table, and the most structurally relevant one: their Part 107 + business bundle is EXACTLY the shape of our Drone Services bundle, so it is the closest thing to a direct competitor our $99 has. Getting this wrong misprices the flagship bundle.",
    needs: [
      "Standing price of the Part 107 course",
      "Price of the Part 107 + Drone Business bundle",
      "What the business half covers, module by module",
      "URL and date checked",
    ],
    where: ["pilotinstitute.com course and bundle pages"],
  },
  {
    key: "price-udemy-virtual-tours",
    course: "pricing: market anchors",
    title: "Udemy 360/virtual-tour courses, what do they ACTUALLY sell for?",
    severity: "low",
    question:
      "What is the typical effective (post-discount) price of the main 360 / virtual-property-tour courses on Udemy, observed across a few visits rather than at one moment?",
    claim:
      "market-comparison.ts records a $49.99 list price and already warns that 'Udemy's real price after discount is frequently under $20, so the honest comparison for our $19 fundamentals course is about the same money, much more course'.",
    stakes:
      "Our $19 fundamentals course and the $49 360 bundle are both anchored here. Udemy list prices are close to fictional; if the real price is $15, the 360 bundle is competing on volume and quality rather than on price, which changes how it should be marketed.",
    needs: [
      "Observed effective prices on 2-3 separate days",
      "The course URLs",
      "Dates checked",
    ],
    where: ["udemy.com, checked logged-out, on more than one day"],
  },
  {
    key: "price-dla-connect-membership",
    course: "pricing: market anchors",
    title: "Drone Launch Connect, what does the $348/year membership actually include?",
    severity: "low",
    question:
      "What does Drone Launch Academy's Connect community membership include at $348/12 months, job leads, referrals, live calls, course access?",
    claim:
      "market-comparison.ts records $348/12mo and states plainly that 'theirs buys a PEER COMMUNITY... ours buys a CONTENT CATALOG. Do not present $99 vs $348 as like-for-like.'",
    stakes:
      "This is the clearest case of a competitor charging more for something we do not offer at all. The answer decides a product question, not just a price one: whether all-access should ever include a community, and whether $99/year is underpriced if it did.",
    needs: [
      "Current price and term",
      "What membership includes",
      "Whether course access is bundled with it",
      "URL and date checked",
    ],
    where: ["dronelaunchacademy.com membership/community pages"],
  },
  {
    key: "price-coursera-range",
    course: "pricing: market anchors",
    title: "Coursera single-course range, is $39-79 still right?",
    severity: "low",
    question:
      "What is the current price range for a single self-paced Coursera course with a certificate, and has the model shifted further toward subscription-only (Coursera Plus)?",
    claim:
      "course-pricing.ts has anchored the whole catalog's tier ladder on 'Coursera $39-79 (with a certificate)' since the original pricing turn, and market-comparison.ts flags the range as predating this turn.",
    stakes:
      "This anchor sets the ceiling for the ENTIRE catalog, not just this series, every Core and Premium price is justified relative to it. If Coursera has moved to subscription-only, the comparison our tier ladder rests on no longer exists and the ladder needs rethinking.",
    needs: [
      "Current single-course price range",
      "Whether single-course purchase is still offered at all",
      "Coursera Plus pricing, since that is now the closer analogue to our all-access",
      "Date checked",
    ],
    where: ["coursera.org, logged out"],
  },

  // ── Here Be Dragons: Writing the World (plans/58) ──────────────────────────────────────────────
  // Both filed by the course's own author, who flagged them rather than shipping a citation it could
  // not stand behind. This is the rule working as intended: a hedge with no check is a hedge nobody
  // will ever clear.
  {
    key: "wtw-nasa-alh84001-release-title",
    course: "writing-the-world",
    lesson: "press-release-institutional-voice",
    quote:
      "On 7 August 1996, more than a week before the paper appeared in print, NASA held a press conference at its Washington headquarters to announce the ALH84001 findings.",
    title: "Exact title of the 1996 NASA ALH84001 press release",
    severity: "medium",
    question:
      "What was the exact title and release date of the NASA press release announcing the ALH84001 Martian meteorite findings in August 1996?",
    claim:
      "Lesson 5 (the press release) cites it as: National Aeronautics and Space Administration. (1996, August 7). Meteorite yields evidence of primitive life on early Mars. The date and the event are solid. The exact release TITLE is the part that was not verified against NASA's own archive.",
    stakes:
      "Lesson 5 is the course's worked example of institutional voice, and it teaches students to trace a claim back to its source document. A misquoted title in the one lesson about citing precisely would be the most self-undermining error the course could ship. It is also an ELA capstone whose standards claims rest on modeling WHST.11-12.8.",
    needs: [
      "The verbatim release title",
      "The release date and any release number",
      "A stable URL in NASA's newsroom or history archive",
    ],
    where: [
      "NASA newsroom archive, nasa.gov",
      "NASA History Division online reference collection",
      "The Internet Archive capture of nasa.gov from August 1996",
    ],
  },
  {
    key: "wtw-orwell-horizon-citation",
    course: "writing-the-world",
    lesson: "the-missing-actor",
    quote: "Orwell, G. (1946). Politics and the English language. Horizon, 13(76), 252-265.",
    title: "Volume, issue and page range for Orwell's Politics and the English Language",
    severity: "low",
    question:
      "What are the correct volume, issue and page numbers for George Orwell's Politics and the English Language as first published in Horizon in April 1946?",
    claim:
      "Lesson 9 (the passive voice and the missing actor) and lesson 10 cite it as Horizon, 13(76), 252-265. The essay, the journal and the year are not in doubt; the volume, issue and page range were not confirmed against the issue itself.",
    stakes:
      "Low stakes for the argument, which does not depend on the pagination, but this is the lesson that teaches citation as an instruction to a reader with a job. A wrong page range here is a small error in exactly the place a sharp student will check.",
    needs: ["Volume number", "Issue number", "First and last page"],
    where: [
      "A library copy or scan of Horizon vol. 13 (1946)",
      "The Orwell Foundation, which reproduces the essay with publication details",
      "Any scholarly edition of Orwell's essays, which will carry the original citation",
    ],
  },

  // ── Here Be Dragons: Wrong for Good Reasons (plans/58) ─────────────────────────────────────────
  {
    key: "wfgr-tharp-dismissal-quotation",
    course: "wrong-for-good-reasons",
    lesson: "who-gets-believed",
    quote:
      "Working that way she identified the mid-ocean rift valley and argued it was continuous, and by her own account the finding was initially waved off.",
    title: "What Marie Tharp was actually told when she first mapped the rift valley",
    severity: "medium",
    question:
      "Is there a documented, sourceable quotation for the reaction Marie Tharp received when she first identified the rift valley in the Mid-Atlantic Ridge, and what exactly was said?",
    claim:
      "Lesson 15 (who gets believed) currently PARAPHRASES the reaction as her being waved off, rather than quoting the widely repeated line, because the famous wording is reported in secondary retellings more often than it is documented.",
    stakes:
      "Lesson 15 is the course's who-gets-believed lesson, and lesson 9 of course 1 teaches that repetition is not corroboration. Printing a much-repeated quotation without a source would break the series' own rule in the lesson least able to afford it. The paraphrase is safe but weaker than the real thing would be.",
    needs: [
      "A quotation with a documented source (Tharp's own writing, an interview transcript, or an archival record)",
      "Or confirmation that no such documented wording exists, in which case the paraphrase stays and this check closes as blocked",
    ],
    where: [
      "Tharp, M. (1999). Connect the dots: Mapping the seafloor and discovering the mid-ocean ridge, in Lamont-Doherty's own published memoir collection",
      "Lamont-Doherty Earth Observatory archives, Columbia University",
      "Hali Felt's biography Soundings (2012), checking ITS sourcing rather than treating it as the source",
    ],
  },
  {
    key: "wfgr-letronne-1834-citation",
    course: "wrong-for-good-reasons",
    lesson: "irving-1828",
    quote:
      "In 1834, the French scholar Antoine-Jean Letronne published an influential essay arguing that the Church Fathers had held a flat earth.",
    title: "Full citation for Letronne's 1834 essay on medieval cosmography",
    severity: "low",
    question:
      "What are the journal, volume and page numbers for J. A. Letronne's 1834 essay on the cosmographical opinions of the Church Fathers?",
    claim:
      "Lesson 4 credits Letronne (1834) alongside Washington Irving as a co-originator of the flat-earth myth, so the story is not told as a single-author invention. The citation currently omits volume and page numbers rather than guessing them.",
    stakes:
      "Low: the argument does not depend on the pagination, and naming Letronne at all is what keeps the lesson from oversimplifying its own myth-busting. But an incomplete citation in a course about tracing claims to their origin is a visible weak spot for a careful reader.",
    needs: ["Journal title", "Volume and year", "First and last page"],
    where: [
      "Russell, J. B. (1991). Inventing the flat earth, whose notes cite Letronne directly",
      "Revue des Deux Mondes archives for 1834",
      "Gallica, the Bibliothèque nationale de France digital library",
    ],
  },

  // ── How We Know What's Out There (SCI-02) ─────────────────────────────────────────────────────
  // The physics in this course is settled and citable. The BIOGRAPHY is where the risk is, and the
  // She Did the Work audit is the precedent: 14 factual errors in one social calendar, several
  // about living people. Popular science history is worse, because a good anecdote gets repeated
  // for a century before anyone checks it. Each lesson below HEDGES IN THE TEXT rather than
  // asserting, and tells the learner it is hedging, which is the subject of the course being
  // modelled rather than a disclaimer bolted on. Close a check by fixing the lesson and DELETING
  // the entry.
  {
    key: "banneker-lenfant-plan",
    course: "how-we-know-whats-out-there",
    lesson: "banneker-and-the-almanac",
    quote:
      "Treat that story as unestablished. It is widely repeated, and historians have questioned whether it holds up.",
    title: "Banneker and the reconstruction of the Washington plan from memory",
    severity: "high",
    question:
      "What does the primary record support about Benjamin Banneker's role in the survey of the federal district, and specifically about the claim that he reconstructed L'Enfant's plan from memory after L'Enfant left with the drawings?",
    claim:
      "The lesson states his documented work (almanac ephemerides, the 1791 letter to Jefferson, the boundary survey under Andrew Ellicott) and explicitly declines to repeat the reconstruction story, telling the learner it is contested and that an already-remarkable life acquiring a better story is a reason to check.",
    stakes:
      "HIGH, in two directions. Asserting a likely-false story in a course about evidence would be self-refuting. But under-crediting him would be its own error, and this is a Black scientist whose reputation has been both inflated by admirers and attacked by detractors. Getting the line exactly right matters more here than almost anywhere in the catalog.",
    needs: [
      "What the surviving survey records show about his actual role and dates",
      "The earliest known appearance of the reconstruction story, and whether any contemporary source supports it",
      "A citable statement from a historian or holding institution on its status",
    ],
    where: [
      "Library of Congress, Banneker and early District of Columbia survey records",
      "Maryland Center for History and Culture",
      "National Park Service history of the L'Enfant plan",
    ],
  },
  {
    key: "payne-thesis-retraction",
    course: "how-we-know-whats-out-there",
    lesson: "cecilia-payne-and-what-stars-are-made-of",
    quote:
      "The compressed version is doing several things at once, and this course flags rather than repeats it.",
    title: "Cecilia Payne's 1925 thesis: what actually happened with the hedged conclusion",
    severity: "medium",
    question:
      "What do the 1925 thesis and the surrounding correspondence actually show about how the hydrogen-abundance conclusion came to be described as almost certainly not real, and what was Henry Norris Russell's documented role?",
    claim:
      "The lesson states that the published thesis contains language stepping back from the result, that she was correct, and that the widely told forced-to-retract version compresses several things. It deliberately does not narrate the sequence.",
    stakes:
      "MEDIUM. The science is not in question and the lesson is honest as written. But this is one of the most-repeated stories in popular astronomy and the popular version may be unfair to one or both parties. A course about evidence should tell it accurately or not at all.",
    needs: [
      "The exact hedging sentence in the published thesis, with its page",
      "What the surviving correspondence shows about who advised the hedge",
      "How Russell's own later publication treated her priority",
    ],
    where: [
      "The published 1925 thesis, Stellar Atmospheres, Radcliffe College",
      "Harvard College Observatory archives and the Payne-Gaposchkin papers",
    ],
  },
  {
    key: "leavitt-nobel-anecdote",
    course: "how-we-know-whats-out-there",
    lesson: "rung-two-leavitts-yardstick",
    quote:
      "That story is usually told inaccurately, and this course leaves it out pending a check against primary sources.",
    title: "The Henrietta Leavitt Nobel nomination anecdote",
    severity: "low",
    question:
      "What is the documented basis for the story that Henrietta Swan Leavitt was going to be nominated for a Nobel Prize, and is the usual telling accurate?",
    claim:
      "The lesson mentions the anecdote exists, says it is usually told inaccurately, omits it, and argues that introducing her through a prize she did not receive makes the prize the measure of the work.",
    stakes:
      "LOW for the astronomy, which is unaffected. Worth settling anyway: it is repeated everywhere, and this course tells the learner it is unreliable, so it should be able to say why.",
    needs: [
      "The documented origin of the story and who recorded it",
      "Whether any nomination or intent to nominate is evidenced",
      "Whether the usual retelling misstates the dates",
    ],
    where: ["The Nobel Foundation nomination archive", "Harvard College Observatory archives"],
  },
  {
    key: "hubble-tension-current-values",
    course: "how-we-know-whats-out-there",
    lesson: "the-hubble-tension",
    quote:
      "This course does not print current values for the expansion rate, because they are actively revised and a course is a poor place for a number that moves.",
    title: "Current expansion-rate values from both method families",
    severity: "medium",
    question:
      "What are the current published values, with uncertainties and dates, for the Hubble constant from the distance-ladder family and from the early-universe family, and has the tension narrowed?",
    claim:
      "The lesson describes the disagreement and its three candidate explanations, and deliberately prints NO numbers, telling the learner to go to a current source and note which method produced the figure.",
    stakes:
      "MEDIUM. The lesson is honest and durable as written, which was the point of omitting the numbers. But a course about how we know things is stronger if it can show the reader the actual gap, and this is live enough to need a date attached and a plan to revisit.",
    needs: [
      "One current representative value plus uncertainty from each family, with publication and date",
      "Whether the gap has narrowed, widened, or held",
      "A note on when this should next be re-checked",
    ],
    where: [
      "NASA and ESA mission pages",
      "The most recent peer-reviewed determinations from each method family",
    ],
  },
  {
    key: "iau-hubble-lemaitre-resolution",
    course: "how-we-know-whats-out-there",
    lesson: "redshift-and-an-expanding-universe",
    quote:
      "The International Astronomical Union has recommended the name Hubble-Lemaitre law, and this course uses it.",
    title: "The IAU resolution on the Hubble-Lemaitre law: exact status and wording",
    severity: "low",
    question:
      "What did IAU Resolution B4 (2018) actually say, what was the outcome of the member vote, and is the recommendation binding or advisory?",
    claim:
      "The lesson states that Lemaitre published the relationship in 1927, two years before Hubble, that the IAU has recommended the name Hubble-Lemaitre law, and that this course uses it.",
    stakes:
      "LOW. The priority fact is well documented and is the teaching point. But the lesson makes a claim about what a scientific body decided, and recommended versus voted-to-rename is exactly the distinction this course teaches learners to notice. It should be right about its own example.",
    needs: [
      "The resolution's operative wording",
      "The vote outcome and whether it is advisory",
      "Confirmation of the 1927 publication details",
    ],
    where: [
      "iau.org, Resolution B4 (2018)",
      "Lemaitre 1927, Annales de la Societe Scientifique de Bruxelles",
    ],
  },

  // ── The River and the Watershed (SCI-03) ──────────────────────────────────────────────────────
  {
    key: "gulf-hypoxic-zone-extent",
    course: "the-river-and-the-watershed",
    lesson: "why-the-oxygen-runs-out",
    quote:
      "The affected area varies from year to year and is measured by survey each summer.",
    title: "Gulf of Mexico hypoxic zone: the current measured extent",
    severity: "medium",
    question:
      "What was the measured extent of the Gulf of Mexico hypoxic zone in the most recent annual summer survey, and what is the five-year average the Hypoxia Task Force reports against its own reduction target?",
    claim:
      "The lesson describes the mechanism in four steps and states that the affected area varies year to year and is measured each summer. It deliberately prints NO figure.",
    stakes:
      "MEDIUM. The lesson is honest and durable as written, and the mechanism is the teaching point. But the size is the fact everyone wants, a course that can give it with a year attached is stronger, and printing a typical size from memory would be exactly the fake precision this track's courses teach against.",
    needs: [
      "The most recent survey's measured extent, with its year",
      "The five-year running average and the Task Force's stated target",
      "A note on when to re-check, since this is annual",
    ],
    where: [
      "NOAA annual hypoxia survey announcements",
      "Mississippi River/Gulf of Mexico Hypoxia Task Force reports, epa.gov/ms-htf",
    ],
  },
  {
    key: "mississippi-basin-drainage-share",
    course: "the-river-and-the-watershed",
    lesson: "you-live-in-a-watershed",
    quote:
      "The Mississippi basin drains a very large share of the continental United States",
    title: "What share of the continental United States the Mississippi basin drains",
    severity: "low",
    question:
      "What share of the land area of the continental United States does the Mississippi River basin drain, per the USGS or another primary authority, and how is the basin boundary defined for that figure?",
    claim:
      "Lesson 1 says the basin drains 'a very large share' of the continental United States and names the Rockies and Appalachians as the reach of its tributaries, without giving a percentage.",
    stakes:
      "LOW. The teaching point is that a watershed is the land that drains to a place, not the exact fraction. But the commonly quoted figure varies between sources depending on how the basin is delimited, and a course whose first lesson is about what a watershed IS should be able to state the number and say how it was defined.",
    needs: [
      "A figure from a primary authority, with the definition of the basin used",
      "Whether the commonly quoted variants differ because of boundary definition or because of error",
    ],
    where: ["U.S. Geological Survey", "U.S. Army Corps of Engineers, Mississippi Valley Division"],
  },
  // ── WELL-08 Context, Equity, and the Coaching Agreement ───────────────────────────────────────
  {
    key: "well08-appreciative-inquiry-health-coaching-evidence",
    course: "well-context-equity",
    lesson: "appreciative-inquiry",
    quote:
      "this program could not locate randomized evidence for it as a one-to-one health-coaching intervention comparable to the trials behind motivational interviewing",
    title: "Appreciative Inquiry: is there trial evidence in one-to-one health coaching?",
    severity: "medium",
    question:
      "Does randomized evidence exist for Appreciative Inquiry as a one-to-one health-coaching or health-behavior-change intervention, with a health or behavioral outcome, rather than as an organizational-development or team-level method? If it does, give the trial, the outcome, and the effect size.",
    claim:
      "The lesson teaches Appreciative Inquiry as a framing device with a plausible mechanism and a good fit to the rest of the program, and states explicitly that it is NOT an evidence-backed protocol, because no comparable randomized health-coaching evidence was located.",
    stakes:
      "The NBHWC competency list names Appreciative Inquiry (2.9), so a coach will meet it as though it were established. If good trial evidence exists, the lesson is under-claiming a technique the handbook expects and should say what the trials show. If it does not, the honest label stays and the lesson is the only place a learner will be told so. Either way the label should reflect what is actually there, which is the rule the whole curriculum runs on.",
    needs: [
      "A randomized or otherwise controlled trial with individual participants, not an organizational case study",
      "The outcome measured and its effect size, so the lesson can quote it the way it quotes the MI trials",
      "Or a definite negative: a systematic review reporting that no such trials exist",
    ],
    where: [
      "PubMed and PsycINFO for Appreciative Inquiry with health coaching, behavior change, or self-management",
      "The Cooperrider-associated literature, checking whether individual-level outcomes were ever measured",
      "Any NBHWC-approved program's own reading list, which may cite the evidence the handbook relies on",
    ],
  },
  // ── Who Gets the Credit (Black inventors and attribution) ────────────────────────────────────
  {
    key: "blair-colored-man-notation",
    course: "who-gets-the-credit",
    lesson: "free-patentees-and-the-first-problem",
    quote:
      "He is very widely described as the only inventor whose Patent Office record identifies him as a colored man; this course repeats that description as a widely reported claim rather than as a verified one",
    title: "Is Henry Blair really the only inventor the Patent Office recorded as a colored man?",
    severity: "medium",
    question:
      "Does any Patent Office record, index, or annual report actually identify Henry Blair as 'a colored man', and is he demonstrably the only inventor so identified?",
    claim:
      "The course states the claim is very widely repeated and explicitly declines to assert it as verified, because the author could not check it against the Patent Office's own indexes.",
    stakes:
      "It is one of the most-repeated single facts about Blair. If it is a modern accretion rather than a record entry, the course should say so plainly rather than passing it along hedged. If it is real, the hedge is unnecessary and weakens a genuinely striking fact.",
    needs: [
      "A citation to the specific Patent Office document (index, annual report, or file wrapper) carrying the notation, with a page or image",
      "Whether any OTHER inventor carries a comparable racial notation, which is what the word 'only' turns on",
      "If no such record exists, the earliest source that makes the claim and what it cites",
    ],
    where: [
      "USPTO historical patent records and the annual reports of the Commissioner of Patents for 1834-1836",
      "National Archives, Records of the Patent and Trademark Office (Record Group 241)",
      "Portia P. James, The Real McCoy (Smithsonian, 1989), which surveys the nineteenth-century record",
    ],
  },
  {
    key: "edison-woods-litigation",
    course: "who-gets-the-credit",
    lesson: "documented-cases-nineteenth-century",
    quote:
      "The much more famous story, that Thomas Edison sued Woods twice and lost and then offered him a partnership, is repeated nearly everywhere and this course does not assert it",
    title: "Did Edison actually sue Granville Woods, and did he offer him a partnership?",
    severity: "medium",
    question:
      "Is there a docket, a Patent Office interference record, or a contemporary newspaper report establishing that Thomas Edison (or an Edison company) brought suit against Granville T. Woods over the induction telegraph patents, and that Woods prevailed?",
    claim:
      "The course teaches only the documented interference against Lucius Phelps and explicitly declines to assert the Edison litigation or the partnership offer.",
    stakes:
      "This is the single most repeated anecdote about Woods and it is the kind of claim a hostile reader checks first. If it is documented, the course is underselling a strong fact. If it is not, the course is right to withhold it and should say why in the lesson.",
    needs: [
      "A case name and court, or an interference number, for any Edison v. Woods proceeding",
      "A contemporary (1880s-1890s) newspaper or trade-press report of the suit or its outcome",
      "Any primary evidence for the partnership offer, as opposed to later biographical retellings",
      "What Rayvon Fouché concluded about this specific story in Black Inventors in the Age of Segregation (2003)",
    ],
    where: [
      "Rayvon Fouché, Black Inventors in the Age of Segregation (Johns Hopkins UP, 2003), chapter on Woods",
      "Patent Office interference records for the 1887 induction telegraphy patents (373,383 and 373,915)",
      "Contemporary electrical trade press: Electrical World, Electrical Review, 1887-1893",
    ],
  },
  {
    key: "cleveland-1916-rescue-counts",
    course: "who-gets-the-credit",
    lesson: "documented-cases-twentieth-century",
    quote:
      "Accounts differ on how many were rescued alive and how many bodies were recovered, and this course gives no number for that reason",
    title: "How many men did Garrett Morgan bring out of the Cleveland waterworks tunnel in 1916?",
    severity: "low",
    question:
      "What do contemporary Cleveland newspaper accounts and the city's own records say about the number of men rescued alive and the number of bodies recovered on 25 July 1916, and about whether Morgan was denied recognition others received?",
    claim:
      "The course names the date, the event, and Morgan's and his brother Frank's participation using the safety hoods, but gives no rescue figures because published accounts conflict.",
    stakes:
      "The event is the strongest human story attached to a verified patent in this course. Leaving it numberless is honest but flat, and a sourced figure would make the lesson materially better. A wrong figure would be exactly the error the course spends a section warning against.",
    needs: [
      "Cleveland newspaper coverage from late July 1916 with figures for survivors and bodies recovered",
      "Whether the city or the waterworks produced an official casualty report",
      "Documentary basis for the widely repeated claim that Morgan was passed over for a Carnegie Medal or comparable recognition",
    ],
    where: [
      "Cleveland Plain Dealer and Cleveland Press, 26-31 July 1916",
      "Cleveland Public Library, Cleveland Memory Project",
      "Carnegie Hero Fund Commission award records for 1916-1917",
      "USPTO, 'Of courage and caution' (Journeys of Innovation), which narrates the rescue",
    ],
  },
  {
    key: "gladys-west-recognition",
    course: "who-gets-the-credit",
    lesson: "credit-without-a-patent",
    quote: "Public recognition came decades after the work itself, which is the pattern this lesson exists to name.",
    title: "What exactly did Gladys West's Dahlgren work contribute to GPS, and when was she recognized?",
    severity: "low",
    question:
      "What is the precise technical description of Gladys West's contribution at the Naval Surface Warfare Center at Dahlgren, and what are the dates and forms of the recognition she eventually received?",
    claim:
      "The course says she worked on satellite geodesy, the computations behind an accurate mathematical model of the shape of the Earth, that this fed into what became GPS, and that public recognition came decades later. It gives no recognition date.",
    stakes:
      "Vagueness here is a weakness in a course whose whole argument is that specific, checkable claims beat impressive ones. A precise technical statement and a dated recognition would let the lesson make its point with the same rigor it demands elsewhere.",
    needs: [
      "A Navy or Dahlgren publication describing her role and the geodetic model she worked on",
      "The date and name of the formal recognition she received, with the awarding body",
      "Her own account, if published, of which computations she was responsible for",
    ],
    where: [
      "Naval Surface Warfare Center Dahlgren Division historical office and its published histories",
      "US Air Force Space and Missiles Pioneers Hall of Fame induction records",
      "Gladys West's memoir and interviews given after her public recognition",
    ],
  },
  {
    key: "ibn-firnas-corroboration",
    course: "the-moors",
    lesson: "where-the-claims-outrun-the-evidence",
    quote:
      "The account of a controlled flight appears in al-Maqqari, a North African writer of the late sixteenth and early seventeenth centuries, roughly seven hundred years after the event. No independent contemporary source describes it.",
    title: "Does any source independent of al-Maqqari describe the Ibn Firnas flight?",
    severity: "low",
    question:
      "Is there any ninth-, tenth-, or eleventh-century Arabic source that describes Abbas ibn Firnas attempting flight, independent of the tradition al-Maqqari transmits?",
    claim:
      "The course states that Ibn Firnas was a real and inventive figure of ninth-century Cordoba, that the flight account rests on al-Maqqari writing roughly seven centuries later, and that the contemporary verse by Mumin ibn Said is satire rather than a flight report.",
    stakes:
      "This is the course's flagship example of a claim outrunning its evidence, so it has to be right. If an independent early source exists, the lesson is teaching a correction that is itself wrong, which would be worse than teaching the myth.",
    needs: [
      "Any pre-1200 Arabic text mentioning the flight, with an edition and a folio or page reference",
      "A specialist assessment of whether Mumin ibn Said's verse can bear the weight sometimes placed on it",
      "The scholarly consensus on al-Maqqari's sources for the Ibn Firnas material",
    ],
    where: [
      "Al-Maqqari, Nafh al-Tib, and Pascual de Gayangos's translation (Oriental Translation Fund, 1840-1843)",
      "Encyclopaedia of Islam entries for Abbas ibn Firnas and for al-Maqqari",
      "Specialist literature on Andalusi science and on popular misrepresentations of medieval Muslim technology",
    ],
  },
];

export function getResearchCheck(key: string): ResearchCheck | undefined {
  return RESEARCH_CHECKS.find((c) => c.key === key);
}

export interface ResearchCheckGroup {
  course: string;
  checks: ResearchCheck[];
}

/** Grouped by course, high severity first inside each group. */
export function groupedResearchChecks(): ResearchCheckGroup[] {
  const rank = { high: 0, medium: 1, low: 2 } as const;
  const byCourse = new Map<string, ResearchCheck[]>();
  for (const c of RESEARCH_CHECKS) {
    const list = byCourse.get(c.course);
    if (list) list.push(c);
    else byCourse.set(c.course, [c]);
  }
  return [...byCourse.entries()].map(([course, checks]) => ({
    course,
    checks: [...checks].sort((a, b) => rank[a.severity] - rank[b.severity]),
  }));
}
