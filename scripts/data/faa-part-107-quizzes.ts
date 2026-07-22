// Authored end-of-module quizzes for the FAA Part 107 course, for the modules the
// source import (content/drone-curriculum/academy-import/quizzes-import.csv) does NOT
// cover. The CSV ships quizzes for modules 1, 2 (x3), 3, and 12 only; every other
// module ended with no quiz at all. These fill the gap so EVERY module ends with one.
//
// Authoring rules (this is FAA test prep — a wrong answer costs a learner a real exam):
//  - Every question is answerable from that module's own lesson text (the module JSONs
//    in the import). Nothing here is imported from outside the course content.
//  - `explanation` cites the governing rule ONLY where the rule is a real, verified one
//    (14 CFR 107.x / 91.17 / Part 48). Where the fact is chart symbology, weather
//    interpretation, radio phraseology, or ADM doctrine — where no CFR section governs —
//    the explanation is written from the lesson text with NO citation, rather than
//    inventing a plausible-looking reg number.
//  - No question references the FAA figure supplement (FAA-CT-8080-2H): the learner has
//    no figure to look at in the app, so a figure question would be unanswerable.
//
// `sourceLessonNumber` is the lesson `n` WITHIN the module that teaches the answer;
// scripts/seed-faa.ts resolves it to that lesson's slug for the quiz player's
// "review this lesson" link.

export interface AuthoredFaaQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /** Lesson `n` within this module whose text the answer comes from. */
  sourceLessonNumber: number;
}

export interface AuthoredFaaQuiz {
  moduleOrder: number;
  title: string;
  passingScore?: number;
  questions: AuthoredFaaQuestion[];
  /** Serve a random subset of this many questions per attempt, turning a large bank into a
   *  rotating pool so a learner sees different questions on retries. Omitted / >= the pool size
   *  serves all; always clamped to MAX_QUESTIONS_PER_ATTEMPT (10) at the serving seam. */
  questionsPerAttempt?: number;
  /** Shuffle each question's option order per attempt (display only; scoring is by identity, so
   *  every ported explanation that names an answer by its TEXT stays correct). */
  shuffleOptions?: boolean;
  /** Lesson `n` WITHIN this module to place the quiz right after (a SECTION quiz that lands
   *  mid-module). Passed through to the ModuleQuiz so `sequenceModuleItems` interleaves it.
   *  Omitted => the quiz stays at the module end (the legacy layout). */
  afterLessonNumber?: number;
}

