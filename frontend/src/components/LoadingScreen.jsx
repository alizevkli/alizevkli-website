import { useEffect, useState } from "react";
import { FinalLoader } from "./brand/TpaLogos";

/**
 * Brief brand splash shown on first load only.
 * CSS keyframes handle the fade; React only handles the unmount and
 * the once-per-session gate via sessionStorage.
 */
export const LoadingScreen = () => {
  const [mounted, setMounted] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.sessionStorage.getItem("tpa-splash-seen");
  });

  useEffect(() => {
    if (!mounted) return;
    const id = window.setTimeout(() => {
      window.sessionStorage.setItem("tpa-splash-seen", "1");
      setMounted(false);
    }, 1400);
    return () => window.clearTimeout(id);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      data-testid="loading-screen"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        background: "#0A1220",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "tpa-splash-fade 1.4s ease-out forwards",
      }}
    >
      <style>{`
        @keyframes tpa-splash-fade {
          0%   { opacity: 1; }
          70%  { opacity: 1; }
          100% { opacity: 0; visibility: hidden; }
        }
      `}</style>
      <FinalLoader size={80} />
    </div>
  );
};
