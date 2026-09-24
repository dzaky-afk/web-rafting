"use client";

import { useState } from "react";
import { MapPin, ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const FAQS = [
  {
    q: "Apakah ada minimal peserta untuk rafting?",
    a: "Untuk paket hemat dan fasilitas lengkap, minimal disarankan 20 Pax. Namun jika peserta Anda kurang dari 20 orang, silakan hubungi kami untuk ketersediaan jadwal open trip atau opsi grup kecil.",
  },
  {
    q: "Apakah aman untuk pemula atau yang tidak bisa berenang?",
    a: "Sangat aman! Setiap peserta wajib memakai pelampung keselamatan (life jacket) berstandar internasional yang menjaga tubuh mengapung otomatis, helm pelindung, didampingi skipper bersertifikasi BNSP, dan dipantau rescue river guard.",
  },
  {
    q: "Apa saja perlengkapan yang perlu dibawa?",
    a: "Cukup membawa pakaian ganti, peralatan mandi, sandal gunung / alas kaki nyaman untuk basah, dan kantong untuk pakaian basah. Saung istirahat dan kamar bilas bersih telah disediakan di basecamp.",
  },
  {
    q: "Bagaimana alur reservasi dan pembayaran?",
    a: "Pilih paket yang diinginkan lalu hubungi admin WhatsApp kami. Tim kami akan mengonfirmasi tanggal ketersediaan, mengirimkan invoice resmi atau proposal, dan memandu pembayaran DP.",
  },
];

export default function FaqContact() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="kontak" className="py-14 sm:py-20 md:py-24 bg-brand-gray text-slate-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-2 sm:mb-3 block">
            NEED ASSISTANCE?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-500 font-light text-xs sm:text-sm max-w-xl mx-auto">
            Pertanyaan umum seputar arung jeram Cisadane, kontak layanan, dan panduan menuju basecamp kami di Caringin Bogor.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          
          {/* Column 1: Kontak SA Adventure */}
          <div className="bg-white border border-gray-200 p-5 sm:p-8 shadow-sm">
            <h3 className="font-serif text-xl text-brand-dark pb-3 border-b border-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 border border-brand-dark text-brand-dark flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span>Hubungi Kami</span>
            </h3>

            {/* Phone / WhatsApp */}
            <div className="mb-6 pb-6 border-b border-gray-100 space-y-4">
              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                  Layanan WhatsApp Resmi
                </span>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/6281291068287"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 text-sm font-bold text-brand-dark hover:text-gray-600 transition"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current text-brand-dark" />
                    <span>0812 9106 8287</span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-normal">(Utama)</span>
                  </a>
                  <a
                    href="https://wa.me/62895808755565"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 text-sm font-medium text-gray-600 hover:text-brand-dark transition"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current text-gray-500" />
                    <span>0895 8087 55565</span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-normal">(Cadangan)</span>
                  </a>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Email Resmi
                </span>
                <a
                  href="mailto:sa.adventure76@gmail.com"
                  className="text-xs text-gray-600 hover:text-brand-dark transition font-light"
                >
                  sa.adventure76@gmail.com
                </a>
              </div>
            </div>

            {/* Jam Operasional */}
            <div>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Waktu Pelayanan
              </span>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Setiap Hari: 07.00 – 21.00 WIB<br />
                Trip Rafting: Sesi Pagi (08.30) & Sesi Siang (13.00)
              </p>
            </div>
          </div>

          {/* Column 2: FAQ Accordion */}
          <div className="bg-white border border-gray-200 p-5 sm:p-8 shadow-sm">
            <h3 className="font-serif text-xl text-brand-dark pb-3 border-b border-gray-100 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 border border-brand-dark text-brand-dark flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </div>
              <span>Pertanyaan Umum</span>
            </h3>

            <div className="space-y-3">
              {FAQS.map((faq, i) => {
                const isOpen = openIdx === i;
                return (
                  <div
                    key={i}
                    className="border border-gray-200 overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(i)}
                      className="w-full p-3.5 text-left flex justify-between items-center gap-2 font-serif text-sm text-brand-dark cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-brand-dark" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-3.5 pb-3.5 text-xs text-gray-600 font-light leading-relaxed border-t border-gray-100 pt-2.5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 3: Google Maps */}
          <div className="bg-white border border-gray-200 p-5 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl text-brand-dark pb-3 border-b border-gray-100 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 border border-brand-dark text-brand-dark flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Lokasi Basecamp</span>
              </h3>
              
              <div className="overflow-hidden border border-gray-200 relative h-48 w-full bg-gray-100 mb-4 rounded-sm">
                <iframe
                  src="https://maps.google.com/maps?q=Papalidan+Outdoor+Resto&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Titik Lokasi Papalidan Outdoor Resto di Google Maps"
                ></iframe>
              </div>

              <div className="text-xs text-gray-600 font-light leading-relaxed space-y-1">
                <p className="font-semibold text-brand-dark">
                  Papalidan Outdoor Resto
                </p>
                <p className="text-gray-500">
                  Basecamp SA Adventure Rafting Cisadane • Jl. Raya Bogor - Sukabumi No.1, RT.02/RW.03, Caringin, Kec. Caringin, Kabupaten Bogor, Jawa Barat 16730.
                </p>
                <p className="text-emerald-700 text-[11px] font-medium pt-1">
                  ✓ Akses mudah via Tol Bocimi (5 menit dari Exit Tol Caringin)
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100">
              <a
                href="https://www.google.com/maps/place/Papalidan+Outdoor+Resto/@-6.7029647,106.8263511,932m/data=!3m1!1e3!4m6!3m5!1s0x2e69c97505cbbd4d:0x3efd818443a97b1e!8m2!3d-6.7030124!4d106.8263064!16s%2Fg%2F11hmz948fj"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase font-bold tracking-widest text-brand-dark hover:text-emerald-700 inline-flex items-center gap-2 transition"
              >
                <span>Buka Google Maps</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
