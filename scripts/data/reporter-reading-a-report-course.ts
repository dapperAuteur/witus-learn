import type { AuthoredCourse } from "./authored-course";

// REPORT-02 · Reading Somebody Else's Report (plans/68 section 3).
//
// The spine of the Reporter track. plans/68 is emphatic that the 2025 Indiana Girl Report should be
// the recurring teaching OBJECT rather than background reading, for one rare reason: on page 27 the
// report documents its own limitations in its own voice, under the heading "Addressing Limitations
// in Available Data." A reporter who can read that page correctly can read any report.
//
// Every figure, page number, and definition quoted here was read out of the PDF itself
// (plans/future-courses/reporter/Indiana-Girl-Report-2025.pdf), not from a description of it. Page
// numbers are the report's own printed page numbers.
//
// TWO DISCIPLINES plans/68 attaches to using this document, and they are followed literally:
//   1. The report is about GIRLS, INCLUDING MINORS. No invented composite subjects appear here, and
//      no illustrative quotation is put in a young person's mouth anywhere in this course.
//   2. Every figure carries its page and its year, because a 2025 report will age and this course
//      must not become the thing it teaches learners to catch.
//
// The report states its own reuse terms on page 3: it may be copied, distributed, or otherwise used
// provided the source is cited as Indiana Youth Institute (2025). That is the citation used
// throughout, and it is the licence this course teaches from.
//
// ONE HEDGE, one check. Lesson 6 observes that the executive summary's cyberbullying ratio does not
// follow from the chart on page 59, and says exactly that: the reporter's job is to locate the table
// that produces a sentence before repeating it. It does NOT claim the report is wrong. A source
// check (report-cyberbullying-ratio-source) is filed so the question can actually be settled.
export const REPORTER_READING_A_REPORT_COURSE: AuthoredCourse = {
  title: "Reporter 02: Reading Somebody Else's Report",
  description:
    "A beat reporter is handed reports constantly, and most of what goes wrong happens between the executive summary and the table underneath it. Worked end to end on one real 84-page document: who published it and what they do, an anatomy, a summary sentence chased back to its table, what a data definition changes, how to resolve an endnote, and a publisher that writes down its own limits. Sits directly on top of How to Read a Number.",
  lessons: [
    // ── Section 1 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "who-published-and-why",
      title: "1 · Who published it, and what they do",
      section: "Section 1 · What kind of document is this",
      body: `Before a single figure, establish what kind of organization made the document and what making it is for. It takes ten minutes and it determines how you read everything after.

**The document this course works from.** The *2025 Indiana Girl Report: A Profile of Indiana Girls*, 84 pages, produced by the Indiana Youth Institute with the Girl Scout Coalition of Indiana (Indiana Youth Institute, 2025). It is used here because it is real, current, and unusually honest about itself, not because Indiana is the subject. Everything in this course transfers to whatever lands on your beat.

**Three questions, in order.** Who published it. What that organization does the rest of the year. And what this document is FOR: an annual data compilation, a case for a policy, a fundraising instrument, a compliance filing, or some combination. None of those is disqualifying. All of them change what a sentence in the summary is doing.

**What the front matter tells you here.** The report says the Indiana Youth Institute has worked since 1988 to improve the lives of Indiana children by strengthening and connecting the people and organizations focused on kids, and that it has been Indiana's state partner in the Annie E. Casey Foundation KIDS COUNT network for over 30 years, producing the annual Indiana KIDS COUNT Data Book (p. 2). That is a data organization with a mission, which is the most common kind of publisher a beat reporter meets, and the two halves are both true at once.

**The reuse terms are a fact worth reading.** Page 3 states that the information may be copied, distributed, or otherwise used provided the source is cited as Indiana Youth Institute (2025), and prints the citation form. A document that tells you how to cite it is telling you it expects to be quoted, which is useful and is not the same as being uncontested.

**The stated purpose, in the publisher's words.** Page 3 says the report is an overview of the well-being of Indiana girls statewide, aiming to showcase the realities girls face and the variances across regions, created through the data expertise of IYI and the girl-centered expertise of the Coalition. That sentence is a design statement, and it predicts the structure you will meet in lesson 3.

**What this does NOT license.** Deciding in advance that a report is propaganda because an advocacy organization made it, or that it is neutral because a research organization did. Provenance tells you what to check first, not what the answer will be, which is the same discipline the catalog's course on reading a number applies to any statistic.

:::reveal What three questions do you ask about a report before reading a figure? ||| Who published it, what that organization does the rest of the year, and what this particular document is for: a data compilation, a policy case, a fundraising instrument, a compliance filing, or a combination.

:::reveal What does a document that prints its own citation form tell you? ||| That it expects to be quoted and has made reuse easy. It does not tell you the contents are uncontested, which is a separate question.

:::reveal Why is deciding a report is propaganda because an advocate published it a failure of method? ||| Because provenance tells you what to check first, not what you will find. The same rule applies in reverse to a research organization's output.

## Vocabulary
- **Publisher provenance**: who made a document, what they do the rest of the year, and what the document is for.
- **Data compilation**: a report that assembles figures from other collections rather than generating new ones.
- **Reuse terms**: the publisher's own statement of how the material may be copied and cited, printed here on page 3.
- **Design statement**: the publisher's account of what the report is meant to do, which predicts its structure.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.). Pages 2 and 3.`,
    },
    {
      slug: "secondary-not-primary",
      title: "2 · Secondary compilation, not primary research",
      section: "Section 1 · What kind of document is this",
      body: `The single most consequential fact about most reports a beat reporter is handed is that the publisher did not collect the data. Reports that say so plainly are doing you a favor, and this one does.

**What the methodology section says.** On page 82 the report states that the Indiana Youth Institute's expertise is collecting, analyzing, and reporting secondary research, and that IYI does not design or implement primary research. It describes the report as providing the most recent data and research from state partner agencies, peer-reviewed journals, national and state level surveys, and national entities such as the Centers for Disease Control and Prevention and the U.S. Census Bureau (Indiana Youth Institute, 2025, p. 82).

**Why that sentence changes your reporting.** Every figure in the document has an owner somewhere else. The attribution in your story is to that owner, with the report as where you found it. Writing that a report found something it compiled is an attribution error, and it is the error that turns one organization's summary into the apparent source of a national survey's number.

**The practical consequence: you can always go upstream.** If the number came from the National Survey of Children's Health, that survey publishes its own indicators, its own sample sizes, and its own confidence intervals, none of which fit in a compiled table. Going upstream is how you get the margin of error the compilation dropped, and it is frequently how you discover the figure is a year older than the report's cover date.

**What the compilation is genuinely good for.** It tells you what exists, in one place, with the sources named. For a reporter new to a subject it is the fastest available map of which agencies collect what. Treating it as a finding aid rather than as evidence is exactly the right use, and it is a very good one.

**The selection question, which is the honest criticism to make.** A compiler chooses which indicators to include. That choice is editorial, it is where a compilation's point of view actually lives, and it is a fair thing to ask about. The report says data are evaluated to ensure they are from a reliable source, recently available, consistent over time, easily understandable, and relevant (p. 82). Reliable, recent, consistent, understandable, and relevant are five criteria, and every one of them is a judgment.

**One useful disclosure in the same section.** The report notes that in certain circumstances studies older than 10 years were used, because of their standing in the field and to provide historical context (p. 82). That is the kind of sentence a reporter should look for and almost never finds.

:::reveal What does the report say on page 82 about its own research, and why does it matter to your attribution? ||| That IYI collects, analyzes, and reports secondary research and does not design or implement primary research. So the number belongs to its original owner, and the report is where you found it.

:::reveal What do you gain by going upstream to the original collection? ||| Sample sizes, confidence intervals, and the collection's own vintage, none of which fit in a compiled table. You often also discover the figure is older than the report's cover date.

:::reveal Where does a compilation's point of view actually live? ||| In which indicators were selected. The report's five stated criteria, reliable, recent, consistent, understandable, and relevant, are each a judgment.

## Vocabulary
- **Secondary research**: assembling and reporting data collected by others, as opposed to designing and running a collection.
- **Attribution to the owner**: crediting the original collection for a figure, with the compilation cited as where you found it.
- **Going upstream**: retrieving the original source of a compiled figure to get its sample, its uncertainty, and its vintage.
- **Selection**: the compiler's choice of which indicators appear, which is editorial and is the fair thing to question.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.). Page 82.`,
    },
    {
      slug: "report-anatomy",
      title: "3 · The anatomy: where the answers actually live",
      section: "Section 1 · What kind of document is this",
      body: `Reports are built to a pattern, and knowing the pattern means you stop reading a document front to back and start reading it in the order that answers questions.

**The order a reporter should use.** Table of contents. Methodology. Data definitions. Endnotes. Then the tables. Then, last, the executive summary. Reading the summary first is how a reporter ends up repeating a framing rather than checking it, and the summary is the easiest part to read once you already know what is underneath.

**Where those sections sit in the worked example.** The 2025 Indiana Girl Report's contents page (p. 4) puts the executive summary at 6, the coalition's calls to action at 8, the data section from 24, the IYI data domains at 26, the limitations statement at 27, demographics at 29, then four wellness domains, physical at 32, academic at 42, emotional at 52, and social at 64, followed by endnotes and citations at 75, data definitions and data sources at 78, and methodology and process at 82.

**Note what that layout does.** The three sections a reporter most needs, endnotes, definitions, and methodology, are the last three in the document, after 74 pages of findings. That is normal, it is not sinister, and it is why the reading order above is deliberate rather than fussy.

**Two organizing schemes running at once, which is worth spotting early.** The report uses the Girl Scout Coalition's four Dimensions of Wellness, physical, academic, emotional, and social, alongside IYI's four KIDS COUNT data domains, family and community, health, economic well-being, and education, and page 27 prints a legend showing how the two intersect (pp. 26, 27). When a document has two taxonomies, a figure can appear under different headings in different years, which is a real source of apparent trends that are actually reorganizations.

**The front matter carries a content warning**, stating that the report contains information, discussion, and data regarding self-harm, physical and sexual abuse, racial trauma, violence, death, and traumatic healthcare experiences (p. 3). Read that as a description of the subject matter you are about to report on, and treat it as a signal about the care the material needs rather than as boilerplate.

**Build a one-page map before you write.** For any report: where the definitions are, where the endnotes are, where the methodology is, and which table sits behind each claim you intend to use. That map is the artifact that makes the difference between quoting a report and reporting on one.

:::reveal In what order should a reporter read a data report, and why does the summary come last? ||| Contents, methodology, definitions, endnotes, then the tables, then the summary. Reading the summary first means repeating a framing instead of checking it.

:::reveal Where do the endnotes, definitions, and methodology sit in the worked example, and what should you conclude from that? ||| Pages 75, 78, and 82, after 74 pages of findings. That is normal layout rather than concealment, and it is why the reading order is deliberate.

:::reveal Why does a report running two taxonomies at once matter for trends? ||| A figure can appear under different headings in different years, which produces apparent changes that are reorganizations rather than movements in the data.

## Vocabulary
- **Reading order**: contents, methodology, definitions, endnotes, tables, summary, chosen so the summary is checked rather than absorbed.
- **Taxonomy**: the scheme a report groups indicators under, here the Coalition's four Dimensions of Wellness and IYI's four KIDS COUNT domains.
- **Content warning**: the publisher's own statement of the difficult material a document contains, here on page 3.
- **Report map**: a one-page note of where the definitions, endnotes, methodology, and each relevant table sit.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.). Pages 3, 4, 26, and 27.`,
    },
    {
      slug: "quiz-what-kind-of-document",
      title: "4 · Knowledge check: what kind of document is this",
      section: "Section 1 · What kind of document is this",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What three questions come before reading any figure in a report?",
            options: [
              "Who published it, what they do, what it is for",
              "How many pages, how many tables, and when it was released to the press",
              "Which agency funded it, which lobbyists cited it, and who benefits from it",
              "What the headline finding is, who disputes it, and who has covered it already",
            ],
            correctIndex: 0,
            explanation:
              "None of the possible answers to the third question is disqualifying, but each changes what a sentence in the summary is doing.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "Which document does this course work from?",
            options: [
              "The 2025 Indiana Girl Report",
              "The Annie E. Casey Foundation's national KIDS COUNT Data Book for 2025",
              "The National Survey of Children's Health indicator tables for 2023",
              "The Youth Risk Behavior Surveillance System's Indiana state report",
            ],
            correctIndex: 0,
            explanation:
              "84 pages, produced by the Indiana Youth Institute with the Girl Scout Coalition of Indiana. It is used because it is real, current, and unusually honest about itself.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "How long has the Indiana Youth Institute been the state's KIDS COUNT partner?",
            options: [
              "Over 30 years",
              "Since 2018, when the Girl Scout Coalition of Indiana was formed",
              "Since 2023, the first year of the girl-specific data series",
              "Under 10 years, which is why the historical series begins in 2015",
            ],
            correctIndex: 0,
            explanation:
              "Page 2 also says IYI has worked since 1988 to improve the lives of Indiana children, and that it produces the annual Indiana KIDS COUNT Data Book.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "What does the report's page 3 tell a reporter about reuse?",
            options: [
              "It may be copied and used if the source is cited",
              "It may be quoted only with the publisher's prior written permission",
              "It may be reproduced in full by news organizations but not excerpted",
              "It may not be redistributed, since the underlying data are licensed",
            ],
            correctIndex: 0,
            explanation:
              "The page also prints the citation form. A document that tells you how to cite it expects to be quoted, which is not the same as being uncontested.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "What does a report printing its own citation form tell you?",
            options: [
              "It expects to be quoted",
              "It has been peer reviewed by the organizations named inside it",
              "Its figures have been independently verified before publication",
              "It may not be summarized without reproducing the citation verbatim",
            ],
            correctIndex: 0,
            explanation:
              "It has made reuse easy. Whether the contents are uncontested is an entirely separate question.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "What error does provenance NOT license?",
            options: [
              "Deciding the conclusion before checking",
              "Reading the methodology section before the executive summary",
              "Attributing a compiled figure to its original collection",
              "Asking who funded a report when the funding is disclosed",
            ],
            correctIndex: 0,
            explanation:
              "Assuming an advocate's report is propaganda, or a research organization's is neutral. Provenance tells you what to check first, not what you will find.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "What kind of publisher does the lesson call the most common one a beat reporter meets?",
            options: [
              "A data organization with a mission",
              "A government agency publishing a statutory compliance report",
              "A commercial research firm selling analysis to subscribers",
              "An academic center reporting the results of its own trials",
            ],
            correctIndex: 0,
            explanation:
              "Both halves are true at once, and reading the document well means holding both rather than resolving it into one.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "What does page 3 state the report is for?",
            options: [
              "An overview of the well-being of Indiana girls statewide",
              "A ranking of Indiana counties by their outcomes for girls",
              "A funding proposal to expand youth programming statewide",
              "A compliance filing required of state KIDS COUNT partners",
            ],
            correctIndex: 0,
            explanation:
              "Showcasing the realities girls face and the variances across regions, created through IYI's data expertise and the Coalition's girl-centered expertise.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "What does the report say on page 82 about its own research?",
            options: [
              "It does not design or implement primary research",
              "It conducts original surveys of Indiana households each spring",
              "It replicates national findings using Indiana administrative records",
              "It commissions primary research from university partners annually",
            ],
            correctIndex: 0,
            explanation:
              "IYI's stated expertise is collecting, analyzing, and reporting secondary research, drawn from state agencies, journals, surveys, and national entities.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "What follows for attribution when a report is a secondary compilation?",
            options: [
              "The figure belongs to its original collection",
              "The compilation becomes the citable source once it has been published",
              "Both the compiler and the original owner must be named in every sentence",
              "The figure may be used without attribution because it is already public",
            ],
            correctIndex: 0,
            explanation:
              "With the report cited as where you found it. Writing that a report found something it compiled is the error that turns a summary into the apparent source of a national survey.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "What do you gain by going upstream to an original collection?",
            options: [
              "Sample sizes, confidence intervals, and the true vintage",
              "Permission to reproduce the compiled table in your own reporting",
              "A named contact at the agency who will comment on the finding",
              "A guarantee that the compiled figure was transcribed correctly",
            ],
            correctIndex: 0,
            explanation:
              "None of which fit into a compiled table, and you frequently discover the figure is a year older than the report's cover date.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "What is a compilation genuinely good for?",
            options: [
              "A finding aid",
              "Establishing the statistical significance of a difference between groups",
              "Settling a dispute about which of two agencies holds better data",
              "Replacing the original sources, which are usually harder to obtain",
            ],
            correctIndex: 0,
            explanation:
              "It tells you what exists, in one place, with the sources named. For a reporter new to a subject it is the fastest map of which agencies collect what.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "Where does a compilation's point of view live?",
            options: [
              "In which indicators were selected",
              "In the wording of the individual table headings and chart labels",
              "In the order the four wellness domains appear in the document",
              "In the endnote format, which controls how easily figures can be checked",
            ],
            correctIndex: 0,
            explanation:
              "That choice is editorial, and it is the fair thing to ask a compiler about.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "Which five criteria does the report say it applies to data it includes?",
            options: [
              "Reliable, recent, consistent, understandable, relevant",
              "Peer reviewed, statewide, disaggregated, current, and free to reuse",
              "Federal, state, county, school district, and individual level",
              "Sampled, weighted, adjusted, benchmarked, and independently audited",
            ],
            correctIndex: 0,
            explanation:
              "From page 82. Every one of the five is a judgment, which is the honest observation to make about a compilation.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "What unusual disclosure does the methodology section make about older studies?",
            options: [
              "Studies over 10 years old were used in certain circumstances",
              "Studies published before 2020 were excluded from every domain",
              "Only peer-reviewed studies from the last five years were considered",
              "Older studies were used only where a newer replication confirmed them",
            ],
            correctIndex: 0,
            explanation:
              "Because of their standing in the field and to provide historical context. It is the kind of sentence a reporter should look for and rarely finds.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "In what order should a reporter read a data report?",
            options: [
              "Contents, methodology, definitions, endnotes, tables, summary",
              "Summary, tables, endnotes, definitions, methodology, contents",
              "Summary first, then whichever domain the story concerns",
              "Endnotes first, then the tables they support, then nothing else",
            ],
            correctIndex: 0,
            explanation:
              "Reading the summary first is how a reporter ends up repeating a framing rather than checking it.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "On which page does the worked example's limitations statement sit?",
            options: [
              "27",
              "82, inside the methodology and process section",
              "3, in the front matter that explains how to read the report",
              "75, at the head of the endnotes and citations",
            ],
            correctIndex: 0,
            explanation:
              "Headed Addressing Limitations in Available Data, and the reason plans/68 made this report the track's teaching object.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "Where do the endnotes, definitions, and methodology sit in the worked example?",
            options: [
              "Pages 75, 78, and 82",
              "Pages 3, 4, and 6, in the front matter before the findings",
              "Pages 26, 27, and 29, at the start of the data section",
              "Distributed through the document at the end of each wellness domain",
            ],
            correctIndex: 0,
            explanation:
              "After 74 pages of findings, which is normal layout rather than concealment, and exactly why the reading order is deliberate.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "Which four Dimensions of Wellness does the Coalition use?",
            options: [
              "Physical, academic, emotional, social",
              "Family and community, health, economic well-being, education",
              "Safety, belonging, achievement, and independence",
              "Mental, physical, financial, and civic",
            ],
            correctIndex: 0,
            explanation:
              "Family and community, health, economic well-being, and education are IYI's four KIDS COUNT data domains, which run alongside them. Page 27 prints a legend showing how the two intersect.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "Which four data domains does IYI track under KIDS COUNT?",
            options: [
              "Family and community, health, economic well-being, education",
              "Physical, academic, emotional, and social wellness",
              "Demographics, physical, emotional, and social",
              "Poverty, housing, schooling, and health care access",
            ],
            correctIndex: 0,
            explanation:
              "Physical, academic, emotional, and social are the Coalition's Dimensions of Wellness. Both taxonomies run at once through the document.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "Why does a report running two taxonomies matter for trend reporting?",
            options: [
              "A figure can move between headings between years",
              "It doubles the number of tables a reporter has to check for each claim",
              "It means the same figure is published twice with different rounding",
              "It prevents the publisher from disaggregating data by county",
            ],
            correctIndex: 0,
            explanation:
              "Which produces apparent trends that are reorganizations rather than changes in the underlying data.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "What does the report's front matter warn readers it contains?",
            options: [
              "Material on self-harm, abuse, racial trauma, violence, and death",
              "Estimates that have not been verified against the original collections",
              "Figures that may not be reproduced without the publisher's consent",
              "County comparisons that are not statistically significant",
            ],
            correctIndex: 0,
            explanation:
              "Also traumatic healthcare experiences. Read it as a signal about the care the material needs rather than as boilerplate.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "What is a report map?",
            options: [
              "A one-page note of where definitions, endnotes, methodology, and each table sit",
              "The contents page, annotated with the reporter's own page references",
              "A diagram of how the publisher's taxonomies intersect with one another",
              "A list of every figure in the document, ranked by newsworthiness",
            ],
            correctIndex: 0,
            explanation:
              "It is the artifact that makes the difference between quoting a report and reporting on one.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "On which page does the executive summary of the worked example begin?",
            options: [
              "6",
              "4, immediately after the front matter and the reuse terms",
              "8, following the coalition overview and its calls to action",
              "24, at the start of the data section on well-being",
            ],
            correctIndex: 0,
            explanation:
              "The contents page at 4 gives the layout: summary at 6, calls to action at 8, data section from 24, limitations at 27.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "Which four wellness domains carry the data section, and in what order?",
            options: [
              "Physical 32, academic 42, emotional 52, social 64",
              "Emotional 32, social 42, physical 52, academic 64",
              "Social 26, physical 29, academic 42, emotional 75",
              "Academic 24, emotional 27, physical 52, social 78",
            ],
            correctIndex: 0,
            explanation:
              "Preceded by the IYI data domains at 26, the limitations statement at 27, and demographics at 29.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "What is secondary research?",
            options: [
              "Assembling and reporting data collected by others",
              "Research conducted after a pilot study has established feasibility",
              "Analysis performed on a data set the researcher collected personally",
              "Any research that has not been published in a peer-reviewed journal",
            ],
            correctIndex: 0,
            explanation:
              "As opposed to designing and running a collection, which is what the report says IYI does not do.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "Which national entities does the report name among its sources?",
            options: [
              "The CDC and the U.S. Census Bureau",
              "The National Institutes of Health and the Department of Labor",
              "The Government Accountability Office and the Congressional Budget Office",
              "The Federal Reserve and the Bureau of Economic Analysis",
            ],
            correctIndex: 0,
            explanation:
              "Alongside state partner agencies, peer-reviewed journals, and national and state level surveys, per the methodology section on page 82.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "What is the attribution error the lesson names specifically?",
            options: [
              "Saying a report found what it compiled",
              "Citing the report without giving the page number the figure appears on",
              "Naming the original collection without saying where you found the figure",
              "Quoting a summary sentence without identifying the executive summary",
            ],
            correctIndex: 0,
            explanation:
              "It turns one organization's summary into the apparent source of a national survey's number.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "How long does the lesson say establishing publisher provenance takes?",
            options: [
              "About ten minutes",
              "An afternoon, since funding disclosures usually require a records request",
              "A full day, because the organization's tax filings have to be retrieved",
              "As long as reading the report itself, which is why most reporters skip it",
            ],
            correctIndex: 0,
            explanation:
              "And it determines how you read everything after, which is a very good return on ten minutes.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "What does the lesson say about reading a report front to back?",
            options: [
              "Read it in the order that answers questions instead",
              "It is the only way to avoid missing a caveat placed inside a domain section",
              "It is correct for a first pass and wrong for every pass afterward",
              "It works for compilations and fails only for primary research reports",
            ],
            correctIndex: 0,
            explanation:
              "Reports are built to a pattern, and knowing the pattern is what lets you go straight to where answers live.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "What year and edition is the worked example?",
            options: [
              "2025, first edition",
              "2024, revised second edition",
              "2023, the first year girl-specific data were compiled",
              "2025, third edition, following annual updates since 2023",
            ],
            correctIndex: 0,
            explanation:
              "The citation form printed on page 3 gives Indiana Youth Institute (2025), 2025 Indiana Girl Report: A Profile of Indiana Girls, first edition.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "Who produced the worked example alongside the Indiana Youth Institute?",
            options: [
              "The Girl Scout Coalition of Indiana",
              "The Indiana Department of Education's office of research",
              "The Annie E. Casey Foundation's national KIDS COUNT staff",
              "The Indiana Women's Foundation and the state health department",
            ],
            correctIndex: 0,
            explanation:
              "Page 3 describes the pairing as IYI's data expertise with the Coalition's girl-centered expertise.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "What does the lesson say a data request endnote implies about the compiler?",
            options: [
              "They obtained a custom extract from an agency",
              "They were unable to locate a published source for the figure",
              "They ran their own survey and are describing it obliquely",
              "They purchased the data from a commercial provider",
            ],
            correctIndex: 0,
            explanation:
              "Which is consistent with the methodology's account of drawing on state partner agencies rather than running primary collections.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "How many pages is the worked example?",
            options: [
              "84",
              "27, of which the last page is the limitations statement",
              "About 200, which is why the contents page is load-bearing",
              "Roughly 40, split evenly between narrative and tables",
            ],
            correctIndex: 0,
            explanation:
              "With the endnotes at 75, definitions at 78, and methodology at 82, which is where a reporter starts.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "What does the lesson mean by a design statement?",
            options: [
              "The publisher's account of what the report is meant to do",
              "The visual style guide governing how charts are drawn",
              "The statistical model used to weight the underlying estimates",
              "The list of criteria applied when selecting which indicators to include",
            ],
            correctIndex: 0,
            explanation:
              "It predicts the structure you will meet, which is why it is read before the findings rather than after.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "Why is knowing what a report is FOR not the same as dismissing it?",
            options: [
              "None of the purposes is disqualifying",
              "Because a stated purpose is legally binding on the publisher",
              "Because purpose affects only the summary, never the data section",
              "Because compilations have no purpose beyond assembling figures",
            ],
            correctIndex: 0,
            explanation:
              "A data compilation, a policy case, a fundraising instrument, and a compliance filing all produce usable documents. Each changes what a summary sentence is doing.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "What is the honest criticism to make of any compilation?",
            options: [
              "Ask about the selection of indicators",
              "Point out that the publisher did not verify the underlying figures",
              "Note that compiled figures are always older than the cover date",
              "Argue that a mission-driven organization cannot report neutrally",
            ],
            correctIndex: 0,
            explanation:
              "Selection is editorial and it is where a compilation's point of view lives, which makes it a fair and answerable question.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "Where does the report print the legend showing how its two taxonomies intersect?",
            options: [
              "Page 27",
              "Page 4, alongside the table of contents",
              "Page 26, in the section about the IYI data domains",
              "Page 11, in the section about the Coalition dimensions",
            ],
            correctIndex: 0,
            explanation:
              "The same page as the limitations statement, which is why page 27 repays a careful read for two separate reasons.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "What does the lesson say about a report with no methodology section?",
            options: [
              "Its absence is a fact about the report",
              "It should not be cited under any circumstances",
              "It is presumed to follow the standards of its sector",
              "It can be reconstructed from the endnotes with enough work",
            ],
            correctIndex: 0,
            explanation:
              "The reading order starts with methodology precisely so that its absence is noticed early rather than after the story is drafted.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "Which page carries the report's demographic figures?",
            options: [
              "29",
              "26, with the IYI data domains",
              "32, at the start of physical wellness",
              "78, with the data definitions",
            ],
            correctIndex: 0,
            explanation:
              "Between the limitations statement at 27 and physical wellness at 32, which is where the denominator for the whole document lives.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "What does the course say transfers from this document to any other?",
            options: [
              "Everything in the method",
              "The four wellness domains, which most youth reports now use",
              "The specific page numbers, which are standard in compiled reports",
              "The Indiana figures, which are broadly representative nationally",
            ],
            correctIndex: 0,
            explanation:
              "It is used because it is real, current, and unusually honest about itself, not because Indiana is the subject.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "Which of these is the correct attribution for a figure the report compiled from a national survey?",
            options: [
              "The survey, with the report as where you found it",
              "The report, since it published the figure in this form",
              "Both, with the report named first as the immediate source",
              "Neither, since compiled figures are public domain",
            ],
            correctIndex: 0,
            explanation:
              "Every figure in a secondary compilation has an owner somewhere else, which page 82 states plainly.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "What does the lesson call the fastest available map of which agencies collect what?",
            options: [
              "A compilation with its sources named",
              "A state agency's published records retention schedule",
              "The endnotes of an academic literature review",
              "A federal open data portal's indicator catalog",
            ],
            correctIndex: 0,
            explanation:
              "Which is a very good use of the document, and a different use from treating it as evidence.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "What should a reporter do with the content warning on page 3?",
            options: [
              "Read it as a description of the subject matter",
              "Reproduce it verbatim at the head of any story quoting the report",
              "Treat it as a legal disclaimer that limits reuse of the material",
              "Ignore it, since it addresses general readers rather than journalists",
            ],
            correctIndex: 0,
            explanation:
              "It is a signal about the care the material needs, which is the same discipline this track applies to the whole document.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "Why does the lesson read the executive summary last?",
            options: [
              "It is easiest to check once you know what is underneath",
              "It is written by a different author than the data section",
              "It is the shortest section and therefore the least informative",
              "It is usually revised after publication and is unstable",
            ],
            correctIndex: 0,
            explanation:
              "Reading it first is how a reporter ends up repeating a framing rather than checking it.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "What is the practical test of whether you read a report or quoted it?",
            options: [
              "Whether you can name the table behind each claim",
              "Whether you read every page of the document from cover to cover",
              "Whether you contacted the publisher before publishing your story",
              "Whether your story is longer than the executive summary",
            ],
            correctIndex: 0,
            explanation:
              "That is what the one-page report map records, and it is what separates quoting a report from reporting on one.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "What does going upstream frequently reveal about a compiled figure?",
            options: [
              "It is older than the report's cover date",
              "It was transcribed incorrectly into the compiled table",
              "It has been superseded by a figure the publisher chose not to use",
              "It cannot be reproduced without the original collection's permission",
            ],
            correctIndex: 0,
            explanation:
              "Along with recovering the sample size and the confidence interval that a compiled table has no room for.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "Which is NOT one of the report's own five data-selection criteria?",
            options: [
              "Independently audited",
              "Consistent over time, so trends can be shown",
              "Easily understandable to a general reader",
              "Recently available, rather than historical",
            ],
            correctIndex: 0,
            explanation:
              "The five given on page 82 are reliable, recently available, consistent over time, easily understandable, and relevant.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "What is the first thing on the reporter's reading order?",
            options: [
              "The table of contents",
              "The methodology, since it governs everything else in the document",
              "The endnotes, which name every source the report relies on",
              "The limitations statement, which sets the ceiling on every claim",
            ],
            correctIndex: 0,
            explanation:
              "It tells you where the methodology, the definitions, and the endnotes are, which are the next three stops.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "What is the practical function of the report's data domains page?",
            options: [
              "It names the four categories every indicator is filed under",
              "It lists the agencies that supplied each figure in the document",
              "It records which indicators changed definition since the prior edition",
              "It provides the denominator for each of the four wellness domains",
            ],
            correctIndex: 0,
            explanation:
              "Family and community, health, economic well-being, and education, sourced to the Annie E. Casey Foundation Data Center on page 26.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "Which two things does the lesson say are both true of a mission-driven data organization?",
            options: [
              "It has a mission and it produces data",
              "It is funded publicly and it is accountable to a regulator",
              "It is independent of government and it is peer reviewed",
              "It collects primary data and it publishes secondary analysis",
            ],
            correctIndex: 0,
            explanation:
              "Holding both is the skill. Resolving the publisher into either a neutral source or an advocate is where reporters go wrong in both directions.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "What does the lesson say about the placement of endnotes at the back of a report?",
            options: [
              "It is normal layout, not concealment",
              "It is a sign the publisher expects the document to go unchecked",
              "It is required by the citation standard compilations follow",
              "It indicates the endnotes were added after the findings were written",
            ],
            correctIndex: 0,
            explanation:
              "And it is exactly why the reading order is deliberate rather than fussy.",
            sourceLessonSlug: "report-anatomy",
          },
        ],
      },
    },
    // ── Section 2 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "summary-is-a-claim",
      title: "5 · An executive summary is a claim, not a finding",
      section: "Section 2 · The summary against the tables",
      body: `An executive summary is written last, by someone deciding what the document should be understood to say. That makes every sentence in it a claim with a table behind it, and your job is to find the table.

**What a summary does, structurally.** It compresses, it selects, and it converts figures into ratios and comparisons because those travel. Compression is not dishonesty. It is a different genre from the data section, and reporting from it without going underneath is the most common way a beat reporter publishes something they cannot defend.

**The worked example's summary.** Page 7 of the 2025 Indiana Girl Report carries the year's framing and a short list of bullets. It states that the report explores how friendships, digital life, and social environments shaped girls' sense of belonging, confidence, and overall mental health, and that the work rested on 91 listening sessions with girls plus feedback from 130 adults across the state, paired with statewide data (Indiana Youth Institute, 2025, p. 7).

**Two of its bullets, to work with.** That girls experience bullying at twice the rate of boys and cyberbullying at three times the rate. And that 16 percent of Indiana children live in poverty (p. 7). Both are the kind of sentence that gets quoted verbatim in a hundred stories, and both are checkable against the document that contains them.

**The rule this course runs on.** Do not repeat a summary sentence until you have located the table it comes from and can name the source, the year, the population, and the denominator. If you cannot find the table, that is not a reason to skip the check. It is the finding, and the next move is to ask the publisher which table produced the sentence.

**Why asking is normal rather than adversarial.** A compilation has an author who knows exactly where each figure came from, and reports get sentences from sources not reproduced in the layout all the time. An email asking which table supports a summary line is a routine research question, and the answer is usually immediate. What you must not do is publish the sentence while assuming the answer.

**And write down what you checked.** For each figure you intend to use: page, source, year, population, denominator, and whether you saw the underlying table or only the summary. Six fields, and they are what let you defend a paragraph a year later.

:::reveal Why is an executive summary a different genre from the data section? ||| It is written last, by someone deciding what the document should be understood to say, and it converts figures into ratios and comparisons because those travel. Compression is not dishonesty, but it is not evidence either.

:::reveal What is the rule about repeating a summary sentence? ||| Do not repeat it until you have located the table behind it and can name the source, the year, the population, and the denominator.

:::reveal What are the six fields to record for every figure you intend to publish? ||| Page, source, year, population, denominator, and whether you saw the underlying table or only the summary.

## Vocabulary
- **Executive summary**: the compressed, selected account of a report's findings, written last and framed for an audience.
- **Summary claim**: a sentence in a summary, treated as an assertion whose supporting table has to be located.
- **Six fields**: page, source, year, population, denominator, and whether the underlying table was seen.
- **Ask the publisher**: the routine step of emailing a compiler to ask which table produced a summary sentence.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.). Page 7.`,
    },
    {
      slug: "locating-the-table",
      title: "6 · Chasing one sentence to its table",
      section: "Section 2 · The summary against the tables",
      body: `Here is the method applied to a single sentence, done in full, because the method is only convincing when you watch it run.

**The sentence.** Page 7 states that girls experience bullying at twice the rate of boys and cyberbullying at three times the rate (Indiana Youth Institute, 2025, p. 7).

**Step one: find the section.** The contents page puts bullying under Emotional Wellness, and page 53 lists Bullying as one of that domain's topics. The narrative sits on page 58 and the charts on page 59.

**Step two: read the charts, not the prose.** Page 59 carries two charts and one bar chart of reported incidents. One is headed as female children bullied within the past 12 months, ages 6 to 17, sourced to the National Survey of Children's Health. The other is headed as the percentage of high school students who were electronically bullied from 2011 to 2023, sourced to the Youth Risk Behavior Survey, and it plots both sexes: for females 25.5 percent in 2011, 20.6 in 2015, 22.1 in 2021, and 25.3 in 2023, and for males 18.7, 15.7, 15.2, and 20.7 across the same years.

**Step three: do the arithmetic the summary implies.** In 2023 the electronic-bullying figures are 25.3 percent of female students against 20.7 percent of male students. That is a ratio of about 1.2, and it is a real and reportable gap. It is not three times.

**Step four, and this is the part that separates reporting from gotcha.** The correct conclusion is NOT that the report is wrong. It is that the summary's ratio does not follow from the chart on page 59, so it comes from somewhere else: another source, a different measure of cyberbullying, or a different population. The reporter's next action is an email to the publisher asking which table supports the sentence. Until that answer arrives, you may report the page 59 figures, with their source and year, and you may not report the three times.

**What you would have published without the check.** A sentence saying Indiana girls face cyberbullying at three times the rate of boys, attributed to a report, with no idea what population, measure, or year it describes. It might be right. You would not know, and neither would your reader.

**Why this generalizes.** Every summary in every report contains at least one sentence whose table you cannot immediately find. The discipline is not suspicion. It is that a number you cannot trace is a number you cannot defend, and the traceable version is nearly always available and nearly always specific enough to be better journalism.

:::reveal What do the page 59 electronic-bullying figures show for 2023, and what ratio do they produce? ||| 25.3 percent of female high school students against 20.7 percent of male students, from the Youth Risk Behavior Survey. That is roughly 1.2 times, a real gap and not three times.

:::reveal What is the correct conclusion when a summary ratio does not follow from the table you found? ||| Not that the report is wrong. That the sentence comes from somewhere else, so you ask the publisher which table supports it, and until then you report only the figures you can trace.

:::reveal What may you publish while waiting for the publisher's answer? ||| The page 59 figures with their source and their year. Not the summary ratio, because you cannot yet say what population or measure it describes.

## Vocabulary
- **Tracing**: following a summary sentence to the specific table, source, year, and population that produce it.
- **Youth Risk Behavior Survey**: the CDC-associated survey that supplies the electronic-bullying series cited on page 59.
- **National Survey of Children's Health**: the national survey supplying the other bullying measure on the same page.
- **Untraceable figure**: a number whose underlying table you cannot locate, which is reportable only once the publisher identifies it.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.). Pages 7, 53, 58, and 59.`,
    },
    {
      slug: "denominators-and-direction",
      title: "7 · Denominators, and which way is good",
      section: "Section 2 · The summary against the tables",
      body: `Two errors account for most of the damage a reporter does with a report's numbers. Using a rate without its denominator, and assuming that a lower number is a better one.

**Get the denominator, and get it from the report.** The 2025 Indiana Girl Report gives it plainly: in 2023 Indiana had 777,308 females and 818,763 males under 18 years, 48.7 percent and 51.3 percent of the population under 18, sourced to the U.S. Census American Community Survey five-year estimate, Table B01001 (Indiana Youth Institute, 2025, p. 29). Any statewide count in the document is a share of that, and a percentage without it is a floating number.

**Note what the citation gives you.** A named table, B01001, from a named product, the ACS five-year estimate. That is enough to retrieve the original yourself, check the vintage, and get the margin of error, which a five-year estimate always has and which almost never survives into a compiled figure.

**Now the direction problem, worked on a real pair of figures.** The report states that in 2023, 11.2 percent of female children aged 3 to 17 in Indiana received treatment or counseling from a mental health professional, a rate lower than their male peers at 11.9 percent and lower than the national average of 12.8 percent (p. 60). A lower share receiving treatment is not obviously good news or bad news. It is consistent with less need, and it is consistent with less access, and the number alone cannot tell you which.

**The report supplies the disambiguating figure on the same page.** More than half of caregivers with female children aged 3 to 17 in Indiana, 56.1 percent, reported difficulty finding the mental health treatment or counseling their child needed in 2023, higher than the national average of 49.9 percent and higher than the rate for male children of 54.9 percent (p. 60). Read together, a lower treatment rate alongside a higher difficulty rate points toward access rather than need, and neither figure alone would have supported that.

**The habit this produces.** For every rate, ask what the denominator is, what would make the number go up, and whether up is good. Then look for the second figure that distinguishes the explanations. Reports very often contain it, on the same page, and summaries very often use only one of the two.

**One more trap the same document names.** Its own reminders page says county rankings allow comparisons between counties but do not necessarily mean a county is doing well, and that a change in a ranking may be due to how data changed in other counties (p. 83). A rank is a relative position, and reporting a county's improved rank as improved conditions is a mistake the publisher explicitly warned you about.

:::reveal What denominator does page 29 supply, and what makes its citation useful? ||| 777,308 females under 18 in Indiana in 2023, 48.7 percent of the under-18 population, from the ACS five-year estimate Table B01001. The named table lets you retrieve the original and get the margin of error.

:::reveal Why is a lower share of girls receiving mental health treatment not automatically good news? ||| It is equally consistent with less need and with less access. The figure alone cannot distinguish them.

:::reveal Which figure on the same page distinguishes them, and which way does it point? ||| 56.1 percent of caregivers reported difficulty finding needed treatment in 2023, above the national 49.9 percent and above the 54.9 percent for male children. Lower treatment with higher difficulty points toward access.

## Vocabulary
- **Denominator**: the population a rate is calculated against, without which a percentage cannot be interpreted.
- **Table B01001**: the American Community Survey table the report cites for Indiana's under-18 population by sex.
- **Direction problem**: assuming a lower or higher figure is better without asking what would move it.
- **Disambiguating figure**: a second number that separates two explanations of the first, often printed on the same page.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.). Pages 29, 60, and 83.`,
    },
    {
      slug: "quiz-summary-against-tables",
      title: "8 · Knowledge check: the summary against the tables",
      section: "Section 2 · The summary against the tables",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "When is an executive summary written, and by whom?",
            options: [
              "Last, by someone deciding what the document should be understood to say",
              "First, as the outline the rest of the report is then built against",
              "Alongside each domain section, by the analyst who compiled that domain",
              "After publication, by the communications staff preparing the press release",
            ],
            correctIndex: 0,
            explanation:
              "Which is what makes every sentence in it a claim with a table behind it, rather than a finding in its own right.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "What does a summary do structurally?",
            options: [
              "Compresses, selects, and converts figures into ratios",
              "Reproduces the most significant tables in a smaller format",
              "States the methodology so a reader can judge the findings quickly",
              "Lists every indicator in the document with its source and year",
            ],
            correctIndex: 0,
            explanation:
              "Because ratios and comparisons travel. Compression is not dishonesty; it is a different genre from the data section.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "How much qualitative work does page 7 report?",
            options: [
              "91 listening sessions and feedback from 130 adults",
              "A statewide survey of roughly 1,500 girls aged 6 to 17",
              "Twelve focus groups, one in each Girl Scout council service area",
              "Interviews with 130 girls and 91 youth-serving professionals",
            ],
            correctIndex: 0,
            explanation:
              "Paired with statewide data. The report's framing that year asked what role social connection plays in the lives of Indiana girls.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "Which figure does page 7 give for Indiana children living in poverty?",
            options: [
              "16 percent",
              "24 percent, which the summary describes as nearly one in four",
              "48.7 percent, matching the share of the youth population that is female",
              "56.1 percent, matching the caregiver difficulty figure elsewhere in the report",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the summary bullets, and like every other it should be traced to its table before it is repeated.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "What is the rule about repeating a summary sentence?",
            options: [
              "Locate the table first",
              "Attribute it to the report and move on, since the publisher stands behind it",
              "Paraphrase rather than quote, so the ratio is not reproduced exactly",
              "Wait for a second outlet to publish the same figure independently",
            ],
            correctIndex: 0,
            explanation:
              "And be able to name the source, the year, the population, and the denominator before it goes into your story.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "What do you do when you cannot find the table behind a summary sentence?",
            options: [
              "Treat that as the finding and ask the publisher",
              "Publish the sentence with the report cited as the source",
              "Drop the subject, since an untraceable figure cannot be reported at all",
              "Substitute a similar figure from a national source in its place",
            ],
            correctIndex: 0,
            explanation:
              "A compilation's author knows exactly where each figure came from, and an email asking which table supports a line is a routine research question.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "Why is asking a publisher which table supports a sentence not adversarial?",
            options: [
              "Reports routinely cite sources not reproduced in the layout",
              "Because publishers are legally required to answer questions about their data",
              "Because the answer determines whether the reporter may cite the document at all",
              "Because the publisher must correct the summary if it cannot answer",
            ],
            correctIndex: 0,
            explanation:
              "The answer is usually immediate. What you must not do is publish the sentence while assuming what the answer would have been.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "What are the six fields to record for every figure you intend to publish?",
            options: [
              "Page, source, year, population, denominator, whether you saw the table",
              "Publisher, author, title, edition, page, and date of access",
              "Indicator, domain, dimension, county, sex, and age range",
              "Sample size, margin of error, weighting, mode, response rate, and vintage",
            ],
            correctIndex: 0,
            explanation:
              "Six fields, and they are what let you defend a paragraph a year after it published.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "Which sentence does lesson 6 chase to its table?",
            options: [
              "That girls face bullying at twice the rate and cyberbullying at three times",
              "That 16 percent of Indiana children live in poverty",
              "That nearly one in four girls struggles to make or maintain friendships",
              "That 94.6 percent of female children had an adult mentor in 2023",
            ],
            correctIndex: 0,
            explanation:
              "It appears in the summary bullets on page 7, and it is the kind of sentence that gets quoted verbatim in a hundred stories.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "Under which wellness domain does the report file bullying?",
            options: [
              "Emotional",
              "Social, alongside neighborhood safety and support systems",
              "Physical, alongside health insurance and provider ratios",
              "Academic, since the incidents are reported by schools",
            ],
            correctIndex: 0,
            explanation:
              "Page 53 lists it among that domain's topics, with the narrative on 58 and the charts on 59.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "Which pages carry the bullying narrative and its charts?",
            options: [
              "58 and 59",
              "52 and 53, at the opening of the emotional wellness domain",
              "60 and 61, alongside the mental health and suicide figures",
              "75 and 76, where the supporting endnotes are listed",
            ],
            correctIndex: 0,
            explanation:
              "Reading the charts rather than the surrounding prose is what the tracing step actually requires.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "Which survey supplies the electronic-bullying series on page 59?",
            options: [
              "The Youth Risk Behavior Survey",
              "The National Survey of Children's Health, which supplies the other chart",
              "The Indiana Youth Survey, run annually by a state university",
              "The American Community Survey, which supplies the demographics",
            ],
            correctIndex: 0,
            explanation:
              "The chart is headed as the percentage of high school students who were electronically bullied from 2011 to 2023.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What were the 2023 electronic-bullying figures on page 59?",
            options: [
              "25.3 percent of female and 20.7 percent of male students",
              "43.2 percent of female and 25.5 percent of male students",
              "22.1 percent of female and 15.2 percent of male students",
              "25.5 percent of female and 18.7 percent of male students",
            ],
            correctIndex: 0,
            explanation:
              "The 2011 figures were 25.5 and 18.7, and the 2021 figures 22.1 and 15.2, so 25.5 against 18.7 is the series start rather than its end.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What ratio do the 2023 electronic-bullying figures produce?",
            options: [
              "About 1.2",
              "About 3.0, matching the summary's cyberbullying claim exactly",
              "About 2.0, matching the summary's general bullying claim",
              "About 0.8, meaning male students reported a higher rate",
            ],
            correctIndex: 0,
            explanation:
              "25.3 against 20.7 is a real and reportable gap. It is not three times, which is what the tracing step exists to establish.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What is the correct conclusion when a summary ratio does not follow from the table you found?",
            options: [
              "The sentence comes from somewhere else",
              "The report contains an error and the story should say so",
              "The chart was mislabeled and should be disregarded entirely",
              "The summary is a rounding of the same figures and may be used",
            ],
            correctIndex: 0,
            explanation:
              "Another source, a different measure, or a different population. The next action is an email to the publisher, not an accusation.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What may you publish while waiting for the publisher's answer?",
            options: [
              "The page 59 figures with their source and year",
              "The summary ratio, attributed to the report rather than to a table",
              "Nothing about bullying, since the discrepancy taints the whole section",
              "Both figures, with a note that they appear to conflict",
            ],
            correctIndex: 0,
            explanation:
              "You may not report the three times, because you cannot yet say what population, measure, or year it describes.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What would a reporter have published without the tracing step?",
            options: [
              "A ratio whose population, measure, and year they could not name",
              "A figure with a margin of error they had not checked",
              "A county comparison that the publisher had warned against",
              "A qualitative theme presented as a statewide share",
            ],
            correctIndex: 0,
            explanation:
              "It might be right. The reporter would not know, and neither would the reader.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "Why does the tracing method generalize beyond this document?",
            options: [
              "Every summary has a sentence whose table is not immediately findable",
              "Because most reports contain at least one deliberate exaggeration",
              "Because compiled reports are less reliable than primary research",
              "Because publishers rarely respond to questions about their figures",
            ],
            correctIndex: 0,
            explanation:
              "The discipline is not suspicion. It is that a number you cannot trace is a number you cannot defend.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What separates the tracing method from a gotcha?",
            options: [
              "You ask the publisher rather than declare an error",
              "You publish the discrepancy first and seek comment afterward",
              "You compare the report against a competing publication",
              "You report only the figures that support the summary's framing",
            ],
            correctIndex: 0,
            explanation:
              "The finding is that the sentence comes from somewhere you have not seen, which is a question rather than a conclusion.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What denominator does page 29 supply?",
            options: [
              "777,308 females under 18 in Indiana in 2023",
              "818,763 females under 18, which is 51.3 percent of the total",
              "About 1.6 million school-age children across all Indiana counties",
              "The number of girls who participated in the report's listening sessions",
            ],
            correctIndex: 0,
            explanation:
              "48.7 percent of the under-18 population, against 818,763 males at 51.3 percent.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "Which source does page 29 cite for the population figures?",
            options: [
              "The ACS five-year estimate, Table B01001",
              "The National Survey of Children's Health, indicator 1.9",
              "The Indiana Department of Education's October enrollment count",
              "The decennial census, adjusted to the report's publication year",
            ],
            correctIndex: 0,
            explanation:
              "A named table from a named product, which is enough to retrieve the original, check the vintage, and get the margin of error.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "What does a named ACS table give a reporter that the compiled figure does not?",
            options: [
              "The margin of error",
              "Permission to reproduce the table in a published story",
              "County-level detail that the statewide figure aggregates away",
              "The response rate for the specific survey year cited",
            ],
            correctIndex: 0,
            explanation:
              "A five-year estimate always has one, and it almost never survives into a compiled figure.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "What share of female children aged 3 to 17 received mental health treatment in Indiana in 2023?",
            options: [
              "11.2 percent",
              "12.8 percent, which was the national average that year",
              "11.9 percent, which was the rate for male peers",
              "56.1 percent, which was the caregiver difficulty rate",
            ],
            correctIndex: 0,
            explanation:
              "Lower than male peers at 11.9 percent and lower than the national average of 12.8 percent, per page 60.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "Why is a lower treatment rate not automatically good news?",
            options: [
              "It is consistent with less need and with less access",
              "Because treatment rates are always understated in survey data",
              "Because the national average is a poor comparison for a single state",
              "Because caregiver-reported figures cannot be compared across years",
            ],
            correctIndex: 0,
            explanation:
              "The number alone cannot tell you which, which is exactly why the disambiguating figure matters.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "What share of caregivers reported difficulty finding needed mental health care for female children in 2023?",
            options: [
              "56.1 percent",
              "49.9 percent, which was the national average",
              "54.9 percent, which was the rate for male children",
              "11.2 percent, matching the treatment rate on the same page",
            ],
            correctIndex: 0,
            explanation:
              "Higher than the national average of 49.9 percent and higher than the 54.9 percent for male children, per page 60.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "Which way do the two page 60 figures point when read together?",
            options: [
              "Toward access rather than need",
              "Toward need rather than access, since treatment rates track demand",
              "Toward neither, since caregiver reports and treatment rates are unrelated",
              "Toward a data error, since the two figures cannot both be true",
            ],
            correctIndex: 0,
            explanation:
              "A lower treatment rate alongside a higher difficulty rate is the combination that distinguishes the explanations, and neither figure alone would support it.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "What is a disambiguating figure?",
            options: [
              "A second number that separates two explanations of the first",
              "A figure republished by a second source to confirm the first",
              "A margin of error attached to a point estimate",
              "A denominator supplied so a count can be read as a rate",
            ],
            correctIndex: 0,
            explanation:
              "Reports very often contain one on the same page, and summaries very often use only one of the pair.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "What three questions does the direction habit ask of every rate?",
            options: [
              "What is the denominator, what moves it, and is up good",
              "Who collected it, when, and whether it has been revised",
              "How large is the sample, what is the error, and who funded it",
              "Which county, which year, and which age range",
            ],
            correctIndex: 0,
            explanation:
              "Then look for the second figure that distinguishes the explanations.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "What does the report warn about county rankings?",
            options: [
              "A ranking does not necessarily mean a county is doing well",
              "Rankings are recalculated annually and are not comparable across years",
              "Rankings are suppressed for counties below a population threshold",
              "Rankings reflect only the four KIDS COUNT domains, not the wellness dimensions",
            ],
            correctIndex: 0,
            explanation:
              "And that a change in a ranking may be due to how data changed in other counties. A rank is a relative position.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "What mistake does reporting an improved county rank as improved conditions make?",
            options: [
              "It reads a relative position as an absolute change",
              "It ignores the margin of error attached to the underlying estimate",
              "It compares a school-year figure against a calendar-year one",
              "It treats a suppressed cell as though it were a zero",
            ],
            correctIndex: 0,
            explanation:
              "And the publisher warned about it explicitly on page 83, which makes it an avoidable error.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "What is a floating number?",
            options: [
              "A percentage published without its denominator",
              "An estimate whose confidence interval crosses zero",
              "A figure that appears in the summary but not in any table",
              "A count that has been suppressed to protect confidentiality",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the denominator comes out of the report itself, and why page 29 is one of the first pages to read.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "What is the first step in tracing a summary sentence?",
            options: [
              "Find the section it belongs to",
              "Email the publisher and ask which table supports it",
              "Search the endnotes for a source matching the claim",
              "Compare it against a national figure for the same measure",
            ],
            correctIndex: 0,
            explanation:
              "The contents page and the domain topic list get you to the narrative and the charts, which is where the arithmetic can be done.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "Why does the lesson say to read the charts rather than the prose?",
            options: [
              "The prose can restate a figure from a source not shown",
              "The prose is written by a different author than the charts",
              "The charts carry margins of error that the prose omits",
              "The prose is drawn from the executive summary rather than the data",
            ],
            correctIndex: 0,
            explanation:
              "Reading the chart is what lets you do the arithmetic the summary implies, which is the whole point of the exercise.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What does the report say about quantifying cyberbullying?",
            options: [
              "Little evidence exists, because of issues in capturing data",
              "It is measured precisely by the Youth Risk Behavior Survey each year",
              "It is tracked by the Department of Education's incident reporting system",
              "It cannot be measured at all and is therefore excluded from the report",
            ],
            correctIndex: 0,
            explanation:
              "Page 58 also notes the many ways individuals can engage in it, which is directly relevant to any ratio built on it.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What is an untraceable figure?",
            options: [
              "A number whose underlying table you cannot locate",
              "A number the publisher has declined to explain when asked",
              "A number whose original collection has since been discontinued",
              "A number without a confidence interval attached to it",
            ],
            correctIndex: 0,
            explanation:
              "It is reportable only once the publisher identifies the table, which is a question worth asking rather than a reason to give up.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "Which figures does page 59 give for female electronic bullying across the series?",
            options: [
              "25.5, 20.6, 22.1, 25.3",
              "18.7, 15.7, 15.2, 20.7",
              "43.2, 41.8, 45.7, 45.8",
              "94.6, 56.1, 54.9, 49.9",
            ],
            correctIndex: 0,
            explanation:
              "For 2011, 2015, 2021, and 2023. The series reading 18.7, 15.7, 15.2, 20.7 is the male one across the same years.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What does the lesson say a summary sentence gets quoted in?",
            options: [
              "A hundred stories, verbatim",
              "The publisher's own press release and nowhere else",
              "Academic literature reviews, which then re-cite the compilation",
              "State legislative testimony, where it becomes a policy premise",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the tracing step is worth the twenty minutes it takes on any sentence you intend to use.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "What is the difference between compression and dishonesty in a summary?",
            options: [
              "Compression is a genre, and it is not evidence",
              "Compression is permitted only where the underlying table is reproduced",
              "Compression applies to ratios but never to raw counts",
              "There is none, which is why summaries should not be quoted",
            ],
            correctIndex: 0,
            explanation:
              "Reporting from a summary without going underneath is the common way a reporter publishes something they cannot defend.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "Which framing question did the report say it went into 2025 with?",
            options: [
              "What role social connection plays in the lives of Indiana girls",
              "Whether Indiana girls' outcomes had improved since the previous edition",
              "How county-level differences shape access to mental health care",
              "Whether state data collections undercount girls relative to boys",
            ],
            correctIndex: 0,
            explanation:
              "Page 7 describes it as a new question that year, and the 91 listening sessions are how the report went looking for an answer.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "Why do ratios and comparisons dominate an executive summary?",
            options: [
              "They travel",
              "They are more accurate than the underlying counts",
              "They are the only form a publisher may legally assert",
              "They compress better into a fixed page allowance",
            ],
            correctIndex: 0,
            explanation:
              "Which is a fact about how summaries are written, and a reason to check the ones you intend to repeat.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "What is the sixth of the six fields?",
            options: [
              "Whether you saw the underlying table or only the summary",
              "Whether the publisher responded to a request for comment",
              "Whether the figure has been reported by another outlet",
              "Whether the source collection is still being maintained",
            ],
            correctIndex: 0,
            explanation:
              "It is the one that tells the future version of you how much weight the paragraph can carry.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "What does the report state about the population under 18 in Indiana in 2023?",
            options: [
              "48.7 percent female and 51.3 percent male",
              "51.3 percent female and 48.7 percent male",
              "50 percent each, rounded from the ACS estimate",
              "The split is not published, only the female count",
            ],
            correctIndex: 0,
            explanation:
              "777,308 females and 818,763 males, from the ACS five-year estimate Table B01001 on page 29.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "Which two errors does the lesson say cause most of the damage a reporter does with a report's numbers?",
            options: [
              "Using a rate without its denominator, and assuming lower is better",
              "Misreading a chart, and citing the wrong page in the document",
              "Quoting the summary, and failing to seek comment from the publisher",
              "Comparing counties, and comparing years within a single county",
            ],
            correctIndex: 0,
            explanation:
              "Both are avoidable in under a minute each, which is why they are the first two habits the section teaches.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "What does the lesson say a rank is?",
            options: [
              "A relative position",
              "A weighted composite of the four KIDS COUNT domains",
              "An absolute measure normalized to the state average",
              "A suppressed value published in ordinal form to protect confidentiality",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a county can rise in rank while its underlying conditions are unchanged, as the report's own reminders page warns.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "What kind of estimate is the report's population figure?",
            options: [
              "A five-year estimate",
              "A single-year administrative count from the state health department",
              "A decennial census enumeration adjusted for undercount",
              "A projection based on birth registrations and migration",
            ],
            correctIndex: 0,
            explanation:
              "The American Community Survey five-year estimate, which is an average across five years of sampling rather than a measurement of one year.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "Where does lesson 6 say the summary's cyberbullying ratio might have come from?",
            options: [
              "Another source, measure, or population",
              "An arithmetic error in the compilation process",
              "A prior edition of the same report",
              "A national figure applied to the state without adjustment",
            ],
            correctIndex: 0,
            explanation:
              "Which is a question the publisher can answer immediately, and which the reporter cannot answer by guessing.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What does the lesson call the discipline behind tracing, if not suspicion?",
            options: [
              "A number you cannot trace is one you cannot defend",
              "A publisher who cannot answer is one you should not cite",
              "A summary that compresses is one that has been edited for effect",
              "A figure without a margin of error is one that should not be published",
            ],
            correctIndex: 0,
            explanation:
              "And the traceable version is nearly always available and nearly always specific enough to make better journalism.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "Which of these is a legitimate use of the page 59 figures?",
            options: [
              "Reporting them with their survey and their year",
              "Averaging them across the four survey years to produce a single rate",
              "Applying the female series to the whole under-18 population",
              "Presenting them as the source of the summary's cyberbullying ratio",
            ],
            correctIndex: 0,
            explanation:
              "They are high school students, from the Youth Risk Behavior Survey, in named years, which is exactly what makes them defensible.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What does the lesson say about a summary bullet you intend to lead a story with?",
            options: [
              "Trace it first, or lead with something you can defend",
              "Quote it verbatim, so the publisher rather than the reporter carries the claim",
              "Rewrite it in your own words, which removes the need to trace it",
              "Pair it with a competing figure so readers can judge for themselves",
            ],
            correctIndex: 0,
            explanation:
              "A traceable second-best number beats an untraceable headline number, which is the argument the last lesson of the course makes in full.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "What does the lesson mean when it calls a compiled percentage a floating number?",
            options: [
              "It cannot be interpreted without knowing what it is a share of",
              "It changes every time the underlying estimate is revised",
              "It is reported to one decimal place implying false precision",
              "It has been detached from the endnote that supports it",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the first thing a reporter does with a statewide report is find the population page.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "What did the report state about mental health treatment for male children in Indiana in 2023?",
            options: [
              "11.9 percent received treatment or counseling",
              "12.8 percent received treatment, matching the national average",
              "9.8 percent of caregivers could not obtain needed care",
              "54.9 percent received treatment through a school-based provider",
            ],
            correctIndex: 0,
            explanation:
              "Against 11.2 percent for female children and a national average of 12.8 percent, per page 60.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "Why does the lesson say to look for the second figure on the same page?",
            options: [
              "Reports often print the disambiguating number right there",
              "Because a single figure cannot be published without a comparison",
              "Because adjacent figures are always drawn from the same collection",
              "Because summaries reproduce whichever figure appears first",
            ],
            correctIndex: 0,
            explanation:
              "And summaries very often use only one of the pair, which is how a direction problem reaches print.",
            sourceLessonSlug: "denominators-and-direction",
          },
        ],
      },
    },
    // ── Section 3 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "definitions-change-everything",
      title: "9 · What a data definition changes",
      section: "Section 3 · Definitions, endnotes, and vintage",
      body: `The definitions section is where a report tells you what its words mean, and it is the part nobody reads. It is also where most of the difference between a true sentence and a false one is decided.

**Two adjacent indicators, two different populations.** The report's data definitions give inpatient discharge as the number of youth between ages 15 and 24 years admitted to hospital, and emergency department discharge as any unscheduled outpatient service provided to an individual under the age of 18 (Indiana Youth Institute, 2025, p. 78). Those are different age ranges, sitting under the same heading, and a story comparing the two as though they described the same population would be wrong in a way no reader could detect.

**Participation is not eligibility.** The same section defines free and reduced lunch enrollment as the number of students participating in the program as a percentage of the whole student population in a county (p. 79). Participation, not eligibility, and the gap between those two is large and varies by district for reasons that have nothing to do with poverty, including stigma, paperwork, and whether a school offers universal meals. A reporter who writes that a figure shows how many students qualify has said something the definition does not support.

**A status measure is not an annual event count.** The report defines dropout rate as the cumulative number of individuals between the ages of 16 and 24 who are not in school and have not earned a high school diploma or equivalent, and says explicitly that this is the status dropout rate because it captures a snapshot of the current status of the age group regardless of the reason for dropping out, sourced to the National Center for Education Statistics (p. 80). It counts a condition today, not students who left this year, and the two are constantly confused.

**A ratio can carry a recommendation, and the recommendation is somebody's.** The definitions give the recommended school counselor ratio as 250 students to 1, from the American School Counselor Association, the school social worker ratio as 250 to 1 from the National Association of Social Workers, the school psychologist ratio as 500 to 1 from the National Association of School Psychologists, and the school nurse ratio as 750 to 1 from the National Association of School Nurses (pp. 81, 82). Reporting a shortfall against a professional association's own recommended ratio is legitimate and normal. Reporting it as a standard, without saying whose, is not.

**The procedure.** Before quoting any indicator, read its definition, and write down three things: the age range, whether it counts people or events, and who set any threshold it is measured against. Most reporting errors from a data report are one of those three, and all three take a minute to check.

:::reveal Give the definitional trap in the report's inpatient and emergency department indicators. ||| Inpatient discharge covers ages 15 to 24, while emergency department discharge covers individuals under 18. They are adjacent in the definitions section and describe different populations.

:::reveal What does free and reduced lunch enrollment actually measure in this report? ||| Participation as a percentage of the whole student population in a county, not eligibility. The gap between the two varies for reasons unrelated to poverty.

:::reveal What is a status dropout rate, and what is it commonly confused with? ||| A snapshot of individuals aged 16 to 24 who are not in school and hold no diploma or equivalent, regardless of when or why they left. It is confused with a count of students who dropped out this year.

## Vocabulary
- **Data definition**: the publisher's statement of what an indicator counts, where age range, unit, and thresholds are settled.
- **Participation versus eligibility**: the difference between who uses a program and who qualifies for it.
- **Status rate**: a measure of a condition at a point in time, as distinct from a count of events during a period.
- **Recommended ratio**: a threshold set by a professional association, reportable as a shortfall only when the association is named.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.). Pages 78, 79, 80, 81, and 82.`,
    },
    {
      slug: "chasing-the-endnote",
      title: "10 · Resolving an endnote to a real document",
      section: "Section 3 · Definitions, endnotes, and vintage",
      body: `An endnote is a promise that a source exists. Resolving it is the work, and the shape of a report's endnotes tells you how much work it will be.

**The shape in this document.** The endnotes run from page 75 and are short-form: an author or organization, a year, and a title, with no DOI and no URL. Entries include *National Survey of Children's Health (2023). Indicator 1.9*, *Indiana Department of Education (2024). Data Request*, and *Indiana Department of Health (2023). Youth Risk Behavior Surveillance System* (Indiana Youth Institute, 2025, pp. 75, 76). That format is common and it is not a defect. It does mean that resolving any figure to its origin is a task you perform, not a link you click.

**Three kinds of endnote, three different jobs.** A survey indicator, like the NSCH entries, resolves to a published indicator page with its own sample and its own uncertainty, and that is the easy case. A named data request, like the Indiana Department of Education entries, resolves to a custom extract that does not exist publicly, and the only way to see it is to ask, which is a records request under REPORT-01. A journal article resolves to a paper you read yourself.

**The journal case, and the discipline it needs.** One entry cites *Cai, J., & Liu, Y. (2024). The impact of social media on mental health: A longitudinal study. Journal of Health Economics, 95, 102456* (p. 75). Treat that as an exercise rather than a verdict: search the journal by volume and article number, search the title, search the authors, and see what comes back. If a citation resolves, you have a paper you can read and characterize yourself, which is always better than repeating a compiler's one-line summary. If it does not resolve, you have a question for the publisher and a reason not to build a paragraph on it. What you do not do is assume either outcome before looking.

**Why this matters more than it sounds.** A compiled sentence about what research shows is two removes from the research. The compiler read the paper, wrote a sentence, and you are about to write a sentence from that sentence. Every remove loses a qualifier, and the qualifiers are where the honest version of a claim lives.

**A data request is a lead, not a dead end.** When a figure traces to a custom extract from a state agency, you now know two things: the agency holds a data set at that grain, and somebody has already asked for it. Both are useful, and the second one makes your own request much easier to write, because you can describe what you want by reference to something the agency has already produced.

:::reveal What does a short-form endnote with no DOI or URL change about your work? ||| Nothing about its validity. It means resolving any figure to its origin is a task you perform yourself rather than a link you follow.

:::reveal What does an endnote citing a state agency data request tell a reporter? ||| That the agency holds a data set at that grain and that somebody already asked for it, which makes your own records request far easier to write.

:::reveal Why is a compiled sentence about what research shows two removes from the research? ||| The compiler read the paper and wrote a sentence, and you would be writing from that sentence. Each remove drops qualifiers, and the qualifiers are where the honest version lives.

## Vocabulary
- **Short-form endnote**: an author, year, and title with no DOI or URL, common in compiled reports and resolvable by hand.
- **Survey indicator**: a numbered published measure, such as an NSCH indicator, with its own sample and uncertainty.
- **Data request**: a custom extract supplied to the compiler by an agency, which does not exist publicly until someone asks.
- **Remove**: each step between original research and your sentence, at which qualifiers are lost.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.). Pages 75 and 76.`,
    },
    {
      slug: "vintage-and-comparability",
      title: "11 · Vintage, timeframe, and comparability",
      section: "Section 3 · Definitions, endnotes, and vintage",
      body: `The cover says 2025. Almost nothing inside it is from 2025, and that is normal rather than a scandal. What matters is that your story says which year each figure describes.

**The publisher's own reminders, which are unusually direct.** The report tells readers that data are based on different timeframes, giving calendar year, school year, and five-year estimates as examples, and that readers should check each indicator and data source to determine the reported time period. It adds that data collection and methodology vary among sources and agencies, that data presented may not be comparable because different sources use varying methodologies and sample sizes, and that different surveys may use different definitions for the same indicator, so the original source methodology should be reviewed (Indiana Youth Institute, 2025, p. 83).

**Three clocks in one document.** A calendar-year figure covers January to December. A school-year figure covers roughly August to June and is labeled by two years, which is why the same document can carry a 2023 figure and a 2023 to 2024 figure that overlap without matching. A five-year estimate, like the ACS figures, is an average across five years of sampling and is not a measurement of any single year at all. Writing that something was true in 2023 from a five-year estimate ending in 2023 is an error the source itself would not make.

**Suppression, and why a blank is information.** The same page notes that when a small number exists for a data source, data suppression may be used to protect confidentiality (p. 83). A missing cell in a county table usually means the count was too small to publish, not that the count was zero, and reporting an absence as a zero is a genuine misstatement about a small population.

**The comparability rule that follows.** Two figures from different sources are not comparable just because they measure things with the same name. Before setting any two numbers beside each other, confirm they share a population, a timeframe, and a definition. If they do not, the honest sentence names both sources and says the two are measured differently, which is a perfectly publishable sentence and is much stronger than a false comparison.

**What to put in the story.** For each figure: the year it describes, the collection it came from, and, when it is an estimate, that it is one. Three clauses, and they are the difference between a paragraph that ages well and one that becomes wrong the moment a newer figure appears.

:::reveal Name the three kinds of timeframe the report warns its readers about. ||| Calendar year, school year, and five-year estimates. Each covers a different span, which is why two figures in one document can both be labeled 2023 and not match.

:::reveal Why is a blank cell in a county table not a zero? ||| Because small counts are suppressed to protect confidentiality, so an absent value usually means too few to publish. Reporting it as zero misstates a small population.

:::reveal What must two figures share before they can be set beside each other? ||| A population, a timeframe, and a definition. Without all three the honest sentence names both sources and says they are measured differently.

## Vocabulary
- **Vintage**: the year a figure actually describes, as distinct from the year the report was published.
- **Five-year estimate**: an average across five years of sampling, which is not a measurement of any single year.
- **Suppression**: withholding a small cell to protect confidentiality, which produces a blank that is not a zero.
- **Comparability**: whether two figures share population, timeframe, and definition closely enough to be set side by side.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.). Page 83.`,
    },
    {
      slug: "quiz-definitions-endnotes-vintage",
      title: "12 · Knowledge check: definitions, endnotes, and vintage",
      section: "Section 3 · Definitions, endnotes, and vintage",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What age range does the report's inpatient discharge indicator cover?",
            options: [
              "15 to 24",
              "Under 18, matching the emergency department indicator beside it",
              "6 to 17, matching the bullying and mentor indicators",
              "3 to 17, matching the mental health treatment indicator",
            ],
            correctIndex: 0,
            explanation:
              "The emergency department indicator on the same page covers individuals under 18, so the two describe different populations.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What age range does the emergency department discharge indicator cover?",
            options: [
              "Under 18",
              "15 to 24, matching the inpatient indicator beside it",
              "16 to 24, matching the status dropout measure",
              "All ages, since emergency departments do not restrict by age",
            ],
            correctIndex: 0,
            explanation:
              "Defined as any unscheduled outpatient service provided to an individual under 18 whose condition requires immediate care.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "Why is the inpatient and emergency department pairing a definitional trap?",
            options: [
              "They sit under one heading and cover different populations",
              "They are drawn from the same agency but different collection years",
              "One counts people and the other counts visits",
              "One is suppressed at county level and the other is not",
            ],
            correctIndex: 0,
            explanation:
              "A story comparing them as though they described the same group would be wrong in a way no reader could detect.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What does the report's free and reduced lunch figure measure?",
            options: [
              "Participation",
              "Eligibility, expressed as a share of the county student population",
              "Applications submitted, whether approved or not",
              "Meals served, divided by enrolled students",
            ],
            correctIndex: 0,
            explanation:
              "The number of students participating in the program as a percentage of the whole student population in a county.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "Why does the participation and eligibility gap vary between districts?",
            options: [
              "Stigma, paperwork, and universal meal policies",
              "Because eligibility thresholds are set separately by each district",
              "Because the federal program uses different income tests by region",
              "Because participation is measured annually and eligibility monthly",
            ],
            correctIndex: 0,
            explanation:
              "For reasons that have nothing to do with poverty, which is why writing that the figure shows how many students qualify is unsupported.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What is a status dropout rate?",
            options: [
              "A snapshot of 16 to 24 year olds not in school and without a diploma",
              "The share of a graduating cohort that failed to finish on time",
              "The number of students who left school during the reporting year",
              "The proportion of enrolled students absent for more than ten days",
            ],
            correctIndex: 0,
            explanation:
              "Regardless of the reason for dropping out. The report says so explicitly and sources the definition to the National Center for Education Statistics.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What is a status dropout rate commonly confused with?",
            options: [
              "A count of students who left this year",
              "A graduation rate measured against an expected cohort year",
              "An attendance rate measured against instructional days",
              "An enrollment count taken on a fixed date each October",
            ],
            correctIndex: 0,
            explanation:
              "It counts a condition today rather than an event during the year, and the two are constantly conflated.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What is the recommended school counselor ratio the report cites, and whose is it?",
            options: [
              "250 to 1, from the American School Counselor Association",
              "500 to 1, from the National Association of School Psychologists",
              "750 to 1, from the National Association of School Nurses",
              "250 to 1, set by Indiana statute for accredited schools",
            ],
            correctIndex: 0,
            explanation:
              "The social worker ratio is also 250 to 1, from the National Association of Social Workers.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What is the recommended school psychologist ratio the report cites?",
            options: [
              "500 to 1",
              "250 to 1, matching the counselor and social worker recommendations",
              "750 to 1, matching the school nurse recommendation",
              "1,000 to 1, reflecting the smaller number of practitioners",
            ],
            correctIndex: 0,
            explanation:
              "From the National Association of School Psychologists, per the definitions section.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What is the recommended school nurse ratio the report cites?",
            options: [
              "750 to 1",
              "500 to 1, matching the school psychologist recommendation",
              "250 to 1, matching the counselor recommendation",
              "1,500 to 1, reflecting shared coverage across buildings",
            ],
            correctIndex: 0,
            explanation:
              "From the National Association of School Nurses. Each ratio belongs to a named professional association rather than to a standard.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "How may a shortfall against a recommended ratio be reported?",
            options: [
              "As a shortfall against a named association's recommendation",
              "As a violation of a national standard for school staffing",
              "As a legal deficiency under the state's accreditation rules",
              "As evidence that the district is failing its students",
            ],
            correctIndex: 0,
            explanation:
              "Reporting it as a standard without saying whose is what turns a legitimate comparison into an unsupported claim.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What three things do you write down before quoting an indicator?",
            options: [
              "Age range, whether it counts people or events, and who set any threshold",
              "Publisher, page number, and the year the report was released",
              "Sample size, response rate, and the weighting method used",
              "County, domain, and which wellness dimension it falls under",
            ],
            correctIndex: 0,
            explanation:
              "Most reporting errors from a data report are one of those three, and all three take a minute to check.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What is an endnote, in the terms this lesson uses?",
            options: [
              "A promise that a source exists",
              "A citation that has been verified by the publisher before printing",
              "A legal attribution required by the original data owner",
              "A pointer to a table elsewhere in the same document",
            ],
            correctIndex: 0,
            explanation:
              "Resolving it is the work, and the format of a report's endnotes tells you how much work it will be.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What form do the worked example's endnotes take?",
            options: [
              "Author or organization, year, and title, with no DOI or URL",
              "Full APA entries with DOIs for every journal article cited",
              "Numbered footnotes reproduced at the bottom of each page",
              "Hyperlinks to each source's landing page in the digital edition",
            ],
            correctIndex: 0,
            explanation:
              "Common, and not a defect. It means resolving a figure to its origin is a task you perform rather than a link you click.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "Which page do the worked example's endnotes begin on?",
            options: [
              "75",
              "78, immediately before the data definitions",
              "82, in the methodology and process section",
              "27, alongside the limitations statement",
            ],
            correctIndex: 0,
            explanation:
              "With the data definitions at 78 and the methodology at 82, which is the last third of the document.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What are the three kinds of endnote the lesson distinguishes?",
            options: [
              "Survey indicator, agency data request, journal article",
              "Primary, secondary, and tertiary sources",
              "Public, restricted, and proprietary data",
              "State, national, and international collections",
            ],
            correctIndex: 0,
            explanation:
              "Each resolves differently: a published indicator page, a custom extract that requires a records request, and a paper you read yourself.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What does a survey indicator endnote resolve to?",
            options: [
              "A published indicator page with its own sample and uncertainty",
              "A custom extract held only by the compiler",
              "A press release summarizing the survey's findings",
              "A raw microdata file requiring a data use agreement",
            ],
            correctIndex: 0,
            explanation:
              "It is the easy case, and it is where the confidence interval the compilation dropped can be recovered.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What does an endnote citing an agency data request resolve to?",
            options: [
              "A custom extract that does not exist publicly",
              "A published table on the agency's open data portal",
              "A peer-reviewed article describing the same collection",
              "A statutory report the agency must file annually",
            ],
            correctIndex: 0,
            explanation:
              "The only way to see it is to ask, which is a records request under the previous course in this track.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "How should the journal citation in the endnotes be treated?",
            options: [
              "As an exercise rather than a verdict",
              "As confirmed, since the compiler presumably read the paper",
              "As suspect, since compiled reports rarely cite journals accurately",
              "As unusable, since the endnote carries no DOI",
            ],
            correctIndex: 0,
            explanation:
              "Search by volume and article number, by title, and by authors, and see what comes back. Do not assume either outcome before looking.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What do you gain when a journal citation resolves?",
            options: [
              "A paper you can read and characterize yourself",
              "Permission to quote the compiler's summary of it",
              "Confirmation that every other endnote is equally sound",
              "A DOI you can add to the compilation's own citation",
            ],
            correctIndex: 0,
            explanation:
              "Which is always better than repeating a compiler's one-line summary of what research shows.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What do you have when a journal citation does not resolve?",
            options: [
              "A question for the publisher",
              "Proof that the report fabricated the source",
              "Grounds to publish a correction on the publisher's behalf",
              "A reason to discard every figure in that domain",
            ],
            correctIndex: 0,
            explanation:
              "And a reason not to build a paragraph on it. What you do not do is assume either outcome before you look.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "Why is a compiled sentence about research two removes from the research?",
            options: [
              "The compiler wrote a sentence, and you would write from that sentence",
              "The journal edited the paper, and the compiler edited the journal's abstract",
              "The agency collected the data, and the journal reanalyzed it",
              "The survey sampled a population, and the compiler weighted the results",
            ],
            correctIndex: 0,
            explanation:
              "Every remove loses a qualifier, and the qualifiers are where the honest version of a claim lives.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What two things does a data request endnote tell you?",
            options: [
              "The agency holds the data at that grain, and someone already asked",
              "The data are exempt from disclosure and cannot be obtained again",
              "The compiler paid for the extract and holds the rights to it",
              "The agency publishes the same table annually in a public report",
            ],
            correctIndex: 0,
            explanation:
              "Both are useful, and the second makes your own records request far easier to write because you can describe what the agency has already produced.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What does the report warn about the timeframes its data cover?",
            options: [
              "They differ, including calendar year, school year, and five-year estimates",
              "They are standardized to the calendar year throughout the document",
              "They are always the year printed on the cover of the report",
              "They are given only in the endnotes rather than in the tables",
            ],
            correctIndex: 0,
            explanation:
              "And it tells readers to check each indicator and data source to determine the reported time period.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What span does a school-year figure cover, and how is it labeled?",
            options: [
              "Roughly August to June, labeled by two years",
              "January to December, labeled by the ending year",
              "September to August, labeled by the starting year only",
              "A rolling twelve months, labeled by the month of collection",
            ],
            correctIndex: 0,
            explanation:
              "Which is why one document can carry a 2023 figure and a 2023 to 2024 figure that overlap without matching.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What is a five-year estimate?",
            options: [
              "An average across five years of sampling",
              "A projection five years forward from the most recent measurement",
              "The most recent of five annual measurements, revised four times",
              "A measurement taken once every five years",
            ],
            correctIndex: 0,
            explanation:
              "It is not a measurement of any single year, so writing that something was true in 2023 from a five-year estimate ending in 2023 is an error the source itself would not make.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What does the report say about small counts?",
            options: [
              "Data suppression may be used to protect confidentiality",
              "They are published with a wider confidence interval attached",
              "They are aggregated upward to the regional level automatically",
              "They are excluded from the document entirely without notice",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a missing cell usually means too few to publish rather than zero.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "Why is reporting a blank cell as a zero a real misstatement?",
            options: [
              "It converts an unpublishable small count into a claim of none",
              "It ignores the margin of error attached to a suppressed estimate",
              "It assumes the county participated in the collection that year",
              "It treats a school-year figure as a calendar-year one",
            ],
            correctIndex: 0,
            explanation:
              "And it does so about a small population, which is where a false zero does the most harm.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What must two figures share before they can be compared?",
            options: [
              "A population, a timeframe, and a definition",
              "A publisher, a page, and a year",
              "A sample size, a response rate, and a weighting method",
              "A county, a domain, and a wellness dimension",
            ],
            correctIndex: 0,
            explanation:
              "Two figures are not comparable just because they measure things with the same name.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What is the honest sentence when two figures are not comparable?",
            options: [
              "Name both sources and say they are measured differently",
              "Report the more recent figure and omit the older one",
              "Average them and report the result as an approximation",
              "Report neither, since an incomparable pair supports nothing",
            ],
            correctIndex: 0,
            explanation:
              "It is perfectly publishable, and it is much stronger than a false comparison.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What three clauses belong with every figure in a story?",
            options: [
              "The year it describes, the collection, and whether it is an estimate",
              "The publisher, the page, and the date you accessed the document",
              "The county, the age range, and the sex of the population",
              "The domain, the dimension, and the endnote number",
            ],
            correctIndex: 0,
            explanation:
              "They are the difference between a paragraph that ages well and one that becomes wrong when a newer figure appears.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What does the report say about different surveys measuring the same indicator?",
            options: [
              "They may use different definitions, so review the original methodology",
              "They are reconciled by the compiler before publication",
              "They are never used together within a single domain",
              "They produce comparable figures once weighted to the same population",
            ],
            correctIndex: 0,
            explanation:
              "Alongside the warning that methodologies and sample sizes vary among sources and agencies.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "Why is almost nothing inside a 2025 report from 2025?",
            options: [
              "Collections publish on their own lag",
              "Because publishers deliberately withhold the most recent year",
              "Because the cover year refers to the edition rather than the data",
              "Because a five-year estimate cannot include the publication year",
            ],
            correctIndex: 0,
            explanation:
              "It is normal rather than a scandal. What matters is that your story says which year each figure describes.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What is vintage, as this course uses the term?",
            options: [
              "The year a figure actually describes",
              "The year the report was published",
              "The number of years a collection has been running",
              "The interval between collection and publication",
            ],
            correctIndex: 0,
            explanation:
              "As distinct from the cover date, and it is the first of the three clauses every figure carries into a story.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "Which section of a report is described as the part nobody reads?",
            options: [
              "The definitions",
              "The endnotes, which are consulted only when a figure is disputed",
              "The methodology, which most readers take on trust",
              "The limitations statement, which reads as a disclaimer",
            ],
            correctIndex: 0,
            explanation:
              "It is also where most of the difference between a true sentence and a false one is decided.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What does the report source its attendance definition to?",
            options: [
              "Indiana Code",
              "The National Center for Education Statistics",
              "The Indiana Department of Health",
              "The American School Counselor Association",
            ],
            correctIndex: 0,
            explanation:
              "Which is worth noticing: some definitions in a compilation are statutory and some are professional recommendations, and the two behave differently in a story.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "Which agency does the report source its status dropout definition to?",
            options: [
              "The National Center for Education Statistics",
              "The Indiana Department of Education",
              "The Indiana Commission for Higher Education",
              "The U.S. Census Bureau",
            ],
            correctIndex: 0,
            explanation:
              "Which also means the definition is a national one, and any Indiana-specific figure built on it inherits that definition.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What is the practical consequence of two adjacent indicators using different age ranges?",
            options: [
              "A comparison between them is wrong and undetectable",
              "One of them must be suppressed at the county level",
              "The compiler is required to publish a reconciliation note",
              "The endnotes for both will point to the same collection",
            ],
            correctIndex: 0,
            explanation:
              "No reader could catch it from the story, which is exactly why the reporter has to catch it from the definitions page.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "How long does the lesson say checking an indicator's definition takes?",
            options: [
              "About a minute",
              "An afternoon, since definitions are scattered through the document",
              "A phone call to the publisher for each indicator used",
              "As long as reading the domain section it belongs to",
            ],
            correctIndex: 0,
            explanation:
              "For the age range, the unit, and any threshold. Most reporting errors from a data report are one of those three.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What does an NSCH endnote in this report look like?",
            options: [
              "The survey name, a year, and an indicator number",
              "A full citation with authors, journal, volume, and DOI",
              "A URL pointing to the specific indicator page",
              "A table number within the compilation itself",
            ],
            correctIndex: 0,
            explanation:
              "Which is enough to resolve, because the survey publishes numbered indicators with their own samples and uncertainties.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What is a remove, in the sense this lesson uses?",
            options: [
              "A step between original research and your sentence",
              "A figure deleted from a compilation between editions",
              "A suppressed cell removed to protect confidentiality",
              "A source dropped from the endnotes after verification failed",
            ],
            correctIndex: 0,
            explanation:
              "At each one qualifiers are lost, which is why going upstream to the paper itself is worth the time.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What does the lesson say about assuming a citation is fabricated before checking?",
            options: [
              "Do not assume either outcome before looking",
              "Assume it is sound, since publishers verify their endnotes",
              "Assume it is unreliable, since compiled endnotes are rarely checked",
              "Assume it is correct if the journal name is one you recognize",
            ],
            correctIndex: 0,
            explanation:
              "The exercise is to search by volume and article number, by title, and by authors, and to report what you actually find.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "Which of these is NOT a timeframe the report warns about?",
            options: [
              "Rolling quarterly averages",
              "Calendar year",
              "School year",
              "Five-year estimates",
            ],
            correctIndex: 0,
            explanation:
              "The three named on the reminders page are calendar year, school year, and five-year estimates.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What does the report tell readers to do about time periods?",
            options: [
              "Check each indicator and data source",
              "Assume the cover year unless a table says otherwise",
              "Use the most recent year available across all indicators",
              "Contact the publisher for a schedule of collection dates",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the Important Data Reminders on page 83, and it is the publisher telling you how to avoid a specific error.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What error does a five-year estimate invite?",
            options: [
              "Reporting it as a measurement of the final year",
              "Reporting it without its margin of error",
              "Comparing it against a school-year figure",
              "Treating a suppressed cell within it as zero",
            ],
            correctIndex: 0,
            explanation:
              "It is an average across five years of sampling, which the source itself would never describe as a single-year figure.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "Which two definitions in the report use the same recommended ratio?",
            options: [
              "School counselor and school social worker",
              "School psychologist and school nurse",
              "School counselor and school psychologist",
              "School social worker and school nurse",
            ],
            correctIndex: 0,
            explanation:
              "Both are 250 to 1, from the American School Counselor Association and the National Association of Social Workers respectively.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What does the lesson say a compiled table has no room for?",
            options: [
              "Sample sizes and confidence intervals",
              "The name of the collection each figure came from",
              "The year each figure describes",
              "The county-level breakdown of a statewide total",
            ],
            correctIndex: 0,
            explanation:
              "Which is the practical argument for resolving a survey indicator endnote to the survey's own published page.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What is the definitions section's role in a report, in one phrase?",
            options: [
              "Where the report says what its words mean",
              "Where the report lists the agencies it obtained data from",
              "Where the report states which figures are estimates",
              "Where the report records changes since the previous edition",
            ],
            correctIndex: 0,
            explanation:
              "Age ranges, units, and thresholds are all settled there, and all three are common sources of error.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "Why is a short-form endnote not a defect?",
            options: [
              "It is a common format and the sources still resolve",
              "Because publishers are not required to cite sources at all",
              "Because DOIs are unavailable for government collections",
              "Because compiled figures do not need individual attribution",
            ],
            correctIndex: 0,
            explanation:
              "It does mean resolving a figure is a task you perform rather than a link you click, which is a workload fact rather than a quality one.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What makes a records request easier to write after reading an endnote?",
            options: [
              "You can describe what the agency has already produced",
              "The endnote contains the agency's designated custodian",
              "The endnote establishes that the data are not exempt",
              "The endnote gives the fee the compiler paid for the extract",
            ],
            correctIndex: 0,
            explanation:
              "Which is exactly the scoping technique the records course teaches: name the system and the extract rather than describing a summary.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What does the report say about comparing data from different sources?",
            options: [
              "Understand the different methodologies of each source",
              "Avoid it entirely, since no two collections are comparable",
              "Use the compiler's reconciliation notes where provided",
              "Compare only within a single wellness dimension",
            ],
            correctIndex: 0,
            explanation:
              "Readers are encouraged to understand the differing methodologies, which is the publisher describing the comparability rule in its own words.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What does the lesson call the sentence that ages badly?",
            options: [
              "One that omits the year the figure describes",
              "One that names the collection but not the publisher",
              "One that reports a rate without its denominator",
              "One that quotes an executive summary rather than a table",
            ],
            correctIndex: 0,
            explanation:
              "The three clauses, year, collection, and whether it is an estimate, are what make a paragraph survive a newer edition.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What does the lesson say about a threshold printed in a definitions section?",
            options: [
              "Find out whose it is",
              "Treat it as a legal minimum unless the report says otherwise",
              "Ignore it, since thresholds are advisory and not measured",
              "Assume the publisher set it for the purposes of this report",
            ],
            correctIndex: 0,
            explanation:
              "The counselor, social worker, psychologist, and nurse ratios each belong to a named professional association, and a shortfall is reportable only when the association is named.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "Why does the vintage lesson say a 2025 cover date is not a scandal?",
            options: [
              "Publication lag is normal for every collection",
              "Because publishers may date a report to the year of its funding cycle",
              "Because a compilation is dated to its most recent indicator",
              "Because the cover year is only a marketing convention",
            ],
            correctIndex: 0,
            explanation:
              "What matters is that your story says which year each figure describes, which is the first of the three clauses.",
            sourceLessonSlug: "vintage-and-comparability",
          },
        ],
      },
    },
    // ── Section 4 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "page-twenty-seven",
      title: "13 · Page 27: a publisher documenting its own limits",
      section: "Section 4 · Limits, and writing from a report",
      body: `This is the page that made this report the teaching object for the whole track. Under the heading *Addressing Limitations in Available Data*, the publisher writes down what is wrong with its own evidence.

**What it says.** That just as there are gaps in the experiences and opportunities affecting girls, gender gaps also exist in data and data collection. That gender biases and accurate representation are not unique to Indiana, and that organizations around the world are working toward equitable data collection standards to address gender data gaps. That gender-specific data and research were used where available to minimize gender bias. And then the sentence that matters most: that while efforts have been made to limit the amount of gender bias found in the data, it is not yet possible to present data that is free from gender bias (Indiana Youth Institute, 2025, p. 27).

**And the instruction it gives readers.** That these limitations do not dismiss what the data shows, but should be viewed as an additional data point providing a lens by which to view and interpret the report, and that barriers currently present in gender data make it difficult to monitor and assess the progress Indiana girls are making (p. 27).

**Why this is rare and what to do with it.** Most publishers state limitations as a defensive paragraph or not at all. A publisher saying, in its own voice, that its numbers are not free of a specific bias, and telling you to treat that as evidence rather than as a disclaimer, has handed a reporter three things: a named uncertainty, a direction, and a quotable statement of both.

**The reporting move it enables.** If the collection undercounts a population, then every table built from that collection inherits the undercount. So the honest sentence is not that girls experience a thing at some rate. It is that the best available measurement puts it at that rate, from a collection whose own publisher says gender gaps in the underlying data have not been eliminated. That sentence is longer, harder to headline, and true.

**The symmetrical error, which page 27 forecloses.** Deciding that because a publisher named a limitation, the report can be ignored. The page says explicitly that the limitations do not dismiss what the data shows. A reporter who uses a self-disclosed limitation to dismiss a document is doing the opposite of what the disclosure asks and is also making the disclosure costly, which discourages the next publisher from making one.

**What to look for in every report from now on.** A limitations section, a methodology section, and a statement of what the publisher could not measure. Their absence is itself reportable. Note it in your file, and when a document has none, say so in the story: this report does not state its limitations is a fact about the report, and readers can weigh it.

:::reveal What is the sentence on page 27 that matters most, and why? ||| That while efforts were made to limit gender bias, it is not yet possible to present data free from gender bias. A publisher naming a specific uncertainty in its own voice hands a reporter a named limitation, a direction, and a quotable statement.

:::reveal How does page 27 tell readers to treat its limitations? ||| As an additional data point and a lens for interpreting the report, not as grounds for dismissing what the data shows.

:::reveal What should a reporter do when a report contains no limitations section at all? ||| Treat the absence as a fact about the report and say so in the story, because whether a publisher states its own limits is something a reader can weigh.

## Vocabulary
- **Limitations statement**: a publisher's own account of what its evidence cannot support, here on page 27.
- **Named uncertainty**: a specific, directional weakness in the data, as distinct from a generic disclaimer.
- **Inherited undercount**: the propagation of a collection's gaps into every table computed from it.
- **Symmetrical error**: using a self-disclosed limitation to dismiss the document, which the disclosure explicitly warns against.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.). Page 27.`,
    },
    {
      slug: "qualitative-and-quantitative",
      title: "14 · Listening sessions and tables, and what each supports",
      section: "Section 4 · Limits, and writing from a report",
      body: `Many reports carry two kinds of evidence at once and do not always label which is doing the work in a given sentence. Sorting them is a reporter's job, not the publisher's failure.

**What this report holds.** Statewide administrative and survey data compiled from other collections, and qualitative work described on page 7 as 91 listening sessions with girls plus feedback from 130 adults across the state (Indiana Youth Institute, 2025, p. 7). Two methods, two different claims, published in one document.

**What each supports.** Survey data with a sampling design supports statements about shares of a population, within their stated uncertainty. Listening sessions support statements about what participants raised, in what terms, and with what intensity. They do not support a share, because they were not drawn to be representative, and no amount of care in running them changes that.

**The two symmetrical misreadings.** Treating listening sessions as a survey, and writing that a quarter of Indiana girls feel something because a quarter of session participants said it. And dismissing the sessions because they are not a survey, which throws away the only systematic account of what girls themselves raised, including subjects no state data set contains. The report's own framing puts social connection in exactly that category: a question it went looking for because the qualitative work surfaced it.

**How to attribute each correctly, in one line.** For the data: the figure, the collection, and the year. For the qualitative: what participants said, how many sessions, with whom, and that the sessions were not a representative sample. Both are publishable, both are useful, and the second one is where most of the human specificity in a story comes from.

**The discipline this track owes on this particular document.** The report is about girls, including minors. That means no composite characters assembled from session themes, no quotation attributed to a young person who did not say it to you, and no implied individual behind a statistic. If you want a person in the story, you report one, with the consent process the next course in this track is entirely about.

**A last check before you write.** For each sentence in your piece, ask which of the two evidence types it rests on. If a sentence blends them, it is nearly always the sentence that will need a correction.

:::reveal What do listening sessions support, and what can they not support? ||| What participants raised, in what terms, and with what intensity. Not a share of a population, because the sessions were not drawn to be representative.

:::reveal Name the two symmetrical misreadings of a report carrying both kinds of evidence. ||| Treating listening sessions as a survey and reporting a share from them, and dismissing them because they are not a survey, which discards the only account of what participants themselves raised.

:::reveal What does this course forbid when writing from a report about minors? ||| Composite characters built from session themes, quotations attributed to a young person who did not say them to you, and an implied individual behind a statistic.

## Vocabulary
- **Qualitative evidence**: accounts of what participants raised and how, which support themes rather than shares.
- **Representative sample**: a sample drawn so that shares generalize to a population, which listening sessions are not.
- **Blended sentence**: a claim that silently rests on both evidence types, and the most likely candidate for a correction.
- **Composite character**: an invented individual assembled from several accounts, which this catalog does not permit.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.). Page 7.`,
    },
    {
      slug: "writing-from-a-report",
      title: "15 · Writing from a report without becoming its press release",
      section: "Section 4 · Limits, and writing from a report",
      body: `A report lands, every outlet covers it the same day, and most of the coverage is the executive summary rewritten. The difference between that and reporting is decided by four choices, none of which take long.

**Choose the sentence you can defend.** Lead with a figure you traced to its table, whose source, year, and population you can name in the story. A traceable second-best number beats an untraceable headline number, and it is the one that survives the first informed reader.

**Report the report, not just its contents.** Who produced it, what they do, who funded it if that is disclosed, what it says about its own limits, and what it did not measure. Page 27 of this document is a quotable paragraph about the state of gender data, and no press release will hand it to you because it is not a finding.

**Get one thing that is not in the document.** A response from the agency that owns the underlying data. An upstream figure with the uncertainty the compilation dropped. A person the numbers describe, reported properly. A county-level table the summary aggregated away. One of these turns a rewrite into reporting, and all four are available in an afternoon.

**Say what you could not confirm.** If the summary's ratio did not follow from the table you found and the publisher has not answered yet, that sentence stays out and, in an enterprise piece, the unresolved question goes in. This is the same discipline the whole track ends on, and it is what a capstone in this series is graded against.

**Two things that keep a report story useful after the news cycle.** Publish the page numbers you used, so a reader can check you rather than trust you. And put the document in your beat file with the six fields from lesson 5 filled in, because you will be asked about this report again in eighteen months and the version of you that has the file will answer in a minute.

**Where this course hands off.** Records got you the document, this course got you what it says, and the next one is about the people in it: interviewing someone who did not seek the attention, on deadline, sometimes a minor, with a guardian present, and knowing what you can promise and what you may not.

:::reveal What makes a traceable second-best figure better than an untraceable headline figure? ||| You can name its source, year, and population in the story, so it survives the first informed reader. The headline number cannot be defended if it is questioned.

:::reveal Name two ways to get something into a report story that is not in the report. ||| A response from the agency that owns the underlying data, an upstream figure carrying the uncertainty the compilation dropped, a person the numbers describe reported properly, or a county table the summary aggregated away.

:::reveal Why publish the page numbers you used? ||| So a reader can check you rather than trust you, which is also what makes the piece defensible when someone disputes it later.

## Vocabulary
- **Rewrite**: coverage that reproduces an executive summary's framing without tracing or adding anything.
- **Reporting the report**: covering the publisher, the funding, the stated limits, and what was not measured, alongside the findings.
- **The one extra thing**: a response, an upstream figure, a person, or a finer-grained table, obtained outside the document.
- **What I could not confirm**: the published note of unresolved questions, carried through the whole Reporter track.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.). Pages 7 and 27.`,
    },
    {
      slug: "quiz-limits-and-writing",
      title: "16 · Knowledge check: limits, and writing from a report",
      section: "Section 4 · Limits, and writing from a report",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is page 27 of the worked example headed?",
            options: [
              "Addressing Limitations in Available Data",
              "Methodology and Process",
              "About the Indiana Girl Report",
              "Important Data Reminders",
            ],
            correctIndex: 0,
            explanation:
              "It is the page that made this report the teaching object for the whole Reporter track.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What does page 27 say about gender bias in the data?",
            options: [
              "It is not yet possible to present data free from it",
              "It has been eliminated by using gender-specific sources throughout",
              "It affects survey data but not administrative collections",
              "It is a national problem that does not apply to Indiana collections",
            ],
            correctIndex: 0,
            explanation:
              "The page also says efforts were made to limit it, which is what makes the admission specific rather than generic.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What does page 27 say about gender data gaps beyond Indiana?",
            options: [
              "Organizations around the world are working toward equitable standards",
              "They are unique to states without a dedicated youth data agency",
              "They have been resolved in national collections since 2020",
              "They apply only to indicators disaggregated below the state level",
            ],
            correctIndex: 0,
            explanation:
              "Gender biases and accurate representation are described as issues not unique to Indiana.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "How does page 27 instruct readers to treat its limitations?",
            options: [
              "As an additional data point and a lens for interpretation",
              "As grounds for treating every figure as provisional",
              "As a legal disclaimer that limits reuse of the material",
              "As a reason to prefer the qualitative sessions over the tables",
            ],
            correctIndex: 0,
            explanation:
              "It says explicitly that the limitations do not dismiss what the data shows.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What three things does a self-disclosed limitation hand a reporter?",
            options: [
              "A named uncertainty, a direction, and a quotable statement",
              "A correction, an apology, and a commitment to improve",
              "A margin of error, a sample size, and a response rate",
              "A source, a year, and a population",
            ],
            correctIndex: 0,
            explanation:
              "Most publishers state limitations defensively or not at all, which is what makes this page rare.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What follows for every table built on an undercounting collection?",
            options: [
              "It inherits the undercount",
              "Its margin of error widens while the estimate stays unbiased",
              "It must be republished once the collection is corrected",
              "It becomes unusable and should not be cited",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the honest sentence names the best available measurement and the publisher's own statement about the underlying data.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What does the honest sentence look like, given a disclosed limitation?",
            options: [
              "The best available measurement puts it at that rate, from a collection whose publisher says gaps remain",
              "Girls experience the thing at that rate, attributed to the report",
              "The rate is unknown because the data are biased",
              "The rate is that figure, with a note that all data have limitations",
            ],
            correctIndex: 0,
            explanation:
              "Longer, harder to headline, and true. That trade is the one this course exists to make.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What is the symmetrical error page 27 forecloses?",
            options: [
              "Using a disclosed limitation to dismiss the document",
              "Quoting the limitations statement without naming the publisher",
              "Reporting the limitation instead of the finding it qualifies",
              "Assuming the limitation applies to every indicator equally",
            ],
            correctIndex: 0,
            explanation:
              "It also makes disclosure costly, which discourages the next publisher from making one.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What should a reporter do when a report contains no limitations section?",
            options: [
              "Say so in the story",
              "Assume the publisher followed standard practice for its sector",
              "Reconstruct the limitations from the methodology section",
              "Decline to use the document until the publisher supplies one",
            ],
            correctIndex: 0,
            explanation:
              "Whether a publisher states its own limits is a fact about the report, and readers can weigh it.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "Which three things should a reporter look for in every report from now on?",
            options: [
              "A limitations section, a methodology section, and what was not measured",
              "A denominator, a margin of error, and a response rate",
              "An executive summary, a set of tables, and an endnote list",
              "A publisher, a funder, and a named author",
            ],
            correctIndex: 0,
            explanation:
              "Their absence is itself reportable, and noting it in the file is what makes the observation available later.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What two kinds of evidence does the worked example hold at once?",
            options: [
              "Compiled statewide data and qualitative listening sessions",
              "Primary survey research and secondary literature review",
              "County rankings and statewide averages",
              "Administrative records and peer-reviewed replication studies",
            ],
            correctIndex: 0,
            explanation:
              "91 sessions with girls and feedback from 130 adults, published alongside data compiled from other collections.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "What does survey data with a sampling design support?",
            options: [
              "Statements about shares of a population, within stated uncertainty",
              "Statements about why a population behaves as it does",
              "Statements about individuals within the sampled population",
              "Statements about what participants raised unprompted",
            ],
            correctIndex: 0,
            explanation:
              "Statements about what participants raised unprompted describe what qualitative work supports instead, which is the distinction the lesson turns into an attribution rule.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "What do listening sessions support?",
            options: [
              "What participants raised, in what terms, with what intensity",
              "The share of a population holding a given view",
              "A trend across years in how a population feels",
              "A comparison between two counties' experiences",
            ],
            correctIndex: 0,
            explanation:
              "They do not support a share, because they were not drawn to be representative, and care in running them does not change that.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "What is the first of the two symmetrical misreadings?",
            options: [
              "Reporting a share from listening sessions",
              "Dismissing listening sessions because they are not a survey",
              "Treating compiled data as primary research",
              "Comparing qualitative themes across two editions of a report",
            ],
            correctIndex: 0,
            explanation:
              "Writing that a quarter of Indiana girls feel something because a quarter of session participants said it.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "What does dismissing the sessions throw away?",
            options: [
              "The only systematic account of what girls themselves raised",
              "The report's statewide denominator and its population figures",
              "The publisher's own statement of the document's limitations",
              "The endnotes that resolve each compiled figure to its owner",
            ],
            correctIndex: 0,
            explanation:
              "Including subjects no state data set contains, which is exactly how the report's social connection question arose.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "How is qualitative evidence attributed in one line?",
            options: [
              "What participants said, how many sessions, with whom, and not representative",
              "The theme, the publisher, and the year the sessions were held",
              "The number of participants and the margin of error",
              "The finding, attributed to the report as a whole",
            ],
            correctIndex: 0,
            explanation:
              "Both kinds of evidence are publishable, and the qualitative half is where most of the human specificity in a story comes from.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "What does this track forbid when writing from a report about minors?",
            options: [
              "Composite characters and quotations the young person did not give you",
              "Naming the report as the source of any figure about minors",
              "Reporting any figure disaggregated below the state level",
              "Quoting the report's content warning in a published story",
            ],
            correctIndex: 0,
            explanation:
              "Also an implied individual behind a statistic. If you want a person in the story, you report one, with the consent process the next course covers.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "What is a blended sentence?",
            options: [
              "A claim that silently rests on both kinds of evidence",
              "A sentence combining two figures from different collections",
              "A quotation that merges statements from several participants",
              "A summary line that compresses a table into a ratio",
            ],
            correctIndex: 0,
            explanation:
              "It is nearly always the sentence that will need a correction, which is why the last check before writing is to classify each claim.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "What is the last check before writing from a report with two evidence types?",
            options: [
              "Ask which type each sentence rests on",
              "Ask whether the publisher has been contacted for comment",
              "Ask whether a competing outlet has already published",
              "Ask whether every figure has its margin of error attached",
            ],
            correctIndex: 0,
            explanation:
              "A sentence that blends them is the one most likely to need a correction later.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "What does most same-day coverage of a report amount to?",
            options: [
              "The executive summary rewritten",
              "A comparison of the report against the previous edition",
              "An interview with the publisher about the findings",
              "A county-by-county breakdown of the headline figure",
            ],
            correctIndex: 0,
            explanation:
              "The difference between that and reporting is decided by four choices, none of which take long.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "What should a story lead with?",
            options: [
              "A figure you traced to its table",
              "The report's own headline finding, since that is what readers will hear elsewhere",
              "The publisher's framing, since it is the most quotable material available",
              "The largest number in the document, whatever its provenance",
            ],
            correctIndex: 0,
            explanation:
              "A traceable second-best number beats an untraceable headline number, and it is the one that survives the first informed reader.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "What does reporting the report rather than its contents involve?",
            options: [
              "Who produced it, funding, its stated limits, and what it did not measure",
              "Reproducing the executive summary alongside the tables it draws on",
              "Interviewing the publisher about each of the four wellness domains",
              "Comparing the document against the prior year's edition",
            ],
            correctIndex: 0,
            explanation:
              "Page 27 of this document is a quotable paragraph about the state of gender data, and no press release will hand it to you because it is not a finding.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "Which of these is one of the four ways to get something not in the document?",
            options: [
              "A county-level table the summary aggregated away",
              "A second reading of the executive summary for a different angle",
              "A quotation from the publisher's press release",
              "A comparison of two figures from different sections",
            ],
            correctIndex: 0,
            explanation:
              "Along with an agency response, an upstream figure with its uncertainty, or a person the numbers describe, reported properly.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "What turns a rewrite into reporting?",
            options: [
              "One thing that is not in the document",
              "A longer word count than the executive summary",
              "A second source confirming the report's headline figure",
              "A correction to something the report got wrong",
            ],
            correctIndex: 0,
            explanation:
              "All four options the lesson gives are available in an afternoon.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "What happens to an unresolved summary ratio in an enterprise piece?",
            options: [
              "The sentence stays out and the unresolved question goes in",
              "The sentence runs with an attribution to the report",
              "The whole subject is dropped until the publisher answers",
              "The sentence runs with the reporter's own estimate substituted",
            ],
            correctIndex: 0,
            explanation:
              "It is the same discipline the whole track ends on, and it is what a capstone in this series is graded against.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "Why publish the page numbers you used?",
            options: [
              "So a reader can check you rather than trust you",
              "Because the publisher's reuse terms require page-level citation",
              "Because page numbers are the only stable identifier in a PDF",
              "Because it demonstrates how much of the document was read",
            ],
            correctIndex: 0,
            explanation:
              "It is also what makes the piece defensible when somebody disputes it later.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "What goes into the beat file alongside the document?",
            options: [
              "The six fields, filled in",
              "The publisher's contact details and press office hours",
              "A copy of the executive summary with the used sentences marked",
              "A list of every other outlet that covered the same report",
            ],
            correctIndex: 0,
            explanation:
              "Because you will be asked about this report again in eighteen months, and the version of you with the file will answer in a minute.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "What does this course hand off to the next one in the track?",
            options: [
              "Interviewing the people in the report",
              "Filing records requests for the underlying extracts",
              "Verifying a claim within an hour of a deadline",
              "Choosing which shape a story should take",
            ],
            correctIndex: 0,
            explanation:
              "Someone who did not seek the attention, on deadline, sometimes a minor, with a guardian present, and knowing what you can promise.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "What is the relationship between the three courses so far in this track?",
            options: [
              "Records got the document, this course got what it says, next comes the people",
              "Each is independent and may be taken in any order",
              "The first two are prerequisites and the third is optional",
              "Each covers the same skill at increasing depth",
            ],
            correctIndex: 0,
            explanation:
              "Which is also why the capstone asks for one records request, one data report read properly, and two interviews.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "What does the lesson call coverage that reproduces a summary's framing?",
            options: [
              "A rewrite",
              "An aggregation, since no original reporting is added",
              "A syndication, since the material originates elsewhere",
              "A briefing, since it informs without investigating",
            ],
            correctIndex: 0,
            explanation:
              "Every outlet covers a report the day it lands, and most of that coverage is the executive summary in different words.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "Why is page 27 not something a press release will hand you?",
            options: [
              "It is not a finding",
              "Because publishers are not permitted to quote their own limitations",
              "Because it appears after the executive summary in the document",
              "Because it concerns methodology rather than the report's subject",
            ],
            correctIndex: 0,
            explanation:
              "Which is exactly why quoting it is a way of reporting the report rather than its contents.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "What does a named uncertainty differ from?",
            options: [
              "A generic disclaimer",
              "A margin of error attached to an estimate",
              "A suppressed cell in a county table",
              "A definitional footnote in the appendix",
            ],
            correctIndex: 0,
            explanation:
              "A specific, directional weakness stated in the publisher's own voice is usable evidence. A boilerplate caveat is not.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What does page 27 say about monitoring progress?",
            options: [
              "Barriers in gender data make it difficult to assess progress",
              "Progress can be measured reliably once indicators are disaggregated",
              "Progress is tracked annually against the prior edition's baseline",
              "Progress measurement is outside the report's stated scope",
            ],
            correctIndex: 0,
            explanation:
              "Which is a limitation with a direction attached, and a reportable statement about the state of the evidence.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "Why does dismissing a document for disclosing a limitation make disclosure costly?",
            options: [
              "It discourages the next publisher from disclosing",
              "It exposes the reporter to a complaint from the publisher",
              "It requires a correction once the publisher responds",
              "It forfeits the reporter's access to the publisher's future reports",
            ],
            correctIndex: 0,
            explanation:
              "And it does the opposite of what the disclosure asks, since page 27 says explicitly that the limitations do not dismiss what the data shows.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What does the lesson say about the tradeoff in the honest sentence?",
            options: [
              "Longer, harder to headline, and true",
              "Shorter, more quotable, and defensible",
              "Equally long, but attributed to the publisher rather than the reporter",
              "Impossible to write without the publisher's cooperation",
            ],
            correctIndex: 0,
            explanation:
              "Naming the best available measurement and the publisher's own statement about the underlying data is what makes it defensible.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "How many listening sessions and adult respondents does the qualitative lesson cite?",
            options: [
              "91 sessions and 130 adults",
              "130 sessions and 91 adults",
              "About 1,500 participants across both groups",
              "The report does not give a count for either",
            ],
            correctIndex: 0,
            explanation:
              "From page 7, published alongside the statewide compiled data.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "Whose failure is it when a report does not label which evidence type a sentence rests on?",
            options: [
              "Nobody's, and sorting them is the reporter's job",
              "The publisher's, and it should be raised as an error",
              "The compiler's, and it invalidates the affected section",
              "The original collection's, since it supplied unlabeled data",
            ],
            correctIndex: 0,
            explanation:
              "Many reports carry both kinds at once and do not always say which is doing the work in a given sentence.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "What is a representative sample, as the lesson defines it?",
            options: [
              "One drawn so that shares generalize to a population",
              "One large enough to detect a difference between two groups",
              "One that includes participants from every county in a state",
              "One recruited through an organization already serving the population",
            ],
            correctIndex: 0,
            explanation:
              "Listening sessions are not one, which is a fact about the design rather than about the care taken in running them.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "What should a reporter do if they want a person in a story about a report?",
            options: [
              "Report one, with a consent process",
              "Construct a composite from the report's session themes",
              "Quote an anonymous participant described in the document",
              "Use a hypothetical example clearly labeled as illustrative",
            ],
            correctIndex: 0,
            explanation:
              "The next course in the track is entirely about that consent process, including minors and guardians.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "Which of these is NOT one of the four choices that separate reporting from a rewrite?",
            options: [
              "Publishing before competing outlets",
              "Leading with a figure you traced",
              "Reporting the report itself",
              "Saying what you could not confirm",
            ],
            correctIndex: 0,
            explanation:
              "The fourth is getting one thing that is not in the document.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "What is the one extra thing, in the lesson's terms?",
            options: [
              "A response, an upstream figure, a person, or a finer-grained table",
              "A second report covering the same subject in another state",
              "A quotation from the publisher explaining the methodology",
              "A visualization the report did not produce itself",
            ],
            correctIndex: 0,
            explanation:
              "Any one of the four turns a rewrite into reporting, and all four are available in an afternoon.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "What makes a report story useful after the news cycle?",
            options: [
              "Published page numbers and a filled-in beat file",
              "A follow-up piece scheduled for the following week",
              "A link to the full document hosted on the outlet's site",
              "An interview with the publisher recorded for later use",
            ],
            correctIndex: 0,
            explanation:
              "Because you will be asked about this report again in eighteen months.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "What did plans/68 identify as the reason to build the track around this document?",
            options: [
              "It documents its own limitations in its own voice",
              "It is the most recent statewide youth data compilation available",
              "It covers a subject the existing catalog has never addressed",
              "Its publisher agreed to let the course reproduce its tables",
            ],
            correctIndex: 0,
            explanation:
              "A reporter who can read page 27 correctly can read any report, which is the argument the whole course is built on.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What is an inherited undercount?",
            options: [
              "A collection's gap propagating into every table computed from it",
              "A figure that was revised downward after publication",
              "A suppressed cell that a reader mistakes for a zero",
              "A county figure that excludes a population the state total includes",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a publisher naming a gap in its collection is telling a reporter exactly where to look.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What does the lesson say most publishers do about limitations?",
            options: [
              "State them defensively or not at all",
              "Publish them as a separate technical appendix",
              "Quantify them as confidence intervals on each estimate",
              "Delegate them to the original collections they compiled from",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a publisher stating a limitation in its own voice and telling you to treat it as evidence is rare and valuable.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "Which sentence would fail this course's standard?",
            options: [
              "Girls experience the thing at that rate, attributed to the report",
              "The best available measurement puts it at that rate, from a named collection",
              "The report's publisher says gender gaps in the underlying data remain",
              "The figure describes 2023 and comes from a five-year estimate",
            ],
            correctIndex: 0,
            explanation:
              "It asserts a rate as a fact about girls rather than as a measurement, and it names no collection, year, or limitation.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What does the lesson say about the human specificity in a story?",
            options: [
              "Most of it comes from the qualitative half",
              "It should be avoided in stories about minors entirely",
              "It comes from the largest figures in the document",
              "It is supplied by the publisher's own case studies",
            ],
            correctIndex: 0,
            explanation:
              "Which is the practical reason not to discard listening-session evidence for failing a test it was never designed to pass.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "What is the correct attribution line for a compiled figure in a story?",
            options: [
              "The figure, the collection, and the year",
              "The report, the page, and the publisher",
              "The domain, the dimension, and the indicator number",
              "The compiler, the funder, and the edition",
            ],
            correctIndex: 0,
            explanation:
              "Paired with the qualitative line, which gives what participants said, how many sessions, with whom, and that they were not representative.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "Why does the course say a traceable second-best number is better?",
            options: [
              "It survives the first informed reader",
              "It is more likely to be quoted by other outlets",
              "It is shorter and therefore easier to headline",
              "It avoids any need to contact the publisher",
            ],
            correctIndex: 0,
            explanation:
              "An untraceable headline number cannot be defended the moment somebody who knows the subject asks where it came from.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "What does the beat file entry for a report enable eighteen months later?",
            options: [
              "Answering a question about it in a minute",
              "Republishing the story without rechecking the figures",
              "Establishing that the report has not been superseded",
              "Proving the publisher was contacted before publication",
            ],
            correctIndex: 0,
            explanation:
              "Which is the same argument the beat-file lesson in REPORT-00 makes about every other document on a beat.",
            sourceLessonSlug: "writing-from-a-report",
          },
        ],
      },
    },
    {
      slug: "final-reading-a-report",
      title: "17 · Final: reading somebody else's report",
      section: "Section 4 · Limits, and writing from a report",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "What three questions come before reading a figure in any report?",
            options: [
              "Who published it, what they do, what it is for",
              "How many tables, how many pages, and who paid for it",
              "What the headline says, who disputes it, and who published first",
              "Which agency collected it, when, and at what cost",
            ],
            correctIndex: 0,
            explanation:
              "None of the answers is disqualifying. Each changes what a sentence in the summary is doing.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "What does provenance tell you?",
            options: [
              "What to check first",
              "Whether the document can be trusted without further checking",
              "Which figures were independently verified before publication",
              "Whether the publisher will answer questions about its data",
            ],
            correctIndex: 0,
            explanation:
              "Not what the answer will be. The rule cuts both ways: an advocate's report is not automatically propaganda and a research organization's is not automatically neutral.",
            sourceLessonSlug: "who-published-and-why",
          },
          {
            prompt: "What does the worked example say about its own research on page 82?",
            options: [
              "It does not design or implement primary research",
              "It replicates national findings using state administrative records",
              "It surveys Indiana households annually through a contractor",
              "It commissions primary research from university partners",
            ],
            correctIndex: 0,
            explanation:
              "IYI's stated expertise is collecting, analyzing, and reporting secondary research, which decides how every figure in the document is attributed.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "How is a figure from a secondary compilation attributed?",
            options: [
              "To its original collection, with the report as where you found it",
              "To the compilation, which is the immediate published source",
              "To both, with the compilation named first",
              "To neither, since compiled public data needs no attribution",
            ],
            correctIndex: 0,
            explanation:
              "Writing that a report found something it compiled turns one organization's summary into the apparent source of a national survey.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "What does going upstream recover?",
            options: [
              "Sample sizes, confidence intervals, and the true vintage",
              "Permission to reproduce the original table",
              "The compiler's notes on why the indicator was selected",
              "A named contact who will comment on the finding",
            ],
            correctIndex: 0,
            explanation:
              "None of which fit into a compiled table, and it frequently reveals the figure is older than the report's cover date.",
            sourceLessonSlug: "secondary-not-primary",
          },
          {
            prompt: "In what order should a reporter read a data report?",
            options: [
              "Contents, methodology, definitions, endnotes, tables, summary",
              "Summary, tables, definitions, methodology, endnotes, contents",
              "Whichever domain the story concerns, then the summary",
              "Front to back, so no caveat inside a section is missed",
            ],
            correctIndex: 0,
            explanation:
              "The summary is last because reading it first means repeating a framing rather than checking it.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "Where do the endnotes, definitions, and methodology sit in the worked example?",
            options: [
              "Pages 75, 78, and 82",
              "Pages 3, 4, and 6",
              "Pages 26, 27, and 29",
              "Pages 52, 64, and 75",
            ],
            correctIndex: 0,
            explanation:
              "After 74 pages of findings, which is normal layout and precisely why the reading order is deliberate.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "Why does a report running two taxonomies matter for trends?",
            options: [
              "A figure can move between headings between editions",
              "It doubles the number of endnotes each figure carries",
              "It forces the publisher to suppress county-level detail",
              "It means every figure is published twice with different rounding",
            ],
            correctIndex: 0,
            explanation:
              "Producing apparent trends that are reorganizations rather than changes in the underlying data.",
            sourceLessonSlug: "report-anatomy",
          },
          {
            prompt: "What makes every sentence in an executive summary a claim?",
            options: [
              "It is written last, to decide what the document means",
              "It is written by the publisher's communications staff",
              "It is drafted before the data section is complete",
              "It is the only section reviewed by the publisher's board",
            ],
            correctIndex: 0,
            explanation:
              "Compression, selection, and conversion into ratios are a genre, not evidence, which is why the table underneath has to be found.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "What are the six fields to record for a figure you intend to publish?",
            options: [
              "Page, source, year, population, denominator, whether you saw the table",
              "Publisher, author, title, edition, page, date accessed",
              "Sample, error, weighting, mode, response rate, vintage",
              "Domain, dimension, indicator, county, sex, age",
            ],
            correctIndex: 0,
            explanation:
              "They are what let you defend a paragraph a year after it published.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "What do you do when a summary sentence has no findable table?",
            options: [
              "Treat it as the finding and ask the publisher",
              "Publish it with the report cited as the source",
              "Drop the whole subject as unreportable",
              "Substitute a national figure for the same measure",
            ],
            correctIndex: 0,
            explanation:
              "A compilation's author knows exactly where each figure came from, and the answer is usually immediate.",
            sourceLessonSlug: "summary-is-a-claim",
          },
          {
            prompt: "What were the 2023 electronic-bullying figures on page 59?",
            options: [
              "25.3 percent female, 20.7 percent male",
              "25.5 percent female, 18.7 percent male",
              "22.1 percent female, 15.2 percent male",
              "43.2 percent female, 41.8 percent male",
            ],
            correctIndex: 0,
            explanation:
              "From the Youth Risk Behavior Survey. The other options are earlier years in the same series or figures from the other chart on the page.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What ratio do those 2023 figures produce, and what does the summary claim?",
            options: [
              "About 1.2, against a summary claim of three times",
              "About 3.0, matching the summary exactly",
              "About 2.0, against a summary claim of three times",
              "About 0.8, meaning male students reported more",
            ],
            correctIndex: 0,
            explanation:
              "A real and reportable gap, and not the ratio the summary states, which is what the tracing step establishes.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What is the correct conclusion when a summary ratio does not follow from its section's table?",
            options: [
              "The sentence comes from somewhere you have not seen",
              "The report contains an error the story should report",
              "The chart is mislabeled and should be disregarded",
              "The summary rounded the same figures and may be used",
            ],
            correctIndex: 0,
            explanation:
              "The next action is an email asking which table supports it, not an accusation. Until it arrives you report only what you traced.",
            sourceLessonSlug: "locating-the-table",
          },
          {
            prompt: "What denominator does page 29 supply, and from where?",
            options: [
              "777,308 females under 18 in 2023, from ACS Table B01001",
              "818,763 females under 18, from the decennial census",
              "About 1.6 million children, from the state education department",
              "The listening-session participant count from page 7",
            ],
            correctIndex: 0,
            explanation:
              "48.7 percent of the under-18 population, against 818,763 males at 51.3 percent. The named table is what makes the original retrievable.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "Why is a lower share of girls receiving mental health treatment ambiguous?",
            options: [
              "It is consistent with less need and with less access",
              "Because caregiver-reported figures cannot be compared across years",
              "Because the national average is a poor comparison for one state",
              "Because treatment rates are always understated in survey data",
            ],
            correctIndex: 0,
            explanation:
              "11.2 percent against 11.9 percent for male peers and 12.8 percent nationally, per page 60. The number alone cannot separate the explanations.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "Which figure disambiguates it, and which way does it point?",
            options: [
              "56.1 percent of caregivers reported difficulty, pointing to access",
              "49.9 percent nationally reported difficulty, pointing to need",
              "94.6 percent had an adult mentor, pointing to support",
              "11.9 percent of male children received treatment, pointing to parity",
            ],
            correctIndex: 0,
            explanation:
              "Above the national 49.9 percent and above the 54.9 percent for male children. Lower treatment with higher difficulty points toward access.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "What does the report warn about county rankings?",
            options: [
              "A rank does not necessarily mean a county is doing well",
              "Ranks are suppressed below a population threshold",
              "Ranks are recalculated on a different schedule each year",
              "Ranks apply only within a single wellness dimension",
            ],
            correctIndex: 0,
            explanation:
              "And a change in rank may be due to how data changed in other counties. A rank is a relative position.",
            sourceLessonSlug: "denominators-and-direction",
          },
          {
            prompt: "What is the definitional trap in the inpatient and emergency department indicators?",
            options: [
              "Ages 15 to 24 against under 18",
              "One counts people and the other counts visits",
              "One is annual and the other is a five-year estimate",
              "One is state data and the other is national",
            ],
            correctIndex: 0,
            explanation:
              "They sit adjacent in the definitions section and describe different populations, so a comparison between them is wrong in a way no reader could detect.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What does the free and reduced lunch figure actually measure?",
            options: [
              "Participation as a share of the county student population",
              "Eligibility as a share of the county student population",
              "Applications submitted during the school year",
              "Meals served divided by enrolled students",
            ],
            correctIndex: 0,
            explanation:
              "The gap between participation and eligibility is large and varies for reasons unrelated to poverty, including stigma, paperwork, and universal meal policies.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What is a status dropout rate?",
            options: [
              "A snapshot of 16 to 24 year olds not in school without a diploma",
              "A count of students who left school during the reporting year",
              "The share of a cohort failing to graduate on schedule",
              "The proportion of enrolled students chronically absent",
            ],
            correctIndex: 0,
            explanation:
              "Regardless of the reason for leaving, and sourced by the report to the National Center for Education Statistics.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "How may a shortfall against a recommended staffing ratio be reported?",
            options: [
              "As a shortfall against a named association's recommendation",
              "As a breach of a national standard for school staffing",
              "As a violation of the state's accreditation requirements",
              "As proof that the district is underfunded",
            ],
            correctIndex: 0,
            explanation:
              "250 to 1 for counselors and social workers, 500 to 1 for psychologists, 750 to 1 for nurses, each from a named professional association.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What three things do you check before quoting an indicator?",
            options: [
              "Age range, people or events, and whose threshold",
              "Page, publisher, and year of publication",
              "Sample size, error, and weighting",
              "County, domain, and dimension",
            ],
            correctIndex: 0,
            explanation:
              "Most reporting errors from a data report are one of those three, and all three take about a minute.",
            sourceLessonSlug: "definitions-change-everything",
          },
          {
            prompt: "What are the three kinds of endnote, and how does each resolve?",
            options: [
              "Survey indicator to a published page, data request to a records request, journal to a paper",
              "Primary to a collection, secondary to a compilation, tertiary to a summary",
              "Federal to an agency, state to a department, local to a district",
              "Public to a portal, restricted to an agreement, proprietary to a purchase",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the endnote format tells you how much work resolving a figure will be.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "How should an unfamiliar journal citation in an endnote be treated?",
            options: [
              "As an exercise: search and report what you find",
              "As confirmed, since the compiler read the paper",
              "As suspect, since compiled endnotes are rarely checked",
              "As unusable, since it carries no DOI",
            ],
            correctIndex: 0,
            explanation:
              "Search by volume and article number, by title, and by authors. Do not assume either outcome before looking.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What does an agency data request endnote tell a reporter?",
            options: [
              "The agency holds the data at that grain and somebody asked",
              "The data are exempt and cannot be obtained again",
              "The compiler purchased the extract and holds the rights",
              "The agency publishes the same table publicly each year",
            ],
            correctIndex: 0,
            explanation:
              "Which makes your own records request far easier to scope, because you can name what the agency has already produced.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "Why is a compiled sentence about research two removes from it?",
            options: [
              "The compiler wrote a sentence and you would write from that",
              "The journal edited the paper and the compiler edited the abstract",
              "The agency collected it and the journal reanalyzed it",
              "The survey sampled and the compiler weighted",
            ],
            correctIndex: 0,
            explanation:
              "Each remove drops qualifiers, and the qualifiers are where the honest version of a claim lives.",
            sourceLessonSlug: "chasing-the-endnote",
          },
          {
            prompt: "What is a five-year estimate?",
            options: [
              "An average across five years of sampling",
              "A projection five years forward",
              "A measurement repeated once every five years",
              "The most recent of five annual revisions",
            ],
            correctIndex: 0,
            explanation:
              "So writing that something was true in a single year from a five-year estimate is an error the source itself would not make.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "Why is a blank cell in a county table not a zero?",
            options: [
              "Small counts are suppressed to protect confidentiality",
              "Counties may decline to participate in a collection",
              "The compiler omits values with wide confidence intervals",
              "The indicator may not apply to that county's population",
            ],
            correctIndex: 0,
            explanation:
              "Reporting an absence as a zero is a genuine misstatement, and it is made about a small population.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What must two figures share before being set beside each other?",
            options: [
              "A population, a timeframe, and a definition",
              "A publisher, a page, and a year",
              "A domain, a dimension, and an endnote",
              "A sample size, an error, and a mode",
            ],
            correctIndex: 0,
            explanation:
              "If they do not, the honest sentence names both sources and says they are measured differently, which is publishable and stronger than a false comparison.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What three clauses go with every figure in a story?",
            options: [
              "The year it describes, the collection, and whether it is an estimate",
              "The publisher, the page, and the access date",
              "The county, the age range, and the sex",
              "The domain, the dimension, and the indicator",
            ],
            correctIndex: 0,
            explanation:
              "They are the difference between a paragraph that ages well and one that becomes wrong the moment a newer figure appears.",
            sourceLessonSlug: "vintage-and-comparability",
          },
          {
            prompt: "What is page 27 headed, and what makes it rare?",
            options: [
              "Addressing Limitations in Available Data, stated in the publisher's own voice",
              "Methodology and Process, with every source individually verified",
              "Important Data Reminders, with warnings about comparability",
              "About the Indiana Girl Report, with the reuse terms printed",
            ],
            correctIndex: 0,
            explanation:
              "Most publishers state limitations defensively or not at all. This one names a specific bias and tells readers to treat it as evidence.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "How does page 27 tell readers to treat its limitations?",
            options: [
              "As an additional data point and a lens for interpretation",
              "As grounds for treating every figure as provisional",
              "As a disclaimer required by the report's funders",
              "As a reason to prefer the qualitative work over the tables",
            ],
            correctIndex: 0,
            explanation:
              "It says explicitly that the limitations do not dismiss what the data shows, which forecloses the symmetrical error.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What does a self-disclosed limitation hand a reporter?",
            options: [
              "A named uncertainty, a direction, and a quotable statement",
              "A confidence interval, a sample size, and a response rate",
              "A correction, an apology, and a revised figure",
              "A denominator, a population, and a year",
            ],
            correctIndex: 0,
            explanation:
              "Three usable things, and all three are what a generic disclaimer fails to provide.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What should a reporter say about a report with no limitations section?",
            options: [
              "Say so in the story, because readers can weigh it",
              "Nothing, since most reports omit one",
              "Decline to cite the document at all",
              "Reconstruct the limitations from the methodology",
            ],
            correctIndex: 0,
            explanation:
              "Whether a publisher states its own limits is a fact about the report, and the absence is itself reportable.",
            sourceLessonSlug: "page-twenty-seven",
          },
          {
            prompt: "What do listening sessions support, and what can they not?",
            options: [
              "Themes and what was raised, not shares of a population",
              "Shares within a stated margin of error, not causal claims",
              "Individual accounts, not any statement about a group",
              "Trends across years, not comparisons between regions",
            ],
            correctIndex: 0,
            explanation:
              "91 sessions with girls and 130 adults were not drawn to be representative, and care in running them does not change what they can carry.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "What does this track forbid when writing from a report about minors?",
            options: [
              "Composite characters and quotations they did not give you",
              "Citing the report as the source of any figure about minors",
              "Reporting county-level figures for young people",
              "Quoting the report's content warning in a story",
            ],
            correctIndex: 0,
            explanation:
              "Also an implied individual behind a statistic. To put a person in the story you report one, with a consent process.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "What is a blended sentence, and why does it matter?",
            options: [
              "One resting silently on both evidence types, and the likeliest correction",
              "One combining two figures from different collections, and a comparability error",
              "One merging statements from several participants, and a fabrication",
              "One compressing a table into a ratio, and a summary artifact",
            ],
            correctIndex: 0,
            explanation:
              "The last check before writing is to ask which type each sentence rests on.",
            sourceLessonSlug: "qualitative-and-quantitative",
          },
          {
            prompt: "What should a story built on a report lead with?",
            options: [
              "A figure you traced to its table",
              "The report's own headline finding",
              "The publisher's framing of the year's theme",
              "The largest number in the document",
            ],
            correctIndex: 0,
            explanation:
              "A traceable second-best number beats an untraceable headline number, because it survives the first informed reader.",
            sourceLessonSlug: "writing-from-a-report",
          },
          {
            prompt: "What turns a report rewrite into reporting?",
            options: [
              "One thing that is not in the document",
              "A word count exceeding the executive summary",
              "A quotation from the publisher's press office",
              "Publishing before competing outlets do",
            ],
            correctIndex: 0,
            explanation:
              "An agency response, an upstream figure with its uncertainty, a person reported properly, or a county table the summary aggregated away.",
            sourceLessonSlug: "writing-from-a-report",
          },
        ],
      },
    },
  ],
};
