import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { IMAGES, SOCIAL } from "../constants/images";

/* ── Phone-style card ─────────────────────────────────────────────────────── */
const PhoneCard = ({ src, alt, caption, maxHeight = 480 }) => (
  <div className="mx-auto" style={{ maxWidth: "300px", width: "100%" }}>
    <div className="bg-[#0d1b2a] border border-white/10 rounded-2xl overflow-hidden shadow-xl ring-1 ring-lime-400/10">
      <img
        src={src}
        alt={alt}
        className="w-full object-contain block"
        style={{ maxHeight }}
        loading="lazy"
      />
    </div>
    {caption && (
      <p className="text-[11px] text-[#A7B0BA]/70 text-center mt-2 tracking-wide">
        {caption}
      </p>
    )}
  </div>
);

/* ── FAQ accordion ────────────────────────────────────────────────────────── */
const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#F8FAFC]/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-5 text-left group"
      >
        <div className="flex items-start gap-4">
          <span className="font-anton text-[#B7FF00] text-sm shrink-0 mt-0.5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`text-sm md:text-base font-medium transition-colors ${open ? "text-white" : "text-white/85 group-hover:text-white"}`}>
            {q}
          </span>
        </div>
        <span className="shrink-0 mt-0.5 text-[#B7FF00]">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {open && (
        <div className="pb-5 pl-9 pr-4">
          <p className="text-[#A7B0BA] leading-relaxed text-sm">{a}</p>
        </div>
      )}
    </div>
  );
};

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function BaselineVision() {
  const { t, lang } = useLanguage();
  const tr = lang === "tr";
  const caption = tr ? "Örnek TPA seans verisi" : "Sample TPA session data";

  return (
    <div data-testid="page-baseline" className="overflow-x-hidden">

      {/* 1. Hero */}
      <PageHero
        eyebrow={t.baseline.eyebrow}
        title={t.baseline.title}
        lead={t.baseline.lead}
        image={IMAGES.heroCourt}
      />

      {/* 2. TPA positioning — method overview */}
      <section className="py-12 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <p className="text-base md:text-lg text-[#A7B0BA] leading-relaxed">
              {t.baseline.positioningText}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. Device intro — text left, phone card right */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div>
              <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-4 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-[#B7FF00]" />
                {t.baseline.deviceEyebrow}
              </div>
              <h2 className="font-anton uppercase text-3xl md:text-4xl lg:text-5xl text-white leading-[0.95] mb-5">
                {t.baseline.deviceTitle}
              </h2>
              <p className="text-[#A7B0BA] leading-relaxed text-sm md:text-base">
                {t.baseline.deviceLead}
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <PhoneCard
              src="/images/tpa-method/tpa-method-app-home.png"
              alt="TPA session data — training and match modes"
              caption={caption}
            />
          </Reveal>
        </div>
      </section>

      {/* 4. What the TPA Method analyses — 3 cards with compact phone screenshots */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              {t.baseline.eyebrow}
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-10 leading-tight">
              {tr ? "TPA Metodu Ne Sağlar?" : "What Does the TPA Method Analyse?"}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: tr ? "Maç Performansı" : "Match Performance",
                chips: tr
                  ? ["Maç Skoru", "Hata Eğilimi", "Servis Baskısı"]
                  : ["Match Score", "Error Patterns", "Serve Pressure"],
                coaching: tr
                  ? "Maç istatistikleri, hata eğilimleri ve servis baskısı koçluk yorumuyla oyuncu raporuna dönüştürülür."
                  : "Match stats, error patterns and serve pressure are turned into clear player development priorities.",
                img: "/images/tpa-method/tpa-match-stats.png",
                imgAlt: "TPA session data — match statistics",
              },
              {
                title: tr ? "Vuruş Performansı" : "Shot Performance",
                chips: tr
                  ? ["Vuruş Dağılımı", "Top Derinliği", "Yön Analizi"]
                  : ["Shot Distribution", "Ball Depth", "Direction Analysis"],
                coaching: tr
                  ? "Forehand/backhand dağılımı, top derinliği ve yön verileri gelişim önceliklerine çevrilir."
                  : "Shot distribution, depth and direction data is translated into coaching development priorities.",
                img: "/images/tpa-method/tpa-ground-strokes.png",
                imgAlt: "TPA session data — ground stroke patterns",
              },
              {
                title: tr ? "Servis & Return" : "Serve & Return",
                chips: tr
                  ? ["Servis Hızı", "İsabet Oranı", "Return Kalitesi"]
                  : ["Serve Speed", "Placement Rate", "Return Quality"],
                coaching: tr
                  ? "Servis hızı, isabet oranı ve return verileri bütünsel bir değerlendirmeyle oyuncuya sunulur."
                  : "Serve speed, accuracy and return data are packaged into a clear player assessment.",
                img: "/images/tpa-method/tpa-serve-stats.png",
                imgAlt: "TPA session data — serve statistics",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <div className="bg-[#06141F] border border-[#F8FAFC]/10 rounded-2xl p-5 flex flex-col gap-3 h-full hover:border-[#B7FF00]/30 transition-colors">
                  <h3 className="font-anton uppercase text-xl text-white">{card.title}</h3>
                  <PhoneCard
                    src={card.img}
                    alt={card.imgAlt}
                    caption={caption}
                    maxHeight={260}
                  />
                  <div className="flex flex-wrap gap-2">
                    {card.chips.map((c) => (
                      <span key={c} className="text-xs border border-lime-400/25 text-[#A7B0BA] px-2.5 py-0.5 rounded-full">
                        {c}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed">{card.coaching}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. From data to coaching insight */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-10 leading-tight">
              {tr ? "Veriden Koçluk Yorumuna" : "From Data to Coaching Insight"}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <Reveal>
              <div className="bg-[#0d1b2a] border border-white/10 rounded-2xl p-6 h-full flex flex-col gap-5">
                <div className="text-xs uppercase tracking-widest text-[#A7B0BA]">
                  Match &amp; Session Data
                </div>
                <p className="text-sm text-[#A7B0BA] leading-relaxed">
                  {tr
                    ? "Maç gözlemi ve seans değerlendirmesi; vuruş desenleri, hata eğilimleri, servis verileri ve maç istatistiklerini kapsar."
                    : "Match observation and session review covers shot patterns, error tendencies, serve data and match statistics."}
                </p>
                <div className="mt-auto">
                  <PhoneCard
                    src="/images/tpa-method/tpa-return-stats.png"
                    alt="Sample TPA session data — return statistics"
                    caption={caption}
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="bg-[#0d1b2a] border border-lime-400/20 rounded-2xl p-6 h-full flex flex-col gap-5">
                <div className="text-xs uppercase tracking-widest text-[#B7FF00]">
                  Tennis Pro Analysis
                </div>
                <p className="text-sm text-[#A7B0BA] leading-relaxed">
                  {tr
                    ? "Tennis Pro Analysis bu verileri koçluk bakış açısıyla yorumlayarak oyuncuya uygulanabilir gelişim öncelikleri sunar. Otomatik teknik vuruş teşhisi değil — koçluk yorumu, performans değerlendirmesi ve uygulanabilir gelişim planı."
                    : "Tennis Pro Analysis interprets this data from a coaching perspective to deliver actionable development priorities. Not automatic technical diagnosis — coaching interpretation, performance assessment and a practical development plan."}
                </p>
                <div className="mt-auto">
                  <PhoneCard
                    src="/images/tpa-method/tpa-ground-strokes.png"
                    alt="TPA coaching interpretation"
                    caption={caption}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. How Does It Work? — 4 steps */}
      <section id="how-it-works" className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              {t.baseline.eyebrow}
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-10 leading-tight">
              {t.baseline.howTitle}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.baseline.howSteps.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border border-[#F8FAFC]/10 bg-[#06141F] p-7 h-full hover:border-[#B7FF00]/30 transition-colors rounded-xl">
                  <div className="font-anton text-[#B7FF00] text-4xl mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-anton uppercase text-xl text-white mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/30">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-[#B7FF00]" />
              {t.baselineFaq.eyebrow}
            </div>
            <h2 className="font-anton uppercase text-4xl md:text-5xl text-white mb-10">
              {t.baselineFaq.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-t border-[#F8FAFC]/10">
              {t.baselineFaq.faqs.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-16 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#06141F]">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-4">
              {t.baselineFaq.eyebrow}
            </div>
            <h2 className="font-anton uppercase text-4xl md:text-5xl text-white mb-4">
              {t.baselineFaq.ctaBoxTitle}
            </h2>
            <p className="text-[#A7B0BA] max-w-xl mx-auto mb-10">
              {t.baselineFaq.ctaBoxText}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={SOCIAL.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="baseline-cta"
                className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
              >
                {t.baseline.ctaPrimary} <ArrowRight size={16} />
              </a>
              <Link
                to={tr ? "/ornek-rapor" : "/sample-report"}
                className="inline-flex items-center justify-center gap-2 border border-[#F8FAFC]/20 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white hover:border-[#B7FF00]/50 transition-colors"
              >
                {tr ? "Örnek Raporu Gör" : "View Sample Report"} <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
