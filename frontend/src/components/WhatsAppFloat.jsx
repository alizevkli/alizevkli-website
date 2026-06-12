import { MessageCircle } from "lucide-react";
import { SOCIAL } from "../constants/images";
import { useLanguage } from "../i18n/LanguageContext";

export const WhatsAppFloat = () => {
  const { lang } = useLanguage();
  return (
    <a
      href={SOCIAL.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={lang === "tr" ? "WhatsApp ile iletişime geç" : "Contact via WhatsApp"}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-all duration-200"
    >
      <MessageCircle size={26} className="text-white" />
    </a>
  );
};
