"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  type?: "image" | "video";
}

const FEATURED_ITEMS: GalleryPhoto[] = [
  {
    id: "rapids-action",
    src: "/images/drive_uploads/DSCN9927.JPG",
    title: "The Rapids",
    subtitle: "Menembus jeram deras dan turunan dam Cisadane",
  },
  {
    id: "river-view",
    src: "/images/drive_uploads/DSCN9978.JPG",
    title: "Ready to Paddle",
    subtitle: "Ratusan peserta siap meluncur dengan dayung dan pelampung di Sungai Cisadane",
  },
  {
    id: "team-spirit",
    src: "/images/drive_uploads/DSCN9684.JPG",
    title: "Team Spirit",
    subtitle: "Kekompakan dan sinergi outbound di alam terbuka",
  },
  {
    id: "paintball-wargame",
    src: "/images/drive_uploads/DSCN9730.JPG",
    title: "Tactical Battle",
    subtitle: "Tim paintball berseragam camouflage siap tempur di arena SA Adventure",
  },
  {
    id: "celebration",
    src: "/images/drive_uploads/DSCN9802.JPG",
    title: "Joy & Memories",
    subtitle: "Keceriaan dan kebersamaan peserta usai menaklukkan jeram Sungai Cisadane",
  },
];

const EXTRA_ITEMS: GalleryPhoto[] = [
  {
    id: "rapid-stream",
    src: "/images/drive_uploads/DSCN9694.JPG",
    title: "White Water Rush",
    subtitle: "Semangat tim bonding Group 4 berpose sebelum terjun ke jeram Cisadane",
  },
  {
    id: "flying-fox",
    src: "/images/drive_uploads/DSCN9782.JPG",
    title: "Team Bonding",
    subtitle: "Kekompakan tim dalam sesi outbound di alam terbuka Bogor",
  },
  {
    id: "corporate-crew",
    src: "/images/drive_uploads/DSCN9964.JPG",
    title: "Gathering Harmony",
    subtitle: "Ratusan peserta gathering instansi dan perusahaan",
  },
  {
    id: "fun-games",
    src: "/images/drive_uploads/DSCN9685.JPG",
    title: "Laughter & Games",
    subtitle: "Keseruan sesi ice breaking dan permainan interaktif antar peserta outbound",
  },
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const allPhotos = showAll ? [...FEATURED_ITEMS, ...EXTRA_ITEMS] : FEATURED_ITEMS;

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % allPhotos.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + allPhotos.length) % allPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-brand-dark text-white relative">
      <div id="galeri" className="sr-only" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header from Reference */}
        <div className="text-center mb-16">
          <span className="font-light tracking-[0.25em] uppercase text-xs text-gray-400 block mb-3">
            CAPTURED MOMENTS ON THE RIVER
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-wide">
            Adventure Gallery
          </h2>
          <p className="text-gray-400 font-light text-xs sm:text-sm max-w-xl mx-auto mt-4">
            Dokumentasi keceriaan, deburan jeram, dan kebersamaan peserta selama petualangan bersama SA Adventure di Sungai Cisadane.
          </p>
        </div>

        {/* Asymmetric Editorial Grid from Reference */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Main 2x2 Featured Card */}
          <div
            onClick={() => handleOpenLightbox(0)}
            className="gallery-item overflow-hidden relative cursor-pointer col-span-2 md:col-span-2 md:row-span-2 aspect-[16/10] sm:aspect-square md:aspect-auto min-h-[220px] sm:min-h-[300px] md:min-h-[460px] group bg-neutral-900 border border-neutral-800"
          >
            <Image
              src={FEATURED_ITEMS[0].src}
              alt={FEATURED_ITEMS[0].title}
              fill
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
              <span className="font-serif text-2xl md:text-3xl tracking-wider text-white mb-2">
                {FEATURED_ITEMS[0].title}
              </span>
              <p className="text-xs text-gray-300 max-w-sm font-light">
                {FEATURED_ITEMS[0].subtitle}
              </p>
              <span className="mt-4 text-[10px] tracking-widest uppercase border-b border-white pb-1 font-bold">
                Perbesar Foto
              </span>
            </div>
          </div>

          {/* 4 Square Supporting Items */}
          {FEATURED_ITEMS.slice(1, 5).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx + 1)}
              className="gallery-item overflow-hidden relative cursor-pointer aspect-square group bg-neutral-900 border border-neutral-800"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <span className="font-serif text-lg tracking-wider text-white mb-1">
                  {item.title}
                </span>
                <p className="text-[11px] text-gray-300 line-clamp-2 font-light">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Extra items when expanded */}
          {showAll &&
            EXTRA_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(FEATURED_ITEMS.length + idx)}
                className="gallery-item overflow-hidden relative cursor-pointer aspect-square group bg-neutral-900 border border-neutral-800 transition-all duration-500 animate-fadeIn"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <span className="font-serif text-lg tracking-wider text-white mb-1">
                    {item.title}
                  </span>
                  <p className="text-[11px] text-gray-300 line-clamp-2 font-light">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}

        </div>

        {/* Video Banner Callout */}
        <div className="mt-12 p-6 sm:p-8 border border-neutral-800 bg-neutral-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <button
              onClick={() => setIsVideoOpen(true)}
              aria-label="Tonton Video"
              className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-colors duration-300 shrink-0"
            >
              <Play className="w-5 h-5 ml-0.5" />
            </button>
            <div>
              <h3 className="font-serif text-lg text-white">
                Tonton Video Highlight Petualangan
              </h3>
              <p className="text-xs text-gray-400 font-light mt-0.5">
                Rasakan atmosfer riang dan deburan arus jeram melalui cuplikan video dokumentasi.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="border border-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-brand-dark transition-colors duration-300 cursor-pointer"
            >
              {showAll ? "Tampilkan Lebih Sedikit" : "View Full Gallery"}
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition cursor-pointer z-50"
            aria-label="Tutup"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 border border-white/20 hover:border-white transition cursor-pointer z-50"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 border border-white/20 hover:border-white transition cursor-pointer z-50"
            aria-label="Selanjutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh]">
              <Image
                src={allPhotos[lightboxIndex].src}
                alt={allPhotos[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <h4 className="font-serif text-xl text-white">
                {allPhotos[lightboxIndex].title}
              </h4>
              <p className="text-xs text-gray-400 font-light mt-1">
                {allPhotos[lightboxIndex].subtitle}
              </p>
              <span className="text-[10px] text-gray-500 tracking-widest uppercase block mt-2">
                {lightboxIndex + 1} / {allPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black overflow-hidden border border-neutral-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-black/60 p-2 border border-white/20"
              aria-label="Tutup Video"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Dokumentasi Cisadane Rafting"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
