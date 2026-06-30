// Authored "Y2: Robotics + AI" — the young-makers AI ladder, rung 2 (Y2), on the
// ElementaryMBA school. It deliberately sits *between* two existing ElementaryMBA
// courses and builds on both without repeating them:
//   • "Intro to Robotics & STEAM" (robotics-steam-course.ts) taught sense → think → act,
//     circuits, input→process→output, loops/conditionals, the design process, and
//     beginner boards (micro:bit, Arduino). Y2 assumes that "think" step is *programmed
//     rules* and asks the next question: what changes when the "think" is AI that LEARNED?
//   • "Young Makers: AI for Kids" (ai-young-makers-course.ts / F3) taught what AI is
//     (a pattern-learner, not magic), training data, prompts, hallucinations, bias,
//     privacy, honesty. Y2 does NOT re-teach prompting/chatbots — it carries the
//     "AI learns patterns from examples" idea into the *physical* world of robots and
//     sensors (vision, sound, self-driving, training-by-example), where being wrong has
//     real-world stakes, so safety + "ask a human" become concrete, not abstract.
// Audience: teens, roughly grades 6-12. Cited only to authoritative, openable sources we
// verified: the official micro:bit docs (microbit.org, incl. micro:bit CreateAI / the
// machine-learning tool), Arduino (arduino.cc, incl. TinyML / TensorFlow Lite), NASA
// Robotics + NASA JPL (Perseverance AutoNav, Ingenuity), MIT RAISE / Day of AI, and
// Code.org's "How AI Works" (grades 6-12). Every claim ties to a source you can open.
// "Build/think" ideas use free simulators or household items — nothing requires a purchase.
// Two fill-in exercises are formative; the final quiz gates at 70.

import type { AuthoredCourse } from "./authored-course";

