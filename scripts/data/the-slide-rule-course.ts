import type { AuthoredCourse } from "./authored-course";

// "The Slide Rule" (Science & Math, also listed in Culture & History). Slug `the-slide-rule`.
// Series `tools-that-think` ("Tools That Think"), code TOOLS, position 02. TOOLS-01 is map and
// compass (built in a parallel branch); TOOLS-03 is surveying (brief written, not built).
//
// RESEARCH TIER 1 (docs/course-method/README.md): mathematics and history, nothing health, law,
// safety or money.
// Brief:   plans/future-courses/science-and-math/tool-usage/2026-10-14-slide-rule-brief.md
//          (approved by BAM 2026-10-14; his answers are in its final section: a basic Mannheim-type
//          rule, a lesson on what features to look for, trig and log-log scales out, a short E6B
//          lesson here, multiple-choice quizzes, the Oughtred and Delamain question taught as a
//          documented dispute, "slide rules got us to the Moon" corrected from the museum record).
// Dossier: plans/future-courses/science-and-math/tool-usage/2026-10-14-slide-rule-dossier.md
//          Every source below was fetched and read on 2026-10-14. Only VERIFIED lines are asserted.
//          Two locator corrections to the brief: Abramowitz and Stegun's printed pages sit 32 PDF
//          pages in (the brief said 33), and Cullimore's page 10 carries the square-root and
//          multiplication examples on an image page with no text layer (read from the page image).
//
// VISIBILITY: PUBLIC and free, HELD ("Coming soon") until BAM records the demonstrations the P
// lessons call for on a Mannheim-type rule. The publishHoldReason in scripts/seed-courses.ts says so.
// Also registered on the ElementaryMBA school (scripts/seed-speedway.ts, category STEAM), same module.
//
// MARKED LESSONS. Each starts its body with a "> **Before release:**" line (parsed by the seeder).
//   P (BAM's demonstration): 3, 4, 5, 6, 7, 10, 11, 12, 13, 15, 22, 25. Every P lesson still teaches
//   its operation fully in writing, so a learner without the video can follow it.
//
// ASSESSMENT: multiple choice only (BAM, brief question 3). A slide-rule reading is approximate and a
// typed answer is graded by exact match (src/lib/exercise.ts), so every numeric question's options
// differ by a power of ten (testing the decimal point) or by far more than a rule's reading error
// (testing the operation). Every worked number comes from Pickworth (1920) or Cullimore (1920), whose
// printed answers are public domain, or is plain arithmetic shown in the lesson.
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A, may be hosted on Cloudinary later: Pickworth 1920, Cullimore 1920 (K&E, copyright 1915,
//    1920), Lipka 1918, Cajori 1920 (all US publications of 1930 or earlier); Napier 1614 and 1617 and
//    Macdonald's 1889 translation (archive.org: public domain, not in copyright); Cajori 1909 in the
//    International Slide Rule Museum transcription (Public Domain Mark); Abramowitz and Stegun 1964
//    (NBS, public domain); NASA, NIST and FAA pages (federal works).
//  - Tier B, link only: the Smithsonian object records (record text is CC0 per the Open Access API,
//    images not checked, so linked rather than hosted); the National Air and Space Museum record
//    ("Usage conditions apply"); Oughtred 1632 (a 1632 work, but the archive.org copy is an Early
//    English Books microfilm scan whose own rights were not checked, so linked only).
//  - Tier C, cite by title only, never linked or quoted: BAM's two Mannheim-type instruction booklets
//    (Frederick Post Company; Acu-Rule Manufacturing Co., no. 44). Neither title page carries a date
//    or a copyright notice, so public domain is not shown. Only their title pages were looked at.
//
// PRIVATE COURSES NAMED, NOT LINKED: Who Were the Computers and Construction Math are private and 404
// to learners, so they are named in plain text as courses in preparation (BAM wants them shown once
// they open; how they appear before then is his decision).
//
// STANDARDS: CCSS 8.EE.A.3, 8.EE.A.4 (partial), HSF-BF.B.5 (partial), HSN-Q.A.3 and MP5 (partial),
// through five claims in src/lib/standards/claims.ts mapped in shared/common-core-math.ts.
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts):
//  - L24: that the E6B's computational scales are logarithmic (derived here from how it solves a
//    proportion; the FAA handbook calls it a mechanical flight computer and does not say).
//  - L21: when Keuffel & Esser made its last slide rule (only the 1970 Hoboken closure is verified).
//  - L11: where the L scale sits on BAM's own rule (face, or back of the slide), for the P video.
//
// House style, matching stage-and-broadcast-rigging-course.ts: `section` on every lesson; flush-left
// single-line `:::reveal q ||| a`; recallContent from the second teaching lesson on, quizzing the
// lesson before; an APA 7 `## Sources` block on every teaching lesson with a locator and a tier on
// every entry (printed page AND PDF page where they differ); a quiz per section pooled to
// round(words / 35), clamped 40 to 100, serving 5, passing 80, shuffled; a final pooling 40+ and
// serving 10, placed last. Options within a question are written to the same length, so no length
// position gives the answer away. Formulas are plain text (the app renders no equations). American
// spelling in prose; quotations keep their own spelling. No em or en dashes anywhere.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const PICKWORTH =
  "Pickworth, C. N. (1920). *The slide rule: A practical manual* (17th ed.). Emmott; D. Van Nostrand. https://archive.org/details/cu31924003979105";
