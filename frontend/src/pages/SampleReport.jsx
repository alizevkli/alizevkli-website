import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SOCIAL } from "../constants/images";

const WA_URL = SOCIAL.whatsappUrl;

const PhoneFrame = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="w-full max-w-[280px] mx-auto">
      <div className="bg-[#0d1b2a] border border-white/10 rounded-2xl overflow-hidden shadow-xl ring-1 ring-lime-400/10 min-h-[160px] flex items-center justify-center">
        {failed ? (
          <p className="text-[#A7B0BA] text-sm p-6 text-center leading-relaxed">
            Sample screenshot
          </p>
        ) : (
          <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="w-full object-contain block"
            style={{ maxHeight: "300px" }}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

const CoachingPriority = ({ text }) => (
  <div className="border-l-4 border-lime-400 bg-lime-400/10 p-4 rounded-r-xl text-sm mt-4">
    <span className="text-[10px] uppercase tracking-[0.3em] text-lime-400 font-bold block mb-1">
      COACHING PRIORITY
    </span>
    <p className="text-white/90">{text}</p>
  </div>
);

const Chip = ({ label, value }) => (
  <div className="flex flex-col items-center bg-[#06141F] border border-[#F8FAFC]/10 rounded-xl px-4 py-3 min-w-[100px]">
    <span className="font-anton text-[#B7FF00] text-base leading-none">{value}</span>
    <span className="text-[9px] uppercase tracking-[0.2em] text-[#A7B0BA] mt-1 text-center">{label}</span>
  </div>
);

const SampleNote = () => (
  <p className="text-[9px] uppercase tracking-[0.2em] text-[#A7B0BA]/50 text-center mt-2">
    Sample data shown for illustration only.
  </p>
);

export default function SampleReport() {
  return (
    <div data-testid="page-sample-report" className="bg-[#0A1220] text-white overflow-x-hidden">

      {/* 1. Hero */}
      <section className="pt-36 md:pt-44 pb-12 md:pb-16 px-5 md:px-10 bg-[#06141F]">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-5 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              TENNIS PRO ANALYSIS
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-white leading-[0.93] mb-5">
              SAMPLE PLAYER<br />DEVELOPMENT REPORT
            </h1>
          </Reveal>
          <Reveal delay={130}>
            <p className="text-base md:text-lg text-[#A7B0BA] leading-relaxed max-w-2xl mb-4">
              Data does not coach by itself. Ali Zevkli interprets session data through a coaching lens and turns it into practical player development priorities.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <div className="inline-block border border-lime-400/40 text-lime-400 text-[10px] uppercase tracking-[0.3em] px-4 py-2 mb-8 rounded">
              FICTIONAL PLAYER DATA — DEMONSTRATION ONLY
            </div>
          </Reveal>
          <Reveal delay={210}>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
            >
              Request Report on WhatsApp <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* 2. Player Profile */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="bg-[#0d1b2a] rounded-2xl p-7 md:p-9 border-l-4 border-[#B7FF00]">
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-5">PLAYER PROFILE</div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["Age", "16"],
                  ["Level", "ITF Junior — Turkey / International Circuit"],
                  ["Goal", "ITF Junior Development"],
                  ["Session Type", "Match & Session Development Review"],
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

      {/* 3. What This Report Includes */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-8 leading-tight">
              WHAT THIS REPORT INCLUDES
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Session Data Review" },
              { num: "02", title: "Coaching Interpretation" },
              { num: "03", title: "4-Week Priorities" },
              { num: "04", title: "Player & Parent Summary" },
            ].map((card, i) => (
              <Reveal key={card.num} delay={i * 60}>
                <div className="bg-[#06141F] border border-[#F8FAFC]/10 p-5 rounded-2xl hover:border-[#B7FF00]/30 transition-colors text-center">
                  <div className="font-anton text-[#B7FF00] text-3xl mb-3">{card.num}</div>
                  <h3 className="font-anton uppercase text-base text-white leading-tight">{card.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Match Performance */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-anton text-[#B7FF00]/30 text-5xl leading-none select-none">01</span>
              <h2 className="font-anton uppercase text-2xl md:text-3xl text-white leading-tight">MATCH PERFORMANCE</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal>
              <div>
                <PhoneFrame
                  src="/images/tpa-method/tpa-match-stats.png"
                  alt="Sample match statistics — Tennis Pro Analysis player development report"
                />
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <Chip label="Points Won" value="62%" />
                  <Chip label="Errors" value="13" />
                  <Chip label="Svc Pts Won" value="59%" />
                </div>
                <SampleNote />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-col gap-4">
                <p className="text-[#A7B0BA] leading-relaxed text-sm md:text-base">
                  Points Won at 62% shows solid overall performance, but 13 errors against the opponent's 4 highlights the main development area: reducing unforced errors in neutral rallies. Double faults (3) and a 59% serve points won rate signal serve consistency is a further priority.
                </p>
                <CoachingPriority text="Reduce unforced errors in neutral rallies before attempting aggressive patterns." />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Stroke Patterns */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-anton text-[#B7FF00]/30 text-5xl leading-none select-none">02</span>
              <h2 className="font-anton uppercase text-2xl md:text-3xl text-white leading-tight">STROKE PATTERNS</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal delay={120} className="md:order-2">
              <div className="flex flex-col gap-4">
                <p className="text-[#A7B0BA] leading-relaxed text-sm md:text-base">
                  Shot distribution shows 61% to the forehand side — a clear tendency to avoid the backhand wing. Ball depth is mid-court heavy; pushing landing zones deeper will be the key differentiator at ITF Junior level.
                </p>
                <CoachingPriority text="Build backhand wing confidence and increase cross-court depth." />
              </div>
            </Reveal>
            <Reveal className="md:order-1">
              <div>
                <PhoneFrame
                  src="/images/tpa-method/tpa-ground-strokes.png"
                  alt="Sample stroke distribution data — Tennis Pro Analysis"
                />
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <Chip label="FH / BH" value="61/39%" />
                  <Chip label="Avg Speed" value="90 km/h" />
                </div>
                <SampleNote />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Serve Trends */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-anton text-[#B7FF00]/30 text-5xl leading-none select-none">03</span>
              <h2 className="font-anton uppercase text-2xl md:text-3xl text-white leading-tight">SERVE TRENDS</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal>
              <div>
                <PhoneFrame
                  src="/images/tpa-method/tpa-serve-stats.png"
                  alt="Sample serve speed and placement data — Tennis Pro Analysis"
                />
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <Chip label="Avg Speed" value="165 km/h" />
                  <Chip label="1st Serve %" value="50%" />
                </div>
                <SampleNote />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-col gap-4">
                <p className="text-[#A7B0BA] leading-relaxed text-sm md:text-base">
                  First serve speed is strong for a 16-year-old, but a 50% first serve percentage creates unnecessary pressure on the second serve. More placement variety and a reliable second serve with spin are the next development focus.
                </p>
                <CoachingPriority text="Improve first serve percentage and develop second serve reliability." />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. 4-Week Coaching Priorities */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-8 leading-tight">
              4-WEEK COACHING PRIORITIES
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Rally Depth",          text: "Build consistent cross-court depth past the service line. Neutral ball tolerance before direction changes." },
              { num: "02", title: "Backhand Development", text: "Structured backhand-focused work with target zones. Backhand must become a reliable neutral weapon." },
              { num: "03", title: "Serve Consistency",    text: "Increase first serve percentage and develop a second serve with spin and depth." },
            ].map((card, i) => (
              <Reveal key={card.num} delay={i * 80}>
                <div className="bg-[#0d1b2a] rounded-2xl p-6 border border-white/10 hover:border-[#B7FF00]/30 transition-colors h-full">
                  <div className="font-anton text-[#B7FF00] text-4xl mb-4">{card.num}</div>
                  <h3 className="font-anton uppercase text-lg text-white mb-2 leading-tight">{card.title}</h3>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 2-Week Action Plan */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-8 leading-tight">
              2-WEEK PLAYER ACTION PLAN
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { week: "WEEK 1 — FOUNDATION", items: ["Deep rally tolerance drills", "Cross-court pattern consistency", "Backhand target zone work", "Serve placement practice (low pressure)"] },
              { week: "WEEK 2 — APPLICATION", items: ["Match-play rally structure scenarios", "Backhand in competitive drills", "Serve under simulated match pressure", "Video review with player and parent"] },
            ].map((block, i) => (
              <Reveal key={block.week} delay={i * 100}>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] font-bold mb-4 pb-3 border-b border-[#F8FAFC]/10">
                    {block.week}
                  </div>
                  <ul className="space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#A7B0BA]">
                        <span className="text-[#B7FF00] mt-1 shrink-0">·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Player & Parent Summary */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-6 leading-tight">
              PLAYER & PARENT SUMMARY
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-[#0d1b2a] rounded-2xl p-7 md:p-9 border border-white/10">
              <p className="text-white/90 leading-relaxed text-base md:text-lg">
                Strong ITF Junior potential and good competitive intent. The clearest development opportunity is reducing errors before playing aggressively. Next training block focus: rally depth, backhand confidence, and serve consistency under pressure.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. Why Tennis Pro Analysis */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-8 leading-tight">
              WHY TENNIS PRO ANALYSIS
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Coaching Experience",      text: "Tennis coaching experience across Australia and Türkiye — clubs, academies and tournament environments." },
              { num: "02", title: "Data-Supported Method",    text: "Session data supports clearer feedback, measurable tracking and practical player development plans." },
              { num: "03", title: "Player & Parent Friendly", text: "Reports are written so players and parents understand exactly what to work on next." },
            ].map((card, i) => (
              <Reveal key={card.num} delay={i * 80}>
                <div className="bg-[#0d1b2a] rounded-2xl p-6 border border-white/10 hover:border-[#B7FF00]/30 transition-colors h-full">
                  <div className="font-anton text-[#B7FF00] text-4xl mb-4">{card.num}</div>
                  <h3 className="font-anton uppercase text-xl text-white mb-3 leading-tight">{card.title}</h3>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Disclaimer */}
      <section className="py-6 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-xs text-[#A7B0BA]/50 leading-relaxed">
            Sample report — fictional player data for demonstration only. Tennis Pro Analysis uses coaching experience to interpret session data and does not replace on-court coaching.
          </p>
        </div>
      </section>

      {/* 12. CTA */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#06141F]">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-4">TENNIS PRO ANALYSIS</div>
            <h2 className="font-anton uppercase text-4xl md:text-5xl text-white mb-4 leading-tight">
              REQUEST A REPORT FOR YOUR PLAYER
            </h2>
            <p className="text-[#A7B0BA] max-w-xl mx-auto mb-8 leading-relaxed">
              Request a player development report for your next session.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
              >
                Request Report on WhatsApp <ArrowRight size={16} />
              </a>
              <Link
                to="/tpa-method"
                className="inline-flex items-center justify-center gap-2 border border-[#F8FAFC]/20 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white hover:border-[#B7FF00]/50 transition-colors"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
