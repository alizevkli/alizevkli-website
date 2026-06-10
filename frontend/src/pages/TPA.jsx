import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { VideoPlaceholder } from "../components/VideoPlaceholder";
import { IMAGES } from "../constants/images";

export default function TPA() {
  const { t } = useLanguage();
  return (
    <div data-testid="page-tpa">
      <PageHero
        eyebrow={t.tpa.eyebrow}
        title={t.tpa.title}
        lead={t.tpa.lead}
        image={IMAGES.heroCourt}
      />
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
          {t.tpa.bullets.map((b, i) => (
            <Reveal key={b.k} delay={i * 80}>
              <div className="tpa-card p-8 md:p-10 h-full">
                <h3 className="font-anton uppercase text-3xl md:text-4xl text-white mb-3">
                  {b.k}
                </h3>
                <p className="text-[#A7B0BA] leading-relaxed">{b.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <VideoPlaceholder image={IMAGES.silhouette} label="TPA — Session Reel" />
            <VideoPlaceholder image={IMAGES.clayLegs} label="TPA — Breakdown" />
          </div>
          <div className="mt-12">
            <Link
              to="/contact"
              data-testid="tpa-cta"
              className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
            >
              {t.hero.ctaPrimary} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
