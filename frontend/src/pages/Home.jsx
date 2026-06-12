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
    <section data-testid="hero" className="relative min-h-[600px] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0) scale(1.06)`,
          transition: "transform 0.25s ease-out",
        }}
      >
        <img loading="lazy" src={IMAGES.heroCourt} alt="Tennis court overhead" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,18,32,0.40)" }} />
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
              <h1 data-testid="hero-title" className="font-anton uppercase text-white leading-[0.92] tracking-tight text-4xl md:text-5xl lg:text-6xl">
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
            {t.hero.ctaPrimaryHref ? (
              <a href={t.hero.ctaPrimaryHref} target="_blank" rel="noopener noreferrer" data-testid="hero-cta-primary" className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]">
                {t.hero.ctaPrimary}<ArrowRight size={16} />
              </a>
            ) : (
              <Link to="/contact" data-testid="hero-cta-primary" className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]">
                {t.hero.ctaPrimary}<ArrowRight size={16} />
              </Link>
            )}
            <Link to="/baseline-vision" data-testid="hero-cta-secondary" className="tpa-btn-secondary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]">
              {t.hero.ctaSecondary}<ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={520}>
          <div className="mt-10 md:mt-12 flex flex-wrap justify-start items-center gap-10 md:gap-12">
            {[
              { src: "/images/logos/marmara-logo.png", alt: "Marmara University", invert: false },
              { src: LOGOS.ttf, alt: "TTF", invert: false },
              { src: LOGOS.atpca, alt: "ATPCA", invert: true },
              { src: "/images/logos/tennis-australia-logo-white.svg", alt: "Tennis Australia", invert: false },
              { src: LOGOS.utr, alt: "UTR Sports", invert: true },
              { src: LOGOS.baselineVision, alt: "Baseline Vision", invert: true },
            ].map((logo) => (
              <img loading="lazy" key={logo.alt} src={logo.src} alt={logo.alt}
                className={`h-10 w-auto object-contain mx-auto opacity-85 hover:opacity-100 transition-opacity ${logo.invert ? "brightness-0 invert" : ""}`} />
            ))}
            <span className="inline-flex items-center bg-white rounded-md px-3 py-1.5 opacity-85 hover:opacity-100 transition-opacity">
              <img loading="lazy" src={LOGOS.tenx} alt="TenX" className="h-7 w-auto object-contain" />
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const TenXPhotoStrip = () => (
  <section className="overflow-x-auto border-b border-[#F8FAFC]/10 bg-[#06141F]">
    <div className="flex gap-3 px-5 md:px-10 py-4 w-max">
      {[
        { src: "/images/tenx2/ken-rosewall-arena.jpg", alt: "Ken Rosewall Arena — UTR Pro Series Sydney" },
        { src: "/images/tenx2/ken-rosewall-overview.jpg", alt: "Ken Rosewall Arena overview" },
        { src: "/images/tenx2/net-handshake-stadium.jpg", alt: "Net handshake — stadium court" },
        { src: "/images/tenx2/night-court-forehand.jpg", alt: "Night court forehand — UTR Pro Series" },
        { src: "/images/tenx2/player-at-stadium.jpg", alt: "Player at stadium — UTR Pro Series Sydney" },
        { src: "/images/tenx2/serve-prep-stadium.jpg", alt: "Serve prep — Ken Rosewall Arena" },
        { src: "/images/tenx2/stadium-doubles.jpg", alt: "Stadium doubles — UTR Pro Series Sydney" },
        { src: "/images/tenx2/sydney-series-forehand.jpg", alt: "Sydney Series forehand" },
        { src: "/images/tenx2/utr-night-serve-2.jpg", alt: "UTR Pro Series — night serve" },
      ].map((photo) => (
        <img
          key={photo.src}
          loading="lazy"
          src={photo.src}
          alt={photo.alt}
          className="h-48 w-auto object-cover rounded"
        />
      ))}
    </div>
  </section>
);

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

const BASELINE_PROMO_IMAGES = [
  "/images/baseline/baseline-promo-1.png",
  "/images/baseline/baseline-promo-2.png",
  "/images/baseline/baseline-promo-3.png",
  "/images/baseline/baseline-promo-4.png",
  "/images/baseline/baseline-promo-5.png",
];

