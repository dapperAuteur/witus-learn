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
        ],
      },
    },

    // ── Section 3 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "how-the-program-fits",
      title: "9 · The eight courses, and how they build on what you hold",
      section: "Section 3 · Working the program",
      body: `The program is a single linear path. Each course assumes everything before it.

**WELL-00, this course**, is the frame: role, scope, law, referral, and the study system.

**WELL-01, Coaching Psychology**, is the largest course and the reason the program exists: behavior-change science and the coaching craft, the material none of your certifications carry. Everything after it applies its tools.

**WELL-02 and WELL-03, Coaching Movement and Coaching Nutrition**, are deliberately thin bridges. You hold a CPT, CES, and CNC; these courses do not re-teach a gram of that content. They teach the coaching conversation around each pillar, the adherence evidence, and the scope lines from this course applied in the field.

**WELL-04, Recovery and Stress**, and **WELL-05, Sleep**, cover the pillars your certifications skip, with the evidence graded honestly, including where popular recovery claims outrun their data.

**WELL-06, Mental and Emotional Well-being**, walks the closest to the therapy boundary, which is why it comes after the scope training and repeats it.

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

**What this program does instead.** Section knowledge checks draw from pools of roughly a dozen questions. Each course ends in a final drawing 10 from a pool of 30 to 60. The passing score is 80, deliberately higher than the 70 NASM's CWC exam uses, because this program's finals are retakeable, unproctored, and open-book by nature; an honest self-administered exam compensates with a higher bar (National Academy of Sports Medicine, n.d.).

**The mock-exam week.** When all eight courses are complete, the capstone prescribes one sitting in which you retake every course final back to back: eight finals, 10 fresh-drawn questions each, 80 questions across the program in one session. That is this program's equivalent of a certification exam day, and it is honest about being an equivalent rather than the thing itself.

**Why every question carries a review link.** Each quiz question names the lesson that teaches its answer. A missed question is an instruction: reread that lesson, not the whole course. Scores here measure your learning, not your standing with any board, and the program never pretends otherwise.

:::reveal Why is the passing score 80 when NASM's own exam passes at 70? ||| Because this program's finals are retakeable, unproctored, and effectively open-book. A self-administered exam compensates for softer conditions with a higher bar, and says so.

:::reveal What is the mock-exam week, mechanically? ||| One sitting after all eight courses: retake every course final back to back, 10 freshly drawn questions each, 80 questions total. It is this program's honest equivalent of an exam day, not a claim to be one.

## Vocabulary
- **Question pool**: the full set of questions a quiz owns, from which each attempt draws a subset; this program's finals pool 30 to 60.
- **Fresh draw**: a retake's new subset from the pool, which is what makes a second attempt measure retention instead of recognition.
- **Passing-score calibration**: setting the bar to the exam's conditions; 80 here, above NASM's 70, because retakeable open-book finals owe a higher standard.
- **Mock-exam week**: the capstone's prescribed single sitting of all eight course finals back to back, this program's honest equivalent of a certification exam day.

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
