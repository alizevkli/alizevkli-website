import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { SOCIAL } from "../constants/images";

const CREDS_TR = [
  "20+ Yıl Avustralya & Türkiye",
  "Marmara BESYO",
  "TTF Antrenörü",
  "ATPCA Advanced Pro Level 2",
  "Tennis Australia Antrenör Üyesi",
  "Baseline Vision",
  "NAATI Tercüme Eğitimi (RMIT)",
];

const CREDS_EN = [
  "20+ Years Australia & Türkiye",
  "Marmara BESYO",
  "TTF Qualified Coach",
  "ATPCA Advanced Pro Level 2",
  "Tennis Australia Coach Member",
  "Baseline Vision",
  "NAATI Translation Training (RMIT)",
];

export default function Pathways() {
  const { t, lang } = useLanguage();
  const p = t.pathways;
  const creds = lang === "tr" ? CREDS_TR : CREDS_EN;
  const featuredLabel = lang === "tr" ? "ÖNE ÇIKAN" : "FEATURED";

  return (
    <div data-testid="page-pathways">

      {/* 1. Hero */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 px-5 md:px-10 overflow-hidden bg-[#06141F]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#06141F]/90 to-[#06141F]" />
        <div className="relative max-w-[1400px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              {p.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-white leading-[0.93] max-w-4xl mb-6">
              {p.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base md:text-lg text-[#A7B0BA] leading-relaxed max-w-2xl mb-10">
              {p.lead}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a
              href={SOCIAL.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="pathways-hero-cta"
              className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
            >
              {t.hero.ctaPrimary} <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* 2. Credentials strip */}
      <section className="border-y border-[#F8FAFC]/10 bg-[#0B1F33] py-5 px-5 md:px-10 overflow-hidden">
        <div
          className="max-w-[1400px] mx-auto flex items-center overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {creds.map((c, i) => (
            <span
              key={i}
              className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-[#A7B0BA] whitespace-nowrap flex items-center"
            >
              {c}
              {i < creds.length - 1 && (
                <span className="inline-block mx-5 w-1 h-1 rounded-full bg-[#B7FF00]" />
              )}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Service cards — 2×3 grid */}
      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              {p.eyebrow}
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-10 leading-tight">
              {p.servicesTitle}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.services.map((svc, i) => (
              <Reveal key={svc.name} delay={i * 70}>
                <div
                  className={`relative h-full p-7 md:p-9 flex flex-col ${
                    svc.featured
                      ? "border-2 border-lime-400 bg-[#06141F]"
                      : "border border-[#F8FAFC]/10 bg-[#06141F] hover:border-[#F8FAFC]/25 transition-colors"
                  }`}
                >
                  {svc.featured && (
                    <div className="absolute -top-3 left-7">
                      <span className="bg-lime-400 text-[#0A1220] text-[10px] font-bold uppercase tracking-[0.3em] px-3 py-1">
                        {featuredLabel}
                      </span>
                    </div>
                  )}
                  <h3
                    className={`font-anton uppercase text-2xl md:text-3xl mb-3 leading-tight ${
                      svc.featured ? "text-lime-400" : "text-white"
                    }`}
                  >
                    {svc.name}
                  </h3>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed flex-grow">{svc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Australia connection */}
      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div>
              <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-5 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-[#B7FF00]" />
                🇦🇺 🇹🇷
              </div>
              <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-6 leading-tight">
                {p.australiaTitle}
              </h2>
              <p className="text-[#A7B0BA] leading-relaxed mb-8">{p.australiaIntro}</p>
              <ul className="space-y-3">
                {p.australiaBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="text-[#B7FF00] mt-0.5 shrink-0">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="border border-[#1FA463]/30 bg-[#0B1F33]/40 p-7 md:p-9">
              <div className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#1FA463] text-white mb-5">
                {lang === "tr" ? "Önemli Not" : "Important Note"}
              </div>
              <p className="text-sm text-[#A7B0BA] leading-relaxed">{p.disclaimer}</p>
              <div className="mt-6 pt-6 border-t border-[#F8FAFC]/10">
                <Link
                  to="/australia-consulting"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#B7FF00] hover:gap-3 transition-all"
                >
                  {lang === "tr" ? "Avustralya Danışmanlık" : "Australia Consulting"}{" "}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="py-20 md:py-24 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#06141F]">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-4">
              {p.eyebrow}
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-8 leading-tight">
              {p.ctaTitle}
            </h2>
            <a
              href={SOCIAL.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="pathways-cta"
              className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
            >
              {t.hero.ctaPrimary} <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
