import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { FinalLockup, FinalMark } from "./brand/TpaLogos";

export const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { to: "/", label: t.nav.home, end: true },
    { to: "/tpa", label: t.nav.tpa },
    { to: "/baseline-vision", label: t.nav.baseline },
    { to: "/coaching", label: t.nav.coaching },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#06141F]/85 border-b border-[#F8FAFC]/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between gap-6">
        <Link
          to="/"
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
          onClick={() => setOpen(false)}
          aria-label="Tennis Pro Analysis — Home"
        >
          <FinalLockup theme="dark" height={36} />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              data-testid={`nav-link-${l.to === "/" ? "home" : l.to.replace("/", "")}`}
              className={({ isActive }) =>
                `tpa-link-underline text-[11px] font-medium uppercase tracking-[0.28em] transition-colors ${
                  isActive ? "text-white active" : "text-[#A7B0BA] hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Link
            to="/contact"
            data-testid="nav-book-btn"
            className="hidden md:inline-flex items-center tpa-btn-primary px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em]"
          >
            {t.nav.book}
          </Link>
          <button
            type="button"
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden border-t border-[#F8FAFC]/10 bg-[#06141F]"
        >
          <div className="px-5 py-6 flex flex-col gap-1">
            <div className="pb-5 mb-3 border-b border-[#F8FAFC]/10">
              <FinalMark size={36} />
            </div>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                data-testid={`mobile-link-${l.to === "/" ? "home" : l.to.replace("/", "")}`}
                className={({ isActive }) =>
                  `py-3 font-anton uppercase text-2xl tracking-wide border-b border-[#F8FAFC]/5 ${
                    isActive ? "text-[#B7FF00]" : "text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              data-testid="mobile-book-btn"
              className="mt-6 tpa-btn-primary inline-flex justify-center px-5 py-3.5 text-xs font-bold uppercase tracking-[0.22em]"
            >
              {t.nav.book}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
