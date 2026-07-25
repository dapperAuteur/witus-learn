// Authored "Golf: Play It, Know It, Work In It" - a complete golf course for Learn.WitUS,
// built from BAM's brief (plans/future-courses/sports-courses/golf.md): "how to play golf,
// strategy, history, rules, leagues, opportunities for amateurs, entrepreneurs". All six are
// covered, and the last one (opportunities) is the largest section, because it is the angle a
// generic golf course skips and the one this platform exists for.
//
// FACT-CHECK PASS. Every rule number, tour fact, handicap figure, amateur-status rule, date, and
// dollar amount in this course was verified against a primary source in a dedicated verification
// pass run separately from the writing. What was checked, and — just as important — what is
// deliberately NOT asserted because it could not be verified:
//
//   * RULES OF GOLF. Verified against The R&A's published rule pages (randa.org/en/rog/...), which
//     carry the single joint code the USGA and The R&A write together. Edition in force: the 2023
//     Rules of Golf, effective 1 January 2023 (the previous full rewrite was 2019). The date of the
//     NEXT edition is not asserted anywhere in this course; no primary source confirmed one.
//     Three corrections were made to first drafts during the check:
//       - the accidental double-hit penalty was removed in the 2019 rewrite, NOT in 2023;
//       - the current term is "temporary water", not the legacy "casual water";
//       - the three-minute search limit lives in Rule 18.2a(1), not in Rule 7 (which governs how to
//         search, not for how long).
//     The "drop it near where you lost it for two strokes" relief is Model Local Rule E-5, a LOCAL
//     rule a Committee must adopt, not a Rule of Golf, and it is expressly not for elite play. The
//     course says so, because students who watch tour golf will otherwise be confused.
//
//   * AMATEUR STATUS. The Rules of Amateur Status were substantially liberalized effective
//     1 January 2022, and this is the single most commonly out-of-date thing written about golf, so
//     it is taught from the current rules only. There are FIVE ways to lose amateur status, not the
//     three that most write-ups list. Prize money is capped at US$1,000 and only in SCRATCH
//     competitions (in a handicap competition an amateur may not accept prize money at all).
//     Sponsorship, endorsement, NIL, expenses, and free equipment are ALL now allowed. Paid
//     instruction is the one thing the 2022 rewrite did not liberalize.
//
//   * THE PROFESSIONAL GAME IS TAUGHT AS OF 2026, WHICH MATTERS. Nearly everything written about
//     LIV Golf before 2026 is now wrong: LIV events are 72 holes from the 2026 season (the "54"
//     branding is retired), LIV WAS accredited by the OWGR on 3 February 2026, and PIF has said it
//     will fund LIV only through the end of the 2026 season. The June 2023 PGA TOUR / DP World /
//     PIF framework agreement was never consummated — men's professional golf is NOT reunified, and
//     this course does not teach a merger as fact.
//
//   * HISTORY OF EXCLUSION. Taught factually and cited, not airbrushed, and it is the longest
//     section in the course. The centerpiece is a primary-source lesson: students read the January
//     1962 issue of the trade magazine *Golfdom* reporting the repeal of the PGA's Caucasian-only
//     clause, and discover that the industry's own account of the repeal never mentions Charlie
//     Sifford, Bill Spiller, or the California Attorney General who forced it.
//     Claims deliberately left out, or attributed rather than asserted:
//       - The famous long version of the Hall Thompson / Shoal Creek quote could not be traced to
//         any 1990 primary text. The course anchors on the contemporaneous AP wording and
//         attributes the longer version to later reporting.
//       - John Shippen's "first American-born golf professional" title is written the way the USGA
//         itself writes it: as what Shippen told an interviewer he BELIEVED about himself.
//       - The United Golfers Association's founding year is genuinely disputed (1925/1926/1928), so
//         no single year is stated.
//       - No standalone "percentage of golfers who are Black" is printed, because the National Golf
//         Foundation does not publish one. The course names that absence as itself a finding.
//       - Tiger Woods is NOT called the first Asian American Masters champion (an unsupported claim
//         that conflicts with how golf's own institutions describe Hideki Matsuyama's 2021 win).
//         The verified fact — the PGA of America's "first African-American to win the Masters" — is
//         taught alongside Woods's own 1997 refusal of any single racial label.
//       - "Charleston sold its course rather than integrate" and "Montgomery closed a golf course"
//         are both widely repeated and both unsupported. Neither appears here.
//       - Widely published claims that the Greensboro Six "lost 5-4 at the Supreme Court" are wrong
//         (Wolfe v. North Carolina, 1960, dismissed the appeal without reaching the merits), and the
//         course teaches the correct disposition.
//
//   * AMATEUR STATUS IS THE PRODUCT. The single most valuable, most current, least-known fact in
//     this course is that the 2022 rewrite legalized sponsorship, endorsement, NIL, expenses, and
//     free equipment for amateurs — so a high school golfer can sign a sponsorship deal today and
//     still play college golf. Almost nobody is acting on it, because almost everybody (coaches and
//     parents included) still believes the pre-2022 rules. Paid instruction is the one thing that is
//     STILL restricted, and non-cash payment counts as payment; that trap gets its own warning.
//
//   * THE OTHER OPEN DOOR. The U.S. Open is genuinely open: any professional, or any amateur with a
//     Handicap Index of 0.4 or better, may enter — and the USGA accepted a record 10,202 entries for
//     the 2025 U.S. Open. A whole lesson is built on that number, deliberately placed after the
//     history section, because the history section is about doors being held shut and this is the
//     one that structurally is not. (The U.S. Women's Amateur handicap limit is NOT printed anywhere
//     in this course: a figure is widely repeated online but could not be verified against the USGA's
//     own conditions of entry, so the course tells students to go and read the conditions instead.)
//
// Cited APA 7 in-line with a `## Sources` bibliography per lesson (the BVC citation rule). No
// fabricated people, quotes, or statistics. SIX SECTIONS — How to Play · The Rules · Strategy ·
// History · Tours & Leagues · Opportunities — each ending in a quiz whose bank is 15 questions deep,
// so the serving layer's 10-question cap actually rotates a different subset each attempt (a bank of
// 10 or fewer would rotate nothing). 42 lessons: 6 quizzes, 3 fill-in exercises, 33 text lessons.
// Every quiz question sets `sourceLessonSlug`. Self-checks are single-line `:::reveal` (answer hidden
// until clicked), never printed in prose under the question. Audience: high school students.

import type { AuthoredCourse } from "./authored-course";

