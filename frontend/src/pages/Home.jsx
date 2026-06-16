import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { IMAGES, LOGOS } from "../constants/images";

/* ─── Hero ─────────────────────────────────────────────────────────────── */
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

  const secondaryTo = t.hero.ctaSecondaryHref || "/baseline-vision";

  return (
    <section data-testid="hero" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0) scale(1.06)`, transition: "transform 0.25s ease-out" }}
      >
        <img loading="lazy" src={IMAGES.heroCourt} alt="Tennis court overhead" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,18,32,0.60)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06141F]/90 via-[#06141F]/50 to-[#06141F]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06141F]/95 via-[#06141F]/60 to-transparent" />

      <div className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.5em] text-[#A7B0BA]">
        {t.hero.sidebar}
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 pt-32 pb-16 md:pb-24 w-full">
        <div className="max-w-3xl">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-[#B7FF00] mb-5">
              {t.hero.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 data-testid="hero-title" className="font-anton uppercase text-white leading-[0.92] tracking-tight text-4xl md:text-5xl lg:text-6xl mb-6">
              {t.hero.titleLine1}<br />
              {t.hero.titleLine2}<span className="text-[#B7FF00]">.</span><br />
              {t.hero.titleLine3}<span className="text-[#B7FF00]">.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p data-testid="hero-subtitle" className="text-base md:text-lg text-white/90 leading-relaxed mb-4">
              {t.hero.subtitle}
            </p>
          </Reveal>
          {t.hero.disclaimer && (
            <Reveal delay={210}>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                {t.hero.disclaimer}
              </p>
            </Reveal>
          )}
          <Reveal delay={270}>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {t.hero.ctaPrimaryHref ? (
                <a href={t.hero.ctaPrimaryHref} target="_blank" rel="noopener noreferrer" data-testid="hero-cta-primary"
                  className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]">
                  {t.hero.ctaPrimary}<ArrowRight size={16} />
                </a>
              ) : (
                <Link to="/contact" data-testid="hero-cta-primary"
                  className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]">
                  {t.hero.ctaPrimary}<ArrowRight size={16} />
                </Link>
              )}
              <Link to={secondaryTo} data-testid="hero-cta-secondary"
                className="tpa-btn-secondary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]">
                {t.hero.ctaSecondary}<ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
          {t.hero.trustBadges && (
            <Reveal delay={330}>
              <div className="flex flex-wrap gap-2 mt-6">
                {t.hero.trustBadges.map((badge) => (
                  <span key={badge} className="text-xs border border-lime-400/40 text-[#A7B0BA] px-3 py-1 rounded-full bg-[#06141F]/60">
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>
          )}
        </div>

        {/* Logo strip */}
        <Reveal delay={480}>
          <div className="mt-12 md:mt-16 flex flex-wrap justify-start items-center gap-8 md:gap-12">
            {[
              { src: "/images/logos/marmara-logo.png", alt: "Marmara University", invert: false },
              { src: LOGOS.ttf, alt: "TTF", invert: false },
              { src: LOGOS.atpca, alt: "ATPCA", invert: true },
              { src: "/images/logos/tennis-australia-logo-white.svg", alt: "Tennis Australia", invert: false },
              { src: LOGOS.utr, alt: "UTR Sports", invert: true },
              { src: LOGOS.baselineVision, alt: "Baseline Vision", invert: true },
            ].map((logo) => (
              <img loading="lazy" key={logo.alt} src={logo.src} alt={logo.alt}
                className={`h-8 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity ${logo.invert ? "brightness-0 invert" : ""}`} />
            ))}
            <img loading="lazy" src={LOGOS.tenx} alt="TenX" className="h-7 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─── Proof bar ─────────────────────────────────────────────────────────── */
const ProofBar = () => {
  const { t } = useLanguage();
  const items = [...t.proof.items, ...t.proof.items];
  return (
    <section data-testid="proof-bar" className="relative border-y border-[#F8FAFC]/10 bg-[#06141F] overflow-hidden w-full">
      <div className="w-full py-5 flex items-center gap-6 overflow-hidden">
        <span className="hidden md:inline-flex shrink-0 text-[10px] uppercase tracking-[0.34em] text-[#B7FF00] pl-5 md:pl-10">{t.proof.title} —</span>
        <div className="overflow-hidden flex-1 min-w-0">
          <div className="tpa-ticker gap-10" style={{ whiteSpace: "nowrap" }}>
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

/* ─── Main product block ─────────────────────────────────────────────────── */
const MainProductBlock = () => {
  const { t } = useLanguage();
  const h = t.home;
  return (
    <section className="bg-[#0d1b2a] py-16 border-t border-[#F8FAFC]/10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-widest text-[#B7FF00] mb-4">
                {h.productEyebrow}
              </div>
              <h2 className="font-anton uppercase text-3xl md:text-4xl lg:text-5xl text-white leading-[0.93] mb-6">
                {h.productTitle}
              </h2>
              <p className="text-[#A7B0BA] leading-relaxed mb-8">
                {h.productText}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {h.productChips.map((chip) => (
                  <span key={chip} className="text-sm border border-lime-400/40 text-[#A7B0BA] px-3 py-1 rounded-full bg-[#06141F]/60 hover:border-lime-400/70 transition-colors">
                    {chip}
                  </span>
                ))}
              </div>
              <Link to="/ornek-rapor" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#B7FF00]">
                {h.productCardCta}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ─── "Ne Yapar?" 4-card 2×2 grid ──────────────────────────────────────── */
const TeaserCardsSection = () => {
  const { t } = useLanguage();
  const h = t.home;
  return (
    <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-10 leading-tight">
            {h.teasersTitle}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {h.teasers.map((card, i) => (
            <Reveal key={card.title} delay={i * 70}>
              <Link
                to={card.link}
                className="tpa-card p-7 md:p-9 h-full flex flex-col hover:border-[#B7FF00]/40 transition-colors group"
              >
                <h3 className="font-anton uppercase text-2xl md:text-3xl text-white mb-3 group-hover:text-[#B7FF00] transition-colors">{card.title}</h3>
                <p className="text-sm text-[#A7B0BA] leading-relaxed flex-grow">{card.text}</p>
                <div className="mt-5 pt-4 border-t border-[#F8FAFC]/10 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B7FF00]">
                  <ArrowRight size={14} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={320}>
          <div className="mt-8">
            <Link to={h.teasersSeeAllLink} className="text-sm font-bold text-[#B7FF00] hover:underline underline-offset-4">
              {h.teasersSeeAll}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─── Sample report preview section ─────────────────────────────────────── */
const ReportPreviewSection = () => {
  const { t } = useLanguage();
  const h = t.home;
  return (
    <section className="py-16 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/30">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-10 leading-tight">
            {h.reportPreviewTitle}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {h.reportPreviewCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80}>
              <div className="bg-[#06141F] border border-[#F8FAFC]/10 p-6 rounded-2xl h-full hover:border-[#B7FF00]/30 transition-colors">
                <h3 className="font-anton uppercase text-xl text-white mb-2">{card.title}</h3>
                <p className="text-sm text-[#A7B0BA] leading-relaxed">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={280}>
          <Link to="/ornek-rapor" className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]">
            {h.reportPreviewCta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

/* ─── Baseline Vision teaser — glassmorphism ─────────────────────────────── */
const BaselineTeaser = () => {
  const { t } = useLanguage();
  const h = t.home;
  return (
    <section className="py-16 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT — text */}
            <Reveal>
              <div>
                <h2 className="font-anton uppercase text-3xl md:text-4xl lg:text-5xl text-white leading-[0.93] mb-6">
                  {h.bvTitle}
                </h2>
                <p className="text-[#A7B0BA] leading-relaxed mb-8">
                  {h.bvText}
                </p>
                {h.bvFeatureChips && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {h.bvFeatureChips.map((chip) => (
                      <span key={chip} className="text-xs border border-lime-400/40 text-[#A7B0BA] px-3 py-1 rounded-full bg-[#06141F]/60">
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
                <Link to="/baseline-vision" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#B7FF00] hover:gap-3 transition-all">
                  {h.bvCta} <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>

            {/* RIGHT — overlapping screenshots */}
            <Reveal delay={150}>
              <div className="relative flex justify-center items-center min-h-[280px] md:min-h-[340px]">
                <div className="absolute inset-0 bg-lime-400/5 rounded-3xl blur-3xl pointer-events-none" />
                <div className="w-44 rounded-2xl shadow-2xl border border-white/10 opacity-80 absolute -right-4 top-8 z-0 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-14 bg-[#0A1220] z-10 rounded-t-2xl pointer-events-none" />
                  <img
                    src="/images/baseline/baseline-serve-stats.png"
                    alt="Baseline Vision serve statistics"
                    className="w-full rounded-2xl"
                    loading="lazy"
                  />
                </div>
                <div className="w-56 rounded-2xl shadow-2xl border border-white/10 z-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-14 bg-[#0A1220] z-10 rounded-t-2xl pointer-events-none" />
                  <img
                    src="/images/baseline/baseline-ground-strokes.png"
                    alt="Baseline Vision ground stroke analysis"
                    className="w-full rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── TenX photo strip ───────────────────────────────────────────────────── */
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
        <img key={photo.src} loading="lazy" src={photo.src} alt={photo.alt} className="h-48 w-auto object-cover rounded" />
      ))}
    </div>
  </section>
);

/* ─── Contact CTA ────────────────────────────────────────────────────────── */
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

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div data-testid="page-home">
      <HeroSection />
      <ProofBar />
      <MainProductBlock />
      <TeaserCardsSection />
      <ReportPreviewSection />
      <BaselineTeaser />
      <TenXPhotoStrip />
      <ContactCTA />
    </div>
  );
}
