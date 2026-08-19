import type { AuthoredCourse } from "./authored-course";

// Genealogy for yourself and your community. Plan: plans/70-genealogy-course.md.
//
// WHY THIS IS NOT RSRCH-03 WITH MORE LESSONS. That course teaches tracing a person as a professional
// method, in the third person, for a client. Its lesson 8 says the standard record ladder was built
// for people the state counted as full persons, and then moves on because it has eight other lessons
// to teach. THIS COURSE STARTS THERE. For this research the obstacle is not a complication inside
// genealogy, it is the subject.
//
// ⚠️ THE EMOTIONAL CONTRACT IS DIFFERENT AND IT GOVERNS THE WRITING. The learner is looking for
// their own people. Two rules, both non-negotiable:
//   1. Never promise the wall always comes down. Some lines end, and implying otherwise sets a
//      learner up to feel they failed at something structurally impossible.
//   2. Never let an ending line read as a personal defeat. Where the record stops is a fact about a
//      system built to not record people as people. Lesson 13 exists to say exactly that.
//
// ACCURACY COMMITMENTS, per plans/70 §4:
//   · NO named commercial DNA or subscription services. Categories and cautions only.
//   · Contested claims flagged as contested, especially surname adoption after emancipation.
//   · No invented family examples. A fabricated trail teaches a tidiness the records do not have.
//   · Anything hedged gets a research check filed in src/lib/research-checks.ts.

