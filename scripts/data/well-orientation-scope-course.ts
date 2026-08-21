import type { AuthoredCourse } from "./authored-course";

// WELL-00 · Orientation & Scope (plans/67, the WELL wellness-coaching program).
//
// PRIVATE, owner-only at seed time: BAM's own study program first, public product later. Every
// factual claim below traces to the VERIFIED dossier (plans/future-courses/health/dossiers/
// 00-orientation-scope.md, section 4 only) — sources were fetched and checked against primaries
// on 2026-08-19, with corrections applied (e.g. the oft-cited NBHWC "4.2.7" competency number
// did not survive verification; the scope document and handbook competency 4.2 did).
//
// RULES THIS FILE FOLLOWS:
// 1. The not-affiliated disclaimer renders from CERT_DISCLAIMERS on the landing page AND is
//    stated in lesson 1 prose. Nothing here implies NASM/NBHWC recognition.
// 2. Legal content teaches STRUCTURE (practice vs title regulation, exemptions, referral duties)
//    with verbatim-anchored statute citations, and marks contested edges AS contested. It is
//    education about the landscape, never legal advice, and says so.
// 3. Assessment is multiple-choice + reveals; scope judgments have defensible wordings, so no
//    string-graded fill-ins anywhere in this program.
export const WELL_ORIENTATION_SCOPE_COURSE: AuthoredCourse = {
  title: "Wellness Coaching 00: Orientation and Scope",
  description:
    "The front door to the WELL program: what a wellness coach actually is, where coaching legally ends and licensed practice begins, when and how to refer, and how this program was researched, assessed, and honestly framed. Assumes the exercise science and nutrition foundations of a CPT, CNC, and CES; adds the layer none of them carry.",
  lessons: [
    // ── Section 1 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "what-this-program-is",
      title: "1 · What this program is, and how it was built",
      section: "Section 1 · The program",
      body: `This is a self-study wellness coaching program built to the union of two benchmarks: the pillar coverage of the NASM Certified Wellness Coach (movement, nutrition, physical recovery, sleep, and mental and emotional well-being) and the coaching-competency rigor of the National Board for Health & Wellness Coaching (NBHWC), whose published content outline and scope of practice are the closest thing this field has to a gold standard (National Board for Health & Wellness Coaching, n.d.; National Academy of Sports Medicine, n.d.).

Two honest statements before anything else.

**First, the affiliation statement.** This program is an independent study program. It is not affiliated with, endorsed by, or accredited by NASM or the NBHWC, and completing it grants no credential from either organization. Their names appear here for one reason: to describe the scope of study. NASM's own page states plainly that the CWC "is a wellness credential and is not NCCA-accredited," which is worth knowing when you compare credentials, and worth imitating in candor (National Academy of Sports Medicine, n.d.).

**Second, how this was researched.** Every course in this program was built dossier-first: deep-research runs gathered candidate sources, and every load-bearing claim was then verified against its primary source before it was allowed into a lesson. Claims that failed verification were corrected or cut, and you will occasionally see a lesson say so, because a curriculum that shows its corrections is more trustworthy than one that pretends it never needed any. Where a claim could not be settled, it is taught as contested rather than asserted.

## Who this program assumes you are

It assumes the knowledge of a NASM CPT, CNC, and CES. It will not re-teach exercise science, program design, corrective strategies, or nutrition fundamentals. Where a pillar overlaps those certifications, the course teaches the COACHING of that pillar, the conversation and the behavior change, and points back to what you already know for the content.

:::reveal Why does this program name NASM and NBHWC at all, if it grants neither credential? ||| To describe the scope of study: the pillar coverage benchmarked against NASM's CWC and the coaching rigor benchmarked against NBHWC's published competencies. Naming the benchmark honestly is different from claiming the credential, and the difference is stated everywhere it matters.

:::reveal What happened to research claims that could not be verified against a primary source? ||| They were corrected, cut, or explicitly taught as contested. Nothing enters a lesson on the strength of a search engine's summary alone.

## Vocabulary
- **Dossier-first**: the build method of this program: research tools gather candidate sources into a dossier, and only claims verified against primary sources may enter a lesson.
- **Primary source**: the original document a claim rests on, a statute, a peer-reviewed paper, or a certifying body's own publication, as opposed to a summary of one.
- **Contested claim**: a claim credible sources genuinely dispute; this program teaches such claims AS disputes rather than picking a winner quietly.
- **Wellness pillar**: one of the five domains the NASM CWC frames wellness around: movement, nutrition, physical recovery, sleep, and mental and emotional well-being.

## Sources
National Academy of Sports Medicine. (n.d.). *Certified wellness coach*. https://www.nasm.org/products/certified-wellness-coach

National Board for Health & Wellness Coaching. (n.d.). *Scope of practice*. https://nbhwc.org/scope-of-practice/`,
    },
    {
      slug: "what-a-wellness-coach-is",
      title: "2 · What a wellness coach is, and is not",
      section: "Section 1 · The program",
      body: `The NBHWC scope of practice is the clearest published definition in the field, and it is worth reading closely because every boundary in this program hangs off it (National Board for Health & Wellness Coaching, n.d.).

**What a coach does.** Health and wellness coaches work through an evidence-based, client-centered process that facilitates and empowers clients to develop and achieve self-determined health and wellness goals. The coach helps a client mobilize their own strengths and outside resources, commit to action steps, and build accountability. When a client has a treatment plan from a licensed professional, the coach supports its implementation, working under or alongside that professional's license rather than replacing it.

**What a coach is not.** A coach is not the content expert in the room, and the scope document says so: coaches may share evidence-based resources and information from nationally recognized authorities, but their craft is facilitating change, not prescribing it. If you also hold another credential, as you do, the roles must stay distinguishable: when you calculate a client's training load you are working as a CPT, and when you facilitate their commitment to show up you are coaching. Keeping those hats separate is not pedantry. It is what keeps the coaching role legally clean, and it is a skill this program drills.

**The centenarian frame.** You are also this program's first client. Every scope rule below applies to coaching others, and every pillar applies to coaching yourself along a decades-long health span. The capstone will ask you to build and coach your own protocol, so read each boundary twice: once as a coach, once as the coached.

:::reveal A client with a physician's treatment plan asks their coach to adjust it. What does the scope of practice say the coach's role is? ||| Supporting IMPLEMENTATION of the plan, under or alongside the licensed professional, never modifying it. Adjusting treatment belongs to the license that wrote it; the coach helps the client carry it out and communicate with the professional.

:::reveal You hold a CPT and you are coaching. When does the CPT hat come off and the coach hat go on? ||| When the work shifts from prescribing content (loads, exercise selection, corrective strategy) to facilitating change (goals, commitment, accountability, ambivalence). The scope document frames the coach as facilitator, not content expert, so the roles must stay visibly separate.

## Vocabulary
- **Scope of practice**: the published range of activities a credential authorizes, and by omission the activities it does not; the boundary every lesson in this course hangs off.
- **Client-centered process**: work organized around the client's own goals, values, and choices, with the coach facilitating rather than directing.
- **Self-determined goals**: goals the client sets for themselves; the scope defines coaching as helping clients develop and achieve these, not goals assigned by the coach.
- **Facilitator**: the coach's defined role: mobilizing the client's strengths and resources for change, as distinct from the content expert who prescribes what to do.
- **Dual role**: holding a coaching role and another credential with the same client; lawful and common, but the hats must stay visibly separate.

## Sources
National Board for Health & Wellness Coaching. (n.d.). *Scope of practice*. https://nbhwc.org/scope-of-practice/`,
      recallContent: [
        {
          prompt: "State the NBHWC definition of the coaching process in one sentence.",
          answer:
            "An evidence-based, client-centered process that facilitates and empowers clients to develop and achieve self-determined health and wellness goals, mobilizing their own strengths and resources with accountability.",
        },
        {
          prompt: "In the scope document's framing, is the coach the content expert?",
          answer:
            "No. Coaches may share evidence-based resources from nationally recognized authorities, but the craft is facilitation of behavior change. Content expertise belongs to other credentials, even when the same person holds one.",
        },
      ],
    },
    {
      slug: "the-credential-landscape",
      title: "3 · The credential landscape, compared honestly",
      section: "Section 1 · The program",
      body: `Four credentials define this space, and they are not interchangeable.

**NBHWC board certification (NBC-HWC).** A national board certification: complete an NBHWC-approved training program, then pass a board exam built on a published content outline. The outline has four weighted domains: coaching structure (17 to 23 percent), coaching process (47 to 53 percent), health and wellness (17 to 23 percent), and ethics and legal (7 to 13 percent). Notice what that weighting says: nearly half the exam is the coaching PROCESS itself, not health content. The board's program-approval handbook requires approved curricula to teach coaches to know and abide by the published scope of practice, its competency 4.2 (National Board for Health & Wellness Coaching, 2022, 2024).

The rigor behind that approval is inspectable, and it is worth knowing because it is what "board certification" buys. An approved program must deliver at least 75 instructional hours, at least 40 of them synchronous. Every student completes at least three practice coaching sessions of at least 30 minutes, each followed by a minimum of 20 minutes of individual faculty feedback, and the program caps with a scorable, pass/fail Practical Skills Assessment administered after 80 percent of the program is complete. Faculty standards are published too: at least 48 of the 60 core instructional hours must be taught by faculty who have earned the NBC-HWC themselves, likewise 48 by faculty with at least 200 hours of their own coaching practice, and at least 15 by faculty holding a graduate degree in a health-related field or a bachelor's degree paired with a state license or national registration. Sitting the board exam then requires the approved program, a log of 50 coaching sessions, and an associate's degree or 4,000 hours of work experience in any field, and keeping the credential afterward takes 36 continuing-education credits every three years (National Board for Health & Wellness Coaching, 2025, 2026, n.d.-b).

**NASM Certified Wellness Coach (CWC).** A private certification across five wellness pillars with behavior-change, motivational-interviewing, and coaching-theory content, examined by 100 multiple-choice questions. By NASM's own statement it is not NCCA-accredited, and verification for this program found no standalone CWC scope-of-practice document comparable to NBHWC's; NASM's scope guidance lives in its nutrition-coaching materials and instructor commentary instead (National Academy of Sports Medicine, n.d.).

**ACE Certified Health Coach.** An NCCA-accredited credential extending the exercise-professional role into multi-domain lifestyle behavior change, with a published position statement on nutrition scope that this program leans on in lesson 4. Candidacy requires being at least 18 with a high school diploma or equivalent and current CPR/AED certification with a live skills check, and the credential renews on 20 hours of continuing education every two years, of which at least one hour must come from ACE's Professional Conduct & Ethics category (American Council on Exercise, n.d.-a, n.d.-b, n.d.-c).

**ACLM lifestyle-medicine education.** The American College of Lifestyle Medicine defines lifestyle medicine around six pillars and, with the International Board of Lifestyle Medicine, certifies CLINICIANS. For coaches it offers education, not a license: a lifestyle-medicine-educated coach is still a coach, bound by coaching scope and state law (American College of Lifestyle Medicine, 2022). Its Lifestyle Medicine Coach certificate makes the layering explicit: the 16.5-hour self-paced course is open to anyone, but the LMC certificate itself is awarded only to holders of an active NBC-HWC or Wellcoaches certification who pass its 12 knowledge assessments at 80 percent or better. Complete the same course without that prerequisite and you receive a certificate of attendance instead (American College of Lifestyle Medicine, n.d.).

The pattern to keep: board certification with published competencies (NBHWC), accredited certification (ACE), private certification (NASM CWC), and clinician certification plus coach education (ACLM). When someone says "certified wellness coach," those are four different claims.

:::reveal Nearly half of the NBHWC exam weight sits in one domain. Which one, and what does that tell you? ||| Coaching process, at 47 to 53 percent. The board's view is that the craft of coaching, the relationship, communication, and techniques, is the core of the profession, ahead of health content knowledge.

:::reveal What does ACLM certify, and what does that mean for a coach with lifestyle-medicine training? ||| ACLM and IBLM certify clinicians. A coach with ACLM education has knowledge, not a license: they remain bound by coaching scope and state law, exactly as before the course.

:::reveal ACLM's coach certificate is stacked on another credential. What must you already hold to earn it, and what does the course grant without that? ||| An active NBC-HWC or Wellcoaches certification; with one of those, the 16.5-hour course plus 12 knowledge assessments at 80 percent earns the Lifestyle Medicine Coach certificate. Without the prerequisite, the same completion earns a certificate of attendance.

## Vocabulary
- **Board certification**: a credential granted by an independent board on top of approved training, defined by a published content outline and exam, the NBC-HWC being this field's example.
- **Content outline**: the published blueprint of an exam's domains and their weights; it tells you what a credential's board believes the profession IS.
- **Synchronous instruction**: live teaching, in person or remote, as opposed to self-paced material; NBHWC requires at least 40 of the 75 hours to be synchronous.
- **Practical Skills Assessment (PSA)**: NBHWC's required pass/fail evaluation of a real coaching session against a scorable rubric, administered late in an approved program.
- **Stacked credential**: a certificate that requires another credential as its prerequisite, as ACLM's Lifestyle Medicine Coach certificate requires an NBC-HWC or Wellcoaches certification.
- **NCCA accreditation**: third-party accreditation of a certification program by the National Commission for Certifying Agencies; ACE's Health Coach has it, NASM's CWC states it does not.

## Sources
American College of Lifestyle Medicine. (2022). *Lifestyle medicine overview* [Journal supplement]. https://cdn.mdedge.com/files/s3fs-public/aclm_2022_final_set_0.pdf

American College of Lifestyle Medicine. (n.d.). *Lifestyle medicine for coaches*. https://lifestylemedicine.org/education-certification/continuing-education/lifestyle-medicine-for-coaches/

American Council on Exercise. (n.d.-a). *Certified health coach career guide*. https://contentcdn.eacefitness.com/assetportfoliodownloads/CareerGuide-HC.pdf

American Council on Exercise. (n.d.-b). *Health coach certification*. https://www.acefitness.org/fitness-certifications/health-coach-certification/default.aspx

American Council on Exercise. (n.d.-c). *Frequently asked questions: Recertification*. https://www.acefitness.org/faqs/

National Academy of Sports Medicine. (n.d.). *Certified wellness coach*. https://www.nasm.org/products/certified-wellness-coach

National Board for Health & Wellness Coaching. (2022). *Content outline*. https://www.nbme.org/wp-content/uploads/2022/05/NBHWC_Content_Outline-2ca.pdf

National Board for Health & Wellness Coaching. (2025). *NBC-HWC recertification handbook*. https://nbhwc.org/wp-content/uploads/2025/07/NBC-HWC-Recertification-Handbook-2025-Final-1-2.pdf

National Board for Health & Wellness Coaching. (2026). *Program approval handbook* (2026 ed.). https://nbhwc.org/wp-content/uploads/2026/04/NBHWC-Program-Approval-Handbook-2026-2.pdf

National Board for Health & Wellness Coaching. (n.d.-b). *Exam eligibility requirements*. https://nbhwc.org/exam-eligibility-requirements/`,
    },

    {
      slug: "quiz-the-program",
      title: "4 · Knowledge check: the program",
      section: "Section 1 · The program",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "This program benchmarks itself against two organizations. What does it take from each?",
            options: [
              "Pillar coverage from the NASM CWC, and coaching-competency rigor from the NBHWC",
              "Pillar coverage from the NBHWC, and examination methodology from the NASM CWC",
              "Legal scope from the NASM CWC, and its continuing-education schedule from the NBHWC",
              "Its ethics code from the NASM CWC, and its five wellness pillars from the NBHWC",
            ],
            correctIndex: 0,
            explanation:
              "The union is deliberate: NASM's CWC supplies the five-pillar coverage map, and NBHWC supplies the coaching-competency rigor through its published content outline and scope of practice.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "Which five domains does the NASM CWC frame wellness around?",
            options: [
              "Movement, nutrition, physical recovery, sleep, and mental and emotional well-being",
              "Movement, nutrition, hydration, sleep, and social connection across the lifespan",
              "Cardiovascular fitness, strength, flexibility, body composition, and stress tolerance",
              "Exercise, diet, supplementation, sleep hygiene, and mindfulness-based stress reduction",
            ],
            correctIndex: 0,
            explanation:
              "The five pillars are movement, nutrition, physical recovery, sleep, and mental and emotional well-being. Hydration, supplementation, and body composition are not pillars in this framing.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "What does completing this program grant you from NASM or the NBHWC?",
            options: [
              "Nothing; it is an independent program not affiliated with, endorsed by, or accredited by either",
              "Provisional candidacy toward the NBC-HWC, pending a logged practicum",
              "Continuing-education credit that both organizations accept toward recertification",
              "A recognized equivalency that shortens the NASM CWC examination requirement",
            ],
            correctIndex: 0,
            explanation:
              "The affiliation statement is explicit: independent study program, no affiliation, no endorsement, no accreditation, no credential from either organization. Their names describe the scope of study only.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "NASM's own product page states which of the following about the CWC?",
            options: [
              "That it is a wellness credential and is not NCCA-accredited",
              "That it is accredited by the NCCA under its health-coaching category",
              "That it satisfies the NBHWC's approved-program requirement for exam eligibility",
              "That it is recognized for licensure in states with dietetics practice acts",
            ],
            correctIndex: 0,
            explanation:
              "NASM states plainly that the CWC 'is a wellness credential and is not NCCA-accredited.' The course treats that candor as worth imitating, and as worth knowing when comparing credentials.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "What does 'dossier-first' name in this program's build method?",
            options: [
              "Research tools gather candidate sources, and only claims verified against primaries enter a lesson",
              "Lessons are drafted first, then a matching bibliography is assembled to support them",
              "Each course opens with a case file about one client followed across every pillar",
              "Sources are ranked by citation count, and the highest-ranked become the lesson's spine",
            ],
            correctIndex: 0,
            explanation:
              "Deep-research runs collect candidates into a dossier; every load-bearing claim is then checked against its primary source before it may enter a lesson. Drafting first and back-filling citations is the failure mode the method exists to prevent.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "In this program's vocabulary, what is a primary source?",
            options: [
              "The original document a claim rests on, rather than a summary of one",
              "The most recent publication available on a topic, regardless of document type",
              "Any peer-reviewed article, as distinct from a statute or an organization's own publication",
              "The source a lesson cites first, with the remainder listed as supporting material",
            ],
            correctIndex: 0,
            explanation:
              "A primary source is the original: a statute, a peer-reviewed paper, or a certifying body's own publication. Recency, ordering, and document type do not define it; being the original rather than a summary does.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "What happened to research claims that could not be verified against a primary source?",
            options: [
              "They were corrected, cut, or explicitly taught as contested",
              "They were retained with a lower confidence rating shown beside the citation",
              "They were moved into optional appendices so the core lessons stayed clean",
              "They were kept where two independent research tools agreed on the wording",
            ],
            correctIndex: 0,
            explanation:
              "Nothing enters a lesson on the strength of a search engine's summary. Unverifiable claims were corrected, cut, or taught as contested; agreement between two AI tools is not verification.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "Why does the program state that showing its corrections makes it more trustworthy, not less?",
            options: [
              "A curriculum that shows corrections is more trustworthy than one pretending it never needed any",
              "Corrections demonstrate that the author consulted more sources than a typical curriculum",
              "Regulators require published errata from any program describing statutory material",
              "Showing corrections lets learners skip the lessons that were revised most recently",
            ],
            correctIndex: 0,
            explanation:
              "The claim is about candor, not volume or compliance. Every curriculum needs corrections; only some admit it, and the admission is the trust signal.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "What is a contested claim in this program's usage?",
            options: [
              "A claim credible sources genuinely dispute, taught AS a dispute rather than resolved quietly",
              "A claim the author personally doubts but includes for completeness",
              "A claim that failed verification and was therefore removed from the lesson",
              "A claim whose evidence is observational rather than drawn from randomized trials",
            ],
            correctIndex: 0,
            explanation:
              "Contested means credible sources disagree. The program's rule is to teach the disagreement rather than pick a winner silently. Observational evidence is not automatically contested, and removed claims are not contested claims.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "Which prior knowledge does this program assume, and what does it therefore not re-teach?",
            options: [
              "CPT, CNC, and CES knowledge; it does not re-teach exercise science, program design, or nutrition fundamentals",
              "An NBC-HWC board certification; it does not re-teach motivational interviewing or coaching structure",
              "A graduate degree in a health field; it does not re-teach research methods or statistical inference",
              "No prior credential at all; it teaches every pillar from first principles for a general audience",
            ],
            correctIndex: 0,
            explanation:
              "It assumes NASM CPT, CNC, and CES. Where a pillar overlaps those certifications it teaches the COACHING of the pillar and points back to what the learner already knows for the content.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "Where a pillar overlaps a certification you already hold, what does the course teach instead of the content?",
            options: [
              "The coaching of that pillar: the conversation and the behavior change",
              "An accelerated refresher of the content, compressed into a single summary lesson",
              "The legal exposure specific to that pillar, with the science left entirely aside",
              "A comparison of how each certifying body words the same underlying material",
            ],
            correctIndex: 0,
            explanation:
              "Overlap is handled by shifting the level: the course teaches the conversation and the behavior change, and points back to the existing credential for the content itself.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "The program calls NBHWC's published content outline and scope of practice which of the following?",
            options: [
              "The closest thing this field has to a gold standard",
              "One of several equivalent frameworks, chosen here for convenience",
              "A legally binding standard in every state that licenses dietitians",
              "An outdated framework retained only for historical comparison",
            ],
            correctIndex: 0,
            explanation:
              "The wording matters: closest thing to a gold standard, not a legal standard and not one option among equals. NBHWC's documents are published, competency-based, and inspectable, which is why they anchor the program.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "Why does the program name NASM and NBHWC at all, given it grants neither credential?",
            options: [
              "To describe the scope of study, which is different from claiming the credential",
              "To establish a partnership that permits the use of both organizations' materials",
              "Because both organizations require attribution wherever their pillar names appear",
              "To signal that the program's exams were calibrated against both bodies' pass rates",
            ],
            correctIndex: 0,
            explanation:
              "Naming a benchmark honestly is different from claiming a credential, and the difference is stated everywhere it matters. There is no partnership, requirement, or calibration behind it.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "How does the program handle a claim it could not settle either way?",
            options: [
              "It teaches the claim as contested rather than asserting it",
              "It omits the claim entirely so no learner encounters an open question",
              "It asserts the more widely held position and footnotes the minority view",
              "It defers to whichever certifying body has addressed the question most recently",
            ],
            correctIndex: 0,
            explanation:
              "Unsettled claims are taught as contested. Omitting them hides the state of the evidence, and defaulting to the popular or most recent position is exactly the quiet winner-picking the rule forbids.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "A colleague says: 'Your program is basically the NASM CWC with extra reading.' What is the most accurate correction?",
            options: [
              "It is the union of CWC pillar coverage and NBHWC competency rigor, and it grants no credential at all",
              "It is a strict superset of the CWC, so completing it covers everything the CWC examination does",
              "It is the NBHWC approved-program curriculum, delivered asynchronously instead of live",
              "It is an accredited alternative to the CWC that most employers now accept in its place",
            ],
            correctIndex: 0,
            explanation:
              "Two corrections are needed: the benchmark is a union of two organizations, not one, and no credential results. It is not a superset, not an approved program, and not accredited.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "Which of these would violate the program's own sourcing rule?",
            options: [
              "Stating a dose-response figure because two research tools reported the same number",
              "Stating a statutory exemption after reading the section text in the state's code",
              "Teaching a disputed effect size as disputed, with both positions named",
              "Cutting a claim whose cited paper turned out not to support it",
            ],
            correctIndex: 0,
            explanation:
              "Agreement between research tools is not verification; both can inherit the same error. Reading the statute, teaching disputes as disputes, and cutting unsupported claims are all the rule working correctly.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "In the pillar vocabulary, 'physical recovery' is:",
            options: [
              "One of the five wellness pillars the NASM CWC frames wellness around",
              "A sub-topic of the movement pillar rather than a pillar of its own",
              "A clinical domain the program treats as outside any coaching scope",
              "The NBHWC content-outline domain carrying the heaviest exam weight",
            ],
            correctIndex: 0,
            explanation:
              "Physical recovery is its own pillar, alongside movement, nutrition, sleep, and mental and emotional well-being. The heaviest NBHWC exam weight belongs to coaching process, which is a different framework entirely.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "The affiliation statement appears in two places. Where?",
            options: [
              "In lesson 1's prose and on the course landing page's disclaimer",
              "In the course description and in every lesson's Sources block",
              "On the certificate of completion and in the program's terms of service",
              "In the syllabus and in the confirmation email sent at enrollment",
            ],
            correctIndex: 0,
            explanation:
              "The not-affiliated disclaimer renders on the landing page and is also stated in lesson 1's prose, so a learner meets it before any content and cannot reach the material without it.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "What is the program's stated reason for assuming CPT, CNC, and CES knowledge rather than teaching from scratch?",
            options: [
              "So it can add the layer none of those certifications carry, instead of repeating them",
              "So it can be completed in fewer hours than an NBHWC-approved program requires",
              "Because NASM prohibits restating certification content in derivative programs",
              "Because learners without those credentials cannot lawfully coach behavior change",
            ],
            correctIndex: 0,
            explanation:
              "The point is additive: the coaching layer is the thing CPT, CNC, and CES do not carry. Hour counts and permissions are not the reason, and the claim that uncredentialled people cannot lawfully coach behavior change is simply false.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "Which statement about this program's relationship to a credential is accurate?",
            options: [
              "It is a study program; any credential must be earned from the awarding body separately",
              "It is a preparation course formally recognized by the awarding bodies it references",
              "It confers a specialization that substitutes for one leg of the NBC-HWC pathway",
              "It grants a certificate of attendance that the NBHWC counts toward continuing education",
            ],
            correctIndex: 0,
            explanation:
              "No recognition, no substitution, no continuing-education value. It is independent study, and every credential named in it must be earned through its own organization's pathway.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "How does the NBHWC scope of practice define the coaching process?",
            options: [
              "An evidence-based, client-centered process facilitating self-determined health and wellness goals",
              "A structured educational process delivering evidence-based health information to clients",
              "A clinician-directed process implementing prescribed treatment plans with accountability",
              "A goal-setting process in which the coach and client jointly select the health targets",
            ],
            correctIndex: 0,
            explanation:
              "The definition is evidence-based, client-centered, and facilitative, with the goals SELF-determined by the client. The coach does not deliver the content, direct the plan, or co-select the targets.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "Beyond the client's own strengths, what else does the scope say the coach helps mobilize?",
            options: [
              "Outside resources, alongside commitment to action steps and accountability",
              "Clinical referrals, which the coach arranges directly with the treating provider",
              "Family participation, which the scope requires in any multi-week engagement",
              "Evidence summaries the coach prepares from the peer-reviewed literature",
            ],
            correctIndex: 0,
            explanation:
              "The scope names the client's own strengths and outside resources, plus commitment to action steps and accountability. Arranging referrals directly, mandating family involvement, and preparing evidence summaries are not in that definition.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "A client arrives with a treatment plan written by their physician. What does the scope say the coach's role is?",
            options: [
              "Supporting its implementation, under or alongside that professional's license",
              "Reviewing it for behavioral feasibility and proposing adjustments to the physician",
              "Translating it into weekly targets the coach then monitors and modifies as needed",
              "Setting it aside so coaching goals remain fully self-determined by the client",
            ],
            correctIndex: 0,
            explanation:
              "The coach supports implementation, working under or alongside the license that wrote the plan, never replacing it. Proposing adjustments, modifying targets, and disregarding the plan all overstep.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "Is the coach the content expert in the room?",
            options: [
              "No; the craft is facilitating change, though evidence-based resources may be shared",
              "Yes; the scope names content expertise as the coach's primary contribution",
              "Only where the coach holds a second credential covering that content area",
              "Only when no licensed professional is currently involved in the client's care",
            ],
            correctIndex: 0,
            explanation:
              "The scope is explicit that coaches are not the content expert. They may share evidence-based resources from nationally recognized authorities, but the craft is facilitation. Holding a second credential does not merge the roles; it means wearing two hats.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "What kind of information may a coach share, per the scope of practice?",
            options: [
              "Evidence-based resources and information from nationally recognized authorities",
              "Any peer-reviewed finding the coach has personally read and can cite accurately",
              "Individualized interpretations of published guidelines, tailored to the client's condition",
              "Whatever the client requests, provided the coach documents the request in writing",
            ],
            correctIndex: 0,
            explanation:
              "The permission is narrow and specific: evidence-based resources and information from nationally recognized authorities. Personal reading, individualized interpretation for a condition, and client request do not widen it.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "You hold a CPT and you are coaching. When does the CPT hat come off and the coach hat go on?",
            options: [
              "When the work shifts from prescribing content to facilitating goals, commitment, and ambivalence",
              "When the client stops asking technical questions and begins discussing feelings",
              "When the session moves out of the gym and into a conversational setting",
              "When the client's programming is finalized and the training block formally begins",
            ],
            correctIndex: 0,
            explanation:
              "The switch is defined by the KIND of work, not the topic, the room, or the calendar. Prescribing loads, exercise selection, and corrective strategy is trainer work; facilitating goals, commitment, accountability, and ambivalence is coaching.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "Why does the course insist that dual roles stay visibly separate?",
            options: [
              "It is what keeps the coaching role legally clean, and the course drills it as a skill",
              "It prevents clients from being billed twice for a single combined session",
              "Certifying bodies audit session recordings for role confusion during recertification",
              "It allows the coach to charge a different rate for each portion of the engagement",
            ],
            correctIndex: 0,
            explanation:
              "The stated reason is legal cleanliness of the coaching role, and the course treats separation as a trainable skill rather than pedantry. Billing, audits, and pricing are not the rationale.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "What is a 'dual role' in this course's vocabulary?",
            options: [
              "Holding a coaching role and another credential with the same client, hats kept separate",
              "Coaching two clients who share a household and therefore share environmental constraints",
              "Serving as both the coach and the referring party in a clinical handoff",
              "Working as a coach while simultaneously enrolled as a client of another coach",
            ],
            correctIndex: 0,
            explanation:
              "A dual role is one practitioner holding two credentials with one client. It is lawful and common; what makes it safe is keeping the roles visibly distinct.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "What does 'self-determined goals' mean in the scope's definition?",
            options: [
              "Goals the client sets for themselves, which coaching helps them develop and achieve",
              "Goals the coach proposes and the client formally ratifies before work begins",
              "Goals derived from the client's assessment data rather than from their stated preferences",
              "Goals a licensed professional has approved as clinically appropriate for the client",
            ],
            correctIndex: 0,
            explanation:
              "Self-determined means the client's own. Coach-proposed, data-derived, and clinician-approved goals are all somebody else determining them, which is the opposite of the term.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "The course calls the learner 'this program's first client.' What is the practical instruction attached to that?",
            options: [
              "Read each boundary twice: once as a coach, once as the coached",
              "Complete every self-check aloud before attempting the section's knowledge check",
              "Recruit a second learner so each pillar can be practised on someone else",
              "Defer the capstone until a paying client engagement is available to document",
            ],
            correctIndex: 0,
            explanation:
              "The centenarian frame asks for a double reading of every boundary, because the capstone requires building and coaching your own decades-long protocol.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "Which of these is the clearest example of the coach role rather than the content-expert role?",
            options: [
              "Exploring what makes a client ambivalent about their prescribed walking plan",
              "Selecting the walking pace that matches the client's target heart-rate zone",
              "Explaining which physiological adaptations the walking plan is designed to produce",
              "Revising the walking plan's weekly volume after reviewing the client's fatigue notes",
            ],
            correctIndex: 0,
            explanation:
              "Exploring ambivalence is facilitation. Selecting pace, explaining adaptations, and revising volume are all content and prescription, which belong to a training credential rather than the coaching role.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "'Client-centered process' means work organized around what?",
            options: [
              "The client's own goals, values, and choices, with the coach facilitating",
              "The client's measured baseline data, with progress reviewed against population norms",
              "The client's schedule and budget, with session structure adapted to both",
              "The client's diagnosis, with the coaching plan mirroring the treatment plan",
            ],
            correctIndex: 0,
            explanation:
              "Client-centered refers to whose goals, values, and choices organize the work, not to logistics, data, or diagnosis. The coach facilitates rather than directs.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "A coach notices a client's prescribed medication seems to be causing daytime sleepiness. What does the scope permit?",
            options: [
              "Supporting the client to raise it with the prescriber, without interpreting or advising on the medication",
              "Explaining the medication's known side-effect profile so the client can decide what to do",
              "Suggesting the client trial a lower dose and report back on whether sleepiness improves",
              "Recording the observation and adjusting session timing without involving the prescriber",
            ],
            correctIndex: 0,
            explanation:
              "Interpreting medical data and de-prescribing are both outside coaching. What remains squarely inside is facilitating the client's own communication with the license that wrote the prescription.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "Why does the course say the NBHWC scope document is worth reading closely?",
            options: [
              "Every boundary in the program hangs off it",
              "It carries statutory force in states that license health coaches",
              "It is reissued annually, so its wording changes materially each year",
              "It is the only scope document that addresses all five wellness pillars",
            ],
            correctIndex: 0,
            explanation:
              "It is the clearest published definition in the field and the anchor for every boundary the program teaches. It is not statute, and its authority comes from clarity and publication rather than law.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "What is the risk the course identifies in a coach who also holds a training credential?",
            options: [
              "The roles blur, which is what makes the coaching role legally unclean",
              "The client receives conflicting advice from the same practitioner in one session",
              "The training credential's insurance will not cover conversations about behavior",
              "The coach becomes over-reliant on prescription and neglects assessment",
            ],
            correctIndex: 0,
            explanation:
              "The named risk is role blur and the legal exposure it creates for the coaching role. The course's answer is not to avoid dual roles but to keep them visibly separate.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "In the NBHWC content outline, which domain carries the largest weight?",
            options: [
              "Coaching process, at 47 to 53 percent",
              "Health and wellness, at 47 to 53 percent",
              "Coaching structure, at 17 to 23 percent",
              "Ethics and legal, at 27 to 33 percent",
            ],
            correctIndex: 0,
            explanation:
              "Coaching process is 47 to 53 percent, nearly half the exam. Coaching structure and health and wellness are each 17 to 23 percent, and ethics and legal is 7 to 13 percent.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "What is the weight of the ethics and legal domain in the NBHWC content outline?",
            options: [
              "7 to 13 percent",
              "17 to 23 percent",
              "27 to 33 percent",
              "37 to 43 percent",
            ],
            correctIndex: 0,
            explanation:
              "Ethics and legal is the smallest domain at 7 to 13 percent. The 17-to-23 band belongs to both coaching structure and health and wellness.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "What does the coaching-process weighting tell you about the board's view of the profession?",
            options: [
              "That the craft of coaching outranks health content knowledge as the core of the profession",
              "That health content knowledge is assumed from prerequisites and therefore tested lightly",
              "That process questions are easier to write, so more of them fit on the exam",
              "That ethics is treated as a subset of process rather than a domain of its own",
            ],
            correctIndex: 0,
            explanation:
              "Nearly half the exam sits on the relationship, communication, and techniques of coaching. That is a statement about what the board believes the profession IS, ahead of health content.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "What does NBHWC competency 4.2 require of approved curricula?",
            options: [
              "That coaches are taught to know and abide by the published scope of practice",
              "That every graduate completes fifty logged sessions before the exam",
              "That programs disclose their pass rates to prospective students annually",
              "That faculty maintain their own active coaching practice throughout the year",
            ],
            correctIndex: 0,
            explanation:
              "Competency 4.2 is the scope competency: approved programs must teach coaches to know and abide by the published scope of practice. The session log is an exam-eligibility requirement, not competency 4.2.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "How many instructional hours must an NBHWC-approved program deliver, and how many must be synchronous?",
            options: [
              "At least 75 hours, at least 40 of them synchronous",
              "At least 60 hours, at least 30 of them synchronous",
              "At least 100 hours, at least 50 of them synchronous",
              "At least 75 hours, with synchronous delivery optional throughout",
            ],
            correctIndex: 0,
            explanation:
              "The floor is 75 instructional hours with at least 40 synchronous. The 60-hour figure in the handbook refers to CORE instructional hours in the faculty-credential rules, not the program total.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "What are the practice-session requirements in an NBHWC-approved program?",
            options: [
              "At least three sessions of at least 30 minutes, each with at least 20 minutes of individual faculty feedback",
              "At least five sessions of at least 20 minutes, each with written faculty feedback within a week",
              "At least three sessions of at least 60 minutes, with group debriefs after each",
              "At least ten sessions of any length, with feedback on a representative sample",
            ],
            correctIndex: 0,
            explanation:
              "Three sessions minimum, thirty minutes minimum each, and a minimum of twenty minutes of INDIVIDUAL faculty feedback after each. The individual-feedback requirement is the expensive part and the reason approved programs cost what they do.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "What is the Practical Skills Assessment, and when is it administered?",
            options: [
              "A scorable pass/fail evaluation of a coaching session, given after 80 percent of the program is complete",
              "A written scenario examination scored on a rubric, given at the midpoint of the program",
              "A peer-reviewed session recording, submitted at any point before the board exam",
              "An observed intake interview, administered during the program's first quarter",
            ],
            correctIndex: 0,
            explanation:
              "The PSA is scorable and pass/fail, evaluating a real coaching session against a rubric, and it caps the program after 80 percent completion. It is a performance assessment, not a written one.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "Of the 60 core instructional hours, how many must be taught by faculty who hold the NBC-HWC themselves?",
            options: [
              "At least 48",
              "At least 30",
              "All 60",
              "At least 15",
            ],
            correctIndex: 0,
            explanation:
              "At least 48 of the 60 core hours must be taught by NBC-HWC faculty, and separately at least 48 by faculty with at least 200 hours of their own coaching practice. The 15-hour figure belongs to the graduate-degree requirement.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "Which faculty-credential rule attaches to at least 15 of the core instructional hours?",
            options: [
              "A graduate degree in a health-related field, or a bachelor's plus a state license or national registration",
              "At least 200 hours of the faculty member's own documented coaching practice",
              "An active NBC-HWC credential held for a minimum of three continuous years",
              "Completion of the board's train-the-trainer course within the prior recertification cycle",
            ],
            correctIndex: 0,
            explanation:
              "The 15-hour rule is the academic-credential rule. The 200-hours-of-practice rule and the NBC-HWC rule each attach to 48 hours, not 15.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "What are the three requirements to sit the NBHWC board exam?",
            options: [
              "An approved program, a log of 50 coaching sessions, and an associate's degree or 4,000 hours of work experience",
              "An approved program, a log of 100 coaching sessions, and a bachelor's degree in a health field",
              "An approved program, a passing Practical Skills Assessment, and two professional references",
              "An accredited certification, a log of 50 coaching sessions, and current CPR/AED certification",
            ],
            correctIndex: 0,
            explanation:
              "Approved program, 50 logged sessions, and an associate's degree OR 4,000 hours of work experience in ANY field. The experience alternative is what keeps the pathway open to career changers.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "The 4,000-hours alternative to an associate's degree must be work experience in which field?",
            options: [
              "Any field",
              "A health-related field only",
              "Coaching or an allied behavioral discipline",
              "The field in which the candidate intends to coach",
            ],
            correctIndex: 0,
            explanation:
              "Any field. The requirement is a general maturity-and-work-history floor, not a subject-matter one, which is why it functions as an accessible alternative to the degree.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "What does keeping the NBC-HWC require after certification?",
            options: [
              "36 continuing-education credits every three years",
              "20 continuing-education hours every two years",
              "A repeat Practical Skills Assessment every five years",
              "Re-sitting the board examination every three years",
            ],
            correctIndex: 0,
            explanation:
              "36 credits every three years for the NBC-HWC. The 20-hours-every-two-years schedule belongs to ACE's Health Coach, which is a different credential with a different cycle.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "How is the NASM CWC examined?",
            options: [
              "100 multiple-choice questions",
              "A written examination plus a recorded practical session",
              "150 multiple-choice questions and a case-study essay",
              "A proctored oral examination with two assessors",
            ],
            correctIndex: 0,
            explanation:
              "The CWC exam is 100 multiple-choice questions, with no practical or oral component. That absence is one of the concrete differences from the NBHWC pathway, which requires the PSA.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "What did verification for this program find when it looked for a standalone NASM CWC scope-of-practice document?",
            options: [
              "None comparable to NBHWC's; NASM's scope guidance lives in nutrition-coaching materials and instructor commentary",
              "A published document equivalent in structure to NBHWC's, released alongside the credential",
              "A scope document available only to enrolled candidates through the course portal",
              "A scope section embedded in NASM's code of ethics, covering all five pillars",
            ],
            correctIndex: 0,
            explanation:
              "No comparable standalone document was found. NASM's scope guidance appears in its nutrition-coaching materials and instructor commentary instead, which is a meaningful difference when comparing credentials.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "Which credential in this landscape is NCCA-accredited?",
            options: [
              "The ACE Certified Health Coach",
              "The NASM Certified Wellness Coach",
              "The ACLM Lifestyle Medicine Coach certificate",
              "All three of the non-board credentials",
            ],
            correctIndex: 0,
            explanation:
              "ACE's Health Coach carries NCCA accreditation; NASM states its CWC does not. ACLM's LMC is a certificate stacked on another credential, not an accredited certification.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "What are the candidacy requirements for the ACE Certified Health Coach?",
            options: [
              "At least 18, a high school diploma or equivalent, and current CPR/AED with a live skills check",
              "At least 21, an associate's degree, and a logged practicum of 50 sessions",
              "At least 18, any fitness certification, and a passing background check",
              "At least 18, a bachelor's degree in a health field, and current CPR certification",
            ],
            correctIndex: 0,
            explanation:
              "Eighteen, a high school diploma or equivalent, and current CPR/AED certification with a LIVE skills check. The live component is the detail most often missed.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "How does the ACE Health Coach renew, and what is the one category-specific requirement?",
            options: [
              "20 continuing-education hours every two years, at least one from Professional Conduct & Ethics",
              "36 continuing-education credits every three years, at least two from an ethics category",
              "20 continuing-education hours every two years, at least five from nutrition scope",
              "15 continuing-education hours annually, with no category requirement attached",
            ],
            correctIndex: 0,
            explanation:
              "Twenty hours every two years, with at least one hour from ACE's Professional Conduct & Ethics category. The 36-credits-every-three-years cycle belongs to the NBC-HWC.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "Around how many pillars does the American College of Lifestyle Medicine define lifestyle medicine?",
            options: [
              "Six",
              "Five",
              "Four",
              "Eight",
            ],
            correctIndex: 0,
            explanation:
              "ACLM uses six pillars. The five-pillar framing in this program comes from NASM's CWC, which is a different organization with a different map.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "Whom do ACLM and the IBLM certify?",
            options: [
              "Clinicians; for coaches, ACLM offers education rather than a license",
              "Coaches, through a pathway parallel to the NBHWC's board certification",
              "Both clinicians and coaches, under a single unified competency framework",
              "Programs rather than individuals, in the manner of NCCA accreditation",
            ],
            correctIndex: 0,
            explanation:
              "ACLM and IBLM certify clinicians. A lifestyle-medicine-educated coach has knowledge, not a license, and remains bound by coaching scope and state law exactly as before.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "What must you already hold to earn ACLM's Lifestyle Medicine Coach certificate?",
            options: [
              "An active NBC-HWC or Wellcoaches certification",
              "An active NASM CWC or ACE Health Coach certification",
              "A clinical license in any state, plus the completed coursework",
              "Nothing; the certificate is open to anyone completing the course",
            ],
            correctIndex: 0,
            explanation:
              "The LMC certificate is stacked: it requires an active NBC-HWC or Wellcoaches certification. The COURSE is open to anyone, which is what makes the distinction easy to miss.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "How long is ACLM's Lifestyle Medicine for Coaches course, and what assessment standard does the certificate require?",
            options: [
              "16.5 self-paced hours, with 12 knowledge assessments passed at 80 percent or better",
              "24 self-paced hours, with a single final examination passed at 70 percent or better",
              "16.5 synchronous hours, with a practical session assessed pass/fail",
              "40 self-paced hours, with 12 knowledge assessments passed at 70 percent or better",
            ],
            correctIndex: 0,
            explanation:
              "16.5 self-paced hours and 12 knowledge assessments at 80 percent or better. The course is self-paced, not synchronous, which distinguishes it sharply from NBHWC-approved programs.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "You complete ACLM's coaches course without holding an NBC-HWC or Wellcoaches certification. What do you receive?",
            options: [
              "A certificate of attendance rather than the Lifestyle Medicine Coach certificate",
              "The Lifestyle Medicine Coach certificate, held provisionally until a prerequisite is earned",
              "Continuing-education credit that can be applied toward the NBC-HWC prerequisite",
              "Nothing, because enrollment itself requires one of the prerequisite credentials",
            ],
            correctIndex: 0,
            explanation:
              "Same course, different award: a certificate of attendance. Nothing is held provisionally, and enrollment is genuinely open to anyone.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "The course summarizes the landscape as four different kinds of claim. Which mapping is correct?",
            options: [
              "Board certification NBHWC, accredited certification ACE, private certification NASM CWC, clinician certification plus coach education ACLM",
              "Board certification ACE, accredited certification NBHWC, private certification ACLM, clinician certification NASM CWC",
              "Accredited certification NBHWC, board certification NASM CWC, private certification ACE, coach education ACLM",
              "Board certification NBHWC, private certification ACE, accredited certification NASM CWC, clinician education ACLM",
            ],
            correctIndex: 0,
            explanation:
              "NBHWC is board certification, ACE is accredited certification, NASM's CWC is private certification, and ACLM certifies clinicians while educating coaches. Four different claims behind one phrase.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "Someone introduces themselves as a 'certified wellness coach.' What has the lesson taught you to ask?",
            options: [
              "Which of the four kinds of claim it is, since the phrase covers all of them",
              "Whether their certification is current and in good standing with the issuer",
              "How many pillars their certification covered during training",
              "Whether they carry professional liability insurance for coaching work",
            ],
            correctIndex: 0,
            explanation:
              "The phrase spans board certification, accredited certification, private certification, and clinician certification plus coach education. Identifying which one is the first question; currency and insurance matter later.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "What is a 'content outline' in the credential vocabulary, and what does it reveal?",
            options: [
              "The published blueprint of an exam's domains and weights; it tells you what the board believes the profession IS",
              "The syllabus an approved program must follow, lesson by lesson, to retain its approval",
              "The list of topics a candidate must log practice hours in before sitting the exam",
              "The set of competencies faculty must demonstrate before teaching core instructional hours",
            ],
            correctIndex: 0,
            explanation:
              "A content outline is the exam blueprint: domains plus their weights. Reading the weights is how you learn a board's actual theory of the profession, which is why the 47-to-53 percent process figure matters so much.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "What does 'synchronous instruction' mean in the NBHWC program-approval rules?",
            options: [
              "Live teaching, in person or remote, as distinct from self-paced material",
              "In-person teaching only, with remote delivery counted as asynchronous",
              "Instruction delivered on a fixed weekly schedule, whether live or recorded",
              "Teaching in which every student progresses through the same module at once",
            ],
            correctIndex: 0,
            explanation:
              "Synchronous means live, and remote live delivery counts. What it excludes is self-paced material, which is why at least 40 of the 75 hours cannot be recorded content.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "What is a 'stacked credential,' with the example from this lesson?",
            options: [
              "A certificate requiring another credential as its prerequisite, as ACLM's LMC requires NBC-HWC or Wellcoaches",
              "A credential earned by combining hours from two approved programs into one application",
              "A certification that automatically renews when a higher credential is maintained",
              "A specialization added to a base certification by the same issuing organization",
            ],
            correctIndex: 0,
            explanation:
              "Stacked means it sits on top of a prerequisite credential from another body. ACLM's Lifestyle Medicine Coach certificate is the lesson's example, requiring an active NBC-HWC or Wellcoaches certification underneath it.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "What does NCCA accreditation actually accredit?",
            options: [
              "The certification program, by the National Commission for Certifying Agencies",
              "The individual certificant, after a review of logged practice hours",
              "The training curriculum, in the way NBHWC approves programs",
              "The examination items, through an independent psychometric audit",
            ],
            correctIndex: 0,
            explanation:
              "NCCA accredits the certification PROGRAM, as third-party recognition of how the certification is run. It is distinct from NBHWC's program approval, which accredits training curricula.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "Which comparison between the NBHWC and NASM CWC pathways is accurate?",
            options: [
              "NBHWC requires a scored practical assessment; the CWC is examined by multiple choice alone",
              "Both require a scored practical assessment, but only NBHWC scores it pass/fail",
              "NBHWC is examined by multiple choice alone; the CWC adds a recorded practical",
              "Neither requires a practical assessment, though both require logged practice sessions",
            ],
            correctIndex: 0,
            explanation:
              "The PSA is the structural difference: NBHWC requires a scorable pass/fail evaluation of a real coaching session, while the CWC's assessment is 100 multiple-choice questions.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "Why does the course say the rigor behind NBHWC approval is 'worth knowing'?",
            options: [
              "Because it is what 'board certification' actually buys, and it is inspectable",
              "Because approved programs are legally required to publish their hour counts",
              "Because the same standards apply to the ACE and NASM pathways in practice",
              "Because candidates may petition to waive requirements they can document elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "The hours, the individual feedback, the PSA, and the faculty credentials are all published and checkable. Knowing them is how you evaluate what a credential's claim is worth rather than taking the phrase on trust.",
            sourceLessonSlug: "the-credential-landscape",
          },
        ],
      },
    },

    // ── Section 2 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-exclusion-lists",
      title: "4 · The exclusion lists: what coaches do not do",
      section: "Section 2 · Scope and law",
      body: `Three organizations publish exclusion lists, and they converge.

**NBHWC's list is the sharpest.** On their own, health and wellness coaches do not diagnose, interpret medical data, prescribe or de-prescribe, recommend supplements, provide nutrition consultation or create meal plans, or provide exercise prescription or instruction, and they do not provide psychological therapeutic interventions. The scope document names names on that last one: Cognitive Behavioral Therapy, Eye Movement Desensitization and Reprocessing, Solution Focused Therapy, Dialectical Behavioral Therapy, and Internal Family Systems Therapy are its named examples of what a coach does not deliver, with "other such therapies" swept in behind them (National Board for Health & Wellness Coaching, n.d.). A verification note this program owes you: an earlier read of this page recorded four named modalities; the current page names five, Solution Focused Therapy among them, and this course teaches the list as the primary states it today.

Read that list against your own credentials and notice something important: exercise prescription is INSIDE your CPT scope and OUTSIDE the coaching scope. The exclusion list is not saying you may never program training. It is saying that when you do, you are working as a trainer, not as a coach, and a person with only a coaching credential must not.

**ACE's nutrition position statement** puts outside scope: personalized nutrition recommendations or meal planning beyond evidence-based guidelines or materials developed and endorsed by a registered dietitian nutritionist or physician; nutritional assessment; recommending, prescribing, selling, or supplying supplements; and promoting oneself as a "nutritionist" or "dietitian" (American Council on Exercise, n.d.).

**NASM's guidance**, published through its nutrition-coaching materials, matches: no prescribed meal plans and no prescribed supplements; refer to a registered dietitian for individualized meal planning, nutritional assessment, specialty diets, or nutrition counseling. What remains inside scope is general guidance: portion education, label reading, government guidelines, meal-prep strategy, and coaching the behavior (National Academy of Sports Medicine, n.d.-a, n.d.-b).

The common core across all three: coaches educate generally, facilitate behavior, and refer individually. The moment the work becomes individualized prescription of food, supplements, or therapy, it belongs to a license.

:::reveal Name the five therapeutic modalities the NBHWC scope document explicitly places outside coaching. ||| Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), Solution Focused Therapy, Dialectical Behavioral Therapy (DBT), and Internal Family Systems Therapy. They are named as examples of psychological therapeutic interventions coaches do not provide, with "other such therapies" swept in behind them.

:::reveal Exercise prescription appears on the coaching exclusion list, yet you prescribe training weekly. Reconcile that. ||| The list describes the coaching role, not you. Prescription is inside your CPT scope; when you program training you are acting as a trainer. The exclusion exists because a coaching credential ALONE does not authorize it, and the two hats must stay distinct.

## Vocabulary
- **Exclusion list**: a scope document's explicit inventory of what the credential does NOT authorize; NBHWC's is the sharpest in this field.
- **Psychological therapeutic intervention**: clinical treatment of the mind; the NBHWC scope names CBT, EMDR, Solution Focused Therapy, DBT, and Internal Family Systems Therapy as examples coaches do not deliver.
- **Position statement**: an organization's published stance on a boundary question, like ACE's statement on nutrition scope; weaker than statute, stronger than opinion.
- **General versus individualized guidance**: the converged dividing line: portions, labels, and public guidelines are general and in scope; a plan built for one person's body or condition is individualized and belongs to a license.

## Sources
American Council on Exercise. (n.d.). *Position statement on nutrition scope of practice for exercise professionals and health coaches*. https://contentcdn.eacefitness.com/certifiednews/images/article/pdfs/NutritionScopeOfPractice.pdf

National Academy of Sports Medicine. (n.d.-a). *Offering nutrition advice: The dos and don'ts*. https://blog.nasm.org/nutrition/offering-nutrition-advice

National Academy of Sports Medicine. (n.d.-b). *Staying in scope with nutrition*. https://blog.nasm.org/staying-in-scope-with-nutrition

National Board for Health & Wellness Coaching. (n.d.). *Scope of practice*. https://nbhwc.org/scope-of-practice/`,
      recallContent: [
        {
          prompt: "What is the common core of the NBHWC, ACE, and NASM exclusion lists?",
          answer:
            "Educate generally, facilitate behavior, refer individually. Individualized prescription of food, supplements, exercise (absent a training credential), or therapy belongs to a license, not to coaching.",
        },
      ],
    },
    {
      slug: "nutrition-law",
      title: "5 · Nutrition law: practice acts, title protection, and the coaching lane",
      section: "Section 2 · Scope and law",
      body: `Nothing in this lesson is legal advice. It teaches the STRUCTURE of how states regulate nutrition work, with two verified state examples, so you know which questions to ask a lawyer, not so you can skip asking.

States regulate dietetics two different ways, and the difference is the whole game.

**Practice regulation** reserves the WORK: in some states only licensees may perform medical nutrition therapy. **Title regulation** reserves the NAME: anyone may share general nutrition information, but only licensees may call themselves a dietitian. Many states mix the two, and the pattern varies enough that a coaching business must check each state it operates in.

**Michigan, verified against the statute.** Public Act 39 of 2024, approved April 30, 2024, made Michigan a licensure state for dietitian nutritionists. The exemption section (MCL 333.18353) is remarkable for how much coaching it explicitly protects: general nonmedical nutrition information, guidance, encouragement, individualized nutrition recommendations for wellness or primary prevention of chronic disease, behavior-change management, coaching, assessments, and weight-management services all remain lawful for unlicensed people, on two conditions: the work must not constitute medical nutrition therapy, and the person must not use protected titles or hold themselves out as a licensed provider (Michigan Public Act 39, 2024).

**Indiana, verified against the statute.** Indiana protects titles without reserving general practice: unlicensed people may not profess to be licensed dietitians, but IC 25-14.5-7-3 states that nothing in the article prohibits any person from disseminating free information, conducting a class or seminar, or giving a speech related to nutrition (Indiana Code § 25-14.5-7-3, n.d.).

**The case that drew the constitutional line.** In 2012 the North Carolina Board of Dietetics/Nutrition told Steve Cooksey, a blogger who managed his own type 2 diabetes with a low-carbohydrate diet, that answering readers' individual questions about food, whether free or paid, was the unlicensed practice of dietetics, and it sent him a 19-page printout of his website marked up in red pen showing what he could and could not say. Cooksey censored his site and sued. The Fourth Circuit held that the board's actions had an objectively reasonable chilling effect on his speech, which gave him standing to bring the First Amendment claim, and sent the case back down. Read that carefully: the court decided he could SUE, not that he had won (Cooksey v. Futrell, 2013). The suit ended in February 2015 when the board adopted new guidelines permitting ordinary, non-individualized diet advice without a license (Institute for Justice, 2015). The two-sided moral is the reason this case is taught here: general nutrition speech, personal stories, classes, and published opinions have real constitutional protection, and individualized clinical nutrition care remains squarely regulable. The coaching lane runs between those posts.

**The contested edge, taught as contested.** Where exactly individualized wellness recommendations end and medical nutrition therapy begins is interpreted differently by state boards and advocacy organizations, and the line is jurisdiction-specific. A coach whose work drifts toward disease-focused individualized diet planning is in the gray zone even where wellness coaching is exempt. That is a get-counsel situation, not a read-a-lesson situation.

:::reveal Explain the difference between practice regulation and title regulation in one sentence each. ||| Practice regulation reserves the work itself (only licensees may perform medical nutrition therapy). Title regulation reserves the name (anyone may share general nutrition information, but only licensees may use the protected titles).

:::reveal Michigan's 2024 law added licensure. Why is it still a favorable state for wellness coaching? ||| Because its exemption section explicitly protects coaching activities by name, including individualized recommendations for wellness or primary prevention, behavior-change management, and weight-management services, provided the work is not medical nutrition therapy and no protected title is used.

:::reveal What did the Fourth Circuit actually decide in Cooksey v. Futrell, and what did it not decide? ||| It decided standing: the board's red-pen review of his website had an objectively reasonable chilling effect on his speech, so his First Amendment suit could proceed. It did not decide the merits. The case ended in 2015 when the board adopted guidelines permitting ordinary, non-individualized diet advice without a license.

## Vocabulary
- **Practice regulation**: a statute reserving the WORK itself, such as medical nutrition therapy, to licensees, regardless of what the provider calls themselves.
- **Title regulation**: a statute reserving professional NAMES, such as dietitian or licensed nutritionist, to licensees while leaving general information-sharing open.
- **Medical nutrition therapy (MNT)**: nutrition care to treat a diagnosed condition, the core activity practice acts reserve to licensed providers.
- **Statutory exemption**: a carve-out written into a licensing law that keeps named activities lawful for unlicensed people, like Michigan's list in MCL 333.18353.
- **Chilling effect**: government action that deters lawful speech by threat rather than prohibition; in Cooksey it was the injury that opened the courthouse door.
- **Standing**: a court's threshold question of whether this plaintiff has suffered an injury the court can hear, decided before any question of who is right.

## Sources
Cooksey v. Futrell, 721 F.3d 226 (4th Cir. 2013). https://www.courtlistener.com/opinion/945873/steve-cooksey-v-michelle-futrell/

Indiana Code § 25-14.5-7-3. (n.d.). *Dietitians: Unlawful practices*. Indiana General Assembly. https://www.in.gov/pla/professions/dietitians/dietitians-statutes-and-rules/

Institute for Justice. (2015, February 18). *Victory for "caveman" blogger in free speech fight*. https://ij.org/press-release/north-carolina-free-speech-release-2-18-2015/

Michigan Public Act 39. (2024). *Dietitian nutritionist licensure*. Michigan Legislature. https://legislature.mi.gov/documents/2023-2024/publicact/pdf/2024-PA-0039.pdf

Michigan Compiled Laws § 333.18353. (2024). *Exemptions*. Michigan Legislature. https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-333-18353`,
    },
    {
      slug: "therapy-law",
      title: "6 · Therapy law: the coaching exemption and the functional test",
      section: "Section 2 · Scope and law",
      body: `Again: structure, not legal advice.

States protect mental-health practice with license requirements and protected titles: psychologist, social worker, licensed professional counselor, marriage and family therapist, psychotherapist, and their kin. The question for coaching is where lawful coaching ends and unlicensed practice begins, and Colorado wrote the clearest answer in statute.

**The Colorado exemption, verified verbatim.** C.R.S. 12-245-217(2)(f) exempts "a professional coach, including a life coach, executive coach, personal coach, or business coach, who has had coach-specific training and who serves clients exclusively as a coach, as long as the professional coach does not engage in the practice of psychology, social work, marriage and family therapy, licensed professional counseling, psychotherapy, or addiction counseling, as those practices are defined in this article 245" (Colorado Revised Statutes § 12-245-217, n.d.).

Read the three conditions: coach-specific training, serving clients EXCLUSIVELY as a coach, and not engaging in the six defined practices. Title protection is not one of the exemption's conditions; it lives separately in subsection (1), which keeps protected titles off-limits regardless. One verification note this program owes you: some summaries fold the title rule into the exemption's conditions, and the statute does not read that way.

**The functional test.** Regulators evaluate what you DO, not what you call it. Marketing "anxiety coaching" while doing deep emotional processing can be evaluated as the practice of psychotherapy no matter the label, and whether a given edge case crosses the line is decided by boards and courts case by case. This is the most contested boundary in the field and this program teaches it as such: the safe interior is present-and-future-focused behavior change around goals; the danger zone is treating conditions, processing trauma, or borrowing therapy modalities by name.

**What stays inside coaching.** Exploring stress, emotions, and beliefs as they bear on current behavior and goals; teaching evidence-based stress-management skills in a coaching frame; reflective listening. Lesson 7 covers what to do the moment a conversation shows a red flag.

:::reveal Recite the three conditions of Colorado's professional-coach exemption. ||| Coach-specific training; serving clients exclusively as a coach; and not engaging in the practice of psychology, social work, marriage and family therapy, licensed professional counseling, psychotherapy, or addiction counseling as the statute defines them.

:::reveal Why does calling a service "coaching" not settle whether it is lawful? ||| Because regulators apply a functional test: they evaluate the activities performed, not the label. Deep emotional processing marketed as coaching can be evaluated as psychotherapy practice, case by case.

## Vocabulary
- **Functional test**: the regulatory principle that what you DO decides what law applies, not what you call it; the reason labels never launder out-of-scope work.
- **Protected title**: a professional name, like psychotherapist or licensed professional counselor, that statute reserves to licensees regardless of any exemption.
- **Practice act**: the state law defining a licensed profession's reserved activities and who may perform them; Colorado's article 245 is this lesson's example.
- **Coach exemption**: a statutory carve-out, like C.R.S. 12-245-217(2)(f), that keeps coaching lawful on stated conditions rather than by the absence of law.

## Sources
Colorado Revised Statutes § 12-245-217. (n.d.). *Scope of article: Exemptions*. https://colorado.public.law/statutes/crs_12-245-217`,
      recallContent: [
        {
          prompt: "Where does Colorado's title protection live relative to the coach exemption, and why does that matter?",
          answer:
            "In subsection (1), separate from the (2)(f) coach exemption. It matters because protected titles stay off-limits regardless of the exemption, and because summaries that fold the two together misread the statute.",
        },
      ],
    },
    {
      slug: "referral-duties",
      title: "7 · Referral: the duty, the red flags, and the handoff",
      section: "Section 2 · Scope and law",
      body: `Every framework in this field converges on the same duty: know your scope, and refer when the work leaves it.

**The NBHWC framing.** The program-approval handbook requires coaches to know and abide by the published scope of practice (competency 4.2), and the 2026 edition's outline numbers the referral duty directly beneath it: competency 4.2.2, refer clients as appropriate, naming imminent danger, trauma treatment, mental health treatment, and other professional healthcare as the occasions. The outline builds referral into the craft: the coach maintains professional boundaries, seeks consultation when needed, and treats scope questions as ethics questions. It is explicit on one example this program will keep returning to: counseling on substance abuse is beyond the coach's scope of practice, and appropriate professional referral is the move (National Board for Health & Wellness Coaching, 2022, 2026).

**The ethics code behind the boundary.** The NBHWC Code of Ethics turns the same duty into daily conduct. A coach openly discloses any conflict of interest to everyone involved and offers to step aside when one arises. Compensation from third parties, referral fees, or product sales is disclosed before coaching begins. A coach who also holds a clinical credential commits to the ethics code and standards of practice of EACH profession, understanding the scope parameters of each, which is the formal version of this course's two-hats rule. And the code's November 2025 update adds a distinctly modern duty: disclosing the use of artificial intelligence in the delivery of coaching services, including how it may affect client privacy (National Board for Health & Wellness Coaching, 2025).

**The ACE red-flag list.** ACE's materials direct health coaches to refer to licensed providers for serious physical illness, disordered eating, suicidal ideation, and severe psychological distress (American Council on Exercise, n.d.). NASM's instructors teach the same posture: when work hedges into diagnosis or treatment territory, whether disordered eating, depression, or anxiety, the coach supports the client in engaging their physician or therapist rather than working the condition (National Academy of Sports Medicine, n.d.).

**The handoff is a skill, not a sentence.** A referral done well keeps the relationship: name what you observed without diagnosing it, say plainly what is and is not yours to help with, offer concrete next steps (a physician visit, a therapist search, the 988 Suicide & Crisis Lifeline in the United States for imminent risk), and keep coaching the parts that remain squarely yours once the licensed care is in place. A referral done badly either abandons the client or, worse, quietly keeps the out-of-scope work.

**For self-coaching too.** The capstone will ask you to apply the same rule to yourself: persistent symptoms, mood changes that outlast their circumstances, or pain that alters function are referral triggers whether the client is a stranger or the person in the mirror.

:::reveal A client mentions escalating drinking. What does the NBHWC content outline say about this exact territory? ||| Counseling on substance abuse is beyond the coach's scope of practice. The coach's move is appropriate professional referral, while remaining supportive within the coaching lane.

:::reveal What are the four parts of a referral that keeps the relationship? ||| Name the observation without diagnosing; state plainly what is and is not yours to help with; offer concrete next steps (physician, therapist, crisis line when risk is imminent); and keep coaching what legitimately remains yours once licensed care is engaged.

:::reveal Name two disclosure duties the NBHWC Code of Ethics places on coaches beyond referral. ||| Conflicts of interest are disclosed openly to everyone involved, with third-party compensation, referral fees, and product-sale income disclosed before coaching begins; and, since the November 2025 update, any use of artificial intelligence in delivering the coaching, including its privacy implications.

## Vocabulary
- **Referral trigger**: a sign in the work, like escalating substance use or function-altering symptoms, that obligates the coach to bring in licensed care.
- **Red flag**: the observable cue behind a referral trigger, such as disclosed suicidal ideation, disordered eating patterns, or persistent distress that impairs daily life.
- **Warm handoff**: a referral done as a skill: name the observation without diagnosing, state your lane, offer concrete next steps, and keep coaching what remains yours.
- **Conflict of interest**: any competing interest that could bend the coaching relationship; the ethics code requires open disclosure and an offer to step aside.
- **988 Suicide & Crisis Lifeline**: the United States three-digit crisis line; the concrete next step a coach offers when risk is imminent.

## Sources
American Council on Exercise. (n.d.). *Certified health coach career guide*. https://contentcdn.eacefitness.com/assetportfoliodownloads/CareerGuide-HC.pdf

National Academy of Sports Medicine. (n.d.). *Introduction to the wellness coach course*. https://blog.nasm.org/introduction-to-wellness-coach-course

National Board for Health & Wellness Coaching. (2022). *Content outline*. https://www.nbme.org/wp-content/uploads/2022/05/NBHWC_Content_Outline-2ca.pdf

National Board for Health & Wellness Coaching. (2026). *Program approval handbook* (2026 ed.). https://nbhwc.org/wp-content/uploads/2026/04/NBHWC-Program-Approval-Handbook-2026-2.pdf

National Board for Health & Wellness Coaching. (2025). *Code of ethics and professional conduct*. https://nbhwc.org/wp-content/uploads/2025/11/NBHWC-Code-of-Ethics-and-Professional-Conduct-1.pdf`,
    },
    {
      slug: "quiz-scope-and-law",
      title: "8 · Knowledge check: scope and law",
      section: "Section 2 · Scope and law",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questions: [
          {
            prompt: "Per the NBHWC scope of practice, which of these belongs to the coach's role?",
            options: [
              "Interpreting a client's lab results and adjusting their goals to match each marker's reference range",
              "Facilitating self-determined goals and supporting a clinician-prescribed plan's implementation",
              "Creating an individualized meal plan for a client's wellness goal",
              "Selecting a supplement stack matched to the client's training block",
            ],
            correctIndex: 1,
            explanation:
              "The scope defines coaching as facilitating self-determined goals and supporting implementation of licensed professionals' plans. Interpreting medical data, meal plans, and supplement recommendations all appear on the exclusion list.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "Which therapeutic modalities does the NBHWC scope document name as examples of what coaches do not provide?",
            options: [
              "CBT, EMDR, Solution Focused Therapy, DBT, and Internal Family Systems Therapy",
              "Psychoanalysis, hypnotherapy, exposure therapy, ACT, and somatic experiencing",
              "Motivational interviewing, ACT, CBT, group therapy, and psychodrama",
              "EMDR, biofeedback, psychoanalysis, art therapy, and narrative therapy",
            ],
            correctIndex: 0,
            explanation:
              "The scope document names Cognitive Behavioral Therapy, Eye Movement Desensitization and Reprocessing, Solution Focused Therapy, Dialectical Behavioral Therapy, and Internal Family Systems Therapy, sweeping in 'other such therapies' behind them. Motivational interviewing is a coaching-compatible style, not a named exclusion.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "What is the difference between practice regulation and title regulation of dietetics?",
            options: [
              "Practice regulation applies federally through the FDA while title regulation is left to each state's legislature",
              "Title regulation reserves the work; practice regulation reserves the name",
              "Practice regulation reserves the work itself; title regulation reserves the professional name",
              "They are two names for the same licensure mechanism",
            ],
            correctIndex: 2,
            explanation:
              "Practice regulation reserves the work (only licensees may perform medical nutrition therapy); title regulation reserves the name (anyone may share general information, but not under protected titles). States mix the two, which is why each state needs checking.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "Michigan's 2024 dietetics law (PA 39 / MCL 333.18353) treats wellness coaching how?",
            options: [
              "It bans all individualized nutrition recommendations by anyone unlicensed, including recommendations aimed at wellness or the primary prevention of chronic disease",
              "It explicitly exempts coaching activities by name, conditioned on no medical nutrition therapy and no protected titles",
              "It requires wellness coaches to register with the state board",
              "It is silent on coaching, leaving the question to the courts",
            ],
            correctIndex: 1,
            explanation:
              "The exemption section names general nonmedical nutrition information, individualized recommendations for wellness or primary prevention, behavior-change management, coaching, and weight-management services, with the two conditions: no medical nutrition therapy and no protected titles.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "Indiana's dietitian statute (IC 25-14.5-7-3) permits unlicensed people to do what?",
            options: [
              "Use the title 'licensed dietitian' if they hold an out-of-state license",
              "Perform medical nutrition therapy for stable chronic conditions, provided a licensed dietitian reviews the plan within thirty days",
              "Bill insurers for nutrition counseling under a wellness code",
              "Disseminate free information, conduct classes or seminars, and give speeches related to nutrition",
            ],
            correctIndex: 3,
            explanation:
              "Indiana protects titles without reserving general practice: the statute states nothing in the article prohibits disseminating free information, conducting a class or seminar, or giving a speech related to nutrition.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "Colorado's professional-coach exemption (C.R.S. 12-245-217(2)(f)) requires all of the following EXCEPT:",
            options: [
              "Coach-specific training",
              "Serving clients exclusively as a coach",
              "Registration with Colorado's behavioral-health board",
              "Not engaging in the six defined licensed practices",
            ],
            correctIndex: 2,
            explanation:
              "The exemption's conditions are coach-specific training, serving exclusively as a coach, and not engaging in the defined practices. No board registration is required; that is what makes it an exemption. Title protection lives separately in subsection (1).",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "What is the 'functional test' in coaching-versus-therapy law?",
            options: [
              "Regulators evaluate the activities performed, not the label the service carries",
              "A coach must pass a functional-competency exam before practicing",
              "Clients must demonstrate functional improvement for coaching to stay legal",
              "Only services labeled psychotherapy can be regulated as psychotherapy",
            ],
            correctIndex: 0,
            explanation:
              "Boards and courts look at what was actually done. Deep emotional processing marketed as coaching can be evaluated as the practice of psychotherapy regardless of the label, case by case, which is why this boundary is taught as contested.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "Per the NBHWC content outline, a client's escalating substance use calls for what coaching response?",
            options: [
              "A structured moderation program designed by the coach",
              "A motivational-interviewing program the coach designs and runs, aimed directly at reducing the substance use itself",
              "Professional referral, because substance-abuse counseling is beyond the coach's scope",
              "A confidentiality agreement before the topic is discussed further",
            ],
            correctIndex: 2,
            explanation:
              "The outline is explicit: counseling on substance abuse is beyond the coach's scope of practice, and appropriate professional referral is the move, while the coach stays supportive within the coaching lane.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "Which statement about the NASM CWC's accreditation is accurate?",
            options: [
              "It is NCCA-accredited like the ACE Health Coach credential",
              "By NASM's own statement, it is a wellness credential and is not NCCA-accredited",
              "It is accredited by the NBHWC as an approved training program for the national board-exam pathway",
              "Accreditation is pending a 2027 NCCA review",
            ],
            correctIndex: 1,
            explanation:
              "NASM's own product page states the CWC is a wellness credential and is not NCCA-accredited. ACE's Health Coach credential is the NCCA-accredited one in this comparison, which is exactly why the landscape lesson distinguishes the four claim types.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "A coach also holds a CPT. What keeps their exercise programming legally clean?",
            options: [
              "Keeping the roles distinguishable: programming happens under the CPT credential, facilitation under the coaching role",
              "Programming only bodyweight movements while coaching",
              "Having every client sign a waiver acknowledging the coach's dual role, which moves the scope question from statute into contract law",
              "Limiting programming to plans published by government agencies",
            ],
            correctIndex: 0,
            explanation:
              "Exercise prescription sits outside coaching scope but inside CPT scope. The same person may do both, but the roles must stay visibly separate: the exclusion list describes the coaching role, not the person's other credentials.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "What may a coach share about nutrition, per the converged NBHWC, ACE, and NASM guidance?",
            options: [
              "Individualized therapeutic diets when the client signs consent",
              "General evidence-based education: portions, labels, government guidelines, and behavior coaching",
              "Supplement recommendations limited to third-party-tested products",
              "Individualized meal plans, provided the client's physician reviews and countersigns each plan after it is delivered",
            ],
            correctIndex: 1,
            explanation:
              "The converged core: educate generally (portions, labels, guidelines, meal-prep strategy), facilitate the behavior, and refer individually. Individualized prescription of food or supplements belongs to a license.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "Why does this program describe the coaching-versus-therapy boundary as contested rather than settled?",
            options: [
              "Because no state has yet written coaching into statute",
              "Because edge cases are evaluated by boards and courts case by case under the functional test",
              "Because NBHWC and ACE publish conflicting boundary definitions that regulators have declined to reconcile in written guidance",
              "Because federal law preempts the state practice acts involved",
            ],
            correctIndex: 1,
            explanation:
              "The interior is clear on both sides, but edge cases (deep emotional processing labeled as coaching, condition-targeted marketing) get decided case by case. Colorado HAS written coaching into statute, and NBHWC and ACE point the same direction, so the other options are false.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "In the NBHWC scope's language, what may coaches offer alongside facilitation?",
            options: [
              "Diagnostic impressions, provided each is clearly labeled as non-binding and revisited with the client's own physician",
              "Evidence-based resources and information from nationally recognized authorities",
              "Interpretations of the client's recent lab panel",
              "De-prescription schedules for supplements the client wants to quit",
            ],
            correctIndex: 1,
            explanation:
              "Coaches may share evidence-based resources from nationally recognized authorities while remaining facilitators rather than content experts. Diagnosis, lab interpretation, and prescribing or de-prescribing are all on the exclusion list.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "Which of these appears on the NBHWC exclusion list?",
            options: [
              "Interpreting medical data",
              "Facilitating a client's self-determined goals across several sessions",
              "Sharing evidence-based resources from nationally recognized authorities",
              "Supporting implementation of a plan written by a licensed professional",
            ],
            correctIndex: 0,
            explanation:
              "Interpreting medical data is explicitly excluded, alongside diagnosing, prescribing or de-prescribing, recommending supplements, nutrition consultation and meal plans, exercise prescription, and psychological therapeutic interventions. The other three are the coach's defined role.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "The NBHWC exclusion list names two things a coach may not do with medication. What are they?",
            options: [
              "Prescribe and de-prescribe",
              "Prescribe and store, though discussing adherence is permitted without limits",
              "Recommend and administer, though prescribing is allowed with clinician sign-off",
              "Interpret and substitute, though generic alternatives may be suggested freely",
            ],
            correctIndex: 0,
            explanation:
              "Prescribing and DE-prescribing both appear. The second half matters: telling a client to stop or reduce a medication is as far outside coaching as writing the prescription was.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "How does the NBHWC scope treat supplements?",
            options: [
              "Coaches do not recommend them",
              "Coaches may recommend them where the product carries third-party testing certification",
              "Coaches may recommend them once a physician has confirmed no interaction exists",
              "Coaches may recommend them if they hold a separate nutrition certification alongside",
            ],
            correctIndex: 0,
            explanation:
              "Recommending supplements is flatly on the exclusion list, with no product-quality, clinician-clearance, or second-credential exception written into it.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "A verification note in this lesson corrects an earlier reading of the NBHWC scope page. What changed?",
            options: [
              "An earlier read recorded four named therapy modalities; the current page names five, adding Solution Focused Therapy",
              "An earlier read recorded five named therapy modalities; the current page names four, having dropped EMDR",
              "An earlier read placed exercise prescription outside the list; the current page adds it explicitly",
              "An earlier read treated the list as exhaustive; the current page adds 'other such therapies' behind it",
            ],
            correctIndex: 0,
            explanation:
              "Four became five, with Solution Focused Therapy added. The course teaches the list as the primary states it today, and shows the correction rather than quietly updating.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "What phrase does the NBHWC scope use to sweep in therapies it does not name individually?",
            options: [
              "Other such therapies",
              "And any related clinical modality practised under licensure",
              "Together with all interventions requiring a mental-health credential",
              "Including any therapy delivered in a structured protocol format",
            ],
            correctIndex: 0,
            explanation:
              "'Other such therapies' follows the five named examples, which is what makes the list illustrative rather than exhaustive. A therapy's absence from the named five is not permission.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "Exercise prescription is inside your CPT scope and on the coaching exclusion list. What does the list actually mean?",
            options: [
              "A coaching credential alone does not authorize it, so when you program training you are working as a trainer",
              "Exercise prescription is prohibited for anyone who also markets themselves as a coach",
              "Coaching clients must be referred out for programming even when their coach holds a CPT",
              "The exclusion applies only where the coach charges separately for the programming work",
            ],
            correctIndex: 0,
            explanation:
              "The list describes what a coaching credential authorizes, not what a person may do. The two hats coexist; what matters is knowing which one you are wearing.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "ACE's nutrition position statement places which of these outside an exercise professional's scope?",
            options: [
              "Nutritional assessment",
              "Teaching a client to read a nutrition-facts label on packaged food",
              "Sharing federal dietary guidelines published for the general public",
              "Discussing meal-preparation strategy as a time-management problem",
            ],
            correctIndex: 0,
            explanation:
              "Nutritional assessment is outside scope. Label reading, government guidelines, and meal-prep strategy are the general education that remains inside it.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "Under ACE's position statement, when may personalized nutrition recommendations or meal planning be shared?",
            options: [
              "Only within evidence-based guidelines or materials developed and endorsed by a registered dietitian nutritionist or physician",
              "Only where the client has signed a waiver acknowledging the coach is not a dietitian",
              "Only when the recommendations avoid any mention of calorie or macronutrient targets",
              "Only for clients with no diagnosed condition affecting their nutritional requirements",
            ],
            correctIndex: 0,
            explanation:
              "The permission runs through materials an RDN or physician developed and endorsed. Waivers, target-avoidance, and the absence of a diagnosis do not create the authority.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "ACE's statement addresses what a professional may call themselves. What does it forbid?",
            options: [
              "Promoting oneself as a 'nutritionist' or 'dietitian'",
              "Promoting oneself as a 'nutrition coach' or 'wellness coach' without accreditation",
              "Promoting any nutrition service without listing the underlying certification's issuer",
              "Promoting nutrition services alongside training services in the same advertisement",
            ],
            correctIndex: 0,
            explanation:
              "The forbidden self-descriptions are 'nutritionist' and 'dietitian'. Coach titles are not what the statement restricts, though state title law may say more.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "Which four situations does NASM's guidance say require referral to a registered dietitian?",
            options: [
              "Individualized meal planning, nutritional assessment, specialty diets, and nutrition counseling",
              "Weight loss, weight gain, sports performance, and any pediatric client",
              "Any client with a chronic condition, a food allergy, a supplement question, or a body-composition goal",
              "Individualized meal planning, supplement selection, hydration protocols, and pre-competition fuelling",
            ],
            correctIndex: 0,
            explanation:
              "Individualized meal planning, nutritional assessment, specialty diets, and nutrition counseling. Goals and populations do not by themselves trigger the referral; the KIND of work does.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "What does NASM's guidance leave inside a coach's scope?",
            options: [
              "Portion education, label reading, government guidelines, meal-prep strategy, and coaching the behavior",
              "Portion education, macronutrient targets, government guidelines, and supplement timing",
              "Anything the client requests, provided no specific food quantities are named",
              "General education, plus individualized planning where no medical condition is present",
            ],
            correctIndex: 0,
            explanation:
              "Five things: portions, labels, published guidelines, meal-prep strategy, and the behavior itself. Macronutrient targets and supplement timing are individualized prescription.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "The lesson states a common core across all three exclusion lists. What is it?",
            options: [
              "Educate generally, facilitate behavior, refer individually",
              "Assess broadly, prescribe cautiously, document thoroughly",
              "Inform the client, obtain consent, then proceed within the written plan",
              "Defer to the client's physician on anything touching health outcomes",
            ],
            correctIndex: 0,
            explanation:
              "Three verbs and the boundary they draw: general education and behavior facilitation stay with the coach; anything individualized goes to a license.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "What is a 'position statement' in this course's vocabulary?",
            options: [
              "An organization's published stance on a boundary question: weaker than statute, stronger than opinion",
              "A statutory declaration a licensing board files when it adopts a new interpretation",
              "A certifying body's binding rule, enforceable against its certificants through discipline",
              "A consensus document jointly issued by two or more credentialing organizations",
            ],
            correctIndex: 0,
            explanation:
              "ACE's nutrition statement is the lesson's example. It carries real weight in a scope argument without having the force of law, which is exactly the middle ground the definition names.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "What distinguishes general from individualized guidance, as the exclusion lists converge on it?",
            options: [
              "Portions, labels, and public guidelines are general; a plan built for one person's body or condition is individualized",
              "Written material is general; anything delivered verbally in session is individualized",
              "Free material is general; anything the client pays for is individualized",
              "Group delivery is general; anything delivered one-to-one is individualized",
            ],
            correctIndex: 0,
            explanation:
              "The line is about the CONTENT's specificity to one person, not the medium, the price, or the group size. A one-to-one conversation about published guidelines is still general education.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "A client asks their coach which magnesium product to buy for sleep. What does the converged guidance require?",
            options: [
              "Decline the recommendation and route the question to a licensed provider, since supplement recommendation is excluded",
              "Recommend a third-party-tested product, since quality verification satisfies the scope concern",
              "Recommend a product but document that the client requested it first",
              "Recommend the form rather than the brand, since forms are general information",
            ],
            correctIndex: 0,
            explanation:
              "All three organizations exclude recommending supplements. Testing certifications, client-initiated requests, and brand-versus-form distinctions do not create authority the scope withholds.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "Why does this lesson open by saying nothing in it is legal advice?",
            options: [
              "It teaches the STRUCTURE of regulation so you know which questions to ask a lawyer, not so you can skip asking",
              "Because statutory material is copyrighted and cannot be reproduced as advice",
              "Because the author is not admitted to practice in the states the lesson cites",
              "Because state law changes too frequently for any lesson to remain accurate",
            ],
            correctIndex: 0,
            explanation:
              "The lesson's stated purpose is structural literacy: knowing the shapes regulation takes so you can ask a lawyer the right question about your own jurisdiction.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "Which describes practice regulation of dietetics?",
            options: [
              "It reserves the WORK, so in some states only licensees may perform medical nutrition therapy",
              "It reserves the NAME, so only licensees may call themselves a dietitian",
              "It reserves the setting, so nutrition work is restricted to clinical facilities",
              "It reserves the payment, so only licensees may bill insurance for nutrition services",
            ],
            correctIndex: 0,
            explanation:
              "Practice regulation reserves activities; title regulation reserves names. Settings and billing are separate regulatory questions entirely.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "Under pure title regulation, what may an unlicensed person do?",
            options: [
              "Share general nutrition information, while the protected titles remain reserved to licensees",
              "Perform medical nutrition therapy, provided they never use a protected title",
              "Nothing involving nutrition, since the title restriction implies a practice restriction",
              "Everything a licensee may do, since only marketing language is regulated",
            ],
            correctIndex: 0,
            explanation:
              "Title regulation restricts the name, not the general work. It does not license medical nutrition therapy to the unlicensed, and it does not shut them out of general nutrition information.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "Why does the lesson say a coaching business must check each state it operates in?",
            options: [
              "Many states mix practice and title regulation, and the pattern varies enough that one state's answer does not transfer",
              "Federal law requires registration in every state where a client resides",
              "Each state sets a different minimum certification level for nutrition coaching",
              "Interstate coaching is prohibited unless the coach holds a license in the client's state",
            ],
            correctIndex: 0,
            explanation:
              "The variation is the point: states mix the two models differently, so the answer is jurisdiction-by-jurisdiction rather than a single national rule.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "What did Michigan's Public Act 39 of 2024 do?",
            options: [
              "Made Michigan a licensure state for dietitian nutritionists, approved on April 30, 2024",
              "Repealed Michigan's dietitian licensure scheme in favor of pure title protection",
              "Extended Michigan's dietetics practice act to cover wellness coaching for the first time",
              "Created a registration pathway allowing coaches to perform medical nutrition therapy",
            ],
            correctIndex: 0,
            explanation:
              "PA 39 established licensure for dietitian nutritionists. Notably, its exemption section then protected a great deal of coaching work by name.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "Michigan's exemption section (MCL 333.18353) is remarkable for what?",
            options: [
              "How much coaching work it explicitly protects, including individualized wellness recommendations",
              "How narrowly it draws the exemption, protecting only unpaid general information",
              "Its silence on coaching, which leaves the boundary to board interpretation",
              "Its requirement that exempt practitioners register with the state annually",
            ],
            correctIndex: 0,
            explanation:
              "It names general nonmedical nutrition information, guidance, encouragement, individualized recommendations for wellness or primary prevention, behavior-change management, coaching, assessments, and weight-management services.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "Michigan's exemption is conditional. What are the two conditions?",
            options: [
              "The work must not constitute medical nutrition therapy, and the person must not use protected titles or hold out as licensed",
              "The work must be unpaid, and the person must carry professional liability insurance",
              "The person must hold a recognized coaching certification, and must document each session",
              "The client must have no diagnosed condition, and must sign an acknowledgment of scope",
            ],
            correctIndex: 0,
            explanation:
              "Two conditions: not medical nutrition therapy, and no protected titles or holding out as a licensed provider. Payment, certification, and documentation are not among them.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "Michigan's exemption protects individualized nutrition recommendations for which purposes?",
            options: [
              "Wellness or primary prevention of chronic disease",
              "Wellness only, with any disease-related purpose falling outside the exemption",
              "Treatment or management of diagnosed chronic disease under a physician's direction",
              "Athletic performance and body composition, but not health outcomes generally",
            ],
            correctIndex: 0,
            explanation:
              "The statute reaches wellness AND primary prevention of chronic disease. What it does not reach is medical nutrition therapy, which is the treatment side of the line.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "What does Indiana Code section 25-14.5-7-3 permit?",
            options: [
              "Disseminating free information, conducting a class or seminar, or giving a speech related to nutrition",
              "Performing nutritional assessment provided no fee is charged for the service",
              "Using the title 'nutritionist' where the person holds any nutrition certification",
              "Providing individualized dietary plans where the client is not under medical care",
            ],
            correctIndex: 0,
            explanation:
              "Three protected activities: free information, classes or seminars, and speeches. Indiana protects titles without reserving general nutrition practice.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "Which regulatory model does Indiana's dietitian statute follow?",
            options: [
              "Title protection without reserving general practice",
              "Practice regulation reserving all nutrition counseling to licensees",
              "A hybrid reserving both the title and any paid nutrition service",
              "Registration, under which unlicensed practitioners file annually with the state",
            ],
            correctIndex: 0,
            explanation:
              "Indiana bars professing to be a licensed dietitian but expressly leaves general nutrition speech alone. Michigan, by contrast, licenses practice and then exempts coaching by name.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "Who was Steve Cooksey, and what did the North Carolina board object to?",
            options: [
              "A blogger managing his own type 2 diabetes with a low-carbohydrate diet; the board said answering readers' individual food questions was unlicensed dietetics",
              "A licensed dietitian whose advertising the board found misleading under its title rules",
              "A nutrition coach the board fined for creating meal plans for paying clients",
              "A physician the board investigated for delegating dietary counseling to unlicensed staff",
            ],
            correctIndex: 0,
            explanation:
              "Cooksey blogged about managing his own type 2 diabetes on a low-carbohydrate diet. The board's position was that answering readers' individual questions, whether free or paid, was the unlicensed practice of dietetics.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "How did the North Carolina board communicate what Cooksey could and could not say?",
            options: [
              "A 19-page printout of his website marked up in red pen",
              "A formal cease-and-desist order specifying each prohibited passage by URL",
              "A published advisory opinion applying to all nutrition bloggers in the state",
              "A subpoena requiring him to appear and justify each post individually",
            ],
            correctIndex: 0,
            explanation:
              "The red-penned 19-page printout is the detail that made the case famous, and it is what gave the chilling-effect argument its force.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "What did the Fourth Circuit actually decide in Cooksey v. Futrell?",
            options: [
              "That the board's actions had an objectively reasonable chilling effect, giving Cooksey standing to bring his claim",
              "That North Carolina's dietetics practice act violated the First Amendment as applied to bloggers",
              "That individualized dietary advice is protected speech regardless of the speaker's licensure",
              "That state dietetics boards may not regulate any advice delivered over the internet",
            ],
            correctIndex: 0,
            explanation:
              "The holding was about standing, not the merits. The court decided he could SUE, and sent the case back down. Reading it as a substantive First Amendment victory overstates it.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "How did the Cooksey litigation end?",
            options: [
              "In February 2015, when the board adopted new guidelines permitting ordinary non-individualized diet advice without a license",
              "In a Fourth Circuit ruling striking down the state's dietetics practice act",
              "In a settlement paying Cooksey damages while leaving the board's rules unchanged",
              "In a Supreme Court decision establishing a national standard for nutrition speech",
            ],
            correctIndex: 0,
            explanation:
              "The board changed its guidelines in February 2015. The practice act was not struck down and no higher court set a national rule.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "What is the two-sided moral the lesson draws from Cooksey?",
            options: [
              "General nutrition speech has real constitutional protection, and individualized clinical nutrition care remains squarely regulable",
              "Blogging about health is protected, and in-person consultation is not",
              "Free advice is protected, and paid advice is regulable",
              "Personal experience is protected, and any reference to research is regulable",
            ],
            correctIndex: 0,
            explanation:
              "Both halves matter, and the coaching lane runs between them. Note what the line is NOT drawn on: medium, price, or whether research is cited.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "The lesson marks one edge as genuinely contested. Which?",
            options: [
              "Where individualized wellness recommendations end and medical nutrition therapy begins",
              "Whether title protection applies to the word 'coach' in most states",
              "Whether general nutrition information may be shared for a fee",
              "Whether a coach may reference federal dietary guidelines with a client",
            ],
            correctIndex: 0,
            explanation:
              "That boundary is interpreted differently by state boards and advocacy organizations and is jurisdiction-specific. The lesson calls it a get-counsel situation rather than a read-a-lesson one.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "A coach's work drifts toward disease-focused individualized diet planning in a state that exempts wellness coaching. What does the lesson say?",
            options: [
              "They are in the gray zone even where wellness coaching is exempt, and should get counsel",
              "They are protected, because the state's exemption covers all coaching activity by name",
              "They are protected, provided they avoid protected titles in their marketing",
              "They are clearly in violation, since disease focus always constitutes medical nutrition therapy",
            ],
            correctIndex: 0,
            explanation:
              "Neither of the confident answers is right. The exemption does not extend automatically to disease-focused individualized planning, and the lesson refuses to declare it a definite violation either.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "Why does the lesson call the NBHWC exclusion list 'the sharpest' of the three?",
            options: [
              "It enumerates excluded activities directly rather than describing scope only in the positive",
              "It carries disciplinary consequences the ACE and NASM statements lack for their certificants",
              "It is the only one of the three reviewed and reissued on a published annual schedule",
              "It is the only one written by an organization that certifies rather than trains",
            ],
            correctIndex: 0,
            explanation:
              "Sharpness here means explicitness: a named inventory of what coaches do not do, rather than a positive description leaving the boundary to inference. ACE and NASM converge on the substance with less enumeration.",
            sourceLessonSlug: "the-exclusion-lists",
          },
          {
            prompt: "A coach in a title-only state calls themselves a 'nutrition coach' and teaches a paid seminar on reading food labels. Under the structure this lesson teaches, what is the analysis?",
            options: [
              "Both are likely lawful: the title is not protected and label education is general information",
              "Both are likely unlawful: charging a fee converts general education into regulated practice",
              "The seminar is lawful but the title is not, since any nutrition-related title is reserved",
              "The title is lawful but the seminar is not, since teaching requires a practice-act exemption",
            ],
            correctIndex: 0,
            explanation:
              "Title regulation reserves the protected names, and 'nutrition coach' is not among them; label reading is general education all three organizations leave in scope. Indiana's statute expressly protects classes and seminars. Fees do not convert general education into regulated practice.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "Which protected titles does the therapy-law lesson list as reserved by states?",
            options: [
              "Psychologist, social worker, licensed professional counselor, marriage and family therapist, and psychotherapist",
              "Psychologist, psychiatrist, behavioral analyst, addiction specialist, and crisis counselor",
              "Therapist, counselor, coach, mental-health worker, and clinical supervisor",
              "Psychologist, social worker, health coach, wellness counselor, and behavioral therapist",
            ],
            correctIndex: 0,
            explanation:
              "Those five and their kin. 'Coach' is conspicuously not among them, which is precisely why the functional test exists rather than a title test.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "Which categories of coach does Colorado's exemption name explicitly?",
            options: [
              "Life coach, executive coach, personal coach, and business coach",
              "Health coach, wellness coach, life coach, and executive coach",
              "Life coach, career coach, performance coach, and recovery coach",
              "Wellness coach, nutrition coach, fitness coach, and mindset coach",
            ],
            correctIndex: 0,
            explanation:
              "The statute names life, executive, personal, and business coaching, introduced by 'including', which makes the list illustrative rather than closed.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "Recite the three conditions of Colorado's professional-coach exemption.",
            options: [
              "Coach-specific training; serving clients exclusively as a coach; and not engaging in the six defined practices",
              "Coach-specific training; carrying liability insurance; and disclosing non-licensure to every client in writing",
              "A recognized certification; supervision by a licensed clinician; and annual registration with the state",
              "Coach-specific training; avoiding all protected titles; and referring any client with a diagnosis",
            ],
            correctIndex: 0,
            explanation:
              "Training, exclusivity, and non-engagement in the six defined practices. Insurance, supervision, registration, and disclosure are not conditions of the exemption.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "Which six practices does Colorado's exemption require a coach not engage in?",
            options: [
              "Psychology, social work, marriage and family therapy, licensed professional counseling, psychotherapy, and addiction counseling",
              "Psychology, psychiatry, social work, marriage and family therapy, psychotherapy, and behavioral analysis",
              "Psychotherapy, addiction counseling, crisis intervention, trauma treatment, psychiatry, and psychology",
              "Psychology, social work, dietetics, nursing, psychotherapy, and addiction counseling",
            ],
            correctIndex: 0,
            explanation:
              "Six named practices, each 'as those practices are defined in this article 245'. The definitions in the article are what actually decide the question, not the everyday meaning of the words.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "Where does Colorado's title protection sit relative to the coach exemption, and why does it matter?",
            options: [
              "In subsection (1), separate from the (2)(f) exemption, so protected titles stay off-limits regardless",
              "Inside the (2)(f) exemption as its fourth condition, so using a title voids the exemption entirely",
              "In a separate article covering advertising, so it does not bear on practice at all",
              "In board rules rather than statute, so it varies with each rulemaking cycle",
            ],
            correctIndex: 0,
            explanation:
              "It lives in subsection (1) and applies independently. The course flags this because some summaries fold the title rule into the exemption's conditions, and the statute does not read that way.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "'Serving clients exclusively as a coach' is one of the exemption's conditions. What does it constrain?",
            options: [
              "The relationship with that client must be coaching only, not coaching mixed with a defined clinical practice",
              "The coach may hold no other professional credential of any kind",
              "The coach may not work with clients who are simultaneously in therapy elsewhere",
              "The coach must derive all professional income from coaching services",
            ],
            correctIndex: 0,
            explanation:
              "It governs what the coach DOES with the client. Holding other credentials, having clients in therapy elsewhere, and income mix are not what the condition addresses.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "What is the 'functional test'?",
            options: [
              "Regulators evaluate what you DO, not what you call it",
              "Regulators assess whether the client's function improved during the engagement",
              "Regulators examine whether the practitioner's training covered the activity performed",
              "Regulators consider whether the service was billed as coaching or as treatment",
            ],
            correctIndex: 0,
            explanation:
              "Activities decide which law applies. It is the reason labels never launder out-of-scope work, and the reason 'but I called it coaching' is not a defense.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "The lesson gives an example of the functional test biting. What is it?",
            options: [
              "Marketing 'anxiety coaching' while doing deep emotional processing can be evaluated as psychotherapy practice",
              "Marketing 'life coaching' while charging clinical rates can be evaluated as psychotherapy practice",
              "Marketing any service by a diagnosis name automatically constitutes unlicensed practice",
              "Marketing coaching to clients already in therapy constitutes interference with treatment",
            ],
            correctIndex: 0,
            explanation:
              "The activity is what converts it: deep emotional processing. Note it is 'can be evaluated as', decided by boards and courts case by case, not an automatic rule about naming.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "How does the lesson describe the coaching-versus-therapy boundary?",
            options: [
              "The most contested boundary in the field, decided by boards and courts case by case",
              "A settled boundary that varies only in how each state words the same rule",
              "A boundary settled federally, with state practice acts implementing one national standard",
              "A boundary that matters only where the coach lacks any mental-health training",
            ],
            correctIndex: 0,
            explanation:
              "Most contested in the field, resolved case by case. The program teaches it AS contested rather than offering a confidence the law does not support.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "What does the lesson call the safe interior of coaching?",
            options: [
              "Present-and-future-focused behavior change around goals",
              "Any work that avoids naming a diagnosis or a therapy modality",
              "Any conversation the client initiates and directs themselves",
              "Work confined to the five wellness pillars, excluding emotional content",
            ],
            correctIndex: 0,
            explanation:
              "Present-and-future orientation around goals. Emotional content is not excluded, and avoiding names does not by itself make work safe under a functional test.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "What three things does the lesson identify as the danger zone?",
            options: [
              "Treating conditions, processing trauma, and borrowing therapy modalities by name",
              "Discussing emotions, discussing the past, and discussing medication",
              "Working with distressed clients, charging clinical rates, and coaching remotely",
              "Marketing to clinical populations, accepting insurance, and coaching without certification",
            ],
            correctIndex: 0,
            explanation:
              "Treatment, trauma processing, and modality borrowing. Discussing emotions or the past is not itself the danger; the sustained clinical activity is.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "Which of these does the lesson place INSIDE coaching?",
            options: [
              "Exploring stress, emotions, and beliefs as they bear on current behavior and goals",
              "Working through a client's childhood experiences to resolve their present anxiety",
              "Delivering a structured cognitive-behavioral protocol adapted for a coaching format",
              "Assessing whether a client's low mood meets the threshold for clinical concern",
            ],
            correctIndex: 0,
            explanation:
              "Emotional material is in scope where it bears on current behavior and goals. Historical processing, protocol delivery, and threshold assessment are all clinical work.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "What may a coach teach about stress, per this lesson?",
            options: [
              "Evidence-based stress-management skills in a coaching frame, alongside reflective listening",
              "Any technique drawn from cognitive-behavioral therapy, provided it is not named as CBT",
              "Clinical relaxation protocols, where the client has no psychiatric diagnosis",
              "Nothing; stress content belongs entirely to licensed mental-health practice",
            ],
            correctIndex: 0,
            explanation:
              "Evidence-based skills in a coaching frame plus reflective listening. Renaming a CBT technique does not move it, and stress is not wholly off-limits either.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "What is a 'practice act'?",
            options: [
              "The state law defining a licensed profession's reserved activities and who may perform them",
              "A certifying body's published rules governing its certificants' conduct in practice",
              "The written agreement between a coach and client setting out the scope of the engagement",
              "A board's enforcement action against a practitioner who exceeded their scope",
            ],
            correctIndex: 0,
            explanation:
              "Practice acts are statutes. Colorado's article 245 is the lesson's example, and it is the article whose definitions the coach exemption points back to.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "What is a 'coach exemption,' and what does its existence tell you?",
            options: [
              "A statutory carve-out keeping coaching lawful on stated conditions, rather than by the absence of law",
              "A board policy declining to enforce practice acts against coaches in most circumstances",
              "A constitutional protection for coaching speech recognized across all jurisdictions",
              "An insurer's endorsement extending liability coverage to coaching activities",
            ],
            correctIndex: 0,
            explanation:
              "The distinction matters: coaching is lawful in Colorado because a statute says so on conditions, not because nothing addresses it. Fail the conditions and the carve-out does not apply.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "Which NBHWC competency numbers the referral duty directly beneath the scope competency?",
            options: [
              "Competency 4.2.2, refer clients as appropriate",
              "Competency 4.3.1, maintain professional boundaries in all client relationships",
              "Competency 5.1.4, recognize the limits of coaching in clinical populations",
              "Competency 3.2.2, escalate concerns to a supervising practitioner",
            ],
            correctIndex: 0,
            explanation:
              "Competency 4.2 is knowing and abiding by the scope; 4.2.2 sits directly beneath it as the referral duty. The numbering itself shows referral treated as part of scope, not as a separate topic.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "Which occasions does the NBHWC outline name for referral?",
            options: [
              "Imminent danger, trauma treatment, mental health treatment, and other professional healthcare",
              "Imminent danger, disordered eating, substance use, and any diagnosed chronic condition",
              "Any client request, any clinician request, and any symptom lasting beyond two weeks",
              "Trauma treatment, medication questions, insurance disputes, and legal matters",
            ],
            correctIndex: 0,
            explanation:
              "Four occasions, with the last deliberately broad. Substance-use counselling is addressed separately in the outline as beyond scope.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "How does the NBHWC outline build referral into the craft itself?",
            options: [
              "The coach maintains professional boundaries, seeks consultation when needed, and treats scope questions as ethics questions",
              "The coach documents each referral in a standardized format retained for seven years",
              "The coach obtains written clinician approval before continuing with a referred client",
              "The coach suspends the coaching relationship until licensed care has concluded",
            ],
            correctIndex: 0,
            explanation:
              "Boundaries, consultation, and the framing of scope questions as ethics questions. Referral is treated as ongoing professional posture, not paperwork or suspension.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "What does the outline say specifically about counseling on substance abuse?",
            options: [
              "It is beyond the coach's scope of practice, and appropriate professional referral is the move",
              "It is within scope where the coach has completed addiction-specific continuing education",
              "It is within scope for prevention, and outside it only once dependence is diagnosed",
              "It is within scope where the client is concurrently engaged with a treatment program",
            ],
            correctIndex: 0,
            explanation:
              "Flatly beyond scope, with referral as the response. Note also Colorado's exemption names addiction counseling as one of its six defined practices, so the two frameworks agree.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "What does the NBHWC Code of Ethics require regarding conflicts of interest?",
            options: [
              "Open disclosure to everyone involved, plus an offer to step aside when one arises",
              "Disclosure to the client alone, with documentation retained in the coaching file",
              "Avoidance of any engagement where a potential conflict could conceivably arise",
              "Disclosure to the certifying board within thirty days of the conflict being identified",
            ],
            correctIndex: 0,
            explanation:
              "Disclose openly to everyone involved and offer to step aside. The offer is the part most often omitted, and it is what makes the disclosure meaningful.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "When must compensation from third parties, referral fees, or product sales be disclosed?",
            options: [
              "Before coaching begins",
              "Within the first three sessions of the engagement",
              "At the point the compensation is actually received",
              "Only where the arrangement could influence a specific recommendation",
            ],
            correctIndex: 0,
            explanation:
              "Before coaching begins. Disclosing later, or only when the money arrives, defeats the purpose: the client should know before deciding to engage.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "What does the Code of Ethics require of a coach who also holds a clinical credential?",
            options: [
              "Commitment to the ethics code and standards of practice of EACH profession, understanding the scope parameters of each",
              "Commitment to whichever profession's standards are stricter on any given question",
              "Suspension of the clinical credential while acting in a coaching capacity",
              "Written notice to both certifying bodies that dual practice is being undertaken",
            ],
            correctIndex: 0,
            explanation:
              "Each profession's code and standards, with the scope parameters of each understood. This is the formal version of the course's two-hats rule.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "What duty did the November 2025 update to the NBHWC Code of Ethics add?",
            options: [
              "Disclosing the use of artificial intelligence in delivering coaching, including how it may affect client privacy",
              "Disclosing whether coaching sessions are recorded and how long recordings are retained",
              "Disclosing the coach's supervision arrangements and the identity of their supervisor",
              "Disclosing any use of client data in research, marketing, or program evaluation",
            ],
            correctIndex: 0,
            explanation:
              "AI disclosure, explicitly including its privacy implications. It is the code's most modern duty and one this program treats as directly relevant to how it was itself built.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "What four situations does ACE's material direct health coaches to refer for?",
            options: [
              "Serious physical illness, disordered eating, suicidal ideation, and severe psychological distress",
              "Serious physical illness, medication questions, disordered eating, and family conflict",
              "Suicidal ideation, substance use, chronic pain, and any psychiatric diagnosis",
              "Disordered eating, severe distress, insurance questions, and any request for a meal plan",
            ],
            correctIndex: 0,
            explanation:
              "Those four. Each is observable in a coaching conversation without diagnosing anything, which is what makes them usable as triggers.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "What posture does NASM teach when work hedges toward diagnosis or treatment?",
            options: [
              "Support the client in engaging their physician or therapist, rather than working the condition",
              "Continue coaching while monitoring the condition and documenting any change",
              "Pause the engagement until the client produces clearance from a treating clinician",
              "Refer only where the client explicitly asks for help with the condition",
            ],
            correctIndex: 0,
            explanation:
              "Support the client's engagement with licensed care and do not work the condition. Note it is support, not pausing the relationship and not waiting to be asked.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "What are the four parts of a referral that keeps the relationship?",
            options: [
              "Name the observation without diagnosing; state your lane; offer concrete next steps; keep coaching what remains yours",
              "Express concern; recommend a specific provider; schedule a follow-up; document the conversation",
              "Ask permission to raise it; describe the risk; obtain consent; transfer the file",
              "Name the diagnosis you suspect; explain the evidence; refer; suspend the engagement",
            ],
            correctIndex: 0,
            explanation:
              "Observe without diagnosing, state what is and is not yours, offer concrete next steps, and keep coaching the rest. The last part is what makes it a handoff rather than a dismissal.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "What concrete next step does the lesson name for imminent risk in the United States?",
            options: [
              "The 988 Suicide & Crisis Lifeline",
              "The nearest emergency department's psychiatric intake line",
              "The client's primary care physician's after-hours service",
              "A licensed therapist search through the client's insurance directory",
            ],
            correctIndex: 0,
            explanation:
              "988 is the concrete step for imminent risk. A therapist search and a physician visit are the next steps for non-imminent concerns.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "The lesson names two ways a referral is done badly. What are they?",
            options: [
              "It abandons the client, or it quietly keeps the out-of-scope work",
              "It happens too early, or it names a diagnosis the coach cannot make",
              "It is delivered in writing, or it omits a specific provider recommendation",
              "It transfers the whole relationship, or it fails to document the client's response",
            ],
            correctIndex: 0,
            explanation:
              "Abandonment and quiet retention are the two failure modes, and the lesson calls retention the worse of them. Both are failures of the same skill.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "What is a 'warm handoff' as this course defines it?",
            options: [
              "A referral done as a skill: observe without diagnosing, state your lane, offer next steps, keep coaching what remains",
              "A referral in which the coach speaks directly to the receiving clinician before the client does",
              "A referral accompanied by the coach's written notes on the client's history",
              "A referral in which the coach remains present during the client's first clinical appointment",
            ],
            correctIndex: 0,
            explanation:
              "It names the four-part skill, not a logistical arrangement. What makes it warm is that the relationship survives it.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "What is the difference between a referral trigger and a red flag?",
            options: [
              "The trigger is the sign obligating referral; the red flag is the observable cue behind it",
              "The trigger is client-reported; the red flag is observed by the coach directly",
              "The trigger is clinical; the red flag is behavioral and lower in severity",
              "The trigger requires immediate action; the red flag is logged and reviewed later",
            ],
            correctIndex: 0,
            explanation:
              "Red flags are what you notice, such as disclosed suicidal ideation or function-impairing distress; triggers are what those observations obligate you to do.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "How does the referral duty apply to self-coaching, per this lesson?",
            options: [
              "Identically: persistent symptoms, mood changes outlasting their circumstances, or pain that alters function are triggers whether the client is a stranger or the mirror",
              "Loosely, since a coach applying the framework to themselves has full context a stranger lacks",
              "Not at all, since referral duties govern professional relationships rather than personal health",
              "Only for the crisis triggers, since the others assume an observer's perspective",
            ],
            correctIndex: 0,
            explanation:
              "The rule is identical, and the lesson names the triggers explicitly. Having full context is exactly what makes self-referral harder, not looser.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "A client mentions their drinking has increased and they have tried twice to cut back. What is the correct response?",
            options: [
              "Refer, since substance-use counselling is beyond scope, while remaining supportive within the coaching lane",
              "Coach the reduction as a behavior-change goal, since the client raised it themselves",
              "Apply the WELL-01 habit tools, since the client is describing a habit rather than dependence",
              "Wait for a further disclosure before acting, since two attempts is not a clinical threshold",
            ],
            correctIndex: 0,
            explanation:
              "The NBHWC outline names this territory directly: counselling on substance abuse is beyond scope. The coach refers and stays supportive within the lane, rather than reframing it as an ordinary habit goal.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "A coach sells a supplement line and is coaching a client on nutrition behavior. What does the ethics code require?",
            options: [
              "Disclosure of the product-sale income before coaching begins, plus an offer to step aside",
              "Disclosure only if the coach recommends a product from that line during the engagement",
              "Cessation of all product sales for the duration of the coaching relationship",
              "Disclosure to the certifying body, which reviews whether the arrangement is permissible",
            ],
            correctIndex: 0,
            explanation:
              "Product-sale income is named among the disclosures owed before coaching begins, and the conflict-of-interest duty adds the offer to step aside. Recommending a product is not the trigger; the interest itself is.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "Why does the course treat scope questions as ethics questions rather than legal ones alone?",
            options: [
              "Because the NBHWC outline frames them that way, building consultation and boundaries into the craft",
              "Because legal answers vary by state while ethical answers are uniform nationally",
              "Because ethics complaints are more common than legal actions against coaches",
              "Because a coach without a license has no legal exposure, only professional exposure",
            ],
            correctIndex: 0,
            explanation:
              "The outline's own framing puts boundaries, consultation, and referral inside the ethics domain. The claim that an unlicensed coach has no legal exposure is simply false, as the Colorado and Michigan lessons show.",
            sourceLessonSlug: "referral-duties",
          },
        ],
      },
    },

    // ── Section 3 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "how-the-program-fits",
      title: "9 · The nine courses, and how they build on what you hold",
      section: "Section 3 · Working the program",
      body: `The program is a single linear path. Each course assumes everything before it.

**WELL-00, this course**, is the frame: role, scope, law, referral, and the study system.

**WELL-01, Coaching Psychology**, is the largest course and the reason the program exists: behavior-change science and the coaching craft, the material none of your certifications carry. Everything after it applies its tools.

**WELL-02 and WELL-03, Coaching Movement and Coaching Nutrition**, are deliberately thin bridges. You hold a CPT, CES, and CNC; these courses do not re-teach a gram of that content. They teach the coaching conversation around each pillar, the adherence evidence, and the scope lines from this course applied in the field.

**WELL-04, Recovery and Stress**, and **WELL-05, Sleep**, cover the pillars your certifications skip, with the evidence graded honestly, including where popular recovery claims outrun their data.

**WELL-06, Mental and Emotional Well-being**, walks the closest to the therapy boundary, which is why it comes after the scope training and repeats it.

**WELL-07, Movement, Intensity, and Learning New Things**, returns to movement with the three questions WELL-02 treated as one: how much, how hard, and how new. It is late in the sequence because its novelty evidence is graded separately for cognition, falls, and lifespan, and that grading needs the evidence literacy the earlier courses build.

**WELL-99, the Centenarian Capstone**, is yours: the longevity evidence base, the claims and their critiques, and a final project in which you build and coach your own centenarian protocol using every tool in the program.

Where this program touches courses you already have here, it bridges instead of duplicating: goal-setting drills link to the WOOP course, and wearable-metric coaching links to the body-data course, so one skill lives in one place.

:::reveal Why are the movement and nutrition courses the SHORTEST in a wellness-coaching program? ||| Because this program assumes your CPT, CES, and CNC. Those courses teach only what your certifications do not: the coaching conversation, the adherence evidence, and the applied scope lines. Re-teaching the content would pad the program without adding capability.

:::reveal Why does the mental well-being course come late in the sequence? ||| It works closest to the therapy boundary, so it deliberately follows the scope and referral training, and it re-applies that training throughout.

## Vocabulary
- **Thin bridge**: a course deliberately kept short because it teaches only the coaching layer over content another credential already covers, as WELL-02 and WELL-03 do over your CPT, CES, and CNC.
- **Capstone**: the program's final course, WELL-99, distinguished by a project: build and coach your own centenarian protocol with every tool the program taught.
- **Linear path**: a course sequence where each course assumes everything before it, which is why the scope training precedes the course that walks closest to the therapy line.`,
      recallContent: [
        {
          prompt: "What makes WELL-99 different from every other course in the program?",
          answer:
            "It is a capstone with a project: build and coach your own centenarian protocol using the whole program's tools, with the longevity evidence base, its claims and critiques, as the material.",
        },
      ],
    },
    {
      slug: "the-honest-assessment-model",
      title: "10 · The assessment model, stated honestly",
      section: "Section 3 · Working the program",
      body: `Certification programs love to advertise their exams. Here is ours, with its seams showing.

**What the platform does.** Every quiz here serves at most 10 questions per attempt, drawn from a larger pool, with answer options shuffled on every attempt. Retakes draw a fresh subset. So there is no single 100-question sitting in this program, and it would be dishonest to imitate one badly.

**What this program does instead.** Section knowledge checks draw 5 questions from a pool sized to what the section actually teaches, roughly 40 to 100. That ratio is the point: drawing 5 from 60 means a retake is a genuinely different quiz, and no amount of retaking converts the pool into a memorized list. Each course ends in a final drawing 10 from a pool of 30 to 60. The passing score is 80, deliberately higher than the 70 NASM's CWC exam uses, because this program's finals are retakeable, unproctored, and open-book by nature; an honest self-administered exam compensates with a higher bar (National Academy of Sports Medicine, n.d.).

**The mock-exam week.** When all nine courses are complete, the capstone prescribes one sitting in which you retake every course final back to back: nine finals, 10 fresh-drawn questions each, 90 questions across the program in one session. That is this program's equivalent of a certification exam day, and it is honest about being an equivalent rather than the thing itself.

**Why every question carries a review link.** Each quiz question names the lesson that teaches its answer. A missed question is an instruction: reread that lesson, not the whole course. Scores here measure your learning, not your standing with any board, and the program never pretends otherwise.

:::reveal Why is the passing score 80 when NASM's own exam passes at 70? ||| Because this program's finals are retakeable, unproctored, and effectively open-book. A self-administered exam compensates for softer conditions with a higher bar, and says so.

:::reveal What is the mock-exam week, mechanically? ||| One sitting after all nine courses: retake every course final back to back, 10 freshly drawn questions each, 90 questions total. It is this program's honest equivalent of an exam day, not a claim to be one.

## Vocabulary
- **Question pool**: the full set of questions a quiz owns, from which each attempt draws a subset; this program's section checks pool 40 to 100 and its finals 30 to 60.
- **Fresh draw**: a retake's new subset from the pool, which is what makes a second attempt measure retention instead of recognition.
- **Passing-score calibration**: setting the bar to the exam's conditions; 80 here, above NASM's 70, because retakeable open-book finals owe a higher standard.
- **Mock-exam week**: the capstone's prescribed single sitting of all nine course finals back to back, this program's honest equivalent of a certification exam day.

## Sources
National Academy of Sports Medicine. (n.d.). *Certified wellness coach*. https://www.nasm.org/products/certified-wellness-coach`,
    },
    {
      slug: "how-to-study",
      title: "11 · How to study this program",
      section: "Section 3 · Working the program",
      body: `The platform gives you four instruments. Use all four and the program roughly doubles in value.

**Check-yourself cards.** The collapsed questions inside lessons are retrieval practice: answer before revealing, then grade yourself honestly. The grades feed your recall accuracy on the dashboard, which is the earliest signal that a section did not stick.

**Quick recall.** Some lessons open by quizzing the previous lesson. Do not skip these; spaced retrieval is the cheapest learning multiplier in the building.

**Notes and highlights.** Select any passage to pin a note to it. Two suggestions for this program specifically: annotate every scope boundary with the situation from YOUR practice it most resembles, and keep a running note of claims you want to check against the primary sources, which are cited at the bottom of every lesson.

**The finals as instruments.** Take each course final immediately on finishing the course, then again a week later. The second attempt draws different questions from the pool, so it measures retention rather than memory of the first attempt.

And one program-specific practice: you are the first client. Each course ends with something to apply to your own week. Treat those applications as seriously as the reading; the capstone assumes you did.

:::reveal Why take a course final twice, a week apart? ||| The second attempt draws a fresh question subset from the pool, so it measures retention rather than recognition of the first attempt's questions. The gap between the two scores is the honest signal.

:::reveal What two things should your notes track in this program? ||| Every scope boundary annotated with the real situation from your own practice it resembles, and a running list of claims to verify against the primary sources cited in each lesson.

## Vocabulary
- **Retrieval practice**: answering from memory before checking, the mechanism behind the check-yourself cards; the struggle to recall is the learning event.
- **Spaced retrieval**: recalling material again after a delay, as the quick-recall openers do with the prior lesson; the cheapest learning multiplier in the building.
- **Recall accuracy**: your dashboard's running measure of self-graded card answers, the earliest signal that a section did not stick.
- **Retention versus recognition**: remembering the material versus remembering the question; a week-later retake with a fresh draw measures the first, not the second.`,
      recallContent: [
        {
          prompt: "Name the four study instruments this platform gives you and one use for each.",
          answer:
            "Check-yourself cards (retrieval practice with honest self-grading), quick recall (spaced retrieval of the prior lesson), notes and highlights (pin scope boundaries to your own cases), and pooled finals (take twice, a week apart, to measure retention).",
        },
      ],
    },
    {
      slug: "quiz-working-the-program",
      title: "12 · Knowledge check: working the program",
      section: "Section 3 · Working the program",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How is the WELL program sequenced?",
            options: [
              "A single linear path in which each course assumes everything before it",
              "Two parallel tracks, one coaching and one physiological, joined at the capstone",
              "A core of three required courses with the remainder taken in any order",
              "A spiral in which each pillar is revisited at increasing depth three times",
            ],
            correctIndex: 0,
            explanation:
              "One linear path, each course assuming its predecessors. That is why the scope training sits in WELL-00 and the course walking closest to the therapy line sits at WELL-06.",
            sourceLessonSlug: "how-the-program-fits",
          },
          {
            prompt: "What does WELL-00 cover?",
            options: [
              "The frame: role, scope, law, referral, and the study system",
              "The five wellness pillars in summary, ahead of their full treatment",
              "Behavior-change science, as the foundation every later course applies",
              "The longevity evidence base, previewed before the pillars are taught",
            ],
            correctIndex: 0,
            explanation:
              "WELL-00 is the frame. Behavior-change science is WELL-01's job and the longevity evidence belongs to the capstone.",
            sourceLessonSlug: "how-the-program-fits",
          },
          {
            prompt: "Why is WELL-01 described as the reason the program exists?",
            options: [
              "It carries the behavior-change science and coaching craft none of the learner's certifications hold",
              "It is the only course whose content maps directly onto the NBHWC board exam's coaching-process domain",
              "It is the prerequisite the other courses formally require before enrollment",
              "It contains the scope and referral training the whole program depends on",
            ],
            correctIndex: 0,
            explanation:
              "CPT, CNC, and CES carry exercise science and nutrition; none carries the coaching craft. That gap is what WELL-01 fills, and everything after it applies its tools. The scope training is WELL-00's.",
            sourceLessonSlug: "how-the-program-fits",
          },
          {
            prompt: "Why are WELL-02 and WELL-03 the shortest courses in a wellness-coaching program?",
            options: [
              "They teach only the coaching layer, since the learner's CPT, CES, and CNC already carry the content",
              "Movement and nutrition carry the thinnest evidence base of the five pillars, so there is less to say",
              "They are optional bridges most learners skip if their certifications are current",
              "Their material is examined at the lowest weight in the NBHWC content outline",
            ],
            correctIndex: 0,
            explanation:
              "They are deliberate thin bridges: the coaching conversation, the adherence evidence, and the applied scope lines, with not a gram of the content re-taught. Re-teaching would pad the program without adding capability.",
            sourceLessonSlug: "how-the-program-fits",
          },
          {
            prompt: "What is a 'thin bridge' in this program's vocabulary?",
            options: [
              "A course kept short because it teaches only the coaching layer over content another credential covers",
              "A lesson that summarizes a longer course elsewhere in this catalog, so a learner can review it without enrolling",
              "A short course inserted between two dense ones to reduce cognitive load",
              "A pillar taught at introductory depth because its evidence remains contested",
            ],
            correctIndex: 0,
            explanation:
              "Thin bridge names a deliberate design: the course adds the coaching layer and points back to the existing credential for everything underneath it.",
            sourceLessonSlug: "how-the-program-fits",
          },
          {
            prompt: "What do WELL-04 and WELL-05 cover, and what is notable about how?",
            options: [
              "Recovery/stress and sleep: pillars the learner's certifications skip, with evidence graded honestly including where popular recovery claims outrun their data",
              "Recovery/stress and sleep: pillars taught as settled science, since both rest on unusually strong randomized evidence that the popular literature reports accurately",
              "Nutrition and movement in greater depth, correcting oversimplifications in the CPT and CNC material",
              "Mental health and social connection, positioned before the therapy-boundary training",
            ],
            correctIndex: 0,
            explanation:
              "Recovery and sleep are genuine gaps in a CPT/CNC/CES education, and both are pillars where popular claims outrun the data, so the courses grade the evidence rather than selling it.",
            sourceLessonSlug: "how-the-program-fits",
          },
          {
            prompt: "Why does WELL-06 come late in the sequence?",
            options: [
              "It walks closest to the therapy boundary, so it follows the scope training and re-applies it",
              "Its material is the most difficult, so it benefits from the study habits built earlier",
              "It depends on the recovery and sleep physiology taught immediately before it",
              "Its crisis protocols require the referral practice logged in earlier courses",
            ],
            correctIndex: 0,
            explanation:
              "Sequencing here is about scope safety: the course that works nearest the therapy line comes after the scope and referral training, and repeats it throughout.",
            sourceLessonSlug: "how-the-program-fits",
          },
          {
            prompt: "What three questions does WELL-07 separate that WELL-02 treated as one?",
            options: [
              "How much movement, how hard, and how new",
              "How much movement, how often, and how measured",
              "How hard, how long, and how well recovered",
              "How much, how enjoyable, and how sustainable",
            ],
            correctIndex: 0,
            explanation:
              "Dose, intensity, and novelty. WELL-02 handles movement behavior as a single coaching question; WELL-07 splits it because the evidence for each differs.",
            sourceLessonSlug: "how-the-program-fits",
          },
          {
            prompt: "Why does WELL-07 sit late in the sequence rather than beside WELL-02?",
            options: [
              "Its novelty evidence is graded separately for cognition, falls, and lifespan, which needs the evidence literacy earlier courses build",
              "Its content depends directly on the sleep architecture and recovery physiology taught across WELL-04 and WELL-05, which must come first",
              "It was added to the program after the other courses were already written and sequenced",
              "Its wearable material assumes the tracker-validity training delivered in WELL-05",
            ],
            correctIndex: 0,
            explanation:
              "The stated reason is the separate grading of novelty evidence across three outcomes, which requires evidence literacy the earlier courses build. Chronology of authoring is not a curriculum rationale.",
            sourceLessonSlug: "how-the-program-fits",
          },
          {
            prompt: "What distinguishes WELL-99 from every other course in the program?",
            options: [
              "It is a capstone with a project: build and coach your own centenarian protocol using every tool taught",
              "It is the only course whose final examination is proctored, non-retakeable, and scored against a higher passing threshold",
              "It is the only course that grants a credential on completion",
              "It is the only course drawing on primary sources rather than secondary summaries",
            ],
            correctIndex: 0,
            explanation:
              "The capstone's defining feature is the project. Every course in the program draws on primary sources, no course grants a credential, and no final is proctored.",
            sourceLessonSlug: "how-the-program-fits",
          },
          {
            prompt: "How does WELL handle skills already taught by other courses in this catalog?",
            options: [
              "It bridges rather than duplicates, so one skill lives in one place",
              "It re-teaches them in a wellness-specific framing for continuity",
              "It requires those courses as formal prerequisites before enrollment",
              "It omits them entirely and leaves the learner to discover the overlap",
            ],
            correctIndex: 0,
            explanation:
              "Goal-setting drills link to the WOOP course and wearable-metric coaching links to the body-data course. One skill, one home, with links rather than copies.",
            sourceLessonSlug: "how-the-program-fits",
          },
          {
            prompt: "Which existing course does WELL link to for goal-setting drills?",
            options: [
              "The WOOP course",
              "The body-data course",
              "The read-your-body's-data course",
              "The dental-health course",
            ],
            correctIndex: 0,
            explanation:
              "Goal-setting bridges to WOOP; wearable-metric coaching bridges to the body-data course. Each skill keeps a single home.",
            sourceLessonSlug: "how-the-program-fits",
          },
          {
            prompt: "What does 'linear path' mean as this program uses it?",
            options: [
              "Each course assumes everything before it, which is why scope training precedes the therapy-adjacent course",
              "Lessons within a course must be completed in the authored order before that course's final examination unlocks",
              "The program has no optional content, so every learner completes identical material",
              "Progress is measured cumulatively rather than per course",
            ],
            correctIndex: 0,
            explanation:
              "Linear path describes dependency between COURSES. Its practical consequence is the sequencing decision: scope first, therapy-adjacent material later.",
            sourceLessonSlug: "how-the-program-fits",
          },
          {
            prompt: "How many questions does the platform serve per quiz attempt at most, and how are they chosen?",
            options: [
              "At most 10, drawn from a larger pool, with options shuffled on every attempt",
              "Exactly 10, presented in authored order, with options fixed for scoring consistency",
              "At most 20, drawn from the full pool, with options shuffled only on retakes",
              "All questions in the pool, with the score computed from the best 10",
            ],
            correctIndex: 0,
            explanation:
              "Ten is the ceiling, the subset is drawn from a larger pool, and options shuffle on every attempt. Retakes draw a fresh subset.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
          {
            prompt: "Why does the program say it would be dishonest to imitate a single 100-question sitting?",
            options: [
              "Because the platform serves at most 10 questions per attempt, so no such sitting exists here",
              "Because a 100-question sitting requires the proctoring and identity verification this platform does not provide",
              "Because certification exams are copyrighted and cannot be imitated in format",
              "Because pooled questions cannot be scored reliably at that volume",
            ],
            correctIndex: 0,
            explanation:
              "The constraint is mechanical: the platform's serving cap is 10. Rather than fake a format it cannot deliver, the program states what it actually does.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
          {
            prompt: "How are section knowledge checks sized and served in this program?",
            options: [
              "Five questions drawn from a pool of roughly 40 to 100, sized to what the section teaches",
              "Ten questions drawn from a fixed pool of roughly a dozen, identical in every section regardless of length",
              "Five questions drawn from a pool of exactly 100 in every section",
              "Eight questions drawn from a pool of 30 to 60, matching the finals",
            ],
            correctIndex: 0,
            explanation:
              "The pool scales with what the section actually teaches, roughly 40 to 100, and each attempt serves 5. Drawing 5 from 60 is what makes a retake a genuinely different quiz.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
          {
            prompt: "What is the stated point of the ratio between pool size and questions served?",
            options: [
              "No amount of retaking converts the pool into a memorized list",
              "It keeps average scores stable across attempts for fair comparison",
              "It reduces the authoring burden while preserving apparent variety",
              "It matches the sampling ratio used by accredited certification exams",
            ],
            correctIndex: 0,
            explanation:
              "The ratio is what defeats memorization. Drawing 5 from 60 means a retake is a different quiz, not the same quiz in a different order.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
          {
            prompt: "How is each course final structured?",
            options: [
              "Ten questions drawn from a pool of 30 to 60",
              "Ten questions drawn from a pool of 40 to 100",
              "Twenty questions drawn from a pool of 60 to 120",
              "Ten questions covering one lesson from each section",
            ],
            correctIndex: 0,
            explanation:
              "Finals draw 10 from a pool of 30 to 60. The 40-to-100 range belongs to section knowledge checks, which serve 5.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
          {
            prompt: "What is the passing score in this program, and why is it set there?",
            options: [
              "80, above NASM's 70, because these finals are retakeable, unproctored, and open-book by nature",
              "80, matching the NBHWC board examination's published cut score, so results stay comparable between the two",
              "70, matching NASM's CWC, so scores remain comparable across programs",
              "80, because pooled questions are statistically easier than fixed-form ones",
            ],
            correctIndex: 0,
            explanation:
              "The bar is calibrated to the CONDITIONS. Softer conditions than a proctored exam are compensated with a higher standard, and the program says so rather than hiding it.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
          {
            prompt: "What is 'passing-score calibration' as this course defines it?",
            options: [
              "Setting the bar to the exam's conditions, so open-book retakeable finals owe a higher standard",
              "Adjusting the cut score after each cohort so pass rates stay within a target band",
              "Matching the passing score to the certifying body a program benchmarks against",
              "Weighting each question by difficulty before computing the percentage",
            ],
            correctIndex: 0,
            explanation:
              "Calibration here means matching the bar to the conditions, not to cohorts, competitors, or item difficulty. Eighty compensates for retakeable, unproctored, open-book delivery.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
          {
            prompt: "Describe the mock-exam week mechanically.",
            options: [
              "One sitting after all nine courses: every course final back to back, 10 fresh-drawn questions each, 90 total",
              "One sitting after all nine courses: every course final back to back, 20 questions each, 180 total",
              "One week in which a single course final is retaken daily until each is passed at 80",
              "One sitting of a separate 90-question comprehensive exam drawn from all nine pools",
            ],
            correctIndex: 0,
            explanation:
              "Nine finals, ten freshly drawn questions each, ninety questions in one session. It reuses the existing finals rather than adding a separate exam.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
          {
            prompt: "What does the program claim the mock-exam week is?",
            options: [
              "An honest equivalent of a certification exam day, explicitly not the thing itself",
              "A practice sitting that predicts NBHWC board-exam performance",
              "The final requirement before the program's specialization credential is issued",
              "A diagnostic that identifies which credential the learner should pursue next",
            ],
            correctIndex: 0,
            explanation:
              "It is framed as an equivalent and honest about being one. No credential follows it, and it makes no predictive claim about any board's exam.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
          {
            prompt: "Why does every quiz question name the lesson that teaches its answer?",
            options: [
              "So a missed question is an instruction to reread that lesson rather than the whole course",
              "So the platform can compute which lessons are hardest across the whole learner population and flag them for rewriting",
              "So learners can dispute a question by checking the source material directly",
              "So the question can be retired if its lesson is later revised",
            ],
            correctIndex: 0,
            explanation:
              "The review link turns a wrong answer into a specific next action. That is the stated purpose: targeted rereading, not course-wide repetition.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
          {
            prompt: "What do scores in this program measure?",
            options: [
              "Your learning, and explicitly not your standing with any board",
              "Your readiness to sit the NBHWC board examination, calibrated against its published cut score",
              "Your standing relative to other learners in the same cohort",
              "Your eligibility for the program's specialization credential",
            ],
            correctIndex: 0,
            explanation:
              "Scores measure learning. The program is independent and grants no credential, so a score cannot represent standing with a board, and there is no cohort comparison.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
          {
            prompt: "What is a 'fresh draw,' and what does it make possible?",
            options: [
              "A retake's new subset from the pool, so a second attempt measures retention, not recognition",
              "The first attempt at a quiz, before any question has been seen",
              "A pool refreshed with newly authored questions after a lesson is revised",
              "A draw weighted toward questions the learner previously missed",
            ],
            correctIndex: 0,
            explanation:
              "Fresh draw is what a retake gets: different questions from the same pool. Without it a second attempt would measure memory of the first attempt's items.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
          {
            prompt: "How many study instruments does the platform give you, and what happens if you use them all?",
            options: [
              "Four, and the program roughly doubles in value",
              "Three, and retention improves by roughly a third",
              "Four, and the finals become optional",
              "Five, and the capstone can be attempted early",
            ],
            correctIndex: 0,
            explanation:
              "Four instruments: check-yourself cards, quick recall, notes and highlights, and the finals used as instruments. The lesson's claim is that using all four roughly doubles the program's value.",
            sourceLessonSlug: "how-to-study",
          },
          {
            prompt: "What are the collapsed check-yourself cards inside lessons, mechanically?",
            options: [
              "Retrieval practice: answer before revealing, then grade yourself honestly",
              "Summaries provided so a learner can skip the surrounding prose",
              "Graded questions that contribute to the course's final score",
              "Optional extensions covering material outside the lesson's scope",
            ],
            correctIndex: 0,
            explanation:
              "They are retrieval practice, and the instruction is to answer BEFORE revealing. Revealing first converts a learning event into reading.",
            sourceLessonSlug: "how-to-study",
          },
          {
            prompt: "What do the self-graded card answers feed, and what does it signal?",
            options: [
              "Recall accuracy on the dashboard, the earliest signal that a section did not stick",
              "The course's final score, weighted at a fraction of the quiz total",
              "The platform's recommendation engine, which suggests the next course",
              "The instructor's review queue, which flags lessons for rewriting",
            ],
            correctIndex: 0,
            explanation:
              "Grades feed recall accuracy on the dashboard. Its value is timing: it surfaces a gap before a quiz does.",
            sourceLessonSlug: "how-to-study",
          },
          {
            prompt: "What is 'quick recall,' and why does the lesson insist you not skip it?",
            options: [
              "Lessons that open by quizzing the previous lesson; spaced retrieval is the cheapest learning multiplier available",
              "A rapid summary at each lesson's start; it reduces the time needed to read the lesson",
              "A timed drill before each final; it simulates exam-day time pressure",
              "A dashboard widget listing recent lessons; it helps you resume where you stopped",
            ],
            correctIndex: 0,
            explanation:
              "Quick recall is spaced retrieval of the PRIOR lesson, and the lesson calls it the cheapest learning multiplier in the building. Skipping it discards the largest free gain on offer.",
            sourceLessonSlug: "how-to-study",
          },
          {
            prompt: "What is 'spaced retrieval'?",
            options: [
              "Recalling material again after a delay, as the quick-recall openers do with the prior lesson",
              "Spreading study sessions evenly across the week regardless of content",
              "Reviewing material immediately after reading it, while it is still fresh",
              "Alternating between two subjects so neither becomes monotonous",
            ],
            correctIndex: 0,
            explanation:
              "Two elements: recall from memory, and a delay before doing it. Immediate review lacks the delay; even scheduling and subject alternation are not retrieval at all.",
            sourceLessonSlug: "how-to-study",
          },
          {
            prompt: "The lesson gives two program-specific suggestions for notes. What are they?",
            options: [
              "Annotate every scope boundary with a situation from your own practice, and keep a running list of claims to check against the primaries",
              "Summarize each lesson in one sentence, and record the time spent on each section",
              "Copy every vocabulary term into a single file, and tag each by pillar",
              "Note every effect size encountered, and rank the pillars by evidence strength",
            ],
            correctIndex: 0,
            explanation:
              "Both suggestions convert reading into your own material: boundaries anchored to real situations you have faced, and a verification queue against the sources cited at the bottom of every lesson.",
            sourceLessonSlug: "how-to-study",
          },
          {
            prompt: "How does the lesson tell you to use each course final as an instrument?",
            options: [
              "Take it immediately on finishing the course, then again a week later",
              "Take it once, and only retake it if the score falls below 80",
              "Take it before starting the course as a diagnostic, then again at the end",
              "Take it three times in one sitting and average the scores",
            ],
            correctIndex: 0,
            explanation:
              "Immediately, then again a week later. The second attempt draws different questions, so the gap between the two scores is the honest retention signal.",
            sourceLessonSlug: "how-to-study",
          },
          {
            prompt: "Why does the week-later retake measure something the first attempt cannot?",
            options: [
              "It draws different questions from the pool, so it tests retention rather than memory of the first attempt",
              "It is taken without access to notes, so it removes the open-book advantage",
              "It is scored against a higher passing threshold than the first attempt",
              "It includes questions from later courses, so it tests transfer",
            ],
            correctIndex: 0,
            explanation:
              "The fresh draw is the whole mechanism. Same questions a week later would measure how well you remembered the questions, which is not the same as knowing the material.",
            sourceLessonSlug: "how-to-study",
          },
          {
            prompt: "What is the difference between retention and recognition as this lesson uses the terms?",
            options: [
              "Remembering the material versus remembering the question",
              "Remembering a fact versus being able to apply it in a session",
              "Long-term memory versus working memory",
              "Recalling a definition versus recalling its source citation",
            ],
            correctIndex: 0,
            explanation:
              "Recognition is remembering the item; retention is knowing the material. A fresh-draw retake separates them, which is why the pools exist.",
            sourceLessonSlug: "how-to-study",
          },
          {
            prompt: "What is the one program-specific practice the study lesson adds beyond the four instruments?",
            options: [
              "You are the first client: apply each course's ending to your own week, because the capstone assumes you did",
              "Keep a coaching log of practice sessions, because the capstone requires fifty",
              "Read each course's primary sources in full before starting its lessons",
              "Discuss each pillar with a licensed clinician before applying it to yourself",
            ],
            correctIndex: 0,
            explanation:
              "The centenarian frame again: each course ends with something to apply to your own week, and the capstone builds on the assumption that you did the applying.",
            sourceLessonSlug: "how-to-study",
          },
          {
            prompt: "What is 'recall accuracy' on the dashboard?",
            options: [
              "A running measure of self-graded card answers, the earliest signal a section did not stick",
              "The percentage of quiz questions answered correctly across all courses",
              "The proportion of lessons completed without revisiting an earlier one",
              "A comparison of your first and second final-exam attempts",
            ],
            correctIndex: 0,
            explanation:
              "It is built from the check-yourself cards you grade yourself on, which is why honest self-grading matters: an inflated grade destroys the signal it exists to give.",
            sourceLessonSlug: "how-to-study",
          },
          {
            prompt: "A learner reveals each check-yourself answer before attempting it, reasoning that reading the answer teaches the same content. What is wrong with that?",
            options: [
              "The struggle to recall is the learning event, so revealing first converts practice into reading",
              "The platform records the reveal as an incorrect answer, lowering recall accuracy",
              "Revealed cards are excluded from the dashboard, so progress is not tracked",
              "The cards contain material not otherwise covered, so the lesson is incomplete without them",
            ],
            correctIndex: 0,
            explanation:
              "Retrieval practice works because retrieval is effortful. Reading an answer you did not try to produce feels like learning and mostly is not.",
            sourceLessonSlug: "how-to-study",
          },
          {
            prompt: "Which instrument does the lesson describe as pinned to a selected passage?",
            options: [
              "Notes and highlights",
              "Check-yourself cards",
              "Quick recall",
              "The course finals",
            ],
            correctIndex: 0,
            explanation:
              "Selecting any passage lets you pin a note to it. The other three instruments are the in-lesson cards, the prior-lesson openers, and the pooled finals.",
            sourceLessonSlug: "how-to-study",
          },
          {
            prompt: "You score 62 on a course final. What does the program's own framing tell you to do?",
            options: [
              "Treat it as an instruction about which lessons to reread, using each question's review link",
              "Retake the course from the beginning before attempting the final again",
              "Record it as a failure and proceed, since scores carry no external standing",
              "Wait a full week before any retake, so the second attempt measures retention",
            ],
            correctIndex: 0,
            explanation:
              "Every question names the lesson that teaches its answer, so a low score resolves into a specific reading list. The week-later retake is a separate practice for measuring retention, not the response to a low score.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
          {
            prompt: "Which statement about this program's assessment is accurate?",
            options: [
              "It shows its seams deliberately, stating what the platform can and cannot do",
              "It replicates the NASM CWC exam format at a higher passing score",
              "It is proctored at the capstone stage to preserve the mock exam's integrity",
              "It withholds review links on finals so the exam measures unaided knowledge",
            ],
            correctIndex: 0,
            explanation:
              "The lesson's whole posture is disclosure: here is the serving cap, here are the pools, here is why the bar is 80, and here is why the mock exam is an equivalent rather than the thing itself.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
        ],
      },
    },
    {
      slug: "final-orientation-scope",
      title: "12 · Final: orientation and scope",
      section: "Section 3 · Working the program",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "What does completing this program grant, with respect to NASM and NBHWC?",
            options: [
              "Eligibility to sit the NBHWC board exam once fifty coaching sessions are logged against this program's completion letter",
              "Nothing from either organization; it is an independent study program and says so on every course",
              "A NASM CWC voucher at a partner discount",
              "Provisional NBHWC membership pending review",
            ],
            correctIndex: 1,
            explanation:
              "The program is independent: not affiliated with, endorsed by, or accredited by NASM or NBHWC, and completion grants no credential from them. Their names describe the scope of study only.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "What does 'dossier-first' mean in how this program was built?",
            options: [
              "Deep-research exports gathered candidates, then every load-bearing claim was verified against its primary source before entering a lesson",
              "Each course began from a certification body's official dossier",
              "Lessons were drafted first from the raw research exports, with citations attached afterward to whichever claims survived the editorial review of each course",
              "An AI summarized the field and the summaries were used directly",
            ],
            correctIndex: 0,
            explanation:
              "Research tools discovered candidate sources; verification against primaries gated what could enter a lesson. Claims that failed were corrected, cut, or taught as contested, and the program says so where it happened.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "In the NBHWC content outline's exam weighting, coaching process occupies:",
            options: [
              "17 to 23 percent, equal to health and wellness content",
              "7 to 13 percent, the smallest domain",
              "47 to 53 percent, nearly half the exam",
              "An unweighted pass/fail practicum",
            ],
            correctIndex: 2,
            explanation:
              "Coaching process carries 47 to 53 percent, against 17 to 23 each for coaching structure and health-and-wellness content and 7 to 13 for ethics/legal. The board treats the craft itself as the core of the profession.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "Which credential in the landscape lesson is NCCA-accredited?",
            options: [
              "NASM Certified Wellness Coach",
              "ACE Certified Health Coach",
              "ACLM Lifestyle Medicine Coach license",
              "The WELL program itself",
            ],
            correctIndex: 1,
            explanation:
              "ACE's Health Coach credential is NCCA-accredited. NASM's CWC states it is not; ACLM certifies clinicians rather than licensing coaches; and this program is an independent study program, not a credential.",
            sourceLessonSlug: "the-credential-landscape",
          },
          {
            prompt: "A coach wants to help a client 'work through childhood trauma affecting their eating.' Scope verdict?",
            options: [
              "In scope if framed as nutrition coaching, because the presenting concern is eating behavior rather than the childhood trauma itself",
              "In scope with the client's written consent",
              "In scope if the coach has personal experience with trauma",
              "Out of scope: trauma processing is therapy territory; refer, and coach the present-focused behaviors that remain",
            ],
            correctIndex: 3,
            explanation:
              "Processing trauma is therapeutic work for licensed professionals. The coach refers, then keeps the present-and-future-focused behavior work that legitimately remains. Neither framing nor consent changes the functional analysis.",
            sourceLessonSlug: "therapy-law",
          },
          {
            prompt: "Which activity fits Michigan's MCL 333.18353 exemption for unlicensed practice?",
            options: [
              "Weight-management coaching with individualized wellness recommendations, no protected title used",
              "Designing therapeutic diets for a client's stage 3 kidney disease under the exemption's weight-management-services language",
              "Marketing services as a 'licensed dietitian nutritionist' while awaiting licensure",
              "Billing medical nutrition therapy codes for wellness sessions",
            ],
            correctIndex: 0,
            explanation:
              "The exemption names coaching, behavior-change management, individualized recommendations for wellness or primary prevention, and weight-management services, conditioned on no medical nutrition therapy and no protected titles. The other three cross one or both conditions.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "The referral handoff taught in this course includes which element?",
            options: [
              "Providing the professional a working diagnosis and treatment suggestions so the licensed care can begin faster",
              "Pausing all coaching until the client completes treatment",
              "Naming the observation without diagnosing, and keeping the in-scope coaching alongside licensed care",
              "Requiring proof of a booked appointment before the next session",
            ],
            correctIndex: 2,
            explanation:
              "Name what you observed without diagnosing, state what is and is not yours, offer concrete next steps, and keep coaching what remains in scope once licensed care is engaged. Diagnosing, ultimatums, and abandonment are the failure modes.",
            sourceLessonSlug: "referral-duties",
          },
          {
            prompt: "Why do WELL-02 and WELL-03 run a dozen lessons while WELL-01 runs nearly thirty?",
            options: [
              "Movement and nutrition coaching lack an evidence base to teach",
              "The program assumes CPT/CES/CNC content, so those courses teach only the coaching layer; the coaching craft itself is the new material",
              "The program de-prioritizes movement and nutrition relative to recovery and sleep, which its centenarian framing treats as the higher-leverage pillars for longevity",
              "Platform limits cap most courses at fourteen lessons",
            ],
            correctIndex: 1,
            explanation:
              "The bridges are thin because your certifications carry the content; the coaching conversation and adherence evidence are what they add. Coaching psychology is long because none of your credentials teach it.",
            sourceLessonSlug: "how-the-program-fits",
          },
          {
            prompt: "Why does this program set its passing score at 80 rather than NASM's 70?",
            options: [
              "To advertise itself as harder than NASM's exam",
              "Because pooled questions are easier than fixed forms",
              "Because the NBHWC requires an 80 percent pass mark on the finals of all of its approved training programs",
              "Because retakeable, unproctored, open-book finals compensate with a higher bar",
            ],
            correctIndex: 3,
            explanation:
              "An honest self-administered exam admits its conditions are softer and compensates with a higher standard. It is a calibration to the format, not a comparison claim about difficulty.",
            sourceLessonSlug: "the-honest-assessment-model",
          },
          {
            prompt: "What is the recommended way to use the course finals as study instruments?",
            options: [
              "Take each final twice, a week apart; the fresh draw measures retention",
              "Take each final once, immediately, and move on",
              "Save every course final for the mock-exam week, so all first attempts happen as fresh draws in one sitting",
              "Retake each final daily until scoring 100",
            ],
            correctIndex: 0,
            explanation:
              "The pool serves a different subset on retake, so a second attempt a week later measures retention rather than recognition. The mock-exam week comes later, on top of this practice, not instead of it.",
            sourceLessonSlug: "how-to-study",
          },
          {
            prompt: "A coach shares a CDC handout on activity guidelines and helps the client plan around it. Scope verdict under NBHWC's framing?",
            options: [
              "Out of scope: only clinicians may share health information",
              "In scope: sharing evidence-based resources from nationally recognized authorities while facilitating the client's own plan",
              "In scope only if the coach also holds a CPT",
              "Out of scope unless the client's physician approves the specific handout in writing before the coaching session in which it is shared",
            ],
            correctIndex: 1,
            explanation:
              "The scope of practice permits offering evidence-based resources from nationally recognized authorities; the coach remains a facilitator. No additional credential or physician sign-off is required for general public-health information.",
            sourceLessonSlug: "what-a-wellness-coach-is",
          },
          {
            prompt: "Which situation is the clearest 'get legal counsel' gray zone from the nutrition-law lesson?",
            options: [
              "Teaching a free public seminar on reading nutrition labels to an audience that may include people with diagnosed conditions",
              "Disease-focused individualized diet planning that stops short of claiming medical nutrition therapy",
              "Sharing the Dietary Guidelines for Americans with a client",
              "Coaching meal-prep logistics for a healthy adult",
            ],
            correctIndex: 1,
            explanation:
              "Boards interpret the line between individualized wellness advice and medical nutrition therapy differently by state. Disease-focused individualized planning sits in that contested zone even where wellness coaching is exempt; the other three are squarely inside the exemptions.",
            sourceLessonSlug: "nutrition-law",
          },
          {
            prompt: "What did this program's verification find about the widely cited NBHWC 'competency 4.2.7'?",
            options: [
              "It is the referral competency, confirmed verbatim in the 2024 program-approval handbook's ethics and legal domain listing of competencies",
              "The number did not survive verification; the handbook's confirmable competency is 4.2, knowing and abiding by the scope of practice",
              "It was retired in 2020 and replaced by competency 5.1",
              "It exists only in the ACE career guide",
            ],
            correctIndex: 1,
            explanation:
              "Verification confirmed handbook competency 4.2 (know and abide by the current scope of practice) and could not confirm a 4.2.7. The 2026 handbook's outline numbers the referral duty 4.2.2, still not 4.2.7. The program cites what verified and says so, which is the dossier-first discipline working as intended.",
            sourceLessonSlug: "what-this-program-is",
          },
          {
            prompt: "You are coaching yourself through this program. A knee ache has altered how you walk for three weeks. The orientation course says:",
            options: [
              "Apply the referral trigger to yourself: function-altering persistent symptoms go to a professional, then keep self-coaching what remains",
              "Self-coaching is exempt from scope rules, so proceed as planned",
              "Program around it using your CES corrective strategies, since assessing movement compensations is already inside your existing scope",
              "Defer all training decisions until WELL-04 covers recovery",
            ],
            correctIndex: 0,
            explanation:
              "Referral triggers apply whether the client is a stranger or the person in the mirror: persistent, function-altering symptoms get professional eyes. Your CES knowledge informs the conversation; it does not replace the referral.",
            sourceLessonSlug: "referral-duties",
          },
        ],
      },
    },
  ],
};
