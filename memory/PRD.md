# Tennis Pro Analysis — PRD

## Original Problem Statement
Build a premium responsive website for **Tennis Pro Analysis**, founded by **Ali Zevkli**.
- Brand: Tennis Pro Analysis · TPA = Performance & Video Analysis
- Positioning: serious sports-performance brand (Baseline Vision match analysis, data-driven coaching, tournaments, Australia ↔ Türkiye pathways)
- Palette: #06141F, #0B1F33, #B7FF00, #1FA463, #F8FAFC, #A7B0BA (no light blue)
- Restrictions: no fake testimonials, no fake numbers, no fake email/phone, no certificate/transcript/reference-letter images, no newsletter

## User Choices
- Static marketing site (no backend integrations beyond the default template)
- Real tennis stock images from Unsplash/Pexels
- Typography: Anton display + Inter body
- EN / TR language toggle

## Architecture
- React 19 + react-router-dom 7 (BrowserRouter, 8 routes)
- Tailwind CSS + custom design tokens via CSS variables in `index.css`
- i18n via React Context (`/src/i18n/LanguageContext.jsx`, key `tpa-lang` in localStorage)
- Shared components: Navbar, Footer, PageHero, SectionHeader, Reveal, VideoPlaceholder, LanguageToggle, ScrollToTop
- Default FastAPI/Mongo template untouched

## Routes
- `/` Home (10 sections: Hero · Proof bar · TPA · Baseline Vision · Coaching · Tournament · Pathways · About · Video · Contact CTA)
- `/tpa` · `/baseline-vision` · `/coaching` · `/tournament` · `/pathways` · `/about` · `/contact`

## What's Implemented (Dec 2025 · v1)
- Full responsive multi-page site with EN/TR toggle persisted in localStorage
- Hero with parallax background, Anton display typography, lime CTA, secondary outline CTA
- Proof bar marquee with 5 real credentials (no fake numbers)
- 8 KPI grid for Baseline Vision with progress bars
- Service cards for TPA modules, Coaching tiers, Pathways blocks
- About section with Ali's real credentials list (text-only)
- Video placeholder blocks (no real video yet)
- Contact page with placeholder channels (email/phone/instagram — "adding soon")
- Footer with full sitemap + brand mark + contact placeholders
- Mobile menu (hamburger), scroll-to-top, scroll-aware navbar blur
- Testing pass: 100% acceptance criteria validated by testing_agent_v3 (iteration_1)

## Prioritised Backlog
- **P0**: replace placeholders when Ali confirms email / phone / Instagram handle
- **P1**: real session/match videos in `/src/constants/images.js` (or upload to `/public`) — swap `VideoPlaceholder` for `<video>`
- **P1**: domain custom favicon + OpenGraph image
- **P2**: structured `/blog` or `/insights` for Baseline Vision case studies
- **P2**: real booking flow (Calendly embed or backend form + Resend email)
- **P2**: client area / private match-report viewer
- **P2**: SEO metadata per page, sitemap.xml, robots.txt

## Notes
- All credentials are presented as text only (no certificate images), as required
- `Pathways` section includes the no-visa/no-legal-advice disclaimer
- All interactive elements carry `data-testid` attributes
