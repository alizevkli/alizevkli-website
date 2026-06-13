import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

const WA_URL = "https://wa.me/61400963351";

const LIME = "#B7FF00";

const ScreenshotWithFallback = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);
  const filename = src.split("/").pop();

  if (failed) {
    return (
      <div className="w-full max-w-xs mx-auto rounded-2xl bg-[#0d1b2a] border border-white/10 flex items-center justify-center p-8 text-center min-h-[200px]">
        <p className="text-[#A7B0BA] text-sm leading-relaxed">
          Baseline Vision screenshot<br />
          <span className="text-white/40 text-xs font-mono">{filename}</span>
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-full max-w-xs mx-auto rounded-2xl shadow-lg object-contain"
    />
  );
};

const CoachingPriority = ({ text }) => (
  <div className="border-l-4 border-lime-400 bg-lime-400/10 p-4 rounded-r-xl text-sm mt-5">
    <span className="text-[10px] uppercase tracking-[0.3em] text-lime-400 font-bold block mb-1">
      COACHING PRIORITY
    </span>
    <p className="text-white/90">{text}</p>
  </div>
);

export default function SampleReport() {
  return (
    <div data-testid="page-sample-report" className="bg-[#0A1220] text-white">

      {/* 1. Header */}
      <section className="pt-36 md:pt-44 pb-14 md:pb-20 px-5 md:px-10 bg-[#06141F]">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-5 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              TENNIS PRO ANALYSIS
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-white leading-[0.93] mb-6">
              SAMPLE PLAYER DEVELOPMENT REPORT
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-base md:text-lg text-[#A7B0BA] leading-relaxed max-w-2xl mb-3">
              This sample shows how Tennis Pro Analysis combines Baseline Vision session data with coaching observation to create clear, practical development priorities for players, parents and clubs.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <p className="text-sm text-[#A7B0BA] leading-relaxed max-w-2xl mb-7 italic">
              Tennis Pro Analysis interprets Baseline Vision session data through a coaching and player-development lens — we do not replace Baseline Vision or claim to provide automatic technical stroke diagnosis.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="inline-block border border-lime-400/40 text-lime-400 text-[10px] uppercase tracking-[0.3em] px-4 py-2 mb-8 rounded">
              SAMPLE REPORT — FICTIONAL PLAYER DATA FOR DEMONSTRATION ONLY
            </div>
          </Reveal>
          <Reveal delay={240}>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
            >
              Request a Player Development Report <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* 2. Player Snapshot */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="bg-[#0d1b2a] rounded-2xl p-7 md:p-9 border-l-4 border-[#B7FF00]">
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-6">
                PLAYER PROFILE
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["Age", "13"],
                  ["Level", "Tournament Player — Turkey National Circuit"],
                  ["Goal", "ITF Junior Development"],
                  ["Session Type", "Baseline Vision-Supported Match Performance Review"],
                  ["Prepared by", "Tennis Pro Analysis"],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-1">
                    <dt className="text-[10px] uppercase tracking-[0.25em] text-[#A7B0BA]">{label}</dt>
                    <dd className="text-white font-medium text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Match Performance Snapshot */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              MATCH PERFORMANCE SNAPSHOT
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal>
              <ScreenshotWithFallback
                src="/images/baseline/baseline-match-stats.png"
                alt="Baseline Vision Match Statistics"
              />
            </Reveal>
            <Reveal delay={120}>
              <div>
                <h2 className="font-anton uppercase text-2xl md:text-3xl text-white mb-4 leading-tight">
                  MATCH PERFORMANCE OVERVIEW
                </h2>
                <p className="text-[#A7B0BA] leading-relaxed text-sm md:text-base">
                  The player showed strong competitive intent throughout the match. Points Won at 62% reflects solid overall performance, but the error count of 13 versus only 4 for the opponent highlights the main development area: reducing unforced errors during neutral rallies. Double faults (3) suggest serve consistency under pressure needs attention. Service points won at 59% is a positive — this is a platform to build on.
                </p>
                <CoachingPriority text="Main Priority: Reduce unforced errors during neutral rallies before attempting aggressive patterns." />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Ground Stroke Performance Review */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              GROUND STROKE PERFORMANCE REVIEW
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal delay={120} className="md:order-2">
              <div>
                <h2 className="font-anton uppercase text-2xl md:text-3xl text-white mb-4 leading-tight">
                  GROUND STROKES & BALL PLACEMENT
                </h2>
                <p className="text-[#A7B0BA] leading-relaxed text-sm md:text-base">
                  Ground stroke data shows average speed of 90 km/h with a max of 138 km/h — appropriate for a 13-year-old tournament player targeting ITF Junior level. Ball placement shows 61% to the forehand side and 39% to the backhand side, indicating a clear tendency to avoid the backhand wing. Net clearance of 47cm is safe but could be more aggressive on shorter balls. The placement map shows most balls landing in the mid-court zone — deeper placement will be the key differentiator at ITF Junior level.
                </p>
                <CoachingPriority text="Main Priority: Develop backhand wing confidence and increase depth on cross-court patterns." />
              </div>
            </Reveal>
            <Reveal className="md:order-1">
              <ScreenshotWithFallback
                src="/images/baseline/baseline-ground-strokes.png"
                alt="Baseline Vision Ground Stroke Analysis"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Serve Performance Review */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              SERVE PERFORMANCE REVIEW
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal>
              <ScreenshotWithFallback
                src="/images/baseline/baseline-serve-stats.png"
                alt="Baseline Vision Serve Statistics"
              />
            </Reveal>
            <Reveal delay={120}>
              <div>
                <h2 className="font-anton uppercase text-2xl md:text-3xl text-white mb-4 leading-tight">
                  SERVE PERFORMANCE
                </h2>
                <p className="text-[#A7B0BA] leading-relaxed text-sm md:text-base">
                  First serve average speed of 165 km/h with a maximum of 182 km/h is strong for the age group and will be a competitive weapon at ITF Junior level. However, first serve percentage at 50% needs improvement — losing half of first serve points creates unnecessary pressure on the second serve. Placement shows 40/40/20 distribution across serve zones — more variety and disguise will be needed against stronger opponents. Second serve consistency should become a training priority before the next tournament block.
                </p>
                <CoachingPriority text="Main Priority: Improve first serve percentage to 65%+ and develop second serve as a reliable weapon." />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Training Priorities */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              RECOMMENDED TRAINING PRIORITIES
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mt-2 mb-2 leading-tight">
              RECOMMENDED TRAINING PRIORITIES
            </h2>
            <p className="text-[#A7B0BA] text-sm mb-10">
              Based on Baseline Vision data and coaching observation — next 4 weeks
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Rally Consistency & Depth",
                text: "Build a reliable cross-court baseline rally with depth past the service line. Focus on neutral ball tolerance before attempting direction changes. Target: 20-ball deep cross-court rally consistency.",
              },
              {
                num: "02",
                title: "Backhand Wing Development",
                text: "Reduce avoidance of the backhand side. Structured backhand-focused drills with target zones. The backhand must become a neutral weapon, not a defensive shot, before ITF Junior competition.",
              },
              {
                num: "03",
                title: "Serve Consistency Under Pressure",
                text: "Increase first serve percentage through controlled target practice. Develop a reliable second serve with spin and depth. Double fault reduction is a priority for tournament matches.",
              },
            ].map((card, i) => (
              <Reveal key={card.num} delay={i * 80}>
                <div className="bg-[#0d1b2a] rounded-2xl p-6 border border-white/10 h-full hover:border-[#B7FF00]/30 transition-colors">
                  <div className="font-anton text-[#B7FF00] text-4xl mb-4">{card.num}</div>
                  <h3 className="font-anton uppercase text-xl text-white mb-3 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 2-Week Action Plan */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              ACTION PLAN
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mt-2 mb-10 leading-tight">
              2-WEEK ACTION PLAN
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                week: "WEEK 1 — Foundation",
                items: [
                  "Deep rally tolerance drills",
                  "Cross-court pattern consistency",
                  "Backhand target zone work",
                  "Serve placement practice (no pressure)",
                ],
              },
              {
                week: "WEEK 2 — Application",
                items: [
                  "Match-play situations with rally structure",
                  "Backhand in competitive drill scenarios",
                  "Serve under simulated match pressure",
                  "Video review with player and parent",
                ],
              },
            ].map((block, i) => (
              <Reveal key={block.week} delay={i * 100}>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] font-bold mb-4 pb-3 border-b border-[#F8FAFC]/10">
                    {block.week}
                  </div>
                  <ul className="space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#A7B0BA]">
                        <span className="text-[#B7FF00] mt-1 shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Disclaimer */}
      <section className="py-10 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-xs text-[#A7B0BA]/60 leading-relaxed">
            This is a sample demonstration report only. Player data and analysis are illustrative. Tennis Pro Analysis does not claim to provide automatic technical stroke diagnosis. Baseline Vision provides performance data and visual feedback. Ali Zevkli and the Tennis Pro Analysis team use coaching experience to interpret data and create practical player-development priorities.
          </p>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-16 md:py-20 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto bg-[#B7FF00] rounded-2xl p-10 md:p-14 text-center">
          <h2 className="font-anton uppercase text-3xl md:text-4xl text-[#06141F] mb-4 leading-tight">
            WANT A REPORT FOR YOUR PLAYER?
          </h2>
          <p className="text-[#06141F]/80 mb-8 max-w-lg mx-auto leading-relaxed">
            Contact Tennis Pro Analysis on WhatsApp to request a Baseline Vision-supported player development report.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#06141F] text-[#B7FF00] px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] hover:bg-[#0d1b2a] transition-colors rounded"
            >
              Request a Player Report <ArrowRight size={16} />
            </a>
            <Link
              to="/baseline-vision"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#06141F]/30 text-[#06141F] px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] hover:border-[#06141F] transition-colors rounded"
            >
              Learn About Baseline Vision <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
