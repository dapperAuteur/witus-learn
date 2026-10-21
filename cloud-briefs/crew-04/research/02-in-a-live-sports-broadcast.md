# Megalodon Rig: How It Plugs Into a Live Sports Broadcast

**As of:** October 21, 2026. Sources fetched that day. **Tags:** **[V]** read in a fetched source; **[I]** inferred, reasoning shown; **[A]** assumption to confirm.

This file assumes the reader knows the basics of a sports broadcast compound, truck and crew. It covers what changes when the camera is a wireless, shallow-focus specialty camera, and what changes again when the operator supplies the camera.

## 1. Who owns which piece on a network show

On the network shows documented in the trade press, the specialty camera is part of a vendor ecosystem, not a lone freelancer's kit [V/I]:

- Fox's original Megalodon: Fox's own technical director (Jarrod Ligrani) developed it, and CP Communications built several packages for Fox to its specifications and supplied the transmission (Mrozek, 2021; Costa, 2020) [V]. Fox hired an extra camera operator for the first live game (Feldman, 2021) [V].
- Netflix's 2026 Home Run Derby ran three Megalodons inside a production built on Game Creek Video's Flagship A, B, C and D units, with a "backup RF system" on hand (Hernández, 2026) [V].
- The 2026 Field of Dreams game listed BSI, Bexel and CP Communications "among the vendors supporting the production's RF requirements," Faction Media supplying two RF Ronin systems, and a RED Raptor X integrated "via an RF system" with remote control of camera settings and CDL values (Costa, 2026) [V].

**What that means for a camera operator [I]:** on a national network show, the realistic role is the operator of a vendor or network rig, or the owner of a camera core that the RF vendor's transmitter and receivers plug into. On regional, college, streaming and corporate shows, an operator's own complete kit (camera through receiver) can be the whole solution, if the show's engineer accepts it.

## 2. The signal path from sideline to switcher

### Option A: network or vendor RF (most network shows) [I]

```text
Camera (HDMI or SDI) -> vendor RF transmitter on the rig or in a backpack
   -> licensed or coordinated channel -> vendor receive antennas placed high in the venue
   -> vendor receivers -> fiber or coax -> truck router
   -> frame sync -> shading / color correction -> switcher, replay
```

Broadcast camera transmitters of this class run COFDM-type modulation (DVB-T, LMS-T) with HEVC and specify "Single frame" latency (VidOvation, n.d.) [V]. Venue-grade wireless cameras commonly use 2 GHz, 5.8 GHz and 6.4 GHz (Price & Juniet, 2015) [V].

### Option B: an operator-supplied link (smaller shows, film, documentaries) [I]

```text
FX3 HDMI -> Teradek Bolt 6 LT (or Hollyland, Accsoon) TX on the rig
   -> 5 GHz (or 6 GHz) unlicensed, coordinated with the venue
   -> RX on a stand at the 20 or 30 near the truck side, line of sight to the field
   -> 3G-SDI -> house tie line or fiber converter -> truck or flypack
   -> frame sync (often built into the switcher input or the router) -> switcher
```

BaylorVision ran a version of this: camera HDMI into an HDMI-to-SDI converter in the backpack, an RF backpack transmitter, and the feed into its control room as a live source (Costa, 2021) [V].

### Option C: cellular bonding [V/I]

Cyanview lists 4G encoders such as Aviwest and LiveU as one way to send the video, chosen by budget and compromise (Cyanview, n.d.-b) [V]. Bonded cellular adds seconds-level variable delay in typical use [I], which is fine for a studio hit or a stream and wrong for a live game camera cut against hard cameras [I].

## 3. What the truck does with the feed

