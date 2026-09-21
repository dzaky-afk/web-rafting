"use client";

import { useState, useRef } from "react";
import { Check, Sparkles, Flame, Waves, Users, ChevronRight } from "lucide-react";
import Image from "next/image";

interface PricingProps {
  onSelectPackage: (name: string, price: number) => void;
}

export default function PricingCards({ onSelectPackage }: PricingProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (idx: number) => {
    if (!sliderRef.current) return;
    const cards = sliderRef.current.children;
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveSlide(idx);
    }
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.85;
    const index = Math.round(scrollLeft / (cardWidth || 1));
    const bounded = Math.min(Math.max(index, 0), 2);
    if (bounded !== activeSlide) {
      setActiveSlide(bounded);
    }
  };

  return (
    <section id="paket-rafting" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 font-heading font-black text-xs sm:text-sm text-[#0052cc] tracking-wider uppercase mb-2.5 px-4 py-1.5 rounded-full glass-pill">
            <Waves className="w-4 h-4" />
            <span>PILIHAN PAKET POPULER</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-900">
            PAKET RAFTING <span className="text-[#0052cc]">CISADANE BOGOR</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Pilihan paket lengkap arung jeram dengan standar keamanan internasional, fasilitas komplit, saung istirahat, dan sajian kuliner khas Sunda.
          </p>
        </div>

        {/* Mobile Swipe Guidance */}
        <div className="flex md:hidden items-center justify-between mb-3.5 px-1">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping"></span>
            <span>Geser kartu untuk lihat semua paket</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#0052cc] font-bold">
            <span>Slide</span>
            <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
          </div>
        </div>

        {/* 3 Glass Cards: Horizontal Snap Carousel on Mobile, 3-Col Grid on Desktop */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-5 md:gap-8 items-stretch mb-6 md:mb-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          
          {/* Card 1: Paket A (7 KM) */}
          <div className="w-[86vw] max-w-[360px] sm:w-[380px] md:w-auto shrink-0 snap-center glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-white/80 shadow-lg">
            <div>
              <div className="p-6 sm:p-7 border-b border-sky-100/70 bg-white/40">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 font-heading font-black text-xs tracking-wider uppercase">
                    PAKET A
                  </span>
                  <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-100">
                    7 KM / ~1.5 Jam
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl text-slate-900 uppercase tracking-tight mb-1">
                  RAFTING BASIC
                </h3>
                <p className="text-xs text-slate-500 font-medium">Jalur santai cocok untuk keluarga, pemula & anak-anak</p>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-baseline gap-1">
                  <span className="font-heading font-black text-lg text-[#0052cc]">Rp</span>
                  <span className="font-heading font-black text-4xl sm:text-5xl text-[#0052cc] tracking-tight">168.000</span>
                  <span className="text-slate-500 font-bold text-xs uppercase">/PAX</span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Fasilitas Termasuk:</div>
                <ul className="space-y-3 text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Perahu Karet & Dayung Standar CE</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Life Jacket & Helm Keselamatan</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Pemandu / Skipper BNSP di Setiap Perahu</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Tim Rescue Standby di Titik Jeram</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Transportasi Lokal Antar-Jemput</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Coffee Break & Snack Tradisional</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Saung Istirahat & Kamar Bilas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Asuransi Kecelakaan Resmi</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 sm:p-7 pt-0">
              <button
                type="button"
                onClick={() => onSelectPackage("Paket A (Rafting Basic 7 KM)", 168000)}
                className="w-full bg-slate-900 hover:bg-[#0052cc] text-white font-heading font-black text-sm py-4 rounded-2xl shadow-md transition-all duration-300 uppercase tracking-wider cursor-pointer"
              >
                PILIH PAKET A
              </button>
            </div>
          </div>

          {/* Card 2: Paket B (11 KM) - BEST SELLER */}
          <div className="w-[86vw] max-w-[360px] sm:w-[380px] md:w-auto shrink-0 snap-center glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border-2 border-sky-400 shadow-2xl relative md:scale-[1.02] bg-white/85">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-sky-500 via-[#0052cc] to-[#003b95] text-white font-heading font-black text-[11px] tracking-wider uppercase px-4 py-1.5 rounded-bl-2xl shadow-md z-10 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              <span>BEST SELLER / PALING FAVORIT</span>
            </div>

            <div>
              <div className="p-6 sm:p-7 border-b border-sky-100 bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-transparent pt-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#0284c7] to-[#0052cc] text-white font-heading font-black text-xs tracking-wider uppercase shadow-sm">
                    PAKET B
                  </span>
                  <span className="text-xs font-black text-[#0052cc] bg-sky-100/80 px-3 py-1 rounded-full border border-sky-200">
                    11 KM / ~2 Jam
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight mb-1">
                  RAFTING COMPLETE
                </h3>
                <p className="text-xs text-sky-800 font-semibold">Sensasi jeram terlengkap + Makan Siang Prasmanan Khas Sunda</p>

                <div className="mt-5 pt-4 border-t border-sky-200/50 flex items-baseline gap-1">
                  <span className="font-heading font-black text-lg text-[#0052cc]">Rp</span>
                  <span className="font-heading font-black text-4xl sm:text-5xl text-[#0052cc] tracking-tight">199.000</span>
                  <span className="text-slate-500 font-bold text-xs uppercase">/PAX</span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="text-xs font-black text-[#0052cc] uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Semua Fasilitas Paket A, PLUS:</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-800 font-medium">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0052cc] text-white flex items-center justify-center shrink-0 text-xs shadow-sm">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold text-slate-900">Jarak Tempuh Lebih Panjang 11 KM (Seluruh Jeram Utama)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0052cc] text-white flex items-center justify-center shrink-0 text-xs shadow-sm">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold text-slate-900">Makan Siang 1x Prasmanan Khas Sunda (Ayam, Sayur Asem, Sambal)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0052cc] text-white flex items-center justify-center shrink-0 text-xs shadow-sm">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold text-slate-900">Kelapa Muda Segar / Es Jeruk di Rest Area Pinggir Sungai</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Dokumentasi Foto Aksi Pengarungan</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Banner Kegiatan Custom untuk Rombongan</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Sound Portable untuk Briefing & Acara</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Saung Gazebo Pribadi & Asuransi Resmi</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 sm:p-7 pt-0">
              <button
                type="button"
                onClick={() => onSelectPackage("Paket B (Rafting Complete 11 KM)", 199000)}
                className="w-full bg-gradient-to-r from-[#0284c7] via-[#0052cc] to-[#003b95] hover:from-[#0369a1] hover:to-[#003b95] text-white font-heading font-black text-sm py-4 rounded-2xl shadow-lg shadow-blue-500/30 transition-all duration-300 uppercase tracking-wider hover:scale-[1.02] cursor-pointer"
              >
                RESERVASI SEKARANG
              </button>
            </div>
          </div>

          {/* Card 3: Paket Combo (Rafting + Paintball) */}
          <div className="w-[86vw] max-w-[360px] sm:w-[380px] md:w-auto shrink-0 snap-center glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-white/80 shadow-lg">
            <div>
              <div className="p-6 sm:p-7 border-b border-sky-100/70 bg-white/40">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 font-heading font-black text-xs tracking-wider uppercase">
                    PAKET COMBO
                  </span>
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-100">
                    Full Day Event
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl text-slate-900 uppercase tracking-tight mb-1">
                  RAFTING + PAINTBALL
                </h3>
                <p className="text-xs text-slate-500 font-medium">Kombinasi petualangan jeram & simulasi perang seru</p>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-baseline gap-1">
                  <span className="font-heading font-black text-lg text-[#0052cc]">Rp</span>
                  <span className="font-heading font-black text-4xl sm:text-5xl text-[#0052cc] tracking-tight">295.000</span>
                  <span className="text-slate-500 font-bold text-xs uppercase">/PAX</span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Fasilitas Termasuk:</div>
                <ul className="space-y-3 text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Rafting Cisadane 11 KM Complete Trip</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Paintball War Game (Senjata Tippmann, 30 Peluru)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Instruktur & Wasit Pertandingan Paintball</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Makan Siang Prasmanan Khas Sunda</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Kelapa Muda Segar & Coffee Break</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Dokumentasi Foto & Spanduk Custom</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Saung Khusus & Asuransi Resmi</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 sm:p-7 pt-0">
              <button
                type="button"
                onClick={() => onSelectPackage("Paket Combo (Rafting + Paintball)", 295000)}
                className="w-full bg-slate-900 hover:bg-[#0052cc] text-white font-heading font-black text-sm py-4 rounded-2xl shadow-md transition-all duration-300 uppercase tracking-wider cursor-pointer"
              >
                PILIH PAKET COMBO
              </button>
            </div>
          </div>

        </div>

        {/* Mobile Slide Switcher Buttons */}
        <div className="flex md:hidden justify-center items-center gap-2 mb-8 px-2">
          <button
            type="button"
            onClick={() => scrollToSlide(0)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeSlide === 0
                ? "bg-[#0052cc] text-white shadow-md shadow-blue-500/25"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Paket A (7 KM)
          </button>
          <button
            type="button"
            onClick={() => scrollToSlide(1)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeSlide === 1
                ? "bg-[#0052cc] text-white shadow-md shadow-blue-500/25 ring-2 ring-sky-300"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Paket B (11 KM)
          </button>
          <button
            type="button"
            onClick={() => scrollToSlide(2)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeSlide === 2
                ? "bg-[#0052cc] text-white shadow-md shadow-blue-500/25"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Paket Combo
          </button>
        </div>

        {/* Group Note */}
        <div className="glass-pill rounded-2xl p-4 sm:p-5 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border border-sky-200/80">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0052cc] border border-sky-200 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="font-heading font-black text-sm text-slate-900 block">Ada Rencana Gathering Rombongan &gt; 50 Orang?</span>
              <span className="text-xs text-slate-600">Dapatkan harga penawaran khusus instansi, proposal resmi &amp; opsi custom itinerary.</span>
            </div>
          </div>
          <a
            href="https://wa.me/6281291068287?text=Halo%20SA%20Adventure,%20kami%20ada%20rencana%20gathering%20rombongan%20besar,%20mohon%20kirimkan%20penawaran%20harga%20khusus"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-[#0052cc] hover:bg-[#003b95] text-white font-heading font-bold text-xs px-5 py-2.5 rounded-xl shadow transition"
          >
            Minta Penawaran Khusus
          </a>
        </div>

      </div>
    </section>
  );
}
