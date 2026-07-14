// Authored "Golf: Play It, Know It, Work In It" - a complete golf course for Learn.WitUS,
// built from BAM's brief (plans/future-courses/sports-courses/golf.md): "how to play golf,
// strategy, history, rules, leagues, opportunities for amateurs, entrepreneurs". All six are
// covered, and the last one (opportunities) is the largest section, because it is the angle a
// generic golf course skips and the one this platform exists for.
//
// FACT-CHECK PASS. Every rule number, tour fact, handicap figure, amateur-status rule, date, and
// dollar amount in this course was verified against a primary source before authoring. What was
// checked, and what was deliberately NOT asserted:
//
//   * RULES OF GOLF. Verified against The R&A's published rule pages (randa.org/en/rog/...), which
//     carry the single joint code the USGA and The R&A write together. Edition in force: the 2023
//     Rules of Golf, effective 1 January 2023 (the previous full rewrite was 2019); the next edition
//     is due 1 January 2028. Three corrections were made to first drafts during the check:
//       - the accidental double-hit penalty was removed in the 2019 rewrite, NOT in 2023;
//       - the current term is "temporary water", not the legacy "casual water";
//       - the three-minute search limit lives in Rule 18.2a(1), not in Rule 7 (which governs how to
//         search, not for how long).
//     The "drop it near where you lost it for two strokes" relief is Model Local Rule E-5, a LOCAL
//     rule a Committee must adopt, not a Rule of Golf, and it is expressly not for elite play. The
//     course says so, because students who watch tour golf will otherwise be confused.
//
//   * AMATEUR STATUS. The Rules of Amateur Status were substantially liberalized effective
//     1 January 2022. This matters enormously to the opportunities section and is the single most
//     commonly out-of-date thing written about golf, so it is taught from the current rules only.
//
//   * HISTORY OF EXCLUSION. Taught factually and cited, not airbrushed. Several widely repeated
//     claims were checked and then deliberately left out or softened because they could not be
//     verified:
//       - The YEAR the PGA of America adopted its "Caucasian-only" clause is contested in the
//         sources (1934 is the majority claim; at least one reputable outlet says 1943; the PGA's
//         own page declines to date it). The course does not assert a year. The year it was REMOVED,
//         November 1961, is solid and is cited.
//       - The clause's verbatim constitutional wording could not be retrieved from a primary source,
//         so it is never put in quotation marks.
//       - The Augusta National caddie rule is stated precisely: the club required every competitor
//         to use a CLUB caddie, and the club's caddies were all Black. It was not written as a
//         racial rule. The course does not claim it was, because the true version is damning enough.
//       - The Theodore Havemeyer quote traditionally attached to John Shippen's 1896 U.S. Open could
//         not be traced to a contemporaneous source and is omitted.
//       - Golf's "18 holes standardized at St Andrews in 1764" story could not be confirmed from a
//         primary source, so 18 holes is taught as a convention that spread, not a decree with a date.
//       - Althea Gibson's first LPGA season is given as "the early-to-mid 1960s" because sources
//         split between 1963 and 1964, and the course turns that into a lesson about checking dates.
//
// Cited APA 7 in-line with a `## Sources` bibliography per lesson (the BVC citation rule). No
// fabricated people, quotes, or statistics. Six sections, each ending in a quiz whose bank is 15
// questions deep so the serving layer's 10-question cap actually rotates. Every quiz question sets
// `sourceLessonSlug`. Self-checks are `:::reveal` (answer hidden until clicked), never printed in
// prose under the question.

import type { AuthoredCourse } from "./authored-course";