const BaselineCarousel = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % BASELINE_PROMO_IMAGES.length), 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full">
      <div className="rounded-xl overflow-hidden w-full bg-[#0B1F33]">
        {BASELINE_PROMO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Baseline Vision promo ${i + 1}`}
            className={`w-full object-contain transition-opacity duration-700 ${i === current ? "block opacity-100" : "hidden opacity-0"}`}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {BASELINE_PROMO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === current ? "bg-[#B7FF00]" : "bg-[#F8FAFC]/30"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
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
            <div className="lg:col-span-7">
              <BaselineCarousel />
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
        <div className="mb-14">
          <SectionHeader eyebrow={t.coaching.eyebrow} title={t.coaching.title} lead={t.coaching.lead} />
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
        { val: "20+", label: "🎾 YIL KOÇLUK DENEYİMİ" },
        { val: "2", label: "🇦🇺 🇹🇷 AVUSTRALYA & TÜRKİYE" },
        { val: "500+", label: "⚡ OYUNCU GELİŞTİRİLDİ" },
        { val: "3", label: "🌍 ITF · UTR · TTF SİSTEMLERİ" },
      ]
    : [
        { val: "20+", label: "Years Coaching" },
        { val: "2", label: "Countries — Australia & Türkiye" },
        { val: "500+", label: "Players Developed" },
        { val: "3", label: "International Systems — ITF · UTR · TTF" },
      ];

  return (
    <section className="border-y border-[#F8FAFC]/10 bg-[#0B1F33]/60 py-10 px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center py-8 px-4">
            <span className="font-black uppercase text-5xl text-white tracking-tight break-words">{s.val}</span>
            <span className="mt-1.5 text-xs uppercase tracking-widest text-[#A7B0BA]">{s.label}</span>
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
                {b.icon && <span className="block mb-2 text-lg">{b.icon}</span>}
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
          <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} lead={t.about.lead} />
          <Reveal delay={140}>
            <div className="mt-6 text-[11px] uppercase tracking-[0.3em] text-[#B7FF00]">{t.about.role}</div>
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
                {t.about.ctaProfile} <ArrowRight size={14} />
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
        <SectionHeader eyebrow={t.video.eyebrow} title={t.video.title} lead={t.video.lead} />
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
  const { t } = useLanguage();
  const partners = [
    { name: "Marmara University", image: LOGOS.marmara },
    { name: "ATPCA", image: LOGOS.atpca },
    { name: "TTF", image: LOGOS.ttf },
    { name: "UTR Sports", image: LOGOS.utr },
    { name: "Baseline Vision", image: LOGOS.baselineVision },
    { name: "TenX", image: LOGOS.tenx },
    { name: "Tennis Pro Analysis", image: LOGOS.tpa || BRAND.logoSquare },
  ];

  return (
    <section data-testid="section-trust" className="relative border-t border-[#F8FAFC]/10 py-14 md:py-20 px-5 md:px-10 bg-[#06141F]">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="text-center mb-10">
            <div className="text-[10px] uppercase tracking-[0.34em] text-[#B7FF00] mb-3">{t.trust.eyebrow}</div>
            <h3 className="font-anton uppercase text-3xl md:text-4xl text-white">{t.trust.title}</h3>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-[1400px] mx-auto">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 60}>
              <div className="h-full min-h-[150px] border border-[#F8FAFC]/10 bg-[#0B1F33]/60 p-4 flex flex-col items-center justify-between text-center hover:border-[#B7FF00]/50 transition-colors">
                <div className="h-16 w-full flex items-center justify-center mb-4">
                  {partner.image ? (
                    <img loading="lazy" src={partner.image} alt={`${partner.name} logo`} className="max-h-14 max-w-[120px] object-contain brightness-0 invert" />
                  ) : (
                    <span className="font-anton uppercase text-2xl text-white">{partner.name}</span>
                  )}
                </div>
                <div>
                  <div className="font-bold text-xs uppercase tracking-[0.18em] text-white">{partner.name}</div>
                  <p className="mt-2 text-[11px] leading-relaxed text-[#A7B0BA]">{t.trust.labels[i]}</p>
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
      <TenXPhotoStrip />
      <ProofBar />
      <StatsStrip />
      <AboutSection />
      <TPAIntro />
      <BaselineSection />
      <CoachingSection />
      <TournamentSection />
      <PathwaysSection />
      <VideoSection />
      <ContactCTA />
    </div>
  );
}
