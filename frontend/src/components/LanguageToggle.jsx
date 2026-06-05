import { useLanguage } from "../i18n/LanguageContext";

export const LanguageToggle = ({ testId = "language-toggle" }) => {
  const { lang, setLang } = useLanguage();

  const Btn = ({ code, label }) => {
    const active = lang === code;
    return (
      <button
        type="button"
        data-testid={`${testId}-${code}`}
        onClick={() => setLang(code)}
        className={`px-2.5 py-1 text-xs tracking-[0.25em] uppercase transition-colors ${
          active ? "text-[#06141F] bg-[#B7FF00]" : "text-[#A7B0BA] hover:text-white"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      data-testid={testId}
      className="inline-flex items-center border border-[#F8FAFC]/15 divide-x divide-[#F8FAFC]/10"
    >
      <Btn code="en" label="EN" />
      <Btn code="tr" label="TR" />
    </div>
  );
};
