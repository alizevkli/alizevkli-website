import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SOCIAL } from "../constants/images";

const WA_URL = SOCIAL.whatsappUrl;

const PhoneFrame = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="w-full max-w-[280px] mx-auto">
      <div className="bg-[#0d1b2a] border border-white/10 rounded-2xl overflow-hidden shadow-xl ring-1 ring-lime-400/10 min-h-[160px] flex items-center justify-center">
        {failed ? (
          <p className="text-[#A7B0BA] text-sm p-6 text-center leading-relaxed">
            Örnek ekran görüntüsü
          </p>
        ) : (
          <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="w-full object-contain block"
            style={{ maxHeight: "300px" }}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

const KoclukOnceligi = ({ text }) => (
  <div className="border-l-4 border-lime-400 bg-lime-400/10 p-4 rounded-r-xl text-sm mt-4">
    <span className="text-[10px] uppercase tracking-[0.3em] text-lime-400 font-bold block mb-1">
      KOÇLUK ÖNCELİĞİ
    </span>
    <p className="text-white/90">{text}</p>
  </div>
);

const Chip = ({ label, value }) => (
  <div className="flex flex-col items-center bg-[#06141F] border border-[#F8FAFC]/10 rounded-xl px-4 py-3 min-w-[100px]">
    <span className="font-anton text-[#B7FF00] text-base leading-none">{value}</span>
    <span className="text-[9px] uppercase tracking-[0.2em] text-[#A7B0BA] mt-1 text-center">{label}</span>
  </div>
);

const OrnekNotu = () => (
  <p className="text-[9px] uppercase tracking-[0.2em] text-[#A7B0BA]/50 text-center mt-2">
    Bu veriler örnek gösterim amaçlıdır.
  </p>
);

const OnerilenCalisma = ({ text }) => (
  <p className="text-sm text-[#A7B0BA] mt-3">
    <span className="text-lime-400 font-semibold">Önerilen çalışma:</span> {text}
  </p>
);

export default function SampleReportTR() {
  return (
    <div data-testid="page-ornek-rapor" className="bg-[#0A1220] text-white overflow-x-hidden">

      {/* 1. Hero */}
      <section className="pt-36 md:pt-44 pb-12 md:pb-16 px-5 md:px-10 bg-[#06141F]">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[#B7FF00] mb-5 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#B7FF00]" />
              TENNIS PRO ANALYSIS
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-anton uppercase text-4xl md:text-6xl lg:text-7xl text-white leading-[0.93] mb-5">
              ÖRNEK OYUNCU<br />GELİŞİM RAPORU
            </h1>
          </Reveal>
          <Reveal delay={130}>
            <p className="text-base md:text-lg text-[#A7B0BA] leading-relaxed max-w-2xl mb-4">
              Veriler tek başına karar vermez. Ali Zevkli, bu verileri koçluk deneyimiyle yorumlayarak oyuncu için uygulanabilir gelişim öncelikleri oluşturur.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <div className="inline-block border border-lime-400/40 text-lime-400 text-[10px] uppercase tracking-[0.3em] px-4 py-2 mb-8 rounded">
              TAMAMEN KURGUSAL OYUNCU VERİSİ — SADECE ÖRNEK
            </div>
          </Reveal>
          <Reveal delay={210}>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tpa-btn-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
            >
              WhatsApp'tan Rapor Talep Et <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* 1b. Rapor Kapak Kartı */}
      <section className="py-8 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="border-2 border-lime-400/60 rounded-2xl p-7 bg-[#0d1b2a]">
              <div className="text-xs uppercase tracking-widest text-[#B7FF00] mb-2">TENNIS PRO ANALYSIS</div>
              <h2 className="font-black text-xl text-white mb-2 leading-tight">ÖRNEK OYUNCU GELİŞİM RAPORU</h2>
              <p className="text-sm text-[#A7B0BA] mb-1">Seans: Maç ve Seans Performans Değerlendirmesi</p>
              <p className="text-sm text-[#B7FF00]">Odak: Hata azaltma · backhand güveni · servis tutarlılığı</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Oyuncu Profili */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="bg-[#0d1b2a] rounded-2xl p-7 md:p-9 border-l-4 border-[#B7FF00]">
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-5">OYUNCU PROFİLİ</div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["Yaş", "16"],
                  ["Seviye", "ITF Junior — Türkiye / Uluslararası Devre"],
                  ["Hedef", "ITF Junior Gelişimi"],
                  ["Seans Tipi", "Maç ve Seans Gelişim Değerlendirmesi"],
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
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-8 leading-tight">
              BU RAPOR NELERİ KAPSAR?
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Seans Veri İncelemesi" },
              { num: "02", title: "Koçluk Yorumu" },
              { num: "03", title: "4 Haftalık Öncelikler" },
              { num: "04", title: "Veli / Oyuncu Özeti" },
            ].map((card, i) => (
              <Reveal key={card.num} delay={i * 60}>
                <div className="bg-[#06141F] border border-[#F8FAFC]/10 p-5 rounded-2xl hover:border-[#B7FF00]/30 transition-colors text-center">
                  <div className="font-anton text-[#B7FF00] text-3xl mb-3">{card.num}</div>
                  <h3 className="font-anton uppercase text-sm text-white leading-tight">{card.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Maç Performansı */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-anton text-[#B7FF00]/30 text-5xl leading-none select-none">01</span>
              <h2 className="font-anton uppercase text-2xl md:text-3xl text-white leading-tight">MAÇ PERFORMANSI</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal>
              <div>
                <PhoneFrame
                  src="/images/baseline/baseline-match-stats.png"
                  alt="Örnek maç istatistikleri — Tennis Pro Analysis oyuncu gelişim raporu"
                />
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <Chip label="Kazanılan Puan" value="%62" />
                  <Chip label="Hatalar" value="13" />
                  <Chip label="Servis Puanı" value="%59" />
                </div>
                <OrnekNotu />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-col gap-4">
                <p className="text-[#A7B0BA] leading-relaxed text-sm md:text-base">
                  %62 kazanılan puan iyi bir genel performansı yansıtıyor. Ancak yüksek hata sayısı (rakibe karşı 13'e 4) temel gelişim alanını ortaya koyuyor: nötr rallilerdeki gereksiz hatalar. 3 çift hata ve %59 servis puanı kazanma oranı, servis tutarlılığının da öncelikli çalışma konusu olduğunu gösteriyor.
                </p>
                <KoclukOnceligi text="Agresif oynamaya geçmeden önce nötr rallilerdeki hataları azalt." />
                <OnerilenCalisma text="20 toplu derin çapraz ralli + hata limiti" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Vuruş Desenleri */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-anton text-[#B7FF00]/30 text-5xl leading-none select-none">02</span>
              <h2 className="font-anton uppercase text-2xl md:text-3xl text-white leading-tight">VURUŞ DESENLERİ</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal delay={120} className="md:order-2">
              <div className="flex flex-col gap-4">
                <p className="text-[#A7B0BA] leading-relaxed text-sm md:text-base">
                  Top dağılımı %61 forehand ağırlıklı — backhand tarafından belirgin kaçınma eğilimi. Top derinliği orta kort bölgesinde yoğunlaşıyor; ITF Junior seviyesinde fark yaratacak olan daha derin top yerleşimi olacak.
                </p>
                <KoclukOnceligi text="Backhand tarafında güven oluştur ve çapraz desenlerde derinliği artır." />
                <OnerilenCalisma text="Backhand hedef bölgeli çapraz ralli + derinlik bonusu" />
              </div>
            </Reveal>
            <Reveal className="md:order-1">
              <div>
                <PhoneFrame
                  src="/images/baseline/baseline-ground-strokes.png"
                  alt="Örnek vuruş dağılım verisi — Tennis Pro Analysis"
                />
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <Chip label="FH / BH" value="%61/%39" />
                  <Chip label="Ort. Hız" value="90 km/s" />
                </div>
                <OrnekNotu />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Servis Eğilimleri */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-anton text-[#B7FF00]/30 text-5xl leading-none select-none">03</span>
              <h2 className="font-anton uppercase text-2xl md:text-3xl text-white leading-tight">SERVİS EĞİLİMLERİ</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Reveal>
              <div>
                <PhoneFrame
                  src="/images/baseline/baseline-serve-stats.png"
                  alt="Örnek servis hızı ve yerleşim verisi — Tennis Pro Analysis"
                />
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <Chip label="Ort. Hız" value="165 km/s" />
                  <Chip label="1. Servis" value="%50" />
                </div>
                <OrnekNotu />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-col gap-4">
                <p className="text-[#A7B0BA] leading-relaxed text-sm md:text-base">
                  Birinci servis hızı bu yaş grubu için güçlü. Ancak %50'lik birinci servis isabet oranı ikinci servis üzerinde gereksiz baskı yaratıyor. Daha fazla yerleşim çeşitliliği ve spinli ikinci servis bir sonraki gelişim odağı.
                </p>
                <KoclukOnceligi text="Birinci servis isabet oranını artır, ikinci servisi güvenilir silaha dönüştür." />
                <OnerilenCalisma text="10 hedefli birinci servis + spinli ikinci servis baskı oyunu" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. 4 Haftalık Koçluk Öncelikleri */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-8 leading-tight">
              4 HAFTALIK KOÇLUK ÖNCELİKLERİ
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Ralli Derinliği",     text: "Servis çizgisinin ötesine düşen tutarlı çapraz ralli. Yön değiştirmeden önce nötr top toleransı." },
              { num: "02", title: "Backhand Geliştirme", text: "Hedef bölgeli backhand çalışmaları. Backhand savunma değil tarafsız silah haline gelmeli." },
              { num: "03", title: "Servis Tutarlılığı",  text: "Birinci servis isabet oranını artır. Spin ve derinlikle güvenilir ikinci servis geliştir." },
            ].map((card, i) => (
              <Reveal key={card.num} delay={i * 80}>
                <div className="bg-[#0d1b2a] rounded-2xl p-6 border border-white/10 hover:border-[#B7FF00]/30 transition-colors h-full">
                  <div className="font-anton text-[#B7FF00] text-4xl mb-4">{card.num}</div>
                  <h3 className="font-anton uppercase text-lg text-white mb-2 leading-tight">{card.title}</h3>
                  <p className="text-sm text-[#A7B0BA] leading-relaxed">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 2 Haftalık Aksiyon Planı */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-8 leading-tight">
              2 HAFTALIK OYUNCU AKSİYON PLANI
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { week: "HAFTA 1 — TEMEL", items: ["Derin ralli tolerans çalışmaları", "Çapraz desen tutarlılığı", "Backhand hedef bölgesi çalışması", "Servis yerleşim pratiği (baskısız)"] },
              { week: "HAFTA 2 — UYGULAMA", items: ["Ralli yapısıyla maç oyun durumları", "Rekabetçi drill senaryolarında backhand", "Simüle baskı altında servis", "Oyuncu ve veli ile video incelemesi"] },
            ].map((block, i) => (
              <Reveal key={block.week} delay={i * 100}>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#B7FF00] font-bold mb-4 pb-3 border-b border-[#F8FAFC]/10">
                    {block.week}
                  </div>
                  <ul className="space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#A7B0BA]">
                        <span className="text-[#B7FF00] mt-1 shrink-0">·</span>{item}
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
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-6 leading-tight">
              VELİ / OYUNCU ÖZETİ
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-[#0d1b2a] rounded-2xl p-7 md:p-9 border border-white/10">
              <p className="text-white/90 leading-relaxed text-base md:text-lg">
                Güçlü ITF Junior potansiyeli ve iyi rekabetçi istek var. En belirgin gelişim fırsatı, agresif oynamadan önce hataları azaltmak. Önümüzdeki antrenman bloğu: ralli derinliği, backhand güveni, baskı altında servis tutarlılığı.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. Neden Tennis Pro Analysis? */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <h2 className="font-anton uppercase text-3xl md:text-4xl text-white mb-8 leading-tight">
              NEDEN TENNIS PRO ANALYSIS?
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Koçluk Deneyimi",      text: "Avustralya ve Türkiye'de tenis ve spor deneyimi — kulüpler, akademiler ve turnuva ortamları." },
              { num: "02", title: "Veri Destekli Metod",  text: "Seans verileri net geri bildirim, ölçülebilir takip ve uygulanabilir gelişim planları için kullanılır." },
              { num: "03", title: "Oyuncu & Veli Dostu",  text: "Raporlar, oyuncular ve velilerin üzerinde çalışılacakları şeyi net biçimde anlayabileceği dilde yazılır." },
            ].map((card, i) => (
              <Reveal key={card.num} delay={i * 80}>
                <div className="bg-[#0d1b2a] rounded-2xl p-6 border border-white/10 hover:border-[#B7FF00]/30 transition-colors h-full">
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
      <section className="py-6 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#0B1F33]/40">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-xs text-[#A7B0BA]/50 leading-relaxed">
            Örnek rapor — tamamen kurgusal oyuncu verisi, yalnızca tanıtım amaçlıdır. Tennis Pro Analysis koçluk deneyimiyle seans verilerini yorumlar; sahada koçluğun yerini tutmaz.
          </p>
        </div>
      </section>

      {/* 12. CTA */}
      <section className="py-12 md:py-16 px-5 md:px-10 border-t border-[#F8FAFC]/10 bg-[#06141F]">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#B7FF00] mb-4">TENNIS PRO ANALYSIS</div>
            <h2 className="font-anton uppercase text-4xl md:text-5xl text-white mb-4 leading-tight">
              OYUNCUNUZ İÇİN RAPOR İSTEYİN
            </h2>
            <p className="text-[#A7B0BA] max-w-xl mx-auto mb-8 leading-relaxed">
              Oyuncunuz için benzer bir gelişim raporu hazırlayalım.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tpa-btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em]"
              >
                WhatsApp'tan Rapor Talep Et <ArrowRight size={16} />
              </a>
              <Link
                to="/tpa-method"
                className="inline-flex items-center justify-center gap-2 border border-[#F8FAFC]/20 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white hover:border-[#B7FF00]/50 transition-colors"
              >
                Daha Fazla Bilgi <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
