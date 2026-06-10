import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { IMAGES, SOCIAL } from "../constants/images";

const baselineVideos = [
  {
    title: "Match Summary Like On TV",
    text:
      "Video analysis, match stats, line calling and player feedback in one smarter coaching session.",
    src: "https://drive.google.com/file/d/1HFPsD2YlrA2RA1L4TRvDYmLLaJ1DQEr1/preview",
  },
  {
    title: "Bring Fairness And Excitement To Your Court",
    text:
      "Baseline Vision helps players track performance, review key moments and turn every session into measurable improvement.",
    src: "https://drive.google.com/file/d/1HIpvLWeZXVMUp3VrabOayl7zbGYeIQW-/preview",
  },
];

export default function BaselineVision() {
  const { t } = useLanguage();
  const faq = t.baselineFaq;

  return (
    <div data-testid="page-baseline">
      <PageHero
        eyebrow={t.baseline.eyebrow}
        title={t.baseline.title}
        lead={t.baseline.lead}
        image={IMAGES.heroCourt}
      />

      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F8FAFC]/10 border border-[#F8FAFC]/10">
            {t.baseline.grid.map((g, i) => (
              <Reveal key={g.label} delay={i * 50}>
                <div className="bg-[#06141F] p-6 md:p-8 h-full group hover:bg-[#0B1F33] transition-colors">
                  <div className="font-anton uppercase text-2xl text-white mb-3">
                    {g.label}
                  </div>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed">{g.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#06141F]">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-5">
              Baseline Vision in Action
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-anton uppercase text-4xl md:text-6xl text-white leading-[0.95] max-w-4xl">
              See the analysis before you book.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[#A7B0BA] max-w-2xl">
              Watch how Baseline Vision can turn match play, line calls, stats and player feedback into a clearer coaching experience.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {baselineVideos.map((video, i) => (
              <Reveal key={video.title} delay={i * 120}>
                <article className="bg-[#0B1F33] border border-[#F8FAFC]/10 overflow-hidden">
                  <div className="aspect-video bg-black">
                    <iframe
                      src={video.src}
                      title={video.title}
                      className="w-full h-full"
                      allow="autoplay"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="font-anton uppercase text-2xl md:text-3xl text-white">
                      {video.title}
                    </h3>
                    <p className="mt-4 text-sm text-[#A7B0BA] leading-relaxed">
                      {video.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-5">
                Output
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-anton uppercase text-4xl md:text-5xl text-white leading-[0.95]">
                Every session, a report.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-[#A7B0BA] max-w-xl">
                Players receive a structured progress report after each Baseline Vision
                session — video timestamps, measurable performance data, and the next training block
                priorities.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="lg:col-span-5 relative aspect-square overflow-hidden border border-[#F8FAFC]/10">
              <img
                src={IMAGES.silhouette}
                alt="Player silhouette"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06141F] via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="max-w-[1400px] mx-auto mt-12">
          <Link
            to="/contact"
            data-testid="baseline-cta"
            className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
          >
            {t.hero.ctaSecondary} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#06141F]">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-5">
              {faq.eyebrow}
            </div>
            <h2 className="font-anton uppercase text-4xl md:text-6xl text-white leading-tight mb-8">
              {faq.title}
            </h2>
            <p className="text-[#A7B0BA] leading-relaxed max-w-3xl mb-12">{faq.lead}</p>
          </Reveal>

          <div className="space-y-4">
            {faq.faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 35}>
                <article className="border border-[#F8FAFC]/10 bg-[#0B1F33]/45 p-6 md:p-8">
                  <h3 className="font-anton uppercase text-2xl md:text-3xl text-white leading-tight">
                    {item.q}
                  </h3>
                  <p className="mt-4 text-sm md:text-base text-[#A7B0BA] leading-relaxed">
                    {item.a}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <div className="mt-14 border border-[#B7FF00]/30 bg-[#B7FF00]/5 p-8 md:p-10">
              <h2 className="font-anton uppercase text-4xl md:text-5xl text-white mb-4">
                {faq.ctaBoxTitle}
              </h2>
              <p className="text-[#A7B0BA] leading-relaxed max-w-3xl mb-8">
                {faq.ctaBoxText}
              </p>
              <a
                href={SOCIAL.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
              >
                {faq.cta} <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
