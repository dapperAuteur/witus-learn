/**
 * Hand-assigned source lessons: the questions the automatic matcher refused to guess.
 *
 * WHY THIS EXISTS. scripts/lib/source-lesson-match.ts declines whenever the best candidate lesson
 * does not clearly beat the runner-up, because a wrong "reread this lesson" link sends a learner who
 * already got the question wrong to a lesson that does not contain the answer, and they have no
 * reason to doubt it. That left 120 questions across nasm-cpt, nasm-ces and read-your-bodys-data
 * with no link. Each one below was read against its chapter's lessons and assigned by hand.
 *
 * read-your-bodys-data is absent because that course is hand-maintained rather than generated, so
 * its seven assignments live in scripts/data/read-your-body-course.ts directly.
 *
 * WHY IT IS KEYED BY PROMPT. Seven of the eight CentOS-migrated modules are generated and
 * gitignored, so the mapping cannot live in them. The prompt is the question's stable identity
 * everywhere else in this repo (questionKey hashes the prompt alone, which is why the style guide
 * forbids rewording a prompt), and it makes this file readable in a diff: you can see which question
 * is being pointed where without opening a 5 MB generated module.
 *
 * THE RULE USED FOR EVERY DECISION. Point at the lesson that TEACHES the answer, never at the
 * "module review", "cumulative review", "key terms", or "on the test" lesson that restates it. Those
 * recap lessons repeat the material verbatim, so a text match finds them first and they are the
 * wrong destination for someone who needs to learn the thing rather than revise it.
 *
 * A capstone question may point at a lesson in a DIFFERENT module: nasm-ces's m19 quiz draws on the
 * whole course, and its own section contains no teaching lesson at all.
 *
 * If a prompt below no longer matches a question, the generator reports it rather than silently
 * dropping the override. That is the signal that the upstream CentOS content changed.
 */

