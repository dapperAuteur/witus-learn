import type { AuthoredCourse } from "./authored-course";

// "Renting Out Production Gear: the Owner-Operator's Business" (Careers & Media, also listed in
// Trade Skills and Money & Property). Slug `renting-out-production-gear`. Series
// `the-crew-behind-the-show` ("The Crew Behind the Show"), code CREW, position 06. CREW-01 is
// `stage-and-broadcast-rigging`, CREW-02 `sound-craft`, CREW-03 `light-on-set`; CREW-04 (the
// cinema-look camera rig) and CREW-05 (arena transmission) are approved briefs, not yet built, so this
// course names them in prose and links to no lesson of theirs.
//
// BRIEF: plans/future-courses/careers-and-media/2026-10-21-production-gear-rental-business-brief.md,
// APPROVED on 2026-10-21 (gate A8). The decisions recorded in the brief's section 7:
//   1. A public course in the CREW series, held ("Coming soon") until a peer reviewer signs
//      off. The publishHoldReason in scripts/seed-courses.ts says so.
//   2. Rental houses are described in prose as "a regional rental house". Every source is still cited
//      by name in the `## Sources` lists, as citation integrity requires.
//   3. Built locally in this repo.
// Standing rules from the brief: no lesson promises income, and every rate is a dated example with
// its date shown (all prices read on October 21, 2026).
//
// RESEARCH TIER 2 (docs/course-method/README.md): money, contracts, insurance and taxes.
// Inputs: the research pack content/broadcastig/renting-equipment-to-networks-and-studios/synthesis/
// 05-business-case.md and 04-builds-costs-compromises.md (local, gitignored; fetched 2026-10-21). Every
// source this course cites was fetched again on 2026-10-21 while the course was written, and only
// what the fetched page says is asserted. Arithmetic on those figures is shown in the lesson, labeled
// as the course's own arithmetic. Worked money models state every assumption as an assumption.
// Left out on purpose: the pack's reported union specialty camera rate (seen only on a third-party
// page), the UK terms of a peer-to-peer platform (no US terms were read), and any premium or tax
// figure the course could not read on the issuer's own page.
//
// CATEGORY NOTE: the brief named "Business" as an extra category. The learn tenant has no category of
// that name (scripts/seed-courses.ts inserts every category explicitly), so the registration uses
// "Money & Property", the existing category for money and contracts, with "Trade Skills".
//
// MARKED LESSONS. Each starts its body with a "> **Before release:**" line naming who must act.
//   QR (qualified reviewer): 15 and 16 (an attorney for the agreement; an insurance agent for the
//     waivers), 17 and 18 (a licensed insurance agent), 23, 24, 25 and 26 (a CPA or enrolled agent).
//   P (practitioner): 28 (a working owner-operator or crew coordinator, and a union business agent).
//   Unmarked: the market, choosing, buying, pricing and operations lessons, which rest on published
//   price lists, platform pages and manufacturer guidance quoted as written.
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A, may be hosted later: the IRS publications and pages, the CFR sections, the TSA page and
//    the SBA page (U.S. federal works).
//  - Tier B, link only, never rehost: the rental houses' price lists and policies, the platform's
//    help-center articles, the Insurance Information Institute and IRMI pages, the insurers' and the
//    broker's pages, the Sony help guide, the retailer and manufacturer product pages, the rate guide,
//    the union rates card, the league's page and the closed platform's home page.
//  - FIGURES: none.
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts):
//  - L3 and L28: how a union contract pays a member for the use of their own kit.
//  - L26: whether a state taxes the rental of production equipment.
//
// House style, matching stage-and-broadcast-rigging-course.ts: `section` on every lesson; flush-left
// single-line `:::reveal q ||| a`; recallContent from the second teaching lesson on, quizzing the
// lesson before; an APA 7 `## Sources` block on every teaching lesson with a locator on every entry; a
// quiz per section pooled to round(words / 35), clamped 40 to 100, serving 5, passing 80, shuffled; a
// final pooling 40 or more and serving 10, placed last. Option lengths are balanced within each
// question. American spelling in prose; quotations keep their own spelling. No em or en dashes.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const READ = "Retrieved October 21, 2026, from";

// Rental houses and the peer-to-peer platform. ShareGrid help articles carry an update date; APA 7
// letters same-year works in date order (titles break a tie on the same day).
const RH_CINEMA = `Rental House by Roberts Camera. (n.d.-a). *Cinema cameras* [Rental page]. ${READ} https://rentalhouseindy.com/rentals/cameras/cinema-cameras`;
const RH_GIMBALS = `Rental House by Roberts Camera. (n.d.-b). *Gimbals, stabilizers, and sliders* [Rental page]. ${READ} https://rentalhouseindy.com/rentals/camera-supports/gimbals-stabilizers-and-sliders`;
const RH_POLICIES = `Rental House by Roberts Camera. (n.d.-c). *Policies*. ${READ} https://rentalhouseindy.com/policies`;
const RH_FX3 = `Rental House by Roberts Camera. (n.d.-d). *Sony Cinema Line FX3 w/ XLR top handle* [Rental page]. ${READ} https://rentalhouseindy.com/sony-cinema-line-fx3-w-xlr-top-handle`;
const RH_WIRELESS = `Rental House by Roberts Camera. (n.d.-e). *Wireless video transmission systems* [Rental page]. ${READ} https://rentalhouseindy.com/rentals/camera-supports/wireless-video-transmission-systems`;
const LR_LENSCAP = `Lensrentals. (n.d.-a). *Lenscap*. ${READ} https://www.lensrentals.com/lenscap`;
const LR_FX3A = `Lensrentals. (n.d.-b). *Rent a Sony FX3 A (body only)*. ${READ} https://www.lensrentals.com/rent/sony-fx3-a-body-only`;
const LR_BOLT = `Lensrentals. (n.d.-c). *Rent a Teradek Bolt 6 LT 750 3G-SDI/HDMI kit (V-mount)*. ${READ} https://www.lensrentals.com/rent/teradek-bolt-6-lt-750-3g-sdi-hdmi-kit-v-mount`;
const SG = "https://support.sharegrid.com/en/articles/";
const SG_COMPARE = `ShareGrid. (2026b, January 29). *Compare ShareGrid damage waiver and insurance options*. ${SG}733937-compare-sharegrid-damage-waiver-and-insurance-options`;
const SG_COVERAGE = `ShareGrid. (2026f, June 2). *Coverage guidelines for owners on ShareGrid*. ${SG}733956-coverage-guidelines-for-owners-on-sharegrid`;
const SG_SHOOT_DAYS = `ShareGrid. (2026h, July 17). *How ShareGrid calculates shoot days and pricing (local pickup)*. ${SG}748910-how-sharegrid-calculates-shoot-days-and-pricing-local-pickup`;
const SG_BEST_MATCH = `ShareGrid. (2025a, August 13). *How the "Best Match" search filter ranks your listings*. ${SG}733951-how-the-best-match-search-filter-ranks-your-listings`;
const SG_MISSING = `ShareGrid. (2026e, February 20). *Missing rental items policy*. ${SG}6005236-missing-rental-items-policy`;
const SG_DAMAGE = `ShareGrid. (2025b, August 13). *Navigating equipment damage and missing items for ShareGrid owners*. ${SG}733935-navigating-equipment-damage-and-missing-items-for-sharegrid-owners`;
const SG_ID = `ShareGrid. (2026a, January 15). *Owner guide: Verifying renter ID at local pickup*. ${SG}733945-owner-guide-verifying-renter-id-at-local-pickup`;
const SG_GUARANTEE = `ShareGrid. (2026g, June 2). *ShareGrid owner guarantee*. ${SG}3282176-sharegrid-owner-guarantee`;
const SG_TIPS = `ShareGrid. (2026c, January 30). *Tips for rental owners on ShareGrid*. ${SG}733934-tips-for-rental-owners-on-sharegrid`;
const SG_FEES = `ShareGrid. (2025c, August 13). *Understanding ShareGrid fees*. ${SG}733957-understanding-sharegrid-fees`;
const SG_THEFT = `ShareGrid. (2026d, January 30). *Understanding ShareGrid's damage + theft option*. ${SG}733952-understanding-sharegrid-s-damage-theft-option`;
const KITSPLIT_2023 =
  "KitSplit. (2023, January 15). *KitSplit | Quality gear rentals. Guaranteed.* [Home page, archived by the Internet Archive]. https://web.archive.org/web/20230115110658/https://kitsplit.com/";
const KITSPLIT = `KitSplit. (n.d.). *KitSplit* [Home page]. ${READ} https://kitsplit.com/`;

// Gear prices, manufacturers and care guidance
const FOCUS_FX3A = `Focus Camera. (n.d.). *Sony Alpha FX3A 4K compact full-frame cinema digital camera body* [Product page]. ${READ} https://focuscamera.com/products/sony-ilmefx3a-cameras-mirrorless-cameras`;
const MPB_FX3 = `MPB. (n.d.). *Used Sony FX3* [Product page]. ${READ} https://www.mpb.com/en-us/product/sony-pxw-fx3`;
const TERADEK_4K = `Teradek. (n.d.-a). *Bolt 4K 12G-SDI 750 deluxe kit* [Product page]. ${READ} https://teradek.com/products/bolt-4k-750-kit`;
const TERADEK_B6 = `Teradek. (n.d.-b). *Bolt 6 LT set* [Product page]. ${READ} https://teradek.com/products/bolt-6-lt-set`;
const SONY_GUIDE = "https://helpguide.sony.net/ilc/2210/v1/en/contents/";
const SONY_SENSOR = `Sony. (n.d.-a). *Cleaning the image sensor (Sensor Cleaning)* [ILME-FX3 help guide]. ${READ} ${SONY_GUIDE}TP1000843984.html`;
const SONY_LENDING = `Sony. (n.d.-b). *Lending, transferring or discarding the camera and/or memory card to others (Notes on protecting private information)* [ILME-FX3 help guide]. ${READ} ${SONY_GUIDE}TP1001273512.html`;
const SONY_BATTERY = `Sony. (n.d.-c). *Notes on the battery pack and charging the battery* [ILME-FX3 help guide]. ${READ} ${SONY_GUIDE}TP1000844044.html`;
const SONY_CLEANING = `Sony. (n.d.-d). *On cleaning* [ILME-FX3 help guide]. ${READ} ${SONY_GUIDE}TP1000844047.html`;
const SONY_RESET = `Sony. (n.d.-e). *Setting Reset* [ILME-FX3 help guide]. ${READ} ${SONY_GUIDE}TP1000844002.html`;
const SONY_VERSION = `Sony. (n.d.-f). *Version* [ILME-FX3 help guide]. ${READ} ${SONY_GUIDE}TP1000887636.html`;
const TSA_LI = `Transportation Security Administration. (n.d.). *Lithium batteries with more than 100 watt hours*. ${READ} https://www.tsa.gov/travel/security-screening/whatcanibring/items/lithium-batteries-more-100-watt-hours`;
const CFR_173_22 = "Shipper's responsibility, 49 C.F.R. § 173.22 (2026). https://www.law.cornell.edu/cfr/text/49/173.22";
const CFR_173_185 = "Lithium cells and batteries, 49 C.F.R. § 173.185 (2026). https://www.law.cornell.edu/cfr/text/49/173.185";

// Labor, the market and wireless
const RATE_GUIDE = "The Rate Guide. (2026). *Camera operator day rate* [Updated August 2026]. https://therateguide.com/camera-operator-day-rate";
const IATSE_796 = `IATSE Local 796. (n.d.). *Rates card*. ${READ} https://www.iatse796.org/ratescard.html`;
const NFL_EFC = `NFL Football Operations. (n.d.). *Event frequency coordinators*. ${READ} https://operations.nfl.com/game-operations-logistics/game-day-assistants/event-frequency-coordinators`;
const CFR_74_600 = "Eligibility for license, 47 C.F.R. § 74.600 (2026). https://www.law.cornell.edu/cfr/text/47/74.600";

// Insurance
const III_INVENTORY = `Insurance Information Institute. (n.d.-a). *How to create a home inventory*. ${READ} https://www.iii.org/article/how-to-create-a-home-inventory`;
const III_HOME_BUSINESS = `Insurance Information Institute. (n.d.-b). *Insuring your home-based business*. ${READ} https://www.iii.org/article/insuring-your-home-based-business`;
const III_BASICS = `Insurance Information Institute. (n.d.-c). *Small business insurance basics*. ${READ} https://www.iii.org/article/small-business-insurance-basics`;
const III_INLAND_MARINE = `Insurance Information Institute. (n.d.-d). *Understanding inland marine insurance*. ${READ} https://www.iii.org/article/understanding-inland-marine-insurance`;
const IRMI_FLOATER = `International Risk Management Institute. (n.d.). *Equipment floater* [Glossary entry]. ${READ} https://www.irmi.com/term/insurance-definitions/equipment-floater`;
const IRMI_MAMECF =
  "Roberts, C. (2020, April 10). *The mobile agricultural machinery and equipment coverage form (MAMECF)*. International Risk Management Institute. https://www.irmi.com/articles/expert-commentary/the-mobile-agricultural-machinery-and-equipment-coverage-form-(mamecf)";
const ATHOS = `Athos Insurance. (n.d.). *Buy equipment insurance*. ${READ} https://www.athosinsurance.com/buy-equipment-insurance`;
const INSUREON = "Insureon. (2026, May 21). *Inland marine insurance cost*. https://www.insureon.com/small-business-insurance/inland-marine/cost";

// Taxes and records
const IRS_P946 = "Internal Revenue Service. (2026, April 30). *Publication 946 (2025), How to depreciate property*. https://www.irs.gov/publications/p946";
const IRS_P583 = "Internal Revenue Service. (2026, April 30). *Publication 583 (12/2024), Starting a business and keeping records*. https://www.irs.gov/publications/p583";
const IRS_P525 = "Internal Revenue Service. (2026, April 30). *Publication 525 (2025), Taxable and nontaxable income*. https://www.irs.gov/publications/p525";
const IRS_TANGIBLE = "Internal Revenue Service. (2026, August 4). *Tangible property final regulations*. https://www.irs.gov/businesses/small-businesses-self-employed/tangible-property-final-regulations";
const IRS_GIG = "Internal Revenue Service. (2026, July 9). *Gig economy tax center*. https://www.irs.gov/businesses/gig-economy-tax-center";
const IRS_SE = "Internal Revenue Service. (2026, June 27). *Self-employment tax (Social Security and Medicare taxes)*. https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes";
const IRS_1099 = "Internal Revenue Service. (2026, July 1). *Instructions for Forms 1099-MISC and 1099-NEC* (Rev. December 2026). https://www.irs.gov/instructions/i1099mec";
const SBA_TAXES = `U.S. Small Business Administration. (n.d.). *Pay taxes*. ${READ} https://www.sba.gov/business-guide/manage-your-business/pay-taxes`;

/** The marker every lesson needing a qualified reviewer opens with. */
const QR = (who: string) => `> **Before release:** needs a qualified reviewer (QR): ${who}.`;
/** The marker every lesson needing a practitioner opens with. */
const P = (what: string) => `> **Before release:** needs a practitioner: ${what}.`;

