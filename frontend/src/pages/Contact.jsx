import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Mail, Phone, Instagram, ArrowUpRight, MessageCircle } from "lucide-react";
import { SOCIAL } from "../constants/images";

export default function Contact() {
  const { t } = useLanguage();

  const channels = [
    { Icon: Mail, label: t.contact.email, testId: "contact-email", href: "mailto:alizevkliali@gmail.com" },
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

            {/* WhatsApp primary CTA */}
            <Reveal>
              <a
                data-testid="contact-whatsapp-cta"
                href={SOCIAL.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-6 border border-[#25D366] bg-[#25D366]/10 p-5 md:p-6 hover:bg-[#25D366]/20 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 flex items-center justify-center bg-[#25D366] border border-[#25D366]">
                    <MessageCircle size={18} className="text-[#0A1220]" />
                  </span>
                  <div>
                    <span className="block text-sm md:text-base text-white font-semibold">{t.contact.whatsappCta}</span>
                    <span className="block text-xs text-[#A7B0BA] mt-0.5">{SOCIAL.whatsappDisplay}</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[#25D366]" />
              </a>
            </Reveal>

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
                {t.contact.role}
              </p>
              <div className="mt-8 space-y-2 text-xs uppercase tracking-[0.22em] text-[#A7B0BA]">
                {t.contact.creds.map((c) => (
                  <div key={c}>{c}</div>
                ))}
              </div>
              {t.contact.location && (
                <div className="mt-4 text-xs text-[#B7FF00] tracking-[0.18em]">{t.contact.location}</div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
