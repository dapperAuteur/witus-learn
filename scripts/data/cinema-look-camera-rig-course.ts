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
        questions: [],
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
        questions: [],
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
        questions: [],
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
        questions: [],
      },
    },
  ],
};
