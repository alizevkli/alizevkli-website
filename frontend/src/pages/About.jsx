import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { PlaceholderBlock } from "../components/PlaceholderBlock";

export default function About() {
  const { t } = useLanguage();
  return (
    <div data-testid="page-about">
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} lead={t.about.role} />

      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal>
            <div className="lg:col-span-5 relative aspect-[3/4] overflow-hidden">
              <PlaceholderBlock
                label="Ali Zevkli"
                caption="Founder portrait · photo coming soon"
                className="absolute inset-0"
                testId="placeholder-founder-about"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                {t.about.lead}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.about.creds.map((c, i) => (
                  <div
                    key={c}
                    className="flex items-start gap-3 border border-[#F8FAFC]/10 px-4 py-3 hover:border-[#B7FF00]/50 transition-colors"
                  >
                    <span className="font-anton text-[#B7FF00] text-sm shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-white/90">{c}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10">
                <Link
                  to="/contact"
                  data-testid="about-cta"
                  className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
                >
                  {t.nav.contact} <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
