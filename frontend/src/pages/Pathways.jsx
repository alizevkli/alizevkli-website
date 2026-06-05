import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { IMAGES } from "../constants/images";

export default function Pathways() {
  const { t } = useLanguage();
  return (
    <div data-testid="page-pathways">
      <PageHero
        eyebrow={t.pathways.eyebrow}
        title={t.pathways.title}
        lead={t.pathways.lead}
        image={IMAGES.silhouette}
      />
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.pathways.blocks.map((b, i) => (
            <Reveal key={b.k} delay={i * 80}>
              <div className="tpa-card p-8 md:p-10 h-full">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-3">
                  Pathway · 0{i + 1}
                </div>
                <h3 className="font-anton uppercase text-2xl md:text-3xl text-white mb-3">
                  {b.k}
                </h3>
                <p className="text-[#A7B0BA] leading-relaxed">{b.v}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-12 max-w-3xl text-xs uppercase tracking-[0.18em] text-[#A7B0BA] border-l-2 border-[#1FA463] pl-4">
            {t.pathways.disclaimer}
          </p>
        </Reveal>

        <div className="mt-12">
          <Link
            to="/contact"
            data-testid="pathways-cta"
            className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
          >
            {t.nav.contact} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
