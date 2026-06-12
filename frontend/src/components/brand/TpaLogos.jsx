// Tennis Pro Analysis — Official Logo System
// Locked brand direction:
// Desktop: compact circular A mark + Tennis Pro Analysis wordmark
// Very small mobile: compact circular A mark only

const INK = "#06141F";
const INK_2 = "#0A1220";
const PAPER = "#FFFFFF";
const LIME = "#B7FF00";
const MUTED = "#A7B0BA";

export const FinalMark = ({
  size = 64,
  className = "",
  showText = false,
  withBackground = true,
}) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Tennis Pro Analysis logo"
    style={{ display: "block", flexShrink: 0 }}
  >
    <defs>
      <radialGradient id="tpa-bg" cx="50%" cy="35%" r="70%">
        <stop offset="0%" stopColor="#10243A" />
        <stop offset="65%" stopColor={INK} />
        <stop offset="100%" stopColor="#02070C" />
      </radialGradient>
      <linearGradient id="tpa-lime" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D7FF3F" />
        <stop offset="55%" stopColor={LIME} />
        <stop offset="100%" stopColor="#73C900" />
      </linearGradient>
      <filter id="tpa-soft-glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {withBackground && (
      <>
        <circle cx="128" cy="128" r="124" fill="url(#tpa-bg)" />
        <circle
          cx="128"
          cy="128"
          r="117"
          fill="none"
          stroke="url(#tpa-lime)"
          strokeWidth="3"
          opacity="0.9"
        />
        <path
          d="M54 128 H202 M128 36 V218 M82 184 L101 82 H155 L174 184"
          stroke="#FFFFFF"
          strokeWidth="1"
          opacity="0.08"
          fill="none"
        />
      </>
    )}

    {/* Motion lines */}
    <path d="M39 112 H81 L76 122 H38 Z" fill="url(#tpa-lime)" opacity="0.95" />
    <path d="M31 132 H78 L73 142 H30 Z" fill="url(#tpa-lime)" opacity="0.9" />
    <path d="M45 152 H76 L71 162 H44 Z" fill="url(#tpa-lime)" opacity="0.85" />

    {/* Tennis ball core */}
    <circle cx="132" cy="134" r="31" fill="url(#tpa-lime)" opacity="0.92" />
    <path
      d="M111 152 C121 139, 129 130, 134 114"
      stroke={INK_2}
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      opacity="0.95"
    />
    <path
      d="M150 115 C142 129, 138 141, 139 158"
      stroke={INK_2}
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      opacity="0.95"
    />

    {/* Official A mark */}
    <path
      d="M78 181 L128 45 L178 181"
      fill="none"
      stroke={PAPER}
      strokeWidth="18"
      strokeLinecap="square"
      strokeLinejoin="miter"
      filter="url(#tpa-soft-glow)"
    />
    <path
      d="M94 145 H162"
      stroke="url(#tpa-lime)"
      strokeWidth="13"
      strokeLinecap="square"
    />

    {/* Swoosh / analysis curve */}
    <path
      d="M69 195 C104 167, 145 155, 196 162"
      fill="none"
      stroke="url(#tpa-lime)"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M71 197 C111 177, 152 166, 207 168"
      fill="none"
      stroke={PAPER}
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.95"
    />

    {/* Apex tennis/data point */}
    <circle cx="128" cy="45" r="9" fill="url(#tpa-lime)" />
    <path
      d="M122 44 C126 39, 132 39, 136 44 M120 49 C126 54, 132 54, 138 49"
      stroke={PAPER}
      strokeWidth="2"
      fill="none"
      opacity="0.85"
    />

    {showText && (
      <>
        <text
          x="128"
          y="214"
          textAnchor="middle"
          fontFamily="'Anton', 'Arial Black', sans-serif"
          fontSize="24"
          letterSpacing="2"
          fill={PAPER}
        >
          TENNIS PRO
        </text>
        <text
          x="128"
          y="237"
          textAnchor="middle"
          fontFamily="'Space Grotesk', 'Inter', sans-serif"
          fontWeight="700"
          fontSize="15"
          letterSpacing="6"
          fill={LIME}
        >
          ANALYSIS
        </text>
      </>
    )}
  </svg>
);

