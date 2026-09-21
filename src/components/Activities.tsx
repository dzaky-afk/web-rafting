"use client";

import Image from "next/image";
import { Users, Compass, Target, Mountain, Utensils, Zap, Users2, Car, Home } from "lucide-react";

interface ActivitiesProps {
  onAddActivity: (name: string) => void;
}

const ACTIVITIES_DATA = [
  {
    title: "FUN GAMES",
    price: "Rp 120.000/Pax",
    minPax: "Min. 20 Pax",
    image: "/images/drive_uploads/5.png",
    icon: Users2,
    addonId: "fun-games",
    desc: "Permainan ice-breaking & kebersamaan.",
  },
  {
    title: "TEAM BUILDING",
    price: "Rp 180.000/Pax",
    minPax: "Min. 20 Pax",
    image: "/images/drive_uploads/DSCN9684.JPG",
    icon: Compass,
    addonId: "team-building",
    desc: "Simulasi kepemimpinan & sinergi tim.",
  },
  {
    title: "PAINTBALL",
    price: "Rp 130.000/Pax",
    minPax: "Min. 20 Pax",
    image: "/images/drive_uploads/7.png",
    icon: Target,
    addonId: "paintball",
    desc: "Simulasi wargame strategi & peluru.",
  },
  {
    title: "FLYING FOX",
    price: "Rp 50.000/Pax",
    minPax: "Min. 20 Pax",
    image: "/images/drive_uploads/6.png",
    icon: Zap,
    addonId: "flying-fox",
    desc: "Meluncur di atas kanopi alam terbuka.",
  },
  {
    title: "TREKKING SENTUL",
    price: "Rp 190.000/Pax",
    minPax: "Min. 20 Pax",
    image: "/images/drive_uploads/DSCN9782.JPG",
    icon: Mountain,
    addonId: "trekking",
    desc: "Susur sungai jernih, bukit, & curug.",
  },
  {
    title: "OFFROAD 4X4",
    price: "Rp 385.000/Pax",
    minPax: "Min. 20 Pax",
    image: "/images/offroad.jpg",
    icon: Car,
    addonId: "offroad",
    desc: "Jelajah lumpur ekstrem armada Jeep 4x4.",
  },
  {
    title: "AKOMODASI & CAMP",
    price: "Mulai Rp 175.000/Pax",
    minPax: "Villa & Glamping",
    image: "/images/villa-resort-bogor.jpg",
    icon: Home,
    addonId: "akomodasi-camp",
    desc: "Villa privat, resort & riverside camp.",
  },
  {
    title: "KATERING PRASMANAN",
    price: "Mulai Rp 45.000/Pax",
    minPax: "Prasmanan & BBQ",
    image: "/images/catering/clean/paket-nasi-liwet-ayam-bakar.jpg",
    icon: Utensils,
    addonId: "katering-prasmanan",
    desc: "Prasmanan Sunda, kambing guling & snack.",
  },
];

export default function Activities({ onAddActivity }: ActivitiesProps) {
  return (
    <section id="aktivitas" className="py-20 sm:py-28 bg-white text-slate-900 border-t border-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 font-heading font-black text-xs sm:text-sm text-[#0052cc] tracking-wider uppercase mb-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200">
            <Compass className="w-3.5 h-3.5" />
            <span>WAHANA & AKTIVITAS TAMBAHAN</span>
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-900 mb-3">
            AKTIVITAS <span className="text-[#0052cc]">OUTDOOR LAINNYA</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Lengkapi kegiatan Anda dengan berbagai aktivitas seru bersama SA Adventure.
          </p>
        </div>

        {/* Cards Container: Horizontal Snap Slide on Mobile, Grid on Tablet/Desktop */}
        <div>
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-3 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {ACTIVITIES_DATA.map((act, index) => {
              const Icon = act.icon;
              return (
                <div
                  key={index}
                  className="w-[72vw] max-w-[260px] sm:w-auto shrink-0 snap-center bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
                >
                  {/* Photo */}
                  <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={act.image}
                      alt={act.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-3.5 sm:p-4 flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#003b95] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading font-black text-xs sm:text-sm text-slate-900 leading-tight truncate">
                        {act.title}
                      </h3>
                      <div className="font-heading font-black text-xs sm:text-sm text-[#003b95] mt-0.5">
                        {act.price}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-500 font-semibold mt-0.5">
                        <Users className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{act.minPax}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Scroll Indicator Dots */}
          <div className="flex sm:hidden justify-center items-center gap-1.5 pt-3">
            {ACTIVITIES_DATA.map((_, idx) => (
              <div
                key={idx}
                className="w-1.5 h-1.5 rounded-full bg-slate-300"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
