import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SOCIAL } from "../constants/images";

const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#F8FAFC]/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
      >
        <div className="flex items-start gap-4">
          <span className="font-anton text-[#B7FF00] text-sm shrink-0 mt-0.5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`text-base font-medium transition-colors ${open ? "text-white" : "text-white/85 group-hover:text-white"}`}>
            {q}
          </span>
        </div>
        <span className="shrink-0 mt-0.5 text-[#B7FF00]">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      {open && (
        <div className="pb-6 pl-9 pr-6">
          <p className="text-[#A7B0BA] leading-relaxed text-sm">{a}</p>
        </div>
      )}
    </div>
  );
};

export default function TPAMethodFAQ() {
  const { t } = useLanguage();
  const p = t.tpaMethodFaq;

  return (
    <div data-testid="page-tpa-method-faq">
      <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="border-t border-[#F8FAFC]/10">
              {p.faqs.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-16 border border-[#F8FAFC]/10 p-8 bg-[#0B1F33]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-2">{p.ctaBoxTitle}</div>
                <p className="text-sm text-[#A7B0BA]">{p.ctaBoxText}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href={SOCIAL.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tpa-btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.22em]"
                >
                  {p.cta} <ArrowRight size={14} />
                </a>
                <Link
                  to="/tpa-method"
                  className="inline-flex items-center gap-2 border border-[#F8FAFC]/20 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.22em] text-white hover:border-[#B7FF00]/50 transition-colors"
                >
                  {p.ctaSecondary} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
