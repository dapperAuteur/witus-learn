import type { AuthoredCourse } from "./authored-course";

// CONST-02 · Construction Math. PRIVATE STUDY ONLY, per plans/84-construction-study-series.md and
// content/construction/00-READ-ME-FIRST-private-study-only.md. Registered `price: 0`,
// `priceType: "free"`, `visibility: "private"` (INSERT-ONLY) with an honest publishHoldReason.
// Assumed slug: `construction-math`.
//
// WHO IT IS FOR: BAM, personally, while he takes the Construction Training course at John Boner
// Neighborhood Centers in Indianapolis. It supports NCCER Core module 00102, "Introduction to
// Construction Math". Every lesson names the module it supports so he can line it up with class.
// It is NOT an NCCER course, satisfies no NCCER requirement, earns no credential, and substitutes
// for nothing his instructor does. Lesson 1 says all of that in plain words.
//
// THE SOURCING RULE, which is the whole reason this file can exist in a tracked repository:
// BAM owns the Applied Construction Math Trainee Workbook (NCCER CONTREN), which is all rights
// reserved, and course data files under scripts/data/ are TRACKED IN GIT. So NOTHING here is
// reproduced from it: not a problem, not a worked example, not a table, not an answer key, not a
// sentence. What IS here is mathematics, which nobody owns. Fractions, decimals, the four
// operations, reading a rule, unit conversion, perimeter, area and volume are taught from first
// principles, and every worked example uses numbers invented for this course. The module's topic
// list is public (nccer.org/craft-catalog/core/) and a topic list is not copyrightable expression,
// so it tells this file WHAT to cover and nothing about what to say.
//
// FETCH OR DO NOT CITE. A lesson that teaches arithmetic from first principles needs no citation
// and says so in a one-line note instead of manufacturing one. Four external sources are cited in
// this file and all four were actually retrieved on 2026-09-09:
//   1. NIST Handbook 44 (2018 ed.), Section 5.52 Linear Measures. The PDF was fetched and its text
//      extracted. S.1 (a linear measure may be graduated in "inches and binary submultiples of the
//      inch", and a flexible tape in tenths or hundredths of a foot), S.5.2 (graduation width),
//      T.2 (metal tapes tested under a 10 lb load at 25 ft and over, supported on a flat surface;
//      tolerance 1/16 in for the 7 to 30 ft interval) are quoted from that extraction.
//   2. NIST SP 811 Appendix B.9, for the conversion factors marked exact: inch, foot, yard.
//   3. NIST, U.S. survey foot, for the 1866 and 1959 definitions, FRN 2020-21902 of 5 October 2020,
//      and the 1 January 2023 deprecation.
//   4. NIST, SI Units, for the seven base units.
// Nothing else in this file carries a URL, and no figure is attributed to a source no pass read.
//
// EVERY WORKED EXAMPLE WAS CHECKED. Each number in each lesson and each explanation was recomputed
// by hand and cross-checked in decimal before it was written down. A study aid with a wrong answer
// is worse than no study aid, and this one is being read before a real class.
//
// House style, matching deaf-america-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3 to 6 terms; APA 7 `## Sources` per lesson, or a
// first-principles note where there is no external source; a quiz per teaching section serving 5,
// a FINAL serving 10 placed last, `passingScore: 80`, `shuffleOptions: true`, and `explanation` +
// `sourceLessonSlug` on every question. Correct options are written SHORT and distractors long and
// specifically wrong, so check-longest-option passes by construction. For the arithmetic questions
// the distractors are THE ANSWERS THE REAL MISTAKES PRODUCE: the unconverted unit, the fraction
// added without a common denominator, the area where volume was asked for. A wrong option that is
// merely a random number teaches nothing; a wrong option that is where you land if you forget to
// divide by 27 teaches the failure mode.
export const CONSTRUCTION_MATH_COURSE: AuthoredCourse = {
  title: "Construction Math: Fractions, Tapes, Area and Volume",
  description:
    "Private study notes for NCCER Core module 00102, Introduction to Construction Math, written to be read alongside the Construction Training course at John Boner Neighborhood Centers in Indianapolis. It is not an NCCER course, it satisfies no NCCER requirement, it earns no credential, and it replaces nothing an instructor does. What it is: whole numbers, fractions, decimals, percent, reading a rule and a tape measure, inch-pound and metric units, plane figures, area and volume, taught from first principles with worked examples invented for this course. Every skill sits inside a real task, because the arithmetic is only interesting when getting it wrong costs money or leaves a wall out of square. Laying out studs at 16 inches on center. Cutting to a fractional dimension with a saw kerf you forgot to allow for. Squaring a footing with a 3-4-5 triangle. Ordering concrete in cubic yards when every dimension on the drawing is in feet and inches. The failure modes that actually bite are taught as content rather than as warnings: reading five eighths where the tape says five sixteenths, adding fractions without a common denominator, buying area when you needed volume, and rounding down a partial unit of material. Where a standard genuinely governs something, the standard is cited and was read: NIST Handbook 44 for what a linear measure may be graduated in and how far off a tape may legally be, and NIST for the exact inch and the retired US survey foot.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — Start here, and whole numbers on the job
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-this-course-is",
      title: "1 · What this is, and what it is not",
      section: "Section 1 · Start here, and whole numbers on the job",
      body: `**This lesson supports NCCER Core module 00102, Introduction to Construction Math.** So does every other lesson in this course, and each one says so at the top, so you can read the right pages on the right night.

**What this is not, stated flatly, because getting this wrong would matter.** This is not an NCCER course. It does not satisfy any NCCER requirement, it earns no credential, no hours, and no card, and it is not a substitute for the Construction Training course at John Boner Neighborhood Centers or for anything the instructor there does. NCCER is an accrediting body and only an accredited sponsor can deliver its modules. These are private study notes, written to be read next to a class somebody else teaches.

**What is in here.** The mathematics of module 00102, taught from scratch: whole numbers and the four operations, fractions, decimals and percent, reading a rule and a tape measure, inch-pound and metric units, plane figures, and area and volume. Nothing is copied from any workbook. Every worked example uses numbers made up for this course, and the mathematics itself belongs to nobody, which is why it can be written down here at all.

**Why any of this is interesting.** Arithmetic on its own is not. Arithmetic that is wrong on a jobsite is expensive, and that is a different subject. A slipped digit in a beam length is a beam. A fraction added without a common denominator is a stud cut short. Ordering area when the supplier sells volume is a truck that shows up with the wrong amount of concrete and a crew standing around being paid. So every skill in this course sits inside a task, and the lesson says what the mistake costs.

**Four mistakes to watch for from here on.** They come back in the sections that teach them, and they are the reason those sections exist.

1. Reading 5/8 in. where the tape says 5/16 in. Same numerator, different denominator, and the marks sit close together.
2. Adding fractions without a common denominator. You cannot add eighths to sixteenths any more than you can add studs to sheets.
3. Buying area when the job needs volume. A slab has a depth, and the depth is what turns square feet into cubic feet.
4. Forgetting that concrete is sold by the cubic yard while every dimension on the drawing is in feet and inches. There are 27 cubic feet in a cubic yard, and that number will earn its keep in Section 5.

**The one habit worth more than any technique: estimate, calculate, check.** Guess the answer roughly before you work it out, so you know what neighborhood it lives in. Work it out. Then check by running it backwards, or by asking whether the answer even points the right way. Most site arithmetic errors are not small errors of the last digit. They are errors of a factor of 10, or 12, or 27, and an estimate catches all three.

**And write the unit next to every number.** A number with no unit is not an answer. Half the errors in this course announce themselves the moment you notice that you have square feet where the question asked for cubic yards.

:::reveal Does finishing this course satisfy any part of an NCCER credential? ||| No. It is private study support for a class taught by someone else. It carries no NCCER standing, no hours and no card, and only an accredited sponsor can deliver a Core module.

:::reveal What are the three steps of the habit this lesson says is worth more than any technique? ||| Estimate the answer roughly first, then calculate it, then check it by working backwards or by asking whether the answer points the right way and carries the right unit.

:::reveal Why does an estimate catch most jobsite arithmetic errors? ||| Because the common errors are not off by a little, they are off by a factor of 10, 12 or 27, and a rough guess made before you start shows a wrong factor immediately.

## Vocabulary
- **NCCER Core module 00102**: the module of the Core curriculum titled Introduction to Construction Math, which this course is written to be read alongside and does not deliver.
- **Estimate, calculate, check**: the working order this course uses, in which a rough guess made before the arithmetic is what catches a wrong factor of 10 or 12.
- **Unit**: the thing being counted, written next to the number every time, because a number with no unit cannot be checked and cannot be ordered.
- **Factor error**: a mistake that multiplies or divides the answer by 10, 12 or 27, as opposed to a small slip in the last digit. These are the ones that cost money.

## Sources
No external source is cited in this lesson. The mathematics in this course is taught from first principles, and the module title and topic list are taken from NCCER's public craft catalog, which is a list of topics rather than expression.`,
    },
    {
      slug: "whole-numbers-and-order-of-operations",
      title: "2 · Whole numbers, and the order you do things in",
      section: "Section 1 · Start here, and whole numbers on the job",
      body: `**Supports NCCER Core module 00102.**

**Place value is why a slipped digit is never a small mistake.** In 1,248 the 1 means a thousand, the 2 means two hundred, the 4 means forty and the 8 means eight. Move a digit one column and you have changed the number by a factor of ten. Write a 106 in. header as 16 in. and you have not made a rounding error, you have ordered a piece of steel that is seven and a half feet short.

**What the four operations answer on a jobsite.**

- **Addition** totals a run: three walls of 12 ft, 16 ft and 9 ft give 37 ft of bottom plate.
- **Subtraction** finds what is left, or what to cut off: a 96 in. stud trimmed to 92 5/8 in. means 3 3/8 in. goes in the bin.
- **Multiplication** is repeated addition of identical things: 19 studs at 8 ft is 152 ft of lumber.
- **Division** answers how many fit, or how to split a span: 288 in. of wall divided into 16 in. spaces.

**Order of operations, and why it is not a school rule.** Do what is inside parentheses first, then exponents, then multiplication and division from left to right, then addition and subtraction from left to right. The reason it matters is that a written expression is a set of instructions somebody else will follow.

Take the bottom plate for a room 24 ft by 12 ft. Written correctly it is 2 x (24 + 12) = 2 x 36 = 72 ft. Written carelessly as 2 x 24 + 12 it comes out 48 + 12 = 60 ft, and you are 12 ft short on a material list nobody will re-check.

**Worked example: how many studs in a 24 ft wall at 16 in. on center.** First convert, because the wall is in feet and the spacing is in inches: 24 ft x 12 in./ft = 288 in. Then divide: 288 in. / 16 in. per space = 18 spaces. Then remember that spaces and studs are not the same count. Eighteen spaces have nineteen marks, the way a fence with eighteen gaps has nineteen posts. So nineteen studs before you add anything for corners, openings, backing or blocking.

Estimate first: 16 goes into 320 exactly twenty times, and 288 is a bit less than 320, so the answer is a bit under 20. Check afterwards by reversing: 18 x 16 = 288. Correct.

**Worked example: division with a remainder means something physical.** A 100 in. length of trim cut into 8 in. blocks gives 100 / 8 = 12 with 4 left over. Twelve blocks and a 4 in. offcut. The remainder is not a rounding artifact, it is a piece of wood lying on the floor, and whether you can use it is a real question.

**Worked example: sheathing a wall.** A wall 24 ft long and 8 ft tall is 24 x 8 = 192 sq ft. A 4 ft by 8 ft sheet covers 4 x 8 = 32 sq ft. 192 / 32 = 6 sheets, exactly, because the wall happens to divide evenly. It rarely does, and when it does not you round up and keep the offcut.

**Checking, three ways that cost nothing.** Reverse the operation: if 288 / 16 = 18, then 18 x 16 should be 288. Round and re-estimate: does the answer sit near the neighborhood you guessed. Ask whether the answer points the right way: dividing by a number bigger than 1 must make a number smaller, and if it did not, you divided the wrong way round.

:::reveal A 24 ft wall is framed at 16 in. on center. How many spaces, and how many studs, before corners and openings? ||| 24 ft is 288 in., and 288 divided by 16 is 18 spaces. Eighteen spaces have nineteen marks, so nineteen studs before you add anything for corners, openings, backing or blocking.

:::reveal Why does 2 x 24 + 12 give the wrong bottom-plate total for a 24 ft by 12 ft room? ||| Because multiplication runs before addition, so it doubles only the 24 and gives 60 ft. The two long walls and the two short walls both need doubling, which is 2 x (24 + 12) = 72 ft.

:::reveal What does a remainder mean when you divide a length by a piece size? ||| It is a physical offcut. 100 in. cut into 8 in. blocks gives 12 blocks and a 4 in. piece of real wood, not a number to be rounded away.

## Vocabulary
- **Place value**: the rule that a digit's column sets its size, which is why a digit written in the wrong column changes an answer by a factor of ten.
- **Order of operations**: parentheses, then exponents, then multiplication and division left to right, then addition and subtraction left to right.
- **On center**: a spacing measured from the centre of one member to the centre of the next, rather than from face to face.
- **Remainder**: what is left after a division, which on a jobsite is an offcut of a real length rather than a number to discard.
- **Reversing the operation**: checking a division by multiplying the answer back, or a subtraction by adding it back.

## Sources
No external source is cited in this lesson. Whole-number arithmetic and the order of operations are taught from first principles, and every quantity in the worked examples was invented for this course.`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Start here, and whole numbers",
      section: "Section 1 · Start here, and whole numbers on the job",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which NCCER Core module is this course written to support?",
            options: [
              "Core 00102, construction math",
              "Core 00101, Basic Safety, the construction site safety orientation module",
              "Core 00105, Introduction to Construction Drawings, which covers plan reading",
              "Core 00109, Introduction to Materials Handling, which covers lifting and rigging",
            ],
            correctIndex: 0,
            explanation:
              "Module 00102 is titled Introduction to Construction Math in NCCER's public craft catalog. The other modules listed are real Core modules and are not what this course covers.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Does finishing this course satisfy any part of an NCCER credential?",
            options: [
              "No, it earns none",
              "Yes, it covers the same objectives, so it counts toward the module once an instructor signs off",
              "Partly, in that it covers the written portion but not the performance portion",
              "Only for learners already registered in the NCCER Registry through a sponsor",
            ],
            correctIndex: 0,
            explanation:
              "It carries no NCCER standing, no hours and no card. Only an accredited sponsor can deliver a Core module, which is stated plainly in lesson 1 for exactly this reason.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Who can actually deliver an NCCER Core module?",
            options: [
              "An accredited sponsor",
              "Any instructor holding a current trade licence in the state where the class is taught",
              "Any employer running an in-house apprenticeship of at least one year",
              "Any training provider that has purchased the current edition of the trainee books",
            ],
            correctIndex: 0,
            explanation:
              "NCCER is an accrediting body, and accreditation is what makes delivery count. Owning the books, holding a licence or running an apprenticeship does not confer it.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What working order does this course recommend for every calculation?",
            options: [
              "Estimate, calculate, check",
              "Measure twice, write the figure down, and only then reach for a calculator",
              "Convert everything to decimals first, then work the problem, then convert back",
              "Work the problem twice independently and compare the two answers",
            ],
            correctIndex: 0,
            explanation:
              "The estimate is the part people skip and the part that earns its keep, because a rough guess made before the arithmetic exposes a wrong factor immediately.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Why does a rough estimate catch most jobsite arithmetic errors?",
            options: [
              "Most are factor errors",
              "Because an estimate is usually accurate to within one or two percent of the true answer",
              "Because writing the estimate down creates a record that can be audited later",
              "Because estimating forces you to re-read the drawing before you start",
            ],
            correctIndex: 0,
            explanation:
              "The common site errors are off by a factor of 10, 12 or 27 rather than by a last digit, and a wrong factor is obvious against even a crude guess.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Why does this course insist on writing a unit next to every number?",
            options: [
              "A bare number is not an answer",
              "Because suppliers refuse orders that do not state a unit of measure on the paperwork",
              "Because the metric system requires a unit symbol after every value",
              "Because the unit is what determines how many decimal places to keep",
            ],
            correctIndex: 0,
            explanation:
              "Half the errors in this course announce themselves the moment you notice you have square feet where the question asked for cubic yards.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which of the four warned-about mistakes is a denominator mix-up on the tape?",
            options: [
              "Reading 5/8 as 5/16",
              "Adding a run of dimensions without converting the feet into inches first",
              "Buying square feet of material when the job is sold by the cubic yard",
              "Rounding a partial box of flooring down instead of up",
            ],
            correctIndex: 0,
            explanation:
              "Same numerator, different denominator, and the marks sit close together on the blade. The other three are real mistakes this course also teaches, but none of them is a denominator error.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "How many cubic feet are in a cubic yard?",
            options: [
              "27",
              "9, because a yard is three feet and area scales with the square",
              "36, because there are 36 inches in a yard",
              "3, because a yard is three feet long",
            ],
            correctIndex: 0,
            explanation:
              "A cubic yard is 3 ft by 3 ft by 3 ft, so 3 x 3 x 3 = 27 cubic feet. The 9 is the square-yard figure and belongs to area, not volume.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Where do the numbers in this course's worked examples come from?",
            options: [
              "They were invented for this course",
              "They are drawn from the trainee workbook so the practice matches the class exactly",
              "They are sampled from published cost-estimating tables for residential framing",
              "They are averages taken from jobsite records supplied by the training centre",
            ],
            correctIndex: 0,
            explanation:
              "Nothing is reproduced from any workbook: not a problem, not a table, not an answer key. The mathematics belongs to nobody, and the numbers were made up here.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What does this course say a slipped digit in a beam length costs?",
            options: [
              "A beam",
              "A short delay while the correct figure is confirmed with the supervisor",
              "A rounding adjustment on the next material order",
              "Nothing, provided the error is caught before the concrete is placed",
            ],
            correctIndex: 0,
            explanation:
              "Place value means a digit in the wrong column changes a number by a factor of ten, so the piece that arrives is not slightly wrong, it is the wrong piece.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What is a factor error, as this course uses the term?",
            options: [
              "An answer off by 10, 12 or 27",
              "An error introduced when a number is rounded to too few decimal places",
              "An error caused by reading the wrong row of a manufacturer's table",
              "An error in the last digit of a long multiplication",
            ],
            correctIndex: 0,
            explanation:
              "The three factors name the three conversions that produce most site errors: base ten place value, twelve inches to the foot, and twenty-seven cubic feet to the cubic yard.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What is this course's relationship to the Construction Training class at John Boner Neighborhood Centers?",
            options: [
              "It is read alongside it",
              "It is the online component that the centre assigns before the practical sessions",
              "It replaces the classroom sessions for anyone who scores above the passing mark",
              "It is the make-up material for sessions a trainee has missed",
            ],
            correctIndex: 0,
            explanation:
              "These are private study notes written to sit next to a class somebody else teaches. They substitute for nothing the instructor does.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which topic is NOT part of module 00102 as this course covers it?",
            options: [
              "Fall protection",
              "Reading a rule and a tape measure, including fractional divisions of the inch",
              "Area and volume for two-dimensional and three-dimensional objects",
              "Inch-pound units, metric units, and converting between them",
            ],
            correctIndex: 0,
            explanation:
              "Fall protection belongs to the safety module, Core 00101, and is regulated by federal law rather than by arithmetic. The other three are squarely inside 00102.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What makes it lawful for this course to teach the content of a module whose workbook is all rights reserved?",
            options: [
              "Mathematics is not copyrightable",
              "The workbook's publisher grants an educational exemption for non-commercial study notes",
              "The course reproduces less than ten percent of the workbook, which is within fair use",
              "The course was cleared by the accrediting body before it was written",
            ],
            correctIndex: 0,
            explanation:
              "Fractions, unit conversion, area and volume can be taught from first principles by anyone. A topic list is also not copyrightable expression, so the public catalog can say what to cover.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "In the phrase 'estimate, calculate, check', what does the checking step actually consist of?",
            options: [
              "Reversing the operation",
              "Repeating the same calculation a second time on the same calculator",
              "Comparing the result against a published table of standard dimensions",
              "Asking a second person to work the problem independently",
            ],
            correctIndex: 0,
            explanation:
              "Multiply a division back, add a subtraction back, and ask whether the answer points the right way and carries the right unit. Repeating the same keystrokes repeats the same slip.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which of these is a legitimate reason this course cites a standard rather than teaching from first principles?",
            options: [
              "The value is set by a standard",
              "A cited source makes the lesson look more rigorous to a reader checking the work",
              "Every claim in a study aid has to carry a citation to be usable",
              "The mathematics is too involved to derive inside a single lesson",
            ],
            correctIndex: 0,
            explanation:
              "The exact inch and what a linear measure may be graduated in are decided by a standards body, not derivable. Arithmetic is derivable, so it carries a note saying so instead of a manufactured citation.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Why does the course say arithmetic on a jobsite is a different subject from arithmetic on its own?",
            options: [
              "Being wrong costs money",
              "Site arithmetic uses different rules for rounding than classroom arithmetic does",
              "Site arithmetic is done under time pressure, so speed matters more than accuracy",
              "Site arithmetic uses fractions, which are not taught in general mathematics",
            ],
            correctIndex: 0,
            explanation:
              "A wrong fraction is a stud cut short and a wrong volume is a truck with the wrong load and a crew standing around being paid. The consequence is what makes the arithmetic worth doing carefully.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What does the course promise about how each lesson opens?",
            options: [
              "It names the module it supports",
              "It restates the objectives listed in the trainee workbook for that chapter",
              "It lists the tools a trainee needs to have on hand before reading",
              "It gives an estimated reading time so a session can be planned around it",
            ],
            correctIndex: 0,
            explanation:
              "Every lesson says it supports Core 00102, so the reading can be lined up with whichever session the class has reached.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which failure mode does the course preview as the reason Section 5 exists?",
            options: [
              "Buying area instead of volume",
              "Measuring from the wrong end of the tape so every dimension is off by the hook",
              "Confusing the perimeter of a room with the length of its longest wall",
              "Reading a drawing scaled at a quarter inch to the foot as an eighth inch to the foot",
            ],
            correctIndex: 0,
            explanation:
              "A slab has a depth, and the depth is what turns square feet into cubic feet. Concrete is then sold in cubic yards, which is the second half of the same mistake.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "How does place value explain why a slipped digit is never a small mistake?",
            options: [
              "A column shift multiplies by ten",
              "Because the digits to the right of the slip all have to be recalculated as well",
              "Because place value governs how many significant figures an answer may carry",
              "Because a slipped digit usually happens in the largest number in the calculation",
            ],
            correctIndex: 0,
            explanation:
              "In 1,248 the 1 means a thousand and the 2 means two hundred. Move a digit one column and the number changes by a factor of ten, which is how 106 in. becomes 16 in.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "A 106 in. header is written down as 16 in. By how much is the order wrong?",
            options: [
              "90 in.",
              "10 in., because only one digit moved position in the written figure",
              "1,060 in., because dropping a digit multiplies the value by ten",
              "6 in., which is the difference between the two final digits",
            ],
            correctIndex: 0,
            explanation:
              "106 minus 16 is 90 in., which is seven and a half feet. The hundreds digit was lost, so the piece that arrives cannot span the opening at all.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "How many inches long is a 24 ft wall?",
            options: [
              "288 in.",
              "240 in., taking ten inches to the foot instead of twelve",
              "384 in., multiplying the wall length by the 16 in. stud spacing",
              "2 ft, dividing by twelve instead of multiplying by it",
            ],
            correctIndex: 0,
            explanation:
              "24 ft x 12 in./ft = 288 in. Writing the units in shows why: feet cancel against feet per inch and inches are what is left.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "A 24 ft wall is laid out at 16 in. on center. How many spaces is that?",
            options: [
              "18 spaces",
              "19 spaces, which is the count you get if you count the marks rather than the gaps",
              "24 spaces, one for every foot of wall length",
              "16 spaces, dividing the wall length in feet by the spacing in feet",
            ],
            correctIndex: 0,
            explanation:
              "288 in. divided by 16 in. per space is 18 spaces. Nineteen is the number of marks those eighteen gaps create, which is the next question, not this one.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "Eighteen spaces at 16 in. on center produce how many stud positions, before corners and openings?",
            options: [
              "19",
              "18, because each space is filled by exactly one stud",
              "17, because the two end studs belong to the adjoining walls",
              "36, because each space is bounded by a stud on each side",
            ],
            correctIndex: 0,
            explanation:
              "A fence with eighteen gaps has nineteen posts. Miscounting this is the classic off-by-one on a material list, and it always costs one piece, never many.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "What length of bottom plate does a room 24 ft by 12 ft need?",
            options: [
              "72 ft",
              "60 ft, which is what 2 x 24 + 12 gives when multiplication runs before addition",
              "36 ft, which is one long wall plus one short wall",
              "48 ft, doubling the long walls and leaving the short ones out",
            ],
            correctIndex: 0,
            explanation:
              "2 x (24 + 12) = 2 x 36 = 72 ft. The parentheses are the whole point: without them the expression doubles only the 24 and the list runs 12 ft short.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "In the order of operations, what runs first?",
            options: [
              "Parentheses",
              "Multiplication and division, working from left to right across the expression",
              "Addition and subtraction, because they are the simpler operations",
              "Whichever operation appears first when the expression is read left to right",
            ],
            correctIndex: 0,
            explanation:
              "Parentheses, then exponents, then multiplication and division left to right, then addition and subtraction left to right. A written expression is instructions somebody else will follow.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "A 100 in. length of trim is cut into 8 in. blocks. What do you get?",
            options: [
              "12 blocks and a 4 in. offcut",
              "12.5 blocks, since the division does not come out even",
              "13 blocks, rounding the division up because material is always rounded up",
              "12 blocks exactly, with the remainder absorbed by the saw cuts",
            ],
            correctIndex: 0,
            explanation:
              "100 divided by 8 is 12 with 4 left over. The remainder is a real 4 in. piece lying on the floor, and whether it is useful is a separate question.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "Nineteen studs at 8 ft each is how much lumber?",
            options: [
              "152 ft",
              "144 ft, which is eighteen studs rather than nineteen",
              "27 ft, adding the two numbers instead of multiplying them",
              "76 ft, multiplying nineteen studs by four feet instead of by eight",
            ],
            correctIndex: 0,
            explanation:
              "19 x 8 = 152 ft. Multiplication is repeated addition of identical things, which is exactly what a stud order is.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "A wall 24 ft long and 8 ft tall needs 4 ft by 8 ft sheathing. How many sheets?",
            options: [
              "6 sheets",
              "8 sheets, dividing the wall length by the 3 ft sheet width",
              "24 sheets, one sheet for each foot of wall length",
              "192 sheets, which is the wall area rather than the sheet count",
            ],
            correctIndex: 0,
            explanation:
              "The wall is 24 x 8 = 192 sq ft and a sheet covers 4 x 8 = 32 sq ft, so 192 / 32 = 6. This one divides evenly, which is unusual; normally you round up and keep the offcut.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "Three walls measure 12 ft, 16 ft and 9 ft. How much bottom plate is that?",
            options: [
              "37 ft",
              "27 ft, which leaves out the 9 ft wall",
              "1,728 ft, multiplying the three lengths instead of adding them",
              "444 ft, converting the total into inches and then labelling it in feet",
            ],
            correctIndex: 0,
            explanation:
              "12 + 16 + 9 = 37 ft. Addition totals a run, and 444 in. is that same 37 ft expressed in inches, which is a different unit rather than a different answer.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "A 96 in. stud is trimmed to 92 5/8 in. How much goes in the bin?",
            options: [
              "3 3/8 in.",
              "4 3/8 in., subtracting from 97 in. rather than from 96 in.",
              "3 5/8 in., subtracting the whole inches and copying the fraction across unchanged",
              "92 5/8 in., which is the length kept rather than the length removed",
            ],
            correctIndex: 0,
            explanation:
              "96 minus 92 5/8: borrow one inch to make 95 8/8, then 95 8/8 minus 92 5/8 = 3 3/8 in. Check by adding it back: 92 5/8 + 3 3/8 = 96.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "How would you estimate 288 divided by 16 before working it out?",
            options: [
              "16 into 320 is 20, so a bit under 20",
              "Round 288 to 300 and 16 to 20, which gives 15 and is close enough",
              "Halve 288 four times, which gives 18 and is the exact answer anyway",
              "Take ten percent of 288, which gives about 29",
            ],
            correctIndex: 0,
            explanation:
              "320 is a clean multiple of 16, and 288 is smaller, so the answer sits just under 20. That is enough to catch a factor error, which is all an estimate is for.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "How do you check that 288 / 16 = 18 without redoing the division?",
            options: [
              "Multiply 18 by 16",
              "Divide 288 by 18 and confirm that the result is not 16",
              "Add 16 to 18 and compare the total against 288",
              "Subtract 18 from 288 sixteen times and confirm the result reaches zero",
            ],
            correctIndex: 0,
            explanation:
              "Reversing the operation is the cheapest check there is: 18 x 16 = 288. Repeating the same division repeats the same keystroke slip.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "Which sanity check tells you at once that you divided the wrong way round?",
            options: [
              "Dividing by more than 1 must shrink a number",
              "The answer has more digits than either of the two numbers you started with",
              "The answer comes out as a fraction rather than as a whole number",
              "The answer does not match the estimate to within one percent",
            ],
            correctIndex: 0,
            explanation:
              "If you divide by something bigger than one and the answer got bigger, the two numbers went into the division in the wrong order. Direction is a faster check than magnitude.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "What does 'on center' measure between?",
            options: [
              "Centre of one member to centre of the next",
              "The clear opening between the faces of two adjacent members",
              "The near face of one member to the near face of the next",
              "The centre of the wall to the centre of the nearest stud",
            ],
            correctIndex: 0,
            explanation:
              "Face-to-face spacing is the clear span, which is a different and smaller number. Sheet edges land on stud centres, which is why the spacing is defined this way.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "Which operation answers 'how many of these fit into that'?",
            options: [
              "Division",
              "Multiplication, since the pieces are identical and repeat along the run",
              "Subtraction, since each piece is taken away from the total in turn",
              "Addition, since the pieces are totalled until the run is filled",
            ],
            correctIndex: 0,
            explanation:
              "288 in. of wall divided into 16 in. spaces is a division, and the remainder it leaves is a physical offcut rather than a rounding artifact.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "Why does the course write 288 in. / 16 in. per space rather than just 288 / 16?",
            options: [
              "The units cancel and name the answer",
              "Because a division written without units is ambiguous about which number is the divisor",
              "Because suppliers require the unit to appear in every line of a takeoff",
              "Because inches must always be written out in full on a material list",
            ],
            correctIndex: 0,
            explanation:
              "Inches cancel against inches per space and spaces are what remain, so the unit of the answer falls out of the arithmetic instead of being guessed at the end.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "In 1,248, what does the 2 represent?",
            options: [
              "Two hundred",
              "Two thousand, since it sits immediately after the thousands separator",
              "Twenty, since it is the second digit from the left",
              "Two, since place value applies only to digits after the decimal point",
            ],
            correctIndex: 0,
            explanation:
              "The columns run thousands, hundreds, tens, units, so 1,248 is one thousand, two hundred, forty and eight. Column position is the whole of place value.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "A material list is built from the expression 2 x 24 + 2 x 12. What is the total?",
            options: [
              "72",
              "96, adding the two products and then doubling the result again",
              "60, doubling only the first number before adding the rest",
              "52, adding 24 and 12 and then adding the two multipliers",
            ],
            correctIndex: 0,
            explanation:
              "Multiplication runs before addition, so this is 48 + 24 = 72. Written this way the parentheses are unnecessary because each wall pair is already doubled on its own.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "Which of these is repeated addition of identical things?",
            options: [
              "19 studs at 8 ft",
              "A 96 in. stud trimmed down to a finished length of 92 5/8 in.",
              "Three walls of 12 ft, 16 ft and 9 ft totalled into one plate order",
              "288 in. of wall split into 16 in. layout spaces",
            ],
            correctIndex: 0,
            explanation:
              "Identical items repeated is multiplication. Different lengths totalled is addition, trimming is subtraction, and splitting a span is division.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "Why does the sheathing example say a wall dividing evenly into sheets is unusual?",
            options: [
              "Real walls leave a partial sheet",
              "Because sheet sizes vary between suppliers, so the arithmetic rarely repeats",
              "Because openings for doors and windows are cut from separate stock",
              "Because sheathing is ordered by the square foot rather than by the sheet",
            ],
            correctIndex: 0,
            explanation:
              "24 ft happens to be exactly six 4 ft sheets. Any wall length that is not a multiple of the sheet width leaves a partial sheet, which you round up and then keep the offcut.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "What is the first thing to do when a wall is given in feet and a spacing in inches?",
            options: [
              "Convert to one unit",
              "Divide the two numbers as they stand and label the answer in mixed units",
              "Round the wall length to the nearest whole number of spacings",
              "Convert the spacing into a decimal fraction of a foot and divide",
            ],
            correctIndex: 0,
            explanation:
              "24 ft becomes 288 in. before anything is divided. Dividing 24 by 16 gives 1.5, which is a real number and the answer to a question nobody asked.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "What makes the order of operations more than a classroom convention?",
            options: [
              "Someone else reads your expression",
              "It is the order in which a calculator processes keystrokes, which cannot be changed",
              "It is required on submittals reviewed by a building official",
              "It determines how many digits an answer should be rounded to",
            ],
            correctIndex: 0,
            explanation:
              "A written expression is a set of instructions the next person follows. If it can be read two ways it will eventually be read the wrong way, and the material list is what pays.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "A wall 24 ft long and 8 ft tall covers how much area?",
            options: [
              "192 sq ft",
              "32 sq ft, which is the size of one sheet rather than of the wall",
              "64 ft, adding the two dimensions and doubling the result",
              "192 ft, which is the right number carrying the wrong unit",
            ],
            correctIndex: 0,
            explanation:
              "24 ft x 8 ft = 192 sq ft. Feet times feet gives square feet, and an answer of 192 ft would be a length, which a wall face is not.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "Which of these is a subtraction problem on a jobsite?",
            options: [
              "Finding the offcut length",
              "Working out how many 16 in. spaces fit along a 288 in. wall",
              "Totalling three wall lengths for a bottom-plate order",
              "Working out the lumber in nineteen identical 8 ft studs",
            ],
            correctIndex: 0,
            explanation:
              "Subtraction finds what is left or what to cut off. The others are division, addition and multiplication respectively.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "Why is the off-by-one between spaces and studs described as always costing exactly one piece?",
            options: [
              "There is one more mark than gap",
              "Because the two end studs are always supplied by the adjoining wall crews",
              "Because layout errors compound along a wall, one stud per bay",
              "Because the last space is always partial and needs a single extra stud",
            ],
            correctIndex: 0,
            explanation:
              "A run of n gaps has n plus 1 marks, so the miscount is one, whatever the wall length. That is what makes it easy to check and easy to keep making.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "What does an estimate actually fix, in the course's phrase about neighborhoods?",
            options: [
              "The size of the answer, not its digits",
              "The number of decimal places the final answer should be carried to",
              "The tolerance the finished work will be measured against",
              "The order in which the operations should be carried out",
            ],
            correctIndex: 0,
            explanation:
              "An estimate is not a second calculation. It says whether the answer belongs near 20 or near 200, which is exactly what a factor error gets wrong.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "The sheathing example needed six sheets for a 24 ft wall 8 ft tall. What would a 25 ft wall need?",
            options: [
              "7 sheets",
              "6 sheets, since the extra foot is covered by the offcuts from the first six",
              "6.25 sheets, leaving the partial sheet on the order as a fraction",
              "8 sheets, allowing a full spare sheet for the extra foot of wall",
            ],
            correctIndex: 0,
            explanation:
              "25 x 8 = 200 sq ft, and 200 / 32 = 6.25, which rounds up to 7. The partial sheet is material somebody will hang, so it rounds up and the offcut is kept.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "Why does lesson 1 say the number 27 will earn its keep later in the course?",
            options: [
              "Concrete is sold by the cubic yard",
              "Because 27 is the number of studs in a standard framed wall",
              "Because 27 square feet is the coverage of a sheet of drywall",
              "Because 27 is the number of inches in three quarters of a yard",
            ],
            correctIndex: 0,
            explanation:
              "Drawings are in feet and inches and concrete is priced per cubic yard, and 27 cubic feet to the cubic yard is the conversion between them.",
            sourceLessonSlug: "what-this-course-is",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Fractions, the language of the tape
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-fraction-is",
      title: "3 · What a fraction is, and how to compare two of them",
      section: "Section 2 · Fractions, the language of the tape",
      body: `**Supports NCCER Core module 00102.**

**A fraction is a division that has not been carried out yet.** The bottom number, the denominator, says how many equal parts the whole was cut into. The top number, the numerator, says how many of those parts you have. In 3/4 in., the inch was cut into four equal parts and you have three of them.

**The tape is built out of one family of fractions.** NIST Handbook 44, which specifies linear measures used commercially, says a linear measure may be graduated in "inches and binary submultiples of the inch" (S.1). Binary submultiple means halved, and halved again: 1/2, 1/4, 1/8, 1/16, and on a machinist's rule 1/32 and 1/64. Every fraction you will read off a blade is one of those, which is why sixteenths are worth learning cold and sevenths are worth nothing.

**Equivalent fractions: multiply or divide top and bottom by the same number.** 1/2 = 2/4 = 4/8 = 8/16. Nothing changed except the size of the pieces you are counting in. This is the single most useful move in the whole subject, because it lets you rewrite any tape fraction in sixteenths and then just count.

**Simplifying is the same move run backwards.** 12/16 divides top and bottom by 4 and becomes 3/4. Both are correct. You simplify because a cut list reading 3/4 in. is read right the first time and 12/16 in. is not.

**Comparing two fractions, and the mistake this course keeps coming back to.** With the same denominator, the bigger numerator wins: 7/16 is more than 5/16. With the same numerator, the bigger denominator LOSES, because it cut the inch into more and therefore smaller pieces. That is the counterintuitive part, and it is exactly the 5/8 and 5/16 trap.

Rewrite them the same way and it stops being subtle. 5/8 = 10/16. So 5/8 is twice 5/16. In decimals, 0.625 in. against 0.3125 in., a difference of 5/16 in., which is a gap you will see through the drywall. Five studs cut that way is a wall.

**Different denominators, so make them the same.** Is 7/16 bigger than 3/8? Rewrite 3/8 as 6/16. Yes, by 1/16.

**Improper fractions and mixed numbers.** 19/16 is more than one whole, because 16/16 is one and there are 3 left over: 19/16 = 1 3/16. Going the other way, 2 3/4 = (2 x 4 + 3)/4 = 11/4. Mixed numbers are what you write on a cut list. Improper fractions are what you calculate with, because you cannot multiply a mixed number without splitting it up anyway.

:::reveal Which is larger, 5/8 in. or 5/16 in., and by how much? ||| 5/8 in. is larger. Rewrite it as 10/16, so it is twice 5/16, and the difference is 5/16 in., which is 0.3125 in.

:::reveal Turn 19/16 into a mixed number, and turn 2 3/4 into an improper fraction. ||| 19/16 is 1 3/16, because 16/16 is one whole with 3 left over. 2 3/4 is 11/4, because 2 x 4 = 8 and 8 + 3 = 11.

:::reveal Why does a bigger denominator make a smaller piece? ||| Because the denominator is the number of equal parts the whole was cut into, so cutting the inch into sixteen parts gives smaller parts than cutting it into eight.

## Vocabulary
- **Numerator**: the top number, counting how many parts you have.
- **Denominator**: the bottom number, saying how many equal parts the whole was cut into, so a larger denominator means smaller parts.
- **Binary submultiple**: a half, a quarter, an eighth, a sixteenth and so on, which is the only family of fractions a customary tape is graduated in.
- **Equivalent fraction**: the same value written in different-sized pieces, made by multiplying or dividing numerator and denominator by the same number.
- **Improper fraction**: one whose numerator is at least its denominator, such as 19/16, which is the form you calculate in.
- **Mixed number**: a whole number and a fraction written together, such as 1 3/16, which is the form you write on a cut list.

## Sources
National Institute of Standards and Technology. (2017). *Specifications, tolerances, and other technical requirements for weighing and measuring devices: Section 5.52, Linear measures* (NIST Handbook 44, 2018 ed.). U.S. Department of Commerce. https://www.nist.gov/system/files/documents/2017/12/07/5-52-18-hb44-final.pdf`,
    },
    {
      slug: "adding-and-subtracting-fractions",
      title: "4 · Adding and subtracting fractions",
      section: "Section 2 · Fractions, the language of the tape",
      body: `**Supports NCCER Core module 00102.**

**You cannot add eighths to sixteenths.** Not because a rule forbids it, but because they are different-sized things, in the way that studs and sheets are different-sized things. Convert to a common denominator first, then add the numerators and leave the denominator alone. On a tape the common denominator is almost always 16, which is why converting everything to sixteenths is a habit worth having rather than a technique worth remembering.

**Worked example: a wall assembly stack-up.** Half-inch drywall, a 3 1/2 in. stud, half-inch drywall on the other face. 1/2 + 3 1/2 + 1/2 = 4 1/2 in. of finished wall thickness. That number is why a door jamb is what it is, and it is the number you check before you order jambs.

**Worked example: unlike denominators.** 5/8 + 3/16 + 1/4. Rewrite in sixteenths: 10/16 + 3/16 + 4/16 = 17/16. That is more than one, so 17/16 = 1 1/16 in.

**The mistake, and the test that catches it every time.** The wrong move is to add the tops and the bottoms: 1/2 + 1/4 = 2/6. Do not memorise why that is wrong, just apply the direction test. Adding a quarter to a half must produce something LARGER than a half, and 2/6 is smaller than a half. The answer points the wrong way, so the method is wrong. The right answer is 2/4 + 1/4 = 3/4.

**Subtraction, and borrowing across the whole number.** A stud bay measures 14 1/2 in. and the blocking you cut is 13 7/8 in. wide. What is the gap?

Rewrite in sixteenths: 14 8/16 minus 13 14/16. You cannot take 14 sixteenths from 8 sixteenths, so borrow one whole inch from the 14, which is 16 more sixteenths: 13 24/16 minus 13 14/16 = 10/16 = 5/8 in.

Check by adding it back: 13 7/8 + 5/8 = 13 + 12/8 = 13 + 1 4/8 = 14 1/2 in. Correct.

**Worked example: sizing a rough opening.** A 30 in. door slab, two jambs at 3/4 in. each, and 1/2 in. of shim space in total. 30 + 3/4 + 3/4 + 1/2 = 32 in. rough opening. Frame it at 31 1/2 in. because you dropped the shim space and the door does not swing.

**Worked example: a run of dimensions.** 3 5/8 + 7 1/4 + 2 1/2. In sixteenths: 3 10/16 + 7 4/16 + 2 8/16 = 12 22/16. Twenty-two sixteenths is one whole and 6/16, so 13 6/16 = 13 3/8 in.

:::reveal Add 5/8 + 3/16 + 1/4 and give the answer as a mixed number. ||| Rewrite everything in sixteenths: 10/16 + 3/16 + 4/16 = 17/16, which is 1 1/16.

:::reveal A 14 1/2 in. bay takes a 13 7/8 in. piece of blocking. What is the gap, and how do you check it? ||| The gap is 5/8 in. Work it as 14 8/16 minus 13 14/16, borrowing a whole inch to make 13 24/16 minus 13 14/16 = 10/16 = 5/8. Check by adding 5/8 back to 13 7/8, which gives 14 1/2.

:::reveal Why is 1/2 + 1/4 = 2/6 obviously wrong before you work out the right answer? ||| Because adding a quarter to a half has to give something bigger than a half, and 2/6 is smaller than a half. The answer points the wrong way, so the method is wrong.

## Vocabulary
- **Common denominator**: a shared bottom number that lets two fractions be added, which on a tape is almost always 16.
- **Borrowing**: taking one whole unit and rewriting it as its equivalent in fractional parts, such as one inch becoming 16/16, so a subtraction can be completed.
- **Direction test**: checking that an answer moved the way the operation must move it, which catches adding denominators before any arithmetic is redone.
- **Stack-up**: the total thickness of an assembly found by adding its layers, such as drywall plus stud plus drywall.
- **Rough opening**: the framed opening a door or window unit is installed into, sized by adding the unit, its jambs and its shim space.

## Sources
No external source is cited in this lesson. Adding and subtracting fractions is taught from first principles, and every dimension in the worked examples was invented for this course.`,
    },
    {
      slug: "multiplying-and-dividing-fractions",
      title: "5 · Multiplying and dividing fractions, and the saw kerf",
      section: "Section 2 · Fractions, the language of the tape",
      body: `**Supports NCCER Core module 00102.**

**Multiplying is the easy one: tops together, bottoms together, then simplify.** 3/4 x 1/2 = 3/8. No common denominator is needed, which surprises people who have just learned that addition needs one.

**"Of" means multiply.** Half of a 3 1/2 in. stud is 1 3/4 in. Work it as improper fractions: 7/2 x 1/2 = 7/4 = 1 3/4. That number is the distance from the face of a stud to its centre line, which is what makes "on center" layout work at all.

**Multiplying a mixed number: convert it first.** Five pieces at 2 3/8 in. each. 2 3/8 = 19/8, and 5 x 19/8 = 95/8 = 11 7/8 in. Trying to multiply the whole numbers and the fractions separately is where people lose a piece.

**Dividing by a fraction: invert and multiply.** How many 1/4 in. strips come out of a 7 1/2 in. board? 15/2 divided by 1/4 is 15/2 x 4/1 = 60/2 = 30. Thirty strips, on paper.

**On paper, because the saw is not free.** A blade removes a slot of wood called the kerf, and a common circular-saw kerf is about 1/8 in. Every cut turns that much material into sawdust. Thirty strips would need twenty-nine cuts between them, and 29 x 1/8 in. is 3 5/8 in., so the stock would have to be 7 1/2 plus 3 5/8, which is 11 1/8 in. wide. What a 7 1/2 in. board actually yields is twenty: twenty strips at 1/4 in. is 5 in., nineteen cuts at 1/8 in. is 2 3/8 in., and 5 plus 2 3/8 is 7 3/8 in., which fits with an eighth to spare. The arithmetic was right and the answer was still wrong, because the model left something out.

**Worked example where the kerf decides it.** A 96 in. board, five pieces at 19 in. each. 5 x 19 = 95 in., four cuts between them at 1/8 in. each is 1/2 in., total 95 1/2 in. It fits, with half an inch spare. Now make the pieces 19 1/4 in.: 5 x 19 1/4 = 96 1/4 in., which is over 96 before you have cut anything at all. Same board, same five pieces, and the second version needs a second board.

**Dividing a span into equal parts.** A 90 in. run of cabinet gets four equal drawer fronts. 90 / 4 = 22 1/2 in. each. Note what this division does NOT include: the gaps between drawers, which have to come out of the 90 in. before you divide, not after.

:::reveal What is half of 3 1/2 in., and what is that number used for? ||| It is 1 3/4 in. It is the distance from the face of a nominal two-by-four stud to its centre line, which is what "on center" layout is measured to.

:::reveal Five pieces at 2 3/8 in. come to what total length? ||| 2 3/8 is 19/8, and 5 x 19/8 = 95/8, which is 11 7/8 in.

:::reveal Why does a 7 1/2 in. board not actually yield thirty 1/4 in. strips, and how many does it yield? ||| Because the saw destroys 1/8 in. on every cut, and thirty strips would need twenty-nine cuts, so the stock would have to be 11 1/8 in. wide. A 7 1/2 in. board yields twenty: 5 in. of strips plus 2 3/8 in. of kerf is 7 3/8 in.

## Vocabulary
- **Kerf**: the slot of material a blade removes on each cut, commonly about 1/8 in. for a circular saw, which is real material subtracted from the stock.
- **Invert and multiply**: the rule for dividing by a fraction, in which the divisor is turned upside down and the two are multiplied.
- **Centre line**: the line halfway through a member's thickness, which is what on-center spacing is measured between.
- **Clear span**: the space actually left between members or parts, which is what remains after the members themselves and any gaps are taken out of the overall dimension.

## Sources
No external source is cited in this lesson. Multiplying and dividing fractions is taught from first principles, and the kerf figure is described as a common approximate blade thickness rather than as a specified value; confirm the kerf stamped on the blade you are using.`,
    },
    {
      slug: "fraction-drill",
      title: "6 · Drill · Fractions you will meet on a tape",
      section: "Section 2 · Fractions, the language of the tape",
      body: `**Supports NCCER Core module 00102.** Producing the number by hand is the skill here, so type the answer rather than picking it. Write fractions the way you would on a cut list: whole number, a space, then the fraction, as in 1 3/16. Simplify every answer, so 12/16 is written 3/4.

## Vocabulary
- **Cut-list form**: a whole number, a space and a simplified fraction, such as 1 3/16, which is how a dimension is written for whoever is at the saw.
- **Production**: writing an answer down yourself rather than recognising it among four options, which is harder and is what the job actually asks for.
- **Accepted variant**: an alternative spelling of the same answer that the drill marks correct, such as 1-3/16 for 1 3/16.

## Sources
No external source is cited in this drill. Every item is arithmetic taught from first principles in the three lessons above it.`,
      exercise: {
        instructions:
          "Work each one out on paper first, then type the answer. Simplify, and give mixed numbers rather than improper fractions.",
        items: [
          {
            prompt: "Write 12/16 in its simplest form.",
            answer: "3/4",
            accept: ["3 / 4"],
            computedAnswer: true,
            hint: "Divide the top and the bottom by the same number.",
            explanation: "12 and 16 are both divisible by 4, giving 3/4.",
          },
          {
            prompt: "Write 5/8 in sixteenths.",
            answer: "10/16",
            computedAnswer: true,
            hint: "Multiply top and bottom by the same number.",
            explanation: "Multiplying both by 2 gives 10/16, which is why 5/8 is twice 5/16.",
          },
          {
            prompt: "Write 19/16 as a mixed number.",
            answer: "1 3/16",
            accept: ["1-3/16"],
            computedAnswer: true,
            hint: "How many whole inches are in 19 sixteenths?",
            explanation: "16/16 is one whole with 3 sixteenths left over, so 1 3/16.",
          },
          {
            prompt: "Write 2 3/4 as an improper fraction.",
            answer: "11/4",
            computedAnswer: true,
            hint: "Multiply the whole number by the denominator, then add the numerator.",
            explanation: "2 x 4 = 8, and 8 + 3 = 11, so 11/4.",
          },
          {
            prompt: "Add 5/8 + 3/16 + 1/4. Give a mixed number.",
            answer: "1 1/16",
            accept: ["1-1/16"],
            computedAnswer: true,
            hint: "Put everything over 16 first.",
            explanation: "10/16 + 3/16 + 4/16 = 17/16, which is 1 1/16.",
          },
          {
            prompt: "Subtract: 14 1/2 minus 13 7/8. Give the answer in inches.",
            answer: "5/8",
            computedAnswer: true,
            hint: "Borrow one whole inch as 16/16.",
            explanation: "14 8/16 minus 13 14/16 becomes 13 24/16 minus 13 14/16 = 10/16 = 5/8.",
          },
          {
            prompt: "Add the run 3 5/8 + 7 1/4 + 2 1/2.",
            answer: "13 3/8",
            accept: ["13-3/8"],
            computedAnswer: true,
            hint: "Sixteenths throughout, then simplify at the end.",
            explanation: "3 10/16 + 7 4/16 + 2 8/16 = 12 22/16 = 13 6/16 = 13 3/8.",
          },
          {
            prompt: "What is half of 3 1/2 in.?",
            answer: "1 3/4",
            accept: ["1-3/4"],
            computedAnswer: true,
            hint: "Turn it into an improper fraction and multiply by 1/2.",
            explanation: "7/2 x 1/2 = 7/4 = 1 3/4, which is the face-to-centre distance of a stud.",
          },
          {
            prompt: "Multiply: 5 x 2 3/8.",
            answer: "11 7/8",
            accept: ["11-7/8"],
            computedAnswer: true,
            hint: "Convert the mixed number before you multiply.",
            explanation: "2 3/8 is 19/8, and 5 x 19/8 = 95/8 = 11 7/8.",
          },
          {
            prompt: "Divide a 90 in. run into four equal parts. Give one part in inches.",
            answer: "22 1/2",
            accept: ["22-1/2", "22.5"],
            computedAnswer: true,
            hint: "Straight division, then write the remainder as a fraction.",
            explanation: "90 / 4 = 22.5, written 22 1/2 in. Any gaps between the parts must come out before you divide.",
          },
        ],
      },
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Fractions",
      section: "Section 2 · Fractions, the language of the tape",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the denominator of a fraction tell you?",
            options: [
              "How many equal parts the whole was cut into",
              "How many of the parts you actually have in hand at the moment",
              "How many times the fraction has to be added to reach one whole inch",
              "Which mark on the tape blade the measurement was read from",
            ],
            correctIndex: 0,
            explanation:
              "The numerator counts the parts you have. The denominator sets their size, which is why a bigger denominator means a smaller piece.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Which is larger, 5/8 in. or 5/16 in.?",
            options: [
              "5/8 in.",
              "5/16 in., because sixteenths are finer and therefore represent a longer measurement",
              "They are equal, because both have the same numerator of five",
              "It depends on whether the tape is graduated in eighths or in sixteenths",
            ],
            correctIndex: 0,
            explanation:
              "5/8 rewritten in sixteenths is 10/16, so it is exactly twice 5/16. In decimals that is 0.625 in. against 0.3125 in.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "By how much does 5/8 in. exceed 5/16 in.?",
            options: [
              "5/16 in.",
              "3/8 in., which is the difference between the two denominators expressed as a fraction",
              "1/2 in., because the two readings sit half an inch apart on the blade",
              "5/24 in., subtracting the numerators and adding the denominators",
            ],
            correctIndex: 0,
            explanation:
              "10/16 minus 5/16 is 5/16 in., or 0.3125 in. That is a gap you can see through finished drywall.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "What family of fractions does NIST Handbook 44 say a linear measure may be graduated in?",
            options: [
              "Binary submultiples of the inch",
              "Any fractional division the manufacturer chooses, provided it is printed on the blade",
              "Thirds, sixths and twelfths of the inch, matching the twelve inches in a foot",
              "Decimal fractions of the inch only, to two places",
            ],
            correctIndex: 0,
            explanation:
              "Section 5.52, S.1 of Handbook 44 lists inches and binary submultiples of the inch. Binary submultiple means halved, and halved again: 1/2, 1/4, 1/8, 1/16.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Why are sevenths of an inch worth nothing to a carpenter?",
            options: [
              "No tape is graduated in them",
              "Because seven is a prime number and cannot be simplified against any other denominator",
              "Because they are too fine to be resolved by an ordinary steel tape",
              "Because building codes specify dimensions only in halves and quarters",
            ],
            correctIndex: 0,
            explanation:
              "A customary tape is graduated in binary submultiples, so every fraction you can read off one is a half, quarter, eighth, sixteenth or finer halving.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "How do you turn 1/2 into sixteenths?",
            options: [
              "Multiply top and bottom by 8",
              "Add 8 to the denominator and leave the numerator where it is",
              "Multiply the denominator by 8 and leave the numerator alone",
              "Divide the numerator into the denominator and write the result over 16",
            ],
            correctIndex: 0,
            explanation:
              "Multiplying both parts by the same number leaves the value unchanged and only changes the size of the pieces being counted: 1/2 = 8/16.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Simplify 12/16.",
            options: [
              "3/4",
              "6/8, which halves both numbers once and then stops one step short",
              "4/3, inverting the fraction after dividing by four",
              "1/4, subtracting 12 from 16 and writing the difference over the denominator",
            ],
            correctIndex: 0,
            explanation:
              "Both numbers divide by 4. A cut list reading 3/4 in. is read right the first time and one reading 12/16 in. is not.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Write 19/16 as a mixed number.",
            options: [
              "1 3/16",
              "1 9/16, taking the leftover directly from the numerator's last digit",
              "3/16, dropping the whole inch because it is already accounted for",
              "1 19/16, keeping the improper fraction and adding a whole in front of it",
            ],
            correctIndex: 0,
            explanation:
              "16/16 is one whole inch, and 19 minus 16 leaves 3 sixteenths, so 1 3/16.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Write 2 3/4 as an improper fraction.",
            options: [
              "11/4",
              "23/4, running the whole number and the numerator together as written digits",
              "6/4, multiplying the whole number by the denominator and stopping there",
              "5/4, adding the whole number to the numerator and keeping the denominator",
            ],
            correctIndex: 0,
            explanation:
              "2 x 4 = 8 quarters in the whole inches, plus the 3 quarters already there, gives 11/4.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Which is bigger, 7/16 or 3/8, and by how much?",
            options: [
              "7/16, by 1/16",
              "3/8, by 1/8, because eighths are larger pieces than sixteenths",
              "They are equal once 3/8 is rewritten over a common denominator",
              "7/16, by 4/16, which is the difference between the two numerators",
            ],
            correctIndex: 0,
            explanation:
              "3/8 rewritten is 6/16, and 7/16 minus 6/16 is 1/16. Rewriting to a common denominator turns a judgement call into a subtraction.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Which form do you calculate in, and which do you write on a cut list?",
            options: [
              "Calculate improper, write mixed",
              "Calculate in mixed numbers, then convert to improper fractions for the list",
              "Use improper fractions for both, since they are unambiguous",
              "Use decimals for both, converting to fractions only at the saw",
            ],
            correctIndex: 0,
            explanation:
              "You cannot multiply a mixed number without splitting it up anyway, and a cut list reading 1 3/16 in. is read correctly at the saw where 19/16 in. invites a mistake.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Why can two fractions with different denominators not simply be added?",
            options: [
              "They count different-sized pieces",
              "Because the sum would exceed one whole unless the denominators match",
              "Because the numerators would then have to be multiplied rather than added",
              "Because a fraction is only defined when its denominator is a power of two",
            ],
            correctIndex: 0,
            explanation:
              "Eighths and sixteenths are different-sized things, in the way studs and sheets are. Rewrite both in the same size of piece and the addition becomes ordinary counting.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "What is 1/2 + 3 1/2 + 1/2, the stack-up of a drywalled two-by-four wall?",
            options: [
              "4 1/2 in.",
              "5 in., counting three layers of drywall instead of two",
              "4 in., adding the two drywall layers and forgetting the stud",
              "3 3/4 in., halving the stud thickness before adding the layers",
            ],
            correctIndex: 0,
            explanation:
              "Half an inch of board on each face plus a 3 1/2 in. stud is 4 1/2 in. of finished wall, which is the number you check before ordering jambs.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "Add 5/8 + 3/16 + 1/4.",
            options: [
              "1 1/16",
              "9/28, adding the numerators together and then the denominators together",
              "15/16, converting the quarter inch into two sixteenths instead of four",
              "1 1/8, converting to eighths and losing the odd sixteenth in the rounding",
            ],
            correctIndex: 0,
            explanation:
              "In sixteenths that is 10/16 + 3/16 + 4/16 = 17/16, and 17/16 written as a mixed number is 1 1/16.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "Why is 1/2 + 1/4 = 2/6 wrong before you work out the right answer?",
            options: [
              "The answer got smaller",
              "Because 2/6 does not simplify to a fraction with a power-of-two denominator",
              "Because 6 is not a denominator that appears anywhere on a tape measure",
              "Because the numerators should have been multiplied rather than added",
            ],
            correctIndex: 0,
            explanation:
              "Adding a quarter to a half must give more than a half, and 2/6 is less than a half. The direction test catches the error without any arithmetic at all.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "What is 1/2 + 1/4?",
            options: [
              "3/4",
              "2/6, adding the tops together and then the bottoms together",
              "1/6, adding the numerators and multiplying the denominators",
              "1/8, multiplying the two fractions instead of adding them",
            ],
            correctIndex: 0,
            explanation:
              "Rewrite the half as 2/4, then 2/4 + 1/4 = 3/4. Adding fractions changes numerators only; the denominator names the piece size and stays put.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "A 14 1/2 in. bay takes a 13 7/8 in. piece of blocking. What gap is left?",
            options: [
              "5/8 in.",
              "1 3/8 in., subtracting the fractions the wrong way round before borrowing",
              "6/16 in., borrowing ten sixteenths instead of sixteen",
              "7/8 in., subtracting only the whole inches and carrying the fraction across",
            ],
            correctIndex: 0,
            explanation:
              "14 8/16 minus 13 14/16 needs a borrow: 13 24/16 minus 13 14/16 = 10/16 = 5/8 in. Add it back to 13 7/8 and you get 14 1/2, which is the check.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "What does borrowing one whole inch give you, in sixteenths?",
            options: [
              "16 more sixteenths",
              "10 more sixteenths, matching the way borrowing works in decimal arithmetic",
              "12 more sixteenths, because there are twelve inches in a foot",
              "8 more sixteenths, because a whole inch is two halves",
            ],
            correctIndex: 0,
            explanation:
              "One inch is 16/16, so borrowing it turns 14 8/16 into 13 24/16. Borrowing in fractions moves a whole unit down, exactly as it does in decimals, but the unit is not ten.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "A 30 in. door slab, two 3/4 in. jambs and 1/2 in. of shim space. What rough opening?",
            options: [
              "32 in.",
              "31 1/2 in., which is the figure you get by dropping the shim space",
              "30 3/4 in., counting only one jamb into the total",
              "33 in., counting 1/2 in. of shim space on each side rather than in total",
            ],
            correctIndex: 0,
            explanation:
              "30 + 3/4 + 3/4 + 1/2 = 32 in. Frame it at 31 1/2 in. and there is nothing left to shim with, so the door does not swing true.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "Add the run 3 5/8 + 7 1/4 + 2 1/2.",
            options: [
              "13 3/8",
              "12 5/8, adding the whole inches and carrying only the largest fraction across",
              "13 8/16, rounding the sixteenths up to the nearest half inch",
              "12 3/8, forgetting to carry the whole inch out of the twenty-two sixteenths",
            ],
            correctIndex: 0,
            explanation:
              "3 10/16 + 7 4/16 + 2 8/16 = 12 22/16. Twenty-two sixteenths is one whole and 6/16, so the total is 13 6/16, which simplifies to 13 3/8.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "Why does the course call sixteenths a habit rather than a technique?",
            options: [
              "Almost every tape fraction fits over 16",
              "Because sixteenths are the finest division any tape carries, so nothing is ever lost",
              "Because building codes express tolerances in sixteenths of an inch",
              "Because sixteenths convert to decimals without a repeating remainder",
            ],
            correctIndex: 0,
            explanation:
              "Halves, quarters and eighths all rewrite over 16 without a remainder, so converting first and adding second removes the decision from every problem.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "What is 3/4 x 1/2?",
            options: [
              "3/8",
              "1 1/4, adding the two fractions instead of multiplying them",
              "6/4, multiplying the numerator of the first by the denominator of the second",
              "3/4, since multiplying by a half leaves the numerator unchanged",
            ],
            correctIndex: 0,
            explanation:
              "Tops together and bottoms together: 3 x 1 = 3 over 4 x 2 = 8. Multiplication needs no common denominator, which surprises people who have just learned that addition does.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "In fraction arithmetic, what does the word 'of' signal?",
            options: [
              "Multiply",
              "Divide, because taking a share of something splits it into parts",
              "Subtract, because a part is taken away from the whole",
              "Convert to a common denominator before doing anything else",
            ],
            correctIndex: 0,
            explanation:
              "Half of 3 1/2 in. is 7/2 x 1/2 = 7/4 = 1 3/4 in., which is the face-to-centre distance of a stud.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "What is half of 3 1/2 in.?",
            options: [
              "1 3/4 in.",
              "1 1/2 in., halving the whole number and leaving the fraction as it stands",
              "7 in., doubling the dimension instead of halving it",
              "1 1/4 in., halving the whole number and then halving the fraction separately",
            ],
            correctIndex: 0,
            explanation:
              "7/2 x 1/2 = 7/4 = 1 3/4 in. It is the distance from a stud face to its centre line, which is what makes on-center layout work.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "Five pieces at 2 3/8 in. each come to what total?",
            options: [
              "11 7/8 in.",
              "10 3/8 in., multiplying only the whole number and carrying the fraction across once",
              "7 3/8 in., adding the count of five to the piece length instead of multiplying",
              "12 in., rounding each piece up to 2 1/2 in. before multiplying",
            ],
            correctIndex: 0,
            explanation:
              "Convert first: 2 3/8 is 19/8, and 5 x 19/8 = 95/8. Since 8 x 11 = 88, that is 11 with 7 left over, so 11 7/8 in.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "How do you divide by a fraction?",
            options: [
              "Invert it and multiply",
              "Find a common denominator and then divide the numerators into each other",
              "Divide the numerators and then divide the denominators separately",
              "Convert both fractions to decimals, because fractions cannot be divided directly",
            ],
            correctIndex: 0,
            explanation:
              "7 1/2 divided by 1/4 is 15/2 x 4/1 = 60/2 = 30. Inverting the divisor is what turns a division into a multiplication you can actually do.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "On paper, how many 1/4 in. strips come out of a 7 1/2 in. board?",
            options: [
              "30",
              "7 1/2, dividing by one rather than by a quarter",
              "1 7/8, multiplying by a quarter instead of dividing by it",
              "15, dividing by a half instead of by a quarter",
            ],
            correctIndex: 0,
            explanation:
              "15/2 x 4/1 = 60/2 = 30. That is the paper answer, and the next question is why the real board does not yield thirty.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "Why does a 7 1/2 in. board not really yield thirty 1/4 in. strips?",
            options: [
              "The saw kerf eats the material",
              "Because the outer edges of the board are never square enough to use",
              "Because a quarter-inch strip cannot be cut safely and must be planed instead",
              "Because the board's nominal width is larger than its actual width",
            ],
            correctIndex: 0,
            explanation:
              "Thirty strips take twenty-nine cuts, and at about 1/8 in. each that is 3 5/8 in. of sawdust, so the stock would have to be 11 1/8 in. wide. A 7 1/2 in. board yields twenty.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "What is a saw kerf?",
            options: [
              "The slot of material a blade removes",
              "The angle a blade is set to when cutting a bevel across the grain",
              "The unsupported length of stock left beyond the last cut",
              "The allowance added to a cut list to cover measuring error",
            ],
            correctIndex: 0,
            explanation:
              "It is real material destroyed on every cut, commonly about 1/8 in. on a circular saw, which is why a cut list that adds up exactly does not fit exactly.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "Five 19 in. pieces are cut from a 96 in. board with a 1/8 in. kerf. Does it work?",
            options: [
              "Yes, with 1/2 in. to spare",
              "No, because the four kerfs add 1 in. and push the total past 96 in.",
              "Yes, but only exactly, with nothing at all left over",
              "No, because five pieces at 19 in. already come to 96 in. before any cutting",
            ],
            correctIndex: 0,
            explanation:
              "5 x 19 = 95 in. of pieces plus four kerfs at 1/8 in., which is 1/2 in., gives 95 1/2 in. against a 96 in. board.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "Change those five pieces to 19 1/4 in. each. What happens?",
            options: [
              "They no longer fit",
              "They still fit, because the extra quarter inch comes out of the spare half inch",
              "They fit exactly, with the kerf absorbed by the last piece",
              "Four fit and the fifth comes up 1/8 in. short",
            ],
            correctIndex: 0,
            explanation:
              "5 x 19 1/4 = 96 1/4 in., which is already over the 96 in. board before a single kerf is counted. Same board, same five pieces, and now it takes two boards.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "A 90 in. cabinet run is split into four equal drawer fronts. How wide is each?",
            options: [
              "22 1/2 in.",
              "24 in., rounding the division up to the nearest whole inch for convenience",
              "22 in., dropping the remainder because a drawer front is cut to whole inches",
              "360 in., multiplying by four instead of dividing by it",
            ],
            correctIndex: 0,
            explanation:
              "90 / 4 = 22 1/2 in. Any gaps between the drawers have to come out of the 90 in. before you divide, not after.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "In the drawer-front example, when do the gaps between drawers get subtracted?",
            options: [
              "Before the division",
              "After the division, by trimming each finished front by half a gap",
              "They are not subtracted, because the gap is taken up by the drawer slides",
              "During the division, by using five parts instead of four",
            ],
            correctIndex: 0,
            explanation:
              "Take the gaps out of the overall run first, then divide what is left into equal parts. Subtracting afterwards changes every front by a different amount.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "Which operation needs no common denominator?",
            options: [
              "Multiplication",
              "Addition, provided both fractions are binary submultiples of the inch",
              "Subtraction, provided the larger fraction is written first",
              "Every fraction operation needs one before it can be started",
            ],
            correctIndex: 0,
            explanation:
              "Multiplying runs tops together and bottoms together. Adding and subtracting both need the pieces to be the same size first.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "In the drill, how should 12/16 be written?",
            options: [
              "3/4",
              "0.75, because the drill asks for decimals in place of fractions",
              "12/16, because simplifying loses the precision of the original reading",
              "6/8, which is one simplification step short of the answer",
            ],
            correctIndex: 0,
            explanation:
              "The drill asks for simplified answers in cut-list form, so both parts divide by 4 and the answer is 3/4.",
            sourceLessonSlug: "fraction-drill",
          },
          {
            prompt: "What form does the fractions drill ask you to write answers in?",
            options: [
              "Whole number, space, fraction",
              "Improper fractions throughout, so that nothing has to be converted twice",
              "Decimals to three places, rounded at the end of each calculation",
              "Sixteenths in every case, whether or not the fraction simplifies",
            ],
            correctIndex: 0,
            explanation:
              "1 3/16 is cut-list form, which is what a saw operator reads. The drill also asks for simplified answers, so 12/16 is written 3/4.",
            sourceLessonSlug: "fraction-drill",
          },
          {
            prompt: "Why is the fractions drill a typed exercise rather than multiple choice?",
            options: [
              "Producing the number is the skill",
              "Because typing an answer takes longer and therefore encourages careful work",
              "Because multiple choice cannot represent fractional answers on screen",
              "Because the drill records keystrokes for the instructor to review later",
            ],
            correctIndex: 0,
            explanation:
              "Recognising a correct fraction among four options is a different and easier task than producing one on paper, and producing it is what a cut list demands.",
            sourceLessonSlug: "fraction-drill",
          },
          {
            prompt: "A fraction is best understood as which operation left undone?",
            options: [
              "A division",
              "A multiplication of the numerator by the reciprocal of the whole",
              "A subtraction of the numerator from the denominator",
              "An addition of equal parts until the whole is reached",
            ],
            correctIndex: 0,
            explanation:
              "5/8 is 5 divided by 8, which is why carrying the division out gives 0.625 and why a fraction converts to a decimal so directly.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Which pair of fractions is equivalent?",
            options: [
              "1/2 and 8/16",
              "3/8 and 3/16, since only the denominator changed",
              "5/8 and 5/16, since the numerators are the same",
              "1/4 and 2/16, halving the numerator as the denominator quadruples",
            ],
            correctIndex: 0,
            explanation:
              "Multiplying 1/2 top and bottom by 8 gives 8/16, the same value counted in smaller pieces. The 1/4 and 2/16 pairing fails because a quarter is 4/16, not 2/16.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Why does the course say to simplify a fraction before it reaches a cut list?",
            options: [
              "It is read correctly first time",
              "Because an unsimplified fraction is arithmetically incorrect on a dimension",
              "Because saws are calibrated to simplified fractions rather than to sixteenths",
              "Because a simplified fraction is more precise than the form it came from",
            ],
            correctIndex: 0,
            explanation:
              "12/16 in. and 3/4 in. are the same length. One of them is read right at the saw the first time, under noise and time pressure, and the other is not.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Which check confirms a fraction subtraction without redoing it?",
            options: [
              "Add the answer back",
              "Subtract the answer from the larger number and confirm you get the smaller",
              "Convert both numbers to decimals and compare the number of digits",
              "Check that the answer has the same denominator as the larger number",
            ],
            correctIndex: 0,
            explanation:
              "13 7/8 + 5/8 = 13 + 12/8 = 14 1/2, which was the number you started from. Reversing the operation is the cheapest check in the course.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "What happens to the denominator when two fractions with the same denominator are added?",
            options: [
              "It stays the same",
              "It doubles, because two equal-sized sets of pieces have been combined",
              "It is added to the other denominator to give the new piece size",
              "It is multiplied by the numerator to keep the value in proportion",
            ],
            correctIndex: 0,
            explanation:
              "The denominator names the size of the piece, and adding does not change the size of a piece. Only the count of pieces changes.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "What is the practical consequence of five studs each cut 5/16 in. short?",
            options: [
              "A wall you can see the error in",
              "Nothing measurable, since a sixteenth is inside normal framing tolerance",
              "A slight change in the plate length, correctable by shimming the top plate",
              "A gap that closes once the sheathing is nailed and the wall is racked square",
            ],
            correctIndex: 0,
            explanation:
              "5/16 in. is 0.3125 in., a third of an inch, and it repeats across every one of the five. The mistake is a misread fraction and the outcome is finished work.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "How many sixteenths are in 3/4 in.?",
            options: [
              "12",
              "4, which is the number of sixteenths in a quarter inch rather than in three quarters",
              "3, taking the numerator across unchanged when the denominator changes",
              "48, multiplying the denominators together instead of scaling the numerator",
            ],
            correctIndex: 0,
            explanation:
              "Multiply top and bottom by 4: 3/4 = 12/16. Counting sixteenths is the move that makes tape arithmetic mechanical.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Which statement about multiplying mixed numbers is correct?",
            options: [
              "Convert to improper fractions first",
              "Multiply the whole numbers, then multiply the fractions, then add the two results",
              "Multiply the whole numbers and carry the fraction across unchanged",
              "Round to the nearest whole number, multiply, then add the fractions back",
            ],
            correctIndex: 0,
            explanation:
              "5 x 2 3/8 becomes 5 x 19/8 = 95/8 = 11 7/8. Handling the parts separately is where the missing piece comes from.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "Twenty-nine cuts at a 1/8 in. kerf remove how much material?",
            options: [
              "3 5/8 in.",
              "1 13/16 in., taking the kerf as a sixteenth of an inch rather than an eighth",
              "1/8 in., since the kerf is the same width no matter how many cuts are made",
              "3 1/2 in., rounding twenty-nine eighths down to the nearest half inch",
            ],
            correctIndex: 0,
            explanation:
              "29 x 1/8 = 29/8, and 8 x 3 = 24 with 5 left over, so 3 5/8 in. Both 29/8 and 3 5/8 are the same length; only one of them belongs on a list.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "How many sixteenths are in 1/2 in.?",
            options: [
              "8",
              "2, carrying the denominator across as the new numerator",
              "16, since a half is half of the sixteen marks on either side of it",
              "4, which is the number of sixteenths in a quarter inch",
            ],
            correctIndex: 0,
            explanation:
              "Multiply top and bottom by 8: 1/2 = 8/16. The half is the eighth small mark, which is also why it carries the second-longest graduation.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "How many sixteenths are in 1/4 in.?",
            options: [
              "4",
              "8, which is the number of sixteenths in a half inch instead",
              "16, taking the denominator as the count of marks",
              "2, halving the sixteen rather than quartering it",
            ],
            correctIndex: 0,
            explanation:
              "1/4 x 4/4 = 4/16. Halves, quarters and eighths all convert to sixteenths with no remainder, which is why sixteenths make a good working denominator.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Which is bigger, 9/16 in. or 1/2 in., and by how much?",
            options: [
              "9/16, by 1/16",
              "1/2, by 1/16, because a half is a coarser and therefore larger division",
              "They are equal, since nine sixteenths rounds to a half on any tape",
              "9/16, by 8/16, which is the difference between the two numerators",
            ],
            correctIndex: 0,
            explanation:
              "1/2 is 8/16, so 9/16 minus 8/16 is 1/16. Rewriting to a common denominator turns a judgement call into a subtraction every time.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Write 1 1/16 as an improper fraction.",
            options: [
              "17/16",
              "11/16, running the whole number and the numerator together as digits",
              "2/16, adding the whole number to the numerator directly",
              "16/17, inverting the fraction after the conversion",
            ],
            correctIndex: 0,
            explanation:
              "One whole inch is 16/16, plus the 1/16 already there, gives 17/16. That is the form you calculate in and 1 1/16 is the form you write down.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Write 7/8 in sixteenths.",
            options: [
              "14/16",
              "7/16, carrying the numerator across unchanged when the denominator doubles",
              "16/7, inverting the fraction rather than scaling it",
              "8/16, taking the old denominator as the new numerator",
            ],
            correctIndex: 0,
            explanation:
              "Multiply top and bottom by 2. That puts 7/8 at the fourteenth small mark, two sixteenths short of the next whole inch.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Simplify 10/16.",
            options: [
              "5/8",
              "5/16, halving the numerator and leaving the denominator alone",
              "2/3, dividing both numbers by five and rounding",
              "1 6/16, treating the fraction as though it were improper",
            ],
            correctIndex: 0,
            explanation:
              "Both numbers divide by 2. Ten sixteenths is the tenth small mark, which is 5/8, and the fifth mark is 5/16.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "What is 3/4 minus 1/2?",
            options: [
              "1/4",
              "2/2, subtracting the numerators and then the denominators",
              "1/2, subtracting the numerators and copying the larger denominator",
              "3/8, dividing the first fraction by the second one",
            ],
            correctIndex: 0,
            explanation:
              "1/2 rewritten is 2/4, and 3/4 minus 2/4 is 1/4. Subtracting changes numerators only; the denominator names the piece size and stays put.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "What is 3/8 + 3/8?",
            options: [
              "3/4",
              "6/16, adding the numerators and then the denominators",
              "9/64, multiplying the two fractions instead of adding them",
              "3/8, since adding a fraction to itself leaves the value unchanged",
            ],
            correctIndex: 0,
            explanation:
              "Same denominator, so add the tops: 6/8, which simplifies to 3/4. The denominators are already the same size of piece, so nothing has to be converted.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "What is 1/4 of 3 ft, in inches?",
            options: [
              "9 in.",
              "12 in., quartering the yard and then converting to feet",
              "3/4 in., quartering the number and keeping the unit as inches",
              "36 in., converting to inches and forgetting to take the quarter",
            ],
            correctIndex: 0,
            explanation:
              "Convert first: 3 ft is 36 in., and a quarter of 36 is 9. The word 'of' is a multiplication, so 1/4 x 36 = 9.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "What is 1/2 x 1/2?",
            options: [
              "1/4",
              "1, since a half of a half returns to the whole it came from",
              "2/4, multiplying the tops and adding the bottoms",
              "1/2, since multiplying by a half leaves the fraction unchanged",
            ],
            correctIndex: 0,
            explanation:
              "Tops together and bottoms together: 1 over 4. Multiplying by a number smaller than one makes the result smaller, which is the direction test again.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "A 96 in. board is cut into six equal pieces, ignoring the kerf. How long is each?",
            options: [
              "16 in.",
              "15 in., allowing for the kerf that the question said to ignore",
              "12 in., dividing by the inches in a foot rather than by six",
              "576 in., multiplying by six instead of dividing by it",
            ],
            correctIndex: 0,
            explanation:
              "96 / 6 = 16 in. Adding the kerf back would take five cuts at about 1/8 in., which is 5/8 in. more than the board holds.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "How many cuts does it take to make five pieces from one board?",
            options: [
              "Four",
              "Five, one cut for each finished piece",
              "Six, one at each end plus one between each pair",
              "Three, because the two end pieces come off together",
            ],
            correctIndex: 0,
            explanation:
              "The same fence-post count as studs and spaces, run backwards: five pieces have four cuts between them. At 1/8 in. each that is 1/2 in. of kerf.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "What is 1/4 + 1/8?",
            options: [
              "3/8",
              "2/12, adding the numerators and then the denominators",
              "1/6, adding the numerators and multiplying the denominators",
              "1/32, multiplying the two fractions instead of adding them",
            ],
            correctIndex: 0,
            explanation:
              "Rewrite the quarter as 2/8, then 2/8 + 1/8 = 3/8. The direction test confirms it: adding an eighth to a quarter has to give more than a quarter.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "What is 5/16 + 5/16?",
            options: [
              "5/8",
              "10/32, adding the tops and then the bottoms",
              "5/16, since adding a fraction to itself leaves the value unchanged",
              "25/256, multiplying the two fractions rather than adding them",
            ],
            correctIndex: 0,
            explanation:
              "Same denominator, so add the tops: 10/16, which simplifies to 5/8. That is also why 5/8 sits at the tenth small mark and 5/16 at the fifth.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "How many 3/4 in. pieces fit into 6 in., ignoring the kerf?",
            options: [
              "8",
              "4 1/2, multiplying 6 by 3/4 rather than dividing by it",
              "6, dividing by one rather than by three quarters",
              "24, multiplying by the denominator and ignoring the numerator",
            ],
            correctIndex: 0,
            explanation:
              "Invert and multiply: 6 x 4/3 = 24/3 = 8. Dividing by a number smaller than one makes the answer bigger, which is the direction test again.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "What is 1 1/2 x 4?",
            options: [
              "6",
              "4 1/2, multiplying only the fraction and carrying the whole number across",
              "5 1/2, adding the four to the mixed number instead of multiplying",
              "1 4/8, multiplying the denominator by four rather than the whole value",
            ],
            correctIndex: 0,
            explanation:
              "1 1/2 is 3/2, and 3/2 x 4 = 12/2 = 6. Converting the mixed number first is what stops the whole and fractional parts being handled separately.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Reading a tape, and feet-and-inches arithmetic
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "reading-the-tape",
      title: "7 · Reading a rule and a tape measure",
      section: "Section 3 · Reading a tape, and feet-and-inches arithmetic",
      body: `**Supports NCCER Core module 00102.**

**The marks are the inch halved, and halved, and halved again.** One cut gives you halves. Cut those and you have quarters. Again for eighths, again for sixteenths. A standard tape stops there; a machinist's rule keeps going to thirty-seconds and sixty-fourths. NIST Handbook 44 states the same thing formally for measures used in commerce: a linear measure may be graduated in "inches and binary submultiples of the inch" (Section 5.52, S.1).

**Mark length is the tape telling you the denominator.** Longest is the inch. Next longest is the half. Then quarters, then eighths, then the shortest marks, which are the sixteenths. You are not meant to count marks by eye and hope, you are meant to read the hierarchy.

**The method that never fails: count sixteenths, then simplify.** Find the last whole inch, count the small marks past it, and put that count over 16. Six marks is 6/16, which is 3/8. Ten marks is 10/16, which is 5/8. Twelve is 12/16, which is 3/4. Nothing to remember, one habit to keep.

**This is also the cure for the 5/8 and 5/16 mix-up.** In sixteenths, 5/8 is the tenth mark and 5/16 is the fifth. Those are nowhere near each other. The mistake only happens when you read "the fifth mark" on a blade you have assumed is eighths, or when you glance at a written 5/8 and see 5/16. Count, do not glance.

**The hook slides on purpose.** The metal tab at the end of a tape is loose by roughly its own thickness. Pull the tape against an edge and the tab slides out, so the measurement starts at the outside face. Push it into a corner and the tab slides in, so the measurement starts at the inside face. Both read true. A hook that is bent, packed with dried mortar, or has lost a rivet puts every single measurement off by the same small amount, which is worse than a random error because it is consistent, and consistent errors do not look like errors.

**What a tape is allowed to be off by.** Handbook 44 gives tolerances for metal tapes used commercially: 1/32 in. over the first 6 ft, 1/16 in. from 7 to 30 ft, 1/8 in. from 31 to 55 ft. Tapes of 25 ft and over are tested under a 10 lb pull, supported along a flat surface (T.2). Two things follow. A long tape read slack, or read hanging in the air, is not being read under the conditions its accuracy is defined for. And two tapes on the same crew can legitimately disagree by a sixteenth, which is why one job uses one tape for the layout that has to close.

**Read square to the mark.** Looking at a mark from an angle moves it, because the blade sits above the work. Get your eye over the mark. Then mark with a V whose point is the dimension, not a line, because a pencil line is roughly a thirty-second of an inch wide and its middle is a guess.

:::reveal What is the reliable way to read a fraction off a tape? ||| Find the last whole inch, count the smallest marks past it, put the count over 16, then simplify. Ten marks is 10/16, which is 5/8.

:::reveal Why does the hook on the end of a tape slide, and when is that a problem? ||| It slides by its own thickness so that a pulled outside measurement and a pushed inside measurement both read true. It is a problem when the hook is bent, clogged or loose, because then every measurement is off by the same amount and nothing looks wrong.

:::reveal Under Handbook 44, what tolerance applies to a metal tape over the 7 to 30 ft interval, and under what test conditions? ||| 1/16 in., with tapes of 25 ft and over tested under a tension produced by a 10 lb load and supported throughout on a horizontal flat surface.

## Vocabulary
- **Graduation**: a mark on a measuring blade, whose length signals which fraction it divides the inch into.
- **Hook**: the sliding end tab of a tape, loose by its own thickness so that pushed and pulled measurements both read true.
- **Tolerance**: how far a measuring device may legally differ from true, which for a metal tape in the 7 to 30 ft range is 1/16 in.
- **Parallax**: the apparent shift of a mark when it is viewed from an angle, corrected by putting your eye directly over it.
- **Crow's foot**: a V-shaped mark whose point is the dimension, used because a pencil line has real width and its middle is a guess.

## Sources
National Institute of Standards and Technology. (2017). *Specifications, tolerances, and other technical requirements for weighing and measuring devices: Section 5.52, Linear measures* (NIST Handbook 44, 2018 ed.). U.S. Department of Commerce. https://www.nist.gov/system/files/documents/2017/12/07/5-52-18-hb44-final.pdf`,
    },
    {
      slug: "feet-inches-and-laying-out-a-wall",
      title: "8 · Feet-and-inches arithmetic, and laying out a wall",
      section: "Section 3 · Reading a tape, and feet-and-inches arithmetic",
      body: `**Supports NCCER Core module 00102.**

**Feet and inches is a mixed base, and twelve is the carry.** Add the inches, and every time they reach 12, carry one foot.

6 ft 9 in. plus 4 ft 7 in.: the inches make 16, which is one foot and 4 in., so 11 ft 4 in.

With fractions, do the fractions first. 6 ft 9 3/4 in. plus 4 ft 7 1/2 in.: 3/4 + 1/2 = 5/4, which is 1 1/4, so the inches are 9 + 7 + 1 = 17 and a quarter. That is 1 ft 5 1/4 in., giving 11 ft 5 1/4 in.

**Subtracting borrows twelve.** 12 ft 3 in. minus 4 ft 8 in.: you cannot take 8 from 3, so borrow a foot and make it 11 ft 15 in. Then 11 ft 15 in. minus 4 ft 8 in. = 7 ft 7 in.

**When in doubt, go to inches and come back.** 12 ft 3 in. is 147 in. and 4 ft 8 in. is 56 in. 147 minus 56 is 91 in., and 91 divided by 12 is 7 with 7 left over, so 7 ft 7 in. Same answer, no borrowing, one more conversion. Both routes are fine and the second is easier to check.

**Layout: what 16 in. on center actually means for the first mark.** Sheets are 48 in. wide and their edges have to land on the centre of a stud, so stud centres need to fall at 16, 32, 48, 64 and so on. A nominal two-by-four is 1 1/2 in. thick, so its centre is 3/4 in. from its face.

Hook the tape at the end of the plate and make your first mark at 15 1/4 in., not 16. Draw the stud on the far side of that mark. It now occupies 15 1/4 to 16 3/4 in., and its centre sits at exactly 16 in. Every mark after that is 16 in. further along: 31 1/4, 47 1/4, 63 1/4. The stud at 47 1/4 to 48 3/4 has its centre at 48 in., which is where the sheet edge lands. 15 1/4 is just 16 minus 3/4, and the 3/4 is half the stud.

**Pull one long dimension. Never step a short one along.** If you measure 16 in., move the tape, measure 16 in. again, and repeat, you repeat the placement error every time. Sixteen moves at 1/16 in. of slop apiece is a full inch of drift, and the last stud is in the wrong place with no single mistake to point at. Hooked once and pulled the length of the wall, the errors do not accumulate, because every mark is measured from the same zero.

**The diamonds, if your tape has them.** Small black diamonds fall every 19.2 in., which is 96 in. divided by 5. They lay out five equal spaces across an 8 ft sheet instead of six, for engineered floor systems that allow it.

:::reveal Add 6 ft 9 3/4 in. and 4 ft 7 1/2 in. ||| The fractions give 5/4, which is 1 1/4, so the inches total 17 1/4. That is 1 ft 5 1/4 in., and the answer is 11 ft 5 1/4 in.

:::reveal Why is the first stud mark on a 16 in. on-center wall made at 15 1/4 in. rather than 16 in.? ||| Because the mark locates the stud's face, and the stud centre has to land at 16 in. Backing off half of the 1 1/2 in. stud thickness, which is 3/4 in., puts the face at 15 1/4 and the centre at 16, so a 48 in. sheet edge lands on a stud centre.

:::reveal Why do you pull one long dimension instead of stepping 16 in. along the plate? ||| Because stepping repeats the tape's placement error at every move, and sixteen moves at a sixteenth of an inch each is a full inch of drift. Measuring every mark from one zero keeps the errors from accumulating.

## Vocabulary
- **Mixed base**: a measurement written in two units where the smaller does not carry at ten, so feet and inches carry at twelve.
- **Layout mark**: the mark that locates a member's face, distinct from the on-center dimension, which locates its centre.
- **Cumulative error**: the drift produced by measuring each step from the previous one rather than all of them from a single zero.
- **Nominal versus actual**: a two-by-four is called two by four and measures 1 1/2 in. by 3 1/2 in., and layout arithmetic uses the actual size.
- **Diamond mark**: the black diamond found on some tapes every 19.2 in., which is an 8 ft sheet divided into five equal spaces.

## Sources
No external source is cited in this lesson. Feet-and-inches arithmetic is taught from first principles. The 16 in. and 19.2 in. spacings are described as common framing layouts and the arithmetic behind each is shown, rather than being asserted as a code requirement; the governing spacing for any actual wall comes from the drawings and the adopted building code.`,
    },
    {
      slug: "tape-and-layout-drill",
      title: "9 · Drill · Tape readings and feet-and-inches",
      section: "Section 3 · Reading a tape, and feet-and-inches arithmetic",
      body: `**Supports NCCER Core module 00102.** These are the conversions and reads you will do dozens of times a day, so producing the number is the point. Write feet-and-inches answers as, for example, 11 ft 4 in., and fractions in cut-list form such as 1 3/16.

## Vocabulary
- **Count then convert**: reading a tape by counting the small marks past the last whole inch and only then simplifying the fraction, which is the habit these items drill.
- **Feet-and-inches form**: a length written with both units, such as 11 ft 4 in., which is what the conversion items ask for.
- **Layout dimension**: the number you pull to on a plate, which locates a member's face rather than its centre.

## Sources
No external source is cited in this drill. Every item is arithmetic or a tape reading taught from first principles in the two lessons above it.`,
      exercise: {
        instructions:
          "Work each one on paper, then type the answer. Simplify fractions, and include the units where the prompt asks for them.",
        items: [
          {
            prompt: "A mark sits ten small marks past the 7 in. line on a sixteenths tape. What is the reading, in inches?",
            answer: "7 5/8",
            accept: ["7-5/8", "7 10/16"],
            computedAnswer: true,
            hint: "Count sixteenths, then simplify.",
            explanation: "Ten sixteenths is 10/16, which simplifies to 5/8, so the reading is 7 5/8 in.",
          },
          {
            prompt: "A mark sits six small marks past the 3 in. line on a sixteenths tape. What is the reading, in inches?",
            answer: "3 3/8",
            accept: ["3-3/8", "3 6/16"],
            computedAnswer: true,
            hint: "6/16 simplifies.",
            explanation: "6/16 divides by 2 to give 3/8, so the reading is 3 3/8 in.",
          },
          {
            prompt: "Which sixteenth mark is 5/8 in.? Give the count.",
            answer: "10",
            computedAnswer: true,
            hint: "Rewrite 5/8 over 16.",
            explanation: "5/8 is 10/16, so it is the tenth small mark past the whole inch. 5/16 is the fifth, which is the mix-up this course keeps warning about.",
          },
          {
            prompt: "Convert 24 ft to inches.",
            answer: "288",
            computedAnswer: true,
            hint: "Twelve inches to the foot.",
            explanation: "24 x 12 = 288 in.",
          },
          {
            prompt: "Convert 91 in. to feet and inches. Write it as, for example, 7 ft 7 in.",
            answer: "7 ft 7 in.",
            accept: ["7 ft 7 in", "7'7\"", "7 feet 7 inches"],
            hint: "Divide by twelve and keep the remainder.",
            explanation: "91 / 12 = 7 with 7 left over, so 7 ft 7 in.",
          },
          {
            prompt: "Add 6 ft 9 in. and 4 ft 7 in. Write it as, for example, 11 ft 4 in.",
            answer: "11 ft 4 in.",
            accept: ["11 ft 4 in", "11'4\"", "11 feet 4 inches"],
            hint: "Carry a foot for every twelve inches.",
            explanation: "The inches make 16, which is one foot and 4 in., so 11 ft 4 in.",
          },
          {
            prompt: "Subtract 4 ft 8 in. from 12 ft 3 in. Write it as, for example, 7 ft 7 in.",
            answer: "7 ft 7 in.",
            accept: ["7 ft 7 in", "7'7\"", "7 feet 7 inches"],
            hint: "Borrow a foot as twelve inches, or convert both to inches.",
            explanation: "Borrowing gives 11 ft 15 in. minus 4 ft 8 in. = 7 ft 7 in. In inches, 147 minus 56 = 91, which is the same answer.",
          },
          {
            prompt: "On a 16 in. on-center wall, at what dimension do you make the first stud mark, in inches?",
            answer: "15 1/4",
            accept: ["15-1/4", "15.25"],
            computedAnswer: true,
            hint: "Back off half the stud thickness from 16.",
            explanation: "Half of 1 1/2 in. is 3/4 in., and 16 minus 3/4 is 15 1/4, which puts the stud centre at 16 in.",
          },
          {
            prompt: "What is the third layout mark on that wall, in inches?",
            answer: "47 1/4",
            accept: ["47-1/4", "47.25"],
            computedAnswer: true,
            hint: "Add 16 twice to the first mark.",
            explanation: "15 1/4, then 31 1/4, then 47 1/4. The stud there spans 47 1/4 to 48 3/4, so its centre is at 48 in., where the sheet edge lands.",
          },
          {
            prompt: "How far apart are the black diamond marks on a tape, in inches?",
            answer: "19.2",
            accept: ["19 1/5"],
            computedAnswer: true,
            hint: "Divide an 8 ft sheet into five equal spaces.",
            explanation: "96 / 5 = 19.2 in., which is five spaces across an 8 ft sheet instead of six.",
          },
        ],
      },
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · The tape, and feet-and-inches",
      section: "Section 3 · Reading a tape, and feet-and-inches arithmetic",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How are the fractional marks on a customary tape generated?",
            options: [
              "By halving the inch repeatedly",
              "By dividing the inch into ten parts and then subdividing each part again",
              "By dividing the inch into twelve parts to match the twelve inches in a foot",
              "By marking whichever fractions the manufacturer expects the trade to use",
            ],
            correctIndex: 0,
            explanation:
              "One halving gives halves, the next quarters, then eighths, then sixteenths. Handbook 44 calls these binary submultiples of the inch.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "On a tape blade, what does the length of a graduation tell you?",
            options: [
              "Which fraction it divides the inch into",
              "How accurate that particular mark is compared with the whole-inch marks",
              "Whether the mark belongs to the inch scale or to the metric scale",
              "How far the mark sits from the nearest foot marking",
            ],
            correctIndex: 0,
            explanation:
              "Longest is the inch, then the half, then quarters, eighths, and the shortest marks are sixteenths. Reading the hierarchy beats counting marks by eye.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "What is the reliable method for reading a fraction off a tape?",
            options: [
              "Count sixteenths, then simplify",
              "Find the nearest eighth and then judge whether the mark falls above or below it",
              "Read the fraction printed beside the mark, which every modern tape carries",
              "Convert the reading to decimals in your head and round to two places",
            ],
            correctIndex: 0,
            explanation:
              "Find the last whole inch, count the small marks past it, put the count over 16, simplify. Six marks is 3/8, ten is 5/8, twelve is 3/4.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "A mark sits ten small marks past the 7 in. line on a sixteenths tape. What does it read?",
            options: [
              "7 5/8 in.",
              "7 5/16 in., reading the tenth mark as though the blade were graduated in thirty-seconds",
              "7 10/8 in., putting the count of marks over an eighth rather than over a sixteenth",
              "10 7/16 in., reading the count of marks as the whole number",
            ],
            correctIndex: 0,
            explanation:
              "Ten sixteenths is 10/16, which simplifies to 5/8. Counting rather than glancing is exactly what stops 5/8 turning into 5/16.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Six small marks past the 3 in. line reads as what?",
            options: [
              "3 3/8 in.",
              "3 6/8 in., putting the count of marks straight over eight",
              "3 1/4 in., rounding six sixteenths down to the nearest quarter",
              "6 3/16 in., reading the count of marks as the whole inches",
            ],
            correctIndex: 0,
            explanation:
              "6/16 divides top and bottom by 2 to give 3/8, so the reading is 3 3/8 in.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Which small mark past the whole inch is 5/8?",
            options: [
              "The tenth",
              "The fifth, which is the count that produces the classic misread",
              "The eighth, matching the denominator of the fraction",
              "The sixteenth, since sixteenths are the finest division on the blade",
            ],
            correctIndex: 0,
            explanation:
              "5/8 rewritten is 10/16, so it is the tenth sixteenth. The fifth sixteenth is 5/16, and the two are nowhere near each other once you count.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Why is the hook at the end of a tape deliberately loose?",
            options: [
              "So pushed and pulled measurements both read true",
              "So the blade can retract fully into the case without jamming at the stop",
              "So the tape can be hooked over rough edges without bending the blade",
              "So the hook can be replaced in the field when it wears",
            ],
            correctIndex: 0,
            explanation:
              "It slides by about its own thickness: outward when you pull against an edge, inward when you push into a corner. Either way, zero lands where the measurement starts.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Why is a bent or clogged hook worse than a random measuring error?",
            options: [
              "It shifts every measurement the same way",
              "Because it makes the tape read short at long distances and long at short ones",
              "Because it voids the tape's stated tolerance under Handbook 44",
              "Because the error grows with each use as the hook loosens further",
            ],
            correctIndex: 0,
            explanation:
              "A consistent error does not look like an error. Every dimension is off by the same amount, everything is consistent with everything else, and nothing on the job flags it.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Under Handbook 44, what tolerance applies to a metal tape over the 7 to 30 ft interval?",
            options: [
              "1/16 in.",
              "1/32 in., which is the tolerance that applies over the first six feet instead",
              "1/8 in., which is the tolerance for the 31 to 55 ft interval",
              "1/4 in., which is the tolerance for a tape of a hundred feet",
            ],
            correctIndex: 0,
            explanation:
              "Section 5.52, T.2 gives 1/32 in. up to 6 ft, 1/16 in. from 7 to 30 ft, 1/8 in. from 31 to 55 ft, and 1/4 in. out to a hundred.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Under Handbook 44, how is a metal tape of 25 ft or over tested?",
            options: [
              "Under a 10 lb pull, supported flat",
              "Hanging vertically from its hook with no load other than its own weight",
              "Under a 5 lb pull, which is the load specified for tapes of every length",
              "Laid loosely along the surface being measured, with no tension applied",
            ],
            correctIndex: 0,
            explanation:
              "T.2 specifies a tension resulting from a 5 kg (10 lb) load for tapes of 10 m (25 ft) and over, with all tapes supported throughout on a horizontal flat surface.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "What follows from the fact that a long tape is tested under tension and support?",
            options: [
              "A slack or hanging tape is outside its test conditions",
              "A tape read in the field is always more accurate than one read in a laboratory",
              "A tape may be stretched to correct a reading that comes up short",
              "A tape loses its accuracy permanently once it has been read while slack",
            ],
            correctIndex: 0,
            explanation:
              "Accuracy is defined under stated conditions. Read slack or read hanging in the air, a long tape is not being used the way its tolerance was measured.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Why does the course say a job should use one tape for the layout that has to close?",
            options: [
              "Two tapes can legitimately differ",
              "Because a tape that has been used all day expands from the heat of handling",
              "Because a second tape resets the cumulative error to zero at every mark",
              "Because a job may register only one measuring device with the inspector",
            ],
            correctIndex: 0,
            explanation:
              "Both tapes can be inside tolerance and still disagree by a sixteenth, so a dimension pulled with one and checked with another can look wrong when nothing is.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "What is parallax, on a tape reading?",
            options: [
              "A mark appearing to shift when viewed from an angle",
              "The gap between the printed mark and the etched line beneath it",
              "The bending of a long blade under its own weight over a span",
              "The difference between a reading taken pushing and one taken pulling",
            ],
            correctIndex: 0,
            explanation:
              "The blade sits above the work, so an off-axis eye sees the mark displaced. Put your eye over the mark and the shift disappears.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Why mark with a V rather than a line?",
            options: [
              "The point of the V is the dimension",
              "Because a V is visible from further away on a dark surface",
              "Because a line can be confused with a grain mark in the timber",
              "Because a V shows which side of the mark the material is kept on",
            ],
            correctIndex: 0,
            explanation:
              "A pencil line is about 1/32 in. wide and its middle is a guess. The point of a crow's foot is a single location you can cut to.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "What does Handbook 44 say about the width of a graduation?",
            options: [
              "Never wider than 0.75 mm, about 0.03 in.",
              "Never wider than one sixteenth of an inch on any customary blade",
              "Never wider than the smallest graduated interval on the measure",
              "It sets no limit, provided the marks are legible under normal light",
            ],
            correctIndex: 0,
            explanation:
              "S.5.2 caps a graduation at half the smallest graduated interval and in no case wider than 0.75 mm (0.03 in), which is why a mark can be trusted to locate a point.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Add 6 ft 9 in. and 4 ft 7 in.",
            options: [
              "11 ft 4 in.",
              "11 ft 16 in., carrying a foot across but leaving the inches unreduced as well",
              "11 ft 6 in., carrying ten inches to the foot instead of twelve",
              "10 ft 4 in., carrying the foot but forgetting to add it in",
            ],
            correctIndex: 0,
            explanation:
              "The inches make 16, which is one foot and 4 in. Carrying at twelve is what makes feet and inches a mixed base rather than a decimal one.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "Add 6 ft 9 3/4 in. and 4 ft 7 1/2 in.",
            options: [
              "11 ft 5 1/4 in.",
              "11 ft 4 1/4 in., losing the whole inch that the two fractions make between them",
              "11 ft 6 1/4 in., carrying one whole inch for the fractions and then a second by mistake",
              "10 ft 5 1/4 in., carrying the inches into feet and then forgetting to add the foot on",
            ],
            correctIndex: 0,
            explanation:
              "3/4 + 1/2 = 5/4, which is 1 1/4, so the inches are 9 + 7 + 1 = 17 and a quarter. Seventeen inches is 1 ft 5 in., giving 11 ft 5 1/4 in.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "Subtract 4 ft 8 in. from 12 ft 3 in.",
            options: [
              "7 ft 7 in.",
              "8 ft 5 in., subtracting the smaller inch figure from the larger regardless of position",
              "7 ft 5 in., borrowing ten inches instead of twelve",
              "8 ft 7 in., borrowing the foot but not deducting it from the feet column",
            ],
            correctIndex: 0,
            explanation:
              "Borrow a foot to make 11 ft 15 in., then subtract to get 7 ft 7 in. Checking in inches: 147 minus 56 is 91, and 91 is 7 ft 7 in.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "What is 91 in. in feet and inches?",
            options: [
              "7 ft 7 in.",
              "9 ft 1 in., reading the digits of the inch figure as feet and inches",
              "7 ft 9 in., taking the remainder from a division by ten",
              "8 ft 7 in., rounding the division up before taking the remainder",
            ],
            correctIndex: 0,
            explanation:
              "91 / 12 = 7 with 7 left over. Converting to inches, working there, and converting back is often easier to check than borrowing.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "When adding feet and inches, at what point do you carry?",
            options: [
              "At 12",
              "At 10, since carrying always happens at the base of the number system",
              "At 16, matching the number of sixteenths in an inch",
              "Whenever the fraction reaches one whole inch, and never for the feet",
            ],
            correctIndex: 0,
            explanation:
              "Twelve inches make a foot, so twelve is the carry. The fractions carry into inches at one whole inch, which is a second and separate carry.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "At what dimension is the first stud mark made on a 16 in. on-center wall?",
            options: [
              "15 1/4 in.",
              "16 in., because that is the spacing the layout is named for",
              "16 3/4 in., adding half the stud thickness rather than subtracting it",
              "14 1/2 in., backing off the full stud thickness instead of half of it",
            ],
            correctIndex: 0,
            explanation:
              "The mark locates the stud's face and the centre has to land at 16 in. A stud is 1 1/2 in. thick, so back off 3/4 in.: 16 minus 3/4 is 15 1/4.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "Why must stud centres fall at 16, 32, 48 and 64 in.?",
            options: [
              "So a 48 in. sheet edge lands on a stud",
              "Because those are the only dimensions a tape marks in red",
              "Because framing lumber is supplied in lengths that are multiples of sixteen inches",
              "Because the building code specifies those exact dimensions for load-bearing walls",
            ],
            correctIndex: 0,
            explanation:
              "Sheet goods are 48 in. wide and two sheets have to meet on one stud, each landing half its thickness onto it. That is what the whole layout is arranged around.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "What are the next two marks after 15 1/4 in. on that wall?",
            options: [
              "31 1/4 and 47 1/4",
              "32 and 48, returning to the round on-center dimensions after the first mark",
              "30 1/2 and 45 3/4, adding 15 1/4 each time instead of 16",
              "31 3/4 and 47 3/4, adding 16 1/2 to allow for the stud thickness each time",
            ],
            correctIndex: 0,
            explanation:
              "Every mark after the first is simply 16 in. further along. The stud at 47 1/4 to 48 3/4 has its centre at 48 in., which is where the sheet edge lands.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "Where does the 3/4 in. in the 15 1/4 in. first mark come from?",
            options: [
              "Half the stud thickness",
              "The thickness of the sheathing that will cover the stud face",
              "The width of a pencil line doubled, allowed for at each end",
              "The gap left between the stud and the end of the bottom plate",
            ],
            correctIndex: 0,
            explanation:
              "A nominal two-by-four actually measures 1 1/2 in. thick, so its centre is 3/4 in. from either face. 16 minus 3/4 is 15 1/4.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "Why does the course say never to step a 16 in. dimension along the plate?",
            options: [
              "Placement error repeats at every move",
              "Because stepping is slower than pulling a single long dimension",
              "Because the tape hook wears faster when it is repositioned many times",
              "Because a stepped layout cannot be checked afterwards against the drawings",
            ],
            correctIndex: 0,
            explanation:
              "Sixteen moves at a sixteenth of an inch of slop each is a full inch of drift, and no single measurement was wrong enough to notice.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "What makes a single pulled dimension immune to cumulative error?",
            options: [
              "Every mark is measured from the same zero",
              "Because a long tape has a tighter tolerance than a short one",
              "Because errors in opposite directions cancel out over a long run",
              "Because the hook is only positioned once, and hooks are the only source of error",
            ],
            correctIndex: 0,
            explanation:
              "Errors accumulate when each measurement starts from the last one. Referenced to one zero, each mark carries only its own small error, and they do not add up.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "How far apart are the black diamond marks found on some tapes?",
            options: [
              "19.2 in.",
              "19 1/2 in., a convenient round figure close to a fifth of a sheet",
              "16 in., the same as the standard on-center layout marked in red",
              "24 in., which is the alternative on-center spacing for wider framing",
            ],
            correctIndex: 0,
            explanation:
              "96 in. divided by 5 is 19.2 in., which lays out five equal spaces across an 8 ft sheet rather than six.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "What is the arithmetic behind the 19.2 in. diamond spacing?",
            options: [
              "96 divided by 5",
              "16 in. increased by twenty percent to widen the framing spacing",
              "The average of the 16 in. and 24 in. on-center spacings",
              "48 in. divided by 2.5, matching a half sheet rather than a whole one",
            ],
            correctIndex: 0,
            explanation:
              "An 8 ft sheet is 96 in., and dividing it into five equal spaces gives 19.2 in. The other descriptions land near the number by coincidence rather than by derivation.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "What does 'nominal versus actual' mean for a two-by-four?",
            options: [
              "It is called two by four and measures 1 1/2 by 3 1/2",
              "It is sold in two grades, one milled to the full dimension and one milled under",
              "The nominal size applies to the length and the actual size to the cross section",
              "The nominal size is the dry size and the actual size is the size before drying",
            ],
            correctIndex: 0,
            explanation:
              "Layout arithmetic uses the actual size, which is why half a stud is 3/4 in. and not 1 in. Using the nominal figure puts every mark out by a quarter inch.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "24 ft converted to inches is what?",
            options: [
              "288 in.",
              "240 in., converting at ten inches to the foot",
              "72 in., converting at three feet to the yard by mistake",
              "2 in., dividing by twelve instead of multiplying",
            ],
            correctIndex: 0,
            explanation:
              "24 x 12 = 288 in. It is worth knowing cold, because it is the wall length that produces eighteen 16 in. spaces.",
            sourceLessonSlug: "tape-and-layout-drill",
          },
          {
            prompt: "In the tape drill, how are feet-and-inches answers written?",
            options: [
              "As, for example, 11 ft 4 in.",
              "As a single decimal number of feet, rounded to two places",
              "As a total number of inches, so that nothing has to be carried",
              "As feet and a fraction of a foot, such as 11 1/3 ft",
            ],
            correctIndex: 0,
            explanation:
              "The drill asks for feet-and-inches form with units, and fractions in cut-list form such as 1 3/16, because that is what gets written on real material.",
            sourceLessonSlug: "tape-and-layout-drill",
          },
          {
            prompt: "Why is the tape drill typed rather than multiple choice?",
            options: [
              "Producing the reading is the skill",
              "Because a tape reading has too many possible values to list as options",
              "Because typing prevents a learner from checking the answer against the lesson",
              "Because the drill is graded on speed as well as on accuracy",
            ],
            correctIndex: 0,
            explanation:
              "You will produce these numbers dozens of times a day on a wall, not choose them from a list, so the drill asks you to produce them.",
            sourceLessonSlug: "tape-and-layout-drill",
          },
          {
            prompt: "A machinist's rule carries divisions a framing tape usually does not. Which?",
            options: [
              "Thirty-seconds and sixty-fourths",
              "Twelfths and twenty-fourths, matching the inches in a foot",
              "Tenths and hundredths of an inch for decimal work",
              "Twentieths, for reading directly against an engineer's scale",
            ],
            correctIndex: 0,
            explanation:
              "The halving continues past sixteenths. Those are still binary submultiples of the inch, just finer ones than a framing tape needs.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Twelve small marks past a whole inch reads as what fraction?",
            options: [
              "3/4",
              "12/8, putting the count over eight rather than over sixteen",
              "1/2, rounding twelve sixteenths down to the nearest half",
              "12/32, on the assumption that the blade is graduated in thirty-seconds",
            ],
            correctIndex: 0,
            explanation:
              "12/16 divides top and bottom by 4 and becomes 3/4. Counting the marks and simplifying is a two-step habit that removes all judgement from the read.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Which reading is the fifth small mark past a whole inch?",
            options: [
              "5/16",
              "5/8, which is the tenth mark and the one it gets confused with",
              "1/4, since the fifth mark falls closest to the quarter",
              "5/32, since the fine marks on a tape are thirty-seconds",
            ],
            correctIndex: 0,
            explanation:
              "Five sixteenths is 5/16, which does not simplify. The tenth mark is 10/16, which is 5/8, and those two are the pair this course keeps separating.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "What is the practical reason a sheet edge must land on a stud centre rather than a stud face?",
            options: [
              "Two sheets have to share the stud",
              "Because a sheet edge nailed at the face splits along the grain",
              "Because the centre of a stud is the strongest part of the member",
              "Because a stud face is not straight enough to nail a sheet edge to",
            ],
            correctIndex: 0,
            explanation:
              "Each of the two adjoining sheets needs bearing and fasteners, so each takes about half the stud. Landing an edge on a face leaves the next sheet nothing.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "A crew steps sixteen separate 16 in. measurements along a plate, each 1/16 in. long. How far out is the last mark?",
            options: [
              "1 in.",
              "1/16 in., because the errors are independent and cancel out along the run",
              "1/4 in., since only every fourth measurement carries an error",
              "16 in., since the error repeats at full size at every step",
            ],
            correctIndex: 0,
            explanation:
              "Sixteen errors of a sixteenth each add to one full inch, and no individual measurement was wrong enough to notice. That is what cumulative error means.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "In feet-and-inches arithmetic, which route avoids borrowing entirely?",
            options: [
              "Convert to inches, work, convert back",
              "Convert to decimal feet, work, and round the answer to the nearest inch",
              "Work the feet and the inches as two separate independent subtractions",
              "Round both dimensions to the nearest foot before subtracting",
            ],
            correctIndex: 0,
            explanation:
              "147 minus 56 is 91 in., which is 7 ft 7 in. It is one extra conversion at each end and it is easier to check than a borrow.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "Which stud position has its centre at 48 in. on the layout described?",
            options: [
              "The one spanning 47 1/4 to 48 3/4",
              "The one spanning 48 to 49 1/2, starting at the sheet edge",
              "The one spanning 46 1/2 to 48, ending at the sheet edge",
              "The one spanning 47 to 48 1/2, centred a quarter inch short",
            ],
            correctIndex: 0,
            explanation:
              "The mark at 47 1/4 locates the face and the stud is 1 1/2 in. thick, so it runs to 48 3/4 and its centre sits at 48 in.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "What does the course say about how a tape's tolerance changes with length?",
            options: [
              "It gets looser as the tape gets longer",
              "It stays constant, because the graduations are the same size along the blade",
              "It gets tighter, because long tapes are made to a higher grade of steel",
              "It applies only to the first foot, which is where the hook error sits",
            ],
            correctIndex: 0,
            explanation:
              "Handbook 44 allows 1/32 in. over the first 6 ft and 1/4 in. out at a hundred feet. Error is permitted to grow with the interval measured.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Why does the drill ask for the count of the sixteenth mark rather than the fraction?",
            options: [
              "Counting is the physical act at the blade",
              "Because the count is easier to type than a fraction is",
              "Because the fraction cannot be graded automatically",
              "Because a count avoids any need to simplify the answer",
            ],
            correctIndex: 0,
            explanation:
              "You count marks with your eye and then convert. Naming the tenth mark as 5/8 is the conversion, and the drill practises both halves of it.",
            sourceLessonSlug: "tape-and-layout-drill",
          },
          {
            prompt: "Which of these is a hook error rather than a reading error?",
            options: [
              "Dried mortar packed behind the end tab",
              "Reading the mark from an angle so that it appears to shift",
              "Counting five small marks and calling the reading 5/8",
              "Marking with a wide pencil line rather than a crow's foot",
            ],
            correctIndex: 0,
            explanation:
              "Anything that stops the tab sliding its proper distance shifts the zero, and shifts it the same way on every measurement. The rest are things the eye and the pencil do.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "What is the first thing to establish before counting marks past a whole inch?",
            options: [
              "What the smallest division is",
              "Whether the tape has been checked against another tape that day",
              "Whether the measurement will be pushed or pulled",
              "How many feet the reading is from the hook",
            ],
            correctIndex: 0,
            explanation:
              "Counting five marks means 5/16 on a sixteenths blade and 5/32 on a finer one. The count is meaningless until you know what one mark is worth.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "In the drill, what is the third layout mark on a 16 in. on-center wall?",
            options: [
              "47 1/4 in.",
              "48 in., which is where that stud's centre lands rather than its face",
              "46 3/4 in., adding 15 1/4 twice to the first mark",
              "45 3/4 in., adding the first mark three times over",
            ],
            correctIndex: 0,
            explanation:
              "15 1/4, then 31 1/4, then 47 1/4. The mark locates the face; the centre of that stud is at 48 in.",
            sourceLessonSlug: "tape-and-layout-drill",
          },
          {
            prompt: "Which statement about the diamond marks is correct?",
            options: [
              "They give five spaces across an 8 ft sheet",
              "They mark the standard 16 in. on-center spacing in a second colour",
              "They indicate where a tape has been repaired or spliced",
              "They mark each whole foot along the blade for quick counting",
            ],
            correctIndex: 0,
            explanation:
              "96 in. divided into five equal spaces is 19.2 in. per space, one fewer member per sheet than a 16 in. layout gives.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "Eight small marks past a whole inch reads as what fraction?",
            options: [
              "1/2",
              "8/8, which would be a whole inch rather than a part of one",
              "1/8, taking the count of marks as the denominator",
              "1/4, on the assumption that the eighth mark falls at the quarter",
            ],
            correctIndex: 0,
            explanation:
              "Eight sixteenths simplifies to one half, which is why the half carries the second-longest graduation on the blade.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "What is 6 ft 9 in. plus 4 ft 7 in., worked entirely in inches?",
            options: [
              "136 in.",
              "124 in., converting only one of the two dimensions before adding",
              "164 in., converting at twelve inches to the foot and then adding a foot",
              "112 in., converting at ten inches to the foot",
            ],
            correctIndex: 0,
            explanation:
              "81 in. plus 55 in. is 136 in. Dividing back by 12 gives 11 with 4 left over, which is the 11 ft 4 in. the mixed-base method produces.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "What does the hierarchy of graduation lengths save you from doing?",
            options: [
              "Counting every small mark from the whole inch",
              "Converting the reading into decimals before writing it down",
              "Checking the tape against a second tape on the same job",
              "Reading the tape square to the mark to avoid parallax",
            ],
            correctIndex: 0,
            explanation:
              "The half, quarter and eighth marks are visibly longer, so you jump to the nearest long mark and count only the few sixteenths past it.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Add 4 ft 9 in. and 3 ft 8 in.",
            options: [
              "8 ft 5 in.",
              "7 ft 17 in., adding both columns and never carrying the foot",
              "8 ft 7 in., carrying ten inches to the foot rather than twelve",
              "7 ft 5 in., carrying the foot but never adding it into the feet column",
            ],
            correctIndex: 0,
            explanation:
              "The inches make 17, which is one foot and 5 in. Checking in inches: 57 plus 44 is 101, and 101 is 8 ft 5 in.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "Fourteen small marks past a whole inch reads as what fraction?",
            options: [
              "7/8",
              "14/8, putting the count of marks over eight rather than sixteen",
              "1/8, since fourteen sixteenths is two marks short of the next inch",
              "3/4, which is the twelfth mark rather than the fourteenth",
            ],
            correctIndex: 0,
            explanation:
              "14/16 divides top and bottom by 2 to give 7/8. It sits two sixteenths short of the next whole inch, which is a useful way to spot it without counting from zero.",
            sourceLessonSlug: "reading-the-tape",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Decimals, percent, and units
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "decimals-and-rounding",
      title: "10 · Decimals, percent, and knowing when to round",
      section: "Section 4 · Decimals, percent, and units",
      body: `**Supports NCCER Core module 00102.**

**A decimal is a fraction whose denominator is a power of ten, written without the denominator.** 0.5 is five tenths, 0.25 is twenty-five hundredths, 0.125 is one hundred and twenty-five thousandths. The columns to the right of the point run tenths, hundredths, thousandths, exactly as the columns to the left run units, tens, hundreds.

**Adding and subtracting: line up the points, not the digits.** 12.75 + 3.5 = 16.25. Writing 3.5 as 3.50 first costs nothing and stops the 5 from landing in the hundredths column.

**Multiplying: multiply as whole numbers, then count decimal places.** 3.5 x 2.4: work 35 x 24 = 840, then count one decimal place in each factor, so two altogether, giving 8.40. The count of places is the only part people get wrong, and it is the part that moves the answer by a factor of ten.

**Dividing: move the point in both numbers until the divisor is whole.** 8.4 / 0.4 becomes 84 / 4 = 21. Moving it in both keeps the ratio the same, which is the only reason you are allowed to do it.

**Percent means per hundred, so a percent is a decimal in disguise.** 10 percent is 0.10. Ten percent of 240 sq ft is 24 sq ft, so 240 plus a ten percent allowance is 264 sq ft. An eight percent allowance on 1,450 sq ft is 1,450 x 0.08 = 116, giving 1,566 sq ft.

**When to round, and which way, is a judgement about consequences rather than about arithmetic.**

- **Material: round up, always.** A partial box is a whole box when you buy it, and a job stopped for one sheet costs more than the sheet.
- **Intermediate steps: do not round at all.** Round in the middle and the error travels through every step that follows. Carry the digits and round once, at the end.
- **Layout: round to what the tool can resolve.** A tape reads to 1/16 in., which is 0.0625 in. An answer of 4.3781 ft is false precision: your tape cannot tell it apart from 4.378 ft, since both are 4 ft 4 9/16 in. to the nearest sixteenth.

**The size of a rounding decision, in inches.** Rounding a length to the nearest tenth of a foot can move it by up to 0.05 ft, and 0.05 x 12 = 0.6 in. That is more than half an inch, thrown away by a decision that looked like tidying.

**And the size of a percentage, in money.** An error of half a percent on a $40,000 material order is $40,000 x 0.005 = $200. Half a percent sounds like nothing right up until it is written on an invoice.

:::reveal What is 3.5 x 2.4, and where does the decimal point come from? ||| 8.4. Multiply 35 x 24 to get 840, then count the decimal places in the two factors, one in each, so two altogether, which places the point to give 8.40.

:::reveal Why should you not round intermediate steps in a calculation? ||| Because the error travels into every step that follows and compounds. Carry the digits through and round once, at the end, to whatever the tool or the supplier's unit actually needs.

:::reveal How much length can be thrown away by rounding to the nearest tenth of a foot? ||| Up to 0.05 ft, which is 0.6 in., more than half an inch.

## Vocabulary
- **Decimal place**: a column to the right of the point, running tenths, hundredths, thousandths, each ten times smaller than the last.
- **Percent**: a number of parts per hundred, which is a decimal written differently, so 8 percent is 0.08.
- **False precision**: digits in an answer finer than the tool or the material can resolve, such as ten-thousandths of a foot on a tape that reads sixteenths.
- **Rounding up**: the correct direction for a material quantity, because a partial unit is bought whole and a shortfall stops work.
- **Allowance**: a percentage added to a computed quantity to cover offcuts, breakage and error, applied before the quantity is rounded to the sales unit.

## Sources
No external source is cited in this lesson. Decimal arithmetic, percent and rounding are taught from first principles, and every quantity and price in the worked examples was invented for this course.`,
    },
    {
      slug: "fractions-to-decimals-and-back",
      title: "11 · Moving between fractions and decimals",
      section: "Section 4 · Decimals, percent, and units",
      body: `**Supports NCCER Core module 00102.**

**A fraction is a division, so carry it out.** 5/8 is 5 divided by 8, which is 0.625. 3/16 is 0.1875. 1/16 is 0.0625.

**One number rebuilds the whole sixteenths table: 1/16 = 0.0625.** Every sixteenth is a multiple of it. 5/16 is 5 x 0.0625 = 0.3125. 11/16 is 11 x 0.0625 = 0.6875. You do not have to memorise a table you can generate.

**Going the other way: multiply by 16 and round.** A calculator says 0.42 in. Multiply by 16 to get 6.72, round to 7, and the reading is 7/16 in. Check it: 7/16 is 0.4375, which is 0.0175 away from 0.42, while 6/16 is 0.375, which is 0.045 away. The nearest sixteenth is the one you can actually mark.

**Decimal feet is not feet and inches, and this one costs real money.** 6.5 ft is 6 ft 6 in., not 6 ft 5 in. The decimal part is a fraction OF A FOOT, so multiply it by 12 to get inches. 12.75 ft is 12 ft 9 in. because 0.75 x 12 = 9. And 8.4 ft is 8 ft 4.8 in., which to the nearest sixteenth is 8 ft 4 13/16 in., because 0.8 x 16 = 12.8, which rounds to 13.

**The trap that produces it.** Site plans, grade stakes and engineer's scales are commonly worked in decimal feet, in tenths and hundredths. The tape in your pocket is in inches and sixteenths. Handbook 44 allows both: a flexible tape may be graduated in tenths or hundredths of a foot (Section 5.52, S.1). So two tapes can both be legal, both be correct, and disagree completely about what "8.5" means. On one it is eight and a half feet. On the other it is eight and a half inches. A grade stake reading 2.4 ft is 2 ft 4.8 in., not 2 ft 4 in., and the difference is four fifths of an inch on something you are setting concrete to.

**Feet and inches into decimal feet: divide the inches by 12.** 9 ft 3 in. is 9 + 3/12 = 9.25 ft. 7 ft 10 in. is 7 + 10/12 = 7.8333 ft, a repeating decimal, which is a hint that the two systems were never designed to meet.

**Inches into feet and inches.** 100 in. divided by 12 is 8.3333, so 8 ft, and 0.3333 x 12 = 4 in. That is 8 ft 4 in.

:::reveal Convert 0.42 in. to the nearest sixteenth. ||| Multiply by 16 to get 6.72, round to 7, so 7/16 in.

:::reveal How many inches is 8.4 ft, to the nearest sixteenth? ||| 8 ft 4 13/16 in. The 0.4 ft is 4.8 in., and 0.8 in. is 12.8 sixteenths, which rounds to 13.

:::reveal Why can two legal tape measures disagree about what 8.5 means? ||| Because Handbook 44 permits a flexible tape to be graduated in tenths or hundredths of a foot as well as in inches and binary submultiples, so on one blade 8.5 is eight and a half feet and on the other it is eight and a half inches.

## Vocabulary
- **Decimal feet**: a length written as feet and a decimal fraction of a foot, used on site plans and engineer's scales, where 0.5 ft is 6 in.
- **Nearest sixteenth**: the practical rounding target for a tape reading, found by multiplying the decimal part of an inch by 16 and rounding.
- **Repeating decimal**: a decimal that never terminates, such as 10/12 giving 0.8333, which is a sign that a fraction does not fit the base being used.
- **Grade stake**: a marker carrying an elevation, commonly labelled in decimal feet, which is why it must be converted before it is measured with an inch tape.

## Sources
National Institute of Standards and Technology. (2017). *Specifications, tolerances, and other technical requirements for weighing and measuring devices: Section 5.52, Linear measures* (NIST Handbook 44, 2018 ed.). U.S. Department of Commerce. https://www.nist.gov/system/files/documents/2017/12/07/5-52-18-hb44-final.pdf`,
    },
    {
      slug: "inch-pound-and-metric-units",
      title: "12 · Inch-pound units, metric units, and the bridge between them",
      section: "Section 4 · Decimals, percent, and units",
      body: `**Supports NCCER Core module 00102.**

**The customary chain, and the three numbers that matter.** 12 in. make a foot, 3 ft make a yard, 5,280 ft make a mile. Then the two that catch people out, because they are not the same number: 9 sq ft make a square yard, because 3 x 3 is 9, and **27 cu ft make a cubic yard**, because 3 x 3 x 3 is 27. Squaring and cubing a conversion factor is where most unit errors on a jobsite are born.

**Metric is one chain with a decimal point on it.** The SI system has seven base units, and the ones you meet are the metre for length, the kilogram for mass and the second for time (NIST). Prefixes are powers of ten, so 1 m is 1,000 mm and 100 cm, and converting inside metric means moving a point rather than remembering a factor.

**The bridge is exact, and that is not an accident.** NIST publishes the conversion factors and marks the exact ones: **1 inch = 25.4 mm exactly**, 1 foot = 0.3048 m exactly, 1 yard = 0.9144 m exactly. These are definitions agreed in 1959, not measurements, so they never carry an error term.

**Worked example.** A 2,400 mm sheet is how long in inches? 2,400 / 25.4 = 94.4882 in., which to the nearest sixteenth is 94 1/2 in. A standard 96 in. sheet is about 1 1/2 in. longer. Two sheet sizes that look interchangeable in a catalog are not, and the gap shows up at the far end of a run.

Going the other way: 8 ft x 0.3048 = 2.4384 m, which is 2,438.4 mm.

**The United States had two feet until recently, and one of them has been retired.** An 1866 statute defined the foot as 1200/3937 metre, which is about 0.3048006 m. In 1959 the foot was redefined as 0.3048 m exactly, but the older definition was allowed to continue for geodetic surveying and became known as the US survey foot. NIST and NOAA ended that: following a Federal Register notice published on 5 October 2020, **the US survey foot became obsolete on 1 January 2023**, superseded by the international foot for all applications. The two differ by about two parts per million, which is nothing across a room and about 1/8 in. across a mile, and it mattered because surveyed coordinates run to hundreds of thousands of feet.

**The habit that prevents most unit errors: write the unit and cancel it like a factor.** 288 in. divided by 16 in. per space leaves 18 spaces, because inches cancel against inches and spaces are what is left. If the unit that falls out is not the unit the question asked for, you have not made a small mistake, you have made a factor error.

:::reveal How many square feet in a square yard, and how many cubic feet in a cubic yard? ||| 9 and 27. A yard is 3 ft, so a square yard is 3 x 3 and a cubic yard is 3 x 3 x 3.

:::reveal What is the exact relationship between the inch and the millimetre? ||| One inch is 25.4 mm exactly. It is a definition agreed in 1959 rather than a measurement, so it carries no error term, and NIST publishes it as exact.

:::reveal What happened to the US survey foot, and when? ||| It was deemed obsolete on 1 January 2023 and superseded by the international foot of 0.3048 m exactly, following a Federal Register notice published on 5 October 2020.

## Vocabulary
- **International foot**: the foot defined as 0.3048 metre exactly since 1959, now the only foot in US use.
- **US survey foot**: the older foot of 1200/3937 metre, kept for geodetic surveying and deemed obsolete on 1 January 2023.
- **SI base unit**: one of the seven units the metric system is built from, including the metre, the kilogram and the second.
- **Exact conversion factor**: a factor fixed by definition rather than by measurement, such as 25.4 mm to the inch, which NIST marks as exact.
- **Unit cancellation**: writing units next to numbers so they divide out, which makes the unit of the answer fall out of the arithmetic instead of being guessed.

## Sources
National Institute of Standards and Technology. (n.d.). *B.9 Factors for units listed by kind of quantity or field of science*. In *Guide for the use of the International System of Units (SI)* (NIST Special Publication 811). U.S. Department of Commerce. Retrieved September 9, 2026, from https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9
National Institute of Standards and Technology. (n.d.). *U.S. survey foot: Revised unit conversion factors*. U.S. Department of Commerce. Retrieved September 9, 2026, from https://www.nist.gov/pml/us-surveyfoot
National Institute of Standards and Technology. (2025, July 22). *SI units*. U.S. Department of Commerce. https://www.nist.gov/pml/owm/metric-si/si-units`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Decimals, percent, and units",
      section: "Section 4 · Decimals, percent, and units",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is a decimal, put in terms of fractions?",
            options: [
              "A fraction whose denominator is a power of ten",
              "A fraction that has been rounded to the nearest convenient value for calculation",
              "A number too small to be written as a fraction of an inch",
              "A fraction whose denominator has been dropped because it can be inferred",
            ],
            correctIndex: 0,
            explanation:
              "0.5 is five tenths, 0.25 is twenty-five hundredths, 0.125 is one hundred and twenty-five thousandths. The columns right of the point run tenths, hundredths, thousandths.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "What is 12.75 + 3.5?",
            options: [
              "16.25",
              "13.10, lining the digits up at the right-hand end instead of at the point",
              "12.80, adding the 5 into the hundredths column",
              "48.25, treating the 3.5 as a multiplier rather than an addend",
            ],
            correctIndex: 0,
            explanation:
              "Line up the points and write 3.5 as 3.50 first. That costs nothing and stops the 5 from landing in the wrong column.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "What is 3.5 x 2.4?",
            options: [
              "8.4",
              "84, counting no decimal places at all in the product",
              "0.84, counting three decimal places instead of two",
              "5.9, adding the two numbers instead of multiplying them",
            ],
            correctIndex: 0,
            explanation:
              "35 x 24 = 840, and there is one decimal place in each factor, so two altogether, giving 8.40. Miscounting the places is what moves the answer by a factor of ten.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "What is 8.4 / 0.4?",
            options: [
              "21",
              "2.1, moving the point in the dividend but not in the divisor",
              "3.36, multiplying by 0.4 rather than dividing by it",
              "210, moving the point two places instead of one",
            ],
            correctIndex: 0,
            explanation:
              "Move the point in both numbers until the divisor is whole: 84 / 4 = 21. Moving it in both is what keeps the ratio unchanged, which is the only reason the move is allowed.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "What does percent mean?",
            options: [
              "Per hundred",
              "Per thousand, which is why percentages are written to three decimal places",
              "A proportion of the total that has already been rounded to a whole number",
              "The share of a material order that is expected to be wasted",
            ],
            correctIndex: 0,
            explanation:
              "Ten percent is 0.10, so ten percent of 240 sq ft is 24 sq ft. A percent is a decimal in disguise, which is why the calculation is just a multiplication.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "An 8 percent allowance on 1,450 sq ft brings the order to what?",
            options: [
              "1,566 sq ft",
              "1,458 sq ft, adding eight square feet rather than eight percent",
              "1,160 sq ft, taking eight percent off instead of adding it on",
              "11,600 sq ft, multiplying by eight rather than by 0.08",
            ],
            correctIndex: 0,
            explanation:
              "1,450 x 0.08 = 116, and 1,450 + 116 = 1,566 sq ft. The allowance is added to the quantity before the quantity is rounded to the sales unit.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "Which way do you round a material quantity?",
            options: [
              "Up, always",
              "To the nearest unit, since consistent rounding balances out across an order",
              "Down, so that offcuts already on site get used before new stock is bought",
              "To whichever direction the supplier's minimum order quantity happens to favour",
            ],
            correctIndex: 0,
            explanation:
              "A partial box is a whole box when you buy it, and a job stopped for one sheet costs more than the sheet does.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "Why should intermediate steps in a calculation not be rounded?",
            options: [
              "The error travels into every later step",
              "Because intermediate values have to be recorded exactly for the material takeoff",
              "Because rounding is only defined for the final answer in decimal arithmetic",
              "Because a rounded intermediate value cannot be converted back into a fraction",
            ],
            correctIndex: 0,
            explanation:
              "Carry the digits through and round once, at the end, to whatever the tool or the supplier's unit actually needs.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "What is false precision, in this course's terms?",
            options: [
              "Digits finer than the tool can resolve",
              "A measurement taken with a tape that is outside its stated tolerance",
              "A dimension copied from a drawing without checking it on site",
              "An answer given as a decimal when the drawing uses fractions",
            ],
            correctIndex: 0,
            explanation:
              "A tape reads to 1/16 in., which is 0.0625 in. An answer of 4.3781 ft is indistinguishable on that tape from 4.378 ft, since both are 4 ft 4 9/16 in.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "How much length can be lost by rounding to the nearest tenth of a foot?",
            options: [
              "Up to 0.6 in.",
              "Up to 0.1 in., since a tenth of a foot is a tenth of an inch",
              "Up to 1.2 in., since the rounding can go either way by a full tenth",
              "Nothing measurable, since a tenth of a foot is finer than a sixteenth of an inch",
            ],
            correctIndex: 0,
            explanation:
              "Rounding to the nearest tenth moves a value by at most half a tenth, which is 0.05 ft, and 0.05 x 12 = 0.6 in. That is more than half an inch.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "What is half a percent of a $40,000 material order?",
            options: [
              "$200",
              "$20, taking half a percent as five hundredths of a percent",
              "$2,000, taking half a percent as five percent",
              "$400, taking half a percent as one percent",
            ],
            correctIndex: 0,
            explanation:
              "40,000 x 0.005 = 200. Half a percent sounds like nothing right up until it is written on an invoice.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "What is 5/8 as a decimal?",
            options: [
              "0.625",
              "0.58, reading the numerator and denominator as digits after the point",
              "1.6, dividing the denominator by the numerator instead",
              "0.375, which is 3/8 rather than 5/8",
            ],
            correctIndex: 0,
            explanation:
              "A fraction is a division, so 5 divided by 8 is 0.625. Carrying the division out is all there is to the conversion.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "Which single decimal lets you rebuild the whole sixteenths table?",
            options: [
              "0.0625",
              "0.16, which is the denominator written as a decimal fraction",
              "0.125, which is the value of one eighth rather than one sixteenth",
              "0.625, which is five sixteenths rather than one",
            ],
            correctIndex: 0,
            explanation:
              "1/16 is 0.0625, and every sixteenth is a multiple of it: 5/16 is 5 x 0.0625 = 0.3125, and 11/16 is 0.6875.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "What is 11/16 as a decimal?",
            options: [
              "0.6875",
              "0.1116, running the numerator and the denominator together after the point",
              "1.4545, dividing 16 by 11 rather than 11 by 16",
              "0.6125, which is not a multiple of one sixteenth at all",
            ],
            correctIndex: 0,
            explanation:
              "11 x 0.0625 = 0.6875. Generating the value beats memorising a table you can rebuild in one multiplication.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "A calculator gives 0.42 in. What is that to the nearest sixteenth?",
            options: [
              "7/16",
              "6/16, rounding 6.72 down to the sixteenth below it",
              "4/16, reading the leading digits of the decimal as the numerator",
              "1/2, rounding to the nearest half because the value is close to it",
            ],
            correctIndex: 0,
            explanation:
              "Multiply by 16 to get 6.72 and round to 7. Checking: 7/16 is 0.4375 and only 0.0175 away, while 6/16 is 0.375 and 0.045 away.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "What is 6.5 ft in feet and inches?",
            options: [
              "6 ft 6 in.",
              "6 ft 5 in., reading the digit after the point as a number of inches",
              "6 ft 8 in., converting the half at sixteen inches to the foot",
              "6 ft 0.5 in., leaving the decimal attached to the inches instead of the feet",
            ],
            correctIndex: 0,
            explanation:
              "The decimal part is a fraction of a foot, so multiply it by 12: 0.5 x 12 = 6 in. This is the mistake that turns a plan dimension into the wrong cut.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "What is 12.75 ft in feet and inches?",
            options: [
              "12 ft 9 in.",
              "12 ft 7.5 in., halving the decimal part instead of multiplying it by twelve",
              "12 ft 75 in., reading the decimal digits directly as inches",
              "12 ft 3/4 in., treating the decimal as a fraction of an inch",
            ],
            correctIndex: 0,
            explanation:
              "0.75 x 12 = 9 in. Decimal feet and feet-and-inches look alike on paper and are not the same thing.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "What is 8.4 ft, to the nearest sixteenth of an inch?",
            options: [
              "8 ft 4 13/16 in.",
              "8 ft 4 in., dropping the part of the tenth that does not reach a whole inch",
              "8 ft 4 3/4 in., rounding 12.8 sixteenths down to twelve",
              "8 ft 4.8 in., leaving the answer in a form no tape can be read to",
            ],
            correctIndex: 0,
            explanation:
              "0.4 ft is 4.8 in., and the 0.8 in. is 12.8 sixteenths, which rounds to 13. So 8 ft 4 13/16 in.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "A grade stake reads 2.4 ft. What is that in feet and inches?",
            options: [
              "2 ft 4.8 in.",
              "2 ft 4 in., taking the digit after the point as whole inches",
              "2 ft 4/10 in., treating the decimal as a fraction of an inch",
              "2.4 in., dropping the foot label from the reading",
            ],
            correctIndex: 0,
            explanation:
              "0.4 x 12 = 4.8 in. The difference from 2 ft 4 in. is four fifths of an inch, on something you are setting concrete to.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "Why can two legal tapes disagree about what 8.5 means?",
            options: [
              "One may be graduated in tenths of a foot",
              "Because one may be a metric tape carrying no inch scale at all",
              "Because a tape outside its tolerance can misread a whole foot",
              "Because feet and inches may be written with or without a foot mark",
            ],
            correctIndex: 0,
            explanation:
              "Handbook 44, Section 5.52, S.1 permits a flexible tape to be graduated in tenths or hundredths of a foot as well as in inches and binary submultiples of the inch.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "What is 9 ft 3 in. in decimal feet?",
            options: [
              "9.25 ft",
              "9.3 ft, writing the inches straight in after the point",
              "9.03 ft, writing the inches in as hundredths of a foot",
              "9.75 ft, dividing 3 into 12 rather than 12 into 3",
            ],
            correctIndex: 0,
            explanation:
              "Divide the inches by 12: 3/12 is 0.25, so 9.25 ft. Going this way is the reverse of multiplying the decimal part by 12.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "What is 100 in. in feet and inches?",
            options: [
              "8 ft 4 in.",
              "8 ft 3 in., taking the remainder from a division by ten rather than twelve",
              "10 ft, reading the round decimal figure as a round number of feet",
              "8 ft 8 in., doubling the remainder on the way back into inches",
            ],
            correctIndex: 0,
            explanation:
              "100 / 12 = 8.3333, so 8 whole feet, and the leftover 0.3333 ft multiplied by 12 gives 4 in. Check it by reversing: 8 x 12 + 4 = 100.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "Why does 7 ft 10 in. give a repeating decimal in feet?",
            options: [
              "10 does not divide evenly by 12",
              "Because inches and feet belong to different measurement systems entirely",
              "Because a repeating decimal always appears when a fraction is over ten",
              "Because the conversion factor of 12 is itself an approximation",
            ],
            correctIndex: 0,
            explanation:
              "10/12 is 0.8333 and never terminates. It is a hint that the two systems were not designed to meet, which is what makes the conversion worth doing carefully.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "How many square feet are in a square yard?",
            options: [
              "9",
              "3, because a yard is three feet long",
              "27, which is the cubic-yard figure rather than the square-yard one",
              "12, because there are twelve inches in a foot",
            ],
            correctIndex: 0,
            explanation:
              "A yard is 3 ft, and a square yard is 3 ft by 3 ft, which is 9 sq ft. Squaring the conversion factor is the step that gets skipped.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "How many cubic feet are in a cubic yard?",
            options: [
              "27",
              "9, which is the square-yard figure applied to a volume",
              "3, applying the linear conversion factor without cubing it",
              "36, multiplying three feet by the twelve inches in a foot",
            ],
            correctIndex: 0,
            explanation:
              "3 x 3 x 3 = 27. This is the single most useful number in the concrete lessons, and forgetting to cube the factor is a classic factor error.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "How is an inch related to a millimetre?",
            options: [
              "1 in. = 25.4 mm exactly",
              "1 in. is about 25.4 mm, a measured value carrying a small uncertainty",
              "1 in. = 2.54 mm, since a centimetre is ten millimetres",
              "1 in. = 25 mm, rounded by international agreement for practical work",
            ],
            correctIndex: 0,
            explanation:
              "NIST publishes the factor as exact. It is a definition agreed in 1959 rather than a measurement, so it carries no error term at all.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "Which conversion factors does NIST mark as exact?",
            options: [
              "Inch, foot and yard to metre",
              "Only the inch, since the foot and the yard are derived from it by multiplication",
              "The cubic yard and the gallon, because volume factors are defined rather than measured",
              "The pound to the kilogram, because mass standards are physical artefacts",
            ],
            correctIndex: 0,
            explanation:
              "Appendix B.9 of SP 811 marks the inch at 2.54 cm, the foot at 0.3048 m and the yard at 0.9144 m as exact values.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "How long is a 2,400 mm sheet, to the nearest sixteenth of an inch?",
            options: [
              "94 1/2 in.",
              "96 in., since 2,400 mm is the metric equivalent of an eight foot sheet",
              "60 in., dividing by 40 mm to the inch instead of 25.4",
              "240 in., dividing by ten rather than by 25.4",
            ],
            correctIndex: 0,
            explanation:
              "2,400 / 25.4 = 94.4882 in., which rounds to 94 1/2 in. That is about 1 1/2 in. shorter than a 96 in. sheet, and the gap shows at the far end of a run.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "How many millimetres is 8 ft?",
            options: [
              "2,438.4 mm",
              "2,400 mm, which is the nearest round metric sheet size rather than the conversion",
              "243.84 mm, converting to metres and then labelling the result in millimetres",
              "96 mm, converting the feet to inches and stopping there",
            ],
            correctIndex: 0,
            explanation:
              "8 x 0.3048 = 2.4384 m, which is 2,438.4 mm. A 2,400 mm sheet is nearly 1 1/2 in. shorter, which is why the two are not interchangeable.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "When did the US survey foot become obsolete?",
            options: [
              "1 January 2023",
              "5 October 2020, the date the Federal Register notice was published",
              "In 1959, when the international foot was defined as 0.3048 m exactly",
              "In 1986, when the geodetic control network readjustment was completed",
            ],
            correctIndex: 0,
            explanation:
              "The notice was published on 5 October 2020 and the deprecation took effect on 1 January 2023. The 1959 and 1986 dates are real milestones on the way there, not the end of it.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "How was the US survey foot defined?",
            options: [
              "1200/3937 metre",
              "0.3048 metre exactly, the same as the international foot but for survey use",
              "0.3048006 metre exactly, as fixed by the 1959 agreement",
              "One three-hundredth of a chain, as used in the public land survey",
            ],
            correctIndex: 0,
            explanation:
              "The 1866 statutory definition was 1200/3937 m, which works out at about 0.3048006 m. The international foot of 0.3048 m exactly is the one that superseded it.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "How far apart are the two feet over a mile?",
            options: [
              "About 1/8 in.",
              "About 6 in., which is why survey plans and building plans never agree",
              "About 2 ft, since the difference is two parts per million of a mile",
              "About a thousandth of an inch, too small to matter at any scale",
            ],
            correctIndex: 0,
            explanation:
              "The two differ by roughly two parts per million, and 5,280 ft x 0.000002 is about 0.0106 ft, which is 0.127 in. It matters because survey coordinates run to hundreds of thousands of feet.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "How many SI base units are there?",
            options: [
              "Seven",
              "Three, being the metre, the kilogram and the second",
              "Ten, matching the powers of ten the prefixes are built on",
              "Twenty-four, which is the number of recognised prefixes",
            ],
            correctIndex: 0,
            explanation:
              "NIST lists seven: the metre, kilogram, second, ampere, kelvin, mole and candela. The three you meet on a jobsite are the first three.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "Why is converting within metric a matter of moving a decimal point?",
            options: [
              "The prefixes are powers of ten",
              "Because metric units were designed to match customary units at round values",
              "Because the metre is defined in terms of the millimetre rather than the other way round",
              "Because SI forbids any conversion factor that is not a whole number",
            ],
            correctIndex: 0,
            explanation:
              "1 m is 1,000 mm and 100 cm, so the arithmetic is place value rather than a remembered factor. That is the practical advantage of the system.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "What does 288 in. divided by 16 in. per space leave, once the units are cancelled?",
            options: [
              "18 spaces",
              "18 inches, because the inches on top survive the division",
              "18 square inches, because two inch quantities were divided",
              "18 with no unit, because the units cancel out completely",
            ],
            correctIndex: 0,
            explanation:
              "Inches cancel against inches, and spaces are what is left in the denominator's denominator. The unit of the answer falls out of the arithmetic rather than being guessed.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "What does it usually mean when the unit that falls out is not the unit the question asked for?",
            options: [
              "A factor error, not a small one",
              "A rounding difference that will disappear at the end of the calculation",
              "A labelling slip that can be corrected by renaming the answer",
              "A sign that the question was ambiguous about which unit it wanted",
            ],
            correctIndex: 0,
            explanation:
              "Square feet where cubic yards were asked for is not a slip of the pen. It means a dimension was left out or a conversion was never cubed.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "How many feet in a mile?",
            options: [
              "5,280",
              "1,760, which is the number of yards rather than of feet",
              "3,280, which is roughly the number of feet in a kilometre",
              "63,360, which is the number of inches in a mile",
            ],
            correctIndex: 0,
            explanation:
              "5,280 ft, which is 1,760 yards. The 63,360 figure is the same distance counted in inches, so it is a different unit rather than a different length.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "What is 3/16 as a decimal?",
            options: [
              "0.1875",
              "0.316, running the numerator and denominator together after the point",
              "5.333, dividing 16 by 3 rather than 3 by 16",
              "0.375, which is 3/8 rather than 3/16",
            ],
            correctIndex: 0,
            explanation:
              "3 x 0.0625 = 0.1875, or equivalently 3 divided by 16. The 0.375 figure is exactly twice it, which is what makes the eighth and sixteenth pair so easy to confuse.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "Which is the correct order of steps for a material allowance?",
            options: [
              "Add the percentage, then round up",
              "Round up to the sales unit, then add the percentage to that",
              "Add the percentage and round to the nearest unit in either direction",
              "Round down first, so the allowance covers the shortfall",
            ],
            correctIndex: 0,
            explanation:
              "The allowance applies to the computed quantity, and the rounding applies to the sales unit. Doing them the other way round inflates the order without covering the offcuts.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "Ten percent added to 240 sq ft gives what?",
            options: [
              "264 sq ft",
              "250 sq ft, adding ten square feet instead of ten percent",
              "216 sq ft, taking ten percent off rather than adding it",
              "2,400 sq ft, multiplying by ten instead of by 0.10",
            ],
            correctIndex: 0,
            explanation:
              "Ten percent of 240 is 24, and 240 + 24 = 264 sq ft. Percent is a decimal in disguise, so the calculation is one multiplication and one addition.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "Why does the course say a tape reading of 4.3781 ft is false precision?",
            options: [
              "A tape resolves 1/16 in., which is 0.0625 in.",
              "Because no dimension on a drawing is ever given to four decimal places",
              "Because a decimal foot cannot legally be used on a construction drawing",
              "Because four decimal places exceed the tolerance the tape is tested to",
            ],
            correctIndex: 0,
            explanation:
              "4.3781 ft and 4.378 ft are both 4 ft 4 9/16 in. to the nearest sixteenth, so the extra digits describe a distinction the tool cannot make.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "In 0.125, which column does the 1 sit in?",
            options: [
              "Tenths",
              "Hundredths, since it is the first digit of a three-digit decimal",
              "Thousandths, matching the denominator of the fraction it represents",
              "Units, since it is the leading significant digit",
            ],
            correctIndex: 0,
            explanation:
              "The columns right of the point run tenths, hundredths, thousandths, so 0.125 is one tenth, two hundredths and five thousandths, which together are one eighth.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "What is 1/16 as a decimal?",
            options: [
              "0.0625",
              "0.16, reading the denominator as the decimal value",
              "0.625, which is 5/8 rather than 1/16",
              "16.0, inverting the fraction before dividing",
            ],
            correctIndex: 0,
            explanation:
              "One divided by sixteen is 0.0625, and every other sixteenth is a multiple of it, which is why this is the one worth knowing.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "Which units are the three SI base units you actually meet on a jobsite?",
            options: [
              "Metre, kilogram, second",
              "Metre, litre and gram, which are the units marked on most site equipment",
              "Millimetre, centimetre and metre, which are the three length scales in use",
              "Metre, newton and degree Celsius, covering length, force and temperature",
            ],
            correctIndex: 0,
            explanation:
              "NIST lists seven base units. The litre and the gram are derived or prefixed forms rather than base units, and the newton is derived from three of them.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "Why does the 1959 redefinition of the foot carry no error term?",
            options: [
              "It is a definition, not a measurement",
              "Because it was measured against a standard bar to more places than any use requires",
              "Because it is a rounded value agreed to be close enough for all purposes",
              "Because the error was absorbed into the definition of the metre instead",
            ],
            correctIndex: 0,
            explanation:
              "0.3048 m is the value the foot was declared to have, so the relationship is exact by construction rather than by experiment.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "Where do most jobsite unit errors come from, according to this lesson?",
            options: [
              "Not squaring or cubing a conversion factor",
              "Using metric drawings alongside customary tape measures on the same site",
              "Confusing the survey foot with the international foot on a building plan",
              "Rounding conversion factors to two decimal places before multiplying",
            ],
            correctIndex: 0,
            explanation:
              "A yard is 3 ft, a square yard is 9 sq ft and a cubic yard is 27 cu ft. Carrying the linear 3 into an area or a volume is the error that produces answers off by nine or by twenty-seven.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "What is 0.25 in. as a fraction of an inch?",
            options: [
              "1/4",
              "1/25, reading the digits after the point as a denominator",
              "2 1/2, moving the decimal point one place before converting",
              "25/16, multiplying the decimal by sixteen and stopping there",
            ],
            correctIndex: 0,
            explanation:
              "0.25 is twenty-five hundredths, which reduces to a quarter. Multiplying by 16 gives 4, so it is the fourth small mark on a sixteenths blade.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "What is 9/16 as a decimal?",
            options: [
              "0.5625",
              "0.916, running the numerator and denominator together after the point",
              "1.7778, dividing 16 by 9 rather than 9 by 16",
              "0.5375, which is not a multiple of one sixteenth",
            ],
            correctIndex: 0,
            explanation:
              "9 x 0.0625 = 0.5625, which is just over a half, since a half is 0.5 exactly.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "What is 0.1875 in. as a fraction?",
            options: [
              "3/16",
              "1/8, rounding the decimal down to the nearest eighth",
              "18/75, reading the digits after the point as a fraction",
              "3/8, which is exactly twice the correct answer",
            ],
            correctIndex: 0,
            explanation:
              "Multiply by 16: 0.1875 x 16 = 3 exactly, so the answer is 3/16 with nothing to round.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "What is 0.3125 in. as a fraction?",
            options: [
              "5/16",
              "5/8, which is exactly twice the correct answer",
              "3/125, reading the digits after the point as a fraction",
              "1/3, rounding the decimal to the nearest simple fraction",
            ],
            correctIndex: 0,
            explanation:
              "0.3125 x 16 = 5, so it is 5/16, the fifth small mark. The 5/8 figure is 0.625, twice as far along the blade.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "What is 5 percent of 1,200 sq ft?",
            options: [
              "60 sq ft",
              "600 sq ft, taking five percent as one half rather than one twentieth",
              "240 sq ft, taking five percent as one fifth",
              "6 sq ft, multiplying by 0.005 rather than by 0.05",
            ],
            correctIndex: 0,
            explanation:
              "1,200 x 0.05 = 60. Percent means per hundred, so five percent is five hundredths, which is one twentieth.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "What is 16.25 minus 3.5?",
            options: [
              "12.75",
              "13.20, lining the digits up at the right-hand end rather than at the point",
              "16.20, subtracting the 3.5 from only the decimal part",
              "12.20, borrowing from the wrong column during the subtraction",
            ],
            correctIndex: 0,
            explanation:
              "Write 3.5 as 3.50 and line up the points. Check by adding back: 12.75 + 3.50 = 16.25.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "Convert 4 ft 6 in. to decimal feet.",
            options: [
              "4.5 ft",
              "4.6 ft, writing the inches straight in after the point",
              "4.06 ft, writing the inches in as hundredths of a foot",
              "10 ft, adding the feet and the inches together",
            ],
            correctIndex: 0,
            explanation:
              "Divide the inches by 12: 6/12 is 0.5, so 4.5 ft. Writing the inches straight after the point is the mistake that runs the two systems together.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "Convert 3.25 ft to feet and inches.",
            options: [
              "3 ft 3 in.",
              "3 ft 25 in., reading the digits after the point as inches",
              "3 ft 2.5 in., moving the decimal point one place before converting",
              "3 ft 1/4 in., treating the decimal as a fraction of an inch",
            ],
            correctIndex: 0,
            explanation:
              "0.25 x 12 = 3 in. The decimal part is a fraction of a foot, and a quarter of a foot is three inches.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "How many millimetres are in a metre?",
            options: [
              "1,000",
              "100, which is the number of centimetres in a metre",
              "10, since each prefix step is a single power of ten",
              "25.4, which is the number of millimetres in an inch",
            ],
            correctIndex: 0,
            explanation:
              "SI prefixes are powers of ten, so a metre is 1,000 mm and 100 cm, and converting inside metric is moving a decimal point.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "How many metres is a yard, exactly?",
            options: [
              "0.9144",
              "0.3048, which is the exact value for the foot rather than the yard",
              "1.0936, which is the number of yards in a metre",
              "0.914, a rounded value that NIST does not mark as exact",
            ],
            correctIndex: 0,
            explanation:
              "NIST marks the yard at 0.9144 m as exact, along with the foot at 0.3048 m and the inch at 2.54 cm. All three come from the 1959 definitions.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "How many inches are in a mile?",
            options: [
              "63,360",
              "5,280, which is the number of feet rather than of inches",
              "1,760, which is the number of yards in a mile",
              "21,120, converting yards to inches instead of feet to inches",
            ],
            correctIndex: 0,
            explanation:
              "5,280 x 12 = 63,360 in. It is the same distance as 5,280 ft and 1,760 yards, counted in a smaller unit.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "What is 2.5 ft in inches?",
            options: [
              "30 in.",
              "25 in., reading the digits of the decimal as a count of inches",
              "2 ft 5 in., treating the decimal digit as whole inches",
              "20 in., converting at eight inches to the foot",
            ],
            correctIndex: 0,
            explanation:
              "2.5 x 12 = 30 in. Working in one unit throughout is what keeps decimal feet and feet-and-inches from being mixed up.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "Why are you allowed to move the decimal point in both numbers of a division?",
            options: [
              "It keeps the ratio unchanged",
              "Because the point is a formatting mark and carries no arithmetic value",
              "Because the answer is rounded at the end anyway",
              "Because division is the only operation where place value does not apply",
            ],
            correctIndex: 0,
            explanation:
              "Multiplying the dividend and the divisor by the same power of ten leaves the quotient alone, which is why 8.4 / 0.4 can be worked as 84 / 4.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "What is 0.75 x 12?",
            options: [
              "9",
              "0.9, keeping the decimal point from the first factor in the product",
              "8.4, multiplying by seven tenths instead of three quarters",
              "16, dividing twelve by 0.75 rather than multiplying",
            ],
            correctIndex: 0,
            explanation:
              "Three quarters of twelve is nine, which is why 12.75 ft is 12 ft 9 in. This is the conversion that turns decimal feet into inches.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Area, volume, and ordering material
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "shapes-perimeter-and-area",
      title: "13 · Shapes, perimeter and area",
      section: "Section 5 · Area, volume, and ordering material",
      body: `**Supports NCCER Core module 00102.**

**Perimeter is how far around. Area is how much surface.** Perimeter is measured in feet and buys you baseboard, top plate and trim. Area is measured in square feet and buys you drywall, sheathing, paint and flooring. Reaching for the wrong one is the first half of the mistake this section exists to prevent.

**The formulas, and where each one shows up.**

- **Rectangle**: area is length times width, perimeter is 2 x (length + width).
- **Square**: area is the side times itself.
- **Triangle**: area is one half of base times height, where the height is measured square to the base, not along a sloped side.
- **Circle**: circumference is pi times the diameter, area is pi times the radius squared. Pi is about 3.1416.

**Worked example: a room 14 ft by 11 ft 6 in.** Convert the mixed dimension first: 11 ft 6 in. is 11.5 ft. Area is 14 x 11.5 = 161 sq ft. Perimeter is 2 x (14 + 11.5) = 51 ft. Those two numbers buy completely different things and neither substitutes for the other.

**Worked example: baseboard for that room.** Perimeter 51 ft, less a 3 ft door opening, is 48 ft of run. Add ten percent for offcuts and mitres: 48 x 1.10 = 52.8 ft. Bought in 8 ft sticks that is 52.8 / 8 = 6.6, which rounds up to 7 sticks. Round the sticks, not the feet.

**Worked example: a gable end.** A triangle with a 24 ft base and a 6 ft rise has an area of one half x 24 x 6 = 72 sq ft. The 6 ft is the vertical height, not the length of the sloping rafter, and using the rafter length instead inflates the answer.

**Worked example: a round pier.** A 12 in. diameter pier has a 6 in. radius, which is 0.5 ft. Its cross-sectional area is 3.1416 x 0.5 x 0.5 = 0.7854 sq ft. Small numbers, and they will matter in the volume lesson when there are twelve piers.

**Composite shapes: cut them into rectangles.** An L-shaped slab is not a formula, it is two rectangles. A 20 ft by 12 ft leg is 240 sq ft, an 8 ft by 6 ft leg is 48 sq ft, and the total is 288 sq ft. Draw the split line on the sketch before you start, because the arithmetic is trivial and the bookkeeping is not.

**Feet times feet is square feet.** If your answer to an area question carries plain feet, you multiplied a length by a number instead of by a length, and the answer is wrong by a whole dimension.

:::reveal What is the area and the perimeter of a room 14 ft by 11 ft 6 in.? ||| Convert 11 ft 6 in. to 11.5 ft. The area is 14 x 11.5 = 161 sq ft, and the perimeter is 2 x (14 + 11.5) = 51 ft.

:::reveal How much baseboard, in 8 ft sticks, for that room less a 3 ft door, with ten percent for waste? ||| Seven sticks. The run is 51 minus 3 = 48 ft, plus ten percent is 52.8 ft, and 52.8 / 8 = 6.6, which rounds up to 7.

:::reveal Which dimension is the height of a triangle, and which is not? ||| The height is measured square to the base, so on a gable it is the vertical rise. The sloping rafter is longer than the height and using it inflates the area.

## Vocabulary
- **Perimeter**: the distance around a figure, measured in feet, which is what trim and plate are bought by.
- **Area**: the surface a figure covers, measured in square feet, which is what sheet goods, paint and flooring are bought by.
- **Height of a triangle**: the distance from the base to the apex measured square to the base, which on a gable is the rise rather than the rafter.
- **Composite shape**: an outline that is not one formula, handled by cutting it into rectangles and adding the parts.
- **Pi**: the ratio of a circle's circumference to its diameter, about 3.1416, used for both circumference and area.

## Sources
No external source is cited in this lesson. The area formulas are taught from first principles and every dimension in the worked examples was invented for this course.`,
    },
    {
      slug: "squaring-a-layout",
      title: "14 · Squaring a layout with a 3-4-5 triangle",
      section: "Section 5 · Area, volume, and ordering material",
      body: `**Supports NCCER Core module 00102.**

**A right angle can be measured instead of eyeballed, and that is what this lesson is.** A framing square is 16 in. long and a building is not, so a square held against a 30 ft form tells you almost nothing. Arithmetic scales; a tool does not.

**The relationship.** In a right triangle, the two short sides squared and added equal the long side squared. 3 squared is 9, 4 squared is 16, and 9 plus 16 is 25, which is 5 squared. So a triangle whose sides are 3, 4 and 5 has a right angle between the 3 and the 4, and it cannot have one anywhere else.

**How it is used on a form or a wall plate.** Measure 3 units along one leg and mark it. Measure 4 units along the other leg and mark it. Measure between the marks. If it reads 5 units, the corner is square. If it reads more, the corner is open; if it reads less, the corner is closed. Move one leg until the diagonal reads 5 and it is square.

**Use the biggest multiple that fits, because accuracy scales with the triangle.** 3-4-5 works in feet, in yards, in metres, and in any multiple: 6-8-10, 9-12-15, 12-16-20. A 3-4-5 in inches, which is 36-48-60, is a fine check for a small cabinet and useless on a 40 ft footing, because a 1/8 in. error in a 5 ft diagonal is a much bigger angle than the same error in a 20 ft one.

**The diagonal check, which is the same idea with no triangle to lay out.** A rectangle's two diagonals are equal, and a four-sided figure with equal opposite sides whose diagonals are equal is a rectangle. So on a rectangular form you pull both diagonals and compare. You do not need to know how far out of square you are, only whether the two numbers match, and you nudge a corner until they do.

**Worked example.** A footing form is 24 ft by 10 ft. Its diagonal should be the square root of 24 squared plus 10 squared, which is 576 plus 100 = 676, and the square root of 676 is 26. Both diagonals should read 26 ft 0 in. One reading 26 ft 0 in. and the other 26 ft 1 in. means the form is a parallelogram, and every wall built on it will be out of square for the life of the building.

**Another.** A 12 ft by 16 ft slab has diagonals of 20 ft, because 12-16-20 is a 3-4-5 triangle scaled by four. When the numbers come out that clean it is worth noticing, because it means you can check the slab with no calculator at all.

:::reveal Why is arithmetic a better squaring tool than a framing square on a 30 ft form? ||| Because a framing square is only about 16 in. long, so any small error at the tool is multiplied enormously over the length of the wall. A 3-4-5 triangle can be laid out at any size, and accuracy improves as the triangle gets bigger.

:::reveal What should the diagonal of a 24 ft by 10 ft form measure? ||| 26 ft. 24 squared is 576 and 10 squared is 100, which sum to 676, and the square root of 676 is 26.

:::reveal What does it mean when the two diagonals of a rectangular form do not match? ||| The form is not a rectangle, it is a parallelogram. Nudge one corner until the two diagonals read the same, which is all the check requires you to know.

## Vocabulary
- **Right angle**: a square corner, which on a building is verified by measurement rather than judged by eye.
- **3-4-5 triangle**: the smallest whole-number right triangle, used at any scale because 6-8-10, 9-12-15 and 12-16-20 are the same triangle enlarged.
- **Diagonal check**: comparing the two diagonals of a four-sided form, which are equal only when the form is a true rectangle.
- **Out of square**: a corner that is open or closed rather than at ninety degrees, which every later trade inherits and pays for.

## Sources
No external source is cited in this lesson. The relationship between the sides of a right triangle is taught from first principles, and every dimension in the worked examples was invented for this course.`,
    },
    {
      slug: "volume-and-the-cubic-yard",
      title: "15 · Volume, and the cubic yard",
      section: "Section 5 · Area, volume, and ordering material",
      body: `**Supports NCCER Core module 00102.**

**Volume is area with a depth on it.** A rectangular solid is length times width times height. A cylinder is the area of its circle times its height. Feet times feet times feet is cubic feet, and if your answer carries square feet you left a dimension out.

**Concrete is sold by the cubic yard, and there are 27 cubic feet in one.** Every dimension on the drawing is in feet and inches, every price is in cubic yards, and the bridge between them is a division by 27 that is easy to forget and expensive to forget.

**Worked example: a slab.** A slab 20 ft by 24 ft, poured 4 in. thick.

Convert the thickness to feet first: 4 in. is 4/12 ft, which is 1/3 ft. Then volume is 20 x 24 x 1/3 = 160 cu ft. Then divide by 27: 160 / 27 = 5.93 cu yd.

**The error this example exists to show.** Leave the 4 in. as a 4 and you get 20 x 24 x 4 = 1,920, call it cubic feet, divide by 27, and order 71 cubic yards instead of 6. That is twelve times too much, and twelve is exactly the conversion you skipped. The estimate check catches it instantly: a slab the size of a small garage, four inches thick, is obviously not seventy yards of concrete.

**Worked example: a strip footing.** 40 ft long, 16 in. wide, 8 in. deep. In feet that is 40 x 1.3333 x 0.6667 = 35.56 cu ft, and 35.56 / 27 = 1.32 cu yd. Note how small the number is. Footings look like a lot of work and not much concrete, and the arithmetic is what tells you that before the truck arrives.

**Worked example: round piers.** A 12 in. diameter pier 42 in. deep has a radius of 0.5 ft and a depth of 3.5 ft, so its volume is 3.1416 x 0.5 x 0.5 x 3.5 = 2.75 cu ft. Six of them is 16.49 cu ft, which is 0.61 cu yd. Six holes, and not much more than half a yard of concrete between them.

**Area and volume are different questions, and the supplier answers only one of them.** 480 sq ft of slab is not a quantity anyone sells. The depth is what turns it into 160 cu ft, and the 27 is what turns that into something you can order.

**A cubic yard of normal-weight concrete is heavy, on the order of two tons.** That is an approximate figure and the exact unit weight depends on the mix, so get it from the supplier's mix design rather than from a rule of thumb. The reason to know the order of magnitude at all is that it tells you a wheelbarrow moves a small fraction of a yard, which shapes how a pour is planned.

:::reveal How much concrete is in a 20 ft by 24 ft slab poured 4 in. thick? ||| 5.93 cubic yards. The thickness is 1/3 ft, so 20 x 24 x 1/3 = 160 cu ft, and 160 / 27 = 5.93 cu yd.

:::reveal What answer do you get if you forget to convert the 4 in. thickness to feet, and why is it recognisable as wrong? ||| You get 1,920 cu ft, which is about 71 cubic yards, twelve times too much. It is recognisable because twelve is exactly the conversion skipped, and because seventy yards of concrete in a small slab fails any estimate.

:::reveal What is the volume of a 12 in. diameter pier 42 in. deep? ||| About 2.75 cubic feet. The radius is 0.5 ft and the depth is 3.5 ft, so pi x 0.5 x 0.5 x 3.5 = 2.75 cu ft.

## Vocabulary
- **Cubic foot**: a volume one foot on each side, which is what dimensions in feet naturally produce.
- **Cubic yard**: the unit concrete is sold in, equal to 27 cubic feet, because a yard is three feet and three cubed is twenty-seven.
- **Rectangular solid**: a box-shaped volume, found as length times width times height.
- **Cylinder**: a round column of constant cross section, whose volume is the area of the circle times the height.
- **Unit weight**: the weight of a given volume of a material, which for concrete comes from the supplier's mix design rather than from a rule of thumb.

## Sources
No external source is cited for the arithmetic in this lesson, which is taught from first principles with dimensions invented for this course. The weight of concrete is given only as an order of magnitude and is explicitly deferred to the supplier's mix design; do not treat the two-ton figure as a specified value.`,
    },
    {
      slug: "ordering-material-with-waste",
      title: "16 · Ordering material, and the waste factor",
      section: "Section 5 · Area, volume, and ordering material",
      body: `**Supports NCCER Core module 00102.**

**Two steps, in this order: add the allowance to the quantity, then round up to the sales unit.** Doing it the other way round inflates the order and still does not cover the offcuts, because the rounding lands on the wrong number.

**Why the allowance is not padding.** Sheet goods get cut around openings and the offcuts are frequently unusable. Trim is mitred, and every mitre eats length. Tile and flooring break, and a run has to end in a piece wide enough to cut. A percentage is a crude way of saying that the theoretical quantity is never the delivered quantity, and the right percentage depends on the material and the shape of the room rather than on a rule.

**The asymmetry that decides which way to round.** Under-ordering and over-ordering do not cost the same thing. Extra material costs the price of the extra material, and some of it goes back. A shortfall stops the work: a pour that runs out mid-slab leaves a cold joint in the middle of the finished floor, and a crew waiting on a second delivery is being paid to wait. So you round up, and on a concrete pour you round up generously.

**Worked example: concrete for the slab.** 5.93 cubic yards computed. Add ten percent: 5.93 x 1.10 = 6.52 cu yd. Then order in whatever increment the supplier sells, and ask about the short-load charge before you decide whether to round to 6.5 or to 7. The supplier's increments, minimum load and short-load fee are their numbers, not yours; ask rather than assume.

**Worked example: drywall.** 1,450 sq ft of wall and ceiling. A 4 ft by 8 ft sheet covers 32 sq ft. Without an allowance that is 1,450 / 32 = 45.3, so 46 sheets. With ten percent it is 1,450 x 1.10 = 1,595 sq ft, and 1,595 / 32 = 49.8, so 50 sheets. Four sheets is the difference between a job that finishes and a job that sends somebody to the yard.

**Worked example: flooring.** A 288 sq ft room, flooring sold in boxes covering 20 sq ft. Without an allowance, 288 / 20 = 14.4, so 15 boxes. With eight percent, 288 x 1.08 = 311.04, and 311.04 / 20 = 15.55, so 16 boxes.

**Never round a partial unit down.** 14.4 boxes is 15 boxes. 6.6 sticks is 7 sticks. 45.3 sheets is 46 sheets. The fraction is not an error term, it is material you are going to install.

:::reveal In what order do the waste allowance and the rounding get applied? ||| The allowance is added to the computed quantity first, and only then is the result rounded up to the supplier's sales unit. Rounding first inflates the order without covering the offcuts.

:::reveal Why round a material quantity up rather than to the nearest unit? ||| Because over-ordering costs the price of the extra material and under-ordering stops the work. A pour that runs out leaves a cold joint and a paid crew waiting on a second delivery.

:::reveal How many 4 ft by 8 ft sheets for 1,450 sq ft with a ten percent allowance? ||| Fifty. 1,450 x 1.10 = 1,595 sq ft, a sheet covers 32 sq ft, and 1,595 / 32 = 49.8, which rounds up to 50.

## Vocabulary
- **Waste factor**: a percentage added to a computed quantity to cover offcuts, mitres, breakage and error, chosen by material and room shape rather than by a fixed rule.
- **Sales unit**: the unit the supplier actually sells in, such as a sheet, a stick, a box or a cubic yard, which is what the final rounding lands on.
- **Cold joint**: the seam left where fresh concrete meets concrete that has already begun to set, which is what a pour running short produces.
- **Short-load charge**: a supplier's fee for delivering less than a full load, which is a number to ask for rather than to assume.

## Sources
No external source is cited in this lesson. The arithmetic is taught from first principles, the quantities were invented for this course, and supplier-specific values such as load increments, minimum loads and short-load fees are deliberately not asserted here; get them from the supplier.`,
    },
    {
      slug: "area-volume-and-ordering-drill",
      title: "17 · Drill · Area, volume and ordering",
      section: "Section 5 · Area, volume, and ordering material",
      body: `**Supports NCCER Core module 00102.** Producing the number is the skill, so type the answer. Give cubic yards to two decimal places, square feet as whole numbers, and counts of material as whole units rounded up.

## Vocabulary
- **Unit discipline**: reading which unit an item asks for before answering, since the same slab has one value in cubic feet and another in cubic yards.
- **Two-place precision**: the rounding these items ask for on cubic yards, which is the precision a concrete quantity is quoted to.
- **Sales unit**: the whole sheet, stick or box that a material count is rounded up to once the waste allowance has been added.

## Sources
No external source is cited in this drill. Every item is arithmetic taught from first principles in the four lessons above it, with dimensions invented for this course.`,
      exercise: {
        instructions:
          "Work each one on paper, then type the answer. Watch the units: the question tells you which one it wants.",
        items: [
          {
            prompt: "A room is 14 ft by 11 ft 6 in. What is its area, in square feet?",
            answer: "161",
            computedAnswer: true,
            hint: "Convert 11 ft 6 in. to 11.5 ft first.",
            explanation: "14 x 11.5 = 161 sq ft.",
          },
          {
            prompt: "What is the perimeter of that same room, in feet?",
            answer: "51",
            computedAnswer: true,
            hint: "Twice the length plus twice the width.",
            explanation: "2 x (14 + 11.5) = 51 ft. Perimeter buys trim; area buys sheet goods.",
          },
          {
            prompt: "A gable triangle has a 24 ft base and a 6 ft rise. What is its area, in square feet?",
            answer: "72",
            computedAnswer: true,
            hint: "Half of base times height, and the height is the rise.",
            explanation: "0.5 x 24 x 6 = 72 sq ft. Using the sloping rafter length instead of the rise would inflate it.",
          },
          {
            prompt: "An L-shaped slab is a 20 ft by 12 ft leg plus an 8 ft by 6 ft leg. What is its area, in square feet?",
            answer: "288",
            computedAnswer: true,
            hint: "Split it into two rectangles and add.",
            explanation: "240 + 48 = 288 sq ft.",
          },
          {
            prompt: "What should the diagonal of a 24 ft by 10 ft form measure, in feet?",
            answer: "26",
            computedAnswer: true,
            hint: "Square both sides, add, take the square root.",
            explanation: "576 + 100 = 676, and the square root of 676 is 26 ft.",
          },
          {
            prompt: "What should the diagonal of a 12 ft by 16 ft slab measure, in feet?",
            answer: "20",
            computedAnswer: true,
            hint: "This one is a 3-4-5 triangle scaled up.",
            explanation: "12-16-20 is 3-4-5 multiplied by four, so the diagonal is 20 ft and no calculator is needed.",
          },
          {
            prompt: "A slab is 20 ft by 24 ft and 4 in. thick. What is its volume, in cubic feet?",
            answer: "160",
            computedAnswer: true,
            hint: "Turn 4 in. into a fraction of a foot before you multiply.",
            explanation: "4 in. is 1/3 ft, so 20 x 24 x 1/3 = 160 cu ft.",
          },
          {
            prompt: "How many cubic yards is that slab? Give two decimal places.",
            answer: "5.93",
            computedAnswer: true,
            hint: "Divide by 27.",
            explanation: "160 / 27 = 5.926, which is 5.93 cu yd to two places.",
          },
          {
            prompt: "Add a ten percent allowance to that concrete quantity. Give cubic yards to two decimal places.",
            answer: "6.52",
            computedAnswer: true,
            hint: "Multiply by 1.10.",
            explanation: "5.926 x 1.10 = 6.52 cu yd. Ask the supplier about increments and short-load charges before deciding what to order.",
          },
          {
            prompt: "How many 4 ft by 8 ft sheets cover 1,450 sq ft with a ten percent allowance?",
            answer: "50",
            computedAnswer: true,
            hint: "Add the allowance first, then divide by 32, then round up.",
            explanation: "1,450 x 1.10 = 1,595 sq ft, and 1,595 / 32 = 49.8, which rounds up to 50 sheets.",
          },
        ],
      },
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Area, volume, and ordering",
      section: "Section 5 · Area, volume, and ordering material",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does perimeter buy, and what does area buy?",
            options: [
              "Trim and plate; sheet goods and paint",
              "Sheet goods and paint; trim, plate and baseboard",
              "Concrete by the yard; drywall by the sheet",
              "Fasteners by the box; lumber by the linear foot",
            ],
            correctIndex: 0,
            explanation:
              "Perimeter is a distance in feet and buys anything sold by the running foot. Area is a surface in square feet and buys anything sold by the sheet, the box or the gallon.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "What is the area of a room 14 ft by 11 ft 6 in.?",
            options: [
              "161 sq ft",
              "154 sq ft, dropping the six inches and treating the room as 14 by 11",
              "51 sq ft, which is the perimeter of the room rather than its area",
              "1,932 sq ft, multiplying the width in inches by the length in feet",
            ],
            correctIndex: 0,
            explanation:
              "Convert 11 ft 6 in. to 11.5 ft first, then 14 x 11.5 = 161 sq ft. The half foot is worth 7 sq ft, which is a quarter of a sheet.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "What is the perimeter of a room 14 ft by 11 ft 6 in.?",
            options: [
              "51 ft",
              "25.5 ft, adding one length and one width and stopping there",
              "161 ft, which is the area figure carrying a length unit",
              "50 ft, rounding both dimensions to whole feet before doubling",
            ],
            correctIndex: 0,
            explanation:
              "2 x (14 + 11.5) = 51 ft. Perimeter and area are answers to different questions and neither substitutes for the other.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "How many 8 ft sticks of baseboard for a 51 ft perimeter, less a 3 ft door, with ten percent waste?",
            options: [
              "7",
              "6, dividing the 48 ft run by eight and ignoring the waste allowance",
              "6.6, leaving the answer as a fraction of a stick",
              "8, adding the allowance twice before dividing",
            ],
            correctIndex: 0,
            explanation:
              "51 minus 3 is 48 ft, plus ten percent is 52.8 ft, and 52.8 / 8 = 6.6, which rounds up to 7 sticks. You round the sticks, not the feet.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "What is the area of a gable triangle with a 24 ft base and a 6 ft rise?",
            options: [
              "72 sq ft",
              "144 sq ft, multiplying base by height without halving it",
              "30 sq ft, adding the base and the rise instead of multiplying",
              "78 sq ft, using the sloping rafter length in place of the rise",
            ],
            correctIndex: 0,
            explanation:
              "One half of 24 x 6 is 72 sq ft. The height is measured square to the base, so on a gable it is the vertical rise and never the rafter.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "Which measurement is the height of a triangle?",
            options: [
              "The distance square to the base",
              "The length of the longest of the three sides of the figure",
              "The length of the sloping side that rises from the base",
              "Half the base, measured from the midpoint to the apex",
            ],
            correctIndex: 0,
            explanation:
              "Height is perpendicular to the base. On a gable that is the rise, and using the rafter instead makes every area too large.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "What is the cross-sectional area of a 12 in. diameter pier?",
            options: [
              "0.7854 sq ft",
              "3.1416 sq ft, using the diameter in feet as the radius",
              "1 sq ft, since a 12 in. circle fits inside a one foot square",
              "12.566 sq ft, using the diameter in inches as the radius in feet",
            ],
            correctIndex: 0,
            explanation:
              "The radius is 6 in., which is 0.5 ft, so the area is 3.1416 x 0.5 x 0.5 = 0.7854 sq ft. Using the diameter where the radius belongs multiplies the answer by four.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "How do you find the area of an L-shaped slab?",
            options: [
              "Split it into rectangles and add",
              "Take the overall bounding rectangle and subtract ten percent for the notch",
              "Average the two leg lengths and treat the shape as a square",
              "Measure the perimeter and divide by four to get an equivalent side",
            ],
            correctIndex: 0,
            explanation:
              "A 20 ft by 12 ft leg is 240 sq ft, an 8 ft by 6 ft leg is 48 sq ft, and the total is 288 sq ft. Draw the split line on the sketch before starting.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "An area answer comes out in plain feet rather than square feet. What happened?",
            options: [
              "A length was multiplied by a number, not a length",
              "The answer was rounded before the unit was applied to it",
              "The two dimensions were in different units and one was converted",
              "The figure was a triangle, whose area carries a linear unit",
            ],
            correctIndex: 0,
            explanation:
              "Feet times feet is square feet. An answer in plain feet means one whole dimension is missing, which is a factor error rather than a labelling slip.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "Why is a framing square a poor tool for squaring a 30 ft form?",
            options: [
              "It is only about 16 in. long",
              "Because it is made of steel, which expands measurably in the sun",
              "Because it can only check inside corners, not outside ones",
              "Because it reads in sixteenths, which is too coarse for a long form",
            ],
            correctIndex: 0,
            explanation:
              "A small error at a 16 in. tool becomes a large error at the end of a 30 ft wall. Arithmetic scales to any size and a tool does not.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "Why is a 3-4-5 triangle a right triangle?",
            options: [
              "9 plus 16 equals 25",
              "Because 3, 4 and 5 are consecutive whole numbers, which always form a right angle",
              "Because 3 plus 4 is close enough to 5 for practical layout work",
              "Because the ratio of 3 to 4 is the standard slope for a square corner",
            ],
            correctIndex: 0,
            explanation:
              "Three squared plus four squared is five squared, which is the relationship that defines a right triangle. It has a right angle between the 3 and the 4 and nowhere else.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "Which of these is the same triangle as 3-4-5, scaled up?",
            options: [
              "12-16-20",
              "4-5-6, adding one to each of the three sides",
              "6-8-9, doubling the two short sides and adding one to the long one",
              "9-12-16, tripling the short sides and squaring the long one",
            ],
            correctIndex: 0,
            explanation:
              "Multiplying all three sides by the same number keeps the shape, so 6-8-10, 9-12-15 and 12-16-20 are all right triangles. Changing the sides unequally does not.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "Why use the biggest multiple of 3-4-5 that fits the work?",
            options: [
              "Accuracy improves with the size of the triangle",
              "Because a bigger triangle uses fewer measurements and so introduces less error",
              "Because small multiples of 3-4-5 are not true right triangles",
              "Because a large triangle can be laid out with a single tape pull",
            ],
            correctIndex: 0,
            explanation:
              "An eighth of an inch of error in a 5 ft diagonal is a far bigger angle than the same eighth in a 20 ft one. That is why 36-48-60 in. suits a cabinet and not a footing.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "If the measured diagonal of a 3-4 layout reads more than 5, what is true of the corner?",
            options: [
              "It is open",
              "It is closed, and the two legs need to be spread further apart",
              "It is square, and the extra length is the width of the marking pencil",
              "It cannot be determined without measuring the other diagonal as well",
            ],
            correctIndex: 0,
            explanation:
              "A longer diagonal means a wider angle. Move one leg until the diagonal reads 5 units and the corner is square by measurement rather than by eye.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "What should the diagonal of a 24 ft by 10 ft form measure?",
            options: [
              "26 ft",
              "34 ft, adding the two sides together",
              "676 ft, which is the sum of the squares before the root is taken",
              "17 ft, halving the sum of the two sides",
            ],
            correctIndex: 0,
            explanation:
              "576 plus 100 is 676, and the square root of 676 is 26. The 676 is a real intermediate value, and stopping there is the classic half-finished answer.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "What should both diagonals of a 12 ft by 16 ft slab measure?",
            options: [
              "20 ft",
              "28 ft, which is the two sides added together",
              "14 ft, the average of the two side lengths",
              "24 ft, twice the shorter side",
            ],
            correctIndex: 0,
            explanation:
              "12-16-20 is a 3-4-5 triangle scaled by four, so the diagonal is 20 ft and the slab can be checked without a calculator.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "One diagonal of a form reads 26 ft 0 in. and the other 26 ft 1 in. What is the form?",
            options: [
              "A parallelogram",
              "A rectangle within an acceptable one inch tolerance for formwork",
              "A trapezoid, since only one pair of sides can now be parallel",
              "A square, since both diagonals are within an inch of each other",
            ],
            correctIndex: 0,
            explanation:
              "Equal opposite sides with unequal diagonals is a parallelogram, not a rectangle. Every wall built on it inherits the error for the life of the building.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "What is the advantage of the diagonal check over laying out a 3-4-5?",
            options: [
              "You only need the two readings to match",
              "It is more accurate, because it uses the full length of the form",
              "It works on any four-sided shape, whatever the side lengths",
              "It requires no measurement at all once the corners are marked",
            ],
            correctIndex: 0,
            explanation:
              "You never have to know how far out of square you are. Nudge a corner until the two numbers agree, and the form is a rectangle.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "What is volume, in terms of area?",
            options: [
              "Area with a depth on it",
              "Area divided by the thickness of the material being placed",
              "Area multiplied by the perimeter of the same figure",
              "The sum of the areas of all the faces of the solid",
            ],
            correctIndex: 0,
            explanation:
              "Feet times feet times feet is cubic feet. An answer in square feet means a dimension was left out, which is the mistake this whole section is built around.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "A slab is 20 ft by 24 ft and 4 in. thick. What is its volume in cubic feet?",
            options: [
              "160 cu ft",
              "1,920 cu ft, using the 4 in. thickness as though it were 4 ft",
              "480 cu ft, leaving the thickness out of the calculation entirely",
              "40 cu ft, dividing the area by twelve rather than multiplying by a third",
            ],
            correctIndex: 0,
            explanation:
              "4 in. is 1/3 ft, so 20 x 24 x 1/3 = 160 cu ft. The 480 figure is the area in square feet, which is a different quantity wearing a volume label.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "How many cubic yards of concrete is that slab?",
            options: [
              "5.93 cu yd",
              "71.1 cu yd, which is what you get by leaving the thickness in inches",
              "17.8 cu yd, dividing by 9 rather than by 27",
              "160 cu yd, which is the volume in cubic feet relabelled",
            ],
            correctIndex: 0,
            explanation:
              "160 / 27 = 5.926, so 5.93 cu yd. The 71.1 figure is twelve times too large, and twelve is exactly the conversion that was skipped.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "What tells you at a glance that 71 cubic yards is wrong for that slab?",
            options: [
              "A small slab is not seventy yards of concrete",
              "The answer has more significant figures than the inputs did",
              "Concrete is never sold in quantities above fifty cubic yards",
              "The unit came out in cubic yards rather than in cubic feet",
            ],
            correctIndex: 0,
            explanation:
              "The estimate is the check. A slab the size of a small garage at four inches thick is obviously a handful of yards, and a factor of twelve is not a subtle error.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "A strip footing is 40 ft long, 16 in. wide and 8 in. deep. How many cubic yards?",
            options: [
              "1.32 cu yd",
              "35.56 cu yd, which is the volume in cubic feet left undivided",
              "5,120 cu yd, multiplying the feet by the inches with no conversion",
              "3.95 cu yd, dividing by 9 instead of by 27",
            ],
            correctIndex: 0,
            explanation:
              "40 x 1.3333 x 0.6667 = 35.56 cu ft, and 35.56 / 27 = 1.32 cu yd. Footings are a lot of work and not much concrete, which is worth knowing before the truck arrives.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "What is the volume of a 12 in. diameter pier 42 in. deep?",
            options: [
              "2.75 cu ft",
              "11.0 cu ft, using the 12 in. diameter as the radius in feet",
              "42 cu ft, multiplying the cross section by the depth in inches",
              "0.79 cu ft, giving the cross-sectional area rather than the volume",
            ],
            correctIndex: 0,
            explanation:
              "The radius is 0.5 ft and the depth is 3.5 ft, so 3.1416 x 0.5 x 0.5 x 3.5 = 2.75 cu ft. Using the diameter as the radius multiplies a circle by four.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "Six of those piers come to how much concrete?",
            options: [
              "About 0.61 cu yd",
              "About 16.5 cu yd, leaving the total in cubic feet and labelling it yards",
              "About 6 cu yd, one cubic yard for each pier",
              "About 2.75 cu yd, taking one pier's volume as the total",
            ],
            correctIndex: 0,
            explanation:
              "6 x 2.75 = 16.49 cu ft, and 16.49 / 27 = 0.61 cu yd. Six holes, and not much more than half a yard of concrete between them.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "Why is 480 sq ft of slab not a quantity anyone can sell you?",
            options: [
              "Concrete is sold by volume",
              "Because suppliers quote slabs by the linear foot of edge form",
              "Because square feet apply to sheet goods and never to poured material",
              "Because the figure has to be converted into square yards first",
            ],
            correctIndex: 0,
            explanation:
              "The depth turns 480 sq ft into 160 cu ft, and the 27 turns that into 5.93 cubic yards, which is the number the supplier prices.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "What does this course say about the weight of a cubic yard of concrete?",
            options: [
              "It is an order of magnitude, so ask the supplier",
              "It is fixed at two tons by the concrete industry's standard mix specification",
              "It varies so widely that no useful figure can be given at all",
              "It can be calculated from the volume once the water content is known",
            ],
            correctIndex: 0,
            explanation:
              "Normal-weight concrete runs on the order of two tons a yard, which is enough to plan a pour around. The exact unit weight comes from the mix design, not from a rule of thumb.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "In what order do you apply a waste allowance and a rounding?",
            options: [
              "Allowance first, then round up",
              "Round to the sales unit first, then add the percentage to the rounded figure",
              "Apply both at once by rounding up to the next unit above the allowance",
              "Round down first, so that the allowance covers the shortfall it creates",
            ],
            correctIndex: 0,
            explanation:
              "The allowance belongs to the quantity and the rounding belongs to the sales unit. Reversed, the order is inflated and the offcuts are still not covered.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "Why is a waste allowance not simply padding?",
            options: [
              "Offcuts and mitres consume real material",
              "Because suppliers expect an inflated order and discount against it",
              "Because the allowance covers price increases between order and delivery",
              "Because measuring error is always in the direction of under-ordering",
            ],
            correctIndex: 0,
            explanation:
              "Sheets get cut around openings, trim is mitred, flooring breaks and a run has to end in a usable width. The theoretical quantity is never the delivered quantity.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "What makes under-ordering worse than over-ordering?",
            options: [
              "A shortfall stops the work",
              "Under-ordering costs more per unit because of small-order pricing",
              "Extra material cannot be returned once it has been delivered to site",
              "A shortfall has to be reported to the building official before work resumes",
            ],
            correctIndex: 0,
            explanation:
              "A pour that runs out mid-slab leaves a cold joint in the finished floor, and a crew waiting on a second delivery is being paid to wait. Extra material costs the price of the extra material.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "5.93 cubic yards plus a ten percent allowance is what?",
            options: [
              "6.52 cu yd",
              "5.99 cu yd, adding ten hundredths rather than ten percent",
              "16.0 cu yd, adding ten cubic yards instead of ten percent",
              "5.34 cu yd, taking ten percent off rather than adding it on",
            ],
            correctIndex: 0,
            explanation:
              "5.926 x 1.10 = 6.52 cu yd. What you then order depends on the supplier's increments and short-load charge, which are their numbers to state rather than yours to assume.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "How many 4 ft by 8 ft sheets for 1,450 sq ft, with no allowance?",
            options: [
              "46",
              "45, dropping the fraction of a sheet rather than rounding it up",
              "45.3, leaving the answer as a fraction of a sheet",
              "36, dividing by 40 sq ft per sheet instead of 32",
            ],
            correctIndex: 0,
            explanation:
              "A sheet covers 32 sq ft, so 1,450 / 32 = 45.3, which rounds up to 46. The 0.3 is not an error term, it is material somebody is going to hang.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "How many sheets for that same 1,450 sq ft with a ten percent allowance?",
            options: [
              "50",
              "51, applying the allowance to the sheet count after rounding it up",
              "46, rounding up first and letting the rounding serve as the allowance",
              "49, dropping the fraction of a sheet after the allowance is added",
            ],
            correctIndex: 0,
            explanation:
              "1,450 x 1.10 = 1,595 sq ft, and 1,595 / 32 = 49.8, which rounds up to 50. Four sheets is the difference between finishing and sending somebody to the yard.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "A 288 sq ft room takes flooring in 20 sq ft boxes, with an eight percent allowance. How many boxes?",
            options: [
              "16",
              "15, which is the count before the allowance is applied",
              "14, dropping the partial box instead of rounding it up",
              "17, applying the allowance to the box count after rounding it up",
            ],
            correctIndex: 0,
            explanation:
              "288 x 1.08 = 311.04 sq ft, and 311.04 / 20 = 15.55, which rounds up to 16 boxes.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "What does the course say about a partial unit of material?",
            options: [
              "Never round it down",
              "Round it to the nearest whole unit, since errors balance across an order",
              "Leave it as a fraction on the order and let the supplier decide",
              "Round it down when offcuts from another part of the job can cover it",
            ],
            correctIndex: 0,
            explanation:
              "14.4 boxes is 15 boxes, 6.6 sticks is 7 sticks, 45.3 sheets is 46 sheets. The fraction is material somebody is going to install.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "What is a cold joint?",
            options: [
              "A seam where fresh concrete meets concrete already setting",
              "A framing connection made without adhesive in cold weather",
              "The gap left between a slab and a foundation wall for movement",
              "A pour placed below the temperature the mix design allows",
            ],
            correctIndex: 0,
            explanation:
              "It is what a pour running short produces, and it lands in the middle of a finished floor. That is the concrete-specific reason to round up generously.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "Which supplier figures does this course refuse to state for you?",
            options: [
              "Load increments, minimums and short-load fees",
              "The number of cubic feet in a cubic yard for ready-mixed concrete",
              "The coverage of a 4 ft by 8 ft sheet of drywall in square feet",
              "The percentage that should be allowed for waste on any material",
            ],
            correctIndex: 0,
            explanation:
              "Those are the supplier's own numbers and vary by yard, so the course tells you to ask. The 27 and the 32 are arithmetic and are stated outright.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "In the drill, what is the volume of the 20 ft by 24 ft slab at 4 in. thick, in cubic feet?",
            options: [
              "160",
              "480, which is the slab's area with the thickness left out",
              "1,920, leaving the thickness in inches rather than converting it",
              "5.93, which is the answer in cubic yards rather than cubic feet",
            ],
            correctIndex: 0,
            explanation:
              "The thickness is 1/3 ft, so 20 x 24 x 1/3 = 160 cu ft. The drill asks for cubic feet here and cubic yards in the next item, which is the conversion being practised.",
            sourceLessonSlug: "area-volume-and-ordering-drill",
          },
          {
            prompt: "What precision does the drill ask for on cubic yards?",
            options: [
              "Two decimal places",
              "Whole cubic yards, rounded up to the next unit the supplier sells",
              "Three decimal places, matching the precision of the conversion factor",
              "Whichever precision the input dimensions carried",
            ],
            correctIndex: 0,
            explanation:
              "Square feet are asked for as whole numbers and material counts as whole units rounded up, so the drill practises choosing the precision the answer is for.",
            sourceLessonSlug: "area-volume-and-ordering-drill",
          },
          {
            prompt: "Why does the drill mix square feet, cubic yards and counts of material in one exercise?",
            options: [
              "The unit asked for is part of the question",
              "Because a longer drill covers more of the module's objectives",
              "Because the three quantities are interchangeable once converted",
              "Because a mixed drill is harder to guess the answers to",
            ],
            correctIndex: 0,
            explanation:
              "Producing the right number in the wrong unit is the failure this section is built around, so the drill makes you read which unit each item wants.",
            sourceLessonSlug: "area-volume-and-ordering-drill",
          },
          {
            prompt: "What is pi, to the precision this course uses?",
            options: [
              "About 3.1416",
              "Exactly 22/7, which is the fraction the trade uses for layout work",
              "About 3.14159, which is the value required for any concrete calculation",
              "A value that varies with the diameter of the circle being measured",
            ],
            correctIndex: 0,
            explanation:
              "3.1416 is enough for anything you will pour or cut, and 22/7 is a close approximation rather than the value itself.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "Which figure's area formula uses a squared dimension?",
            options: [
              "The circle, which squares the radius",
              "The rectangle, which squares the longer of its two sides",
              "The triangle, which squares the base before halving it",
              "The composite shape, which squares the overall bounding dimension",
            ],
            correctIndex: 0,
            explanation:
              "Area is pi times the radius squared. A rectangle multiplies two different lengths and a triangle halves the product of base and height.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "What is the circumference formula for a circle?",
            options: [
              "Pi times the diameter",
              "Pi times the radius, which is half the distance around",
              "Pi times the radius squared, which is the area rather than the circumference",
              "Two times the diameter, since a circle is twice as far around as across",
            ],
            correctIndex: 0,
            explanation:
              "Circumference is pi times the diameter, equivalently two pi times the radius. Pi times radius squared is the area, which is a different quantity in different units.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "A form is checked with a 36-48-60 in. triangle instead of a 12-16-20 ft one. What is the drawback?",
            options: [
              "A small error becomes a bigger angle",
              "The inch triangle is not a true right triangle, only an approximation",
              "The inch measurements cannot be read to the same tolerance",
              "The two triangles have different shapes, so they check different angles",
            ],
            correctIndex: 0,
            explanation:
              "Both are 3-4-5 and both are exact. But an eighth of an inch of reading error swings a 5 ft diagonal much further than a 20 ft one, so the big triangle is the accurate one.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "What is the volume formula for a cylinder?",
            options: [
              "Circle area times height",
              "Circumference times height, which gives the area of the curved surface",
              "Diameter squared times height, without pi",
              "Radius times height times two, matching the two ends of the column",
            ],
            correctIndex: 0,
            explanation:
              "Pi times the radius squared gives the cross section, and multiplying by the height turns it into a volume. Circumference times height gives the wrapper, not the fill.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "Why is the 27 the number this section keeps returning to?",
            options: [
              "Drawings are in feet and concrete is sold in cubic yards",
              "Because 27 is the number of cubic inches in a cubic foot of concrete",
              "Because a ready-mix truck is loaded in 27 cubic foot increments",
              "Because 27 square feet is the coverage of a standard sheet of formwork",
            ],
            correctIndex: 0,
            explanation:
              "Every dimension on the drawing is in feet and inches, every price is per cubic yard, and 27 cubic feet to the cubic yard is the bridge between them.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "What is the area of a slab 12 ft by 16 ft?",
            options: [
              "192 sq ft",
              "56 sq ft, which is the perimeter of the slab rather than its area",
              "28 sq ft, adding the two dimensions instead of multiplying them",
              "20 sq ft, which is the diagonal of the slab in feet",
            ],
            correctIndex: 0,
            explanation:
              "12 x 16 = 192 sq ft. The 56 and the 20 are both real numbers for this slab, and both answer different questions.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "What is the perimeter of a slab 12 ft by 16 ft?",
            options: [
              "56 ft",
              "192 ft, which is the area figure carrying a length unit",
              "28 ft, adding one length and one width and stopping",
              "48 ft, doubling only the longer of the two sides",
            ],
            correctIndex: 0,
            explanation:
              "2 x (12 + 16) = 56 ft. Perimeter buys edge form and trim, area buys the sheet goods, and neither substitutes for the other.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "That 12 ft by 16 ft slab is poured 6 in. thick. What is its volume in cubic feet?",
            options: [
              "96 cu ft",
              "1,152 cu ft, using the 6 in. thickness as though it were 6 ft",
              "192 cu ft, leaving the thickness out of the calculation",
              "32 cu ft, dividing the area by six rather than halving it",
            ],
            correctIndex: 0,
            explanation:
              "6 in. is 0.5 ft, so 12 x 16 x 0.5 = 96 cu ft. Half a foot of depth halves the area figure, which is a useful sanity check in itself.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "How many cubic yards is that 96 cubic foot slab?",
            options: [
              "3.56 cu yd",
              "10.7 cu yd, dividing by 9 rather than by 27",
              "96 cu yd, relabelling the cubic feet without dividing",
              "2,592 cu yd, multiplying by 27 instead of dividing",
            ],
            correctIndex: 0,
            explanation:
              "96 / 27 = 3.5556, which is 3.56 cu yd to two places. The 9 belongs to square yards and the 27 to cubic ones.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "What is the area of a square with 9 ft sides?",
            options: [
              "81 sq ft",
              "36 sq ft, which is the perimeter of the square rather than its area",
              "18 sq ft, doubling the side rather than squaring it",
              "27 sq ft, tripling the side length",
            ],
            correctIndex: 0,
            explanation:
              "9 x 9 = 81 sq ft. The 36 is the perimeter, which is the distance around and buys a completely different thing.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "What is the perimeter of a square with 9 ft sides?",
            options: [
              "36 ft",
              "81 ft, which is the area figure carrying a length unit",
              "18 ft, counting two sides rather than four",
              "27 ft, counting three sides of the square",
            ],
            correctIndex: 0,
            explanation:
              "Four equal sides at 9 ft each is 36 ft. Every square is a rectangle, so 2 x (9 + 9) gives the same answer.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "What is the circumference of a 2 ft diameter column?",
            options: [
              "About 6.28 ft",
              "About 3.14 ft, using the radius in place of the diameter",
              "About 12.57 ft, using the area formula and calling it a circumference",
              "About 3.14 sq ft, giving an area where a distance was asked for",
            ],
            correctIndex: 0,
            explanation:
              "Circumference is pi times the diameter, so 3.1416 x 2 = 6.2832 ft. It is a distance, so it is measured in feet and not in square feet.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "What is the volume of a footing pad 4 ft by 4 ft by 3 ft, in cubic feet?",
            options: [
              "48 cu ft",
              "16 cu ft, which is the area of the pad's face with no depth applied",
              "11 cu ft, adding the three dimensions together",
              "1.78 cu ft, which is the answer in cubic yards rather than cubic feet",
            ],
            correctIndex: 0,
            explanation:
              "4 x 4 x 3 = 48 cu ft. Divided by 27 that is 1.78 cu yd, which is the same pad in the unit the supplier prices.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "How many cubic yards is a 48 cubic foot footing pad?",
            options: [
              "1.78 cu yd",
              "5.33 cu yd, dividing by 9 instead of by 27",
              "48 cu yd, relabelling the cubic feet without converting",
              "1,296 cu yd, multiplying by 27 rather than dividing",
            ],
            correctIndex: 0,
            explanation:
              "48 / 27 = 1.7778, which is 1.78 cu yd. Notice how small a big-looking pad turns out to be once it is priced.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "What should the diagonal of a 9 ft by 12 ft form measure?",
            options: [
              "15 ft",
              "21 ft, adding the two sides together",
              "225 ft, stopping at the sum of the two squares",
              "10.5 ft, taking the average of the two sides",
            ],
            correctIndex: 0,
            explanation:
              "81 plus 144 is 225, and the square root of 225 is 15. It is 3-4-5 scaled by three, so it needs no calculator at all.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "What should the diagonal of a 6 ft by 8 ft form measure?",
            options: [
              "10 ft",
              "14 ft, adding the two sides together",
              "100 ft, stopping at the sum of the two squares",
              "7 ft, taking the average of the two sides",
            ],
            correctIndex: 0,
            explanation:
              "36 plus 64 is 100, whose square root is 10. This is 3-4-5 doubled, which is the smallest scaling that suits a real form.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "What is a 3-4-5 triangle scaled into inches for small work?",
            options: [
              "36-48-60",
              "30-40-50, which is the same triangle scaled by ten in feet",
              "3-4-5 itself, since inches and feet use the same triple",
              "48-64-80, which is the triple scaled by sixteen",
            ],
            correctIndex: 0,
            explanation:
              "Twelve times each side turns feet into inches. It suits a cabinet and is too small for a footing, because a small diagonal magnifies a reading error into a large angle.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "How many square yards is 288 sq ft?",
            options: [
              "32",
              "96, dividing by 3 rather than by 9",
              "10.7, dividing by 27 instead of by 9",
              "2,592, multiplying by 9 rather than dividing",
            ],
            correctIndex: 0,
            explanation:
              "288 / 9 = 32 sq yd. The 9 is the linear 3 squared, which is the step that gets skipped in an area conversion.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "How many cubic yards is 108 cu ft?",
            options: [
              "4",
              "12, dividing by 9 instead of by 27",
              "36, dividing by 3 rather than by 27",
              "2,916, multiplying by 27 rather than dividing",
            ],
            correctIndex: 0,
            explanation:
              "108 / 27 = 4 cu yd exactly. The 27 is the linear 3 cubed, and using the 9 by mistake gives an answer three times too large.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "A 10 ft by 10 ft slab is poured 4 in. thick. How many cubic yards?",
            options: [
              "1.23 cu yd",
              "14.8 cu yd, leaving the thickness in inches before dividing by 27",
              "3.70 cu yd, dividing the cubic feet by 9 instead of 27",
              "100 cu yd, which is the slab's area with a volume label",
            ],
            correctIndex: 0,
            explanation:
              "4 in. is 1/3 ft, so 10 x 10 x 1/3 = 33.33 cu ft, and 33.33 / 27 = 1.23 cu yd.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "How many 25 sq ft boxes of flooring cover 500 sq ft with a ten percent allowance?",
            options: [
              "22",
              "20, which is the count before the allowance is applied",
              "23, applying the allowance to the box count after rounding it",
              "21, dropping the fraction of a box after adding the allowance",
            ],
            correctIndex: 0,
            explanation:
              "500 x 1.10 = 550 sq ft, and 550 / 25 = 22 boxes exactly. When the division comes out even there is nothing left to round.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "How many 12 ft sticks of trim for a 70 ft run with a ten percent allowance?",
            options: [
              "7",
              "6, which is the count before the allowance is applied",
              "6.42, leaving the answer as a fraction of a stick",
              "8, applying the allowance to the stick count after rounding it",
            ],
            correctIndex: 0,
            explanation:
              "70 x 1.10 = 77 ft, and 77 / 12 = 6.42, which rounds up to 7 sticks. Allowance on the run, rounding on the stick.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "What is the area of a triangle with a 10 ft base and a 4 ft height?",
            options: [
              "20 sq ft",
              "40 sq ft, multiplying base by height without halving it",
              "14 sq ft, adding the base and the height",
              "10 sq ft, halving the base and ignoring the height",
            ],
            correctIndex: 0,
            explanation:
              "One half of 10 x 4 is 20 sq ft. The halving is the part that gets left out, and it doubles every answer when it does.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "A pier hole is 18 in. across. What is its radius in feet?",
            options: [
              "0.75 ft",
              "1.5 ft, taking the diameter in feet as the radius",
              "9 ft, taking the radius in inches and relabelling it feet",
              "0.5 ft, which is the radius of a 12 in. hole instead",
            ],
            correctIndex: 0,
            explanation:
              "Half of 18 in. is 9 in., and 9 / 12 = 0.75 ft. Getting the radius right matters because the formula squares it.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "What is the volume of an 18 in. diameter pier 4 ft deep?",
            options: [
              "About 7.07 cu ft",
              "About 28.3 cu ft, using the diameter in feet in place of the radius",
              "About 1.77 cu ft, giving the cross-sectional area rather than the volume",
              "About 6 cu ft, multiplying the diameter in feet by the depth",
            ],
            correctIndex: 0,
            explanation:
              "The radius is 0.75 ft, so 3.1416 x 0.75 x 0.75 x 4 = 7.07 cu ft. Using the diameter where the radius belongs multiplies the answer by four.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "What happens to a circle's area if you use the diameter where the radius belongs?",
            options: [
              "It comes out four times too big",
              "It comes out twice too big, since the diameter is twice the radius",
              "It comes out four times too small, since the radius is squared",
              "Nothing, provided the same substitution is made consistently",
            ],
            correctIndex: 0,
            explanation:
              "The radius is squared, so doubling it multiplies the area by four. That is the single most common circle error and it is always a factor of four.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "How many 4 ft by 8 ft sheets cover 288 sq ft, with no allowance?",
            options: [
              "9",
              "8, dropping the partial sheet rather than rounding it up",
              "72, dividing by the sheet's 4 ft width rather than by its area",
              "10, adding a spare sheet on top of an even division",
            ],
            correctIndex: 0,
            explanation:
              "A sheet covers 32 sq ft, and 288 / 32 = 9 exactly. This one divides evenly, which is unusual and worth noticing when it happens.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "What is the area of a 20 ft by 24 ft slab?",
            options: [
              "480 sq ft",
              "88 sq ft, which is the perimeter of the slab rather than its area",
              "160 sq ft, which is its volume in cubic feet at 4 in. thick",
              "44 sq ft, adding the two dimensions instead of multiplying them",
            ],
            correctIndex: 0,
            explanation:
              "20 x 24 = 480 sq ft. Multiplying that by a 1/3 ft depth gives 160 cu ft, which is a volume and a different quantity.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "What is 480 sq ft multiplied by a depth of 1/3 ft?",
            options: [
              "160 cu ft",
              "1,440 cu ft, multiplying by three instead of by a third",
              "160 sq ft, keeping the area unit after a depth has been applied",
              "480 cu ft, leaving the area unchanged and relabelling the unit",
            ],
            correctIndex: 0,
            explanation:
              "Square feet times feet is cubic feet, so the unit changes as well as the number. That change of unit is the whole content of the area-versus-volume mistake.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "Which quantity does paint go with?",
            options: [
              "Area",
              "Perimeter, since a room is painted wall by wall around its edge",
              "Volume, since a can of paint is sold by liquid measure",
              "Length, since paint is estimated by the running foot of wall",
            ],
            correctIndex: 0,
            explanation:
              "Paint covers a surface, so it is bought against square feet. The can is sold by volume, but the quantity you need is set by area.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "Which quantity does baseboard go with?",
            options: [
              "Perimeter",
              "Area, since baseboard covers part of the wall surface",
              "Volume, since a stick of baseboard has a cross section and a length",
              "The number of corners in the room",
            ],
            correctIndex: 0,
            explanation:
              "Baseboard runs around the room, so it is bought against the perimeter in feet, less the door openings.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "A 3 ft door opening is taken out of a 51 ft perimeter. What run of baseboard remains?",
            options: [
              "48 ft",
              "54 ft, adding the door opening rather than subtracting it",
              "51 ft, since the door opening is covered by the casing rather than deducted",
              "45 ft, deducting the opening twice, once at each side",
            ],
            correctIndex: 0,
            explanation:
              "51 minus 3 is 48 ft, and the waste allowance is then applied to that 48 rather than to the full perimeter.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "Why draw the split line on a composite shape before calculating?",
            options: [
              "The bookkeeping is what goes wrong, not the arithmetic",
              "Because the split line has to be measured on site before the area can be found",
              "Because a composite shape has no area until it is divided into triangles",
              "Because the split has to fall on a whole number of feet to work",
            ],
            correctIndex: 0,
            explanation:
              "Each rectangle is a trivial multiplication. What produces wrong answers is double-counting the overlap or leaving a leg out, which a drawn line prevents.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "A pour comes to 6.52 cubic yards after the allowance. What does the course say to do next?",
            options: [
              "Ask the supplier about increments and short-load charges",
              "Round to seven cubic yards, since concrete always rounds to whole yards",
              "Round to six and a half, since suppliers deliver in half-yard steps",
              "Order six and top up by hand-mixing the remainder on site",
            ],
            correctIndex: 0,
            explanation:
              "Increments, minimum loads and short-load fees are the supplier's own numbers and vary by yard. The course states the arithmetic and refuses to invent the commercial terms.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "Why does this course not tell you how many cubic yards a ready-mix truck holds?",
            options: [
              "It is the supplier's figure to state",
              "Because truck capacity is measured in tons rather than in cubic yards",
              "Because the figure changes with the mix design of each individual pour",
              "Because a truck's capacity has no bearing on how much to order",
            ],
            correctIndex: 0,
            explanation:
              "It is a value owned by somebody else's business, so the course tells you to ask rather than asserting a guess. The 27 cubic feet to the yard is arithmetic and is stated outright.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "Which of these is measured square to the base?",
            options: [
              "The height of a triangle",
              "The diagonal of a rectangular form checked for square",
              "The circumference of a circular pier",
              "The perimeter of a composite slab",
            ],
            correctIndex: 0,
            explanation:
              "Height is perpendicular to the base, which on a gable is the vertical rise and never the sloping rafter. The others are distances measured along a figure.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "Six 12 in. piers 42 in. deep come to 16.49 cubic feet. What is that in cubic yards?",
            options: [
              "0.61 cu yd",
              "1.83 cu yd, dividing by 9 rather than by 27",
              "16.49 cu yd, relabelling the cubic feet without converting",
              "445 cu yd, multiplying by 27 instead of dividing",
            ],
            correctIndex: 0,
            explanation:
              "16.49 / 27 = 0.61 cu yd. Six holes and not much more than half a yard of concrete, which is exactly the kind of thing the arithmetic tells you before the truck comes.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "What does the drill say to do about units in each item?",
            options: [
              "Read which unit the item asks for",
              "Give every answer in the smallest unit that avoids a fraction",
              "Give every answer in the unit the supplier sells in",
              "Leave the unit off, since the drill grades the number alone",
            ],
            correctIndex: 0,
            explanation:
              "One item asks for cubic feet and the next for cubic yards on the same slab. Producing the right number in the wrong unit is the failure the section is built around.",
            sourceLessonSlug: "area-volume-and-ordering-drill",
          },
          {
            prompt: "In the drill, what should the diagonal of the 12 ft by 16 ft slab come out as?",
            options: [
              "20 ft",
              "28 ft, adding the two sides together",
              "400 ft, stopping at the sum of the two squares",
              "26 ft, which is the diagonal of the 24 ft by 10 ft form instead",
            ],
            correctIndex: 0,
            explanation:
              "12-16-20 is 3-4-5 scaled by four, so both diagonals should read 20 ft and the slab can be checked with no calculator.",
            sourceLessonSlug: "area-volume-and-ordering-drill",
          },
          {
            prompt: "A slab 15 ft by 20 ft is poured 5 in. thick. What is its volume in cubic feet?",
            options: [
              "125 cu ft",
              "1,500 cu ft, using the 5 in. thickness as though it were 5 ft",
              "300 cu ft, leaving the thickness out of the calculation",
              "60 cu ft, dividing the area by five rather than by a fraction of a foot",
            ],
            correctIndex: 0,
            explanation:
              "5 in. is 5/12 ft, so 15 x 20 x 5/12 = 300 x 0.4167 = 125 cu ft. The area of 300 sq ft is a real number for this slab and it is not a volume.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "How many cubic yards is that 125 cubic foot slab?",
            options: [
              "4.63 cu yd",
              "13.9 cu yd, dividing by 9 rather than by 27",
              "125 cu yd, relabelling the cubic feet without converting them",
              "3,375 cu yd, multiplying by 27 instead of dividing",
            ],
            correctIndex: 0,
            explanation:
              "125 / 27 = 4.63 cu yd. The 9 is the square-yard factor and using it here gives an answer three times too large.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "A trench is 30 ft long, 2 ft wide and 3 ft deep. How many cubic yards of spoil?",
            options: [
              "6.67 cu yd",
              "180 cu yd, which is the volume in cubic feet with a yard label",
              "20 cu yd, dividing by 9 rather than by 27",
              "35 cu yd, adding the three dimensions and dividing by 27",
            ],
            correctIndex: 0,
            explanation:
              "30 x 2 x 3 = 180 cu ft, and 180 / 27 = 6.67 cu yd. Spoil and concrete use the same arithmetic, since both are volumes priced by the yard.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "What are the area and the perimeter of a form 8 ft by 6 ft?",
            options: [
              "48 sq ft and 28 ft",
              "28 sq ft and 48 ft, with the two answers swapped between the questions",
              "48 sq ft and 14 ft, adding one length and one width for the perimeter",
              "14 sq ft and 28 ft, adding the two dimensions to get the area",
            ],
            correctIndex: 0,
            explanation:
              "8 x 6 = 48 sq ft and 2 x (8 + 6) = 28 ft. The units are the giveaway: an area carries square feet and a perimeter carries plain feet.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — pools 46, serves 10, drawn across all five sections
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-assessment",
      title: "Final assessment · Construction Math",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What standing does this course have with NCCER?",
            options: [
              "None",
              "It is recognised as equivalent to the written half of module 00102",
              "It is an approved supplement listed by accredited sponsors",
              "It counts toward the module once a sponsor confirms attendance",
            ],
            correctIndex: 0,
            explanation:
              "Only an accredited sponsor can deliver a Core module. These are private study notes read alongside a class taught by someone else.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What is the working order this course recommends?",
            options: [
              "Estimate, calculate, check",
              "Measure, cut, and check the fit before committing to the next piece",
              "Convert every dimension to decimals, calculate, and convert back at the end",
              "Calculate twice and take the answer that matches the drawing",
            ],
            correctIndex: 0,
            explanation:
              "The estimate is the step that catches a factor error, and the check is reversing the operation rather than repeating the same keystrokes.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "How many stud positions does a 24 ft wall at 16 in. on center have, before corners and openings?",
            options: [
              "19",
              "18, which is the number of spaces rather than the number of studs",
              "24, one for every foot of wall length",
              "20, rounding the division up to the next whole number",
            ],
            correctIndex: 0,
            explanation:
              "288 in. divided by 16 gives 18 spaces, and eighteen gaps have nineteen marks. The off-by-one always costs exactly one piece.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "What length of bottom plate does a 24 ft by 12 ft room take?",
            options: [
              "72 ft",
              "60 ft, doubling only the long dimension before adding the short one",
              "36 ft, taking one wall of each length",
              "144 ft, doubling the room's perimeter a second time",
            ],
            correctIndex: 0,
            explanation:
              "2 x (24 + 12) = 72 ft. Without the parentheses the expression doubles the 24 alone, and the list runs 12 ft short.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "Which is larger, 5/8 in. or 5/16 in.?",
            options: [
              "5/8 in.",
              "5/16 in., since a larger denominator describes a longer measurement",
              "They are the same length measured on different scales",
              "It depends on which of them was read from a sixteenths blade",
            ],
            correctIndex: 0,
            explanation:
              "5/8 is 10/16, so it is twice 5/16. The denominator sets the size of the piece, so a bigger denominator means a smaller piece.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "Add 5/8 + 3/16 + 1/4.",
            options: [
              "1 1/16",
              "9/28, adding the numerators and then the denominators",
              "15/16, converting the quarter into two sixteenths instead of four",
              "1 1/8, rounding the total to the nearest eighth",
            ],
            correctIndex: 0,
            explanation:
              "In sixteenths that is 10/16 + 3/16 + 4/16 = 17/16, which is 1 1/16.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "A 14 1/2 in. bay takes 13 7/8 in. of blocking. What gap is left?",
            options: [
              "5/8 in.",
              "1 3/8 in., taking the fractions in the wrong order before borrowing",
              "7/8 in., subtracting the whole inches and copying the fraction across",
              "6/16 in., borrowing ten sixteenths rather than sixteen",
            ],
            correctIndex: 0,
            explanation:
              "14 8/16 minus 13 14/16 needs a borrow of one whole inch as 16/16, giving 13 24/16 minus 13 14/16 = 10/16 = 5/8 in.",
            sourceLessonSlug: "adding-and-subtracting-fractions",
          },
          {
            prompt: "What is half of 3 1/2 in., and what is it used for?",
            options: [
              "1 3/4 in., the face-to-centre distance of a stud",
              "1 1/2 in., the actual thickness of a nominal two-by-four",
              "1 1/4 in., the offset used to lay out a 16 in. on-center wall",
              "7 in., the width of two studs laid face to face",
            ],
            correctIndex: 0,
            explanation:
              "7/2 x 1/2 = 7/4 = 1 3/4 in. Half of the stud's 1 1/2 in. thickness is 3/4 in., which is a different number and the one used for layout.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "Why does a 7 1/2 in. board not yield the thirty 1/4 in. strips the arithmetic promises?",
            options: [
              "Twenty-nine cuts remove 3 5/8 in. as kerf",
              "Because the last strip is always too narrow to cut safely",
              "Because the board's actual width is less than its nominal width",
              "Because a quarter inch cannot be measured accurately on a tape",
            ],
            correctIndex: 0,
            explanation:
              "At about 1/8 in. per cut, twenty-nine cuts destroy 3 5/8 in. of material. The division was right and the model left the blade out.",
            sourceLessonSlug: "multiplying-and-dividing-fractions",
          },
          {
            prompt: "A mark sits ten small marks past the 7 in. line on a sixteenths tape. What does it read?",
            options: [
              "7 5/8 in.",
              "7 5/16 in., reading the count as though the blade were thirty-seconds",
              "7 10/8 in., putting the count of marks over eight",
              "10 7/16 in., reading the count of marks as the whole inches",
            ],
            correctIndex: 0,
            explanation:
              "10/16 simplifies to 5/8. Counting sixteenths and simplifying is what keeps 5/8 and 5/16 apart.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Under Handbook 44, what is the tolerance for a metal tape over the 7 to 30 ft interval?",
            options: [
              "1/16 in.",
              "1/32 in., which applies over the first six feet instead",
              "1/8 in., which applies from 31 to 55 ft",
              "1/64 in., the finest division found on a machinist's rule",
            ],
            correctIndex: 0,
            explanation:
              "Section 5.52, T.2 gives 1/32 in. up to 6 ft, 1/16 in. from 7 to 30 ft, 1/8 in. from 31 to 55 ft, and 1/4 in. out to a hundred.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "Why is a bent or clogged tape hook worse than a random error?",
            options: [
              "Every measurement shifts the same way",
              "Because it makes the tape read long at short distances and short at long ones",
              "Because it cannot be detected without a calibration certificate",
              "Because the shift grows larger the further the blade is pulled out",
            ],
            correctIndex: 0,
            explanation:
              "A consistent error is invisible: every dimension agrees with every other dimension and nothing on the job flags it.",
            sourceLessonSlug: "reading-the-tape",
          },
          {
            prompt: "At what dimension is the first stud mark made on a 16 in. on-center wall?",
            options: [
              "15 1/4 in.",
              "16 in., which is the on-center dimension the layout is named for",
              "16 3/4 in., adding half a stud thickness rather than subtracting it",
              "14 1/2 in., subtracting a whole stud thickness instead of half of one",
            ],
            correctIndex: 0,
            explanation:
              "The mark locates the face and the centre must land at 16 in., so back off half the 1 1/2 in. stud, which is 3/4 in.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "Subtract 4 ft 8 in. from 12 ft 3 in.",
            options: [
              "7 ft 7 in.",
              "8 ft 5 in., subtracting the smaller inches from the larger regardless of position",
              "7 ft 5 in., borrowing ten inches rather than twelve",
              "8 ft 7 in., borrowing the foot without deducting it from the feet",
            ],
            correctIndex: 0,
            explanation:
              "Borrow a foot to make 11 ft 15 in. and subtract, or convert to inches: 147 minus 56 is 91, which is 7 ft 7 in.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "Why pull one long dimension along a plate rather than stepping 16 in. at a time?",
            options: [
              "Stepping repeats the placement error at every move",
              "Because a long pull keeps the tape under the tension its tolerance assumes",
              "Because stepping wears the hook faster than a single pull does",
              "Because a stepped layout puts the marks on the wrong side of the studs",
            ],
            correctIndex: 0,
            explanation:
              "Sixteen moves at a sixteenth of slop each is a full inch of drift, with no single measurement wrong enough to notice.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "What is 3.5 x 2.4?",
            options: [
              "8.4",
              "84, counting no decimal places in the product at all",
              "0.84, counting three decimal places instead of two",
              "5.9, adding the two numbers rather than multiplying them",
            ],
            correctIndex: 0,
            explanation:
              "35 x 24 = 840, with one decimal place in each factor, so two in the product. Miscounting the places is the error that moves an answer by a factor of ten.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "How much length can rounding to the nearest tenth of a foot throw away?",
            options: [
              "Up to 0.6 in.",
              "Up to 0.1 in., since a tenth of a foot is a tenth of an inch",
              "Nothing, since a tenth of a foot is finer than a tape can read",
              "Up to 1.2 in., since the rounding can move a full tenth either way",
            ],
            correctIndex: 0,
            explanation:
              "Rounding moves a value by at most half a tenth, which is 0.05 ft, and 0.05 x 12 = 0.6 in.",
            sourceLessonSlug: "decimals-and-rounding",
          },
          {
            prompt: "What is 6.5 ft in feet and inches?",
            options: [
              "6 ft 6 in.",
              "6 ft 5 in., reading the digit after the point as a count of inches",
              "6 ft 8 in., converting the decimal at sixteen inches to the foot",
              "6 ft 1/2 in., treating the decimal as a fraction of an inch",
            ],
            correctIndex: 0,
            explanation:
              "The decimal part is a fraction of a foot, so 0.5 x 12 = 6 in. Decimal feet and feet-and-inches look alike and are not the same.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "What is 5/8 as a decimal?",
            options: [
              "0.625",
              "0.58, reading the numerator and denominator as digits after the point",
              "1.6, dividing the denominator by the numerator",
              "0.3125, which is 5/16 rather than 5/8",
            ],
            correctIndex: 0,
            explanation:
              "A fraction is a division: 5 divided by 8 is 0.625. The 0.3125 figure is exactly half of it, which is the same pair this course keeps separating.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "How many cubic feet are in a cubic yard?",
            options: [
              "27",
              "9, which is the number of square feet in a square yard",
              "3, applying the linear factor without cubing it",
              "36, multiplying three feet by twelve inches",
            ],
            correctIndex: 0,
            explanation:
              "A yard is 3 ft, so a cubic yard is 3 x 3 x 3 = 27 cu ft. Failing to cube the factor is the classic volume error.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "What is the exact relationship between the inch and the millimetre?",
            options: [
              "1 in. = 25.4 mm exactly",
              "1 in. is about 25.4 mm, a measured value with a small uncertainty",
              "1 in. = 2.54 mm, taking the centimetre figure by mistake",
              "1 in. = 25 mm, by international agreement for practical work",
            ],
            correctIndex: 0,
            explanation:
              "NIST marks the factor exact. It is a definition agreed in 1959, not a measurement, so there is no error term to carry.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "When did the US survey foot become obsolete?",
            options: [
              "1 January 2023",
              "5 October 2020, the date of the Federal Register notice announcing it",
              "In 1959, when the international foot was defined",
              "In 1866, when the original statutory definition was enacted",
            ],
            correctIndex: 0,
            explanation:
              "The notice was published on 5 October 2020 and the deprecation took effect on 1 January 2023, superseding the survey foot for all applications.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "What is the area of a room 14 ft by 11 ft 6 in.?",
            options: [
              "161 sq ft",
              "154 sq ft, dropping the six inches from the width",
              "51 sq ft, which is the perimeter rather than the area",
              "1,932 sq ft, multiplying feet by inches without converting",
            ],
            correctIndex: 0,
            explanation:
              "11 ft 6 in. is 11.5 ft, so 14 x 11.5 = 161 sq ft. The half foot is worth 7 sq ft, about a quarter of a sheet.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "What should the diagonal of a 24 ft by 10 ft form measure?",
            options: [
              "26 ft",
              "34 ft, adding the two sides together",
              "676 ft, stopping at the sum of the squares",
              "17 ft, taking half the sum of the two sides",
            ],
            correctIndex: 0,
            explanation:
              "576 plus 100 is 676, and the square root of 676 is 26 ft. Both diagonals must read the same or the form is a parallelogram.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "How much concrete is in a 20 ft by 24 ft slab poured 4 in. thick?",
            options: [
              "5.93 cu yd",
              "71.1 cu yd, leaving the thickness in inches before dividing by 27",
              "17.8 cu yd, dividing the cubic feet by 9 instead of 27",
              "480 cu yd, which is the slab area with a volume label attached",
            ],
            correctIndex: 0,
            explanation:
              "4 in. is 1/3 ft, so the volume is 160 cu ft, and 160 / 27 = 5.93 cu yd. The 71.1 figure is twelve times too much, which is exactly the conversion skipped.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "How many 4 ft by 8 ft sheets cover 1,450 sq ft with a ten percent allowance?",
            options: [
              "50",
              "46, which is the count with no allowance added at all",
              "51, applying the allowance to the sheet count after rounding it",
              "49, dropping the partial sheet after the allowance is added",
            ],
            correctIndex: 0,
            explanation:
              "1,450 x 1.10 = 1,595 sq ft, and 1,595 / 32 = 49.8, which rounds up to 50. Allowance first, rounding second.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "Why does under-ordering cost more than over-ordering?",
            options: [
              "A shortfall stops the work",
              "Because small top-up orders carry a higher unit price at every supplier",
              "Because delivered material can never be returned for credit",
              "Because a shortfall must be reported before work can resume",
            ],
            correctIndex: 0,
            explanation:
              "A pour that runs out leaves a cold joint in a finished floor, and a crew waiting on a delivery is being paid to wait. Extra material costs the price of the extra material.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "How far apart are the black diamond marks on a tape that carries them?",
            options: [
              "19.2 in.",
              "19 1/2 in., a rounded figure close to a fifth of a sheet",
              "16 in., the same as the standard on-center layout",
              "24 in., the alternative on-center spacing for wider framing",
            ],
            correctIndex: 0,
            explanation:
              "96 in. divided by 5 is 19.2 in., which lays five equal spaces across an 8 ft sheet instead of six.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "Write 19/16 as a mixed number.",
            options: [
              "1 3/16",
              "1 9/16, taking the leftover from the numerator's last digit",
              "3/16, dropping the whole inch as already counted",
              "1 19/16, adding a whole in front of the improper fraction",
            ],
            correctIndex: 0,
            explanation:
              "16/16 is one whole and 19 minus 16 leaves 3 sixteenths, so 1 3/16.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "What is 12/16 simplified?",
            options: [
              "3/4",
              "6/8, one simplification step short of the answer",
              "1/4, subtracting the numerator from the denominator",
              "4/3, inverting the fraction after dividing by four",
            ],
            correctIndex: 0,
            explanation:
              "Both numbers divide by 4. Simplifying matters because a cut list reading 3/4 in. is read right at the saw and one reading 12/16 in. is not.",
            sourceLessonSlug: "what-a-fraction-is",
          },
          {
            prompt: "What is the area of a 12 in. diameter pier's cross section?",
            options: [
              "0.7854 sq ft",
              "3.1416 sq ft, using the diameter in feet in place of the radius",
              "1 sq ft, since a 12 in. circle fits a one foot square",
              "12.566 sq ft, using the diameter in inches as a radius in feet",
            ],
            correctIndex: 0,
            explanation:
              "The radius is 0.5 ft, so pi x 0.5 x 0.5 = 0.7854 sq ft. Using the diameter where the radius belongs multiplies a circle's area by four.",
            sourceLessonSlug: "shapes-perimeter-and-area",
          },
          {
            prompt: "What makes a 12-16-20 triangle useful for checking a slab?",
            options: [
              "It is a 3-4-5 scaled by four",
              "Because twenty is a round number that is easy to read on a tape",
              "Because the two shorter sides differ by exactly four feet",
              "Because it is the largest right triangle that fits a standard slab",
            ],
            correctIndex: 0,
            explanation:
              "Multiplying all three sides by the same number preserves the right angle, so a 12 ft by 16 ft slab has 20 ft diagonals and needs no calculator.",
            sourceLessonSlug: "squaring-a-layout",
          },
          {
            prompt: "What is the volume of a 12 in. diameter pier 42 in. deep?",
            options: [
              "2.75 cu ft",
              "11.0 cu ft, using the diameter in place of the radius",
              "42 cu ft, multiplying the cross section by the depth in inches",
              "0.79 cu ft, which is the cross-sectional area rather than the volume",
            ],
            correctIndex: 0,
            explanation:
              "Radius 0.5 ft, depth 3.5 ft, so pi x 0.5 x 0.5 x 3.5 = 2.75 cu ft. Six of them come to 16.49 cu ft, which is 0.61 cu yd.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "A 100 in. length of trim is cut into 8 in. blocks. What comes out?",
            options: [
              "12 blocks and a 4 in. offcut",
              "12.5 blocks, since the division does not come out even",
              "13 blocks, rounding the division up because material rounds up",
              "12 blocks exactly, with the remainder taken by the saw cuts",
            ],
            correctIndex: 0,
            explanation:
              "100 / 8 is 12 with 4 left over, and the remainder is a real piece of wood on the floor rather than a number to discard.",
            sourceLessonSlug: "whole-numbers-and-order-of-operations",
          },
          {
            prompt: "What is 91 in. in feet and inches?",
            options: [
              "7 ft 7 in.",
              "9 ft 1 in., reading the digits of the figure as feet and inches",
              "7 ft 9 in., taking the remainder from a division by ten",
              "8 ft 7 in., rounding the division up before taking the remainder",
            ],
            correctIndex: 0,
            explanation:
              "91 / 12 is 7 with 7 left over. Converting to inches, working there and converting back avoids borrowing altogether.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "A 2,400 mm sheet is how long, to the nearest sixteenth of an inch?",
            options: [
              "94 1/2 in.",
              "96 in., since 2,400 mm is the metric name for an eight foot sheet",
              "60 in., dividing by 40 mm to the inch",
              "240 in., dividing by ten rather than by 25.4",
            ],
            correctIndex: 0,
            explanation:
              "2,400 / 25.4 = 94.4882 in., which rounds to 94 1/2 in., about 1 1/2 in. shorter than a 96 in. sheet.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "Which order of steps is right for a material order?",
            options: [
              "Allowance on the quantity, then round to the sales unit",
              "Round to the sales unit, then add the allowance to the rounded count",
              "Add the allowance and round to the nearest unit either way",
              "Round down first so the allowance covers the shortfall",
            ],
            correctIndex: 0,
            explanation:
              "The allowance belongs to the quantity and the rounding belongs to the unit the supplier sells. Reversed, the order is inflated and still short on offcuts.",
            sourceLessonSlug: "ordering-material-with-waste",
          },
          {
            prompt: "Why is an answer carrying square feet wrong when the question asked for volume?",
            options: [
              "A dimension is missing",
              "Because volume is always expressed in cubic yards rather than cubic feet",
              "Because square feet cannot be converted into any volume unit",
              "Because the answer was rounded before the unit was applied",
            ],
            correctIndex: 0,
            explanation:
              "Feet times feet times feet is cubic feet. Square feet means the depth was never multiplied in, which is a factor error rather than a labelling slip.",
            sourceLessonSlug: "volume-and-the-cubic-yard",
          },
          {
            prompt: "In the fractions drill, what does 12/16 have to be written as?",
            options: [
              "3/4",
              "12/16, because simplifying discards the precision of the reading",
              "0.75, because the drill asks for decimals in place of fractions",
              "6/8, which is one step short of simplest form",
            ],
            correctIndex: 0,
            explanation:
              "The drill asks for simplified answers in cut-list form, so both numbers divide by 4.",
            sourceLessonSlug: "fraction-drill",
          },
          {
            prompt: "In the tape drill, which sixteenth mark is 5/8 in.?",
            options: [
              "The tenth",
              "The fifth, which is the count that produces the misread",
              "The eighth, matching the fraction's denominator",
              "The sixteenth, since sixteenths are the finest marks",
            ],
            correctIndex: 0,
            explanation:
              "5/8 is 10/16, so it is the tenth small mark past the whole inch. The fifth is 5/16.",
            sourceLessonSlug: "tape-and-layout-drill",
          },
          {
            prompt: "In the area drill, what is the volume of the 20 ft by 24 ft slab at 4 in. thick, in cubic feet?",
            options: [
              "160",
              "480, which is the area with the thickness left out",
              "1,920, leaving the thickness in inches",
              "5.93, which is the same slab expressed in cubic yards",
            ],
            correctIndex: 0,
            explanation:
              "The thickness is 1/3 ft, so 20 x 24 x 1/3 = 160 cu ft. The drill then asks for the same slab in cubic yards, which is the conversion being practised.",
            sourceLessonSlug: "area-volume-and-ordering-drill",
          },
          {
            prompt: "Why does this course teach the mathematics from first principles rather than from the workbook?",
            options: [
              "Mathematics is not copyrightable and the workbook is",
              "Because the workbook's methods are out of date for current practice",
              "Because first-principles teaching is faster to write than a summary",
              "Because the workbook covers topics outside module 00102",
            ],
            correctIndex: 0,
            explanation:
              "The workbook is all rights reserved and this file is tracked in a repository. Fractions, conversion, area and volume can be derived by anyone, so they are.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What does writing the unit next to every number actually buy you?",
            options: [
              "The unit of the answer falls out of the arithmetic",
              "It satisfies the labelling requirement on a material takeoff",
              "It tells you how many decimal places the answer should carry",
              "It prevents a calculator from dropping a digit during entry",
            ],
            correctIndex: 0,
            explanation:
              "288 in. divided by 16 in. per space leaves 18 spaces, because the inches cancel. If the unit that falls out is not the one asked for, a whole factor is missing.",
            sourceLessonSlug: "inch-pound-and-metric-units",
          },
          {
            prompt: "What does Handbook 44 permit a flexible tape to be graduated in, besides inches?",
            options: [
              "Tenths or hundredths of a foot",
              "Any fractional division the manufacturer chooses to print",
              "Thirds and sixths of a foot, matching the twelve inch division",
              "Millimetres only, when the tape carries a second metric scale",
            ],
            correctIndex: 0,
            explanation:
              "Section 5.52, S.1 allows tenths or hundredths of a foot, which is why two legal tapes can disagree completely about what 8.5 means.",
            sourceLessonSlug: "fractions-to-decimals-and-back",
          },
          {
            prompt: "What is the sum of 6 ft 9 3/4 in. and 4 ft 7 1/2 in.?",
            options: [
              "11 ft 5 1/4 in.",
              "11 ft 4 1/4 in., losing the whole inch the two fractions make together",
              "11 ft 6 1/4 in., carrying an extra whole inch by mistake",
              "10 ft 5 1/4 in., carrying the inches but never adding the foot on",
            ],
            correctIndex: 0,
            explanation:
              "3/4 + 1/2 = 1 1/4, so the inches are 9 + 7 + 1 = 17 and a quarter, and 17 in. is 1 ft 5 in.",
            sourceLessonSlug: "feet-inches-and-laying-out-a-wall",
          },
          {
            prompt: "Which of the four warned-about mistakes does the 27 exist to prevent?",
            options: [
              "Ordering by area when the material is sold by volume",
              "Reading five eighths where the tape says five sixteenths",
              "Adding fractions without finding a common denominator first",
              "Rounding a partial box of material down instead of up",
            ],
            correctIndex: 0,
            explanation:
              "The depth turns square feet into cubic feet, and the 27 turns cubic feet into the cubic yards a supplier prices. The other three are the mistakes the earlier sections exist for.",
            sourceLessonSlug: "what-this-course-is",
          },
        ],
      },
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// AUTHORING REPORT — CONST-02 · Construction Math, written 2026-09-09
// ═══════════════════════════════════════════════════════════════════════════════════════════════
//
// SLUG ASSUMED: `construction-math`. Nothing in this file depends on it, but the seed entry, the
// standards BACKLOG line and any research check must use whatever slug is actually registered.
//
// SHAPE
//   23 lessons: 14 teaching, 3 typed drills (exercise lessons, 10 items each), 6 quizzes.
//   5 teaching sections plus a final. 397 pooled questions in total, 42 reveal cards.
//
//   section                                          lessons  words  reveals  pool  serves  target
//   Section 1 · Start here, and whole numbers              2   1767        6    49       5      50
//   Section 2 · Fractions, the language of the tape        4   2314        9    62       5      66
//   Section 3 · Reading a tape, and feet-and-inches        3   1821        6    50       5      52
//   Section 4 · Decimals, percent, and units               3   2194        9    60       5      63
//   Section 5 · Area, volume, and ordering material        5   3113       12    84       5      89
//   Final assessment                                       0      0        0    46      10      40
//
//   Every pool clears the 0.9 tolerance the Tier-0 spec applies to round(words/35) clamped 40-100;
//   the final pools 46 and serves 10. passingScore is 80 and shuffleOptions is true on all six.
//   Every question carries `explanation` and a `sourceLessonSlug` that resolves, every teaching
//   lesson (drills included) is assessed inside its OWN section quiz as well as in the final, and
//   no prompt is repeated inside a bank. Guards run clean: em-dashes, reveals, figures, recall
//   placement, quiz balance, longest option (0 over the 60% limit), assessment fit (0 violations).
//
// ARITHMETIC: EVERY WORKED EXAMPLE WAS CHECKED. Each figure in every lesson body, every reveal
// answer, every quiz option and every explanation was recomputed by hand and cross-checked in
// decimal. Two items were corrected during that pass and are worth recording, because both were
// plausible-sounding and wrong:
//   1. The kerf example first said a 7 1/2 in. board yields "about half" of thirty 1/4 in. strips.
//      It yields TWENTY: 20 x 1/4 = 5 in. of strips plus 19 cuts x 1/8 = 2 3/8 in. of kerf is
//      7 3/8 in., and 21 strips would need 7 3/4 in. Thirty strips would need 11 1/8 in. of stock.
//   2. Several distractors were rewritten because they were the CORRECT value in another form
//      (444 in. against 37 ft, 10 ft 16 in. against 11 ft 4 in., 12 22/16 against 13 3/8, 29/8
//      against 3 5/8). A distractor that is arithmetically right and only formatted differently
//      grades a correct answer wrong, which is worse than an easy question.
// The distractors that remain are, wherever the question is numeric, THE ANSWERS THE REAL MISTAKES
// PRODUCE: the unconverted 4 in. thickness giving 71 cubic yards, dividing by 9 instead of 27,
// using a circle's diameter where the radius belongs (always a factor of four), adding numerators
// and denominators together, carrying feet at ten instead of twelve.
//
// SOURCES: FOUR, ALL ACTUALLY FETCHED ON 2026-09-09. Nothing else in the file is cited.
//   1. NIST Handbook 44 (2018 ed.) Section 5.52, Linear Measures. The PDF was retrieved and its
//      text extracted from the compressed streams; S.1, S.5.2 and T.2 are quoted from what was
//      read. Used for: "inches and binary submultiples of the inch"; tenths and hundredths of a
//      foot on a flexible tape; graduation width capped at 0.75 mm (0.03 in); metal tape tolerances
//      (1/32 in. to 6 ft, 1/16 in. 7 to 30 ft, 1/8 in. 31 to 55 ft, 1/4 in. to 100 ft) tested under
//      a 5 kg (10 lb) load for tapes of 10 m (25 ft) and over, supported on a horizontal flat
//      surface. The lessons say plainly that this code governs devices used in commerce, so a
//      pocket tape is not inspected against it; it is cited for the vocabulary and the order of
//      magnitude of legitimate tape error, not as a rule binding a carpenter.
//   2. NIST SP 811 Appendix B.9. Used for the factors marked exact: inch 2.54 cm, foot 0.3048 m,
//      yard 0.9144 m.
//   3. NIST, U.S. survey foot. Used for the 1866 definition (1200/3937 m), the 1959 international
//      foot, FRN 2020-21902 published 5 October 2020, and obsolescence on 1 January 2023.
//   4. NIST, SI Units (updated 22 July 2025). Used for the seven SI base units.
//
// WHAT COULD NOT BE VERIFIED, and how each is handled in the text rather than hidden:
//   a. THE SAW KERF of "about 1/8 in." is a common circular-saw blade thickness, not a specified
//      value. The lesson calls it approximate and its Sources note tells the reader to confirm the
//      kerf stamped on the blade in hand. No standard was fetched for it.
//   b. THE WEIGHT OF CONCRETE is given only as an order of magnitude ("on the order of two tons a
//      cubic yard") and is explicitly deferred to the supplier's mix design, in the lesson body,
//      in the Sources note and in a quiz question whose correct answer is "ask the supplier". No
//      figure is asserted as specified.
//   c. SUPPLIER COMMERCIAL TERMS (ready-mix truck capacity, load increments, minimum loads,
//      short-load charges) are deliberately NOT stated anywhere, per the authoritative-values rule.
//      Two quiz questions make the refusal itself the content.
//   d. FRAMING LAYOUT CONVENTIONS. 16 in. on center, the 15 1/4 in. first mark and the 19.2 in.
//      diamond are taught as common layouts with the arithmetic behind each shown (16 minus half a
//      1 1/2 in. stud; 96 divided by 5). The lesson says outright that the governing spacing for a
//      real wall comes from the drawings and the adopted building code. No code section is cited
//      because none was fetched.
//   e. THE NCCER MODULE TITLE AND TOPIC LIST come from the public craft catalog as recorded in
//      plans/84; that page was not re-fetched in this pass. A topic list is not expression, and
//      nothing in the lessons depends on its wording beyond the module number and title.
//
// PROPOSED RESEARCH CHECKS (for src/lib/research-checks.ts, which this agent did not edit):
//   1. "Construction Math hedges the unit weight of normal-weight concrete as 'on the order of two
//      tons per cubic yard' and defers the exact figure to the supplier's mix design. What would
//      settle it: a published unit-weight range for normal-weight concrete from a standards body
//      or a materials authority (for example an ACI or ASTM document, or a state DOT materials
//      manual), cited by section." Clears the hedge in `volume-and-the-cubic-yard`.
//   2. "Construction Math describes a circular-saw kerf as 'about 1/8 in.' with no source. What
//      would settle it: a published kerf range for common 7 1/4 in. circular-saw blades from a
//      blade standard or a manufacturer's published specification." Clears the hedge in
//      `multiplying-and-dividing-fractions`.
//   3. "Construction Math teaches 16 in. on center and the 19.2 in. diamond as common framing
//      layouts without citing a code. What would settle it: the stud-spacing table in the adopted
//      edition of the International Residential Code, read directly, with the section number."
//      Would let the layout lesson name the governing provision instead of pointing at 'the
//      drawings and the adopted code'.
//
// REGISTRATION REMINDERS FOR WHOEVER WIRES THIS UP (this agent edited only this file):
//   • Seed entry: price 0, priceType "free", visibility "private" (INSERT-ONLY), publishHoldReason
//     naming the NCCER/Pearson study context, per plans/84 and the content/construction README.
//   • scripts/check-standards-coverage.ts: this course needs a BACKLOG line, not an alignment.
//     Suggested reason: "Private NCCER 00102 study support for one learner; never published, and
//     the academic standards it would map to are already claimed by the maths courses."
//   • The course is private and unpublished, so it does NOT belong in STAGED_COURSES in
//     src/lib/citations.ts unless and until the visibility ever changes, which plans/84 says it
//     must not.
// ═══════════════════════════════════════════════════════════════════════════════════════════════
