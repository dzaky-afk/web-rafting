"use client";

import { useState, useEffect } from "react";
import { Home, Waves, Compass, Tag, Calculator, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface MobileBottomNavProps {
  onOpenBooking: () => void;
}

export default function MobileBottomNav({ onOpenBooking }: MobileBottomNavProps) {
  const [activeTab, setActiveTab] = useState("home");
  const [showWaSheet, setShowWaSheet] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const paketEl = document.getElementById("paket-rafting");
      const calcEl = document.getElementById("kalkulator-booking");

      const calcTop = calcEl ? calcEl.offsetTop - 180 : 999999;
      const paketTop = paketEl ? paketEl.offsetTop - 180 : 999999;

      if (scrollY >= calcTop) {
        setActiveTab("kalkulator-booking");
      } else if (scrollY >= paketTop) {
        setActiveTab("paket-rafting");
      } else {
        setActiveTab("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveTab(id);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/90 px-2 pt-2 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl shadow-slate-950/20 transition-all duration-300">
      <div className="grid grid-cols-4 gap-1 max-w-sm mx-auto items-center">
        {/* Beranda */}
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "home")}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-300 active:scale-95 text-center ${
            activeTab === "home"
              ? "bg-blue-50/90 text-[#0052cc] font-extrabold shadow-sm ring-1 ring-blue-200/60"
              : "text-slate-600 hover:text-slate-900 font-medium"
          }`}
        >
          <div className="relative">
            <Home className={`w-5 h-5 mb-0.5 transition-colors duration-300 ${activeTab === "home" ? "text-[#0052cc]" : "text-slate-500"}`} />
            {activeTab === "home" && (
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#0052cc]" />
            )}
          </div>
          <span className="text-[10px] leading-tight tracking-tight">Beranda</span>
        </a>

        {/* Paket */}
        <a
          href="#paket-rafting"
          onClick={(e) => handleSmoothScroll(e, "paket-rafting")}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-300 active:scale-95 text-center ${
            activeTab === "paket-rafting"
              ? "bg-blue-50/90 text-[#0052cc] font-extrabold shadow-sm ring-1 ring-blue-200/60"
              : "text-slate-600 hover:text-slate-900 font-medium"
          }`}
        >
          <div className="relative">
            <Waves className={`w-5 h-5 mb-0.5 transition-colors duration-300 ${activeTab === "paket-rafting" ? "text-[#0052cc]" : "text-slate-500"}`} />
            {activeTab === "paket-rafting" && (
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#0052cc]" />
            )}
          </div>
          <span className="text-[10px] leading-tight tracking-tight">Paket</span>
        </a>

        {/* Simulasi Biaya */}
        <a
          href="#kalkulator-booking"
          onClick={(e) => handleSmoothScroll(e, "kalkulator-booking")}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-300 active:scale-95 text-center ${
            activeTab === "kalkulator-booking"
              ? "bg-blue-50/90 text-[#0052cc] font-extrabold shadow-sm ring-1 ring-blue-200/60"
              : "text-slate-600 hover:text-slate-900 font-medium"
          }`}
        >
          <div className="relative">
            <Calculator className={`w-5 h-5 mb-0.5 transition-colors duration-300 ${activeTab === "kalkulator-booking" ? "text-[#0052cc]" : "text-slate-500"}`} />
            {activeTab === "kalkulator-booking" && (
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#0052cc]" />
            )}
          </div>
          <span className="text-[10px] leading-tight tracking-tight">Simulasi</span>
        </a>

        {/* Primary Action Button (WhatsApp) */}
        <button
          type="button"
          onClick={() => setShowWaSheet(true)}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-[#0052cc] hover:from-emerald-600 hover:to-[#0041a8] text-white font-bold transition-all duration-300 active:scale-95 text-center shadow-md shadow-emerald-500/20 cursor-pointer"
        >
          <WhatsAppIcon className="w-5 h-5 mb-0.5 fill-current text-white" />
          <span className="text-[10px] leading-tight tracking-tight">Chat WA</span>
        </button>
      </div>

      {/* WhatsApp Admin Sheet Modal */}
      {showWaSheet && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-end justify-center p-3 animate-in fade-in duration-150"
          onClick={() => setShowWaSheet(false)}
        >
          <div
            className="w-full max-w-sm bg-white rounded-3xl p-5 shadow-2xl border border-slate-100 animate-in slide-in-from-bottom-5 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Hubungi Kami</span>
                <span className="text-sm font-bold text-slate-900">Pilih Kontak WhatsApp</span>
              </div>
              <button
                onClick={() => setShowWaSheet(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <a
                href="https://wa.me/6281291068287?text=Halo%20SA%20Adventure,%20saya%20ingin%20tanya%20informasi%20paket%20rafting"
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowWaSheet(false)}
                className="flex items-center justify-between p-3 rounded-2xl border border-emerald-500/50 bg-emerald-50/80 text-emerald-950 hover:bg-emerald-100 transition"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-900">Admin 1 (Utama)</span>
                    <span className="text-[10px] font-bold bg-emerald-600 text-white px-1.5 py-0.5 rounded">Prioritas</span>
                  </div>
                  <div className="text-xs text-slate-700 font-semibold mt-0.5">0812-9106-8287</div>
                  <span className="text-[10px] text-emerald-700 font-medium">Fast response 24 jam</span>
                </div>
                <WhatsAppIcon className="w-5 h-5 fill-current text-emerald-600" />
              </a>

              <a
                href="https://wa.me/62895808755565?text=Halo%20SA%20Adventure,%20saya%20ingin%20tanya%20informasi%20paket%20rafting"
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowWaSheet(false)}
                className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 transition"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-800">Admin 2 (Cadangan)</span>
                    <span className="text-[10px] font-semibold bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">Cadangan</span>
                  </div>
                  <div className="text-xs text-slate-700 font-semibold mt-0.5">0895-8087-55565</div>
                  <span className="text-[10px] text-slate-500">Nomor alternatif jika admin 1 sibuk</span>
                </div>
                <WhatsAppIcon className="w-5 h-5 fill-current text-emerald-600" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
