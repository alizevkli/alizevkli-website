import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { PlaceholderBlock } from "../components/PlaceholderBlock";
import { IMAGES, BRAND, LOGOS } from "../constants/images";

const HOME_VIDEOS = [
  {
    testId: "video-1",
    title: "Match Summary Like On TV",
    text: "Video analysis, match stats, line calling and player feedback in one smarter coaching session.",
    src: "https://drive.google.com/file/d/1HFPsD2YlrA2RA1L4TRvDYmLLaJ1DQEr1/preview",
  },
  {
    testId: "video-2",
    title: "Bring Fairness And Excitement To Your Court",
    text: "Baseline Vision helps players track performance, review key moments and turn every match into measurable improvement.",
    src: "https://drive.google.com/file/d/1HIpvLWeZXVMUp3VrabOayl7zbGYeIQW-/preview",
  },
];

const FOUNDER_LEAD =
  "International tennis coach, performance analyst and founder of Tennis Pro Analysis. Ali combines on-court coaching experience with video analysis, match statistics and Baseline Vision technology to help players understand their game clearly, train with purpose and improve faster.";

const HeroSection = () => {
  const { t } = useLanguage();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section data-testid="hero" className="relative min-h-[100vh] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0) scale(1.06)`,
          transition: "transform 0.25s ease-out",
        }}
      >
        <img loading="lazy" src={IMAGES.heroCourt} alt="Tennis court overhead" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#06141F]/85 via-[#06141F]/55 to-[#06141F]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06141F]/80 via-transparent to-transparent" />
      <div className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.5em] text-[#A7B0BA]">
        Tennis Pro Analysis · By Ali Zevkli
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 pb-16 md:pb-24 pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-6 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-[#B7FF00]" />
                {t.hero.eyebrow}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 data-testid="hero-title" className="font-anton uppercase text-white leading-[0.88] tracking-tight text-[16vw] sm:text-[13vw] md:text-[9vw] lg:text-[8.5rem] xl:text-[10rem]">
                {t.hero.titleLine1}<br />
                {t.hero.titleLine2}<span className="text-[#B7FF00]">.</span><br />
                {t.hero.titleLine3}<span className="text-[#B7FF00]">.</span>
              </h1>
            </Reveal>
          </div>
          <div className="lg:col-span-3 lg:pb-6 flex flex-col gap-6">
            <Reveal delay={240}>
              <p data-testid="hero-subtitle" className="text-base md:text-lg text-white/90 leading-relaxed">{t.hero.subtitle}</p>
            </Reveal>
            <Reveal delay={320}>
              <p className="text-sm text-[#A7B0BA] leading-relaxed">{t.hero.support}</p>
            </Reveal>
          </div>
        </div>
        <Reveal delay={420}>
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/contact" data-testid="hero-cta-primary" className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]">
              {t.hero.ctaPrimary}<ArrowRight size={16} />
            </Link>
            <Link to="/baseline-vision" data-testid="hero-cta-secondary" className="tpa-btn-secondary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]">
              {t.hero.ctaSecondary}<ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={520}>
          <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-6 md:gap-8">
            {[
              { src: LOGOS.marmara, alt: "Marmara University", h: "h-9" },
              { src: LOGOS.atpca, alt: "ATPCA", h: "h-7" },
              { src: LOGOS.tennisAustralia, alt: "Tennis Australia", h: "h-7" },
              { src: LOGOS.ttf, alt: "TTF", h: "h-8" },
              { src: LOGOS.utr, alt: "UTR Sports", h: "h-6" },
              { src: LOGOS.baselineVision, alt: "Baseline Vision", h: "h-6" },
            ].map((logo) => logo.src && (
              <img loading="lazy" key={logo.alt} src={logo.src} alt={logo.alt}
                className={`${logo.h} object-contain opacity-80 hover:opacity-100 transition-opacity brightness-0 invert`} />
            ))}
          </div>
        </Reveal>

        {/* Credential logos strip below hero CTAs */}
        <Reveal delay={520}>
          <div className="mt-12 md:mt-16 pt-8 border-t border-[#F8FAFC]/10">
            <div className="text-[10px] uppercase tracking-[0.34em] text-[#A7B0BA] mb-5">Qualifications & Affiliations</div>
            <div className="flex flex-wrap items-center gap-5 md:gap-8">
              {[
                { src: BRAND.logos?.ttf, alt: "TTF", invert: false },
                { src: BRAND.logos?.marmara, alt: "Marmara University", invert: false },
                { src: BRAND.logos?.atpca, alt: "ATPCA", invert: true },
                { src: BRAND.logos?.utr, alt: "UTR Sports", invert: true },
                { src: BRAND.logos?.baselineVision, alt: "Baseline Vision", invert: true },
                { src: BRAND.logos?.tenx, alt: "TenX", invert: true },
              ].filter(l => l.src).map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-7 md:h-8 object-contain opacity-70 hover:opacity-100 transition-opacity ${logo.invert ? "brightness-0 invert" : ""}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const ProofBar = () => {
  const { t } = useLanguage();
  const items = [...t.proof.items, ...t.proof.items];
  return (
    <section data-testid="proof-bar" className="relative border-y border-[#F8FAFC]/10 bg-[#06141F] overflow-hidden w-full">
      <div className="w-full py-5 flex items-center gap-6 overflow-hidden">
        <span className="hidden md:inline-flex shrink-0 text-[10px] uppercase tracking-[0.34em] text-[#B7FF00] pl-5 md:pl-10">{t.proof.title} —</span>
        <div className="overflow-hidden flex-1 min-w-0">
          <div className="tpa-ticker gap-10" style={{whiteSpace: "nowrap"}}>
            {items.map((it, i) => (
              <span key={i} className="shrink-0 text-[11px] md:text-sm uppercase tracking-[0.18em] text-[#A7B0BA] inline-flex items-center gap-10">
                {it}<span className="inline-block w-1 h-1 bg-[#B7FF00] rounded-full" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TPAIntro = () => {
  const { t } = useLanguage();
  return (
    <section data-testid="section-tpa" className="relative py-24 md:py-32 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow={t.tpa.eyebrow} title={t.tpa.title} lead={t.tpa.lead} />
          <Reveal delay={240}>
            <Link to="/tpa" data-testid="tpa-section-cta" className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#B7FF00] hover:gap-3 transition-all">
              {t.tpa.cta} <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {t.tpa.bullets.map((b, i) => (
            <Reveal key={b.k} delay={i * 80}>
              <div className="tpa-card p-6 md:p-8 h-full">
                <h3 className="font-anton uppercase text-2xl md:text-3xl text-white mb-3">{b.k}</h3>
                <p className="text-sm text-[#A7B0BA] leading-relaxed">{b.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const BaselineSection = () => {
  const { t } = useLanguage();
  return (
    <section data-testid="section-baseline" className="relative py-24 md:py-32 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader eyebrow={t.baseline.eyebrow} title={t.baseline.title} lead={t.baseline.lead} size="md" />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#F8FAFC]/10 border border-[#F8FAFC]/10">
          {t.baseline.grid.map((g, i) => (
            <Reveal key={g.label} delay={i * 50}>
              <div className="bg-[#06141F] p-5 md:p-7 h-full group hover:bg-[#0B1F33] transition-colors">
                <div className="font-anton uppercase text-xl md:text-2xl text-white mb-2">{g.label}</div>
                <p className="text-xs text-[#A7B0BA] leading-relaxed">{g.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden border border-[#F8FAFC]/10 bg-[#0B1F33]">
              <img loading="lazy" src={IMAGES.tenx?.servePrepStadium || IMAGES.baselineHero} alt="Baseline Vision coaching session" className="w-full h-full object-cover object-center" data-testid="baseline-device-photo" />
            </div>
            <div className="lg:col-span-5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-3">{t.baseline.deviceEyebrow}</div>
              <h3 className="font-anton uppercase text-2xl md:text-3xl text-white mb-4 leading-tight">{t.baseline.deviceTitle}</h3>
              <p className="text-sm text-[#A7B0BA] leading-relaxed mb-6">{t.baseline.deviceLead}</p>
              <Link to="/baseline-vision" data-testid="baseline-section-cta" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#B7FF00] hover:gap-3 transition-all">
                {t.baseline.cta} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const CoachingSection = () => {
  const { t } = useLanguage();
  return (
    <section data-testid="section-coaching" className="relative py-24 md:py-32 px-5 md:px-10 border-t border-[#F8FAFC]/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow={t.coaching.eyebrow} title={t.coaching.title} lead={t.coaching.lead} />
          </div>
          <Reveal delay={160}>
            <div className="lg:col-span-5 relative overflow-hidden border border-[#F8FAFC]/10" style={{minHeight: "360px"}}>
              <img loading="lazy" src={IMAGES.tenx.backhandBW} alt="Tennis player coaching session" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" data-testid="coaching-photo" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06141F]/60 to-transparent pointer-events-none" />
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {t.coaching.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80}>
              <div className="tpa-card p-7 md:p-9 h-full flex flex-col">
                <h3 className="font-anton uppercase text-3xl md:text-4xl text-white mb-3">{tier.name}</h3>
                <p className="text-sm text-[#A7B0BA] leading-relaxed mb-6">{tier.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                      <span className="mt-1 w-1.5 h-1.5 bg-[#B7FF00] shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const TournamentSection = () => {
  const { t } = useLanguage();
  return (
    <section data-testid="section-tournament" className="relative py-24 md:py-32 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow={t.tournament.eyebrow} title={t.tournament.title} lead={t.tournament.lead} />
        </div>
        <div className="lg:col-span-7">
          <ul className="divide-y divide-[#F8FAFC]/10 border-y border-[#F8FAFC]/10">
            {t.tournament.points.map((p) => (
              <Reveal key={p}>
                <li className="py-6 flex items-start gap-6 group">
                  <span className="mt-2 w-1.5 h-1.5 bg-[#B7FF00] shrink-0" />
                  <span className="text-base md:text-lg text-white/90 group-hover:text-white transition-colors">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={300}>
            <div className="mt-8 relative aspect-[16/9] overflow-hidden">
              <PlaceholderBlock label="UTR Tournaments" caption="Tournament & program photos · coming soon" className="absolute inset-0" testId="placeholder-tournament" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};


const StatsStrip = () => {
  const { lang } = useLanguage();
  const stats = lang === "tr"
    ? [
        { val: "20+", label: "Yıllık Deneyim" },
        { val: "🇦🇺 🇹🇷", label: "İki Ülke, İki Lisans" },
        { val: "Yüzlerce", label: "Gelişen Oyuncu" },
        { val: "ITF · UTR · TTF", label: "Uluslararası Sistemler" },
      ]
    : [
        { val: "20+", label: "Years of Coaching" },
        { val: "🇦🇺 🇹🇷", label: "Two Decades. Two Countries." },
        { val: "Hundreds", label: "of Players Developed" },
        { val: "ITF · UTR · TTF", label: "International Systems" },
      ];

  return (
    <section className="border-y border-[#F8FAFC]/10 bg-[#0B1F33]/60 py-10 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-anton uppercase text-2xl md:text-4xl text-white tracking-tight break-words">{s.val}</span>
            <span className="mt-1.5 text-[10px] uppercase tracking-[0.28em] text-[#A7B0BA]">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const PathwaysSection = () => {
  const { t } = useLanguage();
  return (
    <section data-testid="section-pathways" className="relative py-24 md:py-32 px-5 md:px-10 border-t border-[#F8FAFC]/10 overflow-hidden">
      <img loading="lazy" src={IMAGES.silhouette} alt="" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06141F] via-[#06141F]/85 to-transparent" />
      <div className="relative max-w-[1400px] mx-auto">
        <SectionHeader eyebrow={t.pathways.eyebrow} title={t.pathways.title} lead={t.pathways.lead} />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {t.pathways.blocks.map((b) => (
            <Reveal key={b.k}>
              <div className="tpa-card p-7 md:p-9 h-full">
                <h3 className="font-anton uppercase text-2xl md:text-3xl text-white mb-3">{b.k}</h3>
                <p className="text-sm text-[#A7B0BA] leading-relaxed">{b.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <p className="mt-10 max-w-3xl text-xs uppercase tracking-[0.18em] text-[#A7B0BA] border-l-2 border-[#1FA463] pl-4">{t.pathways.disclaimer}</p>
        </Reveal>
      </div>
    </section>
  );
};

const AustraliaTurkeySection = () => {
  const { lang } = useLanguage();
  const isT = lang === "tr";

  const auItems = isT
    ? ["Perth & Melbourne'da Antrenörlük", "Oyuncu Gelişimi & Turnuva Yönetimi", "ATPCA İleri Profesyonel Seviye 2", "ANZAC — Ortak Tarih, Gerçek Bağ"]
    : ["Perth & Melbourne Coaching", "Player Development & Tournaments", "ATPCA Advanced Pro Level 2", "ANZAC — A shared history, genuine connection"];

  const trItems = isT
    ? ["TTF Yetkili Antrenör", "İstanbul & Ankara — 2026'da Başlıyor", "Kulüp & Akademi Danışmanlığı", "Junior ITF & Oyuncu Gelişim Yolları"]
    : ["TTF Qualified Coach", "Istanbul & Ankara — Coming 2026", "Club & Academy Consulting", "Junior ITF & Player Pathways"];

  return (
    <section data-testid="section-australia-turkiye" className="relative py-24 md:py-32 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#06141F] overflow-hidden">
      <img loading="lazy" src={IMAGES.tenx2?.kenRosewallOverview || IMAGES.tenx?.nightServe} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06141F]/80 via-[#06141F]/70 to-[#06141F]" />
      <div className="relative max-w-[1400px] mx-auto">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#B7FF00] mb-4 flex items-center gap-3">
            <span>🇦🇺</span><span>Australia ↔ Türkiye</span><span>🇹🇷</span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-anton uppercase text-5xl md:text-7xl text-white leading-[0.95]">
            {isT ? "İki Ülke. Bir Antrenör." : "Two Countries. One Coach."}
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-5 max-w-2xl text-[#A7B0BA] text-base leading-relaxed">
            {isT
              ? "Avustralya ve Türkiye'de 20 yılı aşkın deneyim. Her iki sistemi içeriden tanıyan, iki ülkeyi birbirine bağlayan tek antrenör."
              : "20+ years across both countries. Both systems, from the inside. The genuine bridge between Australian and Turkish tennis."}
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
          <Reveal delay={200}>
            <div className="tpa-card p-8 h-full border-l-2 border-[#B7FF00]">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">🇦🇺</span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00]">Australia</div>
                  <div className="font-anton uppercase text-2xl text-white">Perth · Melbourne</div>
                </div>
              </div>
              <ul className="space-y-2.5">
                {auItems.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                    <span className="text-[#B7FF00] mt-0.5 shrink-0">→</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="tpa-card p-8 h-full border-l-2 border-[#E8192C]">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">🇹🇷</span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#E8192C]">Türkiye</div>
                  <div className="font-anton uppercase text-2xl text-white">İstanbul · Ankara</div>
                </div>
              </div>
              <ul className="space-y-2.5">
                {trItems.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                    <span className="text-[#E8192C] mt-0.5 shrink-0">→</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={400}>
          <div className="mt-10">
            <Link to="/pathways" className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]">
              {isT ? "Gelişim Yollarını Keşfet" : "Explore Pathways"} <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};


const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section data-testid="section-about" className="relative py-24 md:py-32 px-5 md:px-10 border-t border-[#F8FAFC]/10">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Photo — left column */}
        <div className="w-full lg:w-5/12 shrink-0">
          <div className="relative overflow-hidden border border-[#F8FAFC]/10" style={{height: "520px"}}>
            <img
              src={BRAND.founder}
              alt="Ali Zevkli — Founder of Tennis Pro Analysis"
              className="w-full h-full object-cover object-center"
              data-testid="founder-photo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06141F]/50 via-transparent to-transparent" />
          </div>
        </div>
        {/* Content — right column */}
        <div className="flex flex-col flex-1">
          <SectionHeader eyebrow="Founder" title="Ali Zevkli" lead={FOUNDER_LEAD} />
          <Reveal delay={140}>
            <div className="mt-6 text-[11px] uppercase tracking-[0.3em] text-[#B7FF00]">International Tennis Coach · Performance Analyst · Founder of Tennis Pro Analysis</div>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {t.about.creds.map((c) => (
                <div key={c} className="flex items-start gap-3 border border-[#F8FAFC]/10 px-4 py-3 hover:border-[#B7FF00]/50 transition-colors">
                  <span className="mt-2 w-1.5 h-1.5 bg-[#B7FF00] shrink-0" />
                  <span className="text-sm text-white/90">{c}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8">
              <Link to="/about" data-testid="founder-cta" className="tpa-btn-secondary inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.22em]">
                Read Founder Profile <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  const { t } = useLanguage();
  return (
    <section data-testid="section-video" className="relative py-24 md:py-32 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader eyebrow={t.video.eyebrow} title="Baseline Vision in Action" lead="Watch real Baseline Vision examples showing match film, stats, line calling and coaching feedback." />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {HOME_VIDEOS.map((video, i) => (
            <Reveal key={video.title} delay={i * 120}>
              <article data-testid={video.testId} className="bg-[#0B1F33] border border-[#F8FAFC]/10 overflow-hidden">
                <div className="aspect-video bg-black">
                  <iframe src={video.src} title={video.title} className="w-full h-full" allow="autoplay" allowFullScreen />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-anton uppercase text-2xl md:text-3xl text-white leading-tight">{video.title}</h3>
                  <p className="mt-4 text-sm text-[#A7B0BA] leading-relaxed">{video.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};


const TenXPhotoStrip = () => (
  <section className="border-t border-[#F8FAFC]/10 overflow-hidden">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
      {[
        { src: IMAGES.tenx?.nightServe, alt: "Night court serve — UTR Pro Series Sydney" },
        { src: IMAGES.tenx?.redSmoke, alt: "TenX player entrance" },
        { src: IMAGES.tenx?.netHandshake, alt: "Players at the net — Melbourne Park" },
        { src: IMAGES.tenx?.rainCourt, alt: "Player on court in rain — MyUTR" },
      ].map((photo, i) => (
        <div key={i} className="relative aspect-video overflow-hidden group">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-[#06141F]/40 group-hover:bg-[#06141F]/10 transition-colors duration-500" />
        </div>
      ))}
    </div>
  </section>
);

const TrustSection = () => {
  const partners = [
    { name: "Marmara University", image: LOGOS.marmara, label: "Sports Science Degree" },
    { name: "ATPCA", image: LOGOS.atpca, label: "ATPCA Advanced Pro Level 2" },
    { name: "Tennis Australia", image: LOGOS.tennisAustralia, label: "Tennis Australia Member" },
    { name: "TTF", image: LOGOS.ttf, label: "TTF Qualified Coach" },
    { name: "UTR Sports", image: LOGOS.utr, label: "UTR Tournament Director" },
    { name: "Baseline Vision", image: LOGOS.baselineVision, label: "Performance Analysis" },
    { name: "TenX", image: LOGOS.tenx, label: "Partner" },
    { name: "Tennis Pro Analysis", image: LOGOS.tpa || BRAND.logoSquare, label: "Founder Brand" },
  ];

  return (
    <section data-testid="section-trust" className="relative border-t border-[#F8FAFC]/10 py-14 md:py-20 px-5 md:px-10 bg-[#06141F]">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="text-center mb-10">
            <div className="text-[10px] uppercase tracking-[0.34em] text-[#B7FF00] mb-3">Trust Network</div>
            <h3 className="font-anton uppercase text-3xl md:text-4xl text-white">Professional Affiliations, Technology & Sponsors</h3>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-[1400px] mx-auto">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 60}>
              <div className="h-full min-h-[150px] border border-[#F8FAFC]/10 bg-[#0B1F33]/60 p-4 flex flex-col items-center justify-between text-center hover:border-[#B7FF00]/50 transition-colors">
                <div className="h-16 w-full flex items-center justify-center mb-4">
                  {partner.image ? (
                    <img loading="lazy" src={partner.image} alt={`${partner.name} logo`} className={`max-h-14 max-w-[120px] object-contain ${partner.bg ? "brightness-0 invert" : ""}`} />
                  ) : (
                    <span className="font-anton uppercase text-2xl text-white">{partner.name}</span>
                  )}
                </div>
                <div>
                  <div className="font-bold text-xs uppercase tracking-[0.18em] text-white">{partner.name}</div>
                  <p className="mt-2 text-[11px] leading-relaxed text-[#A7B0BA]">{partner.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactCTA = () => {
  const { t } = useLanguage();
  return (
    <section data-testid="section-contact-cta" className="relative py-28 md:py-40 px-5 md:px-10 border-t border-[#F8FAFC]/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-5">{t.contact.eyebrow}</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-anton uppercase text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9]">{t.contact.title}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-base md:text-lg text-[#A7B0BA] max-w-2xl">{t.contact.lead}</p>
          </Reveal>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-3">
          <Reveal delay={260}>
            <Link to="/contact" data-testid="home-contact-cta" className="tpa-btn-primary inline-flex items-center justify-between px-6 py-5 text-sm font-bold uppercase tracking-[0.22em]">
              {t.contact.cta} <ArrowRight size={18} />
            </Link>
          </Reveal>
          <div className="text-xs text-[#A7B0BA] space-y-1 mt-2">
            <div>{t.contact.email}</div>
            <div>{t.contact.phone}</div>
            <div>{t.contact.instagram}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div data-testid="page-home">
      <HeroSection />
      <ProofBar />
      <StatsStrip />
      <AboutSection />
      <TPAIntro />
      <BaselineSection />
      <CoachingSection />
      <TournamentSection />
      <PathwaysSection />
      <AustraliaTurkeySection />
      <VideoSection />
      <TenXPhotoStrip />
      <TrustSection />
      <ContactCTA />
    </div>
  );
}
