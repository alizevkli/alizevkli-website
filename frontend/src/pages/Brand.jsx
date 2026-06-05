import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import {
  CONCEPTS,
  FinalMark,
  FinalWordmark,
  FinalLockup,
  FinalAvatar,
  FinalFavicon,
  FinalMobileHeader,
  FinalLoader,
} from "../components/brand/TpaLogos";

const SwatchRow = () => (
  <div className="flex flex-wrap items-center gap-4 mb-12">
    {[
      { hex: "#0A1220", label: "Ink" },
      { hex: "#111827", label: "Slate" },
      { hex: "#FFFFFF", label: "Paper" },
      { hex: "#C6FF00", label: "Lime" },
      { hex: "#A3FF12", label: "Lime · 2" },
      { hex: "#D7FF4D", label: "Lime · 3" },
      { hex: "#00D4FF", label: "Cyan" },
    ].map((s) => (
      <div key={s.hex} className="flex items-center gap-3">
        <span
          className="w-8 h-8 border border-white/15"
          style={{ background: s.hex }}
        />
        <div className="text-xs uppercase tracking-[0.22em] text-[#A7B0BA]">
          <div className="text-white/90">{s.label}</div>
          <div className="opacity-70">{s.hex}</div>
        </div>
      </div>
    ))}
  </div>
);

const Tile = ({ title, children, dark = true, span = "", minH = 180 }) => (
  <div className={`relative border border-[#F8FAFC]/10 overflow-hidden ${span}`}>
    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#A7B0BA]">{title}</span>
    </div>
    <div
      className={`flex items-center justify-center p-8 ${dark ? "bg-[#0A1220]" : "bg-white"}`}
      style={{ minHeight: minH }}
    >
      {children}
    </div>
  </div>
);

const VariantGrid = ({ concept }) => {
  const { Mark, Lockup, Avatar, Favicon } = concept;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      <Tile title="Main · Dark" span="md:col-span-2">
        <Lockup theme="dark" height={56} />
      </Tile>
      <Tile title="Main · Light" dark={false} span="md:col-span-2">
        <Lockup theme="light" height={56} />
      </Tile>

      <Tile title="Horizontal · Dark" span="md:col-span-2">
        <Lockup theme="dark" height={40} />
      </Tile>
      <Tile title="Mobile Header" span="md:col-span-2">
        <div className="w-full flex items-center justify-between px-3 py-2 bg-[#0A1220] border border-white/5">
          <Lockup theme="dark" height={22} />
          <span className="text-white/40 text-xs">≡</span>
        </div>
      </Tile>

      <Tile title="Icon · 96">
        <Mark size={96} />
      </Tile>
      <Tile title="Icon · 48">
        <Mark size={48} />
      </Tile>
      <Tile title="Favicon · 32">
        <Favicon size={32} />
      </Tile>
      <Tile title="Social Avatar">
        <Avatar size={140} theme="dark" />
      </Tile>
    </div>
  );
};

