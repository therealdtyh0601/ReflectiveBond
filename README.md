---

# Reflective Bond – Lumi Studio

*A gentle micro-reflection app for softening anger, restoring clarity, and mending human connections.*

---

## Overview

**Reflective Bond** is a lightweight, multilingual (English, 中文, Bahasa Malaysia) web application designed to help users:

1. Safely express emotional friction toward someone they know.
2. Pause for a guided breathwork reset.
3. Revisit the same person from a softened, appreciative perspective.
4. Generate a healing card — balanced, honest, emotionally intelligent — to mend bonds.

No account needed.
No storage.
All reflections remain on the user’s device.

This project is built as a free, open-web experience aligned with **Lumi Studio**’s design ethos:
deep blue geometry, emotional clarity, and secular-universal compassion.

---

## Features

### ✔ Multilingual Support

* **English**
* **中文（简体）**
* **Bahasa Malaysia**

Language selection affects the entire experience, including tone, instructions, card output, and healing mantra.

---

### ✔ Structured Reflection Journey

1. **User info** (name + date for signature)
2. **Person selection** (recipient or relationship label)
3. **Vent page** (3–5 things causing hurt or anger)
4. **Guided Breathwork** (10s breathing orb to reset emotional intensity)
5. **Appreciation page** (3–5 things you still cherish)
6. **Balanced Healing Card**
7. **Optional: Buddhist lamp + flower offering / flower delivery**
8. **Shareable recipient card**

---

### ✔ Healing Mantra (Auto-Typewriter)

Based on *I’m Sorry, Please Forgive Me, Thank You, I Love You*, rendered in three languages.

---

### ✔ IG Story Export (1080 × 1920)

* 5 selectable themes:

  * Lumi Deep Blue
  * Soft Gradient Dawn
  * Warm Neutral Sand
  * Cosmic Violet
  * Minimal Clean White
* Auto typography adjustment by language
* Dark/light contrast mode
* High-resolution PNG export (2× scaling)

---

### ✔ Fully Shareable Card Link

Each card can be encoded and shared privately with recipients.
The recipient opens a **clean read-only view** of the card, with download and IG story export.

---

### ✔ Optional Service Integration

Users may request via WhatsApp:

* **Buddha altar lamp + flower offering**
* **Card + flower delivery** (Klang Valley only, 24-hour SLA)

All handled through a prefilled WhatsApp message.

---

## Tech Stack

* **HTML5**
* **CSS3** (Lumi brand palette + geometric accents)
* **Vanilla JavaScript**
* **html2canvas** for image rendering
* **Base64 encoding** for shareable links
* **GitHub Pages** for hosting

No frameworks.
No backend.
No database.

This keeps deployment extremely lightweight and costs at **zero**.

---

## Project Structure

```
ReflectiveBond/
│
├── index.html          # Main app (input → breathwork → appreciation → result)
├── styles.css          # Lumi Studio styling system
├── script.js           # Multilingual logic, IG story generation, sharing
│
├── recipient.html      # Read-only view for recipients
└── recipient.js        # Rendering + typewriter animation for shared cards
```

---

## Deployment (GitHub Pages)

1. Create a new public repository.
2. Upload all five files to the root.
3. Go to **Settings → Pages**.
4. Under “Source”, select:

   ```
   main branch / root
   ```
5. Save.
6. Your site will appear at:

```
https://<your-username>.github.io/<your-repo-name>/
```

---

## How to Use

### 1. Open the app

Select English / 中文 / BM.

### 2. Fill in your name + date

Will appear on the final card signature.

### 3. Choose a person

A relationship label or name.

### 4. Vent safely

Write 3–5 things you dislike or feel hurt by.

### 5. Breathe

A 10-second guided breathing animation resets emotional intensity.

### 6. Reframe

Write 3–5 qualities you still appreciate.

### 7. Download / Share

Generate:

* Reflection card PNG
* IG Story PNG (1080 × 1920)
* Shareable link for the recipient

### 8. Optional service ordering

Click WhatsApp CTA to request offerings/delivery.

---

## Customisation

You may customise:

* Color themes
* Brand palette
* Healing lines
* Available languages
* IG story layout
* Offering options

All main configurations are inside **`script.js`**, clearly commented.

---

## Known Limitations

* Sharing uses `btoa()` Base64 encoding; very large text may exceed URL limits.
* iOS Safari’s `navigator.share()` availability varies.
* html2canvas does not capture certain advanced CSS filters.
* The app intentionally stores nothing; refreshing the page clears all data.

---

## Licence

This project is released under an **MIT License**.
You may modify, fork, or deploy it freely.

Attribution to **Lumi Studio** is appreciated but not required.

---

## Credits

Designed & developed collaboratively with
**Lumi Studio — Emotional Clarity for Modern Hearts**

Deep blue geometry × secular compassion × universal accessibility.


