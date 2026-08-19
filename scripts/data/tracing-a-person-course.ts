import type { AuthoredCourse } from "./authored-course";

// RSRCH-03 of the Researcher track. Plan: plans/69-researcher-track.md.
//
// THE FRAMING THAT KEEPS THIS FROM BEING A GENEALOGY COURSE: a person is a trail of records that
// were made for other purposes. Nobody documented them; institutions documented their own business
// and the person appears as a by-product. Every technique here follows from that, and it is what
// makes the course useful to a journalist or a documentary researcher rather than only to somebody
// building a family tree.
//
// ⚠️ THE LESSON THIS COURSE EXISTS TO EARN IS LESSON 8, "the records that were never made". This
// catalog's whole identity is that it asks whose voice is missing from a record and why. A
// person-tracing course that taught the standard record ladder and did not deal with the fact that
// the ladder was built for people the state counted as full persons would be teaching a method that
// silently fails for a large share of the people this catalog is about. Do not cut it, do not soften
// it, and do not move it earlier: it lands hardest after the reader has learned to rely on the
// records it complicates.
//
// NO INVENTED PEOPLE, and no worked example following a named individual. A fabricated trail would
// teach a tidiness real records do not have.

export const TRACING_A_PERSON_COURSE: AuthoredCourse = {
  title: "Tracing a Person Through Records",
  description:
    "Nobody documented your subject. Institutions documented their own business, and the person appears as a by-product: in a census, a payroll, a deed, a docket, a passenger list. How to build a life from records made for other reasons, how to handle a name that changes spelling every time it is written, and what to do when the records were never made at all.",
  lessons: [
    {
      slug: "trp-a-trail-of-by-products",
      title: "1 · A person is a trail of by-products",
      section: "Part 1 · The record ladder",
      body: `Almost nobody in history was documented on purpose. What survives is a by-product: an institution was doing its own business and your subject passed through it.

- A government wanted to apportion representation, so it counted people. Your subject is a line in a census.
- A city wanted to sell advertising, so it published a directory. Your subject is an address and an occupation.
- A company had to pay wages, so it kept a payroll. Your subject is a name and a rate.
- A court had a dispute to settle, so it kept a docket. Your subject is a party, a witness, or a defendant.

**Nobody in any of those cases was trying to record a life.** They were doing something else, and the person is incidental.

## Why this framing is the whole method

Once you see records as by-products, the research question changes in a useful way. You stop asking "what records exist about this person" and start asking:

> **What institutions would this person have had to pass through, and what did those institutions keep?**

Somebody who worked, owned property, married, was born in a hospital, went to school, served, immigrated, was arrested, or paid tax intersected a body that wrote things down for its own reasons. Each intersection is a possible record, and you can predict them from what you know about the life.

## What follows from it

**Records reflect the institution's interests, not the person's.** A payroll tells you what they were paid, not what they thought about it.

**Coverage is uneven by design.** The institution recorded what it needed. A census records who was in a household on one night, not the household's history.

**Absence is often institutional.** Somebody missing from a record set may simply never have intersected that institution, which is a fact about the institution as much as about them.

:::reveal Restate the research question that replaces "what records exist about this person", and say why the replacement is more productive. ||| What institutions would this person have had to pass through, and what did those institutions keep. It is more productive because it can be answered by reasoning from the known facts of a life, whereas the first question can only be answered by searching and hoping.

## Sources

National Archives. (n.d.). *Research our records: Genealogy*. https://www.archives.gov/research/genealogy

Library of Congress. (n.d.). *Local history and genealogy research guides*. https://guides.loc.gov/local-history-genealogy`,
    },
    {
      slug: "trp-census",
      title: "2 · The census, and what it is not",
      section: "Part 1 · The record ladder",
      recallContent: [
        {
          prompt: "What question replaces asking what records exist about a person?",
          answer: "What institutions would this person have had to pass through, and what did those institutions keep. It can be reasoned out rather than only searched for.",
        },
      ],
      body: `The census is usually the first place to look and the most misread record in the trade.

## What it is

A snapshot of who was in a household on one specified night, taken by an enumerator who walked a district and wrote down what somebody told them. In many countries the detailed returns are released after a long closure period, and what survives is a page of handwriting.

## What it gives you

Names, ages, relationships to the head of household, occupations, birthplaces, and depending on the year and country: literacy, immigration year, home ownership, and more.

The **enumeration district** is nearly as valuable as the entry. It places your subject on a street among neighbours, which turns an isolated name into a community.

## What it is not

**Not a birth record.** Ages are approximate. They come from whoever answered the door, who may have been a neighbour, and they frequently drift by more than a year between censuses.

**Not a statement by your subject.** They may not have been the informant. The information may be a neighbour's guess.

**Not a stable spelling.** The enumerator wrote what they heard.

**Not complete.** People were missed, and not at random: mobile, poor, marginalised and non-native-speaking households were undercounted, which is a documented and systematic feature.

## Using it well

Read the whole page and the pages either side. Households were enumerated in walking order, so neighbours are neighbours. Extended family, boarders, employers and people from the same origin frequently sit within a few lines.

**Treat every census fact as a claim with a source**, which is exactly what it is: a claim, made on one night, by an unnamed informant, to a stranger with a pen.

:::reveal A person's stated age in three successive censuses implies three different birth years. Is this evidence of an error, and what should the file record? ||| Not necessarily an error, and certainly not a reason to pick one. Ages were approximate, often given by whoever answered the door. The file should record all three with their sources and give a birth-year range rather than a false single figure.

## Sources

U.S. Census Bureau. (n.d.). *Census records and the 72-year rule*. https://www.census.gov/history/

National Archives. (n.d.). *Census records*. https://www.archives.gov/research/census`,
    },
    {
      slug: "trp-vital-records-and-directories",
      title: "3 · Vital records, and the year-by-year fix",
      section: "Part 1 · The record ladder",
      recallContent: [
        {
          prompt: "Why should a census age be treated as a claim rather than a fact?",
          answer: "It was given on one night by an unnamed informant, possibly a neighbour, to a stranger with a pen. Ages were approximate and drift between censuses.",
        },
      ],
      body: `## Vital records

Birth, marriage and death registrations. Where they exist and are accessible they are among the strongest evidence available, because they were made close to the event by someone with a legal duty.

Three cautions:

**They start late.** Compulsory civil registration began at different dates in different jurisdictions, often in the nineteenth century and sometimes much later. Before that you are usually in church records, and only for the relevant denomination.

**Access is restricted.** Recent records are commonly closed for decades, and the closure period differs for birth, marriage and death.

**The informant matters.** A death record's details about the deceased's parents come from whoever reported the death, frequently a grieving relative or an official. **The fact of the death is strong; the biography attached to it is only as good as the informant.**

## City directories: the underrated one

Published annually in many towns and cities, listing residents by name with address and occupation. They were commercial products, so they are patchy and they exclude people the publisher did not consider worth listing.

They are enormously useful anyway, for one structural reason: **a census is a snapshot every ten years; a directory is a snapshot every year.**

That resolution lets you do things a census cannot:

- Watch somebody move, change occupation, or disappear from the town.
- Narrow a death or departure to a single year, by finding the last listing and the first absence.
- See a household headed by a widow, which frequently marks the year a husband died.
- Establish that a business existed, and where.

**Between two censuses, the directory series is usually the best tool available**, and researchers who go straight from one census to the next skip a decade of annual evidence.

:::reveal Give two things a run of annual city directories can establish that a decennial census cannot. ||| Any two of: the year within a decade that somebody moved, changed occupation, arrived or left; the approximate year of a death, from a last listing followed by a widow listed at the same address; or that a business existed at a specific address in a specific year.

## Sources

National Archives. (n.d.). *Vital records*. https://www.archives.gov/research/vital-records

Library of Congress. (n.d.). *City directories*. https://guides.loc.gov/city-directories`,
    },
    {
      slug: "trp-check-the-ladder",
      title: "4 · Knowledge check: the record ladder",
      section: "Part 1 · The record ladder",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Three censuses give ages implying three different birth years. What should the research file record?",
            options: [
              "All three with their sources, and a birth-year range rather than a single figure",
              "The earliest of the three, since the informant was closest to the birth in time",
              "The most frequently occurring year, since agreement between sources indicates accuracy",
              "The figure from the census whose handwriting is clearest and least ambiguous",
            ],
            correctIndex: 0,
            explanation:
              "Census ages are approximate and often supplied by whoever answered the door. Selecting one produces false precision; recording the spread with sources is both honest and more useful downstream.",
            sourceLessonSlug: "trp-census",
          },
          {
            prompt: "What makes annual city directories valuable in a way the census is not?",
            options: [
              "Their yearly frequency can place a move, a death or a departure within a single year",
              "They were compiled by government officials with a legal duty to record accurately",
              "They list every resident of a town, including those the census systematically missed",
              "They record relationships between household members that census returns omit",
            ],
            correctIndex: 0,
            explanation:
              "Resolution is the point: a decennial snapshot against an annual one. Directories were commercial products, so far from listing every resident they are patchy and exclude anyone the publisher did not think worth listing.",
            sourceLessonSlug: "trp-vital-records-and-directories",
          },
          {
            prompt: "On a death record, which element should be treated as weaker evidence than the rest?",
            options: [
              "The details of the deceased's parents, which come from whoever reported the death",
              "The date of death, which was often entered days after the event occurred",
              "The place of death, which may be the institution rather than the residence",
              "The cause of death, which reflects the diagnostic categories of the period",
            ],
            correctIndex: 0,
            explanation:
              "The fact of the death is strong because it was recorded close to the event by someone with a legal duty. The biography attached to it is only as good as the informant, who may have been a grieving relative guessing.",
            sourceLessonSlug: "trp-vital-records-and-directories",
          },
          {
            prompt: "Why is the enumeration district nearly as valuable as the census entry itself?",
            options: [
              "Households were enumerated in walking order, so it places the subject among neighbours",
              "It identifies the enumerator, whose other returns can be checked for consistency",
              "It gives the legal boundary within which the household could own property",
              "It determines which archive holds the original schedule for that household",
            ],
            correctIndex: 0,
            explanation:
              "Walking order turns an isolated name into a community: extended family, boarders, employers and people from the same origin frequently appear within a few lines of each other.",
            sourceLessonSlug: "trp-census",
          },
        ],
      },
    },
    {
      slug: "trp-property-court-and-work",
      title: "5 · Property, court and work",
      section: "Part 2 · Beyond the obvious",
      body: `Once the basic ladder is exhausted, the records that carry the most detail are the ones generated when something had to be settled, paid or transferred.

## Land and property

Deeds, mortgages, tax assessments, plats. Indexed by name in most jurisdictions, usually in a grantor and a grantee index, and often available further back than almost anything else.

They give you dates, precise locations, sums, and frequently relationships, because property moves between family members. A deed reciting "and his wife" or naming heirs can establish a family structure no other surviving record does.

## Court records

Civil, criminal, probate. **Probate is the one to reach for first**: a will or an estate inventory names heirs, describes relationships, and lists possessions in detail, which is as close to a description of a household's material life as most records ever get.

Civil dockets record disputes, and a dispute produces testimony. Testimony is one of the few places where ordinary people's words are written down at length, even though the setting shapes what they said.

## Employment

Payrolls, union records, personnel files, pension applications, apprenticeship and licensing records. Survival is patchy and depends entirely on whether the employer's records were kept and deposited.

Where they survive they are exceptionally rich, because employers recorded what they paid, when, and frequently why somebody left.

## The pattern

**Follow the transaction.** Where money, property or liberty changed hands, somebody wrote it down and kept it, because the record existed to be relied on later.

That is why these records are more detailed than descriptive ones: they had to be able to settle an argument.

:::reveal Why do records generated by transactions tend to carry more detail about ordinary people than records generated to describe them? ||| Because a transaction record had to be able to settle a dispute later, so it names parties, dates, sums and relationships precisely. A descriptive record only had to satisfy whoever was compiling it.

## Sources

National Archives. (n.d.). *Land records* and *Court records*. https://www.archives.gov/research

Library of Congress. (n.d.). *Researching probate and land records*. https://guides.loc.gov/local-history-genealogy`,
    },
    {
      slug: "trp-movement-and-institutions",
      title: "6 · Movement, service and institutions",
      section: "Part 2 · Beyond the obvious",
      recallContent: [
        {
          prompt: "Why do transaction records carry more detail about ordinary people than descriptive records?",
          answer: "Because they had to settle a dispute later, so they name parties, dates, sums and relationships precisely.",
        },
      ],
      body: `People who moved or who passed through an institution left denser records than people who stayed put, because crossing a boundary triggers documentation.

## Immigration and naturalisation

Passenger lists, arrival records, declarations of intention, naturalisation petitions. The later ones can be extraordinarily detailed: birthplace and date, previous residence, physical description, names of family, the ship and date of arrival.

**Naturalisation was frequently a two-stage process** separated by years and sometimes recorded in different courts, so finding one document does not mean you have found both.

## Military

Service records, pension files, draft registrations. **Pension files are often the richest single document about an ordinary person that exists**, because a claim had to be proved: they can contain marriage evidence, medical examinations, sworn statements from neighbours, and correspondence spanning decades.

Draft registrations are valuable for a different reason: they cover men who never served, so they catch a much wider population than service records do.

## Institutions

Schools, hospitals, asylums, prisons, orphanages, poorhouses. Records exist and access is usually restricted, often heavily and often for good reason.

⚠️ **These records document people at their most vulnerable, frequently without their consent and sometimes in the language of the institution's prejudices.** Two obligations follow, and they are not optional. First, respect the access rules rather than looking for a way round them. Second, when you use such a record, say what kind of record it is, because a hospital's description of a person is not that person's description of themselves, and a reader deserves to know which they are being given.

:::reveal Why is a military pension file often the richest record of an ordinary person's life, and what does that tell you about where dense records come from? ||| Because a pension claim had to be PROVED, so it accumulated marriage evidence, medical examinations, neighbours' sworn statements and years of correspondence. Density comes from the requirement to demonstrate something, not from an interest in the person.

## Sources

National Archives. (n.d.). *Immigration records* and *Military records*. https://www.archives.gov/research

U.S. Citizenship and Immigration Services. (n.d.). *Genealogy program*. https://www.uscis.gov/genealogy`,
    },
    {
      slug: "trp-names-that-move",
      title: "7 · Names that will not hold still",
      section: "Part 2 · Beyond the obvious",
      recallContent: [
        {
          prompt: "Where does the density of a military pension file come from?",
          answer: "From the requirement to PROVE a claim, which accumulated marriage evidence, medical examinations, neighbours' statements and years of correspondence.",
        },
      ],
      body: `A person had one name. The records did not.

## Why a name changes

**It was written by ear.** A clerk heard a name and spelled it. The next clerk heard the same name and spelled it differently.

**It was translated or simplified**, on arrival, at work, or over a generation.

**It was recorded formally where a person used something else.** A middle name, an initial, an anglicised form, a religious name.

**Women's surnames changed at marriage**, more than once in some lives, which makes tracing a woman across records structurally harder than tracing a man. That is a fact about record-keeping conventions, not about the women, and it is why a search that fails on a woman should prompt a search on her likely husbands and children.

**Handwriting was misread**, at the time and again when indexed, and again by text capture.

## Techniques

**Search by sound rather than spelling** where a system offers phonetic matching.

**Search wildcards** on the parts of a name that vary most, which is usually the middle.

**Search around the name.** An address, a spouse, an occupation, an employer, a birthplace. A household is easier to match than an individual, because several approximate facts together are stronger than one exact one.

**Search the index and the original.** Indexes are transcriptions and transcription is where names break. If the index fails and you can browse the original, browse it.

## The rule for your file

**Record the name exactly as each source gives it.** Do not normalise it. "Recorded as Cathrine in the 1900 return, as Katherine on the marriage record" is evidence. Silently standardising both to one spelling destroys the trail and makes your work unverifiable.

:::reveal Why is a household easier to match than an individual when a name is unstable? ||| Because several approximate facts together constrain the match far more than one exact fact. A surname of uncertain spelling plus a spouse, an occupation, a birthplace and an address can identify a household even when no single element matches cleanly.

## Sources

National Archives. (n.d.). *Search tips: Name variations*. https://www.archives.gov/research

Library of Congress. (n.d.). *Genealogy research guidance*. https://guides.loc.gov/local-history-genealogy`,
    },
    {
      slug: "trp-records-never-made",
      title: "8 · The records that were never made",
      section: "Part 3 · Absence",
      recallContent: [
        {
          prompt: "How should a research file record a name that is spelled differently in each source?",
          answer: "Exactly as each source gives it, with the source named. Silently standardising destroys the trail and makes the work unverifiable.",
        },
      ],
      body: `Everything so far assumed the ladder exists. For an enormous number of people it does not, and a researcher who does not know that will read absence as a fact about the person rather than about the system.

## The systematic gaps

**People the state did not count as persons.** Under slavery in the United States, enslaved people were generally recorded in the federal census not by name but as tallies by age and sex under the name of the person who held them. A search of those returns for an enslaved ancestor by name fails, and it fails by design rather than by accident.

**People with no property.** Deeds, wills, tax rolls and probate are property records. A life without property leaves few of them.

**People institutions preferred not to record**, or recorded only when they became a problem: the undocumented, the itinerant, the criminalised, and people whose relationships had no legal standing and so produced no marriage record.

**Records destroyed.** Fires, floods, wars and routine disposal. Some famous losses removed whole record sets for whole regions.

**Records never kept.** Many institutions had no obligation to retain anything and did not.

## Where the trail continues instead

The method changes rather than ending. Where the state did not record a person as a person, look for the records of the institution that acted upon them:

- Estate inventories and probate of the enslaver, which listed enslaved people as property, often with names and ages.
- Bills of sale, mortgages and insurance records.
- Plantation and business ledgers.
- Freedmen's Bureau records, labour contracts and post-emancipation registrations.
- Church records, which sometimes recorded people the state did not.
- Court records, which recorded people when they were parties or accused.

**Reading these requires holding two things at once.** They are frequently the only surviving evidence of a person's existence, and they were created by the system that denied that person's personhood, in its language and for its purposes. Both facts are true and the second one belongs in your file whenever you cite them.

## What to write down

When the trail stops, say which kind of stop it is. "Not found" hides everything; these do not:

- Searched and absent from a record set that should have covered them.
- The record set does not survive for this place and period.
- **This person was never eligible to appear in these records.**

That third sentence is a finding about a system. It is frequently the most important thing a researcher produces, and it can only be written by somebody who knew to look for it.

:::reveal A search for an enslaved person by name in pre-1865 US federal census returns fails. What has that established, and where does the trail continue? ||| Almost nothing about the person: those returns generally recorded enslaved people as tallies by age and sex under the enslaver's name rather than by name. The trail continues in records the system generated ABOUT them, such as probate inventories, bills of sale, ledgers, church records and, later, Freedmen's Bureau records.

## Sources

National Archives. (n.d.). *Resources for Black family history research*. https://www.archives.gov/research/african-americans

National Archives. (n.d.). *Freedmen's Bureau records*. https://www.archives.gov/research/african-americans/freedmens-bureau`,
    },
    {
      slug: "trp-check-beyond-and-absence",
      title: "9 · Knowledge check: beyond the ladder, and absence",
      section: "Part 3 · Absence",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "A search for an enslaved person by name in pre-1865 US federal census returns finds nothing. What does that establish?",
            options: [
              "Very little, since those returns generally recorded enslaved people as tallies rather than by name",
              "That the person was not resident in that county during the year of that enumeration",
              "That the returns for that district were among those later lost or destroyed",
              "That the name was recorded under a variant spelling the index does not match",
            ],
            correctIndex: 0,
            explanation:
              "The absence is a fact about how the record was designed, not about the person. The trail continues in records the system generated about them: probate inventories, bills of sale, ledgers, church records, and later the Freedmen's Bureau.",
            sourceLessonSlug: "trp-records-never-made",
          },
          {
            prompt: "Which phrasing is most useful in a research file when a trail stops?",
            options: [
              "This person was never eligible to appear in this record set",
              "No results were returned for this name across the sources consulted",
              "The subject appears to have left the jurisdiction before this period",
              "Further research would be required to establish the connection",
            ],
            correctIndex: 0,
            explanation:
              "It is a finding about a system rather than a report of failure, it stops the next person repeating the search, and it can only be written by somebody who knew to look for it.",
            sourceLessonSlug: "trp-records-never-made",
          },
          {
            prompt: "Why is tracing a woman through historical records structurally harder than tracing a man?",
            options: [
              "Surnames changed at marriage, sometimes more than once, breaking the name trail",
              "Women were systematically excluded from census enumeration until the twentieth century",
              "Vital registration recorded women only when they were heads of household",
              "Directories listed women by initial rather than by given name as a matter of convention",
            ],
            correctIndex: 0,
            explanation:
              "It is a fact about record-keeping conventions rather than about the women. A failed search on a woman should prompt searches on her likely husbands and children, where the trail often continues.",
            sourceLessonSlug: "trp-names-that-move",
          },
          {
            prompt: "What obligation follows from using an institutional record that documents a person without their consent?",
            options: [
              "Say what kind of record it is, since the institution's description is not the person's own",
              "Obtain permission from the institution before any detail from it may be published",
              "Paraphrase the record's language so its original terminology does not reach the reader",
              "Corroborate every detail against a second record before any of it may be cited",
            ],
            correctIndex: 0,
            explanation:
              "A hospital's or a prison's description of a person is that institution's account, in its language and for its purposes. A reader deserves to know which they are being given. Access rules should also be respected rather than worked around.",
            sourceLessonSlug: "trp-movement-and-institutions",
          },
        ],
      },
    },
    {
      slug: "trp-capstone-trace-one-person",
      title: "10 · Capstone: trace one person",
      section: "Part 3 · Absence",
      lessonType: "assignment",
      body: `Pick one real person who is not famous and is not living. An ancestor, a name from a local monument, a person named in a newspaper story, a name from a company history.

**Not famous matters.** A documented public figure lets you research the literature about them rather than the records of them, which is a different exercise.

Trace them as far as the accessible record allows, and hand in the trail rather than a biography.

## What to submit

**1. Who, and how you chose them.** Name as first encountered, with the source that named them.

**2. The institutions you predicted.** Before searching, list the bodies this person would plausibly have passed through given what you knew. Then say which predictions paid off and which did not.

**3. The record table.** One row per record found: what it is, where it is held, what it says about your subject, and the name AS SPELLED in that record. Do not normalise the spellings.

**4. One contradiction**, and how you handled it. Two records disagreeing about an age, a place, a relationship. Do not resolve it by choosing; explain what each source is and what would settle it.

**5. Where the trail stopped**, and which kind of stop it is: searched and absent, records do not survive, or never eligible to appear.

**6. What you would do next**, with the specific record set and where it is held.

## How this is assessed

Not on how much you found. A short trail with clear reasoning is worth more than a long one presented as settled fact.

You are assessed on section 2 (whether you reasoned about institutions rather than searching a name and hoping), section 4 (whether you left the contradiction standing rather than tidying it away), and section 5 (whether you named which KIND of stop it was).

**One rule, and it is the rule of the whole track: do not fill a gap with a plausible story.** "The family probably moved that spring" is an inference, and it belongs in the file clearly marked as one, never in the record table.

## Sources

National Archives. (n.d.). *Research our records: Genealogy*. https://www.archives.gov/research/genealogy

Library of Congress. (n.d.). *Local history and genealogy*. https://guides.loc.gov/local-history-genealogy`,
    },
  ],
};
