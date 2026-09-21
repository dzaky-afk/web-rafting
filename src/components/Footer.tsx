"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-[#0b192c] text-white pt-10 pb-24 sm:py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info & Motto */}
          <div className="md:col-span-5">
            <Link href="#home" className="flex items-center gap-3 group mb-3">
              <Image
                src="/images/sa-adventure-logo.png"
                alt="SA Adventure Logo"
                width={80}
                height={40}
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <span className="font-heading font-black text-xl text-white tracking-wider block leading-tight">
                  SA <span className="text-[#0284c7]">ADVENTURE</span>
                </span>
                <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider">
                  Event Organizer & Whitewater Rafting
                </span>
              </div>
            </Link>
            
            <p className="text-xs text-sky-300 italic font-semibold mb-3">
              &ldquo;Create Moments. Build Memories. Have Fun!&rdquo;
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Event organizer profesional untuk company gathering, outing kantor, outbound team building, family gathering, wisata arung jeram Cisadane, serta penyedia akomodasi villa/glamping dan katering prasmanan Sunda.
            </p>
          </div>

          {/* Col 2: Alamat Kantor & Basecamp */}
          <div className="md:col-span-4 text-xs text-slate-400 space-y-3">
            <div className="font-heading font-black text-sm text-white uppercase tracking-wider mb-2">
              Lokasi & Alamat
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block">Basecamp Bogor:</strong>
                <span>Jl. Raya Bogor - Sukabumi Desa No.1, RT.02/RW.03, Bogor Kabupaten, 16730, Jawa Barat, ID</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block">Kantor Depok:</strong>
                <span>Jl. RADAR AURI RT.03, RW 10 Mekarsari, Kec. Cimanggis, Kota Depok, Jawa Barat</span>
              </div>
            </div>
          </div>

          {/* Col 3: Hubungi Kami & Socials */}
          <div className="md:col-span-3 text-xs text-slate-400 space-y-2.5">
            <div className="font-heading font-black text-sm text-white uppercase tracking-wider mb-2">
              Kontak Resmi
            </div>
            <div className="flex items-center gap-2">
              <WhatsAppIcon className="w-4 h-4 fill-current text-emerald-400 shrink-0" />
              <a href="https://wa.me/6281291068287" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-sky-300 transition font-bold">
                0812 9106 8287 <span className="text-[10px] text-emerald-400 font-semibold">(Utama)</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <WhatsAppIcon className="w-4 h-4 fill-current text-emerald-400/80 shrink-0" />
              <a href="https://wa.me/62895808755565" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-sky-300 transition font-medium">
                0895 8087 55565 <span className="text-[10px] text-slate-400 font-medium">(Cadangan)</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <a href="mailto:sa.adventure76@gmail.com" className="text-slate-300 hover:text-white transition">
                sa.adventure76@gmail.com
              </a>
            </div>
            <div className="pt-2">
              <a
                href="https://www.instagram.com/sa.adventure.ok/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram SA Adventure"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 hover:bg-[#0052cc] text-slate-200 hover:text-white border border-slate-700/70 font-semibold text-xs transition shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5 text-sky-400" />
                <span>@sa.adventure.ok</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            &copy; 2026 <strong>SA Adventure</strong>. Seluruh Hak Cipta Dilindungi.
          </div>
          <div className="text-slate-400">
            Cisadane Whitewater Rafting & Outdoor Event Organizer Bogor - Depok.
          </div>
        </div>

      </div>
    </footer>
  );
}
