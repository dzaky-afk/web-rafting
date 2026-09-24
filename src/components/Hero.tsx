"use client";

import { useState } from "react";
import Image from "next/image";


interface RouteWaypoint {
  id: string;
  name: string;
  sub: string;
  cx: number;
  cy: number;
  labelY: number;
  desc: string;
}

const WAYPOINTS: RouteWaypoint[] = [
  {
    id: "start",
    name: "START CARINGIN",
    sub: "KM 0 • ALT. 480M",
    cx: 80,
    cy: 42,
    labelY: 25,
    desc: "Titik kumpul & persiapan briefing safety",
  },
  {
    id: "mahkota",
    name: "JERAM MAHKOTA",
    sub: "GRADE III+",
    cx: 290,
    cy: 22,
    labelY: 9,
    desc: "Jeram alami paling mendebarkan & ikonik",
  },
  {
    id: "rest",
    name: "REST AREA SAUNG",
    sub: "KELAPA MUDA",
    cx: 520,
    cy: 54,
    labelY: 71,
    desc: "Istirahat santai sejenak & kelapa muda segar",
  },
  {
    id: "dam",
    name: "DAM 3 METER DROP",
    sub: "ADRENALINE RUSH",
    cx: 730,
    cy: 28,
    labelY: 13,
    desc: "Sensasi meluncur terjun dam air setinggi 3 meter",
  },
  {
    id: "finish",
    name: "FINISH BASECAMP",
    sub: "11 KM • SAUNG SUNDA",
    cx: 920,
    cy: 45,
    labelY: 29,
    desc: "Titik akhir, mandi bilas & makan prasmanan",
  },
];

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [activeWaypoint, setActiveWaypoint] = useState<RouteWaypoint | null>(null);

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
        {/* Handwritten Emotional Slogan from Flyer */}
        <div className="mt-1 sm:mt-2 inline-block relative max-w-2xl px-2">
          <p className="font-handwriting text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#0b4b6f] font-bold tracking-wide leading-tight">
            Jelajahi Alam, Ciptakan Kenangan, Rayakan Kebersamaan!
          </p>
          {/* Hand-drawn energetic curved underline matching flyer */}
          <svg className="w-full h-2 sm:h-3 -mt-0.5 mx-auto" viewBox="0 0 500 20" fill="none" preserveAspectRatio="none">
            <path d="M 10,14 Q 250,2 490,14" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Opsi 2: Service Pillars / Mini Pill Badges with Professional Vector SVGs */}
        <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-3xl mx-auto px-2">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white hover:bg-[#0c243f] text-slate-800 hover:text-white border border-gray-200/90 hover:border-[#0c243f] text-[11px] sm:text-xs font-semibold font-sans tracking-wide transition-all duration-200 shadow-2xs hover:shadow-sm no-underline"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 group-hover:text-purple-300 transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/>
              <path d="M5 3v4"/>
              <path d="M19 17v4"/>
            </svg>
            <span>Event Organizer</span>
          </a>

          <a
            href="#paket-rafting"
            className="group inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white hover:bg-[#0284c7] text-slate-800 hover:text-white border border-gray-200/90 hover:border-[#0284c7] text-[11px] sm:text-xs font-semibold font-sans tracking-wide transition-all duration-200 shadow-2xs hover:shadow-sm no-underline"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600 group-hover:text-sky-200 transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
              <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
              <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
            </svg>
            <span>Rafting Cisadane</span>
          </a>

          <a
            href="#aktivitas"
            className="group inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white hover:bg-[#d97706] text-slate-800 hover:text-white border border-gray-200/90 hover:border-[#d97706] text-[11px] sm:text-xs font-semibold font-sans tracking-wide transition-all duration-200 shadow-2xs hover:shadow-sm no-underline"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 group-hover:text-amber-200 transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="6"/>
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
            </svg>
            <span>Outbound &amp; Team Building</span>
          </a>

          <a
            href="#aktivitas"
            className="group inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white hover:bg-[#059669] text-slate-800 hover:text-white border border-gray-200/90 hover:border-[#059669] text-[11px] sm:text-xs font-semibold font-sans tracking-wide transition-all duration-200 shadow-2xs hover:shadow-sm no-underline"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 group-hover:text-emerald-200 transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="22" y1="12" x2="18" y2="12"/>
              <line x1="6" y1="12" x2="2" y2="12"/>
              <line x1="12" y1="6" x2="12" y2="2"/>
              <line x1="12" y1="22" x2="12" y2="18"/>
            </svg>
            <span>Paintball &amp; Offroad</span>
          </a>

          <a
            href="#accommodation"
            className="group inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white hover:bg-[#4f46e5] text-slate-800 hover:text-white border border-gray-200/90 hover:border-[#4f46e5] text-[11px] sm:text-xs font-semibold font-sans tracking-wide transition-all duration-200 shadow-2xs hover:shadow-sm no-underline"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 group-hover:text-indigo-200 transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>Villa &amp; Katering</span>
          </a>
        </div>

      </div>

      {/* Topographic River Route Profile Diagram */}
      <div className="w-full max-w-6xl mx-auto my-2 sm:my-3 md:my-4 px-3 sm:px-6 h-24 sm:h-28 md:h-32 relative shrink-0">
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 1000 190"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dotted Route with Infinite Dash Animation */}
          <path
            className="route-path"
            d="M 80,150 C 130,110 180,50 280,45 C 330,40 370,105 420,125 C 470,145 500,165 580,150 C 630,135 670,85 730,95 C 780,105 840,90 920,115"
            fill="none"
            stroke="#444"
            strokeWidth="1.5"
          />

          {/* Point 1: Start Caringin */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveWaypoint(WAYPOINTS[0])}
            onMouseLeave={() => setActiveWaypoint(null)}
            onClick={() => setActiveWaypoint(WAYPOINTS[0])}
          >
            <circle cx="80" cy="150" r="4.5" fill="white" stroke="#333" strokeWidth="2" />
            <text x="80" y="130" className="point-label font-bold text-[10px] sm:text-[9px] transition-colors group-hover:fill-[#0052cc]" textAnchor="middle">
              Start Caringin
            </text>
            <text x="80" y="172" className="font-sans font-semibold text-[8.5px] sm:text-[7.5px] fill-gray-500 tracking-wider uppercase" textAnchor="middle">
              KM 0
            </text>
          </g>

          {/* Point 2: Jeram Mahkota */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveWaypoint(WAYPOINTS[1])}
            onMouseLeave={() => setActiveWaypoint(null)}
            onClick={() => setActiveWaypoint(WAYPOINTS[1])}
          >
            <circle cx="280" cy="45" r="3.5" fill="#555" />
            <text x="280" y="30" className="point-label font-bold text-[10px] sm:text-[9px] transition-colors group-hover:fill-[#0052cc]" textAnchor="middle">
              Jeram Mahkota
            </text>
            <text x="280" y="65" className="font-sans font-semibold text-[8.5px] sm:text-[7.5px] fill-gray-500 tracking-wider uppercase" textAnchor="middle">
              Grade III+
            </text>
          </g>

          {/* Point 3: Rest Area Saung */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveWaypoint(WAYPOINTS[2])}
            onMouseLeave={() => setActiveWaypoint(null)}
            onClick={() => setActiveWaypoint(WAYPOINTS[2])}
          >
            <circle cx="580" cy="150" r="3.5" fill="#555" />
            <text x="580" y="168" className="point-label font-bold text-[10px] sm:text-[9px] transition-colors group-hover:fill-[#0052cc]" textAnchor="middle">
              Rest Area Saung
            </text>
            <text x="580" y="183" className="font-sans font-semibold text-[8.5px] sm:text-[7.5px] fill-gray-500 tracking-wider uppercase" textAnchor="middle">
              Kelapa Muda
            </text>
          </g>

          {/* Point 4: Dam 3 Meter Drop */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveWaypoint(WAYPOINTS[3])}
            onMouseLeave={() => setActiveWaypoint(null)}
            onClick={() => setActiveWaypoint(WAYPOINTS[3])}
          >
            <circle cx="730" cy="95" r="3.5" fill="#555" />
            <text x="730" y="80" className="point-label font-bold text-[10px] sm:text-[9px] transition-colors group-hover:fill-[#0052cc]" textAnchor="middle">
              Dam 3 Meter Drop
            </text>
            <text x="730" y="115" className="font-sans font-semibold text-[8.5px] sm:text-[7.5px] fill-gray-500 tracking-wider uppercase" textAnchor="middle">
              Adrenaline
            </text>
          </g>

          {/* Point 5: Finish Basecamp */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveWaypoint(WAYPOINTS[4])}
            onMouseLeave={() => setActiveWaypoint(null)}
            onClick={() => setActiveWaypoint(WAYPOINTS[4])}
          >
            <circle cx="920" cy="115" r="4.5" fill="white" stroke="#333" strokeWidth="2" />
            <text x="920" y="100" className="point-label font-bold text-[10px] sm:text-[9px] transition-colors group-hover:fill-[#0052cc]" textAnchor="middle">
              Finish Basecamp
            </text>
            <text x="920" y="135" className="font-sans font-semibold text-[8.5px] sm:text-[7.5px] fill-gray-500 tracking-wider uppercase" textAnchor="middle">
              11 KM • Saung Sunda
            </text>
          </g>
        </svg>

        {/* Interactive Tooltip Card if waypoint hovered */}
        {activeWaypoint && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-30 bg-brand-dark text-white text-xs px-4 py-1.5 rounded-full shadow-xl border border-white/20 animate-in fade-in zoom-in-95 duration-150">
            <span className="font-bold text-sky-400">{activeWaypoint.name}</span>: {activeWaypoint.desc}
          </div>
        )}
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