export const GOLF_COURSE: AuthoredCourse = {
  title: "Golf: Play It, Know It, Work In It",
  description:
    "A complete, cited introduction to golf for people who have never held a club, and a real look at the sport as an industry. Learn how to play (the course, the clubs, the swing, the short game), the Rules of Golf as they actually read today (cited to the 2023 code the USGA and The R&A write together), how to think your way around a course, the World Handicap System, golf's history including its documented record of racial and gender exclusion (read the trade magazine that reported the repeal of the PGA's Caucasian-only clause and never once mentioned the men who forced it), how the tours and leagues actually work in 2026 (the PGA TOUR and the PGA of America are not the same organization, and men's professional golf is still not reunified), and the part most golf courses skip: the genuine, checkable opportunities in this sport for amateurs and entrepreneurs, from the 2022 rule change that lets a high school golfer sign a sponsorship deal without losing amateur status, to the fact that anyone with a Handicap Index of 0.4 or better can enter the U.S. Open.",
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

**What you actually need to start:** shoes you can walk five miles in, a glove for your lead hand (optional but nice), a few tees, and clubs. That is it. Borrowed or secondhand clubs are completely fine, and the **Opportunities** section covers how to get equipment for close to nothing.

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

**Get a lesson.** Not ten. One. A single hour with a qualified teaching professional at the start will save you years of grooving a mistake. Many facilities offer free or cheap group clinics, and the **Opportunities** section covers how to find them.

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

**Which edition is in force.** The Rules were substantially **rewritten for 2019**, the biggest modernization in generations. The current edition is the **2023 Rules of Golf, effective 1 January 2023** (R&A, n.d.). Between editions the two bodies issue clarifications, which explain the rules but do not renumber them. The Rules are revised periodically, so **check the date on any rulebook you are handed**, and check the date on any golf advice you read online. That habit is most of what separates a player who knows the rules from a player who knows the rules *of 2015*.

**This is why you should be suspicious of golf advice.** The 2019 rewrite changed several of the rules people "know," and a lot of what gets repeated on a golf course is simply the old rulebook, confidently recited. Three examples you will meet in this section:

| What people still say | What the Rules actually say now |
| --- | --- |
| "Take the flagstick out or you'll be penalized" | You may **leave it in**, and there is **no penalty** if your ball hits it (Rule 13.2a) |
| "You can't touch a loose impediment in a bunker" | You **may remove loose impediments** in a bunker (Rule 12.2a) |
| "You can't fix a spike mark on your line" | You **may repair** it (Rule 13.1c(2)) |

All three changed in **2019**. All three are still argued about on golf courses every weekend.

**How rules are cited.** The format is \`Rule 4.1b(1)\`: rule number, then a letter, then a parenthesized numeral. When you want to settle an argument, that citation is how you find the exact text in seconds.

**How the Rules expect you to behave.** Rule 1.2a says all players are expected to play "in the spirit of the game" by "acting with integrity, for example, by following the Rules, applying all penalties, and being honest in all aspects of play" (R&A, 2023). Golf is the only major sport where **players routinely call penalties on themselves that no official saw**. That norm is the sport's best feature, and it is worth protecting.

:::reveal Which two organizations write the Rules of Golf, which parts of the world does each govern, and which edition is currently in force? ||| The USGA (governing the United States and Mexico) and The R&A (governing the rest of the world) write one shared code together. The edition in force is the 2023 Rules of Golf, effective 1 January 2023, following the major 2019 rewrite.

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
              "The PGA Tour, on behalf of all the pros",
              "The USGA and The R&A jointly, as one code",
              "Each country writes its own set of rules",
              "The PGA of America and its member pros",
            ],
            correctIndex: 1,
            explanation:
              "The USGA governs the US and Mexico, The R&A governs the rest of the world, and they write a single shared rulebook.",
            sourceLessonSlug: "golf-who-writes-the-rules",
          },
          {
            prompt: "Which edition of the Rules of Golf is currently in force?",
            options: [
              "The 2016 Rules, effective 1 January 2016",
              "The 2019 Rules, effective 1 January 2019",
              "The 2023 Rules, effective 1 January 2023",
              "Each professional tour writes its own set",
            ],
            correctIndex: 2,
            explanation:
              "The major rewrite was 2019; the current edition took effect 1 January 2023. Because the Rules are revised periodically, always check the date on golf advice you read online.",
            sourceLessonSlug: "golf-who-writes-the-rules",
          },
          {
            prompt: "What is the foundational rule expressed in Rule 9.1?",
            options: [
              "You may always improve your lie by hand",
              "A ball at rest must be played as it lies",
              "You must always take the flagstick out first",
              "You get a full five minutes to search for it",
            ],
            correctIndex: 1,
            explanation:
              "Everything else in the rulebook is essentially a list of the exceptions to this sentence.",
            sourceLessonSlug: "golf-play-it-as-it-lies",
          },
          {
            prompt: "What does the term \"general penalty\" mean?",
            options: [
              "One penalty stroke in every format of play",
              "Immediate disqualification from the event",
              "Two strokes in stroke play, or loss of hole",
              "A warning only on your very first breach",
            ],
            correctIndex: 2,
            explanation: "The Rules use this phrase constantly, so it is worth learning once.",
            sourceLessonSlug: "golf-play-it-as-it-lies",
          },
          {
            prompt: "Your club accidentally strikes the ball twice during one stroke. What happens?",
            options: [
              "One penalty stroke added to your score",
              "Two penalty strokes, the general penalty",
              "It counts as one stroke with no penalty",
              "You must replay the shot from the same spot",
            ],
            correctIndex: 2,
            explanation:
              "Rule 10.1a: there has been only one stroke and there is no penalty. This changed in the 2019 rewrite, not 2023.",
            sourceLessonSlug: "golf-play-it-as-it-lies",
          },
          {
            prompt: "How long may you search for your ball before it is lost?",
            options: ["One minute of active search", "Three minutes of active search", "Five minutes of active search", "As long as you like out there"],
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
              "Nothing at all; you just hit it",
              "Announce that it is a provisional ball",
              "Ask your playing opponent's permission",
              "Wait the full three minutes first",
            ],
            correctIndex: 1,
            explanation:
              "Rule 18.3 requires you to announce it. If you do not, the second ball simply becomes your ball in play under stroke and distance.",
            sourceLessonSlug: "golf-lost-ball-ob-provisional",
          },
          {
            prompt: "The 'drop it near where you lost it for two strokes' option is:",
            options: [
              "Rule 18.4, a full Rule of Golf that always applies",
              "Model Local Rule E-5, if the Committee adopts it",
              "Illegal everywhere under the current Rules of Golf",
              "Only available on par 3s, never on par 4s or 5s",
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
            options: ["In a greenside bunker", "In the thick rough", "In a marked penalty area", "On the putting green"],
            correctIndex: 2,
            explanation:
              "Rule 19.1 allows unplayable relief anywhere on the course EXCEPT a penalty area, which has its own relief rules under Rule 17.",
            sourceLessonSlug: "golf-penalty-areas-and-unplayable",
          },
          {
            prompt: "Your ball is buried under a steep bunker lip. What does Rule 19.3b let you do?",
            options: [
              "Take free relief just outside the bunker",
              "Take back-on-line relief outside for two strokes",
              "Move the ball to the fairway for one stroke",
              "Nothing; you must play it as it lies there",
            ],
            correctIndex: 1,
            explanation:
              "The one-stroke unplayable options keep the ball in the bunker (19.3a). The two-stroke option (19.3b) is the escape hatch out of it.",
            sourceLessonSlug: "golf-penalty-areas-and-unplayable",
          },
          {
            prompt: "In a bunker, which of these is now permitted?",
            options: [
              "Grounding your club in the sand behind the ball",
              "Taking a practice swing that touches the sand",
              "Removing loose impediments like leaves and stones",
              "Testing the sand's texture with your bare hand",
            ],
            correctIndex: 2,
            explanation:
              "Rule 12.2a permits removing loose impediments in a bunker (a 2019 change). Rule 12.2b(1) still prohibits the other three.",
            sourceLessonSlug: "golf-bunkers-and-greens",
          },
          {
            prompt: "You are putting and leave the flagstick in the hole. Your ball hits it and drops. What is the ruling?",
            options: [
              "A two-stroke penalty applies",
              "A one-stroke penalty applies",
              "No penalty; the ball is holed",
              "You must replay the putt again",
            ],
            correctIndex: 2,
            explanation:
              "Rule 13.2a(2): no penalty if the ball hits a flagstick left in the hole. This changed in 2019 and is still widely misremembered.",
            sourceLessonSlug: "golf-bunkers-and-greens",
          },
          {
            prompt: "Which format lets partners each play their own ball, counting the better score on each hole?",
            options: ["Foursomes (alternate shot)", "Four-Ball (best ball)", "Stableford (points scoring)", "Maximum Score (capped hole)"],
            correctIndex: 1,
            explanation:
              "Four-Ball (Rule 23) is the ideal format for a beginner playing with a stronger partner, because your bad holes simply do not count.",
            sourceLessonSlug: "golf-formats",
          },
        ],
      },
    },

    // ── Section 3: Strategy ───────────────────────────────────────────────
    {
      slug: "golf-course-management",
      title: "16 · Course management: the free strokes",
      section: "Strategy",
      recallContent: [
        {
          prompt: "Which format makes a disaster hole simply score zero and let you move on?",
          answer: "Stableford (Rule 21.1), which awards points per hole rather than counting every stroke.",
        },
        {
          prompt: "What is the general penalty?",
          answer: "Two strokes in stroke play, or loss of the hole in match play.",
        },
      ],
      body: `Here is the least fair thing about golf: **you can lower your score without improving your swing at all.** Strategy is free. It costs nothing, it requires no talent, and almost nobody does it.

Course management means choosing the shot that gives you the best *average* outcome, rather than the shot that gives you the best *possible* outcome. Those are different, and the gap between them is where amateurs bleed strokes.

**Rule 1: play to your miss.** Every golfer has a shot shape they hit when things go wrong. If your bad shot curves right, then **aim down the left side and let the course be wide**. You do not have to fix your slice to score better with it. You have to stop pretending you do not have it. Aiming down the middle with a ball that curves right means half the fairway is unusable to you and you chose to ignore that.

**Rule 2: aim at the fat part of the green, not the flag.** A flag tucked four paces from a bunker is bait. The middle of the green is almost always the correct target, because the middle is surrounded on all sides by more green. Professionals aim at the middle far more often than television makes it look. **You are not being timid. You are being paid in pars.**

**Rule 3: take enough club.** Amateurs come up short of the green far more often than they fly it. Your "I hit my 7-iron 150" number is almost always your *best-ever* 7-iron, not your average one. Club up. The trouble on a golf hole is usually in front of the green, and being past the flag on the correct level is rarely punished.

**Rule 4: the tee shot's job is to be findable.** A drive 220 yards in the fairway beats a drive 260 yards in the trees every single time, because the ball in the trees is often not a golf shot at all, it is a chip sideways. If a hole scares you, **hit a hybrid or an iron off the tee.** There is no rule requiring you to hit a driver, and nobody is checking.

**Rule 5: when you are in trouble, get out. First try.** The single most expensive belief in amateur golf is that a miracle shot through a two-foot gap in the branches is a reasonable idea. It works maybe one time in ten. The other nine times it stays in the trees and you are still there, one stroke worse. **Take the wedge. Punch it back to the fairway. Play your next shot from the grass like a golfer.**

**The math nobody tells beginners.** Suppose you are 180 yards out, behind a tree, with water in front of the green. The hero shot works 10% of the time for a 4, and the other 90% of the time it makes 7. Average: about 6.7. The boring chip-out makes a near-certain 5 or 6. Average: about 5.5. **The boring shot wins by more than a stroke, every time you face it, forever.** Golf rewards the player who is willing to be bored.

:::reveal Why is aiming at the middle of the green usually better than aiming at the flag? ||| Because the middle of the green is surrounded on every side by more green, so your misses still finish on the putting surface. A tucked flag near a bunker punishes a small miss severely. Aiming at the fat part is not timid, it is how you collect pars.

## Sources
- R&A. (2023). *Rule 1: The game, player conduct and the Rules*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-1
- USGA. (n.d.). *Handicapping*. https://www.usga.org/handicapping.html`,
    },
    {
      slug: "golf-reading-the-shot",
      title: "17 · Reading the shot: lie, wind, slope, distance",
      section: "Strategy",
      recallContent: [
        {
          prompt: "What does \"play to your miss\" mean?",
          answer:
            "Aim so that your habitual bad shot still finishes in a playable place. If your ball curves right, aim down the left side. You do not have to fix the miss to score better with it.",
        },
        {
          prompt: "You are behind a tree with a 10% chance of pulling off a hero shot. What should you do?",
          answer:
            "Chip out sideways to the fairway. The boring shot averages more than a full stroke better, because the hero shot fails nine times out of ten and leaves you still in trouble.",
        },
      ],
      body: `Before you pick a club, you have four questions to answer. Good players run this checklist so fast it looks like instinct. It is not instinct. It is a checklist.

**1. What is the lie?** The lie decides what is *possible*, so it comes first.

| Lie | What it does to the shot |
| --- | --- |
| **Fairway** | Ball sits up. You can do anything. |
| **Light rough** | Grass gets between clubface and ball, killing backspin. The ball comes out **hot and runs**. This is a "flier", it goes *further* than normal, which is why it surprises people. |
| **Deep rough** | The grass grabs the hosel and shuts the face. **Get out. That is the whole plan.** Take a lofted club and accept the yardage you lose. |
| **Bare dirt / hardpan** | No cushion. Ball-first contact is essential; do not try to scoop. |
| **Uphill lie** | Ball goes **higher and shorter**. Take more club. |
| **Downhill lie** | Ball goes **lower and further**, and it is the hardest lie in golf to make solid contact from. |

**2. What is the wind doing?** Not what it is doing on your face on the tee, which is often sheltered. Look at the **tops of the trees** and the flag on the green.

- **Into the wind:** the wind exaggerates every bit of spin and curve you put on the ball. A little slice becomes a big one. The rule is **"when it's breezy, swing easy"**, a softer swing spins less and holds its line. Take two extra clubs and swing at 80%.
- **Downwind:** the ball flies further but lands hot and does not stop. Downwind on a green is harder than it sounds.
- **Crosswind:** you can either fight it or ride it. Riding it (aiming into the wind and letting it bring the ball back) is easier.

**3. What is the slope?** On the green, the ball always breaks **away from the high ground and toward the low ground**. Read your putt from behind the ball, and then from the low side. Water runs downhill; so does your ball. If you can see where water would drain off this green, you can read the putt.

**4. How far is it, really?** Distance to the **flag** is not the number you want. The number you want is distance to a **safe part of the green**. If the flag is at the back and there is a bunker at the front, the correct number is the one that carries the bunker and lands in the middle.

**Yardage markers** are usually to the *middle* of the green, not the flag. Most courses mark 150 yards with a post or a plate. Know that before you trust a sprinkler head.

**A note on rangefinders and phone apps.** A **distance-measuring device is allowed** by default under the Rules, though a Committee may adopt a Local Rule prohibiting them (Rule 4.3a(1); R&A, 2023). What is *not* allowed is using a device to measure **elevation change or wind**, or to give you club recommendations, that is where a legal device becomes an illegal one. Read the setting on your app before a competition, because the same app is legal in one mode and not in another.

:::reveal Why does a ball out of light rough often fly FURTHER than one from the fairway, and what is the rule of thumb for playing into the wind? ||| Grass gets between the clubface and the ball and kills the backspin, so the ball comes out hot and runs. That is a "flier." Into the wind, "when it's breezy, swing easy", a softer swing puts less spin on the ball, so the wind exaggerates the curve less. Take more club and swing at about 80%.

## Sources
- R&A. (2023). *Rule 4: The player's equipment*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-4
- R&A. (2023). *Rule 13: Putting greens*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-13`,
    },
    {
      slug: "golf-avoiding-the-big-number",
      title: "18 · Avoiding the big number",
      section: "Strategy",
      recallContent: [
        {
          prompt: "Which lie is the hardest to make solid contact from, and what does it do to ball flight?",
          answer:
            "A downhill lie. The ball comes out lower and travels further, and solid contact is harder than from any other common lie.",
        },
        {
          prompt: "Is a rangefinder legal, and what makes it illegal?",
          answer:
            "It is allowed by default (Rule 4.3a(1)), unless a Committee prohibits it by Local Rule. It becomes illegal if you use it to measure elevation change or wind, or to get club recommendations.",
        },
      ],
      body: `**Your score is not ruined by the holes you play badly. It is ruined by the holes you play catastrophically.**

Look at a beginner's scorecard. It is usually a run of 5s, 6s and 7s, which is fine, that is bogey-ish golf, punctuated by a 9 and an 11. Those two holes cost more than the other sixteen combined. **Strategy for a new golfer is mostly the art of not making a 9.**

**Where big numbers come from.** Almost all of them come from exactly four places:

1. **A ball out of bounds** (white stakes). Stroke and distance. This is the killer, one wild drive can be a 7 before you have made any other error.
2. **Repeated attempts to escape trouble.** Three swings in the same bush.
3. **Trying to carry water that you cannot actually carry.**
4. **Short-siding yourself**, missing the green on the *same* side as the flag, leaving you no green to work with. Your chip has to be perfect. It usually is not.

**The five habits that eliminate the big number:**

- **Hit a provisional.** Every time you think it might be gone. It costs 30 seconds and saves a walk of shame and, often, two strokes of confusion (Rule 18.3; R&A, 2023).
- **Take the unplayable.** One stroke, chosen by you, beats three swings in a bush (Rule 19; R&A, 2023).
- **Never short-side yourself.** If the flag is on the right edge, **miss left.** Aim to miss on the side that leaves you plenty of green to land on. This single idea will save you more strokes than any swing change.
- **Lay up to a number you like.** If you cannot reach the green, do not just hit it as far as possible and take whatever is left. Hit it to a distance you can actually hit a full wedge from. **A 100-yard shot you have practiced beats a 43-yard shot you have not.**
- **Play the hole backwards.** Stand on the tee and ask: where do I want to hit my approach *from*? Then work back and pick a tee shot that puts you there. That is how good players think, and it costs nothing to copy.

**"Bogey golf is excellent golf."** If you shoot bogey on every hole of a par-72 course, you shoot 90. That puts you comfortably better than most people who play this game. **Aim for bogey and pars will happen by accident.** Aiming for par on every hole and going for every flag is how you make 9s.

**The scoring ladder, set a realistic target:**

| Milestone | What it means |
| --- | --- |
| **Break 120** | You are playing golf and finishing rounds. |
| **Break 100** | You have eliminated most of the disasters. This is the big one. |
| **Break 90** | Bogey golf. Better than most golfers alive. |
| **Break 80** | Serious player. |
| **Par or better** | Scratch. A tiny fraction of golfers. |

Breaking 100 is not a swing achievement. It is a **decision-making achievement**. Nearly everyone who breaks 100 for the first time does it by making fewer stupid choices, not by hitting the ball better.

:::reveal What does it mean to "short-side" yourself, and what is the simple rule that prevents it? ||| Short-siding means missing the green on the same side the flag is on, so you have almost no green between your ball and the hole and your chip must be perfect. The rule: miss AWAY from the flag. If the flag is on the right edge, aim so that your miss goes left, where you have the whole green to work with.

## Sources
- R&A. (2023). *Rule 18: Stroke-and-distance relief; ball lost or out of bounds; provisional ball*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-18
- R&A. (2023). *Rule 19: Unplayable ball*. The Rules of Golf. https://www.randa.org/en/rog/the-rules-of-golf/rule-19`,
    },
    {
      slug: "golf-handicap-system",
      title: "19 · The World Handicap System",
      section: "Strategy",
      recallContent: [
        {
          prompt: "What are the four main sources of a big number on a hole?",
          answer:
            "A ball out of bounds (stroke and distance), repeated attempts to escape trouble, trying to carry water you cannot carry, and short-siding yourself.",
        },
        {
          prompt: "What score is \"bogey golf\" on a par-72 course, and why is it a good target?",
          answer:
            "90. Aiming for bogey rather than par keeps you from making the aggressive choices that produce 9s, and pars start happening by accident.",
        },
      ],
      body: `Golf's handicap system is the reason a 15-year-old beginner can play a real, competitive match against a 50-year-old club champion and **either one of them might genuinely win.** No other major sport has anything like it. It is golf's best idea.

**One system for the whole world.** Before 2020 there were six different regional handicap systems that did not agree with each other. The **World Handicap System (WHS)** launched in **January 2020**, unifying them into one, and it is governed jointly by the **USGA and The R&A**, the same two bodies that write the Rules (USGA, n.d.; R&A, n.d.). Your handicap now means the same thing in Ohio, Osaka, and Aberdeen.

**Your Handicap Index is a measure of your demonstrated ability.** Two facts define it:

- It is calculated as **the average of the lowest 8 Score Differentials out of your most recent 20** (USGA, n.d.).
- The **maximum Handicap Index is 54.0**, for any player (USGA, n.d.).

Read that first bullet again, because it contains the most misunderstood idea in golf. **Your handicap is not your average score.** It is built from your **best 8 of the last 20** rounds. It represents your *potential*, what you do when things go reasonably well. This is exactly why **you should expect to play worse than your handicap most of the time.** Playing to your handicap is a good day, not an average one. New golfers routinely conclude they are getting worse when in fact their handicap is simply doing precisely what it was designed to do.

That 54.0 ceiling matters too: it is deliberately generous, so that a genuine beginner can hold a real, official handicap and compete on day one rather than waiting years to qualify.

**Getting your first one: 54 holes.** You need to submit scores from **54 holes** to receive an initial Handicap Index (USGA, n.d.). Those 54 holes can be any combination of 18-hole and 9-hole rounds, three 18s, six 9s, or a mix. That is a low bar on purpose.

**Handicap Index vs Course Handicap, the distinction people get wrong.**

| | What it is |
| --- | --- |
| **Handicap Index** | Your portable number. Travels with you. Means the same everywhere. |
| **Course Handicap** | The number of strokes you actually get **at this course, from these tees, today.** |

Your Course Handicap is calculated from your Index using that specific set of tees, because a hard course from the back tees should give you more strokes than an easy one from the forward tees. It relies on two published ratings for every tee:

- **Course Rating**, what a **scratch** golfer is expected to shoot from those tees.
- **Slope Rating**, how much **harder** the course plays for a bogey golfer than for a scratch golfer. A high Slope means the course punishes weaker players disproportionately (forced carries, dense trouble). It is *not* a measure of raw difficulty; it is a measure of how *unfairly* the difficulty falls on the weaker player.

**Net score.** Gross score minus your Course Handicap. If you shoot 95 and your Course Handicap is 20, your net score is 75. That is the number a handicap competition uses, and it is how the beginner and the club champion end up in the same event with a straight face.

**Keeping it honest.** The system only works if scores go in. **You post every acceptable round, not the good ones.** A player who posts only their bad rounds to inflate their handicap and win prizes is called a sandbagger, and it is regarded as a form of cheating, because that is exactly what it is.

**The current edition.** The Rules of Handicapping are revised periodically; the current edition is the **2024 revision**. As with the Rules of Golf, **check the date on any handicap advice you read.**

:::reveal Is your Handicap Index your average score, and how many holes do you need to get your first one? ||| No, and this is the most misunderstood idea in golf. Your Handicap Index is the average of the LOWEST 8 Score Differentials from your most recent 20, so it measures your potential, not your average. You should therefore expect to play worse than your handicap most of the time. You need 54 holes to receive an initial Index, and the maximum Index is 54.0.

## Sources
- USGA. (n.d.). *Handicapping*. https://www.usga.org/handicapping.html
- R&A. (n.d.). *World Handicap System*. https://www.randa.org/en/whs`,
    },
    {
      slug: "golf-strategy-drill",
      title: "20 · Practice: think your way around a hole",
      section: "Strategy",
      recallContent: [
        {
          prompt: "What is the maximum Handicap Index, and how is the Index calculated?",
          answer:
            "The maximum is 54.0. The Index is the average of the lowest 8 Score Differentials out of your most recent 20 rounds.",
        },
        {
          prompt: "What is the difference between a Handicap Index and a Course Handicap?",
          answer:
            "The Handicap Index is your portable number that means the same thing everywhere. The Course Handicap is how many strokes you actually receive at a specific course, from a specific set of tees.",
        },
      ],
      body: `Strategy is a set of habits, and habits are built by repetition. Fill in each blank from what you have learned. These are the decisions that lower a score without touching your swing.`,
      exercise: {
        instructions:
          "Fill in each blank. Every one of these is a decision you will face on a golf course, and every one of them is free to get right.",
        items: [
          {
            prompt: "Instead of aiming at a tucked flag, aim at the ___ part of the green.",
            answer: "fat",
            accept: ["middle", "centre", "center", "fattest"],
            explanation:
              "The middle of the green is surrounded on all sides by more green, so your misses still finish on the putting surface.",
          },
          {
            prompt: "Missing the green on the SAME side as the flag, leaving yourself no green to work with, is called ___-siding yourself.",
            answer: "short",
            explanation: "Miss AWAY from the flag. This one idea saves more strokes than any swing change.",
          },
          {
            prompt: "A ball from light rough comes out with less spin, so it runs and flies further than expected. This shot is called a ___.",
            answer: "flier",
            accept: ["flyer"],
            explanation: "Grass gets between the clubface and the ball and kills the backspin.",
          },
          {
            prompt: "Into the wind, the saying is: when it's breezy, swing ___.",
            answer: "easy",
            explanation: "A softer swing puts less spin on the ball, so the wind exaggerates your curve less. Take more club.",
          },
          {
            prompt: "Your Handicap Index is the average of your lowest ___ Score Differentials out of the most recent 20.",
            answer: "8",
            accept: ["eight"],
            explanation:
              "This is why your handicap is your potential, not your average, and why you will play worse than it most of the time.",
          },
          {
            prompt: "The maximum Handicap Index any player may hold is ___.",
            answer: "54.0",
            accept: ["54", "54.0"],
            explanation: "Deliberately generous, so a genuine beginner can hold a real handicap and compete immediately.",
          },
          {
            prompt: "You must submit scores from ___ holes to receive your first Handicap Index.",
            answer: "54",
            accept: ["fifty-four", "54 holes"],
            explanation: "Any mix of 18s and 9s. A low bar, on purpose.",
          },
          {
            prompt: "Gross score minus Course Handicap gives you your ___ score.",
            answer: "net",
            explanation: "The number a handicap competition actually uses. It is how a beginner and a club champion compete fairly.",
          },
          {
            prompt: "If you shoot bogey on every hole of a par-72 course, you shoot ___.",
            answer: "90",
            accept: ["ninety"],
            explanation: "Bogey golf is better than most people who play this game. Aim for bogey and pars happen by accident.",
          },
          {
            prompt: "A player who posts only bad rounds to inflate their handicap and win prizes is called a ___.",
            answer: "sandbagger",
            accept: ["sand bagger", "sandbagger"],
            explanation: "It is regarded as a form of cheating, because that is what it is. Post every acceptable round.",
          },
        ],
      },
    },
    {
      slug: "golf-strategy-quiz",
      title: "21 · Check your understanding: strategy",
      section: "Strategy",
      quiz: {
        passingScore: 70,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does \"play to your miss\" mean?",
            options: [
              "Practice on the range until you no longer have a miss",
              "Aim so your habitual bad shot still finishes playable",
              "Always aim directly at the flag, whatever the risk",
              "Only play holes that already suit your ball flight",
            ],
            correctIndex: 1,
            explanation:
              "If your ball curves right, aim down the left side. You do not have to fix the miss to score better with it; you have to stop pretending you do not have it.",
            sourceLessonSlug: "golf-course-management",
          },
          {
            prompt: "Why is the middle of the green usually the correct target?",
            options: [
              "Greens are nearly always flattest in the middle part",
              "It is ringed by more green, so misses stay on it",
              "Because the Rules of Golf explicitly require this",
              "It is not; you should always attack the flag itself",
            ],
            correctIndex: 1,
            explanation:
              "A flag tucked near a bunker is bait. Aiming at the fat part is not timid, it is how you collect pars.",
            sourceLessonSlug: "golf-course-management",
          },
          {
            prompt: "You are behind a tree. The hero shot works about 10% of the time. What does the math say?",
            options: [
              "Take the hero shot; its big upside is clearly worth it",
              "Chip out sideways, averaging a full stroke better",
              "Declare the ball unplayable and go back to the tee",
              "The two options work out mathematically equivalent",
            ],
            correctIndex: 1,
            explanation:
              "The hero shot fails nine times in ten and leaves you still in trouble, one stroke worse. Golf rewards the player willing to be bored.",
            sourceLessonSlug: "golf-course-management",
          },
          {
            prompt: "Amateurs most often miss greens by:",
            options: [
              "Flying the green long",
              "Coming up short of it",
              "Missing exactly pin high",
              "Hitting it out of bounds",
            ],
            correctIndex: 1,
            explanation:
              "Your '150-yard 7-iron' is usually your best-ever 7-iron, not your average one. Club up; the trouble is usually in front.",
            sourceLessonSlug: "golf-course-management",
          },
          {
            prompt: "Why does a ball from light rough often fly FURTHER than one from the fairway?",
            options: [
              "The tall grass physically springs the ball forward",
              "Grass kills backspin, so the ball comes out hot",
              "It does not; a rough lie always goes shorter",
              "The ball simply sits up closer to the hole",
            ],
            correctIndex: 1,
            explanation: "This is called a 'flier,' and it surprises people because they expect rough to cost distance.",
            sourceLessonSlug: "golf-reading-the-shot",
          },
          {
            prompt: "What is the rule of thumb for playing into the wind?",
            options: [
              "Swing much harder to punch the ball through it",
              "When breezy, swing easy: more club, about 80%",
              "Aim well right of the target to allow for drift",
              "Use your low-spinning driver from almost anywhere",
            ],
            correctIndex: 1,
            explanation:
              "Wind exaggerates spin. A softer swing spins less and holds its line, so take two extra clubs and swing easy.",
            sourceLessonSlug: "golf-reading-the-shot",
          },
          {
            prompt: "Under Rule 4.3a(1), a distance-measuring device is:",
            options: [
              "Always prohibited in every single form of play",
              "Allowed by default, unless a Local Rule bars it",
              "Allowed only in match play, never stroke play",
              "Allowed only for touring professionals in events",
            ],
            correctIndex: 1,
            explanation:
              "But using it to measure elevation change or wind, or to get club recommendations, makes it illegal. Check your app's setting before a competition.",
            sourceLessonSlug: "golf-reading-the-shot",
          },
          {
            prompt: "What does it mean to \"short-side\" yourself?",
            options: [
              "To lay up well short of the green on purpose",
              "To miss the green on the SAME side as the flag",
              "To use far too little club into the green",
              "To play the whole hole from the forward tees",
            ],
            correctIndex: 1,
            explanation:
              "Your chip then has to be perfect, and it usually is not. Miss AWAY from the flag; this idea saves more strokes than any swing change.",
            sourceLessonSlug: "golf-avoiding-the-big-number",
          },
          {
            prompt: "Breaking 100 for the first time is mostly:",
            options: [
              "Purely a ball-striking and swing achievement",
              "A decision-making win, from fewer disaster holes",
              "Mostly a matter of buying much better clubs",
              "Basically impossible without a paid swing coach",
            ],
            correctIndex: 1,
            explanation:
              "Scores are ruined by catastrophic holes, not merely bad ones. Eliminate the 9s and the 100 falls.",
            sourceLessonSlug: "golf-avoiding-the-big-number",
          },
          {
            prompt: "If you shoot bogey on every hole of a par-72 course, what do you shoot?",
            options: ["72", "82", "90", "108"],
            correctIndex: 2,
            explanation:
              "18 bogeys on a par 72 is 90, better than most people who play this game. Aim for bogey and pars happen by accident.",
            sourceLessonSlug: "golf-avoiding-the-big-number",
          },
          {
            prompt: "When did the World Handicap System launch?",
            options: ["January 2000", "January 2016", "January 2020", "January 2024"],
            correctIndex: 2,
            explanation:
              "It unified six different regional systems into one, governed jointly by the USGA and The R&A.",
            sourceLessonSlug: "golf-handicap-system",
          },
          {
            prompt: "How is your Handicap Index calculated?",
            options: [
              "A simple average of all the scores you post",
              "The average of your lowest 8 of the last 20",
              "Your single best round of golf ever posted",
              "Your most recent round, updated each time out",
            ],
            correctIndex: 1,
            explanation:
              "Because it uses your best 8 of 20, your handicap measures your POTENTIAL, not your average. You should expect to play worse than it most of the time.",
            sourceLessonSlug: "golf-handicap-system",
          },
          {
            prompt: "What is the maximum Handicap Index a player may hold?",
            options: ["18.0", "36.0", "54.0", "There is no maximum"],
            correctIndex: 2,
            explanation:
              "Deliberately generous, so a genuine beginner can hold a real, official handicap and compete from day one.",
            sourceLessonSlug: "golf-handicap-system",
          },
          {
            prompt: "How many holes must you submit to receive an initial Handicap Index?",
            options: ["18", "36", "54", "90"],
            correctIndex: 2,
            explanation: "54 holes, in any combination of 18-hole and 9-hole rounds. A low bar, on purpose.",
            sourceLessonSlug: "golf-handicap-system",
          },
          {
            prompt: "What does Slope Rating measure?",
            options: [
              "The literal physical steepness of the course terrain",
              "How much harder it plays for a bogey vs scratch golfer",
              "The exact score a scratch golfer is expected to shoot",
              "The simple average score of every player who plays it",
            ],
            correctIndex: 1,
            explanation:
              "Course Rating is what a scratch golfer is expected to shoot. Slope measures how unfairly the difficulty falls on the weaker player.",
            sourceLessonSlug: "golf-handicap-system",
          },
        ],
      },
    },

    // ── Section 4: History ────────────────────────────────────────────────
    {
      slug: "golf-origins",
      title: "22 · Origins: Scotland, and two things that did not happen",
      section: "History",
      recallContent: [
        {
          prompt: "What does Slope Rating measure?",
          answer:
            "How much harder a course plays for a bogey golfer than for a scratch golfer. Course Rating, by contrast, is what a scratch golfer is expected to shoot.",
        },
        {
          prompt: "Why should you expect to play worse than your handicap most of the time?",
          answer:
            "Because the Index averages your LOWEST 8 Score Differentials out of the most recent 20. It measures your potential, not your average.",
        },
      ],
      body: `Golf as we know it took shape in **Scotland**, and the first solid documentary evidence of it is wonderfully unflattering: **the government trying to ban it.**

**The 1457 Act.** An Act of the Scottish Parliament ordered that "the fut bal ande the golf" be "cryit doun", cried down, suppressed, so that men would go and practise **archery** instead, archery being useful for national defence and golf being, in Parliament's view, a waste of an afternoon (Records of the Parliaments of Scotland, 1457/1458). The Act is dated **6 March 1457** in the old style, which is why you will also see it dated **1458**; Scotland began its year in March at the time, so both dates refer to the same document.

Two things are worth noticing. First, **a law banning golf is proof that golf was already popular.** Nobody bans a thing nobody does. Second, you will see a tidy modernized English version of this Act quoted everywhere as if it were the manuscript. It is a translation. **Go and read the actual record**, linked in the Sources below, and notice how different a primary source looks from the quotation people pass around. That habit, checking the thing itself, is what this whole section is about.

**Now, two things that did NOT happen, both of which you will be told confidently.**

**Myth 1: "18 holes were standardized in 1764."** This is repeated constantly and it is wrong. What happened in 1764 is that **St Andrews shortened its own round from 22 holes to 18** by combining some short holes. That was a local decision about one course. **Eighteen holes became the norm only in the 1880s**, as St Andrews' prestige gradually made its number everybody's number (R&A, n.d.). The gap between those two dates is more than a century. A course having 18 holes is a fashion that hardened into a rule, not a rule that was declared.

**Myth 2: "The first Open Championship was an open championship."** The first **Open**, played at **Prestwick in 1860**, was contested by **eight professionals**, over **three rounds of a 12-hole course** (36 holes in one day), and there was **no prize money**, the winner, **Willie Park Snr**, received a belt (R&A, n.d.). And the entry was **by invitation**. The tournament called "The Open" was, in its first year, closed. It was opened to amateurs the following year, which is where the name actually comes from.

**The institutions, and a distinction that matters.**

| Body | Founded | What it is |
| --- | --- | --- |
| **The Royal & Ancient Golf Club of St Andrews** | 1754 | A **private golf club**. |
| **The R&A** | **2004** | The **governing body**, spun out of the club to run the rules and The Open. |
| **The USGA** | **22 December 1894** | Governs golf in the US and Mexico. **Five charter clubs**, one of which was the **Newport Golf Club** (USGA, n.d.). |

**The R&A and the R&A Golf Club are not the same organization**, and conflating them is the single most common error written about golf's governance. The club is from 1754. The governing body is from 2004. When this course says "The R&A," it means the governing body.

:::reveal Were 18 holes standardized in 1764, and was the first Open Championship actually open? ||| No, on both counts. In 1764 St Andrews shortened its OWN round from 22 holes to 18; eighteen holes only became the norm in the 1880s. And the first Open (Prestwick, 1860) was played by eight professionals by INVITATION, over three rounds of a 12-hole course, with no prize money. It was opened to amateurs the next year, which is where the name comes from.

## Sources
- Records of the Parliaments of Scotland. (1457/1458). *Legislation of the parliament of James II, 6 March 1457*. University of St Andrews. https://rps.ac.uk/trans/1458/3/7
- R&A. (n.d.). *The history of The Open*. https://www.theopen.com/about
- R&A. (n.d.). *About The R&A*. https://www.randa.org/en/about-us
- USGA. (n.d.). *Our history*. https://www.usga.org/about/our-history.html`,
    },
    {
      slug: "golf-equipment-revolutions",
      title: "23 · The ball changed everything",
      section: "History",
      recallContent: [
        {
          prompt: "What actually happened at St Andrews in 1764?",
          answer:
            "St Andrews shortened its own round from 22 holes to 18. It did not standardize anything, 18 holes became the norm only in the 1880s.",
        },
        {
          prompt: "Are the Royal & Ancient Golf Club and \"The R&A\" the same organization?",
          answer:
            "No. The club dates from 1754. The R&A, the governing body that runs the rules and The Open, was created in 2004.",
        },
      ],
      body: `If you want to understand why golf looks the way it does, follow the ball. **Almost every major change in the game was caused by someone inventing a better one**, and each time, the sport's establishment resisted it and then surrendered to it.

**The feathery.** Boiled feathers stuffed into a stitched leather pouch, made by hand. A skilled craftsman could make a handful in a day, so they were **brutally expensive**, a single ball could cost more than a club. They also went soggy in the rain and burst. The feathery made golf a rich man's game by simple arithmetic: **if you lose three balls in a round, you have to be able to afford to lose three balls.**

**The guttie (1848).** Made from **gutta-percha**, a rubbery latex from a Malaysian tree, which could be heated, moulded, and (crucially) **remoulded when it got knocked out of shape.** It was **dramatically cheaper** than the feathery, and it did more to open golf to ordinary people than any rule ever passed. Its inventor is genuinely **disputed**: the USGA credits **Robert Adams**, while a very widely repeated version of the story attaches a longer clerical name to him that the primary sources do not support (USGA, n.d.). This course names it as disputed rather than picking the popular answer.

Golfers soon noticed that a **scuffed, nicked** guttie flew better than a smooth new one. That observation, that surface roughness makes a ball fly *further*, is the direct ancestor of the **dimple**, and it was discovered by accident, by players who could not afford new balls.

**The Haskell (1898-1902): the one that actually changed the game.** Coburn Haskell's rubber-cored, thread-wound ball went **substantially further** than a guttie for the same swing. The details are more interesting than the legend:

- The patent (**US Patent 622,834**) was **filed 9 August 1898** and **granted 11 April 1899**.
- It names a **co-inventor: Bertram G. Work**, of the B.F. Goodrich company. **Popular accounts drop him entirely** and hand the invention to Haskell alone. Go and look at the patent. Both names are on it.
- Golfers mocked it at first. It won the argument in **1902**, when **Sandy Herd won The Open** using one, and the guttie was finished inside a season.

**Why this is a lesson and not trivia.** The Haskell forced golf's authorities into a fight they have been fighting ever since: **technology makes the ball go further, and courses that were built to be hard become easy.** Every argument you now hear about limiting the modern golf ball is the same argument, with the same shape, that people had in 1902. Golf's rule-makers have always been trying to catch a ball that keeps outrunning them.

**A footnote worth keeping: golf and the Olympics.** Golf was played at the **1900** and **1904** Games and then **vanished for over a century**, returning only in **2016**. The 1904 champion was **George Lyon of Canada**. And the 1900 women's champion, **Margaret Abbott**, an American studying art in Paris, **died in 1955 without ever knowing she was an Olympic champion**, the event's status was so muddled at the time that nobody told her. She is one of the few Olympic gold medallists in history who never found out.

:::reveal Whose name is on the Haskell ball patent besides Coburn Haskell's, and what year did the ball actually take over the game? ||| Bertram G. Work is named as co-inventor on US Patent 622,834 (filed 9 August 1898, granted 11 April 1899), and popular accounts drop him entirely. The ball conquered the game in 1902, when Sandy Herd won The Open with one.

## Sources
- Haskell, C., & Work, B. G. (1899). *Golf-ball* (US Patent No. 622,834). United States Patent and Trademark Office. https://patents.google.com/patent/US622834A/en
- USGA. (n.d.). *The USGA Golf Museum: The ball*. https://www.usga.org/museum.html
- R&A. (n.d.). *The history of The Open*. https://www.theopen.com/about
- International Olympic Committee. (n.d.). *Golf*. https://olympics.com/en/sports/golf/`,
    },
    {
      slug: "golf-the-color-line",
      title: "24 · The color line: the clause, 1934 to 1961",
      section: "History",
      recallContent: [
        {
          prompt: "Why did the guttie ball do more to open golf to ordinary people than any rule?",
          answer:
            "It was dramatically cheaper than the hand-made feathery, and it could be remoulded when knocked out of shape. When you can afford to lose a ball, you can afford to play.",
        },
        {
          prompt: "Who was Margaret Abbott?",
          answer:
            "The 1900 Olympic women's golf champion, an American studying art in Paris, who died in 1955 without ever knowing she was an Olympic champion.",
        },
      ],
      body: `For **27 years**, the constitution of the Professional Golfers' Association of America restricted membership to golfers of the **Caucasian race**. The clause was adopted in **1934** and removed in **November 1961** (PGA of America, n.d.).

Be precise about what that meant, because it is easy to underrate. The PGA was not a club you joined for the badge. **PGA membership was the gate to playing tournament golf for a living.** A clause about who could be a member was, in practice, a rule about **who was allowed to have the job at all.**

**Note the dates.** The clause was written in **1934**, not in some distant unenlightened past, but the same decade as the first Masters. And it was removed in **1961**, which is **within the lifetime of people alive today**, and after *Brown v. Board of Education*. This is not ancient history. It is your grandparents' history.

**The PGA of America has acknowledged this history. It has not apologized for it.** That is a real distinction and this course does not blur it.

**Bill Spiller, and the 1948 Richmond Open.** Spiller was one of the best golfers in America who was not allowed to prove it. He dominated the **United Golfers Association**, the Black golf tour that existed because the white one was closed, winning **more than 100 tournaments**, backed financially by the heavyweight champion **Joe Louis**, who used his own fame and money to fund Black golf.

In **1948**, Spiller, **Ted Rhodes**, and **Madison Gunter** qualified for the **Richmond Open** in California and were then **barred** from playing on the grounds of the Caucasian-only clause. They sued.

**They did not win.** This matters, and most retellings get it wrong. **The suit was withdrawn**, not decided in their favour, after the PGA promised to stop discriminating. **The PGA then broke that promise**, by simply changing the *form* of its events rather than its rules, which is the subject of Lesson 26. Spiller had traded a lawsuit for a promise, and got nothing.

*(One correction while we are here: Madison Gunter was an **amateur**, not a professional, though he is often described as one.)*

**How the clause finally fell: a caddie and an Attorney General.** Years later, Bill Spiller was **caddying** at a Los Angeles club, a working caddie, because the tour he was good enough for would not have him. One of the men whose bag he carried was **Stanley Mosk**, the **Attorney General of California**.

Spiller told him what the PGA did. Mosk did something about it: he took the position that the PGA could not run a discriminatory organization on **public golf courses in his state**, and **threatened to bar the PGA from every public course in California**. The PGA's tournament calendar depended on California. **The clause came out in November 1961.**

So the causal chain runs: **a Black golfer, denied a career, carrying the clubs of the man who happened to have the power to end the rule that denied it.** Hold on to that, because in the next lesson you are going to read how the golf industry told the story of the repeal at the time, and discover that **not one of these people is in it.**

**The United Golfers Association.** The UGA was where Black golfers actually played: their own tour, their own championships, their own stars. Its **founding year is genuinely disputed**, you will see 1925, 1926, and 1928, and the National Museum of African American History and Culture says only "the mid-1920s." This course does not pick one. Its greatest under-taught figure is **Ethel Funches**, an **eight-time UGA champion**, who is far less famous than she should be.

:::reveal Did Bill Spiller and Ted Rhodes WIN their 1948 lawsuit against the PGA, and how did the Caucasian-only clause finally fall? ||| No. The suit was WITHDRAWN, not won, in exchange for a PGA promise not to discriminate, a promise the PGA then broke by changing the form of its events instead of its rules. The clause finally fell in November 1961 because Spiller, working as a caddie, carried the bag of Stanley Mosk, the Attorney General of California, who then threatened to bar the PGA from every public course in the state.

## Sources
- PGA of America. (n.d.). *PGA history*. https://www.pga.com/story/pga-of-america-history
- National Museum of African American History and Culture. (n.d.). *African Americans and golf*. Smithsonian Institution. https://nmaahc.si.edu/
- USGA. (n.d.). *The USGA Golf Museum*. https://www.usga.org/museum.html`,
    },
    {
      slug: "golf-golfdom-1962",
      title: "25 · Primary source: read what the industry said in 1962",
      section: "History",
      recallContent: [
        {
          prompt: "When was the PGA's Caucasian-only clause adopted, and when was it removed?",
          answer:
            "Adopted in 1934 and removed in November 1961, 27 years, and within the lifetime of people alive today.",
        },
        {
          prompt: "How did Bill Spiller come to meet the man who ended the clause?",
          answer:
            "He was working as a caddie, and carried the bag of Stanley Mosk, the Attorney General of California, who then threatened to bar the PGA from every public course in the state.",
        },
      ],
      body: `This lesson is different. **You are going to read a primary source and find out what is missing from it.**

*Golfdom* was the golf industry's trade magazine, written by the business for the business, not for the public. In **January 1962**, a few weeks after the PGA removed the Caucasian-only clause, *Golfdom* reported the repeal. The document is scanned, free, and linked below.

**Go and read it now, before you read the rest of this lesson.**

👉 **[*Golfdom*, January 1962, the report of the repeal](https://archive.lib.msu.edu/tic/golfd/article/1962jan58F.pdf)** (Michigan State University Turfgrass Information Center)

Now answer three questions about the document you just read.

**Question 1: What reason does the article give for the change?**

It attributes the repeal to **"difficulties in making tournament arrangements."** That is the industry's own stated explanation: an administrative inconvenience. A logistics problem. Some awkwardness with scheduling.

**Question 2: Who is named in it?**

Not **Charlie Sifford**. Not **Bill Spiller**. Not **Ted Rhodes**. Not **Stanley Mosk**, the Attorney General whose threat actually forced the decision. **The people who spent more than a decade fighting this rule, and the man who broke it, appear nowhere in the industry's account of its own repeal.**

**Question 3: So what actually happened here?**

Read the two things side by side:

| What the record shows | What *Golfdom* told the industry |
| --- | --- |
| A 13-year campaign by excluded Black professionals | *(absent)* |
| A lawsuit, withdrawn on a promise the PGA broke | *(absent)* |
| A state Attorney General threatening to shut the PGA out of California | *(absent)* |
| A rule that barred a whole race from a profession for 27 years | *(not the focus)* |
|, | **"difficulties in making tournament arrangements"** |

**This is the most important lesson in the course, and it is not about golf.**

The erasure did not require anybody to lie. Every word in that article can be technically defensible. The PGA *did* have difficulties making tournament arrangements, that is precisely what happens when the Attorney General of your largest state threatens to lock you out of every public course in it. **The article is not false. It is emptied.** It takes a civil-rights defeat and files it under logistics.

And notice **who this was written for**: not the public, but the industry itself, club managers, course superintendents, equipment sellers. This is how the business explained the repeal **to itself**. It is the version that the people who ran golf got to believe, and, if nobody checks, it is the version that becomes the history.

**The transferable skill.** When you read any institution's account of its own reform, ask the three questions you just asked:

1. **What reason is given?** (Is it a moral reason, or an administrative one?)
2. **Who is named?** (And, far more revealingly: **who is missing?**)
3. **Who was the audience?** (Who was this version of the story *for*?)

An institution describing why it stopped doing something wrong is one of the least reliable documents you will ever read, **and it is usually the only one that gets filed.** That is why you go and find the people who were left out. In golf's case they were named Sifford, Spiller, Rhodes, and Mosk, and you now know their names, which is more than *Golfdom*'s readers did.

:::reveal What reason does the January 1962 Golfdom article give for the repeal, and which four people are missing from it? ||| It attributes the repeal to "difficulties in making tournament arrangements", an administrative inconvenience. Missing from the industry's own account are Charlie Sifford, Bill Spiller, Ted Rhodes, and Stanley Mosk, the California Attorney General whose threat actually forced the decision. The article is not false; it is emptied. It files a civil-rights defeat under logistics.

## Sources
- *Golfdom*. (1962, January). [Report on the removal of the PGA's Caucasian-only clause]. Michigan State University Turfgrass Information Center. https://archive.lib.msu.edu/tic/golfd/article/1962jan58F.pdf
- PGA of America. (n.d.). *PGA history*. https://www.pga.com/story/pga-of-america-history`,
    },
    {
      slug: "golf-three-evasions",
      title: "26 · Three evasions: change the form, escape the rule",
      section: "History",
      recallContent: [
        {
          prompt: "What reason did the January 1962 Golfdom article give for the repeal of the Caucasian-only clause?",
          answer:
            "\"Difficulties in making tournament arrangements\", an administrative inconvenience. It named none of the people who forced the change.",
        },
        {
          prompt: "What three questions should you ask of any institution's account of its own reform?",
          answer:
            "What reason is given (moral or administrative)? Who is named, and who is missing? Who was the audience, who was this version of the story for?",
        },
      ],
      body: `Here is the pattern that runs through this entire history, and once you see it you will see it everywhere, in every field:

> **When a rule threatens an institution, the institution does not change what it does. It changes its FORM, so the rule can no longer reach it.**

Golf gives us three clean, documented examples of exactly that move.

**Evasion 1: Rename the tournament.**
After Spiller and Rhodes sued over the 1948 Richmond Open, the PGA needed its events to stop being things a Black golfer could qualify for. Its solution was beautifully simple: **relabel the events "Invitationals."** An open tournament must accept qualifiers. An **invitational** need only invite. **The PGA then did not invite Black players.** Nothing in the rulebook had to say "no Black golfers", the word "Invitational" did the work, and it did it without ever using a racial term.

**Evasion 2: Lease the public course to a "private club."**
The Fourteenth Amendment restrains **states**, not private parties. So a city that did not want to integrate its **public** golf course had an obvious escape: **stop having a public golf course.** Greensboro, North Carolina **leased its city-owned Gillespie Park course to a nonprofit corporation**, which then operated it as a "private club" that Black golfers could not join. The course was the same. The grass was the same. The city still owned the land. Only the **paperwork** changed.

Federal judge Johnson J. Hayes saw through it, and his words are worth reading twice (*Simkins v. City of Greensboro*, 1957):

> *"If, however, it undertakes to do it out of the public treasury, it cannot constitutionally furnish the facility to a part of its citizens and deny it to others similarly situated."*

**Look at the year: 1957. That is seven years before the Civil Rights Act of 1964 existed.** Which raises the question this lesson is really about.

**Evasion 3: Sell the course outright.**
**Delray Beach, Florida sold its municipal golf course** in **1957-58**. Why? Three newspapers printed the reason plainly. The *Palm Beach Post* described it as **"a move by the city to prevent use of the course by Negroes."** Not an inference by a historian. **The stated motive, in the paper, at the time.**

---

**Now the question you should be asking: why didn't the Civil Rights Act just fix all this?**

**Because the Civil Rights Act does not cover golf courses.** Go and read the statute.

**Title II** lists the places of public accommodation it covers (42 U.S.C. § 2000a(b)): **inns and hotels, restaurants and lunch counters, movie theaters, concert halls, sports arenas and stadiums.** Read that list again and notice what is not on it. **There is no golf course. There is no country club.** A stadium, where you *watch* sport, is covered. A golf course, where you *play* it, is not named.

And then § 2000a(e) adds an exemption for **"a private club or other establishment not in fact open to the public."** So the private-club evasion is not merely a loophole somebody found. **It is written into the statute.**

**This is why golf's desegregation ran through the Fourteenth Amendment, not the Civil Rights Act.** The cases had to be built on **state action**, on the fact that a city *owned* the course, spent *public money* on it, and therefore could not hand it to some citizens and deny it to others. That argument reaches a **municipal** course. It does not reach a private club at all.

**And so the final evasion: just close it.** If a city can be forced to integrate a public facility, can it simply shut the facility instead? The Supreme Court answered that in **Palmer v. Thompson (1971)**, a case about Jackson, Mississippi's **swimming pools**, not its golf courses (Jackson **did** desegregate its golf courses). The Court held, **5-4**, that a city **may** close a public facility rather than operate it on an integrated basis. **That ruling is the shelter the closure tactic lived under.**

**Put the whole thing together and you have the shape of the problem:**

| The move | Why it worked |
| --- | --- |
| Rename the tournament "Invitational" | An invitational owes nobody an invitation |
| Lease the course to a "private club" | The Fourteenth Amendment restrains states, not private parties, and Title II exempts private clubs |
| Sell the course | No public ownership, no state action, no case |
| Close the course | *Palmer v. Thompson* (1971): a city may close a facility rather than integrate it |

**None of these required a single racist word in a single document.** That is the lesson. **A rule that only bans the stated intention will be defeated by anyone willing to change the paperwork.** The people who fought this had to win it one course, one city, and one lawsuit at a time, which is exactly what they did, and it is the next lesson.

:::reveal Why did golf's desegregation have to run through the Fourteenth Amendment instead of the Civil Rights Act? ||| Because Title II of the Civil Rights Act does not list golf courses at all, 42 U.S.C. § 2000a(b) names inns, restaurants, theaters, and stadiums, but no golf course and no country club, and § 2000a(e) expressly exempts private clubs "not in fact open to the public." So the cases had to be built on state action under the Fourteenth Amendment: a city owned the course and spent public money on it, so it could not give it to some citizens and deny it to others.

## Sources
- Civil Rights Act of 1964, 42 U.S.C. § 2000a (1964). https://www.law.cornell.edu/uscode/text/42/2000a
- *Simkins v. City of Greensboro*, 149 F. Supp. 562 (M.D.N.C. 1957).
- *Palmer v. Thompson*, 403 U.S. 217 (1971). https://supreme.justia.com/cases/federal/us/403/217/
- *Palm Beach Post*. (1957–1958). [Reporting on the sale of the Delray Beach municipal golf course].`,
    },
    {
      slug: "golf-the-courtroom",
      title: "27 · The courtroom: Atlanta, Greensboro, and seven years to the day",
      section: "History",
      recallContent: [
        {
          prompt: "Name the three evasions cities and the PGA used to keep golf segregated.",
          answer:
            "Rename the tournament an \"Invitational\" and invite nobody Black; lease the public course to a sham \"private club\"; or sell the course outright. A fourth option, closing it, was later blessed by Palmer v. Thompson (1971).",
        },
        {
          prompt: "Does Title II of the Civil Rights Act cover golf courses?",
          answer:
            "No. 42 U.S.C. § 2000a(b) lists inns, restaurants, theaters and stadiums, no golf courses, no country clubs, and § 2000a(e) exempts private clubs not in fact open to the public.",
        },
      ],
      body: `**Holmes v. City of Atlanta.** In the early 1950s, **Dr. Hamilton Mayo Holmes** and others sued Atlanta for access to its municipal golf courses.

🔴 **A name trap, because you will meet both men.** Dr. Hamilton **Mayo** Holmes, the plaintiff here, is **not** Hamilton **E.** Holmes, who desegregated the **University of Georgia in 1961**. They are different people. The one who desegregated the university was the **grandson** of the one who sued over the golf course. **The same family, two generations, two doors forced open.**

**What the district court did is the single most extraordinary document in this course.**

In **July 1954**, **seven weeks after *Brown v. Board of Education***, in which the Supreme Court had just held that separate is inherently unequal, the federal district court ruled on Atlanta's golf courses. It ordered the city to provide **equal** facilities. And it described its own order this way (*Holmes v. Atlanta*, 124 F. Supp. 290, 1954):

> *"...while preserving segregation, will be in full and fair accord with its principles."*

Read that once more. **A federal judge, seven weeks after *Brown*, ordering equality *and* segregation, and claiming to be faithful to *Brown* in doing so.** And then the **Fifth Circuit affirmed it.**

It took the **Supreme Court of the United States** to erase both judgments. On **7 November 1955**, in *Holmes v. City of Atlanta*, 350 U.S. 879, the Court **vacated** the lower judgments. (Vacated, wiped out. Not "reversed and remanded," which is how it is usually misdescribed.) **Thurgood Marshall was counsel on the petition**, though the case was decided **without oral argument**, so he did not argue it.

**Notice the sequence, because the Court was building a wall, brick by brick:**

| Date | Case | Facility |
| --- | --- | --- |
| 1954 | *Brown v. Board of Education* | **Schools** |
| 7 Nov 1955 | *Mayor of Baltimore v. Dawson* | **Beaches** |
| **7 Nov 1955** | ***Holmes v. City of Atlanta*** | **Golf courses** |

**Beaches and golf courses on the same day.** *Brown* had been about schools, and segregationists argued it was *only* about schools, that education was special. In one afternoon the Court quietly answered: **no, it was never only about schools.**

---

**The Greensboro Six, and the longest week in golf.**

On **7 December 1955**, six Black men played the **Gillespie Park** course in Greensboro, the city-owned course that had been leased to a sham "private club" (Lesson 26). They paid their green fee. They played. **They were arrested.**

They were sentenced to **30 days in jail**, the **statutory maximum**. Not a fine. Not a warning. The maximum, for playing golf.

🔴 **Now, a correction, and it is an important one.** You will read, **on the PGA TOUR's own website, and in *Global Golf Post***, that the Greensboro Six "**lost 5-4 at the Supreme Court**" in 1958 or 1959. **Both publications are wrong.** The case is ***Wolfe v. North Carolina*, 364 U.S. 177**, decided **27 June 1960**, and the Court **dismissed the appeal**, it **never reached the merits at all.** There was no 5-4 loss on the substance of their claim. There was a procedural dismissal.

That the sport's own governing bodies get this wrong, in public, on the record, tells you something worth knowing: **being an official source is not the same as being a correct one.** You are permitted, required, really, to go and read the opinion. It is public. It has a number.

**How it ended.** Someone **burned the Gillespie Park clubhouse down.** The city closed the course, the *Palmer v. Thompson* escape hatch, in practice.

And then, on **7 December 1962**, **seven years to the day** after the six men were arrested for playing it, **the course reopened, desegregated**, with **George Simkins teeing off first.**

They took the same tee, on the same date, on the far side of seven years, a jail sentence, an arson, and a Supreme Court dismissal. **That is what it actually cost to play a round of golf.**

:::reveal What did the district court order in Holmes v. Atlanta in July 1954, and what really happened to the Greensboro Six at the Supreme Court? ||| Seven weeks after Brown, the district court ordered EQUAL facilities "while preserving segregation," claiming this was "in full and fair accord with" Brown's principles, and the Fifth Circuit affirmed it. The Supreme Court VACATED both judgments on 7 November 1955. As for the Greensboro Six: the PGA TOUR and Global Golf Post both say they "lost 5-4 at the Supreme Court," and both are wrong. In Wolfe v. North Carolina, 364 U.S. 177 (27 June 1960), the Court DISMISSED the appeal and never reached the merits.

## Sources
- *Holmes v. City of Atlanta*, 350 U.S. 879 (1955). https://supreme.justia.com/cases/federal/us/350/879/
- *Holmes v. Atlanta*, 124 F. Supp. 290 (N.D. Ga. 1954).
- *Mayor & City Council of Baltimore City v. Dawson*, 350 U.S. 877 (1955). https://supreme.justia.com/cases/federal/us/350/877/
- *Brown v. Board of Education*, 347 U.S. 483 (1954). https://supreme.justia.com/cases/federal/us/347/483/
- *Wolfe v. North Carolina*, 364 U.S. 177 (1960). https://supreme.justia.com/cases/federal/us/364/177/
- *Simkins v. City of Greensboro*, 149 F. Supp. 562 (M.D.N.C. 1957).`,
    },
    {
      slug: "golf-breaking-in",
      title: "28 · The players who went first",
      section: "History",
      recallContent: [
        {
          prompt: "What happened on 7 December 1955, and what happened on 7 December 1962?",
          answer:
            "On 7 December 1955 the Greensboro Six played the leased Gillespie Park course and were arrested, receiving 30 days in jail, the statutory maximum. Seven years to the day later, on 7 December 1962, the course reopened desegregated, with George Simkins teeing off first.",
        },
        {
          prompt: "Did the Greensboro Six lose 5-4 at the Supreme Court?",
          answer:
            "No, though the PGA TOUR and Global Golf Post both say so. In Wolfe v. North Carolina (1960) the Court dismissed the appeal without reaching the merits.",
        },
      ],
      body: `**John Shippen, 1896.** At the second **U.S. Open**, at **Shinnecock Hills**, a 16-year-old named **John Shippen** became the **first Black competitor in a USGA championship**, alongside **Oscar Bunn**, a member of the **Shinnecock** tribe (USGA, n.d.). He finished in the **top six**.

Three things about Shippen are usually told wrong, and the truth is better:

- He is routinely called "the first American-born golf professional." **That claim is his own.** The USGA's own account is careful: **he told an interviewer that he *believed* himself to be** the first. That is a man's recollection of his own life, not an established record, and it should be written the way the USGA writes it.
- The famous story that the white professionals **threatened to boycott** unless he was removed is described by the **USGA itself as "undocumented."**
- His exact finish, his age, and the size of the field **conflict between the USGA's own pages**. Where an institution's own records disagree with each other, say so.

One verified, human detail survives: **he took an 11 on a single hole**, and still finished in the top six.

**And then the gap. Read this slowly: after John Shippen played in 1896, it was 52 YEARS before another Black golfer played in the U.S. Open** (Ted Rhodes, in 1948).

**The gap is the story.** A door opened in 1896 and then closed for half a century. Progress is not a ratchet. **It can go backwards, and here it did.**

---

**Ann Gregory, 1956**, the first African American woman to play in a **USGA championship**. And here is the part that is almost always left out, and is the whole lesson:

**She could only enter because the Chicago Women's Golf Club had, that same year, become the first all-Black club admitted to USGA membership.** Entry ran through **club membership**. So the barrier was never really about Ann Gregory. **It was institutional.** No amount of individual excellence could have gotten her in; an *organization* had to be let through the door first, and then she could walk through it.

**Bill Wright, 1959**, the first African American to **WIN** a USGA championship. He won the **Amateur Public Links**.

**Read that championship's name again.** Of all the USGA's championships, the first won by a Black golfer was **the one for players from public courses**. That is not a coincidence, and after Lessons 26 and 27 you know exactly why: **private clubs were where exclusion was legal and permanent.** The public course was the only door, so the public-course championship was the first one through it.

**Althea Gibson**, already a tennis champion, she joined the **LPGA in 1963**. (You will see 1964 in places, including Wikipedia; the **LPGA and the PGA both say 1963**.) **She never won an LPGA title**, and that is precisely the point. **The barrier she broke was entry, not victory.** We remember firsts who won. We should also remember firsts who simply *got in*, because getting in was the hard part.

**Renee Powell**, joined the **LPGA in 1967**, and in **1996** became the **first African American woman to become a PGA member**. Her father, **Bill Powell**, **built his own golf course, Clearview**, for the simplest possible reason: **he was barred from playing on everyone else's.**

**Charlie Sifford.** At the **end of 1960** Sifford received an **"approved player"** card. Notice the wording: **not full membership. A second-class category, invented to admit him partway.**

🔴 **When did he get full PGA membership? Official golf sources contradict each other, some say 1961, some say 1964.** This course is not going to pretend otherwise, because **the ambiguity IS the history.** An organization that had spent 27 years keeping a man out did not keep clean records of the day it finally let him in. **The sloppiness is evidence.**

What is not ambiguous: the **1967 Greater Hartford Open**, Sifford's **first official PGA TOUR win**. He won again at the **1969 Los Angeles Open**, played at **Rancho Park**, *not* Riviera, which is widely misreported. In **2014** he received the **Presidential Medal of Freedom**.

**Lee Elder** became the **first Black golfer to play in the Masters, in 1975**, having earned it the only way that could not be denied: **by winning the 1974 Monsanto Open.** In 2021 Augusta made him an **honorary starter**, an honor at which, it should be noted, **he did not hit a tee shot.**

---

**Tiger Woods, 1997.** He won the Masters at **21**, the **youngest champion ever**, shooting **270 (−18)** and winning by **12 shots** over Tom Kite. In the PGA of America's own words, he was the **first African-American to win the Masters**.

**Put one fact next to that win and it changes shape entirely: Augusta National did not invite its first Black player until 1975, the year Tiger Woods was born.** The gap between "no Black man has ever been invited to play here" and "a Black man just won by 12" is **one human lifetime, and not a long one.**

🔴 **What this course will not say:** that Woods was the "first Asian-American Masters champion." That claim is unsupported, and golf's institutions describe **Hideki Matsuyama (2021)** as the first Asian man to win it.

**What is far more interesting is what Woods did himself.** In 1997, on *Oprah*, he **refused a single racial label** and offered a word he had made up as a child: **"Cablinasian"**, Caucasian, Black, (American) Indian, and Asian. He did it because calling him simply "African American" **erased his Thai mother.**

He was widely criticized for it. But sit with the actual question he raised, because it is the sharpest one in this section: **who gets to decide which race a person is, the person, or everyone else?** For most of the history in this course, **the institutions decided**, and they wrote their decision into a membership clause. **Woods, at 21, took that authority back for himself.** You can think he was right or wrong, but you should notice what he was actually doing.

*(A related correction, since precision matters here: the **LPGA was founded in 1950** and speaks of **13 founders**, but **only five women signed the Certificate of Incorporation.** "Thirteen women signed the charter" is a very common and very wrong sentence.)*

:::reveal Why could Ann Gregory enter a USGA championship in 1956, and why is it significant that Bill Wright's 1959 win was in the Amateur Public Links? ||| Gregory could only enter because the Chicago Women's Golf Club had that year become the first all-Black club admitted to USGA membership, entry ran through club membership, so the barrier was institutional, not individual. Wright's win came in the PUBLIC-course championship because private clubs were where exclusion remained legal and permanent; the public course was the only door open, so it was the first one a Black golfer came through.

## Sources
- USGA. (n.d.). *John Shippen*. USGA Golf Museum. https://www.usga.org/museum.html
- PGA of America. (n.d.). *PGA history*. https://www.pga.com/story/pga-of-america-history
- LPGA. (n.d.). *LPGA history and founders*. https://www.lpga.com/about
- National Museum of African American History and Culture. (n.d.). *African Americans and golf*. Smithsonian Institution. https://nmaahc.si.edu/
- Masters Tournament. (n.d.). *Tournament history*. https://www.masters.com/en_US/history/index.html`,
    },
    {
      slug: "golf-the-clubs-and-the-caddies",
      title: "29 · The clubs and the caddies",
      section: "History",
      recallContent: [
        {
          prompt: "How long was the gap between John Shippen playing the U.S. Open and the next Black golfer to do so?",
          answer:
            "52 years, Shippen in 1896, then Ted Rhodes in 1948. The gap is the story: progress is not a ratchet, and here it went backwards.",
        },
        {
          prompt: "What word did Tiger Woods coin in 1997, and why?",
          answer:
            "\"Cablinasian\", Caucasian, Black, Indian, Asian. He refused a single racial label because calling him simply African American erased his Thai mother. The real question he raised: who decides a person's race, the person or everyone else?",
        },
      ],
      body: `**The caddie rule at Augusta is the sharpest story in golf, and almost nobody teaches it.**

From **1934**, every player in the Masters was **required** to use one of **Augusta National's own caddies**, a corps that was **entirely Black**. You could not bring your own. So for **roughly 48 years**, the most famous golf tournament in America guaranteed Black men a place inside the ropes, **in exactly one role: carrying a white player's bag.** They were essential, they were expert, an Augusta caddie's knowledge of those greens was worth strokes no yardage book could give you, and they were **structurally barred from being anything else.**

**How it ended is the part that should make you uncomfortable.**

The rule was lifted by chairman **Hord Hardin** in **November 1982**, effective the **1983 Masters**. **And the trigger was not civil rights.** It was **player pressure, led by Tom Watson**, after Augusta's caddies were **late getting back out to a rain-delayed restart.** The rule that had confined Black men to a subordinate role for half a century was ended because it had become **professionally inconvenient for the players.**

**And then look at what "progress" did to the men themselves. In 1983, the first year players could bring their own caddies, 63 of the 81 players did.** The rule that had trapped them in a subordinate job ended by **promptly taking that job away from most of them.**

Sit with both halves of that, because both are true and they do not resolve neatly:
- The rule was **demeaning**, and ending it was **right**.
- Ending it **cost most of those men their livelihoods**, and it was ended for a reason that had **nothing to do with their dignity**.

**Reform is not automatically kind to the people it liberates**, especially when it is done *for* them rather than *with* them, and by people whose actual motive was a rain delay. That is a hard, adult idea and it belongs in a golf course.

*(One man who stayed: **Carl "Skillet" Jackson**, an Augusta caddie who went on to caddie for **Ben Crenshaw's Masters wins in 1984 and 1995**.)*

---

**Shoal Creek, 1990: the year the money finally cared.**

The 1990 **PGA Championship** was scheduled at **Shoal Creek**, in Birmingham, Alabama. Asked about the club having **no Black members**, its founder **Hall Thompson** said it was simply **"that's just not done in Birmingham."**

**Then something happened that a century of moral argument had not achieved: the advertisers left.** **IBM, Toyota, and Anheuser-Busch pulled their television advertising.**

Shoal Creek admitted **Louis J. Willie**, as an **honorary** member. Read that carefully. **Not a full member. A partial concession**, offered under commercial pressure, which is exactly what a partial concession is for.

**Roughly one month later, Augusta National admitted its first Black member: Ron Townsend, in 1990**, and, to be precise where precision favours them, **as a full member.**

**Ask yourself what actually moved these institutions.** Not *Brown*. Not the Fourteenth Amendment. Not thirty years of Black golfers being excellent in public. **Television advertising revenue.** You may draw your own conclusions about what that says, but do not look away from it.

---

**And the women.**

- **Augusta National admitted its first women members on 20 August 2012: Condoleezza Rice and Darla Moore.** A decade earlier, chairman **Hootie Johnson** had said the club might one day admit a woman, but **"not at the point of a bayonet."**
- **The Royal & Ancient Golf Club**, the club, remember, not the governing body, **voted to admit women on 18 September 2014**, with **85%** in favour. It had been founded in 1754.
- **Muirfield** voted in **2016** and **failed**, at **64%**. The R&A promptly **removed it from the rota of courses that host The Open**, the most valuable thing a British links course has. Muirfield voted again in **2017** and passed at **80.2%**, and was **reinstated**. **The first 12 women members joined on 1 July 2019**, **275 years after the club was founded.**

**Notice the mechanism in the Muirfield story**, because it is the same one as Shoal Creek: the club changed when **exclusion started costing it something it valued**. A vote failed on principle in 2016. The same men, asked the same question after losing The Open, produced a completely different answer in 2017.

---

**One last thing, and it is a gap rather than a fact.**

Golf's own participation data reports that **25% of on-course golfers are Black, Asian, or Hispanic *combined***, up from **8% in 1990**, and about **26% of juniors** (National Golf Foundation, 2025).

**Now notice what you cannot find. The National Golf Foundation publishes no standalone figure for the percentage of golfers who are Black.** Not a low number. **No number.** The three groups are reported together, which means the specific question this section has spent seven lessons on, *how many Black golfers are there?*, **cannot be answered from the sport's own headline data.**

**Name the absence, because the absence is itself a finding.** When an institution reports a combined figure, ask what the combination is hiding, and ask who benefits from it being hidden. **What does not get counted usually does not get fixed.**

:::reveal Why did Augusta's all-Black caddie rule end in 1982, and what happened to those caddies in 1983? ||| Not for civil-rights reasons. It ended because of player pressure led by Tom Watson after the caddies were late returning to a rain-delayed restart, it had become professionally inconvenient. Then in 1983, the first year players could bring their own caddies, 63 of 81 did. The rule that had confined Black men to a subordinate role for ~48 years ended by promptly costing most of them their jobs.

## Sources
- Masters Tournament. (n.d.). *Tournament history*. https://www.masters.com/en_US/history/index.html
- Associated Press. (1990). [Contemporaneous reporting on Shoal Creek and the 1990 PGA Championship].
- R&A. (2014, September 18). *Members of The Royal and Ancient Golf Club of St Andrews vote to admit women*. https://www.randa.org/en/news
- National Golf Foundation. (2025). *Golf participation in the U.S.* https://www.ngf.org/golf-industry-research/`,
    },
    {
      slug: "golf-history-quiz",
      title: "30 · Check your understanding: history",
      section: "History",
      quiz: {
        passingScore: 70,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did the Scottish Parliament's 1457 Act actually do about golf?",
            options: [
              "Established the first standardized 18-hole course",
              "Ordered it 'cried down' so men would practise archery",
              "Created the first written code of Rules of Golf",
              "Founded the Royal & Ancient Golf Club of St Andrews",
            ],
            correctIndex: 1,
            explanation:
              "A law banning golf is proof golf was already popular. Nobody bans a thing nobody does.",
            sourceLessonSlug: "golf-origins",
          },
          {
            prompt: "Were 18 holes standardized in 1764?",
            options: [
              "Yes, a formal R&A act fixed the number of holes at 18",
              "No, St Andrews cut its OWN round from 22 to 18 holes",
              "Yes, the USGA fixed 18 as the worldwide standard",
              "No, a full round's standard is still 22 holes today",
            ],
            correctIndex: 1,
            explanation:
              "This is one of golf's most-repeated myths. A local decision about one course hardened into a fashion, and then into a norm, more than a century later.",
            sourceLessonSlug: "golf-origins",
          },
          {
            prompt: "The first Open Championship (Prestwick, 1860) was:",
            options: [
              "Open to anyone who entered, and offered a cash purse",
              "Contested by eight professionals BY INVITATION, no prize",
              "A 72-hole stroke-play event won by a local amateur",
              "Held at St Andrews over the modern 18-hole course",
            ],
            correctIndex: 1,
            explanation:
              "The tournament called 'The Open' was, in its first year, closed. It was opened to amateurs the following year, which is where the name comes from.",
            sourceLessonSlug: "golf-origins",
          },
          {
            prompt: "Whose name appears alongside Coburn Haskell's on the 1899 golf-ball patent?",
            options: ["Sandy Herd", "Robert Adams", "Bertram G. Work", "Willie Park Snr"],
            correctIndex: 2,
            explanation:
              "US Patent 622,834, filed 9 August 1898 and granted 11 April 1899, names Bertram G. Work as co-inventor. Popular accounts drop him entirely.",
            sourceLessonSlug: "golf-equipment-revolutions",
          },
          {
            prompt: "When was the PGA of America's Caucasian-only clause adopted and removed?",
            options: [
              "Adopted March 1916, removed October 1948",
              "Adopted 1934, removed November 1961",
              "Adopted June 1948, removed December 1964",
              "Adopted April 1920, removed February 1975",
            ],
            correctIndex: 1,
            explanation:
              "27 years. And 1961 is within the lifetime of people alive today, this is not ancient history.",
            sourceLessonSlug: "golf-the-color-line",
          },
          {
            prompt: "What was the outcome of Bill Spiller and Ted Rhodes's 1948 lawsuit over the Richmond Open?",
            options: [
              "They won at trial, and the Caucasian-only clause fell",
              "It was WITHDRAWN on a PGA promise the PGA then broke",
              "They lost on appeal all the way to the Supreme Court",
              "It settled for cash but left the clause fully intact",
            ],
            correctIndex: 1,
            explanation:
              "They traded a lawsuit for a promise and got nothing. The PGA then evaded it by relabelling its events 'Invitationals.'",
            sourceLessonSlug: "golf-the-color-line",
          },
          {
            prompt: "How did Bill Spiller come to meet California Attorney General Stanley Mosk?",
            options: [
              "They played together in a PGA Tour pro-am event",
              "Spiller was caddying and carried Mosk's golf bag",
              "Mosk had been his attorney in the 1948 Richmond suit",
              "They were introduced at a PGA committee meeting",
            ],
            correctIndex: 1,
            explanation:
              "A Black golfer denied a career, carrying the clubs of the one man with the power to end the rule that denied it. Mosk threatened to bar the PGA from every public course in California.",
            sourceLessonSlug: "golf-the-color-line",
          },
          {
            prompt: "What reason did the January 1962 issue of Golfdom give for the repeal of the Caucasian-only clause?",
            options: [
              "A public moral reckoning with racial injustice",
              "\"Difficulties in making tournament arrangements\"",
              "A binding Supreme Court desegregation ruling",
              "Sustained public pressure from Charlie Sifford",
            ],
            correctIndex: 1,
            explanation:
              "The industry's own trade press filed a civil-rights defeat under logistics, and never named Sifford, Spiller, Rhodes, or Mosk. The article is not false. It is emptied.",
            sourceLessonSlug: "golf-golfdom-1962",
          },
          {
            prompt: "Why did golf's desegregation have to run through the Fourteenth Amendment rather than the Civil Rights Act?",
            options: [
              "Because the Civil Rights Act came too late every time",
              "Because Title II omits golf courses and exempts private clubs",
              "Because golf is exclusively a federal regulatory matter",
              "Because the PGA counts as a federal government agency",
            ],
            correctIndex: 1,
            explanation:
              "42 U.S.C. § 2000a(b) names inns, restaurants, theaters and stadiums, no golf course, no country club, and § 2000a(e) exempts private clubs. So the cases had to be built on state action at MUNICIPAL courses.",
            sourceLessonSlug: "golf-three-evasions",
          },
          {
            prompt: "Which of these was NOT one of the evasions used to keep golf segregated?",
            options: [
              "Relabelling PGA tournaments as 'Invitationals' to dodge the rule",
              "Leasing a city-owned course to a sham 'private club'",
              "Selling the municipal course outright to private owners",
              "Passing a state law banning Black golfers everywhere",
            ],
            correctIndex: 3,
            explanation:
              "That is exactly the point: NONE of these required a single racist word in a single document. They changed the form of the institution so the rule could not reach it.",
            sourceLessonSlug: "golf-three-evasions",
          },
          {
            prompt: "In July 1954, seven weeks after Brown, what did the district court order in the Atlanta golf case?",
            options: [
              "Immediate desegregation of every municipal golf course",
              "Equal facilities \"while preserving segregation\"",
              "That the courses be closed to all races entirely",
              "That the case be dismissed for lack of standing",
            ],
            correctIndex: 1,
            explanation:
              "A federal judge ordering equality AND segregation, weeks after Brown, and the Fifth Circuit affirmed it. The Supreme Court vacated both judgments on 7 November 1955.",
            sourceLessonSlug: "golf-the-courtroom",
          },
          {
            prompt: "What actually happened to the Greensboro Six's case at the Supreme Court?",
            options: [
              "They lost 5-4 on the merits in a signed majority opinion",
              "In Wolfe v. North Carolina it DISMISSED the appeal",
              "They won unanimously and the whole clause was voided",
              "The Court declined the appeal and never heard the case",
            ],
            correctIndex: 1,
            explanation:
              "The PGA TOUR's own site and Global Golf Post both report a '5-4 loss.' Both are wrong. Being an official source is not the same as being a correct one.",
            sourceLessonSlug: "golf-the-courtroom",
          },
          {
            prompt: "Why could Ann Gregory enter a USGA championship in 1956?",
            options: [
              "She won a USGA regional qualifying tournament",
              "Her Chicago Women's Golf Club won USGA membership",
              "The USGA changed its entry rules for individuals",
              "She was personally invited by the USGA president",
            ],
            correctIndex: 1,
            explanation:
              "Entry ran through club membership, so the barrier was INSTITUTIONAL, not individual. No amount of personal excellence could have gotten her in; an organization had to be let through first.",
            sourceLessonSlug: "golf-breaking-in",
          },
          {
            prompt: "How many years passed between John Shippen playing the 1896 U.S. Open and the next Black golfer to play in it?",
            options: ["5 years", "20 years", "52 years", "It never happened again"],
            correctIndex: 2,
            explanation:
              "Shippen in 1896, then Ted Rhodes in 1948. The gap IS the story: a door opened and then closed for half a century. Progress is not a ratchet.",
            sourceLessonSlug: "golf-breaking-in",
          },
          {
            prompt: "What happened to Augusta's Black caddies in 1983, the first year players could bring their own?",
            options: [
              "They were all given full Augusta National club membership",
              "63 of the 81 players brought their own outside caddies",
              "Nothing changed; every player kept using the club caddies",
              "They were all hired onto the PGA TOUR caddie staff",
            ],
            correctIndex: 1,
            explanation:
              "The rule that had confined Black men to a subordinate role for ~48 years was ended (because of a rain delay, at Tom Watson's urging) in a way that promptly cost most of them their jobs. Reform is not automatically kind to the people it liberates.",
            sourceLessonSlug: "golf-the-clubs-and-the-caddies",
          },
        ],
      },
    },

    // ── Section 5: Tours & Leagues ────────────────────────────────────────
    {
      slug: "golf-pga-of-america-vs-pga-tour",
      title: "31 · The PGA of America is not the PGA TOUR",
      section: "Tours & Leagues",
      recallContent: [
        {
          prompt: "What does the National Golf Foundation NOT publish, and why does that matter?",
          answer:
            "It publishes no standalone figure for the percentage of golfers who are Black, only a combined Black/Asian/Hispanic figure (25%). Name the absence: what does not get counted usually does not get fixed.",
        },
        {
          prompt: "What finally moved Shoal Creek and Augusta National in 1990?",
          answer:
            "Television advertising revenue. IBM, Toyota, and Anheuser-Busch pulled their advertising. Not Brown, not the Fourteenth Amendment, not decades of Black excellence.",
        },
      ],
      body: `**These are two different organizations, and almost everybody gets them confused.** Getting this right is the single fastest way to sound like you actually know golf.

| | **PGA of America** | **PGA TOUR** |
| --- | --- | --- |
| **Founded** | **1916** | **1968** |
| **Who its members are** | **30,000+ working club and teaching professionals**, the people who run pro shops, give lessons, and manage facilities | **The elite touring players** you see on television |
| **What it owns** | The **PGA Championship** and the **Ryder Cup** | **THE PLAYERS**, the **FedExCup**, the **Presidents Cup**, the **Korn Ferry Tour**, **Q-School**, **PGA TOUR University** |
| **What it is, in one line** | The professional body for people who **work in golf** | The **league** for people who **play golf for prize money** |

**How they split.** The PGA TOUR was **"formed in 1968 when a subset of touring professionals broke away from the PGA of America"** (PGA TOUR, n.d.). The tournament players wanted control of their own tournaments and their own television money. So they left.

**Why this distinction should matter to you personally.** Read the PGA of America row again: **30,000-plus members**, and the overwhelming majority of them **are not tournament players.** They are teaching professionals, head pros, directors of golf, general managers.

**That is what "being a golf professional" almost always actually means.** The PGA TOUR has a few hundred players. The PGA of America has tens of thousands of members with **stable careers, salaries, and benefits**. When a 16-year-old says "I want to be a pro golfer," they are almost always picturing the tiny organization and not the enormous one. **The realistic, achievable, well-paid path is the one nobody televises**, and the Opportunities section is going to walk you down it.

**One more piece of vocabulary.** A "**PGA Professional**" (a PGA of America member, a person who teaches and runs golf facilities) and a "**Tour player**" are different jobs, requiring different training, with different odds of success. **The first has a training program and a hiring market. The second has a lottery.**

:::reveal What is the PGA of America, what is the PGA TOUR, and which one has more members? ||| The PGA of America (1916) is the professional body for 30,000+ working club and teaching professionals, and it owns the PGA Championship and the Ryder Cup. The PGA TOUR (1968) is the league for elite touring players, formed when a subset of touring pros broke away from the PGA of America; it owns THE PLAYERS, the FedExCup, and the Presidents Cup. The PGA of America is vastly larger, and its members have the realistic careers.

## Sources
- PGA of America. (n.d.). *About the PGA of America*. https://www.pga.com/about
- PGA TOUR. (n.d.). *About the PGA TOUR*. https://www.pgatour.com/company.html`,
    },
    {
      slug: "golf-the-majors",
      title: "32 · The majors, men's and women's",
      section: "Tours & Leagues",
      recallContent: [
        {
          prompt: "Which organization owns the Ryder Cup and the PGA Championship?",
          answer: "The PGA of America, not the PGA TOUR.",
        },
        {
          prompt: "When a teenager says \"I want to be a pro golfer,\" which organization are they usually picturing, and which one has the realistic career path?",
          answer:
            "They picture the PGA TOUR (a few hundred players, a lottery). The realistic path is the PGA of America: 30,000+ members with salaries, benefits, and an actual hiring market.",
        },
      ],
      body: `The **majors** are the four tournaments that define a career. Winning one changes a player's life permanently. **And each one is run by a different organization**, which is exactly why the previous lesson mattered.

**The men's majors:**

| Major | Run by | Where |
| --- | --- | --- |
| **The Masters** | **Augusta National Golf Club** | Always **Augusta National**. The only major with a permanent home. |
| **PGA Championship** | **The PGA of America** | Rotates |
| **U.S. Open** | **The USGA** | Rotates |
| **The Open Championship** | **The R&A** | Rotates among links courses in the UK |

**Note that no major is run by the PGA TOUR.** The tour's own flagship event, **THE PLAYERS Championship**, has one of the strongest fields in golf and is sometimes called "the fifth major", but it is **not** one, and the reason is structural: the majors are owned by the *governing bodies and the club*, not by the *league*. That is a real limit on the PGA TOUR's power, and it explains a great deal about golf politics.

**⚠️ Call it "The Open Championship," or just "The Open." Never "the British Open."** It is not its name. The R&A runs it, it is the oldest major in golf, and it was called The Open before any other tournament existed to be confused with. Getting this right is a small thing that marks you instantly as someone who knows the sport.

**The women's majors: there are FIVE**, not four. Women's golf recognizes five major championships, which is a fact most casual fans do not know and which is worth saying out loud, since the women's game is routinely described in the men's terms.

**The FedExCup.** The PGA TOUR's season-long points race. Players earn points all year, the field narrows through a playoff series, and the last event decides the champion. It is the tour's answer to the problem that a season of individual tournaments has no natural climax.

**The Grand Slam.** Winning all four men's majors in the **same calendar year**. **It has never been done in the modern era.** Tiger Woods held all four at once across 2000-2001, the so-called "Tiger Slam", but not within a single calendar year, which is why it gets its own name rather than the real one.

:::reveal Which organization runs each of the four men's majors, and what is the correct name of the one The R&A runs? ||| The Masters is run by Augusta National Golf Club (the only major with a permanent home); the PGA Championship by the PGA of America; the U.S. Open by the USGA; and The Open Championship by The R&A. It is called The Open Championship, or simply The Open, never "the British Open." Note that the PGA TOUR runs NO major.

## Sources
- Masters Tournament. (n.d.). *Tournament history*. https://www.masters.com/en_US/history/index.html
- PGA of America. (n.d.). *PGA Championship*. https://www.pgachampionship.com/
- USGA. (n.d.). *U.S. Open*. https://www.usga.org/usopen.html
- R&A. (n.d.). *The Open*. https://www.theopen.com/about
- LPGA. (n.d.). *Majors*. https://www.lpga.com/tournaments`,
    },
    {
      slug: "golf-team-golf",
      title: "33 · Team golf: Ryder, Presidents, Solheim",
      section: "Tours & Leagues",
      recallContent: [
        {
          prompt: "How many women's majors are there?",
          answer: "Five, not four. The women's game is routinely and wrongly described in the men's terms.",
        },
        {
          prompt: "Does the PGA TOUR run any of the four men's majors?",
          answer:
            "No. They belong to Augusta National, the PGA of America, the USGA, and The R&A. THE PLAYERS is the TOUR's flagship, but it is not a major.",
        },
      ],
      body: `Golf is an individual sport for 51 weeks a year. Then, occasionally, it is a team sport, and it becomes something else entirely, **players who are paid millions to be calm find themselves weeping on a golf course.** The team events are, by common consent among the players themselves, the most intense golf that exists.

| Event | Who plays | Format | Run by |
| --- | --- | --- | --- |
| **Ryder Cup** | **Men**: **USA v Europe** | Match play, over three days | **The PGA of America** |
| **Presidents Cup** | **Men**: **USA v an International team from the rest of the world, EXCLUDING Europe** | Match play | **The PGA TOUR** |
| **Solheim Cup** | **Women**: **USA v Europe** | Match play | **The LPGA** |

**Why the Presidents Cup exists, and why its definition is so strange.** Read its row again: **USA versus the rest of the world *excluding Europe*.** That exclusion is not a quirk of geography. **Europe is excluded because Europe already has the Ryder Cup**, and the Ryder Cup belongs to the *PGA of America*, not the PGA TOUR. The Presidents Cup is, in effect, **the PGA TOUR's own team event, built in the space the Ryder Cup left over.** Golf's institutional politics are visible right there in the eligibility rules, if you know how to read them.

**And here is the detail that tells you what team golf actually is: there is NO PRIZE MONEY at the Presidents Cup.** The best players on earth compete, ferociously, for nothing but the result. (Proceeds go to charity.) For one week, professional golf stops being a profession.

**Why match play makes it wild.** These events are contested at **match play** (Lesson 1), where each hole is a separate battle. Momentum is real, a blow-up hole costs only that hole, and a player 3 down with 4 to play is *not* finished. **Match play produces comebacks that stroke play makes arithmetically impossible**, and that is why the crowds are unlike anything else in golf.

**Why this matters to a 15-year-old.** Look at the format: **match play, team, partners.** That is *exactly* what high-school and college golf is. It is also exactly what a four-ball with your friends is (Lesson 14). **The most thrilling golf on television is played in the same format as the most accessible golf available to you.** You can play Ryder Cup golf this weekend, with two friends and a five-dollar bet.

:::reveal What is the difference between the Ryder Cup and the Presidents Cup, and what is unusual about the Presidents Cup's prize money? ||| The Ryder Cup is men's USA v EUROPE, run by the PGA of America. The Presidents Cup is men's USA v an International team from the rest of the world EXCLUDING Europe, excluded precisely because Europe already has the Ryder Cup, and it is run by the PGA TOUR. The Presidents Cup has NO prize money at all; the best players on earth compete for nothing but the result.

## Sources
- PGA of America. (n.d.). *Ryder Cup*. https://www.rydercup.com/
- PGA TOUR. (n.d.). *Presidents Cup*. https://www.presidentscup.com/
- LPGA. (n.d.). *Solheim Cup*. https://www.solheimcup.com/`,
    },
    {
      slug: "golf-liv-and-2026",
      title: "34 · LIV, the OWGR, and where the game actually stands",
      section: "Tours & Leagues",
      recallContent: [
        {
          prompt: "Why does the Presidents Cup exclude Europe?",
          answer:
            "Because Europe already has the Ryder Cup, which belongs to the PGA of America, not the PGA TOUR. The Presidents Cup is the TOUR's own team event, built in the space left over.",
        },
        {
          prompt: "Why does match play produce comebacks that stroke play cannot?",
          answer:
            "Because each hole is a separate battle and a blow-up hole costs only that hole. A player 3 down with 4 to play is not finished.",
        },
      ],
      body: `⚠️ **Read the date on anything you read about this.** Men's professional golf has been in open conflict since 2022, and **most of what is written about it is now out of date, including several things that were true eighteen months ago.** This lesson is written as of **2026**, and it is deliberately built to teach you the *shape* of the dispute, which will outlast the details.

**What LIV Golf is.** A rival men's league, launched in 2022, funded by the **Public Investment Fund (PIF)** of Saudi Arabia. It signed a number of the world's best players with guaranteed contracts far larger than anything the PGA TOUR offered. The PGA TOUR suspended the players who went.

**Four things that are commonly stated about LIV and are now WRONG:**

| The common claim | The 2026 reality |
| --- | --- |
| "LIV is a 54-hole league" (hence the name) | ❌ **From the 2026 season, all LIV events are 72 holes over four days.** The "54" branding is obsolete. |
| "LIV players get no world-ranking points" | ❌ **LIV was accredited by the Official World Golf Ranking on 3 February 2026** (it had been rejected in 2023). Points go to the **top 10 and ties** only. |
| "PIF will bankroll LIV indefinitely" | ❌ **PIF announced (around 30 April 2026) that it will END its funding of LIV after the 2026 season**, having invested over **$5 billion**. LIV is courting new investors. |
| "The tours merged in 2023" | ❌ **They did not.** |

**That last one is the big one, so be precise about it.** In **June 2023** the PGA TOUR, the DP World Tour, and PIF announced a **framework agreement**, an agreement to try to reach an agreement. It was reported everywhere as a merger. **It was never consummated.** As of 2026, **men's professional golf is still not reunified.** If someone tells you the tours merged, they are repeating a headline about a document that never became a deal.

**Why the world ranking was the real battleground.** The **Official World Golf Ranking** decides who gets into the **majors**, and the majors, as you now know, are run by **neither** tour. So a LIV player could be one of the best golfers alive, earn a fortune, and still slide down a ranking that decided whether he could play at Augusta. **The fight was never really about prize money. It was about access to the four tournaments that neither side controls.** That is why the February 2026 OWGR accreditation mattered far more than its dry name suggests.

---

**How to think about this without being told what to think.**

You will hear two arguments, and both contain something true:

- **"It's sportswashing."** Critics argue Saudi Arabia is using golf to improve its international image and distract from its human-rights record. **This is what the term means**, and it is a serious charge that players were asked about constantly.
- **"Players are independent contractors."** Tour players are not salaried employees. They have always been free agents, and golfers have accepted appearance money from foreign governments and corporations for decades. **Why, players asked, is this the moment it became unacceptable?**

**Your job is not to pick the side you were handed.** It is to notice the actual questions underneath, which are worth more than the golf:

1. **Where does an athlete's money come from, and does that make them responsible for it?**
2. **Does a monopoly league (which is what the PGA TOUR was) deserve to be protected from competition?**
3. **When a story is reported everywhere as settled, "the tours merged!", how would you find out it was not?**

That third question is the one this course keeps asking. **You would find out the same way you found out about the *Golfdom* article: by going and looking at the document.** The framework agreement is public. It says what it says. **Read the thing itself.**

:::reveal Name three things commonly said about LIV Golf that are wrong as of 2026. ||| (1) That it is a 54-hole league, from the 2026 season all LIV events are 72 holes over four days. (2) That its players get no world-ranking points, LIV was accredited by the OWGR on 3 February 2026, with points to the top 10 and ties. (3) That the tours merged, the June 2023 framework agreement was never consummated, and men's professional golf is still not reunified. (Also: PIF announced it will end its funding of LIV after the 2026 season.)

## Sources
- Official World Golf Ranking. (2026, February 3). *OWGR accreditation decision*. https://www.owgr.com/news
- LIV Golf. (n.d.). *About LIV Golf*. https://www.livgolf.com/
- PGA TOUR. (2023, June 6). *PGA TOUR, DP World Tour and PIF announce framework agreement*. https://www.pgatour.com/article/news/latest/2023/06/06/pga-tour-dp-world-tour-pif-framework-agreement`,
    },
    {
      slug: "golf-tours-quiz",
      title: "35 · Check your understanding: tours and leagues",
      section: "Tours & Leagues",
      quiz: {
        passingScore: 70,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which organization owns the PGA Championship and the Ryder Cup?",
            options: ["The PGA TOUR", "The PGA of America", "The USGA", "The R&A"],
            correctIndex: 1,
            explanation:
              "The PGA of America (founded 1916) is the body for 30,000+ working club and teaching professionals. It is NOT the PGA TOUR.",
            sourceLessonSlug: "golf-pga-of-america-vs-pga-tour",
          },
          {
            prompt: "How did the PGA TOUR come into existence?",
            options: [
              "It was founded in 1916 alongside the PGA of America",
              "It was formed in 1968 when a subset of touring professionals broke away from the PGA of America",
              "The USGA created it",
              "It was spun out of The R&A in 2004",
            ],
            correctIndex: 1,
            explanation:
              "The tournament players wanted control of their own tournaments and television money, so they left.",
            sourceLessonSlug: "golf-pga-of-america-vs-pga-tour",
          },
          {
            prompt: "Which body has roughly 30,000 members, most of whom are NOT tournament players?",
            options: ["The PGA TOUR", "The PGA of America", "LIV Golf", "The DP World Tour"],
            correctIndex: 1,
            explanation:
              "They are teaching pros, head pros, and directors of golf, the realistic, well-paid, achievable career in golf, and the one nobody televises.",
            sourceLessonSlug: "golf-pga-of-america-vs-pga-tour",
          },
          {
            prompt: "Which of the four men's majors is run by the PGA TOUR?",
            options: ["The Masters", "The U.S. Open", "The Open Championship", "None of them"],
            correctIndex: 3,
            explanation:
              "The Masters belongs to Augusta National, the PGA Championship to the PGA of America, the U.S. Open to the USGA, and The Open to The R&A. THE PLAYERS is the TOUR's flagship but is not a major, a real structural limit on the TOUR's power.",
            sourceLessonSlug: "golf-the-majors",
          },
          {
            prompt: "What is the correct name of the major run by The R&A?",
            options: ["The British Open", "The Open Championship", "The English Open", "The Royal Open"],
            correctIndex: 1,
            explanation:
              "It is The Open Championship, or simply The Open. It was called The Open before any other tournament existed to be confused with it.",
            sourceLessonSlug: "golf-the-majors",
          },
          {
            prompt: "How many major championships are there in women's golf?",
            options: ["Three", "Four", "Five", "Six"],
            correctIndex: 2,
            explanation:
              "Five, a fact most casual fans do not know, because the women's game is routinely described in the men's terms.",
            sourceLessonSlug: "golf-the-majors",
          },
          {
            prompt: "Which major has a permanent home, played at the same course every year?",
            options: ["The U.S. Open", "The Open Championship", "The Masters", "The PGA Championship"],
            correctIndex: 2,
            explanation: "The Masters is always at Augusta National. The other three rotate.",
            sourceLessonSlug: "golf-the-majors",
          },
          {
            prompt: "The Presidents Cup is contested between the USA and:",
            options: [
              "Europe",
              "An International team from the rest of the world, EXCLUDING Europe",
              "Great Britain and Ireland",
              "Asia only",
            ],
            correctIndex: 1,
            explanation:
              "Europe is excluded because Europe already has the Ryder Cup, which belongs to the PGA of America. The Presidents Cup is the PGA TOUR's own team event, built in the space left over.",
            sourceLessonSlug: "golf-team-golf",
          },
          {
            prompt: "What is unusual about the prize money at the Presidents Cup?",
            options: [
              "It is the largest purse in golf",
              "There is none; proceeds go to charity",
              "Only the winning team is paid",
              "It is paid in world-ranking points",
            ],
            correctIndex: 1,
            explanation:
              "The best players on earth compete ferociously for nothing but the result. For one week, professional golf stops being a profession.",
            sourceLessonSlug: "golf-team-golf",
          },
          {
            prompt: "The Solheim Cup is:",
            options: [
              "Men's USA v Europe",
              "Women's USA v Europe, run by the LPGA",
              "Women's USA v the rest of the world",
              "A mixed team event",
            ],
            correctIndex: 1,
            explanation: "Ryder = men, USA v Europe. Solheim = women, USA v Europe. Presidents = men, USA v rest-of-world excluding Europe.",
            sourceLessonSlug: "golf-team-golf",
          },
          {
            prompt: "How many holes is a LIV Golf event as of the 2026 season?",
            options: ["54 holes over three days", "72 holes over four days", "36 holes", "18 holes"],
            correctIndex: 1,
            explanation:
              "From 2026 all LIV events are 72 holes over four days. The '54' branding, which gave the league its name, is obsolete.",
            sourceLessonSlug: "golf-liv-and-2026",
          },
          {
            prompt: "What is the status of LIV Golf in the Official World Golf Ranking?",
            options: [
              "Still rejected, as it was in 2023",
              "Accredited on 3 February 2026, with points to the top 10 and ties",
              "It has always had full points",
              "It awards more points than the PGA TOUR",
            ],
            correctIndex: 1,
            explanation:
              "The ranking mattered enormously because it decides entry to the MAJORS, which neither tour controls. The fight was about access, not prize money.",
            sourceLessonSlug: "golf-liv-and-2026",
          },
          {
            prompt: "Did the PGA TOUR and LIV/PIF merge?",
            options: [
              "Yes, in June 2023",
              "No, the June 2023 framework agreement was never consummated, and men's golf is still not reunified",
              "Yes, in February 2026",
              "Yes, but it was later reversed",
            ],
            correctIndex: 1,
            explanation:
              "A framework agreement is an agreement to try to reach an agreement. It was reported everywhere as a merger. It never became a deal.",
            sourceLessonSlug: "golf-liv-and-2026",
          },
          {
            prompt: "What did PIF announce around 30 April 2026?",
            options: [
              "That it would double its investment in LIV",
              "That it will END its funding of LIV after the 2026 season, having invested over $5 billion",
              "That it had bought the PGA TOUR",
              "That LIV would return to 54 holes",
            ],
            correctIndex: 1,
            explanation: "LIV is now courting new investors. This is why you must read the date on anything written about this dispute.",
            sourceLessonSlug: "golf-liv-and-2026",
          },
          {
            prompt: "Why did the world ranking become the real battleground in the LIV dispute?",
            options: [
              "Because it determines prize money",
              "Because it decides entry to the majors, which are run by NEITHER tour",
              "Because it sets television schedules",
              "Because it determines Ryder Cup captains",
            ],
            correctIndex: 1,
            explanation:
              "A LIV player could be among the best alive, earn a fortune, and still slide down a ranking that decided whether he could play at Augusta.",
            sourceLessonSlug: "golf-liv-and-2026",
          },
        ],
      },
    },

    // ── Section 6: Opportunities ──────────────────────────────────────────
    {
      slug: "golf-amateur-status",
      title: "36 · Amateur status: the five ways to lose it",
      section: "Opportunities",
      recallContent: [
        {
          prompt: "Did the PGA TOUR and PIF merge in June 2023?",
          answer:
            "No. They announced a framework agreement, an agreement to try to reach an agreement, which was never consummated. Men's professional golf is still not reunified.",
        },
        {
          prompt: "Why was the world ranking the real battleground in the LIV dispute?",
          answer:
            "Because it decides entry to the majors, which are run by neither tour. The fight was about access to the four tournaments neither side controls.",
        },
      ],
      body: `⚠️ **This is the most out-of-date subject in golf, and getting it wrong can cost a teenager a college career.** The **Rules of Amateur Status were substantially rewritten effective 1 January 2022**, and the internet is still full of the old ones. **Everything below is the current rule.**

**Why you should care.** If you want to play **college golf**, you generally need to be an **amateur**. Amateur status is not a trophy; it is **eligibility**. Lose it by accident at 16 and you have damaged something real.

**There are FIVE ways to lose amateur status** (USGA & R&A, 2022). Most write-ups list three. Here are all five:

1. **Accept a prize you are not allowed to accept** (see the money rules below).
2. **Play in a competition as a professional.**
3. **Accept payment for giving instruction** that the Rules disallow.
4. **Be employed as a club professional or a driving-range professional.**
5. **Hold membership of an association for professional golfers.**

**Look closely at #2, because it contains a trap and a gift.**

> **Being a MEMBER of a professional tour is allowed. It is PLAYING in a competition as a professional that ends your amateur status.**

The Rules draw the line at the act, not the affiliation. This surprises nearly everybody, and it is exactly the kind of distinction that gets misreported by people who "know" the rules from ten years ago.

---

**The money rules. Learn these two sentences exactly.**

| Situation | Can an amateur take the prize money? |
| --- | --- |
| A **scratch** competition | **Yes, up to US$1,000** per competition |
| A **handicap** competition | **NO. Not one dollar. Ever.** |

Say that again, because it is the one people trip over: **in a handicap competition an amateur may not accept prize money at all.** Not $50. Not a $20 gift card that is really cash. **Zero.** The logic is straightforward once you see it, a handicap event lets a weak player win, so paying cash for it would turn handicaps into a business.

---

**🟢 Now the good news, and it is genuinely big news for a high-school golfer.**

The 2022 rewrite **legalized nearly everything that used to end careers by accident.** All of the following are **now allowed** for an amateur:

- ✅ **Sponsorship**
- ✅ **Endorsement deals**
- ✅ **NIL** (name, image, and likeness) deals
- ✅ **Expenses**, someone can pay for your travel to a tournament
- ✅ **Free equipment**, a manufacturer can put clubs in your bag

**Read that list again as a 15-year-old golfer.** A local car dealership can sponsor you. A brand can pay you to post about their gear. A club maker can give you a free set. **You can be paid, and remain an amateur, and go and play college golf.** For most of golf's history this was unthinkable, and a great many people still believe it is.

**🔴 And the one thing the 2022 rewrite did NOT liberalize: PAID INSTRUCTION.**

Teaching golf for money is **still restricted**. This is the single most common way a young golfer destroys their own eligibility, precisely *because* they assume the general loosening covered it. **It did not.**

⚠️ And note the sting in the tail: **non-cash compensation counts as payment.** If the range lets you hit free balls in exchange for helping with junior lessons, **that is payment.** No money changed hands and you have still been paid. Nobody thinks of it that way, which is why it catches people.

**So: want to teach golf and stay an amateur? Volunteer. Take nothing, not cash, not free range time, not a discount. The moment you receive value in exchange, you have a problem.**

---

**Reinstatement.** If you do turn pro and want to come back, you can apply to be reinstated as an amateur. **Six months is a recommended minimum waiting period**, and it is **longer for players with a substantial professional record.** There is no single fixed number of years, and anyone who quotes you one is guessing.

**⚠️ The NCAA is a SEPARATE rulebook.** College golf eligibility is governed by the **NCAA**, not by the USGA. The two are different, and **the binding constraint on you is whichever is STRICTER.** Satisfying the Rules of Amateur Status does **not** automatically make you NCAA-eligible.

College athletics is also in genuine flux right now: following the *House* settlement, scholarship limits at opt-in schools have been converted into **roster limits** (for golf, currently 9), and **this is actively being litigated.** So learn the *concept*, **there is a cap, and it is small, and it moves**, and then **check the current number with the actual coach.** Do not trust a number you read in a course, including this one.

:::reveal Can a high-school amateur golfer accept a sponsorship deal, and what is the one thing the 2022 rewrite did NOT allow? ||| Yes, sponsorship, endorsement, NIL, expenses, and free equipment are ALL now allowed for an amateur. The one thing the 2022 rewrite did NOT liberalize is PAID INSTRUCTION: teaching golf for money is still restricted, and non-cash compensation (like free range balls in exchange for helping with lessons) counts as payment. That is the commonest way a young golfer accidentally destroys their own eligibility.

## Sources
- USGA & R&A. (2022). *Rules of Amateur Status*. https://www.usga.org/amateur-status.html
- R&A. (2022). *Rules of Amateur Status*. https://www.randa.org/en/rules-of-amateur-status
- NCAA. (n.d.). *Amateurism and eligibility*. https://www.ncaa.org/sports/2014/10/6/amateurism.aspx`,
    },
    {
      slug: "golf-the-us-open-is-open",
      title: "37 · The U.S. Open is actually open. To you.",
      section: "Opportunities",
      recallContent: [
        {
          prompt: "How much prize money may an amateur accept in a HANDICAP competition?",
          answer:
            "None at all. Not one dollar. In a SCRATCH competition an amateur may accept up to US$1,000 per competition.",
        },
        {
          prompt: "Which rulebook actually governs your college golf eligibility?",
          answer:
            "The NCAA's, a separate rulebook from the USGA's Rules of Amateur Status. The binding constraint is whichever is STRICTER.",
        },
      ],
      body: `**Most sports are closed. You cannot enter the Super Bowl. You cannot enter the NBA Finals. There is no form.**

**Golf is different, and almost nobody realizes how different.**

> ## The U.S. Open — a major championship — is open to ANY professional, and to ANY amateur with a **Handicap Index of 0.4 or better**.
>
> **That is the entire entry requirement. There is a form. There is a fee. You fill it in.**

Nobody has to invite you. No scout has to find you. No agent has to call. **You need a handicap and an entry form**, and then you have to go and shoot the scores.

**And people do it. The USGA accepted a record 10,202 entries for the 2025 U.S. Open** (USGA, 2025).

Sit with that number. **Over ten thousand people entered a major championship**, for **156 spots** in the field. They were not all delusional. Every year, **qualifiers make it through**, and some of them are club professionals, mini-tour players, and amateurs nobody had heard of on Monday.

**How qualifying actually works, two stages:**

| Stage | Format | Roughly where |
| --- | --- | --- |
| **Local Qualifying** | **18 holes** | About **109 sites** across the country |
| **Final Qualifying** | **36 holes in ONE day** | About **13 sites** |

**Read that second row again. Thirty-six holes. In a single day.** It is known in golf as **"Golf's Longest Day,"** and it is one of the most brutal tests in sport: two full rounds, walking, with a place in a major on the line and no second chance. **That is the door.** It is narrow, it is exhausting, and (**crucially) it is not locked.**

---

**The handicap numbers, precisely, because they get misquoted constantly:**

| Championship | Handicap Index limit |
| --- | --- |
| **U.S. Open** | **0.4** |
| **U.S. Amateur** | **0.4** |
| **U.S. Mid-Amateur** | **2.4**, **and you must be 25 or older** |

⚠️ **The commonest error you will meet is people quoting 2.4 for the U.S. Amateur.** That is the **Mid-Amateur** number, and the Mid-Am also has an **age requirement of 25+**, so it is not even available to a high-school player. **Get the number right: 0.4.**

*(This course does not print a handicap limit for the U.S. Women's Amateur. A figure is widely repeated online, but it could not be verified against the USGA's own published conditions, so rather than pass on a number that might be wrong, **go and read the conditions of entry for the year you intend to play**. Which is what you should do for every championship anyway, because these limits are set annually.)*

---

**And there is a second open door, every week: the Monday qualifier.**

Several **PGA TOUR** events run an **open 18-hole qualifier on the Monday of tournament week**, typically with **four spots** in that week's field. Anyone eligible can enter. **You shoot the number, you tee it up on Thursday against the best players in the world.** Players have made their entire careers out of a Monday qualifier, this is a real, used, documented path, not a theoretical one.

---

**Why this lesson exists.**

The history section of this course was, in large part, about **doors being held shut**, by a membership clause, by a leased "private club," by an invitation nobody sent. **This lesson is the other side of that.**

**Golf's flagship national championship has, structurally, the most open front door in American sport.** You do not need permission, a scholarship, a scout, or a connection. **You need a Handicap Index of 0.4 and the entry fee.**

**That number is the whole thing.** It is astonishingly hard to earn, 0.4 means you are effectively a scratch golfer, and you should not pretend otherwise. **But it is a number, and a number is a thing you can go and work on tomorrow.** Nothing about your name, your school, your money, or your zip code stands between you and the entry form.

**Ten thousand two hundred and two people filled it in last year. There is nothing stopping you being 10,203.**

:::reveal What are the entry requirements for the U.S. Open, and how many entries did the USGA accept in 2025? ||| It is open to ANY professional, or any amateur with a Handicap Index not exceeding 0.4, that is the whole requirement, and there is a form. The USGA accepted a record 10,202 entries for the 2025 U.S. Open, competing for 156 spots. Qualifying runs in two stages: 18-hole Local Qualifying at about 109 sites, then Final Qualifying, 36 holes in ONE day, "Golf's Longest Day", at about 13 sites.

## Sources
- USGA. (2025). *U.S. Open championship entries*. https://www.usga.org/usopen.html
- USGA. (n.d.). *U.S. Open qualifying*. https://www.usga.org/usopen/qualifying.html
- USGA. (n.d.). *U.S. Amateur*. https://www.usga.org/usamateur.html
- USGA. (n.d.). *U.S. Mid-Amateur*. https://www.usga.org/mid-amateur.html`,
    },
    {
      slug: "golf-the-ladders",
      title: "38 · The ladders: how a player actually turns pro",
      section: "Opportunities",
      recallContent: [
        {
          prompt: "What Handicap Index do you need to enter the U.S. Open or the U.S. Amateur?",
          answer:
            "0.4 or better. (2.4 is the U.S. MID-Amateur, which also requires you to be 25 or older, quoting 2.4 for the U.S. Amateur is the commonest error.)",
        },
        {
          prompt: "What is \"Golf's Longest Day\"?",
          answer:
            "Final Qualifying for the U.S. Open: 36 holes in a single day, at about 13 sites, with a place in a major on the line.",
        },
      ],
      body: `Nobody is drafted in golf. **There is no draft.** So how does a player actually get from a high-school team to a tour card? Through a **ladder**, and the rungs are public, numbered, and identical for everyone.

**The men's ladder:**

| Rung | What it is | How you get through |
| --- | --- | --- |
| **College golf** | NCAA competition | Recruiting, walk-on tryouts |
| **PGA TOUR University** | Ranks graduating college seniors | Top finishers earn status directly, **no Q-School required** |
| **Q-School** | The qualifying tournament | **Top 5** at Final Stage earn PGA TOUR cards |
| **Korn Ferry Tour** | The official feeder tour | **20 PGA TOUR cards per season** |
| **PGA TOUR** | The destination |, |
| **Monday qualifiers** | A side door, every week | ~**4 spots** per event, open entry |

**The women's ladder:**

| Rung | What it is | How you get through |
| --- | --- | --- |
| **College golf** | NCAA competition | Recruiting, walk-on |
| **Epson Tour** | The LPGA's official feeder tour | **Top 15** earn **LPGA cards** |
| **LPGA Q-Series** | The qualifying series | **Top 25 and ties** earn LPGA cards |
| **LPGA Tour** | The destination |, |

**And the rung nobody tells teenagers about: PGA TOUR Champions, for players aged 50 and over.** Golf is one of the very few sports with a **second professional career** waiting on the other side of middle age. Players who never made it at 30 have made a genuine living at 52. **In golf, "too old" arrives much later than you have been led to believe, and then it un-arrives.**

---

**Now look at the numbers honestly, because this course will not lie to you.**

**20 Korn Ferry cards a season. Top 5 at Q-School.** Those are the real widths of the door. Thousands of excellent players, players far better than anyone at your school, are competing for a couple of dozen places a year. **Tour golf is a lottery that you can improve your odds at, but it remains a lottery.**

**Three things follow from that, and they are the real content of this lesson:**

**1. The ladder is public, which is rarer than you think.** Compare it to the sports where a scout has to notice you. Here, **nobody's opinion of you matters.** There is a leaderboard. You shoot the scores or you do not. For a kid from a school nobody recruits at, from a family with no connections, **a system that ignores everything except your score is the fairest deal on offer anywhere in sport.** Golf's history, as you now know, was viciously exclusionary, and the *scoring system*, at least, never was. **A number cannot tell what you look like.**

**2. Do not bet your whole life on the top rung.** Every rung of that ladder passes through **college golf**, and college golf comes with **a degree**. Chase the tour with everything you have, **and finish the degree**, because the same sport that offers you a lottery ticket also offers you 30,000 stable jobs (Lesson 39), and the ladder to *those* runs through exactly the same place.

**3. The odds get much better when you widen the definition of "making it."** "Playing on the PGA TOUR" is a lottery. **"Earning a living in golf" is a career with an application process.** Those are completely different propositions and people conflate them constantly, usually to their own cost, and usually at about 22.

:::reveal How many PGA TOUR cards does the Korn Ferry Tour award per season, and how many players earn cards from Q-School Final Stage? ||| Twenty Korn Ferry cards per season, and the top 5 at Q-School Final Stage. Those are the real widths of the door, which is why the lesson is to chase it AND finish the degree. On the women's side: the top 15 on the Epson Tour and the top 25 and ties at LPGA Q-Series earn LPGA cards.

## Sources
- PGA TOUR. (n.d.). *Korn Ferry Tour*. https://www.pgatour.com/korn-ferry-tour
- PGA TOUR. (n.d.). *PGA TOUR University*. https://www.pgatour.com/university
- PGA TOUR. (n.d.). *PGA TOUR Champions*. https://www.pgatour.com/champions
- LPGA. (n.d.). *Epson Tour*. https://www.epsontour.com/
- LPGA. (n.d.). *Q-Series*. https://www.lpga.com/qualifying`,
    },
    {
      slug: "golf-jobs-in-golf",
      title: "39 · The 30,000 jobs nobody televises",
      section: "Opportunities",
      recallContent: [
        {
          prompt: "How does golf differ from sports where a scout has to notice you?",
          answer:
            "There is no draft and no scout. There is a leaderboard and a public ladder. Nobody's opinion of you matters, you shoot the scores or you do not. A number cannot tell what you look like.",
        },
        {
          prompt: "What is PGA TOUR Champions, and why does it matter?",
          answer:
            "A tour for players aged 50 and over. Golf is one of very few sports offering a second professional career on the far side of middle age.",
        },
      ],
      body: `**Start with the size of the thing, because most people badly underestimate it.**

| The golf economy (year-end 2025) | |
| --- | --- |
| Americans who play **on a course** | **29.1 million** |
| Total golfers **including off-course** (Topgolf, simulators, ranges) | **48.1 million** |
| **Golf courses** in the US | **~16,000**, at about **14,000 facilities** |
| Share of US facilities **open to the public** | **~75%** |

*(Use the right number for the right claim. **29.1 million** is the figure for "plays golf on a golf course." The 48.1M figure includes everyone who has swung a club at a Topgolf, and quoting it as "golfers" is how statistics get abused.)*

**Now do the arithmetic that changes your life.** Roughly **fourteen thousand facilities**, each one of which is **a small business** that needs to be run, maintained, staffed, marketed, and supplied. That is **an industry**, not a game, and about **three-quarters of it is open to the public**, which means it is open to *you*.

**And every single one of those businesses has jobs in it that have nothing to do with how far you hit a driver.**

| Job | What it actually is | How you get in |
| --- | --- | --- |
| **PGA Professional** | Teaching, running a facility, managing golf operations. **The 30,000-member career** from Lesson 31. | The PGA of America's education/certification program |
| **Teaching professional / coach** | Lessons, junior programs, academies | Certification, apprenticeship |
| **Club fitter** | Matching clubs to swings. Technical, growing, and well paid. | Manufacturer training, retail apprenticeship |
| **Superintendent / turf management** | Growing grass at a professional standard. **This is agronomy, a science degree.** | Turfgrass programs (many universities offer one) |
| **General manager / director of golf** | Running the business | Hospitality/business route |
| **Caddie** | The classic entry point (see below) | Show up |
| **Rules official** | Administering competitions | Rules certification through the USGA/R&A |
| **Golf media** | Writing, video, social, broadcast, analytics | Portfolio |
| **Equipment / retail** | Sales, fitting, e-commerce | Retail entry |
| **Course architecture** | Designing courses | Design/landscape architecture, apprenticeship |

**Two of those deserve a closer look, because they are the ones teenagers can start immediately.**

**Caddying is the single best first job in golf, and it is wildly undervalued.**
- **You get paid to be on a golf course.** Frequently in cash, frequently well, and often the same day.
- **You learn strategy from the inside**, how good players actually think, which is Section 3 delivered live, for free, while being paid.
- **You meet adults.** A caddie spends four uninterrupted hours walking beside business owners, lawyers, contractors, and hiring managers, having an actual conversation. **There is no other job available to a 15-year-old that puts you in that room.** Ask any adult how they got their break and a startling number will say "someone I met."
- **Caddie scholarship programs exist**, and they are real, substantial, and chronically under-applied-for.

**Turf management is the job nobody thinks of and the industry is always short of.** Somebody has to keep 16,000 courses alive, and they are **agronomists**, soil scientists with a payroll. If you like biology or chemistry and you like being outdoors, **there is a degree, and there is a hiring shortage, and there is no lottery.**

---

**And if the money is the barrier: First Tee.**

**First Tee was founded in 1997** by five organizations that between them own most of American golf: **the LPGA, the Masters Tournament (Augusta National), the PGA of America, the PGA TOUR, and the USGA**, under the leadership of **Tim Finchem** (First Tee, n.d.).

Its purpose is to get golf to young people who otherwise could not access it, coaching, clubs, and course access, built around a youth-development curriculum. **If cost is what is standing between you and this sport, this is the organization built specifically to remove that barrier, and it was built by the people who own the sport.**

**Notice the irony, and do not let it be lost on you.** The **Masters Tournament**, Augusta National, which did not invite a Black player until 1975 and did not admit a Black member until 1990, is a **founding partner of the program whose entire job is to hand golf to kids who were locked out of it.** History does not resolve into a clean story. **Take the access. Then remember exactly what it cost to pry the door open, because you learned that in Section 4.**

:::reveal How many Americans play golf on a course, roughly how many facilities are there, and what makes caddying the best first job in golf? ||| 29.1 million Americans play on a course (48.1 million including off-course venues like Topgolf), across about 16,000 courses at ~14,000 facilities, roughly 75% of which are open to the public. Caddying is the best first job because you are paid to be on a course, you learn strategy from the inside for free, caddie scholarship programs exist, and you spend four uninterrupted hours walking beside business owners and hiring managers, which no other job available to a 15-year-old does.

## Sources
- National Golf Foundation. (2025). *Golf participation in the U.S.* https://www.ngf.org/golf-industry-research/
- First Tee. (n.d.). *Our history*. https://firsttee.org/about/
- PGA of America. (n.d.). *Become a PGA Professional*. https://www.pga.org/education/
- Golf Course Superintendents Association of America. (n.d.). *Careers in golf course management*. https://www.gcsaa.org/`,
    },
    {
      slug: "golf-entrepreneurs",
      title: "40 · Build something: the entrepreneur's golf course",
      section: "Opportunities",
      recallContent: [
        {
          prompt: "Which five organizations founded First Tee in 1997?",
          answer:
            "The LPGA, the Masters Tournament (Augusta National), the PGA of America, the PGA TOUR, and the USGA, under Tim Finchem.",
        },
        {
          prompt: "Why is turf management a job worth knowing about?",
          answer:
            "Somebody has to keep 16,000 courses alive, and they are agronomists, soil scientists with a payroll. There is a degree, a hiring shortage, and no lottery.",
        },
      ],
      body: `**Every one of the barriers described in this course is also a business.** That is not a cynical observation; it is how most useful businesses start. **Somebody could not get something they needed, so they built it.**

**Bill Powell is the case study, and he is in Section 4 for a reason.** Barred from playing on other people's golf courses, he **built his own, Clearview.** He did not campaign, or wait, or accept it. **He acquired land and constructed a golf course.** His daughter **Renee Powell** went on to the LPGA and, in 1996, became the first African American woman to become a PGA member. **That is what building the thing you were denied looks like across two generations.**

You do not need to build a golf course. But you should learn the move.

---

**🟢 Start here: the 2022 rule change is a live, current, unexploited opportunity for you.**

Go back to Lesson 36 and read the allowed list again: **sponsorship, endorsement, NIL, expenses, free equipment, all legal for an amateur since 1 January 2022.**

**Almost no high-school golfer is acting on this**, because most of them (and most of their coaches, and most of their parents) still believe the old rules. **You now know something most of your competition does not.** Concretely, and starting this month:

- **Approach a local business**, a car dealership, a restaurant, an insurance agency, an orthodontist. They sponsor the baseball team already. **Offer them a season: your name, your results, your social posts, a logo on your bag.** Ask for equipment, tournament entry fees, and travel costs.
- **Build the thing a sponsor is actually buying**: an audience. Post your rounds. Film your practice. **Teach what you are learning as you learn it**, a "learning to break 90" account is more compelling than a highlight reel, and it is honest.
- **Keep a one-page record**: your scores, your Handicap Index, your events, your following. **That is a pitch deck**, and no other 16-year-old golfer in your county has one.
- ⚠️ **And stay inside the line: do NOT take money for instruction, and do NOT take free range balls in exchange for helping with lessons.** That is the one door that is still closed, and non-cash payment is still payment.

---

**Businesses a young person can genuinely start in golf:**

| Business | Why it works |
| --- | --- |
| **Ball recovery and resale** | Golfers lose millions of balls into ponds and woods. **Collect, clean, sort, resell.** Near-zero startup cost. Ask permission first. |
| **Club cleaning / bag service** | A simple, repeatable service at any club, sold to members who value time. |
| **Junior clinics** ⚠️ | Real demand, **but note the amateur-status trap**: charging for instruction ends your amateur status. **Run these AFTER you have decided about college, or run them as a volunteer.** |
| **Club fitting / repair** | Regripping is learnable in an afternoon, needs almost no capital, and every golfer needs it. Grows into a real trade. |
| **Golf media** | Nobody covers your local junior scene. **Cover it.** Publishing is free and a portfolio is the qualification. |
| **Simulator / off-course golf** | **48.1M golfers vs 29.1M on-course**, the gap between those numbers *is* the growth market. |
| **Tournament operations** | Charity scrambles need people who can run them. Learn it once, get hired forever. |
| **Course maintenance crew** | Hiring now, teaches the industry from the ground up, and connects directly to turf management. |

---

**The one that is hiding in plain sight.** Look at those two participation numbers one more time: **48.1 million total golfers, 29.1 million on a course.** **Nineteen million people are engaging with golf without going near a golf course.** They are at Topgolf, in simulators, on ranges.

**That gap is the single biggest, clearest, most legible opportunity in the sport**, and it exists because of everything you read in Section 4, golf spent a century building an industry around **exclusive, expensive, hard-to-access places**, and a whole generation now wants the game **without the clubhouse.** The businesses that meet those 19 million people where they actually are will be the ones that matter.

**You have read this course's history section. You know precisely why that clubhouse feels the way it feels, and who it was designed to keep out.** That makes you unusually well qualified to build the version that does not.

:::reveal What is the current, under-exploited opportunity the 2022 amateur-status rewrite created for a high-school golfer, and what is the one line you must not cross? ||| Sponsorship, endorsement, NIL, expenses, and free equipment are all legal for an amateur now, so you can approach local businesses for a sponsorship deal covering equipment, entry fees, and travel, and almost no high-school golfer is doing it because most still believe the old rules. The line you must not cross: do NOT accept payment for instruction, including non-cash payment like free range balls for helping with lessons.

## Sources
- USGA & R&A. (2022). *Rules of Amateur Status*. https://www.usga.org/amateur-status.html
- National Golf Foundation. (2025). *Golf participation in the U.S.* https://www.ngf.org/golf-industry-research/
- First Tee. (n.d.). *Our history*. https://firsttee.org/about/`,
    },
    {
      slug: "golf-opportunity-drill",
      title: "41 · Practice: your own next step",
      section: "Opportunities",
      recallContent: [
        {
          prompt: "What does the gap between 48.1 million and 29.1 million golfers represent?",
          answer:
            "About 19 million people engaging with golf without going near a golf course, at Topgolf, in simulators, on ranges. It is the sport's clearest growth market.",
        },
        {
          prompt: "Who was Bill Powell?",
          answer:
            "Barred from playing on other people's courses, he built his own, Clearview Golf Club. His daughter Renee Powell reached the LPGA and became the first African American woman PGA member in 1996.",
        },
      ],
      body: `The whole point of this section is that golf's doors have numbers on them, and a number is a thing you can work toward. Fill in each blank. **These are the specific facts that turn "I like golf" into a plan.**`,
      exercise: {
        instructions:
          "Fill in each blank. Every answer here is a real, checkable number or name, the raw material of an actual next step.",
        items: [
          {
            prompt: "There are ___ ways to lose your amateur status under the current Rules.",
            answer: "5",
            accept: ["five"],
            explanation:
              "Accept a disallowed prize; play in a competition as a professional; accept payment for disallowed instruction; be employed as a club/range pro; hold membership of an association for professional golfers. Most write-ups list only three.",
          },
          {
            prompt: "The one thing the 2022 amateur-status rewrite did NOT liberalize is paid ___.",
            answer: "instruction",
            accept: ["teaching", "instruction", "coaching"],
            explanation:
              "And non-cash compensation, like free range balls for helping with lessons, still counts as payment. This is the commonest way a young golfer destroys their eligibility.",
          },
          {
            prompt: "In a SCRATCH competition an amateur may accept up to US$___ in prize money.",
            answer: "1000",
            accept: ["1,000", "$1000", "$1,000", "1000 dollars", "one thousand"],
            explanation: "And in a HANDICAP competition, an amateur may not accept prize money at all, not one dollar.",
          },
          {
            prompt: "To enter the U.S. Open as an amateur you need a Handicap Index of ___ or better.",
            answer: "0.4",
            accept: ["0.4", ".4"],
            explanation:
              "The same limit as the U.S. Amateur. (2.4 is the U.S. MID-Amateur, which also requires you to be 25 or older.)",
          },
          {
            prompt: "The USGA accepted a record ___ entries for the 2025 U.S. Open.",
            answer: "10202",
            accept: ["10,202", "10202"],
            explanation: "Over ten thousand people, competing for 156 spots. There is a form, and you can fill it in.",
          },
          {
            prompt: "U.S. Open Final Qualifying is ___ holes in a single day, known as Golf's Longest Day.",
            answer: "36",
            accept: ["thirty-six", "36 holes"],
            explanation: "Two full rounds, walking, with a place in a major on the line and no second chance.",
          },
          {
            prompt: "The Korn Ferry Tour awards ___ PGA TOUR cards per season.",
            answer: "20",
            accept: ["twenty"],
            explanation: "And the top 5 at Q-School Final Stage earn cards. Those are the real widths of the door.",
          },
          {
            prompt: "The PGA of America has more than ___ thousand members, most of whom are working club and teaching pros, not tournament players.",
            answer: "30",
            accept: ["thirty", "30,000", "30000"],
            explanation:
              "This is the realistic, salaried, achievable career in golf, and the one nobody televises.",
          },
          {
            prompt: "About ___ million Americans play golf on an actual golf course.",
            answer: "29.1",
            accept: ["29.1", "29", "29.1 million"],
            explanation:
              "48.1 million including off-course venues like Topgolf and simulators. Use the right number for the right claim.",
          },
          {
            prompt: "The program founded in 1997 by the LPGA, the Masters, the PGA of America, the PGA TOUR and the USGA to give young people access to golf is called ___ Tee.",
            answer: "first",
            accept: ["first", "first tee"],
            explanation:
              "If cost is the barrier between you and this sport, First Tee is the organization built specifically to remove it.",
          },
        ],
      },
    },
    {
      slug: "golf-opportunities-quiz",
      title: "42 · Check your understanding: opportunities",
      section: "Opportunities",
      quiz: {
        passingScore: 70,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How many ways are there to lose your amateur status under the current Rules?",
            options: ["Two", "Three", "Five", "Seven"],
            correctIndex: 2,
            explanation:
              "Five, most write-ups list only three. Accept a disallowed prize; play in a competition as a professional; accept payment for disallowed instruction; be employed as a club/range pro; hold membership of an association for professional golfers.",
            sourceLessonSlug: "golf-amateur-status",
          },
          {
            prompt: "Which of these is NOT allowed for an amateur under the 2022 Rules?",
            options: [
              "Signing a sponsorship or an NIL endorsement deal",
              "Accepting free equipment from a manufacturer",
              "Accepting payment for giving golf instruction",
              "Having your tournament travel expenses paid",
            ],
            correctIndex: 2,
            explanation:
              "Paid instruction is the ONE thing the 2022 rewrite did not liberalize, and non-cash payment (free range balls for helping with lessons) still counts as payment.",
            sourceLessonSlug: "golf-amateur-status",
          },
          {
            prompt: "How much prize money may an amateur accept in a HANDICAP competition?",
            options: ["Up to $1,000", "Up to $500", "None at all", "Unlimited"],
            correctIndex: 2,
            explanation:
              "Not one dollar. The $1,000 cap applies only in SCRATCH competitions. A handicap event lets a weak player win, so paying cash would turn handicaps into a business.",
            sourceLessonSlug: "golf-amateur-status",
          },
          {
            prompt: "Under the current Rules, being a MEMBER of a professional tour:",
            options: [
              "Immediately ends your amateur status outright",
              "Is fine; only PLAYING as a pro ends it",
              "Is completely impossible for any amateur",
              "Requires written USGA permission first",
            ],
            correctIndex: 1,
            explanation: "The Rules draw the line at the act, not the affiliation. This surprises nearly everybody.",
            sourceLessonSlug: "golf-amateur-status",
          },
          {
            prompt: "Which rulebook actually governs your college golf eligibility?",
            options: [
              "The USGA's own Rules of Amateur Status",
              "The NCAA's; the stricter book always binds",
              "The R&A's Rules of Amateur Status only",
              "The PGA TOUR's player eligibility rules",
            ],
            correctIndex: 1,
            explanation:
              "Satisfying the Rules of Amateur Status does NOT automatically make you NCAA-eligible. And college eligibility rules are currently being litigated, so check the current number with the actual coach.",
            sourceLessonSlug: "golf-amateur-status",
          },
          {
            prompt: "What is the entry requirement for an amateur to enter the U.S. Open?",
            options: [
              "A personal invitation from the USGA committee",
              "A Handicap Index of 0.4 or better, plus the fee",
              "A top-100 spot in the world golf ranking",
              "A funded college golf scholarship offer",
            ],
            correctIndex: 1,
            explanation:
              "That is the entire requirement. Nobody has to invite you, no scout has to find you. Golf's flagship national championship has the most open front door in American sport.",
            sourceLessonSlug: "golf-the-us-open-is-open",
          },
          {
            prompt: "How many entries did the USGA accept for the 2025 U.S. Open?",
            options: ["About 500", "About 2,000", "A record 10,202", "About 40,000"],
            correctIndex: 2,
            explanation: "Over ten thousand people, competing for 156 spots in the field. Qualifiers make it through every year.",
            sourceLessonSlug: "golf-the-us-open-is-open",
          },
          {
            prompt: "What is \"Golf's Longest Day\"?",
            options: [
              "The single 18-hole Local Qualifying round",
              "U.S. Open Final Qualifying: 36 holes in a day",
              "The dramatic final round of the Masters",
              "A 72-hole LIV Golf event over a full week",
            ],
            correctIndex: 1,
            explanation: "Two full rounds, walking, at about 13 sites, with a place in a major on the line and no second chance.",
            sourceLessonSlug: "golf-the-us-open-is-open",
          },
          {
            prompt: "A player quotes you 2.4 as the Handicap Index limit for the U.S. Amateur. Are they right?",
            options: [
              "Yes, 2.4 is exactly the correct limit",
              "No, the U.S. Amateur limit is 0.4, not 2.4",
              "No, there is no handicap limit at all",
              "Yes, but only for players under age 18",
            ],
            correctIndex: 1,
            explanation:
              "This is the commonest error you will meet, and the Mid-Am's age requirement means it is not even available to a high-school player.",
            sourceLessonSlug: "golf-the-us-open-is-open",
          },
          {
            prompt: "How many PGA TOUR cards does the Korn Ferry Tour award per season?",
            options: ["5", "20", "50", "125"],
            correctIndex: 1,
            explanation:
              "Twenty, and the top 5 at Q-School Final Stage. Thousands of excellent players compete for a couple of dozen places a year. Tour golf is a lottery you can improve your odds at.",
            sourceLessonSlug: "golf-the-ladders",
          },
          {
            prompt: "On the women's ladder, what does finishing in the top 15 on the Epson Tour earn you?",
            options: ["A Korn Ferry card", "An LPGA card", "A Solheim Cup place", "Nothing automatic"],
            correctIndex: 1,
            explanation: "The Epson Tour is the LPGA's official feeder tour. LPGA Q-Series awards cards to the top 25 and ties.",
            sourceLessonSlug: "golf-the-ladders",
          },
          {
            prompt: "PGA TOUR Champions is for players aged:",
            options: ["Under 25", "Over 40", "50 and over", "60 and over"],
            correctIndex: 2,
            explanation:
              "Golf is one of very few sports offering a genuine second professional career on the far side of middle age.",
            sourceLessonSlug: "golf-the-ladders",
          },
          {
            prompt: "About how many Americans play golf ON A COURSE?",
            options: ["10.5 million", "29.1 million", "48.1 million", "75 million"],
            correctIndex: 1,
            explanation:
              "48.1 million is the total INCLUDING off-course venues like Topgolf and simulators. Quoting that as 'golfers' is how statistics get abused.",
            sourceLessonSlug: "golf-jobs-in-golf",
          },
          {
            prompt: "Which five organizations founded First Tee in 1997?",
            options: [
              "The World Golf Foundation entirely on its own",
              "The LPGA, Masters, PGA of America, PGA TOUR, USGA",
              "The USGA and The R&A, golf's two rule-makers",
              "LIV Golf together with the modern PGA TOUR",
            ],
            correctIndex: 1,
            explanation:
              "Founded under Tim Finchem. Note the irony: Augusta National, which did not invite a Black player until 1975, is a founding partner of the program built to hand golf to kids who were locked out of it.",
            sourceLessonSlug: "golf-jobs-in-golf",
          },
          {
            prompt: "What does the gap between 48.1 million and 29.1 million golfers represent?",
            options: [
              "A simple statistical counting error",
              "About 19 million off-course-only players",
              "Players who have quit the sport for good",
              "Golfers who live entirely outside the US",
            ],
            correctIndex: 1,
            explanation:
              "They are at Topgolf, in simulators, on ranges, a generation that wants the game without the clubhouse. Having read Section 4, you know exactly why that clubhouse feels the way it does.",
            sourceLessonSlug: "golf-entrepreneurs",
          },
        ],
      },
    },
  ],
};
