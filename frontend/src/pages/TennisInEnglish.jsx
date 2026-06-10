import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SOCIAL } from "../constants/images";

export default function TennisInEnglish() {
  const { t } = useLanguage();
  const p = t.tennisEnglish;

  return (
    <div data-testid="page-tennis-english">
      <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

      {/* Who is this for */}
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-10 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-[#B7FF00]" />
              {p.whoTitle}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {p.who.map((item, i) => (
              <Reveal key={item.k} delay={i * 80}>
                <div className="tpa-card p-8 h-full flex flex-col">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-anton uppercase text-2xl text-white mb-4 leading-tight">
                    {item.k}
                  </h3>
                  <p className="text-[#A7B0BA] leading-relaxed flex-grow">{item.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 md:py-20 px-5 md:px-10 bg-[#0B1F33]/40 border-y border-[#F8FAFC]/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-6 flex items-center gap-3">
                <span className="inline-block w-6 h-px bg-[#B7FF00]" />
                {p.whatTitle}
              </div>
              <ul className="space-y-4">
                {p.what.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="text-[#B7FF00] mt-1 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="border border-[#F8FAFC]/10 p-8 bg-[#06141F]/60">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-4">
                {p.noteTitle}
              </div>
              <p className="text-[#A7B0BA] leading-relaxed text-sm">{p.note}</p>
              <div className="mt-8">
                <a
                  href={SOCIAL.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tpa-btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.22em]"
                >
                  {p.cta} <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
