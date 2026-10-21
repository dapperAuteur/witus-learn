# Megalodon Rig: Claims Not to Teach

**As of:** October 21, 2026. Every source cited here was fetched on that date.

**Tags.** **[V]** means read in a source fetched that day. **[I]** means inferred from sourced facts, with the reasoning shown. **[A]** means an assumption to confirm.

**What this file is.** An earlier AI-generated draft about the Megalodon rig was checked claim by claim against fetched sources. The claims below are wrong, misattributed, or stale. **No lesson may teach them.** Each row gives the claim, what is actually true, and the source that settles it. Where a lesson needs to warn learners about a common misconception, it may quote the claim as a misconception and then give the correction with its source.

## 1. Engineering and spectrum

| # | Claim (do not teach) | What is true | Source |
|---|---|---|---|
| E1 | Top-tier broadcast wireless "cannot have latency," and "only Teradek or Vaxis zero-delay systems are accepted." | False as a rule. Broadcast RF camera transmitters such as the Vislink HCAM compress with HEVC and specify "single frame" latency [V]. Fox's original rig ran on CP Communications' custom transmission, not a consumer zero-delay link [V]. What a show accepts is decided by its engineers and RF vendor [I]. | VidOvation (n.d.); CP Communications (2021) |
| E2 | The Hollyland Cosmo C1 gives "zero-latency SDI." | False. Hollyland specifies 0.04 s (40 ms) and H.265 coding [V]. An SDI connector does not remove encoding delay [I]. | Hollyland (n.d.-a) |
| E3 | "Networks explicitly look for DJI ecosystem compatibility," and the DJI RS 4 Pro is "the correct gimbal for broadcast acceptance." | Unsupported. Documented builds used a DJI Ronin-S, a Zhiyun Crane 3S, and MōVI rigs at CBS and ESPN [V]. A risk the draft missed: DJI's own US store says the RS 5 "is not currently available for purchase in the United States," and showed the RS 4 and RS 4 Pro out of stock [V]. | Costa (2020); Costa (2021); Kerschbaumer et al. (2021); DJI (n.d.) |
| E4 | "5.1 to 5.9 GHz is uncrowded," and "20 channels prevent dropouts." | False. Sports venues put wireless HDMI, Wi-Fi, point-of-sale and ticket scanners in the same 2.4 and 5 GHz bands [V]. The NFL prohibits uncoordinated devices and can revoke credentials [V]. A channel count is not permission [I]. | Price and Juniet (2015); NFL Football Operations (n.d.) |
| E5 | The Sony FX6 belongs with the RED Komodo-X as a "global shutter / true cine body." | Wrong pairing. The Komodo-X has a global shutter sensor [V]. The FX6 is described as a back-illuminated CMOS with no global shutter claim [V]. The same table also listed a Ronin 4D, which replaces both body and gimbal, on top of a separate body [I]. | AbelCine (n.d.); Allard (2020) |
| E6 | A "Sigma Cine Pro 24-70mm T2.2" lens. | Treat it as nonexistent. Sigma's full-frame cine zoom line lists only the 24-35mm T2.2, at 1.6 kg in E-mount [V]. | Sigma (n.d.) |
| E7 | "4 batteries required," stated as a fixed rule. | Unsourced. The pack count depends on the load: about 4, 5 or 8 packs of 98 Wh for a 10-hour call at 25, 35 or 60 W (runtime table in `01`) [I]. A battery count is also not a hot-swap plan [I]. | `01`, section 3.9 |
| E8 | The FX3 wants USB-PD at "9V/3A." | Sony lists a recommended adaptor output of "9 V / 2 A or more, 15 V / 2 A or more" [V]. | Sony (n.d.-b) |
| E9 | A "4K" Bolt LT link carries 4K60 over SDI. | The Bolt 6 LT carries up to 1080p60 over 3G-SDI and 4K30 over HDMI [V]; "4K" on that line does not mean 4K60 over SDI [I]. | Teradek (n.d.-b) |

**Related misconceptions the draft's kit design relied on** [V/I]:

- Timecode is not genlock. The FX3 matches external timecode through an adapter, and Sony's page describes timecode matching only (Sony, n.d.-a) [V]. Without genlock, the truck re-times the feed with a frame synchronizer [I].
- The FX3 has no SDI output. Its only video output is an "HDMI type A jack" (Sony, n.d.-b) [V], so a live job needs a converter or an HDMI-input transmitter [I].
- Battery count is energy, not continuity. A swap of the main pack drops every device on it unless something bridges the gap [I].

## 2. History and attribution

