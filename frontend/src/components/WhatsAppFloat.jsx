import { MessageCircle } from "lucide-react";
import { SOCIAL } from "../constants/images";

export const WhatsAppFloat = () => (
  <a
    href={SOCIAL.whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact Ali on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-all duration-200"
  >
    <MessageCircle size={26} className="text-white" />
  </a>
);
