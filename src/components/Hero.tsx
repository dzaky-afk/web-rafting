"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Users, Calendar, Ship, ChevronDown, ChevronUp, Check, X, Compass, Waves, ShieldCheck, Tag, Sparkles } from "lucide-react";

export const HERO_SLIDES = [
  {
    src: "/images/drive_uploads/DSCN9999.JPG",
    alt: "Keseruan Arung Jeram Cisadane SA Adventure",
  },
  {
    src: "/images/drive_uploads/DSCN9782.JPG",
    alt: "Aksi Taklukkan Jeram Cisadane",
  },
  {
    src: "/images/drive_uploads/DSCN9684.JPG",
    alt: "Sensasi Arung Jeram Bogor Menantang",
  },
  {
    src: "/images/drive_uploads/DSCN9924.JPG",
    alt: "Pemandangan & Jeram Alami Sungai Cisadane",
  },
  {
    src: "/images/drive_uploads/DSCN9964.JPG",
    alt: "Kekompakan Tim Rafting SA Adventure",
  },
];

interface HeroPackage {
  id: string;
  title: string;
  shortTitle: string;
  badge: string | null;
  distance: string;
  features: string;
  price: string;
  shortPrice: string;
  value: string;
}

const HERO_PACKAGES: HeroPackage[] = [
  {
    id: "B",
    title: "Paket B - Rafting Complete",
    shortTitle: "Paket B (Complete 11 KM)",
    badge: "Paling Favorit",
    distance: "11 KM • 2 Jam Trip",
    features: "Saung, Makan 1x, Kelapa Muda, Snack, Dokumentasi",
    price: "Rp 199.000",
    shortPrice: "199k",
    value: "Paket B (Rafting Complete - 11 KM - Rp 199k)",
  },
  {
    id: "A",
    title: "Paket A - Rafting Basic",
    shortTitle: "Paket A (Basic 7 KM)",
    badge: null,
    distance: "7 KM • 1.5 Jam Trip",
    features: "Standar Internasional, Saung, Coffee Break & Snack",
    price: "Rp 168.000",
    shortPrice: "168k",
    value: "Paket A (Rafting Basic - 7 KM - Rp 168k)",
  },
  {
    id: "COMBO",
    title: "Paket Combo: Rafting + Paintball",
    shortTitle: "Combo Rafting + Paintball",
    badge: "Populer",
    distance: "11 KM + Paintball War",
    features: "Rafting 11 km, Paintball 30 peluru, Saung, Makan Prasmanan",
    price: "Rp 295.000",
    shortPrice: "295k",
    value: "Paket Combo (Rafting + Paintball - Rp 295k)",
  },
  {
    id: "OUTBOUND",
    title: "Paket Rafting + Outbound Gathering",
    shortTitle: "Rafting + Outbound Gathering",
    badge: "Corporate",
    distance: "11 KM + Team Building",
    features: "Rafting 11 km, Fun Games, Trainer BNSP, Sound & Banner",
    price: "Rp 345.000",
    shortPrice: "345k",
    value: "Paket Outbound Team Building + Rafting",
  },
];

export default function Hero() {
  const [selectedPkg, setSelectedPkg] = useState<HeroPackage>(HERO_PACKAGES[0]);
  const [isPackageExpanded, setIsPackageExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 40) {
      // Swiped left -> next slide
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    } else if (diff < -40) {
      // Swiped right -> prev slide
      setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    }
    setTouchStartX(null);
  };

  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split("T")[0];
  });
  const [pax, setPax] = useState("20");

  const handleQuickBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo SA Adventure, saya ingin cek ketersediaan slot untuk:
- Paket: ${selectedPkg.title} (${selectedPkg.price}/pax)
- Rencana Tanggal: ${date ? date : "waktu dekat ini"}
- Jumlah Peserta: ${pax} Pax

