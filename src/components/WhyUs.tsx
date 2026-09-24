"use client";

import Image from "next/image";
import {
  Sparkles,
  Users2,
  ShieldCheck,
  Award,
  HeartHandshake,
  Compass,
  Building2,
  Waves,
  Target,
  Mountain,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface WhyUsProps {
  onOpenBooking?: () => void;
}

export default function WhyUs({ onOpenBooking }: WhyUsProps) {
  const whyPoints = [
    {
      icon: Sparkles,
      tag: "CREATIVE & FUN",
      title: "Konsep Kreatif & Segar",
      desc: "Kami menghadirkan konsep acara yang fresh, interaktif, dan berkesan. Karena acara yang seru tidak harus selalu kaku!",
    },
    {
      icon: Users2,
      tag: "PROFESSIONAL TEAM",
      title: "Tim Berpengalaman & Tanggap",
      desc: "Didukung tim fasilitator dan pemandu yang ramah, komunikatif, dan siap mendampingi dari tahap perencanaan hingga penutupan.",
    },
    {
      icon: ShieldCheck,
      tag: "SAFETY FIRST",
      title: "Standar Keselamatan Teruji",
      desc: "Perlengkapan arung jeram bersertifikasi internasional (CE/ISO), pemandu rescue berpengalaman, serta proteksi asuransi resmi.",
    },
    {
      icon: HeartHandshake,
      tag: "FLEXIBLE BUDGET",
      title: "Sesuai Kebutuhan & Anggaran",
      desc: "Rancangan paket yang fleksibel dan dapat dikustomisasi sesuai karakter acara, jumlah peserta, dan anggaran perusahaan Anda.",
    },
  ];

  const serviceList = [
    { name: "Company Gathering", icon: Building2 },
    { name: "Rafting Cisadane", icon: Waves },
    { name: "Team Building", icon: Users2 },
    { name: "Outing & Outbound", icon: Target },
    { name: "Family Gathering", icon: HeartHandshake },
    { name: "Fun Games Seru", icon: Sparkles },
    { name: "Offroad 4x4 Trail", icon: Compass },
    { name: "Trekking Sentul", icon: Mountain },
    { name: "Paintball War Game", icon: ShieldCheck },
    { name: "Wisata Outdoor/Indoor", icon: MapPin },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white relative overflow-hidden"
    >
      {/* Anchor for nav smooth scroll */}
      <div id="tentang-kami" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* ================= PART 1: THE JOURNEY BEGINS (ABOUT US) ================= */}
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 mb-16 sm:mb-24">
          
          {/* Left: Narrative */}
          <div className="w-full md:w-1/2">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-3 block font-sans">
              The Journey Begins
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-5 leading-tight">
              Nature&apos;s Masterpiece<br />in Cisadane Bogor
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed font-light text-sm sm:text-base font-sans">
              Sungai Cisadane di Caringin Bogor adalah surga arung jeram alami terbaik di Jawa Barat dengan debit air yang stabil sepanjang tahun. Basecamp <strong>SA Adventure</strong> berdiri tepat di tepi sungai, menjadi titik awal petualangan outdoor paling mendebarkan untuk rombongan gathering, kantor, dan keluarga.
            </p>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed font-light text-sm sm:text-base font-sans">
              Dengan pengalaman lebih dari 10 tahun dan pemandu profesional bersertifikasi, kami menjamin pengalaman arung jeram yang aman, nyaman, dan tak terlupakan, dilengkapi fasilitas lengkap mulai dari saung istirahat hingga makan siang prasmanan Sunda khas pedesaan.
            </p>
            
            {/* Direct Admin Contact Buttons */}
            <div className="pt-6 border-t border-gray-100">
              <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400 block mb-3 font-sans">
                Konsultasi & Reservasi Langsung:
              </span>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="https://wa.me/6281291068287?text=Halo%20Admin%201%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20rafting%20dan%20gathering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-[#10b981] hover:bg-[#059669] text-white rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 group no-underline"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                  <div className="text-left">
                    <span className="block text-[10px] text-emerald-100 font-medium leading-none mb-0.5">Admin 1 (Utama)</span>
                    <span className="font-bold text-xs tracking-normal">0812-9106-8287</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/62895808755565?text=Halo%20Admin%202%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20rafting%20dan%20gathering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-slate-900 hover:bg-black text-white rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 group no-underline"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current text-emerald-400 shrink-0" />
                  <div className="text-left">
                    <span className="block text-[10px] text-slate-400 font-medium leading-none mb-0.5">Admin 2 (Cadangan)</span>
                    <span className="font-bold text-xs tracking-normal">0895-8087-55565</span>
                  </div>
                </a>

                <a
                  href="#paket-rafting"
                  className="inline-flex items-center justify-center px-5 py-3 border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white rounded-xl uppercase tracking-widest text-xs font-bold transition-colors duration-300 font-sans text-center no-underline"
                >
                  Paket
                </a>
              </div>
            </div>
          </div>

          {/* Right: Large Vertical Image with Chic Editorial Corner Border Accent */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/3] sm:aspect-[4/5] bg-gray-100 overflow-hidden relative shadow-lg">
              <Image
                src="/images/drive_uploads/whyus-new.webp"
                alt="Peserta Rafting Cisadane SA Adventure bergaya di sungai Bogor"
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            {/* Chic Minimalist Corner Element from Reference Prototype */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-brand-dark hidden md:block pointer-events-none" />
          </div>

        </div>

        {/* ================= PART 2: WHY SA ADVENTURE ? ================= */}
        <div id="keunggulan" className="pt-16 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-3 block font-sans">
              Why SA Adventure
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-brand-dark">
              Excellence in Every Adventure
            </h3>
            <p className="text-gray-500 text-sm mt-3 font-light leading-relaxed font-sans">
              Standar keunggulan operasional yang menjadikan kami pilihan utama ratusan perusahaan, BUMN, dan keluarga.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-gray-400">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg text-brand-dark mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
