// Authored "Off-Grid & Emergency Survival" course for Learn.WitUS (category "Survival").
// Life-safety subject matter: this course is EDUCATIONAL. Its cited backbone is built
// ENTIRELY from public / U.S. government preparedness sources (Ready.gov / FEMA,
// American Red Cross, CDC, U.S. EPA, USDA, NWS / NOAA), with APA 7 in-line citations
// and a per-lesson `## Sources` bibliography, the WitUS citation standard.
//
// IP note: the popular trade title *No Grid Survival Book* (R. Smith, 2025) is used
// ONLY as a topic map / "further reading" and is NEVER reproduced or quoted here.
//
// SAFETY note (also surfaced prominently in-lesson): every claim ties to official
// guidance, and the course deliberately teaches PRINCIPLES + "verify with authorities"
// rather than dangerous specifics (no forageable-plant IDs to eat, no medical
// procedures). Do not rely on this material in a real emergency without proper
// training and current official guidance. Committed; seeded via the shared importer.

import type { AuthoredCourse } from "./authored-course";

// Reused disclaimer block. Kept as a constant so every life-safety lesson carries the
// identical, prominent warning without drift.
const SAFETY = `> ⚠️ **Safety disclaimer.** This lesson is **educational only**. It teaches general principles, not emergency procedures. Always follow current official guidance ([Ready.gov](https://Ready.gov), your local emergency managers, the American Red Cross, CDC), and consult trained professionals. **Do not rely on this material in a real emergency without proper hands-on training.** When in doubt, call for help and defer to local authorities.`;

