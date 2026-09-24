"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageSquare, ShieldCheck, CheckCircle2, PhoneCall } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function BookingPage() {
  const [countdown, setCountdown] = useState(2);

  const defaultWaUrl =
    "https://wa.me/6281291068287?text=" +
    encodeURIComponent(
      "Halo SA Adventure, saya ingin reservasi / booking tiket arung jeram Cisadane.\nMohon informasi jadwal yang tersedia dan panduan booking. Terima kasih!"
    );

  const backupWaUrl =
    "https://wa.me/62895808755565?text=" +
    encodeURIComponent(
      "Halo SA Adventure (Admin 2), saya ingin tanya ketersediaan slot reservasi rafting Cisadane."
    );

  useEffect(() => {
    // Automatically redirect after brief timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = defaultWaUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [defaultWaUrl]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-900 font-sans">
      {/* Top Navbar */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-30 shadow-xs">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-black transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Booking Online via WhatsApp
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Card */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
            <WhatsAppIcon className="w-9 h-9 fill-current" />
          </div>

          <h1 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-2">
            Booking Online SA Adventure
          </h1>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Untuk memastikan ketersediaan perahu dan konfirmasi jadwal instan, seluruh proses booking dilakukan langsung bersama customer service resmi kami di WhatsApp.
          </p>

          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 mb-6 text-left space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Layanan Cepat & Resmi</span>
            </div>
            <p className="text-xs text-emerald-700">
              Mengarahkan otomatis ke WhatsApp dalam{" "}
              <span className="font-bold text-emerald-900">{countdown} detik...</span>
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={defaultWaUrl}
              className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition active:scale-95 no-underline"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Buka WhatsApp Sekarang (Admin 1)</span>
            </a>

            <a
              href={backupWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition no-underline"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current text-emerald-600" />
              <span>Chat Admin 2 (Cadangan: 0895-8087-55565)</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Pilihan Paket Populer
            </h2>
            <div className="space-y-2 text-xs">
              <a
                href={
                  "https://wa.me/6281291068287?text=" +
                  encodeURIComponent(
                    "Halo SA Adventure, saya ingin reservasi Paket B (Rafting Complete 11 KM - Rp 199.000/pax)."
                  )
                }
                className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 hover:border-brand-dark hover:bg-slate-50 transition no-underline text-slate-800"
              >
                <span className="font-semibold">Paket B - 11 KM (Best Seller)</span>
                <span className="text-emerald-700 font-bold">Rp 199.000</span>
              </a>
              <a
                href={
                  "https://wa.me/6281291068287?text=" +
                  encodeURIComponent(
                    "Halo SA Adventure, saya ingin reservasi Paket A (Rafting Explorer 7 KM - Rp 168.000/pax)."
                  )
                }
                className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 hover:border-brand-dark hover:bg-slate-50 transition no-underline text-slate-800"
              >
                <span className="font-semibold">Paket A - 7 KM (Explorer)</span>
                <span className="text-emerald-700 font-bold">Rp 168.000</span>
              </a>
              <a
                href={
                  "https://wa.me/6281291068287?text=" +
                  encodeURIComponent(
                    "Halo SA Adventure, saya ingin reservasi Paket Combo (Rafting 11 KM + Paintball - Rp 295.000/pax)."
                  )
                }
                className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200 hover:border-brand-dark hover:bg-slate-50 transition no-underline text-slate-800"
              >
                <span className="font-semibold">Paket Combo (Rafting + Paintball)</span>
                <span className="text-emerald-700 font-bold">Rp 295.000</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="py-4 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} SA Adventure Bogor • Rafting Sungai Cisadane
      </footer>
    </div>
  );
}
