# Megalodon Rig: The Parts and How They Work Together

**As of:** October 21, 2026. Sources fetched that day. **Tags:** **[V]** read in a fetched source; **[I]** inferred, reasoning shown; **[A]** assumption to confirm.

## 1. What a "Megalodon" is

"Megalodon" is Fox Sports' nickname for a handheld, shallow-depth-of-field camera that it first put on air on December 20, 2020, at Seattle versus Washington (Keeley, 2020) [V]. Fox's internal acronym was "Mirrorless Gyrostabilized Lightweight DSLR Nonorig" (Dachman, 2021) [V]. It is not a product you can buy under that name. It is a recipe:

| Part | Fox's original | Source |
|---|---|---|
| Camera | Sony a7R IV full-frame mirrorless | Costa (2020) [V] |
| Lens | Sony FE 24-70mm f/2.8 GM, autofocus | Costa (2020) [V] |
| Stabilizer | DJI Ronin-S handheld gimbal | Mrozek (2021) [V] |
| Monitor | 6-inch field monitor | Mrozek (2021) [V] |
| Power | Backpack with Gold Mount or V-Mount hot-swap batteries | Mrozek (2021) [V] |
| Video link | 1080p wireless transmitter, custom transmission from CP Communications | Costa (2020) [V] |

Other networks built their own versions of the same look: CBS on a MōVI with Sony Venice and later Alpha 1, ESPN with an Alpha 1 and a Canon C500, Turner with a Canon C500 and a 50mm lens (Kerschbaumer et al., 2021) [V]. BaylorVision built one from a Sony a7R III, a Sigma prime and a Zhiyun Crane 3S (Costa, 2021) [V]. The lesson: the **look** is standard, the **parts** are not [I].

## 2. The signal chain

```text
CAMERA SIDE (on the operator)
  Lens -> Camera sensor -> camera processing (picture profile, LUT)
     -> HDMI Type A out (FX3) or SDI out (FX6, Komodo-X)
     -> [optional HDMI-to-SDI converter]
     -> operator monitor (loop-through)  and/or  TX (transmitter)
  Power: V-mount battery -> regulated cables -> camera, monitor, TX
  Separate radios: intercom beltpack, tally receiver, camera-control box

RF PATH (through the air, coordinated frequency)
  TX antenna  ~~~~ 5/6 GHz unlicensed  or  2 GHz / 6.4 GHz licensed BAS ~~~~>  RX antennas

RECEIVE SIDE (where the RF plan puts it, not always in the truck)
  RX -> SDI out -> coax or fiber run -> truck router
     -> frame synchronizer (locks the feed to house reference)
     -> color correction / shading (shader at an RCP)
     -> production switcher and replay (EVS) inputs

RETURN PATHS (each one is a separate system)
  Truck intercom -> wireless intercom -> operator headset
  Switcher tally -> tally box -> light on the rig
  Program return video -> separate RF -> operator monitor (optional)
  Shader RCP -> control link (RF, Wi-Fi, IP or cellular) -> camera
```

Two facts drive everything else. First, the video link carries the picture and embedded audio; it does not, by itself, carry intercom, tally, shading or return video. Cyanview's mirrorless workflow, for example, sends camera control over a separate 4G link and adds an external tally box, because mirrorless cameras have no tally output (Cyanview, n.d.-c) [V]. Second, the receiver goes where the RF plan says, then a cable or fiber carries SDI to the truck [I].

## 3. Each part: its job, the specs that matter, and why

### 3.1 Camera body

**Job:** turn light into a live video signal (and, optionally, a recording).

