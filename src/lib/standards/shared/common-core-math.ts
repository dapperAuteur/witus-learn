// Common Core Mathematics — a SHARED framework, mapped once. States that adopted Common Core for
// MATHEMATICS reference this from their data/<state>.ts via `adoptions`, verbatim or with local
// code aliases; the mapping is never redone per state.
//
// ⚠️ MATH ADOPTION IS NOT ELA ADOPTION. Do not copy a state's ELA adoption across to this file.
// Several states repealed, rebranded, or revised one and not the other, and Delaware's adoption
// note in data/de.ts says in as many words "We claim no mathematics standards." Every state added
// here must have its MATH status checked against its own department of education, separately.
//
// Fetched 2026-08-10 from the CCSS Initiative's own PDF, and fetched again 2026-10-14 for The Slide
// Rule: every text below was compared with the 2026-10-14 copy (all ten earlier ones unchanged), and
// 8.EE.A.3 and 8.EE.A.4 (PDF p. 54), HSF-BF.B.5 (PDF p. 70) and MP5 (PDF p. 7) were transcribed from
// it. The PDF prints exponents as superscripts; 8.EE.A.3's example is transcribed with superscript
// digits (10⁸, 10⁹). NOTE THE URL: www.thecorestandards.org
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
// a plot, a fit, a correlation coefficient, a simulation, a margin of error. The two courses that
// first claimed here (how-to-read-a-number, intro-to-citizen-science) are reading-and-judgment
// courses: neither asks a learner to compute, because the platform grades typed answers by string
// equality and could not mark a computed number fairly (see src/lib/exercise.ts and
// scripts/check-assessment-fit.ts). Claiming a produce-it standard for an interpret-it course would
// be exactly the widening src/lib/standards/index.ts forbids. Those standards become claimable when
// the numeric-grading work lands, and not before.
//
// COMPUTING IS NOW CLAIMED, BY MULTIPLE CHOICE (2026-10-14). Two courses here ask the learner to
// compute, and each grades it with multiple choice whose options are the candidate results, which
// string-equality grading handles fairly; the boundary moves only as far as they do.
// The Slide Rule teaches calculation: estimating with powers of ten, multiplying in scientific
// notation, logarithms and their inverse, with options that differ by a power of ten or by far more
// than a reading error. So it claims 8.EE.A.3 (full: the standard is estimation and comparison,
// which the options test directly), 8.EE.A.4 and HSF-BF.B.5 (partial, each saying what is missing),
// HSN-Q.A.3 (full, beside the two reading courses) and the practice standard MP5 (partial). It does
// NOT claim 8.EE.A.1, HSF-LE.A.4 or anything that asks a learner to solve an equation.
// Map and Compass computes map scale to ground distance and area, angles added and subtracted on a
// declination diagram, and coordinates interpreted on a first-quadrant grid. What it asks a learner
// to DO with a protractor, a pencil or a map (measure an angle, sketch it, plot a point, reproduce a
// drawing at another scale) is practiced but not graded, so every standard whose wording asks for
// that production is mapped PARTIAL with the gap stated: 4.MD.C.6, 5.G.A.2 and 7.G.A.1. The grade 4,
// 5, 7 and 8 texts below were transcribed from the CCSS PDF on 2026-10-14.

import type { SharedFramework } from "../types";

