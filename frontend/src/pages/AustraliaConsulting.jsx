import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SOCIAL } from "../constants/images";

export default function AustraliaConsulting() {
  const { t } = useLanguage();
  const p = t.consulting;

  return (
    <div data-testid="page-consulting">
      <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

      {/* Disclaimer banner */}
      <section className="px-5 md:px-10 py-5 bg-[#0B1F33]/60 border-y border-[#1FA463]/30">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#1FA463] text-white shrink-0">
            {p.disclaimerLabel}
          </span>
          <p className="text-sm text-[#A7B0BA]">{p.disclaimer}</p>
        </div>
      </section>

      {/* Service blocks */}
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {p.blocks.map((b, i) => (
              <Reveal key={b.k} delay={i * 80}>
                <div className="tpa-card p-8 md:p-10 h-full flex flex-col">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-anton uppercase text-2xl md:text-3xl text-white mb-4 leading-tight">
                    {b.k}
                  </h3>
                  <p className="text-[#A7B0BA] leading-relaxed flex-grow">{b.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Background / credibility strip */}
      <section className="py-16 px-5 md:px-10 bg-[#0B1F33]/40 border-y border-[#F8FAFC]/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-6 flex items-center gap-3">
                <span className="inline-block w-6 h-px bg-[#B7FF00]" />
                {p.bgTitle}
              </div>
              <ul className="space-y-3">
                {p.background.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="text-[#B7FF00] mt-1 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="border border-[#F8FAFC]/10 p-8 bg-[#06141F]/60">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-4">
                {p.ctaBoxTitle}
              </div>
              <p className="text-[#A7B0BA] text-sm leading-relaxed">{p.ctaBoxText}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={SOCIAL.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.22em]"
                >
                  {p.cta} <ArrowRight size={15} />
                </a>
                <Link
                  to="/pathways"
                  className="inline-flex items-center justify-center gap-2 border border-[#F8FAFC]/20 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.22em] text-white hover:border-[#B7FF00]/50 transition-colors"
                >
                  {p.ctaSecondary} <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
