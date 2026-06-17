import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { IMAGES, LOGOS, BRAND } from "../constants/images";

/* ── Static data ──────────────────────────────────────────────────────── */

const HERO_CARDS = {
  tr: [
    { title: "BASELINE VISION",  sub: "Maç performansı ve seans verileri",            link: "/baseline-vision" },
    { title: "OYUNCU GELİŞİMİ", sub: "Raporlar, öncelikler ve antrenman planı",        link: "/ornek-rapor" },
    { title: "KULÜP & AKADEMİ", sub: "Oyuncu gelişim sistemi ve iş birliği",           link: "/coaching" },
    { title: "TÜRKİYE 2026",    sub: "Türkiye'de oyuncu, veli ve kulüplerle çalışma", link: "/pathways" },
  ],
  en: [
    { title: "BASELINE VISION",    sub: "Match performance & session data",            link: "/baseline-vision" },
    { title: "PLAYER DEVELOPMENT", sub: "Reports, priorities and training plan",       link: "/sample-report" },
    { title: "CLUB & ACADEMY",     sub: "Player development system",                   link: "/coaching" },
    { title: "TÜRKIYE 2026",       sub: "Working with players in Türkiye 2026",        link: "/pathways" },
  ],
};

/* No photos — curated images will be added later */
const SIX_CARDS = {
  tr: [
    { num: "01", title: "ÖZEL DERS",            text: "Bireysel gelişim ve antrenman planı",                link: "/pathways" },
    { num: "02", title: "GRUP ANTRENMANI",       text: "Junior, kulüp ve takım çalışmaları",                 link: "/coaching" },
    { num: "03", title: "TENNIS PRO ANALYSIS",   text: "Baseline Vision destekli oyuncu gelişim raporları",  link: "/tpa" },
    { num: "04", title: "KULÜP & AKADEMİ",      text: "Oyuncu gelişim sistemi ve performans günleri",       link: "/coaching" },
    { num: "05", title: "TÜRKİYE & AVUSTRALYA", text: "Oyuncu yolları, deneyim ve bağlantılar",             link: "/pathways", flags: true },
    { num: "06", title: "KOÇ GELİŞİMİ",         text: "Program desteği, mentorluk ve sistem kurma",         link: "/coaching" },
  ],
  en: [
    { num: "01", title: "PRIVATE COACHING",    text: "Individual development and training plan",             link: "/pathways" },
    { num: "02", title: "GROUP TRAINING",      text: "Junior, club and team sessions",                       link: "/coaching" },
    { num: "03", title: "TENNIS PRO ANALYSIS", text: "Baseline Vision-supported player development reports", link: "/tpa" },
    { num: "04", title: "CLUB & ACADEMY",      text: "Player development system and performance days",       link: "/coaching" },
    { num: "05", title: "TÜRKIYE & AUSTRALIA", text: "Player pathways, experience and connections",          link: "/pathways", flags: true },
    { num: "06", title: "COACH DEVELOPMENT",   text: "Program support, mentoring and system setup",          link: "/coaching" },
  ],
};

const CREDENTIALS = {
  tr: [
    { label: "ATPCA Advanced Pro Level 2" },
    { label: "Türkiye · Avustralya", flags: "🇹🇷🇦🇺" },
    { label: "Baseline Vision Destekli" },
    { label: "Tennis Pro Analysis" },
    { label: "Türkçe + İngilizce" },
  ],
  en: [
    { label: "ATPCA Advanced Pro Level 2" },
    { label: "Türkiye · Australia", flags: "🇹🇷🇦🇺" },
    { label: "Baseline Vision Supported" },
    { label: "Tennis Pro Analysis" },
    { label: "English + Turkish" },
  ],
};