| # | Claim (do not teach) | What is true | Source |
|---|---|---|---|
| H1 | Turner Sports used "the Megalodon" at the NBA All-Star Game. | Misattributed. Turner used a shallow-depth-of-field Canon EOS C500 with a 50mm lens, not Fox's rig [V]. Same look, different rig [I]. | Kerschbaumer et al. (2021) |
| H2 | The rig "typically uses" a Sony a7R IV or a7S III. | Partly right, and misleading as a rule. The a7R IV is documented for Fox [V]. BaylorVision used an a7R III; CBS moved to the Alpha 1; ESPN used the Alpha 1 and a Canon C500 [V]. An a7S III appears in one commercial "Megalodon" offer [V]. Teach that the look is standard and the parts are not [I]. | Costa (2020); Costa (2021); Kerschbaumer et al. (2021); Gemstone Media (n.d.) |
| H3 | The rig "cost roughly $10,000." | Imprecise. Fox's technical director Jarrod Ligrani: "It's not an 8K camera, it's an $8k camera" [V]. That figure is the camera rig, not the RF, crew or engineering around it [I]. | Feldman (2021) |
| H4 | Its wireless was "Hollyland or CP Communications." | Half right. Fox's rig used CP's custom transmission [V]. A current commercial offer lists a Hollyland Cosmo C1 [V], so Hollyland-based versions exist, but not on Fox's original. | CP Communications (2021); Gemstone Media (n.d.) |
| H5 | The debut was "Week 16." | Teach the date, not the week. Fox used the rig on December 20, 2020, Seattle at Washington [V]. One trade outlet labels it Week 16; other reporting gives only the date [V]. | Keeley (2020); Dachman (2021) |

## 3. Prices and kit totals

| # | Claim (do not teach) | What is true on October 21, 2026 | Source |
|---|---|---|---|
| P1 | Prices quoted as current: an FX3 body, a Sony 50mm f/1.2 GM at "~$2,000," a Sigma 50mm f/1.2 at "~$1,400," a used Vaxis Storm 1000S at "~$1,600," a Teradek Bolt 4K 12G-SDI kit. | Stale. Lensrentals says Sony "has discontinued" the original FX3, and the FX3A sells for $4,298 [V]. The Sony 50mm f/1.2 GM is $2,298 [V]. The Sigma 50mm f/1.2 is $1,539 [V]. A new Vaxis Storm 1000S is $2,999 and a used set $2,250 [V]. The Bolt 4K 12G-SDI 750 kit page shows "Sold Out" and points to Bolt 6; the Bolt 6 LT 750 set is $2,390 [V]. | Lensrentals (n.d.-a); Focus Camera (n.d.-a, n.d.-b); Sigma Corporation of America (n.d.); Vaxis US (n.d.-a, n.d.-b); Teradek (n.d.-a, n.d.-b) |
| P2 | A "network-ready" kit totaling $8,710. | The total does not reconcile. The itemized list sums to $8,210 (camera $3,200, lenses $1,500, gimbal $680, wireless $1,600, monitor $290, cage $140, plate $110, batteries $440, charger $150, cables $100); adding two cases ($460 and $280) gives $8,950; the grouped table reached $8,710 by shrinking the power line from $940 to $700 [I, arithmetic]. "Network-ready" is not a property of a kit: acceptance is the show's call [I]. | Arithmetic on the draft's own list |

**Rule for lessons:** teach only the dated prices in `04-builds-costs-compromises.md`, always with the date they were read.

## 4. Checked and safe to teach

These history claims from the same draft were confirmed [V]:

- The original build: Sony a7R IV, FE 24-70mm f/2.8 GM, DJI Ronin-S, and a 1080p wireless transmitter with transmission from CP Communications (Costa, 2020; Dachman, 2021). American Cinematographer adds a 6-inch monitor and a battery backpack, and says Ligrani developed the rig with CP from 2018 (Mrozek, 2021).
- Marquee Sports Network was first to use it on a live MLB broadcast (Sports Video Group, 2021).
- The same type of camera had been used at the Masters (Sports Video Group, 2021), and CBS used its own Alpha package, not Fox's rig, for PGA Tour golf (Mrozek, 2021).
- FOX Deportes used it on Liga MX matches (CP Communications, 2021).
- BaylorVision built its own version on a Sony a7R III, a Sigma prime and a Zhiyun Crane 3S, with an HDMI-to-SDI converter in the backpack (Costa, 2021).
- Netflix's July 2026 Home Run Derby used "three shallow-depth-of-field Megalodons with cinematic lenses" (Hernández, 2026).
- Tamron's native E-mount standard zoom is the 28-75mm G2, not a 24-70, at $899 (Focus Camera, n.d.-c).
- The FX3's movie power draw is about 7.3 W (Sony, n.d.-b).
- Spare lithium batteries fly in carry-on only; batteries from 101 to 160 Wh need airline approval, with a limit of two (Transportation Security Administration [TSA], n.d.).

