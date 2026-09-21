"use client";

import Image from "next/image";
import { MessageSquare, Sparkles } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function CtaBanner() {
  return (
    <section className="bg-[#002244] text-white py-16 sm:py-20 relative overflow-hidden">
      {/* Background with real rafting photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/drive_uploads/DSCN0068.JPG"
          alt="CTA Rafting"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[#001f3f]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Heading & Subtitle */}
          <div className="lg:col-span-6">
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-tight mb-3">
              SIAP UNTUK <br />
              <span className="text-sky-300">PETUALANGAN BERIKUTNYA?</span>
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-lg">
              Rencanakan kegiatan seru bersama SA Adventure. Hubungi kami sekarang untuk reservasi dan informasi paket.
            </p>
          </div>

          {/* Right: CTA Buttons */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-4 justify-lg-end items-center">
            {/* Primary Action Button */}
            <a
              href="https://wa.me/6281291068287?text=Halo%20SA%20Adventure,%20saya%20ingin%20reservasi%20paket%20rafting"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex-1 bg-gradient-to-r from-sky-500 to-[#0052cc] hover:from-sky-600 hover:to-blue-700 text-white p-4 rounded-xl flex items-center justify-center gap-3.5 shadow-lg shadow-blue-500/25 transition-all duration-300"
            >
              <WhatsAppIcon className="w-8 h-8 fill-current text-white shrink-0" />
              <div className="text-left">
                <span className="block text-[11px] font-bold uppercase tracking-wider leading-none">
                  RESERVASI VIA WHATSAPP
                </span>
                <span className="block text-lg font-heading font-black leading-none mt-1">
                  0812 9106 8287
                </span>
              </div>
            </a>

            {/* Chat Sekarang Button - Translucent Glass */}
            <a
              href="https://wa.me/6281291068287?text=Halo%20SA%20Adventure,%20saya%20ingin%20tanya%20info%20paket"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md p-4 rounded-xl flex items-center justify-center gap-3 font-heading font-black text-sm shadow-md transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 text-sky-300 shrink-0" />
              <span>CHAT SEKARANG</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
