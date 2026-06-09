import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { IMAGES, SOCIAL } from "../constants/images";

export default function AustraliaConsulting() {
  const { t } = useLanguage();
  const page = t.consulting;

  return (
    <div data-testid="page-australia-consulting">
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={IMAGES.silhouette} />

      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="border border-yellow-400/30 bg-yellow-400/10 p-6 md:p-8 mb-14 flex gap-4">
              <AlertTriangle className="text-yellow-300 shrink-0 mt-1" size={22} />
              <div>
                <h2 className="font-anton uppercase text-2xl md:text-3xl text-white mb-3">{page.disclaimerLabel}</h2>
                <p className="text-sm md:text-base text-[#A7B0BA] leading-relaxed">{page.disclaimer}</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
              <div className="lg:col-span-5">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#B7FF00] mb-4">{page.bgTitle}</div>
                <h2 className="font-anton uppercase text-4xl md:text-6xl text-white leading-tight">Australia knowledge with Turkish context.</h2>
              </div>
              <div className="lg:col-span-7">
                <ul className="divide-y divide-[#F8FAFC]/10 border-y border-[#F8FAFC]/10">
                  {page.background.map((item) => (
                    <li key={item} className="py-5 flex items-start gap-4 text-white/90">
                      <span className="mt-2 w-1.5 h-1.5 bg-[#B7FF00] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {page.blocks.map((block, i) => (
              <Reveal key={block.k} delay={i * 70}>
                <div className="tpa-card p-8 h-full">
                  <h3 className="font-anton uppercase text-2xl md:text-3xl text-white mb-4">{block.k}</h3>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed">{block.v}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-16 border border-[#B7FF00]/30 bg-[#B7FF00]/5 p-8 md:p-10">
              <h2 className="font-anton uppercase text-4xl md:text-5xl text-white mb-4">{page.ctaBoxTitle}</h2>
              <p className="text-[#A7B0BA] leading-relaxed max-w-3xl mb-8">{page.ctaBoxText}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SOCIAL.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
                >
                  {page.cta} <ArrowRight size={16} />
                </a>
                <Link
                  to="/pathways"
                  className="tpa-btn-secondary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
                >
                  {page.ctaSecondary} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