const CULLIMORE =
  "Cullimore, A. R. (1920). *The use of the slide rule* (2nd ed.). Keuffel & Esser. https://archive.org/details/useofsliderule00cullrich";
const LIPKA =
  "Lipka, J. (1918). *Graphical and mechanical computation*. John Wiley. https://archive.org/details/graphicalmechani00lipk";
const CAJORI_1920 =
  "Cajori, F. (1920). On the history of Gunter's scale and the slide rule during the seventeenth century. *University of California Publications in Mathematics, 1*(9), 187-209. https://archive.org/details/113597_001_009";
const CAJORI_1909 =
  "Cajori, F. (n.d.). *History of the logarithmic slide rule* [Transcription of the 1909 edition by the International Slide Rule Museum; page numbers are the transcription's own]. Internet Archive. https://archive.org/details/cajori (Original work published 1909)";
const MACDONALD =
  "Napier, J. (1889). *The construction of the wonderful canon of logarithms* (W. R. Macdonald, Trans.). Blackwood. https://archive.org/details/constructionofwo00napiuoft (Original work published 1619)";
const NAPIER_1614 =
  "Napier, J. (1614). *Mirifici logarithmorum canonis descriptio*. A. Hart. https://archive.org/details/mirificilogarit00napi";
const NAPIER_1617 =
  "Napier, J. (1617). *Rabdologiae, seu numerationis per virgulas libri duo*. A. Hart. https://archive.org/details/rabdologiaseunu00napi";
const OUGHTRED_1632 =
  "Oughtred, W. (1632). *The circles of proportion and the horizontall instrument* [Microfilm scan, Early English Books 1475-1640]. Internet Archive. https://archive.org/details/bim_early-english-books-1475-1640_the-circles-of-proportio_oughtred-william_1632";
const AS_1964 =
  "Abramowitz, M., & Stegun, I. A. (Eds.). (1964). *Handbook of mathematical functions with formulas, graphs, and mathematical tables* (Applied Mathematics Series 55). National Bureau of Standards. https://archive.org/details/handbookofmathem1964abra";
const NIST_MTP =
  "National Institute of Standards and Technology. (2022a, March 11). *Prehistory: The Math Tables Project*. https://www.nist.gov/mathematics-statistics/prehistory-math-tables-project";
const NIST_HMF =
  "National Institute of Standards and Technology. (2022b, March 14). *Handbook of Mathematical Functions: Abramowitz and Stegun*. https://www.nist.gov/mathematics-statistics/handbook-mathematical-functions-abramowitz-and-stegun";
const LOFF =
  "Loff, S. A. (2016, November 25). *When the computer wore a skirt: Langley's computers, 1935-1970*. NASA. https://www.nasa.gov/history/langleys-computers-1935-1970/";
const NASM_APOLLO =
  "National Air and Space Museum. (n.d.). *Slide rule, 5-inch, Pickett N600-ES, Apollo 13* (Inventory No. A19840160000). Smithsonian Institution. https://airandspace.si.edu/collection-objects/slide-rule-5-inch-pickett-n600-es-apollo-13/nasm_A19840160000";
const NMAH = "National Museum of American History. (n.d.";
const NMAH_RODS = `${NMAH}-a). *Napier's rods* (ID MA.316584). Smithsonian Institution. https://n2t.net/ark:/65665/ng49ca746a5-0a63-704b-e053-15f76fa0b4fa`;
const NMAH_GUNTER = `${NMAH}-b). *Gunter's scale signed Merrifield & Co.* (ID MA.318174). Smithsonian Institution. https://n2t.net/ark:/65665/ng49ca746a9-af13-704b-e053-15f76fa0b4fa`;
const NMAH_N600 = `${NMAH}-c). *Pickett N600-ES log log duplex slide rule* (ID 1998.0119.02). Smithsonian Institution. https://n2t.net/ark:/65665/ng49ca746a5-5178-704b-e053-15f76fa0b4fa`;
const NMAH_HP35 = `${NMAH}-d). *Hewlett-Packard HP-35 handheld electronic calculator* (ID 1982.0222.01). Smithsonian Institution. https://n2t.net/ark:/65665/ng49ca746a1-3458-704b-e053-15f76fa0b4fa`;
const NMAH_ANALON = `${NMAH}-e). *Keuffel & Esser 68-1400 Analon simplex slide rule* (ID MA.333923). Smithsonian Institution. https://n2t.net/ark:/65665/ng49ca746a9-abe2-704b-e053-15f76fa0b4fa`;
const NMAH_904 = `${NMAH}-f). *Pickett 904-ES Decimal Keeper duplex slide rule* (ID 1995.0126.01). Smithsonian Institution. https://n2t.net/ark:/65665/ng49ca746a5-1ca4-704b-e053-15f76fa0b4fa`;
const FAA_PHAK =
  "Federal Aviation Administration. (2023). Navigation. In *Pilot's handbook of aeronautical knowledge* (FAA-H-8083-25C, chap. 16). https://www.faa.gov/sites/faa.gov/files/18_phak_ch16.pdf";
