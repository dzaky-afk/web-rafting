"use client";

import Image from "next/image";

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative w-full bg-white pt-20 sm:pt-24 pb-0 overflow-hidden select-none min-h-[100dvh] sm:min-h-screen flex flex-col justify-between">
      {/* Large Elegant Serif Title */}
      <div className="text-center px-4 max-w-6xl mx-auto shrink-0">
        {/* Large Elegant Serif Title as Scalable SVG */}
        <h1 className="w-full flex justify-center items-center my-0">
          <span className="sr-only">SA ADVENTURE - Event Organizer, Outbound &amp; Rafting Cisadane Bogor</span>
          <svg
            viewBox="0 0 920 95"
            className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl h-auto select-none overflow-visible max-h-[46px] sm:max-h-[70px] md:max-h-[85px] lg:max-h-[105px]"
            aria-hidden="true"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="central"
              textAnchor="middle"
              className="font-serif font-bold"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: "76px",
                letterSpacing: "0.14em",
                fontWeight: 700,
                fill: "#1a1a1a",
                textTransform: "uppercase",
              }}
            >
              SA ADVENTURE
            </text>
          </svg>
        </h1>

        {/* Tag Pill: ACARA SERU • TEAM HAPPY • KAMI YANG ATUR SEMUA! */}
        <div className="mt-2 sm:mt-2.5 flex justify-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1 rounded-full bg-brand-dark text-white text-[9.5px] sm:text-[11px] font-bold font-sans uppercase tracking-[0.16em] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
            <span>ACARA SERU &bull; TEAM HAPPY &bull; KAMI YANG ATUR SEMUA!</span>
          </div>
        </div>

        {/* Handwritten Emotional Slogan from Flyer */}
        <div className="mt-2 sm:mt-2.5 inline-block relative max-w-2xl px-2">
          <p className="font-handwriting text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#0b4b6f] font-bold tracking-wide leading-tight">
            Jelajahi Alam, Ciptakan Kenangan, Rayakan Kebersamaan!
          </p>
          {/* Hand-drawn energetic curved underline matching flyer */}
          <svg className="w-full h-2 sm:h-3 -mt-0.5 mx-auto" viewBox="0 0 500 20" fill="none" preserveAspectRatio="none">
            <path d="M 10,14 Q 250,2 490,14" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Minimalist Editorial Service Pillars (Clean, Professional, No Icons) */}
        <div className="mt-3.5 sm:mt-5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-3xl mx-auto px-2">
          <a
            href="#about"
            className="px-3 sm:px-4 py-1.5 rounded-full border border-gray-300/90 hover:border-brand-dark bg-white hover:bg-brand-dark hover:text-white text-gray-700 text-[10.5px] sm:text-xs font-semibold font-sans uppercase tracking-[0.14em] transition-all duration-200 shadow-2xs hover:shadow-sm no-underline"
          >
            Event Organizer
          </a>
          <a
            href="#paket-rafting"
            className="px-3 sm:px-4 py-1.5 rounded-full border border-gray-300/90 hover:border-brand-dark bg-white hover:bg-brand-dark hover:text-white text-gray-700 text-[10.5px] sm:text-xs font-semibold font-sans uppercase tracking-[0.14em] transition-all duration-200 shadow-2xs hover:shadow-sm no-underline"
          >
            Rafting Cisadane
          </a>
          <a
            href="#aktivitas"
            className="px-3 sm:px-4 py-1.5 rounded-full border border-gray-300/90 hover:border-brand-dark bg-white hover:bg-brand-dark hover:text-white text-gray-700 text-[10.5px] sm:text-xs font-semibold font-sans uppercase tracking-[0.14em] transition-all duration-200 shadow-2xs hover:shadow-sm no-underline"
          >
            Outbound &amp; Team Building
          </a>
          <a
            href="#aktivitas"
            className="px-3 sm:px-4 py-1.5 rounded-full border border-gray-300/90 hover:border-brand-dark bg-white hover:bg-brand-dark hover:text-white text-gray-700 text-[10.5px] sm:text-xs font-semibold font-sans uppercase tracking-[0.14em] transition-all duration-200 shadow-2xs hover:shadow-sm no-underline"
          >
            Paintball &amp; Offroad
          </a>
          <a
            href="#accommodation"
            className="px-3 sm:px-4 py-1.5 rounded-full border border-gray-300/90 hover:border-brand-dark bg-white hover:bg-brand-dark hover:text-white text-gray-700 text-[10.5px] sm:text-xs font-semibold font-sans uppercase tracking-[0.14em] transition-all duration-200 shadow-2xs hover:shadow-sm no-underline"
          >
            Villa &amp; Katering
          </a>
        </div>
      </div>

      {/* Hero Image Container with SVG Brush Mask */}
      <div className="relative w-full flex-1 min-h-[280px] sm:min-h-[340px] md:min-h-[400px] overflow-hidden">
        {/* Optimized Pure Vector SVG Brush Mask without expensive shader filters */}
        <svg
          className="brush-mask-top absolute top-[-2px] left-0 w-full h-[36px] sm:h-[50px] md:h-[65px] z-10 pointer-events-none"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,0 L 1200,0 L 1200,28 C 1140,42 1080,18 1020,34 C 960,50 900,22 840,38 C 780,54 720,20 660,36 C 600,52 540,19 480,38 C 420,57 360,24 300,42 C 240,60 180,22 120,40 C 70,55 30,30 0,38 Z"
            fill="#ffffff"
          />
        </svg>

        {/* Hero Photo Container - Absolute inset-0 guarantees full coverage without black background gaps */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/drive_uploads/hero-new.webp"
            alt="Keseruan Arung Jeram Rafting Cisadane Bogor bersama SA Adventure"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Transparent Overlay matching prototype */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
