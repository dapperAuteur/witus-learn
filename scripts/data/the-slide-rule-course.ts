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
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: The instrument in your hands
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-to-look-for-in-a-rule",
      title: "4 · What to look for in a basic rule",
      section: "2 · The instrument in your hands",
      recallContent: [
        {
          prompt: "On Pickworth's card rule, how is each mark's distance from 1 found?",
          answer: "Its logarithm times 10, with 1 and 10 placed 10 inches apart (2 at 3.01 inches, 3 at 4.77 inches).",
        },
        {
          prompt: "How do you multiply 2 × 3 on two logarithmic strips?",
          answer: "Set the lower 1 against the upper 2 and read the upper strip over the lower 3: it shows 6.",
        },
      ],
      body: `${P("BAM showing the features of his own Mannheim-type rule on camera: the four face scales and any extra ones, the length of the scale, the cursor and its hairline, how the slide fits, and the index check described below")}

**What this lesson is.** A checklist for choosing or inspecting a basic rule, drawn from two manuals of 1920 and from museum records of later rules. It names no maker and recommends none. If you already own a rule, use it to inspect yours.

**1. The scales.** A Mannheim-type rule carries four scales on its face. Pickworth: the upper and lower ones are on the stock, the middle two on the slide, lettered A and B above, C and D below. "The two upper sets of graduations are exactly alike in every particular, and the lower sets are also similar." A and B each hold two copies of the 1-to-10 scale end to end; C and D hold one. Cullimore describes a variant with a fifth scale on the face, and many rules add a scale of reciprocals (CI), a scale of cubes (K) and a scale of equal parts for logarithms (L). This course teaches A, B, C, D and L, with CI and K as short notes. Trigonometric scales (S and T) and log-log scales are not taught.

**2. The length.** "The most generally used, and on the whole the most convenient size of rule, is about 10½ in. long," Pickworth writes, though 5, 8, 15, 20, 24 and 40 inch rules were also made. Length matters because "the degree of accuracy obtainable with the slide rule depends primarily upon the length of the scale employed." A short rule crowds its marks: Pickworth describes a magnifying cursor of power about 2 that lets a 5-inch rule "having the same number of graduations as a 10in. rule" be read "with equal facility." For learning, a 10-inch scale is the one both manuals assume.

**3. The cursor.** Pickworth's cursor is "a light metal frame moving under spring control" carrying glass, mica or transparent celluloid with "a fine reference line" drawn "exactly at right angles to the line of scales." Look for a line that is "sharp and fine," and a cursor and slide that "move smoothly or good work cannot be done."

**4. The materials and the face.** In 1920 the usual rule was wood (boxwood or mahogany) faced with white celluloid, "the white surface of which brings out the graduations much more distinctly." Pickworth adds that the facing should not be polished, "as a dull surface is much less fatiguing to the eyes." Museum records show the same layout later made in white plastic and in aluminum, with plastic cursors replacing glass. Whatever it is made of, you want black lines on a light, matte face.

**5. The fit.** A slide that sticks or wobbles spoils every setting. Pickworth counts freedom from "tight or ill-fitting slides" among the advantages of circular calculators, which tells you how familiar the trouble was on straight rules. He describes rules with clips and small screws, or one adjustable strip, so the stock can be closed on the slide.

**6. Honest marks.** "Rules in which one or more of the indices have been thickened to conceal some slight inaccuracy should be avoided." A check that follows from the scales being identical: set the 1 of C exactly over the 1 of D and run the cursor along. Every mark of C should sit on the same mark of D. Pickworth's own demonstration that a rule's error is a constant percentage: set 1 on C to 1.01 on D, and under 2, 3 and 5 you read 2.02, 3.03 and 5.05, "a uniform error of 1 per cent."

**7. Light and paper.** "Always use the slide rule in as direct a light as possible." Keep the maker's instruction booklet if you have one; the FAA notes that a pilot's flight computer comes with an instruction book of sample problems (lesson 24). BAM's demonstrations follow two Mannheim-type booklets from his own shelf, named in the Sources by title only.

:::reveal According to Pickworth, what does a slide rule's accuracy depend on first of all? ||| The length of the scale: accuracy "depends primarily upon the length of the scale employed."

:::reveal What quick check follows from C and D being identical scales? ||| Set the 1 of C exactly over the 1 of D and run the cursor along: every mark of C should sit on the same mark of D.

## Sources
- ${PICKWORTH} Locator: p. 12 (PDF p. 18), materials, the dull facing, sizes of rule, the four scales and "exactly alike"; p. 13 (PDF p. 19), the double A and B scales; p. 17 (PDF p. 23), the cursor; p. 19 (PDF p. 25), the magnifying cursor; p. 36 (PDF p. 42), "direct a light"; p. 101 (PDF p. 107), "tight or ill-fitting slides"; pp. 111 to 112 (PDF pp. 117 to 118), adjustment, accuracy and length, thickened indices, a sharp line, the 1.01 setting. ${TA}
- ${CULLIMORE} Locator: p. 5 (PDF p. 9), the description of the rule and the five-scale variant; p. 17 (PDF p. 21), the cube scale below D. ${TA}
- ${NMAH_ANALON} Locator: description, first paragraph (white plastic, plastic indicator). ${TB}
- ${NMAH_N600} Locator: description, third paragraph (aluminum rules; the change from glass to nylon indicators in 1958). ${TB}
- ${POST_BOOKLET} BAM's copy; read alongside the P video, not quoted. ${TC}
- ${ACU_BOOKLET} BAM's copy; read alongside the P video, not quoted. ${TC}`,
    },
    {
      slug: "reading-the-scales",
      title: "5 · Stock, slide, cursor, and reading between the marks",
      section: "2 · The instrument in your hands",
      recallContent: [
        {
          prompt: "Which four scales does a Mannheim-type rule carry on its face, and where?",
          answer: "A and B above, C and D below; A and D on the stock, B and C on the slide.",
        },
        {
          prompt: "Name two things lesson 4 says to look for in a cursor.",
          answer: "A sharp, fine hairline at right angles to the scales, and smooth movement (with the slide) so good work can be done.",
        },
      ],
      body: `${P("BAM on camera setting the cursor to 478 and to 1673 on D, close enough that the marks can be counted, then setting 1 on C to 1.04 on D and reading under 4, 6 and 8")}

**The parts.** The body of the rule is the **stock**. Down its center runs a groove, and in the groove moves the **slide**: in Cullimore's words, "a slide of wood moves easily in a longitudinal groove." Across both rides the **cursor** (also called the runner or indicator), carrying a hairline "which serves as a reference line in calculating." The end marks of C and D are the **indices**, left and right; Pickworth notes they are "sometimes figured 1 and 10 respectively; sometimes both are marked 1." A and B also have a middle index, where their first half ends and the second begins.

**How D is divided.** The marks are not evenly spaced, because the distances are logarithms, and so the room between them shrinks as the numbers grow. Pickworth's count for C and D: the space from 1 to 2 is divided into 100 parts, the spaces 2 to 3 and 3 to 4 into 50 parts each, and every space from 4 to 10 into 20 parts. If you read the left index as 1, the smallest division is worth 0.01 between 1 and 2, then 0.02 up to 4, then 0.05 the rest of the way.

**Finding 478.** Cullimore walks through it. Between the big 4 and 5 (not the small 1.4 and 1.5 further left) there are 20 divisions, with a long mark at 450. "Between 450 and 500 there are 4 long marks and 5 short ones; the first long one following being 460, the next 470, the next 480." A short mark sits at 475, and nothing between 475 and 480. So 478 "lies in this blank space," about 3/5 of the way from 475 to 480. You estimate the last figure by eye.

**Finding 1673.** Further left the marks are finer. Between 1600 and 1700 there are ten divisions, a long one at 1650. The next short ones are 1660 and 1670, and 1673 lies "3/10 of the distance from 1670 to 1680."

**How many figures.** Cullimore's rule of thumb: "Three significant figures should be read on all parts of D and C; on the left, four may be obtained. On A and B, two and sometimes three are obtainable." A and B are half as long, so their marks are coarser.

**Setting two numbers together.** Use the cursor as a go-between. Pickworth: "set the cursor to one of them on the rule, and bring the other, on the slide, to the cursor line." Cullimore gives the same advice.

**Practice that checks itself.** Pickworth suggests setting 1 on C to 1.04 on D and reading the D values under 4, 6 and 8 on C. You should find about 4.16, 6.24 and 8.32, because each is 1.04 times the number on C. "As the exact results are easily calculated mentally," he writes, the student "will receive better instruction in estimating intermediate results than can be given by any diagram." Do it again with 1.09.

:::reveal Into how many parts is the space from 1 to 2 on C and D divided? ||| 100, so each division is worth 0.01 when the left index is read as 1. The spaces 2 to 4 have 50 parts each, and 4 to 10 have 20.

:::reveal Between which two marks does 478 sit on D? ||| Between the short mark at 475 and the long mark at 480, about 3/5 of the way from 475.

## Sources
- ${CULLIMORE} Locator: p. 5 (PDF p. 9), the slide, groove and runner; p. 6 (PDF p. 10), setting with the runner; p. 7 (PDF p. 11), reading 478 and 1673 and the number of figures on each scale. ${TA}
- ${PICKWORTH} Locator: p. 13 (PDF p. 19), the indices; pp. 14 to 15 (PDF pp. 20 to 21), how C, D, A and B are divided and what each division is worth; p. 16 (PDF p. 22), the 1.04 practice; p. 37 (PDF p. 43), setting with the cursor. ${TA}`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The instrument in your hands",
      section: "2 · The instrument in your hands",
      body: "A graded check on what to look for in a basic rule (scales, length, cursor, materials, fit and honest marks) and on the parts of the rule and reading between its marks. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "How many scales does a Mannheim-type rule carry on its face?", options: ["Four", "Two", "Six", "Eight"], correctIndex: 0, explanation: "Lesson 4: four scales, A and B above, C and D below.", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "Which scales sit on the slide of a Mannheim-type rule?", options: ["A and D", "B and C", "A and B", "C and D"], correctIndex: 1, explanation: "The upper and lower scales (A and D) are on the stock; the middle two (B and C) are on the slide (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "Which scales are engraved on the stock of a Mannheim-type rule?", options: ["B and C", "C and L", "A and D", "B and D"], correctIndex: 2, explanation: "Pickworth: the upper and lower scales are on the stock, the other two on the slide (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "What do the A and B scales hold that C and D do not?", options: ["A scale of sines and tangents", "A scale of equal parts for logs", "Numbers printed right to left", "Two copies of the 1-to-10 scale"], correctIndex: 3, explanation: "A and B each hold two copies of the 1-to-10 scale end to end; C and D hold one (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "Which scales does this course teach?", options: ["A, B, C, D and L", "S, T and the log-logs", "Only the CI and K", "Every scale on any rule"], correctIndex: 0, explanation: "A, B, C, D and L, with CI and K as short notes. S, T and log-log scales are not taught (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "What size of rule does Pickworth call the most convenient?", options: ["About 5 inches long", "About 10½ inches long", "About 24 inches long", "About 40 inches long"], correctIndex: 1, explanation: "\"The most generally used, and on the whole the most convenient size of rule, is about 10½ in. long\" (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "According to Pickworth, what does a rule's accuracy depend on primarily?", options: ["The color of the facing", "The weight of the cursor", "The length of the scale", "The maker's guarantee"], correctIndex: 2, explanation: "Accuracy \"depends primarily upon the length of the scale employed\" (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "What lets a 5-inch rule be read as easily as a 10-inch one, per Pickworth?", options: ["A second cursor with two hairlines", "Scales printed in a larger typeface", "A slide made twice as wide as usual", "A magnifying cursor of power about 2"], correctIndex: 3, explanation: "A magnifying cursor of power about 2 lets a 5-inch rule with the same graduations be read \"with equal facility\" (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "How is the cursor's reference line drawn, per Pickworth?", options: ["At right angles to the scales", "Parallel to the line of scales", "At 45 degrees to the scales", "Along the edge of the slide"], correctIndex: 0, explanation: "\"A fine reference line\" drawn \"exactly at right angles to the line of scales\" (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "What does Pickworth say a cursor line should be?", options: ["Thick and printed red", "Sharp and fine", "Printed in gold leaf", "Curved slightly upward"], correctIndex: 1, explanation: "\"The line on the cursor should be sharp and fine\" (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "Why did Pickworth advise against polishing the celluloid face?", options: ["Polish wears the numbers away fast", "Polish makes the slide too slippery", "A dull surface tires the eyes less", "A polished face cracks in the cold"], correctIndex: 2, explanation: "\"A dull surface is much less fatiguing to the eyes\" (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "What was the usual rule made of in 1920, per Pickworth?", options: ["Solid brass with engraved lines", "Bare aluminum painted black", "Ivory with lines cut by hand", "Wood faced with white celluloid"], correctIndex: 3, explanation: "Boxwood or mahogany faced with celluloid, whose white surface shows the graduations more distinctly (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "In what later materials do museum records show the Mannheim layout?", options: ["White plastic and aluminum", "Glass and polished steel", "Cast iron and bronze plate", "Carved bone and stag horn"], correctIndex: 0, explanation: "The Smithsonian records describe a white plastic rule with a plastic indicator and aluminum rules (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "What replaced glass in later cursors, per the museum records?", options: ["Mica", "Plastic", "Paper", "Steel"], correctIndex: 1, explanation: "One maker changed from glass to nylon indicators in 1958; another rule has a plastic indicator (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "Why does lesson 4 say a stiff or wobbly slide matters?", options: ["It changes the logarithms", "It erases the scale marks", "It spoils every setting", "It reverses the C scale"], correctIndex: 2, explanation: "\"A slide that sticks or wobbles spoils every setting\" (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "How could some 1920 rules be adjusted for fit?", options: ["Weights fixed into the end of the slide", "A spring that lengthens the C scale", "Oil poured into the groove each day", "Screws to close the stock on the slide"], correctIndex: 3, explanation: "Clips with small screws, or one adjustable strip, so the stock can be closed on the slide (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "What does Pickworth say to avoid in a rule's indices?", options: ["Thickening that hides an error", "Numbers printed in red ink", "Marks longer than the others", "A small arrow beside the 1"], correctIndex: 0, explanation: "\"Rules in which one or more of the indices have been thickened to conceal some slight inaccuracy should be avoided\" (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "Which check follows from C and D being identical scales?", options: ["With indices matched, D reads double C", "With indices matched, every mark agrees", "With the slide out, C reads backward", "With the cursor at 1, A reads 10"], correctIndex: 1, explanation: "Set the 1 of C exactly over the 1 of D and run the cursor along: every mark should agree (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "Pickworth sets 1 on C to 1.01 on D. What does he read under 3?", options: ["3.30", "3.01", "3.03", "3.10"], correctIndex: 2, explanation: "Under 2, 3 and 5 he reads 2.02, 3.03 and 5.05: each 1 percent more (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "What does the 1.01 setting show about a slide rule's error?", options: ["It grows toward the right", "It is largest at the 1", "It vanishes past the 5", "It is a constant percentage"], correctIndex: 3, explanation: "The readings show \"a uniform error of 1 per cent\": a percentage that stays the same along the scale (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "What light does Pickworth recommend for slide-rule work?", options: ["As direct a light as possible", "Dim light, to cut down glare", "Colored light, to show marks", "Light from behind the rule"], correctIndex: 0, explanation: "\"Always use the slide rule in as direct a light as possible\" (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "How does lesson 4 treat makers and brands?", options: ["It recommends the maker BAM uses", "It names no maker and recommends none", "It ranks makers by price and age", "It names the best maker of 1920"], correctIndex: 1, explanation: "\"It names no maker and recommends none\" (lesson 4). It is a checklist of features.", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "Which added scales does lesson 4 say many basic rules carry?", options: ["Only S and T", "Only LL scales", "CI, K and L", "No others ever"], correctIndex: 2, explanation: "Many rules add a scale of reciprocals (CI), a scale of cubes (K) and a scale of equal parts for logarithms (L) (lesson 4).", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "What does the CI scale hold, per lesson 4?", options: ["Cubes", "Logarithms", "Sines", "Reciprocals"], correctIndex: 3, explanation: "CI is a scale of reciprocals (lesson 4). K holds cubes and L logarithms.", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "Which added scale holds cubes?", options: ["K", "L", "CI", "S"], correctIndex: 0, explanation: "K is the scale of cubes (lesson 4). Cullimore describes one below D on a variant rule.", sourceLessonSlug: "what-to-look-for-in-a-rule" },
          { prompt: "What is the body of a slide rule called?", options: ["The slide", "The stock", "The cursor", "The index"], correctIndex: 1, explanation: "The body is the stock; the slide moves in a groove down its center (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "What moves in the groove down the center of the stock?", options: ["The index", "The stock", "The slide", "The scale A"], correctIndex: 2, explanation: "\"A slide of wood moves easily in a longitudinal groove\" (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "What other names does the cursor go by?", options: ["Slide or tongue", "Index or stock", "Gauge or scale", "Runner or indicator"], correctIndex: 3, explanation: "Cullimore calls it an \"indicator or runner\" carrying a hairline (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "What are the end marks of C and D called?", options: ["The indices", "The gauge points", "The characteristics", "The mantissas"], correctIndex: 0, explanation: "The two end graduations of C and D are the left and right indices (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "Into how many parts is the space from 1 to 2 divided on C and D?", options: ["50", "100", "20", "10"], correctIndex: 1, explanation: "Pickworth: the interval 1 to 2 is divided into 100 (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "Into how many parts is each space from 4 to 10 divided on C and D?", options: ["50", "100", "20", "10"], correctIndex: 2, explanation: "From 4 to the end of the scale each main space is divided into 20 parts (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "Reading the left index as 1, what is the smallest division worth between 2 and 4?", options: ["0.01", "0.05", "0.1", "0.02"], correctIndex: 3, explanation: "Spaces 2 to 3 and 3 to 4 have 50 parts each, so each is 0.02 (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "Reading the left index as 1, what is the smallest division worth from 4 to 10?", options: ["0.05", "0.02", "0.01", "0.5"], correctIndex: 0, explanation: "Twenty parts to each main space makes each 0.05 (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "Why do the marks on C and D crowd together toward the right?", options: ["The printer ran out of room", "The distances are logarithms", "Large numbers matter less", "The slide is narrower there"], correctIndex: 1, explanation: "Each distance is a logarithm, and logarithms grow more slowly as numbers grow, so the spaces shrink (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "In Cullimore's walk-through, where is the long mark between 4 and 5 on D?", options: ["At 475", "At 420", "At 450", "At 490"], correctIndex: 2, explanation: "Between 4 and 5 there are 20 divisions, \"a very long division marking 4.5, 45, or 450\" (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "Between which marks does 478 lie on D?", options: ["Between 470 and 475", "Between 480 and 485", "Between 450 and 460", "Between 475 and 480"], correctIndex: 3, explanation: "478 \"lies in this blank space\" between the short mark at 475 and the long mark at 480 (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "How far from 475 toward 480 is 478?", options: ["About 3/5 of the way", "About 1/5 of the way", "About 4/5 of the way", "Exactly halfway"], correctIndex: 0, explanation: "478 lies about 3/5 of the distance from 475 to 480, estimated by eye (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "What warning does Cullimore give when finding 478 on D?", options: ["Do not read 478 on the A scale at all", "Do not confuse 4 and 5 with 1.4 and 1.5", "Do not move the slide while reading it", "Do not use the runner for this reading"], correctIndex: 1, explanation: "Take care \"not to confuse this 4 and 5 with 1.4 and 1.5 which occur further to the left\" (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "Where does 1673 sit on D?", options: ["7/10 of the way from 1660 to 1670", "Exactly on the long mark at 1650", "3/10 of the way from 1670 to 1680", "1/2 of the way from 1600 to 1700"], correctIndex: 2, explanation: "\"3/10 of the distance from 1670 to 1680, to the right of 1670, lies 1673D\" (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "How many significant figures can be read on all parts of C and D, per Cullimore?", options: ["Two", "Five", "One", "Three"], correctIndex: 3, explanation: "\"Three significant figures should be read on all parts of D and C; on the left, four may be obtained\" (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "Where on C and D can a fourth figure sometimes be read?", options: ["On the left", "On the right", "On the back", "On the edge"], correctIndex: 0, explanation: "On the left end, where the marks are widest apart, four figures may be obtained (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "How many figures do A and B usually give, per Cullimore?", options: ["Four, sometimes five", "Two, sometimes three", "One, never two", "Five or six always"], correctIndex: 1, explanation: "\"On A and B, two and sometimes three are obtainable\" (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "Why are A and B read less finely than C and D?", options: ["They are printed in red", "They run right to left", "They are half as long", "They sit on the back"], correctIndex: 2, explanation: "Each half of A and B is half as long as C or D, so their marks are coarser (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "How does Pickworth set two numbers against each other?", options: ["Slide first, then the cursor to the stock", "Both numbers lined up by eye without help", "The rule turned over to the scales behind", "Cursor on the rule's number, then slide to it"], correctIndex: 3, explanation: "\"Set the cursor to one of them on the rule, and bring the other, on the slide, to the cursor line\" (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "With 1 on C set to 1.04 on D, what is under 6 on C?", options: ["About 6.24", "About 6.04", "About 6.40", "About 5.77"], correctIndex: 0, explanation: "The setting multiplies by 1.04, and 6 × 1.04 = 6.24 (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "Why is Pickworth's 1.04 practice good for learning to read the scales?", options: ["It needs no cursor or slide at all", "You can check every answer mentally", "It uses only the A and B scales", "It teaches the decimal point rule"], correctIndex: 1, explanation: "\"As the exact results are easily calculated mentally,\" every reading can be checked (lesson 5).", sourceLessonSlug: "reading-the-scales" },
          { prompt: "How are the indices of C and D sometimes figured, per Pickworth?", options: ["0 and 10, or both 0", "1 and 100, or both 100", "1 and 10, or both 1", "A and D, or both A"], correctIndex: 2, explanation: "\"Sometimes they are figured 1 and 10 respectively; sometimes both are marked 1\" (lesson 5).", sourceLessonSlug: "reading-the-scales" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: C and D: multiply, divide, place the point
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "multiplication-on-c-and-d",
      title: "6 · Multiplication, and the answer that runs off the end",
      section: "3 · C and D: multiply, divide, place the point",
      recallContent: [
        {
          prompt: "How many significant figures does Cullimore say you can read on C and D?",
          answer: "Three on all parts, four on the left end. On A and B, two and sometimes three.",
        },
        {
          prompt: "Where does 1673 sit on D?",
          answer: "Between the marks for 1670 and 1680, 3/10 of the way from 1670.",
        },
      ],
      body: `${P("BAM working 2 × 4, 2 × 6, 3.26 × 2.83 and 3.91 × 7.33 on camera, showing the switch to the right index, then a three-factor product with the cursor")}

**The rule.** Pickworth: "Set the index of the C scale to one of the factors on D, and under the other factor on C, find the product on D." To find 2 × 4, move the slide right until the left index of C sits over 2 on D. Under 4 on C, read 8 on D.

**When the answer runs off the end.** Keep the same setting and look under 6 on C: there is no D scale left, because 2 × 5 already reached the end. Pickworth's remedy is to use the other end of the slide: move the slide left "until 10 on C agrees with 2 on D," and now you can read 2 × 6 = 12 and 2 × 8 = 16. The figures you read are 12 and 16; the size of the answer is still yours to decide.

**Which index to use, before you try.** Cullimore saves the wasted move with a rule: "When the first digits of the factors are such that their product gives a number greater than ten, use the right index on C; otherwise use the left." His examples: for 2.13 × 3.33, 2 × 3 = 6, so the left index; for 7.23 × 4.71, 7 × 4 = 28, the right; for .131 × 4.6, 1 × 4 = 4, the left. He warns that near the boundary the first digits are not enough: 3.13 × 3.31 looks like a left-index problem and is not, because the product is just over 10.

**Two worked examples, estimate first.** Cullimore always estimates before setting. For 3.26 × 2.83 he estimates "approximately 9.0", sets 1 on C to 3.26 on D, and under 2.83 on C reads 9.22. For 3.91 × 7.33 he estimates "about 28", uses the right index, and reads 28.7.

**With the cursor.** Cullimore's way of reading: "Slide C until 1 is over a factor on D, slide the runner to the other factor on C, and read the answer on D under the runner." The hairline keeps your eye on the right mark.

**One factor that never changes.** To multiply many numbers by the same factor, Pickworth sets 1 on C to the constant factor on D and reads "the several products on D, under the respective variable factors." One setting gives a whole column.

**Three or more factors.** Pickworth uses the cursor to hold each partial product: set the index of C to the first factor on D, bring the cursor to the second factor on C, then move the index of C to the cursor, the cursor to the third factor, and so on, "reading the final product on D under the last factor on C." Only the first factor and the result are read on D. You never need to read the partial products, which is why the cursor matters so much. Cullimore's practice problem: 16.16 × 3.1416 × 18.13. His printed answer is 921; estimate it first (about 16 × 3 × 18, near 900) and you know where the point goes.

:::reveal Which index does Cullimore's rule pick for 7.23 × 4.71, and why? ||| The right index: the first digits give 7 × 4 = 28, a product greater than ten.

:::reveal In continued multiplication, which numbers are read on D? ||| Only the first factor and the final result. The cursor holds each partial product, which never has to be read.

## Sources
- ${PICKWORTH} Locator: p. 19 (PDF p. 25), the rule for multiplication, 2 × 4, and the move to 10 on C for 2 × 6 and 2 × 8; p. 22 (PDF p. 28), a constant factor; p. 23 (PDF p. 29), continued multiplication with the cursor. ${TA}
- ${CULLIMORE} Locator: p. 10 (PDF p. 14, an image page with no text layer), 3.26 × 2.83 and 3.91 × 7.33 and reading with the runner; p. 11 (PDF p. 15), the rule for choosing the index and its examples; p. 30 (PDF p. 34), the problem 16.16 × 3.1416 × 18.13 and its printed answer. ${TA}`,
    },
    {
      slug: "division-and-proportion",
      title: "7 · Division and proportion",
      section: "3 · C and D: multiply, divide, place the point",
      recallContent: [
        {
          prompt: "State Pickworth's rule for multiplication on C and D.",
          answer: "Set the index of C to one factor on D, and under the other factor on C find the product on D.",
        },
        {
          prompt: "What do you do when the product runs off the end of D?",
          answer: "Use the other index: move the slide so 10 on C (the right index) sits on the first factor, and read again.",
        },
      ],
      body: `${P("BAM on camera dividing 225 by 18 and 313 by 8.9, then setting the proportion 20 : 27 = 70 : x and the ounces-to-grams setting, reading a whole row of answers at once")}

**Division is multiplication run backward.** Pickworth: "Place the divisor on C, opposite the dividend on D, and read the quotient on D under the index of C." His example: bring 18 on C to 225 on D, and under the left index read 125, which is 12.5. You are subtracting the length for 18 from the length for 225.

**Estimate, then read.** Cullimore divides 313 by 8.9. First, the size: the answer "is estimated to lie between 30 and 40." Set 8.9 on C to 313 on D, using the runner, and read under the index of C: 35.2. He adds a comfort: "in the case of division only one index can appear on the scale, so that no ambiguity can possibly arise." Division never makes you choose an index.

**A proportion is one setting.** Once the slide is set, every pair of numbers facing each other on C and D stands in the same ratio. With 1 on C at 2 on D, every D reading is twice the C reading above it. Pickworth's rule: "Set the first term of a proportion on the C scale to the second term on the D scale, and opposite the third term on the C scale read the fourth term on the D scale." His example, 20 is to 27 as 70 is to x: set 20 on C to 27 on D, and opposite 70 on C read 94.5 on D.

**Fractions to decimals.** The same setting turns a fraction into a decimal. Pickworth finds 3/16 by placing 3 on C to 16 on D and reading over the index of D: 0.1875. Cullimore states it generally: "To reduce fractions to decimals, set numerator on C to denominator on D. Read on C over 1D to find equivalent decimal."

**Unit conversions, a row at a time.** Cullimore's ounces to grams: the back of his rule says 6 ounces equal 170 grams. Set the runner to 6 on D and bring 170 on C to it. Now read ounces on D and grams above them on C: 1 ounce is 28.3 grams, and 6.5, 7.75 and 9.25 ounces are 184, 220 and 262 grams. When a value runs off the end, shift the slide to the other index, exactly as in multiplication. One setting, a whole table.

**Reciprocals.** One divided by a number is a division with 1 as the dividend. Cullimore: "Find the reciprocal of 3.17. Set 3.17C over 1D, and read on D under 1C. Answer is .316." Many basic rules also carry a CI scale for reciprocals (lesson 12 has a note).

**Check it by multiplying back.** A quotient times the divisor should give the dividend: 12.5 × 18 = 225. That is the same setting read the other way, so the rule checks itself.

:::reveal Where do you read the quotient when dividing on C and D? ||| On D, under the index of C, after setting the divisor on C opposite the dividend on D.

:::reveal How do you turn 3/16 into a decimal on the rule? ||| Set 3 on C to 16 on D and read over the index of D: 0.1875.

## Sources
- ${PICKWORTH} Locator: p. 24 (PDF p. 30), the rule for division and 225 ÷ 18; p. 31 (PDF p. 37), proportion and 20 : 27 = 70 : x; p. 32 (PDF p. 38), 3/16 as a decimal. ${TA}
- ${CULLIMORE} Locator: pp. 7 to 8 (PDF pp. 11 to 12), ounces to grams; p. 9 (PDF p. 13), fractions to decimals and the reciprocal of 3.17; p. 11 (PDF p. 15), 313 ÷ 8.9 and "only one index". ${TA}`,
    },
    {
      slug: "placing-the-decimal-point",
      title: "8 · Placing the decimal point by estimate",
      section: "3 · C and D: multiply, divide, place the point",
      recallContent: [
        {
          prompt: "State Pickworth's rule for proportion.",
          answer: "Set the first term on C to the second term on D, and opposite the third term on C read the fourth term on D.",
        },
        {
          prompt: "Why does division never make you choose an index?",
          answer: "Cullimore: \"in the case of division only one index can appear on the scale, so that no ambiguity can possibly arise.\"",
        },
      ],
      body: `**The rule gives figures; you give the size.** Pickworth: "the result, as read on the rule, should be regarded merely as the significant figures of the answer, the position of the decimal point, if not obvious, being decided by a very rough mental calculation." Often the problem itself settles it: you know "whether the answer should be 0.3in., 3in., or 30in." Cullimore agrees, and adds a reason: fixing the point "independently of the rule" gives "the added advantage of a rough check on the work." Of his own estimate before a long calculation he writes, "This process of determining the decimal point should always be followed, no matter what the problem."

**Rules exist; Pickworth prefers estimating.** His manual prints rules for counting the digits of a product from the position of the slide. But he advises the "rough approximation" method instead, because it gives reliable results quickly "with the advantage that the method is applicable to calculations generally." Practice spent on digit rules, he notes, "is confined to slide-rule work."

**Method 1: round to easy numbers.** Pickworth multiplies 33.6 by 236. The rule shows 793. "A rough calculation, as 30 × 200 = 6000, indicates that the result will consist of 4 figures, and is therefore to be read as 7930."

**Method 2: powers of ten.** For 17,300 × 3780, Pickworth writes 1.73 × 10⁴ × 3.78 × 10³ = 1.73 × 3.78 × 10⁷. The rule gives 6.54 for the small multiplication, and the 10⁷ moves the point seven places: 65,400,000. The same works for very small numbers: 0.00000285 ÷ 0.000197 becomes 2.85 × 10⁻⁶ ÷ 1.97 × 10⁻⁴, which is 1.446 × 10⁻², or 0.01446.

**Division by estimate.** For 3.95 ÷ 5340, the rule reads 74. Pickworth's estimate: "3.9 ÷ 5 is about 0.8 and 0.8 ÷ 1000 gives 0.0008 as a rough estimate," so the answer is 0.00074.

**How many times as much?** One-digit estimates also compare sizes. Pickworth's two products above were 7,930 and 65,400,000. Rounded to one figure they are 8 × 10³ and 7 × 10⁷, so the second is about 7/8 × 10⁴, close to 9,000 times the first (the exact ratio is about 8,250). The powers of ten do most of the work; the single digits adjust it.

**Why it was worth a whole instrument.** Placing the point was hard enough for beginners that, around 1958, a rule was built to help: a Smithsonian record describes a "Decimal Keeper" whose back carried scales covering twenty powers of ten, so that users "performed their calculation first on the back, to determine the order of magnitude, and then a second time on the front, to make the answer precise to three significant figures." An estimate in your head does the same job.

**A habit for the rest of the course.** Estimate first, then set the rule, then check that the reading and the estimate agree in size. If they do not, one of them is wrong, and you have caught it before it mattered.

:::reveal How does Pickworth place the point in 33.6 × 236 when the rule shows 793? ||| A rough 30 × 200 = 6000 says the answer has four figures, so it reads 7930.

:::reveal Why does Pickworth prefer rough estimation to digit-counting rules? ||| It gives reliable results quickly and works for calculations in general, while practice with digit rules is "confined to slide-rule work."

## Sources
- ${PICKWORTH} Locator: p. 21 (PDF p. 27), estimation of the figures in a product and 33.6 × 236; p. 22 (PDF p. 28), 17,300 × 3780; p. 25 (PDF p. 31), 3.95 ÷ 5340 and 0.00000285 ÷ 0.000197. ${TA}
- ${CULLIMORE} Locator: p. 7 (PDF p. 11), fixing the point independently "a rough check"; p. 12 (PDF p. 16), "should always be followed". ${TA}
- ${NMAH_904} Locator: description, first paragraph. ${TB}`,
    },
    {
      slug: "how-accurate-is-it",
      title: "9 · How accurate is it, and why three figures is honest",
      section: "3 · C and D: multiply, divide, place the point",
      recallContent: [
        {
          prompt: "How does Pickworth place the point in 17,300 × 3780?",
          answer: "Powers of ten: 1.73 × 10⁴ × 3.78 × 10³ = 6.54 × 10⁷ = 65,400,000.",
        },
        {
          prompt: "What three steps does lesson 8 make a habit?",
          answer: "Estimate first, set the rule, then check that the reading and the estimate agree in size.",
        },
      ],
      body: `**The complaint.** Cullimore begins his whole manual with it: "Even among engineers, the idea is often expressed that the slide rule is inaccurate, because, in the hands of a reasonably expert operator, the rule will give results accurate only to 1/10 of 1%." His answer: "the rule is inaccurate in exactly the same way that a four place table of logarithms is inaccurate." Lesson 15 reads such a table.

**What a significant figure is.** "By a significant figure we mean any figure which is significant in that it gives some real information as regards the quantity which is represented." Cullimore's example: a radius recorded as 4.67 feet with a steel tape means the person measuring could not say it closer than 1/100 of a foot. Three significant figures, "an accuracy of one part in 467." Zeros can be ambiguous: 13000 has "two or five significant figures," depending on what was measured.

**Extra figures are a false claim.** "The frequent habit of carrying results to a greater number of significant figures than the data warrant comes perilously near to lying with figures; it certainly creates a wrong impression as to the accuracy of the result."

**A worked case.** Cullimore multiplies three measured lengths for a prism of earth: 101.13 feet, 7.34 feet and 9.3 feet, the last measured only to the nearest tenth. Multiplied out in full, the answer is 6903.33606. But a depth recorded as 9.3 could be anything from 9.25 to 9.34, so the true volume lies somewhere between about 6866 and 6933. "We are sure of only the first two and the result should have been written 6900."

**So when is the rule enough?** "If, therefore, the slide rule will consistently give results to within 1/10 of one per cent, or to one part in a thousand, we have a right to use it where three significant figures are warranted in the result." He quotes Holman's rule: "If numbers are to be multiplied or divided, a given percentage error in one of them will produce the same percentage error in the result." Data good to three figures give an answer good to three figures, and the rule delivers three.

**Pickworth's numbers.** Accuracy "depends primarily upon the length of the scale employed," but also on the graduations, the user's eyesight and skill at estimating between marks. Working carefully on the lower scales, "the error should not greatly exceed 0.15 per cent, with short calculations," and "with rapid working the percentage error may be doubled." On a 10-inch rule you read three figures directly and sometimes a fourth near the left end.

**A trick for the last figure.** For 19 × 27 the rule shows something between 510 and 515. Pickworth: the third figure "must be 3, since the product of 9 and 7 is 63," so the answer is 513. The last digits of the factors fix the last digit of an exact product.

**The habit this builds.** Choosing how many figures to report from the limits of the measurement is a skill well beyond the slide rule. *How to Read a Number: Statistics for Citizens* teaches it for published figures in lessons "8 · Where the number came from" and "9 · What a margin of error actually covers." The slide rule makes the same point with a physical limit you can see.

:::reveal Why does Cullimore call extra figures "perilously near to lying with figures"? ||| They create a wrong impression of accuracy: the result claims more than the data can support.

:::reveal How does Pickworth find the last figure of 19 × 27? ||| The rule shows between 510 and 515; 9 × 7 = 63 ends in 3, so the product ends in 3: 513.

## Sources
- ${CULLIMORE} Locator: p. 3 (PDF p. 7), the complaint, the four-place table, significant figures, 4.67 feet and 13000; p. 4 (PDF p. 8), "perilously near to lying with figures", one part in a thousand, Holman's rule and the prism of earth; p. 5 (PDF p. 9), 6900. ${TA}
- ${PICKWORTH} Locator: p. 22 (PDF p. 28), three figures, the fourth, and 19 × 27; pp. 111 to 112 (PDF pp. 117 to 118), the accuracy of slide rule results. ${TA}`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · C and D: multiply, divide, place the point",
      section: "3 · C and D: multiply, divide, place the point",
      body: "A graded check on multiplication and the answer that runs off the end, division, proportion, fractions and unit conversions, placing the decimal point by estimate, and how many figures an answer is good for. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What is Pickworth's rule for multiplying on C and D?", options: ["C index on one factor; read D under the other", "D index on one factor; read C over the other", "Both factors on D; read the product on C", "C index on the product; read D under both"], correctIndex: 0, explanation: "\"Set the index of the C scale to one of the factors on D, and under the other factor on C, find the product on D\" (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "With the left index of C over 2 on D, what do you read on D under 4 on C?", options: ["6", "8", "2", "16"], correctIndex: 1, explanation: "The setting multiplies by 2, so under 4 on C sits 8 on D (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "With the left index of C over 2 on D, why can nothing be read under 6 on C?", options: ["The 6 on C is hidden by the cursor", "The D scale reads backward past 5", "2 × 5 already reached the end of D", "The left index must be used twice"], correctIndex: 2, explanation: "2 × 5 already reaches the end of D, so under 6 on C there is no D scale left (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "What is Pickworth's remedy when a product runs off the end of D?", options: ["Turn the rule over and read the back", "Read the answer on the A scale instead", "Divide by ten and multiply once more", "Set 10 on C, the right index, instead"], correctIndex: 3, explanation: "Move the slide left \"until 10 on C agrees with 2 on D,\" and read again (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "After moving to the right index, which products does Pickworth read for 2 × 6 and 2 × 8?", options: ["12 and 16", "8 and 10", "6 and 8", "14 and 18"], correctIndex: 0, explanation: "With 10 on C at 2 on D he reads 2 × 6 = 12 and 2 × 8 = 16; the size of the answer is still yours to decide (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "Which index does Cullimore's rule pick when the first digits multiply to more than ten?", options: ["The left index", "The right index", "The middle index", "Either index"], correctIndex: 1, explanation: "\"When the first digits of the factors are such that their product gives a number greater than ten, use the right index on C; otherwise use the left\" (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "By Cullimore's rule, which index do you use for 2.13 × 3.33?", options: ["The right, since 2 × 3 = 6", "The right, since 2 + 3 = 5", "The left, since 2 × 3 = 6", "The left, since 2 + 3 = 5"], correctIndex: 2, explanation: "The first digits give 2 × 3 = 6, less than ten, so the left index (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "By Cullimore's rule, which index does 7.23 × 4.71 need?", options: ["The left, as 7 × 4 is 28", "The left, as 7 + 4 is 11", "The right, as 7 + 4 is 11", "The right, as 7 × 4 is 28"], correctIndex: 3, explanation: "The first digits give 7 × 4 = 28, more than ten, so the right index (lesson 6). The rule multiplies the digits; it does not add them.", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "Which index does Cullimore's rule give for .131 × 4.6?", options: ["The left, since 1 × 4 = 4", "The right, since 1 × 4 = 4", "The right, since 4.6 > 1", "Neither; it needs the A scale"], correctIndex: 0, explanation: "The first digits give 1 × 4 = 4, less than ten, so the left index (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "Why does Cullimore warn about 3.13 × 3.31?", options: ["Its factors fall where marks are crowded", "First digits say left, but it tops 10", "It needs two settings of the cursor", "Division would give a better result"], correctIndex: 1, explanation: "3 × 3 = 9 points to the left index, but the product is just over 10, so near the boundary the first digits are not enough (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "What does Cullimore estimate before multiplying 3.26 × 2.83?", options: ["About 6", "About 90", "About 9.0", "About 0.9"], correctIndex: 2, explanation: "He estimates \"approximately 9.0\" before setting the rule (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "What does the rule read for 3.26 × 2.83, in Cullimore's example?", options: ["6.09", "8.22", "92.2", "9.22"], correctIndex: 3, explanation: "Set 1 on C to 3.26 on D and under 2.83 on C read 9.22, close to the estimate of 9.0 (lesson 6). 6.09 is the sum of the two factors.", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "For 3.91 × 7.33, which index and what reading does Cullimore use?", options: ["The right index; 28.7", "The left index; 28.7", "The right index; 11.2", "The left index; 2.87"], correctIndex: 0, explanation: "He estimates \"about 28\", uses the right index (3 × 7 = 21), and reads 28.7 (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "In Cullimore's way of reading a product, what goes over a factor on D?", options: ["The runner", "The 1 of C", "The A scale", "The 10 of D"], correctIndex: 1, explanation: "\"Slide C until 1 is over a factor on D, slide the runner to the other factor on C, and read the answer on D under the runner\" (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "In Cullimore's method with the runner, where is the product read?", options: ["On C over the runner", "On A over the runner", "On D under the runner", "On B under the index"], correctIndex: 2, explanation: "The answer is read on D under the runner, whose hairline keeps your eye on the right mark (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "How does Pickworth multiply many numbers by the same factor?", options: ["Reset the slide for each new number", "Square the factor on A and halve it", "Use the cursor to add each product", "Set 1 of C to it once and read along D"], correctIndex: 3, explanation: "Set 1 on C to the constant factor on D and read \"the several products on D, under the respective variable factors\" (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "What does one setting give when one factor never changes?", options: ["A whole column of products", "Only the first product", "The square of each factor", "The sum of all the factors"], correctIndex: 0, explanation: "One setting of 1 on C to the constant factor gives every product along D: a whole column (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "When multiplying three factors, which values must you read off D?", options: ["Each partial product, in turn", "Only the first factor and result", "Only the partial products", "The second and third factors"], correctIndex: 1, explanation: "Only the first factor and the result are read on D; the partial products never have to be read (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "What holds each partial product in continued multiplication?", options: ["The left index", "The A scale", "The cursor", "The L scale"], correctIndex: 2, explanation: "Pickworth brings the cursor to each factor and the index of C to the cursor, so the cursor holds each partial product (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "Cullimore prints 921 for 16.16 × 3.1416 × 18.13. Which estimate places its point?", options: ["16 + 3 + 18, near 37", "16 × 3, near 50", "1.6 × 3 × 1.8, near 9", "16 × 3 × 18, near 900"], correctIndex: 3, explanation: "About 16 × 3 × 18, near 900, so the printed 921 is a three-figure number (lesson 6).", sourceLessonSlug: "multiplication-on-c-and-d" },
          { prompt: "What is Pickworth's rule for division on C and D?", options: ["Divisor on C over dividend on D; read D at C index", "Dividend on C over divisor on D; read C at D index", "Divisor on D under dividend on C; read A at index", "Both on D; read the quotient on C over the cursor"], correctIndex: 0, explanation: "\"Place the divisor on C, opposite the dividend on D, and read the quotient on D under the index of C\" (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "Bringing 18 on C to 225 on D, what figures appear under the left index?", options: ["243", "125", "207", "405"], correctIndex: 1, explanation: "Under the left index Pickworth reads 125, which is 12.5 (lesson 7). 243 and 207 are 225 plus and minus 18.", sourceLessonSlug: "division-and-proportion" },
          { prompt: "Where does the point go in 225 ÷ 18, read as 125 on the rule?", options: ["1.25", "125", "12.5", "0.125"], correctIndex: 2, explanation: "225 ÷ 18 is a little more than 10, so 125 reads as 12.5 (lesson 7). Check: 12.5 × 18 = 225.", sourceLessonSlug: "division-and-proportion" },
          { prompt: "What does dividing 225 by 18 on the rule do with lengths?", options: ["Adds the length for 18 to 225", "Doubles the length for 225", "Halves the length for 18", "Subtracts the length for 18"], correctIndex: 3, explanation: "You subtract the length for 18 from the length for 225, and subtracting logarithms divides (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "Before dividing 313 by 8.9, where does Cullimore estimate the answer lies?", options: ["Between 30 and 40", "Between 3 and 4", "Between 300 and 400", "Between 0.3 and 0.4"], correctIndex: 0, explanation: "The answer \"is estimated to lie between 30 and 40\" (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "What does the rule read for 313 ÷ 8.9 in Cullimore's example?", options: ["3.52", "35.2", "352", "0.352"], correctIndex: 1, explanation: "Set 8.9 on C to 313 on D and read 35.2 under the index of C, inside the estimate of 30 to 40 (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "Why does Cullimore say division causes no ambiguity about the index?", options: ["Division uses only the A scale", "The cursor shows which to use", "Only one index can be on the scale", "Division always uses the right"], correctIndex: 2, explanation: "\"In the case of division only one index can appear on the scale, so that no ambiguity can possibly arise\" (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "With 1 on C set at 2 on D, how does every D reading relate to the C reading?", options: ["It is half of it", "It is 2 more", "It is its square", "It is twice it"], correctIndex: 3, explanation: "Every pair facing each other stands in the same ratio, so each D reading is twice the C reading above it (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "What is Pickworth's rule for a proportion?", options: ["1st term on C to 2nd on D; read 4th on D under 3rd on C", "Add the 2nd and 3rd terms, then subtract the 1st on D", "Multiply the 1st by the 2nd, then read the 3rd on A", "Set the 3rd term on L and read the 4th on the back"], correctIndex: 0, explanation: "\"Set the first term of a proportion on the C scale to the second term on the D scale, and opposite the third term on the C scale read the fourth term on the D scale\" (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "Setting 20 on C to 27 on D, what does Pickworth read opposite 70 on C?", options: ["77.0", "94.5", "51.9", "189"], correctIndex: 1, explanation: "20 is to 27 as 70 is to 94.5 (lesson 7). 51.9 is the ratio turned upside down.", sourceLessonSlug: "division-and-proportion" },
          { prompt: "What decimal does Pickworth read for the fraction 3/16?", options: ["5.333", "1.875", "0.1875", "0.01875"], correctIndex: 2, explanation: "Place 3 on C to 16 on D and read over the index of D: 0.1875 (lesson 7). 5.333 is 16/3.", sourceLessonSlug: "division-and-proportion" },
          { prompt: "Per Cullimore, after setting numerator on C to denominator on D, where is the decimal read?", options: ["On D under 1C", "On A over 1B", "On B over 1A", "On C over 1D"], correctIndex: 3, explanation: "\"Set numerator on C to denominator on D. Read on C over 1D to find equivalent decimal\" (lesson 7). Reading D under 1C would give the reciprocal.", sourceLessonSlug: "division-and-proportion" },
          { prompt: "Per the back of Cullimore's rule, how many grams equal 6 ounces?", options: ["170", "28.3", "184", "262"], correctIndex: 0, explanation: "The back of his rule says 6 ounces equal 170 grams, the pair the setting is built on (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "With 170 on C set to 6 on D, what is read above 1 on D?", options: ["17.0", "28.3", "6.00", "35.3"], correctIndex: 1, explanation: "1 ounce is 28.3 grams: the same ratio as 170 to 6 (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "On the ounces-to-grams setting, how many grams are 9.25 ounces?", options: ["184", "220", "262", "170"], correctIndex: 2, explanation: "Cullimore reads 6.5, 7.75 and 9.25 ounces as 184, 220 and 262 grams (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "When a value runs off the end in the ounces-to-grams setting, what do you do?", options: ["Start a new problem", "Read it on the A scale", "Divide it by ten first", "Shift to the other index"], correctIndex: 3, explanation: "Shift the slide to the other index, exactly as in multiplication (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "What does Cullimore read for the reciprocal of 3.17?", options: [".316", "3.16", ".0316", "31.6"], correctIndex: 0, explanation: "\"Set 3.17C over 1D, and read on D under 1C. Answer is .316\" (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "How do you check a quotient on the rule, per lesson 7?", options: ["Divide it again", "Multiply it back", "Square it on A", "Read it on L"], correctIndex: 1, explanation: "A quotient times the divisor should give the dividend: 12.5 × 18 = 225, the same setting read the other way (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "Why is a proportion only one setting on the rule?", options: ["Each scale carries its own ratio", "The cursor stores both of the ratios", "Every facing pair keeps the same ratio", "The A and B scales hold the second ratio"], correctIndex: 2, explanation: "Once the slide is set, every pair of numbers facing each other on C and D stands in the same ratio (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "In the ounces setting, which scale carries ounces and which grams?", options: ["Both of them on D", "Ounces C, grams D", "Ounces A, grams B", "Ounces D, grams C"], correctIndex: 3, explanation: "Read ounces on D and grams above them on C (lesson 7).", sourceLessonSlug: "division-and-proportion" },
          { prompt: "According to Pickworth, what does a reading on the rule give you?", options: ["Only the significant figures", "The answer with its point", "The logarithm of the answer", "The answer to four places"], correctIndex: 0, explanation: "\"The result, as read on the rule, should be regarded merely as the significant figures of the answer\" (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "How does Pickworth decide the decimal point when it is not obvious?", options: ["By a digit-counting table", "By a rough mental calculation", "By reading it from the A scale", "By the position of the cursor"], correctIndex: 1, explanation: "The point is \"decided by a very rough mental calculation\" (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "What added advantage does Cullimore see in fixing the point independently?", options: ["It saves one setting", "It makes the rule exact", "It gives a rough check", "It avoids the cursor"], correctIndex: 2, explanation: "Fixing it \"independently of the rule\" gives \"the added advantage of a rough check on the work\" (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "What does Cullimore say about determining the point by estimate?", options: ["Use it only for the long problems", "Use it only when you are in doubt", "Use it only for division problems", "Follow it always, whatever the problem"], correctIndex: 3, explanation: "\"This process of determining the decimal point should always be followed, no matter what the problem\" (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "Why does Pickworth prefer rough estimation to digit-counting rules?", options: ["It works for calculations generally", "It is exact to four significant figures", "It needs no thought once it is learned", "Digit rules were not yet printed in 1920"], correctIndex: 0, explanation: "The method \"is applicable to calculations generally,\" while practice on digit rules \"is confined to slide-rule work\" (lesson 8). His own manual prints the digit rules.", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "Pickworth's rule shows 793 for 33.6 × 236. What is the answer?", options: ["793", "7930", "79,300", "79.3"], correctIndex: 1, explanation: "\"A rough calculation, as 30 × 200 = 6000, indicates that the result will consist of 4 figures, and is therefore to be read as 7930\" (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "Which rough calculation places the point in 33.6 × 236?", options: ["33 + 236 = 269", "3 × 2 = 6", "30 × 200 = 6000", "34 × 24 = 816"], correctIndex: 2, explanation: "Pickworth rounds to 30 × 200 = 6000, a four-figure number (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "In powers of ten, what is 17,300 × 3780?", options: ["6.54 × 10⁵", "6.54 × 10⁶", "6.54 × 10⁸", "6.54 × 10⁷"], correctIndex: 3, explanation: "1.73 × 10⁴ × 3.78 × 10³ = 1.73 × 3.78 × 10⁷, and the rule gives 6.54 (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "Written out in full, what is 6.54 × 10⁷?", options: ["65,400,000", "6,540,000", "654,000,000", "65,400"], correctIndex: 0, explanation: "The 10⁷ moves the point seven places: 65,400,000 (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "What does 0.00000285 ÷ 0.000197 come to, as Pickworth works it?", options: ["0.1446", "0.01446", "1.446", "0.001446"], correctIndex: 1, explanation: "2.85 × 10⁻⁶ ÷ 1.97 × 10⁻⁴ = 1.446 × 10⁻², or 0.01446 (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "How does Pickworth write 0.00000285 ÷ 0.000197 in powers of ten?", options: ["2.85 × 10⁻⁵ ÷ 1.97 × 10⁻⁴", "2.85 × 10⁻⁶ ÷ 1.97 × 10⁻³", "2.85 × 10⁻⁶ ÷ 1.97 × 10⁻⁴", "2.85 × 10⁶ ÷ 1.97 × 10⁴"], correctIndex: 2, explanation: "The point moves six places in the first number and four in the second, both negative (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "The rule reads 74 for 3.95 ÷ 5340. Where does the point go?", options: ["0.0074", "0.074", "0.74", "0.00074"], correctIndex: 3, explanation: "The estimate is 0.0008, so the reading 74 places as 0.00074 (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "What rough estimate does Pickworth make for 3.95 ÷ 5340?", options: ["0.0008", "0.008", "0.08", "0.8"], correctIndex: 0, explanation: "\"3.9 ÷ 5 is about 0.8 and 0.8 ÷ 1000 gives 0.0008 as a rough estimate\" (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "Rounded to one figure, how many times is 65,400,000 as big as 7,930?", options: ["About 900", "About 9,000", "About 90,000", "About 90"], correctIndex: 1, explanation: "7 × 10⁷ over 8 × 10³ is about 7/8 × 10⁴, close to 9,000 (the exact ratio is about 8,250) (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "Comparing two sizes by one-digit estimates, what does most of the work?", options: ["The single digits", "The decimal points", "The powers of ten", "The slide rule"], correctIndex: 2, explanation: "\"The powers of ten do most of the work; the single digits adjust it\" (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "What was the Decimal Keeper rule of about 1958 built to help with?", options: ["Reading the L scale", "Finding square roots", "Converting the units", "Placing the decimal point"], correctIndex: 3, explanation: "Placing the point was hard enough for beginners that a rule was built to help, the \"Decimal Keeper\" (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "How did Decimal Keeper users find the order of magnitude?", options: ["On the back, with scales for twenty powers of ten", "On the front, with the C and D scales read twice", "On a printed card of powers kept in the case", "On the cursor, with a dial of exponents on it"], correctIndex: 0, explanation: "Its back carried scales covering twenty powers of ten; users \"performed their calculation first on the back, to determine the order of magnitude\" (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "After the back of a Decimal Keeper, what did users do on the front?", options: ["Check the order of magnitude again", "Make the answer precise to 3 figures", "Read the logarithm of the answer", "Convert the answer into metric"], correctIndex: 1, explanation: "They worked it \"a second time on the front, to make the answer precise to three significant figures\" (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "What three-step habit does lesson 8 set for the rest of the course?", options: ["Set the rule, read it, then estimate", "Estimate, read the A scale, then set", "Estimate, set the rule, check sizes", "Read, write four figures, then round"], correctIndex: 2, explanation: "Estimate first, then set the rule, then check that the reading and the estimate agree in size (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "If the reading and the estimate disagree in size, what follows?", options: ["The rule needs adjusting", "The estimate is always wrong", "The reading is always wrong", "One of the two is wrong"], correctIndex: 3, explanation: "\"If they do not, one of them is wrong, and you have caught it before it mattered\" (lesson 8).", sourceLessonSlug: "placing-the-decimal-point" },
          { prompt: "To what accuracy does Cullimore say an expert gets results on the rule?", options: ["1/10 of 1%", "1/100 of 1%", "1/2 of 1%", "1/10 of 10%"], correctIndex: 0, explanation: "\"In the hands of a reasonably expert operator, the rule will give results accurate only to 1/10 of 1%\" (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "Cullimore says the rule is inaccurate in exactly the same way as what?", options: ["A steel measuring tape", "A four-place log table", "A pocket watch dial", "A pair of dividers"], correctIndex: 1, explanation: "\"The rule is inaccurate in exactly the same way that a four place table of logarithms is inaccurate\" (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "What does Cullimore mean by a significant figure?", options: ["Any figure left of the decimal point", "Any figure other than a zero", "Any figure giving real information", "Any figure read on the D scale"], correctIndex: 2, explanation: "\"Any figure which is significant in that it gives some real information as regards the quantity which is represented\" (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "A radius is recorded as 4.67 feet. To what accuracy does that claim to be measured?", options: ["One part in 4.67", "One part in 46.7", "One part in 4,670", "One part in 467"], correctIndex: 3, explanation: "Three significant figures, \"an accuracy of one part in 467\" (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "How many significant figures can 13000 have, per Cullimore?", options: ["Two or five", "Exactly five", "Exactly two", "Three or four"], correctIndex: 0, explanation: "It may have \"two or five significant figures,\" depending on what was measured (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "What does Cullimore say carrying extra figures comes perilously near to?", options: ["Wasting time", "Lying with figures", "Breaking the rule", "Losing the point"], correctIndex: 1, explanation: "Carrying more figures than the data warrant \"comes perilously near to lying with figures\" (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "In Cullimore's prism of earth, which measurement limits the answer?", options: ["101.13 feet", "7.34 feet", "9.3 feet", "All equally"], correctIndex: 2, explanation: "The depth, 9.3 feet, was measured only to the nearest tenth, so it limits the result (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "Multiplied out in full, the prism comes to 6903.33606. How should it be written?", options: ["6903.34", "6903.3", "6903", "6900"], correctIndex: 3, explanation: "\"We are sure of only the first two and the result should have been written 6900\" (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "A depth recorded as 9.3 feet could lie between which values?", options: ["9.25 and 9.34", "9.0 and 9.6", "9.29 and 9.31", "8.3 and 10.3"], correctIndex: 0, explanation: "A depth recorded as 9.3 could be anything from 9.25 to 9.34 (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "Between what values does the true volume of Cullimore's prism lie?", options: ["6900 and 6910", "6866 and 6933", "6000 and 7000", "6903 and 6904"], correctIndex: 1, explanation: "With the depth anywhere from 9.25 to 9.34, the volume lies between about 6866 and 6933 (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "When does Cullimore say we have a right to use the slide rule?", options: ["Whenever four places are wanted", "Only for rough checks of work", "Where three figures are warranted", "Only on problems with no decimals"], correctIndex: 2, explanation: "\"We have a right to use it where three significant figures are warranted in the result\" (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "What does Holman's rule say about multiplying and dividing?", options: ["Errors cancel out when factors are multiplied", "A result is always more accurate than its data", "Each factor doubles the error of the result", "A % error in one gives the same % in the result"], correctIndex: 3, explanation: "\"A given percentage error in one of them will produce the same percentage error in the result\" (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "According to Pickworth, what may rapid working do to the percentage error?", options: ["Double it", "Halve it", "Remove it", "Square it"], correctIndex: 0, explanation: "\"With rapid working the percentage error may be doubled\" (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "With careful short calculations on the lower scales, what should Pickworth's error not greatly exceed?", options: ["0.015 per cent", "0.15 per cent", "1.5 per cent", "15 per cent"], correctIndex: 1, explanation: "\"The error should not greatly exceed 0.15 per cent, with short calculations\" (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "Besides scale length, what does Pickworth say accuracy depends on?", options: ["The weather and the time of day", "The price paid for the rule", "Graduations, eyesight and skill", "The number of scales on the slide"], correctIndex: 2, explanation: "It depends primarily on scale length, but also on the graduations, the user's eyesight and skill at estimating between marks (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "For 19 × 27 the rule shows between 510 and 515. What is the exact product?", options: ["510", "512", "515", "513"], correctIndex: 3, explanation: "The third figure \"must be 3, since the product of 9 and 7 is 63\": 513 (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "How does Pickworth fix the third figure of 19 × 27?", options: ["9 × 7 = 63, so it ends in 3", "19 + 27 = 46, so it ends in 6", "It is read by eye between marks", "It is taken from the A scale"], correctIndex: 0, explanation: "The last digits of the factors fix the last digit of an exact product: 9 × 7 = 63 (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "Which catalog course teaches choosing how many figures to report for published numbers?", options: ["Sound Craft, lesson 1", "How to Read a Number", "Who Gets the Credit", "Computational Neuroscience"], correctIndex: 1, explanation: "How to Read a Number: Statistics for Citizens teaches it in lessons 8 and 9 (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "On a 10-inch rule, how many figures does Pickworth say you read directly?", options: ["Two, and a third on the right", "Four, and a fifth on the left", "Three, at times a fourth at left", "Five, with a magnifying cursor"], correctIndex: 2, explanation: "Three figures directly, and sometimes a fourth near the left end (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
          { prompt: "What does lesson 9 say the slide rule adds to the habit of reporting figures?", options: ["A table of rules for rounding", "A proof that four figures are best", "A way to report more figures", "A physical limit you can see"], correctIndex: 3, explanation: "\"The slide rule makes the same point with a physical limit you can see\" (lesson 9).", sourceLessonSlug: "how-accurate-is-it" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: A, B and L
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "squares-and-square-roots",
      title: "10 · Squares and square roots on A and D",
      section: "4 · A, B and L: squares, roots and logarithms",
      recallContent: [
        {
          prompt: "When does Cullimore say we have a right to use the slide rule?",
          answer: "Where three significant figures are warranted in the result: the rule gives about one part in a thousand.",
        },
        {
          prompt: "What does Holman's rule say about multiplying and dividing measured numbers?",
          answer: "A given percentage error in one of them produces the same percentage error in the result.",
        },
      ],
      body: `${P("BAM on camera setting the cursor to 4.17 and to 114 on D and reading their squares on A, finding the square roots of 5 and 50 on the two halves of A, and working the area of an 11.6-inch circle")}

**A table of squares on the face.** Cullimore: "The numbers on A are the squares of those on D. We have then a table of squares and square roots ready at hand." Pickworth says the same of the slide: over any number on D is its square on A, and under any number on A is its square root on D, "the same remarks applying to the C and B scales on the slide." D runs from 1 to 10, and A, above it, from 1 to 100.

**Why it works.** A carries two copies of the 1-to-10 scale in the length D uses for one, so each copy is half as long. A distance that stands for the logarithm of a number on D stands for twice that logarithm on A, and lesson 1 showed that doubling a logarithm squares the number. The cursor line carries the distance from one scale to the other.

**Squaring.** Pickworth: "set the cursor to the number on D and read the required square on A under the cursor." Cullimore squares 4.17: the runner to 417 on D, and under it on A, 17.4. Estimate first, as always: 4 squared is 16, so the answer is 17.4, not 1.74 or 174.

**What the A scale gives up.** Pickworth squares 114. The cursor on 114 on D shows 13 on the left half of A, and his digit rule makes it 13,000. "The true result is 12,996." A is half as long as D, so its marks are coarser (lesson 5: two, sometimes three figures). When a square is wanted to three figures, multiply the number by itself on C and D instead; Pickworth calls that plan "often very convenient."

**Square roots, and which half of A.** The reverse: set the cursor to the number on A and read the root on D. But every number appears twice on A, once in each half. Cullimore's example: the runner on 5 in the left half shows 2.24 on D; on 5 in the right half it shows 7.07. "It is evident that 2.24 is the square root of 5, and 7.07 the square root of 50." His rule: "If a number has an uneven number of digits to the left of the decimal point, use the left-hand scale; if an even number, the right-hand scale on A." So the left-hand 5 also gives the roots of 500 and 50,000: 22.4 and 224.

**Or estimate.** Cullimore adds: "It is perhaps better in most cases to estimate the result mentally and set on the scale so as to approximate this result." The root of 5 is about 2, so use the half that gives about 2. Pickworth's root of 36,500: five figures, an odd number, so the left half; 365 there gives 191 on D, and since 190 squared is 36,100, the root is 191. A number below 1 follows the same habit: the root of 0.0098 is near 0.1, because 0.1 squared is 0.01, and Pickworth reads 0.099 from the right half.

**Squares inside a formula.** A and B also multiply, so a square can be multiplied in the same setting. Cullimore finds 3 squared times 9: set 1 on C to 3 on D, and over 9 on B read 81 on A. His area of a circle uses the same idea. The area is 0.7854 times the diameter squared, and 0.7854 is marked on the right halves of A and B "by a longer line in the same way that π is marked." Set the runner to the diameter, 11.6, on D; bring 1 on B to the runner; and over the 0.7854 mark on B read 105.7 on A, the area in square inches.

:::reveal Where is the square of a number on D found? ||| On A, directly above it under the cursor line: Cullimore's 4.17 gives 17.4.

:::reveal Which half of A gives the square root of 50? ||| The right half: 5 there gives 7.07 on D. The left half's 5 gives 2.24, the root of 5.

## Sources
- ${CULLIMORE} Locator: p. 9 (PDF p. 13), "The numbers on A are the squares of those on D" and the square of 4.17; p. 10 (PDF p. 14), the square roots of 5 and 50, the rule for the half of A, and estimating; p. 11 (PDF p. 15), the area of a circle and the 0.7854 mark; p. 15 (PDF p. 19), 3 squared times 9. ${TA}
- ${PICKWORTH} Locator: p. 37 (PDF p. 43), squares and square roots on A and D and the rule for squaring; p. 38 (PDF p. 44), the square of 114 and 12,996, the roots of 36,500 and 0.0098; p. 39 (PDF p. 45), squaring by ordinary multiplication. ${TA}`,
    },
    {
      slug: "reading-the-l-scale",
      title: "11 · Reading logarithms on the L scale",
      section: "4 · A, B and L: squares, roots and logarithms",
      recallContent: [
        {
          prompt: "What does Cullimore call the A and D scales taken together?",
          answer: "A table of squares and square roots ready at hand: the numbers on A are the squares of those on D.",
        },
        {
          prompt: "Why does Pickworth's square of 114 read 13,000 when the true value is 12,996?",
          answer: "A is half as long as D, so its marks are coarser and it gives only two or three figures. Multiplying 114 by itself on C and D gives three.",
        },
      ],
      body: `${P("BAM on camera showing where the L scale sits on his own rule, then reading the logarithms of 2 and 265 and setting the logarithm 3.697 to find its number")}

**A ruler with equal marks.** Every scale so far has been logarithmic, its marks crowding together toward the right. The L scale is not. Pickworth finds it on the back of the slide of the Gravet and similar rules: one of three scales there, "usually the centre one," is "divided equally throughout its entire length, and figured from right to left. It is sometimes marked L, indicating that it is a scale giving logarithms." It is divided "primarily into ten equal parts, and each of these subdivided into 50 equal parts," so each small division is worth 0.002. It is lesson 3's ordinary ruler, laid beside the logarithmic one to measure how far each number sits from 1.

**Why it reads logarithms.** The L scale is "equal in length to the logarithmic scale D." When the left index of C sits over a number on D, the slide has moved a distance proportional to that number's logarithm, and an evenly divided scale on the slide measures the move. Pickworth's example: set 1 on C to 2 on D, turn the rule over, and read at the reference mark in the notch at the right-hand end: 0.301, the logarithm of 2.

**Cullimore's two ways.** On his Keuffel & Esser rule the back of the slide carries a scale of sines marked S, a scale of tangents marked T, and "a scale of equal parts in the center," read under "the line etched on the xylonite on the left end of the back of the rule." First way: set 1 on C to the number on D, turn the rule over, and read under the line. For 265 he reads 423. Second way: "reverse and invert the slide," so that its back faces you upside down in the groove, and read the figures "directly over the number on D," using the runner. Both give the same reading.

**Only the mantissa.** The scale gives the decimal part. Cullimore: "It should be remembered that the number found on the rule gives only the mantissa of the logarithm and that the characteristic must in every case be supplied in order to complete the logarithm." 265 has three figures before the point, so its characteristic is 2 (lesson 2), and log 265 = 2.423. Pickworth states the rule for the characteristic exactly as lesson 2 did: the number of figures before the point, minus 1; or, for a number wholly decimal, the zeros after the point, plus 1, and negative.

**Back from a logarithm to its number.** Run it the other way. Cullimore finds the number whose logarithm is 3.697: set 697 on the scale of equal parts to the line, and read on D under 1 on C: 4980. The characteristic 3 says four figures before the point, so the number is 4,980.

**Where is yours?** Not every rule keeps L on the back of the slide. A Smithsonian record lists L on the front of a Pickett "Decimal Keeper" of about 1958, beside the K, A, DF and D scales; another lists it among the scales on the second side of a two-sided 5-inch Pickett rule of the early 1960s. Find it on your own rule before you start. Where it sits on BAM's rule is shown in his video and is not yet recorded in this lesson.

:::reveal What does the L scale read when 1 on C is set to 2 on D? ||| 0.301, the mantissa of the logarithm of 2 (Pickworth's example).

:::reveal What must you add to an L-scale reading to complete a logarithm? ||| The characteristic, worked out from the number of figures (lesson 2): for 265 it is 2, so log 265 = 2.423.

## Sources
- ${PICKWORTH} Locator: p. 45 (PDF p. 51), the scale of logarithms on the back of the slide, its divisions and the reference mark; p. 46 (PDF p. 52), why it reads the mantissa, log 2 = 0.301, and the rule for the characteristic. ${TA}
- ${CULLIMORE} Locator: p. 5 (PDF p. 9), the S, T and equal-parts scales on the back of the slide; p. 6 (PDF p. 10), the line on the back of the rule; p. 20 (PDF p. 24), the two ways of reading logarithms, log 265 = 2.423, and the number whose logarithm is 3.697. ${TA}
- ${NMAH_904} Locator: description, first paragraph (the scales on the front). ${TB}
- ${NMAH_N600} Locator: description, first and second paragraphs (the scales on each side). ${TB}`,
    },
    {
      slug: "powers-and-roots-by-logarithms",
      title: "12 · Powers and roots by logarithms, with notes on CI and K",
      section: "4 · A, B and L: squares, roots and logarithms",
      recallContent: [
        {
          prompt: "Why does an evenly divided scale on the slide read logarithms?",
          answer: "It is as long as D, so when the left index of C sits over a number on D the slide has moved a distance proportional to that number's logarithm, and the even scale measures the move.",
        },
        {
          prompt: "How does Cullimore find the number whose logarithm is 3.697?",
          answer: "Set 697 on the scale of equal parts to the line and read 4980 on D under 1 on C; the characteristic 3 makes it 4,980.",
        },
      ],
      body: `${P("BAM on camera working 36 to the power 1.414 by the L scale, cubing 2.17 with A and B, and, if his rule carries them, showing a reciprocal on CI and a cube on K")}

**When squares are not enough.** For "powers or roots other than those of the simple forms already discussed," Pickworth writes, "it is necessary to employ the usual logarithmic process." To raise a number to a power, multiply its logarithm by the power; to take a root, divide the logarithm by the root. Then find the number that has the new logarithm. Lesson 1 did this with a table (0.477 × 2 = 0.954, the logarithm of 9). The L scale lets the rule do it.

**The steps, in Pickworth's order.**
1. Set the left index of C to the number on D, and read the mantissa on L.
2. Add the characteristic (lesson 2).
3. Multiply by the power, or divide by the root, on C and D.
4. Set the decimal part of the result on L, and read the answer on D under the left index of C.
5. Place the point from the characteristic of the result.

**Pickworth's example: 36 to the power 1.414.** Set 1 on C to 36 on D: L reads 0.556. 36 has two figures, so the characteristic is 1, and log 36 = 1.556. Multiply 1.556 by 1.414 on C and D: 2.2. Set 0.2 on L and read 1585 on D. The characteristic 2 means three figures before the point: 158.5.

**Cullimore's example: a fractional power.** For 717 to the power 3/5, divide 3 by 5 in your head: 0.6. The logarithm of 717 is 2.855; multiply by 0.6 on the rule: 1.713. The mantissa 0.713 set on the scale gives 516, and the characteristic 1 makes it 51.6. "Remember that the rule in every case gives only the mantissas and that the characteristic must be supplied independently."

**Not always the best way.** Cullimore raises 3.17 to the seventh power two ways. By squares and cubes, (3.17 × 3.17) squared times 3.17 cubed, the rule gives 3210. By logarithms, log 3.17 = 0.501, times 7 is 3.505, and 0.505 on the scale gives 3210 again. "The first method is the more accurate, while for the seventh power, at least, the second is much the shorter." He keeps logarithms for fractional powers and roots, except where the power or root is a multiple of two or three. A fourth power, Pickworth notes, is the square of the square, and a fourth root the square root of the square root.

**Cubes on A and B.** Pickworth's rule for a cube: "Set the l.h. or r.h. index of C to the number on D, and opposite the number on the left-hand scale of B read the cube" on A. One setting squares the number and multiplies by it again. His examples: 1.4 cubed is about 2.745 (exactly 2.744), and 26.4 cubed is about 18,400. Cullimore cubes 2.17: the runner to 2.17 on D, 1 on B to the runner, and over 2.17 on B read 10.2 on A.

**Note: the K scale (cubes).** Many rules carry a scale of cubes. Cullimore's Keuffel & Esser "Polyphase" rule has one "below D on the edge": "Set R on any number on D and read the cube of that number on the edge of rule below D." It is divided into three parts, for numbers with one, two and three figures before the point, and read in reverse it gives cube roots. He warns that it is less accurate than cubing on A and B, though "sufficient for many purposes."

**Note: the CI scale (reciprocals).** A CI scale is the C scale running backward, red on Cullimore's rule. "The red scale CI obviates the necessity of inverting the slide," he writes, and multiplying or dividing between CI and D is "just the reverse" of the same work between C and D. With the indices of C and D together, each number on D faces its reciprocal on CI. CI saves settings: Cullimore multiplies four factors, 12.8 × 6.14 × 183.2 × 62.5, in seven settings with C and D and in four with CI. And it divides one number by many: he times 85 turns of a current meter at 47.3, 48.1 and 46.4 seconds, sets 1 on C to 85 on D, and reads on D, under each time on CI, 1.80, 1.77 and 1.83 turns per second.

**What this course leaves out.** Trigonometric scales (S and T) and log-log scales are not taught. Each would need its own section, and neither is needed to understand the instrument. Lesson 25 says what they add.

:::reveal How do you raise a number to a fractional power on the rule? ||| Read its mantissa on L and add the characteristic, multiply by the power on C and D, set the decimal part of the result on L, and read the answer on D under the index of C.

:::reveal Why does Cullimore work 3.17 to the seventh by squares and cubes rather than logarithms? ||| The squares-and-cubes method is more accurate. Logarithms are shorter, and he keeps them for fractional powers and roots.

## Sources
- ${PICKWORTH} Locator: p. 40 (PDF p. 46), the rule for a cube; p. 41 (PDF p. 47), 1.4 cubed and 26.4 cubed; p. 45 (PDF p. 51), fourth powers and roots and "the usual logarithmic process"; p. 46 (PDF p. 52), the steps and 36 to the power 1.414. ${TA}
- ${CULLIMORE} Locator: p. 14 (PDF p. 18), the red CI scale, "obviates the necessity of inverting the slide", and the four-factor product; p. 15 (PDF p. 19), "just the reverse" and the current meter; p. 17 (PDF p. 21), cubing 2.17 and the scale of cubes below D; p. 19 (PDF p. 23), the three parts of the cube scale; pp. 20 to 21 (PDF pp. 24 to 25), 3.17 to the seventh power, 717 to the power 3/5, and "only the mantissas". ${TA}`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · A, B and L: squares, roots and logarithms",
      section: "4 · A, B and L: squares, roots and logarithms",
      body: "A graded check on squares and square roots on A and D, reading logarithms on the L scale, powers and roots by logarithms, cubes on A and B, and the K and CI scales. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "According to Cullimore, what are the numbers on A?", options: ["The squares of those on D", "The cubes of those on D", "The roots of those on D", "The logs of those on D"], correctIndex: 0, explanation: "\"The numbers on A are the squares of those on D. We have then a table of squares and square roots ready at hand\" (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "Where is the square root of a number on A found?", options: ["On L, at the back mark", "On D, directly under it", "On K, below the D scale", "On B, directly under it"], correctIndex: 1, explanation: "Under any number on A is its square root on D, read with the cursor (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "Which slide scales share the A-and-D relation, per Pickworth?", options: ["L and K", "A and C", "B and C", "D and L"], correctIndex: 2, explanation: "Over any number on D is its square on A, \"the same remarks applying to the C and B scales on the slide\" (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "What range of numbers does the A scale cover, above D's 1 to 10?", options: ["1 to 20", "1 to 1,000", "0 to 10", "1 to 100"], correctIndex: 3, explanation: "D runs from 1 to 10, and A, above it, from 1 to 100, the corresponding squares (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "Why is a number on A the square of the number below it on D?", options: ["Each half of A is half as long as D", "A is printed at twice the size of D", "A starts at 2 where D starts at 1", "A is the D scale read right to left"], correctIndex: 0, explanation: "The same distance stands for twice the logarithm on A, and doubling a logarithm squares the number (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "What does the cursor line do between D and A?", options: ["Halves the distance", "Carries the distance", "Doubles the number", "Adds the logarithms"], correctIndex: 1, explanation: "\"The cursor line carries the distance from one scale to the other\" (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "How does Pickworth square a number?", options: ["Cursor to it on A; read D", "Index of C to it; read L", "Cursor to it on D; read A", "Cursor to it on B; read C"], correctIndex: 2, explanation: "\"Set the cursor to the number on D and read the required square on A under the cursor\" (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "Cullimore sets the runner to 417 on D. What does he read on A?", options: ["1.74", "174", "41.7", "17.4"], correctIndex: 3, explanation: "The square of 4.17 is 17.4; an estimate of 4 squared, 16, places the point (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "Which estimate places the square of 4.17?", options: ["4 squared is 16", "4 times 2 is 8", "4 plus 4 is 8", "4 cubed is 64"], correctIndex: 0, explanation: "4 squared is 16, so the reading is 17.4, not 1.74 or 174 (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "What does the cursor on 114 on D show on A, in Pickworth's example?", options: ["11.4", "13", "2.28", "1.21"], correctIndex: 1, explanation: "It shows 13 on the left half of A, which his digit rule makes 13,000 (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "Pickworth reads the square of 114 as 13,000. What is the true value?", options: ["13,000", "11,400", "12,996", "12,100"], correctIndex: 2, explanation: "\"The true result is 12,996\": the A scale gave only two figures (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "Why does the A scale give fewer figures than D?", options: ["It runs backward", "It has no cursor", "Its 1 is missing", "Its marks are coarser"], correctIndex: 3, explanation: "A is half as long as D, so its marks are coarser: two, sometimes three figures (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "For a square wanted to three figures, what does Pickworth call often very convenient?", options: ["Multiplying it by itself on C and D", "Reading it twice on the A scale", "Taking its log on the L scale", "Cubing it on A and B, then rooting"], correctIndex: 0, explanation: "The plan of squaring by ordinary multiplication is \"often very convenient\" (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "On which half of A does Cullimore find the square root of 5?", options: ["The right half", "The left half", "The middle index", "The back of A"], correctIndex: 1, explanation: "The runner on 5 in the left half shows 2.24 on D, the square root of 5 (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "What does the runner show on D when set to 5 on the right half of A?", options: ["2.24", "22.4", "7.07", "2.50"], correctIndex: 2, explanation: "7.07, the square root of 50 (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "What is 7.07 the square root of, per Cullimore?", options: ["5", "500", "0.5", "50"], correctIndex: 3, explanation: "\"It is evident that 2.24 is the square root of 5, and 7.07 the square root of 50\" (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "By Cullimore's rule, which half of A takes a number with an odd count of digits before the point?", options: ["The left-hand half", "The right-hand half", "Either half, at will", "The middle index"], correctIndex: 0, explanation: "\"If a number has an uneven number of digits to the left of the decimal point, use the left-hand scale\" (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "Under the left-hand 5 on A, which roots does Cullimore read?", options: ["Of 50, 5,000 and 500,000", "Of 5, 500 and 50,000", "Of 5, 50 and 500", "Of 0.5, 50 and 5,000"], correctIndex: 1, explanation: "Under the left-hand 5 are the square roots of 5, 500 and 50,000: 2.24, 22.4 and 224 (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "What is the square root of 500, read from the left-hand 5 on A?", options: ["2.24", "7.07", "22.4", "70.7"], correctIndex: 2, explanation: "The left-hand 5 gives 2.24, 22.4 and 224 for 5, 500 and 50,000 (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "What does Cullimore say is perhaps better, in most cases, than the digit rule?", options: ["Reading both halves", "Using the L scale", "Using the K scale", "Estimating the root"], correctIndex: 3, explanation: "\"It is perhaps better in most cases to estimate the result mentally and set on the scale so as to approximate this result\" (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "Which half of A does Pickworth use for the root of 36,500, and why?", options: ["The left: five figures, odd", "The right: five figures, odd", "The left: three figures, odd", "The right: four figures, even"], correctIndex: 0, explanation: "36,500 has five figures, an odd number, so the left half; 365 there gives 191 on D (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "What is the square root of 36,500, read from 191 on D?", options: ["19.1", "191", "1,910", "1.91"], correctIndex: 1, explanation: "190 squared is 36,100, so the root is 191 (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "About what is the square root of 0.0098?", options: ["0.99", "0.0099", "0.099", "0.98"], correctIndex: 2, explanation: "0.1 squared is 0.01, so the root is near 0.1; Pickworth reads 0.099 from the right half (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "How does Cullimore find 3 squared times 9?", options: ["1 of C to 9 on D; A over 3 on B", "Runner to 3 on A; read 9 on D", "Runner to 9 on L; read on D", "1 of C to 3 on D; A over 9 on B"], correctIndex: 3, explanation: "Set 1 on C to 3 on D, and over 9 on B read 81 on A (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "What number besides π is marked by a longer line on the right halves of A and B?", options: ["0.7854", "1.4142", "0.3010", "2.7183"], correctIndex: 0, explanation: "0.7854 is marked \"by a longer line in the same way that π is marked\" (lesson 10).", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "What area does Cullimore read for a circle 11.6 inches across?", options: ["10.57 sq in", "105.7 sq in", "1,057 sq in", "36.4 sq in"], correctIndex: 1, explanation: "Runner to 11.6 on D, 1 on B to the runner, and over 0.7854 on B read 105.7 on A (lesson 10). 36.4 is the circumference.", sourceLessonSlug: "squares-and-square-roots" },
          { prompt: "How is the L scale divided, compared with C and D?", options: ["More finely at the right", "Only from 1 to 2, finely", "Equally, from end to end", "Twice over, like the A"], correctIndex: 2, explanation: "It is \"divided equally throughout its entire length\" (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "Which way are the figures on Pickworth's L scale read?", options: ["Left to right", "Top to bottom", "Bottom to top", "Right to left"], correctIndex: 3, explanation: "It is \"figured from right to left\" (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "Into how many parts is Pickworth's L scale primarily divided?", options: ["Ten", "Fifty", "Five", "Twenty"], correctIndex: 0, explanation: "\"Primarily into ten equal parts, and each of these subdivided into 50 equal parts\" (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "What is each small division on Pickworth's L scale worth?", options: ["0.02", "0.002", "0.005", "0.01"], correctIndex: 1, explanation: "Ten parts of 50 make 500 divisions, so each is worth 0.002 (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "Where does Pickworth find the L scale on the Gravet and similar rules?", options: ["On the face, above A", "On the cursor glass", "On the slide's back", "On the rule's edge"], correctIndex: 2, explanation: "\"Upon the back of the slide of the Gravet and similar slide rules there will be found three scales\" (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "What is the L scale, in terms of lesson 3?", options: ["A second logarithmic scale", "A scale of squares, halved", "A scale of reciprocals", "An ordinary ruler beside D"], correctIndex: 3, explanation: "It is lesson 3's ordinary ruler, laid beside the logarithmic one to measure how far each number sits from 1 (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "Why does the L scale read logarithms?", options: ["It is as long as D, so it measures the move", "It is twice as long as D, so it halves it", "It is printed in red, so it reads backward", "It is on the back, where no numbers show"], correctIndex: 0, explanation: "It is \"equal in length to the logarithmic scale D,\" so it measures how far the slide moved, which is proportional to the logarithm (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "Setting 1 on C to 2 on D, what does Pickworth read on L?", options: ["0.200", "0.301", "0.477", "0.693"], correctIndex: 1, explanation: "0.301, the logarithm of 2 (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "Where is Pickworth's reference mark for reading the L scale?", options: ["On the cursor's hairline", "In a notch at the left end", "In a notch at the right end", "On the face beside D's 1"], correctIndex: 2, explanation: "\"In the recess or notch in the right-hand end of the rule is a reference mark\" (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "Where does Cullimore read the scale of equal parts on his rule?", options: ["At a notch at the right end", "Over 1 on the D scale only", "Through a lens in the cursor", "Under a line at the left end"], correctIndex: 3, explanation: "Under \"the line etched on the xylonite on the left end of the back of the rule\" (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "Besides the scale of equal parts, what is on the back of Cullimore's slide?", options: ["Scales of sines and tangents", "Scales of squares and cubes", "Scales of inches and cm", "A table of reciprocals"], correctIndex: 0, explanation: "A scale of sines marked S, a scale of tangents marked T, and a scale of equal parts in the center (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "For 265, what figures does Cullimore read on the scale of equal parts?", options: ["265", "423", "2.65", "551"], correctIndex: 1, explanation: "Set 1 on C to 265 on D and read 423 under the line (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "What is the logarithm of 265, with its characteristic added?", options: ["0.423", "4.230", "2.423", "1.423"], correctIndex: 2, explanation: "Three figures before the point give a characteristic of 2: log 265 = 2.423 (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "What does the scale give, according to Cullimore?", options: ["The whole logarithm", "Only the characteristic", "The number itself", "Only the mantissa"], correctIndex: 3, explanation: "\"The number found on the rule gives only the mantissa of the logarithm\" (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "In Cullimore's second way, what does he do with the slide?", options: ["Reverses and inverts it", "Leaves it in place", "Removes it entirely", "Turns the cursor over"], correctIndex: 0, explanation: "He reverses and inverts the slide and reads the figures directly over the number on D (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "In Cullimore's second way, where is the mantissa read?", options: ["Under the 1 of C, on D", "Over the number on D", "At the right-end notch", "Over the middle of A"], correctIndex: 1, explanation: "\"Directly over the number on D,\" using the runner (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "Cullimore sets 697 on the scale of equal parts to the line. What does D show under 1 on C?", options: ["697", "3697", "4980", "1300"], correctIndex: 2, explanation: "4980, the figures of the number whose logarithm is 3.697 (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "What number has the logarithm 3.697?", options: ["49.8", "498", "49,800", "4,980"], correctIndex: 3, explanation: "The characteristic 3 says four figures before the point: 4,980 (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "Why must a characteristic be added to an L reading?", options: ["L gives only the decimal part", "L gives the number's square", "L reads the slide's length", "L omits the last figure"], correctIndex: 0, explanation: "The scale gives the mantissa only; the characteristic \"must in every case be supplied\" (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "Where does a museum record list the L scale on a Pickett Decimal Keeper?", options: ["On the cursor", "On the front", "On the case", "On the slide's edge"], correctIndex: 1, explanation: "The record lists K, A, DF, D and L scales on the front of that rule (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "What should you do before using L on your own rule, per lesson 11?", options: ["Oil the slide", "Turn it to 1", "Find where it sits", "Buy a lens"], correctIndex: 2, explanation: "Not every rule keeps L on the back of the slide, so find it on your own rule first (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "On Pickworth's L scale, how many subdivisions has each of the ten main parts?", options: ["10", "20", "100", "50"], correctIndex: 3, explanation: "Each of the ten parts is \"subdivided into 50 equal parts\" (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "How long is the L scale, per Pickworth?", options: ["Equal to D", "Half of D", "Twice D", "A tenth of D"], correctIndex: 0, explanation: "It is \"equal in length to the logarithmic scale D\" (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "What is the logarithm of 2,000, from an L reading of 0.301?", options: ["0.301", "3.301", "2.301", "4.301"], correctIndex: 1, explanation: "2,000 has four figures before the point, so the characteristic is 3 (lessons 2 and 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "What does the scale of equal parts measure when 1 on C sits over a number on D?", options: ["The square of the number", "The cursor's position", "How far the slide moved", "The number's reciprocal"], correctIndex: 2, explanation: "The slide has moved a distance proportional to the logarithm, and the even scale measures the move (lesson 11).", sourceLessonSlug: "reading-the-l-scale" },
          { prompt: "For which powers does Pickworth say the logarithmic process is necessary?", options: ["Only the squares", "Only the cubes", "Only fourth powers", "Beyond simple forms"], correctIndex: 3, explanation: "For \"powers or roots other than those of the simple forms already discussed\" (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "To raise a number to a power by logarithms, what do you do with its logarithm?", options: ["Multiply by the power", "Add the power", "Divide by the power", "Square the power"], correctIndex: 0, explanation: "Multiply the logarithm by the power, then find the number with the new logarithm (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "To take a root by logarithms, what do you do with the logarithm?", options: ["Multiply by the root", "Divide by the root", "Add the root to it", "Subtract the root"], correctIndex: 1, explanation: "Divide the logarithm by the root (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "In Pickworth's steps, what comes right after reading the mantissa on L?", options: ["Set the result on L", "Read D under 1 on C", "Add the characteristic", "Place the point"], correctIndex: 2, explanation: "Step 2: add the characteristic (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "Where is the multiplication by the power done, in Pickworth's steps?", options: ["On L and the back", "On A and B", "On K and CI", "On C and D"], correctIndex: 3, explanation: "Step 3: multiply by the power, or divide by the root, on C and D (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "In the last step, what fixes the decimal point of the answer?", options: ["Its characteristic", "The first mantissa", "The cursor's line", "The middle index"], correctIndex: 0, explanation: "Place the point from the characteristic of the result (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "Setting 1 on C to 36 on D, what does Pickworth read on L?", options: ["0.360", "0.556", "0.778", "1.556"], correctIndex: 1, explanation: "L reads 0.556; the characteristic is added separately (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "What is log 36, with its characteristic?", options: ["0.556", "2.556", "1.556", "3.600"], correctIndex: 2, explanation: "36 has two figures, so the characteristic is 1: log 36 = 1.556 (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "Pickworth multiplies 1.556 by 1.414 on C and D. What does he get?", options: ["3.0", "1.1", "0.2", "2.2"], correctIndex: 3, explanation: "1.556 × 1.414 = 2.2, the logarithm of the result (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "What is 36 to the power 1.414, in Pickworth's example?", options: ["158.5", "15.85", "1,585", "50.9"], correctIndex: 0, explanation: "Set 0.2 on L and read 1585 on D; the characteristic 2 makes it 158.5 (lesson 12). 50.9 is 36 × 1.414.", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "Why does 36 to the power 1.414 have three figures before the point?", options: ["The power 1.414 has three figures", "The result's log has characteristic 2", "The number 36 has three digits", "The L scale reads exactly 0.200"], correctIndex: 1, explanation: "Log of the result is 2.2; characteristic 2 means three figures before the point (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "For 717 to the power 3/5, what does Cullimore first work out in his head?", options: ["1.67", "0.3", "0.6", "15"], correctIndex: 2, explanation: "Divide 3 by 5: 0.6 (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "What is the logarithm of 717, per Cullimore?", options: ["0.855", "7.170", "3.855", "2.855"], correctIndex: 3, explanation: "The logarithm of 717 is 2.855 (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "What is 2.855 × 0.6, the logarithm of 717 to the power 3/5?", options: ["1.713", "4.758", "2.255", "0.713"], correctIndex: 0, explanation: "2.855 × 0.6 = 1.713 (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "What is 717 to the power 3/5, per Cullimore?", options: ["516", "51.6", "5.16", "430"], correctIndex: 1, explanation: "The mantissa 0.713 gives 516, and the characteristic 1 makes it 51.6 (lesson 12). 430 is 717 × 0.6.", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "What does Cullimore say the rule gives in every case?", options: ["Only the characteristics", "The whole logarithm", "Only the mantissas", "The answer and its point"], correctIndex: 2, explanation: "\"The rule in every case gives only the mantissas and ... the characteristic must be supplied independently\" (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "What answer does Cullimore get for 3.17 to the seventh power?", options: ["321", "32,100", "22.2", "3210"], correctIndex: 3, explanation: "Both methods give 3210 (lesson 12). 22.2 is 3.17 × 7.", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "Which of Cullimore's two methods for 3.17 to the seventh is the more accurate?", options: ["Squares and cubes", "The logarithms", "Neither; they tie", "The A and B scale"], correctIndex: 0, explanation: "\"The first method is the more accurate, while for the seventh power, at least, the second is much the shorter\" (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "For which problems does Cullimore keep the logarithm method?", options: ["Squares and square roots", "Fractional powers and roots", "Products of four factors", "Reciprocals of decimals"], correctIndex: 1, explanation: "Fractional powers and roots, except where the power or root is a multiple of two or three (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "How does Pickworth find a fourth power?", options: ["The cube times two", "The log times two", "The square squared", "The root of a cube"], correctIndex: 2, explanation: "A fourth power is the square of the square (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "How does Pickworth find a fourth root?", options: ["The cube root of it", "Its log times four", "Its square halved", "The root of the root"], correctIndex: 3, explanation: "A fourth root is the square root of the square root (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "In Pickworth's rule for a cube, where is the cube read?", options: ["On A", "On D", "On L", "On B"], correctIndex: 0, explanation: "Opposite the number on the left-hand B scale, read the cube on A (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "What is 1.4 cubed, as Pickworth reads it?", options: ["About 1.960", "About 2.745", "About 4.200", "About 27.45"], correctIndex: 1, explanation: "About 2.745, exactly 2.744 (lesson 12). 1.96 is the square and 4.2 is 1.4 × 3.", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "What does Cullimore read on A for 2.17 cubed?", options: ["4.71", "6.51", "10.2", "102"], correctIndex: 2, explanation: "Runner to 2.17 on D, 1 on B to the runner, and over 2.17 on B read 10.2 on A (lesson 12). 4.71 is the square.", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "Where is the scale of cubes on Cullimore's Polyphase rule?", options: ["Above A, on the face", "On the slide's back", "Inside the cursor", "Below D, on the edge"], correctIndex: 3, explanation: "\"Below D on the edge of the polyphase will be found a scale of cubes\" (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "Why is Cullimore's cube scale divided into three parts?", options: ["For one, two or three figures before the point", "For cubes, squares and the roots of each", "For inches, feet and yards of material", "For the three sizes of rule then on sale"], correctIndex: 0, explanation: "Its three parts are for numbers with one, two and three figures before the point (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "How does Cullimore compare the cube scale with cubing on A and B?", options: ["More accurate, and much faster", "Less accurate, but often enough", "Exactly as accurate as A and B", "Too coarse to be used for anything"], correctIndex: 1, explanation: "Not as accurate, \"but it is sufficient for many purposes\" (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "What does the red CI scale do, per Cullimore?", options: ["Doubles the length of C", "Squares the C reading", "Saves inverting the slide", "Replaces the L scale"], correctIndex: 2, explanation: "\"The red scale CI obviates the necessity of inverting the slide\" (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "How do multiplying and dividing between CI and D compare with C and D?", options: ["They are exactly the same", "They need the A scale", "They need two cursors", "They are just the reverse"], correctIndex: 3, explanation: "They are \"just the reverse of those between C and D\" (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "With 1 on C at 85 on D, what does Cullimore read under 47.3 on CI?", options: ["1.80", "0.556", "18.0", "4.02"], correctIndex: 0, explanation: "85 turns in 47.3 seconds is 1.80 turns per second (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
          { prompt: "Which scales does lesson 12 say the course does not teach?", options: ["A, B and L", "S, T and log-log", "C, D and CI", "K, A and B"], correctIndex: 1, explanation: "Trigonometric scales (S and T) and log-log scales are not taught (lesson 12).", sourceLessonSlug: "powers-and-roots-by-logarithms" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5: Before the slide rule
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "napiers-bones",
      title: "13 · Napier's bones: multiplying with rods",
      section: "5 · Before the slide rule: Napier's rods and log tables",
      recallContent: [
        {
          prompt: "How do you raise 36 to the power 1.414 on the rule?",
          answer: "Read log 36 = 1.556 (L gives 0.556, characteristic 1), multiply by 1.414 on C and D to get 2.2, set 0.2 on L and read 1585 on D: 158.5.",
        },
        {
          prompt: "What does the red CI scale save you, according to Cullimore?",
          answer: "Turning the slide over: \"The red scale CI obviates the necessity of inverting the slide,\" and it cuts the settings in a long product.",
        },
      ],
      body: `${P("BAM on camera making a set of card rods for the digits 0 to 9 and multiplying 425 by 6, 8 and 36 with them")}

**The other thing Napier invented.** John Napier published his table of logarithms in 1614 (lesson 14). In 1617, the year he died, he published something simpler, "for the sake of those who may prefer to work with the natural numbers," in the words his translator W. R. Macdonald quotes: a set of "mechanical aids to computation," the most important of them "named Rabdologia, or calculation by means of small rods, familiarly called 'Napier's bones.'" His dedication explains the aim of both books: "to do away with the difficulty and tediousness of calculations, the irksomeness of which is wont to deter very many from the study of mathematics."

**What a rod looks like.** A Smithsonian record describes a set: rods "marked with the multiples of the digits from 0 to 9." Each face of a rod carries the multiples of one digit, one above the other. "Each square containing a multiple is divided diagonally, with the tens value of the number written in the upper left corner and the ones value in the lower right corner." So the rod for 7 shows 0/7, 1/4, 2/1, 2/8 and so on down to 6/3. The museum's set has ten short wooden rods with four faces each, plus "an eleventh, wider rod for square and cube roots." Napier himself, the record adds, suggested ten distinct rods.

**How the layout multiplies.** The record names the parts but does not walk through a sum; the steps below follow from the layout it describes, and every one can be checked by ordinary multiplication. Lay the rods for 4, 2 and 5 side by side, so their tops read 425. To multiply by 6, look along the sixth row: 2/4, 1/2 and 3/0 (that is, 24, 12 and 30). Now add along the diagonals, starting at the right:

| Diagonal | Ones place | Tens | Hundreds | Thousands |
|---|---|---|---|---|
| Digits added | 0 | 3 + 2 | 1 + 4 | 2 |
| Result | 0 | 5 | 5 | 2 |

Read it from the left: 2,550. And 425 × 6 is 2,550.

**Carrying.** The eighth row of the same rods reads 3/2, 1/6 and 4/0 (32, 16 and 40). From the right: 0; then 4 + 6 = 10, so write 0 and carry 1; then 1 + 2 + 1 = 4; then 3. The answer is 3,400, and 425 × 8 is 3,400. A diagonal never holds more than two digits plus a carry, so the hardest step is adding small numbers.

**A longer multiplier.** For 425 × 36, read the third row (12, 06, 15, which give 1,275) and the sixth (2,550). The 3 stands for 30, so shift the first answer one place: 12,750 + 2,550 = 15,300. The rods have turned a multiplication into reading rows and adding, the same trade Napier's logarithms make.

**Division runs the rows backward.** To divide 2,550 by 425, set out the rods for 425 and look down the rows for the multiple that fits: the sixth row gives 2,550 exactly, so the quotient is 6. For a longer division you take the largest row that does not exceed each part of the dividend, as in long division, but every multiple is already written out for you.

**Make a set.** Cut eleven strips of card. On ten of them write a digit at the top, 0 to 9, and below it nine squares holding that digit's multiples from 1 to 9, each square split by a diagonal from upper right to lower left, tens above the line and ones below. (The square-and-cube-root rod is not needed for multiplying.) Check each strip by ordinary multiplication before you trust it: a wrong square gives a wrong answer every time it is used.

:::reveal On a Napier's rod, where are the tens and the ones of each multiple written? ||| In each square, cut by a diagonal: the tens in the upper left corner, the ones in the lower right.

:::reveal Using the rods for 425, what do the diagonals of the sixth row give? ||| From the right: 0, 3 + 2 = 5, 1 + 4 = 5, then 2: so 2,550, which is 425 × 6.

## Sources
- ${MACDONALD} Locator: Introduction, p. xvi (PDF p. 20), the 1617 Rabdologia "for the sake of those who may prefer to work with the natural numbers" and "Napier's bones"; Notes, p. 88 (PDF p. 112), the dedication of Rabdologiae. ${TA}
- ${NAPIER_1617} Locator: the whole book (Latin), title page. ${TA}
- ${NMAH_RODS} Locator: description, first to third paragraphs (the book of 1617, the rods, the diagonal squares, the eleventh rod, ten distinct rods). ${TB}`,
    },
    {
      slug: "the-1614-table-and-briggs",
      title: "14 · The 1614 table, and Briggs's \"better kind\" of logarithm",
      section: "5 · Before the slide rule: Napier's rods and log tables",
      recallContent: [
        {
          prompt: "How do you multiply 425 by 6 with Napier's rods?",
          answer: "Lay the rods for 4, 2 and 5 side by side, read the sixth row (24, 12, 30), and add along the diagonals from the right: 0, 5, 5, 2. The answer is 2,550.",
        },
        {
          prompt: "Why did Napier publish the rods, in Macdonald's words?",
          answer: "\"For the sake of those who may prefer to work with the natural numbers\" rather than with logarithms.",
        },
      ],
      body: `**The problem.** Macdonald's introduction to Napier sets the scene: toward the end of the sixteenth century "the further progress of science was greatly impeded by the continually increasing complexity and labour of numerical calculation." Napier "deliberately set himself to devise some means of lessening this labour." By 1594 word was out: Kepler reports that Tycho Brahe, the astronomer, had been led by a Scottish correspondent to hope for "the publication of the Canon or Table of Logarithms." *Wrong for Good Reasons* lesson "8 · Geocentrism was good science" shows how much calculation Tycho's astronomy required.

**The book of 1614.** "The Canon, with the description of its nature and use, made its appearance in 1614," as the *Mirifici logarithmorum canonis descriptio* (in English, a description of the wonderful canon of logarithms). The method of building the table, the *Constructio*, was written several years earlier but published only in 1619, two years after Napier's death. In the *Constructio* the logarithms are called "artificial numbers": his son Robert explains that the treatise was written "several years before the word Logarithm was invented."

**It was not the table you would expect.** Napier's Canon "does not contain the logarithms of equidifferent numbers, but of sines of equidifferent arcs for every minute in the quadrant," Macdonald notes, with the radius taken as 10,000,000. It was built for trigonometry, the heavy arithmetic of astronomy and navigation, not for the plain multiplication this course does on a rule. Napier closed it with an apology: the table, which "ought to have been accomplished by the labour and assistance of many computors," had been computed "by the strength and industry of one alone," so errors were likely. "Nothing is perfect at birth."

**A better kind.** Napier saw a simpler scheme before he died. In the English translation of 1616 he promised a second edition whose logarithms would "fall upon decimal numbers, such as 100,000,000, 200,000,000, 300,000,000, &c., which are easie to bee added or abated." In the dedication of the 1617 book he wrote: "We have now also found out a better kind of logarithms," and, "owing to our bodily weakness, we leave the actual computation of the new canon to others skilled in this kind of work, more particularly to that very learned scholar, my very dear friend, Henry Briggs, public Professor of Geometry in London."

**Briggs.** Henry Briggs visited Napier at Merchiston in 1615 and 1616 and was preparing a third visit when Napier died, on 4 April 1617. Robert Napier's preface to the *Constructio* adds an appendix on "another and better kind of logarithms ... in which the logarithm of unity is 0," and credits Briggs with taking on "the very heavy labour of computing this new Canon." A logarithm of 1 equal to 0 is lesson 1's table: log 1 = 0, log 10 = 1, log 100 = 2. Every scale on a slide rule and every printed table in lesson 15 descends from it. The 1964 federal handbook that lesson 15 reads still calls base-10 logarithms "common or Briggs logarithms."

**And the decimal point.** Macdonald credits Napier with something lesson 2 relied on. Simon Stevin had proposed decimal fractions in 1585 "in a cumbrous form," but "Napier was the first to use the present notation." His first published explanation of it, in the 1617 book, divides 861094 by 432 and writes the quotient as 1993,273, "which signifies 1993 units and 273 thousandth parts," with a comma where we put a point. (The point itself had already appeared in the table printed with the English translation of 1616.)

:::reveal What did Napier's 1614 Canon actually tabulate? ||| The logarithms of sines, for every minute of the quadrant, with the radius taken as 10,000,000: a table built for trigonometry.

:::reveal What made Briggs's logarithms the "better kind"? ||| In them "the logarithm of unity is 0," so that log 10 = 1 and log 100 = 2: base 10, the kind on every slide rule.

## Sources
- ${MACDONALD} Locator: Introduction, p. xv (PDF p. 19), the labor of calculation, Tycho's hopes in 1594, Stevin and Napier's notation; p. xvi (PDF p. 20), the Canon of 1614, the Constructio of 1619, Briggs's visits and Napier's death; "To the Reader," sig. A2 verso (PDF p. 28), "artificial numbers," the better kind "in which the logarithm of unity is 0," and Briggs's "very heavy labour"; Notes, p. 85 (PDF p. 109), sines for every minute and the radius of 10,000,000; p. 87 (PDF p. 111), the note at the end of the Table, "Nothing is perfect at birth"; p. 88 (PDF p. 112), the 1616 admonition and the dedication of Rabdologiae; p. 89 (PDF p. 113), the division 861094 by 432. ${TA}
- ${NAPIER_1614} Locator: title page; the Canon follows the Descriptio. ${TA}
- ${AS_1964} Locator: chapter 4, p. 68 (PDF p. 100), "common or Briggs logarithms". ${TA}`,
    },
    {
      slug: "reading-a-log-table",
      title: "15 · Reading a printed log table, and interpolating",
      section: "5 · Before the slide rule: Napier's rods and log tables",
      recallContent: [
        {
          prompt: "What did Napier's 1614 Canon tabulate, and why?",
          answer: "The logarithms of sines for every minute of the quadrant, radius 10,000,000: it was built for the trigonometry of astronomy and navigation.",
        },
        {
          prompt: "Who computed the base-10 logarithms Napier called the \"better kind\"?",
          answer: "Henry Briggs, Professor of Geometry in London, who took on \"the very heavy labour of computing this new Canon.\"",
        },
      ],
      body: `${P("BAM on camera with a printed table of logarithms, looking up log 2 and log 3, adding them and finding 6, then interpolating the logarithm of 9836 and checking it on the rule")}

**The table the rule replaces.** Pickworth calls the slide rule "in effect a concisely arranged table of logarithms," and Cullimore measures its accuracy against "a four place table of logarithms" (lesson 9). This lesson opens a real one: Table 4.1, "Common Logarithms," in the *Handbook of Mathematical Functions* published by the National Bureau of Standards in 1964. It is a federal work, free to read, and its chapter 4 was written by Ruth Zucker.

**How the page is laid out.** Table 4.1 lists the numbers from 100 to 1350 with their common logarithms to ten decimal places, printed in groups of five digits. On its first page, beside 200, it prints 30102 99957: the mantissa 0.30102 99957, lesson 1's 0.301 to seven more places. Beside 300 it prints 47712 12547, Pickworth's 0.477. The characteristic is not printed, because, as the handbook explains, you supply it: write the number as x times a power of ten, with x between 1 and 10, and the logarithm "consists of an integral part which is called the characteristic and a decimal part which is called the mantissa." Table 4.1 gives the mantissa.

**Multiplying with it.** To multiply 2 by 3, add their logarithms: 0.30103 + 0.47712 = 0.77815. Then look for 77815 in the table, the reverse lookup the handbook calls the antilogarithm, "written antilog x or log⁻¹ x." Beside 600 it prints 77815 12504, so the product's figures are 6, and the characteristic 0 makes it 6. That is the whole method of lesson 1, done with a book instead of a rule.

**Between the lines: interpolation.** A table cannot list every number. The handbook's own example finds the mantissa of 9836: "Interpolation in Table 4.1 between 983 and 984 gives .99281 85 as the mantissa of 9836." The page prints:

| x | log₁₀ x (mantissa) |
|---|---|
| 983 | 99255 35178 |
| 984 | 99299 50984 |

9836 lies 6/10 of the way from 9830 to 9840. The difference between the two entries is 0.00044 15806, and 6/10 of it is 0.00026 49484. Add that to the entry for 983: 0.99281 84662, which rounds to the handbook's 0.99281 85. This straight-line method is **linear interpolation**. The same mantissa serves 9.836, 98.36 and 0.009836; only the characteristic changes, exactly as in lesson 2.

**With four places.** A four-place table would give 0.9926 for 983 and 0.9930 for 984. Six tenths of the difference, 0.0004, is 0.00024, so the mantissa of 9836 is about 0.9928. Four figures, about what a 10-inch rule reads: Cullimore's point exactly.

**Where a straight line is not enough.** Interpolating between neighbors assumes the logarithm runs straight between them, and it does not quite. The handbook uses a "four-point Lagrangian interpolation" to get all ten places, and warns of a case where straight lines fail: for natural logarithms of small numbers, "To obtain 5 decimal place accuracy with linear interpolation it is necessary that x > .175." For the three or four figures a slide-rule user wants, the straight line between neighbors is plenty.

**Who checked it.** The chapter's author "acknowledges the assistance of Lois K. Cherwinski and Elizabeth F. Godefroy in the preparation and checking of the tables." Lesson 16 is about the people who made tables like this one.

:::reveal What does Table 4.1 print beside 200, and what is it? ||| 30102 99957: the mantissa of log 200, 0.30102 99957. The characteristic, 2, you supply yourself.

:::reveal How do you interpolate the mantissa of 9836 from the entries for 983 and 984? ||| Take 6/10 of the difference between the two entries and add it to the entry for 983: 0.99281 85.

## Sources
- ${AS_1964} Locator: chapter 4 contents, p. 65 (PDF p. 97), Ruth Zucker and Table 4.1, x = 100 to 1350 to ten places; p. 66 (PDF p. 98), the acknowledgment of Lois K. Cherwinski and Elizabeth F. Godefroy; p. 89 (PDF p. 121), section 4.7, Example 1 (characteristic, mantissa, the interpolation for 9836, antilog), Example 2 (four-point Lagrangian interpolation) and Example 4 (x > .175); p. 95 (PDF p. 127), the entries for 200 and 300; p. 97 (PDF p. 129), the entry for 600; p. 98 (PDF p. 130), the entries for 983 and 984. ${TA}
- ${NIST_HMF} Locator: second paragraph (the Handbook issued June 1964 as Applied Mathematics Series 55). ${TA}
- ${PICKWORTH} Locator: p. 5 (PDF p. 11), "in effect a concisely arranged table of logarithms". ${TA}
- ${CULLIMORE} Locator: p. 3 (PDF p. 7), "a four place table of logarithms". ${TA}`,
    },
    {
      slug: "the-human-computers",
      title: "16 · The human computers and the tables they made",
      section: "5 · Before the slide rule: Napier's rods and log tables",
      recallContent: [
        {
          prompt: "How does the 1964 handbook find the mantissa of 9836?",
          answer: "By interpolating between the entries for 983 and 984: 6/10 of the difference added to the 983 entry gives 0.99281 85.",
        },
        {
          prompt: "Why is no characteristic printed in a table of common logarithms?",
          answer: "The mantissa is the same for every number with the same figures (9.836, 98.36, 0.009836), so you supply the characteristic from the size of the number.",
        },
      ],
      body: `**"Computor" was a job.** Napier's 1614 note at the end of his table already uses the word for a person: the table "ought to have been accomplished by the labour and assistance of many computors," and he hoped a later edition, "by the assistance of a greater number of computors," would be more accurate. For three centuries after, tables of logarithms and other functions were made by people working by hand. NASA's history of its Langley laboratory puts it plainly: "Before the development of electronic computers, the term 'computer' referred to people, not machines. It was a job title."

**The Math Tables Project, 1938 to 1946.** In New York City, a New Deal relief program of the Works Projects Administration put people to work "as (human) computers constructing tables of mathematical functions which were needed for hand computation," in the words of the National Institute of Standards and Technology, whose predecessor, the National Bureau of Standards, supported the project's mathematicians. It produced thirty-seven volumes of tables, "for trigonometric functions, exponentials, logarithms, and so on." Its director was Arnold Lowan; its chief mathematician was Gertrude Blanch, who already held a PhD in mathematics but "was unable to find professional employment as a mathematician." At its height it had "a staff of some 450 persons" and was, NIST says, the largest computing organization in the world.

**Breaking the work down.** Most of the project's computers were "largely unskilled." A planning committee led by Blanch wrote worksheets that split every calculation into steps: "Most just did addition, fewer subtraction, fewer yet (1-digit) multiplication, and just 1-2 people did division." Negative numbers were handled with "a system of black and red pencils," and a sign on the wall read: "Black + black = black. Red + red = red. Black + red or red + black: hand the sheets to Group 2." The few adding machines went to the project leads, for starting values and for checking. The WPA ended the project in early 1943, and it survived on war work, including air-navigation tables and calculations for the Manhattan Project whose purpose the computers were not told.

**The handbook those tables became.** NIST calls the 1964 *Handbook of Mathematical Functions*, the book lesson 15 reads, "the culmination of a quarter century of NBS work on mathematical functions which began with the Mathematical Tables Project." Its editor Milton Abramowitz had joined the project in 1938. "Most of the tables in the Handbook were generated by hand on desk calculators," even as electronic computers arrived. Abramowitz died in July 1958, and Irene Stegun, assistant chief of the Computation Laboratory, finished it. It appeared in June 1964, 1,046 pages long, and the government alone sold more than 150,000 copies.

**Computers at Langley, 1935 to the 1970s.** In 1935 Virginia Tucker, a former high school teacher with a mathematics degree, joined four other women in the first "computer pool" at the Langley Memorial Aeronautical Laboratory. A 1942 report counted 75 women computers, and another 1942 document praised them for calculating "more rapidly and accurately," doing more in a morning than an engineer alone could finish in a day. By 1946 Tucker's department had trained about 400. They read films of wind-tunnel instruments, ran calculations and plotted the results. "All of this work was done by hand, using slide rules, curves, magnifying glasses, and basic calculating machines, like the Marchant or the more popular Friden." In the 1940s Langley recruited African American women with college degrees into a segregated section, the "West Area Computers"; of their work NASA writes, "All calculations were completed with the aid of a slide rule and results recorded in logs and plotted on graphs." Langley's human computers worked "from the mid-1930s into the 1970s."

**Where to read more.** *How We Know What's Out There* lesson "8 · The Harvard Computers" tells the story of the women who measured stars at Harvard. A course in preparation in this catalog, *Who Were the Computers*, takes up the job title and the record of 1946; it is not yet open to learners.

:::reveal How did the Math Tables Project handle negative numbers with unskilled computers? ||| With black and red pencils: black plus black stayed black, red plus red stayed red, and a mixed pair went to Group 2.

:::reveal What tools does NASA say Langley's computers used? ||| Slide rules, curves, magnifying glasses, and basic calculating machines like the Marchant and the Friden.

## Sources
- ${MACDONALD} Locator: Notes, p. 87 (PDF p. 111), the note at the end of the Table of Logarithms on "computors". ${TA}
- ${NIST_MTP} Locator: "Dates: 1938-46" and the paragraphs that follow (purpose, thirty-seven volumes, Lowan, Blanch, 450 persons, the worksheets, the pencils and the sign, early 1943, war work). ${TA}
- ${NIST_HMF} Locator: first to third paragraphs (a quarter century of NBS work, Abramowitz, tables generated by hand, Stegun, June 1964, 1046 pages) and the paragraph on its impact (150,000 copies). ${TA}
- ${LOFF} Locator: first, second and third paragraphs (Tucker, 1935, "a job title," 400 by 1946, mid-1930s into the 1970s, the 1942 report); the paragraph on the West Area Computers; the paragraph on the three components of the work (slide rules, Marchant, Friden). ${TA}`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Before the slide rule: Napier's rods and log tables",
      section: "5 · Before the slide rule: Napier's rods and log tables",
      body: "A graded check on Napier's rods, his 1614 table and Briggs's base-10 logarithms, reading and interpolating a printed log table, and the human computers who made such tables. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "In what year did Napier publish his calculating rods?", options: ["1617", "1614", "1619", "1632"], correctIndex: 0, explanation: "The Rabdologia appeared in 1617, the year Napier died (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "Why did Napier publish the rods, in the words Macdonald quotes?", options: ["For sailors who had no tables at sea", "For those who prefer natural numbers", "For children learning their tables", "For printers setting the 1614 Canon"], correctIndex: 1, explanation: "\"For the sake of those who may prefer to work with the natural numbers\" (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "What does Rabdologia mean, per Macdonald?", options: ["A table of sine logarithms", "A ruler with sliding scales", "Calculation by small rods", "A book of decimal fractions"], correctIndex: 2, explanation: "\"Rabdologia, or calculation by means of small rods\" (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "What were Napier's rods familiarly called?", options: ["Napier's sticks", "Gunter's rods", "Briggs's bones", "Napier's bones"], correctIndex: 3, explanation: "\"Familiarly called 'Napier's bones'\" (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "What aim does Napier's 1617 dedication give for his books?", options: ["To end tedious calculations", "To win a prize from the king", "To train navigators at sea", "To replace the abacus at once"], correctIndex: 0, explanation: "\"To do away with the difficulty and tediousness of calculations\" (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "What does each face of a rod carry, per the museum record?", options: ["The logarithms of ten numbers", "The multiples of one digit", "The squares of the digits", "The sines of ten angles"], correctIndex: 1, explanation: "The rods are \"marked with the multiples of the digits from 0 to 9,\" one digit to a face (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "In each square of a rod, where are the tens written?", options: ["In the lower right corner", "Along the diagonal line", "In the upper left corner", "At the top of the rod"], correctIndex: 2, explanation: "\"The tens value of the number written in the upper left corner\" (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "In each square of a rod, where are the ones written?", options: ["In the upper left corner", "In the middle of the square", "Below the rod's last square", "In the lower right corner"], correctIndex: 3, explanation: "\"The ones value in the lower right corner\" (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "Which pair does the rod for 7 show in its fourth square?", options: ["2/8", "1/4", "2/1", "6/3"], correctIndex: 0, explanation: "7 × 4 = 28, written 2/8 (lesson 13). 1/4, 2/1 and 6/3 are 7 × 2, 7 × 3 and 7 × 9.", sourceLessonSlug: "napiers-bones" },
          { prompt: "What was the museum set's eleventh, wider rod for?", options: ["Division by two digits", "Square and cube roots", "Logarithms of sines", "Carrying the tens"], correctIndex: 1, explanation: "\"An eleventh, wider rod for square and cube roots\" (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "To multiply 425, how are the rods laid?", options: ["End to end, 4 then 2 then 5", "Stacked with 5 on the top", "Side by side to read 425", "In a fan around the 1 rod"], correctIndex: 2, explanation: "Lay the rods for 4, 2 and 5 side by side, so their tops read 425 (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "What does the sixth row of the rods for 4, 2 and 5 read?", options: ["24, 12 and 35", "4, 2 and 5", "36, 12 and 30", "24, 12 and 30"], correctIndex: 3, explanation: "4 × 6, 2 × 6 and 5 × 6: 24, 12 and 30 (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "In which direction do you add along the diagonals?", options: ["Starting at the right", "Starting at the left", "From the top down", "From the middle out"], correctIndex: 0, explanation: "Add along the diagonals starting at the right, the ones place (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "What is 425 × 6 by the rods?", options: ["2,450", "2,550", "2,505", "3,550"], correctIndex: 1, explanation: "From the right: 0, 3 + 2 = 5, 1 + 4 = 5, then 2: 2,550 (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "What does the eighth row of the rods for 425 read?", options: ["30, 16 and 42", "32, 14 and 40", "32, 16 and 40", "24, 16 and 40"], correctIndex: 2, explanation: "4 × 8, 2 × 8 and 5 × 8: 32, 16 and 40 (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "In 425 × 8, what happens on the tens diagonal?", options: ["4 + 6 = 10: write 10 there", "4 × 6 = 24: write 4, carry 2", "6 − 4 = 2: write 2, no carry", "4 + 6 = 10: write 0, carry 1"], correctIndex: 3, explanation: "4 + 6 = 10, so write 0 and carry 1 to the next diagonal (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "What is 425 × 8 by the rods?", options: ["3,400", "3,200", "3,040", "4,300"], correctIndex: 0, explanation: "0; 4 + 6 = 10, write 0 carry 1; 1 + 2 + 1 = 4; then 3: 3,400 (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "What does a diagonal never hold more than?", options: ["One digit and a carry", "Two digits and a carry", "Three digits and a carry", "Four digits, no carry"], correctIndex: 1, explanation: "A diagonal never holds more than two digits plus a carry, so the hardest step is adding small numbers (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "For 425 × 36, which rows of the rods do you read?", options: ["The sixth and the ninth", "The thirty-sixth only", "The third and the sixth", "The first and the third"], correctIndex: 2, explanation: "Read the third row (1,275) and the sixth (2,550) (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "Why is the third row's 1,275 shifted one place for 425 × 36?", options: ["The 6 stands for 60", "The rods were reversed", "The 1 was a carry", "The 3 stands for 30"], correctIndex: 3, explanation: "The 3 of 36 stands for 30, so its product moves one place: 12,750 (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "What is 425 × 36 by the rods?", options: ["15,300", "12,750", "2,550", "16,300"], correctIndex: 0, explanation: "12,750 + 2,550 = 15,300 (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "What trade do the rods share with logarithms?", options: ["Additions become products", "Hard sums become additions", "Decimals become fractions", "Products become guesses"], correctIndex: 1, explanation: "The rods turn a multiplication into reading rows and adding, the same trade logarithms make (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "How do the rods divide 2,550 by 425?", options: ["Add the rows to 2,550", "Read the diagonals backward", "Find the row giving 2,550", "Turn the rods upside down"], correctIndex: 2, explanation: "Look down the rows for the multiple that fits: the sixth gives 2,550, so the quotient is 6 (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "Why check each card strip by ordinary multiplication?", options: ["Card stretches when it gets wet", "The diagonals must be measured", "The digits fade within a week", "A wrong square fails every time"], correctIndex: 3, explanation: "A wrong square gives a wrong answer every time it is used (lesson 13).", sourceLessonSlug: "napiers-bones" },
          { prompt: "What impeded science by the late 1500s, per Macdonald?", options: ["The labour of calculation", "A shortage of printing paper", "The ban on new astronomy", "The cost of instruments"], correctIndex: 0, explanation: "\"The continually increasing complexity and labour of numerical calculation\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "Who, Kepler reports, hoped for Napier's Canon as early as 1594?", options: ["Henry Briggs", "Tycho Brahe", "Simon Stevin", "Edmund Gunter"], correctIndex: 1, explanation: "Tycho Brahe was led by a Scottish correspondent to hope for the Canon (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "In what year did Napier's Canon and its description appear?", options: ["1594", "1617", "1614", "1619"], correctIndex: 2, explanation: "\"The Canon, with the description of its nature and use, made its appearance in 1614\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "When was the Constructio, Napier's method of building the table, published?", options: ["1614", "1594", "1632", "1619"], correctIndex: 3, explanation: "Written several years earlier, it was published only in 1619, two years after his death (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "What did the Constructio call logarithms?", options: ["Artificial numbers", "Natural numbers", "Ratio numbers", "Briggs numbers"], correctIndex: 0, explanation: "Robert Napier: the logarithms are \"here called by him artificial numbers\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "Why does the Constructio not use the word logarithm?", options: ["Napier disliked Greek words", "It was written before the word", "Briggs had patented the word", "The printer dropped it"], correctIndex: 1, explanation: "It was written \"several years before the word Logarithm was invented\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "What did Napier's 1614 Canon tabulate?", options: ["Logarithms of 1 to 1,000", "Squares of whole numbers", "Logarithms of sines", "Products of two digits"], correctIndex: 2, explanation: "Not equidifferent numbers but \"sines of equidifferent arcs for every minute in the quadrant\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "What value did Napier take for the radius in his Canon?", options: ["1,000", "100,000", "1,000,000,000", "10,000,000"], correctIndex: 3, explanation: "The radius, the sine of the quadrant, was taken as 10,000,000 (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "What kind of work was the 1614 Canon built for?", options: ["Trigonometry", "Bookkeeping", "Land deeds", "Music theory"], correctIndex: 0, explanation: "It was built for trigonometry, the heavy arithmetic of astronomy and navigation (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "How did Napier say his table had been computed?", options: ["By many computors", "By one person alone", "By Briggs and Kepler", "By a machine of rods"], correctIndex: 1, explanation: "\"By the strength and industry of one alone\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "Which line closes Napier's note at the end of his table?", options: ["Errors belong to the printer", "Every table is now complete", "Nothing is perfect at birth", "Check each line twice over"], correctIndex: 2, explanation: "\"Nothing is perfect at birth\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "In 1616, what did Napier promise for a second edition?", options: ["A table of the tangents", "A cheaper smaller format", "Rods made of real bone", "Logs on decimal numbers"], correctIndex: 3, explanation: "Logarithms that would \"fall upon decimal numbers, such as 100,000,000, 200,000,000\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "What did Napier's 1617 dedication announce?", options: ["A better kind of logarithms", "A sliding rule of two scales", "A machine that adds by gears", "A table of squares and cubes"], correctIndex: 0, explanation: "\"We have now also found out a better kind of logarithms\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "To whom did Napier leave the computation of the new canon?", options: ["Tycho Brahe", "Henry Briggs", "Simon Stevin", "Robert Napier"], correctIndex: 1, explanation: "\"More particularly to that very learned scholar, my very dear friend, Henry Briggs\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "What post did Briggs hold, per Napier's dedication?", options: ["Astronomer to the King of Denmark", "Printer to the city of Edinburgh", "Professor of Geometry in London", "Master of a ship's navigation"], correctIndex: 2, explanation: "\"Public Professor of Geometry in London\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "In which years did Briggs visit Napier at Merchiston?", options: ["1612 and 1613", "1617 and 1618", "1619 and 1620", "1615 and 1616"], correctIndex: 3, explanation: "Briggs visited in 1615 and 1616 and was preparing a third visit when Napier died (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "When did John Napier die?", options: ["4 April 1617", "4 April 1614", "4 April 1619", "4 April 1632"], correctIndex: 0, explanation: "Napier died on 4 April 1617 (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "In Briggs's better kind of logarithms, what is the logarithm of unity?", options: ["1", "0", "10", "100"], correctIndex: 1, explanation: "\"Another and better kind of logarithms ... in which the logarithm of unity is 0\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "What did Robert Napier say Briggs took upon himself?", options: ["The printing of the 1614 book", "The making of Napier's rods", "The heavy labour of the new Canon", "The defense of Napier's priority"], correctIndex: 2, explanation: "\"The very heavy labour of computing this new Canon\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "What does the 1964 federal handbook call base-10 logarithms?", options: ["Natural or Napier logarithms", "Artificial or sine logarithms", "Decimal or Stevin logarithms", "Common or Briggs logarithms"], correctIndex: 3, explanation: "\"Common or Briggs logarithms\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "What follows from a logarithm of 1 equal to 0, per lesson 14?", options: ["log 10 = 1, log 100 = 2", "log 10 = 0, log 100 = 1", "log 10 = 10, log 100 = 100", "log 1 = 1, log 10 = 2"], correctIndex: 0, explanation: "It is lesson 1's table: log 1 = 0, log 10 = 1, log 100 = 2 (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "Who proposed decimal fractions in 1585, in a cumbrous form?", options: ["John Napier", "Simon Stevin", "Henry Briggs", "Edmund Gunter"], correctIndex: 1, explanation: "Stevin proposed them \"in a cumbrous form\" in 1585 (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "What does Macdonald credit Napier with in writing numbers?", options: ["Inventing the zero for European use", "Writing fractions with a slash line", "First using the present decimal notation", "Counting in base twelve for trade"], correctIndex: 2, explanation: "\"Napier was the first to use the present notation\" for decimal fractions (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "How did Napier write 1993 units and 273 thousandths?", options: ["1993/273", "1993:273", "273,1993", "1993,273"], correctIndex: 3, explanation: "\"1993,273, which signifies 1993 units and 273 thousandth parts,\" with a comma where we put a point (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "Which catalog lesson shows how much calculation Tycho's astronomy needed?", options: ["Wrong for Good Reasons, lesson 8", "How to Read a Number, lesson 8", "Sound Craft, lesson 1 on decibels", "Who Gets the Credit, lesson 7"], correctIndex: 0, explanation: "Wrong for Good Reasons lesson 8, \"Geocentrism was good science\" (lesson 14).", sourceLessonSlug: "the-1614-table-and-briggs" },
          { prompt: "Which table does lesson 15 open?", options: ["Table 4.2, Natural Logarithms", "Table 4.1, Common Logarithms", "Table 4.4, the Exponential", "Table 4.6, Sines and Cosines"], correctIndex: 1, explanation: "Table 4.1, \"Common Logarithms,\" in the 1964 Handbook of Mathematical Functions (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "Who published the 1964 Handbook of Mathematical Functions?", options: ["The Smithsonian Institution", "The Keuffel & Esser Company", "The National Bureau of Standards", "The Royal Society of London"], correctIndex: 2, explanation: "The National Bureau of Standards, in 1964; it is a federal work (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "Who wrote chapter 4 of the 1964 handbook?", options: ["Irene Stegun", "Gertrude Blanch", "Lois Cherwinski", "Ruth Zucker"], correctIndex: 3, explanation: "Chapter 4, which holds Table 4.1, was written by Ruth Zucker (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "What range of numbers does Table 4.1 list?", options: ["100 to 1350", "1 to 10", "1 to 1000", "0 to 2.1"], correctIndex: 0, explanation: "The numbers from 100 to 1350 (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "To how many decimal places does Table 4.1 give logarithms?", options: ["Four", "Ten", "Seven", "Sixteen"], correctIndex: 1, explanation: "To ten decimal places, printed in groups of five digits (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "What does Table 4.1 print beside 200?", options: ["47712 12547", "69897 00043", "30102 99957", "20000 00000"], correctIndex: 2, explanation: "30102 99957, the mantissa 0.30102 99957: lesson 1's 0.301 to seven more places (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "Which number's entry in Table 4.1 is 47712 12547?", options: ["200", "600", "983", "300"], correctIndex: 3, explanation: "Beside 300 it prints 47712 12547, Pickworth's 0.477 (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "Why is no characteristic printed in Table 4.1?", options: ["You supply it from the size", "It is always zero in the table", "It is printed on the next page", "It is the same as the mantissa"], correctIndex: 0, explanation: "Write the number as x times a power of ten and supply the characteristic yourself; the table gives the mantissa (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "How does the handbook say to write a number before taking its logarithm?", options: ["x divided by ten, x from 0 to 1", "x times a power of ten, x from 1 to 10", "x plus a power of ten, x below 1", "x squared, then halved, x above 1"], correctIndex: 1, explanation: "Express it as x times 10 to a power, with x between 1 and 10 (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "What is the sum of log 2 and log 3 from the table?", options: ["0.17609", "0.60206", "0.77815", "0.95424"], correctIndex: 2, explanation: "0.30103 + 0.47712 = 0.77815 (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "Which entry shows that 0.77815 is the logarithm of 6?", options: ["The one beside 200", "The one beside 300", "The one beside 983", "The one beside 600"], correctIndex: 3, explanation: "Beside 600 the table prints 77815 12504, so the product's figures are 6 (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "What does the handbook call the reverse lookup, from logarithm to number?", options: ["The antilogarithm", "The cologarithm", "The characteristic", "The mantissa"], correctIndex: 0, explanation: "The antilogarithm, \"written antilog x or log⁻¹ x\" (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "What mantissa does the handbook give for 9836?", options: ["0.99255 35", "0.99281 85", "0.99299 51", "0.98360 00"], correctIndex: 1, explanation: "\"Interpolation in Table 4.1 between 983 and 984 gives .99281 85 as the mantissa of 9836\" (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "Between which entries does the handbook interpolate for 9836?", options: ["98 and 99", "9836 and 9837", "983 and 984", "900 and 1000"], correctIndex: 2, explanation: "Between the entries for 983 and 984 (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "What fraction of the way from 9830 to 9840 is 9836?", options: ["4/10", "3/6", "8/10", "6/10"], correctIndex: 3, explanation: "9836 lies 6/10 of the way from 9830 to 9840 (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "What is 6/10 of the difference between the entries for 983 and 984?", options: ["0.00026 49484", "0.00044 15806", "0.00017 66322", "0.00264 94840"], correctIndex: 0, explanation: "The difference is 0.00044 15806, and 6/10 of it is 0.00026 49484 (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "What is the straight-line method between table entries called?", options: ["Inverse antilogging", "Linear interpolation", "Characteristic rounding", "Mantissa doubling"], correctIndex: 1, explanation: "This straight-line method is linear interpolation (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "Which numbers share the mantissa of 9836?", options: ["9.836, 9.837 and 9.838", "9836, 6389 and 3698", "9.836, 98.36 and 0.009836", "98.36, 983.7 and 9.835"], correctIndex: 2, explanation: "The same figures give the same mantissa; only the characteristic changes (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "With a four-place table, about what mantissa do you get for 9836?", options: ["0.9926", "0.9930", "0.9836", "0.9928"], correctIndex: 3, explanation: "0.9926 plus 6/10 of 0.0004 is about 0.9928 (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "What does the handbook use to get all ten places?", options: ["Four-point Lagrangian interpolation", "Two-point linear interpolation", "A slide rule of forty inches", "A second table of differences"], correctIndex: 0, explanation: "A \"four-point Lagrangian interpolation\" (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "When does the handbook say linear interpolation gives five places for natural logs?", options: ["Only when x < .175", "Only when x > .175", "Only when x > 1350", "Only when x = 1"], correctIndex: 1, explanation: "\"To obtain 5 decimal place accuracy with linear interpolation it is necessary that x > .175\" (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "Whom does chapter 4 thank for preparing and checking the tables?", options: ["Abramowitz and Stegun", "Lowan and Blanch", "Cherwinski and Godefroy", "Pickworth and Cullimore"], correctIndex: 2, explanation: "Lois K. Cherwinski and Elizabeth F. Godefroy (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "How many figures does lesson 15 say a slide-rule user wants from a table?", options: ["Seven or eight", "Ten or more", "One or two", "Three or four"], correctIndex: 3, explanation: "For the three or four figures a slide-rule user wants, the straight line between neighbors is plenty (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "What does Pickworth call the slide rule, in relation to a table?", options: ["A concisely arranged log table", "A table of squares and cubes", "A faster abacus with scales", "A machine that adds by gears"], correctIndex: 0, explanation: "\"In effect a concisely arranged table of logarithms\" (lesson 15).", sourceLessonSlug: "reading-a-log-table" },
          { prompt: "What word did Napier use for a person who computes tables?", options: ["Calculator", "Computor", "Reckoner", "Abacist"], correctIndex: 1, explanation: "His table \"ought to have been accomplished by the labour and assistance of many computors\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "Napier wished his table had been made by what?", options: ["A single scholar", "A brass machine", "Many computors", "A printing guild"], correctIndex: 2, explanation: "\"By the assistance of a greater number of computors\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "Per NASA, what did computer mean before electronic computers?", options: ["A brand of desk machine", "A type of slide rule", "A table of logarithms", "A job title for people"], correctIndex: 3, explanation: "\"The term 'computer' referred to people, not machines. It was a job title\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "What were the dates of the Math Tables Project?", options: ["1938 to 1946", "1935 to 1970", "1614 to 1619", "1958 to 1964"], correctIndex: 0, explanation: "1938 to 1946 (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "Where was the Math Tables Project?", options: ["Hampton, Virginia", "New York City", "Washington, D.C.", "Hoboken, N.J."], correctIndex: 1, explanation: "The project was located in New York City (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "Which program paid the Math Tables Project's computers?", options: ["The Navy, a wartime program", "NASA, a space program", "The WPA, a New Deal program", "The Army, a ballistics lab"], correctIndex: 2, explanation: "A New Deal relief program of the Works Projects Administration (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "How many volumes of tables did the Math Tables Project produce?", options: ["Seventy-three", "Twenty-seven", "Fifty-seven", "Thirty-seven"], correctIndex: 3, explanation: "Thirty-seven volumes, \"for trigonometric functions, exponentials, logarithms, and so on\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "Who was the Math Tables Project's chief mathematician?", options: ["Gertrude Blanch", "Arnold Lowan", "Irene Stegun", "Virginia Tucker"], correctIndex: 0, explanation: "Gertrude Blanch; Arnold Lowan was its director (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "Why was Gertrude Blanch available to the project, per NIST?", options: ["She was paid more than at a college", "She found no job as a mathematician", "She had invented the black pencils", "She was sent by the Navy in 1938"], correctIndex: 1, explanation: "She held a PhD but \"was unable to find professional employment as a mathematician\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "At its height, how large was the Math Tables Project's staff?", options: ["About 45", "About 4,500", "About 450", "About 75"], correctIndex: 2, explanation: "\"A staff of some 450 persons at its high point\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "On the project's worksheets, who did the divisions?", options: ["Most of the computers", "The adding machines", "Group 2, at the wall", "Just one or two people"], correctIndex: 3, explanation: "\"Most just did addition ... and just 1-2 people did division\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "How did the project handle negative numbers?", options: ["Black and red pencils", "A minus sign in ink", "A separate adding machine", "Brackets around the sum"], correctIndex: 0, explanation: "\"A system of black and red pencils\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "What happened to a sheet mixing black and red numbers?", options: ["It was thrown away", "It went to Group 2", "It was added twice", "It went to the Navy"], correctIndex: 1, explanation: "\"Black + red or red + black: hand the sheets to Group 2\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "Who used the project's few adding machines?", options: ["The newest computers", "The Navy inspectors", "The project leads", "Nobody; they broke"], correctIndex: 2, explanation: "The leads, for starting values and for checking results (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "When did the WPA end the Math Tables Project?", options: ["Late 1938", "Mid 1946", "Early 1964", "Early 1943"], correctIndex: 3, explanation: "The WPA terminated the project in early 1943; war work kept it going (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "Which war work helped keep the project going?", options: ["Air-navigation tables", "Moon-landing orbits", "Railroad timetables", "Census tabulations"], correctIndex: 0, explanation: "Air-navigation tables and calculations for the Manhattan Project, among others (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "How many years of NBS work does NIST say the 1964 handbook capped?", options: ["A full century", "A quarter century", "About five years", "Half a century"], correctIndex: 1, explanation: "\"The culmination of a quarter century of NBS work on mathematical functions\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "How were most of the handbook's tables generated?", options: ["On electronic computers", "On forty-inch slide rules", "By hand on desk calculators", "Copied from Briggs's canon"], correctIndex: 2, explanation: "\"Most of the tables in the Handbook were generated by hand on desk calculators\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "Who finished the handbook after Abramowitz died in 1958?", options: ["Ruth Zucker", "Gertrude Blanch", "Arnold Lowan", "Irene Stegun"], correctIndex: 3, explanation: "Irene Stegun, assistant chief of the Computation Laboratory (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "When was the Handbook of Mathematical Functions issued?", options: ["June 1964", "July 1958", "June 1946", "March 1970"], correctIndex: 0, explanation: "It appeared in June 1964, 1,046 pages long (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "Who made up Langley's first computer pool in 1935?", options: ["Katherine Johnson and two others", "Virginia Tucker and four others", "Gertrude Blanch and nine others", "Irene Stegun and six others"], correctIndex: 1, explanation: "Virginia Tucker joined four other women in the first \"computer pool\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "How many women computers did a 1942 report count at Langley?", options: ["5", "400", "75", "450"], correctIndex: 2, explanation: "A 1942 report counted 75 (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "About how many women had Tucker's department trained by 1946?", options: ["About 75", "About 40", "About 4,000", "About 400"], correctIndex: 3, explanation: "By 1946 her department had trained about 400 women (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "Which tools does NASA list for Langley's computing work?", options: ["Slide rules, curves and Fridens", "Punched cards and IBM tabulators", "Abacuses and Napier's bones", "Log tables and pocket calculators"], correctIndex: 0, explanation: "\"Slide rules, curves, magnifying glasses, and basic calculating machines, like the Marchant or the more popular Friden\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "What were Langley's segregated African American computers called?", options: ["The East Area Computers", "The West Area Computers", "The Harvard Computers", "The Group 2 Computers"], correctIndex: 1, explanation: "The \"West Area Computers\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "How long did Langley employ human computers, per NASA?", options: ["1938 to 1946 only", "1614 to the 1850s", "Mid-1930s into the 1970s", "Only during the war"], correctIndex: 2, explanation: "\"From the mid-1930s into the 1970s\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
          { prompt: "Which public catalog course has a lesson on the Harvard Computers?", options: ["Wrong for Good Reasons, lesson 8", "Who Gets the Credit, lesson 7", "How to Read a Number, lesson 9", "How We Know What's Out There"], correctIndex: 3, explanation: "How We Know What's Out There, lesson 8, \"The Harvard Computers\" (lesson 16).", sourceLessonSlug: "the-human-computers" },
        ],
      },
    },
    // NEXT_SECTIONS
  ],
};
