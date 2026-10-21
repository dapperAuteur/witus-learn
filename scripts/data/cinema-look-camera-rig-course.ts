import type { AuthoredCourse } from "./authored-course";

// "Megalodon: Cinema-look camera rig" (Careers & Media, also listed in Sports and Trade Skills).
// Slug `cinema-look-camera-rig`. The slug leaves out "Megalodon" on purpose: the brief (section 7)
// says to drop the nickname from the title if it proves to be a registered trademark for cameras or
// broadcast services, and a slug is stable forever, so only the title would change.
// Series `the-crew-behind-the-show` ("The Crew Behind the Show"), code CREW, position 04; CREW-01 is
// `stage-and-broadcast-rigging`, CREW-02 `sound-craft`, CREW-03 `light-on-set`, and CREW-05 (arena
// transmission) follows. `broadcasting-break-in` stays outside the series and links by lesson.
//
// RESEARCH TIER 2 (brief section 3): RF and FCC licensing, lithium batteries, and money.
// Brief:    cloud-briefs/crew-04/00-approved-brief.md (approved by BAM 2026-10-21: public, CREW-04,
//           held for a qualified reviewer; the business of renting gear out is CREW-06 and stays out).
// Research: cloud-briefs/crew-04/research/ (fetched 2026-10-21). Only its [V] lines are asserted.
//           Its [I] lines appear only with their reasoning shown in the lesson. Its [A] lines (the
//           circle of confusion in the depth-of-field example) are stated as assumptions. Nothing in
//           00-corrections.md is taught, except as a named misconception followed by its correction
//           (lessons 2, 4, 6, 11, 12, 13).
//
// BUILD STATUS: this file holds sections 1 to 4 of the brief's outline (the look, the camera body,
// lenses, the gimbal). Sections 5 to 8 (wireless video, joining the show, troubleshooting, builds and
// compromises) and the final quiz come in the next session. Until then the section 4 quiz is the last
// quiz lesson, so `pnpm audit:course --spec` reads it as the final and reports it as below the final's
// spec; that finding clears when the final lands.
//
// VISIBILITY: PUBLIC, and HELD ("Coming soon") until a NAMED qualified reviewer, for example a
// broadcast engineer in charge or an RF and camera specialist, has read every lesson marked QR with
// authority to change or cut it. The publishHoldReason in scripts/seed-courses.ts says so. Before
// release, also confirm "Megalodon" is not a registered trademark for cameras or broadcast services
// (brief section 7; research check `megalodon-trademark`).
//
// MARKED LESSONS. Each starts its body with a "> **Before release:**" line naming who must act.
//   QR: 3 (worked depth-of-field figures rest on an assumed circle of confusion), 6 (the pack explains
//   rolling and global shutters without a source), 7 (frame sync and converters are engineering
//   judgment), 8 (external power and lithium batteries), 12 (dated prices), 14 (the balance routine
//   is field practice with no maker's source), 16 (gimbal modes and sideline working practice are
//   not in the pack at all).
//   Unmarked: 1, 2, 4, 5, 9, 10, 11, 13, 15.
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source): every source in sections 1 to 4
// is Tier B, link only, never rehost: trade press (Sports Video Group, CP Communications, Awful
// Announcing, Sportico via Yahoo Finance, American Cinematographer, Newsshooter) and maker and
// retailer pages (Sony, DJI, Sigma, Blackmagic Design, AJA, Cyanview, Core SWX, Indipro, SmallHD,
// Portkeys, Focus Camera, Lensrentals, AbelCine). No figures are embedded.
//
// PRICES are the ones read on October 21, 2026 (research file 04) and every lesson that gives one says
// so. Lesson 12 is marked QR so the prices are re-read before release.
//
// STANDARDS: unmapped for now (BACKLOG entry in scripts/check-standards-coverage.ts).
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts):
//  - L8: the bit depth and color sampling of the FX3's HDMI output (Sony's spec page does not say).
//  - L16: gimbal modes, which no source in the pack describes.
//  - L16: sideline working practice for a handheld specialty operator (where to stand, spotting),
//    which no source in the pack describes.
//
// House style, matching stage-and-broadcast-rigging-course.ts: `section` on every lesson; flush-left
// single-line `:::reveal q ||| a`; recallContent from the second teaching lesson on, quizzing the
// lesson before; an APA 7 `## Sources` block on every teaching lesson with a locator on every entry; a
// quiz per section pooled to round(words / 35), clamped 40 to 100, serving 5, passing 80, shuffled.
// Option lengths are balanced within each question. American spelling in prose; quotations keep their
// own spelling. No em or en dashes anywhere.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const RETRIEVED = "Retrieved October 21, 2026, from";

// Trade press and history
const KEELEY_2020 =
  "Keeley, S. (2020, December 20). *Fox broke out 8K end zone cameras for the Washington-Seattle NFL game*. Awful Announcing. https://awfulannouncing.com/fox/fox-8k-handheld-end-zone-dlsr-cameras-washington-seattle.html";
const COSTA_2020 =
  "Costa, B. (2020, December 22). *Fox Sports worked a live mirrorless camera into an NFL broadcast and it caught viewers' attention*. CP Communications. https://cpcomms.com/fox-sports-worked-a-live-mirrorless-camera-into-an-nfl-broadcast-and-it-caught-viewers-attention/";
const DACHMAN_2021 =
  "Dachman, J. (2021, January 8). *NFL playoffs 2021: Fox Sports boosts Super-Mos, PylonCams and brings back \"Megalodon\" for postseason*. Sports Video Group. https://www.sportsvideo.org/2021/01/08/nfl-playoffs-2021-fox-sports-boosts-super-mos-pyloncams-and-brings-back-megalodon-for-postseason/";
const FELDMAN_2021 =
  "Feldman, J. (2021, January 24). *\"It's not an 8K camera, it's an $8k camera\": Meet the man behind FOX's broadcast sensation*. Sportico, via Yahoo Finance. https://finance.yahoo.com/news/not-8k-camera-8k-camera-190354940.html";
const CP_2021 =
  "CP Communications. (2021, March 9). *FOX Deportes debuts \"Megalodon\" on live Liga MX matches*. https://cpcomms.com/fox-deportes-debuts-megalodon-on-live-liga-mx-matches/";
const SVG_2021 =
  "Sports Video Group. (2021, May 7). *Marquee Sports Network becomes first to use \"Megalodon\" camera on MLB broadcast*. https://www.sportsvideo.org/2021/05/07/marquee-sports-network-becomes-first-to-use-megalodon-camera-on-mlb-broadcast/";
const COSTA_2021 =
  "Costa, B. (2021, May 20). *BaylorVision deploys its own version of \"Megalodon\" on live broadcast of NCATA national championship*. Sports Video Group. https://www.sportsvideo.org/2021/05/20/baylorvision-deploys-its-own-version-of-megalodon-on-live-broadcast-of-ncata-national-championship/";
const KERSCHBAUMER_2021 =
  "Kerschbaumer, K., Dachman, J., Costa, B., & Hernandez, K. (2021, June 29). *The big picture: Inside the shallow-depth-of-field movement and why it is here to stay*. Sports Video Group. https://www.sportsvideo.org/2021/06/29/the-big-picture-inside-the-shallow-depth-of-field-movement-and-why-it-is-here-to-stay/";
const MROZEK_2021 =
  "Mrozek, C. (2021, September 20). A whole new ballgame. *American Cinematographer*. https://theasc.com/article/whole-new-ballgame/";
const HERNANDEZ_2026 =
  "Hernández, K. (2026, July 13). *Netflix christens its first Home Run Derby with new presentation of slugfest in South Philly*. Sports Video Group. https://www.sportsvideo.org/2026/07/13/netflix-christens-first-home-run-derby-with-new-presentation-of-slugfest-in-south-philly/";
const COSTA_2026 =
  "Costa, B. (2026, August 13). *MLB at Field of Dreams returns as Netflix joins the effort, leans into cinematic look at newly permanent ballpark*. Sports Video Group. https://www.sportsvideo.org/2026/08/13/mlb-at-field-of-dreams-returns-as-netflix-joins-the-effort-leans-into-cinematic-look-at-newly-permanent-ballpark/";

// Cameras
const SONY_SPECS = `Sony. (n.d.-b). *ILME-FX3 help guide: Specifications*. ${RETRIEVED} https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000886922.html`;
const SONY_TIMECODE = `Sony. (n.d.-a). *ILME-FX3 help guide: Matching the time code with other devices*. ${RETRIEVED} https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000888835.html`;
const ALLARD_2020 =
  "Allard, M. (2020, November 18). *Sony FX6: Is this the camera you have been waiting for?* Newsshooter. https://www.newsshooter.com/2020/11/18/sony-fx6-is-this-the-camera-you-have-been-waiting-for/";
const ABELCINE = `AbelCine. (n.d.). *RED Digital Cinema KOMODO-X 6K S35 global shutter camera (Canon RF)* [Product page]. ${RETRIEVED} https://www.abelcine.com/buy/cameras-accessories/digital-cinema-cameras/red-digital-cinema-komodo-x-6k-s35-global-shutter-camera-canon-rf`;
const FOCUS_FX3A = `Focus Camera. (n.d.-a). *Sony Alpha FX3A 4K compact full-frame cinema digital camera body* [Product page]. ${RETRIEVED} https://focuscamera.com/products/sony-ilmefx3a-cameras-mirrorless-cameras`;
const FOCUS_FX30 = `Focus Camera. (n.d.-b). *Sony FX30 Super 35 camera (body only)* [Product page]. ${RETRIEVED} https://focuscamera.com/products/sony-ilmefx30b-cameras-point-shoot-cameras`;
const FOCUS_FX6 = `Focus Camera. (n.d.-c). *Sony FX6 Cinema Line full-frame camera body* [Product page]. ${RETRIEVED} https://focuscamera.com/products/sony-ilmefx6v-camcorders-professional-camcorders`;
const LENSRENTALS_FX3 = `Lensrentals. (n.d.-a). *Rent a Sony FX3 (body only)*. ${RETRIEVED} https://www.lensrentals.com/rent/sony-fx3-body-only`;
const DJI_RONIN_4D = `DJI. (n.d.-e). *DJI Ronin 4D* [Store page]. ${RETRIEVED} https://store.dji.com/product/dji-ronin-4d`;

// Signal, control and power
const BLACKMAGIC = `Blackmagic Design. (n.d.). *Micro converters* [Product page]. ${RETRIEVED} https://www.blackmagicdesign.com/products/microconverters`;
const AJA_FS_MINI = `AJA Video Systems. (n.d.). *FS-Mini* [Product page]. ${RETRIEVED} https://www.aja.com/products/fs-mini`;
const CYANVIEW_ALPHA = `Cyanview. (n.d.-a). *Sony Alpha* [Support documentation]. ${RETRIEVED} https://support.cyanview.com/docs/Integrations/Sony/SonyAlpha`;
const CYANVIEW_GIMBAL = `Cyanview. (n.d.-b). *Sony mirrorless gimbal* [Support documentation]. ${RETRIEVED} https://support.cyanview.com/docs/Workflows/SonyMirrorlessGimbal`;
const CORE_SWX = `Core SWX. (n.d.). *NANO X Micro 98Wh series* [Product page]. ${RETRIEVED} https://www.coreswx.com/products/nano-x-micro-98-series`;
const INDIPRO = `Indipro Tools. (n.d.). *Indipro D-Tap power cable to Sony NP-FZ100 dummy battery (30 in., regulated)* [Product page]. ${RETRIEVED} https://indiprotools.com/products/indipro-d-tap-power-cable-to-sony-np-fz100-dummy-battery-30-regulated`;

// Lenses
const SIGMA_CINE = `Sigma. (n.d.). *24-35mm T2.2 FF* [Cine lens page]. ${RETRIEVED} https://www.sigma-global.com/en/cine-lenses/ff-zoom/24_35_22/`;
const SIGMA_2470 = `Sigma Corporation of America. (n.d.-a). *24-70mm F2.8 DG DN II | Art* [Product page]. ${RETRIEVED} https://www.sigmaphoto.com/24-70mm-f2-8-dg-dn-ii-a`;
const SIGMA_35 = `Sigma Corporation of America. (n.d.-b). *35mm F1.2 DG II | Art* [Product page]. ${RETRIEVED} https://www.sigmaphoto.com/35mm-f1-2-dg-ii-a`;
const SIGMA_50 = `Sigma Corporation of America. (n.d.-c). *50mm F1.2 DG DN | Art* [Product page]. ${RETRIEVED} https://www.sigmaphoto.com/50mm-f1-2-dg-dn-a`;
const FOCUS_SONY_50 = `Focus Camera. (n.d.-d). *Sony FE 50mm f/1.2 GM* [Product page]. ${RETRIEVED} https://focuscamera.com/products/sony-sel50f12gm-camera-lenses-mirrorless-lenses`;
const FOCUS_GM2 = `Focus Camera. (n.d.-e). *Sony SEL2470GM2 FE 24-70mm f/2.8 GM II* [Product page]. ${RETRIEVED} https://focuscamera.com/products/sony-sel2470gm2-camera-lenses-mirrorless-lenses`;
const FOCUS_TAMRON = `Focus Camera. (n.d.-f). *Tamron A063 28-75mm f/2.8 Di III VXD G2 for Sony E-mount* [Product page]. ${RETRIEVED} https://focuscamera.com/products/tamron-a063-tamron-camera-lenses-mirrorless-lenses`;
const LENSRENTALS_SIGMA_50 = `Lensrentals. (n.d.-b). *Rent a Sigma 50mm f/1.2 DG DN Art for Sony E*. ${RETRIEVED} https://www.lensrentals.com/rent/sigma-50mm-f1.2-dg-dn-art-for-sony-e`;
const LENSRENTALS_GM2 = `Lensrentals. (n.d.-c). *Rent a Sony FE 24-70mm f/2.8 GM II*. ${RETRIEVED} https://www.lensrentals.com/rent/sony-fe-24-70mm-f2.8-gm-ii`;

// Gimbals and monitors
const DJI_RS4_PRO_SPECS = `DJI. (n.d.-a). *DJI RS 4 Pro specs*. ${RETRIEVED} https://www.dji.com/rs-4-pro/specs`;
const DJI_RS4_SPECS = `DJI. (n.d.-b). *DJI RS 4 specs*. ${RETRIEVED} https://www.dji.com/rs-4/specs`;
const DJI_RS5_STORE = `DJI. (n.d.-c). *DJI RS 5* [Store page]. ${RETRIEVED} https://store.dji.com/product/dji-rs-5`;
const DJI_RS4_PRO_STORE = `DJI. (n.d.-d). *DJI RS 4 Pro* [Store page]. ${RETRIEVED} https://store.dji.com/product/dji-rs-4-pro`;
const PORTKEYS = `Portkeys. (n.d.). *Portkeys LH5P II 5.5-inch 2000nits* [Product page]. ${RETRIEVED} https://www.portkeys.com/lh5p-ii/`;
const SMALLHD_INDIE_5 = `SmallHD. (n.d.-a). *Indie 5* [Product page]. ${RETRIEVED} https://smallhd.com/products/indie-5`;
const SMALLHD_ULTRA_5 = `SmallHD. (n.d.-b). *Ultra 5* [Product page]. ${RETRIEVED} https://smallhd.com/products/ultra-5`;

/** The marker every lesson needing a qualified reviewer opens with (authoring checklist, section 3). */
const QR = (who: string) => `> **Before release:** needs a qualified reviewer (QR): ${who}.`;