export const RENTING_OUT_PRODUCTION_GEAR_COURSE: AuthoredCourse = {
  title: "Renting Out Production Gear: the Owner-Operator's Business",
  description:
    "For camera operators, sound mixers and other crew who own production gear, or are thinking about buying it, and want to know whether renting it out makes sense. The course reads the market from published price lists and platform terms: rental houses, a peer-to-peer platform, and the owner-operator who brings a kit and charges a kit fee. It teaches how to choose what to own and what to keep renting, how to buy new or used and keep the records an insurer and the IRS ask for, how to price day, weekend and week rentals against the real market (and why a percentage-of-replacement-value rule can mislead), how damage waivers differ from insurance, how to protect gear against damage, theft and non-return, how to prep, check out, check in, clean, repair and retire it, and how to do break-even math honestly, with your own labor counted separately from what the gear earns. Depreciation, expensing and tax records are taught at a beginner's level, with a plain instruction to talk to a tax professional. No lesson promises income, and every rate is a dated example. Lessons on contracts, insurance and taxes are marked for a qualified reviewer. Part of The Crew Behind the Show series.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: The market
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-rents-out-production-gear",
      title: "1 · Who rents out production gear",
      section: "1 · The market",
      body: `**What this course is for.** It is for crew who own production gear, or are thinking about buying it, and want to know whether renting it out makes sense. By the end you should be able to decide whether to start, choose what to own and what to keep renting, buy sensibly, price against the real market, protect the gear, run check-out and check-in, maintain and retire it, and do the break-even math honestly, with your own labor counted separately from what the gear earns.

**What it is not.** It is not legal, tax or insurance advice. Lessons on contracts, insurance and taxes carry a box at the top that begins "Before release", and they wait for a qualified reviewer. The course does not promise that renting gear will make you money. Every price in it was read on October 21, 2026, and is an example with that date, not a rate to copy.

**Three kinds of business.** Gear reaches a production in three common ways.

1. **The rental house.** A regional rental house publishes a price list on its website. On October 21, 2026, it listed a Sony FX3 cinema camera with its XLR top handle at $125 for one day and $562.50 for one week. Its policy page sets the terms: a renter must be at least 21 and show a valid government ID and a credit card, and a reservation that includes items of $3,000 or more needs a certificate of insurance for rented equipment. Lensrentals, a rental house that publishes its prices by rental length, listed a Sony FX3 A body at $155 for 3 days and $222 for 7 days.
2. **The peer-to-peer platform.** On ShareGrid, owners list their own gear and other members rent it; its help pages call the listings "the marketplace". It charges owners a "Fixed 15% service fee". Lesson 12 works through what that fee leaves you.
3. **The owner-operator.** You are hired to operate, and the client pays you separately for bringing your own kit. One published rate guide calls this "kit rental" and gives a norm for it that lesson 13 tests against real price lists.

**Platforms come and go.** In January 2023, KitSplit's home page offered "The easiest way to rent camera gear" and told renters to "Rent from trusted local creatives in your community." On October 21, 2026, the same address read only: "Stay tuned! We will be back shortly." A business built on one platform depends on that platform staying open.

**Three words this course uses.** It uses its own short names for three arrangements, so the lessons can be exact:

- **Dry hire:** the gear goes out without you, through a rental platform or direct to a client.
- **Kit fee:** the gear goes out with you as its operator, and the client pays for the gear on top of your day rate.
- **Labor:** your day rate as an operator. Lesson 3 explains why the gear never gets credit for it.

:::reveal Name the three kinds of business through which gear reaches a production in this lesson. ||| The rental house, the peer-to-peer platform, and the owner-operator who brings a kit.

:::reveal What did KitSplit's home page say on October 21, 2026? ||| "Stay tuned! We will be back shortly."

:::reveal In this course, what is the difference between dry hire and a kit fee? ||| Dry hire sends the gear out without you; a kit fee is paid for the gear when you go with it as the operator, on top of your day rate.

## Sources
- ${RH_FX3} Locator: price lines "1 Day" and "1 Week".
- ${RH_POLICIES} Locator: rental requirements (age, ID, credit card) and the insurance requirement for items of $3,000 or more.
- ${LR_FX3A} Locator: rental price table, 3-day and 7-day rows.
- ${SG_BEST_MATCH} Locator: closing paragraph, "credibility in the marketplace".
- ${SG_FEES} Locator: "Rentals", owner fee.
- ${KITSPLIT_2023} Locator: the page's headline and the line under it.
- ${KITSPLIT} Locator: the whole page.
- ${RATE_GUIDE} Locator: the paragraph on kit rental.`,
    },
    {
      slug: "why-productions-rent",
      title: "2 · Why productions rent instead of buying",
      section: "1 · The market",
      recallContent: [
        {
          prompt: "What did one regional rental house charge for a Sony FX3 with XLR top handle on October 21, 2026?",
          answer: "$125 for one day and $562.50 for one week.",
        },
        {
          prompt: "In this course, what is a kit fee?",
          answer: "Payment for your gear when you go with it as its operator, on top of your day rate.",
        },
      ],
      body: `**Start from the production's side.** Everything a production avoids by renting, the owner takes on. So the first question is what a production avoids, and the published prices answer much of it.

**The arithmetic of one camera.** On October 21, 2026, a camera retailer listed the Sony FX3A body at $4,298. The same day, Lensrentals listed the FX3 A body at $155 for 3 days and $222 for 7 days. This course's own arithmetic:

- A 3-day rental costs $155 ÷ $4,298 = about 3.6 percent of the purchase price.
- Buying would equal the 3-day price about 28 times over ($4,298 ÷ $155 = 27.7).

A production that needs the camera for one shoot, or a few shoots a year, pays a few percent of its price each time and hands it back. That is the core reason to rent, and it is the core problem for an owner: the owner has to find those 28 rentals, or more once fees and upkeep are counted.

**A package, not a bare item.** Lensrentals lists exactly what arrives with the FX3 A body: the body, a body cap, a strap, an NP-FZ100 battery, a BC-ZD1 charger, a 3-foot Thunderbolt 4 USB-C cable and a USB charger. Its wireless video kit lists its parts too, and then says: "Batteries are not included and must be rented separately." A production that rents gets a written list of what will be in the case. An owner who rents gear out has to be just as exact.

**What renting costs a production besides the price.** Renting is not free of conditions. The regional rental house requires a certificate of insurance for reservations that include items of $3,000 or more, and from a first-time renter it may ask for a credit card hold of $1,000 (or the full value of the rental equipment, whichever is less). A production that rents often may weigh those costs against buying.

**What the owner takes on.** Teradek's page for its Bolt 4K 750 Deluxe Kit, listed at $6,890, showed every version "Sold Out" on October 21, 2026, and pointed buyers onward: "For the latest Bolt generation see Bolt 6." A production that rents simply rents the newer generation. The owner of the older one still owns it. This course's reading, from those pages: renting moves four things from the production to the owner, and later lessons take them one at a time.

1. The purchase price (section 3).
2. The idle days between bookings (lesson 5).
3. Upkeep, repair and the risk of damage or loss (sections 5 and 6).
4. The new model that makes yours the older one (lesson 6).

:::reveal By this course's arithmetic, about what share of the FX3A's retail price did a 3-day rental cost on October 21, 2026? ||| About 3.6 percent ($155 ÷ $4,298).

:::reveal What did Lensrentals' wireless video kit listing say about batteries? ||| "Batteries are not included and must be rented separately."

:::reveal Name two of the four things this lesson says renting moves from the production to the owner. ||| Any two of: the purchase price; the idle days between bookings; upkeep, repair and the risk of damage or loss; the newer model that makes yours the older one.

## Sources
- ${FOCUS_FX3A} Locator: price line.
- ${LR_FX3A} Locator: rental price table, 3-day and 7-day rows; "What's included" list.
- ${LR_BOLT} Locator: included-items list and the batteries note.
- ${RH_POLICIES} Locator: insurance requirement and the credit card authorization paragraph.
- ${TERADEK_4K} Locator: product variants and price; "Product Overview", first sentence.`,
    },
    {
      slug: "gear-income-and-your-labor",
      title: "3 · Gear income, kit fees and your labor",
      section: "1 · The market",
      recallContent: [
        {
          prompt: "Why does this course say a production rents a camera instead of buying it?",
          answer: "A rental costs a few percent of the purchase price each time (a 3-day FX3 A rental was about 3.6 percent of its retail price), so a production that needs it only now and then pays far less and hands it back.",
        },
        {
          prompt: "What did Teradek's Bolt 4K 750 Deluxe Kit page say to buyers on October 21, 2026?",
          answer: "\"For the latest Bolt generation see Bolt 6.\" Every version of the older kit showed \"Sold Out\".",
        },
      ],
      body: `**Three streams of money, kept apart.** An owner-operator can be paid three different ways, and only two of them pay for the gear.

| Stream | What the client buys | Does it pay for the gear? |
|---|---|---|
| Labor | Your day as an operator | No |
| Kit fee | Your gear, while you operate it | Yes, after upkeep |
| Dry hire | Your gear, with someone else operating it | Yes, after fees and upkeep |

**Why your labor is not gear income.** This is the course's own reasoning, and the rest of the course depends on it. If you would have earned your day rate running a client's camera, then the day rate is not something your camera earned. Only the money the gear brings in on top of your labor counts toward paying for the gear. An owner who adds the day rate to the gear's earnings will think the gear pays for itself when it may not.

**The tax forms split them too.** The IRS instructions for Forms 1099-MISC and 1099-NEC tell a business that pays for a machine and its operator together to split the payment: "If the machine rental is part of a contract that includes both the use of the machine and the operator, prorate the rental between the rent of the machine (report that in box 1) and the operator's charge (report that on Form 1099-NEC in box 1a)." The example the IRS gives is a bulldozer, but the rule is about any machine rented with its operator. Section 7 comes back to the forms.

**What labor pays, as dated examples.** Two published figures, each with its date:

- IATSE Local 796's rates card lists a handheld camera operator at a daily minimum of $550.70, "Beginning 4/1/21", for a 10-hour day of 9 hours at straight time and 1 hour of overtime. A hard camera operator's daily minimum is $521.72.
- The Rate Guide, updated August 2026, reports that "ProductionHub's 2025 data puts the median freelance camera operator day rate at $750."

These are examples, not your rate. They show the size of the labor number next to the gear numbers in later lessons, and why it must be kept out of them.

**What this course could not find.** The Local 796 rates card lists day rates and has no line about equipment, kit or box rental. This course found no published rule for how a union call pays a member for the use of their own kit, so it gives none. If you work union calls, ask your local how its contracts treat a member's own gear before you price a kit fee. Lesson 28 returns to this.

:::reveal Which of the three streams does not count toward paying for the gear, and why? ||| Labor. You could have earned your day rate on a client's gear, so the day rate is not something your gear earned.

:::reveal What do the IRS instructions tell a payer to do when a machine is rented with its operator? ||| Prorate the payment: the machine's rent goes in box 1 of Form 1099-MISC and the operator's charge on Form 1099-NEC in box 1a.

:::reveal What does the Local 796 rates card say about a member's own kit? ||| Nothing. It lists day rates and has no line about equipment, kit or box rental.

## Sources
- ${IRS_1099} Locator: "Specific Instructions for Form 1099-MISC", "Box 1. Rents", the machine rentals paragraph.
- ${IATSE_796} Locator: the "Beginning 4/1/21" rate table, Handheld Camera Operator and Hard Camera Operator rows, and the 9 plus 1 note.
- ${RATE_GUIDE} Locator: the median day rate paragraph.`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · The market",
      section: "1 · The market",
      body: "A graded check on who rents out production gear, why productions rent instead of buying, and why gear income, kit fees and your own labor are kept apart. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Who is this course written for?", options: ["Crew who own gear or are thinking of buying it", "Rental house managers setting their day rates", "Producers choosing which camera to rent next", "Insurers writing policies for camera owners"], correctIndex: 0, explanation: "Lesson 1: the course is for crew who own production gear, or are thinking about buying it, and want to know whether renting it out makes sense. It is not written for rental house managers, producers or insurers.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What does the course say about whether renting gear will make you money?", options: ["It promises a profit inside the first year", "It does not promise that renting will pay", "It guarantees income once the gear is insured", "It promises payback after about 28 rentals"], correctIndex: 1, explanation: "\"The course does not promise that renting gear will make you money.\" It makes no profit, income or payback promise.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "On what date were the prices in this course read?", options: ["January 15, 2023", "April 1, 2021", "October 21, 2026", "August 31, 2026"], correctIndex: 2, explanation: "\"Every price in it was read on October 21, 2026\". January 2023 is the date of KitSplit's archived home page, and April 1, 2021 is when the union rates card's figures began.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "How does lesson 1 tell you to treat a price quoted in this course?", options: ["As the minimum a renter must legally pay", "As a rate every platform has to charge", "As a national average across all houses", "As a dated example, not a rate to copy"], correctIndex: 3, explanation: "Each price \"is an example with that date, not a rate to copy.\" The course never presents a price as a legal minimum, a required platform rate or a national average.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "Which lessons carry a box at the top that begins \"Before release\"?", options: ["Lessons on contracts, insurance and taxes", "Lessons on cameras, lenses and gimbals", "Lessons on listings, photos and reviews", "Lessons on batteries, cleaning and firmware"], correctIndex: 0, explanation: "\"Lessons on contracts, insurance and taxes carry a box at the top that begins 'Before release', and they wait for a qualified reviewer.\"", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What does a \"Before release\" box on a lesson tell you?", options: ["The lesson is optional for experienced owners", "The lesson waits for a qualified reviewer", "The lesson holds its section's graded quiz", "The lesson was written by a rental house"], correctIndex: 1, explanation: "Lessons with the box \"wait for a qualified reviewer.\" The box does not mark optional reading, a quiz, or a rental house as author.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What did the regional rental house charge for a Sony FX3 with XLR top handle?", options: ["$155 for 3 days, $222 for 7 days", "$75 a day and $335 for a week", "$125 a day and $562.50 for a week", "$300 a day and $1,200 for a week"], correctIndex: 2, explanation: "On October 21, 2026, the regional house listed the FX3 with XLR top handle at $125 for one day and $562.50 for one week. $155 and $222 are Lensrentals' FX3 A prices; $75 and $300 a day are other cameras.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "How old must a renter be at the regional rental house?", options: ["At least 18 years old", "At least 25 years old", "At least 30 years old", "At least 21 years old"], correctIndex: 3, explanation: "Its policy page says \"a renter must be at least 21\".", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "Besides meeting the age rule, what must a renter show at the regional rental house?", options: ["A valid government ID and a credit card", "A business license and a cash deposit", "A union card and a producer's letter", "Two references and a recent utility bill"], correctIndex: 0, explanation: "A renter must \"show a valid government ID and a credit card\". The lesson names no license, union card or references.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "When does a reservation at the regional rental house need a certificate of insurance for rented equipment?", options: ["When the rental lasts longer than a week", "When it includes items of $3,000 or more", "When the renter is younger than 25 years", "When the gear will leave the renter's state"], correctIndex: 1, explanation: "\"a reservation that includes items of $3,000 or more needs a certificate of insurance for rented equipment.\" Length, age and travel are not the trigger in the lesson.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "How does lesson 1 describe the way Lensrentals publishes its prices?", options: ["By the hour, with a two-hour minimum", "Only as a quote after a phone call", "By rental length, such as 3 or 7 days", "As a share of each item's full value"], correctIndex: 2, explanation: "Lensrentals is \"a rental house that publishes its prices by rental length\": the FX3 A body was $155 for 3 days and $222 for 7 days.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What did Lensrentals list for the FX3 A body on October 21, 2026?", options: ["$125 for 3 days, $562.50 for 7 days", "$142 for 3 days and $203 for 7 days", "$222 for 3 days and $300 for 7 days", "$155 for 3 days and $222 for 7 days"], correctIndex: 3, explanation: "The FX3 A body was $155 for 3 days and $222 for 7 days. $142 and $203 are the Bolt 6 LT kit's prices, and $125 and $562.50 are the regional house's FX3 day and week prices.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "On ShareGrid, who lists the gear that members rent?", options: ["Owners, who list their own gear", "ShareGrid, from its own warehouse", "Rental houses, from their own stock", "Makers, who list their demo units"], correctIndex: 0, explanation: "\"On ShareGrid, owners list their own gear and other members rent it\". That is what makes it a peer-to-peer platform.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What service fee does ShareGrid charge owners?", options: ["A fixed 10% service fee", "A fixed 15% service fee", "A fixed 20% service fee", "A flat $25 per booking"], correctIndex: 1, explanation: "ShareGrid \"charges owners a 'Fixed 15% service fee'\". Lesson 12 works through what that leaves an owner.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What do ShareGrid's help pages call its listings?", options: ["The gear library", "The rental catalog", "The marketplace", "The kit exchange"], correctIndex: 2, explanation: "Its help pages call the listings \"the marketplace\".", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "How is an owner-operator paid for bringing their own kit?", options: ["The kit is folded into the day rate", "The platform pays a share of its fee", "The rental house pays a finder's fee", "The client pays for the kit separately"], correctIndex: 3, explanation: "\"You are hired to operate, and the client pays you separately for bringing your own kit.\"", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What does one published rate guide call an operator's payment for bringing their own gear?", options: ["Kit rental", "Box hire", "Gear lease", "Crew fee"], correctIndex: 0, explanation: "\"One published rate guide calls this 'kit rental'\", and lesson 13 tests its norm against real price lists.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What did KitSplit's home page offer in January 2023?", options: ["The largest used camera store online", "The easiest way to rent camera gear", "Insurance for owners who rent gear", "A hiring hall for freelance crews"], correctIndex: 1, explanation: "In January 2023 KitSplit's home page offered \"The easiest way to rent camera gear\" and told renters to \"Rent from trusted local creatives in your community.\"", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What lesson does the course draw from KitSplit's home page in 2026?", options: ["Platform fees always rise after a sale", "List the same price on every platform", "A business on one platform needs it open", "Platforms close when rental houses win"], correctIndex: 2, explanation: "On October 21, 2026, the page read only \"Stay tuned! We will be back shortly.\" The lesson: \"A business built on one platform depends on that platform staying open.\"", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "In this course's words, what is dry hire?", options: ["You operate the gear and are paid a kit fee", "You rent a house's gear for your own shoot", "You are paid for labor on a client's gear", "The gear goes out without you as operator"], correctIndex: 3, explanation: "\"Dry hire: the gear goes out without you, through a rental platform or direct to a client.\" Going out with it as operator is a kit fee.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "In this course's words, what is a kit fee?", options: ["Pay for your gear while you operate it", "Pay for your day as the camera operator", "A platform's charge for listing the gear", "A rental house's fee for cleaning a kit"], correctIndex: 0, explanation: "\"Kit fee: the gear goes out with you as its operator, and the client pays for the gear on top of your day rate.\" Your day rate is labor.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "Which of the course's three words means your day rate as an operator?", options: ["Kit fee", "Labor", "Dry hire", "Box rent"], correctIndex: 1, explanation: "\"Labor: your day rate as an operator.\" A kit fee pays for the gear while you operate it, and dry hire sends the gear out without you.", sourceLessonSlug: "who-rents-out-production-gear" },

          { prompt: "Lesson 2 starts from the production's side. What does it say the owner takes on?", options: ["Only the cost of insuring the gear", "Only the renter's credit card hold", "Everything a production avoids by renting", "Half of the production's rental costs"], correctIndex: 2, explanation: "\"Everything a production avoids by renting, the owner takes on.\" So the first question is what a production avoids.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "What did a camera retailer list as the price of the Sony FX3A body?", options: ["$3,549", "$6,890", "$2,390", "$4,298"], correctIndex: 3, explanation: "On October 21, 2026, a camera retailer listed the Sony FX3A body at $4,298. $3,549 is the low end of MPB's used FX3 range, $6,890 the Bolt 4K kit and $2,390 the Bolt 6 LT set.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "By the course's arithmetic, what share of the FX3A's price did a 3-day rental cost?", options: ["About 3.6 percent", "About 10 percent", "About 15 percent", "About 1.5 percent"], correctIndex: 0, explanation: "\"A 3-day rental costs $155 ÷ $4,298 = about 3.6 percent of the purchase price.\" Ten to fifteen percent is the rate guide's kit norm, not this arithmetic.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "About how many 3-day rentals of the FX3 A equal its purchase price?", options: ["About 17", "About 28", "About 12", "About 45"], correctIndex: 1, explanation: "\"Buying would equal the 3-day price about 28 times over ($4,298 ÷ $155 = 27.7).\" About 17 and about 12 are the Bolt 6 LT's 3-day and weekly counts.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "What is $4,298 divided by $155, as lesson 2 works it?", options: ["16.8", "11.8", "27.7", "35.1"], correctIndex: 2, explanation: "$4,298 ÷ $155 = 27.7, so about 28 three-day rentals equal the purchase price. 16.8 and 11.8 come from the Bolt 6 LT example in lesson 7.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Lesson 2 calls the cheapness of renting the core problem for an owner. Why?", options: ["Productions refuse to pay rental deposits", "Rental houses buy every camera at a discount", "Platforms set the price an owner may charge", "The owner has to find those 28 rentals or more"], correctIndex: 3, explanation: "\"the owner has to find those 28 rentals, or more once fees and upkeep are counted.\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Which battery and charger come with Lensrentals' FX3 A body rental?", options: ["An NP-FZ100 battery and a BC-ZD1 charger", "A V-mount battery and a dual V-mount charger", "Two NP-F970 batteries and a travel charger", "No battery; it must be rented separately"], correctIndex: 0, explanation: "Lensrentals lists \"an NP-FZ100 battery, a BC-ZD1 charger\" among what arrives with the FX3 A body. The note about renting batteries separately belongs to the wireless video kit.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Which cable does Lensrentals list in the FX3 A box?", options: ["A 6-foot HDMI to micro HDMI cable", "A 3-foot Thunderbolt 4 USB-C cable", "A 10-foot SDI cable with BNC ends", "A 3-foot D-Tap camera power cable"], correctIndex: 1, explanation: "The list includes \"a 3-foot Thunderbolt 4 USB-C cable\", along with the body, body cap, strap, battery, charger and a USB charger.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "What does Lensrentals' wireless video kit listing say about batteries?", options: ["One battery is included per transmitter", "Batteries ship charged to half capacity", "They are not included and are rented apart", "Batteries come only with the 7-day rental"], correctIndex: 2, explanation: "The listing says: \"Batteries are not included and must be rented separately.\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "What does lesson 2 conclude from rental houses' exact lists of what is in the case?", options: ["Owners should never list accessories", "Productions should bring their own cables", "Package lists matter only on long rentals", "An owner must be just as exact about it"], correctIndex: 3, explanation: "\"A production that rents gets a written list of what will be in the case. An owner who rents gear out has to be just as exact.\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "How much may the regional rental house hold on a first-time renter's credit card?", options: ["Up to $1,000, or the gear's value if less", "Up to $3,000, or the gear's value if more", "The full replacement value of every item", "A flat $500 on every single reservation"], correctIndex: 0, explanation: "From a first-time renter it may ask for \"a credit card hold of $1,000 (or the full value of the rental equipment, whichever is less).\" It does not hold $3,000, the full replacement value, or a flat $500.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Why does lesson 2 say renting is \"not free of conditions\" for a production?", options: ["Houses require a year-long contract", "Insurance and card holds can be required", "Renters must also buy one item a year", "Rented gear may be used only in a studio"], correctIndex: 1, explanation: "The regional house requires a certificate of insurance for items of $3,000 or more and may hold up to $1,000 on a card. \"A production that rents often may weigh those costs against buying.\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "What price did Teradek list for its Bolt 4K 750 Deluxe Kit?", options: ["$2,390", "$4,298", "$6,890", "$1,200"], correctIndex: 2, explanation: "Teradek listed the Bolt 4K 750 Deluxe Kit at $6,890, with every version \"Sold Out\". $2,390 is the Bolt 6 LT set.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Where did Teradek's Bolt 4K Deluxe Kit page point buyers on October 21, 2026?", options: ["To a used-gear dealer", "To its rental partners", "To the Bolt 4K 1500 kit", "To the Bolt 6 generation"], correctIndex: 3, explanation: "The page said: \"For the latest Bolt generation see Bolt 6.\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "When a newer generation ships, what happens to a production that rents, according to lesson 2?", options: ["It simply rents the newer generation", "It must keep renting the older model", "It pays a fee to switch to the new one", "It buys the older model at a discount"], correctIndex: 0, explanation: "\"A production that rents simply rents the newer generation. The owner of the older one still owns it.\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Which of these is one of the four things lesson 2 says renting moves from the production to the owner?", options: ["The renter's certificate of insurance", "The idle days between bookings", "The renter's credit card hold", "The rental house's cleaning fees"], correctIndex: 1, explanation: "The four are the purchase price, the idle days between bookings, upkeep with the risk of damage or loss, and the new model that makes yours the older one.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Which of the four things that move to the owner does lesson 6 take up?", options: ["The purchase price of the gear", "The idle days between bookings", "The newer model replacing yours", "The risk of damage or of loss"], correctIndex: 2, explanation: "Lesson 2's list: the purchase price (section 3), idle days (lesson 5), upkeep, repair and risk (sections 5 and 6), and \"The new model that makes yours the older one (lesson 6).\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Where does lesson 2 say the idle days between bookings are taken up?", options: ["Section 3", "Section 7", "Lesson 13", "Lesson 5"], correctIndex: 3, explanation: "\"The idle days between bookings (lesson 5).\" Section 3 takes up the purchase price.", sourceLessonSlug: "why-productions-rent" },

          { prompt: "Of the three streams of money in lesson 3, which pay for the gear?", options: ["Kit fee and dry hire", "Labor and dry hire", "Labor and kit fee", "Labor alone"], correctIndex: 0, explanation: "Only two of the three pay for the gear: the kit fee and dry hire. Labor does not.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "Which stream in lesson 3 does not pay for the gear?", options: ["Kit fee", "Labor", "Dry hire", "Rental"], correctIndex: 1, explanation: "Labor (your day as an operator) does not pay for the gear. Kit fees do, and dry hire does after fees and upkeep.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "With what condition does dry hire pay for the gear, according to lesson 3's table?", options: ["Only when you also operate it", "Only on a union production", "After fees and upkeep are paid", "Only on rentals of a week or more"], correctIndex: 2, explanation: "The table says dry hire pays for the gear \"Yes, after fees and upkeep\". Dry hire means someone else operates it.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What does a client buy when it pays you a kit fee?", options: ["Your day as an operator", "Your gear, with someone else on it", "A share of a platform's service fee", "Your gear, while you operate it"], correctIndex: 3, explanation: "The table: a kit fee buys \"Your gear, while you operate it\". Your day is labor, and gear run by someone else is dry hire.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "Why does lesson 3 say your day rate is not something your gear earned?", options: ["You could earn it on a client's gear", "The IRS taxes day rates at a lower rate", "Union rules forbid adding gear to pay", "Platforms take a fee from every day rate"], correctIndex: 0, explanation: "\"If you would have earned your day rate running a client's camera, then the day rate is not something your camera earned.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What mistake does lesson 3 warn an owner against making with the day rate?", options: ["Charging a day rate under the union scale", "Adding it to the gear's earnings", "Billing it on a different invoice", "Asking for it before the job starts"], correctIndex: 1, explanation: "\"An owner who adds the day rate to the gear's earnings will think the gear pays for itself when it may not.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What counts toward paying for the gear, in lesson 3's reasoning?", options: ["The full day rate on every gear job", "Half of the day rate on gear jobs", "Money the gear brings beyond your labor", "Only money from union calls with kit"], correctIndex: 2, explanation: "\"Only the money the gear brings in on top of your labor counts toward paying for the gear.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What do the IRS 1099 instructions tell a payer to do when a machine is rented with its operator?", options: ["Report the whole payment as wages", "Report the whole payment as rent", "Report nothing under $5,000 a year", "Prorate it between rent and operator"], correctIndex: 3, explanation: "\"prorate the rental between the rent of the machine (report that in box 1) and the operator's charge (report that on Form 1099-NEC in box 1a).\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "Where do the IRS instructions say the machine's rent is reported?", options: ["In box 1 of Form 1099-MISC", "In box 1a of Form 1099-NEC", "In box 3 of Form 1099-MISC", "In box 7 of Form 1099-NEC"], correctIndex: 0, explanation: "The rent of the machine goes in box 1 (the \"Box 1. Rents\" instruction of Form 1099-MISC); the operator's charge goes on Form 1099-NEC in box 1a.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "Where do the IRS instructions say the operator's charge is reported?", options: ["Form 1099-MISC, box 1", "Form 1099-NEC, box 1a", "Form 1099-K, box 1a", "Form W-2, box 1 only"], correctIndex: 1, explanation: "The operator's charge is reported \"on Form 1099-NEC in box 1a\". Box 1 of Form 1099-MISC holds the machine's rent.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What machine does the IRS use as its example of a rental with an operator?", options: ["A camera", "A crane", "A bulldozer", "A forklift"], correctIndex: 2, explanation: "\"The example the IRS gives is a bulldozer, but the rule is about any machine rented with its operator.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What daily minimum does IATSE Local 796's rates card list for a handheld camera operator?", options: ["$521.72", "$750.00", "$625.50", "$550.70"], correctIndex: 3, explanation: "Handheld camera operator: $550.70 a day. $521.72 is the hard camera operator's minimum, and $750 is the rate guide's median freelance figure.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "From what date do the Local 796 rates quoted in lesson 3 apply?", options: ["April 1, 2021", "August 1, 2026", "January 1, 2025", "October 21, 2026"], correctIndex: 0, explanation: "The card reads \"Beginning 4/1/21\": April 1, 2021. October 21, 2026 is when the course read it.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "How is the 10-hour day on the Local 796 card made up?", options: ["10 hours, all at straight time", "9 straight hours plus 1 overtime", "8 straight hours plus 2 overtime", "10 hours, all at the overtime rate"], correctIndex: 1, explanation: "The rates are \"for a 10-hour day of 9 hours at straight time and 1 hour of overtime.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What daily minimum does the Local 796 card give a hard camera operator?", options: ["$550.70", "$498.10", "$521.72", "$480.00"], correctIndex: 2, explanation: "\"A hard camera operator's daily minimum is $521.72.\" $550.70 is the handheld camera operator's minimum.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What median freelance camera operator day rate does The Rate Guide report?", options: ["$550", "$900", "$625", "$750"], correctIndex: 3, explanation: "The Rate Guide reports that \"ProductionHub's 2025 data puts the median freelance camera operator day rate at $750.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "Whose data does The Rate Guide credit for its median day rate figure?", options: ["ProductionHub's 2025 data", "The 2025 federal wage survey", "IATSE Local 796's rates card", "ShareGrid's 2025 owner report"], correctIndex: 0, explanation: "The guide says \"ProductionHub's 2025 data puts the median freelance camera operator day rate at $750.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "Why does lesson 3 show published labor rates at all?", options: ["To set the rate you should charge", "To show the size of labor kept out", "To prove union rates beat freelance", "To price kit fees as a share of labor"], correctIndex: 1, explanation: "\"These are examples, not your rate. They show the size of the labor number next to the gear numbers in later lessons, and why it must be kept out of them.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What does the Local 796 rates card say about a member's own equipment?", options: ["It pays 10 percent of the day rate", "It pays a flat fee per piece of gear", "It has no line about kit or box rental", "It forbids members to bring own gear"], correctIndex: 2, explanation: "\"The Local 796 rates card lists day rates and has no line about equipment, kit or box rental.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What does lesson 3 tell a union crew member to do before pricing a kit fee?", options: ["Charge 10 to 15 percent of the gear's value", "Use the rental house's day rate for the kit", "Add the kit fee to the union day rate line", "Ask the local how its contracts treat gear"], correctIndex: 3, explanation: "The course found no published rule, so it gives none: \"ask your local how its contracts treat a member's own gear before you price a kit fee.\"", sourceLessonSlug: "gear-income-and-your-labor" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: Choosing what to own
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "start-from-demand",
      title: "4 · Start from demand, not a wish list",
      section: "2 · Choosing what to own",
      recallContent: [
        {
          prompt: "What did IATSE Local 796's rates card list as a handheld camera operator's daily minimum, and from when?",
          answer: "$550.70, beginning April 1, 2021, for a 10-hour day (9 hours straight time and 1 hour overtime).",
        },
        {
          prompt: "Why must labor be kept out of the gear's numbers?",
          answer: "You could earn your day rate on a client's gear, so only the money the gear brings in on top of your labor pays for the gear.",
        },
      ],
      body: `**The wrong first question.** "What would I love to own?" is a buyer's question. A rental owner's first question is "What do productions near me already rent, how often, and from whom?" The gear you buy has to win bookings away from whoever supplies it now.

**Read the local catalog.** A regional rental house's price lists show what its market already supplies. On October 21, 2026, one regional house listed:

| Page | Items listed | Day and week prices |
|---|---|---|
| Cinema cameras | 5 | From $75 a day ($335 a week) for a Sony FX30 to $300 a day ($1,200 a week) for a RED Komodo-X package |
| Gimbals, stabilizers and sliders | 1 | DJI RS4 Pro Combo Kit, $75 a day, $250 a week |
| Wireless video transmission | 2 | A Hollyland Pyro 7-inch kit at $75 a day ($325 a week), a Paralinx Tomahawk 2 kit at $150 a day ($675 a week) |

This course reads three things from a table like that. These are inferences, so the reasoning is shown:

1. **What is already covered.** Five cinema cameras on one page means a renter there already has a choice. Another FX3 in that market competes with the house's $125-a-day FX3.
2. **What may be thin.** One gimbal on the page may mean low demand, or it may mean a gap. The page cannot tell you which. Only renters can.
3. **The price you must meet.** Whatever you list has to make sense next to the house's price for the same item.

**Ask the people who rent.** The demand that matters is a renter who says they would book your item, at a price, for a kind of job. Before buying, this course suggests three steps (this is advice, not a finding from a source):

1. Name at least three productions, crews or companies near you who rent the item now, and ask what they rent, how often and from whom.
2. Rent the exact item yourself for a paid job, so you learn what goes wrong with it and what renters ask about.
3. Write down your kill rule before you buy: the number of paid days in the first six months below which you will sell.

**What a platform rewards.** ShareGrid's search ranking favors listings with "Fair Market Pricing", "Positive Reviews", fast responses, a high acceptance rate, and the "Number and Variety of Listings". A single item at a high price, with no reviews yet, starts at the bottom of that list. ShareGrid also says it blends in "new owners and listings to give everyone a fair chance to earn credibility in the marketplace."

:::reveal What is a rental owner's first question, according to this lesson? ||| What productions nearby already rent, how often, and from whom.

:::reveal How many gimbals did the regional house's gimbal page list, and what can that number not tell you? ||| One. It cannot tell you whether that means low demand or a gap; only renters can.

:::reveal Name three factors ShareGrid says its Best Match ranking rewards. ||| Any three of: Elite Status, fair market pricing, positive reviews, fast response times and a high response rate, up-to-date availability and a high acceptance rate, and the number and variety of listings.

## Sources
- ${RH_CINEMA} Locator: the five camera listings and their "1 Day" and "1 Week" prices.
- ${RH_GIMBALS} Locator: the one listing and its prices.
- ${RH_WIRELESS} Locator: the two listings and their prices.
- ${RH_FX3} Locator: price lines.
- ${SG_BEST_MATCH} Locator: the list of ranking factors and the closing paragraph on new owners.`,
    },
    {
      slug: "utilization",
      title: "5 · Utilization: billed days against calendar days",
      section: "2 · Choosing what to own",
      recallContent: [
        {
          prompt: "Name the three steps this course suggests before buying an item to rent out.",
          answer: "Ask at least three productions or crews who rent it now what they rent, how often and from whom; rent the exact item for a paid job yourself; write down your kill rule before buying.",
        },
        {
          prompt: "What price did the regional house's gimbal page show for its DJI RS4 Pro Combo Kit?",
          answer: "$75 a day and $250 a week.",
        },
      ],
      body: `**The number that decides it.** This course uses one word for how much your gear works: **utilization**, the share of the days it could be earning on which a client is actually paying for it. It is the course's own definition, and it is measured in billed days, not in the days the gear is away from you. The two are not the same, because rental pricing gives renters days for free.

**How one platform counts days.** ShareGrid's rules for local pickup say:

- "Shoot days that fall on Saturday and Sunday count as 1 day".
- "If you have the gear for 6 to 7 days, you're only charged for 3 shoot days."
- "If you rent gear for 22 to 31 days, you'll only be charged for 10 shoot days."
- Pickup is "after 2:00 PM on the start date" and return "by 12:00 PM (noon) on the return date", and "pickup and return days do not count as shoot days." ShareGrid says those days "are intended for checking, prepping, and transporting gear, not filming." Its own example is a "Two-day shoot over four calendar days" charged as two shoot days.

**How one rental house counts them.** The regional rental house prices most items for a weekend (a Friday start and a Monday end) at "1.5 times the day rate". Weekend reservations "can be picked up as early as Thursday at 3:00pm" and "must be returned no later than Tuesday at 10:00am."

**The arithmetic, shown.** This is the course's own working from those rules:

- A weekend at the regional house can keep an item out from Thursday at 3 p.m. to Tuesday at 10 a.m., nearly five calendar days, and bill one and a half days.
- On ShareGrid, a full week out bills 3 days. A full month out bills 10.
- So an item that is "out" every day of a month on one long rental may bill only 10 days.

**Why it matters before buying.** Suppose, as an assumption only, you would rent an item at $100 a billed day. One booking a week, each a weekend, might bill about 52 weekend-days a year on ShareGrid's rule (one billed day each). The same item booked by the week, every week, would bill about 156 days (52 × 3). Your calendar would look full in both cases. Your income would differ by three times. When you estimate utilization, count billed days, and count them by the rules of whoever bills the renter.

**One kit, one place.** A rented item cannot also be on your own job. If you plan to use the gear yourself on weekends, the weekend bookings that rental pricing favors are the ones you cannot take.

:::reveal How does this course define utilization? ||| The share of the days your gear could be earning on which a client is actually paying for it, measured in billed days.

:::reveal Under ShareGrid's local-pickup rules, how many shoot days is a renter charged for keeping gear 6 or 7 days? ||| 3 shoot days.

:::reveal At the regional house, how long can a weekend rental keep an item out, and how many days does it bill? ||| From Thursday at 3 p.m. to Tuesday at 10 a.m., nearly five calendar days, billed at 1.5 times the day rate.

## Sources
- ${SG_SHOOT_DAYS} Locator: the weekend, weekly and monthly rules, the pickup and return times, and the "Two-day shoot over four calendar days" example.
- ${RH_POLICIES} Locator: weekend pricing paragraph and the pickup and return times.`,
    },
    {
      slug: "churn-and-wear",
      title: "6 · Technology churn and what wears out",
      section: "2 · Choosing what to own",
      recallContent: [
        {
          prompt: "Under ShareGrid's local-pickup rules, how do Saturday and Sunday count?",
          answer: "As one shoot day.",
        },
        {
          prompt: "Why does this course measure utilization in billed days rather than calendar days?",
          answer: "Rental pricing gives renters days for free (weekends count as one day, a week bills 3 days, a month bills 10), so gear can be out far more days than it is billed.",
        },
      ],
      body: `**Two clocks run on every item.** One is wear: parts that get used up. The other is churn: newer models that make yours the older one. A rental owner pays for both, and neither shows on the purchase receipt.

**Churn, from the makers' own pages.** On October 21, 2026:

- Teradek's Bolt 4K 750 Deluxe Kit page listed both versions at $6,890, both "Sold Out", and said: "For the latest Bolt generation see Bolt 6." Teradek's Bolt 6 LT set was listed at $2,390.
- Lensrentals rented the Sony FX3 A body, while MPB, a used-gear dealer, listed used Sony FX3 bodies: its page counted 11, from $3,549 to $3,929.

This course reads those pages this way, as inference: cameras and wireless links are replaced by newer models, the newer model appears on rental price lists beside yours, and renters can choose it. The Bolt pages do not compare the two products, so this course does not either. It only notes that the maker sends buyers of the older line to the newer one.

**Wear, from the manual.** Sony's help guide for the FX3 says of its battery: "The battery life is limited. If you use the same battery repeatedly, or use the same battery for a long period, the battery capacity decreases gradually." It adds that when "the available time of the battery is shortened significantly, it is probably time to replace the battery pack with a new one." A rental owner should treat batteries as consumables: bought, used up and replaced on a schedule.

**Upkeep you can see in a price list.** The regional rental house's policies show what comes back from renters. It charges "a $20 cleaning fee per item" for equipment returned with offensive odors or a dirty exterior, may charge up to 25 percent of the rental fee for "offensively dirty" gear, and charges "$25 per sensor that is returned needing cleaning." A house does not write fees for things that never happen.

**Software is upkeep too.** Sony's help guide has a Version screen that "Displays the version of this product's software" and adds that it "Also displays the version of the lens if a lens compatible with firmware updates is attached." So a camera and its lenses can each need updates, and checking them is part of preparing a rental (lesson 19).

**What this means for choosing.** This is the course's reasoning: favor items whose usefulness lasts longer than their model year, and budget from day one for the parts that wear out. Before you buy anything that renters will judge against the newest model, check how many of the older model are for sale used, and at what price.

:::reveal What did Teradek's Bolt 4K 750 Deluxe Kit page tell buyers on October 21, 2026? ||| "For the latest Bolt generation see Bolt 6." Both versions were listed at $6,890 and "Sold Out".

:::reveal What does Sony's help guide say happens to a battery's capacity with repeated or long use? ||| It "decreases gradually", and when the available time is shortened significantly it is probably time to replace the pack.

:::reveal What did the regional rental house charge per sensor returned needing cleaning? ||| $25 per sensor.

## Sources
- ${TERADEK_4K} Locator: product variants and price; "Product Overview", first sentence.
- ${TERADEK_B6} Locator: price line.
- ${LR_FX3A} Locator: page title and rental price table.
- ${MPB_FX3} Locator: results header (count and price range).
- ${SONY_BATTERY} Locator: "On battery life".
- ${RH_POLICIES} Locator: cleaning fees paragraph.
- ${SONY_VERSION} Locator: the first two sentences.`,
    },
    {
      slug: "what-to-keep-renting",
      title: "7 · What to keep renting",
      section: "2 · Choosing what to own",
      recallContent: [
        {
          prompt: "How many used FX3 bodies did MPB's page count on October 21, 2026, and at what price range?",
          answer: "11, from $3,549 to $3,929.",
        },
        {
          prompt: "How does this course say a rental owner should treat batteries?",
          answer: "As consumables: bought, used up and replaced on a schedule, because Sony says capacity decreases gradually with use.",
        },
      ],
      body: `**Owning is not the only way to have gear.** An owner-operator can rent items for a job and charge the client for them, the way a production does. The skill is knowing which items to own and which to keep renting.

**Rent-or-buy arithmetic for one item.** On October 21, 2026, Teradek listed its Bolt 6 LT wireless video set at $2,390. Lensrentals listed a Bolt 6 LT 750 kit at $142 for 3 days and $203 for 7 days. This course's arithmetic:

- $2,390 ÷ $142 = 16.8, so about 17 three-day rentals cost as much as buying.
- $2,390 ÷ $203 = 11.8, so about 12 weekly rentals cost as much as buying.

If you would need the link fewer times a year than that, renting it per job costs less than owning it, before you even count upkeep, insurance and the newer model (lesson 6). If you would need it more often, owning may cost less, but only if the bookings that need it are real (lesson 4).

**Gear you cannot own your way into.** Some equipment is controlled by someone other than its owner. Two federal and league rules show it:

- Under 47 C.F.R. § 74.600, a license for a TV broadcast auxiliary station "will be issued only to a television broadcast station, a Class A TV station, a television broadcast network-entity, a low power TV station, or a TV translator station." This course's reading: an individual crew member is none of those, so the licensed wireless links a network uses come under that network's authority, not the operator's.
- At NFL events, "uncoordinated devices are prohibited", and "In some instances, operators not following the policies may have his or her working credential revoked."

So on a major sports show, the wireless path is set by the show. That is the case the planned CREW-04 course on the cinema-look camera rig makes for its own build: own the camera side, and rent or partner for licensed broadcast wireless. Buying broadcast wireless without a client who requires it from you puts your largest purchase where you have the least control.

**A short test for each item.** This course suggests asking four questions (advice, not a source's finding):

1. How many paid days a year would this item work, counted in billed days?
2. How many rentals equal its price, from a published rental price?
3. Who decides whether it may be used on the jobs you want: you, the client, or a league or license holder?
4. Will a newer model replace it before it has paid for itself?

:::reveal By this course's arithmetic, about how many 3-day rentals of a Bolt 6 LT kit cost as much as buying the set? ||| About 17 ($2,390 ÷ $142 = 16.8).

:::reveal To whom may a license for a TV broadcast auxiliary station be issued under 47 C.F.R. § 74.600? ||| Only a television broadcast station, a Class A TV station, a television broadcast network-entity, a low power TV station, or a TV translator station.

:::reveal What does the NFL's page say about uncoordinated wireless devices? ||| "uncoordinated devices are prohibited", and operators not following the policies may have their working credential revoked.

## Sources
- ${TERADEK_B6} Locator: price line.
- ${LR_BOLT} Locator: rental price list, 3-day and 7-day rows.
- ${CFR_74_600} Locator: the section's single paragraph.
- ${NFL_EFC} Locator: paragraphs on policy and on credential revocation.`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Choosing what to own",
      section: "2 · Choosing what to own",
      body: "A graded check on starting from demand, utilization in billed days, technology churn and wear, and what to keep renting. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which question does lesson 4 call a buyer's question rather than a rental owner's?", options: ["What would I love to own?", "Who rents this item now?", "How often is it rented?", "What does it rent for?"], correctIndex: 0, explanation: "\"'What would I love to own?' is a buyer's question.\" The owner's first question asks what productions nearby already rent, how often and from whom.", sourceLessonSlug: "start-from-demand" },
          { prompt: "What is a rental owner's first question, according to lesson 4?", options: ["Which model has the best reviews online?", "What do productions near me rent, and how?", "Which platform charges owners the least?", "How fast will this item pay for itself?"], correctIndex: 1, explanation: "\"A rental owner's first question is 'What do productions near me already rent, how often, and from whom?'\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "What does lesson 4 say the gear you buy has to do?", options: ["Match the newest model on the market", "Cost less than the regional house's gear", "Win bookings from whoever supplies it now", "Earn back its price inside one year"], correctIndex: 2, explanation: "\"The gear you buy has to win bookings away from whoever supplies it now.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "How many cameras did the regional house list on its cinema camera page?", options: ["Two", "One", "Nine", "Five"], correctIndex: 3, explanation: "The cinema cameras page listed 5 items, from a Sony FX30 to a RED Komodo-X package.", sourceLessonSlug: "start-from-demand" },
          { prompt: "Which was the lowest-priced camera on the regional house's cinema camera page?", options: ["A Sony FX30 at $75 a day", "A Sony FX3 at $55 a day", "A RED Komodo-X at $75 a day", "A Sony FX3 at $100 a day"], correctIndex: 0, explanation: "Prices ran \"From $75 a day ($335 a week) for a Sony FX30 to $300 a day ($1,200 a week) for a RED Komodo-X package\".", sourceLessonSlug: "start-from-demand" },
          { prompt: "What did the RED Komodo-X package rent for at the regional house?", options: ["$125 a day, $562.50 a week", "$300 a day, $1,200 a week", "$150 a day, $675 a week", "$75 a day, $335 a week"], correctIndex: 1, explanation: "The RED Komodo-X package was $300 a day and $1,200 a week, the top of the cinema camera page.", sourceLessonSlug: "start-from-demand" },
          { prompt: "What weekly price did the regional house list for its Sony FX30?", options: ["$250 a week", "$325 a week", "$335 a week", "$562.50 a week"], correctIndex: 2, explanation: "The FX30 was $75 a day and $335 a week. $250 is the gimbal's week, $325 the Pyro kit's, and $562.50 the FX3's.", sourceLessonSlug: "start-from-demand" },
          { prompt: "How many items did the regional house's gimbals, stabilizers and sliders page list?", options: ["Five", "Three", "Two", "One"], correctIndex: 3, explanation: "It listed one item, the DJI RS4 Pro Combo Kit.", sourceLessonSlug: "start-from-demand" },
          { prompt: "Which two wireless video kits did the regional house list?", options: ["A Hollyland Pyro 7-inch and a Paralinx Tomahawk 2", "A Teradek Bolt 6 LT and a Hollyland Pyro 7-inch", "A Paralinx Tomahawk 2 and a Teradek Bolt 4K", "A Teradek Bolt 4K and a Teradek Bolt 6 LT"], correctIndex: 0, explanation: "The wireless page listed a Hollyland Pyro 7-inch kit ($75 a day) and a Paralinx Tomahawk 2 kit ($150 a day). The Bolt kits come from Teradek's and Lensrentals' pages.", sourceLessonSlug: "start-from-demand" },
          { prompt: "What did the regional house charge for its Paralinx Tomahawk 2 kit?", options: ["$75 a day, $325 a week", "$150 a day, $675 a week", "$142 for 3 days", "$203 for 7 days"], correctIndex: 1, explanation: "The Tomahawk 2 kit was $150 a day and $675 a week. $75 and $325 are the Pyro kit; $142 and $203 are Lensrentals' Bolt 6 LT prices.", sourceLessonSlug: "start-from-demand" },
          { prompt: "What does lesson 4 read from five cinema cameras on one page?", options: ["Cinema cameras rarely rent there", "The house is selling off its cameras", "A renter there already has a choice", "Prices there are set by one maker"], correctIndex: 2, explanation: "\"Five cinema cameras on one page means a renter there already has a choice. Another FX3 in that market competes with the house's $125-a-day FX3.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "What can a single gimbal on the regional house's page tell you about demand?", options: ["That gimbals are in short supply", "That gimbals rent for too little", "That gimbals are rarely asked for", "Not whether it is low demand or a gap"], correctIndex: 3, explanation: "\"One gimbal on the page may mean low demand, or it may mean a gap. The page cannot tell you which. Only renters can.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "According to lesson 4, who can tell you whether a thin catalog means a gap?", options: ["Only renters can", "The house's owner", "The gear's maker", "A platform's ranking"], correctIndex: 0, explanation: "\"The page cannot tell you which. Only renters can.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "What does lesson 4 say about the price you list?", options: ["It must undercut the house by half", "It must make sense next to the house's", "It must match the platform's average", "It must cover the item within a year"], correctIndex: 1, explanation: "\"Whatever you list has to make sense next to the house's price for the same item.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "What kind of demand does lesson 4 say matters?", options: ["Views and saves on a listing page", "A large count of local productions", "A renter who says they would book it", "A rental house that is out of stock"], correctIndex: 2, explanation: "\"The demand that matters is a renter who says they would book your item, at a price, for a kind of job.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "How many productions, crews or companies does lesson 4's first step ask you to name?", options: ["At least ten", "At least one", "At least five", "At least three"], correctIndex: 3, explanation: "Step 1: \"Name at least three productions, crews or companies near you who rent the item now, and ask what they rent, how often and from whom.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "Why does lesson 4 suggest renting the exact item yourself for a paid job?", options: ["To learn what goes wrong and what renters ask", "To earn back part of its price before buying", "To prove to a platform that you are an owner", "To get a discount from the house on purchase"], correctIndex: 0, explanation: "Step 2: rent the exact item for a paid job, \"so you learn what goes wrong with it and what renters ask about.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "What is the kill rule lesson 4 asks you to write before buying?", options: ["The top price you will pay for the item", "Paid days in six months below which you sell", "The number of reviews you need to keep going", "The date on which you raise your day rate"], correctIndex: 1, explanation: "Step 3: \"Write down your kill rule before you buy: the number of paid days in the first six months below which you will sell.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "Which of these does ShareGrid's search ranking favor, as lesson 4 quotes it?", options: ["Lowest price on the whole site", "Newest model in each category", "Number and Variety of Listings", "Longest time as a member owner"], correctIndex: 2, explanation: "ShareGrid's ranking favors \"Fair Market Pricing\", \"Positive Reviews\", fast responses, a high acceptance rate, and the \"Number and Variety of Listings\".", sourceLessonSlug: "start-from-demand" },
          { prompt: "Why does ShareGrid say it blends in new owners and listings?", options: ["To fill the gaps in its rental catalog", "To test new owners before approving them", "To keep prices low for all of its renters", "To give everyone a fair chance at credibility"], correctIndex: 3, explanation: "ShareGrid blends in \"new owners and listings to give everyone a fair chance to earn credibility in the marketplace.\"", sourceLessonSlug: "start-from-demand" },

          { prompt: "How does lesson 5 define utilization?", options: ["The share of possible days a client pays for", "The share of days the gear is away from you", "The number of rentals it takes to repay it", "The share of listings that receive a booking"], correctIndex: 0, explanation: "Utilization is \"the share of the days it could be earning on which a client is actually paying for it\", measured in billed days.", sourceLessonSlug: "utilization" },
          { prompt: "In what unit does this course measure utilization?", options: ["Calendar days out", "Billed days", "Bookings a month", "Hours of use"], correctIndex: 1, explanation: "It \"is measured in billed days, not in the days the gear is away from you.\"", sourceLessonSlug: "utilization" },
          { prompt: "Why are billed days and days away from you not the same?", options: ["Owners bill extra for prep days", "Renters pay for travel days too", "Rental pricing gives renters free days", "Platforms bill only on weekdays"], correctIndex: 2, explanation: "\"The two are not the same, because rental pricing gives renters days for free.\"", sourceLessonSlug: "utilization" },
          { prompt: "Under ShareGrid's local-pickup rules, what do Saturday and Sunday shoot days count as?", options: ["Two days, at a discount", "Two full shoot days", "One and a half days", "One shoot day"], correctIndex: 3, explanation: "\"Shoot days that fall on Saturday and Sunday count as 1 day\".", sourceLessonSlug: "utilization" },
          { prompt: "Under ShareGrid's rules, what is a renter charged for keeping gear 6 or 7 days?", options: ["3 shoot days", "5 shoot days", "6 shoot days", "4 shoot days"], correctIndex: 0, explanation: "\"If you have the gear for 6 to 7 days, you're only charged for 3 shoot days.\"", sourceLessonSlug: "utilization" },
          { prompt: "Under ShareGrid's rules, what is a renter charged for 22 to 31 days?", options: ["15 shoot days", "10 shoot days", "12 shoot days", "20 shoot days"], correctIndex: 1, explanation: "\"If you rent gear for 22 to 31 days, you'll only be charged for 10 shoot days.\"", sourceLessonSlug: "utilization" },
          { prompt: "When is ShareGrid's standard local pickup time?", options: ["Before 9:00 AM on the start date", "At noon on the day before the start", "After 2:00 PM on the start date", "After 3:00 PM the day before start"], correctIndex: 2, explanation: "Pickup is \"after 2:00 PM on the start date\". After 3:00 p.m. the day before is the regional house's rule for advance rentals.", sourceLessonSlug: "utilization" },
          { prompt: "When is gear due back under ShareGrid's standard local-pickup times?", options: ["By 10:00 AM the day after", "By 5:00 PM on the return date", "By midnight on the return date", "By noon on the return date"], correctIndex: 3, explanation: "Return is \"by 12:00 PM (noon) on the return date\". 10:00 a.m. is the regional house's Tuesday deadline for weekends.", sourceLessonSlug: "utilization" },
          { prompt: "What does ShareGrid say pickup and return days are intended for?", options: ["Checking, prepping and moving gear", "Short test shoots by the renter", "Owner inspections with photos", "Overflow if the shoot runs long"], correctIndex: 0, explanation: "\"pickup and return days do not count as shoot days.\" They \"are intended for checking, prepping, and transporting gear, not filming.\"", sourceLessonSlug: "utilization" },
          { prompt: "How many shoot days does ShareGrid charge for its \"Two-day shoot over four calendar days\" example?", options: ["Four", "Two", "Three", "One"], correctIndex: 1, explanation: "ShareGrid's example \"Two-day shoot over four calendar days\" is charged as two shoot days, since pickup and return days are free.", sourceLessonSlug: "utilization" },
          { prompt: "How does the regional rental house price most items for a weekend?", options: ["At 2 times the day rate", "At the full weekly rate", "At 1.5 times the day rate", "At 3 times the day rate"], correctIndex: 2, explanation: "It prices most items for a weekend at \"1.5 times the day rate\".", sourceLessonSlug: "utilization" },
          { prompt: "What start and end days make up a weekend at the regional rental house?", options: ["A Saturday start and a Sunday end", "A Thursday start and a Tuesday end", "A Friday start and a Sunday end", "A Friday start and a Monday end"], correctIndex: 3, explanation: "Weekend pricing applies to \"a Friday start and a Monday end\". Thursday and Tuesday are the earliest pickup and latest return.", sourceLessonSlug: "utilization" },
          { prompt: "When is the earliest a weekend reservation can be picked up at the regional house?", options: ["Thursday at 3:00 p.m.", "Friday at 2:00 p.m.", "Friday at 9:00 a.m.", "Thursday at noon"], correctIndex: 0, explanation: "Weekend reservations \"can be picked up as early as Thursday at 3:00pm\".", sourceLessonSlug: "utilization" },
          { prompt: "By the course's arithmetic, how long can one weekend rental at the regional house keep an item out?", options: ["Exactly two calendar days", "Nearly five calendar days", "Seven full calendar days", "Three and a half days"], correctIndex: 1, explanation: "\"from Thursday at 3 p.m. to Tuesday at 10 a.m., nearly five calendar days, and bill one and a half days.\"", sourceLessonSlug: "utilization" },
          { prompt: "On ShareGrid's rules, how many days does one long rental that keeps an item out a full month bill?", options: ["31 days", "22 days", "10 days", "3 days"], correctIndex: 2, explanation: "\"an item that is 'out' every day of a month on one long rental may bill only 10 days.\"", sourceLessonSlug: "utilization" },
          { prompt: "In lesson 5's assumed example, about how many days a year do weekly bookings every week bill?", options: ["About 52", "About 104", "About 365", "About 156"], correctIndex: 3, explanation: "\"The same item booked by the week, every week, would bill about 156 days (52 × 3).\" About 52 is the weekend-only case.", sourceLessonSlug: "utilization" },
          { prompt: "In lesson 5's example, how do weekly bookings compare with weekend bookings in income?", options: ["About three times as much", "About the same in the end", "About half as much again", "About twice as much"], correctIndex: 0, explanation: "About 156 billed days against about 52: \"Your income would differ by three times.\"", sourceLessonSlug: "utilization" },
          { prompt: "What does lesson 5 say about an owner who uses the gear on their own weekend jobs?", options: ["Weekend rentals pay them twice", "They lose the bookings rentals favor", "They may bill renters for weekends", "Their utilization doubles in summer"], correctIndex: 1, explanation: "\"If you plan to use the gear yourself on weekends, the weekend bookings that rental pricing favors are the ones you cannot take.\"", sourceLessonSlug: "utilization" },

          { prompt: "What are the two clocks lesson 6 says run on every item?", options: ["Price and demand", "Fees and taxes", "Wear and churn", "Prep and repair"], correctIndex: 2, explanation: "\"One is wear: parts that get used up. The other is churn: newer models that make yours the older one.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What does lesson 6 mean by churn?", options: ["Parts that get used up in service", "Renters who never come back again", "Price cuts made by rental houses", "Newer models that make yours older"], correctIndex: 3, explanation: "\"churn: newer models that make yours the older one.\" Parts that get used up are wear.", sourceLessonSlug: "churn-and-wear" },
          { prompt: "Which of the two clocks shows on the purchase receipt?", options: ["Neither one", "Only wear", "Only churn", "Both clocks"], correctIndex: 0, explanation: "\"A rental owner pays for both, and neither shows on the purchase receipt.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What did Teradek list as the price of each version of its Bolt 4K 750 Deluxe Kit?", options: ["$2,390 each", "$6,890 each", "$4,298 each", "$3,929 each"], correctIndex: 1, explanation: "Both versions were listed at $6,890, both \"Sold Out\". $2,390 is the Bolt 6 LT set.", sourceLessonSlug: "churn-and-wear" },
          { prompt: "How does lesson 6 describe MPB?", options: ["A rental house", "A camera maker", "A rental platform", "A used-gear dealer"], correctIndex: 3, explanation: "\"MPB, a used-gear dealer, listed used Sony FX3 bodies\".", sourceLessonSlug: "churn-and-wear" },
          { prompt: "How many used Sony FX3 bodies did MPB's page count?", options: ["11", "28", "17", "5"], correctIndex: 0, explanation: "\"its page counted 11, from $3,549 to $3,929.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What price range did MPB's page show for used Sony FX3 bodies?", options: ["$2,390 to $4,298", "$3,549 to $3,929", "$4,298 to $6,890", "$3,000 to $3,549"], correctIndex: 1, explanation: "MPB's page counted 11 used FX3 bodies \"from $3,549 to $3,929.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "Which Sony body was Lensrentals renting while MPB sold used FX3 bodies?", options: ["The Sony FX30", "The Sony FX6", "The Sony FX3 A", "The Sony a7S III"], correctIndex: 2, explanation: "\"Lensrentals rented the Sony FX3 A body, while MPB, a used-gear dealer, listed used Sony FX3 bodies\".", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What does lesson 6 infer from the Bolt and FX3 pages?", options: ["Older models rent for more than new ones", "Makers stop repairing models after a year", "Used prices rise when a new model ships", "Newer models sit beside yours on price lists"], correctIndex: 3, explanation: "The course's inference: \"cameras and wireless links are replaced by newer models, the newer model appears on rental price lists beside yours, and renters can choose it.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "Does lesson 6 compare the Bolt 4K Deluxe Kit with the Bolt 6 LT?", options: ["No, Teradek's pages don't compare them", "Yes, it finds the Bolt 6 LT the better buy", "Yes, it finds the two kits identical", "No, because the Bolt 6 LT was sold out"], correctIndex: 0, explanation: "\"The Bolt pages do not compare the two products, so this course does not either.\" It only notes that the maker sends buyers onward.", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What does Sony's FX3 help guide say about battery life?", options: ["It is unlimited if stored half charged", "It is limited, and capacity falls slowly", "It lasts five years with normal use", "It falls only if charged in the cold"], correctIndex: 1, explanation: "\"The battery life is limited. If you use the same battery repeatedly, or use the same battery for a long period, the battery capacity decreases gradually.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "When does Sony's help guide say it is probably time to replace the battery pack?", options: ["After 300 full charge cycles", "Once a year, before storing it", "When available time drops a lot", "When the charge lamp first flashes"], correctIndex: 2, explanation: "When \"the available time of the battery is shortened significantly, it is probably time to replace the battery pack with a new one.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "How does lesson 6 say a rental owner should treat batteries?", options: ["As lifetime parts", "As renter property", "As free accessories", "As consumables"], correctIndex: 3, explanation: "\"A rental owner should treat batteries as consumables: bought, used up and replaced on a schedule.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What does the regional house charge per item returned with offensive odors or a dirty exterior?", options: ["$20 per item", "$25 per item", "$50 per item", "$10 per item"], correctIndex: 0, explanation: "It charges \"a $20 cleaning fee per item\". $25 is its charge per sensor that needs cleaning.", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What may the regional house charge for gear returned \"offensively dirty\"?", options: ["A flat $100 cleaning fee", "Up to 25 percent of the rental fee", "The full rental fee a second time", "Up to 10 percent of the gear's value"], correctIndex: 1, explanation: "It \"may charge up to 25 percent of the rental fee for 'offensively dirty' gear\".", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What does the regional house charge for each sensor returned needing cleaning?", options: ["$20 per sensor", "$50 per sensor", "$25 per sensor", "$15 per sensor"], correctIndex: 2, explanation: "\"$25 per sensor that is returned needing cleaning.\" $20 is the per-item cleaning fee.", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What does lesson 6 conclude from a rental house's cleaning fees?", options: ["Houses profit most from their fees", "Renters seldom return gear dirty", "Fees replace the need for insurance", "Houses don't write fees for nothing"], correctIndex: 3, explanation: "The fees \"show what comes back from renters\": \"A house does not write fees for things that never happen.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "Besides the camera body's software, what can Sony's Version screen display?", options: ["A compatible lens's version", "The battery's charge cycles", "The memory card's free space", "The sensor's cleaning history"], correctIndex: 0, explanation: "It \"Also displays the version of the lens if a lens compatible with firmware updates is attached.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What does lesson 6 advise checking before buying an item renters will judge against the newest model?", options: ["Whether the maker offers a trade-in", "How many older units sell used, and for what", "Which platform charges the lowest fee", "Whether a rental house has it in stock"], correctIndex: 1, explanation: "\"check how many of the older model are for sale used, and at what price.\"", sourceLessonSlug: "churn-and-wear" },

          { prompt: "Besides owning gear, what else can an owner-operator do, according to lesson 7?", options: ["Ask the client to buy the gear", "Borrow gear from a union local", "Rent items and charge the client", "Lease gear from the manufacturer"], correctIndex: 2, explanation: "\"An owner-operator can rent items for a job and charge the client for them, the way a production does.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What skill does lesson 7 open with?", options: ["Spotting the next new model", "Negotiating a lower purchase", "Running gear past its warranty", "Knowing what to own and rent"], correctIndex: 3, explanation: "\"The skill is knowing which items to own and which to keep renting.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What did Lensrentals charge for a Bolt 6 LT 750 kit for 3 days?", options: ["$142", "$155", "$203", "$125"], correctIndex: 0, explanation: "The kit was $142 for 3 days and $203 for 7 days. $155 is the FX3 A body's 3-day price.", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What did Lensrentals charge for a Bolt 6 LT 750 kit for 7 days?", options: ["$222", "$203", "$335", "$250"], correctIndex: 1, explanation: "$203 for 7 days. $222 is the FX3 A body's 7-day price.", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "By lesson 7's arithmetic, about how many weekly rentals of the Bolt 6 LT kit equal its purchase price?", options: ["About 28", "About 17", "About 12", "About 7"], correctIndex: 2, explanation: "\"$2,390 ÷ $203 = 11.8, so about 12 weekly rentals cost as much as buying.\" About 17 is the 3-day count.", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What is $2,390 divided by $142, as lesson 7 works it?", options: ["11.8", "27.7", "15.4", "16.8"], correctIndex: 3, explanation: "\"$2,390 ÷ $142 = 16.8, so about 17 three-day rentals cost as much as buying.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "If you would need the Bolt fewer times a year than the break-even count, what does lesson 7 conclude?", options: ["Renting per job costs less", "Owning still costs less", "The two always cost the same", "Buy it used instead"], correctIndex: 0, explanation: "\"renting it per job costs less than owning it, before you even count upkeep, insurance and the newer model.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "If you would need the link more often than the break-even count, what does lesson 7 say?", options: ["Owning always costs less than renting", "Owning may cost less if bookings are real", "Renting still costs less every time", "Buy a second unit so one is always free"], correctIndex: 1, explanation: "\"If you would need it more often, owning may cost less, but only if the bookings that need it are real (lesson 4).\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "Which of these may hold a license under 47 C.F.R. § 74.600, as lesson 7 quotes it?", options: ["A freelance camera operator", "A gear rental platform", "A TV broadcast network-entity", "A regional rental house"], correctIndex: 2, explanation: "A license \"will be issued only to a television broadcast station, a Class A TV station, a television broadcast network-entity, a low power TV station, or a TV translator station.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What does lesson 7 conclude from 47 C.F.R. § 74.600?", options: ["Operators may license their own links", "Rental houses hold every broadcast link", "Licensed links are free to any crew", "A network's links are under its authority"], correctIndex: 3, explanation: "\"an individual crew member is none of those, so the licensed wireless links a network uses come under that network's authority, not the operator's.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What does the NFL's page say about uncoordinated wireless devices at its events?", options: ["They are prohibited", "They need a fee paid", "They work at halftime", "They need a spare unit"], correctIndex: 0, explanation: "\"uncoordinated devices are prohibited\".", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What may happen to an operator who does not follow the NFL's wireless policies, as lesson 7 quotes it?", options: ["Their gear may be sold at auction", "Their working credential may be revoked", "Their network may be fined for a season", "Their union may suspend them a year"], correctIndex: 1, explanation: "\"In some instances, operators not following the policies may have his or her working credential revoked.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "On a major sports show, who sets the wireless path, according to lesson 7?", options: ["The camera operator", "The rental house", "The show itself", "The gear's maker"], correctIndex: 2, explanation: "\"So on a major sports show, the wireless path is set by the show.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What build does lesson 7 say the planned CREW-04 course makes the case for?", options: ["Own the licensed wireless, rent the camera", "Rent every part of the rig for each job", "Own every part of the rig, wireless included", "Own the camera, rent or partner for wireless"], correctIndex: 3, explanation: "The case is \"own the camera side, and rent or partner for licensed broadcast wireless.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "Why does lesson 7 warn against buying broadcast wireless without a client who requires it from you?", options: ["It puts your largest buy where you have least control", "It is illegal for crew members to own wireless links", "It costs more to insure than any camera body would", "It is always sold out at the maker's own store"], correctIndex: 0, explanation: "It \"puts your largest purchase where you have the least control\", because the show and the license holder decide what wireless may be used.", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "Which of these is one of the four questions lesson 7 suggests asking about each item?", options: ["Which color sells best on platforms?", "Who decides if it may be used on jobs?", "How many owners already list it nearby?", "Which maker offers the longest warranty?"], correctIndex: 1, explanation: "The third question: \"Who decides whether it may be used on the jobs you want: you, the client, or a league or license holder?\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "In lesson 7's four questions, how are an item's paid days a year counted?", options: ["In calendar days", "In bookings made", "In billed days", "In hours of use"], correctIndex: 2, explanation: "The first question asks how many paid days a year the item would work, \"counted in billed days\".", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What does lesson 7 say about the status of its four questions?", options: ["They come from IRS Publication 946", "They are a platform's listing rules", "They are a rental house's policy terms", "They are advice, not a source's finding"], correctIndex: 3, explanation: "The four questions are \"advice, not a source's finding.\"", sourceLessonSlug: "what-to-keep-renting" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: Acquiring gear
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "new-or-used",
      title: "8 · New or used",
      section: "3 · Acquiring gear",
      recallContent: [
        {
          prompt: "By this course's arithmetic, about how many weekly rentals of a Bolt 6 LT kit cost as much as buying the set?",
          answer: "About 12 ($2,390 ÷ $203 = 11.8).",
        },
        {
          prompt: "Under 47 C.F.R. § 74.600, who may hold a license for a TV broadcast auxiliary station?",
          answer: "Only a television broadcast station, a Class A TV station, a television broadcast network-entity, a low power TV station, or a TV translator station; an individual crew member is none of those.",
        },
      ],
      body: `**Two ways to buy the same job.** A body that rents for the same price earns the same money whether you paid full price for it or less. What you paid decides how many rentals it takes to earn it back. That makes the new-or-used choice a money question first.

**New, from a retailer's page.** On October 21, 2026, a camera retailer listed the Sony FX3A body at $4,298. Its box list: the body, an XLR handle unit, an NP-FZ100 battery, a BC-ZD1 charger, an accessory shoe kit, a body cap, an accessory shoe cap and a handle shoe cap.

**Used, from a dealer's page.** The same day, MPB, a used-gear dealer, showed 11 used Sony FX3 bodies available, priced from $3,549 to $3,929. The FX3 is a different model from the FX3A. Each of the eight listings it displayed read "Cosmetic condition: Excellent" and "Standard 6 month warranty". All eight included an NP-FZ100 battery, the FX3 battery door and the XLR handle unit. The rest varied by listing: some had original packaging or a manual, some a USB cable, one a third-party charger in place of Sony's, and two added third-party parts such as a cage or a top plate.

**The arithmetic, shown.** This course's own working, comparing the two pages:

- $4,298 − $3,929 = $369, and $4,298 − $3,549 = $749.
- At the regional house's $125 day rate for an FX3, $749 is about 6 billed days ($749 ÷ $125 = 6.0).

So the used body saved, at most, about six days of rent at that price. The comparison is between two different models, so it measures money only. Whether renters in your market will pay the same for each is the demand question of lesson 4.

**Five checks before you buy used.** These are this course's advice, each tied to a page you can read:

1. **Match the listing to your package.** The dealer's listings differ in what is in the box. Price the missing pieces, such as a charger, before comparing.
2. **Write down the warranty.** The used listings said six months. Know when it ends.
3. **Reset it.** Sony's help guide says that if a camera "is transferred to you or you borrow the camera: initialize the camera or cancel the linkage with Creators' Cloud on the camera."
4. **Check the software.** Sony's Version screen shows the body's firmware and, with a compatible lens attached, the lens's (lesson 6).
5. **Record it.** Serial number, invoice and photos go into the asset record the day it arrives (lesson 9).

**When new may be worth it.** This course's reasoning: a longer warranty, a full box and a known history are worth something to a rental owner, because the item will go out to strangers. If the used price saves only a few days of rent, those things may be worth more than the saving. If it saves weeks, used may win. Either way, decide with the numbers written down.

:::reveal What did MPB show for used FX3 bodies on October 21, 2026? ||| 11 available, priced from $3,549 to $3,929.

:::reveal What warranty did each displayed used FX3 listing state? ||| "Standard 6 month warranty".

:::reveal What does Sony's help guide tell you to do when a camera is transferred to you? ||| Initialize the camera or cancel its linkage with Creators' Cloud on the camera.

## Sources
- ${FOCUS_FX3A} Locator: price line and "What's in the box".
- ${MPB_FX3} Locator: results header and the eight listings' condition, warranty and "includes" lines.
- ${RH_FX3} Locator: "1 Day" price line.
- ${SONY_LENDING} Locator: "Notes on using the cloud service (Creators' Cloud)", the transfer instructions.
- ${SONY_VERSION} Locator: the first two sentences.`,
    },
    {
      slug: "the-asset-record",
      title: "9 · Serial numbers, receipts and the asset record",
      section: "3 · Acquiring gear",
      recallContent: [
        {
          prompt: "By this course's arithmetic, what was the most a used FX3 saved against a new FX3A on October 21, 2026, and what is that in days of rent at $125?",
          answer: "$749 ($4,298 − $3,549), about 6 billed days at $125.",
        },
        {
          prompt: "Name three of the five checks this course suggests before buying used.",
          answer: "Any three of: match the listing to your package; write down the warranty; reset the camera; check the firmware; record serial number, invoice and photos.",
        },
      ],
      body: `**Three readers, one set of facts.** Three parties may one day ask what you own, when you got it and what it is worth: the IRS, your insurer, and a rental platform's guarantee. They ask for nearly the same facts. Keeping one record that answers all three is the cheapest protection this course teaches.

**What the IRS says asset records should show.** IRS Publication 583 says of business assets: "You need records to figure the annual depreciation and the gain or loss when you sell the assets." It lists what the records should show:

- When and how you acquired the asset, and the purchase price.
- The cost of any improvements.
- The section 179 deduction taken, and deductions taken for depreciation (section 7 explains both).
- Deductions taken for casualty losses, "such as losses resulting from fires or storms."
- How you used the asset.
- When and how you disposed of it, the selling price, and the expenses of sale.

It names documents that may show this, including "Purchase and sales invoices" and "Canceled checks". And it says how long to keep them: "Keep records relating to property until the period of limitations expires for the year in which you dispose of the property in a taxable disposition." For a camera, that can be years after you sell it.

**What an insurer's guide asks for.** The Insurance Information Institute's guide to a home inventory says to describe each item and "note where you bought it, the make and model, what you paid". It says serial numbers are "usually found on the back or bottom of major appliances and electronic equipment" and are "a useful reference". It says to "Store sales receipts, purchase contracts, and appraisals with your list", and to make a photo record labeled with "what's pictured, where you bought it, the make or model". The guide is written for a household. This course applies the same habits to rental gear.

**What a platform asks for.** ShareGrid's Owner Guarantee tells owners to "Set the Replacement Value accurately for each of your rental Listings. ShareGrid will only pay for an item up to the listed Replacement Value." It adds: "Make sure all items in a package are mentioned in the Listing. If they're not, they may not be protected by the ShareGrid Owner Guarantee."

**One record that answers all three.** This course suggests one row per item, with these fields:

| Field | Who asks for it |
|---|---|
| Make, model and serial number | Insurer, platform |
| Date bought, seller, price paid, invoice | IRS, insurer |
| Photos on arrival, labeled | Insurer, platform |
| Replacement value today, with the date you checked it | Platform, insurer |
| What ships with it (charger, cables, case) | Platform |
| Firmware version | You, at each check-out |
| Business and personal days of use | IRS (lesson 23) |
| Date sold or retired, price, costs of sale | IRS |

Update the replacement value when prices move. A value set the day you bought the item can be wrong a year later, and the guarantee pays only up to the value listed.

:::reveal According to IRS Publication 583, how long should you keep records about a business asset? ||| Until the period of limitations expires for the year in which you dispose of the property in a taxable disposition.

:::reveal Where does the Insurance Information Institute say serial numbers are usually found? ||| On the back or bottom of major appliances and electronic equipment.

:::reveal What does ShareGrid say happens to package items not mentioned in a listing? ||| They may not be protected by the ShareGrid Owner Guarantee.

## Sources
- ${IRS_P583} Locator: "Supporting Documents", "Assets" (the list of what records should show and the documents that show it); "How Long To Keep Records", "Assets".
- ${III_INVENTORY} Locator: "Start your home inventory now" (basic information, serial numbers, proof of value); "Use technology to make your home inventory easier" (photos).
- ${SG_GUARANTEE} Locator: "Eligibility", first two items.`,
    },
    {
      slug: "kits-that-rent-together",
      title: "10 · Kits that rent together",
      section: "3 · Acquiring gear",
      recallContent: [
        {
          prompt: "Name four things IRS Publication 583 says asset records should show.",
          answer: "Any four of: when and how you acquired the asset; purchase price; cost of improvements; section 179 deduction taken; depreciation taken; casualty losses taken; how you used it; when and how you disposed of it; selling price; expenses of sale.",
        },
        {
          prompt: "What does ShareGrid say it will pay, at most, for an unreturned item under its Owner Guarantee?",
          answer: "Up to the listed Replacement Value, which the owner must set accurately.",
        },
      ],
      body: `**Renters book something that works.** A production does not want a camera body. It wants pictures by call time. Rental houses price and name packages to match:

- Lensrentals' FX3 A rental lists seven items in the box: the body, a body cap, a strap, an NP-FZ100 battery, a BC-ZD1 charger, a 3-foot Thunderbolt 4 USB-C cable and a USB charger.
- The regional rental house lists a "Sony Cinema Line FX3 w/ XLR Top Handle", a "DJI RS4 Pro Combo Kit", a "Hollyland PyroTX and RX 7\" Monitor Kit" and a "RED Komodo-X Camera Package". The names themselves say these go out as sets.

**The part that breaks a booking.** Lensrentals' Bolt 6 LT 750 kit lists a transmitter, a receiver, seven antennas, a D-Tap power cable, a 2-pin LEMO AC adapter, mounts, two V-Mount plates and more, then says: "Batteries are not included and must be rented separately." This course's reasoning: whatever you leave out, the renter must find somewhere else. A renter who has to shop twice for one job may book the whole job from someone who supplies it all.

**Build the kit list from the job backward.** This course suggests a method, not a rule. List what the job needs to make a usable picture, in order:

1. Capture: the body, a lens, and the media it records to.
2. Power: batteries, a charger, and any cable that powers it from a larger battery.
3. Seeing the picture: a monitor or a wireless link, if the job needs one.
4. Holding it: the handle, a cage, a gimbal or a tripod plate.
5. Connecting it: the cables each piece needs.
6. Carrying it: a case that fits all of the above.

Mark each line **included**, **add-on at a price**, or **renter supplies**, and put that list in the listing.

**Describe and photograph exactly that.** ShareGrid's tips for owners say: "Clearly describe your gear and any special notes the renter should be aware of" and "Ensure your photos are accurate and show your gear clearly." A clear list also protects you. ShareGrid's guarantee covers only package items "mentioned in the Listing", and its missing-items policy says "Renters are accountable for returning all rented gear" and that a renter "may be charged the full replacement cost (including tax and shipping)" for an item that cannot be returned. You can only claim for what you can show went out.

**Media cards carry other people's work.** Sony's help guide warns that "Executing [Format] or [Delete] on the camera or a computer may not completely delete the data on the memory card" and recommends deleting data "completely using data deletion software" before lending a card. If your kit includes cards, lesson 19 builds that into the turnaround.

:::reveal What did Lensrentals' Bolt 6 LT kit listing say about batteries? ||| "Batteries are not included and must be rented separately."

:::reveal Name the six groups in this course's kit-list method. ||| Capture, power, seeing the picture, holding it, connecting it, and carrying it.

:::reveal What does Sony's help guide say about formatting a memory card before lending it? ||| Formatting or deleting may not completely delete the data; it recommends data deletion software.

## Sources
- ${LR_FX3A} Locator: "What's included" list.
- ${RH_CINEMA} Locator: item names.
- ${RH_GIMBALS} Locator: item name.
- ${RH_WIRELESS} Locator: item names.
- ${LR_BOLT} Locator: included-items list and the batteries note.
- ${SG_TIPS} Locator: "Create a Comprehensive Description" and "Upload High-Quality Photos".
- ${SG_GUARANTEE} Locator: "Eligibility", second item.
- ${SG_MISSING} Locator: first two paragraphs.
- ${SONY_LENDING} Locator: "Notes on lending, transferring, or discarding a memory card to others".`,
    },
    // @@QUIZ-3@@

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: Pricing
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "reading-a-price-list",
      title: "11 · Reading a published price list",
      section: "4 · Pricing",
      recallContent: [
        {
          prompt: "What did Lensrentals list as included with its FX3 A body rental?",
          answer: "The body, a body cap, a strap, an NP-FZ100 battery, a BC-ZD1 charger, a 3-foot Thunderbolt 4 USB-C cable and a USB charger.",
        },
        {
          prompt: "Why does this course say leaving power or media out of a package can cost a booking?",
          answer: "The renter must find the missing pieces somewhere else, and a renter who has to shop twice may book the whole job from someone who supplies it all.",
        },
      ],
      body: `**Prices are published, so read them.** Rental houses publish their prices, and a peer-to-peer platform publishes its rules for counting days. Together they tell you what a renter near you already pays, and how a "week" or a "weekend" is counted. Every price below was read on October 21, 2026.

**One house's day and week, side by side.** This course divided each week price by its day price:

| Item at the regional rental house | Day | Week | Week ÷ day |
|---|---|---|---|
| Sony FX3 with XLR top handle | $125 | $562.50 | 4.5 |
| Sony FX30 with XLR top handle | $75 | $335 | 4.47 |
| Canon EOS C70 | $100 | $450 | 4.5 |
| RED Komodo-X package | $300 | $1,200 | 4.0 |
| DJI RS4 Pro Combo Kit | $75 | $250 | 3.33 |
| Hollyland Pyro 7-inch kit | $75 | $325 | 4.33 |

Its weekend rate, for a Friday start and a Monday end, is "1.5 times the day rate" for most items.

**A house that prices by length.** Lensrentals does not quote a day rate. Its FX3 A body costs $155 for 3 days, $222 for 7 days, $389 for 14 days and $655 for 30 days. This course's arithmetic per day: about $51.67 at 3 days, $31.71 at 7, $27.79 at 14 and $21.83 at 30. The longer the rental, the less each day costs.

**A platform that counts days for you.** ShareGrid caps a full week at 3 shoot days and a month at 10, and counts Saturday and Sunday as one (lesson 5).

**A guide's rule of thumb.** The Rate Guide says a weekly kit rate is "typically set at 3×" the daily rate.

**What the four sources say together.** This course's reading: a "week" costs anywhere from 3 to 4.5 days' rent, depending on who sets the price. A "weekend" costs 1 day on the platform and 1.5 days at the house. There is no single market rule, so when you set yours (lesson 14), say it in writing.

**What a price list leaves out.** The regional house's FX3 page shows two prices and no list of what comes with the camera; Lensrentals' FX3 A page lists seven items. Before you compare your price with a house's, find out what its price includes. A lower price for less gear is not a lower price.

:::reveal At the regional house, how many day rates did a week of the Sony FX3 with handle cost? ||| 4.5 ($562.50 ÷ $125).

:::reveal By this course's arithmetic, what did one day of a 30-day Lensrentals FX3 A rental cost? ||| About $21.83 ($655 ÷ 30).

:::reveal What does this course conclude a "week" costs across the four sources? ||| Anywhere from 3 to 4.5 days' rent, depending on who sets the price.

## Sources
- ${RH_CINEMA} Locator: the five camera listings, "1 Day" and "1 Week".
- ${RH_GIMBALS} Locator: the one listing.
- ${RH_WIRELESS} Locator: the Hollyland listing.
- ${RH_POLICIES} Locator: weekend pricing paragraph.
- ${RH_FX3} Locator: the whole page (two prices, no list of contents).
- ${LR_FX3A} Locator: rental price table and "What's included".
- ${SG_SHOOT_DAYS} Locator: "Full week" and "Full month" rules.
- ${RATE_GUIDE} Locator: the kit rental rates paragraph.`,
    },
    {
      slug: "platform-fees",
      title: "12 · Platform fees: what reaches you",
      section: "4 · Pricing",
      recallContent: [
        {
          prompt: "At the regional rental house, what was the weekend rate for most items?",
          answer: "1.5 times the day rate, for a Friday start and a Monday end.",
        },
        {
          prompt: "Across the regional house, Lensrentals, ShareGrid and The Rate Guide, how many days' rent does a week cost?",
          answer: "Anywhere from 3 to 4.5, depending on who sets the price.",
        },
      ],
      body: `**Your listed price is not your income.** A platform takes a fee, the renter pays a fee on top, and the days billed are fewer than the days the gear is away. Work out what reaches you before you set a price.

**ShareGrid's fees, as its page states them.** Under "Rentals":

- Owner fee: "Fixed 15% service fee."
- Renter fee: "Dynamic community fee, typically 10%, displayed during checkout." The page adds that it "may vary based on pickup schedule, coverage option, and booking lead time."
- "The community fee may not be refundable if the renter cancels a confirmed rental."
- The fees cover "ID verification, coverage verification, security, customer service, feature improvements, and dispute mitigation."

Under "Buy & Sell", which matters when you retire gear (lesson 22): "A 5% fee applies to all seller transactions", and buyers paying by credit card pay "2.45% + $0.30".

**A worked example.** The numbers are assumptions chosen to show the method, not a rate to use. This course assumes the 15 percent is taken from the rental price; confirm that on your own payout statement.

| Step | Amount |
|---|---|
| Your listed day rate (assumption) | $100 |
| Renter keeps the gear 7 days; ShareGrid bills 3 shoot days | $300 |
| Owner fee, 15 percent | $45 |
| Reaches you | $255 |
| Per day the gear was away (7 days) | about $36.43 |
| Renter's community fee, typically 10 percent | about $30 more for the renter |

The same gear, booked for one shoot day with pickup and return days free, would earn $85 for three calendar days away. Either way, the number that pays for the gear is what reaches you per billed day, minus your upkeep and time (section 7).

**What renters already pay for protection at a rental house.** Lensrentals' FX3 A page adds an optional fee for its Lenscap protection: $21 on the $155 three-day rental, or $32 for Lenscap+ (lesson 16 explains what they are). A renter comparing your listing with a rental house is comparing totals, not day rates.

**What the fee buys you.** ShareGrid says its fees pay for ID and coverage verification, security and dispute handling. Section 5 shows what those are worth, and what they do not cover.

:::reveal What owner fee does ShareGrid charge on rentals? ||| A "Fixed 15% service fee."

:::reveal In this lesson's example, what reaches the owner from a 7-day rental billed at 3 days of $100? ||| $255 ($300 less the 15 percent fee of $45), about $36.43 per day away.

:::reveal What did Lensrentals charge for Lenscap on a $155 three-day FX3 A rental? ||| $21 (or $32 for Lenscap+).

## Sources
- ${SG_FEES} Locator: "Rentals" (owner fee, renter fee and its variation), "Important Note", the fee-purpose sentence, and "Buy & Sell".
- ${SG_SHOOT_DAYS} Locator: "Full week" rule and the pickup and return days.
- ${LR_FX3A} Locator: rental price table, 3-day row, Lenscap and Lenscap+ columns.`,
    },
    {
      slug: "kit-fees",
      title: "13 · Kit fees: why a percentage rule misleads",
      section: "4 · Pricing",
      recallContent: [
        {
          prompt: "What renter fee does ShareGrid's page describe?",
          answer: "A \"Dynamic community fee, typically 10%, displayed during checkout\", which may vary with pickup schedule, coverage option and booking lead time.",
        },
        {
          prompt: "In lesson 12's example, why is the owner's income per day away lower than the listed day rate?",
          answer: "The platform takes 15 percent and a 7-day rental bills only 3 shoot days, so $255 reaches the owner for 7 days away, about $36.43 a day.",
        },
      ],
      body: `**The rule.** The Rate Guide, updated August 2026, says "The industry norm for kit rental is" 10 to 15 percent "of the replacement value of the equipment per day." Its examples: a $5,000 gimbal at $500 to $750 a day, and a full Steadicam rig with a $15,000 replacement value at $1,500 to $2,250 a day. It also says kit rentals are separate line items on the production budget, not built into the operating rate. That last point matches this course (lesson 3). The percentage is what this lesson tests.

**Test it against the price lists.** This course's arithmetic, using prices read on October 21, 2026:

| Item | Price new | Rule: 10 to 15 percent a day | What a renter could pay instead |
|---|---|---|---|
| Sony FX3A body | $4,298 (retailer) | $429.80 to $644.70 a day | $125 a day for an FX3 with handle at the regional house; $155 for 3 days at Lensrentals |
| Teradek Bolt 6 LT set | $2,390 (maker) | $239 to $358.50 a day | $142 for 3 days at Lensrentals |

By this arithmetic, the rule's day rate for the camera is 3.4 to 5.2 times the regional house's day rate for an FX3 ($429.80 ÷ $125 and $644.70 ÷ $125). For the wireless set, the rule asks for more in one day than Lensrentals charges for three.

**Why it misleads.** This course's reasoning: a percentage of replacement value describes your cost, not the client's choice. A client who can rent the same item from a rental house will compare. A rule that ignores the price list prices you out of the jobs where the client checks, and teaches you to expect income the market may not pay. This course could not test whether clients pay the rule's rates, so it treats the rental house's price as the figure a client can check, and the guide's rule as a claim.

**What a kit fee does buy the client.** The regional house asks a renter to show a certificate of insurance for items of $3,000 or more, and may ask a first-time renter for a $1,000 credit card hold. A client who pays your kit fee skips the pickup, the return, the certificate and the hold, and gets gear prepped by the person who will run it. That convenience is real, by this course's reading, but it has a ceiling: the client can still rent the gear and hire you to run it.

**How to write it on an invoice.** Keep the kit fee on its own line, apart from your day rate. The Rate Guide says so, and the IRS instructions quoted in lesson 3 ask a payer to split a machine's rent from its operator's charge.

:::reveal What does The Rate Guide give as the industry norm for kit rental? ||| 10 to 15 percent of the replacement value of the equipment per day.

:::reveal By this course's arithmetic, what day rate does the rule give for a $4,298 FX3A, against the regional house's $125? ||| $429.80 to $644.70, which is 3.4 to 5.2 times the house's day rate.

:::reveal Why does this course say a percentage of replacement value misleads? ||| It describes your cost, not the client's choice; a client who can rent the same item for less from a rental house will compare.

## Sources
- ${RATE_GUIDE} Locator: the kit rental rates paragraph and its examples.
- ${FOCUS_FX3A} Locator: price line.
- ${TERADEK_B6} Locator: price line.
- ${RH_FX3} Locator: "1 Day" price line.
- ${LR_FX3A} Locator: rental price table, 3-day row.
- ${LR_BOLT} Locator: rental price list, 3-day row.
- ${RH_POLICIES} Locator: insurance requirement and the credit card authorization paragraph.
- ${IRS_1099} Locator: "Box 1. Rents", the machine rentals paragraph.`,
    },
    {
      slug: "your-rate-sheet",
      title: "14 · Build your own rate sheet",
      section: "4 · Pricing",
      recallContent: [
        {
          prompt: "By this course's arithmetic, how does the 10 to 15 percent rule's day rate for a Bolt 6 LT set compare with Lensrentals' price?",
          answer: "The rule gives $239 to $358.50 a day, more than Lensrentals' $142 for three days.",
        },
        {
          prompt: "What does a client who pays a kit fee skip, compared with renting from the regional house?",
          answer: "The pickup, the return, the certificate of insurance and the credit card hold; and the gear arrives prepped by the person who will run it.",
        },
      ],
      body: `**An exercise, with a worked sample.** Build a one-page rate sheet for the gear you own or plan to buy. It turns the last three lessons into numbers you can defend to a client and to yourself.

**Step 1: date it.** Write "Rates as of" and the date at the top. Every price on it will change; the date tells you when to look again.

**Step 2: one row per item or package.** For each, fill in:

- What it is, and what is included (lesson 10).
- Replacement value: what it would cost new today, with the source and the date (lesson 9).
- The market: a regional house's day and week price; a house that prices by length, at 3 and 7 days; and a comparable platform listing, if there is one (lesson 11).

**Step 3: your prices, with your rules in words.** A day rate. A weekend rule (one day, like the platform, or 1.5 days, like the regional house). A week rule (3 days, 4.5 days, or your own). Write the rule, not just the number, so a renter can predict the bill.

**Step 4: what reaches you.** Subtract the platform's fee (lesson 12). If you rent direct, subtract card fees and your time instead.

**Step 5: your kit fee when you operate.** On its own line, priced against what the client could pay a rental house for the same package (lesson 13).

**Step 6: your terms.** What you require before gear leaves: ID, a deposit or card hold, insurance or a waiver. Section 5 covers each.

**A worked sample.** Every price for "your" gear below is an assumption to show the method, not advice.

| | Market (October 21, 2026) | Your price (assumption) | Reaches you |
|---|---|---|---|
| FX3-class body with handle, battery, charger | Regional house $125 a day, $562.50 a week; FX3 A at Lensrentals $155 for 3 days | Platform: $100 a day; weekend counts 1 day; week counts 3 days | $85 a billed day after the 15 percent fee |
| Same, with you operating | Same | Kit fee $110 a day, its own invoice line | $110, less your prep time and upkeep |

**What a platform rewards.** ShareGrid ranks listings partly on "Fair Market Pricing", which it explains as "Set competitive and reasonable rental prices to attract renters and improve your ranking." A rate sheet built from the market is how you show that.

**When to review it.** This course suggests two triggers: a fixed date (every three months, say), and any time a newer model of something you own appears on a rental house's list (lesson 6).

:::reveal Why does this lesson tell you to write your weekend and week rules in words, not just numbers? ||| So a renter can predict the bill; the market has no single rule (a weekend is 1 day on the platform and 1.5 at the regional house).

:::reveal In the worked sample, what reaches the owner from a $100 platform day? ||| $85 a billed day, after the 15 percent owner fee.

:::reveal What does ShareGrid's "Fair Market Pricing" factor tell owners to do? ||| "Set competitive and reasonable rental prices to attract renters and improve your ranking."

## Sources
- ${RH_FX3} Locator: price lines.
- ${RH_POLICIES} Locator: weekend pricing paragraph.
- ${LR_FX3A} Locator: rental price table, 3-day row.
- ${SG_SHOOT_DAYS} Locator: weekend and "Full week" rules.
- ${SG_FEES} Locator: "Rentals", owner fee.
- ${SG_BEST_MATCH} Locator: "Fair Market Pricing".`,
    },
    // @@QUIZ-4@@

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5: Protection
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-rental-agreement",
      title: "15 · The rental agreement",
      section: "5 · Protection",
      recallContent: [
        {
          prompt: "Name the six steps of this course's rate sheet.",
          answer: "Date it; one row per item or package with the market prices; your prices with your weekend and week rules in words; what reaches you after fees; your kit fee on its own line; your terms.",
        },
        {
          prompt: "What does ShareGrid's \"Fair Market Pricing\" factor tell owners?",
          answer: "\"Set competitive and reasonable rental prices to attract renters and improve your ranking.\"",
        },
      ],
      body: `${QR("an attorney who drafts equipment rental agreements in the learner's state, to check this lesson's reading of the published policies and its checklist")}

**What this lesson does.** It reads one rental house's published policies and terms as a working example of what a rental agreement covers. It is not a template and not legal advice. Which terms a court will enforce depends on the law of your state, which is why this lesson waits for an attorney's review.

**What one house's terms cover.** The regional rental house's policies and terms page, read on October 21, 2026, covers at least nine subjects:

1. **Who may rent.** "You must be at least 21 years of age", with "a valid and current Driver's License or equivalent State/government issued ID" and "a valid and active credit card". The house scans the ID "to have on hand and attach to the customer profile", and if someone else picks up the order, "a copy of their ID will need to be presented at pick-up."
2. **Money held.** From first-time renters, a card authorization of "$1000.00 (or full value of the rental equipment, whichever is less)."
3. **Insurance.** A certificate of insurance for reservations that include items of $3,000 or more, and proof of insurance from "All first-time renters". Without a valid certificate, "the renter agrees to full responsibility for any damages or replacement costs that may occur." Lesson 17 reads the certificate's terms.
4. **Who bears the risk, and until when.** The customer "shall continue to bear any and all risks of loss and/or damage to the Equipment" until it is returned and "verified ... as undamaged and in working condition."
5. **How the gear may be used.** No use that would "subject it to abnormal or hazardous conditions", no alterations without written consent, and "Customer shall not attempt to service or repair any of the Equipment".
6. **Time.** "Rentals must be returned by 10am the day after the last reserved date", and late charges "continue to accrue at the rates set forth in the rental contract."
7. **Fees for condition.** Cleaning fees, a "$5 per cap fee for any missing lens/body/rear cap", and a $25 sensor cleaning fee.
8. **Non-return.** If a renter fails to return equipment or communicate, the house "will consider equipment stolen and will make all efforts to recover", and "Any and all costs to effect recovery will be the responsibility of you, the renter."
9. **The legal frame.** The agreement "constitutes a lease and not a sale"; the customer may not "sublease the Equipment to any other person or entity without consent"; the customer agrees to indemnify the house for claims arising from use of the equipment; and a governing-law clause names a state and the county where any case will be heard.

**When a platform is in the middle.** On ShareGrid, the platform's rules supply much of this. Pickup and return times apply "Unless you arrange otherwise with the owner"; "All rentals require some type of coverage"; and an owner may add a late fee, typically "a one-day rental fee", when items come back late. Read the platform's rules as part of your agreement, and do not promise a renter anything that contradicts them.

**A checklist for your own agreement.** This course's list, for the attorney to review: the parties and their ID; the items, with serial numbers and replacement values (lesson 9); pickup and return times; prices and your weekend and week rules; the deposit or card hold; the insurance or waiver required; who bears the risk until check-in; permitted use and no self-repair; condition, cleaning and missing-part fees; late fees; what happens on non-return; cancellation; and signatures.

:::reveal Until when does the regional house's customer bear the risk of loss or damage? ||| Until the equipment is returned and verified as undamaged and in working condition.

:::reveal What does the house say happens if a renter fails to return equipment or communicate? ||| It will consider the equipment stolen and make all efforts to recover it, at the renter's cost.

:::reveal Name four subjects this course's agreement checklist covers. ||| Any four of: parties and ID; items with serial numbers and replacement values; pickup and return times; prices and rules; deposit or hold; insurance or waiver; risk until check-in; permitted use and no self-repair; condition and cleaning fees; late fees; non-return; cancellation; signatures.

## Sources
- ${RH_POLICIES} Locator: "Policies and Terms" (eligibility, ID scans, first-time renters); "Terms of Rental" (return time, late charges, insurance); "Return"; "Use of Equipment"; "Additional Fees"; "Additional Rental Terms"; "Governing Law"; "Indemnification".
- ${SG_SHOOT_DAYS} Locator: pickup and return times, "Unless you arrange otherwise with the owner".
- ${SG_COVERAGE} Locator: first paragraph.
- ${SG_DAMAGE} Locator: handling missing items, late returns.`,
    },
    {
      slug: "waivers-are-not-insurance",
      title: "16 · Damage waivers are not insurance",
      section: "5 · Protection",
      recallContent: [
        {
          prompt: "What does the regional house's agreement say it is, and what may the customer not do with the equipment?",
          answer: "It \"constitutes a lease and not a sale\", and the customer may not sublease the equipment without consent.",
        },
        {
          prompt: "Under the regional house's terms, how much must a first-time renter allow on a card hold?",
          answer: "$1,000, or the full value of the rental equipment, whichever is less.",
        },
      ],
      body: `${QR("a licensed insurance agent who writes production equipment coverage, to check this lesson's reading of the waiver and protection pages")}

**Two different promises.** An insurance policy is a contract with an insurer. A damage waiver is a promise from a platform or a rental house about how much a renter will owe if something goes wrong. Renters often treat them as the same thing. The platform's own page says they are not.

**ShareGrid, in its own words.** "Damage Only and Damage + Theft coverage options are not insurance policies."

- **Damage Only** "Provides coverage exclusively for physical damage to the gear" and is "Available for rentals with a cumulative replacement value under $6,000."
- **Damage + Theft** "Provides protection against both physical damage and theft if the rental is stolen from the renter." Its own page calls it a "Loss Damage Waiver" and says "The renter, not the owner, is responsible for a 12% fee if there is rental damage or theft", based on "the replacement value listed on the rental's listing". It applies to "most listings with a replacement value of up to $30,000."
- Excluded: "Wear and Tear: Damages such as scratches or dents resulting from regular use are not eligible." and "Any damage resulting from the renter's negligence is also excluded." Every claim is "subject to a comprehensive review by ShareGrid."
- A renter may also use outside insurance, "accepted only after completing coverage verification."

**What ShareGrid tells owners.** "Owners are not required to carry insurance to list their gear on ShareGrid." "The responsibility to cover the gear lies with the renters." And from the missing-items policy: "Insurance and damage waivers do not cover missing items."

**A rental house's version.** Lensrentals' Lenscap plans are "optional add-ons that limit your liability". With Lenscap, "your liability is limited to the lesser of the cost to repair the equipment or 10% of the replacement cost", up to a stated maximum of $100,000, for accidental damage "as long as you can return it to us." Lenscap+ adds cover for "situations that make it impossible to return the equipment that you rented", such as theft.

**Worked examples of the rules.** This course's arithmetic, with made-up values:

- A Damage + Theft claim on a listing with a $5,000 replacement value: the renter's fee is 12 percent, $600.
- A Lenscap renter damages an item with a $4,000 replacement value and a $1,000 repair: the renter owes the lesser of $1,000 or $400, so $400.

**Where the owner is still exposed.** This course's reading of those pages: a waiver limits what the renter owes; it does not insure you. Wear and tear, damage the review finds was negligence, missing items, values above the waiver's limits, and the bookings you lose while gear is out for repair all fall outside what these pages describe. Lesson 17 covers insurance you buy for yourself, and lesson 18 covers gear that never comes back.

:::reveal What does ShareGrid say about its Damage Only and Damage + Theft options? ||| They "are not insurance policies."

:::reveal Under Damage + Theft, who pays the 12 percent fee, and on what is it based? ||| The renter, not the owner, based on the replacement value listed on the rental's listing.

:::reveal With Lenscap, what does a renter owe for damage? ||| The lesser of the cost to repair the equipment or 10 percent of the replacement cost, up to a $100,000 maximum.

## Sources
- ${SG_COMPARE} Locator: the waiver-status sentence and the descriptions of Damage Only, Damage + Theft and third-party insurance.
- ${SG_THEFT} Locator: the 12 percent fee, the $30,000 limit and the exclusions.
- ${SG_COVERAGE} Locator: the owner insurance sentence and "The responsibility to cover the gear lies with the renters."
- ${SG_MISSING} Locator: "Insurance and damage waivers do not cover missing items."
- ${LR_LENSCAP} Locator: the plan description, the liability limit and its footnote, and the Lenscap+ paragraph.`,
    },
    {
      slug: "insurance-for-owned-gear",
      title: "17 · Insurance for owned gear and for liability",
      section: "5 · Protection",
      recallContent: [
        {
          prompt: "In this course's worked example, what does a Lenscap renter owe for a $1,000 repair on an item with a $4,000 replacement value?",
          answer: "$400, the lesser of the $1,000 repair or 10 percent of the replacement value.",
        },
        {
          prompt: "Name three things this course says still fall outside what the waiver pages describe.",
          answer: "Any three of: wear and tear; damage the review finds was negligence; missing items; values above the waiver's limits; bookings lost while gear is out for repair.",
        },
      ],
      body: `${QR("a licensed insurance agent who writes production equipment and small-business coverage, to check every statement about coverage and every question this lesson tells the learner to ask")}

**Your home policy is probably not enough.** The Insurance Information Institute says: "A typical homeowners policy provides only $2,500 coverage for business equipment, which is usually not enough to cover all of your business property." It describes three routes: a homeowners endorsement ("For as little as $25 you can raise the policy limits from $2,500 to $5,000", and some insurers allow up to $10,000), an in-home business policy, and a businessowners policy (BOP).

**Gear that travels: inland marine.** The Institute explains that, unlike marine insurance for goods moved over water, inland marine insurance covers products, materials and equipment moved over land, by truck or train, or while a third party holds them in storage. It names "Photography equipment" among the specialty equipment it can cover, and adds that "Collisions and cargo theft are the two most frequent causes of inland marine losses." The International Risk Management Institute (IRMI) defines the policy rental owners hear about most: "An equipment floater is property insurance covering equipment that is often moved from place to place. It is a form of inland marine insurance."

**Liability is a separate question.** The Institute: "Any enterprise can be sued." Liability insurance "pays damages for which the business is found liable, up to the policy limits, as well as attorneys' fees and other legal defense expenses." The regional rental house's certificate requirements say "General Liability Insurance may be required depending on equipment use case." A client may ask the same of you.

**What a rental house asks its renters to carry.** Read as a model of the terms that matter: "Rented Equipment or Inland Marine Equipment Floater Insurance required"; "No 'unattended vehicle' exclusion"; a named loss payee; and coverage that "is replacement cost and includes transit and world-wide coverage."

**What prices looked like, as dated examples.** On October 21, 2026, Athos Insurance listed minimum premiums of "$495" for "Annual Production Equipment: (Owned and/or Rented)", "$250" for "Short-Term Rented Equipment", and a start of "$220" for hobbyists or private events, with deductible options of $250, $500, $1,000 or $2,500. Its form asks, "How much of your total owned equipment do you rent to others?", and entering 0 means that coverage is not added. Insureon, a broker, reported that small businesses buying through it paid "an average of $48 per month" for inland marine insurance, with "Annual premiums" from "around $150 to over $4,500 per year". These are minimums and averages, not a quote for your gear.

**Questions to ask an agent.** This course's list, for the reviewer to check:

1. Does the policy cover my owned gear while it is rented to others, and up to what amount?
2. Does it cover voluntary parting (lesson 18)?
3. Is there an unattended-vehicle exclusion?
4. Does it pay replacement cost, and is transit covered?
5. What is the deductible, and is it different for some losses?
6. Does it schedule items by serial number, using my asset record (lesson 9)?
7. What general liability limit do my clients ask for, and does this policy include it?

:::reveal How much coverage does the Insurance Information Institute say a typical homeowners policy gives business equipment? ||| Only $2,500, which is usually not enough to cover all of your business property.

:::reveal How does IRMI define an equipment floater? ||| Property insurance covering equipment that is often moved from place to place; a form of inland marine insurance.

:::reveal What does Athos's form ask about equipment rented to others, and what happens if you enter 0? ||| How much of your total owned equipment you rent to others; entering 0 means that coverage is not added.

## Sources
- ${III_HOME_BUSINESS} Locator: first paragraph; "Homeowners Policy Endorsement"; "In-Home Business Policy/Program"; "Businessowners Policy (BOP)".
- ${III_INLAND_MARINE} Locator: first paragraph; the list of specialty equipment.
- ${IRMI_FLOATER} Locator: the definition.
- ${III_BASICS} Locator: "Major Coverages", item 2, "Liability Insurance".
- ${RH_POLICIES} Locator: "Certificate of Insurance Requirements".
- ${ATHOS} Locator: minimum premiums; deductible selector; the rented-to-others question.
- ${INSUREON} Locator: the average monthly cost and the annual range.`,
    },
    {
      slug: "theft-and-non-return",
      title: "18 · Theft, non-return and the guarantee's limits",
      section: "5 · Protection",
      recallContent: [
        {
          prompt: "What did Athos list as the minimum premium for annual production equipment, owned and/or rented, on October 21, 2026?",
          answer: "$495.",
        },
        {
          prompt: "Name three questions this course tells you to ask an insurance agent.",
          answer: "Any three of: owned gear while rented to others; voluntary parting; an unattended-vehicle exclusion; replacement cost and transit; the deductible; scheduling by serial number; the general liability limit.",
        },
      ],
      body: `${QR("a licensed insurance agent, for the voluntary parting coverage and exclusion, and an attorney for the police-report and written-demand steps")}

**The loss owners fear most.** A renter takes the gear and never brings it back. ShareGrid's guarantee page names it: "This scenario is known as voluntary parting. This is a criminal act sometimes called 'theft by fraud' or 'theft by false pretenses' and should be reported to law enforcement." It adds: "These cases are extremely rare, but when they occur, they can be devastating to the gear's owner."

**What the platform's guarantee covers, and its limits.** ShareGrid's Owner Guarantee offers "up to $20,000 in cumulative Replacement Value for Listings rented and picked up in person, and up to $7,500 in cumulative Replacement Value for Listings rented out using ShareGrid's shipping feature." Its limits, in its own words:

- "This is a cumulative limit, not a per-rental limit." A $15,000 and a $10,000 listing out at once are protected up to $20,000, not $25,000.
- A listing, or a package, worth more than $20,000 is not protected.
- "There is a maximum of two (2) eligible claims per 12 calendar months for each Owner account."
- An owner who has "an insurance policy that covers someone renting your Listing and not returning it" is not eligible and must claim on that policy.
- It does not cover "Loss of use or ongoing rental fees" before you are reimbursed, or gear not "personally picked up by the Renter from the Owner" unless shipped through ShareGrid's tracked shipping.

**What it asks of you.** Notify ShareGrid "within 48 hours of the rental's end date". If the gear is not back within 72 hours, ShareGrid recommends a police report "for theft by fraud or theft by false pretenses", and notes that some places "may require you to send a written demand to the Renter" first. A theft claim needs a copy of the police report, confirmation of a criminal investigation, and any information or footage that helps.

**Check the ID in person.** ShareGrid's owner guide: "Always check the renter's government-issued ID at gear pickup." "Ensure that the name on the ID matches the name listed in the rental conversation thread on ShareGrid." And: "Please refrain from taking photos of the renter's or an authorized person's ID", because ShareGrid already keeps a copy from sign-up.

**Insurance for the same loss.** The guarantee page recommends "voluntary parting coverage" above its limits, and names Athos Insurance as the partner that provides policies bought through ShareGrid accounts. Athos sells "Voluntary Parting and/or Conversion" as "(Optional Coverage)" and explains: "If you are tricked into renting your equipment to a fraudulent client, where the client does not return or disappears with your equipment." An IRMI article on an equipment coverage form written for farm machinery lists "Voluntary parting" among that form's additional excluded causes of loss. This course's reading: an equipment policy may exclude exactly this loss unless you add it, so ask (lesson 17, question 2).

**Five habits.** This course's advice, from the pages above: hand gear only to the named renter after checking ID; prefer local pickup when the guarantee depends on it; keep values and item lists current (lesson 9); keep total value out at one time under the limits you rely on; and put the 48-hour deadline in your calendar the moment a rental is late.

:::reveal What does ShareGrid call the scenario where a renter does not return the gear? ||| Voluntary parting, a criminal act sometimes called theft by fraud or theft by false pretenses.

:::reveal How much does ShareGrid's guarantee cover for gear picked up in person, and is the limit per rental? ||| Up to $20,000 in cumulative Replacement Value; it is cumulative, not per rental.

:::reveal Within how many hours must an owner notify ShareGrid of an unreturned rental? ||| Within 48 hours of the rental's end date.

## Sources
- ${SG_GUARANTEE} Locator: opening paragraph; "Why does ShareGrid offer this?"; "Do I still need voluntary parting coverage?" and its examples; "Eligibility"; "Making a claim"; "Exclusions".
- ${SG_ID} Locator: the ID check, the name match and the request not to photograph IDs.
- ${ATHOS} Locator: "(Optional Coverage) Voluntary Parting and/or Conversion" and its explanation.
- ${IRMI_MAMECF} Locator: the list of additional excluded causes of loss.`,
    },
    // @@QUIZ-5@@

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6: Operations
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "prep-and-test",
      title: "19 · Prep and test before every rental",
      section: "6 · Operations",
      recallContent: [
        {
          prompt: "How many eligible claims per 12 calendar months does ShareGrid's Owner Guarantee allow each owner account?",
          answer: "Two.",
        },
        {
          prompt: "What does ShareGrid ask owners not to do with a renter's ID at pickup?",
          answer: "Not to take photos of it; ShareGrid already keeps a copy from sign-up.",
        },
      ],
      body: `**The standard renters expect.** ShareGrid's tips for owners set it plainly: "Keep your equipment clean, in good working order, and ready for use." "Be accessible to resolve any issues within 24 hours of the renter picking up the equipment." "Arrive on time for both the pick-up and return exchanges." And "Check the renter's ID at the start of the rental." The regional rental house promises its own customers that "all Equipment will be operational to accepted manufacturer's specifications" when delivered. A renter comparing you with a house will expect no less.

**Clear the last renter out of the camera.** Sony's help guide for the FX3 says that before lending a camera you should "be sure to perform the following operation to protect private information. Select [Setting Reset] → [Initialize]." Initializing deletes registered faces, certificates, access point information, FTP and cloud connection settings, and streaming connection information. Two details matter for a rental owner:

- Even [Initialize] does not reset [Picture Profile] settings, except PPLUT 1 to 4, so a look the last user built may still be in the camera. Check it.
- "Be sure not to eject the battery pack while resetting."

**Wipe the cards.** Sony warns that formatting "may not completely delete the data on the memory card" and recommends data deletion software before lending a card. The regional rental house formats rented cards "immediately upon return" and asks renters to make sure "all footage has been properly transferred off" first. If you include cards, tell renters the same, in writing.

**Update the software, with power to spare.** Sony's Version screen shows the body's firmware and, with a compatible lens attached, the lens's. "Updating can be performed only when the remaining battery level is 51% or more." Update between rentals, never the morning of one, and test after.

**A pre-rental checklist.** This course's list, built from the pages above and lessons 9 and 10:

1. Charge every battery; test each in the camera (lesson 20).
2. Record a short test clip; play it back; check every output the package promises.
3. Check firmware versions against your asset record.
4. Reset or initialize the camera, then set any defaults you promise renters.
5. Wipe every card with data deletion software.
6. Clean what renters will touch and look through (lesson 21).
7. Photograph each item, including serial numbers and any marks.
8. Pack against the kit list, and have the renter confirm the list at handover.

:::reveal Which Sony operation does the help guide say to perform before lending a camera? ||| [Setting Reset] → [Initialize], to protect private information.

:::reveal What does Sony say about [Picture Profile] settings when you initialize? ||| They are not reset, except PPLUT 1 to 4.

:::reveal What battery level does Sony require for a firmware update? ||| 51 percent or more.

## Sources
- ${SG_TIPS} Locator: "Maintain Your Gear", "Be Available", "Be Punctual", "Verify ID".
- ${RH_POLICIES} Locator: "Return", the warranty sentence; "Additional Fees", "Immediate Card Format".
- ${SONY_LENDING} Locator: "Notes on lending, transferring, or discarding the camera to others"; "Notes on lending, transferring, or discarding a memory card to others".
- ${SONY_RESET} Locator: "Note", the Picture Profile and battery sentences.
- ${SONY_VERSION} Locator: the first two sentences and "Note".`,
    },
    {
      slug: "batteries",
      title: "20 · Batteries: care, travel and shipping",
      section: "6 · Operations",
      recallContent: [
        {
          prompt: "What does the regional rental house do with rented cards on return, and what does it ask renters to do first?",
          answer: "It formats them immediately on return, and asks renters to make sure all footage has been transferred off first.",
        },
        {
          prompt: "Name four steps of this course's pre-rental checklist.",
          answer: "Any four of: charge and test batteries; record and play back a test clip and check outputs; check firmware; reset or initialize; wipe cards; clean; photograph each item and serial number; pack against the kit list with the renter confirming it.",
        },
      ],
      body: `**Batteries are where rentals fail.** A camera that will not power on ends the booking. Treat batteries as their own inventory, with their own log.

**What the camera's maker says.** Sony's help guide for the FX3:

- Use only "genuine Sony branded battery packs" in the camera.
- "Do not expose the battery pack to water. The battery pack is not water-resistant."
- "Do not leave the battery pack in extremely hot places, such as in a car or under direct sunlight."
- Sony recommends charging "in an ambient temperature of between 10 °C and 30 °C (50 °F and 86 °F)."
- "The charged battery pack will discharge little by little even if you do not use it."
- "Do not continuously or repeatedly charge the battery pack without using it if it is already fully charged or close to fully charged. Doing so may cause a deterioration in battery performance."
- "Battery performance decreases in low temperature environments."
- For storage: "charge the battery pack and then fully discharge it in the camera at least once a year before storing it. Store the battery in a cool, dry place after removing it from the camera."

Larger batteries from other makers come with their own manuals. Follow each maker's instructions for its own packs.

**A battery log.** This course suggests one line per battery: a number marked on the pack, the date bought, and a note each time its run time in your test drops. Sony says that when "the available time of the battery is shortened significantly, it is probably time to replace the battery pack." The log tells you when that day has come, before a renter finds out.

**Flying with spares.** The Transportation Security Administration says spare lithium batteries "must be carried in carry-on baggage only." With airline approval, a passenger may also carry "up to two spare larger lithium ion batteries" of 101 to 160 watt hours, a size that "covers ... some larger batteries used in professional audio/visual equipment." A renter flying with your kit needs to know this. Put it in your handover notes.

**Shipping is a regulated act.** Federal hazardous materials rules have a section titled "Lithium cells and batteries" (49 C.F.R. § 173.185), and the person who offers a hazardous material for transport "shall class and describe the hazardous material in accordance with parts 172 and 173" (49 C.F.R. § 173.22(a)(1)). This course does not teach those rules. If you ship batteries to renters, learn your carrier's rules and the federal rules first, or ship the kit without them and have renters supply power.

:::reveal What does Sony recommend for storing a battery pack? ||| Charge it and then fully discharge it in the camera at least once a year before storing, and store it in a cool, dry place outside the camera.

:::reveal Under TSA rules, where must spare lithium batteries travel, and how many larger 101 to 160 watt-hour spares may a passenger carry? ||| In carry-on baggage only; up to two larger spares, with airline approval.

:::reveal Which federal section is titled "Lithium cells and batteries"? ||| 49 C.F.R. § 173.185.

## Sources
- ${SONY_BATTERY} Locator: "Notes on using the battery pack"; "Notes on charging the battery pack"; "Effective use of the battery pack"; "How to store the battery pack"; "On battery life".
- ${TSA_LI} Locator: the carry-on rule and the 101 to 160 watt-hour paragraph.
- ${CFR_173_185} Locator: section title.
- ${CFR_173_22} Locator: paragraph (a)(1).
- ${RH_POLICIES} Locator: "Additional Fees", "Immediate Card Format".`,
    },
    {
      slug: "cleaning",
      title: "21 · Cleaning lenses, sensors and bodies",
      section: "6 · Operations",
      recallContent: [
        {
          prompt: "In what temperature range does Sony recommend charging the FX3's battery pack?",
          answer: "Between 10 °C and 30 °C (50 °F and 86 °F).",
        },
        {
          prompt: "What does this course say to do if you will ship a kit but have not learned the battery shipping rules?",
          answer: "Ship the kit without batteries and have renters supply power, or learn the carrier's and the federal rules first.",
        },
      ],
      body: `**Follow the maker, not habit.** Cleaning is where well-meant care does damage. The rules below are Sony's, from the FX3 help guide. Lenses and bodies from other makers come with their own instructions; read them.

**Lenses.**

- "Do not use a cleaning solution containing organic solvents, such as thinner, or benzine."
- "When cleaning the lens surface, remove dust with a commercially available blower."
- For dust that sticks, "wipe it off with a soft cloth or tissue paper slightly moistened with lens cleaning solution. Wipe in a spiral pattern from the center to the outside."
- "Do not spray lens cleaning solution directly onto the lens surface."

**The body.**

- "Do not touch the parts of the product inside the lens mount, such as a lens signal contact." Use a blower inside the mount, and do not use a spray-type blower, which "may cause a malfunction".
- Clean the outside "with a soft cloth slightly moistened with water, then wipe the surface with a dry cloth."
- Keep it away from "thinner, benzine, alcohol, disposable cloths, insect repellent, sunscreen or insecticide", and do not leave it "in contact with rubber or vinyl for a long time."
- Sony warns that wiping the monitor firmly with tissue paper may scratch it; remove dust gently, then use a soft cloth.

**The sensor.** Sony's steps: confirm the battery is charged, run [Sensor Cleaning] from the menu, then "Use a commercially available blower to clean the image sensor surface and the surrounding area", holding the camera "slightly face downward so that the dust falls out." Its cautions: the battery level must be "51% or more"; "Do not use a spray type blower"; do not put the blower's tip past the lens mount; "do not blow too hard". And: "If the dust remains even after you cleaned the product as described, consult the service facility."

**What the market charges for dirt.** The regional rental house charges $20 per item for gear returned with odors or a dirty exterior, up to 25 percent of the rental fee for gear that comes back "offensively dirty", and "$25 per sensor that is returned needing cleaning". It asks renters "do not try to clean the sensor yourself as it could damage the sensor." Your agreement can name cleaning fees too (lesson 15), and your listing can ask renters not to clean sensors.

**Cleaning is time, and time is cost.** This course's reasoning: every rental adds a cleaning step to the turnaround, and a sensor that a blower will not clear means a trip to a service facility and days out of rental. Count both in your per-booking costs (lesson 25).

:::reveal How does Sony say to wipe a lens with lens cleaning solution? ||| With a soft cloth or tissue slightly moistened with the solution, in a spiral from the center to the outside, never spraying solution on the lens.

:::reveal What does Sony say to do if sensor dust remains after cleaning with a blower? ||| Consult the service facility.

:::reveal What did the regional house charge per sensor returned needing cleaning, and what does it ask renters not to do? ||| $25 per sensor, and it asks renters not to clean the sensor themselves.

## Sources
- ${SONY_CLEANING} Locator: "Cleaning the lens"; "Cleaning the camera body"; "Cleaning the product surface"; "Cleaning the monitor".
- ${SONY_SENSOR} Locator: the numbered steps and "Note".
- ${RH_POLICIES} Locator: "Additional Fees", cleaning and sensor cleaning fees.`,
    },
    {
      slug: "check-in-and-retirement",
      title: "22 · Check-in, turnaround, repair and retirement",
      section: "6 · Operations",
      recallContent: [
        {
          prompt: "Name two things Sony says to keep the camera body away from when cleaning.",
          answer: "Any two of: thinner, benzine, alcohol, disposable cloths, insect repellent, sunscreen, insecticide; also long contact with rubber or vinyl.",
        },
        {
          prompt: "What battery level does Sony require before sensor cleaning?",
          answer: "51 percent or more.",
        },
      ],
      body: `**Check-in starts the clock.** ShareGrid tells owners to "Report the damage within 24 hours of the equipment's return" and to "take detailed photographs to capture the extent and nature of the damage". Late reports may affect coverage. For missing items, "Renters have 24 hours to locate and return the item," and owners may add a late fee of one day's rental. So inspect at handback, not next week.

**A check-in routine.** This course's steps, matched to those deadlines:

1. With the renter present, count every item against the kit list (lesson 10).
2. Power on, record, play back; test every output.
3. Photograph each item from the same angles as at check-out (lesson 19), including serial numbers.
4. Note anything missing or damaged, and tell the renter on the spot.
5. Report through the platform within 24 hours if anything is wrong.
6. Then clean, charge, reset, wipe and log, so the kit is ready for the next renter.

**Turnaround is real time.** ShareGrid makes pickup and return days free because they "are intended for checking, prepping, and transporting gear, not filming." Those days are yours to fill with the routine above. This course's reasoning: if check-in, cleaning, charging and testing take a few hours per booking, count them as a cost of every booking (lesson 25).

**Repairs go to the maker's service.** The regional rental house forbids renters to repair its gear: "Customer shall not attempt to service or repair any of the Equipment". Sony's guide sends sensor dust it cannot clear to "the service facility". This course's advice: send repairs to an authorized service center, keep the receipts in the asset record (for listed property, IRS Publication 946's records rule names "maintenance and repair costs" among the expenditures your records must support), and mark the item unavailable until it is back and tested.

**Retirement.** Gear leaves the business in one of three ways: it wears out, it stops renting, or you sell it. Each leaves a record.

- **Batteries** retire when their run time falls (lesson 20).
- **For tax purposes**, IRS Publication 946 says "You stop depreciating property either when you have fully recovered your cost or other basis or when you retire it from service, whichever happens first."
- **When you sell**, Publication 583's asset record asks for when and how you disposed of the asset, the selling price, and the expenses of sale. Selling through ShareGrid carries "A 5% fee" on seller transactions.
- **Before it goes**, Sony says to initialize the camera, and "When discarding a memory card, we recommend that you physically destroy it."

:::reveal Within how long after return does ShareGrid tell owners to report damage? ||| Within 24 hours of the equipment's return, with detailed photographs.

:::reveal Why does ShareGrid make pickup and return days free? ||| They "are intended for checking, prepping, and transporting gear, not filming."

:::reveal According to IRS Publication 946, when do you stop depreciating property? ||| When you have fully recovered its cost or other basis, or when you retire it from service, whichever happens first.

## Sources
- ${SG_DAMAGE} Locator: reporting deadline and photographs; handling missing items.
- ${SG_MISSING} Locator: the 24-hour window and late fee.
- ${SG_SHOOT_DAYS} Locator: "Pick-up and drop-off days are free".
- ${RH_POLICIES} Locator: "Return", the service and repair sentence.
- ${SONY_SENSOR} Locator: "Note", last item on dust that remains.
- ${IRS_P946} Locator: chapter 1, "When Does Depreciation Begin and End?"; chapter 5, "What Records Must Be Kept?", "Elements of expenditure or use".
- ${IRS_P583} Locator: "Supporting Documents", "Assets".
- ${SG_FEES} Locator: "Buy & Sell", seller fee.
- ${SONY_LENDING} Locator: "Notes on lending, transferring, or discarding a memory card to others".`,
    },
    // @@QUIZ-6@@

    // @@SECTIONS-7-8@@

    // @@FINAL@@
  ],
};
