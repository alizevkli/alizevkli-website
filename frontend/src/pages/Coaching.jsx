import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { IMAGES } from "../constants/images";
import { SOCIAL } from "../constants/images";

export default function Coaching() {
  const { t } = useLanguage();
  const c = t.coaching;

  return (
    <div data-testid="page-coaching">

      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} image={IMAGES.clayLegs} />

      {/* Who is this for — pills */}
      <section className="border-b border-[#F8FAFC]/10 bg-[#0B1F33]/40 py-8 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-4">{c.whoTitle}</div>
          <div className="flex flex-wrap gap-2">
            {c.whoItems.map((item) => (
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
            {c.blocks.map((block, i) => (
              <Reveal key={block.k} delay={i * 70}>
                <div className="border border-[#F8FAFC]/10 bg-[#06141F] p-8 md:p-10 h-full flex flex-col hover:border-[#F8FAFC]/20 transition-colors">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-anton uppercase text-2xl md:text-3xl text-white mb-4 leading-tight">
                    {block.k}
                  </h3>
                  <p className="text-[#A7B0BA] leading-relaxed text-sm flex-grow">{block.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#06141F]">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-4">{c.eyebrow}</div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-8 leading-tight">
              {c.ctaTitle}
            </h2>
            <a
              href={SOCIAL.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="coaching-cta"
              className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
            >
              {c.ctaBtn} <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
