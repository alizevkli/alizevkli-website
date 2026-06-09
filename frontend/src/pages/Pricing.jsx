import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SOCIAL } from "../constants/images";

const buildWhatsAppUrl = (message) => {
  const text = encodeURIComponent(message || "Hi Ali, I would like to ask about Tennis Pro Analysis services.");
  return `${SOCIAL.whatsappUrl}?text=${text}`;
};

export default function Pricing() {
  const { t } = useLanguage();
  const page = t.pricing;

  return (
    <div data-testid="page-pricing">
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <p className="mb-10 max-w-4xl text-sm text-[#A7B0BA] border-l-2 border-[#B7FF00] pl-4 leading-relaxed">
              {page.disclaimer}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {page.tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 70}>
                <article
                  className={`relative h-full border p-7 md:p-8 bg-[#0B1F33]/45 flex flex-col ${
                    tier.featured ? "border-[#B7FF00]/70" : "border-[#F8FAFC]/10"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute top-0 right-0 bg-[#B7FF00] text-[#06141F] text-[10px] font-bold uppercase tracking-[0.22em] px-4 py-2">
                      {page.popular}
                    </div>
                  )}
                  <h2 className="font-anton uppercase text-3xl md:text-4xl text-white leading-tight pr-20">
                    {tier.name}
                  </h2>
                  <p className="mt-4 text-sm text-[#A7B0BA] leading-relaxed">{tier.desc}</p>
                  <div className="mt-7 flex items-end gap-2">
                    <span className="font-anton text-5xl text-[#B7FF00] uppercase">{tier.price}</span>
                    {tier.unit && <span className="text-xs uppercase tracking-[0.2em] text-[#A7B0BA] mb-2">{tier.unit}</span>}
                  </div>
                  <p className="mt-2 text-xs text-[#A7B0BA]">{tier.note}</p>
                  <ul className="mt-8 space-y-3 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white/90">
                        <span className="mt-2 w-1.5 h-1.5 bg-[#B7FF00] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={buildWhatsAppUrl(tier.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tpa-btn-primary mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-[0.2em]"
                  >
                    {page.cta} <ArrowRight size={15} />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-16 border border-[#F8FAFC]/10 bg-[#0B1F33]/50 p-8 md:p-10">
              <h2 className="font-anton uppercase text-4xl md:text-5xl text-white mb-4">{page.customTitle}</h2>
              <p className="text-[#A7B0BA] leading-relaxed max-w-3xl mb-8">{page.customText}</p>
              <a
                href={buildWhatsAppUrl(page.customTitle)}
                target="_blank"
                rel="noopener noreferrer"
                className="tpa-btn-secondary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
              >
                {page.customCta} <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
