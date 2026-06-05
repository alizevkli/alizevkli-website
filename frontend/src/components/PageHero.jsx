import { Reveal } from "./Reveal";

export const PageHero = ({ eyebrow, title, lead, image, testId = "page-hero" }) => {
  return (
    <section
      data-testid={testId}
      className="relative pt-32 md:pt-40 pb-16 md:pb-24 border-b border-[#F8FAFC]/10 overflow-hidden"
    >
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06141F]/70 via-[#06141F]/85 to-[#06141F]" />
        </>
      )}
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.34em] text-[#B7FF00] mb-5">
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-anton uppercase text-5xl md:text-7xl lg:text-8xl text-white leading-[0.92] max-w-5xl">
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={160}>
            <p className="mt-6 md:mt-8 text-base md:text-lg text-[#A7B0BA] leading-relaxed max-w-2xl">
              {lead}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
};
