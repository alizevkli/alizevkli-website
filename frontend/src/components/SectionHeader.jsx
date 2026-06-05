import { Reveal } from "./Reveal";

export const SectionHeader = ({
  eyebrow,
  title,
  lead,
  align = "left",
  testId,
}) => {
  return (
    <div
      data-testid={testId}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <Reveal>
          <div className="text-[10px] md:text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-5">
            {eyebrow}
          </div>
        </Reveal>
      )}
      {title && (
        <Reveal delay={80}>
          <h2 className="font-anton uppercase text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95]">
            {title}
          </h2>
        </Reveal>
      )}
      {lead && (
        <Reveal delay={160}>
          <p className="mt-6 text-base md:text-lg text-[#A7B0BA] leading-relaxed max-w-2xl">
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
};