## 5. Out of scope for this course

The draft also made claims about renting the rig out as a business: day rates, payback, insurance and rental marketplaces. That subject belongs to a separate course and **must not appear in CREW-04 at all**, right or wrong. For the record, the draft's dry-hire rate of $350 to $600 a day was not supported by one regional rental house's a la carte rates for the core pieces (Rental House by Roberts Camera, n.d.-a, n.d.-c, n.d.-d) [V/I], and its insurance terms were wrong in detail (Rental House by Roberts Camera, n.d.-b; Athos Insurance, n.d.) [V].

## References

AbelCine. (n.d.). *RED Digital Cinema KOMODO-X 6K S35 global shutter camera (Canon RF)* [Product page]. Retrieved October 21, 2026, from https://www.abelcine.com/buy/cameras-accessories/digital-cinema-cameras/red-digital-cinema-komodo-x-6k-s35-global-shutter-camera-canon-rf

Allard, M. (2020, November 18). *Sony FX6: Is this the camera you have been waiting for?* Newsshooter. https://www.newsshooter.com/2020/11/18/sony-fx6-is-this-the-camera-you-have-been-waiting-for/

Athos Insurance. (n.d.). *Buy equipment insurance*. Retrieved October 21, 2026, from https://www.athosinsurance.com/buy-equipment-insurance

Costa, B. (2020, December 22). *Fox Sports worked a live mirrorless camera into an NFL broadcast and it caught viewers' attention*. CP Communications. https://cpcomms.com/fox-sports-worked-a-live-mirrorless-camera-into-an-nfl-broadcast-and-it-caught-viewers-attention/

Costa, B. (2021, May 20). *BaylorVision deploys its own version of "Megalodon" on live broadcast of NCATA national championship*. Sports Video Group. https://www.sportsvideo.org/2021/05/20/baylorvision-deploys-its-own-version-of-megalodon-on-live-broadcast-of-ncata-national-championship/

CP Communications. (2021, March 9). *FOX Deportes debuts "Megalodon" on live Liga MX matches*. https://cpcomms.com/fox-deportes-debuts-megalodon-on-live-liga-mx-matches/

Dachman, J. (2021, January 8). *NFL playoffs 2021: Fox Sports boosts Super-Mos, PylonCams and brings back "Megalodon" for postseason*. Sports Video Group. https://www.sportsvideo.org/2021/01/08/nfl-playoffs-2021-fox-sports-boosts-super-mos-pyloncams-and-brings-back-megalodon-for-postseason/

DJI. (n.d.). *DJI RS 5* [Store page]. Retrieved October 21, 2026, from https://store.dji.com/product/dji-rs-5

Feldman, J. (2021, January 24). *"It's not an 8K camera, it's an $8k camera": Meet the man behind FOX's broadcast sensation*. Sportico, via Yahoo Finance. https://finance.yahoo.com/news/not-8k-camera-8k-camera-190354940.html

Focus Camera. (n.d.-a). *Sony Alpha FX3A 4K compact full-frame cinema digital camera body* [Product page]. Retrieved October 21, 2026, from https://focuscamera.com/products/sony-ilmefx3a-cameras-mirrorless-cameras

Focus Camera. (n.d.-b). *Sony FE 50mm f/1.2 GM* [Product page]. Retrieved October 21, 2026, from https://focuscamera.com/products/sony-sel50f12gm-camera-lenses-mirrorless-lenses

Focus Camera. (n.d.-c). *Tamron A063 28-75mm f/2.8 Di III VXD G2 for Sony E-mount* [Product page]. Retrieved October 21, 2026, from https://focuscamera.com/products/tamron-a063-tamron-camera-lenses-mirrorless-lenses

Gemstone Media. (n.d.). *Megalodon*. Retrieved October 21, 2026, from https://gemstonemediainc.com/megalodon/

Hernández, K. (2026, July 13). *Netflix christens its first Home Run Derby with new presentation of slugfest in South Philly*. Sports Video Group. https://www.sportsvideo.org/2026/07/13/netflix-christens-first-home-run-derby-with-new-presentation-of-slugfest-in-south-philly/

Hollyland. (n.d.-a). *Cosmo C1* [Product page]. Retrieved October 21, 2026, from https://www.hollyland.com/product/cosmo-c1