const POST_BOOKLET =
  "Frederick Post Company. (n.d.). *How to operate the Mannheim-type slide rule* [Instruction booklet].";
const ACU_BOOKLET =
  "Acu-Rule Manufacturing Co. (n.d.). *Acu-Math self-teaching instruction manual no. 44: Mannheim type slide rule*.";

/** Tier notes appended to each Sources entry (the source-hosting rule in CLAUDE.md). */
const TA = "Tier A (out of copyright or a federal work; may be hosted).";
const TB = "Tier B (link only, never rehost).";
const TC = "Tier C (cite by title only; no link, no copy).";

/** The marker every lesson needing BAM's demonstration opens with (parsed by the seeder). */
const P = (what: string) => `> **Before release:** needs a practitioner or BAM's demonstration: ${what}.`;

export const THE_SLIDE_RULE_COURSE: AuthoredCourse = {
  title: "The Slide Rule",
  description:
    "Learn to multiply, divide, square, take square roots and read common logarithms on a basic Mannheim-type slide rule, to place the decimal point by estimating first, and to say how many figures an answer is good for. The course starts with why it works (every number sits at a distance from 1 proportional to its logarithm, so sliding one length along another adds logarithms, and adding logarithms multiplies), has you build a paper rule, and teaches what to look for in a rule of your own. Then it goes back to what came before and after: Napier's rods and his 1614 table, Briggs's base-10 logarithms, printed log tables and the human computers who made them, Gunter's line of numbers, the Oughtred and Delamain dispute read from both men's own words, Mannheim's runner, slide rules at Langley and on Apollo (and what they were not used for), the handheld calculator that ended the era, nomograms, circular rules and the pilot's E6B. Every worked example comes from two public-domain manuals of 1920. Trigonometric and log-log scales are named but not taught. The second course in the Tools That Think series.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: Why it works
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "multiplying-by-adding",
      title: "1 · Multiplying by adding",
      section: "1 · Why it works: logarithms made physical",
      body: `**What this course is for.** By the end you should be able to pick up a basic slide rule of the Mannheim layout, with scales lettered A, B, C, D and L, and multiply, divide, square, take square roots and read common logarithms on it. You should be able to place the decimal point by estimating first, say how many figures your answer is good for, and explain in one sentence why the instrument works. The last three sections tell where it came from and what replaced it.

**What a slide rule is.** Charles Pickworth's manual of 1920 opens with a definition: the slide rule is "an instrument for mechanically effecting calculations by logarithms." To anyone who knows logarithms, he adds, it "provides what is in effect a concisely arranged table of logarithms, together with a simple and convenient means for adding and subtracting any selected values."

**What a logarithm is.** Pickworth's working definition: "The common logarithm of a number is the index of the power to which 10 must be raised to equal the given number." Because 100 is 10 squared, the common logarithm of 100 is 2. The logarithm of 1,000 is 3, of 10 is 1, and of 1 is 0. A number between 1 and 10 has a logarithm between 0 and 1. Pickworth prints them to three places:

| Number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Logarithm | 0 | 0.301 | 0.477 | 0.602 | 0.699 | 0.778 | 0.845 | 0.903 | 0.954 | 1.000 |

**The trick.** Add two logarithms and you get the logarithm of the product. Pickworth's example: log 2 + log 4 = 0.301 + 0.602 = 0.903, "and this is seen to be the logarithm of 8, that is, of 2 × 4." Subtract instead and you divide: log 8 minus log 2 = 0.602, the logarithm of 4. Multiply a logarithm by 2 and you square the number (0.477 × 2 = 0.954, the logarithm of 9); divide it by 3 and you take a cube root (0.903 / 3 = 0.301, the logarithm of 2). In symbols, written out plainly: log (a × b) = log a + log b.

**The one sentence.** A slide rule marks every number at a distance from 1 proportional to its logarithm. Sliding one scale along another adds two such distances, so it adds logarithms, and adding logarithms multiplies the numbers. Lesson 3 has you build one to see it happen.

**Where else the idea lives.** The decibel is a logarithmic scale: *Sound Craft* lesson "1 · Frequency, level and the decibel" applies the same idea to loudness. And modern statistics still turns products into sums for the same reason the slide rule does: *Computational Neuroscience Foundations* lesson "7 · Least squares, likelihood, and what best fit asserts" maximizes a log-likelihood partly because "a sum of logarithms is far easier to differentiate than a product.".

:::reveal Using Pickworth's table, which number's logarithm do you get by adding log 2 and log 4? ||| 8: 0.301 + 0.602 = 0.903, the logarithm of 8, because 2 × 4 = 8.

:::reveal What happens to a number when you double its logarithm? ||| It is squared: 0.477 × 2 = 0.954, and 0.954 is the logarithm of 9, the square of 3.

## Sources
- ${PICKWORTH} Locator: p. 5 (PDF p. 11), the definition; p. 6 (PDF p. 12), the definition of a common logarithm and the table for 1 to 10; p. 7 (PDF p. 13), log 2 + log 4; p. 8 (PDF p. 14), powers and roots by multiplying and dividing logarithms. ${TA}`,
    },
    {
      slug: "powers-of-ten-and-the-decimal-point",
      title: "2 · Powers of ten and the decimal point",
      section: "1 · Why it works: logarithms made physical",
      recallContent: [
        {
          prompt: "How does Pickworth define the common logarithm of a number?",
          answer: "\"The index of the power to which 10 must be raised to equal the given number.\" So log 100 = 2 and log 1,000 = 3.",
        },
        {
          prompt: "Why does adding two logarithms multiply the numbers?",
          answer: "The sum of two logarithms is the logarithm of the product: log 2 + log 4 = 0.903 = log 8.",
        },
      ],
      body: `**The same figures, a different size.** Pickworth's table of logarithms stops at 10, and he explains why it can. Multiply 3 by ten again and again:

| Number | 3 | 30 | 300 | 3,000 | 30,000 |
|---|---|---|---|---|---|
| Logarithm | 0.477 | 1.477 | 2.477 | 3.477 | 4.477 |

The decimal part, which Pickworth calls the **mantissa**, stays the same for every number with the same significant figures. Only the whole-number part, the **characteristic**, changes, and it is "always one less than the number of figures before the decimal point." So 300 has three figures before the point and a characteristic of 2.

**Below 1.** For 0.3, 0.03 and 0.003 the mantissa is still 0.477. The characteristic turns negative and counts the zeros: Pickworth's rule is that it is "one more than the number of 0's immediately following the decimal point." The characteristic of 0.03 is minus 2.

**Why a slide rule never shows the decimal point.** A rule only has room for the mantissa: its scales run once from 1 to 10. Allan Cullimore's 1920 manual for Keuffel & Esser puts it bluntly: "The reading on the rule would be the same for each of these numbers 1751, .1751, 17.51." The rule gives "a succession of figures in their proper order, but without determining the decimal point." Placing it is your job, done separately, in exactly the way a characteristic is worked out separately from a table.

**Powers of ten.** Pickworth recommends writing any number as its significant figures times a power of ten, with the point moved to sit just after the first figure: 3,610,000 is 3.61 × 10⁶, and 0.0000361 is 3.61 × 10⁻⁵. The exponent counts how far the point moved, positive for numbers greater than 1 and negative for numbers less than 1. His worked example: 63,200 × 0.0035 is 6.32 × 10⁴ × 3.5 × 10⁻³, which is 6.32 × 3.5 × 10¹, or 22.12 × 10, or 221.2. The rule multiplies the 6.32 by the 3.5; the powers of ten you add in your head (4 plus minus 3 is 1).

**Estimating with one digit.** The same habit gives a fast estimate. Round each number to one figure times a power of ten: 63,200 is about 6 × 10⁴ and 0.0035 is about 4 × 10⁻³, so the product is about 24 × 10¹, roughly 240. The true answer, 221.2, is the same size. Lesson 8 turns this into the method for placing every decimal point on the rule.

:::reveal What is the characteristic of the logarithm of 3,000? ||| 3: one less than the four figures before the decimal point. The mantissa is 0.477, the same as for 3.

:::reveal Write 63,200 × 0.0035 in powers of ten as Pickworth does. ||| 6.32 × 10⁴ × 3.5 × 10⁻³ = 6.32 × 3.5 × 10¹ = 22.12 × 10 = 221.2.

## Sources
- ${PICKWORTH} Locator: p. 7 (PDF p. 13), mantissa and characteristic for numbers above and below 1; pp. 8 to 9 (PDF pp. 14 to 15), notation by powers of 10 and the 63,200 × 0.0035 example. ${TA}
- ${CULLIMORE} Locator: p. 7 (PDF p. 11), "Decimal point and reading the scale". ${TA}`,
    },
    {
      slug: "make-a-paper-slide-rule",
      title: "3 · Make a paper slide rule",
      section: "1 · Why it works: logarithms made physical",
      recallContent: [
        {
          prompt: "Why do 3, 30 and 300 share the mantissa 0.477?",
          answer: "They have the same significant figures. Only the characteristic changes, one less than the number of figures before the decimal point: 0, 1 and 2.",
        },
        {
          prompt: "What does Cullimore say a slide rule cannot show?",
          answer: "The decimal point: the reading is the same for 1751, .1751 and 17.51, so the point is placed separately.",
        },
      ],
      body: `${P("BAM making Pickworth's card rule on camera, measuring the ten marks with a ruler and working 2 × 3 and 6 ÷ 3 on it")}

**Adding with two rulers.** Pickworth starts with two ordinary rules, each divided into ten equal parts. Slide the lower one along until its 0 sits under 3 on the upper one: now every number on the upper rule is the number below it plus 3, so 7 sits over 4. "By moving B to the right, we add to a length 0.3, another length 0.4, the result read off on A being 7." A pair of rulers with equal divisions is an adding machine.

**Make the divisions logarithmic and the same move multiplies.** Pickworth's instructions for "a simple form of slide rule": take a strip of card about 11 inches long and 2 inches wide, draw a line down the middle, and mark two points 10 inches apart. Label them 1 and 10 on both sides of the line. Then measure from the 1 and mark these distances:

| Mark | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|
| Inches from 1 | 3.01 | 4.77 | 6.02 | 6.99 | 7.78 | 8.45 | 9.03 | 9.54 |

Each distance is the logarithm from lesson 1 times 10. For finer marks, take the logarithms of 1.1, 1.2, 1.3 and so on from a table, multiply each by 10, and mark them shorter, "as with an ordinary measuring rule." Then cut the card cleanly along the center line. You now hold two identical scales.

**No inch ruler?** Pickworth adds that "the length of scale taken to represent a unit is quite arbitrary." Multiply each logarithm by 25 instead of 10 and mark centimeters: 2 at 7.5 cm, 3 at 11.9 cm, 4 at 15.1 cm, 5 at 17.5 cm, 10 at 25 cm. Any length works as long as every mark uses the same one.

**Multiply 2 × 3.** Place the 1 of the lower strip against the 2 of the upper strip. Look along the lower strip to its 3: above it, on the upper strip, sits 6. You have added 3.01 inches to 4.77 inches and landed on 7.78 inches, which is the mark you labeled 6. In Pickworth's words, "the distance of any number from 1 is proportional to the logarithm of that number," and that one sentence is "the fundamental principle of the slide rule."

**Divide 6 ÷ 3.** Reverse it: set the lower 3 against the upper 6, and read the upper strip over the lower 1. It says 2. Subtracting a length subtracts a logarithm, and that divides.

**Try it.** With the lower 1 still against the upper 2, read over the lower 4 (you should find 8) and over the lower 5 (10, the end of the strip). Over the lower 6 there is no upper scale left. Lesson 6 shows what a real rule does about that.

:::reveal On Pickworth's card rule, how far from the 1 is the mark for 5? ||| 6.99 inches: the logarithm of 5, 0.699, times 10.

:::reveal How do you divide 6 by 3 on two logarithmic strips? ||| Set the lower 3 against the upper 6 and read the upper strip over the lower 1: it shows 2.

## Sources
- ${PICKWORTH} Locator: pp. 9 to 10 (PDF pp. 15 to 16), the two equally divided rules and "quite arbitrary"; pp. 10 to 11 (PDF pp. 16 to 17), the card rule, its eight distances, the fundamental principle, 2 × 3 and 6 ÷ 3. ${TA}`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Why it works",
      section: "1 · Why it works: logarithms made physical",
      body: "A graded check on what a logarithm is, why adding logarithms multiplies, the mantissa and the characteristic, powers of ten, and the paper slide rule. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "How does Pickworth's 1920 manual define the slide rule?", options: ["An instrument for effecting calculations by logarithms", "A ruler for measuring lengths to a hundredth of an inch", "A device that counts with beads strung on parallel rods", "A geared machine that adds by turning numbered wheels"], correctIndex: 0, explanation: "Lesson 1: \"an instrument for mechanically effecting calculations by logarithms.\"", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "What is the common logarithm of 1,000?", options: ["30", "100", "3", "0.3"], correctIndex: 2, explanation: "1,000 is 10 to the third power, so its common logarithm is 3 (lesson 1).", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "Which number has a common logarithm of 0?", options: ["10", "1", "0", "100"], correctIndex: 1, explanation: "10 to the power 0 is 1, so log 1 = 0. Log 10 is 1 and log 100 is 2 (lesson 1).", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "Adding log 2 and log 4 gives what?", options: ["The logarithm of 6", "The logarithm of 16", "The logarithm of 2", "The logarithm of 8"], correctIndex: 3, explanation: "0.301 + 0.602 = 0.903, \"the logarithm of 8, that is, of 2 × 4\" (lesson 1).", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "Subtracting log 2 from log 8 gives the logarithm of which number?", options: ["4", "6", "16", "10"], correctIndex: 0, explanation: "0.903 minus 0.301 = 0.602, the logarithm of 4, because 8 ÷ 2 = 4. Subtracting logarithms divides (lesson 1).", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "Doubling the logarithm of a number does what to the number?", options: ["Halves it", "Squares it", "Doubles it", "Cubes it"], correctIndex: 1, explanation: "Log 3 × 2 = 0.954, the logarithm of 9, which is 3 squared (lesson 1).", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "Dividing the logarithm of 8 by 3 gives the logarithm of what?", options: ["2.67, a third of 8", "5, which is 8 minus 3", "2, the cube root of 8", "24, which is 8 times 3"], correctIndex: 2, explanation: "0.903 ÷ 3 = 0.301, the logarithm of 2, and 2 is the cube root of 8 (lesson 1).", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "Between which values does the logarithm of a number between 1 and 10 lie?", options: ["Between 1 and 10", "Between 10 and 100", "Between minus 1 and 0", "Between 0 and 1"], correctIndex: 3, explanation: "Log 1 is 0 and log 10 is 1, so every number between them has a logarithm between 0 and 1 (lesson 1).", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "To three places, what is the common logarithm of 2?", options: ["0.301", "0.477", "0.602", "0.699"], correctIndex: 0, explanation: "Pickworth's table: log 2 = 0.301. The others are log 3, log 4 and log 5 (lesson 1).", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "Pickworth's table gives log 3 as 0.477. What is log 9?", options: ["1.431", "0.699", "0.954", "0.845"], correctIndex: 2, explanation: "9 is 3 squared, so log 9 is twice log 3: 0.954 (lesson 1). 1.431 would be three times log 3, the log of 27.", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "Which sentence explains why a slide rule multiplies?", options: ["Sliding multiplies the lengths of the two scales together", "Each mark sits at a distance equal to the number it shows", "Gears under the slide turn a counter as the cursor moves", "Sliding adds distances that stand for logarithms of numbers"], correctIndex: 3, explanation: "Every number sits at a distance from 1 proportional to its logarithm, so sliding adds logarithms, and adding logarithms multiplies (lesson 1).", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "Which catalog lesson applies the logarithmic idea to loudness?", options: ["Sound Craft, its lesson on the decibel", "How to Read a Number, a margin of error", "Who Gets the Credit, the free patentees", "Wrong for Good Reasons, geocentrism"], correctIndex: 0, explanation: "Sound Craft lesson 1 teaches the decibel, a logarithmic scale (lesson 1).", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "Why does Computational Neuroscience Foundations maximize a log-likelihood?", options: ["A product of logs is easier to graph", "A sum of logs is easier to differentiate", "The logarithm removes all of the noise", "Logarithms make every probability equal"], correctIndex: 1, explanation: "Its lesson 7: \"a sum of logarithms is far easier to differentiate than a product,\" the slide rule's idea still at work (lesson 1).", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "Written plainly, which identity does the slide rule rely on?", options: ["log (a + b) = log a × log b", "log (a × b) = log a × log b", "log (a × b) = log a + log b", "log (a + b) = log a + log b"], correctIndex: 2, explanation: "The logarithm of a product is the sum of the logarithms: log (a × b) = log a + log b (lesson 1).", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "Pickworth says a slide rule is in effect a concisely arranged what?", options: ["Set of fractions", "Book of squares", "List of multiples", "Table of logarithms"], correctIndex: 3, explanation: "\"In effect a concisely arranged table of logarithms, together with a simple and convenient means for adding and subtracting any selected values\" (lesson 1).", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "Which scales does lesson 1 say a basic Mannheim-layout rule carries?", options: ["S, T and log-log", "A, B, C, D and L", "Only C and D", "K, CI and LL3"], correctIndex: 1, explanation: "The course teaches a basic rule of the Mannheim layout, with scales lettered A, B, C, D and L (lesson 1). Trig and log-log scales are left out.", sourceLessonSlug: "multiplying-by-adding" },
          { prompt: "What does Pickworth call the decimal part of a logarithm?", options: ["The characteristic", "The mantissa", "The index line", "The exponent"], correctIndex: 1, explanation: "\"The decimal part or mantissa of the logarithm is the same\" for numbers with the same significant figures (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "What does Pickworth call the whole-number part of a logarithm?", options: ["The mantissa", "The radix point", "The characteristic", "The significand"], correctIndex: 2, explanation: "The integral part, or characteristic, changes with the size of the number while the mantissa stays put (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "What is the characteristic of the logarithm of 300?", options: ["3", "0", "1", "2"], correctIndex: 3, explanation: "One less than the three figures before the decimal point: 2. Log 300 = 2.477 (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "What mantissa do 3, 30 and 300 share?", options: ["0.300", "0.030", "0.003", "0.477"], correctIndex: 3, explanation: "Same significant figures, same mantissa: 0.477, 1.477 and 2.477 differ only in the characteristic (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "What is the characteristic of the logarithm of 0.03?", options: ["Minus 2", "Minus 1", "Plus 2", "Plus 3"], correctIndex: 0, explanation: "One more than the single 0 after the decimal point, and negative: minus 2 (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "For a number below 1, how does Pickworth find the characteristic?", options: ["One less than the figures before the point, positive", "One more than the zeros after the point, negative", "The number of figures after the point, positive", "The number of zeros after the point, positive"], correctIndex: 1, explanation: "\"One more than the number of 0's immediately following the decimal point, and is negative\" (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "Why does a slide rule never show the decimal point?", options: ["The point is printed only on the back of the slide", "The cursor hides the point to keep the scale clear", "Its scales run once from 1 to 10, so only figures show", "The point appears only on the upper A and B scales"], correctIndex: 2, explanation: "The scales hold only significant figures from 1 to 10, so the point is placed separately, like a characteristic (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "In Cullimore's example, which numbers give the same reading on the rule?", options: ["1751, 1752 and 1753", "17.51, 175.2 and 1.753", "1751, 5171 and 7151", "1751, .1751 and 17.51"], correctIndex: 3, explanation: "\"The reading on the rule would be the same for each of these numbers 1751, .1751, 17.51\" (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "Who places the decimal point in a slide-rule answer?", options: ["You do, separately", "The cursor does", "The A scale does", "The maker does"], correctIndex: 0, explanation: "The rule gives \"a succession of figures in their proper order, but without determining the decimal point,\" so you place it yourself (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "How does Pickworth write 3,610,000 in powers of ten?", options: ["3.61 × 10⁵", "3.61 × 10⁶", "36.1 × 10⁴", "3.61 × 10⁷"], correctIndex: 1, explanation: "Move the point six places to sit after the 3: 3.61 × 10⁶ (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "How is 0.0000361 written in Pickworth's notation?", options: ["3.61 × 10⁻⁴", "3.61 × 10⁵", "3.61 × 10⁻⁵", "3.61 × 10⁻⁶"], correctIndex: 2, explanation: "The point moves five places to the right to sit after the 3, so the exponent is minus 5 (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "In Pickworth's notation, which sign does the exponent take for a number less than 1?", options: ["Positive", "Zero", "It varies", "Negative"], correctIndex: 3, explanation: "The index is \"positive for numbers greater than 1, and negative for numbers less than 1\" (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "What is 63,200 × 0.0035, as Pickworth works it?", options: ["221.2", "22.12", "2,212", "2.212"], correctIndex: 0, explanation: "6.32 × 10⁴ × 3.5 × 10⁻³ = 22.12 × 10¹ = 221.2 (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "In 6.32 × 10⁴ × 3.5 × 10⁻³, which part does the rule itself multiply?", options: ["10⁴ by 10⁻³", "6.32 by 3.5", "All four numbers", "Only the exponents"], correctIndex: 1, explanation: "The rule multiplies the significant figures, 6.32 by 3.5; the powers of ten are added in your head (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "Rounding each number to one figure, about how big is 63,200 × 0.0035?", options: ["About 24", "About 2,400", "About 240", "About 24,000"], correctIndex: 2, explanation: "6 × 10⁴ times 4 × 10⁻³ is 24 × 10¹, about 240. The true answer, 221.2, is the same size (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "What does the exponent in a power of ten count?", options: ["How many figures the number has", "How many zeros follow the 1", "How many times it is squared", "How far the decimal point moved"], correctIndex: 3, explanation: "The index is \"the number of places the decimal point has been moved\" (lesson 2).", sourceLessonSlug: "powers-of-ten-and-the-decimal-point" },
          { prompt: "How long and wide is the card in Pickworth's paper slide rule?", options: ["About 11 in. by 2 in.", "About 6 in. by 1 in.", "About 20 in. by 4 in.", "About 11 cm by 2 cm"], correctIndex: 0, explanation: "\"Take a strip of card about 11in. long and 2in. wide\" (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "How far apart does Pickworth mark the 1 and the 10 on the card?", options: ["5 inches", "10 inches", "11 inches", "2 inches"], correctIndex: 1, explanation: "Two points 10 inches apart, labeled 1 and 10 (lesson 3). The card itself is about 11 inches long.", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "On the card rule, how far from the 1 is the mark for 2?", options: ["2.00 inches", "4.77 inches", "3.01 inches", "5.00 inches"], correctIndex: 2, explanation: "Log 2 is 0.301; times 10 is 3.01 inches (lesson 3). 4.77 inches is the mark for 3.", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "On the card rule, which number is marked 9.03 inches from the 1?", options: ["9", "7", "6", "8"], correctIndex: 3, explanation: "Log 8 is 0.903, so 8 sits at 9.03 inches (lesson 3). The 9 is at 9.54.", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "How is each distance on the card rule found?", options: ["The logarithm times 10", "The number times 10", "The square of the number", "The number divided by 10"], correctIndex: 0, explanation: "Each distance is the number's logarithm times 10, because 1 and 10 sit 10 inches apart (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "With the lower 1 set against the upper 2, what sits over the lower 3?", options: ["5", "6", "1.5", "8"], correctIndex: 1, explanation: "3.01 inches plus 4.77 inches lands on 7.78 inches, the mark labeled 6: 2 × 3 = 6 (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "To divide 6 by 3 on the strips, what do you set against what?", options: ["The lower 6 against the upper 3", "The lower 1 against the upper 6", "The lower 3 against the upper 6", "The lower 1 against the upper 3"], correctIndex: 2, explanation: "Set the lower 3 against the upper 6 and read the upper strip over the lower 1: it shows 2 (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "What does Pickworth call \"the fundamental principle of the slide rule\"?", options: ["Every scale is divided into ten exactly equal spaces", "The slide always moves to the right to multiply", "Each scale is twice as long as the scale above it", "A number's distance from 1 is proportional to its log"], correctIndex: 3, explanation: "\"The distance of any number from 1 is proportional to the logarithm of that number\" (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "What do two rulers with equally spaced divisions do when one slides along the other?", options: ["They add numbers", "They multiply numbers", "They square numbers", "They take logarithms"], correctIndex: 0, explanation: "With 0 of one under 3 of the other, every reading is the number below plus 3: equal divisions add (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "Why can the card rule be made in centimeters instead of inches?", options: ["Centimeter scales are always more accurate than inch", "The unit length is arbitrary, if used for every mark", "Logarithms are defined only in metric units of length", "Pickworth's marks were centimeters to begin with"], correctIndex: 1, explanation: "\"The length of scale taken to represent a unit is quite arbitrary,\" as long as every mark uses the same one (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "Multiplying each logarithm by 25 and marking centimeters, where does the 10 go?", options: ["10 cm from the 1", "100 cm from the 1", "25 cm from the 1", "2.5 cm from the 1"], correctIndex: 2, explanation: "Log 10 is 1, and 1 × 25 = 25 cm (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "With the lower 1 against the upper 2, what is over the lower 4?", options: ["6", "2", "16", "8"], correctIndex: 3, explanation: "The setting multiplies everything on the lower strip by 2, so 4 reads 8 (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "With the lower 1 against the upper 2, why is nothing read over the lower 6?", options: ["The upper scale ends at 10", "The lower scale has no 6", "The answer would be negative", "The strips must be reversed"], correctIndex: 0, explanation: "2 × 5 already reaches the upper 10, so 2 × 6 runs off the end. Lesson 6 shows what a real rule does about it (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "Multiplying 2 × 3 on the card adds which two lengths?", options: ["2 in. and 3 in.", "3.01 in. and 4.77 in.", "6.02 in. and 4.77 in.", "3.01 in. and 7.78 in."], correctIndex: 1, explanation: "3.01 inches (the 2) plus 4.77 inches (the 3) reaches 7.78 inches, the mark for 6 (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "How does Pickworth say the finer marks such as 1.1 and 1.2 should look?", options: ["Longer than the main marks", "In red ink, to stand out", "Shorter, as on a measuring rule", "Left off the card entirely"], correctIndex: 2, explanation: "Mark them shorter \"to facilitate reading, as with an ordinary measuring rule\" (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "On Pickworth's two equally divided rules, with 0 of the lower under 3 of the upper, what is over 4?", options: ["12", "1", "4", "7"], correctIndex: 3, explanation: "\"Opposite 4 on B is 7 on A\": the lower rule adds 3 to every reading (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "Which number is the 6.99-inch mark on the card rule labeled?", options: ["5", "7", "6", "4"], correctIndex: 0, explanation: "Log 5 is 0.699, so 5 sits at 6.99 inches (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
          { prompt: "Subtracting a length on logarithmic strips does what to the numbers?", options: ["Multiplies them", "Divides them", "Adds them", "Squares them"], correctIndex: 1, explanation: "Subtracting a length subtracts a logarithm, and that divides (lesson 3).", sourceLessonSlug: "make-a-paper-slide-rule" },
        ],
      },
    },
    // SECTION_2_LESSONS
  ],
};
