import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { IMAGES } from "../constants/images";

export default function TennisInEnglish() {
  const { t } = useLanguage();
  const page = t.tennisEnglish;

  return (
    <div data-testid="page-tennis-in-english">
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} image={IMAGES.clayLegs} />

      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#B7FF00] mb-4">{page.whoTitle}</div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {page.who.map((item, i) => (
              <Reveal key={item.k} delay={i * 80}>
                <div className="tpa-card p-8 h-full">
                  <h3 className="font-anton uppercase text-2xl md:text-3xl text-white mb-4">{item.k}</h3>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed">{item.v}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#B7FF00] mb-4">{page.whatTitle}</div>
                <h2 className="font-anton uppercase text-4xl md:text-6xl text-white leading-tight">English on court. Tennis first.</h2>
              </div>
              <div className="lg:col-span-7">
                <ul className="divide-y divide-[#F8FAFC]/10 border-y border-[#F8FAFC]/10">
                  {page.what.map((item) => (
                    <li key={item} className="py-5 flex items-start gap-4 text-white/90">
                      <span className="mt-2 w-1.5 h-1.5 bg-[#B7FF00] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-14 border border-[#F8FAFC]/10 bg-[#0B1F33]/50 p-7 md:p-9">
              <h3 className="font-anton uppercase text-3xl text-white mb-4">{page.noteTitle}</h3>
              <p className="text-[#A7B0BA] leading-relaxed max-w-4xl">{page.note}</p>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <Link to="/contact" className="tpa-btn-primary mt-10 inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]">
              {page.cta} <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
