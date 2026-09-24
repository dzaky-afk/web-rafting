"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Users, Compass, Target, Mountain, Zap, Users2, Car } from "lucide-react";

interface ActivitiesProps {
  onAddActivity?: (name: string) => void;
}

const ACTIVITIES_DATA = [
  {
    title: "Fun Games & Ice Breaking",
    price: "Rp 120.000 / pax",
    minPax: "Min. 20 Pax",
    image: "/images/drive_uploads/5.png",
    icon: Users2,
    addonId: "fun-games",
    desc: "Permainan interaktif pencair suasana dan tawa ceria kebersamaan.",
  },
  {
    title: "Team Building Outbound",
    price: "Rp 180.000 / pax",
    minPax: "Min. 20 Pax",
    image: "/images/drive_uploads/DSCN9684.JPG",
    icon: Compass,
    addonId: "team-building",
    desc: "Simulasi kepemimpinan, komunikasi efektif, dan sinergi tim kerja.",
  },
  {
    title: "Paintball Wargame Battle",
    price: "Rp 130.000 / pax",
    minPax: "Min. 20 Pax",
    image: "/images/drive_uploads/7.png",
    icon: Target,
    addonId: "paintball",
    desc: "Simulasi perang taktis dengan senjata semi-otomatis dan perlengkapan safety.",
  },
  {
    title: "Flying Fox Kanopi",
    price: "Rp 50.000 / pax",
    minPax: "Min. 20 Pax",
    image: "/images/drive_uploads/6.png",
    icon: Zap,
    addonId: "flying-fox",
    desc: "Sensasi meluncur cepat di atas kanopi alam terbuka dan pepohonan hijau.",
  },
  {
    title: "Trekking Sentul & Curug",
    price: "Rp 190.000 / pax",
    minPax: "Min. 20 Pax",
    image: "/images/drive_uploads/DSCN9782.JPG",
    icon: Mountain,
    addonId: "trekking",
    desc: "Jelajah susur sungai jernih, persawahan asri, perbukitan, dan air terjun alami.",
  },
  {
    title: "Offroad 4x4 Ekstrem",
    price: "Rp 385.000 / pax",
    image: "/images/offroad.jpg",
    icon: Car,
    addonId: "offroad",
    desc: "Adrenalin menembus kubangan lumpur dan jalur tanah perbukitan Bogor.",
  },
];

export default function Activities({ onAddActivity }: ActivitiesProps) {
  const activitiesSliderRef = useRef<HTMLDivElement>(null);
  const [activeActivitySlide, setActiveActivitySlide] = useState(0);

  const handleActivitiesScroll = () => {
    if (!activitiesSliderRef.current) return;
    const container = activitiesSliderRef.current;
    const scrollLeft = container.scrollLeft;
    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    const containerCenter = scrollLeft + container.offsetWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeActivitySlide) {
      setActiveActivitySlide(closestIndex);
    }
  };

  const scrollToActivity = (index: number) => {
    if (!activitiesSliderRef.current) return;
    const container = activitiesSliderRef.current;
    const child = container.children[index] as HTMLElement | undefined;
    if (child) {
      child.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveActivitySlide(index);
    }
  };

  return (
    <section id="aktivitas" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-3 block">
            OUTDOOR EXPERIENCES
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark tracking-wide">
            More Adventures
          </h2>
          <p className="mt-4 text-gray-500 font-light text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Lengkapi keseruan acara gathering atau liburan Anda dengan wahana outbound, pertempuran taktis, dan penjelajahan alam terbaik di Bogor.
          </p>
        </div>

        {/* Cards Grid */}
        <div>
          <div
            ref={activitiesSliderRef}
            onScroll={handleActivitiesScroll}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {ACTIVITIES_DATA.map((act, index) => {
              const Icon = act.icon;
              return (
                <div
                  key={index}
                  className="w-[78vw] max-w-[340px] sm:w-auto shrink-0 snap-center service-card group cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 flex flex-col justify-between"
                >
                  {/* Photo with hover zoom */}
                  <div className="h-48 sm:h-52 w-full overflow-hidden relative">
                    <Image
                      src={act.image}
                      alt={act.title}
                      fill
                      sizes="(max-width: 768px) 78vw, 340px"
                      quality={75}
                      loading="lazy"
                      className="service-img w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    {act.minPax && (
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase text-brand-dark shadow-sm">
                        {act.minPax}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center border-t border-gray-100 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-serif text-xl text-brand-dark mb-2">
                        {act.title}
                      </h3>
                      <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed mb-4">
                        {act.desc}
                      </p>
                    </div>
                    <div>
                      <div className="font-serif text-lg font-bold text-brand-dark mb-4">
                        {act.price}
                      </div>
                      {onAddActivity ? (
                        <button
                          type="button"
                          onClick={() => onAddActivity(act.addonId)}
                          className="inline-block border-b border-brand-dark pb-1 text-xs uppercase font-bold tracking-widest text-brand-dark hover:text-gray-600 transition-colors cursor-pointer"
                        >
                          Pilih Aktivitas
                        </button>
                      ) : (
                        <a
                          href={`https://wa.me/6281291068287?text=${encodeURIComponent(
                            `Halo SA Adventure, saya ingin tanya info & reservasi untuk "${act.title}" (${act.price}).`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block border-b border-brand-dark pb-1 text-xs uppercase font-bold tracking-widest text-brand-dark hover:text-gray-600 transition-colors cursor-pointer"
                        >
                          Tanya Aktivitas
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="flex sm:hidden justify-center items-center gap-2 pt-4">
            {ACTIVITIES_DATA.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToActivity(idx)}
                aria-label={`Slide ${item.title}`}
                className={`h-1 transition-all duration-300 ${
                  activeActivitySlide === idx ? "w-6 bg-brand-dark" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
