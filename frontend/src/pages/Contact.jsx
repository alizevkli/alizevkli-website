import { Mail, Instagram, MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { SOCIAL } from "../constants/images";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Contact() {
  const { t, lang } = useLanguage();
  const c = t.contact;

  return (
    <div data-testid="page-contact">

      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 px-5 md:px-10 bg-[#06141F]">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              {c.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-white leading-[0.93] mb-6">
              {lang === "tr" ? "İLETİŞİM" : "GET IN TOUCH"}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base md:text-lg text-[#A7B0BA] leading-relaxed max-w-2xl">
              {c.pageLead}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 md:py-20 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* WhatsApp — full width primary card */}
            <div className="md:col-span-2">
              <Reveal>
                <a
                  href={SOCIAL.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-whatsapp-cta"
                  className="flex flex-col gap-5 bg-[#0d1b2a] rounded-2xl p-7 md:p-9 border-2 border-[#25D366] bg-[#25D366]/10 hover:border-lime-400 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366] shrink-0">
                      <WhatsAppIcon />
                    </span>
                    <div>
                      <div className="text-white font-bold text-xl">{c.whatsappTitle}</div>
                      <div className="text-[#A7B0BA] text-sm mt-0.5">{SOCIAL.whatsappDisplay}</div>
                    </div>
                  </div>
                  <div className="text-[#25D366] text-sm font-bold uppercase tracking-[0.2em]">
                    {c.whatsappBtn}
                  </div>
                </a>
              </Reveal>
            </div>

            {/* Email */}
            <Reveal delay={80}>
              <a
                href="mailto:alizevkliali@gmail.com"
                data-testid="contact-email"
                className="flex flex-col gap-5 h-full bg-[#0d1b2a] rounded-2xl p-6 border border-white/10 hover:border-lime-400 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#B7FF00]/10 text-[#B7FF00] shrink-0">
                    <Mail size={22} />
                  </span>
                  <div>
                    <div className="text-white font-bold">{c.emailTitle}</div>
                    <div className="text-[#A7B0BA] text-sm mt-0.5">alizevkliali@gmail.com</div>
                  </div>
                </div>
                <div className="text-[#B7FF00] text-sm font-bold uppercase tracking-[0.2em]">{c.emailBtn}</div>
              </a>
            </Reveal>

            {/* Instagram */}
            <Reveal delay={160}>
              <a
                href={SOCIAL.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-instagram"
                className="flex flex-col gap-5 h-full bg-[#0d1b2a] rounded-2xl p-6 border border-white/10 hover:border-lime-400 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#B7FF00]/10 text-[#B7FF00] shrink-0">
                    <Instagram size={22} />
                  </span>
                  <div>
                    <div className="text-white font-bold">{c.instagramTitle}</div>
                    <div className="text-[#A7B0BA] text-sm mt-0.5">@tennisproanalysis</div>
                  </div>
                </div>
                <div className="text-[#B7FF00] text-sm font-bold uppercase tracking-[0.2em]">{c.instagramBtn}</div>
              </a>
            </Reveal>

            {/* Location */}
            <Reveal delay={240}>
              <div
                data-testid="contact-location"
                className="flex flex-col gap-5 h-full bg-[#0d1b2a] rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#B7FF00]/10 text-[#B7FF00] shrink-0">
                    <MapPin size={22} />
                  </span>
                  <div>
                    <div className="text-white font-bold">{c.locationTitle}</div>
                    <div className="text-[#A7B0BA] text-sm mt-0.5">{c.locationText}</div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="pb-20 md:pb-28 px-5 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="bg-[#0d1b2a] rounded-2xl p-7 md:p-9 border-l-4 border-[#25D366]">
              <p className="text-[#A7B0BA] leading-relaxed">{c.bottomText}</p>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