| Step | What happens | Who | Notes |
|---|---|---|---|
| Receive and route | RX output lands on a router input via fiber or coax | RF tech, EIC, utility | The RX location follows the RF plan; keep TX and RX in line of sight (Teradek, 2024) [V]. |
| Frame sync | The unlocked wireless feed is re-timed to house reference | EIC or video | The FX3 has timecode matching but no genlock input (Sony, n.d.) [V/I]; a frame synchronizer such as AJA's FS-Mini locks to blackburst or tri-level reference (AJA Video Systems, n.d.) [V]. Each frame of sync adds about 16.7 ms at 59.94 [I]. |
| Format check | 1080p59.94, 1080i59.94 or 720p59.94, SDR or HDR, which gamma | EIC | The show's format is the show's choice, not the camera's [I]. Integer 60p versus 59.94 mismatches cause frame drops or no lock [I]. |
| Shading (paint) | A video operator matches exposure and color to the hard cameras | Shader at an RCP | For Sony mirrorless, Cyanview's control covers "exposure, white balance and REC," with a VP4 processor for deeper color work (Cyanview, n.d.-b) [V]; its Sony Alpha page lists more (iris, ISO, shutter, black gamma, detail, knee, multi matrix) depending on firmware, with only one controlling device allowed at a time (Cyanview, n.d.-a) [V]. Fox found its Sony bodies matched its HDC-4300s "relatively easily"; CBS needed a color corrector (Mrozek, 2021) [V]. |
| Audio | Embedded nat sound is de-embedded or ignored | A1 | [I] |
| Delay alignment | If the RF camera lags the hard cameras, audio is delayed or the cut is timed around it | TD, A1, EIC | Total delay must be measured end to end; the transmitter's spec alone does not answer it [I]. |
| Replay | The feed is recorded to replay servers | Replay operators | Fox called its slow-motion playback workflow for the rig "a bit clunky" in 2021 (Kerschbaumer et al., 2021) [V]. |

When shading happens in the truck, the operator stops touching exposure. A source quoted in SVG's 2021 feature put it this way: "The operator doesn't have to worry about camera settings as it's all done back in the trucks" (Kerschbaumer et al., 2021) [V]. If no remote control is provided, the operator owns exposure and white balance and must match the look by eye on the monitor [I].

## 4. The return paths: tally, intercom, return video, timecode

| Function | How it reaches the operator | Notes |
|---|---|---|
| **Tally** | External tally box driven by GPI or IP (TSL, ATEM) from the switcher, through the control link | Mirrorless cameras have no tally output (Cyanview, n.d.-b) [V]. |
| **Intercom (PL) and IFB** | Wireless beltpack and headset on the show's intercom system | Wireless intercoms share coordinated spectrum in the UHF TV band, 900 MHz, 2.4 GHz and 5 GHz (Price & Juniet, 2015) [V]. The operator usually hears the director and producer on a camera channel [I]. |
| **Return video** | Separate RF return to the operator's monitor, if provided | Not part of a one-way TX/RX link [I]. Most shallow-focus shots are framed off the camera's own picture [I]. |
| **Camera control** | RF, Wi-Fi, IP mesh or cellular link to a box on the rig | Cyanview's cellular control runs about 30 to 60 ms and depends on venue coverage: "you don't own the infrastructure, and you can't control the quality of service" (Cyanview, n.d.-b) [V]. |
| **Timecode** | Wireless timecode box or jam-sync at the start of the day | Matters for the camera's own recording and post, not for the live cut [I]. The FX3 locks to external timecode through the VMC-BNCM1 adapter (Sony, n.d.) [V]. |

## 5. Frequency coordination: how it actually works

| Step | What to do | Source |
|---|---|---|
| 1. Find the coordinator | Every venue or league should have a designated frequency coordinator; each production names one RF contact | Price and Juniet (2015) [V] |
| 2. Submit early | Send device type, frequency and user for every wireless device, "ideally two to four weeks in advance" | Price and Juniet (2015, p. 10) [V] |
| 3. Use the league system | NFL users request frequencies through the "Event Frequency Coordination System" online portal | NFL Football Operations (n.d.) [V] |
| 4. Report backups | Backup units "should be reported just like main units" | Price and Juniet (2015, p. 11) [V] |
| 5. Check in | Equipment is checked against the frequency plan at the venue; at the Super Bowl, Pro Bowl, Draft and Combine "the user must check in so their equipment can be inspected" | Price and Juniet (2015); NFL Football Operations (n.d.) [V] |
| 6. All-hands test | All wireless users power up together and watch their full path for dropouts | Price and Juniet (2015, p. 7) [V] |
| 7. On interference, call the coordinator | "Users should not scan for new frequencies or resolve the problem by themselves" | Price and Juniet (2015, p. 12) [V] |

