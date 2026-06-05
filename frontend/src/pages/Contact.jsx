import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Mail, Phone, Instagram, ArrowUpRight } from "lucide-react";
import { SOCIAL } from "../constants/images";

export default function Contact() {
  const { t } = useLanguage();

  const channels = [
    { Icon: Mail, label: t.contact.email, testId: "contact-email", href: null },
    { Icon: Phone, label: t.contact.phone, testId: "contact-phone", href: null },
    {
      Icon: Instagram,
      label: t.contact.instagram,
      testId: "contact-instagram",
      href: SOCIAL.instagramUrl,
    },
  ];

  return (
    <div data-testid="page-contact">
      <PageHero
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        lead={t.contact.lead}
      />
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-4">
            {channels.map(({ Icon, label, testId, href }) => {
              const Inner = (
                <>
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 flex items-center justify-center bg-[#0B1F33] border border-[#F8FAFC]/10">
                      <Icon size={18} className="text-[#B7FF00]" />
                    </span>
                    <span className="text-sm md:text-base text-white/90">{label}</span>
                  </div>
                  {href ? (
                    <ArrowUpRight size={16} className="text-[#B7FF00]" />
                  ) : (
                    <span className="w-1.5 h-1.5 bg-[#B7FF00]" />
                  )}
                </>
              );
              const cls =
                "flex items-center justify-between gap-6 border border-[#F8FAFC]/10 p-5 md:p-6 hover:border-[#B7FF00]/50 transition-colors";
              return (
                <Reveal key={testId}>
                  {href ? (
                    <a
                      data-testid={testId}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cls}
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div data-testid={testId} className={cls}>
                      {Inner}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200}>
            <div className="lg:col-span-5 border border-[#F8FAFC]/10 p-7 md:p-9 bg-[#0B1F33]/40">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-4">
                Tennis Pro Analysis
              </div>
              <h3 className="font-anton uppercase text-3xl text-white leading-tight">
                Ali Zevkli
              </h3>
              <p className="mt-3 text-sm text-[#A7B0BA]">
                International Tennis Coach · Performance Analyst · Tournament Director
              </p>
              <div className="mt-8 space-y-2 text-xs uppercase tracking-[0.22em] text-[#A7B0BA]">
                <div>ATPCA Advanced Pro Level 2</div>
                <div>TTF Qualified Coach</div>
                <div>UTR Tournament Director</div>
                <div>Division 1 WA Background</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
