import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { FinalWordmark } from "./brand/TpaLogos";

export const Navbar = () => {
  const { t, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setOpen(false);
  }, [location]);

  const serviceRoutes = [
    "/coaching",
    "/tournament",
    "/pathways",
    "/tennis-in-english",
    "/australia-consulting",
    "/baseline-vision-faq",
  ];
  const isServicesActive = serviceRoutes.includes(location.pathname);

  const serviceLinks = lang === "tr" ? [
    { to: "/tournament", label: t.nav.tournament },
    { to: "/australia-consulting", label: t.nav.consulting },
    { to: "/baseline-vision-faq", label: t.nav.faq },
  ] : [
    { to: "/coaching", label: t.nav.coaching },
    { to: "/tournament", label: t.nav.tournament },
    { to: "/pathways", label: t.nav.pathways },
    { to: "/tennis-in-english", label: t.nav.tennisEnglish },
    { to: "/australia-consulting", label: t.nav.consulting },
    { to: "/baseline-vision-faq", label: t.nav.faq },
  ];

  const mainLinks = lang === "tr" ? [
    { to: "/", label: t.nav.home, end: true },
    { to: "/baseline-vision", label: t.nav.baseline },
    { to: "/pathways", label: t.nav.turkiye2026 },
    { to: "/coaching", label: t.nav.kulupAkademi },
    { to: "/australia-consulting", label: t.nav.australiaBaglantisi },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ] : [
    { to: "/", label: t.nav.home, end: true },
    { to: "/tpa", label: t.nav.tpa },
    { to: "/baseline-vision", label: t.nav.baseline },
    { to: "/pricing", label: t.nav.pricing },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  const beforeDropdown = lang === "tr" ? mainLinks.slice(0, 1) : mainLinks.slice(0, 3);
  const afterDropdown = lang === "tr" ? mainLinks.slice(1) : mainLinks.slice(3);

  const linkClass = ({ isActive }) =>
    `relative text-[11px] uppercase tracking-[0.18em] transition-colors whitespace-nowrap ${
      isActive ? "text-[#B7FF00]" : "text-white/80 hover:text-white"
    }`;

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#06141F]/92 backdrop-blur-xl border-b border-[#F8FAFC]/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-4">
          <Link to="/" data-testid="nav-logo" className="flex items-center gap-3 min-w-0">
            <img src="/images/logos/tpa-logo-icon.png" alt="Tennis Pro Analysis" className="h-11 w-auto" />
            <span className="hidden sm:block">
              <FinalWordmark height={30} />
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {beforeDropdown.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            ))}

            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className={`relative text-[11px] uppercase tracking-[0.18em] transition-colors whitespace-nowrap inline-flex items-center gap-1.5 ${
                  isServicesActive ? "text-[#B7FF00]" : "text-white/80 hover:text-white"
                }`}
              >
                {t.nav.services}
                <ChevronDown size={13} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[280px] bg-[#06141F]/98 backdrop-blur-xl border border-[#F8FAFC]/10 shadow-2xl py-3">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#06141F] border-l border-t border-[#F8FAFC]/10 rotate-45" />
                  {serviceLinks.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      className={({ isActive }) =>
                        `block px-5 py-3 text-xs uppercase tracking-[0.16em] transition-colors ${
                          isActive ? "text-[#B7FF00] bg-[#B7FF00]/5" : "text-white/75 hover:text-white hover:bg-white/5"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {afterDropdown.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Link
              to="/contact"
              className="tpa-btn-primary px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em]"
            >
              {t.nav.book}
            </Link>
          </div>

          <button
            type="button"
            data-testid="mobile-menu-button"
            onClick={() => setOpen(true)}
            className="lg:hidden w-11 h-11 flex items-center justify-center border border-[#F8FAFC]/15 text-white"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-[#06141F] lg:hidden" data-testid="mobile-menu">
          <div className="h-20 px-4 flex items-center justify-between border-b border-[#F8FAFC]/10">
            <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <img src="/images/logos/tpa-logo-icon.png" alt="Tennis Pro Analysis" className="h-11 w-auto" />
              <FinalWordmark height={27} />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-11 h-11 flex items-center justify-center border border-[#F8FAFC]/15 text-white"
            >
              <X size={22} />
            </button>
          </div>

          <div className="px-5 py-8 flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-80px)]">
            <div className="mb-6">
              <LanguageToggle testId="mobile-language-toggle" />
            </div>

            {mainLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-anton uppercase text-4xl leading-none py-2 break-words ${isActive ? "text-[#B7FF00]" : "text-white"}`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <div className="mt-5 pt-5 border-t border-[#F8FAFC]/10">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-4">{t.nav.services}</div>
              <div className="grid grid-cols-1 gap-1">
                {serviceLinks.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-sm uppercase tracking-[0.18em] py-2 break-words ${isActive ? "text-[#B7FF00]" : "text-white/80"}`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="tpa-btn-primary mt-8 px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.22em]"
            >
              {t.nav.book}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
