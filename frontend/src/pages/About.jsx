import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { BRAND, LOGOS } from "../constants/images";

const credentialLogos = [
  { name: "Marmara University", image: LOGOS.marmara, label: "Sports Science · 2003" },
  { name: "ATPCA", image: LOGOS.atpca, label: "Advanced Pro Level 2" },
  { name: "TTF", image: LOGOS.ttf, label: "Qualified Coach" },
  { name: "UTR", image: LOGOS.utr, label: "Tournament Director" },
  { name: "Baseline Vision", image: LOGOS.baselineVision, label: "Performance Analyst" },
];

export default function About() {
  const { t } = useLanguage();
  const exp = t.about.experience;

  return (
    <div data-testid="page-about">
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} lead={t.about.role} />

      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal>
            <div className="lg:col-span-5 relative aspect-[3/4] overflow-hidden border border-[#F8FAFC]/10 bg-[#0B1F33]">
              <img
                src={BRAND.founder}
                alt="Ali Zevkli — Founder of Tennis Pro Analysis"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                data-testid="founder-photo-about"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06141F]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center px-6">
                  <div className="font-anton uppercase text-5xl text-white/90">Ali Zevkli</div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#B7FF00]">
                    Founder · Tennis Pro Analysis
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00]">Founder</div>
                <div className="font-anton uppercase text-3xl text-white mt-1">Ali Zevkli</div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">{t.about.lead}</p>
            </Reveal>

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

            <Reveal delay={260}>
              <div className="mt-10 border border-[#F8FAFC]/10 bg-[#0B1F33]/50 p-5 md:p-6">
                <div className="text-[10px] uppercase tracking-[0.32em] text-[#B7FF00] mb-5">
                  Education · Certifications · Technology
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {credentialLogos.map((item) => (
                    <div
                      key={item.name}
                      className="min-h-[120px] border border-[#F8FAFC]/10 bg-[#06141F]/70 p-3 flex flex-col items-center justify-between text-center"
                    >
                      <div className="h-12 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={`${item.name} logo`}
                          className="max-h-10 max-w-[95px] object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.16em] text-white font-bold">
                          {item.name}
                        </div>
                        <div className="mt-1 text-[10px] text-[#A7B0BA] leading-tight">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-14">
                <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-6 flex items-center gap-3">
                  <span className="inline-block w-6 h-px bg-[#B7FF00]" />
                  {exp.title}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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

            <Reveal delay={420}>
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