| Spec | Why it matters | Numbers |
|---|---|---|
| **Sensor size** | A bigger sensor needs a longer lens for the same framing, which gives shallower depth of field at the same f-stop. That is the Megalodon look. | FX3 sensor: "35 mm full frame (35.6 mm × 23.8 mm)" (Sony, n.d.-b) [V]. FX30 is Super 35 [V, retailer title in `04`]. Example in section 3.2. |
| **Rolling vs global shutter** | A rolling shutter reads the sensor line by line, so fast pans and spinning objects can skew ("jello"). A global shutter exposes every pixel at once. | The RED Komodo-X has a "6K S35 Global Shutter sensor" (AbelCine, n.d.) [V]. The FX3 and FX6 are described as CMOS sensors with no global-shutter claim (Sony, n.d.-b; Allard, 2020) [V], so treat them as rolling shutter [I]. On a gimbal following players, skew shows up mainly on whip pans [I]. |
| **Video outputs** | Decides how the picture leaves the camera and how fragile that connection is. | FX3: "HDMI type A jack" only (Sony, n.d.-b) [V]. FX6: "12G/6G/3G SDI output and a full-sized HDMI output" plus BNC timecode in/out, but no genlock (Allard, 2020) [V]. Komodo-X: 12G-SDI up to 4096 × 2160 4:2:2 60p, and a "Tri-Level Genlock Input" (AbelCine, n.d.) [V]. |
| **Codec and bit depth** | Live TV uses the uncompressed baseband output, so the recording codec matters for the iso recording and for post, not for the live feed [I]. Bit depth and chroma on the output affect how far a shader can push color [I]. | FX3 records XAVC HS (H.265) and XAVC S (H.264) with LPCM audio (Sony, n.d.-b) [V]. Sony's spec page does not state bit depth; confirm 10-bit 4:2:2 in the menu before promising it [I]. The Bolt 6 LT carries "1080p60 10-bit 4:2:2 HDR" over 3G-SDI (Teradek, n.d.) [V]. |
| **Timecode and genlock** | Timecode labels frames so recordings line up in replay and post. Genlock locks the camera's scan to the truck's reference. They are different jobs. | FX3 takes external timecode through the VMC-BNCM1 adapter on the Multi/Micro USB port; the page describes timecode matching only, not genlock (Sony, n.d.-a) [V]. Without genlock, the truck re-times the feed with a frame synchronizer [I]. |
| **Power and heat** | Determines battery size and whether it overheats in sun. | FX3: about 7.3 W while shooting movies; operating range 0 to 40 °C (Sony, n.d.-b) [V]. FX6: about 18.0 W (Allard, 2020) [V]. Ligrani said moving batteries out of the camera helped with overheating (Mrozek, 2021) [V]. |

**Why the FX3 became the default small body [I]:** full frame, light (715 g with battery and card) (Sony, n.d.-b) [V], and it accepts USB-C control, which Cyanview lists as the most popular body for its gimbal workflow (Cyanview, n.d.-c) [V]. **Its weakness:** a single HDMI output and no genlock, so every live job needs a converter or an HDMI-input transmitter and truck-side frame sync [I].

### 3.2 Lens

**Job:** frame the shot and set how much of it is sharp.

Depth of field shrinks as aperture opens and focal length grows. Fox's operators work with a depth of field under 2 feet, where "there isn't much margin for error," and have seen autofocus lock onto "the crowd in the background instead of the player in the foreground" (Mrozek, 2021) [V]. Mike Davies of Fox: "Keeping focus on a camera like this is like keeping a marble on a mirror" (Kerschbaumer et al., 2021) [V].

Worked example [I]: thin-lens depth-of-field formula, subject 3 m (about 10 ft) away, circle of confusion 0.03 mm full frame and 0.02 mm Super 35 [A].

| Setup | Total depth in focus |
|---|---|
| Full frame, 50mm, f/1.2 | about 0.26 m (10 in) |
| Full frame, 50mm, f/2.0 | about 0.43 m (17 in) |
| Full frame, 50mm, f/2.8 | about 0.60 m (24 in) |
| Full frame, 50mm, f/4.0 | about 0.87 m (34 in) |
| Super 35 (FX30), 33mm for the same framing, f/2.8 | about 0.94 m (37 in) |

