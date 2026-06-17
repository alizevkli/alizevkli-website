import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const META = {
  "/": {
    en: { title: "Ali Zevkli | TPA Player Development Method", description: "Ali Zevkli combines match observation, session review and coaching interpretation through Tennis Pro Analysis to create practical player development reports." },
    tr: { title: "Ali Zevkli | TPA Oyuncu Gelişim Metodu", description: "Ali Zevkli, Tennis Pro Analysis çatısı altında maç gözlemi, seans değerlendirmesi ve koçluk yorumunu birleştirerek oyuncular için uygulanabilir gelişim raporları hazırlar." },
  },
  "/tpa": {
    en: { title: "TPA — Tennis Pro Analysis System | Ali Zevkli", description: "The Tennis Pro Analysis performance system — coaching, match observation, tournament direction and player development." },
    tr: { title: "TPA — Tennis Pro Analysis Sistemi | Ali Zevkli", description: "Tennis Pro Analysis performans sistemi — antrenörlük, maç analizi, turnuva yönetimi ve oyuncu gelişimi." },
  },
  "/baseline-vision": {
    en: { title: "TPA Player Development Method | Tennis Pro Analysis", description: "TPA Player Development Method combines match observation, session review and coaching interpretation to create practical player development reports." },
    tr: { title: "TPA Oyuncu Gelişim Metodu | Tennis Pro Analysis", description: "TPA Oyuncu Gelişim Metodu; maç gözlemi, seans değerlendirmesi ve koçluk yorumunu birleştirerek uygulanabilir oyuncu gelişim raporları oluşturur." },
  },
  "/coaching": {
    en: { title: "Tennis Coaching — Individual, Performance & Club Programs | TPA", description: "Private tennis coaching, performance analysis sessions and club program design by Ali Zevkli. Australia and Türkiye." },
    tr: { title: "Tenis Antrenörlüğü — Bireysel, Performans ve Kulüp Programları | TPA", description: "Ali Zevkli tarafından özel tenis antrenörlüğü, performans analizi seansları ve kulüp program tasarımı. Avustralya ve Türkiye." },
  },
  "/pathways": {
    en: { title: "Australia–Türkiye Tennis Pathways | Tennis Pro Analysis", description: "Coaching, club consulting, visa guidance and player development pathways between Australia and Türkiye." },
    tr: { title: "Avustralya–Türkiye Tenis Gelişim Yolları | Tennis Pro Analysis", description: "Avustralya ve Türkiye arasında antrenörlük, kulüp danışmanlığı, vize rehberliği ve oyuncu gelişim yolları." },
  },
  "/tennis-in-english": {
    en: { title: "Tennis in English — Coaching for Expats in Türkiye | Ali Zevkli", description: "Private tennis coaching delivered entirely in English for expats living in Türkiye and Turkish players preparing for Australia or international environments." },
    tr: { title: "İngilizce Tenis Dersleri — Türkiye'deki Expat'lar için | Ali Zevkli", description: "Türkiye'deki yabancı uyruklu bireyler ve Avustralya'ya hazırlanan Türk oyuncular için tamamen İngilizce özel tenis dersleri." },
  },
  "/australia-consulting": {
    en: { title: "Australia Consulting — Tennis Visa & Career Guidance | Ali Zevkli TPA", description: "Former Australian Border Force officer. Guidance for Turkish coaches and professionals navigating Australian visa, career and tennis pathways." },
    tr: { title: "Avustralya Danışmanlık — Vize ve Kariyer Rehberliği | Ali Zevkli TPA", description: "Eski Avustralya Sınır Kuvvetleri subayı. Türk antrenörler ve profesyoneller için Avustralya vize, kariyer ve tenis yolları rehberliği." },
  },
  "/pricing": {
    en: { title: "Pricing — Tennis Coaching & Analysis Sessions | Tennis Pro Analysis", description: "Coaching, performance analysis, club consulting and Australia pathway services. Contact for pricing tailored to your goals." },
    tr: { title: "Fiyatlar — Tenis Antrenörlüğü ve Analiz Seansları | Tennis Pro Analysis", description: "Antrenörlük, performans analizi, kulüp danışmanlığı ve Avustralya yolu hizmetleri. Hedeflerinize özel fiyat için iletişime geçin." },
  },
  "/baseline-vision-faq": {
    en: { title: "TPA Method FAQ — How It Works | Tennis Pro Analysis", description: "Everything you need to know about the TPA Player Development Method — what it analyses, how it works, and how to improve your game." },
    tr: { title: "TPA Metodu SSS — Nasıl Çalışır | Tennis Pro Analysis", description: "TPA Oyuncu Gelişim Metodu hakkında bilmeniz gereken her şey — neyi analiz eder, nasıl çalışır." },
  },
  "/about": {
    en: { title: "About Ali Zevkli — International Tennis Coach & Founder TPA", description: "ATPCA Advanced Pro Level 2, TTF qualified, Marmara University BESYO. Coaching across Australia and Türkiye." },
    tr: { title: "Ali Zevkli Hakkında — Uluslararası Tenis Antrenörü ve TPA Kurucusu", description: "ATPCA İleri Profesyonel Seviye 2, TTF yetkili antrenör, Marmara Üniversitesi BESYO. Avustralya ve Türkiye'de antrenörlük." },
  },
  "/contact": {
    en: { title: "Contact Ali Zevkli — Tennis Pro Analysis", description: "Book a coaching session, request performance analysis or discuss Australia–Türkiye pathways. Contact via WhatsApp or email." },
    tr: { title: "İletişim — Ali Zevkli Tennis Pro Analysis", description: "Antrenman seansı rezervasyonu, performans analizi talebi veya Avustralya–Türkiye gelişim yolları hakkında iletişime geçin." },
  },
  "/sample-report": {
    en: { title: "Sample Player Development Report | Tennis Pro Analysis", description: "See how Tennis Pro Analysis turns match observation and coaching interpretation into clear training priorities for players, parents and clubs." },
  },
  "/ornek-rapor": {
    tr: { title: "Örnek Oyuncu Gelişim Raporu | Tennis Pro Analysis", description: "Tennis Pro Analysis'in TPA Oyuncu Gelişim Metodu ile hazırlanan örnek oyuncu raporu." },
    en: { title: "Sample Player Development Report (TR) | Tennis Pro Analysis", description: "A sample TPA Player Development Report by Tennis Pro Analysis." },
  },
  "/tournament": {
    en: { title: "Tournament & Event Management | Tennis Pro Analysis", description: "Tennis tournament planning, scheduling, draw management and event delivery by Ali Zevkli." },
    tr: { title: "Turnuva ve Etkinlik Yönetimi | Tennis Pro Analysis", description: "Ali Zevkli tarafından tenis turnuvası planlama, zamanlama, kura yönetimi ve etkinlik organizasyonu." },
  },
};

export const SEOMeta = () => {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const pageMeta = META[pathname];
    if (!pageMeta) return;
    const m = pageMeta[lang] || pageMeta.en;

    document.title = m.title;

    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", m.description);
    setMeta("og:title", m.title, "property");
    setMeta("og:description", m.description, "property");
    setMeta("og:url", `https://www.alizevkli.com${pathname}`, "property");
  }, [pathname, lang]);

  return null;
};
