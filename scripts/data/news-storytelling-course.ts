// Authored "News Storytelling" — course #6 of the Storytelling series
// (docs/storytelling-curriculum.md), and the answer to the question in BAM's original note:
// "how to tell stories when delivering the news?"
//
// WHERE IT SITS. The True track, one rung up the permission ladder from civic documentation.
// Documentation records and may not shape. News may SELECT AND ARRANGE but may not invent, and this
// course is largely about what that permission does and does not include. The six spine terms are
// used unchanged; where journalism has its own word (the lede, the nut graf, the inverted pyramid)
// the course names it and maps it back.
//
// SOURCING: Kovach and Rosenstiel for the discipline of verification, the SPJ code for the ethical
// frame, and the Documenters Field Guide where the boundary with documentation matters. Real
// standards, cited, and none invented.
//
// NOT LEGAL ADVICE. Defamation and privilege appear because a working reporter meets them; the
// treatment is the same as the civic documentation course, which teaches how to find your own
// jurisdiction's rule rather than asserting one.

import type { AuthoredCourse } from "./authored-course";

export const NEWS_STORYTELLING_COURSE: AuthoredCourse = {
  title: "News Storytelling",
  description:
    "How do you tell a story when you are not allowed to invent any of it? News sits one rung up the permission ladder from documentation: you may select and arrange, and you may not make things up. This course covers what news is actually for, why the inverted pyramid puts the ending first and what that does to withholding, how to find the owner of a story about a policy, leads that are honest rather than merely arresting, attribution as the load-bearing habit, what you may and may not do to a quotation, numbers and the context that makes them mean something, the difference between a news story and a feature, corrections as a craft rather than an embarrassment, and the specific temptations of narrative journalism. Built on the six decisions from How Stories Work, with the discipline of verification as the thing that separates journalism from everything that looks like it.",
  lessons: [
    {
      slug: "news-what-it-is-for",
      title: "1 · What news is for, and the permission you actually have",
      section: "Module 1 · The discipline",
      body: `You have taken courses that let you invent and courses that let you shape nothing. **News sits between them**, and knowing exactly where is the whole job.

**The permission ladder, from How Stories Work:**

| Form | You may |
| --- | --- |
| Fiction | Invent |
| Performed work from life | Shape freely |
| **News** | **Select and arrange** |
| Documentation | Record |

**Select and arrange is a large permission and people underestimate how large.** You choose what to include, what to lead with, whose voice appears, what context sits beside a number, and where the piece stops. **Every one of those is a decision that changes what a reader believes**, and none of them is inventing.

Which is why the ethics of journalism are mostly about selection rather than about lying. **Almost nobody working in news fabricates. The failures are made of choices.**

**What news is for.** The most useful formulation remains Kovach and Rosenstiel's: journalism's purpose is to give people the information they need to be free and self-governing, and its essence is **a discipline of verification** (Kovach & Rosenstiel, 2014). That second phrase is the one to hold on to. It is what distinguishes journalism from every other form of communication that also uses facts: not that it is accurate, but that it has a **method** for being accurate that can be described and checked.

**The six decisions still apply.** A news story has a change, an owner, a want and obstacle, withholding, scene and summary, and a turn. What differs is that **you did not choose any of them** and cannot. The change happened. The turn happened. Your job is to find them and present them, and if the material has no change you may not supply one.

**Which is the first honest thing this course has to say:** not every event is a story, and a great deal of daily news is not storytelling at all. A council passed a budget. That is information, correctly delivered as information. **Reaching for narrative where none exists is the commonest way a reporter misleads while writing only true sentences.**

**What this course is not.** It is not a substitute for a newsroom, a law degree, or your jurisdiction's media law. It is the craft layer: how to shape true material honestly.

:::reveal Almost nobody in news fabricates, yet news misleads regularly. Explain the mechanism using the permission ladder. ||| The permission is to select and arrange, and that permission is enormous: what is included, what leads, whose voice appears, what context sits beside a number, and where the piece stops all change what a reader believes without a single false sentence being written. So the failures are made of choices rather than of inventions, which is why the ethics of journalism are mostly about selection. It also means "everything I wrote was true" is not a defence of a misleading piece.

## Sources
- Kovach, B., & Rosenstiel, T. (2014). *The elements of journalism: What newspeople should know and the public should expect* (3rd ed.). Three Rivers Press.
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/ethicscode.asp`,
    },
    {
      slug: "news-inverted-pyramid",
      title: "2 · Why the ending goes first",
      section: "Module 1 · The discipline",
      recallContent: [
        {
          prompt: "Where does news sit on the permission ladder, and what does that permission include?",
          answer:
            "Between performed work and documentation: news may SELECT AND ARRANGE but may not invent. That includes choosing what to include, what to lead with, whose voice appears, what context sits beside a number, and where the piece stops, all of which change what a reader believes without any false sentence.",
        },
      ],
      body: `The inverted pyramid puts the most important information first and descends in importance. It looks like a violation of everything the series has said about withholding. **It is not, and understanding why teaches you something about withholding itself.**

**What it actually does.** It tells the reader the outcome immediately, then the substance, then the background. A reader can stop at any point and have the most important thing they would have got by reading on.

**Its origin is practical rather than aesthetic.** It suits a reader who may not finish, an editor who may cut from the bottom, and a medium where the reader chooses their own stopping point. **Those conditions still hold**, and they hold harder online than they ever did in print.

**Where the withholding goes.** From How Stories Work: an inverted structure does not abandon withholding, it **redistributes** it. What is given away is *what happened*. What remains open is *why it matters, how it came about, and what it cost.* The reader still has a question; it is simply a different one.

**Which produces the practical rule:** if your lead gives away the outcome and the reader has no remaining question, the story had only one fact in it. That is fine, and it should then be three paragraphs rather than nine.

**The parts, in the vocabulary journalism actually uses**, mapped back to the series:

| Journalism's word | What it is | The series term |
| --- | --- | --- |
| **The lede** | The opening, carrying the most important thing | The outcome, given away deliberately |
| **The nut graf** | The paragraph saying why this matters and to whom | The change, stated |
| **Body** | Evidence, attribution, detail, in descending importance | Scene and summary, mostly summary |
| **Background** | Context a new reader needs | What a returning reader may skip |

**The nut graf is the one beginners omit**, and its absence is the commonest structural failure in student work. Without it a reader has facts and no reason to care. **It answers "so what," and if you cannot write it, you may not have a story.**

**When not to use the inverted pyramid.** When the value of the piece is the sequence: a reconstruction, a narrative feature, an investigation whose finding depends on how it was found. Those are legitimate and they are the minority. **Reach for narrative structure when the story genuinely requires it, not because the pyramid feels unliterary.**

:::reveal Your lede gives the outcome and a reader has no remaining question afterwards. What does that tell you about the piece? ||| That the story contained one fact, and the honest response is to make it three paragraphs rather than nine. An inverted structure redistributes withholding rather than removing it: the outcome is given away and what stays open is why it matters, how it came about and what it cost. If none of those questions exists, there is nothing left to sustain a reader, and padding it out produces a piece that feels long because it is empty rather than because it is complex.

## Sources
- Kovach, B., & Rosenstiel, T. (2014). *The elements of journalism: What newspeople should know and the public should expect* (3rd ed.). Three Rivers Press.`,
    },
    {
      slug: "news-finding-the-owner",
      title: "3 · Finding the owner of a story about a policy",
      section: "Module 1 · The discipline",
      body: `**A story about a policy is a story about nobody**, and that is the single most common reason careful, accurate journalism goes unread.

From How Stories Work: the owner is the person the change happens to. A policy has no wants and cannot be thwarted. **The person the policy happens to has both**, and the policy becomes the obstacle, which is the strongest available structure for institutional subjects.

**The move, in one line:** find the person, and let the policy be what stands in their way.

**Doing it without distorting.** This is where the technique earns its keep or does real damage, and three failures are worth naming:

**1. The unrepresentative case.** You find a person whose situation is vivid and atypical, and a reader generalises from them. **The fix is not to avoid the person but to say plainly where they sit**: whether their case is common, unusual, or the extreme. One sentence of prevalence protects the whole piece.

**2. The person as illustration.** Someone appears in three paragraphs at the top, vanishes, and returns for a closing line. Readers notice, and it reads as using them. **If you open with a person, come back to them properly.**

**3. Consent that was not informed.** A person agrees to talk about their eviction and does not anticipate their name, their circumstances and their photograph being permanently searchable. **Explain what publication actually means** before they answer, especially with people who have never spoken to a reporter.

**The prevalence sentence, which is the highest-leverage habit in this lesson.** Any time an individual carries a general claim, tell the reader how typical they are: how many people are in this situation, or that it is not known. **A story that cannot say is a story that should say it cannot.**

**Where the owner is an institution's opponent.** Sometimes the right owner is the official trying and failing to change something from inside. That is a legitimate and underused choice, and it produces stories that are about how institutions actually work rather than about their outputs.

**And when there is no owner at all.** Some news genuinely has none: a budget passes, a rate changes, a road closes. **Deliver it as information.** The failure mode this lesson warns about is not "policy stories are boring," it is reaching for a human face on a story that does not need one and thereby making a general truth rest on a particular person who may not be typical.

:::reveal You open a story on rent increases with one family's situation. What single sentence protects the piece, and from what? ||| A prevalence sentence saying how typical they are: how many households are in the same position, or that the figure is not known. It protects against a reader generalising from a vivid, possibly atypical case, which is the main way an individual-led policy story misleads while every sentence remains true. It also protects the family, since a case presented as representative invites scrutiny they did not sign up for. If you cannot establish prevalence, saying so is itself the honest version.

## Sources
- Kovach, B., & Rosenstiel, T. (2014). *The elements of journalism: What newspeople should know and the public should expect* (3rd ed.). Three Rivers Press.
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/ethicscode.asp`,
    },
    {
      slug: "news-quiz-1",
      title: "4 · Knowledge check: the discipline",
      section: "Module 1 · The discipline",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What permission does news have on the ladder from How Stories Work?",
            options: [
              "To select and arrange, but not to invent",
              "To record only, without selecting or arranging",
              "To shape material freely as long as it is true",
              "To invent detail where it clarifies a real event",
            ],
            correctIndex: 0,
            explanation:
              "That permission is larger than people assume: inclusion, ordering, whose voice appears and what context sits beside a number all change what a reader believes without any false sentence.",
            sourceLessonSlug: "news-what-it-is-for",
          },
          {
            prompt: "How does Kovach and Rosenstiel's formulation distinguish journalism?",
            options: [
              "By its independence from any commercial or political funder",
              "By a discipline of verification: a describable, checkable method",
              "By publication in an outlet with editorial oversight",
              "By its use of named rather than anonymous sources",
            ],
            correctIndex: 1,
            explanation:
              "Not that it is accurate, but that it has a method for being accurate that can be described and checked. That is what separates it from everything else that also uses facts.",
            sourceLessonSlug: "news-what-it-is-for",
          },
          {
            prompt: "What happens to withholding in an inverted pyramid?",
            options: [
              "It is abandoned, which is why news is not storytelling",
              "It is delayed until the background section at the end",
              "It is redistributed: what is open becomes why it matters and how it came about",
              "It is replaced by attribution, which sustains reader attention instead",
            ],
            correctIndex: 2,
            explanation:
              "The outcome is given away deliberately. The reader still has a question; it is simply a different question from the one a narrative structure would leave open.",
            sourceLessonSlug: "news-inverted-pyramid",
          },
          {
            prompt: "What is a nut graf, and why does its absence matter?",
            options: [
              "The opening sentence; without it the story has no hook",
              "The final paragraph; without it the story has no resolution",
              "The attribution paragraph; without it claims are unsourced",
              "The paragraph saying why this matters; without it readers have facts and no reason to care",
            ],
            correctIndex: 3,
            explanation:
              "It answers 'so what', and it maps to the change in the series vocabulary. If you cannot write one, you may not have a story.",
            sourceLessonSlug: "news-inverted-pyramid",
          },
          {
            prompt: "Why is a story about a policy usually a story about nobody?",
            options: [
              "Policies have no wants and cannot be thwarted, so there is no owner",
              "Policy detail is too technical for a general readership",
              "Policies change too slowly to contain a turn",
              "Officials will not comment on policy while it is under review",
            ],
            correctIndex: 0,
            explanation:
              "The fix is to find the person the policy happens to and let the policy be the obstacle, which is the strongest available structure for institutional subjects.",
            sourceLessonSlug: "news-finding-the-owner",
          },
          {
            prompt: "What single sentence protects an individual-led policy story?",
            options: [
              "A statement that the subject consented to being named",
              "A prevalence sentence saying how typical the case is",
              "A note that the reporter has no conflict of interest",
              "A summary of the policy's stated objectives",
            ],
            correctIndex: 1,
            explanation:
              "It guards against a reader generalising from a vivid but possibly atypical case. If prevalence cannot be established, saying so is the honest version.",
            sourceLessonSlug: "news-finding-the-owner",
          },
          {
            prompt: "What does the course say about a person who appears at the top and returns only for a closing line?",
            options: [
              "It is standard structure and requires no adjustment",
              "It should be resolved by removing them from the opening",
              "Readers notice, and it reads as using them",
              "It is acceptable if they consented to limited involvement",
            ],
            correctIndex: 2,
            explanation:
              "If you open with a person, come back to them properly. The alternative is a structure that treats a real individual as decoration.",
            sourceLessonSlug: "news-finding-the-owner",
          },
          {
            prompt: "When is it right NOT to reach for a human owner?",
            options: [
              "When the subject is technical and readers may not follow it",
              "When no individual has agreed to be named in the piece",
              "When the outlet's style guide favours institutional framing",
              "When the event genuinely has no owner and is information",
            ],
            correctIndex: 3,
            explanation:
              "A budget passes, a rate changes, a road closes. Reaching for narrative where none exists is the commonest way a reporter misleads while writing only true sentences.",
            sourceLessonSlug: "news-what-it-is-for",
          },
          {
            prompt: "When is a narrative structure preferable to the inverted pyramid?",
            options: [
              "When the value of the piece is the sequence itself",
              "Whenever the writer has more than eight hundred words",
              "When the story concerns an identifiable individual",
              "When the outcome is already widely known to readers",
            ],
            correctIndex: 0,
            explanation:
              "A reconstruction, a narrative feature, or an investigation whose finding depends on how it was found. Those are legitimate and they are the minority.",
            sourceLessonSlug: "news-inverted-pyramid",
          },
          {
            prompt: "What must a reporter explain to someone who has never spoken to the press?",
            options: [
              "Which publication will run the piece and on what date",
              "What publication actually means, including permanent searchability",
              "That they may withdraw their quotes at any time before printing",
              "The outlet's editorial position on the subject under discussion",
            ],
            correctIndex: 1,
            explanation:
              "Consent that did not anticipate a name, circumstances and photograph being permanently findable is not informed consent, and the imbalance is largest with people who have no experience of it.",
            sourceLessonSlug: "news-finding-the-owner",
          },
        ],
      },
    },
    {
      slug: "news-attribution",
      title: "5 · Attribution, and what you may do to a quote",
      section: "Module 2 · The craft",
      recallContent: [
        {
          prompt: "Name the three failures that can arise when a person is used to carry a policy story.",
          answer:
            "The unrepresentative case, where a reader generalises from someone atypical; the person as illustration, who appears at the top and returns only for a closing line; and consent that was not informed, where someone did not anticipate what publication actually means.",
        },
      ],
      body: `**Attribution is the load-bearing habit of the whole form.** It is what converts an assertion into a report of an assertion, and it costs three words.

"The department overspent by four million" is a claim you must be able to prove. **"The auditor said the department overspent by four million"** is a claim about what the auditor said, which you can prove by having heard them say it. Those are different sentences with different burdens.

**Attribute everything that is not established fact.** The bar for "established" is lower than beginners think for things like dates and public records, and higher than they think for anything contested, characterised, or inferred.

**On the record and its neighbours.** These terms are used inconsistently across newsrooms, which is exactly why you agree them explicitly rather than assuming:

- **On the record.** Everything is usable, with the name.
- **On background.** Usable, attributed to a description rather than a name.
- **Off the record.** Not for publication at all, in most usages.

**Agree the terms before the conversation, not after.** A source cannot retroactively make something off the record, and a reporter who lets them is training them to try. Say what you are doing at the start.

**Anonymity is a cost, not a courtesy.** Every unnamed source reduces what a reader can check. The standard worth holding: use it when the information matters and cannot be got otherwise, and **tell the reader why the person is unnamed**, which is the part most often skipped.

**What you may do to a quotation**

| Permitted | Not permitted |
| --- | --- |
| Cut, with an ellipsis, if meaning is preserved | Cut so the meaning changes |
| Use a fragment inside your own sentence | Assemble a fragment into a sentence they did not say |
| Correct an obvious stumble, per your outlet's policy | Tidy grammar so someone sounds unlike themselves |
| Translate, saying you have | Translate silently |

**The governing test:** would the speaker recognise this as what they said and meant? **A paraphrase inside quotation marks is an error**, and it is the kind that destroys trust in everything else in the piece.

**On tidying speech, which is genuinely contested.** Everyone speaks in fragments and false starts. Cleaning them can be a courtesy and can also erase how someone actually talks, which in practice falls hardest on people who do not speak like reporters. **Whatever your policy is, apply it to everybody**, because applying it selectively is where it becomes a way of making some people sound less credible than others.

**Read it back when the stakes are high.** Not the whole story: the quotation. People correct their own words, and they are correcting your record.

:::reveal Why is a policy of tidying quotations dangerous even when each individual edit is harmless? ||| Because it is almost never applied evenly. Everyone speaks in fragments, but the impulse to clean up is strongest with speakers who sound least like the reporter, so the tidying lands hardest on people whose speech differs from newsroom norms. Applied selectively it quietly makes some people sound more articulate and therefore more credible than others, which is an editorial judgment nobody declared. Whatever the policy is, the protection is applying it to everybody.

## Sources
- Kovach, B., & Rosenstiel, T. (2014). *The elements of journalism: What newspeople should know and the public should expect* (3rd ed.). Three Rivers Press.
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/ethicscode.asp`,
    },
    {
      slug: "news-numbers",
      title: "6 · Numbers, and the context that makes them mean something",
      section: "Module 2 · The craft",
      body: `A number in a news story is doing rhetorical work whether or not you intended it. **The same true figure can support opposite impressions depending on what sits beside it**, and choosing that neighbour is squarely inside the select-and-arrange permission.

**The four questions to ask of any figure before it goes in**

1. **Compared to what?** A number alone is almost meaningless. Crime rose by 200 incidents: out of how many, over what period, compared to which baseline?
2. **Per what?** Totals flatter big places. Rates let you compare.
3. **Since when?** Choosing a start date is choosing a story. **A figure measured from an unusual year will say whatever that year makes it say**, and picking that year deliberately is a way of lying with true numbers.
4. **How certain?** Survey margins, estimates, provisional data. "About" is not weakness; it is accuracy.

**Percentages, and the specific trap.** A rise from 1 to 2 cases is a 100 percent increase, and reporting it that way while omitting the raw numbers is technically true and misleading. **Give the raw numbers alongside the percentage**, always, and let the reader see the base.

**Averages hide distributions.** An average wage tells you little where the spread is wide. Where the shape matters, say so, or use a median and name it.

**Risk needs a baseline.** "Doubles your risk" means nothing without the starting risk. Doubling a very small number leaves a very small number, and this is the single commonest failure in health and safety coverage.

**Attribution applies to numbers too**, and beginners forget it because a figure feels like a fact rather than a claim. **Who produced it, by what method, and do they have an interest in the answer?** A number from an advocacy organisation may be perfectly good and the reader is entitled to know where it came from.

**The habit that catches most errors: say the number out loud in plain words** and ask whether it is plausible. Is that a lot? Does that per-person figure make sense? Most published numerical errors are off by an order of magnitude and would not survive being spoken aloud.

**And the one that protects you:** if you do not understand a figure well enough to explain it in a sentence to someone who does not know the subject, **do not publish it yet.** Ask the source to explain it again. They will, and the explanation frequently becomes the best paragraph in the piece.

:::reveal A study reports that a behaviour doubles your risk of a condition. What must you include, and why is the percentage alone misleading? ||| The baseline risk: what the risk was before doubling. Doubling a very small number leaves a very small number, so "doubles your risk" can describe a change from one in a million to two in a million, which a reader will hear as alarming. The percentage is a true statement about the relationship and tells them nothing about the magnitude, which is the thing they actually need in order to make any decision. It is the commonest failure in health and safety coverage.

## Sources
- Kovach, B., & Rosenstiel, T. (2014). *The elements of journalism: What newspeople should know and the public should expect* (3rd ed.). Three Rivers Press.
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/ethicscode.asp`,
    },
    {
      slug: "news-narrative-temptations",
      title: "7 · Narrative journalism, and its specific temptations",
      section: "Module 2 · The craft",
      body: `Narrative journalism uses the tools of storytelling on factual material: scene, character, structure, withholding. **It produces the best work in the form and it is also where the form's worst failures happen**, and both for the same reason.

**Why it is worth doing.** A reconstructed scene can make a reader understand something a summary cannot. From How Stories Work: summary hands over a conclusion, scene supplies the evidence. **In factual work that difference is not merely aesthetic**, because a reader who reaches a conclusion themselves has actually understood it.

**The four temptations, each a way of crossing the line while feeling like craft**

**1. The composite.** Merging several people into one for narrative economy. **Not permitted in journalism**, however clearly it would communicate. If you need a composite, you are writing something else and must label it.

**2. The reconstructed interior.** "She thought about her mother as she waited." How do you know? **You may report what someone told you they were thinking**, attributed. You may not narrate a mind.

**3. The tidied chronology.** Moving an event for a better shape. In performed work this is standard; in journalism it is a false claim about when something happened. **If the sequence matters enough to move, it matters enough to be accurate about.**

**4. The withheld inconvenience.** The detail that complicates your structure, held back or dropped. This is the one that requires no false sentence at all, and it is why the ethics of this form are about selection.

**The verification standard for a scene you did not witness.** Everything in it must be established: by a participant, a recording, a document, or a contemporaneous account. **And the reader should be able to tell how you know.** A note on method, however brief, is what separates reconstruction from invention.

**The permission-ladder test, which resolves most cases.** Ask: **am I selecting and arranging, or am I supplying?** Choosing to open with the moment she got the letter is arranging. Describing the weather that day because it suits the mood, without knowing it, is supplying. The first is craft, the second is fiction.

**And the honest note about pace.** Narrative journalism takes longer, needs more reporting, and fails more often. A daily reporter reaching for it under deadline is the most reliable way to produce a piece that is neither: too shaped to be trusted and too thin to be moving.

:::reveal "She thought about her mother as she waited." What is wrong with that sentence in a news story, and what is the permitted version? ||| It narrates a mind, which no reporter can verify. The permitted version reports what she told you: "She said she thought about her mother while she waited," which is attributed and checkable. The distinction is the permission-ladder test: reporting what someone told you they were thinking is selecting and arranging, while stating what was in their head is supplying something you cannot know, which is fiction wearing the clothes of reporting.

## Sources
- Kovach, B., & Rosenstiel, T. (2014). *The elements of journalism: What newspeople should know and the public should expect* (3rd ed.). Three Rivers Press.
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/ethicscode.asp`,
    },
    {
      slug: "news-corrections",
      title: "8 · Corrections, harm, and the things you cannot take back",
      section: "Module 2 · The craft",
      body: `**Every outlet gets things wrong.** What differs is whether there is a route for it, and how visible the route is.

**A correction is a craft act, not an embarrassment.** The reasoning is the same one behind the source checks in this catalogue: **an error nobody has recorded is an error that will be repeated**, by you and by everyone who cites you.

**What a good correction contains**

1. **What was wrong**, stated plainly rather than buried in a re-statement.
2. **What is right.**
3. **When and where the error appeared.**
4. **Not an excuse.** "Due to an editing error" is usually true and usually reads as a shrug.

**Correct visibly.** Quietly editing a published piece so the error disappears is worse than the error, because it removes the reader's ability to know what they were told yesterday. **Note the change on the piece itself.**

**The asymmetry worth understanding.** A correction never reaches everyone the error reached. That is not an argument against correcting; it is an argument for getting it right the first time, and specifically for **slowing down on the details that will do the most harm if wrong**: names, numbers, accusations, and anything about a private person.

**Harm, and the questions worth asking before publication.** The SPJ code's formulation is to minimise harm and to treat sources and subjects as human beings deserving of respect (Society of Professional Journalists, 2014). Practically:

- **Is this person public or private?** A public official acting in office has accepted scrutiny. A private individual has not, and the bar for naming them is higher.
- **What does naming add?** Sometimes a great deal. Sometimes nothing the story needs.
- **Is this permanent?** It is. Assume every piece is findable forever by the person's future employer, family and children.
- **Does the harm fall on someone other than the subject?** Frequently: children, family, employees.

**The special case of people in crisis.** People will tell a reporter things at the worst moment of their life that they would not agree to on a calmer day. **You may publish it. Consider whether you should**, and consider going back to them before you do.

**And the boundary this course keeps returning to.** If you are documenting rather than reporting, most of this is not yours to decide, and the standard is different: record accurately, omit nothing important. **Knowing which role you are in is what tells you which set of obligations you are under.**

:::reveal Why does quietly editing a published error do more damage than the original mistake? ||| Because it removes the reader's ability to know what they were told. The original error misinformed them once; the silent edit destroys the record of the claim ever having been made, which means anyone who acted on it, cited it or remembers it cannot verify what happened. It also removes the outlet's own signal about its reliability. Correcting visibly on the piece itself costs almost nothing and is the only version that preserves the reader's ability to check.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/ethicscode.asp
- Kovach, B., & Rosenstiel, T. (2014). *The elements of journalism: What newspeople should know and the public should expect* (3rd ed.). Three Rivers Press.`,
    },
    {
      slug: "news-quiz-2",
      title: "9 · Knowledge check: the craft",
      section: "Module 2 · The craft",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does attribution actually do to a sentence?",
            options: [
              "It converts an assertion into a report of an assertion",
              "It transfers legal liability entirely to the source quoted",
              "It signals that the writer disagrees with the statement",
              "It allows a claim to be published without verification",
            ],
            correctIndex: 0,
            explanation:
              "The department overspent is a claim you must prove. The auditor said the department overspent is a claim about what the auditor said, which you can prove by having heard it.",
            sourceLessonSlug: "news-attribution",
          },
          {
            prompt: "When should the terms of an interview be agreed?",
            options: [
              "Afterwards, once you know what is worth using",
              "Before the conversation, explicitly rather than by assumption",
              "Only when the source raises the question themselves",
              "At publication, when the final quotes are selected",
            ],
            correctIndex: 1,
            explanation:
              "The terms are used inconsistently across newsrooms, and a source cannot retroactively make something off the record. A reporter who allows that is training them to try.",
            sourceLessonSlug: "news-attribution",
          },
          {
            prompt: "What is the governing test for editing a quotation?",
            options: [
              "Whether the edit improves clarity for a general reader",
              "Whether the outlet's style guide permits the change",
              "Whether the speaker would recognise it as what they said and meant",
              "Whether the original wording was grammatically correct",
            ],
            correctIndex: 2,
            explanation:
              "Cutting with an ellipsis while preserving meaning is fine; assembling a sentence they did not say is not. A paraphrase inside quotation marks is an error.",
            sourceLessonSlug: "news-attribution",
          },
          {
            prompt: "Why is a policy of tidying speech risky even when each edit seems harmless?",
            options: [
              "It slows production and increases the risk of transcription errors",
              "It creates a legal exposure if the source later disputes the wording",
              "It removes regional vocabulary that readers may find informative",
              "It is applied unevenly, making some speakers sound more credible",
            ],
            correctIndex: 3,
            explanation:
              "The impulse is strongest with speakers who sound least like the reporter, so it lands hardest on people whose speech differs from newsroom norms. The protection is applying the policy to everyone.",
            sourceLessonSlug: "news-attribution",
          },
          {
            prompt: "A rise from 1 to 2 cases is reported as a 100 percent increase. What is missing?",
            options: [
              "The raw numbers, so the reader can see the base",
              "The confidence interval around the estimate",
              "The name of the agency that collected the data",
              "A comparison with a neighbouring jurisdiction",
            ],
            correctIndex: 0,
            explanation:
              "Technically true and misleading. Give the raw numbers alongside the percentage always, and let the reader see how small the base is.",
            sourceLessonSlug: "news-numbers",
          },
          {
            prompt: "What must accompany a claim that something 'doubles your risk'?",
            options: [
              "The name of the journal in which the study appeared",
              "The baseline risk, since doubling a small number stays small",
              "A quotation from a researcher not involved in the study",
              "The sample size of the study population",
            ],
            correctIndex: 1,
            explanation:
              "The percentage describes the relationship and says nothing about magnitude, which is what a reader needs to make any decision. It is the commonest failure in health and safety coverage.",
            sourceLessonSlug: "news-numbers",
          },
          {
            prompt: "Which narrative technique is NOT permitted in journalism?",
            options: [
              "Opening with a scene rather than the outcome",
              "Reporting what a source said they were thinking",
              "Merging several people into one composite character",
              "Using a fragment of a quotation inside your own sentence",
            ],
            correctIndex: 2,
            explanation:
              "However clearly it would communicate. If you need a composite, you are writing something other than journalism and must label it as such.",
            sourceLessonSlug: "news-narrative-temptations",
          },
          {
            prompt: "What is the permission-ladder test for a narrative choice?",
            options: [
              "Whether an editor would approve the technique before publication",
              "Whether the technique appears in award-winning work in the genre",
              "Whether the subject would consent to the framing",
              "Whether you are selecting and arranging, or supplying",
            ],
            correctIndex: 3,
            explanation:
              "Opening with the moment she got the letter is arranging. Describing the weather because it suits the mood, without knowing it, is supplying, which is fiction in reporting's clothes.",
            sourceLessonSlug: "news-narrative-temptations",
          },
          {
            prompt: "What does a good correction contain?",
            options: [
              "What was wrong, what is right, when it appeared, and no excuse",
              "An apology to the subject and an explanation of the process failure",
              "A restatement of the original passage with the error silently fixed",
              "A note that the error was made in good faith under deadline",
            ],
            correctIndex: 0,
            explanation:
              "Due to an editing error is usually true and reads as a shrug. Correct visibly on the piece itself, because quietly editing removes the reader's ability to know what they were told.",
            sourceLessonSlug: "news-corrections",
          },
          {
            prompt: "What raises the bar for naming someone in a story?",
            options: [
              "Whether they hold a position of significant public responsibility",
              "Whether they are a private individual rather than a public official",
              "Whether their name is already available in public records",
              "Whether the story is likely to be widely read and shared",
            ],
            correctIndex: 1,
            explanation:
              "A public official acting in office has accepted scrutiny; a private individual has not. Also ask what naming adds, that publication is permanent, and whether harm falls on family or others.",
            sourceLessonSlug: "news-corrections",
          },
        ],
      },
    },
    {
      slug: "news-capstone",
      title: "10 · Capstone: one story, told twice",
      section: "Module 3 · Close",
      lessonType: "assignment",
      body: `Take one real, verifiable event and write it twice: **once as a straight news story, once as a narrative piece.** The comparison is the assignment.

**Choose material you can actually verify.** A public meeting you attended, a documented local decision, an event with a public record. **Not something you would have to take on trust**, because the point is to practise the discipline of verification rather than to practise writing.

**What to submit.**

**1. The verification note**, first and briefly: what your sources are, which claims rest on which, and what you could not establish. **The last part is not optional.** Every piece has one.

**2. The news version**, 400 to 600 words. Inverted structure. Nut graf present and identifiable, and say which paragraph it is.

**3. The narrative version**, 800 to 1200 words. Scene where the change runs. **Mark every reconstructed detail** and say how it was established.

**4. The six answers**, once, for the underlying event: the change, the owner, want and obstacle, what is withheld and when, the turn. **These should be the same across both versions**, and if they are not, say why.

**5. Where you were tempted.** Name at least one place where a narrative choice would have improved the piece and would have crossed the line. **Everybody has one.** Say what you did instead.

**6. The prevalence question.** If any individual in your piece carries a general claim, give the sentence that establishes how typical they are, or state that you could not establish it.

**7. The harm review.** For anyone named: public or private, what naming adds, and whether you would be comfortable with them reading it. If anyone is a private individual in difficulty, say how you handled consent.

**What a strong submission looks like.** A verification note that admits a gap, a nut graf you can point to, a marked reconstruction, and one honest account of a temptation resisted. **A piece that says "I could not establish this" scores higher than one that quietly implies it was established.**`,
    },
    {
      slug: "news-review-and-sources",
      title: "11 · Cumulative review and sources",
      section: "Module 3 · Close",
      body: `**News may select and arrange, and may not invent.** That permission is larger than it sounds, which is why the ethics of the form are mostly about selection rather than about lying. Almost nobody fabricates; the failures are made of choices.

**Journalism's distinguishing feature is a discipline of verification**: a method for being accurate that can be described and checked.

**The inverted pyramid gives away the outcome and redistributes withholding** to why it matters and how it came about. The nut graf answers "so what," and if you cannot write one you may not have a story.

**A story about a policy is a story about nobody.** Find the person the policy happens to and make the policy the obstacle. Then protect it with a prevalence sentence, come back to the person properly, and make sure their consent was informed.

**Not every event is a story.** Reaching for narrative where none exists is the commonest way to mislead while writing only true sentences.

**Attribute everything not established.** Agree interview terms up front. Anonymity is a cost, and tell the reader why the source is unnamed.

**Quotation: would the speaker recognise it as what they said and meant?** Apply any tidying policy to everybody, because applied selectively it decides who sounds credible.

**Numbers: compared to what, per what, since when, how certain.** Raw numbers beside percentages. A baseline beside any risk. Attribute figures, and do not publish one you cannot explain in a sentence.

**Narrative journalism's four temptations:** the composite, the reconstructed interior, the tidied chronology, and the withheld inconvenience. **The test: am I selecting and arranging, or supplying?**

**Correct visibly.** An error nobody recorded is an error that gets repeated, and a silent edit is worse than the mistake.

:::reveal Without looking back, give the permission-ladder test and one example of each side of it. ||| Am I selecting and arranging, or am I supplying? Selecting and arranging: choosing to open with the moment she received the letter, cutting a quotation with an ellipsis while preserving its meaning, deciding which of three true figures gives the reader the clearest picture. Supplying: describing the weather that day because it suits the mood when you do not know it, narrating what someone was thinking, merging two people into one composite. The first side is craft; the second is fiction wearing reporting's clothes.

## Sources
- Kovach, B., & Rosenstiel, T. (2014). *The elements of journalism: What newspeople should know and the public should expect* (3rd ed.). Three Rivers Press.
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/ethicscode.asp
- City Bureau. (n.d.). *Documenters field guide*. https://fieldguide.documenters.org/`,
    },
  ],
};