export const GENEALOGY_SELF_AND_COMMUNITY_COURSE: AuthoredCourse = {
  title: "Genealogy for Yourself and Your Community",
  description:
    "Building a family tree when the records were not built for your family. Start with the living, work backwards one documented step at a time, and learn the specific methods for crossing 1870: the enslaver's probate and property records, the Freedmen's Bureau, the Freedman's Savings Bank. Honest about which walls come down, which do not, and why that is a fact about a system rather than about you.",
  lessons: [
    {
      slug: "gen-start-with-the-living",
      title: "1 · Start with the living",
      section: "Part 1 · Before the archives",
      body: `Before any record, any database, any subscription: talk to your people.

This is not sentiment. It is the correct research sequence, for a reason that does not apply to any other kind of research:

> **Records will still be there next year. The people who remember will not.**

Every other source in this course is stable. Elders are the one finite resource, and the interview you postpone is the one that does not happen.

## What to ask for first

**Names, in full, including ones nobody uses.** Middle names, maiden names, the name on the birth certificate that differed from the name everyone called them, nicknames that turn out to be the name in the records.

**Places, as specifically as possible.** Not "down south" but a county, a town, a road, a church, a plantation name if one is remembered. **County matters more than state**, because records are held at county level.

**Dates, approximately.** Nobody needs exact. "Around the war," "before we moved north," "she was about twelve" all narrow a search enormously.

**Who else would know.** The cousin who keeps the papers. The aunt who did some of this already. Almost every family has somebody, and finding them saves months.

**Objects.** Bibles with entries in the front, funeral programs, obituaries in a drawer, deeds, insurance policies, photographs with writing on the back, a quilt with names. Ask to photograph rather than to borrow.

## How to ask

**Record it, with permission**, and say what you will do with the recording.

**Ask open questions and then stop talking.** "Tell me about your grandmother" produces more than a list of yes-or-no questions.

**Do not correct anyone.** If a date conflicts with a record you have, write both down. You are collecting testimony, and the conflict is data. RSRCH-06 in this catalog is the long version of how to handle that later.

**Go back.** The second conversation is almost always better than the first, because the first one wakes things up.

## Write it down the same day

Memory of a conversation degrades fast. Same day, while you still remember what was said and what was implied, and note who told you what, because you will need to know later whose account something was.

:::reveal Why do the interviews come before the archives, when the archives contain harder evidence? ||| Because records are stable and people are not. An archive will hold the same documents next year; the elder who remembers a county, a church and a full name may not be available, and that information is frequently the only route into the records at all.

## Sources

Oral History Association. (n.d.). *Principles and best practices*. https://oralhistory.org/

Library of Congress. (n.d.). *Family folklore and oral history interviewing guide*. https://www.loc.gov/folklife/familyfolklife/`,
    },
    {
      slug: "gen-work-backwards",
      title: "2 · Work backwards, one documented step at a time",
      section: "Part 1 · Before the archives",
      recallContent: [
        {
          prompt: "Why do the interviews come before the archives?",
          answer: "Records are stable and people are not. The elder who remembers a county, a church and a full name may not be available next year, and that information is often the only route into the records.",
        },
      ],
      body: `The rule that prevents most wasted years:

> **Start with yourself and move back one generation at a time, proving each link before using it.**

## Why people break this rule

Because a surname appears in an old record somewhere interesting, and it is the same surname, and it would be wonderful. So the tree gets built from that end.

Two things go wrong. **A shared surname is not evidence of a shared family**, especially for African American families where surnames were adopted and changed after emancipation and where a county may hold dozens of unrelated households with the same name. And an unproven link poisons everything above it: fifty hours of correct research hanging off a guess is fifty hours you will eventually have to throw away.

## What "proving a link" means

A link is a claim: this person is the child of that person. Prove it like any other claim.

**Direct evidence.** A record that states the relationship: a birth certificate naming parents, a marriage record naming a father, a will naming children, a death certificate naming parents.

**Indirect evidence.** No single record states it, but several together make it the only reasonable reading: consistent ages, the same household across censuses, a shared unusual name, a chain of addresses.

**Write down which one you used.** A tree where every link is marked direct or indirect is a tree somebody can check. One where they are mixed silently is a story.

## The generation-by-generation habit

For each person, aim for the same short set before moving back: a birth, a marriage, a death, and their appearance in every census you can reach during their life. Anything else is a bonus.

When you cannot complete the set, note what is missing and why, and move back anyway if the link is proven. **You are building a documented skeleton, not a finished biography**, and the flesh comes later.

:::reveal Why is a shared surname especially weak evidence of relationship in African American genealogy? ||| Because surnames were adopted, chosen and changed around emancipation, and a single county may hold many unrelated households sharing a name. A surname match is a lead to be tested, not a link to be built on.

## Sources

National Archives. (n.d.). *Start your genealogy research*. https://www.archives.gov/research/genealogy/start-research

Board for Certification of Genealogists. (n.d.). *Genealogical proof standard*. https://bcgcertification.org/`,
    },
    {
      slug: "gen-the-records-of-the-living-memory",
      title: "3 · The record set that reaches back to 1870",
      section: "Part 1 · Before the archives",
      recallContent: [
        {
          prompt: "What does proving a link mean, and what are the two kinds of evidence for one?",
          answer: "Establishing that this person is the child of that one. Direct evidence states the relationship outright; indirect evidence is several records that together make it the only reasonable reading.",
        },
      ],
      body: `Between now and 1870 the standard record ladder mostly works, and it is worth working it thoroughly before turning to the harder problem. This is the material RSRCH-03 covers as a method; here is what matters when it is your own family.

## The core set

**Federal census returns**, every ten years. Household composition, ages, birthplaces, occupations, literacy, and after some years whether a home was owned or rented. **Read the whole page**: households were enumerated in walking order, so neighbours are neighbours, and extended family frequently sits within a few lines.

**Vital records**, where and when they exist. Compulsory registration began at different dates in different states, often later in the South, so a birth in 1890 may have no certificate while a death in 1930 does.

**City directories**, annual, which fill the ten-year gaps and can place a move or a death within a single year.

**Church records.** Frequently the most detailed records of Black family life in this period, and frequently still held by the congregation rather than by an archive. Baptisms, marriages, funerals, membership rolls. **Call the church.**

**Newspapers**, including the Black press, which published obituaries, church news, social notices and family visits that no other source recorded.

**Draft registrations**, which cover men who never served and so reach a far wider population than service records.

**Death certificates**, which are worth chasing hard: they usually name parents, including a mother's maiden name, which is often the single most valuable fact for moving back a generation.

## The habit that pays

**Collect every census appearance for every person, not just the ones you need.** A household you already understand in 1900 will tell you something new when you find it in 1910 with a different member present, an older relative who appears once, or a boarder who turns out to be family.

:::reveal Which routinely available record most often provides the single fact that lets you move back another generation, and what is that fact? ||| A death certificate, because it usually names the deceased's parents including a mother's maiden name. That maiden name is frequently the key that opens the previous generation.

## Sources

National Archives. (n.d.). *Census records*. https://www.archives.gov/research/census

Library of Congress. (n.d.). *African American newspapers and periodicals*. https://guides.loc.gov/`,
    },
    {
      slug: "gen-check-before-the-wall",
      title: "4 · Knowledge check: working back to 1870",
      section: "Part 1 · Before the archives",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Why should family interviews be done before archival research rather than after?",
            options: [
              "Records will still exist next year and the people who remember may not",
              "Archives require a documented family connection before granting research access",
              "Interview accounts are more reliable than records for the recent generations",
              "Beginning with records tends to bias the questions asked of relatives later",
            ],
            correctIndex: 0,
            explanation:
              "Elders are the one finite resource in this work. They also supply the county, church and full names that make the archival search possible at all, so postponing costs twice.",
            sourceLessonSlug: "gen-start-with-the-living",
          },
          {
            prompt: "Why is a matching surname unusually weak evidence of relationship in African American genealogy?",
            options: [
              "Surnames were adopted and changed around emancipation, and counties hold many unrelated households sharing one",
              "Census enumerators routinely assigned surnames to households that had not chosen one",
              "Surnames were not legally recognised for Black families until the twentieth century",
              "Records from the period record only given names, so surnames were added by later indexers",
            ],
            correctIndex: 0,
            explanation:
              "A surname match is a lead to be tested rather than a link to be built on. Building a tree from a promising surname is the commonest way to lose a year of correct work hanging off a guess.",
            sourceLessonSlug: "gen-work-backwards",
          },
          {
            prompt: "Which commonly available record most often supplies the fact that opens the previous generation?",
            options: [
              "A death certificate, which usually names parents including a mother's maiden name",
              "A marriage licence, which records both parties' places of residence at the time",
              "A census return, which gives ages and birthplaces for the whole household",
              "A city directory, which places an individual at an address in a specific year",
            ],
            correctIndex: 0,
            explanation:
              "The mother's maiden name is frequently the single key that moves a line back. The others are all valuable and none of them routinely names the previous generation outright.",
            sourceLessonSlug: "gen-the-records-of-the-living-memory",
          },
          {
            prompt: "What does it mean to prove a link between generations?",
            options: [
              "To support the parent-child claim with direct or indirect evidence, and record which",
              "To locate at least three separate records naming both individuals together",
              "To confirm the relationship with a relative who remembers both people personally",
              "To establish that no other household in the county could produce the same match",
            ],
            correctIndex: 0,
            explanation:
              "A link is a claim like any other. Direct evidence states the relationship; indirect evidence makes it the only reasonable reading. A tree that marks which was used can be checked; one that mixes them silently is a story.",
            sourceLessonSlug: "gen-work-backwards",
          },
        ],
      },
    },
    {
      slug: "gen-1870",
      title: "5 · 1870, and why it is called a wall",
      section: "Part 2 · Crossing 1870",
      body: `Work a Black American family backwards and you will usually reach the same place: the 1870 federal census, and then nothing.

## What changed in 1870

The 1870 census was the first federal census taken after the abolition of slavery, and it enumerated formerly enslaved people **by name**, in households, like everybody else.

Go back one census and that stops. For 1850 and 1860 the federal census included separate **slave schedules**, which generally recorded enslaved people not by name but as entries under the name of the person who held them, with age, sex and colour. There are exceptions and some schedules carry names, but as a rule the person you are looking for is a line without a name.

## What that means for your research

**The absence is not a gap in the archive. It is the design of the record.**

A name search fails because there is no name in it to find. Rephrasing does not help, a better database does not help, and persistence does not help, because the thing being searched for was never written down.

That is worth being clear-eyed about, because a great many people conclude at this point that they have hit the limits of their own skill. They have not. They have hit a boundary that was built.

## The reframe that unlocks the next four lessons

Before 1870, your ancestor was recorded by the system as **property**, and property is documented obsessively.

So the question changes:

> Not "where is the record of this person?" but **"who claimed to own them, and what records did that claim generate?"**

Property is inventoried, valued, taxed, mortgaged, insured, willed, divided among heirs and sold. Every one of those events produced a document, and those documents frequently carry names.

**This is the route across.** It is not a workaround; for most of this research it is the only road, and the next lessons are how to walk it.

⚠️ It is also, plainly, an ugly one. You will read your family described as chattel, in ledgers, with values attached. Lesson 13 is about what to do with that. It is not a footnote and it is not weakness to find it hard.

:::reveal Why does a name search in the 1850 and 1860 slave schedules fail, and what does that failure establish? ||| Because those schedules generally recorded enslaved people under the enslaver's name as age, sex and colour, without their names. The failure establishes nothing about your family and everything about how the record was designed.

## Sources

National Archives. (n.d.). *Census records: Slave schedules, 1850 and 1860*. https://www.archives.gov/research/census/african-american

National Archives. (n.d.). *Resources for Black family history research*. https://www.archives.gov/research/african-americans`,
    },
    {
      slug: "gen-the-enslavers-records",
      title: "6 · The enslaver's records",
      section: "Part 2 · Crossing 1870",
      recallContent: [
        {
          prompt: "State the question that replaces asking where the record of a person is, before 1870.",
          answer: "Who claimed to own them, and what records did that claim generate. Property is inventoried, taxed, mortgaged, willed and sold, and those documents frequently carry names.",
        },
      ],
      body: `The identification usually starts with a name and a place from the 1870 census, and proceeds by working out which slaveholding households in that county could have been connected.

## Where names appear

**Probate records, and estate inventories above all.** When a slaveholder died, their property was inventoried and valued for distribution. Enslaved people appear in those inventories, and they are frequently **named, with ages, and sometimes grouped as families**. Wills naming individuals to be inherited by particular heirs are similarly explicit.

Probate is the first place to look, and for many families it is where the wall comes down.

**Deeds and bills of sale.** Recorded at the county, indexed by the seller and buyer, and naming the person sold.

**Mortgages.** Enslaved people were used as collateral, which generated documents naming them.

**Tax lists**, which counted taxable property and sometimes named it.

**Insurance records** where they survive.

**Plantation and business records**: ledgers, birth and death lists kept by the holder, work assignments, rations, medical notes. These sit in university and state archives more often than people expect.

**Court records**, where a dispute over property produced testimony naming people.

## The method

**Start at the county**, not the state. These are county records.

**Look at every slaveholding household of the same surname in the county**, then the neighbours, then the county the family said they came from. Post-emancipation surnames sometimes point at a former enslaver and sometimes do not, which is lesson 8.

**Read the whole document, not just the index.** Names are inside inventories, not in the index.

**Follow the daughters.** Property moved with inheritance and with marriage, so an enslaved family may appear in the estate of a man and then in the household of his daughter under her married name, in a different county.

## Holding two things at once

These documents are frequently the only surviving evidence that a person existed, and they were created by the system that denied that person's personhood, in its language, for its purposes.

**Both are true and both belong in your notes.** When you record a name from an estate inventory, record what kind of document it is. Your descendants reading your work should be able to see the difference between a person's own words and a valuation.

:::reveal Why should you follow an enslaver's daughters and their married names when searching for an enslaved family? ||| Because property moved through inheritance and marriage. An enslaved family recorded in a man's estate can next appear in his daughter's household, under her married surname and often in a different county.

## Sources

National Archives. (n.d.). *Resources for Black family history research*. https://www.archives.gov/research/african-americans

Library of Congress. (n.d.). *Researching enslaved ancestors*. https://guides.loc.gov/`,
    },
    {
      slug: "gen-freedmens-bureau-and-bank",
      title: "7 · The Freedmen's Bureau and the Freedman's Savings Bank",
      section: "Part 2 · Crossing 1870",
      recallContent: [
        {
          prompt: "Which record type most often brings the 1870 wall down, and why?",
          answer: "Probate, especially estate inventories, because property was itemised and valued for distribution, so enslaved people appear named, with ages and sometimes grouped as families.",
        },
      ],
      body: `Two federal creations of the emancipation period generated records of extraordinary genealogical value, for the same reason: both had to deal with formerly enslaved people **as individuals with names and families**, which almost nothing before them did.

## The Freedmen's Bureau

Formally the Bureau of Refugees, Freedmen, and Abandoned Lands, established in 1865 and operating into the early 1870s. Its records include:

**Labour contracts**, naming workers and often family members, with terms.

**Marriage records and registrations.** Many people formalised marriages that slavery had refused to recognise, and the registrations frequently record how long a couple had already been together, which reaches back before emancipation.

**Ration and hospital records**, naming individuals and households.

**Complaint and court records**, where a dispute produced a statement, sometimes at length. **These are among the few places where the words of formerly enslaved people were written down close to the moment.**

**School records**, since the Bureau was involved in establishing schools.

## The Freedman's Savings and Trust Company

A separate institution, chartered in 1865, which failed in 1874 and took many depositors' savings with it. That failure is its own piece of history and it belongs in this course as such.

What matters genealogically is the **signature and deposit registers**. Opening an account meant answering questions, and the clerks recorded the answers: name, age, birthplace, residence, occupation, employer, and **the names of parents, siblings, spouse and children**, sometimes including who had been separated by sale and where they were believed to be.

**There is very little else like it.** A single entry can supply three generations and a place of origin, which is why it is worth checking even when you have no reason to think an ancestor had savings.

## How to use them

Both are held federally and both are indexed in various forms, with indexing quality varying by state and by record series. Search widely on spelling, and where an index fails, the records can be browsed by locality.

Match on more than a name: a place, an age, a spouse, an employer.

:::reveal Why are the Freedman's Savings Bank registers unusually valuable to a genealogist, given they are bank records? ||| Because opening an account required answering identifying questions, and the clerks recorded family details: parents, siblings, spouse, children, birthplace, and sometimes relatives separated by sale. A single entry can supply three generations.

## Sources

National Archives. (n.d.). *Freedmen's Bureau records*. https://www.archives.gov/research/african-americans/freedmens-bureau

National Archives. (n.d.). *Freedman's Savings and Trust Company records*. https://www.archives.gov/research/african-americans`,
    },
    {
      slug: "gen-surnames",
      title: "8 · Surnames, and a story that is too simple",
      section: "Part 2 · Crossing 1870",
      recallContent: [
        {
          prompt: "Name two Freedmen's Bureau record types useful to a family historian.",
          answer: "Any two of: labour contracts, marriage registrations, ration and hospital records, complaint and court records, or school records.",
        },
      ],
      body: `You will hear, often, that formerly enslaved people took the surname of the person who had held them. It is worth knowing that the real picture is more varied, because the assumption sends researchers down one road and only one.

## What the record shows

**Some did** take the surname of a former enslaver, which is why checking slaveholding families of the same surname in the county is a reasonable first move.

**Some took the name of an earlier enslaver**, not the most recent one, which frequently pointed back to a person or family they identified with more, or to where kin remained.

**Some already had surnames** and had used them within their own community for a long time, whatever the records of the holder said.

**Some chose names unconnected to any enslaver**: occupational names, place names, names of public figures, and names chosen to mark freedom.

**Some changed the name again** in the years after, and a family may appear under two surnames within a decade.

⚠️ **Treat any single account of how this worked as contested.** It varied by region, by family and by circumstance, and a confident general rule is a reason to be careful rather than a shortcut.

## What that means for method

**Search the surname, and do not stop there.** If the surname route fails, work from the place: which slaveholding households were in that district, and which held people of the right ages.

**Search on first names.** Given names were frequently continuous across the transition, and a distinctive one plus an age plus a county can identify a person when the surname cannot.

**Expect a family to appear under more than one surname**, including siblings differing from each other.

**Ask the family.** Sometimes the answer is known and has been passed down, and sometimes what was passed down is a version worth checking rather than a fact.

:::reveal If searching slaveholding households of your family's surname in the county produces nothing, what is the next approach? ||| Work from place rather than name: identify which slaveholding households were in the district and which held people of the right ages and sexes, and search on distinctive given names, which were frequently continuous across emancipation when surnames were not.

## Sources

National Archives. (n.d.). *Resources for Black family history research*. https://www.archives.gov/research/african-americans

Gutman, H. G. (1976). *The Black family in slavery and freedom, 1750-1925*. Pantheon Books.`,
    },
    {
      slug: "gen-check-crossing",
      title: "9 · Knowledge check: crossing 1870",
      section: "Part 2 · Crossing 1870",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "A name search of the 1850 and 1860 slave schedules returns nothing for your ancestor. What has that established?",
            options: [
              "Almost nothing about your family, since those schedules generally recorded no names",
              "That the family was not resident in that county during those enumeration years",
              "That the relevant schedules for that district did not survive to the present",
              "That the ancestor was free rather than enslaved during the period covered",
            ],
            correctIndex: 0,
            explanation:
              "Those schedules generally recorded enslaved people under the enslaver's name as age, sex and colour. The search fails because there was no name in it to find, which is a fact about the record's design.",
            sourceLessonSlug: "gen-1870",
          },
          {
            prompt: "Which record type most often names enslaved individuals and is therefore the first to search when crossing 1870?",
            options: [
              "Probate estate inventories, where property was itemised and valued for distribution",
              "Federal census population schedules, which listed every household member by name",
              "State militia enrolment lists, which recorded all residents of military age",
              "County school registers, which recorded children resident in each district",
            ],
            correctIndex: 0,
            explanation:
              "Distribution among heirs required itemisation, so enslaved people appear named, with ages, and sometimes grouped as families. Deeds, mortgages, tax lists and plantation ledgers are the other main routes.",
            sourceLessonSlug: "gen-the-enslavers-records",
          },
          {
            prompt: "Why are the Freedman's Savings Bank registers unusually rich for family history?",
            options: [
              "Opening an account required identifying details including names of parents, siblings and children",
              "The bank was required to verify each depositor's identity against county birth records",
              "Depositors were asked to name every previous location they had lived and worked",
              "The registers were compiled from Freedmen's Bureau marriage records already held",
            ],
            correctIndex: 0,
            explanation:
              "The clerks recorded the answers, so a single entry can supply three generations and a birthplace, sometimes including relatives separated by sale. Very little else from the period does that.",
            sourceLessonSlug: "gen-freedmens-bureau-and-bank",
          },
          {
            prompt: "What is the most accurate statement about surnames adopted around emancipation?",
            options: [
              "Practice varied widely, so the last enslaver's name is one lead among several",
              "Nearly all families adopted the surname of the person who had most recently held them",
              "Surnames were assigned by Freedmen's Bureau officials during the registration process",
              "Families were required to adopt a surname unconnected to any former enslaver",
            ],
            correctIndex: 0,
            explanation:
              "Some took a recent enslaver's name, some an earlier one, some already had surnames in their own community, and some chose names unconnected to any of it. A confident general rule is a reason for caution rather than a shortcut.",
            sourceLessonSlug: "gen-surnames",
          },
        ],
      },
    },
    {
      slug: "gen-migration",
      title: "10 · Following the family north and west",
      section: "Part 3 · Beyond the records",
      body: `If your family left the South between roughly 1910 and 1970, they were part of the largest internal migration in American history, and it shapes your research in specific ways.

## What migration does to a paper trail

**It splits the records across states.** A birth in Mississippi, a marriage in Illinois, a death in Michigan. Three jurisdictions, three sets of rules, three archives.

**It changes what survives.** Northern urban records are frequently more complete for the twentieth century, so a family can be well documented after the move and thin before it.

**It leaves people behind.** Migration was rarely a whole family at once. Somebody stayed, and their descendants may hold the papers, the photographs and the memory of the county you are trying to identify.

## Techniques

**Work the chain.** Migration followed relationships: one person went, then a sibling, then a cousin, along a specific route, usually a rail line, to a specific neighbourhood and often a specific street. **Find one relative's arrival and you have the route for the rest.**

**Read the obituaries.** Northern Black newspapers published obituaries that named the county of birth in the South, which is frequently the single fact you most need.

**Look for the return.** Families went back for funerals, reunions and burials, and burial in a southern county for someone who lived north is a strong pointer to origin.

**Use the church.** Congregations formed along migration chains, and a northern church's records can name a southern county repeatedly.

## Where this connects

This catalog's Great Migration courses cover the history in depth: the three streams, the destinations, and what arrival was actually like. If you are tracing a family through it, that context tells you which route and which city to look in first.

:::reveal Why is finding one relative's arrival in a northern city so useful for tracing the rest of a family? ||| Because migration moved along chains of relationship to specific destinations, usually by a particular rail route to a particular neighbourhood. One documented arrival gives you the route, the city and often the street the others followed.

## Sources

National Archives. (n.d.). *The Great Migration*. https://www.archives.gov/

Library of Congress. (n.d.). *African American newspapers*. https://guides.loc.gov/`,
    },
    {
      slug: "gen-dna-carefully",
      title: "11 · DNA, carefully",
      section: "Part 3 · Beyond the records",
      recallContent: [
        {
          prompt: "Why does finding one relative's northern arrival help trace the whole family?",
          answer: "Migration followed chains of relationship to specific destinations by specific routes. One documented arrival gives the route, the city and often the street the others followed.",
        },
      ],
      body: `Genetic testing is genuinely useful in this research and it is oversold. Both are true, and the useful version is narrow.

**This course names no companies and recommends none.** What follows is what the categories of test can and cannot do.

## What it can do

**Confirm or break a documented relationship** at close range. Whether two people share a recent ancestor is something the biology can speak to.

**Connect you to living relatives** who may hold records, photographs and memory you do not have. **This is the most valuable use for this research**, and it is a route to documents rather than a substitute for them.

**Indicate broad regions of ancestral origin**, at low resolution.

## What it cannot do

**It cannot name your ancestors.** It can tell you two people are related and cannot tell you a name, a date or a place. Every name still comes from records.

**Region estimates are not precise and they change.** They are produced by comparison against reference panels, and both the panels and the methods are revised, so an estimate can shift between updates without anything about you changing.

**It cannot repair the archive.** A test does not recover a name never written down.

**It cannot tell you which specific ethnic group you descend from with certainty**, and confident claims to the contrary should be treated with caution.

## The ethics, which are not optional

**Your results implicate people who did not consent.** Your siblings, your cousins and your children share your DNA, and a result about you is partly a result about them.

**Expect the unexpected.** Tests routinely reveal relationships families did not know about or did not discuss. Decide in advance what you will do with such a finding, and think about who else it affects before you share it.

**Read what happens to your data.** Storage, sharing with third parties, law-enforcement access, and what happens if the company is sold. These terms change.

**Be careful whom you contact and how.** A match is a person, not a lead, and they may not know they were adopted, may not know about a relationship, and may not want contact.

:::reveal What is the most valuable use of genetic testing in this research, and why is it not the one usually advertised? ||| Connecting with living relatives who hold records, photographs and memory you do not have. It is a route to documents rather than a substitute for them, whereas the advertised value is usually the regional estimate, which is low resolution and revised over time.

## Sources

National Human Genome Research Institute. (n.d.). *Genetic testing and privacy*. https://www.genome.gov/

Federal Trade Commission. (n.d.). *Direct-to-consumer genetic testing: What to consider*. https://consumer.ftc.gov/`,
    },
    {
      slug: "gen-for-the-community",
      title: "12 · For the community, not only the family",
      section: "Part 3 · Beyond the records",
      recallContent: [
        {
          prompt: "Name two things genetic testing cannot do in this research.",
          answer: "Any two of: name your ancestors, give a precise or stable regional estimate, recover a name never written down, or identify a specific ethnic group with certainty.",
        },
      ],
      body: `Almost everything in this course scales from one family to many, and in this research the community version is frequently more effective than the individual one.

## Why it works better together

**The records are shared.** One county's probate books, one plantation's ledgers, one church's rolls contain many families at once. A researcher working one family reads the whole document and uses one line of it. **Transcribing the rest costs almost nothing and serves everyone.**

**The wall is shared.** Families from one county face the same problem, and the identification of one slaveholding family's records unlocks lines for people who are not related to each other at all.

**The memory is distributed.** No one family holds it. Reunions, church anniversaries and funerals are where it surfaces.

## Things worth doing

**Transcribe and share what you read.** When you go through an estate inventory for one name, transcribe all of them and put it somewhere findable. This is the single highest-leverage act in the whole field.

**Photograph and index a cemetery.** Small Black cemeteries are frequently unrecorded and are actively at risk from neglect, development and weather. Photographing every stone, with locations, is a permanent record and can be done in a weekend.

**Work with churches.** Congregational records are often the best surviving documentation of Black family life for periods where public records are thin, and they are often uncatalogued, at risk, and in a cupboard. Offer to help catalogue rather than asking to take.

**Turn the reunion into a research event.** A table, a recorder, a scanner, and a request to bring documents. One afternoon can produce more than a year of solitary searching.

**Deposit what you build.** A local historical society, a library, a university archive, or a documented public tree. **Research that exists only on your machine dies with your machine**, and this is material that was hard-won and hard to replace.

⚠️ **Ask before you publish about living people**, and be careful with anything sensitive that emerges: parentage, incarceration, illness. A family's history is not yours alone to disclose, and this catalog's documentation courses take the same position.

:::reveal What is the highest-leverage thing an individual family researcher can do for others working the same county? ||| Transcribe and share the whole of any record they read rather than only the line they needed. One estate inventory or church roll contains many families, and the marginal cost of transcribing the rest is small while the value to unrelated researchers is large.

## Sources

Afro-American Historical and Genealogical Society. (n.d.). *Resources and chapters*. https://aahgs.org/

National Archives. (n.d.). *Resources for Black family history research*. https://www.archives.gov/research/african-americans`,
    },
    {
      slug: "gen-when-the-wall-holds",
      title: "13 · When the wall does not come down",
      section: "Part 3 · Beyond the records",
      recallContent: [
        {
          prompt: "What is the highest-leverage act for a family researcher working a shared county?",
          answer: "Transcribing and sharing the whole of any record they read rather than only their own line, because one inventory or roll serves many unrelated families.",
        },
      ],
      body: `Some lines end. This lesson exists because a course that implied otherwise would be lying to you.

## Why they end

**The document was never made.** No inventory, no bill of sale, no ledger for that household.

**It was made and did not survive.** Courthouse fires destroyed county records across the South, some of them completely. Papers were discarded, sold, burned or lost.

**It exists and cannot be connected.** You find an inventory naming a person of the right name and age, and nothing establishes the link to your family. **An unproven link is not a link**, however much you want it, and the discipline that protects your whole tree also stops you here.

**It exists somewhere unfound.** Uncatalogued in a private collection, an unprocessed accession, a courthouse basement. Possible, and not a plan.

## What this is not

**It is not a failure of your research.** You are looking for people whom a system deliberately did not record as people. When the trail stops there, the trail is telling you what that system did.

**It is not a failure of your family.** No absence in a record says anything about them. It says what was written down, by whom, for what.

**It is not necessarily final.** Records are digitised, indexed and found. Collections are processed. What is inaccessible now may not be in ten years, which is an argument for writing down exactly where you stopped.

## What to do instead

**Document the wall properly.** Which ancestor, in which county, which record sets you searched, what each covers, what survives and what does not. That is a real finding, it is useful to others working the same county, and it is where you or somebody else will restart.

**Write down what you do know.** The lives after 1870 are yours to record fully, and they are not lesser for the line ending. A well-documented five generations is not a consolation prize.

**Record the stories that have no documents.** What was passed down, marked as what it is. It is not proof and it is not nothing, and if you do not write it down it goes.

**Consider that the ending is itself the history.** For a great many families the honest sentence is: the record stops here, because this is where a system stopped recording people as people. Written down and passed on, that sentence carries something a longer tree would not.

:::reveal Why is a documented wall a real research finding rather than an absence of one? ||| Because it records which ancestor, which county, which record sets were searched, what they cover and what survives. That is useful to everyone else working the same county, it prevents the search being repeated, and it is where the work restarts when new records become accessible.

## Sources

National Archives. (n.d.). *Resources for Black family history research*. https://www.archives.gov/research/african-americans

Afro-American Historical and Genealogical Society. (n.d.). *Research guidance*. https://aahgs.org/`,
    },
    {
      slug: "gen-check-beyond",
      title: "14 · Knowledge check: beyond the records",
      section: "Part 3 · Beyond the records",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is the most valuable use of genetic testing for this research?",
            options: [
              "Connecting with living relatives who hold records, photographs and memory",
              "Establishing the specific region and ethnic group an ancestor came from",
              "Confirming a family story about ancestry where no documents survive",
              "Replacing archival research where records were destroyed or never made",
            ],
            correctIndex: 0,
            explanation:
              "It is a route to documents rather than a substitute for them. Regional estimates are low resolution and are revised over time, and no test recovers a name that was never written down.",
            sourceLessonSlug: "gen-dna-carefully",
          },
          {
            prompt: "Why does transcribing an entire estate inventory serve the community more than extracting one name?",
            options: [
              "One document names many families, and the marginal cost of transcribing the rest is small",
              "Archives require complete transcriptions before permitting reproduction of records",
              "Partial transcriptions cannot be cited reliably in a documented family tree",
              "The other names provide corroboration for the reading of your own ancestor's entry",
            ],
            correctIndex: 0,
            explanation:
              "This is the single highest-leverage act available to an individual researcher: the identification of one slaveholding family's records can unlock lines for people who are not related to each other at all.",
            sourceLessonSlug: "gen-for-the-community",
          },
          {
            prompt: "A researcher finds an inventory naming a person of the right name and age, but nothing links them to the family. What should they do?",
            options: [
              "Record it as an unproven lead, since an unproven link is not a link",
              "Add it to the tree provisionally and continue researching backwards from it",
              "Accept it, since name and age agreement in one county is sufficient evidence",
              "Discard it entirely, since a lead that cannot be proven has no research value",
            ],
            correctIndex: 0,
            explanation:
              "The discipline that protects the whole tree applies hardest exactly where you most want the link. Recording it as an unproven lead keeps it available for future evidence without letting later work hang off a guess.",
            sourceLessonSlug: "gen-when-the-wall-holds",
          },
          {
            prompt: "Why is a documented wall a research finding rather than an absence of one?",
            options: [
              "It records who, where and which record sets were searched, so others need not repeat it",
              "It demonstrates that the researcher exhausted every source available in the county",
              "It establishes that the ancestor in question was never legally recorded anywhere",
              "It satisfies the evidence requirements for publishing an incomplete family tree",
            ],
            correctIndex: 0,
            explanation:
              "It is useful to everyone working the same county, it prevents repetition, and it is the restart point when records are digitised, indexed or processed later.",
            sourceLessonSlug: "gen-when-the-wall-holds",
          },
        ],
      },
    },
    {
      slug: "gen-capstone",
      title: "15 · Capstone: one line, documented and passed on",
      section: "Part 3 · Beyond the records",
      lessonType: "assignment",
      body: `Take one line of your family and document it as far back as the accessible record allows. Then write it so somebody else in your family could use it.

**Not a whole tree.** One line, done properly.

## What to submit

**1. The line**, from yourself or a known relative backwards, generation by generation.

**2. For each link, the proof.** The record that establishes it, or the several records that together make it the only reasonable reading. **Mark each link direct or indirect.**

**3. For each person, the source of every fact.** Where it came from, precisely enough that a relative could find it again. Include the form you saw it in.

**4. At least one interview**, with who, when, and what they told you that you could not have got from a record.

**5. At least one conflict.** Two records disagreeing, or a family account against a document. Report it rather than resolving it by preference: what each source is, what would explain both, and whether it settled.

**6. Where the line stops**, and which kind of stop: searched and absent, records do not survive, exists but cannot be connected, or never recorded as a person. Name the county and the record sets you searched.

**7. One paragraph for your family.** Not for a genealogist. What you found, what it means, and what you could not establish, written so a cousin who has never seen a census page can read it.

## How this is assessed

Not on how far back you got. **Three well-proven generations beat eight built on assumptions**, and this is the assessment that matters most in a course about your own family, because the temptation runs the other way.

You are assessed on section 2 (whether links are proven and marked), section 5 (whether the conflict stands rather than being tidied), section 6 (whether the stop is characterised rather than reported as failure), and section 7.

**Section 7 is the point of the whole course.** A tree only you can read serves one person. A paragraph a cousin can read is how this becomes the family's rather than yours.

## One thing to hold

If your line stops early, that is not a lesser submission. Documenting exactly where a system stopped recording your people, and saying so plainly, is a finding, and it is one that outlasts a longer tree built on guesses.

## Sources

National Archives. (n.d.). *Resources for Black family history research*. https://www.archives.gov/research/african-americans

Board for Certification of Genealogists. (n.d.). *Genealogical proof standard*. https://bcgcertification.org/`,
    },
  ],
};
