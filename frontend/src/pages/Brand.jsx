import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CONCEPTS } from "../components/brand/TpaLogos";

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

const Tile = ({ title, children, dark = true, span = "" }) => (
  <div className={`relative border border-[#F8FAFC]/10 overflow-hidden ${span}`}>
    <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] text-[#A7B0BA] z-10">
      {title}
    </div>
    <div
      className={`flex items-center justify-center p-10 min-h-[180px] ${
        dark ? "bg-[#0A1220]" : "bg-white"
      }`}
    >
      {children}
    </div>
  </div>
);

const ConceptBlock = ({ concept, index }) => {
  const { name, tagline, description, Mark, Lockup, Avatar, Favicon } = concept;
  return (
    <section
      data-testid={`concept-${concept.id}`}
      className="border-t border-[#F8FAFC]/10 py-16 md:py-24 px-5 md:px-10"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 items-end">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[#C6FF00] mb-4">
              Concept {String(index + 1).padStart(2, "0")} — {tagline}
            </div>
            <h2 className="font-anton uppercase text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95]">
              {name}
            </h2>
            <p className="mt-5 max-w-2xl text-base text-[#A7B0BA] leading-relaxed">
              {description}
            </p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="inline-flex items-center gap-3 border border-[#F8FAFC]/10 px-5 py-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6FF00]">
                Pick this one
              </span>
              <span className="font-anton text-2xl text-white">→ {concept.id.toUpperCase()}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4">
          <Tile title="Lockup · Dark" span="lg:col-span-8">
            <Lockup theme="dark" height={64} />
          </Tile>
          <Tile title="Avatar · Dark" span="lg:col-span-4">
            <Avatar size={160} theme="dark" />
          </Tile>

          <Tile title="Lockup · Light" dark={false} span="lg:col-span-8">
            <Lockup theme="light" height={64} />
          </Tile>
          <Tile title="Avatar · Light" dark={false} span="lg:col-span-4">
            <Avatar size={160} theme="light" />
          </Tile>

          <Tile title="Icon · 96px" span="lg:col-span-3">
            <Mark size={96} />
          </Tile>
          <Tile title="Icon · 48px" span="lg:col-span-3">
            <Mark size={48} />
          </Tile>
          <Tile title="Icon · 24px" span="lg:col-span-3">
            <Mark size={24} />
          </Tile>
          <Tile title="Favicon · 16px" span="lg:col-span-3">
            <Favicon size={16} />
          </Tile>
        </div>

        {/* Real-world contexts */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {/* Nav preview */}
          <Tile title="Navbar Preview">
            <div className="w-full flex items-center justify-between px-4 py-3 bg-[#0A1220] border border-white/5">
              <Lockup theme="dark" height={28} />
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                · Home
              </span>
            </div>
          </Tile>
          {/* Jersey/Merch preview */}
          <Tile title="Jersey · Apparel">
            <div className="w-full aspect-[4/3] bg-[#111827] flex items-center justify-center border border-white/5">
              <Mark size={64} />
            </div>
          </Tile>
          {/* Social card preview */}
          <Tile title="Social · Report Cover">
            <div className="w-full aspect-square bg-[#0A1220] flex flex-col items-center justify-center gap-3 p-4">
              <Avatar size={80} theme="dark" />
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#C6FF00]">
                @tennisproanalysis
              </div>
            </div>
          </Tile>
        </div>
      </div>
    </section>
  );
};

export default function Brand() {
  return (
    <div data-testid="page-brand" className="pt-24 md:pt-32">
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
            Vector logo system for Tennis Pro Analysis — built for website, mobile,
            social, uniforms, reports, video and merchandise. Each concept is shown
            in every variant required for production: lockup, icon-only, dark and
            light backgrounds, favicon and social avatar.
          </p>
          <div className="mt-12">
            <SwatchRow />
          </div>
        </div>
      </section>

      {CONCEPTS.map((c, i) => (
        <ConceptBlock key={c.id} concept={c} index={i} />
      ))}

      <section className="border-t border-[#F8FAFC]/10 py-16 md:py-20 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="text-[11px] uppercase tracking-[0.34em] text-[#C6FF00] mb-4">
                Next step
              </div>
              <h2 className="font-anton uppercase text-4xl md:text-5xl text-white leading-[0.95]">
                Tell me which concept to ship.
              </h2>
              <p className="mt-5 max-w-2xl text-[#A7B0BA]">
                Reply with <span className="text-white font-semibold">C1</span>,{" "}
                <span className="text-white font-semibold">C2</span>, or{" "}
                <span className="text-white font-semibold">C3</span> (or a hybrid —
                e.g. "C2 mark + C3 wordmark") and I'll roll the chosen system out across
                the navbar, footer, favicon, social preview, and replace the placeholder
                logo image sitewide.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-2">
              {CONCEPTS.map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between border border-[#F8FAFC]/10 px-4 py-3"
                >
                  <span className="font-anton uppercase text-lg text-white">
                    {c.id.toUpperCase()} · {c.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#A7B0BA]">
                    {c.tagline}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
