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
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.08] text-brand-dark tracking-wide uppercase">
          SA ADVENTURE
        </h1>
        <p className="mt-2.5 sm:mt-4 text-gray-500 tracking-[0.18em] uppercase text-[10px] sm:text-xs md:text-sm max-w-2xl mx-auto font-sans font-medium px-2">
          Experience the Ultimate Whitewater Adventure in Bogor
        </p>

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
