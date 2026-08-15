# Criminology Society (CrimSoc) — Aesthetic & Design System Guide

> **Purpose:** This document serves as the single source of truth for the visual identity, typography, color palette, graphic motifs, and UI components of the Criminology Society website to prevent design drift across iterations.

---

## 1. Brand Identity & Vibe

- **Atmosphere:** Academic mystery, forensic dossier, detective board meets modern editorial polish.
- **Core Concept:** Physical case files pinned to an obsidian investigation board with masking tape, stamped with crimson typography, fingerprints, and evidence accents.
- **Target Context:** LifeCon convention showcase — high visual impact, instant mobile legibility via QR code scan, and interactive engagement.

---

## 2. Color Palette Specification

All values are precisely sampled and harmonized from the original official poster:

| Role | Color Name | Hex Code | RGB | CSS Variable | Usage / Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Canvas Background** | Obsidian Pitch Black | `#090a0d` | `rgb(9, 10, 13)` | `--bg-main` | Full-page backdrop, atmospheric dark board |
| **Card / Surface** | Cream Case Parchment | `#fcfaf4` | `rgb(252, 250, 244)` | `--surface-card` | Rounded info cards & dossier badges |
| **Primary Accent / Headers** | Deep Crimson / Burgundy | `#7e1923` | `rgb(126, 25, 35)` | `--accent-crimson` | Main title text, card headlines, emphasis words |
| **Secondary Crimson** | Dark Maroon | `#5a1017` | `rgb(90, 16, 23)` | `--accent-crimson-dark` | 3D card drop-shadow layer, button hover states |
| **Subtle Highlight** | Blood Rose | `#9e232f` | `rgb(158, 35, 47)` | `--accent-crimson-light`| Interactive highlights, tags, border accents |
| **Tape / Pin-Up** | Kraft Masking Tape | `#d4b48d` | `rgb(212, 180, 141)` | `--tape-base` | Realistic tape strips holding top of cards |
| **Tape Shadow** | Warm Amber Tan | `#b8966e` | `rgb(184, 150, 110)` | `--tape-dark` | Tape edges and translucent folds |
| **Graphic Accent** | Evidence Steel Gray | `#8692a1` | `rgb(134, 146, 161)` | `--steel-gray` | Handcuffs vector, fingerprints, subtle icons |
| **Body Text (on Cards)** | Rich Burgundy-Brown | `#4f131a` | `rgb(79, 19, 26)` | `--text-card-body` | Paragraphs on cream cards for optimal contrast |
| **Subtle Card Border** | Soft Warm Border | `#eedec9` | `rgb(238, 222, 201)` | `--card-border` | Subtle outline for paper cards |

---

## 3. Typography Hierarchy

### 3.1 Primary Display & Titles (Authority & Mystery)
- **Font Family:** `Cinzel`, `Playfair Display`, or `Bodoni Moda` (Google Fonts)
- **Weights:** `700 (Bold)`, `900 (Black)`
- **Styling:** Uppercase for major headers, generous tracking (`letter-spacing: 0.06em to 0.12em`), deep crimson fill.
- **Signature Feature:** The letters **"O"** in *"CRIMINOLOGY"* and *"SOCIETY"* contain embedded biometric fingerprint graphics.

### 3.2 Secondary Headers & Section Titles
- **Font Family:** `Playfair Display` or `Cinzel`
- **Weights:** `600 (Semi-Bold)`, `700 (Bold)`
- **Styling:** Title case (e.g., *"What is CrimSoc?"*, *"Where: Math 203"*).

### 3.3 Body & Narrative Text
- **Font Family:** `Lora` or `EB Garamond` (fallback: `Georgia`, `serif`)
- **Weights:** `400 (Regular)`, `500 (Medium)`, `600 (Semi-Bold)`
- **Styling:** Line-height `1.65`, comfortable reading size (16px–18px on desktop, 15px on mobile).

### 3.4 Evidence & Meta Tags (Timestamps, Rooms, Emails)
- **Font Family:** `Space Mono` or `JetBrains Mono` (fallback: `monospace`)
- **Weights:** `400 (Regular)`, `700 (Bold)`
- **Styling:** Uppercase badge tags (e.g., `ROOM: MATH 203`, `TIME: TUESDAYS 12:45-1:15`).

---

## 4. Key Graphic Motifs & Visual Elements

1. **The Double-Layered 3D Crimson Card**:
   - Rounded corners (`border-radius: 20px` to `28px`).
   - Deep Crimson (`#7e1923` or `#5a1017`) solid bottom-right offset shadow (`box-shadow: 6px 6px 0px #5a1017` or pseudo-element offset layer) mimicking physical card stock cutout.
2. **Kraft Masking Tape Strips**:
   - Translucent textured rectangular strips (`background: rgba(212, 180, 141, 0.85)`) placed on the top center of cards.
   - Slight rotation (`transform: rotate(-1deg)` / `rotate(1.5deg)`) with jagged torn-edge styling.
3. **Biometric Fingerprint Motif**:
   - Integrated inside circular typography (`O` glyphs) and as subtle low-opacity watermark backgrounds on dossiers.
4. **Handcuffs Vector Graphic**:
   - Steel metallic gray linked handcuffs graphic placed alongside badge titles.
5. **Classified Rubber Stamps**:
   - Angled stamp overlays like *"CONFIDENTIAL"*, *"CASE OPEN"*, *"OFFICIAL LIFECON 2026 BOOTH"*.

---

## 5. UI Component Guidelines

- **Buttons & Interactive Elements**:
  - Cream card style with crimson borders, or solid crimson buttons with cream text.
  - Hover states: Smooth lift (`translateY(-2px)`), deeper drop shadow, or subtle glowing red evidence outline.
