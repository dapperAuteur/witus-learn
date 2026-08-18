import type { AuthoredCourse } from "./authored-course";

// Voice Acting: The Instrument (VOICE-01 when the series gets its second course).
//
// Plan: plans/65-implement-unbuilt-features-and-courses.md Phase 1; source note:
// plans/future-courses/acting/voice-acting.md (a syllabus scrape of a live-cohort school).
// This course adapts that scope to what a self-paced course can HONESTLY deliver, which is the
// instrument itself: how the voice works, articulation, the mic and the room, the read, and a
// clear-eyed look at the business. It makes no promise of coaching, community, or work.
//
// RULES THIS FILE FOLLOWS AND THE NEXT AUTHOR SHOULD NOT BREAK:
//
// 1. No promised outcomes. The source note sells "engineered luck" and industry connections; an
//    async course has neither, and pretending otherwise is the exact kind of unverifiable claim
//    this catalog refuses. The business lesson says plainly what a course can and cannot do.
// 2. Anatomy and voice-science claims stay at the textbook level and cite real references (Titze,
//    Ladefoged & Johnson, McKinney, NIDCD). Anything a clinician owns (lisp remediation, persistent
//    hoarseness) is referred out to SLPs and laryngologists, never treated here.
// 3. No dollar figures, no market-share numbers, no "most working actors" statistics. Rates change
//    and fabricated stats are forbidden; the business lesson points at the published rate guides
//    and the union instead of quoting numbers that will rot.
// 4. Assessment is multiple-choice and :::reveal self-checks. Performance quality cannot be graded
//    by string equality, so there are no typed fill-ins anywhere in this course.
export const VOICE_ACTING_COURSE: AuthoredCourse = {
  title: "Voice Acting: The Instrument",
  description:
    "Before auditions, demos, or a single paid read, there is the instrument: breath, vocal folds, articulators, the mic, and the room. This course teaches how your voice actually works, how to keep it healthy, how to record it cleanly at home, and how to break down a script, then closes with an honest map of the business, with no promises a course cannot keep.",
  lessons: [
    // ── Section 1 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "what-voice-acting-is",
      title: "1 · What voice acting is, and what this course is not",
      section: "Section 1 · The instrument",
      body: `Voice acting is performing with the voice alone, recorded, for someone else's script. The work is wider than most people picture when they hear the phrase: commercials, corporate and documentary narration, audiobooks, e-learning modules, video games, animation, dubbing, promos, phone systems, museum guides, toys. The animation and game roles get the attention; the narration, e-learning, and commercial work make up an enormous share of what is actually recorded every day (U.S. Bureau of Labor Statistics, 2024).

Almost all of it now starts the same way: a performer, alone, in a small treated space at home, recording an audition or a booked job and sending files. That is why this course spends as much time on the mic and the room as on the read. A wonderful performance recorded badly is not usable, and nobody is coming to fix your room for you.

## What this course teaches

The instrument, end to end:

- **How the voice works**: breath as power, vocal folds as source, the vocal tract as the filter that makes the sound yours.
- **Care and warmup**: keeping the instrument healthy, and what to do before a session.
- **Articulation**: consonants, vowels, plosives, sibilance, and clarity that still sounds like a human being.
- **The mic and the room**: technique, treatment on a budget, and clean levels.
- **The read**: script analysis, intention, and the major genres.
- **The business, honestly**: what the path in actually looks like, without a sales pitch.

## What this course is not

Live courses in this field sell cohorts, coaching, peer community, and industry introductions. Some deliver them. This course is self-paced text and practice, and it will not pretend to be the other thing: there is no live feedback here, no casting director waiting at the end, and finishing it does not put you in line for work. What it can do is make sure that when you do put your voice in front of people, the instrument, the recording, and the read are not the reasons you get passed over.

:::reveal Why does a home-recording lesson belong in a voice acting course at all? ||| Because nearly all auditioning and much of the finished work now happens in the performer's own space. A read that is performed well but recorded badly is not usable, so the recording chain is part of the craft.

:::reveal A course promises that its graduates get cast. What is wrong with that claim? ||| Casting depends on the market, the roles open that month, and taste, none of which a course controls. A course can improve your instrument and your recordings; it cannot promise outcomes it has no power over.

## Sources
U.S. Bureau of Labor Statistics. (2024). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm`,
    },
    {
      slug: "how-your-voice-works",
      title: "2 · Power, source, filter: how the sound is made",
      section: "Section 1 · The instrument",
      body: `Every sound you will ever record comes from a three-part system, and every technique in this course works on one of the three parts (Titze, 2000).

**Power: the breath.** Your lungs push air upward. The steadiness of that airflow decides the steadiness of everything downstream. A wobbling, under-supplied breath cannot produce a steady tone no matter what the rest of the system does.

**Source: the vocal folds.** Inside the larynx sit two small folds of tissue. When you bring them together and push air through, they blow apart and snap back together hundreds of times per second, chopping the airstream into pulses. That buzz is the raw sound. Pitch comes from how fast the folds vibrate: stretch them longer and tighter and the pitch rises, relax them and it falls (National Institute on Deafness and Other Communication Disorders, n.d.).

**Filter: the vocal tract.** The raw buzz then travels through your throat, mouth, and nose. The shape of that passage, which you change constantly with your tongue, jaw, lips, and soft palate, boosts some frequencies and swallows others. This filtering is why the same buzz becomes an "ee" or an "ah", and it is most of what makes your voice recognizably yours.

The practical point of the model: when something sounds wrong, diagnose which part it lives in. A shaky sustained note is usually power. A pressed, tight, effortful tone is usually source. A muffled or overly bright sound is usually filter. Working on the wrong part wastes practice time.

## What "resonance" means without the mysticism

Voice teachers talk about placing the sound "forward" or finding "mask resonance". Underneath the imagery is the filter: adjusting the tract's shape so the frequencies that carry warmth and clarity come through. The imagery is fine, and often genuinely useful, as long as you remember that nothing is being sent anywhere. You are reshaping a tube, not aiming a beam (McKinney, 2005).

## Sources
McKinney, J. C. (2005). *The diagnosis and correction of vocal faults: A manual for teachers of singing and for choir directors*. Waveland Press.

National Institute on Deafness and Other Communication Disorders. (n.d.). *Taking care of your voice*. https://www.nidcd.nih.gov/health/taking-care-your-voice

Titze, I. R. (2000). *Principles of voice production* (2nd printing). National Center for Voice and Speech.`,
      recallContent: [
        {
          prompt: "Name the three parts of the power-source-filter model and what each contributes.",
          answer:
            "Power is the breath from the lungs, supplying steady airflow. Source is the vocal folds, chopping that air into a raw buzz. Filter is the vocal tract, whose changing shape turns the buzz into recognizable speech sounds and gives the voice its character.",
        },
        {
          prompt: "A sustained tone comes out shaky and uneven. Which part of the system do you check first, and why?",
          answer:
            "Power, the breath. The folds and the tract can only be as steady as the airflow driving them, so an uneven tone usually traces back to unsteady breath support.",
        },
      ],
    },
    {
      slug: "breath-and-posture",
      title: "3 · Breath and posture: the part nobody can hear directly",
      section: "Section 1 · The instrument",
      body: `Nobody listening to your read hears your posture. They hear its consequences: a phrase that runs out of air, a tone that tightens at the end of sentences, an audible gasp between lines. Breath and alignment are the least glamorous topics in this course and the highest-leverage ones.

## Low breath, not big breath

The habit to build is breathing low: letting the belly and lower ribs expand on the inhale so the diaphragm can descend fully, rather than lifting the chest and shoulders. A high, clavicular breath feels dramatic and holds little usable air; it also drags tension straight into the neck and larynx, exactly where you cannot afford it (Linklater, 2006).

The habit to break is the opposite of what beginners expect. The problem is rarely taking in too little air. It is grabbing a huge breath, clamping it, and then metering it out with throat tension. Support is not pressure. Support is a steady, managed exhale from the torso, with the throat left out of the job (McKinney, 2005).

A simple check: lie on your back, one hand on your belly, and breathe naturally. The hand rises and falls; the chest barely moves. That is the pattern to keep when you stand up.

## Alignment

The voice is housed in the body, and the body's arrangement changes the sound. The working checklist:

- Feet grounded, weight even.
- Spine long, as if gently lifted from the crown, not braced.
- Shoulders released, not pinned back.
- Jaw unclenched, tongue resting loosely.
- Head balanced over the spine, chin neither jutting nor tucked.

Reading seated is common in this work, and it is fine if you keep the torso long rather than folding into the chair. A collapsed slouch shortens the space your breath needs, and the mic hears the difference before you feel it.

## Phrasing is breathing

Where you breathe is a performance choice. Mark your script for breath spots at the punctuation that matters, and take the breath calmly through a relaxed open mouth rather than snatching it. Rushed, noisy inhales are one of the most common edits a beginner's audio needs, and the fix is planning, not editing.

:::reveal Why is a huge gulped breath before a long sentence usually counterproductive? ||| Because the problem it causes is worse than the one it solves: a clamped, over-full breath gets metered out with throat tension, tightening the tone. A calm low breath with a managed exhale carries a long phrase better.

:::reveal What should your chest and shoulders be doing during a good low inhale? ||| Almost nothing. The belly and lower ribs expand while the chest stays quiet and the shoulders stay released. Visible chest-and-shoulder lifting signals a shallow, tension-prone breath.

## Sources
Linklater, K. (2006). *Freeing the natural voice: Imagery and art in the practice of voice and language* (Rev. ed.). Drama Publishers.

McKinney, J. C. (2005). *The diagnosis and correction of vocal faults: A manual for teachers of singing and for choir directors*. Waveland Press.`,
    },
    {
      slug: "vocal-health-and-warmups",
      title: "4 · Vocal health, and a warmup that fits in ten minutes",
      section: "Section 1 · The instrument",
      body: `Your vocal folds are small, wet tissue surfaces that collide hundreds of times a second whenever you speak. They are the one part of your rig you cannot replace, so their care is not optional wellness advice; it is equipment maintenance.

## The short list that matters

- **Hydration.** The folds work best lubricated, and lubrication comes from overall hydration over hours, not from a sip of water hitting your throat during a session. Drink steadily through the day (National Institute on Deafness and Other Communication Disorders, n.d.).
- **Rest after load.** Long sessions, loud character work, and shouting all tax the folds. Build in quiet time afterward the way a runner builds in recovery.
- **Do not push through pain.** Pain, a scratchy burn, or a voice that cracks and cuts out are stop signals, not obstacles to power through. Pushing a strained voice compounds the damage.
- **Beware the loud whisper.** A forced, breathy stage whisper can strain the folds more than comfortable speech. If your voice is tired, speak less, quietly and normally, rather than whispering hard.
- **Persistent hoarseness is a medical question.** Hoarseness that lasts beyond a couple of weeks without an obvious cold deserves a laryngologist, and recurring voice trouble deserves a speech-language pathologist. Coaches and courses, this one included, are not clinicians (American Speech-Language-Hearing Association, n.d.).

## A ten-minute warmup

The purpose of a warmup is to bring blood flow, breath, and articulation online gently before you ask for performance. A workable sequence:

1. **Release** (2 min): roll the shoulders, release the jaw, let the tongue go slack, two or three slow low breaths.
2. **Hum** (2 min): gentle hums on a comfortable pitch, feeling the buzz forward in the face, sliding slowly up and down a small range.
3. **Lip trills** (2 min): the motorboat flutter, gliding through your range. Trills force steady airflow and keep the throat out of the work, which is why every voice teacher uses them.
4. **Sirens** (2 min): an easy "ng" or "oo" gliding from low to high and back, never pushing the top or bottom.
5. **Articulation** (2 min): a few rounds of tongue twisters spoken precisely and lightly, speeding up only while precision holds.

None of this should ever hurt. A warmup that hurts is a warmup being done too hard.

:::reveal Your voice feels rough mid-session and you have an hour left to record. What is the professional move? ||| Stop. A rough, painful voice is a stop signal, and pushing through compounds the strain. Reschedule or finish another day; the folds are the one piece of equipment you cannot replace.

:::reveal Why does sipping water during a session not fix a dry, sticky vocal quality? ||| Swallowed water never touches the vocal folds; it goes down the esophagus. Fold lubrication comes from being hydrated over the preceding hours, so the fix is steady daily hydration, not a sip at the mic.

## Sources
American Speech-Language-Hearing Association. (n.d.). *Voice disorders* (Practice Portal). https://www.asha.org/

National Institute on Deafness and Other Communication Disorders. (n.d.). *Taking care of your voice*. https://www.nidcd.nih.gov/health/taking-care-your-voice`,
      recallContent: [
        {
          prompt: "What are the stop signals that mean a session should end early?",
          answer:
            "Pain, a scratchy burning sensation, or a voice that cracks and cuts out. These mean strain, and continuing compounds the damage.",
        },
        {
          prompt: "When does hoarseness stop being a technique problem and become a medical one?",
          answer:
            "When it persists beyond a couple of weeks without an obvious cause like a cold. That deserves a laryngologist, and recurring voice trouble deserves a speech-language pathologist.",
        },
      ],
    },
    {
      slug: "quiz-the-instrument",
      title: "5 · Quiz: the instrument",
      section: "Section 1 · The instrument",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "In the power-source-filter model, what do the vocal folds contribute?",
            options: [
              "They are the power, pushing air upward from the lungs",
              "They are the source, chopping airflow into a raw buzzing tone",
              "They are the filter, shaping the buzz into vowels and consonants",
              "They set volume only, and have no effect on pitch at all",
            ],
            correctIndex: 1,
            explanation:
              "The folds interrupt the airstream hundreds of times per second, producing the raw buzz. The lungs are the power; the vocal tract above the folds is the filter that shapes the sound.",
            sourceLessonSlug: "how-your-voice-works",
          },
          {
            prompt: "How does pitch rise in the voice?",
            options: [
              "The vocal folds stretch tighter and vibrate faster",
              "The lungs push a larger total volume of air per breath",
              "The tongue arches higher toward the hard palate",
              "The jaw opens wider to enlarge the mouth's cavity",
            ],
            correctIndex: 0,
            explanation:
              "Pitch is vibration speed. Stretching the folds longer and tighter makes them vibrate faster, raising pitch. Tongue and jaw shape the filter, changing the vowel and color rather than the pitch.",
            sourceLessonSlug: "how-your-voice-works",
          },
          {
            prompt: "A sustained tone keeps wavering unevenly. Which part of the system does the model say to check first?",
            options: [
              "The filter, since resonance controls a tone's evenness",
              "The articulators, since consonants interrupt the airflow",
              "The power, since folds can only be as steady as their airflow",
              "The soft palate, since nasality makes a tone unstable",
            ],
            correctIndex: 2,
            explanation:
              "Everything downstream inherits the breath's steadiness. An uneven sustained tone usually traces to uneven support, so diagnose power before blaming the folds or the tract.",
            sourceLessonSlug: "how-your-voice-works",
          },
          {
            prompt: "What does a good low inhale look like from the outside?",
            options: [
              "The chest lifts visibly while the shoulders rise slightly",
              "The belly and lower ribs expand while the chest stays quiet",
              "Nothing moves at all, since good breathing is invisible",
              "The shoulders pin back as the spine straightens sharply",
            ],
            correctIndex: 1,
            explanation:
              "The diaphragm descending pushes the belly and lower ribs outward. A lifting chest and rising shoulders signal a shallow clavicular breath that holds little air and invites neck tension.",
            sourceLessonSlug: "breath-and-posture",
          },
          {
            prompt: "What is breath support, as this course defines it?",
            options: [
              "Taking in the largest possible breath before each phrase",
              "Squeezing the abdominal muscles hard through every line",
              "Holding the breath firmly at the top before releasing it",
              "A steady, managed exhale from the torso, throat left relaxed",
            ],
            correctIndex: 3,
            explanation:
              "Support is management of the exhale, not pressure. Over-filling and clamping the breath pushes the control job into the throat, which tightens the tone.",
            sourceLessonSlug: "breath-and-posture",
          },
          {
            prompt: "Why is a forced stage whisper a poor way to rest a tired voice?",
            options: [
              "A breathy forced whisper can strain the folds more than quiet normal speech",
              "Whispering dries out the mouth faster than speaking at full volume does",
              "A whisper trains the articulators to be lazy on plosive consonants",
              "Whispering lowers the resting pitch of the voice over several days",
            ],
            correctIndex: 0,
            explanation:
              "Pushing air hard through folds held apart is its own kind of strain. A tired voice wants less talking at a comfortable quiet volume, not effortful whispering.",
            sourceLessonSlug: "vocal-health-and-warmups",
          },
          {
            prompt: "Which situation calls for a clinician rather than more practice or coaching?",
            options: [
              "A read that keeps running out of air on long sentences",
              "A jaw that feels tight at the start of morning sessions",
              "Hoarseness that has lasted several weeks with no obvious cause",
              "A character voice that tires the throat after twenty minutes",
            ],
            correctIndex: 2,
            explanation:
              "Persistent unexplained hoarseness is a medical question for a laryngologist. The other three are training and technique matters, though the tiring character voice also deserves gentler technique.",
            sourceLessonSlug: "vocal-health-and-warmups",
          },
          {
            prompt: "What is the actual purpose of lip trills in a warmup?",
            options: [
              "They strengthen the lips for crisper plosive consonants",
              "They force steady airflow while keeping the throat out of the work",
              "They stretch the vocal folds to extend range permanently",
              "They warm the resonating spaces of the face and skull",
            ],
            correctIndex: 1,
            explanation:
              "A trill only sustains when airflow is even, and it cannot be muscled from the throat, so it trains exactly the steady low-effort support the rest of the session needs.",
            sourceLessonSlug: "vocal-health-and-warmups",
          },
        ],
      },
    },

    // ── Section 2 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-articulators",
      title: "6 · The articulators: where speech is actually shaped",
      section: "Section 2 · Articulation",
      body: `The buzz from your folds becomes language in the last few centimeters of the journey. The shapers are called articulators: the lips, the tongue (tip, blade, and back are effectively separate instruments), the teeth, the alveolar ridge just behind the upper teeth, the hard palate, the soft palate, and the jaw carrying all of it (Ladefoged & Johnson, 2014).

**Vowels** are open sounds: the airstream flows freely and the tongue and lip shape decide which vowel you get. "Ee" arches the tongue high and forward; "ah" drops it low and back; rounding the lips turns "ee" toward "oo". Vowels carry the tone, the pitch, and most of the emotional information in a line.

**Consonants** are interruptions: some articulator obstructs the airflow completely or nearly, then releases. Where the obstruction happens (lips, ridge, palate) and how (a full stop, a squeezed hiss, a nasal detour) defines each consonant. Consonants carry intelligibility: strip them and a sentence becomes mush; strip the vowels and a listener can often still decode it.

## Why a voice actor needs this map

Because direction and self-diagnosis both point at it constantly. "That read is muddy" almost always means under-committed consonants. "It sounds tight" often means a clenched jaw dragging the tongue with it. "Too nasal" means the soft palate is hanging open on non-nasal sounds. When you can feel which articulator is misbehaving, notes stop being mysterious and start being fixable.

A practical exercise: speak a paragraph with your teeth gently together, jaw closed, forcing the tongue and lips to do all the work. Then release the jaw and speak it normally. Most people find the second pass noticeably clearer than their default, because the drill wakes up articulators that the jaw usually bulldozes.

:::reveal Vowels and consonants divide the labor of speech. Which carries intelligibility, and which carries tone and emotion? ||| Consonants carry intelligibility: they are the interruptions that make words decodable. Vowels are the open sounds that carry tone, pitch, and most of the emotional color.

:::reveal A director says your read is "muddy". Which articulator failure is that note usually pointing at? ||| Under-committed consonants. The stops and fricatives are not landing cleanly, so words blur together. The fix is precision in the tongue and lips, not more volume.

## Sources
Ladefoged, P., & Johnson, K. (2014). *A course in phonetics* (7th ed.). Cengage Learning.`,
    },
    {
      slug: "plosives-and-sibilance",
      title: "7 · Plosives and sibilance: the sounds that fight the mic",
      section: "Section 2 · Articulation",
      body: `Two families of consonants behave themselves in a room and misbehave in front of a microphone. Learning to manage them at the source is a core home-studio skill, because fixing them afterward costs quality and time.

## Plosives

The plosives, p, b, t, d, k, and g, work by damming the airstream completely and releasing it in a small burst (Ladefoged & Johnson, 2014). The p and b of the pair made at the lips throw that burst straight forward. When the burst of air hits a microphone's diaphragm, the mic does not hear a consonant; it hears a wind gust, and reproduces it as a low-frequency thump. That is a plosive pop, the signature sound of an untreated home recording.

Three defenses, in the order to try them:

1. **Angle.** Speak slightly across the mic rather than straight into it, so the air burst passes by the diaphragm instead of hitting it.
2. **A pop filter.** The mesh screen between mouth and mic breaks up the air burst while letting the sound through. It is the cheapest insurance in audio.
3. **Technique.** Soften the attack on p and b when the line allows, releasing the dam a little less explosively. Do not overdo this; a p with no release stops being a p.

## Sibilance

The sibilants, s and z and their "sh" and "zh" cousins, squeeze air through a narrow channel at the ridge behind the teeth, producing concentrated high-frequency hiss. Microphones, especially bright modern ones, love that hiss more than ears do. The result is a read where every s slices: harsh, fatiguing sibilance.

Editors can tame it afterward with a de-esser, but the at-the-source defenses are better: back off the mic slightly, angle off-axis, and lighten the s itself, shortening it rather than leaning into it. A useful self-test is recording one sentence loaded with s sounds, playing it back at a slightly loud volume, and listening for wince moments.

## The balance to keep

Every defense in this lesson trades against clarity. Angle too far off-axis and the tone dulls; soften plosives too much and words smear; shorten every s and the read lisps. The goal is not eliminating these consonants' energy; it is keeping it in proportion, which your own recordings, played back honestly, will teach you faster than any rule.

:::reveal Why does a p pop on a microphone when it sounds fine in the room? ||| A p releases a burst of moving air. Ears a meter away never feel it, but a mic diaphragm centimeters away gets hit by the gust itself and reproduces it as a low thump.

:::reveal What are the three defenses against plosive pops, in the order to try them? ||| First angle the mic so bursts pass by the diaphragm, then add a pop filter to break up the air, then soften the plosive attack in technique when the line allows.

## Sources
Ladefoged, P., & Johnson, K. (2014). *A course in phonetics* (7th ed.). Cengage Learning.`,
      recallContent: [
        {
          prompt: "Which consonants are the plosives, and what physically defines them?",
          answer:
            "P, b, t, d, k, and g. Each dams the airstream completely and releases it in a burst; the lip pair, p and b, throws that burst forward hard enough to pop a close microphone.",
        },
        {
          prompt: "What is sibilance and why do mics exaggerate it?",
          answer:
            "The concentrated high-frequency hiss of s, z, and sh sounds, made by squeezing air through a narrow channel. Many mics emphasize exactly those high frequencies, so the hiss lands harsher on the recording than it sounds in the room.",
        },
      ],
    },
    {
      slug: "natural-articulation",
      title: "8 · Natural articulation, over-enunciation, and working with a lisp",
      section: "Section 2 · Articulation",
      body: `The beginner's arc in articulation has two overcorrections. First the mumble, because speaking to a mic alone in a padded closet does not feel like communicating. Then, after the first "be clearer" note, the over-enunciation: every consonant bitten, every word its own island, a read that is perfectly intelligible and completely inhuman.

Modern voice direction overwhelmingly asks for the third thing: **conversational clarity**. Real, warm, like talking to one person, and still perfectly decodable. Getting there is less about the consonants themselves than about what drives them:

- **Intention first.** When you genuinely mean the sentence at someone, rhythm and stress organize themselves, and articulation mostly follows. Precision without intention is what over-enunciation is.
- **Operative words.** A sentence has a small number of words that carry its point. Let precision live there; let the connective tissue stay light. Equal weight on every word is how announcers sounded in 1955, and it reads as parody now.
- **Tempo honesty.** Most muddiness is speed. Slowing a read from rushed to deliberate fixes more articulation problems than any drill.

A self-test that works: record a line, then say the same content to an imaginary friend in your own words, and record that. Compare. The second version's naturalness with the first version's text is the target.

## Lisps and other speech differences

A lisp is a difference in how the sibilant channel is formed, most commonly the tongue contacting the teeth on s and z. Three honest things belong in this lesson.

First, if you want to change it, the professionals for that are speech-language pathologists; articulation modification is genuinely their field, not a voice course's (American Speech-Language-Hearing Association, n.d.). Second, mic technique from the previous lesson helps at the margins, since a softer, shorter s records more cleanly regardless of how it is formed. Third, and worth saying plainly: distinctive voices work in this industry. Casting wants recognizable humans, and plenty of working performers have speech patterns a diction manual would flag. A lisp narrows some lanes, like classical announcer reads, and matters far less in character, conversational commercial, and animation work. It is a feature of your instrument to manage and price into your positioning, not a disqualification.

:::reveal What separates conversational clarity from over-enunciation? ||| Intention. Conversational clarity puts precision on the operative words while the rest stays light, driven by meaning the line at someone. Over-enunciation weights every consonant equally, which is precise and inhuman.

:::reveal Who is the right professional for someone who wants to change a lisp, and what can mic technique do meanwhile? ||| A speech-language pathologist; articulation modification is clinical work. Meanwhile, off-axis placement and a lighter, shorter s record more cleanly whatever the tongue is doing.

## Sources
American Speech-Language-Hearing Association. (n.d.). *Speech sound disorders: Articulation and phonology* (Practice Portal). https://www.asha.org/`,
    },
    {
      slug: "quiz-articulation",
      title: "9 · Quiz: articulation",
      section: "Section 2 · Articulation",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "In speech, what is the fundamental difference between a vowel and a consonant?",
            options: [
              "Vowels flow freely through an open tract; consonants obstruct and release the airflow",
              "Vowels are made by the vocal folds; consonants are made entirely by the lips",
              "Vowels are always voiced loudly; consonants are always whispered more quietly",
              "Vowels carry intelligibility while consonants carry the emotional color of a line",
            ],
            correctIndex: 0,
            explanation:
              "Vowels are open, freely flowing sounds shaped by tongue and lip position; consonants interrupt the stream with an obstruction somewhere in the tract. The labor division runs the other way: consonants carry intelligibility, vowels carry tone.",
            sourceLessonSlug: "the-articulators",
          },
          {
            prompt: "A director calls your read \"muddy\". What is that note usually pointing at?",
            options: [
              "The room's echo blurring the recording's low frequencies",
              "Under-committed consonants failing to land cleanly",
              "A pitch sitting too low in your comfortable vocal range",
              "Sibilance cutting harshly through the recorded track",
            ],
            correctIndex: 1,
            explanation:
              "Muddiness in a read is almost always consonant precision: stops and fricatives smearing so words blur together. Room echo is a recording problem, but the note about a read points at the articulators.",
            sourceLessonSlug: "the-articulators",
          },
          {
            prompt: "Why does a p sound fine to a person in the room but thump on a close microphone?",
            options: [
              "The mic adds low frequencies to every consonant automatically",
              "Human ears cannot perceive frequencies as low as a spoken p",
              "The released air burst physically hits the diaphragm as a gust of wind",
              "Close mics compress dynamics, which exaggerates quiet consonants",
            ],
            correctIndex: 2,
            explanation:
              "A plosive releases dammed-up air. At conversational distance that gust dissipates, but a diaphragm a few centimeters away gets struck by the moving air itself and renders it as a low-frequency thump.",
            sourceLessonSlug: "plosives-and-sibilance",
          },
          {
            prompt: "Which is the recommended first defense against plosive pops?",
            options: [
              "Softening every p and b until the burst disappears",
              "Applying a de-esser to the track during the edit",
              "Doubling the recording distance for the whole session",
              "Angling the mic so air bursts pass by the diaphragm",
            ],
            correctIndex: 3,
            explanation:
              "Off-axis placement costs nothing and preserves the consonant. Softening too much smears words, distance changes the whole tone, and a de-esser targets sibilance rather than pops.",
            sourceLessonSlug: "plosives-and-sibilance",
          },
          {
            prompt: "What physically produces sibilance?",
            options: [
              "Air squeezed through a narrow channel near the ridge behind the teeth",
              "The vocal folds vibrating at their highest available frequency",
              "The soft palate opening so air escapes through the nose",
              "Both lips closing completely and releasing a burst of air",
            ],
            correctIndex: 0,
            explanation:
              "S and its cousins force the airstream through a tight channel, producing concentrated high-frequency hiss. The lip closure describes p and b; the nasal detour describes m and n.",
            sourceLessonSlug: "plosives-and-sibilance",
          },
          {
            prompt: "What does over-enunciation get wrong, given that it is perfectly intelligible?",
            options: [
              "It hits every word with equal weight, which no longer sounds like a human talking",
              "It slows the read down too much for commercial time limits to accommodate",
              "It emphasizes vowels so strongly that the consonants disappear entirely",
              "It causes plosive pops by making every consonant release too much air",
            ],
            correctIndex: 0,
            explanation:
              "Modern direction wants conversational clarity: precision on the operative words, lightness elsewhere, driven by intention. Equal bite on every consonant reads as an announcer parody, however decodable it is.",
            sourceLessonSlug: "natural-articulation",
          },
          {
            prompt: "Most muddiness in a beginner's read is fixed fastest by which change?",
            options: [
              "Buying a brighter microphone that emphasizes consonants",
              "Slowing down, since rushed tempo is the usual cause",
              "Biting every consonant harder throughout the entire script",
              "Raising the overall pitch so words separate more clearly",
            ],
            correctIndex: 1,
            explanation:
              "Speed is the most common cause of smeared articulation. Slowing from rushed to deliberate fixes more clarity problems than drills or gear, and keeps the read human where harder biting would not.",
            sourceLessonSlug: "natural-articulation",
          },
          {
            prompt: "Which statement about lisps and voice work reflects this course's position?",
            options: [
              "A lisp disqualifies a performer from paid voice work until corrected",
              "Voice courses are the right place to clinically retrain a lisp",
              "A lisp narrows some lanes but matters far less in character and conversational work",
              "Mic placement can fully neutralize a lisp on any recording",
            ],
            correctIndex: 2,
            explanation:
              "Distinctive voices work; a lisp closes some announcer-style lanes and is largely irrelevant in others. Changing one is a speech-language pathologist's field, and mic technique only helps at the margins.",
            sourceLessonSlug: "natural-articulation",
          },
        ],
      },
    },

    // ── Section 3 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "mic-technique",
      title: "10 · Mic technique: distance, angle, and consistency",
      section: "Section 3 · The mic and the room",
      body: `The microphone is not a neutral witness. Where you stand relative to it changes the tone as much as anything your folds do, which makes placement a performance decision you should be making deliberately.

## Distance

Close placement gives intimacy and detail and picks up every mouth click, breath, and pop. Backing off gives the sound air and forgiveness and lets more of the room in, which is only good if the room deserves it. Most spoken-word home recording lives in the span of roughly a hand's length to a forearm's length from the mic, and where in that span depends on the read: closer for intimate narration, farther for projected character work.

More important than the choice is **keeping it**. Drifting toward and away from the mic mid-read changes volume and tone line by line, and it is one of the clearest amateur tells in an audition. Anchor yourself: a consistent stance, the script at eye level, and the mic in a fixed relationship to your mouth.

## The proximity effect

Directional microphones, which is most of what home studios use, boost low frequencies as the source gets very close (Shure, n.d.). That is the late-night radio chest tone, and it is a real tool: a touch of closeness genuinely warms a read. It is also a trap, because beginners hear that warmth and crawl onto the mic, buying boom and every plosive at full force. Use it knowingly or not at all.

## Angle

Straight on-axis gives the brightest, most detailed pickup and the maximum pop and sibilance exposure. A modest off-axis angle, speaking just past the diaphragm rather than into it, trades a little brightness for a lot of forgiveness. Combined with a pop filter, it is the standard spoken-word setup for a reason.

## Monitoring

Record with closed-back headphones at a moderate level, at least while you learn. You cannot fix what you cannot hear, and the mic hears a different world than your ears do: clicks, pops, chair creaks, and the neighbor's dryer all live in the recording, not in the room as you experience it. Once your placement habits are solid, some performers drop one ear cup to stay connected to their natural voice; that is preference, not principle.

:::reveal What is the proximity effect, and why is it both a tool and a trap? ||| Directional mics boost low frequencies as you get very close, adding warmth and chest tone. Used knowingly it flatters intimate reads; used accidentally it buys boominess plus full-force plosives as beginners crawl onto the mic chasing the warmth.

:::reveal Why do engineers care so much about a performer holding one distance from the mic? ||| Because distance sets both volume and tone. Drifting mid-read makes lines jump in level and color, which cannot be cleanly fixed afterward and reads instantly as amateur work.

## Sources
Shure. (n.d.). *Microphone techniques for recording*. https://www.shure.com/`,
      recallContent: [
        {
          prompt: "What trade does close mic placement make versus backing off?",
          answer:
            "Close placement buys intimacy and detail at the cost of hearing every click, breath, and pop, plus proximity-effect boom on directional mics. Backing off buys air and forgiveness at the cost of letting more room sound in.",
        },
        {
          prompt: "What is the standard spoken-word setup this lesson lands on?",
          answer:
            "A modest off-axis angle, speaking just past the diaphragm, with a pop filter, at a consistent distance somewhere between a hand's length and a forearm's length depending on the read.",
        },
      ],
    },
    {
      slug: "the-room-you-record-in",
      title: "11 · The room: why it matters more than the mic",
      section: "Section 3 · The mic and the room",
      body: `Ask working home-studio performers what they wish they had learned first and the answer is rarely about microphones. It is the room. A modest mic in a treated space beats an expensive mic in an untreated one, every time, because a mic cannot subtract the room it hears.

## The two enemies

**Reflections.** Sound leaves your mouth, bounces off hard flat surfaces, and arrives back at the mic a few milliseconds late. The recording picks up the direct sound plus these copies, and the result is the hollow, slappy, "recorded in a bathroom" quality. Ears filter it out in person; recordings preserve it forever.

**Noise floor.** The hum, hiss, and rumble that fill a quiet room: refrigerator, HVAC, computer fans, traffic, the dryer downstairs. You stop hearing it after two minutes; the mic never does. A noisy floor forces processing that degrades the voice, and some noise cannot be removed at all.

## Treatment on a budget

Treating a space means adding soft, absorbent, irregular material where reflections happen, and it is gloriously unglamorous:

- **A closet full of hanging clothes** is the classic first booth for a reason: dense fabric on all sides, nothing flat.
- **Thick blankets, duvets, and moving blankets**, hung on stands or frames around your recording position, kill the worst reflections in any room.
- **A corner, faced outward**, with soft treatment behind and beside you, beats the center of a room.
- **Rugs, bookshelves, and soft furniture** break up the remaining flat surfaces.

What not to buy first: thin foam tiles glued in a decorative pattern. They absorb some high frequencies, look like a studio, and leave the actual problem mostly intact. Mass and coverage beat aesthetics.

## Two honest tests

1. **The clap test.** Stand at your recording spot and clap once, hard. A tight, dead "thap" means a workable space; a metallic ring or flutter means reflections to treat.
2. **The silence test.** Record thirty seconds of nothing at your normal gain, then play it back with the volume turned up. Everything you hear is in every take you will ever record there. Hunt the sources: turn things off, seal the window gap, record at quieter hours.

:::reveal Why does a recording expose room reflections that you never notice in conversation? ||| Ears and brain filter out familiar room reflections in real time, but the mic captures direct sound plus every delayed bounce, and playback presents them all as one hollow sound your brain no longer filters.

:::reveal What is the silence test and what does it tell you? ||| Record thirty seconds of your quiet room at normal gain, then play it back loud. Whatever you hear, hum, hiss, traffic, fans, is baked into every future take, so it is the to-do list for taming your noise floor.`,
    },
    {
      slug: "levels-and-the-minimum-chain",
      title: "12 · Levels, files, and the honest minimum chain",
      section: "Section 3 · The mic and the room",
      body: `Gear talk consumes beginners because it is easier to shop than to practice. This lesson is the anti-shopping lesson: the minimum honest chain, the settings that are effectively industry convention, and the habits that matter more than any purchase.

## The minimum chain

A workable home voice setup is four things:

1. **A microphone.** Either a USB mic straight into the computer, the simplest start, or an XLR mic into an interface. Fine work has been recorded on both.
2. **An interface** (for the XLR path): converts the mic signal to digital and gives you a clean gain knob.
3. **A computer with a DAW**, the recording software. Capable free options exist on every platform; nothing about spoken word needs a paid one on day one.
4. **The treated space and closed-back headphones** from the previous lessons, which outrank everything above them.

Upgrade the room, then technique, then, distantly, the gear. A better mic in an untreated room is a higher-fidelity recording of your reflections.

## Settings and levels

Two conventions cover nearly all spoken-word delivery: record at a sample rate of 44.1 or 48 kHz, at 24-bit depth. Individual clients sometimes specify otherwise, in which case the client's spec wins; absent instructions, those values are the safe defaults.

Gain is the setting that ruins takes. Digital recording has a hard ceiling: a signal that exceeds it clips, and clipping is permanent, unfixable distortion. Set gain so your loudest expected delivery peaks comfortably below the ceiling, with visible headroom to spare on the meter. Recording a little quiet is a non-problem, since clean audio can be raised afterward; recording too hot destroys the take. When a script calls for shouting, re-check the gain at the shout, not at the conversational level.

## Habits that outrank gear

- **Record a spot of room tone** at the start of each session: a few seconds of silence for the editor (often you) to patch with.
- **Name files like a professional**: project, take, date. "Untitled_047" costs someone real time, possibly you at the callback.
- **Keep your raw takes.** Storage is cheap; a destroyed original is forever.
- **Listen back at honest volume** before ending a session. The worst discovery in this work is tomorrow's discovery of today's crackle.

:::reveal Why is recording slightly too quiet a minor problem while recording too hot is fatal? ||| Clean quiet audio can be raised afterward with no real penalty. A signal that exceeds digital's hard ceiling clips, and clipping is permanent distortion no tool can truly undo, so headroom always wins.

:::reveal In what order does this course rank spending: room, technique, gear? Why? ||| Room first, technique second, gear a distant third. A mic cannot subtract the room it hears, and better gear in an untreated space just records the reflections in higher fidelity.

## Sources
Shure. (n.d.). *Microphone techniques for recording*. https://www.shure.com/`,
      recallContent: [
        {
          prompt: "What are the safe default recording settings for spoken word, absent a client spec?",
          answer:
            "44.1 or 48 kHz sample rate at 24-bit depth. When a client specifies otherwise, the client's spec wins.",
        },
        {
          prompt: "How do you set gain for a script that includes shouting?",
          answer:
            "Set it at the shout, not the conversational level: the loudest expected delivery must peak comfortably below the digital ceiling, because clipping is permanent while a quiet recording can simply be raised later.",
        },
      ],
    },
    {
      slug: "quiz-mic-and-room",
      title: "13 · Quiz: the mic and the room",
      section: "Section 3 · The mic and the room",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why is drifting toward and away from the mic mid-read such a clear amateur tell?",
            options: [
              "It changes both volume and tone line by line in ways editing cannot cleanly fix",
              "It causes the microphone's diaphragm to wear out noticeably faster",
              "It makes the recording clip whenever the performer leans slightly inward",
              "It introduces sibilance that only appears at longer recording distances",
            ],
            correctIndex: 0,
            explanation:
              "Distance sets level and color together, so drifting makes lines jump audibly. Consistency of placement is the fix: anchored stance, script at eye level, mic in a fixed relationship to the mouth.",
            sourceLessonSlug: "mic-technique",
          },
          {
            prompt: "What is the proximity effect?",
            options: [
              "The tendency of any mic to add hiss as the source moves away",
              "Directional mics boosting low frequencies as the source gets very close",
              "The doubling of perceived volume when a second mic is added nearby",
              "High frequencies sharpening when a performer turns directly on-axis",
            ],
            correctIndex: 1,
            explanation:
              "Directional microphones emphasize lows at very close range, producing the warm radio chest tone. It flatters intimate reads when used deliberately and turns boomy when a performer crawls onto the mic by accident.",
            sourceLessonSlug: "mic-technique",
          },
          {
            prompt: "What does a modest off-axis mic angle trade, and for what?",
            options: [
              "It trades low-frequency warmth for a noticeably higher noise floor in the recording",
              "It trades several decibels of recording volume for stronger protection against clipping",
              "It trades a little brightness for much less pop and sibilance exposure",
              "It trades the recording's stereo width for a tighter and more focused mono image",
            ],
            correctIndex: 2,
            explanation:
              "Speaking just past the diaphragm instead of into it slightly softens the top end while letting plosive bursts and concentrated sibilance miss the capsule, which is why off-axis plus a pop filter is the standard spoken-word setup.",
            sourceLessonSlug: "mic-technique",
          },
          {
            prompt: "Why does this course rank the room above the microphone in upgrade priority?",
            options: [
              "Room treatment holds its value for decades while microphone technology depreciates within a few years",
              "Most microphones now ship with correction software that compensates for a room's acoustic problems",
              "A treated room makes careful gain staging unnecessary, even across long recording sessions",
              "A mic cannot subtract the room it hears, so a better mic records bad reflections in higher fidelity",
            ],
            correctIndex: 3,
            explanation:
              "Reflections and noise enter the capsule mixed with the voice, and no later purchase removes them. A modest mic in a treated space therefore beats an expensive mic in an untreated one.",
            sourceLessonSlug: "the-room-you-record-in",
          },
          {
            prompt: "What makes thin decorative foam tiles a poor first treatment purchase?",
            options: [
              "They absorb some highs while leaving the real reflection problem mostly intact",
              "They reflect low frequencies back at the performer's recording position",
              "They raise the room's noise floor by trapping heat near equipment",
              "They are effective but violate most residential fire safety codes",
            ],
            correctIndex: 0,
            explanation:
              "Thin foam looks like a studio and nibbles at high frequencies, but lacks the mass and coverage that actually tame a room. Dense irregular material, hanging clothes, thick blankets, does the real work.",
            sourceLessonSlug: "the-room-you-record-in",
          },
          {
            prompt: "The silence test asks you to record thirty seconds of nothing and play it back loud. What is it measuring?",
            options: [
              "The reflection time of the room's hard parallel surfaces",
              "The noise floor that will be baked into every future take",
              "Whether the microphone's gain knob introduces distortion",
              "The dynamic range between a whisper and a projected read",
            ],
            correctIndex: 1,
            explanation:
              "Everything audible in that playback, hum, hiss, fans, traffic, lives in every recording made in that spot. The clap test covers reflections; the silence test inventories the noise to hunt down.",
            sourceLessonSlug: "the-room-you-record-in",
          },
          {
            prompt: "Why does gain get set against the loudest expected delivery rather than the average one?",
            options: [
              "Quiet conversational passages sound noticeably better when the gain is set slightly high",
              "Level meters respond too slowly to display a read's average loudness with any accuracy",
              "Clipping at the digital ceiling is permanent, while quiet audio can simply be raised later",
              "Most audio interfaces apply automatic compression that evens out unexpectedly loud peaks",
            ],
            correctIndex: 2,
            explanation:
              "Digital's ceiling is absolute: exceed it and the take is distorted beyond repair. Headroom below the ceiling costs nothing, so the shout in the script, not the conversational line, is what the gain must accommodate.",
            sourceLessonSlug: "levels-and-the-minimum-chain",
          },
          {
            prompt: "Which habit does this course say outranks any gear purchase?",
            options: [
              "Upgrading early from a USB microphone to an XLR microphone with a dedicated interface",
              "Recording room tone and listening back at honest volume before ending a session",
              "Buying a dedicated hardware de-esser to control sibilance before it reaches the recording",
              "Using a professionally licensed paid DAW rather than one of the free recording programs",
            ],
            correctIndex: 1,
            explanation:
              "Room tone gives the editor material to patch with, and the end-of-session listen catches today's crackle today. Both cost nothing and save real work; the purchases listed change little for spoken word.",
            sourceLessonSlug: "levels-and-the-minimum-chain",
          },
        ],
      },
    },

    // ── Section 4 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "script-analysis",
      title: "14 · Script analysis: the read is decided before you speak",
      section: "Section 4 · The read, and the work",
      body: `Two performers with identical instruments read the same script. One is forgettable, one gets the callback, and the difference was decided before either said a word: one of them knew what the words were for.

Script analysis for voice work is fast, practical, and ruthless. Four questions, answered in pencil in the margin, before the first take:

**Who is talking?** Not your voice, a person: someone with a mood, a relationship to the listener, and a reason to be speaking now. Even a corporate explainer has a character, usually "the smartest friendly person on the team".

**To whom?** The single most transformative trick in voice work is choosing one specific listener. A read aimed at "the audience" goes vague and public; the same read aimed at one imagined person, your sister, a skeptical coworker, goes direct and alive. Radio and voice teachers have taught one-listener focus for generations because it works (Berry, 1973).

**Why now?** What just happened that makes this worth saying at this moment? Urgency, delight, reassurance, warning: the trigger colors everything.

**What should change?** By the end of the copy, the listener should feel or do something different. Name it. A read that is not trying to change anything is wallpaper.

## Beats and operative words

Then mark the mechanics:

- **Beats**: where the thought turns. A new tactic, a new idea, a pivot from problem to solution. Each beat gets a slight reset of energy, which is what keeps a sixty-second read from flatlining.
- **Operative words**: the few words per sentence that carry the point. Underline them, and let stress live there rather than spreading evenly.
- **Breaths**: planned at the beat boundaries, where they read as thought rather than as running out of air.

Commercial copy usually hides a structure worth finding: a problem, a promise, some proof, and an ask. Finding it tells you where the beats are, and which single sentence the whole spot exists to deliver. Land that one, and the read has done its job.

## Takes are hypotheses

Record your first read of a script, then deliberately change one variable: a different listener, a different trigger, a different word landed hardest. Three takes with three real choices beat ten takes of the same read done slightly louder. Casting listens for a person making choices, and analysis is where the choices come from.

:::reveal Why does choosing one specific listener change a read so much? ||| Speech aimed at a crowd goes vague and performative; speech aimed at one person gets direct, specific, and alive. The imagined listener pulls rhythm, warmth, and emphasis into natural shapes without conscious effort.

:::reveal What is a beat in a piece of copy, and what should happen at one? ||| A beat is where the thought turns: a new idea, tactic, or pivot. The voice takes a slight reset of energy there, which keeps the read from flatlining, and it is the natural home for a planned breath.

## Sources
Berry, C. (1973). *Voice and the actor*. Harrap.`,
    },
    {
      slug: "the-genres",
      title: "15 · The genres: same instrument, different jobs",
      section: "Section 4 · The read, and the work",
      body: `Voice work is not one market; it is several markets that happen to share a mic. Knowing the lanes matters twice: it tells you what to practice, and it tells you where your particular instrument is most saleable.

**Commercial.** Selling, in lengths from six seconds to a minute. The modern sound is conversational, warm, and specific, much closer to a friend's recommendation than to an announcer. The announcer read still exists, mostly as self-aware parody or for promos. Commercial work rewards range of attitude more than range of voices.

**Narration.** The wide middle of the industry: documentaries, corporate videos, explainers, museum audio, podcasts' scripted segments. Rewards clarity, stamina, intelligent phrasing, and the ability to sound engaged with material you met twenty minutes ago.

**E-learning.** Narration's high-volume cousin: training modules, courses. Enormous word counts, so consistency across sessions and clean self-direction matter more than color. Often the most accessible early paid work, and one of the most exposed lanes to synthetic-voice substitution, worth knowing as you decide where to invest.

**Audiobooks.** Long-form storytelling: a single performer sustaining a book, differentiating characters, keeping tone consistent across many recording days. The stamina and editing loads are heavy and the hours per finished hour surprise everyone at first. Wonderful training, demanding economics.

**Animation and games.** The lanes everyone wants. Character voice, big physicality, sometimes efforted screams and combat vocals that require real technique to survive, and, in games, sessions of repeated exertion lines. Competitive to enter, deeply fun, and the place where vocal health discipline from lesson 4 stops being theoretical.

**Dubbing.** Re-voicing performances from another language, matching lip flap and emotional truth simultaneously. A growing lane with real craft to it, and a distinct skill from origination.

**Promo, trailer, IVR, and the rest.** Station imaging, movie trailers, phone trees, toys, GPS voices, smart-device prompts. Niches with their own sounds, some deeply lucrative, most reached after general credibility is established.

There is no correct lane. There is your instrument, which fits some lanes better than others, and the honest early move is exploring several before spending demo money on one.

:::reveal Why does e-learning often come first in a new performer's paid work? ||| The volume of work is enormous and the bar is consistency and clarity rather than star color, so newer performers with clean home recording and reliable delivery can compete there earlier than in commercial or animation lanes.

:::reveal What makes game voice sessions a vocal-health topic and not just a performance topic? ||| Game work often batches efforted lines, shouts, hits, combat vocals, into repeated takes. Without technique and pacing, that load can genuinely strain the folds, which is where the health discipline from earlier lessons becomes practical.`,
      recallContent: [
        {
          prompt: "What is the modern default sound in commercial voice work?",
          answer:
            "Conversational: warm, specific, one person talking to another, closer to a friend's recommendation than to a classic announcer, which now survives mostly as parody or promo styling.",
        },
        {
          prompt: "Which lane rewards consistency across huge word counts more than vocal color, and what strategic caution comes with it?",
          answer:
            "E-learning. It is often the most accessible early paid lane, and also one of the most exposed to synthetic-voice substitution, which is worth weighing before investing heavily in it.",
        },
      ],
    },
    {
      slug: "the-business-honestly",
      title: "16 · The business, honestly",
      section: "Section 4 · The read, and the work",
      body: `This is the lesson the sales pages skip, so it is the one this course refuses to. No numbers that will rot, no engineered luck. Here is the structure of the working world you would be entering.

## How work actually arrives

Most voice work is won by **audition**: a script goes out, performers record at home and submit, someone picks. The submitted-to-booked ratio is lopsided for everyone, spectacular performers included, which means auditioning is not a phase you pass through; it is the recurring daily work of the career. A performer who cannot sustain motivation through silence and rejection does not stay a performer, whatever their instrument.

Routes to auditions, roughly in the order people encounter them:

- **Direct and local**: businesses, studios, producers, and content creators in your own network and city. Unfashionable and consistently underrated.
- **Online casting platforms**, the pay-to-play sites: subscription marketplaces where scripts post publicly. They are a real, functioning entry point, and their structure deserves clear eyes, since the subscription costs money whether or not you book, open casting means every job draws heavy competition, and marketplace dynamics push rates downward. Treat them as one channel with a measured budget, never as the whole plan.
- **Agents**: they submit you to castings you cannot reach yourself. Reputable agents earn commission on work booked; an "agent" charging upfront fees to represent you is a red flag worth walking away from. Agents generally arrive after you have training and a competitive demo, not before.
- **Unions.** In the United States, SAG-AFTRA covers substantial territory in commercials, animation, games, and promo, setting minimum rates and working conditions for covered work (SAG-AFTRA, n.d.). Union membership is a milestone with real trade-offs on both sides, and a topic to research properly when your bookings start touching covered work.

## Rates

This course quotes no dollar figures, deliberately: they would be wrong within a year, wrong by region, and wrong by genre. What you should know instead is that **published community rate guides exist**, maintained by working professionals precisely so newcomers do not price blind (Global Voice Acting Academy, n.d.). Before quoting any job, consult a current guide. Underpricing does not just cost you; it resets the floor for everyone, which is why the community maintains the guides in the first place.

## The demo

Your demo is your storefront: a short, produced montage proving your competitive lanes. Two honest rules. First, it comes **after** training, not before; a demo records your current ceiling, and cutting one before the ceiling rises wastes the money. Second, it must be true: nothing on it you cannot reproduce on demand at a session tomorrow.

## What a course can and cannot do

This course can improve your instrument, your recordings, and your reads, and it just told you how the market is shaped. It cannot audition for you, introduce you, or promise you work, and neither can any course, whatever the sales page implies. The performers who build careers pair the craft with unglamorous persistence: daily auditions, a marketing habit, bookkeeping, and years. That is not discouragement; it is the actual job description, and people who love the work find the persistence part survivable (U.S. Bureau of Labor Statistics, 2024).

:::reveal Why does this course refuse to state voice-over rates directly? ||| Because rates shift by year, region, and genre, so printed numbers rot into misinformation. The durable skill is consulting the community's current published rate guides before quoting, which also protects the market's floor.

:::reveal What distinguishes a legitimate agent from one to walk away from? ||| A legitimate agent earns commission on work actually booked. One who charges upfront fees to represent you is a recognized red flag.

## Sources
Global Voice Acting Academy. (n.d.). *GVAA rate guide*. https://globalvoiceacademy.com/

SAG-AFTRA. (n.d.). *About*. https://www.sagaftra.org/

U.S. Bureau of Labor Statistics. (2024). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm`,
    },
    {
      slug: "quiz-the-read-and-the-work",
      title: "17 · Quiz: the read, and the work",
      section: "Section 4 · The read, and the work",
      quiz: {
        shuffleOptions: true,
        questions: [
          {
            prompt: "What are the four analysis questions this course says to answer before the first take?",
            options: [
              "Who is talking, to whom, why now, and what should change",
              "What genre, what rate, what length, and what deadline",
              "Which mic, what distance, what gain, and which room",
              "Who wrote it, who directs it, who buys it, and who airs it",
            ],
            correctIndex: 0,
            explanation:
              "Character, listener, trigger, and intended change decide the read before a word is spoken. The other lists are real logistics, but they are not script analysis.",
            sourceLessonSlug: "script-analysis",
          },
          {
            prompt: "Why do voice teachers insist on aiming a read at one specific imagined listener?",
            options: [
              "It keeps the performer's volume safely below clipping levels",
              "One listener pulls the read direct and alive where a crowd aim goes vague",
              "It shortens session time by reducing the number of retakes needed",
              "Casting directors can identify the specific listener being addressed",
            ],
            correctIndex: 1,
            explanation:
              "Speech to a crowd turns public and performative; speech to one person gets specific, warm, and natural. The imagined listener organizes rhythm and emphasis without conscious effort.",
            sourceLessonSlug: "script-analysis",
          },
          {
            prompt: "Three takes with three different deliberate choices beat ten similar takes because casting is listening for what?",
            options: [
              "The take with the fewest audible breaths and mouth clicks",
              "The widest demonstrated pitch range across the session",
              "A person making choices, which analysis makes possible",
              "Consistency of level and tone across repeated readings",
            ],
            correctIndex: 2,
            explanation:
              "Casting hears hundreds of competent reads; what stands out is a performer with a point of view. Varying listener, trigger, or operative word produces genuinely different takes instead of the same one, louder.",
            sourceLessonSlug: "script-analysis",
          },
          {
            prompt: "What is the modern default sound of commercial voice work?",
            options: [
              "The classic announcer: authoritative, projected, and polished",
              "Whispered intimacy borrowed from audiobook romance styling",
              "Rapid-fire delivery maximizing words per second of airtime",
              "Conversational: one person warmly recommending to another",
            ],
            correctIndex: 3,
            explanation:
              "The friend's-recommendation sound has displaced the announcer, who survives mostly in parody and promo. Commercial work now rewards attitude range and authenticity over polish.",
            sourceLessonSlug: "the-genres",
          },
          {
            prompt: "Which pair correctly matches a lane with its defining demand?",
            options: [
              "Audiobooks: sustaining tone and characters across many recording days",
              "E-learning: maximum vocal color on a small handful of lines",
              "Commercial: matching lip flap from a performance in another language",
              "Dubbing: reading six-second scripts with a friend's warmth",
            ],
            correctIndex: 0,
            explanation:
              "Long-form consistency and character differentiation define audiobook work. E-learning wants consistency over color, dubbing is the lip-flap discipline, and the six-second warm read describes commercial.",
            sourceLessonSlug: "the-genres",
          },
          {
            prompt: "How does this course characterize the pay-to-play casting platforms?",
            options: [
              "A scam that working performers avoid entirely in favor of agent representation",
              "A real entry channel to use with a measured budget and clear eyes on its rate pressure",
              "The only realistic route through which beginning performers can reach their first paid work",
              "A union-operated casting service that enforces minimum rates on every job it lists",
            ],
            correctIndex: 1,
            explanation:
              "The platforms genuinely function as an entry point, and their structure, subscription cost regardless of booking, open competition, downward rate pressure, means they should be one budgeted channel, never the whole plan.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "Why does the demo come after training rather than before?",
            options: [
              "The casting platforms refuse to list demos from performers without professional credits",
              "Reputable demo producers require proof of completed coursework before booking a session",
              "A demo records your current ceiling, so cutting one before the ceiling rises wastes the money",
              "Talent agents are legally barred from submitting demos recorded by non-union performers",
            ],
            correctIndex: 2,
            explanation:
              "The demo is a storefront of what you can reproduce on demand today. Recording it before training locks in the pre-training ceiling, and it will need replacing almost immediately.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "What is the honest reason this course gives for auditioning being 'the job'?",
            options: [
              "Each audition pays a small reading fee, which adds up to a steady base income over time",
              "The performers' unions require members to complete a minimum number of auditions per quarter",
              "Casting offices keep files of every submitted audition to draw on for future direct bookings",
              "The submitted-to-booked ratio is lopsided for everyone, so submitting is the recurring daily work",
            ],
            correctIndex: 3,
            explanation:
              "Even excellent performers book a small fraction of what they submit, so a sustainable career means sustaining daily auditions through long silences. That persistence, not a lucky break, is the documented shape of the work.",
            sourceLessonSlug: "the-business-honestly",
          },
        ],
      },
    },
    {
      slug: "capstone-two-reads",
      title: "18 · Capstone: two reads, and an honest ear",
      section: "Section 4 · The read, and the work",
      body: `The course ends the way the work begins: you, a script, a mic, and nobody coming to save the take. The capstone is two recordings and one structured self-critique. It is not submitted anywhere and not graded by anyone but you, which is exactly the skill being trained: working performers self-direct nearly every audition they ever record.

## The assignment

**Read one: a sixty-second commercial.** Write or find a script for a product you actually use, structured as the copy anatomy from lesson 14: a problem, a promise, proof, and an ask. Analyze it in the margin first: who is talking, to one specific whom, triggered by what, to change what. Record three takes with three genuinely different choices.

**Read two: a short narration or character piece.** A paragraph of documentary-style narration, or a character introducing themselves. Pick whichever lane pulled at you in lesson 15. Same discipline: analysis first, three distinct takes.

Full session protocol both times: warmup from lesson 4, clap and silence checks from lesson 11, gain set against your loudest moment from lesson 12, room tone recorded, files named properly.

## The critique

Wait a day, then listen at honest volume with the following checklist, scoring each item yes or no, with a note about where in the take the evidence is:

- **Breath**: any audible gasps or phrases dying for air? Were breaths planned at beats?
- **Tone**: steady and free, or pressed and tight anywhere? Where exactly?
- **Articulation**: any muddy stretches? Any over-bitten, announcer-flavored stretches?
- **Plosives and sibilance**: any pops? Any esses that slice? Would angle or distance have prevented them?
- **Recording**: consistent level and tone across all takes? Any clipping, clicks, or audible room?
- **The read itself**: can you hear which take had which intention, without being told? Does one take sound like a person making choices? Would a stranger know what should change in the listener by the end?

Then the two questions that matter most. Which single item above, fixed, would improve your work the most? And can you reproduce your best take's choices on demand, right now? Record it once more and find out.

## Where this leaves you

You now hold the instrument end to end: how the sound is made, how to keep the maker healthy, how to shape it into clean speech, how to record it honestly, how to make a script mean something, and what the market on the other side of the upload button actually looks like. What no course supplies is the mileage: the daily reads, the honest playbacks, the slow accumulation of control. The mic does not care whether anyone promised you anything. It only records what you can do today, and what you can do today is now yours to raise.

:::reveal Why does the capstone insist on waiting a day before the self-critique? ||| Fresh from a session you hear your intentions; a day later you hear the recording. Honest self-direction requires listening to what is actually on the file, the way a stranger would.

:::reveal What are the two closing questions the critique funnels into? ||| Which single fix would most improve the work, and whether your best take's choices can be reproduced on demand right now. The second is the real test, because sessions and auditions only ever ask for on-demand.`,
    },
  ],
};
