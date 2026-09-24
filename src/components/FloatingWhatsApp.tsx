"use client";

import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hidden md:flex fixed bottom-8 right-8 z-40 items-center">
      <a
        href="https://wa.me/6281291068287?text=Halo%20Admin%20SA%20Adventure,%20saya%20ingin%20tanya%20informasi%20paket%20rafting%20Cisadane"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex items-center gap-2.5 bg-[#10b981] hover:bg-[#059669] text-white p-3.5 md:px-5 md:py-3.5 rounded-full shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 no-underline"
        aria-label="Chat WhatsApp Admin SA Adventure"
      >
        <WhatsAppIcon className="w-5 h-5 md:w-5 md:h-5 fill-current shrink-0 animate-bounce duration-1000" />
        <span className="hidden md:inline text-xs font-bold uppercase tracking-wider font-sans">
          Chat WhatsApp
        </span>
      </a>
    </div>
  );
}
