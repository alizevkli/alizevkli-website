import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SOCIAL } from "../constants/images";

const WA_URL = SOCIAL.whatsappUrl;

const ScreenshotWithFallback = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full max-w-xs mx-auto rounded-2xl bg-[#0d1b2a] border border-white/10 flex items-center justify-center p-8 text-center min-h-[200px]">
        <p className="text-[#A7B0BA] text-sm leading-relaxed">
          Örnek Baseline Vision ekran görüntüsü — görsel yüklenecek
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-full max-w-xs mx-auto rounded-2xl shadow-lg object-contain"
    />
  );
};

const KoclukOnceligi = ({ text }) => (
  <div className="border-l-4 border-lime-400 bg-lime-400/10 p-4 rounded-r-xl text-sm mt-5">
    <span className="text-[10px] uppercase tracking-[0.3em] text-lime-400 font-bold block mb-1">
      KOÇLUK ÖNCELİĞİ
    </span>
    <p className="text-white/90">{text}</p>
  </div>
);

const StatKutusu = ({ label, value }) => (
  <div className="flex flex-col items-center bg-[#06141F] border border-[#F8FAFC]/10 rounded-xl px-4 py-3 min-w-[120px]">
    <span className="font-anton text-[#B7FF00] text-lg leading-none">{value}</span>
    <span className="text-[9px] uppercase tracking-[0.2em] text-[#A7B0BA] mt-1 text-center">{label}</span>
  </div>
);

const OrnekEtiketi = () => (
  <div className="text-[9px] uppercase tracking-[0.3em] text-[#B7FF00] mb-2 text-center">
    ÖRNEK BASELINE VISION VERİSİ
  </div>
);

const DrillCard = ({ drill }) => (
  <div className="mt-4 border border-lime-400/30 bg-lime-400/5 rounded-xl p-4">
    <span className="text-[10px] uppercase tracking-[0.3em] text-lime-400 font-bold block mb-1">
      ÖNERİLEN DRİLL
    </span>
    <p className="text-white/90 text-sm">{drill}</p>
  </div>
);

