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
    ],
  },
];
