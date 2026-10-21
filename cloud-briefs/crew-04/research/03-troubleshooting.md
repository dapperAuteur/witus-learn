# Megalodon Rig: Troubleshooting

**As of:** October 21, 2026. Sources fetched that day. **Tags:** **[V]** read in a fetched source; **[I]** inferred, reasoning shown; **[A]** assumption to confirm.

Most rows below are field logic **[I]**: they follow from how the parts work (see `01-parts-and-how-they-work.md`). Where a manufacturer or venue source states the cause or the fix, the row cites it **[V]**.

## The method: find the last point that works

Walk the chain from the lens toward the switcher and stop at the first point where the picture is wrong [I]:

```text
1 camera LCD -> 2 camera output (direct monitor) -> 3 converter output
-> 4 TX input indicator -> 5 RX link status -> 6 RX output at the receiver
-> 7 truck router input -> 8 frame sync output -> 9 switcher preview
```

Change one thing at a time, and never re-tune a coordinated frequency on your own during a show. Report to the frequency coordinator instead; "Users should not scan for new frequencies or resolve the problem by themselves" (Price & Juniet, 2015, p. 12) [V].

**How to report on intercom [I]:** say the last good point and the first bad point, and what you have not touched. Example: "Megalodon: picture good on my monitor, TX shows input, RX shows no link. No frequency change made."

## 1. No signal

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| Camera LCD fine, direct monitor black | HDMI output resolution or frame rate the monitor cannot take; output set to RAW; loose HDMI [I] | Plug a known-good short cable into a known-good monitor; read the format the monitor reports | Set the camera's HDMI output to the show format (for example 1080p59.94); turn off RAW output; use a locking or clamped cable [I]. The FX3's only video output is an "HDMI type A jack" (Sony, n.d.) [V], so strain relief matters. |
| Monitor fine, TX shows no input | Format the TX does not accept; HDMI-to-SDI converter unpowered | Read the input format on the TX; check converter LEDs | Match formats. The Bolt 6 LT takes up to 1080p60 over 3G-SDI and 4K30 over HDMI (Teradek, n.d.) [V]; send 4K60 and it will not lock [I]. |
| TX has input, RX has no link | Not paired; different channel; RX unpowered; antennas loose; TX power-saving mode | Pairing status on both units; channel on both; RX power | Re-pair on the bench before the show. Do not change channels at the venue without the coordinator (Price & Juniet, 2015) [V]. |
| RX shows link and picture locally, truck sees black | Wrong router input; bad tie line or fiber converter; RX output format not what the truck expects | Put a monitor on the RX output; ask the EIC what the router input sees | Fix the patch or the format; ask for a frame sync if the input will not lock [I]. |
| Picture fine, then black after a menu change | A record mode or frame-rate change changed the output [I] | Compare to your saved settings | Keep a written settings card; restore it [I]. |

## 2. Breakup and dropouts

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| Drops when you turn your back to the RX, or walk behind a crowd | Body blocking; no line of sight | Walk the route during the all-hands test and note dead spots | Keep line of sight; "Minimize obstructions (especially humans and foliage)"; keep antennas vertical (Teradek, 2024) [V]. Move the RX higher or add a second receive point [I]. |
| Fine in rehearsal, breaks up when the stadium fills | Other devices switched on; fans' and crews' 5 GHz traffic | Ask the coordinator for a scan; use the Bolt app's spectrum analyzer | Coordinator assigns a cleaner channel. Teradek suggests choosing a fixed frequency with the lowest interference, or deselecting busy channels so auto mode only uses good ones (Teradek, 2024) [V]. |
| Breakup only near another crew's gear | Intermodulation or desense from nearby transmitters | Distance to other TX and RX units | Keep wireless gear at least 3 ft apart and RX units 18 inches apart (Teradek, 2024) [V]. |
| Breakup indoors near walls or the scoreboard | Multipath reflections; LED board noise | Move the RX a few feet and compare | Reposition the RX. Raising transmit power can make things worse: it can overload receivers and add multipath (Price & Juniet, 2015, p. 3) [V]. |
| Breakup when it rains | Wet antennas, water in connectors [I] | Inspect connectors | Rain cover over the TX; drip loops; dry connectors [I]. |
| Link fine, picture blocky or smeared on fast action (compressed links) | Bitrate too low for detail | Compare a static shot to a fast pan | Lower resolution or raise bitrate if the system allows; or use a link class the show accepts [I]. |

