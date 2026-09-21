"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Play, ZoomIn, X, Camera, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  title: string;
  subtitle: string;
  tag: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "dam-rafting",
    type: "image",
    src: "/images/drive_uploads/DSCN9927.JPG",
    title: "Sensasi Dam Jeram Pelangi",
    subtitle: "Meluncur di turunan bendungan Cisadane yang menantang & seru",
    tag: "RAFTING CISADANE",
  },
  {
    id: "paintball",
    type: "image",
    src: "/images/drive_uploads/7.png",
    title: "Paintball Wargame Simulasi",
    subtitle: "Uji taktik, strategi tempur, & kekompakan di medan alam terbuka",
    tag: "PAINTBALL",
  },
  {
    id: "video",
    type: "video",
    src: "/images/drive_uploads/29598.jpg",
    title: "LET'S MAKE MEMORIES!",
    subtitle: "Tonton cuplikan keseruan petualangan bersama SA Adventure",
    tag: "VIDEO HIGHLIGHT",
  },
  {
    id: "flying-fox",
    type: "image",
    src: "/images/drive_uploads/6.png",
    title: "Meluncur di Atas Kanopi Alam",
    subtitle: "Uji adrenalin meluncur kencang di antara rimbunnya pepohonan",
    tag: "FLYING FOX",
  },
  {
    id: "fun-games",
    type: "image",
    src: "/images/drive_uploads/8.png",
    title: "Tawa Ceria & Fun Games",
    subtitle: "Ice breaking seru dan tawa lepas mempererat tali persaudaraan",
    tag: "FUN GAMES",
  },
  {
    id: "color-run",
    type: "image",
    src: "/images/drive_uploads/5.png",
    title: "Festival Seru Color Powder Run",
    subtitle: "Momen kebersamaan penuh warna keceriaan di lapangan rumput",
    tag: "OUTBOUND",
  },
  {
    id: "corporate",
    type: "image",
    src: "/images/drive_uploads/DSCN9964.JPG",
    title: "Corporate Gathering Resmi",
    subtitle: "Dipercaya oleh instansi & perusahaan terkemuka Indonesia",
    tag: "CORPORATE EVENT",
  },
  {
    id: "rapid-action",
    type: "image",
    src: "/images/drive_uploads/3.png",
    title: "Menerjang Arus Liar Cisadane",
    subtitle: "Kerjasama mendayung menaklukkan deburan ombak jeram putih",
    tag: "ARUNG JERAM",
  },
  {
    id: "team-building",
    type: "image",
    src: "/images/drive_uploads/DSCN9684.JPG",
    title: "Sinergi Tim & Solidaritas",
    subtitle: "Program team building terstruktur untuk mempererat kerjasama tim",
    tag: "TEAM BUILDING",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; caption: string } | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number>(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const totalItems = GALLERY_ITEMS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  useEffect(() => {
    if (isPaused) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }
    autoPlayTimerRef.current = setInterval(nextSlide, 4000);
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) diff > 0 ? nextSlide() : prevSlide();
    setIsPaused(false);
  };

  return (
    <section
      id="galeri"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-sky-50/40 to-white border-t border-sky-100 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sky-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-black tracking-widest uppercase text-[#0052cc] bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full mb-3">
              <Camera className="w-3.5 h-3.5 shrink-0" />
              DOKUMENTASI KESERUAN
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-900 leading-[1.1]">
              CAPTURE{" "}
              <span className="text-[#0052cc]">THE ADVENTURE</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed">
              Momen keceriaan dan kebersamaan tak terlupakan bersama SA Adventure.
              Geser atau gunakan tombol panah untuk menjelajahi dokumentasi kegiatan.
            </p>
          </div>

          {/* Slide counter + Nav buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-sm font-bold text-slate-400 tabular-nums select-none">
              <span className="text-slate-800">{String(currentIndex + 1).padStart(2, "0")}</span>
              {" / "}
              {String(totalItems).padStart(2, "0")}
            </span>
            <button
              onClick={prevSlide}
              aria-label="Slide Sebelumnya"
              className="w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-slate-600 hover:text-[#0052cc] border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Slide Selanjutnya"
              className="w-11 h-11 rounded-full bg-[#0052cc] hover:bg-[#0041a8] text-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel with edge fade */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-14 bg-gradient-to-r from-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-14 bg-gradient-to-l from-white/80 to-transparent z-10" />

          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex gap-5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] py-3 cursor-grab active:cursor-grabbing select-none"
              style={{
                transform: `translateX(calc(-${currentIndex} * (min(360px, 78vw) + 20px)))`,
              }}
            >
              {GALLERY_ITEMS.map((item, index) => {
                const isVideo = item.type === "video";
                const isActive = index === currentIndex;

                return (
                  <div
                    key={item.id}
                    className={`w-[78vw] sm:w-[300px] md:w-[330px] lg:w-[360px] shrink-0 transition-all duration-500 ${
                      isActive ? "scale-100 opacity-100" : "scale-[0.97] opacity-70"
                    }`}
                  >
                    <div
                      onClick={() => {
                        if (isVideo) setIsVideoOpen(true);
                        else setLightboxImg({ src: item.src, caption: item.title });
                      }}
                      className={`relative h-72 sm:h-80 lg:h-[340px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer ${
                        isVideo
                          ? "border-2 border-sky-400 bg-slate-950"
                          : "border border-slate-200/70 hover:border-sky-300/60 bg-slate-900"
                      }`}
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                          isVideo ? "opacity-60" : "brightness-90"
                        }`}
                      />

                      {isVideo ? (
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent flex flex-col items-center justify-center text-center px-6 py-8 text-white">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform mb-4">
                            <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#0052cc] text-[#0052cc] ml-1" />
                          </div>
                          <span className="bg-sky-500/30 backdrop-blur-sm text-sky-200 border border-sky-300/30 text-[10px] font-black tracking-widest uppercase px-3 py-0.5 rounded-full mb-2">
                            {item.tag}
                          </span>
                          <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight leading-tight">
                            LET&apos;S MAKE <br />
                            <span className="text-sky-300">MEMORIES!</span>
                          </h3>
                          <p className="text-xs text-slate-300 mt-2">Klik untuk menonton cuplikan video</p>
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-between p-5 text-white">
                          <div className="self-end w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <ZoomIn className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <span className="inline-block bg-sky-500/25 backdrop-blur-sm text-sky-200 border border-sky-400/30 text-[10px] font-black tracking-widest uppercase px-3 py-0.5 rounded-full mb-1.5">
                              {item.tag}
                            </span>
                            <h3 className="font-heading font-bold text-base sm:text-lg leading-snug drop-shadow-sm">
                              {item.title}
                            </h3>
                            <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-relaxed">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {GALLERY_ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-7 h-2 bg-[#0052cc]"
                  : "w-2 h-2 bg-slate-300 hover:bg-sky-400"
              }`}
            />
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="relative h-[60vh] sm:h-[70vh] w-full bg-black">
              <Image
                src={lightboxImg.src}
                alt={lightboxImg.caption}
                fill
                className="object-contain"
              />
            </div>
            <div className="px-5 py-3.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
              <p className="text-sm font-heading font-bold text-white">{lightboxImg.caption}</p>
              <span className="text-xs text-sky-400 font-semibold">SA Adventure Bogor</span>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-sky-500/30 p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="text-center mb-5">
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                LET&apos;S MAKE <span className="text-sky-300">MEMORIES!</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-md mx-auto">
                Saksikan cuplikan keseruan rafting, outbound, flying fox, dan offroad bersama SA Adventure di Cisadane Bogor.
              </p>
            </div>
            <div className="relative pt-[56.25%] w-full rounded-xl overflow-hidden bg-black border border-slate-800">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video Keseruan SA Adventure"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
