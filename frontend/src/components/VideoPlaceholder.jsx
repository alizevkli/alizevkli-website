import { Play } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export const VideoPlaceholder = ({ label, testId = "video-placeholder", image }) => {
  const { t } = useLanguage();
  return (
    <div
      data-testid={testId}
      className="relative aspect-video bg-[#0B1F33] border border-[#F8FAFC]/10 overflow-hidden group cursor-pointer"
    >
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06141F] via-[#06141F]/30 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-[#B7FF00]/60 bg-[#06141F]/70 backdrop-blur-sm group-hover:scale-110 group-hover:bg-[#B7FF00] group-hover:border-[#B7FF00] transition-all duration-300">
          <Play
            size={28}
            className="text-[#B7FF00] group-hover:text-[#06141F] transition-colors"
            fill="currentColor"
          />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#A7B0BA]">
          {label || t.video.placeholder}
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00]">— soon</span>
      </div>
    </div>
  );
};