/* ── Hero ─────────────────────────────────────────────────────────────── */
const HeroSection = () => {
  const { t, lang } = useLanguage();
  const isTR = lang === "tr";
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 8,
        y: (e.clientY / window.innerHeight - 0.5) * 8,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const cards = isTR ? HERO_CARDS.tr : HERO_CARDS.en;
  const secondaryHref = t.hero.ctaSecondaryHref || (isTR ? "/ornek-rapor" : "/sample-report");

  return (
    <section data-testid="hero" className="relative min-h-[100svh] flex items-center overflow-hidden">

      {/* Court background — parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(${mouse.x}px,${mouse.y}px,0) scale(1.05)`, transition: "transform 0.3s ease-out" }}
      >
        <img loading="eager" src={IMAGES.heroCourt} alt="Tennis court" className="w-full h-full object-cover" />
      </div>

      {/* Directional overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06141F]/75 via-[#06141F]/20 to-[#06141F]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06141F] via-[#06141F]/60 to-[#06141F]/15" />

      {/* Vertical sidebar label — desktop only */}
      <div className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] text-[9px] uppercase tracking-[0.45em] text-[#A7B0BA]/35 z-10 select-none">
        Tennis Pro Analysis · Ali Zevkli
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-28 pb-14 w-full">
        {/* Desktop: 3-col text | portrait | cards. Mobile: single stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">

          {/* COL 1 — Text */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.38em] text-[#B7FF00] mb-6 leading-loose">
                {isTR
                  ? "TENİS KOÇU · OYUNCU GELİŞİMİ · BASELINE VISION DESTEKLİ SİSTEM"
                  : "TENNIS COACH · PLAYER DEVELOPMENT · BASELINE VISION SYSTEM"}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1
                data-testid="hero-title"
                className="font-anton uppercase text-white leading-[0.86] tracking-tight text-5xl md:text-6xl lg:text-6xl xl:text-7xl mb-5"
              >
                ALİ ZEVKLİ
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <div className="font-anton uppercase leading-tight tracking-tight mb-8">
                <div className="text-xl md:text-2xl lg:text-3xl text-white/30 mt-1">
                  {isTR ? "DENEYİM." : "EXPERIENCE."}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl text-white/50 mt-1">
                  {isTR ? "BİLGİ." : "KNOWLEDGE."}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl text-[#B7FF00] mt-1">
                  {isTR ? "PERFORMANS." : "PERFORMANCE."}
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <p
                data-testid="hero-subtitle"
                className="text-sm text-white/60 leading-relaxed mb-7 max-w-md"
              >
                {isTR
                  ? "Türkiye ve Avustralya deneyimini Baseline Vision destekli oyuncu gelişim yaklaşımıyla birleştiren tenis koçluğu, maç performansı değerlendirmesi ve kulüp-akademi destek sistemi."
                  : t.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <a
                  href={t.hero.ctaPrimaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="hero-cta-primary"
                  className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.22em]"
                >
                  {t.hero.ctaPrimary} <ArrowRight size={14} />
                </a>
                <Link
                  to={secondaryHref}
                  data-testid="hero-cta-secondary"
                  className="tpa-btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.22em]"
                >
                  {t.hero.ctaSecondary} <ArrowUpRight size={14} />
                </Link>
              </div>
            </Reveal>

            {/* Flag location chips */}
            <Reveal delay={300}>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <span className="text-sm leading-none">🇹🇷</span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#A7B0BA]/80">
                    {isTR ? "Türkiye" : "Türkiye"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <span className="text-sm leading-none">🇦🇺</span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#A7B0BA]/80">
                    {isTR ? "Avustralya" : "Australia"}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* COL 2 — Ali portrait (desktop only, own column so face never covered) */}
          <div className="hidden lg:block lg:col-span-4">
            <Reveal delay={100}>
              <div
                className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl ring-1 ring-lime-400/10 bg-[#06141F]"
                style={{ height: "500px" }}
              >
                <img
                  src={BRAND.founder}
                  alt="Ali Zevkli — Tennis Coach & Tennis Pro Analysis Founder"
                  className="w-full h-full object-contain object-top"
                  loading="eager"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#06141F] to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#B7FF00] bg-[#06141F]/75 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#B7FF00]/20">
                    Tennis Pro Analysis
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-sm font-bold text-white">Ali Zevkli</div>
                  <div className="text-[10px] text-[#A7B0BA] mt-0.5">
                    {isTR ? "Tenis Antrenörü · TPA Kurucusu" : "Tennis Coach · TPA Founder"}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* COL 3 — 4 hero service link cards */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">

            {/* Mobile Ali portrait */}
            <div className="lg:hidden mb-1">
              <Reveal delay={280}>
                <div
                  className="relative rounded-2xl overflow-hidden border border-white/12 shadow-xl bg-[#06141F]"
                  style={{ height: "340px" }}
                >
                  <img
                    src={BRAND.founder}
                    alt="Ali Zevkli"
                    className="w-full h-full object-contain object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06141F]/80 via-[#06141F]/10 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="text-xs font-bold text-white">Ali Zevkli</div>
                    <div className="text-[9px] text-[#B7FF00] mt-0.5 tracking-wider uppercase">Tennis Pro Analysis</div>
                  </div>
                </div>
              </Reveal>
            </div>

            {cards.map((card, i) => (
              <Reveal key={card.title} delay={150 + i * 55}>
                <Link
                  to={card.link}
                  className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/10 bg-[#06141F]/75 backdrop-blur-sm hover:border-[#B7FF00]/60 hover:bg-[#0d1b2a]/90 transition-all"
                >
                  <div className="shrink-0 w-7 h-7 rounded-lg border border-[#B7FF00]/30 bg-[#B7FF00]/8 flex items-center justify-center">
                    <span className="font-anton text-[10px] text-[#B7FF00] leading-none">{`0${i + 1}`}</span>
                  </div>
                  <div className="min-w-0 flex-grow">
                    <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-white group-hover:text-[#B7FF00] transition-colors truncate">
                      {card.title}
                    </div>
                    <div className="text-[10px] text-[#A7B0BA]/70 mt-0.5 leading-snug line-clamp-2">{card.sub}</div>
                  </div>
                  <ArrowRight size={12} className="text-[#B7FF00] shrink-0 opacity-45 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

/* ── Credential strip ─────────────────────────────────────────────────── */
const CredentialStrip = () => {
  const { lang } = useLanguage();
  const isTR = lang === "tr";
  const creds = isTR ? CREDENTIALS.tr : CREDENTIALS.en;
  return (
    <section className="bg-[#0d1b2a] border-y border-[#F8FAFC]/10 py-3">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {creds.map((c, i) => (
            <div key={c.label} className="flex items-center gap-2">
              {i > 0 && <span className="w-px h-3 bg-[#F8FAFC]/15 hidden sm:block" />}
              {c.flags && <span className="text-base leading-none">{c.flags}</span>}
              <span className="text-[10px] uppercase tracking-[0.26em] text-[#A7B0BA]">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Six service cards — all premium dark gradient, no photos ─────────── */
const ServiceCardsSection = () => {
  const { t, lang } = useLanguage();
  const isTR = lang === "tr";
  const cards = isTR ? SIX_CARDS.tr : SIX_CARDS.en;

  return (
    <section className="py-12 md:py-16 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-7">
            <span className="inline-block w-6 h-px bg-[#B7FF00]" />
            <h2 className="font-anton uppercase text-2xl md:text-3xl text-white leading-tight tracking-tight">
              {isTR ? "HİZMETLER" : t.home.teasersTitle}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 45}>
              <Link
                to={card.link}
                className="group relative block rounded-2xl overflow-hidden border border-white/10 hover:border-[#B7FF00]/50 transition-all duration-300"
                style={{ height: "200px" }}
              >
                {/* Dark glass background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#06141F] to-[#0A1220]" />

                {/* Subtle lime court-grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(183,255,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(183,255,0,1) 1px,transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Lime radial glow — top-right corner */}
                <div className="absolute -top-8 -right-4 w-32 h-32 rounded-full bg-[#B7FF00]/8 blur-2xl group-hover:bg-[#B7FF00]/14 transition-all duration-500" />

                {/* Hover: lime bottom accent line */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-[#B7FF00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Flag badge — Türkiye & Australia card only */}
                {card.flags && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#06141F]/70 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/10">
                    <span className="text-sm leading-none">🇹🇷</span>
                    <span className="text-[9px] text-[#A7B0BA]/60 px-0.5">·</span>
                    <span className="text-sm leading-none">🇦🇺</span>
                  </div>
                )}

                {/* Card content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="text-[10px] font-bold tracking-[0.44em] text-[#B7FF00] mb-2">{card.num}</div>
                  <h3 className="font-anton uppercase text-xl text-white mb-1.5 group-hover:text-[#B7FF00] transition-colors leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-white/50 leading-relaxed mb-3">{card.text}</p>
                  <ArrowRight size={13} className="text-[#B7FF00] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Authority / logo strip ───────────────────────────────────────────── */
const LogoStrip = () => (
  <section className="border-y border-[#F8FAFC]/10 bg-[#0d1b2a] py-5">
    <div className="max-w-[1400px] mx-auto px-5 md:px-10">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
        <img loading="lazy" src="/images/logos/marmara-logo.png" alt="Marmara University"
          className="h-9 w-auto object-contain opacity-55 hover:opacity-80 transition-opacity" />
        <img loading="lazy" src={LOGOS.ttf} alt="Türkiye Tenis Federasyonu"
          className="h-9 w-auto object-contain opacity-55 hover:opacity-80 transition-opacity" />
        <img loading="lazy" src={LOGOS.atpca} alt="ATPCA"
          className="h-8 w-auto object-contain opacity-55 hover:opacity-80 transition-opacity brightness-0 invert" />
        <img loading="lazy" src="/images/logos/tennis-australia-logo-white.svg" alt="Tennis Australia"
          className="h-8 w-auto object-contain opacity-55 hover:opacity-80 transition-opacity" />
        <img loading="lazy" src={LOGOS.utr} alt="UTR Sports"
          className="h-6 w-auto object-contain opacity-55 hover:opacity-80 transition-opacity brightness-0 invert" />
        <img loading="lazy" src={LOGOS.baselineVision} alt="Baseline Vision"
          className="h-6 w-auto object-contain opacity-55 hover:opacity-80 transition-opacity brightness-0 invert" />
        <img loading="lazy" src={LOGOS.tenx} alt="TenX"
          className="h-7 w-auto object-contain opacity-55 hover:opacity-80 transition-opacity" />
      </div>
    </div>
  </section>
);

/* ── Final CTA ────────────────────────────────────────────────────────── */
const ContactCTA = () => {
  const { t } = useLanguage();
  return (
    <section
      data-testid="section-contact-cta"
      className="relative py-10 md:py-12 px-5 md:px-10 border-t border-[#F8FAFC]/10"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

        {/* Left: text */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-3">
              {t.contact.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="font-anton uppercase text-3xl md:text-4xl lg:text-5xl text-white leading-[0.9]">
              {t.contact.title}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-3 text-sm text-[#A7B0BA] max-w-lg leading-relaxed">
              {t.contact.lead}
            </p>
          </Reveal>
        </div>

        {/* Right: button + contact details */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <Reveal delay={200}>
            <Link
              to="/contact"
              data-testid="home-contact-cta"
              className="tpa-btn-primary inline-flex items-center justify-between w-full px-6 py-4 text-xs font-bold uppercase tracking-[0.22em]"
            >
              {t.contact.cta} <ArrowRight size={16} />
            </Link>
          </Reveal>
          <div className="text-xs text-[#A7B0BA]/80 space-y-1.5 pt-1">
            <div>{t.contact.email}</div>
            <div>{t.contact.phone}</div>
            <div>{t.contact.instagram}</div>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ── Page ─────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div data-testid="page-home">
      <HeroSection />
      <CredentialStrip />
      <ServiceCardsSection />
      <LogoStrip />
      <ContactCTA />
    </div>
  );
}