export const SURVIVAL_COURSE: AuthoredCourse = {
  title: "Off-Grid & Emergency Survival",
  description:
    "A calm, cited, principles-first introduction to emergency preparedness and off-grid resilience: planning and kits, water, shelter and warmth, food, off-grid power, sanitation, first aid, and communications. Every lesson is grounded in public U.S. government and Red Cross guidance (Ready.gov/FEMA, CDC, EPA, USDA, NWS/NOAA) and points you back to those authorities. Educational only: it teaches you what to learn and where to verify it, not a substitute for hands-on training.",
  lessons: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1: Preparedness mindset
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "welcome-and-safety",
      title: "1 · Welcome, and how to use this course safely",
      section: "Section 1 · Preparedness Mindset",
      body: `${SAFETY}

**What this course is.** A structured, *cited* orientation to emergency preparedness and off-grid living, built from public and U.S. government sources. It is designed to make you a better, calmer planner, and to send you to the authorities and hands-on training that can actually keep you safe.

**What this course is NOT.** It is not a field manual, not medical advice, and not a license to attempt risky procedures. Preparedness topics (water treatment, fire and heat, food and foraging, first aid, and power) are **life-safety** subjects. Getting them subtly wrong can hurt you. So throughout, the course teaches **principles** and then says: *verify with the authority, and get trained.*

**Why "cited" matters here.** In an emergency, rumors and confident-sounding folklore spread fast. The habit this course drills is to trace every claim to a named, checkable, official source. Each lesson ends with a \`## Sources\` list in APA 7 style; treat those agencies (not this course) as the authority (Federal Emergency Management Agency [FEMA], 2024).

**A note on further reading.** Popular trade books on off-grid living (for example, R. Smith's *No Grid Survival Book*, 2025) can be useful as topic maps, but they are copyrighted opinion, not official guidance. Where a life is on the line, prefer [Ready.gov](https://Ready.gov), the American Red Cross, the CDC, the EPA, the USDA, and the National Weather Service.

**How to study.** Read a section, then *do the practical action* it names (build the kit, fill the water containers, draft the plan). Preparedness is a verb.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Make a plan.* U.S. Department of Homeland Security. https://www.ready.gov/plan`,
    },
    {
      slug: "rule-of-threes-and-priorities",
      title: "2 · The rule of 3s: setting survival priorities",
      section: "Section 1 · Preparedness Mindset",
      body: `${SAFETY}

**Concept.** The "rule of 3s" is a memory aid for ordering priorities under stress: a person can survive roughly **3 minutes without breathable air, ~3 hours without shelter in a harsh environment, ~3 days without water, and ~3 weeks without food.** These are rough rules of thumb, not medical guarantees. Individual limits vary widely with health, temperature, and exertion. Their real value is **sequencing**: they tell you what to solve first.

**Why it matters.** People routinely invert the order, stockpiling food while ignoring shelter and water. The rule of 3s says: secure air and immediate danger, then protect core body temperature (shelter/warmth), then water, then food. Federal guidance similarly frames the core needs of any disaster plan around staying informed, sheltering, water, and food (Federal Emergency Management Agency [FEMA], 2024).

**Principle over specifics.** Notice this lesson gives you an *ordering*, not a stunt. That is the pattern for the whole course.

**Practical action.** For a scenario you might realistically face (winter power outage, flood, wildfire evacuation), write the four priorities in order and one action for each. Compare your plan to your local emergency management agency's guidance.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Make a plan.* U.S. Department of Homeland Security. https://www.ready.gov/plan
Centers for Disease Control and Prevention. (2023). *Personal health preparedness.* U.S. Department of Health and Human Services. https://www.cdc.gov/orr/infographics/00_disasters_severe.htm`,
      recallContent: [
        {
          prompt: "What kind of resource is this course meant to be, and what is it NOT?",
          answer: "A cited orientation to preparedness built from official sources. It is not a field manual, not medical advice, and not a license to attempt risky procedures.",
        },
        {
          prompt: "Why does the course insist every claim trace to a named official source?",
          answer: "In an emergency, rumors and confident folklore spread fast; tracing each claim to a checkable, official authority is the habit that keeps you safe.",
        },
      ],
    },
    {
      slug: "make-a-plan-and-kit",
      title: "3 · Building a family plan and an emergency kit",
      section: "Section 1 · Preparedness Mindset",
      body: `${SAFETY}

**Concept.** Preparedness is two artifacts: a **plan** (who does what, where you meet, how you communicate, how you evacuate) and a **kit** (the supplies to get through the first stretch on your own). [Ready.gov](https://Ready.gov) recommends every household make a plan that accounts for the specific needs of its members (children, older adults, people with disabilities, pets) and practices it (Federal Emergency Management Agency [FEMA], 2024).

**The basic kit.** Federal guidance describes a basic disaster supplies kit including, at minimum: water and food for several days, a battery- or hand-crank radio, flashlight, first aid kit, extra batteries, whistle, dust mask, moist towelettes/garbage bags for sanitation, wrench/pliers to shut off utilities, manual can opener, local maps, and backup power for phones (Federal Emergency Management Agency [FEMA], 2024). The Red Cross publishes a comparable survival-kit checklist (American Red Cross, 2024).

**How much water and food.** Store **at least one gallon of water per person per day for several days** ([Ready.gov](https://Ready.gov) advises a minimum of three days for evacuation and two weeks for home) and a several-day supply of non-perishable food (Federal Emergency Management Agency [FEMA], 2024). We treat water in depth in Section 2.

**Practical action.** Download the [Ready.gov](https://Ready.gov) plan template and the Red Cross kit checklist, and complete one shelf of the kit this week. Put the plan somewhere everyone in the household can find it.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Build a kit.* U.S. Department of Homeland Security. https://www.ready.gov/kit
Federal Emergency Management Agency. (2024). *Ready.gov: Make a plan.* U.S. Department of Homeland Security. https://www.ready.gov/plan
American Red Cross. (2024). *Survival kit supplies.* https://www.redcross.org/get-help/how-to-prepare-for-emergencies/survival-kit-supplies.html`,
      recallContent: [
        {
          prompt: "Roughly what are the four time limits in the rule of 3s?",
          answer: "About 3 minutes without breathable air, about 3 hours without shelter in a harsh environment, about 3 days without water, and about 3 weeks without food.",
        },
        {
          prompt: "What is the real value of the rule of 3s?",
          answer: "Sequencing. It tells you what to solve first: secure air and immediate danger, then shelter and warmth, then water, then food.",
        },
      ],
    },

    {
      slug: "quiz-preparedness-mindset",
      title: "Section 1 quiz · Preparedness Mindset",
      section: "Section 1 · Preparedness Mindset",
      body: `${SAFETY}

A graded check on what this course is and is not, the rule of 3s and the ordering it gives you, and the plan-and-kit pair federal guidance asks every household to build. Each answer links back to the lesson that teaches it.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does this course say it is NOT?",
            options: [
              "A field manual or medical advice",
              "A cited orientation built from public government and Red Cross sources",
              "A guide to what to learn and where to verify it before an emergency",
              "An argument for treating the official agencies as the authority",
            ],
            correctIndex: 0,
            explanation:
              "It is not a field manual, not medical advice, and not a license to attempt risky procedures. The other three options describe what the course says it IS.",
            sourceLessonSlug: "welcome-and-safety",
          },
          {
            prompt: "Why does the course insist every claim trace to a named official source?",
            options: [
              "Because copyright rules require attribution for preparedness advice",
              "Rumors spread fast in an emergency",
              "Because federal agencies require citation before republishing guidance",
              "Because APA formatting is the standard across all trade publishing",
            ],
            correctIndex: 1,
            explanation:
              "In an emergency, rumors and confident-sounding folklore spread fast. Tracing every claim to a named, checkable, official source is the habit the course drills.",
            sourceLessonSlug: "welcome-and-safety",
          },
          {
            prompt: "How does the course treat popular trade books on off-grid living?",
            options: [
              "As equivalent to Ready.gov when the author has real field experience",
              "As the primary source, with the agencies used only for verification",
              "Topic maps, not official guidance",
              "As unusable, because commercial publishers cannot be cited at all",
            ],
            correctIndex: 2,
            explanation:
              "They can be useful as topic maps, but they are copyrighted opinion. Where a life is on the line, prefer the official authorities.",
            sourceLessonSlug: "welcome-and-safety",
          },
          {
            prompt: "Which sources does the course tell you to prefer where a life is on the line?",
            options: [
              "Whichever preparedness author has the most documented field experience",
              "The most recent trade book, since guidance changes over time",
              "Online preparedness forums, where practitioners share what works",
              "Ready.gov, the Red Cross, and the CDC",
            ],
            correctIndex: 3,
            explanation:
              "Ready.gov, the American Red Cross, the CDC, the EPA, the USDA, and the National Weather Service. The course names those agencies, not itself, as the authority.",
            sourceLessonSlug: "welcome-and-safety",
          },
          {
            prompt: "What does the course mean when it says preparedness is a verb?",
            options: [
              "Do the action each section names",
              "Read every section twice before you attempt any of the actions",
              "Memorize the official guidance so you can recall it under stress",
              "Rehearse the emergency itself rather than assembling any supplies",
            ],
            correctIndex: 0,
            explanation:
              "Read a section, then do the practical action it names: build the kit, fill the water containers, draft the plan.",
            sourceLessonSlug: "welcome-and-safety",
          },
          {
            prompt: "What is the rule of 3s actually for?",
            options: [
              "Guaranteeing how long a healthy adult survives without each thing",
              "Sequencing what to solve first",
              "Calculating how much water and food a household needs to store",
              "Deciding when to evacuate rather than shelter in place at home",
            ],
            correctIndex: 1,
            explanation:
              "Its real value is ordering. The numbers are rough rules of thumb, not medical guarantees, and individual limits vary widely with health, temperature, and exertion.",
            sourceLessonSlug: "rule-of-threes-and-priorities",
          },
          {
            prompt: "In the rule of 3s, roughly how long can a person go without water?",
            options: [
              "About three hours, the same limit the rule gives for shelter",
              "About three weeks, the same limit the rule gives for food",
              "About three days",
              "About three minutes, the limit the rule gives for breathable air",
            ],
            correctIndex: 2,
            explanation:
              "About 3 minutes without breathable air, about 3 hours without shelter in a harsh environment, about 3 days without water, and about 3 weeks without food.",
            sourceLessonSlug: "rule-of-threes-and-priorities",
          },
          {
            prompt: "What order does the rule of 3s put the priorities in?",
            options: [
              "Food, water, shelter, and air, since food takes longest to gather",
              "Water, food, shelter, and air, the order of the storage guidance",
              "Shelter, air, food, and water, the order of the Ready.gov kit list",
              "Air, shelter, water, food",
            ],
            correctIndex: 3,
            explanation:
              "Secure air and immediate danger, then protect core body temperature, then water, then food. That ordering is the whole point of the memory aid.",
            sourceLessonSlug: "rule-of-threes-and-priorities",
          },
          {
            prompt: "What mistake does this lesson say people routinely make?",
            options: [
              "Evacuating when official guidance says to shelter in place instead",
              "Trusting a rule of thumb as a medical guarantee about survival time",
              "Stockpiling food, ignoring water",
              "Buying a generator before they have a family communication plan",
            ],
            correctIndex: 2,
            explanation:
              "People routinely invert the order, stockpiling food while ignoring shelter and water. Food is the three-week priority, which is exactly why it is tempting to over-invest in.",
            sourceLessonSlug: "rule-of-threes-and-priorities",
          },
          {
            prompt: "How does the lesson describe the rule's time limits?",
            options: [
              "Rough rules of thumb, not guarantees",
              "Medical thresholds validated in controlled laboratory studies",
              "Federal standards published by FEMA for household planning",
              "Averages that hold for healthy adults in temperate conditions",
            ],
            correctIndex: 0,
            explanation:
              "They are rough rules of thumb, not medical guarantees, because individual limits vary widely with health, temperature, and exertion.",
            sourceLessonSlug: "rule-of-threes-and-priorities",
          },
          {
            prompt: "What two artifacts is preparedness made of?",
            options: [
              "A stockpile and a generator sized to the household's critical loads",
              "A plan and a kit",
              "An evacuation route and an out-of-town contact holding the copies",
              "A written inventory and a rotation schedule for everything stored",
            ],
            correctIndex: 1,
            explanation:
              "A plan (who does what, where you meet, how you communicate, how you evacuate) and a kit (the supplies to get through the first stretch on your own).",
            sourceLessonSlug: "make-a-plan-and-kit",
          },
          {
            prompt: "How much water does Ready.gov advise storing?",
            options: [
              "Two gallons per person per day, doubled for children and for pets",
              "Five gallons per household per day, regardless of household size",
              "A gallon per person per day",
              "As much as fits, since no official minimum has ever been published",
            ],
            correctIndex: 2,
            explanation:
              "At least one gallon of water per person per day, covering drinking and basic sanitation. Section 2 goes into storage and treatment in depth.",
            sourceLessonSlug: "make-a-plan-and-kit",
          },
          {
            prompt: "How long a home water supply does Ready.gov advise, versus for evacuation?",
            options: [
              "Three days at home and two weeks for an evacuation planned ahead",
              "One week for both, since the same containers serve either case",
              "Thirty days at home, the standard for any off-grid household",
              "Two weeks at home, three days to go",
            ],
            correctIndex: 3,
            explanation:
              "Ready.gov advises a minimum of three days for evacuation and two weeks at home. The evacuation figure is smaller because you have to carry it.",
            sourceLessonSlug: "make-a-plan-and-kit",
          },
          {
            prompt: "Which of these does federal guidance list in a basic disaster supplies kit?",
            options: [
              "A hand-crank radio and a whistle",
              "A pressure canner and tested recipes for preserving low-acid foods",
              "A portable generator with at least twenty feet of extension cord",
              "A signal mirror and a supply of chemical water disinfectant tablets",
            ],
            correctIndex: 0,
            explanation:
              "The basic kit includes water and food for several days, a battery or hand-crank radio, a flashlight, a first aid kit, extra batteries, a whistle, a dust mask, sanitation supplies, a wrench or pliers, a manual can opener, local maps, and backup phone power.",
            sourceLessonSlug: "make-a-plan-and-kit",
          },
          {
            prompt: "What does Ready.gov say a household plan must account for?",
            options: [
              "The maximum number of days a local shelter could house the family",
              "The specific needs of its members",
              "The wattage of every appliance the household expects to keep running",
              "The exact contents of the kit, itemized and priced for insurance",
            ],
            correctIndex: 1,
            explanation:
              "The plan should account for children, older adults, people with disabilities, and pets, and the household should practice it rather than just write it.",
            sourceLessonSlug: "make-a-plan-and-kit",
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2: Water
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "water-need-and-storage",
      title: "4 · Water: how much, and storing it safely",
      section: "Section 2 · Water",
      body: `${SAFETY}

**Concept.** Water is the priority you can least afford to get wrong. Store **at least one gallon per person per day**, covering drinking and basic sanitation; plan more for hot climates, children, nursing parents, and people who are ill (Centers for Disease Control and Prevention [CDC], 2022). [Ready.gov](https://Ready.gov) recommends a **two-week** home supply where possible (Federal Emergency Management Agency [FEMA], 2024).

**Safe storage.** Use food-grade, sealed containers; commercially bottled water is simplest. If you fill your own, use clean, sanitized food-grade containers, keep them sealed, store away from heat and sunlight, and label and rotate them (the CDC gives the specific cleaning-and-replacement steps, follow theirs, not folklore) (CDC, 2022).

**Why "verify" beats "improvise" here.** The details (container type, how to sanitize, how long stored water keeps) are exactly the kind of specifics that vary and that authorities keep current. Read the CDC's storage page and do what it says.

**Practical action.** Calculate your household's two-week need (people × 14 gallons) and start building toward it with sealed, food-grade containers. Note your rotation date.

## Sources
Centers for Disease Control and Prevention. (2022). *Creating and storing an emergency water supply.* U.S. Department of Health and Human Services. https://www.cdc.gov/healthywater/emergency/creating-storing-emergency-water-supply.html
Federal Emergency Management Agency. (2024). *Ready.gov: Water.* U.S. Department of Homeland Security. https://www.ready.gov/water`,
      recallContent: [
        {
          prompt: "What are the two artifacts of preparedness?",
          answer: "A plan (who does what, meeting places, communication, evacuation) and a kit (the supplies to get through the first stretch on your own).",
        },
        {
          prompt: "Name a few items federal guidance lists in a basic disaster supplies kit.",
          answer: "Several days of water and food, a battery or hand-crank radio, a flashlight, a first aid kit, extra batteries, a whistle, a manual can opener, local maps, and backup phone power.",
        },
      ],
    },
    {
      slug: "filtration-vs-purification",
      title: "5 · Filtration vs. purification: they are not the same",
      section: "Section 2 · Water",
      body: `${SAFETY}

**Concept: the core distinction.** **Filtration** physically strains particles and many (not all) microbes out of water. **Purification / disinfection** *kills or inactivates* pathogens (bacteria, viruses, some parasites), typically by boiling, chemical disinfection, or UV. Many portable filters do not reliably remove **viruses**, and no filter removes chemical contamination; that is why the two steps are distinct (U.S. Environmental Protection Agency [EPA], 2024; CDC, 2024).

**Why it matters.** Cloudy, unsafe water often needs **both**: filter or settle out the sediment first (so disinfection can work), *then* disinfect. Treating this as one step is a classic and dangerous mistake.

**Chemical contamination is a hard limit.** Boiling and household disinfection **do not** make chemically contaminated water safe, and can concentrate some contaminants. If you suspect fuel, pesticide, or industrial contamination, do not drink it. Use a known-safe source and follow official instructions (EPA, 2024).

**Principle over specifics.** This lesson deliberately does not hand you a recipe; the next lesson covers the three official disinfection methods, each with "read the exact ratios from the source."

**Practical action.** For each water source you might rely on, write whether it needs filtering, disinfecting, or both, and which contaminant you're worried about (microbes vs. chemicals). Verify your reasoning against the EPA's emergency disinfection page.

## Sources
U.S. Environmental Protection Agency. (2024). *Emergency disinfection of drinking water.* https://www.epa.gov/ground-water-and-drinking-water/emergency-disinfection-drinking-water
Centers for Disease Control and Prevention. (2024). *Making water safe in an emergency.* U.S. Department of Health and Human Services. https://www.cdc.gov/healthywater/emergency/making-water-safe.html`,
      recallContent: [
        {
          prompt: "How much water should you store, at minimum, and for how long at home?",
          answer: "At least one gallon per person per day for drinking and basic sanitation, with a two-week home supply where possible (more for heat, children, or anyone ill).",
        },
        {
          prompt: "What are the basics of storing water safely?",
          answer: "Use clean, sanitized, food-grade sealed containers, keep them sealed, store away from heat and sunlight, and label and rotate them.",
        },
      ],
    },
    {
      slug: "disinfecting-water-methods",
      title: "6 · Making water safe: boiling, chemical, and filters",
      section: "Section 2 · Water",
      body: `${SAFETY}

> ⚠️ **Extra caution.** Getting water treatment wrong causes serious illness. Use the CDC's and EPA's *current* instructions for exact times and doses. The summaries below tell you the methods and their limits, not a substitute for reading the source.

**Method 1: Boiling (most reliable for microbes).** The CDC calls boiling the best way to kill disease-causing organisms. Bring clear water to a **rolling boil for one minute** (longer at high altitude, the CDC specifies three minutes above ~6,500 ft), then let it cool; if the water is cloudy, filter or let it settle first (CDC, 2024).

**Method 2: Chemical disinfection.** When you cannot boil, unscented household chlorine bleach or iodine/chlorine dioxide products can disinfect clear water, but **only in the correct dose and contact time**, which depend on product concentration and water temperature/clarity. Read the EPA's exact ratios; do not guess (EPA, 2024).

**Method 3: Filters.** Portable filters remove particles and many microbes; effectiveness depends on the filter's rated pore size and whether it's paired with disinfection for viruses. Combine filtering (for clarity/parasites) with boiling or chemical treatment (for viruses) when in doubt (CDC, 2024).

**None of these fix chemicals.** As in the prior lesson: treatment addresses **pathogens**, not chemical contamination.

**Practical action.** Write down the boiling rule from the CDC page (including the high-altitude time) and, if you keep disinfection chemicals, copy the EPA's exact dose for your product onto a card in your kit.

## Sources
Centers for Disease Control and Prevention. (2024). *Making water safe in an emergency.* U.S. Department of Health and Human Services. https://www.cdc.gov/healthywater/emergency/making-water-safe.html
U.S. Environmental Protection Agency. (2024). *Emergency disinfection of drinking water.* https://www.epa.gov/ground-water-and-drinking-water/emergency-disinfection-drinking-water`,
      recallContent: [
        {
          prompt: "What is the difference between filtration and purification (disinfection)?",
          answer: "Filtration physically strains out particles and many microbes but often not viruses, and removes no chemicals. Disinfection (boiling, chemical, or UV) kills or inactivates pathogens.",
        },
        {
          prompt: "Can boiling or household disinfection make chemically contaminated water safe?",
          answer: "No. Treatment addresses pathogens, not chemical contamination, and can even concentrate some contaminants. Use a known-safe source instead.",
        },
      ],
    },

    {
      slug: "quiz-water",
      title: "Section 2 quiz · Water",
      section: "Section 2 · Water",
      body: `${SAFETY}

A graded check on how much water to store and how, the difference between filtering and disinfecting, and the three official methods for making water safe. Each answer links back to the lesson that teaches it.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How much water does the CDC say to store per person per day?",
            options: [
              "At least one gallon",
              "At least two gallons, half of it reserved for basic sanitation",
              "At least four liters, which is the figure most guidance now uses",
              "Whatever your household actually drinks on an ordinary summer day",
            ],
            correctIndex: 0,
            explanation:
              "At least one gallon per person per day, with more planned for hot climates, children, nursing parents, and anyone who is ill.",
            sourceLessonSlug: "water-need-and-storage",
          },
          {
            prompt: "What does that stored gallon per day have to cover?",
            options: [
              "Drinking only, with washing water stored separately from it",
              "Drinking and basic sanitation",
              "Drinking, cooking, laundry, and flushing a toilet once each day",
              "Drinking and the water needed to run a portable filter unit",
            ],
            correctIndex: 1,
            explanation:
              "The one-gallon figure covers drinking and basic sanitation together, which is why the lesson says to plan more for anyone whose needs run higher.",
            sourceLessonSlug: "water-need-and-storage",
          },
          {
            prompt: "Who does the lesson say needs more than the baseline amount?",
            options: [
              "Anyone storing water in containers larger than five gallons",
              "Households that have no way to filter or disinfect on site",
              "Hot climates, children, and the ill",
              "People relying on a well rather than a municipal water supply",
            ],
            correctIndex: 2,
            explanation:
              "Plan more for hot climates, children, nursing parents, and people who are ill. Their need runs above the baseline.",
            sourceLessonSlug: "water-need-and-storage",
          },
          {
            prompt: "What kind of container should stored water go into?",
            options: [
              "Any clean container, provided it is emptied and refilled weekly",
              "Metal containers only, since plastic leaches under heat and light",
              "Whatever the water arrived in, because the seal is already intact",
              "Sealed and food-grade",
            ],
            correctIndex: 3,
            explanation:
              "Use food-grade sealed containers, keep them sealed, store them away from heat and sunlight, and label and rotate them. Commercially bottled water is the simplest option.",
            sourceLessonSlug: "water-need-and-storage",
          },
          {
            prompt: "Why does this lesson send you to the CDC page rather than give you the storage details itself?",
            options: [
              "Those specifics change and are kept current",
              "Because the course is not permitted to reproduce federal guidance",
              "Because container rules differ by state and by local health code",
              "Because the CDC page includes a calculator the course cannot host",
            ],
            correctIndex: 0,
            explanation:
              "Container type, how to sanitize, and how long stored water keeps are exactly the specifics that vary and that the authorities keep current. Verify beats improvise.",
            sourceLessonSlug: "water-need-and-storage",
          },
          {
            prompt: "What does filtration do to water?",
            options: [
              "Kills or inactivates the bacteria, viruses, and parasites in it",
              "Strains out particles and many microbes",
              "Removes dissolved industrial chemicals along with the sediment",
              "Raises the temperature enough to make the water safe to drink",
            ],
            correctIndex: 1,
            explanation:
              "Filtration physically strains out particles and many, but not all, microbes. Many portable filters do not reliably remove viruses, and no filter removes chemical contamination.",
            sourceLessonSlug: "filtration-vs-purification",
          },
          {
            prompt: "What does disinfection do that a portable filter often cannot?",
            options: [
              "Removes the sediment that makes water look and taste cloudy",
              "Strains out the parasites that are too large to pass the pores",
              "Inactivates viruses",
              "Neutralizes fuel or pesticide contamination in the water supply",
            ],
            correctIndex: 2,
            explanation:
              "Disinfection kills or inactivates pathogens, including the viruses many portable filters do not reliably catch. Neither step addresses chemical contamination.",
            sourceLessonSlug: "filtration-vs-purification",
          },
          {
            prompt: "Cloudy, unsafe water usually needs which treatment?",
            options: [
              "Filtration alone, since clearing the water is what makes it safe",
              "Disinfection alone, since chemicals reach what a filter misses",
              "Neither, if it comes from a source that was safe last week",
              "Both, in that order",
            ],
            correctIndex: 3,
            explanation:
              "Filter or settle out the sediment first so disinfection can work, then disinfect. Treating this as one step is a classic and dangerous mistake.",
            sourceLessonSlug: "filtration-vs-purification",
          },
          {
            prompt: "Can boiling or household disinfection make chemically contaminated water safe?",
            options: [
              "No",
              "Yes, provided the boil is held for at least three full minutes",
              "Yes, as long as the water is filtered before it is disinfected",
              "Only for pesticides, which break down at boiling temperature",
            ],
            correctIndex: 0,
            explanation:
              "Treatment addresses pathogens, not chemicals, and boiling can even concentrate some contaminants. If you suspect fuel, pesticide, or industrial contamination, do not drink it.",
            sourceLessonSlug: "filtration-vs-purification",
          },
          {
            prompt: "Why does the sediment have to come out before you disinfect?",
            options: [
              "Because sediment reacts with chlorine to produce a toxic byproduct",
              "So the disinfection can actually work",
              "Because a filter will clog permanently if it is used afterward",
              "Because the CDC requires it before any household treatment at all",
            ],
            correctIndex: 1,
            explanation:
              "Filtering or settling the water first is what lets the disinfection step reach the pathogens, which is why the two steps stay distinct and in that order.",
            sourceLessonSlug: "filtration-vs-purification",
          },
          {
            prompt: "What does the CDC call the best way to kill disease-causing organisms in water?",
            options: [
              "Chemical disinfection with unscented household chlorine bleach",
              "A portable filter rated to the smallest available pore size",
              "Boiling",
              "Ultraviolet treatment, which needs no consumable supplies at all",
            ],
            correctIndex: 2,
            explanation:
              "Boiling is the CDC's most reliable method against microbes. The other options are real methods, but the CDC ranks boiling first.",
            sourceLessonSlug: "disinfecting-water-methods",
          },
          {
            prompt: "How long a rolling boil does the CDC specify, and what changes at altitude?",
            options: [
              "Ten minutes, reduced to five minutes below a thousand feet",
              "Thirty seconds, doubled anywhere above the tree line",
              "Five minutes everywhere, since altitude does not affect boiling",
              "One minute, three minutes above 6,500 feet",
            ],
            correctIndex: 3,
            explanation:
              "Bring clear water to a rolling boil for one minute, or three minutes above about 6,500 feet, then let it cool. Filter or settle cloudy water first.",
            sourceLessonSlug: "disinfecting-water-methods",
          },
          {
            prompt: "What determines the correct dose for chemical disinfection?",
            options: [
              "Product strength, water temperature and clarity",
              "The volume of water alone, which is why one ratio fits every case",
              "The container the treated water will be stored in afterward",
              "How long the water has been standing since it was collected",
            ],
            correctIndex: 0,
            explanation:
              "Dose and contact time depend on the product concentration and on the water's temperature and clarity. Read the EPA's exact ratios rather than guessing.",
            sourceLessonSlug: "disinfecting-water-methods",
          },
          {
            prompt: "What decides whether a portable filter is enough on its own?",
            options: [
              "The brand's certification and how recently the unit was purchased",
              "Its rated pore size",
              "Whether the water came from a moving stream or from standing water",
              "How many liters the cartridge has already processed since new",
            ],
            correctIndex: 1,
            explanation:
              "Effectiveness depends on the filter's rated pore size and on whether it is paired with disinfection for viruses. When in doubt, combine filtering with boiling or chemical treatment.",
            sourceLessonSlug: "disinfecting-water-methods",
          },
          {
            prompt: "What do none of the three official methods fix?",
            options: [
              "Cloudiness, which has to be removed by settling the water first",
              "Bacteria, which survive every household-scale treatment method",
              "Chemical contamination",
              "Parasites, which are too large for any portable filter to catch",
            ],
            correctIndex: 2,
            explanation:
              "Boiling, chemical disinfection, and filtration all address pathogens. None of them makes chemically contaminated water safe.",
            sourceLessonSlug: "disinfecting-water-methods",
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3: Shelter & warmth
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "shelter-site-and-insulation",
      title: "7 · Shelter: site selection and insulation",
      section: "Section 3 · Shelter & Warmth",
      body: `${SAFETY}

**Concept.** After immediate danger and air, **shelter protects your core body temperature**, the "3 hours" priority. Good shelter does three things: blocks wind and precipitation, insulates you from heat loss (especially to the ground), and is sited away from hazards (flood channels, dead trees, unstable ground, flames/smoke).

**Insulation basics.** Heat leaves the body by conduction, convection, radiation, and evaporation. Practically: get **off the cold ground** (ground conducts heat away fast), block the **wind**, and stay **dry** (wet clothing destroys insulation). Layering trapped air (clothing, blankets, or debris) is what keeps you warm, not the material alone.

**Sheltering in place vs. evacuating.** Often the safest shelter is your own home or a designated public shelter. [Ready.gov](https://Ready.gov)'s guidance is to know both: how to shelter safely in place *and* when and how to evacuate on official instruction (Federal Emergency Management Agency [FEMA], 2024).

**Practical action.** Identify your home's safest shelter spot for the hazards you face (e.g., an interior room for high winds) and confirm your community's official shelter and evacuation routes with local emergency management.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Shelter.* U.S. Department of Homeland Security. https://www.ready.gov/shelter
Federal Emergency Management Agency. (2024). *Ready.gov: Evacuation.* U.S. Department of Homeland Security. https://www.ready.gov/evacuating-yourself-and-your-family`,
      recallContent: [
        {
          prompt: "What is the CDC's most reliable way to kill microbes in clear water, and for how long?",
          answer: "Boiling: bring clear water to a rolling boil for one minute (three minutes above about 6,500 feet), then let it cool. Filter or settle cloudy water first.",
        },
        {
          prompt: "When you cannot boil, what makes chemical disinfection work?",
          answer: "Only the correct dose and contact time, which depend on the product concentration and the water's temperature and clarity. Read the EPA's exact ratios rather than guessing.",
        },
      ],
    },
    {
      slug: "safe-heat-and-ventilation",
      title: "8 · Staying warm safely: heat sources and ventilation",
      section: "Section 3 · Shelter & Warmth",
      body: `${SAFETY}

> ⚠️ **Carbon monoxide kills silently.** Any flame or fuel-burning device indoors is a life-safety hazard. Read this lesson and the CDC's CO guidance before using any alternative heat.

**Concept.** In a cold-weather outage people improvise heat, and every year some die from **carbon monoxide (CO)** poisoning, a colorless, odorless gas. The CDC's rule is blunt: **never** use generators, charcoal grills, camp stoves, or other gasoline/charcoal-burning devices inside a home, basement, garage, or near windows; and never use a gas stove or oven to heat a home (Centers for Disease Control and Prevention [CDC], 2024).

**The two safety systems.** (1) **Ventilation**: combustion needs fresh air and a path for exhaust to leave; enclosed spaces trap CO. (2) **Detection**: install battery-backup CO alarms and know that headache, dizziness, and nausea can be CO symptoms; if the alarm sounds or you feel ill, **get to fresh air and call for help** (CDC, 2024).

**Fire risk.** Space heaters and open flame also cause fires; keep anything that burns well away, never leave them unattended, and follow the manufacturer's and fire department's guidance.

**Principle over specifics.** Rather than a DIY heater "hack," the takeaway is: use only devices rated for indoor use as directed, ventilate, detect CO, and when the safe option isn't available, relocate to a warming shelter.

**Practical action.** Confirm you have working CO alarms with battery backup, and write your cold-outage plan: which heat sources are safe indoors, and where the nearest warming shelter is.

## Sources
Centers for Disease Control and Prevention. (2024). *Carbon monoxide poisoning: Prevention.* U.S. Department of Health and Human Services. https://www.cdc.gov/carbon-monoxide/prevention/index.html
Federal Emergency Management Agency. (2024). *Ready.gov: Power outages.* U.S. Department of Homeland Security. https://www.ready.gov/power-outages`,
      recallContent: [
        {
          prompt: "What does good shelter do, and which rule-of-3s priority does it protect?",
          answer: "It blocks wind and precipitation, insulates you from heat loss (especially to the ground), and is sited away from hazards. It protects your core body temperature, the roughly 3-hour priority.",
        },
        {
          prompt: "What are the practical insulation basics for staying warm?",
          answer: "Get off the cold ground, block the wind, and stay dry, because wet clothing destroys insulation. Trapped layers of air are what keep you warm, not the material alone.",
        },
      ],
    },
    {
      slug: "hypothermia-and-heat-illness",
      title: "9 · Recognizing hypothermia and heat illness",
      section: "Section 3 · Shelter & Warmth",
      body: `${SAFETY}

> ⚠️ **These are medical emergencies.** Learn to *recognize* them; get trained to *respond*. When in doubt, call emergency services.

**Concept: two temperature dangers.** **Hypothermia** is dangerously low body temperature; the CDC lists warning signs such as shivering, exhaustion/confusion, fumbling hands, memory loss, slurred speech, and drowsiness, and in infants, bright red or cold skin and very low energy. It treats a body temperature below 95°F (35°C) as an emergency requiring medical attention (Centers for Disease Control and Prevention [CDC], 2022).

**Heat illness** runs the other way: **heat exhaustion** (heavy sweating, weakness, nausea, headache) can progress to **heat stroke** (a life-threatening emergency with high body temperature, confusion, and possibly no sweating), which the CDC says requires calling 911 and rapid cooling (CDC, 2022).

**The principle.** Prevention and *early recognition* are within a layperson's reach; definitive treatment is not. The course teaches you the warning signs and the "call for help / begin cooling or warming as directed" response, and stops there, deliberately.

**Get trained.** Take a first aid course (Section 7) so recognition connects to competent action.

**Practical action.** Make a small card for your kit listing the hypothermia and heat-stroke warning signs from the CDC pages, plus "call 911." Review it with your household.

## Sources
Centers for Disease Control and Prevention. (2022). *Hypothermia.* U.S. Department of Health and Human Services. https://www.cdc.gov/disasters/winter/staysafe/hypothermia.html
Centers for Disease Control and Prevention. (2022). *Heat stress: Heat-related illness.* U.S. Department of Health and Human Services. https://www.cdc.gov/niosh/topics/heatstress/heatrelillness.html`,
      recallContent: [
        {
          prompt: "What is the CDC's blunt rule about fuel-burning devices for heat?",
          answer: "Never use generators, charcoal grills, camp stoves, or other gasoline or charcoal-burning devices inside a home, basement, garage, or near windows, and never use a gas stove or oven to heat a home.",
        },
        {
          prompt: "What are the two safety systems against carbon monoxide?",
          answer: "Ventilation (combustion needs fresh air and a path for exhaust to leave) and detection (battery-backup CO alarms). If an alarm sounds or you feel ill, get to fresh air and call for help.",
        },
      ],
    },

    {
      slug: "quiz-shelter-and-warmth",
      title: "Section 3 quiz · Shelter & Warmth",
      section: "Section 3 · Shelter & Warmth",
      body: `${SAFETY}

A graded check on what shelter is actually for, the carbon monoxide rules that make alternative heat survivable, and how to recognize the two temperature emergencies. Each answer links back to the lesson that teaches it.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which rule-of-3s priority does shelter protect?",
            options: [
              "Breathable air, the roughly three-minute priority in the ordering",
              "Water, the roughly three-day priority the rule places third",
              "Food, the roughly three-week priority at the end of the ordering",
              "Core body temperature",
            ],
            correctIndex: 3,
            explanation:
              "After immediate danger and air, shelter protects your core body temperature, which is the roughly three-hour priority.",
            sourceLessonSlug: "shelter-site-and-insulation",
          },
          {
            prompt: "What three things does good shelter do?",
            options: [
              "Blocks weather, insulates, avoids hazards",
              "Stores water, holds your supplies, and gives you a place to sleep",
              "Signals rescuers, holds heat, and keeps your communications dry",
              "Provides ventilation, contains smoke, and keeps fuel away from flame",
            ],
            correctIndex: 0,
            explanation:
              "It blocks wind and precipitation, insulates you from heat loss (especially to the ground), and is sited away from flood channels, dead trees, unstable ground, and smoke.",
            sourceLessonSlug: "shelter-site-and-insulation",
          },
          {
            prompt: "Which surface takes heat away from you fastest?",
            options: [
              "Still air, which carries heat away by convection all night long",
              "The ground",
              "Any surface in direct sun, through radiation back into the body",
              "Dry clothing, once it has trapped more air than it can hold",
            ],
            correctIndex: 1,
            explanation:
              "Ground conducts heat away fast, which is why getting off the cold ground is the first practical insulation move.",
            sourceLessonSlug: "shelter-site-and-insulation",
          },
          {
            prompt: "Why does wet clothing matter so much?",
            options: [
              "It adds weight that makes moving to a warming shelter harder",
              "It freezes solid and becomes impossible to remove in the cold",
              "It destroys insulation",
              "It blocks the skin's ability to radiate excess heat during exertion",
            ],
            correctIndex: 2,
            explanation:
              "Layering trapped air is what keeps you warm, not the material alone, and wet clothing destroys that insulation. Get off the ground, block the wind, and stay dry.",
            sourceLessonSlug: "shelter-site-and-insulation",
          },
          {
            prompt: "What does the lesson say is often the safest shelter?",
            options: [
              "A vehicle, because it blocks wind and can be moved out of a hazard",
              "An improvised debris shelter built away from the nearest structure",
              "Whichever building is highest above the local flood channels",
              "Your own home",
            ],
            correctIndex: 3,
            explanation:
              "Often the safest shelter is your own home or a designated public shelter. Ready.gov's guidance is to know both how to shelter safely in place and when to evacuate on official instruction.",
            sourceLessonSlug: "shelter-site-and-insulation",
          },
          {
            prompt: "What makes carbon monoxide so dangerous?",
            options: [
              "It is colorless and odorless",
              "It ignites at a lower temperature than any other combustion gas",
              "It settles at floor level, where children and pets breathe it first",
              "It corrodes the sensors inside battery-powered smoke detectors",
            ],
            correctIndex: 0,
            explanation:
              "CO gives you no warning of its own, which is why detection has to be a device rather than your senses. Headache, dizziness, and nausea can be the first signs.",
            sourceLessonSlug: "safe-heat-and-ventilation",
          },
          {
            prompt: "What is the CDC's rule about running fuel-burning devices indoors for heat?",
            options: [
              "Acceptable if a window is opened at least six inches for airflow",
              "Never",
              "Acceptable for charcoal but never for gasoline-powered equipment",
              "Acceptable for up to an hour at a time, with a CO alarm running",
            ],
            correctIndex: 1,
            explanation:
              "Never use generators, charcoal grills, camp stoves, or other gasoline or charcoal-burning devices inside a home, basement, garage, or near windows, and never use a gas stove or oven to heat a home.",
            sourceLessonSlug: "safe-heat-and-ventilation",
          },
          {
            prompt: "What are the two safety systems against carbon monoxide?",
            options: [
              "A fire extinguisher and a clear path to an exterior door",
              "Fuel storage away from living space, and cooling before refueling",
              "Ventilation and detection",
              "A manufacturer-rated heater and a fireproof mat underneath it",
            ],
            correctIndex: 2,
            explanation:
              "Combustion needs fresh air and a path for exhaust to leave, and battery-backup CO alarms tell you when that is failing. Enclosed spaces trap CO.",
            sourceLessonSlug: "safe-heat-and-ventilation",
          },
          {
            prompt: "What should you do if a CO alarm sounds or anyone feels ill?",
            options: [
              "Open every window and stay put until the alarm stops sounding",
              "Shut off the device, then wait fifteen minutes before reentering",
              "Move the heater outside and continue using the room as normal",
              "Get to fresh air and call for help",
            ],
            correctIndex: 3,
            explanation:
              "Headache, dizziness, and nausea can be CO symptoms. Get out to fresh air and call for help rather than trying to ventilate your way out of it from inside.",
            sourceLessonSlug: "safe-heat-and-ventilation",
          },
          {
            prompt: "What does this lesson offer instead of a do-it-yourself heater hack?",
            options: [
              "Rated devices as directed, or relocate",
              "A list of fuels ranked by how little carbon monoxide each produces",
              "Instructions for venting a camp stove through an exterior window",
              "A calculation for how large a room has to be to burn fuel safely",
            ],
            correctIndex: 0,
            explanation:
              "Use only devices rated for indoor use as directed, ventilate, detect CO, and when the safe option is not available, relocate to a warming shelter.",
            sourceLessonSlug: "safe-heat-and-ventilation",
          },
          {
            prompt: "What body temperature does the CDC treat as a hypothermia emergency?",
            options: [
              "Below 98.6 degrees Fahrenheit, the standard normal body temperature",
              "Below 95 degrees Fahrenheit",
              "Below 90 degrees Fahrenheit, at which shivering stops entirely",
              "Any drop of more than two degrees from that person's own normal",
            ],
            correctIndex: 1,
            explanation:
              "The CDC treats a body temperature below 95 degrees Fahrenheit (35 Celsius) as an emergency requiring medical attention.",
            sourceLessonSlug: "hypothermia-and-heat-illness",
          },
          {
            prompt: "Which of these does the CDC list as hypothermia warning signs?",
            options: [
              "Heavy sweating, weakness, nausea, and a pounding headache",
              "High body temperature, confusion, and possibly no sweating at all",
              "Fumbling hands and slurred speech",
              "Rapid breathing and a pulse that is difficult to find at the wrist",
            ],
            correctIndex: 2,
            explanation:
              "Shivering, exhaustion or confusion, fumbling hands, memory loss, slurred speech, and drowsiness. Heavy sweating and nausea describe heat exhaustion instead, and high temperature with confusion describes heat stroke.",
            sourceLessonSlug: "hypothermia-and-heat-illness",
          },
          {
            prompt: "What can heat exhaustion progress to?",
            options: [
              "Hypothermia, once the body's cooling response overshoots its target",
              "Dehydration alone, which rest and fluids resolve without treatment",
              "A permanent loss of the ability to sweat in hot conditions",
              "Heat stroke",
            ],
            correctIndex: 3,
            explanation:
              "Heat exhaustion (heavy sweating, weakness, nausea, headache) can progress to heat stroke, a life-threatening emergency with high body temperature, confusion, and possibly no sweating.",
            sourceLessonSlug: "hypothermia-and-heat-illness",
          },
          {
            prompt: "What does the CDC say heat stroke requires?",
            options: [
              "Calling 911 and rapid cooling",
              "Rest in shade with fluids until the person's symptoms settle down",
              "Slow rewarming, because rapid temperature change is itself a danger",
              "Waiting for sweating to resume before any cooling is attempted",
            ],
            correctIndex: 0,
            explanation:
              "Heat stroke is a life-threatening emergency. Call 911 and begin rapid cooling. Rest and fluids are the response to heat exhaustion, the earlier stage.",
            sourceLessonSlug: "hypothermia-and-heat-illness",
          },
          {
            prompt: "What does this lesson say is within a layperson's reach, and what is not?",
            options: [
              "Field diagnosis is reachable, but calling emergency services is not",
              "Prevention and early recognition, not treatment",
              "Definitive treatment is reachable once you own the right equipment",
              "Nothing is reachable until you hold a current certification card",
            ],
            correctIndex: 1,
            explanation:
              "Prevention and early recognition are within reach; definitive treatment is not. The course teaches the warning signs and the call-for-help response, and deliberately stops there.",
            sourceLessonSlug: "hypothermia-and-heat-illness",
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4: Food
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "food-storage-and-safety",
      title: "10 · Emergency food: storage and safety",
      section: "Section 4 · Food",
      body: `${SAFETY}

**Concept.** Food is the lowest-priority immediate need (the "3 weeks" rule), which is *why* it's tempting to over-invest in it and under-invest in water and shelter. Store a **several-day supply of non-perishable food** that needs little or no cooking, water, or refrigeration, choosing items your household will actually eat and rotating them by date (Federal Emergency Management Agency [FEMA], 2024).

**Food safety during outages.** During a power outage, the USDA's rule is to **keep refrigerator and freezer doors closed**: a fridge holds safe temperature about 4 hours, a full freezer about 48 hours (24 if half-full). Discard perishable food held above 40°F for more than 2 hours, and, critically, **"When in doubt, throw it out"**; you cannot rely on smell or taste to judge safety (U.S. Department of Agriculture [USDA], 2023).

**Practical action.** Stock a several-day no-cook food shelf and put an appliance thermometer in your fridge and freezer so you can *verify* temperature after an outage rather than guess.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Food.* U.S. Department of Homeland Security. https://www.ready.gov/food
U.S. Department of Agriculture, Food Safety and Inspection Service. (2023). *Food safety during power outage.* https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/food-safety-during-power-outage`,
      recallContent: [
        {
          prompt: "What are some warning signs of hypothermia, and what temperature counts as an emergency?",
          answer: "Shivering, exhaustion or confusion, fumbling hands, memory loss, slurred speech, and drowsiness. A body temperature below 95°F (35°C) is an emergency needing medical attention.",
        },
        {
          prompt: "How does heat exhaustion differ from heat stroke, and what do you do for heat stroke?",
          answer: "Heat exhaustion brings heavy sweating, weakness, nausea, and headache. It can progress to heat stroke, a life-threatening emergency with high body temperature and confusion, which requires calling 911 and rapid cooling.",
        },
      ],
    },
    {
      slug: "food-preservation-basics",
      title: "11 · Preservation basics: canning, drying, and their limits",
      section: "Section 4 · Food",
      body: `${SAFETY}

> ⚠️ **Home canning can be deadly if done wrong.** Improperly canned low-acid foods can grow *Clostridium botulinum* (botulism). Follow tested USDA/Extension recipes exactly. Do not improvise.

**Concept.** Preservation extends food by removing what microbes need (water, the right temperature, or a hospitable pH). The main home methods are **canning**, **freezing**, and **drying/dehydrating**. Each has strict, tested procedures published by the USDA and Cooperative Extension in the *USDA Complete Guide to Home Canning* (U.S. Department of Agriculture [USDA], 2015).

**The one rule you must respect.** **Low-acid foods** (most vegetables, meats, poultry, fish) must be processed in a **pressure canner**, because only pressure canning reaches the temperature needed to destroy botulism spores; a boiling-water bath is only safe for **high-acid** foods (most fruits, properly acidified pickles). Using the wrong method for low-acid food risks fatal botulism (USDA, 2015).

**Principle over specifics.** This lesson intentionally gives you the *decision rule* (acid level → method) and the *authority* (USDA/Extension tested recipes), not a recipe. Tested times and pressures depend on the food, jar size, and altitude. Read them from the source.

**Practical action.** Pick one food you'd want to preserve, classify it as high- or low-acid, and look up the correct USDA/Extension method before ever attempting it.

## Sources
U.S. Department of Agriculture, National Center for Home Food Preservation. (2015). *Complete guide to home canning* (Agriculture Information Bulletin No. 539). https://nchfp.uga.edu/publications/publications_usda.html
Centers for Disease Control and Prevention. (2022). *Home-canned foods and botulism.* U.S. Department of Health and Human Services. https://www.cdc.gov/botulism/prevention.html`,
      recallContent: [
        {
          prompt: "During a power outage, how long does the USDA say a fridge and a full freezer hold safe temperature?",
          answer: "Keep the doors closed. A refrigerator holds safe temperature about 4 hours and a full freezer about 48 hours (24 hours if half-full).",
        },
        {
          prompt: "Why can't you judge outage food safety by smell, and what is the rule?",
          answer: "Spoilage bacteria are not always detectable by smell or taste. Discard perishables held above 40°F for more than 2 hours, and when in doubt, throw it out.",
        },
      ],
    },
    {
      slug: "foraging-safety-principles",
      title: "12 · Foraging: safety principles, not plant IDs",
      section: "Section 4 · Food",
      body: `${SAFETY}

> ⚠️ **Never eat any wild plant, mushroom, or animal you cannot identify with certainty from a qualified expert.** Many toxic species closely resemble edible ones, and some are lethal. This lesson teaches *principles and caution*. It deliberately gives **no** "eat this plant" identifications.

**Concept: why we teach caution, not a menu.** Remember the rule of 3s: food is the *3-week* priority. In almost any short-term emergency, foraging is unnecessary risk. Misidentification of wild mushrooms and plants causes serious poisonings every year, which is exactly why responsible teaching points you to **local experts and current field authorities**, not a memorized list (Centers for Disease Control and Prevention [CDC], 2021).

**The principles.**
1. **Positive identification or don't eat it.** Uncertainty means no.
2. **Learn from qualified local experts** (a botanist, mycological society, or Cooperative Extension) in person, for *your* region.
3. **Beware look-alikes**, and know that "animals ate it" does not mean it's safe for humans.
4. **Prioritize water and shelter first**; foraging is far down the list.
5. **If poisoning is suspected**, contact Poison Control (in the U.S., 1-800-222-1222) or emergency services immediately (CDC, 2021).

**Practical action.** Instead of learning "edibles," find the *qualified local resource* (Extension office, native-plant or mycological society) you would consult, and save Poison Control's number in your phone and kit.

## Sources
Centers for Disease Control and Prevention. (2021). *Mushroom (and wild plant) poisoning.* U.S. Department of Health and Human Services. https://www.cdc.gov/mmwr/volumes/70/wr/mm7010a4.htm
America's Poison Centers. (2024). *Poison Help: 1-800-222-1222.* https://poisoncontrol.org/`,
      recallContent: [
        {
          prompt: "Why must low-acid foods be processed in a pressure canner?",
          answer: "Only pressure canning reaches the temperature needed to destroy botulism (Clostridium botulinum) spores. A boiling-water bath is safe only for high-acid foods like most fruits and properly acidified pickles.",
        },
        {
          prompt: "What is the decision rule and the authority for home preservation?",
          answer: "Classify the food by acid level, which picks the method, and follow the tested times and pressures in USDA and Cooperative Extension recipes rather than improvising.",
        },
      ],
    },

    {
      slug: "quiz-food",
      title: "Section 4 quiz · Food",
      section: "Section 4 · Food",
      body: `${SAFETY}

A graded check on emergency food storage and outage food safety, the acid rule that decides a canning method, and why this course teaches foraging caution instead of plant identifications. Each answer links back to the lesson that teaches it.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why does the course call food the lowest-priority immediate need?",
            options: [
              "Because most households already keep more than a week of it",
              "Because it can be foraged once the other three needs are secured",
              "It is the three-week priority",
              "Because federal guidance leaves food out of the basic supplies kit",
            ],
            correctIndex: 2,
            explanation:
              "The rule of 3s puts food last, at roughly three weeks, which is exactly why it is tempting to over-invest in food and under-invest in water and shelter.",
            sourceLessonSlug: "food-storage-and-safety",
          },
          {
            prompt: "What kind of food does federal guidance say to store?",
            options: [
              "Frozen meals, because a full freezer holds temperature the longest",
              "Whatever your household eats now, rotated through the refrigerator",
              "Bulk staples that need long cooking, since fuel is easy to store",
              "Non-perishable, needing little or no cooking",
            ],
            correctIndex: 3,
            explanation:
              "Store a several-day supply of non-perishable food that needs little or no cooking, water, or refrigeration, choosing items your household will actually eat, and rotate by date.",
            sourceLessonSlug: "food-storage-and-safety",
          },
          {
            prompt: "During a power outage, how long does the USDA say a full freezer holds a safe temperature?",
            options: [
              "About 48 hours",
              "About 4 hours, the same figure the USDA gives for a refrigerator",
              "About a week, provided the freezer is not opened even once",
              "About 12 hours, halved again if the freezer is only partly full",
            ],
            correctIndex: 0,
            explanation:
              "A refrigerator holds safe temperature about 4 hours and a full freezer about 48 hours, or 24 if it is half full. Keep the doors closed.",
            sourceLessonSlug: "food-storage-and-safety",
          },
          {
            prompt: "When must perishable food be discarded after an outage?",
            options: [
              "As soon as the power has been out for more than a single hour",
              "Above 40 degrees for over 2 hours",
              "Only once it develops an off smell or an obviously changed texture",
              "Whenever the freezer contents have thawed but still feel cold",
            ],
            correctIndex: 1,
            explanation:
              "Discard perishable food held above 40 degrees Fahrenheit for more than 2 hours. You cannot rely on smell or taste to judge safety.",
            sourceLessonSlug: "food-storage-and-safety",
          },
          {
            prompt: "What is the USDA's rule when you are unsure whether outage food is safe?",
            options: [
              "Cook it thoroughly, since heat resolves most spoilage questions",
              "Taste a small amount and judge from there before serving it",
              "When in doubt, throw it out",
              "Refreeze it and use it first once the power has been restored",
            ],
            correctIndex: 2,
            explanation:
              "Smell and taste cannot tell you whether food is safe, which is why the rule is absolute. An appliance thermometer lets you verify temperature rather than guess.",
            sourceLessonSlug: "food-storage-and-safety",
          },
          {
            prompt: "How does food preservation actually work?",
            options: [
              "By sealing food so completely that no microbe can ever reach it",
              "By adding preservatives that microbes are unable to digest",
              "By lowering the food's temperature below the point microbes survive",
              "It removes what microbes need",
            ],
            correctIndex: 3,
            explanation:
              "Preservation extends food by removing what microbes need: water, the right temperature, or a hospitable pH. Canning, freezing, and drying are the main home methods.",
            sourceLessonSlug: "food-preservation-basics",
          },
          {
            prompt: "Which foods must be processed in a pressure canner?",
            options: [
              "Low-acid foods",
              "High-acid foods such as most fruits and properly acidified pickles",
              "Any food that will be stored for longer than one full calendar year",
              "Only meats, since vegetables can safely use a boiling-water bath",
            ],
            correctIndex: 0,
            explanation:
              "Most vegetables, meats, poultry, and fish are low-acid and must be pressure canned. High-acid foods are the ones a boiling-water bath can safely handle.",
            sourceLessonSlug: "food-preservation-basics",
          },
          {
            prompt: "Why must low-acid food go in a pressure canner rather than a boiling-water bath?",
            options: [
              "Because a water bath cannot hold a steady temperature for long",
              "Only pressure reaches botulism-killing heat",
              "Because low-acid food takes longer to heat all the way through",
              "Because the jars would float and seal unevenly in an open bath",
            ],
            correctIndex: 1,
            explanation:
              "Only pressure canning reaches the temperature needed to destroy Clostridium botulinum spores. Using the wrong method for low-acid food risks fatal botulism.",
            sourceLessonSlug: "food-preservation-basics",
          },
          {
            prompt: "Which foods can a boiling-water bath safely handle?",
            options: [
              "Any food, as long as the processing time is doubled for safety",
              "Meats and poultry, which are cooked through before they are jarred",
              "High-acid foods",
              "Vegetables, provided they are blanched before they go in the jar",
            ],
            correctIndex: 2,
            explanation:
              "A boiling-water bath is safe only for high-acid foods: most fruits and properly acidified pickles. Everything low-acid needs pressure.",
            sourceLessonSlug: "food-preservation-basics",
          },
          {
            prompt: "What does this lesson deliberately give you instead of a recipe?",
            options: [
              "A warning that home canning should never be attempted by anyone",
              "A list of the equipment to buy before you attempt any preserving",
              "A comparison of canning against freezing and drying by cost",
              "A decision rule and an authority",
            ],
            correctIndex: 3,
            explanation:
              "Acid level picks the method, and the USDA and Cooperative Extension tested recipes give the times and pressures, which depend on the food, jar size, and altitude.",
            sourceLessonSlug: "food-preservation-basics",
          },
          {
            prompt: "Why does the foraging lesson teach caution instead of plant identifications?",
            options: [
              "Toxic species closely resemble edible ones",
              "Because foraging is illegal on most public land in the United States",
              "Because the plants that grow near a shelter site are rarely edible",
              "Because identification requires equipment most households lack",
            ],
            correctIndex: 0,
            explanation:
              "Misidentification of wild mushrooms and plants causes serious poisonings every year, and food is the roughly three-week priority, so foraging is unnecessary risk in almost any short-term emergency.",
            sourceLessonSlug: "foraging-safety-principles",
          },
          {
            prompt: "What is the first principle of foraging safety?",
            options: [
              "Eat only a small test portion and wait several hours before more",
              "Positive identification, or do not eat it",
              "Prefer plants growing well away from roads and any industrial site",
              "Cook everything thoroughly, which neutralizes most plant toxins",
            ],
            correctIndex: 1,
            explanation:
              "Uncertainty means no. That rule comes first because many toxic species closely resemble edible ones and some are lethal.",
            sourceLessonSlug: "foraging-safety-principles",
          },
          {
            prompt: "Where does the lesson say to learn foraging?",
            options: [
              "From a current regional field guide with photographs of look-alikes",
              "From an online community that specializes in your own region",
              "In person, from qualified local experts",
              "From the CDC's published lists of commonly confused wild species",
            ],
            correctIndex: 2,
            explanation:
              "Learn in person from a botanist, a mycological society, or a Cooperative Extension office, for your own region. A memorized list is not a substitute.",
            sourceLessonSlug: "foraging-safety-principles",
          },
          {
            prompt: "An animal has been eating a plant. Does that make it safe for you?",
            options: [
              "Yes, provided the animal is a mammal rather than a bird or insect",
              "Yes, as long as you watch it for several hours with no ill effect",
              "Only for the parts of the plant the animal was observed eating",
              "No",
            ],
            correctIndex: 3,
            explanation:
              "The lesson names this explicitly: animals ate it does not mean it is safe for humans. Beware look-alikes, and get positive expert identification.",
            sourceLessonSlug: "foraging-safety-principles",
          },
          {
            prompt: "If poisoning is suspected in the United States, who do you contact?",
            options: [
              "Poison Control, 1-800-222-1222",
              "The nearest Cooperative Extension office, which identifies specimens",
              "The CDC's public inquiry line, which routes to a regional toxicologist",
              "A mycological society member, who can identify the species by photo",
            ],
            correctIndex: 0,
            explanation:
              "Contact Poison Control or emergency services immediately. The other organizations teach identification; none of them handles an active poisoning.",
            sourceLessonSlug: "foraging-safety-principles",
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5: Off-grid power
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "off-grid-power-basics",
      title: "13 · Off-grid power basics and load planning",
      section: "Section 5 · Off-Grid Power",
      body: `${SAFETY}

**Concept.** Off-grid power is a chain: a **source** (solar panels, a generator), **storage** (batteries), **conversion** (a charge controller and an inverter that turns DC battery power into AC), and **loads** (what you run). The design question is always: *what must stay on, for how long?*

**Load planning.** List your critical loads (medical devices, phone charging, a few lights, refrigeration if possible), find each device's watts, and multiply by hours to get watt-hours per day. Size storage and source to that number with margin. Prioritize ruthlessly: in an outage, keeping a medical device and communications running beats powering conveniences (Federal Emergency Management Agency [FEMA], 2024).

**Medical power is a plan, not a gadget.** If anyone depends on electricity for health (oxygen, CPAP, refrigerated medication), [Ready.gov](https://Ready.gov) advises making a specific power plan in advance: backup power, and knowing where to go if it fails (FEMA, 2024).

**Practical action.** Write your critical-load list with watt-hours per day, and, if someone relies on powered medical equipment, draft the power-outage plan [Ready.gov](https://Ready.gov) describes and share it with your medical provider.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Power outages.* U.S. Department of Homeland Security. https://www.ready.gov/power-outages
Federal Emergency Management Agency. (2024). *Ready.gov: Individuals with disabilities.* U.S. Department of Homeland Security. https://www.ready.gov/disability`,
      recallContent: [
        {
          prompt: "What is the first rule of foraging safety, and why teach caution instead of plant IDs?",
          answer: "Positive expert identification or do not eat it. Toxic species closely resemble edible ones, and food is the roughly 3-week priority, so foraging is unnecessary risk in most short emergencies.",
        },
        {
          prompt: "Where should you learn foraging, and what number should you save?",
          answer: "Learn in person from qualified local experts (a botanist, mycological society, or Cooperative Extension) for your region, and save Poison Control, 1-800-222-1222 in the U.S.",
        },
      ],
    },
    {
      slug: "generator-and-fuel-safety",
      title: "14 · Generator and fuel safety (CO is the danger)",
      section: "Section 5 · Off-Grid Power",
      body: `${SAFETY}

> ⚠️ **Portable generators produce deadly carbon monoxide.** This is the single most dangerous topic in the course. Follow the rules below and the manufacturer's instructions exactly.

**Concept.** Generators restore power, and kill people every year, almost always through **carbon monoxide (CO)** poisoning or fuel fires. The CDC and [Ready.gov](https://Ready.gov) rules are firm:

1. **Never run a generator indoors**: not in the house, basement, garage, crawlspace, or any partly enclosed area, even with doors and windows open (Centers for Disease Control and Prevention [CDC], 2024).
2. **Place it well away from the building**: outside, far from doors, windows, and vents so exhaust cannot drift in (typically at least 20 feet; follow the manufacturer) (Federal Emergency Management Agency [FEMA], 2024).
3. **Install battery-backup CO alarms** and get to fresh air immediately if one sounds or anyone feels dizzy, headachy, or nauseous (CDC, 2024).

**Fuel and electrical safety.** Store fuel in approved containers away from living spaces and ignition sources; let the generator cool before refueling; and never "backfeed" by plugging a generator into a wall outlet. It can electrocute utility workers and start fires. Use a proper transfer switch or plug appliances directly in (FEMA, 2024).

**Practical action.** Write your generator's safe placement (distance and direction from every door/window) and confirm CO alarms with battery backup are installed on every level of your home.

## Sources
Centers for Disease Control and Prevention. (2024). *Carbon monoxide poisoning: Prevention.* U.S. Department of Health and Human Services. https://www.cdc.gov/carbon-monoxide/prevention/index.html
Federal Emergency Management Agency. (2024). *Ready.gov: Power outages.* U.S. Department of Homeland Security. https://www.ready.gov/power-outages`,
      recallContent: [
        {
          prompt: "What are the four parts of an off-grid power chain?",
          answer: "A source (solar panels or a generator), storage (batteries), conversion (a charge controller and an inverter that turns DC into AC), and loads (what you run).",
        },
        {
          prompt: "How do you plan your loads, and why is medical power a plan rather than a gadget?",
          answer: "List critical loads, multiply each device's watts by hours to get watt-hours per day, and size storage and source to that with margin. Anyone depending on electricity for health needs a specific backup-power plan made in advance.",
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6: Sanitation & hygiene
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "sanitation-human-waste",
      title: "15 · Sanitation: human waste when plumbing fails",
      section: "Section 6 · Sanitation & Hygiene",
      body: `${SAFETY}

**Concept.** When water or sewer service fails, **safe disposal of human waste** becomes a top health priority. Improper handling spreads disease fast. The CDC's guidance for when toilets don't work is to build an emergency toilet (for example, a sturdy bucket with a tight-fitting lid, lined with a plastic bag) and to contain, cover, and dispose of waste so it can't contaminate people, food, or water (Centers for Disease Control and Prevention [CDC], 2020).

**Key principles.**
1. **Separate waste from water and food**: keep any waste and any latrine well away from water sources and food prep.
2. **Contain and cover**: seal bags, cover odor and flies; the CDC describes adding absorbent/disinfecting material and double-bagging.
3. **Hand hygiene after every contact** (next lesson).
4. **Follow local instructions** for final disposal; do not dump waste into storm drains or waterways.

**Practical action.** Assemble a simple emergency-toilet kit (bucket with lid, heavy-duty bags, sanitizing/absorbent material, gloves) and read the CDC's emergency toilet instructions so you know the exact steps before you need them.

## Sources
Centers for Disease Control and Prevention. (2020). *Emergency toilet & keeping clean.* U.S. Department of Health and Human Services. https://www.cdc.gov/healthywater/emergency/sanitation-wastewater/toilet-emergency.html
Federal Emergency Management Agency. (2024). *Ready.gov: Build a kit.* U.S. Department of Homeland Security. https://www.ready.gov/kit`,
      recallContent: [
        {
          prompt: "Where may you never run a generator, and how far from the building should it go?",
          answer: "Never indoors, not in the house, basement, garage, crawlspace, or any partly enclosed area, even with doors and windows open. Place it outside, well away from doors, windows, and vents (typically at least 20 feet).",
        },
        {
          prompt: "What is backfeeding and why is it dangerous?",
          answer: "Plugging a generator into a wall outlet instead of using a proper transfer switch. It can electrocute utility workers and start fires.",
        },
      ],
    },
    {
      slug: "hygiene-greywater-disease",
      title: "16 · Hygiene, greywater, and preventing disease",
      section: "Section 6 · Sanitation & Hygiene",
      body: `${SAFETY}

**Concept.** After a disaster, **handwashing and basic hygiene** are among the most effective disease-prevention tools you have. The CDC emphasizes washing hands with soap and clean water (especially before eating or preparing food and after using the toilet or handling waste) and using an alcohol-based hand sanitizer (at least 60% alcohol) when clean water isn't available (Centers for Disease Control and Prevention [CDC], 2023).

**Greywater (used wash/rinse water).** Greywater isn't safe to drink and can carry bacteria; keep it **away from your drinking-water supply, food, and any collection surfaces**, and dispose of it as local authorities direct. Never let greywater or floodwater contaminate stored water.

**Floodwater is not clean water.** Floodwater and standing water can carry sewage, chemicals, and pathogens; the CDC warns against contact where avoidable and against letting it touch food or drinking water. Wash thoroughly after any contact (CDC, 2023).

**Practical action.** Add soap, hand sanitizer (≥60% alcohol), and disposable gloves to your kit, and write a simple household hygiene routine for a no-running-water scenario (when to wash, how to keep greywater separate).

## Sources
Centers for Disease Control and Prevention. (2023). *Hygiene and handwashing in emergencies.* U.S. Department of Health and Human Services. https://www.cdc.gov/hygiene/disasters/index.html
Centers for Disease Control and Prevention. (2023). *Stay safe after a flood.* U.S. Department of Health and Human Services. https://www.cdc.gov/floods/safety/index.html`,
      recallContent: [
        {
          prompt: "When plumbing fails, how does the CDC suggest handling human waste?",
          answer: "Build an emergency toilet, for example a sturdy bucket with a tight-fitting lid lined with a plastic bag, then contain, cover, and dispose of waste so it cannot contaminate people, food, or water.",
        },
        {
          prompt: "What is the core sanitation principle for keeping waste from spreading disease?",
          answer: "Keep waste and any latrine well away from water sources and food, seal and cover it, wash hands after every contact, and follow local instructions for final disposal rather than dumping into storm drains or waterways.",
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 7: First aid
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "first-aid-know-your-limits",
      title: "17 · First aid essentials: know your limits, get trained",
      section: "Section 7 · First Aid",
      body: `${SAFETY}

> ⚠️ **You cannot learn first aid from reading.** This lesson tells you *what to learn and where*. It is not a substitute for a hands-on, certified course.

**Concept.** First aid is the immediate care given before professional help arrives. It genuinely saves lives, *when performed by someone trained*. The American Red Cross offers in-person and blended courses in first aid, CPR, and AED use, which is the correct way to gain these skills (American Red Cross, 2024).

**The "know your limits" framing.** The most dangerous mistake a layperson makes is attempting an advanced procedure they've only read about. The safe posture is: **call emergency services first**, provide only care you're trained and equipped to give, and follow the dispatcher's instructions. This course teaches the *decision to get trained and call for help*. It does not teach procedures.

**What belongs in your knowledge base (via training).** Recognizing an emergency and activating 911; the basics of CPR and using an AED; controlling severe bleeding; recognizing shock, stroke, heart attack, and the temperature emergencies from Section 3. Learn each of these hands-on.

**Practical action.** Book a Red Cross (or equivalent) first aid/CPR/AED course, and stock a first aid kit using the Red Cross recommended contents. Note where the nearest AED to your home and workplace is.

## Sources
American Red Cross. (2024). *First aid, CPR & AED training and certification.* https://www.redcross.org/take-a-class/first-aid
American Red Cross. (2024). *Make a first aid kit.* https://www.redcross.org/get-help/how-to-prepare-for-emergencies/anatomy-of-a-first-aid-kit.html`,
      recallContent: [
        {
          prompt: "What is one of the most effective disease-prevention tools after a disaster, and when should you use hand sanitizer?",
          answer: "Handwashing with soap and clean water, especially before eating or preparing food and after using the toilet or handling waste. Use an alcohol-based sanitizer (at least 60% alcohol) when clean water is not available.",
        },
        {
          prompt: "Why must greywater and floodwater be kept away from your drinking water?",
          answer: "Greywater is not safe to drink and can carry bacteria, and floodwater can carry sewage, chemicals, and pathogens. Keep both away from drinking water and food, and wash thoroughly after any contact.",
        },
      ],
    },
    {
      slug: "first-aid-kit-and-scene-safety",
      title: "18 · Your first aid kit and scene safety",
      section: "Section 7 · First Aid",
      body: `${SAFETY}

**Concept: scene safety first.** Trained responders are taught to **check the scene before the patient**: an injured helper helps no one. Ensure it's safe to approach (no fire, live wires, traffic, unstable structure, or ongoing threat), use protection like gloves, then check the person and call for help. This "scene, then patient" order is foundational Red Cross teaching (American Red Cross, 2024).

**The kit.** The Red Cross publishes a recommended first aid kit contents list (bandages and dressings in assorted sizes, gauze, adhesive tape, antiseptic, gloves, a breathing barrier, scissors, tweezers, an emergency blanket, and a first aid guide, among others). Build to their list, check expiration dates, and keep one at home and one in the car (American Red Cross, 2024).

**Personal and prescription needs.** Add a several-day supply of essential medications and copies of prescriptions and medical information to your kit. [Ready.gov](https://Ready.gov) specifically flags medications and medical supplies as part of a complete kit (Federal Emergency Management Agency [FEMA], 2024).

**Practical action.** Assemble or audit a first aid kit against the Red Cross list, add your household's essential medications and a medical-info card, and set a calendar reminder to check expirations twice a year.

## Sources
American Red Cross. (2024). *Make a first aid kit.* https://www.redcross.org/get-help/how-to-prepare-for-emergencies/anatomy-of-a-first-aid-kit.html
Federal Emergency Management Agency. (2024). *Ready.gov: Build a kit.* U.S. Department of Homeland Security. https://www.ready.gov/kit`,
      recallContent: [
        {
          prompt: "What is the safest overall posture toward first aid this course teaches?",
          answer: "Know your limits: call emergency services first, provide only care you are trained and equipped to give, follow the dispatcher's instructions, and get hands-on certified training. You cannot learn first aid from reading alone.",
        },
        {
          prompt: "What is the most dangerous first-aid mistake a layperson makes?",
          answer: "Attempting an advanced procedure they have only read about. Recognition and the decision to call for help are within reach, but definitive treatment requires training.",
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 8: Communications & signaling
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "emergency-alerts-and-radios",
      title: "19 · Staying informed: alerts, radios, and weather warnings",
      section: "Section 8 · Communications & Signaling",
      body: `${SAFETY}

**Concept.** In a disaster, *information* is a survival resource. Two public systems push official warnings to you: the **Emergency Alert System (EAS)** and **Wireless Emergency Alerts (WEA)**, the short, official messages that reach broadcast media and capable mobile phones about imminent threats, from severe weather to evacuation orders (Federal Emergency Management Agency [FEMA], 2024).

**NOAA Weather Radio.** The National Weather Service operates **NOAA Weather Radio All Hazards**, a nationwide network broadcasting official weather (and other emergency) information continuously; a battery- or hand-crank NWR receiver keeps you informed even when the internet and power are down (National Weather Service [NWS], 2024).

**Understand watch vs. warning.** The NWS distinction matters: a **watch** means conditions are *possible* (prepare); a **warning** means the hazard is *happening or imminent* (act now) (NWS, 2024).

**Practical action.** Put a battery/hand-crank radio that receives NOAA Weather Radio in your kit, confirm Wireless Emergency Alerts are enabled on your phone, and make sure everyone in your household knows the difference between a watch and a warning.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Alerts and warnings.* U.S. Department of Homeland Security. https://www.ready.gov/alerts
National Weather Service. (2024). *NOAA Weather Radio All Hazards.* National Oceanic and Atmospheric Administration. https://www.weather.gov/nwr/`,
      recallContent: [
        {
          prompt: "What does 'scene, then patient' mean, and why does it matter?",
          answer: "Check that the scene is safe to approach (no fire, live wires, traffic, unstable structure, or ongoing threat) and use protection like gloves before you reach the person. An injured helper helps no one.",
        },
        {
          prompt: "What should a first aid kit contain, and where should you keep it?",
          answer: "The Red Cross list: assorted bandages and dressings, gauze, tape, antiseptic, gloves, a breathing barrier, scissors, tweezers, an emergency blanket, and a guide, plus your essential medications. Keep one at home and one in the car and check expirations.",
        },
      ],
    },
    {
      slug: "communication-plan-and-signaling",
      title: "20 · Your communication plan, and signaling for help",
      section: "Section 8 · Communications & Signaling",
      body: `${SAFETY}

**Concept: plan to reach each other.** [Ready.gov](https://Ready.gov) advises every household to make a **family communication plan**: pick an **out-of-town contact** (long-distance lines and texts often work when local ones are jammed), agree on meeting places, keep a written copy of key numbers (phones die), and remember that **texting often succeeds when calls fail** because it uses less bandwidth (Federal Emergency Management Agency [FEMA], 2024).

**When help is delayed: signaling.** If you're stranded, the goal is to be **found**: stay put if it's safe (a stationary person is easier to locate), make yourself **visible and audible**, and use signals rescuers recognize. A **whistle** carries farther than your voice and takes little energy, which is why [Ready.gov](https://Ready.gov) includes one in the basic kit (FEMA, 2024). Signal mirrors, bright materials, and lights extend visibility; three of anything (three whistle blasts, three fires) is a widely recognized distress signal.

**Manage expectations honestly.** In a large disaster, professional help can be **hours or days** away. That reality is *why* the whole course exists: your plan, kit, and skills carry you through the gap until responders arrive.

**Practical action.** Complete the [Ready.gov](https://Ready.gov) family communication plan (out-of-town contact, meeting spots, written contact card), add a whistle and a signaling method to your kit, and agree on your household's "if separated" rally point.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Make a plan.* U.S. Department of Homeland Security. https://www.ready.gov/plan
Federal Emergency Management Agency. (2024). *Ready.gov: Build a kit.* U.S. Department of Homeland Security. https://www.ready.gov/kit`,
      recallContent: [
        {
          prompt: "Which two public systems push official warnings, and what is NOAA Weather Radio?",
          answer: "The Emergency Alert System (EAS) and Wireless Emergency Alerts (WEA). NOAA Weather Radio All Hazards is a nationwide network broadcasting official weather and emergency information continuously, reachable on a battery or hand-crank receiver when power and internet are down.",
        },
        {
          prompt: "What is the difference between a watch and a warning?",
          answer: "A watch means conditions are possible, so prepare. A warning means the hazard is happening or imminent, so act now.",
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EXERCISE: fill-in production drill
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "survival-key-facts-exercise",
      title: "21 · Practice: recall the key preparedness facts",
      section: "Practice & Assessment",
      body: `${SAFETY}

Fill in each blank from the cited lessons. This is *formative* practice. Check yourself against the key, then re-read the linked source for anything you miss. Getting these grounded in the official guidance is the point.`,
      exercise: {
        instructions:
          "Type the answer for each blank. These come straight from the government/Red Cross sources cited in the lessons. Verify anything you miss against the source.",
        items: [
          {
            prompt:
              "The rule of 3s orders survival priorities. Roughly, a person can go about 3 days without ___.",
            answer: "water",
            accept: ["clean water", "drinking water"],
            hint: "It's the priority right after air and shelter.",
            explanation:
              "The rule of 3s (~3 min without air, ~3 hr without shelter, ~3 days without water, ~3 weeks without food) is a rough sequencing aid, not a guarantee. See 'The rule of 3s.'",
          },
          {
            prompt:
              "[Ready.gov](https://Ready.gov)'s basic guidance is to store at least ___ gallon(s) of water per person per day.",
            answer: "one",
            accept: ["1", "one gallon", "1 gallon"],
            hint: "Per person, per day.",
            explanation:
              "At least one gallon per person per day covers drinking and basic sanitation; store more in heat or for those who are ill (CDC, 2022; FEMA, 2024).",
          },
          {
            prompt:
              "Two different jobs: ___ physically strains particles/many microbes out, while purification/disinfection kills or inactivates pathogens.",
            answer: "filtration",
            accept: ["filtering", "filtration (a filter)"],
            hint: "The physical, straining step.",
            explanation:
              "Filtration removes particles and many microbes but often not viruses or chemicals; disinfection (boiling/chemical/UV) kills pathogens. Cloudy water usually needs both (EPA, 2024; CDC, 2024).",
          },
          {
            prompt:
              "To kill microbes, the CDC says bring clear water to a rolling boil for ___ minute(s) (longer at high altitude).",
            answer: "one",
            accept: ["1", "one minute", "1 minute"],
            hint: "Three minutes above ~6,500 ft.",
            explanation:
              "Rolling boil for 1 minute (3 minutes above ~6,500 ft) is the CDC's most reliable method for killing pathogens; filter or settle cloudy water first (CDC, 2024).",
          },
          {
            prompt:
              "The colorless, odorless gas that makes running a generator or grill indoors deadly is carbon ___.",
            answer: "monoxide",
            accept: ["monoxide (CO)", "co"],
            hint: "Abbreviated 'CO.'",
            explanation:
              "Never run generators, grills, or camp stoves indoors or near windows; install battery-backup CO alarms and get to fresh air if one sounds (CDC, 2024).",
          },
          {
            prompt:
              "The USDA's memorable food-safety rule for questionable food after an outage: 'When in doubt, ___ it out.'",
            answer: "throw",
            accept: ["throw it out"],
            hint: "You can't judge safety by smell.",
            explanation:
              "Keep fridge/freezer doors closed (safe ~4 hr fridge, ~48 hr full freezer); discard perishables held above 40°F over 2 hours. When in doubt, throw it out (USDA, 2023).",
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // QUIZ: graded assessment gate
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "survival-final-quiz",
      title: "22 · Final assessment",
      section: "Practice & Assessment",
      body: `${SAFETY}

A ten-question check on the course's core, cited principles. Passing score is 70%. Each question links back to the lesson that teaches it. Review the source for anything you miss. Remember: passing this quiz is *not* training. For life-safety skills, take a hands-on course and follow official guidance.`,
      quiz: {
        passingScore: 70,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        shuffleOptions: true,
        questions: [
          {
            prompt:
              "According to the 'rule of 3s,' which need should you generally address FIRST after immediate danger and air?",
            options: [
              "Finding food to eat",
              "Shelter and body warmth",
              "Signaling for help",
              "Charging your cell phone",
            ],
            correctIndex: 1,
            explanation:
              "The rule of 3s sequences priorities: air, then shelter (~3 hours in a harsh environment), then water (~3 days), then food (~3 weeks). Shelter comes before water and food.",
            sourceLessonSlug: "rule-of-threes-and-priorities",
          },
          {
            prompt:
              "How much water does federal/CDC guidance say to store, at minimum, per person per day?",
            options: [
              "One cup",
              "One quart",
              "One gallon",
              "Five gallons",
            ],
            correctIndex: 2,
            explanation:
              "Store at least one gallon per person per day for drinking and sanitation, more for hot climates, children, or anyone ill (CDC, 2022; FEMA, 2024).",
            sourceLessonSlug: "water-need-and-storage",
          },
          {
            prompt:
              "What is the key difference between filtration and purification (disinfection)?",
            options: [
              "They are the same thing",
              "Filtration strains out particles; disinfection kills pathogens",
              "Purification removes chemical contamination; filtration does not do anything",
              "Filtration is only for salt water",
            ],
            correctIndex: 1,
            explanation:
              "Filtration physically removes particles and many microbes (often not viruses); disinfection (boiling/chemical/UV) kills pathogens. Neither removes chemical contamination (EPA, 2024; CDC, 2024).",
            sourceLessonSlug: "filtration-vs-purification",
          },
          {
            prompt:
              "The CDC says the most reliable way to kill disease-causing organisms in clear water is to:",
            options: [
              "Let it sit in sunlight for an hour",
              "Add a pinch of table salt to it",
              "Bring it to a full rolling boil",
              "Freeze it into solid block ice",
            ],
            correctIndex: 2,
            explanation:
              "Boiling clear water at a rolling boil for 1 minute (3 minutes above ~6,500 ft) is the CDC's most reliable method; filter or settle cloudy water first (CDC, 2024).",
            sourceLessonSlug: "disinfecting-water-methods",
          },
          {
            prompt:
              "Which practice is a deadly carbon monoxide risk you must NEVER do?",
            options: [
              "Opening a window for fresh air",
              "Running a generator or grill indoors",
              "Installing a battery-backup CO alarm",
              "Using a handheld LED flashlight",
            ],
            correctIndex: 1,
            explanation:
              "Never run generators, charcoal grills, or camp stoves indoors, in a garage, or near windows. CO is colorless and odorless and kills. Use battery-backup CO alarms (CDC, 2024).",
            sourceLessonSlug: "generator-and-fuel-safety",
          },
          {
            prompt:
              "During a power outage, the USDA advises you to:",
            options: [
              "Open the freezer often to check on food",
              "Keep fridge and freezer doors closed",
              "Judge safety by smell and taste",
              "Move all frozen food to the counter",
            ],
            correctIndex: 1,
            explanation:
              "Keep doors closed (safe ~4 hr fridge, ~48 hr full freezer); discard perishables above 40°F over 2 hours. You cannot judge safety by smell. When in doubt, throw it out (USDA, 2023).",
            sourceLessonSlug: "food-storage-and-safety",
          },
          {
            prompt:
              "Which statement about foraging wild food in an emergency is correct?",
            options: [
              "If an animal eats a plant, it is safe for humans",
              "Never eat a plant or mushroom you cannot identify",
              "Bitter taste reliably signals a poisonous plant",
              "Foraging should be your first priority in any emergency",
            ],
            correctIndex: 1,
            explanation:
              "Positive expert identification or don't eat it. Toxic look-alikes cause serious poisonings. Food is the ~3-week priority; water and shelter come first. Save Poison Control (1-800-222-1222) (CDC, 2021).",
            sourceLessonSlug: "foraging-safety-principles",
          },
          {
            prompt:
              "When plumbing fails, the CDC's core sanitation principle is to:",
            options: [
              "Dump waste into the nearest storm drain",
              "Contain, cover, keep it from water and food",
              "Ignore it entirely until services return",
              "Bury it next to your drinking-water container",
            ],
            correctIndex: 1,
            explanation:
              "Build an emergency toilet, contain and cover waste, keep it well away from water and food, and follow local disposal instructions to prevent disease (CDC, 2020).",
            sourceLessonSlug: "sanitation-human-waste",
          },
          {
            prompt:
              "What is the safest overall posture toward first aid that this course teaches?",
            options: [
              "Attempt any medical procedure you have read about",
              "Call for help and give only care you are trained for",
              "Reading a guide is equivalent to taking a course",
              "Wait and do nothing until professionals arrive, always",
            ],
            correctIndex: 1,
            explanation:
              "Know your limits: call for help first, provide only trained care, follow dispatcher instructions, and get certified (Red Cross). You cannot learn first aid from reading alone (American Red Cross, 2024).",
            sourceLessonSlug: "first-aid-know-your-limits",
          },
          {
            prompt:
              "According to the National Weather Service, what is the difference between a 'watch' and a 'warning'?",
            options: [
              "They mean exactly the same thing",
              "A watch means the hazard is happening now; a warning means it might happen later",
              "A watch means conditions are possible; a warning means act now",
              "A warning only applies to floods",
            ],
            correctIndex: 2,
            explanation:
              "Watch = conditions possible, prepare; Warning = happening or imminent, act now. Keep a NOAA Weather Radio and enable Wireless Emergency Alerts (NWS, 2024; FEMA, 2024).",
            sourceLessonSlug: "emergency-alerts-and-radios",
          },
        ],
      },
    },
  ],
};