Keeley, S. (2020, December 20). *Fox broke out 8K end zone cameras for the Washington-Seattle NFL game*. Awful Announcing. https://awfulannouncing.com/fox/fox-8k-handheld-end-zone-dlsr-cameras-washington-seattle.html

Kerschbaumer, K., Dachman, J., Costa, B., & Hernandez, K. (2021, June 29). *The big picture: Inside the shallow-depth-of-field movement and why it is here to stay*. Sports Video Group. https://www.sportsvideo.org/2021/06/29/the-big-picture-inside-the-shallow-depth-of-field-movement-and-why-it-is-here-to-stay/

Lensrentals. (n.d.-a). *Rent a Sony FX3 (body only)*. Retrieved October 21, 2026, from https://www.lensrentals.com/rent/sony-fx3-body-only

Mrozek, C. (2021, September 20). A whole new ballgame. *American Cinematographer*. https://theasc.com/article/whole-new-ballgame/

NFL Football Operations. (n.d.). *Event frequency coordinators*. Retrieved October 21, 2026, from https://operations.nfl.com/game-operations-logistics/game-day-assistants/event-frequency-coordinators

Price, R., & Juniet, J. (2015). *Recommendations for sports venues: Wireless device management and frequency coordination* [White paper]. Sports Video Group Venue Initiative. https://www.sportsvideo.org/wp-content/uploads/2015/01/White-Paper-RF_Cfnl.pdf

Rental House by Roberts Camera. (n.d.-a). *Gimbals, stabilizers and sliders* [Rental page]. Retrieved October 21, 2026, from https://rentalhouseindy.com/rentals/camera-supports/gimbals-stabilizers-and-sliders

Rental House by Roberts Camera. (n.d.-b). *Policies*. Retrieved October 21, 2026, from https://rentalhouseindy.com/policies

Rental House by Roberts Camera. (n.d.-c). *Sony Cinema Line FX3 w/ XLR top handle* [Rental page]. Retrieved October 21, 2026, from https://rentalhouseindy.com/sony-cinema-line-fx3-w-xlr-top-handle

Rental House by Roberts Camera. (n.d.-d). *Wireless video transmission systems* [Rental page]. Retrieved October 21, 2026, from https://rentalhouseindy.com/rentals/camera-supports/wireless-video-transmission-systems

Sigma. (n.d.). *24-35mm T2.2 FF* [Cine lens page]. Retrieved October 21, 2026, from https://www.sigma-global.com/en/cine-lenses/ff-zoom/24_35_22/

Sigma Corporation of America. (n.d.). *50mm F1.2 DG DN | Art* [Product page]. Retrieved October 21, 2026, from https://www.sigmaphoto.com/50mm-f1-2-dg-dn-a

Sony. (n.d.-a). *ILME-FX3 help guide: Matching the time code with other devices*. Retrieved October 21, 2026, from https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000888835.html

Sony. (n.d.-b). *ILME-FX3 help guide: Specifications*. Retrieved October 21, 2026, from https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000886922.html

Sports Video Group. (2021, May 7). *Marquee Sports Network becomes first to use "Megalodon" camera on MLB broadcast*. https://www.sportsvideo.org/2021/05/07/marquee-sports-network-becomes-first-to-use-megalodon-camera-on-mlb-broadcast/

Teradek. (n.d.-a). *Bolt 4K 12G-SDI 750 deluxe kit* [Product page]. Retrieved October 21, 2026, from https://teradek.com/products/bolt-4k-750-kit

Teradek. (n.d.-b). *Bolt 6 LT set* [Product page]. Retrieved October 21, 2026, from https://teradek.com/products/bolt-6-lt-set

Transportation Security Administration. (n.d.). *Lithium batteries with more than 100 watt hours*. Retrieved October 21, 2026, from https://www.tsa.gov/travel/security-screening/whatcanibring/items/lithium-batteries-more-100-watt-hours

Vaxis US. (n.d.-a). *Vaxis Storm 1000S HDMI/SDI WHDI wireless transmission system* [Product page]. Retrieved October 21, 2026, from https://vaxis.us/products/vaxis-storm-1000s

Vaxis US. (n.d.-b). *Vaxis Storm 1000S (used)* [Product page]. Retrieved October 21, 2026, from https://vaxis.us/products/vaxis-storm-1000ft

VidOvation. (n.d.). *HCAM HEVC 4K UHD wireless camera system* [Product page]. Retrieved October 21, 2026, from https://www.vidovation.com/product/product-hcam-hevc-4k-uhd-wireless-camera-system/
