// Authored "Off-Grid & Emergency Survival" course for Learn.WitUS (category "Survival").
// Life-safety subject matter: this course is EDUCATIONAL. Its cited backbone is built
// ENTIRELY from public / U.S. government preparedness sources (Ready.gov / FEMA,
// American Red Cross, CDC, U.S. EPA, USDA, NWS / NOAA), with APA 7 in-line citations
// and a per-lesson `## Sources` bibliography — the WitUS citation standard.
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
const SAFETY = `> ⚠️ **Safety disclaimer.** This lesson is **educational only**. It teaches general principles, not emergency procedures. Always follow current official guidance (Ready.gov, your local emergency managers, the American Red Cross, CDC), and consult trained professionals. **Do not rely on this material in a real emergency without proper hands-on training.** When in doubt, call for help and defer to local authorities.`;

export const SURVIVAL_COURSE: AuthoredCourse = {
  title: "Off-Grid & Emergency Survival",
  description:
    "A calm, cited, principles-first introduction to emergency preparedness and off-grid resilience — planning and kits, water, shelter and warmth, food, off-grid power, sanitation, first aid, and communications. Every lesson is grounded in public U.S. government and Red Cross guidance (Ready.gov/FEMA, CDC, EPA, USDA, NWS/NOAA) and points you back to those authorities. Educational only: it teaches you what to learn and where to verify it — not a substitute for hands-on training.",
  lessons: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — Preparedness mindset
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "welcome-and-safety",
      title: "1 · Welcome, and how to use this course safely",
      section: "Section 1 · Preparedness Mindset",
      body: `${SAFETY}

**What this course is.** A structured, *cited* orientation to emergency preparedness and off-grid living, built from public and U.S. government sources. It is designed to make you a better, calmer planner — and to send you to the authorities and hands-on training that can actually keep you safe.

**What this course is NOT.** It is not a field manual, not medical advice, and not a license to attempt risky procedures. Preparedness topics — water treatment, fire and heat, food and foraging, first aid, and power — are **life-safety** subjects. Getting them subtly wrong can hurt you. So throughout, the course teaches **principles** and then says: *verify with the authority, and get trained.*

**Why "cited" matters here.** In an emergency, rumors and confident-sounding folklore spread fast. The habit this course drills is to trace every claim to a named, checkable, official source. Each lesson ends with a \`## Sources\` list in APA 7 style; treat those agencies — not this course — as the authority (Federal Emergency Management Agency [FEMA], 2024).

**A note on further reading.** Popular trade books on off-grid living (for example, R. Smith's *No Grid Survival Book*, 2025) can be useful as topic maps, but they are copyrighted opinion, not official guidance. Where a life is on the line, prefer Ready.gov, the American Red Cross, the CDC, the EPA, the USDA, and the National Weather Service.

**How to study.** Read a section, then *do the practical action* it names (build the kit, fill the water containers, draft the plan). Preparedness is a verb.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Make a plan.* U.S. Department of Homeland Security. https://www.ready.gov/plan`,
    },
    {
      slug: "rule-of-threes-and-priorities",
      title: "2 · The rule of 3s: setting survival priorities",
      section: "Section 1 · Preparedness Mindset",
      body: `${SAFETY}

**Concept.** The "rule of 3s" is a memory aid for ordering priorities under stress: a person can survive roughly **3 minutes without breathable air, ~3 hours without shelter in a harsh environment, ~3 days without water, and ~3 weeks without food.** These are rough rules of thumb, not medical guarantees — individual limits vary widely with health, temperature, and exertion. Their real value is **sequencing**: they tell you what to solve first.

**Why it matters.** People routinely invert the order — stockpiling food while ignoring shelter and water. The rule of 3s says: secure air and immediate danger, then protect core body temperature (shelter/warmth), then water, then food. Federal guidance similarly frames the core needs of any disaster plan around staying informed, sheltering, water, and food (Federal Emergency Management Agency [FEMA], 2024).

**Principle over specifics.** Notice this lesson gives you an *ordering*, not a stunt. That is the pattern for the whole course.

**Practical action.** For a scenario you might realistically face (winter power outage, flood, wildfire evacuation), write the four priorities in order and one action for each. Compare your plan to your local emergency management agency's guidance.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Make a plan.* U.S. Department of Homeland Security. https://www.ready.gov/plan
Centers for Disease Control and Prevention. (2023). *Personal health preparedness.* U.S. Department of Health and Human Services. https://www.cdc.gov/orr/infographics/00_disasters_severe.htm`,
    },
    {
      slug: "make-a-plan-and-kit",
      title: "3 · Building a family plan and an emergency kit",
      section: "Section 1 · Preparedness Mindset",
      body: `${SAFETY}

**Concept.** Preparedness is two artifacts: a **plan** (who does what, where you meet, how you communicate, how you evacuate) and a **kit** (the supplies to get through the first stretch on your own). Ready.gov recommends every household make a plan that accounts for the specific needs of its members — children, older adults, people with disabilities, pets — and practices it (Federal Emergency Management Agency [FEMA], 2024).

**The basic kit.** Federal guidance describes a basic disaster supplies kit including, at minimum: water and food for several days, a battery- or hand-crank radio, flashlight, first aid kit, extra batteries, whistle, dust mask, moist towelettes/garbage bags for sanitation, wrench/pliers to shut off utilities, manual can opener, local maps, and backup power for phones (Federal Emergency Management Agency [FEMA], 2024). The Red Cross publishes a comparable survival-kit checklist (American Red Cross, 2024).

**How much water and food.** Store **at least one gallon of water per person per day for several days** (Ready.gov advises a minimum of three days for evacuation and two weeks for home) and a several-day supply of non-perishable food (Federal Emergency Management Agency [FEMA], 2024). We treat water in depth in Section 2.

**Practical action.** Download the Ready.gov plan template and the Red Cross kit checklist, and complete one shelf of the kit this week. Put the plan somewhere everyone in the household can find it.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Build a kit.* U.S. Department of Homeland Security. https://www.ready.gov/kit
Federal Emergency Management Agency. (2024). *Ready.gov: Make a plan.* U.S. Department of Homeland Security. https://www.ready.gov/plan
American Red Cross. (2024). *Survival kit supplies.* https://www.redcross.org/get-help/how-to-prepare-for-emergencies/survival-kit-supplies.html`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — Water
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "water-need-and-storage",
      title: "4 · Water: how much, and storing it safely",
      section: "Section 2 · Water",
      body: `${SAFETY}

**Concept.** Water is the priority you can least afford to get wrong. Store **at least one gallon per person per day**, covering drinking and basic sanitation; plan more for hot climates, children, nursing parents, and people who are ill (Centers for Disease Control and Prevention [CDC], 2022). Ready.gov recommends a **two-week** home supply where possible (Federal Emergency Management Agency [FEMA], 2024).

**Safe storage.** Use food-grade, sealed containers; commercially bottled water is simplest. If you fill your own, use clean, sanitized food-grade containers, keep them sealed, store away from heat and sunlight, and label and rotate them (the CDC gives the specific cleaning-and-replacement steps — follow theirs, not folklore) (CDC, 2022).

**Why "verify" beats "improvise" here.** The details — container type, how to sanitize, how long stored water keeps — are exactly the kind of specifics that vary and that authorities keep current. Read the CDC's storage page and do what it says.

**Practical action.** Calculate your household's two-week need (people × 14 gallons) and start building toward it with sealed, food-grade containers. Note your rotation date.

## Sources
Centers for Disease Control and Prevention. (2022). *Creating and storing an emergency water supply.* U.S. Department of Health and Human Services. https://www.cdc.gov/healthywater/emergency/creating-storing-emergency-water-supply.html
Federal Emergency Management Agency. (2024). *Ready.gov: Water.* U.S. Department of Homeland Security. https://www.ready.gov/water`,
    },
    {
      slug: "filtration-vs-purification",
      title: "5 · Filtration vs. purification: they are not the same",
      section: "Section 2 · Water",
      body: `${SAFETY}

**Concept — the core distinction.** **Filtration** physically strains particles and many (not all) microbes out of water. **Purification / disinfection** *kills or inactivates* pathogens (bacteria, viruses, some parasites) — typically by boiling, chemical disinfection, or UV. Many portable filters do not reliably remove **viruses**, and no filter removes chemical contamination; that is why the two steps are distinct (U.S. Environmental Protection Agency [EPA], 2024; CDC, 2024).

**Why it matters.** Cloudy, unsafe water often needs **both**: filter or settle out the sediment first (so disinfection can work), *then* disinfect. Treating this as one step is a classic and dangerous mistake.

**Chemical contamination is a hard limit.** Boiling and household disinfection **do not** make chemically contaminated water safe, and can concentrate some contaminants. If you suspect fuel, pesticide, or industrial contamination, do not drink it — use a known-safe source and follow official instructions (EPA, 2024).

**Principle over specifics.** This lesson deliberately does not hand you a recipe; the next lesson covers the three official disinfection methods, each with "read the exact ratios from the source."

**Practical action.** For each water source you might rely on, write whether it needs filtering, disinfecting, or both — and which contaminant you're worried about (microbes vs. chemicals). Verify your reasoning against the EPA's emergency disinfection page.

## Sources
U.S. Environmental Protection Agency. (2024). *Emergency disinfection of drinking water.* https://www.epa.gov/ground-water-and-drinking-water/emergency-disinfection-drinking-water
Centers for Disease Control and Prevention. (2024). *Making water safe in an emergency.* U.S. Department of Health and Human Services. https://www.cdc.gov/healthywater/emergency/making-water-safe.html`,
    },
    {
      slug: "disinfecting-water-methods",
      title: "6 · Making water safe: boiling, chemical, and filters",
      section: "Section 2 · Water",
      body: `${SAFETY}

> ⚠️ **Extra caution.** Getting water treatment wrong causes serious illness. Use the CDC's and EPA's *current* instructions for exact times and doses — the summaries below tell you the methods and their limits, not a substitute for reading the source.

**Method 1 — Boiling (most reliable for microbes).** The CDC calls boiling the best way to kill disease-causing organisms. Bring clear water to a **rolling boil for one minute** (longer at high altitude — the CDC specifies three minutes above ~6,500 ft), then let it cool; if the water is cloudy, filter or let it settle first (CDC, 2024).

**Method 2 — Chemical disinfection.** When you cannot boil, unscented household chlorine bleach or iodine/chlorine dioxide products can disinfect clear water — but **only in the correct dose and contact time**, which depend on product concentration and water temperature/clarity. Read the EPA's exact ratios; do not guess (EPA, 2024).

**Method 3 — Filters.** Portable filters remove particles and many microbes; effectiveness depends on the filter's rated pore size and whether it's paired with disinfection for viruses. Combine filtering (for clarity/parasites) with boiling or chemical treatment (for viruses) when in doubt (CDC, 2024).

**None of these fix chemicals.** As in the prior lesson: treatment addresses **pathogens**, not chemical contamination.

**Practical action.** Write down the boiling rule from the CDC page (including the high-altitude time) and, if you keep disinfection chemicals, copy the EPA's exact dose for your product onto a card in your kit.

## Sources
Centers for Disease Control and Prevention. (2024). *Making water safe in an emergency.* U.S. Department of Health and Human Services. https://www.cdc.gov/healthywater/emergency/making-water-safe.html
U.S. Environmental Protection Agency. (2024). *Emergency disinfection of drinking water.* https://www.epa.gov/ground-water-and-drinking-water/emergency-disinfection-drinking-water`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — Shelter & warmth
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "shelter-site-and-insulation",
      title: "7 · Shelter: site selection and insulation",
      section: "Section 3 · Shelter & Warmth",
      body: `${SAFETY}

**Concept.** After immediate danger and air, **shelter protects your core body temperature** — the "3 hours" priority. Good shelter does three things: blocks wind and precipitation, insulates you from heat loss (especially to the ground), and is sited away from hazards (flood channels, dead trees, unstable ground, flames/smoke).

**Insulation basics.** Heat leaves the body by conduction, convection, radiation, and evaporation. Practically: get **off the cold ground** (ground conducts heat away fast), block the **wind**, and stay **dry** (wet clothing destroys insulation). Layering trapped air — clothing, blankets, or debris — is what keeps you warm, not the material alone.

**Sheltering in place vs. evacuating.** Often the safest shelter is your own home or a designated public shelter. Ready.gov's guidance is to know both: how to shelter safely in place *and* when and how to evacuate on official instruction (Federal Emergency Management Agency [FEMA], 2024).

**Practical action.** Identify your home's safest shelter spot for the hazards you face (e.g., an interior room for high winds) and confirm your community's official shelter and evacuation routes with local emergency management.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Shelter.* U.S. Department of Homeland Security. https://www.ready.gov/shelter
Federal Emergency Management Agency. (2024). *Ready.gov: Evacuation.* U.S. Department of Homeland Security. https://www.ready.gov/evacuating-yourself-and-your-family`,
    },
    {
      slug: "safe-heat-and-ventilation",
      title: "8 · Staying warm safely: heat sources and ventilation",
      section: "Section 3 · Shelter & Warmth",
      body: `${SAFETY}

> ⚠️ **Carbon monoxide kills silently.** Any flame or fuel-burning device indoors is a life-safety hazard. Read this lesson and the CDC's CO guidance before using any alternative heat.

**Concept.** In a cold-weather outage people improvise heat — and every year some die from **carbon monoxide (CO)** poisoning, a colorless, odorless gas. The CDC's rule is blunt: **never** use generators, charcoal grills, camp stoves, or other gasoline/charcoal-burning devices inside a home, basement, garage, or near windows; and never use a gas stove or oven to heat a home (Centers for Disease Control and Prevention [CDC], 2024).

**The two safety systems.** (1) **Ventilation** — combustion needs fresh air and a path for exhaust to leave; enclosed spaces trap CO. (2) **Detection** — install battery-backup CO alarms and know that headache, dizziness, and nausea can be CO symptoms; if the alarm sounds or you feel ill, **get to fresh air and call for help** (CDC, 2024).

**Fire risk.** Space heaters and open flame also cause fires; keep anything that burns well away, never leave them unattended, and follow the manufacturer's and fire department's guidance.

**Principle over specifics.** Rather than a DIY heater "hack," the takeaway is: use only devices rated for indoor use as directed, ventilate, detect CO, and when the safe option isn't available, relocate to a warming shelter.

**Practical action.** Confirm you have working CO alarms with battery backup, and write your cold-outage plan: which heat sources are safe indoors, and where the nearest warming shelter is.

## Sources
Centers for Disease Control and Prevention. (2024). *Carbon monoxide poisoning: Prevention.* U.S. Department of Health and Human Services. https://www.cdc.gov/carbon-monoxide/prevention/index.html
Federal Emergency Management Agency. (2024). *Ready.gov: Power outages.* U.S. Department of Homeland Security. https://www.ready.gov/power-outages`,
    },
    {
      slug: "hypothermia-and-heat-illness",
      title: "9 · Recognizing hypothermia and heat illness",
      section: "Section 3 · Shelter & Warmth",
      body: `${SAFETY}

> ⚠️ **These are medical emergencies.** Learn to *recognize* them; get trained to *respond*. When in doubt, call emergency services.

**Concept — two temperature dangers.** **Hypothermia** is dangerously low body temperature; the CDC lists warning signs such as shivering, exhaustion/confusion, fumbling hands, memory loss, slurred speech, and drowsiness — and in infants, bright red or cold skin and very low energy. It treats a body temperature below 95°F (35°C) as an emergency requiring medical attention (Centers for Disease Control and Prevention [CDC], 2022).

**Heat illness** runs the other way: **heat exhaustion** (heavy sweating, weakness, nausea, headache) can progress to **heat stroke** — a life-threatening emergency with high body temperature, confusion, and possibly no sweating — which the CDC says requires calling 911 and rapid cooling (CDC, 2022).

**The principle.** Prevention and *early recognition* are within a layperson's reach; definitive treatment is not. The course teaches you the warning signs and the "call for help / begin cooling or warming as directed" response, and stops there — deliberately.

**Get trained.** Take a first aid course (Section 7) so recognition connects to competent action.

**Practical action.** Make a small card for your kit listing the hypothermia and heat-stroke warning signs from the CDC pages, plus "call 911." Review it with your household.

## Sources
Centers for Disease Control and Prevention. (2022). *Hypothermia.* U.S. Department of Health and Human Services. https://www.cdc.gov/disasters/winter/staysafe/hypothermia.html
Centers for Disease Control and Prevention. (2022). *Heat stress: Heat-related illness.* U.S. Department of Health and Human Services. https://www.cdc.gov/niosh/topics/heatstress/heatrelillness.html`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — Food
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "food-storage-and-safety",
      title: "10 · Emergency food: storage and safety",
      section: "Section 4 · Food",
      body: `${SAFETY}

**Concept.** Food is the lowest-priority immediate need (the "3 weeks" rule) — which is *why* it's tempting to over-invest in it and under-invest in water and shelter. Store a **several-day supply of non-perishable food** that needs little or no cooking, water, or refrigeration, choosing items your household will actually eat and rotating them by date (Federal Emergency Management Agency [FEMA], 2024).

**Food safety during outages.** During a power outage, the USDA's rule is to **keep refrigerator and freezer doors closed**: a fridge holds safe temperature about 4 hours, a full freezer about 48 hours (24 if half-full). Discard perishable food held above 40°F for more than 2 hours, and — critically — **"When in doubt, throw it out"**; you cannot rely on smell or taste to judge safety (U.S. Department of Agriculture [USDA], 2023).

**Practical action.** Stock a several-day no-cook food shelf and put an appliance thermometer in your fridge and freezer so you can *verify* temperature after an outage rather than guess.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Food.* U.S. Department of Homeland Security. https://www.ready.gov/food
U.S. Department of Agriculture, Food Safety and Inspection Service. (2023). *Food safety during power outage.* https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/food-safety-during-power-outage`,
    },
    {
      slug: "food-preservation-basics",
      title: "11 · Preservation basics: canning, drying, and their limits",
      section: "Section 4 · Food",
      body: `${SAFETY}

> ⚠️ **Home canning can be deadly if done wrong.** Improperly canned low-acid foods can grow *Clostridium botulinum* (botulism). Follow tested USDA/Extension recipes exactly — do not improvise.

**Concept.** Preservation extends food by removing what microbes need (water, the right temperature, or a hospitable pH). The main home methods are **canning**, **freezing**, and **drying/dehydrating**. Each has strict, tested procedures published by the USDA and Cooperative Extension in the *USDA Complete Guide to Home Canning* (U.S. Department of Agriculture [USDA], 2015).

**The one rule you must respect.** **Low-acid foods** (most vegetables, meats, poultry, fish) must be processed in a **pressure canner**, because only pressure canning reaches the temperature needed to destroy botulism spores; a boiling-water bath is only safe for **high-acid** foods (most fruits, properly acidified pickles). Using the wrong method for low-acid food risks fatal botulism (USDA, 2015).

**Principle over specifics.** This lesson intentionally gives you the *decision rule* (acid level → method) and the *authority* (USDA/Extension tested recipes), not a recipe. Tested times and pressures depend on the food, jar size, and altitude — read them from the source.

**Practical action.** Pick one food you'd want to preserve, classify it as high- or low-acid, and look up the correct USDA/Extension method before ever attempting it.

## Sources
U.S. Department of Agriculture, National Center for Home Food Preservation. (2015). *Complete guide to home canning* (Agriculture Information Bulletin No. 539). https://nchfp.uga.edu/publications/publications_usda.html
Centers for Disease Control and Prevention. (2022). *Home-canned foods and botulism.* U.S. Department of Health and Human Services. https://www.cdc.gov/botulism/prevention.html`,
    },
    {
      slug: "foraging-safety-principles",
      title: "12 · Foraging: safety principles, not plant IDs",
      section: "Section 4 · Food",
      body: `${SAFETY}

> ⚠️ **Never eat any wild plant, mushroom, or animal you cannot identify with certainty from a qualified expert.** Many toxic species closely resemble edible ones, and some are lethal. This lesson teaches *principles and caution* — it deliberately gives **no** "eat this plant" identifications.

**Concept — why we teach caution, not a menu.** Remember the rule of 3s: food is the *3-week* priority. In almost any short-term emergency, foraging is unnecessary risk. Misidentification of wild mushrooms and plants causes serious poisonings every year, which is exactly why responsible teaching points you to **local experts and current field authorities**, not a memorized list (Centers for Disease Control and Prevention [CDC], 2021).

**The principles.**
1. **Positive identification or don't eat it.** Uncertainty means no.
2. **Learn from qualified local experts** — a botanist, mycological society, or Cooperative Extension — in person, for *your* region.
3. **Beware look-alikes**, and know that "animals ate it" does not mean it's safe for humans.
4. **Prioritize water and shelter first**; foraging is far down the list.
5. **If poisoning is suspected**, contact Poison Control (in the U.S., 1-800-222-1222) or emergency services immediately (CDC, 2021).

**Practical action.** Instead of learning "edibles," find the *qualified local resource* (Extension office, native-plant or mycological society) you would consult, and save Poison Control's number in your phone and kit.

## Sources
Centers for Disease Control and Prevention. (2021). *Mushroom (and wild plant) poisoning.* U.S. Department of Health and Human Services. https://www.cdc.gov/mmwr/volumes/70/wr/mm7010a4.htm
America's Poison Centers. (2024). *Poison Help: 1-800-222-1222.* https://poisoncontrol.org/`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — Off-grid power
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "off-grid-power-basics",
      title: "13 · Off-grid power basics and load planning",
      section: "Section 5 · Off-Grid Power",
      body: `${SAFETY}

**Concept.** Off-grid power is a chain: a **source** (solar panels, a generator), **storage** (batteries), **conversion** (a charge controller and an inverter that turns DC battery power into AC), and **loads** (what you run). The design question is always: *what must stay on, for how long?*

**Load planning.** List your critical loads (medical devices, phone charging, a few lights, refrigeration if possible), find each device's watts, and multiply by hours to get watt-hours per day. Size storage and source to that number with margin. Prioritize ruthlessly — in an outage, keeping a medical device and communications running beats powering conveniences (Federal Emergency Management Agency [FEMA], 2024).

**Medical power is a plan, not a gadget.** If anyone depends on electricity for health (oxygen, CPAP, refrigerated medication), Ready.gov advises making a specific power plan in advance — backup power, and knowing where to go if it fails (FEMA, 2024).

**Practical action.** Write your critical-load list with watt-hours per day, and — if someone relies on powered medical equipment — draft the power-outage plan Ready.gov describes and share it with your medical provider.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Power outages.* U.S. Department of Homeland Security. https://www.ready.gov/power-outages
Federal Emergency Management Agency. (2024). *Ready.gov: Individuals with disabilities.* U.S. Department of Homeland Security. https://www.ready.gov/disability`,
    },
    {
      slug: "generator-and-fuel-safety",
      title: "14 · Generator and fuel safety (CO is the danger)",
      section: "Section 5 · Off-Grid Power",
      body: `${SAFETY}

> ⚠️ **Portable generators produce deadly carbon monoxide.** This is the single most dangerous topic in the course. Follow the rules below and the manufacturer's instructions exactly.

**Concept.** Generators restore power — and kill people every year, almost always through **carbon monoxide (CO)** poisoning or fuel fires. The CDC and Ready.gov rules are firm:

1. **Never run a generator indoors** — not in the house, basement, garage, crawlspace, or any partly enclosed area, even with doors and windows open (Centers for Disease Control and Prevention [CDC], 2024).
2. **Place it well away from the building** — outside, far from doors, windows, and vents so exhaust cannot drift in (typically at least 20 feet; follow the manufacturer) (Federal Emergency Management Agency [FEMA], 2024).
3. **Install battery-backup CO alarms** and get to fresh air immediately if one sounds or anyone feels dizzy, headachy, or nauseous (CDC, 2024).

**Fuel and electrical safety.** Store fuel in approved containers away from living spaces and ignition sources; let the generator cool before refueling; and never "backfeed" by plugging a generator into a wall outlet — it can electrocute utility workers and start fires. Use a proper transfer switch or plug appliances directly in (FEMA, 2024).

**Practical action.** Write your generator's safe placement (distance and direction from every door/window) and confirm CO alarms with battery backup are installed on every level of your home.

## Sources
Centers for Disease Control and Prevention. (2024). *Carbon monoxide poisoning: Prevention.* U.S. Department of Health and Human Services. https://www.cdc.gov/carbon-monoxide/prevention/index.html
Federal Emergency Management Agency. (2024). *Ready.gov: Power outages.* U.S. Department of Homeland Security. https://www.ready.gov/power-outages`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — Sanitation & hygiene
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "sanitation-human-waste",
      title: "15 · Sanitation: human waste when plumbing fails",
      section: "Section 6 · Sanitation & Hygiene",
      body: `${SAFETY}

**Concept.** When water or sewer service fails, **safe disposal of human waste** becomes a top health priority — improper handling spreads disease fast. The CDC's guidance for when toilets don't work is to build an emergency toilet (for example, a sturdy bucket with a tight-fitting lid, lined with a plastic bag) and to contain, cover, and dispose of waste so it can't contaminate people, food, or water (Centers for Disease Control and Prevention [CDC], 2020).

**Key principles.**
1. **Separate waste from water and food** — keep any waste and any latrine well away from water sources and food prep.
2. **Contain and cover** — seal bags, cover odor and flies; the CDC describes adding absorbent/disinfecting material and double-bagging.
3. **Hand hygiene after every contact** (next lesson).
4. **Follow local instructions** for final disposal; do not dump waste into storm drains or waterways.

**Practical action.** Assemble a simple emergency-toilet kit (bucket with lid, heavy-duty bags, sanitizing/absorbent material, gloves) and read the CDC's emergency toilet instructions so you know the exact steps before you need them.

## Sources
Centers for Disease Control and Prevention. (2020). *Emergency toilet & keeping clean.* U.S. Department of Health and Human Services. https://www.cdc.gov/healthywater/emergency/sanitation-wastewater/toilet-emergency.html
Federal Emergency Management Agency. (2024). *Ready.gov: Build a kit.* U.S. Department of Homeland Security. https://www.ready.gov/kit`,
    },
    {
      slug: "hygiene-greywater-disease",
      title: "16 · Hygiene, greywater, and preventing disease",
      section: "Section 6 · Sanitation & Hygiene",
      body: `${SAFETY}

**Concept.** After a disaster, **handwashing and basic hygiene** are among the most effective disease-prevention tools you have. The CDC emphasizes washing hands with soap and clean water — especially before eating or preparing food and after using the toilet or handling waste — and using an alcohol-based hand sanitizer (at least 60% alcohol) when clean water isn't available (Centers for Disease Control and Prevention [CDC], 2023).

**Greywater (used wash/rinse water).** Greywater isn't safe to drink and can carry bacteria; keep it **away from your drinking-water supply, food, and any collection surfaces**, and dispose of it as local authorities direct. Never let greywater or floodwater contaminate stored water.

**Floodwater is not clean water.** Floodwater and standing water can carry sewage, chemicals, and pathogens; the CDC warns against contact where avoidable and against letting it touch food or drinking water. Wash thoroughly after any contact (CDC, 2023).

**Practical action.** Add soap, hand sanitizer (≥60% alcohol), and disposable gloves to your kit, and write a simple household hygiene routine for a no-running-water scenario (when to wash, how to keep greywater separate).

## Sources
Centers for Disease Control and Prevention. (2023). *Hygiene and handwashing in emergencies.* U.S. Department of Health and Human Services. https://www.cdc.gov/hygiene/disasters/index.html
Centers for Disease Control and Prevention. (2023). *Stay safe after a flood.* U.S. Department of Health and Human Services. https://www.cdc.gov/floods/safety/index.html`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 7 — First aid
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "first-aid-know-your-limits",
      title: "17 · First aid essentials: know your limits, get trained",
      section: "Section 7 · First Aid",
      body: `${SAFETY}

> ⚠️ **You cannot learn first aid from reading.** This lesson tells you *what to learn and where* — it is not a substitute for a hands-on, certified course.

**Concept.** First aid is the immediate care given before professional help arrives. It genuinely saves lives — *when performed by someone trained*. The American Red Cross offers in-person and blended courses in first aid, CPR, and AED use, which is the correct way to gain these skills (American Red Cross, 2024).

**The "know your limits" framing.** The most dangerous mistake a layperson makes is attempting an advanced procedure they've only read about. The safe posture is: **call emergency services first**, provide only care you're trained and equipped to give, and follow the dispatcher's instructions. This course teaches the *decision to get trained and call for help* — it does not teach procedures.

**What belongs in your knowledge base (via training).** Recognizing an emergency and activating 911; the basics of CPR and using an AED; controlling severe bleeding; recognizing shock, stroke, heart attack, and the temperature emergencies from Section 3. Learn each of these hands-on.

**Practical action.** Book a Red Cross (or equivalent) first aid/CPR/AED course, and stock a first aid kit using the Red Cross recommended contents. Note where the nearest AED to your home and workplace is.

## Sources
American Red Cross. (2024). *First aid, CPR & AED training and certification.* https://www.redcross.org/take-a-class/first-aid
American Red Cross. (2024). *Make a first aid kit.* https://www.redcross.org/get-help/how-to-prepare-for-emergencies/anatomy-of-a-first-aid-kit.html`,
    },
    {
      slug: "first-aid-kit-and-scene-safety",
      title: "18 · Your first aid kit and scene safety",
      section: "Section 7 · First Aid",
      body: `${SAFETY}

**Concept — scene safety first.** Trained responders are taught to **check the scene before the patient**: an injured helper helps no one. Ensure it's safe to approach (no fire, live wires, traffic, unstable structure, or ongoing threat), use protection like gloves, then check the person and call for help. This "scene, then patient" order is foundational Red Cross teaching (American Red Cross, 2024).

**The kit.** The Red Cross publishes a recommended first aid kit contents list (bandages and dressings in assorted sizes, gauze, adhesive tape, antiseptic, gloves, a breathing barrier, scissors, tweezers, an emergency blanket, and a first aid guide, among others). Build to their list, check expiration dates, and keep one at home and one in the car (American Red Cross, 2024).

**Personal and prescription needs.** Add a several-day supply of essential medications and copies of prescriptions and medical information to your kit — Ready.gov specifically flags medications and medical supplies as part of a complete kit (Federal Emergency Management Agency [FEMA], 2024).

**Practical action.** Assemble or audit a first aid kit against the Red Cross list, add your household's essential medications and a medical-info card, and set a calendar reminder to check expirations twice a year.

## Sources
American Red Cross. (2024). *Make a first aid kit.* https://www.redcross.org/get-help/how-to-prepare-for-emergencies/anatomy-of-a-first-aid-kit.html
Federal Emergency Management Agency. (2024). *Ready.gov: Build a kit.* U.S. Department of Homeland Security. https://www.ready.gov/kit`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 8 — Communications & signaling
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "emergency-alerts-and-radios",
      title: "19 · Staying informed: alerts, radios, and weather warnings",
      section: "Section 8 · Communications & Signaling",
      body: `${SAFETY}

**Concept.** In a disaster, *information* is a survival resource. Two public systems push official warnings to you: the **Emergency Alert System (EAS)** and **Wireless Emergency Alerts (WEA)** — the short, official messages that reach broadcast media and capable mobile phones about imminent threats, from severe weather to evacuation orders (Federal Emergency Management Agency [FEMA], 2024).

**NOAA Weather Radio.** The National Weather Service operates **NOAA Weather Radio All Hazards**, a nationwide network broadcasting official weather (and other emergency) information continuously; a battery- or hand-crank NWR receiver keeps you informed even when the internet and power are down (National Weather Service [NWS], 2024).

**Understand watch vs. warning.** The NWS distinction matters: a **watch** means conditions are *possible* — prepare; a **warning** means the hazard is *happening or imminent* — act now (NWS, 2024).

**Practical action.** Put a battery/hand-crank radio that receives NOAA Weather Radio in your kit, confirm Wireless Emergency Alerts are enabled on your phone, and make sure everyone in your household knows the difference between a watch and a warning.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Alerts and warnings.* U.S. Department of Homeland Security. https://www.ready.gov/alerts
National Weather Service. (2024). *NOAA Weather Radio All Hazards.* National Oceanic and Atmospheric Administration. https://www.weather.gov/nwr/`,
    },
    {
      slug: "communication-plan-and-signaling",
      title: "20 · Your communication plan, and signaling for help",
      section: "Section 8 · Communications & Signaling",
      body: `${SAFETY}

**Concept — plan to reach each other.** Ready.gov advises every household to make a **family communication plan**: pick an **out-of-town contact** (long-distance lines and texts often work when local ones are jammed), agree on meeting places, keep a written copy of key numbers (phones die), and remember that **texting often succeeds when calls fail** because it uses less bandwidth (Federal Emergency Management Agency [FEMA], 2024).

**When help is delayed — signaling.** If you're stranded, the goal is to be **found**: stay put if it's safe (a stationary person is easier to locate), make yourself **visible and audible**, and use signals rescuers recognize. A **whistle** carries farther than your voice and takes little energy — which is why Ready.gov includes one in the basic kit (FEMA, 2024). Signal mirrors, bright materials, and lights extend visibility; three of anything (three whistle blasts, three fires) is a widely recognized distress signal.

**Manage expectations honestly.** In a large disaster, professional help can be **hours or days** away. That reality is *why* the whole course exists: your plan, kit, and skills carry you through the gap until responders arrive.

**Practical action.** Complete the Ready.gov family communication plan (out-of-town contact, meeting spots, written contact card), add a whistle and a signaling method to your kit, and agree on your household's "if separated" rally point.

## Sources
Federal Emergency Management Agency. (2024). *Ready.gov: Make a plan.* U.S. Department of Homeland Security. https://www.ready.gov/plan
Federal Emergency Management Agency. (2024). *Ready.gov: Build a kit.* U.S. Department of Homeland Security. https://www.ready.gov/kit`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EXERCISE — fill-in production drill
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "survival-key-facts-exercise",
      title: "21 · Practice: recall the key preparedness facts",
      section: "Practice & Assessment",
      body: `${SAFETY}

Fill in each blank from the cited lessons. This is *formative* practice — check yourself against the key, then re-read the linked source for anything you miss. Getting these grounded in the official guidance is the point.`,
      exercise: {
        instructions:
          "Type the answer for each blank. These come straight from the government/Red Cross sources cited in the lessons — verify anything you miss against the source.",
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
              "Ready.gov's basic guidance is to store at least ___ gallon(s) of water per person per day.",
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
    // QUIZ — graded assessment gate
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "survival-final-quiz",
      title: "22 · Final assessment",
      section: "Practice & Assessment",
      body: `${SAFETY}

A ten-question check on the course's core, cited principles. Passing score is 70%. Each question links back to the lesson that teaches it — review the source for anything you miss. Remember: passing this quiz is *not* training. For life-safety skills, take a hands-on course and follow official guidance.`,
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt:
              "According to the 'rule of 3s,' which need should you generally address FIRST after immediate danger and air?",
            options: [
              "Food",
              "Shelter / protecting body temperature",
              "Signaling for help",
              "Charging your phone",
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
              "Store at least one gallon per person per day for drinking and sanitation — more for hot climates, children, or anyone ill (CDC, 2022; FEMA, 2024).",
            sourceLessonSlug: "water-need-and-storage",
          },
          {
            prompt:
              "What is the key difference between filtration and purification (disinfection)?",
            options: [
              "They are the same thing",
              "Filtration strains out particles/many microbes; disinfection kills or inactivates pathogens",
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
              "Add a pinch of salt",
              "Bring it to a rolling boil for 1 minute (longer at high altitude)",
              "Freeze it",
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
              "Running a generator, grill, or camp stove indoors or near windows",
              "Installing a battery-backup CO alarm",
              "Using a flashlight",
            ],
            correctIndex: 1,
            explanation:
              "Never run generators, charcoal grills, or camp stoves indoors, in a garage, or near windows — CO is colorless and odorless and kills. Use battery-backup CO alarms (CDC, 2024).",
            sourceLessonSlug: "generator-and-fuel-safety",
          },
          {
            prompt:
              "During a power outage, the USDA advises you to:",
            options: [
              "Open the freezer often to check on food",
              "Keep refrigerator and freezer doors closed and, when in doubt, throw it out",
              "Judge safety by smell and taste",
              "Move all frozen food to the counter",
            ],
            correctIndex: 1,
            explanation:
              "Keep doors closed (safe ~4 hr fridge, ~48 hr full freezer); discard perishables above 40°F over 2 hours. You cannot judge safety by smell — when in doubt, throw it out (USDA, 2023).",
            sourceLessonSlug: "food-storage-and-safety",
          },
          {
            prompt:
              "Which statement about foraging wild food in an emergency is correct?",
            options: [
              "If an animal eats a plant, it is safe for humans",
              "Never eat any wild plant or mushroom you cannot positively identify with a qualified expert",
              "Bitter taste reliably signals a poisonous plant",
              "Foraging should be your first priority in any emergency",
            ],
            correctIndex: 1,
            explanation:
              "Positive expert identification or don't eat it — toxic look-alikes cause serious poisonings. Food is the ~3-week priority; water and shelter come first. Save Poison Control (1-800-222-1222) (CDC, 2021).",
            sourceLessonSlug: "foraging-safety-principles",
          },
          {
            prompt:
              "When plumbing fails, the CDC's core sanitation principle is to:",
            options: [
              "Dump waste into the nearest storm drain",
              "Contain and cover human waste and keep it away from water and food",
              "Ignore it until services return",
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
              "Attempt any procedure you've read about",
              "Call emergency services, give only care you're trained/equipped for, and get hands-on certified training",
              "Reading a guide is equivalent to taking a course",
              "Wait and do nothing until professionals arrive, always",
            ],
            correctIndex: 1,
            explanation:
              "Know your limits: call for help first, provide only trained care, follow dispatcher instructions, and get certified (Red Cross) — you cannot learn first aid from reading alone (American Red Cross, 2024).",
            sourceLessonSlug: "first-aid-know-your-limits",
          },
          {
            prompt:
              "According to the National Weather Service, what is the difference between a 'watch' and a 'warning'?",
            options: [
              "They mean exactly the same thing",
              "A watch means the hazard is happening now; a warning means it might happen later",
              "A watch means conditions are possible (prepare); a warning means it's happening or imminent (act now)",
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
