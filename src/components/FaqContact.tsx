"use client";

import { useState } from "react";
import { MapPin, ChevronDown, HelpCircle, MessageCircle, Mail, Instagram } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const FAQS = [
  {
    q: "Apakah ada minimal peserta?",
    a: "Minimal 20 Pax untuk paket dan layanan yang tercantum. Namun jika jumlah peserta Anda kurang dari itu, silakan diskusikan dengan tim kami untuk opsi khusus.",
  },
  {
    q: "Apakah rafting aman untuk pemula atau yang tidak bisa renang?",
    a: "Sangat aman! Setiap peserta wajib memakai pelampung keselamatan (life jacket) bersertifikasi internasional dan helm pelindung. Setiap perahu didampingi pemandu (skipper) berpengalaman dan tim rescue sungai.",
  },
  {
    q: "Apa saja perlengkapan yang perlu dibawa?",
    a: "Pakaian ganti, peralatan mandi, sandal gunung / alas kaki nyaman untuk air, dan kantong plastik untuk pakaian basah. Kami menyediakan saung istirahat dan toilet/kamar bilas yang bersih.",
  },
  {
    q: "Bagaimana cara reservasi dan pembayarannya?",
    a: "Pilih paket yang diinginkan lalu klik tombol Reservasi WhatsApp. Tim kami akan mengonfirmasi ketersediaan tanggal dan memandu proses Down Payment (DP).",
  },
];

export default function FaqContact() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="kontak" className="py-20 sm:py-24 bg-gradient-to-b from-white via-sky-50/40 to-sky-50/60 text-slate-900 border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Layout Matching Flyer Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          
          {/* Column 1: HUBUNGI SA ADVENTURE */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-sky-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="font-heading font-black text-base uppercase text-slate-900 pb-3 border-b border-sky-100 mb-5 flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0052cc] flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span>HUBUNGI SA ADVENTURE</span>
            </h3>

            {/* Phone / WhatsApp */}
            <div className="mb-4 pb-4 border-b border-sky-100/70">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-5 h-5 fill-current text-emerald-600" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Kontak & Reservasi WA
                  </div>
                  
                  {/* WA Utama */}
                  <div>
                    <div className="flex items-center gap-2">
                      <a href="https://wa.me/6281291068287" target="_blank" rel="noreferrer" className="text-[#0052cc] hover:underline font-heading font-black text-sm">
                        0812 9106 8287
                      </a>
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                        Utama
                      </span>
                    </div>
                    <small className="text-[11px] text-slate-500 block">Fast response 24/7 (Admin 1)</small>
                  </div>

                  {/* WA Cadangan */}
                  <div className="pt-1 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <a href="https://wa.me/62895808755565" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-[#0052cc] hover:underline font-heading font-bold text-xs sm:text-sm">
                        0895 8087 55565
                      </a>
                      <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                        Cadangan
                      </span>
                    </div>
                    <small className="text-[11px] text-slate-500 block">Nomor cadangan jika utama sibuk (Admin 2)</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Email & Instagram */}
            <div className="mb-4 pb-4 border-b border-sky-100/70 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0052cc] flex items-center justify-center shrink-0 border border-sky-100">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Resmi</div>
                  <a href="mailto:sa.adventure76@gmail.com" className="font-heading font-bold text-xs sm:text-sm text-slate-800 hover:text-[#0052cc] transition block truncate mt-0.5">
                    sa.adventure76@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0052cc] flex items-center justify-center shrink-0 border border-sky-100">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Instagram Resmi</div>
                  <a
                    href="https://www.instagram.com/sa.adventure.ok/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading font-extrabold text-xs sm:text-sm text-[#0052cc] hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <span>@sa.adventure.ok</span>
                    <span className="text-[10px] text-slate-400">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Addresses (Bogor & Depok) */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0052cc] flex items-center justify-center shrink-0 border border-sky-100">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <span>Basecamp & Kantor Bogor</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-800 leading-snug mt-1">
                    Jl. Raya Bogor - Sukabumi Desa No.1, RT.02/RW.03, Bogor Kabupaten, 16730, Jawa Barat, ID
                  </p>
                  <small className="text-[10px] text-sky-700 font-bold block mt-0.5">Dekat Exit Tol Caringin (Bebas Ganjil-Genap)</small>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-sky-50">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0052cc] flex items-center justify-center shrink-0 border border-sky-100">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Kantor Depok
                  </div>
                  <p className="text-xs font-semibold text-slate-800 leading-snug mt-1">
                    Jl. RADAR AURI RT.03, RW 10 Mekarsari, Kec. Cimanggis, Kota Depok, Jawa Barat
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: FAQ */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-sky-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="font-heading font-black text-base uppercase text-slate-900 pb-3 border-b border-sky-100 mb-5 flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0052cc] flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </div>
              <span>FAQ (PERTANYAAN UMUM)</span>
            </h3>

            <div className="space-y-2.5">
              {FAQS.map((faq, i) => {
                const isOpen = openIdx === i;
                return (
                  <div
                    key={i}
                    className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                      isOpen ? "border-sky-300 bg-sky-50/40" : "border-sky-100 bg-white hover:border-sky-200"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(i)}
                      className="w-full p-3.5 text-left flex justify-between items-center gap-2 font-heading font-bold text-xs sm:text-sm text-slate-900"
                    >
                      <span className="text-[#0052cc]">Q. {faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#0052cc]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-3.5 pb-3.5 text-xs text-slate-600 leading-relaxed border-t border-sky-100/80 pt-2.5">
                        <strong className="text-slate-800">A. </strong>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 3: Google Maps Pinpoint */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-sky-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-black text-base uppercase text-slate-900 pb-3 border-b border-sky-100 mb-5 flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0052cc] flex items-center justify-center border border-sky-100">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>PETA LOKASI</span>
              </h3>
              
              <div className="rounded-2xl overflow-hidden border border-sky-100 shadow-inner relative h-48 w-full bg-slate-100">
                <iframe
                  src="https://maps.google.com/maps?q=Jl.+Raya+Bogor+-+Sukabumi+Desa+No.1%2C+RT.02%2FRW.03%2C+Bogor+Kabupaten%2C+16730%2C+Jawa+Barat&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Titik Lokasi SA Adventure di Google Maps"
                ></iframe>
              </div>
            </div>

            <div className="mt-3 text-right">
              <a
                href="https://maps.google.com/?q=Jl.+Raya+Bogor+-+Sukabumi+Desa+No.1,+RT.02/RW.03,+Bogor+Kabupaten,+16730,+Jawa+Barat"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-heading font-bold text-[#0052cc] hover:text-[#0284c7] inline-flex items-center gap-1 transition"
              >
                <span>Buka di Google Maps</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
