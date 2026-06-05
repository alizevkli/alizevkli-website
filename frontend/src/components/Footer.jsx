import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const cols = [
    {
      title: t.footer.pages,
      links: [
        { to: "/", label: t.nav.home },
        { to: "/tpa", label: t.nav.tpa },
        { to: "/baseline-vision", label: t.nav.baseline },
        { to: "/coaching", label: t.nav.coaching },
      ],
    },
    {
      title: t.footer.explore,
      links: [
        { to: "/tournament", label: t.nav.tournament },
        { to: "/pathways", label: t.nav.pathways },
        { to: "/about", label: t.nav.about },
        { to: "/contact", label: t.nav.contact },
      ],
    },
  ];

  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-[#F8FAFC]/10 bg-[#06141F]"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2.5 h-2.5 bg-[#B7FF00]" />
            <span className="font-anton text-2xl uppercase tracking-wide text-white">
              Tennis<span className="text-[#B7FF00]">.</span>Pro<span className="text-[#1FA463]">.</span>Analysis
            </span>
          </div>
          <p className="mt-4 text-[#A7B0BA] text-sm leading-relaxed max-w-md">
            {t.footer.tagline}. {t.hero.support}
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.title} className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.32em] text-[#B7FF00] mb-4">
              {c.title}
            </div>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-link-${l.to === "/" ? "home" : l.to.replace("/", "")}`}
                    className="text-sm text-white/85 hover:text-[#B7FF00] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-3">
          <div className="text-[10px] uppercase tracking-[0.32em] text-[#B7FF00] mb-4">
            {t.nav.contact}
          </div>
          <ul className="space-y-2.5 text-sm text-[#A7B0BA]">
            <li data-testid="footer-email">{t.contact.email}</li>
            <li data-testid="footer-phone">{t.contact.phone}</li>
            <li data-testid="footer-instagram">{t.contact.instagram}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#F8FAFC]/10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[#A7B0BA]">
          <div>
            © {year} Tennis Pro Analysis · Ali Zevkli · {t.footer.rights}
          </div>
          <div className="flex items-center gap-5">
            <span>{t.footer.privacy}</span>
            <span>{t.footer.terms}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