export const AUTHORED_FAA_QUIZZES: AuthoredFaaQuiz[] = [
  {
    moduleOrder: 0,
    title: "Start Here Quiz",
    questions: [
      {
        prompt: "How many questions are on the FAA Part 107 (UAG) knowledge test, and how long do you get?",
        options: [
          "40 questions in 90 minutes",
          "60 questions in 2 hours",
          "75 questions in 3 hours",
        ],
        correctIndex: 1,
        explanation:
          "The knowledge test is 60 multiple-choice questions with three choices each, and you get 2 hours. You take it in person at an FAA-approved testing center.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "What score do you need to pass the Part 107 knowledge test?",
        options: ["70 percent (42 of 60 correct)", "80 percent (48 of 60 correct)", "90 percent (54 of 60 correct)"],
        correctIndex: 0,
        explanation:
          "70 percent passes, which is 42 correct out of 60. This course holds you to a higher bar (80 percent on module quizzes) because scores drop under real test-day stress.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "Some test questions refer to a figure. Where do the figures come from on test day?",
        options: [
          "They are displayed on the testing screen next to the question",
          "You must bring your own printed copy of the figure supplement",
          "They come in a printed booklet the testing center hands you",
        ],
        correctIndex: 2,
        explanation:
          "The figures arrive as a printed booklet handed to you at the testing center. They are not shown on the screen, and you do not bring your own.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "Do you need an instructor endorsement before you can take the Part 107 knowledge test?",
        options: [
          "Yes, a certificated flight instructor must sign you off",
          "No, you schedule the test yourself when you are ready",
          "Yes, but only if you have never held any FAA certificate",
        ],
        correctIndex: 1,
        explanation:
          "No instructor sign-off is required for the Part 107 test. You schedule it yourself once you are ready, unlike many manned-aviation checkrides.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "What score should you be hitting on a module quiz before you move on to the next module?",
        options: ["At least 70 percent", "At least 80 percent", "100 percent"],
        correctIndex: 1,
        explanation:
          "Aim for at least 80 percent on each module quiz before moving on. If you fall short, re-study the weak spots and try again. Before scheduling the real test, aim for 80 to 90 percent on the full practice exam.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "Once you hold a remote pilot certificate, how often must you complete recurrent training to keep using your Part 107 privileges?",
        options: [
          "Every 12 calendar months",
          "Every 24 calendar months",
          "Only when the FAA changes the rules",
        ],
        correctIndex: 1,
        explanation:
          "Recurrent training (free, online) is required every 24 calendar months to keep flying under Part 107.\n\nReference: 14 CFR § 107.65 (aeronautical knowledge recency).",
        sourceLessonNumber: 1,
      },
      {
        prompt: "What does the Part 107 remote pilot certificate actually allow you to do?",
        options: [
          "Fly a drone for any commercial or work purpose",
          "Fly a drone recreationally, which otherwise would not be allowed",
          "Fly a drone above 400 feet without any further authorization",
        ],
        correctIndex: 0,
        explanation:
          "Part 107 is the FAA's permission slip to fly a drone for any commercial purpose: selling photos, inspecting a roof, mapping a field. Anything where money or a business is involved needs it. Flying purely for fun falls under a different, looser set of rules.\n\nReference: 14 CFR § 107.12 (requirement for a remote pilot certificate with a small UAS rating).",
        sourceLessonNumber: 1,
      },
      {
        prompt: "What is the official name of the Part 107 knowledge test?",
        options: [
          "The Remote Pilot Aeronautical Exam (RPAE)",
          "The Unmanned Aircraft General test (the UAG)",
          "The Small UAS Certification Test (SUCT)",
        ],
        correctIndex: 1,
        explanation:
          "The test is the Unmanned Aircraft General test, the UAG. That is the name you will see when you schedule it, so recognize it rather than looking for the words 'Part 107' on the booking page.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "What should you bring with you to the testing center?",
        options: [
          "A government-issued photo ID, and optionally a simple non-scientific calculator",
          "A government-issued photo ID and your own printed figure supplement",
          "A laptop and a scientific calculator that can store formulas",
        ],
        correctIndex: 0,
        explanation:
          "Bring a government photo ID (driver's license or passport) so the center can confirm who you are. A simple calculator is optional and the center usually has one; it may NOT be a scientific calculator that stores information. The figure booklet is handed to you there, so you do not bring your own.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "You answer a question on the test computer and it tells you nothing. What does that mean?",
        options: [
          "The answer did not save, so you should re-enter it",
          "Nothing is wrong. The test scores everything at the very end, so keep moving",
          "The question was one of the unscored experimental questions",
        ],
        correctIndex: 1,
        explanation:
          "The screen never tells you right or wrong as you go. It saves the answer in silence and adds everything up at the end, when the proctor tells you the result. The silence is normal, so let an unsure question go and keep moving.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "Which parts of Part 107 certification are done in person, and which are done online?",
        options: [
          "Both the initial knowledge test and the later recurrent training are in person",
          "The initial knowledge test is in person; the later recurrent training is online",
          "Both the initial knowledge test and the later recurrent training are online",
        ],
        correctIndex: 1,
        explanation:
          "The initial knowledge test is in person at an FAA-approved testing center, with no exceptions. The recurrent training you take later to stay current is the online one. Do not swap the two.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "About how much does the knowledge test cost, and how often do you pay it?",
        options: [
          "About 175 dollars, once per attempt",
          "About 175 dollars, once, covering unlimited retakes",
          "It is free; the FAA covers the testing center fee",
        ],
        correctIndex: 0,
        explanation:
          "The test runs about 175 dollars and you pay the testing center per attempt. That is exactly why the course wants you at 80 to 90 percent on the practice exam before you book: a retake costs the full fee again.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "About how many hours of study does the FAA suggest before you sit the knowledge test?",
        options: ["About 5 hours", "About 20 hours", "About 60 hours"],
        correctIndex: 1,
        explanation:
          "The FAA suggests around 20 hours of study. This is not a cram-the-answers course: that depth is what keeps you safe in the air, not just what gets you past the question bank.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "What is the 'layered practice' study method this course is built around?",
        options: [
          "Listen to the lessons, then re-listen to any that did not land",
          "Listen to each lesson; use the glossary and flashcards; take the module quiz aiming for 80 percent; re-study your weak spots and retake",
          "Take the practice exam first, then study only the questions you missed",
        ],
        correctIndex: 1,
        explanation:
          "Four parts that stack: listen to each lesson, drill recall with the glossary and flashcards, take the module quiz aiming for at least 80 percent, and re-study the weak spots before retaking. You hit each topic from several angles instead of relying on any one of them.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "You score 72 percent on a module quiz. The real test only needs 70 percent. What does the course method say to do?",
        options: [
          "Move on. You are already above the FAA passing score",
          "Go back, re-study what you missed, and retake the quiz until you are at 80 percent or better",
          "Move on, but retake this quiz once you finish the whole course",
        ],
        correctIndex: 1,
        explanation:
          "Treat 80 percent as the floor on every quiz. Seventy is the bare pass on the real test under perfect conditions, and test day is not perfect conditions. Each module also builds on the one before it, so a weak topic carried forward drags down everything after it.",
        sourceLessonNumber: 2,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Module 2 (Regulations) — THREE rotating SECTION pools, placed mid-module after the
  // section each tests (see plans/user-tasks/171). The CSV's three module-2 rows were removed
  // so this authored path is used. Each pool is larger than its per-attempt serve count, so a
  // retake draws a fresh subset. Ported questions (from the old CSV quizzes, already vetted) are
  // VERBATIM — only `sourceLessonNumber` was added; NEW questions are grounded in one lesson's
  // stated facts, and every explanation cites the exact 14 CFR section that lesson's Sources name.
  // ---------------------------------------------------------------------------
  {
    moduleOrder: 2,
    title: "Regulations: Foundations",
    passingScore: 80,
    questionsPerAttempt: 8,
    shuffleOptions: true,
    afterLessonNumber: 3, // after "Honesty, Inspections & Accident Reports" — covers lessons 1-3
    questions: [
      // ---- Ported VERBATIM from CSV "Regulation Quiz" (4) ----
      {
        prompt: "Who should you make your documents available to when asked?",
        options: [
          "The General Public and any Government Employees.",
          "Any Government employee.",
          "The Administrator, authorized representatives from the NTSB or TSA, or any Federal, State, or Local Law enforcement officers.",
        ],
        correctIndex: 2,
        explanation:
          "Per 14 CFR 107.7, you must make your documents available to the FAA Administrator, an authorized NTSB or TSA representative, and any Federal, State, or Local law enforcement officer. The general public is wrong because regular citizens have no right to inspect your records. Any government employee is wrong because the rule names specific officials, not every worker on a government payroll.",
        sourceLessonNumber: 3,
      },
      {
        prompt:
          "A company plans to operate a 33 lb. sUAS to capture aerial imagery over real estate for use in sales listings. Is this sUAS operation subject to 14 CFR Part 107?",
        options: [
          "No, this sUAS operation requires a Section 333 exemption.",
          "No, this sUAS operation is not subject to Part 107.",
          "Yes, this sUAS operation is subject to Part 107.",
        ],
        correctIndex: 2,
        explanation:
          "This is a Part 107 operation because it is flown for a business purpose and the 33 lb aircraft is under the 55 lb limit for a small UAS. A Section 333 exemption is wrong because that path is for aircraft that fall outside Part 107, and this one fits inside it. Saying it is not subject to Part 107 is wrong because the flight is commercial, not recreational, so the recreational exception does not apply.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "According to 14 CFR Part 107, an sUAS is an unmanned aircraft system weighing",
        options: ["Less than 55 lbs.", "55 lbs. or less.", "55 kg or less."],
        correctIndex: 0,
        explanation:
          'Per 14 CFR 107.3, a small unmanned aircraft weighs less than 55 lbs on takeoff, including everything on board or attached. "55 lbs or less" is wrong because an aircraft weighing exactly 55 lbs is not included; the limit is below 55, not at 55. "55 kg or less" is wrong because the rule is stated in pounds, and 55 kg is roughly 121 lbs, far above the actual limit.',
        sourceLessonNumber: 2,
      },
      {
        prompt: "A person whose sole task is watching the sUAS to report hazards to the rest of the crew is called:",
        options: ["Visual observer.", "Remote PIC.", "Person manipulating the controls."],
        correctIndex: 0,
        explanation:
          "Per 14 CFR 107.3, a visual observer is a crewmember whose sole job is watching the aircraft to help see and avoid traffic and hazards and report them to the crew. The Remote PIC is wrong because that person is in command of the whole operation, not limited to watching. The person manipulating the controls is wrong because that crewmember is actively flying the aircraft, not just observing.",
        sourceLessonNumber: 2,
      },
      // ---- Ported VERBATIM from CSV "Regulation Quiz 1" (5) ----
      {
        prompt: "Which of the following types of operations are excluded from the requirements in Part 107?",
        options: [
          "Quadcopter capturing aerial imagery for crop monitoring.",
          "UAS used for motion picture filming.",
          "Model aircraft for hobby use.",
        ],
        correctIndex: 2,
        explanation:
          "Model aircraft flown purely as a hobby are excluded from Part 107 because they fall under the recreational exception in 49 USC 44809. A quadcopter capturing imagery for crop monitoring is wrong because that is commercial work covered by Part 107. A UAS used for motion picture filming is wrong because filming for production is also a non-recreational use subject to Part 107.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "Unmanned aircraft means an aircraft operated",
        options: [
          "During search and rescue operations other than public.",
          "Without the possibility of direct human intervention from within or on the aircraft.",
          "For hobby and recreational use when not certificated.",
        ],
        correctIndex: 1,
        explanation:
          'Per 14 CFR 107.3, an unmanned aircraft is one operated without the possibility of direct human intervention from within or on the aircraft. "During search and rescue operations other than public" is wrong because that describes a type of mission, not what makes an aircraft unmanned. "For hobby and recreational use when not certificated" is wrong because the purpose of the flight does not define the aircraft; an aircraft is unmanned based on no one being aboard to control it.',
        sourceLessonNumber: 2,
      },
      {
        prompt: "Within how many days must an sUAS accident be reported to the FAA?",
        options: ["10 days.", "90 days.", "30 days."],
        correctIndex: 0,
        explanation:
          'Per 14 CFR 107.9, an sUAS accident must be reported to the FAA within 10 calendar days. "90 days" is wrong because that is far longer than the rule allows. "30 days" is wrong because it also exceeds the required window; the deadline is 10 days, not 30.',
        sourceLessonNumber: 3,
      },
      {
        prompt:
          "A pilot has purchased a new quadcopter that weighs 0.43 lbs (195 grams) to complete roof inspections. Is this operation subject to 14 CFR Part 107?",
        options: [
          "No, 14 CFR Part 107 does not apply to aircraft weighting less than 0.55 lbs.",
          "Yes, there is no lower weight limit for operating under 14 CFR Part 107.",
          "No, roof inspections don't require operation under 14 CFR Part 107.",
        ],
        correctIndex: 1,
        explanation:
          'Yes, Part 107 has no lower weight limit, so a 0.43 lb drone flown for commercial roof inspections is still subject to Part 107. "Part 107 does not apply below 0.55 lbs" is wrong because 0.55 lbs is only the threshold for FAA registration, not an exemption from the operating rules. "Roof inspections don\'t require Part 107" is wrong because the inspection is commercial work, which Part 107 covers regardless of the task.',
        sourceLessonNumber: 1,
      },
      {
        prompt: "Falsifying records that are required to show compliance with any requirement of Part 107 can lead to",
        options: [
          "A required checkride with the FAA",
          "Jail time of up to 1 year",
          "Denial of application for Remote Pilot, waivers, or suspension/revocation, or a civil penalty.",
        ],
        correctIndex: 2,
        explanation:
          'Per 14 CFR 107.5, falsifying, reproducing, or altering records required to show compliance can lead to denial of an application for a Remote Pilot certificate or waiver, suspension or revocation of a certificate, or a civil penalty. "A required checkride with the FAA" is wrong because Part 107 has no checkride and that is not a penalty for falsification. "Jail time of up to 1 year" is wrong because 107.5 lists administrative and civil consequences, not that specific criminal sentence.',
        sourceLessonNumber: 3,
      },
      // ---- NEW, grounded in lessons 1-3 ----
      {
        prompt:
          "What actually decides whether a drone flight is a commercial Part 107 flight or a recreational one?",
        options: [
          "Whether money changed hands on the flight",
          "The takeoff weight of the drone",
          "The intent of the flight, meaning why you went up",
          "Whether the pilot already holds a remote pilot certificate",
        ],
        correctIndex: 2,
        explanation:
          "Per 14 CFR 107.1 and the recreational exception in 49 U.S.C. 44809, the test is the intent of the flight, not whether money changed hands. Fly for any purpose other than fun and it is a Part 107 flight, paid or not; a very small drone flown for work is still fully covered.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "A drone weighs 55 pounds or more at takeoff. Which rules govern it?",
        options: [
          "Part 107, the same as any small drone",
          "Part 91, the general operating rules",
          "Part 135, the air carrier rules",
          "No FAA rules apply once a drone is over 55 pounds",
        ],
        correctIndex: 1,
        explanation:
          "A small unmanned aircraft weighs less than 55 pounds (14 CFR 107.3). At 55 pounds or more you fall out of Part 107 and fly under 14 CFR Part 91, the general operating rules used for crewed aircraft.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "A company flies packages to customers' doors by drone. Which part of the regulations covers that delivery operation?",
        options: ["14 CFR Part 107", "14 CFR Part 61", "14 CFR Part 135", "14 CFR Part 91"],
        correctIndex: 2,
        explanation:
          "Package delivery is an air carrier operation and falls under 14 CFR Part 135, not Part 107. Part 107 does not cover air carrier (delivery) operations.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "Your coworker is holding the controller and flying while you stand beside them, in charge and giving directions. Can you be the remote pilot in command even though you are not touching the sticks?",
        options: [
          "No, only the person physically on the controls can be the remote pilot in command",
          "Yes, the remote pilot in command may supervise the person manipulating the controls and still be in command",
          "Only if the coworker also holds a certificate",
          "Only during training flights",
        ],
        correctIndex: 1,
        explanation:
          "Per 14 CFR 107.3 (and 107.1), the remote pilot in command is in charge of the operation and either flies the aircraft or supervises the person manipulating the controls. The RPIC and the person flying can be two different people; the RPIC still carries responsibility.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "What does the term unmanned aircraft system (sUAS) refer to?",
        options: [
          "Just the flying aircraft by itself",
          "The remote pilot together with the aircraft",
          "The aircraft plus the controller and the equipment that makes it fly",
          "The aircraft together with its visual observer",
        ],
        correctIndex: 2,
        explanation:
          "Per 14 CFR 107.3, the unmanned aircraft system is the whole package: the aircraft plus the controller and the supporting equipment that makes it fly. The aircraft alone is just the flying part.",
        sourceLessonNumber: 2,
      },
      {
        prompt:
          "Your drone clips a stranger's parked car and causes about $700 in damage. No one is hurt. Must you report it, and by when?",
        options: [
          "No, damage to property never has to be reported",
          "Yes, report it to the FAA within 10 calendar days",
          "Yes, but only within 10 business days",
          "No, only injuries have to be reported",
        ],
        correctIndex: 1,
        explanation:
          "Per 14 CFR 107.9, you report an accident within 10 calendar days when property of others is damaged with a repair cost over $500. It is calendar days, not business days, and $700 to someone else's car clears the $500 line.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "Who is allowed to actually test or inspect your aircraft, your control system, and your crew?",
        options: [
          "Any federal, state, or local law enforcement officer",
          "The NTSB or the TSA",
          "Only the FAA (the Administrator)",
          "Any government employee who asks",
        ],
        correctIndex: 2,
        explanation:
          "Per 14 CFR 107.7, only the FAA can test or inspect the aircraft, the system, the remote pilot in command, the person manipulating the controls, and the visual observer. Other officials may request your documents, but the inspect-and-test power belongs to the FAA alone.",
        sourceLessonNumber: 3,
      },
    ],
  },

  {
    moduleOrder: 2,
    title: "Regulations: Certificate, Command & Core Rules",
    passingScore: 80,
    questionsPerAttempt: 9,
    shuffleOptions: true,
    afterLessonNumber: 8, // after "Right of Way, Careless Operation & No Hazmat" — covers lessons 4-8
    questions: [
      // ---- Lesson 4: Getting and Keeping Your Certificate (107.12 / 107.61 / 107.65) ----
      {
        prompt: "Once you hold a remote pilot certificate, how often must you complete recurrent training to stay current?",
        options: [
          "Every 12 calendar months",
          "Every 36 calendar months",
          "Every 24 calendar months",
          "Only when the FAA changes the rules",
        ],
        correctIndex: 2,
        explanation:
          "Per 14 CFR 107.65, recurrent (aeronautical knowledge) training is required every 24 calendar months to stay current as a pilot in command. Watch the trap answers: 24 without 'calendar', or 36 months, which is registration, not training.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "What is the minimum age to apply for a remote pilot certificate with a small UAS rating?",
        options: ["16 years old", "17 years old", "18 years old", "14 years old"],
        correctIndex: 0,
        explanation:
          "Per 14 CFR 107.61, you must be at least 16 years old to apply for a remote pilot certificate. Do not pick 17 or 18.",
        sourceLessonNumber: 4,
      },
      {
        prompt:
          "A coworker without a remote pilot certificate wants to do the actual flying on a paid job. You hold the certificate. Can the job go ahead legally?",
        options: [
          "No, only the certificate holder may touch the controls",
          "Yes, as long as you directly supervise and can take over the controls immediately",
          "Yes, but only if the coworker is at least 18",
          "No, everyone who flies must hold their own certificate",
        ],
        correctIndex: 1,
        explanation:
          "Per 14 CFR 107.12, you may operate under Part 107 if you hold the certificate OR you fly under the direct supervision of someone who does and who can take over the controls immediately. So the flight is legal with a certificated pilot in command even when someone else touches the sticks.",
        sourceLessonNumber: 4,
      },
      {
        prompt:
          "Besides being at least 16 and passing the FAA knowledge test, which is required to be eligible to apply for a remote pilot certificate?",
        options: [
          "Hold a valid driver's license",
          "Own a registered drone",
          "Complete 20 hours of documented flight training",
          "Be able to read, speak, write, and understand English, and be in a safe physical and mental condition",
        ],
        correctIndex: 3,
        explanation:
          "Per 14 CFR 107.61, eligibility requires being at least 16, able to read, speak, write, and understand English, in a physical and mental condition to fly safely, and passing the knowledge test. A driver's license, drone ownership, and flight-hour minimums are not requirements.",
        sourceLessonNumber: 4,
      },
      // ---- Lesson 5: The Remote Pilot in Command (107.19 / 107.21) ----
      {
        prompt: "Who is directly responsible for and the final authority over a small unmanned aircraft operation?",
        options: [
          "The owner of the drone",
          "The client who hired the flight",
          "The remote pilot in command",
          "The instructor on site",
        ],
        correctIndex: 2,
        explanation:
          "Per 14 CFR 107.19, the remote pilot in command is directly responsible for and the final authority over the operation. No owner, client, or instructor can override that authority.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "A sudden in-flight emergency requires immediate action. What may the remote pilot in command do?",
        options: [
          "Deviate from any Part 107 rule, but only to the extent needed to meet the emergency",
          "Nothing; every Part 107 rule must be followed at all times",
          "Deviate from any rule for the rest of the day",
          "Only deviate from the 400-foot altitude limit",
        ],
        correctIndex: 0,
        explanation:
          "Per 14 CFR 107.21, in an in-flight emergency requiring immediate action the RPIC may deviate from any rule in Part 107, but only to the extent needed to meet that emergency.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "After you deviate from a rule to handle an in-flight emergency, when must you send the FAA a written report?",
        options: [
          "After every emergency, within 10 days",
          "Within 24 hours of landing",
          "Never; no report is ever required",
          "Only upon request from the Administrator (the FAA)",
        ],
        correctIndex: 3,
        explanation:
          "Per 14 CFR 107.21, after deviating you must send a written report explaining the deviation only upon request from the Administrator. No request, no report required, the trap is thinking you must file after every emergency.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "When must the remote pilot in command be designated for a flight?",
        options: [
          "Only after the flight, in the logbook",
          "Before or during the flight",
          "Only when a visual observer is used",
          "Within 24 hours of the flight",
        ],
        correctIndex: 1,
        explanation:
          "Per 14 CFR 107.19, the RPIC must be designated before or during the flight (better before), and the visual observers and crew work under the RPIC's direction.",
        sourceLessonNumber: 5,
      },
      // ---- Lesson 6: The Core Operating Rules (107.23 / 107.25 / 107.29 / 107.31) ----
      {
        prompt: "May you operate a small drone from a moving vehicle?",
        options: [
          "Never, under any circumstances",
          "Yes, over a sparsely populated area and not carrying property for hire",
          "Yes, anywhere as long as you keep the drone in sight",
          "Only from a boat, never a car",
        ],
        correctIndex: 1,
        explanation:
          "Per 14 CFR 107.25, flying from a moving vehicle is banned EXCEPT over a sparsely populated area and not while carrying property for hire. The trap answer says you can never fly from a moving vehicle.",
        sourceLessonNumber: 6,
      },
      {
        prompt: "For night and civil-twilight flight, your drone's anti-collision light must be visible for how far?",
        options: ["1 statute mile", "3 nautical miles", "5 statute miles", "3 statute miles"],
        correctIndex: 3,
        explanation:
          "Per 14 CFR 107.29, night and civil-twilight operations require an anti-collision light visible for 3 statute miles, flashing fast enough to help other aircraft avoid a collision.",
        sourceLessonNumber: 6,
      },
      {
        prompt: "Under the visual line of sight rule, which aid is allowed for keeping the drone in sight?",
        options: [
          "First-person-view (FPV) goggles",
          "Binoculars",
          "Corrective lenses (glasses or contacts)",
          "A telescope",
        ],
        correctIndex: 2,
        explanation:
          "Per 14 CFR 107.31, the remote pilot (and any visual observer) must see the drone with unaided vision; only corrective lenses are allowed. FPV goggles, binoculars, and telescopes do NOT satisfy visual line of sight.",
        sourceLessonNumber: 6,
      },
      {
        prompt:
          "A pilot buzzes a crowd at a park to get a shot. No specific rule is named 'buzzing a crowd.' Which rule can the FAA still cite?",
        options: [
          "The careless or reckless operation rule (107.23)",
          "The visual line of sight rule (107.31)",
          "The moving-vehicle rule (107.25)",
          "None; with no specific rule named, there is no violation",
        ],
        correctIndex: 0,
        explanation:
          "Per 14 CFR 107.23, careless or reckless operation that endangers people or property is the catch-all rule. Even when no specific rule names the act, the FAA can cite 107.23 (which also bans dropping objects that endanger people or property).",
        sourceLessonNumber: 6,
      },
      // ---- Lesson 7: Crew, Observers & Flying More Than One (107.33 / 107.35) ----
      {
        prompt: "Is a visual observer required under Part 107?",
        options: [
          "Yes, every Part 107 flight requires a visual observer",
          "No, a visual observer is optional, but if you use one the conditions of 107.33 apply",
          "Yes, but only at night",
          "Only when flying over people",
        ],
        correctIndex: 1,
        explanation:
          "Per 14 CFR 107.33, a visual observer is optional; you may fly Part 107 alone. But if you use one, the three conditions of 107.33 (effective communication, unaided vision, and coordinated scanning) apply. The trap answer is 'yes, always.'",
        sourceLessonNumber: 7,
      },
      {
        prompt: "How many small unmanned aircraft may one person operate at the same time?",
        options: ["As many as the pilot can see", "Up to three", "One", "Two, if a visual observer helps"],
        correctIndex: 2,
        explanation:
          "Per 14 CFR 107.35, one person may not operate, act as remote pilot in command, or act as visual observer for more than one small unmanned aircraft at a time. The answer is one, and that limit covers the observer too.",
        sourceLessonNumber: 7,
      },
      {
        prompt: "When a visual observer is used, what does 14 CFR 107.33 require of the crew?",
        options: [
          "Effective communication among the RPIC, the person flying, and the observer at all times",
          "The observer must hold a remote pilot certificate",
          "The observer must stand at least 100 feet from the pilot",
          "The observer may use binoculars to watch the aircraft",
        ],
        correctIndex: 0,
        explanation:
          "Per 14 CFR 107.33, when a visual observer is used the remote pilot in command, the person manipulating the controls, and the observer must maintain effective communication at all times.",
        sourceLessonNumber: 7,
      },
      {
        prompt:
          "Mid-flight, your visual observer offers to also keep an eye on another pilot's drone nearby. Is that allowed?",
        options: [
          "Yes, as long as both drones are close together",
          "Yes, if the observer uses binoculars",
          "Only if the observer is certificated",
          "No, a visual observer may serve only one aircraft and one remote pilot in command at a time",
        ],
        correctIndex: 3,
        explanation:
          "Per 14 CFR 107.35, a visual observer can serve only one aircraft and one remote pilot in command at a time. Splitting attention across two flights defeats the whole point of the job.",
        sourceLessonNumber: 7,
      },
      // ---- Lesson 8: Right of Way, Careless Operation & No Hazmat (107.37 / 107.36 / 107.23) ----
      {
        prompt: "A manned aircraft is approaching your drone's position. Who must yield?",
        options: [
          "The manned aircraft, because your drone is more maneuverable",
          "Your drone, always",
          "Whoever saw the other one first",
          "The lower of the two aircraft",
        ],
        correctIndex: 1,
        explanation:
          "Per 14 CFR 107.37, your drone gives way to all other aircraft, every time. You have no right-of-way priority, the trap answers suggest you can hold position if you saw them first or that the lower aircraft yields.",
        sourceLessonNumber: 8,
      },
      {
        prompt: "May a small unmanned aircraft system carry a small amount of hazardous material?",
        options: [
          "Yes, a small amount is allowed",
          "Yes, if it is properly labeled",
          "No, a small unmanned aircraft system may not carry hazardous material at all",
          "Only over a sparsely populated area",
        ],
        correctIndex: 2,
        explanation:
          "Per 14 CFR 107.36, a small unmanned aircraft system may not carry hazardous material. There is no 'small amount' allowance, that is the trap. The answer is no carriage of hazardous material at all.",
        sourceLessonNumber: 8,
      },
      {
        prompt: "You drop an object from your drone in a way that could endanger people below. Which rule does that violate?",
        options: [
          "The careless or reckless operation rule (107.23)",
          "The hazardous material rule (107.36)",
          "The right-of-way rule (107.37)",
          "No rule addresses dropping objects from a drone",
        ],
        correctIndex: 0,
        explanation:
          "Per 14 CFR 107.23, you may not drop an object from a drone in a way that creates a danger to people or property, and you may not operate carelessly or recklessly. It is the catch-all rule.",
        sourceLessonNumber: 8,
      },
      {
        prompt: "Under the right-of-way rule, when may your drone pass over, under, or ahead of another aircraft?",
        options: [
          "Whenever you have visual line of sight on it",
          "Never, under any circumstances",
          "Only if your drone is below 400 feet",
          "Only when you are well clear and not forcing the other aircraft to change course",
        ],
        correctIndex: 3,
        explanation:
          "Per 14 CFR 107.37, you may not pass over, under, or ahead of another aircraft unless you are well clear of it, meaning you are not forcing that aircraft to change where it was going.",
        sourceLessonNumber: 8,
      },
    ],
  },

  {
    moduleOrder: 2,
    title: "Regulations: Operations Over People",
    passingScore: 80,
    questionsPerAttempt: 8,
    shuffleOptions: true,
    afterLessonNumber: 11, // after "Over Moving Vehicles, Assemblies & Waivers" — covers lessons 9-11
    questions: [
      // ---- Ported VERBATIM from CSV "Regulation Quiz 4" (11) ----
      {
        prompt:
          "A remote pilot owns a Category 1 sUAS, and is current. They want to take videos of their friend riding her bike, hovering over her while she rides. The operation is on a busy sidewalk in a city park. Is this legal under Part 107?",
        options: [
          "Yes, as long as the park is not busy enough that it would be considered an open-air assembly of human beings.",
          "No, the other people in the park are not on notice.",
          "Yes, category 1 can fly over people.",
        ],
        correctIndex: 1,
        explanation:
          '"No, the other people in the park are not on notice" is right because a bicycle counts as a moving vehicle, and flying over moving vehicles requires either a closed or restricted access site where everyone in the vehicles is on notice, or no sustained flight, and hovering over the rider on a public sidewalk is sustained flight with no notice. The option allowing it if the park is not an open air assembly is wrong because the problem is sustained flight over a moving vehicle, not crowd size. The option saying Category 1 can simply fly over people is wrong because Category 1 still does not allow sustained flight over moving vehicles outside a closed site with notice.',
        sourceLessonNumber: 11,
      },
      {
        prompt: "A Declaration of Compliance will be issued when...",
        options: [
          "After a person or entity submits the MOC paperwork for review.",
          "The FAA issues an airworthiness certificate for that aircraft.",
          "The FAA receives the necessary paperwork confirming a drone complies with the associated regulations.",
        ],
        correctIndex: 2,
        explanation:
          "The correct answer is right because a Declaration of Compliance is accepted once the FAA receives the paperwork showing the drone meets the associated rules, either Remote ID or operations over people. The MOC option is wrong because a Means of Compliance is a separate document that defines a test method, not the declaration itself. The airworthiness certificate option is wrong because that is the path for Category 4 aircraft under Part 21, not what a Declaration of Compliance is.",
        sourceLessonNumber: 10,
      },
      {
        prompt: "To conduct Category 2 operations, the remote Pilot in Command must use a small Unmanned aircraft that",
        options: [
          "must not cause injury to a human being equivalent to 11 ft-lb of kinetic energy.",
          "must have an approved type certificate issued under Part 21.",
          "must not cause injury to a human being equivalent to 25 ft-lb of kinetic energy.",
        ],
        correctIndex: 0,
        explanation:
          "The correct answer is right because a Category 2 small unmanned aircraft must not cause injury to a person greater than the equivalent of 11 foot-pounds of kinetic energy on impact. The type certificate option is wrong because a Part 21 certificate is a Category 4 requirement, not a Category 2 one. The 25 foot-pounds option is wrong because that higher energy limit applies to Category 3, not Category 2.",
        sourceLessonNumber: 9,
      },
      {
        prompt:
          "A remote pilot purchased a new sUAS that is labeled as Category 3. After checking the FAA website, they verified it is indeed approved to fly over people. For this mission, the pilot plans to fly over a private race track. What must they do to ensure that the operation is compliant with Part 107?",
        options: [
          "Ensure the aircraft is equipped with a parachute.",
          "Ensure that the area is restricted-access and that everyone inside moving vehicles inside the area are on notice.",
          "Ensure that everyone inside moving vehicles inside the area are on notice.",
        ],
        correctIndex: 1,
        explanation:
          "The correct answer is right because flying over moving vehicles with a Category 1 to 3 drone requires staying within a closed or restricted-access site and having everyone in the moving vehicles on notice, which a private race track can satisfy. The parachute option is wrong because Part 107 has no parachute requirement for flight over people or vehicles. The on-notice-only option is wrong because notice alone is not enough; the site must also be closed or restricted-access when you maintain that kind of flight over moving vehicles.",
        sourceLessonNumber: 11,
      },
      {
        prompt: "To conduct Category 4 operations, the RPIC must use a small UA that:",
        options: [
          "does not contain any exposed rotating parts that would lacerate human skins upon impact.",
          "has an airworthiness certificate issued under Part 21.",
          "is labeled as Category 4.",
        ],
        correctIndex: 1,
        explanation:
          "The correct answer is right because Category 4 operations require a small unmanned aircraft that holds an airworthiness certificate issued under Part 21. The exposed rotating parts option is wrong because the no-laceration rule applies to Categories 1 through 3, not Category 4. The Category 4 label option is wrong because labeling is required for Categories 2 and 3, while Category 4 is defined by its airworthiness certificate, not a label.",
        sourceLessonNumber: 9,
      },
      {
        prompt: "Can a Category 3 aircraft be flown over an open-air assembly of humans while transiting from point to point?",
        options: [
          "No, it is not permitted.",
          "Yes, as long as it meets Remote ID requirements.",
          "Yes. It is permitted without limitations.",
        ],
        correctIndex: 0,
        explanation:
          "The correct answer is right because a Category 3 drone may never operate over an open-air assembly of people, and that prohibition includes transiting over the assembly. The Remote ID option is wrong because meeting Remote ID does not lift the Category 3 ban over open-air assemblies. The without-limitations option is wrong because Category 3 operations over people carry strict limits and the open-air assembly is flatly off limits.",
        sourceLessonNumber: 11,
      },
      {
        prompt: "Can a sUAS weighing .35 lbs be flown over an open-air assembly of human beings if it's equipped with prop guards.",
        options: [
          "Yes, as long as the aircraft is equipped with an anti-collision light visible from 3SM.",
          "No, only transiting flights are allowed.",
          "Yes, as long as the sUAS is equipped with Remote ID.",
        ],
        correctIndex: 2,
        explanation:
          "The correct answer is right because a 0.35 pound drone is a Category 1 aircraft, and a Category 1 sUAS may fly over an open-air assembly only if it meets Remote ID requirements. The anti-collision light option is wrong because a light visible for 3 statute miles is a night-operation rule, not the gate for flying over an assembly. The transiting-only option is wrong because Category 1 aircraft that meet the requirements can fly over an assembly, not just transit it; that transit-only limit applies to Category 3.",
        sourceLessonNumber: 9,
      },
      {
        prompt: "Who must retain maintenance records of category 4 aircraft?",
        options: ["The FAA.", "The Remote Pilot in Command (RPIC).", "The owner of the aircraft."],
        correctIndex: 2,
        explanation:
          "The correct answer is right because the owner of a Category 4 aircraft must keep and maintain the records of maintenance, preventive maintenance, alterations, and inspection status. The FAA option is wrong because the agency does not hold these records for the operator; it can request them but the duty to retain falls on the owner. The Remote Pilot in Command option is wrong because the recordkeeping duty is tied to ownership of the aircraft, not to whoever happens to fly it.",
        sourceLessonNumber: 9,
      },
      {
        prompt: "Which best describes a declaration of compliance?",
        options: [
          "A document issued by the FAA stating an aircraft is airworthy.",
          "A document submitted to the FAA stating that a drone complies with either Remote ID requirements or OOP Requirements.",
          "A document approved by the FAA that details testing methods for remote ID or OOP.",
        ],
        correctIndex: 1,
        explanation:
          "The correct answer is right because a Declaration of Compliance is a document submitted to the FAA stating that a drone meets either Remote ID requirements or operations over people requirements. The airworthiness option is wrong because that describes an FAA-issued airworthiness statement, while a Declaration of Compliance is submitted to the FAA by the responsible party. The testing methods option is wrong because describing test methods is the role of a Means of Compliance, a different document.",
        sourceLessonNumber: 10,
      },
      {
        prompt:
          "While flying at the beach, a remote pilot notices a cruise ship underway and flies over the ship to get a top-down view. Is this legal under Part 107, assuming the remote pilot is certificated and current?",
        options: [
          "Yes, the deck is considered a closed site.",
          "Yes, as long as the aircraft is equipped with remote ID.",
          "No, the people on the deck are not on notice.",
        ],
        correctIndex: 2,
        explanation:
          "The correct answer is right because a cruise ship is a moving vehicle, so flying over it requires a closed or restricted-access site with the occupants on notice, and passengers on an open deck are not on notice. The closed-site option is wrong because a public cruise ship deck is not a closed or restricted-access site. The Remote ID option is wrong because equipping Remote ID does not satisfy the separate rules for sustained flight over moving vehicles.",
        sourceLessonNumber: 11,
      },
      {
        prompt: "Other than the UAS weighing 0.55 lbs or less on takeoff, what are the other requirements to conduct Category 1 operations?",
        options: [
          "It must not have safety defects and must be labeled as Category 1.",
          "It must not contain exposed rotating parts that can lacerate and must not cause injury equivalent to 11 ft-lb of kinetic energy.",
          "It must not contain exposed rotating parts that can lacerate.",
        ],
        correctIndex: 2,
        explanation:
          "The correct answer is right because the only other Category 1 requirement, beyond weighing 0.55 pounds or less on takeoff, is that the aircraft must not contain exposed rotating parts that would lacerate human skin on impact. The safety-defect and label option is wrong because no-defect and labeling rules apply to Categories 2 and 3, not Category 1. The 11 foot-pounds option is wrong because the kinetic energy limit is a Category 2 standard, not a Category 1 requirement.",
        sourceLessonNumber: 9,
      },
      // ---- NEW, grounded in lessons 9-11 ----
      {
        prompt: "What is the maximum takeoff weight for a Category 1 small unmanned aircraft?",
        options: ["0.55 pounds (250 grams) or less", "11 pounds or less", "25 pounds or less", "55 pounds or less"],
        correctIndex: 0,
        explanation:
          "Per 14 CFR 107.110, a Category 1 small unmanned aircraft weighs 0.55 pounds (250 grams) or less at takeoff and throughout the flight, and has no exposed rotating parts that could lacerate skin.",
        sourceLessonNumber: 9,
      },
      {
        prompt: "What is the maximum kinetic energy a Category 3 small unmanned aircraft may transfer to a person on impact?",
        options: ["11 foot-pounds", "25 foot-pounds", "55 foot-pounds", "There is no energy limit for Category 3"],
        correctIndex: 1,
        explanation:
          "Per 14 CFR 107.125, a Category 3 aircraft must not transfer more than 25 foot-pounds of kinetic energy on impact. The 11 foot-pound cap is the Category 2 limit, that is the trap.",
        sourceLessonNumber: 9,
      },
      {
        prompt: "Which drone categories require a listed, FAA-accepted Declaration of Compliance to fly over people?",
        options: ["All four categories", "Category 1 only", "Category 2 and Category 3", "Category 4 only"],
        correctIndex: 2,
        explanation:
          "Per 14 CFR 107.160, only Category 2 and Category 3 require a listed, FAA-accepted Declaration of Compliance. Category 1 is self-certified, and Category 4 uses an airworthiness certificate under Part 21. The trap answer is 'all four.'",
        sourceLessonNumber: 10,
      },
      {
        prompt: "What is the difference between a Means of Compliance (MOC) and a Declaration of Compliance (DOC)?",
        options: [
          "The MOC is the manufacturer's statement of compliance; the DOC is the test method",
          "The MOC is the FAA-accepted test method; the DOC is the manufacturer's statement that the drone meets it",
          "They are two names for the same document",
          "The MOC is issued by the FAA; the DOC is issued by the remote pilot",
        ],
        correctIndex: 1,
        explanation:
          "Per 14 CFR 107.155 and 107.160, the Means of Compliance is the FAA-accepted test method (the standard you test against), and the Declaration of Compliance is the manufacturer's statement that the drone was tested by that method and passed. One is the rulebook, the other is the report card.",
        sourceLessonNumber: 10,
      },
      {
        prompt: "Under Part 107, which drones must broadcast Remote ID?",
        options: [
          "Only drones over 0.55 pounds",
          "Only drones flown over people",
          "Every drone flown under Part 107, because each one must be registered",
          "Only Category 2 and Category 3 drones",
        ],
        correctIndex: 2,
        explanation:
          "Per 14 CFR Part 89, if a drone must be registered it must have Remote ID. Under Part 107 every drone you fly must be registered, so every Part 107 drone needs Remote ID. The trap is thinking a sub-250-gram drone is always exempt.",
        sourceLessonNumber: 10,
      },
      {
        prompt: "To maintain sustained flight (hovering) over moving vehicles, which two conditions must both be met?",
        options: [
          "A Remote ID module and daylight",
          "A closed or restricted-access site AND everyone in the vehicles on notice",
          "A parachute and an anti-collision light",
          "Nothing special, as long as the drone is Category 1",
        ],
        correctIndex: 1,
        explanation:
          "Per 14 CFR 107.145, sustained flight over a moving vehicle requires a closed or restricted-access site AND everyone in the vehicles on notice (written notice is best). Transiting only requires that you not linger. Either way the drone must be Category 1, 2, or 3.",
        sourceLessonNumber: 11,
      },
    ],
  },

  {
    moduleOrder: 4,
    title: "Radio Communications Quiz",
    questions: [
      {
        prompt:
          "You want to know where manned traffic is around a non-towered airport near your job site. Which frequency do you monitor?",
        options: ["UNICOM", "The CTAF", "The AWOS weather frequency"],
        correctIndex: 1,
        explanation:
          "Traffic position reports live on the CTAF (Common Traffic Advisory Frequency). UNICOM is an advisory service for airport information such as the runway in use, wind, and fuel. AWOS just reads out automated weather.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "An airport has no CTAF and no UNICOM listed. Which frequency do you listen on?",
        options: ["122.9, the MULTICOM frequency", "121.5, the emergency frequency", "123.0, the tower frequency"],
        correctIndex: 0,
        explanation:
          "MULTICOM is 122.9. It is the shared national frequency used only when no other frequency is assigned to an airport.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "When may a Part 107 remote pilot transmit on an aviation radio frequency?",
        options: [
          "Any time, to announce the drone's position like any other pilot",
          "Only in a true emergency, such as the drone being about to hit an aircraft",
          "Any time, as long as the airport is non-towered",
        ],
        correctIndex: 1,
        explanation:
          "A remote pilot listens for situational awareness and does not transmit during normal operations. Transmitting on an aviation frequency otherwise requires an FCC license; the only exception is a true emergency.",
        sourceLessonNumber: 1,
      },
      {
        prompt: 'How is the frequency 122.8 spoken on the radio?',
        options: ['"One twenty-two point eight"', '"One two two point eight"', '"One hundred twenty-two, eight"'],
        correctIndex: 1,
        explanation:
          "Frequencies are read one digit at a time, with the decimal spoken as 'point'. The trap answer reads the number the way you would say it in ordinary conversation.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "You hear a call reporting traffic at your ten o'clock. What is that clock position measured against?",
        options: [
          "True north, the same reference a chart uses",
          "Magnetic north, the same reference a compass uses",
          "The direction the reporting aircraft's nose is pointed",
        ],
        correctIndex: 2,
        explanation:
          "Clock position is relative to the direction the aircraft is pointed: 12 o'clock is straight ahead, 3 o'clock is off the right side, 6 o'clock is behind, 9 o'clock is off the left side. Picture the nose on the heading first, then place the clock.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "At a non-towered airport, are pilots required to make position reports on the CTAF?",
        options: [
          "Yes, every aircraft in the pattern must self-announce",
          "No, position reports are recommended but optional, so silence does not mean the sky is clear",
          "Only aircraft without a transponder must self-announce",
        ],
        correctIndex: 1,
        explanation:
          "Position reports at a non-towered airport are recommended, not required. An aircraft can be in the pattern without ever making a call, so you must keep scanning visually and never assume silence means no traffic.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "On a sectional chart, how is the CTAF marked?",
        options: [
          "A bold letter C inside a circle next to the frequency",
          "A star next to the frequency",
          "The frequency is printed in bold magenta",
        ],
        correctIndex: 0,
        explanation:
          "A bold C inside a circle marks the CTAF. The common trap is grabbing the AWOS or ASOS weather frequency printed nearby in the same data block.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "A manned aircraft is inbound to land while you are flying nearby. Who yields?",
        options: [
          "The manned aircraft, because your drone is smaller and less maneuverable",
          "Your drone. Manned aircraft have the right of way, and you must not interfere with their operation",
          "Whoever saw the other one first",
        ],
        correctIndex: 1,
        explanation:
          "Your drone yields, always. Manned aircraft have the right of way and you may not operate so close as to create a collision hazard, so stay well clear of the traffic pattern and especially the final approach path, that low straight line where planes come in to land.\n\nReference: 14 CFR § 107.37 (operation near aircraft; right-of-way rules).",
        sourceLessonNumber: 6,
      },
      {
        prompt: "Almost every call sign for a U.S.-registered aircraft starts with the same phonetic word. Which one?",
        options: ["Alpha", "November", "Uniform"],
        correctIndex: 1,
        explanation:
          "Every U.S. tail number starts with the letter N, spoken 'November', for example November 342 Sierra Alpha. The tail number is the aircraft's registration, like a license plate, and the pilot uses it as their call sign.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "Why do pilots say 'niner' instead of 'nine' on the radio?",
        options: [
          "It is the Morse-code convention carried over to voice",
          "So it is not confused with other words or numbers over a fuzzy radio",
          "It marks the number as part of a runway designation rather than an altitude",
        ],
        correctIndex: 1,
        explanation:
          "A fuzzy radio drops sounds, so a few numbers are deliberately reshaped: 'tree' for three (the 'th' is hard to hear), 'fife' for five, and 'niner' for nine so it is not mixed up with 'five' or the German word for no. 'Niner' sticks around because it is just different enough to matter.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "A self-announce position report at a non-towered airport follows a fixed five-part order. What is it?",
        options: [
          "Call sign, airport name, altitude, intention, call sign again",
          "Airport name, who they are, where they are, what they intend to do, airport name again",
          "Airport name, runway in use, wind, who they are, where they are",
        ],
        correctIndex: 1,
        explanation:
          "The order is: airport name ('Sedona traffic'), who they are ('Cessna one two three Bravo Foxtrot'), where they are ('ten miles south'), what they intend to do ('inbound for landing'), then the airport name again. Memorize the ORDER, not the exact words.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "Why does a pilot say the airport name twice, at the start AND the end of a position report?",
        options: [
          "Because one CTAF frequency can be shared by several airports, so listeners need to know which airport the call is about",
          "Because FAA regulations require the airport name to bracket every transmission",
          "Because the first call is for the tower and the second is for other pilots",
        ],
        correctIndex: 0,
        explanation:
          "CTAF frequencies are shared: one frequency can cover several airports spread across the map. A pilot listening might pick up calls from two different airports at once, so naming the airport at both ends tells everyone which field this call is about.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "Which frequency can actually connect you to a person on the ground at the airport?",
        options: [
          "UNICOM, which can reach a ground station such as a fuel desk",
          "MULTICOM, which is staffed by a regional FAA operator",
          "CTAF, which is always staffed during daylight hours",
        ],
        correctIndex: 0,
        explanation:
          "UNICOM is the front desk: a private advisory service, often just a person at the airport, who can pass along the runway in use, the wind, or fuel. MULTICOM (122.9) is purely pilot-to-pilot with nobody staffing a radio, and the CTAF is the pilots' self-announce channel, not a staffed station.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "You look up a small airport and its CTAF and UNICOM are listed as the SAME frequency. What does that mean?",
        options: [
          "The listing is an error; they are never the same",
          "One frequency does both jobs at that field, so you listen on that single number",
          "The airport's tower is closed and the frequency has been temporarily merged",
        ],
        correctIndex: 1,
        explanation:
          "At many small airports the traffic channel and the front desk share one frequency. Same channel, two jobs. You listen on that single number for both position reports and airport information.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "A controller first calls an aircraft 'November three four two Sierra Alpha', then later just '2 Sierra Alpha'. What happened?",
        options: [
          "A second, different aircraft entered the frequency",
          "The controller shortened the call sign after first contact, same aircraft",
          "The aircraft switched from its tail number to its airline flight number",
        ],
        correctIndex: 1,
        explanation:
          "After first contact a controller often shortens the call sign to the last few characters. Same airplane, shorter name. Airlines work differently: they use a company name and flight number ('United 146'), and that flight number does NOT match the aircraft's tail number.",
        sourceLessonNumber: 5,
      },
    ],
  },

  {
    moduleOrder: 5,
    title: "Airspace Quiz",
    questions: [
      {
        prompt:
          "A Class D airspace tops out at 9,100 feet MSL. The airport elevation is 6,547 feet MSL. About how tall is that airspace above the ground?",
        options: ["About 9,100 feet AGL", "About 2,553 feet AGL", "About 6,547 feet AGL"],
        correctIndex: 1,
        explanation:
          "Subtract the ground out: 9,100 MSL minus 6,547 MSL equals 2,553 feet AGL, which lands right near the usual 2,500-foot Class D height. The trap answer is the raw MSL number printed in the question, which is height above the sea, not above the ground.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "Which airspace requires ATC authorization before you fly a Part 107 mission in it?",
        options: [
          "Class G",
          "Class B, Class C, Class D, and surface Class E around an airport",
          "All airspace, including Class G",
        ],
        correctIndex: 1,
        explanation:
          "Controlled airspace that touches the ground (Class B, C, D, and the surface area of Class E designated for an airport) requires prior ATC authorization. Class G is uncontrolled and needs none.\n\nReference: 14 CFR § 107.41 (operation in certain airspace).",
        sourceLessonNumber: 2,
      },
      {
        prompt: "When Class E airspace does not start at the surface, where does it most commonly begin?",
        options: ["700 feet MSL", "1,200 feet AGL", "18,000 feet MSL"],
        correctIndex: 1,
        explanation:
          "Class E commonly starts at 1,200 feet AGL, and sometimes at 700 feet AGL near an airport. Because you fly at or below 400 feet, you are normally in Class G underneath it. Watch the reference: those low Class E floors are AGL, while the high western exception (14,500 feet) is MSL.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "Class C airspace has two layers. What is the floor of the outer shelf?",
        options: [
          "The surface, the same as the inner core",
          "1,200 feet above the ground",
          "4,000 feet above the ground",
        ],
        correctIndex: 1,
        explanation:
          "The inner core has a 5 nautical mile radius and runs from the surface up to 4,000 feet above the ground. The outer shelf has a 10 nautical mile radius and its floor sits at 1,200 feet above the ground, so a drone at or below 400 feet never enters it.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "What does the Mode C veil mean for a Part 107 drone pilot?",
        options: [
          "Nothing. It is a transponder requirement for crewed aircraft, not airspace you need authorization to enter",
          "It is a 30 nautical mile ring you may never fly a drone inside",
          "It requires LAANC authorization just like Class C",
        ],
        correctIndex: 0,
        explanation:
          "The Mode C veil is a 30 nautical mile radius ring in which crewed aircraft must carry a Mode C transponder. It is an equipment rule for those aircraft. It is not airspace that requires drone authorization. The trap answer treats the veil as a class of airspace.",
        sourceLessonNumber: 6,
      },
      {
        prompt: "What is the difference between a prohibited area and a restricted area?",
        options: [
          "You can never get permission to enter a prohibited area; for a restricted area you contact the controlling agency, because it may be active or inactive",
          "Both are permanently closed to all aircraft, including drones",
          "A restricted area is permanently closed; a prohibited area only applies at night",
        ],
        correctIndex: 0,
        explanation:
          "Prohibited (P) areas are exactly that: no permission is available. Restricted (R) areas can be active or inactive and may be turned on by NOTAM, so the right move is always to contact the controlling agency and find out.",
        sourceLessonNumber: 7,
      },
      {
        prompt:
          "A stadium seating 40,000 people is hosting an NFL game. What temporary flight restriction applies around it?",
        options: [
          "1 nautical mile radius up to 1,000 feet AGL, during the game only",
          "3 nautical mile radius up to 3,000 feet AGL, from one hour before to one hour after the event",
          "5 nautical mile radius up to 5,000 feet AGL, for the whole day of the event",
        ],
        correctIndex: 1,
        explanation:
          "The standing stadium restriction is a 3 nautical mile radius, up to 3,000 feet AGL, from one hour before to one hour after the event, at any stadium seating 30,000 or more (MLB, NFL, NCAA Division I football, and major motor speedway events).",
        sourceLessonNumber: 7,
      },
      {
        prompt: "On a UAS Facility Map, what does the number printed in a grid square mean?",
        options: [
          "The maximum altitude in feet AGL you can get near-instant LAANC approval for at that spot",
          "The ceiling of the controlled airspace above that spot, in feet MSL",
          "The number of days the FAA takes to approve a request there",
        ],
        correctIndex: 0,
        explanation:
          "Each grid number is the maximum altitude in feet AGL eligible for near-instant LAANC approval at that spot. A zero means you are too close to the airport for instant approval and must request authorization through FAA DroneZone.",
        sourceLessonNumber: 8,
      },
      {
        prompt:
          "You are flying over flat ground, then cross a 200-foot hill. What happens to your legal altitude ceiling?",
        options: [
          "It stays fixed at 400 feet above your takeoff point",
          "It rises with the hill, the 400-foot limit is measured above the ground beneath you",
          "It drops to 200 feet to keep you clear of the terrain",
        ],
        correctIndex: 1,
        explanation:
          "The 400-foot limit is an AGL number and it follows the dirt. Over a flat field you stay 400 feet over the field; over a 200-foot hill the ceiling rises with the hill. (You may also fly within 400 feet of a structure.)\n\nReference: 14 CFR § 107.51 (operating limitations for small unmanned aircraft).",
        sourceLessonNumber: 1,
      },
      {
        prompt: "How many airspace classes are there in the United States, and which letter is missing?",
        options: [
          "Six: A, B, C, D, E, and G. There is no Class F in the United States",
          "Seven: A through G, all of them in use",
          "Five: A, B, C, D, and G. There is no Class E or F",
        ],
        correctIndex: 0,
        explanation:
          "Six classes: A, B, C, D, E, and G. There is no Class F in the United States. Five of them (A, B, C, D, E) are controlled; only Class G is uncontrolled. Class A starts at 18,000 feet MSL and runs up to 60,000, so a drone at or below 400 feet never touches it.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "What shape and size is Class D airspace?",
        options: [
          "Two stacked layers: a 5 nautical mile core and a 10 nautical mile shelf",
          "A single cylinder, roughly a 4 nautical mile radius, up to about 2,500 feet above the airport",
          "An upside-down wedding cake topping out around 10,000 feet MSL",
        ],
        correctIndex: 1,
        explanation:
          "Class D is the simplest shape in the system: ONE cylinder, no stacked layers, about a 4 nautical mile radius, reaching up to roughly 2,500 feet above the airport. Two stacked layers is Class C; the upside-down wedding cake is Class B. It starts at the surface, so you are inside it from the moment you launch.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "Class B is measured differently from most airspace. How is its top given, and roughly where is it?",
        options: [
          "In feet AGL, around 4,000 feet above the ground",
          "In feet MSL, generally around 10,000 feet MSL (some airports lower)",
          "In flight levels, at FL180",
        ],
        correctIndex: 1,
        explanation:
          "Class B's top is given in MSL, measured from sea level, not from the dirt, and generally sits around 10,000 feet MSL, though plenty of airports run lower (Phoenix tops at 9,000). Class B is the most restrictive controlled airspace there is: even a manned pilot needs a clearance to enter it.",
        sourceLessonNumber: 6,
      },
      {
        prompt: "Your airport is not in the LAANC system. How do you request authorization, and how long can it take?",
        options: [
          "Through an approved LAANC app anyway; it just takes a few extra minutes",
          "Through the FAA DroneZone website, which the page warns can take up to 90 days",
          "You cannot get authorization at all; the airspace is closed to drones",
        ],
        correctIndex: 1,
        explanation:
          "Airports outside LAANC take a manual request through FAA DroneZone. The page warns it can take up to 90 days (in practice usually a week or two), so plan ahead. LAANC covers a bit over 700 airports, roughly 80 percent of controlled airspace, and returns approval in seconds when you stay at or below the grid number.",
        sourceLessonNumber: 8,
      },
      {
        prompt: "A TFR is active over a wildfire. Where would you have found out about it, given that no printed chart shows it?",
        options: [
          "On the sectional chart, marked with a blue comb line",
          "As a NOTAM, check tfr.faa.gov or call 1-800-WX-BRIEF before every flight",
          "On the UAS Facility Map grid, as a square marked zero",
        ],
        correctIndex: 1,
        explanation:
          "TFRs are temporary, so no paper chart shows them. They go out as NOTAMs, and you check tfr.faa.gov or call 1-800-WX-BRIEF for a live briefing before every flight. They pop up over wildfires and disasters, major accidents, space launches, and VIP travel (a 30-mile bubble that rides along with the President).",
        sourceLessonNumber: 7,
      },
      {
        prompt: "A military operating area (MOA) near your job site is active. May you fly there?",
        options: [
          "Yes, you are allowed in even when it is active, but use extreme caution",
          "No. An active MOA is closed to all civil aircraft, including drones",
          "Only after you contact the controlling agency for permission",
        ],
        correctIndex: 0,
        explanation:
          "An MOA is where military jets train, nothing is exploding, but jets and helicopters fly low and fast. You are permitted in, even when it is active, but use extreme caution. That makes it different from a restricted area (contact the controlling agency) and a prohibited area (never). On the chart an MOA wears a magenta comb line; prohibited, restricted, and warning areas wear a blue one.",
        sourceLessonNumber: 7,
      },
    ],
  },

  {
    moduleOrder: 6,
    title: "Sectional Charts Quiz",
    questions: [
      {
        prompt: "On a sectional chart, a dashed blue line marks the boundary of which airspace?",
        options: ["Class B", "Class C", "Class D"],
        correctIndex: 2,
        explanation:
          "Dashed blue is Class D. Hold the whole set: solid blue is Class B, solid magenta is Class C, dashed blue is Class D, dashed magenta is Class E starting at the surface.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "A faded (soft-edged) magenta band on a sectional chart tells you what?",
        options: [
          "Class C airspace, because of the magenta color",
          "Class E airspace starting at 700 feet AGL",
          "Class E airspace starting at the surface",
        ],
        correctIndex: 1,
        explanation:
          "A faded magenta band is Class E beginning at 700 feet AGL, with Class G below it. People call it Class C because of the color, which is the trap. Class C is a SOLID magenta line, and a surface Class E is a DASHED magenta line.",
        sourceLessonNumber: 3,
      },
      {
        prompt:
          "An obstacle symbol on a sectional prints two numbers: a bold number on top and a number in parentheses below it. What is the number in parentheses?",
        options: [
          "The obstacle's height above the ground (AGL)",
          "The obstacle's height above sea level (MSL)",
          "The obstacle's lighting code",
        ],
        correctIndex: 0,
        explanation:
          "The bold top number is the tip height above sea level (MSL). The number in parentheses is the structure's height above the ground (AGL). When a question asks how tall a tower is above the ground, read the parentheses.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "What is the maximum elevation figure (MEF), the large light-blue number in the middle of a grid box?",
        options: [
          "The ceiling of the controlled airspace in that box",
          "The tallest terrain or obstacle in that box, in feet above sea level, rounded up",
          "The maximum altitude a drone may fly in that box",
        ],
        correctIndex: 1,
        explanation:
          "The MEF gives the highest terrain or obstacle inside that grid box, in feet MSL, rounded up. It is a terrain-clearance figure, not an airspace ceiling and not a drone altitude limit.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "An airport symbol on a sectional is printed in magenta. What does the color tell you?",
        options: [
          "The airport has a control tower",
          "The airport has no control tower",
          "The airport has fuel and services",
        ],
        correctIndex: 1,
        explanation:
          "Magenta means no control tower; blue means there is a tower. The runway drawing tells you about the runways, and the tick marks around the symbol mean fuel and services. The color is what tells you about the tower.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "What is the scale of a sectional chart?",
        options: [
          "1 to 250,000 (about 3.5 miles per inch)",
          "1 to 500,000 (about 7 miles per inch)",
          "1 to 1,000,000 (about 14 miles per inch)",
        ],
        correctIndex: 1,
        explanation:
          "A sectional is drawn at 1 to 500,000, roughly 7 miles per inch. The legend on the chart decodes every symbol, color, and line.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "In a coordinate such as 47°40'N, 122°16'W, which value is read first, and how many minutes are in one degree?",
        options: [
          "Longitude first; 100 minutes in a degree",
          "Latitude first; 60 minutes in a degree",
          "Latitude first; 100 minutes in a degree",
        ],
        correctIndex: 1,
        explanation:
          "Latitude is always written and read first, longitude second, and one degree equals 60 minutes. Each small tick mark along the line is one minute, so you count ticks to read the minutes. Latitude lines run across the chart; longitude lines run up and down.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "A solid magenta line encircles an airport on the chart. Which airspace is that, and do you need authorization?",
        options: [
          "Class C, and yes, you need FAA authorization",
          "Class E at 700 feet AGL, and no authorization is needed down low",
          "Class D, and yes, you need FAA authorization",
        ],
        correctIndex: 0,
        explanation:
          "A solid magenta line is Class C, which touches the surface and requires authorization (fastest through LAANC). Dashed blue would be Class D; a faded magenta band would be Class E starting at 700 feet AGL with Class G below it.",
        sourceLessonNumber: 8,
      },
      {
        prompt: "A faded BLUE band on a sectional chart marks what?",
        options: [
          "Class B airspace, because of the blue color",
          "Class E starting at 1,200 feet AGL",
          "Class D airspace whose tower is closed",
        ],
        correctIndex: 1,
        explanation:
          "A faded blue band is Class E starting at 1,200 feet AGL. Faded means a floor up in the air, not at the surface. Hold the pair together: faded MAGENTA is Class E at 700 feet, faded BLUE is Class E at 1,200 feet. Class B is a sharp SOLID blue line, not a soft band.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "Near an airport you see two numbers stacked like a fraction: 100 over 40. What does that mean?",
        options: [
          "The airspace runs from 4,000 feet up to 10,000 feet MSL",
          "The airspace runs from 40 feet up to 100 feet AGL",
          "The airspace ceiling is 10,000 feet and the airport elevation is 4,000 feet",
        ],
        correctIndex: 0,
        explanation:
          "Top number is the ceiling, bottom number is the floor, both in feet MSL, with the last two zeros dropped to save space. So 100 over 40 is 4,000 feet up to 10,000 feet. If the bottom reads SFC, the airspace starts at the surface.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "Small tick marks stick out around the edge of an airport symbol, like spokes on a wheel. What do they mean?",
        options: [
          "The airport has fuel and services available",
          "The airport has a control tower",
          "The number of runways at the field",
        ],
        correctIndex: 0,
        explanation:
          "Ticks (spokes) mean fuel and services are available during normal business hours. It is a fast visual: spokes equal gas. The COLOR of the symbol is what tells you about the tower (magenta = no tower, blue = tower), and the runway drawing inside the symbol tells you about the runways.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "Special use airspace is outlined with a fat comb-tooth line. What do the two comb colors tell you?",
        options: [
          "Blue comb = prohibited, restricted, and warning areas; magenta comb = MOAs and alert areas",
          "Blue comb = active right now; magenta comb = inactive right now",
          "Blue comb = you may enter with permission; magenta comb = you may never enter",
        ],
        correctIndex: 0,
        explanation:
          "Same comb shape, two colors. Prohibited (P), Restricted (R), and Warning (W) areas wear a BLUE comb. Military operating areas (MOA) and Alert (A) areas wear a MAGENTA comb. The letter inside the outline tells you which type it is. The color says nothing about whether the area is active.",
        sourceLessonNumber: 7,
      },
      {
        prompt: "You need a close-up of the crowded airspace around a big airport. A sectional is too coarse. What chart do you switch to?",
        options: ["A terminal area chart", "A world aeronautical chart", "A UAS Facility Map"],
        correctIndex: 0,
        explanation:
          "A terminal area chart is the zoomed-in version: same symbols, more detail, smaller area. A sectional is drawn at 1 to 500,000 (about 7 miles per inch), so it covers a wide area but cannot show fine detail. (The UAS Facility Map is a different tool entirely, it shows LAANC approval ceilings, not chart symbology.)",
        sourceLessonNumber: 1,
      },
      {
        prompt: "The tick marks running up the side edge of a sectional double as a distance ruler. How?",
        options: [
          "One minute of latitude equals one statute mile",
          "One minute of latitude equals one nautical mile",
          "One degree of latitude equals one nautical mile",
        ],
        correctIndex: 1,
        explanation:
          "One minute of latitude equals one nautical mile, so if two points are ten latitude ticks apart they are about ten nautical miles apart. Each tick along the line is one minute, and one degree is 60 of them.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "At a TOWERED airport, which frequency is the CTAF?",
        options: [
          "There is no CTAF at a towered airport",
          "The control tower frequency (labeled CT) is the CTAF while the tower is open",
          "The ground control frequency is always the CTAF",
        ],
        correctIndex: 1,
        explanation:
          "While the tower is open, the control tower frequency (labeled CT on the chart, like 'CT 118.3') IS the CTAF. When the tower closes for the night, pilots switch to a different listed frequency to self-announce.",
        sourceLessonNumber: 6,
      },
    ],
  },

  {
    moduleOrder: 7,
    title: "Weather Theory Quiz",
    questions: [
      {
        prompt: "What are the standard atmosphere values at sea level?",
        options: [
          "15 degrees Celsius and 29.92 inches of mercury",
          "15 degrees Celsius and 30.12 inches of mercury",
          "59 degrees Celsius and 29.92 inches of mercury",
        ],
        correctIndex: 0,
        explanation:
          "Standard sea level is 15 degrees Celsius (59 Fahrenheit) and 29.92 inches of mercury (1013.2 millibars). Read both halves of every choice: the trap pairs a correct temperature with a wrong pressure.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "The temperature and dew point in a report are very close together. What should you expect?",
        options: [
          "Strong winds and turbulence",
          "The air is near saturation, so fog or low clouds are likely",
          "Dry, clear air with excellent visibility",
        ],
        correctIndex: 1,
        explanation:
          "The spread is the gap between temperature and dew point. A small spread means the air is close to saturation, so fog and low clouds are likely and visibility can drop below the 3 statute miles Part 107 requires. A large spread means dry air.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "On a weather map, the isobars are packed closely together. What does that tell you?",
        options: ["Light wind", "Strong wind", "Nothing about wind; isobars show temperature"],
        correctIndex: 1,
        explanation:
          "Isobars are lines of equal pressure. The closer they sit, the steeper the pressure gradient and the faster the wind. Tight lines, fast wind. Widely spaced isobars mean light wind.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "Which surface below your drone is most likely to produce rising air and low-level turbulence on a hot day?",
        options: ["A lake", "A large stand of trees", "A paved parking lot"],
        correctIndex: 2,
        explanation:
          "Fast-heating surfaces (pavement, bare ground, rock, sand, a plowed field) heat the air above them and make it rise. Water and vegetation stay cooler and make the air sink. The boundary between rising and sinking air is where the low-level bumps come from.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "Which set of conditions goes with UNSTABLE air?",
        options: [
          "Cumulus clouds, turbulence, showery precipitation, and good visibility",
          "Stratus clouds, smooth air, steady precipitation, and poor visibility",
          "Cumulus clouds, smooth air, and poor visibility",
        ],
        correctIndex: 0,
        explanation:
          "Unstable air rises easily: puffy cumulus clouds, turbulence, showery precipitation, and good visibility because the air keeps mixing. Stable air resists rising: flat stratus clouds, smooth air, steady precipitation, and often poor visibility including fog. The trap is assuming rough air must mean poor visibility. It is the opposite.",
        sourceLessonNumber: 5,
      },
      {
        prompt:
          "A report shows FEW clouds at 1,000 feet, SCT at 2,500 feet, and BKN at 5,000 feet. What is the ceiling?",
        options: ["1,000 feet", "2,500 feet", "5,000 feet"],
        correctIndex: 2,
        explanation:
          "A ceiling is the lowest BROKEN (5/8 to 7/8 cover) or OVERCAST (8/8) layer. Few and scattered layers are never a ceiling, so the 5,000-foot broken layer is the ceiling here. The trap answer is the lowest layer printed.",
        sourceLessonNumber: 6,
      },
      {
        prompt: "What are the Part 107 weather minimums?",
        options: [
          "3 statute miles flight visibility, 500 feet below clouds, 2,000 feet horizontally from clouds",
          "3 statute miles flight visibility, 2,000 feet below clouds, 500 feet horizontally from clouds",
          "1 statute mile flight visibility and clear of clouds",
        ],
        correctIndex: 0,
        explanation:
          "You need at least 3 statute miles of flight visibility from the control station, and you must stay 500 feet BELOW clouds and 2,000 feet HORIZONTALLY from them. The trap swaps the two cloud numbers.\n\nReference: 14 CFR § 107.51 (operating limitations for small unmanned aircraft).",
        sourceLessonNumber: 6,
      },
      {
        prompt: "Which combination raises density altitude and reduces your drone's performance?",
        options: [
          "Low temperature, low elevation, and low humidity",
          "High temperature, high elevation, and high humidity",
          "High pressure and cold air",
        ],
        correctIndex: 1,
        explanation:
          "High temperature, high field elevation, and high humidity all raise density altitude, which thins the air the props have to grab. The drone climbs slower, carries less, and feels mushy. High pressure and cold air do the opposite: thick air, low density altitude, better performance.",
        sourceLessonNumber: 8,
      },
      {
        prompt: "On a standard day you climb from sea level to 3,000 feet. About what is the temperature up there?",
        options: ["About 9 degrees Celsius", "About 13 degrees Celsius", "About 3 degrees Celsius"],
        correctIndex: 0,
        explanation:
          "Temperature falls about 2 degrees Celsius per 1,000 feet. Start at the standard 15 degrees at sea level, lose 6 degrees over 3,000 feet, and you land at about 9. (Pressure drops on its own schedule: about 1 inch of mercury per 1,000 feet, so 29.92 at sea level is about 26.92 at 3,000.)",
        sourceLessonNumber: 1,
      },
      {
        prompt: "In the Northern Hemisphere, which way does a HIGH pressure system rotate, and what weather does it usually bring?",
        options: [
          "Counterclockwise and inward, usually bringing clouds and rough air",
          "Clockwise and outward, usually bringing clear skies",
          "Clockwise and inward, usually bringing steady rain",
        ],
        correctIndex: 1,
        explanation:
          "A high turns clockwise and pushes air OUTWARD, shoving the weather out of the way, usually clear skies. A low turns counterclockwise and pulls air INWARD and up, and that lifting brings clouds, rough air, and worse weather. Do not swap the two.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "Sky coverage is reported in eighths. How much of the sky is covered for a layer to be called BROKEN?",
        options: [
          "Three to four eighths",
          "Five to seven eighths",
          "All eight eighths",
        ],
        correctIndex: 1,
        explanation:
          "Broken is five to seven eighths. The full ladder: clear (0), few (1 to 2), scattered (3 to 4), broken (5 to 7), overcast (8 of 8). This is what makes the ceiling definition work, only BROKEN or OVERCAST counts as a ceiling.",
        sourceLessonNumber: 6,
      },
      {
        prompt: "What unit is flight visibility reported in, and what is the highest value a report will show?",
        options: [
          "Nautical miles, up to a maximum of 10",
          "Statute miles, up to a maximum of 10",
          "Kilometers, with no maximum",
        ],
        correctIndex: 1,
        explanation:
          "Visibility is always reported in STATUTE miles, the regular road mile, not the nautical mile, and a report tops out at 10 statute miles. That matters because the Part 107 minimum of 3 miles is also in statute miles. Ceiling looks up; visibility looks sideways.",
        sourceLessonNumber: 6,
      },
      {
        prompt: "How hard does a microburst push down, and how long does it last?",
        options: [
          "Up to 6,000 feet per minute, lasting only about 5 to 15 minutes",
          "Up to 600 feet per minute, lasting about an hour",
          "Up to 1,500 feet per minute, lasting several hours",
        ],
        correctIndex: 0,
        explanation:
          "A microburst punches air straight down at up to 6,000 feet per minute and swings the wind by 30 to 90 knots, and it is over in 5 to 15 minutes. That is far more than enough to slam a small drone into the ground, and you cannot see it. This is why you never fly with thunderstorms anywhere in the area. (The test may offer a smaller downdraft figure to fool you.)",
        sourceLessonNumber: 7,
      },
      {
        prompt: "Which cloud has the greatest turbulence of any cloud in the sky, and what three ingredients build it?",
        options: [
          "The stratus cloud; cool air, dry air, and a temperature inversion",
          "The cumulonimbus cloud; water vapor, unstable air, and a lifting action such as surface heat",
          "The cumulus cloud; high pressure, low humidity, and strong surface wind",
        ],
        correctIndex: 1,
        explanation:
          "A thunderstorm needs three things: water vapor, unstable air that wants to rise, and something to lift it (like surface heating). The unstable air keeps climbing and builds the tall cumulonimbus, the cloud with the strongest turbulence in the sky. Inside it the air rushes up hard and then crashes down hard.",
        sourceLessonNumber: 7,
      },
      {
        prompt: "You fly through a cloud on a day when the temperature is at freezing. What is the danger?",
        options: [
          "Structural icing, ice builds on the props, adding weight, killing lift, and causing heavy vibration",
          "Nothing. A drone is too small and fast for ice to form on it",
          "The battery loses charge, but the airframe is unaffected",
        ],
        correctIndex: 0,
        explanation:
          "Visible moisture (cloud or fog) plus a temperature at or below freezing equals structural icing. Ice changes the shape and weight of the props, so they make less lift and shake hard, that breaks props, kills motors, and drops the drone. Moisture also wrecks the electronics. In cold, wet air, stay out of the visible moisture.",
        sourceLessonNumber: 8,
      },
    ],
  },

  {
    moduleOrder: 8,
    title: "Weather Services Quiz",
    questions: [
      {
        prompt: "Which weather product gives you the most complete picture before a flight?",
        options: [
          "An abbreviated briefing from Flight Service",
          "A standard briefing from Flight Service",
          "An outlook briefing from Flight Service",
        ],
        correctIndex: 1,
        explanation:
          "A standard briefing is the full picture before a flight. Abbreviated is a short update after a standard one, and an outlook briefing is for a flight six or more hours in the future. The trap answer is 'abbreviated'.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "A METAR reports the wind as 20016G22KT. What reference is that wind direction given in?",
        options: ["True north", "Magnetic north", "The runway heading"],
        correctIndex: 0,
        explanation:
          "METAR, TAF, and winds-aloft directions are all given relative to TRUE north. (Only a control tower gives you a magnetic wind direction.) The code reads: from 200 true at 16 knots, gusting 22.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "In the METAR date-time group 161853Z, what is the '16'?",
        options: ["The hour, in Zulu time", "The day of the month", "The minutes past the hour"],
        correctIndex: 1,
        explanation:
          "The group is six digits plus Z: the first two are the DAY of the month, the next four are the time, and Z means Zulu (UTC). So this observation is from the 16th at 1853 Zulu.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "A METAR reads: SCT009 BKN015 OVC025. What is the ceiling?",
        options: ["900 feet", "1,500 feet", "2,500 feet"],
        correctIndex: 1,
        explanation:
          "The ceiling is the LOWEST broken or overcast layer, and cloud height is three digits plus two zeros. BKN015 is a broken layer at 1,500 feet, and it is the lowest BKN/OVC layer. The scattered layer at 900 feet is never a ceiling.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "What area and time span does a TAF cover?",
        options: [
          "One airport and about a 5 statute mile radius, valid 24 to 30 hours",
          "An entire region, valid 12 hours",
          "One airport, valid for exactly 6 hours",
        ],
        correctIndex: 0,
        explanation:
          "A TAF (Terminal Aerodrome Forecast) forecasts one airport and roughly a 5 statute mile radius around it, valid 24 to 30 hours, and it is issued four times a day (0000, 0600, 1200, 1800 Zulu). A METAR, by contrast, is a current observation issued about hourly. The trap is thinking a TAF covers a whole region.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "A weather advisory reports SEVERE icing along your route. Is that an AIRMET or a SIGMET?",
        options: ["An AIRMET", "A SIGMET", "A PIREP"],
        correctIndex: 1,
        explanation:
          "Severity is the divider. SIGMETs cover significant hazards for all aircraft: severe turbulence, severe icing, widespread dust or sand. AIRMETs cover the lighter widespread stuff: moderate turbulence, moderate icing, surface winds of 30 knots or more. A Convective SIGMET always means thunderstorms.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "What is a PIREP?",
        options: [
          "A forecast of conditions along a route",
          "A report of actual conditions a pilot saw in flight",
          "An automated observation from an airport sensor",
        ],
        correctIndex: 1,
        explanation:
          "A PIREP is a pilot report of the conditions actually encountered in flight. It is not a forecast. UA marks a routine report and UUA marks an urgent one.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "You want to talk to a real person about the weather before a flight. What do you call?",
        options: [
          "Flight Service at 1-800-WX-BRIEF",
          "The nearest control tower on its published CT frequency",
          "FAA DroneZone support",
        ],
        correctIndex: 0,
        explanation:
          "Flight Service, at 1-800-WX-BRIEF (it spells 'weather brief'), puts a real human on the line who will brief you and answer questions. The three main aviation weather sources are that phone line, the free aviationweather.gov website, and an aviation app (Aloft, Kitty Hawk, Aeroweather), never your phone's ordinary forecast, which averages the whole city at ground level.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "How often is a METAR issued, and how often is a TAF?",
        options: [
          "METAR about once an hour; TAF four times a day (0000, 0600, 1200, 1800 Zulu)",
          "Both about once an hour",
          "METAR four times a day; TAF about once an hour",
        ],
        correctIndex: 0,
        explanation:
          "A METAR is a snapshot of NOW, refreshed about hourly (early if the weather changes sharply). A TAF looks AHEAD and is reissued four times a day, every six hours, starting at 0000 Zulu. METARs show up at almost every field; TAFs are mostly at larger airports.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "A METAR starts with KPRC. What does the K tell you?",
        options: [
          "The report is from the United States",
          "The airport has a control tower",
          "The report is a corrected re-issue",
        ],
        correctIndex: 0,
        explanation:
          "Station identifiers are four letters, and in the United States they always start with K. So KPRC is the K for the U.S., then PRC for Prescott. The identifier says nothing about whether there is a tower.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "A METAR reads -RA. What is happening?",
        options: ["Light rain", "Heavy rain", "Freezing rain"],
        correctIndex: 0,
        explanation:
          "Intensity is carried by the sign: a minus is LIGHT, no sign is moderate, and a plus is HEAVY. So -RA is light rain and +RA is heavy rain. The two-letter type codes worth knowing: RA rain, SN snow, BR mist, FG fog.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "A METAR reads 19/M15. What are the temperature and dew point?",
        options: [
          "19 degrees Celsius, dew point 15 degrees Celsius",
          "19 degrees Celsius, dew point MINUS 15 degrees Celsius",
          "19 degrees Fahrenheit, dew point 15 degrees Fahrenheit",
        ],
        correctIndex: 1,
        explanation:
          "Temperature and dew point are always in CELSIUS, split by a slash, and an M in front means MINUS. So 19/M15 is 19 degrees with a dew point of minus 15, a huge spread, meaning very dry air. (12/11 would be the dangerous one: a one-degree spread, near saturation, fog likely.)",
        sourceLessonNumber: 3,
      },
      {
        prompt: "In a TAF, what is the difference between FM, BECMG, and TEMPO?",
        options: [
          "FM is a rapid change at the stated time; BECMG is a gradual change over a window; TEMPO is a brief change that then goes away",
          "FM is a forecast; BECMG is an observation; TEMPO is a pilot report",
          "FM is a gradual change; BECMG is a brief blip; TEMPO is a rapid switch",
        ],
        correctIndex: 0,
        explanation:
          "FM ('from') is a light switch flipped at an exact minute, the whole forecast flips to new conditions. BECMG ('becoming') is a dimmer turning up gradually over a window. TEMPO is someone flicking the porch light on and off, then leaving it as it was: a brief change that does not last.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "A winds aloft forecast for 3,000 feet reads 2420+15. Decode it.",
        options: [
          "Wind from 240 degrees TRUE at 20 knots, temperature 15 degrees Celsius",
          "Wind from 240 degrees MAGNETIC at 20 knots, temperature 15 degrees Fahrenheit",
          "Wind from 024 degrees true at 20 knots, temperature 15 degrees Celsius",
        ],
        correctIndex: 0,
        explanation:
          "First two digits are the direction (240), next two are the speed in knots (20), and the signed number is the temperature in Celsius. Like a METAR and a TAF, winds aloft are given in TRUE direction, only a control tower on the radio gives you magnetic. (Quirk: if the speed is 100 knots or more, 50 is added to the direction so it still fits.)",
        sourceLessonNumber: 5,
      },
      {
        prompt:
          "Your METAR looks fine, but the TAF reads 'FM012100 ... 2SM BKN008' and your job runs past 2100 Zulu. What is the call?",
        options: [
          "Go. The current observation is what governs the flight",
          "Go now, but land before 2100, the forecast drops visibility to 2 statute miles, below the 3-mile minimum",
          "No go at all. A TAF that forecasts any change grounds the whole day",
        ],
        correctIndex: 1,
        explanation:
          "A METAR tells you NOW; a TAF tells you SOON. You need both. From 2100 the forecast visibility falls to 2 statute miles, under the 3-statute-mile minimum, so the flight is legal now and illegal after 2100. Fly the window and land before it closes. (P6SM, by contrast, means visibility greater than 6 statute miles: comfortably legal.)\n\nReference: 14 CFR § 107.51 (minimum flight visibility of 3 statute miles from the control station).",
        sourceLessonNumber: 6,
      },
    ],
  },

  {
    moduleOrder: 9,
    title: "Aeronautical Decision Making Quiz",
    questions: [
      {
        prompt: "What is aeronautical decision making (ADM)?",
        options: [
          "A systematic approach to consistently determining the best course of action",
          "A maintenance program that prevents mechanical failure",
          "The FAA's procedure for reporting an accident",
        ],
        correctIndex: 0,
        explanation:
          "ADM is a systematic approach to consistently choosing the best course of action. It is about your judgment, not the hardware. If an answer says ADM fixes equipment, it is wrong. Roughly 80 percent of aviation accidents trace to human factors, not mechanical failure.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "What are the five hazardous attitudes?",
        options: [
          "Anti-authority, impulsivity, invulnerability, macho, resignation",
          "Illness, medication, stress, alcohol, fatigue",
          "Perceive, process, perform, evaluate, repeat",
        ],
        correctIndex: 0,
        explanation:
          "The five hazardous attitudes are anti-authority, impulsivity, invulnerability, macho, and resignation. The second option is IMSAFE (a pilot fitness checklist) and the third is built from the 3P model. Do not mix the tools up.",
        sourceLessonNumber: 2,
      },
      {
        prompt:
          'A pilot says, "I have been flying this site for years and nothing has ever happened." Which hazardous attitude is that, and what is the antidote?',
        options: [
          'Macho; "Taking chances is foolish."',
          'Invulnerability; "It could happen to me."',
          'Resignation; "I am not helpless. I can make a difference."',
        ],
        correctIndex: 1,
        explanation:
          "Believing the bad thing simply will not happen to you is invulnerability, and its antidote is 'It could happen to me.' Macho is different: it is showing off with a risky act to prove skill ('I can do it, watch this'), and its antidote is 'Taking chances is foolish.' The test tries hard to make you confuse these two.",
        sourceLessonNumber: 2,
      },
      {
        prompt: 'What is the antidote to the anti-authority attitude ("Do not tell me what to do")?',
        options: [
          '"Not so fast. Think first."',
          '"Follow the rules. They are usually right."',
          '"It could happen to me."',
        ],
        correctIndex: 1,
        explanation:
          "Anti-authority is answered with 'Follow the rules. They are usually right.' 'Not so fast, think first' is the antidote to impulsivity, and 'It could happen to me' is the antidote to invulnerability. Match the pair exactly rather than picking whichever phrase sounds safest.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "In the PAVE checklist, what does the V stand for?",
        options: ["Vehicle", "enVironment", "Visibility"],
        correctIndex: 1,
        explanation:
          "PAVE is Pilot, Aircraft, enVironment, External pressures. The V is enVironment: weather, terrain, airspace, and nearby obstacles. The aircraft is the A. Reading the V as 'vehicle' is the single most common miss on this question.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "What are the three steps of the 3P model?",
        options: [
          "Perceive, Process, Perform",
          "Plan, Prepare, Proceed",
          "Detect, Estimate, Choose",
        ],
        correctIndex: 0,
        explanation:
          "3P is Perceive the hazard, Process the risk, Perform the action. 'Detect, Estimate, Choose' are the first three steps of the six-step DECIDE model (Detect, Estimate, Choose, Identify, Do, Evaluate). 3P and DECIDE are in-flight decision loops; PAVE and IMSAFE are preflight checklists.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "Who decides whether the remote pilot is fit to fly a particular flight?",
        options: [
          "An aviation medical examiner",
          "The client or employer who hired the flight",
          "The remote pilot in command, using the IMSAFE checklist",
        ],
        correctIndex: 2,
        explanation:
          "The remote pilot in command is directly responsible for and is the final authority on the operation, and that includes self-assessing fitness with IMSAFE (Illness, Medication, Stress, Alcohol, Fatigue, Emotion). No medical exam is required for Part 107; the call is yours, and if you are impaired you self-ground.\n\nReference: 14 CFR § 107.19 (remote pilot in command).",
        sourceLessonNumber: 6,
      },
      {
        prompt: 'A friend dares a pilot to fly right over the crowd. The pilot grins and says "Watch this." Which hazardous attitude, and what is the antidote?',
        options: [
          'Macho; "Taking chances is foolish."',
          'Impulsivity; "Not so fast. Think first."',
          'Anti-authority; "Follow the rules. They are usually right."',
        ],
        correctIndex: 0,
        explanation:
          '"I can do it, watch this" is macho: showing off with a risky act to prove skill. The antidote is "Taking chances is foolish." Do not confuse it with invulnerability, which is the quieter belief that the bad thing simply will not happen to YOU.',
        sourceLessonNumber: 3,
      },
      {
        prompt: 'A rushed pilot skips the preflight checklist and tells the crew "we do not have time for that, let\'s just fly." Which hazardous attitude, and what is the antidote?',
        options: [
          'Resignation; "I am not helpless. I can make a difference."',
          'Impulsivity; "Not so fast. Think first."',
          'Invulnerability; "It could happen to me."',
        ],
        correctIndex: 1,
        explanation:
          'The danger here is the rush itself, doing something fast instead of doing it right. That is impulsivity ("Do something quickly, anything"), and the antidote is "Not so fast. Think first."',
        sourceLessonNumber: 2,
      },
      {
        prompt: 'Your drone drifts behind a hill and the signal drops. You think, "It is gone. Nothing I can do." What is that, and what should you do?',
        options: [
          'Resignation, and the antidote is "I am not helpless. I can make a difference." Walk up the hill and try to regain line of sight',
          "Invulnerability, accept the loss and file an accident report",
          "Sound judgment, once the link is lost, the aircraft is unrecoverable by definition",
        ],
        correctIndex: 0,
        explanation:
          'Resignation says "What is the use, it is out of my hands," and it is a lie. If the signal drops behind a hill, you can MOVE: walk up the hill, regain line of sight, and the link often returns. The antidote is "I am not helpless. I can make a difference." Keep working the problem until it is truly over.',
        sourceLessonNumber: 2,
      },
      {
        prompt: "What are the six steps of the DECIDE model, in order?",
        options: [
          "Detect, Estimate, Choose, Identify, Do, Evaluate",
          "Detect, Evaluate, Consider, Identify, Decide, Execute",
          "Determine, Estimate, Calculate, Implement, Do, End",
        ],
        correctIndex: 0,
        explanation:
          "DECIDE spells itself: Detect the change, Estimate whether you must react, Choose the outcome you want, Identify the actions that get you there, Do them, Evaluate whether it worked. Like 3P, it ends by looking again, if the hazard is still there, you run the loop from the top.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "Which of these tools are PREFLIGHT checklists, and which are IN-FLIGHT decision loops?",
        options: [
          "PAVE and IMSAFE are preflight checklists; 3P and DECIDE are in-flight decision loops",
          "3P and DECIDE are preflight checklists; PAVE and IMSAFE are in-flight decision loops",
          "All four are preflight checklists",
        ],
        correctIndex: 0,
        explanation:
          "PAVE (Pilot, Aircraft, enVironment, External pressures) and IMSAFE (the fitness self-check) are run BEFORE you fly, during planning. 3P (Perceive, Process, Perform) and DECIDE are the loops you run WHEN SOMETHING CHANGES in the air. Mixing these four up is the single most common miss on this topic.",
        sourceLessonNumber: 5,
      },
      {
        prompt: 'Your client keeps calling: "Hurry up, we are losing daylight." Which part of PAVE flags that?',
        options: ["The P, Pilot", "The A, Aircraft", "The E, External pressures"],
        correctIndex: 2,
        explanation:
          "External pressures are the outside forces pushing you to fly when you maybe should not: a pushy client, a tight deadline, a friend daring you. PAVE makes you NAME them out loud before they steer your decision.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "What is crew resource management (CRM)?",
        options: [
          "The effective use of all available resources: human, hardware, and information",
          "The FAA requirement to fly with at least one visual observer",
          "The maintenance program that keeps a fleet of drones airworthy",
        ],
        correctIndex: 0,
        explanation:
          "CRM is the effective use of ALL available resources, human, hardware, and information, before and during flight. In plain words: use everyone and everything you have got. That phrasing is exactly how the FAA words the question.",
        sourceLessonNumber: 6,
      },
      {
        prompt: "What is a visual observer's job, and what is the 'sterile cockpit' rule?",
        options: [
          "The VO flies the drone while the pilot watches the sky; the sterile cockpit means the crew stays silent",
          "The VO's only job is to watch (the drone, other aircraft, people, birds, airspace); the sterile cockpit means that while flying, the crew talks only about the operation",
          "The VO handles the client and the paperwork; the sterile cockpit means no one may stand near the control station",
        ],
        correctIndex: 1,
        explanation:
          "A visual observer extends your eyes: their only job is to watch the drone and the surroundings so you can stay on the controller and the shot. The sterile cockpit rule, borrowed from manned aviation, means that when you are flying, the conversation is about the flight, full stop. No dinner plans. Distraction is what lets the deer step onto the road.",
        sourceLessonNumber: 6,
      },
    ],
  },

  {
    moduleOrder: 10,
    title: "Physiology and Night Operations Quiz",
    questions: [
      {
        prompt: "Which cells in your eye do the work at night, and how should you look at an object in the dark?",
        options: [
          "Cones; look straight at the object",
          "Rods; look slightly off to the side of the object",
          "Rods; look straight at the object",
        ],
        correctIndex: 1,
        explanation:
          "Rods handle low light and peripheral vision and sit away from the center of the retina. The cones packed in the center go nearly blind in the dark, which creates a night blind spot dead ahead. So at night you use off-center (scanning) viewing: look slightly to the side of what you want to see.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "How long do your eyes need to fully adapt to the dark?",
        options: ["About 2 to 3 minutes", "About 10 minutes", "About 30 minutes"],
        correctIndex: 2,
        explanation:
          "Full dark adaptation takes roughly 25 to 30 minutes, and any bright white light resets it, sending you back to near zero for another 30-minute wait. Use a red light for preflight and dim your screens.",
        sourceLessonNumber: 2,
      },
      {
        prompt:
          "You stare at a single stationary light against a black sky and it seems to start moving. What is that illusion called?",
        options: ["Autokinesis", "A false horizon", "Flicker vertigo"],
        correctIndex: 0,
        explanation:
          "Autokinesis: stare at a single still light against a dark background for about 8 to 10 seconds and it appears to move. Nothing moved; your eyes did. Avoid it by not fixing on one light for more than about 10 seconds and by scanning. A false horizon is a line of distant lights or sloping terrain that fools you about what is level; flicker vertigo is dizziness from a flashing light.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "What are the alcohol rules for acting as a remote pilot in command?",
        options: [
          "No alcohol within 8 hours, not under the influence, and blood alcohol below 0.04 percent",
          "No alcohol within 4 hours, and blood alcohol below 0.08 percent",
          "No alcohol within 24 hours, regardless of blood alcohol level",
        ],
        correctIndex: 0,
        explanation:
          "Eight hours 'bottle to throttle', a blood alcohol concentration below 0.04 percent, and not under the influence at all. All three apply: eight hours is not a free pass if you are still hungover or still over 0.04 percent, and alcohol can stay in the body up to 16 hours.\n\nReference: 14 CFR § 91.17 (alcohol and drugs), which Part 107 applies to remote pilots.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "What does Part 107 require in order to fly at night without a waiver?",
        options: [
          "Nothing extra; night flight has been unrestricted since 2021",
          "Completed night training AND an anti-collision light visible for at least 3 statute miles",
          "A waiver is still required for any night flight",
        ],
        correctIndex: 1,
        explanation:
          "Since April 2021, night flight needs no waiver if BOTH conditions are met: the remote pilot has completed the night training (in the initial knowledge test or the free recurrent training), and the aircraft has an anti-collision light visible for at least 3 statute miles, flashing fast enough to avoid a collision. The trap answers either keep the old waiver or swap in a shorter distance.\n\nReference: 14 CFR § 107.29 (operation at night).",
        sourceLessonNumber: 6,
      },
      {
        prompt: "You are badly fatigued the morning of a job. What actually fixes it?",
        options: [
          "Experience and training let a seasoned pilot fly through fatigue",
          "Nothing but rest, food, water, and sleep; no training or willpower overcomes fatigue",
          "Caffeine, which restores judgment and reaction time",
        ],
        correctIndex: 1,
        explanation:
          "No amount of training or experience overcomes fatigue. The only fix is rest and proper diet: food, water, and sleep before a mission. Caffeine also worsens dehydration, which brings its own headaches, dizziness, and fatigue.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "What is hypoxia, and where is a drone pilot most likely to encounter it?",
        options: [
          "Oxygen deficiency, most likely on a job at high ground elevation such as 8,000 to 10,000 feet",
          "Dehydration, most likely on a hot day at sea level",
          "Disorientation caused by staring at a flashing light",
        ],
        correctIndex: 0,
        explanation:
          "Hypoxia is oxygen deficiency. For a drone pilot it shows up at high GROUND elevation, like a mountain job at 8,000 to 10,000 feet, and it sneaks up without warning. It sits alongside dehydration, stress, and fatigue as the physical states that quietly degrade judgment.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "What do the CONES in your eye do, and where do they sit?",
        options: [
          "Color, fine detail, and sharp straight-ahead daytime vision; they are packed in the center of the retina",
          "Low light and peripheral vision; they sit around the edges of the retina",
          "Depth perception only; they are spread evenly across the retina",
        ],
        correctIndex: 0,
        explanation:
          "Cones do color, fine detail, and your sharp central daytime vision, and they are packed into the center back of the eye, but they need good light. That is exactly why the center of your view becomes a BLIND SPOT at night: the cones there go nearly blind and there are few rods in the middle to cover for them. (Rods are the low-light, peripheral sensors, about 10,000 times more light-sensitive.)",
        sourceLessonNumber: 1,
      },
      {
        prompt: "Why do night pilots use a RED light for preflight instead of a white one?",
        options: [
          "Red light is brighter, so it reveals more damage on the airframe",
          "Red light does not bleach the rods, so it does not reset your dark adaptation",
          "Red light is required by regulation for any operation after sunset",
        ],
        correctIndex: 1,
        explanation:
          "There is a chemical in your rods that bright white light bleaches out, one look at a phone at full brightness, a headlight, or a strobe and your dark adaptation is back near zero, costing you another ~30 minutes. Red light does not bleach the rods nearly as much. Dim your screens all the way down too.",
        sourceLessonNumber: 2,
      },
      {
        prompt:
          "At night, a row of distant town lights along a slope makes you misjudge which way is level. What illusion is that?",
        options: ["A false horizon", "Autokinesis", "Flicker vertigo"],
        correctIndex: 0,
        explanation:
          "A false horizon: a line of distant lights, boats on dark water, or sloping terrain fakes the line where ground meets sky, and everything you judge off it is tilted too. Autokinesis is the single still light that appears to drift; flicker vertigo is dizziness from staring at a flashing light.",
        sourceLessonNumber: 3,
      },
      {
        prompt:
          "An aircraft's lights make it look like it is flying AWAY from you when it is actually coming toward you. What is that called?",
        options: ["Reversible perspective", "A false horizon", "Autokinesis"],
        correctIndex: 0,
        explanation:
          "Reversible perspective: the lights fool you about which way the aircraft is going, so a closing aircraft reads as a departing one. It is one of the four night illusions Part 107 names, alongside autokinesis, the false horizon, and flicker vertigo (fixed by looking away, then back).",
        sourceLessonNumber: 3,
      },
      {
        prompt: "You take an over-the-counter allergy pill the morning of a job. Can you fly?",
        options: [
          "Yes. The rules only cover illegal drugs and alcohol",
          "Not if it affects your ability to fly safely, read the label; 'do not operate heavy machinery' means do not operate your drone",
          "Yes, as long as you wait 8 hours after taking it",
        ],
        correctIndex: 1,
        explanation:
          "The rule is not just about illegal drugs. Over-the-counter and prescription medication can ground you just as hard: antihistamines and decongestants cause drowsiness and slow your thinking. The plain test is the label, if it says do not operate heavy machinery, do not fly. When in doubt, check the FAA's approved-medication list or ask an aviation medical examiner.\n\nReference: 14 CFR § 91.17 (alcohol and drugs), which Part 107 applies to remote pilots.",
        sourceLessonNumber: 4,
      },
      {
        prompt:
          "Halfway through a long, hot field mission you get a headache, your legs cramp, and you feel dizzy. What is most likely happening?",
        options: [
          "Dehydration, stop and drink water before you fly again",
          "Hypoxia, descend to a lower elevation",
          "Flicker vertigo, look away from your screen",
        ],
        correctIndex: 0,
        explanation:
          "Headaches, cramps, and dizziness are dehydration. Heat, dry wind, and low humidity pull water out of you, and so do coffee, tea, soda, and alcohol, because they make you urinate more. Drink water, and do not wait until you feel thirsty. A dizzy, unfocused pilot cannot safely control an aircraft.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "What is the anti-collision light actually FOR, and does a downward landing light satisfy the rule?",
        options: [
          "It is so YOU can see your drone in the dark; a landing light counts as long as it is bright",
          "It is so MANNED aircraft can see your drone and stay away; a landing light does NOT count, it must be the strobe visible for 3 statute miles",
          "It is a Remote ID broadcast device; a landing light is unrelated",
        ],
        correctIndex: 1,
        explanation:
          "The anti-collision light is not for you, it is so manned aircraft can spot your drone and steer clear, like a blinking light on a bicycle at night. A landing light pointing at the ground does not satisfy it. It must be visible for at least 3 statute miles and flash fast enough to help others avoid a collision.\n\nReference: 14 CFR § 107.29 (operation at night).",
        sourceLessonNumber: 6,
      },
      {
        prompt: "You were certified in 2019, before the night rule changed. How do you satisfy the night-training requirement now?",
        options: [
          "Retake the initial knowledge test at a testing center",
          "Complete the FAA's free online recurrent training",
          "Apply for a night waiver through FAA DroneZone",
        ],
        correctIndex: 1,
        explanation:
          "There are two paths and you only need one. If you took your INITIAL knowledge test after the rule took effect (April 6, 2021), it already contained night questions and you are covered. If you were certified before that, you complete the FAA's free online recurrent training. Either path counts, and no waiver is required for night flight anymore.",
        sourceLessonNumber: 6,
      },
    ],
  },

  {
    moduleOrder: 11,
    title: "Procedures and Maintenance Quiz",
    questions: [
      {
        prompt:
          "How often is the remote pilot in command required to inspect the small unmanned aircraft to ensure it is in a condition for safe operation?",
        options: ["Before each flight", "Every 50 flight hours", "Once every 12 calendar months"],
        correctIndex: 0,
        explanation:
          "Before EVERY flight, every time. There is no hour-based or calendar-based inspection interval for a small UAS; the trap answers borrow those from manned aviation.\n\nReference: 14 CFR § 107.49 (preflight familiarization, inspection, and actions for aircraft operation).",
        sourceLessonNumber: 1,
      },
      {
        prompt: "Your preflight turns up damage that makes the aircraft unsafe. What does the rule require?",
        options: [
          "You may fly if you stay over open ground and below 100 feet",
          "You must not fly it; a small unmanned aircraft not in a condition for safe operation may not be operated",
          "You may fly it once more to confirm the damage affects handling",
        ],
        correctIndex: 1,
        explanation:
          "If it is not in a condition for safe operation, it does not fly. Ground it until it is fixed. The remote PIC is the one who makes that call.\n\nReference: 14 CFR § 107.15 (condition for safe operation).",
        sourceLessonNumber: 2,
      },
      {
        prompt: "Under what condition should the operator establish their own scheduled maintenance protocol?",
        options: [
          "Always, regardless of what the manufacturer publishes",
          "Only when the manufacturer does not provide a maintenance schedule",
          "Only after the aircraft has been in an accident",
        ],
        correctIndex: 1,
        explanation:
          "You build your own program only when the manufacturer gives you no schedule. If the manufacturer publishes one, you follow theirs. The trap answer says you always build your own.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "Which source should you consult FIRST to decide what maintenance to perform on your drone?",
        options: [
          "The manufacturer's guidance and maintenance schedule",
          "14 CFR Part 107",
          "Best practices shared by other drone pilots",
        ],
        correctIndex: 0,
        explanation:
          "The manufacturer is first. Part 107 and other pilots' habits are not the starting point for what maintenance a specific aircraft needs. Only if the manufacturer provides nothing do you create and document your own program.",
        sourceLessonNumber: 2,
      },
      {
        prompt:
          "For a Category 4 small unmanned aircraft (operations over people under an airworthiness certificate), who must keep the maintenance records?",
        options: ["The manufacturer", "The remote pilot in command", "The owner"],
        correctIndex: 2,
        explanation:
          "For a Category 4 aircraft the OWNER must keep the maintenance records. The trap answers point at the remote pilot in command or the manufacturer.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "A LiPo battery in your case has swelled since the last job. What do you do?",
        options: [
          "Fly it, but land early to keep the voltage up",
          "Charge it slowly to reshape the cells, then fly it",
          "Do not fly it and do not charge it; dispose of it under local rules",
        ],
        correctIndex: 2,
        explanation:
          "Never fly or charge a swollen or damaged lithium polymer battery. Swelling is a sign of the damage that leads to thermal runaway and fire. If it does not fit the bay, do not force it. Inspect every battery before each flight and store batteries cool and at a partial charge.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "Which of these is part of the required preflight check before every flight?",
        options: [
          "Assess the operating environment, inspect the aircraft, check the control link, and confirm enough power for the whole flight",
          "File a flight plan with the nearest control tower",
          "Log the flight in the FAA DroneZone system",
        ],
        correctIndex: 0,
        explanation:
          "The preflight check is: assess the operating environment, inspect the aircraft for safe operation, confirm the control link works, and confirm there is enough battery or fuel for the entire flight. A written checklist is a best practice for doing it the same way every time.\n\nReference: 14 CFR § 107.49 (preflight familiarization, inspection, and actions for aircraft operation).",
        sourceLessonNumber: 5,
      },
      {
        prompt: "What is the difference between scheduled and unscheduled maintenance?",
        options: [
          "Scheduled is planned on a set interval; unscheduled happens after a problem, like a hard landing or a failed part",
          "Scheduled is done by the manufacturer; unscheduled is done by the pilot",
          "Scheduled is required by the FAA; unscheduled is optional",
        ],
        correctIndex: 0,
        explanation:
          "Scheduled maintenance is the oil change: planned, on a set interval, done before anything goes wrong. Unscheduled maintenance is the pothole: a hard landing, a crash, a broken part, a swollen battery, you did not plan it, the aircraft made you do it.",
        sourceLessonNumber: 2,
      },
      {
        prompt:
          "You land hard after a gust pushes you into the grass. The drone still powers on and looks fine, and the manufacturer's schedule says nothing is due. Can you launch again right away?",
        options: [
          "Yes. Nothing is due and the aircraft powers on normally",
          "No. A hard landing calls for unscheduled maintenance, inspect the props, motors, arms, and battery first",
          "Yes, but only for one more short flight to confirm it handles normally",
        ],
        correctIndex: 1,
        explanation:
          "A hard landing is exactly when hidden damage shows up. Inspect before the next flight, because a small unmanned aircraft that is not in a condition for safe operation must not be flown, and the manufacturer's calendar has no idea you just hit the ground.\n\nReference: 14 CFR § 107.15 (condition for safe operation).",
        sourceLessonNumber: 2,
      },
      {
        prompt: "What belongs in a maintenance record?",
        options: [
          "Only the repairs made after a crash",
          "Overhauls, repairs, inspections, modifications, part replacements, and software updates",
          "Only the parts still under manufacturer warranty",
        ],
        correctIndex: 1,
        explanation:
          "Log every overhaul, repair, inspection, modification, part replacement, and software update, and note each part's age and the time since its last repair. Those dates and hour counts are what reveal a trend (props cracking around 50 hours) so you can replace a part BEFORE it snaps mid-flight. A simple logbook or spreadsheet is enough.",
        sourceLessonNumber: 3,
      },
      {
        prompt: "A damaged or overheated lithium battery can start a chain reaction fire. What is that called?",
        options: ["Thermal runaway", "Voltage sag", "Cell balancing"],
        correctIndex: 0,
        explanation:
          "Thermal runaway: one cell overheats and ignites, and that heat sets off the next cell, and the next. It is the reason a swollen battery never flies and never charges, and why heat is the one thing you keep batteries away from. (Voltage sag is a different problem: what a COLD battery does under load.)",
        sourceLessonNumber: 4,
      },
      {
        prompt: "How should you store your drone's lithium batteries?",
        options: [
          "Fully charged, so they are always ready for a job",
          "Cool, at a partial charge, away from extreme heat",
          "Fully discharged, in a sealed airtight case",
        ],
        correctIndex: 1,
        explanation:
          "Cool, partly charged, out of the blazing window, like a houseplant that is neither parched nor drowning. A battery left at full charge for weeks, or left baking in a hot car, ages fast and is more likely to swell. Heat is the trigger for thermal runaway.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "It is a cold morning. How does that change your battery planning?",
        options: [
          "Cold improves battery performance, so you can plan longer flights",
          "Cold cuts power and the voltage can sag fast in flight, so plan shorter flights and keep spares warm",
          "Cold has no effect; only heat matters for lithium batteries",
        ],
        correctIndex: 1,
        explanation:
          "In the cold a battery delivers less power and can sag fast in flight, so plan shorter flights and keep spares warm in a pocket. Watch the thermometer on BOTH ends: in the heat, a battery that is already warm from flying needs time to cool before you charge it.",
        sourceLessonNumber: 4,
      },
      {
        prompt: "What does a crew and site briefing cover before anyone touches a control?",
        options: [
          "Each person's job, the plan, and what to do in an emergency, plus an assessment of the launch and landing area",
          "The client's shot list and the invoice terms",
          "Only the weather forecast and the airspace class",
        ],
        correctIndex: 0,
        explanation:
          "If other people are part of the operation, you tell them their jobs, the plan, and the emergency procedures. Then you assess the launch and landing area for obstacles, people who should not be there, and anything that could block your signal, metal structures, power lines.",
        sourceLessonNumber: 5,
      },
      {
        prompt: "Why do a low hover check before climbing to altitude?",
        options: [
          "To warm the battery up to its operating temperature",
          "To confirm the drone is stable, the sticks respond, and the link is clean, while you are still two feet up, not two hundred",
          "It is a regulatory requirement under 14 CFR 107.49",
        ],
        correctIndex: 1,
        explanation:
          "Lift a foot or two, confirm the aircraft is stable, the sticks respond, and the control link is solid, THEN climb. A pilot who took off inside a parking garage found the rebar had killed his link at two feet instead of two hundred. A shifted camera mount shows up the same way. It is a best practice, not a listed regulation, and it costs you seconds.",
        sourceLessonNumber: 1,
      },
    ],
  },

  {
    moduleOrder: 13,
    title: "Apply for Your Certificate Quiz",
    questions: [
      {
        prompt: "Which system do you use to apply for the remote pilot certificate, and what do you need from it first?",
        options: [
          "IACRA, where you create an account and get your FTN (FAA Tracking Number)",
          "FAA DroneZone, where you get your registration number",
          "FAASafety.gov, where you get your training certificate",
        ],
        correctIndex: 0,
        explanation:
          "IACRA is the application system. Create the account and write down your FTN (FAA Tracking Number) before anything else; you need it to schedule the test and to apply. DroneZone (aircraft registration) and FAASafety.gov (recurrent training) are separate websites with separate accounts.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "You pass the knowledge test. What happens next?",
        options: [
          "Your certificate is mailed automatically; nothing more is required",
          "You log back into IACRA and submit the actual application, then go through TSA security vetting",
          "You take a practical flight test with an examiner",
        ],
        correctIndex: 1,
        explanation:
          "Passing is not the finish line. You must log back into IACRA and submit the application, or no certificate is ever issued. After you apply you go through TSA security vetting. There is no practical flight test for Part 107.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "After you submit the application and clear vetting, when can you legally start flying commercially?",
        options: [
          "Only after the permanent plastic card arrives in the mail, in 30 to 40 days",
          "When the temporary certificate appears in IACRA, usually in about 5 to 7 days",
          "Immediately after passing the knowledge test",
        ],
        correctIndex: 1,
        explanation:
          "A temporary certificate shows up in IACRA in roughly 5 to 7 days and is good for 120 days. The permanent card arrives by mail in about 30 to 40 days. You do not have to wait for the plastic.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "Which drones must be registered, and how long does a registration last?",
        options: [
          "Any drone over 0.55 pounds, registered on FAA DroneZone, good for 3 years",
          "Only drones over 55 pounds, registered on IACRA, good for 1 year",
          "Only drones flown for pay, registered on FAASafety.gov, good for 5 years",
        ],
        correctIndex: 0,
        explanation:
          "Register any drone over 0.55 pounds on FAA DroneZone (about 5 dollars, valid 3 years), and make sure it complies with Remote ID. 55 pounds is the upper limit that separates a small UAS from Part 91 aircraft; 0.55 pounds is the registration threshold. Do not mix the two numbers up.\n\nReference: 14 CFR Part 48 (registration and marking requirements for small unmanned aircraft).",
        sourceLessonNumber: 2,
      },
      {
        prompt: "How do you stay current once you hold the certificate?",
        options: [
          "Retake the full 60-question knowledge test every 24 calendar months",
          "Complete the free online recurrent training every 24 calendar months",
          "Log at least 10 flight hours per year",
        ],
        correctIndex: 1,
        explanation:
          "Recurrent training is free and online at FAASafety.gov, and it is due every 24 calendar months. Count from your test date, not your certificate date, and save the completion certificate. There is no re-test.\n\nReference: 14 CFR § 107.65 (aeronautical knowledge recency).",
        sourceLessonNumber: 2,
      },
      {
        prompt: "Your recurrent training lapsed six months ago. What can you do?",
        options: [
          "Nothing. You must retake the initial knowledge test at a testing center",
          "You may still fly recreationally, but you cannot use your Part 107 privileges until you complete the free recurrent training again",
          "You may keep flying commercially for a 12-month grace period",
        ],
        correctIndex: 1,
        explanation:
          "A lapse does not void the certificate. You can still fly recreationally, but your Part 107 privileges are unusable until you complete the free recurrent training. There is no time limit on doing it and no re-test.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "Three different FAA websites, three different jobs. Which one registers the aircraft itself?",
        options: ["IACRA", "FAA DroneZone", "FAASafety.gov"],
        correctIndex: 1,
        explanation:
          "DroneZone registers the drone. IACRA is where you apply for your pilot certificate, and FAASafety.gov is where you take the free recurrent training. Three sites, three purposes, three separate accounts, the FAA does not connect them for you.",
        sourceLessonNumber: 1,
      },
      {
        prompt: "How long is the temporary certificate good for?",
        options: ["30 days", "120 days", "24 calendar months"],
        correctIndex: 1,
        explanation:
          "The temporary certificate is valid for 120 days, which is plenty of runway for the permanent plastic card to arrive in the mail (about 30 to 40 days). Do not confuse the 120 days with the 24-calendar-month recurrent clock.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "How does the permanent certificate reach you, and how long does it take?",
        options: [
          "You download and print it from IACRA within 5 to 7 days",
          "It arrives by mail as a plastic card in about 30 to 40 days",
          "You pick it up in person at the testing center",
        ],
        correctIndex: 1,
        explanation:
          "The permanent card is mailed to you in roughly 30 to 40 days. The thing you download and print in about 5 to 7 days is the TEMPORARY certificate, and it is what makes you legal to fly in the meantime.",
        sourceLessonNumber: 2,
      },
      {
        prompt:
          "You are logged back into IACRA after passing. Which application do you start, and what do you give as your basis?",
        options: [
          "Pilot, then Remote Pilot Initial; basis is 'completion of a knowledge test'",
          "Pilot, then Remote Pilot Recurrent; basis is 'completion of recurrent training'",
          "Mechanic, then Remote Pilot Initial; basis is 'military competence'",
        ],
        correctIndex: 0,
        explanation:
          "Choose Pilot, then Remote Pilot Initial, and give 'completion of a knowledge test' as the basis. You will also enter your ID and the knowledge test exam ID that the testing center hands you after you pass.\n\nReference: 14 CFR § 107.63 (application for a remote pilot certificate with a small UAS rating).",
        sourceLessonNumber: 2,
      },
      {
        prompt: "What is Remote ID?",
        options: [
          "The drone broadcasting its location and identity in flight, like a digital license plate",
          "The FTN that identifies you to the FAA",
          "The registration number you write on the outside of the aircraft",
        ],
        correctIndex: 0,
        explanation:
          "Remote ID means the drone broadcasts its location and identity while it is flying. Think of it as a digital license plate for the aircraft. It is separate from your FTN (which identifies the pilot) and from the registration number you mark on the airframe.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "You pass the test on September 15th and your certificate is issued in mid-October. When does the 24-month recurrent clock start?",
        options: [
          "The certificate issue date in October",
          "The test date, September 15th",
          "January 1st of the following year",
        ],
        correctIndex: 1,
        explanation:
          "Count from your TEST date, not the date printed on your certificate. The certificate gets issued a month or so later, so trusting that date quietly buys you extra time you do not actually have and can leave you flying out of currency.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "Does the remote pilot certificate itself expire?",
        options: [
          "Yes, it expires every 24 calendar months and must be reissued",
          "No. The certificate does not expire; what expires is your currency, and recurrent training resets that clock",
          "Yes, it expires after 120 days unless you register a drone",
        ],
        correctIndex: 1,
        explanation:
          "The certificate itself never expires. Your CURRENCY does, and only the free recurrent training resets that clock. That is why a lapse does not take the certificate away from you: it just parks your Part 107 privileges until you train again.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "What kicks off immediately after you submit the IACRA application?",
        options: [
          "A practical flight test with an FAA examiner",
          "TSA security vetting (a background check)",
          "Your drone's Remote ID compliance check",
        ],
        correctIndex: 1,
        explanation:
          "Submitting the application starts TSA security vetting, a background check run by the Transportation Security Administration. Once it clears, the FAA issues the certificate. There is no practical flight test anywhere in Part 107.",
        sourceLessonNumber: 2,
      },
      {
        prompt: "What does the testing center require before it will let you sit down and test?",
        options: [
          "A government-issued photo ID",
          "An instructor endorsement signed within the last 60 days",
          "Proof that your drone is registered on DroneZone",
        ],
        correctIndex: 0,
        explanation:
          "A government-issued photo ID (driver's license or passport). No ID, no test, and you lose the appointment and the fee. No instructor endorsement is needed for Part 107, and your drone's registration has nothing to do with sitting the exam.",
        sourceLessonNumber: 1,
      },
    ],
  },
];
