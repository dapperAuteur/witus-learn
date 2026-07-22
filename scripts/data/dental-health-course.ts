// Authored "Dental Health 101" — a cited, science-based Learn.WitUS course on the
// biology of teeth and gums: plaque, brushing, flossing/interdental cleaning, fluoride,
// diet, and regular care, plus the honest picture of how oral health connects to the
// rest of the body. Every content lesson is cited (APA 7 in-line + a `## Sources`
// bibliography) to primary/authoritative sources: Cochrane, the American Dental
// Association, the CDC, the WHO, NIDCR, and peer-reviewed/consensus literature.
//
// CAUSATION CAVEAT (load-bearing — see plans/future-courses/dental-health.md):
// The oral-health <-> cardiovascular link is an ASSOCIATION, not proven causation. The
// American Heart Association's 2026 statement (Tran et al., 2026) is explicit: "no
// direct evidence of causality, or that periodontal therapy will prevent CVD." This
// course never claims brushing/flossing prevents heart disease, Alzheimer's, or preterm
// birth — it reports what is established (diabetes: bidirectional, best-supported link),
// what is associated with plausible mechanisms but not proven causal (heart, brain,
// pregnancy), and it is explicit about Cochrane's low/very-low certainty rating for
// flossing's own evidence base (Worthington et al., 2019). "May," "linked to," and
// "associated with" are used deliberately; "prevents" is reserved for what the evidence
// actually supports (fluoride and cavities, water fluoridation and cavities).
//
// The course is organized into modules (course sections) and ends with a quiz whose
// every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const DENTAL_HEALTH_COURSE: AuthoredCourse = {
  title: "Dental Health 101: What the Science Actually Says",
  description:
    "A clear, cited walk through the biology of a healthy mouth: how cavities form, what brushing and flossing actually do (and don't), how fluoride works, how diet drives decay, why regular dental visits matter, and the honest, evidence-graded picture of how gum disease connects to the rest of the body. Sourced to Cochrane, the ADA, the CDC, the WHO, NIDCR, and the American Heart Association's 2026 statement, careful to say 'associated with,' not 'causes,' where the evidence is association, not proof.",
  lessons: [
    // ── Module 1: Your Mouth, Explained ──────────────────────────────────
    {
      slug: "tooth-anatomy-and-plaque",
      title: "1 · Your tooth, up close: anatomy and how cavities form",
      section: "Module 1: Your Mouth, Explained",
      body: `A tooth has three main layers, from the outside in. **Enamel** is the hard, mineralized outer layer that protects the tooth; it contains no living cells and is the hardest substance in the human body. Under the enamel is **dentin**, a softer layer with microscopic tubules that connect toward the tooth's center; when enamel is worn away, exposed dentin is why hot, cold, or sweet foods suddenly hurt. At the center is the **pulp**, which holds the tooth's blood vessels, nerves, and connective tissue (National Institute of Dental and Craniofacial Research, n.d.).

**Plaque** is a sticky film of bacteria that forms on teeth constantly, all day, every day. This is normal, but it is also where decay starts. When you eat sugary or starchy food, the bacteria living in plaque break it down and produce **acid** as a byproduct. That acid attacks the enamel, leaching out minerals in a process called demineralization. Repeated acid attacks, without enough time to recover, wear through the enamel and create a cavity, an actual hole in the tooth (National Institute of Dental and Craniofacial Research, n.d.). Left untreated, decay can progress through the dentin toward the pulp, which is when a cavity starts to hurt.

The rest of this course is built around that one mechanism: plaque bacteria plus sugar equals acid, and acid is what damages teeth. Brushing, flossing, fluoride, and diet all exist to interrupt some part of that chain.

:::reveal What are the three layers of a tooth, from the outside in, and which one has no living cells? ||| Enamel (outermost, no living cells), dentin (has tubules that carry sensation), and pulp (center, contains blood vessels and nerves).

## Sources
- National Institute of Dental and Craniofacial Research. (n.d.). *Tooth decay*. National Institutes of Health. https://www.nidcr.nih.gov/health-info/tooth-decay`,
    },
    {
      slug: "brushing-basics",
      title: "2 · Brushing: technique, frequency, and fluoride toothpaste",
      section: "Module 1: Your Mouth, Explained",
      recallContent: [
        {
          prompt: "What are the three layers of a tooth, from the outside in?",
          answer: "Enamel, then dentin, then pulp at the center.",
        },
        {
          prompt: "What do plaque bacteria produce when they break down sugar, and what does it do to enamel?",
          answer: "They produce acid, which leaches minerals out of enamel (demineralization) and, over repeated attacks, can create a cavity.",
        },
      ],
      body: `The American Dental Association (ADA) recommends brushing **twice a day for two minutes**, using a **fluoride toothpaste** and a **soft-bristled brush** (American Dental Association, n.d.-a, n.d.-b). Twice-daily brushing, compared with brushing less often, is associated with lower rates of cavities, gum recession, and periodontitis (American Dental Association, n.d.-b).

Technique matters more than pressure. The ADA recommends holding the brush at about a 45-degree angle to the gumline and using short, gentle, circular strokes, not hard back-and-forth scrubbing, covering the outer surfaces, inner surfaces, and chewing surfaces of every tooth, plus the tongue (American Dental Association, n.d.-a). Brushing harder does not clean better; it mainly risks wearing enamel and irritating gums over time. Replace the brush (or electric brush head) about every three to four months, or sooner if the bristles fray, since worn bristles clean less effectively (American Dental Association, n.d.-a).

Fluoride toothpaste is the other non-negotiable half of this habit; the next module covers what fluoride actually does and why it is the ingredient that matters most.

:::reveal Per the ADA, how often and for how long should you brush, and with what kind of toothpaste? ||| Twice a day, for two minutes each time, with a fluoride toothpaste and a soft-bristled brush.

## Sources
- American Dental Association. (n.d.-a). *Toothbrushes*. ADA Library, Oral Health Topics. https://www.ada.org/resources/ada-library/oral-health-topics/toothbrushes
- American Dental Association. (n.d.-b). *Home oral care*. ADA Library, Oral Health Topics. https://www.ada.org/resources/ada-library/oral-health-topics/home-care`,
    },

    // ── Module 2: Between the Teeth & Fluoride ───────────────────────────
    {
      slug: "flossing-and-interdental-cleaning",
      title: "3 · Flossing and interdental cleaning: what the evidence actually shows",
      section: "Module 2: Between the Teeth & Fluoride",
      recallContent: [
        {
          prompt: "Per the ADA, how often and for how long should you brush?",
          answer: "Twice a day, for two minutes each time, with a fluoride toothpaste.",
        },
        {
          prompt: "Does brushing harder clean teeth better?",
          answer: "No, the ADA recommends gentle, short circular strokes; hard scrubbing mainly risks wearing enamel and irritating gums.",
        },
      ],
      body: `A toothbrush cannot reach the tight space between two teeth, which is roughly a third of each tooth's surface. Floss and interdental brushes exist to clean that space, where plaque builds up and gum inflammation (**gingivitis**) often starts first.

Here is the honest picture, from the largest systematic review on the topic: a 2019 **Cochrane** review of home interdental cleaning devices found that flossing or interdental brushing, *in addition to* toothbrushing, **may** reduce gingivitis somewhat compared with brushing alone, but the certainty of that evidence is **low to very-low**, the effect may not be large enough to matter clinically, and most trials only followed people for one to three months. Whether flossing reduces **plaque** at all is unclear from the evidence. The review also found that **interdental brushes may work as well as, or better than, floss** (Worthington et al., 2019).

That does not mean flossing is pointless, it means the confidence you should place in strong claims like "flossing prevents disease X" should be modest. A more accurate, evidence-matched takeaway: cleaning between your teeth, with floss or an interdental brush, whichever you will actually use consistently, is a reasonable, low-cost habit that may help control gum inflammation. If your teeth have larger gaps, an interdental brush is a legitimate, equally evidence-backed alternative to floss, not a downgrade.

:::reveal According to the Cochrane review, is flossing's effect on plaque well-established, and which device may work as well or better than floss? ||| Its effect on plaque is unclear (low to very-low certainty evidence overall); interdental brushes may work as well as, or better than, floss.

## Sources
- Worthington, H. V., MacDonald, L., Poklepovic Pericic, T., Sambunjak, D., Johnson, T. M., Imai, P., & Clarkson, J. E. (2019). Home use of interdental cleaning devices, in addition to toothbrushing, for preventing and controlling periodontal diseases and dental caries. *Cochrane Database of Systematic Reviews*, *2019*(4), CD012018. https://doi.org/10.1002/14651858.CD012018.pub2`,
    },
    {
      slug: "fluoride-and-remineralization",
      title: "4 · Fluoride: how it strengthens teeth",
      section: "Module 2: Between the Teeth & Fluoride",
      recallContent: [
        {
          prompt: "What did the 2019 Cochrane review find about flossing's certainty of evidence?",
          answer: "Low to very-low certainty; the effect on gingivitis may exist but may not be clinically important, and the effect on plaque is unclear.",
        },
        {
          prompt: "Which device may work as well as, or better than, floss?",
          answer: "An interdental brush.",
        },
      ],
      body: `Where flossing's evidence is modest, fluoride's is strong. **Fluoride** works by helping enamel remineralize: it draws minerals back into enamel that has started to lose them from acid attacks, and it makes the enamel that forms more resistant to future acid, which is why fluoride toothpaste is the one ingredient nearly every dental authority agrees on (American Dental Association, n.d.-c).

Fluoride also reaches teeth through drinking water in many communities. **Community water fluoridation** adjusts the natural fluoride level in a public water supply to about 0.7 milligrams per liter, an amount the CDC calls one of the 20th century's great public-health achievements. Drinking fluoridated water is associated with roughly a **25% reduction in cavities** in both children and adults, across more than 75 years of research (Centers for Disease Control and Prevention, n.d.-a).

Because fluoride's benefit is dose- and contact-based (it works on the tooth surface, repeatedly, over time), the ADA recommends fluoride toothpaste for essentially everyone with teeth, brushed twice daily as covered in Lesson 2, plus fluoridated water where it's available.

:::reveal About how much does drinking fluoridated water reduce cavities, per the CDC? ||| About 25%, in both children and adults.

## Sources
- American Dental Association. (n.d.-c). *Fluoride*. MouthHealthy. https://www.mouthhealthy.org/all-topics-a-z/fluoride
- Centers for Disease Control and Prevention. (n.d.-a). *Community water fluoridation facts*. https://www.cdc.gov/oral-health/data-research/facts-stats/fast-facts-community-water-fluoridation.html`,
    },

    // ── Module 3: Diet & Professional Care ───────────────────────────────
    {
      slug: "diet-sugar-and-decay",
      title: "5 · Diet and sugar: what actually fuels tooth decay",
      section: "Module 3: Diet & Professional Care",
      recallContent: [
        {
          prompt: "How does fluoride help teeth?",
          answer: "It helps enamel remineralize after acid attacks and makes new enamel more resistant to future acid.",
        },
        {
          prompt: "About how much does fluoridated drinking water reduce cavities?",
          answer: "About 25%.",
        },
      ],
      body: `Back to Lesson 1's mechanism: plaque bacteria break down sugar and produce the acid that causes decay. So the sugar you eat is not just a "diet" issue, it is a direct input into the process that damages teeth.

The **World Health Organization** issued a formal guideline on this in 2015. It **strongly recommends** that both adults and children keep "free sugars" (sugars added to food or drinks, plus sugars naturally present in honey, syrups, and fruit juice) to **less than 10% of total daily energy intake**. It also makes a **conditional** recommendation, based on lower-quality ecological evidence, to go further, under 5% of total energy, for additional benefit against cavities. The guideline reports a clear dose-response pattern: dental caries rates are consistently higher above the 10% threshold than below it (World Health Organization, 2015).

Two things worth noticing in that guideline. First, "free sugars" is broader than what most people picture: the sugar in fruit juice and honey counts, table sugar is not the only source. Second, the WHO frames this as a *strong* recommendation on the 10% threshold but only a *conditional* one on 5%, because the evidence for the stricter number is thinner. That is the same kind of honesty about certainty this course tries to model throughout: state what is well-supported plainly, and flag what is more tentative.

:::reveal What share of total daily energy does the WHO strongly recommend keeping free-sugar intake under? ||| Less than 10% (with a conditional, lower-certainty recommendation to go under 5% for additional benefit).

## Sources
- World Health Organization. (2015). *Guideline: Sugars intake for adults and children*. https://www.who.int/publications/i/item/9789241549028`,
    },
    {
      slug: "dental-visits-and-screening",
      title: "6 · Regular dental visits: what a checkup actually catches",
      section: "Module 3: Diet & Professional Care",
      recallContent: [
        {
          prompt: "What share of total daily energy does the WHO strongly recommend keeping free-sugar intake under?",
          answer: "Less than 10% of total daily energy.",
        },
        {
          prompt: "Does 'free sugars' in the WHO guideline include the sugar naturally present in fruit juice and honey?",
          answer: "Yes.",
        },
      ],
      body: `Home care handles day-to-day plaque; it cannot remove **tartar**, plaque that has hardened onto the tooth and can no longer be brushed or flossed away. That is one reason the ADA recommends a checkup and professional cleaning roughly **every six months** for most people, adjusted up or down based on individual risk (American Dental Association, n.d.-a; American Dental Association, n.d.-b).

A checkup does more than clean teeth and check for cavities. It also includes an **oral cancer screening**, a visual and physical exam of the mouth, tongue, and throat. In 2026 the ADA released updated, evidence-graded guidance on this reaffirming that a clinician's clinical exam, not adjunct staining tools, is the priority method for early detection (American Dental Association, 2026). Oral cancer, like early cavities and early gum disease, can progress without obvious symptoms, which is exactly why screening happens on a schedule rather than only when something hurts.

The scale of the problem regular care addresses is large: the CDC's 2024 national surveillance data show some form of periodontal disease is common in U.S. adults, and it is more prevalent among adults who have not had a dental visit in the past year (Centers for Disease Control and Prevention, 2024). That is a surveillance association, not proof that skipping visits *causes* gum disease on its own, other risk factors travel with infrequent care too, but it is a consistent, large-scale pattern that lines up with what checkups are designed to catch early.

:::reveal Besides checking for cavities and cleaning, what serious condition does a routine dental checkup screen for? ||| Oral cancer, via a visual and physical exam of the mouth, tongue, and throat.

## Sources
- American Dental Association. (n.d.-a). *Toothbrushes*. ADA Library, Oral Health Topics. https://www.ada.org/resources/ada-library/oral-health-topics/toothbrushes
- American Dental Association. (n.d.-b). *Home oral care*. ADA Library, Oral Health Topics. https://www.ada.org/resources/ada-library/oral-health-topics/home-care
- American Dental Association. (2026, April). *ADA guideline prioritizes clinical exam over vital staining in early oral cancer detection*. ADA News. https://adanews.ada.org/ada-news/2026/april/ada-guideline-prioritizes-clinical-exam-over-vital-staining-in-early-oral-cancer-detection/
- Centers for Disease Control and Prevention. (2024). *2024 oral health surveillance report*. https://www.cdc.gov/oral-health/php/2024-oral-health-surveillance-report/index.html`,
    },

    // ── Module 4: Your Mouth & the Rest of Your Body ─────────────────────
    {
      slug: "gum-disease-and-diabetes",
      title: "7 · The mouth-body connection: gum disease and diabetes",
      section: "Module 4: Your Mouth & the Rest of Your Body",
      recallContent: [
        {
          prompt: "About how often does the ADA recommend most people get a dental checkup and cleaning?",
          answer: "Roughly every six months, adjusted by individual risk.",
        },
        {
          prompt: "Besides cavities, what does a routine checkup screen for?",
          answer: "Oral cancer.",
        },
      ],
      body: `Everything so far has been about the mouth itself. This module turns to a widely repeated claim: that oral hygiene protects the rest of your body. The honest version of that story starts with a distinction. **Gingivitis** is early, reversible gum inflammation. **Periodontitis** is more advanced gum disease that has damaged the tissue and bone supporting the teeth, it is periodontitis, not everyday plaque, that the systemic-health research is mostly about.

The proposed mechanism: periodontitis lets bacteria and inflammatory byproducts enter the bloodstream, contributing to inflammation elsewhere in the body, either directly (bacteria in the blood) or indirectly (a persistent, low-grade inflammatory state) (Sanz et al., 2018).

The **clearest** systemic link, and the one with the strongest evidence, is with **diabetes**, and it runs both ways. Higher blood sugar in diabetes is associated with worse periodontal outcomes, and, separately, periodontitis is associated with worse blood-sugar control. This is not just observational: in randomized trials, treating periodontal disease produced an average **0.4 percentage-point reduction in HbA1c** (a blood-sugar marker) at three months, evidence that the relationship runs in both directions (Sanz et al., 2018). That two-way, intervention-tested pattern is why diabetes is the benchmark for how strong this course expects the other systemic links to be, and, as the next two lessons show, none of them are quite there yet.

:::reveal Why is the periodontitis-diabetes link considered the most established of the systemic connections covered in this course? ||| It's bidirectional (each worsens the other) and it's supported by randomized trials, not just observational association: treating periodontal disease measurably improved blood-sugar control (about a 0.4-point HbA1c drop at 3 months).

## Sources
- Sanz, M., Ceriello, A., Buysschaert, M., Chapple, I., Demmer, R. T., Graziani, F., Herrera, D., Jepsen, S., Lione, L., Madianos, P., Mathur, M., Montanya, E., Shapira, L., Tonetti, M., & Vegh, D. (2018). Scientific evidence on the links between periodontal diseases and diabetes: Consensus report and guidelines of the joint workshop on periodontal diseases and diabetes by the International Diabetes Federation and the European Federation of Periodontology. *Diabetes Research and Clinical Practice*, *137*, 231–241. https://doi.org/10.1016/j.diabres.2017.12.001`,
    },
    {
      slug: "gum-disease-and-heart-disease",
      title: "8 · Gum disease and heart disease: what the evidence does and doesn't show",
      section: "Module 4: Your Mouth & the Rest of Your Body",
      recallContent: [
        {
          prompt: "What makes the periodontitis-diabetes relationship 'bidirectional'?",
          answer: "Higher blood sugar worsens periodontal outcomes, and periodontitis, in turn, worsens blood-sugar control.",
        },
        {
          prompt: "What did randomized trials find happens to HbA1c when periodontal disease is treated?",
          answer: "It dropped by about 0.4 percentage points at 3 months, on average.",
        },
      ],
      body: `This is the claim most worth getting exactly right, because it is the one most often overstated online: "flossing prevents heart attacks." Here is what the actual source says.

In 2026 the **American Heart Association** published an updated scientific statement on periodontal disease and atherosclerotic cardiovascular disease, replacing its 2012 statement, after reviewing a decade-plus of new evidence including Mendelian randomization studies, intervention trials, and inflammatory-marker research (Tran et al., 2026). It reports growing evidence of an **association** between periodontal disease and increased risk of cardiovascular events, including heart attack, stroke, atrial fibrillation, heart failure, and cardiometabolic conditions, plausibly through bacteria entering the bloodstream (a direct pathway) or chronic systemic inflammation (an indirect pathway) (Tran et al., 2026).

Then comes the sentence that should govern how anyone talks about this topic: the statement is explicit that there is **"no direct evidence of causality, or that periodontal therapy will prevent CVD"** (Tran et al., 2026). It also notes that periodontal disease and cardiovascular disease share several risk factors, including older age, smoking, low physical activity, obesity, low socioeconomic status, and low education, any of which could partly explain why the two conditions travel together without one causing the other.

So: gum disease and heart disease are **linked**, worth mentioning to both your dentist and your physician, and the mechanisms are biologically plausible. But the current, authoritative evidence does not support the claim that flossing, or any periodontal treatment, prevents heart attacks or strokes. That claim goes beyond what the AHA itself says.

:::reveal Does the AHA's 2026 statement say periodontal therapy prevents cardiovascular disease? ||| No. It explicitly states there is no direct evidence of causality, or that periodontal therapy will prevent CVD, the relationship is an association with plausible mechanisms, not proven causation.

## Sources
- Tran, A. H., Zaidi, A. H., Bolger, A. F., Del Brutto, O. H., Hegde, R., Patton, L. L., Rausch, J., & Zachariah, J. P. (2026). Periodontal disease and atherosclerotic cardiovascular disease: A scientific statement from the American Heart Association. *Circulation*. https://doi.org/10.1161/CIR.0000000000001390`,
    },
    {
      slug: "gum-disease-brain-and-pregnancy",
      title: "9 · Gum disease, the brain, and pregnancy: hypotheses still being tested",
      section: "Module 4: Your Mouth & the Rest of Your Body",
      recallContent: [
        {
          prompt: "What does the 2026 AHA statement explicitly say about periodontal therapy and CVD?",
          answer: "There is no direct evidence of causality, or that periodontal therapy will prevent CVD.",
        },
        {
          prompt: "Name two shared risk factors between periodontal disease and cardiovascular disease that could partly explain the association.",
          answer: "Any two of: older age, smoking, low physical activity, obesity, low socioeconomic status, low education.",
        },
      ],
      body: `Two more systemic links get discussed often, and both sit earlier on the evidence ladder than diabetes or heart disease, meaning: real research exists, the association shows up consistently, but a causal claim in humans is not established.

**The brain.** A 2025 umbrella review, a study that pools findings across many earlier systematic reviews, examined periodontal disease and Alzheimer's disease. It found a consistent association across the literature: periodontal pathogens (bacteria such as *P. gingivalis*) are linked to neuroinflammation and Alzheimer's-related pathology in the reviewed studies, and the authors describe chronic oral inflammation as something that "may contribute to" neurodegenerative processes (Arbildo-Vega et al., 2025). An umbrella review is a summary of the existing literature, not new patient data proving cause and effect, so this is best read as a well-supported hypothesis worth further study, not a demonstrated cause of Alzheimer's in humans.

**Pregnancy.** Hormonal changes during pregnancy make gum inflammation more common: an estimated 60 to 75% of pregnant women develop gingivitis (Centers for Disease Control and Prevention, n.d.-b). Periodontal disease during pregnancy is associated with preterm birth and low birth weight in observational studies. But when researchers test the causal version of that claim directly, by treating periodontal disease in pregnant women and checking whether preterm birth drops, the trial evidence is mixed: some smaller studies show improved outcomes, larger randomized trials generally do not (Centers for Disease Control and Prevention, n.d.-b). That gap, between a consistent observational association and inconsistent trial results, is exactly the pattern that should make you hold a claim loosely.

The throughline across this whole module: diabetes has the strongest, bidirectional, trial-backed evidence; heart disease has a real, mechanistically plausible association that its own authoritative source refuses to call causal; brain and pregnancy outcomes have real associations built on thinner, earlier-stage evidence. Good oral hygiene is worth doing for your mouth, and it may matter more broadly, but "may be linked to" is the honest ceiling on today's evidence for most of these claims.

:::reveal What does it mean that the periodontal-Alzheimer's evidence comes from an "umbrella review," and how should that shape your confidence in the claim? ||| An umbrella review summarizes many existing systematic reviews rather than testing new patients directly; it shows a consistent association across the literature, but it doesn't establish that periodontal disease causes Alzheimer's in humans, so the claim should be held as a well-supported hypothesis, not a proven cause.

## Sources
- Arbildo-Vega, H. I., et al. (2025). Association between periodontal disease and Alzheimer's disease: Umbrella review. *Frontiers in Dental Medicine*, *6*, 1635200. https://doi.org/10.3389/fdmed.2025.1635200
- Centers for Disease Control and Prevention. (n.d.-b). *Talking to pregnant women about oral health*. https://www.cdc.gov/oral-health/hcp/conversation-tips/talking-to-pregnant-women-about-oral-health.html`,
    },

    // ── Module 5: Practice ────────────────────────────────────────────────
    {
      slug: "dental-myths-debunked",
      title: "10 · Common dental myths, debunked",
      section: "Module 5: Practice",
      recallContent: [
        {
          prompt: "Which systemic link discussed in this course has the strongest, trial-backed evidence?",
          answer: "The periodontal disease-diabetes link, because it's bidirectional and shown in randomized trials, not just observation.",
        },
        {
          prompt: "What did the AHA's 2026 statement explicitly refuse to claim about periodontal therapy?",
          answer: "That it prevents cardiovascular disease, there is no direct evidence of causality.",
        },
      ],
      body: `A last pass through five claims this course can now check against the evidence already covered.

**"Bleeding gums when you floss mean you should stop."** False. Bleeding is usually a sign of gingivitis, inflammation from plaque buildup, not a sign that flossing is harmful (American Dental Association, n.d.-d). The evidence-matched response is more consistent, gentle cleaning (floss or an interdental brush, Lesson 3) and a dental visit if it persists, not avoidance.

**"You only need to see a dentist when something hurts."** False. Cavities, gum disease, and oral cancer commonly progress with no pain in their early stages, which is exactly why routine screening exists rather than symptom-triggered visits (Lesson 6).

**"Flossing is proven to prevent heart attacks and Alzheimer's."** Overstated. As Lessons 8 and 9 covered, gum disease is *associated* with cardiovascular and neurological conditions through plausible mechanisms, but the AHA's own 2026 statement says there is no direct evidence of causality, and the Alzheimer's evidence comes from an umbrella review of associations, not a proven cause. Flossing's own evidence base, from Cochrane, is low to very-low certainty for gum inflammation specifically (Lesson 3).

**"Natural sugar, like the sugar in honey or fruit juice, doesn't count."** False. The WHO's "free sugars" definition, the one tied to cavity risk, explicitly includes sugars naturally present in honey, syrups, and fruit juice, not just added table sugar (Lesson 5).

**"Brushing harder cleans better."** False. The ADA recommends gentle, short circular strokes; hard scrubbing mainly wears enamel and irritates gums without added benefit (Lesson 2).

The pattern behind every one of these: the honest version of dental science is usually more modest, and more specific, than the version that circulates online. That is also the version worth trusting.

:::reveal True or false: bleeding gums when you floss mean you should stop flossing. Why? ||| False. Bleeding usually signals gum inflammation (gingivitis) from plaque buildup; the fix is more consistent, gentle cleaning and a dental visit if it persists, not avoiding the area.

## Sources
- American Dental Association. (n.d.-d). *Common myths of gum disease*. MouthHealthy. https://www.mouthhealthy.org/common-myths-of-gum-disease`,
    },

    // ── Module 6: Final quiz ──────────────────────────────────────────────
    {
      slug: "dental-health-101-quiz",
      title: "11 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What are the three layers of a tooth, from the outside in?",
            options: [
              "Dentin, enamel, pulp",
              "Enamel, dentin, pulp",
              "Pulp, dentin, enamel",
              "Enamel, pulp, dentin",
            ],
            correctIndex: 1,
            explanation:
              "Enamel is the hard outer layer, dentin is beneath it and carries sensation, and the pulp at the center holds blood vessels and nerves.",
            sourceLessonSlug: "tooth-anatomy-and-plaque",
          },
          {
            prompt: "What do plaque bacteria produce when they break down sugar, and what does that do to teeth?",
            options: [
              "Fluoride; it strengthens enamel",
              "Acid; it demineralizes enamel and can cause cavities",
              "Calcium; it remineralizes enamel",
              "Nothing measurable happens to enamel",
            ],
            correctIndex: 1,
            explanation:
              "Plaque bacteria break down sugar into acid, which leaches minerals out of enamel; repeated acid attacks can create a cavity.",
            sourceLessonSlug: "tooth-anatomy-and-plaque",
          },
          {
            prompt: "Per the ADA, how should you brush your teeth?",
            options: [
              "As hard as possible, once a day, for best results",
              "Twice a day for two minutes, gently, with a fluoride toothpaste",
              "Only after meals, with any toothpaste",
              "Once a week is sufficient if you floss daily",
            ],
            correctIndex: 1,
            explanation:
              "The ADA recommends twice-daily brushing for two minutes, using gentle circular strokes and fluoride toothpaste. Hard scrubbing isn't more effective and can wear enamel.",
            sourceLessonSlug: "brushing-basics",
          },
          {
            prompt: "What did the 2019 Cochrane review find about flossing's effect on plaque and gingivitis?",
            options: [
              "Strong, high-certainty evidence that flossing eliminates plaque",
              "Low to very-low certainty evidence; may reduce gingivitis somewhat, plaque effect unclear",
              "No evidence exists on interdental cleaning at all",
              "Flossing was proven more effective than any interdental brush in every trial",
            ],
            correctIndex: 1,
            explanation:
              "Cochrane's review (Worthington et al., 2019) found low to very-low certainty evidence for a gingivitis benefit and an unclear effect on plaque; interdental brushes may work as well as or better than floss.",
            sourceLessonSlug: "flossing-and-interdental-cleaning",
          },
          {
            prompt: "About how much does drinking fluoridated water reduce cavities, per the CDC?",
            options: ["About 5%", "About 25%", "About 60%", "About 90%"],
            correctIndex: 1,
            explanation:
              "The CDC reports that fluoridated water reduces cavities by roughly 25% in both children and adults.",
            sourceLessonSlug: "fluoride-and-remineralization",
          },
          {
            prompt: "What does the WHO strongly recommend for free-sugar intake, and does that include sugar from fruit juice or honey?",
            options: [
              "Under 10% of total energy; yes, it includes fruit juice and honey sugars",
              "Under 50% of total energy; only added table sugar counts",
              "No limit is recommended",
              "Under 10% of total energy; only soda counts",
            ],
            correctIndex: 0,
            explanation:
              "The WHO's 2015 guideline recommends free sugars stay under 10% of total daily energy, and its definition of free sugars includes sugars naturally present in honey, syrups, and fruit juice, not just added sugar.",
            sourceLessonSlug: "diet-sugar-and-decay",
          },
          {
            prompt: "Besides checking for cavities, what does a routine ADA-recommended dental checkup screen for?",
            options: ["Vitamin D deficiency", "Oral cancer", "Blood pressure", "Diabetes diagnosis"],
            correctIndex: 1,
            explanation:
              "A routine checkup includes an oral cancer screening, a visual and physical exam of the mouth, tongue, and throat, since oral cancer can progress without symptoms.",
            sourceLessonSlug: "dental-visits-and-screening",
          },
          {
            prompt: "Why is the periodontal disease-diabetes link considered the strongest of the systemic connections in this course?",
            options: [
              "It's the only link studied at all",
              "It's bidirectional and supported by randomized trials showing periodontal treatment improves blood-sugar control",
              "The AHA declared it definitively causal",
              "It was discovered most recently",
            ],
            correctIndex: 1,
            explanation:
              "The diabetes link runs both ways (each condition worsens the other), and randomized trials found treating periodontal disease improved HbA1c by about 0.4 points at 3 months, trial evidence, not just observation.",
            sourceLessonSlug: "gum-disease-and-diabetes",
          },
          {
            prompt: "What does the American Heart Association's 2026 statement say about periodontal therapy and cardiovascular disease?",
            options: [
              "Periodontal therapy is proven to prevent heart attacks and strokes",
              "There is no direct evidence of causality, or that periodontal therapy will prevent CVD",
              "The two conditions are completely unrelated",
              "Only flossing, not brushing, prevents CVD",
            ],
            correctIndex: 1,
            explanation:
              "The AHA's 2026 statement (Tran et al., 2026) is explicit that periodontal disease is associated with cardiovascular events but there is no direct evidence of causality or that treating gum disease prevents CVD.",
            sourceLessonSlug: "gum-disease-and-heart-disease",
          },
          {
            prompt: "What does an 'umbrella review,' like the 2025 periodontal-Alzheimer's study, actually tell you?",
            options: [
              "It proves periodontal disease causes Alzheimer's in humans",
              "It summarizes existing systematic reviews and shows a consistent association, not proof of causation",
              "It is a single new clinical trial",
              "It disproves any link between the two conditions",
            ],
            correctIndex: 1,
            explanation:
              "An umbrella review pools findings from many prior systematic reviews. It found a consistent association between periodontal disease and Alzheimer's-related markers across the literature, but that is not the same as proving causation in humans.",
            sourceLessonSlug: "gum-disease-brain-and-pregnancy",
          },
          {
            prompt: "True or false: bleeding gums when flossing means you should stop flossing.",
            options: [
              "True, bleeding means flossing is damaging your gums",
              "False, bleeding usually signals gum inflammation that consistent, gentle cleaning helps resolve",
              "True, but only if it happens more than once",
              "False, because flossing never causes any bleeding",
            ],
            correctIndex: 1,
            explanation:
              "Bleeding gums are usually a sign of gingivitis (inflammation from plaque buildup), not evidence that flossing is harmful. The ADA recommends consistent, gentle cleaning and a dental visit if bleeding persists.",
            sourceLessonSlug: "dental-myths-debunked",
          },
        ],
      },
    },
  ],
};
