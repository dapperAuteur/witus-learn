import type { AuthoredCourse } from "./authored-course";

// RSRCH-02 of the Researcher track. Plan: plans/69-researcher-track.md.
//
// This is the course the Documentarian program already wanted as "a standalone Archives & Records
// course" (plans/future/12). It sits here rather than there because reading a finding aid is a
// research skill before it is a documentary skill, and all four documentation paths need it.
//
// THE MENTAL SWITCH THIS COURSE HAS TO PRODUCE, and it is genuinely hard for people who are good at
// libraries: a library is organised by SUBJECT so you can find a known thing; an archive is
// organised by ORIGIN so you can understand an unknown thing in context. Searching an archive like a
// library fails, and it fails in a way that looks like the archive being unhelpful.
//
// NO INVENTED FINDING AIDS. Where the course describes structure it describes the standard structure
// (fonds, series, subseries, file, item) and points the reader at real catalogues to look at, rather
// than inventing an example collection that would teach a fictional shape.

export const ARCHIVES_AND_FINDING_AIDS_COURSE: AuthoredCourse = {
  title: "Archives, and How a Collection Is Actually Organised",
  description:
    "A library is arranged by subject so you can find a known thing. An archive is arranged by origin so you can understand an unknown thing in context, and searching one like the other is why capable researchers conclude a document does not exist. Finding aids, provenance and original order, the hierarchy from fonds to item, reading-room practice, and what a catalogue's silence means.",
  lessons: [
    {
      slug: "arc-not-a-library",
      title: "1 · An archive is not a library",
      section: "Part 1 · How a collection is built",
      body: `The mistake is so common it is almost universal, and it is made by people who are excellent at libraries.

| | Library | Archive |
|---|---|---|
| Holds | Published items, usually many copies existing elsewhere | Unique records, usually one copy in the world |
| Arranged by | Subject | **Origin**: who created or accumulated it |
| Described at | Item level, every book catalogued | Often **collection level**: a series, a box |
| You find things by | Searching a subject | Working out **who would have made the record** |
| If it is lost | Order another copy | It is gone |

## Why origin rather than subject

It looks unhelpful until you see the reason. **A record's meaning depends on what it sat next to.**

A letter in a company's legal files means something different from the same letter in the personal papers of the person who received it. The first tells you the company treated it as a legal matter. The second tells you it mattered to an individual. Filing both under a subject would destroy that, and the information is not recoverable afterward.

So archives keep records grouped by their creator and in the order that creator kept them. The arrangement is itself evidence.

## What this changes about how you look

You stop asking "where is the document about X" and start asking:

> **Who would have generated a record of this, in the course of their ordinary business? Where did that person or body's records end up?**

That is the whole method, and every remaining lesson in this course is a way of executing it.

:::reveal Why does keeping the same letter under its creator rather than under its subject preserve information that subject filing would destroy? ||| Because where a record sat tells you how its keeper understood it. The same letter in a company's legal files and in a recipient's personal papers carry different meanings, and refiling both by topic erases that difference permanently.

## Sources

Society of American Archivists. (n.d.). *Using archives: A guide to effective research*. https://www2.archivists.org/usingarchives

International Council on Archives. (n.d.). *ISAD(G): General international standard archival description*. https://www.ica.org/`,
    },
    {
      slug: "arc-provenance-and-original-order",
      title: "2 · Provenance and original order",
      section: "Part 1 · How a collection is built",
      recallContent: [
        {
          prompt: "In archives, what question replaces asking where the document about a subject is?",
          answer: "Who would have generated a record of this in the course of their ordinary business, and where did that person or body's records end up.",
        },
      ],
      body: `Two principles govern archival arrangement almost everywhere. They sound administrative and they are directly useful to you as a searcher.

## Provenance

**Records from one creator are kept together and not mixed with records from another.** A collection reflects an origin, not a topic.

The practical consequence: you locate material by identifying its creator. If you want the correspondence of a factory manager, you do not look for a "factories" collection. You find out whether that manager's papers survive, or whether the company's records do, and where they went.

## Original order

**Records are kept in the order their creator kept them**, rather than being rearranged alphabetically or chronologically by the archive.

This is the one researchers find frustrating and it is the one that carries the most information. If a file was kept as "Complaints, unresolved," that is a fact about how the organisation saw those complaints. Sorting them into date order would have destroyed it.

It also means **the order tells you where to look next**. A folder is surrounded by the folders its creator thought belonged beside it, so the material adjacent to what you want is the most likely place for what you did not know to ask for.

## When order was not preserved

Sometimes the original order was already lost when the archive received the material, or a previous owner rearranged it. A good finding aid says so, and it matters: an imposed arrangement carries the assumptions of whoever imposed it rather than of the creator.

Read that note when it appears. It changes what the arrangement is evidence of.

:::reveal You find the folder you wanted. What is the strongest argument for reading the folders on either side of it before you leave? ||| Original order means those folders are what the creator thought belonged beside it. They are the most likely location for material you did not know existed, and that adjacency is information you cannot get from a catalogue.

## Sources

Society of American Archivists. (n.d.). *Provenance* and *Original order*. Dictionary of Archives Terminology. https://dictionary.archivists.org/

National Archives. (n.d.). *Principles of arrangement*. https://www.archives.gov/`,
    },
    {
      slug: "arc-reading-a-finding-aid",
      title: "3 · Reading a finding aid",
      section: "Part 1 · How a collection is built",
      recallContent: [
        {
          prompt: "What does original order preserve that a tidy chronological rearrangement would destroy?",
          answer: "Evidence of how the creator understood the records: what they grouped together and what they called it. That is information no catalogue can recover afterward.",
        },
      ],
      body: `A **finding aid** is the archive's description of a collection. It is the single most useful document in this course and most researchers skim the part that matters and read the part that does not.

## What it contains, and what each part is for

**Summary or collection-level record.** Creator, dates, extent, a short abstract, and the call number you will need to request anything. Read the extent: "84 linear feet" and "1 box" are different research projects.

**Biographical or historical note.** Who the creator was. Skim it for names, organisations and dates you can search elsewhere, because this is frequently the best short account of the creator that exists.

**Scope and content note.** What the records actually cover, and often what they do NOT. **This is the part to read twice.** It is where an archivist tells you the collection is strong on one decade and thin on another.

**Arrangement.** How it is divided into series. This is the map.

**Container list.** Box and folder inventory, with titles. Usually the longest part and the part people read first.

**Restrictions.** Access and use conditions, which are two different things.

## The part almost everyone under-reads

The **scope and content note**. A container list tells you a folder is called "Correspondence, 1952." The scope note tells you the correspondence in this collection is almost entirely incoming, because the creator did not keep copies of what she sent.

That single sentence changes the entire value of the collection for a question about her views, and it is invisible from the folder titles.

## Folder titles are not descriptions

They are frequently the creator's own labels, sometimes an archivist's best guess, and they are not promises. A folder called "Miscellaneous" may hold the most important item in the collection. The container list is a map, not an index.

:::reveal Which section of a finding aid most often changes a researcher's plan, and give an example of what it can reveal that a container list cannot. ||| The scope and content note. It can tell you, for instance, that the correspondence is almost entirely incoming because the creator kept no copies of her own letters, which is invisible from folder titles and transforms what the collection can answer.

## Sources

Society of American Archivists. (n.d.). *Describing archives: A content standard*. https://www2.archivists.org/standards

Library of Congress. (n.d.). *Finding aids: Manuscript collections*. https://findingaids.loc.gov/`,
    },
    {
      slug: "arc-the-hierarchy",
      title: "4 · Fonds, series, file, item",
      section: "Part 1 · How a collection is built",
      recallContent: [
        {
          prompt: "Which part of a finding aid is most under-read, and why does it matter?",
          answer: "The scope and content note. It says what the records actually cover and what they lack, which folder titles cannot show.",
        },
      ],
      body: `Archival description is a hierarchy, and knowing the levels tells you what a given record is describing.

**Fonds or collection.** Everything from one creator. The top level.

**Series.** A group within it that was kept as a unit or shares a function: correspondence, minutes, financial records, photographs. Series are usually the creator's own divisions, not the archive's invention.

**Subseries.** A division within a series, when the material needs it.

**File.** A folder, a volume, a bundle.

**Item.** One letter, one photograph, one map.

## Why the level matters to you

**A catalogue record can sit at any level.** When you find a record, the first question is what it describes. A hit at series level tells you a group of material exists and nothing about any single document in it.

**Description gets thinner as you go down**, and often stops entirely at file level. That is the collection-level description problem from the search course, seen from the archive's side.

**Requests are usually made at file level.** You order a box or a folder, not an item, which is why the container list is the practical working document.

## Reading the hierarchy as a research plan

The hierarchy tells you where your question lives. A question about a decision belongs in minutes or correspondence. A question about who was employed belongs in personnel or payroll. A question about what a place looked like belongs in photographs or plans.

**Pick the series before you pick the folder.** Researchers who work folder by folder through a container list burn their reading-room time on the wrong series.

:::reveal A catalogue hit is described at series level. What have you learned, and what have you not? ||| That a group of material of that kind exists in the collection, with a date range and an extent. You have learned nothing about any individual document inside it, including whether the one you want is there.

## Sources

International Council on Archives. (n.d.). *ISAD(G): General international standard archival description*. https://www.ica.org/

Society of American Archivists. (n.d.). *Levels of description*. Dictionary of Archives Terminology. https://dictionary.archivists.org/`,
    },
    {
      slug: "arc-check-how-collections-work",
      title: "5 · Knowledge check: how a collection works",
      section: "Part 1 · How a collection is built",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Why do archives arrange records by creator rather than by subject?",
            options: [
              "Because where a record sat is evidence of how its keeper understood it",
              "Because subject arrangement would require cataloguing every item individually",
              "Because most archival records concern several subjects and resist single classification",
              "Because creators donate collections on condition that they remain intact",
            ],
            correctIndex: 0,
            explanation:
              "The arrangement is itself evidence, and refiling by topic destroys it irreversibly. The cost of item-level cataloguing is real and separate, and donation conditions exist but are not the principle.",
            sourceLessonSlug: "arc-not-a-library",
          },
          {
            prompt: "You locate the exact folder you needed. What is the strongest reason to examine adjacent folders?",
            options: [
              "Original order means the creator thought that material belonged beside it",
              "Archives frequently misfile individual items when returning them to storage",
              "Adjacent folders usually continue the same date range and complete the sequence",
              "Container lists are compiled quickly and often mislabel neighbouring folders",
            ],
            correctIndex: 0,
            explanation:
              "Adjacency is information the catalogue cannot give you: it reflects the creator's own grouping, so the neighbouring material is the likeliest place for what you did not know to ask for.",
            sourceLessonSlug: "arc-provenance-and-original-order",
          },
          {
            prompt: "A finding aid's scope and content note says the correspondence is almost entirely incoming. Why does that matter more than the container list?",
            options: [
              "It reveals the collection cannot show what the creator herself wrote or argued",
              "It indicates the collection was rearranged after the archive received it",
              "It means the folder titles were supplied by an archivist rather than the creator",
              "It shows the correspondence series is smaller than the extent statement suggests",
            ],
            correctIndex: 0,
            explanation:
              "A folder titled Correspondence looks identical either way. The scope note is where you learn what the collection can and cannot answer, which is why it is the section to read twice.",
            sourceLessonSlug: "arc-reading-a-finding-aid",
          },
          {
            prompt: "A catalogue hit is described at series level. What does it establish?",
            options: [
              "That material of that kind exists in the collection, and nothing about any single document",
              "That every document in that series has been individually catalogued and is retrievable",
              "That the series has been digitised and can be consulted without visiting the archive",
              "That the archive considers the series the most significant part of the collection",
            ],
            correctIndex: 0,
            explanation:
              "Description gets thinner as the hierarchy descends and often stops at file level. A series-level hit is a pointer to a group, not evidence that the document you want is inside it.",
            sourceLessonSlug: "arc-the-hierarchy",
          },
        ],
      },
    },
    {
      slug: "arc-requesting-and-the-reading-room",
      title: "6 · Requesting material, and the reading room",
      section: "Part 2 · Using it",
      body: `Archives run on procedures that look fussy and mostly exist because the material is unique. A researcher who arrives knowing them gets far more out of a day.

## Before you go

**Register in advance** where the archive allows it, and bring the identification they specify.

**Reserve material ahead.** Many collections are held offsite, with retrieval measured in days. Turning up and asking is how a trip produces nothing.

**Know the request limits.** Most reading rooms cap how many boxes you may have at once, and how many requests per day.

**Check the photography policy.** Whether you may photograph, with what, and whether flash and scanners are permitted. This decides how much you can take away.

## In the room

Pencils only, no pens. One folder out at a time. Keep the order inside the folder exactly as you found it, and do not reorder anything. Weights and supports for bound volumes if provided. No food or drink, and usually bags in a locker.

## The thing to actually optimise

**Your scarce resource is not reading time, it is retrieval time.** You can read anywhere; you can only request here, and requests are slow and capped.

So work the container list before you arrive and request broadly on arrival. Skim fast, photograph what you need, and note what deserves closer reading later. Deep reading in the reading room while a box you have not yet requested sits in storage is the classic misallocation.

## Ask the archivist

Genuinely the highest-value action available and the most under-used. The reference archivist knows what is in collections that the finding aid does not describe, which related holdings exist, and what other researchers on your subject have used.

Ask a specific question rather than describing your topic. "I am looking for evidence of X between these years, and I have looked at these two series" gets a far better answer than "I am researching Y."

:::reveal In a reading-room day, what is the genuinely scarce resource, and what does that imply about how to spend the morning? ||| Retrieval, not reading. Requests are slow and capped and can only be made there, so the morning should go on requesting broadly and skimming, with photographs taken for close reading later, rather than on reading one folder deeply.

## Sources

National Archives. (n.d.). *Plan your research visit*. https://www.archives.gov/research/

Society of American Archivists. (n.d.). *Using archives: A guide to effective research*. https://www2.archivists.org/usingarchives`,
    },
    {
      slug: "arc-what-the-catalogue-does-not-say",
      title: "7 · What the catalogue does not say",
      section: "Part 2 · Using it",
      recallContent: [
        {
          prompt: "What is the scarce resource in a reading-room day, and what does that mean for the morning?",
          answer: "Retrieval time, because requests are slow and capped and can only be made on site. Request broadly and skim early; read closely from photographs later.",
        },
      ],
      body: `A catalogue is not a neutral list of what exists. It is a record of what an institution acquired, chose to keep, could afford to describe, and decided how to describe. Every one of those is a filter, and reading around them is part of the trade.

## Four kinds of silence

**Never collected.** Archives acquired the papers of people considered important by the standards of the collecting era, which skewed heavily toward institutions, officials, businesses and prominent men. An absence often reflects a collecting policy rather than an absence of records.

**Collected but unprocessed.** Material can sit in an archive for decades with only a minimal record. It is there and it is close to invisible. **Ask specifically whether there are unprocessed accessions** relating to your subject, because they will not appear in a search.

**Described thinly.** A large collection may have a two-paragraph record because nobody has had funding to describe it further.

**Restricted.** Present, described, and closed for a period or by condition.

## The asymmetry this creates, and it is this catalog's own subject

The records of the powerful survive in institutional archives because institutions kept them and archives collected them. The records of everybody else survive in smaller quantities, in different places, and describe people from the outside: in court records, payroll ledgers, census returns, hospital and school files.

**A researcher who searches only for what someone said about themselves will find the powerful and miss everyone else.** The method for the rest is to work through the records that were kept ABOUT them by institutions that had a reason to write them down.

That is not a workaround. For most of history it is the only route, and knowing it is a large part of what separates a researcher from a search box.

:::reveal Your subject appears in no archival collection under their own name. Name two record types that might still document them, and say what those records have in common. ||| Any two of: court records, payroll or employment ledgers, census returns, hospital or school records, land and tax records, or newspaper reports. What they share is that an institution created them for its own purposes, describing the person from the outside rather than in their own voice.

## Sources

Society of American Archivists. (n.d.). *Archival silences and inclusive description*. https://www2.archivists.org/

Caswell, M., Punzalan, R., & Sangwand, T. (2017). Critical archival studies: An introduction. *Journal of Critical Library and Information Studies, 1*(2).`,
    },
    {
      slug: "arc-check-using-archives",
      title: "8 · Knowledge check: using archives",
      section: "Part 2 · Using it",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Why should a researcher request material broadly early in a reading-room visit?",
            options: [
              "Retrieval is slow and capped, and can only be done on site, unlike reading",
              "Archivists prioritise requests submitted before the middle of the working day",
              "Boxes requested together are more likely to be delivered in their original order",
              "Reading-room registration expires at the end of each day and must be renewed",
            ],
            correctIndex: 0,
            explanation:
              "Reading can happen anywhere afterward, from photographs. Requesting cannot. Spending the morning reading one folder deeply while unrequested boxes sit in storage is the classic misallocation of an archive day.",
            sourceLessonSlug: "arc-requesting-and-the-reading-room",
          },
          {
            prompt: "A search of an archive's catalogue returns nothing on your subject. Which possibility does the catalogue itself not reveal?",
            options: [
              "That relevant material exists as an unprocessed accession with no searchable record",
              "That the collection covering your subject is held at a different institution entirely",
              "That the material was described under a subject heading you did not think to use",
              "That access to the relevant series is restricted for a defined period of years",
            ],
            correctIndex: 0,
            explanation:
              "Unprocessed material is present and effectively invisible, which is why asking a reference archivist about accessions is a distinct action from searching. Restrictions and alternative headings usually do appear somewhere in the catalogue.",
            sourceLessonSlug: "arc-what-the-catalogue-does-not-say",
          },
          {
            prompt: "Why do institutional archives disproportionately document the powerful?",
            options: [
              "Institutions kept their own records and collecting policies favoured prominent creators",
              "Records concerning ordinary people were routinely destroyed by statute after a period",
              "Ordinary people rarely generated written records of any kind before the twentieth century",
              "Archives charge deposit fees that only institutions and wealthy families could meet",
            ],
            correctIndex: 0,
            explanation:
              "It is a compound of what was created, what was kept and what was collected. Records about ordinary people do exist in quantity, but they were generated by institutions describing them from the outside rather than deposited as personal papers.",
            sourceLessonSlug: "arc-what-the-catalogue-does-not-say",
          },
          {
            prompt: "What does a reference archivist offer that a finding aid cannot?",
            options: [
              "Knowledge of related holdings and of material the finding aid does not describe",
              "Authority to waive access restrictions for researchers with a professional purpose",
              "Permission to reorder folders when the original arrangement obstructs research",
              "A guarantee that requested material will be retrieved within the same working day",
            ],
            correctIndex: 0,
            explanation:
              "They know what is in collections the description does not reach, what related material exists elsewhere, and what other researchers on the subject have used. Asking a specific question gets far more than describing a topic.",
            sourceLessonSlug: "arc-requesting-and-the-reading-room",
          },
        ],
      },
    },
    {
      slug: "arc-capstone-read-a-finding-aid",
      title: "9 · Capstone: read a real finding aid and plan a visit",
      section: "Part 2 · Using it",
      lessonType: "assignment",
      body: `Find a real finding aid for a real collection, at any archive, on any subject that interests you. Most large archives publish theirs online. Then plan a visit you could actually make.

## What to submit

**1. The collection.** Name, holding institution, call number, extent and date range, with a link.

**2. What the scope and content note tells you** that the container list does not. Quote the sentence that changes the picture. If there genuinely is not one, say so, and say what that absence suggests about how well the collection is described.

**3. The arrangement, in your own words.** What are the series, and what function does each represent?

**4. A research question this collection could answer**, and one it could not, with your reasoning from the description rather than from a guess.

**5. Your request plan.** Which series first, which boxes and folders, in what order, and why. Note the reading room's request limits if published.

**6. One question for the reference archivist**, written specifically. Not your topic. A question that shows what you have already read and asks for what the description cannot give you.

**7. What is probably missing**, and why. Consider the four silences: never collected, unprocessed, thinly described, restricted.

## How this is assessed

Not on choosing an important collection. A small, well-read finding aid beats a famous collection skimmed.

You are assessed on section 2 (whether you read the scope note rather than the container list), section 4 (whether the limits come from the description or from guessing), and section 6. **A good archivist question is a professional skill and it is visible immediately**: it names what you have already looked at.

## Sources

Society of American Archivists. (n.d.). *Using archives: A guide to effective research*. https://www2.archivists.org/usingarchives

Library of Congress. (n.d.). *Finding aids*. https://findingaids.loc.gov/`,
    },
  ],
};
