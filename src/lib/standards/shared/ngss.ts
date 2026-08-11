// NGSS — a SHARED framework, mapped once. The 20+ NGSS states reference this from their
// data/<state>.ts via `adoptions` (verbatim or with local code aliases); the mapping is never
// redone per state. Indiana is NOT an NGSS state — it publishes its own science standards.
//
// Fetched 2026-07-13 from nextgenscience.org (the one HS-ESS3 performance expectation this
// catalog can honestly touch — see the note on it before relying on it).

import type { SharedFramework } from "../types";

export const NGSS: SharedFramework = {
  id: "ngss",
  subject: "Science",
  name: "Next Generation Science Standards (NGSS)",
  publisher: "NGSS Lead States / nextgenscience.org",
  version: "HS-ESS1 Earth's Place in the Universe; HS-ESS2 Earth's Systems; HS-ESS3 Earth and Human Activity",
  sourceUrl: "https://www.nextgenscience.org/dci-arrangement/hs-ess1-earths-place-universe",
  fetchedOn: "2026-08-10",
  standards: [
    // ── HS-ESS2 Earth's Systems ───────────────────────────────────────────────────────────────
    // Fetched verbatim 2026-08-10 from nextgenscience.org/dci-arrangement/hs-ess2-earths-systems.
    //
    // ⚠️ FOUR OF THE SEVEN ARE ABSENT ON PURPOSE. HS-ESS2-1, -3 and -6 all begin "Develop a model"
    // and HS-ESS2-7 is about the coevolution of Earth systems and life, none of which this catalog
    // teaches. HS-ESS2-4 (energy flow and climate) is touched only glancingly. Claiming a
    // model-building expectation for a reading course would be the widening index.ts forbids.
    {
      code: "HS-ESS2-2",
      text: "Analyze geoscience data to make the claim that one change to Earth's surface can create feedbacks that cause changes to other Earth systems.",
      claimIds: ["catalog.watershed-feedbacks"],
      coverage: "partial",
      note: "The best NGSS fit in the catalog for a feedback argument. The River and the Watershed is built out of them: paving a watershed raises flood peaks AND lowers baseflow through one mechanism (lesson 2); a dam trapping sediment starves the channel below and stops resupplying the delta a thousand miles away (lesson 6); fertiliser on an Indiana field ends as an oxygen-depleted zone in the Gulf (lessons 9 and 10). PARTIAL because of the first verb: the learner ANALYZES geoscience data only in the capstone, where they read a USGS gauge record and an EPA impairment listing for their own watershed. The lessons supply the analysis; the student repeats it once.",
    },
    {
      code: "HS-ESS2-5",
      text: "Plan and conduct an investigation of the properties of water and its effects on Earth materials and surface processes.",
      claimIds: ["catalog.water-and-surface-processes"],
      coverage: "partial",
      note: "PARTIAL, and the gap is the entire first half of the sentence. The CONTENT is taught directly and at length: water's properties drive erosion and deposition, meanders, cut banks and point bars (lesson 5), sediment transport and what a dam does to it (lesson 6), and density stratification, which is why the Gulf hypoxic zone persists through the summer (lesson 9). But the learner never PLANS AND CONDUCTS AN INVESTIGATION. There is no laboratory work in this catalog and no fieldwork is required to finish this course. If your science requirement is assessed on students conducting investigations, this contributes and does not discharge. Course 4 of this track teaches how to design one; running it is still the student's own project.",
    },
    // ── HS-ESS1 Earth's Place in the Universe ─────────────────────────────────────────────────
    // Fetched verbatim 2026-08-10 from nextgenscience.org/dci-arrangement/hs-ess1-earths-place-universe.
    // Raw text and the full reasoning for what is and is not claimed:
    // plans/future-courses/sciences/03-standards-source-text.md.
    //
    // ⚠️ HS-ESS1-4 IS DELIBERATELY ABSENT. Its verbatim text is "Use mathematical or computational
    // representations to predict the motion of orbiting objects in the solar system", and
    // how-we-know-whats-out-there contains no equations at all, by design: the platform has no math
    // rendering and cannot grade a produced number. It becomes claimable when the maths course
    // ships, and not before. HS-ESS1-5 and HS-ESS1-6 are not taught in any form.
    {
      code: "HS-ESS1-2",
      text: "Construct an explanation of the Big Bang theory based on astronomical evidence of light spectra, motion of distant galaxies, and composition of matter in the universe.",
      claimIds: ["catalog.astronomical-evidence-chain"],
      coverage: "partial",
      note: "The strongest CONTENT match in this catalog: the performance expectation names light spectra, the motion of distant galaxies, and the composition of matter, and those are lessons 5, 11 and 13 of How We Know What's Out There. PARTIAL, and the missing piece is the practice rather than the content: the course supplies and examines the evidence, and the student is asked to construct an explanation only in the graded capstone, where they trace a published number down the chain of inference. If your science requirement is assessed on the three-dimensional NGSS performance, this contributes to it and does not discharge it.",
    },
    {
      code: "HS-ESS1-3",
      text: "Communicate scientific ideas about the way stars, over their life cycle, produce elements.",
      claimIds: ["catalog.stars-produce-elements"],
      coverage: "full",
      note: "Lesson 13 is this expectation. It gives the mechanism without equations (hydrogen to helium, heavier elements as the core contracts and heats, the stop at iron because fusion past it no longer releases net energy, and the extreme conditions of stellar death for what comes after), and then sets out the four independent lines of evidence that support it. Communicating the idea IS the lesson, which is why this one is full rather than partial.",
    },
    {
      code: "HS-ESS1-1",
      text: "Develop a model based on evidence to illustrate the life span of the sun and the role of nuclear fusion in the sun's core to release energy that eventually reaches Earth in the form of radiation.",
      claimIds: ["catalog.stars-produce-elements"],
      coverage: "partial",
      note: "PARTIAL, and the gap is the verb. Fusion as the sun's energy source and the arc of a star's life are taught (lessons 7 and 13, via the main sequence and stellar evolution), but the student never DEVELOPS A MODEL, which is the performance the expectation actually requires. Do not round this up.",
    },
    {
      code: "HS-ESS3-1",
      text: "Construct an explanation based on evidence for how the availability of natural resources, occurrence of natural hazards, and changes in climate have influenced human activity.",
      claimIds: ["bvc.climate-resources-shape-humans"],
      coverage: "partial",
      note: "Read this one carefully before you rely on it. This is NOT a science course, it has no laboratory work, no investigations and no scientific modelling. What it does have is precisely the content of HS-ESS3-1: resource availability and climate change shaping what humans do and where. The lessons supply the evidence; the STUDENT constructs the explanation only in the Coffee project (Option B). If your science requirement is assessed on the three-dimensional NGSS performance, this contributes to it, it does not discharge it.",
    },
  ],
};
