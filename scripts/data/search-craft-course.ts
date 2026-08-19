import type { AuthoredCourse } from "./authored-course";

// RSRCH-01 of the Researcher track. Plan: plans/69-researcher-track.md.
//
// WHY THIS IS THE FIRST SKILL COURSE. Almost nobody has been taught to search. People who research
// professionally for years often still type a phrase into one box and judge the world by what comes
// back. This is the single biggest speed multiplier in the track, and it is teachable in a way that
// "be thorough" is not.
//
// THE THROUGH-LINE: a query is a HYPOTHESIS about how somebody else described the thing. Every
// technique in this course is a way of testing or repairing that hypothesis. That framing is what
// stops the course being a list of operators, which would date badly and teach nothing transferable.
//
// NO PLATFORM-SPECIFIC SYNTAX TABLES. Operators change, interfaces change, vendors change. What does
// not change is the underlying model: fields, indexes, controlled vocabularies, coverage. Teach the
// model and name the operator families, and the course survives.

export const SEARCH_CRAFT_COURSE: AuthoredCourse = {
  title: "Search Craft",
  description:
    "Most people were never taught to search. This is the trade version: what a database actually indexes, why controlled vocabularies find what free text misses, how to read a failed search for information, and how to harvest the vocabulary of a field from the first document you find. The biggest speed multiplier in professional research.",
  lessons: [
    {
      slug: "sc-query-is-a-hypothesis",
      title: "1 · A query is a hypothesis",
      section: "Part 1 · How finding works",
      body: `When you type words into a search box, you are making a guess: **that somebody, somewhere, described this thing using roughly these words, and that a system indexed that description in a way your words will reach.**

That is a hypothesis. It can be wrong in three different places, and knowing which one failed is most of the skill.

## The three failure points

**They used different words.** The thing exists, is described, and is described as something else. A 1930s document about what you would call a strike may be filed under "labor disturbance," "industrial unrest," or the name of the company.

**The system does not index what you searched.** You searched full text; the database only indexes titles and subject headings. Or the reverse: you searched a subject heading that this system does not use.

**It is not in this collection at all.** Nothing you type will fix that, and continuing to rephrase is the commonest way to waste an afternoon.

## Why this framing matters more than the operators

Operators change. Interfaces change. Vendors buy each other. What does not change is that a search is a bet about description and indexing, and that a zero-result search is **information** rather than an absence.

An experienced searcher reads a failure and asks which of the three it was. A novice rephrases and tries again, which only ever helps with the first one.

:::reveal You search a newspaper database for a company name and a year and get nothing, though you are confident the event happened. Name the three distinct explanations, and say which one rephrasing can fix. ||| The paper described it in other words; the database indexes something other than what you searched (or has poor text capture); or that paper is not in this collection for that year. Rephrasing only addresses the first.

## Start by finding out what you are searching

Before the second query, spend two minutes on the collection's own description: what it covers, which years, whether the text is searchable or only the catalogue record. Almost every database publishes this and almost nobody reads it.

That habit converts a large share of "I could not find it" into "that is not in here, and here is what is."

## Sources

Library of Congress. (n.d.). *Research guides: Getting started*. https://guides.loc.gov/

National Archives. (n.d.). *Search tips for the National Archives Catalog*. https://www.archives.gov/research/catalog`,
    },
    {
      slug: "sc-what-a-database-indexes",
      title: "2 · What a database actually indexes",
      section: "Part 1 · How finding works",
      recallContent: [
        {
          prompt: "A search returns nothing. Name the three distinct reasons, and say which one rephrasing can fix.",
          answer: "Different words were used; the system does not index what you searched; or the material is not in the collection. Rephrasing only fixes the first.",
        },
      ],
      body: `Two systems can hold the same document and behave completely differently, because they index different things.

| What is indexed | What that means for you |
|---|---|
| Full text | Any word in the document is findable, subject to how well the text was captured |
| Metadata only | Only the catalogue record: title, creator, dates, subjects. The words inside are invisible |
| Controlled subjects | A curated vocabulary applied by a human, which may not use your words at all |
| Item level vs collection level | A record may describe a whole box, not the letter inside it |

## The one that surprises people

**Collection-level description.** In archives, the catalogue frequently describes a series or a box rather than each item. Nothing about an individual letter is indexed, so no search for its contents can succeed. It is findable only by understanding which collection would contain it and then looking.

That is not a flaw. Item-level description of everything is unaffordable, and it is why the next course in this track is about reading finding aids.

## The practical consequence

**Match your technique to the index.** Full text rewards distinctive phrases and unusual spellings. Metadata rewards knowing the creator, the date range, and the vocabulary. Collection-level description rewards reasoning about who would have generated the record and where their papers went.

Using a full-text technique against a metadata index is the commonest reason a capable person concludes a document does not exist.

:::reveal An archive catalogue describes a box as "Correspondence, 1938 to 1941" and nothing more. Why will no keyword search reach the letter you want, and what does find it? ||| Because nothing about the individual letters was indexed; only the box was described. It is found by reasoning about who would have written or received it, which collection their papers went to, and then reading the box.

## Sources

Society of American Archivists. (n.d.). *Describing archives: A content standard*. https://www2.archivists.org/standards

OCLC. (n.d.). *Cataloging and metadata*. https://www.oclc.org/en/cataloging.html`,
    },
    {
      slug: "sc-operators-that-still-work",
      title: "3 · The operator families that still work",
      section: "Part 1 · How finding works",
      recallContent: [
        {
          prompt: "Why can no keyword search reach a letter inside a box described only as Correspondence 1938 to 1941?",
          answer: "Because only the box was described. Nothing about individual items was indexed, so the letter is reachable only by reasoning about which collection holds it.",
        },
      ],
      body: `Syntax varies by system, so learn the **families** rather than one vendor's punctuation. Almost every serious system supports most of these in some form, and its help page will tell you which.

**Phrase.** Quoting a phrase to require the words adjacently. The single most useful and most under-used operator.

**Boolean.** AND narrows, OR widens, NOT excludes. The one worth deliberate practice is **OR**, because it is how you handle the "they used different words" failure: search several possible descriptions at once.

**Proximity.** Words within N words of each other. Enormously powerful in full-text newspaper archives, where a name and a subject may be in the same paragraph but never adjacent.

**Truncation and wildcards.** A stem plus a symbol to catch endings, and a single-character wildcard for spelling variants. Essential for names and for historical spelling.

**Field limits.** Restricting to title, author, subject, date range, document type. This is what turns a thousand results into twelve.

## The technique that fixes the commonest failure

The "different words" problem is solved by an OR set, not by better guessing:

> ("labor disturbance" OR "industrial unrest" OR strike OR walkout OR "work stoppage")

Combined with a field limit on the date range and a proximity operator against the company name, that is a serious query. It is also the point at which you stop searching one phrase at a time.

## Where to check the syntax

The help page. Every time, on every system, because they genuinely differ, and a query using an operator the system does not support usually fails silently by treating it as a word.

:::reveal Which operator family directly addresses the "they used different words" failure, and why does adding more AND terms make that failure worse? ||| OR, because it lets you search several plausible descriptions at once. Adding AND terms narrows further onto your original guess about the vocabulary, so if the guess is wrong you are simply excluding the material faster.

## Sources

National Library of Medicine. (n.d.). *PubMed user guide: Search techniques*. https://pubmed.ncbi.nlm.nih.gov/help/

Library of Congress. (n.d.). *Chronicling America: Search tips*. https://chroniclingamerica.loc.gov/`,
    },
    {
      slug: "sc-controlled-vocabulary",
      title: "4 · Controlled vocabulary, and what free text misses",
      section: "Part 1 · How finding works",
      recallContent: [
        {
          prompt: "Which operator family addresses the different-words failure, and why does adding AND terms make it worse?",
          answer: "OR, which searches several plausible descriptions at once. AND narrows onto your original guess, so a wrong guess excludes the material faster.",
        },
      ],
      body: `A **controlled vocabulary** is a fixed list of terms that a cataloguer assigns to a work, regardless of what words the work itself uses. Library of Congress Subject Headings are the best-known example; medicine, law, art and archives all have their own.

The point is to gather things that belong together and are described differently. Four books about the same subject that never use the same phrase can all carry the same heading.

## Why this beats free text for some jobs

**Synonyms are solved for you.** Someone has already decided that these several phrasings mean one thing.

**Historical language is mapped.** A vocabulary maintained over decades carries the older terms and points them at the current one, which is exactly the problem in historical research.

**It is precise.** A subject heading was applied deliberately. A word in the text may be a passing mention.

## How to find the right term without memorising anything

The move is always the same, and it works on any system with subject indexing:

1. Search free text, badly, and get **one** good result.
2. Open its full record and read the subject headings.
3. Search that heading.
4. Repeat: the results of the heading search will reveal narrower and related headings.

This is called pearl-growing, and it converts one lucky hit into systematic coverage. It is the highest-value habit in this course.

## The caution

Vocabularies are made by people at a time, and they carry that time's assumptions. Headings for people and communities have been revised, sometimes late, and older records still carry older terms. **In historical research you frequently have to search the term you find offensive**, because that is how the material was catalogued, and refusing to means not finding it.

Note it in your file when you do. A reader should know that a search term is the archive's language rather than yours.

:::reveal Describe pearl-growing in one sentence, and say what it converts. ||| Find one good result by any means, read the subject headings on its record, and search those headings to find everything catalogued alongside it. It converts a single lucky hit into systematic coverage.

## Sources

Library of Congress. (n.d.). *Library of Congress Subject Headings*. https://id.loc.gov/authorities/subjects.html

Getty Research Institute. (n.d.). *Art and Architecture Thesaurus*. https://www.getty.edu/research/tools/vocabularies/`,
    },
    {
      slug: "sc-check-how-finding-works",
      title: "5 · Knowledge check: how finding works",
      section: "Part 1 · How finding works",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "A catalogue describes an archival box only as correspondence for a range of years. Why will no keyword search find a specific letter inside it?",
            options: [
              "Only the box was described, so nothing about individual items was ever indexed",
              "Correspondence is excluded from keyword indexes for privacy reasons in most archives",
              "Handwritten material cannot be indexed because text capture fails on script",
              "The catalogue indexes items only after a researcher has formally requested them",
            ],
            correctIndex: 0,
            explanation:
              "This is collection-level description, and it is normal rather than a flaw: item-level description of everything is unaffordable. The letter is reachable by reasoning about which collection holds it, not by searching.",
            sourceLessonSlug: "sc-what-a-database-indexes",
          },
          {
            prompt: "You are confident an event was covered but a full-text newspaper search returns nothing. Which move addresses the most likely cause?",
            options: [
              "An OR set of the several phrases the period might have used for it",
              "Adding the county and the exact date to narrow the result set further",
              "Repeating the same phrase with quotation marks to force adjacency",
              "Switching to a different search engine to compare the coverage",
            ],
            correctIndex: 0,
            explanation:
              "The commonest cause is that the period described it differently. OR searches several descriptions at once. Narrowing with AND terms only pushes harder on a vocabulary guess that may already be wrong.",
            sourceLessonSlug: "sc-operators-that-still-work",
          },
          {
            prompt: "What does pearl-growing describe?",
            options: [
              "Using the subject headings on one good result to find everything catalogued alongside it",
              "Widening a date range step by step until the first relevant result appears",
              "Combining several databases into one search to increase total coverage",
              "Following the footnotes of a book outward to the sources it cites",
            ],
            correctIndex: 0,
            explanation:
              "It converts one lucky hit into systematic coverage by borrowing the cataloguer's vocabulary. Following footnotes is also valuable and is a different technique, called citation chaining.",
            sourceLessonSlug: "sc-controlled-vocabulary",
          },
          {
            prompt: "Why does historical research sometimes require searching a term the researcher finds offensive?",
            options: [
              "Because material was catalogued in the language of its time, and refusing means not finding it",
              "Because modern subject headings deliberately preserve historical terms without revision",
              "Because full-text systems cannot map older phrasings onto current equivalents at all",
              "Because archives require researchers to use the original terminology in requests",
            ],
            correctIndex: 0,
            explanation:
              "Vocabularies carry the assumptions of the period that made them, and older records still carry older headings. Many have since been revised, which is why both terms may be needed. Note in the file when a search term is the archive's language rather than yours.",
            sourceLessonSlug: "sc-controlled-vocabulary",
          },
        ],
      },
    },
    {
      slug: "sc-newspapers-and-ocr",
      title: "6 · Newspapers, and why your search failed",
      section: "Part 2 · Difficult sources",
      body: `Digitised newspapers are among the richest sources available and among the most misleading to search, because between the printed page and your query sits a machine that read the page imperfectly.

## What OCR does to your search

Optical character recognition converts a scanned image into text. On clean modern type it is very good. On a nineteenth-century paper printed on cheap stock, microfilmed in 1974 and scanned from the film, it is not.

Consequences you can plan around:

- **Names break most.** Proper nouns have no dictionary to correct against.
- **Long words break in the middle**, so truncation helps more than usual.
- **Columns bleed**, so words from adjacent stories can appear to be adjacent.
- **A zero-result search proves nothing** about whether the paper covered it.

## The techniques that work

**Search distinctive but common words.** A street name, an unusual noun, a company product. These survive text capture better than a personal name.

**Use proximity rather than phrases.** A phrase requires exact adjacency, which is exactly what a bad column split destroys.

**Search the date, not the words.** If you know roughly when, browse the issue. Reading three days of a small-town paper is often faster than twenty query variations, and you will find things you did not know to look for.

**Check what the collection covers.** Digitised newspaper collections are patchy by title and by year, and a gap in coverage looks identical to a gap in the news.

:::reveal Why is browsing three days of an issue often faster than refining a query, when you know approximately when an event happened? ||| Because text capture may have mangled the words you would search for, and no query variation recovers a name the machine never read correctly. Browsing sidesteps the index entirely, and it surfaces related material you did not know to look for.

## Sources

Library of Congress. (n.d.). *Chronicling America: About the program*. https://chroniclingamerica.loc.gov/about/

Library of Congress. (n.d.). *Understanding OCR and search in digitised newspapers*. https://guides.loc.gov/chronicling-america`,
    },
    {
      slug: "sc-government-and-data-portals",
      title: "7 · Government publications and the data you cannot search",
      section: "Part 2 · Difficult sources",
      recallContent: [
        {
          prompt: "Why does a zero-result search in a digitised newspaper archive prove very little?",
          answer: "Text capture from old print is unreliable, especially on names, and coverage is patchy by title and year. A gap in digitisation looks identical to a gap in the news.",
        },
      ],
      body: `Governments publish enormous quantities of material, and a great deal of it is invisible to ordinary search because it lives inside portals, catalogues and file formats that a general index does not reach well.

## Where the material actually is

**Agency publication catalogues.** Reports, statistical series and annual publications, usually with their own search and their own numbering.

**Statistical agencies.** The tables behind the headline figure, which are what a researcher needs and what a news story never links.

**Regulatory dockets and registers.** Rulemaking records, comments, notices. Rich, structured, and almost never surfaced by a general search.

**Legislative records.** Bills, committee reports, hearing transcripts.

**Local government.** Minutes, budgets, permits, assessments. Frequently the least digitised and the most useful, and the subject of the civic-documentation course elsewhere in this catalog.

## The habit that finds them

Do not search for the fact. **Search for the body that would have produced a record of it**, then go to that body's own publications.

A researcher asking "how many of these were built" who searches that phrase will get news articles. A researcher who asks "which agency permits this, and what does it publish annually" gets the table.

## Two practical cautions

**A PDF is not necessarily searchable.** A scanned report may be an image with no text layer at all. Its content is invisible to every search, including the site's own.

**Data portals reward browsing.** Their search is usually weak and their category browse is usually good, because the catalogue was built by people who thought in categories.

:::reveal A researcher wants a count of something and searches that question directly. What will they get, and what is the better move? ||| News articles quoting a figure, usually without its source. The better move is to ask which body would have generated the record, then go to that body's own publications and find the underlying table.

## Sources

U.S. Government Publishing Office. (n.d.). *GovInfo*. https://www.govinfo.gov/

U.S. General Services Administration. (n.d.). *Data.gov*. https://data.gov/`,
    },
    {
      slug: "sc-iteration-and-vocabulary-harvest",
      title: "8 · Searching is iteration, not a single good query",
      section: "Part 2 · Difficult sources",
      recallContent: [
        {
          prompt: "Instead of searching for a fact directly, what should a researcher search for?",
          answer: "The body that would have produced a record of it, then that body's own publications, which is where the underlying table lives.",
        },
      ],
      body: `Beginners look for the right query. Professionals run a sequence in which each result improves the next one.

## The loop

1. **A rough query**, expecting little. You are fishing for vocabulary rather than for the answer.
2. **Harvest** from whatever comes back: subject headings, the exact terms of art, names of people and organisations, dates, and the citations in footnotes.
3. **Re-query** with what you harvested.
4. **Chase citations** in both directions: the sources a good work cites, and later works that cite it.
5. **Stop** when new searches return what you have already seen.

That last signal is the one people miss. When your results begin repeating, you have probably covered the accessible material with your current vocabulary, and further effort should go into a different vocabulary or a different collection rather than another rephrasing.

## Keep a search log

Not for tidiness. For three specific reasons:

- **You will otherwise repeat searches**, especially across days.
- **It is the negative result** from the earlier course in this track. "Not found" means nothing; "searched these five systems with these terms across these date ranges" is a deliverable.
- **It lets somebody else continue** without redoing your work, which is what this whole track is about.

A log line needs the system, the query, the limits, the date, and the result count. That is enough.

:::reveal What signal tells you that you have probably exhausted a line of searching, and what should you change at that point? ||| When new searches keep returning results you have already seen. At that point more rephrasing will not help, and the thing to change is the vocabulary or the collection rather than the query.

## Sources

Library of Congress. (n.d.). *Research guides: Search strategies*. https://guides.loc.gov/

National Archives. (n.d.). *Research our records*. https://www.archives.gov/research`,
    },
    {
      slug: "sc-check-difficult-sources",
      title: "9 · Knowledge check: difficult sources and iteration",
      section: "Part 2 · Difficult sources",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which technique best survives poor text capture in a digitised historical newspaper?",
            options: [
              "Proximity searching on distinctive common words rather than an exact personal name",
              "An exact phrase search in quotation marks to force the words to sit together",
              "Restricting the search to headlines, which are captured more reliably than body text",
              "Searching the publisher's name to locate every issue the collection holds",
            ],
            correctIndex: 0,
            explanation:
              "Proper nouns break worst because there is no dictionary to correct against, and column bleed destroys adjacency, which is what a phrase search requires. Distinctive ordinary words plus proximity is the robust combination.",
            sourceLessonSlug: "sc-newspapers-and-ocr",
          },
          {
            prompt: "A researcher needs a count and searches the question directly. What is the better move?",
            options: [
              "Identify the body that would have produced the record, then read its own publications",
              "Add a date range and a jurisdiction to the same query to narrow the results",
              "Search for a news article that cites a figure and follow its link to the source",
              "Look for an academic paper on the subject and use the figure in its literature review",
            ],
            correctIndex: 0,
            explanation:
              "Searching the question returns articles quoting figures, usually without a traceable source. Going to the producing body gets the underlying table, which is what can actually be cited.",
            sourceLessonSlug: "sc-government-and-data-portals",
          },
          {
            prompt: "Your searches start returning only results you have already seen. What does that signal, and what should change?",
            options: [
              "You have likely exhausted this vocabulary and collection, so change one of those rather than the query",
              "The database is caching your session, so the search should be repeated from a fresh browser",
              "Your query has become too broad, so additional AND terms should be introduced",
              "The subject is genuinely small, so the research question should be widened in scope",
            ],
            correctIndex: 0,
            explanation:
              "Repetition is the practical signal of coverage under your current terms. Further rephrasing inside the same vocabulary and collection buys almost nothing; a different vocabulary or a different holding is where the remaining material is.",
            sourceLessonSlug: "sc-iteration-and-vocabulary-harvest",
          },
          {
            prompt: "Why is a search log a deliverable rather than housekeeping?",
            options: [
              "It converts a fruitless search into a specific negative result somebody else can rely on",
              "It demonstrates to the client how many billable hours the search consumed",
              "It allows the same searches to be repeated identically to confirm the results",
              "It records which databases required a paid subscription during the project",
            ],
            correctIndex: 0,
            explanation:
              "Not found means nothing. Searched these systems with these terms across these ranges is a finding, and it stops the next person repeating the work, which is the whole premise of this track.",
            sourceLessonSlug: "sc-iteration-and-vocabulary-harvest",
          },
        ],
      },
    },
    {
      slug: "sc-capstone-documented-search",
      title: "10 · Capstone: a documented search",
      section: "Part 2 · Difficult sources",
      lessonType: "assignment",
      body: `Pick one specific, checkable question. Not a topic. Something with an answer, such as when a named building was built, whether a named person appears in a particular record set, or what a specific agency reported in a particular year.

Then search for it properly, and hand in the search rather than only the answer.

## What to submit

**1. The question**, written so someone else could tell whether it had been answered.

**2. Your search log.** Every attempt: the system, the query as typed, the limits applied, the date, and the number of results. Include the failures. **The failures are the most instructive part.**

**3. What you learned about the systems**, not the subject. What does each one index? What does it cover, in years and in scope? Where did that shape your approach?

**4. One vocabulary harvest.** Show a term, subject heading or name you did not start with, where you got it, and what it unlocked.

**5. The answer, or the honest negative.** If you found it, give it with its source. If you did not, write the negative result properly: where you looked, what those places cover, and where the material most plausibly still is.

**6. What you would do with four more hours**, and what you would expect it to cost or take.

## How this is assessed

Not on whether you found it. A well-documented failure is a full-credit answer, and it is worth more to a client than an unsourced success.

You are assessed on whether the log would let somebody else continue without redoing your work, whether section 3 shows you understood the systems rather than just used them, and whether the negative result in section 5 is specific enough to be relied on.

**Do not clean up the log.** A record that shows only your successful queries hides the reasoning, and the reasoning is what is being taught here.

## Sources

Library of Congress. (n.d.). *Research guides*. https://guides.loc.gov/

National Archives. (n.d.). *Research our records*. https://www.archives.gov/research`,
    },
  ],
};
