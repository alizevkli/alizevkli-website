export const PlaceholderBlock = ({
  label = "Image placeholder",
  caption,
  className = "",
  testId = "placeholder-block",
}) => (
  <div
    data-testid={testId}
    className={`relative bg-[#0B1F33] border border-[#F8FAFC]/10 overflow-hidden ${className}`}
  >
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(248,250,252,0.05) 14px, rgba(248,250,252,0.05) 28px)",
      }}
    />
    <div className="absolute inset-x-6 top-6 flex items-center justify-between">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00]">
        Tennis Pro Analysis
      </span>
      <span className="w-1.5 h-1.5 bg-[#B7FF00]" />
    </div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      <div className="w-14 h-14 border-2 border-[#B7FF00]/50 flex items-center justify-center mb-4">
        <div className="w-2 h-2 bg-[#B7FF00]" />
      </div>
      <div className="font-anton uppercase text-2xl md:text-3xl text-white/90">
        {label}
      </div>
      {caption && (
        <div className="mt-2 text-xs uppercase tracking-[0.22em] text-[#A7B0BA]">
          {caption}
        </div>
      )}
    </div>
    <div className="absolute bottom-5 left-6 text-[10px] uppercase tracking-[0.3em] text-[#A7B0BA]">
      Photo · coming soon
    </div>
  </div>
);