What this means: an f/2.8 zoom on full frame already gives Fox's "under 2 feet"; f/1.2 cuts that to under a foot, so a step forward by the player can leave the face soft [I]. Owning an f/1.2 lens is for chosen moments (intros, celebrations, portraits), not the whole game [I].

| Spec | Why it matters |
|---|---|
| Focal length range | 24mm versus 28mm at the wide end decides whether you can frame a huddle from the sideline without backing into a coach [I]. |
| Maximum aperture | Sets the look and the light you can work in at night [I]. |
| Autofocus motor and breathing | Live shallow-focus work depends on autofocus; breathing makes focus changes visible [I]. |
| Weight and balance | Every gram is on the gimbal and the operator's arms; a zoom must be balanced at the focal length you use [I]. |

### 3.3 Gimbal

**Job:** cancel rotation (tilt, roll, pan shake) while the operator walks or runs.

| Spec | Numbers | Why it matters |
|---|---|---|
| Tested payload | DJI RS 4: 3 kg; RS 4 Pro: 4.5 kg (DJI, n.d.-a, n.d.-b) [V] | Payload is the ceiling for a balanced load, not proof that your cage, monitor and cables clear the arms [I]. |
| Battery runtime | RS 4 Pro: "13 hours," measured "balanced in a level and stationary state"; "When the gimbal is in motion, the operating time will be reduced" (DJI, n.d.-a) [V] | Plan a spare grip for a full show day [I]. |
| Operating temperature | RS 4 Pro: -20 to 45 °C (DJI, n.d.-a) [V] | Covers most outdoor games [I]. |

A gimbal cancels rotation, not the up-and-down bounce of footsteps; that is technique (bent knees, heel-to-toe) or a Z-axis device [I].

### 3.4 Operator monitor

**Job:** let the operator judge focus, framing and exposure while moving, in daylight.

| Example | Brightness and I/O | Source |
|---|---|---|
| Portkeys LH5P II | 5.5-inch, 2000 nits | Portkeys (n.d.) [V] |
| SmallHD Indie 5 | 1000 nits, 3G-SDI and HDMI 2.0 | SmallHD (n.d.-b) [V] |
| SmallHD Ultra 5 | 3000 nits, 3G-SDI and HDMI 2.0 | SmallHD (n.d.-c) [V] |

Brightness matters most on day games [I]. Some monitors can also control the camera: SmallHD sells a Sony FX3 control kit for its Ultra and Cine monitors (SmallHD, n.d.-a) [V]. Local monitor control is not truck shading [I].

### 3.5 Wireless video transmitter and receiver

**Job:** carry the live picture from the moving camera to a fixed receiver.

There are three families. They differ in latency, how they handle interference, and who is allowed to run them.

| Family | Example and manufacturer spec | Latency | Range (line of sight) | Band |
|---|---|---|---|---|
| Compressed prosumer links (H.264 or H.265) | Hollyland Cosmo C1 (Hollyland, n.d.-a) [V] | "0.04s" | 1,000 ft | 5.1 to 5.8 GHz |
| | Hollyland Cosmo C2 (Hollyland, n.d.-b) [V] | "≥ 33ms" (lab) | 3,000 ft | 5.15 to 5.85 GHz |
| | Hollyland Mars 4K (Hollyland, n.d.-c) [V] | "0.06s" at 1080p60 | 450 ft | 5.1 to 5.8 GHz |
| | Accsoon CineView Master 4K (Accsoon, n.d.) [V] | "below 25ms at 1080p60" | up to 8,202 ft, FCC-tested, unobstructed | 2.4, 5 and 6 GHz |
| | DJI SDR Transmission (DJI, n.d.-c) [V] | 35 ms link; 80 ms including camera and screen | 3 km (FCC) | 2.4 and 5 GHz |
| "Zero-delay" film links | Teradek Bolt 6 LT 750 (Teradek, n.d.) [V] | "Zero-Delay" | 750 ft | 5 and 6 GHz |
| Broadcast RF camera transmitters (COFDM, HEVC) | Vislink HCAM (VidOvation, n.d.) [V] | "Single frame (4K UHD/1080p)" | Depends on RF plan and receive antennas [I] | 1.3 to 7.75 GHz; DVB-T and LMS-T modulation |

