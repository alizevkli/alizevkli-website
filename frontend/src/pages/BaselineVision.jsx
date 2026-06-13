import { ArrowRight, ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { IMAGES } from "../constants/images";
import { SOCIAL } from "../constants/images";

const SCREENSHOTS = [
  { src: "/images/baseline/baseline-app-home.png",        captionTR: "Antrenman ve Maç Modları",          captionEN: "Training & Match Modes" },
  { src: "/images/baseline/baseline-match-stats.png",     captionTR: "Maç İstatistikleri",                captionEN: "Match Statistics" },
  { src: "/images/baseline/baseline-ground-strokes.png",  captionTR: "Vuruş Analizi & Top Yerleşimi",     captionEN: "Stroke Analysis & Ball Placement" },
  { src: "/images/baseline/baseline-return-stats.png",    captionTR: "Dönüş Analizi",                     captionEN: "Return Analysis" },
  { src: "/images/baseline/baseline-serve-stats.png",     captionTR: "Servis Hızı & Yerleşimi",           captionEN: "Serve Speed & Placement" },
];

const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#F8FAFC]/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-5 text-left group"
      >
        <div className="flex items-start gap-4">
          <span className="font-anton text-[#B7FF00] text-sm shrink-0 mt-0.5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`text-sm md:text-base font-medium transition-colors ${open ? "text-white" : "text-white/85 group-hover:text-white"}`}>
            {q}
          </span>
        </div>
        <span className="shrink-0 mt-0.5 text-[#B7FF00]">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {open && (
        <div className="pb-5 pl-9 pr-4">
          <p className="text-[#A7B0BA] leading-relaxed text-sm">{a}</p>
        </div>
      )}
    </div>
  );
};

const ScreenshotsCarousel = () => {
  const { lang } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const resumeTimer = useRef(null);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % SCREENSHOTS.length), 4000);
    return () => clearInterval(timer);
  }, [paused]);

  const scheduleResume = () => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), 2000);
  };

  const prev = () => {
    setCurrent((c) => (c - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
    setPaused(true);
    scheduleResume();
  };

  const next = () => {
    setCurrent((c) => (c + 1) % SCREENSHOTS.length);
    setPaused(true);
    scheduleResume();
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); }
    touchStartX.current = null;
    scheduleResume();
  };

  const slide = SCREENSHOTS[current];
  const caption = lang === "tr" ? slide.captionTR : slide.captionEN;

  return (
    <div
      className="relative max-w-sm mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        onClick={prev}
        aria-label="Previous"
        className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center border border-[#F8FAFC]/20 text-white hover:border-[#B7FF00]/50 hover:text-[#B7FF00] transition-colors z-10"
      >
        <ChevronLeft size={20} />
      </button>

      <img
        key={slide.src}
        src={slide.src}
        alt={caption}
        className="w-full object-contain rounded-2xl"
      />

      <p className="text-sm text-gray-400 text-center mt-3">{caption}</p>

      <div className="flex justify-center gap-2 mt-4">
        {SCREENSHOTS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setPaused(true); scheduleResume(); }}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-[#B7FF00]" : "bg-[#F8FAFC]/30"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <button
        onClick={next}
        aria-label="Next"
        className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center border border-[#F8FAFC]/20 text-white hover:border-[#B7FF00]/50 hover:text-[#B7FF00] transition-colors z-10"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default function BaselineVision() {
  const { t, lang } = useLanguage();

  return (
    <div data-testid="page-baseline">

      {/* 1. Hero */}
      <PageHero
        eyebrow={t.baseline.eyebrow}
        title={t.baseline.title}
        lead={t.baseline.lead}
        image={IMAGES.heroCourt}
      />

      {/* 2. Positioning text */}
      <section className="py-16 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <p className="text-base md:text-lg text-[#A7B0BA] leading-relaxed">
              {t.baseline.positioningText}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. What is Baseline Vision */}
      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div>
              <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-5 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-[#B7FF00]" />
                {t.baseline.deviceEyebrow}
              </div>
              <h2 className="font-anton uppercase text-3xl md:text-4xl lg:text-5xl text-white leading-[0.95] mb-6">
                {t.baseline.deviceTitle}
              </h2>
              <p className="text-[#A7B0BA] leading-relaxed">
                {t.baseline.deviceLead}
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="border border-[#B7FF00]/20 bg-[#0B1F33]/40 p-7 md:p-9">
              <div className="w-6 h-px bg-[#B7FF00] mb-5" />
              <p className="text-white/85 leading-relaxed text-sm md:text-base italic">
                {t.baseline.credibility}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Features — 6 cards 2×3 */}
      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              {t.baseline.eyebrow}
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-10 leading-tight">
              {lang === "tr" ? "Neler Takip Edilir?" : "What Gets Tracked?"}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.baseline.grid.slice(0, 6).map((g, i) => (
              <Reveal key={g.label} delay={i * 60}>
                <div className="border border-[#F8FAFC]/10 bg-[#06141F] p-7 md:p-9 h-full hover:border-[#B7FF00]/30 transition-colors">
                  <div className="font-anton uppercase text-2xl md:text-3xl text-white mb-3">
                    {g.label}
                  </div>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed">{g.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How Does It Work? */}
      <section id="how-it-works" className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              {t.baseline.eyebrow}
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-10 leading-tight">
              {t.baseline.howTitle}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.baseline.howSteps.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border border-[#F8FAFC]/10 bg-[#06141F] p-7 h-full hover:border-[#B7FF00]/30 transition-colors">
                  <div className="font-anton text-[#B7FF00] text-4xl mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-anton uppercase text-xl text-white mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Screenshots carousel */}
      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              {t.baseline.screenshotEyebrow}
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-3 leading-tight">
              {t.baseline.screenshotTitle}
            </h2>
            <p className="text-[#A7B0BA] max-w-2xl mb-14">
              {t.baseline.screenshotLead}
            </p>
          </Reveal>
          <ScreenshotsCarousel />
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/30">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-[#B7FF00]" />
              {t.baselineFaq.eyebrow}
            </div>
            <h2 className="font-anton uppercase text-4xl md:text-5xl text-white mb-10">
              {t.baselineFaq.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-t border-[#F8FAFC]/10">
              {t.baselineFaq.faqs.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Contact CTA */}
      <section className="py-20 md:py-24 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#06141F]">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-4">
              {t.baselineFaq.eyebrow}
            </div>
            <h2 className="font-anton uppercase text-4xl md:text-5xl text-white mb-4">
              {t.baselineFaq.ctaBoxTitle}
            </h2>
            <p className="text-[#A7B0BA] max-w-xl mx-auto mb-10">
              {t.baselineFaq.ctaBoxText}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={SOCIAL.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="baseline-cta"
                className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
              >
                {t.baseline.ctaPrimary} <ArrowRight size={16} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-[#F8FAFC]/20 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white hover:border-[#B7FF00]/50 transition-colors"
              >
                {t.baseline.howTitle} <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
