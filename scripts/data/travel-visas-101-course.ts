// Authored "Travel Visas 101: Getting a Visa to Travel Abroad" — a general, plain-language,
// destination-agnostic guide for U.S. citizens/travelers to figuring out and obtaining a visa
// for international travel. Teaches the METHOD (how to research any destination's current
// requirements) rather than memorizing any one country's rules, because those rules change.
// Cited to authoritative sources only: the U.S. State Department (travel.state.gov / USA.gov),
// the official EU/ETIAS sources (travel-europe.europa.eu, home-affairs.ec.europa.eu), and the
// EU Visa Code (EUR-Lex). Every citation was verified against the live official source before
// authoring (WebSearch/WebFetch) — no fabricated per-country rules; the course repeatedly tells
// learners to reconfirm with the destination's own official site, since fees/rules change.
// In the "Travel & Living Abroad" category alongside its sibling, Passports 101
// (content/travel-passport). Ends with a quiz whose every question links back to the lesson
// that teaches the answer (the quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const TRAVEL_VISAS_101_COURSE: AuthoredCourse = {
  title: "Travel Visas 101: Getting a Visa to Travel Abroad",
  description:
    "A clear, destination-agnostic guide for U.S. citizens to figuring out and obtaining a visa when traveling to another country: what a visa is, how to research any destination's current requirements, the four common visa categories, Europe's Schengen Area and the new ETIAS travel authorization, the documents you'll typically need, transit visas, and overstay/entry-exit rules. Teaches the method, not a fixed set of country rules, because requirements change — always confirm with official sources.",
  lessons: [
    {
      slug: "visa-vs-passport",
      title: "1 · What a visa is, and how it differs from a passport",
      body: `A **passport** is your own government's proof of who you are and that you're a citizen of your country. The U.S. Department of State issues and controls U.S. passports. A **visa** is a different thing entirely: it's **permission to enter another country**, granted by *that country's* government, for a specific purpose and length of stay.

The U.S. State Department's own visa system illustrates the general shape every country's visa works the same way: a visa "allows a foreign citizen to travel to a... port of entry... and request permission" to enter, but a visa **does not guarantee entry** — that is a separate decision made by the officer at the border (U.S. Department of State, n.d.-a). The same logic runs in the other direction: once a destination country grants *you* a visa, its own border officer still makes the final call on whether you're admitted, and for how long.

Practical takeaways:

- Not every trip needs a visa. Many countries let U.S. citizens visit for tourism or business without one, for a limited number of days (USA.gov, n.d.).
- When a visa **is** required, it's usually a stamp, sticker, or digital record tied to your passport — not a replacement for it.
- Your passport's own validity matters independently of any visa: most countries require it valid for your entire trip, and many require extra months beyond that (Lesson 5).
- Visa rules are set unilaterally by each country and can change with little notice. The method in this course beats memorizing any one country's rules.

:::reveal What's the difference between a passport and a visa? ||| A passport is issued by your own government and proves who you are and your citizenship. A visa is permission to enter a specific country, issued by that country's government, for a specific purpose and length of time. Having a visa does not guarantee entry — the border officer decides.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). About visas – the basics. Travel.State.gov. https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/frequently-asked-questions/about-basics.html
- USA.gov. (n.d.). Visa requirements for U.S. citizens traveling abroad. https://www.usa.gov/visas-citizens-traveling-abroad`,
    },
    {
      slug: "researching-destination-requirements",
      title: "2 · How to research a destination's requirements",
      body: `Every country sets its own visa rules for U.S. citizens, and those rules **change** — sometimes with only weeks of notice. Don't rely on a blog post, a forum thread, or what a friend needed last year. Use two authoritative sources, in this order:

1. **The U.S. State Department's country information pages** (travel.state.gov). Search "learn about your destination," and the destination's page lists its current entry, exit, and visa requirements, plus a Travel Advisory level, passport-validity rules, and safety/health notes (U.S. Department of State, n.d.-a).
2. **The destination's own official embassy or consulate site** (or its foreign ministry / immigration authority website). This is the *only* place with the authoritative, current application steps, fees, and processing times for that specific country, because the destination government is the one issuing the visa — not the U.S. (USA.gov, n.d.).

Also **enroll your trip in STEP**, the Smart Traveler Enrollment Program: a free State Department service that sends you Travel Advisory updates and safety alerts for your destination, and helps the nearest U.S. embassy reach you in an emergency (U.S. Department of State, n.d.-b). None of this replaces checking the destination's own site before you apply for a visa or book nonrefundable travel.

:::reveal Name the two authoritative sources you should check before any international trip, and one free safety service you should enroll in. ||| The U.S. State Department's country information pages (travel.state.gov) and the destination country's own official embassy/consulate or immigration site. Also enroll your trip in STEP, the Smart Traveler Enrollment Program, for safety alerts.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). International travel checklist. Travel.State.gov. https://travel.state.gov/en/international-travel/planning/checklist.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-b). Smart Traveler Enrollment Program (STEP). Travel.State.gov. https://travel.state.gov/en/international-travel/travel-advisories/smart-traveler-enrollment-program.html
- USA.gov. (n.d.). Visa requirements for U.S. citizens traveling abroad. https://www.usa.gov/visas-citizens-traveling-abroad`,
      recallContent: [
        {
          prompt: "What's the difference between a passport and a visa?",
          answer:
            "A passport is issued by your own government and proves who you are and your citizenship. A visa is permission to enter a specific country, issued by that country's government, for a specific purpose and length of time.",
        },
        {
          prompt: "Does having a visa guarantee you'll be allowed to enter a country?",
          answer:
            "No. A visa is permission to request entry; the border officer at the port of entry makes the final call on whether you're admitted, and for how long.",
        },
      ],
    },
    {
      slug: "visa-categories",
      title: "3 · The four common visa categories",
      body: `Almost every visa a U.S. citizen encounters falls into one of four categories. Knowing the category tells you *how* you'll get permission to enter, before you even look at a specific country:

- **Visa-free / visa-exempt.** No visa needed for a short stay (commonly tourism or business), usually capped at a set number of days. You still need a valid passport, and sometimes proof of onward travel or funds. This is the most common category for U.S. citizens visiting popular destinations, but the allowed length of stay varies by country (USA.gov, n.d.).
- **Visa on arrival.** You don't apply in advance; you request the visa (and usually pay a fee, in cash or by card) at the airport or land border when you arrive. Faster than an embassy visa, but it means you find out you're denied only *after* you've traveled — confirm the country truly offers it to U.S. passport holders before you fly.
- **E-visa / online travel authorization.** You apply online before you travel, upload a passport scan and photo, pay a fee, and receive an approval by email, often linked electronically to your passport rather than stamped in it. Europe's new **ETIAS** (Lesson 4) is this category. Processing can take anywhere from minutes to several weeks, so apply early.
- **Embassy / consulate visa.** You must apply in person or by mail to the destination country's embassy or consulate before you travel, usually with an in-person interview, biometrics, or supporting documents. This is the slowest category, and the one most likely to require an appointment booked well in advance.

Always confirm the current category and requirement with the destination's own official source (Lesson 2) — a country can move between categories (for example, adding an e-visa requirement where none existed before) with little notice.

:::reveal Name the four common visa categories, from least to most advance planning required. ||| Visa-free/visa-exempt (no visa needed for a short stay), visa on arrival (apply at the border), e-visa/online travel authorization (apply online in advance), and embassy/consulate visa (apply in person or by mail before travel, often with an interview).

## Sources
- USA.gov. (n.d.). Visa requirements for U.S. citizens traveling abroad. https://www.usa.gov/visas-citizens-traveling-abroad
- U.S. Department of State, Bureau of Consular Affairs. (n.d.). International travel checklist. Travel.State.gov. https://travel.state.gov/en/international-travel/planning/checklist.html`,
      recallContent: [
        {
          prompt: "What two authoritative sources should you check before any international trip?",
          answer:
            "The U.S. State Department's country information pages (travel.state.gov) and the destination country's own official embassy/consulate or immigration site.",
        },
        {
          prompt: "What free State Department service should you enroll your trip in, and why?",
          answer:
            "STEP, the Smart Traveler Enrollment Program — it sends Travel Advisory updates and safety alerts for your destination and helps the nearest U.S. embassy reach you in an emergency.",
        },
      ],
    },
    {
      slug: "schengen-and-etias",
      title: "4 · Europe's Schengen Area and the new ETIAS",
      body: `Europe is the single most important special case for U.S. travelers, because 29 countries share one common short-stay visa policy: the **Schengen Area**. It includes 25 EU member states plus Iceland, Norway, Switzerland, and Liechtenstein; Cyprus and Ireland are EU members but are **not** part of Schengen (European Commission, n.d.-a). As a U.S. citizen you can currently enter the Schengen Area **visa-free for tourism or business, for up to 90 days within any rolling 180-day period** — not a fixed calendar quota, but a sliding 180-day window counted backward from each day of your stay (European Commission, n.d.-a). The European Commission publishes an official short-stay calculator to check your own dates.

Starting in the last quarter of 2026, most U.S. citizens will also need **ETIAS**, the European Travel Information and Authorisation System: an online pre-travel screening (like a background-check questionnaire, not a full visa) that costs **€20**, is applied for online before departure, and is linked electronically to your passport for **up to three years or until that passport expires**, whichever comes first (European Union, n.d.). As of mid-2026, ETIAS is **not yet collecting applications** — always confirm the current status and launch date on the official site before you travel (European Union, n.d.).

Separately, as of **April 10, 2026**, the EU's **Entry/Exit System (EES)** became fully operational at Schengen borders: it replaces manual passport stamping with an automated system that records your fingerprints, facial image, and entry/exit dates, and automatically flags overstays (European Commission, n.d.-b). Expect biometric checks, and possibly longer border-crossing lines, as this rolls out.

:::reveal How long can a U.S. citizen currently stay in the Schengen Area visa-free, and what new online step is being added for late 2026? ||| Up to 90 days within any rolling 180-day period, visa-free. Starting in the last quarter of 2026, most U.S. citizens will also need to apply online for ETIAS, a €20 travel authorization valid up to three years, before entering the Schengen Area.

## Sources
- European Commission, Migration and Home Affairs. (n.d.-a). Short-stay calculator (90/180-day rule). https://home-affairs.ec.europa.eu/policies/schengen/border-crossing/short-stay-calculator_en
- European Union. (n.d.). ETIAS: European Travel Information and Authorisation System. Travel-Europe.europa.eu. https://travel-europe.europa.eu/etias_en
- European Commission, Migration and Home Affairs. (n.d.-b). Entry/Exit System (EES). https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/entry-exit-system_en`,
      recallContent: [
        {
          prompt: "What are the four common visa categories?",
          answer:
            "Visa-free/visa-exempt, visa on arrival, e-visa/online travel authorization, and embassy/consulate visa.",
        },
        {
          prompt:
            "Which visa category should you be most cautious about, since you only find out if you're denied after you've already traveled?",
          answer:
            "Visa on arrival — you request it at the border rather than in advance, so confirm the destination truly offers it to U.S. passport holders before you fly.",
        },
      ],
    },
    {
      slug: "typical-documents",
      title: "5 · Typical documents you'll need",
      body: `Requirements vary by destination and visa category, but the same document types come up again and again. Gather these early:

- **A valid passport**, with enough validity left. Many countries require it valid for your entire stay; **some, especially in Europe, require at least 6 months of validity beyond your travel dates**, and the Schengen Area specifically requires a passport issued within the last 10 years, valid at least 3 months beyond your planned departure date (U.S. Department of State, n.d.). Check the specific rule for your destination — don't assume 6 months everywhere.
- **Passport-style photos**, sized and formatted to the destination's exact specification (embassy visa applications and some e-visas require these).
- **A travel itinerary**, sometimes including proof of onward or return travel: evidence you plan to leave before your permitted stay ends, commonly a return or onward flight booking.
- **Proof of funds**: evidence you can support yourself during the trip, such as a bank statement or a minimum cash amount, requested by some countries as part of a visa application.
- **Travel/medical insurance.** Some destinations require it outright. The Schengen Area's own visa rules, for example, require travel medical insurance with a **minimum of €30,000** in coverage for emergency treatment, hospitalization, and medical repatriation, valid across the whole Schengen Area for your full stay (European Parliament & Council of the European Union, 2009). Even where insurance isn't mandatory, remember: **the U.S. government does not pay medical or evacuation costs for U.S. citizens abroad** (U.S. Department of State, n.d.).
- **Any destination-specific paperwork**: proof of accommodation, an invitation letter, vaccination records, or notarized consent for a minor traveling with only one parent.

Confirm the exact list for your destination and visa type on its official embassy/consulate site (Lesson 2) — a missing document is one of the most common reasons a visa application is delayed or denied.

:::reveal Name three document types that commonly come up across different countries' visa requirements. ||| Any three of: a valid passport (with enough remaining validity), passport-style photos, a travel itinerary or proof of onward travel, proof of funds, travel/medical insurance, and destination-specific paperwork like proof of accommodation or vaccination records.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.). International travel checklist. Travel.State.gov. https://travel.state.gov/en/international-travel/planning/checklist.html
- European Parliament, & Council of the European Union. (2009). Regulation (EC) No 810/2009 establishing a Community Code on Visas (Visa Code), art. 15. EUR-Lex. https://eur-lex.europa.eu/eli/reg/2009/810/oj/eng`,
      recallContent: [
        {
          prompt: "How long can a U.S. citizen currently stay in the Schengen Area visa-free?",
          answer: "Up to 90 days within any rolling 180-day period.",
        },
        {
          prompt: "What is ETIAS, and roughly what will it cost?",
          answer:
            "A €20 online travel authorization most U.S. citizens will need before entering the Schengen Area starting in the last quarter of 2026, valid up to three years.",
        },
      ],
    },
    {
      slug: "transit-visas",
      title: "6 · Transit visas: passing through vs. entering",
      body: `A **transit visa** is permission to pass *through* a country on the way to another destination — not to visit it. Whether you need one for a layover depends on your nationality, the transit country's rules, how long your layover is, and whether you stay **airside** (inside the secure zone) or have to clear immigration to change terminals or recheck bags.

The United States' own transit visa illustrates the general shape of the concept: its **C-1 transit visa** is for travelers passing through the U.S. "in immediate and continuous transit" to another country, and several travelers are exempted from needing one, including holders of a valid U.S. visitor visa, citizens of Visa Waiver Program countries, and Canadian and Bermudian citizens (U.S. Department of State, n.d.). Many other countries run similar systems for their own airports: some layovers under a set number of hours, staying airside, qualify for **transit without a visa (TWOV)**; longer or overnight layovers, or ones that require clearing immigration, more often require a transit visa.

There's no universal threshold — it varies by country and even by airport. Before booking a connecting itinerary, check the transit country's own official immigration or embassy site (not just the airline's booking flow) for its specific transit rules for U.S. passport holders.

:::reveal What's the difference between a transit visa and a regular entry visa, and what should you check before booking a connecting flight through a country you've never visited? ||| A transit visa permits passing through a country to reach another destination, not visiting it; a regular entry visa permits entering that country as your actual destination. Before booking a connection, check that transit country's own official immigration or embassy site for its layover/transit-visa rules for U.S. passport holders, since there's no universal threshold.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.). Transit visa. Travel.State.gov. https://travel.state.gov/content/travel/en/us-visas/other-visa-categories/transit.html`,
      recallContent: [
        {
          prompt: "Besides a valid passport, name two other documents commonly requested in visa applications.",
          answer:
            "Any two of: passport-style photos, a travel itinerary/proof of onward travel, proof of funds, travel/medical insurance, or destination-specific paperwork.",
        },
        {
          prompt: "Does the U.S. government pay medical or evacuation costs for U.S. citizens who get sick or injured abroad?",
          answer: "No. Travelers need their own travel/medical insurance — the U.S. government does not cover these costs.",
        },
      ],
    },
    {
      slug: "overstays-entry-exit",
      title: "7 · Overstays and entry/exit rules",
      body: `A visa's expiration date and your **authorized length of stay** are two different things. This is true in both directions: on the U.S. side, a visa lets you *seek* entry, but it's the border officer who sets — and records — how long you're actually allowed to stay, separately from the visa's own validity (U.S. Department of State, n.d.-a). The same split exists almost everywhere: **the number on your visa is not the number of days you're allowed in the country** — check your entry stamp, digital arrival record, or the officer's instructions for your actual authorized stay.

**Overstaying** — remaining after your authorized stay ends — has real consequences almost everywhere: fines, detention, deportation, and often a **ban on returning** for months or years, even to countries you've visited safely many times before. In the U.S. itself, an overstay voids the visa automatically and can make someone ineligible for a future visa (U.S. Department of State, n.d.-a) — a preview of how seriously other countries treat the same violation.

Border technology is also changing how overstays get caught. As of April 2026, the EU's Entry/Exit System (Lesson 4) replaced manual passport stamps at Schengen borders with a biometric system that **automatically detects travelers who've exceeded their authorized stay** (European Commission, n.d.-b). Assume that wherever you travel, entry and exit are increasingly tracked electronically, and count your days conservatively.

**Before you fly:** know your exact authorized stay (not just the visa's expiration date), track your days if you're moving between countries in a shared zone like Schengen, and if you need more time, ask about a legal extension *before* your authorized stay runs out — never plan to simply overstay and leave later.

:::reveal What's the difference between a visa's expiration date and your "authorized stay," and what's one real consequence of overstaying? ||| The visa's expiration date is how long the visa document itself is valid for seeking entry; the authorized stay is the actual number of days you're allowed to remain, set by the border officer (or system) at entry — the two numbers can differ. Overstaying can lead to fines, detention, deportation, and a ban on returning to that country for months or years.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). What the visa expiration date means. Travel.State.gov. https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visa-expiration-date.html
- European Commission, Migration and Home Affairs. (n.d.-b). Entry/Exit System (EES). https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/entry-exit-system_en`,
      recallContent: [
        {
          prompt: "What is a transit visa?",
          answer: "Permission to pass through a country on the way to another destination, not to visit it.",
        },
        {
          prompt: "What determines whether you need a transit visa for a layover?",
          answer:
            "It varies by country: your nationality, the transit country's rules, how long the layover is, and whether you stay airside or must clear immigration. There's no universal threshold — always check the transit country's own official source.",
        },
      ],
    },
    {
      slug: "trip-planning-checklist",
      title: "8 · Practice: build your trip-planning checklist",
      exercise: {
        instructions:
          "Fill in each blank with the term from this course, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "A document proving your identity and citizenship, issued by your own government, is your ___.",
            answer: "passport",
            explanation: "Your passport is issued and controlled by your own government (the U.S. Department of State for U.S. citizens).",
          },
          {
            prompt: "Permission to enter another country, issued by that country's government, is called a ___.",
            answer: "visa",
            explanation: "A visa does not guarantee entry — the destination's border officer makes the final call.",
          },
          {
            prompt: "The free State Department service that sends safety alerts for your registered trip is called ___.",
            answer: "STEP",
            accept: ["step", "smart traveler enrollment program"],
            explanation: "STEP, the Smart Traveler Enrollment Program, also helps the nearest U.S. embassy reach you in an emergency.",
          },
          {
            prompt: "The visa category where you apply online before traveling and get an approval by email is called an ___.",
            answer: "e-visa",
            accept: ["evisa", "e visa", "online travel authorization"],
            explanation: "ETIAS (for Europe) is an example of this category.",
          },
          {
            prompt: "The 29-country European zone with a shared 90/180-day short-stay policy is the ___ Area.",
            answer: "Schengen",
            explanation: "25 EU member states plus Iceland, Norway, Switzerland, and Liechtenstein; Cyprus and Ireland are not part of it.",
          },
          {
            prompt: "The new online travel authorization most U.S. citizens will need to enter Europe starting late 2026 is called ___.",
            answer: "ETIAS",
            explanation: "European Travel Information and Authorisation System — a €20 pre-travel screening, not a full visa.",
          },
          {
            prompt: "A visa that lets you pass through a country to reach another destination, not to visit it, is a ___ visa.",
            answer: "transit",
            explanation: "Whether you need one depends on your nationality, layover length, and whether you stay airside.",
          },
          {
            prompt: "Remaining in a country after your authorized stay ends is called a(n) ___.",
            answer: "overstay",
            explanation: "It can lead to fines, detention, deportation, and a ban on returning — even to countries you've visited safely before.",
          },
          {
            prompt: "Under the Schengen 90/180 rule, you can stay up to 90 days within any rolling ___-day period.",
            answer: "180",
            accept: ["180 days", "one hundred eighty"],
            explanation: "It's a sliding window counted backward from each day of your stay, not a fixed calendar quota.",
          },
          {
            prompt: "The minimum Schengen visa travel medical insurance coverage requirement is €___.",
            answer: "30,000",
            accept: ["30000", "30,000 euros", "€30,000", "30k"],
            explanation: "Set by the EU Visa Code (Regulation (EC) No 810/2009), art. 15.",
          },
        ],
      },
    },
    {
      slug: "travel-visas-101-quiz",
      title: "9 · Check your understanding",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What's the main difference between a passport and a visa?",
            options: [
              "They're two names for the same document",
              "A passport proves your identity/citizenship from your own government; a visa is permission to enter another country, granted by that country",
              "A visa proves citizenship; a passport is permission to enter a country",
              "Only a visa is required for domestic travel",
            ],
            correctIndex: 1,
            explanation:
              "A passport is your own government's proof of identity and citizenship. A visa is permission to enter a specific country, issued by that country's government.",
            sourceLessonSlug: "visa-vs-passport",
          },
          {
            prompt: "Which two sources should you check before any international trip, since requirements change?",
            options: [
              "A travel blog and a friend who visited recently",
              "The airline's website only",
              "The U.S. State Department's country pages and the destination's own official embassy/consulate site",
              "A single third-party visa-checker app",
            ],
            correctIndex: 2,
            explanation:
              "Travel.state.gov gives you the U.S. side (advisories, general requirements); the destination's own official site has the authoritative, current application details.",
            sourceLessonSlug: "researching-destination-requirements",
          },
          {
            prompt: "Which visa category means you apply online before traveling and get an approval by email?",
            options: ["Visa-free / visa-exempt", "Visa on arrival", "E-visa / online travel authorization", "Embassy / consulate visa"],
            correctIndex: 2,
            explanation:
              "An e-visa (like Europe's new ETIAS) is applied for online in advance and is often linked electronically to your passport.",
            sourceLessonSlug: "visa-categories",
          },
          {
            prompt: "How long can a U.S. citizen currently stay in the Schengen Area visa-free?",
            options: [
              "30 days per calendar year",
              "Up to 90 days within any rolling 180-day period",
              "Unlimited, with no tracking",
              "6 months per visit",
            ],
            correctIndex: 1,
            explanation:
              "It's a sliding 180-day window counted backward from each day of your stay, not a fixed annual quota.",
            sourceLessonSlug: "schengen-and-etias",
          },
          {
            prompt: "Which of these is a document commonly requested across many countries' visa applications?",
            options: [
              "Your Social Security card",
              "Proof of onward travel and/or proof of funds",
              "A U.S. voter registration card",
              "Your employer's tax ID",
            ],
            correctIndex: 1,
            explanation:
              "Along with a valid passport, photos, and (for some destinations) travel insurance, proof of onward travel or funds is a common requirement.",
            sourceLessonSlug: "typical-documents",
          },
          {
            prompt: "What is a transit visa for?",
            options: [
              "Working in a country long-term",
              "Passing through a country to reach another destination, not visiting it",
              "Studying abroad for a semester",
              "Permanent residency",
            ],
            correctIndex: 1,
            explanation:
              "Whether you need one for a layover depends on nationality, layover length, and whether you stay airside — always check the transit country's own official source.",
            sourceLessonSlug: "transit-visas",
          },
          {
            prompt: "What's one real consequence of overstaying a visa?",
            options: [
              "Nothing, as long as you eventually leave",
              "A small optional late fee you can choose to pay",
              "Fines, detention, deportation, or a ban on returning for months or years",
              "Automatic upgrade to permanent residency",
            ],
            correctIndex: 2,
            explanation:
              "Overstays are tracked increasingly by electronic systems (like the EU's Entry/Exit System) and carry real consequences almost everywhere.",
            sourceLessonSlug: "overstays-entry-exit",
          },
        ],
      },
    },
  ],
};
