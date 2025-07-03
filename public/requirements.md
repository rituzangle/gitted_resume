# 🧾 Requirements Document – *Gitted Résumé Site*

## 📌 Project Overview

A responsive, privacy-conscious personal site to showcase Ritu Sangha’s résumé and creative development style. Built with whimsy, semantic HTML, and zero invasive tech.

---

## 🔹 Functional Requirements

### ✅ Core Features

- Hero section with identity and intro
- Modular résumé content rendered via Markdown
- Expandable PDF résumé preview with download option
- Static hosting of résumé assets

### 🪴 Optional Enhancements

- View toggle for résumé display (`link | preview | quote`)
- Pastel section dividers or animations
- Dark mode support
- Social/contact panel (email, GitHub, LinkedIn)
- Netlify or GitHub Pages deployment

---

## 🧱 Technical Requirements

- Framework: [Astro](https://astro.build/) + Tailwind CSS
- Markdown source: `intro.md` via `getEntry()`
- Static PDF hosted in `/public`
- GitHub repo: `rituzangle/gitted_resume`

---

## 🎨 Design & UX Notes

- Whimsical, emotionally resonant tone
- Tailwind prose for clean typography
- Accessible résumé preview using `<details><summary>`
- Lightweight, no-JS-first approach where possible

---

## 🔐 Privacy & Compliance

- No trackers, no forms, no third-party fonts
- Fully static build with no personal data collection
- COPPA/GDPR-friendly design thinking

