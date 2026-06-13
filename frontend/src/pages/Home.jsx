import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { IMAGES, LOGOS } from "../constants/images";

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
        {t.hero.sidebar}
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
          <div className="lg:col-span-3 lg:pb-6 flex flex-col gap-4">
            <Reveal delay={240}>
              <p data-testid="hero-subtitle" className="text-base md:text-lg text-white/90 leading-relaxed">{t.hero.subtitle}</p>
            </Reveal>
            {t.hero.disclaimer && (
              <Reveal delay={300}>
                <p className="text-xs text-[#A7B0BA] leading-relaxed">{t.hero.disclaimer}</p>
              </Reveal>
            )}
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
            <Link to={secondaryTo} data-testid="hero-cta-secondary" className="tpa-btn-secondary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]">
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
            <img loading="lazy" src={LOGOS.tenx} alt="TenX" className="h-8 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity" />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {h.teasers.map((card, i) => (
            <Reveal key={card.title} delay={i * 80}>
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
        <Reveal delay={280}>
          <div className="mt-8">
            <Link
              to={h.teasersSeeAllLink}
              className="text-sm font-bold text-[#B7FF00] hover:underline underline-offset-4"
            >
              {h.teasersSeeAll}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const BaselineTeaser = () => {
  const { t } = useLanguage();
  const h = t.home;
  return (
    <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-5 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              Baseline Vision
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl lg:text-5xl text-white leading-[0.95] mb-6">
              {h.bvTitle}
            </h2>
            <p className="text-[#A7B0BA] leading-relaxed mb-8">
              {h.bvText}
            </p>
            <Link
              to="/baseline-vision"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-[#B7FF00] hover:gap-3 transition-all"
            >
              {h.bvCta} <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <img
            src="/images/baseline/baseline-ground-strokes.png"
            alt="Baseline Vision ground stroke analysis"
            className="w-full rounded-2xl shadow-lg object-contain"
            loading="lazy"
          />
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
      <TeaserCardsSection />
      <BaselineTeaser />
      <TenXPhotoStrip />
      <ContactCTA />
    </div>
  );
}