## 3. Latency, lip sync and cut timing

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| Your shot is visibly late against the hard cameras on a cut | Encode delay plus frame sync | Clap or flash test: film a slate with the RF camera and a hard camera together, count frames | Choose a lower-delay link; the Cosmo C1 is specified at "0.04s" (Hollyland, n.d.) [V], about 2.4 frames at 59.94 [I]. A frame synchronizer adds delay of its own [I]. |
| Lips out of sync on camera audio | Video delayed, audio not | Same slate test | A1 delays the embedded audio to match; or the show does not use camera audio [I]. |
| Delay grows during the show | Some prosumer links buffer when the signal weakens [I] | Watch the RX's latency or signal readout as you move | Improve line of sight; lock the link mode the manufacturer recommends for low delay [I]. |

## 4. Color mismatch with other cameras

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| Your shot looks flat or gray in the truck, normal on your monitor | Camera outputting S-Log3 while your monitor applies a LUT | Look at the monitor with LUT off | Agree with the shader: either send a display look (S-Cinetone or 709) or send log and let the truck convert. Do not double-apply [I]. |
| Skin tones or grass color differ from the hard cameras | Different colorimetry; auto white balance drifting | Shader compares on the waveform and vectorscope | Lock white balance in manual or color-temperature mode; the shader matches. Cyanview's Sony Alpha notes require ATW off and white balance in manual or color temperature mode for remote control (Cyanview, n.d.-a) [V]. CBS used a color corrector for its Alpha camera; Fox matched Sony bodies "relatively easily" (Mrozek, 2021) [V]. |
| Exposure pumps as you turn toward the sky | Auto ISO or auto iris | Check exposure mode | Manual exposure with ND, or remote iris from the truck [I]. |
| Shader cannot reach a setting | Control limits or firmware mismatch | Firmware versions on camera and control box | Sony protocol "changes with Sony updates"; keep camera and RIO/RCP firmware matched; only one device may control the camera, so disable Wi-Fi control and gimbal USB control (Cyanview, n.d.-a) [V]. |

## 5. Overheating

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| Camera warning or shutdown on a hot day | Sun on the body; internal battery heat; high-bitrate recording | Ambient temperature; whether the camera is recording internally | Keep within Sony's 0 to 40 °C operating range (Sony, n.d.) [V]. Run on external power; Ligrani said "Getting the batteries out of the camera helped" (Mrozek, 2021) [V]. Shade the rig at breaks; stop internal recording if the show does not need it [I]. |
| TX or battery very hot in the backpack | Enclosed pack, no airflow | Feel and look at the pack at a break | BaylorVision reported "The battery and RF units got quite hot during both productions" (Costa, 2021) [V]. Use a ventilated mount; move the TX to the rig if weight allows [I]. |
| Monitor dims or shuts off in sun | Monitor thermal protection at full brightness | Brightness setting | Hood, lower brightness when possible, shade at breaks [I]. |

## 6. Gimbal drift, vibration and horizon

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| Buzzing or vibration | Poor balance or motor stiffness too high for the load | Rebalance with every cable and accessory attached | Balance first, then auto-tune. Rebalance after any lens or accessory change [I]. |
| Horizon slowly tilts | Gimbal IMU needs calibration; temperature change | Level test on a flat surface | Run the gimbal's calibration; recalibrate after big temperature swings [I]. |
| Good at 24mm, bad at 70mm | Zoom shifts the center of gravity | Check balance at the focal length you use most | Balance at the working focal length [I]. |
| Pan drifts when you stand still | Follow-mode deadband or pan drift | Watch the pan with the handle locked off | Recalibrate; adjust deadband [I]. |
| Cable tugging or arm hits on tilt | HDMI or power cable routing | Full tilt and roll test with cables connected | Short, flexible cables with service loops; mount the TX and battery on the non-moving part where practical [I]. |
| Gimbal dies mid-game | Runtime spec measured stationary | Battery level at each break | DJI's RS 4 Pro 13-hour figure is "Measured with the gimbal balanced in a level and stationary state"; "When the gimbal is in motion, the operating time will be reduced" (DJI, n.d.) [V]. Carry a charged spare grip [I]. |

