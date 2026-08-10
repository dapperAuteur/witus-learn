// Common Core Mathematics — a SHARED framework, mapped once. States that adopted Common Core for
// MATHEMATICS reference this from their data/<state>.ts via `adoptions`, verbatim or with local
// code aliases; the mapping is never redone per state.
//
// ⚠️ MATH ADOPTION IS NOT ELA ADOPTION. Do not copy a state's ELA adoption across to this file.
// Several states repealed, rebranded, or revised one and not the other, and Delaware's adoption
// note in data/de.ts says in as many words "We claim no mathematics standards." Every state added
// here must have its MATH status checked against its own department of education, separately.
//
// Fetched 2026-08-10 from the CCSS Initiative's own PDF. NOTE THE URL: www.thecorestandards.org
// now returns HTTP 403 to automated fetches (it did not on 2026-07-13, the date in
// common-core-ela.ts), while the PDF below serves normally. Cite the PDF, or the next re-check
// fails on a blocked page rather than on a changed standard.
//
// CODE FORMAT: the PDF prints short domain codes ("N-Q", "S-ID", "S-IC") with numbered standards
// under a cluster heading. The CCSSI's own dot-notation for the same standards is
// CCSS.Math.Content.HSN-Q.A.1 etc. common-core-ela.ts uses the dot-notation form, so this file
// matches it — but every `text` below is the PDF's words, transcribed verbatim.
//
// WHAT IS DELIBERATELY NOT CLAIMED, and why it matters more than what is:
// S-ID.1, .4, .6 and .8, and S-IC.2, .4 and .5, all require the learner to PRODUCE something —
// a plot, a fit, a correlation coefficient, a simulation, a margin of error. `how-to-read-a-number`
// is a reading-and-judgment course: it never asks a learner to compute, because the platform grades
// typed answers by string equality and could not mark a computed number fairly (see
// src/lib/exercise.ts and scripts/check-assessment-fit.ts). Claiming a produce-it standard for an
// interpret-it course would be exactly the widening src/lib/standards/index.ts forbids. Those
// standards become claimable when the numeric-grading work lands, and not before.

import type { SharedFramework } from "../types";

export const COMMON_CORE_MATH: SharedFramework = {
  id: "ccss-math",
  subject: "Mathematics",
  name: "Common Core State Standards for Mathematics",
  publisher: "Common Core State Standards Initiative",
  version: "High School: Number and Quantity; Statistics and Probability",
  sourceUrl: "https://corestandards.org/wp-content/uploads/2023/09/Math_Standards1.pdf",
  fetchedOn: "2026-08-10",
  standards: [
    // ── Statistics and Probability ───────────────────────────────────────────────────────────
    {
      code: "CCSS.Math.Content.HSS-IC.B.6",
      text: "Evaluate reports based on data.",
      claimIds: ["catalog.evaluate-reports-based-on-data"],
      coverage: "full",
      note: "Cluster: Make inferences and justify conclusions from sample surveys, experiments, and observational studies. The strongest mathematics alignment in this catalog, and the only one claimed at full coverage: the standard is a single sentence describing evaluation rather than computation, and evaluating a public report against its own evidence is the entire course. The capstone requires the learner to do it on a real published number and write the honest version of the sentence it appeared in.",
    },
    {
      code: "CCSS.Math.Content.HSS-ID.C.9",
      text: "Distinguish between correlation and causation.",
      claimIds: ["catalog.correlation-not-causation"],
      coverage: "full",
      note: "Cluster: Interpret linear models. Lesson 11 is this standard and nothing else: the four competing explanations for two things moving together, what actually establishes causation, and why programme evaluation is the civic case where it bites.",
    },
    {
      code: "CCSS.Math.Content.HSS-IC.A.1",
      text: "Understand statistics as a process for making inferences about population parameters based on a random sample from that population.",
      claimIds: ["catalog.sample-to-population-inference"],
      coverage: "full",
      note: "Cluster: Understand and evaluate random processes underlying statistical experiments. Taught across lessons 9 and 10 as the thing a margin of error is computed under and real surveys never achieve: coverage error, nonresponse and likely-voter screening are each presented as a way the sample stops representing the population.",
    },
    {
      code: "CCSS.Math.Content.HSS-IC.A.2",
      text: "Decide if a specified model is consistent with results from a given data-generating process, e.g., using simulation.",
      claimIds: ["catalog.sample-to-population-inference"],
      coverage: "partial",
      note: "PARTIAL, and the gap is the whole second half of the standard. The course teaches the judgment (a three-point move inside a four-point margin is consistent with nothing having changed) but never has the learner run a simulation, because Wave 1 of this track cannot grade a produced number. Do not round this up.",
    },
    {
      code: "CCSS.Math.Content.HSS-ID.A.3",
      text: "Interpret differences in shape, center, and spread in the context of the data sets, accounting for possible effects of extreme data points (outliers).",
      claimIds: ["catalog.distribution-shape-and-spread"],
      coverage: "full",
      note: "Lessons 6 and 7. Mean against median on a skewed distribution, what an average discarded, and the argument that deciding whether an outlier is an error, a different population, or the actual finding requires knowing the subject rather than knowing statistics.",
    },
    {
      code: "CCSS.Math.Content.HSS-ID.C.7",
      text: "Interpret the slope (rate of change) and the intercept (constant term) of a linear model in the context of the data.",
      claimIds: ["catalog.distribution-shape-and-spread"],
      coverage: "partial",
      note: "PARTIAL. The learner reads fitted lines and dual-axis charts critically (lesson 13) and is asked what a choice of scale does to an apparent relationship, but is never asked to fit a model or state a slope. Interpretation without production.",
    },
    // ── Number and Quantity ──────────────────────────────────────────────────────────────────
    {
      code: "CCSS.Math.Content.HSN-Q.A.1",
      text: "Use units as a way to understand problems and to guide the solution of multi-step problems; choose and interpret units consistently in formulas; choose and interpret the scale and the origin in graphs and data displays.",
      claimIds: ["catalog.units-denominators-and-scale"],
      coverage: "partial",
      note: "PARTIAL by design: the formulas half of the standard is not taught. The graphs half is taught head-on, because choosing and interpreting the scale and the origin of a display is precisely what lesson 13 examines (truncated axes, dual axes, the chosen window). Lessons 2 and 4 do the units half through denominators.",
    },
    {
      code: "CCSS.Math.Content.HSN-Q.A.2",
      text: "Define appropriate quantities for the purpose of descriptive modeling.",
      claimIds: ["catalog.units-denominators-and-scale"],
      coverage: "full",
      note: "Lesson 4 is this standard applied to civic measurement: turnout over registered voters, over the voting-eligible population, or over the voting-age population are three defensible quantities for one phenomenon, and choosing among them decides what is being described. Lesson 2 does the same for counts against rates against exposure-based rates.",
    },
    {
      code: "CCSS.Math.Content.HSN-Q.A.3",
      text: "Choose a level of accuracy appropriate to limitations on measurement when reporting quantities.",
      claimIds: ["catalog.accuracy-and-provenance"],
      coverage: "full",
      note: "A judgment rather than a computation, which is why a course that grades no arithmetic can claim it honestly. Lesson 8 separates a census from a sample estimate from a projection and refuses to quote a revisable figure without its release; lesson 9 establishes that a stated margin of error is a lower bound on uncertainty rather than the whole of it.",
    },
  ],
};