export const AI_Y2_ROBOTICS_AI_COURSE: AuthoredCourse = {
  title: "Y2: Robotics + AI",
  description:
    "You already know a robot can sense, think, and act — and that AI learns patterns from examples. This course puts those two ideas together. What actually changes when a robot's \"think\" step is powered by AI that *learned* instead of rules someone typed in? We'll see how a robot \"sees\" with computer vision, hears with sound recognition, and drives itself (delivery bots, self-driving features, NASA's Mars rovers). You'll learn the difference between programmed rules and learned behavior, train a real model by example, and combine sensors with AI. Because a robot acts in the real world, we take safety seriously: when should a robot stop and ask a human? We'll also think honestly about automation, jobs, and fairness. Then you'll plan a build using a free, no-purchase tool. Everything is tied to a real source you can open and check.",
  lessons: [
    // ── Part 1: When the "think" step learns ───────────────────────────────────
    {
      slug: "ai-makes-a-robot-smart",
      title: "1 · How AI makes a robot \"smart\" (sense → think-with-AI → act)",
      section: "Part 1: When the Robot's Brain Learns",
      body: `In *Intro to Robotics & STEAM* you learned the loop at the heart of every robot: **sense → think → act.** A sensor takes in the world, a controller decides what to do, and an actuator does it. This whole course lives inside that middle word — **think** — because that's the step AI upgrades.

Here's the key idea, and the rest of the course builds on it:

> Adding AI doesn't change the loop. It changes **how the robot does the "think" step.** Instead of following only rules a person typed in ahead of time, the robot can use a model that **learned a pattern from examples** (the same kind of pattern-learning you met in *Young Makers: AI for Kids*).

So an AI-powered robot looks like this:

| Step | Without AI | With AI |
| --- | --- | --- |
| **Sense** | sensors: camera, microphone, distance sensor | *same sensors* |
| **Think** | follow rules a person wrote ("if X, do Y") | run a model that learned to recognize things from examples |
| **Act** | motor, light, speaker, wheels | *same actuators* |

Notice what stays the same: the robot still needs sensors and actuators. AI is not a replacement for the body — it's a smarter brain for the middle. A delivery robot still needs wheels and a camera; AI just helps it understand *what the camera sees* well enough to cross a sidewalk.

This is why the platforms you already met are starting to add AI. The **micro:bit**, the beginner board from *Intro to Robotics*, now has a free tool called **micro:bit CreateAI** that lets you "recognise and respond to your movements, like clapping, waving, dancing or jumping" by training a model on data from its motion sensor (Micro:bit Educational Foundation, n.d.-a). The sense-think-act loop is identical — the "think" just got smarter.

**Think about it.** A robot vacuum that bumps a wall and turns away uses simple rules. A robot vacuum that *looks* at the room and recognizes "that's a sock, go around it" uses AI for the "think" step. In both, name the sense, think, and act parts.

## Sources
Micro:bit Educational Foundation. (n.d.-a). *Artificial intelligence (AI)*. https://microbit.org/get-started/features/ai/
Code.org. (n.d.). *How AI works* (curriculum & videos for grades 6-12). https://code.org/ai`,
    },
    {
      slug: "rules-vs-learned",
      title: "2 · Programmed rules vs. learned behavior",
      section: "Part 1: When the Robot's Brain Learns",
      body: `There are two very different ways to make a machine "decide," and knowing the difference is the single most useful idea in this whole course.

**1. Programmed rules.** A person writes the rules out, step by step, ahead of time — the **conditionals** (if/else) you met in *Intro to Robotics*. The machine just follows them.

\`\`\`
IF the distance sensor reads less than 10 cm:
    stop
ELSE:
    drive forward
\`\`\`

This is precise and predictable. You can read the rule and know *exactly* what the robot will do. The catch: a person has to think of every case in advance. Rules are great for "stop if too close" — but try writing if/else rules for "is that a cat or a paper bag blowing across the road?" You'd need a million rules, and you'd still miss some.

**2. Learned behavior (machine learning).** Instead of writing the rules, you show the machine **lots of labeled examples** and let it find the pattern itself — exactly the "learn from examples / training data" idea from *Young Makers: AI for Kids*. Code.org's grades-6-12 curriculum describes this as computers learning "from data to make decisions" rather than from rules a programmer spelled out (Code.org, n.d.).

| | Programmed rules | Learned behavior (ML) |
| --- | --- | --- |
| Who makes the rule? | a person, in advance | the model finds the pattern from examples |
| Good for | clear, countable situations | messy, "you know it when you see it" situations |
| Predictable? | very — you can read the rule | less — it's a learned guess, and can be wrong |
| Example | "stop if closer than 10 cm" | "recognize a stop sign in a photo" |

Real robots use **both, on purpose.** A self-driving feature might use *learned* AI to recognize a stop sign in the camera image, and then a simple, *hard* rule — "if a stop sign is detected, brake" — to act on it. Engineers often keep the safety-critical action as a plain, readable rule, precisely because a learned model is a guess that can be wrong. Hold onto that — it comes back in the safety lesson.

**Think about it.** For each task, would you use a programmed rule or learned behavior? (a) Turn on a light when a button is pressed. (b) Tell whether a photo shows a dog or a muffin. (c) Sound an alarm if the temperature goes above 100°.

## Sources
Code.org. (n.d.). *How AI works* (machine learning: computers learn from data). https://code.org/ai
Micro:bit Educational Foundation. (n.d.-b). *micro:bit features overview*. https://microbit.org/get-started/features/overview/`,
    },

    // ── Part 2: How robots sense with AI ───────────────────────────────────────
    {
      slug: "how-a-robot-sees",
      title: "3 · How a robot \"sees\" (computer vision basics)",
      section: "Part 2: Sensing the World with AI",
      body: `A camera by itself doesn't *understand* anything — it just records a grid of colored dots called **pixels**. Turning that grid of dots into "that's a stop sign" or "that's a person stepping off the curb" is a job called **computer vision**: teaching a computer to make sense of images and video. Code.org's grades-6-12 program has a whole computer-vision unit where students explore "image and video analysis" (Code.org, n.d.).

How does it work? With the pattern-learning you already know:

1. **Examples.** Show the model thousands of labeled pictures — "this is a stop sign," "this is not."
2. **Find the pattern.** The model learns what shapes, edges, and colors usually mean "stop sign."
3. **Guess on something new.** Point a camera at a *new* scene; the model predicts what's there.

Two honest truths about computer vision, both of which matter for safety later:

- **It's a guess, not a fact.** The model isn't "looking it up." It's matching patterns, so it can be confidently wrong — a smudge of snow on a sign, or a shadow, can fool it. (Same idea as a *hallucination* in a chatbot: it can be sure and still wrong.)
- **It's only as good as its examples.** If the training pictures left some situations out — night, rain, an unusual sign — the model may not recognize them. This is the same **bias-from-missing-examples** problem you met in *Young Makers*, except now a robot might *act* on the mistake by moving in the real world.

You don't need a self-driving car to see computer vision in action. Free tools let students train an image model from their own example pictures (sorting recycling from trash, say) and watch it guess — the exact loop above, at a classroom scale (Code.org, n.d.; MIT RAISE, n.d.).

**Think about it.** A delivery robot's camera was trained mostly on sunny daytime sidewalks. Name one situation where its computer vision might guess wrong, and explain *why*, using "examples."

## Sources
Code.org. (n.d.). *How AI works* (computer vision unit, grades 6-12). https://code.org/ai
MIT RAISE. (n.d.). *Day of AI — free K-12 AI literacy curriculum*. https://raise.mit.edu/`,
    },
    {
      slug: "how-a-robot-hears",
      title: "4 · How a robot hears (voice & sound recognition)",
      section: "Part 2: Sensing the World with AI",
      body: `Robots can listen, too. A **microphone** is a sensor that turns sound into a signal — but just like a camera, that raw signal means nothing until something recognizes a pattern in it. Two related skills do this:

- **Sound recognition** — telling *what a sound is*: a clap, a doorbell, glass breaking, a smoke alarm.
- **Voice recognition (speech recognition)** — turning *spoken words* into text or commands ("turn on the light," "what's the weather?").

Both work the familiar way: feed a model **many labeled example sounds**, it learns the pattern, then it guesses on a new sound. The beginner boards you already know can do real versions of this. The **micro:bit** has a built-in **microphone**, so you can "create programs that react to loud and quiet sounds and measure noise levels" (Micro:bit Educational Foundation, n.d.-b). And **Arduino**, the platform from *Intro to Robotics*, partners with Google on "machine learning for microcontrollers with TensorFlow Lite," which is exactly how a tiny board can learn to recognize a sound or a spoken keyword right on the device (Arduino, n.d.).

Two honest limits — both showing why a human still matters:

- **Accents, noise, and rare words trip it up.** If most training examples were one accent in a quiet room, the model may struggle with a different voice or a noisy kitchen — the **missing-examples / bias** problem again, now in sound.
- **It hears patterns, not meaning.** A voice assistant doesn't *understand* you the way a friend does; it matches your sounds to patterns and picks the most likely command. That's why it sometimes does the wrong thing — and why you'd never want a learned guess to be the *only* thing standing between a robot and something dangerous.

**Think about it.** Why might a voice-controlled robot work great for the person who trained it but poorly for a friend with a different accent? Tie your answer back to "examples."

## Sources
Micro:bit Educational Foundation. (n.d.-b). *micro:bit features overview* (built-in microphone). https://microbit.org/get-started/features/overview/
Arduino. (n.d.). *About Arduino* (machine learning for microcontrollers with TensorFlow Lite). https://www.arduino.cc/en/about`,
    },

    // ── Part 3: Robots that move on their own ──────────────────────────────────
    {
      slug: "self-driving-and-delivery",
      title: "5 · Self-driving & delivery robots (high level)",
      section: "Part 3: Robots That Move on Their Own",
      body: `Put vision, sound, distance sensing, and AI together and you get a robot that can move through the world on its own. Three examples, from a sidewalk to another planet, all run the same sense → think-with-AI → act loop — just at different difficulty levels.

**Sidewalk delivery robots.** A small wheeled robot carrying a meal has cameras and distance sensors (**sense**), AI that recognizes curbs, crosswalks, and people (**think**), and motors that steer and stop (**act**). The hard part isn't moving — it's *understanding* a messy, changing sidewalk well enough to do it safely.

**Self-driving features in cars.** Today's cars commonly use AI for *parts* of driving — staying in a lane, braking for an obstacle, parking — rather than handling every situation perfectly alone. That's a deliberate design choice: the AI handles what it's good at, and a human is expected to stay ready. (Why? The next lesson is all about exactly this.)

**Mars rovers — self-driving in the hardest place there is.** NASA's rovers are the clearest example because they *have* to drive themselves: Mars is so far that a person can't steer in real time. NASA builds "autonomous systems that enable robotics, spacecraft and aircraft to operate in a dynamic environment independent of external control" (NASA, n.d.). On Mars, the Perseverance rover's cameras "help ensure a safe path," and 3D views "allow the rover to make its own decisions about where to drive without consulting on every move with the rover team on Earth" (NASA JPL, n.d.). NASA's Ingenuity helicopter went even further: "The helicopter flies on its own, without human control … with minimal commands from Earth sent in advance" (NASA, n.d.).

The thread through all three: more independence is **useful** (a rover can't wait minutes for every command) but also **demanding** — the more a robot decides on its own, the more carefully it must be built and tested, because no human is there to catch a mistake in the moment.

**Think about it.** Why does a Mars rover *need* to drive itself, while a sidewalk delivery robot could, in theory, have a human watching a screen? What does that tell you about when self-driving is worth the extra difficulty?

## Sources
NASA. (n.d.). *Robotics* (autonomous systems; Ingenuity flies on its own). https://www.nasa.gov/robotics/
NASA JPL. (n.d.). *Mars 2020 Perseverance rover components*. NASA Science. https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/`,
    },

    // ── Part 4: Teaching a robot ───────────────────────────────────────────────
    {
      slug: "training-by-example",
      title: "6 · Training a robot by example",
      section: "Part 4: Teaching a Robot",
      body: `Here's the part that feels like magic but isn't: you can **teach a robot a new skill without writing a single rule** — just by giving it examples. This is the same "learn the pattern from examples" idea from *Young Makers*, except now *you* are the teacher and the model controls a real device.

The loop has three stages, and the best part is you can actually do it for free:

1. **Collect data.** Do the thing you want the robot to recognize, over and over, while a sensor records it. Each recording is a labeled example.
2. **Train & test the model.** The tool finds the pattern that separates your examples (a "wave" from a "clap"), then you test it and see where it's confused.
3. **Improve, then use it.** Add more or better examples to fix mistakes, then run the trained model on the device so it responds to *new* movements live.

This is exactly what **micro:bit CreateAI** does, and it's free with no login. You "collect your movement data from the micro:bit's accelerometer, train, test and improve your own machine learning model, then use it" in a MakeCode program (Micro:bit Educational Foundation, n.d.-a). The official guidance walks through it as one workflow: "Collect data, iterate training, testing and improving a ML model, then code with it" (Micro:bit Educational Foundation, n.d.-a). Notice the word **iterate** — the build-test-improve loop from the engineering design process, now applied to *teaching a model*.

Two lessons fall out of doing this yourself:

- **Better examples beat more rules.** When the model confuses two movements, you don't write code — you give it clearer, more varied examples. The *data* is how you teach.
- **You can feel the bias.** If you only record yourself doing a slow, gentle wave, the model gets confused by a fast one. You just experienced "the model is only as good as its examples" with your own hands.

**Think about it.** Suppose you train a micro:bit to tell "shake" from "still," but it keeps thinking a gentle bump is a shake. Following the loop above, what would you do — and notice you're fixing *data*, not writing rules.

## Sources
Micro:bit Educational Foundation. (n.d.-a). *Artificial intelligence (AI)* — micro:bit CreateAI. https://microbit.org/get-started/features/ai/
Code.org. (n.d.). *How AI works* (training data; machine learning). https://code.org/ai`,
    },
    {
      slug: "sensors-plus-ai",
      title: "7 · Sensors + AI together (and a practice drill)",
      section: "Part 4: Teaching a Robot",
      body: `One sensor with AI is useful. **Several sensors with AI is where robots get genuinely capable** — because each sensor covers the others' blind spots.

Think about why a self-driving feature uses more than a camera. A camera is great in daylight but struggles in glare or fog. A distance sensor doesn't care about light but can't read a stop sign. Combine them — let the AI weigh a camera image *and* a distance reading *and* a microphone — and the robot can handle situations none of them could alone. Engineers call this **sensor fusion**: blending several senses into one better decision, the way you use eyes *and* ears to cross a street.

You can build a tiny version of this with the boards you already know. The **micro:bit** alone carries an accelerometer (motion), a microphone (sound), a light sensor, a temperature sensor, a compass, and buttons (Micro:bit Educational Foundation, n.d.-b) — train a model on the motion sensor with CreateAI, then combine its guess with, say, the light sensor in your code. The **Arduino** path adds machine learning right on the microcontroller via TensorFlow Lite, so your own attached sensors can feed a learned model on the device (Arduino, n.d.).

The big idea to carry forward: **more, varied senses → a more reliable "think" step.** And the flip side, which sets up the rest of the course: even with many sensors and a trained model, the robot is still making a *guess* — so we must decide, on purpose, what it's allowed to do on its own and when it must stop and ask a human.

> **Drill below.** Lock in Parts 1–4 before we get to safety and ethics.

## Sources
Micro:bit Educational Foundation. (n.d.-b). *micro:bit features overview* (sensors). https://microbit.org/get-started/features/overview/
Arduino. (n.d.). *About Arduino* (ML on microcontrollers, TensorFlow Lite). https://www.arduino.cc/en/about`,
      exercise: {
        instructions:
          "Fill in the missing word from Parts 1–4. Spelling is forgiving — the explanation shows the idea you should have.",
        items: [
          {
            prompt:
              "Adding AI to a robot mostly upgrades one step of the sense → think → act loop: the ___ step.",
            answer: "think",
            accept: ["thinking", "process"],
            explanation:
              "AI changes HOW the robot thinks — using a learned model instead of only typed-in rules — while sense and act stay the same.",
          },
          {
            prompt:
              "When a person writes out if/else instructions in advance, that's programmed ___; when the machine finds the pattern from examples, that's learned behavior.",
            answer: "rules",
            accept: ["rule"],
            explanation:
              "Programmed rules are predictable and good for clear cases; learned behavior handles messy 'you know it when you see it' situations.",
          },
          {
            prompt:
              "Teaching a computer to make sense of pictures and video — like recognizing a stop sign — is called computer ___.",
            answer: "vision",
            explanation:
              "Computer vision turns a grid of pixels into a guess about what's in the image. It's a guess, so it can be confidently wrong.",
          },
          {
            prompt:
              "A learned model's guesses are only as good as its ___ — leave situations out and it may not recognize them.",
            answer: "examples",
            accept: ["data", "training data", "training examples"],
            explanation:
              "Missing or one-sided examples cause bias — the same idea from Young Makers, now with a robot that may act on the mistake.",
          },
          {
            prompt:
              "In micro:bit CreateAI you collect movement data, then train, test, and ___ the model to make it better.",
            answer: "improve",
            accept: ["iterate", "improve it"],
            explanation:
              "You fix mistakes by giving better/more examples (data), not by writing rules — the build-test-improve loop applied to teaching a model.",
          },
          {
            prompt:
              "Blending several sensors so the AI makes one better decision — covering each sensor's blind spots — is called sensor ___.",
            answer: "fusion",
            explanation:
              "Sensor fusion is like using eyes AND ears to cross a street: more, varied senses make the 'think' step more reliable.",
          },
        ],
      },
    },

    // ── Part 5: Doing it safely & responsibly ──────────────────────────────────
    {
      slug: "safety-ask-a-human",
      title: "8 · Safety: when a robot should ask a human",
      section: "Part 5: Doing It Safely & Responsibly",
      body: `Everything so far points to one careful conclusion: **an AI-powered robot is making guesses, and it acts in the real world — so we must design, on purpose, when it's allowed to act alone and when it must stop and ask a human.** This isn't being timid; it's how the best engineers build.

Why guesses aren't enough on their own:

- A learned model can be **confidently wrong** (a sign in shadow, an accent it never heard).
- The world throws **situations the examples missed** — and that's exactly when a wrong guess is most likely.
- When a robot moves, a wrong guess isn't just an odd chatbot answer; it can **bump, drop, or collide** with something real.

So engineers build in a **"keep a human in the loop"** rule for anything risky. The clearest example you already met: NASA's rovers drive themselves for routine paths, but big or risky decisions still go back to the team on Earth — the cameras "help ensure a safe path," and the rover makes its *own* decisions only "without consulting on every move," not *every* move (NASA JPL, n.d.). Routine driving: the robot decides. Risky calls: a human is consulted.

A simple way to think about it — sort actions into three buckets:

| Bucket | What the robot should do | Example |
| --- | --- | --- |
| **Low stakes** | act on its own | sort recycling; show a smiley when shaken |
| **Medium** | act, but flag it / let a human override | suggest a route; pause and ask "is this right?" |
| **High stakes** | require a human to confirm | anything that could hurt a person or do real damage |

And remember the trick from Lesson 2: for the highest-stakes action, engineers often *don't* leave the decision to a learned guess at all — they use a plain, readable rule ("if a person is detected within 1 meter, stop"), so the safety behavior is predictable. The learned AI does the clever recognizing; a simple, checkable rule does the protecting.

**Think about it.** Design the rule for a delivery robot at a crosswalk. What can it decide alone, and what should make it stop and wait for — or ask — a human? Why put the "stop" as a hard rule rather than a learned guess?

## Sources
NASA JPL. (n.d.). *Mars 2020 Perseverance rover components* (autonomy with team oversight). https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/
NASA. (n.d.). *Robotics* (autonomous systems operating independently). https://www.nasa.gov/robotics/`,
    },
    {
      slug: "ethics-of-automation",
      title: "9 · Ethics of automation & jobs",
      section: "Part 5: Doing It Safely & Responsibly",
      body: `New technology always brings the bigger question: not just *can* we automate this, but *should* we, and how do we do it fairly? **Automation** — machines doing work on their own — makes this real, and as the people who'll *build* the next robots, these questions become yours.

A few worth thinking through honestly (none has one easy answer — that's the point):

- **Jobs change.** Automation can remove some jobs (often the dull, dirty, dangerous ones from *Intro to Robotics*) while creating new ones — someone has to design, build, train, test, and repair these systems, and someone has to make the *data* they learn from. The fair questions: how do we help people whose jobs change, and make sure the new opportunities are open to everyone?
- **Fairness from data.** Because robots' AI learns from examples, it can work better for some people than others — the bias-from-missing-examples problem, now with real-world consequences (a voice system that won't understand certain accents, a vision system that misses certain people). Good engineers ask *early*: who's in the training data, who got left out, who could be harmed?
- **Who's responsible?** When a machine acts on its own, a person is still accountable for how it was built, trained, and allowed to act. "The AI did it" is never an excuse — humans chose the data, set the rules, and decided what it could do alone.
- **Should we, at all?** Some things are *possible* to automate but not *wise* to. Asking "should we?" alongside "can we?" is the mark of a thoughtful engineer, not just a clever one.

You're not alone in wrestling with this. Whole education programs exist to grow exactly this kind of thoughtful builder: **MIT RAISE's** mission is to "empower everyone to use AI responsibly," and its Day of AI program teaches AI literacy and ethics to millions of students worldwide (MIT RAISE, n.d.). **Code.org's** AI curriculum, likewise, "emphasizes ethical considerations alongside technical understanding," aiming for students who are "thoughtful creators," not just users (Code.org, n.d.).

The future of robotics isn't only smarter machines. It's wiser people choosing to build the *right* things, the *right* way, for the *right* reasons — and that future includes **you.**

**Think about it.** Pick one concern above (jobs, fairness, responsibility, or "should we?"). Explain it in your own words and name one thing an engineer could actually do to handle it responsibly.

## Sources
MIT RAISE. (n.d.). *Day of AI — using AI responsibly; global AI literacy*. https://raise.mit.edu/
Code.org. (n.d.). *How AI works* (ethics alongside technical understanding). https://code.org/ai`,
    },

    // ── Part 6: Build & think project ──────────────────────────────────────────
    {
      slug: "build-think-project",
      title: "10 · Build/think project: teach a smart device",
      section: "Part 6: Build It",
      body: `Time to put it together. This is a **build-and-think** project — you'll design a small AI-powered device, and you can actually try the AI part for **free, with no purchase**, using an online tool and (optionally) a board you may already have at school.

> **No micro:bit? No problem.** micro:bit CreateAI is a free, web-based tool with no login required (Micro:bit Educational Foundation, n.d.-a). You can plan the whole project and even collect movement data; running it on a physical board is the optional bonus.

**Your mission:** design a device that uses **sense → think-with-AI → act**, then plan it like an engineer.

Step 1 — **Pick a job.** Choose something that recognizes a pattern. Examples: a posture buzzer that recognizes "slouching" vs. "sitting up," a "good-throw vs. bad-throw" coach, a sign that lights up when it recognizes a specific gesture.

Step 2 — **Name your loop.** Write down your robot's three parts:
- **Sense** — which sensor? (motion/accelerometer is easiest with CreateAI)
- **Think-with-AI** — what two or three movements will the model learn to tell apart?
- **Act** — what's the output? (a light, a sound, a message)

Step 3 — **Plan your training data.** List the labeled examples you'd collect for each movement, and — thinking back to bias — how you'd make them *varied* (fast and slow, different people) so the model isn't fooled.

Step 4 — **Add a safety rule.** Using Lesson 8, decide: what can your device do on its own, and is there anything it should flag or hand to a human? Write at least one **hard rule** for any higher-stakes action.

Step 5 — **(Optional) Build it.** With a micro:bit and CreateAI, "collect your movement data from the micro:bit's accelerometer, train, test and improve your own machine learning model, then use it" in a MakeCode program (Micro:bit Educational Foundation, n.d.-a). On an **Arduino**, the same kind of on-device machine learning is possible via TensorFlow Lite for microcontrollers (Arduino, n.d.). Either way, **iterate**: test, find where it's confused, add better examples, repeat.

**Your engineer's checklist:**
- ✅ My loop names a real sense, a learned "think," and an act.
- ✅ My training-data plan is varied, so the model isn't biased by one-sided examples.
- ✅ I wrote at least one hard safety rule and said when a human stays in charge.
- ✅ I planned to *iterate* — fix mistakes with better data, not by giving up.

**Think about it.** After planning (or building), name one thing the AI did well, and one thing *you* — the engineer — had to decide that the AI could not.

## Sources
Micro:bit Educational Foundation. (n.d.-a). *Artificial intelligence (AI)* — micro:bit CreateAI (free, no login). https://microbit.org/get-started/features/ai/
Arduino. (n.d.). *About Arduino* (on-device ML with TensorFlow Lite). https://www.arduino.cc/en/about`,
    },
    {
      slug: "practice-safe-smart-builder",
      title: "11 · Practice: safe, smart builder",
      section: "Part 6: Build It",
      exercise: {
        instructions:
          "Fill in the missing word from Parts 5–6. Spelling is forgiving — get the idea right.",
        items: [
          {
            prompt:
              "Because an AI-powered robot's decision is a ___, it can be confidently wrong — which is why we design when it must ask a human.",
            answer: "guess",
            accept: ["guesses", "prediction"],
            explanation:
              "A learned model matches patterns and predicts; it doesn't 'look up' a fact. In the real world, a wrong guess can cause real harm.",
          },
          {
            prompt:
              "For the highest-stakes action, engineers often use a plain, readable ___ instead of a learned guess, so the safety behavior is predictable.",
            answer: "rule",
            accept: ["rules", "hard rule"],
            explanation:
              "The learned AI does the clever recognizing; a simple, checkable rule (e.g. 'if a person is within 1 m, stop') does the protecting.",
          },
          {
            prompt:
              "Keeping a person able to confirm or override a robot's risky decisions is called keeping a human in the ___.",
            answer: "loop",
            explanation:
              "Even NASA's self-driving rovers consult the Earth team on big decisions. Routine: the robot decides. Risky: a human is consulted.",
          },
          {
            prompt:
              "Machines doing work on their own is called ___; it can remove some jobs while creating new ones, like building and training the robots.",
            answer: "automation",
            explanation:
              "The fair questions: how do we help people whose jobs change, and keep the new opportunities open to everyone?",
          },
          {
            prompt:
              "When a robot's AI works better for some people than others because of who was in the training data, that's a fairness or ___ problem.",
            answer: "bias",
            explanation:
              "Bias from missing/one-sided examples — the same idea from Young Makers, now with real-world consequences a robot can act on.",
          },
          {
            prompt:
              "When you fix a confused model, you don't add more rules — you ___ by giving it better, more varied examples.",
            answer: "iterate",
            accept: ["improve", "retrain", "train again"],
            explanation:
              "The build-test-improve loop: test, find where it's confused, add better data, repeat. The data is how you teach.",
          },
        ],
      },
    },

    // ── Final quiz ─────────────────────────────────────────────────────────────
    {
      slug: "y2-robotics-ai-quiz",
      title: "12 · Final quiz",
      section: "Part 6: Build It",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt:
              "When you add AI to a robot, which part of the sense → think → act loop mainly changes?",
            options: [
              "The sense step — it needs new sensors",
              "The think step — it can use a model that learned from examples instead of only typed-in rules",
              "The act step — it needs new motors",
              "Nothing changes",
            ],
            correctIndex: 1,
            explanation:
              "AI upgrades HOW the robot thinks. It still needs the same sensors and actuators; the middle 'think' step gets smarter by learning a pattern from examples.",
            sourceLessonSlug: "ai-makes-a-robot-smart",
          },
          {
            prompt:
              "What is the difference between programmed rules and learned behavior?",
            options: [
              "Rules are written by a person in advance; learned behavior finds the pattern from examples",
              "They are exactly the same thing",
              "Learned behavior is always more predictable than rules",
              "Rules can only run on Mars rovers",
            ],
            correctIndex: 0,
            explanation:
              "Programmed rules (if/else) are predictable and good for clear cases. Learned behavior (machine learning) handles messy situations but is a guess that can be wrong.",
            sourceLessonSlug: "rules-vs-learned",
          },
          {
            prompt:
              "A robot uses 'computer vision' to do what?",
            options: [
              "Charge its battery from sunlight",
              "Make sense of images and video — like recognizing a stop sign — by matching learned patterns",
              "Store its program",
              "Talk to other robots over radio",
            ],
            correctIndex: 1,
            explanation:
              "Computer vision turns a grid of pixels into a guess about what's in the image. Because it's a learned guess, a shadow or snow can fool it.",
            sourceLessonSlug: "how-a-robot-sees",
          },
          {
            prompt:
              "Why might a voice-controlled robot understand the person who set it up but struggle with a friend?",
            options: [
              "Robots can only ever hear one person",
              "The model learned from examples that may have missed other accents or noisy rooms",
              "Microphones stop working for new people",
              "It is choosing to ignore the friend on purpose",
            ],
            correctIndex: 1,
            explanation:
              "Sound and voice recognition learn from labeled examples. If the examples were one accent in a quiet room, a different voice or noise can trip it up — the missing-examples / bias problem.",
            sourceLessonSlug: "how-a-robot-hears",
          },
          {
            prompt:
              "Why does a Mars rover need to drive itself, when a sidewalk delivery robot could be watched by a human?",
            options: [
              "Mars rovers are cheaper",
              "Mars is so far away that a person can't steer it in real time, so it must make its own routine decisions",
              "Delivery robots have no sensors",
              "Rovers don't actually move",
            ],
            correctIndex: 1,
            explanation:
              "NASA builds autonomous systems that operate 'independent of external control'; the rover makes its own routine driving decisions because waiting for every command from Earth is impossible.",
            sourceLessonSlug: "self-driving-and-delivery",
          },
          {
            prompt:
              "In a tool like micro:bit CreateAI, how do you teach the robot a new skill?",
            options: [
              "Write hundreds of if/else rules",
              "Collect labeled example movements, then train, test, and improve a model on that data",
              "Buy a more expensive board",
              "Wait for the robot to learn on its own with no examples",
            ],
            correctIndex: 1,
            explanation:
              "You teach with data: collect example movements from the accelerometer, train and test a model, and improve it with better examples — you fix mistakes by changing the data, not by writing rules.",
            sourceLessonSlug: "training-by-example",
          },
          {
            prompt:
              "What is 'sensor fusion,' and why is it useful?",
            options: [
              "Melting two sensors together",
              "Blending several sensors so the AI makes one better decision, covering each sensor's blind spots",
              "Turning a sensor into an actuator",
              "Using only one sensor to save power",
            ],
            correctIndex: 1,
            explanation:
              "Like using eyes AND ears to cross a street, combining a camera, distance sensor, and microphone lets a robot handle situations none could alone — more, varied senses make the 'think' step more reliable.",
            sourceLessonSlug: "sensors-plus-ai",
          },
          {
            prompt:
              "For the highest-stakes action a robot can take, what do careful engineers often do?",
            options: [
              "Leave it entirely to the learned AI's guess",
              "Use a plain, readable hard rule (and/or keep a human in the loop), because a learned guess can be confidently wrong",
              "Remove all the sensors",
              "Let the robot decide with no testing",
            ],
            correctIndex: 1,
            explanation:
              "The learned AI does the clever recognizing, but a simple checkable rule does the protecting. NASA's rovers act alone on routine paths yet consult the team on risky decisions — a human stays in the loop.",
            sourceLessonSlug: "safety-ask-a-human",
          },
          {
            prompt:
              "Which is a fair concern about automation and jobs?",
            options: [
              "Robots never change any jobs at all",
              "Automation can remove some jobs while creating new ones, so we should help people whose jobs change and keep new opportunities open to everyone",
              "Only robots can have jobs now",
              "Automation always helps everyone equally with no effort",
            ],
            correctIndex: 1,
            explanation:
              "Automation shifts work — removing some roles, creating others (designing, training, repairing robots). Thoughtful engineers ask who's helped, who's left out, and who stays responsible.",
            sourceLessonSlug: "ethics-of-automation",
          },
          {
            prompt:
              "When your trained model keeps confusing two movements, the engineer's fix is to…",
            options: [
              "Give up — the model can't improve",
              "Iterate: add better, more varied training examples and test again",
              "Write a thousand if/else rules instead",
              "Buy a faster computer and change nothing else",
            ],
            correctIndex: 1,
            explanation:
              "You improve a learned model by improving its data, not by writing rules. Test, find where it's confused, add clearer/more varied examples, and repeat — the build-test-improve loop.",
            sourceLessonSlug: "build-think-project",
          },
        ],
      },
    },
  ],
};