## 7. Power

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| Everything reboots when you swap the main battery | No bridge between packs | Swap on the bench with video running | Use a dual-input plate or keep an internal battery in the camera as the bridge; plan swaps at commercial breaks [I]. |
| Camera powers off with a full V-mount | Unregulated or wrong-voltage dummy cable; loose dummy | Measure cable output | Use a regulated D-Tap to NP-FZ100 cable; the FX3's battery is rated 7.2 V (Sony, n.d.) [V]. |
| Runtime far shorter than planned | Old packs, cold weather, brighter monitor, extra devices | Measure actual draw with a D-Tap meter | Re-size from measured watts; see the runtime table in `01` [I]. |
| RX dies mid-show | RX on its own small battery | RX power source | Put the RX on AC or a large V-mount with a spare [I]. |
| Battery refused at the airport | Over 100 Wh without airline approval, or packed in checked bags | Wh label on each pack | Spares go in carry-on only; 101 to 160 Wh need airline approval and are limited to two (Transportation Security Administration [TSA], n.d.) [V]. |

## 8. Audio

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| No camera audio in the truck | Audio not embedded on HDMI output; converter not passing audio; A1 not de-embedding | Check audio meters on your monitor and on the RX output | Enable audio output on HDMI; confirm the channel map with the A1 [I]. |
| Wrong channels | 4-channel recording mapped differently from output | Channel meters | Agree the map; the FX3 offers 4-channel LPCM only with the XLR handle or a compatible shoe accessory (Sony, n.d.) [V]. |
| Wind noise | Unprotected mic | Listen on headphones | Furry windscreen, or the show does not use rig audio [I]. |

## 9. Focus

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| Autofocus jumps to the crowd | Shallow depth of field and a high-contrast background | Watch the AF box | Fox saw AF key on "the crowd in the background instead of the player in the foreground" (Mrozek, 2021) [V]. Use subject tracking, tighten the AF area, lower subject-shift sensitivity, or stop down [I]. |
| Focus misses on fast players | f/1.2 depth of field is under a foot at 3 m (see `01`) [I] | Review recordings at breaks | Stop down to f/2.8 for live action; save f/1.2 for set-up moments [I]. Davies: keeping focus is "like keeping a marble on a mirror" (Kerschbaumer et al., 2021) [V]. |

## 10. Control, tally and intercom

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| Shader lost control, video fine | Control path down (cellular, Wi-Fi) or firmware mismatch | Control box status | Control and video are separate paths; cellular control "you don't own the infrastructure" (Cyanview, n.d.-b) [V]. Fall back to manual exposure and tell the shader [I]. |
| No tally light | No tally box, or GPI/IP tally not mapped | Ask TD to punch you up and watch | Mirrorless cameras have no tally output; tally needs an external box (Cyanview, n.d.-b) [V]. |
| Cannot hear the director | Beltpack channel or battery | Beltpack display | Spare beltpack batteries; agree a hand signal with your utility for comms loss [I]. |

## Pre-show checklist

**Night before [I]**

- [ ] Every battery charged and labeled; one spare gimbal grip charged.
- [ ] Firmware recorded for camera, TX, RX, monitor, gimbal and control box; nothing updated the night before a show.
- [ ] Settings card printed: format, frame rate, picture profile or LUT plan, white balance mode, AF settings, output settings.
- [ ] Bench test: camera to monitor to TX to RX to a test monitor, with a battery swap under load.
- [ ] Device list (model, band, channel, power) sent to the frequency coordinator, backups included (Price & Juniet, 2015) [V].
- [ ] Rain cover, lens cloth, gaffer tape, spare HDMI and SDI cables, D-Tap splitter, spare antennas.

