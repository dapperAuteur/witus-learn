// Authored "Intro to Robotics & STEAM" — an age-appropriate (roughly grades 6-12)
// introduction to robots, electricity, coding logic, and the engineering design
// process, for the ElementaryMBA school (alongside the Speedway docuseries). Cited
// to authoritative, kid-appropriate sources: the official BBC micro:bit and Arduino
// docs, NASA STEM / NASA JPL, Code.org CS Fundamentals, IEEE TryEngineering, and the
// FDA. Every claim ties to a source you can open and check (the platform's trust DNA).
// "Try this" ideas use only household items, or are optional with an inexpensive kit —
// nothing here requires a purchase. Exercises are formative; the final quiz gates at 70.

import type { AuthoredCourse } from "./authored-course";

export const ROBOTICS_STEAM_COURSE: AuthoredCourse = {
  title: "Intro to Robotics & STEAM",
  description:
    "What is a robot, really? Start from the big idea — sense, think, act — and build up: simple circuits and electricity, input-process-output, the coding logic that makes machines decide and repeat, and the engineering design process that real engineers use to build, test, and improve. Meet the friendly beginner platforms (like the micro:bit and Arduino) and the real robots working in factories, hospitals, and on Mars. Hands-on, encouraging, and fully cited — no jargon without a plain-English explanation, and no purchase required to learn.",
  lessons: [
    // ── Section 1: What a robot is ─────────────────────────────────────────────
    {
      slug: "what-is-a-robot",
      title: "1 · What is a robot? (sense → think → act)",
      section: "Part 1: What a Robot Is",
      body: `When people picture a robot, they usually think of a metal person. But engineers think about it differently. A **robot** is a machine that can **sense** the world around it, **think** about what it senses, and then **act** to do something useful. That three-step loop is the whole idea — and once you see it, you'll spot it everywhere.

Engineers give those three steps names:

| Step | Engineer's word | Plain English | Example |
| --- | --- | --- | --- |
| Sense | **Sensor** | a part that measures something | a button, a light or temperature sensor, a camera |
| Think | **Controller** | the "brain" that decides what to do | a tiny computer chip |
| Act | **Actuator** | a part that makes something move or happen | a motor, a light, a speaker, a wheel |

So the pattern is: **sensor → controller → actuator.** A robot vacuum *senses* a wall with its bumper, its controller *thinks* "turn," and a motor (the *actuator*) *acts* by steering away. A self-driving feature *senses* the car ahead, *thinks* "too close," and *acts* by braking.

Here's a surprise: lots of things are robots, or close to it. An automatic door senses you and opens. A thermostat senses the temperature and turns the heat on. None of them look like a metal person — but they all sense, think, and act.

Even NASA's Mars rovers follow this exact loop. A rover senses the ground with cameras, its onboard computer thinks about the safest path, and motors act to drive it forward — NASA says Perseverance can even build a map of the road as it drives and steer itself up to 200 meters in a day (NASA, n.d.-a).

**Try this (no kit needed).** Pick three machines in your home (a microwave, a phone, a washing machine). For each one, name its **sensor**, its **controller**, and its **actuator**. If you can't find all three, that's interesting too — ask which step is missing.

**Check yourself.** In your own words, what are the three things every robot does?

## Sources
NASA. (n.d.-a). *Robotics*. National Aeronautics and Space Administration. https://www.nasa.gov/robotics/
NASA. (n.d.-b). *Mars 2020 Perseverance rover components*. NASA Science. https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/`,
    },
    {
      slug: "history-and-why-robots",
      title: "2 · Why we build robots",
      section: "Part 1: What a Robot Is",
      body: `If a robot is just "sense, think, act," why bother building one? Because robots are great at jobs that are one of the three D's: **dull, dirty, or dangerous.**

- **Dull** — doing the same exact motion thousands of times without getting bored or sloppy. (Think of a machine tightening the same bolt on every car.)
- **Dirty** — working where it's messy, hot, or unhealthy for a person.
- **Dangerous** — going where a human *can't* safely go: inside a volcano, deep underwater, or 140 million miles away on Mars.

NASA puts it plainly: it uses robotic systems to "explore other planets and objects in our solar system as precursors to crewed missions" and to assist astronauts — robots go first, into places that would be too risky or too far for people right now (NASA, n.d.-a).

But here's the honest part: robots are **not** smarter than you. They're fast, tireless, and precise, but they only do what they're built and programmed to do. A robot that's brilliant at welding car doors would have no idea how to make you breakfast. Humans are still the ones who **imagine** the problem, **design** the robot, and **decide** what's worth doing. That's the part this course is really about — learning to think like the engineer, not just admire the machine.

The word "robot" itself is young — it comes from a 1920 play and means roughly "forced labor." That tells you what we've always wanted robots for: to take over the work people would rather not, or can't safely, do.

**Check yourself.** Name the "three D's" — the kinds of jobs robots are especially good for — and give one real example of each.

## Sources
NASA. (n.d.-a). *Robotics*. National Aeronautics and Space Administration. https://www.nasa.gov/robotics/`,
    },
    // ── Section 2: Electricity & circuits ──────────────────────────────────────
    {
      slug: "electricity-basics",
      title: "3 · Electricity & simple circuits",
      section: "Part 2: Electricity & Circuits",
      body: `Every robot runs on **electricity**, so let's make it simple. Electricity is the flow of tiny charged particles (electrons) through a material. To make that flow do something useful, you build a **circuit** — a complete loop that the electricity can travel around.

A basic circuit needs three things:

1. **A power source** — a battery, which pushes the electricity. (The "push" is called **voltage**.)
2. **A path** — wires for the electricity to flow through. (The flow itself is called **current**.)
3. **A load** — something useful that the electricity powers, like a light bulb, a buzzer, or a motor.

The key rule: the loop must be **closed** (complete). If there's any gap — a switch turned off, a loose wire — the electricity can't flow and nothing happens. A **switch** is just a controlled gap: closing it completes the loop and turns the load on; opening it breaks the loop and turns it off. That on/off idea will come back when we talk about coding.

A helpful picture: think of electricity like water in a pipe. Voltage is the water *pressure* pushing it along, and current is the *amount* of water flowing past. Too much current through a thin wire is like too much water through a thin pipe — things can overheat, which is exactly why circuits include safety parts.

The micro:bit, a popular beginner board, is built around exactly these ideas: it has metal **pins** along its bottom edge and "a 3 volt power pin" you can use to power small external parts you add to a circuit (Micro:bit Educational Foundation, n.d.).

**Try this (household items).** With an adult's help, make a simple circuit using a single AA or AAA battery, a small flashlight bulb (or a low-voltage LED with a resistor from a kit), and two short pieces of wire or aluminum foil. Touch the wires to complete the loop — the bulb lights. Break the loop — it goes dark. You just built a switch with your fingers. **Safety:** use only a small battery, never a wall outlet.

**Check yourself.** What three parts does a basic circuit need, and why must the loop be "closed"?

## Sources
Micro:bit Educational Foundation. (n.d.). *micro:bit features overview*. https://microbit.org/get-started/features/overview/`,
    },
    // ── Section 3: Input → Process → Output ────────────────────────────────────
    {
      slug: "input-process-output",
      title: "4 · Input → process → output",
      section: "Part 3: How a Robot Thinks",
      body: `Remember "sense → think → act"? Computer scientists describe the same idea with three words you'll hear a lot: **input → process → output.** It's the heartbeat of every computer and every robot.

- **Input** is information coming *in* — from a sensor, a button, a microphone, a keyboard.
- **Process** is the thinking *in the middle* — the program decides what the input means and what to do about it.
- **Output** is the result going *out* — a light turns on, a motor spins, a sound plays, words appear on a screen.

It maps cleanly onto what you already know:

| sense → | think → | act |
| --- | --- | --- |
| **input** (sensor) | **process** (controller / program) | **output** (actuator) |

The micro:bit is a perfect example because you can see all three on one tiny board. Its **inputs** include two buttons, an accelerometer (it feels motion and tilt), a compass, a temperature sensor, and a light sensor. Its **outputs** include a 5×5 grid of 25 red LEDs and, on newer versions, a speaker (Micro:bit Educational Foundation, n.d.). In between sits the **process**: the program you write that says, for example, "if the board is shaken (input), show a smiley face on the LEDs (output)."

Once you have this frame, programming a robot stops feeling mysterious. You're always answering three questions: *What's my input? How should I process it? What output do I want?*

**Check yourself.** A motion-sensing porch light turns on when someone walks up at night. Name its input, its process, and its output.

## Sources
Micro:bit Educational Foundation. (n.d.). *micro:bit features overview*. https://microbit.org/get-started/features/overview/`,
    },
    // ── Section 4: Coding logic & algorithms ───────────────────────────────────
    {
      slug: "algorithms-and-sequencing",
      title: "5 · Coding logic: algorithms & sequencing",
      section: "Part 4: Coding Logic",
      body: `The "process" step — the thinking — is where **coding** lives. And the first idea in coding is the simplest: an **algorithm** is just a step-by-step set of instructions to get something done. A recipe is an algorithm. Directions to a friend's house are an algorithm. There's nothing magic about it.

The catch is that computers are extremely literal. They do **exactly** what you say, in **exactly** the order you say it — no filling in the blanks, no "you know what I mean." That property is called **sequencing**: the order of the steps matters.

Try writing the algorithm for making a peanut butter sandwich as if for a robot that has never seen one:

1. Pick up the bread bag. 2. Open the bag. 3. Take out two slices. …

If you skip "open the bag," the robot tries to grab bread *through* the plastic. This is the famous lesson teachers use, and Code.org's Computer Science Fundamentals — a widely used K-12 curriculum — builds whole lessons around exactly this idea of precise, ordered instructions (Code.org, n.d.).

So the first skill of a coder isn't typing — it's **thinking clearly in small, ordered steps.** Get the steps right and in the right order, and you have an algorithm a machine can follow.

**Try this (no computer needed).** Write the algorithm for an everyday task — brushing your teeth, tying a shoe — as a numbered list, pretending the reader is a literal robot. Then hand it to a friend (or sibling) who must do *only* what's written, *exactly* in order. Wherever they get stuck or do something silly, you found a missing or out-of-order step. Fix it. That's debugging.

**Check yourself.** In one sentence, what is an algorithm? Why does the *order* of the steps matter so much to a computer?

## Sources
Code.org. (n.d.). *Computer science fundamentals curriculum*. https://code.org/en-US/curriculum/computer-science-fundamentals`,
    },
    {
      slug: "loops-and-conditionals",
      title: "6 · Loops & conditionals (making decisions)",
      section: "Part 4: Coding Logic",
      body: `Sequencing alone gets long and repetitive. Two more ideas make code powerful: **loops** and **conditionals.** With just sequencing, loops, and conditionals, you can describe almost any behavior a robot needs.

**Loops — do it again.** A loop tells the computer to repeat steps instead of writing them out over and over. If you want a robot to take 50 steps, you don't write "step forward" 50 times — you write it once inside a loop that says "repeat 50 times." Code.org describes a loop simply as "the action of doing something over and over again," and teaches kinds like a *while* loop (repeat **while** something is true) and an *until* loop (repeat **until** something becomes true) (Code.org, n.d.).

**Conditionals — decide.** A conditional runs code **only if** a condition is true. This is how a machine makes choices. The shape is **if / else**:

\`\`\`
IF the path ahead is clear:
    drive forward
ELSE:
    turn right
\`\`\`

Code.org explains that conditionals "are statements that only run under certain conditions," and that if/else lets a program "run entire sections of code only if something is true, otherwise it runs something else" (Code.org, n.d.). That single idea is what makes a robot seem smart: it can react differently to different inputs.

Put it together and a line-following robot is just: **loop forever { IF I see the line, go straight; ELSE, steer back toward it }.** Sensing (input), deciding with a conditional (process), moving (output) — over and over in a loop. You already understand the whole machine.

**Try this (unplugged).** Be the robot. A partner gives you a tiny program out loud, like: "Loop 4 times: take one step; IF you reach the wall, stop." Act it out *literally*. Then make the rule trickier and see if the program still works. Spotting where it breaks is exactly what programmers do.

**Check yourself.** What does a **loop** do, and what does a **conditional** (if/else) do? Give one real robot behavior that needs both.

## Sources
Code.org. (n.d.). *Computer science fundamentals curriculum*. https://code.org/en-US/curriculum/computer-science-fundamentals`,
    },
    {
      slug: "practice-coding-logic",
      title: "7 · Practice: coding logic",
      section: "Part 4: Coding Logic",
      exercise: {
        instructions:
          "Fill in the missing word about robots, circuits, and coding logic from the lessons so far. Spelling is forgiving — get the idea right.",
        items: [
          {
            prompt: "A robot does three things in a loop: sense, think, and ___.",
            answer: "act",
            explanation:
              "Sense (sensor) → think (controller) → act (actuator). The acting part is what makes something move or happen.",
          },
          {
            prompt:
              "The part of a robot that senses the world (a button, a light or temperature sensor) is called a ___.",
            answer: "sensor",
            explanation:
              "Sensors are the inputs — they measure something about the world and hand it to the controller.",
          },
          {
            prompt: "For electricity to flow, the circuit loop must be complete, or ___. (one word)",
            answer: "closed",
            accept: ["complete"],
            explanation:
              "A closed (complete) loop lets current flow; any gap — like an open switch — stops it.",
          },
          {
            prompt: "Computer scientists describe a robot's thinking as input → process → ___.",
            answer: "output",
            explanation:
              "Input comes in (sensor), the program processes it, and output goes out (a light, a motor, a sound).",
          },
          {
            prompt: "A step-by-step set of instructions to get something done is called an ___.",
            answer: "algorithm",
            explanation: "A recipe is an algorithm. Computers follow algorithms exactly and in order.",
          },
          {
            prompt: "Code that repeats steps over and over again is called a ___.",
            answer: "loop",
            explanation:
              "Loops save you from writing the same step many times — e.g. 'repeat 50 times: step forward.'",
          },
          {
            prompt: "Code that runs only when something is true — an if/else decision — is called a ___.",
            answer: "conditional",
            accept: ["conditionals", "if statement", "if/else"],
            explanation:
              "Conditionals let a robot react differently to different inputs. That's what makes it seem to 'decide.'",
          },
        ],
      },
    },
    // ── Section 5: Engineering design process ──────────────────────────────────
    {
      slug: "engineering-design-process",
      title: "8 · The engineering design process (build → test → iterate)",
      section: "Part 5: Building Like an Engineer",
      body: `Here's the secret real engineers know: **the first version is never the final version.** Engineers don't expect to get it perfect on try one. Instead they follow a repeating cycle called the **engineering design process.** NASA's Jet Propulsion Laboratory — the team behind the Mars rovers — lays the steps out like this (NASA JPL Education, n.d.):

1. **Identify the problem** — what exactly are you trying to solve?
2. **Brainstorm solutions** — come up with lots of ideas, even silly ones.
3. **Select a design** — pick the most promising idea to try.
4. **Build a model or prototype** — make a quick, rough version. (A **prototype** is a first test version, not the finished thing.)
5. **Test and evaluate** — try it out and see what actually happens.
6. **Share** your solution if it works — **or iterate** if it doesn't.

That last word is the whole point. To **iterate** means to go back, improve, and try again. NASA JPL shows it as a flow chart that *loops*: if your test fails, you "cycle back" to building and testing — "building, testing, and evaluating until a solution is found" (NASA JPL Education, n.d.). Failure isn't the end of the process; it's a normal step *in* the process. Every failed test teaches you what to change next.

This is why engineers love prototypes made of cardboard, tape, and spare parts: a cheap prototype is fast to test and easy to change. You learn more from a rough version you actually test than from a perfect version that stays in your head.

IEEE — the world's largest organization of engineers — runs **TryEngineering**, a library of more than 130 free, hands-on engineering lessons built around exactly this "design, build, test, improve" loop, with clear goals and limits (called *criteria and constraints*) for each challenge (IEEE TryEngineering, n.d.).

**Try this (household items).** Pick a tiny problem — say, "a stand that holds my phone at a good angle." Run the whole cycle with only paper, cardboard, and tape: brainstorm, build a quick prototype, test it (does the phone actually stay up?), then iterate at least once to make it better. Notice how much your *second* version improves on the first.

**Check yourself.** What does it mean to **iterate**, and why do engineers treat a failed test as useful instead of bad?

## Sources
NASA JPL Education. (n.d.). *Engineering design process flow chart*. NASA Jet Propulsion Laboratory. https://www.jpl.nasa.gov/edu/resources/image/engineering-design-process-flow-chart/
IEEE TryEngineering. (n.d.). *Engineering STEM lesson plans & activities*. https://tryengineering.org/explore-resources/lesson-plans/`,
    },
    // ── Section 6: Platforms ───────────────────────────────────────────────────
    {
      slug: "beginner-platforms",
      title: "9 · Beginner platforms (micro:bit, Arduino)",
      section: "Part 6: Tools You Can Start With",
      body: `When you're ready to build something real, you don't start from a bare pile of wires — you start with a **platform**: a small, friendly computer board made for learning, with sensors and connections already built in. Two of the most popular are the **micro:bit** and **Arduino.** *(You don't need to buy either one to understand this lesson — but if you ever get one, here's what you'd be holding.)*

**The BBC micro:bit** is a pocket-sized board designed for beginners. Right on the board it already has inputs — two buttons, an accelerometer (senses motion/tilt), a compass, a temperature sensor, a light sensor, and on newer versions a microphone — plus outputs like a 5×5 grid of 25 LEDs and a speaker, and even radio to talk to other micro:bits (Micro:bit Educational Foundation, n.d.). Because the sensors are built in, you can write a program your very first day — "shake it to roll a dice on the LEDs" — without wiring anything.

**Arduino** is an **open-source** electronics platform — meaning its designs are shared freely so anyone can study, use, and build on them. Arduino "designs, manufactures, and supports electronic devices and software, allowing people around the world to easily access advanced technologies that interact with the physical world" (Arduino, n.d.-a). An Arduino board is a tiny controller you connect your *own* sensors and motors to, then program with free software, so it grows with more ambitious projects. Arduino's mission is to make electronics "straightforward, simple, and powerful" for everyone from students to professionals (Arduino, n.d.-a), and it publishes free getting-started guides to walk you through your first project (Arduino, n.d.-b).

Which is "better"? Neither — they're different starting points. The micro:bit is wonderful because so much is built in. Arduino is wonderful because you wire it up yourself and learn more about circuits. Both turn the ideas from this course — input, process, output; loops and conditionals; design and iterate — into something you can actually hold and run.

**Try this (free, no kit).** Both platforms have **free online simulators** — a pretend board on your screen. Search for the official micro:bit MakeCode editor or the Arduino site, drag together a tiny program (like "when button A is pressed, show a heart"), and run it in the simulator. You'll write real code without buying a thing.

**Check yourself.** Name one way the micro:bit and Arduino are different. What does it mean that Arduino is **open-source**?

## Sources
Micro:bit Educational Foundation. (n.d.). *micro:bit features overview*. https://microbit.org/get-started/features/overview/
Arduino. (n.d.-a). *About Arduino*. https://www.arduino.cc/en/about
Arduino. (n.d.-b). *Getting started with Arduino products*. https://www.arduino.cc/en/Guide/`,
    },
    // ── Section 7: Real-world robots ───────────────────────────────────────────
    {
      slug: "real-world-robots",
      title: "10 · Real robots: factories, medicine, space",
      section: "Part 7: Robots in the Real World",
      body: `The same "sense, think, act" loop you learned in lesson 1 runs the most advanced robots on (and off) the planet. Three fields show how far the idea reaches.

**Factories (manufacturing).** This is where robots are most common today. On an assembly line, robotic arms do the *dull, dirty, and dangerous* jobs — welding, painting, lifting heavy parts, fitting the same piece onto thousands of products with the exact same precision every time. They sense the part's position, the controller decides the motion, and motors act it out — millions of times, tirelessly.

**Medicine.** In hospitals, surgeons use **robotically-assisted surgical systems.** The U.S. Food and Drug Administration explains that these let a surgeon "use computer and software technology to control and move surgical instruments" through tiny openings, using a camera and several mechanical arms (FDA, n.d.). Notice the FDA's careful point: the system "is not actually a robot because it cannot perform surgery without direct human control" (FDA, n.d.). The robot adds steadiness and precision; the *human surgeon* is still in charge of every move. That's a perfect example of robots and people working **together.**

**Space.** Robots are how we explore places people can't yet go. NASA uses robotic systems to "explore other planets … as precursors to crewed missions" and to assist astronauts (NASA, n.d.-a). The Perseverance Mars rover carries cameras (its eyes), a big robotic arm to drill rock, and even a *small* second arm inside its belly — a "lab assistant" that moves sample tubes to the drill and stores the filled ones (NASA, n.d.-b). Because Mars is so far that real-time driving is impossible, the rover thinks for itself, building a map as it goes and steering its own path (NASA, n.d.-b).

Across all three, the pattern is identical and the people are essential: humans imagine the goal, engineers design and program the machine, and the robot handles the parts that are too repetitive, too delicate, or too far away.

**Check yourself.** Pick one field — factory, medicine, or space — and explain how a robot there still follows "sense → think → act," and where a human stays in charge.

## Sources
FDA. (n.d.). *Computer-assisted surgical systems*. U.S. Food and Drug Administration. https://www.fda.gov/medical-devices/surgery-devices/computer-assisted-surgical-systems
NASA. (n.d.-a). *Robotics*. National Aeronautics and Space Administration. https://www.nasa.gov/robotics/
NASA. (n.d.-b). *Mars 2020 Perseverance rover components*. NASA Science. https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/`,
    },
    // ── Section 8: Ethics & the future ─────────────────────────────────────────
    {
      slug: "ethics-and-future",
      title: "11 · Ethics & the future of automation",
      section: "Part 8: Ethics & the Future",
      body: `New technology always brings a big question along with it: not just *can* we build this, but *should* we, and how do we do it responsibly? Robots and **automation** (machines doing work on their own) are no different. As you grow into the people who *build* these machines, these questions become yours.

A few worth thinking about honestly:

- **Jobs.** Automation changes work. It can remove some jobs (the dull, dirty, dangerous ones) while creating new ones — someone has to design, build, program, and repair the robots. The fair question is: how do we help people whose jobs change, and make sure the new opportunities are open to everyone?
- **Safety.** A robot that moves in the real world can hurt someone if it's poorly built or poorly tested. This is exactly why the engineering design process insists on **testing and iterating**, and why agencies like the FDA carefully review medical robots before they're used on patients (FDA, n.d.). Building responsibly means testing thoroughly *before* something can do harm.
- **Who's responsible?** When a machine acts on its own, a person is still accountable for how it was built and used. Notice that even an advanced surgical system stays under "direct human control" (FDA, n.d.) — keeping a human responsible is a *design choice*, not an accident.
- **Fairness and access.** Robots and the AI inside them learn from data and can serve some people better than others. Good engineers ask early: who benefits, who might be left out, and who could be harmed?

None of these have one easy answer — and that's the point. The best engineers aren't just clever; they're **thoughtful.** They ask "should we?" alongside "can we?" Organizations exist precisely to help — NASA invests in STEM programs to "engage, inspire, and attract future generations of explorers" and build a skilled, *diverse* future workforce (NASA, n.d.-c), and IEEE's TryEngineering exists to grow not just technical skill but "critical-thinking, team-building, and problem-solving" (IEEE TryEngineering, n.d.).

The future of robotics isn't only about smarter machines. It's about wise people choosing to build the *right* things, the *right* way, for the *right* reasons — and that future includes **you.**

**Check yourself.** Pick one concern from this lesson (jobs, safety, responsibility, or fairness). Explain it in your own words and give one thing an engineer could do to handle it responsibly.

## Sources
FDA. (n.d.). *Computer-assisted surgical systems*. U.S. Food and Drug Administration. https://www.fda.gov/medical-devices/surgery-devices/computer-assisted-surgical-systems
NASA. (n.d.-c). *NASA STEM opportunities and activities for students*. National Aeronautics and Space Administration. https://www.nasa.gov/learning-resources/nasa-stem-opportunities-activities/
IEEE TryEngineering. (n.d.). *Engineering STEM lesson plans & activities*. https://tryengineering.org/explore-resources/lesson-plans/`,
    },
    // ── Final quiz ─────────────────────────────────────────────────────────────
    {
      slug: "final-quiz",
      title: "12 · Final quiz",
      section: "Part 8: Ethics & the Future",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What three things does every robot do, in order?",
            options: [
              "Sense, think, act",
              "Charge, drive, stop",
              "Build, test, sell",
              "Listen, talk, sleep",
            ],
            correctIndex: 0,
            explanation:
              "A robot senses the world (sensor), thinks about it (controller), and acts (actuator). This sense-think-act loop is the core idea of the whole course.",
            sourceLessonSlug: "what-is-a-robot",
          },
          {
            prompt: "In a robot, what is the job of an 'actuator'?",
            options: [
              "To measure temperature or light",
              "To make something move or happen, like a motor or a light",
              "To store the program",
              "To connect to the internet",
            ],
            correctIndex: 1,
            explanation:
              "An actuator is the 'act' part — a motor, light, speaker, or wheel that does something in the world. The sensor measures, the controller decides, and the actuator acts.",
            sourceLessonSlug: "what-is-a-robot",
          },
          {
            prompt: "Robots are especially good at the 'three D's' jobs. What are they?",
            options: [
              "Difficult, distant, digital",
              "Dull, dirty, dangerous",
              "Daily, daring, delicate",
              "Driving, drilling, drawing",
            ],
            correctIndex: 1,
            explanation:
              "Robots shine at jobs that are dull (very repetitive), dirty (messy or unhealthy), or dangerous (unsafe for people) — which is why NASA sends robots to places humans can't yet safely go.",
            sourceLessonSlug: "history-and-why-robots",
          },
          {
            prompt: "Why must an electric circuit be a 'closed' (complete) loop?",
            options: [
              "So it looks neat",
              "So the electricity has a complete path to flow around; any gap stops it",
              "To make it waterproof",
              "So it uses more battery",
            ],
            correctIndex: 1,
            explanation:
              "Electricity can only flow around a complete loop. A gap — like an open switch — breaks the path and nothing turns on. A switch is just a controlled gap in the circuit.",
            sourceLessonSlug: "electricity-basics",
          },
          {
            prompt: "Computer scientists describe a robot's behavior as which three steps?",
            options: [
              "Input → process → output",
              "Open → run → close",
              "Power → wait → reset",
              "Start → loop → end",
            ],
            correctIndex: 0,
            explanation:
              "Input (from a sensor) → process (the program decides) → output (a light, motor, or sound). It's the same idea as sense → think → act.",
            sourceLessonSlug: "input-process-output",
          },
          {
            prompt: "What is an 'algorithm'?",
            options: [
              "A type of battery",
              "A step-by-step set of instructions to get something done",
              "A kind of sensor",
              "A robot's metal body",
            ],
            correctIndex: 1,
            explanation:
              "An algorithm is just ordered instructions — like a recipe. Computers follow them exactly and in order, which is why sequencing (the order of steps) matters so much.",
            sourceLessonSlug: "algorithms-and-sequencing",
          },
          {
            prompt: "What does a 'loop' do in code?",
            options: [
              "Makes a decision based on a condition",
              "Repeats steps over and over",
              "Turns the robot off",
              "Measures the temperature",
            ],
            correctIndex: 1,
            explanation:
              "A loop repeats steps, so you don't have to write the same instruction many times. Code.org describes it as 'doing something over and over again.'",
            sourceLessonSlug: "loops-and-conditionals",
          },
          {
            prompt: "A conditional (an 'if / else' statement) lets a program do what?",
            options: [
              "Run certain code only when a condition is true",
              "Repeat forever",
              "Charge the battery",
              "Move faster",
            ],
            correctIndex: 0,
            explanation:
              "A conditional runs code only if something is true, and can do something else otherwise. That's how a robot reacts differently to different inputs — how it seems to 'decide.'",
            sourceLessonSlug: "loops-and-conditionals",
          },
          {
            prompt: "In the engineering design process, what does it mean to 'iterate'?",
            options: [
              "Give up after one failed test",
              "Go back, improve your design, and try again",
              "Build the perfect version on the first try",
              "Skip the testing step",
            ],
            correctIndex: 1,
            explanation:
              "To iterate is to loop back and improve. NASA JPL's design process cycles through building, testing, and evaluating until a solution works — so a failed test is a normal, useful step, not the end.",
            sourceLessonSlug: "engineering-design-process",
          },
          {
            prompt:
              "According to the FDA, why is a 'robotically-assisted surgical system' not fully a robot on its own?",
            options: [
              "It is too small to count",
              "It cannot perform surgery without direct human control",
              "It has no sensors",
              "It only works in space",
            ],
            correctIndex: 1,
            explanation:
              "The FDA notes these systems can't operate without a surgeon directing every move — the human stays in charge. It's a great example of robots and people working together, with a person responsible.",
            sourceLessonSlug: "real-world-robots",
          },
        ],
      },
    },
  ],
};
