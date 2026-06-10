import { useLanguage } from "../i18n/LanguageContext";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Mail, Phone, Instagram, ArrowUpRight, MessageCircle } from "lucide-react";
import { SOCIAL } from "../constants/images";

export default function Contact() {
  const { t } = useLanguage();

  const channels = [
    {
      Icon: Mail,
      label: `Email — ${SOCIAL.email}`,
      testId: "contact-email",
      href: SOCIAL.emailUrl,
    },
    { Icon: Phone, label: t.contact.phone, testId: "contact-services", href: null },
    {
      Icon: Instagram,
      label: t.contact.instagram,
      testId: "contact-instagram",
      href: SOCIAL.instagramUrl,
    },
  ];

  return (
    <div data-testid="page-contact">
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} lead={t.contact.lead} />
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-4">
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
              const cls = "flex items-center justify-between gap-6 border border-[#F8FAFC]/10 p-5 md:p-6 hover:border-[#B7FF00]/50 transition-colors";
              const inner = (
                <>
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="w-10 h-10 flex items-center justify-center bg-[#0B1F33] border border-[#F8FAFC]/10 shrink-0">
                      <Icon size={18} className="text-[#B7FF00]" />
                    </span>
                    <span className="text-sm md:text-base text-white/90 break-words">{label}</span>
                  </div>
                  {href ? <ArrowUpRight size={16} className="text-[#B7FF00] shrink-0" /> : <span className="w-1.5 h-1.5 bg-[#B7FF00] shrink-0" />}
                </>
              );
              return (
                <Reveal key={testId}>
                  {href ? <a data-testid={testId} href={href} className={cls}>{inner}</a> : <div data-testid={testId} className={cls}>{inner}</div>}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200}>
            <div className="lg:col-span-4 border border-[#F8FAFC]/10 p-7 md:p-9 bg-[#0B1F33]/40">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] mb-4">Tennis Pro Analysis</div>
              <h3 className="font-anton uppercase text-3xl text-white leading-tight">Ali Zevkli</h3>
              <p className="mt-3 text-sm text-[#A7B0BA] leading-relaxed">
                International tennis coach, performance analyst and founder of Tennis Pro Analysis.
              </p>
              <div className="mt-8 space-y-2 text-sm text-[#A7B0BA] leading-relaxed">
                <div>ATPCA Advanced Pro Level 2</div>
                <div>TTF Qualified Coach</div>
                <div>UTR Tournament Director</div>
                <div>Australia • Türkiye • 20+ Years</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
