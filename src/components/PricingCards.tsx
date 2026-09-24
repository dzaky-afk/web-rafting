"use client";

import { useState, useRef } from "react";
import { Check, Flame, ChevronRight, Users } from "lucide-react";
import Image from "next/image";

interface PricingProps {
  onSelectPackage?: (name: string, price?: number) => void;
}

export default function PricingCards({ onSelectPackage }: PricingProps) {
  const [activeSlide, setActiveSlide] = useState(1);
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
    <section id="paket-rafting" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-brand-gray relative scroll-mt-20">
      <div id="services" className="scroll-mt-20" />
      <div id="paket" className="scroll-mt-20" />
      <div id="pilihan-paket" className="scroll-mt-20" />
      <div id="packages" className="scroll-mt-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-3 block font-sans">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark tracking-wide">
            Our Rafting Packages
          </h2>
          <p className="mt-4 text-gray-500 font-light text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Pilihan paket petualangan arung jeram Cisadane berstandar keamanan internasional, pemandu BNSP berpengalaman, dan kuliner tradisional Sunda.
          </p>
        </div>

        {/* Mobile Swipe Guidance */}
        <div className="flex md:hidden items-center justify-between mb-4 px-2 font-sans">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-dark animate-ping"></span>
            <span>Geser kartu untuk melihat seluruh paket</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-brand-dark font-bold uppercase tracking-wider">
            <span>Slide</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* 3 Editorial Cards: Carousel on mobile, 3-col grid on desktop */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-8 items-stretch mb-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {/* Card 1: Paket A (7 KM) */}
          <div className="w-[86vw] max-w-[370px] md:w-auto shrink-0 snap-center service-card group cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 flex flex-col justify-between">
            <div>
              {/* Card Photo with Zoom Hover */}
              <div className="h-56 overflow-hidden relative">
                <Image
                  src="/images/drive_uploads/3.png"
                  alt="Rafting Basic 7 KM"
                  fill
                  className="service-img w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brand-dark shadow-sm font-sans">
                  7 KM / ~1.5 Jam
                </div>
              </div>

              {/* Header Info */}
              <div className="p-6 sm:p-8 border-b border-gray-100 text-center font-sans">
                <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400 block mb-1">
                  PAKET A
                </span>
                <h3 className="font-serif text-2xl text-brand-dark mb-2">
                  Rafting Basic
                </h3>
                <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed mb-4">
                  Jalur ramah keluarga, pemula, dan anak-anak dengan pemandangan alami Cisadane.
                </p>
                <div className="pt-2 flex items-baseline justify-center gap-1">
                  <span className="text-xs uppercase font-medium text-gray-400 tracking-wider">Mulai</span>
                  <span className="font-serif text-3xl font-bold text-brand-dark">Rp 168.000</span>
                  <span className="text-[11px] text-gray-400 font-medium uppercase">/pax</span>
                </div>
              </div>

              {/* Feature List */}
              <div className="p-6 sm:p-8 pt-6 font-sans">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-4">
                  Fasilitas Termasuk:
                </span>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-600 font-light">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Perahu karet &amp; dayung standar CE</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Pelampung daya apung tinggi &amp; helm safety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Pemandu (Skipper) berlisensi BNSP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Tim rescue standby di titik jeram ekstrem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Transportasi lokal antar titik finish</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Kelapa muda segar &amp; snack tradisional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Saung gazebo &amp; kamar bilas bersih</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Asuransi keselamatan resmi</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 sm:p-8 pt-0 font-sans">
              <a
                href={`https://wa.me/6281291068287?text=${encodeURIComponent("Halo SA Adventure, saya ingin reservasi / booking tiket:\n• Pilihan: Paket A (Rafting Explorer 7 KM - Rp 168.000/pax)\n\nMohon informasi jadwal yang tersedia dan panduan reservasi. Terima kasih!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white uppercase tracking-widest text-xs font-bold py-3.5 transition-colors duration-300 cursor-pointer no-underline"
              >
                Booking Online - Paket A (7 KM)
              </a>
            </div>
          </div>

          {/* Card 2: Paket B (11 KM) - BEST SELLER */}
          <div className="w-[86vw] max-w-[370px] md:w-auto shrink-0 snap-center service-card group cursor-pointer bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-brand-dark flex flex-col justify-between relative md:-translate-y-2">
            <div className="absolute top-0 right-0 bg-brand-dark text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 z-20 flex items-center gap-1.5 font-sans">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>MOST POPULAR</span>
            </div>

            <div>
              {/* Card Photo */}
              <div className="h-56 overflow-hidden relative">
                <Image
                  src="/images/drive_uploads/DSCN9927.JPG"
                  alt="Rafting Complete 11 KM"
                  fill
                  className="service-img w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brand-dark shadow-sm font-sans">
                  11 KM / ~2 Jam
                </div>
              </div>

              {/* Header Info */}
              <div className="p-6 sm:p-8 border-b border-gray-100 text-center font-sans">
                <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400 block mb-1">
                  PAKET B • POPULER
                </span>
                <h3 className="font-serif text-2xl text-brand-dark mb-2">
                  Rafting Complete
                </h3>
                <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed mb-4">
                  Pengarungan jeram terpanjang melintasi seluruh jeram ikonik &amp; Dam 2 Meter.
                </p>
                <div className="pt-2 flex items-baseline justify-center gap-1">
                  <span className="text-xs uppercase font-medium text-gray-400 tracking-wider">Mulai</span>
                  <span className="font-serif text-3xl font-bold text-brand-dark">Rp 199.000</span>
                  <span className="text-[11px] text-gray-400 font-medium uppercase">/pax</span>
                </div>
              </div>

              {/* Feature List */}
              <div className="p-6 sm:p-8 pt-6 font-sans">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-4">
                  Semua Fasilitas Paket A, Ditambah:
                </span>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-600 font-light">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span className="font-medium text-brand-dark">Jarak tempuh maksimal 11 KM (Jeram Komplit)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span className="font-medium text-brand-dark">Makan siang prasmanan lengkap menu tradisional Sunda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Kelapa muda utuh dinikmati langsung di saung tepi sungai</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Dokumentasi foto aksi selama pengarungan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Spanduk kegiatan selamat datang untuk rombongan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Saung gazebo privat &amp; asuransi resmi komprehensif</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 sm:p-8 pt-0 font-sans">
              <a
                href={`https://wa.me/6281291068287?text=${encodeURIComponent("Halo SA Adventure, saya ingin reservasi / booking tiket:\n• Pilihan: Paket B (Rafting Complete 11 KM - Rp 199.000/pax)\n\nMohon informasi jadwal yang tersedia dan panduan reservasi. Terima kasih!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-brand-dark text-white hover:bg-neutral-800 uppercase tracking-widest text-xs font-bold py-3.5 transition-colors duration-300 shadow-md cursor-pointer no-underline"
              >
                Booking Online - Paket B (11 KM)
              </a>
            </div>
          </div>

          {/* Card 3: Paket Combo (Rafting + Paintball) */}
          <div className="w-[86vw] max-w-[370px] md:w-auto shrink-0 snap-center service-card group cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 flex flex-col justify-between">
            <div>
              {/* Card Photo */}
              <div className="h-56 overflow-hidden relative">
                <Image
                  src="/images/drive_uploads/7.png"
                  alt="Rafting and Paintball Combo"
                  fill
                  className="service-img w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brand-dark shadow-sm font-sans">
                  Full Day Event
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 font-sans">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-sans font-bold uppercase tracking-wider text-gray-400">
                    ADVENTURE COMBO
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Outbound &amp; War</span>
                </div>

                <h3 className="font-serif text-2xl text-brand-dark mb-2">
                  Paket Rafting + Paintball
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  Kombinasi terfavorit untuk gathering perusahaan: serunya arung jeram Cisadane dilanjutkan simulasi perang paintball di hutan pinus.
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-gray-100 flex items-baseline gap-1">
                  <span className="text-xs text-gray-400 font-medium">Mulai</span>
                  <span className="font-serif text-3xl font-bold text-brand-dark">Rp 295.000</span>
                  <span className="text-xs text-gray-400 font-light">/ Orang</span>
                </div>

                {/* Feature List */}
                <ul className="space-y-3 text-xs sm:text-sm text-gray-600 font-sans mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Rafting Cisadane 7 KM + Paintball Wargame</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Makan siang prasmanan Sunda &amp; kelapa muda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Dokumentasi foto &amp; banner kegiatan custom</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-dark shrink-0 mt-0.5" />
                    <span>Saung khusus &amp; asuransi resmi</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 sm:p-8 pt-0 font-sans">
              <a
                href={`https://wa.me/6281291068287?text=${encodeURIComponent("Halo SA Adventure, saya ingin reservasi / booking tiket:\n• Pilihan: Paket Combo (Rafting 11 KM + Paintball - Rp 295.000/pax)\n\nMohon informasi jadwal yang tersedia dan panduan reservasi. Terima kasih!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white uppercase tracking-widest text-xs font-bold py-3.5 transition-colors duration-300 cursor-pointer no-underline"
              >
                Booking Online - Paket Combo
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Slide Indicator: Garis Saja */}
        <div className="flex md:hidden justify-center items-center gap-2 mb-10 px-4">
          {[
            { label: "Paket A (7 KM)" },
            { label: "Paket B (11 KM)" },
            { label: "Paket Combo" },
          ].map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToSlide(idx)}
              aria-label={item.label}
              className="py-2.5 px-1 cursor-pointer focus:outline-none"
            >
              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeSlide === idx
                    ? "w-10 bg-brand-dark"
                    : "w-4 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Gathering / Corporate Custom Banner */}
        <div className="border border-gray-300 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm font-sans">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 border border-brand-dark text-brand-dark flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl text-brand-dark block font-bold">
                Rencana Gathering Rombongan atau Kantor?
              </span>
              <p className="text-xs sm:text-sm text-gray-500 font-light mt-1">
                Dapatkan proposal resmi, penawaran harga spesial instansi, dan kustomisasi rundown acara.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/6281291068287?text=Halo%20SA%20Adventure,%20kami%20ada%20rencana%20gathering%20rombongan%20besar,%20mohon%20kirimkan%20penawaran%20harga%20khusus"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 border border-brand-dark bg-brand-dark text-white hover:bg-neutral-800 uppercase tracking-widest text-xs font-bold px-8 py-3.5 transition-colors duration-300"
          >
            Minta Penawaran Khusus
          </a>
        </div>
      </div>
    </section>
  );
}
