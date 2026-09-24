"use client";

import Image from "next/image";

const EVENTS = [
  { label: "Company Gathering", img: "/images/drive_uploads/DSCN9964.JPG" },
  { label: "Outbound Training", img: "/images/drive_uploads/5.png" },
  { label: "Team Building", img: "/images/drive_uploads/DSCN9694.JPG" },
  { label: "Komunitas & Club", img: "/images/drive_uploads/1.png" },
  { label: "Family Gathering", img: "/images/drive_uploads/4.png" },
  { label: "Sekolah & Edukasi", img: "/images/drive_uploads/DSCN9978.JPG" },
  { label: "Kampus & Organisasi", img: "/images/drive_uploads/DSCN0248.JPG" },
  { label: "Private Group", img: "/images/drive_uploads/DSCN9678.JPG" },
];

export default function EventCategories() {
  return (
    <section className="py-20 bg-brand-gray text-slate-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-3 block">
            TAILORED EXPERIENCES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark tracking-wide">
            Perfect for Every Event
          </h2>
          <p className="text-gray-500 font-light text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            Solusi tepat untuk beragam kebutuhan acara petualangan outdoor, gathering kantor, instansi kementerian, hingga keluarga.
          </p>
        </div>

        {/* 8 Event Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {EVENTS.map((event, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col cursor-pointer"
            >
              <div className="relative h-28 w-full overflow-hidden bg-gray-100">
                <Image
                  src={event.img}
                  alt={event.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 160px"
                  quality={75}
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 bg-white text-brand-dark font-serif font-bold text-xs text-center flex-grow flex items-center justify-center leading-tight border-t border-gray-100">
                {event.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
