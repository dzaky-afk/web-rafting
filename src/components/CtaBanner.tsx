"use client";

import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";

interface CtaBannerProps {
  onOpenBooking?: () => void;
}

export default function CtaBanner({ onOpenBooking }: CtaBannerProps) {
  const waContactUrl =
    "https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20untuk%20booking%20paket%20Rafting%20Cisadane%20Bogor.%20Mohon%20info%20ketersediaan%20slot%20dan%20promo%20terbarunya.";

  const handleBooking = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-booking-flow"));
    }
  };

  return (
    <section
      id="cta-penutup"
      className="relative bg-black text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden border-t border-neutral-800"
    >
      {/* 1. Atmospheric Rafting Photo with Monochromatic Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
        <Image
          src="/images/drive_uploads/DSCN0068.webp"
          alt="Background Rafting Cisadane SA Adventure"
          fill
          quality={60}
          sizes="100vw"
          loading="lazy"
          className="object-cover object-[center_45%] grayscale scale-105 pointer-events-none"
        />
      </div>

      {/* 2. Deep Gradient Vignette for Subtle Editorial Mood */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black pointer-events-none" />

      {/* 3. Subtle Neutral Top Border Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Tag Pill (Monochrome Minimalist) */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-300 font-sans">
              SA ADVENTURE &bull; CISADANE EXPEDITION
            </span>
          </div>
        </div>

        {/* Monumental Headline (Pure Black & White Editorial Serif) */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl text-white tracking-wide leading-tight sm:leading-none uppercase">
            Siap Menaklukkan Jeram Deras <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-gray-300 tracking-normal capitalize block sm:inline mt-1 sm:mt-0">
              &amp; Temukan Kebebasan?
            </span>
          </h2>
          <p className="mt-3.5 sm:mt-5 text-gray-400 font-light font-sans text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Lepaskan penat rutinitas kota. Nikmati hembusan udara sejuk Bogor, gemuruh jeram alami Cisadane, dan momen kebersamaan tak terlupakan bersama tim Anda.
          </p>
        </div>

        {/* 3 Value Cards (Consistent Monochrome Editorial Glass) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5 max-w-5xl mx-auto mb-8 sm:mb-12 font-sans">
          {/* Card 1 */}
          <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/25 rounded-xl p-4 sm:p-6 transition-all duration-300 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 text-white flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-105 transition-transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-0.5 sm:mb-1">
              Safety First
            </span>
            <h3 className="font-serif text-base sm:text-lg text-white font-semibold mb-1">
              Pemandu Berlisensi Resmi
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed font-light m-0">
              River guide berpengalaman 10+ tahun, standar penyelamatan sungai terakreditasi, dan asuransi untuk seluruh peserta.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/20 hover:border-white/35 rounded-xl p-4 sm:p-6 transition-all duration-300 relative group">
            <div className="absolute top-3.5 right-4 bg-white/10 border border-white/20 text-gray-200 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
              Bonus Rombongan
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 text-white flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-105 transition-transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-0.5 sm:mb-1">
              Dokumentasi HD
            </span>
            <h3 className="font-serif text-base sm:text-lg text-white font-semibold mb-1">
              Gratis Foto Aksi &amp; Kelapa Muda
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed font-light m-0">
              Dokumentasi foto aksi jeram terbaik untuk rombongan Anda + kelapa muda segar langsung di rest area tengah sungai.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/25 rounded-xl p-4 sm:p-6 transition-all duration-300 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 text-white flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-105 transition-transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-0.5 sm:mb-1">
              Fasilitas Lengkap
            </span>
            <h3 className="font-serif text-base sm:text-lg text-white font-semibold mb-1">
              Basecamp Asri &amp; Pilihan Villa
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed font-light m-0">
              Saung kumpul luas tepi sungai, kamar bilas bersih, santap siang prasmanan Sunda, dan opsi villa eksklusif berkolam renang.
            </p>
          </div>
        </div>

        {/* Dual High-Conversion CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-xl mx-auto mb-8 sm:mb-10 font-sans">
          <button
            type="button"
            onClick={handleBooking}
            className="w-full sm:w-auto flex-1 bg-white hover:bg-neutral-200 text-black border border-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 sm:px-7 rounded-sm transition-all duration-200 shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>Reservasi Online</span>
          </button>

          <a
            href={waContactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 border border-white text-white hover:bg-white hover:text-black font-bold text-xs uppercase tracking-widest py-3.5 px-6 sm:px-7 rounded-sm transition-all duration-200 shadow-md active:scale-98 flex items-center justify-center gap-2 no-underline cursor-pointer touch-manipulation"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Konsultasi WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges Footer Strip */}
        <div className="pt-6 border-t border-neutral-900 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center justify-center gap-2.5 sm:gap-6 lg:gap-10 text-center font-sans text-[11px] sm:text-xs text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <span className="text-white/60">&bull;</span>
            <span>Standar Keselamatan Teruji Resmi</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-white/60">&bull;</span>
            <span>Garansi Fleksibel Reschedule</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-white/60">&bull;</span>
            <span>100% Harga Transparan Tanpa Biaya Tersembunyi</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-white/60">&bull;</span>
            <span className="text-gray-400">Rating 4.9/5 dari 1.500+ Rombongan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
