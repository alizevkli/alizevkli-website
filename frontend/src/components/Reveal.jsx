import { useEffect, useRef, useState } from "react";

export const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`tpa-reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
};
