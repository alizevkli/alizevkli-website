import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { IMAGES } from "../constants/images";

export default function Coaching() {
  const { t } = useLanguage();
  return (
    <div data-testid="page-coaching">
      <PageHero
        eyebrow={t.coaching.eyebrow}
        title={t.coaching.title}
        lead={t.coaching.lead}
        image={IMAGES.clayLegs}
      />
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.coaching.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80}>
              <div className="tpa-card p-8 md:p-10 h-full flex flex-col">
                <h3 className="font-anton uppercase text-3xl md:text-4xl text-white mb-3">
                  {tier.name}
                </h3>
                <p className="text-sm text-[#A7B0BA] leading-relaxed mb-6">{tier.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                      <span className="mt-1 w-1.5 h-1.5 bg-[#B7FF00] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          {t.hero.ctaPrimaryHref ? (
            <a
              href={t.hero.ctaPrimaryHref}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="coaching-cta"
              className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
            >
              {t.hero.ctaPrimary} <ArrowRight size={16} />
            </a>
          ) : (
            <Link
              to="/contact"
              data-testid="coaching-cta"
              className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
            >
              {t.hero.ctaPrimary} <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