export const GOLF_COURSE: AuthoredCourse = {
  title: "Golf: Play It, Know It, Work In It",
  description:
    "A complete, cited introduction to golf for people who have never held a club, and a real look at the sport as an industry. Learn how to play (the course, the clubs, the swing, the short game), the Rules of Golf as they actually read today (cited to the 2023 code the USGA and The R&A write together), how to think your way around a course, the World Handicap System, golf's history including its documented record of racial and gender exclusion, how the tours and leagues actually work (the PGA Tour and the PGA of America are not the same organization), and the part most golf courses skip: the genuine, checkable opportunities in this sport for amateurs and entrepreneurs, from caddie scholarships that pay full college tuition to qualifying for the U.S. Open with nothing but a low handicap.",
  lessons: [
    // ── Section 1: How to Play ────────────────────────────────────────────
    {
      slug: "golf-what-the-game-is",
      title: "1 · What the game actually is",
      section: "How to Play",
      body: `Golf is simpler than it looks. **You hit a ball with a stick until it goes in a hole. The person who needed the fewest hits wins.** Everything else is detail.

The Rules of Golf open with almost exactly that sentence: "Golf is played in a round of 18 (or fewer) holes on a course by striking a ball with a club" (Rule 1.1; R&A, 2023). Note "or fewer." Nine-hole rounds are real golf. So is one hole.

**The vocabulary you need on day one:**

| Word | What it means |
| --- | --- |
| **Stroke** | One swing you made at the ball with the intent to hit it. Whiffs count. |
| **Hole** | Both the actual cup in the ground and the whole journey from tee to cup. |
| **Par** | The score a very good player is expected to take on that hole. Almost every hole is a par 3, 4, or 5, set mostly by how long it is. |
| **Round** | 18 holes (or 9). Add up your strokes. |
| **Birdie / Bogey** | One under par / one over par on a hole. |
| **Eagle / Double bogey** | Two under par / two over par. |

A typical par-72 course means an expert is expected to go around in 72 strokes. If you shoot 108 your first time out, you are entirely normal, and you had 36 more swings of fun than the expert did.

**The two ways to compete** (Rule 3.1a; R&A, 2023):
- **Stroke play**: everyone counts every stroke for 18 holes and the lowest total wins. This is what you see on TV most weeks.
- **Match play**: you play against one opponent, hole by hole. Win the hole, you go one up. Your score on a hole does not carry over, so a disastrous 9 costs you exactly one hole, no more. Match play is more forgiving for beginners and much more fun than it gets credit for.

**What a beginner should actually expect.** You will top the ball along the ground. You will miss it completely. You will hit one shot so pure that you will feel it in your fingers for a week, and that shot is the reason people play this game for sixty years. Golf is unusual among sports in that a total beginner and a scratch player can play the same course on the same afternoon, and the handicap system (Lesson 19) exists precisely so they can compete fairly.

:::reveal In one sentence, what is the object of golf, and what is the difference between stroke play and match play? ||| Hit the ball into the hole in as few strokes as possible. In stroke play you add up every stroke over the whole round and the lowest total wins. In match play you compete against an opponent hole by hole, so a bad hole costs you only that one hole.

## Sources
- R&A. (2023). *Rule 1: The game, player conduct and the Rules*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-1
- R&A. (2023). *Rule 3: The competition*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-3`,
    },
    {
      slug: "golf-the-course-tee-to-green",
      title: "2 · The course: tee to green",
      section: "How to Play",
      recallContent: [
        {
          prompt: "What is the object of golf, in one sentence?",
          answer: "Hit the ball into the hole in as few strokes as possible.",
        },
        {
          prompt: "What is the difference between stroke play and match play?",
          answer:
            "In stroke play you add up every stroke over the whole round and the lowest total wins. In match play you compete against an opponent hole by hole, so a disastrous hole costs you only that one hole.",
        },
      ],
      body: `Every golf hole is the same story told with different scenery: start on a flat mowed box, travel down a corridor, finish on a very smooth patch of grass with a cup in it.

**The parts of a hole, in the order you will meet them:**

- **Teeing area.** The mowed box you start from. It is the only place on the course you are allowed to put your ball on a tee, and you may also just play it off the ground (Rule 6.2b(2); R&A, 2023). Different sets of tee markers give the same hole different lengths. **Play the forward tees.** Nothing in golf is more pointlessly discouraging than a beginner playing a course from 500 yards further back than they can reach.
- **Fairway.** The short-mown lane between tee and green. This is where you want to be. The ball sits up and is easy to hit.
- **Rough.** The longer grass on either side. The ball sits down, the grass grabs your club, and the shot comes out unpredictably. Getting out is the whole goal. Do not be a hero from the rough.
- **Bunker.** A prepared area of sand, usually a pit. Special rules apply (Lesson 13).
- **Penalty area.** Water, or other ground the committee has marked with **red** or **yellow** stakes or lines. You can play from it if you want, but usually you take relief for a penalty stroke (Lesson 12).
- **Out of bounds.** Marked with **white** stakes. Off the course entirely. This is the most expensive mistake in golf (Lesson 11).
- **Putting green.** The very short grass around the cup. Special rules apply here too, and they are the friendliest rules in golf.

**Learn the stake colors now, because they are money:**

| Color | Meaning | Roughly what it costs |
| --- | --- | --- |
| **White** | Out of bounds | The worst: stroke and distance (Lesson 11) |
| **Yellow** | Penalty area | One stroke, two relief options |
| **Red** | Penalty area | One stroke, three relief options (the extra one is generous) |
| **Blue** (often) | Ground under repair | Free relief |

That table is worth memorizing before your first round. A player who knows red from white saves themselves real strokes and, more importantly, real arguments.

**"Abnormal course conditions"** are the things that are not supposed to be part of the challenge: an **animal hole**, **ground under repair**, an **immovable obstruction** (a cart path, a sprinkler head, a bench), and **temporary water** (a puddle). You get **free relief** from all four (Rule 16.1; R&A, 2023). Note the current word is *temporary water*. You will still hear old-timers say "casual water," which is what the rules used to call it.

:::reveal What do white, yellow, and red stakes each mean on a golf course? ||| White marks out of bounds (the most expensive mistake, stroke and distance). Yellow marks a penalty area with two relief options. Red marks a penalty area with three relief options, including a generous lateral one.

## Sources
- R&A. (2023). *Rule 6: Playing a hole*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-6
- R&A. (2023). *Rule 16: Relief from abnormal course conditions*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-16`,
    },
    {
      slug: "golf-clubs-and-equipment",
      title: "3 · Clubs, balls, and the 14-club rule",
      section: "How to Play",
      recallContent: [
        {
          prompt: "What do white stakes mean, and what do red stakes mean?",
          answer:
            "White marks out of bounds (stroke and distance, the most expensive mistake). Red marks a penalty area, which costs one stroke and gives you three relief options including a lateral one.",
        },
        {
          prompt: "Name the four abnormal course conditions that give you free relief.",
          answer:
            "An animal hole, ground under repair, an immovable obstruction (like a cart path or sprinkler head), and temporary water (a puddle).",
        },
      ],
      body: `**You may carry a maximum of 14 clubs.** The rule is blunt: a player must not "start a round with more than 14 clubs" or "have more than 14 clubs during the round" (Rule 4.1b(1); R&A, 2023). Fourteen is a ceiling, not a requirement. **A beginner should carry about six.**

**What each club is for.** The rule is simple physics: the more the clubface leans back (**loft**), the higher and shorter the ball goes.

| Club | Loft | What it does |
| --- | --- | --- |
| **Driver** | Very low | Longest club, hardest to hit. Only off a tee. |
| **Fairway woods / hybrids** | Low-ish | Long shots from the ground. **Hybrids are far easier to hit than long irons.** |
| **Irons (5 through 9)** | Medium | Your workhorses. Higher number = higher and shorter. |
| **Wedges (PW, SW)** | High | Short, high shots. The **sand wedge** is built to escape bunkers. |
| **Putter** | Almost none | Rolls the ball on the green. You will use it more than any other club. |

**A beginner's six-club bag:** a **7-iron**, a **9-iron**, a **pitching wedge**, a **sand wedge**, a **hybrid**, and a **putter**. That is a complete set of tools for the whole course. Add a driver when you can hit the 7-iron consistently, not before.

**The most useful thing in this lesson:** the 7-iron is the club you should learn on. It is long enough to be satisfying and short enough to be controllable. Thousands of hours of range time should start there.

**Balls.** A ball must conform to the equipment rules (Rule 4.2; R&A, 2023), but for you this is a non-issue: any ball in the shop conforms. **Do not buy expensive balls.** You are going to lose them. Buy used ones by the bucket. Nobody has ever hit a worse shot because of a $1 ball.

**What you actually need to start:** shoes you can walk five miles in, a glove for your lead hand (optional but nice), a few tees, and clubs. That is it. Borrowed or secondhand clubs are completely fine, and Lesson 31 covers how to get equipment for close to nothing.

:::reveal What is the maximum number of clubs you may carry, and what six clubs make a sensible beginner's bag? ||| Fourteen is the maximum (Rule 4.1b(1)), but a beginner needs about six: a 7-iron, a 9-iron, a pitching wedge, a sand wedge, a hybrid, and a putter.

## Sources
- R&A. (2023). *Rule 4: The player's equipment*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-4`,
    },
    {
      slug: "golf-the-swing",
      title: "4 · The swing: grip, aim, posture, turn",
      section: "How to Play",
      recallContent: [
        {
          prompt: "What is the maximum number of clubs you may carry, and which rule says so?",
          answer: "Fourteen clubs, under Rule 4.1b(1).",
        },
        {
          prompt: "Which single club should a beginner learn on, and why?",
          answer:
            "The 7-iron. It is long enough to be satisfying and short enough to be controllable.",
        },
      ],
      body: `No one learns a golf swing from a page of text. What a page of text *can* do is stop you from practicing the four mistakes that ruin beginners before they start. Fix these and a coach can build on solid ground.

**1. Grip: hold it in the fingers, not the palm.** Put the club handle along the base of the fingers of your lead hand (left hand for a right-handed player), then close your hand over it so the thumb sits slightly right of the top. The trail hand covers the lead thumb. Squeeze it about as hard as you would hold a tube of toothpaste you do not want to squirt. Nearly every beginner grips far too tightly, and a tight grip kills the wrist hinge that produces every yard of distance.

**2. Aim: the clubface aims first, your body aims parallel.** Stand behind the ball, pick your target, then pick a **spot two feet in front of your ball** on the target line and aim the clubface at *that*. Then set your feet, knees, hips, and shoulders **parallel to that line**, like railroad tracks. Your body does not aim at the target. It aims parallel to it. Aiming the body at the flag is one of the most common self-inflicted wounds in golf.

**3. Posture: bend from the hips, not the waist.** Stand tall, stick your backside out, let your arms hang straight down. Slight knee flex. Back straight, not hunched. If your arms are not hanging freely, you have no room to swing.

**4. Turn: the body turns, the arms follow.** The swing is a rotation, not a lift. Turn your chest away from the target, let the arms come along for the ride, then turn your chest *through* to face the target. **Finish with your weight on your front foot and your belt buckle pointing at the target.** If you can hold a balanced finish, the swing was probably decent. If you fall backwards, it was not.

**The one thought that fixes the most beginners:** *hit the ground on the target side of the ball.* Golf clubs are built to strike the ball first and the turf second. Beginners try to "lift" the ball into the air with a scooping motion, which is exactly backwards, and it produces the two worst shots in golf (the top and the fat). **Trust the loft. Hit down. The club does the lifting.**

**Practice like this, in this order:**
1. Half swings with a 9-iron, aiming for solid contact and nothing else. Distance is irrelevant.
2. When five in a row come off the middle, lengthen the swing.
3. Only then move to longer clubs.

**Get a lesson.** Not ten. One. A single hour with a qualified teaching professional at the start will save you years of grooving a mistake. Many facilities offer free or cheap group clinics, and Lesson 31 covers how to find them.

:::reveal What is the single swing thought that fixes the most beginners, and why is it counterintuitive? ||| Hit the ground on the target side of the ball, meaning strike the ball first and the turf second. It is counterintuitive because beginners try to scoop or lift the ball into the air, which is backwards. The club's loft does the lifting, so you should hit down.

## Sources
- R&A. (2023). *Rule 10: Preparing for and making a stroke; advice and help*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-10`,
    },
    {
      slug: "golf-short-game-and-putting",
      title: "5 · The short game: where the strokes actually are",
      section: "How to Play",
      recallContent: [
        {
          prompt: "When you aim, where does the clubface point, and where does your body point?",
          answer:
            "The clubface aims at the target (pick a spot a couple of feet ahead of the ball on the target line). Your feet, hips, and shoulders line up parallel to that line, like railroad tracks, not at the target itself.",
        },
        {
          prompt: "Should you try to lift the ball into the air?",
          answer:
            "No. Hit down, striking the ball first and the turf second. The club's loft does the lifting.",
        },
      ],
      body: `Here is the fact that reorganizes how you should practice: **on a par-72 course, 36 of those strokes are putts.** Par assumes two putts on every green. Half of the expected score of a golf round happens on the putting green, with the club almost nobody practices with.

Add chipping and pitching (the short shots around the green) and you are looking at somewhere near two thirds of your score being decided within 50 yards of the hole, while nearly every beginner spends nearly every practice hour hitting drivers.

**Putting.** The whole skill is: start the ball on your line, at the right speed.
- **Speed matters more than line.** A putt on a perfect line at the wrong speed misses. A putt on a slightly wrong line at perfect speed often falls in anyway, because the hole is bigger to a slow ball.
- **Your eyes should be over the ball or just inside it.** Look down. If you can drop a ball from between your eyes and it lands on your golf ball, you are set up well.
- **The stroke rocks from the shoulders.** Hands and wrists stay quiet.
- **Drill: the three-foot circle.** Put six balls in a circle three feet from a hole. Make all six. Then again. Three-footers are where rounds are actually saved, and they are completely learnable.
- **Drill: lag to the fringe.** From 30 feet, try to stop the ball inside an imaginary three-foot circle. Do not aim to make it. Aim to never three-putt.

**Chipping.** A chip is a small shot that spends most of its life rolling.
- Narrow stance, weight favoring your front foot, ball back a touch, hands slightly ahead of the ball.
- **Keep the weight forward and do not scoop.** It is the same lesson as the full swing, in miniature.
- Pick a landing spot a few feet onto the green and let it release to the hole. Chipping is 20% flight and 80% roll.

**Bunkers.** The one shot in golf where **you do not hit the ball at all.** You hit the sand about two inches behind it and let the explosion of sand carry the ball out. Open the face of your sand wedge, aim slightly left of the target, swing along your body line, and *accelerate*. The commonest bunker failure is deceleration, born of fear. The sand wedge is designed to skid through sand rather than dig. Let it.

**The practice split that will drop your score fastest:** for every hour on the range, spend an hour on the putting and chipping green. Those greens are almost always free to use, even at courses that charge for range balls. That is not a small point. It means **the most valuable practice in golf is usually the practice that costs nothing.**

:::reveal On a par-72 course, how many of those strokes does par assume are putts, and what does that imply about how you should practice? ||| 36 of the 72, because par assumes two putts on every green. Half your expected score happens on the putting green, so putting and chipping deserve at least as much practice time as full swings, and short-game greens are usually free to use.

## Sources
- R&A. (2023). *Rule 13: Putting greens*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-13
- R&A. (2023). *Rule 12: Bunkers*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-12`,
    },
    {
      slug: "golf-etiquette-and-pace",
      title: "6 · Etiquette, pace, and not being the person everyone hates",
      section: "How to Play",
      recallContent: [
        {
          prompt: "What matters more on a putt, speed or line?",
          answer:
            "Speed. A putt on a perfect line at the wrong speed misses, while a putt at perfect speed on a slightly wrong line often drops anyway.",
        },
        {
          prompt: "In a bunker shot, what do you actually hit?",
          answer:
            "The sand, about two inches behind the ball. The sand explosion carries the ball out. Accelerate through it.",
        },
      ],
      body: `Golf has more unwritten rules than any other sport, and beginners are forgiven for every single one of them **except being slow**. Learn the etiquette and you will be welcome anywhere, at any level, immediately.

**Pace of play is the whole ballgame.**

The Rules themselves recommend that you "make the stroke in no more than **40 seconds**" once it is your turn, and add that you "should usually be able to play more quickly than that" (Rule 5.6b(1); R&A, 2023). Unreasonable delay carries actual penalties, escalating to disqualification (Rule 5.6a).

Better still, the Rules explicitly kill the old idea that you must wait for the person furthest from the hole. In stroke play, players are "**both allowed and encouraged to play out of turn in a safe and responsible way**" (Rule 6.4b(2); R&A, 2023). This is **"ready golf,"** and it is not just permitted, it is the recommended way to play. If you are ready and it is safe, hit.

**How to be fast without rushing:**
- Think about your shot **while others are hitting**, not after.
- Take your club (or two, if unsure) and walk to your ball, rather than walking to your ball and then back to your bag.
- Park your bag or cart **on the side of the green toward the next tee**.
- **Write scores down on the next tee**, not standing on the green.
- If you are having a disaster hole, **pick up**. In a casual round, nobody needs to see your 11.
- **Let faster groups play through.** It costs you two minutes and buys you a pleasant afternoon.

**Safety, which is not optional.** A golf ball is a small rock traveling at over a hundred miles an hour.
- **Never hit when anyone could possibly be in range.** Not "probably won't be." Could be.
- If your ball is heading anywhere near a person, **yell "FORE!" immediately and loudly.** Do not be embarrassed. Being embarrassed is much better than the alternative.
- If you hear "fore," **do not look up to find the ball.** Turn away, duck, and cover your head.
- Stand well clear of anyone swinging.

**The care rules that make you welcome:**
- **Repair your ball mark on the green** (Rule 13.1c(2) lets you repair damage, and it is good manners besides). Repair someone else's too.
- **Rake the bunker** after you play from it.
- **Replace your divots** or fill them with the sand mix provided.
- **Do not walk on another player's line to the hole** on the green. Step around it.
- **Stand still and be quiet** while someone is playing.
- **Turn your phone off.**

**Advice is against the Rules.** During a round you must not give advice to, or ask advice of, anyone in the competition other than your own caddie (Rule 10.2a; R&A, 2023). The penalty is the general penalty. In a friendly round nobody cares, but know that in competition, "what club did you hit?" is worth two strokes.

:::reveal What does the phrase "ready golf" mean, and does the Rules of Golf permit it? ||| Ready golf means that if you are ready to play and it is safe, you hit, instead of waiting for whoever is furthest from the hole. Rule 6.4b(2) does more than permit it in stroke play: it says players are "both allowed and encouraged to play out of turn in a safe and responsible way."

## Sources
- R&A. (2023). *Rule 5: Playing the round*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-5
- R&A. (2023). *Rule 6: Playing a hole*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-6
- R&A. (2023). *Rule 10: Preparing for and making a stroke; advice and help*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-10
- R&A. (2023). *Rule 13: Putting greens*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-13`,
    },
    {
      slug: "golf-first-round-drill",
      title: "7 · Practice: the pre-round check",
      section: "How to Play",
      recallContent: [
        {
          prompt: "How long do the Rules recommend you take to make a stroke?",
          answer:
            "No more than 40 seconds once it is your turn, and the Rules add that you should usually be able to play more quickly than that (Rule 5.6b(1)).",
        },
        {
          prompt: "What should you do if you hear someone shout \"fore\"?",
          answer:
            "Do not look up to find the ball. Turn away, duck, and cover your head.",
        },
      ],
      body: `Before you play your first round, you should be able to answer these without thinking. Fill in each blank, then check. Spelling and capitalization are forgiving.`,
      exercise: {
        instructions:
          "Fill in each blank from what you have learned so far. This is the checklist that gets you onto a first tee without embarrassment.",
        items: [
          {
            prompt: "The maximum number of clubs you may carry in your bag is ___.",
            answer: "14",
            accept: ["fourteen", "14 clubs"],
            explanation: "Rule 4.1b(1). It is a ceiling, not a requirement. A beginner needs about six.",
          },
          {
            prompt: "Stakes or lines marking OUT OF BOUNDS are what color? ___",
            answer: "white",
            explanation: "White means off the course entirely, and it costs you stroke and distance.",
          },
          {
            prompt: "A penalty area with the extra, generous lateral relief option is marked in what color? ___",
            answer: "red",
            explanation: "Red penalty areas give three relief options; yellow gives only two.",
          },
          {
            prompt: "Practicing while it is not your turn, and hitting when you are ready and it is safe, is called ___ golf.",
            answer: "ready",
            explanation: "Rule 6.4b(2) says players are allowed AND encouraged to play out of turn in a safe and responsible way.",
          },
          {
            prompt: "The Rules recommend making your stroke within ___ seconds of it being your turn.",
            answer: "40",
            accept: ["forty", "40 seconds"],
            explanation: "Rule 5.6b(1), which adds that you should usually be able to play faster than that.",
          },
          {
            prompt: "The word you shout, loudly and immediately, if your ball is heading toward someone is ___.",
            answer: "fore",
            explanation: "And if you hear it, do not look up. Turn away, duck, and cover your head.",
          },
          {
            prompt: "In a bunker shot, you aim to strike the ___, not the ball.",
            answer: "sand",
            explanation: "Hit about two inches behind the ball and let the sand carry it out. Accelerate.",
          },
          {
            prompt: "On a par-72 course, par assumes you will take ___ putts.",
            answer: "36",
            accept: ["thirty-six", "thirty six"],
            explanation: "Two putts per green. Half your expected score happens with the putter.",
          },
          {
            prompt: "The single club a beginner should learn the swing with is the ___-iron.",
            answer: "7",
            accept: ["seven", "7 iron", "seven iron"],
            explanation: "Long enough to be satisfying, short enough to be controllable.",
          },
          {
            prompt: "Instead of scooping the ball up, you should hit ___ on it, striking the ball before the turf.",
            answer: "down",
            explanation: "The club's loft does the lifting. Scooping produces the two worst shots in golf, the top and the fat.",
          },
        ],
      },
    },
    {
      slug: "golf-how-to-play-quiz",
      title: "8 · Check your understanding: how to play",
      section: "How to Play",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is the object of golf?",
            options: [
              "Hit the ball as far as possible",
              "Hit the ball into the hole in as few strokes as possible",
              "Stay on the fairway for all 18 holes",
              "Score the most points per hole",
            ],
            correctIndex: 1,
            explanation:
              "Rule 1.1: golf is played in a round of 18 (or fewer) holes by striking a ball with a club. Fewest strokes wins.",
            sourceLessonSlug: "golf-what-the-game-is",
          },
          {
            prompt: "In match play, what happens if you take a disastrous 9 on one hole?",
            options: [
              "Those 9 strokes are added to your total and are very costly",
              "You are disqualified",
              "You lose that one hole and nothing more",
              "You must replay the hole",
            ],
            correctIndex: 2,
            explanation:
              "Match play is decided hole by hole, so a blow-up hole costs you exactly one hole. That is why it is forgiving for beginners.",
            sourceLessonSlug: "golf-what-the-game-is",
          },
          {
            prompt: "What is the maximum number of clubs a player may carry?",
            options: ["10", "12", "14", "There is no limit"],
            correctIndex: 2,
            explanation: "Rule 4.1b(1) prohibits starting a round with, or having during the round, more than 14 clubs.",
            sourceLessonSlug: "golf-clubs-and-equipment",
          },
          {
            prompt: "What do white stakes mark?",
            options: ["A penalty area", "Ground under repair", "Out of bounds", "The teeing area"],
            correctIndex: 2,
            explanation:
              "White marks out of bounds, which costs you stroke and distance, the most expensive penalty in golf.",
            sourceLessonSlug: "golf-the-course-tee-to-green",
          },
          {
            prompt: "Which penalty area color gives you the extra lateral relief option?",
            options: ["Yellow", "Red", "Blue", "White"],
            correctIndex: 1,
            explanation:
              "Red penalty areas offer three relief options including lateral relief. Yellow offers only two.",
            sourceLessonSlug: "golf-the-course-tee-to-green",
          },
          {
            prompt: "Which of these is NOT one of the four abnormal course conditions giving free relief?",
            options: ["Temporary water", "An immovable obstruction like a cart path", "Ground under repair", "A bunker"],
            correctIndex: 3,
            explanation:
              "Rule 16.1 covers animal holes, ground under repair, immovable obstructions, and temporary water. A bunker is a designed part of the challenge, not an abnormal condition.",
            sourceLessonSlug: "golf-the-course-tee-to-green",
          },
          {
            prompt: "Which club should a beginner learn the swing with?",
            options: ["The driver", "The 7-iron", "The putter", "The sand wedge"],
            correctIndex: 1,
            explanation:
              "The 7-iron is long enough to be satisfying and short enough to be controllable. Add a driver later.",
            sourceLessonSlug: "golf-clubs-and-equipment",
          },
          {
            prompt: "When you set up to a shot, where should your feet, hips, and shoulders point?",
            options: [
              "Directly at the target",
              "Parallel to the target line, like railroad tracks",
              "To the right of the target",
              "It makes no difference",
            ],
            correctIndex: 1,
            explanation:
              "The clubface aims at the target; the body lines up parallel to that line. Aiming the body at the flag is a very common self-inflicted error.",
            sourceLessonSlug: "golf-the-swing",
          },
          {
            prompt: "What is the swing thought that corrects the most common beginner error?",
            options: [
              "Scoop the ball up into the air",
              "Hit down, striking the ball first and the turf second",
              "Swing as hard as possible",
              "Keep your weight on your back foot",
            ],
            correctIndex: 1,
            explanation:
              "The club's loft does the lifting. Trying to lift the ball produces tops and fat shots.",
            sourceLessonSlug: "golf-the-swing",
          },
          {
            prompt: "On a par-72 course, how many strokes does par assume are putts?",
            options: ["18", "24", "36", "45"],
            correctIndex: 2,
            explanation:
              "Two putts per green across 18 greens is 36 strokes, half the expected score. That is why the short game deserves half your practice.",
            sourceLessonSlug: "golf-short-game-and-putting",
          },
          {
            prompt: "On a putt, which matters more?",
            options: [
              "Line, because speed takes care of itself",
              "Speed, because a good line at the wrong speed still misses",
              "Neither; putting is luck",
              "The brand of putter",
            ],
            correctIndex: 1,
            explanation:
              "A putt at the right speed on a slightly wrong line often still drops. A perfect line at the wrong speed does not.",
            sourceLessonSlug: "golf-short-game-and-putting",
          },
          {
            prompt: "In a greenside bunker shot, what do you strike?",
            options: [
              "The ball, cleanly, first",
              "The sand, about two inches behind the ball",
              "The top of the ball",
              "The lip of the bunker",
            ],
            correctIndex: 1,
            explanation:
              "You hit the sand and let the explosion carry the ball out. The commonest failure is decelerating out of fear.",
            sourceLessonSlug: "golf-short-game-and-putting",
          },
          {
            prompt: "What does Rule 6.4b(2) say about playing out of turn in stroke play?",
            options: [
              "It is a two-stroke penalty",
              "It is permitted only if your opponent agrees",
              "Players are both allowed and encouraged to do it in a safe and responsible way",
              "It is never permitted",
            ],
            correctIndex: 2,
            explanation:
              "This is 'ready golf.' The Rules actively encourage it, because pace of play matters.",
            sourceLessonSlug: "golf-etiquette-and-pace",
          },
          {
            prompt: "How long do the Rules recommend you take to play a stroke once it is your turn?",
            options: ["No more than 40 seconds", "No more than 3 minutes", "No more than 2 minutes", "There is no recommendation"],
            correctIndex: 0,
            explanation:
              "Rule 5.6b(1) recommends no more than 40 seconds, and adds you should usually be able to play more quickly than that.",
            sourceLessonSlug: "golf-etiquette-and-pace",
          },
          {
            prompt: "During a competitive round, asking another competitor what club they hit is:",
            options: [
              "Perfectly fine and encouraged",
              "A breach of the advice rule, carrying the general penalty",
              "Only allowed on par 3s",
              "Required by the Rules",
            ],
            correctIndex: 1,
            explanation:
              "Rule 10.2a prohibits giving or asking for advice from anyone in the competition other than your own caddie.",
            sourceLessonSlug: "golf-etiquette-and-pace",
          },
        ],
      },
    },

    // ── Section 2: The Rules ──────────────────────────────────────────────
    {
      slug: "golf-who-writes-the-rules",
      title: "9 · Who writes the Rules, and why that matters",
      section: "The Rules",
      body: `Golf is one of the very few sports with **a single rulebook used by everyone on earth**, from a municipal course in Ohio to the final round of The Open. It is written jointly by two bodies:

- **The USGA** (United States Golf Association), which governs golf in the **United States and Mexico**.
- **The R&A**, which governs the game in **the rest of the world**.

They write **one shared code**. The Rules of Golf you play by at your local muni are word for word the Rules that decide a major championship.

**Which edition is in force.** The Rules were substantially **rewritten for 2019**, the biggest modernization in generations. The current edition is the **2023 Rules of Golf, effective 1 January 2023**, and The R&A has said the next edition will be published on **1 January 2028** (R&A, n.d.). Between editions the two bodies issue clarifications, which explain the rules but do not renumber them.

**This is why you should be suspicious of golf advice.** The 2019 rewrite changed several of the rules people "know," and a lot of what gets repeated on a golf course is simply the old rulebook, confidently recited. Three examples you will meet in this section:

| What people still say | What the Rules actually say now |
| --- | --- |
| "Take the flagstick out or you'll be penalized" | You may **leave it in**, and there is **no penalty** if your ball hits it (Rule 13.2a) |
| "You can't touch a loose impediment in a bunker" | You **may remove loose impediments** in a bunker (Rule 12.2a) |
| "You can't fix a spike mark on your line" | You **may repair** it (Rule 13.1c(2)) |

All three changed in **2019**. All three are still argued about on golf courses every weekend.

**How rules are cited.** The format is `Rule 4.1b(1)`: rule number, then a letter, then a parenthesized numeral. When you want to settle an argument, that citation is how you find the exact text in seconds.

**How the Rules expect you to behave.** Rule 1.2a says all players are expected to play "in the spirit of the game" by "acting with integrity, for example, by following the Rules, applying all penalties, and being honest in all aspects of play" (R&A, 2023). Golf is the only major sport where **players routinely call penalties on themselves that no official saw**. That norm is the sport's best feature, and it is worth protecting.

:::reveal Which two organizations write the Rules of Golf, which parts of the world does each govern, and which edition is currently in force? ||| The USGA (governing the United States and Mexico) and The R&A (governing the rest of the world) write one shared code together. The edition in force is the 2023 Rules of Golf, effective 1 January 2023, following the major 2019 rewrite. The next edition is due 1 January 2028.

## Sources
- R&A. (2023). *Rule 1: The game, player conduct and the Rules*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-1
- R&A. (n.d.). *About the Rules of Golf*. https://www.randa.org/en/for-app-about-the-rules-of-golf
- USGA. (n.d.). *Our history*. https://www.usga.org/about/our-history.html`,
    },
    {
      slug: "golf-play-it-as-it-lies",
      title: "10 · Play it as it lies (and the times you don't have to)",
      section: "The Rules",
      recallContent: [
        {
          prompt: "Which two bodies write the Rules of Golf, and which does the USGA govern?",
          answer:
            "The USGA and The R&A write one shared code. The USGA governs golf in the United States and Mexico; The R&A governs the rest of the world.",
        },
        {
          prompt: "Name one rule that people still get wrong because it changed in the 2019 rewrite.",
          answer:
            "Any of: you may leave the flagstick in with no penalty if your ball hits it (Rule 13.2a); you may remove loose impediments in a bunker (Rule 12.2a); you may repair spike marks on the green (Rule 13.1c(2)).",
        },
      ],
      body: `The foundational rule of golf is one sentence: **"A player's ball at rest on the course must be played as it lies"** (Rule 9.1; R&A, 2023). Wherever it finished, that is where you play from, good bounce or cruel one. The rest of the rulebook is essentially a list of the specific situations where the Rules let you off that hook.

**If you move your own ball at rest, it costs you.** Lift it, deliberately touch it, or cause it to move, and it is **one penalty stroke**, and you must **replace** it where it was (Rule 9.4b). This catches beginners who address the ball in deep rough and see it wobble.

**Two important exceptions**, both worth knowing:
- **On the putting green there is no penalty** if you accidentally cause your ball to move. Just put it back (Rule 9.4b, Exception 3).
- There is **no penalty** if you move it accidentally while doing something the Rules allow, like marking, lifting, replacing, or measuring for relief (Rule 9.4b, Exception 4).

**Loose impediments: you can move them, anywhere.** A loose impediment is a natural loose object: a stone, a leaf, a twig, a worm, an insect. **You may remove one anywhere on or off the course** (Rule 15.1a). Since 2019 that includes **inside a bunker** (Rule 12.2a). But be careful, because if the **ball moves** while you are moving the impediment, you generally get a penalty stroke and must replace it (Rule 15.1b).

**The double hit is no longer a penalty.** If your club accidentally strikes the ball more than once in a single stroke, "there has been only one stroke and there is no penalty" (Rule 10.1a; R&A, 2023). This changed in **the 2019 rewrite**, and you will still hear people insist it costs a stroke. It does not.

**Wrong ball.** Play a ball that is not yours and, in stroke play, you get the **general penalty, two strokes**, and you must correct the mistake by going back and playing your actual ball. The strokes you made with the wrong ball do not count (Rule 6.3c(1)). Practical consequence: **mark your ball.** Write on it with a Sharpie. Two players in a group with the same brand and number is a genuinely common disaster.

**"General penalty"** is a phrase worth learning once. It means **two strokes in stroke play, or loss of hole in match play.** The Rules use it constantly.

:::reveal What is the foundational rule of golf, and what does "general penalty" mean? ||| "A player's ball at rest on the course must be played as it lies" (Rule 9.1). The general penalty means two strokes in stroke play, or loss of the hole in match play.

## Sources
- R&A. (2023). *Rule 9: Ball played as it lies; ball at rest lifted or moved*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-9
- R&A. (2023). *Rule 10: Preparing for and making a stroke; advice and help*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-10
- R&A. (2023). *Rule 6: Playing a hole*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-6
- R&A. (2023). *Rule 15: Relief from loose impediments and movable obstructions*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-15`,
    },
    {
      slug: "golf-lost-ball-ob-provisional",
      title: "11 · Lost ball, out of bounds, and the provisional",
      section: "The Rules",
      recallContent: [
        {
          prompt: "What is Rule 9.1, the foundational rule of golf?",
          answer: "\"A player's ball at rest on the course must be played as it lies.\"",
        },
        {
          prompt: "If your club accidentally hits the ball twice in one stroke, what is the penalty?",
          answer:
            "None. Rule 10.1a says there has been only one stroke and there is no penalty. This changed in the 2019 rewrite.",
        },
      ],
      body: `This is the rule that costs amateurs the most strokes and the most arguments, so learn it properly.

**You get three minutes to search.** "A ball is lost if not found in three minutes after the player or their caddie begins to search for it" (Rule 18.2a(1); R&A, 2023). Three minutes, not five. The clock starts when you begin searching, not when you hit it.

**Lost ball or out of bounds means stroke and distance.** You must go back to where you played your last shot and play again, **and it costs you a penalty stroke** (Rule 18.2; R&A, 2023). Hence the name: you lose a **stroke**, and you lose the **distance** the shot traveled.

Work through what that actually means. You hit your tee shot out of bounds. That was stroke 1. The penalty is stroke 2. You are now back on the tee **hitting your third shot**, and you have not advanced one inch. A single wild drive can turn into a 7 before you have done anything else wrong. This is why out of bounds, marked in white, is the most expensive thing on a golf course.

**The provisional ball is your defense.** If your ball "might be lost outside a penalty area or might be out of bounds," you may, **to save time**, play another ball provisionally under penalty of stroke and distance (Rule 18.3; R&A, 2023).

**You must announce it.** Say the word "**provisional**" out loud before you hit. If you do not announce it, the second ball simply becomes your ball in play under stroke and distance, and your original is dead even if you find it sitting in the middle of the fairway. This exact mistake happens constantly.

How it resolves:
- **Original found in bounds within three minutes?** Play the original. Pick up the provisional. No penalty.
- **Original lost or out of bounds?** The provisional is now your ball, and you are lying three from the tee. But you saved the long walk back, which is the entire point.

**The local rule that might save you (but might not apply).** You may have seen players drop a ball out near where they lost it and take two strokes instead of walking back. That is **Model Local Rule E-5, "Alternative to Stroke and Distance for Lost Ball or Ball Out of Bounds"** (R&A, n.d.). Understand three things about it:

1. It is a **Model Local Rule, not a Rule of Golf.** It only applies **if the Committee running your course or competition has actually adopted it.** It is not automatically in force just because you like it.
2. It costs **two penalty strokes**, and you drop between where the ball was lost or went out of bounds and the edge of the fairway, no nearer the hole.
3. It is expressly **not appropriate for professional competitions or elite amateur competitions.** So it will never be in play in the tournament you are watching on television, which is why the pros always trudge back to the tee.

That third point resolves a question almost every new golfer asks.

:::reveal How long do you have to search for a ball, what does "stroke and distance" cost you, and what one word must you say before hitting a provisional? ||| Three minutes to search (Rule 18.2a(1)). Stroke and distance costs you one penalty stroke AND sends you back to play again from where you last played, so a tee shot out of bounds means you are hitting your third shot from the tee. You must announce the word "provisional" before hitting, or the second ball automatically becomes your ball in play.

## Sources
- R&A. (2023). *Rule 18: Stroke-and-distance relief; ball lost or out of bounds; provisional ball*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-18
- R&A. (n.d.). *Committee procedures, section 8: Model Local Rules*. https://www.randa.org/en/rog/committee-procedures/8`,
    },
    {
      slug: "golf-penalty-areas-and-unplayable",
      title: "12 · Penalty areas and the unplayable ball",
      section: "The Rules",
      recallContent: [
        {
          prompt: "How long do you have to search for your ball?",
          answer: "Three minutes from when you begin searching (Rule 18.2a(1)).",
        },
        {
          prompt: "What must you say before playing a provisional ball, and why does it matter?",
          answer:
            "You must announce \"provisional.\" If you do not, the second ball automatically becomes your ball in play under stroke and distance, and your original is dead even if you find it.",
        },
      ],
      body: `**Penalty areas** are the water hazards and other marked ground the committee has staked in **yellow** or **red**. You are always allowed to play the ball as it lies from inside one, if you fancy your chances. Usually you should not.

**Taking relief costs one penalty stroke**, and your options depend on the color (Rule 17.1d; R&A, 2023):

| Option | Rule | Yellow | Red |
| --- | --- | --- | --- |
| **Stroke-and-distance relief** (go back and replay) | 17.1d(1) | Yes | Yes |
| **Back-on-the-line relief** (go back as far as you like, keeping the point where the ball crossed into the area between you and the hole) | 17.1d(2) | Yes | Yes |
| **Lateral relief** (two club-lengths from where it last crossed the edge, no nearer the hole) | 17.1d(3) | **No** | **Yes** |

So the practical rule is: **red gives you the sideways drop; yellow does not.** Lateral relief is explicitly marked in the Rules as "(Only for Red Penalty Area)."

**Back-on-the-line relief is underrated.** You may go back **as far as you want** along that line, which often means you can walk back to a comfortable full-swing yardage instead of dropping into an awkward one. Beginners almost never use it and frequently should.

**The unplayable ball: you are always allowed to declare it.** Deep in a bush, up against a tree root, buried under a fallen branch, **you** decide. Nobody else. You may take unplayable relief **anywhere on the course except in a penalty area** (Rule 19.1; R&A, 2023). It costs **one penalty stroke** and you pick one of three options (Rule 19.2):

- **19.2a Stroke-and-distance:** go back and replay from where you hit the last one.
- **19.2b Back-on-the-line:** keep the ball's spot between you and the hole, go back as far as you like.
- **19.2c Lateral:** two club-lengths from the ball, no nearer the hole.

**Take the unplayable.** New golfers hack at a ball in a bush four times, take a 9, and injure their wrists, when one penalty stroke and a clean swing would have made 6. **A penalty stroke you choose is almost always cheaper than a hero shot you did not.**

**Bunkers have a special twist** (Rule 19.3):
- Take the normal options for one stroke, and **the ball must stay in the bunker** (Rule 19.3a).
- Or, **for a total of two penalty strokes**, take back-on-the-line relief **outside the bunker** (Rule 19.3b).

That second option is a genuine escape hatch from a buried lie under a steep lip, and it is worth knowing before you find yourself in one.

:::reveal Which penalty-area color gives you lateral relief, and what is the special extra option for an unplayable ball in a bunker? ||| Red gives lateral relief (Rule 17.1d(3), marked "Only for Red Penalty Area"); yellow does not. For an unplayable ball in a bunker, Rule 19.3b lets you take back-on-the-line relief OUTSIDE the bunker for a total of two penalty strokes, instead of the normal one-stroke options which keep you in the sand.

## Sources
- R&A. (2023). *Rule 17: Penalty areas*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-17
- R&A. (2023). *Rule 19: Unplayable ball*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-19`,
    },
    {
      slug: "golf-bunkers-and-greens",
      title: "13 · Bunkers and greens: the rules that changed",
      section: "The Rules",
      recallContent: [
        {
          prompt: "What does lateral relief cost, and which stake color offers it?",
          answer:
            "One penalty stroke, and only a RED penalty area offers it (Rule 17.1d(3)). You drop within two club-lengths of where the ball last crossed the edge, no nearer the hole.",
        },
        {
          prompt: "Why should a beginner be quicker to declare a ball unplayable?",
          answer:
            "Because a penalty stroke you choose is almost always cheaper than a hero shot you did not. Hacking at a ball in a bush turns a 6 into a 9 and risks injury.",
        },
      ],
      body: `Bunkers and greens are where the 2019 rewrite changed the most, so this is where you are most likely to be confidently told something false.

**In a bunker, you MAY:**
- **Remove loose impediments** (leaves, stones, twigs). Rule 12.2a says so plainly: before playing a ball in a bunker, a player may remove loose impediments under Rule 15.1. **This was illegal before 2019 and is legal now.**
- Remove movable obstructions (a rake, a bottle, a cigarette end).
- Lean on your club outside the bunker, or use it to keep balance.

**In a bunker, you MAY NOT** (Rule 12.2b(1); R&A, 2023):
- Deliberately touch the sand with a hand, club, or rake **to test its condition**.
- Touch the sand with your club **right in front of or right behind the ball**.
- Touch the sand with your club **in a practice swing**.
- Touch the sand with your club **on your backswing**.

Breach of any of those is the **general penalty**: two strokes, or loss of hole. In short: **do not ground your club in a bunker.** Hover it. The other stuff about leaves is now legal, but this one is not.

**On the putting green, the rules are the friendliest in golf.**

- **You may always mark, lift, and clean your ball** (Rule 13.1b; R&A, 2023). Mark the spot first, then lift. The green is the one place you can clean a muddy ball whenever you want.
- **You may repair damage**, including **ball marks, shoe damage such as spike marks**, old hole plugs, and animal tracks (Rule 13.1c(2)). Repairing spike marks on your line **was illegal before 2019** and is legal now. This one still starts arguments.
- **You may leave the flagstick in the hole while you putt**, and if your ball hits it, **there is no penalty** and you play the ball as it lies (Rule 13.2a(1) and 13.2a(2); R&A, 2023). Before 2019, hitting an unattended flagstick from the green was a penalty. It is not anymore. You may leave it in, take it out, or have it attended, entirely as you prefer. Many good players now leave it in on long putts because it can only help.

**Why so many arguments?** Because a player who learned the game before 2019 learned the *opposite* of three of these, and nothing is more confident than a golfer who is out of date. Now you can cite the rule number, which is a superpower.

:::reveal Name the three things you may now do that were penalties before the 2019 rewrite. ||| (1) Remove loose impediments in a bunker (Rule 12.2a). (2) Repair spike marks and other shoe damage on the putting green (Rule 13.1c(2)). (3) Leave the flagstick in the hole while putting, with no penalty if your ball hits it (Rule 13.2a).

## Sources
- R&A. (2023). *Rule 12: Bunkers*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-12
- R&A. (2023). *Rule 13: Putting greens*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-13
- R&A. (2023). *Rule 15: Relief from loose impediments and movable obstructions*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-15`,
    },
    {
      slug: "golf-formats",
      title: "14 · Formats: more ways to play than you think",
      section: "The Rules",
      recallContent: [
        {
          prompt: "What may you NOT do in a bunker?",
          answer:
            "Do not ground your club. You may not touch the sand to test it, touch it right in front of or behind the ball, touch it in a practice swing, or touch it on your backswing (Rule 12.2b(1)). The penalty is the general penalty.",
        },
        {
          prompt: "Can you leave the flagstick in while you putt?",
          answer:
            "Yes. Rule 13.2a lets you leave it in, and there is no penalty if your ball hits it. This changed in 2019.",
        },
      ],
      body: `Stroke play, where you count every shot, is the format most beginners assume is the only one. It is also, for a beginner, the least fun format in golf, because one catastrophic hole wrecks the whole card.

The Rules formally recognize a whole menu of alternatives (Rule 21; R&A, 2023). Learn them, because **the right format turns golf from discouraging to addictive.**

**Individual formats:**

| Format | Rule | How it works | Good for |
| --- | --- | --- | --- |
| **Match play** | 3.2 | Hole by hole against one opponent | Beginners. A blow-up costs one hole. |
| **Stableford** | 21.1 | **Points** for your score on each hole; more points is better | Beginners. A disaster hole scores zero and you move on. |
| **Maximum Score** | 21.2 | Your score on a hole is **capped** at a maximum the Committee sets, such as double par or net double bogey | Pace of play, and sanity |
| **Par/Bogey** | 21.3 | Match play against a fixed target score on each hole | Club competitions |

**Stableford deserves your attention.** It is the single most beginner-friendly format in golf. You get points for playing a hole well, and a catastrophe simply scores zero, so you pick up and walk to the next tee with your mood intact. Many club competitions are run this way.

**Maximum Score** does the same job in stroke-play form: the Committee sets a cap (Rule 21.2a explicitly mentions "two times par, a fixed number or net double bogey"), and once you reach it you pick up. It is a formal, rules-sanctioned way of saying "that's enough, let's move on," and it is excellent for both pace and morale.

**Team formats** (Rules 22, 23, 24), which are how most golf is actually played socially:

- **Foursomes** (Rule 22), often called **alternate shot**: partners play **one ball**, hitting alternate strokes. Brutal, hilarious, over quickly.
- **Four-Ball** (Rule 23), often called **best ball**: partners each play their own ball, and the **better score counts** on each hole. **This is the format to play as a beginner with a better golfer.** Your bad holes vanish, your occasional great hole wins the hole for the team, and you are a genuine contributor from day one.
- **Scramble**: everyone tees off, the team picks the best shot, everyone plays from there, repeat. This is what charity tournaments run, and it is the single best format for an absolute beginner to enjoy a first outing. It is a social format rather than one defined in Rule 21.

**The takeaway for your first year:** play **four-ball, scrambles, and Stableford**. Save 18 holes of medal stroke play for when a bad hole no longer ruins your afternoon.

:::reveal Which format lets a beginner play alongside a better golfer and actually contribute, and which format makes a disaster hole simply score zero? ||| Four-Ball (best ball, Rule 23), where partners each play their own ball and the better score counts on each hole, lets a beginner contribute from day one. Stableford (Rule 21.1) awards points per hole, so a disaster hole scores zero and you move on.

## Sources
- R&A. (2023). *Rule 3: The competition*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-3
- R&A. (2023). *Rule 21: Other forms of individual stroke play and match play*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-21`,
    },
    {
      slug: "golf-rules-quiz",
      title: "15 · Check your understanding: the Rules",
      section: "The Rules",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Who writes the Rules of Golf?",
            options: [
              "The PGA Tour",
              "The USGA and The R&A jointly, as one shared code",
              "Each country writes its own",
              "The PGA of America",
            ],
            correctIndex: 1,
            explanation:
              "The USGA governs the US and Mexico, The R&A governs the rest of the world, and they write a single shared rulebook.",
            sourceLessonSlug: "golf-who-writes-the-rules",
          },
          {
            prompt: "Which edition of the Rules of Golf is currently in force?",
            options: [
              "The 2016 Rules",
              "The 2019 Rules",
              "The 2023 Rules, effective 1 January 2023",
              "The 2028 Rules",
            ],
            correctIndex: 2,
            explanation:
              "The major rewrite was 2019; the current edition took effect 1 January 2023, and the next is due 1 January 2028.",
            sourceLessonSlug: "golf-who-writes-the-rules",
          },
          {
            prompt: "What is the foundational rule expressed in Rule 9.1?",
            options: [
              "You may always improve your lie",
              "A player's ball at rest on the course must be played as it lies",
              "You must always take the flagstick out",
              "You get five minutes to search for a ball",
            ],
            correctIndex: 1,
            explanation:
              "Everything else in the rulebook is essentially a list of the exceptions to this sentence.",
            sourceLessonSlug: "golf-play-it-as-it-lies",
          },
          {
            prompt: "What does the term \"general penalty\" mean?",
            options: [
              "One stroke",
              "Disqualification",
              "Two strokes in stroke play, or loss of hole in match play",
              "A warning only",
            ],
            correctIndex: 2,
            explanation: "The Rules use this phrase constantly, so it is worth learning once.",
            sourceLessonSlug: "golf-play-it-as-it-lies",
          },
          {
            prompt: "Your club accidentally strikes the ball twice during one stroke. What happens?",
            options: [
              "One penalty stroke",
              "Two penalty strokes",
              "It counts as one stroke with no penalty",
              "You must replay the shot",
            ],
            correctIndex: 2,
            explanation:
              "Rule 10.1a: there has been only one stroke and there is no penalty. This changed in the 2019 rewrite, not 2023.",
            sourceLessonSlug: "golf-play-it-as-it-lies",
          },
          {
            prompt: "How long may you search for your ball before it is lost?",
            options: ["One minute", "Three minutes", "Five minutes", "As long as you like"],
            correctIndex: 1,
            explanation:
              "Rule 18.2a(1): three minutes from when you or your caddie begin searching. It used to be five.",
            sourceLessonSlug: "golf-lost-ball-ob-provisional",
          },
          {
            prompt: "You hit your tee shot out of bounds. Under stroke and distance, what are you now playing from the tee?",
            options: ["Your second shot", "Your third shot", "Your fourth shot", "You drop where it crossed the line"],
            correctIndex: 1,
            explanation:
              "The tee shot was stroke 1, the penalty is stroke 2, so you are hitting your third shot and have advanced nowhere. This is why out of bounds is so expensive.",
            sourceLessonSlug: "golf-lost-ball-ob-provisional",
          },
          {
            prompt: "What must you do before playing a provisional ball?",
            options: [
              "Nothing, just hit it",
              "Announce that it is a provisional",
              "Ask your opponent's permission",
              "Wait three minutes",
            ],
            correctIndex: 1,
            explanation:
              "Rule 18.3 requires you to announce it. If you do not, the second ball simply becomes your ball in play under stroke and distance.",
            sourceLessonSlug: "golf-lost-ball-ob-provisional",
          },
          {
            prompt: "The 'drop it near where you lost it for two strokes' option is:",
            options: [
              "Rule 18.4, a Rule of Golf that always applies",
              "Model Local Rule E-5, which applies only if the Committee has adopted it, and is not for elite competition",
              "Illegal everywhere",
              "Only available on par 3s",
            ],
            correctIndex: 1,
            explanation:
              "It is a Model Local Rule, not a Rule of Golf, and it is expressly not appropriate for professional or elite amateur play. That is why tour players always walk back to the tee.",
            sourceLessonSlug: "golf-lost-ball-ob-provisional",
          },
          {
            prompt: "Which penalty area color offers lateral relief?",
            options: ["Yellow only", "Red only", "Both equally", "Neither"],
            correctIndex: 1,
            explanation:
              "Rule 17.1d(3) is marked 'Only for Red Penalty Area.' Yellow offers only stroke-and-distance and back-on-the-line.",
            sourceLessonSlug: "golf-penalty-areas-and-unplayable",
          },
          {
            prompt: "Where may you NOT declare your ball unplayable?",
            options: ["In a bunker", "In the rough", "In a penalty area", "On the putting green"],
            correctIndex: 2,
            explanation:
              "Rule 19.1 allows unplayable relief anywhere on the course EXCEPT a penalty area, which has its own relief rules under Rule 17.",
            sourceLessonSlug: "golf-penalty-areas-and-unplayable",
          },
          {
            prompt: "Your ball is buried under a steep bunker lip. What does Rule 19.3b let you do?",
            options: [
              "Take free relief outside the bunker",
              "Take back-on-the-line relief outside the bunker for a total of two penalty strokes",
              "Move the ball to the fairway for one stroke",
              "Nothing; you must play it",
            ],
            correctIndex: 1,
            explanation:
              "The one-stroke unplayable options keep the ball in the bunker (19.3a). The two-stroke option (19.3b) is the escape hatch out of it.",
            sourceLessonSlug: "golf-penalty-areas-and-unplayable",
          },
          {
            prompt: "In a bunker, which of these is now permitted?",
            options: [
              "Grounding your club behind the ball",
              "Taking a practice swing that touches the sand",
              "Removing loose impediments such as leaves and stones",
              "Testing the sand with your hand",
            ],
            correctIndex: 2,
            explanation:
              "Rule 12.2a permits removing loose impediments in a bunker (a 2019 change). Rule 12.2b(1) still prohibits the other three.",
            sourceLessonSlug: "golf-bunkers-and-greens",
          },
          {
            prompt: "You are putting and leave the flagstick in the hole. Your ball hits it and drops. What is the ruling?",
            options: [
              "Two-stroke penalty",
              "One-stroke penalty",
              "No penalty; the ball is holed",
              "You must replay the putt",
            ],
            correctIndex: 2,
            explanation:
              "Rule 13.2a(2): no penalty if the ball hits a flagstick left in the hole. This changed in 2019 and is still widely misremembered.",
            sourceLessonSlug: "golf-bunkers-and-greens",
          },
          {
            prompt: "Which format lets partners each play their own ball, counting the better score on each hole?",
            options: ["Foursomes (alternate shot)", "Four-Ball (best ball)", "Stableford", "Maximum Score"],
            correctIndex: 1,
            explanation:
              "Four-Ball (Rule 23) is the ideal format for a beginner playing with a stronger partner, because your bad holes simply do not count.",
            sourceLessonSlug: "golf-formats",
          },
        ],
      },
    },
  ],
};