Mohon info ketersediaan jadwal dan prosedur reservasinya. Terima kasih!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6281291068287?text=${encoded}`, "_blank");
  };

  return (
    <section id="home" className="relative text-white bg-slate-950 z-20 pb-8 sm:pb-14">
      {/* MOBILE HERO VIEW: Foto Landscape 4:3 Proporsional + Teks & Info */}
      <div className="block sm:hidden pt-16">
        {/* Landscape Photo Carousel (Rasio 4:3 Landscape Lega) */}
        <div 
          className="relative w-full aspect-[4/3] overflow-hidden select-none bg-slate-950"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Horizontal Slide Track */}
          <div
            className="flex w-full h-full transition-transform duration-700 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {HERO_SLIDES.map((slide, idx) => (
              <div
                key={slide.src}
                className="w-full h-full shrink-0 relative overflow-hidden"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover object-center brightness-[0.96]"
                />
              </div>
            ))}
          </div>

          {/* Bottom subtle gradient on photo */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Dots Carousel Indicator on the Photo */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  currentSlide === idx ? "w-6 bg-sky-400 shadow-sm shadow-sky-400/50" : "w-1.5 bg-white/50"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content Block (Tepat di bawah foto landscape) */}
        <div className="px-4 pt-3.5 pb-2 bg-slate-950">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-[11px] text-slate-200 mb-2 font-semibold shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>4.9/5 (500+ Ulasan) • Cisadane Bogor</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-black text-2xl uppercase tracking-tight leading-[1.15] mb-2 text-white">
            TAKLUKKAN JERAM,{" "}
            <span className="block text-sky-400">RASAKAN PETUALANGAN SEJATI!</span>
          </h1>

          {/* Scroll Down Button to Info */}
          <div className="mt-2.5">
            <a
              href="#info-beranda"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("info-beranda")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-sky-300 font-heading font-bold text-xs px-4 py-2 rounded-full active:scale-95 transition shadow-sm"
            >
              <span>Gulir untuk Rincian & Paket</span>
              <ChevronDown className="w-3.5 h-3.5 text-sky-400 animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      {/* DESKTOP HERO VIEW (sm: and up): Full Height Hero */}
      <div 
        className="hidden sm:flex relative min-h-[92vh] flex-col justify-between pt-24 pb-16 overflow-hidden select-none"
      >
        {/* Background Image Carousel with Pure Horizontal Slide */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="flex w-full h-full transition-transform duration-700 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {HERO_SLIDES.map((slide, idx) => (
              <div
                key={slide.src}
                className="w-full h-full shrink-0 relative overflow-hidden"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover object-center brightness-[0.78]"
                />
              </div>
            ))}
          </div>

          {/* Desktop Gradient Overlay: horizontal balance for wide screens */}
          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/35" />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        {/* Title Block: Desktop */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full my-auto">
          <div className="max-w-3xl">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-xs text-slate-200 mb-6 font-semibold shadow-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.9/5 (500+ Ulasan) • Cisadane Bogor</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-5xl lg:text-6xl uppercase tracking-tight leading-[1.12] mb-6 text-white drop-shadow-md">
              <span className="block">TAKLUKKAN JERAM,</span>
              <span className="block text-sky-400">
                RASAKAN PETUALANGAN SEJATI!
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base text-slate-300 leading-relaxed mb-8 font-normal max-w-2xl">
              Arung jeram seru di Sungai Cisadane Caringin Bogor bersama <strong>SA Adventure</strong>. Nikmati jeram alami Grade II–III+, pemandu berlisensi BNSP, peralatan standar internasional CE, dan sajian makan siang prasmanan Sunda khas pedesaan.
            </p>

            {/* Specs Overview Cards - Desktop */}
            <div className="grid grid-cols-4 gap-3 mb-8 max-w-2xl">
              <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl p-3.5 border border-slate-800 text-center">
                <div className="text-[11px] text-slate-400 font-medium">Jalur Rafting</div>
                <div className="text-base sm:text-lg font-heading font-black text-white mt-0.5">7 & 11 KM</div>
                <div className="text-[10px] text-slate-400 mt-0.5">1.5 - 2.5 Jam Trip</div>
              </div>
              <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl p-3.5 border border-slate-800 text-center">
                <div className="text-[11px] text-slate-400 font-medium">Tingkat Jeram</div>
                <div className="text-base sm:text-lg font-heading font-black text-white mt-0.5">Grade II - III+</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Aman Pemula & Anak</div>
              </div>
              <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl p-3.5 border border-slate-800 text-center">
                <div className="text-[11px] text-slate-400 font-medium">Standar Safety</div>
                <div className="text-base sm:text-lg font-heading font-black text-white mt-0.5">Guide BNSP</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Rescue Standby</div>
              </div>
              <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl p-3.5 border border-slate-800 text-center">
                <div className="text-[11px] text-slate-400 font-medium">Harga Mulai</div>
                <div className="text-base sm:text-lg font-heading font-black text-white mt-0.5">168 Ribu</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Per Pax Lengkap</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rincian Info & 4 Kartu Spesifikasi Khusus Mobile (Muncul saat discroll ke bawah di HP) */}
      <div id="info-beranda" className="block sm:hidden relative z-10 px-4 pt-8 pb-3 bg-slate-950 border-t border-slate-900">
        <div className="inline-flex items-center gap-1.5 text-sky-400 font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Petualangan Cisadane
        </div>
        <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
          Arung jeram seru di Sungai Cisadane Caringin Bogor bersama <strong>SA Adventure</strong>. Nikmati jeram alami Grade II–III+, pemandu berlisensi BNSP, peralatan standar internasional CE, dan sajian makan siang prasmanan Sunda khas pedesaan.
        </p>

        {/* 4 Kartu Spesifikasi 2x2 Grid di HP */}
        <div className="grid grid-cols-2 gap-2.5 mb-2">
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800/90 text-center shadow-sm flex flex-col items-center justify-center">
            <Compass className="w-4 h-4 text-sky-400 mb-1" />
            <div className="text-[10px] text-slate-400 font-medium">Jalur Rafting</div>
            <div className="text-sm font-heading font-black text-white mt-0.5">7 & 11 KM</div>
            <div className="text-[9px] text-slate-400 mt-0.5">1.5 - 2.5 Jam Trip</div>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800/90 text-center shadow-sm flex flex-col items-center justify-center">
            <Waves className="w-4 h-4 text-sky-400 mb-1" />
            <div className="text-[10px] text-slate-400 font-medium">Tingkat Jeram</div>
            <div className="text-sm font-heading font-black text-white mt-0.5">Grade II - III+</div>
            <div className="text-[9px] text-slate-400 mt-0.5">Aman Pemula & Anak</div>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800/90 text-center shadow-sm flex flex-col items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
            <div className="text-[10px] text-slate-400 font-medium">Standar Safety</div>
            <div className="text-sm font-heading font-black text-white mt-0.5">Guide BNSP</div>
            <div className="text-[9px] text-slate-400 mt-0.5">Rescue Standby</div>
          </div>
          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800/90 text-center shadow-sm flex flex-col items-center justify-center">
            <Tag className="w-4 h-4 text-amber-400 mb-1" />
            <div className="text-[10px] text-slate-400 font-medium">Harga Mulai</div>
            <div className="text-sm font-heading font-black text-white mt-0.5">168 Ribu</div>
            <div className="text-[9px] text-slate-400 mt-0.5">Per Pax Lengkap</div>
          </div>
        </div>
      </div>

      {/* Quick Booking Bar with Popover Dropdown */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-10">
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-2xl overflow-hidden">
          <form onSubmit={handleQuickBooking} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 items-end">
            
            {/* Package Selector Trigger Button (In-Flow Expandable) */}
            <div className="w-full min-w-0">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Ship className="w-3.5 h-3.5 text-sky-400" /> Pilih Paket Rafting
                </span>
                <span className="text-[11px] text-sky-400 font-semibold cursor-pointer inline-flex items-center gap-1" onClick={() => setIsPackageExpanded(!isPackageExpanded)}>
                  {isPackageExpanded ? (
                    <>Tutup <ChevronUp className="w-3 h-3" /></>
                  ) : (
                    <>Ganti Paket <ChevronDown className="w-3 h-3" /></>
                  )}
                </span>
              </label>

              <button
                type="button"
                onClick={() => setIsPackageExpanded(!isPackageExpanded)}
                className={`w-full bg-slate-950 hover:bg-slate-900 border rounded-xl px-3.5 py-2.5 text-left text-sm text-white flex items-center justify-between gap-2 transition-all cursor-pointer shadow-sm focus:outline-none ${
                  isPackageExpanded
                    ? "border-sky-400 ring-1 ring-sky-400/50 bg-slate-900"
                    : "border-slate-700 hover:border-slate-500"
                }`}
                aria-expanded={isPackageExpanded}
              >
                <div className="truncate pr-1">
                  <span className="font-semibold text-slate-100 block truncate">
                    {selectedPkg.shortTitle}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-xs font-bold text-sky-400">Rp {selectedPkg.shortPrice}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                      isPackageExpanded ? "rotate-180 text-sky-400" : ""
                    }`}
                  />
                </div>
              </button>

              {/* On Mobile Screens: Horizontal Slideable Carousel */}
              <div
                className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                  isPackageExpanded
                    ? "max-h-[260px] opacity-100 mt-3 pt-2 border-t border-slate-800"
                    : "max-h-0 opacity-0 mt-0 pt-0 border-transparent pointer-events-none"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-1 mb-2">
                  <span>Pilih Paket Rafting:</span>
                  <span className="text-[10px] text-sky-400 font-semibold flex items-center gap-1">
                    Geser ke samping &rarr;
                  </span>
                </div>

                <div className="flex gap-2.5 overflow-x-auto pb-2.5 pt-0.5 scrollbar-none snap-x snap-mandatory -mx-1 px-1">
                  {HERO_PACKAGES.map((item) => {
                    const isSelected = selectedPkg.id === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          setSelectedPkg(item);
                          setIsPackageExpanded(false);
                        }}
                        className={`w-[78vw] max-w-[270px] shrink-0 snap-center p-3 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#0052cc]/30 border-sky-400 text-white shadow-md ring-1 ring-sky-400"
                            : "border-slate-800 bg-slate-950/80 hover:bg-slate-800/80 text-slate-200"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="font-bold text-xs text-white truncate">{item.title}</span>
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            <span className="text-xs font-bold text-sky-400">{item.price}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />}
                          </div>
                        </div>
                        {item.badge && (
                          <span className="inline-block bg-sky-500/20 text-sky-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-sky-500/30 mb-1.5">
                            {item.badge}
                          </span>
                        )}
                        <div className="text-[11px] text-slate-400 flex items-center gap-2">
                          <span className="text-slate-300 font-medium">{item.distance}</span>
                          <span>•</span>
                          <span className="truncate">{item.features}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center items-center gap-1.5 pt-1.5 pb-0.5">
                  {HERO_PACKAGES.map((item) => (
                    <div
                      key={item.id}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        selectedPkg.id === item.id ? "w-5 bg-sky-400" : "w-1.5 bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Date Input */}
            <div className="w-full min-w-0">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-sky-400" /> Rencana Tanggal
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full block min-w-0 max-w-full box-border bg-slate-950 hover:bg-slate-900 border border-slate-700 hover:border-slate-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-sky-400 font-medium transition-colors text-left [color-scheme:dark]"
              />
            </div>

            {/* Pax Input */}
            <div className="w-full min-w-0">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-sky-400" /> Jumlah Peserta (Min. 10)
              </label>
              <div className="flex items-center gap-2 w-full min-w-0">
                <input
                  type="number"
                  min="10"
                  value={pax}
                  onChange={(e) => setPax(e.target.value)}
                  className="flex-1 min-w-0 w-full box-border bg-slate-950 hover:bg-slate-900 border border-slate-700 hover:border-slate-500 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-sky-400 font-medium transition-colors text-left [color-scheme:dark]"
                />
                <span className="text-xs text-slate-400 font-semibold shrink-0">Pax</span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full min-w-0">
              <button
                type="submit"
                className="w-full bg-[#0052cc] hover:bg-[#0041a8] text-white font-heading font-bold text-sm py-2.5 px-4 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Cek Slot & Harga</span>
              </button>
            </div>

            {/* In-flow Expandable Drawer for Desktop (lg+ screens) */}
            <div
              className={`hidden lg:block col-span-4 transition-all duration-300 ease-in-out overflow-hidden ${
                isPackageExpanded
                  ? "max-h-[500px] opacity-100 mt-3 pt-4 border-t border-slate-800"
                  : "max-h-0 opacity-0 mt-0 pt-0 border-transparent pointer-events-none"
              }`}
            >
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  PILIH SALAH SATU PAKET RAFTING DI BAWAH INI:
                </span>
                  <button
                    type="button"
                    onClick={() => setIsPackageExpanded(false)}
                    className="text-xs text-sky-400 hover:text-sky-300 font-medium transition cursor-pointer flex items-center gap-1"
                  >
                    <span>Tutup Pilihan</span>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {HERO_PACKAGES.map((item) => {
                    const isSelected = selectedPkg.id === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          setSelectedPkg(item);
                          setIsPackageExpanded(false);
                        }}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-[#0052cc]/25 border-[#0052cc] text-white shadow-md ring-1 ring-[#0052cc]"
                            : "border-slate-800 bg-slate-950/80 hover:bg-slate-800/80 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="font-bold text-xs text-white leading-tight">{item.title}</span>
                            {item.badge && (
                              <span className="bg-sky-500/20 text-sky-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-sky-500/30 shrink-0">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 mb-1.5">
                            {item.distance}
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                            {item.features}
                          </p>
                        </div>
                        <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                          <span className="font-bold text-xs text-sky-400">{item.price}<span className="text-[10px] text-slate-400 font-normal">/pax</span></span>
                          {isSelected ? (
                            <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" /> Dipilih
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-400 hover:text-white">Pilih</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
}