**Priority and penalties.** On NFL game days, broadcast partners rank below football operations, venue needs and the teams; "uncoordinated devices are prohibited," and violators can have their "working credential revoked" (NFL Football Operations, n.d.) [V]. A large event commonly has "in excess of 200 individual wireless devices" (Price & Juniet, 2015, p. 3) [V].

**Licensing in one paragraph [V/I].** Licensed broadcast auxiliary channels belong to TV stations and network entities (Eligibility for License, 2026) [V]; a freelancer works on them under the network's or RF vendor's authority [I]. Unlicensed 5 GHz links need no license but must accept interference (Price & Juniet, 2015, p. 14) [V], so coordination is a venue rule, not an FCC license, for them [I].

## 6. Who does what on the crew

| Role | Job with the specialty camera | Note for the specialty operator |
|---|---|---|
| Producer and director | Decide when the shot is used (intros, celebrations, huddles, sideline color) and call it on intercom [I] | |
| Technical director | Takes the shot on the switcher; times cuts around any delay [I] | |
| EIC (engineer in charge) | Accepts the format, integrates RX output, frame sync and audio [I] | The person the specialty operator must satisfy before air [I]. |
| RF tech (vendor) | Places antennas and receivers, coordinates frequencies, watches the link [I] | Separate specialty; on a small show, an operator who brings their own link becomes this person [I]. |
| Video operator (shader) | Matches exposure and color to the hard cameras at an RCP [I] | |
| Specialty or RF handheld operator | Runs the rig, holds focus, follows cues, manages battery swaps at breaks [I]. Fox's first operator was Mike Smole (Keeley, 2020) [V]. | Hard-camera experience does not prove shallow-focus gimbal operation; that is the skill to prove in rehearsal [I]. |
| Utility | Spots the operator on the sideline, carries batteries, manages cable, watches for players and officials [I] | |
| Frequency coordinator | Owns the venue's RF plan (Price & Juniet, 2015) [V] | |
| A1 and A2 | Audio, including embedded camera audio [I] | |

## 7. A show day with the rig [A]

| Time | Task |
|---|---|
| Before travel | Confirm format, frame rate, SDR or HDR, who supplies TX/RX, frequencies, tally, intercom, control and the backup plan (see section 8). |
| Call time | Check in with the frequency coordinator; set the assigned channel; place and power the RX. |
| Facilities check (FAX) | Camera through RX to truck: picture, embedded audio, tally, intercom, control. Shader matches color. |
| All-hands RF test | Walk the full shooting route with the venue full of devices on (Price & Juniet, 2015) [V]. Note dead spots. |
| Rehearsal and pre-game | Practice shots with the director; time battery swaps to breaks. |
| Air | Shoot, swap batteries at commercials, report problems in plain words on intercom. |
| Strike | Log faults, charge, clean, update the gear log. |

## 8. The questionnaire to send the engineer before every job

| Question | Why |
|---|---|
| What format and exact frame rate (59.94 or 60)? SDR or HDR, which gamma? | The camera, link and converter must all match [I]. |
| Who supplies the TX, RX, antennas and receive position? | Avoid arriving with half a system [I]. |
| Who coordinates frequencies, and by when do you need my device list? | Two to four weeks is the recommended lead (Price & Juniet, 2015) [V]. |
| Is the camera shaded from the truck? With what control system? | Decides who owns exposure [I]. |
| How do I get tally, intercom and return video? | None of them ride on the video link [I]. |
| Who does frame sync and format conversion? | The FX3 cannot genlock [I]. |
| Should the camera record internally? What codec and who takes the media? | Recording settings can change outputs [I]. |
| What happens when the link fails? Who do I call and what can I change? | Users should not re-tune on their own (Price & Juniet, 2015) [V]. |

