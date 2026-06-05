// Tennis Pro Analysis — Logo System
// Three distinct concepts. Pure SVG, vector, scalable from favicon to billboard.
// Palette:
//   Ink     #0A1220 (deep navy)
//   Slate   #111827
//   Paper   #FFFFFF
//   Lime    #C6FF00 (primary accent)
//   Cyan    #00D4FF (optional secondary)

const INK = "#0A1220";
const SLATE = "#111827";
const PAPER = "#FFFFFF";
const LIME = "#C6FF00";

/* ============================================================
 * CONCEPT 1 — SIGNAL
 * Performance intelligence. Shot-trajectory curve + data points
 * inside an asymmetric chamfered frame. Reads as motion tracking
 * captured into structured data.
 * ============================================================ */

export const C1Mark = ({ size = 64, color = PAPER, accent = LIME, className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="TPA — Signal mark"
  >
    {/* asymmetric chamfered frame */}
    <path
      d="M2 2 H48 L62 16 V62 H2 Z"
      fill="none"
      stroke={color}
      strokeWidth="2"
    />
    {/* baseline */}
    <line x1="2" y1="54" x2="62" y2="54" stroke={color} strokeWidth="1" opacity="0.35" />
    {/* trajectory curve - bottom-left to top-right */}
    <path
      d="M8 50 C 18 50, 22 16, 56 22"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="square"
    />
    {/* data points along the curve */}
    <circle cx="16" cy="46" r="1.6" fill={accent} />
    <circle cx="28" cy="26" r="1.6" fill={accent} />
    <circle cx="44" cy="20" r="2.6" fill={accent} />
    <circle cx="56" cy="22" r="1.6" fill={accent} />
    {/* corner tick */}
    <rect x="48" y="2" width="14" height="2" fill={accent} />
  </svg>
);

export const C1Wordmark = ({ color = PAPER, accent = LIME, height = 28 }) => (
  <svg
    viewBox="0 0 360 64"
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="TENNIS PRO ANALYSIS"
    style={{ display: "block" }}
  >
    <text
      x="0"
      y="42"
      fontFamily="'Archivo Black', 'Inter', sans-serif"
      fontSize="40"
      letterSpacing="-1"
      fill={color}
    >
      TENNIS PRO
    </text>
    <text
      x="0"
      y="62"
      fontFamily="'Inter', sans-serif"
      fontSize="12"
      letterSpacing="6"
      fill={accent}
    >
      A · N · A · L · Y · S · I · S
    </text>
  </svg>
);

export const C1Lockup = ({ theme = "dark", height = 56 }) => {
  const isDark = theme === "dark";
  const color = isDark ? PAPER : INK;
  return (
    <div
      style={{ display: "inline-flex", alignItems: "center", gap: 18, height }}
    >
      <C1Mark size={height} color={color} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <C1Wordmark color={color} accent={LIME} height={height * 0.55} />
      </div>
    </div>
  );
};

export const C1Avatar = ({ size = 200, theme = "dark" }) => {
  const bg = theme === "dark" ? INK : PAPER;
  const fg = theme === "dark" ? PAPER : INK;
  return (
    <div
      style={{
        width: size,
        height: size,
        background: bg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 0,
      }}
    >
      <C1Mark size={size * 0.62} color={fg} accent={LIME} />
    </div>
  );
};

export const C1Favicon = ({ size = 64 }) => (
  <div
    style={{
      width: size,
      height: size,
      background: INK,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <C1Mark size={size * 0.72} color={PAPER} accent={LIME} />
  </div>
);

/* ============================================================
 * CONCEPT 2 — APEX
 * Elite athlete. Bold geometric chevron mark — a peak with an
 * embedded analysis line. Confident, professional, made for a
 * brand that consults at ATP/WTA level.
 * ============================================================ */

export const C2Mark = ({ size = 64, color = PAPER, accent = LIME, className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="TPA — Apex mark"
  >
    {/* outer chevron */}
    <polygon
      points="32,4 60,56 44,56 32,32 20,56 4,56"
      fill={color}
    />
    {/* inner cut — negative space */}
    <polygon points="32,22 38,34 26,34" fill={INK} />
    {/* analysis line slicing through the chevron */}
    <rect x="2" y="48" width="60" height="3" fill={accent} />
    {/* apex data point */}
    <circle cx="32" cy="6" r="2.8" fill={accent} />
  </svg>
);

export const C2Wordmark = ({ color = PAPER, accent = LIME, height = 28 }) => (
  <svg
    viewBox="0 0 360 64"
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="TENNIS PRO ANALYSIS"
    style={{ display: "block" }}
  >
    <text
      x="0"
      y="44"
      fontFamily="'Anton', sans-serif"
      fontSize="46"
      letterSpacing="2"
      fill={color}
    >
      TENNIS PRO ANALYSIS
    </text>
    <line x1="0" y1="56" x2="64" y2="56" stroke={accent} strokeWidth="3" />
  </svg>
);

export const C2Lockup = ({ theme = "dark", height = 56 }) => {
  const isDark = theme === "dark";
  const color = isDark ? PAPER : INK;
  return (
    <div
      style={{ display: "inline-flex", alignItems: "center", gap: 18, height }}
    >
      <C2Mark size={height} color={color} />
      <C2Wordmark color={color} accent={LIME} height={height * 0.55} />
    </div>
  );
};

export const C2Avatar = ({ size = 200, theme = "dark" }) => {
  const bg = theme === "dark" ? INK : PAPER;
  const fg = theme === "dark" ? PAPER : INK;
  return (
    <div
      style={{
        width: size,
        height: size,
        background: bg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <C2Mark size={size * 0.6} color={fg} accent={LIME} />
    </div>
  );
};

export const C2Favicon = ({ size = 64 }) => (
  <div
    style={{
      width: size,
      height: size,
      background: INK,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <C2Mark size={size * 0.72} color={PAPER} accent={LIME} />
  </div>
);

/* ============================================================
 * CONCEPT 3 — TPA MONOGRAM
 * A custom interlocked TPA letterform set inside a rounded-square
 * badge. Distinctive icon, app-icon and social-avatar ready.
 * ============================================================ */

export const C3Mark = ({ size = 64, color = INK, accent = LIME, fg = PAPER, className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="TPA — Monogram"
  >
    {/* badge */}
    <rect x="0" y="0" width="64" height="64" rx="6" fill={color} />
    {/* T */}
    <g fill={fg}>
      <rect x="6" y="14" width="18" height="4.5" />
      <rect x="13" y="14" width="4.5" height="26" />
    </g>
    {/* P */}
    <g fill={fg}>
      <rect x="25" y="14" width="4.5" height="26" />
      <path
        d="M 29.5 14 L 38 14 Q 44 14 44 21 Q 44 28 38 28 L 29.5 28 L 29.5 23.5 L 37 23.5 Q 39.5 23.5 39.5 21 Q 39.5 18.5 37 18.5 L 29.5 18.5 Z"
      />
    </g>
    {/* A */}
    <g fill={fg}>
      <path d="M 45 40 L 51 14 L 55 14 L 61 40 L 56.5 40 L 55.4 35 L 50.6 35 L 49.5 40 Z M 51.4 30.8 L 54.6 30.8 L 53 23 Z" />
    </g>
    {/* accent under-stroke */}
    <rect x="6" y="50" width="40" height="3" fill={accent} />
    {/* dot detail */}
    <circle cx="55" cy="51.5" r="2.4" fill={accent} />
  </svg>
);

export const C3Wordmark = ({ color = PAPER, accent = LIME, height = 28 }) => (
  <svg
    viewBox="0 0 320 56"
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="TENNIS PRO ANALYSIS"
    style={{ display: "block" }}
  >
    <text
      x="0"
      y="32"
      fontFamily="'Space Grotesk', 'Inter', sans-serif"
      fontWeight="700"
      fontSize="28"
      letterSpacing="3"
      fill={color}
    >
      TENNIS PRO
    </text>
    <text
      x="0"
      y="52"
      fontFamily="'Space Grotesk', 'Inter', sans-serif"
      fontWeight="500"
      fontSize="12"
      letterSpacing="8"
      fill={accent}
    >
      ANALYSIS
    </text>
  </svg>
);

export const C3Lockup = ({ theme = "dark", height = 56 }) => {
  const isDark = theme === "dark";
  const color = isDark ? PAPER : INK;
  return (
    <div
      style={{ display: "inline-flex", alignItems: "center", gap: 16, height }}
    >
      <C3Mark size={height} color={INK} fg={PAPER} accent={LIME} />
      <C3Wordmark color={color} accent={LIME} height={height * 0.55} />
    </div>
  );
};

export const C3Avatar = ({ size = 200 }) => (
  <C3Mark size={size} color={INK} fg={PAPER} accent={LIME} />
);

export const C3Favicon = ({ size = 64 }) => (
  <C3Mark size={size} color={INK} fg={PAPER} accent={LIME} />
);

/* Concept registry */
export const CONCEPTS = [
  {
    id: "c1",
    name: "Signal",
    tagline: "Performance Intelligence",
    description:
      "An asymmetric chamfered frame containing a captured shot-trajectory curve and structured data points. Reads as motion tracking compressed into actionable signal.",
    Mark: C1Mark,
    Wordmark: C1Wordmark,
    Lockup: C1Lockup,
    Avatar: C1Avatar,
    Favicon: C1Favicon,
  },
  {
    id: "c2",
    name: "Apex",
    tagline: "Elite Athlete",
    description:
      "A bold geometric chevron — a peak with an analysis line slicing across the base and a precision data-point at the summit. Confident, professional, ATP/WTA-grade.",
    Mark: C2Mark,
    Wordmark: C2Wordmark,
    Lockup: C2Lockup,
    Avatar: C2Avatar,
    Favicon: C2Favicon,
  },
  {
    id: "c3",
    name: "TPA Monogram",
    tagline: "Custom Brand Mark",
    description:
      "A custom interlocked TPA letterform set inside a precision rounded-square badge with a lime under-stroke. Distinctive, instantly recognisable, designed to live as an app icon and social-profile avatar.",
    Mark: C3Mark,
    Wordmark: C3Wordmark,
    Lockup: C3Lockup,
    Avatar: C3Avatar,
    Favicon: C3Favicon,
  },
];

/* ============================================================
 * FINAL — TPA · APEX SIGNAL
 * The synthesis. Strongest elements from all three concepts:
 *   • Custom proprietary letterform (from C3 — ownership)
 *   • Bold geometric apex silhouette (from C2 — elite athletic)
 *   • Lime data line + signal dot (from C1 — analytics/tech)
 *
 * The mark is a custom "A" — the brand's anchor letter (Analysis,
 * Apex, Ali) — built as two thick angular legs with a lime
 * cross-line (the analysis insight cutting through the form) and
 * a precision lime data-point sitting at the apex.
 * ============================================================ */

export const FinalMark = ({
  size = 64,
  color = PAPER,
  accent = LIME,
  className = "",
  withDot = true,
  withCorner = true,
}) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Tennis Pro Analysis"
  >
    <g strokeLinecap="square">
      {/* Left leg */}
      <line x1="32" y1="8" x2="6" y2="58" stroke={color} strokeWidth="7" />
      {/* Right leg */}
      <line x1="32" y1="8" x2="58" y2="58" stroke={color} strokeWidth="7" />
      {/* Lime cross-line — the analysis insight */}
      <line x1="16" y1="42" x2="48" y2="42" stroke={accent} strokeWidth="5" />
    </g>
    {/* Precision data point at the apex */}
    {withDot && <circle cx="32" cy="5" r="3.2" fill={accent} />}
    {/* Optional corner tick — reads as report / readout */}
    {withCorner && (
      <g fill={accent}>
        <rect x="56" y="58" width="6" height="2" />
        <rect x="60" y="54" width="2" height="6" />
      </g>
    )}
  </svg>
);

export const FinalWordmark = ({
  color = PAPER,
  accent = LIME,
  height = 28,
  variant = "row", // 'row' | 'stack'
}) => {
  if (variant === "stack") {
    return (
      <svg
        viewBox="0 0 240 80"
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="TENNIS PRO ANALYSIS"
        style={{ display: "block" }}
      >
        <text
          x="0"
          y="38"
          fontFamily="'Anton', sans-serif"
          fontSize="44"
          letterSpacing="2"
          fill={color}
        >
          TENNIS PRO
        </text>
        <text
          x="0"
          y="68"
          fontFamily="'Space Grotesk', 'Inter', sans-serif"
          fontWeight="600"
          fontSize="15"
          letterSpacing="10"
          fill={accent}
        >
          ANALYSIS
        </text>
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 420 56"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TENNIS PRO ANALYSIS"
      style={{ display: "block" }}
    >
      <text
        x="0"
        y="38"
        fontFamily="'Anton', sans-serif"
        fontSize="44"
        letterSpacing="2"
        fill={color}
      >
        TENNIS PRO
      </text>
      <text
        x="222"
        y="38"
        fontFamily="'Anton', sans-serif"
        fontSize="44"
        letterSpacing="2"
        fill={accent}
      >
        ANALYSIS
      </text>
    </svg>
  );
};

export const FinalLockup = ({ theme = "dark", height = 48, wordmark = "row" }) => {
  const isDark = theme === "dark";
  const color = isDark ? PAPER : INK;
  return (
    <div
      style={{ display: "inline-flex", alignItems: "center", gap: 16, height }}
    >
      <FinalMark size={height} color={color} accent={LIME} />
      <FinalWordmark
        color={color}
        accent={LIME}
        height={height * (wordmark === "stack" ? 0.95 : 0.62)}
        variant={wordmark}
      />
    </div>
  );
};

export const FinalAvatar = ({ size = 200, theme = "dark" }) => {
  const bg = theme === "dark" ? INK : PAPER;
  const fg = theme === "dark" ? PAPER : INK;
  return (
    <div
      style={{
        width: size,
        height: size,
        background: bg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FinalMark size={size * 0.6} color={fg} accent={LIME} />
    </div>
  );
};

export const FinalFavicon = ({ size = 64 }) => (
  <div
    style={{
      width: size,
      height: size,
      background: INK,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <FinalMark size={size * 0.72} color={PAPER} accent={LIME} withCorner={false} />
  </div>
);

// Mobile header — single-line compact lockup
export const FinalMobileHeader = ({ theme = "dark" }) => {
  const color = theme === "dark" ? PAPER : INK;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <FinalMark size={28} color={color} accent={LIME} withCorner={false} />
      <span
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: 18,
          letterSpacing: 1.5,
          color,
          textTransform: "uppercase",
        }}
      >
        Tennis Pro <span style={{ color: LIME }}>Analysis</span>
      </span>
    </div>
  );
};

export const FinalLoader = ({ size = 80 }) => (
  <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
    <FinalMark size={size} color={PAPER} accent={LIME} withCorner={false} />
    <div
      style={{
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        fontSize: 10,
        letterSpacing: 8,
        color: "#A7B0BA",
        textTransform: "uppercase",
      }}
    >
      Tennis · Pro · Analysis
    </div>
  </div>
);
