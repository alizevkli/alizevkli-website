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

## v2 Updates (Dec 2025 · brand repositioning)
- Hero headline switched to **"Tennis Performance. Measured."** (was "Tennis Pro Analysis") with lime accent periods, matching new premium positioning
- Hero subtitle: "Data-driven coaching, match analysis and player development by Ali Zevkli."
- Proof bar updated to authoritative 5 credentials: ATPCA Advanced Pro Level 2 · TTF Qualified Coach · Division 1 WA Playing Background · Competed Against UTR 9+ Players · UTR Tournament Director
- Homepage TPA intro rewritten as broader "What Is Tennis Pro Analysis" (less Baseline-Vision-centric)
- Baseline section title shortened to "Video analysis. Performance reporting." (≈20% smaller via new SectionHeader `size="md"` variant)
- Homepage About section rebuilt as a proper **Founder section** with role line and "Read founder profile" CTA
- Coaching + Founder + About-page imagery swapped to branded `PlaceholderBlock` ("photo coming soon")
- 10-item credentials list rolled out on Home Founder section and /about
- Turkish translations updated to match
- Testing pass: 100% iteration_2 (no issues)

## v3 Updates (Dec 2025 · brand assets + section reorder)
- Real **TPA logo** image swapped into Navbar + Footer (on a clean white brand-patch background) and set as the favicon (`TPA-LOGO-SQUARE.jpg`).
- Real **founder photo** (Ali Zevkli on court) now used on the homepage Founder section and on the `/about` page — placeholders removed.
- Real **coaching photo** (Ali coaching with a student) on the homepage Coaching section.
- **Baseline Vision device/app preview** added to the homepage Baseline section using the supplied infographic.
- **Tournament section** keeps a branded placeholder until UTR event photos are supplied.
- Homepage **section order reshuffled**: Hero → Proof Bar → Founder → TPA → Baseline Vision → Coaching → Tournament → Pathways → Video → Contact. Eyebrows renumbered 01–08.
- Hero copy updated: subheading "Coaching, match analysis and player development powered by experience, data and performance insights.", CTAs shortened to "Book a Session" / "View Analysis".
- About copy rewritten to position Ali as an international tennis coach, performance analyst and tournament director; TPA copy made broader so Baseline Vision is positioned as one tool inside the TPA performance system.
- **Instagram** is now a real outbound link to `https://instagram.com/tennisproanalysis` (@tennisproanalysis) in Footer and Contact channels. Email and phone remain "adding soon" placeholders.
- All Baseline device subhead strings moved into i18n; TR translations updated.
- Testing pass: 100% iteration_3 (28/28 assertions).
- Hero headline switched to **"Tennis Performance. Measured."** (was "Tennis Pro Analysis") with lime accent periods, matching new premium positioning
- Hero subtitle: "Data-driven coaching, match analysis and player development by Ali Zevkli."
- Proof bar updated to authoritative 5 credentials: ATPCA Advanced Pro Level 2 · TTF Qualified Coach · Division 1 WA Playing Background · Competed Against UTR 9+ Players · UTR Tournament Director
- Homepage TPA intro rewritten as broader "What Is Tennis Pro Analysis" (less Baseline-Vision-centric)
- Baseline section title shortened to "Video analysis. Performance reporting." (≈20% smaller via new SectionHeader `size="md"` variant)
- Homepage About section rebuilt as a proper **Founder section** with role line ("Founder · Performance Coach · Analyst · Tournament Director") and "Read founder profile" CTA
- Coaching + Founder + About-page imagery swapped to branded `PlaceholderBlock` ("photo coming soon") — keeping real images only on hero & action backgrounds
- 10-item credentials list rolled out on Home Founder section and /about: ATPCA Advanced Pro Level 2 · TTF Qualified Coach · Bachelor in Physical Education & Sports Performance · International Tennis Coach · Division 1 WA · Competed vs UTR 9+ · Tournament Director (UTR Events) · Mentor for Trainee Coaches (Tennis West) · English & Turkish Speaking · Founder of Tennis Pro Analysis
- Turkish translations updated to match
- Testing pass: 100% iteration_2 (no issues)

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