## References

AJA Video Systems. (n.d.). *FS-Mini* [Product page]. Retrieved October 21, 2026, from https://www.aja.com/products/fs-mini

Costa, B. (2020, December 22). *Fox Sports worked a live mirrorless camera into an NFL broadcast and it caught viewers' attention*. CP Communications. https://cpcomms.com/fox-sports-worked-a-live-mirrorless-camera-into-an-nfl-broadcast-and-it-caught-viewers-attention/

Costa, B. (2021, May 20). *BaylorVision deploys its own version of "Megalodon" on live broadcast of NCATA national championship*. Sports Video Group. https://www.sportsvideo.org/2021/05/20/baylorvision-deploys-its-own-version-of-megalodon-on-live-broadcast-of-ncata-national-championship/

Costa, B. (2026, August 13). *MLB at Field of Dreams returns as Netflix joins the effort, leans into cinematic look at newly permanent ballpark*. Sports Video Group. https://www.sportsvideo.org/2026/08/13/mlb-at-field-of-dreams-returns-as-netflix-joins-the-effort-leans-into-cinematic-look-at-newly-permanent-ballpark/

Cyanview. (n.d.-a). *Sony Alpha* [Support documentation]. Retrieved October 21, 2026, from https://support.cyanview.com/docs/Integrations/Sony/SonyAlpha

Cyanview. (n.d.-b). *Sony mirrorless gimbal* [Support documentation]. Retrieved October 21, 2026, from https://support.cyanview.com/docs/Workflows/SonyMirrorlessGimbal

Eligibility for license, 47 C.F.R. § 74.600 (2026). https://www.law.cornell.edu/cfr/text/47/74.600

Feldman, J. (2021, January 24). *"It's not an 8K camera, it's an $8k camera": Meet the man behind FOX's broadcast sensation*. Sportico, via Yahoo Finance. https://finance.yahoo.com/news/not-8k-camera-8k-camera-190354940.html

Hernández, K. (2026, July 13). *Netflix christens its first Home Run Derby with new presentation of slugfest in South Philly*. Sports Video Group. https://www.sportsvideo.org/2026/07/13/netflix-christens-first-home-run-derby-with-new-presentation-of-slugfest-in-south-philly/

Keeley, S. (2020, December 20). *Fox broke out 8K end zone cameras for the Washington-Seattle NFL game*. Awful Announcing. https://awfulannouncing.com/fox/fox-8k-handheld-end-zone-dlsr-cameras-washington-seattle.html

Kerschbaumer, K., Dachman, J., Costa, B., & Hernandez, K. (2021, June 29). *The big picture: Inside the shallow-depth-of-field movement and why it is here to stay*. Sports Video Group. https://www.sportsvideo.org/2021/06/29/the-big-picture-inside-the-shallow-depth-of-field-movement-and-why-it-is-here-to-stay/

Mrozek, C. (2021, September 20). A whole new ballgame. *American Cinematographer*. https://theasc.com/article/whole-new-ballgame/

NFL Football Operations. (n.d.). *Event frequency coordinators*. Retrieved October 21, 2026, from https://operations.nfl.com/game-operations-logistics/game-day-assistants/event-frequency-coordinators

Price, R., & Juniet, J. (2015). *Recommendations for sports venues: Wireless device management and frequency coordination* [White paper]. Sports Video Group Venue Initiative. https://www.sportsvideo.org/wp-content/uploads/2015/01/White-Paper-RF_Cfnl.pdf

Sony. (n.d.). *ILME-FX3 help guide: Matching the time code with other devices*. Retrieved October 21, 2026, from https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000888835.html

Teradek. (2024, August 5). *Wireless best practices* [User guide]. https://guide.teradek.com/a/1869285-wireless-best-practices

VidOvation. (n.d.). *HCAM HEVC 4K UHD wireless camera system* [Product page]. Retrieved October 21, 2026, from https://www.vidovation.com/product/product-hcam-hevc-4k-uhd-wireless-camera-system/