export const COMMON_CORE_MATH: SharedFramework = {
  id: "ccss-math",
  subject: "Mathematics",
  name: "Common Core State Standards for Mathematics",
  publisher: "Common Core State Standards Initiative",
  version: "Grade 4: Measurement and Data; Grade 5: Geometry; Grade 7: Geometry; Grade 8: Expressions and Equations; High School: Number and Quantity, Functions, Statistics and Probability; Standards for Mathematical Practice",
  sourceUrl: "https://corestandards.org/wp-content/uploads/2023/09/Math_Standards1.pdf",
  fetchedOn: "2026-10-14",
  standards: [
    // ── Statistics and Probability ───────────────────────────────────────────────────────────
    {
      code: "CCSS.Math.Content.HSS-IC.B.6",
      text: "Evaluate reports based on data.",
      claimIds: ["catalog.evaluate-reports-based-on-data", "catalog.honest-measurement-reporting"],
      coverage: "full",
      note: "Cluster: Make inferences and justify conclusions from sample surveys, experiments, and observational studies. The strongest mathematics alignment in this catalog: the standard is a single sentence describing evaluation rather than computation, and evaluating a public report against its own evidence is the whole of How to Read a Number, whose capstone requires the learner to do it on a real published number and write the honest version of the sentence it appeared in. Intro to Citizen Science reaches the same standard from the other side, evaluating a report you produced yourself.",
    },
    {
      code: "CCSS.Math.Content.HSS-ID.C.9",
      text: "Distinguish between correlation and causation.",
      claimIds: ["catalog.correlation-not-causation", "catalog.confounders-in-your-own-data"],
      coverage: "full",
      note: "Cluster: Interpret linear models. Taught twice, deliberately, from both sides. How to Read a Number lesson 11 is the READING side: four competing explanations for two things moving together, and what actually establishes causation. Intro to Citizen Science lesson 6 is the COLLECTING side, working six candidate confounders through one relationship, several of which are ways the measurement responds rather than ways the world does.",
    },
    {
      code: "CCSS.Math.Content.HSS-IC.B.3",
      text: "Recognize the purposes of and differences among sample surveys, experiments, and observational studies; explain how randomization relates to each.",
      claimIds: ["catalog.study-design-and-its-limits"],
      coverage: "full",
      note: "Intro to Citizen Science owns this one. Lesson 1 names the three kinds and states the consequence that matters to a volunteer: nearly all citizen science is a survey or an observational study, almost never an experiment, and that ceiling decides what the data will ever be able to say. Lessons 5 and 7 develop how randomisation relates to each and what is available when you cannot randomise.",
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
      claimIds: ["catalog.accuracy-and-provenance", "catalog.honest-measurement-reporting", "catalog.slide-rule-figures-warranted", "catalog.grid-reference-precision"],
      coverage: "full",
      note: "A judgment rather than a computation, which is why a course that grades no arithmetic can claim it honestly. In How to Read a Number, lesson 8 separates a census from a sample estimate from a projection and refuses to quote a revisable figure without its release, and lesson 9 establishes that a stated margin of error is a lower bound on uncertainty. Intro to Citizen Science lesson 9 makes it a rule the learner applies to their own data: a derived number cannot be more precise than its roughest input. The Slide Rule lesson 9 teaches it with a physical limit: a rule good to about one part in a thousand may be used where three significant figures are warranted, and Cullimore's 1920 worked case writes a volume as 6900 because one of its three measurements was taken only to the nearest tenth. Map and Compass lessons 12 and 34 apply it to position: a grid reference's digits are a claim about how well you measured, a pencil line 0.5 mm wide is 12 m at 1:24,000, and a phone fix good to about 4.9 m (GPS.gov) supports an eight-digit reference, not a ten-digit one.",
    },
    // ── Grade 4 · Measurement and Data (Geometric measurement: understand concepts of angle and measure angles)
    {
      code: "CCSS.Math.Content.4.MD.C.6",
      text: "Measure angles in whole-number degrees using a protractor. Sketch angles of specified measure.",
      claimIds: ["catalog.measure-and-plot-bearings"],
      coverage: "partial",
      note: "PARTIAL: taught, practiced, not graded. Map and Compass lesson 21 measures map bearings with a protractor to the nearest degree and plots a bearing from a known point; lesson 18 sketches a 60° bearing clockwise from north before taking one. The measuring and sketching are hands-on (and shown in BAM's demonstrations), but the quizzes check only the method and the readings by multiple choice, so the course cannot certify that a student measured or sketched accurately.",
    },
    {
      code: "CCSS.Math.Content.4.MD.C.7",
      text: "Recognize angle measure as additive. When an angle is decomposed into non-overlapping parts, the angle measure of the whole is the sum of the angle measures of the parts. Solve addition and subtraction problems to find unknown angles on a diagram in real world and mathematical problems, e.g., by using an equation with a symbol for the unknown angle measure.",
      claimIds: ["catalog.declination-angle-addition"],
      coverage: "full",
      note: "Map and Compass lesson 16 is this standard on a real diagram: the grid-magnetic angle on the Hindustan quad is the sum of its two non-overlapping parts, 4°28' + 0°21' = 4°49', worked for three more quads and then solved for an unknown declination d in 4°49' = d + 0°21'; lessons 17 to 19 add and subtract the declination, 180° and 90° to convert and turn bearings. Each is graded by multiple choice on the computed angle.",
    },
    // ── Grade 5 · Geometry (Graph points on the coordinate plane to solve real-world and mathematical problems)
    {
      code: "CCSS.Math.Content.5.G.A.2",
      text: "Represent real world and mathematical problems by graphing points in the first quadrant of the coordinate plane, and interpret coordinate values of points in the context of the situation.",
      claimIds: ["catalog.utm-first-quadrant-coordinates"],
      coverage: "partial",
      note: "PARTIAL: the interpreting half is taught and graded in full, the graphing half is practiced but not graded. Map and Compass lesson 11 presents the UTM grid as a first-quadrant plane (easting as x, northing as y, both positive because of the false origin) and interprets coordinates on the ground: 546,000 m E is 46,000 m east of the central meridian, and two points differ by 1,300 m east and 400 m north. Lesson 34 plots a GPS fix on the map by finding its grid square and measuring in from the corner; that plotting is done on paper and assessed only through multiple choice on its arithmetic.",
    },
    // ── Grade 7 · Geometry (Draw, construct, and describe geometrical figures and describe the relationships between them)
    {
      code: "CCSS.Math.Content.7.G.A.1",
      text: "Solve problems involving scale drawings of geometric figures, including computing actual lengths and areas from a scale drawing and reproducing a scale drawing at a different scale.",
      claimIds: ["catalog.map-scale-actual-distance"],
      coverage: "partial",
      note: "PARTIAL: actual lengths and areas from a scale drawing are taught and graded; reproducing a scale drawing at a different scale is not. Map and Compass lesson 7 treats a topographic map as the scale drawing: 3.5 in at 1:24,000 is 7,000 ft, 6.2 cm is 1,488 m, 1,200 m on the ground is 5 cm on the map, a 1,000 m grid square is 1 km² (about 247 acres), and a map printed at 90 percent is no longer 1:24,000. Lessons 8 and 34 apply the same arithmetic to slope and to plotting. The course discusses a map printed at another size but never asks the student to redraw one.",
    },
    // ── Grade 8: Expressions and Equations ───────────────────────────────────────────────────
    {
      code: "CCSS.Math.Content.8.EE.A.3",
      text: "Use numbers expressed in the form of a single digit times an integer power of 10 to estimate very large or very small quantities, and to express how many times as much one is than the other. For example, estimate the population of the United States as 3 × 10⁸ and the population of the world as 7 × 10⁹, and determine that the world population is more than 20 times larger.",
      claimIds: ["catalog.slide-rule-powers-of-ten-estimate"],
      coverage: "full",
      note: "Cluster: Work with radicals and integer exponents. The Slide Rule makes this the habit every calculation starts from, because the rule shows figures and never the decimal point. Lesson 2 rounds each factor to one figure times a power of ten (63,200 × 0.0035 is about 6 × 10⁴ × 4 × 10⁻³, about 240); lesson 8 places every point that way, for very small results too (3.95 ÷ 5340 estimated as 0.0008), and compares two results by one-digit estimates (7 × 10⁷ against 8 × 10³, about 9,000 times as large); the capstone works thirteen problems estimate first. The quizzes test it directly with options a power of ten apart.",
    },
    {
      code: "CCSS.Math.Content.8.EE.A.4",
      text: "Perform operations with numbers expressed in scientific notation, including problems where both decimal and scientific notation are used. Use scientific notation and choose units of appropriate size for measurements of very large or very small quantities (e.g., use millimeters per year for seafloor spreading). Interpret scientific notation that has been generated by technology.",
      claimIds: ["catalog.slide-rule-scientific-notation"],
      coverage: "partial",
      note: "PARTIAL. Taught: multiplying and dividing in powers-of-ten form with decimal inputs (lesson 2: 6.32 × 10⁴ × 3.5 × 10⁻³ = 221.2; lesson 8: 17,300 × 3780 = 6.54 × 10⁷ and 0.00000285 ÷ 0.000197 = 1.446 × 10⁻²), and reading scientific notation generated by technology (lesson 21: the HP-35 display, power of ten in the three rightmost places). Not taught: choosing units of appropriate size for very large or very small measurements. Learners recognize correct results in multiple choice and are never asked to type one.",
    },
    // ── High School: Functions ────────────────────────────────────────────────────────────────
    {
      code: "CCSS.Math.Content.HSF-BF.B.5",
      text: "(+) Understand the inverse relationship between exponents and logarithms and use this relationship to solve problems involving logarithms and exponents.",
      claimIds: ["catalog.logarithms-as-exponents"],
      coverage: "partial",
      note: "PARTIAL, and a (+) standard, which the CCSS marks as \"Additional mathematics that students should learn in order to take advanced courses\" (high school introduction). The Slide Rule teaches the inverse relationship for base 10 only: a common logarithm is the exponent of 10 (lesson 1), read forward and backward on the L scale (lesson 11: log 265 = 2.423; the number whose logarithm is 3.697 is 4,980) and in a printed table (lesson 15), and used to raise numbers to powers and roots (lesson 12: 36 to the power 1.414 = 158.5). Not taught: other bases, the natural logarithm, or solving an equation for an unknown exponent. Problems are recognized in multiple choice, not produced.",
    },
    // ── Standards for Mathematical Practice ──────────────────────────────────────────────────
    {
      code: "CCSS.Math.Practice.MP5",
      text: "Use appropriate tools strategically. Mathematically proficient students consider the available tools when solving a mathematical problem. These tools might include pencil and paper, concrete models, a ruler, a protractor, a calculator, a spreadsheet, a computer algebra system, a statistical package, or dynamic geometry software. Proficient students are sufficiently familiar with tools appropriate for their grade or course to make sound decisions about when each of these tools might be helpful, recognizing both the insight to be gained and their limitations. For example, mathematically proficient high school students analyze graphs of functions and solutions generated using a graphing calculator. They detect possible errors by strategically using estimation and other mathematical knowledge. When making mathematical models, they know that technology can enable them to visualize the results of varying assumptions, explore consequences, and compare predictions with data. Mathematically proficient students at various grade levels are able to identify relevant external mathematical resources, such as digital content located on a website, and use them to pose or solve problems. They are able to use technological tools to explore and deepen their understanding of concepts.",
      claimIds: ["catalog.choosing-calculating-tools"],
      coverage: "partial",
      note: "PARTIAL. The Slide Rule is a course about one tool and its rivals, weighed by what each can and cannot do: the rule's three honest figures (lesson 9), what limits a rule (lesson 4), what the Apollo rule was and was not used for (lesson 20), alignment charts and circular calculators against straight rules (lessons 22 and 23), and what an electronic calculator does not do for you (lesson 21). Detecting errors by estimating first is taught as the habit of the whole course. Not taught: graphing calculators, spreadsheets, computer algebra, dynamic geometry, statistical packages, modeling with technology, or finding digital resources.",
    },
  ],
};