export default function SampleReportTR() {
  return (
    <div data-testid="page-ornek-rapor" className="bg-[#0A1220] text-white">

      {/* 1. Başlık */}
      <section className="pt-36 md:pt-44 pb-14 md:pb-20 px-5 md:px-10 bg-[#06141F]">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-5 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              TENNIS PRO ANALYSIS
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-white leading-[0.93] mb-6">
              ÖRNEK OYUNCU GELİŞİM RAPORU
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-base md:text-lg text-[#A7B0BA] leading-relaxed max-w-2xl mb-3">
              Bu örnek, Tennis Pro Analysis'in Baseline Vision seans verilerini ve koçluk gözlemini nasıl birleştirerek oyuncular, veliler ve kulüpler için net, uygulanabilir gelişim öncelikleri oluşturduğunu göstermektedir.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <p className="text-sm text-[#A7B0BA] leading-relaxed max-w-2xl mb-7 italic">
              Tennis Pro Analysis, Baseline Vision seans verilerini koçluk ve oyuncu gelişimi bakış açısıyla yorumlar — otomatik teknik vuruş teşhisi sunmaz.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="inline-block border border-lime-400/40 text-lime-400 text-[10px] uppercase tracking-[0.3em] px-4 py-2 rounded">
              ÖRNEK RAPOR — TAMAMEN KURGUSAL OYUNCU VERİSİ
            </div>
          </Reveal>
        </div>
      </section>

      {/* 1b. Rapor Kapak Kartı */}
      <section className="py-8 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="border-2 border-lime-400 rounded-2xl p-8 bg-[#0d1b2a]">
              <div className="text-xs uppercase tracking-widest text-[#B7FF00] mb-3">TENNIS PRO ANALYSIS</div>
              <h2 className="font-black text-2xl text-white mb-3 leading-tight">ÖRNEK OYUNCU GELİŞİM RAPORU</h2>
              <p className="text-sm text-[#A7B0BA] mb-2">Oyuncu: Kurgusal ITF Junior Hedefi Oyuncusu</p>
              <p className="text-sm text-[#A7B0BA] mb-2">Seans: Baseline Vision Destekli Maç Performans Değerlendirmesi</p>
              <p className="text-sm text-[#B7FF00]">Odak: Hata azaltma · backhand güveni · servis tutarlılığı</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Oyuncu Profili */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="bg-[#0d1b2a] rounded-2xl p-7 md:p-9 border-l-4 border-[#B7FF00]">
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-6">
                OYUNCU PROFİLİ
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["Yaş", "16"],
                  ["Seviye", "ITF Junior Oyuncusu — Türkiye / Uluslararası Devre"],
                  ["Hedef", "ITF Junior Gelişimi"],
                  ["Seans Tipi", "Baseline Vision Destekli Maç Performans Değerlendirmesi"],
                  ["Hazırlayan", "Tennis Pro Analysis"],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-1">
                    <dt className="text-[10px] uppercase tracking-[0.25em] text-[#A7B0BA]">{label}</dt>
                    <dd className="text-white font-medium text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Bu Rapor Neleri Kapsar? */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              RAPOR YAPISI
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mt-2 mb-10 leading-tight">
              BU RAPOR NELERİ KAPSAR?
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: "01", title: "Baseline Vision Veri İncelemesi", text: "Seans istatistikleri, vuruş desenleri, top yerleşimi ve performans göstergeleri." },
              { num: "02", title: "Koçluk Yorumu", text: "Verinin oyuncunun gelişimi açısından ne anlama geldiği." },
              { num: "03", title: "4 Haftalık Koçluk Öncelikleri", text: "Bir sonraki antrenman bloğu için net odak alanları." },
              { num: "04", title: "Veli / Oyuncu Özeti", text: "Oyuncu ve ailenin anlayabileceği sade bir açıklama." },
            ].map((card, i) => (
              <Reveal key={card.num} delay={i * 70}>
                <div className="bg-[#06141F] border border-[#F8FAFC]/10 p-6 rounded-2xl h-full hover:border-[#B7FF00]/30 transition-colors">
                  <div className="font-anton text-[#B7FF00] text-4xl mb-4">{card.num}</div>
                  <h3 className="font-anton uppercase text-lg text-white mb-2 leading-tight">{card.title}</h3>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 01 — Maç Performans Özeti */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-1">
              <span className="font-anton text-[#B7FF00]/40 text-5xl leading-none select-none">01</span>
              <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-[#B7FF00]" />
                MAÇ PERFORMANS ÖZETİ
              </div>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal>
              <div>
                <OrnekEtiketi />
                <ScreenshotWithFallback
                  src="/images/baseline/baseline-match-stats.png"
                  alt="Örnek Baseline Vision maç istatistikleri — Tennis Pro Analysis oyuncu gelişim raporu"
                />
                <div className="flex flex-wrap justify-center gap-3 mt-5">
                  <StatKutusu label="Kazanılan Puan" value="%62" />
                  <StatKutusu label="Hatalar" value="13" />
                  <StatKutusu label="Servis Puanı" value="%59" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <h2 className="font-anton uppercase text-2xl md:text-3xl text-white mb-4 leading-tight">
                  MAÇ PERFORMANS ÖZETİ
                </h2>
                <p className="text-[#A7B0BA] leading-relaxed text-sm md:text-base">
                  Oyuncu maç boyunca güçlü bir rekabet isteği sergiledi. %62 kazanılan puan oranı genel performansın olumlu olduğunu gösteriyor; ancak rakibe kıyasla yüksek hata sayısı (13'e karşı 4) temel gelişim alanını ortaya koyuyor: nötr rallilerde gereksiz hataları azaltmak. 3 çift hata, baskı altında servis tutarlılığının geliştirilmesi gerektiğine işaret ediyor. %59 servis puanı kazanma oranı olumlu bir başlangıç noktası.
                </p>
                <KoclukOnceligi text="Temel Öncelik: Agresif paternlere geçmeden önce nötr rallilerdeki gereksiz hataları azalt." />
                <DrillCard drill="20 toplu derin çapraz ralli + hata limiti" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. 02 — Vuruş Performans Değerlendirmesi */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-1">
              <span className="font-anton text-[#B7FF00]/40 text-5xl leading-none select-none">02</span>
              <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-[#B7FF00]" />
                VURUŞ PERFORMANS DEĞERLENDİRMESİ
              </div>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal delay={120} className="md:order-2">
              <div>
                <h2 className="font-anton uppercase text-2xl md:text-3xl text-white mb-4 leading-tight">
                  VURUŞ PERFORMANS DEĞERLENDİRMESİ
                </h2>
                <p className="text-[#A7B0BA] leading-relaxed text-sm md:text-base">
                  Vuruş performans verileri ortalama 90 km/s ve maksimum 138 km/s hız gösteriyor — ITF Junior seviyesini hedefleyen 16 yaşındaki bir oyuncu için uygun. Top yerleşimi %61 forehand, %39 backhand ağırlıklı; bu backhand tarafından kaçınma eğilimini ortaya koyuyor. 47 cm file üzeri geçiş yüksekliği güvenli olmakla birlikte kısa toplarda daha agresif olunabilir. Top yerleşim haritası topların büyük çoğunluğunun orta kort bölgesine düştüğünü gösteriyor — ITF Junior seviyesinde fark yaratacak olan daha derin top yerleşimi olacak.
                </p>
                <KoclukOnceligi text="Temel Öncelik: Backhand tarafında güven geliştir ve çapraz desenlerde derinliği artır." />
                <DrillCard drill="Backhand hedef bölgeli çapraz ralli + derinlik bonusu" />
              </div>
            </Reveal>
            <Reveal className="md:order-1">
              <div>
                <OrnekEtiketi />
                <ScreenshotWithFallback
                  src="/images/baseline/baseline-ground-strokes.png"
                  alt="Örnek Baseline Vision vuruş performans verisi — Tennis Pro Analysis"
                />
                <div className="flex flex-wrap justify-center gap-3 mt-5">
                  <StatKutusu label="Ort. Hız" value="90 km/s" />
                  <StatKutusu label="Maks." value="138 km/s" />
                  <StatKutusu label="File Üzeri" value="47cm" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. 03 — Servis Performans Değerlendirmesi */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-1">
              <span className="font-anton text-[#B7FF00]/40 text-5xl leading-none select-none">03</span>
              <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-[#B7FF00]" />
                SERVİS PERFORMANS DEĞERLENDİRMESİ
              </div>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal>
              <div>
                <OrnekEtiketi />
                <ScreenshotWithFallback
                  src="/images/baseline/baseline-serve-stats.png"
                  alt="Örnek Baseline Vision servis hızı ve yerleşim verisi — Tennis Pro Analysis"
                />
                <div className="flex flex-wrap justify-center gap-3 mt-5">
                  <StatKutusu label="Ort. Hız" value="165 km/s" />
                  <StatKutusu label="Maks." value="182 km/s" />
                  <StatKutusu label="1. Servis" value="%50" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <h2 className="font-anton uppercase text-2xl md:text-3xl text-white mb-4 leading-tight">
                  SERVİS PERFORMANS DEĞERLENDİRMESİ
                </h2>
                <p className="text-[#A7B0BA] leading-relaxed text-sm md:text-base">
                  Ortalama 165 km/s, maksimum 182 km/s birinci servis hızı bu yaş grubu için güçlü bir silah niteliği taşıyor ve ITF Junior seviyesinde rekabet avantajı sağlayacak. Ancak %50'lik birinci servis isabet oranı geliştirilmeli — birinci servisin yarısını kaçırmak ikinci servis üzerinde gereksiz baskı yaratıyor. Servis yerleşimi %40/%40/%20 dağılım gösteriyor; daha güçlü rakiplere karşı daha fazla çeşitlilik ve gizlilik gerekecek. İkinci servis tutarlılığı bir sonraki turnuva bloğundan önce öncelikli antrenman konusu olmalı.
                </p>
                <KoclukOnceligi text="Temel Öncelik: Birinci servis isabet oranını %65+ seviyesine çıkar ve ikinci servisi güvenilir bir silaha dönüştür." />
                <DrillCard drill="10 hedefli birinci servis + 10 spinli ikinci servis baskı oyunu" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. 4 Haftalık Koçluk Öncelikleri */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              KOÇLUK ÖNCELİKLERİ
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mt-2 mb-2 leading-tight">
              4 HAFTALIK KOÇLUK ÖNCELİKLERİ
            </h2>
            <p className="text-[#A7B0BA] text-sm mb-10">
              Baseline Vision verileri ve koçluk gözlemine dayalı — sonraki 4 hafta
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Ralli Tutarlılığı & Derinlik",
                text: "Servis çizgisinin ötesine düşen güvenilir çapraz taban çizgisi rallisi oluştur. Yön değiştirmeden önce nötr top toleransına odaklan. Hedef: 20 toplu derin çapraz ralli tutarlılığı.",
              },
              {
                num: "02",
                title: "Backhand Tarafı Geliştirme",
                text: "Backhand tarafından kaçınmayı azalt. Hedef bölgeli yapılandırılmış backhand odaklı çalışmalar. ITF Junior rekabetinden önce backhand savunma vuruşu değil tarafsız silah haline gelmeli.",
              },
              {
                num: "03",
                title: "Baskı Altında Servis Tutarlılığı",
                text: "Kontrollü hedef çalışmalarıyla birinci servis isabet oranını artır. Spin ve derinlikle güvenilir ikinci servis geliştir. Çift hata azaltma turnuva maçları için öncelik.",
              },
            ].map((card, i) => (
              <Reveal key={card.num} delay={i * 80}>
                <div className="bg-[#0d1b2a] rounded-2xl p-6 border border-white/10 h-full hover:border-[#B7FF00]/30 transition-colors">
                  <div className="font-anton text-[#B7FF00] text-4xl mb-4">{card.num}</div>
                  <h3 className="font-anton uppercase text-xl text-white mb-3 leading-tight">{card.title}</h3>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 2 Haftalık Oyuncu Aksiyon Planı */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              AKSİYON PLANI
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mt-2 mb-10 leading-tight">
              2 HAFTALIK OYUNCU AKSİYON PLANI
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                week: "HAFTA 1 — TEMEL",
                items: [
                  "Derin ralli tolerans çalışmaları",
                  "Çapraz desen tutarlılığı",
                  "Backhand hedef bölgesi çalışması",
                  "Servis yerleşim pratiği (baskısız)",
                ],
              },
              {
                week: "HAFTA 2 — UYGULAMA",
                items: [
                  "Ralli yapısıyla maç oyun durumları",
                  "Rekabetçi drill senaryolarında backhand",
                  "Simüle edilmiş maç baskısı altında servis",
                  "Oyuncu ve veli ile video incelemesi",
                ],
              },
            ].map((block, i) => (
              <Reveal key={block.week} delay={i * 100}>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] font-bold mb-4 pb-3 border-b border-[#F8FAFC]/10">
                    {block.week}
                  </div>
                  <ul className="space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#A7B0BA]">
                        <span className="text-[#B7FF00] mt-1 shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Veli / Oyuncu Özeti */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              ÖZET
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mt-2 mb-6 leading-tight">
              VELİ / OYUNCU ÖZETİ
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-[#0d1b2a] rounded-2xl p-7 md:p-9 border border-white/10">
              <p className="text-white/90 leading-relaxed text-base md:text-lg">
                Oyuncunun güçlü ITF Junior potansiyeli var ve rekabetçi istek sergiliyor. Temel gelişim fırsatı, agresif oynamaya çalışmadan önce gereksiz hataları azaltmak. Önümüzdeki antrenman bloğunda odak: ralli derinliği, backhand güveni ve baskı altında servis tutarlılığı.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. Neden Tennis Pro Analysis? */}
      <section className="py-14 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              TPA HAKKINDA
            </div>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mt-2 mb-10 leading-tight">
              NEDEN TENNIS PRO ANALYSIS?
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Koçluk Deneyimi", text: "Avustralya ve Türkiye'de 20+ yıllık tenis ve spor deneyimi." },
              { num: "02", title: "Baseline Vision Destekli", text: "Baseline Vision verileri net geri bildirim ve oyuncu gelişimi için kullanılır." },
              { num: "03", title: "Oyuncu & Veli Dostu", text: "Raporlar, oyuncuların ve velilerin üzerinde çalışılacakları şeyi anlayabileceği açık bir dilde yazılır." },
            ].map((card, i) => (
              <Reveal key={card.num} delay={i * 80}>
                <div className="bg-[#0d1b2a] rounded-2xl p-6 border border-white/10 h-full hover:border-[#B7FF00]/30 transition-colors">
                  <div className="font-anton text-[#B7FF00] text-4xl mb-4">{card.num}</div>
                  <h3 className="font-anton uppercase text-xl text-white mb-3 leading-tight">{card.title}</h3>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Yasal Not */}
      <section className="py-10 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-xs text-[#A7B0BA]/60 leading-relaxed">
            Bu, kurgusal oyuncu verisi kullanan örnek bir tanıtım raporudur. Tennis Pro Analysis otomatik teknik vuruş teşhisi yapma iddiasında bulunmaz ve sahada koçluğun yerini tutmaz. Baseline Vision performans verisi ve görsel geri bildirim sağlar. Tennis Pro Analysis bu verileri koçluk tecrübesiyle yorumlayarak pratik oyuncu gelişim öncelikleri oluşturur.
          </p>
        </div>
      </section>

      {/* 12. Son CTA */}
      <section className="py-16 md:py-20 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[900px] mx-auto bg-[#B7FF00] rounded-2xl p-10 md:p-14 text-center">
          <h2 className="font-anton uppercase text-3xl md:text-4xl text-[#06141F] mb-4 leading-tight">
            OYUNCUNUZ İÇİN RAPOR İSTEYİN
          </h2>
          <p className="text-[#06141F]/80 mb-8 max-w-lg mx-auto leading-relaxed">
            Baseline Vision destekli oyuncu gelişim raporu için Tennis Pro Analysis ile WhatsApp'tan iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#06141F] text-[#B7FF00] px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] hover:bg-[#0d1b2a] transition-colors rounded"
            >
              Oyuncu Raporu Talep Et <ArrowRight size={16} />
            </a>
            <Link
              to="/baseline-vision"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#06141F]/30 text-[#06141F] px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] hover:border-[#06141F] transition-colors rounded"
            >
              Baseline Vision'ı İncele <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
