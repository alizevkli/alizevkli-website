import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const META = {
  "/": {
    en: { title: "Tennis Pro Analysis · Tennis Performance. Measured.", description: "International tennis coach Ali Zevkli — performance coaching, Baseline Vision match analysis, Australia–Türkiye pathways. 20+ years across Perth, Melbourne and Istanbul." },
    tr: { title: "Tennis Pro Analysis · Tenis Performansı. Ölçüldü.", description: "Uluslararası tenis antrenörü Ali Zevkli — performans antrenörlüğü, Baseline Vision maç analizi, Avustralya–Türkiye gelişim yolları. Perth, Melbourne ve İstanbul'da 20+ yıl deneyim." },
  },
  "/tpa": {
    en: { title: "TPA — Tennis Pro Analysis System | Ali Zevkli", description: "The Tennis Pro Analysis performance system — coaching, Baseline Vision analysis, tournament direction and player development." },
    tr: { title: "TPA — Tennis Pro Analysis Sistemi | Ali Zevkli", description: "Tennis Pro Analysis performans sistemi — antrenörlük, Baseline Vision analizi, turnuva yönetimi ve oyuncu gelişimi." },
  },
  "/baseline-vision": {
    en: { title: "Baseline Vision — Match Analysis & Performance Tracking | TPA", description: "Baseline Vision tennis performance system — shot speed, ball placement, rally analysis, match statistics and player development reports." },
    tr: { title: "Baseline Vision — Maç Analizi ve Performans Takibi | TPA", description: "Baseline Vision tenis performans sistemi — vuruş hızı, top yerleşimi, ralli analizi, maç istatistikleri ve oyuncu gelişim raporları." },
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
    en: { title: "Baseline Vision FAQ — How It Works | Tennis Pro Analysis", description: "Everything you need to know about Baseline Vision tennis performance analysis — what it tracks, how it works, and how to improve your game." },
    tr: { title: "Baseline Vision SSS — Nasıl Çalışır | Tennis Pro Analysis", description: "Baseline Vision tenis performans analizi hakkında bilmeniz gereken her şey — neyi takip eder, nasıl çalışır." },
  },
  "/about": {
    en: { title: "About Ali Zevkli — International Tennis Coach & Founder TPA", description: "ATPCA Advanced Pro Level 2, TTF qualified, Marmara University BESYO. 20+ years coaching across Australia and Türkiye." },
    tr: { title: "Ali Zevkli Hakkında — Uluslararası Tenis Antrenörü ve TPA Kurucusu", description: "ATPCA İleri Profesyonel Seviye 2, TTF yetkili antrenör, Marmara Üniversitesi BESYO. Avustralya ve Türkiye'de 20+ yıl antrenörlük." },
  },
  "/contact": {
    en: { title: "Contact Ali Zevkli — Tennis Pro Analysis", description: "Book a coaching session, request performance analysis or discuss Australia–Türkiye pathways. Contact via WhatsApp or email." },
    tr: { title: "İletişim — Ali Zevkli Tennis Pro Analysis", description: "Antrenman seansı rezervasyonu, performans analizi talebi veya Avustralya–Türkiye gelişim yolları hakkında iletişime geçin." },
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
