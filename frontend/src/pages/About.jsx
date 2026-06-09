import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { BRAND } from "../constants/images";

export default function About() {
  const { t } = useLanguage();
  const exp = t.about.experience;

  return (
    <div data-testid="page-about">
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} lead={t.about.role} />

      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal>
            <div className="lg:col-span-5 relative aspect-[3/4] overflow-hidden border border-[#F8FAFC]/10">
              <img
                src={BRAND.founder}
                alt="Ali Zevkli — Founder of Tennis Pro Analysis"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                data-testid="founder-photo-about"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06141F]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00]">
                  Founder
                </div>
                <div className="font-anton uppercase text-3xl text-white mt-1">
                  Ali Zevkli
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                {t.about.lead}
              </p>
            </Reveal>

            {/* Credentials */}
            <Reveal delay={220}>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.about.creds.map((c) => (
                  <div
                    key={c}
                    className="flex items-start gap-3 border border-[#F8FAFC]/10 px-4 py-3 hover:border-[#B7FF00]/50 transition-colors"
                  >
                    <span className="mt-2 w-1.5 h-1.5 bg-[#B7FF00] shrink-0" />
                    <span className="text-sm text-white/90">{c}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Club experience — Australia + Turkey */}
            <Reveal delay={300}>
              <div className="mt-14">
                <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-6 flex items-center gap-3">
                  <span className="inline-block w-6 h-px bg-[#B7FF00]" />
                  {exp.title}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Australia */}
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/60 mb-3 pb-2 border-b border-[#F8FAFC]/10">
                      {exp.australia.label}
                    </div>
                    <ul className="space-y-2">
                      {exp.australia.clubs.map((c) => (
                        <li key={c} className="text-sm text-[#A7B0BA] flex items-start gap-2">
                          <span className="text-[#B7FF00] mt-1 shrink-0">·</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Turkey */}
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/60 mb-3 pb-2 border-b border-[#F8FAFC]/10">
                      {exp.turkey.label}
                    </div>
                    <ul className="space-y-2">
                      {exp.turkey.clubs.map((c) => (
                        <li key={c} className="text-sm text-[#A7B0BA] flex items-start gap-2">
                          <span className="text-[#B7FF00] mt-1 shrink-0">·</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-12">
                <Link
                  to="/contact"
                  data-testid="about-contact-cta"
                  className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
                >
                  {t.contact.cta} <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