**How to read these numbers [I]:**

- One frame at 59.94 frames per second is about 16.7 ms. The Cosmo C1's 40 ms is about 2.4 frames; DJI's 80 ms camera-to-screen figure is almost 5 frames.
- A "zero-delay" link removes the radio's delay, not the camera's processing delay. Engineers care about total glass-to-glass delay and whether the audio can be delayed to match.
- Range figures are line of sight. Teradek's own guidance is to keep TX and RX in line of sight and to "Minimize obstructions (especially humans and foliage)" (Teradek, 2024) [V]. A crowd behind the operator, or the operator's own body between the antenna and the receiver, is the normal case on a sideline.
- The broadcast family is built for that: COFDM modulation tolerates reflections, and HEVC keeps bandwidth low enough for licensed channels [I].

**Who may run what [V/I]:**

- 5 GHz links (Hollyland, Accsoon, Teradek, DJI) are unlicensed devices. Under Part 15, unlicensed devices must "not cause harmful interference to and must accept interference from authorized users" (Price & Juniet, 2015, p. 14) [V].
- The 6 GHz band has device classes. Low-power indoor devices "are limited to indoor locations"; very-low-power devices are capped at 14 dBm EIRP; standard-power devices must check an automated frequency coordination system (General Technical Requirements, 2026) [V]. Teradek says the Bolt 6's 6 GHz channels are enabled for the US (Teradek, 2025) [V], but its pages do not say which class its US 6 GHz mode uses. Check the FCC grant for your unit before relying on 6 GHz in an open-air stadium [I].
- Broadcast wireless cameras commonly run at 2 GHz, 5.8 GHz and 6.4 GHz (Price & Juniet, 2015) [V]. TV broadcast auxiliary licenses go to TV stations, Class A and low-power stations, translators and "a television broadcast network-entity" (Eligibility for License, 2026) [V]. A freelancer is not on that list, so licensed-band operation happens under the network's or RF vendor's authority [I].

### 3.6 Receiver, converters and the cable to the truck

| Part | Job | Notes |
|---|---|---|
| RX | Receive the link and output SDI and HDMI | Needs its own power, a mount with height and line of sight, and a cable run [I]. Keep RX units at least 18 inches apart and wireless gear 3 ft apart (Teradek, 2024) [V]. |
| HDMI-to-SDI converter | Turn the FX3's HDMI into SDI | Blackmagic Micro Converter HDMI to SDI 3G, $75 MSRP (Blackmagic Design, n.d.) [V]. BaylorVision carried one in the backpack (Costa, 2021) [V]. |
| Frame synchronizer | Re-time an unlocked feed to house reference | AJA FS-Mini: "utility frame sync," locks to blackburst or tri-level reference, $989 US MSRP (AJA Video Systems, n.d.) [V]. Network trucks have this built in; a small show or a stream may not [I]. |

### 3.7 Camera control (shading or "paint")

**Job:** let a video operator in the truck match this camera to the others (exposure, white balance, black level, color).

