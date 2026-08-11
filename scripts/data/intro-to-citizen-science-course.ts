import type { AuthoredCourse } from "./authored-course";

// Intro to Citizen Science. Course 4 of the Science & Math track (SCI-04).
//
// Outline: plans/future-courses/sciences/outlines/04-intro-to-citizen-science.md
//
// WHY IT EXISTS: SCI-01, -02 and -03 all teach reading other people's evidence. This one teaches
// making your own, and it is the practical capstone of Wave 1.
//
// NOT BLOCKED BY THE GHANA DATA. BAM deferred the beach-cleanup figures pending operator task 242.
// That decision does not touch this course: this is the METHOD course and it teaches from published
// projects and worked hypotheticals. The Ghana numbers, when they arrive, feed a separate course.
//
// FOUR RULES THIS FILE FOLLOWS AND THE NEXT AUTHOR SHOULD NOT BREAK:
//
// 1. NO INVENTED DATA. Where an example needs numbers they are either real and cited, or the text
//    says in the visible copy that they are made up for the illustration. This is the course that
//    teaches people to catch exactly that, so it cannot do it.
// 2. LESSON 6 IS THE COURSE. Everything before it sets up the confounder and everything after
//    handles the consequences. It is the sibling of SCI-01 lesson 10 (correlation and causation
//    from the READING side); cross-link both ways and never contradict it.
// 3. DO NOT CLAIM THE NGSS INVESTIGATION PRACTICE. The learner DESIGNS a study in the capstone and
//    is not required to run it or report results. Claiming the practice dimension here would be
//    borrowing credit that only the later data course can earn. See the note in claims.ts.
// 4. LESSON 11 NAMES LIVE EXTERNAL PROJECTS. Re-verify each one is still running and its terms
//    unchanged before any re-publish. A dead link in the lesson that says "go do this" is the worst
//    possible dead link.

