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

**Reciprocals.** One divided by a number is a division with 1 as the dividend. Cullimore: "Find the reciprocal of 3.17. Set 3.17C over 1D, and read on D under 1C. Answer is .316." Many basic rules also carry a CI scale for reciprocals (lesson 10 has a note).

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
    // SECTION_3_QUIZ
  ],
};
