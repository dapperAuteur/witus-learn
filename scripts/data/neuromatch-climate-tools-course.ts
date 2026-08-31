// Authored "Computational Tools for Climate Science Foundations": the private companion course BAM
// asked for (plans/74), sitting UNDERNEATH Neuromatch's own climate course rather than reproducing
// it. Their published syllabus is ten full-time days of Python notebooks worked in a pod with a
// teaching assistant, plus a project; this is the concept, data-literacy and vocabulary substrate
// that makes those notebooks followable.
//
// SCOPE, per BAM 2026-08-30: this is FOR HIS OWN KNOWLEDGE AND GROWTH, not preparation for a
// teaching-assistant application. So it teaches the material and contains no exam coaching, no
// "what they will ask you", and no application advice.
//
// THE THESIS, and the reason this course earns its place rather than duplicating an explainer:
// most public confusion about climate data is not confusion about physics. It is confusion about
// WHAT KIND OF OBJECT A NUMBER IS. An observation, a reanalysis, a model run and a scenario
// projection look identical once they are plotted on the same axes, and they answer completely
// different questions. Section 3 is that taxonomy and everything else in the course points at it.
//
// Section order deliberately tracks Neuromatch's own day list (Climate System Overview, Ocean and
// Atmosphere Reanalysis, Remote Sensing, Paleoclimate, Introduction to Climate Modeling, An
// Ensemble of Futures, The Socioeconomics of Climate Change, Extremes and Variability, AI and
// Climate Change, Project Day) so a learner who finishes here can open their coursebook and
// recognise where they are. NO text, code, figure or exercise was copied: every word is original,
// and the CC BY 4.0 attribution plus the statement of modifications lives in lesson 1.
//
// FETCH-OR-DO-NOT-CITE. Every DOI and URL in this file was retrieved during authoring. Where a
// publisher blocked automated retrieval (IPCC, Elsevier, Nature, Springer, AMS journal pages,
// Wiley), the claim is either dropped, attributed to a source that WAS reached, or hedged in the
// lesson and filed as a proposed research check in the comment block at the very bottom of this
// file. Two identifiers were confirmed through the Crossref and Semantic Scholar metadata APIs
// rather than the publisher page, and the lesson that uses them says nothing the metadata did not
// carry. No dataset name, DOI, figure or number here was written from memory.

import type { AuthoredCourse } from "./authored-course";