export const INTRO_TO_CITIZEN_SCIENCE_COURSE: AuthoredCourse = {
  title: "Intro to Citizen Science",
  description:
    "How to design a study you could actually run, and how to know what your own data can and cannot support once you have run it. The question, the protocol, the sampling, the confounders, the recording, and the honest write-up. Finish with a study you could start next month.",
  lessons: [
    // ── Part 1 ─────────────────────────────────────────────────────────────────────────────────
    {
      slug: "what-citizen-science-is",
      title: "1 · What citizen science is, and what it is not",
      section: "Part 1 · Before you measure anything",
      body: `"Citizen science" covers an enormous range, from counting birds in your garden for fifteen minutes to communities designing the research question themselves because nobody else was asking it.

The range matters, because the label alone tells you almost nothing about how good the work is.

## Where volunteer data is genuinely the best available

Three situations, and they are real advantages rather than consolations:

**Coverage.** No research budget can put observers in ten thousand places every week. Volunteers can be in ten thousand places, and for anything that varies over a wide area, that beats a small number of perfect measurements.

**Duration.** Some volunteer records run for decades. Long records are extraordinarily valuable and almost impossible to fund deliberately, because a funding cycle is a few years and a trend can take thirty.

**Local knowledge.** Someone who has walked the same stretch of river for twenty years notices a change that no visiting researcher would, because they know what normal looks like there.

## Where it is decoration

Also real, and worth naming:

- When the measurement genuinely requires calibrated equipment and training, and the protocol pretends otherwise.
- When the data is collected and nobody ever analyses it, which happens more than anyone likes to admit.
- When participation is the actual goal and the data is a by-product. That can be a perfectly good outreach programme. It is not a study, and calling it one sets the participants up to be disappointed.

## Three kinds of study

You will meet these constantly, so learn the distinction now:

| Kind | What you do | What it can show |
|---|---|---|
| **Sample survey** | Observe a subset of a population without changing anything | What is there, and roughly how much |
| **Observational study** | Watch what happens, comparing groups you did not create | Associations, and never causation on its own |
| **Experiment** | Assign the treatment yourself, ideally at random | Causation, because you controlled the assignment |

Nearly all citizen science is the first two. **The third is rare outside a laboratory**, and that is the single most important thing to know about what your own data will be able to say.

:::reveal You count butterflies along the same path each week for three years. Which of the three kinds of study is that, and what is the ceiling on what it can show? ||| A sample survey, repeated to make a time series. It can show what is present and how it changes, and it can reveal associations with things like weather. It cannot on its own establish that any particular factor CAUSED a change, because you never assigned anything.

## Sources

Cornell Lab of Ornithology. (n.d.). *Citizen science at the Cornell Lab*. https://www.birds.cornell.edu/home/citizen-science/

U.S. Environmental Protection Agency. (n.d.). *Quality assurance for volunteer monitoring*. https://www.epa.gov/`,
    },
    {
      slug: "the-question-comes-first",
      title: "2 · The question comes first",
      section: "Part 1 · Before you measure anything",
      recallContent: [
        {
          prompt: "Name the three kinds of study, and say which one citizen science almost never is.",
          answer: "Sample survey, observational study, and experiment. It is almost never an experiment, because that requires assigning the treatment yourself.",
        },
      ],
      body: `"Is the beach getting dirtier?" is a concern, not a question. You cannot answer it, because nothing in it says what would count as an answer.

Turning a concern into a question means pinning down five things.

**What exactly.** Dirtier in what respect? Plastic bottles? Total mass of debris? Cigarette ends? Anything visible? These do not move together, and a beach can improve on one while worsening on another.

**Where exactly.** The whole beach? A fixed transect? The tide line? "The beach" is not a location you can return to precisely, and precision is the thing that makes a repeat measurement comparable.

**Over what period.** Compared with last month, last year, or before something specific happened?

**Compared with what.** Against its own past, against a nearby beach, or against a standard?

**How would you know you were wrong.** The one people skip. If the beach is *not* getting dirtier, what would you expect to see instead? A question that cannot come out negative is not a question.

## The rewrite

> Is the beach getting dirtier?

becomes something like:

> Along a fixed 200-metre stretch, has the number of plastic items collected per volunteer-hour changed between this year and last, measured the same way each month?

Longer, and much less satisfying to say out loud. But every clause is doing work: it names the unit, the place, the period, the comparison, and the normalisation.

**Notice that the second version can come out "no."** That is what makes it a question.

## Where this connects

This is the Plan stage of the Field Log: *turn your subject into a focused, researchable question*. Same discipline, whether the output is a documentary or a dataset.

:::reveal A group wants to know whether a new bin has reduced litter in a park. Give one clause their question must contain to be answerable, and say why. ||| Any of: what counts as litter, the exact area surveyed, how often and at what time of day it is counted, or what it is being compared with. Each one is a thing that must be identical between the before and after measurements, or the comparison measures the method rather than the litter.

## Sources

Cornell Lab of Ornithology. (n.d.). *Developing a citizen science project*. https://www.birds.cornell.edu/

U.S. Geological Survey. (n.d.). *Designing a monitoring program*. https://www.usgs.gov/`,
    },
    {
      slug: "what-you-measure-vs-what-you-care-about",
      title: "3 · What you can measure vs what you care about",
      section: "Part 1 · Before you measure anything",
      recallContent: [
        {
          prompt: "What is the clause most people leave out of a research question?",
          answer: "How you would know you were wrong. A question that cannot come out negative is not a question.",
        },
      ],
      body: `You care about whether the beach is harming wildlife. You count bags of collected rubbish. Those are not the same thing, and the distance between them is made of assumptions.

A **proxy** is a thing you can measure standing in for a thing you cannot. Almost all measurement uses them. The failure is not using a proxy; it is forgetting you did.

## Walking the chain

Bags collected → mass of debris → amount of debris present → pollution → harm.

Every arrow is an assumption:

- **Bags to mass:** assumes bags are packed consistently. Different volunteers pack differently, and a bag of polystyrene and a bag of bottles differ enormously in weight.
- **Mass to amount present:** assumes you collect a consistent fraction of what is there. More volunteers collect more of it, so the number partly measures turnout.
- **Amount to pollution:** assumes visible debris tracks the rest. Microplastics and dissolved chemicals are invisible and may not move with the visible stuff at all.
- **Pollution to harm:** assumes the amount is what matters, when for wildlife the type often matters more. A hundred bottle caps and one length of net do very different damage.

**Four arrows. Four ways for a real, carefully collected number to fail to answer the question you asked.**

## What to do about it

Not despair, and not abandon proxies. Two things:

1. **Write the chain down** when you design the study, so you know what you are assuming.
2. **Measure closer to what you care about where you can.** Counting items by type is barely more work than counting bags and survives three of the four arrows.

## The general form

This applies far beyond beaches. Test scores stand in for learning. GDP stands in for prosperity. Steps stand in for exercise. Response times stand in for service quality.

Each is a real measurement of something, standing in for something else. **And each one, once people are judged on it, tends to be optimised directly**, which loosens the connection to the thing it was chosen to represent.

:::reveal You want to know whether a beach is getting cleaner and you count bags collected each week. Name two ways that number could RISE while the beach genuinely gets cleaner. ||| More volunteers turned out, so more of the same debris was collected. Or bags were packed less full than before. The count measures collection effort at least as much as it measures how much rubbish is there.

## Sources

National Oceanic and Atmospheric Administration. (n.d.). *Marine Debris Monitoring and Assessment Project*. https://marinedebris.noaa.gov/

U.S. Environmental Protection Agency. (n.d.). *Indicators and their limitations*. https://www.epa.gov/`,
    },
    {
      slug: "the-protocol",
      title: "4 · The protocol",
      section: "Part 1 · Before you measure anything",
      recallContent: [
        {
          prompt: "What is a proxy, and what is the actual failure mode when using one?",
          answer: "A measurable thing standing in for what you really care about. The failure is not using one, it is forgetting you did and treating the proxy as the thing.",
        },
      ],
      body: `The least glamorous lesson in the course, and the one that decides whether the data is worth anything.

A **protocol** is a written description of exactly how a measurement will be made, produced **before** any measuring happens. Not a summary written afterwards. Written first, then followed.

## Why "before" is load-bearing

If you decide the method as you go, you will decide it in ways that suit what you are finding, and you will do this without noticing, because every individual decision will feel sensible.

Written first, the protocol is a commitment you can be held to, including by yourself six months later when you have forgotten what you did.

## What a usable protocol pins down

- **What counts.** Is a bottle cap an item? A fragment? What is the smallest thing you record?
- **Where exactly.** Fixed points you can return to, described so someone else could find them.
- **When.** Time of day and tide state matter for a beach; time of day matters for birds and for water chemistry.
- **How long.** A fixed duration, or a fixed area, but fixed.
- **With what.** Which instrument, and how it is read.
- **By whom.** Observers differ. Consistently, and more than people expect.
- **What to do when reality does not cooperate.** It rains. The path floods. Half the volunteers do not turn up. **Decide the rule in advance**, because deciding it in the moment is where bias enters.

## The rule when something changes

Something always changes. A new observer, a replaced instrument, a shifted schedule.

**Record the change.** A protocol change with a date attached is a manageable complication: you can look at the data either side of it and see whether it moved. An unrecorded change is a permanent unexplained step in your series that nobody will ever be able to interpret.

## The test

Give the protocol to someone who was not there. Could they reproduce your measurement? If they would have to ask you a question, the answer to that question belongs in the protocol.

:::reveal A monitoring group replaces its old thermometer with a new one mid-season and the readings shift slightly. Why is this recoverable if they wrote it down, and not if they did not? ||| Written down, it is a known step at a known date: you can compare either side of it, and even run both instruments together for a period to calibrate. Unrecorded, the shift is indistinguishable from a real change in the water, and nobody can tell later which it was.

## Sources

CoCoRaHS. (n.d.). *Observer training and measurement protocols*. https://www.cocorahs.org/

U.S. Environmental Protection Agency. (n.d.). *Volunteer monitoring quality assurance project plans*. https://www.epa.gov/`,
    },
    {
      slug: "where-and-when-you-look",
      title: "5 · Where and when you look decides what you find",
      section: "Part 1 · Before you measure anything",
      recallContent: [
        {
          prompt: "Why must a protocol be written BEFORE any measuring happens?",
          answer: "Because decisions made during collection get made in ways that suit what you are finding, and each one feels sensible at the time.",
        },
      ],
      body: `You cannot measure everywhere. What you choose to measure instead is your sample, and it decides what you are able to see.

| Approach | How it works | The risk |
|---|---|---|
| **Convenience** | Measure where it is easy | The easy places are systematically unusual |
| **Systematic** | A fixed rule: every 10 metres, every Tuesday | A rule can coincide with a pattern in the thing |
| **Random** | Chosen by chance within a defined area | Harder to organise; can miss rare things entirely |
| **Stratified** | Divide into types, then sample within each | More design work, usually worth it |

## The convenience trap

This is the one that catches volunteer projects, because convenience sampling is what happens by default when nobody decides otherwise.

The car park end of the beach is easiest to reach. It is also where most people are, which is where most litter is dropped and where councils clean most often. Sampling there tells you about a place that is unlike the rest of the beach in several directions at once, and you will not be able to say which.

**Convenience sampling is not always wrong.** If your question is about that spot, it is exactly right. It becomes wrong when the results are described as if they were about the whole beach.

## Time is a sample too

People remember to think about where and forget to think about when. Almost everything varies through the day and the year:

- Dissolved oxygen in a stream rises through daylight and falls overnight.
- Bird activity concentrates near dawn.
- Beach litter depends on the tide and on how recently the last clean-up happened.
- Traffic and footfall vary by hour and by day of the week.

**A measurement is a place AND a time.** A study that fixes one and lets the other float has left a door open, and lesson 6 is about what walks through it.

:::reveal A group samples a stream for dissolved oxygen "whenever someone is free," which usually means weekday afternoons. What systematic error does that introduce? ||| Afternoon readings catch dissolved oxygen near its daily peak, since aquatic plants produce it in daylight and consume it overnight. The series will systematically overstate typical oxygen and will completely miss the pre-dawn minimum, which is when it is most likely to be low enough to matter.

## Sources

U.S. Geological Survey. (n.d.). *Sampling design for water-quality monitoring*. https://www.usgs.gov/

Cornell Lab of Ornithology. (n.d.). *eBird best practices for data quality*. https://ebird.org/about`,
    },
    // ── Part 2 ─────────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-confounder",
      title: "6 · The confounder",
      section: "Part 2 · The lesson this course exists for",
      recallContent: [
        {
          prompt: "Why is convenience sampling a problem, and when is it fine?",
          answer: "The easy places are systematically unusual. It is fine when the question is genuinely about that spot, and wrong when the results are described as being about the whole area.",
        },
      ],
      body: `Here is the lesson everything else was built for.

Suppose you run a beach clean-up for a year, record how much rubbish you collect each session, and also record the rainfall in the days before. When you plot them, the relationship looks real: **wetter weeks, more rubbish.**

The tempting conclusion is that rain washes debris onto the beach. It might. Now list everything *else* that moves with rain.

## The list

- **Volunteer turnout.** Fewer people come out in bad weather. If turnout falls when it rains, and you measure total collected, the relationship should go the *other* way, which means something is already more complicated than it looks.
- **Tide and wind.** Storms bring rain and also bring surf and onshore wind. Wind moves debris independently of anything the rain does.
- **How recently the beach was last cleaned.** If the council skips a scheduled clean in bad weather, more is left for you regardless of how much arrived.
- **Season.** Rain, visitor numbers, and daylight all vary through the year together. Any two of them will appear related.
- **Which stretch you worked.** If wet days push the group toward the accessible end, you changed the location and the weather at the same time.
- **Who showed up.** Regulars collect differently from a school group. If the mix varies with weather, the method varied with weather.

**Six candidates, and one of them is your own measuring process.** That is the uncomfortable part: several of these are ways the *measurement* responds to rain rather than ways the *beach* does.

## The generalisation

A confounder is anything that moves with your suspected cause and could produce your observed effect on its own. Three specific shapes to look for:

1. **A common cause.** Season drives both.
2. **A change in the measuring process.** Weather changes who turns up and how they work.
3. **A change in what you are comparing against.** The council's schedule shifts.

The second one is the one people miss, and it is the one volunteer studies are most exposed to, because the volunteers are the instrument.

## What to actually do

You cannot eliminate confounders in an observational study. You can:

- **Name them in advance**, in the protocol, so you are not generating explanations after seeing the result.
- **Measure them.** Record turnout, tide, wind and time since last clean *alongside* the rubbish. A measured confounder can be examined; an unmeasured one cannot.
- **Normalise where you can.** Per volunteer-hour beats per session.
- **Report them.** The write-up says what else moved.

## The sibling lesson

*How to Read a Number*, lesson 10, teaches this from the reading side: someone hands you a correlation and you interrogate it. This lesson is the same idea from the collecting side, where you can still do something about it.

**The collecting side is the better position to be in, and almost nobody uses it**, because naming the confounders is work you do before you have a result, when it is least satisfying.

:::reveal In the rain-and-rubbish study, name one candidate confounder that is about the MEASUREMENT rather than about the beach, and say how you would handle it. ||| Volunteer turnout, or which stretch got worked, or who showed up. Handle it by recording it every session and normalising, for example reporting items per volunteer-hour on a fixed stretch rather than total bags. That does not remove the problem but it makes it visible and adjustable.

## Sources

Pearl, J., & Mackenzie, D. (2018). *The book of why: The new science of cause and effect*. Basic Books.

National Oceanic and Atmospheric Administration. (n.d.). *Marine debris monitoring: Shoreline survey protocols*. https://marinedebris.noaa.gov/`,
    },
    {
      slug: "controls-and-baselines-without-a-laboratory",
      title: "7 · Controls and baselines without a laboratory",
      section: "Part 2 · The lesson this course exists for",
      recallContent: [
        {
          prompt: "Which kind of confounder are volunteer studies most exposed to, and why?",
          answer: "A change in the measuring process, because the volunteers ARE the instrument, so anything that changes who turns up or how they work changes the measurement.",
        },
      ],
      body: `You cannot randomise the weather and you cannot assign a treatment to a beach. You still have moves available, and each one costs something.

**A comparison site.** Find somewhere similar that is not getting the intervention, and measure both. If the treated site improves and the comparison does not, that is real evidence. *Cost:* twice the work, and the two sites are never truly comparable, so you have to say how they differ.

**A before period.** Measure for a while before the change. *Cost:* patience, and it does not protect you from something else changing at the same moment.

**Multiple before-and-after cycles.** If the effect appears each time the intervention is applied and fades each time it stops, coincidence gets much harder to sustain. *Cost:* time, and it needs an intervention you can switch on and off.

**A negative control.** Measure something that should NOT respond. If your supposedly specific effect shows up there too, something is wrong with your method rather than out in the world. *Cost:* almost nothing, and it is badly underused.

**A blind count.** The person counting does not know which group a sample is from. *Cost:* organisation. **Benefit:** larger than people expect, because expectation genuinely changes what people record, without any dishonesty at all.

## The honest framing

None of these is as good as a randomised experiment. All of them are much better than nothing, and a study using two or three of them and saying so is a serious piece of work.

**The failure is not weak controls. The failure is weak controls described as though they were strong ones.**

## Which to reach for first

If you can afford exactly one thing, take **a before period plus recording your confounders** (lesson 6). Together they let you say what changed and what else changed alongside it, which is most of what an observational study can honestly offer.

:::reveal A group counts litter before and after a new bin is installed and finds a large drop. What single cheap addition would most strengthen the claim that the bin did it? ||| A comparison site: a similar area with no new bin, counted on the same days by the same method. If litter drops at the bin site and holds steady at the comparison, a general seasonal decline is largely ruled out.

## Sources

U.S. Environmental Protection Agency. (n.d.). *Study design for volunteer monitoring*. https://www.epa.gov/

U.S. Geological Survey. (n.d.). *Reference and control sites in monitoring design*. https://www.usgs.gov/`,
    },
    {
      slug: "recording-data-so-future-you-can-use-it",
      title: "8 · Recording data so future-you can use it",
      section: "Part 2 · The lesson this course exists for",
      recallContent: [
        {
          prompt: "What is a negative control, and why is it underused?",
          answer: "Measuring something that should NOT respond. If your effect shows up there too, the problem is your method. It is underused because it costs almost nothing and feels pointless until it saves you.",
        },
      ],
      body: `Most citizen-science data is lost not because it was collected badly but because it was recorded in a way nobody could later use.

## The rules

**Units on everything, always.** A column of numbers headed "temp" is unusable. Celsius or Fahrenheit? A whole season's work can be rendered worthless by an ambiguity that took two seconds to prevent.

**Timestamps with the date, the time, and the time zone.** Especially across a daylight-saving change, where an hour repeats and an hour vanishes.

**A location precise enough to return to.** "North end" is not. Coordinates, or a described fixed point.

**Distinguish missing from zero.** These are completely different and they are catastrophically easy to conflate. A blank cell meaning "nobody went out that day" and a blank cell meaning "we looked and found none" will be averaged together by any tool you use. **Decide the convention, write it down, and never leave a cell ambiguous.**

**Record the conditions alongside the measurement.** Weather, observer, tide, how long you spent. This is where lesson 6's confounders live, and you cannot add them later.

**One row per observation.** Not one row per site with columns for each date. The tall shape survives new sites, new dates, and any tool you later use; the wide shape has to be rebuilt every time something changes.

## The one inviolable rule

**Never overwrite the raw data.**

Corrections go in a new column, or a new file, with a note about what changed and why. The moment you edit an original value in place, you have lost the ability to check any conclusion that came from it, and you have lost it silently.

This is the same rule the documentation courses apply to a source recording, for the same reason: **the record of what you actually observed is a different object from your best current interpretation of it**, and collapsing the two destroys the more valuable one.

:::reveal Your spreadsheet has blank cells in the count column. Why is that potentially fatal to the analysis, and what should have been done? ||| Because a blank could mean "we surveyed and found nothing" (a real zero) or "no survey happened" (missing). Averaging treats them completely differently and no tool can tell them apart. Every cell needs an explicit value under a written convention, with zero and missing recorded distinctly.

## Sources

U.S. Geological Survey. (n.d.). *Data management for monitoring programs*. https://www.usgs.gov/

Cornell Lab of Ornithology. (n.d.). *eBird data quality and complete checklists*. https://ebird.org/about`,
    },
    // ── Part 3 ─────────────────────────────────────────────────────────────────────────────────
    {
      slug: "error-uncertainty-and-how-precise-to-be",
      title: "9 · Error, uncertainty, and how precise to be",
      section: "Part 3 · Reporting honestly",
      recallContent: [
        {
          prompt: "What is the one inviolable rule of recording data?",
          answer: "Never overwrite the raw data. Corrections go in a new column with a note, because the record of what you observed is a different object from your current interpretation of it.",
        },
      ],
      body: `"We removed 47.3 kilograms of rubbish" sounds impressively precise. If it was weighed on a bathroom scale, it is a lie about precision, and a reader who trusts the decimal is being misled by a decision the writer probably made without thinking.

Reporting a number more precisely than you measured it is a claim about your method that your method does not support.

## Two things that get conflated

**Precision** is how finely you can distinguish values. A scale reading to 0.1 kg is more precise than one reading to 1 kg.

**Accuracy** is how close you are to the truth. A scale reading to 0.1 kg that is 3 kg out is precise and inaccurate, and it will fool people for longer than a crude one would, because the decimals look like care.

## How precise should you be?

The rule of thumb: **report to the finest level your method can actually distinguish, and no finer.**

- Bathroom scale, bags weighed with people holding them: report to the nearest kilogram, and honestly perhaps to the nearest 5.
- Counting items by hand: whole numbers, and say whether fragments were counted.
- A derived figure like items per volunteer-hour: no more precise than the roughest input. If hours were recorded to the nearest half hour, the answer does not deserve two decimals.

**A derived number cannot be more precise than the worst input that went into it.** That single sentence prevents most of the false precision in amateur reporting.

## Say what you do not know

The strongest thing a small study can do is state its limits explicitly:

> "Counted by two observers on a fixed 200-metre transect, monthly, at low tide. Fragments under about 2 cm were not counted. Two months were missed because of weather."

That paragraph makes the study *more* credible, not less. A reader can now judge exactly what it supports.

The opposite move, reporting a clean number and staying quiet about the missed months, is the failure. **Not because it is dishonest, but because the reader has no way to discount it appropriately**, and so they will discount it either too much or not at all.

:::reveal You collected 12 bags, estimated at "about 5 to 8 kg each," over 3.5 volunteer-hours. Why would "17.1 kg per hour" be a dishonest way to report it? ||| Because the bag weights are only known to within a few kilograms each, so the total is somewhere in a wide range, and three significant figures claims a precision the inputs cannot support. A derived number cannot be more precise than its roughest input. "Roughly 60 to 95 kg over 3.5 hours" is both less satisfying and true.

## Sources

National Institute of Standards and Technology. (n.d.). *Uncertainty of measurement results*. https://www.nist.gov/

U.S. Environmental Protection Agency. (n.d.). *Data quality objectives*. https://www.epa.gov/`,
    },
    {
      slug: "ethics-consent-and-who-owns-what-you-collected",
      title: "10 · Ethics, consent, and who owns what you collected",
      section: "Part 3 · Reporting honestly",
      recallContent: [
        {
          prompt: "What is the difference between precision and accuracy, and which one fools people longer?",
          answer: "Precision is how finely you distinguish values; accuracy is how close to the truth you are. A precise but inaccurate figure fools people longer, because the decimals look like care.",
        },
      ],
      body: `Collecting data in a place involves the people of that place, whether or not you meant it to.

## Who owns it

If a community helped gather it, "the person who typed it up owns it" is a position, not a fact, and it is worth settling before rather than after. Questions that need answers:

- Can participants get the data back, in a usable form?
- Can they use it for their own purposes, including purposes you disagree with?
- If it is published, who is named, and who decides?
- If someone wants their contribution removed, can that be done?

None of these is hard when agreed in advance. All of them are painful afterwards.

## Credit

The person who walked the transect every month for two years is a contributor. Naming only the person who did the analysis is a choice, and a common one.

This catalog has a whole track on people whose labour became someone else's credit. **A citizen-science project that repeats the pattern while calling itself community science has not noticed what it is doing.**

## When not to publish a location

Some data is dangerous in public:

- **Nesting or den sites** of species people collect, disturb or kill.
- **Rare plants** that get dug up.
- **Archaeological sites**, which get looted.
- **Anything that could bring enforcement down on the people who helped you.** If your pollution monitoring is on land where people live informally, publishing precise coordinates can put those residents at risk from the same authorities you hoped would act on the pollution.

The standard practice is to blur or withhold precise locations while publishing everything else. Established projects do this routinely, which is worth knowing so it does not feel like an unusual step.

## People in the frame

If you photograph the work and people are identifiable, you need their agreement to use it, and the Field Log's Consent stage covers it. **This course does not reinvent it, and it does not skip it.** Minors need a guardian's consent, and that cannot be retrofitted after the day.

:::reveal Your monitoring shows contamination on land where people live informally. Publishing precise coordinates could bring the authorities. Why is that not straightforwardly good? ||| Because the authority most likely to arrive first may act against the residents rather than against the contamination, through eviction or enforcement. The people who helped you would bear the cost of your publication. Publishing the finding while withholding precise locations, and talking to the residents about what they want published, is the standard practice.

## Sources

Citizen Science Association. (n.d.). *Ethics and community engagement in citizen science*. https://citizenscience.org/

Cornell Lab of Ornithology. (n.d.). *Sensitive species and location obscuring*. https://ebird.org/about`,
    },
    {
      slug: "projects-you-can-join",
      title: "11 · Projects you can actually join",
      section: "Part 3 · Reporting honestly",
      recallContent: [
        {
          prompt: "Give one situation where the responsible choice is to publish a finding but withhold the precise location.",
          answer: "Nesting or den sites, rare plants, archaeological sites, or anywhere publishing coordinates could bring enforcement against the people who helped you.",
        },
      ],
      body: `You do not have to start your own project. Joining an established one is usually a better first move, because you get a tested protocol, an existing time series, and people who will tell you when you are doing it wrong.

## What to look for before joining

Four questions, and they are the ones this course has been building toward:

1. **Is there a written protocol?** If not, walk away.
2. **What happens to the data?** Is it published, is it used, can you see it?
3. **What is expected of you?** A one-off afternoon and a weekly commitment are very different things.
4. **How is data quality handled?** Serious projects have review, flagging, or verification steps and will tell you about them.

## Established projects worth looking at

Each of these is long-running, free to join, and publishes its protocols. Check current details before committing, because participation terms change:

- **eBird** (Cornell Lab of Ornithology). Bird observations, with a strong emphasis on the "complete checklist" concept, which exists precisely because incomplete lists break the analysis.
- **iNaturalist.** Photograph any organism; the community and its tools help identify it. Verified records feed research use.
- **CoCoRaHS.** Daily precipitation from a standard gauge. The definition of a simple protocol producing genuinely valuable long-run data.
- **Globe at Night.** Night-sky brightness by naked-eye comparison. Requires nothing but your eyes and a clear night, and it connects directly to *How We Know What's Out There*.
- **Zooniverse.** A platform hosting many projects where the work is classifying images or transcribing records, which you can do from anywhere.

## Why joining teaches faster than starting

Follow someone else's protocol for a season and you will feel every decision this course described. Where it is ambiguous. Where you were tempted to skip a day. Where you wanted to record something the form does not have a field for.

**That experience is worth more than reading about it**, and it is a much cheaper way to learn than discovering the same things in your own study after a year of collecting.

:::reveal eBird asks whether your checklist was "complete," meaning you recorded every species you detected. Why does that question matter so much for the analysis? ||| Because a list of only interesting species tells you nothing about what was ABSENT. Complete checklists let researchers infer non-detection, which is what makes it possible to measure change in a common species. Without it the data only ever says what someone found notable.

## Sources

Cornell Lab of Ornithology. (n.d.). *eBird*. https://ebird.org/

CoCoRaHS. (n.d.). *Community Collaborative Rain, Hail and Snow Network*. https://www.cocorahs.org/`,
    },
    {
      slug: "check-designing-a-study",
      title: "12 · Knowledge check: designing a study",
      section: "Part 3 · Reporting honestly",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "A beach group finds that they collect more rubbish in weeks with more rain. Which candidate explanation is about their MEASUREMENT rather than about the beach?",
            options: [
              "Volunteer turnout changes with the weather, so the total collected partly measures how many people came",
              "Rain washes debris down storm drains and onto the beach, increasing what is there to collect",
              "Storms bring onshore wind that moves floating debris toward the shore independently of rain",
              "Wet ground makes buried items easier to see, so more of what is present gets found",
            ],
            correctIndex: 0,
            explanation:
              "Turnout changes who is doing the measuring and how much effort goes in, so it alters the instrument rather than the beach. The others are all real candidate mechanisms out in the world. Volunteer studies are unusually exposed to this kind, because the volunteers are the instrument.",
            sourceLessonSlug: "the-confounder",
          },
          {
            prompt: "A group samples stream dissolved oxygen 'whenever someone is free', which usually means weekday afternoons. What systematic error does that produce?",
            options: [
              "Readings cluster near the daily peak, so the series overstates typical oxygen and misses the pre-dawn minimum",
              "Readings are taken by different observers each time, so instrument error accumulates across the season",
              "Weekday samples miss weekend recreational activity, which is the main influence on dissolved oxygen",
              "Afternoon water is warmer, so the readings measure temperature rather than the oxygen concentration",
            ],
            correctIndex: 0,
            explanation:
              "Aquatic plants produce oxygen in daylight and consume it overnight, so afternoon readings sit near the daily high. The lowest values, which are the ones most likely to matter for fish, occur before dawn and would never be sampled.",
            sourceLessonSlug: "where-and-when-you-look",
          },
          {
            prompt: "Blank cells appear in a monitoring spreadsheet's count column. Why is this potentially fatal to the analysis?",
            options: [
              "A blank cannot be distinguished from a true zero, and analysis tools will treat them very differently",
              "Blanks cause spreadsheet software to shift subsequent rows, corrupting the alignment of the dataset",
              "Blanks indicate the observer was untrained, so those sessions have to be excluded from the series",
              "Blanks make the file larger than necessary, which slows down any later statistical processing",
            ],
            correctIndex: 0,
            explanation:
              "'We surveyed and found none' and 'no survey happened' are completely different facts, and no tool can tell them apart from an empty cell. The convention has to be decided in advance and every cell given an explicit value.",
            sourceLessonSlug: "recording-data-so-future-you-can-use-it",
          },
          {
            prompt: "Twelve bags of rubbish, each estimated at 'about 5 to 8 kg', were collected over 3.5 volunteer-hours. Why is reporting '17.1 kg per volunteer-hour' misleading?",
            options: [
              "A derived figure cannot be more precise than its roughest input, and the bag weights are known only within a few kilograms",
              "Volunteer-hours should never be used as a denominator, because volunteers work at different speeds",
              "The total should have been converted to a standard unit before any division was performed",
              "Rubbish density varies by material, so mass is not a valid basis for any comparison over time",
            ],
            correctIndex: 0,
            explanation:
              "Three significant figures claims a precision the inputs cannot support. The honest report gives a range. Per volunteer-hour is in fact a good denominator; the problem is the decimals, not the normalisation.",
            sourceLessonSlug: "error-uncertainty-and-how-precise-to-be",
          },
          {
            prompt: "A group counts litter before and after a new bin is installed and sees a large drop. What single addition would most strengthen the claim that the bin caused it?",
            options: [
              "A comparison area with no new bin, counted on the same days by the same method",
              "A larger number of counting sessions in the period after the bin was installed",
              "A second observer counting alongside the first to check the counts agree",
              "Weighing the litter as well as counting it, to capture changes in item size",
            ],
            correctIndex: 0,
            explanation:
              "A comparison site addresses the biggest threat, which is that something else changed at the same time, such as a seasonal decline. More sessions, a second observer and extra measures all improve precision but leave that alternative explanation untouched.",
            sourceLessonSlug: "controls-and-baselines-without-a-laboratory",
          },
          {
            prompt: "Why does eBird place so much weight on whether a checklist was 'complete'?",
            options: [
              "Only a complete list carries information about absence, which is what allows change in common species to be measured",
              "Complete lists take longer to submit, which filters out casual observers whose identifications are less reliable",
              "Complete lists are required for a submission to be counted toward a participant's personal species total",
              "Incomplete lists cannot be assigned to a location, since the observer may have moved between sightings",
            ],
            correctIndex: 0,
            explanation:
              "A list of only the interesting species says nothing about what was not there. Completeness lets researchers infer non-detection, which is the difference between a dataset that can measure a decline and one that can only record what someone found notable.",
            sourceLessonSlug: "projects-you-can-join",
          },
        ],
      },
    },
    {
      slug: "capstone-design-a-study-you-could-run",
      title: "13 · Capstone: design a study you could actually run",
      section: "Part 3 · Reporting honestly",
      lessonType: "assignment",
      body: `Design a study you could genuinely start next month, with the time, money, access and equipment you actually have. Roughly 600 to 1000 words.

**You are not required to run it.** You are assessed on the design, and specifically on whether it is honest about its own limits.

Pick something you can reach repeatedly: a stretch of street, a creek, a park, a bus stop, a bird feeder, your own building.

## What to submit

**1. The question.** Written to lesson 2's standard: what exactly, where exactly, over what period, compared with what, and how you would know you were wrong. If it cannot come out negative, rewrite it.

**2. What you are actually measuring, and the chain to what you care about.** Name the proxy. Walk the arrows. State each assumption between the measurement and the thing you care about (lesson 3).

**3. The protocol.** Enough that a stranger could reproduce your measurement: what counts, where exactly, when, how long, with what, by whom, and the rule for what happens when it rains or nobody shows up.

**4. The sampling plan.** Where and when you will measure and why those choices. If it is convenience sampling, say so and say what that limits the result to.

**5. At least three named confounders**, and for each, whether you will measure it, control for it, or simply live with it and disclose it. **This section carries the most weight.**

**6. What you will record, and in what shape.** Your columns, your units, your convention for missing versus zero, and the conditions recorded alongside each measurement.

**7. Precision.** What your method can actually distinguish, and how precisely you will therefore report.

**8. Ethics.** Anyone else's land, anyone identifiable, anything that should not be published as a precise location, and who owns the resulting data.

**9. What it will NOT be able to conclude.** The most important section in the document. Be specific. "This cannot show that X caused Y, because I am not assigning anything and season is a candidate explanation I can measure but not remove."

## How this is assessed

Not on ambition. A small, tightly specified study is a far better answer than a sweeping one, and the most common failure is a design that would produce numbers nobody could interpret.

You are assessed on sections 5 and 9 above all: whether the confounders are real and specific to your design rather than generic, and whether the limits are stated precisely enough that a reader knows what the study would and would not settle.

**Do not describe a study you could not actually run.** A design requiring equipment you do not have or a site you cannot reach is a wish, and the point of this course is a study that starts.

## Sources

Citizen Science Association. (n.d.). *Designing for data quality*. https://citizenscience.org/

U.S. Environmental Protection Agency. (n.d.). *Volunteer monitoring quality assurance project plans*. https://www.epa.gov/`,
    },
  ],
};
