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

// Rental houses and the peer-to-peer platform
const RH_CINEMA = `Rental House by Roberts Camera. (n.d.-a). *Cinema cameras* [Rental page]. ${READ} https://rentalhouseindy.com/rentals/cameras/cinema-cameras`;
const RH_GIMBALS = `Rental House by Roberts Camera. (n.d.-b). *Gimbals, stabilizers, and sliders* [Rental page]. ${READ} https://rentalhouseindy.com/rentals/camera-supports/gimbals-stabilizers-and-sliders`;
const RH_POLICIES = `Rental House by Roberts Camera. (n.d.-c). *Policies*. ${READ} https://rentalhouseindy.com/policies`;
const RH_FX3 = `Rental House by Roberts Camera. (n.d.-d). *Sony Cinema Line FX3 w/ XLR top handle* [Rental page]. ${READ} https://rentalhouseindy.com/sony-cinema-line-fx3-w-xlr-top-handle`;
const RH_WIRELESS = `Rental House by Roberts Camera. (n.d.-e). *Wireless video transmission systems* [Rental page]. ${READ} https://rentalhouseindy.com/rentals/camera-supports/wireless-video-transmission-systems`;
const LR_LENSCAP = `Lensrentals. (n.d.-a). *Lenscap*. ${READ} https://www.lensrentals.com/lenscap`;
const LR_FX3A = `Lensrentals. (n.d.-b). *Rent a Sony FX3 A (body only)*. ${READ} https://www.lensrentals.com/rent/sony-fx3-a-body-only`;
const LR_BOLT = `Lensrentals. (n.d.-c). *Rent a Teradek Bolt 6 LT 750 3G-SDI/HDMI kit (V-mount)*. ${READ} https://www.lensrentals.com/rent/teradek-bolt-6-lt-750-3g-sdi-hdmi-kit-v-mount`;
const SG = "https://support.sharegrid.com/en/articles/";
const SG_COMPARE = `ShareGrid. (n.d.-a). *Compare ShareGrid damage waiver and insurance options*. ${READ} ${SG}733937-compare-sharegrid-damage-waiver-and-insurance-options`;
const SG_COVERAGE = `ShareGrid. (n.d.-b). *Coverage guidelines for owners on ShareGrid*. ${READ} ${SG}733956-coverage-guidelines-for-owners-on-sharegrid`;
const SG_SHOOT_DAYS = `ShareGrid. (n.d.-c). *How ShareGrid calculates shoot days and pricing (local pickup)*. ${READ} ${SG}748910-how-sharegrid-calculates-shoot-days-and-pricing-local-pickup`;
const SG_BEST_MATCH = `ShareGrid. (n.d.-d). *How the "Best Match" search filter ranks your listings*. ${READ} ${SG}733951-how-the-best-match-search-filter-ranks-your-listings`;
const SG_MISSING = `ShareGrid. (n.d.-e). *Missing rental items policy*. ${READ} ${SG}6005236-missing-rental-items-policy`;
const SG_DAMAGE = `ShareGrid. (n.d.-f). *Navigating equipment damage and missing items for ShareGrid owners*. ${READ} ${SG}733935-navigating-equipment-damage-and-missing-items-for-sharegrid-owners`;
const SG_ID = `ShareGrid. (n.d.-g). *Owner guide: Verifying renter ID at local pickup*. ${READ} ${SG}733945-owner-guide-verifying-renter-id-at-local-pickup`;
const SG_GUARANTEE = `ShareGrid. (n.d.-h). *ShareGrid owner guarantee*. ${READ} ${SG}3282176-sharegrid-owner-guarantee`;
const SG_TIPS = `ShareGrid. (n.d.-i). *Tips for rental owners on ShareGrid*. ${READ} ${SG}733934-tips-for-rental-owners-on-sharegrid`;
const SG_FEES = `ShareGrid. (n.d.-j). *Understanding ShareGrid fees*. ${READ} ${SG}733957-understanding-sharegrid-fees`;
const SG_THEFT = `ShareGrid. (n.d.-k). *Understanding ShareGrid's damage + theft option*. ${READ} ${SG}733952-understanding-sharegrid-s-damage-theft-option`;
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

1. **The rental house.** A regional rental house publishes a price list on its website. On October 21, 2026, it listed a Sony FX3 cinema camera with its XLR top handle at $125 for one day and $562.50 for one week. Its policy page sets the terms: a renter must be at least 21 and show a valid government ID and a credit card, and a reservation that includes items of $3,000 or more needs a certificate of insurance for rented equipment. Lensrentals, a rental house that publishes its prices by rental length, listed the newer FX3 A body at $155 for 3 days and $222 for 7 days.
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

**What a production gives up by renting.** Renting is not free of conditions. The regional rental house requires a certificate of insurance for reservations that include items of $3,000 or more, and it may hold up to $1,000 on the renter's credit card (or the full value of the rental equipment, whichever is less). A production that rents often may weigh those costs against buying.

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
| Kit fee | Your gear, while you operate it | Yes |
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
    // @@QUIZ-1@@

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
    // @@QUIZ-2@@

    // @@SECTIONS-3-8@@

    // @@FINAL@@
  ],
};
