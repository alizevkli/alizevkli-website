import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SOCIAL } from "../constants/images";

export default function BaselineVisionFAQ() {
  const { t } = useLanguage();
  const page = t.baselineFaq;

  return (
    <div data-testid="page-baseline-vision-faq">
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} />

      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="space-y-4">
            {page.faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 35}>
                <article className="border border-[#F8FAFC]/10 bg-[#0B1F33]/45 p-6 md:p-8">
                  <h2 className="font-anton uppercase text-2xl md:text-3xl text-white leading-tight">
                    {item.q}
                  </h2>
                  <p className="mt-4 text-sm md:text-base text-[#A7B0BA] leading-relaxed">
                    {item.a}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <div className="mt-14 border border-[#B7FF00]/30 bg-[#B7FF00]/5 p-8 md:p-10">
              <h2 className="font-anton uppercase text-4xl md:text-5xl text-white mb-4">
                {page.ctaBoxTitle}
              </h2>
              <p className="text-[#A7B0BA] leading-relaxed max-w-3xl mb-8">
                {page.ctaBoxText}
              </p>
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
                  to="/baseline-vision"
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