export const FinalWordmark = ({
  color = PAPER,
  accent = LIME,
  height = 28,
  variant = "row",
}) => {
  if (variant === "stack") {
    return (
      <svg
        viewBox="0 0 260 82"
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Tennis Pro Analysis"
        style={{ display: "block" }}
      >
        <text
          x="0"
          y="38"
          fontFamily="'Anton', sans-serif"
          fontSize="42"
          letterSpacing="2"
          fill={color}
        >
          TENNIS PRO
        </text>
        <text
          x="0"
          y="68"
          fontFamily="'Space Grotesk', 'Inter', sans-serif"
          fontWeight="700"
          fontSize="15"
          letterSpacing="10"
          fill={color}
        >
          ANALYSIS
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 430 56"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tennis Pro Analysis"
      style={{ display: "block" }}
    >
      <text
        x="0"
        y="38"
        fontFamily="'Anton', sans-serif"
        fontSize="43"
        letterSpacing="2"
        fill={color}
      >
        TENNIS PRO
      </text>
      <text
        x="222"
        y="38"
        fontFamily="'Anton', sans-serif"
        fontSize="43"
        letterSpacing="2"
        fill={color}
      >
        ANALYSIS
      </text>
    </svg>
  );
};

export const FinalLockup = ({
  theme = "dark",
  height = 48,
  wordmark = "row",
  hideTextBelowSm = true,
}) => {
  const color = theme === "dark" ? PAPER : INK;

  return (
    <div
      style={{ display: "inline-flex", alignItems: "center", gap: 12, height }}
    >
      <FinalMark size={height} withBackground={false} showText={false} />
      <span className={hideTextBelowSm ? "hidden sm:block" : ""}>
        <FinalWordmark
          color={color}
          accent={LIME}
          height={height * (wordmark === "stack" ? 0.95 : 0.62)}
          variant={wordmark}
        />
      </span>
    </div>
  );
};

export const FinalAvatar = ({ size = 200 }) => (
  <FinalMark size={size} withBackground={true} showText={true} />
);

export const FinalFavicon = ({ size = 64 }) => (
  <FinalMark size={size} withBackground={true} showText={false} />
);

export const FinalMobileHeader = ({ theme = "dark" }) => {
  const color = theme === "dark" ? PAPER : INK;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <FinalMark size={32} withBackground={true} showText={false} />
      <span
        className="hidden sm:inline"
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: 18,
          letterSpacing: 1.5,
          color,
          textTransform: "uppercase",
        }}
      >
        Tennis Pro Analysis
      </span>
    </div>
  );
};

export const FinalLoader = ({ size = 80 }) => (
  <div
    style={{
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 18,
    }}
  >
    <FinalMark size={size} withBackground={true} showText={false} />
    <div
      style={{
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        fontSize: 10,
        letterSpacing: 8,
        color: MUTED,
        textTransform: "uppercase",
      }}
    >
      Tennis · Pro · Analysis
    </div>
  </div>
);

/* Backward-compatible aliases so existing imports do not break. */
export const C1Mark = FinalMark;
export const C2Mark = FinalMark;
export const C3Mark = FinalMark;
export const C1Wordmark = FinalWordmark;
export const C2Wordmark = FinalWordmark;
export const C3Wordmark = FinalWordmark;
export const C1Lockup = FinalLockup;
export const C2Lockup = FinalLockup;
export const C3Lockup = FinalLockup;
export const C1Avatar = FinalAvatar;
export const C2Avatar = FinalAvatar;
export const C3Avatar = FinalAvatar;
export const C1Favicon = FinalFavicon;
export const C2Favicon = FinalFavicon;
export const C3Favicon = FinalFavicon;

export const CONCEPTS = [
  {
    id: "official",
    name: "Official Circular A",
    tagline: "Tennis Performance Intelligence",
    description:
      "The official Tennis Pro Analysis circular A mark for Australia, Türkiye and Philippines use.",
    Mark: FinalMark,
    Wordmark: FinalWordmark,
    Lockup: FinalLockup,
    Avatar: FinalAvatar,
    Favicon: FinalFavicon,
  },
];