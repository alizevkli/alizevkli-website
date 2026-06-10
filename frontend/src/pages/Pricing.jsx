import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SOCIAL } from "../constants/images";

export default function Pricing() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <div data-testid="page-pricing">
      <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

      {/* Disclaimer */}
      <section className="px-5 md:px-10 py-5 bg-[#0B1F33]/60 border-y border-[#F8FAFC]/10">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A7B0BA]">{p.disclaimer}</p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {p.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80}>
              <div className={`flex flex-col h-full border p-8 md:p-10 relative ${
                tier.featured
                  ? "border-[#B7FF00] bg-[#0B1F33]/80"
                  : "border-[#F8FAFC]/10 bg-[#0B1F33]/30 hover:border-[#F8FAFC]/25 transition-colors"
              }`}>
                {tier.featured && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-[#B7FF00] text-[#0A1220] text-[10px] font-bold uppercase tracking-[0.3em] px-3 py-1">
                      {p.popular}
                    </span>
                  </div>
                )}
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-anton uppercase text-2xl md:text-3xl text-white leading-tight mb-2">
                  {tier.name}
                </h3>
                <p className="text-[#A7B0BA] text-sm mb-6">{tier.desc}</p>

                <div className="mb-8">
                  <div className="flex items-end gap-2">
                    <span className="font-anton text-4xl md:text-5xl text-white">{tier.price}</span>
                    {tier.unit && (
                      <span className="text-[#A7B0BA] text-sm mb-1">{tier.unit}</span>
                    )}
                  </div>
                  {tier.note && (
                    <p className="text-xs text-[#A7B0BA] mt-1">{tier.note}</p>
                  )}
                </div>

                <ul className="space-y-3 flex-grow mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/85">
                      <Check size={14} className="text-[#B7FF00] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`${SOCIAL.whatsappUrl}?text=${encodeURIComponent(tier.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.22em] transition-colors ${
                    tier.featured
                      ? "bg-[#B7FF00] text-[#0A1220] hover:bg-[#d4ff4d]"
                      : "border border-[#F8FAFC]/20 text-white hover:border-[#B7FF00]/50"
                  }`}
                >
                  {p.cta} <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Custom package note */}
        <Reveal delay={300}>
          <div className="mt-14 max-w-[1400px] mx-auto border border-[#F8FAFC]/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-2">{p.customTitle}</div>
              <p className="text-white/85 text-sm max-w-xl">{p.customText}</p>
            </div>
            <a
              href={SOCIAL.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 tpa-btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.22em]"
            >
              {p.customCta} <ArrowRight size={14} />
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