Cyanview is the common tool for shading cinema and mirrorless cameras in live sports; its own page says "There were 30 field camera feeds going through some kind of Cyanview control at the Superbowl LVII" (Cyanview, n.d.-a) [V]. For Sony mirrorless bodies, its RIO connects by USB-C, the "mirrorless control is limited (exposure, white balance and REC)," and a VP4 color processor adds the rest (black, multi-matrix, detail and coring); control over cellular runs at about 30 to 60 ms (Cyanview, n.d.-c) [V]. Cyanview's Sony Alpha integration page lists a longer set (iris, ISO, shutter, white balance, black gamma, detail, knee, saturation and hue, color space, OETF, multi matrix and REC), warns that "The Sony mirrorless protocol changes with Sony updates," and says only one device can control the camera at a time, so Wi-Fi control and a DJI gimbal's USB control must be off (Cyanview, n.d.-b) [V]. What a shader can reach therefore depends on firmware on both ends [I]. Fox's 2021 rig instead relied on Sony's native color matching "relatively easily" to the HDC-4300 broadcast cameras, while CBS needed a color corrector (Mrozek, 2021) [V].

### 3.8 Tally, intercom and return video

- **Tally:** mirrorless cameras have none; add an external tally box (Cyanview, n.d.-c) [V].
- **Intercom (PL) and IFB:** the operator wears a wireless intercom beltpack to hear the director [I]. Venue wireless intercoms run in the 470 to 698 MHz UHF TV band, 900 MHz, 2.4 GHz and 5 GHz (Price & Juniet, 2015) [V], so they also need coordination.
- **Return video:** program return on the operator's monitor needs a second RF path; it is not part of a one-way TX/RX set [I].

### 3.9 Power

| Item | Number | Source |
|---|---|---|
| FX3 movie draw | about 7.3 W | Sony (n.d.-b) [V] |
| Cosmo C1 transmitter | under 9 W | Hollyland (n.d.-a) [V] |
| Vislink HCAM transmitter | 35 W maximum | VidOvation (n.d.) [V] |
| Operator monitor | 8 to 12 W | [A], measure yours |
| 98 Wh V-mount (Core SWX NANO X Micro) | 14.8 V, 6.6 Ah | Core SWX (n.d.) [V] |

Runtime estimate [I]: usable energy ≈ 98 Wh × 0.8 (age, cold, converter losses, reserve) [A] ≈ 78 Wh.

| Load on the walking pack | Hours per 98 Wh pack | Packs for a 10-hour call, no charging |
|---|---|---|
| 25 W (FX3, prosumer TX, monitor) | about 3.1 | 4 |
| 35 W (add cooling fan, brighter monitor, control box) | about 2.2 | 5 |
| 60 W (broadcast TX like HCAM plus camera and monitor) | about 1.3 | 8 |

A battery count is not a hot-swap plan. A swap of the main pack drops every device on it unless a dual-input plate or internal battery bridges the gap; test the swap with video running [I]. Use a **regulated** D-Tap to NP-FZ100 dummy cable, since D-Tap voltage is well above the FX3's 7.2 V battery rating (Sony, n.d.-b) [V/I].

For flying: spare lithium batteries go in carry-on only, and batteries from 101 to 160 Wh need airline approval with a limit of two (Transportation Security Administration [TSA], n.d.) [V]. Staying at or under 98 to 99 Wh avoids that approval [I].

### 3.10 Audio embed

The FX3 records LPCM, with 4 channels when the XLR handle is attached (Sony, n.d.-b) [V]. Camera audio rides inside the HDMI signal, survives HDMI-to-SDI conversion, and is carried as embedded audio by most SDI links [I]. On a sports show it is usually natural sound; the A1 decides whether to use it [I]. Broadcast transmitters may add separate inputs: the HCAM lists one analog stereo pair at mic or line level with phantom power (VidOvation, n.d.) [V].

## 4. Why some parts are better than others

