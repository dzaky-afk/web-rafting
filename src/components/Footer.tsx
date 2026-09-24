"use client";

import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-20 pb-12 px-6 border-t border-neutral-900 relative z-10 scroll-mt-10">
      <div id="kontak" className="scroll-mt-10" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Col 1: Contact Info */}
        <div>
          <h4 className="font-serif text-2xl mb-6 tracking-wide text-white">
            Contact Us
          </h4>
          <div className="font-light text-sm text-gray-400 mb-4 leading-relaxed">
            <p className="mb-1">
              <span className="text-white font-medium">Basecamp Cisadane:</span> Papalidan Outdoor Resto, Jl. Raya Bogor - Sukabumi No. 1, Caringin, Bogor, Jawa Barat 16730
            </p>
            <a
              href="https://www.google.com/maps/place/Papalidan+Outdoor+Resto/@-6.7029647,106.8263511,932m/data=!3m1!1e3!4m6!3m5!1s0x2e69c97505cbbd4d:0x3efd818443a97b1e!8m2!3d-6.7030124!4d106.8263064!16s%2Fg%2F11hmz948fj"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:text-white transition-colors mt-0.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Titik Lokasi Google Maps &rarr;</span>
            </a>
          </div>
          <p className="font-light text-sm text-gray-400 mb-6 leading-relaxed">
            <span className="text-white font-medium">Kantor Depok:</span> Jl. Radar AURI RT.03/RW.10 Mekarsari, Cimanggis, Depok
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <WhatsAppIcon className="w-4 h-4 fill-current text-white shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-bold">
                  ADMIN 1 (RESERVASI UTAMA):
                </span>
                <a
                  href="https://wa.me/6281291068287?text=Halo%20Admin%201%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20rafting%20Cisadane"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-300 font-bold text-sm tracking-wide transition-colors"
                >
                  +62 812 9106 8287
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-gray-400">
              <WhatsAppIcon className="w-4 h-4 fill-current text-white shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-bold">
                  ADMIN 2 (CUSTOMER SERVICE):
                </span>
                <a
                  href="https://wa.me/62895808755565?text=Halo%20Admin%202%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20rafting%20Cisadane"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-gray-300 font-bold text-sm tracking-wide transition-colors"
                >
                  +62 895 8087 55565
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Mail className="w-4 h-4 text-white shrink-0" />
              <a
                href="mailto:sa.adventure76@gmail.com"
                className="hover:text-white transition-colors text-sm"
              >
                sa.adventure76@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Instagram className="w-4 h-4 text-white shrink-0" />
              <a
                href="https://www.instagram.com/sa.adventure.ok/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors text-sm"
              >
                @sa.adventure.ok
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Center Logo & Quick Links */}
        <div className="text-center flex flex-col items-center justify-start">
          <a
            href="#home"
            className="inline-block group mb-3 transition-transform duration-300 hover:scale-105"
            aria-label="SA Adventure Beranda"
          >
            <img
              src="/images/sa-adventure-logo.png"
              alt="Logo SA Adventure"
              className="h-16 md:h-20 w-auto object-contain mx-auto"
            />
          </a>

          <h3 className="font-serif text-xl tracking-[0.25em] uppercase mb-4 text-white">
            CISADANE RAFTING
          </h3>
          <p className="text-xs text-gray-400 max-w-xs mb-8 font-light leading-relaxed">
            Professional Whitewater Rafting, Outbound Team Building, &amp; Nature Retreat in Bogor.
          </p>

          <div className="flex flex-col items-center gap-3 text-xs font-bold tracking-widest uppercase text-gray-400">
            <div className="flex items-center justify-center gap-6">
              <a href="#home" className="hover:text-white transition-colors">HOME</a>
              <a href="#tentang-kami" className="hover:text-white transition-colors">ABOUT US</a>
              <a href="#paket-rafting" className="hover:text-white transition-colors">SERVICES</a>
            </div>
            <div className="flex items-center justify-center gap-6">
              <a href="#accommodation" className="hover:text-white transition-colors">ACCOMMODATION</a>
              <a href="#galeri" className="hover:text-white transition-colors">GALLERY</a>
            </div>
          </div>
        </div>

        {/* Col 3: Fast Reservation / WhatsApp Inquiry */}
        <div className="md:text-right flex flex-col md:items-end">
          <h4 className="font-serif text-2xl mb-4 tracking-wide text-white">
            Fast Booking
          </h4>
          <p className="font-light text-sm text-gray-400 mb-6 max-w-sm leading-relaxed">
            Tanyakan tanggal tersedia, diskon rombongan, atau minta proposal resmi langsung via WhatsApp Admin kami.
          </p>

          <div className="w-full flex flex-col gap-3 md:items-end">
            <a
              href="https://wa.me/6281291068287?text=Halo%20Admin%201%20SA%20Adventure,%20saya%20ingin%20booking%20paket%20rafting%20Cisadane"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-block border border-white/80 hover:border-white px-6 py-3.5 uppercase tracking-widest text-xs font-bold text-white hover:bg-white hover:text-black transition-colors duration-300 text-center no-underline"
            >
              CHAT ADMIN 1 (0812-9106-8287)
            </a>

            <a
              href="https://wa.me/62895808755565?text=Halo%20Admin%202%20SA%20Adventure,%20saya%20ingin%20booking%20paket%20rafting%20Cisadane"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-block border border-white/80 hover:border-white px-6 py-3.5 uppercase tracking-widest text-xs font-bold text-white hover:bg-white hover:text-black transition-colors duration-300 text-center no-underline"
            >
              CHAT ADMIN 2 (0895-8087-55565)
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto text-center border-t border-neutral-900 pt-8">
        <p className="text-xs text-gray-600 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Cisadane River Rafting • SA Adventure. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
