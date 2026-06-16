import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { BRAND, LOGOS } from "../constants/images";

export default function About() {
  const { t } = useLanguage();
  const exp = t.about.experience;

  return (
    <div data-testid="page-about">
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} lead={t.about.role} />

      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal>
            <div className="lg:col-span-5">
              <img
                src={BRAND.founder}
                alt="Ali Zevkli — Founder of Tennis Pro Analysis"
                className="w-full max-w-sm mx-auto rounded-2xl object-cover"
                data-testid="founder-photo-about"
              />
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
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3" style={{ gridAutoRows: "1fr" }}>
                {t.about.creds.map((c, i) => (
                  <div
                    key={c}
                    className="flex items-start gap-3 border border-[#F8FAFC]/10 px-4 py-3 hover:border-[#B7FF00]/50 transition-colors h-full"
                  >
                    <span className="font-anton text-[#B7FF00] text-sm shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-white/90">{c}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Stats block */}
            <Reveal delay={250}>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { val: t.stats.years, label: t.stats.yearsLabel },
                  { val: t.stats.countries, label: t.stats.countriesLabel },
                  { val: t.stats.players, label: t.stats.playersLabel },
                  { val: t.stats.systems, label: t.stats.systemsLabel },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center text-center py-5 px-3 border border-[#F8FAFC]/10 bg-[#0B1F33]/40 hover:border-[#B7FF00]/30 transition-colors">
                    <span className="font-anton uppercase text-2xl md:text-3xl text-[#B7FF00] tracking-tight break-words">{s.val}</span>
                    <span className="mt-1 text-[10px] uppercase tracking-widest text-[#A7B0BA] leading-tight">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Logo strip */}
            <Reveal delay={260}>
              <div className="mt-10 pt-8 border-t border-[#F8FAFC]/10">
                <div className="text-[10px] uppercase tracking-[0.4em] text-[#A7B0BA] mb-5">
                  {t.about.affiliationsTitle}
                </div>
                <div className="flex flex-wrap items-center gap-6">
                  <span className="text-white/70 text-[10px] font-bold tracking-wider leading-tight hover:text-white transition-opacity">MARMARA<br />ÜNİVERSİTESİ</span>
                  <img src={LOGOS.ttf} alt="Turkish Tennis Federation" className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                  <img src={LOGOS.atpca} alt="ATPCA" className="h-7 object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 invert" />
                  <img src={LOGOS.tennisAustralia} alt="Tennis Australia" className="h-7 object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 invert" />
                  <img src={LOGOS.utr} alt="UTR Sports" className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 invert" />
                  <img src={LOGOS.baselineVision} alt="Baseline Vision" className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 invert" />
                  <img src="/images/logos/tenx-logo.jpg" alt="TenX" className="h-8 w-auto object-contain" />
                </div>
              </div>
            </Reveal>

            {/* Club experience */}
            <Reveal delay={300}>
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
                        <li key={c} className="text-sm text-[#A7B0BA] flex items-start gap-2" style={{ textDecoration: "none" }}>
                          <span className="text-[#B7FF00] mt-1 shrink-0" style={{ textDecoration: "none" }}>·</span>
                          <span style={{ textDecoration: "none" }}>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={380}>
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