| Choice | Better for | Why |
|---|---|---|
| Full frame over Super 35 | The Megalodon look | Shallower depth of field at the same framing and f-stop (section 3.2) [I]. |
| Super 35 over full frame | Holding focus, cost | About 1.5 times the depth of field at the same framing (section 3.2) [I]; FX30 body is $2,098 versus $4,298 for the FX3A (see `04`) [V]. |
| SDI-out body (FX6, Komodo-X) over HDMI-only (FX3) | Network trucks | Locking BNC, no converter, timecode on BNC; Komodo-X adds genlock (Allard, 2020; AbelCine, n.d.) [V]. Costs weight and money [I]. |
| Global shutter (Komodo-X) | Fast pans, spinning balls, LED boards | No skew [V/I]; heavier, pricier, different color pipeline [I]. |
| Broadcast COFDM/HEVC RF over 5 GHz links | Packed stadiums, long routes | Built for reflections, licensed channels, single-frame delay (VidOvation, n.d.) [V]; rented with an RF tech, not owned by most freelancers [I]. |
| "Zero-delay" 5/6 GHz link over H.265 prosumer links | Small shows, film, documentaries, video village | No radio delay, short range (Teradek, n.d.) [V]. |
| Bright monitor (2000 to 3000 nits) | Day games | Readable in sun (Portkeys, n.d.; SmallHD, n.d.-c) [V/I]. |

## References

AbelCine. (n.d.). *RED Digital Cinema KOMODO-X 6K S35 global shutter camera (Canon RF)* [Product page]. Retrieved October 21, 2026, from https://www.abelcine.com/buy/cameras-accessories/digital-cinema-cameras/red-digital-cinema-komodo-x-6k-s35-global-shutter-camera-canon-rf

Accsoon. (n.d.). *Accsoon CineView Master 4K* [Product page]. Retrieved October 21, 2026, from https://store.accsoon.com/products/cineview-master-4k

AJA Video Systems. (n.d.). *FS-Mini* [Product page]. Retrieved October 21, 2026, from https://www.aja.com/products/fs-mini

Allard, M. (2020, November 18). *Sony FX6: Is this the camera you have been waiting for?* Newsshooter. https://www.newsshooter.com/2020/11/18/sony-fx6-is-this-the-camera-you-have-been-waiting-for/

Blackmagic Design. (n.d.). *Micro converters* [Product page]. Retrieved October 21, 2026, from https://www.blackmagicdesign.com/products/microconverters

Core SWX. (n.d.). *NANO X Micro 98Wh series* [Product page]. Retrieved October 21, 2026, from https://www.coreswx.com/products/nano-x-micro-98-series

Costa, B. (2020, December 22). *Fox Sports worked a live mirrorless camera into an NFL broadcast and it caught viewers' attention*. CP Communications. https://cpcomms.com/fox-sports-worked-a-live-mirrorless-camera-into-an-nfl-broadcast-and-it-caught-viewers-attention/

Costa, B. (2021, May 20). *BaylorVision deploys its own version of "Megalodon" on live broadcast of NCATA national championship*. Sports Video Group. https://www.sportsvideo.org/2021/05/20/baylorvision-deploys-its-own-version-of-megalodon-on-live-broadcast-of-ncata-national-championship/

Cyanview. (n.d.-a). *Cyanview, the solution to shade cine-style cameras on live events*. Retrieved October 21, 2026, from https://www.cyanview.com/bsc-expo/

Cyanview. (n.d.-b). *Sony Alpha* [Support documentation]. Retrieved October 21, 2026, from https://support.cyanview.com/docs/Integrations/Sony/SonyAlpha

Cyanview. (n.d.-c). *Sony mirrorless gimbal* [Support documentation]. Retrieved October 21, 2026, from https://support.cyanview.com/docs/Workflows/SonyMirrorlessGimbal

Dachman, J. (2021, January 8). *NFL playoffs 2021: Fox Sports boosts Super-Mos, PylonCams and brings back "Megalodon" for postseason*. Sports Video Group. https://www.sportsvideo.org/2021/01/08/nfl-playoffs-2021-fox-sports-boosts-super-mos-pyloncams-and-brings-back-megalodon-for-postseason/

DJI. (n.d.-a). *DJI RS 4 Pro specs*. Retrieved October 21, 2026, from https://www.dji.com/rs-4-pro/specs

DJI. (n.d.-b). *DJI RS 4 specs*. Retrieved October 21, 2026, from https://www.dji.com/rs-4/specs