const ContextGrid = ({ concept }) => {
  const { Lockup, Mark, Avatar } = concept;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
      {/* Navbar */}
      <Tile title="Website Navbar" minH={120}>
        <div className="w-full flex items-center justify-between px-4 py-3 bg-[#0A1220] border border-white/5">
          <Lockup theme="dark" height={26} />
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">Home · TPA · Contact</span>
        </div>
      </Tile>
      {/* Hero */}
      <Tile title="Hero Section" minH={180}>
        <div className="text-center">
          <Lockup theme="dark" height={36} />
          <div className="mt-4 font-anton text-2xl text-white uppercase">
            Tennis Performance<span className="text-[#C6FF00]">.</span>
          </div>
          <div className="font-anton text-2xl text-white uppercase">
            Measured<span className="text-[#C6FF00]">.</span>
          </div>
        </div>
      </Tile>
      {/* Mobile menu */}
      <Tile title="Mobile Menu" minH={180}>
        <div className="w-44 bg-[#0A1220] border border-white/10 p-4">
          <Lockup theme="dark" height={22} />
          <ul className="mt-4 space-y-2 text-white/90 font-anton uppercase text-sm">
            <li>Home</li>
            <li>TPA</li>
            <li>Baseline Vision</li>
            <li>Contact</li>
          </ul>
        </div>
      </Tile>
      {/* Video watermark */}
      <Tile title="Video Watermark" minH={180}>
        <div className="relative w-full aspect-video bg-[#111827] flex items-end justify-end p-3 border border-white/5">
          <div className="absolute inset-0 flex items-center justify-center text-[#A7B0BA] text-[10px] uppercase tracking-[0.3em]">
            ▷ Match Reel
          </div>
          <Mark size={32} />
        </div>
      </Tile>
      {/* Report cover */}
      <Tile title="Performance Report" minH={180}>
        <div className="w-full aspect-[4/5] max-w-[140px] bg-[#0A1220] border border-white/10 p-3 flex flex-col">
          <Lockup theme="dark" height={16} />
          <div className="mt-auto">
            <div className="text-[8px] uppercase tracking-[0.25em] text-[#C6FF00]">Match Report</div>
            <div className="font-anton text-sm text-white uppercase leading-tight mt-1">
              Player ·<br />Session 04
            </div>
          </div>
        </div>
      </Tile>
      {/* Social profile */}
      <Tile title="Social Profile" minH={180}>
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Avatar size={80} theme="dark" />
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#C6FF00]">
            @tennisproanalysis
          </div>
          <div className="text-[10px] text-[#A7B0BA]">Tennis Pro Analysis</div>
        </div>
      </Tile>
    </div>
  );
};

const conceptLogic = {
  c1: "Reads first as analytics — frame + curve + data-points. Strongest as a brand mark for the Baseline Vision sub-product, performance reports, and technical content. Risk: less iconic at favicon size because the curve is complex.",
  c2: "Reads first as athletic — silhouette + accent line. Strongest in hero billboards, video covers, jerseys, and any context where the brand competes with sports-tech players. Risk: the chevron alone is generic without the wordmark.",
  c3: "Reads first as a brand-system mark — a proprietary TPA glyph in a badge. Strongest as the app icon, social avatar, and merchandise stamp. Risk: badge format can feel club-like if executed lazily — the precise letter geometry has to do the heavy lifting.",
};

const ConceptBlock = ({ concept, index }) => {
  const { name, tagline, description, id } = concept;
  return (
    <section
      data-testid={`concept-${id}`}
      className="border-t border-[#F8FAFC]/10 py-16 md:py-20 px-5 md:px-10"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#C6FF00] mb-4">
              Concept {String(index + 1).padStart(2, "0")} — {tagline}
            </div>
            <h2 className="font-anton uppercase text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95]">
              {name}
            </h2>
            <p className="mt-5 max-w-2xl text-base text-[#A7B0BA] leading-relaxed">
              {description}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="border-l-2 border-[#C6FF00] pl-5 py-2">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#C6FF00] mb-2">
                Design Logic
              </div>
              <p className="text-sm text-white/85 leading-relaxed">{conceptLogic[id]}</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#A7B0BA] mb-4">
            Variant Set
          </div>
          <VariantGrid concept={concept} />
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#A7B0BA] mb-4">
            In Context
          </div>
          <ContextGrid concept={concept} />
        </div>
      </div>
    </section>
  );
};

const RECOMMENDATIONS = [
  { use: "Elite coaching", winner: "C2 · Apex", why: "Athletic, confident, sits next to ATP/WTA-grade language without competing with it." },
  { use: "Performance analysis", winner: "C1 · Signal", why: "Reads as analytics first — the captured curve + data points telegraph the discipline immediately." },
  { use: "Baseline Vision analytics", winner: "C1 · Signal", why: "Best lockup for sub-product surfaces, reports, dashboard headers and data exports." },
  { use: "International growth", winner: "C3 · Monogram", why: "Language-agnostic, single-glyph, app-icon-ready — travels across markets without depending on the English wordmark." },
];

