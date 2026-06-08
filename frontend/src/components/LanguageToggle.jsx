import { useLanguage } from "../i18n/LanguageContext";

export const LanguageToggle = ({ testId = "language-toggle" }) => {
  const { lang, setLang } = useLanguage();

  const Btn = ({ code, label, flagSrc, flagAlt }) => {
    const active = lang === code;
    return (
      <button
        type="button"
        data-testid={`${testId}-${code}`}
        onClick={() => setLang(code)}
        className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs tracking-[0.14em] uppercase transition-colors whitespace-nowrap ${
          active ? "text-[#06141F] bg-[#B7FF00]" : "text-[#A7B0BA] hover:text-white"
        }`}
      >
        <img src={flagSrc} alt={flagAlt} className="h-3.5 w-5 object-cover border border-black/10" />
        <span>{label}</span>
      </button>
    );
  };

  return (
    <div
      data-testid={testId}
      className="inline-flex items-center border border-[#F8FAFC]/15 divide-x divide-[#F8FAFC]/10"
    >
      <Btn code="en" label="EN" flagSrc="https://flagcdn.com/au.svg" flagAlt="Australia flag" />
      <Btn code="tr" label="TR" flagSrc="https://flagcdn.com/tr.svg" flagAlt="Türkiye flag" />
    </div>
  );
};