DJI. (n.d.-c). *DJI SDR Transmission specs*. Retrieved October 21, 2026, from https://www.dji.com/sdr-transmission/specs

Eligibility for license, 47 C.F.R. § 74.600 (2026). https://www.law.cornell.edu/cfr/text/47/74.600

General technical requirements, 47 C.F.R. § 15.407 (2026). https://www.law.cornell.edu/cfr/text/47/15.407

Hollyland. (n.d.-a). *Cosmo C1* [Product page]. Retrieved October 21, 2026, from https://www.hollyland.com/product/cosmo-c1

Hollyland. (n.d.-b). *Cosmo C2* [Product page]. Retrieved October 21, 2026, from https://www.hollyland.com/product/cosmo-c2

Hollyland. (n.d.-c). *Mars 4K* [Product page]. Retrieved October 21, 2026, from https://www.hollyland.com/product/mars-4k

Keeley, S. (2020, December 20). *Fox broke out 8K end zone cameras for the Washington-Seattle NFL game*. Awful Announcing. https://awfulannouncing.com/fox/fox-8k-handheld-end-zone-dlsr-cameras-washington-seattle.html

Kerschbaumer, K., Dachman, J., Costa, B., & Hernandez, K. (2021, June 29). *The big picture: Inside the shallow-depth-of-field movement and why it is here to stay*. Sports Video Group. https://www.sportsvideo.org/2021/06/29/the-big-picture-inside-the-shallow-depth-of-field-movement-and-why-it-is-here-to-stay/

Mrozek, C. (2021, September 20). A whole new ballgame. *American Cinematographer*. https://theasc.com/article/whole-new-ballgame/

Portkeys. (n.d.). *Portkeys LH5P II 5.5″ 2000nits* [Product page]. Retrieved October 21, 2026, from https://www.portkeys.com/lh5p-ii/

Price, R., & Juniet, J. (2015). *Recommendations for sports venues: Wireless device management and frequency coordination* [White paper]. Sports Video Group Venue Initiative. https://www.sportsvideo.org/wp-content/uploads/2015/01/White-Paper-RF_Cfnl.pdf

SmallHD. (n.d.-a). *Camera control kit for Sony FX3* [Product page]. Retrieved October 21, 2026, from https://smallhd.com/products/camera-control-kit-sony-fx3

SmallHD. (n.d.-b). *Indie 5* [Product page]. Retrieved October 21, 2026, from https://smallhd.com/products/indie-5

SmallHD. (n.d.-c). *Ultra 5* [Product page]. Retrieved October 21, 2026, from https://smallhd.com/products/ultra-5

Sony. (n.d.-a). *ILME-FX3 help guide: Matching the time code with other devices*. Retrieved October 21, 2026, from https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000888835.html

Sony. (n.d.-b). *ILME-FX3 help guide: Specifications*. Retrieved October 21, 2026, from https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000886922.html

Teradek. (n.d.). *Bolt 6 LT set* [Product page]. Retrieved October 21, 2026, from https://teradek.com/products/bolt-6-lt-set

Teradek. (2024, August 5). *Wireless best practices* [User guide]. https://guide.teradek.com/a/1869285-wireless-best-practices

Teradek. (2025, March 21). *Bolt 6 U-NII-5 (6GHz) support by region* [User guide]. https://guide.teradek.com/a/1601470-bolt-6-u-nii-5-6ghz-support-by-region

Transportation Security Administration. (n.d.). *Lithium batteries with more than 100 watt hours*. Retrieved October 21, 2026, from https://www.tsa.gov/travel/security-screening/whatcanibring/items/lithium-batteries-more-100-watt-hours

VidOvation. (n.d.). *HCAM HEVC 4K UHD wireless camera system* [Product page]. Retrieved October 21, 2026, from https://www.vidovation.com/product/product-hcam-hevc-4k-uhd-wireless-camera-system/