- **Copy Buttons for Contact Emails**:
  - Instant one-click copy with feedback ("Copied to clipboard!") for the 5 lead email addresses.
- **Ambient Booth "Attract Mode" (LifeCon Exhibition Feature)**:
  - If the page receives no mouse movement, touch, or key interaction for 15–20 seconds, the site transitions into an ambient attract mode:
    - Subtle radar/light sweep across header badges.
    - Soft float / breathing parallax on evidence cards and tape pins.
    - Pulsing interactive prompt: *"🚨 Tap or Scroll to Investigate"* to invite passersby.
    - Instantly wakes on any user movement or touch.
- **Sound FX System (Discreet Toggle)**:
  - Accessible mute/unmute toggle in the corner with tactile forensic audio feedback (typewriter keystrokes, polaroid snap, stamp thump, case solved chime).
- **Responsive Guidelines**:
  - **Mobile:** Single column stack, touch-friendly tap targets (>44px), sticky quick-join bar.
  - **Desktop:** Multi-column dossier board with interactive card tilt and parallax evidence markers.

---

## 6. Official Poster Content Baseline

- **Title:** CRIMINOLOGY SOCIETY
- **Tagline / Intro:** *"What is CrimSoc?"*
- **Description:**
  > *"The Criminology Society dives into the world of crime, law, and justice. We analyze criminal behavior, explore real-life cases, and uncover how laws and society respond while sharpening your critical thinking and problem-solving skills. Perfect for anyone curious about law, finance, STEM, or the science behind human behavior. This society promises excitement, insight, games but also a deeper understanding into the society we live in and the changes we can make."*
- **Logistics:**
  - **Where:** Math 203
  - **When:** Tuesdays 12:45 - 1:15
- **Contacts:**
  - `ghosh127294@gapps.uwcsea.edu.sg`
  - `unswo31797@gapps.uwcsea.edu.sg`
  - `wasu79763@gapps.uwcsea.edu.sg`
  - `seriz32192@gapps.uwcsea.edu.sg`
  - `ding39701@gapps.uwcsea.edu.sg`
- **Sign-off:** *"See you there!"*

---

## 7. Interactive Mini-Game Specification: "The Suspect Lineup — Cognitive Bias Experiment"

### 7.1 Core Purpose & Psychological Message
- **Mission:** Demonstrate in under 30 seconds how unconscious cognitive biases (the "Halo Effect", visual stereotyping, judging books by covers) lead people to wrongly accuse individuals based on aesthetic stereotypes rather than forensic facts.
- **Conversion Value:** Positions Criminology Society as the essential space to learn real forensic psychology, evidence-based profiling, and analytical thinking.

### 7.2 Game Architecture & User Journey
1. **The 15-Second Case Briefing**:
   - Case dossier badge: *"INCIDENT REPORT: The Archive Vault Keycard Theft"*.
   - A fast 2-sentence scenario: *"At 12:15 PM, an encrypted master keycard was stolen from the high-security archive. CCTV logs recorded 5 individuals passing through the corridor. Who is the prime perpetrator?"*
2. **The 5-Suspect Lineup**:
   - **Suspect 01 — "The Rebel/Leather Jacket"**: Visually edgy, tattoos, scowling, hands in pockets. *(Stereotypical red herring — was actually just late for band practice).*
   - **Suspect 02 — "The Nervous Hacker/Hoodie"**: Dark oversized hoodie, avoiding eye contact, carrying cluttered tech cables. *(Stereotypical red herring — was stressed over a computer science midterm).*
   - **Suspect 03 — "The Overwhelmed Janitor"**: Work coveralls, rubber gloves, rushed past the doorway. *(Socioeconomic bias red herring — was responding to a water leak on floor 3).*
   - **Suspect 04 — "The Distracted Student"**: Headset, dark sunglasses indoors, oversized streetwear. *(Appearance bias red herring — listening to a podcast, didn't enter the room).*
   - **Suspect 05 — "The Pristine Scholar / Executive"**: **THE ACTUAL CULPRIT.** Sharp tailored blazer/suit, warm charming smile, clipboard in hand. *(Looks completely upstanding and innocent. Clue: Concealed RFID card cloner attached to their badge lanyard).*
3. **The Selection & Reveal State**:
   - Visitor taps their suspect on the touchscreen / laptop.
   - **Instant Verdict**:
     - *If Wrong (Suspects 1–4):* "⚠️ **CAUGHT BY THE BIAS TRAP!** You suspected [Name] due to visual stereotypes. In reality, Suspect 05 in the sharp suit cloned the access card! Criminals exploit trust and presentation."
     - *If Correct (Suspect 05):* "🎯 **EXCEPTIONAL DEDUCTION!** You saw past the 'Halo Effect' and caught the real perpetrator. You have an instinct for criminal profiling."
4. **Live LifeCon Collective Bias Meter (Bar Chart)**:
   - Dynamic animated bar chart displaying live aggregate statistics:
     - Suspect 01 (Rebel): ~38%
     - Suspect 02 (Hoodie): ~36%
     - Suspect 03 (Janitor): ~11%
     - Suspect 04 (Streetwear): ~5%
     - **Suspect 05 (The Suit / Actual Culprit): ~10%**
   - **Real-Time Booth Counter:** Persists into browser storage (`localStorage`) so every visitor at LifeCon adds to the tally live during the day.
   - Includes a booth reset button for your girlfriend to quickly clear/reset the trial for the next visitor.
5. **Direct Call to Action**:
   - Prominent badge: *"Ready to master the science of human behavior & forensic profiling?"*
   - CTA Button: **[Join CrimSoc — Tuesdays 12:45 PM in Math 203]**

