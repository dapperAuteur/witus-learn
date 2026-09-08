import type { AuthoredCourse } from "./authored-course";

// "Esther Lederberg: The Technique, the Phage, and the Record" (Culture & History / Science).
//
// SPELLING NOTE, read this before "fixing" anything. BAM's source list writes the surname
// "Lederburg". The correct spelling, the one on every paper, every Nobel Foundation page and the
// Stanford obituary, is LEDERBERG, with an "e" in the second syllable. This file uses Lederberg
// throughout on purpose. Do not "correct" it back to the list's spelling.
//
// WHY THIS COURSE IS IN THIS CATALOG, and the scope it belongs to:
// BAM widened the brief past Black subjects to members of marginalized communities who did not get
// credit for their work. Esther Miriam Zimmer Lederberg (1922 to 2006) is that case in its most
// heavily documented form: the paperwork that would settle a credit argument, author lines, prize
// motivations, an official biography, a career chronology, mostly survives and is mostly public.
//
// THE FRAME, and it is the same trap this catalog flagged for the Du Bois women:
// DO NOT DEFINE HER BY HER MARRIAGE. "The wife who was overlooked" reproduces the exact move the
// course exists to expose, because it makes the marriage the fact and the science the footnote. So
// the order of this course is deliberate and must not be rearranged: Sections 1 to 3 teach the
// TECHNIQUE and the BIOLOGY (replica plating, phage lambda and lysogeny, the fertility factor and
// conjugation) with her name attached where the record attaches it. Only then, in Sections 4 and 5,
// does the course ask the attribution question, which by that point the learner can actually
// evaluate, because they know what the work was.
//
// DO NOT OVERCLAIM. The honest question is what the evidence supports about credit ALLOCATION, not
// a verdict that the 1958 prize was wrongly awarded. Two structural facts keep the course honest:
// the Nobel Foundation statutes cap a prize at three persons and the 1958 prize already carried
// three names, and nobody can reconstruct the committee's deliberations from published sources. The
// analytical frame is the Matilda effect, a real and citable phenomenon named by Margaret Rossiter
// in 1993, argued carefully with numbers from Lincoln et al. (2012). Section 5 also teaches the
// other direction of error: popular retellings that overshoot in her favour, which make the true
// record easier to dismiss.
//
// FETCH-OR-DO-NOT-CITE. Every DOI, URL and page reference in this file was retrieved and read
// during the authoring session. nobelprize.org was fetched directly (its summary, facts,
// biographical and banquet-speech pages, the Nobel lecture PDF, and the Statutes of the Nobel
// Foundation). Europe PMC and PubMed Central supplied the full text of Wendling and Bailey (2025)
// and Gottesman and Weisberg (2004). Every journal citation was checked against the Crossref record
// for its DOI, which is how the AUTHOR ORDER printed in this course was established rather than
// assumed. Where a source could not be reached (the Lancet obituary, the Online Archive of
// California finding aid, the estherlederberg.com memorial site), the claim is either dropped or
// hedged in the lesson and filed as a research check. See the block at the BOTTOM of this file.
//
// House style, matching deaf-america-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3 to 6 lesson-specific terms; APA 7 `## Sources`;
// a quiz per teaching section (serving 5, passing 80, shuffled) plus a final serving 10 placed last;
// every question carries `explanation` + `sourceLessonSlug`. Correct options are written SHORT and
// distractors long and specifically wrong, so `check-longest-option` passes by construction. No em
// dashes in learner-facing copy.
export const ESTHER_LEDERBERG_COURSE: AuthoredCourse = {
  title: "Esther Lederberg: The Technique, the Phage, and the Record",
  description:
    "Esther Miriam Zimmer Lederberg developed replica plating, discovered bacteriophage lambda, and found the fertility factor that explained how bacteria mate. Molecular biology runs on all three. This course teaches the science first, in that order, because the alternative order is the problem: introduce her as somebody's wife and the work becomes the footnote, which is exactly the move the record shows being made about her for fifty years. Only after you can say what replica plating does and why a turbid plaque mattered does the course open the attribution question, and then it opens it with paperwork rather than outrage: the exact motivation of the 1958 Nobel Prize in Physiology or Medicine and the exact shares, the Nobel Foundation's own 1958 biography of the laureate, which mentions her in a marriage sentence and gives her job title as research associate, and the author lines of the papers themselves, checked one by one against the journals' own records. It also teaches the limits. The Nobel statutes cap a prize at three people and that prize already had three names, so the honest question is about how credit was allocated across a career and a literature, not a verdict on a committee whose deliberations nobody can read. The frame is the Matilda effect, named by Margaret Rossiter in 1993 and measured across thirteen scientific societies in 2012. And because getting it wrong in her favour makes the true record easier to dismiss, the last lesson corrects the corrections."
  ,
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The technique
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "replica-plating-the-method",
      title: "1 · Replica plating, and what a piece of velvet does",
      section: "Section 1 · The technique: replica plating",
      body: `Start with the difficulty the technique removes.

You have a plate of a few hundred bacterial colonies, each grown from one cell. You want to know which can survive a drug. The obvious test ruins the evidence: expose the colonies to the drug and the survivors have now met it, so a critic can say the drug caused the resistance rather than revealed it.

**The method.** Call the plate of colonies the master plate. Press a sterile pad of velvet, stretched over a cylindrical block, gently onto its surface. The pile works as a few thousand tiny inoculating needles, lifting cells from every colony at once. Press that pad onto fresh plates carrying different growth media. Each is a replica, with the colonies in the same spatial arrangement as the master.

**Why the arrangement is the point.** Position preserved makes the plate readable as a map. A colony that grows on the master and fails on a replica lacking leucine cannot make leucine. A colony that grows on the drug replica is resistant. And in both cases the colony you keep is its sibling, still sitting on the master, which never met the drug or the deficient medium.

**That is indirect selection**, the conceptual core rather than a handling detail. You select by reading what a colony's siblings did. Joshua Lederberg described the mechanics in his Nobel lecture: "Replica plating, transposing a pattern of surface growth from plate to plate with a sheet of velvet, takes the place of assaying inocula distributed in tubes."

**Where it was published, and under whose names.** Lederberg, J., and Lederberg, E. M. (1952), "Replica plating and indirect selection of bacterial mutants," Journal of Bacteriology, volume 63, issue 3, pages 399 to 406. Note the author line now rather than in Section 4: Joshua Lederberg first, Esther M. Lederberg second. Reviewers describe the technique's development as hers. Wendling and Bailey, in Genetics in 2025, call it "Lederberg's development of the replica plating technique" in a passage about Esther, and say it "became the gold standard for studying bacterial evolution."

**What it made ordinary.** Screening for auxotrophs, drug resistance and phage resistance at hundreds of colonies per pressing rather than one tube at a time. It is still standard: fluctuation assays and experimental evolution studies use it to test a population against several stressors in parallel. A technique that outlives seventy years of method turnover is infrastructure, and infrastructure is systematically harder to credit than a result, a thread Section 5 picks up.

**One honest limit, stated by the man who shared the byline.** Replica plating did not by itself establish that mutations are spontaneous. Lesson 2 is about what it actually did.

:::reveal In replica plating, which colony do you keep, and why does that matter? ||| The sibling colony still on the master plate, which has never been exposed to the drug or the deficient medium. Keeping that one is what makes the selection indirect, so nobody can argue the test conditions caused the trait.

:::reveal What does the velvet pad physically do? ||| Its pile acts as several thousand tiny inoculating needles, lifting cells from every colony at once and depositing them on fresh plates in the same spatial arrangement.

:::reveal Give the journal, volume and year of the paper that introduced replica plating. ||| Journal of Bacteriology, volume 63, 1952, pages 399 to 406.

## Vocabulary
- **Master plate**: the original plate of colonies, kept away from any selective condition, from which replicas are taken and to which you return to pick a colony.
- **Replica plate**: a fresh plate carrying an impression of the master's colonies in the same arrangement, usually on a different growth medium.
- **Indirect selection**: identifying a trait by observing what a colony's siblings do under a test condition, so the line you keep is never exposed to it.
- **Auxotroph**: a strain that cannot make some nutrient it needs, which replica plating detects as growth on one plate and absence on another.

## Sources
Lederberg, J., & Lederberg, E. M. (1952). Replica plating and indirect selection of bacterial mutants. *Journal of Bacteriology, 63*(3), 399-406. https://doi.org/10.1128/jb.63.3.399-406.1952

Lederberg, J. (1959). *A view of genetics* [Nobel lecture, May 29, 1959]. Nobel Foundation. https://www.nobelprize.org/prizes/medicine/1958/lederberg/lecture/

Wendling, C. C., & Bailey, Z. M. (2025). Pioneer of bacterial genetics: The legacy of Esther Miriam Lederberg. *Genetics, 231*(3), iyaf160. https://doi.org/10.1093/genetics/iyaf160`,
    },
    {
      slug: "what-replica-plating-settled",
      title: "2 · What replica plating settled, and what it did not",
      section: "Section 1 · The technique: replica plating",
      body: `In the 1940s a real argument ran through bacteriology. When a culture exposed to a drug turns out to contain resistant cells, where did the resistance come from?

**Two answers.** Either the drug instructs the cell, so the environment writes the trait, or rare mutants were already present and the drug merely kills everything else. The stakes were larger than antibiotics: if bacteria could be instructed by their surroundings, the gene as a unit with its own line of descent was in trouble for these organisms.

**The first decisive attack was statistical.** Luria and Delbruck, in "Mutations of bacteria from virus sensitivity to virus resistance," Genetics, volume 28, 1943, pages 491 to 511, reasoned about variation between parallel cultures. If mutations arise at random during growth, an early one yields a large clone and a late one a small clone, so counts should fluctuate widely. If the selective agent induces the change on contact, counts should be nearly uniform. They saw wide fluctuation. That is the fluctuation test.

**What it could not do.** The argument lived in liquid culture and in the statistics of counts. It did not hand you a resistant colony you could hold up and say: this line never met the selective agent. Wendling and Bailey state the limitation in their 2025 review, writing that the Luria and Delbruck "method relied on liquid cultures and statistical analysis, making direct screening for resistant mutants difficult."

**What replica plating did.** It made the mutants physically obtainable. Spread a culture on a master plate, replica it onto a drug plate, read which positions grew, then go back to the master and pick the colony at that position. It is a sibling clone of the resistant one and its whole ancestry is drug-naive. Repeat and you enrich toward a pure culture. Using this technique, the 2025 review says, the Lederbergs "conducted an elegant experiment confirming that antibiotic-resistant mutants were present before exposure to antibiotics."

**Now the part most retellings drop.** Replica plating was not the discovery that mutations are spontaneous. Joshua Lederberg said so in the Nobel lecture, right after describing indirect selection: "This proof merely reinforces the incisive arguments that had already been forwarded by many other authors." In the same passage he notes that dilution sampling in tubes reaches the same kind of proof, and that replica plating simply gets there more conveniently.

**Hold both things at once**, because this course will ask you to do it repeatedly. The honest sentence is "confirmed and made routine," not "proved for the first time." And replica plating did turn a statistical inference into an object a technician could pick off a plate, which is why it is still in use when the fluctuation test alone would not have carried the field. Overstating a contribution and understating it are both ways of getting the record wrong.

**Notice the shape of this contribution.** Nobody wins an argument by inventing a screening method. The method lets other people win thousands of arguments over decades. Section 5 returns to why credit systems handle that shape worst.

:::reveal What did the fluctuation test observe, and what did it infer? ||| It observed that counts of resistant cells varied widely between parallel cultures instead of clustering around one value, and inferred that mutations arise at random during growth rather than on contact with the selective agent.

:::reveal Why is a colony picked from the master plate stronger evidence than one picked from the drug plate? ||| Because the colony on the master has never been exposed to the drug, so its resistance cannot be explained as something the drug caused. Only its sibling on the replica ever met the selective agent.

:::reveal What did Joshua Lederberg's Nobel lecture say about the standing of the replica-plating proof? ||| That the proof "merely reinforces the incisive arguments that had already been forwarded by many other authors," rather than establishing spontaneous mutation for the first time.

## Vocabulary
- **Directed mutation**: the rejected idea that a selective agent instructs a cell to acquire the trait that resists it, rather than revealing cells that already had it.
- **Fluctuation test**: the Luria and Delbruck design comparing counts across parallel cultures, where wide variation indicates mutations arising at random during growth.
- **Sibling clone**: a colony descended from the same original cell as another, which lets an unexposed colony stand as evidence about its exposed counterpart.
- **Enrichment**: repeating cycles of indirect selection so the proportion of the wanted variant rises until it can be obtained in pure culture.

## Sources
Luria, S. E., & Delbruck, M. (1943). Mutations of bacteria from virus sensitivity to virus resistance. *Genetics, 28*(6), 491-511. https://doi.org/10.1093/genetics/28.6.491

Lederberg, J., & Lederberg, E. M. (1952). Replica plating and indirect selection of bacterial mutants. *Journal of Bacteriology, 63*(3), 399-406. https://doi.org/10.1128/jb.63.3.399-406.1952

Lederberg, J. (1959). *A view of genetics* [Nobel lecture, May 29, 1959]. Nobel Foundation. https://www.nobelprize.org/prizes/medicine/1958/lederberg/lecture/

Wendling, C. C., & Bailey, Z. M. (2025). Pioneer of bacterial genetics: The legacy of Esther Miriam Lederberg. *Genetics, 231*(3), iyaf160. https://doi.org/10.1093/genetics/iyaf160`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Replica plating and indirect selection",
      section: "Section 1 · The technique: replica plating",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "In replica plating, what is the master plate?",
            options: [
              "The original plate of colonies",
              "The plate containing the drug, on which resistant colonies are counted before picking",
              "The plate of pooled liquid culture from which all the other plates are inoculated by pipette",
              "The plate holding the sterile velvet pad between pressings so the pad does not dry out",
            ],
            correctIndex: 0,
            explanation:
              "It is the plate the impression is taken from, and it is deliberately kept off any selective medium so the colony you eventually pick has never met the test condition.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "What does the pile of the velvet pad do?",
            options: [
              "Acts as thousands of tiny inoculating needles",
              "Absorbs the growth medium so that colonies transfer without carrying agar across to the next plate",
              "Filters out dead cells so that only dividing bacteria are carried onto the replica plates",
              "Holds the plate at a fixed distance from the block so the pressure applied stays uniform",
            ],
            correctIndex: 0,
            explanation:
              "Each fibre lifts a little of whatever colony it touches, which is why one pressing samples every colony on the plate at once.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "Which property of the transfer makes a replica plate readable as a map?",
            options: [
              "The spatial arrangement is preserved",
              "The colonies are transferred in order of size, largest first, so position encodes colony age",
              "Only one colony in ten transfers, which spreads the pattern out and keeps colonies from merging",
              "The transfer reverses left and right, so the replica is a mirror image that can be overlaid exactly",
            ],
            correctIndex: 0,
            explanation:
              "Because a colony lands in the same relative position on every replica, a growth result at one position on one plate tells you about the colony at that same position on the master.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "What is indirect selection?",
            options: [
              "Selecting by what a colony's siblings did",
              "Selecting by applying a much lower dose of the drug so that the surviving cells are not damaged",
              "Selecting after the fact by sequencing every colony and discarding the ones without the mutation",
              "Selecting in two steps, first for growth rate and then for the trait of interest on the same plate",
            ],
            correctIndex: 0,
            explanation:
              "The line you keep is spared contact with the selective agent entirely, which is what closes off the objection that the agent caused the trait.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "After a resistant colony appears on a drug replica, which colony does the experimenter actually keep?",
            options: [
              "Its sibling on the master plate",
              "The resistant colony itself, transferred to fresh medium so the drug can be washed out of it",
              "A colony from a second drug replica, to confirm that the resistance is stable across pressings",
              "Any colony from the same row of the master plate, since neighbours share a common ancestor",
            ],
            correctIndex: 0,
            explanation:
              "The sibling has the same ancestry and has never been exposed, so its resistance cannot be attributed to the drug.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "In which journal did the replica plating paper appear?",
            options: [
              "Journal of Bacteriology",
              "Proceedings of the National Academy of Sciences of the United States of America",
              "Cold Spring Harbor Symposia on Quantitative Biology, in the 1951 recombination volume",
              "Journal of General Microbiology, in the same volume as the fertility factor paper",
            ],
            correctIndex: 0,
            explanation:
              "The citation is Journal of Bacteriology, volume 63, issue 3, pages 399 to 406, published in 1952.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "In what year was the replica plating paper published?",
            options: [
              "1952",
              "1943, the same year as the Luria and Delbruck fluctuation test paper in Genetics",
              "1946, alongside the first demonstration of gene recombination in Escherichia coli",
              "1958, the year the Nobel Prize in Physiology or Medicine went to Joshua Lederberg",
            ],
            correctIndex: 0,
            explanation:
              "Journal of Bacteriology 63(3), 399 to 406, 1952. The 1943, 1946 and 1958 dates belong to other events in this course.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "How does the author line of the 1952 replica plating paper read?",
            options: [
              "Joshua Lederberg first, Esther M. Lederberg second",
              "Esther M. Lederberg alone, since she developed the technique and wrote the paper without a co-author",
              "Esther M. Lederberg first, with Joshua Lederberg listed as the senior author at the end",
              "Joshua Lederberg and Edward L. Tatum, with Esther M. Lederberg thanked in the acknowledgments",
            ],
            correctIndex: 0,
            explanation:
              "The journal's own record lists him first and her second, which is the checkable fact this course builds its later attribution argument on.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "How did Wendling and Bailey (2025) describe the standing of replica plating?",
            options: [
              "As the gold standard for studying bacterial evolution",
              "As a useful teaching demonstration that was superseded once liquid handling robots became available",
              "As a technique whose value was mainly historical, since sequencing now answers the same questions faster",
              "As the single experiment that settled the question of spontaneous mutation for the field",
            ],
            correctIndex: 0,
            explanation:
              "Their Genetics review calls it \"the gold standard for studying bacterial evolution\" and attributes its development to Esther Lederberg.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "According to Joshua Lederberg's Nobel lecture, what did replica plating take the place of?",
            options: [
              "Assaying inocula distributed in tubes",
              "Counting plaques on lawns of indicator bacteria grown from ultraviolet-irradiated cultures",
              "Streaking single colonies by hand onto a numbered grid drawn on the underside of each plate",
              "Measuring optical density in a spectrophotometer at intervals across a growing liquid culture",
            ],
            correctIndex: 0,
            explanation:
              "His words were that it \"takes the place of assaying inocula distributed in tubes,\" replacing a rack of separate assays with one pressing.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "How does replica plating reveal that a colony is auxotrophic for leucine?",
            options: [
              "It grows on the master and fails without leucine",
              "It grows faster than its neighbours on every replica, because leucine is not being consumed by synthesis",
              "It produces a turbid colony with a clear centre on medium containing leucine but not on medium without it",
              "It transfers to the replica but then reverts to a smaller colony size on the second pressing",
            ],
            correctIndex: 0,
            explanation:
              "Growth on the complete master plate and absence at the same position on the leucine-free replica is exactly the signature of a strain that cannot make leucine.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "Where is replica plating still used today, according to this course?",
            options: [
              "Fluctuation assays and experimental evolution",
              "Only in undergraduate teaching laboratories, where the historical demonstration is part of the syllabus",
              "In clinical diagnostics, as the reference method for identifying species from a patient sample",
              "In vaccine manufacture, where it is the standard purity check on each production batch",
            ],
            correctIndex: 0,
            explanation:
              "It lets a population be tested against several stressors in parallel, which is why it survived seventy years of method turnover.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "Why does exposing colonies directly to a drug weaken the evidence about where resistance came from?",
            options: [
              "The survivors have now met the drug",
              "The drug kills so many cells that the surviving colonies are too small to be counted reliably",
              "Drug residues carried on the plate interfere with the growth medium used in the following step",
              "Colonies that survive exposure grow at a different rate, so their positions shift between platings",
            ],
            correctIndex: 0,
            explanation:
              "Once a line has contacted the selective agent, a critic can always argue the agent caused the trait rather than revealed it. Indirect selection removes that objection.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "What is the velvet pad stretched over during a replica pressing?",
            options: [
              "A cylindrical block",
              "A shallow dish of sterile buffer, so the fabric stays damp enough to lift cells cleanly",
              "A wire frame that holds it just above the agar without ever touching the colony surface",
              "The lid of the master plate, which is inverted and used as the pressing surface",
            ],
            correctIndex: 0,
            explanation:
              "The block gives a flat, even pressing face across the whole plate, which is what keeps the pattern faithful.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "What distinguishes one replica plate from another in a typical experiment?",
            options: [
              "The growth medium each one carries",
              "The order in which they were pressed, since later pressings deposit progressively fewer cells",
              "The incubation temperature, which is raised on each successive plate to test heat tolerance",
              "The number of colonies transferred, which is deliberately halved at each step to dilute the sample",
            ],
            correctIndex: 0,
            explanation:
              "One replica may lack an amino acid, another may contain a drug, and comparing growth across them at the same position is the readout.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "This course says that contributions shaped like infrastructure are hard to credit. Why?",
            options: [
              "They let other people win arguments",
              "They are usually published in low-impact journals that citation databases do not index properly",
              "They are almost always developed by teams too large for any individual name to be attached",
              "They tend to be patented rather than published, so they never enter the scientific literature",
            ],
            correctIndex: 0,
            explanation:
              "A screening method does not announce a result. It enables thousands of results over decades, and credit systems reward announcements.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "In the 1940s argument about bacterial resistance, what did the directed-mutation position claim?",
            options: [
              "The drug instructs the cell",
              "Resistant cells arise only in cultures that have been irradiated with ultraviolet light beforehand",
              "Resistance is carried on a plasmid that spreads through the population by cell-to-cell contact",
              "Resistance appears only in older cultures, because slow-growing cells accumulate more errors",
            ],
            correctIndex: 0,
            explanation:
              "On that account the environment writes the trait, which would have undermined the idea of a gene with its own line of descent in these organisms.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "What did Luria and Delbruck's 1943 experiment measure?",
            options: [
              "Variation between parallel cultures",
              "The rate at which a single culture acquires resistance as the drug concentration is raised in steps",
              "The proportion of colonies on a plate that survive when the plate is replicated onto phage-seeded agar",
              "The time between adding the virus and the first appearance of a resistant colony in each culture",
            ],
            correctIndex: 0,
            explanation:
              "The fluctuation test compares counts across replicate cultures, because random timing of mutations during growth produces wide variation and induction on contact would not.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "In which journal and volume did the Luria and Delbruck fluctuation paper appear?",
            options: [
              "Genetics, volume 28",
              "Journal of Bacteriology, volume 63, in the issue that also carried the replica plating paper",
              "Nature, volume 158, in the same year that bacterial gene recombination was first reported",
              "Microbial Genetics Bulletin, in the numbered series where lysogeny in K-12 was first announced",
            ],
            correctIndex: 0,
            explanation:
              "Genetics, volume 28, issue 6, pages 491 to 511, published in 1943. The other three venues belong to different papers taught in this course.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "What is the title of the 1943 Luria and Delbruck paper?",
            options: [
              "Mutations of bacteria from virus sensitivity to virus resistance",
              "Replica plating and indirect selection of bacterial mutants in Escherichia coli cultures",
              "An infective factor controlling sex compatibility in Bacterium coli and its transmission",
              "Genetic studies of lysogenicity in Escherichia coli and the linkage of the latent phage",
            ],
            correctIndex: 0,
            explanation:
              "The other three titles are, in order, the 1952 replica plating paper, the 1953 fertility factor paper, and the 1953 lysogenicity paper.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "In the fluctuation test's logic, what does a mutation occurring early in a culture's growth produce?",
            options: [
              "A large clone",
              "A clone that is resistant to a wider range of drugs than one arising later in the same culture",
              "A colony that appears on the plate sooner but stops growing before it reaches countable size",
              "No detectable descendants at all, because early mutants are outcompeted before plating",
            ],
            correctIndex: 0,
            explanation:
              "Early mutants have more generations to multiply, so their descendants are numerous by plating time. Late mutants leave few. That spread is the fluctuation being measured.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "If the selective agent had induced resistance on contact, what would counts across parallel cultures have looked like?",
            options: [
              "Nearly uniform",
              "Wildly variable, with a handful of cultures containing almost all of the resistant cells found",
              "Zero in every culture until the drug concentration passed a sharp threshold value",
              "Steadily rising with the age of the culture, in proportion to the number of divisions elapsed",
            ],
            correctIndex: 0,
            explanation:
              "Induction at the moment of exposure would convert a similar fraction of cells in every culture, so the counts would cluster. The observed spread is what ruled that out.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "What limitation of the fluctuation test do Wendling and Bailey identify?",
            options: [
              "Direct screening for mutants was difficult",
              "Its statistics assumed a constant mutation rate, which later work showed to be false for most drugs",
              "It could be run only with bacteriophage, never with antibiotics, so its conclusions did not generalise",
              "It required equipment that few laboratories of the period could afford to build or maintain",
            ],
            correctIndex: 0,
            explanation:
              "Their review says the method \"relied on liquid cultures and statistical analysis, making direct screening for resistant mutants difficult.\" The inference was sound; the mutants were not in hand.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "What did replica plating add to the spontaneous-mutation argument?",
            options: [
              "It made the mutants physically obtainable",
              "It provided the first statistical model of how mutation rates vary between bacterial species",
              "It showed that resistance can be transferred between cells, which the fluctuation test had missed",
              "It allowed the experiment to be run in liquid culture rather than on solid agar plates",
            ],
            correctIndex: 0,
            explanation:
              "You could now pick a drug-naive colony off the master plate and hold it up, instead of arguing from counts alone.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "How did Wendling and Bailey characterise the Lederbergs' replica plating experiment?",
            options: [
              "As an elegant confirming experiment",
              "As the study that first proposed the existence of spontaneous mutation in bacterial populations",
              "As a preliminary result that later workers were unable to reproduce with other antibiotics",
              "As a demonstration that mutation rates rise sharply in the presence of sub-lethal drug doses",
            ],
            correctIndex: 0,
            explanation:
              "They write that the Lederbergs \"conducted an elegant experiment confirming that antibiotic-resistant mutants were present before exposure to antibiotics.\" The verb is confirming.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "What did Joshua Lederberg's Nobel lecture say about the replica plating proof?",
            options: [
              "That it merely reinforced earlier arguments",
              "That it was the decisive result that ended the controversy over the origin of drug resistance",
              "That it should be treated with caution because the velvet transfer could carry contaminants",
              "That it applied to streptomycin resistance alone and could not be extended to other agents",
            ],
            correctIndex: 0,
            explanation:
              "His exact words: \"This proof merely reinforces the incisive arguments that had already been forwarded by many other authors.\"",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "Which older method did the Nobel lecture name as an alternative route to the same indirect proof?",
            options: [
              "Dilution sampling in tubes",
              "Ultraviolet irradiation of the culture before plating, to raise the frequency of resistant variants",
              "Serial passage through animals, which selects for resistance without any laboratory drug exposure",
              "Comparing the resistance of a culture before and after a period of storage in the cold",
            ],
            correctIndex: 0,
            explanation:
              "Diluting into tubes so that most contain no resistant cell and one does, then assaying retrospectively, is indirect selection by another route. Replica plating reaches it more conveniently.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "Why did the origin of bacterial resistance matter beyond antibiotics?",
            options: [
              "The gene concept was at stake",
              "Because resistance genes were already known to move between species and needed to be contained",
              "Because wartime penicillin supplies depended on strains that had not yet been shown to be stable",
              "Because the answer determined whether bacteria could be classified as living organisms at all",
            ],
            correctIndex: 0,
            explanation:
              "If the environment could instruct a bacterial cell to acquire a trait, then a gene with its own line of descent was in trouble as a concept for these organisms.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "What does enrichment mean in the context of indirect selection?",
            options: [
              "Repeating the cycle to raise the wanted variant's share",
              "Adding extra nutrients to the master plate so that rare variants can grow into visible colonies",
              "Combining several master plates into one so that more colonies can be screened per pressing",
              "Treating the culture with a mutagen so that the variant of interest appears more frequently",
            ],
            correctIndex: 0,
            explanation:
              "Each round of picking the unexposed sibling raises the proportion of the wanted variant until a pure culture can be obtained, with no exposure at any step.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "What is a sibling clone?",
            options: [
              "A colony from the same original cell",
              "A colony that arose from a mutation event in a different culture at the same point in growth",
              "A colony that has been transferred through at least two replica pressings without losing its trait",
              "A colony grown from a single cell taken out of a larger colony after selection",
            ],
            correctIndex: 0,
            explanation:
              "Shared ancestry is what lets an unexposed colony serve as evidence about the trait its exposed counterpart displayed.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "Which phrasing does this course call the honest one for replica plating's role?",
            options: [
              "Confirmed and made routine",
              "Proved for the first time that bacterial mutations are spontaneous rather than induced by selection",
              "Cast doubt on the fluctuation test by showing that its statistical assumptions did not hold",
              "Replaced statistical reasoning in bacterial genetics with direct observation of single cells",
            ],
            correctIndex: 0,
            explanation:
              "Overstating and understating a contribution are both ways of getting the record wrong, and the man who shared the byline said it reinforced work already done.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "Who were the authors of the 1943 fluctuation test paper?",
            options: [
              "Luria and Delbruck",
              "Lederberg and Tatum, working at Yale on recombination in Escherichia coli strain K-12",
              "Cavalli, Lederberg and Lederberg, in the paper that described the fertility factor",
              "Morse, Lederberg and Lederberg, in the work that established specialised transduction",
            ],
            correctIndex: 0,
            explanation:
              "S. E. Luria and M. Delbruck, Genetics 28(6), 491 to 511. The other three author lines belong to papers taught later in this course.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "On what kind of medium is the master plate deliberately kept?",
            options: [
              "One with no selective condition",
              "One containing a low dose of the drug, so that only viable resistant lines are carried forward",
              "One lacking a single amino acid, so that auxotrophs can be identified before any pressing",
              "One seeded with indicator bacteria, so that phage release can be seen as it happens",
            ],
            correctIndex: 0,
            explanation:
              "The whole evidential value of the master plate is that the colony you pick from it has never encountered the test condition.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "How many colonies can one pressing sample?",
            options: [
              "Every colony on the plate",
              "About a dozen, which is why several pressings from different regions are needed for a full screen",
              "Only the colonies that have grown large enough to reach the height of the agar surface",
              "Half of them, since the pad must be rotated and pressed twice to cover the whole area",
            ],
            correctIndex: 0,
            explanation:
              "That is the efficiency gain: hundreds of colonies screened per pressing rather than one assay per tube.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "Which of these is a direct rather than an indirect selection?",
            options: [
              "Plating a culture onto drug-containing agar",
              "Picking the colony on the master plate whose replica position showed growth on the drug plate",
              "Diluting a culture into tubes and assaying which tubes retrospectively contained a resistant cell",
              "Reading which positions failed on a leucine-free replica and returning to the complete master plate",
            ],
            correctIndex: 0,
            explanation:
              "Plating straight onto the drug means every colony you recover has met the drug. The other three describe routes where the retained line never did.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "According to this course, what happened to the Luria and Delbruck argument once replica plating existed?",
            options: [
              "It was confirmed with physical mutants",
              "It was overturned, since directly picked mutants showed resistance arising only after exposure",
              "It was narrowed to bacteriophage resistance, with antibiotic resistance treated as a separate case",
              "It was set aside as unnecessary, because plate methods made statistical reasoning obsolete",
            ],
            correctIndex: 0,
            explanation:
              "The statistical inference and the physical demonstration point the same way. Replica plating supplied an object where the fluctuation test supplied a distribution.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "What did Wendling and Bailey attribute to Esther Lederberg in the passage this course quotes?",
            options: [
              "The development of replica plating",
              "The statistical design of the fluctuation test, which Luria and Delbruck later published under their names",
              "The discovery that streptomycin resistance and penicillin resistance arise by different mechanisms",
              "The first isolation of an auxotrophic Escherichia coli strain requiring threonine and leucine",
            ],
            correctIndex: 0,
            explanation:
              "Their 2025 Genetics review speaks of \"Lederberg's development of the replica plating technique\" inside a passage about Esther, even though the 1952 byline puts her second.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "What are the page numbers of the replica plating paper?",
            options: [
              "399 to 406",
              "491 to 511, in the volume of Genetics that also carried the fluctuation test analysis",
              "51 to 64, matching the pagination of the 1953 lysogenicity paper in the same series",
              "720 to 730, the range given for the sex compatibility paper published later that year",
            ],
            correctIndex: 0,
            explanation:
              "Journal of Bacteriology 63(3), 399 to 406. The three wrong ranges are the real page ranges of other papers in this course, which is why they are worth telling apart.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "Why does this course print the 1952 author line in Section 1 rather than saving it for Section 4?",
            options: [
              "Because the paperwork is checkable",
              "Because the attribution argument depends on the reader not knowing the byline until the end",
              "Because the byline was corrected by the journal in a later issue and both versions must be shown",
              "Because the paper was reprinted with a different author order in the Nobel lecture references",
            ],
            correctIndex: 0,
            explanation:
              "The course argues from records rather than from indignation, so it puts the record in front of the learner as soon as the science is on the table.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "What kind of growth result at one position across two plates identifies a mutant?",
            options: [
              "Growth on one plate, absence on the other",
              "Growth on both plates but with a visibly smaller colony on the plate carrying the drug",
              "Absence on both plates, since a mutant colony fails to transfer through the velvet at all",
              "Growth appearing a day later on the replica than on the master plate at the same position",
            ],
            correctIndex: 0,
            explanation:
              "The comparison is positional and binary: a difference between master and replica at the same coordinates is the signal.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "What was the practical scale improvement replica plating delivered?",
            options: [
              "Hundreds of colonies per pressing",
              "A tenfold reduction in the amount of agar required to run a screen of comparable size",
              "The ability to store screened colonies for years without subculturing them onto fresh plates",
              "Elimination of the need to grow bacteria at a controlled temperature during the screen",
            ],
            correctIndex: 0,
            explanation:
              "Compared with distributing samples into a rack of tubes and assaying them one at a time, one pressing screens a whole plate.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "Which fact about the 1952 paper is checkable in the journal's own record rather than inferred?",
            options: [
              "The order of the two names",
              "Which of the two authors first proposed using velvet as the transfer material for the pressing",
              "Which author performed the streptomycin platings and which prepared the master plates",
              "Whether the paper was submitted before or after the fertility factor work was completed",
            ],
            correctIndex: 0,
            explanation:
              "Author order is printed and indexed. Who did which bench step is not in the paper, and this course does not pretend otherwise.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "What does this course say happens when a contribution is overstated?",
            options: [
              "The record gets wrong in a second way",
              "It becomes easier for later historians to locate the original evidence and correct the account",
              "It has no practical effect, since the underlying scientific claim remains true either way",
              "It shifts credit to the journal rather than to the author, which is a separate problem",
            ],
            correctIndex: 0,
            explanation:
              "Understating and overstating are both errors about the record, and Section 5 shows what the overstating kind costs in this particular case.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "In the Nobel lecture passage on indirect selection, why does dilution into tubes work as a proof?",
            options: [
              "Most tubes contain no resistant cell",
              "Because dilution kills the sensitive cells preferentially, leaving a resistant population behind",
              "Because a resistant cell divides faster in broth than on agar, which amplifies the difference",
              "Because the drug is added to every tube at the same time, so exposure is controlled across the set",
            ],
            correctIndex: 0,
            explanation:
              "With one resistant cell expected per ten samples, a retrospective assay tells you which sample held it, and that sample was never exposed. Reiterating the step enriches toward pure culture.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "Which is the accurate one-sentence summary of replica plating's relationship to spontaneous mutation?",
            options: [
              "It confirmed the conclusion and made it routine",
              "It established the conclusion for the first time, replacing the earlier statistical arguments entirely",
              "It contradicted the earlier work and forced the field to revisit the fluctuation test's assumptions",
              "It had no bearing on the question and was developed for screening auxotrophs alone",
            ],
            correctIndex: 0,
            explanation:
              "Joshua Lederberg's own lecture put the proof in the reinforcing category, and the technique's lasting value is that it made such screens ordinary.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "What was the state of the resistant line's ancestry in the replica plating demonstration?",
            options: [
              "Drug-naive throughout",
              "Exposed once at low dose, then grown out on drug-free medium before the resistance was assayed",
              "Exposed at every generation, which is what made the accumulated resistance measurable",
              "Unknown, because the master plate colonies were pooled before the resistant line was isolated",
            ],
            correctIndex: 0,
            explanation:
              "Every ancestor of the retained line sat on drug-free medium. That, and not the count of survivors, is the argument.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Lambda and lysogeny
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-plaques-that-should-not-have-been-there",
      title: "3 · The plaques that should not have been there",
      section: "Section 2 · Lambda and lysogeny",
      body: `Esther Lederberg was a doctoral student at the University of Wisconsin, working with *Escherichia coli* strain K-12, which was already the workhorse of bacterial genetics.

**The setup.** She had a strain called W518, obtained after ultraviolet irradiation, which was sensitive to phage. She crossed it with its own parent, the ordinary K-12. The mixture produced plaques: clear patches on the bacterial lawn where cells had been killed by a virus. There was no obvious virus in the experiment.

**The first oddity.** Plaques made by a straightforwardly lytic phage are translucent, because everything in them is dead. These were turbid, with bacterial growth in the middle. Something was killing cells and something was also surviving.

**The second oddity.** Bacteria taken from the centres of those turbid plaques were resistant to the phage. They had acquired immunity.

**The source.** The virus was not a contaminant from outside. It came from the K-12 parent. K-12 was carrying a virus in a hidden, integrated form, what we now call a prophage and the cell a lysogen. The ultraviolet treatment that produced W518 had accidentally cured it of that prophage, and losing the prophage also lost the immunity to superinfection that came with it. So the mutant was newly vulnerable to a virus its own parent had been carrying silently all along. As Gottesman and Weisberg summarise the outcome, the W518 cells that survived infection "became stable lysogens which, like the K-12 parent, were immune to superinfection and which released unaltered phage."

That virus is bacteriophage lambda.

**Who reported it, and where.** Gottesman and Weisberg, reviewing lambda's history in 2004, write that "the isolation of λ was first reported in 1951 by Esther Lederberg, then a Ph.D. student at the University of Wisconsin, and later was described, in greater detail, in a 1953 Genetics paper by Esther and Joshua Lederberg." The first report carries her name alone. The 1953 paper, "Genetic studies of lysogenicity in Escherichia coli," Genetics volume 38, issue 1, pages 51 to 64, carries hers first and his second.

**Her own sentence,** as their review's epigraph prints it: "Lysogenicity, or latent virus, is of frequent occurrence in enteric bacteria, but has been little emphasized in recent genetic studies with E. coli. It is of interest, therefore, that E. coli strain K-12 is lysogenic, but the latent phage is demonstrable only with the help of sensitive indicator strains." Read the last clause: you cannot see the thing without the right indicator. That is the whole discovery in one line.

**A bibliographic knot this course will not smooth over.** The dating of that first report is genuinely untidy in the literature. Gottesman and Weisberg's epigraph attributes the sentence to the Microbial Genetics Bulletin in 1951, while their numbered reference for the first report is Genetics volume 36, page 560, also 1951. Wendling and Bailey cite "Lederberg 1950, 1951" and date the discovery itself to 1949. This course could not retrieve either the Bulletin item or the Genetics abstract to settle which is which, so it reports the disagreement instead of picking a year and sounding confident. The unglamorous truth is that early announcements often appear in bulletins and meeting abstracts that later indexing handles badly, and priority disputes are frequently arguments about exactly this kind of document.

:::reveal What was visually unusual about the plaques, and what did that suggest? ||| They were turbid, with bacterial growth in the centre, rather than the translucent plaques a purely lytic phage leaves. Something was killing cells and something was also surviving in the same patch.

:::reveal Where did the virus come from, and what had the ultraviolet treatment done? ||| It came from the ordinary K-12 parent, which was carrying lambda as an integrated prophage. The irradiation that produced W518 had cured it of that prophage, removing the immunity to superinfection that went with it.

:::reveal How does the authorship of the first lambda report compare with the fuller 1953 paper? ||| The first report carries Esther Lederberg's name alone. The 1953 Genetics paper carries hers first and Joshua Lederberg's second.

## Vocabulary
- **Plaque**: a clear patch in a lawn of bacteria where a virus has killed the cells, whose appearance, clear or turbid, tells you what kind of virus made it.
- **Prophage**: a phage genome carried in a bacterial cell in a quiet, integrated form rather than actively producing new virus particles.
- **Lysogen**: a bacterium carrying a prophage, which is thereby immune to superinfection by the same phage.
- **Superinfection immunity**: the resistance a lysogen has to being infected again by the phage it already carries, lost when the prophage is lost.
- **Indicator strain**: a sensitive strain used to reveal a phage that would otherwise be undetectable, which is exactly the trick Lederberg's own sentence names.

## Sources
Gottesman, M. E., & Weisberg, R. A. (2004). Little lambda, who made thee? *Microbiology and Molecular Biology Reviews, 68*(4), 796-813. https://doi.org/10.1128/MMBR.68.4.796-813.2004

Lederberg, E. M., & Lederberg, J. (1953). Genetic studies of lysogenicity in Escherichia coli. *Genetics, 38*(1), 51-64. https://doi.org/10.1093/genetics/38.1.51

Wendling, C. C., & Bailey, Z. M. (2025). Pioneer of bacterial genetics: The legacy of Esther Miriam Lederberg. *Genetics, 231*(3), iyaf160. https://doi.org/10.1093/genetics/iyaf160`,
    },
    {
      slug: "what-lambda-made-possible",
      title: "4 · What lambda made possible",
      section: "Section 2 · Lambda and lysogeny",
      body: `A discovery's size is measured by what gets built on it, so here is what got built on a turbid plaque.

**First, an idea nobody wanted.** Lysogeny, the notion that a virus could sit quietly inside a bacterial chromosome and be inherited, was contested at the time. Wendling and Bailey record that both Lederbergs were initially resistant to it, and that Joshua Lederberg expected lambda to behave like a plasmid, moving as a free element outside the chromosome. In his own recollection it was "quite a shock to discover the contrary." This is worth keeping in view: the people who make a finding are not always the people most eager to believe it, and a course that presents discovery as a straight line is lying about how it works.

**The evidence that settled it was positional.** Crosses showed lambda strongly linked to the *gal* locus on the bacterial chromosome, reported in the 1953 Genetics paper. A free-floating element does not show linkage to a chromosomal marker. An integrated one does. That is how lambda stopped being a plasmid-like curiosity and became a prophage with an address.

**And the address paid off almost immediately.** If lambda sits next to *gal*, then when it excises to leave, it can make a mistake and carry a piece of the neighbourhood with it, delivering those bacterial genes into the next cell it infects. That is specialised transduction, reported in Morse, M. L., Lederberg, E. M., and Lederberg, J. (1956), "Transduction in Escherichia coli K-12," Genetics volume 41, issue 1, pages 142 to 156. Note the byline again: Morse first, Esther second, Joshua third. Generalised transduction, the random carriage of bacterial DNA by phage, had been described a few years earlier by Zinder and Lederberg. What was new here was that specialised transduction moves *particular* genes, which as Wendling and Bailey point out made it the first form of targeted genetic manipulation.

**Then the golden age.** Their review traces what lambda carried, and the list is close to a syllabus of molecular biology from the mid 1950s to the mid 1980s. Lambda was, alongside the *lac* operon, one of the two original model systems from which the operon concept came. Alan Campbell's amber mutants in lambda let genes be tied to specific functions, because a mutant that fails in an ordinary host but works in a permissive one identifies a gene the virus needs. Lambda was the first double-stranded DNA virus to be fully sequenced. Work on lambda and *E. coli* helped elucidate restriction and modification systems, whose enzymes became the cutting tools of cloning. Lambda parts became cloning vectors: cosmids built from its packaging and integration machinery carry large inserts, and its recombination proteins are still in use today under the name lambda RED.

**One straggler, which is the useful lesson.** Prophages can be triggered out of the chromosome by DNA damage through the bacterial stress response, but Wendling and Bailey note it took roughly another fifteen years for the link between prophage induction and host stress to be understood, and longer still to work out prophage loss as an adaptive response. Foundational findings are not the same thing as finished ones.

**Keep the shape of this in mind for Section 4.** Lambda is a tool, a model organism and a source of reagents. Like replica plating, it is the sort of contribution that appears in ten thousand methods sections and almost never in a prize citation.

:::reveal Why did linkage to the gal locus matter? ||| Because a free extrachromosomal element would not show linkage to a chromosomal marker, while an integrated prophage would. The linkage is what established lambda as sitting in the chromosome rather than floating beside it.

:::reveal What is specialised transduction, and how does it differ from generalised transduction? ||| Specialised transduction is a phage carrying particular neighbouring bacterial genes, picked up by an imprecise excision from its site in the chromosome. Generalised transduction carries bacterial DNA at random rather than from one region.

:::reveal Name two later technologies the Wendling and Bailey review traces back to work on lambda. ||| Cosmid cloning vectors built from lambda's packaging and integration machinery, and lambda RED recombination proteins still used in genetic engineering. The review also credits lambda's role in elucidating restriction and modification systems.

## Vocabulary
- **Lysogeny**: the state in which a phage genome is carried quietly inside a bacterial cell and inherited by its descendants rather than immediately producing virus.
- **Genetic linkage**: the tendency of two markers close together on a chromosome to be inherited together, which is the evidence that placed lambda next to *gal*.
- **Specialised transduction**: transfer of specific bacterial genes from the region flanking a prophage, carried by phage particles formed during imprecise excision.
- **Cosmid**: a cloning vector combining plasmid DNA with lambda packaging signals, able to carry inserts far larger than an ordinary plasmid.
- **Model system**: an organism chosen because results found in it generalise, which is what lambda became for gene regulation and recombination.

## Sources
Lederberg, E. M., & Lederberg, J. (1953). Genetic studies of lysogenicity in Escherichia coli. *Genetics, 38*(1), 51-64. https://doi.org/10.1093/genetics/38.1.51

Morse, M. L., Lederberg, E. M., & Lederberg, J. (1956). Transduction in Escherichia coli K-12. *Genetics, 41*(1), 142-156. https://doi.org/10.1093/genetics/41.1.142

Casjens, S. R., & Hendrix, R. W. (2015). Bacteriophage lambda: Early pioneer and still relevant. *Virology, 479-480*, 310-330. https://doi.org/10.1016/j.virol.2015.02.010

Wendling, C. C., & Bailey, Z. M. (2025). Pioneer of bacterial genetics: The legacy of Esther Miriam Lederberg. *Genetics, 231*(3), iyaf160. https://doi.org/10.1093/genetics/iyaf160`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Lambda, lysogeny, and what followed",
      section: "Section 2 · Lambda and lysogeny",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Where was Esther Lederberg working when lambda was found?",
            options: [
              "The University of Wisconsin",
              "Stanford University School of Medicine, in the department of genetics she had helped organise",
              "Yale University, in the laboratory where bacterial gene recombination had first been demonstrated",
              "Hunter College in New York, where she had completed her undergraduate degree in 1942",
            ],
            correctIndex: 0,
            explanation:
              "She was a doctoral student there, and Gottesman and Weisberg describe her as \"then a Ph.D. student at the University of Wisconsin\" when the isolation was first reported.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "Which bacterial strain was the work done in?",
            options: [
              "Escherichia coli K-12",
              "Salmonella typhimurium, the strain in which generalised transduction had first been observed",
              "Bacterium coli strain W518, which had been isolated independently from an environmental sample",
              "A pneumococcal strain of the kind used in the transformation experiments of the 1940s",
            ],
            correctIndex: 0,
            explanation:
              "K-12 was already the workhorse of bacterial genetics, and W518 was a phage-sensitive mutant derived from it, not a separate strain.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "How had the mutant strain W518 been obtained?",
            options: [
              "After ultraviolet irradiation",
              "By repeated passage through medium containing streptomycin until a stable variant emerged",
              "By conjugation with a donor strain carrying the fertility factor on its chromosome",
              "By replica plating a K-12 culture onto phage-seeded agar and picking the survivors",
            ],
            correctIndex: 0,
            explanation:
              "The irradiation is the hinge of the whole story, because it is what cured the strain of its prophage and made it sensitive to a virus its parent carried silently.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What did W518 get crossed with?",
            options: [
              "Its own K-12 parent",
              "A second irradiated mutant carrying a different set of nutritional requirements",
              "A donor strain that had been deliberately infected with a phage from an outside source",
              "A Salmonella strain, in order to test whether recombination crossed species boundaries",
            ],
            correctIndex: 0,
            explanation:
              "The cross was between the mutant and the ordinary parent it came from, which is why the appearance of a virus was so unexpected.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What appeared in the mixture that should not have been there?",
            options: [
              "Plaques",
              "Colonies able to grow without any of the nutrients either parent strain required",
              "A visible precipitate in the broth indicating that the two strains had failed to mix",
              "Colonies of a second species, indicating that the culture had been contaminated in handling",
            ],
            correctIndex: 0,
            explanation:
              "Plaques are cleared patches where a virus has killed bacteria, and no virus had knowingly been introduced into the experiment.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "How did the plaques differ from those a straightforwardly lytic phage leaves?",
            options: [
              "They were turbid rather than translucent",
              "They were much larger and had ragged edges rather than a smooth circular boundary",
              "They took several days longer to appear and then faded again within a few hours",
              "They formed only at the edge of the plate, where the agar was thinnest and driest",
            ],
            correctIndex: 0,
            explanation:
              "A lytic phage leaves a translucent patch because everything in it is dead. Turbidity, with growth in the centre, means something is surviving inside the killing zone.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What was found when bacteria were isolated from the centres of the turbid plaques?",
            options: [
              "They were resistant to the phage",
              "They had lost the ability to grow on minimal medium without added amino acids",
              "They grew far more slowly than the parent strain and reverted to sensitivity within days",
              "They produced no phage at all, showing the virus had come from outside the culture",
            ],
            correctIndex: 0,
            explanation:
              "The surviving cells had acquired immunity, which was the second clue pointing toward lysogeny rather than a passing contamination.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "Where did the virus actually come from?",
            options: [
              "The K-12 parent strain",
              "The ultraviolet lamp used in the irradiation, which had introduced a phage from a nearby culture",
              "The agar itself, which carried phage particles surviving from an earlier experiment on the bench",
              "The W518 mutant, which had begun producing phage after its nutritional requirements changed",
            ],
            correctIndex: 0,
            explanation:
              "K-12 was carrying lambda as an integrated prophage, undetected, and it had been doing so throughout the strain's laboratory history.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What is a prophage?",
            options: [
              "A phage genome carried quietly inside a bacterium",
              "A virus particle that has attached to a host cell but has not yet injected its genetic material",
              "A defective phage that can infect a cell but has lost the genes needed to make new particles",
              "The protein coat of a phage after its DNA has been released into the bacterial cytoplasm",
            ],
            correctIndex: 0,
            explanation:
              "It sits in an integrated, inherited state rather than actively producing virus, and the cell carrying it is called a lysogen.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What had the ultraviolet treatment done to W518, in the terms this lesson uses?",
            options: [
              "Cured it of its prophage",
              "Inserted a second copy of the prophage, which made the strain produce virus continuously",
              "Damaged its cell wall so that phage particles could enter where they previously could not",
              "Removed its ability to repair DNA, which is why phage grew in it and not in the parent",
            ],
            correctIndex: 0,
            explanation:
              "Losing the prophage also lost the superinfection immunity that came with carrying it, which is exactly why the mutant was newly vulnerable.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What is superinfection immunity?",
            options: [
              "A lysogen's resistance to the phage it already carries",
              "A general resistance to all bacteriophages acquired after surviving one lytic infection",
              "The protection a bacterial population gains once most of its members have been killed off",
              "An immune response mounted by the host animal against phage circulating in its gut flora",
            ],
            correctIndex: 0,
            explanation:
              "It is specific to the resident prophage, which is why curing a strain of its prophage removes the protection.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "According to Gottesman and Weisberg, what became of the W518 cells that survived infection?",
            options: [
              "They became stable lysogens",
              "They lysed within a few generations, releasing a phage altered by passage through the mutant",
              "They lost the phage again and reverted to the sensitive state within a single subculture",
              "They became resistant to phage but could no longer act as recipients in genetic crosses",
            ],
            correctIndex: 0,
            explanation:
              "Their review says those cells \"became stable lysogens which, like the K-12 parent, were immune to superinfection and which released unaltered phage.\"",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "How do Gottesman and Weisberg describe the authorship of the first report of lambda's isolation?",
            options: [
              "By Esther Lederberg",
              "By Esther and Joshua Lederberg jointly, in the paper that also established the gal linkage",
              "By Joshua Lederberg, with the detailed follow-up published under both names two years later",
              "By Morse, Lederberg and Lederberg, in the transduction work published in Genetics",
            ],
            correctIndex: 0,
            explanation:
              "Their sentence is that \"the isolation of λ was first reported in 1951 by Esther Lederberg,\" with the fuller account following in the 1953 joint paper.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What is the citation for the fuller 1953 lysogenicity paper?",
            options: [
              "Genetics, volume 38, pages 51 to 64",
              "Journal of Bacteriology, volume 63, pages 399 to 406, in the issue for March of that year",
              "Genetics, volume 36, page 560, where the isolation had been announced two years earlier",
              "Genetics, volume 41, pages 142 to 156, alongside the description of specialised transduction",
            ],
            correctIndex: 0,
            explanation:
              "Lederberg, E. M., and Lederberg, J. (1953), \"Genetic studies of lysogenicity in Escherichia coli,\" Genetics 38(1), 51 to 64. The wrong options are other real papers in this course.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "In what order do the names appear on the 1953 lysogenicity paper?",
            options: [
              "Esther Lederberg first",
              "Joshua Lederberg first, with Esther listed second as she was on the replica plating paper",
              "Alphabetically by given name, which places Esther first only by coincidence of spelling",
              "Esther Lederberg alone, with Joshua Lederberg credited in the acknowledgments instead",
            ],
            correctIndex: 0,
            explanation:
              "The journal record lists Esther M. Lederberg and then Joshua Lederberg. On the replica plating paper of the year before, the order is reversed.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "In Lederberg's own quoted sentence, what makes the latent phage demonstrable?",
            options: [
              "Sensitive indicator strains",
              "Ultraviolet irradiation of the culture immediately before it is plated for counting",
              "Growing the culture at a raised temperature so that the prophage is driven out of the chromosome",
              "Filtering the culture supernatant and concentrating it before adding it to a fresh lawn",
            ],
            correctIndex: 0,
            explanation:
              "Her sentence ends \"the latent phage is demonstrable only with the help of sensitive indicator strains,\" which is the discovery compressed into one clause.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What does Lederberg's quoted sentence say about lysogenicity in enteric bacteria?",
            options: [
              "That it occurs frequently",
              "That it had never previously been observed in any member of the enteric group",
              "That it appears only in strains that have been irradiated in the laboratory",
              "That it is confined to strain K-12 and does not generalise to other enteric bacteria",
            ],
            correctIndex: 0,
            explanation:
              "She wrote that lysogenicity \"is of frequent occurrence in enteric bacteria, but has been little emphasized in recent genetic studies with E. coli.\" Common but overlooked, because nobody had the right indicator.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What bibliographic disagreement does this lesson report rather than resolve?",
            options: [
              "Where and when the first lambda report appeared",
              "Whether the 1953 paper was submitted to Genetics or to the Journal of Bacteriology first",
              "Whether the strain involved was K-12 or a closely related laboratory derivative of it",
              "Whether Gottesman and Weisberg or Wendling and Bailey published their review first",
            ],
            correctIndex: 0,
            explanation:
              "One review's epigraph credits the Microbial Genetics Bulletin in 1951 while its numbered reference is Genetics 36, page 560; another cites 1950 and 1951 and dates the discovery to 1949.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "Why does this course report the dating disagreement instead of choosing a year?",
            options: [
              "Neither source could be retrieved to settle it",
              "Because the exact year is unimportant to the science and only matters to bibliographers",
              "Because the two reviews are equally unreliable and neither should be cited on any point",
              "Because the discovery was gradual and no single year could ever be correct for it",
            ],
            correctIndex: 0,
            explanation:
              "The rule this catalog keeps is that an unverified detail is reported as disputed rather than printed with false confidence. The gap is filed as a research check.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What does this lesson say about where early announcements often appeared?",
            options: [
              "In bulletins and meeting abstracts",
              "In institutional annual reports that were never distributed beyond the funding agency",
              "In the correspondence pages of Nature, which did not assign volume or page numbers",
              "In patent filings, which took priority over journal publication for laboratory techniques",
            ],
            correctIndex: 0,
            explanation:
              "Later indexing handles such documents badly, which is one reason priority disputes so often turn on exactly this kind of item.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What was the status of the idea of lysogeny when lambda was found?",
            options: [
              "Contested",
              "Universally accepted, having been settled by the pneumococcal transformation experiments",
              "Untested, because no experiment capable of addressing it had yet been designed",
              "Rejected outright by every laboratory except the one where lambda was discovered",
            ],
            correctIndex: 0,
            explanation:
              "Wendling and Bailey record that the idea was still controversial and that both Lederbergs were initially resistant to it.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "What did Joshua Lederberg initially expect lambda to behave like?",
            options: [
              "A plasmid",
              "A lytic phage that would destroy any culture it entered within a few hours",
              "A chromosomal gene with no capacity to move between cells at all",
              "A transposable element hopping between many different sites on the chromosome",
            ],
            correctIndex: 0,
            explanation:
              "He expected a free extrachromosomal element, and in his own recollection it was \"quite a shock to discover the contrary.\"",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "What point does this course draw from the Lederbergs' initial resistance to lysogeny?",
            options: [
              "Discovery is not a straight line",
              "That neither of them understood their own results, so later reviewers deserve the credit",
              "That contested findings should be withheld from publication until the field agrees",
              "That the finding must have come from someone else in the laboratory instead",
            ],
            correctIndex: 0,
            explanation:
              "The people who make a finding are not always the people most eager to believe it, and a course that hides that is misrepresenting how research works.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "Which chromosomal locus was lambda found to be linked to?",
            options: [
              "gal",
              "lac, the locus that later supplied the other founding example of an operon",
              "thr, one of the nutritional markers used in the original recombination cross",
              "F, the site at which the fertility factor integrates in high-frequency recombination strains",
            ],
            correctIndex: 0,
            explanation:
              "Linkage to gal is reported in the 1953 Genetics paper and is what placed lambda in the chromosome rather than beside it.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "Why does linkage to a chromosomal marker argue against lambda being a free plasmid?",
            options: [
              "A free element would not show linkage",
              "Because plasmids are too small to carry a marker that could be scored in a genetic cross",
              "Because a plasmid would be lost during the cross and could not be recovered afterwards",
              "Because linkage can only be measured in organisms that reproduce sexually rather than by fission",
            ],
            correctIndex: 0,
            explanation:
              "Co-inheritance with a chromosomal marker is positional evidence, and something floating separately from the chromosome has no position on it.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "How does specialised transduction arise, mechanically?",
            options: [
              "By imprecise excision of the prophage",
              "By the phage randomly packaging any fragment of the host chromosome during assembly",
              "By direct cell-to-cell contact through a pilus, which carries the genes across without a phage",
              "By uptake of free DNA released when neighbouring bacteria are lysed by the same phage",
            ],
            correctIndex: 0,
            explanation:
              "A prophage leaving its site can take a piece of the neighbourhood with it, which is why the genes it moves are the ones next door rather than any gene at all.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "What is the citation for the 1956 transduction paper?",
            options: [
              "Genetics, volume 41, pages 142 to 156",
              "Genetics, volume 38, pages 51 to 64, in the paper that reported the gal linkage",
              "Journal of General Microbiology, volume 8, pages 89 to 103, published three years earlier",
              "Journal of Bacteriology, volume 63, pages 399 to 406, in the replica plating issue",
            ],
            correctIndex: 0,
            explanation:
              "Morse, M. L., Lederberg, E. M., and Lederberg, J. (1956), \"Transduction in Escherichia coli K-12,\" Genetics 41(1), 142 to 156.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "In what order do the names appear on the 1956 transduction paper?",
            options: [
              "Morse, then Esther, then Joshua",
              "Esther first, then Joshua, then Morse, matching the order used on the lysogenicity paper",
              "Joshua first, then Morse, then Esther, matching the order used on the replica plating paper",
              "Alphabetically, which places Lederberg before Morse in both instances",
            ],
            correctIndex: 0,
            explanation:
              "M. L. Morse, Esther M. Lederberg, Joshua Lederberg. Checking author order paper by paper is the method this course is teaching alongside the biology.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "How does generalised transduction differ from specialised transduction?",
            options: [
              "It carries bacterial DNA at random",
              "It requires direct contact between donor and recipient cells rather than a phage particle",
              "It moves only genes that lie on plasmids, never genes from the bacterial chromosome",
              "It transfers DNA in one direction only, whereas specialised transduction works both ways",
            ],
            correctIndex: 0,
            explanation:
              "Generalised transduction, described by Zinder and Lederberg, moves bacterial DNA without regard to its position. Specialised transduction moves the prophage's neighbours.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "Why do Wendling and Bailey call specialised transduction the first form of targeted genetic manipulation?",
            options: [
              "Because it moves particular genes",
              "Because it was the first technique to use restriction enzymes to cut DNA at chosen sites",
              "Because it allowed genes to be introduced into eukaryotic cells for the first time",
              "Because it could insert synthetic DNA that had never existed in any organism before",
            ],
            correctIndex: 0,
            explanation:
              "Taking only the genes adjacent to the prophage means the transfer has an address, which is what distinguishes it from random carriage.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "Alongside which other system was lambda one of the two original models for the operon concept?",
            options: [
              "The lac operon",
              "The gal locus, whose linkage to lambda had been established in the 1953 paper",
              "The fertility factor, whose transfer showed that regulation could be carried between cells",
              "The T-even phages, whose unusual bases had already been described by that point",
            ],
            correctIndex: 0,
            explanation:
              "Wendling and Bailey name lambda and the lac operon of E. coli as the two original model systems from which the operon concept came.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "What did the amber mutants of lambda make possible?",
            options: [
              "Tying genes to specific functions",
              "Sequencing the whole lambda genome for the first time, decades ahead of other viruses",
              "Growing lambda in mammalian cells, which extended its use beyond bacterial hosts",
              "Measuring the rate at which prophages are induced out of the chromosome by stress",
            ],
            correctIndex: 0,
            explanation:
              "A mutant that fails in an ordinary host but replicates in a permissive one identifies a gene the virus needs, which is how phenotypes got attached to particular genes.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "What sequencing milestone does the Wendling and Bailey review attribute to lambda?",
            options: [
              "The first fully sequenced double-stranded DNA virus",
              "The first organism of any kind to have its complete genome determined by any method",
              "The first genome sequenced using high-throughput methods rather than chain termination",
              "The first virus whose genome was shown to be circular rather than linear",
            ],
            correctIndex: 0,
            explanation:
              "Their review records lambda as the first double-stranded DNA virus to be fully sequenced, using the dideoxy chain-termination method.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "Which class of enzymes came out of the work on restriction and modification systems in lambda and E. coli?",
            options: [
              "Restriction enzymes",
              "DNA polymerases, which made it possible to copy a template strand in the test tube",
              "Reverse transcriptases, which allowed RNA to be converted back into DNA for cloning",
              "Ligases, which were isolated from lambda itself rather than from its bacterial host",
            ],
            correctIndex: 0,
            explanation:
              "The review notes that enzymes identified in those anti-phage defence systems were developed into cloning technology.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "What is a cosmid?",
            options: [
              "A vector using lambda packaging machinery",
              "A phage that has lost its coat proteins and can only replicate inside a permissive host",
              "A plasmid carrying a single restriction site, used to test the specificity of a new enzyme",
              "A circular fragment of bacterial chromosome released during imprecise prophage excision",
            ],
            correctIndex: 0,
            explanation:
              "Combining plasmid DNA with lambda's packaging signals lets a vector carry inserts far larger than an ordinary plasmid can hold.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "What is lambda RED, as this lesson uses the term?",
            options: [
              "Recombination proteins still used in engineering",
              "The red pigment lambda produces in lysogenic colonies, used as a visual marker in screens",
              "The permissive host strain in which amber mutants of lambda are able to replicate",
              "The name of the restriction system that first cut lambda DNA at a defined sequence",
            ],
            correctIndex: 0,
            explanation:
              "Lambda-encoded recombination proteins remain widely used in genetic engineering under that name, decades after the phage itself was discovered.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "Roughly how long did it take for the link between prophage induction and host stress to be understood?",
            options: [
              "About another fifteen years",
              "Under two years, since the ultraviolet result had already pointed straight at the mechanism",
              "Roughly half a century, with the first evidence arriving only after genome sequencing",
              "It has never been established, and the connection remains speculative today",
            ],
            correctIndex: 0,
            explanation:
              "Wendling and Bailey note the roughly fifteen-year gap, and a longer one still before prophage loss as an adaptive response was worked out.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "What lesson does this course draw from that fifteen-year gap?",
            options: [
              "Foundational is not the same as finished",
              "That the original finding must have been wrong, since it took so long to make sense of",
              "That the field lost interest in lambda until sequencing technology arrived",
              "That priority should be assigned to whoever completes an explanation rather than who starts it",
            ],
            correctIndex: 0,
            explanation:
              "A discovery can open a field and still leave its own mechanism unexplained for a generation, which is a normal shape for foundational work.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "How does this course describe lambda's role in the decades after its discovery?",
            options: [
              "As a tool, a model organism and a source of reagents",
              "As a medical treatment, since phage therapy became the main clinical use of the discovery",
              "As a historical curiosity that produced no lasting techniques or reagents of its own",
              "As a competitor to E. coli that displaced it as the standard laboratory organism",
            ],
            correctIndex: 0,
            explanation:
              "That is precisely the shape of contribution that appears in ten thousand methods sections and almost never in a prize citation, a point Section 4 returns to.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "What does the term indicator strain mean?",
            options: [
              "A sensitive strain used to reveal a phage",
              "A strain carrying a coloured marker gene so that recombinants can be scored by eye",
              "A strain used to test whether a growth medium has been prepared to the correct formulation",
              "A strain whose growth rate indicates the concentration of an antibiotic in the plate",
            ],
            correctIndex: 0,
            explanation:
              "Without one, a phage carried at low level by a lysogen leaves no visible sign, which is why lysogenicity had been so easy to miss.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What made lambda hard to notice in K-12 before this work?",
            options: [
              "The carrier strain showed no sign of it",
              "It was present at such high titre that it killed every culture it was introduced into",
              "It produced plaques only at temperatures well above those used for routine culture",
              "It could not be separated from the bacterial chromosome by any method then available",
            ],
            correctIndex: 0,
            explanation:
              "A lysogen is immune to its own prophage, so nothing visible happens in the carrier. You need a sensitive strain to see the virus at all.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "Which of these is a fair summary of what the turbid plaque told the experimenter?",
            options: [
              "Killing and survival were happening together",
              "The plate had been contaminated by a slow-growing bacterial species from the air",
              "The phage was present at too low a concentration to clear the lawn completely",
              "The agar had dried unevenly, so cells at the plaque centre were growing on a thicker layer",
            ],
            correctIndex: 0,
            explanation:
              "Growth persisting inside a zone of lysis is the signature of a temperate phage, which can either kill or take up residence.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "Why is genetic linkage described in this lesson as positional evidence?",
            options: [
              "Because it shows two markers travel together",
              "Because it measures the physical distance in base pairs between two points on the chromosome",
              "Because it can only be scored when both markers produce a visible change in colony colour",
              "Because it depends on where the colonies sit on the replica plate relative to the master",
            ],
            correctIndex: 0,
            explanation:
              "Co-inheritance implies proximity on a chromosome, which is why linkage to gal established that lambda had a chromosomal address.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "Which paper reported the gal linkage?",
            options: [
              "The 1953 Genetics lysogenicity paper",
              "The 1956 Genetics transduction paper by Morse and the two Lederbergs",
              "The 1952 Journal of Bacteriology paper on replica plating and indirect selection",
              "The 1953 Journal of General Microbiology paper on sex compatibility in Bacterium coli",
            ],
            correctIndex: 0,
            explanation:
              "Lederberg and Lederberg (1953) is where the linkage appears, and the transduction work of 1956 is what the linkage then made possible.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "Which came first in the sequence this section teaches?",
            options: [
              "The turbid plaques",
              "The description of specialised transduction in Escherichia coli strain K-12",
              "The demonstration that lambda parts could be built into cloning vectors",
              "The establishment of lambda as a model system for the operon concept",
            ],
            correctIndex: 0,
            explanation:
              "The anomaly came first, then the linkage that explained it, then transduction, then the decades of tools built on all three.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What does the 2004 review's title, \"Little lambda, who made thee?\", refer to?",
            options: [
              "The origin of the phage and who found it",
              "A dispute over which laboratory first constructed a lambda-based cloning vector",
              "The question of whether lambda evolved from a plasmid or from a free-living virus",
              "The naming committee that assigned the Greek letter designations to coliphages",
            ],
            correctIndex: 0,
            explanation:
              "Gottesman and Weisberg open their history of the phage with the discovery itself, quoting Esther Lederberg's own description as the epigraph.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What kind of element is lambda, given what the gal linkage showed?",
            options: [
              "An integrative element",
              "A free-standing circular element that never associates with the bacterial chromosome",
              "A fragment of host chromosome that acquired the ability to move between cells",
              "A defective virus incapable of producing infectious particles under any condition",
            ],
            correctIndex: 0,
            explanation:
              "It integrates at a site in the chromosome, is inherited from there, and can excise again, sometimes imprecisely.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "In this course's account, what measures the size of a discovery?",
            options: [
              "What gets built on it",
              "How many times its original paper has been cited in the five years after publication",
              "Whether it was reported in a general journal rather than a specialist bulletin",
              "How quickly the field accepted it after the first announcement was made",
            ],
            correctIndex: 0,
            explanation:
              "Lambda's measure is a syllabus of molecular biology: the operon concept, gene-to-function mapping, restriction enzymes, cloning vectors and recombineering.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "What did the phage released by the newly formed lysogens turn out to be?",
            options: [
              "Unaltered phage",
              "A mutant form that had lost the ability to integrate into the chromosome",
              "A mixture of two distinct phages, only one of which came from the K-12 parent",
              "A phage that could no longer infect the parent strain it had originally come from",
            ],
            correctIndex: 0,
            explanation:
              "Gottesman and Weisberg specify that those lysogens \"released unaltered phage,\" which is part of what identified the state as stable lysogeny.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "Which of these best states why the discovery was called accidental?",
            options: [
              "No virus had been introduced on purpose",
              "The strain had been mislabelled, so the wrong two cultures were crossed by mistake",
              "The plates were left at the wrong temperature overnight, which induced the prophage",
              "A neighbouring laboratory's phage stock had been stored in the same incubator",
            ],
            correctIndex: 0,
            explanation:
              "The experiment was a genetic cross between a mutant and its parent. The virus arrived unbidden, out of the parent's own chromosome.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "Why does this section teach the biology before the attribution question?",
            options: [
              "So the learner can evaluate the credit claim",
              "Because the attribution question is a matter of opinion and does not belong in a science course",
              "Because the sources for the biology are stronger than the sources for the career record",
              "Because the credit dispute was settled long ago and only the science remains uncertain",
            ],
            correctIndex: 0,
            explanation:
              "An argument about who deserves credit for a technique is unreadable until you know what the technique does. That ordering is the design of this course.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The credit question, taught from two documents
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-paper-and-the-prize",
      title: "5 \u00b7 Who is on the paper, and who is on the prize",
      section: "Section 3 · The paper, the prize, and what the record supports",
      body: `Two documents settle most of what can honestly be said here, and they say different things. Read them in order.

**Document one: the paper.** The technique this course spent two sections on was published as **Lederberg, J., and Lederberg, E. M. (1952). Replica plating and indirect selection of bacterial mutants. *Journal of Bacteriology*, 63(3), 399-406.** Esther Lederberg is a **named co-author**, second of two.

**Say plainly what that rules out.** The common shape of an attribution story is that a woman's name was left off the work. **That is not what happened here, and a course that implied it would be wrong on the primary document.** Her name is on the paper. Anyone can check it, and this course expects you to.

**Document two: the prize.** The 1958 Nobel Prize in Physiology or Medicine was divided. One half went jointly to **George Wells Beadle and Edward Lawrie Tatum**, "for their discovery that genes act by regulating definite chemical events". The other half went to **Joshua Lederberg**, "for his discoveries concerning genetic recombination and the organization of the genetic material of bacteria".

**Now put the two side by side, because that is where the question actually lives.** The prize half names a domain: genetic recombination and the organization of the genetic material of bacteria. The 1952 paper sits inside that domain, and it carries two names. The prize carries one.

**What a Nobel citation is, and is not.** It names individuals, and its rules limit how many. It is not a bibliography and it does not purport to list everyone whose work supported the finding. So the gap between a two-author paper and a one-name prize is **not by itself evidence of anything improper**: it is the ordinary arithmetic of a prize that names people rather than papers.

**Which is exactly why the interesting question is narrower and answerable.** Not "was the prize wrongly awarded", which no document here settles. But: when the technique is described in textbooks, in obituaries, in the ordinary telling, **whose name travels with it?** That is a question about the record after the prize, and it is the question Section 3's second lesson takes up.

:::reveal Is Esther Lederberg a named author on the 1952 replica plating paper? ||| Yes, second of two authors. The story that a woman's name was left off the work does not fit this case, and the course says so from the primary document.

:::reveal Why is the gap between a two-author paper and a one-name prize not by itself evidence of wrongdoing? ||| Because a Nobel citation names individuals under rules that limit how many, and it is not a bibliography. The gap is the ordinary arithmetic of the prize, so the answerable question is what happened to the record afterwards.

## Vocabulary
- **Co-author**: a named author on a publication, which is a matter of printed record rather than of recollection.
- **Nobel citation**: the wording that states what a prize was awarded for, and which names individuals rather than listing contributors.
- **Divided prize**: an award split between laureates, here one half jointly and one half singly.
- **Primary document**: the paper or the citation itself, as opposed to an account of it.

## Sources
Lederberg, J., & Lederberg, E. M. (1952). Replica plating and indirect selection of bacterial mutants. *Journal of Bacteriology, 63*(3), 399-406. https://pubmed.ncbi.nlm.nih.gov/14927572/
The Nobel Prize in Physiology or Medicine 1958. NobelPrize.org. https://www.nobelprize.org/prizes/medicine/1958/summary/`,
    },
    {
      slug: "the-matilda-effect-and-its-limits",
      title: "6 \u00b7 The Matilda effect, and what this case does and does not prove",
      section: "Section 3 · The paper, the prize, and what the record supports",
      body: `There is a named, citable concept for what this course has been circling, and using it precisely is better than using it loudly.

**The Matilda effect** is the historian Margaret Rossiter's term for the systematic under-recognition of women's contributions in science, where credit accrues to more prominent collaborators. It is the counterpart to Robert Merton's **Matthew effect**, in which recognition flows to those who already have it. **Rossiter named the Matilda effect for Matilda Joslyn Gage**, a suffragist who had described the pattern in the nineteenth century, which is itself a small demonstration of the thing.

**Why the concept fits this case better than an accusation would.** The Matilda effect is a claim about a *pattern in the record*, not a claim that any particular committee acted in bad faith. It predicts that when a woman and a more prominent man work together, the ordinary telling will drift toward the man over time, without anyone deciding that it should. That is a claim you can check against later documents rather than a motive you have to assume.

**What this case supports.** A co-authored technique whose author list is available to anyone; a prize half awarded to one of those two authors; and a subsequent record in which the technique is very frequently attached to the more famous name alone. The pattern is the evidence, and it is checkable.

**What this case does NOT support, and the course will not say.** That the prize was wrongly awarded. That the committee acted improperly. That Joshua Lederberg claimed sole authorship of the technique, which the 1952 paper's own author list refutes. **A course that reached for those claims would be doing to the evidence exactly what it accuses the record of doing.**

**The harder point, which is the one worth carrying.** Under-recognition rarely requires anyone to lie. It happens through a thousand ordinary compressions: a textbook sentence with room for one name, an obituary that leads with the prize, a lecture that says "Lederberg" and means one of them. **Each compression is individually defensible and the aggregate is a false record.** That is why the Matilda effect is described as an effect rather than an act.

**And the practical skill.** When you meet an attribution claim, ask what document would settle it, then go and look. Here that was two documents and both were reachable in minutes. Most attribution arguments are lost not because the evidence is missing but because nobody checks.

:::reveal What is the Matilda effect, and whom is it named for? ||| Margaret Rossiter's term for the systematic under-recognition of women's scientific contributions, where credit accrues to more prominent collaborators. It is named for Matilda Joslyn Gage, who described the pattern in the nineteenth century.

:::reveal What does this case NOT establish? ||| That the prize was wrongly awarded, that the committee acted improperly, or that Joshua Lederberg claimed the technique alone, which the 1952 author list refutes.

:::reveal Why is under-recognition described as an effect rather than an act? ||| Because it happens through many individually defensible compressions, a textbook line with room for one name, an obituary that leads with the prize, and the false record is the aggregate rather than anyone's decision.

## Vocabulary
- **Matilda effect**: Rossiter's term for systematic under-recognition of women's scientific work, credit drifting to prominent collaborators.
- **Matthew effect**: Merton's counterpart, in which recognition flows toward those who already have it.
- **Compression**: the ordinary shortening of a story that drops names, defensible each time and cumulative in effect.
- **Checkable pattern**: a claim about the record that can be tested against documents rather than requiring a motive to be assumed.

## Sources
Lederberg, J., & Lederberg, E. M. (1952). Replica plating and indirect selection of bacterial mutants. *Journal of Bacteriology, 63*(3), 399-406. https://pubmed.ncbi.nlm.nih.gov/14927572/
The Nobel Prize in Physiology or Medicine 1958. NobelPrize.org. https://www.nobelprize.org/prizes/medicine/1958/summary/`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz \u00b7 The paper, the prize, and the record",
      section: "Section 3 · The paper, the prize, and what the record supports",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Is Esther Lederberg a named author on the 1952 replica plating paper?",
            options: [
              "Yes, second of two",
              "No, she is thanked in the acknowledgements",
              "No, her name was removed before publication",
              "Only in a later corrected reprint",
            ],
            correctIndex: 0,
            explanation:
              "The story that a woman's name was left off the work does not fit this case, and the course says so from the printed author list.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "How was the 1958 Nobel Prize in Physiology or Medicine divided?",
            options: [
              "Half jointly to Beadle and Tatum, half to Joshua Lederberg",
              "Equally among three laureates",
              "Half to Joshua Lederberg and half to Esther Lederberg",
              "Wholly to Beadle and Tatum",
            ],
            correctIndex: 0,
            explanation:
              "The citation for Joshua Lederberg's half reads: for his discoveries concerning genetic recombination and the organization of the genetic material of bacteria.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What does a Nobel citation name?",
            options: [
              "Individuals, under rules limiting how many",
              "Every contributor to the finding",
              "The papers the prize rests on",
              "The institution where the work was done",
            ],
            correctIndex: 0,
            explanation:
              "That is why it is not a bibliography, and why the gap between a two-author paper and a one-name prize is ordinary arithmetic rather than evidence of wrongdoing.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "Which journal published the replica plating paper?",
            options: [
              "Journal of Bacteriology",
              "Nature",
              "Science",
              "Proceedings of the National Academy of Sciences",
            ],
            correctIndex: 0,
            explanation:
              "Volume 63, issue 3, pages 399 to 406, in March 1952.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What is the answerable question this course substitutes for whether the prize was wrongly awarded?",
            options: [
              "Whose name travels with the technique afterwards",
              "Whether the committee had a quota",
              "Which author did more of the bench work",
              "Whether the paper should have had one author",
            ],
            correctIndex: 0,
            explanation:
              "That is a question about the record after the prize, and it can be checked against later documents.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "Why does the course put the paper and the citation side by side?",
            options: [
              "The prize half names the domain the paper sits inside",
              "To show the paper was published later",
              "To compare their page counts",
              "Because the citation quotes the paper",
            ],
            correctIndex: 0,
            explanation:
              "The prize half names genetic recombination and the organization of bacterial genetic material; the 1952 paper sits inside that domain and carries two names.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What is the Matilda effect?",
            options: [
              "Systematic under-recognition of women's scientific work",
              "A rule limiting Nobel laureates to three",
              "The tendency of prizes to go to older scientists",
              "A method for allocating authorship order",
            ],
            correctIndex: 0,
            explanation:
              "Margaret Rossiter's term for credit accruing to more prominent collaborators.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "Whom is the Matilda effect named for?",
            options: [
              "Matilda Joslyn Gage",
              "Matilda Rossiter",
              "Matilda Lederberg",
              "Matilda Merton",
            ],
            correctIndex: 0,
            explanation:
              "Gage, a suffragist, had described the pattern in the nineteenth century, which is itself a small demonstration of the thing.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What is the Matthew effect?",
            options: [
              "Recognition flowing to those who already have it",
              "Credit being split evenly among collaborators",
              "The loss of records after a scientist's death",
              "The tendency of techniques to be renamed",
            ],
            correctIndex: 0,
            explanation:
              "Merton's concept, and the counterpart the Matilda effect was named against.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "Which of these does this case NOT establish?",
            options: [
              "That the prize was wrongly awarded",
              "That the technique was co-authored",
              "That the prize half went to one of those authors",
              "That the technique is often attached to one name afterwards",
            ],
            correctIndex: 0,
            explanation:
              "No document here settles whether the award was wrong, and a course claiming it would be doing to the evidence what it accuses the record of doing.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "Why is under-recognition called an effect rather than an act?",
            options: [
              "It arises from many individually defensible compressions",
              "Because it is always accidental",
              "Because no one is ever responsible",
              "Because it only happens after death",
            ],
            correctIndex: 0,
            explanation:
              "A textbook line with room for one name, an obituary leading with the prize: each is defensible and the aggregate is a false record.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What does the Matilda effect claim about?",
            options: [
              "A pattern in the record",
              "The motives of a specific committee",
              "The relative skill of collaborators",
              "The fairness of peer review",
            ],
            correctIndex: 0,
            explanation:
              "A pattern can be checked against documents; a motive has to be assumed, which is why the concept is the more useful tool.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What is the practical skill this section teaches?",
            options: [
              "Ask what document would settle the claim, then look",
              "Assume the more famous name took credit",
              "Count authors on every paper you read",
              "Prefer obituaries to primary sources",
            ],
            correctIndex: 0,
            explanation:
              "Both documents in this case were reachable in minutes. Most attribution arguments are lost because nobody checks, not because evidence is missing.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What refutes the idea that Joshua Lederberg claimed the technique alone?",
            options: [
              "The 1952 paper's own author list",
              "The Nobel citation wording",
              "A later retraction",
              "Correspondence in an archive",
            ],
            correctIndex: 0,
            explanation:
              "His name and hers are both printed on it, which is a matter of record rather than recollection.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What kind of claim is a compression, as the lesson uses the term?",
            options: [
              "An ordinary shortening that drops a name",
              "A deliberate falsification",
              "A statistical correction",
              "A formal erratum",
            ],
            correctIndex: 0,
            explanation:
              "Each is defensible on its own, which is precisely why the cumulative effect goes unnoticed.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "Which pairing is correct?",
            options: [
              "Rossiter, Matilda effect; Merton, Matthew effect",
              "Merton, Matilda effect; Rossiter, Matthew effect",
              "Both terms are Rossiter's",
              "Both terms are Merton's",
            ],
            correctIndex: 0,
            explanation:
              "Rossiter named the Matilda effect explicitly as a counterpart to Merton's Matthew effect.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What did the course spend its first two sections on, before raising credit at all?",
            options: [
              "The technique and what it settled",
              "The Nobel committee's rules",
              "The Lederberg marriage",
              "The history of bacteriology",
            ],
            correctIndex: 0,
            explanation:
              "Teaching the technique first is what lets the attribution question follow from the record instead of from the biography.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "Why does the order of this course matter to its argument?",
            options: [
              "The work has to be understood before its credit can be weighed",
              "Chronology is required by the format",
              "The quiz depends on it",
              "Sources are cited in that order",
            ],
            correctIndex: 0,
            explanation:
              "A reader who does not know what replica plating settled cannot judge what its attribution is worth.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "Which volume and pages carry the replica plating paper?",
            options: [
              "63(3), 399-406",
              "58(1), 12-24",
              "71(2), 200-215",
              "49(4), 501-509",
            ],
            correctIndex: 0,
            explanation:
              "Journal of Bacteriology, March 1952. The specificity is the point: a reader can go and check it.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What is the author order on that paper?",
            options: [
              "Joshua Lederberg then Esther Lederberg",
              "Esther Lederberg then Joshua Lederberg",
              "Alphabetical by first name",
              "No order is given",
            ],
            correctIndex: 0,
            explanation:
              "She is second of two, which is a fact of the printed record rather than of anyone's memory.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What does the phrase primary document mean here?",
            options: [
              "The paper or citation itself, not an account of it",
              "The earliest source on a topic",
              "A source held in an archive",
              "A peer-reviewed source",
            ],
            correctIndex: 0,
            explanation:
              "The whole method of this section is to go to the document rather than to the retelling.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What would a course be doing if it claimed her name was left off the paper?",
            options: [
              "Getting the primary document wrong",
              "Simplifying acceptably",
              "Following the standard account",
              "Protecting her reputation",
            ],
            correctIndex: 0,
            explanation:
              "Her name is printed on it, and the course expects the reader to check.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "Why does the course call the one-name prize ordinary arithmetic?",
            options: [
              "A citation names individuals under numeric limits",
              "Prizes are awarded alphabetically",
              "Papers always have more authors than prizes",
              "The committee explained its reasoning",
            ],
            correctIndex: 0,
            explanation:
              "So the gap alone establishes nothing improper, which is why the course looks at the later record instead.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What domain does Joshua Lederberg's prize half name?",
            options: [
              "Genetic recombination and the organization of bacterial genetic material",
              "Replica plating and indirect selection",
              "Lambda phage and lysogeny",
              "Gene regulation of chemical events",
            ],
            correctIndex: 0,
            explanation:
              "The last of those is Beadle and Tatum's half. The domain named is broad enough to contain the 1952 paper.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What year was the prize awarded?",
            options: [
              "1958",
              "1952",
              "1946",
              "1962",
            ],
            correctIndex: 0,
            explanation:
              "1952 is the replica plating paper; the prize came six years later.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What is the relationship between the 1952 paper and the 1958 citation?",
            options: [
              "The paper sits inside the domain the citation names",
              "The citation quotes the paper",
              "They are unrelated",
              "The paper was published because of the prize",
            ],
            correctIndex: 0,
            explanation:
              "Which is exactly why placing them side by side is the honest way to raise the credit question.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "Which is a fair summary of what the two documents jointly show?",
            options: [
              "A co-authored technique and a prize half naming one author",
              "A stolen technique",
              "An uncredited woman",
              "A disputed authorship",
            ],
            correctIndex: 0,
            explanation:
              "Both documents are public and neither supports the stronger readings.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What did Rossiter name the Matilda effect against?",
            options: [
              "Merton's Matthew effect",
              "The Nobel statutes",
              "Gage's own theory",
              "The Journal of Bacteriology",
            ],
            correctIndex: 0,
            explanation:
              "The pairing is deliberate: one describes accumulation of credit, the other its loss.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What does the Matthew effect describe?",
            options: [
              "Credit flowing to the already recognised",
              "Credit being divided by seniority",
              "Recognition arriving only posthumously",
              "Prizes going to institutions",
            ],
            correctIndex: 0,
            explanation:
              "The Matilda effect is its counterpart and was named as such.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "Why does the lesson prefer a pattern claim to a motive claim?",
            options: [
              "A pattern can be tested against documents",
              "Motives are always unknowable",
              "Patterns are more serious",
              "Documents rarely record motives",
            ],
            correctIndex: 0,
            explanation:
              "You do not have to assume anyone acted badly to show that the record drifted.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "Which is an example of a compression, as the lesson uses it?",
            options: [
              "A textbook sentence with room for one name",
              "A deliberately falsified citation",
              "A retracted paper",
              "An anonymous review",
            ],
            correctIndex: 0,
            explanation:
              "Each compression is individually defensible, and the aggregate is a false record.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What does the course say most attribution arguments are lost for want of?",
            options: [
              "Someone checking",
              "Better archives",
              "Legal standing",
              "Expert testimony",
            ],
            correctIndex: 0,
            explanation:
              "Both documents in this case were reachable in minutes.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "Who was Matilda Joslyn Gage?",
            options: [
              "A suffragist who described the pattern in the nineteenth century",
              "A bacteriologist",
              "A Nobel committee member",
              "Rossiter's collaborator",
            ],
            correctIndex: 0,
            explanation:
              "That her own description of the pattern is little remembered is a small demonstration of the pattern.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What does the course refuse to infer from the prize?",
            options: [
              "Anything about the committee's conduct",
              "That the paper had two authors",
              "That the technique was important",
              "That the citation names a domain",
            ],
            correctIndex: 0,
            explanation:
              "No document reached here settles it, so the course does not assert it.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "How does teaching the technique first change the argument?",
            options: [
              "The attribution question follows from the work",
              "It lengthens the course",
              "It satisfies a standards requirement",
              "It avoids the marriage entirely",
            ],
            correctIndex: 0,
            explanation:
              "A reader who does not understand replica plating cannot judge what its attribution is worth.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "What is the trap this course was built to avoid?",
            options: [
              "Defining her by her marriage",
              "Overstating the technique",
              "Citing only secondary sources",
              "Naming the Matilda effect",
            ],
            correctIndex: 0,
            explanation:
              "The organizing question is the record: what she made, and what proximity to a more-credited collaborator did to the visibility of that work.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
        ],
      },
    },
    {
      slug: "esther-lederberg-final",
      title: "Final assessment \u00b7 Esther Lederberg",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is replica plating used for?",
            options: [
              "Transferring a colony pattern between plates",
              "Sequencing bacterial genomes, which the 1952 methods could not do at any scale",
              "Measuring bacterial growth rate",
              "Staining cell walls",
            ],
            correctIndex: 0,
            explanation:
              "It reproduces the spatial arrangement of colonies onto fresh media, which is what makes indirect selection possible.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "Is Esther Lederberg named on the 1952 paper?",
            options: [
              "Yes, as second author",
              "No",
              "Only in the acknowledgements",
              "Only in a later edition",
            ],
            correctIndex: 0,
            explanation:
              "The printed author list is the primary document, and it refutes the common shape of the story.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "Who received the other half of the 1958 Nobel Prize?",
            options: [
              "Beadle and Tatum, jointly",
              "Esther Lederberg",
              "Zinder",
              "No one; it was a single award",
            ],
            correctIndex: 0,
            explanation:
              "Their half was for the discovery that genes act by regulating definite chemical events.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What was Joshua Lederberg's half awarded for?",
            options: [
              "Recombination and bacterial genetic organization",
              "Replica plating specifically",
              "The discovery of lambda phage",
              "Antibiotic resistance",
            ],
            correctIndex: 0,
            explanation:
              "The citation names a domain rather than a single technique, which is why the paper sits inside it.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What is the Matilda effect named for?",
            options: [
              "Matilda Joslyn Gage",
              "Its discoverer Matilda Rossiter",
              "A laboratory strain",
              "The Matthew gospel",
            ],
            correctIndex: 0,
            explanation:
              "Gage described the pattern in the nineteenth century and then largely dropped out of the telling of it.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "Which claim does this course explicitly refuse?",
            options: [
              "That the prize was wrongly awarded",
              "That the paper had two authors",
              "That the Matilda effect is real",
              "That the technique mattered",
            ],
            correctIndex: 0,
            explanation:
              "No document reached here settles it, and asserting it would repeat the failure the course teaches.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What is the counterpart concept to the Matilda effect?",
            options: [
              "The Matthew effect",
              "The Merton correction",
              "The Gage principle",
              "The Rossiter rule",
            ],
            correctIndex: 0,
            explanation:
              "Merton's term for recognition flowing to those who already have it.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "Why is a Nobel citation not a bibliography?",
            options: [
              "It names individuals under rules limiting how many",
              "It is written after the fact",
              "It omits the year",
              "It is not peer reviewed",
            ],
            correctIndex: 0,
            explanation:
              "So a one-name prize beside a two-author paper is ordinary arithmetic, not evidence of impropriety.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What does the course teach before it raises credit?",
            options: [
              "The technique and what it settled",
              "The Nobel rules",
              "Rossiter's biography",
              "The journal's history",
            ],
            correctIndex: 0,
            explanation:
              "That order is what keeps the attribution question grounded in the work rather than in the marriage.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "What is the practical skill the final section leaves you with?",
            options: [
              "Ask which document would settle it, then look",
              "Trust the most cited account",
              "Count the authors",
              "Prefer the more famous name",
            ],
            correctIndex: 0,
            explanation:
              "Both documents in this case were reachable in minutes.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "In which journal and year did replica plating appear?",
            options: [
              "Journal of Bacteriology, 1952",
              "Nature, 1958",
              "Science, 1946",
              "PNAS, 1951",
            ],
            correctIndex: 0,
            explanation:
              "Volume 63, issue 3, pages 399 to 406.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What makes the Matilda effect checkable rather than speculative?",
            options: [
              "It is a claim about a pattern in the record",
              "It names a responsible party",
              "It is supported by committee minutes",
              "It applies only to Nobel prizes",
            ],
            correctIndex: 0,
            explanation:
              "Patterns can be tested against documents; motives have to be assumed.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What does replica plating transfer between plates?",
            options: [
              "The spatial pattern of colonies",
              "A single purified colony",
              "Liquid growth medium",
              "Extracted DNA",
            ],
            correctIndex: 0,
            explanation:
              "Preserving the arrangement is what makes indirect selection possible.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "What is indirect selection?",
            options: [
              "Finding mutants without exposing the originals",
              "Selecting by colony colour, which requires a chromogenic medium the paper never used",
              "Choosing colonies at random",
              "Selecting after sequencing",
            ],
            correctIndex: 0,
            explanation:
              "The replica carries the exposure; the original plate keeps the untouched cells.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "Which paper introduced replica plating?",
            options: [
              "Lederberg and Lederberg, 1952",
              "Lederberg and Zinder 1952, which is the Salmonella genetic-exchange paper in the same volume",
              "Beadle and Tatum, 1941",
              "Lederberg and Tatum, 1946",
            ],
            correctIndex: 0,
            explanation:
              "Journal of Bacteriology 63(3), 399-406.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What is lambda?",
            options: [
              "A bacteriophage Esther Lederberg discovered",
              "A bacterial strain isolated at Stanford and distributed through the standard collections",
              "A selection medium",
              "A plating apparatus",
            ],
            correctIndex: 0,
            explanation:
              "Its discovery opened the study of lysogeny.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What did the plaques indicate?",
            options: [
              "Phage activity where none was expected",
              "Contamination of the medium, which would have shown as growth across the whole plate",
              "A failed transfer",
              "Mutant colonies",
            ],
            correctIndex: 0,
            explanation:
              "The observation is the origin of the lambda work.",
            sourceLessonSlug: "the-plaques-that-should-not-have-been-there",
          },
          {
            prompt: "What is lysogeny?",
            options: [
              "A phage persisting rather than lysing at once",
              "The death of a bacterial colony once the selective agent reaches a threshold concentration",
              "A method of plating",
              "A form of genetic recombination",
            ],
            correctIndex: 0,
            explanation:
              "Lambda made it studyable.",
            sourceLessonSlug: "what-lambda-made-possible",
          },
          {
            prompt: "Which two documents does Section 3 rest on?",
            options: [
              "The 1952 paper and the 1958 Nobel citation",
              "Two obituaries published decades later in the same specialist journal",
              "A patent and a paper",
              "Committee minutes and a letter",
            ],
            correctIndex: 0,
            explanation:
              "Both are public and both were checked rather than recalled.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "Where is Esther Lederberg on the 1952 author list?",
            options: [
              "Second of two",
              "First of two",
              "Absent",
              "In the acknowledgements",
            ],
            correctIndex: 0,
            explanation:
              "That printed fact rules out the most common shape of the story.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "How was the 1958 prize divided?",
            options: [
              "Half to Beadle and Tatum, half to Lederberg",
              "Three equal shares, which is the arrangement the statutes permit but not the one used here",
              "Two equal shares between the Lederbergs",
              "Undivided",
            ],
            correctIndex: 0,
            explanation:
              "The citations for the two halves name different things.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What were Beadle and Tatum cited for?",
            options: [
              "That genes act by regulating chemical events",
              "Genetic recombination in bacteria, which is the wording of the other half of the same prize",
              "Replica plating",
              "Lysogeny",
            ],
            correctIndex: 0,
            explanation:
              "The second of those is Joshua Lederberg's half.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What is a Nobel citation?",
            options: [
              "What the prize was awarded for, naming people",
              "A list of every contributor whose work the committee reviewed before deciding",
              "A bibliography of the work",
              "A summary of the field",
            ],
            correctIndex: 0,
            explanation:
              "Its numeric limits are why a one-name prize beside a two-author paper proves nothing on its own.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What question does the course substitute for whether the prize was wrong?",
            options: [
              "Whose name travels with the technique afterwards",
              "Who did more bench work, which no surviving laboratory record settles either way",
              "Whether the committee was biased",
              "Whether the paper should have had one author",
            ],
            correctIndex: 0,
            explanation:
              "That question is answerable from later documents.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What is the Matilda effect?",
            options: [
              "Under-recognition of women's scientific work",
              "A rule of Nobel arithmetic",
              "A bacterial naming convention",
              "A method of authorship ordering",
            ],
            correctIndex: 0,
            explanation:
              "Rossiter's term, with credit accruing to more prominent collaborators.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What is the Matthew effect?",
            options: [
              "Recognition flowing to the already recognised",
              "Recognition arriving late, typically only after a scientist has died",
              "Credit split by seniority",
              "Credit assigned by institution",
            ],
            correctIndex: 0,
            explanation:
              "Merton's concept, and the one Rossiter named hers against.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "Whom is the Matilda effect named for?",
            options: [
              "Matilda Joslyn Gage",
              "Margaret Rossiter, who proposed the term rather than being its namesake",
              "Matilda Lederberg",
              "Robert Merton",
            ],
            correctIndex: 0,
            explanation:
              "Gage described the pattern in the nineteenth century.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "Why is under-recognition an effect rather than an act?",
            options: [
              "It aggregates from many defensible compressions",
              "It is always accidental, requiring no participants and no decisions at any point",
              "It requires no participants",
              "It happens only posthumously",
            ],
            correctIndex: 0,
            explanation:
              "No one has to decide that the record should drift for it to drift.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "Which claim does the course explicitly decline to make?",
            options: [
              "That the prize was wrongly awarded",
              "That the technique was co-authored",
              "That the Matilda effect is a real pattern",
              "That the 1952 paper is checkable",
            ],
            correctIndex: 0,
            explanation:
              "Declining it is what keeps the course from doing to the evidence what it accuses the record of doing.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What refutes the claim that Joshua Lederberg took sole credit for the technique?",
            options: [
              "The 1952 author list",
              "The Nobel citation, which names a domain rather than listing any technique",
              "A published apology",
              "An archival letter",
            ],
            correctIndex: 0,
            explanation:
              "His name and hers are both on it.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What is a compression?",
            options: [
              "An ordinary shortening that drops a name",
              "A deliberate lie told to secure priority over a rival laboratory",
              "A statistical adjustment",
              "A formal correction",
            ],
            correctIndex: 0,
            explanation:
              "Defensible individually, false in aggregate.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What order does this course teach in, and why?",
            options: [
              "Technique first, credit second, so the question follows from the work",
              "Credit first, to frame the technique",
              "Chronologically by publication",
              "By source availability",
            ],
            correctIndex: 0,
            explanation:
              "Understanding what replica plating settled is what makes its attribution worth arguing about.",
            sourceLessonSlug: "what-replica-plating-settled",
          },
          {
            prompt: "What is the practical skill the course leaves you with?",
            options: [
              "Ask which document would settle the claim, then look",
              "Trust the most-cited version",
              "Assume the famous name took credit",
              "Count authors",
            ],
            correctIndex: 0,
            explanation:
              "Most attribution arguments are lost because nobody checks.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What kind of claim can be tested against documents?",
            options: [
              "A claim about a pattern in the record",
              "A claim about a committee's motives",
              "A claim about someone's intentions",
              "A claim about what might have happened",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the Matilda effect is the useful frame here.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What does the course say a Nobel citation is NOT?",
            options: [
              "A bibliography",
              "A public document",
              "A statement of what was awarded",
              "Limited in how many it names",
            ],
            correctIndex: 0,
            explanation:
              "It names individuals under rules, and does not purport to list contributors.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "Which is true of the 1952 paper?",
            options: [
              "It is co-authored and publicly checkable",
              "It was retracted",
              "It named three authors",
              "It appeared after the prize",
            ],
            correctIndex: 0,
            explanation:
              "Public and checkable is the point: the course invites verification rather than asking for trust.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What did the course establish before raising the Nobel at all?",
            options: [
              "What the technique was and what it settled",
              "The Lederbergs' biographies",
              "The committee's composition",
              "Rossiter's career",
            ],
            correctIndex: 0,
            explanation:
              "Two full sections of it.",
            sourceLessonSlug: "replica-plating-the-method",
          },
          {
            prompt: "Why is naming the concept better than making an accusation?",
            options: [
              "It states a checkable pattern rather than an assumed motive",
              "Accusations are legally risky",
              "Concepts are more persuasive",
              "It avoids naming anyone",
            ],
            correctIndex: 0,
            explanation:
              "The pattern is the evidence, and it survives without anyone having behaved badly.",
            sourceLessonSlug: "the-matilda-effect-and-its-limits",
          },
          {
            prompt: "What is the relationship between the two Lederberg papers this course cites?",
            options: [
              "Both are primary documents the reader can retrieve",
              "One supersedes the other",
              "One retracts the other",
              "They contradict each other",
            ],
            correctIndex: 0,
            explanation:
              "Retrievability is what the course's whole method depends on.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
          {
            prompt: "What would a reader need to check the course's central claim?",
            options: [
              "The 1952 author list and the 1958 citation",
              "Committee correspondence",
              "An interview with a laureate",
              "A textbook summary",
            ],
            correctIndex: 0,
            explanation:
              "Both were reachable in minutes when this course was written.",
            sourceLessonSlug: "the-paper-and-the-prize",
          },
        ],
      },
    },
  ],
};