export const CINEMA_LOOK_CAMERA_RIG_COURSE: AuthoredCourse = {
  title: "Megalodon: Cinema-look camera rig",
  description:
    "For camera operators and broadcast crew who want to build or run the handheld, shallow-focus camera that sports broadcasts nicknamed the Megalodon. The course starts with the look itself: what depth of field is, why a bigger sensor and a faster lens make it thinner, and how Fox Sports put the rig on air at an NFL game on December 20, 2020, before Marquee Sports Network, FOX Deportes, BaylorVision, CBS, ESPN and Netflix built their own versions. It then takes the rig apart one piece at a time: the camera body (sensor size, rolling and global shutters, HDMI and SDI outputs, timecode against genlock, recording, power and heat), the lens (aperture, focal length, holding focus live, zooms against primes, and what very fast glass costs, with every price dated), and the gimbal (what it cancels and what it cannot, payload and balance, runtime, and the job of running it on a sideline). Every fact is cited, and claims an earlier draft got wrong are taught as corrections. Lessons that need a qualified reviewer before release say so at the top. The fourth course in The Crew Behind the Show series.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: Why the look
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-megalodon-is",
      title: "1 · What a Megalodon is",
      section: "1 · Why the look",
      body: `**What this course is for.** It is for camera operators, broadcast crew and anyone who wants to build or run a cinema-look camera on a live sports show. By the end you should be able to name each part of the rig, say what it does and what it gives up, follow the picture from the sideline to the truck, fix it under a live clock, and judge which shortcuts are fine on a film set but not on a network sideline. This first half covers the look, the camera body, the lens and the gimbal.

**A nickname, not a product.** "Megalodon" is the nickname Fox Sports gave a handheld camera with a very shallow depth of field. The player is sharp and the crowd behind melts into blur. Fox's internal name spelled out an acronym: "Mirrorless Gyrostabilized Lightweight DSLR Nonorig" (Dachman, 2021). No company sells a camera called a Megalodon. It is a recipe: a set of parts that work together.

**Fox's original recipe.**

| Part | Fox's original | Its job |
|---|---|---|
| Camera | Sony a7R IV, a full-frame mirrorless camera | Turn light into a live picture |
| Lens | Sony FE 24-70mm f/2.8 GM | Frame the shot and set how much is sharp |
| Stabilizer | DJI Ronin-S handheld gimbal | Cancel the shake and tilt of a walking operator |
| Monitor | A 6-inch field monitor | Let the operator judge focus and framing |
| Power | A battery backpack | Feed the camera, monitor and transmitter |
| Video link | A 1080p wireless transmitter, with transmission from CP Communications | Carry the picture to a receiver |

The camera, lens, gimbal and transmitter come from CP Communications' own account of the first game (Costa, 2020). *American Cinematographer* adds the 6-inch monitor and the battery backpack (Mrozek, 2021).

**The look is standard; the parts are not.** Other crews built the same look from other parts. BaylorVision used a Sony a7R III, a Sigma prime lens and a Zhiyun Crane 3S gimbal (Costa, 2021). Turner used a Canon C500 with a 50mm lens (Kerschbaumer et al., 2021). Lesson 4 follows the look from network to network. The point for now: when someone says "Megalodon," ask which parts they mean.

**How to read this course.** Every fact comes with its source at the end of the lesson. Every price carries the date it was read. An earlier draft about this rig got several claims wrong; this course teaches those only as corrections. A lesson that needs a qualified reviewer before release says so in a box at the top that begins "Before release". The course uses "Megalodon" as the industry nickname, not as a brand.

:::reveal What did Fox's internal name "Megalodon" stand for? ||| "Mirrorless Gyrostabilized Lightweight DSLR Nonorig" (Dachman, 2021).

:::reveal Which camera and gimbal did Fox's original rig use? ||| A Sony a7R IV on a DJI Ronin-S handheld gimbal.

## Sources
- ${DACHMAN_2021} Locator: the paragraph on the "Megalodon" and its acronym.
- ${COSTA_2020} Locator: the paragraphs naming the camera, lens, gimbal and transmitter.
- ${MROZEK_2021} Locator: the passage listing the rig's parts, including the 6-inch monitor and the battery backpack.
- ${COSTA_2021} Locator: the paragraph listing BaylorVision's camera, lens and gimbal.
- ${KERSCHBAUMER_2021} Locator: the section on Turner Sports and its Canon C500.`,
    },
    {
      slug: "the-2020-debut",
      title: "2 · The debut: December 20, 2020",
      section: "1 · Why the look",
      recallContent: [
        {
          prompt: "Is a \"Megalodon\" a product you can buy?",
          answer: "No. It is Fox Sports' nickname for a recipe of parts: camera, lens, gimbal, monitor, power and a wireless video link.",
        },
        {
          prompt: "Which lens did Fox's original rig use?",
          answer: "A Sony FE 24-70mm f/2.8 GM zoom.",
        },
      ],
      body: `**The game.** Fox Sports first put the rig on air on December 20, 2020, when Seattle played Washington (Keeley, 2020). Fox used it for end-zone shots (Costa, 2020). One trade outlet labels that game "Week 16"; other reporting gives only the date. Learn the date. It is the fact every source agrees on.

**The operator.** Fox's first operator on the rig was Mike Smole (Keeley, 2020). Fox hired an extra camera operator for that first live game (Feldman, 2021). So the rig added a person to the crew.

**Who built it.** Fox's technical director, Jarrod Ligrani, developed the rig with CP Communications starting in 2018 (Mrozek, 2021). CP built several packages for Fox to Fox's specifications and supplied the transmission (Mrozek, 2021; Costa, 2020). So the rig that reached air was a partnership: a network engineer's design, a vendor's build, and the vendor's radio link.

**What it cost, and what that number covers.** One early headline called them "8K end zone cameras" (Keeley, 2020). Ligrani put it another way: "It's not an 8K camera, it's an $8k camera" (Feldman, 2021). Read that number with care. The transmission came from CP, a separate company, and the operator was an extra hire. Neither is a camera part. So $8,000 describes the camera rig, not the radio link, the crew or the engineering around it.

**A correction to carry.** An earlier draft about this rig said it "cost roughly $10,000." The sourced figure is Ligrani's $8k, and it covers the camera rig only.

**It came back.** Fox brought the rig back for the 2021 NFL postseason (Dachman, 2021). CP Communications' account of the first game says it "caught viewers' attention" (Costa, 2020).

**Why this history matters to an operator.** The first Megalodon was never one person's kit. A network engineer designed it, an RF vendor built it and ran its link, and the network hired a dedicated operator. On a big show today, the operator is usually one part of that kind of team. Sections 5 and 6 cover the rest of the team.

:::reveal On what date did Fox first use the rig, and at which game? ||| December 20, 2020, Seattle at Washington (Keeley, 2020).

:::reveal What did Ligrani's "$8k camera" figure cover? ||| The camera rig only, not the radio link from CP, the extra operator or the engineering around it.

## Sources
- ${KEELEY_2020} Locator: headline and opening paragraphs (the date, the teams and the operator's name).
- ${COSTA_2020} Locator: headline, and the paragraphs on end-zone shots and CP's transmission.
- ${DACHMAN_2021} Locator: headline, and the paragraph recalling the rig's first game.
- ${FELDMAN_2021} Locator: headline, and the paragraph on hiring an extra camera operator.
- ${MROZEK_2021} Locator: the passage on Ligrani's work with CP Communications since 2018.`,
    },
    {
      slug: "depth-of-field-and-sensor-size",
      title: "3 · Depth of field and sensor size",
      section: "1 · Why the look",
      recallContent: [
        {
          prompt: "Who developed Fox's rig, and with which vendor?",
          answer: "Fox's technical director Jarrod Ligrani, with CP Communications, starting in 2018.",
        },
        {
          prompt: "Who was Fox's first operator on the rig?",
          answer: "Mike Smole.",
        },
      ],
      body: `${QR("a cinematographer or first camera assistant, to check the worked depth-of-field figures and the circle of confusion they assume")}

**What depth of field is.** Depth of field is the zone, from near to far, where things look sharp. A deep zone keeps the player and the stands both clear. A shallow zone keeps the player sharp and blurs everything else. That blur is the Megalodon look.

**How thin Fox works.** Fox's operators work with a depth of field under 2 feet, where "there isn't much margin for error" (Mrozek, 2021).

**A worked example.** The numbers below come from the standard thin-lens depth-of-field formula. They rest on two assumptions, stated so you can check them: the subject stands 3 meters (about 10 feet) away, and the "circle of confusion" (the largest blur spot that still looks sharp) is 0.03 mm on a full-frame sensor and 0.02 mm on a Super 35 sensor.

| Setup | Total depth in focus |
|---|---|
| Full frame, 50mm, f/1.2 | about 0.26 m (10 in) |
| Full frame, 50mm, f/2.0 | about 0.43 m (17 in) |
| Full frame, 50mm, f/2.8 | about 0.60 m (24 in) |
| Full frame, 50mm, f/4.0 | about 0.87 m (34 in) |
| Super 35, 33mm for the same framing, f/2.8 | about 0.94 m (37 in) |

**What the table shows.** Read down the first four rows: the lower the f-number, the thinner the zone. At f/4 the zone is almost 3 feet deep. At f/1.2 it is about 10 inches, so a player who leans forward can leave the zone and go soft.

**Where sensor size comes in.** Sony's FX3 has a "35 mm full frame (35.6 mm × 23.8 mm)" sensor (Sony, n.d.-b). The FX30 is a Super 35 camera (Focus Camera, n.d.-b), and Super 35 is smaller. A smaller sensor needs a shorter lens to frame the same shot: 33mm instead of 50mm in the table. The shorter lens gives a deeper zone. Compare the two f/2.8 rows: 0.94 m against 0.60 m. That is about 1.5 times the depth of field.

**What that means for a build.** Full frame makes the look easier. Super 35 makes focus easier to hold. Neither is wrong; they trade one thing for the other. And an f/2.8 lens on full frame already lands at about 24 inches here, right at Fox's "under 2 feet." The faster f/1.2 lens is for chosen moments, such as introductions and celebrations, not for the whole game. Section 3 comes back to this.

:::reveal In the worked example, about how deep is the zone in focus at f/1.2 on full frame? ||| About 0.26 m, roughly 10 inches, with the subject 3 m away.

:::reveal Why does a Super 35 camera give more depth of field for the same framing? ||| Its smaller sensor needs a shorter lens (33mm instead of 50mm) to frame the same shot, and the shorter lens gives a deeper zone: about 1.5 times as deep at f/2.8.

## Sources
- ${MROZEK_2021} Locator: the passage on working with under 2 feet of depth of field.
- ${SONY_SPECS} Locator: "Image sensor" entry.
- ${FOCUS_FX30} Locator: product title.`,
    },
    {
      slug: "the-look-spreads",
      title: "4 · The look spreads",
      section: "1 · Why the look",
      recallContent: [
        {
          prompt: "How deep is the zone in focus that Fox's operators work with?",
          answer: "Under 2 feet, where \"there isn't much margin for error\" (Mrozek, 2021).",
        },
        {
          prompt: "Which gives more depth of field for the same framing at the same f-number: full frame or Super 35?",
          answer: "Super 35, about 1.5 times as much in the worked example.",
        },
      ],
      body: `**Other networks wanted the look.** Within months of Fox's first game, other broadcasters were using the same kind of shot. A Sports Video Group feature from June 2021 called it "the shallow-depth-of-field movement" and said it was "here to stay" (Kerschbaumer et al., 2021).

**Who used it, and with what.**

| Broadcaster | What they used | Source |
|---|---|---|
| FOX Deportes | The "Megalodon," on live Liga MX soccer matches, by March 2021 | CP Communications (2021) |
| Marquee Sports Network | The "Megalodon" camera, first on a live MLB broadcast, May 2021 | Sports Video Group (2021) |
| BaylorVision | Its own version for the NCATA national championship, May 2021: Sony a7R III, a Sigma prime, a Zhiyun Crane 3S | Costa (2021) |
| CBS | A MōVI with a Sony Venice, later an Alpha 1 | Kerschbaumer et al. (2021) |
| ESPN | A Sony Alpha 1 and a Canon C500 | Kerschbaumer et al. (2021) |
| Turner Sports | A Canon C500 with a 50mm lens | Kerschbaumer et al. (2021) |
| Netflix | "three shallow-depth-of-field Megalodons with cinematic lenses" at its Home Run Derby, July 2026 | Hernández (2026) |

The Marquee report also notes that the same type of camera had been used at the Masters golf tournament (Sports Video Group, 2021). CBS used its own Alpha package for PGA Tour golf, not Fox's rig (Mrozek, 2021).

**A correction to carry.** An earlier draft said Turner Sports used "the Megalodon" at the NBA All-Star Game. That mixes up the look with the rig. Turner used a shallow-depth-of-field Canon C500 with a 50mm lens (Kerschbaumer et al., 2021). Same look, different rig.

**Another one.** The same draft said the rig "typically uses" a Sony a7R IV or a7S III. Look at the table: an a7R IV for Fox, an a7R III for BaylorVision, an Alpha 1 for CBS and ESPN, a Canon C500 for ESPN and Turner. No single camera is typical.

**What BaylorVision teaches.** A college production built its own version. Its camera put out HDMI, and an HDMI-to-SDI converter in the operator's backpack turned that into SDI for its transmitter (Costa, 2021). Lesson 7 explains why that converter was needed. A smaller production can reach the same look; what changes is the work of joining it to the show.

**The rule this lesson leaves you with.** The look is standard. The parts are not. When a show asks for a "Megalodon," the useful questions are about the parts: which camera, which lens, which gimbal, which link, and who supplies each one.

:::reveal Which network was first to use the rig on a live MLB broadcast? ||| Marquee Sports Network, in May 2021 (Sports Video Group, 2021).

:::reveal Did Turner Sports use Fox's rig? ||| No. Turner got the same look from a Canon C500 with a 50mm lens (Kerschbaumer et al., 2021).

## Sources
- ${KERSCHBAUMER_2021} Locator: headline, and the sections on CBS, ESPN and Turner Sports.
- ${CP_2021} Locator: headline and opening paragraph.
- ${SVG_2021} Locator: headline, and the paragraph mentioning the Masters.
- ${COSTA_2021} Locator: the paragraphs listing the camera, lens, gimbal and the converter in the backpack.
- ${MROZEK_2021} Locator: the passage on CBS's Alpha package for PGA Tour golf.
- ${HERNANDEZ_2026} Locator: the paragraph on the shallow-depth-of-field Megalodons.`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Why the look",
      section: "1 · Why the look",
      body: "A graded check on what a Megalodon is, how Fox put it on air in 2020, how depth of field and sensor size make the look, and how other broadcasters built their own versions. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What is a \"Megalodon\" in sports broadcasting?", options: ["A camera model Sony sells under that exact name", "A broadcast truck built to carry slow replays", "Fox's nickname for a recipe of shallow-focus parts", "A drone that films games from above the end zone"], correctIndex: 2, explanation: "Lesson 1: \"Megalodon\" is Fox Sports' nickname for a handheld, shallow-depth-of-field camera. No company sells a camera by that name; it is a recipe of parts.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "Which phrase did Fox's internal name \"Megalodon\" spell out?", options: ["Mirrorless Gyrostabilized Lightweight DSLR Nonorig", "Mobile Gimbal Lens Optical Digital Overhead Network", "Motorized Gyro Lens Over Digital Optical Network", "Mirrorless Gimbal Linked Optical Data Output Node"], correctIndex: 0, explanation: "Dachman (2021) gives Fox's internal acronym as \"Mirrorless Gyrostabilized Lightweight DSLR Nonorig.\" The others are made up.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "Which camera did Fox's original rig use?", options: ["A Canon C500 cinema camera with a 50mm", "A RED Komodo-X with a global shutter", "A Sony FX6 with its built-in SDI out", "A Sony a7R IV full-frame mirrorless camera"], correctIndex: 3, explanation: "Fox's original rig used a Sony a7R IV (Costa, 2020). The Canon C500 was Turner's and ESPN's choice; the Komodo-X and FX6 come up later in the course.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "Which stabilizer did Fox's original rig use?", options: ["A Zhiyun Crane 3S handheld gimbal", "A DJI Ronin-S handheld gimbal", "A MōVI rig built for cinema bodies", "A DJI Ronin 4D with its own camera"], correctIndex: 1, explanation: "Fox used a DJI Ronin-S. The Zhiyun Crane 3S was BaylorVision's, MōVI rigs were CBS's and ESPN's, and a Ronin 4D is a camera and gimbal in one.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "Which lens did Fox's original rig use?", options: ["Sigma 50mm F1.2 DG DN Art prime", "Sony FE 24-70mm f/2.8 GM zoom", "Tamron 28-75mm f/2.8 G2 zoom", "Sony FE 50mm f/1.2 GM prime"], correctIndex: 1, explanation: "Fox's lens was the Sony FE 24-70mm f/2.8 GM (Costa, 2020). The fast primes and the Tamron zoom appear in section 3.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "What monitor did Fox's original rig carry?", options: ["A 13-inch field monitor", "A 17-inch studio monitor", "No monitor of any kind", "A 6-inch field monitor"], correctIndex: 3, explanation: "American Cinematographer adds a 6-inch monitor to the parts list (Mrozek, 2021).", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "How was Fox's original rig powered?", options: ["By a battery backpack", "By a long AC power cord", "By a solar panel on the rig", "By a cable from the truck"], correctIndex: 0, explanation: "Mrozek (2021) lists a battery backpack among the rig's parts.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "Which company supplied the transmission for Fox's original rig?", options: ["Game Creek Video", "Faction Media", "CP Communications", "Bexel Broadcast"], correctIndex: 2, explanation: "The rig used a 1080p wireless transmitter with transmission from CP Communications (Costa, 2020).", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "Which source adds the 6-inch monitor and the battery backpack to the parts list?", options: ["Sports Video Group news", "CP Communications blog", "Sportico via Yahoo Finance", "American Cinematographer"], correctIndex: 3, explanation: "Lesson 1: the camera, lens, gimbal and transmitter come from CP Communications' account; American Cinematographer (Mrozek, 2021) adds the monitor and backpack.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "Other crews built the same look from other parts. Which rule does lesson 1 draw from that?", options: ["Only Fox's parts can make the look", "Every network must buy the same parts", "The look is standard; the parts are not", "The look needs a Sony a7R IV body"], correctIndex: 2, explanation: "BaylorVision and Turner reached the same look with different cameras, lenses and gimbals, so the look is standard and the parts are not.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "When someone asks for a \"Megalodon,\" what does lesson 1 say to ask?", options: ["Which week it aired", "Which parts they mean", "Which store sells it", "Which brand owns it"], correctIndex: 1, explanation: "Because the parts differ from build to build, the useful question is which parts someone means.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "In the recipe, what is the video link's job?", options: ["Carry the picture to a receiver", "Hold the camera level while running", "Set how much of the shot is sharp", "Feed power to the camera and monitor"], correctIndex: 0, explanation: "The video link carries the picture to a receiver. The gimbal holds the camera steady, the lens sets focus, and the batteries feed power.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "In the recipe, what is the lens's job?", options: ["Frame the shot and set how much is sharp", "Carry the picture to the receive point", "Cancel the shake of a walking operator", "Turn light into a live video signal"], correctIndex: 0, explanation: "The lens frames the shot and sets how much is sharp. The link carries the picture, the gimbal cancels shake, and the camera turns light into a signal.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "How does the course handle claims an earlier draft got wrong?", options: ["It leaves them in until a reviewer asks", "It teaches them only as corrections", "It teaches them as one view among many", "It hides them from every quiz question"], correctIndex: 1, explanation: "Lesson 1: an earlier draft got several claims wrong, and this course teaches those only as corrections.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "How does the course use the word \"Megalodon\"?", options: ["As a registered Sony product name", "As the name of a DJI gimbal line", "As the industry nickname, not a brand", "As a trademark of CP Communications"], correctIndex: 2, explanation: "The course uses \"Megalodon\" as the industry nickname, not as a brand. No company sells a product by that name.", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "What does a box at the top of a lesson that begins \"Before release\" mean?", options: ["It is optional reading for new crew", "It holds the graded section quiz", "It was written by a Fox engineer", "It needs a qualified reviewer first"], correctIndex: 3, explanation: "Lesson 1: a lesson that needs a qualified reviewer before release says so in a box at the top that begins \"Before release\".", sourceLessonSlug: "what-a-megalodon-is" },
          { prompt: "On what date did Fox first put the rig on air?", options: ["September 13, 2020", "February 7, 2021", "December 20, 2020", "January 16, 2021"], correctIndex: 2, explanation: "Fox first used the rig on December 20, 2020 (Keeley, 2020).", sourceLessonSlug: "the-2020-debut" },
          { prompt: "At which NFL game did the rig make its debut?", options: ["Seattle at Washington", "Dallas at Philadelphia", "Green Bay at Chicago", "Seattle at San Francisco"], correctIndex: 0, explanation: "The debut was Seattle at Washington on December 20, 2020 (Keeley, 2020).", sourceLessonSlug: "the-2020-debut" },
          { prompt: "Why does the course teach the debut's date rather than \"Week 16\"?", options: ["The NFL does not number its weeks", "Week 16 is the name of a different rig", "Only one source gives any date at all", "The date is what every source agrees on"], correctIndex: 3, explanation: "One trade outlet labels the game Week 16 while other reporting gives only the date, so the date is the fact every source shares.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "Who was Fox's first operator on the rig?", options: ["Mike Davies", "Mike Smole", "Jarrod Ligrani", "The game's director"], correctIndex: 1, explanation: "Keeley (2020) names Mike Smole as the operator. Jarrod Ligrani developed the rig, and Mike Davies is quoted on focus in lesson 10.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "How did Fox staff the rig for its first live game?", options: ["It moved a hard-camera operator over", "It hired an extra camera operator", "It had the truck's shader run the rig", "It let a utility run it between plays"], correctIndex: 1, explanation: "Fox hired an extra camera operator for that first live game (Feldman, 2021), so the rig added a person to the crew.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "Who developed Fox's rig?", options: ["Director of photography Mike Smole", "Fox's NFL play-by-play producer", "Netflix's live sports engineers", "Technical director Jarrod Ligrani"], correctIndex: 3, explanation: "Fox's technical director, Jarrod Ligrani, developed the rig with CP Communications (Mrozek, 2021).", sourceLessonSlug: "the-2020-debut" },
          { prompt: "In what year did Ligrani start developing the rig with CP Communications?", options: ["2018", "2020", "2015", "2021"], correctIndex: 0, explanation: "Mrozek (2021) says Ligrani developed the rig with CP starting in 2018, two years before its debut.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "What did CP Communications do for Fox's rig?", options: ["Sold Fox the cameras and lenses at retail prices", "Wrote the NFL's sideline rules for the camera", "Built packages to Fox's specs and ran transmission", "Trained the operator on focus and the gimbal"], correctIndex: 2, explanation: "CP built several packages for Fox to Fox's specifications and supplied the transmission (Mrozek, 2021; Costa, 2020).", sourceLessonSlug: "the-2020-debut" },
          { prompt: "What did one early headline call Fox's new cameras?", options: ["\"zero-delay cameras\"", "\"robot sideline cameras\"", "\"IMAX field cameras\"", "\"8K end zone cameras\""], correctIndex: 3, explanation: "Keeley's (2020) headline said Fox \"broke out 8K end zone cameras.\" Ligrani's own description, in lesson 2, corrects it.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "How did Ligrani describe the camera, as quoted by Sportico?", options: ["\"It's the first 8K camera on any NFL field\"", "\"It cost us more than a broadcast camera\"", "\"It's not an 8K camera, it's an $8k camera\"", "\"It's a $100k camera in a small body\""], correctIndex: 2, explanation: "The quotation, which is also Sportico's headline: \"It's not an 8K camera, it's an $8k camera\" (Feldman, 2021).", sourceLessonSlug: "the-2020-debut" },
          { prompt: "What does Ligrani's $8,000 figure cover?", options: ["The camera, the RF link and the crew", "The camera rig, not the link or crew", "The rig plus a season of RF service", "Only the lens, without the camera"], correctIndex: 1, explanation: "The transmission came from CP, a separate company, and the operator was an extra hire; neither is a camera part, so $8,000 describes the camera rig only.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "Why does the $8k figure leave out the radio link?", options: ["The link came from CP, a separate company", "The rig had no radio link in 2020", "The link was free under the NFL deal", "Radio links are counted as lenses"], correctIndex: 0, explanation: "CP Communications supplied the transmission, so the link was not part of the camera rig Ligrani priced.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "Which figure does the course teach for the cost of Fox's camera rig?", options: ["About $8,000, per Ligrani", "About $10,000, per Fox", "About $25,000, per CP", "About $80,000, per SVG"], correctIndex: 0, explanation: "An earlier draft said \"roughly $10,000.\" The sourced figure is Ligrani's $8k, for the camera rig only.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "When did Fox bring the rig back after its debut?", options: ["For the 2022 Super Bowl only", "For the 2021 NFL postseason", "Never; it ran a single time", "For the 2021 MLB All-Star Game"], correctIndex: 1, explanation: "Dachman (2021) reports Fox brought back the \"Megalodon\" for the 2021 NFL postseason.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "What does CP Communications' account of the first game say the rig did?", options: ["\"won an Emmy that season\"", "\"replaced the hard cameras\"", "\"caught viewers' attention\"", "\"failed in the second half\""], correctIndex: 2, explanation: "The CP account's headline says the camera \"caught viewers' attention\" (Costa, 2020).", sourceLessonSlug: "the-2020-debut" },
          { prompt: "What does the debut's history teach a camera operator?", options: ["One operator can supply the whole show", "The vendor ran the camera on its own", "The network bought it off the shelf", "The rig was a team effort, not one kit"], correctIndex: 3, explanation: "A network engineer designed it, an RF vendor built it and ran its link, and the network hired a dedicated operator.", sourceLessonSlug: "the-2020-debut" },
          { prompt: "What kind of shots did Fox use the rig for in its first game?", options: ["Press box shots", "Booth shots", "End-zone shots", "Pylon shots"], correctIndex: 2, explanation: "Fox used the rig for end-zone shots (Costa, 2020).", sourceLessonSlug: "the-2020-debut" },
          { prompt: "What is depth of field?", options: ["The zone, near to far, that looks sharp", "The distance from the lens to the sensor", "How far a wireless link can reach", "The brightness range a sensor can hold"], correctIndex: 0, explanation: "Depth of field is the zone, from near to far, where things look sharp.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "What does a shallow depth of field do to the crowd behind a player?", options: ["Makes it as sharp as the player", "Makes it brighter than the player", "Removes it from the frame entirely", "Blurs it while the player stays sharp"], correctIndex: 3, explanation: "A shallow zone keeps the player sharp and blurs everything else. That blur is the Megalodon look.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "How deep is the zone in focus that Fox's operators work with?", options: ["Under 2 inches", "Under 2 feet", "About 10 feet", "About 6 feet"], correctIndex: 1, explanation: "Fox's operators work with a depth of field under 2 feet, where \"there isn't much margin for error\" (Mrozek, 2021).", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "In lesson 3's worked example, how far from the camera is the subject?", options: ["1 m (about 3 ft)", "3 m (about 10 ft)", "10 m (about 33 ft)", "30 m (about 98 ft)"], correctIndex: 1, explanation: "The example assumes a subject 3 meters, about 10 feet, away.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "What is the \"circle of confusion\" in the worked example?", options: ["The round shape of the lens's front glass", "The patch of frame the autofocus box covers", "The ring that adjusts focus on the lens", "The largest blur spot that still looks sharp"], correctIndex: 3, explanation: "The example defines it as the largest blur spot that still looks sharp, and states its assumed size.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Which circle of confusion does the worked example assume for full frame?", options: ["0.03 mm", "0.3 mm", "3 mm", "0.003 mm"], correctIndex: 0, explanation: "It assumes 0.03 mm for full frame and 0.02 mm for Super 35, stated so you can check them.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Full frame, 50mm, subject at 3 m: about how deep is the zone at f/1.2?", options: ["About 0.60 m (24 in)", "About 0.87 m (34 in)", "About 0.26 m (10 in)", "About 0.94 m (37 in)"], correctIndex: 2, explanation: "About 0.26 m at f/1.2. The 0.60 m and 0.87 m figures are for f/2.8 and f/4, and 0.94 m is Super 35 at f/2.8.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Full frame, 50mm, subject at 3 m: about how deep is the zone at f/2.8?", options: ["About 0.26 m (10 in)", "About 0.43 m (17 in)", "About 0.87 m (34 in)", "About 0.60 m (24 in)"], correctIndex: 3, explanation: "About 0.60 m at f/2.8. The others are the f/1.2, f/2.0 and f/4 rows.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Full frame, 50mm, subject at 3 m: about how deep is the zone at f/4?", options: ["About 0.43 m (17 in)", "About 0.26 m (10 in)", "About 0.87 m (34 in)", "About 0.60 m (24 in)"], correctIndex: 2, explanation: "About 0.87 m, almost 3 feet, at f/4.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Reading down the worked table, what happens to the zone as the f-number goes down?", options: ["It gets deeper", "It gets thinner", "It stays the same", "It moves closer"], correctIndex: 1, explanation: "From f/4 down to f/1.2 the zone shrinks from about 0.87 m to about 0.26 m: the lower the f-number, the thinner the zone.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "What size is the Sony FX3's sensor?", options: ["35.6 mm × 23.8 mm", "23.5 mm × 15.6 mm", "17.3 mm × 13.0 mm", "43.8 mm × 32.9 mm"], correctIndex: 0, explanation: "Sony lists the FX3's sensor as \"35 mm full frame (35.6 mm × 23.8 mm)\" (Sony, n.d.-b).", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Which sensor format is the Sony FX30?", options: ["Super 35", "Full frame", "Medium format", "Large format"], correctIndex: 0, explanation: "The FX30 is a Super 35 camera (Focus Camera, n.d.-b), smaller than the FX3's full frame.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Why does a Super 35 camera give more depth of field for the same framing?", options: ["Its sensor reads out faster than full frame", "It needs a shorter lens for the same shot", "It uses a global shutter on every model", "Its lenses all stop at f/4 or slower"], correctIndex: 1, explanation: "A smaller sensor needs a shorter lens to frame the same shot, and the shorter lens gives a deeper zone.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "In the example, which lens on Super 35 frames the same shot as 50mm on full frame?", options: ["75mm", "50mm", "33mm", "24mm"], correctIndex: 2, explanation: "The table uses 33mm on Super 35 for the same framing as 50mm on full frame.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "At f/2.8 in the example, about how much more depth does Super 35 give than full frame?", options: ["About 3 times as much", "About half as much", "Exactly the same depth", "About 1.5 times as much"], correctIndex: 3, explanation: "0.94 m against 0.60 m: about 1.5 times the depth of field.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "What does lesson 3 say about an f/2.8 lens on full frame at 3 m?", options: ["It is too deep to give the look at all", "It cannot hold focus on any player", "It already lands near Fox's under 2 feet", "It only works on a Super 35 sensor"], correctIndex: 2, explanation: "About 24 inches deep, right at Fox's \"under 2 feet,\" so an f/2.8 lens on full frame already gives the look.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "What is the f/1.2 lens for, according to lesson 3?", options: ["Chosen moments, such as celebrations", "Every play of the game, start to end", "Night games only, when light is low", "Wide shots of the whole stadium"], correctIndex: 0, explanation: "At f/1.2 a player who leans forward can go soft, so the faster lens is for chosen moments like introductions and celebrations.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "What do you trade when choosing full frame against Super 35?", options: ["Lower cost against a longer battery", "Wireless range against latency", "Weight against a global shutter", "An easier look against easier focus"], correctIndex: 3, explanation: "Full frame makes the look easier; Super 35 makes focus easier to hold. They trade one for the other.", sourceLessonSlug: "depth-of-field-and-sensor-size" },
          { prompt: "Which network was first to use the rig on a live MLB broadcast?", options: ["ESPN's baseball crew", "Marquee Sports Network", "Netflix's MLB crew", "Turner Sports' MLB crew"], correctIndex: 1, explanation: "Marquee Sports Network was first on a live MLB broadcast (Sports Video Group, 2021).", sourceLessonSlug: "the-look-spreads" },
          { prompt: "When did Marquee Sports Network first use the rig on an MLB broadcast?", options: ["December 2020", "May 2021", "July 2026", "March 2021"], correctIndex: 1, explanation: "Sports Video Group reported it on May 7, 2021. December 2020 was Fox's debut, March 2021 FOX Deportes, and July 2026 Netflix.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "Where did FOX Deportes use the rig?", options: ["Live MLB home games", "Live college football", "Live NBA playoff games", "Live Liga MX matches"], correctIndex: 3, explanation: "FOX Deportes debuted it on live Liga MX matches (CP Communications, 2021).", sourceLessonSlug: "the-look-spreads" },
          { prompt: "Which gimbal did BaylorVision's version use?", options: ["A Zhiyun Crane 3S", "A DJI Ronin-S", "A MōVI rig", "A DJI RS 4 Pro"], correctIndex: 0, explanation: "BaylorVision used a Zhiyun Crane 3S (Costa, 2021). The Ronin-S was Fox's; MōVI rigs were CBS's and ESPN's.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "Which camera did BaylorVision's version use?", options: ["A Sony a7R IV", "A Sony FX6", "A Sony a7R III", "A Canon C500"], correctIndex: 2, explanation: "BaylorVision used a Sony a7R III (Costa, 2021). Fox used the a7R IV.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "For which event did BaylorVision deploy its version?", options: ["The NFL's 2021 postseason", "The Masters golf tournament", "Netflix's Home Run Derby", "The NCATA national championship"], correctIndex: 3, explanation: "Costa (2021) covers BaylorVision's version at the NCATA national championship.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "Why did BaylorVision carry an HDMI-to-SDI converter in the backpack?", options: ["Its link put out HDMI; the truck took fiber", "Its camera needed the box to record audio", "Its camera put out HDMI; its link took SDI", "Its gimbal needed SDI to control the lens"], correctIndex: 2, explanation: "The camera put out HDMI, and the converter turned that into SDI for the transmitter (Costa, 2021). Lesson 7 explains why.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "What did CBS use for its shallow-focus look?", options: ["A Ronin-S with an a7R IV, like Fox's", "A MōVI with a Venice, later an Alpha 1", "A Crane 3S with an a7R III and a prime", "A Ronin 4D with its built-in camera"], correctIndex: 1, explanation: "Kerschbaumer et al. (2021): CBS used a MōVI with a Sony Venice, later an Alpha 1.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "Did CBS use Fox's rig for PGA Tour golf?", options: ["No; it used its own Alpha package", "Yes; Fox lent CBS its rig for golf", "Yes; CP built CBS a copy of Fox's", "No; it used a fixed tower camera"], correctIndex: 0, explanation: "Mrozek (2021): CBS used its own Alpha package for PGA Tour golf, not Fox's rig.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "Which cameras did ESPN use for the look?", options: ["A Sony Alpha 1 and a Canon C500", "A Sony a7R IV and a RED Komodo-X", "A Sony FX3 and a Sony FX6 body", "A Canon C300 and a Sony Venice"], correctIndex: 0, explanation: "Kerschbaumer et al. (2021): ESPN used a Sony Alpha 1 and a Canon C500.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "How did Turner Sports get its shallow-focus look?", options: ["Fox's own rig, lent for the game", "A Canon C500 with a 50mm lens", "A Sony a7R IV with a 24-70mm", "A RED Komodo-X with a 35mm lens"], correctIndex: 1, explanation: "Turner used a Canon C500 with a 50mm lens (Kerschbaumer et al., 2021), not Fox's rig.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "What is wrong with the claim that Turner used \"the Megalodon\" at the NBA All-Star Game?", options: ["Turner never used a shallow look", "The game aired on Fox, not Turner", "It mixes up the look with Fox's rig", "Turner used it at the Super Bowl"], correctIndex: 2, explanation: "Turner got the same look from its own Canon C500 and 50mm lens. Same look, different rig.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "According to lesson 4, which camera is typical of these rigs?", options: ["The Sony a7S III, on most rigs", "The Sony a7R IV, on every rig", "The Canon C500, on every rig", "None; the bodies differ by network"], correctIndex: 3, explanation: "The table shows an a7R IV, an a7R III, an Alpha 1 and a Canon C500 across networks, so no single camera is typical.", sourceLessonSlug: "the-look-spreads" },
          { prompt: "How many shallow-depth-of-field Megalodons did Netflix use at its 2026 Home Run Derby?", options: ["One", "Six", "Three", "Ten"], correctIndex: 2, explanation: "Hernández (2026): \"three shallow-depth-of-field Megalodons with cinematic lenses.\"", sourceLessonSlug: "the-look-spreads" },
          { prompt: "What does the Marquee report say about the Masters golf tournament?", options: ["The same type of camera had been used there", "Fox's own rig made its debut at the Masters", "The camera was banned from the Masters", "Marquee shot the Masters with the rig"], correctIndex: 0, explanation: "The report notes that the same type of camera had been used at the Masters (Sports Video Group, 2021).", sourceLessonSlug: "the-look-spreads" },
          { prompt: "What did Sports Video Group's June 2021 feature say about the shallow-focus look?", options: ["That it was a passing fad", "That it cost too much to last", "That it would not work at night", "That it was \"here to stay\""], correctIndex: 3, explanation: "The feature's headline calls it \"the shallow-depth-of-field movement\" and says it is \"here to stay\" (Kerschbaumer et al., 2021).", sourceLessonSlug: "the-look-spreads" },
          { prompt: "When a show asks for a \"Megalodon,\" which questions does lesson 4 call useful?", options: ["Which network first named the rig", "Which parts, and who supplies each", "Which week of the season it is", "Which fans will be in the shot"], correctIndex: 1, explanation: "The look is standard and the parts are not, so the useful questions are which camera, lens, gimbal and link, and who supplies each.", sourceLessonSlug: "the-look-spreads" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: The camera body
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "choosing-a-body",
      title: "5 · Choosing a body",
      section: "2 · The camera body",
      recallContent: [
        {
          prompt: "Name two broadcasters that built their own shallow-focus rig instead of using Fox's.",
          answer: "Any two of: BaylorVision (a7R III, Sigma prime, Zhiyun Crane 3S), CBS (MōVI with Venice, later Alpha 1), ESPN (Alpha 1 and Canon C500), Turner (Canon C500 with a 50mm lens).",
        },
        {
          prompt: "What rule does lesson 4 leave you with?",
          answer: "The look is standard. The parts are not.",
        },
      ],
      body: `**The body's job.** The camera body turns light into a live video signal and, if you want, a recording too. For this rig it must also be small and light enough to ride a gimbal all game.

**What the documented rigs used.** Fox used a Sony a7R IV (Costa, 2020). BaylorVision used an a7R III (Costa, 2021). CBS moved to a Sony Alpha 1, ESPN used an Alpha 1 and a Canon C500, and Turner used a Canon C500 (Kerschbaumer et al., 2021).

**The body many crews use now.** The Sony FX3 has become a common small body for this work. Its specs explain why:

- **Full frame.** Its sensor is "35 mm full frame (35.6 mm × 23.8 mm)" (Sony, n.d.-b), which makes the shallow look easier, as lesson 3 showed.
- **Light.** It weighs about 715 g with battery and card (Sony, n.d.-b). Every gram rides on the gimbal and the operator's arms.
- **Remote control.** Cyanview, a company whose systems let a video operator in the truck adjust cameras from afar, lists the FX3 as the most popular body for its mirrorless gimbal workflow, and connects to it by USB-C (Cyanview, n.d.-b).

**Its weakness.** The FX3 has a single HDMI video output and no genlock input (Sony, n.d.-b; Sony, n.d.-a). Lesson 7 explains what that costs on a live show.

**Which FX3.** Lensrentals says Sony "has discontinued" the original FX3 (Lensrentals, n.d.-a). The model on sale on October 21, 2026, was the FX3A, sold as the ILME-FX3A (Focus Camera, n.d.-a). The specs in this course come from Sony's help guide for the ILME-FX3; check the help guide for your own model before relying on a number.

**Two neighbors.**

| Body | What it adds or gives up | Source |
|---|---|---|
| Sony FX30 | A Super 35 sensor: deeper depth of field for the same framing, so focus is easier and the look is weaker | Focus Camera (n.d.-b); lesson 3 |
| Sony FX6 | A full-frame body with "12G/6G/3G SDI output and a full-sized HDMI output," BNC timecode, and no genlock; the body alone weighs 890 g | Allard (2020); Focus Camera (n.d.-c) |

**How to choose.** Ask three questions. Does the show need the full-frame look, or is easier focus worth more? How will the picture leave the camera: HDMI through a converter, or SDI straight out? And what will the gimbal carry once the lens, monitor, transmitter and cables are on? The FX6 answers the second question better than the FX3; the FX3 answers the third better than the FX6. Section 8 puts prices on these choices.

:::reveal Why is the Sony FX3 a common small body for this rig? ||| It is full frame, light (about 715 g with battery and card), and accepts USB-C control, and Cyanview lists it as the most popular body for its mirrorless gimbal workflow.

:::reveal What is the FX3's main weakness on a live show? ||| A single HDMI output and no genlock input.

## Sources
- ${COSTA_2020} Locator: the paragraph naming the Sony a7R IV.
- ${COSTA_2021} Locator: the paragraph naming the Sony a7R III.
- ${KERSCHBAUMER_2021} Locator: the sections on CBS, ESPN and Turner Sports.
- ${SONY_SPECS} Locator: "Image sensor", "Mass" and "Input/output terminals" entries.
- ${SONY_TIMECODE} Locator: the whole page (timecode matching only).
- ${CYANVIEW_GIMBAL} Locator: introduction and "Camera" section.
- ${LENSRENTALS_FX3} Locator: the product notice on the page.
- ${FOCUS_FX3A} Locator: product title and model number.
- ${FOCUS_FX30} Locator: product title.
- ${FOCUS_FX6} Locator: product title.
- ${ALLARD_2020} Locator: the specifications section (outputs, timecode, weight).`,
    },
    {
      slug: "rolling-and-global-shutter",
      title: "6 · Rolling and global shutters",
      section: "2 · The camera body",
      recallContent: [
        {
          prompt: "What did Lensrentals say about the original Sony FX3?",
          answer: "That Sony \"has discontinued\" it. The model on sale on October 21, 2026, was the FX3A (ILME-FX3A).",
        },
        {
          prompt: "Which Sony body in lesson 5 has SDI output built in?",
          answer: "The FX6, with \"12G/6G/3G SDI output and a full-sized HDMI output\" (Allard, 2020).",
        },
      ],
      body: `${QR("a camera engineer or cinematographer, to confirm the explanation of rolling and global shutters, which the course's research states without a source")}

**Two ways to read a sensor.** A camera sensor has to read out millions of pixels for every frame. A **rolling shutter** reads the sensor one line at a time, top to bottom. A **global shutter** exposes every pixel at the same moment.

**Why it matters.** With a rolling shutter, the top of the frame is read a moment before the bottom. If the camera whips sideways, or a ball spins fast, the picture can lean or wobble while it is read. Crews call the wobble "jello." A global shutter does not lean, because every pixel is taken at once.

**Which bodies have which.** The RED Komodo-X has a "6K S35 Global Shutter sensor" (AbelCine, n.d.). Sony's specifications describe the FX3's sensor as CMOS and make no global-shutter claim (Sony, n.d.-b), and the FX6 is described the same way (Allard, 2020). A maker that built a global shutter would say so, so this course treats the FX3 and FX6 as rolling-shutter cameras.

**A correction to carry.** An earlier draft grouped the Sony FX6 with the RED Komodo-X as "global shutter / true cine body" cameras. That pairing is wrong. The Komodo-X has a global shutter; nothing in the FX6's description claims one. The same draft listed a DJI Ronin 4D on top of a separate camera body. A Ronin 4D is a camera and gimbal in one unit (DJI, n.d.-e), so it replaces both, and it cannot ride on another gimbal.

**When skew shows up on a sideline.** A gimbal following players mostly moves smoothly. The rolling-shutter lean appears mainly when the operator whips the camera fast, on a spinning ball, or against an LED board. So on most sideline shots, the shutter type is not the problem that limits you. Focus is (section 3).

**What a global shutter buys.** Lesson 7 shows one more thing the Komodo-X adds: a genlock input. But for the reason above, a global shutter mostly solves a problem a sideline operator will rarely meet, so it is seldom the first thing to pay for.

**What to do with a rolling shutter.** Watch for the lean on fast moves in rehearsal. If you see it, slow the move. The camera cannot be changed during a game, but the move can.

:::reveal What is the difference between a rolling and a global shutter? ||| A rolling shutter reads the sensor line by line, so fast moves can lean or wobble; a global shutter exposes every pixel at once.

:::reveal Which body in this lesson has a global shutter sensor? ||| The RED Komodo-X: a "6K S35 Global Shutter sensor" (AbelCine, n.d.).

## Sources
- ${ABELCINE} Locator: product title and the sensor line in the specifications.
- ${SONY_SPECS} Locator: "Image sensor" entry.
- ${ALLARD_2020} Locator: the sensor description in the specifications section.
- ${DJI_RONIN_4D} Locator: product title and description.`,
    },
    {
      slug: "outputs-timecode-and-genlock",
      title: "7 · Outputs, timecode and genlock",
      section: "2 · The camera body",
      recallContent: [
        {
          prompt: "Why does this course treat the FX3 and FX6 as rolling-shutter cameras?",
          answer: "Their descriptions call the sensors CMOS and make no global-shutter claim, while the Komodo-X's page names its global shutter.",
        },
        {
          prompt: "Why can a DJI Ronin 4D not sit on another gimbal?",
          answer: "It is a camera and gimbal in one unit, so it replaces both.",
        },
      ],
      body: `${QR("a broadcast engineer in charge (EIC), to check the guidance on converters and frame synchronizers")}

**How the picture leaves the camera.** A live camera is only useful if its picture reaches the truck. The first step is the camera's video output.

| Body | Video output | Source |
|---|---|---|
| Sony FX3 | "HDMI type A jack" only | Sony (n.d.-b) |
| Sony FX6 | "12G/6G/3G SDI output and a full-sized HDMI output," plus BNC timecode in and out | Allard (2020) |
| RED Komodo-X | 12G-SDI up to 4096 × 2160 4:2:2 60p, and a "Tri-Level Genlock Input" | AbelCine (n.d.) |

**HDMI against SDI.** A body with SDI out, like the FX6 or the Komodo-X, sends its picture on a locking BNC connector and needs no converter (Allard, 2020; AbelCine, n.d.). That is why the research behind this course rates SDI-out bodies better for network trucks. An HDMI-only body like the FX3 needs a converter, or a transmitter that takes HDMI, for live work. And because its single HDMI jack carries the whole show, use a locking or clamped HDMI cable with strain relief on a moving rig.

**The converter.** Blackmagic Design's Micro Converter HDMI to SDI 3G was listed at $75 MSRP on October 21, 2026 (Blackmagic Design, n.d.). BaylorVision carried an HDMI-to-SDI converter in its operator's backpack (Costa, 2021). That is the workaround lesson 4 mentioned.

**Timecode is not genlock.** These two get mixed up, and they do different jobs.

- **Timecode** is a label on every frame: hours, minutes, seconds and frame number. It lets recordings from different cameras line up later, in replay and in editing.
- **Genlock** locks the timing of the camera's picture to the truck's reference signal, so every camera's frames start at the same instant.

The FX3 can take external timecode through Sony's VMC-BNCM1 adapter on its Multi/Micro USB port. Sony's page describes matching timecode only; it says nothing about genlock (Sony, n.d.-a). The FX6 has BNC timecode in and out, and no genlock (Allard, 2020). Of the three bodies here, only the Komodo-X lists a genlock input (AbelCine, n.d.).

**What the truck does about it.** A camera without genlock sends frames on its own timing. The truck re-times that feed with a **frame synchronizer**, a box that holds each frame and releases it in step with the house reference. AJA's FS-Mini is one: a "utility frame sync" that locks to blackburst or tri-level reference, listed at $989 US MSRP on October 21, 2026 (AJA Video Systems, n.d.). A network truck has frame sync built in. A small show or a stream may not, and then someone has to bring one.

**What to ask before the job.** Will the camera's picture arrive as HDMI or SDI? Who converts it? Who does frame sync? These questions come back in section 6.

:::reveal What is the difference between timecode and genlock? ||| Timecode labels each frame so recordings line up later; genlock locks the camera's picture timing to the truck's reference.

:::reveal How does a truck handle a camera with no genlock? ||| It re-times the feed with a frame synchronizer, such as AJA's FS-Mini, which locks to blackburst or tri-level reference.

## Sources
- ${SONY_SPECS} Locator: "Input/output terminals" entry.
- ${SONY_TIMECODE} Locator: the whole page, the VMC-BNCM1 adapter and the Multi/Micro USB terminal.
- ${ALLARD_2020} Locator: the specifications section (SDI, HDMI, timecode, genlock).
- ${ABELCINE} Locator: specifications, video outputs and the genlock input.
- ${BLACKMAGIC} Locator: Micro Converter HDMI to SDI 3G entry and its price.
- ${AJA_FS_MINI} Locator: product overview and price.
- ${COSTA_2021} Locator: the paragraph on the converter in the backpack.`,
    },
    {
      slug: "recording-power-and-heat",
      title: "8 · Recording, power and heat",
      section: "2 · The camera body",
      recallContent: [
        {
          prompt: "What is the FX3's only video output?",
          answer: "An \"HDMI type A jack\" (Sony, n.d.-b).",
        },
        {
          prompt: "What does a frame synchronizer do?",
          answer: "It holds each frame from an unlocked camera and releases it in step with the truck's reference signal.",
        },
      ],
      body: `${QR("a broadcast camera technician or battery specialist, to check the external-power guidance")}

**Recording is not the live feed.** Live TV takes the camera's video output. The recording inside the camera is a separate copy, used for an isolated ("iso") record, for replay or for editing later. So the recording format matters for those uses, not for the live picture.

**What the FX3 records.** Sony lists XAVC HS (H.265) and XAVC S (H.264) video with LPCM audio. With the XLR handle attached, it records 4 channels of LPCM audio (Sony, n.d.-b).

**What Sony's page does not say.** Sony's specifications page does not state the bit depth or the color sampling of the HDMI output. A shader in the truck can push color further on a richer signal. So before you promise a show "10-bit 4:2:2," check it in the camera's menu with the show's settings.

**How much power.** Sony lists the FX3 at about 7.3 W while shooting movies (Sony, n.d.-b). The FX6 draws about 18.0 W (Allard, 2020). A bigger body draws more, which means bigger or more batteries on the rig.

**Heat.** The FX3's operating range is 0 to 40 °C (Sony, n.d.-b). A camera in the sun on a hot field can pass that. Fox found that moving the batteries out of the camera helped with overheating: "Getting the batteries out of the camera helped" (Mrozek, 2021). BaylorVision found the backpack ran hot too: "The battery and RF units got quite hot during both productions" (Costa, 2021). Shade the rig at breaks, and give the backpack airflow.

**External power, and why the cable matters.** Fox's rig fed its parts from a battery backpack (Mrozek, 2021). One way to feed the FX3 from a large battery is a "dummy battery," a plug shaped like the camera's own battery, on the end of a cable. The FX3's battery is rated 7.2 V (Sony, n.d.-b). A common 98 Wh V-mount pack, the Core SWX NANO X Micro, is rated 14.8 V (Core SWX, n.d.). That is about twice the camera's rating. So the cable between them must be **regulated**: it must bring the voltage down to what the camera expects. Indipro, for example, sells a regulated D-Tap to NP-FZ100 dummy cable (Indipro Tools, n.d.).

**USB power.** Sony lists a recommended USB adaptor output of "9 V / 2 A or more, 15 V / 2 A or more" for the FX3 (Sony, n.d.-b). An earlier draft said "9V/3A"; use Sony's own figures.

**Batteries are energy, not continuity.** Swapping the main pack cuts power to everything on it, unless something bridges the gap: a plate that takes two packs, or the camera's own battery left inside. Section 7 covers how to plan a swap.

:::reveal Why must a D-Tap to dummy-battery cable for the FX3 be regulated? ||| The FX3's battery is rated 7.2 V, and a typical 98 Wh V-mount pack is 14.8 V, about twice that; a regulated cable brings the voltage down.

:::reveal What did Fox find helped with overheating? ||| Moving the batteries out of the camera: "Getting the batteries out of the camera helped" (Mrozek, 2021).

## Sources
- ${SONY_SPECS} Locator: "Recording format", "Audio recording format", "Power consumption", "Operating temperature", "Rated voltage" and "Recommended USB adaptor" entries.
- ${ALLARD_2020} Locator: the specifications section, power consumption.
- ${MROZEK_2021} Locator: the passages on the battery backpack and quoting Ligrani on moving the batteries.
- ${COSTA_2021} Locator: the paragraph on the battery and RF units running hot.
- ${CORE_SWX} Locator: specifications, voltage and capacity.
- ${INDIPRO} Locator: product title and description.`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The camera body",
      section: "2 · The camera body",
      body: "A graded check on choosing a camera body, rolling and global shutters, video outputs, timecode and genlock, and recording, power and heat. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What is the camera body's job on this rig?", options: ["Carry the picture to the receiver", "Cancel the shake of the operator", "Turn light into a live video signal", "Set how much of the shot is sharp"], correctIndex: 2, explanation: "The body turns light into a live video signal and, if you want, a recording too. The link, gimbal and lens do the other jobs.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Which camera body did CBS move to for its shallow-focus look?", options: ["A Sony Alpha 1", "A Sony FX6", "A Canon C500", "A RED Komodo-X"], correctIndex: 0, explanation: "Kerschbaumer et al. (2021): CBS moved to a Sony Alpha 1. The Canon C500 was ESPN's and Turner's.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Which body does lesson 5 call a common small body for this work today?", options: ["The Sony Venice", "The Canon C300", "The RED Raptor", "The Sony FX3"], correctIndex: 3, explanation: "The Sony FX3 has become a common small body for this work, for the reasons its specs give.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "About how much does the Sony FX3 weigh?", options: ["About 1.6 kg with battery and card", "About 715 g with battery and card", "About 890 g for the body alone", "About 3 kg with a lens and cage"], correctIndex: 1, explanation: "Sony lists about 715 g with battery and card (Sony, n.d.-b). 890 g is the FX6 body, and 1.6 kg is the Sigma cine zoom.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Why does a body's weight matter on this rig?", options: ["Heavy bodies cannot output HDMI", "Every gram rides the gimbal and arms", "Heavier bodies have shallower focus", "Light bodies overheat more quickly"], correctIndex: 1, explanation: "Every gram rides on the gimbal and the operator's arms, all game.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "How does Cyanview's mirrorless gimbal workflow connect to the FX3?", options: ["By SDI", "By Wi-Fi only", "By BNC timecode", "By USB-C"], correctIndex: 3, explanation: "Cyanview connects to the FX3 by USB-C (Cyanview, n.d.-b).", sourceLessonSlug: "choosing-a-body" },
          { prompt: "How does Cyanview describe the FX3?", options: ["The most popular body for its gimbal workflow", "The only body its systems can control at all", "A body it no longer supports in any workflow", "A body that needs a VP4 for exposure control"], correctIndex: 0, explanation: "Cyanview lists the FX3 as the most popular body for its mirrorless gimbal workflow (Cyanview, n.d.-b).", sourceLessonSlug: "choosing-a-body" },
          { prompt: "What is the FX3's main weakness on a live show?", options: ["No autofocus with Sony's zoom lenses", "No way to take external timecode", "One HDMI output and no genlock input", "A sensor smaller than Super 35"], correctIndex: 2, explanation: "The FX3 has a single HDMI output and no genlock input. It can take external timecode, and its sensor is full frame.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "What did Lensrentals say about the original Sony FX3?", options: ["That Sony cut its price in half", "That Sony added SDI in firmware", "That Sony recalled it for heat", "That Sony \"has discontinued\" it"], correctIndex: 3, explanation: "Lensrentals says Sony \"has discontinued\" the original FX3 (Lensrentals, n.d.-a).", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Which FX3 model was on sale on October 21, 2026?", options: ["The original FX3 only", "The FX30 under a new name", "The FX3A (ILME-FX3A)", "The FX6, renamed FX3"], correctIndex: 2, explanation: "The model on sale that day was the FX3A, sold as the ILME-FX3A (Focus Camera, n.d.-a).", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Where do this course's FX3 specifications come from?", options: ["A rental house's listing for the FX3A", "Sony's help guide for the ILME-FX3", "A forum thread about the FX3A", "Fox's internal camera notes"], correctIndex: 1, explanation: "The specs come from Sony's help guide for the ILME-FX3; check the guide for your own model before relying on a number.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "What does the Super 35 FX30 give up to make focus easier?", options: ["Some of the look", "Its HDMI output", "Its autofocus", "Its timecode"], correctIndex: 0, explanation: "A Super 35 sensor gives deeper depth of field for the same framing, so focus is easier and the look is weaker.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "What does the Sony FX6 have that the FX3 lacks?", options: ["SDI output and BNC timecode", "A global-shutter sensor", "A tri-level genlock input", "A lighter body than the FX3"], correctIndex: 0, explanation: "The FX6 adds \"12G/6G/3G SDI output\" and BNC timecode (Allard, 2020). It has no genlock, no global-shutter claim, and weighs more.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "How much does the Sony FX6 body alone weigh?", options: ["715 g", "890 g", "1.6 kg", "4.5 kg"], correctIndex: 1, explanation: "The FX6 body alone is 890 g (Allard, 2020). 715 g is the FX3 with battery and card.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Does the Sony FX6 have a genlock input?", options: ["Yes, on a BNC input", "Yes, through its HDMI", "No, it has no genlock", "Only with an adapter"], correctIndex: 2, explanation: "Allard (2020): the FX6 has SDI, HDMI and BNC timecode in and out, and no genlock.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Which of lesson 5's questions does the FX6 answer better than the FX3?", options: ["What the gimbal will carry", "How shallow the look can go", "How long the batteries last", "How the picture leaves the camera"], correctIndex: 3, explanation: "With SDI built in, the FX6 answers how the picture leaves the camera better; the lighter FX3 answers what the gimbal will carry better.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Which of lesson 5's questions does the FX3 answer better than the FX6?", options: ["How the picture leaves it", "Which body has genlock", "What the gimbal will carry", "Which has a global shutter"], correctIndex: 2, explanation: "The FX3 is lighter (about 715 g with battery and card against 890 g for the FX6 body), so it answers the gimbal-load question better.", sourceLessonSlug: "choosing-a-body" },
          { prompt: "Which camera did Turner Sports use?", options: ["A Canon C500", "A Sony FX3", "A Sony a7R IV", "A RED Komodo-X"], correctIndex: 0, explanation: "Turner used a Canon C500 (Kerschbaumer et al., 2021).", sourceLessonSlug: "choosing-a-body" },
          { prompt: "How does a rolling shutter read the sensor?", options: ["Every pixel at the same moment", "One color at a time, red first", "Only while the camera is still", "One line at a time, top to bottom"], correctIndex: 3, explanation: "A rolling shutter reads the sensor one line at a time, top to bottom. A global shutter exposes every pixel at once.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "How does a global shutter expose the sensor?", options: ["One line at a time, top to bottom", "Every pixel at the same moment", "Only the center of the frame", "Every other frame, to save power"], correctIndex: 1, explanation: "A global shutter exposes every pixel at the same moment, so it does not lean on fast movement.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What can a rolling shutter do to the picture on a fast whip pan?", options: ["Turn the picture black and white", "Make the picture lean or wobble", "Drop the audio for one frame", "Double the frame rate briefly"], correctIndex: 1, explanation: "The top of the frame is read before the bottom, so a fast move can make the picture lean or wobble.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What do crews call the wobble a rolling shutter can cause?", options: ["\"Ghosting\"", "\"Breathing\"", "\"Banding\"", "\"Jello\""], correctIndex: 3, explanation: "Lesson 6: crews call the wobble \"jello.\"", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Which camera in lesson 6 has a global shutter?", options: ["RED Komodo-X", "Sony FX6", "Sony FX3", "Sony a7R IV"], correctIndex: 0, explanation: "The RED Komodo-X has a \"6K S35 Global Shutter sensor\" (AbelCine, n.d.).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "How does AbelCine describe the Komodo-X's sensor?", options: ["\"8K full-frame rolling sensor\"", "\"4K Super 35 stacked sensor\"", "\"6K S35 Global Shutter sensor\"", "\"6K full-frame dual-ISO sensor\""], correctIndex: 2, explanation: "AbelCine's page: a \"6K S35 Global Shutter sensor.\"", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Why does the course treat the FX3 as a rolling-shutter camera?", options: ["Sony's page says it is rolling-shutter", "Every full-frame body is rolling-shutter", "Fox's engineers measured its readout", "Its specs make no global-shutter claim"], correctIndex: 3, explanation: "Sony's specifications call the sensor CMOS and make no global-shutter claim; a maker that built one would say so.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What was wrong with grouping the Sony FX6 with the Komodo-X as global-shutter bodies?", options: ["Only the FX6 has a global shutter", "Both cameras lack any SDI output", "Only the Komodo-X has a global shutter", "The FX6 is the one with genlock"], correctIndex: 2, explanation: "The Komodo-X has a global shutter; nothing in the FX6's description claims one. Both have SDI, and only the Komodo-X lists genlock.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What is a DJI Ronin 4D?", options: ["A gimbal for cameras up to 4 kg", "A camera and gimbal in one unit", "A wireless link with 4D audio", "A lens made for cinema gimbals"], correctIndex: 1, explanation: "A Ronin 4D is a camera and gimbal in one unit (DJI, n.d.-e).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Why can a DJI Ronin 4D not ride on a separate gimbal?", options: ["It replaces both body and gimbal", "It only works on a tripod head", "It needs a cable to the truck", "Its shutter cannot be stabilized"], correctIndex: 0, explanation: "Because it is a camera and gimbal in one, it replaces both and cannot sit on another gimbal.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "When does rolling-shutter lean mainly show up on a sideline?", options: ["On fast whips and spinning balls", "On every shot, even slow follows", "Only at night, under the lights", "Only while the camera records"], correctIndex: 0, explanation: "A gimbal following players mostly moves smoothly; the lean appears mainly on fast whips, spinning balls and LED boards.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "According to lesson 6, what usually limits a sideline operator more than shutter type?", options: ["Audio", "Focus", "Tally", "Timecode"], correctIndex: 1, explanation: "On most sideline shots, the shutter type is not the problem that limits you. Focus is (section 3).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Besides a global shutter, what does the Komodo-X add that lesson 7 describes?", options: ["An XLR audio input", "A fiber input", "A genlock input", "A tally input"], correctIndex: 2, explanation: "Lesson 6 points ahead to lesson 7: the Komodo-X lists a \"Tri-Level Genlock Input\" (AbelCine, n.d.).", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What does lesson 6 advise if you see rolling-shutter lean in rehearsal?", options: ["Swap to a new body", "Raise the f-number", "Turn on autofocus", "Slow down the move"], correctIndex: 3, explanation: "The camera cannot be changed during a game, but the move can. Slow it.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Why is a global shutter seldom the first thing to pay for on a sideline?", options: ["It cannot be used with autofocus lenses", "It is not allowed on NFL sidelines", "It solves a problem you will rarely meet", "It only works with Sony's own lenses"], correctIndex: 2, explanation: "On most sideline shots the camera moves smoothly, so rolling-shutter lean is rarely the limiting problem.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What does a global shutter avoid?", options: ["Lean on fast movement", "Soft focus on players", "Heat in direct sun", "Delay in the wireless link"], correctIndex: 0, explanation: "Every pixel is exposed at once, so the picture does not lean on fast moves. It does nothing for focus, heat or link delay.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "Which pair does the course treat as rolling-shutter cameras?", options: ["RED Komodo-X and FX6", "Komodo-X and Ronin 4D", "Sony FX3 and Komodo-X", "Sony FX3 and Sony FX6"], correctIndex: 3, explanation: "Both Sony bodies are described as CMOS with no global-shutter claim. The Komodo-X has a global shutter.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "With a rolling shutter, when is the top of the frame read?", options: ["After the bottom", "Before the bottom", "At the same moment", "Only on odd frames"], correctIndex: 1, explanation: "A rolling shutter reads top to bottom, so the top of the frame is read a moment before the bottom.", sourceLessonSlug: "rolling-and-global-shutter" },
          { prompt: "What is the Sony FX3's video output?", options: ["12G-SDI and full HDMI", "An HDMI type A jack only", "3G-SDI only, on BNC", "HDMI and a fiber port"], correctIndex: 1, explanation: "Sony lists only an \"HDMI type A jack\" (Sony, n.d.-b).", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What video outputs does the Sony FX6 have?", options: ["An HDMI type A jack and nothing else", "Fiber out and a mini HDMI jack", "3G-SDI only, with no HDMI at all", "12G/6G/3G SDI and full-size HDMI"], correctIndex: 3, explanation: "Allard (2020): \"12G/6G/3G SDI output and a full-sized HDMI output,\" plus BNC timecode.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What video output does the RED Komodo-X list?", options: ["12G-SDI up to 4096 × 2160 4:2:2 60p", "HDMI only, up to 1920 × 1080 30p", "3G-SDI only, up to 1280 × 720 60p", "Fiber only, up to 7680 × 4320 120p"], correctIndex: 0, explanation: "AbelCine (n.d.): 12G-SDI up to 4096 × 2160 4:2:2 60p, and a tri-level genlock input.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What connector does an SDI output use?", options: ["A USB-C connector", "An HDMI type A jack", "A locking BNC connector", "An XLR connector"], correctIndex: 2, explanation: "SDI-out bodies send the picture on a locking BNC connector (Allard, 2020; AbelCine, n.d.).", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What does an HDMI-only body like the FX3 need for live work?", options: ["A second body running in parallel", "A genlock card fitted inside the body", "A fiber cable straight to the router", "A converter or an HDMI-input transmitter"], correctIndex: 3, explanation: "An HDMI-only body needs a converter, or a transmitter that takes HDMI, for live work.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "Why does lesson 7 call for a locking or clamped HDMI cable on the FX3?", options: ["It doubles the HDMI bandwidth", "It adds genlock to the camera", "One jack carries the whole show", "It cuts the delay by one frame"], correctIndex: 2, explanation: "The FX3's single HDMI jack carries the whole show, so strain relief on a moving rig matters.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What MSRP did Blackmagic list for its Micro Converter HDMI to SDI 3G on October 21, 2026?", options: ["$989", "$75", "$750", "$175"], correctIndex: 1, explanation: "$75 MSRP (Blackmagic Design, n.d.). $989 is the AJA FS-Mini.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "Which production carried an HDMI-to-SDI converter in the operator's backpack?", options: ["BaylorVision", "Turner Sports", "Netflix", "CBS Sports"], correctIndex: 0, explanation: "BaylorVision carried one in its operator's backpack (Costa, 2021).", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What is timecode?", options: ["A label on each frame so recordings line up", "A signal that locks the camera's frame timing", "A code that pairs a transmitter with a receiver", "A setting that limits how long a clip runs"], correctIndex: 0, explanation: "Timecode labels every frame (hours, minutes, seconds, frame) so recordings line up later. Locking the timing is genlock.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What is genlock?", options: ["Labeling each frame with hours, minutes and seconds", "Locking the camera's timing to the truck's reference", "Locking the gimbal's motors before a camera swap", "Locking the lens's focus ring on a chosen subject"], correctIndex: 1, explanation: "Genlock locks the timing of the camera's picture to the truck's reference signal. Labeling frames is timecode.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "How does the FX3 take external timecode?", options: ["A BNC timecode input on the side of the body", "An SDI input that carries the house reference", "VMC-BNCM1 adapter on its Multi/Micro USB port", "A Wi-Fi link to a timecode app on a phone"], correctIndex: 2, explanation: "Sony's page: external timecode through the VMC-BNCM1 adapter on the Multi/Micro USB port (Sony, n.d.-a).", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What does Sony's timecode page describe for the FX3?", options: ["Timecode and genlock through one adapter", "Genlock only, through the USB port", "Neither timecode nor genlock at all", "Timecode matching only, not genlock"], correctIndex: 3, explanation: "The page describes matching timecode only; it says nothing about genlock (Sony, n.d.-a).", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "Of the three bodies in lesson 7, which lists a genlock input?", options: ["Sony FX6", "Sony FX3", "RED Komodo-X", "All three of them"], correctIndex: 2, explanation: "Only the Komodo-X lists a \"Tri-Level Genlock Input\" (AbelCine, n.d.). The FX6 and FX3 have none.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What does a frame synchronizer do?", options: ["Re-times a feed to the house reference", "Adds timecode to a camera's recording", "Converts HDMI into a fiber signal", "Pairs a transmitter and a receiver"], correctIndex: 0, explanation: "It holds each frame and releases it in step with the house reference, re-timing a camera that has no genlock.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What reference does AJA's FS-Mini lock to?", options: ["The camera's own HDMI timing only", "A GPS clock on the truck's roof", "The wireless link's channel number", "Blackburst or tri-level reference"], correctIndex: 3, explanation: "AJA: a \"utility frame sync\" that locks to blackburst or tri-level reference (AJA Video Systems, n.d.).", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "What US MSRP did AJA list for the FS-Mini on October 21, 2026?", options: ["$75", "$989", "$2,390", "$98"], correctIndex: 1, explanation: "$989 US MSRP (AJA Video Systems, n.d.). $75 is the Blackmagic converter.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "Which usually has frame sync built in?", options: ["The FX3 camera", "A network truck", "The gimbal grip", "The HDMI cable"], correctIndex: 1, explanation: "A network truck has frame sync built in; a small show or a stream may not, and then someone has to bring one.", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "Which questions does lesson 7 say to ask before the job?", options: ["Which brand, which color, which case", "Which lens, which f-stop, which ND", "Which week, which team, which coach", "HDMI or SDI, who converts, who syncs"], correctIndex: 3, explanation: "Will the picture arrive as HDMI or SDI? Who converts it? Who does frame sync?", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "Why does the research behind the course rate SDI-out bodies better for network trucks?", options: ["Locking connector and no converter needed", "They always weigh less than HDMI bodies", "They have no rolling-shutter lean at all", "They never need a frame synchronizer"], correctIndex: 0, explanation: "An SDI-out body sends its picture on a locking BNC connector and needs no converter (Allard, 2020; AbelCine, n.d.).", sourceLessonSlug: "outputs-timecode-and-genlock" },
          { prompt: "Does live TV use the camera's recording?", options: ["Yes; the truck reads the recording", "Yes, but only when shading is on", "No; live TV takes the video output", "No; live TV takes the SD card"], correctIndex: 2, explanation: "Live TV takes the camera's video output. The recording is a separate copy.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What is the camera's internal recording used for?", options: ["Sending the live feed to the truck", "Locking the camera's timing to genlock", "Powering the transmitter on the rig", "An iso record, replay or editing later"], correctIndex: 3, explanation: "The recording is a separate copy used for an isolated (\"iso\") record, for replay or for editing later.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "Which video formats does Sony list for the FX3?", options: ["ProRes RAW and Blackmagic RAW only", "REDCODE RAW and ProRes 4444 XQ", "XAVC HS (H.265) and XAVC S (H.264)", "Uncompressed DPX image sequences"], correctIndex: 2, explanation: "Sony lists XAVC HS (H.265) and XAVC S (H.264), with LPCM audio (Sony, n.d.-b).", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What audio does the FX3 record with the XLR handle attached?", options: ["2 channels of AAC", "4 channels of LPCM", "8 channels of AC-3", "1 channel of MP3"], correctIndex: 1, explanation: "With the XLR handle attached, it records 4 channels of LPCM audio (Sony, n.d.-b).", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What does Sony's FX3 specifications page leave unstated?", options: ["The HDMI output's bit depth and sampling", "The camera's power draw for movies", "The camera's operating temperature", "The size of the camera's sensor"], correctIndex: 0, explanation: "Sony's page does not state the bit depth or color sampling of the HDMI output. It does list power, temperature and sensor size.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What should you do before promising a show \"10-bit 4:2:2\" from an FX3?", options: ["Check it in the camera's menu", "Assume it, since Sony implies it", "Ask the gimbal maker to confirm", "Promise it; the truck can fix it"], correctIndex: 0, explanation: "Sony's page does not state it, so check it in the camera's menu with the show's settings.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "How much power does Sony list for the FX3 while shooting movies?", options: ["About 18.0 W", "About 7.3 W", "About 35 W", "About 73 W"], correctIndex: 1, explanation: "About 7.3 W (Sony, n.d.-b). The FX6 draws about 18.0 W.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "How much power does the Sony FX6 draw?", options: ["About 7.3 W", "About 1.8 W", "About 18.0 W", "About 98 W"], correctIndex: 2, explanation: "About 18.0 W (Allard, 2020), against about 7.3 W for the FX3.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What is the FX3's operating temperature range?", options: ["-20 to 45 °C", "10 to 30 °C", "-10 to 60 °C", "0 to 40 °C"], correctIndex: 3, explanation: "Sony lists 0 to 40 °C (Sony, n.d.-b). -20 to 45 °C is the DJI RS 4 Pro gimbal's range.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What did Fox find helped with overheating?", options: ["Recording at a higher bit rate in sun", "Wrapping the camera in black cloth", "Moving the batteries out of the camera", "Turning the monitor up to full power"], correctIndex: 2, explanation: "Ligrani: \"Getting the batteries out of the camera helped\" (Mrozek, 2021).", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What did BaylorVision report about its backpack?", options: ["The battery and RF units got quite hot", "The backpack froze in the cold rain", "The converter failed at halftime", "The battery lasted only ten minutes"], correctIndex: 0, explanation: "Costa (2021): \"The battery and RF units got quite hot during both productions.\"", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What voltage is the FX3's battery rated at?", options: ["14.8 V", "12 V", "3.7 V", "7.2 V"], correctIndex: 3, explanation: "The FX3's battery is rated 7.2 V (Sony, n.d.-b). 14.8 V is the Core SWX V-mount pack.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What voltage is the Core SWX NANO X Micro 98 Wh pack rated at?", options: ["7.2 V", "14.8 V", "9 V", "48 V"], correctIndex: 1, explanation: "Core SWX lists 14.8 V (Core SWX, n.d.), about twice the FX3 battery's 7.2 V.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "Why must a D-Tap to dummy-battery cable for the FX3 be regulated?", options: ["Regulated cables carry the video signal too", "The pack is about twice the camera's rating", "Unregulated cables cannot fit a V-mount", "The camera needs more voltage than the pack"], correctIndex: 1, explanation: "A 14.8 V pack is about twice the FX3's 7.2 V rating, so the cable must bring the voltage down.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What is a \"dummy battery\"?", options: ["A drained battery kept as a spare", "A battery that only powers the monitor", "A fake battery used to balance a gimbal", "A plug shaped like the camera's battery"], correctIndex: 3, explanation: "A dummy battery is a plug shaped like the camera's own battery, on the end of a cable from a larger pack.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What USB adaptor output does Sony recommend for the FX3?", options: ["9 V / 2 A or more, 15 V / 2 A or more", "9 V / 3 A only, with no other option", "5 V / 1 A, like a phone charger", "20 V / 5 A or more, and nothing less"], correctIndex: 0, explanation: "Sony lists \"9 V / 2 A or more, 15 V / 2 A or more\" (Sony, n.d.-b). An earlier draft said \"9V/3A.\"", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What happens when you swap the main battery with nothing to bridge the gap?", options: ["Only the monitor briefly goes dark", "The camera switches to Wi-Fi power", "Everything on that pack loses power", "Nothing; packs swap without a gap"], correctIndex: 2, explanation: "Batteries are energy, not continuity: a swap cuts power to everything on the pack unless something bridges it.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "Which of these can bridge a main-battery swap?", options: ["A longer D-Tap cable to the pack", "A brighter monitor on the rig", "An HDMI-to-SDI converter", "A plate that takes two packs"], correctIndex: 3, explanation: "Lesson 8 names a plate that takes two packs, or the camera's own battery left inside.", sourceLessonSlug: "recording-power-and-heat" },
          { prompt: "What does a bigger body's higher power draw mean for the rig?", options: ["A shorter HDMI cable", "A lower f-number lens", "Bigger or more batteries", "Less heat in the sun"], correctIndex: 2, explanation: "A bigger body draws more power, which means bigger or more batteries on the rig.", sourceLessonSlug: "recording-power-and-heat" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: Lenses
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-lens-spec-tells-you",
      title: "9 · What a lens spec tells you",
      section: "3 · Lenses",
      recallContent: [
        {
          prompt: "What did Sony's FX3 spec page leave unstated that a shader cares about?",
          answer: "The bit depth and color sampling of the HDMI output. Check them in the camera's menu before promising them.",
        },
        {
          prompt: "What is the FX3's operating temperature range?",
          answer: "0 to 40 °C (Sony, n.d.-b).",
        },
      ],
      body: `**The lens's job.** The lens frames the shot and sets how much of it is sharp. On this rig it also sets how hard the operator's job is, because every bit of extra shallowness is a bit less room for error.

**Fox's choice.** Fox's original rig used a Sony FE 24-70mm f/2.8 GM, an autofocus zoom (Costa, 2020). That one lens covers a wide view at 24mm and a tighter one at 70mm, at f/2.8 the whole way.

**Four specs to read, and why each matters.**

| Spec | What to look for | Why |
|---|---|---|
| Focal length range | Where the wide end starts | A 24mm wide end frames more of a huddle from the sideline than a 28mm one, at the same spot. With a 28mm lens, the operator has to back away to fit the group in, and on a sideline there may be a coach behind. |
| Maximum aperture | The lowest f-number | It sets how thin the depth of field can go (lesson 3) and how much light the lens lets in for night games. |
| Autofocus | A fast, quiet autofocus motor | Shallow-focus live work depends on autofocus, as lesson 10 shows. Fox's lens was an autofocus lens. |
| Weight and balance | Grams, and where the weight sits | Every gram rides on the gimbal and the operator's arms. A zoom must be balanced at the focal length you actually use (section 4). |

**Using the numbers from lesson 3.** At 3 m, a 50mm lens on full frame holds about 0.60 m in focus at f/2.8 and about 0.26 m at f/1.2. Fox's operators already work with "under 2 feet" (Mrozek, 2021). So an f/2.8 zoom on a full-frame body already gives the look. An f/1.2 lens makes the zone less than half as deep. That is a bigger effect, and a bigger risk.

**Zoom or prime.** A zoom changes focal length. A prime has one focal length. In this course's examples the zooms stop at f/2.8, and the f/1.2 lenses are all primes (lessons 11 and 12). BaylorVision used a Sigma prime (Costa, 2021). Turner used a 50mm lens (Kerschbaumer et al., 2021). Fox used a zoom. Lesson 11 compares them.

**The working rule.** Use a lens you can hold focus with for the whole game, and save the fastest glass for moments you choose. Lessons 10 to 12 show why, and what it costs.

:::reveal Why does the wide end of a zoom matter on a sideline? ||| A 24mm wide end frames more of a huddle from the same spot than 28mm, so the operator does not have to back away into the people behind.

:::reveal Which lens did Fox's original rig use? ||| A Sony FE 24-70mm f/2.8 GM, an autofocus zoom.

## Sources
- ${COSTA_2020} Locator: the paragraph naming the lens.
- ${MROZEK_2021} Locator: the passage on working with under 2 feet of depth of field.
- ${COSTA_2021} Locator: the paragraph naming the Sigma prime.
- ${KERSCHBAUMER_2021} Locator: the section on Turner Sports' 50mm lens.`,
    },
    {
      slug: "holding-focus-live",
      title: "10 · Holding focus live",
      section: "3 · Lenses",
      recallContent: [
        {
          prompt: "Name the four lens specs lesson 9 says to read.",
          answer: "Focal length range, maximum aperture, autofocus, and weight and balance.",
        },
        {
          prompt: "At 3 m on full frame with a 50mm lens, how much is in focus at f/2.8 compared with f/1.2?",
          answer: "About 0.60 m at f/2.8 against about 0.26 m at f/1.2.",
        },
      ],
      body: `**Why focus is the hard part.** A thin zone in focus leaves little room. Mike Davies of Fox put it this way: "Keeping focus on a camera like this is like keeping a marble on a mirror" (Kerschbaumer et al., 2021).

**What goes wrong.** Fox's operators have seen autofocus lock onto "the crowd in the background instead of the player in the foreground" (Mrozek, 2021). The troubleshooting notes behind this course name the cause: a shallow depth of field in front of a high-contrast background. 
**What the operator can change.** Each of these moves comes from that cause, so the reason is given with it:

1. **Use subject tracking.** Tell the camera which person to follow, so it does not pick its own target.
2. **Make the autofocus area smaller.** A small box over the player gives the crowd less chance to get in.
3. **Lower how quickly autofocus switches subjects.** A slower switch means a fan walking behind the player does not steal focus for a frame.
4. **Stop down.** A higher f-number makes the zone deeper. In lesson 3's example, going from f/1.2 to f/2.8 more than doubles the zone, from about 0.26 m to about 0.60 m.

**Match the f-stop to the moment.** At f/1.2 the zone at 3 m is under a foot. A fast player can step out of it before autofocus catches up. So shoot live action at f/2.8, and save f/1.2 for moments you set up: an introduction, a celebration, a player standing still. That is a choice about risk, not about looks alone.

**Who controls the iris.** On some shows, a video operator in the truck adjusts the camera from afar. Cyanview's control of Sony Alpha bodies lists iris among the settings it can reach (Cyanview, n.d.-a). The iris is what sets the f-number. So if the truck controls the iris, the truck also changes your depth of field. Ask before the show who owns it.

**Check your own work.** If the camera is recording, look at a few clips at a break. A missed focus is easy to see on a recording and hard to see on a small monitor in the sun.

**One habit.** Write your autofocus settings on a settings card and keep it with the rig. If a menu change goes wrong mid-show, the card puts you back.

:::reveal What did Fox's operators see autofocus do? ||| Lock onto "the crowd in the background instead of the player in the foreground" (Mrozek, 2021).

:::reveal If the truck controls the iris, what else does it control? ||| The f-number, and so the depth of field.

## Sources
- ${KERSCHBAUMER_2021} Locator: the passage quoting Mike Davies ("a marble on a mirror").
- ${MROZEK_2021} Locator: the passage on autofocus locking onto the crowd.
- ${CYANVIEW_ALPHA} Locator: the list of controllable settings.`,
    },
    {
      slug: "zooms-primes-and-weight",
      title: "11 · Zooms, primes and weight",
      section: "3 · Lenses",
      recallContent: [
        {
          prompt: "What did Mike Davies of Fox compare keeping focus to?",
          answer: "\"Keeping a marble on a mirror\" (Kerschbaumer et al., 2021).",
        },
        {
          prompt: "Name two settings changes that keep autofocus off the crowd.",
          answer: "Any two of: subject tracking, a smaller autofocus area, a slower subject switch, or stopping down to a higher f-number.",
        },
      ],
      body: `**Zoom against prime.** A zoom lets the operator reframe without moving. A prime has one focal length; the f/1.2 lenses in this lesson are all primes. For this rig, the choice is less about the picture than about what the operator can carry and hold in focus all game.

**Standard zooms on the market.** Three full-frame standard zooms for Sony's E-mount, with the details that matter here:

| Lens | Range and aperture | Source |
|---|---|---|
| Sony FE 24-70mm f/2.8 GM II | 24 to 70mm, f/2.8 | Focus Camera (n.d.-e) |
| Sigma 24-70mm F2.8 DG DN II Art | 24 to 70mm, f/2.8 | Sigma Corporation of America (n.d.-a) |
| Tamron 28-75mm f/2.8 Di III VXD G2 | 28 to 75mm, f/2.8 | Focus Camera (n.d.-f) |

Note the Tamron's wide end. Tamron's native E-mount standard zoom starts at 28mm, not 24mm. Lesson 9 explained what those 4 millimeters cost on a sideline.

**Fast primes.** For the f/1.2 moments, Sigma makes a 50mm F1.2 DG DN Art (Sigma Corporation of America, n.d.-c) and a 35mm F1.2 DG II Art (Sigma Corporation of America, n.d.-b), and Sony makes the FE 50mm f/1.2 GM (Focus Camera, n.d.-d).

**A correction to carry.** An earlier draft listed a "Sigma Cine Pro 24-70mm T2.2." Treat that lens as one that does not exist. Sigma's full-frame cine zoom page lists only the 24-35mm T2.2 (Sigma, n.d.).

**Weight is part of the spec.** That Sigma 24-35mm T2.2 weighs 1.6 kg in E-mount (Sigma, n.d.). The DJI RS 4 gimbal has a tested payload of 3 kg (DJI, n.d.-b). Do the sum: the lens alone uses more than half the gimbal's payload before the camera, monitor or transmitter is added. The documented rigs used photo lenses instead: a Sony zoom on Fox's rig and a Sigma prime on BaylorVision's (lesson 4). The FX3 body weighs about 715 g with battery and card (Sony, n.d.-b), less than half that cine zoom.

**Balance moves when you zoom.** Zooming shifts a lens's center of gravity. A gimbal balanced at 24mm may be off at 70mm. Balance at the focal length you use most (section 4).

**A working kit.** Many crews pair the two: an f/2.8 zoom as the working lens for the game, and an f/1.2 prime for set pieces. Lesson 12 prices that pair.

:::reveal Why is the "Sigma Cine Pro 24-70mm T2.2" a correction in this course? ||| Sigma's full-frame cine zoom page lists only the 24-35mm T2.2, so treat the 24-70mm T2.2 as nonexistent.

:::reveal What share of a DJI RS 4's 3 kg tested payload does the 1.6 kg Sigma cine zoom use? ||| More than half, before the camera, monitor or transmitter is added.

## Sources
- ${FOCUS_GM2} Locator: product title.
- ${SIGMA_2470} Locator: product title.
- ${FOCUS_TAMRON} Locator: product title.
- ${SIGMA_50} Locator: product title.
- ${SIGMA_35} Locator: product title.
- ${FOCUS_SONY_50} Locator: product title.
- ${SIGMA_CINE} Locator: the full-frame cine zoom lineup and the E-mount weight in the specifications.
- ${DJI_RS4_SPECS} Locator: "Tested payload" entry.
- ${SONY_SPECS} Locator: "Mass" entry.`,
    },
    {
      slug: "the-cost-of-fast-glass",
      title: "12 · The cost of fast glass",
      section: "3 · Lenses",
      recallContent: [
        {
          prompt: "Where does the Tamron 28-75mm G2's range start, and why does that matter?",
          answer: "At 28mm, not 24mm, so it frames less of a huddle from the same sideline spot.",
        },
        {
          prompt: "What does Sigma's full-frame cine zoom page list?",
          answer: "Only the 24-35mm T2.2, at 1.6 kg in E-mount.",
        },
      ],
      body: `${QR("a working camera operator or a rental-house technician, to re-read each price on the date of release")}

**Prices, with their date.** Every price below was shown on the maker's or retailer's page on October 21, 2026. Prices change; check them again before you buy. They exclude sales tax and delivery.

| Lens | New price | Used price | Source |
|---|---|---|---|
| Sony FE 50mm f/1.2 GM | $2,298.00 | $1,865.95 | Focus Camera (n.d.-d) |
| Sigma 50mm F1.2 DG DN Art | $1,539 | | Sigma Corporation of America (n.d.-c) |
| Sigma 35mm F1.2 DG II Art | $1,549 | | Sigma Corporation of America (n.d.-b) |
| Sony FE 24-70mm f/2.8 GM II | $2,448.00 | $1,990.95 | Focus Camera (n.d.-e) |
| Sigma 24-70mm F2.8 DG DN II Art | $1,219.00 (instant savings price) | | Sigma Corporation of America (n.d.-a) |
| Tamron 28-75mm f/2.8 G2 | $899.00 | | Focus Camera (n.d.-f) |

**A correction to carry.** An earlier draft quoted the Sony 50mm f/1.2 GM at about $2,000 and the Sigma 50mm f/1.2 at about $1,400. On October 21, 2026, they were $2,298 and $1,539. Old prices travel a long way online. Always write down the date you read a price.

**What the table says.** The fast primes and the Sony zoom cost far more than the Tamron. The Sigma zoom costs $1,229 less than the Sony GM II zoom: $2,448 minus $1,219. Both are 24-70mm f/2.8 lenses. What you would be testing is how their autofocus behaves on moving players, which a price list cannot tell you.

**Renting first.** Lensrentals listed rental prices on the same day:

| Lens | 3-day rental | 7-day rental | Source |
|---|---|---|---|
| Sigma 50mm f/1.2 DG DN Art | $59 | $84 | Lensrentals (n.d.-b) |
| Sony FE 24-70mm f/2.8 GM II | $79 | $113 | Lensrentals (n.d.-c) |

Do the sum for the Sigma 50mm: $1,539 to buy, $59 for a 3-day rental. That is about 26 rentals before buying costs less ($1,539 ÷ $59 is about 26). If you will use an f/1.2 lens only for a few set pieces a season, renting it for the shows that want it may be the better deal.

**A test before you buy.** Rent both zooms for one game. Watch the autofocus on players running toward you and across the frame. Then decide. A lens that holds focus is worth more on this rig than a lens that is a little sharper.

**What this lesson does not cover.** Renting gear out to others as a business is a separate subject, taught in its own course. This lesson is only about what a lens costs the person who uses it.

:::reveal How much less did the Sigma 24-70mm F2.8 DG DN II cost than the Sony 24-70mm GM II on October 21, 2026? ||| $1,229 less: $1,219 against $2,448.

:::reveal About how many 3-day rentals of the Sigma 50mm f/1.2 equal its purchase price? ||| About 26: $1,539 ÷ $59.

## Sources
- ${FOCUS_SONY_50} Locator: new and used prices on the product page.
- ${SIGMA_50} Locator: price on the product page.
- ${SIGMA_35} Locator: price on the product page.
- ${FOCUS_GM2} Locator: new and used prices on the product page.
- ${SIGMA_2470} Locator: instant savings price on the product page.
- ${FOCUS_TAMRON} Locator: price on the product page.
- ${LENSRENTALS_SIGMA_50} Locator: rental price table (3-day and 7-day).
- ${LENSRENTALS_GM2} Locator: rental price table (3-day and 7-day).`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Lenses",
      section: "3 · Lenses",
      body: "A graded check on reading a lens spec, holding focus live, zooms against primes and weight, and what fast glass cost on October 21, 2026. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What is the lens's job on this rig?", options: ["Carry the live picture to the receiver", "Cancel rotation as the operator walks", "Frame the shot and set how much is sharp", "Turn light into a live video signal"], correctIndex: 2, explanation: "The lens frames the shot and sets how much of it is sharp. The link, gimbal and body do the other jobs.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "What kind of lens was on Fox's original rig?", options: ["An autofocus zoom", "A manual-focus prime", "A cine zoom in T-stops", "A fixed-focus wide"], correctIndex: 0, explanation: "Fox used the Sony FE 24-70mm f/2.8 GM, an autofocus zoom (Costa, 2020).", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "What focal length range does Fox's original lens cover?", options: ["28mm to 75mm", "24mm to 35mm", "50mm only", "24mm to 70mm"], correctIndex: 3, explanation: "24mm to 70mm. 28-75mm is the Tamron, and 24-35mm is Sigma's cine zoom.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "At what aperture does Fox's zoom work across its whole range?", options: ["f/1.2", "f/2.8", "f/4.0", "f/2.0"], correctIndex: 1, explanation: "The Sony FE 24-70mm f/2.8 GM works at f/2.8 the whole way.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Why does a 24mm wide end beat a 28mm one on a sideline?", options: ["It gives a thinner depth of field than 28mm", "It frames more of a huddle from the same spot", "It weighs less on the gimbal than a 28mm", "It holds autofocus better on fast players"], correctIndex: 1, explanation: "A 24mm wide end frames more of a huddle from the same spot, so the operator does not have to back away.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "What does a lens's maximum aperture set?", options: ["How far the lens can zoom in and out", "How many frames the camera records", "How wide the lens frames a huddle", "How thin focus goes and the light at night"], correctIndex: 3, explanation: "Maximum aperture sets how thin the depth of field can go and how much light the lens lets in for night games.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Why does autofocus matter on this rig?", options: ["Shallow-focus live work depends on it", "Autofocus lenses weigh less than others", "The NFL requires autofocus on sidelines", "Autofocus removes rolling-shutter lean"], correctIndex: 0, explanation: "Shallow-focus live work depends on autofocus, as lesson 10 shows.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "At which setting should a zoom be balanced on the gimbal?", options: ["At its widest setting, always", "At its longest setting, always", "At the focal length you use most", "Anywhere; zooms do not shift"], correctIndex: 2, explanation: "A zoom must be balanced at the focal length you actually use (section 4).", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Compared with f/2.8, how deep is the f/1.2 zone in lesson 9's example?", options: ["About twice as deep", "Exactly the same depth", "About ten times as deep", "Less than half as deep"], correctIndex: 3, explanation: "About 0.26 m at f/1.2 against about 0.60 m at f/2.8: less than half as deep.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Does an f/2.8 zoom on a full-frame body give the look, according to lesson 9?", options: ["No; only f/1.2 gives any shallow look", "No; f/2.8 needs a Super 35 sensor", "Yes; it lands at Fox's under 2 feet", "Only at night, when light is low"], correctIndex: 2, explanation: "At 3 m, f/2.8 on full frame holds about 0.60 m, already within Fox's \"under 2 feet.\"", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "What is a prime lens?", options: ["A lens that zooms 24 to 70mm", "A lens with one focal length", "A lens with a global shutter", "A lens marked only in T-stops"], correctIndex: 1, explanation: "A prime has one focal length; a zoom changes focal length.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Which rig used a Sigma prime?", options: ["BaylorVision's", "Fox's original", "CBS's MōVI rig", "ESPN's Alpha 1"], correctIndex: 0, explanation: "BaylorVision used a Sigma prime (Costa, 2021). Fox used a zoom.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Which lens did Turner Sports use?", options: ["A 50mm lens", "A 24-70mm zoom", "A 28-75mm zoom", "A 24-35mm cine zoom"], correctIndex: 0, explanation: "Turner used a 50mm lens on a Canon C500 (Kerschbaumer et al., 2021).", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "What working rule does lesson 9 end with?", options: ["Use the fastest glass for every single play", "Hold focus all game; save the fastest glass", "Use the widest lens the gimbal can carry", "Use manual focus whenever light is low"], correctIndex: 1, explanation: "Use a lens you can hold focus with for the whole game, and save the fastest glass for moments you choose.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "In this course's examples, which lenses reach f/1.2?", options: ["Only the zooms", "Both zooms and primes", "Only the primes", "Neither kind of lens"], correctIndex: 2, explanation: "The zooms in the course stop at f/2.8, and the f/1.2 lenses are all primes.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "Why should a sideline operator not have to back away to frame a huddle?", options: ["The link drops past 3 feet", "The gimbal cannot walk back", "The lens stops at 2 meters", "There may be a coach behind"], correctIndex: 3, explanation: "Lesson 9: with a 28mm lens the operator has to back away, and on a sideline there may be a coach behind.", sourceLessonSlug: "what-a-lens-spec-tells-you" },
          { prompt: "How did Mike Davies of Fox describe keeping focus on this camera?", options: ["\"like threading a needle in wind\"", "\"like catching a punt in the rain\"", "\"like keeping a marble on a mirror\"", "\"like painting a moving target\""], correctIndex: 2, explanation: "\"Keeping focus on a camera like this is like keeping a marble on a mirror\" (Kerschbaumer et al., 2021).", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Who compared keeping focus to keeping a marble on a mirror?", options: ["Mike Davies of Fox", "Jarrod Ligrani of Fox", "Mike Smole of Fox", "A CBS golf director"], correctIndex: 0, explanation: "Mike Davies of Fox, quoted by Kerschbaumer et al. (2021).", sourceLessonSlug: "holding-focus-live" },
          { prompt: "What have Fox's operators seen autofocus lock onto?", options: ["The ball instead of the player", "The operator's own hand", "The scoreboard's numbers", "The crowd behind the player"], correctIndex: 3, explanation: "\"The crowd in the background instead of the player in the foreground\" (Mrozek, 2021).", sourceLessonSlug: "holding-focus-live" },
          { prompt: "What cause do the troubleshooting notes give for autofocus jumping to the crowd?", options: ["A rolling shutter on a fast whip pan", "Shallow focus before a busy background", "A low battery in the gimbal grip", "A wireless link with too much delay"], correctIndex: 1, explanation: "The cause named is a shallow depth of field in front of a high-contrast background.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why use subject tracking?", options: ["So the gimbal pans toward the ball itself", "So the camera follows the person you chose", "So the truck can take over the iris", "So the link uses less of its channel"], correctIndex: 1, explanation: "Subject tracking tells the camera which person to follow, so it does not pick its own target.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why make the autofocus area smaller?", options: ["It makes the depth of field much deeper", "It cuts the camera's power draw in half", "It lets the camera record in 10-bit", "It gives the crowd less chance to get in"], correctIndex: 3, explanation: "A small box over the player gives the crowd less chance to get in.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why lower how quickly autofocus switches subjects?", options: ["A passing fan does not steal focus", "The lens stays at its widest setting", "The gimbal motors run more quietly", "The transmitter keeps a steady link"], correctIndex: 0, explanation: "A slower switch means a fan walking behind the player does not steal focus for a frame.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "In lesson 3's example, what does stopping down from f/1.2 to f/2.8 do to the zone?", options: ["Cuts it in half", "Leaves it unchanged", "More than doubles it", "Doubles the blur"], correctIndex: 2, explanation: "From about 0.26 m to about 0.60 m: more than double.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "What f-stop rule does lesson 10 give?", options: ["f/1.2 for action; f/2.8 for set-up moments", "f/1.2 all game for the strongest look", "f/4 all game, and never anything else", "f/2.8 for action; f/1.2 for set-up moments"], correctIndex: 3, explanation: "Shoot live action at f/2.8, and save f/1.2 for moments you set up. It is a choice about risk.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why can a fast player go soft at f/1.2?", options: ["The shutter cannot keep up with their speed", "The link drops frames when players run", "They leave the zone before autofocus catches up", "The gimbal tilts away from fast players"], correctIndex: 2, explanation: "At f/1.2 the zone at 3 m is under a foot, so a fast player can step out of it before autofocus catches up.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "What does a lens's iris set?", options: ["The frame rate", "The f-number", "The white balance", "The timecode"], correctIndex: 1, explanation: "The iris is what sets the f-number.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "If the truck controls the iris, what else does it change?", options: ["Your depth of field", "Your frame rate", "Your audio levels", "Your tally light"], correctIndex: 0, explanation: "The iris sets the f-number, and the f-number sets the depth of field.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Which setting in Cyanview's Sony Alpha list changes depth of field?", options: ["Iris", "Knee", "Detail", "Hue"], correctIndex: 0, explanation: "Cyanview's list includes iris (Cyanview, n.d.-a), and the iris sets the f-number.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "What does lesson 10 say to ask before the show?", options: ["Who owns the lens", "Who owns the iris", "Who owns the truck", "Who owns the gimbal"], correctIndex: 1, explanation: "If the truck controls the iris, it also changes your depth of field, so ask who owns it.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why look at a few recorded clips at a break?", options: ["Clips must be deleted every quarter", "The truck cannot see your recordings", "Missed focus shows on a recording", "Recording stops at every break"], correctIndex: 2, explanation: "A missed focus is easy to see on a recording and hard to see on a small monitor in the sun.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why keep your autofocus settings on a settings card?", options: ["To show the league your frequency plan", "To note each player's jersey number", "To log every battery's serial number", "To restore settings after a menu mistake"], correctIndex: 3, explanation: "If a menu change goes wrong mid-show, the card puts you back.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "Why is a missed focus hard to spot live?", options: ["The live feed is in black and white", "Tally lights cover the monitor's center", "A small monitor in the sun hides it", "The gimbal shakes the monitor too hard"], correctIndex: 2, explanation: "Lesson 10: a missed focus is hard to see on a small monitor in the sun.", sourceLessonSlug: "holding-focus-live" },
          { prompt: "What does a zoom let the operator do?", options: ["Reframe without moving", "Get a global shutter", "Skip all balancing", "Reach f/1.2 at 70mm"], correctIndex: 0, explanation: "A zoom lets the operator reframe without moving.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "Which standard zoom starts at 28mm rather than 24mm?", options: ["Sony 24-70mm GM II", "Sigma 24-70mm DG DN II", "Sony FE 24-70mm GM", "Tamron 28-75mm G2"], correctIndex: 3, explanation: "Tamron's native E-mount standard zoom starts at 28mm (Focus Camera, n.d.-f).", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What maximum aperture do lesson 11's three standard zooms share?", options: ["f/1.2", "f/2.8", "f/4", "T2.2"], correctIndex: 1, explanation: "The Sony GM II, the Sigma DG DN II and the Tamron G2 are all f/2.8 zooms.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "Which fast primes does lesson 11 list?", options: ["Sigma 24-35mm T2.2 and Sony 24-70mm GM II", "Sigma 50 and 35mm F1.2, Sony 50mm f/1.2 GM", "Tamron 28-75mm G2 and Sigma 24-70mm II", "Canon 50mm and Sony 85mm, both at f/1.4"], correctIndex: 1, explanation: "Sigma's 50mm F1.2 DG DN and 35mm F1.2 DG II, and Sony's FE 50mm f/1.2 GM.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "Which lens should you treat as one that does not exist?", options: ["Sigma 24-35mm T2.2 FF", "Tamron 28-75mm f/2.8 G2", "Sony FE 50mm f/1.2 GM", "Sigma Cine Pro 24-70mm T2.2"], correctIndex: 3, explanation: "Sigma's full-frame cine zoom page lists only the 24-35mm T2.2, so the 24-70mm T2.2 from an earlier draft is treated as nonexistent.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What does Sigma's full-frame cine zoom page list?", options: ["Only the 24-35mm T2.2", "Only the 24-70mm T2.2", "A 24-35mm and a 24-70mm", "No zooms, only primes"], correctIndex: 0, explanation: "Only the 24-35mm T2.2 (Sigma, n.d.).", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "How much does the Sigma 24-35mm T2.2 weigh in E-mount?", options: ["715 g", "890 g", "1.6 kg", "4.5 kg"], correctIndex: 2, explanation: "1.6 kg (Sigma, n.d.). 715 g is the FX3, 890 g the FX6 body, 4.5 kg the RS 4 Pro's payload.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What is the DJI RS 4's tested payload?", options: ["4.5 kg", "1.6 kg", "13 kg", "3 kg"], correctIndex: 3, explanation: "3 kg (DJI, n.d.-b). 4.5 kg is the RS 4 Pro.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "How much of a DJI RS 4's 3 kg payload does the 1.6 kg cine zoom use?", options: ["About a tenth, leaving lots of room", "All of it, plus another kilogram", "More than half, before anything else", "None; lenses do not count to payload"], correctIndex: 2, explanation: "1.6 kg of 3 kg is more than half, before the camera, monitor or transmitter is added.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What kind of lenses did the documented rigs use?", options: ["The Sigma cine zoom on all", "Photo lenses, not cine zooms", "No lens; the body is fixed", "Manual cine primes only"], correctIndex: 1, explanation: "A Sony zoom on Fox's rig and a Sigma prime on BaylorVision's: photo lenses.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "How does the FX3's weight compare with the Sigma cine zoom's?", options: ["Less than half the zoom's weight", "About twice the zoom's weight", "Exactly the same as the zoom", "Ten times the zoom's weight"], correctIndex: 0, explanation: "About 715 g against 1.6 kg: less than half.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What happens to a gimbal's balance when you zoom?", options: ["The center of gravity shifts", "The gimbal's payload doubles", "Nothing; zooms keep balance", "The camera's sensor moves"], correctIndex: 0, explanation: "Zooming shifts a lens's center of gravity, so a rig balanced at 24mm may be off at 70mm.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What working kit do many crews pair together?", options: ["Two f/1.2 primes and no zoom", "An f/2.8 zoom plus an f/1.2 prime", "One cine zoom and nothing else", "An f/4 zoom plus a cine zoom"], correctIndex: 1, explanation: "An f/2.8 zoom as the working lens for the game, and an f/1.2 prime for set pieces.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "By how many millimeters does the Tamron's wide end fall short of the Sony and Sigma zooms?", options: ["5mm", "14mm", "4mm", "46mm"], correctIndex: 2, explanation: "28mm against 24mm: 4 millimeters, which lesson 9 explained matter on a sideline.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "Who makes the FE 50mm f/1.2 GM?", options: ["Sigma", "Tamron", "Zeiss", "Sony"], correctIndex: 3, explanation: "The FE 50mm f/1.2 GM is Sony's (Focus Camera, n.d.-d).", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "Which lenses in lesson 11 are f/2.8 zooms?", options: ["Sigma 50mm, Sigma 35mm, Sony 50mm GM", "Sigma 24-35mm T2.2 and two primes", "Sony GM II, Sigma DG DN II, Tamron G2", "Only the Sony GM II; the rest are primes"], correctIndex: 2, explanation: "The three standard zooms are the Sony GM II, the Sigma DG DN II and the Tamron G2.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What kind of lens did BaylorVision use?", options: ["A Sigma prime", "A Sony zoom", "A cine zoom", "A Tamron zoom"], correctIndex: 0, explanation: "BaylorVision used a Sigma prime (Costa, 2021); Fox used a Sony zoom.", sourceLessonSlug: "zooms-primes-and-weight" },
          { prompt: "What did the Sony FE 50mm f/1.2 GM cost new on October 21, 2026?", options: ["$1,539.00", "$2,000.00", "$899.00", "$2,298.00"], correctIndex: 3, explanation: "$2,298.00 (Focus Camera, n.d.-d). An earlier draft's $2,000 was stale.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What did the Sigma 50mm F1.2 DG DN Art cost on October 21, 2026?", options: ["$1,400", "$1,539", "$2,298", "$1,219"], correctIndex: 1, explanation: "$1,539 (Sigma Corporation of America, n.d.-c). An earlier draft's $1,400 was stale.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What did the Sigma 35mm F1.2 DG II Art cost on October 21, 2026?", options: ["$1,049", "$1,549", "$2,448", "$899"], correctIndex: 1, explanation: "$1,549 (Sigma Corporation of America, n.d.-b).", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What did the Sony FE 24-70mm f/2.8 GM II cost new on October 21, 2026?", options: ["$1,990.95", "$1,219.00", "$2,298.00", "$2,448.00"], correctIndex: 3, explanation: "$2,448.00 new (Focus Camera, n.d.-e). $1,990.95 was its used price.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What was the Sigma 24-70mm F2.8 DG DN II Art's instant savings price on October 21, 2026?", options: ["$1,219.00", "$2,448.00", "$899.00", "$1,539.00"], correctIndex: 0, explanation: "$1,219.00 (Sigma Corporation of America, n.d.-a).", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What did the Tamron 28-75mm f/2.8 G2 cost on October 21, 2026?", options: ["$1,219.00", "$609.00", "$899.00", "$2,098.00"], correctIndex: 2, explanation: "$899.00 (Focus Camera, n.d.-f).", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "How much less did the Sigma 24-70mm zoom cost than the Sony GM II on that date?", options: ["$1,000", "$759", "$2,448", "$1,229"], correctIndex: 3, explanation: "$2,448 minus $1,219 is $1,229.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What was the used price of the Sony FE 24-70mm f/2.8 GM II on October 21, 2026?", options: ["$1,865.95", "$2,448.00", "$1,990.95", "$1,219.00"], correctIndex: 2, explanation: "$1,990.95 used (Focus Camera, n.d.-e). $1,865.95 was the used Sony 50mm f/1.2 GM.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "Why does the course correct an earlier draft's $2,000 for the Sony 50mm f/1.2 GM?", options: ["It was too high; the page showed $1,539", "It was stale; the page showed $2,298", "It was a rental price, not a sale price", "It included tax and delivery charges"], correctIndex: 1, explanation: "On October 21, 2026, the page showed $2,298. Old prices travel a long way online.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What should you always write next to a price you read?", options: ["The date you read it", "The store's phone number", "The lens's serial number", "The tax rate you paid"], correctIndex: 0, explanation: "Prices change, so always write down the date you read a price.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "Do lesson 12's prices include sales tax and delivery?", options: ["No, they exclude both", "Yes, they include both", "Tax only, not delivery", "Delivery only, not tax"], correctIndex: 0, explanation: "Lesson 12: the prices exclude sales tax and delivery.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What did Lensrentals charge for a 3-day rental of the Sigma 50mm f/1.2 on October 21, 2026?", options: ["$84", "$59", "$79", "$113"], correctIndex: 1, explanation: "$59 for 3 days and $84 for 7 days (Lensrentals, n.d.-b). $79 and $113 are the Sony GM II.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What did Lensrentals charge for a 7-day rental of the Sony 24-70mm GM II on October 21, 2026?", options: ["$79", "$84", "$113", "$203"], correctIndex: 2, explanation: "$113 for 7 days and $79 for 3 days (Lensrentals, n.d.-c).", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "About how many 3-day rentals of the Sigma 50mm f/1.2 equal its purchase price?", options: ["About 6", "About 60", "About 2", "About 26"], correctIndex: 3, explanation: "$1,539 ÷ $59 is about 26.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "Comparing the Sigma and Sony 24-70mm zooms, what would you actually be testing?", options: ["Their weight on a kitchen scale", "Whether both reach f/1.2", "Autofocus on moving players", "Their price at other stores"], correctIndex: 2, explanation: "Both are 24-70mm f/2.8 lenses; what a price list cannot tell you is how their autofocus handles moving players.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "What does lesson 12 suggest doing before buying a 24-70mm zoom?", options: ["Rent both for one game", "Buy both, return one", "Buy the cheaper one", "Read only online reviews"], correctIndex: 0, explanation: "Rent both zooms for one game, watch the autofocus, then decide.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "According to lesson 12, what is worth more on this rig than a slightly sharper lens?", options: ["A lens that weighs more", "A lens with a cine mark", "A lens that zooms to 75", "A lens that holds focus"], correctIndex: 3, explanation: "A lens that holds focus is worth more on this rig than a lens that is a little sharper.", sourceLessonSlug: "the-cost-of-fast-glass" },
          { prompt: "Which subject does lesson 12 leave to a course of its own?", options: ["Reading a lens's spec sheet", "Renting gear out as a business", "Holding focus during a game", "Balancing a lens on a gimbal"], correctIndex: 1, explanation: "Renting gear out to others as a business is taught in its own course; this lesson covers only what a lens costs its user.", sourceLessonSlug: "the-cost-of-fast-glass" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: The gimbal
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-gimbal-does",
      title: "13 · What a gimbal does",
      section: "4 · The gimbal",
      recallContent: [
        {
          prompt: "What did the Sony FE 50mm f/1.2 GM cost new on October 21, 2026?",
          answer: "$2,298.00 (Focus Camera, n.d.-d).",
        },
        {
          prompt: "What does lesson 12 say to do before buying a 24-70mm zoom?",
          answer: "Rent both zooms for one game and watch how their autofocus handles moving players.",
        },
      ],
      body: `**The gimbal's job.** A handheld gimbal holds the camera on motors. Its job is to cancel rotation while the operator walks or runs: tilt (nodding up and down), roll (leaning side to side) and pan (turning left and right). The picture stays steady even though the operator's hands do not.

**What it cannot cancel.** The motors turn the camera; they do not lift it or lower it. So a gimbal does not remove the up-and-down bounce of footsteps. That comes from the operator's walk: bent knees and a rolling heel-to-toe step. Some rigs add a separate device for that up-and-down axis. The gimbal handles rotation; the operator handles bounce.

**Which gimbals the documented rigs used.**

| Rig | Gimbal | Source |
|---|---|---|
| Fox's original | DJI Ronin-S | Costa (2020) |
| BaylorVision | Zhiyun Crane 3S | Costa (2021) |
| CBS and ESPN | MōVI rigs | Kerschbaumer et al. (2021) |
| 2026 Field of Dreams game | Two "RF Ronin systems" supplied by Faction Media | Costa (2026) |

**A correction to carry.** An earlier draft said "networks explicitly look for DJI ecosystem compatibility" and called one DJI model "the correct gimbal for broadcast acceptance." No source supports that. Look at the table: DJI, Zhiyun and MōVI gimbals all went to air. What a show accepts is decided by its engineers and its RF vendor, not by a gimbal's brand.

**Why gimbal choice still matters.** The gimbal decides how heavy a camera you can carry (lesson 14), how long you can run (lesson 15) and how the camera is controlled while it rides. On that last point: Cyanview, whose systems let the truck control the camera, says only one device can control a Sony Alpha camera at a time, so a DJI gimbal's USB camera control must be off when the truck takes over (Cyanview, n.d.-a). The gimbal's own camera buttons and the truck's remote control can fight. Decide before the show which one wins.

**What the gimbal adds to the job.** A gimbal lets one person run with a cinema camera. It also adds weight, batteries, a balancing routine and a new thing that can fail. The next three lessons cover each.

:::reveal What does a gimbal cancel, and what does it not? ||| It cancels rotation (tilt, roll and pan shake); it does not cancel the up-and-down bounce of footsteps, which is the operator's walk.

:::reveal Do networks require a DJI gimbal? ||| No source says so. Documented rigs used DJI, Zhiyun and MōVI gimbals.

## Sources
- ${COSTA_2020} Locator: the paragraph naming the DJI Ronin-S.
- ${COSTA_2021} Locator: the paragraph naming the Zhiyun Crane 3S.
- ${KERSCHBAUMER_2021} Locator: the sections on CBS's and ESPN's MōVI rigs.
- ${COSTA_2026} Locator: the paragraph on Faction Media's RF Ronin systems.
- ${CYANVIEW_ALPHA} Locator: the note on one controlling device at a time.`,
    },
    {
      slug: "payload-and-balance",
      title: "14 · Payload and balance",
      section: "4 · The gimbal",
      recallContent: [
        {
          prompt: "Which three axes does a gimbal turn the camera around?",
          answer: "Tilt, roll and pan.",
        },
        {
          prompt: "Why must a DJI gimbal's USB camera control be off when the truck controls a Sony Alpha camera through Cyanview?",
          answer: "Only one device can control the camera at a time (Cyanview, n.d.-a).",
        },
      ],
      body: `${QR("a gimbal technician or an experienced gimbal operator, to check the balancing routine, which the course's research gives as field practice without a maker's source")}

**Payload is a ceiling.** DJI rates the RS 4 at a tested payload of 3 kg and the RS 4 Pro at 4.5 kg (DJI, n.d.-b; DJI, n.d.-a). A payload rating is the most the motors are tested to hold when the load is balanced. It does not prove that your camera, cage, monitor and cables fit between the gimbal's arms, or that they clear the arms when the camera tilts.

**Add it up.** A rough sum for one build: the FX3 body is about 715 g with battery and card (Sony, n.d.-b). The FX6 body alone is 890 g (Allard, 2020). Then add the lens, the cage, a monitor if it rides on the gimbal, a transmitter, and every cable. Weigh the real build on a kitchen scale before you trust a payload number. A heavier rig is also harder to carry for a whole game, even if the motors can hold it.

**Balance first.** A balanced camera stays where you leave it with the motors off. The motors then only have to correct movement, not hold the camera up. An unbalanced camera makes the motors work against gravity the whole time. That costs battery and can make the rig buzz or shake.

**The routine.** These steps follow from what balance is:

1. **Build the full rig first.** Attach every cable, the transmitter and the monitor before balancing. A cable added later changes the weight.
2. **Set the lens where you will use it.** On a zoom, balance at the focal length you use most. A rig that balances at 24mm may be off at 70mm, because the lens's weight moves as it zooms.
3. **Balance each axis.** Slide the camera until it holds still on each axis with the motors off.
4. **Then tune the motors.** Run the gimbal's own motor-tuning step only after the camera is balanced.
5. **Re-balance after any change.** A new lens, a new accessory or a moved cable means starting again.

**Cables.** A stiff HDMI or power cable can tug the camera as it tilts, or catch on an arm. Use short, flexible cables with a little slack loop. Where you can, mount the transmitter and battery on the part of the gimbal that does not move.

**Test the extremes.** With everything connected, tilt and roll the camera as far as it will go. Watch for a cable pulling or anything hitting an arm. A shot that tilts up for a celebration should not be the first time you find out.

:::reveal What does a gimbal's payload rating not prove? ||| That your full build fits and clears the gimbal's arms; it is the most the motors are tested to hold when the load is balanced.

:::reveal Why balance before running the motor-tuning step? ||| So the motors only correct movement instead of holding the camera up against gravity.

## Sources
- ${DJI_RS4_SPECS} Locator: "Tested payload" entry.
- ${DJI_RS4_PRO_SPECS} Locator: "Tested payload" entry.
- ${SONY_SPECS} Locator: "Mass" entry.
- ${ALLARD_2020} Locator: the specifications section, body weight.`,
    },
    {
      slug: "runtime-temperature-and-spares",
      title: "15 · Runtime, temperature and spares",
      section: "4 · The gimbal",
      recallContent: [
        {
          prompt: "What are the tested payloads of the DJI RS 4 and RS 4 Pro?",
          answer: "3 kg for the RS 4 and 4.5 kg for the RS 4 Pro.",
        },
        {
          prompt: "At which focal length should a zoom be balanced on a gimbal?",
          answer: "The one you use most, because the lens's weight moves as it zooms.",
        },
      ],
      body: `**Runtime, and the fine print.** DJI rates the RS 4 Pro's battery at "13 hours." Read the note that goes with it: the figure is "Measured with the gimbal balanced in a level and stationary state," and "When the gimbal is in motion, the operating time will be reduced" (DJI, n.d.-a). A sideline gimbal is never level and still for long. So plan on less than the rated time, and carry a charged spare grip for a full show day.

**Temperature.** DJI lists the RS 4 Pro's operating range as -20 to 45 °C (DJI, n.d.-a). Sony lists the FX3's as 0 to 40 °C (Sony, n.d.-b). Compare them: at both ends, the camera's range is narrower than the gimbal's. On a hot afternoon or a freezing night, the camera will hit its limit first. Watch the camera, not just the gimbal.

**Can you get one?** On October 21, 2026, DJI's own US store showed the RS 4 Pro out of stock (DJI, n.d.-d). Its page for the newer RS 5 said it "is not currently available for purchase in the United States" (DJI, n.d.-c). The point is not one brand. It is that a part you cannot replace quickly needs a spare, and a known repair route, before the season starts.

**What to check at every break.** The gimbal's battery level, the camera's heat, and whether the rig still balances. A gimbal that dies mid-game takes the shot with it.

**Spares worth carrying.**

- A second charged gimbal grip or battery, because the stationary runtime figure overstates a moving day.
- Short spare cables, because a tugged cable is a common fault (lesson 14).
- Shade for the rig at breaks, because the camera's heat limit is lower than the gimbal's.

**A note on control.** Lesson 13 said only one device can control a Sony Alpha camera at a time (Cyanview, n.d.-a). If the gimbal's camera-control cable is plugged in and active, the truck's remote control may not work. Settle which one is in charge during the facilities check, not on air.

:::reveal What does DJI's 13-hour runtime figure for the RS 4 Pro assume? ||| A gimbal "balanced in a level and stationary state"; in motion, the operating time is reduced.

:::reveal Which hits its temperature limit first on a hot day, the FX3 or the RS 4 Pro? ||| The FX3: its range is 0 to 40 °C against the gimbal's -20 to 45 °C.

## Sources
- ${DJI_RS4_PRO_SPECS} Locator: "Max runtime" and "Operating temperature" entries, with their notes.
- ${SONY_SPECS} Locator: "Operating temperature" entry.
- ${DJI_RS4_PRO_STORE} Locator: stock status on the store page.
- ${DJI_RS5_STORE} Locator: the availability notice on the store page.
- ${CYANVIEW_ALPHA} Locator: the note on one controlling device at a time.`,
    },
    {
      slug: "running-a-sideline",
      title: "16 · Running a sideline",
      section: "4 · The gimbal",
      recallContent: [
        {
          prompt: "Why carry a spare gimbal grip even though the RS 4 Pro is rated at 13 hours?",
          answer: "The 13 hours is measured level and stationary; DJI says operating time is reduced in motion.",
        },
        {
          prompt: "What did DJI's US store say about the RS 5 on October 21, 2026?",
          answer: "That it \"is not currently available for purchase in the United States.\"",
        },
      ],
      body: `${QR("an experienced sports specialty-camera operator, to supply gimbal modes and sideline working practice (where to stand, how a utility spots the operator, league sideline rules), none of which the course's research covers")}

**What this lesson can and cannot teach yet.** The research behind this course does not describe gimbal modes, such as how follow and lock modes behave, so this lesson does not teach them. It also has no source on sideline working practice for a handheld specialty operator: where to stand, how a spotter works with you, or a league's sideline rules. Those parts will come from an experienced operator before release. What follows is what the sources do support.

**It is a dedicated job.** Fox hired an extra camera operator for the rig's first live game (Feldman, 2021). Its first operator was Mike Smole (Keeley, 2020). The rig was not a hard-camera operator's side task.

**Who owns the camera settings.** On a show that controls the camera from the truck, the operator stops touching exposure. A source in Sports Video Group's 2021 feature put it this way: "The operator doesn't have to worry about camera settings as it's all done back in the trucks" (Kerschbaumer et al., 2021). Cyanview's control of Sony Alpha bodies can reach settings such as iris, ISO, shutter and white balance (Cyanview, n.d.-a). If a show has no remote control, those settings are yours, and you match the other cameras by eye on your monitor.

**Your monitor is your eyes.** On Fox's original rig the operator had a 6-inch field monitor (Mrozek, 2021). In daylight a dim screen is hard to read, so brightness, measured in nits, matters most on day games. Three examples, as their makers list them:

| Monitor | Brightness | Source |
|---|---|---|
| Portkeys LH5P II, 5.5-inch | 2000 nits | Portkeys (n.d.) |
| SmallHD Indie 5 | 1000 nits, 3G-SDI and HDMI 2.0 | SmallHD (n.d.-a) |
| SmallHD Ultra 5 | 3000 nits, 3G-SDI and HDMI 2.0 | SmallHD (n.d.-b) |

**Focus, all game.** Fox's operators work with under 2 feet in focus (Mrozek, 2021), and autofocus can jump to the crowd. Lesson 10's settings and f-stop rule are the operator's tools for that, play after play.

**The shot itself.** Fox used the rig for end-zone shots in its first game (Costa, 2020). Netflix used three of them for its 2026 Home Run Derby (Hernández, 2026). The director decides when the shot is used; the operator's job is to have it sharp and ready when called.

**Everything else is on the radio.** Picture, intercom, tally and remote control each travel their own path. Sections 5 and 6 follow each one from the rig to the truck.

:::reveal On a show that shades the camera from the truck, who handles exposure? ||| The truck: "The operator doesn't have to worry about camera settings as it's all done back in the trucks" (Kerschbaumer et al., 2021).

:::reveal Why does monitor brightness matter most on day games? ||| A dim screen is hard to read in sunlight, and the operator judges focus and framing on it.

## Sources
- ${FELDMAN_2021} Locator: the paragraph on hiring an extra camera operator.
- ${KEELEY_2020} Locator: the paragraph naming the operator.
- ${KERSCHBAUMER_2021} Locator: the quotation on camera settings being handled in the trucks.
- ${CYANVIEW_ALPHA} Locator: the list of controllable settings.
- ${MROZEK_2021} Locator: the passages on the 6-inch monitor and on depth of field under 2 feet.
- ${PORTKEYS} Locator: product title and brightness.
- ${SMALLHD_INDIE_5} Locator: specifications, brightness and inputs.
- ${SMALLHD_ULTRA_5} Locator: specifications, brightness and inputs.
- ${COSTA_2020} Locator: the paragraph on end-zone shots.
- ${HERNANDEZ_2026} Locator: the paragraph on the three Megalodons.`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · The gimbal",
      section: "4 · The gimbal",
      body: "A graded check on what a gimbal does and cannot do, payload and balance, runtime, temperature and spares, and running the rig on a sideline. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What does a handheld gimbal cancel?", options: ["Up-and-down bounce from footsteps", "Delay in the wireless video link", "Rotation: tilt, roll and pan shake", "Lean from the rolling shutter"], correctIndex: 2, explanation: "A gimbal cancels rotation (tilt, roll and pan). It does not cancel bounce, link delay or shutter lean.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "What does a gimbal not cancel?", options: ["Up-and-down bounce from footsteps", "Roll as the operator leans over", "Tilt as the operator's wrist nods", "Pan shake as the operator turns"], correctIndex: 0, explanation: "The motors turn the camera; they do not lift or lower it, so footstep bounce stays.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Who handles the up-and-down bounce of footsteps?", options: ["The truck's frame synchronizer", "The camera's rolling shutter", "The lens's autofocus motor", "The operator, by the way they walk"], correctIndex: 3, explanation: "Bounce comes from the operator's walk: bent knees and a rolling heel-to-toe step. The gimbal handles rotation.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "In lesson 13, what is \"tilt\"?", options: ["Leaning side to side", "Nodding up and down", "Turning left and right", "Moving up and down"], correctIndex: 1, explanation: "Tilt is nodding up and down; roll is leaning side to side; pan is turning left and right.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "In lesson 13, what is \"roll\"?", options: ["Nodding up and down", "Leaning side to side", "Turning left and right", "Moving forward and back"], correctIndex: 1, explanation: "Roll is leaning side to side.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "In lesson 13, what is \"pan\"?", options: ["Nodding up and down", "Leaning side to side", "Moving up and down", "Turning left and right"], correctIndex: 3, explanation: "Pan is turning left and right.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Which walk does lesson 13 describe for reducing bounce?", options: ["Bent knees and a heel-to-toe step", "Straight legs and a flat-footed step", "A quick run on the toes, knees locked", "Long strides with both knees locked"], correctIndex: 0, explanation: "Bent knees and a rolling heel-to-toe step.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Which gimbal did Fox's original rig use?", options: ["Zhiyun Crane 3S", "A MōVI rig", "DJI Ronin-S", "DJI RS 5"], correctIndex: 2, explanation: "Fox used a DJI Ronin-S (Costa, 2020).", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Which gimbal brand did BaylorVision fly?", options: ["DJI", "MōVI", "Ronin", "Zhiyun"], correctIndex: 3, explanation: "BaylorVision used a Zhiyun Crane 3S (Costa, 2021).", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "What did CBS and ESPN use to stabilize their cameras?", options: ["DJI RS 5s", "Ronin 4Ds", "MōVI rigs", "Crane 3Ss"], correctIndex: 2, explanation: "Kerschbaumer et al. (2021) describe MōVI rigs at CBS and ESPN.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Who supplied two \"RF Ronin systems\" at the 2026 Field of Dreams game?", options: ["CP Communications", "Faction Media", "Game Creek Video", "Cyanview"], correctIndex: 1, explanation: "Costa (2026): Faction Media supplied two RF Ronin systems.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Do networks require a DJI gimbal for broadcast acceptance?", options: ["No source says so; others went to air", "Yes; the NFL lists DJI as required", "Yes, for broadcast acceptance only", "Only for games shot in 4K or above"], correctIndex: 0, explanation: "DJI, Zhiyun and MōVI gimbals all went to air. The \"DJI ecosystem\" claim from an earlier draft has no source.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Who decides what a show accepts, according to lesson 13?", options: ["Its engineers and its RF vendor", "The gimbal's maker, by brand", "The camera operator alone", "The league's ticket office"], correctIndex: 0, explanation: "What a show accepts is decided by its engineers and its RF vendor, not by a gimbal's brand.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "How many devices can control a Sony Alpha camera at one time, per Cyanview?", options: ["Two", "One", "Four", "Any number"], correctIndex: 1, explanation: "Cyanview says only one device can control a Sony Alpha camera at a time (Cyanview, n.d.-a).", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "What must be off when the truck controls a Sony Alpha camera through Cyanview?", options: ["The gimbal's motors and its battery", "The camera's HDMI output to the TX", "The DJI gimbal's USB camera control", "The operator's monitor and its LUT"], correctIndex: 2, explanation: "Only one device may control the camera, so a DJI gimbal's USB control must be off (Cyanview, n.d.-a).", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "What does a gimbal let one person do?", options: ["Shade the camera remotely", "Skip the RF coordinator", "Replace the hard cameras", "Run with a cinema camera"], correctIndex: 3, explanation: "A gimbal lets one person run with a cinema camera; it also adds weight, batteries and a balancing routine.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "Which three things does gimbal choice decide, according to lesson 13?", options: ["Lens price, sensor size, codec", "Link range, latency, frequency", "Weight carried, run time, control", "Shutter type, genlock, timecode"], correctIndex: 2, explanation: "How heavy a camera you can carry, how long you can run, and how the camera is controlled while it rides.", sourceLessonSlug: "what-a-gimbal-does" },
          { prompt: "What is the DJI RS 4 Pro's tested payload?", options: ["4.5 kg", "3 kg", "1.6 kg", "13 kg"], correctIndex: 0, explanation: "4.5 kg (DJI, n.d.-a). The RS 4 is 3 kg.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What is a gimbal's payload rating?", options: ["The most the gimbal can hold when unbalanced", "The weight of the gimbal without a camera", "The weight one operator may legally carry", "The most the motors are tested to hold balanced"], correctIndex: 3, explanation: "It is the most the motors are tested to hold when the load is balanced: a ceiling.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What does a payload rating not prove?", options: ["That the motors can hold a balanced load", "That your build fits and clears the arms", "That the gimbal is sold in DJI's store", "That the camera has a global shutter"], correctIndex: 1, explanation: "A payload rating does not prove your camera, cage, monitor and cables fit and clear the gimbal's arms.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Which weighs more on its own: the FX6 body, or the FX3 with battery and card?", options: ["The FX3, at 890 g", "The FX6 body, at 890 g", "They weigh the same", "The FX3, at 1.6 kg"], correctIndex: 1, explanation: "The FX6 body is 890 g (Allard, 2020); the FX3 is about 715 g with battery and card (Sony, n.d.-b).", sourceLessonSlug: "payload-and-balance" },
          { prompt: "How does lesson 14 suggest you check what your real build weighs?", options: ["Add up the box weights", "Trust the payload figure", "Ask the RF vendor to guess", "Weigh it on a kitchen scale"], correctIndex: 3, explanation: "Weigh the real build on a kitchen scale before you trust a payload number.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What does a balanced camera do with the gimbal's motors off?", options: ["Stays where you leave it", "Swings to point at the floor", "Spins slowly to the left", "Tilts up toward the sky"], correctIndex: 0, explanation: "A balanced camera stays where you leave it with the motors off.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Why balance the camera before running the motor-tuning step?", options: ["So tuning can skip the pan axis entirely", "So the camera can record at a higher rate", "So motors correct movement, not gravity", "So the transmitter finds a cleaner channel"], correctIndex: 2, explanation: "With the camera balanced, the motors only have to correct movement, not hold the camera up.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What can an unbalanced camera do to the rig?", options: ["Lower the camera's heat limit", "Raise the wireless link's range", "Turn the shutter from rolling to global", "Make it buzz and drain the battery"], correctIndex: 3, explanation: "The motors work against gravity the whole time, which costs battery and can make the rig buzz or shake.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What is step 1 of lesson 14's balancing routine?", options: ["Run the motor-tuning step first", "Balance the bare camera, then add", "Build the full rig with every cable", "Set the lens to its widest end"], correctIndex: 2, explanation: "Attach every cable, the transmitter and the monitor before balancing; a cable added later changes the weight.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Where should a zoom be set before balancing?", options: ["At its widest, whatever you shoot", "At the focal length you use most", "At its longest, whatever you shoot", "In the middle of its range, always"], correctIndex: 1, explanation: "A rig that balances at 24mm may be off at 70mm, so balance at the focal length you use most.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "When should the gimbal's motor-tuning step run?", options: ["After the camera is balanced", "Before the camera is mounted", "Instead of balancing at all", "Only when the battery is low"], correctIndex: 0, explanation: "Run the gimbal's own motor-tuning step only after the camera is balanced.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "When must you re-balance the gimbal?", options: ["After any lens, accessory or cable change", "Only at the start of each new season", "Only when the gimbal shows a warning", "Only after the gimbal has been dropped"], correctIndex: 0, explanation: "A new lens, a new accessory or a moved cable means starting again.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Why can a cable spoil a gimbal shot?", options: ["It adds delay to the video link", "It can tug the camera as it tilts", "It lowers the gimbal's payload", "It blocks the camera's autofocus"], correctIndex: 1, explanation: "A stiff HDMI or power cable can tug the camera as it tilts, or catch on an arm.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What kind of cables does lesson 14 recommend on the gimbal?", options: ["Long and stiff, pulled tight to the arm", "Coiled up loosely in the backpack", "Short, flexible, with a slack loop", "Run through the gimbal's motor"], correctIndex: 2, explanation: "Short, flexible cables with a little slack loop.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Where should the transmitter and battery go, where you can manage it?", options: ["On the camera's top handle", "On the lens's front end", "On the tilt motor's arm", "On the part that does not move"], correctIndex: 3, explanation: "Mount the transmitter and battery on the part of the gimbal that does not move.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Why tilt and roll the camera to its limits with every cable connected?", options: ["To calibrate the wireless channel", "To warm up the camera's sensor", "To find pulls or arm hits before air", "To check the battery's voltage"], correctIndex: 2, explanation: "Watch for a cable pulling or anything hitting an arm. A celebration shot should not be the first time you find out.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "Why is a heavier rig a problem even when it is within payload?", options: ["It is harder to carry all game", "It cannot output SDI at all", "It records at a lower bit depth", "It voids the camera's warranty"], correctIndex: 0, explanation: "A heavier rig is harder to carry for a whole game, even if the motors can hold it.", sourceLessonSlug: "payload-and-balance" },
          { prompt: "What battery runtime does DJI give for the RS 4 Pro?", options: ["3 hours", "30 hours", "8 hours", "13 hours"], correctIndex: 3, explanation: "DJI rates the RS 4 Pro at \"13 hours\" (DJI, n.d.-a), measured level and stationary.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "Under what conditions is DJI's 13-hour figure measured?", options: ["Moving, with a full camera load", "Balanced, level and stationary", "At 45 °C in direct sunlight", "With the motors switched off"], correctIndex: 1, explanation: "\"Measured with the gimbal balanced in a level and stationary state\" (DJI, n.d.-a).", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What does DJI say happens to runtime when the gimbal is in motion?", options: ["Operating time doubles", "Operating time is reduced", "Operating time is the same", "The gimbal shuts off"], correctIndex: 1, explanation: "\"When the gimbal is in motion, the operating time will be reduced\" (DJI, n.d.-a).", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "Given DJI's runtime note, what should you carry for a full show day?", options: ["A second camera body", "A spare lens cap", "A longer HDMI cable", "A charged spare grip"], correctIndex: 3, explanation: "A sideline gimbal is never level and still for long, so carry a charged spare grip.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What operating temperature range does DJI list for the RS 4 Pro?", options: ["-20 to 45 °C", "0 to 40 °C", "-10 to 35 °C", "5 to 50 °C"], correctIndex: 0, explanation: "-20 to 45 °C (DJI, n.d.-a). 0 to 40 °C is the FX3.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "On a hot day, which reaches its temperature limit first?", options: ["The RS 4 Pro gimbal", "Both at the same point", "The FX3 camera", "Neither has a limit"], correctIndex: 2, explanation: "The FX3's top is 40 °C against the gimbal's 45 °C, so the camera hits its limit first.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "On a freezing night, which reaches its temperature limit first?", options: ["The gimbal, at -20 °C", "Both, at -10 °C", "Neither, below -40 °C", "The FX3, at 0 °C"], correctIndex: 3, explanation: "The FX3's range starts at 0 °C, the gimbal's at -20 °C, so the camera hits its limit first.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "On a hot day, what should you watch, according to lesson 15?", options: ["The gimbal, not the camera", "The link, not the camera", "The camera, not just the gimbal", "Only the gimbal's battery"], correctIndex: 2, explanation: "At both ends the camera's range is narrower than the gimbal's, so watch the camera.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What did DJI's US store show for the RS 4 Pro on October 21, 2026?", options: ["In stock", "Out of stock", "Discontinued", "Recalled"], correctIndex: 1, explanation: "DJI's own US store showed the RS 4 Pro out of stock that day (DJI, n.d.-d).", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What did DJI's US store page say about the RS 5 on October 21, 2026?", options: ["Not available for purchase in the US", "Available only through rental houses", "Available, with a 6-month wait", "Sold only in a Ronin 4D bundle"], correctIndex: 0, explanation: "It \"is not currently available for purchase in the United States\" (DJI, n.d.-c).", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What is lesson 15's point about stock and supply?", options: ["A part you cannot replace needs a spare", "Only DJI parts are worth buying", "Stock levels never change once listed", "Out-of-stock parts are always better"], correctIndex: 0, explanation: "A part you cannot replace quickly needs a spare, and a known repair route, before the season starts.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What should you check at every break?", options: ["Tally light, frame rate, timecode", "Gimbal battery, camera heat, balance", "Lens price, rental date, shipping", "Crowd size, weather, scoreboard"], correctIndex: 1, explanation: "The gimbal's battery level, the camera's heat, and whether the rig still balances.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "Why carry short spare cables?", options: ["Short cables raise the payload", "The league requires spare cables", "A tugged cable is a common fault", "Short cables add a genlock input"], correctIndex: 2, explanation: "A tugged cable is a common fault (lesson 14).", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "Why shade the rig at breaks?", options: ["Shade makes the link stronger", "Sun drains the gimbal's grip", "Shade lowers the f-number", "The camera's heat limit is lower"], correctIndex: 3, explanation: "The camera's heat limit (40 °C) is lower than the gimbal's (45 °C).", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What can happen if the gimbal's camera-control cable is plugged in and active?", options: ["The camera records at double rate", "The gimbal stops balancing itself", "The truck's remote control may fail", "The monitor shows a black picture"], correctIndex: 2, explanation: "Only one device can control a Sony Alpha camera at a time (Cyanview, n.d.-a).", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "When should the crew settle which control is in charge of the camera?", options: ["During the facilities check", "During the first play on air", "After the game, in the truck", "Only if a problem appears"], correctIndex: 0, explanation: "Settle it during the facilities check, not on air.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "What happens to the shot if the gimbal dies mid-game?", options: ["The truck takes over", "Nothing changes", "The link switches", "The shot goes with it"], correctIndex: 3, explanation: "A gimbal that dies mid-game takes the shot with it.", sourceLessonSlug: "runtime-temperature-and-spares" },
          { prompt: "Which topics does lesson 16 say it cannot teach yet?", options: ["Who controls the camera settings", "Gimbal modes and sideline practice", "Why monitor brightness matters", "How Fox staffed its first game"], correctIndex: 1, explanation: "The research has no source on gimbal modes or sideline working practice, so the lesson leaves them out.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Why does lesson 16 leave out gimbal modes and sideline practice?", options: ["The NFL forbids teaching them", "No source in the research covers them", "They change with each firmware", "They only apply to DJI gimbals"], correctIndex: 1, explanation: "The course states only what its sources support, and no source in its research covers them.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Who will supply the parts lesson 16 leaves out?", options: ["The learner, by trial and error on air", "The gimbal's maker, after purchase", "The truck's shader, during the game", "An experienced operator, before release"], correctIndex: 3, explanation: "Those parts will come from an experienced operator before release, as the box at the top says.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "What shows that running the rig was a dedicated job at Fox?", options: ["Fox hired an extra camera operator", "Fox gave the job to the shader", "Fox had the director run the rig", "Fox let a utility run it at breaks"], correctIndex: 0, explanation: "Fox hired an extra camera operator for the rig's first live game (Feldman, 2021).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "On a show that shades the camera from the truck, who handles camera settings?", options: ["The operator, not the truck", "The gimbal, by itself", "The truck, not the operator", "The RF vendor's tech"], correctIndex: 2, explanation: "\"The operator doesn't have to worry about camera settings as it's all done back in the trucks\" (Kerschbaumer et al., 2021).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Which settings can Cyanview reach on Sony Alpha bodies?", options: ["Pan, tilt, roll and gimbal speed", "Frequency, channel and link power", "Tally, intercom and return video", "Iris, ISO, shutter and white balance"], correctIndex: 3, explanation: "Cyanview's Sony Alpha list includes iris, ISO, shutter and white balance, among others (Cyanview, n.d.-a).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "With no remote control on the show, who owns exposure?", options: ["The director, from the booth", "The RF tech, at the receiver", "The operator, matching by eye", "Nobody; exposure is automatic"], correctIndex: 2, explanation: "Those settings are yours, and you match the other cameras by eye on your monitor.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "What size monitor did Fox's original rig carry?", options: ["5.5-inch", "6-inch", "13-inch", "3-inch"], correctIndex: 1, explanation: "A 6-inch field monitor (Mrozek, 2021). 5.5-inch is the Portkeys LH5P II.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "In which unit does lesson 16 measure monitor brightness?", options: ["Nits", "Lux", "Watts", "Hertz"], correctIndex: 0, explanation: "Monitor brightness is measured in nits.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "When does monitor brightness matter most?", options: ["On day games", "On night games", "Indoors only", "In the rain only"], correctIndex: 0, explanation: "In daylight a dim screen is hard to read.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "How bright is the Portkeys LH5P II?", options: ["1000 nits", "2000 nits", "3000 nits", "500 nits"], correctIndex: 1, explanation: "2000 nits (Portkeys, n.d.). 1000 is the SmallHD Indie 5 and 3000 the Ultra 5.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "How bright is the SmallHD Ultra 5?", options: ["2000 nits", "1000 nits", "3000 nits", "6000 nits"], correctIndex: 2, explanation: "3000 nits (SmallHD, n.d.-b).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "How bright is the SmallHD Indie 5?", options: ["2000 nits", "3000 nits", "500 nits", "1000 nits"], correctIndex: 3, explanation: "1000 nits (SmallHD, n.d.-a).", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Which inputs do both SmallHD monitors in lesson 16 list?", options: ["12G-SDI and fiber", "HDMI 1.4 only, no SDI", "3G-SDI and HDMI 2.0", "USB-C and Wi-Fi only"], correctIndex: 2, explanation: "Both the Indie 5 and the Ultra 5 list 3G-SDI and HDMI 2.0.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Who decides when the specialty shot is used?", options: ["The director", "The operator", "The RF tech", "The shader"], correctIndex: 0, explanation: "The director decides when the shot is used; the operator has it sharp and ready.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "What is the operator's job when the shot is called?", options: ["Pick a new frequency", "Switch it on the switcher", "Shade it to match", "Have it sharp and ready"], correctIndex: 3, explanation: "The operator's job is to have the shot sharp and ready when called.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Do picture, intercom, tally and remote control share one path?", options: ["Yes; all ride on the video link", "No; each travels its own path", "Yes; all ride on the intercom", "Only tally rides with video"], correctIndex: 1, explanation: "Each travels its own path; sections 5 and 6 follow each one.", sourceLessonSlug: "running-a-sideline" },
          { prompt: "Using lesson 10's tools, what is the operator's task play after play?", options: ["Finding power", "Holding focus", "Reading tally", "Pairing links"], correctIndex: 1, explanation: "With under 2 feet in focus and autofocus that can jump to the crowd, holding focus is the task all game.", sourceLessonSlug: "running-a-sideline" },
        ],
      },
    },
  ],
};
