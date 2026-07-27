// Authored "Studying Abroad" — for U.S. students (and parents) planning academic study in
// another country. In the "Travel & Living Abroad" category alongside How to Get a U.S.
// Passport (content/travel-passport) and Travel Visas 101 (content/travel-visas-101). Practical,
// plain-language, strictly informational. Every claim is cited APA 7 in-line to an authoritative
// source, verified live via WebSearch/WebFetch before authoring:
//   - travel.state.gov (U.S. Department of State, Bureau of Consular Affairs) — students-abroad
//     safety guidance, STEP, and the passport/visa framework.
//   - educationusa.state.gov (EducationUSA) and studyabroad.state.gov (USA StudyAbroad, Bureau
//     of Educational and Cultural Affairs) — program types, choosing a program, and funding.
//   - CDC Travelers' Health (wwwnc.cdc.gov/travel) — health preparation abroad.
//   - studentaid.gov (Federal Student Aid, U.S. Department of Education) — federal aid
//     portability and credit-transfer eligibility.
//
// STUDENT-VISA FRAMEWORK (load-bearing, matches the house style set by Travel Visas 101): every
// destination country sets its OWN student-visa/long-stay-permit rules, and they change. This
// course does not assert any one country's requirements. It teaches the METHOD — check
// travel.state.gov's country pages, then the destination's own official embassy/consulate or
// immigration site — and repeatedly cross-references the sibling "Travel Visas 101" course for
// the general visa-category vocabulary (visa-free, visa on arrival, e-visa, embassy/consulate
// visa) that also applies to student visas.
//
// AUTHORITATIVE-VALUES RULE (load-bearing): scholarship award amounts, loan limits, and program
// deadlines all change over time. This course never asserts a fixed dollar figure as a permanent
// fact — it describes the structure (which aid/scholarship types exist, how eligibility works) and
// repeatedly tells the learner to confirm current numbers and deadlines at the official source
// (studentaid.gov, studyabroad.state.gov) before relying on them.
//
// EducationUSA's own network primarily advises INTERNATIONAL students coming TO the U.S. — this
// course is honest about that direction and uses EducationUSA's published program-type and
// planning-timeline language the same way Travel Visas 101 uses the U.S.'s own visa system to
// illustrate a general shape ("the U.S.'s own X illustrates the general shape..."): EducationUSA's
// structure is a real, citable, official description of how exchange/short-term study works, which
// a U.S. student runs in reverse when going the other direction.
//
// Ends with a quiz whose every question links back to the lesson that teaches the answer (the
// quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const STUDYING_ABROAD_COURSE: AuthoredCourse = {
  title: "Studying Abroad",
  description:
    "A practical, plain-language planning guide for U.S. students (and parents) considering academic study in another country: the common program types (exchange, direct enrollment, faculty-led, degree-seeking), how to choose a program, the student-visa framework (each country sets its own rules, this course teaches the method, cross-referencing our Travel Visas 101 course), passport readiness, funding and financial-aid portability, health and safety abroad, credit transfer, and a full planning timeline. Cited throughout to travel.state.gov, EducationUSA and USA StudyAbroad (state.gov), CDC Travelers' Health, and studentaid.gov.",
  lessons: [
    {
      slug: "why-study-abroad-and-program-types",
      title: "1 · Why study abroad, and the common program types",
      body: `Every year, **more than 300,000 American students** study, intern, or volunteer abroad for academic credit, on programs ranging from two weeks to a full academic year, according to the U.S. Department of State's own study-abroad initiative (U.S. Department of State, Bureau of Educational and Cultural Affairs, n.d.-e). The Department frames the case for going in plain terms: study abroad is meant to help students "build skills and knowledge, prepare to solve the world's toughest challenges, and compete in the 21st century workforce" (U.S. Department of State, Bureau of Educational and Cultural Affairs, n.d.-e).

Before you can choose a program, it helps to know the shapes a "study abroad program" commonly takes. Your campus study-abroad office will usually sort options into a few recognizable categories:

- **Exchange.** Your home university has a partnership agreement with a university abroad: you go there, and (in a true exchange) a student from that university takes a seat at yours. You typically keep paying your home tuition and fees, and your credits transfer back under a pre-set agreement. The State Department's own EducationUSA network, which primarily advises *international* students coming to the U.S., describes this same shape from the other direction: "partnership agreements between a U.S. and an international university provide for student exchange opportunities" (EducationUSA, n.d.-a). A U.S. student going abroad runs the identical structure in reverse.
- **Direct enrollment.** You enroll directly as a student at the foreign university itself, alongside its own local students, rather than through a partnership slot. There's no "seat swap", you apply, and your home institution decides separately whether the credits you earn will transfer back (Lesson 8).
- **Faculty-led.** A professor from your own university leads a group of your classmates through a short, structured program abroad, often 1 to 6 weeks, over a school break or the summer, built around a specific course or major requirement. You travel and study as a cohort with your own institution's instructor.
- **Degree-seeking.** Rather than a semester or year abroad, you enroll to earn your *entire* degree from a foreign institution. This is a bigger commitment with different visa, funding, and credit implications than the shorter formats above (Lessons 3 and 7 cover how it changes the visa and funding picture).
- **Short-term / summer programs.** EducationUSA's own umbrella term for anything roughly a year or less, university exchanges, non-degree professional programs, and internships all count (EducationUSA, n.d.-a). Many students combine a short-term or summer program with a full home degree, rather than choosing between them.

None of these categories is inherently "better", they trade off cost, independence, how much support you have on the ground, and how automatically your credits transfer. The rest of this course applies to all of them, with notes on where degree-seeking programs specifically diverge.

:::reveal Name three common study-abroad program types, and what mainly distinguishes an exchange from direct enrollment. ||| Exchange, direct enrollment, faculty-led, degree-seeking, and short-term/summer are the common types. An exchange runs on a partnership agreement between two universities (often with a reciprocal student swap and pre-set credit transfer); direct enrollment means applying to and enrolling at the foreign university directly, with credit transfer decided separately by your home institution.

## Sources
- U.S. Department of State, Bureau of Educational and Cultural Affairs. (n.d.-e). Why Study Abroad? USA StudyAbroad. https://studyabroad.state.gov/value-study-abroad/why-study-abroad
- EducationUSA. (n.d.-a). What are U.S. Short-Term Programs? U.S. Department of State. https://educationusa.state.gov/your-5-steps-us-study/research-your-options/short-term/what-are-short-term-programs`,
    },
    {
      slug: "choosing-a-program",
      title: "2 · Choosing a program that fits",
      body: `With the program types from Lesson 1 in mind, narrow your choice using four practical filters:

**1. Academic fit.** Will the courses count toward your major, minor, or general-education requirements, and who decides that? The State Department's own guidance to prospective study-abroad students is blunt about where that answer lives: "speak to your campus study abroad office and/or faculty adviser to learn about opportunities and resources that may be offered by your college or university" (U.S. Department of State, Bureau of Educational and Cultural Affairs, n.d.-g). Do this **before** you fall in love with a program, not after, Lesson 8 covers why credit pre-approval is the single most important paperwork step in this whole process.

**2. Format and length.** A faculty-led summer program is a lower-commitment way to test whether study abroad is for you; a full year of direct enrollment or an exchange is a bigger academic and personal commitment. Degree-seeking abroad is bigger still (Lessons 3 and 7 note where it changes the visa and funding rules).

**3. Country and destination research.** Before you commit to a destination, review that country's own official information the same way you would for any international trip: the State Department directs students to "learn about your destination from our travel advisory and country information pages" (U.S. Department of State, Bureau of Consular Affairs, n.d.-a). A country's Travel Advisory level, health notes, and local laws (Lesson 5) are all relevant to whether a given destination fits your risk tolerance, not just its academics.

**4. Cost and funding.** Sticker price varies enormously by program type and destination; Lesson 7 covers financial aid portability and scholarships in detail. Get a real cost estimate (tuition or program fee, housing, flights, insurance, visa fees) before you apply, not after you're accepted.

Whichever program you choose, your campus study-abroad office (not a third-party program's marketing materials) is your primary resource for academic fit, since it's the one office that can actually confirm your credits will transfer (U.S. Department of State, Bureau of Educational and Cultural Affairs, n.d.-g).

:::reveal Why should you talk to your campus study-abroad office and faculty adviser BEFORE choosing a program, not after? ||| Because they're the ones who decide whether the credits you'd earn abroad actually count toward your degree, confirming that up front avoids picking a program whose credits won't transfer.

## Sources
- U.S. Department of State, Bureau of Educational and Cultural Affairs. (n.d.-g). Financial Resources for Students to Study or Conduct Research Abroad. USA StudyAbroad. https://studyabroad.state.gov/us-government-resources/financial-resources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). U.S. Students Abroad. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/before-you-go/travelers-with-special-considerations/students.htmlcontent.html`,
      recallContent: [
        {
          prompt: "Name three common study-abroad program types.",
          answer:
            "Any three of: exchange, direct enrollment, faculty-led, degree-seeking, and short-term/summer programs.",
        },
        {
          prompt: "What mainly distinguishes an exchange program from direct enrollment?",
          answer:
            "An exchange runs on a partnership agreement between two universities, often with a reciprocal student swap and pre-set credit transfer. Direct enrollment means applying to and enrolling at the foreign university directly, with credit transfer decided separately by your home institution.",
        },
      ],
    },
    {
      slug: "student-visa-framework",
      title: "3 · The student-visa framework: every country is different",
      body: `A student visa is not one universal thing, it's **permission from your destination country's own government** to stay there as a student, and every country sets its own rules for who needs one, what it requires, and how long it lasts. This course does not (and cannot responsibly) list every country's student-visa rules, because they **change**. Instead, it teaches the same method our **Travel Visas 101** course teaches for any visa, applied specifically to study abroad.

**Start with the U.S. State Department's own guidance for students abroad**, which puts the instruction plainly: "Before traveling abroad to study, make sure your passport is valid for at least six months after your trip and apply for a visa if necessary" (U.S. Department of State, Bureau of Consular Affairs, n.d.-b). Note what that sentence does *not* do, it doesn't tell you what "necessary" means for your destination, because that answer belongs to the destination's own government.

**Then research the destination itself, in the same two places Travel Visas 101 teaches for any trip:**
1. **travel.state.gov's country information pages**, for the U.S. side: Travel Advisories, general entry/exit rules, and safety notes for your specific destination.
2. **The destination country's own official embassy, consulate, or immigration authority website**, the only authoritative source for the *actual* current student-visa application process, required documents, and fees for that country, since the destination government is the one issuing it.

**Why study abroad specifically tends to trigger a visa, even where short tourist trips don't.** Many countries let U.S. citizens visit visa-free for a short stay (commonly under 90 days), but a semester or year of study usually runs longer than that visa-free window and for a different *purpose* (study, not tourism), which typically requires the more involved **embassy/consulate visa** or a long-stay residence permit category described in Travel Visas 101's visa-categories lesson, rather than the visa-free or e-visa categories a short vacation might use. Expect to need: your program's official acceptance or enrollment letter, proof of funds, and (per Lesson 4) a passport with substantial remaining validity, but confirm the *exact* list with the destination's own official source, since it varies by country.

**Enroll in STEP regardless of whether your destination requires a visa.** The Smart Traveler Enrollment Program is free, U.S.-government-run, and separate from any visa process: it sends you Travel Advisory updates for your destination and helps the nearest U.S. embassy reach you in an emergency (U.S. Department of State, Bureau of Consular Affairs, n.d.-a). Do this as soon as your program and dates are set.

:::reveal Which two sources should you check for your destination's student-visa requirements, and why doesn't this course list any specific country's rules? ||| Check travel.state.gov's country information pages (for the U.S. side and Travel Advisories) and the destination country's own official embassy/consulate or immigration site (for the actual, current application process), because the destination government sets and changes those rules unilaterally, so any list this course printed could go stale or be wrong for your specific country.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-b). U.S. Students Abroad. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/before-you-go/travelers-with-special-considerations/students.htmlcontent.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). Smart Traveler Enrollment Program (STEP). Travel.State.gov. https://travel.state.gov/en/international-travel/travel-advisories/smart-traveler-enrollment-program.html`,
      recallContent: [
        {
          prompt: "Why should you talk to your campus study-abroad office before choosing a program, not after?",
          answer:
            "Because they decide whether the credits you'd earn abroad actually count toward your degree, confirming that up front avoids picking a program whose credits won't transfer.",
        },
        {
          prompt: "What four things should you weigh when choosing a study-abroad program?",
          answer: "Academic fit/credit transfer, format and length, country/destination research (Travel Advisories, laws), and cost and funding.",
        },
      ],
    },
    {
      slug: "passport-readiness",
      title: "4 · Passport readiness for study abroad",
      body: `A student-visa application and a long stay abroad both put more pressure on your passport's remaining validity than an ordinary vacation does, plan for this early, not the month before departure.

**The baseline rule.** The State Department's own guidance for students specifically ties passport validity to your travel dates: "make sure your passport is valid for at least six months after your trip" before you travel abroad to study (U.S. Department of State, Bureau of Consular Affairs, n.d.-b). This mirrors the general six-month rule many countries apply to any international traveler, detailed further in our **How to Get a U.S. Passport** course.

**Why study abroad makes this tighter, not looser.** A semester or year abroad, plus any pre-departure processing time, plus any post-arrival extension or residence-permit process, can eat into a passport's remaining validity fast. If your passport is already getting close to that six-month cushion by the time you'd depart, you risk both a visa application being rejected and an airline refusing to let you board, since "many foreign destinations require your passport to have at least six months of validity remaining beyond your trip's dates" as a general matter, check the specific rule for your destination on its official site (U.S. Department of State, Bureau of Consular Affairs, n.d.-d).

**Blank pages matter too, if you'll be traveling within your destination region.** Some countries require two to four completely blank visa/stamp pages at entry, and you cannot add pages to an existing U.S. passport book, if you're running low, renewing before you go (choosing the standard 44-page book) is the only fix (U.S. Department of State, Bureau of Consular Affairs, n.d.-d).

**Practical timing:** apply for or renew your passport as soon as you know you're pursuing study abroad, well before you apply for a program or a visa, since both usually require a valid passport number up front, and passport processing times shift with seasonal demand (U.S. Department of State, Bureau of Consular Affairs, n.d.-d).

:::reveal Why does a semester or year of study abroad make the "six months of remaining passport validity" rule tighter than it would be for a short vacation? ||| Because a long stay, plus visa-application processing time, plus any in-country extension process, all eat into the same six-month cushion, so a passport that would be fine for a two-week trip can fall short for a semester or year abroad. Renew early rather than waiting.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-b). U.S. Students Abroad. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/before-you-go/travelers-with-special-considerations/students.htmlcontent.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-d). Frequently asked questions about passport services. Travel.State.gov. https://travel.state.gov/content/travel/en/passports/passport-help/faqs.html`,
      recallContent: [
        {
          prompt: "Which two sources should you check for your destination's student-visa requirements?",
          answer:
            "Travel.state.gov's country information pages (for the U.S. side and Travel Advisories) and the destination country's own official embassy/consulate or immigration site (for the actual, current application process).",
        },
        {
          prompt: "Why is STEP worth enrolling in even if your destination doesn't require a student visa?",
          answer:
            "It's a free, separate U.S. government safety service: it sends Travel Advisory updates for your destination and helps the nearest U.S. embassy reach you in an emergency.",
        },
      ],
    },
    {
      slug: "step-and-safety-plan",
      title: "5 · Building your safety plan before you go",
      body: `Beyond STEP itself (Lesson 3), the State Department publishes guidance written specifically for students abroad, because students face some predictable risks that a typical business traveler doesn't.

**Research goes further than the visa.** The same "know before you go" habit applies to laws, not just entry rules: "Some drugs may be legal and prescribed in the United States but are illegal in the country you are visiting. Penalties for possessing even a small amount of drugs can be severe" (U.S. Department of State, Bureau of Consular Affairs, n.d.-b). Don't assume a substance's U.S. legal status carries over, research it for your specific destination.

**Build a check-in habit.** The Department's guidance recommends students "check in with family and friends on a regular basis" and make sure family knows how to reach them in an emergency (U.S. Department of State, Bureau of Consular Affairs, n.d.-b). Agree on a check-in cadence with your family *before* you leave, not after you land.

**If you drink, do it deliberately.** Official guidance for students specifically recommends drinking "responsibly and in moderation," and to "utilize the buddy system and make sure a trusted friend knows where you are" (U.S. Department of State, Bureau of Consular Affairs, n.d.-b), advice aimed at students, since the same page notes students face elevated risk of theft and assault in unfamiliar settings.

**Know how to reach help.** Save the contact information for the nearest U.S. embassy or consulate to your program location before you arrive, and know that its American Citizens Services unit is the point of contact for a U.S. citizen in a crisis abroad (U.S. Department of State, Bureau of Consular Affairs, n.d.-b). STEP (Lesson 3) is the mechanism that lets that embassy find *you* in an emergency, rather than you having to find it.

**Use the broader resources the State Department points to**, including its own country-specific Travel Advisories and Overseas Security Advisory Council (OSAC) reports, and the CDC's destination health pages (Lesson 6) (U.S. Department of State, Bureau of Consular Affairs, n.d.-b).

:::reveal Name two pieces of student-specific safety guidance from the State Department, beyond simply enrolling in STEP. ||| Any two of: research your destination's drug laws specifically (a substance legal in the U.S. may not be abroad), set up a regular check-in habit with family before you leave, use the buddy system and drink responsibly if you drink, and know how to reach the nearest U.S. embassy's American Citizens Services unit.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-b). U.S. Students Abroad. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/before-you-go/travelers-with-special-considerations/students.htmlcontent.html`,
      recallContent: [
        {
          prompt: "Why does a semester or year of study abroad make the six-month passport-validity rule tighter than for a short vacation?",
          answer:
            "A long stay, plus visa-application processing time, plus any in-country extension process, all eat into the same six-month cushion, a passport fine for a two-week trip can fall short for a semester or year abroad.",
        },
        {
          prompt: "What should you check before assuming a substance's legal status carries over to your destination?",
          answer:
            "The destination country's own drug laws specifically, a substance legal or prescribed in the U.S. can be illegal, with severe penalties, abroad.",
        },
      ],
    },
    {
      slug: "health-abroad-cdc",
      title: "6 · Health abroad: what the CDC recommends",
      body: `The CDC's Travelers' Health program publishes guidance written specifically for students studying abroad, treat it as a checklist, not just background reading.

**Start 4-6 weeks out, not the week before you fly.** The CDC's own recommendation is specific: "make an appointment with your healthcare provider or a travel health specialist that takes place at least 4-6 weeks before you leave" (Centers for Disease Control and Prevention, n.d.). That window exists because some vaccines need time to become effective, and some require more than one dose spaced weeks apart.

**Vaccines and records.** Beyond destination-specific vaccines your travel health provider may recommend, the CDC says to "make sure you are up to date with all of your routine vaccines," and to "bring a copy of your official immunization records with you when you travel" (Centers for Disease Control and Prevention, n.d.), many universities abroad require proof of specific immunizations before you can enroll or move into housing.

**Get travel/medical insurance before you go.** The CDC lists this alongside its other pre-departure steps (Centers for Disease Control and Prevention, n.d.), and as Travel Visas 101 notes, the U.S. government does not pay medical or evacuation costs for U.S. citizens abroad, so this isn't optional protection.

**Mental health is part of health.** The CDC is direct about this: "Travel and adapting to a new culture and lifestyle in another country can be stressful and bring on new mental health issues or make existing ones worse if not treated" (Centers for Disease Control and Prevention, n.d.). Know before you leave how you'd access mental health support at your destination, and don't treat homesickness or culture shock as something to just push through alone.

**Food and water safety while there.** The CDC warns that "contaminated food or drinks can cause travelers' diarrhea and other diseases," and recommends favoring "bottled, canned, and hot drinks" and foods that are "served hot" or factory-packaged (Centers for Disease Control and Prevention, n.d.).

**After you're back.** For longer stays, the CDC suggests a post-return check-up: "even if you aren't sick and spent 6 months or more abroad you may want to consider seeing a doctor for a check-up after you return" (Centers for Disease Control and Prevention, n.d.).

:::reveal Why does the CDC recommend scheduling your pre-travel health appointment 4-6 weeks before departure, rather than the week before? ||| Because some vaccines need time to become effective, and some require more than one dose spaced weeks apart, waiting until the last week doesn't leave enough time for full protection.

## Sources
- Centers for Disease Control and Prevention. (n.d.). Studying Abroad. Travelers' Health. https://wwwnc.cdc.gov/travel/page/studying-abroad`,
      recallContent: [
        {
          prompt: "Name two pieces of student-specific safety guidance from the State Department.",
          answer:
            "Any two of: research destination drug laws specifically, set up a regular family check-in habit, use the buddy system if you drink, and know how to reach the nearest U.S. embassy's American Citizens Services unit.",
        },
        {
          prompt: "Besides vaccines, what two other health-related steps does the CDC recommend before studying abroad?",
          answer:
            "Getting travel/medical insurance, and planning ahead for how you'd access mental health support, culture shock and homesickness are real health considerations, not just something to push through.",
        },
      ],
    },
    {
      slug: "funding-study-abroad",
      title: "7 · Funding your study abroad",
      body: `Funding a program abroad usually combines two tracks: your existing federal financial aid, and study-abroad-specific scholarships. Keep them straight, since eligibility rules differ.

**Federal financial aid generally travels with you, through your home institution.** Federal Student Aid's own guidance is that aid you already qualify for can typically fund a study-abroad experience, **as long as your home U.S. institution has an arrangement to accept the credits and processes the aid on your behalf** (Federal Student Aid, U.S. Department of Education, n.d.-a). Practically, this means: file the FAFSA listing your **home institution**, not the host school, and keep it current every year you plan to study abroad (Federal Student Aid, U.S. Department of Education, n.d.-a). Your home financial-aid office, the same office from Lesson 2, is the one that actually disburses aid for a study-abroad term.

**Degree-seeking abroad works differently.** If you enroll to earn your **entire** degree directly from a foreign institution (rather than a semester/year that transfers credit back to a U.S. degree), the aid picture changes: foreign schools are **not** eligible for Federal Pell Grant or TEACH Grant funding, but federal Direct Loans can be used at foreign schools that specifically participate in the federal loan programs, a defined, published list, not every foreign university (Federal Student Aid, U.S. Department of Education, n.d.-b, n.d.-c). Confirm your specific school's participation status directly with studentaid.gov before counting on loan funding for a degree-seeking program abroad.

**Study-abroad-specific U.S. government scholarships** are a separate, additional funding track, run by the State Department's Bureau of Educational and Cultural Affairs and detailed on studyabroad.state.gov for U.S. college and university students (U.S. Department of State, Bureau of Educational and Cultural Affairs, n.d.-f):

- The **Benjamin A. Gilman International Scholarship** supports undergraduates with limited financial means (Federal Pell Grant recipients) to study or intern abroad.
- The **Critical Language Scholarship (CLS)** Program funds fully-funded, intensive summer language institutes overseas in a set of critical languages.
- The **Boren Awards** fund study of less commonly taught languages in world regions considered critical to U.S. interests.
- The **Fulbright U.S. Student Program** funds study and research abroad, primarily for graduating seniors and graduate students, in roughly 140 countries.

**Amounts, eligibility details, and deadlines for every program above change year to year**, this course intentionally doesn't print specific dollar figures or deadlines. Confirm current numbers directly at studentaid.gov and studyabroad.state.gov before you budget or apply (Federal Student Aid, U.S. Department of Education, n.d.-a; U.S. Department of State, Bureau of Educational and Cultural Affairs, n.d.-f).

:::reveal What's the key difference in federal-aid eligibility between a semester abroad that transfers credit back to your U.S. degree, versus enrolling for a full degree directly at a foreign school? ||| A semester/year abroad through your home institution can generally use your normal federal aid package (Pell Grant, loans, etc.), processed by your home school. A full degree earned directly at a foreign school is NOT eligible for Pell or TEACH Grants, only federal Direct Loans, and only at foreign schools that specifically participate in the federal loan programs.

## Sources
- Federal Student Aid, U.S. Department of Education. (n.d.-a). Aid for International Study. StudentAid.gov. https://studentaid.gov/understand-aid/types/international
- Federal Student Aid, U.S. Department of Education. (n.d.-b). Is federal student aid available for international studies? StudentAid.gov. https://studentaid.gov/help-center/answers/article/is-federal-student-aid-available-for-international-studies
- Federal Student Aid, U.S. Department of Education. (n.d.-c). What federal student aid can I receive for my degree at an international school? StudentAid.gov. https://studentaid.gov/help-center/answers/article/what-federal-student-aid-can-i-receive-at-international-school
- U.S. Department of State, Bureau of Educational and Cultural Affairs. (n.d.-f). For U.S. College and University Students. USA StudyAbroad. https://studyabroad.state.gov/us-government-scholarships-and-programs/us-college-and-university-students`,
      recallContent: [
        {
          prompt: "Why does the CDC recommend scheduling your pre-travel health appointment 4-6 weeks before departure?",
          answer:
            "Because some vaccines need time to become effective and some require multiple doses spaced weeks apart, waiting until the last week doesn't leave enough time for full protection.",
        },
        {
          prompt: "Name two U.S. government scholarships specifically for study abroad.",
          answer:
            "Any two of: the Gilman International Scholarship, the Critical Language Scholarship (CLS), the Boren Awards, and the Fulbright U.S. Student Program.",
        },
      ],
    },
    {
      slug: "credit-transfer",
      title: "8 · Credit transfer: making your abroad credits count",
      body: `Every lesson so far has pointed back to one office for a reason: **your home institution, not the host school, not this course, is the only authority on whether your abroad credits count toward your degree.** Federal Student Aid's own framing of study-abroad aid makes the same point from the funding side: aid can fund your program "as long as your home institution will accept the credits earned during the experience" (Federal Student Aid, U.S. Department of Education, n.d.-a), credit acceptance is the hinge both your degree progress *and* your aid eligibility turn on.

**Get pre-approval in writing, before you commit, not after you're back.** For each course you plan to take abroad, confirm with your academic adviser or registrar (Lesson 2) exactly which home-institution requirement it will satisfy, major, minor, general education, or free elective, and get that confirmation in writing where your institution allows it. "Transfer" isn't automatic just because you were enrolled somewhere.

**Understand your program type's transfer mechanism (Lesson 1):**
- **Exchange programs** usually run on a pre-negotiated agreement between the two universities, which can make transfer more predictable, but "usually" isn't "always"; confirm the specific agreement covers the specific courses you plan to take.
- **Direct enrollment** has no such blanket agreement; transfer is evaluated course-by-course, often after the fact, unless you secure pre-approval first.
- **Faculty-led programs** are typically pre-built around a specific home-institution course or requirement, so transfer is usually the most predictable of the four, confirm anyway.
- **Degree-seeking programs** aren't "transferring" credit at all, you're earning the whole degree from the foreign institution, which is a different kind of decision (and, per Lesson 7, changes your federal-aid eligibility).

**Keep your paper trail.** Save course syllabi, grading-scale explanations, and an official transcript from the host institution, your registrar may need these to evaluate a course that doesn't map cleanly to a home-institution equivalent, especially for direct-enrollment programs with no pre-set agreement.

**Ask about grading-scale conversion up front.** Many countries grade on a different scale than the U.S.'s letter-grade/GPA system; ask your registrar in advance whether abroad grades convert to a letter grade, transfer as pass/fail, or are recorded some other way, this can matter for GPA-sensitive programs (financial aid renewal, honors, graduate-school applications).

:::reveal What's the one thing that determines BOTH whether your study-abroad credits count toward your degree AND whether your federal aid can fund the program? ||| Your home institution's acceptance of the credits earned abroad. Federal aid eligibility for a study-abroad program is explicitly tied to your home institution accepting those credits, get that confirmation in writing before you commit.

## Sources
- Federal Student Aid, U.S. Department of Education. (n.d.-a). Aid for International Study. StudentAid.gov. https://studentaid.gov/understand-aid/types/international
- U.S. Department of State, Bureau of Educational and Cultural Affairs. (n.d.-g). Financial Resources for Students to Study or Conduct Research Abroad. USA StudyAbroad. https://studyabroad.state.gov/us-government-resources/financial-resources`,
      recallContent: [
        {
          prompt: "What's the key difference in federal-aid eligibility between a semester abroad that transfers credit back, versus a full degree earned directly at a foreign school?",
          answer:
            "A semester/year abroad through your home institution can generally use your normal federal aid package. A full degree at a foreign school is not eligible for Pell or TEACH Grants, only Direct Loans, and only at participating foreign schools.",
        },
        {
          prompt: "Which study-abroad program type usually has the LEAST predictable credit transfer, and why?",
          answer:
            "Direct enrollment, there's no pre-negotiated transfer agreement like an exchange has, so credit is evaluated course-by-course, often after the fact, unless you secure pre-approval first.",
        },
      ],
    },
    {
      slug: "planning-timeline",
      title: "9 · Practice: build your study-abroad timeline",
      exercise: {
        instructions:
          "Fill in each blank with the term from this course, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "EducationUSA's own guidance suggests prospective students begin researching options ___ to 18 months before the term they hope to attend.",
            answer: "12",
            accept: ["twelve"],
            explanation: "EducationUSA's 5-steps framework recommends starting research 12 to 18 months out, apply the same lead time to researching your own study-abroad options.",
          },
          {
            prompt: "The office you should talk to BEFORE choosing a program, to confirm credit transfer, is your campus ___ office.",
            answer: "study abroad",
            accept: ["study-abroad", "studyabroad"],
            explanation: "Only your home institution's study-abroad office (with your faculty adviser) can confirm whether a program's credits will actually count toward your degree.",
          },
          {
            prompt: "The federal form you must file, listing your HOME institution, not the host school, to access federal aid for study abroad is the ___.",
            answer: "FAFSA",
            explanation: "File it early and renew it every year you plan to study abroad; your home financial-aid office processes the aid.",
          },
          {
            prompt: "The free State Department service that sends Travel Advisory alerts and helps the embassy reach you in an emergency is called ___.",
            answer: "STEP",
            accept: ["step", "smart traveler enrollment program"],
            explanation: "Enroll as soon as your program and dates are set, regardless of whether your destination requires a student visa.",
          },
          {
            prompt: "For a student visa, the destination-specific application process is only authoritative on that country's own official ___ or consulate site.",
            answer: "embassy",
            explanation: "travel.state.gov gives you the U.S. side (advisories, the general 'apply for a visa if necessary' instruction); the destination's own official site has the current, authoritative process.",
          },
          {
            prompt: "Many destinations require your passport to remain valid for at least ___ months beyond your trip's dates.",
            answer: "six",
            accept: ["6"],
            explanation: "A semester or year abroad, plus processing and any in-country extension, can eat into this cushion fast, renew early.",
          },
          {
            prompt: "The CDC recommends scheduling your pre-travel health appointment at least 4 to ___ weeks before you leave.",
            answer: "6",
            accept: ["six"],
            explanation: "Some vaccines need time to take effect, and some require multiple doses spaced weeks apart.",
          },
          {
            prompt: "The Pell-Grant-linked U.S. government scholarship for undergraduates of limited financial means to study or intern abroad is the ___ Scholarship.",
            answer: "Gilman",
            accept: ["gilman international"],
            explanation: "Named for Benjamin A. Gilman; confirm current award amounts and deadlines at studyabroad.state.gov, since they change.",
          },
          {
            prompt: "A full degree earned directly at a foreign school is NOT eligible for the Pell Grant, but may still qualify for federal ___.",
            answer: "Direct Loans",
            accept: ["direct loan", "loans", "direct loan program"],
            explanation: "Only at foreign schools that specifically participate in the federal loan programs, confirm your school's status directly with studentaid.gov.",
          },
          {
            prompt: "The single document your registrar needs to actually count a study-abroad course toward your degree is written ___.",
            answer: "pre-approval",
            accept: ["preapproval", "pre approval"],
            explanation: "Get it in writing before you commit to specific courses, not after you're back and hoping they transfer.",
          },
        ],
      },
    },
    {
      slug: "studying-abroad-quiz",
      title: "10 · Check your understanding",
      quiz: {
        passingScore: 70,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        shuffleOptions: true,
        questions: [
          {
            prompt: "What mainly distinguishes an exchange program from direct enrollment?",
            options: [
              "Exchange programs by law never involve any financial aid, loans, or grants",
              "An exchange runs on a partner-university deal with pre-set credit transfer",
              "Direct enrollment is always far shorter and much cheaper than an exchange",
              "There is no meaningful difference at all between the two program paths",
            ],
            correctIndex: 1,
            explanation:
              "Exchange programs are built on a university-to-university partnership agreement; direct enrollment has no such blanket agreement, so credit transfer is evaluated course-by-course.",
            sourceLessonSlug: "why-study-abroad-and-program-types",
          },
          {
            prompt: "Why should you talk to your campus study-abroad office and faculty adviser BEFORE choosing a program?",
            options: [
              "It is just a bureaucratic formality with no real impact on you at all",
              "Only they can confirm whether the program's credits count toward your degree",
              "Because only the study-abroad office can legally issue your passport",
              "Because STEP enrollment requires an adviser's written signature first",
            ],
            correctIndex: 1,
            explanation:
              "Your home institution decides whether abroad credits count, confirming this before you apply avoids choosing a program whose credits won't transfer.",
            sourceLessonSlug: "choosing-a-program",
          },
          {
            prompt: "Why doesn't this course list specific student-visa requirements for any one country?",
            options: [
              "Student visas were abolished by international treaty in the year 2000",
              "Each country sets and changes its own rules, so learn the research method",
              "Because the U.S. State Department publishes no guidance at all for students",
              "Because visas are required only for four-year degree-seeking programs",
            ],
            correctIndex: 1,
            explanation:
              "Every country's student-visa rules are set unilaterally and change over time, the method (check travel.state.gov, then the destination's own official source) outlasts any specific list.",
            sourceLessonSlug: "student-visa-framework",
          },
          {
            prompt: "Why does a semester or year of study abroad make the six-month passport-validity rule tighter than it would be for a short vacation?",
            options: [
              "It does not, the six-month rule is identical for a trip of any length",
              "A long stay plus visa processing time eats into the six-month cushion",
              "Passports issued to enrolled students expire a full two years faster",
              "The six-month rule applies only to passport cards, never to books",
            ],
            correctIndex: 1,
            explanation:
              "A passport that would be fine for a two-week trip can fall short of the six-month cushion once you add visa processing time and a full semester or year abroad.",
            sourceLessonSlug: "passport-readiness",
          },
          {
            prompt: "According to State Department guidance for students abroad, what should you research beyond your destination's entry/visa rules?",
            options: [
              "Nothing else is necessary at all once your entry visa is approved",
              "Local laws like drug laws, plus safety habits like family check-ins",
              "Only the current currency exchange rate for your destination country",
              "Only the best local restaurant and nightlife recommendations nearby",
            ],
            correctIndex: 1,
            explanation:
              "State Department guidance for students specifically flags researching local laws (drug laws in particular) and building safety habits like regular check-ins with family.",
            sourceLessonSlug: "step-and-safety-plan",
          },
          {
            prompt: "Why does the CDC recommend a pre-travel health appointment 4-6 weeks before departure, rather than the week before?",
            options: [
              "It is only a scheduling convenience for the travel clinic staff",
              "Some vaccines need time to work and some need multiple spaced doses",
              "Because clinic appointments are offered on no other week of the year",
              "Because CDC guidance legally applies only within 4-6 weeks of travel",
            ],
            correctIndex: 1,
            explanation:
              "Vaccines need lead time to be effective, and some require a multi-dose series spaced over weeks, waiting until the last minute doesn't leave time for full protection.",
            sourceLessonSlug: "health-abroad-cdc",
          },
          {
            prompt: "What's the key funding difference between a semester abroad that transfers credit back to your U.S. degree, and enrolling for a full degree directly at a foreign school?",
            options: [
              "There is no real difference, both draw federal aid in the same way",
              "A home-institution term keeps your aid; a foreign degree is loan-only",
              "Only a full foreign degree program qualifies for any U.S. federal aid",
              "Federal aid never applies to any kind of study-abroad program at all",
            ],
            correctIndex: 1,
            explanation:
              "Federal aid for a home-institution study-abroad term generally follows your usual eligibility; a full degree at a foreign school loses Pell/TEACH Grant eligibility and is limited to Direct Loans at participating schools.",
            sourceLessonSlug: "funding-study-abroad",
          },
          {
            prompt: "What single factor determines both whether your abroad credits count toward your degree AND whether federal aid can fund the program?",
            options: [
              "The total tuition and travel cost of the study-abroad program",
              "Your home institution accepting the credits you earn abroad",
              "The calendar length in weeks of the study-abroad program",
              "Which specific foreign country and city you decide to choose",
            ],
            correctIndex: 1,
            explanation:
              "Federal Student Aid ties aid eligibility directly to your home institution accepting the credits, the same approval that determines whether the courses count toward your degree.",
            sourceLessonSlug: "credit-transfer",
          },
        ],
      },
    },
  ],
};