const RecommendationTable = () => (
  <section className="border-t border-[#F8FAFC]/10 py-16 md:py-20 px-5 md:px-10">
    <div className="max-w-[1400px] mx-auto">
      <div className="text-[11px] uppercase tracking-[0.34em] text-[#C6FF00] mb-4">
        Recommendations
      </div>
      <h2 className="font-anton uppercase text-4xl md:text-5xl text-white leading-[0.95]">
        Concept by use-case.
      </h2>
      <p className="mt-5 max-w-2xl text-[#A7B0BA]">
        Each concept wins a different context. The final mark below merges the
        three strengths into one system.
      </p>

      <div className="mt-10 border border-[#F8FAFC]/10">
        <div className="grid grid-cols-12 gap-4 px-5 py-4 bg-[#0B1F33]/60 text-[10px] uppercase tracking-[0.3em] text-[#C6FF00]">
          <div className="col-span-4">Use Case</div>
          <div className="col-span-3">Winner</div>
          <div className="col-span-5">Why</div>
        </div>
        {RECOMMENDATIONS.map((r) => (
          <div
            key={r.use}
            className="grid grid-cols-12 gap-4 px-5 py-5 border-t border-[#F8FAFC]/10 items-start"
          >
            <div className="col-span-12 md:col-span-4 font-anton uppercase text-xl text-white">
              {r.use}
            </div>
            <div className="col-span-12 md:col-span-3 text-[#C6FF00] font-bold text-sm uppercase tracking-[0.22em]">
              {r.winner}
            </div>
            <div className="col-span-12 md:col-span-5 text-sm text-[#A7B0BA] leading-relaxed">
              {r.why}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalSection = () => (
  <section
    data-testid="concept-final"
    className="relative border-t border-[#F8FAFC]/10 py-20 md:py-28 px-5 md:px-10 overflow-hidden"
  >
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent, transparent 16px, rgba(198,255,0,0.5) 16px, rgba(198,255,0,0.5) 17px)",
      }}
    />
    <div className="relative max-w-[1400px] mx-auto">
      <div className="text-[11px] uppercase tracking-[0.34em] text-[#C6FF00] mb-4">
        Final · TPA Apex Signal
      </div>
      <h2 className="font-anton uppercase text-5xl md:text-6xl lg:text-7xl text-white leading-[0.92]">
        One mark.<br />Three signals.
      </h2>
      <p className="mt-6 max-w-3xl text-base md:text-lg text-[#A7B0BA] leading-relaxed">
        A custom <strong className="text-white">A</strong> — the brand's anchor letter
        (<em>Analysis · Apex · Ali</em>) — built as two thick angular legs with a lime
        cross-line cutting through the form (the analysis insight) and a precision
        lime data-point at the summit. Inherits the <strong className="text-white">monogram</strong>{" "}
        proprietorship of C3, the <strong className="text-white">apex</strong> athleticism
        of C2, and the <strong className="text-white">data-signal</strong> language of C1.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
        <Tile title="Master · Dark" span="md:col-span-7" minH={220}>
          <FinalLockup theme="dark" height={64} />
        </Tile>
        <Tile title="Stack · Dark" span="md:col-span-5" minH={220}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <FinalMark size={56} />
            <FinalWordmark variant="stack" height={56} />
          </div>
        </Tile>

        <Tile title="Master · Light" dark={false} span="md:col-span-7" minH={180}>
          <FinalLockup theme="light" height={56} />
        </Tile>
        <Tile title="Mobile Header" span="md:col-span-5" minH={180}>
          <div className="w-full flex items-center justify-between px-4 py-3 bg-[#0A1220] border border-white/5">
            <FinalMobileHeader theme="dark" />
            <span className="text-white/40 text-xs">≡</span>
          </div>
        </Tile>

        <Tile title="Icon · 96"><FinalMark size={96} /></Tile>
        <Tile title="Icon · 48"><FinalMark size={48} /></Tile>
        <Tile title="Favicon · 32"><FinalFavicon size={32} /></Tile>
        <Tile title="Social Avatar"><FinalAvatar size={140} /></Tile>

        {/* Contexts */}
        <Tile title="Hero" span="md:col-span-4" minH={220}>
          <div className="text-center">
            <FinalMark size={56} />
            <div className="mt-5 font-anton text-3xl text-white uppercase leading-none">
              Tennis Performance<span className="text-[#C6FF00]">.</span>
            </div>
            <div className="font-anton text-3xl text-white uppercase leading-none">
              Measured<span className="text-[#C6FF00]">.</span>
            </div>
          </div>
        </Tile>
        <Tile title="Video Watermark" span="md:col-span-4" minH={220}>
          <div className="relative w-full aspect-video bg-[#111827] border border-white/5">
            <div className="absolute inset-0 flex items-center justify-center text-[#A7B0BA] text-[10px] uppercase tracking-[0.3em]">
              ▷ Baseline Vision · Match 04
            </div>
            <div className="absolute bottom-2 right-2">
              <FinalMark size={28} />
            </div>
          </div>
        </Tile>
        <Tile title="Loading Screen" span="md:col-span-4" minH={220}>
          <FinalLoader size={64} />
        </Tile>

        <Tile title="Performance Report Cover" span="md:col-span-5" minH={260}>
          <div className="w-full max-w-[200px] aspect-[3/4] bg-[#0A1220] border border-white/10 p-4 flex flex-col">
            <FinalLockup theme="dark" height={20} />
            <div className="mt-auto">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#C6FF00]">Match Report · 04</div>
              <div className="font-anton text-xl text-white uppercase leading-tight mt-1">
                Performance<br />
                Read-out<span className="text-[#C6FF00]">.</span>
              </div>
              <div className="mt-3 h-px bg-[#C6FF00]/40" />
            </div>
          </div>
        </Tile>
        <Tile title="OG Share Card · 1200×630" span="md:col-span-7" minH={260}>
          <div
            className="w-full aspect-[1200/630] bg-[#0A1220] border border-white/10 relative overflow-hidden"
            style={{ maxWidth: 420 }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(198,255,0,0.2) 14px, rgba(198,255,0,0.2) 15px)",
              }}
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <FinalLockup theme="dark" height={22} />
              <div>
                <div className="font-anton uppercase text-lg text-white leading-tight">
                  Tennis Performance<span className="text-[#C6FF00]">.</span><br />
                  Measured<span className="text-[#C6FF00]">.</span>
                </div>
                <div className="text-[8px] uppercase tracking-[0.3em] text-[#A7B0BA] mt-2">
                  By Ali Zevkli · @tennisproanalysis
                </div>
              </div>
            </div>
          </div>
        </Tile>
      </div>

      <div className="mt-12 border border-[#C6FF00]/40 p-6 md:p-7 flex items-start gap-4 bg-[#0B1F33]/40">
        <Check size={20} className="text-[#C6FF00] mt-0.5 shrink-0" />
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#C6FF00] mb-2">
            Deployed
          </div>
          <p className="text-sm md:text-base text-white/90 leading-relaxed">
            The final <strong>TPA · Apex Signal</strong> mark has been rolled out across
            the navbar, footer, mobile menu, favicon, Open Graph share image, website
            loading screen and video placeholder branding. Reload any page to see it live.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default function Brand() {
  return (
    <div data-testid="page-brand" className="pt-24 md:pt-32 bg-[#0A1220]">
      <section className="px-5 md:px-10 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#A7B0BA] hover:text-[#C6FF00] transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Back to home
          </Link>
          <div className="text-[11px] uppercase tracking-[0.34em] text-[#C6FF00] mb-5">
            Brand Identity · Logo System
          </div>
          <h1 className="font-anton uppercase text-5xl md:text-7xl text-white leading-[0.92] max-w-5xl">
            Three concepts.<br />
            One performance brand.
          </h1>
          <p className="mt-6 max-w-3xl text-base md:text-lg text-[#A7B0BA] leading-relaxed">
            A complete vector logo system for Tennis Pro Analysis — engineered to feel
            like Catapult, Hudl, Whoop and Formula 1 analytics, not a local tennis
            club. Each concept ships in every variant required for production: main
            lockup, horizontal, icon-only, favicon, dark and light backgrounds, mobile
            header and social avatar — plus six real-world contexts.
          </p>
          <div className="mt-12">
            <SwatchRow />
          </div>
        </div>
      </section>

      {CONCEPTS.map((c, i) => (
        <ConceptBlock key={c.id} concept={c} index={i} />
      ))}

      <RecommendationTable />
      <FinalSection />
    </div>
  );
}