export const SOURCE_LESSON_OVERRIDES: Record<string, Record<string, string>> = {
  "nasm-cpt": {
    "What is the leading cause of death among both men and women?":
      "ch1-l2-the-global-state-of-health",
    "Which two factors are considered the leading preventable causes of death?":
      "ch1-l2-the-global-state-of-health",
    "Which body mass index value or range marks the threshold for obesity?":
      "ch1-l3-physical-inactivity-and-chronic-disease",
    "Within a health club, which sequence correctly describes the internal advancement ladder from the floor toward ownership?":
      "ch2-l2-career-development-and-career-paths",
    "A client keeps training because they find the activity genuinely enjoyable and personally meaningful. Which kind of motivation is this, and what is it most closely linked to?":
      "ch3-l1-the-role-of-psychology-in-fitness-and-wellness",
    "A trainer notices a client is showing possible signs of a mental health condition. Which response stays within a personal trainer's scope of practice?":
      "ch3-l1-the-role-of-psychology-in-fitness-and-wellness",
    "In the context of behavior change, motivation is best defined as which of the following?":
      "ch3-l1-the-role-of-psychology-in-fitness-and-wellness",
    "Finishing in the top ten of a local 10K race is an example of which kind of goal?":
      "ch3-l2-common-barriers-to-exercise",
    "A client has exercised consistently for almost six months, about five and a half months, and asks whether they have reached maintenance. What is the most accurate answer?":
      "ch4-l2-the-stages-of-change-model",
    "Which three systems work together to make up the Human Movement System?":
      "ch5-l1-the-nervous-system",
    "Which two structures form the central nervous system?":
      "ch5-l1-the-nervous-system",
    "A muscle spindle causes one response while a Golgi tendon organ causes the opposite. Which pairing is correct?":
      "ch5-l2-sensory-receptors-and-reciprocal-inhibition",
    "During a biceps curl the biceps contracts as the agonist while the triceps automatically relaxes. What is this called?":
      "ch5-l2-sensory-receptors-and-reciprocal-inhibition",
    "A trainer measures a client at 80 beats per minute with a stroke volume of 70 mL per beat. What is the client's cardiac output?":
      "ch6-l1-the-heart",
    "Which list correctly names the four components that add up to total daily energy expenditure (TDEE)?":
      "ch8-l5-energy-balance-and-tdee",
    "How many calories does one gram of fat (lipid) supply?":
      "ch9-l1-nutrition-basics-and-the-trainer-s-scope",
    "Of the 20 amino acids the body uses, how many are essential, meaning they must come from food because the body cannot make them?":
      "ch9-l2-protein",
    "Which plant food is a complete protein, supplying all nine essential amino acids on its own?":
      "ch9-l2-protein",
    "Carbohydrates serve as the body's preferred fuel especially for which two demands?":
      "ch9-l3-carbohydrates",
    "Which statement most accurately describes how dietary supplements are handled by the FDA?":
      "ch10-l1-introduction-to-supplements-and-the-trainer-s-scope",
    "A client mentions they take a daily heart medication and asks whether they should start a caffeinated pre-workout. What is the most appropriate trainer response?":
      "ch10-l1-introduction-to-supplements-and-the-trainer-s-scope",
    "A client asks the trainer to recommend the single best brand and serving of fish oil to lower their cholesterol. What is the appropriate response?":
      "ch10-l1-introduction-to-supplements-and-the-trainer-s-scope",
    "What does a third-party certification such as NSF Certified for Sport or Informed Choice actually confirm about a supplement?":
      "ch10-l5-banned-substances-and-supplement-safety",
    "Why does third-party verification become especially important for clients who compete in drug-tested sports?":
      "ch10-l5-banned-substances-and-supplement-safety",
    "For which exercise intensity range is the PAR-Q+ considered an appropriate minimal screening tool?":
      "ch11-l2-the-par-q-and-health-history-questionnaire",
    "On the exam, how should the term overactive be understood when describing a muscle around a joint?":
      "ch12-l1-static-postural-assessment",
    "In lower crossed syndrome, which muscle groups are underactive and should be strengthened?":
      "ch12-l2-postural-distortion-patterns",
    "Active stretching increases range of motion by deliberately contracting the muscle opposite the one being stretched. What neural principle does this rely on?":
      "ch14-l2-the-flexibility-continuum-stretch-types",
    "A trainer is starting a brand-new client in Phase 1 (Stabilization Endurance) of the OPT model. Which flexibility protocol fits this phase?":
      "ch14-l3-matching-flexibility-to-the-opt-phases",
    "Across Phases 2 through 4 of the OPT model, which stretch type is paired with SMR as the primary flexibility protocol?":
      "ch14-l3-matching-flexibility-to-the-opt-phases",
    "Regardless of which OPT phase a client is in, which flexibility technique always comes first in the session?":
      "ch14-l4-flexibility-programming-and-guidelines",
    "A client presents with overactive (tight) quadriceps found during assessment. Which approach should be used first?":
      "ch14-l4-flexibility-programming-and-guidelines",
    "Which description best fits ventilatory threshold 2 (VT2)?":
      "ch15-l2-monitoring-cardio-intensity",
    "During a talk test, a trainer raises the treadmill speed and the client's once-smooth speech turns choppy and challenging, though full sentences are still possible. Which marker has the client just reached?":
      "ch15-l2-monitoring-cardio-intensity",
    "What is the primary function of the local (stabilization-system) core muscles?":
      "ch16-l1-what-the-core-is",
    "Which of the following is classified as a LOCAL core muscle?":
      "ch16-l1-what-the-core-is",
    "Which group lists muscles that are ALL part of the global (movement-system) core?":
      "ch16-l1-what-the-core-is",
    "The diaphragm and the latissimus dorsi are sometimes overlooked as core muscles. How are they correctly classified?":
      "ch16-l1-what-the-core-is",
    "What is the primary muscle targeted by the drawing-in maneuver?":
      "ch16-l2-drawing-in-and-bracing",
    "Abdominal bracing is best described as which of the following?":
      "ch16-l2-drawing-in-and-bracing",
    "Three sensory systems work together to keep the body upright. Which group correctly names all three?":
      "ch17-l1-what-balance-is",
    "A trainer asks a balancing client to turn the head slowly from side to side. Which sensory system is this primarily challenging?":
      "ch17-l1-what-balance-is",
    "Which modification specifically challenges the visual system during a balance exercise?":
      "ch17-l1-what-balance-is",
    "A coach calls out a direction in real time and the athlete must respond, versus an athlete running a memorized shuttle pattern that is simply timed. What best distinguishes these two situations?":
      "ch19-l1-the-saq-definitions",
    "In the speed equation, what does stride length specifically refer to?":
      "ch19-l1-the-saq-definitions",
    "A new client is starting the OPT model in Phase 1 (Stabilization Endurance). Which combination of repetitions and load intensity fits this phase?":
      "ch20-l4-acute-variables-by-opt-phase",
    "How many sets and what repetition tempo are prescribed for Phase 1 Stabilization Endurance work?":
      "ch20-l4-acute-variables-by-opt-phase",
    "A client wants to add muscle size and is in Phase 3 (Muscular Development / Hypertrophy). Which intensity range, as a percent of 1RM, should you program?":
      "ch20-l4-acute-variables-by-opt-phase",
    "For Phase 4 (Maximal Strength), which set of acute variables is correct?":
      "ch20-l4-acute-variables-by-opt-phase",
    "Two trainees finish the same workout. One trained in Phase 1 Stabilization Endurance and one in Phase 4 Maximal Strength. How do their rest intervals between sets compare?":
      "ch20-l4-acute-variables-by-opt-phase",
    "How many distinct training phases does the OPT model organize, and across how many levels?":
      "ch21-l1-the-opt-model-as-a-blueprint",
    "As a client moves from one OPT phase to the next, what actually changes about the six-part workout template?":
      "ch21-l5-building-a-real-program-with-the-opt-model",
    "A coach builds a twelve-month plan that maps a runner's month-to-month progress toward a marathon. What is this year-long plan called?":
      "ch21-l2-periodization-planning-the-year",
    "Which training plan lays out the exact workouts for a single week, such as the Monday, Wednesday, and Friday sessions?":
      "ch21-l2-periodization-planning-the-year",
    "A new client is deciding between dumbbells and a pin-stack machine for a pressing exercise. Which statement correctly captures the main tradeoff between the two?":
      "ch22-l1-free-weights-and-machines",
    "A 70-year-old beginner with no resistance-training experience states that the goal is functional strength. Which modality should the trainer introduce FIRST?":
      "ch22-l4-choosing-the-right-modality",
    "A client's primary goal is to build significant muscle size, and they ask whether elastic resistance bands are the right tool. What is the most accurate response?":
      "ch22-l2-cables-and-dynamic-training-tools",
    "A client mentions chest pain or pressure during exertion that eases when they stop. Which condition does this warning symptom most directly point to as its limiting factor?":
      "ch23-l3-training-clients-with-hypertension-or-heart-disease",
    "A client stops exercising not from muscle fatigue or leg pain but because they cannot catch their breath. This breathlessness is the primary limiting factor for which condition?":
      "ch23-l6-training-clients-with-lung-disease-or-peripheral-arterial-di",
    "A trainer describes the gradual hardening and loss of elasticity in arteries that happens as part of normal aging, distinct from plaque buildup. Which term names this normal aging process?":
      "ch23-l1-training-youth-and-older-adults",
  },
  "nasm-ces": {
    "A student wants to know what most of the CES exam questions will look like so they can study the right way. Which description fits the exam best?":
      "m0-l2-inside-the-nasm-ces-exam",
    "A client finished physical therapy for a sprained ankle two weeks ago and wants to start training with you again. He says he feels completely fine and has not been back to his provider since therapy ended. What do you need before building his corrective program?":
      "m1-l3-professional-scope-of-the-ces",
    "A client walks in complaining of knee pain, but during assessment you notice his ankle barely moves and his hip feels tight. Which model explains why pain at the knee might actually be driven by the ankle or hip?":
      "m1-l1-why-corrective-exercise-matters",
    "A trainer describes corrective exercise as 'just stretching the tight muscles a client feels.' Which description actually matches the formal definition of corrective exercise?":
      "m1-l1-why-corrective-exercise-matters",
    "A client jokes that he is safe from movement problems because he never sits still and trains hard every single day with no rest. Based on what degrades movement quality, why is his reasoning flawed?":
      "m1-l1-why-corrective-exercise-matters",
    "A trainer says that during a slow lowering of a heavy load, a muscle lengthens under tension to control the descent. Which type of muscle action is this?":
      "m2-l2-muscles-as-movers-and-teams",
    "A dedicated client insists that pressing harder on the roller will give him bigger flexibility gains, citing his usual no-pain-no-gain approach. Which statement best corrects him?":
      "m3-l2-how-to-apply-self-myofascial-techniques",
    "A specialist is building a stretching plan and lists the lengthening tools a Corrective Exercise Specialist is meant to use. Which set is correct?":
      "m4-l1-what-lengthening-is",
    "A client performs an isometric contraction of the target muscle for several seconds, relaxes, then is passively eased into a deeper hold. Which technique is being described?":
      "m4-l1-what-lengthening-is",
    "A specialist prescribes static stretching for a healthy 40-year-old client with an overactive, shortened hamstring on a normal training day. How long should each hold last?":
      "m4-l3-applying-static-neuromuscular-and-dynamic-stretching",
    "A 70-year-old client is doing static stretching to improve range of motion. To get better and longer-lasting gains for this age group, how long should each static hold be?":
      "m4-l3-applying-static-neuromuscular-and-dynamic-stretching",
    "During the activate phase, isolated strengthening is aimed at which kind of muscle tissue?":
      "m5-l1-what-activation-is",
    "When coaching the tempo for an isolated strengthening rep, how should the specialist count one full repetition?":
      "m5-l2-how-to-apply-isolated-strengthening",
    "Isolated strengthening raises a muscle's intramuscular coordination. Which three things working together account for that improvement?":
      "m5-l1-what-activation-is",
    "A Corrective Exercise Specialist has finished calming the overactive tissue, restoring length to short muscles, and waking up the weak muscles for a runner with poor lower-extremity mechanics. According to the Corrective Exercise Continuum, what does the specialist do next?":
      "m6-l1-what-integration-is",
    "A specialist is setting the load and tempo for an integrated dynamic movement. Which combination of settings is correct for this phase?":
      "m6-l2-how-to-apply-integration-techniques",
    "What are the correct acute training variables for an integrated dynamic movement in a corrective program?":
      "m6-l2-how-to-apply-integration-techniques",
    "When you run a static postural assessment, in what order should you read the body within each view?":
      "m8-l2-a-systematic-approach-to-static-posture",
    "A Corrective Exercise Specialist wants to check a client for scapular winging and for an excessively flattened arch. From which view are both of these best observed?":
      "m8-l2-a-systematic-approach-to-static-posture",
    "During an overhead squat assessment a client's knees cave inward. The specialist places a small plate under the heels and repeats the squat, and the knees now track correctly over the toes. What does this finding point to as the root cause?":
      "m9-l2-transitional-movement-assessments",
    "A client reports knee pain and asks for a movement screen. Which assessment should the specialist run first?":
      "m9-l1-the-overview-of-movement-assessment",
    "A specialist is deciding the order of movement assessment categories for a client. From least to most challenging, what is the correct progression?":
      "m9-l1-the-overview-of-movement-assessment",
    "A client cannot rotate the head far enough to the right; the nose stops well short of the collarbone. Which muscles are most likely overactive and shortened?":
      "m10-l2-mobility-assessment-procedures-by-region",
    "A client passes the overhead squat and the single-leg squat with clean feet and has full dorsiflexion on the weight-bearing lunge test. Under a loaded back squat, the right arch collapses into overpronation. What is the most likely cause and the corrective priority?":
      "m11-l2-reading-foot-and-ankle-assessment-results",
    "A client shows knee valgus on the overhead squat. You re-test with the heels elevated on a small surface and the knee alignment cleans up. What does this most likely tell you about the root cause?":
      "m12-l2-reading-knee-assessment-results",
    "During an overhead squat a client's low back arches hard and the buttocks stick out, showing an anterior pelvic tilt with excessive lumbar lordosis. Which muscle pairing best explains this finding?":
      "m13-l2-reading-lphc-assessment-results",
    "A client squats with an anterior pelvic tilt and an over-arched low back. The specialist cues hands on hips and the arch noticeably improves. What does this tell the specialist about the source of the problem?":
      "m13-l2-reading-lphc-assessment-results",
    "A specialist confirmed an excessive forward trunk lean with a heels-elevated modification and is now choosing an exercise for the activation phase. Which choice belongs in that phase?":
      "m13-l3-common-exercise-selections-for-the-lphc",
    "A new client sits at a desk all day and reports their upper back looks rounded. During a static assessment you confirm a thoracic kyphosis measurement of 48 degrees. How should you classify this finding?":
      "m14-l1-shoulder-and-thoracic-spine-anatomy-and-dysfunction",
    "On an exam item, a stem states that the glenohumeral joint is stable mainly because the socket is deep and bony. A student is unsure whether to agree. What is the accurate description of this joint?":
      "m14-l1-shoulder-and-thoracic-spine-anatomy-and-dysfunction",
    "A client reaches overhead during the squat assessment by hiking both shoulders up toward their ears. What is this compensation called, and which muscles are borrowing the motion?":
      "m14-l2-reading-shoulder-and-thoracic-assessment-results",
    "You are building the inhibit phase for a client with arms fall forward. According to the acute variables, how long should you hold a tender spot during self-myofascial rolling?":
      "m14-l3-exercise-selections-for-the-thoracic-spine-and-shoulder",
    "A software developer types eight hours a day with no wrist support, holding the wrists bent backward the whole time. They now report aching pain on the outside of the elbow. Based on this grip pattern, which forearm muscles are most likely tight, and which side of the elbow should you expect the pain?":
      "m15-l1-elbow-and-wrist-anatomy-and-dysfunction",
    "Place the four phases of the Corrective Exercise Continuum for a client with chronic elbow flexion in the correct order.":
      "m15-l3-corrective-strategies-for-the-elbow-and-wrist",
    "During an overhead squat, a client cannot fully straighten their elbows at the top, and you notice their wrists bending sharply backward. What does the backward wrist bend represent, and what is the likely culprit at the elbow?":
      "m15-l2-reading-elbow-and-wrist-assessment-results",
    "A graphic designer spends most of her day with her head pushed in front of her shoulders while looking at a monitor. During her static posture assessment you also notice her shoulders roll forward. What is the name for this combined posture pattern?":
      "m16-l1-the-cervical-spine-anatomy-and-dysfunction",
    "During an overhead squat assessment, a client's neck extends too far and the head juts forward at the bottom of the squat. Which muscle is most likely underactive?":
      "m16-l2-reading-cervical-assessment-results",
    "You are sequencing a cervical corrective program for a client with forward head posture. Which order of phases is correct?":
      "m16-l3-exercise-selections-for-the-cervical-spine",
    "A specialist tells a new client that the days off between hard sessions are when the body and brain restock and get ready for the next workout, and that those days should be planned just like the workouts themselves. Which statement best captures how recovery is defined in this module?":
      "m17-l1-self-care-and-recovery-foundations",
    "A specialist is sorting recovery focuses into the correct phase. Where do habits for nutrition and hydration before, during, and after activity belong?":
      "m17-l1-self-care-and-recovery-foundations",
    "A client asks which recovery phase is where corrective exercise and self-care movement work actually lives. What is the best answer, and what is that phase focused on?":
      "m17-l1-self-care-and-recovery-foundations",
    "A specialist reviews the rest-phase targets with a client. Which set of numbers is correct?":
      "m17-l2-recovery-planning",
    "A client will lose less than three percent of body weight during a training session and asks how much fluid to drink to stay ahead of dehydration. What does the hydration rule recommend?":
      "m17-l2-recovery-planning",
    "A client foam rolls and stretches her tight hips every session, says she feels great, and asks if that covers her corrective work. What is the most accurate response a specialist should give?":
      "m18-l2-programming-when-compensations-are-present",
    "A cyclist's assessment shows compensations at the foot and ankle, the lumbo-pelvic-hip complex, and the shoulders. The lumbo-pelvic-hip complex throws the most compensations across the static, movement, and mobility tests, and the client can give only ten minutes, two days a week to start. What is the best initial approach?":
      "m18-l2-programming-when-compensations-are-present",
    "A specialist has built four corrective programs for a client, ranked by priority. How should they roll the programs out over the first several weeks?":
      "m18-l1-real-world-application-of-corrective-exercise",
    "A client has one stubborn compensation and a few free minutes scattered through her workday. She wants the fastest progress on that single problem. What approach fits best practice?":
      "m18-l2-programming-when-compensations-are-present",
    "A client's psoas major (a hip flexor) is chronically tight and overactive. On the exam you are asked what this most directly causes first. Which answer reflects the correct order of events?":
      "m2-l8-how-movement-impairment-starts",
    "A specialist has finished inhibition, lengthening, and activation for a client with poor lower-extremity mechanics whose goal is to run faster. Each muscle now does its own job well, but sending the client straight to sprinting brings the old pattern right back. What does the integration phase add that the first three phases did not?":
      "m6-l1-what-integration-is",
    "A client stands in a relaxed position with flat feet, and both the hip and knee on each side turned inward. Based only on the static postural assessment, what can the Corrective Exercise Specialist correctly conclude?":
      "m8-l1-what-static-posture-tells-you",
    "A desk worker presents with a forward head, rounded shoulders, and a rounded upper back. According to Janda's patterns, which muscles are most likely overactive and shortened?":
      "m8-l3-common-postural-distortion-patterns",
    "A client buys a percussion massage gun after seeing an athlete use it online and asks whether it works better than her old foam roller. Based on what the research currently shows, what is the best answer?":
      "m17-l3-recovery-strategies-tools-and-methods",
    "After reviewing a questionnaire showing five hours of sleep, ten minutes of relaxation, and an eight out of ten on stress, the specialist wants to build the recovery strategy that the client is most likely to follow. What is the best move in the create step?":
      "m17-l4-communication-skills-for-adherence",
  },
};
