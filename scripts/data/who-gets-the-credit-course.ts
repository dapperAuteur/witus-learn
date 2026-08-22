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
    // NEXTCHUNK
  ],
};
