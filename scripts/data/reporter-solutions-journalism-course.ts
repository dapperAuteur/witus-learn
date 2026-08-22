import type { AuthoredCourse } from "./authored-course";

// REPORT-06 · Solutions Journalism, and What It Is Not (plans/68).
//
// plans/68's reason for including it: Free Press Indiana describes itself as solutions-focused, and
// the form is routinely confused with advocacy and with good-news filler. It has an actual method,
// and the method is what this course teaches.
//
// SOURCING. The four qualities are the Solutions Journalism Network's own framing and are attributed
// to it. The course does NOT print audience-effect figures or efficacy statistics: the research
// exists and is growing, this pass could not read the underlying studies against their primaries,
// and a course that quotes an effect size it has not read would be doing the thing REPORT-02 spends
// twelve lessons teaching learners to catch. A source check is filed (report-sojo-evidence) so the
// numbers can be added once verified.
//
// Positive deviance is described as an approach borrowed from public health without asserting
// specific studies, for the same reason.
export const REPORTER_SOLUTIONS_COURSE: AuthoredCourse = {
  title: "Reporter 06: Solutions Journalism, and What It Is Not",
  description:
    "A method, not a mood. Rigorous reporting on responses to problems: the four qualities that define it, the two things it is constantly confused with, how to find a response worth reporting, what counts as evidence of results, why the limitations section is the part that makes it journalism, and how it sits beside accountability reporting on a working beat rather than replacing it.",
  lessons: [
    // ── Section 1 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "what-solutions-journalism-is",
      title: "1 · Rigorous reporting on a response",
      section: "Section 1 · What it is",
      body: `Solutions journalism is reporting about a response to a social problem, held to the same evidentiary standard as any other reporting. That sentence contains the whole argument, and both halves of it are load-bearing.

**The definition, in the form its main proponent uses.** The Solutions Journalism Network describes it as rigorous reporting on responses to social problems (Solutions Journalism Network, n.d.). Rigorous is the operative word. It is not reporting that hopes something works, and it is not reporting that reserves scrutiny for the failures.

**Why the form exists at all.** Accountability reporting establishes that a problem is real, who is responsible, and what has gone wrong. That is indispensable and it is incomplete, because a reader who knows only what is broken has been given a description of a situation and no information about what is possible inside it. Reporting on responses fills a hole that accountability reporting cannot fill by doing more of itself.

**What it is not a replacement for.** Nothing. It sits alongside accountability work on the same beat, and a newsroom that adopts it as a substitute has misunderstood it. The last lesson of this course is about the pairing.

**The failure mode that gives the form a bad name.** A story that describes a program approvingly, quotes the people who run it, and never asks whether it worked. That is a press release with a byline, and it is what most people picture when they hear the phrase. Distinguishing the method from that is most of what this course does.

**Where the track's own discipline shows up.** Everything the verification course taught applies unchanged: the claim that a response works is a factual assertion with a confidence level, and the evidence for it gets decomposed, sourced, and checked exactly like any other claim. A solutions story is not a softer genre with a lower standard. It is frequently harder, because the central claim is causal.

**The one-sentence test to carry through the course.** Does the piece tell the reader something they could use to judge whether the response works, as opposed to something that makes them feel better about it? Everything in the next fifteen lessons is a way of answering that question honestly.

:::reveal What are the two load-bearing halves of the definition? ||| That it reports on a RESPONSE to a social problem, and that it is RIGOROUS, held to the same evidentiary standard as any other reporting.

:::reveal What hole does reporting on responses fill that accountability reporting cannot? ||| A reader who knows only what is broken has a description of a situation and no information about what is possible inside it. More accountability reporting does not supply that.

:::reveal What is the one-sentence test for a solutions story? ||| Does it tell the reader something they could use to judge whether the response works, as opposed to something that makes them feel better about it.

## Vocabulary
- **Solutions journalism**: rigorous reporting on responses to social problems, held to the same evidentiary standard as any other reporting.
- **Response**: the thing being reported on, an attempt to address a problem, as distinct from the problem itself.
- **Accountability reporting**: reporting that establishes a problem is real, who is responsible, and what went wrong.
- **Press release with a byline**: an approving description of a program that never asks whether it worked.

## Sources
- Solutions Journalism Network. (n.d.). *What is solutions journalism?* https://www.solutionsjournalism.org/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "four-qualities",
      title: "2 · Response, insight, evidence, limitations",
      section: "Section 1 · What it is",
      body: `The method is usually stated as four qualities a piece has to carry. They are worth learning as a checklist, because a story missing any one of them is a recognizable failure with a name.

**One: it focuses on a response.** The subject of the piece is an attempt to address a problem, described in enough operational detail that a reader understands how it actually works. Not that a program exists, but what it does on a Tuesday: who does what, to whom, with what, and in what order.

**Two: it offers insight.** The story contains something transferable, the how-to that somebody working on the same problem elsewhere could learn from. This is the quality that separates a profile of an organization from reporting on a response, and it is the one most often missing.

**Three: it provides evidence of results.** Some indication of whether the response is doing what it claims, with the evidence characterized honestly rather than asserted. This is the quality that most often turns out to be weaker than the story implies, which is the next section's subject.

**Four: it discusses limitations.** What the response has not solved, whom it does not reach, what it costs, where it has failed, and what conditions it depends on. A piece without this is a brochure, and the Solutions Journalism Network puts it in the definition precisely because leaving it out is the easiest thing to do.

**Read the four together and notice the shape.** Two of them describe the reporting (a response, in operational detail) and two of them describe the honesty (evidence, and limits). Both pairs are what make the piece journalism rather than promotion, and dropping one of the second pair is how a well-intentioned story becomes the thing the form is accused of being.

**The checklist in practice.** Before filing, mark each of the four in your own draft, in the margin, with the sentence that satisfies it. If you cannot find the sentence, the quality is not there, and writing one that sounds like it is not the same as having reported it.

**A note on where the four came from.** They are the Solutions Journalism Network's framing, and that organization is an advocate for the form. Using somebody's framework and knowing whose it is are compatible, which is the same standard REPORT-02 applied to a mission-driven data compilation.

:::reveal Which of the four qualities separates reporting on a response from a profile of an organization? ||| Insight: something transferable that somebody working on the same problem elsewhere could learn from. It is also the one most often missing.

:::reveal Which two qualities describe the honesty of a solutions piece, and what happens without them? ||| Evidence of results and discussion of limitations. Without them a well-intentioned story becomes promotion, which is exactly what the form is accused of being.

:::reveal What is the practical checklist before filing? ||| Mark each of the four in the margin with the sentence that satisfies it. If you cannot find the sentence, the quality is not there.

## Vocabulary
- **Operational detail**: who does what, to whom, with what, and in what order, as opposed to the fact that a program exists.
- **Insight**: the transferable how-to that makes a response useful to somebody working on the same problem elsewhere.
- **Evidence of results**: an honest characterization of whether the response is doing what it claims.
- **Limitations**: what the response has not solved, whom it misses, what it costs, and what it depends on.

## Sources
- Solutions Journalism Network. (n.d.). *What is solutions journalism?* https://www.solutionsjournalism.org/`,
    },
    {
      slug: "why-a-method",
      title: "3 · Why it is a method and not a mood",
      section: "Section 1 · What it is",
      body: `The most common objection to solutions journalism is that it sounds like a decision to be positive. That objection is answerable, and the answer is that the form is defined by what it requires rather than by how it feels.

**A mood would be a decision about tone.** Write more hopefully, find the good in things, balance the bad news. None of that is checkable, none of it survives an editor asking what the piece establishes, and none of it is what the four qualities describe.

**A method is a set of requirements a piece either meets or does not.** Did you describe the response operationally? Is there something transferable? What is the evidence, and how good is it? What are the limits? Each of those is answerable yes or no by somebody reading the draft, which is exactly what makes it a method.

**The test that settles the argument.** A solutions piece can conclude that the response does not work. That single sentence is what separates the form from advocacy, and it is not hypothetical: reporting rigorously on a response frequently establishes that the evidence is thin, the results are smaller than claimed, or the program works only under conditions nobody else has. Publishing that is a solutions story. It is the same form, correctly executed, reaching a negative finding.

**Which means the form has a failure state that looks like success.** A piece that could not have concluded anything except approval was not reporting. If, at the outset, no available evidence would have changed the story's conclusion, the story was decided before it was reported, and that is the definition of promotion whatever the subject.

**The catalog's own version of this discipline.** REPORT-02 taught reading somebody else's report against the tables underneath it. A solutions story is frequently a report about somebody's program, and the same posture applies: locate the evidence, name what it is, and say what it does not support.

**Why this matters for the beat.** A reporter who covers responses without the method loses the ability to cover them credibly at all, because sources learn that a favorable story is available on request. A reporter known for reporting responses rigorously gets access to the difficult ones, which are the ones worth having.

:::reveal What is the difference between a mood and a method here? ||| A mood is a decision about tone, which nothing checks. A method is a set of requirements a reader can answer yes or no against the draft.

:::reveal What single possibility separates the form from advocacy? ||| That a solutions piece can conclude the response does not work, and publishing that finding is still a solutions story.

:::reveal What is the failure state that looks like success? ||| A piece that could not have concluded anything except approval. If no available evidence would have changed the conclusion, the story was decided before it was reported.

## Vocabulary
- **Method**: a set of requirements a draft either meets or does not, checkable by a reader.
- **Negative finding**: a conclusion that a response does not work, which is a correctly executed solutions story.
- **Decided before reported**: a piece whose conclusion no available evidence could have changed, which is promotion whatever the subject.
- **Access to the difficult ones**: what a reporter known for rigor gets, and what a reporter known for favorable coverage loses.

## Sources
- Solutions Journalism Network. (n.d.). *What is solutions journalism?* https://www.solutionsjournalism.org/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-what-it-is",
      title: "4 · Knowledge check: what it is",
      section: "Section 1 · What it is",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is solutions journalism?",
            options: [
              "Rigorous reporting on responses to social problems",
              "Coverage that balances negative news with positive stories about the same subject",
              "Reporting that recommends a course of action to readers and policymakers",
              "A newsroom slot reserved for uplifting material about the community",
            ],
            correctIndex: 0,
            explanation:
              "Both halves are load-bearing: it reports on a RESPONSE, and it is held to the same evidentiary standard as any other reporting.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "Which word in the definition does the lesson call operative?",
            options: [
              "Rigorous",
              "Social, which limits the form to problems affecting groups rather than individuals",
              "Responses, which excludes reporting on the underlying problem itself",
              "Reporting, which distinguishes it from commentary or analysis",
            ],
            correctIndex: 0,
            explanation:
              "It is not reporting that hopes something works, and it is not reporting that reserves scrutiny for the failures.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "What hole does response reporting fill?",
            options: [
              "What is possible inside a situation",
              "Who is responsible for a problem and what has gone wrong",
              "How large a problem is in comparison with other jurisdictions",
              "Whether a public body has complied with its statutory duties",
            ],
            correctIndex: 0,
            explanation:
              "A reader who knows only what is broken has a description of a situation and no information about what can be done inside it.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "What is solutions journalism a replacement for?",
            options: [
              "Nothing",
              "Accountability reporting, which it supersedes on most beats",
              "Feature writing, which it replaces in the weekend sections",
              "Analysis pieces, which it makes unnecessary once evidence is reported",
            ],
            correctIndex: 0,
            explanation:
              "It sits alongside accountability work on the same beat, and a newsroom that adopts it as a substitute has misunderstood it.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "What does the lesson call a press release with a byline?",
            options: [
              "A story that describes a program approvingly and never asks whether it worked",
              "A story written from a press release without contacting the organization",
              "A story that quotes only the officials who agreed to be interviewed",
              "A story published on the day an organization requested coverage",
            ],
            correctIndex: 0,
            explanation:
              "It is what most people picture when they hear the phrase, and distinguishing the method from it is most of what the course does.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "Why is a solutions story frequently harder than an accountability story?",
            options: [
              "The central claim is causal",
              "Because organizations refuse access more often than institutions do",
              "Because the evidence is usually held by a private body rather than a public one",
              "Because the audience is less interested and the piece must be longer",
            ],
            correctIndex: 0,
            explanation:
              "That a response works is a factual assertion with a confidence level, decomposed and checked exactly like any other claim.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "What is the one-sentence test for a solutions story?",
            options: [
              "Could a reader use it to judge whether the response works",
              "Does it leave the reader more hopeful than when they started reading",
              "Does it describe a program the community would benefit from expanding",
              "Does it give equal space to the problem and to the response",
            ],
            correctIndex: 0,
            explanation:
              "As opposed to giving them something that makes them feel better about it.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "What is the first of the four qualities?",
            options: [
              "It focuses on a response",
              "It offers something transferable to people working elsewhere",
              "It provides some indication of whether the response works",
              "It names what the response has not solved and whom it misses",
            ],
            correctIndex: 0,
            explanation:
              "Described in enough operational detail that a reader understands how it actually works.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "What is operational detail?",
            options: [
              "Who does what, to whom, with what, and in what order",
              "The budget, staffing, and governance structure of an organization",
              "The history of how a program came to be established",
              "The statutory authority under which a program operates",
            ],
            correctIndex: 0,
            explanation:
              "Not that a program exists, but what it does on a Tuesday.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "What is insight, as the second quality?",
            options: [
              "Something transferable that others could learn from",
              "The reporter's own assessment of whether the response deserves support",
              "The context that explains why the problem arose in the first place",
              "The perspective of people who benefited from the response personally",
            ],
            correctIndex: 0,
            explanation:
              "It separates a profile of an organization from reporting on a response, and it is the one most often missing.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "Which quality most often turns out to be weaker than a story implies?",
            options: [
              "Evidence of results",
              "The operational description of what the response does",
              "The transferable insight for people working elsewhere",
              "The discussion of what the response has not solved",
            ],
            correctIndex: 0,
            explanation:
              "Which is why an entire lesson is given to what counts as evidence and how to label the kind you have.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "What does the fourth quality require?",
            options: [
              "What it has not solved, whom it misses, what it costs, and what it depends on",
              "A statement of the reporter's own relationship to the organization",
              "An estimate of what it would take to expand the response nationally",
              "A response from the officials responsible for the underlying problem",
            ],
            correctIndex: 0,
            explanation:
              "A piece without it is a brochure, and it is in the definition precisely because leaving it out is the easiest thing to do.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "How do the four qualities divide?",
            options: [
              "Two describe the reporting and two describe the honesty",
              "Two describe the problem and two describe the response",
              "Three describe content and one describes structure",
              "Two are required and two are optional depending on length",
            ],
            correctIndex: 0,
            explanation:
              "Dropping one of the honesty pair is how a well-intentioned story becomes what the form is accused of being.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "What is the practical checklist before filing?",
            options: [
              "Mark each quality in the margin with the sentence that satisfies it",
              "Confirm that the organization has approved the description of its work",
              "Check that the piece runs no longer than the accountability coverage",
              "Verify that at least three sources support each factual claim",
            ],
            correctIndex: 0,
            explanation:
              "If you cannot find the sentence, the quality is not there, and writing one that sounds like it is not the same as having reported it.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "Whose framework are the four qualities, and what follows?",
            options: [
              "An advocate for the form, and using it while knowing whose it is are compatible",
              "A neutral research body, so the framework carries no point of view",
              "A newsroom consortium, so it reflects working practice rather than theory",
              "A regulator, so compliance with it is a professional requirement",
            ],
            correctIndex: 0,
            explanation:
              "The same standard REPORT-02 applied to a mission-driven data compilation: provenance tells you what to check first.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "What is the most common objection to solutions journalism?",
            options: [
              "That it sounds like a decision to be positive",
              "That it duplicates the work of the features desk",
              "That it requires access newsrooms cannot obtain",
              "That it is too expensive for a local outlet to produce",
            ],
            correctIndex: 0,
            explanation:
              "The answer is that the form is defined by what it requires rather than by how it feels.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "What would a mood be, in this lesson's terms?",
            options: [
              "A decision about tone",
              "A commitment to publish one response story per month",
              "A rule that every problem story carries a response paragraph",
              "An editorial policy favoring local subjects over national ones",
            ],
            correctIndex: 0,
            explanation:
              "None of it is checkable, and none of it survives an editor asking what the piece establishes.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "What makes the four qualities a method?",
            options: [
              "Each is answerable yes or no by somebody reading the draft",
              "Each is required by the professional code of ethics",
              "Each has been validated in peer-reviewed research",
              "Each is enforced by editors before a piece is published",
            ],
            correctIndex: 0,
            explanation:
              "Which is exactly the difference between a set of requirements and a preference about tone.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "What single possibility separates the form from advocacy?",
            options: [
              "A solutions piece can conclude the response does not work",
              "A solutions piece may decline to name the organization involved",
              "A solutions piece can be published without seeking comment",
              "A solutions piece may report a problem without any response at all",
            ],
            correctIndex: 0,
            explanation:
              "It is not hypothetical: rigorous reporting frequently establishes that evidence is thin, results are smaller than claimed, or conditions are unusual.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "What is the failure state that looks like success?",
            options: [
              "A piece that could not have concluded anything except approval",
              "A piece that concludes the response does not work",
              "A piece that runs longer than the desk allocated",
              "A piece whose evidence section is labeled by kind",
            ],
            correctIndex: 0,
            explanation:
              "If no available evidence would have changed the conclusion, the story was decided before it was reported.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "What does a reporter lose by covering responses without the method?",
            options: [
              "The ability to cover them credibly at all",
              "The support of the newsroom's accountability desk",
              "Access to the organizations running the responses",
              "The right to publish under the solutions label",
            ],
            correctIndex: 0,
            explanation:
              "Sources learn that a favorable story is available on request, which is the opposite of what makes a beat valuable.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "What does a reporter known for reporting responses rigorously gain?",
            options: [
              "Access to the difficult ones",
              "A larger audience for each published piece",
              "Faster responses to routine records requests",
              "An exemption from the outlet's legal review",
            ],
            correctIndex: 0,
            explanation:
              "Which are the ones worth having, and which are unavailable to somebody whose coverage is known to be favorable.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "Which earlier course does the lesson say applies unchanged to a solutions story?",
            options: [
              "Verification on Deadline",
              "Public Records, because responses are documented in filings",
              "Interviewing People Who Did Not Seek This, because participants are always unsought",
              "The Law You Work Inside, because programs threaten litigation",
            ],
            correctIndex: 0,
            explanation:
              "The claim that a response works is a factual assertion with a confidence level, decomposed and checked like any other.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "Which posture does REPORT-02 lend to a solutions story?",
            options: [
              "Locate the evidence, name what it is, and say what it does not support",
              "Read the executive summary first so the framing is clear",
              "Publish the page numbers of every document consulted",
              "Treat the publisher's own account as the primary source",
            ],
            correctIndex: 0,
            explanation:
              "A solutions story is frequently a report about somebody's program, and a program's own description is a claim with a table underneath it.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "What is a negative finding, in this form?",
            options: [
              "A correctly executed solutions story",
              "An accountability story published under a solutions label",
              "A piece that fails the four qualities and must be rewritten",
              "A conclusion that no response to the problem exists",
            ],
            correctIndex: 0,
            explanation:
              "The same form, correctly executed, reaching the conclusion that the response does not work.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "What does the lesson say the second half of the definition prevents?",
            options: [
              "Reserving scrutiny for the failures",
              "Reporting on responses that have not yet launched",
              "Covering responses outside the reporter's own jurisdiction",
              "Quoting the people who run a response at any length",
            ],
            correctIndex: 0,
            explanation:
              "Rigorous means the same evidentiary standard applies whether the finding is favorable or not.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "What does accountability reporting establish?",
            options: [
              "That a problem is real, who is responsible, and what went wrong",
              "What is possible inside a situation and under what conditions",
              "Which response has produced the strongest measured results",
              "How a problem compares against other jurisdictions",
            ],
            correctIndex: 0,
            explanation:
              "Indispensable and incomplete, which is the argument for the response form rather than against accountability work.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "Which quality does a story about how hard people are trying most obviously fail?",
            options: [
              "Insight",
              "Evidence of results",
              "Focus on a response",
              "Discussion of limitations",
            ],
            correctIndex: 0,
            explanation:
              "There is nothing transferable in somebody else's dedication, which is why the mechanism has to be the subject.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "What does the lesson say about writing a sentence that sounds like a quality?",
            options: [
              "It is not the same as having reported it",
              "It satisfies the checklist if an editor accepts it",
              "It is acceptable where space prevents full treatment",
              "It should be flagged for the reader in a closing note",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the margin check asks for the sentence that satisfies each quality rather than a general impression.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "What is the relationship between the form and how a piece feels?",
            options: [
              "None, because it is defined by what it requires",
              "Direct, because the form exists to change the reader's mood",
              "Inverse, because rigorous pieces read as pessimistic",
              "Conditional on whether the finding is favorable",
            ],
            correctIndex: 0,
            explanation:
              "A mood is a decision about tone. A method is a set of requirements a draft meets or does not.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "Which four questions are the method, in checklist form?",
            options: [
              "Operational description, transferability, evidence, and limits",
              "Problem, response, reaction, and recommendation",
              "Who, what, where, and when",
              "Source, date, location, and motivation",
            ],
            correctIndex: 0,
            explanation:
              "Source, date, location, and motivation is the provenance checklist from the verification course instead, which is a different tool for a different job.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "What does the lesson say about a program working only under conditions nobody else has?",
            options: [
              "It is a finding that rigorous reporting frequently produces",
              "It disqualifies the response from being reported at all",
              "It should be omitted unless a reader asks about transferability",
              "It converts the piece into an accountability story",
            ],
            correctIndex: 0,
            explanation:
              "Publishing that is a solutions story, which is what makes the form a method rather than advocacy.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "What is a response, as the course uses the word?",
            options: [
              "An attempt to address a problem",
              "A statement issued by an institution after criticism",
              "A reader's reaction to published coverage",
              "An organization's reply to a request for comment",
            ],
            correctIndex: 0,
            explanation:
              "It is the subject of the piece, as distinct from the problem itself.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "How long should the reader understand the response to work?",
            options: [
              "Well enough to picture what happens on a Tuesday",
              "Well enough to summarize the organization's mission statement",
              "Well enough to identify the officials responsible for it",
              "Well enough to estimate its annual operating budget",
            ],
            correctIndex: 0,
            explanation:
              "Operational detail is the first quality, and it is what a reader needs before any evidence can mean anything.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "What does the course say about using an advocate's framework?",
            options: [
              "Using it and knowing whose it is are compatible",
              "It should be avoided in favor of a neutral definition",
              "It requires a disclosure at the head of every piece",
              "It disqualifies the resulting work from being called reporting",
            ],
            correctIndex: 0,
            explanation:
              "Provenance tells you what to check first rather than what the answer will be, which is the report-reading course's rule.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "Which quality is the longest section of a well-built piece?",
            options: [
              "The operational description",
              "The evidence of results",
              "The limitations and conditions",
              "The account of the underlying problem",
            ],
            correctIndex: 0,
            explanation:
              "It carries the insight, which is the quality that makes the piece useful to somebody working on the same problem elsewhere.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "What does a reader get from a piece that satisfies only the first two qualities?",
            options: [
              "A description they cannot evaluate",
              "A complete solutions story, since the honesty pair is optional",
              "An accountability story about the underlying problem",
              "A profile of the organization running the response",
            ],
            correctIndex: 0,
            explanation:
              "The evidence and limitations pair is what makes the piece journalism rather than promotion.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "What does the course say about a newsroom that adopts the form as a substitute?",
            options: [
              "It has misunderstood it",
              "It has applied the method correctly at the institutional level",
              "It has followed the Solutions Journalism Network's own guidance",
              "It will produce more credible accountability coverage as a result",
            ],
            correctIndex: 0,
            explanation:
              "The form sits alongside accountability work on the same beat, which is the subject of the course's last lesson.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "What kind of assertion is the claim that a response works?",
            options: [
              "A factual assertion with a confidence level",
              "An editorial judgment outside the scope of verification",
              "An opinion protected from challenge if attributed",
              "A characterization that requires no independent support",
            ],
            correctIndex: 0,
            explanation:
              "Which is why everything the verification course taught applies without modification.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "Why does the course spend so much time on what the form is not?",
            options: [
              "The failure mode is what most people picture when they hear the phrase",
              "Because the professional code requires the distinction to be drawn",
              "Because editors reject pieces that do not state the distinction",
              "Because the form has no positive definition of its own",
            ],
            correctIndex: 0,
            explanation:
              "A story that describes a program approvingly and never asks whether it worked is what the label has come to suggest.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "What does the checklist ask you to write in the margin?",
            options: [
              "The sentence that satisfies each quality",
              "The source who supplied each fact",
              "The confidence level of each claim",
              "The word count of each section",
            ],
            correctIndex: 0,
            explanation:
              "Four marks, before filing, and the absence of a mark is the finding.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "What does the lesson call the quality most often missing?",
            options: [
              "Insight",
              "Evidence",
              "Limitations",
              "Operational detail",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a profile of an organization is the most common thing mistaken for a solutions story.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "What is the honest reason a reporter should not fear a negative finding?",
            options: [
              "It is the same form correctly executed",
              "Editors prefer negative findings because they attract more readers",
              "It exempts the piece from the limitations requirement",
              "It converts the piece into accountability coverage",
            ],
            correctIndex: 0,
            explanation:
              "And the possibility of one is what makes the whole form distinguishable from advocacy.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "What does the lesson say about how sources treat a reporter who publishes favorable coverage on request?",
            options: [
              "They learn a favorable story is available",
              "They provide more candid access to internal material",
              "They refer the reporter to other organizations doing similar work",
              "They accept tougher questions in exchange for the coverage",
            ],
            correctIndex: 0,
            explanation:
              "Which is how the ability to cover responses credibly is lost, rather than how it is built.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "Which sentence would fail the one-sentence test?",
            options: [
              "The volunteers say the work has changed their view of the neighborhood",
              "Waiting times fell from eleven weeks to four across the pilot period",
              "The program serves people the county's own system had excluded",
              "The county's own figures show the change did not persist after year two",
            ],
            correctIndex: 0,
            explanation:
              "It tells a reader how somebody feels rather than anything they could use to judge whether the response works.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "What does the course say a reader has been given by accountability coverage alone?",
            options: [
              "A description of a situation",
              "A complete account of what can be done about it",
              "An argument for a particular course of action",
              "The evidence needed to evaluate a response",
            ],
            correctIndex: 0,
            explanation:
              "And no information about what is possible inside it, which is the hole the response form fills.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "Which of the four qualities does an announcement of a new program satisfy least?",
            options: [
              "Evidence of results",
              "Focus on a response",
              "Insight",
              "Operational detail",
            ],
            correctIndex: 0,
            explanation:
              "Nothing has happened yet, which is the reason the announcement is named as one of the imposters later in the course.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "How does the lesson describe the relationship between rigor and finding?",
            options: [
              "Rigor governs the standard, not the direction of the conclusion",
              "Rigor makes a favorable finding more likely to be publishable",
              "Rigor is required only where the finding is unfavorable",
              "Rigor determines whether a piece qualifies for the solutions label",
            ],
            correctIndex: 0,
            explanation:
              "The same evidentiary standard applies whether the response turns out to work or not.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
        ],
      },
    },
    // ── Section 2 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "not-advocacy",
      title: "5 · Not advocacy",
      section: "Section 2 · What it is not",
      body: `The first confusion is with advocacy, and it is the more serious of the two because the two forms can produce sentences that look identical.

**What advocacy does.** It selects evidence to support a position, argues for a course of action, and measures its success by whether the reader is persuaded. Advocacy is legitimate work and a great deal of it is honest. It is a different job with different obligations, and the difference is not tone.

**What reporting does with the same material.** It selects evidence by what is available and relevant, states what the evidence supports and what it does not, and measures success by whether the reader can now judge for themselves. A solutions story and an advocacy piece can describe the same program in the same words and be doing opposite things.

**Three tests that separate them in practice.** Would the piece have run unchanged if the evidence had come out the other way? Does the piece report the strongest available objection, from somebody who holds it, rather than a weak version the writer chose? And could a reader who disagrees with the response's politics still learn something from the piece about how it works?

**The specific trap on a beat.** A reporter who spends months on a subject develops views, which is normal and mostly useful. The problem arrives when the reporter's view becomes the story's structure: the response is introduced as promising, the doubters appear late and briefly, and the ending resolves in favor. Nothing in that piece is false and the whole shape is an argument.

**The disclosure question, which this track has already answered once.** REPORT-00 carries a disclosure because the author does documentation work for the organization Free Press Indiana sits under. The same rule applies to a solutions story: if you have a relationship with the response, its funders, or the people running it, say so in the piece. It is one line, and it is what lets a reader weigh what follows.

**And the honest concession.** Choosing to report on responses at all is a decision about what deserves attention, which is an editorial judgment with a direction to it. Acknowledging that is not a concession that the form is advocacy. It is the same acknowledgment any beat makes about why it covers what it covers, and the beat-memo lesson in REPORT-00 already required writing it down.

:::reveal Name the three tests that separate a solutions story from advocacy. ||| Would it have run unchanged had the evidence come out the other way. Does it report the strongest available objection from somebody who holds it. And could a reader who disagrees politically still learn how the response works.

:::reveal What is the trap for a reporter who has covered a subject for months? ||| Their view becomes the story's structure: the response is introduced as promising, doubters appear late and briefly, and the ending resolves in favor. Nothing is false and the shape is an argument.

:::reveal What does this course require if you have a relationship with the response or its funders? ||| Say so in the piece. It is one line, and it is what lets a reader weigh what follows, which is the same rule the track's first course applied to itself.

## Vocabulary
- **Advocacy**: work that selects evidence to support a position and succeeds by persuading, which is legitimate and is a different job.
- **The reversal test**: whether the piece would have run unchanged had the evidence come out the other way.
- **Strongest objection**: the best version of the case against, from somebody who actually holds it.
- **Structural argument**: a piece in which the ordering rather than any sentence carries the persuasion.

## Sources
- Solutions Journalism Network. (n.d.). *What is solutions journalism?* https://www.solutionsjournalism.org/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "not-good-news",
      title: "6 · Not good-news filler",
      section: "Section 2 · What it is not",
      body: `The second confusion is with the feel-good story, and it is more common than the first because it is easier to produce and nobody objects to it.

**What good-news filler is.** A piece whose purpose is the reader's mood. It usually features a person doing something admirable, it rarely names a problem precisely, it almost never contains evidence, and it is structurally unfalsifiable because there is no claim in it to be wrong about.

**Why it is not harmless.** It occupies the space a response story would occupy, it teaches an audience that coverage of anything working is decorative, and it makes the credible version harder to publish because editors have learned that this kind of piece is what the category means.

**Three differences you can see in a draft.** A solutions story names a specific problem with a measurable dimension; filler names a general condition. A solutions story explains a mechanism; filler describes an effort. A solutions story reports results and limits; filler ends on a quotation about hope.

**The individual-versus-mechanism distinction, which does most of the work.** Filler is usually about a person. Reporting on a response is usually about a mechanism that persists whether or not that person is present. When you find yourself writing about somebody's dedication, ask what would happen to the results if they left, and report that instead.

**Where the confusion becomes an editorial problem.** Newsrooms sometimes create a recurring slot for uplifting content and then file solutions reporting into it, which mislabels the work to the audience and to the desk. A response story belongs on the beat it concerns, next to the accountability coverage of the same subject, and this is worth arguing for by name.

**One honest complication.** A well-reported response story is often genuinely encouraging, and that is fine. The distinction is not between hopeful and grim, it is between a piece whose claims can be checked and a piece with no claims in it. A reader who finishes your story better informed and also more hopeful has not been given filler.

:::reveal What makes good-news filler structurally unfalsifiable? ||| There is no claim in it to be wrong about. It names a general condition rather than a specific problem and contains no evidence.

:::reveal Give the three differences visible in a draft. ||| A specific problem with a measurable dimension rather than a general condition, a mechanism rather than an effort, and results and limits rather than a closing quotation about hope.

:::reveal What question converts a story about a dedicated individual into a story about a response? ||| What would happen to the results if that person left. Report the mechanism that persists rather than the dedication that may not.

## Vocabulary
- **Good-news filler**: a piece whose purpose is the reader's mood, with no checkable claim in it.
- **Mechanism versus effort**: what a response actually does, as opposed to how hard somebody is trying.
- **Slot mislabeling**: filing solutions reporting into an uplifting-content slot, which misrepresents it to the audience and the desk.
- **Encouraging and checkable**: the combination a well-reported response story often has, which filler never does.

## Sources
- Solutions Journalism Network. (n.d.). *What is solutions journalism?* https://www.solutionsjournalism.org/`,
    },
    {
      slug: "imposters",
      title: "7 · The imposters, and how to spot one in your own draft",
      section: "Section 2 · What it is not",
      body: `Between advocacy and filler sit several pieces that look like solutions journalism from a distance and fail one specific requirement. Naming them makes them easy to catch in your own work, which is the only place you can catch them in time.

**The hero.** A profile of a person who is doing admirable work, in which the person is the subject and the response is background. It fails the insight requirement, because what is transferable about an exceptional individual is usually nothing. The fix is to report the mechanism and let the person appear inside it.

**The silver bullet.** A response presented as the answer to a problem, with scale and conditions unexamined. It fails the limitations requirement. Nearly every response that works does so under conditions, and a piece that does not name them has told a reader something false about transferability while stating nothing false.

**The announcement.** A new program, a launch, a pilot, a commitment, reported as though it were a response. It fails the evidence requirement completely, because nothing has happened yet. Announcements are legitimate news and they are not solutions stories, and calling them one degrades the category.

**The afterthought.** An accountability story with a hopeful paragraph attached at the end, usually because somebody asked for balance. It fails everything: the response is not described operationally, there is no evidence, and the reader learns nothing they can use.

**The favor.** A piece produced because a funder, an advertiser, a partner, or an organization the outlet has a relationship with asked for coverage. It can satisfy the four qualities on paper and it is still the thing the form is accused of being, which is why the disclosure rule in the previous lesson is not optional.

**How to catch one before filing.** Ask which of the four qualities the piece is thinnest on and be honest about the answer, because the imposters are each defined by a single missing quality. Then ask the question that catches the fifth: who wanted this story to exist, and would I have found it without them.

:::reveal Which quality does the hero story fail, and why? ||| Insight. What is transferable about an exceptional individual is usually nothing, so the fix is to report the mechanism and let the person appear inside it.

:::reveal What is false about a silver-bullet story that contains no false sentences? ||| Its implication about transferability. Nearly every response that works does so under conditions, and not naming them tells the reader something untrue while stating nothing untrue.

:::reveal What question catches the favor, which the four qualities cannot? ||| Who wanted this story to exist, and would I have found it without them.

## Vocabulary
- **The hero**: a profile in which the person is the subject and the response is background, failing insight.
- **The silver bullet**: a response presented as the answer with scale and conditions unexamined, failing limitations.
- **The announcement**: a launch or pilot reported as a response, failing evidence because nothing has happened yet.
- **The favor**: a piece produced because somebody with a relationship to the outlet asked for it.

## Sources
- Solutions Journalism Network. (n.d.). *What is solutions journalism?* https://www.solutionsjournalism.org/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-what-it-is-not",
      title: "8 · Knowledge check: what it is not",
      section: "Section 2 · What it is not",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Why is the confusion with advocacy the more serious of the two?",
            options: [
              "The two forms can produce sentences that look identical",
              "Because advocacy organizations produce more material than newsrooms",
              "Because advocacy is prohibited by the professional code of ethics",
              "Because advocacy pieces are more likely to attract legal challenge",
            ],
            correctIndex: 0,
            explanation:
              "A solutions story and an advocacy piece can describe the same program in the same words and be doing opposite things.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "How does advocacy select evidence and measure success?",
            options: [
              "By what supports a position, and by whether the reader is persuaded",
              "By what is available and relevant, and by whether the reader can judge",
              "By what the funder requires, and by whether the funder renews",
              "By what is easiest to obtain, and by how quickly it can be published",
            ],
            correctIndex: 0,
            explanation:
              "Advocacy is legitimate work and much of it is honest. It is a different job with different obligations, and the difference is not tone.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "How does reporting measure success with the same material?",
            options: [
              "By whether the reader can now judge for themselves",
              "By whether the response receives more support afterward",
              "By whether the organization considers the piece accurate",
              "By whether other outlets follow the story",
            ],
            correctIndex: 0,
            explanation:
              "It selects evidence by availability and relevance and states what the evidence supports and what it does not.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "What is the reversal test?",
            options: [
              "Would the piece have run unchanged had the evidence come out the other way",
              "Would the response's opponents accept the piece as fair",
              "Would the reporter publish the same piece at another outlet",
              "Would the organization have cooperated had the finding been negative",
            ],
            correctIndex: 0,
            explanation:
              "It is the first of the three tests separating a solutions story from an advocacy piece.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "What does the second test require about objections?",
            options: [
              "The strongest available one, from somebody who holds it",
              "At least two objections, balanced against two endorsements",
              "An objection from an official body rather than an individual",
              "An objection the reporter can rebut within the piece",
            ],
            correctIndex: 0,
            explanation:
              "Rather than a weak version the writer chose, which is the form the structural argument takes.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "What is the third test?",
            options: [
              "Could a reader who disagrees politically still learn how the response works",
              "Could the piece be published in an advocacy outlet unchanged",
              "Could the response be replicated from the description given",
              "Could the reporter defend every sentence to a lawyer",
            ],
            correctIndex: 0,
            explanation:
              "It is the test that catches a piece whose usefulness depends on the reader already agreeing with it.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "What is a structural argument?",
            options: [
              "A piece in which the ordering rather than any sentence carries the persuasion",
              "A piece that states its argument in the opening paragraph",
              "A piece whose sections follow the four qualities in order",
              "A piece that argues for a specific policy change",
            ],
            correctIndex: 0,
            explanation:
              "The response is introduced as promising, the doubters appear late and briefly, and the ending resolves in favor. Nothing is false.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "What does the course require if you have a relationship with the response or its funders?",
            options: [
              "Say so in the piece",
              "Decline the assignment and pass it to a colleague",
              "Disclose it to your editor but not to readers",
              "Obtain written approval from the outlet before proceeding",
            ],
            correctIndex: 0,
            explanation:
              "One line, and it is what lets a reader weigh what follows. It is the same rule REPORT-00 applied to itself.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "What does the course concede about choosing to report on responses at all?",
            options: [
              "It is an editorial judgment with a direction to it",
              "It makes the resulting work a form of advocacy",
              "It requires the outlet to publish a disclaimer",
              "It is neutral, because coverage decisions carry no direction",
            ],
            correctIndex: 0,
            explanation:
              "Acknowledging it is the same acknowledgment any beat makes about why it covers what it covers, which the beat memo already required writing down.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "What is good-news filler?",
            options: [
              "A piece whose purpose is the reader's mood",
              "A piece reporting a response with weak evidence of results",
              "A piece about a problem that has recently improved",
              "A piece written from an organization's own materials",
            ],
            correctIndex: 0,
            explanation:
              "It usually features a person doing something admirable, rarely names a problem precisely, and almost never contains evidence.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "Why is good-news filler structurally unfalsifiable?",
            options: [
              "There is no claim in it to be wrong about",
              "Because its sources are always anonymous",
              "Because it is published outside the news section",
              "Because it describes intentions rather than actions",
            ],
            correctIndex: 0,
            explanation:
              "Which is why it cannot be corrected, cannot be checked, and cannot teach a reader anything.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "Why is filler not harmless?",
            options: [
              "It occupies the space a response story would occupy",
              "It exposes the outlet to complaints from the people featured",
              "It costs more to produce than accountability reporting",
              "It cannot be indexed by search and wastes archive space",
            ],
            correctIndex: 0,
            explanation:
              "It also teaches an audience that coverage of anything working is decorative, and makes the credible version harder to publish.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "How does a solutions story name a problem, compared with filler?",
            options: [
              "With a measurable dimension rather than as a general condition",
              "In the headline rather than the body",
              "Through a quotation rather than in the reporter's voice",
              "By reference to a statutory duty rather than an outcome",
            ],
            correctIndex: 0,
            explanation:
              "It is the first of the three differences visible in a draft, with mechanism versus effort and results versus a hopeful closing quotation.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "What is the mechanism-versus-effort distinction?",
            options: [
              "What a response actually does, as opposed to how hard somebody is trying",
              "How a program is funded, as opposed to how it is staffed",
              "What a program intends, as opposed to what it achieves",
              "Who benefits from a response, as opposed to who runs it",
            ],
            correctIndex: 0,
            explanation:
              "Filler describes an effort. Reporting on a response explains a mechanism that persists whether or not one person is present.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "What question converts a story about a dedicated individual into a response story?",
            options: [
              "What would happen to the results if they left",
              "How long have they been doing this work",
              "Who else is doing the same thing elsewhere",
              "What made them start in the first place",
            ],
            correctIndex: 0,
            explanation:
              "Report the mechanism that persists rather than the dedication that may not.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "What is slot mislabeling?",
            options: [
              "Filing solutions reporting into an uplifting-content slot",
              "Publishing a response story before the accountability coverage",
              "Running a piece under a section heading the desk chose",
              "Labeling a piece as analysis rather than as news",
            ],
            correctIndex: 0,
            explanation:
              "A response story belongs on the beat it concerns, next to the accountability coverage of the same subject.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "What is the honest complication about hopefulness?",
            options: [
              "A well-reported response story is often genuinely encouraging, and that is fine",
              "A hopeful piece cannot satisfy the evidence requirement",
              "A hopeful piece must be balanced with a critical one",
              "A hopeful piece belongs in the features section rather than on the beat",
            ],
            correctIndex: 0,
            explanation:
              "The distinction is not between hopeful and grim, it is between a piece whose claims can be checked and a piece with no claims in it.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "What is the hero imposter, and which quality does it fail?",
            options: [
              "A profile in which the person is the subject, failing insight",
              "A story about a program's founder, failing evidence",
              "A story about a large organization, failing operational detail",
              "A story about an award recipient, failing limitations",
            ],
            correctIndex: 0,
            explanation:
              "What is transferable about an exceptional individual is usually nothing, so the fix is to report the mechanism and let the person appear inside it.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "What is the silver bullet, and which quality does it fail?",
            options: [
              "A response presented as the answer, failing limitations",
              "A response with no measurable outcome, failing evidence",
              "A response nobody has replicated, failing insight",
              "A response described only in the abstract, failing operational detail",
            ],
            correctIndex: 0,
            explanation:
              "Nearly every response that works does so under conditions, and a piece that does not name them tells a reader something false while stating nothing false.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "What is the announcement, and which quality does it fail completely?",
            options: [
              "A launch or pilot reported as a response, failing evidence",
              "A funding award reported as an outcome, failing insight",
              "A policy proposal reported as a program, failing operational detail",
              "A partnership reported as a result, failing limitations",
            ],
            correctIndex: 0,
            explanation:
              "Nothing has happened yet. Announcements are legitimate news and are not solutions stories, and calling them one degrades the category.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "What is the afterthought?",
            options: [
              "An accountability story with a hopeful paragraph attached",
              "A response story with the limitations added during editing",
              "A follow-up published after the original piece has run",
              "A correction appended to a piece about a program",
            ],
            correctIndex: 0,
            explanation:
              "Usually added because somebody asked for balance. It fails everything, and the reader learns nothing they can use.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "What is the favor, and why do the four qualities not catch it?",
            options: [
              "A piece produced because somebody with a relationship asked, and it can satisfy them on paper",
              "A piece written from a press release, and the qualities do not address sourcing",
              "A piece published without evidence, and the qualities do not require verification",
              "A piece about a funder's own program, and the qualities do not require disclosure",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the disclosure rule in the previous lesson is not optional, and why the extra question is who wanted this story to exist.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "What is the question that catches the favor?",
            options: [
              "Who wanted this story to exist, and would I have found it without them",
              "Who paid for the evidence the piece relies on",
              "Who else at the outlet has covered this organization",
              "Who approved the assignment and on what schedule",
            ],
            correctIndex: 0,
            explanation:
              "The four qualities cannot catch it, because a favor can satisfy all four on paper.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "How are the imposters each defined?",
            options: [
              "By a single missing quality",
              "By the source who supplied the story",
              "By the section of the paper they run in",
              "By the length of the finished piece",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the pre-filing question is which quality the piece is thinnest on, answered honestly.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "Where is the only place you can catch an imposter in time?",
            options: [
              "In your own draft",
              "In the editing process at the desk",
              "In the reader responses after publication",
              "In the organization's reaction to the piece",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the imposters are named: it makes them easy to recognize in your own work.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "What is the fix for a hero story?",
            options: [
              "Report the mechanism and let the person appear inside it",
              "Interview a second individual doing similar work",
              "Add an evidence paragraph about the person's results",
              "Move the profile to the features section",
            ],
            correctIndex: 0,
            explanation:
              "Because the transferable insight lives in the mechanism, not in an exceptional person's qualities.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "Which imposter states nothing false and still misleads?",
            options: [
              "The silver bullet",
              "The announcement",
              "The afterthought",
              "The hero",
            ],
            correctIndex: 0,
            explanation:
              "Its implication about transferability is what is false, because the conditions the response depends on go unnamed.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "What does the course say about announcements as news?",
            options: [
              "They are legitimate news and are not solutions stories",
              "They should not be published until results exist",
              "They may be published under the solutions label with a caveat",
              "They belong to the accountability desk rather than the beat",
            ],
            correctIndex: 0,
            explanation:
              "Calling an announcement a solutions story degrades the category for the pieces that have actually reported results.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "Which imposter is usually produced by a request for balance?",
            options: [
              "The afterthought",
              "The favor",
              "The silver bullet",
              "The hero",
            ],
            correctIndex: 0,
            explanation:
              "An accountability story with a hopeful paragraph attached at the end, which satisfies nothing.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "What does the lesson say about the difference between advocacy and reporting?",
            options: [
              "It is not tone",
              "It is the length of the finished piece",
              "It is whether the writer holds a view",
              "It is whether the subject is a nonprofit",
            ],
            correctIndex: 0,
            explanation:
              "Both can describe the same program in the same words while doing opposite things, which is why the three tests are about structure and evidence.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "What does the course say about a reporter developing views on a long-covered subject?",
            options: [
              "It is normal and mostly useful",
              "It disqualifies them from covering responses on that beat",
              "It requires disclosure in every subsequent piece",
              "It should be corrected by rotating the beat annually",
            ],
            correctIndex: 0,
            explanation:
              "The problem arrives when the view becomes the story's structure rather than when it exists.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "What does filler usually end on?",
            options: [
              "A quotation about hope",
              "A statement of the evidence available",
              "A description of what the response has not solved",
              "A question directed at the responsible institution",
            ],
            correctIndex: 0,
            explanation:
              "A solutions story ends on results and limits, which is the third of the three differences visible in a draft.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "What has a reader been given by a piece with no checkable claim?",
            options: [
              "Filler, whatever its subject",
              "A response story with weak evidence",
              "An accountability story without a named institution",
              "An analysis piece rather than a news piece",
            ],
            correctIndex: 0,
            explanation:
              "A reader who finishes better informed and also more hopeful has not been given filler; a reader who finishes only more hopeful has.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "What does the course say a piece needs before it can be corrected?",
            options: [
              "A claim in it to be wrong about",
              "A named source willing to stand behind it",
              "A published evidence section",
              "An editor's approval of the framing",
            ],
            correctIndex: 0,
            explanation:
              "Which is why unfalsifiable filler is a category error rather than merely a weak story.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "Which two things does the course say a response story sits beside on a beat?",
            options: [
              "The accountability coverage of the same subject",
              "The features desk's weekend material",
              "The outlet's opinion pages",
              "The wire coverage of the same problem",
            ],
            correctIndex: 0,
            explanation:
              "Which is why slot mislabeling misrepresents the work to the audience and to the desk.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "What does an advocacy piece do that a solutions story does not?",
            options: [
              "Select evidence to support a position",
              "Describe a program in operational detail",
              "Quote people who run a response",
              "Report an outcome measure",
            ],
            correctIndex: 0,
            explanation:
              "Reporting selects by availability and relevance and then states what the evidence supports and what it does not.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "What is the weak version of an objection?",
            options: [
              "One the writer chose rather than one somebody holds",
              "One raised by an anonymous source",
              "One that appears after the evidence section",
              "One the reporter can answer in a sentence",
            ],
            correctIndex: 0,
            explanation:
              "The second test asks for the strongest available objection from somebody who actually holds it.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "What does the disclosure rule owe its shape to?",
            options: [
              "The disclosure REPORT-00 carries about the author's own relationships",
              "The professional code's conflict provisions alone",
              "The outlet's advertising policy",
              "A statutory requirement in most states",
            ],
            correctIndex: 0,
            explanation:
              "One line, in the piece, so a reader can weigh what follows.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "How does the course describe advocacy as work?",
            options: [
              "Legitimate, and a different job with different obligations",
              "Illegitimate, and prohibited by the professional code",
              "Identical to reporting except in tone",
              "Acceptable where the subject is a public problem",
            ],
            correctIndex: 0,
            explanation:
              "A great deal of it is honest. The distinction is about what the work is for, not about whether it is respectable.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "Why is filler easier to produce than a response story?",
            options: [
              "It requires no evidence and nobody objects to it",
              "It requires access that organizations grant freely",
              "It requires fewer words to reach a publishable length",
              "It requires only one source rather than four",
            ],
            correctIndex: 0,
            explanation:
              "Which is why it is more common than the confusion with advocacy, and why it makes the credible version harder to publish.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "What does the pre-filing imposter check ask first?",
            options: [
              "Which of the four qualities the piece is thinnest on",
              "Whether the organization has reviewed the description",
              "Whether an editor would accept the framing",
              "Whether the piece is longer than the accountability coverage",
            ],
            correctIndex: 0,
            explanation:
              "Answered honestly, because the imposters are each defined by a single missing quality.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "What does a favor look like on paper?",
            options: [
              "A piece that satisfies all four qualities",
              "A piece missing the evidence quality",
              "A piece missing the limitations quality",
              "A piece with no named sources",
            ],
            correctIndex: 0,
            explanation:
              "And it is still the thing the form is accused of being, which is why the origin question exists alongside the four.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "What does the course say the imposters sit between?",
            options: [
              "Advocacy and filler",
              "News and features",
              "Accountability and analysis",
              "Reporting and commentary",
            ],
            correctIndex: 0,
            explanation:
              "Each looks like solutions journalism from a distance and fails one specific requirement.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "What does naming the imposters make possible?",
            options: [
              "Catching one in your own draft",
              "Rejecting pitches from organizations at the desk",
              "Labeling published pieces for readers",
              "Measuring an outlet's coverage mix over a year",
            ],
            correctIndex: 0,
            explanation:
              "Which is the only place you can catch one in time.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "Which is the correct description of a piece whose doubters appear late and briefly?",
            options: [
              "A structural argument",
              "A balanced treatment of a contested response",
              "A correctly ordered solutions story",
              "An accountability story with a response element",
            ],
            correctIndex: 0,
            explanation:
              "Nothing in it is false and the whole shape is an argument, which is what the three tests are designed to expose.",
            sourceLessonSlug: "not-advocacy",
          },
        ],
      },
    },
    // ── Section 3 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "finding-a-response",
      title: "9 · Finding a response worth reporting",
      section: "Section 3 · Doing it",
      body: `Response stories are not handed to you. They are found by a specific search, and the search is a beat skill that fits inside the accumulation REPORT-00 described.

**Positive deviance, borrowed from public health.** The idea is to look for the unit that is doing measurably better than its peers under the same constraints, and then find out why. Applied to a beat: the school with the same demographics and a different outcome, the county with the same funding and a shorter wait, the department with the same rules and fewer complaints. The constraint matching is what makes it a finding rather than an anecdote.

**Where the outliers actually surface.** In the data you already read for accountability work. A ranked table has two ends, and a reporter who has spent a year looking at the bottom of it has been holding the other half of the story the whole time. Sorting a table the other way is a ten-minute act that produces most of a beat's response leads.

**Other places responses hide.** In another jurisdiction facing the same problem. In an earlier period when the problem was addressed and the response was later dropped. Inside the institution you cover, in a pilot nobody publicized. And with the people the problem happens to, who have frequently built their own response and are almost never asked about it, which the community-listening lesson in REPORT-00 already told you where to find.

**Screen before you commit.** Four questions, in order. Is there a real problem, statable with a number? Is there a specific response, not an intention? Is there any evidence at all of results, however preliminary? And can I get to the people it affects rather than only the people who run it? A no to the fourth is the one that most often turns a promising lead into an unpublishable piece.

**Beware the response that only exists in a report about it.** Programs are described in grant applications, annual reports, and conference presentations in terms that do not survive contact with the place they run. Go and see it, talk to participants, and treat the published description exactly as REPORT-02 taught you to treat any document: as a claim with a table underneath it.

**And do not require novelty.** The most useful response to report is frequently an old, boring, well-evidenced one that somebody stopped doing. Novelty is a reason a thing gets covered and is not a reason it works, and a beat reporter is better placed than anybody to notice the difference.

:::reveal What is positive deviance, applied to a beat? ||| Looking for the unit doing measurably better than its peers under the same constraints, and finding out why. The constraint matching is what makes it a finding rather than an anecdote.

:::reveal Where do most of a beat's response leads already sit? ||| In the data already read for accountability work. A ranked table has two ends, and sorting it the other way takes ten minutes.

:::reveal Which of the four screening questions most often kills a promising lead? ||| Whether you can reach the people the response affects rather than only the people who run it.

## Vocabulary
- **Positive deviance**: identifying a unit performing better under the same constraints, then finding out why.
- **Constraint matching**: comparing units facing the same conditions, which is what turns an outlier into a finding.
- **Screening questions**: real problem with a number, specific response, some evidence, and access to affected people.
- **The report-only response**: a program that exists in grant applications and presentations and not in the place it runs.

## Sources
- Solutions Journalism Network. (n.d.). *What is solutions journalism?* https://www.solutionsjournalism.org/`,
    },
    {
      slug: "evidence-of-results",
      title: "10 · Evidence of results, and what counts",
      section: "Section 3 · Doing it",
      body: `The evidence quality is where solutions stories most often overclaim, usually not by lying but by failing to say what kind of evidence they have. Naming the kind is most of the fix.

**A rough ladder, strongest to weakest.** A comparison against a group that did not receive the response. A before-and-after measure with something ruling out the obvious alternative explanations. A before-and-after measure alone. An outcome measure with no comparison. Participant reports of benefit. And the count of activity: how many people were served, how many sessions ran, how much was spent.

**Activity is not results, and this is the most common substitution.** Numbers served, meals delivered, hours provided, and dollars spent describe what a program did, not what changed. They are worth reporting and they belong in a sentence that says what they are. A piece that reports activity in the position where results should be has misled a reader who did not notice the switch.

**Ask the question that separates the ladder's rungs.** Compared to what? If the answer is nothing, you have an outcome measure without a comparison, which is still reportable and has to be labeled. If the answer is the same people before, you have a before-and-after, and the follow-up is what else changed in that period. If the answer is a comparable group, say who they were and how they were chosen.

**The causal claim is the one to be careful with.** That outcomes improved is one assertion. That the response caused the improvement is a second, much stronger one, and it is the one a reader will take away whether or not you made it. Where the evidence does not support cause, write the sentence that says outcomes improved and that the response's contribution is not established, which is a normal sentence and not a hedge.

**Whose evidence is it.** A program's own evaluation of itself is evidence and it is the weakest kind, and one commissioned by its funder is barely different. Ask who conducted the evaluation, who paid for it, whether it was published in full, and whether anything unfavorable in it survived into the summary. REPORT-02's method applies without modification.

**And report the counterexamples.** If the same response was tried elsewhere and did not work, that is part of the story and it is frequently the most useful part, because it is where the conditions become visible.

:::reveal What is the most common substitution in evidence of results? ||| Reporting activity, such as numbers served or dollars spent, in the position where results should be. Activity describes what a program did, not what changed.

:::reveal What question separates the rungs of the evidence ladder? ||| Compared to what. Nothing, the same people earlier, or a comparable group, and each answer produces a different and separately labeled claim.

:::reveal What is the second, stronger assertion a reader will take away whether or not you made it? ||| That the response caused the improvement, as distinct from the improvement having occurred. Where the evidence does not support cause, say so plainly.

## Vocabulary
- **Evidence ladder**: comparison group, before-and-after with alternatives ruled out, before-and-after alone, outcome only, participant reports, activity counts.
- **Activity count**: numbers served, sessions run, or money spent, which describes what a program did rather than what changed.
- **Compared to what**: the question that identifies which rung of the ladder a piece of evidence sits on.
- **Self-evaluation**: a program's assessment of itself, which is evidence of the weakest kind and must be labeled as such.

## Sources
- Solutions Journalism Network. (n.d.). *What is solutions journalism?* https://www.solutionsjournalism.org/`,
    },
    {
      slug: "limitations-and-transfer",
      title: "11 · Limitations, and whether it transfers",
      section: "Section 3 · Doing it",
      body: `The limitations section is the part that makes a response story journalism, and it is the part most likely to be cut for length. Writing it first is the practical defense.

**Four questions that produce it.** What has the response not solved? Whom does it not reach, and who was excluded by design or by accident? What does it cost, in money and in what else it displaces? And what conditions does it depend on that another place might not have?

**The conditions question is the one readers actually need.** A response that works because of an unusual funding source, a specific individual, a particular legal environment, or a partnership that took a decade to build is not transferable in the way a reader will assume unless you say so. Naming the conditions is not a criticism of the response; it is the difference between reporting and recommending.

**Report the failures inside the success.** Almost every response that works has a version that did not, an early phase that went wrong, or a component that was abandoned. Those are the most instructive parts of the story and the parts the people running it are least likely to volunteer, so ask directly: what did you try that did not work, and what would you do differently.

**A parallel already in this catalog.** *How the NAACP Learned to Win* reports a legislative campaign that lost and treats what a losing campaign still buys as a genuine finding rather than a consolation. That is the posture a solutions story takes toward a response's failures: they are evidence about how the thing works, not a deduction from its score.

**The scale question, stated carefully.** A response serving forty people is not a small version of a response serving forty thousand, because the constraints that bind at scale are frequently different in kind. A piece that reports a small program and implies a large solution has made a claim about scaling that nobody has evidence for.

**Where the limitations go in the piece.** Not at the end, for the same reason the verification course gave: a caveat in the last paragraph does not travel with a share and most readers never reach it. Put the central limitation in the same passage as the central claim, and let the closing section carry the detail.

:::reveal Which of the four limitation questions is the one readers most need answered? ||| The conditions the response depends on, because a reader will assume transferability unless you name what made it work here.

:::reveal How should a response's own failures be treated? ||| As evidence about how the thing works rather than as a deduction from its score, and asked for directly, because the people running it are least likely to volunteer them.

:::reveal Why is a response serving forty people not a small version of one serving forty thousand? ||| Because the constraints that bind at scale are frequently different in kind, so implying a large solution from a small program is a claim about scaling that nobody has evidence for.

## Vocabulary
- **Conditions**: the local circumstances a response depends on, whose absence elsewhere breaks transferability.
- **Failures inside the success**: abandoned components and early phases that went wrong, which are the most instructive part.
- **Scale claim**: an implication that a small response would work large, which is a separate assertion needing separate evidence.
- **Central limitation**: the limit placed alongside the central claim rather than in a closing paragraph.

## Sources
- Solutions Journalism Network. (n.d.). *What is solutions journalism?* https://www.solutionsjournalism.org/`,
    },
    {
      slug: "quiz-doing-it",
      title: "12 · Knowledge check: doing it",
      section: "Section 3 · Doing it",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is positive deviance?",
            options: [
              "Looking for the unit doing better under the same constraints",
              "Reporting on a program that departs from official policy",
              "Identifying the worst performer and explaining its failure",
              "Comparing a jurisdiction against a national average",
            ],
            correctIndex: 0,
            explanation:
              "Borrowed from public health, and the constraint matching is what makes it a finding rather than an anecdote.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "Which of these is a positive-deviance lead?",
            options: [
              "The county with the same funding and a shorter wait",
              "The county with the largest budget for the service",
              "The county the state has publicly praised",
              "The county whose director agreed to an interview",
            ],
            correctIndex: 0,
            explanation:
              "With the school having the same demographics and a different outcome, and the department having the same rules and fewer complaints.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "Where do most of a beat's response leads already sit?",
            options: [
              "In the data already read for accountability work",
              "In press releases from organizations on the beat",
              "In the outlet's archive of previously published stories",
              "In pitches sent to the desk by advocacy groups",
            ],
            correctIndex: 0,
            explanation:
              "A ranked table has two ends, and sorting it the other way is a ten-minute act that produces most of a beat's response leads.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "Which of these is named as a place responses hide?",
            options: [
              "An earlier period when the problem was addressed and the response was dropped",
              "A national conference where similar programs are presented",
              "A trade publication covering the same sector",
              "An academic journal reviewing the underlying research",
            ],
            correctIndex: 0,
            explanation:
              "With another jurisdiction facing the same problem, an unpublicized pilot inside the institution you cover, and the people the problem happens to.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "Which group has frequently built its own response and is almost never asked?",
            options: [
              "The people the problem happens to",
              "The officials responsible for the underlying policy",
              "The funders who support similar work elsewhere",
              "The academics who study the problem",
            ],
            correctIndex: 0,
            explanation:
              "Which the community-listening lesson in REPORT-00 already told you where to find.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "What is the first screening question?",
            options: [
              "Is there a real problem, statable with a number",
              "Will the organization cooperate with the reporting",
              "Has any other outlet covered this response already",
              "Is the response operating within the outlet's circulation area",
            ],
            correctIndex: 0,
            explanation:
              "Followed by a specific response rather than an intention, some evidence however preliminary, and access to affected people.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "Which screening question most often kills a promising lead?",
            options: [
              "Access to the people it affects rather than only the people who run it",
              "Whether the problem can be stated with a number",
              "Whether the response is specific rather than an intention",
              "Whether any evidence of results exists",
            ],
            correctIndex: 0,
            explanation:
              "A no to the fourth is what turns a promising lead into an unpublishable piece.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "What is a report-only response?",
            options: [
              "A program existing in grant applications rather than in the place it runs",
              "A response documented only in a published evaluation",
              "A response reported by another outlet but not confirmed",
              "A program that has ended but is still described online",
            ],
            correctIndex: 0,
            explanation:
              "Go and see it, talk to participants, and treat the published description as a claim with a table underneath it.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "What does the course say about requiring novelty?",
            options: [
              "The most useful response is often an old, boring one somebody stopped doing",
              "Novelty is the strongest indicator that a response will transfer",
              "Novelty is required for a piece to be publishable as news",
              "Novelty correlates with the strength of available evidence",
            ],
            correctIndex: 0,
            explanation:
              "Novelty is a reason a thing gets covered and is not a reason it works, and a beat reporter is best placed to notice the difference.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "What sits at the top of the evidence ladder?",
            options: [
              "A comparison against a group that did not receive the response",
              "A before-and-after measure of the same participants",
              "An outcome measure with no comparison at all",
              "Participant reports of how the response helped them",
            ],
            correctIndex: 0,
            explanation:
              "Followed by before-and-after with alternatives ruled out, before-and-after alone, outcome without comparison, participant reports, and activity counts.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "What sits at the bottom of the ladder?",
            options: [
              "The count of activity",
              "Participant reports of benefit",
              "An outcome measure with no comparison",
              "A before-and-after measure alone",
            ],
            correctIndex: 0,
            explanation:
              "How many people were served, how many sessions ran, how much was spent.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "What is the most common substitution in evidence of results?",
            options: [
              "Reporting activity in the position where results should be",
              "Reporting a comparison group that was not comparable",
              "Reporting a self-evaluation as an independent one",
              "Reporting results without stating the period covered",
            ],
            correctIndex: 0,
            explanation:
              "Numbers served, meals delivered, hours provided, and dollars spent describe what a program did, not what changed.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "Where do activity counts belong?",
            options: [
              "In a sentence that says what they are",
              "In the limitations section rather than the evidence section",
              "Out of the piece entirely, since they prove nothing",
              "In the headline, since they are the most concrete numbers",
            ],
            correctIndex: 0,
            explanation:
              "They are worth reporting. A piece that reports them where results should be has misled a reader who did not notice the switch.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "What question separates the rungs of the evidence ladder?",
            options: [
              "Compared to what",
              "Measured by whom",
              "Over what period",
              "Funded by whom",
            ],
            correctIndex: 0,
            explanation:
              "Nothing, the same people earlier, or a comparable group, and each answer produces a differently labeled claim.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "What is the follow-up when the comparison is the same people before?",
            options: [
              "What else changed in that period",
              "Who selected the participants originally",
              "Whether the measure was validated",
              "How the results were funded",
            ],
            correctIndex: 0,
            explanation:
              "Which is what separates a before-and-after with alternatives ruled out from a before-and-after alone.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "What is the second, stronger assertion a reader will take away?",
            options: [
              "That the response caused the improvement",
              "That the improvement occurred at all",
              "That the response should be expanded",
              "That the evidence has been independently verified",
            ],
            correctIndex: 0,
            explanation:
              "Whether or not you made it. Where the evidence does not support cause, write the sentence saying so, which is normal and not a hedge.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "How should a program's own evaluation be characterized?",
            options: [
              "Evidence of the weakest kind",
              "Independent evidence, since the program has access to the data",
              "Inadmissible, and excluded from the piece",
              "Equivalent to a funder-commissioned evaluation in strength",
            ],
            correctIndex: 0,
            explanation:
              "One commissioned by its funder is barely different, and the questions are who conducted it, who paid, whether it was published in full, and what unfavorable material survived into the summary.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "Why report counterexamples?",
            options: [
              "It is where the conditions become visible",
              "Because balance requires an opposing case",
              "Because the professional code requires it",
              "Because editors will otherwise cut the piece for length",
            ],
            correctIndex: 0,
            explanation:
              "If the same response was tried elsewhere and did not work, that is frequently the most useful part of the story.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "What makes the limitations section the part that makes a piece journalism?",
            options: [
              "It states what the response has not done and depends on",
              "It gives the organization an opportunity to reply",
              "It satisfies the outlet's legal review requirements",
              "It provides the closing paragraph a piece needs",
            ],
            correctIndex: 0,
            explanation:
              "And it is the part most likely to be cut for length, which is why writing it first is the practical defense.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "Which of the four limitation questions do readers most need answered?",
            options: [
              "What conditions the response depends on",
              "What the response has not solved",
              "Whom the response does not reach",
              "What the response costs in money",
            ],
            correctIndex: 0,
            explanation:
              "A reader will assume transferability unless you name what made it work here.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "What is naming the conditions, in the lesson's framing?",
            options: [
              "The difference between reporting and recommending",
              "A criticism of the response's design",
              "An optional addition where space allows",
              "A legal requirement where funding is public",
            ],
            correctIndex: 0,
            explanation:
              "An unusual funding source, a specific individual, a particular legal environment, or a decade-old partnership all limit transfer.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "How should a response's own failures be treated?",
            options: [
              "As evidence about how the thing works",
              "As a deduction from the response's overall score",
              "As material for a separate accountability piece",
              "As background the reader does not need",
            ],
            correctIndex: 0,
            explanation:
              "They are the most instructive parts of the story and the parts the operators are least likely to volunteer, so ask directly.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "Which two questions get the failures out of an operator?",
            options: [
              "What did you try that did not work, and what would you do differently",
              "What are your results, and who verified them",
              "Who funds you, and what do they require",
              "How many people do you serve, and at what cost",
            ],
            correctIndex: 0,
            explanation:
              "Asked directly, because almost every response that works has a version that did not.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "Which catalog course does the lesson cite for the posture toward failure?",
            options: [
              "How the NAACP Learned to Win",
              "The Negro Leagues: Who Owned the Game",
              "How to Read a Number",
              "Civic Documentation",
            ],
            correctIndex: 0,
            explanation:
              "It reports a legislative campaign that lost and treats what a losing campaign still buys as a genuine finding rather than a consolation.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "Why is a response serving forty people not a small version of one serving forty thousand?",
            options: [
              "The constraints that bind at scale are frequently different in kind",
              "Because small programs are typically better funded per person",
              "Because participant reports are less reliable in small groups",
              "Because small programs rarely publish evaluations",
            ],
            correctIndex: 0,
            explanation:
              "A piece that reports a small program and implies a large solution has made a claim about scaling nobody has evidence for.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "Where do the limitations go in the piece?",
            options: [
              "The central one goes beside the central claim",
              "All of them go in the closing section",
              "They go in a linked note rather than the piece",
              "They go in the headline where the claim is strongest",
            ],
            correctIndex: 0,
            explanation:
              "For the same reason the verification course gave: a caveat in the last paragraph does not travel with a share.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "What is the practical defense against the limitations section being cut?",
            options: [
              "Writing it first",
              "Placing it above the evidence section",
              "Agreeing its length with the desk in advance",
              "Publishing it as a separate companion piece",
            ],
            correctIndex: 0,
            explanation:
              "It is the part that makes the piece journalism and the part most likely to be cut for length.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "What are the four limitation questions?",
            options: [
              "Not solved, not reached, what it costs, and what it depends on",
              "Who runs it, who funds it, who evaluates it, and who benefits",
              "How long, how many, how much, and how often",
              "What worked, what failed, what changed, and what remains",
            ],
            correctIndex: 0,
            explanation:
              "Cost includes what else the response displaces, not only money.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "What is constraint matching, and why does it matter?",
            options: [
              "Comparing units facing the same conditions, which turns an outlier into a finding",
              "Matching a response's funding against a comparable jurisdiction's",
              "Aligning a story's evidence with the outlet's editorial standard",
              "Selecting sources whose experience matches the reporter's own",
            ],
            correctIndex: 0,
            explanation:
              "Without it, a unit doing better may simply have had more to work with, which is not a response and not a finding.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "How long does the lesson say sorting a table the other way takes?",
            options: [
              "About ten minutes",
              "A full afternoon of data cleaning",
              "A records request to the agency that publishes it",
              "As long as the original accountability analysis",
            ],
            correctIndex: 0,
            explanation:
              "And it produces most of a beat's response leads, from data the reporter has already read.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "What does the second screening question distinguish?",
            options: [
              "A specific response from an intention",
              "A public program from a private one",
              "A funded program from an unfunded one",
              "A local response from a national one",
            ],
            correctIndex: 0,
            explanation:
              "An intention is what an announcement reports, and announcements are one of the imposters.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "How should a published program description be treated?",
            options: [
              "As a claim with a table underneath it",
              "As the authoritative account of what the program does",
              "As background the piece need not verify",
              "As a source requiring attribution but not checking",
            ],
            correctIndex: 0,
            explanation:
              "Grant applications, annual reports, and conference presentations describe programs in terms that do not survive contact with the place they run.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "What does the course say about who conducted an evaluation?",
            options: [
              "Ask, along with who paid and whether it was published in full",
              "Assume independence unless the piece states otherwise",
              "Report the finding regardless, since evaluations are technical",
              "Rely on the summary, since full reports are rarely released",
            ],
            correctIndex: 0,
            explanation:
              "And whether anything unfavorable in it survived into the summary, which is REPORT-02's method applied without modification.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "What is a self-evaluation worth as evidence?",
            options: [
              "Something, and it is the weakest kind",
              "Nothing, and it should be excluded",
              "As much as an independent evaluation of the same program",
              "More than participant reports, because it uses administrative data",
            ],
            correctIndex: 0,
            explanation:
              "One commissioned by a program's funder is barely different, which is why the four questions about provenance apply.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "What is the normal sentence where evidence does not support cause?",
            options: [
              "Outcomes improved and the response's contribution is not established",
              "The response appears to have driven the improvement",
              "The evidence is inconclusive and the response may not work",
              "No conclusion can be drawn from the available material",
            ],
            correctIndex: 0,
            explanation:
              "It is a normal sentence and not a hedge, which is the same posture the verification course took toward specific uncertainty.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "Which is an activity count rather than a result?",
            options: [
              "Hours of service provided",
              "The share of participants housed after twelve months",
              "The difference in outcomes against a comparison group",
              "The change in waiting time across the pilot period",
            ],
            correctIndex: 0,
            explanation:
              "With numbers served, meals delivered, and dollars spent. They describe what a program did rather than what changed.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "Why does the lesson call the evidence quality the one where stories overclaim?",
            options: [
              "Usually by failing to say what kind of evidence they have",
              "Usually by inventing figures the program did not supply",
              "Usually by omitting the evaluation entirely",
              "Usually by attributing results to the wrong organization",
            ],
            correctIndex: 0,
            explanation:
              "Naming the kind is most of the fix, which is why the ladder exists.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "What does the course say about a response that depends on one individual?",
            options: [
              "It is a condition that limits transfer and must be named",
              "It disqualifies the response from being reported",
              "It makes the response a better subject for a profile",
              "It is irrelevant provided the results are measured",
            ],
            correctIndex: 0,
            explanation:
              "With an unusual funding source, a particular legal environment, and a partnership that took a decade to build.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "What does cost include in the limitations questions?",
            options: [
              "What else the response displaces",
              "Only the direct budget of the program",
              "Only the cost per participant served",
              "Only the public share of the funding",
            ],
            correctIndex: 0,
            explanation:
              "Money and displacement, because a response that consumes capacity elsewhere has a cost a budget line does not show.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "What is a scale claim?",
            options: [
              "An implication that a small response would work large",
              "A statement of how many people a response serves",
              "A comparison between two jurisdictions of different size",
              "A projection of a program's future budget",
            ],
            correctIndex: 0,
            explanation:
              "It is a separate assertion needing separate evidence, and a piece can make it without stating it.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "Which lesson's rule does the placement of limitations borrow?",
            options: [
              "The verification course's rule about in-sentence caveats",
              "The records course's rule about partial releases",
              "The interviewing course's rule about the call before publication",
              "The report-reading course's rule about the six fields",
            ],
            correctIndex: 0,
            explanation:
              "A caveat in the last paragraph is one most readers never reach and it does not travel with a quotation or a share.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "What does the lesson say about who volunteers a response's failures?",
            options: [
              "The people running it are least likely to",
              "Participants raise them before operators do",
              "Funders disclose them in published evaluations",
              "Competing organizations supply them reliably",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the two questions are asked directly rather than waited for.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "What is the fourth screening question, in full?",
            options: [
              "Can I get to the people it affects rather than only the people who run it",
              "Can I obtain the program's full financial records",
              "Can I confirm the results with an independent evaluator",
              "Can I visit the site during normal operating hours",
            ],
            correctIndex: 0,
            explanation:
              "A no is the one that most often turns a promising lead into an unpublishable piece.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "What kind of response does the course say is frequently the most useful to report?",
            options: [
              "An old, boring, well-evidenced one somebody stopped doing",
              "A newly launched pilot with strong early figures",
              "A response operating in a comparable jurisdiction",
              "A response the institution you cover has publicized",
            ],
            correctIndex: 0,
            explanation:
              "Novelty is a reason a thing gets covered and is not a reason it works.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "Which two things did the beat file already contain that produce response leads?",
            options: [
              "Ranked tables and jurisdictional comparisons",
              "Interview transcripts and consent records",
              "Records requests and their denials",
              "Published clips and audience figures",
            ],
            correctIndex: 0,
            explanation:
              "With officials who mentioned a pilot and affected people met while listening.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "What does the course say about preliminary evidence at the screening stage?",
            options: [
              "Some evidence, however preliminary, is enough to proceed",
              "Only a comparison-group study justifies committing time",
              "Evidence is not needed until the piece is drafted",
              "Preliminary evidence disqualifies a lead entirely",
            ],
            correctIndex: 0,
            explanation:
              "The screen is four questions in order, and the evidence one asks whether any exists rather than how strong it is.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "What does a comparison group let a piece say that a before-and-after cannot?",
            options: [
              "Something about what would have happened otherwise",
              "Something about how many people were served",
              "Something about how the program is funded",
              "Something about participants' own views of the response",
            ],
            correctIndex: 0,
            explanation:
              "Which is why it sits at the top of the ladder, and why saying who the comparison group was and how they were chosen matters.",
            sourceLessonSlug: "evidence-of-results",
          },
        ],
      },
    },
    // ── Section 4 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "structuring-the-story",
      title: "13 · Structuring a solutions story",
      section: "Section 4 · Writing it, and the beat",
      body: `The four qualities describe what has to be in the piece. The structure decides whether a reader gets it, and the default structures reporters reach for both fail in predictable ways.

**The two defaults, and why they fail.** Opening on the person makes the piece a profile and buries the mechanism. Opening on the problem spends the reader's attention establishing something the piece is not about, and by the time the response arrives the piece reads as a relief rather than as reporting.

**A shape that works.** Open on the response doing something specific and concrete, one paragraph. Then the problem it addresses, briefly and with a number. Then how it works, operationally, which is the longest section and the part that carries the insight. Then the evidence, labeled by kind. Then the limits and conditions. Then, if it belongs, what it would take elsewhere.

**Why the problem paragraph is short.** Your reader on this beat has read the problem coverage. Restating it at length is the habit that makes response stories feel like they are apologizing for their subject, and a number plus a sentence does the work.

**Keep the mechanism concrete.** The operational section fails when it turns into description of a philosophy. What happens when somebody calls? Who decides? What does the form ask? Where does the money go and on what schedule? A reader can only judge a response they can picture.

**Attribute the evidence in the sentence.** Not in a linked citation and not in a closing note. The evidence's kind, source, and period belong in the sentence carrying the claim, which is the same in-sentence rule REPORT-04 applied to uncertainty and REPORT-02 applied to figures.

**People belong in the piece, in a specific role.** Not as illustration of a theme and not as testimony that the program is good, but as the people the mechanism acts on, describing what changed for them and what did not. The interviewing course governs how you get that, and its rules about unsought sources apply in full, because somebody who received a service did not ask to be an example of it.

**And write the headline honestly.** A headline that states a result the evidence does not support is the most-read part of a piece being the least accurate part, and it is the single most common way a careful solutions story becomes a misleading one.

:::reveal Why does opening on the problem fail in a solutions story? ||| It spends the reader's attention establishing something the piece is not about, so the response arrives as a relief rather than as reporting.

:::reveal Where does the evidence's kind, source, and period belong? ||| In the sentence carrying the claim, not in a linked citation or a closing note, which is the same in-sentence rule the verification and report-reading courses applied.

:::reveal What role do people play in a well-structured solutions story? ||| The people the mechanism acts on, describing what changed and what did not, rather than illustration of a theme or testimony that the program is good.

## Vocabulary
- **Operational section**: the longest part of the piece, describing what actually happens, which carries the insight.
- **Short problem paragraph**: a number and a sentence, on the assumption the beat's readers already know the problem.
- **In-sentence attribution**: putting the evidence's kind, source, and period alongside the claim it supports.
- **Honest headline**: one that does not state a result the evidence in the piece cannot support.

## Sources
- Solutions Journalism Network. (n.d.). *What is solutions journalism?* https://www.solutionsjournalism.org/`,
    },
    {
      slug: "sources-and-scrutiny",
      title: "14 · Sources, scrutiny, and not becoming a brochure",
      section: "Section 4 · Writing it, and the beat",
      body: `The people running a response are the easiest sources to reach and the least able to tell you whether it works. Building the source list correctly is what keeps the piece from becoming their material.

**Four groups, and a piece needs all four.** The people who run the response. The people it acts on. Somebody independent who knows the field and has no stake in this particular response. And, where one exists, somebody who tried the same thing and stopped.

**The fourth group is the one nobody calls.** A program that ended, a jurisdiction that dropped the approach, a department that tried it and went back. They are findable through the same records and beat calendar the earlier courses built, they are usually willing to talk because nobody has asked, and they hold the conditions information the limitations section needs.

**Interview the operators about mechanism, not merit.** How does the intake work, what happens when somebody does not qualify, what is your caseload, what do you do when the funding cycle ends. Questions about whether it is working invite a pitch; questions about how it works produce a description you can check.

**Ask for the unfavorable material by name.** The evaluation that was not published, the year the numbers went the wrong way, the component that was cut. Asking specifically is what distinguishes it from an invitation to comment, exactly as REPORT-04's official-confirmation lesson described.

**Handle participants with the interviewing course's rules.** Somebody receiving a service is frequently in an unequal relationship with the organization that provides it, may believe that speaking is expected of them, and may fear a consequence for saying something critical. Say plainly that the organization will not be told what they said, if that is true, and if it is not true, say that instead.

**And watch the access trade.** An organization that grants access on condition of approval, or that offers an exclusive in exchange for a soft frame, is proposing a trade the course has already ruled out. Losing access to one response is cheaper than becoming a reporter whose response coverage nobody believes.

:::reveal Which of the four source groups does nobody call, and what do they hold? ||| Somebody who tried the same thing and stopped. They usually talk because nobody has asked, and they hold the conditions information the limitations section needs.

:::reveal Why ask operators about mechanism rather than merit? ||| Questions about whether it is working invite a pitch. Questions about how it works produce a description you can check.

:::reveal What must be said to a participant being interviewed about a service they receive? ||| Whether the organization will be told what they said. If it will not be, say so plainly; if it will be, say that instead.

## Vocabulary
- **The four groups**: operators, affected people, an independent expert with no stake, and somebody who tried it and stopped.
- **Mechanism questions**: intake, exclusions, caseload, and funding cycles, which produce checkable description.
- **Naming the unfavorable**: asking for the unpublished evaluation, the bad year, and the cut component specifically.
- **The access trade**: approval or a soft frame offered in exchange for access, which this course rules out.

## Sources
- Solutions Journalism Network. (n.d.). *What is solutions journalism?* https://www.solutionsjournalism.org/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "solutions-on-a-beat",
      title: "15 · Solutions on a beat, beside accountability rather than instead of it",
      section: "Section 4 · Writing it, and the beat",
      body: `The last question is operational: where this work sits in a week, and what it does to the rest of a beat.

**The pairing that makes both stronger.** An accountability story establishes that something is wrong and who is responsible. A response story on the same subject establishes what is possible and under what conditions. Published on the same beat over the same year, each makes the other more credible: the accountability work is not cynicism because you have reported what works, and the response work is not promotion because you have reported what does not.

**Where the hours come from.** The enterprise block REPORT-00 asked you to protect. A response story is enterprise work: it originates with you, it takes weeks, and nothing external triggers it, which means it loses to quick-turn every week unless it is on the calendar.

**What the beat file already contains.** The ranked tables you read for accountability, the neighboring jurisdictions you compared against, the officials who mentioned a pilot, and the affected people you met listening. The response leads are already in there, and the monthly file review is where they surface.

**Free Press Indiana describes itself as solutions-focused**, which is why plans/68 put this course in the track. A newsroom with that commitment is not asking for softer coverage; it is asking for reporting on responses at the same standard as everything else, and a reporter who can do that is scarcer than one who can do accountability work alone.

**The accountability question a response story should always raise.** If something works and is not being done at scale, why not. That is an accountability story, it is frequently the better one, and it is only available to a reporter who did the response reporting first.

**Where the track goes from here.** You now have the beat, the records, the report, the interview, the verification, the legal frame, and the response form. What remains is the pitch and the shapes a story can take, and then the capstone that asks you to run the whole method on a beat you choose.

:::reveal How do accountability and response stories on the same beat strengthen each other? ||| The accountability work is not cynicism because you have reported what works, and the response work is not promotion because you have reported what does not.

:::reveal Where do the hours for response reporting come from? ||| The protected enterprise block, because a response story originates with you, takes weeks, and has no external trigger, so it loses to quick-turn work otherwise.

:::reveal What accountability question does a response story always raise? ||| If something works and is not being done at scale, why not. It is frequently the better story and it is only available after the response reporting is done.

## Vocabulary
- **The pairing**: accountability and response coverage of the same subject on the same beat, each making the other credible.
- **Enterprise work**: reporting that originates with the reporter and has no external trigger, which needs a protected block.
- **Response leads in the file**: the ranked tables, comparisons, pilots, and listening notes already accumulated for other purposes.
- **The scale question**: if it works and is not being done at scale, why not, which is an accountability story.

## Sources
- Solutions Journalism Network. (n.d.). *What is solutions journalism?* https://www.solutionsjournalism.org/
- Free Press Indiana. (n.d.). *Women and girls reporter* [Job posting]. https://www.freepressindiana.org/jobs/women-girls-reporter`,
    },
    {
      slug: "quiz-writing-and-beat",
      title: "16 · Knowledge check: writing it, and the beat",
      section: "Section 4 · Writing it, and the beat",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Why does opening on the person fail?",
            options: [
              "It makes the piece a profile and buries the mechanism",
              "It exposes the person to unwanted attention from readers",
              "It requires consent the interviewing course would not permit",
              "It puts the evidence section too far from the headline",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the two default structures reporters reach for, and both fail predictably.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "Why does opening on the problem fail?",
            options: [
              "The response then arrives as a relief rather than as reporting",
              "The problem section is usually the least accurate part",
              "Readers on the beat dispute the problem's framing",
              "It duplicates the accountability coverage word for word",
            ],
            correctIndex: 0,
            explanation:
              "It spends the reader's attention establishing something the piece is not about.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "What does the recommended structure open on?",
            options: [
              "The response doing something specific and concrete",
              "The scale of the problem, with a national comparison",
              "A participant describing what changed for them",
              "The organization's founding and its mission",
            ],
            correctIndex: 0,
            explanation:
              "One paragraph, then the problem briefly and with a number, then how it works operationally.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "Which section of the recommended shape is longest?",
            options: [
              "How it works, operationally",
              "The problem it addresses",
              "The evidence of results",
              "What it would take elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "It is the part that carries the insight, which is the quality most often missing.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "Why is the problem paragraph short?",
            options: [
              "Your reader on this beat has already read the problem coverage",
              "Because the desk allocates limited space to background",
              "Because restating a problem invites a legal challenge",
              "Because the accountability piece will run alongside it",
            ],
            correctIndex: 0,
            explanation:
              "Restating it at length is the habit that makes response stories feel like they are apologizing for their subject.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "How does the operational section fail?",
            options: [
              "It turns into description of a philosophy",
              "It becomes longer than the evidence section",
              "It repeats material from the problem paragraph",
              "It relies on quotations rather than the reporter's voice",
            ],
            correctIndex: 0,
            explanation:
              "What happens when somebody calls, who decides, what the form asks, where the money goes. A reader can only judge a response they can picture.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "Where do the evidence's kind, source, and period belong?",
            options: [
              "In the sentence carrying the claim",
              "In a linked citation at the end of the piece",
              "In a closing methodological note",
              "In the caption of an accompanying chart",
            ],
            correctIndex: 0,
            explanation:
              "The same in-sentence rule the verification course applied to uncertainty and the report-reading course applied to figures.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "What role do people play in a well-structured solutions story?",
            options: [
              "The people the mechanism acts on, describing what changed and what did not",
              "Illustration of the piece's central theme",
              "Testimony that the program deserves support",
              "A narrative frame that opens and closes the piece",
            ],
            correctIndex: 0,
            explanation:
              "And the interviewing course governs how you get that, because somebody who received a service did not ask to be an example of it.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "What is the most common way a careful solutions story becomes misleading?",
            options: [
              "A headline stating a result the evidence does not support",
              "An evidence section placed after the limitations",
              "A quotation from an operator left unattributed",
              "A problem paragraph that understates the scale",
            ],
            correctIndex: 0,
            explanation:
              "The most-read part of a piece being the least accurate part.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "Who are the easiest sources to reach and least able to say whether a response works?",
            options: [
              "The people running it",
              "The people it acts on",
              "Independent experts in the field",
              "People who tried it and stopped",
            ],
            correctIndex: 0,
            explanation:
              "Building the source list correctly is what keeps the piece from becoming their material.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "What are the four source groups a piece needs?",
            options: [
              "Operators, affected people, an independent expert, and somebody who stopped",
              "Officials, advocates, academics, and funders",
              "Founders, staff, volunteers, and board members",
              "Participants, families, neighbors, and local officials",
            ],
            correctIndex: 0,
            explanation:
              "The independent expert must know the field and have no stake in this particular response.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "Which group does nobody call?",
            options: [
              "Somebody who tried the same thing and stopped",
              "The independent expert with no stake",
              "The people the response acts on",
              "The operators of the response",
            ],
            correctIndex: 0,
            explanation:
              "They are findable through the same records and beat calendar, they usually talk because nobody has asked, and they hold the conditions information.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "Why interview operators about mechanism rather than merit?",
            options: [
              "Merit questions invite a pitch and mechanism questions produce checkable description",
              "Merit questions expose the reporter to a claim of bias",
              "Mechanism questions are quicker to ask under deadline",
              "Merit questions are outside the scope of the four qualities",
            ],
            correctIndex: 0,
            explanation:
              "Intake, exclusions, caseload, and what happens when the funding cycle ends.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "Which unfavorable material should be asked for by name?",
            options: [
              "The unpublished evaluation, the bad year, and the cut component",
              "The organization's full financial statements",
              "The list of participants who left the program",
              "The correspondence with the program's funder",
            ],
            correctIndex: 0,
            explanation:
              "Asking specifically is what distinguishes it from an invitation to comment, exactly as the official-confirmation lesson described.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "What must be said to somebody receiving a service before interviewing them?",
            options: [
              "Whether the organization will be told what they said",
              "That the piece may be published without their name",
              "That the organization has approved the interview",
              "That the reporter has no relationship with the program",
            ],
            correctIndex: 0,
            explanation:
              "If it will not be told, say so plainly, and if it will be, say that instead. They may fear a consequence for saying something critical.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "What is the access trade?",
            options: [
              "Approval or a soft frame offered in exchange for access",
              "An exclusive granted in return for early publication",
              "An interview granted on condition of anonymity",
              "Access to participants in exchange for naming the funder",
            ],
            correctIndex: 0,
            explanation:
              "Losing access to one response is cheaper than becoming a reporter whose response coverage nobody believes.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "How do accountability and response coverage strengthen each other?",
            options: [
              "Neither reads as cynicism or promotion once both exist on the beat",
              "Each attracts a different segment of the outlet's audience",
              "Each satisfies a different requirement of the professional code",
              "Each is produced by a different desk with different standards",
            ],
            correctIndex: 0,
            explanation:
              "The accountability work is not cynicism because you have reported what works, and the response work is not promotion because you have reported what does not.",
            sourceLessonSlug: "solutions-on-a-beat",
          },
          {
            prompt: "Where do the hours for response reporting come from?",
            options: [
              "The protected enterprise block",
              "The listening block, since responses surface in communities",
              "The monthly file review hour",
              "Whatever remains after the week's quick-turn work",
            ],
            correctIndex: 0,
            explanation:
              "It originates with you, takes weeks, and has no external trigger, which means it loses to quick-turn every week unless it is on the calendar.",
            sourceLessonSlug: "solutions-on-a-beat",
          },
          {
            prompt: "What does the beat file already contain that produces response leads?",
            options: [
              "Ranked tables, jurisdictional comparisons, mentioned pilots, and listening notes",
              "Published clips, headlines, and audience figures",
              "Records requests, denials, and appeal correspondence",
              "Interview recordings, transcripts, and consent notes",
            ],
            correctIndex: 0,
            explanation:
              "And the monthly file review is where they surface, which is the same mechanism the beat course described for enterprise leads generally.",
            sourceLessonSlug: "solutions-on-a-beat",
          },
          {
            prompt: "What is a newsroom describing itself as solutions-focused asking for?",
            options: [
              "Reporting on responses at the same standard as everything else",
              "Softer coverage of local institutions",
              "A fixed proportion of positive stories each month",
              "Fewer accountability investigations",
            ],
            correctIndex: 0,
            explanation:
              "And a reporter who can do that is scarcer than one who can do accountability work alone.",
            sourceLessonSlug: "solutions-on-a-beat",
          },
          {
            prompt: "What accountability question does a response story always raise?",
            options: [
              "If it works and is not being done at scale, why not",
              "Who has profited from the response's expansion",
              "Whether the responsible officials knew about it",
              "Whether the program complies with its funding conditions",
            ],
            correctIndex: 0,
            explanation:
              "It is frequently the better story, and it is only available to a reporter who did the response reporting first.",
            sourceLessonSlug: "solutions-on-a-beat",
          },
          {
            prompt: "What remains in the track after this course?",
            options: [
              "The pitch, the shapes a story can take, and the capstone",
              "Verification and the legal frame",
              "Records and reading somebody else's report",
              "The beat and community listening",
            ],
            correctIndex: 0,
            explanation:
              "The capstone asks you to run the whole method on a beat you choose.",
            sourceLessonSlug: "solutions-on-a-beat",
          },
          {
            prompt: "What does the lesson mean by keeping the mechanism concrete?",
            options: [
              "What happens when somebody calls, who decides, what the form asks",
              "How large the budget is and where it comes from",
              "How the organization describes its own values",
              "How many staff the program employs and at what grade",
            ],
            correctIndex: 0,
            explanation:
              "A reader can only judge a response they can picture, which is why philosophy is where the operational section fails.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "Where does the money question belong in the operational section?",
            options: [
              "Where it goes and on what schedule",
              "In the limitations, as part of cost",
              "In the evidence section, as an activity count",
              "In the headline, as the most concrete figure",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the concrete mechanism questions, alongside intake, decision-making, and what the form asks.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "What comes after the evidence in the recommended shape?",
            options: [
              "The limits and conditions",
              "The participant accounts",
              "The problem's scale",
              "The organization's history",
            ],
            correctIndex: 0,
            explanation:
              "And then, if it belongs, what it would take elsewhere.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "Why does the interviewing course govern participant interviews here?",
            options: [
              "Somebody who received a service did not ask to be an example of it",
              "Because participants are always minors under the course's rules",
              "Because service recipients cannot consent to being quoted",
              "Because organizations require consent forms before access",
            ],
            correctIndex: 0,
            explanation:
              "Its rules about unsought sources apply in full.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "What kind of relationship does a service recipient frequently have with the provider?",
            options: [
              "An unequal one",
              "A contractual one with defined rights",
              "A voluntary one they can exit without consequence",
              "A professional one governed by a code",
            ],
            correctIndex: 0,
            explanation:
              "They may believe speaking is expected of them and may fear a consequence for saying something critical.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "Which questions produce a description you can check?",
            options: [
              "Intake, exclusions, caseload, and end of funding cycle",
              "Impact, value, importance, and community benefit",
              "Vision, mission, values, and strategy",
              "Awards, recognition, partnerships, and endorsements",
            ],
            correctIndex: 0,
            explanation:
              "Questions about whether it is working invite a pitch instead.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "What does the independent expert have to lack?",
            options: [
              "A stake in this particular response",
              "Any prior published work on the subject",
              "A relationship with the outlet",
              "Experience of running a similar program",
            ],
            correctIndex: 0,
            explanation:
              "They must know the field, which is a different requirement from having no view about it.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "How is somebody who tried the same thing and stopped found?",
            options: [
              "Through the same records and beat calendar the earlier courses built",
              "Through the organization currently running the response",
              "Through an advocacy group that tracks the sector",
              "Through a national database of discontinued programs",
            ],
            correctIndex: 0,
            explanation:
              "A program that ended, a jurisdiction that dropped the approach, a department that tried it and went back.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "What is the cost of refusing the access trade?",
            options: [
              "Losing access to one response",
              "Losing the beat entirely",
              "Losing the outlet's legal support",
              "Losing the ability to interview participants",
            ],
            correctIndex: 0,
            explanation:
              "Which is cheaper than becoming a reporter whose response coverage nobody believes.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "What kind of work is a response story, in scheduling terms?",
            options: [
              "Enterprise work",
              "Quick-turn work with a same-week deadline",
              "Maintenance work that fills gaps in the week",
              "Feature work commissioned by another desk",
            ],
            correctIndex: 0,
            explanation:
              "It originates with the reporter and nothing external triggers it, which is the definition the beat course gave.",
            sourceLessonSlug: "solutions-on-a-beat",
          },
          {
            prompt: "Which course's protected block does response reporting draw on?",
            options: [
              "REPORT-00's enterprise block",
              "REPORT-01's records calendar",
              "REPORT-04's negative-check window",
              "REPORT-05's legal review time",
            ],
            correctIndex: 0,
            explanation:
              "The same block that protects any originated work from being consumed by same-day demands.",
            sourceLessonSlug: "solutions-on-a-beat",
          },
          {
            prompt: "Why does plans/68 include this course in the track at all?",
            options: [
              "Free Press Indiana describes itself as solutions-focused",
              "Because the professional code requires the form",
              "Because accountability reporting is in decline",
              "Because the catalog had no coverage of nonprofits",
            ],
            correctIndex: 0,
            explanation:
              "And the form is routinely confused with advocacy and with good-news filler, which is what the second section addresses.",
            sourceLessonSlug: "solutions-on-a-beat",
          },
          {
            prompt: "What makes a reporter who can report responses rigorously scarce?",
            options: [
              "Most reporters can do accountability work alone",
              "Most newsrooms prohibit the form entirely",
              "Most responses refuse access to journalists",
              "Most editors reject response pitches on principle",
            ],
            correctIndex: 0,
            explanation:
              "A newsroom with a solutions commitment is asking for the same standard applied to a different subject, not a lower one.",
            sourceLessonSlug: "solutions-on-a-beat",
          },
          {
            prompt: "What does the scale question turn a response story into?",
            options: [
              "An accountability story",
              "A follow-up feature",
              "A policy analysis",
              "An opinion piece",
            ],
            correctIndex: 0,
            explanation:
              "If something works and is not being done at scale, why not, and only a reporter who did the response reporting can ask it credibly.",
            sourceLessonSlug: "solutions-on-a-beat",
          },
          {
            prompt: "What does a headline that overstates a result make true of the piece?",
            options: [
              "Its most-read part is its least accurate part",
              "Its evidence section becomes legally exposed",
              "Its limitations section is invalidated",
              "Its sources may withdraw their cooperation",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the last instruction in the structure lesson is to write the headline honestly.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "What are the two default structures the lesson warns against?",
            options: [
              "Opening on the person, and opening on the problem",
              "Opening on the evidence, and opening on the limits",
              "Opening on a quotation, and opening on a statistic",
              "Opening on the funder, and opening on the policy",
            ],
            correctIndex: 0,
            explanation:
              "Both fail in predictable ways: one buries the mechanism and the other makes the response read as a relief.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "What does the problem paragraph consist of?",
            options: [
              "A number and a sentence",
              "Three paragraphs of context and history",
              "A quotation from an affected person",
              "A comparison against the national picture",
            ],
            correctIndex: 0,
            explanation:
              "Because your reader on this beat has read the problem coverage already.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "Which four groups make the piece not become the operators' material?",
            options: [
              "Operators, affected people, an independent expert, and somebody who stopped",
              "Operators, funders, board members, and volunteers",
              "Officials, advocates, participants, and neighbors",
              "Founders, evaluators, journalists, and academics",
            ],
            correctIndex: 0,
            explanation:
              "A piece needs all four, and the fourth is the one nobody calls.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "What does asking for unfavorable material by name distinguish it from?",
            options: [
              "An invitation to comment",
              "A records request under the state act",
              "A right of reply before publication",
              "A background conversation with an operator",
            ],
            correctIndex: 0,
            explanation:
              "Exactly as the verification course's official-confirmation lesson described: a precise question is much harder to answer with nothing.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "Where should a response story run?",
            options: [
              "On the beat it concerns, beside the accountability coverage",
              "In the outlet's uplifting-content slot",
              "In the features section, where longer pieces fit",
              "Wherever the organization's audience is largest",
            ],
            correctIndex: 0,
            explanation:
              "Filing it into an uplifting slot mislabels the work to the audience and to the desk, and is worth arguing against by name.",
            sourceLessonSlug: "solutions-on-a-beat",
          },
          {
            prompt: "What does the closing section of the recommended shape carry?",
            options: [
              "What it would take elsewhere, if it belongs",
              "The strongest quotation from a participant",
              "A summary of the problem's scale",
              "A list of the sources consulted",
            ],
            correctIndex: 0,
            explanation:
              "After the limits and conditions, and only where the transfer question is genuinely answerable.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "What does a reader need before any evidence can mean anything?",
            options: [
              "To be able to picture the response",
              "To know who funds the organization",
              "To know how the problem compares nationally",
              "To have read the accountability coverage",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the operational section is the longest and why philosophy is its failure mode.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "What is the honest sentence to a participant when the organization will hear what they said?",
            options: [
              "Say that instead",
              "Say nothing, since it would deter them",
              "Say the organization has agreed not to retaliate",
              "Say the interview can be conducted anonymously",
            ],
            correctIndex: 0,
            explanation:
              "The rule is to tell them the truth about what will happen, which is the interviewing course's disclosure standard applied here.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
        ],
      },
    },
    {
      slug: "final-solutions",
      title: "17 · Final: solutions journalism, and what it is not",
      section: "Section 4 · Writing it, and the beat",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "What is solutions journalism?",
            options: [
              "Rigorous reporting on responses to social problems",
              "Coverage designed to balance negative news about a community with positive material",
              "Reporting that recommends a specific course of action to readers and policymakers",
              "A recurring newsroom slot reserved for uplifting stories about local people",
            ],
            correctIndex: 0,
            explanation:
              "Both halves are load-bearing: a response, and the same evidentiary standard as any other reporting.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "What hole does response reporting fill?",
            options: [
              "What is possible inside a situation",
              "Who bears responsibility for a problem and what has gone wrong",
              "How a problem compares against other jurisdictions of similar size",
              "Whether a public body has complied with its statutory obligations",
            ],
            correctIndex: 0,
            explanation:
              "A reader who knows only what is broken has a description and no information about what can be done inside it.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "What is the one-sentence test?",
            options: [
              "Could a reader use it to judge whether the response works",
              "Does it leave the reader more hopeful than when they began reading",
              "Does it describe a program that the community would benefit from expanding",
              "Does it allocate equal space to the problem and to the response",
            ],
            correctIndex: 0,
            explanation:
              "As opposed to giving them something that makes them feel better about it.",
            sourceLessonSlug: "what-solutions-journalism-is",
          },
          {
            prompt: "What are the four qualities?",
            options: [
              "Response, insight, evidence, limitations",
              "Problem, response, reaction, and recommendation for further action",
              "Accuracy, balance, fairness, and independence from the subject",
              "Source, date, location, and the motivation behind the material",
            ],
            correctIndex: 0,
            explanation:
              "Two describe the reporting and two describe the honesty, and dropping one of the second pair produces promotion.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "Which quality is most often missing?",
            options: [
              "Insight",
              "Evidence of whether the response is achieving what it claims",
              "Discussion of what the response has not solved and whom it misses",
              "Operational detail about what the response actually does",
            ],
            correctIndex: 0,
            explanation:
              "It is what separates a profile of an organization from reporting on a response.",
            sourceLessonSlug: "four-qualities",
          },
          {
            prompt: "What single possibility separates the form from advocacy?",
            options: [
              "A solutions piece can conclude the response does not work",
              "A solutions piece may decline to name the organization it examines",
              "A solutions piece can be published without seeking any comment",
              "A solutions piece may report a problem with no response attached",
            ],
            correctIndex: 0,
            explanation:
              "The same form, correctly executed, reaching a negative finding.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "What is the failure state that looks like success?",
            options: [
              "A piece that could not have concluded anything except approval",
              "A piece that concludes the response does not work as claimed",
              "A piece that runs substantially longer than the desk allocated",
              "A piece whose evidence section is labeled by kind and by period",
            ],
            correctIndex: 0,
            explanation:
              "If no available evidence would have changed the conclusion, the story was decided before it was reported.",
            sourceLessonSlug: "why-a-method",
          },
          {
            prompt: "What is the reversal test?",
            options: [
              "Would the piece have run unchanged had the evidence come out the other way",
              "Would the response's opponents accept the finished piece as a fair account",
              "Would the reporter publish the identical piece at a different outlet",
              "Would the organization have cooperated had the finding been unfavorable",
            ],
            correctIndex: 0,
            explanation:
              "The first of three tests separating a solutions story from an advocacy piece.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "What does the second test require of objections?",
            options: [
              "The strongest available one, from somebody who holds it",
              "At least two objections balanced against two endorsements of the response",
              "An objection from an official body rather than from an individual critic",
              "An objection the reporter is able to rebut within the piece itself",
            ],
            correctIndex: 0,
            explanation:
              "Rather than a weak version the writer chose, which is what a structural argument uses.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "What is a structural argument?",
            options: [
              "A piece in which the ordering rather than any sentence persuades",
              "A piece that states its argument openly in the first paragraph",
              "A piece whose sections follow the four qualities in strict order",
              "A piece arguing for a specific change in public policy",
            ],
            correctIndex: 0,
            explanation:
              "Response introduced as promising, doubters late and brief, ending resolving in favor. Nothing false, and the whole shape is an argument.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "What is required if you have a relationship with the response or its funders?",
            options: [
              "Say so in the piece",
              "Decline the assignment and pass it to a colleague on the desk",
              "Disclose it to the editor without disclosing it to readers",
              "Obtain the outlet's written approval before proceeding with reporting",
            ],
            correctIndex: 0,
            explanation:
              "One line, and it is the same rule the track's first course applied to itself.",
            sourceLessonSlug: "not-advocacy",
          },
          {
            prompt: "Why is good-news filler structurally unfalsifiable?",
            options: [
              "There is no claim in it to be wrong about",
              "Because its sources are almost always granted anonymity",
              "Because it is published outside the main news section",
              "Because it describes intentions rather than completed actions",
            ],
            correctIndex: 0,
            explanation:
              "It names a general condition rather than a specific problem and contains no evidence.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "Why is filler not harmless?",
            options: [
              "It occupies the space a response story would occupy",
              "It exposes the outlet to complaints from the people it features",
              "It costs more to produce than an accountability investigation",
              "It cannot be indexed by search engines and wastes archive space",
            ],
            correctIndex: 0,
            explanation:
              "It teaches an audience that coverage of anything working is decorative, which makes the credible version harder to publish.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "What question converts a dedicated-individual story into a response story?",
            options: [
              "What would happen to the results if they left",
              "How long have they been doing this particular work",
              "Who else is attempting something similar elsewhere",
              "What led them to start the work in the first place",
            ],
            correctIndex: 0,
            explanation:
              "Report the mechanism that persists rather than the dedication that may not.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "What is the honest complication about hopefulness?",
            options: [
              "A well-reported response story is often encouraging, and that is fine",
              "A hopeful piece cannot satisfy the evidence requirement at all",
              "A hopeful piece must always be balanced by a critical companion",
              "A hopeful piece belongs in features rather than on the beat",
            ],
            correctIndex: 0,
            explanation:
              "The distinction is between a piece whose claims can be checked and a piece with no claims in it.",
            sourceLessonSlug: "not-good-news",
          },
          {
            prompt: "Which quality does the hero imposter fail?",
            options: [
              "Insight",
              "Evidence of whether the response produced any measurable results",
              "Operational detail about what the response actually does day to day",
              "Discussion of the conditions the response depends on to work",
            ],
            correctIndex: 0,
            explanation:
              "What is transferable about an exceptional individual is usually nothing.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "What is false about a silver-bullet story containing no false sentences?",
            options: [
              "Its implication about transferability",
              "Its account of the size of the underlying problem being addressed",
              "Its characterization of the organization running the response",
              "Its description of how the response operates day to day",
            ],
            correctIndex: 0,
            explanation:
              "Nearly every response that works does so under conditions, and not naming them misleads about transfer.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "Which quality does the announcement fail completely?",
            options: [
              "Evidence",
              "Insight into what somebody elsewhere could learn from it",
              "Operational detail about how the program will be run",
              "Discussion of the limits the program is likely to encounter",
            ],
            correctIndex: 0,
            explanation:
              "Nothing has happened yet. Announcements are legitimate news and calling one a solutions story degrades the category.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "What question catches the favor, which the four qualities cannot?",
            options: [
              "Who wanted this story to exist, and would I have found it without them",
              "Who paid for the evaluation the piece relies on for its evidence",
              "Who else at the outlet has previously covered this organization",
              "Who approved the assignment, and on what publication schedule",
            ],
            correctIndex: 0,
            explanation:
              "A favor can satisfy all four qualities on paper and still be the thing the form is accused of being.",
            sourceLessonSlug: "imposters",
          },
          {
            prompt: "What is positive deviance?",
            options: [
              "Looking for the unit doing better under the same constraints",
              "Reporting on a program that departs from official policy guidance",
              "Identifying the worst-performing unit and explaining why it failed",
              "Comparing a single jurisdiction against the national average",
            ],
            correctIndex: 0,
            explanation:
              "Constraint matching is what makes it a finding rather than an anecdote.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "Where do most of a beat's response leads already sit?",
            options: [
              "In the data already read for accountability work",
              "In press releases from the organizations operating on the beat",
              "In the outlet's own archive of previously published coverage",
              "In pitches sent to the desk by advocacy organizations",
            ],
            correctIndex: 0,
            explanation:
              "A ranked table has two ends, and sorting it the other way takes about ten minutes.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "Which screening question most often kills a lead?",
            options: [
              "Access to the people it affects rather than only those who run it",
              "Whether the underlying problem can be stated with a number",
              "Whether the response is a specific program rather than an intention",
              "Whether any evidence of results exists, however preliminary",
            ],
            correctIndex: 0,
            explanation:
              "A no to the fourth is what turns a promising lead into an unpublishable piece.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "What does the course say about requiring novelty?",
            options: [
              "The most useful response is often an old one somebody stopped doing",
              "Novelty is the strongest available indicator that a response will transfer",
              "Novelty is required before a piece can be published as news at all",
              "Novelty correlates closely with the strength of the available evidence",
            ],
            correctIndex: 0,
            explanation:
              "Novelty is a reason a thing gets covered and is not a reason it works.",
            sourceLessonSlug: "finding-a-response",
          },
          {
            prompt: "What sits at the top of the evidence ladder?",
            options: [
              "A comparison against a group that did not receive the response",
              "A before-and-after measure taken on the same participants over time",
              "An outcome measure reported without any comparison at all",
              "Participant accounts of how the response helped them personally",
            ],
            correctIndex: 0,
            explanation:
              "Followed by before-and-after with alternatives ruled out, before-and-after alone, outcome only, participant reports, and activity counts.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "What is the most common substitution in evidence?",
            options: [
              "Activity reported where results should be",
              "A comparison group that was not genuinely comparable to participants",
              "A self-evaluation presented as an independent assessment of results",
              "A result reported without stating the period the measure covers",
            ],
            correctIndex: 0,
            explanation:
              "Numbers served, meals delivered, hours provided, and dollars spent describe what a program did, not what changed.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "What question separates the rungs of the ladder?",
            options: [
              "Compared to what",
              "Measured by which independent evaluator, and over what period",
              "Funded by whom, and with what conditions attached to the money",
              "Reported when, and in which published document originally",
            ],
            correctIndex: 0,
            explanation:
              "Nothing, the same people earlier, or a comparable group, and each answer produces a differently labeled claim.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "What is the stronger assertion a reader takes away regardless?",
            options: [
              "That the response caused the improvement",
              "That the improvement occurred at all during the measured period",
              "That the response deserves to be expanded to other places",
              "That the evidence has been independently verified by somebody",
            ],
            correctIndex: 0,
            explanation:
              "Where the evidence does not support cause, write the sentence saying outcomes improved and the contribution is not established.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "How should a program's own evaluation be treated?",
            options: [
              "As evidence of the weakest kind",
              "As independent evidence, since the program holds the underlying data",
              "As inadmissible and therefore excluded from the piece entirely",
              "As equivalent in strength to a funder-commissioned evaluation",
            ],
            correctIndex: 0,
            explanation:
              "Ask who conducted it, who paid, whether it was published in full, and whether anything unfavorable survived into the summary.",
            sourceLessonSlug: "evidence-of-results",
          },
          {
            prompt: "Which limitation question do readers most need answered?",
            options: [
              "What conditions the response depends on",
              "What the response has not yet managed to solve for anybody",
              "Whom the response does not reach among the affected population",
              "What the response costs to operate in a full budget year",
            ],
            correctIndex: 0,
            explanation:
              "A reader will assume transferability unless you name what made it work here.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "How should a response's failures be treated?",
            options: [
              "As evidence about how the thing works",
              "As a deduction from the response's overall record of achievement",
              "As material better suited to a separate accountability piece",
              "As background detail the general reader does not require",
            ],
            correctIndex: 0,
            explanation:
              "They are the most instructive part and the part operators are least likely to volunteer, so ask directly.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "Why is a response serving forty not a small version of one serving forty thousand?",
            options: [
              "The constraints that bind at scale are different in kind",
              "Because smaller programs are typically better funded per participant",
              "Because participant reports are less reliable in very small groups",
              "Because small programs rarely publish any formal evaluation",
            ],
            correctIndex: 0,
            explanation:
              "Implying a large solution from a small program is a claim about scaling nobody has evidence for.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "Where does the central limitation go?",
            options: [
              "Beside the central claim",
              "In the closing section, alongside all the other qualifications",
              "In a linked methodological note published with the piece",
              "In the headline, where the strongest claim also appears",
            ],
            correctIndex: 0,
            explanation:
              "For the same reason the verification course gave: a caveat in the last paragraph does not travel with a share.",
            sourceLessonSlug: "limitations-and-transfer",
          },
          {
            prompt: "What does the recommended structure open on?",
            options: [
              "The response doing something specific and concrete",
              "The scale of the problem, with a comparison to other places",
              "A participant describing in their own words what changed",
              "The organization's founding story and its stated mission",
            ],
            correctIndex: 0,
            explanation:
              "One paragraph, then the problem briefly with a number, then the operational section, which is the longest.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "Where do the evidence's kind, source, and period belong?",
            options: [
              "In the sentence carrying the claim",
              "In a linked citation published at the foot of the piece",
              "In a closing note describing the reporting methodology",
              "In the caption of a chart accompanying the story",
            ],
            correctIndex: 0,
            explanation:
              "The same in-sentence rule the verification and report-reading courses applied.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "What is the most common way a careful solutions story becomes misleading?",
            options: [
              "A headline stating a result the evidence does not support",
              "An evidence section placed after the limitations rather than before",
              "A quotation from an operator that is left unattributed in the text",
              "A problem paragraph that understates the scale of the difficulty",
            ],
            correctIndex: 0,
            explanation:
              "The most-read part of a piece being the least accurate part.",
            sourceLessonSlug: "structuring-the-story",
          },
          {
            prompt: "Which of the four source groups does nobody call?",
            options: [
              "Somebody who tried the same thing and stopped",
              "The independent expert who knows the field and has no stake",
              "The people the response acts on in their daily lives",
              "The operators who run the response day to day",
            ],
            correctIndex: 0,
            explanation:
              "They usually talk because nobody has asked, and they hold the conditions information the limitations section needs.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "Why interview operators about mechanism rather than merit?",
            options: [
              "Merit questions invite a pitch",
              "Merit questions expose the reporter to a later claim of bias",
              "Mechanism questions can be asked more quickly under deadline",
              "Merit questions fall outside the scope of the four qualities",
            ],
            correctIndex: 0,
            explanation:
              "Mechanism questions produce a description you can check: intake, exclusions, caseload, and end of funding cycle.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "What must be said to a participant before interviewing them?",
            options: [
              "Whether the organization will be told what they said",
              "That the finished piece may be published without using their name",
              "That the organization has already approved the interview taking place",
              "That the reporter holds no relationship with the program at all",
            ],
            correctIndex: 0,
            explanation:
              "If it will not be, say so plainly, and if it will be, say that instead.",
            sourceLessonSlug: "sources-and-scrutiny",
          },
          {
            prompt: "What accountability question does a response story always raise?",
            options: [
              "If it works and is not being done at scale, why not",
              "Who has profited financially from the response's recent expansion",
              "Whether the responsible officials were aware of it beforehand",
              "Whether the program complies fully with its funding conditions",
            ],
            correctIndex: 0,
            explanation:
              "It is frequently the better story and it is only available to a reporter who did the response reporting first.",
            sourceLessonSlug: "solutions-on-a-beat",
          },
          {
            prompt: "How do accountability and response coverage of the same subject strengthen each other?",
            options: [
              "Neither reads as cynicism or promotion once both exist",
              "Each reaches a different segment of the outlet's paying audience",
              "Each satisfies a separate requirement of the professional code of ethics",
              "Each is produced by a different desk working to different standards",
            ],
            correctIndex: 0,
            explanation:
              "The accountability work is not cynicism because you have reported what works, and the response work is not promotion because you have reported what does not.",
            sourceLessonSlug: "solutions-on-a-beat",
          },
        ],
      },
    },
  ],
};
