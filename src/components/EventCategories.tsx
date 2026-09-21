"use client";

import Image from "next/image";

const EVENTS = [
  { label: "Gathering Perusahaan", img: "/images/drive_uploads/DSCN9964.JPG" },
  { label: "Outbound", img: "/images/drive_uploads/5.png" },
  { label: "Team Building", img: "/images/drive_uploads/DSCN9694.JPG" },
  { label: "Komunitas", img: "/images/drive_uploads/1.png" },
  { label: "Family Gathering", img: "/images/drive_uploads/4.png" },
  { label: "Sekolah", img: "/images/drive_uploads/DSCN9978.JPG" },
  { label: "Kampus", img: "/images/drive_uploads/DSCN0248.JPG" },
  { label: "Private Group", img: "/images/drive_uploads/DSCN9678.JPG" },
];

export default function EventCategories() {
  return (
    <section className="py-16 sm:py-20 bg-white text-slate-900 border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-slate-900">
            PERFECT <span className="text-[#0052cc]">FOR YOUR EVENT</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Solusi tepat untuk beragam kebutuhan acara outdoor, gathering instansi, & komunitas
          </p>
        </div>

        {/* 8 Event Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {EVENTS.map((event, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-sm hover:shadow-xl hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-28 w-full overflow-hidden bg-sky-50">
                <Image
                  src={event.img}
                  alt={event.label}
                  fill
                  className="object-cover group-hover:scale-115 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
              </div>
              <div className="p-2.5 bg-[#0052cc] text-white font-heading font-bold text-[11px] sm:text-xs text-center flex-grow flex items-center justify-center leading-tight">
                {event.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
