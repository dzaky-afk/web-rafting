"use client";

import Image from "next/image";

export default function RaftingVectorLogo({ className = "w-56 h-auto" }: { className?: string }) {
  return (
    <div className={`relative inline-flex flex-col items-center justify-center select-none ${className}`}>
      {/* Outer Floating Crystal Blue Glow Aura */}
      <div className="absolute -inset-3 bg-gradient-to-r from-sky-400/25 via-blue-500/20 to-sky-400/25 rounded-full blur-2xl animate-pulse" />

      {/* Main Animated Raft Container with Smooth Harmonic Float */}
      <div className="relative z-10 flex flex-col items-center animate-smooth-raft">
        
        {/* Exact Ultra-Crisp Logo Image from Flyer */}
        <div className="relative w-52 sm:w-60 h-40 sm:h-48 drop-shadow-[0_8px_16px_rgba(0,71,186,0.18)]">
          <Image
            src="/images/rafting-logo-exact.png"
            alt="Logo Arung Jeram SA Adventure"
            fill
            priority
            className="object-contain hover:scale-108 transition-transform duration-500"
          />
        </div>

        {/* Dynamic Water Ripple & Splashing Flow Underneath */}
        <div className="relative -mt-3 flex items-center justify-center w-full">
          <div className="w-44 h-2.5 rounded-full bg-gradient-to-r from-transparent via-[#0284c7]/40 to-transparent blur-[1.5px] animate-wave-flow" />
          <div className="absolute w-28 h-1 rounded-full bg-[#38bdf8]/60 blur-[0.8px] animate-pulse" />
        </div>
      </div>
    </div>
  );
}
