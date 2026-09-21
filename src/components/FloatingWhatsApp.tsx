"use client";

import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-40">
      {/* Popover Card */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 animate-in fade-in slide-in-from-bottom-3 duration-200 text-slate-800">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-3">
            <div>
              <div className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500">
                Kontak WhatsApp
              </div>
              <div className="text-xs font-semibold text-slate-900">
                Chat Admin SA Adventure
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {/* Admin Utama */}
            <a
              href="https://wa.me/6281291068287?text=Halo%20SA%20Adventure,%20saya%20ingin%20tanya%20informasi%20paket%20rafting"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl border border-emerald-500/50 bg-emerald-50/80 hover:bg-emerald-100 text-emerald-950 transition group/item"
            >
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900">Admin 1 (Utama)</span>
                  <span className="text-[10px] font-bold bg-emerald-600 text-white px-1.5 py-0.5 rounded">Prioritas</span>
                </div>
                <div className="text-xs text-slate-700 mt-0.5 font-semibold">0812-9106-8287</div>
              </div>
              <WhatsAppIcon className="w-5 h-5 fill-current text-emerald-600 group-hover/item:scale-110 transition" />
            </a>

            {/* Admin Cadangan */}
            <a
              href="https://wa.me/62895808755565?text=Halo%20SA%20Adventure,%20saya%20ingin%20tanya%20informasi%20paket%20rafting"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 transition group/item"
            >
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-800">Admin 2 (Cadangan)</span>
                  <span className="text-[10px] font-semibold bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">Cadangan</span>
                </div>
                <div className="text-xs text-slate-700 mt-0.5 font-semibold">0895-8087-55565</div>
              </div>
              <WhatsAppIcon className="w-5 h-5 fill-current text-emerald-600 group-hover/item:scale-110 transition" />
            </a>
          </div>

          <div className="text-[10px] text-slate-400 text-center mt-2.5">
            Admin 1 Fast Response 24/7
          </div>
        </div>
      )}

      {/* Main Floating Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat WhatsApp Admin"
        className="w-14 h-14 rounded-full bg-[#10b981] hover:bg-[#059669] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer relative"
      >
        <WhatsAppIcon className="w-8 h-8 fill-current text-white" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
      </button>
    </div>
  );
}
