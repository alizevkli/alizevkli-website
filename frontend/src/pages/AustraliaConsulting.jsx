import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { SOCIAL } from "../constants/images";

export default function AustraliaConsulting() {
  const { t } = useLanguage();
  const p = t.consulting;

  return (
    <div data-testid="page-consulting">

      {/* Hero with inline disclaimer */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 px-5 md:px-10 overflow-hidden bg-[#06141F]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#06141F]/90 to-[#06141F]" />
        <div className="relative max-w-[1400px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              {p.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-white leading-[0.93] max-w-4xl mb-6">
              {p.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base md:text-lg text-[#A7B0BA] leading-relaxed max-w-2xl mb-5">{p.lead}</p>
          </Reveal>
          <Reveal delay={220}>
            <p className="text-xs text-[#A7B0BA]/70 max-w-xl mb-10 leading-relaxed border-l-2 border-[#1FA463] pl-4">
              {p.heroDisclaimer}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <a
              href={SOCIAL.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="consulting-hero-cta"
              className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
            >
              {p.ctaBtn} <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Who is this for — pills */}
      <section className="border-y border-[#F8FAFC]/10 bg-[#0B1F33]/40 py-8 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-4">{p.whoTitle}</div>
          <div className="flex flex-wrap gap-2">
            {p.whoItems.map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-xs uppercase tracking-[0.15em] text-[#A7B0BA] border border-[#F8FAFC]/15"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service blocks — 2-col grid */}
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {p.blocks.map((b, i) => (
              <Reveal key={b.k} delay={i * 70}>
                <div className="border border-[#F8FAFC]/10 bg-[#06141F] p-8 md:p-10 h-full flex flex-col hover:border-[#F8FAFC]/20 transition-colors">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-anton uppercase text-2xl md:text-3xl text-white mb-4 leading-tight">
                    {b.k}
                  </h3>
                  <p className="text-[#A7B0BA] leading-relaxed text-sm flex-grow">{b.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visa warning box */}
      <section className="py-10 px-5 md:px-10 border-y border-[#F8FAFC]/10 bg-[#0B1F33]/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="border border-[#1FA463]/40 bg-[#06141F] p-7 md:p-9">
            <div className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#1FA463] text-white mb-5">
              {p.visaWarningTitle}
            </div>
            <p className="text-sm text-[#A7B0BA] leading-relaxed">{p.visaWarning}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#06141F]">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-4">{p.eyebrow}</div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-8 leading-tight">
              {p.ctaTitle}
            </h2>
            <a
              href={SOCIAL.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="consulting-cta"
              className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
            >
              {p.ctaBtn} <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
