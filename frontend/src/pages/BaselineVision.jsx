import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { IMAGES, BASELINE_SCREENSHOTS } from "../constants/images";
import { SOCIAL } from "../constants/images";

const VIDEO_SRCS = [
  "https://drive.google.com/file/d/1HFPsD2YlrA2RA1L4TRvDYmLLaJ1DQEr1/preview",
  "https://drive.google.com/file/d/1HIpvLWeZXVMUp3VrabOayl7zbGYeIQW-/preview",
];


const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#F8FAFC]/10">
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-start justify-between gap-6 py-5 text-left group">
        <div className="flex items-start gap-4">
          <span className="font-anton text-[#B7FF00] text-sm shrink-0 mt-0.5">{String(index + 1).padStart(2, "0")}</span>
          <span className={`text-sm md:text-base font-medium transition-colors ${open ? "text-white" : "text-white/85 group-hover:text-white"}`}>{q}</span>
        </div>
        <span className="shrink-0 mt-0.5 text-[#B7FF00]">{open ? <Minus size={16} /> : <Plus size={16} />}</span>
      </button>
      {open && <div className="pb-5 pl-9 pr-4"><p className="text-[#A7B0BA] leading-relaxed text-sm">{a}</p></div>}
    </div>
  );
};

export default function BaselineVision() {
  const { t, lang } = useLanguage();
  return (
    <div data-testid="page-baseline">
      <PageHero
        eyebrow={t.baseline.eyebrow}
        title={t.baseline.title}
        lead={t.baseline.lead}
        image={IMAGES.heroCourt}
      />

      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F8FAFC]/10 border border-[#F8FAFC]/10">
            {t.baseline.grid.map((g, i) => (
              <Reveal key={g.label} delay={i * 50}>
                <div className="bg-[#06141F] p-6 md:p-8 h-full group hover:bg-[#0B1F33] transition-colors">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00]">
                      KPI · {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-1.5 h-1.5 bg-[#1FA463] group-hover:bg-[#B7FF00] transition-colors" />
                  </div>
                  <div className="font-anton uppercase text-2xl text-white mb-3">
                    {g.label}
                  </div>
                  <p className="text-xs text-[#A7B0BA] leading-relaxed">{g.desc}</p>
                  <div className="mt-6 h-1 bg-[#F8FAFC]/5 overflow-hidden">
                    <div
                      className="h-full bg-[#B7FF00]"
                      style={{ width: `${45 + (i * 7) % 50}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#06141F]">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-5">
              {t.baseline.videoEyebrow}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-anton uppercase text-4xl md:text-6xl text-white leading-[0.95] max-w-4xl">
              {t.baseline.videoTitle}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[#A7B0BA] max-w-2xl">
              {t.baseline.videoLead}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {t.baseline.videos.map((video, i) => (
              <Reveal key={video.title} delay={i * 120}>
                <article className="bg-[#0B1F33] border border-[#F8FAFC]/10 overflow-hidden">
                  <div className="aspect-video bg-black">
                    <iframe
                      src={VIDEO_SRCS[i]}
                      title={video.title}
                      className="w-full h-full"
                      allow="autoplay"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="font-anton uppercase text-2xl md:text-3xl text-white">
                      {video.title}
                    </h3>
                    <p className="mt-4 text-sm text-[#A7B0BA] leading-relaxed">
                      {video.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-5">
                {t.baseline.reportEyebrow}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-anton uppercase text-4xl md:text-5xl text-white leading-[0.95]">
                {t.baseline.reportTitle}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-[#A7B0BA] max-w-xl">
                {t.baseline.reportLead}
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="lg:col-span-5 relative aspect-square overflow-hidden border border-[#F8FAFC]/10">
              <img
                src={IMAGES.baselineHero}
                alt="Player silhouette"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06141F] via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="max-w-[1400px] mx-auto mt-12">
          {t.hero.ctaPrimaryHref ? (
            <a
              href={t.hero.ctaPrimaryHref}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="baseline-cta"
              className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
            >
              {t.hero.ctaPrimary} <ArrowRight size={16} />
            </a>
          ) : (
            <Link
              to="/contact"
              data-testid="baseline-cta"
              className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
            >
              {t.hero.ctaPrimary} <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </section>
      {/* Baseline Vision Screenshots */}
      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-[#B7FF00]" />
              {t.baseline.screenshotEyebrow}
            </div>
            <h2 className="font-anton uppercase text-4xl md:text-5xl text-white mb-3">
              {t.baseline.screenshotTitle}
            </h2>
            <p className="text-[#A7B0BA] max-w-2xl mb-12">
              {t.baseline.screenshotLead}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BASELINE_SCREENSHOTS.map((s, i) => (
              <Reveal key={s.src} delay={i * 80}>
                <div className="group border border-[#F8FAFC]/10 overflow-hidden hover:border-[#B7FF00]/40 transition-colors">
                  <div className="aspect-square overflow-hidden bg-[#0B1F33]">
                    <img
                      loading="lazy"
                      src={s.src}
                      alt={s.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-4 py-3 border-t border-[#F8FAFC]/10">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-[#B7FF00] font-medium">
                      {lang === "tr" ? s.titleTR : s.title}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/30">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-[#B7FF00]" />{t.baselineFaq.eyebrow}
            </div>
            <h2 className="font-anton uppercase text-4xl md:text-5xl text-white mb-10">{t.baselineFaq.title}</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-t border-[#F8FAFC]/10">
              {t.baselineFaq.faqs.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10">
              <a href={SOCIAL.whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="tpa-btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.22em]">
                {t.baselineFaq.cta} <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