**At the venue, before FAX**

- [ ] Check in with the frequency coordinator; set only the assigned channel (NFL Football Operations, n.d.) [V].
- [ ] RX placed high with line of sight to the shooting area, on AC or a large battery (Teradek, 2024) [V/I].
- [ ] RX output confirmed at the receiver, then at the truck router.
- [ ] Format, frame rate, SDR or HDR confirmed with the EIC.
- [ ] Gimbal balanced with every cable attached, at the working focal length.

**During FAX and the all-hands RF test**

- [ ] Walk the whole route, including behind the bench and into the tunnel if planned; mark dead spots (Price & Juniet, 2015) [V].
- [ ] Slate test for delay against a hard camera.
- [ ] Shader match; tally test; intercom test on the camera channel.
- [ ] Audio meters confirmed by the A1.

**Before air**

- [ ] Fresh battery on the rig; next two staged with your utility.
- [ ] Lens clean; ND set for the light; manual white balance locked.
- [ ] Recording started if the show wants iso media.

**At every break**

- [ ] Battery levels (rig, gimbal, RX, beltpack); swap early, not late.
- [ ] Heat check; shade the rig.
- [ ] Quick look at recorded focus if you are recording.

**After the show**

- [ ] Fault log written while you remember it.
- [ ] Everything dried, cleaned, charged; damage noted before the next show.

## References

Costa, B. (2021, May 20). *BaylorVision deploys its own version of "Megalodon" on live broadcast of NCATA national championship*. Sports Video Group. https://www.sportsvideo.org/2021/05/20/baylorvision-deploys-its-own-version-of-megalodon-on-live-broadcast-of-ncata-national-championship/

Cyanview. (n.d.-a). *Sony Alpha* [Support documentation]. Retrieved October 21, 2026, from https://support.cyanview.com/docs/Integrations/Sony/SonyAlpha

Cyanview. (n.d.-b). *Sony mirrorless gimbal* [Support documentation]. Retrieved October 21, 2026, from https://support.cyanview.com/docs/Workflows/SonyMirrorlessGimbal

DJI. (n.d.). *DJI RS 4 Pro specs*. Retrieved October 21, 2026, from https://www.dji.com/rs-4-pro/specs

Hollyland. (n.d.). *Cosmo C1* [Product page]. Retrieved October 21, 2026, from https://www.hollyland.com/product/cosmo-c1

Kerschbaumer, K., Dachman, J., Costa, B., & Hernandez, K. (2021, June 29). *The big picture: Inside the shallow-depth-of-field movement and why it is here to stay*. Sports Video Group. https://www.sportsvideo.org/2021/06/29/the-big-picture-inside-the-shallow-depth-of-field-movement-and-why-it-is-here-to-stay/

Mrozek, C. (2021, September 20). A whole new ballgame. *American Cinematographer*. https://theasc.com/article/whole-new-ballgame/

NFL Football Operations. (n.d.). *Event frequency coordinators*. Retrieved October 21, 2026, from https://operations.nfl.com/game-operations-logistics/game-day-assistants/event-frequency-coordinators

Price, R., & Juniet, J. (2015). *Recommendations for sports venues: Wireless device management and frequency coordination* [White paper]. Sports Video Group Venue Initiative. https://www.sportsvideo.org/wp-content/uploads/2015/01/White-Paper-RF_Cfnl.pdf

Sony. (n.d.). *ILME-FX3 help guide: Specifications*. Retrieved October 21, 2026, from https://helpguide.sony.net/ilc/2210/v1/en/contents/TP1000886922.html

Teradek. (n.d.). *Bolt 6 LT set* [Product page]. Retrieved October 21, 2026, from https://teradek.com/products/bolt-6-lt-set

Teradek. (2024, August 5). *Wireless best practices* [User guide]. https://guide.teradek.com/a/1869285-wireless-best-practices

Transportation Security Administration. (n.d.). *Lithium batteries with more than 100 watt hours*. Retrieved October 21, 2026, from https://www.tsa.gov/travel/security-screening/whatcanibring/items/lithium-batteries-more-100-watt-hours
