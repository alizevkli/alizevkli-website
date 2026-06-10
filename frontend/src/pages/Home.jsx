// v5.2
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { PlaceholderBlock } from "../components/PlaceholderBlock";
import { IMAGES, BRAND } from "../constants/images";

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
        <img src={IMAGES.heroCourt} alt="Tennis court overhead" className="w-full h-full object-cover" />
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
              <img src={BRAND.socialCardA} alt="Baseline Vision device and app screenshots" className="w-full h-full object-cover object-center" data-testid="baseline-device-photo" />
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
            <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden border border-[#F8FAFC]/10">
              <img src={BRAND.socialCardB} alt="Ali Zevkli coaching on court" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" data-testid="coaching-photo" />
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

const PathwaysSection = () => {
  const { t } = useLanguage();
  return (
    <section data-testid="section-pathways" className="relative py-24 md:py-32 px-5 md:px-10 border-t border-[#F8FAFC]/10 overflow-hidden">
      <img src={IMAGES.silhouette} alt="" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20" />
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
  const cards = lang === "tr"
    ? [
        {
          tag: "🇦🇺 AU",
          title: "Avustralya",
          items: ["Perth ve Melbourne'da Antrenörlük", "Oyuncu Gelişim Deneyimi", "Turnuva Yönetimi", "Performans Analizi", "ANZAC — Ortak Tarih, Ortak Bağ"],
        },
        {
          tag: "🇹🇷 TR",
          title: "Türkiye",
          items: ["TTF Yetkili Antrenör", "İstanbul & Ankara", "Kulüp ve Akademi Desteği", "Oyuncu Gelişim Yolları", "2026'da Başlıyor"],
        },
        {
          tag: "INTL",
          title: "Uluslararası",
          items: ["İngilizce Tenis Dersleri", "Avustralya Danışmanlık", "Vize Yönlendirmesi", "Dünya Genelinde"],
        },
      ]
    : [
        {
          tag: "🇦🇺 AU",
          title: "Australia",
          items: ["Perth & Melbourne Coaching", "Player Development", "Tournament Direction", "Performance Analysis", "ANZAC — A shared history, a genuine connection"],
        },
        {
          tag: "🇹🇷 TR",
          title: "Türkiye",
          items: ["TTF Qualified Coach", "Istanbul & Ankara", "Club & Academy Consulting", "Player Pathways", "Coming 2026"],
        },
        {
          tag: "INTL",
          title: "International",
          items: ["Tennis in English", "Australia Consulting", "Visa Referrals", "Available Worldwide Now"],
        },
      ];

  return (
    <section data-testid="section-australia-turkiye" className="relative py-24 md:py-32 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#06141F]">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#B7FF00] mb-4">Australia ↔ Türkiye</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-anton uppercase text-5xl md:text-7xl text-white leading-[0.95]">International Tennis Pathway</h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 max-w-4xl text-[#A7B0BA] text-base md:text-lg leading-relaxed">
            Tennis Pro Analysis bridges two countries with a deep and genuine connection — Australia and Türkiye share a bond that goes beyond sport, from the shores of Gallipoli to the tennis courts of Istanbul and Perth. For players, families, clubs and coaches on either side, TPA is the bridge.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <div className="tpa-card p-7 md:p-9 h-full">
                <div className="inline-flex items-center justify-center px-4 py-2 border border-[#B7FF00]/40 text-[#B7FF00] text-xs font-bold tracking-[0.24em] uppercase mb-6">
                  {card.tag}
                </div>
                <h3 className="font-anton uppercase text-3xl md:text-4xl text-white mb-5">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-[#B7FF00] shrink-0" />
                      {item}
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

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section data-testid="section-about" className="relative py-24 md:py-32 px-5 md:px-10 border-t border-[#F8FAFC]/10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        <Reveal>
          <div className="lg:col-span-5 relative aspect-[3/4] overflow-hidden border border-[#F8FAFC]/10">
            <img src={BRAND.founder} alt="Ali Zevkli — Founder of Tennis Pro Analysis" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" data-testid="founder-photo" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06141F]/85 via-[#06141F]/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00]">Founder</div>
                <div className="font-anton uppercase text-3xl text-white mt-1">Ali Zevkli</div>
              </div>
              <span className="w-2 h-2 bg-[#B7FF00]" />
            </div>
          </div>
        </Reveal>
        <div className="lg:col-span-7 flex flex-col">
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

const TrustSection = () => {
  const partners = [
    { name: "Marmara University", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Marmara_University_logo.svg/512px-Marmara_University_logo.svg.png", label: "Sports Science Degree" },
    { name: "ATPCA", image: BRAND.logos?.atpca, label: "Coach Certification" },
    { name: "TTF", image: BRAND.logos?.ttf, label: "TTF Background" },
    { name: "UTR Sports", image: BRAND.logos?.utr, label: "Tournament Experience" },
    { name: "Baseline Vision", image: BRAND.logos?.baselineVision, label: "Analysis Technology" },
    { name: "TenX", image: BRAND.logos?.tenx, label: "Sponsor" },
    { name: "Tennis Pro Analysis", image: BRAND.logos?.tpa || BRAND.logoSquare, label: "Founder Brand" },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 60}>
              <div className="h-full min-h-[150px] border border-[#F8FAFC]/10 bg-[#0B1F33]/60 p-4 flex flex-col items-center justify-between text-center hover:border-[#B7FF00]/50 transition-colors">
                <div className="h-16 w-full flex items-center justify-center mb-4">
                  {partner.image ? (
                    <img src={partner.image} alt={`${partner.name} logo`} className="max-h-14 max-w-[120px] object-contain" />
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
      <TrustSection />
      <ContactCTA />
    </div>
  );
}
