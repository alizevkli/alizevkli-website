import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("tpa-lang");
      if (stored === "en" || stored === "tr") return stored;
    }
    return "en";
  });

  const setLang = (next) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("tpa-lang", next);
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
