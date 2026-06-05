import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { IMAGES } from "../constants/images";

export default function BaselineVision() {
  const { t } = useLanguage();
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

      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-5">
                Output
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-anton uppercase text-4xl md:text-5xl text-white leading-[0.95]">
                Every session, a report.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-[#A7B0BA] max-w-xl">
                Players receive a structured progress report after each Baseline Vision
                session — KPI deltas, video timestamps, and the next training block
                priorities.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="lg:col-span-5 relative aspect-square overflow-hidden border border-[#F8FAFC]/10">
              <img
                src={IMAGES.silhouette}
                alt="Player silhouette"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06141F] via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="max-w-[1400px] mx-auto mt-12">
          <Link
            to="/contact"
            data-testid="baseline-cta"
            className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
          >
            {t.hero.ctaSecondary} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
