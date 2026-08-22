import type { AuthoredCourse } from "./authored-course";

// Authored "Who Gets the Credit: Black Inventors and the Machinery of Attribution"
// (Culture & History), from BAM's one-line brief plans/future-courses/Black-inventors.md
// ("research Black inventors/innovators/discoveries and highlight those that had their ideas stolen
// or not credited"). Tier 0 per docs/course-method/README.md.
//
// THE HARD JOB THIS COURSE DOES (read before editing):
// The theft-and-missing-credit angle is correct and it has a trap. The most-repeated stories in this
// genre are false (Morgan and the traffic light, Latimer and the light bulb, Carver and peanut
// butter, Drew's death) or unprovable (the "real McCoy" etymology, the Edison-sued-Woods story). A
// course that repeats them hands a reader an argument they will lose in public and discredits the
// verified record standing beside it. So the spine is the SYSTEM: what a patent required, who could
// hold one and when, assignment to employers, how names vanish into brands, and how credit is
// established. Then the verified cases with their documentation. Then a lesson that teaches the
// reader to run the check themselves.
//
// HARD RULES THIS FILE KEEPS (do not relax without BAM's editorial sign-off):
//  1. Every patent number in this course was verified before it was written. No number is asserted
//     from memory. Where a number could not be confirmed, the patent is described without one.
//  2. Widely repeated claims that do not survive checking are NAMED AND CORRECTED in Section 5,
//     with what the evidence actually says. Correcting a myth protects the reader; repeating one
//     does not.
//  3. Claims that are repeated everywhere but that this author could not verify against a primary
//     record are HEDGED in the lesson AND filed in src/lib/research-checks.ts (the Blair "colored
//     man" notation, the Edison-Woods litigation story, the 1916 Cleveland rescue counts, the
//     Gladys West recognition details). A hedge with no check is a hedge nobody will clear.
//  4. "First" claims are treated as the unresolvable category they are: race is not recorded on a
//     patent, and women frequently filed under initials.
//
// House style: `section` on every lesson; flush-left single-line `:::reveal q ||| a`; a
// `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`; a quiz per teaching
// section (pool sized by the Tier-0 density rule, serving 5, passing 80, shuffled) plus a
// 40-question final serving 10; every question carries `explanation` + `sourceLessonSlug`. Correct
// options are written SHORT and distractors long and specific.
export const WHO_GETS_THE_CREDIT_COURSE: AuthoredCourse = {
  title: "Who Gets the Credit: Black Inventors and the Machinery of Attribution",
  description:
    "Ideas get taken. Names get lost. But the interesting question is not whether that happened to Black inventors, which it plainly did, but HOW it happened, because the mechanism is a system you can learn and then use. This course teaches that system first: what a patent actually granted, who was legally permitted to hold one and when, the 1858 opinion that barred enslaved inventors and their enslavers alike, the Confederate answer to it, the assignment clause that moves a patent to an employer on the day it issues, and the several distinct ways a name disappears from work it did. Then it works through the verified cases with their documentation, patent numbers and dates included, from Thomas Jennings in 1821 to Lonnie Johnson in 1986. Then it does the thing most treatments of this subject refuse to do: it names the famous claims in this genre that do not survive checking, says what the evidence actually shows instead, and teaches you to run that check yourself in about ten minutes. A reader who can defend every claim they make is worth more to this history than a reader carrying a longer list.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — How credit is made, and the several ways it is lost
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-patent-is-and-is-not",
      title: "1 · What a patent actually is",
      section: "Section 1 · How credit is made, and how it is lost",
      body: `Almost every argument about invention credit goes wrong in the first sentence, because people assume a patent means something it does not.

**What it grants.** A patent is a limited-term right to **exclude** others from making, using, or selling the claimed invention. It is not a prize, not a certificate of originality, and not a finding that nobody else thought of it. It is a bargain: you disclose how the thing works, and in exchange the state will help you stop other people from using it for a while.

**What it requires, and why that matters here.** The first US patent act came in 1790 and was replaced in 1793. The **1836 Act** rebuilt the system, created an examining corps, and started the numbering series still in use. Crucially, an applicant had to swear an **oath** that they were the original and first inventor. Hold onto that word *oath*. In 1858 it becomes the hinge on which an entire category of people is excluded.

**Improvements, not inventions.** Most patents are for improvements to something that already exists, and their titles say so: *Improvement in Lubricators for Steam Engines*, *Process of Manufacturing Carbons*. This is the single most useful thing to know when you evaluate a claim, because the retelling almost always upgrades the verb. A patent on a better way to make a filament becomes "invented the light bulb" in three retellings, and the person who checks will find only the patent.

**Claims are the legal content.** The part of a patent that defines what is protected is the numbered **claims** at the end, not the title and not the abstract. Two patents with nearly identical titles can protect completely different things. Anyone arguing about who invented what without reading claims is arguing about titles.

**The 1836 fire.** In December 1836 a fire destroyed the Patent Office's records. Roughly ten thousand patents burned. Some were reconstructed from the holders' own copies and given numbers with an **X** suffix, which is why the earliest Black patentee on record, Thomas Jennings, carries the number 3306x. The X is not a footnote; it is a permanent marker that the original document did not survive.

**Why start here rather than with people.** Because the system decides what the record can even contain. A person barred from swearing the oath leaves no patent. A person who signs an employment agreement leaves a patent owned by someone else. A person whose work is not patentable subject matter leaves nothing at all. Each of those produces a different kind of silence, and the rest of this course is about telling them apart.

:::reveal What does a patent actually grant its holder? ||| A limited-term right to exclude others from making, using, or selling the claimed invention, in exchange for disclosing how it works. It is not a prize and not a finding that nobody else had the idea.

:::reveal Why does the word "improvement" in a patent title matter so much when checking a claim? ||| Because most patents cover improvements to existing things, and retellings upgrade the verb. A patent on a better process for making carbon filaments becomes "invented the light bulb," and anyone who checks finds only the patent.

## Vocabulary
- **Right to exclude**: what a patent grants, as opposed to a right to make something or a declaration of originality.
- **The oath**: the sworn statement of original inventorship required of applicants, which became the legal mechanism of exclusion in 1858.
- **Claims**: the numbered statements at the end of a patent that define what is legally protected. The title is not the legal content.
- **X patent**: a patent reconstructed after the December 1836 Patent Office fire, marked with an X because the original record burned.
- **1836 Act**: the statute that created patent examination and began the numbering series still in use.

## Sources
- Frye, B. L. (2018). Invention of a slave. *Syracuse Law Review, 68*. https://lawreview.syr.edu/wp-content/uploads/2018/05/Q-Frye-w-change.pdf
- Swanson, K. W. (2020). Race and selective legal memory: Reflections on Invention of a Slave. *Columbia Law Review, 120*(4). https://columbialawreview.org/content/race-and-selective-legal-memory-reflections-on-invention-of-a-slave/
- James, P. P. (1989). *The real McCoy: African-American invention and innovation, 1619-1930*. Smithsonian Institution Press.`,
    },
    {
      slug: "the-paper-trail-and-its-holes",
      title: "2 · What the record does not record",
      section: "Section 1 · How credit is made, and how it is lost",
      body: `Here is the fact that shapes this entire field, and it surprises almost everyone: **a patent does not record the inventor's race.** It never has.

**What that means in practice.** There is no list. You cannot query the patent database for Black inventors, because the database does not hold that information. Every count you have ever seen of how many patents Black Americans held in a given period is a reconstruction, built by someone matching names against other records: census returns, city directories, obituaries, trade press, correspondence, and community knowledge.

**The one systematic attempt.** Around the turn of the twentieth century a Patent Office employee named **Henry E. Baker**, himself Black, set out to compile a list. He wrote to patent attorneys and examiners asking which of their clients or applicants were Black, and assembled the results. It is the foundational source for the whole subject and it is exactly as reliable as that method sounds: it captures inventors somebody remembered and knew the race of, and misses everyone else.

**So the number is a floor, not a count.** Any figure for Black patents in the nineteenth century is a minimum consistent with the evidence found so far. That is a much weaker statement than the round numbers usually quoted, and it is the accurate one. A course that quotes a total as though someone counted it is doing the same thing the Cordoba library figure does in another catalog course.

**The asymmetry that follows.** Because attribution had to be reconstructed by hand, it went to inventors who were already visible: men with businesses, newspapers, and biographers. Domestic and agricultural inventions, and inventions by women, are systematically under-recovered, since the people making them were less likely to be known to a patent attorney willing to write back.

**Absence of evidence, and what it is not.** If you cannot find a Black inventor behind a device, that is not proof there was one and not proof there was not. This course will say **not established** a lot, and that phrase is doing real work. It marks the difference between a claim that failed a check and a question nobody has yet been able to answer, and treating those two as the same thing is how the field gets into trouble in both directions.

:::reveal Why can nobody produce a definitive count of patents held by Black inventors? ||| Because a patent does not record race and never has. Every figure is a reconstruction built by matching names against census returns, directories, obituaries, and trade press, so it is a floor rather than a count.

:::reveal What is the difference between "not established" and "false"? ||| False means a claim was checked and failed. Not established means nobody has been able to settle it either way. Collapsing the two is how this field goes wrong in both directions at once.

## Vocabulary
- **Reconstruction**: an attribution built by matching a patent name against other records, since the patent itself carries no racial information.
- **Henry E. Baker**: the Black Patent Office employee who compiled the foundational list by writing to attorneys and examiners around 1900.
- **A floor, not a count**: the correct description of any total for Black patents, since the method finds only inventors somebody remembered.
- **Recovery bias**: the tendency for reconstructed attribution to favor inventors who were already publicly visible, which under-recovers domestic and agricultural work and work by women.

## Sources
- James, P. P. (1989). *The real McCoy: African-American invention and innovation, 1619-1930*. Smithsonian Institution Press.
- Fouché, R. (2003). *Black inventors in the age of segregation: Granville T. Woods, Lewis H. Latimer, and Shelby J. Davidson*. Johns Hopkins University Press.
- Swanson, K. W. (2020). Race and selective legal memory: Reflections on Invention of a Slave. *Columbia Law Review, 120*(4). https://columbialawreview.org/content/race-and-selective-legal-memory-reflections-on-invention-of-a-slave/`,
    },
    {
      slug: "five-ways-a-name-disappears",
      title: "3 · Five ways a name disappears",
      section: "Section 1 · How credit is made, and how it is lost",
      body: `"Stolen" is one word covering at least five different mechanisms, and they call for different evidence, produce different records, and would have required different remedies. Learning to tell them apart is the skill this course is really selling.

**One: barred by law.** The inventor could not hold a patent at all. Enslaved people could not swear the required oath because they were not legal persons who could contract, and after 1858 their enslavers could not patent the work either. This mechanism leaves **no document**, which is exactly why the 1858 opinion matters so much: it is the rare case where the barrier itself was written down.

**Two: assigned to an employer.** The inventor is named on the patent and does not own it. An employment agreement transfers the rights to the company, often before the work exists. Nothing improper has happened by the law's standards, and the public still ends up remembering the corporation. This is the dominant mechanism of the twentieth century and it is not specific to race, which is precisely why it is worth understanding: it explains where almost all modern invention credit goes.

**Three: absorbed into a brand.** The patent is real, the name is on it, and the product is sold under a company name that becomes the household word. A generation later the object has a brand and no inventor. Nobody did anything wrong; the name simply stopped being attached.

**Four: published by a colleague.** In science rather than engineering, credit runs through **authorship**, not patents. Work is completed, the person who did it is unable to publish, and a colleague publishes and becomes the name attached. This is the mechanism in the Alice Ball case and in the Vivien Thomas case, and it produces the cleanest documentary evidence of the five, because the papers survive and can be read.

**Five: outside the system entirely.** Enormous categories of knowledge were never patentable: agricultural technique, foodways, navigation, medicine as practiced, building craft. Work in those areas leaves no patent because there was never a patent to leave. Absence here means nothing at all about who did the work, which is why this catalog's *Training the Colonizer* handles that terrain separately.

**Why the taxonomy is the point.** "They stole it" is emotionally accurate and analytically useless: it names a feeling, not a mechanism, so it cannot be checked and cannot be argued. "The patent issued to him and was assigned to his employer on the day it was granted" is a claim with a document behind it. The second one wins arguments.

:::reveal Which of the five mechanisms leaves NO document, and why does that make the 1858 opinion so valuable? ||| Being barred by law. An inventor who could not apply leaves no patent at all, so the 1858 opinion is the rare case where the barrier itself was written down and can be read.

:::reveal Why does mechanism four, publication by a colleague, produce the cleanest evidence? ||| Because scientific credit runs through authorship rather than patents, so the papers survive. You can read who published what and when, which is what makes the Ball and Thomas cases documentable.

## Vocabulary
- **Assignment**: the transfer of patent ownership to an employer, usually under an agreement signed before the invention exists.
- **Absorbed into a brand**: the pattern in which a real patent with a real name on it is sold under a company name that becomes the household word.
- **Authorship credit**: the currency of science, as distinct from patents, and the mechanism at work in the Ball and Thomas cases.
- **Unpatentable subject matter**: categories such as agricultural technique, foodways, and craft, whose absence from the patent record says nothing about who did the work.

## Sources
- Fouché, R. (2003). *Black inventors in the age of segregation: Granville T. Woods, Lewis H. Latimer, and Shelby J. Davidson*. Johns Hopkins University Press.
- Frye, B. L. (2018). Invention of a slave. *Syracuse Law Review, 68*. https://lawreview.syr.edu/wp-content/uploads/2018/05/Q-Frye-w-change.pdf
- James, P. P. (1989). *The real McCoy: African-American invention and innovation, 1619-1930*. Smithsonian Institution Press.`,
    },
    {
      slug: "quiz-how-credit-works",
      title: "4 · Knowledge check: how credit is made and lost",
      section: "Section 1 · How credit is made, and how it is lost",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does a patent grant?",
            options: ["A limited-term right to exclude others", "An official finding that nobody else conceived of the invention", "Ownership of the underlying idea for as long as it is in commercial use", "A government guarantee that the holder may manufacture and sell the device"],
            correctIndex: 0,
            explanation: "In exchange for disclosing how the thing works. It is a bargain, not a prize and not a certificate of originality.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "Which act created patent examination and the modern numbering series?",
            options: ["The 1836 Act", "The 1790 Act, the first patent statute Congress passed", "The 1793 Act, which replaced the original registration scheme", "The 1861 Confederate patent act, later adopted federally"],
            correctIndex: 0,
            explanation: "It also rebuilt the system around an examining corps, and its oath requirement becomes the hinge of the 1858 exclusion.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "What did an applicant have to swear under the 1836 Act?",
            options: ["That they were the original and first inventor", "That the invention had been reduced to practice and tested in public", "That no foreign patent on the same device was pending anywhere", "That they would manufacture the device within three years of the grant"],
            correctIndex: 0,
            explanation: "The oath requirement is the mechanism by which an entire category of people was excluded in 1858.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "Most patents cover what?",
            options: ["Improvements to something that already exists", "Wholly novel devices with no predecessor in the art", "Manufacturing processes rather than physical objects", "Designs and ornamental appearance rather than function"],
            correctIndex: 0,
            explanation: "Their titles usually say so, and the retelling almost always upgrades the verb from improved to invented.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "Which part of a patent defines what is legally protected?",
            options: ["The numbered claims", "The title, which is why patent titles are drafted so carefully", "The abstract, which summarizes the protected subject matter", "The drawings, since they show the embodiment being claimed"],
            correctIndex: 0,
            explanation: "Two patents with nearly identical titles can protect completely different things. Arguing without reading claims is arguing about titles.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "What happened in December 1836 besides the new act?",
            options: ["A fire destroyed the Patent Office records", "Congress opened patent eligibility to non-citizens for the first time", "The office moved to a new building and lost its examining staff", "The first patent was issued to a Black inventor under the new numbering"],
            correctIndex: 0,
            explanation: "Roughly ten thousand patents burned. Reconstructed ones carry an X suffix, which is why Jennings is 3306x.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "What does the X in patent number 3306x mean?",
            options: ["The original record burned and the patent was reconstructed", "The patent was granted to an applicant who could not sign his name", "The patent was later invalidated but the number was never reused", "The patent covered a process rather than a machine"],
            correctIndex: 0,
            explanation: "It is a permanent marker that the original document did not survive the 1836 fire, not a footnote about the inventor.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "Why does the course start with the system rather than with people?",
            options: ["The system decides what the record can contain", "Because the biographies are already well covered elsewhere", "Because patent law is more reliably documented than personal histories", "Because the inventors themselves wrote very little about their own work"],
            correctIndex: 0,
            explanation: "A person barred from the oath leaves no patent; an employee leaves one owned by someone else. Different silences, different evidence.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "What information about the inventor does a patent NOT record?",
            options: ["Race", "The date the invention was first conceived", "The inventor's place of residence at the time of filing", "Whether the patent has been assigned to another party"],
            correctIndex: 0,
            explanation: "It never has, which is why there is no list and why every count in this field is a reconstruction.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "How are Black inventors identified in the patent record?",
            options: ["By matching names against other records", "By a racial designation the Patent Office recorded until 1900", "By the examiner's notes, which survive for most nineteenth-century files", "By the attorney of record, since only a few firms served Black clients"],
            correctIndex: 0,
            explanation: "Census returns, city directories, obituaries, trade press, and community knowledge. Every total is built by hand.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "Who was Henry E. Baker?",
            options: ["A Black Patent Office employee who compiled the foundational list", "A patent attorney who represented most Black applicants of the 1890s", "A Reconstruction-era congressman who sponsored patent reform", "The examiner who denied Oscar Stuart's 1857 application"],
            correctIndex: 0,
            explanation: "Around the turn of the twentieth century he wrote to attorneys and examiners asking which applicants were Black, and assembled the results.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "What is the weakness of Baker's method?",
            options: ["It captures only inventors somebody remembered", "It relied on census records that were destroyed in a later fire", "It counted applications rather than granted patents", "It covered only the years after Reconstruction ended"],
            correctIndex: 0,
            explanation: "Attorneys and examiners had to both know the person's race and bother to write back, so everyone else is missing.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "How should any figure for nineteenth-century Black patents be described?",
            options: ["A floor, not a count", "A precise total, since the Patent Office indexed applicants by race", "An overestimate, since Baker double-counted reissued patents", "Unknowable, since no reconstruction of any kind is possible"],
            correctIndex: 0,
            explanation: "A minimum consistent with the evidence found so far, which is weaker than the round numbers usually quoted and is the accurate statement.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "Whose inventions are systematically under-recovered by this method?",
            options: ["Domestic and agricultural inventors, and women", "Inventors in the largest cities, whose records are too voluminous to search", "Inventors who assigned their patents, since assignment obscures the name", "Inventors who filed after 1900, since Baker's list stops there"],
            correctIndex: 0,
            explanation: "Reconstruction favored people who were already visible: men with businesses, newspapers, and biographers.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "What does \"not established\" mean in this course?",
            options: ["Nobody has been able to settle it either way", "The claim was checked and found to be false", "The claim is true but its documentation has been lost", "The claim is outside the scope of the patent record"],
            correctIndex: 0,
            explanation: "It is deliberately distinct from false, which means checked and failed. Collapsing the two is how the field goes wrong in both directions.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "If no Black inventor can be found behind a device, what follows?",
            options: ["Nothing either way", "That the popular attribution is a fabrication", "That the inventor was almost certainly barred from patenting", "That the invention predates the period when records were kept"],
            correctIndex: 0,
            explanation: "Absence of evidence is not proof in either direction, which is why the course uses not established as a real category.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "How many distinct mechanisms does the course separate out of the word \"stolen\"?",
            options: ["Five", "Two, legal exclusion and outright theft", "Three, one for each century covered", "Seven, one for each named case in the course"],
            correctIndex: 0,
            explanation: "Barred by law, assigned to an employer, absorbed into a brand, published by a colleague, and outside the system entirely.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "Why could enslaved people not swear the patent oath?",
            options: ["They were not legal persons who could contract", "Because the oath had to be sworn in person at the Patent Office", "Because literacy was a statutory requirement for applicants", "Because the oath required proof of residence in a free state"],
            correctIndex: 0,
            explanation: "And after 1858 their enslavers could not patent the work either, which is what makes the opinion so consequential.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "What kind of record does mechanism one, legal exclusion, leave behind?",
            options: ["None", "A rejected application file with the examiner's reasoning", "A note in the Patent Office index marking the applicant ineligible", "A separate register of barred applications kept until 1865"],
            correctIndex: 0,
            explanation: "Which is why the 1858 opinion is so valuable: it is the rare case where the barrier itself was written down and can be read.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "Under assignment, who is named on the face of the patent?",
            options: ["The inventor", "The company, with the inventor listed only in the file history", "Both parties as joint inventors, by statutory requirement", "Neither, since assigned patents issue in the assignee's name alone"],
            correctIndex: 0,
            explanation: "The inventor is named and does not own it. Nothing improper has happened by the law's standards, and the public remembers the corporation.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "Why is assignment worth understanding even though it is not race-specific?",
            options: ["It explains where most modern invention credit goes", "Because it was invented specifically to exclude Black employees", "Because it applies only to inventions made outside working hours", "Because it can be reversed by the inventor at any time"],
            correctIndex: 0,
            explanation: "It is the dominant mechanism of the twentieth century, and that generality is exactly what makes it worth learning.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "What is mechanism three?",
            options: ["The name is absorbed into a brand", "The patent lapses for non-payment and enters the public domain", "The invention is licensed abroad under a different inventor's name", "The examiner narrows the claims until the patent is worthless"],
            correctIndex: 0,
            explanation: "The patent is real and the name is on it, but the product sells under a company name that becomes the household word.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "In science rather than engineering, credit runs through what?",
            options: ["Authorship", "Patents, exactly as it does in engineering", "Institutional affiliation recorded at the time of the discovery", "Priority letters deposited with a learned society"],
            correctIndex: 0,
            explanation: "Which is the mechanism in the Alice Ball and Vivien Thomas cases, and it produces the cleanest documentary evidence of the five.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "Which mechanism leaves the best documentary evidence?",
            options: ["Publication by a colleague", "Legal exclusion, because the statute survives", "Assignment, because the agreement is filed with the patent", "Absorption into a brand, because trademark records survive"],
            correctIndex: 0,
            explanation: "The papers survive and can be read, so you can see who published what and when.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "Which categories of knowledge were never patentable?",
            options: ["Agricultural technique, foodways, navigation, and craft", "Chemical processes and pharmaceutical preparations", "Anything invented by an employee during working hours", "Improvements to existing machines rather than new machines"],
            correctIndex: 0,
            explanation: "Absence from the patent record says nothing at all about who did that work, which is why Training the Colonizer handles it separately.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "Why is \"they stole it\" analytically useless?",
            options: ["It names a feeling rather than a mechanism", "Because theft of an idea was not illegal in the nineteenth century", "Because it applies equally to all five mechanisms and so is always true", "Because courts have never recognized invention theft as a cause of action"],
            correctIndex: 0,
            explanation: "It cannot be checked and cannot be argued. A claim with a document behind it wins arguments; a claim with a feeling behind it does not.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "Which sentence does the course hold up as the strong form?",
            options: ["The patent issued to him and was assigned to his employer that day", "They took everything he made and gave him nothing", "He was the real inventor and history has forgotten him", "The company would have been nothing without his contribution"],
            correctIndex: 0,
            explanation: "It names a mechanism, a date, and a document, so a reader can check it and an opponent cannot dismiss it.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "A patent is best described as which kind of transaction?",
            options: ["Disclosure in exchange for a temporary right to exclude", "Payment in exchange for a government monopoly of unlimited duration", "Registration in exchange for immunity from infringement suits", "Assignment in exchange for a share of the state's licensing revenue"],
            correctIndex: 0,
            explanation: "The disclosure half is why patents are such good historical sources: they describe how the thing worked.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "Two patents with nearly identical titles may do what?",
            options: ["Protect completely different things", "Automatically be merged into a single grant by the examiner", "Be presumed to cover the same invention unless challenged", "Indicate that one of the two was reconstructed after a fire"],
            correctIndex: 0,
            explanation: "Because the claims, not the title, are the legal content. This is the most common source of confident error in this field.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "What does the disclosure requirement mean for historians?",
            options: ["Patents describe how the thing actually worked", "Patents record who funded the development of the invention", "Patents include the inventor's correspondence with the examiner", "Patents state the commercial value the inventor expected"],
            correctIndex: 0,
            explanation: "It is the half of the bargain that makes the patent record usable as evidence rather than merely as a list of names.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "The course compares unquoted patent totals to what other catalog example?",
            options: ["The Cordoba library volume figure", "The population estimates for medieval Toledo", "The Morisco expulsion totals under Philip III", "The size of the force that crossed into Iberia in 711"],
            correctIndex: 0,
            explanation: "Both are numbers that no surviving document could have produced, quoted as though someone counted them.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "Recovery bias in this field favors which inventors?",
            options: ["Those who were already publicly visible", "Those who patented after the 1836 numbering began", "Those who worked in cities with active Black newspapers only", "Those whose patents were assigned to large corporations"],
            correctIndex: 0,
            explanation: "Men with businesses, newspapers, and biographers, since a patent attorney had to remember them and write back.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "Why does the course insist on separating the five mechanisms?",
            options: ["Each calls for different evidence and a different remedy", "Because only two of the five are legally actionable today", "Because three of the five apply exclusively before 1865", "Because the patent office classified cases under these five headings"],
            correctIndex: 0,
            explanation: "They also produce different records, which is what lets a reader check a specific claim rather than assert a general grievance.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "An employment agreement transferring invention rights is typically signed when?",
            options: ["Before the invention exists", "At the moment the patent application is filed", "After the patent issues, as a separate negotiated sale", "Only when the employer chooses to exercise an option"],
            correctIndex: 0,
            explanation: "Which is why the transfer feels automatic and why the inventor's name on the patent buys them nothing.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "Which is a correct statement about the 1790 and 1793 acts?",
            options: ["The 1790 act came first and was replaced in 1793", "The 1793 act came first and was replaced in 1790", "Both were repealed by the Confederate patent act of 1861", "Neither required any statement of inventorship from the applicant"],
            correctIndex: 0,
            explanation: "The 1836 Act then rebuilt the system around examination and began the numbering series still in use.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "The single most useful habit when evaluating an invention claim is what?",
            options: ["Read the patent title's verb, then read the claims", "Count how many sources repeat the claim", "Check whether the inventor has a museum or a holiday", "Compare the patent's date against the product's launch date"],
            correctIndex: 0,
            explanation: "Improvement in and process of are doing precise work, and retellings replace them with invented.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "Why is there no queryable list of Black inventors?",
            options: ["The data was never collected in the patent record", "The lists were destroyed in the 1836 Patent Office fire", "Privacy law sealed the racial designations in the 1970s", "The Patent Office deleted the field when examination began"],
            correctIndex: 0,
            explanation: "A patent has never recorded race, so any list is somebody's reconstruction rather than a query result.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "Which of the five mechanisms is NOT specific to race?",
            options: ["Assignment to an employer", "Being barred from swearing the required oath", "Having a colleague publish work you completed", "Working in a field with no patentable subject matter"],
            correctIndex: 0,
            explanation: "It is how almost all modern invention credit moves, which is exactly why understanding it explains so much.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "What is the relationship between a patent and being first to invent?",
            options: ["A patent is not a finding that nobody else had the idea", "A patent is conclusive proof of first invention in every jurisdiction", "A patent proves first invention only if it survives an interference", "A patent and first invention are legally identical concepts"],
            correctIndex: 0,
            explanation: "It is a right to exclude, granted in exchange for disclosure. Treating it as a prize is the first error in most of these arguments.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "How does a patent for an improvement become a claim of invention?",
            options: ["The verb gets upgraded across retellings", "The Patent Office reclassifies it after the original patent expires", "The inventor's estate applies to have the title amended", "Trade journals of the period routinely printed the stronger claim"],
            correctIndex: 0,
            explanation: "And the person who checks finds only the patent, which is how a defensible achievement turns into an indefensible claim.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "Community knowledge appears in this field as what?",
            options: ["One of the sources used to reconstruct attribution", "A category the Patent Office recorded alongside the oath", "A legal basis for challenging an assignment", "An alternative to patents in unpatentable fields"],
            correctIndex: 0,
            explanation: "Alongside census returns, directories, obituaries, and trade press, since the patent itself gives nothing to work with.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "Which framing does the course prefer for teaching this history?",
            options: ["The system that produced the outcome", "A list of names to be memorized in order", "A comparison of totals across decades", "The biographies of the most famous inventors only"],
            correctIndex: 0,
            explanation: "Because the system is transferable: it explains cases the course never mentions, and a list does not.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "What does the course mean by different kinds of silence?",
            options: ["Different mechanisms leave different absences in the record", "Sources from different decades vary in how much they record", "Some archives are closed and others were destroyed", "Some inventors chose not to publicize their work"],
            correctIndex: 0,
            explanation: "No patent at all, a patent owned by someone else, or no patentable subject matter. Telling them apart is the whole skill.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "Fouché, James, and Swanson are cited in this section as what?",
            options: ["The scholarly literature underpinning the course", "Contemporary witnesses to the nineteenth-century patent system", "Patent attorneys who represented the inventors discussed", "Compilers of the original Patent Office lists"],
            correctIndex: 0,
            explanation: "Fouché on inventors inside industrial organizations, James on the nineteenth-century record, Swanson on the legal memory of 1858.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "What makes the patent record usable as historical evidence at all?",
            options: ["The disclosure requirement", "The requirement that inventors reside in the United States", "The examiner's obligation to record the applicant's occupation", "The rule that patents must be worked commercially within three years"],
            correctIndex: 0,
            explanation: "A patent has to explain how the thing works, so it documents technique even when it documents nothing about the person.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "The strongest reason to learn the taxonomy of five mechanisms is what?",
            options: ["It converts a grievance into a checkable claim", "It shortens the list of inventors worth studying", "It shows that four of the five were legal at the time", "It assigns each case to a century in which it belongs"],
            correctIndex: 0,
            explanation: "And a checkable claim survives contact with someone who wants to dismiss it, which is the whole point of the exercise.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "Which pairing of case and mechanism is correct?",
            options: ["Alice Ball, publication by a colleague", "Alice Ball, assignment to an employer", "Enslaved inventors, absorption into a brand", "Bell Labs researchers, exclusion from the oath"],
            correctIndex: 0,
            explanation: "Ball and Thomas both sit under authorship credit; Bell Labs researchers sit under assignment; enslaved inventors sit under legal exclusion.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "Why does the course say a shorter defensible list beats a longer one?",
            options: ["A reader who can defend every claim is worth more to the history", "Because shorter lists are easier for learners to memorize", "Because most of the longer list has been legally disproven", "Because publishers will not print claims without primary sources"],
            correctIndex: 0,
            explanation: "One hollow claim transfers doubt to everything standing beside it, including the parts that are fully documented.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "Which is true of the 1836 fire's effect on this subject specifically?",
            options: ["It is why the earliest known Black patent carries an X", "It destroyed Henry Baker's compiled list of Black inventors", "It ended the oath requirement for two decades", "It caused the Patent Office to begin recording applicants' race"],
            correctIndex: 0,
            explanation: "Thomas Jennings holds 3306x, the X marking a patent reconstructed because the original burned.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "The phrase \"not established\" is doing what work in this course?",
            options: ["Marking questions nobody has settled, as distinct from failed claims", "Signalling that a claim has been formally retracted", "Indicating that the evidence is paywalled rather than absent", "Flagging claims that belong to another course in the catalog"],
            correctIndex: 0,
            explanation: "The distinction protects the reader in both directions: against believing too much and against dismissing too much.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "What is the correct way to describe a nineteenth-century total in this field?",
            options: ["At least this many, on the evidence recovered so far", "Exactly this many, per the Patent Office index", "Approximately this many, plus or minus a stated margin", "Unknown, since no reconstruction has ever been attempted"],
            correctIndex: 0,
            explanation: "The method finds only inventors somebody remembered and knew the race of, so every figure is a floor.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "Which catalog course does this one point to for unpatentable knowledge?",
            options: ["Training the Colonizer", "Africa Before Colonization, which covers precolonial technique", "Afrocentricity, which handles contested attribution", "Pan-Africanism, which covers the political history of credit"],
            correctIndex: 0,
            explanation: "Agricultural technique, foodways, navigation, medicine as practiced, and building craft leave no patents because there were none to leave.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Who was allowed to hold a patent
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-1858-opinion",
      title: "5 · 1858: the invention of a slave",
      section: "Section 2 · Who was allowed to hold a patent",
      body: `This is the document at the center of the whole subject, and almost nobody who repeats the story has read what it actually says.

**The case.** In 1857 **Oscar J. E. Stuart**, a planter in Pike County, Mississippi, applied for a patent on a **cotton scraper**. He had not invented it. An enslaved mechanic named **Ned**, whom Stuart held, had. Stuart's application argued, in effect, that the labor of the enslaved belonged to the enslaver and so the invention did too.

**The refusal.** Commissioner of Patents **Joseph Holt** denied the application, and the question went to the Attorney General. On **10 June 1858**, Attorney General **Jeremiah S. Black** issued the opinion, brief to the point of curtness, that has come to be known as *Invention of a Slave*.

**The reasoning, which is the part that matters.** The 1836 Act required the applicant to swear an oath that he was the original and first inventor. Ned could not swear it: following *Dred Scott v. Sandford* (1857), he was not a citizen and had no standing to make such an oath. Stuart could not swear it either, for a much simpler reason: **he was not the inventor.** So the opinion produced an outcome that sounds almost absurd and was perfectly logical inside its own premises. The enslaved man could not patent his invention, and neither could the man who claimed to own him. Black added that a patent issued to the enslaver would not have protected him against infringers anyway, because it would have been void.

**Read what the exclusion does NOT say.** It is not a rule that an enslaver may patent his slaves' work. That is the version most people carry, and it is wrong in a way that matters: the actual rule made the invention **unownable by anyone**, which removed the enslaver's incentive to bring such work forward at all. The invention simply never entered the record.

**Free Black inventors.** The opinion's citizenship reasoning cast a shadow over free Black applicants too, since *Dred Scott* had denied citizenship to Black Americans generally. In practice free Black inventors continued to receive patents both before and after 1858, which is one of the reasons the period's law is best described as hostile and inconsistent rather than as a clean prohibition.

**Why this was remembered.** Kara Swanson's central argument is that the opinion was never actually forgotten. It was cited, reprinted, and argued over for more than a century by Black writers and activists as evidence of Black inventive capacity and of the law's refusal to recognize it, in publications that mainstream legal scholarship did not read (Swanson, 2020). The case was not lost; it was ignored by one audience while another kept it alive.

:::reveal Why could NEITHER Ned nor Stuart obtain the patent? ||| Ned could not swear the required oath because Dred Scott had denied him citizenship and standing. Stuart could not swear it because he was not the original and first inventor. The invention became ownable by nobody.

:::reveal What is Kara Swanson's argument about how this opinion was remembered? ||| That it was never forgotten. Black writers and activists cited and reprinted it for over a century as evidence of both inventive capacity and legal refusal, in publications mainstream legal scholarship did not read.

## Vocabulary
- **Invention of a Slave**: the Attorney General's opinion of 10 June 1858 holding that an enslaved person's invention could not be patented by anyone.
- **Jeremiah S. Black**: the Attorney General who issued that opinion.
- **Joseph Holt**: the Commissioner of Patents who denied Oscar Stuart's application before the question reached the Attorney General.
- **Dred Scott v. Sandford**: the 1857 decision denying citizenship to Black Americans, on which the 1858 opinion's oath reasoning depends.
- **Unownable**: the actual legal result, distinct from the popular version in which the enslaver takes the patent.

## Sources
- Frye, B. L. (2018). Invention of a slave. *Syracuse Law Review, 68*. https://lawreview.syr.edu/wp-content/uploads/2018/05/Q-Frye-w-change.pdf
- Swanson, K. W. (2020). Race and selective legal memory: Reflections on Invention of a Slave. *Columbia Law Review, 120*(4). https://columbialawreview.org/content/race-and-selective-legal-memory-reflections-on-invention-of-a-slave/
- James, P. P. (1989). *The real McCoy: African-American invention and innovation, 1619-1930*. Smithsonian Institution Press.`,
    },
    {
      slug: "the-confederate-answer",
      title: "6 · The Confederate answer, and what it caught",
      section: "Section 2 · Who was allowed to hold a patent",
      body: `The Confederacy noticed the 1858 problem and legislated a solution. What happened next is the most quietly devastating fact in this course.

**Benjamin Montgomery.** Before the war, an enslaved man named **Benjamin Montgomery**, held by **Joseph Emory Davis**, devised an improved boat propeller for shallow water. Joseph Davis and his younger brother **Jefferson Davis** attempted to obtain a United States patent on it. They failed, for the reasons the 1858 opinion had just laid out. Jefferson Davis went on to become president of the Confederate States.

**The 1861 act.** The Confederate patent act of 1861 provided that an enslaver could patent an invention made by a person he enslaved. It removed exactly the obstacle the Davis brothers had run into. The Confederacy also opened a patent office, headed by a former United States examiner, **Rufus Rhodes**.

**And then nothing happened.** The Confederate Patent Office issued on the order of a few hundred patents between August 1861 and March 1865, with published counts varying somewhat depending on what is included. **None of them appears to have originated with an enslaved inventor.** The law that was written specifically to capture such inventions captured none that historians have been able to identify.

**Two readings, and the course takes neither as settled.** One reading is that the provision was drafted to solve a narrow personal problem and nobody bothered to use it once the war made everything else urgent. Another is that four years is a short window, wartime record keeping was poor, and the survival of Confederate records is patchy enough that absence proves little. Both are reasonable. What is not reasonable is describing the provision as though it produced a wave of stolen patents, because no such wave appears in the record.

**After 1865.** The Thirteenth Amendment ended the legal status that had made the oath impossible, and the Fourteenth settled the citizenship question that *Dred Scott* had created. From that point the formal legal bar was gone, and everything that happened afterward ran through the other four mechanisms rather than through outright exclusion: employment agreements, capital, access to attorneys, and who got remembered.

:::reveal What did the Confederate patent act of 1861 provide, and what came of it? ||| That an enslaver could patent an invention made by a person he enslaved. Of the few hundred patents the Confederate Patent Office issued, none appears to have originated with an enslaved inventor.

:::reveal What personal history sits behind the 1861 provision? ||| Benjamin Montgomery, enslaved by Joseph Emory Davis, devised an improved shallow-water boat propeller, and Joseph and his brother Jefferson Davis failed to obtain a US patent on it. Jefferson Davis later became president of the Confederacy.

## Vocabulary
- **Benjamin Montgomery**: the enslaved inventor of an improved shallow-water boat propeller, on which the Davis brothers failed to obtain a US patent.
- **Confederate patent act of 1861**: the statute permitting an enslaver to patent an invention made by a person he enslaved.
- **Rufus Rhodes**: the former United States patent examiner who headed the Confederate Patent Office.
- **Thirteenth and Fourteenth Amendments**: the constitutional changes that removed the legal-status and citizenship barriers underlying the 1858 exclusion.

## Sources
- Frye, B. L. (2018). Invention of a slave. *Syracuse Law Review, 68*. https://lawreview.syr.edu/wp-content/uploads/2018/05/Q-Frye-w-change.pdf
- Swanson, K. W. (2020). Race and selective legal memory: Reflections on Invention of a Slave. *Columbia Law Review, 120*(4). https://columbialawreview.org/content/race-and-selective-legal-memory-reflections-on-invention-of-a-slave/
- James, P. P. (1989). *The real McCoy: African-American invention and innovation, 1619-1930*. Smithsonian Institution Press.`,
    },
    {
      slug: "free-patentees-and-the-first-problem",
      title: "7 · The free patentees, and why \"first\" cannot be settled",
      section: "Section 2 · Who was allowed to hold a patent",
      body: `Free Black Americans held patents throughout the period the 1858 opinion covers. Here are the documented ones, with their numbers, and then the reason the word *first* keeps causing trouble.

**Thomas L. Jennings, 1821.** A free-born New York tailor who developed a **dry scouring** process, an ancestor of dry cleaning. His patent, dated **3 March 1821**, carries the number **3306x**, the X marking it as reconstructed after the 1836 fire. He is conventionally described as the first Black American to hold a US patent, and the qualifier *conventionally* is load-bearing, for reasons below.

**Henry Blair, 1834.** A Maryland farmer who patented a **corn seed planter** on **14 October 1834**, patent **X8447**, and a cotton planter two years later. Blair could not write and signed with a mark. He is very widely described as the only inventor whose Patent Office record identifies him as a colored man; this course repeats that description as a widely reported claim rather than as a verified one, because the author was not able to confirm it against the Patent Office's own indexes.

**Norbert Rillieux, 1843 and 1846.** A free man of color from New Orleans, educated in France, who transformed sugar refining with **multiple-effect evaporation** under vacuum: less fuel, less labor, better sugar, and far less exposure for the enslaved workers who had previously ladled boiling cane juice by hand. Patent **3,237** in 1843 covered a double-effect evaporator; patent **4,879**, dated **10 December 1846**, covered the broader multiple-effect system. This is the strongest single technical achievement in the nineteenth-century portion of this course.

**The women, and the unresolvable question.** **Judy W. Reed** received patent **305,474** on **23 September 1884** for a dough kneader and roller, signing with an X. **Sarah E. Goode** received patent **322,177** on **14 July 1885** for a cabinet bed, and is often described as the first Black woman to sign her own patent with a full signature. Reed is frequently called the first Black woman patentee. She may not be: **Martha Jones** holds patent **77,494** from 1868 for an improvement in corn husking and shelling, and **Mary Jones De Leon** holds **140,253** from 1873 for a cooking apparatus.

**So who was first?** Nobody can say, and the reason is the one from lesson 2. Race is not on a patent. Women of the period frequently filed under initials specifically to conceal their sex. Any *first* in this field is shorthand for **the earliest example anyone has so far identified**, and it should be stated that way, because the next archival find can move it.

:::reveal Why is any claim about the "first" Black patentee provisional? ||| Because race is not recorded on a patent and women often filed under initials, so every first is shorthand for the earliest example anyone has yet identified, and the next archival find can move it.

:::reveal What did Norbert Rillieux's multiple-effect evaporator change, beyond the economics of sugar? ||| It removed the work of ladling boiling cane juice by hand, which had been done by enslaved workers under extremely dangerous conditions, while using less fuel and less labor and producing better sugar.

## Vocabulary
- **Dry scouring**: Thomas Jennings's 1821 process, an ancestor of modern dry cleaning, patented as 3306x.
- **Multiple-effect evaporation**: Rillieux's method of reusing vapor from one evaporation stage to heat the next, patented as 4,879 in 1846.
- **Filing under initials**: the period practice by which women concealed their sex on applications, one reason "first" claims cannot be settled.
- **Provisional first**: the correct framing for any earliest-known claim in a record that does not encode the category being counted.

## Sources
- James, P. P. (1989). *The real McCoy: African-American invention and innovation, 1619-1930*. Smithsonian Institution Press.
- Fouché, R. (2003). *Black inventors in the age of segregation: Granville T. Woods, Lewis H. Latimer, and Shelby J. Davidson*. Johns Hopkins University Press.
- Swanson, K. W. (2020). Race and selective legal memory: Reflections on Invention of a Slave. *Columbia Law Review, 120*(4). https://columbialawreview.org/content/race-and-selective-legal-memory-reflections-on-invention-of-a-slave/`,
    },
    {
      slug: "quiz-who-could-patent",
      title: "8 · Knowledge check: who was allowed to hold a patent",
      section: "Section 2 · Who was allowed to hold a patent",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Who applied for the cotton scraper patent in 1857?",
            options: ["Oscar J. E. Stuart", "Ned, the enslaved mechanic who had devised the machine", "Joseph Holt, in his capacity as Commissioner of Patents", "Jefferson Davis, on behalf of his brother's plantation"],
            correctIndex: 0,
            explanation: "A planter in Pike County, Mississippi, who had not invented it. Ned, whom he held, had.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "Who actually devised the cotton scraper?",
            options: ["Ned, an enslaved mechanic", "Benjamin Montgomery, on the Davis plantation", "Oscar Stuart's overseer, whose name does not survive", "An unnamed free Black machinist hired for the season"],
            correctIndex: 0,
            explanation: "Stuart's application argued that the labor of the enslaved belonged to the enslaver, so the invention did too.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "Who denied the application before it reached the Attorney General?",
            options: ["Commissioner of Patents Joseph Holt", "Attorney General Jeremiah S. Black, in a preliminary ruling", "Rufus Rhodes, then a United States patent examiner", "The Supreme Court, on appeal from the Mississippi courts"],
            correctIndex: 0,
            explanation: "Holt refused it, and the question then went up to the Attorney General for an opinion.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "Who issued the 1858 opinion, and on what date?",
            options: ["Jeremiah S. Black, 10 June 1858", "Joseph Holt, 3 March 1858, as Commissioner of Patents", "Roger Taney, 6 March 1857, in Dred Scott v. Sandford", "Rufus Rhodes, 12 August 1861, for the Confederate office"],
            correctIndex: 0,
            explanation: "The opinion is brief to the point of curtness and has come to be known as Invention of a Slave.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "Why could Ned not swear the required oath?",
            options: ["Dred Scott had denied him citizenship and standing", "Because the oath required literacy, which the law presumed he lacked", "Because he had already assigned his rights to Stuart by operation of law", "Because the 1836 Act limited applications to residents of free states"],
            correctIndex: 0,
            explanation: "The 1857 decision is what the oath reasoning in the 1858 opinion depends on.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "Why could Stuart not obtain the patent either?",
            options: ["He was not the inventor", "He had failed to file within the statutory period after the invention", "He was not a citizen of a state that permitted patent applications", "He had already licensed the device before applying, which barred the grant"],
            correctIndex: 0,
            explanation: "The oath required the applicant to be the original and first inventor, and he plainly was not.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "What did Black add about a patent issued to the enslaver?",
            options: ["It would not have protected him against infringers", "It would have been valid only within the slaveholding states", "It would have required the enslaved inventor's countersignature", "It would have expired on the death of the enslaved inventor"],
            correctIndex: 0,
            explanation: "It would have been void, so even a granted patent would have bought the enslaver nothing.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "What was the actual legal result of the 1858 opinion?",
            options: ["The invention was ownable by nobody", "Enslavers gained a clear right to patent their slaves' inventions", "Enslaved inventors could patent through a court-appointed trustee", "The Patent Office was required to record the true inventor's name"],
            correctIndex: 0,
            explanation: "Which removed the enslaver's incentive to bring such work forward at all, so the invention never entered the record.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "Which popular version of the 1858 rule is wrong?",
            options: ["That an enslaver could patent his slaves' work", "That the Commissioner of Patents refused the application", "That the opinion rested on the oath requirement", "That the reasoning depended on Dred Scott"],
            correctIndex: 0,
            explanation: "The real rule made the invention unownable, which is a materially different and more destructive outcome.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "How did the opinion affect free Black inventors in practice?",
            options: ["They continued to receive patents before and after 1858", "They were formally barred from applying until the Fourteenth Amendment", "They were required to file through a white attorney of record", "They were limited to design patents rather than utility patents"],
            correctIndex: 0,
            explanation: "Which is why the period's law is best described as hostile and inconsistent rather than as a clean prohibition.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "What is Swanson's central argument about the 1858 opinion?",
            options: ["It was never forgotten, only ignored by one audience", "It was suppressed by the Patent Office until the 1960s", "It was decided wrongly and would be reversed on modern principles", "It was rarely cited because it produced no reported litigation"],
            correctIndex: 0,
            explanation: "Black writers and activists cited and reprinted it for over a century in publications mainstream legal scholarship did not read (Swanson, 2020).",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "What did Benjamin Montgomery devise?",
            options: ["An improved shallow-water boat propeller", "A cotton scraper for use on Mississippi plantations", "A dry scouring process for cleaning fabric", "A double-effect evaporator for refining sugar"],
            correctIndex: 0,
            explanation: "Joseph Emory Davis and his brother Jefferson Davis attempted to obtain a US patent on it and failed.",
            sourceLessonSlug: "the-confederate-answer",
          },
          {
            prompt: "Who enslaved Benjamin Montgomery?",
            options: ["Joseph Emory Davis", "Oscar J. E. Stuart, of Pike County, Mississippi", "Jefferson Davis, before he entered national politics", "Rufus Rhodes, the future Confederate patent commissioner"],
            correctIndex: 0,
            explanation: "Joseph was the elder brother of Jefferson Davis, who later became president of the Confederate States.",
            sourceLessonSlug: "the-confederate-answer",
          },
          {
            prompt: "What did the Confederate patent act of 1861 provide?",
            options: ["An enslaver could patent an invention made by a person he enslaved", "Enslaved inventors could patent through their enslaver as a trustee", "All patents held by Northern inventors were void in the Confederacy", "Patents would issue without examination for the duration of the war"],
            correctIndex: 0,
            explanation: "It removed exactly the obstacle the Davis brothers had run into a few years earlier.",
            sourceLessonSlug: "the-confederate-answer",
          },
          {
            prompt: "Who headed the Confederate Patent Office?",
            options: ["Rufus Rhodes", "Joseph Holt, who had left the United States office", "Jeremiah S. Black, after leaving the Attorney General's office", "Jefferson Davis, who administered it from the executive office"],
            correctIndex: 0,
            explanation: "A former United States patent examiner. The office ran from August 1861 to March 1865.",
            sourceLessonSlug: "the-confederate-answer",
          },
          {
            prompt: "How many patents did the Confederate Patent Office issue?",
            options: ["On the order of a few hundred", "Several thousand, most of them for war materiel", "Fewer than twenty, since the office barely functioned", "None, since no examiner was ever appointed"],
            correctIndex: 0,
            explanation: "Published counts vary depending on what is included, which is why the course gives an order of magnitude rather than a figure.",
            sourceLessonSlug: "the-confederate-answer",
          },
          {
            prompt: "How many Confederate patents appear to have originated with enslaved inventors?",
            options: ["None that historians have identified", "About a dozen, all filed by Mississippi planters", "Roughly a third of the total, mostly agricultural machinery", "The records do not distinguish, so the question cannot be posed"],
            correctIndex: 0,
            explanation: "The law written specifically to capture such inventions captured none that anyone has been able to find.",
            sourceLessonSlug: "the-confederate-answer",
          },
          {
            prompt: "Which reading of that silence does the course endorse?",
            options: ["Neither, since both are reasonable", "That the provision solved a narrow personal problem and went unused", "That wartime record loss explains the absence entirely", "That the provision was repealed before any application could be filed"],
            correctIndex: 0,
            explanation: "What is not reasonable is describing the provision as producing a wave of stolen patents, because no such wave appears in the record.",
            sourceLessonSlug: "the-confederate-answer",
          },
          {
            prompt: "Which amendment removed the legal status that made the oath impossible?",
            options: ["The Thirteenth", "The Fourteenth, by conferring citizenship on the formerly enslaved", "The Fifteenth, by extending the franchise", "The Sixteenth, by reorganizing federal administrative authority"],
            correctIndex: 0,
            explanation: "The Fourteenth then settled the citizenship question that Dred Scott had created.",
            sourceLessonSlug: "the-confederate-answer",
          },
          {
            prompt: "After 1865, credit loss ran through which mechanisms?",
            options: ["Employment agreements, capital, access, and memory", "Continued statutory exclusion until the Civil Rights Act of 1964", "State laws barring Black applicants in the former Confederacy", "Patent Office practice of refusing applications without an attorney"],
            correctIndex: 0,
            explanation: "The formal legal bar was gone. The other four mechanisms from lesson 3 did the work afterward.",
            sourceLessonSlug: "the-confederate-answer",
          },
          {
            prompt: "What patent number does Thomas L. Jennings hold?",
            options: ["3306x", "X8447, issued for a corn seed planter", "305,474, issued for a dough kneader and roller", "4,879, issued for a multiple-effect evaporator"],
            correctIndex: 0,
            explanation: "Dated 3 March 1821, with the X marking it as reconstructed after the 1836 Patent Office fire.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "What did Jennings's patent cover?",
            options: ["A dry scouring process", "A machine for pressing and finishing tailored garments", "A dye-fixing preparation for wool and silk", "A steam-heated cabinet for drying cloth"],
            correctIndex: 0,
            explanation: "An ancestor of modern dry cleaning. Jennings was a free-born New York tailor.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "What did Henry Blair patent on 14 October 1834?",
            options: ["A corn seed planter", "A cotton planter, followed by a corn planter two years later", "A mechanical cotton scraper of the type Ned had devised", "A horse-drawn harrow with adjustable tines"],
            correctIndex: 0,
            explanation: "Patent X8447. He patented a cotton planter two years after that.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "How does the course treat the claim that Blair is the only inventor recorded as a colored man?",
            options: ["As widely reported rather than verified", "As confirmed against the Patent Office's own indexes", "As false, since several other such notations survive", "As irrelevant, since the notation was added in the twentieth century"],
            correctIndex: 0,
            explanation: "The author could not confirm it against the indexes, so it is flagged as a reported claim and filed as an open source check.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "How did Henry Blair sign his applications?",
            options: ["With a mark, since he could not write", "With a full signature in a clerk's hand", "With a seal registered at the county courthouse", "Through an attorney who signed on his behalf"],
            correctIndex: 0,
            explanation: "Judy W. Reed also signed her 1884 patent with an X, which is a small recurring detail worth noticing.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "Where was Norbert Rillieux from, and where was he educated?",
            options: ["New Orleans, educated in France", "Baltimore, educated at a Quaker academy in Philadelphia", "Havana, educated by Spanish engineers in Madrid", "Charleston, educated privately on the plantation where he was born"],
            correctIndex: 0,
            explanation: "A free man of color whose work transformed sugar refining across the Americas.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "Which patent number covers Rillieux's broader multiple-effect system?",
            options: ["4,879, dated 10 December 1846", "3,237, granted in 1843 for the double-effect design", "129,843, granted in 1872 for a lubricator", "3306x, reconstructed after the 1836 fire"],
            correctIndex: 0,
            explanation: "The 1843 patent 3,237 covered a double-effect evaporator; the 1846 patent covered the broader system.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "Besides fuel and labor, what did multiple-effect evaporation change?",
            options: ["It removed the hand-ladling of boiling cane juice", "It eliminated the need for enslaved labor in the cane fields", "It allowed refining to move from the tropics to northern cities", "It let planters process cane months after the harvest"],
            correctIndex: 0,
            explanation: "That work had been done by enslaved workers under extremely dangerous conditions, and it also produced better sugar.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "What did Judy W. Reed patent, and when?",
            options: ["A dough kneader and roller, 23 September 1884", "A cabinet bed, 14 July 1885, patent 322,177", "An improvement in corn husking and shelling, 1868", "A cooking apparatus, 1873, patent 140,253"],
            correctIndex: 0,
            explanation: "Patent 305,474. She signed with an X, as Henry Blair had half a century earlier.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "What is Sarah E. Goode's patent, and for what?",
            options: ["322,177, for a cabinet bed", "305,474, for a dough kneader and roller", "77,494, for a corn husker and sheller", "X8447, for a corn seed planter"],
            correctIndex: 0,
            explanation: "Dated 14 July 1885, and she is often described as the first Black woman to sign her own patent with a full signature.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "Which patents complicate the claim that Reed was the first Black woman patentee?",
            options: ["Martha Jones 77,494 in 1868 and Mary Jones De Leon 140,253 in 1873", "Sarah Goode 322,177 in 1885 and Judy Reed 305,474 in 1884", "Thomas Jennings 3306x in 1821 and Henry Blair X8447 in 1834", "Norbert Rillieux 3,237 in 1843 and 4,879 in 1846"],
            correctIndex: 0,
            explanation: "Both predate Reed's 1884 patent, which is why the earliest-known claim keeps moving.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "What did Martha Jones patent in 1868?",
            options: ["An improvement in corn husking and shelling", "A cabinet bed that folded into a desk", "A dough kneader and roller with corrugated rollers", "A cooking apparatus for institutional kitchens"],
            correctIndex: 0,
            explanation: "Patent 77,494, one of the grants that unsettles the conventional first-woman claim.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "Why did women of the period often file under initials?",
            options: ["To conceal their sex", "Because the Patent Office required abbreviated names on applications", "Because married women filed jointly with their husbands by law", "Because full names were reserved for applicants represented by attorneys"],
            correctIndex: 0,
            explanation: "Which is a second reason, alongside race not being recorded, that first claims in this field cannot be settled.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "How should a \"first\" claim in this field be stated?",
            options: ["As the earliest example anyone has so far identified", "As settled, since the patent numbering series is complete", "As unknowable, so the question should not be asked at all", "As a matter of consensus among the leading historians"],
            correctIndex: 0,
            explanation: "Because the next archival find can move it, which is what makes the provisional framing accurate rather than merely cautious.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "Which is the strongest technical achievement in this section?",
            options: ["Rillieux's multiple-effect evaporation", "Jennings's dry scouring process", "Blair's corn seed planter", "Goode's cabinet bed"],
            correctIndex: 0,
            explanation: "It changed the economics and the safety of an entire industry, and it is documented by two patents with dates and numbers.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "The 1858 opinion is unusual among the five mechanisms because it did what?",
            options: ["It wrote the barrier down", "It applied to free and enslaved inventors alike without distinction", "It was reversed within two years by a subsequent opinion", "It produced a large body of reported litigation"],
            correctIndex: 0,
            explanation: "Legal exclusion normally leaves no document, so an opinion stating the exclusion is a rare and valuable artifact.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "Jefferson Davis's connection to this history is what?",
            options: ["He tried and failed to patent Benjamin Montgomery's propeller", "He wrote the 1858 opinion as Attorney General before secession", "He served as the first Confederate commissioner of patents", "He owned Ned, the inventor of the cotton scraper"],
            correctIndex: 0,
            explanation: "With his brother Joseph, who enslaved Montgomery. Davis later became president of the Confederate States.",
            sourceLessonSlug: "the-confederate-answer",
          },
          {
            prompt: "Why does the course refuse to call the 1861 provision a source of stolen patents?",
            options: ["No such patents appear in the record", "Because the provision was never actually enacted into law", "Because the Confederacy had no authority to grant valid patents", "Because all Confederate patents were voided after the war"],
            correctIndex: 0,
            explanation: "The silence is real and its explanation is genuinely open, but inventing a wave to fill it would be the same error the course warns about.",
            sourceLessonSlug: "the-confederate-answer",
          },
          {
            prompt: "Which decision is the 1858 opinion's oath reasoning built on?",
            options: ["Dred Scott v. Sandford", "Plessy v. Ferguson, decided four decades later", "Prigg v. Pennsylvania, on the return of fugitives", "The Amistad case, on the status of captives"],
            correctIndex: 0,
            explanation: "The 1857 decision denied citizenship to Black Americans, which is what removed Ned's standing to swear the oath.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "The 1858 opinion is described as what in terms of length?",
            options: ["Brief to the point of curtness", "A lengthy treatise running to several dozen pages", "A one-line endorsement of the Commissioner's letter", "An unpublished memorandum recovered only in the 1990s"],
            correctIndex: 0,
            explanation: "Its brevity is part of why it became such a durable object of citation and argument for a century afterward.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "What year did the Confederate Patent Office operate from and to?",
            options: ["August 1861 to March 1865", "April 1861 to April 1865, for the war's full duration", "1858 to 1861, before the Confederacy was formed", "1861 to 1870, continuing under military reconstruction"],
            correctIndex: 0,
            explanation: "A short window, which is one of the two reasonable explanations for the absence of enslaved inventors from its grants.",
            sourceLessonSlug: "the-confederate-answer",
          },
          {
            prompt: "What does the phrase \"hostile and inconsistent\" describe?",
            options: ["The legal position of free Black inventors before 1865", "The Confederate Patent Office's examination standards", "The reasoning within the 1858 opinion itself", "The reception of Rillieux's patents by Louisiana planters"],
            correctIndex: 0,
            explanation: "They kept receiving patents while the citizenship reasoning of Dred Scott and the 1858 opinion hung over their eligibility.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "Which pairing of inventor and year is correct?",
            options: ["Jennings, 1821", "Blair, 1821", "Rillieux, 1834", "Reed, 1846"],
            correctIndex: 0,
            explanation: "Blair is 1834, Rillieux is 1843 and 1846, and Reed is 1884.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "What is the deeper cost of the 1858 rule, beyond the patent Ned did not get?",
            options: ["Such inventions never entered the record at all", "Enslavers began patenting under assumed names to evade it", "The Patent Office stopped examining agricultural machinery", "Free Black inventors were formally barred from applying"],
            correctIndex: 0,
            explanation: "Making the invention unownable removed anyone's incentive to bring it forward, so the mechanism erases rather than merely misattributes.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "What kind of publications kept the 1858 opinion alive?",
            options: ["Black periodicals and activist writing", "Patent Office annual reports to Congress", "Southern agricultural journals of the antebellum period", "Law school casebooks used continuously since the 1870s"],
            correctIndex: 0,
            explanation: "Mainstream legal scholarship did not read them, which is what Swanson means by selective legal memory.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "Rillieux's 1843 patent covered which design?",
            options: ["A double-effect evaporator", "The full multiple-effect system under vacuum", "A vacuum pan for crystallizing refined sugar", "A mechanical cane crusher driven by steam"],
            correctIndex: 0,
            explanation: "Patent 3,237. The broader multiple-effect claim came with patent 4,879 in December 1846.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "The word \"conventionally\" in front of Jennings's first-patentee status signals what?",
            options: ["That it is the earliest identified case, not a proven first", "That the patent's authenticity has been questioned", "That his race was recorded in the reconstructed file", "That the date is disputed between 1821 and 1834"],
            correctIndex: 0,
            explanation: "The qualifier is load-bearing for the same reason every first claim in this field is provisional.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "Which of these did NOT hold a US patent before the Civil War?",
            options: ["Ned, the cotton scraper's inventor", "Thomas L. Jennings, patent 3306x in 1821", "Henry Blair, patent X8447 in 1834", "Norbert Rillieux, patent 4,879 in 1846"],
            correctIndex: 0,
            explanation: "He could not, and neither could the man who claimed to own him. That is the entire point of the 1858 opinion.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "Rillieux's process reduced planters' costs while doing what to the workers?",
            options: ["Removing the most dangerous task in the process", "Increasing the hours required during the harvest season", "Shifting the work from the fields into the refinery", "Replacing enslaved labor with paid technicians entirely"],
            correctIndex: 0,
            explanation: "Ladling boiling cane juice by hand was the job the evaporator eliminated, and it was done by enslaved workers.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "The Confederate provision was aimed at solving whose problem, on one reading?",
            options: ["The Davis brothers' failed propeller application", "Oscar Stuart's rejected cotton scraper application", "Rufus Rhodes's dispute with the United States Patent Office", "The shortage of war materiel patents in the first year of the war"],
            correctIndex: 0,
            explanation: "The narrow-personal-problem reading is one of the two the course presents, without endorsing either.",
            sourceLessonSlug: "the-confederate-answer",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The employer, the corporation, and the vanished name
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "assignment",
      title: "9 · Assignment: the clause that moves the patent",
      section: "Section 3 · The employer, the corporation, and the vanished name",
      body: `Once the legal bar came down, the main way an inventor's name stopped meaning anything was not theft. It was contract law, working exactly as designed.

**What assignment is.** A patent is property, and property can be transferred. An **assignment** transfers ownership from the inventor to someone else. It can be sold after the fact, but the form that matters here is the **pre-invention assignment**: an employment agreement, signed on the first day of the job, under which anything the employee invents in the scope of that work belongs to the employer the moment it exists.

**What stays and what goes.** The inventor's name stays on the face of the patent permanently, because United States law requires patents to name the actual human inventors. What goes is everything else: the right to license it, the right to sue infringers, the right to sell it, and the money. A patent you are named on and do not own is a line on a resume.

**Why this is not a scandal, and why it still matters.** Nothing improper is happening. The employee is paid a salary, the employer takes the risk and the upside, and both sides agreed. But the effect on the historical record is enormous: the *company* becomes the entity the public associates with the invention, because the company is the one advertising, litigating, and licensing. A century later people say Bell, or General Electric, or IBM, and no individual name survives the sentence.

**Now add the era's constraint.** For a Black inventor in the late nineteenth and early twentieth centuries, the alternatives to employment were worse. Independent invention required capital to build prototypes, money for patent attorneys and filing fees, credit to survive the years before revenue, and the standing to be believed in a courtroom during an infringement suit. Every one of those was restricted by segregation. So the choice was frequently between assignment on an employer's terms and no patent at all, which is a constrained choice rather than a free one, and that is the honest way to describe it.

**What to look for on the document.** A patent's face often prints an assignee under or beside the inventor's name, and the phrase to search for is *assignor to*. When you see it, you have identified the mechanism immediately: the person invented it, and the company owned it from the start. That single line resolves a large share of the arguments in this field before they begin.

:::reveal Under a pre-invention assignment, what does the inventor keep and what do they lose? ||| They keep their name on the face of the patent permanently, because US law requires the actual human inventors to be named. They lose the right to license, to sue infringers, to sell, and to the money.

:::reveal Why is calling assignment a free choice inaccurate for a Black inventor of this era? ||| Because the alternative, independent invention, required capital, attorney fees, credit to survive years without revenue, and standing to be believed in an infringement suit, all of which segregation restricted. The choice was constrained, not free.

## Vocabulary
- **Assignment**: the transfer of patent ownership from the inventor to another party.
- **Pre-invention assignment**: an employment agreement transferring rights to inventions before those inventions exist.
- **Assignor to**: the phrase printed on a patent's face identifying the party the inventor assigned it to.
- **Constrained choice**: a decision made freely among options that have themselves been narrowed by conditions outside the chooser's control.

## Sources
- Fouché, R. (2003). *Black inventors in the age of segregation: Granville T. Woods, Lewis H. Latimer, and Shelby J. Davidson*. Johns Hopkins University Press.
- James, P. P. (1989). *The real McCoy: African-American invention and innovation, 1619-1930*. Smithsonian Institution Press.`,
    },
    {
      slug: "inside-the-corporation",
      title: "10 · Working inside the corporation",
      section: "Section 3 · The employer, the corporation, and the vanished name",
      body: `Rayvon Fouché's study of three Black inventors makes an argument that is uncomfortable in both directions, and it is the most useful piece of scholarship in this field.

**The argument.** The popular story of the lone genius is wrong about invention generally, and it distorts Black invention specifically. Most successful inventors of the late nineteenth and early twentieth centuries worked inside industrial organizations, and the interesting question is how a Black inventor negotiated a racially stratified professional environment while doing technical work. Fouché examines **Granville T. Woods**, an independent inventor, **Lewis H. Latimer**, a corporate engineer, and **Shelby J. Davidson**, who worked in federal government (Fouché, 2003). He explicitly sets out to replace mythologized figures with people, which means he complicates several stories readers may arrive holding.

**Latimer, the corporate case.** Latimer trained as a draftsman, drew patent drawings, worked for Hiram Maxim's electric lighting company and later for Edison's, and became one of the Edison Pioneers. He holds patents in his own name, including two covered in Section 4. He also spent his career producing work owned by his employers, which is the ordinary condition of a corporate engineer and is why his name is far less famous than the companies he worked for.

**Woods, the independent case.** Woods patented on his own account and sold or licensed patents to major electrical companies. Independence bought him his name on the patents and cost him the institutional protection a company provides, including in litigation, which is a real trade rather than an obvious win.

**James E. West, the modern case.** In 1962 West and **Gerhard Sessler**, both at Bell Telephone Laboratories, filed the application that issued as US patent **3,118,022**, an electroacoustic transducer using a charged polymer foil: the **electret microphone**. Descendants of that design became overwhelmingly dominant in telephones, hearing aids, camcorders, and computers. West is named on the patent, holds a very large number of patents overall, and the patent itself came out of Bell Labs, where employee inventions are assigned to the employer as a matter of course. This is mechanism two operating in a modern research laboratory rather than a nineteenth-century workshop.

**Mark Dean, the same pattern again.** Dean, an engineer at IBM, is named on patents arising from the original IBM personal computer work, commonly reported as three of the nine, including the bus architecture that let users add peripherals. Every one of those patents is IBM's property. The machine is remembered as an IBM product, which it was.

**What this section is arguing.** The disappearance of these names is not primarily a story about villains. It is a story about a system that reliably converts individual invention into corporate identity, applied to people who had fewer alternatives to entering that system than their colleagues did.

:::reveal What does Fouché set out to replace, and why is his book uncomfortable in both directions? ||| He replaces mythologized figures with people. That means complicating the lone-genius story readers arrive with, while also showing how a Black inventor negotiated a racially stratified professional world to do technical work.

:::reveal What did US patent 3,118,022 cover, and what does it illustrate about credit? ||| The electret microphone, an electroacoustic transducer using a charged polymer foil, filed in 1962 by James E. West and Gerhard Sessler at Bell Labs. It illustrates assignment in a modern research laboratory: named inventors, employer-owned patent.

## Vocabulary
- **Rayvon Fouché**: author of the 2003 study of Woods, Latimer, and Davidson that reframes Black invention around industrial organizations rather than lone genius.
- **Shelby J. Davidson**: the third figure in Fouché's study, who did his technical work inside the federal government.
- **Electret microphone**: the charged-polymer-foil transducer of US patent 3,118,022, whose descendants dominate telephones, hearing aids, and computers.
- **Corporate identity conversion**: the reliable process by which a system turns individual invention into a company's public reputation.

## Sources
- Fouché, R. (2003). *Black inventors in the age of segregation: Granville T. Woods, Lewis H. Latimer, and Shelby J. Davidson*. Johns Hopkins University Press.
- National Inventors Hall of Fame. (n.d.). *James E. West*. https://www.invent.org/inductees/james-e-west
- United States Patent and Trademark Office. (n.d.). *Inventors change the world: James West*. https://www.uspto.gov/learning-and-resources/kids-educators/inventor-cards/james-west`,
    },
    {
      slug: "credit-without-a-patent",
      title: "11 · When the currency is authorship, not patents",
      section: "Section 3 · The employer, the corporation, and the vanished name",
      body: `In science and medicine, credit does not run through patents. It runs through whose name is on the paper and whose name is on the procedure. Three cases show the mechanism cleanly, and two of them have been formally corrected.

**Alice Ball.** A chemist at the College of Hawaii, Ball developed a way to prepare **chaulmoogra oil** as an injectable, water-miscible preparation, isolating its active components so it could be given without the side effects that had made earlier forms nearly unusable. It became the standard treatment for leprosy for roughly two decades, until sulfone drugs arrived. Ball died in 1916, at twenty-four, before publishing. **Arthur L. Dean**, a chemist and the college's president, continued the work, published, and the technique circulated as the *Dean method*. In 1922 the physician **Harry T. Hollmann** published a paper that credited Ball directly and named the technique the *Ball Method*, which is a large part of why her name survived at all.

**Vivien Thomas.** A surgical technician at Johns Hopkins, without a medical degree because the Depression had destroyed his savings and his path to college. Over nearly two years of laboratory work involving roughly two hundred dogs, Thomas worked out the surgical approach for the correction of a cyanotic congenital heart defect and demonstrated it was survivable. When the first operation was performed on a child in 1944, Thomas stood on a stool behind the surgeon, Alfred Blalock, coaching him through it. The paper appeared in *JAMA* in May 1945 under Blalock and Taussig. **Thomas was not named.** Johns Hopkins awarded him an honorary Doctor of Laws in 1976 and appointed him to the faculty as an instructor in surgery. The procedure is now called the **Blalock-Taussig-Thomas shunt**; the American Medical Association reported the renaming in 2023.

**Gladys West.** A mathematician at the United States Naval Surface Warfare Center at Dahlgren, Virginia, West worked on satellite geodesy: the computations behind an accurate mathematical model of the shape of the Earth, which is a prerequisite for any satellite positioning system. That work fed into what became GPS. Public recognition came decades after the work itself, which is the pattern this lesson exists to name.

**The pattern.** In all three, no patent was ever at issue. What was at issue was a byline, a name on a procedure, and a credit line in an institutional history. That is a different mechanism from assignment and it needs different evidence: publication records, laboratory notebooks, and institutional correspondence rather than patent files.

:::reveal Why did Alice Ball's name survive despite Arthur Dean publishing the work without her? ||| Because in 1922 the physician Harry T. Hollmann published a paper crediting her directly and naming the technique the Ball Method, which put her name into the printed record where it could be found later.

:::reveal What kind of evidence does the authorship mechanism require, as opposed to the assignment mechanism? ||| Publication records, laboratory notebooks, and institutional correspondence, rather than patent files. Nothing in these three cases turned on a patent at all.

## Vocabulary
- **Chaulmoogra oil**: the plant oil Alice Ball rendered into an injectable preparation, the standard leprosy treatment for about two decades.
- **The Ball Method**: the name Harry T. Hollmann gave the technique in a 1922 paper, after it had circulated as the Dean method.
- **Blalock-Taussig-Thomas shunt**: the cardiac procedure renamed to include Vivien Thomas, a change the American Medical Association reported in 2023.
- **Satellite geodesy**: the mathematical modeling of the Earth's shape from satellite data, the field Gladys West worked in at Dahlgren.
- **Byline credit**: authorship as the currency of scientific recognition, distinct from patent ownership.

## Sources
- National Women's History Museum. (n.d.). *Alice Ball*. https://www.womenshistory.org/education-resources/biographies/alice-ball
- American Medical Association. (n.d.). *New name for lifesaving procedure recognizes Black pioneer's role*. https://www.ama-assn.org/public-health/health-equity/new-name-lifesaving-procedure-recognizes-black-pioneer-s-role
- American Academy of Pediatrics. (n.d.). *The hidden history of Vivien Thomas and racial bias in medicine*. https://www.aap.org/en/news-room/aap-voices/hidden-history-of-vivien-thomas-and-racial-bias-in-medicine/`,
    },
    {
      slug: "quiz-corporation-and-credit",
      title: "12 · Knowledge check: employers, corporations, and authorship",
      section: "Section 3 · The employer, the corporation, and the vanished name",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is an assignment, in patent terms?",
            options: ["A transfer of patent ownership to another party", "A licensing arrangement that leaves ownership with the inventor", "A court order redistributing rights after an infringement finding", "The examiner's allocation of an application to a technology class"],
            correctIndex: 0,
            explanation: "A patent is property, and property can be transferred. The form that matters here is the pre-invention assignment.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "When is a pre-invention assignment signed?",
            options: ["On the first day of the job", "At the moment the invention is reduced to practice", "When the patent application is filed with the office", "After the patent issues, as a separately negotiated sale"],
            correctIndex: 0,
            explanation: "The employment agreement covers anything the employee invents in the scope of the work, from the moment it exists.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "What does an assigned inventor keep?",
            options: ["Their name on the face of the patent", "The right to license the invention to third parties", "The right to sue infringers in their own name", "A statutory share of any revenue the patent produces"],
            correctIndex: 0,
            explanation: "US law requires patents to name the actual human inventors, so the name is permanent even when the ownership is not.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "What does an assigned inventor lose?",
            options: ["Licensing, litigation, sale, and the money", "The ability to work on the same technology afterward", "The right to be named on the patent at all", "Any claim to have invented the thing in public"],
            correctIndex: 0,
            explanation: "Which is why the course describes a patent you are named on and do not own as a line on a resume.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "Why does assignment shift public memory to the company?",
            options: ["The company advertises, litigates, and licenses", "Because the inventor's name is removed from the published patent", "Because assignment is recorded confidentially and cannot be searched", "Because employers are legally entitled to claim inventorship"],
            correctIndex: 0,
            explanation: "A century later people say Bell, General Electric, or IBM, and no individual name survives the sentence.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "What did independent invention require that segregation restricted?",
            options: ["Capital, attorney fees, credit, and courtroom standing", "A college degree in engineering and a professional license", "Membership in a trade association that admitted only white members", "Residence in a state that permitted Black citizens to own property"],
            correctIndex: 0,
            explanation: "So the choice was frequently between assignment on an employer's terms and no patent at all.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "What is a constrained choice, as the lesson uses the term?",
            options: ["A free decision among options narrowed by outside conditions", "A decision made under legal compulsion with no alternative", "A choice that can be reversed within a statutory cooling-off period", "A choice made by an agent rather than by the principal"],
            correctIndex: 0,
            explanation: "It is the honest description of assignment for an inventor whose alternatives were closed off by segregation.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "Which phrase on a patent's face identifies the assignment?",
            options: ["Assignor to", "Reduced to practice", "Letters patent granted", "Improvement in"],
            correctIndex: 0,
            explanation: "Spotting that single line resolves a large share of the arguments in this field before they begin.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "Which three inventors does Fouché's 2003 study examine?",
            options: ["Granville T. Woods, Lewis H. Latimer, and Shelby J. Davidson", "Norbert Rillieux, Elijah McCoy, and Garrett Morgan", "Lewis Latimer, Alice Ball, and Vivien Thomas", "Thomas Jennings, Henry Blair, and Judy W. Reed"],
            correctIndex: 0,
            explanation: "An independent inventor, a corporate engineer, and a technical worker inside the federal government.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "What does Fouché argue about the lone-genius story?",
            options: ["It is wrong about invention generally and distorts this history", "It is accurate for independent inventors and wrong only for employees", "It was invented by the Patent Office to justify the examination system", "It applies to the nineteenth century but not to the twentieth"],
            correctIndex: 0,
            explanation: "Most successful inventors of the period worked inside industrial organizations, so the real question is how they negotiated them.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "Fouché explicitly sets out to do what?",
            options: ["Replace mythologized figures with people", "Prove that each of the three was cheated by a major corporation", "Establish the earliest date for each disputed invention", "Recover patents that were wrongly assigned to employers"],
            correctIndex: 0,
            explanation: "Which means complicating several of the stories a reader is likely to arrive holding, in both directions.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "What was Lewis Latimer's professional training?",
            options: ["Draftsman", "Chemist, specializing in carbon compounds", "Machinist, trained in a railroad workshop", "Electrical engineer, trained at a technical college"],
            correctIndex: 0,
            explanation: "He drew patent drawings, worked for Hiram Maxim's electric lighting company and later Edison's, and became an Edison Pioneer.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "Why is Latimer's name less famous than the companies he worked for?",
            options: ["He spent his career producing work owned by his employers", "Because he never held any patents in his own name", "Because his employers legally barred him from publicizing his role", "Because his patents were all invalidated in later litigation"],
            correctIndex: 0,
            explanation: "That is the ordinary condition of a corporate engineer, and it is mechanism two rather than a conspiracy.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "What trade did independence represent for Granville T. Woods?",
            options: ["His name on the patents, without institutional protection", "Institutional protection, at the cost of his name on the patents", "Higher income, at the cost of access to laboratory equipment", "Freedom from assignment, at the cost of the right to sell patents"],
            correctIndex: 0,
            explanation: "He patented on his own account and sold or licensed to major electrical companies, but faced litigation without a company behind him.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "Which patent covers the electret microphone?",
            options: ["US 3,118,022", "US 3,482,037, for a home security system", "US 4,591,071, for a squirt gun", "US 252,386, for a process of manufacturing carbons"],
            correctIndex: 0,
            explanation: "Filed in 1962 by James E. West and Gerhard Sessler at Bell Telephone Laboratories.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "Who co-invented the electret microphone with James E. West?",
            options: ["Gerhard Sessler", "Joseph V. Nichols, his co-inventor on an earlier lamp patent", "Mark Dean, later of IBM's personal computer program", "Shelby J. Davidson, the third subject of Fouché's study"],
            correctIndex: 0,
            explanation: "Both were at Bell Telephone Laboratories, where employee inventions are assigned to the employer as a matter of course.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "What does the electret microphone use to convert sound?",
            options: ["A charged polymer foil", "A carbon granule chamber under variable pressure", "A moving coil suspended in a permanent magnetic field", "A piezoelectric crystal bonded to a metal diaphragm"],
            correctIndex: 0,
            explanation: "Descendants of that design became overwhelmingly dominant in telephones, hearing aids, camcorders, and computers.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "Mark Dean's patents from the original IBM PC work are owned by whom?",
            options: ["IBM", "Dean personally, under a negotiated exception", "Jointly by Dean and the other named inventors", "A consortium of PC manufacturers who licensed the bus"],
            correctIndex: 0,
            explanation: "Commonly reported as three of the nine original patents, including the bus architecture that let users add peripherals.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "What is this section's central argument about disappearing names?",
            options: ["A system converts individual invention into corporate identity", "Corporations deliberately concealed the race of their inventors", "Patent examiners systematically rejected applications from Black inventors", "Inventors chose anonymity to protect themselves from retaliation"],
            correctIndex: 0,
            explanation: "Applied to people who had fewer alternatives to entering that system than their colleagues did.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "In science and medicine, credit runs through what?",
            options: ["Whose name is on the paper and on the procedure", "Whose employer holds the patent on the underlying method", "Which institution funded the research programme", "Which journal published the first account of the result"],
            correctIndex: 0,
            explanation: "Which is why none of the three cases in this lesson turned on a patent at all.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "What did Alice Ball do with chaulmoogra oil?",
            options: ["Made it into an injectable, water-miscible preparation", "Synthesized an artificial substitute for it from coal tar", "Proved that it had no therapeutic value against leprosy", "Reduced its cost by developing a plantation supply chain"],
            correctIndex: 0,
            explanation: "She isolated its active components so it could be given without the side effects that had made earlier forms nearly unusable.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "How long did Ball's preparation remain the standard leprosy treatment?",
            options: ["Roughly two decades, until sulfone drugs", "About three years, until a synthetic alternative appeared", "Until the 1970s, when multidrug therapy was introduced", "It was never adopted clinically outside Hawaii"],
            correctIndex: 0,
            explanation: "Which is a substantial clinical run for a preparation developed by a chemist who died at twenty-four.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "At what age did Alice Ball die?",
            options: ["Twenty-four", "Thirty-two, shortly after publishing her results", "Forty-one, after two decades at the College of Hawaii", "Nineteen, while still an undergraduate student"],
            correctIndex: 0,
            explanation: "She died in 1916, before publishing, which is the opening the credit dispute ran through.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "Who published Ball's work and circulated it under his own name?",
            options: ["Arthur L. Dean", "Harry T. Hollmann, the physician who first proposed the work", "Alfred Blalock, in a paper on injectable preparations", "Gerhard Sessler, then a chemist at the same college"],
            correctIndex: 0,
            explanation: "Dean was a chemist and the college's president, and the technique circulated as the Dean method.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "Who credited Ball in print in 1922?",
            options: ["Harry T. Hollmann", "Arthur L. Dean, in a correction to his earlier paper", "The College of Hawaii, in its annual report", "The United States Public Health Service, in a bulletin"],
            correctIndex: 0,
            explanation: "The physician's paper named the technique the Ball Method, which is a large part of why her name survived at all.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "Why did Vivien Thomas lack a medical degree?",
            options: ["The Depression destroyed his savings and his path to college", "He was refused admission to every medical school he applied to", "He chose surgical technique over the academic route deliberately", "Johns Hopkins barred technicians from enrolling while employed"],
            correctIndex: 0,
            explanation: "He did the work of a researcher and a surgeon from a technician's position and pay grade.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "Roughly how many dogs did Thomas's laboratory work involve?",
            options: ["About two hundred", "About twenty, over three months of preparation", "About two thousand, over a decade of experiments", "None; the work was entirely theoretical until the first operation"],
            correctIndex: 0,
            explanation: "Over nearly two years, establishing that the correction was survivable before it was attempted on a child.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "Where was Thomas during the first operation in 1944?",
            options: ["On a stool behind the surgeon, coaching him through it", "Observing from the gallery with the rest of the department", "In the laboratory, running a parallel procedure on a control animal", "Absent, having been barred from the operating room"],
            correctIndex: 0,
            explanation: "The paper appeared in JAMA in May 1945 under Blalock and Taussig, and Thomas was not named.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "What did Johns Hopkins award Thomas in 1976?",
            options: ["An honorary Doctor of Laws", "An honorary Doctor of Medicine, granted by special dispensation", "A full professorship in the department of surgery", "The university's highest research prize, with a cash award"],
            correctIndex: 0,
            explanation: "It also appointed him to the faculty as an instructor in surgery, thirty-two years after the first operation.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "What is the procedure now called?",
            options: ["The Blalock-Taussig-Thomas shunt", "The Thomas-Blalock procedure, with Taussig's name removed", "The Hopkins shunt, after the institution rather than the individuals", "The Thomas shunt, in a renaming that dropped both surgeons"],
            correctIndex: 0,
            explanation: "The American Medical Association reported the renaming in 2023.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "Where did Gladys West work?",
            options: ["The Naval Surface Warfare Center at Dahlgren, Virginia", "Bell Telephone Laboratories in Murray Hill, New Jersey", "The Langley Research Center in Hampton, Virginia", "The Naval Observatory in Washington, DC"],
            correctIndex: 0,
            explanation: "Her satellite geodesy work fed into what became GPS, and public recognition came decades afterward.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "What is satellite geodesy?",
            options: ["Modeling the Earth's shape from satellite data", "Calculating orbital insertion trajectories for launch vehicles", "Mapping the ocean floor using radar altimetry alone", "Predicting satellite decay from atmospheric drag measurements"],
            correctIndex: 0,
            explanation: "An accurate model of the shape of the Earth is a prerequisite for any satellite positioning system.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "What was at issue in all three cases in this lesson?",
            options: ["A byline, a procedure name, and a credit line", "Ownership of a patent that had been improperly assigned", "The right to publish results without institutional approval", "Compensation for work performed outside the terms of employment"],
            correctIndex: 0,
            explanation: "No patent was ever at issue, which is what makes this a different mechanism requiring different evidence.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "What evidence does the authorship mechanism call for?",
            options: ["Publication records, notebooks, and correspondence", "Patent files, assignment records, and litigation dockets", "Census returns, city directories, and obituaries", "Employment contracts and payroll records"],
            correctIndex: 0,
            explanation: "Patent files are the wrong archive entirely when the currency was a byline rather than a property right.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "Which two of the three cases have been formally corrected?",
            options: ["Ball and Thomas", "Thomas and West", "Ball and West", "None of the three has been formally corrected"],
            correctIndex: 0,
            explanation: "Hollmann's 1922 paper named the Ball Method, and the shunt was renamed to include Thomas.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "Why does the course call the assignment mechanism not a scandal?",
            options: ["The employee is paid, the employer takes the risk, and both agreed", "Because assignment is legally unenforceable and rarely used", "Because employers voluntarily credit inventors in their advertising", "Because the inventor may reclaim the patent after seventeen years"],
            correctIndex: 0,
            explanation: "The effect on the historical record is enormous even though nothing improper is happening by the law's own standards.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "Latimer's employers included which two companies?",
            options: ["Hiram Maxim's and Edison's electric lighting companies", "Western Electric and Bell Telephone Laboratories", "General Electric and Westinghouse, in succession", "IBM and the Naval Surface Warfare Center"],
            correctIndex: 0,
            explanation: "He became one of the Edison Pioneers and holds patents in his own name, two of which Section 4 covers.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "What is a patent you are named on but do not own?",
            options: ["A line on a resume", "A licensable asset you may sell at any time", "A basis for an infringement action in your own name", "Legally indistinguishable from a patent you do own"],
            correctIndex: 0,
            explanation: "The name is permanent, and everything with financial or legal value has gone to the assignee.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "The Bell Labs and IBM examples both illustrate which mechanism?",
            options: ["Assignment to an employer", "Publication by a colleague", "Absorption into a brand name", "Exclusion from the patent system"],
            correctIndex: 0,
            explanation: "Named inventors, employer-owned patents, and public memory attaching to the company rather than to the people.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "Why does Fouché's approach make some readers uncomfortable?",
            options: ["It complicates the heroic version as well as the dismissive one", "It argues that none of the three inventors was significant", "It concludes that racial barriers played no role in their careers", "It relies entirely on company records rather than personal papers"],
            correctIndex: 0,
            explanation: "Humanizing a figure means removing the myth, and the myth is what many readers arrived for.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "In which year was the electret microphone application filed?",
            options: ["1962", "1964, the year the patent issued", "1957, during West's first summer at Bell Labs", "1969, alongside the home security system patent"],
            correctIndex: 0,
            explanation: "It issued as US patent 3,118,022, and its descendants became the dominant microphone design worldwide.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "The three cases in lesson 11 share which feature?",
            options: ["No patent was involved in any of them", "All three inventors worked for the federal government", "All three were formally corrected within the inventor's lifetime", "All three involved a co-worker filing a patent application first"],
            correctIndex: 0,
            explanation: "That is precisely why they need a different archive: bylines and procedure names, not patent files.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "The most useful single line to find on a disputed patent is what?",
            options: ["The assignor-to line", "The examiner's name and art unit", "The filing date relative to the product launch", "The number of claims in the granted patent"],
            correctIndex: 0,
            explanation: "It tells you immediately that the person invented it and the company owned it from the start.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "Shelby J. Davidson did his technical work where?",
            options: ["Inside the federal government", "At General Electric's research laboratory", "As an independent inventor in Cincinnati", "At the College of Hawaii as a chemist"],
            correctIndex: 0,
            explanation: "He is the third figure in Fouché's study, alongside the independent Woods and the corporate Latimer.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "What did Dean's bus architecture patent enable?",
            options: ["Users adding peripherals to the machine", "The first color display driver for a personal computer", "Compatibility between IBM and non-IBM operating systems", "Networking multiple personal computers over telephone lines"],
            correctIndex: 0,
            explanation: "All of the resulting patents are IBM's property, and the machine is remembered as an IBM product, which it was.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "Why did Ball's death open the way for the credit dispute?",
            options: ["She died before publishing", "Her laboratory notebooks were destroyed on her death", "Her patent application lapsed for non-payment of fees", "Her employer reassigned the project to a different department"],
            correctIndex: 0,
            explanation: "Dean continued the work, published, and the technique circulated under his name until Hollmann corrected the record in 1922.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "West's patent count is best described how?",
            options: ["Very large, across US and foreign filings", "A single patent, on the electret microphone alone", "Three, matching Mark Dean's count on the IBM PC", "Unknown, since Bell Labs filings were anonymous"],
            correctIndex: 0,
            explanation: "The number is large enough that the interesting fact is the ownership pattern rather than the count.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "The phrase \"corporate identity conversion\" names what?",
            options: ["A system reliably turning individual invention into company reputation", "The legal process of incorporating an inventor's business", "A patent office procedure for transferring an application", "The rebranding of a product after its inventor leaves the firm"],
            correctIndex: 0,
            explanation: "It is not villainy, which is why the section insists the disappearance of these names is structural rather than personal.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "Which is the correct order of Thomas's recognition?",
            options: ["1944 operation, 1945 paper without him, 1976 doctorate, 2023 renaming", "1944 operation, 1945 paper naming him, 1976 professorship, 2023 prize", "1945 operation, 1944 paper, 1976 renaming, 2023 doctorate", "1944 operation, 1976 paper, 1995 doctorate, 2023 renaming"],
            correctIndex: 0,
            explanation: "Thirty-two years to the honorary Doctor of Laws, and nearly eighty to the procedure carrying his name.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "Why must US patents name the actual human inventors?",
            options: ["The law requires it, regardless of who owns the patent", "Because ownership cannot be transferred without a named inventor", "Because the examiner must contact the inventor during prosecution", "Because the disclosure requirement is personal to the inventor"],
            correctIndex: 0,
            explanation: "It is why an assigned inventor's name survives on the document permanently even after every valuable right has moved.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "The defect Thomas's work addressed is best described as what?",
            options: ["A cyanotic congenital heart defect in children", "An adult valve disease caused by rheumatic fever", "A vascular injury common in wartime trauma surgery", "A congenital lung malformation requiring lobe removal"],
            correctIndex: 0,
            explanation: "He worked out the surgical approach and demonstrated it was survivable before it was attempted on a child in 1944.",
            sourceLessonSlug: "credit-without-a-patent",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The verified record
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "documented-cases-nineteenth-century",
      title: "13 · The documented cases: the nineteenth century",
      section: "Section 4 · The verified record",
      body: `Every claim in this lesson comes with a number and a date you can look up in about a minute. That is the standard, and it is the reason these cases are worth more than a longer list of stories.

**Elijah McCoy, patent 129,843.** Granted **23 July 1872**, titled *Improvement in Lubricators for Steam Engines*. The problem it solved is real and specific: a steam engine needed lubrication, and stopping a locomotive or a factory line to oil it cost time and money. McCoy's device fed oil to the moving parts while the engine ran. He went on to hold a large number of patents across a long career. Read the title once more and notice what it claims: an **improvement in lubricators**, not the invention of lubrication.

**Granville T. Woods, patents 373,383 and 373,915.** Both issued in **1887**, covering induction telegraphy: a system allowing messages to pass between a moving train and a station, or between trains, using electromagnetic induction rather than a physical connection. The safety value is obvious once stated, since trains that can be told where other trains are do not collide as often. Priority in this area was contested, and Woods prevailed in an **interference** proceeding against **Lucius Phelps**, which is the documented dispute. The much more famous story, that Thomas Edison sued Woods twice and lost and then offered him a partnership, is repeated nearly everywhere and this course does not assert it; it is exactly the class of claim Fouché's work re-examined, and it is filed as an open source check rather than taught.

**Lewis H. Latimer, patents 247,097 and 252,386.** The first, issued **13 September 1881** with co-inventor **Joseph V. Nichols**, covers a method of attaching carbon filaments to the conducting wires inside an electric lamp. The second, issued **17 January 1882**, is titled *Process of Manufacturing Carbons*, and covers making the carbon filaments themselves. Both are manufacturing improvements to incandescent lighting, and both are real, granted, numbered patents. Neither is the invention of the light bulb, and Section 5 deals with why that distinction is worth defending rather than blurring.

**Norbert Rillieux, patents 3,237 and 4,879.** Covered in Section 2, and the strongest of the nineteenth-century group on technical merit.

**What the pattern shows.** Four inventors, eight patents, every one an improvement to an existing industrial system: lubrication, signaling, lighting, refining. That is what invention usually looks like, and describing it accurately costs nothing. The exaggerated versions of these same careers are strictly worse, because they can be dismantled by anyone with a search engine and thirty seconds.

:::reveal What does the title of McCoy's patent 129,843 claim, and what does it not claim? ||| It claims an improvement in lubricators for steam engines: a device that oils moving parts while the engine runs. It does not claim the invention of lubrication.

:::reveal Which Woods dispute is documented, and which is only widely repeated? ||| The documented one is the interference proceeding against Lucius Phelps, which Woods won. The story that Edison sued him twice, lost, and then offered a partnership is repeated everywhere and is not asserted by this course.

## Vocabulary
- **Interference proceeding**: the Patent Office contest determining which of two applicants invented first, and the documented form of Woods's priority dispute.
- **Induction telegraphy**: signaling between moving trains and stations through electromagnetic induction rather than a physical connection.
- **Improvement in lubricators**: the actual subject of McCoy's 1872 patent, and a useful reminder of how patent titles are worded.
- **Process of Manufacturing Carbons**: the title of Latimer's 1882 patent 252,386, covering the making of carbon filaments.

## Sources
- Fouché, R. (2003). *Black inventors in the age of segregation: Granville T. Woods, Lewis H. Latimer, and Shelby J. Davidson*. Johns Hopkins University Press.
- James, P. P. (1989). *The real McCoy: African-American invention and innovation, 1619-1930*. Smithsonian Institution Press.
- National Inventors Hall of Fame. (n.d.). *Elijah McCoy*. https://www.invent.org/inductees/elijah-mccoy
- National Inventors Hall of Fame. (n.d.). *Lewis Latimer*. https://www.invent.org/inductees/lewis-latimer`,
    },
    {
      slug: "documented-cases-twentieth-century",
      title: "14 · The documented cases: the twentieth century",
      section: "Section 4 · The verified record",
      body: `Same standard: a number, a date, and a claim you can read for yourself.

**Garrett A. Morgan, patent 1,113,675.** Issued **13 October 1914** for a breathing device, the **safety hood**, which drew air through a tube hanging near the floor on the principle that smoke and hot gases rise. Morgan received a second breathing-device patent, 1,090,936, the same year. On **25 July 1916** an explosion trapped workers in a tunnel under Lake Erie during construction of the Cleveland waterworks intake. Rescue parties that went in did not come out. Morgan and his brother Frank entered wearing the hoods and brought men out. **Accounts differ on how many were rescued alive and how many bodies were recovered**, and this course gives no number for that reason; it is filed as an open source check. Morgan was widely reported to have been passed over for recognition that white participants received.

**Garrett A. Morgan, patent 1,475,024.** Filed **27 February 1922**, granted **20 November 1923**, for a traffic signal. The important detail is what it added: a **three-position** signal with an intermediate warning state, rather than only stop and go. It is a genuine and useful improvement to signal design, and Section 5 explains why calling it the invention of the traffic light is both false and unnecessary.

**Marie Van Brittan Brown, patent 3,482,037.** Filed **1 August 1966**, issued **2 December 1969**, titled *Home security system utilizing television surveillance*, with **Albert L. Brown** as co-inventor. It describes a camera that can view a visitor through any of several peepholes at different heights, a monitor inside the home, two-way audio to speak to the visitor, a remote door release, and an alarm to summon help. Read that list against a modern video doorbell and the lineage is not subtle. The patent has been cited by later patents many times over, which is the mechanical evidence of influence.

**Lonnie G. Johnson, patent 4,591,071.** Granted **27 May 1986**, titled simply *Squirt gun*, covering a toy that shoots a continuous high-velocity stream of water using stored pressure. Johnson, an engineer who had worked on spacecraft power systems, licensed it to Larami and it became the Super Soaker, one of the best-selling toys in the United States. This is the rare case in this course where the inventor kept the value: he held the patent, licensed it on his own terms, and funded his own research company with the proceeds.

**Frederick McKinley Jones.** Mobile refrigeration units for trucks and railcars, and co-founder of the company that became Thermo King. He held a large number of patents. This course names him without numbers, because the specific patents were not verified for it, and a number quoted from memory is exactly the failure mode this course was built to avoid.

:::reveal What did patent 1,475,024 actually add to traffic signaling? ||| A three-position signal with an intermediate warning state, rather than only stop and go. It is a real improvement to signal design and not the invention of the traffic light.

:::reveal Why does this course name Frederick McKinley Jones without patent numbers? ||| Because his specific patents were not verified for this course, and quoting a number from memory is the exact failure the course exists to prevent.

## Vocabulary
- **Safety hood**: Morgan's 1914 breathing device, patent 1,113,675, which drew air from near the floor because smoke and hot gases rise.
- **Three-position signal**: the intermediate warning state that Morgan's 1923 patent 1,475,024 added between stop and go.
- **Forward citation**: a later patent citing an earlier one, and the mechanical evidence that an invention influenced what followed.
- **Licensing on your own terms**: Johnson's route with patent 4,591,071, and the rare case in this course where the inventor captured the value.

## Sources
- United States Patent and Trademark Office. (n.d.). *Of courage and caution*. https://www.uspto.gov/learning-and-resources/journeys-innovation/historical-stories/courage-and-caution
- National Inventors Hall of Fame. (n.d.). *Lonnie Johnson*. https://www.invent.org/inductees/lonnie-johnson
- James, P. P. (1989). *The real McCoy: African-American invention and innovation, 1619-1930*. Smithsonian Institution Press.`,
    },
    {
      slug: "reading-a-patent-narrowly",
      title: "15 · Reading a patent narrowly",
      section: "Section 4 · The verified record",
      body: `You now have eleven patent numbers. This lesson is the technique for reading any of them, or any other, without overstating what it says.

**Start with the verb in the title.** *Improvement in*, *process of*, *apparatus for*, *system for*. Patent titles are drafted by attorneys who are precise for a living, and the verb tells you the size of the claim before you read a word of the body. A title beginning *Improvement in* is telling you outright that the underlying thing already existed.

**Then read the first claim.** Claim 1 is normally the broadest, and every later claim narrows it further. If claim 1 recites a specific combination of elements, the patent covers that combination, not the general idea. This is why two people can hold patents on what a layperson would call the same device.

**Check the assignee.** If the face says *assignor to* a company, you have found mechanism two and you know the ownership answer without further research.

**Check the dates, both of them.** A patent has a **filing date** and an **issue date**, often years apart, and priority runs from filing. Comparing an issue date against someone else's filing date is a standard way to reach a confidently wrong conclusion about who was first.

**Check forward citations.** Later patents citing this one are evidence that the field found it useful. It is not proof of importance, but it is real evidence and it is free to look at.

**Then state the claim at the size of the document.** Here are the same facts stated two ways:

- Overstated: *He invented the modern home security system.*
- Accurate: *In 1969 she and her husband received patent 3,482,037 for a home security system using television surveillance, with a camera viewing a visitor through peepholes at several heights, two-way audio, a remote door release, and an alarm.*

The second is longer, and it is also unanswerable. Nobody can take it away from you, because every element of it is on a document with a number. That trade, a longer sentence for a claim nobody can dismantle, is the whole discipline this course is teaching.

:::reveal Why is comparing an issue date against a rival's filing date a route to a wrong conclusion? ||| Because a patent has both, often years apart, and priority runs from the filing date. Comparing the two different date types makes a later filer look earlier.

:::reveal What is the trade the accurate version of a claim makes? ||| A longer sentence in exchange for a claim nobody can dismantle, because every element of it sits on a numbered document that anyone can check.

## Vocabulary
- **Claim 1**: normally the broadest claim in a patent, with every later claim narrowing it further.
- **Filing date and issue date**: the two dates on a patent, often years apart, with priority running from the filing date.
- **Assignee**: the party that owns the patent, printed on the face after the phrase assignor to.
- **Stating at document size**: describing an achievement using exactly what the document supports, no more and no less.

## Sources
- Fouché, R. (2003). *Black inventors in the age of segregation: Granville T. Woods, Lewis H. Latimer, and Shelby J. Davidson*. Johns Hopkins University Press.
- James, P. P. (1989). *The real McCoy: African-American invention and innovation, 1619-1930*. Smithsonian Institution Press.`,
    },
    {
      slug: "quiz-the-verified-record",
      title: "16 · Knowledge check: the verified record",
      section: "Section 4 · The verified record",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is Elijah McCoy's 1872 patent number?",
            options: ["129,843", "373,915, one of the induction telegraphy patents", "252,386, the process of manufacturing carbons", "1,113,675, the safety hood breathing device"],
            correctIndex: 0,
            explanation: "Granted 23 July 1872, titled Improvement in Lubricators for Steam Engines.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "What problem did McCoy's lubricator solve?",
            options: ["Oiling an engine without stopping it", "Preventing lubricating oil from igniting near the firebox", "Reducing the volume of oil a locomotive had to carry", "Filtering grit out of oil before it reached the bearings"],
            correctIndex: 0,
            explanation: "Stopping a locomotive or a factory line to oil it cost time and money, which is a specific and checkable problem.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "What does McCoy's patent title claim?",
            options: ["An improvement in lubricators", "The invention of mechanical lubrication", "A system for automatic engine maintenance", "A process for refining lubricating oils"],
            correctIndex: 0,
            explanation: "The wording is doing precise work: an improvement to something that already existed, not its invention.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "Which two patents cover Granville T. Woods's induction telegraphy?",
            options: ["373,383 and 373,915", "247,097 and 252,386", "3,237 and 4,879", "1,090,936 and 1,113,675"],
            correctIndex: 0,
            explanation: "Both issued in 1887. The Latimer, Rillieux, and Morgan pairs are the other three listed.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "What did induction telegraphy allow?",
            options: ["Messages between a moving train and a station", "Telegraph signals to travel without any wires at all", "Simultaneous transmission of voice and telegraph on one line", "Automatic braking when two trains approached each other"],
            correctIndex: 0,
            explanation: "It used electromagnetic induction rather than a physical connection, and trains that know where other trains are collide less often.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "Which Woods priority dispute is documented?",
            options: ["An interference proceeding against Lucius Phelps", "Two lawsuits brought by Thomas Edison, both of which Woods won", "A challenge from the Bell Telephone Company over transmitter claims", "An appeal against the Commissioner of Patents' refusal to grant"],
            correctIndex: 0,
            explanation: "Woods prevailed in it. The Edison litigation story is repeated nearly everywhere and is not asserted by this course.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "How does the course treat the Edison-sued-Woods story?",
            options: ["As an open source check rather than as teaching", "As established fact, since it appears in every account", "As a fabrication invented by twentieth-century biographers", "As irrelevant, since the outcome would not change the patents"],
            correctIndex: 0,
            explanation: "It is exactly the class of claim Fouché's work re-examined, so it is filed for verification rather than taught.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "What does Latimer's patent 247,097 cover?",
            options: ["A method of attaching carbon filaments to conducting wires", "A process for manufacturing the carbon filaments themselves", "A vacuum pump for evacuating lamp globes", "A threaded socket for interchangeable lamps"],
            correctIndex: 0,
            explanation: "Issued 13 September 1881, with co-inventor Joseph V. Nichols.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "Who was Latimer's co-inventor on patent 247,097?",
            options: ["Joseph V. Nichols", "Hiram Maxim, whose company employed him at the time", "Thomas Edison, in his only joint filing with an employee", "Gerhard Sessler, decades before the electret work"],
            correctIndex: 0,
            explanation: "The second patent, 252,386, was Latimer's alone.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "What is patent 252,386 titled?",
            options: ["Process of Manufacturing Carbons", "Improvement in Incandescent Electric Lamps", "Method of Attaching Filaments to Conducting Wires", "Apparatus for Producing Electric Illumination"],
            correctIndex: 0,
            explanation: "Issued 17 January 1882, covering the making of the carbon filaments themselves.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "What do both Latimer patents have in common?",
            options: ["They are manufacturing improvements to incandescent lighting", "They cover the complete design of an electric lamp", "They were assigned to Edison Electric before issuing", "They were both invalidated in later infringement litigation"],
            correctIndex: 0,
            explanation: "Both are real, granted, numbered patents. Neither is the invention of the light bulb.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "What do all eight nineteenth-century patents in this lesson have in common?",
            options: ["Each improves an existing industrial system", "Each was assigned to a corporation on the day it issued", "Each was the subject of an interference proceeding", "Each was reconstructed after the 1836 Patent Office fire"],
            correctIndex: 0,
            explanation: "Lubrication, signaling, lighting, and refining. That is what invention usually looks like.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "Why are the exaggerated versions of these careers strictly worse?",
            options: ["They can be dismantled with a search engine in thirty seconds", "They are harder for learners to remember than the accurate versions", "They understate the technical difficulty of the actual work", "They attribute the work to the wrong century in most retellings"],
            correctIndex: 0,
            explanation: "And describing the achievements accurately costs nothing, which makes the exaggeration a pure loss.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "What is Garrett Morgan's safety hood patent number?",
            options: ["1,113,675", "1,475,024, the traffic signal patent", "3,482,037, the home security system", "129,843, the steam engine lubricator"],
            correctIndex: 0,
            explanation: "Issued 13 October 1914. He received a second breathing-device patent, 1,090,936, the same year.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "On what principle did the safety hood work?",
            options: ["Smoke and hot gases rise, so it drew air from near the floor", "Chemical absorbents in the hood neutralized toxic gases", "Compressed air stored in a canister supplied the wearer", "A water-soaked cloth filtered particulates from the air"],
            correctIndex: 0,
            explanation: "The intake tube hung near the floor, which is a simple idea that saved lives in the 1916 Cleveland tunnel.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "What happened on 25 July 1916?",
            options: ["An explosion trapped workers in a tunnel under Lake Erie", "Morgan received his patent for the three-position traffic signal", "The Cleveland waterworks intake was completed and opened", "Morgan demonstrated the safety hood to the Cleveland fire department"],
            correctIndex: 0,
            explanation: "Rescue parties that went in did not come out. Morgan and his brother Frank entered wearing the hoods and brought men out.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "Why does the course give no figure for the Cleveland rescue?",
            options: ["Accounts differ on how many were saved and recovered", "Because the city never released official casualty records", "Because the rescue was later shown not to have taken place", "Because the number is disputed only in twenty-first-century sources"],
            correctIndex: 0,
            explanation: "It is filed as an open source check rather than resolved by picking whichever version reads best.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "What is Morgan's traffic signal patent number, and when was it granted?",
            options: ["1,475,024, granted 20 November 1923", "1,113,675, granted 13 October 1914", "1,090,936, granted earlier in 1914", "3,482,037, granted 2 December 1969"],
            correctIndex: 0,
            explanation: "It was filed on 27 February 1922, roughly twenty-one months before it issued.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "What did Morgan's signal patent add?",
            options: ["A third position giving an intermediate warning state", "The first use of colored lenses in a traffic signal", "Electric operation, replacing hand-cranked semaphores", "Automatic timing, removing the need for a human operator"],
            correctIndex: 0,
            explanation: "A genuine and useful improvement to signal design, and one that does not require the false claim to be impressive.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "What is Marie Van Brittan Brown's patent number?",
            options: ["3,482,037", "4,591,071, for a squirt gun", "1,475,024, for a traffic signal", "373,383, for induction telegraphy"],
            correctIndex: 0,
            explanation: "Filed 1 August 1966 and issued 2 December 1969, titled Home security system utilizing television surveillance.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "Who was named as co-inventor on that patent?",
            options: ["Albert L. Brown", "Lonnie G. Johnson, then an engineering student", "Joseph V. Nichols, in a much later collaboration", "Frederick McKinley Jones, of Thermo King"],
            correctIndex: 0,
            explanation: "Her husband. The pair are both named on the face of patent 3,482,037.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "Which elements does the Brown patent describe?",
            options: ["Camera on peepholes at several heights, monitor, two-way audio, remote release, alarm", "A pressure mat and a bell wired to a neighboring house", "A telephone autodialer connected to a police switchboard", "A photoelectric beam across the doorway triggering a siren"],
            correctIndex: 0,
            explanation: "Read that list against a modern video doorbell and the lineage is not subtle.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "What is the mechanical evidence that the Brown patent was influential?",
            options: ["Later patents have cited it many times", "It was licensed to every major alarm manufacturer of the 1970s", "It was extended beyond its normal term by act of Congress", "It was reissued three times with progressively broader claims"],
            correctIndex: 0,
            explanation: "Forward citations are not proof of importance, but they are real evidence and they are free to look at.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "What is Lonnie Johnson's patent number, and what is it titled?",
            options: ["4,591,071, titled Squirt gun", "3,118,022, titled Electroacoustic transducer", "3,482,037, titled Home security system utilizing television surveillance", "252,386, titled Process of Manufacturing Carbons"],
            correctIndex: 0,
            explanation: "Granted 27 May 1986, covering a toy that shoots a continuous high-velocity stream using stored pressure.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "What was Johnson's professional background?",
            options: ["An engineer who had worked on spacecraft power systems", "A toy designer employed by Larami before the invention", "A chemist working on polymer foils at Bell Laboratories", "A patent attorney who filed on his own behalf"],
            correctIndex: 0,
            explanation: "He licensed the patent to Larami, and it became the Super Soaker.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "Why is Johnson's case unusual in this course?",
            options: ["He kept the value of his own invention", "He is the only inventor here who never received a patent", "He is the only one whose patent was assigned to an employer", "He is the only one whose invention was never commercialized"],
            correctIndex: 0,
            explanation: "He held the patent, licensed it on his own terms, and funded his own research company with the proceeds.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "What did Frederick McKinley Jones work on?",
            options: ["Mobile refrigeration for trucks and railcars", "Induction signaling for railroad crossings", "Injectable preparations of plant-derived oils", "Bus architecture for early personal computers"],
            correctIndex: 0,
            explanation: "He co-founded the company that became Thermo King and held a large number of patents.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "Why does the course omit Jones's patent numbers?",
            options: ["They were not verified for this course", "Because his patents were all assigned and therefore not his", "Because the numbering system changed during his career", "Because his patents were filed under a company name only"],
            correctIndex: 0,
            explanation: "A number quoted from memory is exactly the failure mode this course was built to avoid.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "What should you read first on any patent?",
            options: ["The verb in the title", "The list of forward citations", "The inventor's address and residence", "The examiner's name and art unit"],
            correctIndex: 0,
            explanation: "Improvement in, process of, apparatus for, and system for each tell you the size of the claim before you read the body.",
            sourceLessonSlug: "reading-a-patent-narrowly",
          },
          {
            prompt: "Which claim in a patent is normally the broadest?",
            options: ["Claim 1", "The final claim, which summarizes the others", "The claim with the most elements recited", "Whichever claim the examiner marked as allowable first"],
            correctIndex: 0,
            explanation: "Every later claim narrows it further, which is why two people can hold patents on what looks like the same device.",
            sourceLessonSlug: "reading-a-patent-narrowly",
          },
          {
            prompt: "If claim 1 recites a specific combination of elements, what does the patent cover?",
            options: ["That combination, not the general idea", "The general idea, with the elements given only as an example", "Any device performing the same function by any means", "Only the exact embodiment shown in the drawings"],
            correctIndex: 0,
            explanation: "This is the single most common source of confident overstatement about what a patent means.",
            sourceLessonSlug: "reading-a-patent-narrowly",
          },
          {
            prompt: "What does finding the assignee tell you immediately?",
            options: ["The ownership answer, without further research", "Whether the patent survived its full term", "Whether the inventor was employed at the time of filing", "Whether the patent was ever litigated"],
            correctIndex: 0,
            explanation: "An assignor-to line on the face means mechanism two, and the argument about ownership is over before it starts.",
            sourceLessonSlug: "reading-a-patent-narrowly",
          },
          {
            prompt: "Which date does priority run from?",
            options: ["The filing date", "The issue date, when the patent becomes enforceable", "The date the invention was first reduced to practice", "The date the assignment was recorded with the office"],
            correctIndex: 0,
            explanation: "Filing and issue are often years apart, and comparing the two different date types produces confidently wrong conclusions.",
            sourceLessonSlug: "reading-a-patent-narrowly",
          },
          {
            prompt: "What are forward citations evidence of?",
            options: ["That the field found the patent useful", "That the patent was found valid in litigation", "That the patent was licensed commercially", "That the inventor filed continuations on the same idea"],
            correctIndex: 0,
            explanation: "Not proof of importance, but real evidence, and free to look at.",
            sourceLessonSlug: "reading-a-patent-narrowly",
          },
          {
            prompt: "Why is the accurate version of a claim described as unanswerable?",
            options: ["Every element sits on a numbered document anyone can check", "Because it is long enough that few readers will dispute it", "Because patent documents are legally presumed valid", "Because it avoids naming any individual inventor"],
            correctIndex: 0,
            explanation: "That trade, a longer sentence for a claim nobody can dismantle, is the discipline the whole course is teaching.",
            sourceLessonSlug: "reading-a-patent-narrowly",
          },
          {
            prompt: "Who drafts patent titles?",
            options: ["Attorneys who are precise for a living", "Patent examiners assigning the application to a class", "The inventors themselves, in their own words", "Clerks transcribing the application into the official index"],
            correctIndex: 0,
            explanation: "Which is why the verb in the title is such a reliable signal of the claim's actual size.",
            sourceLessonSlug: "reading-a-patent-narrowly",
          },
          {
            prompt: "Rillieux's patents belong to which group in the course?",
            options: ["The nineteenth-century documented cases", "The twentieth-century documented cases", "The authorship-credit cases without patents", "The claims the course refuses to teach"],
            correctIndex: 0,
            explanation: "Patents 3,237 and 4,879, covered in Section 2 and the strongest of the group on technical merit.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "How many patent numbers does the reading lesson say you now hold?",
            options: ["Eleven", "Four, one per inventor in Section 4", "Twenty, spread across both centuries", "Six, the ones granted before 1900"],
            correctIndex: 0,
            explanation: "The technique in that lesson applies to any of them, or to any other patent you encounter.",
            sourceLessonSlug: "reading-a-patent-narrowly",
          },
          {
            prompt: "Morgan received how many breathing-device patents in 1914?",
            options: ["Two", "One, later reissued with broader claims", "Four, covering variants for different industries", "None; the safety hood patent issued in 1916"],
            correctIndex: 0,
            explanation: "Patents 1,090,936 and 1,113,675, the second issued 13 October 1914.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "What does the standard for inclusion in Section 4 require?",
            options: ["A number and a date you can look up in about a minute", "At least three independent secondary sources agreeing", "A surviving physical example in a museum collection", "Recognition by the National Inventors Hall of Fame"],
            correctIndex: 0,
            explanation: "That is why these cases are worth more than a longer list of stories without documents behind them.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "Which pairing of inventor and patent number is correct?",
            options: ["Marie Van Brittan Brown, 3,482,037", "Lonnie Johnson, 3,482,037", "Garrett Morgan, 4,591,071", "Lewis Latimer, 1,113,675"],
            correctIndex: 0,
            explanation: "Johnson is 4,591,071, Morgan is 1,113,675 and 1,475,024, and Latimer is 247,097 and 252,386.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "The overstated and accurate versions of the Brown claim differ how?",
            options: ["The accurate one recites the patent's actual elements", "The accurate one omits the co-inventor to simplify the sentence", "The overstated one gives the patent number and the accurate one does not", "The accurate one dates the invention to 1966 rather than 1969"],
            correctIndex: 0,
            explanation: "Camera on peepholes, monitor, two-way audio, remote release, alarm, all on a document with a number.",
            sourceLessonSlug: "reading-a-patent-narrowly",
          },
          {
            prompt: "What was Morgan widely reported to have been denied after the 1916 rescue?",
            options: ["Recognition that white participants received", "Payment for the safety hoods the city had used", "A patent extension on the breathing device", "Permission to sell the hoods to fire departments"],
            correctIndex: 0,
            explanation: "The course reports this as widely reported and holds the rescue counts themselves open as a source check.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "What technology did Johnson's squirt gun use?",
            options: ["Stored pressure driving a continuous stream", "An electric pump powered by internal batteries", "A spring-loaded piston released by the trigger", "Compressed carbon dioxide from a replaceable cartridge"],
            correctIndex: 0,
            explanation: "The patent describes a toy squirt gun shooting a continuous high-velocity stream of water.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "What year did Woods's two induction telegraphy patents issue?",
            options: ["1887", "1872, alongside McCoy's lubricator", "1882, the year of Latimer's carbons patent", "1914, the year of Morgan's breathing devices"],
            correctIndex: 0,
            explanation: "Patents 373,383 and 373,915, with priority settled in the interference against Lucius Phelps.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "What is an interference proceeding?",
            options: ["A Patent Office contest over which applicant invented first", "A court action to invalidate an issued patent", "An examiner's objection to overlapping claims in one application", "A challenge brought by a third party after a patent issues"],
            correctIndex: 0,
            explanation: "It is the documented form of Woods's priority dispute, as opposed to the widely repeated litigation story.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "Why does the course insist on describing patents at document size?",
            options: ["It produces claims that survive being checked", "It keeps the lessons shorter and easier to assess", "It matches the wording patent attorneys are required to use", "It avoids any need to cite secondary scholarship"],
            correctIndex: 0,
            explanation: "No more and no less than what the document supports, which is what makes the claim impossible to dismantle.",
            sourceLessonSlug: "reading-a-patent-narrowly",
          },
          {
            prompt: "Which of these is NOT one of the eleven verified patents in this course?",
            options: ["A patent for the invention of the incandescent lamp", "A patent for a process of manufacturing carbons", "A patent for a home security system using television surveillance", "A patent for an improvement in lubricators for steam engines"],
            correctIndex: 0,
            explanation: "Latimer's two patents are manufacturing improvements to incandescent lighting, which is a different and defensible claim.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "Two inventors can hold patents on what looks like the same device because of what?",
            options: ["Claims recite specific combinations of elements", "The Patent Office does not check for duplicate filings", "Design and utility patents may overlap on one product", "Priority disputes are resolved by licensing rather than by refusal"],
            correctIndex: 0,
            explanation: "The legal content is in the claims, not in the title or in what a layperson would call the device.",
            sourceLessonSlug: "reading-a-patent-narrowly",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Myths, corrections, and how to check
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "five-claims-that-fail",
      title: "17 · Five claims that do not survive checking",
      section: "Section 5 · Myths, corrections, and how to check",
      body: `These five are among the most repeated claims in this entire genre. Every one of them fails, and in every case the true story underneath is available and defensible. Learning the corrections is protective: it means nobody can use one of these to discredit you.

**One: Garrett Morgan invented the traffic light. FALSE.** Morgan's patent 1,475,024 was granted in 1923 for a three-position signal. Electric traffic signals were already in service: **Lester Wire**, a Salt Lake City police officer, built and installed a manually operated electric red and green signal in **1912**; **James Hoge** applied for a signal patent in **1913** and a system on his design was installed in Cleveland on **5 August 1914**; a signal of an earlier, non-electric kind was in use in **London in 1868**. What Morgan contributed was the intermediate warning position, which is a real improvement. Say that instead.

**Two: Lewis Latimer invented the light bulb, or its filament. FALSE.** His patents are 247,097, a method of attaching carbon filaments to conducting wires, with Joseph V. Nichols, and 252,386, a process for manufacturing carbons. Incandescent lamps existed and were being commercialized by Edison and by Joseph Swan. Latimer made carbon filament manufacture better and worked for years as a draftsman and engineer in the industry. That is a substantial career and it does not need the upgrade.

**Three: George Washington Carver invented peanut butter. FALSE.** **Marcellus Gilmore Edson** received US patent **306,727** in **1884** for a process producing a peanut paste, and **John Harvey Kellogg** patented a peanut-food process in the 1890s. Carver was born into slavery, became a distinguished agricultural scientist, and did work on soil restoration, crop rotation, and finding uses for peanuts and sweet potatoes so that Southern farmers could stop destroying their land with cotton. That is more important than a sandwich spread and it is what he actually did.

**Four: Charles Drew died because a white hospital refused him a transfusion. FALSE.** Drew was injured in a car accident in North Carolina in 1950 and taken to Alamance General Hospital, where the white surgeons recognized him and worked to save him. His injuries were beyond what a transfusion could have addressed. The story persisted because it fit a pattern people knew to be real in general, which is exactly how a false story survives. The documented protest is different and stronger: Drew publicly opposed the practice of segregating stored blood by the donor's race, which had no scientific basis.

**Five: "The real McCoy" comes from Elijah McCoy. NOT ESTABLISHED.** It is a plausible and popular etymology. Competing candidates include the Scotch whisky slogan *the real MacKay*, used by G. Mackay and Company in advertising around 1870 and attested colloquially earlier, and the boxer Norman Selby, who fought as Kid McCoy. Language historians have not settled it. The honest form is that the phrase is *associated with* McCoy and its origin is disputed.

:::reveal What did Garrett Morgan's traffic signal patent actually contribute, and what came before it? ||| It added a three-position signal with an intermediate warning state, granted in 1923. Lester Wire installed an electric signal in 1912, James Hoge applied in 1913 with a Cleveland installation in 1914, and a non-electric signal was used in London in 1868.

:::reveal What is the documented Charles Drew protest, as opposed to the false story about his death? ||| He publicly opposed segregating stored blood by the donor's race, a practice with no scientific basis. He died after a 1950 car accident, treated by white surgeons at Alamance General who recognized him and tried to save him.

## Vocabulary
- **Three-position signal**: Morgan's real contribution, an intermediate warning state between stop and go.
- **Marcellus Gilmore Edson**: holder of US patent 306,727 from 1884 for a process producing peanut paste.
- **Alamance General Hospital**: where Charles Drew was treated after his 1950 accident, by surgeons who recognized him and tried to save him.
- **The real MacKay**: the competing whisky-advertising etymology for the phrase usually attributed to Elijah McCoy.
- **Protective correction**: learning a myth's rebuttal so that nobody can use the myth to discredit the accurate claims you make.

## Sources
- James, P. P. (1989). *The real McCoy: African-American invention and innovation, 1619-1930*. Smithsonian Institution Press.
- Fouché, R. (2003). *Black inventors in the age of segregation: Granville T. Woods, Lewis H. Latimer, and Shelby J. Davidson*. Johns Hopkins University Press.
- Ferris State University, Jim Crow Museum. (2004). *The truth about the death of Charles Drew*. https://jimcrowmuseum.ferris.edu/question/2004/june.htm
- Smithsonian Institution. (n.d.). *Diverse voices: Blood transfusion pioneer Dr. Charles Drew*. https://invention.si.edu/invention-stories/diverse-voices-blood-transfusion-pioneer-dr-charles-drew`,
    },
    {
      slug: "where-the-myths-came-from",
      title: "18 · Where these stories come from, and what they cost",
      section: "Section 5 · Myths, corrections, and how to check",
      body: `Nobody set out to lie. Understanding how these claims got made explains why they are so durable and why correcting them is worth the discomfort.

**The vacuum.** For most of the twentieth century, mainstream American education taught this history as essentially empty. Into a vacuum, anything expands. Lists circulated in church bulletins, school assemblies, Black History Month handouts, and later in chain emails and social posts, and each retelling was an act of care rather than an act of deception.

**The upgrade mechanism.** Every retelling shortens. *He patented an improvement in the process for manufacturing carbon filaments used in incandescent lamps* becomes *he invented the filament* becomes *he invented the light bulb*. No single step is a big lie. Three steps produce a claim that a hostile reader can destroy in one search, and the destruction takes the whole list with it.

**The chain list.** There is a widely circulated list crediting Black inventors with the mailbox, the fountain pen, the clothes dryer, the lawn mower, and a dozen more. Some entries are real, several trace to a patent for an improvement rather than an invention, and several cannot be traced to any patent at all. The list is not evidence, because it never carried numbers and nobody can check it.

**What the myths cost.** Three things, and the third is the worst. They give opponents a free win. They crowd out the verified cases: the space Morgan's traffic light occupies is space Rillieux's evaporator or Brown's security system could have had. And they insult the actual achievement, because they imply the real record is not impressive enough to stand up, which is false.

**What the scholarship does instead.** Portia James's Smithsonian study assembled the nineteenth-century record with documentation (James, 1989). Rayvon Fouché took three famous figures and replaced the myths with people, which meant contradicting some cherished stories, and produced a stronger account (Fouché, 2003). Kara Swanson showed that the 1858 opinion was preserved for a century by Black writers whose work mainstream scholarship ignored, which is a finding about **whose** memory counts as knowledge (Swanson, 2020). None of that requires a single unverifiable claim.

**How to correct someone without being insufferable.** Give them the better fact in the same breath. "It was not the first traffic light, but he patented the three-position signal in 1923, and his 1914 safety hood saved lives in the Cleveland tunnel." You have removed a weak claim and handed over two strong ones, and nobody has lost anything.

:::reveal Describe the upgrade mechanism in three steps, using the Latimer example. ||| Patented an improvement in the process for manufacturing carbon filaments, becomes invented the filament, becomes invented the light bulb. No single step is a big lie, and the end point can be destroyed in one search.

:::reveal What are the three costs of the myths, and which is worst? ||| They hand opponents a free win, they crowd out verified cases that could occupy the same space, and worst, they imply the real record is not impressive enough to stand on its own, which is false.

## Vocabulary
- **The vacuum**: the near-total absence of this history from mainstream twentieth-century American education, which the lists grew to fill.
- **The upgrade mechanism**: the way each retelling shortens a claim until an improvement becomes an invention.
- **The chain list**: the widely circulated roster of inventions attributed without patent numbers, which cannot be checked and so is not evidence.
- **Crowding out**: the way a famous false claim occupies the attention that a documented one could have held.

## Sources
- James, P. P. (1989). *The real McCoy: African-American invention and innovation, 1619-1930*. Smithsonian Institution Press.
- Fouché, R. (2003). *Black inventors in the age of segregation: Granville T. Woods, Lewis H. Latimer, and Shelby J. Davidson*. Johns Hopkins University Press.
- Swanson, K. W. (2020). Race and selective legal memory: Reflections on Invention of a Slave. *Columbia Law Review, 120*(4). https://columbialawreview.org/content/race-and-selective-legal-memory-reflections-on-invention-of-a-slave/`,
    },
    {
      slug: "check-it-yourself",
      title: "19 · Check it yourself, in about ten minutes",
      section: "Section 5 · Myths, corrections, and how to check",
      body: `This is the transferable skill. Next time you meet a claim of this kind, run this. It takes about ten minutes and it works on any invention claim, not only the ones in this course.

**Step 1. Restate the claim precisely.** *He invented X* is not checkable until you fix what X means and what invented is supposed to mean. Turn it into a sentence with a person, a thing, and a year.

**Step 2. Look for a patent number.** Search a full-text patent database by the inventor's name. If the claim comes with a number, pull it up directly. **If a claim of this kind has circulated for decades and still has no number attached, that absence is itself information.**

**Step 3. Read the title and claim 1.** Does the document support the sentence from step 1? Most of the time the patent is real and the sentence is bigger than the patent. That is your answer, and it is usually a partial rather than a total correction.

**Step 4. Check what came before.** Search for the same device with an earlier date. This is the step that catches the traffic-light and peanut-butter class of error, and it is the step people skip, because finding a patent feels like finishing.

**Step 5. Check the assignee and the dates.** Assignor to tells you who owned it. Filing versus issue tells you the real priority date. Both take seconds and both prevent common errors.

**Step 6. When there is no patent, change archives.** If the credit ran through authorship, go to the publication record: who published, when, and does an independent paper name the person. That is how the Ball case is settled, by Hollmann's 1922 paper.

**Step 7. Write the accurate sentence, and keep it.** State exactly what the documents support. Keep the numbers with it. A sentence with a patent number in it is portable and permanent, and you will never have to defend it twice.

**One rule for the whole procedure.** If you cannot settle it, say so, and say which document would settle it. **Not established** is an honest and respectable answer. It is what this course says about the *real McCoy* etymology, the Edison and Woods litigation story, and the counts from the Cleveland tunnel rescue, and saying it costs nothing while pretending otherwise costs everything.

:::reveal Which step catches the traffic-light class of error, and why do people skip it? ||| Step 4, checking what came before with an earlier date. People skip it because finding a patent feels like finishing, so they stop before asking whether anything similar predates it.

:::reveal What should you do when the credit ran through authorship rather than a patent? ||| Change archives. Go to the publication record and ask who published, when, and whether an independent paper names the person, which is how Hollmann's 1922 paper settles the Alice Ball case.

## Vocabulary
- **Restating precisely**: converting "he invented X" into a sentence with a person, a thing, and a year, so it can be checked at all.
- **Absence of a number**: the informative silence when a decades-old claim of this kind has never acquired a patent number.
- **Prior art check**: step 4, searching for the same device at an earlier date, and the step most often skipped.
- **Portable sentence**: an accurate claim carrying its own patent numbers, which never has to be defended twice.

## Sources
- Fouché, R. (2003). *Black inventors in the age of segregation: Granville T. Woods, Lewis H. Latimer, and Shelby J. Davidson*. Johns Hopkins University Press.
- James, P. P. (1989). *The real McCoy: African-American invention and innovation, 1619-1930*. Smithsonian Institution Press.
- Swanson, K. W. (2020). Race and selective legal memory: Reflections on Invention of a Slave. *Columbia Law Review, 120*(4). https://columbialawreview.org/content/race-and-selective-legal-memory-reflections-on-invention-of-a-slave/`,
    },
    {
      slug: "quiz-myths-and-checking",
      title: "20 · Knowledge check: myths, corrections, and checking",
      section: "Section 5 · Myths, corrections, and how to check",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Did Garrett Morgan invent the traffic light?",
            options: ["No", "Yes, and his 1923 patent is the earliest signal patent on record", "Yes, though a British inventor filed a similar design the same year", "The question cannot be answered, since no earlier patents survive"],
            correctIndex: 0,
            explanation: "Electric signals were already in service. His patent 1,475,024 added a three-position design with an intermediate warning state.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "Who installed a manually operated electric red and green signal in 1912?",
            options: ["Lester Wire, a Salt Lake City police officer", "James Hoge, whose design was installed in Cleveland", "Garrett Morgan, a decade before his patent application", "An unnamed engineer working for the London Metropolitan Police"],
            correctIndex: 0,
            explanation: "Hoge applied for a signal patent in 1913, with a system on his design installed in Cleveland on 5 August 1914.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "When was a system on James Hoge's design installed in Cleveland?",
            options: ["5 August 1914", "20 November 1923, the day Morgan's patent granted", "27 February 1922, when Morgan filed his application", "In 1868, following the London precedent"],
            correctIndex: 0,
            explanation: "He applied for the patent in 1913, and this course notes the installation date because it predates Morgan's filing by eight years.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "What kind of traffic signal was in use in London in 1868?",
            options: ["A non-electric one", "An electric three-position signal identical to Morgan's", "An automatic timed signal controlled from a central station", "A semaphore linked by telegraph to a police headquarters"],
            correctIndex: 0,
            explanation: "It sits in the list of things preceding Morgan's patent, which is what makes the invented-the-traffic-light claim indefensible.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "Did Lewis Latimer invent the light bulb or its filament?",
            options: ["No", "Yes, the carbon filament, which Edison then commercialized", "Yes, though Joseph Swan filed a competing claim in Britain", "Only the filament, not the lamp, per patent 252,386"],
            correctIndex: 0,
            explanation: "Incandescent lamps existed and were being commercialized by Edison and by Joseph Swan. Latimer improved carbon filament manufacture.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "Who else was commercializing incandescent lamps alongside Edison?",
            options: ["Joseph Swan", "Hiram Maxim alone, who employed Latimer at the time", "Joseph V. Nichols, Latimer's co-inventor", "Granville T. Woods, before he moved to induction telegraphy"],
            correctIndex: 0,
            explanation: "Which is one of the facts that makes the invented-the-light-bulb claim collapse immediately when checked.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "Did George Washington Carver invent peanut butter?",
            options: ["No", "Yes, and he chose not to patent it on principle", "Yes, though Kellogg patented a similar process first", "Only the roasting process, not the grinding process"],
            correctIndex: 0,
            explanation: "Marcellus Gilmore Edson held US patent 306,727 from 1884 for a process producing peanut paste.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "What is Marcellus Gilmore Edson's patent number and year?",
            options: ["306,727, in 1884", "580,787, in 1895", "129,843, in 1872", "322,177, in 1885"],
            correctIndex: 0,
            explanation: "For a process producing a peanut paste. John Harvey Kellogg patented a peanut-food process in the 1890s.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "What did Carver actually work on?",
            options: ["Soil restoration, crop rotation, and uses for peanuts and sweet potatoes", "Mechanized harvesting equipment for Southern smallholders", "Chemical synthesis of industrial oils from agricultural waste", "Plant breeding for cotton varieties resistant to boll weevil"],
            correctIndex: 0,
            explanation: "So that Southern farmers could stop destroying their land with cotton. That is more important than a sandwich spread.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "How did Charles Drew actually die?",
            options: ["Of injuries from a 1950 car accident", "Of a transfusion reaction after being given mismatched blood", "After being turned away from three segregated hospitals in succession", "Of an illness contracted during his blood plasma research"],
            correctIndex: 0,
            explanation: "He was taken to Alamance General Hospital in North Carolina, where the white surgeons recognized him and worked to save him.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "Why could a transfusion not have saved Drew?",
            options: ["His injuries were beyond what a transfusion could address", "The hospital held no blood of his type on the day", "He had a rare antibody that made transfusion impossible", "The accident happened too far from any hospital with a blood bank"],
            correctIndex: 0,
            explanation: "Which is the detail that makes the popular story not merely false but backwards about the medicine involved.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "What is the documented Charles Drew protest?",
            options: ["He opposed segregating stored blood by donor race", "He refused to treat white patients at segregated facilities", "He resigned from the Red Cross over its hiring practices", "He sued the American Medical Association over membership rules"],
            correctIndex: 0,
            explanation: "The practice had no scientific basis, and this protest is both real and stronger than the false story about his death.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "Why did the false Drew story survive so long?",
            options: ["It fit a pattern people knew to be real in general", "Because the hospital's records were sealed until the 1990s", "Because his family confirmed it in a published memoir", "Because no journalist ever attempted to verify it"],
            correctIndex: 0,
            explanation: "That is exactly how a false story survives: it is plausible against a background that is genuinely true.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "What is the status of the \"real McCoy\" etymology?",
            options: ["Not established", "Confirmed, and traced to railroad engineers of the 1870s", "Disproven, and traced conclusively to the whisky slogan", "Irrelevant, since McCoy's patents settle the question"],
            correctIndex: 0,
            explanation: "Language historians have not settled it, and the honest form is that the phrase is associated with McCoy and its origin is disputed.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "Which competing candidate for that phrase involves whisky?",
            options: ["The real MacKay, used by G. Mackay and Company", "The real McCoy, a brand of Kentucky bourbon", "Kid McCoy, the boxer Norman Selby", "A cattle baron of the same surname"],
            correctIndex: 0,
            explanation: "Used in advertising around 1870 and attested colloquially earlier, with Kid McCoy the other main competing candidate.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "Why is learning these corrections described as protective?",
            options: ["Nobody can use one of them to discredit you", "Because repeating a myth can expose a teacher to liability", "Because the corrections are more memorable than the myths", "Because most audiences already know the corrections"],
            correctIndex: 0,
            explanation: "In every case the true story underneath is available and defensible, so the correction costs the speaker nothing.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "What created the vacuum these stories grew to fill?",
            options: ["Mainstream education taught this history as essentially empty", "Patent records were closed to researchers until the 1960s", "Black newspapers stopped covering invention after Reconstruction", "The Patent Office destroyed its racial records in the 1920s"],
            correctIndex: 0,
            explanation: "Into a vacuum, anything expands, and the lists circulated through church bulletins, assemblies, handouts, and later chain emails.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "How does the course characterize each retelling of these claims?",
            options: ["An act of care rather than deception", "A deliberate falsification for political advantage", "A commercial exercise in selling Black History Month material", "An academic failure by historians who should have known better"],
            correctIndex: 0,
            explanation: "Nobody set out to lie, which is why understanding the mechanism matters more than assigning blame.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "What does every retelling do to a claim?",
            options: ["Shortens it", "Adds a source that was not in the original", "Moves it to an earlier date", "Attaches it to a more famous inventor"],
            correctIndex: 0,
            explanation: "Improvement in the process for manufacturing carbon filaments becomes invented the filament becomes invented the light bulb.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "Why is no single step of the upgrade a big lie?",
            options: ["Each step only slightly overstates the one before it", "Each step is supported by a different secondary source", "Each step was made by a different person acting independently", "Each step corrects an error introduced in the previous one"],
            correctIndex: 0,
            explanation: "Three small steps produce a claim a hostile reader can destroy in one search, and the destruction takes the whole list with it.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "Why is the chain list not evidence?",
            options: ["It never carried patent numbers, so nobody can check it", "Because its author has never been identified", "Because it contradicts the Patent Office's own indexes", "Because every entry on it has been individually disproven"],
            correctIndex: 0,
            explanation: "Some entries are real, several trace to improvement patents, and several cannot be traced to any patent at all.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "What are the three costs of the myths?",
            options: ["A free win for opponents, crowding out, and an implied insult", "Legal exposure, reputational damage, and lost funding", "Confusion in classrooms, in museums, and in the patent record", "Wasted research time, duplicated effort, and citation errors"],
            correctIndex: 0,
            explanation: "The implied insult is the worst: the myths suggest the real record cannot stand on its own, which is false.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "What does crowding out mean here?",
            options: ["A famous false claim occupies attention a documented one could hold", "A widely repeated claim prevents scholars from publishing corrections", "A myth displaces the inventor's own account of his work", "A popular story pushes an inventor out of museum collections"],
            correctIndex: 0,
            explanation: "The space Morgan's traffic light occupies is space Rillieux's evaporator or Brown's security system could have had.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "What did Portia James's Smithsonian study do?",
            options: ["Assembled the nineteenth-century record with documentation", "Compiled the first list of Black inventors from Patent Office files", "Argued that the chain list is substantially accurate", "Traced the origin of the phrase the real McCoy"],
            correctIndex: 0,
            explanation: "Published in 1989, and one of the three works this course leans on throughout.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "What did Fouché's approach require him to do?",
            options: ["Contradict some cherished stories", "Restrict his study to inventors with surviving personal papers", "Avoid discussing race in order to keep the analysis technical", "Rely on corporate archives rather than on patent records"],
            correctIndex: 0,
            explanation: "Replacing myths with people produced a stronger account, not a weaker one.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "What is Swanson's finding really about?",
            options: ["Whose memory counts as knowledge", "Whether the 1858 opinion was correctly decided", "How many enslaved inventors were barred from patenting", "Which archives hold the surviving Confederate patent files"],
            correctIndex: 0,
            explanation: "The opinion was preserved for a century by Black writers whose work mainstream scholarship ignored.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "How does the course recommend correcting someone?",
            options: ["Give them the better fact in the same breath", "Cite the scholarship and let them read it themselves", "Ask what source they have before offering a correction", "Correct only in private, never in front of an audience"],
            correctIndex: 0,
            explanation: "Remove a weak claim and hand over two strong ones, so nobody has lost anything in the exchange.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "What is step 1 of the checking procedure?",
            options: ["Restate the claim precisely", "Search a full-text patent database", "Look for earlier examples of the same device", "Identify the assignee on the patent's face"],
            correctIndex: 0,
            explanation: "He invented X is not checkable until you fix what X means. Turn it into a sentence with a person, a thing, and a year.",
            sourceLessonSlug: "check-it-yourself",
          },
          {
            prompt: "What does it mean when a decades-old claim still has no patent number?",
            options: ["The absence is itself information", "The patent was almost certainly destroyed in the 1836 fire", "The invention was in an unpatentable category", "The inventor chose not to file for personal reasons"],
            correctIndex: 0,
            explanation: "A claim that has circulated for decades without acquiring a number has had plenty of opportunity to acquire one.",
            sourceLessonSlug: "check-it-yourself",
          },
          {
            prompt: "In step 3, what is the usual finding?",
            options: ["The patent is real and the sentence is bigger than it", "The patent does not exist at all", "The patent exists but names a different inventor", "The patent supports the claim exactly as stated"],
            correctIndex: 0,
            explanation: "Which makes the result a partial correction rather than a total demolition, and that is usually the honest outcome.",
            sourceLessonSlug: "check-it-yourself",
          },
          {
            prompt: "Which step catches the traffic-light class of error?",
            options: ["Step 4, checking what came before", "Step 2, searching for a patent number", "Step 5, checking the assignee and dates", "Step 7, writing the accurate sentence"],
            correctIndex: 0,
            explanation: "People skip it because finding a patent feels like finishing, so they never ask whether something similar predates it.",
            sourceLessonSlug: "check-it-yourself",
          },
          {
            prompt: "What do the two checks in step 5 tell you?",
            options: ["Who owned it and what the real priority date was", "Whether the patent was litigated and whether it survived", "How many claims it had and how many were allowed", "Whether the inventor filed alone or with a co-inventor"],
            correctIndex: 0,
            explanation: "Assignor to gives ownership, and filing versus issue gives priority. Both take seconds and both prevent common errors.",
            sourceLessonSlug: "check-it-yourself",
          },
          {
            prompt: "What does step 6 tell you to do when there is no patent?",
            options: ["Change archives and go to the publication record", "Conclude that the claim is unsupported and stop", "Search foreign patent offices for an equivalent filing", "Look for a trademark registration instead"],
            correctIndex: 0,
            explanation: "Ask who published, when, and whether an independent paper names the person. That is how Hollmann's 1922 paper settles the Ball case.",
            sourceLessonSlug: "check-it-yourself",
          },
          {
            prompt: "What makes a sentence portable, in step 7?",
            options: ["It carries its own patent numbers", "It is short enough to repeat from memory", "It names a scholar rather than a document", "It avoids any claim about who was first"],
            correctIndex: 0,
            explanation: "A sentence with a patent number in it is permanent, and you will never have to defend it twice.",
            sourceLessonSlug: "check-it-yourself",
          },
          {
            prompt: "What is the one rule governing the whole procedure?",
            options: ["If you cannot settle it, say so and name what would", "Never repeat a claim you did not verify personally", "Prefer primary sources to secondary ones in every case", "Always give the inventor the benefit of the doubt"],
            correctIndex: 0,
            explanation: "Not established is an honest and respectable answer, and saying it costs nothing while pretending otherwise costs everything.",
            sourceLessonSlug: "check-it-yourself",
          },
          {
            prompt: "Which three items does this course itself label not established?",
            options: ["The McCoy etymology, the Edison-Woods story, and the Cleveland rescue counts", "The 1858 opinion, the Confederate act, and the Baker list", "Rillieux's patents, Latimer's patents, and Morgan's patents", "Ball's method, Thomas's shunt, and West's geodesy work"],
            correctIndex: 0,
            explanation: "Each is hedged in the lesson and filed as an open source check rather than resolved by picking a version.",
            sourceLessonSlug: "check-it-yourself",
          },
          {
            prompt: "Roughly how long does the checking procedure take?",
            options: ["About ten minutes", "About an hour, once the archives are located", "Several days, since patent records must be requested", "About a minute, using a single database query"],
            correctIndex: 0,
            explanation: "And it works on any invention claim, not only the ones in this course.",
            sourceLessonSlug: "check-it-yourself",
          },
          {
            prompt: "Morgan's real contribution should be stated how?",
            options: ["He patented the three-position signal in 1923", "He invented the first traffic signal used anywhere in America", "He designed the first electric signal, which Cleveland installed in 1914", "He improved the London signal design of 1868 for American streets"],
            correctIndex: 0,
            explanation: "Paired with the 1914 safety hood that saved lives in the Cleveland tunnel, that is two strong claims replacing one weak one.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "Latimer's actual career is best described as what?",
            options: ["Years as a draftsman and engineer, with real patents", "A brief period of invention followed by a business career", "Work as a laboratory assistant with no patents of his own", "An independent inventor who never worked for a company"],
            correctIndex: 0,
            explanation: "It is a substantial career that does not need the upgrade to the light bulb to be worth teaching.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "Which of these five claims is NOT flatly false?",
            options: ["The real McCoy etymology, which is unsettled", "That Morgan invented the traffic light", "That Latimer invented the light bulb", "That Drew was refused a transfusion"],
            correctIndex: 0,
            explanation: "It sits in the not-established category rather than the false one, which is a distinction the course maintains deliberately.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "Kellogg's peanut-food process was patented in which decade?",
            options: ["The 1890s", "The 1880s, before Edson's process patent", "The 1900s, after Carver began his peanut work", "The 1870s, alongside the earliest nut butters"],
            correctIndex: 0,
            explanation: "Edson's patent 306,727 came earlier, in 1884, and both precede Carver's peanut work entirely.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "Where were these lists circulated before the internet?",
            options: ["Church bulletins, school assemblies, and handouts", "Patent Office publications and government pamphlets", "Academic journals and conference proceedings", "Corporate advertising and product packaging"],
            correctIndex: 0,
            explanation: "Later they moved to chain emails and social posts, but the mechanism and the motive stayed the same.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "Which is the strongest reason to correct a myth in this genre?",
            options: ["The verified record is impressive enough without it", "Accuracy is a professional obligation regardless of consequence", "Museums will not display material containing errors", "The corrections make better classroom discussion material"],
            correctIndex: 0,
            explanation: "The myths imply the real record cannot stand on its own, which is the insult buried inside the well-meant repetition.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "What does the course say about scholarship in this field?",
            options: ["It requires no unverifiable claims to make its case", "It has largely accepted the popular versions of these stories", "It focuses on the twentieth century and neglects the nineteenth", "It relies on the chain list where patent records are missing"],
            correctIndex: 0,
            explanation: "James, Fouché, and Swanson each produced a strong account without a single claim that fails checking.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "In step 2, where do you search?",
            options: ["A full-text patent database, by inventor name", "The Baker list compiled around 1900", "Newspaper archives from the inventor's home city", "Museum catalogs holding patent models"],
            correctIndex: 0,
            explanation: "If the claim already comes with a number, pull the document up directly instead of searching.",
            sourceLessonSlug: "check-it-yourself",
          },
          {
            prompt: "The procedure's output is what?",
            options: ["An accurate sentence you keep, with its numbers", "A verdict of true or false on the original claim", "A list of sources for someone else to evaluate", "A decision about whether the inventor was wronged"],
            correctIndex: 0,
            explanation: "State exactly what the documents support, keep the numbers with it, and the sentence never has to be defended twice.",
            sourceLessonSlug: "check-it-yourself",
          },
          {
            prompt: "Why does the course put the checking lesson last?",
            options: ["It is the transferable skill the rest of the course builds toward", "Because it requires the patent numbers from Section 4 to work", "Because it is optional for readers who trust the earlier lessons", "Because the guards require a procedural lesson at the end"],
            correctIndex: 0,
            explanation: "It works on any invention claim, in this subject or another, which is what makes it worth more than the case list.",
            sourceLessonSlug: "check-it-yourself",
          },
          {
            prompt: "Naming the document that would settle an open question does what?",
            options: ["Turns an unresolved claim into an actionable task", "Substitutes for actually resolving the question", "Shifts responsibility for the claim onto the reader", "Allows the claim to be repeated in the meantime"],
            correctIndex: 0,
            explanation: "It is the same discipline as filing a source check: a hedge with no named next step is a hedge nobody will ever clear.",
            sourceLessonSlug: "check-it-yourself",
          },
          {
            prompt: "The correction sentence about Morgan hands over which two strong claims?",
            options: ["The 1923 three-position patent and the 1914 safety hood", "The 1914 safety hood and the Carnegie Medal he was denied", "The 1923 patent and the sale of the design to General Electric", "The Cleveland rescue and the 1912 Salt Lake City installation"],
            correctIndex: 0,
            explanation: "Two documented achievements replacing one indefensible claim, which is a trade the listener has no reason to refuse.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "What is the honest form of the real McCoy claim?",
            options: ["The phrase is associated with him and its origin is disputed", "The phrase definitely derives from his lubricators", "The phrase definitely derives from the whisky slogan", "The phrase has no connection to any person named McCoy"],
            correctIndex: 0,
            explanation: "Language historians have not settled it, and both competing candidates are documented.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "Which boxer is a competing candidate for the phrase?",
            options: ["Norman Selby, who fought as Kid McCoy", "Jack Johnson, the heavyweight champion", "Joe Gans, the lightweight champion of the same era", "Peter Jackson, the Australian heavyweight"],
            correctIndex: 0,
            explanation: "Alongside the Scotch whisky slogan the real MacKay, used by G. Mackay and Company in advertising around 1870.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "Latimer's two patents cover which subject?",
            options: ["Carbon filament manufacture and attachment", "The vacuum sealing of lamp globes", "The socket and base of the incandescent lamp", "The generator supplying current to lamp circuits"],
            correctIndex: 0,
            explanation: "247,097 with Nichols covers attaching filaments to conducting wires; 252,386 covers making the carbons themselves.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "What happens to a whole list when one entry on it is destroyed?",
            options: ["The destruction takes the rest of the list with it", "The remaining entries are judged individually on their merits", "The list gains credibility for having been tested", "Only the disproven entry is discarded"],
            correctIndex: 0,
            explanation: "Which is why a shorter defensible list is worth more than a longer one carrying an easy target.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "Why does the course say nobody set out to lie?",
            options: ["The retellings were acts of care filling a real absence", "Because the original sources were themselves mistaken", "Because the errors were introduced by publishers, not authors", "Because the claims were true when first made and later disproven"],
            correctIndex: 0,
            explanation: "Mainstream education taught this history as essentially empty, and into a vacuum anything expands.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — pools 40, serves 10
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-exam-who-gets-the-credit",
      title: "21 · Final assessment",
      section: "Final assessment",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "A patent is fundamentally what?",
            options: ["A right to exclude, traded for disclosure", "An official determination that the holder invented first", "A government license permitting manufacture of a device", "A permanent property right in an idea"],
            correctIndex: 0,
            explanation: "Treating it as a prize is the first error in most arguments about invention credit.",
            sourceLessonSlug: "what-a-patent-is-and-is-not",
          },
          {
            prompt: "Which part of a patent carries the legal content?",
            options: ["The numbered claims", "The title, drafted by the attorney for precision", "The abstract, which summarizes the protected matter", "The drawings, which show the claimed embodiment"],
            correctIndex: 0,
            explanation: "Claim 1 is normally broadest, and every later claim narrows it. Two similar titles can protect entirely different things.",
            sourceLessonSlug: "reading-a-patent-narrowly",
          },
          {
            prompt: "What does a US patent never record about the inventor?",
            options: ["Race", "Residence at the time of filing", "Whether the patent has been assigned", "Whether a co-inventor was named"],
            correctIndex: 0,
            explanation: "Which is why every count in this field is a reconstruction built by matching names against other records, and is a floor rather than a total.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "Who compiled the foundational list of Black inventors around 1900?",
            options: ["Henry E. Baker", "Portia P. James, in her Smithsonian study", "Rayvon Fouché, from corporate archives", "Kara W. Swanson, from Attorney General opinions"],
            correctIndex: 0,
            explanation: "A Black Patent Office employee who wrote to attorneys and examiners, so the list captures only inventors somebody remembered.",
            sourceLessonSlug: "the-paper-trail-and-its-holes",
          },
          {
            prompt: "How many mechanisms does the course separate out of the word \"stolen\"?",
            options: ["Five", "Two", "Three", "Seven"],
            correctIndex: 0,
            explanation: "Barred by law, assigned to an employer, absorbed into a brand, published by a colleague, and outside the patent system entirely.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "Which mechanism leaves no document at all?",
            options: ["Legal exclusion", "Assignment to an employer", "Publication by a colleague", "Absorption into a brand name"],
            correctIndex: 0,
            explanation: "Which is exactly why the 1858 opinion matters: it is the rare case where the barrier itself was written down.",
            sourceLessonSlug: "five-ways-a-name-disappears",
          },
          {
            prompt: "Who applied for the cotton scraper patent that produced the 1858 opinion?",
            options: ["Oscar J. E. Stuart", "Ned, the enslaved mechanic who devised it", "Joseph Emory Davis, of Mississippi", "Joseph Holt, Commissioner of Patents"],
            correctIndex: 0,
            explanation: "A Pike County planter who had not invented it. Ned, whom he held, had.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "Who issued the Invention of a Slave opinion, and when?",
            options: ["Jeremiah S. Black, 10 June 1858", "Joseph Holt, in 1857 as Commissioner of Patents", "Roger Taney, in Dred Scott v. Sandford", "Rufus Rhodes, for the Confederate Patent Office"],
            correctIndex: 0,
            explanation: "Brief to the point of curtness, and depending on the 1836 Act's oath requirement plus Dred Scott.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "What was the opinion's actual legal effect?",
            options: ["The invention became ownable by nobody", "Enslavers gained a clear right to patent slaves' inventions", "Enslaved inventors could patent through a trustee", "Free Black inventors were barred from applying"],
            correctIndex: 0,
            explanation: "Ned could not swear the oath after Dred Scott, and Stuart could not swear it because he was not the inventor.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "What is Swanson's argument about the 1858 opinion?",
            options: ["It was never forgotten, only ignored by one audience", "It was legally incorrect on its own premises", "It was suppressed by the Patent Office for a century", "It produced a long line of reported litigation"],
            correctIndex: 0,
            explanation: "Black writers and activists cited it for over a century in publications mainstream legal scholarship did not read.",
            sourceLessonSlug: "the-1858-opinion",
          },
          {
            prompt: "The Confederate patent act of 1861 provided what, and produced what?",
            options: ["Enslaver patenting of slaves' inventions, and no identified cases", "A ban on Northern patents, and widespread infringement", "Automatic grants without examination, and thousands of patents", "Compensation for enslaved inventors, never actually paid"],
            correctIndex: 0,
            explanation: "Of the few hundred Confederate patents, none appears to have originated with an enslaved inventor.",
            sourceLessonSlug: "the-confederate-answer",
          },
          {
            prompt: "Whose failed patent application sits behind the 1861 provision?",
            options: ["The Davis brothers, on Benjamin Montgomery's propeller", "Oscar Stuart's, on Ned's cotton scraper", "Rufus Rhodes's, on a rifle mechanism", "Thomas Jennings's, on a dry scouring process"],
            correctIndex: 0,
            explanation: "Joseph Emory Davis enslaved Montgomery, and his brother Jefferson later became president of the Confederacy.",
            sourceLessonSlug: "the-confederate-answer",
          },
          {
            prompt: "What is Thomas L. Jennings's patent number and year?",
            options: ["3306x, 1821", "X8447, 1834", "3,237, 1843", "305,474, 1884"],
            correctIndex: 0,
            explanation: "For a dry scouring process. The X marks a patent reconstructed after the December 1836 Patent Office fire.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "What did Henry Blair patent as X8447 in 1834?",
            options: ["A corn seed planter", "A cotton planter, with the corn planter following in 1836", "A dry scouring process for fabric", "A dough kneader and roller"],
            correctIndex: 0,
            explanation: "He patented a cotton planter two years later, and he signed with a mark because he could not write.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "How does the course treat the claim that Blair is the only inventor recorded as a colored man?",
            options: ["As widely reported, not verified", "As confirmed against the Patent Office indexes", "As demonstrably false", "As irrelevant to the history"],
            correctIndex: 0,
            explanation: "It is hedged in the lesson and filed as an open source check, per the course's own rule about unresolvable hedges.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "Which patent covers Rillieux's broader multiple-effect system?",
            options: ["4,879, dated 10 December 1846", "3,237, granted in 1843", "129,843, granted in 1872", "306,727, granted in 1884"],
            correctIndex: 0,
            explanation: "The 1843 patent covered a double-effect evaporator; the 1846 patent covered the broader multiple-effect system.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "Why can no \"first Black woman patentee\" claim be settled?",
            options: ["Race is unrecorded and women often filed under initials", "Because all such patents were destroyed in the 1836 fire", "Because the Patent Office sealed women's applications until 1900", "Because the relevant patents were all filed jointly with husbands"],
            correctIndex: 0,
            explanation: "Martha Jones holds 77,494 from 1868 and Mary Jones De Leon holds 140,253 from 1873, both before Judy Reed's 1884 patent.",
            sourceLessonSlug: "free-patentees-and-the-first-problem",
          },
          {
            prompt: "What is a pre-invention assignment?",
            options: ["An employment agreement transferring rights before inventions exist", "A sale of a patent negotiated after it issues", "A licensing deal covering a defined field of use", "A court-ordered transfer following an infringement finding"],
            correctIndex: 0,
            explanation: "It is the dominant mechanism of the twentieth century and it is not specific to race, which is why it explains so much.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "Under assignment, what does the inventor keep?",
            options: ["Their name on the face of the patent", "The right to license the invention", "The right to sue infringers", "A statutory royalty on revenue"],
            correctIndex: 0,
            explanation: "US law requires the actual human inventors to be named, so the name survives even after every valuable right has moved.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "Why was assignment a constrained choice for a Black inventor of the era?",
            options: ["Independent invention needed capital, attorneys, credit, and courtroom standing", "Because employers were legally permitted to compel signature", "Because federal law required all Black inventors to assign", "Because patent attorneys refused to represent independent inventors"],
            correctIndex: 0,
            explanation: "Every one of those was restricted by segregation, so the alternative was frequently no patent at all.",
            sourceLessonSlug: "assignment",
          },
          {
            prompt: "Which three inventors does Fouché's 2003 study cover?",
            options: ["Woods, Latimer, and Davidson", "Rillieux, McCoy, and Morgan", "Ball, Thomas, and West", "Jennings, Blair, and Reed"],
            correctIndex: 0,
            explanation: "An independent inventor, a corporate engineer, and a technical worker inside the federal government.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "Which patent covers the electret microphone, and who filed it?",
            options: ["3,118,022, West and Sessler at Bell Labs in 1962", "3,482,037, Marie and Albert Brown in 1966", "4,591,071, Lonnie Johnson in 1986", "252,386, Lewis Latimer in 1882"],
            correctIndex: 0,
            explanation: "Its descendants became overwhelmingly dominant in telephones, hearing aids, camcorders, and computers.",
            sourceLessonSlug: "inside-the-corporation",
          },
          {
            prompt: "In science and medicine, credit runs through what?",
            options: ["Authorship and the name on the procedure", "Patents, exactly as in engineering", "Institutional affiliation at the time of discovery", "Priority letters filed with a learned society"],
            correctIndex: 0,
            explanation: "No patent was ever at issue in the Ball, Thomas, or West cases, which is why they need a different archive.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "Who published a paper in 1922 crediting Alice Ball?",
            options: ["Harry T. Hollmann", "Arthur L. Dean", "Alfred Blalock", "Helen Taussig"],
            correctIndex: 0,
            explanation: "He named the technique the Ball Method after it had circulated as the Dean method, which is a large part of why her name survived.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "What happened to Vivien Thomas in the 1945 JAMA paper?",
            options: ["He was not named", "He was listed as a co-author with Blalock", "He was credited in an acknowledgment but not as an author", "He was named as the sole originator of the technique"],
            correctIndex: 0,
            explanation: "He had done nearly two years of laboratory work and coached Blalock through the 1944 operation from a stool behind him.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "What is the procedure now called, and when was the renaming reported?",
            options: ["Blalock-Taussig-Thomas shunt, reported by the AMA in 2023", "Thomas shunt, renamed by Johns Hopkins in 1976", "Blalock-Thomas procedure, renamed in 1945", "Hopkins shunt, renamed in 2020"],
            correctIndex: 0,
            explanation: "Johns Hopkins had awarded Thomas an honorary Doctor of Laws in 1976 and appointed him an instructor in surgery.",
            sourceLessonSlug: "credit-without-a-patent",
          },
          {
            prompt: "What is Elijah McCoy's 1872 patent, by number and title?",
            options: ["129,843, Improvement in Lubricators for Steam Engines", "373,915, an induction telegraphy patent", "247,097, a method of attaching carbon filaments", "1,113,675, a breathing device"],
            correctIndex: 0,
            explanation: "It fed oil to moving parts while the engine ran. Note the word improvement in the title.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "Which Woods dispute is documented, as opposed to widely repeated?",
            options: ["The interference against Lucius Phelps", "Two lawsuits brought and lost by Thomas Edison", "A challenge from Bell over transmitter claims", "An appeal against the Commissioner's refusal"],
            correctIndex: 0,
            explanation: "The Edison story is repeated nearly everywhere and this course files it as an open source check rather than teaching it.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "What do Latimer's patents 247,097 and 252,386 cover?",
            options: ["Filament attachment and carbon manufacture", "The complete design of an incandescent lamp", "A vacuum pump and a lamp socket", "Electric distribution and lamp wiring"],
            correctIndex: 0,
            explanation: "Both are manufacturing improvements to incandescent lighting, and neither is the invention of the light bulb.",
            sourceLessonSlug: "documented-cases-nineteenth-century",
          },
          {
            prompt: "What was Garrett Morgan's safety hood, and what is its number?",
            options: ["A breathing device drawing air from near the floor, 1,113,675", "A three-position traffic signal, 1,475,024", "A home security system, 3,482,037", "A lubricator for steam engines, 129,843"],
            correctIndex: 0,
            explanation: "Issued 13 October 1914, and used by Morgan and his brother in the Cleveland tunnel on 25 July 1916.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "Why does the course give no rescue figures for the 1916 Cleveland tunnel?",
            options: ["Accounts differ, so it is filed as an open source check", "Because the rescue has been shown not to have occurred", "Because the city sealed its records permanently", "Because the figures are disputed only in recent sources"],
            correctIndex: 0,
            explanation: "Picking whichever version reads best is precisely the failure this course is designed to prevent.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "What does Marie Van Brittan Brown's patent 3,482,037 describe?",
            options: ["A camera on multiple peepholes, monitor, two-way audio, remote release, alarm", "A pressure mat wired to a bell in a neighboring house", "An autodialer connected to a police switchboard", "A photoelectric beam triggering a siren"],
            correctIndex: 0,
            explanation: "Filed 1 August 1966 with Albert L. Brown as co-inventor, and issued 2 December 1969.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "Why is Lonnie Johnson's case unusual in this course?",
            options: ["He kept the value of his own invention", "He is the only inventor here without a patent", "His patent was the only one assigned to an employer", "His invention was never commercialized"],
            correctIndex: 0,
            explanation: "Patent 4,591,071, titled Squirt gun, granted 27 May 1986, licensed to Larami on his own terms.",
            sourceLessonSlug: "documented-cases-twentieth-century",
          },
          {
            prompt: "Which date does patent priority run from?",
            options: ["The filing date", "The issue date", "The date of first public demonstration", "The date the assignment is recorded"],
            correctIndex: 0,
            explanation: "Filing and issue are often years apart, and comparing the two different date types produces confidently wrong conclusions.",
            sourceLessonSlug: "reading-a-patent-narrowly",
          },
          {
            prompt: "Did Garrett Morgan invent the traffic light?",
            options: ["No; Wire installed one in 1912 and Hoge's went up in Cleveland in 1914", "Yes; his 1923 patent is the earliest on record", "Yes, in the United States, though London had one in 1868", "The question is unanswerable from surviving records"],
            correctIndex: 0,
            explanation: "His real contribution is the three-position signal with an intermediate warning state, patent 1,475,024 in 1923.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "Did George Washington Carver invent peanut butter?",
            options: ["No; Edson held patent 306,727 in 1884", "Yes, though he declined to patent it", "Yes, and Kellogg's later patent infringed it", "Only the modern emulsified form of it"],
            correctIndex: 0,
            explanation: "Carver's real work was soil restoration, crop rotation, and uses for peanuts and sweet potatoes so farmers could stop destroying their land.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "How did Charles Drew actually die, and what was his real protest?",
            options: ["Of 1950 accident injuries; he opposed segregating stored blood by donor race", "Of a refused transfusion; he opposed the Red Cross hiring policy", "Of illness contracted in the laboratory; he opposed plasma exports", "Of accident injuries; he opposed the segregation of medical schools"],
            correctIndex: 0,
            explanation: "White surgeons at Alamance General recognized him and worked to save him, and his injuries were beyond what a transfusion could address.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "What is the status of the \"real McCoy\" etymology?",
            options: ["Not established, with competing candidates documented", "Confirmed as deriving from Elijah McCoy's lubricators", "Disproven, and traced to the whisky slogan conclusively", "Settled by Portia James's 1989 study"],
            correctIndex: 0,
            explanation: "The whisky slogan the real MacKay and the boxer Kid McCoy are both documented competitors, and language historians have not settled it.",
            sourceLessonSlug: "five-claims-that-fail",
          },
          {
            prompt: "What is the upgrade mechanism?",
            options: ["Each retelling shortens the claim until improvement becomes invention", "Each retelling adds a citation the original lacked", "Each retelling moves the claim to an earlier date", "Each retelling attaches the claim to a more famous name"],
            correctIndex: 0,
            explanation: "No single step is a big lie, and three steps produce a claim a hostile reader can destroy in one search.",
            sourceLessonSlug: "where-the-myths-came-from",
          },
          {
            prompt: "Which step of the checking procedure catches the traffic-light error?",
            options: ["Checking what came before, with an earlier date", "Searching a full-text patent database by name", "Reading the title and claim 1", "Checking the assignee on the patent's face"],
            correctIndex: 0,
            explanation: "People skip it because finding a patent feels like finishing, so they never ask whether something similar predates it.",
            sourceLessonSlug: "check-it-yourself",
          },
        ],
      },
    },
  ],
};
