import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { IMAGES } from "../constants/images";

export default function Tournament() {
  const { t } = useLanguage();
  return (
    <div data-testid="page-tournament">
      <PageHero
        eyebrow={t.tournament.eyebrow}
        title={t.tournament.title}
        lead={t.tournament.lead}
        image={IMAGES.silhouette}
      />
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <ul className="divide-y divide-[#F8FAFC]/10 border-y border-[#F8FAFC]/10">
            {t.tournament.points.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <li className="py-6 md:py-8 flex items-start gap-6 md:gap-10 group">
                  <span className="font-anton text-3xl md:text-4xl text-[#B7FF00] w-14 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-lg md:text-xl text-white/90 group-hover:text-white transition-colors">
                    {p}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-14">
            <Link
              to="/contact"
              data-testid="tournament-cta"
              className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
            >
              {t.nav.contact} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