export const NEUROMATCH_CLIMATE_TOOLS_COURSE: AuthoredCourse = {
  title: "Computational Tools for Climate Science Foundations",
  description:
    "An independent, private companion to Neuromatch's Computational Tools for Climate Science, built to make their material followable rather than to replace it. Their published syllabus runs ten full-time days of Python notebooks in a pod with a teaching assistant, plus a group project. This course is none of that: no notebooks, no data downloads, no pod, no project, and no code you run. It is the concepts, the data literacy and the vocabulary that turn their tutorials from a wall of unfamiliar words into something you can read. The spine is one question asked over and over: what kind of object is this number? An observation is an instrument reading that somebody adjusted. A reanalysis is a weather model steered by observations, which means it has values in places nobody measured. A model run is a simulation whose 1998 El Nino does not happen in 1998. A scenario projection is a conditional answer to an assumption somebody chose. Plotted on the same axes those four look identical, and almost every public argument about climate data is really an argument about which of them somebody is holding. Around that spine: grids, resolution and parameterisation; the dataset families and how to read their documentation; anomalies, baselines and why a warming number is meaningless without its reference period; internal variability, model spread and the two kinds of ensemble; what an SSP scenario is and is not; and event attribution, where the two main methods disagree in print and this course names who holds each position. Not affiliated with or endorsed by Neuromatch. Their materials are CC BY 4.0; the attribution and the statement of what was changed are in lesson 1, and every claim here carries a source that was actually retrieved.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — What this course is, and what a climate model is
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "scope-and-attribution",
      title: "1 · What this course is, and what it is not",
      section: "Section 1 · What this course is, and what a climate model is",
      body: `Neuromatch's Computational Tools for Climate Science is a full-time course, and its published syllabus lists ten days across two weeks: Climate System Overview, Ocean and Atmosphere Reanalysis, Remote Sensing, Paleoclimate, Introduction to Climate Modeling, An Ensemble of Futures, The Socioeconomics of Climate Change, Extremes and Variability, AI and Climate Change, and a project day (Climatematch Academy, n.d.). Each of those days is a set of Python notebooks worked through with other people and a teaching assistant.

**You cannot compress that into a reading course, and this one does not try.** A companion course that pretends to be the real thing wastes your time twice: once while you take it, and again when you find the gap. So the boundary is drawn here, in the first lesson, rather than left for you to discover.

**What this course is.** The concepts, the vocabulary and the data literacy their notebooks assume you already have. When a tutorial opens a file and starts talking about a variant label, a calendar attribute, a baseline period or an ensemble member, you will know what those are and why anyone bothered to define them. When a figure shows a shaded band, you will know to ask what the band is made of before you read anything off it.

**The distinction that earns this course its keep.** Most public confusion about climate data is not confusion about physics. It is confusion about what KIND of object a number is. There are four kinds, they get plotted on the same axes, and they answer different questions:

| Kind of object | What produced the number |
| --- | --- |
| Observation | An instrument reading, adjusted for known problems with the instrument |
| Reanalysis | A weather model run over the past, continuously steered by the observations that exist |
| Model run | A simulation of the climate system, given a set of assumed inputs |
| Scenario projection | A model run whose future inputs are an assumption somebody chose |

Section 3 is that taxonomy, and everything before it is what you need to understand the taxonomy. Everything after it is the taxonomy applied: to datasets, to baselines, to trends, to ensembles, to scenarios, and to attribution.

**What it deliberately leaves out.** Code. There is no notebook here, no dataset to download, no environment to install, no plot you make. Reading about opening a file is not opening a file. Treat this as the map and treat their tutorials, or any notebooks you can actually run, as the territory.

**What it also leaves out, and this one matters.** Climate policy, economics of mitigation, and the question of what anybody should do. Those are real subjects with their own literatures, and a course that smuggles them in under the cover of teaching file formats is not being honest about what it is.

## Attribution and licence

This course is **independent**. It is not produced by, endorsed by, affiliated with, or reviewed by Neuromatch or Climatematch.

Neuromatch publishes this course's content under the **Creative Commons Attribution 4.0 International licence (CC BY 4.0)**, with no NonCommercial and no ShareAlike clause. The content repository states: "The contents of this repository are shared under under a Creative Commons Attribution 4.0 International License." (The doubled "under" is theirs and is reproduced rather than silently corrected, because this is a quotation.) Their open-education page asks reusers to "include attribution, a link to the source materials, and a link to the CC-BY 4.0 license", and the licence itself requires that you "give appropriate credit, provide a link to the license, and indicate if changes were made" (Neuromatch, n.d.; Creative Commons, n.d.).

- **Source materials:** the coursebook at https://comptools.climatematch.io/tutorials/intro.html and the content repository at https://github.com/neuromatch/climate-course-content
- **Licence:** https://creativecommons.org/licenses/by/4.0/

**What was taken, and what was changed.** What is adapted is the **order and grouping of topics**: the sections below track their day list so that finishing here leaves you able to open their coursebook and know where you are. Nothing else was taken. No text, code, notebook, figure, exercise or quiz question was copied or paraphrased from their materials. Every sentence, question and explanation here was written from scratch, and every factual claim is cited to a source of its own rather than to Neuromatch. The topic set is also **narrowed**: their projects, pods, teaching assistants, machine-learning day and all hands-on coding are absent by design, and the socioeconomics day is reduced to the one thing this course needs from it, which is what a scenario is.

:::reveal Name the four kinds of object this course says get confused with each other. ||| An observation, a reanalysis, a model run, and a scenario projection.

:::reveal Under what licence does Neuromatch publish this material, and what does reusing it oblige you to do? ||| CC BY 4.0, with no NonCommercial and no ShareAlike clause. You must give attribution, link to the source materials, link to the licence, and say what you changed.

## Vocabulary
- **Companion course**: a course built to make another body of material followable, which succeeds when you leave it and go read that material.
- **CC BY 4.0**: a Creative Commons licence permitting reuse and adaptation, including commercially, on condition of attribution, a link to the licence, and an indication of changes.
- **Coursebook**: the published, browsable set of tutorial notebooks this course is a companion to.
- **Reanalysis**: a weather model run over the past while being steered by the observations that exist, introduced here only as one of the four object kinds and taught properly in Section 3.

## Sources
- Climatematch Academy. (n.d.). *Computational tools for climate science* [course content]. https://comptools.climatematch.io/tutorials/intro.html
- Creative Commons. (n.d.). *Attribution 4.0 International (CC BY 4.0)*. https://creativecommons.org/licenses/by/4.0/
- Neuromatch. (n.d.). *Open education resources* (licence and attribution guidance). https://neuromatch.io/open-education-resources/
- Neuromatch. (n.d.). *climate-course-content* [code repository]. GitHub. https://github.com/neuromatch/climate-course-content`,
    },
    {
      slug: "weather-versus-climate",
      title: "2 · Why a two-week forecast fails and a fifty-year projection does not",
      section: "Section 1 · What this course is, and what a climate model is",
      body: `The most common objection to climate projection is also the most reasonable-sounding one: if nobody can tell me whether it will rain a fortnight from Tuesday, how can anybody tell me anything about 2070? The answer is not that climate scientists are cleverer than forecasters. It is that the two are different mathematical problems, and knowing which one you are looking at is the first piece of climate data literacy.

**Weather prediction is an initial-value problem.** You measure the atmosphere as it is right now, as completely as you can, and you integrate the physics forward. What you get out depends almost entirely on what you put in, and the atmosphere is chaotic, so a tiny error in the starting state grows until the forecast is worthless. That growth is why forecast skill runs out after somewhere around a fortnight rather than because the models are bad. For a forecast of this week, as one working meteorologist puts it, "the CO2 concentration and its development throughout the week do not matter" (Reintges, 2022).

**Climate projection is a boundary-value problem.** You are not asking what the weather will be on a date. You are asking what the statistics of the weather will be, given the conditions that constrain the system: how much greenhouse gas is in the atmosphere, how bright the sun is, where the mountains and oceans are. Reintges makes the mirror-image point about the other problem: for a climate run "initial values are not important: it does not matter whether there was a cyclone over Iceland at the time we started the model run" (Reintges, 2022).

NOAA's own answer to the objection puts the distinction in one sentence: "weather is about the exact conditions and climate is about average conditions" (Herring and Lindsey, 2020). Their conclusion follows directly: "the quality of a weather forecast two weeks out isn't a good test of how well we can predict the climate two decades out."

**The everyday analogy, and its limit.** You cannot say what any individual will do tomorrow, but you can say a great deal about the average behaviour of a large population, and the second statement is not a weaker version of the first. It is a different statement. The limit of the analogy is that climate is not merely an average of weather; it includes the variability, the extremes and the seasonal cycle, all of which have statistics of their own that can shift.

**How long is "average", exactly.** Thirty years, by convention, and the convention is written down. The World Meteorological Organization defines climatological standard normals as "averages of climatological data computed for the following consecutive periods of 30 years: 1 January 1981 to 31 December 2010, 1 January 1991 to 31 December 2020, etc." The current normal rolls forward to the most recent 30-year period that ends in a year ending with zero, while 1961 to 1990 is retained as a fixed reference for long-term climate-change assessment (World Meteorological Organization, n.d.). Hold on to that: Section 5 is about what happens when two graphs of the same warming use different reference periods.

**What this does and does not buy you.** It does not buy certainty about 2070. A boundary-value problem still needs its boundaries, and the largest of those boundaries is how much greenhouse gas humans emit, which is not a physics question at all. That is why the honest output of a climate model is conditional: given these inputs, this is what the system does. Section 6 is about how to read a conditional statement without turning it into a forecast, which is the single most common mistake made with climate output in public.

**The consequence for reading any climate figure.** Before you interpret a line, ask which problem produced it. A line that ends next Tuesday came from an initial-value problem and is a forecast. A line that ends in 2100 came from a boundary-value problem and is a conditional projection. A line that ends today may be either an observation or a model run reproducing the past, which is the confusion Section 3 exists to clear up.

:::reveal What makes weather prediction an initial-value problem and climate projection a boundary-value problem? ||| A weather forecast depends almost entirely on how accurately you measured the starting state, and chaos destroys that information in about a fortnight. A climate projection depends on the constraints the system runs under, chiefly greenhouse gas concentrations, and does not care what the weather was on the day the run started.

:::reveal How long is a climatological standard normal, and which fixed period does WMO keep for long-term climate-change assessment? ||| Thirty years, and the fixed reference retained for long-term assessment is 1961 to 1990.

## Vocabulary
- **Initial-value problem**: a prediction whose accuracy is governed by how well the starting state was measured, which is what a weather forecast is.
- **Boundary-value problem**: a prediction governed by the constraints the system runs under rather than by its starting state, which is what a climate projection is.
- **Predictability horizon**: the lead time beyond which errors in the initial state have grown enough to make a forecast useless, roughly a fortnight for weather.
- **Climatological standard normal**: a 30-year average used as the reference for judging whether a period is warmer or wetter than usual.
- **Conditional projection**: a statement of the form "given these inputs, the system does this", which is the honest shape of climate model output.

## Sources
- Herring, D., and Lindsey, R. (2020, October 29). *Why should I trust scientists' climate projections for 50 or 100 years from now when they can't accurately forecast the weather more than 2 weeks from now?* NOAA Climate.gov. https://www.climate.gov/news-features/climate-qa/why-should-i-trust-scientists%E2%80%99-climate-projections-50-or-100-years-now-when
- Reintges, A. (2022, September 12). *Weather vs. climate prediction*. Weather and Climate @ Reading. https://blogs.reading.ac.uk/weather-and-climate-at-reading/2022/weather-vs-climate-prediction/
- World Meteorological Organization. (n.d.). *WMO climatological normals*. https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/climate-services/wmo-climatological-normals`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Scope, weather, and climate",
      section: "Section 1 · What this course is, and what a climate model is",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does this course say it is, in relation to Neuromatch's own climate course?",
            options: [
              "A companion, not a substitute",
              "An abridged official version of the same curriculum, produced with Neuromatch's review",
              "A replacement that covers the same ten days in a compressed reading format",
              "A preparatory programme run in partnership with the organisation that publishes the coursebook",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 1 draws the boundary on purpose: it teaches the concepts their notebooks assume, and it is independent, unreviewed and unaffiliated.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "How many days does the published syllabus of Neuromatch's climate course list, and over what span?",
            options: [
              "Ten days across two weeks",
              "Fifteen days across three weeks, with the third week reserved entirely for group projects",
              "Eight days across two weeks, with two days set aside for optional catch-up sessions",
              "Twenty days across four weeks, split between a taught phase and a supervised research phase",
            ],
            correctIndex: 0,
            explanation:
              "The coursebook lists W1D1 to W2D5, ending with a project day, and each of those days is a set of Python notebooks worked with a teaching assistant.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which of these is on the published day list of the course this one companions?",
            options: [
              "Paleoclimate",
              "Numerical methods for partial differential equations on the sphere",
              "Field campaign design and instrument calibration for surface flux towers",
              "Regional adaptation planning for coastal municipalities under sea level rise",
            ],
            correctIndex: 0,
            explanation:
              "The listed days are Climate System Overview, Ocean and Atmosphere Reanalysis, Remote Sensing, Paleoclimate, Introduction to Climate Modeling, An Ensemble of Futures, The Socioeconomics of Climate Change, Extremes and Variability, AI and Climate Change, and a project day.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What does this course identify as the source of most public confusion about climate data?",
            options: [
              "Confusion about what kind of object a number is",
              "Widespread unfamiliarity with the differential equations that govern atmospheric motion",
              "Disagreement among researchers about whether the greenhouse effect operates as described",
              "The absence of any agreed international standard for archiving climate measurements",
            ],
            correctIndex: 0,
            explanation:
              "An observation, a reanalysis, a model run and a scenario projection look identical once plotted on the same axes, and they answer different questions.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which four kinds of object does lesson 1's table distinguish?",
            options: [
              "Observation, reanalysis, model run, scenario projection",
              "Measurement, estimate, forecast and prediction, as those terms are used in operational meteorology",
              "Raw data, quality-controlled data, gridded data and published data, in order of processing",
              "Station record, satellite record, proxy record and instrument record, by measuring technology",
            ],
            correctIndex: 0,
            explanation:
              "Section 3 is that taxonomy in full, and every later section is the taxonomy applied to datasets, baselines, trends, ensembles and attribution.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "According to lesson 1's table, what produces the number in a reanalysis?",
            options: [
              "A weather model steered by observations",
              "A statistical interpolation between station records with no physical model involved at any stage",
              "An instrument reading corrected for the known biases of the instrument that produced it",
              "A simulation of the climate system given a set of assumed future emissions",
            ],
            correctIndex: 0,
            explanation:
              "That combination is exactly why a reanalysis has values in places nobody measured, which Section 3 develops in full.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Under which licence does Neuromatch publish this course content?",
            options: [
              "CC BY 4.0",
              "Creative Commons Attribution NonCommercial 4.0, which bars any commercial reuse",
              "Creative Commons Attribution ShareAlike 4.0, which requires derivatives under the same licence",
              "A bespoke academic licence permitting classroom use only with written permission",
            ],
            correctIndex: 0,
            explanation:
              "There is no NonCommercial and no ShareAlike clause, which is what makes adapting the topic order here legitimate at all.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What does CC BY 4.0 require of somebody who adapts the material?",
            options: [
              "Credit, a licence link, and a note of changes",
              "Written permission from the original authors before any adapted version may be published",
              "That the adapted version be given away at no charge and never used in a paid course",
              "That the adapted version be submitted back to the original project for review before release",
            ],
            correctIndex: 0,
            explanation:
              "The licence text asks a reuser to give appropriate credit, provide a link to the licence, and indicate if changes were made, and Neuromatch adds a link to the source materials.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Lesson 1 quotes the content repository as saying the material is shared \"under under\" a Creative Commons licence. Why is the doubled word left in?",
            options: [
              "Because it is a quotation",
              "Because the repository uses the doubled form deliberately to mark a two-part licence arrangement",
              "Because correcting it would breach the attribution clause of the licence being quoted",
              "Because the second word refers to the separate BSD licence covering the software elements",
            ],
            correctIndex: 0,
            explanation:
              "Silently tidying a quotation is a small dishonesty, so the lesson reproduces the typo and says whose it is.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What, specifically, does this course say it adapted from Neuromatch's materials?",
            options: [
              "The order and grouping of topics",
              "Selected explanatory passages, rewritten in different words but following their sentence structure",
              "The notebook exercises, converted from Python code into prose descriptions of each step",
              "Their quiz questions, reworded so that the answers remain the same but the prompts differ",
            ],
            correctIndex: 0,
            explanation:
              "No text, code, notebook, figure, exercise or quiz question was copied or paraphrased, and every claim here carries a source of its own rather than pointing at Neuromatch.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which of these does this course deliberately leave out?",
            options: [
              "Hands-on coding",
              "Any discussion of how climate models represent processes smaller than a grid cell",
              "The distinction between a reanalysis product and a set of station observations",
              "The vocabulary used in the documentation of gridded climate data files",
            ],
            correctIndex: 0,
            explanation:
              "There is no notebook, no dataset to download and no plot you make, because reading about opening a file is not opening a file.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Why does lesson 1 say it leaves out climate policy and the economics of mitigation?",
            options: [
              "They are separate subjects with their own literatures",
              "Because the licence under which the source material is published forbids policy commentary",
              "Because those topics are covered in the second week of the course this one companions",
              "Because no primary sources on those subjects could be retrieved during authoring",
            ],
            correctIndex: 0,
            explanation:
              "A course that smuggled them in under cover of teaching file formats would not be honest about what it is.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What relationship does this course state it has with Neuromatch?",
            options: [
              "None; it is independent and unreviewed",
              "An informal affiliation under which the organisation reviews content before publication",
              "A licensing agreement that permits it to describe itself as an official companion",
              "A partnership in which teaching assistants from the original course check the material",
            ],
            correctIndex: 0,
            explanation:
              "It is not produced by, endorsed by, affiliated with or reviewed by Neuromatch or Climatematch, and lesson 1 says so before the attribution block.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Lesson 1 says the topic set was narrowed. Which of these was cut?",
            options: [
              "The projects, pods and machine-learning day",
              "The distinction between observations and reanalysis, which is treated as too advanced for a companion",
              "The treatment of grids and resolution, which is left entirely to the original coursebook",
              "The discussion of what a scenario is, on the grounds that scenarios are a policy topic",
            ],
            correctIndex: 0,
            explanation:
              "The socioeconomics day was also reduced to the single thing this course needs from it, which is what a scenario is.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What does lesson 1 mean by calling this a companion course?",
            options: [
              "It succeeds when you leave it and read the original",
              "It is designed to be studied at the same time as the original course, week by week in parallel",
              "It is one of a pair of courses that must be completed together to earn a single certificate",
              "It accompanies a set of notebooks that are distributed alongside it as downloadable files",
            ],
            correctIndex: 0,
            explanation:
              "The vocabulary definition in lesson 1 is exactly that: a course built to make another body of material followable.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Why does lesson 1 draw the boundary of the course in its very first lesson?",
            options: [
              "Because a false promise wastes your time twice",
              "Because the licence requires that the scope of an adaptation be declared before any content appears",
              "Because learners who know the scope in advance score measurably higher on the final assessment",
              "Because the original coursebook opens with an equivalent scope statement that this one mirrors",
            ],
            correctIndex: 0,
            explanation:
              "Once while you take a course that pretends to be the real thing, and again when you discover the gap.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "In lesson 1's table, what does a scenario projection's number come from?",
            options: [
              "A model run whose future inputs were chosen",
              "An extrapolation of the observed trend forward using a statistical model fitted to the record",
              "A poll of expert judgement about the most likely path of future greenhouse gas emissions",
              "A reanalysis extended past the present using the most recent year of assimilated observations",
            ],
            correctIndex: 0,
            explanation:
              "That is why its output is conditional: it tells you the consequence of an assumption, not what will happen.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which pair of problems does lesson 2 use to separate weather forecasting from climate projection?",
            options: [
              "Initial-value and boundary-value",
              "Deterministic and probabilistic, according to whether a single answer or a distribution is produced",
              "Forward and inverse, according to whether the physics is run from causes or from consequences",
              "Linear and nonlinear, according to whether small errors in the input grow over time",
            ],
            correctIndex: 0,
            explanation:
              "A forecast depends on how well the starting state was measured; a projection depends on the constraints the system runs under.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "Why does weather forecast skill run out after roughly a fortnight?",
            options: [
              "Because errors in the starting state grow",
              "Because the observing network is only dense enough to constrain the atmosphere for about that long",
              "Because forecast models are rerun on a fourteen-day cycle and older runs are discarded",
              "Because greenhouse gas concentrations begin to affect the forecast beyond that horizon",
            ],
            correctIndex: 0,
            explanation:
              "The atmosphere is chaotic, so a tiny error in the initial conditions grows until the forecast is worthless, whatever the model's quality.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "For a forecast of this coming week, what does the working meteorologist quoted in lesson 2 say about carbon dioxide?",
            options: [
              "Its concentration does not matter",
              "It must be prescribed hourly because radiative heating drives the forecast at that timescale",
              "It is the single largest source of error in operational forecasts beyond about five days",
              "It matters only in winter, when the longwave contribution to the surface budget is largest",
            ],
            correctIndex: 0,
            explanation:
              "Reintges makes exactly that point to show that a weather forecast is an initial-value problem rather than a boundary-value one.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "For a climate run, what does lesson 2 say about a cyclone over Iceland at the start of the simulation?",
            options: [
              "It does not matter",
              "It sets the phase of the North Atlantic Oscillation for the first several decades of the run",
              "It has to be removed by hand before the run begins or the model drifts away from reality",
              "It determines which ensemble member the run is labelled as in the CMIP archive",
            ],
            correctIndex: 0,
            explanation:
              "Reintges uses it as the mirror image of the carbon dioxide point: initial values are not important for a climate projection.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "How does NOAA's Climate.gov summarise the difference between weather and climate?",
            options: [
              "Weather is exact conditions, climate is average conditions",
              "Weather is measured by instruments while climate is calculated entirely from computer models",
              "Weather is what a forecaster predicts and climate is what a policy maker decides to plan for",
              "Weather concerns the lower atmosphere and climate concerns the whole depth of the atmosphere",
            ],
            correctIndex: 0,
            explanation:
              "Herring and Lindsey use that sentence to explain why a two-week forecast is not a test of a two-decade projection.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "What conclusion do Herring and Lindsey draw about using forecast skill to judge climate projection?",
            options: [
              "It is not a good test",
              "It is the most direct test available, and models that forecast poorly should be excluded from assessments",
              "It is a valid test only for models that are run at the same resolution for both purposes",
              "It is a fair test in the tropics but not at high latitudes, where variability is larger",
            ],
            correctIndex: 0,
            explanation:
              "The two are different mathematical problems, so skill at one is not evidence about the other in either direction.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "What is the limit of the analogy between climate projection and predicting the average behaviour of a population?",
            options: [
              "Climate includes variability and extremes, not just averages",
              "Populations can be surveyed directly while the future climate cannot be measured in advance",
              "The analogy holds only for temperature and breaks down entirely for any other variable",
              "Population statistics are exact while climate statistics carry an irreducible measurement error",
            ],
            correctIndex: 0,
            explanation:
              "Those have statistics of their own that can shift, so climate is not merely an average of weather.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "How long is a WMO climatological standard normal?",
            options: [
              "Thirty years",
              "Fifty years, chosen to span two full cycles of the Atlantic Multidecadal Oscillation",
              "Twenty years, revised every five years as new observations become available",
              "One hundred years, matching the length of the longest continuous instrumental records",
            ],
            correctIndex: 0,
            explanation:
              "WMO defines them as averages over consecutive 30-year periods, giving 1 January 1991 to 31 December 2020 as an example.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "Which fixed period does WMO retain as the reference for long-term climate-change assessment?",
            options: [
              "1961 to 1990",
              "1850 to 1900, taken as the closest available approximation to pre-industrial conditions",
              "1991 to 2020, which is also the current rolling standard normal for operational use",
              "1951 to 1980, matching the base period used by NASA's surface temperature analysis",
            ],
            correctIndex: 0,
            explanation:
              "The rolling normal moves forward every decade, but the fixed 1961 to 1990 reference is kept so long-term comparisons stay stable.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "What is the honest shape of a climate model's output, according to lesson 2?",
            options: [
              "Conditional: given these inputs, this happens",
              "Probabilistic: each outcome is published with a likelihood attached that sums to one across scenarios",
              "Deterministic: a single trajectory that the system will follow if the physics is correctly represented",
              "Diagnostic: a description of the present state from which the future is extrapolated statistically",
            ],
            correctIndex: 0,
            explanation:
              "The largest boundary condition is how much greenhouse gas humans emit, which is not a physics question, so the output cannot be unconditional.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "You are shown a line on a climate figure that ends in 2100. What kind of statement is it?",
            options: [
              "A conditional projection",
              "A forecast, in the same sense as a weather forecast but computed over a much longer lead time",
              "An extrapolation of the observed record produced without any physical model",
              "A reanalysis, since only a reanalysis can produce a continuous line over that length of time",
            ],
            correctIndex: 0,
            explanation:
              "A line ending in 2100 came from a boundary-value problem, so it answers what happens given a set of assumed inputs.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "Lesson 2 says a line ending today may be one of two things. Which two?",
            options: [
              "An observation or a model run reproducing the past",
              "A forecast issued yesterday or a nowcast produced from radar within the last hour",
              "A raw station series or the same series before homogenisation was applied to it",
              "A regional average or a global average, depending on the area the figure covers",
            ],
            correctIndex: 0,
            explanation:
              "That ambiguity is precisely the confusion Section 3 exists to clear up, and a caption that does not say which is an incomplete caption.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "What does the term predictability horizon mean in lesson 2?",
            options: [
              "When initial-state errors have grown enough to ruin a forecast",
              "The furthest year for which a scenario has been extended by the modelling groups that produced it",
              "The point at which a model's resolution becomes too coarse to represent the weather system of interest",
              "The lead time at which greenhouse gas concentrations begin to dominate the forecast signal",
            ],
            correctIndex: 0,
            explanation:
              "For the atmosphere that is roughly a fortnight, which is a property of chaos rather than of any particular model.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "Why does a boundary-value problem still leave real uncertainty about 2070?",
            options: [
              "Because the boundaries themselves are uncertain",
              "Because chaos in the atmosphere accumulates over decades until the projection loses all skill",
              "Because the physical equations governing the climate system are not yet fully known",
              "Because observations of the present state are too sparse to initialise a run of that length",
            ],
            correctIndex: 0,
            explanation:
              "The largest boundary is how much greenhouse gas humans emit, and that is a question about human behaviour rather than about physics.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "Lesson 1 lists a reason not to describe this course as a preparation programme. What is that reason?",
            options: [
              "It was written for BAM's own learning",
              "Preparation programmes are prohibited by the terms under which the source material is licensed",
              "The organisation that publishes the coursebook accepts no applicants who have taken outside courses",
              "The material here covers only the second week of the original syllabus and so cannot prepare anyone",
            ],
            correctIndex: 0,
            explanation:
              "The scope decision recorded for this course is knowledge and growth, so it teaches the material and contains no application or exam coaching.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which link does the CC BY 4.0 attribution in lesson 1 give for the source materials?",
            options: [
              "The coursebook and the content repository",
              "A digital object identifier minted for the syllabus by the organisation that published it",
              "The registration page for the next scheduled run of the original course",
              "A mirror of the notebooks hosted alongside this course for offline reading",
            ],
            correctIndex: 0,
            explanation:
              "Both are named in the attribution block, alongside the link to the licence itself, because the licence asks for a link to the source.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Why is a model run listed as a separate object kind from an observation in lesson 1's table?",
            options: [
              "Nothing in a model run was measured",
              "Model runs are produced at a finer spatial resolution than any observing network can achieve",
              "Model runs are published later than observations and so cover a different span of years",
              "Model runs are stored in a different file format that cannot be compared with observations",
            ],
            correctIndex: 0,
            explanation:
              "That is the point rather than a criticism: a simulation can be run under conditions that never happened, which no measurement can do.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "In lesson 1's table, what can an observation tell you that the other objects cannot?",
            options: [
              "What actually happened where somebody measured",
              "What the whole global field looked like at every hour, without any gaps in coverage",
              "What would have happened in the absence of human influence on the climate system",
              "What the climate will do under a specified pathway of future greenhouse gas concentrations",
            ],
            correctIndex: 0,
            explanation:
              "That is also why an observation is the only kind of number that can falsify a model, a point Section 3 develops.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What does lesson 1 say the rest of the course does with its four-object table?",
            options: [
              "Builds up to it, then applies it",
              "Revises the rows repeatedly as each new dataset family turns out not to fit the categories",
              "Leaves it aside as an introductory device and returns to it only in the closing lesson",
              "Replaces it with a finer taxonomy of nine object kinds once the file formats are introduced",
            ],
            correctIndex: 0,
            explanation:
              "Everything before Section 3 is what you need to understand the taxonomy, and everything after it is the taxonomy applied to datasets, baselines, trends, ensembles and attribution.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What kind of course does lesson 2 say you are reading when a figure's line stops next Tuesday?",
            options: [
              "You are looking at a forecast",
              "You are looking at a scenario projection truncated for display purposes at the current date",
              "You are looking at a reanalysis, which is the only product updated to within a week of the present",
              "You are looking at an observation, since no model produces output at daily resolution",
            ],
            correctIndex: 0,
            explanation:
              "A line that ends next Tuesday came from an initial-value problem, which is the definition of a forecast.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "Which statement about chaos does lesson 2 support?",
            options: [
              "It limits forecasts regardless of model quality",
              "It affects regional forecasts but averages out entirely at the global scale within a day or two",
              "It was introduced into forecasting only when models became fine enough to resolve convection",
              "It can be removed by running many forecasts and averaging them into a single trajectory",
            ],
            correctIndex: 0,
            explanation:
              "Skill runs out after roughly a fortnight because initial-state errors grow, which is a property of the system rather than of the code.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "Lesson 2 gives a reason the population analogy is not a weaker version of an individual prediction. What is it?",
            options: [
              "It is a different statement, not a hedged one",
              "It is derived from a larger sample and therefore carries a smaller confidence interval",
              "It applies only over periods long enough for the individual fluctuations to cancel exactly",
              "It is the same statement expressed with the uncertainty made explicit rather than hidden",
            ],
            correctIndex: 0,
            explanation:
              "Saying nothing about tomorrow's individual while saying a great deal about the population average is a change of question, not a loss of confidence.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "What does lesson 2 say the WMO normal rolls forward to?",
            options: [
              "The latest 30-year period ending in a year ending in zero",
              "A new period chosen by each national meteorological service according to its own record length",
              "The most recent 30 years of continuous record at each individual observing station",
              "A period recalculated annually so that it always ends with the most recent complete year",
            ],
            correctIndex: 0,
            explanation:
              "That rolling definition is why the current normal is 1991 to 2020 while the fixed long-term reference stays at 1961 to 1990.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "Which section of this course does lesson 2 point to for what happens when two graphs use different reference periods?",
            options: [
              "The one on anomalies, baselines and trends",
              "The one on grids, resolution and parameterisation, where averaging over cells is introduced",
              "The one on datasets and documentation, where the file metadata standards are described",
              "The one on uncertainty, scenarios and attribution, where ensemble spread is decomposed",
            ],
            correctIndex: 0,
            explanation:
              "Baselines are Section 5's subject, and lesson 2 plants the 30-year normal so the later lesson has something to build on.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "What is the first question lesson 2 tells you to ask about any climate figure?",
            options: [
              "Which problem produced this line",
              "Which journal published the figure and whether it passed peer review before appearing",
              "Which colour scale was used and whether it is legible to a reader with colour blindness",
              "Which institution funded the work and whether it has an interest in the result",
            ],
            correctIndex: 0,
            explanation:
              "An initial-value problem gives a forecast and a boundary-value problem gives a conditional projection, and the difference decides how the line may be read.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "Lesson 1 says every factual claim in this course is cited to something other than Neuromatch. Why?",
            options: [
              "So the claims stand on their own sources",
              "Because the licence forbids citing the original materials as evidence for any factual statement",
              "Because the original coursebook contains no citations that could be reused in a different course",
              "Because attribution to the original would imply that the organisation had reviewed the claims",
            ],
            correctIndex: 0,
            explanation:
              "What was adapted is the topic order alone, so a claim borrowing their authority without their evidence would misdescribe both.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which of these is NOT part of what this course provides, according to lesson 1?",
            options: [
              "A dataset to download",
              "The vocabulary that the original course's tutorials assume a learner already has",
              "An explanation of what a shaded band on a projection figure might be made of",
              "A taxonomy for telling apart the four kinds of number that get plotted together",
            ],
            correctIndex: 0,
            explanation:
              "There is no notebook, no environment to install and no data, by design, because this is the map rather than the territory.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What does lesson 2 identify as the largest boundary condition on a climate projection?",
            options: [
              "How much greenhouse gas humans emit",
              "The rate at which the sun's output varies over the eleven-year solar cycle",
              "The depth of the ocean mixed layer, which sets how quickly heat is taken up",
              "The albedo of the land surface, which changes with agriculture and urban growth",
            ],
            correctIndex: 0,
            explanation:
              "That is not a physics question at all, which is why the honest output is conditional and why Section 6 treats scenarios separately.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "How does lesson 1 describe the relationship between this course and hands-on work?",
            options: [
              "This is the map; notebooks are the territory",
              "The notebooks are optional enrichment for learners who want to go beyond the concepts taught here",
              "The concepts here replace the need for hands-on work for anyone who is not writing code professionally",
              "The hands-on work is deferred to a second course that continues from where this one stops",
            ],
            correctIndex: 0,
            explanation:
              "Reading about opening a file is not opening a file, and lesson 14 sends you to their notebooks for exactly that reason.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What does lesson 2 say a climate projection is asking about, if not the weather on a date?",
            options: [
              "The statistics of the weather",
              "The single most likely sequence of daily conditions consistent with the physics",
              "The date on which a given threshold of warming will first be crossed at a specific place",
              "The behaviour of the atmosphere given a perfectly measured present state",
            ],
            correctIndex: 0,
            explanation:
              "Given the conditions that constrain the system, and those statistics include the variability and the extremes rather than only the mean.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "Which of these correctly pairs a problem type with what it depends on?",
            options: [
              "Initial-value, the measured starting state",
              "Boundary-value, the accuracy with which today's atmosphere was observed at the start of the run",
              "Initial-value, the greenhouse gas concentrations prescribed over the length of the integration",
              "Boundary-value, the resolution of the grid on which the model integrates its equations",
            ],
            correctIndex: 0,
            explanation:
              "A boundary-value problem depends instead on the constraints the system runs under, chiefly the greenhouse gas concentrations.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "Why does lesson 1 say a course that pretends to be the real thing wastes your time twice?",
            options: [
              "Once taking it, once discovering the gap",
              "Once in fees paid to the imitation and once in fees paid again to the original course",
              "Once for the learner and once for the teaching assistant who has to correct the misunderstandings",
              "Once when the material is out of date and once when it has to be relearned from primary sources",
            ],
            correctIndex: 0,
            explanation:
              "That is the argument for stating the boundary in lesson 1 rather than letting a learner infer it later.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What does lesson 1 say a reanalysis is, in the one-line form used before Section 3 teaches it properly?",
            options: [
              "A weather model steered by observations over the past",
              "An archive of station records that has been quality controlled and gridded onto a regular mesh",
              "A rerun of a climate model with the observed forcings applied over the industrial period",
              "A blend of satellite retrievals produced without any dynamical model in the processing chain",
            ],
            correctIndex: 0,
            explanation:
              "That is the vocabulary entry in lesson 1, and Section 3 develops why the steering leaves model values wherever observations are absent.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "According to lesson 2, which quantity does a climate model NOT need to be told before a long run?",
            options: [
              "Today's exact weather",
              "The pathway of greenhouse gas concentrations over the period being simulated",
              "The geometry of the Earth's orbit, which sets the distribution of incoming sunlight",
              "The distribution of land, ocean and mountain ranges over the surface of the planet",
            ],
            correctIndex: 0,
            explanation:
              "Initial values do not matter for a projection, which is the whole content of calling it a boundary-value problem.",
            sourceLessonSlug: "weather-versus-climate",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Grids, resolution, and parameterisation
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "grids-and-resolution",
      title: "3 · Grids, resolution, and what a cell hides",
      section: "Section 2 · Grids, resolution, and parameterisation",
      body: `A global climate model is, in NOAA's Geophysical Fluid Dynamics Laboratory's words, "a complex mathematical representation of the major climate system components (atmosphere, land surface, ocean, and sea ice), and their interactions" (GFDL, n.d.). To compute with that representation you have to chop the planet up, and the way it is chopped up determines what the model can possibly know.

**The grid.** Models "divide the globe into a three-dimensional grid of cells representing specific geographic locations and elevations" (GFDL, n.d.). The physics is solved cell by cell, and every quantity a model reports is an average over a whole cell, not a value at a point. That single fact disposes of a large family of bad questions. A model does not have a temperature for your town. It has a temperature for a box that contains your town, along with a mountain range, a lake and a city, all averaged together.

**What a resolution number means.** Resolution is usually quoted either in degrees or in kilometres. A degree of latitude is about 111 kilometres, because that is the meridional circumference divided by 360, so a one-degree model has cells around 111 kilometres on a side near the equator. Degrees of longitude shrink towards the poles, which is why a regular latitude and longitude grid has cells of very different areas, and why Section 4 insists you weight before you average.

**How coarse is a real model.** Coarse enough that the community built a whole intercomparison project to study the effect. HighResMIP asks participating groups for "resolutions of at least 50 km in the atmosphere and 0.25° in the ocean" as their high-resolution configuration (Haarsma et al., 2016), which tells you that the standard configuration is coarser than that. Reanalysis sits at the finer end: ERA5 is produced at about 31 kilometres, hourly, from 1940 to the present (ECMWF, n.d.).

**Why not just use a finer grid.** Because halving the cell size in the horizontal multiplies the number of cells by four, and the stable time step usually has to shrink too, so the cost climbs far faster than the resolution improves. Resolution is bought with computer time that could instead have bought more ensemble members or more years of simulation, and Section 6 is about why you might want those more.

**What finer resolution does and does not fix.** It lets a model represent things that are simply smaller than a coarse cell, such as mountain ranges, coastlines, ocean eddies and tropical cyclones. It does not automatically make the model more accurate, because a process that was being approximated at 100 kilometres is often still being approximated at 25. The approximation is the subject of the next lesson.

:::reveal Why does a climate model not have a temperature for your town? ||| Because every value a model reports is an average over a whole grid cell, and a cell is typically tens to hundreds of kilometres across, containing terrain, water and land use that are all averaged together.

:::reveal What does HighResMIP define as high resolution, and what does that tell you about ordinary CMIP resolution? ||| At least 50 km in the atmosphere and a quarter of a degree in the ocean, which implies that the standard configurations most groups run are coarser than that.

## Vocabulary
- **Grid cell**: the three-dimensional box a model solves its physics in, and the smallest thing any model output can describe.
- **Horizontal resolution**: the size of a grid cell in the horizontal, quoted in degrees or kilometres, with one degree of latitude being about 111 kilometres.
- **HighResMIP**: the CMIP6 intercomparison project that runs models at enhanced resolution specifically to isolate what resolution changes.

## Sources
- ECMWF. (n.d.). *ERA5: Data documentation*. Copernicus Knowledge Base. https://confluence.ecmwf.int/display/CKB/ERA5%3A+data+documentation
- Geophysical Fluid Dynamics Laboratory. (n.d.). *Climate modeling*. NOAA. https://www.gfdl.noaa.gov/climate-modeling/
- Haarsma, R. J., Roberts, M. J., Vidale, P. L., Senior, C. A., Bellucci, A., Bao, Q., et al. (2016). High Resolution Model Intercomparison Project (HighResMIP v1.0) for CMIP6. *Geoscientific Model Development, 9*, 4185-4208. https://doi.org/10.5194/gmd-9-4185-2016`,
    },
    {
      slug: "parameterisation-and-model-spread",
      title: "4 · Parameterisation, and why models disagree",
      section: "Section 2 · Grids, resolution, and parameterisation",
      body: `Some things a model does are physics. Others are a stand-in for physics. Knowing which is which explains almost everything about why two well-built models give different answers.

**The two categories, in the modellers' own words.** GFDL distinguishes them plainly: "Simulated processes are larger than grid-scale and based on bedrock scientific principles", while "Parameterized processes represent more complex processes that are smaller than grid scale (so, cannot be physically represented) using simpler processes" (GFDL, n.d.). Large-scale winds and ocean currents are simulated. Cloud droplets, individual thunderstorms, turbulence at the surface and the details of aerosol chemistry are not, because they are far smaller than any cell will ever be.

**A parameterisation is a rule, not a measurement.** It says: given the cell-average temperature, humidity and wind that I do have, here is how much cloud there probably is and here is what it probably does to the radiation. Those rules are built from physical principles and from observations, but they are still choices, and different groups make them differently. That is the main reason a multi-model ensemble spreads out at all.

**Where the spread shows up hardest.** In climate sensitivity, the amount of warming you get for a doubling of carbon dioxide, which is dominated by cloud feedbacks. Emergent-constraint work on the CMIP6 generation reports a constrained transient climate response of 1.3 to 2.1 K and a constrained equilibrium climate sensitivity of 1.9 to 3.4 K at the 16 to 84 percent level, and concludes that "models with high ECS (>4.5 K) and high TCR (>2.5 K) do not appear to be consistent with observed global warming since 1975" (Nijsse, Cox and Williamson, 2020).

**This is contested, and the disagreement is worth understanding rather than resolving.** If some models are demonstrably too sensitive, should an assessment still give every model one vote? Sanderson, Wehner and Knutti (2017) built a scheme that weights models by skill and by independence, on the argument that models sharing code and ancestry are not independent samples of anything. Their own finding is a caution against expecting too much from it: "the influence of model weighting on projected temperature and precipitation changes is found to be moderate", because rewarding skill and rewarding uniqueness partly cancel.

**The other repair, and the argument against it.** When model output does not match observations over a region, it is common to bias-correct it before feeding it into an impacts model. Ehret and colleagues object in print that this "hides rather than reduces uncertainty": it "increases agreement of climate model output with observations in hindcasts and hence narrows the uncertainty range of simulations and predictions without, however, providing a satisfactory physical justification", while "altering spatiotemporal field consistency, relations among variables and by violating conservation principles" (Ehret et al., 2012). Bias correction is nonetheless used constantly, because impacts models need inputs that look like the real world. Both things are true at once, and the practitioner's obligation is to say which they did.

:::reveal What is the difference between a simulated process and a parameterised process in a climate model? ||| A simulated process is larger than a grid cell and is computed from physical principles. A parameterised process is smaller than a cell and cannot be represented directly, so a simpler rule stands in for it.

:::reveal What is Ehret and colleagues' objection to bias correcting climate model output? ||| That it narrows the apparent uncertainty range without physical justification, so it hides uncertainty rather than reducing it, and that it damages the consistency between variables and across space and time.

## Vocabulary
- **Parameterisation**: a rule that stands in for a process too small for the model grid, expressed in terms of the cell-average quantities the model does carry.
- **Climate sensitivity**: how much warming follows a doubling of carbon dioxide, reported as equilibrium climate sensitivity or as the shorter-term transient climate response.
- **Model weighting**: giving models unequal influence in an assessment on the basis of skill and independence, instead of one model one vote.
- **Bias correction**: adjusting model output to match observed statistics before use, a widespread practice with a published objection against it.

## Sources
- Ehret, U., Zehe, E., Wulfmeyer, V., Warrach-Sagi, K., and Liebert, J. (2012). HESS Opinions "Should we apply bias correction to global and regional climate model data?". *Hydrology and Earth System Sciences, 16*, 3391-3404. https://doi.org/10.5194/hess-16-3391-2012
- Geophysical Fluid Dynamics Laboratory. (n.d.). *Climate modeling*. NOAA. https://www.gfdl.noaa.gov/climate-modeling/
- Nijsse, F. J. M. M., Cox, P. M., and Williamson, M. S. (2020). Emergent constraints on transient climate response (TCR) and equilibrium climate sensitivity (ECS) from historical warming in CMIP5 and CMIP6 models. *Earth System Dynamics, 11*, 737-750. https://doi.org/10.5194/esd-11-737-2020
- Sanderson, B. M., Wehner, M., and Knutti, R. (2017). Skill and independence weighting for multi-model assessments. *Geoscientific Model Development, 10*, 2379-2395. https://doi.org/10.5194/gmd-10-2379-2017`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Grids, resolution, and parameterisation",
      section: "Section 2 · Grids, resolution, and parameterisation",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How does NOAA's Geophysical Fluid Dynamics Laboratory define a global climate model?",
            options: [
              "A mathematical representation of the major climate system components and their interactions",
              "A statistical model fitted to the observed record and extrapolated forward under assumed forcings",
              "A library of parameterisations calibrated separately for each region of the globe and then merged",
              "An archive of simulations produced by many groups and combined into a single best estimate",
            ],
            correctIndex: 0,
            explanation:
              "The components GFDL names are the atmosphere, land surface, ocean and sea ice, and it is the interactions between them that make the object a coupled model.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "What does a climate model do to the planet in order to compute with it?",
            options: [
              "Divides it into a three-dimensional grid of cells",
              "Reduces it to a set of zonal averages, one for each band of latitude, to save computer time",
              "Represents it as a spectrum of waves with no spatial structure below the largest scales",
              "Treats it as a single well-mixed box whose properties are updated at each time step",
            ],
            correctIndex: 0,
            explanation:
              "GFDL describes cells representing specific geographic locations and elevations, and the physics is solved cell by cell.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "What is every quantity a climate model reports?",
            options: [
              "An average over a whole grid cell",
              "A value at the geometric centre of the cell, interpolated from the surrounding cells",
              "The maximum found anywhere inside the cell during the model's internal time step",
              "A point measurement taken at the nearest location for which observations exist",
            ],
            correctIndex: 0,
            explanation:
              "That is why a model has no temperature for your town: it has a temperature for a box containing your town, a mountain range, a lake and a city all averaged together.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "Roughly how many kilometres is one degree of latitude?",
            options: [
              "About 111",
              "About 60, which is the same distance as one nautical mile multiplied by sixty",
              "About 250, though the figure varies with the model's vertical coordinate system",
              "About 40, which is the polar circumference divided by one thousand",
            ],
            correctIndex: 0,
            explanation:
              "It is the meridional circumference divided by 360, which is why a one-degree model has cells around 111 kilometres on a side near the equator.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "Why do the cells of a regular latitude and longitude grid have very different areas?",
            options: [
              "Degrees of longitude shrink towards the poles",
              "Degrees of latitude shrink towards the poles while degrees of longitude stay constant everywhere",
              "Modelling groups deliberately refine the grid over land and coarsen it over the open ocean",
              "The grid is stretched over regions of complex terrain to resolve mountains more accurately",
            ],
            correctIndex: 0,
            explanation:
              "Meridians converge, so a cell of fixed degree width covers less ground the further from the equator it sits, which is why area weighting is required before averaging.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "What resolution does HighResMIP ask for in its high-resolution configuration?",
            options: [
              "At least 50 km in the atmosphere and a quarter degree in the ocean",
              "At least 10 km in the atmosphere and one twelfth of a degree in the ocean, matching operational forecasting",
              "At least 100 km in the atmosphere and one degree in the ocean, matching the standard CMIP6 configuration",
              "At least 4 km in the atmosphere, fine enough to resolve individual convective cells without parameterisation",
            ],
            correctIndex: 0,
            explanation:
              "Haarsma and colleagues set that as the enhanced target, which also tells you the standard configurations most groups run are coarser than 50 kilometres.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "What can you infer about ordinary CMIP resolution from HighResMIP's definition of high resolution?",
            options: [
              "Standard configurations are coarser than 50 km",
              "Standard configurations already resolve tropical cyclones and ocean eddies without further refinement",
              "Standard configurations vary so widely that no general statement about their resolution is possible",
              "Standard configurations run at exactly 50 km, and HighResMIP simply repeats the same experiments",
            ],
            correctIndex: 0,
            explanation:
              "A project would not be needed to study the effect of enhanced resolution if the standard resolution already met the enhanced target.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "At roughly what horizontal resolution and time step is ERA5 produced?",
            options: [
              "About 31 km, hourly",
              "About 100 km, six-hourly, matching the standard output frequency of CMIP6 historical runs",
              "About 5 km, every fifteen minutes, matching the resolution of regional forecasting models",
              "About 250 km, monthly, matching the resolution at which the earliest reanalyses were produced",
            ],
            correctIndex: 0,
            explanation:
              "ECMWF's documentation also gives its span as 1940 to the present, which is why reanalysis sits at the finer end of the resolutions in this course.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "Why is halving a model's horizontal cell size expensive?",
            options: [
              "It multiplies the cells by four and usually shortens the time step",
              "It requires the entire parameterisation suite to be rewritten from first principles for the new scale",
              "It doubles the storage needed for output while leaving the computational cost unchanged",
              "It forces the model to be rerun from a new set of initial conditions for every existing experiment",
            ],
            correctIndex: 0,
            explanation:
              "The cost climbs far faster than the resolution improves, so resolution is bought with computer time that could instead have bought more ensemble members or more simulated years.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "What does finer resolution let a model represent that a coarse one cannot?",
            options: [
              "Mountains, coastlines, ocean eddies and tropical cyclones",
              "The radiative properties of greenhouse gases, which are smoothed out at coarse resolution",
              "The long-term response of the deep ocean, which only appears in models finer than 50 kilometres",
              "The correct global energy balance, which coarse models are unable to conserve at all",
            ],
            correctIndex: 0,
            explanation:
              "Those are features that are simply smaller than a coarse cell, so no amount of parameterisation can put them there.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "Does finer resolution automatically make a model more accurate?",
            options: [
              "No, because approximated processes are often still approximated",
              "Yes, because every process becomes explicitly resolved once the cells fall below 50 kilometres",
              "Yes, because accuracy is defined as the match between the model grid and the observing network",
              "No, because finer models are always run for fewer years and so have less reliable statistics",
            ],
            correctIndex: 0,
            explanation:
              "A process being approximated at 100 kilometres is often still being approximated at 25, and that approximation is what lesson 4 is about.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "Which of these is a fair use of a model's grid cell value?",
            options: [
              "As an area average over the cell",
              "As the temperature at the weather station nearest the centre of the cell",
              "As the highest temperature reached anywhere inside the cell during that model day",
              "As a direct substitute for a reanalysis value at the same coordinates",
            ],
            correctIndex: 0,
            explanation:
              "The value describes the whole box, so treating it as a point observation attributes to the model a precision the grid cannot carry.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "What is the smallest thing model output can describe?",
            options: [
              "A grid cell",
              "A single vertical column of the atmosphere, regardless of the horizontal spacing of the grid",
              "A weather system, since anything smaller is removed by the model's numerical filters",
              "A parameterised process, since those are computed at a finer scale than the grid",
            ],
            correctIndex: 0,
            explanation:
              "The grid cell is the box in which the physics is solved, and no output field carries information below it.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "What does lesson 3 say resolution competes with for computer time?",
            options: [
              "More ensemble members or more simulated years",
              "The number of variables the model is able to output at each time step of the integration",
              "The accuracy of the radiation scheme, which must be simplified whenever the grid is refined",
              "The length of the spin-up phase, which grows in proportion to the number of grid cells",
            ],
            correctIndex: 0,
            explanation:
              "Section 6 explains why more members and more years may be the better purchase, since they buy a handle on internal variability.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "Which statement about ERA5's span is correct?",
            options: [
              "It runs from 1940 to the present",
              "It begins in 1850, matching the start of the CMIP6 historical simulations",
              "It begins in 1979, the first year of continuous satellite coverage, and is not extended earlier",
              "It covers only the most recent thirty years, matching the current WMO standard normal",
            ],
            correctIndex: 0,
            explanation:
              "ECMWF's documentation gives that span, alongside the roughly 31 kilometre resolution and the hourly output.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "What kind of statement is \"the model says it will be 22 degrees in my town on that day\"?",
            options: [
              "A misuse of a cell average",
              "A legitimate reading, provided the model resolution is finer than 50 kilometres",
              "A legitimate reading, provided the value has been bias corrected against a nearby station",
              "A statement about a reanalysis rather than about a model, since only reanalyses give daily values",
            ],
            correctIndex: 0,
            explanation:
              "A model has a value for a box containing the town, and a climate projection is about statistics rather than about the weather on a date in any case.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "Why does lesson 3 say the grid determines what a model can possibly know?",
            options: [
              "Because nothing smaller than a cell is represented directly",
              "Because the grid fixes the set of variables the model is permitted to output",
              "Because the grid is chosen to match the density of the observing network at the time of the run",
              "Because the grid determines which parameterisation schemes are physically valid to use",
            ],
            correctIndex: 0,
            explanation:
              "Everything below the cell has to be handled by a rule that stands in for it, which is the subject of lesson 4.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "What are the four components GFDL names in its definition of a global climate model?",
            options: [
              "Atmosphere, land surface, ocean, sea ice",
              "Radiation, convection, boundary layer and cloud microphysics, being the four main parameterisations",
              "Temperature, pressure, humidity and wind, being the four prognostic variables of the dynamical core",
              "Observation, assimilation, integration and diagnosis, being the four stages of a model run",
            ],
            correctIndex: 0,
            explanation:
              "Their interactions are what makes the object a coupled model rather than four separate ones.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "How does GFDL describe a simulated process, as opposed to a parameterised one?",
            options: [
              "Larger than grid scale and based on bedrock scientific principles",
              "Any process for which observational data exist in sufficient quantity to constrain the model directly",
              "Any process included in the model's output fields rather than held only in its internal state",
              "Any process whose behaviour has been validated against a higher-resolution reference simulation",
            ],
            correctIndex: 0,
            explanation:
              "A parameterised process is smaller than grid scale, cannot be physically represented, and is stood in for by a simpler process.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "Which of these is a parameterised process in a global climate model?",
            options: [
              "Individual thunderstorms",
              "The large-scale circulation of the atmosphere between the tropics and the mid-latitudes",
              "The seasonal cycle of incoming solar radiation, which is computed from the orbit",
              "The transport of heat by the major ocean currents across an entire basin",
            ],
            correctIndex: 0,
            explanation:
              "Cloud droplets, turbulence at the surface and aerosol chemistry are parameterised for the same reason: they are far smaller than any cell will ever be.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "What does a parameterisation actually do?",
            options: [
              "Infers sub-grid behaviour from cell-average quantities",
              "Interpolates values from a finer reference simulation onto the coarser grid being run",
              "Substitutes observed values for the model's own wherever suitable measurements exist",
              "Averages the results of many small-scale simulations run separately inside each cell",
            ],
            correctIndex: 0,
            explanation:
              "Given the cell-average temperature, humidity and wind that the model does carry, the rule estimates how much cloud there is and what it does to the radiation.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "Why is parameterisation the main reason a multi-model ensemble spreads out?",
            options: [
              "Different groups make the rules differently",
              "Different groups run their models at deliberately different resolutions to sample the uncertainty",
              "Different groups use different observational datasets to initialise their historical simulations",
              "Different groups apply different scenarios, so the spread reflects the range of emissions assumed",
            ],
            correctIndex: 0,
            explanation:
              "The rules are built from physical principles and from observations, but they remain choices, and those choices differ between modelling centres.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "Where does the model spread show up hardest, according to lesson 4?",
            options: [
              "In climate sensitivity",
              "In the simulated position of the jet stream during the northern hemisphere winter season",
              "In the total mass of the atmosphere, which differs between models by several percent",
              "In the length of the seasonal cycle, which varies with each model's choice of calendar",
            ],
            correctIndex: 0,
            explanation:
              "Climate sensitivity is dominated by cloud feedbacks, and clouds are parameterised in every model that exists.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "What constrained ranges does the emergent-constraint study cited in lesson 4 report for the CMIP6 generation?",
            options: [
              "Transient response 1.3 to 2.1 K and sensitivity 1.9 to 3.4 K",
              "Transient response 0.5 to 1.0 K and sensitivity 1.0 to 1.5 K, both far below earlier assessments",
              "Transient response 2.5 to 4.0 K and sensitivity 4.5 to 6.0 K, both above earlier assessments",
              "Transient response 1.0 to 3.0 K and sensitivity 3.0 to 6.0 K, spanning the full unconstrained ensemble",
            ],
            correctIndex: 0,
            explanation:
              "Nijsse, Cox and Williamson give those at the 16 to 84 percent level for CMIP6, constrained against historical warming.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "What do Nijsse, Cox and Williamson conclude about the highest-sensitivity models?",
            options: [
              "They do not appear consistent with warming since 1975",
              "They reproduce the observed warming better than the rest of the ensemble once aerosols are accounted for",
              "They should be excluded from every assessment, a recommendation the paper makes explicitly",
              "They differ from the rest of the ensemble only in their ocean components rather than their clouds",
            ],
            correctIndex: 0,
            explanation:
              "Their constraint places models with sensitivity above 4.5 K and transient response above 2.5 K outside what the observed record supports.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "What problem does the weighting scheme of Sanderson, Wehner and Knutti address?",
            options: [
              "Models that share code and ancestry are not independent",
              "Models submitted late to an intercomparison receive less scrutiny than those submitted early",
              "Models run at different resolutions cannot be compared until they are interpolated to a common grid",
              "Models produced by larger institutions contribute more ensemble members than smaller ones",
            ],
            correctIndex: 0,
            explanation:
              "Their scheme weights by skill and by independence rather than giving every model one vote in an assessment.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "What caution do Sanderson, Wehner and Knutti report about their own weighting scheme?",
            options: [
              "Its influence on projected temperature and precipitation is moderate",
              "It cannot be applied to precipitation at all, because no skill metric for precipitation is agreed",
              "It reverses the sign of the projected change in several regions when applied to the full ensemble",
              "It requires a reference dataset that does not exist for any variable other than surface temperature",
            ],
            correctIndex: 0,
            explanation:
              "Rewarding skill and rewarding uniqueness partly cancel, so the two effects offset rather than compound.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "What is bias correction, as lesson 4 describes it?",
            options: [
              "Adjusting model output to match observed statistics before use",
              "Removing the systematic error introduced by a model's numerical time-stepping scheme",
              "Recalibrating the observations against the model wherever the model has more complete coverage",
              "Weighting each model in an ensemble by how closely it reproduces the observed record",
            ],
            correctIndex: 0,
            explanation:
              "It is done because impacts models need inputs that look like the real world, and it is objected to in print for good reasons.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "What is Ehret and colleagues' central objection to bias correction?",
            options: [
              "It hides uncertainty rather than reducing it",
              "It is too computationally expensive to apply to the full multi-model ensemble consistently",
              "It can only be applied to temperature, so any multivariate impacts study is left inconsistent",
              "It requires an observational record longer than exists for most of the variables it is used on",
            ],
            correctIndex: 0,
            explanation:
              "They argue it narrows the apparent uncertainty range by increasing agreement in hindcasts without providing a satisfactory physical justification.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "Besides hiding uncertainty, what damage do Ehret and colleagues say bias correction does?",
            options: [
              "It alters field consistency and violates conservation principles",
              "It removes the seasonal cycle along with the bias, leaving a series that cannot be used for extremes",
              "It shifts the timing of the model's internal variability so that ensemble members no longer align",
              "It introduces spurious trends by anchoring the corrected series to the observational baseline period",
            ],
            correctIndex: 0,
            explanation:
              "They name altered spatiotemporal field consistency and altered relations among variables alongside the violation of conservation principles.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "Lesson 4 says bias correction is used constantly despite the published objection. Why?",
            options: [
              "Impacts models need inputs that look like the real world",
              "Because the objection applies only to precipitation and not to the temperature fields most studies use",
              "Because the alternative, running models at higher resolution, is forbidden by the CMIP6 protocol",
              "Because assessment reports require every submitted projection to be bias corrected before inclusion",
            ],
            correctIndex: 0,
            explanation:
              "Both things are true at once, and lesson 4's conclusion is that the practitioner's obligation is to say which they did.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "What is climate sensitivity?",
            options: [
              "The warming that follows a doubling of carbon dioxide",
              "The rate at which a model's surface temperature drifts when it is run with no forcing at all",
              "The fraction of emitted carbon dioxide that remains in the atmosphere after a century",
              "The temperature difference between the coarsest and finest configurations of the same model",
            ],
            correctIndex: 0,
            explanation:
              "It is reported both as the long-run equilibrium climate sensitivity and as the shorter-term transient climate response.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "Which of these is the reason clouds matter so much for climate sensitivity?",
            options: [
              "Cloud feedbacks dominate the spread",
              "Clouds are the only component of the climate system that no model attempts to represent at all",
              "Clouds are measured so precisely from satellites that models are tightly constrained by them",
              "Clouds are resolved explicitly in every CMIP6 model, so differences arise from the grid rather than the physics",
            ],
            correctIndex: 0,
            explanation:
              "Clouds are far smaller than a grid cell, so every model handles them with a rule, and the rules differ.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "What is the default treatment of models in an intercomparison, before any weighting is applied?",
            options: [
              "One model, one vote",
              "Weighting by the number of ensemble members each modelling group contributed to the archive",
              "Weighting by the resolution of the model, with finer configurations counted more heavily",
              "Weighting by how recently each model was released, with newer versions replacing older ones",
            ],
            correctIndex: 0,
            explanation:
              "That default is what the skill and independence weighting of Sanderson, Wehner and Knutti was built to question.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "Why does lesson 4 present the weighting question as contested rather than settled?",
            options: [
              "Neither position is fringe and the evidence cuts both ways",
              "Because the two published positions were later withdrawn by their authors after further analysis",
              "Because no assessment has ever adopted either approach, so the argument has no practical consequence",
              "Because the disagreement is about whether warming is happening rather than about how to combine models",
            ],
            correctIndex: 0,
            explanation:
              "One paper builds a weighting and reports its effect as moderate, another constrains the ensemble against observed warming, and a reader who knows both can tell which an assessment adopted.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "A colleague bias corrects model output and then reports the resulting uncertainty range. What is the published objection to that?",
            options: [
              "The range has been narrowed without physical justification",
              "The range cannot be computed at all once a correction has been applied to the underlying fields",
              "The range will always be too wide, because bias correction adds its own error to every member",
              "The range applies only to the observational period and cannot be extended into the future",
            ],
            correctIndex: 0,
            explanation:
              "That is exactly Ehret and colleagues' point about hiding rather than reducing uncertainty, and it does not stop bias correction being necessary for impacts work.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "What is model uncertainty, in the sense lesson 4 uses?",
            options: [
              "Disagreement between models about the response to a forcing",
              "The random error introduced by the finite precision of the numbers a computer stores",
              "The uncertainty in the observations used to evaluate a model after it has been run",
              "The spread between runs of a single model started from different initial conditions",
            ],
            correctIndex: 0,
            explanation:
              "It arises largely from the parameterisation choices of this lesson, and Section 6 separates it from internal variability and from scenario uncertainty.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "Which statement best captures why knowing what is simulated and what is parameterised matters?",
            options: [
              "It explains why well-built models still disagree",
              "It determines which variables a model is allowed to publish to the CMIP archive",
              "It tells you which parts of a model were validated against observations before release",
              "It fixes the resolution at which the model must be run for its results to be valid",
            ],
            correctIndex: 0,
            explanation:
              "The simulated half rests on bedrock principles that every group shares; the parameterised half is where the choices, and therefore the disagreements, live.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — What kind of object is this number? (the keystone)
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-an-observation-is",
      title: "5 · What an observation is, and what it already cost",
      section: "Section 3 · What kind of object is this number?",
      body: `The word "observation" suggests something raw, as though a thermometer handed you a fact. Almost nothing in a climate dataset is raw, and knowing what happened to a number before it reached you is the first half of the taxonomy this course is built on.

**An observation is an instrument reading plus its history.** A station record spans decades during which the station moved, the screen was replaced, the observer changed the time of day they read it, and the fields around it became a car park. Each of those puts a step or a drift into the record that has nothing to do with climate. Homogenisation is the process of finding and removing those artefacts, usually by comparing a station with its neighbours, and it is the reason a published surface temperature series is a scientific product rather than a transcript.

**Coverage is the other cost.** Thermometers are where people are. HadCRUT5 is published both as a non-infilled version, which leaves the gaps empty, and as a statistically infilled version, and the Met Office describes its 200 realisations as sampling uncertainties in "methods used to account for changes in SST measurement practices, homogenisation of land station records and the potential impacts of urbanisation", with the infilled version adding uncertainty from measurement error, under-sampling and the reconstruction itself (Met Office, n.d.). Two honest datasets can differ simply because one guessed at the Arctic and one declined to.

**Satellites do not measure temperature.** A microwave sounder measures radiance, and a temperature is inferred from it. Turning decades of that into a climate record means correcting for the satellite's orbit drifting so that it samples a different local time, for the angle at which it views the Earth, and for the differences between the fourteen satellites whose records are stitched together. Remote Sensing Systems describes making "adjustments for changes in local measurement time (diurnal adjustment) and Earth incidence angle" and then intercalibrating "by comparing measurements from co-orbiting satellites", and notes that RSS, UAH and STAR all currently maintain such datasets (RSS, n.d.-a). Three teams, one set of raw radiances, three products, because the adjustment choices differ.

**So what is an observation good for.** It tells you what actually happened, at the places and times somebody was measuring, to within the uncertainty of the instrument and the adjustments. That is a genuinely different claim from anything a model can make, and it is the only kind of number that can falsify a model. What it cannot give you is a complete field: a value everywhere, at every hour, for every variable. The next lesson is about the object built to supply exactly that, and about the price it charges.

:::reveal Why is a published surface temperature series not a transcript of thermometer readings? ||| Because station records contain artefacts from moves, instrument changes, changes in the time of observation and changes in the surroundings, and homogenisation identifies and removes those before the series is published.

:::reveal Three teams process the same satellite microwave radiances into temperature records. Why do their answers differ? ||| Because the raw radiances have to be adjusted for orbital drift changing the local measurement time, for the Earth incidence angle, and for differences between successive satellites, and each team makes those adjustment choices differently.

## Vocabulary
- **Homogenisation**: detecting and removing non-climatic steps and drifts from an instrument record, usually by comparison with neighbouring stations.
- **Infilling**: statistically estimating values for grid boxes with no observations, which HadCRUT5 offers as a separate version rather than as the default.
- **Radiance**: the quantity a satellite sounder actually measures, from which a temperature is inferred rather than read off.
- **Realisation**: one member of an ensemble of equally plausible versions of a dataset, produced by sampling the uncertainties in how it was built.

## Sources
- Met Office. (n.d.). *HadCRUT5*. Met Office Hadley Centre observations datasets. https://www.metoffice.gov.uk/hadobs/hadcrut5/
- Remote Sensing Systems. (n.d.-a). *Upper air temperature*. https://www.remss.com/measurements/upper-air-temperature/`,
    },
    {
      slug: "what-a-reanalysis-is",
      title: "6 · What a reanalysis is, and why it is not an observation",
      section: "Section 3 · What kind of object is this number?",
      body: `A reanalysis is the most useful object in climate data and the most frequently misdescribed. Copernicus puts the definition in one sentence: "Climate reanalyses combine past observations with models to generate consistent time series of multiple climate variables" (Copernicus Climate Change Service, n.d.).

**How it is made.** You take a fixed weather forecasting system and use it "to 're-analyse' the state of the atmosphere for long periods in the past", running it forward in short steps while continuously pulling it towards the observations available at each step through data assimilation. The result, in ECMWF's words, is "the best fit to both the forecast and the observations, given the known uncertainties of both" (ECMWF, n.d.). ERA5, the one you will meet most often, is produced at about 31 kilometres, hourly, from 1940 to the present (ECMWF, n.d.; Hersbach et al., 2020).

**Why it looks like an observation.** It has a value everywhere. No gaps, no missing months, no unmeasured ocean, every variable on the same grid at the same times. That completeness is exactly what makes it so easy to work with, and exactly what makes it dangerous to describe as data.

**Why it is not one.** Where observations constrain the system, the reanalysis is close to measurement. Where they do not, the value you are reading is the model's, produced by physics rather than by an instrument. The fixed system removes the problem of a forecasting centre upgrading its model mid-record, but the observing system itself still changed: satellites were launched, radiosonde networks shrank, and ECMWF warns that spurious changes remain "due to changes in the observing system", with uncertainty growing "as you go back in time, when the observing system was not as good as in the present day, and in data sparse locations" (ECMWF, n.d.). That is why a long trend computed straight out of a reanalysis deserves more suspicion than the same trend from a homogenised station record.

**The philosophical version of the same point.** Wendy Parker asked directly what the difference is between reanalyses and observations, weighed four candidate answers, involving the role of inference, the reliance on forecasts, the need to solve an ill-posed inverse problem, and the understanding of the errors and uncertainties involved, and argued that the last of those matters most: what separates them is how well we can characterise the uncertainty in the result (Parker, 2016).

**The working rule.** Use a reanalysis when you need a complete, physically consistent field and you can live with model-derived values in the gaps. Do not use one as the arbiter of whether a model is right, because it contains a model. And say, in your own writing, which of the two you used, because a reader cannot tell from the plot.

:::reveal What does a reanalysis put in a place where there were no observations? ||| The model's own value, produced by the physics of the assimilating forecast system rather than by any instrument.

:::reveal Why does ECMWF warn against reading long trends straight out of a reanalysis? ||| Because although the analysis system is held fixed, the observing system itself changed over the record, so spurious changes remain and uncertainty grows further back in time and in data-sparse regions.

## Vocabulary
- **Data assimilation**: the step that pulls a running model towards the observations available at each time, producing the best fit to both given their uncertainties.
- **Reanalysis**: the complete, gridded, physically consistent estimate of the past produced by running a fixed forecast system with assimilation.
- **Observing system change**: a shift in what instruments existed, such as a new satellite, which can put a step into a reanalysis that no climate process caused.
- **ERA5**: the ECMWF reanalysis produced at about 31 kilometres, hourly, from 1940 to the present.

## Sources
- Copernicus Climate Change Service. (n.d.). *Climate reanalysis*. https://climate.copernicus.eu/climate-reanalysis
- ECMWF. (n.d.). *ERA5: Data documentation*. Copernicus Knowledge Base. https://confluence.ecmwf.int/display/CKB/ERA5%3A+data+documentation
- Hersbach, H., Bell, B., Berrisford, P., Hirahara, S., Horanyi, A., Munoz-Sabater, J., et al. (2020). The ERA5 global reanalysis. *Quarterly Journal of the Royal Meteorological Society, 146*(730), 1999-2049. https://doi.org/10.1002/qj.3803
- Parker, W. S. (2016). Reanalyses and observations: What's the difference? *Bulletin of the American Meteorological Society, 97*(9), 1565-1572. https://doi.org/10.1175/BAMS-D-14-00226.1`,
    },
    {
      slug: "what-model-output-is",
      title: "7 · What model output is, and the four-object table",
      section: "Section 3 · What kind of object is this number?",
      body: `A model run is a simulation. Nothing in it was measured, and that is not a criticism: it is the whole point, because a simulation can be run under conditions that never happened, which is the only way anyone can ask what would have occurred without the extra carbon dioxide.

**What CMIP is.** The Coupled Model Intercomparison Project is the arrangement by which the world's modelling groups run the same experiments so their results can be compared. CMIP6 is organised around a small common core, the DECK, short for Diagnostic, Evaluation and Characterization of Klima, plus a historical simulation of the industrial period, plus a set of endorsed intercomparison projects that ask more specific questions (Eyring et al., 2016). Output is distributed through the Earth System Grid Federation (Balaji et al., 2018).

**The trap in the historical run.** A historical simulation is driven with the observed forcings, greenhouse gases, volcanic eruptions, solar variation, and it reproduces the statistics of the observed climate. It does not reproduce the observed weather. The model has El Ninos, but they do not fall in the years the real ones fell, because their timing is internal to the system and depends on the model's own starting state. A historical run is therefore not a hindcast you can score year by year, and a figure that appears to score one is doing something else.

**Which run am I holding.** CMIP6 labels each ensemble member with a variant label such as r1i1p1f1, where the four indices are, in PCMDI's terms, "'r' for realization, 'i' for initialization, 'p' for physics, and 'f' for forcing" (PCMDI, n.d.). Two files from the same model and the same experiment that differ only in the r index are the same physics started differently, and any difference between them is internal variability rather than a result.

**The table this whole course is built around.**

| Object | Where the number comes from | What it can tell you | What it cannot |
| --- | --- | --- | --- |
| Observation | An instrument, adjusted and homogenised | What happened where somebody measured | A complete global field |
| Reanalysis | A fixed forecast model steered by assimilated observations | A consistent gridded field of many variables | A trustworthy long trend across observing system changes |
| Model run | A simulation given assumed inputs | The statistics of a climate, and counterfactuals | The weather of any particular date |
| Scenario projection | A model run whose future inputs are a chosen assumption | A conditional consequence of that assumption | What will actually happen |

Read that table again in a fortnight. Almost every argument you will see about climate data is an argument in which somebody has swapped one row for another.

:::reveal A historical CMIP run has an El Nino in 2003. Does that tell you anything about 2003? ||| No. A historical run reproduces the statistics of the observed climate, not its sequence, because the timing of internal variability depends on the model's own starting state rather than on the forcings.

:::reveal Two CMIP6 files differ only in the r index of their variant label. What is the difference between them? ||| The same model and the same experiment started from different initial conditions, so any difference between the two runs is internal variability rather than a forced response.

## Vocabulary
- **CMIP**: the Coupled Model Intercomparison Project, under which modelling groups run common experiments so their output can be compared.
- **DECK**: the small set of baseline CMIP6 experiments, standing for Diagnostic, Evaluation and Characterization of Klima.
- **Historical run**: a simulation driven with observed forcings, which reproduces the statistics of the past and not its sequence of events.
- **Variant label**: the r, i, p, f indices identifying which realization, initialization, physics and forcing a CMIP6 file belongs to.

## Sources
- Balaji, V., Taylor, K. E., Juckes, M., Lawrence, B. N., Durack, P. J., Lautenschlager, M., et al. (2018). Requirements for a global data infrastructure in support of CMIP6. *Geoscientific Model Development, 11*, 3659-3680. https://doi.org/10.5194/gmd-11-3659-2018
- Eyring, V., Bony, S., Meehl, G. A., Senior, C. A., Stevens, B., Stouffer, R. J., and Taylor, K. E. (2016). Overview of the Coupled Model Intercomparison Project Phase 6 (CMIP6) experimental design and organization. *Geoscientific Model Development, 9*, 1937-1958. https://doi.org/10.5194/gmd-9-1937-2016
- Program for Climate Model Diagnosis and Intercomparison. (n.d.). *CMIP6 guidance for data users*. Lawrence Livermore National Laboratory. https://pcmdi.llnl.gov/CMIP6/Guide/dataUsers.html`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Observation, reanalysis, model run",
      section: "Section 3 · What kind of object is this number?",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is an observation, in the sense lesson 5 uses the word?",
            options: [
              "An instrument reading plus its history",
              "A number recorded by a calibrated instrument and archived without any subsequent alteration",
              "Any value that can be checked against a second independent instrument at the same location",
              "A measurement taken at a site that has not moved since the record began",
            ],
            correctIndex: 0,
            explanation:
              "A station record spans decades of moves, screen replacements, changed reading times and changed surroundings, and all of that travels with the number.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "What is homogenisation?",
            options: [
              "Removing non-climatic steps and drifts from a record",
              "Averaging several nearby stations into a single series to reduce random measurement error",
              "Converting all stations in a network onto a common set of units and a common time zone",
              "Interpolating a station record onto a regular grid so that it can be compared with model output",
            ],
            correctIndex: 0,
            explanation:
              "It is usually done by comparing a station with its neighbours, and it is why a published series is a scientific product rather than a transcript.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "Which of these puts an artefact into a station record that has nothing to do with climate?",
            options: [
              "The observer changing the time of day they read the thermometer",
              "A run of unusually warm years driven by the El Nino Southern Oscillation",
              "A gradual increase in the global concentration of carbon dioxide over the record",
              "A volcanic eruption that cools the surface for two or three years afterwards",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 5 lists station moves, screen replacements, changed reading times and changed surroundings, all of which need finding and removing.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "Why does lesson 5 say coverage is a cost as well as a strength?",
            options: [
              "Thermometers are where people are",
              "Instruments degrade faster in remote locations, so distant stations carry larger measurement errors",
              "Older stations were sited to serve aviation and so are unrepresentative of the surrounding land",
              "National meteorological services publish only a subset of the stations they actually operate",
            ],
            correctIndex: 0,
            explanation:
              "That is why two honest datasets can differ simply because one guessed at the Arctic and one declined to.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "In what two forms is HadCRUT5 published?",
            options: [
              "Non-infilled and statistically infilled",
              "As an ensemble mean and as a single best-estimate realisation, with no other versions offered",
              "As a land-only product and an ocean-only product, which users combine themselves",
              "As a monthly product and a daily product, derived from the same underlying station data",
            ],
            correctIndex: 0,
            explanation:
              "The non-infilled version leaves the gaps empty; the infilled one estimates them and carries extra uncertainty from the reconstruction.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "What do HadCRUT5's 200 realisations sample?",
            options: [
              "Uncertainties in the methods used to build the dataset",
              "The internal variability of the climate system over the period the dataset covers",
              "The differences between the several models used to interpolate across data-sparse regions",
              "The spread between the three major global temperature records currently in publication",
            ],
            correctIndex: 0,
            explanation:
              "The Met Office names changes in sea surface measurement practice, homogenisation of land stations and the potential impacts of urbanisation among them.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "What does a satellite microwave sounder actually measure?",
            options: [
              "Radiance",
              "Air temperature directly, at the altitude of the layer it is pointed at",
              "The height of a pressure surface, from which temperature is calculated hydrostatically",
              "Water vapour content, from which temperature is inferred using a fixed lapse rate",
            ],
            correctIndex: 0,
            explanation:
              "A temperature is inferred from the radiance, which is why the satellite record is a processed product rather than a set of thermometer readings from orbit.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "Which adjustments does RSS describe applying to the satellite record?",
            options: [
              "Diurnal drift, Earth incidence angle, and intercalibration",
              "Cloud screening, aerosol removal and surface emissivity correction, in that order",
              "Orbital decay, solar contamination and instrument ageing, each corrected once per decade",
              "Latitude weighting, seasonal detrending and removal of the El Nino signal",
            ],
            correctIndex: 0,
            explanation:
              "The diurnal adjustment handles the satellite's orbit drifting so it samples a different local time, and intercalibration is done by comparing co-orbiting satellites.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "How many satellites does RSS describe intercalibrating for its temperature record?",
            options: [
              "Fourteen",
              "Three, being one from each of the agencies that has flown a microwave sounding unit",
              "Fifty, covering every polar-orbiting platform launched since the start of the record",
              "One, since the record is built from a single long-lived instrument rather than a series",
            ],
            correctIndex: 0,
            explanation:
              "Stitching those together is a large part of why three teams working from the same raw radiances produce three different products.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "Which three groups does RSS name as currently maintaining satellite temperature datasets?",
            options: [
              "RSS, UAH and STAR",
              "NASA, NOAA and the Met Office, each running its own reprocessing chain",
              "ECMWF, JMA and NCEP, the three centres that also produce global reanalyses",
              "Berkeley Earth, HadCRUT and GISTEMP, the three long surface temperature records",
            ],
            correctIndex: 0,
            explanation:
              "One set of raw radiances and three products, because the adjustment choices differ between the teams.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "What is an observation good for, that no other object in the taxonomy can supply?",
            options: [
              "It can falsify a model",
              "It provides a complete global field with no gaps at any point in the record",
              "It tells you what would have happened without human influence on the climate",
              "It gives values for variables that were never measured, by physical consistency",
            ],
            correctIndex: 0,
            explanation:
              "It tells you what actually happened where somebody was measuring, which is the only kind of claim a simulation cannot make.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "What can an observational dataset not give you?",
            options: [
              "A complete field everywhere at every hour",
              "Any information about the period before satellites were launched into polar orbit",
              "A quantity expressed as an anomaly rather than as an absolute value",
              "A record of any variable other than surface air temperature",
            ],
            correctIndex: 0,
            explanation:
              "That gap is what a reanalysis was built to fill, and lesson 6 is about the price it charges for filling it.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "What is a realisation, in the dataset sense used in lesson 5?",
            options: [
              "One member of an ensemble of plausible versions of the dataset",
              "A single station's record before it has been merged into the gridded product",
              "The version of a dataset published in a given year, superseded by the next release",
              "A model simulation used to fill the gaps in an observational archive",
            ],
            correctIndex: 0,
            explanation:
              "The ensemble is produced by sampling the uncertainties in how the dataset was built, which is why HadCRUT5 ships 200 of them.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "Why does the word \"raw\" mislead when applied to climate observations?",
            options: [
              "Almost nothing in a climate dataset is unprocessed",
              "Because raw files are archived only in binary formats that most users cannot open",
              "Because the raw values are proprietary and are never released by the agencies that hold them",
              "Because raw readings are discarded once a homogenised version has been published",
            ],
            correctIndex: 0,
            explanation:
              "Knowing what happened to a number before it reached you is the first half of the taxonomy this course is built on.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "Two temperature datasets disagree over the Arctic. Which explanation does lesson 5 make available?",
            options: [
              "One infilled the gaps and one did not",
              "One is a reanalysis and the other is a scenario projection, so they are not comparable at all",
              "One uses a 360-day calendar and the other uses the real calendar, misaligning the seasons",
              "One reports in kelvin and the other in degrees Celsius, offsetting the two by 273",
            ],
            correctIndex: 0,
            explanation:
              "HadCRUT5 publishes both a non-infilled and an infilled version precisely because that choice changes the answer where coverage is thin.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "What does the diurnal adjustment in the satellite record correct for?",
            options: [
              "The orbit drifting so the satellite samples a different local time",
              "The daily cycle of surface heating, which is removed so that only the trend remains",
              "The difference between ascending and descending passes over the same location",
              "The changing angle of the sun, which alters the radiance the instrument receives",
            ],
            correctIndex: 0,
            explanation:
              "RSS describes optimising the model-based diurnal cycle climatology used for it so that intersatellite differences from drifting measurement times are removed more accurately.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "How does lesson 5 characterise the relationship between an observation and its adjustments?",
            options: [
              "The adjustments are part of what the number is",
              "The adjustments are a separate product that users may apply or ignore as they prefer",
              "The adjustments are applied only to satellite data and never to surface station records",
              "The adjustments are performed once at publication and never revisited in later versions",
            ],
            correctIndex: 0,
            explanation:
              "That is why a published series is a scientific product with a method behind it rather than a transcript of instrument readings.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "Why does lesson 5 say infilling deserves to be a separate published version rather than the default?",
            options: [
              "Because it adds uncertainty from the reconstruction itself",
              "Because it is computationally expensive and cannot be recomputed for every release",
              "Because it can only be applied over land, leaving the ocean inconsistent with the land field",
              "Because it requires a climate model, which would turn the dataset into a reanalysis",
            ],
            correctIndex: 0,
            explanation:
              "The Met Office lists measurement error, under-sampling and the statistical reconstruction as the extra uncertainties the infilled version carries.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "How does Copernicus define a climate reanalysis?",
            options: [
              "Past observations combined with models to give consistent time series",
              "A statistical reconstruction of the past built entirely from station and satellite records",
              "A rerun of a climate model over the historical period using observed greenhouse gas concentrations",
              "A quality-controlled archive of every observation ever taken, gridded onto a common mesh",
            ],
            correctIndex: 0,
            explanation:
              "That single sentence contains the whole problem: it is neither purely observation nor purely model, and it is routinely described as one or the other.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "What does ECMWF say a reanalysis is the best fit to?",
            options: [
              "Both the forecast and the observations, given their uncertainties",
              "The observations alone, with the model used only to interpolate between them",
              "The model climatology, with observations used only to check the result afterwards",
              "The previous generation of reanalysis, so that the two records remain comparable",
            ],
            correctIndex: 0,
            explanation:
              "That is what data assimilation does: it pulls the running model towards the observations at each step, weighted by the known uncertainties of both.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "Why is the forecasting system held fixed across a reanalysis?",
            options: [
              "So model upgrades do not put steps into the record",
              "So the system can be run faster than real time and cover several decades in a single job",
              "So the reanalysis can be compared directly against the operational forecasts of the same period",
              "So the same code can be used by every centre producing a reanalysis of the same period",
            ],
            correctIndex: 0,
            explanation:
              "An operational forecasting system is improved constantly, and those improvements would otherwise be mixed into the record alongside changes in the climate.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "Why does a reanalysis look like an observation?",
            options: [
              "It has a value everywhere, with no gaps",
              "It is produced by the same agencies that operate the observing networks it draws on",
              "It is published in the same file format as the station records it assimilates",
              "It reports only variables that were directly measured, and omits the rest",
            ],
            correctIndex: 0,
            explanation:
              "That completeness is exactly what makes it easy to work with, and exactly what makes it dangerous to describe as data.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "What is the value in a reanalysis at a place where no observations existed?",
            options: [
              "The model's own",
              "A spatial interpolation between the nearest observations, with no model involved",
              "A gap, flagged with a fill value, exactly as in a non-infilled observational dataset",
              "A climatological average for that location, taken from an earlier reference period",
            ],
            correctIndex: 0,
            explanation:
              "It is produced by physics rather than by an instrument, which is the reason a reanalysis cannot be treated as measurement.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "Even with a fixed analysis system, what still changed over a reanalysis record?",
            options: [
              "The observing system itself",
              "The physical constants used in the radiation scheme, which are revised between releases",
              "The horizontal resolution, which is increased for the more recent decades of the record",
              "The calendar, which switches from a 360-day to a real calendar partway through",
            ],
            correctIndex: 0,
            explanation:
              "Satellites were launched and radiosonde networks shrank, so ECMWF warns that spurious changes remain due to changes in the observing system.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "Where does ECMWF say reanalysis uncertainty is largest?",
            options: [
              "Further back in time and in data-sparse locations",
              "In the most recent years, where quality control has not yet been completed",
              "Over the oceans in every period, because sea surface observations are never assimilated",
              "At the model's top levels, where the physics is least constrained by any observation",
            ],
            correctIndex: 0,
            explanation:
              "The observing system was not as good in the past, and where there is nothing to assimilate the analysis falls back on the model.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "Why does a long trend computed from a reanalysis deserve extra suspicion?",
            options: [
              "Observing system changes can put steps into it",
              "Because reanalyses are produced only at monthly resolution, which is too coarse for trends",
              "Because reanalyses assimilate model output rather than observations after the satellite era",
              "Because reanalyses are re-run every few years, so no trend is stable between releases",
            ],
            correctIndex: 0,
            explanation:
              "A homogenised station record has had exactly that class of artefact hunted down and removed; a reanalysis has not, for the observing system as a whole.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "Which four candidate answers did Wendy Parker weigh for how reanalyses differ from observations?",
            options: [
              "Inference, reliance on forecasts, an ill-posed inverse problem, and understanding of errors",
              "Resolution, coverage, latency and cost, being the four practical properties users compare",
              "Assimilation window, model version, observation type and grid geometry",
              "Accuracy, precision, completeness and reproducibility, as defined in measurement science",
            ],
            correctIndex: 0,
            explanation:
              "She argued the last of the four matters most: what separates them is how well the uncertainty in the result can be characterised.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "Which of Parker's four candidates did she argue matters most?",
            options: [
              "How well the uncertainty can be characterised",
              "The reliance on forecasts, since a reanalysis is built from short model forecasts throughout",
              "The role of inference, since every observation also involves inference from an instrument reading",
              "The ill-posed inverse problem, since that is unique to reanalysis among the two",
            ],
            correctIndex: 0,
            explanation:
              "Her point is that inference and model reliance are present in observation too, so the distinguishing feature has to be something else.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "What is the working rule lesson 6 gives for using a reanalysis?",
            options: [
              "Use it when you need a complete consistent field and say that you did",
              "Use it in place of observations wherever the observational record has any gaps at all",
              "Use it only for the satellite era, and switch to station records for anything earlier",
              "Use it as the reference against which model output is judged, since it is observationally constrained",
            ],
            correctIndex: 0,
            explanation:
              "And do not use one as the arbiter of whether a model is right, because it contains a model.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "Why does lesson 6 insist you say in your own writing whether you used a reanalysis?",
            options: [
              "A reader cannot tell from the plot",
              "Because the licence under which reanalysis data is distributed requires it in any publication",
              "Because reanalysis products carry a version number that changes the result between releases",
              "Because reanalysis values are copyrighted while observations are in the public domain",
            ],
            correctIndex: 0,
            explanation:
              "A reanalysis line and an observational line look identical on a chart, which is the whole reason this section exists.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "What is data assimilation?",
            options: [
              "Pulling a running model towards the available observations at each step",
              "Merging several observational datasets into one archive with a common quality control",
              "Adjusting model output after a run so that its statistics match the observed record",
              "Selecting which observations to publish, based on how well they agree with the model",
            ],
            correctIndex: 0,
            explanation:
              "The result is the best fit to both the forecast and the observations, given the known uncertainties of each.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "Which statement about ERA5 is supported by lesson 6?",
            options: [
              "It is a reanalysis, so it contains model values where observations are absent",
              "It is an observational dataset produced by merging satellite and station records without a model",
              "It is a CMIP6 model run driven by observed forcings over the industrial period",
              "It is a scenario projection extended backwards to cover the historical period",
            ],
            correctIndex: 0,
            explanation:
              "It is the reanalysis you will meet most often, produced at about 31 kilometres, hourly, from 1940 to the present.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "A colleague evaluates a climate model by comparing it against ERA5. What is the objection?",
            options: [
              "ERA5 contains a model of its own",
              "ERA5 covers too short a period to evaluate a model over the industrial era",
              "ERA5 is published at a resolution too fine to compare with a climate model directly",
              "ERA5 uses a different calendar, so the seasons cannot be aligned between the two",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 6's rule is not that the comparison is worthless, but that a reanalysis cannot be the arbiter of whether a model is right.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "What does lesson 6 identify as the price a reanalysis charges for its completeness?",
            options: [
              "Model-derived values wherever observations are absent",
              "A delay of several years before any given month becomes available to users",
              "A restriction to a small set of variables that were directly assimilated",
              "A coarse grid, far coarser than the observing network can support",
            ],
            correctIndex: 0,
            explanation:
              "Where observations constrain the system the reanalysis is close to measurement; where they do not, you are reading the physics.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "What does the phrase \"observing system change\" mean in lesson 6?",
            options: [
              "A shift in which instruments existed, such as a new satellite",
              "A change in the model used to assimilate the observations partway through a reanalysis",
              "A change in the grid onto which the observations are interpolated before assimilation",
              "A revision to the units or calendar used in the archive holding the observations",
            ],
            correctIndex: 0,
            explanation:
              "Such a change can put a step into a reanalysis that no climate process caused, which is why long reanalysis trends need care.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "Why does lesson 6 call reanalysis the most frequently misdescribed object in climate data?",
            options: [
              "It is complete like data and constructed like a model",
              "It is published under a licence that most users misread as permitting redistribution",
              "It is named after a process that no longer resembles what is actually done to produce it",
              "It is the only product whose documentation is written for specialists rather than users",
            ],
            correctIndex: 0,
            explanation:
              "Completeness is what makes it so useful and what makes calling it data so tempting and so wrong.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "What does a fixed forecast system remove from a reanalysis record, and what does it not remove?",
            options: [
              "It removes model upgrades but not observing system changes",
              "It removes observing system changes but not model upgrades, which continue between releases",
              "It removes both, which is why a reanalysis trend is more reliable than a station trend",
              "It removes neither, and the fixing is done purely to make the run reproducible",
            ],
            correctIndex: 0,
            explanation:
              "That asymmetry is the whole caveat: the analysis system is frozen but the world's instruments were not.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "What is a model run, in the taxonomy of Section 3?",
            options: [
              "A simulation, in which nothing was measured",
              "A hindcast whose accuracy can be scored year by year against the observed record",
              "A blend of measurement and physics, in the same way that a reanalysis is",
              "A statistical extrapolation of the observed record forward under assumed forcings",
            ],
            correctIndex: 0,
            explanation:
              "That is the point rather than a criticism, because a simulation can be run under conditions that never happened.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "What does the ability to run a simulation under conditions that never happened make possible?",
            options: [
              "Asking what would have occurred without the extra carbon dioxide",
              "Predicting the exact date on which a regional threshold will be crossed",
              "Replacing observations in regions where the instrumental network is too sparse",
              "Eliminating internal variability from the projection, leaving only the forced signal",
            ],
            correctIndex: 0,
            explanation:
              "That counterfactual is the basis of attribution, which Section 6 develops, and no measurement can supply it.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "What is CMIP?",
            options: [
              "The arrangement under which modelling groups run the same experiments",
              "A single global climate model maintained collectively by the world's modelling centres",
              "The archive of observations against which all climate models are formally evaluated",
              "The committee that sets the emission scenarios used in international assessments",
            ],
            correctIndex: 0,
            explanation:
              "Running common experiments is what makes results comparable across groups, which is the entire purpose of an intercomparison project.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "What does the CMIP6 acronym DECK stand for?",
            options: [
              "Diagnostic, Evaluation and Characterization of Klima",
              "Data, Experiments, Calibration and Knowledge, the four pillars of the intercomparison",
              "Dynamic Earth Climate Kernel, the shared numerical core used by participating models",
              "Distributed Evaluation of Coupled Kinetics, the protocol for comparing ocean components",
            ],
            correctIndex: 0,
            explanation:
              "Eyring and colleagues describe it as a handful of common experiments forming the baseline every participating model runs.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "What are the three parts of the CMIP6 structure described in lesson 7?",
            options: [
              "The DECK, a historical simulation, and endorsed intercomparison projects",
              "An observational archive, a model archive and a scenario archive, held at separate centres",
              "A control run, a doubling experiment and a scenario run, performed by each group in turn",
              "A design phase, a simulation phase and an assessment phase, run on a six-year cycle",
            ],
            correctIndex: 0,
            explanation:
              "The endorsed projects ask more specific questions than the common core, and groups choose which to join.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "Through what is CMIP6 output distributed?",
            options: [
              "The Earth System Grid Federation",
              "The Copernicus Climate Data Store, which is also the sole distributor of ERA5",
              "The World Data Centre for Paleoclimatology, alongside the proxy archives",
              "Direct download from each modelling centre's own institutional repository",
            ],
            correctIndex: 0,
            explanation:
              "Balaji and colleagues set out the requirements for the global data infrastructure that supports it.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "What does a CMIP historical simulation reproduce?",
            options: [
              "The statistics of the observed climate",
              "The observed sequence of years, so it can be scored against the record year by year",
              "The observed weather, at daily resolution, over the whole industrial period",
              "The observed pattern of internal variability, including the timing of each El Nino",
            ],
            correctIndex: 0,
            explanation:
              "It is driven with the observed forcings, but the timing of its internal variability is its own, so it is not a hindcast you can score by year.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "Why do a model's El Ninos not fall in the years the real ones fell?",
            options: [
              "Their timing is internal and depends on the run's starting state",
              "Because the model's calendar differs from the real one, shifting events by several months",
              "Because the observed forcings are applied as annual averages, which smooths the timing out",
              "Because El Nino is a parameterised process rather than a simulated one in most models",
            ],
            correctIndex: 0,
            explanation:
              "That is the trap in the historical run, and a figure that appears to score a historical run year by year is doing something else.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "What do the four indices in a CMIP6 variant label stand for?",
            options: [
              "Realization, initialization, physics, forcing",
              "Resolution, institution, phase and frequency, in the order they appear in the filename",
              "Run, iteration, project and file, being the four levels of the directory structure",
              "Region, interval, parameter and format, being the four facets used in archive search",
            ],
            correctIndex: 0,
            explanation:
              "PCMDI's guidance for data users gives exactly those four for the r, i, p and f of a label such as r1i1p1f1.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "Two CMIP6 files share a model and an experiment but differ in the r index. What does the difference between them measure?",
            options: [
              "Internal variability",
              "Model uncertainty, since the two runs used different parameterisation settings",
              "Scenario uncertainty, since the two runs assumed different emission pathways",
              "Observational uncertainty, since the two runs were initialised from different datasets",
            ],
            correctIndex: 0,
            explanation:
              "Same physics, different starting state, so nothing but the system's own fluctuations separates the two runs.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "In Section 3's table, what can a model run tell you that an observation cannot?",
            options: [
              "Counterfactuals",
              "What happened at a specific place on a specific date in the past",
              "The uncertainty in the instrument that produced a given measurement",
              "The complete field of a variable that was never simulated at all",
            ],
            correctIndex: 0,
            explanation:
              "Along with the statistics of a climate, which is what a simulation is for; the weather of a particular date is what it cannot give you.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "In Section 3's table, what can a scenario projection not tell you?",
            options: [
              "What will actually happen",
              "The consequence of the assumption the scenario encodes for the climate system",
              "How a model responds to a specified pathway of greenhouse gas concentrations",
              "The difference between two pathways run through the same model",
            ],
            correctIndex: 0,
            explanation:
              "Its output is conditional on the chosen inputs, which is why Section 6 spends a whole lesson on not reading a scenario as a forecast.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "In Section 3's table, what is the thing a reanalysis specifically cannot be trusted for?",
            options: [
              "A long trend across observing system changes",
              "A consistent gridded field of several variables at once",
              "A value in a region where dense observations were assimilated",
              "An hourly time series over the most recent decade",
            ],
            correctIndex: 0,
            explanation:
              "The analysis system is fixed but the instruments were not, so a step in the observing system can look like a step in the climate.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "What does lesson 7 say almost every argument about climate data really is?",
            options: [
              "An argument where somebody swapped one row of the table for another",
              "An argument about whether the underlying physics of the greenhouse effect is correct",
              "An argument about which statistical test should be applied to a short record",
              "An argument about which institution's version of a dataset should be treated as canonical",
            ],
            correctIndex: 0,
            explanation:
              "That is why lesson 7 asks you to read the four-object table again a fortnight later.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "A figure plots a historical CMIP run against the observed record and marks the years where they diverge. What is wrong with the framing?",
            options: [
              "A historical run is not a year-by-year hindcast",
              "A historical run cannot be plotted against observations at all, because the units differ",
              "A historical run covers a different period, so the two series never overlap",
              "A historical run is a scenario projection and so has no observed counterpart",
            ],
            correctIndex: 0,
            explanation:
              "It reproduces the statistics rather than the sequence, so a year in which the two differ may simply be a year the model drew a different El Nino.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "What is the fourth column of Section 3's table for?",
            options: [
              "What each object cannot tell you",
              "The institution responsible for producing each kind of object",
              "The file format in which each kind of object is usually distributed",
              "The typical spatial resolution at which each kind of object is available",
            ],
            correctIndex: 0,
            explanation:
              "Knowing the limit of each object is what stops a reader swapping one row for another without noticing.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "Which pairing of object and source of its number is correct?",
            options: [
              "Observation, an instrument that was adjusted and homogenised",
              "Reanalysis, an instrument reading with no model in the processing chain",
              "Model run, a measurement taken at the resolution of the model grid",
              "Scenario projection, an extrapolation of the observed trend with no model involved",
            ],
            correctIndex: 0,
            explanation:
              "The other three rows are a fixed forecast model steered by assimilated observations, a simulation given assumed inputs, and a simulation whose future inputs were chosen.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "Why does lesson 7 open by saying that nothing in a model run was measured?",
            options: [
              "To set up why that is a strength rather than a defect",
              "To argue that model output should not be used in assessments without observational support",
              "To explain why model output is distributed separately from observational archives",
              "To justify bias correcting model output before it is used for any purpose",
            ],
            correctIndex: 0,
            explanation:
              "A simulation can be run under conditions that never happened, which is the only way to ask what would have occurred without the extra carbon dioxide.",
            sourceLessonSlug: "what-model-output-is",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Datasets and how to read their documentation
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-dataset-families",
      title: "8 · The dataset families, and choosing between them",
      section: "Section 4 · Datasets and how to read their documentation",
      body: `You do not need to memorise dataset names. You need to know which family a name belongs to, because the family determines what the number is, and Section 3 already told you why that is the question that matters.

**Surface temperature, from stations and ships.** Three long records dominate, and they are built differently on purpose so that agreement between them means something. NASA's GISTEMP combines NOAA's GHCN version 4 station data with ERSST version 5 ocean data and reports anomalies against a 1951 to 1980 base period (GISTEMP Team, n.d.). The Met Office's HadCRUT5 merges the CRUTEM5 land record with the HadSST4 sea surface record, reports against 1961 to 1990, and ships 200 realisations sampling its own uncertainty (Met Office, n.d.). Berkeley Earth interpolates with kriging and reports that including the rapid warming above Arctic sea ice "suggests the global average has increased an additional 0.1 °C during the last 100 years" (Rohde and Hausfather, 2020).

**Reanalysis.** ERA5 is the default choice for a complete gridded field, at about 31 kilometres and hourly from 1940 (ECMWF, n.d.). Everything in Section 3 about what a reanalysis contains applies.

**Satellite soundings.** RSS, UAH and STAR each publish a tropospheric temperature record derived from microwave sounders (RSS, n.d.-a). These are the shortest of the records and the most sensitive to processing choices.

**Model output.** CMIP6, distributed through the Earth System Grid Federation (Balaji et al., 2018). A file here is a simulation, never a measurement.

**Proxy records.** NOAA's paleoclimatology archive holds tree rings, ice cores, corals, stalagmites and ocean and lake sediments, which "extend the weather and climate information archive by hundreds to millions of years" (NOAA NCEI, n.d.). Proxies are indirect: something was measured, and a climate variable was inferred from it through a calibration.

**Scenario forcings.** The greenhouse gas concentration pathways that drive CMIP6 future runs are published in their own right (Meinshausen et al., 2020). These are inputs, not results.

**How to choose, in one question.** What claim am I making? If the claim is "this happened", you need observations. If it is "here is the whole field, consistently", you need a reanalysis and you must say so. If it is "here is what the physics implies", you need model output. If it is "here is what follows from assuming X", you need a scenario run and you must name X. Mixing two families inside a single line on a single chart without labelling the join is the most common way a climate figure misleads without containing a false number.

**And one caution about agreement.** These records are not independent. They draw on overlapping station networks and overlapping sea surface data, so their agreement is weaker evidence than it looks, and Section 6 raises the same problem for climate models.

:::reveal Which reference periods do GISTEMP and HadCRUT5 use, and why does that matter when you compare them? ||| GISTEMP uses 1951 to 1980 and HadCRUT5 uses 1961 to 1990, so the same warming plotted from each will sit at different absolute anomaly values unless you re-baseline one of them.

:::reveal What single question tells you which dataset family you need? ||| What claim am I making: that something happened, that a field was consistent, that the physics implies something, or that something follows from an assumption.

## Vocabulary
- **Dataset family**: the class an archive belongs to, being observation, reanalysis, model output, proxy or scenario forcing, which fixes what its numbers can mean.
- **Proxy record**: an indirect climate record, such as a tree ring or ice core, from which a climate variable is inferred through a calibration.
- **Kriging**: the spatial interpolation method Berkeley Earth uses to produce a filled temperature field from irregular observations.
- **Independence**: whether two records draw on separate evidence, which matters because agreement between overlapping records is weak confirmation.

## Sources
- Balaji, V., Taylor, K. E., Juckes, M., Lawrence, B. N., Durack, P. J., Lautenschlager, M., et al. (2018). Requirements for a global data infrastructure in support of CMIP6. *Geoscientific Model Development, 11*, 3659-3680. https://doi.org/10.5194/gmd-11-3659-2018
- ECMWF. (n.d.). *ERA5: Data documentation*. Copernicus Knowledge Base. https://confluence.ecmwf.int/display/CKB/ERA5%3A+data+documentation
- GISTEMP Team. (n.d.). *GISS surface temperature analysis (GISTEMP), version 4*. NASA Goddard Institute for Space Studies. https://data.giss.nasa.gov/gistemp/
- Meinshausen, M., Nicholls, Z. R. J., Lewis, J., Gidden, M. J., Vogel, E., Freund, M., et al. (2020). The shared socio-economic pathway (SSP) greenhouse gas concentrations and their extensions to 2500. *Geoscientific Model Development, 13*, 3571-3605. https://doi.org/10.5194/gmd-13-3571-2020
- Met Office. (n.d.). *HadCRUT5*. Met Office Hadley Centre observations datasets. https://www.metoffice.gov.uk/hadobs/hadcrut5/
- NOAA National Centers for Environmental Information. (n.d.). *Paleoclimatology*. https://www.ncei.noaa.gov/products/paleoclimatology
- Remote Sensing Systems. (n.d.-a). *Upper air temperature*. https://www.remss.com/measurements/upper-air-temperature/
- Rohde, R. A., and Hausfather, Z. (2020). The Berkeley Earth land/ocean temperature record. *Earth System Science Data, 12*, 3469-3479. https://doi.org/10.5194/essd-12-3469-2020`,
    },
    {
      slug: "reading-the-documentation",
      title: "9 · Reading the documentation before you read the data",
      section: "Section 4 · Datasets and how to read their documentation",
      body: `Most climate data arrives as netCDF, which Unidata defines as "Network Common Data Form", a format for "array-oriented scientific data" that is self-describing, in the sense that "a netCDF file includes information about the data it contains", and machine-independent (Unidata, n.d.). Self-describing is the important word: the file will tell you what it holds if you ask it, and the commonest beginner error is not asking.

**The convention on top of the format.** The CF conventions standardise what that self-description says. They exist to "promote the processing and sharing of files created with the NetCDF API" and to give "a definitive description of what the data in each variable represents", through a controlled table of standard names alongside spatial and temporal metadata; the current version is 1.13 (CF Conventions, n.d.). Two files that both follow CF can be compared without a human deciding what each variable means.

**Six questions to ask any file before you plot it.**

*What is the variable, exactly.* A CF standard name is precise in a way a filename is not. Air temperature near the surface, sea surface temperature and skin temperature are three different things that all get called temperature in conversation.

*What are the units.* Kelvin or degrees Celsius changes an anomaly not at all and an absolute value by 273. Precipitation is very often a flux in kilograms per square metre per second, which needs converting before it looks like millimetres per day, and a factor-of-86400 error is the single most common precipitation bug.

*What is the calendar.* Climate models do not all use the real calendar. A 360-day calendar of twelve 30-day months and a no-leap calendar are both common, because they simplify the model's bookkeeping. Averaging a 360-day model against a real-calendar observation without noticing will quietly misalign your seasons.

*What is the grid, and where is longitude zero.* Some files run longitude from 0 to 360 and some from -180 to 180, and a plot that looks like the Pacific has been cut in half is telling you which. Latitudes may run north to south or south to north.

*How are missing values marked.* Land in an ocean file, or an unmeasured box, is usually flagged with a fill value. Read it as a number and you will average a large negative into your result.

*Which version is this.* Datasets are reissued. GISTEMP version 4 is not version 3, HadCRUT5 is not HadCRUT4, and ERA5 is not ERA-Interim. A result that cannot name its dataset version cannot be reproduced.

**Weight before you average.** On a regular latitude and longitude grid the cells shrink towards the poles, so a plain mean over-counts the poles. As xarray's own worked example puts it, "for a rectangular grid the cosine of the latitude is proportional to the grid cell area", and the demonstration notes that the weighted global mean temperature comes out higher than the unweighted one (xarray, n.d.). An unweighted global mean is not a slightly worse answer. It is an answer to a different question.

**Where the CMIP6 vocabulary lives.** The permitted values for model, experiment, frequency, table and institution are published as controlled vocabularies, in files named CMIP6_source_id.json, CMIP6_experiment_id.json, CMIP6_frequency.json, CMIP6_table_id.json and CMIP6_institution_id.json (WCRP, n.d.). If a value is not in the vocabulary, it is not CMIP6.

:::reveal A precipitation field is stored in kilograms per square metre per second. Why does that matter and what is the usual mistake? ||| Because it is a flux, not a depth, and it has to be converted before it reads as millimetres per day. Forgetting the conversion produces an error of a factor of 86400.

:::reveal Why is an unweighted mean over a latitude and longitude grid wrong rather than merely imprecise? ||| Because grid cells shrink towards the poles, so an unweighted mean gives polar cells the same influence as far larger equatorial ones, which answers a different question than the area-weighted global mean.

## Vocabulary
- **netCDF**: Network Common Data Form, the self-describing, machine-independent, array-oriented format most climate data arrives in.
- **CF conventions**: the metadata standard layered on netCDF that fixes standard names, units, coordinates and calendars so files from different sources can be compared.
- **Model calendar**: the timekeeping a model uses, which may be a 360-day or no-leap calendar rather than the real one.
- **Fill value**: the flag marking a cell with no data, which must be masked rather than averaged.
- **Controlled vocabulary**: the published list of permitted values for a metadata field, which is what makes a CMIP6 file machine-checkable.

## Sources
- CF Conventions. (n.d.). *CF conventions and metadata*. https://cfconventions.org/
- Unidata. (n.d.). *NetCDF*. NSF NCAR. https://www.unidata.ucar.edu/software/netcdf/
- WCRP. (n.d.). *CMIP6_CVs: CMIP6 controlled vocabularies* [code repository]. GitHub. https://github.com/WCRP-CMIP/CMIP6_CVs
- xarray. (n.d.). *Compare weighted and unweighted mean temperature*. xarray documentation. https://docs.xarray.dev/en/stable/examples/area_weighted_temperature.html`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Datasets and documentation",
      section: "Section 4 · Datasets and how to read their documentation",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does lesson 8 say you actually need to know about dataset names?",
            options: [
              "Which family a name belongs to",
              "The version history of each dataset, so that a result can be reproduced years later",
              "The institution that maintains it, since that determines which licence applies to its use",
              "The exact number of stations feeding each product, since that fixes its spatial coverage",
            ],
            correctIndex: 0,
            explanation:
              "The family determines what the number is, and Section 3 already established that this is the question that matters.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "What does NASA's GISTEMP combine?",
            options: [
              "GHCN version 4 station data with ERSST version 5 ocean data",
              "The CRUTEM5 land record with the HadSST4 sea surface record, as HadCRUT5 does",
              "Satellite microwave soundings with radiosonde profiles from the global upper-air network",
              "Reanalysis output with proxy reconstructions to extend the record before the instrumental era",
            ],
            correctIndex: 0,
            explanation:
              "The three long surface records are built differently on purpose, so that agreement between them carries some information.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "Which base period does GISTEMP report anomalies against?",
            options: [
              "1951 to 1980",
              "1961 to 1990, the same period the World Meteorological Organization keeps as a fixed reference",
              "1991 to 2020, the current rolling climatological standard normal",
              "1850 to 1900, taken as an approximation to pre-industrial conditions",
            ],
            correctIndex: 0,
            explanation:
              "HadCRUT5 uses 1961 to 1990 instead, which is why the same warming plotted from each sits at different anomaly values.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "What does HadCRUT5 merge?",
            options: [
              "CRUTEM5 land data with HadSST4 sea surface data",
              "GHCN version 4 station data with ERSST version 5 ocean data, as GISTEMP does",
              "A kriged land field with an interpolated version of an earlier sea surface dataset",
              "Reanalysis fields with satellite retrievals over the ocean and stations over land",
            ],
            correctIndex: 0,
            explanation:
              "It reports against 1961 to 1990 and ships 200 realisations sampling its own construction uncertainty.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "What method does Berkeley Earth use to produce a filled temperature field?",
            options: [
              "Kriging",
              "A neural network trained on the reanalysis fields for the same period",
              "Simple nearest-neighbour assignment from the closest available station to each grid box",
              "Assimilation of station data into a fixed weather forecasting model",
            ],
            correctIndex: 0,
            explanation:
              "That spatial interpolation is what gives it better Arctic coverage than a record that leaves unmeasured boxes empty.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "What does Berkeley Earth report about including the rapid warming above Arctic sea ice?",
            options: [
              "It suggests the global average rose an additional 0.1 °C over the last 100 years",
              "It suggests the global average rose an additional 0.5 °C over the last 50 years",
              "It makes no measurable difference to the global average, only to the Arctic regional series",
              "It reduces the global average by about 0.2 °C, because the Arctic was previously over-weighted",
            ],
            correctIndex: 0,
            explanation:
              "That is Rohde and Hausfather's own statement about the effect of covering a region other records leave empty.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "Which dataset does lesson 8 name as the default choice when you need a complete gridded field?",
            options: [
              "ERA5",
              "HadCRUT5, in its statistically infilled version, which also has no gaps",
              "The CMIP6 multi-model mean, since averaging many models fills every region",
              "The NOAA paleoclimatology archive, which covers the longest period of any product",
            ],
            correctIndex: 0,
            explanation:
              "And everything Section 3 says about what a reanalysis contains applies to it, including the model values in the gaps.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "Which property does lesson 8 attribute to the satellite sounding records?",
            options: [
              "Shortest records and most sensitive to processing choices",
              "Longest records and least sensitive to processing choices, since orbit is precisely known",
              "Complete global coverage with no adjustment needed, because a satellite sees everywhere",
              "Direct temperature measurement, without inference from any other measured quantity",
            ],
            correctIndex: 0,
            explanation:
              "Three teams produce three products from one set of raw radiances, which is exactly what sensitivity to processing choices looks like.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "What kinds of proxy does NOAA's paleoclimatology archive hold?",
            options: [
              "Tree rings, ice cores, corals, stalagmites, sediments",
              "Radiosondes, buoys, ships, aircraft reports and surface stations",
              "Satellite radiances, ground-based lidar and aircraft-mounted spectrometers",
              "Model runs extended backwards to cover the period before instruments existed",
            ],
            correctIndex: 0,
            explanation:
              "NOAA describes them as extending the weather and climate information archive by hundreds to millions of years.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "Why does lesson 8 call a proxy record indirect?",
            options: [
              "Something was measured and a climate variable inferred through a calibration",
              "The record was collected by an institution other than the one that published it",
              "The record is stored as a summary statistic rather than as the underlying measurements",
              "The record covers a region adjacent to the one it is used to describe",
            ],
            correctIndex: 0,
            explanation:
              "A tree ring width is a measurement; the temperature it is taken to represent is an inference with a calibration behind it.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "What are the scenario greenhouse gas concentration pathways, in the family taxonomy?",
            options: [
              "Inputs, not results",
              "Outputs of the CMIP6 models, averaged across the multi-model ensemble",
              "Observations, since they are derived from measured atmospheric concentrations",
              "A form of reanalysis, since they combine observations with a model of the carbon cycle",
            ],
            correctIndex: 0,
            explanation:
              "They drive the future runs, so reading one as a result reverses the direction of the whole calculation.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "What single question does lesson 8 offer for choosing a dataset family?",
            options: [
              "What claim am I making",
              "Which dataset has the finest spatial resolution for the region I care about",
              "Which dataset is most widely cited in the literature on my topic",
              "Which dataset is easiest to download and open in the tools I already use",
            ],
            correctIndex: 0,
            explanation:
              "That something happened, that a field was consistent, that the physics implies something, or that something follows from an assumption.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "According to lesson 8, what is the commonest way a climate figure misleads without containing a false number?",
            options: [
              "Mixing two families in one line without labelling the join",
              "Plotting the y-axis on a logarithmic scale without saying so in the caption",
              "Using a colour scale that cannot be read by a person with colour blindness",
              "Reporting a value to more significant figures than the underlying data supports",
            ],
            correctIndex: 0,
            explanation:
              "Every number on such a chart can be correct while the line as a whole makes a claim no single object supports.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "Why does lesson 8 caution against reading agreement between the long temperature records as strong confirmation?",
            options: [
              "They draw on overlapping station and sea surface data",
              "They are all produced by the same institution using a single processing chain",
              "They all report against the same baseline, so their agreement is guaranteed by construction",
              "They are all derived from reanalysis output rather than from independent measurements",
            ],
            correctIndex: 0,
            explanation:
              "Section 6 raises exactly the same independence problem for climate models, where shared code and shared ancestry have the same effect.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "You want to state that a particular month was the warmest on record at a particular place. Which family do you need?",
            options: [
              "Observations",
              "A reanalysis, because it provides a value for every location including that one",
              "Model output, because a model can be run for exactly that location and month",
              "A scenario projection, because it covers the period in which the month falls",
            ],
            correctIndex: 0,
            explanation:
              "The claim is that something happened where somebody measured, and only an observation supports that kind of claim.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "You need a physically consistent field of several variables at once over the whole globe. Which family?",
            options: [
              "A reanalysis, stated as such",
              "Observations, infilled statistically wherever the network is too sparse to give a value",
              "A proxy reconstruction, because only proxies cover every region without gaps",
              "A scenario projection for the historical period, run at the finest available resolution",
            ],
            correctIndex: 0,
            explanation:
              "And you must say so, because the completeness came from a model wherever the observations ran out.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "What format does most climate data arrive in?",
            options: [
              "netCDF",
              "Comma-separated values, one file per station and one row per observation time",
              "A relational database dump, queried through a structured query language interface",
              "GRIB only, which is the format operational forecasting centres exchange fields in",
            ],
            correctIndex: 0,
            explanation:
              "Unidata defines it as Network Common Data Form, a self-describing, machine-independent format for array-oriented scientific data.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "What does it mean that netCDF is self-describing?",
            options: [
              "The file includes information about the data it contains",
              "The file can be read without any software library, because it is stored as plain text",
              "The file rejects any value that falls outside the range declared for its variable",
              "The file contains a copy of the code that produced it, so results can be reproduced",
            ],
            correctIndex: 0,
            explanation:
              "The commonest beginner error is not asking the file what it holds before plotting what is in it.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "What do the CF conventions add on top of netCDF?",
            options: [
              "A standard description of what each variable represents",
              "Compression, so that large gridded datasets can be transferred more quickly",
              "Access control, so that datasets can be published with per-user permissions",
              "A checksum, so that a corrupted download can be detected before analysis",
            ],
            correctIndex: 0,
            explanation:
              "They exist to promote the processing and sharing of netCDF files through a controlled table of standard names alongside spatial and temporal metadata.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "What is the current version of the CF conventions given in lesson 9?",
            options: [
              "1.13",
              "4.0, aligned with the version number of the Creative Commons licence used for the material",
              "6.0, aligned with the phase number of the current Coupled Model Intercomparison Project",
              "2.1, which has been stable since the conventions were first adopted for gridded data",
            ],
            correctIndex: 0,
            explanation:
              "Two files that both follow CF can be compared without a human having to decide what each variable means.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "Why does lesson 9 warn that a filename is not a precise statement of the variable?",
            options: [
              "Several distinct quantities are all called temperature in conversation",
              "Filenames are truncated by most archives to a fixed number of characters",
              "Filenames are assigned by the download client rather than by the data provider",
              "Filenames use a controlled vocabulary that differs between modelling centres",
            ],
            correctIndex: 0,
            explanation:
              "Air temperature near the surface, sea surface temperature and skin temperature are three different things, and a CF standard name distinguishes them.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "What is the unit trap lesson 9 identifies for precipitation?",
            options: [
              "It is often a flux in kilograms per square metre per second",
              "It is often stored in inches rather than millimetres in datasets of American origin",
              "It is often cumulative since the start of the run rather than per time step",
              "It is often reported as a probability of exceedance rather than as a depth",
            ],
            correctIndex: 0,
            explanation:
              "Converting that to millimetres per day is where the factor of 86400 comes in, and forgetting it is the most common precipitation bug.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "What difference does kelvin versus degrees Celsius make?",
            options: [
              "None to an anomaly, 273 to an absolute value",
              "273 to an anomaly and none to an absolute value, which is the reverse of the usual intuition",
              "A factor of about 1.8, the same as the conversion between Celsius and Fahrenheit",
              "None at all, since both scales use the same size of degree and the same zero point",
            ],
            correctIndex: 0,
            explanation:
              "The two scales share a degree size, so a difference is unchanged while a level is offset by the freezing point of water.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "Which calendars does lesson 9 warn that climate models use?",
            options: [
              "360-day and no-leap calendars, as well as the real one",
              "The Julian calendar for runs before 1900 and the Gregorian calendar afterwards",
              "A calendar of 365.25 days, with the quarter day distributed evenly across all months",
              "A calendar defined per experiment, so that every CMIP6 run uses a different one",
            ],
            correctIndex: 0,
            explanation:
              "They simplify a model's bookkeeping, and averaging a 360-day model against a real-calendar observation quietly misaligns the seasons.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "You plot a global field and the Pacific appears to be cut in half. What is the likely cause?",
            options: [
              "The file uses a different longitude convention",
              "The file uses a 360-day calendar, which shifts the dateline by several degrees",
              "The file has missing values over the ocean that have been plotted as zero",
              "The file has been area weighted, which distorts the appearance near the equator",
            ],
            correctIndex: 0,
            explanation:
              "Some files run longitude from 0 to 360 and some from -180 to 180, and the plot is telling you which one you opened.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "What happens if you average a field without masking its fill values?",
            options: [
              "The flag value is averaged in as though it were data",
              "The averaging routine raises an error and refuses to produce a result at all",
              "The fill values are ignored automatically by every standard analysis library",
              "The result is unaffected, because fill values are stored outside the data array",
            ],
            correctIndex: 0,
            explanation:
              "Land in an ocean file, or an unmeasured box, is usually flagged with a large value that will destroy a mean if it is read as a number.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "Why does lesson 9 insist you record the dataset version?",
            options: [
              "A result that cannot name its version cannot be reproduced",
              "Because older versions are deleted from the archive once a new one is released",
              "Because the licence terms change between versions of most climate datasets",
              "Because only the latest version carries CF-compliant metadata for its variables",
            ],
            correctIndex: 0,
            explanation:
              "GISTEMP version 4 is not version 3, HadCRUT5 is not HadCRUT4, and ERA5 is not ERA-Interim.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "Why must you weight before averaging over a latitude and longitude grid?",
            options: [
              "Cells shrink towards the poles",
              "Cells at high latitude contain more observations and so deserve greater influence",
              "Cells over the ocean are larger than cells over land in most model grids",
              "Cells are stored in a different order at high latitude, so the mean is otherwise misordered",
            ],
            correctIndex: 0,
            explanation:
              "As xarray's worked example puts it, for a rectangular grid the cosine of the latitude is proportional to the grid cell area.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "In xarray's demonstration, how does the weighted global mean temperature compare with the unweighted one?",
            options: [
              "The weighted mean is higher",
              "The weighted mean is lower, because polar cells are given greater influence once corrected",
              "The two are identical to within rounding error, which is why weighting is often skipped",
              "The weighted mean is higher in winter and lower in summer, averaging out over a year",
            ],
            correctIndex: 0,
            explanation:
              "An unweighted mean over-counts the small polar cells, and cold values given too much influence pull the average down.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "How does lesson 9 characterise an unweighted global mean?",
            options: [
              "An answer to a different question",
              "A slightly less precise version of the weighted mean, acceptable for exploratory work",
              "An error that most analysis libraries detect and correct automatically before returning a value",
              "A valid alternative, provided the grid is finer than about one degree",
            ],
            correctIndex: 0,
            explanation:
              "Not a worse answer to the right question, which is why the distinction is worth making sharply.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "Which of these is one of the CMIP6 controlled vocabulary files named in lesson 9?",
            options: [
              "CMIP6_experiment_id.json",
              "CMIP6_uncertainty_range.json, which lists the permitted confidence intervals for each variable",
              "CMIP6_baseline_period.json, which fixes the reference period every model must report against",
              "CMIP6_bias_correction.json, which records which correction method was applied to each file",
            ],
            correctIndex: 0,
            explanation:
              "The others named are the source, frequency, table and institution vocabularies, and a value outside them is not CMIP6.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "What is a controlled vocabulary, in the CMIP6 sense?",
            options: [
              "The published list of permitted values for a metadata field",
              "A glossary of technical terms maintained alongside the coursebook for new users",
              "The set of variable names a model is required to output for a given experiment",
              "A restriction on who may publish data to the archive, enforced by the federation",
            ],
            correctIndex: 0,
            explanation:
              "It is what makes a CMIP6 file machine-checkable, because a value not in the vocabulary is not valid CMIP6.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "Which of these is one of lesson 9's six questions to ask a file before plotting it?",
            options: [
              "What is the calendar",
              "Which journal first published a figure using this dataset",
              "How many citations the dataset has accumulated since release",
              "Whether the dataset agrees with the current multi-model mean",
            ],
            correctIndex: 0,
            explanation:
              "The six are the variable, the units, the calendar, the grid and longitude convention, the missing-value flag, and the version.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "A model file uses a 360-day calendar and you average it against a real-calendar observational record. What goes wrong?",
            options: [
              "The seasons quietly misalign",
              "The averaging fails outright, because the two series have different numbers of points",
              "The units become inconsistent, since a 360-day year implies a different time unit",
              "The anomaly baseline shifts, adding a constant offset to the whole series",
            ],
            correctIndex: 0,
            explanation:
              "Nothing raises an error, which is exactly why the calendar attribute is one of the six things to check before you plot.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "Who maintains netCDF, according to lesson 9?",
            options: [
              "The Unidata Program Center",
              "The World Climate Research Programme, alongside the CMIP controlled vocabularies",
              "ECMWF, which also produces the ERA5 reanalysis distributed in that format",
              "The Creative Commons organisation, under the same licence as the coursebook",
            ],
            correctIndex: 0,
            explanation:
              "Unidata is part of NSF NCAR and supports the programming interfaces for the format in many languages.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "What does lesson 9 mean by calling netCDF machine-independent?",
            options: [
              "It can be read by computers that store numbers differently",
              "It can be opened without any software, because it is stored as human-readable text",
              "It runs identically on any operating system, because it embeds its own reader",
              "It can be processed without loading the whole file into memory at once",
            ],
            correctIndex: 0,
            explanation:
              "Unidata lists that alongside self-describing, scalable, appendable, sharable and archivable as the format's defining features.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "Which claim about the three long surface temperature records does lesson 8 support?",
            options: [
              "They are built differently on purpose",
              "They are built identically, so that any difference between them signals a processing error",
              "They are built from disjoint station networks, which makes their agreement strong evidence",
              "They are built by a single consortium and released together on a common schedule",
            ],
            correctIndex: 0,
            explanation:
              "Different construction is what makes agreement between them mean something, though overlapping input data limits how much.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "You are told a temperature anomaly without a reference period. What does lesson 8 imply you should do?",
            options: [
              "Find the baseline before interpreting it",
              "Assume the pre-industrial baseline, which is the convention in most published work",
              "Assume the current WMO standard normal, which is the default for operational products",
              "Treat the number as wrong, since a complete anomaly always carries its own baseline",
            ],
            correctIndex: 0,
            explanation:
              "GISTEMP and HadCRUT5 use different reference periods, so the same warming reads as different numbers on the two.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "What kind of object is a CMIP6 file, in the family taxonomy?",
            options: [
              "Model output, never a measurement",
              "A reanalysis, because it assimilates the observed forcings applied to the run",
              "An observation, because the historical experiment is driven by observed conditions",
              "A proxy record, because it reconstructs the climate rather than measuring it",
            ],
            correctIndex: 0,
            explanation:
              "That holds even for the historical experiment, which is driven with observed forcings but measures nothing.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "Which of these correctly names a dataset and its family?",
            options: [
              "ERA5, reanalysis",
              "GISTEMP, reanalysis, since it fills gaps by interpolation between stations",
              "CMIP6, observation, since its historical runs use the observed forcings",
              "SSP concentration pathways, model output, since they are produced by carbon cycle models",
            ],
            correctIndex: 0,
            explanation:
              "GISTEMP is observational, CMIP6 is model output, and the SSP concentration pathways are scenario inputs.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "What does lesson 9 say is the commonest beginner error with a self-describing file?",
            options: [
              "Not asking it what it holds",
              "Opening it with a library that does not support the version the file was written in",
              "Loading the entire file into memory when only a small subset was needed",
              "Writing to it in place rather than producing a new file for derived results",
            ],
            correctIndex: 0,
            explanation:
              "The file will tell you the variable, the units, the calendar and the grid if you ask, and the six questions are how you ask.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "Why does lesson 8 say you should name the assumption when reporting a scenario result?",
            options: [
              "Because the result is a consequence of that assumption",
              "Because the licence covering the scenario dataset requires the pathway to be cited",
              "Because scenarios are revised between CMIP phases and the older names are ambiguous",
              "Because assessments will not accept a result whose scenario is not stated",
            ],
            correctIndex: 0,
            explanation:
              "A scenario run answers what follows from a chosen input, and Section 6 develops why dropping the input turns a conditional into a forecast.",
            sourceLessonSlug: "the-dataset-families",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Anomalies, baselines, and trends
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "anomalies-and-baselines",
      title: "10 · Anomalies, baselines, and why a warming number is incomplete",
      section: "Section 5 · Anomalies, baselines, and trends",
      body: `Climate data is almost always published as an anomaly, a difference from a reference period, rather than as an absolute value. The reason is not presentational. It is that the anomaly is the better-measured quantity.

**Why the difference is easier than the value.** Temperature departures from normal are correlated over hundreds of kilometres, while absolute temperature is not: two stations a valley apart can differ by degrees in absolute terms while moving up and down together almost exactly. NASA's GISTEMP therefore computes regional and global means from station anomalies and warns that "finding absolute regional means encounters significant difficulties that create large uncertainties" (GISTEMP Team, n.d.).

**Trends do not care about the baseline. Levels do.** The FAQ makes the first half explicit: "trends do not depend on the choice of the base period: If the absolute temperature at a specific location is 2 degrees higher than a year ago, so is the corresponding temperature anomaly, no matter what base period is selected" (GISTEMP Team, n.d.). The second half is the part people miss. Shifting the reference period slides the whole curve up or down, so the number you read off the y-axis for a given year depends entirely on what it is measured from.

**Which is why the baselines in use are not the same.** GISTEMP reports against 1951 to 1980. HadCRUT5 reports against 1961 to 1990 (Met Office, n.d.). The World Meteorological Organization's rolling standard normal covers "1 January 1991 to 31 December 2020", while it keeps 1961 to 1990 as the fixed reference for long-term climate-change assessment (WMO, n.d.). Figures quoted against a pre-industrial baseline use something earlier again, and this course does not print the years for that convention because it could not reach the assessment body that defines it. A statement of the form "temperatures are 1.2 degrees above" is therefore not a complete statement, and it is a fair question, not a hostile one, to ask above what.

**The model version of the same problem.** Models have absolute biases: a model's own global mean temperature may be a degree or two away from the observed one without that saying anything much about the model's response to forcing. So model projections are almost always expressed as anomalies relative to the model's own baseline period, and a figure that plotted a model's absolute temperature against a thermometer record would be comparing the one thing the two objects are least comparable on. Section 3's table is the reason: a simulation and a measurement are different kinds of object, and anomalies are the transformation that makes them comparable at all.

**A working discipline.** Whenever you quote a climate number, quote its reference period in the same breath. Whenever you read one that lacks a reference period, treat the number as incomplete rather than as wrong, and go and find the baseline before you argue about it. Whenever you combine two datasets in one figure, re-baseline them both to a common period first and say in the caption which period that is.

:::reveal Why does climate data get published as an anomaly rather than an absolute temperature? ||| Because departures from normal are spatially correlated over long distances while absolute values are not, so the anomaly is far better constrained by a sparse network, and absolute regional means carry large uncertainties.

:::reveal Which is affected by a change of baseline: the trend, or the value you read off the y-axis? ||| The value on the y-axis. Shifting the reference period slides the whole curve up or down, while the slope of the warming is unchanged.

## Vocabulary
- **Anomaly**: a value expressed as a difference from a reference period rather than in absolute terms.
- **Baseline or reference period**: the span of years an anomaly is measured from, without which an anomaly is an incomplete statement.
- **Re-baselining**: shifting a series onto a different reference period so that two datasets can be plotted together honestly.
- **Absolute bias**: the offset between a model's own mean climate and the observed one, which is why model output is compared as anomalies.

## Sources
- GISTEMP Team. (n.d.). *GISS surface temperature analysis (GISTEMP), version 4, FAQ*. NASA Goddard Institute for Space Studies. https://data.giss.nasa.gov/gistemp/faq/
- Met Office. (n.d.). *HadCRUT5*. Met Office Hadley Centre observations datasets. https://www.metoffice.gov.uk/hadobs/hadcrut5/
- World Meteorological Organization. (n.d.). *WMO climatological normals*. https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/climate-services/wmo-climatological-normals`,
    },
    {
      slug: "trends-and-the-chosen-start-date",
      title: "11 · Trends, variability, and the chosen start date",
      section: "Section 5 · Anomalies, baselines, and trends",
      body: `A climate record is a forced signal with a large amount of internal variability sitting on top of it. Over a long enough window the signal dominates. Over a short enough window the variability does, and any conclusion you draw is a conclusion about the noise.

**Where the noise comes from.** Mostly from the climate system rearranging heat rather than gaining or losing it. The El Nino Southern Oscillation is the loudest such rearrangement on the annual to decadal scale, and it lifts or lowers the global mean surface temperature for a year or two at a time without any change in forcing. A year that begins in a strong El Nino is therefore a high starting point, and a trend measured from a high starting point is a shallow trend. This course does not print a figure for how large that shift is, because it could not retrieve one from a primary source in this pass, and an unsourced number in a lesson about statistical care would be the wrong kind of joke.

**The statistical trap, named in print.** Rahmstorf, Foster and Cahill examined the claim of a warming slowdown in the early 2000s and pointed out that the interval used to demonstrate it had not been drawn at random. It was chosen out of many possible intervals precisely because its trend was low, which invalidates a significance test applied to it as though it had been picked in advance, and their Monte Carlo analysis found an interval that flat to be unremarkable in a record with a constant trend plus ordinary variability. Their second target was the practice of fitting broken trend lines, which adds degrees of freedom that a naive comparison does not account for (Rahmstorf, Foster and Cahill, 2017).

**This is not a partisan tool.** The same objection applies to a start date chosen because it makes warming look faster. The rule is about method, not about direction: you fix the interval before you look at the trend, or you accept that your significance test means nothing.

**How long is long enough.** There is no universal number, because it depends on the variable, the region and the size of the variability relative to the signal. Global mean surface temperature is one of the best cases and still needs several decades. A regional precipitation trend may need much longer, and Section 6 gives the formal reason.

**Models and observations disagree in places, and that is a finding rather than an embarrassment.** Remote Sensing Systems states plainly of the satellite tropospheric record that "the troposphere has **not** warmed quite as fast as most climate models predict", and lists four candidate explanations: errors in model physics, errors in the model inputs, errors in the observations, and the models and the real world simply having drawn different sequences of internal variability (RSS, n.d.-b). The last of those is the one this lesson exists to make available to you. Two records can differ because one of them had an El Nino in a year the other did not.

**A checklist for any trend you are shown.** Over what interval. Chosen when, and why that interval. From which dataset, on which baseline. With what uncertainty. And is the quantity being compared a like-for-like one, or has somebody put an observation and a simulation on the same axis without saying so.

:::reveal Why does starting a temperature trend in a strong El Nino year make the trend look shallow? ||| Because a strong El Nino lifts global mean temperature without any change in forcing, so the record begins from an unusually high point and the fitted slope over the following years is reduced.

:::reveal What is the statistical objection Rahmstorf, Foster and Cahill make to the early-2000s slowdown claim? ||| That the interval was selected out of many possible intervals because its trend was low, so a significance test treating it as though it had been chosen in advance is invalid, and their simulations found such a flat interval unremarkable given ordinary variability.

## Vocabulary
- **Internal variability**: fluctuations produced by the climate system rearranging heat internally, rather than by any change in forcing.
- **El Nino Southern Oscillation**: the largest such rearrangement on annual to decadal scales, able to lift or lower the global mean for a year or two with no change in forcing.
- **Selection effect**: the error of choosing an interval because of the result it gives and then testing that result as though the interval had been chosen in advance.
- **Broken trend**: a fit that allows the slope to change at a point, which adds degrees of freedom a naive significance comparison ignores.

## Sources
- Rahmstorf, S., Foster, G., and Cahill, N. (2017). Global temperature evolution: Recent trends and some pitfalls. *Environmental Research Letters, 12*(5), 054001. https://doi.org/10.1088/1748-9326/aa6825
- Remote Sensing Systems. (n.d.-b). *Climate analysis*. https://www.remss.com/research/climate/`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Anomalies, baselines, and trends",
      section: "Section 5 · Anomalies, baselines, and trends",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does lesson 10 say a working discipline for climate numbers looks like?",
            options: [
              "Quote the reference period alongside the number",
              "Quote the number only after checking it against a second independent dataset",
              "Quote the number to no more than two significant figures to avoid false precision",
              "Quote the institution that produced it so a reader can judge the method",
            ],
            correctIndex: 0,
            explanation:
              "And when you read one that lacks a reference period, treat it as incomplete rather than as wrong, then find the baseline before arguing about it.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "Why is climate data usually published as an anomaly rather than an absolute value?",
            options: [
              "The anomaly is the better-measured quantity",
              "Because absolute values are considered proprietary by the agencies that collect them",
              "Because international agreements require climate reporting in relative terms",
              "Because absolute values change with the units chosen while anomalies do not",
            ],
            correctIndex: 0,
            explanation:
              "The reason is not presentational: departures from normal are far better constrained by a sparse network than absolute values are.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "What property of temperature anomalies makes them easier to estimate than absolute temperatures?",
            options: [
              "They are correlated over hundreds of kilometres",
              "They are measured by a separate and more accurate class of instrument",
              "They are recorded more frequently, giving a larger sample at each location",
              "They are unaffected by station moves, so no homogenisation is required",
            ],
            correctIndex: 0,
            explanation:
              "Two stations a valley apart can differ by degrees in absolute terms while moving up and down together almost exactly.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "What does the GISTEMP FAQ warn about absolute regional means?",
            options: [
              "They encounter difficulties that create large uncertainties",
              "They cannot be computed at all without a climate model to fill the unmeasured regions",
              "They are only valid for regions with at least one station per grid box in every year",
              "They must be recomputed each time the base period is changed, unlike anomalies",
            ],
            correctIndex: 0,
            explanation:
              "That is why GISTEMP computes regional and global means from station anomalies rather than from absolute values.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "What does the GISTEMP FAQ say about trends and the choice of base period?",
            options: [
              "Trends do not depend on it",
              "Trends shift by an amount equal to the difference between the two base period means",
              "Trends can only be compared between datasets that share an identical base period",
              "Trends become steeper when a more recent base period is chosen, and shallower otherwise",
            ],
            correctIndex: 0,
            explanation:
              "If the absolute temperature is 2 degrees higher than a year ago, so is the anomaly, whatever base period was chosen.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "What does shifting the reference period do to a temperature curve?",
            options: [
              "Slides the whole curve up or down",
              "Changes its slope, which is why baselines must be standardised before trends are compared",
              "Changes the year-to-year variability, since the reference period is subtracted year by year",
              "Has no effect at all, since anomalies are independent of the reference period entirely",
            ],
            correctIndex: 0,
            explanation:
              "The trend is unchanged but the value you read off the y-axis for a given year depends entirely on what it is measured from.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "Why does lesson 10 call \"temperatures are 1.2 degrees above\" an incomplete statement?",
            options: [
              "It does not say above what",
              "It does not say which region, and a global figure differs from a regional one",
              "It does not say whether the figure comes from an observation or from a model run",
              "It does not give the uncertainty, without which the number cannot be interpreted",
            ],
            correctIndex: 0,
            explanation:
              "Different datasets use different reference periods, so asking above what is a fair question rather than a hostile one.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "Which reference period does HadCRUT5 report against?",
            options: [
              "1961 to 1990",
              "1951 to 1980, matching NASA's surface temperature analysis for easier comparison",
              "1991 to 2020, matching the current WMO rolling standard normal",
              "1850 to 1900, matching the period used for pre-industrial comparisons in policy",
            ],
            correctIndex: 0,
            explanation:
              "GISTEMP uses 1951 to 1980, and the difference is exactly why two graphs of the same warming can sit at different heights.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "What is the WMO's current rolling standard normal period?",
            options: [
              "1991 to 2020",
              "1961 to 1990, which is also retained as the fixed long-term reference",
              "1981 to 2010, which has not yet been superseded by a later period",
              "1901 to 2000, covering the twentieth century as a single reference",
            ],
            correctIndex: 0,
            explanation:
              "The rolling normal moves forward to the most recent 30-year period ending in a year ending in zero, while 1961 to 1990 is kept fixed.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "Why are model projections expressed as anomalies relative to the model's own baseline?",
            options: [
              "Models carry absolute biases in their own mean climate",
              "Because models produce only differences and never absolute values in the first place",
              "Because the CMIP protocol forbids the publication of absolute model temperatures",
              "Because absolute model output cannot be stored at the precision the archive requires",
            ],
            correctIndex: 0,
            explanation:
              "A model's global mean may sit a degree or two from the observed one without that saying much about its response to forcing.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "Which comparison does lesson 10 say you should refuse?",
            options: [
              "A model's absolute temperature against a thermometer record",
              "A model's anomaly against an observed anomaly on a common baseline",
              "Two observational datasets re-baselined onto the same reference period",
              "Two members of the same model's ensemble plotted against each other",
            ],
            correctIndex: 0,
            explanation:
              "Absolute value is the one thing a simulation and a measurement are least comparable on, which is why anomalies exist as a transformation.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "What should you do before plotting two datasets on the same figure?",
            options: [
              "Re-baseline both onto a common period and say which",
              "Convert both to absolute values, since anomalies from different sources cannot be combined",
              "Interpolate both onto the finer of the two grids so that the cells match exactly",
              "Apply a bias correction to whichever of the two differs most from the multi-model mean",
            ],
            correctIndex: 0,
            explanation:
              "Otherwise the vertical offset between the two lines is an artefact of their reference periods rather than a real difference.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "What is re-baselining?",
            options: [
              "Shifting a series onto a different reference period",
              "Recomputing a series from raw station data using a newer homogenisation method",
              "Correcting a model's output so that its absolute values match observations",
              "Extending a reference period forward as new years of data become available",
            ],
            correctIndex: 0,
            explanation:
              "It is the operation that makes two datasets on different baselines honestly plottable together.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "What is a model's absolute bias, in the sense lesson 10 uses?",
            options: [
              "The offset between its own mean climate and the observed one",
              "The systematic error introduced by its numerical time-stepping scheme",
              "The difference between its projection and the multi-model mean of the ensemble",
              "The amount by which its trend departs from the observed trend over the same period",
            ],
            correctIndex: 0,
            explanation:
              "It is the reason model output is compared as anomalies, since a model can have the right response and the wrong absolute level.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "What working discipline does lesson 10 recommend for quoting a climate number?",
            options: [
              "Quote its reference period in the same breath",
              "Quote the number to at most two significant figures, since more is spurious precision",
              "Quote the institution that published it, since methods differ between institutions",
              "Quote the trend rather than the level, since only trends are baseline independent",
            ],
            correctIndex: 0,
            explanation:
              "And treat a number that lacks one as incomplete rather than as wrong, then go and find the baseline before arguing about it.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "What sits on top of the forced signal in a climate record?",
            options: [
              "Internal variability",
              "Instrument noise, which is the dominant source of scatter in the global mean series",
              "Scenario uncertainty, which appears in the observed record as well as in projections",
              "Model uncertainty, which is present in an observational record as much as in a simulation",
            ],
            correctIndex: 0,
            explanation:
              "Over a long window the forced signal dominates; over a short one the variability does, and any conclusion is a conclusion about the noise.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "Where does most of the year-to-year noise in a global temperature record come from?",
            options: [
              "The climate system rearranging heat rather than gaining or losing it",
              "Random measurement error in the individual thermometers making up the network",
              "Changes in the number of reporting stations from one year to the next",
              "Revisions to the homogenisation applied when each new version is published",
            ],
            correctIndex: 0,
            explanation:
              "The El Nino Southern Oscillation is the loudest such rearrangement on annual to decadal scales.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "Why does lesson 11 decline to print a figure for how much the El Nino Southern Oscillation shifts the global mean?",
            options: [
              "No primary source for it could be retrieved",
              "Because the figure varies so much between datasets that no single value is meaningful",
              "Because the shift is too small to matter for any trend computed over a decade or more",
              "Because the figure is disputed between the groups that produce the temperature records",
            ],
            correctIndex: 0,
            explanation:
              "An unsourced number in a lesson about statistical care would undercut the lesson, so the mechanism is taught and the magnitude is left to a source that can be checked.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "What was the statistical objection Rahmstorf, Foster and Cahill raised about the early-2000s slowdown?",
            options: [
              "The interval was chosen because its trend was low",
              "The interval was too long, so it averaged over two separate regimes of the climate system",
              "The interval used a dataset that had since been superseded by a newer version",
              "The interval was measured from a reanalysis rather than from observations",
            ],
            correctIndex: 0,
            explanation:
              "A significance test applied to an interval selected for its result is invalid, and their Monte Carlo analysis found such a flat interval unremarkable.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "What was the second target of Rahmstorf, Foster and Cahill's critique?",
            options: [
              "Fitting broken trend lines",
              "Using annual rather than monthly data, which discards most of the available information",
              "Comparing surface records against satellite records without adjusting for the different layers",
              "Reporting a trend without an uncertainty interval attached to it",
            ],
            correctIndex: 0,
            explanation:
              "A broken fit adds degrees of freedom that a naive comparison does not account for, which inflates the apparent significance of a change in slope.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "Does the objection to a chosen start date apply only to claims that warming has slowed?",
            options: [
              "No, the rule is about method rather than direction",
              "Yes, because only a low trend can be produced by selecting an interval after the fact",
              "Yes, because accelerating trends are tested by a different statistical procedure",
              "No, but it applies with much less force to claims that warming has accelerated",
            ],
            correctIndex: 0,
            explanation:
              "A start date chosen because it makes warming look faster fails the same test, and lesson 11 says so explicitly.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "How does lesson 11 answer the question of how long a trend window needs to be?",
            options: [
              "It depends on the variable, the region and the size of the variability",
              "Exactly thirty years, matching the WMO climatological standard normal in every case",
              "At least a century, since shorter periods are never statistically meaningful",
              "Ten years, provided the record is taken from a homogenised observational dataset",
            ],
            correctIndex: 0,
            explanation:
              "Global mean surface temperature is one of the best cases and still needs several decades; a regional precipitation trend may need much longer.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "What does RSS state about the rate at which the troposphere has warmed relative to model expectation?",
            options: [
              "Not quite as fast as most climate models predict",
              "Faster than every model in the current generation of the intercomparison",
              "At exactly the rate the multi-model mean gives, within the stated uncertainty",
              "In the opposite direction to the models, which is the central unresolved discrepancy",
            ],
            correctIndex: 0,
            explanation:
              "RSS lists four candidate explanations for the difference rather than asserting one, which is what an honest discrepancy statement looks like.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "Which of the four explanations RSS offers for the model and observation difference does lesson 11 highlight?",
            options: [
              "The two drew different sequences of internal variability",
              "The satellite instrument has a calibration error that has not yet been corrected",
              "The models were run under a scenario that did not match the observed forcings",
              "The comparison was made over a period too short for any conclusion to be drawn",
            ],
            correctIndex: 0,
            explanation:
              "The others are errors in model physics, errors in model inputs and errors in the observations, and the variability explanation is the one this lesson makes available.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "What does lesson 11 say about a model and the real world disagreeing over a period?",
            options: [
              "It is a finding rather than an embarrassment",
              "It always indicates an error in the model that must be corrected before the run is used",
              "It always indicates an error in the observations, since the physics is well established",
              "It cannot happen if the model is driven with the observed forcings for that period",
            ],
            correctIndex: 0,
            explanation:
              "Two records can differ because one had an El Nino in a year the other did not, which is a statement about variability rather than about skill.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "Which item is on lesson 11's checklist for any trend you are shown?",
            options: [
              "When the interval was chosen, and why",
              "How many peer reviewers assessed the paper the trend was published in",
              "Whether the trend was computed with a proprietary or an open-source tool",
              "Whether the analyst has previously published on the same dataset",
            ],
            correctIndex: 0,
            explanation:
              "The rest of the checklist is the interval, the dataset and baseline, the uncertainty, and whether the comparison is like for like.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "What is a selection effect, in the sense lesson 11 uses it?",
            options: [
              "Choosing an interval for its result then testing that result as if it were chosen in advance",
              "Choosing a dataset because it has the best spatial coverage for the region of interest",
              "Choosing to publish only results that reach a conventional significance threshold",
              "Choosing which stations to include in a network on the basis of their record length",
            ],
            correctIndex: 0,
            explanation:
              "That is the error Rahmstorf, Foster and Cahill identify, and it is why you fix the interval before you look at the trend.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "What is a broken trend?",
            options: [
              "A fit that allows the slope to change at a point",
              "A trend computed over a record with a gap in the middle of the period",
              "A trend whose sign reverses when a different dataset is substituted",
              "A trend that fails a significance test at the conventional threshold",
            ],
            correctIndex: 0,
            explanation:
              "The extra freedom it buys has to be paid for in the significance test, and Rahmstorf and colleagues note that a proper test removes the apparent significance.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "Why does a trend starting in a strong El Nino year come out shallow?",
            options: [
              "The record starts from an unusually high point",
              "The El Nino suppresses warming for several years afterwards through ocean heat uptake",
              "The El Nino introduces a discontinuity that breaks the linear fit at that point",
              "The El Nino is removed by homogenisation, leaving a gap at the start of the record",
            ],
            correctIndex: 0,
            explanation:
              "A strong El Nino lifts the global mean without any change in forcing, so beginning there raises the first point and reduces the fitted slope over what follows.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "Which of these is a like-for-like comparison problem lesson 11 tells you to check for?",
            options: [
              "An observation and a simulation on the same axis with no label",
              "Two observational datasets with the same reference period and the same coverage",
              "Two members of a single model's ensemble over the same period",
              "A trend and its uncertainty interval computed from the same series",
            ],
            correctIndex: 0,
            explanation:
              "It is the same failure Section 3's table exists to prevent, applied to the specific case of a trend figure.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "Lesson 11 says a regional precipitation trend may need a longer window than global temperature. Why?",
            options: [
              "Its variability is larger relative to the signal",
              "Precipitation gauges are less accurate than thermometers by roughly an order of magnitude",
              "Precipitation records began later, so fewer years are available for any window",
              "Precipitation is a parameterised variable in models and so cannot be trended at all",
            ],
            correctIndex: 0,
            explanation:
              "How long is long enough depends on the size of the variability relative to the signal, and Section 6 gives the formal decomposition.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "What does lesson 11 say happens when you draw a conclusion from too short a window?",
            options: [
              "You draw a conclusion about the noise",
              "You draw a conclusion that is correct but with a wider confidence interval than usual",
              "You draw a conclusion that applies only to the region the record covers",
              "You draw no conclusion, because standard software refuses to fit a short trend",
            ],
            correctIndex: 0,
            explanation:
              "Over a short enough window the internal variability dominates the forced signal, so the fitted slope is describing the fluctuation.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "Which statement about anomalies and levels is correct?",
            options: [
              "The trend is baseline independent, the level is not",
              "Both the trend and the level are baseline independent, which is why anomalies are used",
              "The level is baseline independent, the trend is not, which is why baselines are standardised",
              "Neither is baseline independent, so all comparisons require a common reference period",
            ],
            correctIndex: 0,
            explanation:
              "That asymmetry is the whole content of lesson 10, and it is what makes a warming figure without its baseline incomplete.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "Two published figures show the same warming but the curves sit at different heights. What is the most likely reason?",
            options: [
              "Different reference periods",
              "Different homogenisation methods applied to the same underlying stations",
              "Different vertical scales, one in kelvin and the other in degrees Celsius",
              "Different trend fitting procedures applied to the same series",
            ],
            correctIndex: 0,
            explanation:
              "Shifting the reference period slides the whole curve while leaving its slope untouched, so height differs and shape does not.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "Why does lesson 10 say the choice to use anomalies is not merely presentational?",
            options: [
              "The anomaly is genuinely better constrained by a sparse network",
              "Because publication standards in the field require anomalies rather than absolute values",
              "Because absolute values would reveal the identity of individual reporting stations",
              "Because anomalies compress better and so are cheaper to distribute at global scale",
            ],
            correctIndex: 0,
            explanation:
              "Departures from normal are spatially correlated over long distances while absolute values are not, which is a fact about the atmosphere.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "What is the first item on lesson 11's trend checklist?",
            options: [
              "Over what interval",
              "Which software package produced the fit and at what numerical precision",
              "Whether the result has been replicated by an independent group",
              "Whether the underlying dataset is available for download",
            ],
            correctIndex: 0,
            explanation:
              "Followed by when the interval was chosen and why, then the dataset and baseline, the uncertainty, and whether the comparison is like for like.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "What does lesson 11 mean by calling the forced signal and internal variability separable in principle?",
            options: [
              "Over a long enough window the signal dominates the fluctuation",
              "The two can be separated in any single record by applying a standard filter",
              "The two are measured by different instruments and archived separately",
              "The two are separated by the homogenisation applied before a dataset is published",
            ],
            correctIndex: 0,
            explanation:
              "Which is why window length is the central question and why Section 6 formalises the balance between the two.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "Which is the correct order of operations when comparing two temperature datasets?",
            options: [
              "Re-baseline to a common period, then compare",
              "Compare first, then attribute any offset between them to methodological differences",
              "Convert both to absolute values, then compare, then convert back to anomalies",
              "Fit a trend to each, then subtract the trends to remove the baseline difference",
            ],
            correctIndex: 0,
            explanation:
              "An offset caused by different reference periods is an artefact, and comparing before removing it produces a difference that is not real.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "What does lesson 11 say about the direction of the selection-effect objection?",
            options: [
              "It is not a partisan tool",
              "It applies only to analyses published outside the peer-reviewed literature",
              "It applies only to intervals shorter than the thirty-year climatological normal",
              "It applies only when the dataset used has since been revised or superseded",
            ],
            correctIndex: 0,
            explanation:
              "A start date chosen to make warming look faster fails exactly the same test as one chosen to make it look slower.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "What does lesson 10 say a baseline is, in one line?",
            options: [
              "The span of years an anomaly is measured from",
              "The lowest value in the record, against which all later values are indexed",
              "The period over which a model is spun up before its output becomes usable",
              "The reference dataset a model is bias corrected against before use",
            ],
            correctIndex: 0,
            explanation:
              "Without it an anomaly is an incomplete statement, which is why the vocabulary entry names it as reference period too.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — Uncertainty, scenarios, and attribution
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "three-uncertainties-and-two-ensembles",
      title: "12 · Three uncertainties, and the two kinds of ensemble",
      section: "Section 6 · Uncertainty, scenarios, and attribution",
      body: `"Uncertainty" in climate projection is not one thing, and the three things it can mean behave so differently that treating them as one is the source of most bad arguments about how much models can be trusted.

**The decomposition.** Hawkins and Sutton separated the uncertainty in projections of regional surface air temperature into internal variability, model uncertainty, and scenario uncertainty, and asked how much each contributes at different lead times. Their result is the useful one: for the next few decades the dominant contributions come from model uncertainty and internal variability, which are the sources that further scientific work could in principle reduce (Hawkins and Sutton, 2009).

**What each one is, and when it dominates.** Internal variability is the climate system rearranging heat on its own, and it matters most at short lead times and at small spatial scales, where it can swamp the forced signal entirely. Model uncertainty is the disagreement between models about how the system responds, which comes largely from the parameterisation choices of Section 2. Scenario uncertainty is not uncertainty about the climate at all: it is uncertainty about what humans will emit, and it grows as you look further ahead, because the pathways diverge with time.

**Two ensembles, two different questions.** A multi-model ensemble such as CMIP6 varies the model and holds the experiment fixed, so its spread measures model uncertainty. A single-model initial-condition large ensemble is "a set of model simulations starting from different initial conditions but produced with a single climate model and identical external forcing" (Maher, Milinski and Ludwig, 2021), so its spread measures internal variability with everything else held constant. Reading one as though it were the other is a category error: the spread of a large ensemble is not a measure of how uncertain the science is.

**Which dominates in practice is a live question.** Analysing the CMIP6 scenario runs, Tebaldi and colleagues report that their analysis "confirms model structural differences to be the dominant source of uncertainty" across much of the field (Tebaldi et al., 2021).

**And whether to treat models as equals is contested.** The default in an intercomparison is one model, one vote. Sanderson, Wehner and Knutti argue that models sharing code and ancestry are not independent draws and build a weighting by skill and independence, while reporting that in their own tests "the influence of model weighting on projected temperature and precipitation changes is found to be moderate" (Sanderson, Wehner and Knutti, 2017). Nijsse, Cox and Williamson take the other lever, constraining the ensemble against observed warming and concluding that the highest-sensitivity models are not consistent with it (Nijsse, Cox and Williamson, 2020). Neither position is fringe, and a reader who knows both can tell which one an assessment has adopted.

:::reveal Which of the three uncertainties grows as you look further into the future, and why is it not really uncertainty about the climate? ||| Scenario uncertainty, because it is uncertainty about how much humans will emit rather than about how the physical system responds, and the emission pathways diverge more the further ahead you look.

:::reveal What does the spread of a single-model initial-condition large ensemble measure? ||| Internal variability alone, because every member uses the same model and the same forcing and differs only in its starting state.

## Vocabulary
- **Internal variability**: the component of uncertainty arising from the climate system's own fluctuations, dominant at short lead times and small scales.
- **Model uncertainty**: the disagreement between models about the response to a given forcing, arising largely from parameterisation choices.
- **Scenario uncertainty**: uncertainty about future human emissions rather than about the physical system, growing with lead time.
- **Large ensemble**: many runs of one model under identical forcing from different initial conditions, used to isolate internal variability.

## Sources
- Hawkins, E., and Sutton, R. (2009). The potential to narrow uncertainty in regional climate predictions. *Bulletin of the American Meteorological Society, 90*, 1095-1107. https://doi.org/10.1175/2009BAMS2607.1
- Maher, N., Milinski, S., and Ludwig, R. (2021). Large ensemble climate model simulations: Introduction, overview, and future prospects for utilising multiple types of large ensemble. *Earth System Dynamics, 12*, 401-418. https://doi.org/10.5194/esd-12-401-2021
- Nijsse, F. J. M. M., Cox, P. M., and Williamson, M. S. (2020). Emergent constraints on transient climate response (TCR) and equilibrium climate sensitivity (ECS) from historical warming in CMIP5 and CMIP6 models. *Earth System Dynamics, 11*, 737-750. https://doi.org/10.5194/esd-11-737-2020
- Sanderson, B. M., Wehner, M., and Knutti, R. (2017). Skill and independence weighting for multi-model assessments. *Geoscientific Model Development, 10*, 2379-2395. https://doi.org/10.5194/gmd-10-2379-2017
- Tebaldi, C., Debeire, K., Eyring, V., Fischer, E., Fyfe, J., Friedlingstein, P., et al. (2021). Climate model projections from the Scenario Model Intercomparison Project (ScenarioMIP) of CMIP6. *Earth System Dynamics, 12*, 253-293. https://doi.org/10.5194/esd-12-253-2021`,
    },
    {
      slug: "what-a-scenario-is-not",
      title: "13 · What a scenario is, and what it is not",
      section: "Section 6 · Uncertainty, scenarios, and attribution",
      body: `A scenario is an input to a climate model, not an output of one. That sentence is the whole lesson, and almost every misuse of climate projection in public consists of forgetting it.

**How the naming works.** A Representative Concentration Pathway is named for the radiative forcing it reaches in 2100, in watts per square metre. A Shared Socioeconomic Pathway is a storyline about how the world develops. CMIP6 combines them: in a label like SSP2-4.5, the first part names the socioeconomic storyline and the second names the forcing level. The published concentration set covers SSP1-1.9, SSP1-2.6, SSP2-4.5, SSP3-7.0, SSP4-3.4, SSP4-6.0, SSP5-3.4-OS, SSP5-8.5 and a low near-term-forcer variant of SSP3-7.0, and the main SSPs are more evenly spaced and reach lower 2100 forcing levels than the RCPs did (Meinshausen et al., 2020). ScenarioMIP's Tier 1, the four run by the most groups, are SSP1-2.6, SSP2-4.5, SSP3-7.0 and SSP5-8.5 (O'Neill et al., 2016; Tebaldi et al., 2021).

**No probability is attached to any of them.** Nobody has published a likelihood for SSP2-4.5. The set exists to span a range of assumptions so that the consequences of each can be computed, and treating the middle one as a central estimate is a mistake the design does not license.

**The live disagreement, with the positions named.** The argument is about whether the highest pathway, RCP8.5 and its SSP5-8.5 successor, is a reasonable reference for what happens absent new policy. Schwalm, Glendon and Duffy argue that it is, on the grounds that cumulative emissions have tracked it and that "RCP8.5 is the best match out to midcentury under current and stated policies with still highly plausible levels of CO2 emissions in 2100" (Schwalm, Glendon and Duffy, 2020a). Hausfather and Peters argue in reply that it is problematic for near-term emissions and that the routine framing of it as business as usual misleads (Hausfather and Peters, 2020); Schwalm and colleagues answered again, holding their position and arguing that what matters for driving a climate model is total atmospheric carbon dioxide rather than which sector it came from (Schwalm, Glendon and Duffy, 2020b). Carbon Brief's account adds the scenario designers' own view: van Vuuren and colleagues characterised the pathway as around the ninetieth percentile of baseline scenarios and stated that it "cannot be used as a no-climate-policy reference scenario", while Riahi has said he wishes the business as usual language had been clearer that it meant the higher end rather than the most probable outcome (Carbon Brief, 2019).

**What to do with a scenario number.** Ask which scenario. Ask whether the speaker has told you it is a scenario. And notice that "under SSP5-8.5, X happens by 2090" and "X happens by 2090" are different claims, only one of which the model actually produced.

:::reveal In the label SSP2-4.5, what does each half mean? ||| The first half names the shared socioeconomic pathway, a storyline about how the world develops, and the second names the radiative forcing level in watts per square metre reached in 2100.

:::reveal Who argues that RCP8.5 remains the best reference to midcentury, and who argues it is misleading as business as usual? ||| Schwalm, Glendon and Duffy argue it remains the best match to midcentury under current and stated policies; Hausfather and Peters argue it is problematic for near-term emissions and that the business as usual framing misleads.

## Vocabulary
- **Representative Concentration Pathway**: a scenario named for the radiative forcing in watts per square metre it reaches in 2100.
- **Shared Socioeconomic Pathway**: a storyline about population, economics, technology and governance, combined with a forcing level in CMIP6 labels.
- **Radiative forcing**: the imbalance in the Earth's energy budget imposed by a change such as added greenhouse gas, measured in watts per square metre.
- **Tier 1 scenario**: one of the four ScenarioMIP pathways most groups ran, being SSP1-2.6, SSP2-4.5, SSP3-7.0 and SSP5-8.5.

## Sources
- Carbon Brief. (2019, August 21). *Explainer: The high-emissions "RCP8.5" global warming scenario*. https://www.carbonbrief.org/explainer-the-high-emissions-rcp8-5-global-warming-scenario/
- Hausfather, Z., and Peters, G. P. (2020). RCP8.5 is a problematic scenario for near-term emissions. *Proceedings of the National Academy of Sciences, 117*(45), 27791-27792. https://doi.org/10.1073/pnas.2017124117
- Meinshausen, M., Nicholls, Z. R. J., Lewis, J., Gidden, M. J., Vogel, E., Freund, M., et al. (2020). The shared socio-economic pathway (SSP) greenhouse gas concentrations and their extensions to 2500. *Geoscientific Model Development, 13*, 3571-3605. https://doi.org/10.5194/gmd-13-3571-2020
- O'Neill, B. C., Tebaldi, C., van Vuuren, D. P., Eyring, V., Friedlingstein, P., Hurtt, G., et al. (2016). The Scenario Model Intercomparison Project (ScenarioMIP) for CMIP6. *Geoscientific Model Development, 9*, 3461-3482. https://doi.org/10.5194/gmd-9-3461-2016
- Schwalm, C. R., Glendon, S., and Duffy, P. B. (2020a). RCP8.5 tracks cumulative CO2 emissions. *Proceedings of the National Academy of Sciences, 117*(33), 19656-19657. https://doi.org/10.1073/pnas.2007117117
- Schwalm, C. R., Glendon, S., and Duffy, P. B. (2020b). Reply to Hausfather and Peters: RCP8.5 is neither problematic nor misleading. *Proceedings of the National Academy of Sciences, 117*(45), 27793-27794. https://doi.org/10.1073/pnas.2018008117
- Tebaldi, C., Debeire, K., Eyring, V., Fischer, E., Fyfe, J., Friedlingstein, P., et al. (2021). Climate model projections from the Scenario Model Intercomparison Project (ScenarioMIP) of CMIP6. *Earth System Dynamics, 12*, 253-293. https://doi.org/10.5194/esd-12-253-2021`,
    },
    {
      slug: "attribution-and-reading-a-figure",
      title: "14 · Attribution, reading a figure honestly, and where to go next",
      section: "Section 6 · Uncertainty, scenarios, and attribution",
      body: `Attribution answers two different questions that share a word. Trend attribution asks what caused an observed long-term change. Event attribution asks what warming did to a particular flood, heatwave or drought. The second is younger, harder, and where the methodological disagreement lives.

**The risk-based approach.** World Weather Attribution's published protocol runs eight steps, from deciding whether an event is worth analysing, through defining the event in space, time and variable, estimating the observed probability and trend, evaluating models, combining methods, synthesising the hazard, adding vulnerability and exposure, and communicating. Its central number is the probability ratio, the probability of the event in the current climate divided by its probability in a counterfactual climate without human influence. The protocol names its own limits: a real change in probability may not yet have emerged from the noise in the observations; local forcings such as aerosols, irrigation and surface roughness changes can matter; and heavily constrained model experiments can be biased towards finding no change (Philip et al., 2020).

**The storyline approach, and the actual disagreement.** Van Garderen, Feser and Shepherd describe the split in terms of which error each method is built to avoid: the probabilistic approach "seeks to avoid 'Type 1' errors or false alarms" by demanding that a null hypothesis of no change be rejected, while the storyline approach "seeks to avoid 'Type 2' errors or missed warnings" by starting from thermodynamic effects that are already established. The probabilistic method asks what an event reveals about climate change; the storyline method asks what known climate change tells us about the event. They argue that the two are complementary and that both should be used (van Garderen, Feser and Shepherd, 2021). This is a genuine methodological disagreement among working scientists, not a debate about whether warming is real, and you should be able to tell which method produced any attribution statement you read.

**What the physics makes easier or harder.** The US National Academies' report on the subject notes that "warming increases the likelihood of extremely hot days and nights, favors increased atmospheric moisture that may result in more frequent heavy rainfall and snowfall, and leads to evaporation that can exacerbate droughts" (National Academies of Sciences, Engineering, and Medicine, 2016). Those are thermodynamic consequences of a warmer atmosphere, and an event that is essentially a shift in the temperature distribution is the case where the chain of reasoning is shortest. The hard case is the opposite one, an event whose character depends on where the circulation happened to put a weather system, and van Garderen, Feser and Shepherd single out exactly that case as the one where models represent the dynamical conditions poorly, such as atmospheric blocking (van Garderen, Feser and Shepherd, 2021). This course could not retrieve the National Academies report's own ranking of confidence by event type, so it does not print one.

**Reading a figure honestly, as a checklist.** What kind of object is each line: observation, reanalysis, model run, or scenario projection. What is the reference period, and are all the series on the same one. What is the shaded band made of: model spread, ensemble percentiles, or observational uncertainty, because those are three different claims. Where does the x-axis start, and was that start chosen. Is a spaghetti of runs being read as a distribution of outcomes, when each strand is one simulation and no probability attaches to any of them. And has a model's absolute value been plotted against a thermometer's, which Section 5 says is the one comparison to refuse.

**Where to go next.** Open their coursebook and start at the beginning: Climate System Overview, then Ocean and Atmosphere Reanalysis, then Remote Sensing, Paleoclimate and Introduction to Climate Modeling, then the second week on ensembles, socioeconomics, extremes and machine learning. You now have the vocabulary those days assume. Do the notebooks, because none of this becomes real until you have opened a file whose calendar was wrong.

:::reveal What is a probability ratio in risk-based event attribution? ||| The probability of the event in the current climate divided by its probability in a counterfactual climate without human influence.

:::reveal Which error is the probabilistic approach built to avoid, and which is the storyline approach built to avoid? ||| The probabilistic approach is built to avoid false alarms, by demanding rejection of a null hypothesis of no change. The storyline approach is built to avoid missed warnings, by starting from thermodynamic effects that are already established.

:::reveal A figure shows a shaded band around a projection. What three different things could that band be? ||| The spread between models, the percentiles of an ensemble of runs, or the uncertainty in an observational dataset. Each is a different claim and the caption has to say which.

## Vocabulary
- **Trend attribution**: asking what caused an observed long-term change in the climate record.
- **Event attribution**: asking what human influence did to the probability or the severity of one particular extreme event.
- **Probability ratio**: the ratio of an event's probability in the current climate to its probability in a counterfactual climate without human influence.
- **Storyline approach**: attribution that starts from established thermodynamic effects and asks what they imply for a given event, built to avoid missed warnings.
- **Spaghetti plot**: a figure showing many individual runs as separate lines, where no probability attaches to any single strand.

## Sources
- National Academies of Sciences, Engineering, and Medicine. (2016). *Attribution of extreme weather events in the context of climate change*. National Academies Press. https://doi.org/10.17226/21852
- Philip, S., Kew, S., van Oldenborgh, G. J., Otto, F., Vautard, R., van der Wiel, K., et al. (2020). A protocol for probabilistic extreme event attribution analyses. *Advances in Statistical Climatology, Meteorology and Oceanography, 6*, 177-203. https://doi.org/10.5194/ascmo-6-177-2020
- van Garderen, L., Feser, F., and Shepherd, T. G. (2021). A methodology for attributing the role of climate change in extreme events: A global spectrally nudged storyline. *Natural Hazards and Earth System Sciences, 21*, 171-186. https://doi.org/10.5194/nhess-21-171-2021`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · Uncertainty, scenarios, and attribution",
      section: "Section 6 · Uncertainty, scenarios, and attribution",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does lesson 12 say makes the three uncertainties worth separating?",
            options: [
              "They behave differently with lead time and spatial scale",
              "They are measured by three different communities using three different instruments",
              "They are reported separately by convention in every assessment published so far",
              "They can each be eliminated by a different technique, given enough computer time",
            ],
            correctIndex: 0,
            explanation:
              "Collapsing them into one number loses the information that tells you whether a wide range reflects ignorance, natural fluctuation, or a choice about emissions.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "What does lesson 14 say you should be able to tell about any attribution statement you read?",
            options: [
              "Which of the two methods produced it",
              "Which journal published it and whether the analysis was peer reviewed",
              "Which model was used and at what horizontal resolution it was run",
              "Which agency funded the analysis and how quickly it was released",
            ],
            correctIndex: 0,
            explanation:
              "The probabilistic and storyline approaches are built to avoid opposite errors, so the same event can carry two honest and differently framed statements.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "Into which three sources did Hawkins and Sutton separate the uncertainty in regional climate projections?",
            options: [
              "Internal variability, model uncertainty, scenario uncertainty",
              "Measurement error, sampling error and structural error, as defined in metrology",
              "Initial conditions, boundary conditions and numerical error, the three stages of a run",
              "Observation, reanalysis and simulation, matching the object taxonomy of Section 3",
            ],
            correctIndex: 0,
            explanation:
              "Treating those three as one thing is the source of most bad arguments about how far climate models can be trusted.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "Which sources did Hawkins and Sutton find dominate over the next few decades?",
            options: [
              "Model uncertainty and internal variability",
              "Scenario uncertainty alone, since emissions diverge immediately after the present day",
              "Measurement uncertainty in the observations used to initialise the projections",
              "Numerical error in the models, which accumulates fastest in the first decades of a run",
            ],
            correctIndex: 0,
            explanation:
              "Their point is that those are the sources further scientific work could in principle reduce, which is what makes the decomposition useful.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "When and where does internal variability matter most?",
            options: [
              "At short lead times and small spatial scales",
              "At long lead times and global scale, where it accumulates over the century",
              "Uniformly across all lead times and scales, which is why it is treated as a constant",
              "Only in the tropics, where the El Nino Southern Oscillation originates",
            ],
            correctIndex: 0,
            explanation:
              "At those scales it can swamp the forced signal entirely, which is the formal version of lesson 11's warning about short windows.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "Where does model uncertainty largely come from?",
            options: [
              "Parameterisation choices",
              "Differences in the observational datasets used to evaluate each model after the run",
              "Differences in the emission pathways each modelling group chose to simulate",
              "Rounding error accumulated over the many time steps of a century-long integration",
            ],
            correctIndex: 0,
            explanation:
              "Section 2 established that: the simulated half rests on principles every group shares, and the parameterised half is where the choices live.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "Why does lesson 12 say scenario uncertainty is not uncertainty about the climate?",
            options: [
              "It is uncertainty about what humans will emit",
              "It is uncertainty about which model was used to run the scenario in question",
              "It is uncertainty about the observations used to define the scenario's starting point",
              "It is uncertainty about how the scenario should be labelled in the archive",
            ],
            correctIndex: 0,
            explanation:
              "That is why it grows with lead time: the pathways diverge more the further ahead you look, and human behaviour is not a physics question.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "What does the spread of a multi-model ensemble measure?",
            options: [
              "Model uncertainty",
              "Internal variability, since each model draws its own sequence of natural fluctuations",
              "Scenario uncertainty, since each modelling group selects a different pathway",
              "Observational uncertainty, since each model is evaluated against a different dataset",
            ],
            correctIndex: 0,
            explanation:
              "It varies the model while holding the experiment fixed, which is exactly the definition of isolating structural disagreement.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "How do Maher, Milinski and Ludwig define a single-model initial-condition large ensemble?",
            options: [
              "Simulations from different initial conditions with one model and identical forcing",
              "Simulations from one initial condition run through several models with identical forcing",
              "Simulations from one model under several different scenarios of future emissions",
              "Simulations from several models each initialised from its own preferred observational dataset",
            ],
            correctIndex: 0,
            explanation:
              "Holding the model and the forcing fixed is what lets the ensemble isolate internal variability from everything else.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "What is the category error lesson 12 warns against with ensembles?",
            options: [
              "Reading a large ensemble's spread as scientific uncertainty",
              "Reading a multi-model ensemble as a sample of possible future climates weighted by likelihood",
              "Reading a scenario ensemble as a set of runs from a single model",
              "Reading a historical ensemble as a forecast of the coming decade",
            ],
            correctIndex: 0,
            explanation:
              "A large ensemble's spread is internal variability with everything else held constant, which is a statement about the climate rather than about the state of knowledge.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "What did Tebaldi and colleagues report about the dominant source of uncertainty in the CMIP6 scenario runs?",
            options: [
              "Model structural differences",
              "Scenario differences, which exceed intermodel spread across almost every region analysed",
              "Internal variability, which dominates through to the end of the century at all scales",
              "Observational uncertainty in the historical period used to evaluate the runs",
            ],
            correctIndex: 0,
            explanation:
              "Their spatial pattern analysis found intermodel variability producing larger standard deviations than interscenario variability across most regions.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "What is the default rule for combining models in an intercomparison?",
            options: [
              "One model, one vote",
              "Weighting by resolution, with finer models counted proportionally more heavily",
              "Weighting by the number of runs each group submitted to the archive",
              "Weighting by how closely each model matches the reanalysis for the same period",
            ],
            correctIndex: 0,
            explanation:
              "Sanderson, Wehner and Knutti question that default on the ground that models sharing code and ancestry are not independent draws.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "On what two grounds does the Sanderson, Wehner and Knutti scheme weight models?",
            options: [
              "Skill and independence",
              "Resolution and vintage, so that newer and finer models count for more",
              "Institutional size and archive completeness, so that fuller submissions count for more",
              "Agreement with the ensemble mean and stability across scenarios",
            ],
            correctIndex: 0,
            explanation:
              "Skill rewards matching observations and independence penalises models that duplicate one another, and the two effects partly cancel.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "What did Sanderson, Wehner and Knutti find about how much their weighting changed projections?",
            options: [
              "The influence was moderate",
              "The influence reversed the sign of the projected change over most land regions",
              "The influence roughly doubled the projected warming by the end of the century",
              "The influence could not be measured, because no unweighted baseline was available",
            ],
            correctIndex: 0,
            explanation:
              "The compensating effect between rewarding skill and rewarding uniqueness is what keeps the change modest.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "Which lever do Nijsse, Cox and Williamson pull instead of weighting?",
            options: [
              "Constraining the ensemble against observed warming",
              "Increasing the resolution of the models before the ensemble is assembled",
              "Removing models whose ocean components share a common ancestor",
              "Averaging over more scenarios so that scenario uncertainty is reduced",
            ],
            correctIndex: 0,
            explanation:
              "That is what an emergent constraint is, and it leads them to conclude that the highest-sensitivity models are inconsistent with the observed record.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "Why does lesson 12 present the ensemble-weighting question as live rather than settled?",
            options: [
              "Neither position is fringe, and a reader should be able to tell which was adopted",
              "Because the disagreement concerns whether the greenhouse effect operates as described",
              "Because both papers were retracted after their methods were found to be circular",
              "Because assessments are legally required to remain neutral between the two approaches",
            ],
            correctIndex: 0,
            explanation:
              "Knowing both positions is what lets you read an assessment and see which choice it made about combining models.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "Which uncertainty grows fastest as the projection horizon lengthens?",
            options: [
              "Scenario uncertainty",
              "Internal variability, which accumulates over the century as fluctuations compound",
              "Observational uncertainty, since fewer measurements exist for later periods",
              "Numerical error, which grows with the number of time steps integrated",
            ],
            correctIndex: 0,
            explanation:
              "The pathways diverge with time, which is why the choice of scenario matters far more for 2100 than for 2035.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "You want to know how large a natural fluctuation could plausibly be in one model. Which ensemble do you use?",
            options: [
              "A single-model initial-condition large ensemble",
              "A multi-model ensemble, since more models give a better sample of natural variability",
              "A scenario ensemble, since scenarios span the range of possible futures",
              "A reanalysis ensemble, since only observations can bound natural variability",
            ],
            correctIndex: 0,
            explanation:
              "Identical model, identical forcing, different starting states, so the spread is internal variability alone.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "You want to know how much structural disagreement there is about a projected change. Which ensemble?",
            options: [
              "A multi-model ensemble",
              "A large ensemble of one model, since it isolates the response from the noise",
              "A single run from the model with the best hindcast skill over the historical period",
              "A reanalysis, since it constrains the model against observations at every step",
            ],
            correctIndex: 0,
            explanation:
              "Varying the model while holding the experiment fixed is the only way to see how much the answer depends on the choice of model.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "Which statement about the reducibility of the three uncertainties does lesson 12 support?",
            options: [
              "Model uncertainty and internal variability are in principle reducible by science",
              "All three are equally reducible, given enough computer time and observational effort",
              "None of the three can be reduced, which is why projections are always presented as ranges",
              "Only scenario uncertainty is reducible, by narrowing the set of pathways considered",
            ],
            correctIndex: 0,
            explanation:
              "Hawkins and Sutton frame the near-term dominance of those two as the potential to narrow uncertainty, which is the paper's title.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "What does lesson 12 say about treating the three uncertainties as one thing?",
            options: [
              "It produces most of the bad arguments about trusting models",
              "It is a reasonable simplification for anyone not running the models themselves",
              "It is required by assessment convention, which reports a single combined range",
              "It is unavoidable, because the three cannot be separated in any published output",
            ],
            correctIndex: 0,
            explanation:
              "They behave so differently with lead time and spatial scale that collapsing them loses the information that makes a projection interpretable.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "Which uncertainty would a better understanding of clouds most directly reduce?",
            options: [
              "Model uncertainty",
              "Scenario uncertainty, since cloud cover determines future emissions pathways",
              "Internal variability, since clouds generate the fluctuations in the system",
              "Observational uncertainty, since clouds obstruct satellite measurements of the surface",
            ],
            correctIndex: 0,
            explanation:
              "Cloud feedbacks dominate the spread in climate sensitivity, and that spread is disagreement between models about the response to a forcing.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "What is the relationship lesson 12 draws between its decomposition and lesson 11's advice about window length?",
            options: [
              "It is the formal reason a short window measures the noise",
              "It replaces that advice, since the decomposition applies only to projections and not to records",
              "It contradicts that advice, since internal variability turns out to be small at short lead times",
              "It is unrelated, since the decomposition concerns models and the advice concerns observations",
            ],
            correctIndex: 0,
            explanation:
              "Internal variability dominates at short lead times and small spatial scales, which is exactly why a short trend window describes the fluctuation.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "What is a scenario, in one sentence?",
            options: [
              "An input to a climate model",
              "An output of a climate model, produced once the physics has been integrated forward",
              "A forecast of emissions produced by economic models and endorsed by governments",
              "A reconstruction of past emissions used to drive the historical simulations",
            ],
            correctIndex: 0,
            explanation:
              "Almost every misuse of climate projection in public consists of forgetting that and reading the output as unconditional.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "What is a Representative Concentration Pathway named for?",
            options: [
              "The radiative forcing it reaches in 2100",
              "The concentration of carbon dioxide in parts per million it reaches in 2050",
              "The order in which the pathways were published by the modelling community",
              "The temperature rise in degrees it produces by the end of the century",
            ],
            correctIndex: 0,
            explanation:
              "The number is in watts per square metre, which is why RCP8.5 and SSP5-8.5 share a forcing level despite differing in their socioeconomic story.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "In the CMIP6 label SSP2-4.5, what does the 4.5 refer to?",
            options: [
              "The forcing level in watts per square metre in 2100",
              "The warming in degrees Celsius reached by the end of the century",
              "The version number of the socioeconomic pathway being used",
              "The number of models that ran that particular experiment",
            ],
            correctIndex: 0,
            explanation:
              "The first half names the socioeconomic storyline and the second names the forcing level, which is what makes the labels combinable.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "What is a Shared Socioeconomic Pathway?",
            options: [
              "A storyline about how the world develops",
              "A concentration pathway defined purely by its radiative forcing in 2100",
              "A ranking of emission pathways by their assessed probability of occurring",
              "An agreed policy target adopted by the parties to an international treaty",
            ],
            correctIndex: 0,
            explanation:
              "It covers population, economics, technology and governance, and CMIP6 combines it with a forcing level to name an experiment.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "Which are the four ScenarioMIP Tier 1 scenarios?",
            options: [
              "SSP1-2.6, SSP2-4.5, SSP3-7.0, SSP5-8.5",
              "SSP1-1.9, SSP1-2.6, SSP4-3.4 and SSP4-6.0, the four lowest forcing pathways available",
              "RCP2.6, RCP4.5, RCP6.0 and RCP8.5, carried over unchanged from the previous phase",
              "SSP5-8.5 alone, with the other pathways relegated to a second and optional tier",
            ],
            correctIndex: 0,
            explanation:
              "Tebaldi and colleagues name those four as the priority set, which is why they are the ones most groups ran.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "Which of these is in the published SSP concentration set described by Meinshausen and colleagues?",
            options: [
              "SSP5-3.4-OS, an overshoot pathway",
              "SSP6-9.5, the highest forcing pathway, added after the others were published",
              "SSP0-1.0, a pathway assuming emissions cease immediately in the year of publication",
              "SSP2-2.0, a pathway aligned with the lower of the two Paris Agreement targets",
            ],
            correctIndex: 0,
            explanation:
              "The set also includes SSP1-1.9, SSP1-2.6, SSP2-4.5, SSP3-7.0, SSP4-3.4, SSP4-6.0, SSP5-8.5 and a low near-term-forcer variant of SSP3-7.0.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "What probability is attached to SSP2-4.5?",
            options: [
              "None",
              "Roughly fifty percent, since it sits in the middle of the published set",
              "The probability agreed by the modelling groups that ran it, published alongside the data",
              "A probability derived from current policy commitments and updated annually",
            ],
            correctIndex: 0,
            explanation:
              "The set spans a range of assumptions so that the consequences of each can be computed, and treating the middle one as a central estimate is not licensed by the design.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "What do Schwalm, Glendon and Duffy argue about RCP8.5?",
            options: [
              "It is the best match to midcentury under current and stated policies",
              "It should be retired entirely, because cumulative emissions have fallen well below it",
              "It is a physically impossible pathway that no carbon cycle model can reproduce",
              "It is indistinguishable from RCP4.5 before 2050 and so adds nothing to an analysis",
            ],
            correctIndex: 0,
            explanation:
              "Their argument rests on cumulative emissions having tracked it, and they hold the position again in their reply.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "What do Hausfather and Peters argue about RCP8.5?",
            options: [
              "It is problematic for near-term emissions and the business as usual framing misleads",
              "It underestimates future emissions and should be replaced by a higher pathway",
              "It is the only pathway consistent with the observed record and should be used exclusively",
              "It should be reported without a socioeconomic storyline attached to it",
            ],
            correctIndex: 0,
            explanation:
              "Schwalm, Glendon and Duffy answered them in print, so both positions are on the record in the same journal.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "In their reply, what do Schwalm and colleagues say matters for driving a climate model?",
            options: [
              "Total atmospheric carbon dioxide, not which sector it came from",
              "The socioeconomic storyline attached to the pathway rather than the concentration itself",
              "The rate of emissions in the final decade of the century rather than the cumulative total",
              "The regional distribution of emissions rather than the global total",
            ],
            correctIndex: 0,
            explanation:
              "That is the specific point on which they answer the objection about fossil fuel versus land use contributions.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "How did van Vuuren and colleagues characterise RCP8.5 among baseline scenarios?",
            options: [
              "Around the ninetieth percentile",
              "As the median of the baseline scenarios available at the time it was designed",
              "As the lowest of the four pathways that could be reconciled with observed emissions",
              "As the only pathway consistent with continued expansion of coal use",
            ],
            correctIndex: 0,
            explanation:
              "They also stated that it cannot be used as a no-climate-policy reference scenario, which is the designers' own view on the question.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "What has Riahi said about the business as usual language, according to Carbon Brief's account?",
            options: [
              "He wishes it had been clearer that it meant the higher end",
              "He maintains that it was accurate and should continue to be used for RCP8.5",
              "He argues the phrase should be applied to the middle pathway instead",
              "He says the phrase was introduced by journalists rather than by the scenario designers",
            ],
            correctIndex: 0,
            explanation:
              "Rather than the most probable outcome, which is the distinction the whole disagreement turns on.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "What are the three questions lesson 13 tells you to ask about a scenario number?",
            options: [
              "Which scenario, was it named, and is it being read as a forecast",
              "Which model, which resolution, and which version of the archive it came from",
              "Which institution ran it, which journal published it, and who funded the work",
              "Which region, which season, and which reference period it is measured against",
            ],
            correctIndex: 0,
            explanation:
              "The last of those is the one that matters most, because a conditional claim and an unconditional claim look identical once the condition is dropped.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "What is radiative forcing?",
            options: [
              "The energy budget imbalance imposed by a change such as added greenhouse gas",
              "The rate at which the surface warms in response to a doubling of carbon dioxide",
              "The total energy the Earth receives from the sun in a year, averaged over the surface",
              "The heat taken up by the ocean each year, expressed per unit of surface area",
            ],
            correctIndex: 0,
            explanation:
              "It is measured in watts per square metre, which is why the number in a pathway's name is in those units.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "How do the main SSPs compare with the earlier RCPs, according to Meinshausen and colleagues?",
            options: [
              "More evenly spaced and reaching lower 2100 forcing levels",
              "Less evenly spaced and reaching higher forcing levels, to widen the range explored",
              "Identical in forcing but differing only in the socioeconomic storyline attached",
              "Fewer in number, with the low end of the range removed as implausible",
            ],
            correctIndex: 0,
            explanation:
              "The addition of SSP1-1.9 at the low end is part of that, and it is why the SSP set spans a wider policy range than the RCP set did.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "Someone tells you that a study shows a given impact by 2090. What does lesson 13 say to check first?",
            options: [
              "Whether a scenario was assumed and which one",
              "Whether the study was published in a journal with a high impact factor",
              "Whether the model used has the finest available resolution for that region",
              "Whether the impact was computed from a reanalysis or from station observations",
            ],
            correctIndex: 0,
            explanation:
              "Under a named pathway the claim is conditional; without the pathway the same sentence reads as a prediction the model never made.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "Why does lesson 13 say the disagreement over RCP8.5 is worth learning rather than resolving?",
            options: [
              "Both positions are published and named, and a reader should be able to tell them apart",
              "Because the disagreement will be settled by observations within the next few years",
              "Because the two sides agree on everything except the name given to the pathway",
              "Because neither position has been published in a peer-reviewed venue",
            ],
            correctIndex: 0,
            explanation:
              "The exchange runs across three items in the same journal plus the scenario designers' own statements, which is unusually clean for a live disagreement.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "What does lesson 13 identify as the difference between two sentences about 2090?",
            options: [
              "One names the scenario and one does not",
              "One reports a model result and one reports an observation from the same period",
              "One uses a global average and one uses a regional average",
              "One is expressed as an anomaly and one as an absolute value",
            ],
            correctIndex: 0,
            explanation:
              "Only the version that names the scenario states what the model actually produced, which is a conditional consequence of a chosen input.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "What are the two distinct questions the word attribution covers?",
            options: [
              "What caused an observed long-term change, and what warming did to one event",
              "Which model produced a result, and which dataset it was evaluated against",
              "Which forcing dominates a projection, and which scenario was assumed",
              "Which institution published a finding, and which authors should be credited",
            ],
            correctIndex: 0,
            explanation:
              "The second, event attribution, is younger and harder, and it is where the methodological disagreement lives.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "How many steps does the World Weather Attribution protocol described by Philip and colleagues have?",
            options: [
              "Eight",
              "Three, being event definition, model evaluation and communication",
              "Twelve, one for each of the variables the protocol covers",
              "Two, being a probabilistic analysis followed by a storyline analysis",
            ],
            correctIndex: 0,
            explanation:
              "They run from deciding whether an event is worth analysing through to communicating the result, with vulnerability and exposure included.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "What is the probability ratio in risk-based attribution?",
            options: [
              "Event probability now divided by its probability in a counterfactual climate",
              "The fraction of the observed warming attributable to human influence",
              "The ratio of model runs showing the event to those not showing it",
              "The ratio of the event's severity to the severity of the worst event on record",
            ],
            correctIndex: 0,
            explanation:
              "The counterfactual climate is one without human influence, which is why attribution needs a model that can be run under conditions that never happened.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "Which limit does the attribution protocol name for itself?",
            options: [
              "A real change in probability may not yet have emerged from the noise",
              "The method cannot be applied to heat events, only to rainfall and drought",
              "The method requires at least a century of homogenised observations for every event",
              "The method assumes the climate has already reached a new equilibrium state",
            ],
            correctIndex: 0,
            explanation:
              "It also names local forcings such as aerosols, irrigation and roughness changes, and the risk that constrained experiments bias the result towards no change.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "Which error is the probabilistic attribution approach built to avoid?",
            options: [
              "False alarms",
              "Missed warnings, by starting from thermodynamic effects already established",
              "Selection effects, by fixing the event definition after the analysis is complete",
              "Model bias, by using observations alone with no simulation involved",
            ],
            correctIndex: 0,
            explanation:
              "Van Garderen, Feser and Shepherd describe it as demanding that a null hypothesis of no change be rejected before a claim is made.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "Which error is the storyline attribution approach built to avoid?",
            options: [
              "Missed warnings",
              "False alarms, by requiring a null hypothesis of no change to be rejected first",
              "Publication bias, by requiring every analysed event to be reported regardless of result",
              "Circular reasoning, by using only observations and never a model simulation",
            ],
            correctIndex: 0,
            explanation:
              "It starts from thermodynamic effects that are already established rather than requiring a statistical signal to emerge first.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "How do van Garderen, Feser and Shepherd contrast the two attribution questions?",
            options: [
              "One asks what an event reveals about climate change, the other what climate change tells us about the event",
              "One asks whether an event occurred, the other asks how severe it was",
              "One asks about temperature events, the other asks about circulation events",
              "One asks about the past, the other asks about the future under a scenario",
            ],
            correctIndex: 0,
            explanation:
              "They argue the two are complementary and that both should be used, rather than one replacing the other.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "What does lesson 14 say the attribution disagreement is not about?",
            options: [
              "Whether warming is real",
              "Which of two methods gives a more useful answer for a given event",
              "Which kind of statistical error each method is built to avoid",
              "Whether both methods should be used on the same event",
            ],
            correctIndex: 0,
            explanation:
              "It is a methodological disagreement among working scientists, and you should be able to tell which method produced any attribution statement you read.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "What does the National Academies report say warming does to extremely hot days and nights?",
            options: [
              "It increases their likelihood",
              "It leaves their likelihood unchanged while increasing their duration",
              "It reduces their likelihood in most regions while increasing it in the tropics",
              "It makes them impossible to attribute, because the temperature distribution is not stationary",
            ],
            correctIndex: 0,
            explanation:
              "The same passage names increased atmospheric moisture leading to heavier rainfall and snowfall, and evaporation that can exacerbate droughts.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "Which kind of extreme event does lesson 14 say has the shortest chain of reasoning behind an attribution?",
            options: [
              "One that is essentially a shift in the temperature distribution",
              "One whose character depends on where the circulation happened to put a weather system",
              "One with no historical precedent anywhere in the observational record",
              "One affecting a single grid cell of a coarse-resolution model",
            ],
            correctIndex: 0,
            explanation:
              "Warming increasing the likelihood of extremely hot days is a thermodynamic consequence, whereas an event shaped by blocking is a case van Garderen and colleagues name as poorly represented in models.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "What is the first item on lesson 14's checklist for reading a figure honestly?",
            options: [
              "What kind of object is each line",
              "Which journal the figure appeared in and whether it was peer reviewed",
              "Whether the colour scale is perceptually uniform and colourblind safe",
              "Whether the underlying data have been made publicly available",
            ],
            correctIndex: 0,
            explanation:
              "Observation, reanalysis, model run or scenario projection, which is Section 3's taxonomy applied to the one place it matters most.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "What three things could a shaded band around a projection be?",
            options: [
              "Model spread, ensemble percentiles, or observational uncertainty",
              "Confidence, credibility or tolerance intervals, as defined in statistics",
              "Minimum, mean and maximum of the runs, plotted as a single filled region",
              "Scenario range, model range and calendar range, combined into one band",
            ],
            correctIndex: 0,
            explanation:
              "Those are three different claims, and the caption has to say which, because the band's width means something different in each case.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "What is the error in reading a spaghetti plot as a distribution of outcomes?",
            options: [
              "No probability attaches to any single strand",
              "The strands are drawn from different models, so they cannot be plotted together",
              "The strands use different reference periods, so their vertical positions are arbitrary",
              "The strands are smoothed differently, so the apparent spread is an artefact",
            ],
            correctIndex: 0,
            explanation:
              "Each strand is one simulation, and the density of lines in a region reflects how many runs were performed rather than how likely anything is.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "Which comparison does lesson 14's checklist tell you to refuse outright?",
            options: [
              "A model's absolute value plotted against a thermometer record",
              "Two model runs from the same experiment plotted on a common baseline",
              "An observational series plotted against a reanalysis with both labelled",
              "A projection plotted alongside the historical run that precedes it",
            ],
            correctIndex: 0,
            explanation:
              "Section 5 gives the reason: models carry absolute biases, so anomalies are the transformation that makes the two comparable at all.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "What does lesson 14 tell you to check about a figure's x-axis?",
            options: [
              "Where it starts, and whether that start was chosen",
              "Whether it is linear or logarithmic in time",
              "Whether it uses the model calendar or the real calendar",
              "Whether it extends far enough to include the scenario period",
            ],
            correctIndex: 0,
            explanation:
              "That is Section 5's selection effect applied to a figure rather than to a significance test.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "What does lesson 14 tell you to do once you finish this course?",
            options: [
              "Open the coursebook and do the notebooks",
              "Re-read this course from the beginning with the taxonomy in mind",
              "Download a reanalysis and compute a global trend before reading anything further",
              "Wait until a later course extends the material into hands-on work",
            ],
            correctIndex: 0,
            explanation:
              "None of this becomes real until you have opened a file whose calendar was wrong, which is exactly what a notebook makes you do.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "Why does event attribution require a model rather than only observations?",
            options: [
              "The counterfactual climate has to be simulated",
              "Observations of extreme events are too sparse to compute any probability at all",
              "Observational records are not homogenised finely enough for single events",
              "A model is needed to convert the event into the units the protocol requires",
            ],
            correctIndex: 0,
            explanation:
              "A probability ratio needs the event's likelihood in a world without human influence, and no instrument ever measured that world.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "What does the attribution protocol include besides the hazard analysis itself?",
            options: [
              "Vulnerability and exposure analysis, and communication",
              "A cost-benefit analysis of the adaptation options available in the affected region",
              "A legal assessment of liability for the damage the event caused",
              "A forecast of when a comparable event is next expected to occur",
            ],
            correctIndex: 0,
            explanation:
              "Those are steps seven and eight of the eight, which is why the protocol is a social as well as a statistical procedure.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "Which of these local factors does the attribution protocol name as capable of influencing extremes independently of global warming?",
            options: [
              "Aerosols, irrigation and surface roughness changes",
              "Station relocation, instrument replacement and changes in observing time",
              "Calendar convention, longitude convention and fill value choice",
              "Model resolution, ensemble size and the choice of scenario",
            ],
            correctIndex: 0,
            explanation:
              "Missing them can misattribute a local change to the global signal, which is why the protocol lists them among its caveats.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "What does lesson 14 say about the two attribution methods, following van Garderen, Feser and Shepherd?",
            options: [
              "They are complementary and both should be used",
              "The storyline method supersedes the probabilistic one for all event types",
              "The probabilistic method should be used for every event, with storylines reserved for teaching",
              "They give identical answers, so the choice between them is presentational",
            ],
            correctIndex: 0,
            explanation:
              "The storyline method is described as particularly useful for events whose dynamical conditions models represent poorly.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "How does lesson 14 describe trend attribution?",
            options: [
              "Asking what caused an observed long-term change",
              "Asking how much warming a given scenario will produce by 2100",
              "Asking which model best reproduces the observed trend over the record",
              "Asking whether a trend is statistically significant over a chosen interval",
            ],
            correctIndex: 0,
            explanation:
              "Event attribution is the other question, asking what human influence did to the probability or severity of one particular extreme.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "Which is a correct reading of a projection figure, given lesson 14's checklist?",
            options: [
              "This is what the model does under the named scenario",
              "This is what will happen, since the figure was produced by a physical model",
              "This is the most likely of the available futures, since it is the central pathway",
              "This is an observation extended forward, so it carries observational uncertainty",
            ],
            correctIndex: 0,
            explanation:
              "The output is conditional on the chosen input, and dropping the scenario turns a conditional into a claim the model never made.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "What does lesson 12 say the spread of a large ensemble is NOT a measure of?",
            options: [
              "How uncertain the science is",
              "How much the climate system fluctuates under a fixed forcing",
              "How different two runs of the same model can be from their starting states",
              "How large a natural fluctuation could plausibly be in that model",
            ],
            correctIndex: 0,
            explanation:
              "It measures internal variability with the model and the forcing held constant, which is a property of the climate rather than of the state of knowledge.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "Why does lesson 13 open by calling a scenario an input rather than an output?",
            options: [
              "Because forgetting that is what turns a projection into a prediction",
              "Because the scenario files are stored in a separate archive from the model output",
              "Because scenarios are chosen after the model runs are complete, during analysis",
              "Because scenarios are produced by observation rather than by simulation",
            ],
            correctIndex: 0,
            explanation:
              "Almost every misuse of climate projection in public consists of dropping the condition and reading the result as unconditional.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "What does lesson 14 say about the density of lines in a spaghetti plot?",
            options: [
              "It reflects how many runs were performed",
              "It reflects the probability of the outcomes in that part of the range",
              "It reflects the resolution at which each contributing model was run",
              "It reflects the length of the reference period used to baseline the runs",
            ],
            correctIndex: 0,
            explanation:
              "Each strand is one simulation and no probability attaches to it, so reading the crowded region as more likely is reading the archive rather than the climate.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "Which of the three uncertainties matters most for a projection of the year 2035 at a small regional scale?",
            options: [
              "Internal variability",
              "Scenario uncertainty, because emission pathways have already diverged by then",
              "Numerical error, because it accumulates fastest in the first decades of an integration",
              "Observational uncertainty, because the historical record used to initialise is sparse",
            ],
            correctIndex: 0,
            explanation:
              "Internal variability dominates at short lead times and small spatial scales, which is why regional near-term projections carry wide ranges.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "What does lesson 13 say the published scenario set exists to do?",
            options: [
              "Span a range of assumptions so each consequence can be computed",
              "Rank the possible futures from most to least likely for use in planning",
              "Provide a single central estimate around which uncertainty can be quantified",
              "Represent the policy commitments that governments have already made",
            ],
            correctIndex: 0,
            explanation:
              "Which is why no probability is attached to any of them and why the middle pathway is not a central estimate.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
        ],
      },
    },
    {
      slug: "final-exam",
      title: "Final · What kind of object is this number?",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "A chart shows one line for 1940 to 2024 and another for 2024 to 2100. What are the two objects most likely to be?",
            options: [
              "A reanalysis or observation, then a scenario projection",
              "Two observational datasets, one historical and one extended into the future",
              "Two reanalyses, one for the past and one produced ahead of time for the future",
              "A model run for the past and a second model run under the same observed forcings",
            ],
            correctIndex: 0,
            explanation:
              "Nothing can observe the future, so the second half must be a model run under a chosen scenario, and the caption should name it.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "Which object in the four-object table can supply a counterfactual?",
            options: [
              "A model run",
              "A reanalysis, because it is constrained by observations at every assimilation step",
              "An observation, because it records what actually happened at the measured location",
              "A proxy reconstruction, because it covers the period before human influence began",
            ],
            correctIndex: 0,
            explanation:
              "A simulation can be run under conditions that never happened, which is what makes attribution possible at all.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "What licence governs the material this course companions, and what does it not contain?",
            options: [
              "CC BY 4.0, with no NonCommercial clause",
              "CC BY-NC 4.0, with a NonCommercial clause that bars use in any paid course",
              "CC BY-SA 4.0, with a ShareAlike clause requiring derivatives under the same terms",
              "A bespoke licence limited to non-profit educational institutions",
            ],
            correctIndex: 0,
            explanation:
              "The absence of the NonCommercial and ShareAlike clauses is what makes adapting the topic order here legitimate.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "Which problem is a climate projection?",
            options: [
              "A boundary-value problem",
              "An initial-value problem, since the run has to start from a measured atmospheric state",
              "An inverse problem, since the forcing is inferred from the observed temperature record",
              "A data assimilation problem, since observations are used to steer the run throughout",
            ],
            correctIndex: 0,
            explanation:
              "It depends on the conditions constraining the system rather than on how well today's atmosphere was measured.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "How long is a WMO climatological standard normal, and which fixed period is retained for long-term assessment?",
            options: [
              "Thirty years, with 1961 to 1990 retained",
              "Fifty years, with 1901 to 1950 retained as the earliest complete reference",
              "Twenty years, with 1981 to 2000 retained for consistency with earlier reports",
              "One hundred years, with 1850 to 1950 retained as the pre-industrial reference",
            ],
            correctIndex: 0,
            explanation:
              "The rolling normal is currently 1991 to 2020, while the fixed reference is kept so long-term comparisons stay stable.",
            sourceLessonSlug: "weather-versus-climate",
          },
          {
            prompt: "What is every number in a climate model's output?",
            options: [
              "An average over a grid cell",
              "A point value at the location the file's coordinates name",
              "The maximum reached inside the cell during that output interval",
              "An interpolation between the nearest observations to that cell",
            ],
            correctIndex: 0,
            explanation:
              "That is why a model has no temperature for your town, only for a box containing it along with everything else in the box.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "What does HighResMIP's target of at least 50 km in the atmosphere imply about standard CMIP configurations?",
            options: [
              "They are coarser than that",
              "They are finer than that, and HighResMIP exists to test coarser versions for cost savings",
              "They are the same, and HighResMIP simply repeats the standard experiments for longer",
              "They vary so widely that no comparison with the HighResMIP target is meaningful",
            ],
            correctIndex: 0,
            explanation:
              "A project would not be needed to study enhanced resolution if the standard resolution already met the enhanced target.",
            sourceLessonSlug: "grids-and-resolution",
          },
          {
            prompt: "Which distinction does GFDL draw between the two kinds of process in a climate model?",
            options: [
              "Larger than grid scale and physically based, versus smaller and stood in for",
              "Fast and slow, according to the time step at which each is updated during a run",
              "Atmospheric and oceanic, according to which component of the model computes them",
              "Diagnosed and prognosed, according to whether the model carries the variable in its state",
            ],
            correctIndex: 0,
            explanation:
              "The parameterised half is where modelling groups make different choices, which is the main reason a multi-model ensemble spreads out.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "What is Ehret and colleagues' published objection to bias correction?",
            options: [
              "It hides uncertainty rather than reducing it",
              "It is too computationally costly to apply across a full multi-model ensemble",
              "It can only be applied to variables with a complete observational record",
              "It removes the forced trend along with the systematic error",
            ],
            correctIndex: 0,
            explanation:
              "They also name altered field consistency, altered relations among variables and violated conservation principles as costs of the practice.",
            sourceLessonSlug: "parameterisation-and-model-spread",
          },
          {
            prompt: "What is homogenisation, and why is a published temperature series not a transcript?",
            options: [
              "Removing non-climatic steps and drifts, which is a scientific procedure",
              "Averaging nearby stations together, which is a purely arithmetic operation",
              "Converting all readings to a common unit, which changes no value in substance",
              "Excluding stations with incomplete records, which leaves only the raw survivors",
            ],
            correctIndex: 0,
            explanation:
              "Station moves, screen replacements, changed reading times and changed surroundings all put artefacts into a record that have nothing to do with climate.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "Three groups produce satellite temperature records from the same raw radiances. Why do the products differ?",
            options: [
              "The adjustment choices differ",
              "The groups use different satellites, with no overlap between their sets of instruments",
              "The groups report over different layers of the atmosphere, which cannot be compared",
              "The groups use different baselines, which offsets the series without changing the trend",
            ],
            correctIndex: 0,
            explanation:
              "Diurnal drift, Earth incidence angle and intercalibration across fourteen satellites all require choices, and RSS, UAH and STAR make them differently.",
            sourceLessonSlug: "what-an-observation-is",
          },
          {
            prompt: "What does ECMWF say a reanalysis is the best fit to?",
            options: [
              "Both the forecast and the observations, given their uncertainties",
              "The observations alone, since the model contributes nothing to the final analysis",
              "The model climatology, with observations used only for verification afterwards",
              "The previous reanalysis, so that successive generations remain directly comparable",
            ],
            correctIndex: 0,
            explanation:
              "That is what data assimilation produces, and it is why a reanalysis is neither purely observation nor purely simulation.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "Why is a long trend from a reanalysis less trustworthy than the same trend from a homogenised station record?",
            options: [
              "The observing system changed even though the model was held fixed",
              "The reanalysis covers a shorter period than the station record in every case",
              "The reanalysis is published at monthly resolution, which is too coarse for trends",
              "The reanalysis is bias corrected against the station record, which makes it circular",
            ],
            correctIndex: 0,
            explanation:
              "A station record has had that class of artefact hunted down and removed; the observing system as a whole has not.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "What did Wendy Parker argue is the most significant difference between reanalyses and observations?",
            options: [
              "How well the uncertainty can be characterised",
              "The reliance on forecasts, which is unique to reanalysis among the two",
              "The role of inference, which is absent from observation entirely",
              "The spatial resolution, since reanalyses are always finer than observing networks",
            ],
            correctIndex: 0,
            explanation:
              "Inference and model reliance are present in observation too, so the distinguishing feature has to be the characterisation of error.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "Why can a CMIP historical run not be scored year by year against the observed record?",
            options: [
              "It reproduces the statistics of the climate, not its sequence",
              "It uses a different calendar, so its years do not align with the observed ones",
              "It is run at a resolution too coarse to resolve any individual year",
              "It is driven by assumed rather than observed forcings over the period",
            ],
            correctIndex: 0,
            explanation:
              "The timing of its internal variability depends on the run's own starting state, so its El Ninos do not fall in the years the real ones fell.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "What do the r, i, p and f indices of a CMIP6 variant label stand for?",
            options: [
              "Realization, initialization, physics, forcing",
              "Resolution, institution, phase, frequency, as they appear in the directory path",
              "Region, interval, parameter, format, as used by the archive's search facets",
              "Run, iteration, project, file, as used in the modelling group's internal bookkeeping",
            ],
            correctIndex: 0,
            explanation:
              "Two files differing only in r are the same physics started differently, so any difference between them is internal variability.",
            sourceLessonSlug: "what-model-output-is",
          },
          {
            prompt: "Which reference periods do GISTEMP and HadCRUT5 use?",
            options: [
              "1951 to 1980 and 1961 to 1990",
              "1961 to 1990 and 1991 to 2020, matching the WMO fixed and rolling normals",
              "1850 to 1900 for both, matching the convention used for pre-industrial comparisons",
              "1991 to 2020 and 1981 to 2010, each matching the normal current at its release",
            ],
            correctIndex: 0,
            explanation:
              "That difference is why the same warming plotted from each sits at a different height on the y-axis.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "Which additional warming does Berkeley Earth attribute to including the region above Arctic sea ice?",
            options: [
              "About 0.1 °C over the last 100 years",
              "About 1.0 °C over the last 50 years, which is the largest such adjustment published",
              "About 0.01 °C over the whole record, which is below the noise level of the series",
              "None; the inclusion changes only the Arctic regional series and not the global mean",
            ],
            correctIndex: 0,
            explanation:
              "Rohde and Hausfather report it as a consequence of covering a region that records leaving unmeasured boxes empty do not.",
            sourceLessonSlug: "the-dataset-families",
          },
          {
            prompt: "What does self-describing mean for a netCDF file?",
            options: [
              "The file includes information about the data it contains",
              "The file can be read as plain text without any software library at all",
              "The file records the code that produced it so results can be reproduced",
              "The file validates its own values against the range declared for each variable",
            ],
            correctIndex: 0,
            explanation:
              "Not asking the file what it holds is the commonest beginner error, and the six questions of lesson 9 are how you ask.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "Precipitation arrives in kilograms per square metre per second. What conversion do you need?",
            options: [
              "A factor of 86400 to reach millimetres per day",
              "A factor of 1000 to reach millimetres per day, since a kilogram is a thousand grams",
              "A factor of 3600 to reach millimetres per day, since an hour has that many seconds",
              "No conversion, since the units are already equivalent to millimetres per day",
            ],
            correctIndex: 0,
            explanation:
              "It is a flux rather than a depth, and forgetting the conversion is the single most common precipitation bug in climate analysis.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "What must you do before taking a global mean over a latitude and longitude grid?",
            options: [
              "Weight by the cosine of the latitude",
              "Interpolate the field onto a grid of equal-area cells before averaging over them",
              "Convert the field from anomalies to absolute values so the mean is physically meaningful",
              "Remove the seasonal cycle so that the mean is not dominated by the annual variation",
            ],
            correctIndex: 0,
            explanation:
              "For a rectangular grid the cosine of the latitude is proportional to cell area, and an unweighted mean answers a different question.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "Which of these is a model calendar you may meet in a climate file?",
            options: [
              "A 360-day calendar of twelve 30-day months",
              "A 366-day calendar in which every year is treated as a leap year",
              "A 100-day calendar used to compress long integrations into fewer time steps",
              "A calendar aligned to the solar cycle rather than to the Earth's orbit",
            ],
            correctIndex: 0,
            explanation:
              "A no-leap calendar is the other common one, and averaging either against a real-calendar observation quietly misaligns the seasons.",
            sourceLessonSlug: "reading-the-documentation",
          },
          {
            prompt: "Which is affected by a change of baseline?",
            options: [
              "The level, not the trend",
              "The trend, not the level, which is why baselines must match before trends are compared",
              "Both, which is why every comparison requires a common reference period",
              "Neither, which is why anomalies can be combined freely across datasets",
            ],
            correctIndex: 0,
            explanation:
              "Shifting the reference period slides the whole curve up or down while leaving its slope untouched.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "Why does NASA compute global means from station anomalies rather than from absolute temperatures?",
            options: [
              "Absolute regional means carry large uncertainties",
              "Absolute values are proprietary and cannot be redistributed by the analysis centre",
              "Absolute values would require a model to fill the gaps between stations",
              "Absolute values change with the units chosen while anomalies do not",
            ],
            correctIndex: 0,
            explanation:
              "Anomalies are correlated over hundreds of kilometres while absolute values are not, so a sparse network constrains the difference far better than the level.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "What was Rahmstorf, Foster and Cahill's objection to the early-2000s slowdown analysis?",
            options: [
              "The interval was selected for its low trend",
              "The interval used a dataset that has since been superseded by a newer version",
              "The interval was measured from a reanalysis rather than from station observations",
              "The interval was too long, so it averaged over two distinct regimes",
            ],
            correctIndex: 0,
            explanation:
              "Applying a significance test to an interval chosen because of its result is invalid, and their simulations found such an interval unremarkable.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "Does the objection to a chosen start date favour any conclusion about warming?",
            options: [
              "No, it is a rule about method",
              "Yes, it applies only to claims that warming has slowed rather than accelerated",
              "Yes, it applies only to satellite records rather than to surface records",
              "Yes, it applies only to intervals shorter than the thirty-year normal",
            ],
            correctIndex: 0,
            explanation:
              "A start date chosen to make warming look faster fails exactly the same test, which is what makes the rule usable.",
            sourceLessonSlug: "trends-and-the-chosen-start-date",
          },
          {
            prompt: "Which three sources of uncertainty did Hawkins and Sutton separate?",
            options: [
              "Internal variability, model uncertainty, scenario uncertainty",
              "Instrument error, sampling error and structural error, as defined in metrology",
              "Initial conditions, boundary conditions and numerical error",
              "Observation, reanalysis and simulation, matching the object taxonomy",
            ],
            correctIndex: 0,
            explanation:
              "They found the first two dominant over the next few decades, which are the sources further science could in principle reduce.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "What does a single-model initial-condition large ensemble isolate?",
            options: [
              "Internal variability",
              "Model uncertainty, since each member uses a different parameterisation setting",
              "Scenario uncertainty, since each member follows a different emission pathway",
              "Observational uncertainty, since each member is initialised from a different dataset",
            ],
            correctIndex: 0,
            explanation:
              "One model, identical external forcing, different starting states, so nothing but the system's own fluctuations separates the members.",
            sourceLessonSlug: "three-uncertainties-and-two-ensembles",
          },
          {
            prompt: "In the label SSP3-7.0, what is the 7.0?",
            options: [
              "The 2100 forcing level in watts per square metre",
              "The projected warming in degrees Celsius by the end of the century",
              "The version of the socioeconomic pathway used in that experiment",
              "The number of models that submitted runs for that pathway",
            ],
            correctIndex: 0,
            explanation:
              "The first half is the socioeconomic storyline, which is what makes the two halves independently variable in the CMIP6 naming scheme.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "Which four scenarios are ScenarioMIP's Tier 1?",
            options: [
              "SSP1-2.6, SSP2-4.5, SSP3-7.0, SSP5-8.5",
              "SSP1-1.9, SSP1-2.6, SSP2-4.5 and SSP4-3.4, the four lowest forcing pathways",
              "RCP2.6, RCP4.5, RCP6.0 and RCP8.5, carried forward from the previous phase unchanged",
              "SSP5-8.5, SSP5-3.4-OS, SSP4-6.0 and SSP3-7.0-LowNTCF, the four variant pathways",
            ],
            correctIndex: 0,
            explanation:
              "Tebaldi and colleagues identify those as the priority set, which is why they are the pathways most groups ran.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "Which two positions are on the record about RCP8.5 as a reference scenario?",
            options: [
              "Schwalm and colleagues defend it; Hausfather and Peters call it problematic",
              "Hausfather and Peters defend it; Schwalm and colleagues call it physically impossible",
              "Both groups reject it, differing only over which pathway should replace it",
              "Both groups defend it, differing only over whether the label should be changed",
            ],
            correctIndex: 0,
            explanation:
              "The exchange runs across three items in the same journal, and the scenario designers' own view is recorded separately.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "What did van Vuuren and colleagues say about RCP8.5 as a no-climate-policy reference?",
            options: [
              "It cannot be used as one",
              "It is the only pathway that can properly serve as one, which is why it is so widely used",
              "It can be used as one only for the period before 2050 and not beyond",
              "It can be used as one provided the socioeconomic storyline is also specified",
            ],
            correctIndex: 0,
            explanation:
              "They characterised it as around the ninetieth percentile of baseline scenarios rather than as a most-likely outcome.",
            sourceLessonSlug: "what-a-scenario-is-not",
          },
          {
            prompt: "What is a probability ratio in event attribution?",
            options: [
              "The event's probability now over its probability without human influence",
              "The proportion of model runs in which the event occurs at all",
              "The ratio of the event's severity to the worst comparable event on record",
              "The share of the observed warming attributable to human activity",
            ],
            correctIndex: 0,
            explanation:
              "The counterfactual climate has to be simulated, which is why event attribution needs a model as well as observations.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "Which error does each attribution approach prioritise avoiding?",
            options: [
              "Probabilistic avoids false alarms, storyline avoids missed warnings",
              "Probabilistic avoids missed warnings, storyline avoids false alarms",
              "Both avoid false alarms, differing only in the statistical test they apply",
              "Both avoid missed warnings, differing only in the models they use",
            ],
            correctIndex: 0,
            explanation:
              "Van Garderen, Feser and Shepherd use exactly that framing, and argue the two are complementary rather than competing.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "A figure shows a shaded band around a projection with no caption explaining it. What is the problem?",
            options: [
              "It could be model spread, ensemble percentiles or observational uncertainty",
              "It could be plotted on a different baseline from the central line it surrounds",
              "It could have been computed with a different calendar from the underlying data",
              "It could extend beyond the period for which the model was actually run",
            ],
            correctIndex: 0,
            explanation:
              "Those are three different claims, and the width of the band means something different in each case.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "Which claim about a spaghetti plot is correct?",
            options: [
              "Each strand is one run with no probability attached",
              "The strands together form a probability distribution over future outcomes",
              "The strands are ordered by likelihood, with the central one the most probable",
              "The strands represent observational uncertainty rather than model runs",
            ],
            correctIndex: 0,
            explanation:
              "The density of lines in a region reflects how many runs were performed rather than how likely anything is.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
          {
            prompt: "You are handed a number with no reference period. What does this course say to do?",
            options: [
              "Treat it as incomplete and find the baseline",
              "Assume the pre-industrial baseline, which is the most common convention in reporting",
              "Assume the current WMO rolling normal, which is the operational default",
              "Discard it, since a number without a baseline is necessarily wrong",
            ],
            correctIndex: 0,
            explanation:
              "Incomplete rather than wrong, and the baseline is what turns it into a statement you can check.",
            sourceLessonSlug: "anomalies-and-baselines",
          },
          {
            prompt: "Which single question does this course use as its spine?",
            options: [
              "What kind of object is this number",
              "Which model produced this result and at what resolution was it run",
              "How large is the uncertainty and how was it estimated",
              "Which institution published this dataset and under what licence",
            ],
            correctIndex: 0,
            explanation:
              "An observation, a reanalysis, a model run and a scenario projection look identical on a chart and answer different questions.",
            sourceLessonSlug: "scope-and-attribution",
          },
          {
            prompt: "What does a reanalysis put where there were no observations, and what follows from that?",
            options: [
              "The model's own value, so it is not a measurement there",
              "A gap flagged with a fill value, so the field is incomplete in those regions",
              "An interpolation between neighbouring observations, with no model involved",
              "A climatological average, so the field carries no information about that year",
            ],
            correctIndex: 0,
            explanation:
              "Where observations constrain the system it is close to measurement, and where they do not you are reading physics.",
            sourceLessonSlug: "what-a-reanalysis-is",
          },
          {
            prompt: "Where does lesson 14 send you at the end of this course?",
            options: [
              "To the coursebook and its notebooks",
              "To a second course that continues into hands-on work from where this one stops",
              "To the primary literature, starting with the papers cited in Section 6",
              "To the dataset archives, to download a reanalysis before reading anything more",
            ],
            correctIndex: 0,
            explanation:
              "None of this becomes real until you have opened a file whose calendar was wrong, which is what a notebook makes you do.",
            sourceLessonSlug: "attribution-and-reading-a-figure",
          },
        ],
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// RESEARCH CHECKS FILED 2026-08-31 in src/lib/research-checks.ts:
//   climate-preindustrial-baseline-years, climate-enso-contribution-magnitude,
//   climate-nasem-attribution-confidence-ranking
//
// Citation gap, recorded but not a lesson hedge: the Hausfather and Peters Nature comment on
// RCP8.5 could not be retrieved (nature.com redirected to an identity provider), so BOTH sides
// of that disagreement are cited from PNAS instead, which has the side effect of putting them
// in one journal where a reader can compare them directly.
