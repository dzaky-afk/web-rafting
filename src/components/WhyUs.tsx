"use client";

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

export default function WhyUs() {
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
      title: "Standar Keselamatan CE & BNSP",
      desc: "Perlengkapan arung jeram bersertifikasi internasional (CE/ISO), pemandu rescue berlisensi BNSP, serta proteksi asuransi resmi.",
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
      id="tentang-kami"
      className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-white border-t border-sky-100"
    >
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= PART 1: TENTANG KAMI ================= */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          
          {/* Left: Brand Identity & Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 font-heading font-black text-xs text-[#0052cc] tracking-wider uppercase mb-3 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>EVENT ORGANIZER & OUTDOOR ADVENTURE</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-900 leading-tight">
              TENTANG KAMI <br />
              <span className="text-[#0052cc]">SA ADVENTURE</span>
            </h2>

            <p className="mt-2 text-base sm:text-lg font-heading font-extrabold text-[#0284c7] italic">
              &ldquo;Create Moments. Build Memories. Have Fun!&rdquo;
            </p>

            <div className="mt-5 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-slate-900">
                Selamat datang di <strong>SA Adventure</strong> — tempat di mana acara biasa berubah menjadi pengalaman yang luar biasa.
              </p>
              <p>
                <strong>SA Adventure</strong> adalah <strong>Event Organizer</strong> yang hadir untuk membantu Anda menciptakan berbagai kegiatan yang seru, berkesan, profesional, dan menyenangkan.
              </p>
              <p>
                Kami percaya sebuah acara bukan hanya tentang lokasi, rundown, atau dekorasi. Lebih dari itu, acara adalah tentang <strong>pengalaman, kebersamaan, koneksi, serta cerita inspiratif</strong> yang akan dibawa pulang oleh setiap peserta.
              </p>
              <p>
                Mulai dari <strong>company gathering, outing kantor, outbound team building, family gathering, fun games, trekking, rafting Cisadane, hingga wisata outdoor dan indoor</strong>, kami siap merancang dan mengelola acara sesuai karakter, kebutuhan, dan anggaran Anda.
              </p>
              <p>
                Didukung tim yang kreatif, profesional, dan komunikatif, kami menggabungkan <strong>konsep acara yang menarik, aktivitas interaktif, pelayanan prima, serta eksekusi yang matang</strong> guna memastikan agenda Anda berlangsung tertib, aman, dan sukses.
              </p>
            </div>

            {/* Inspiring Philosophy Callout */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-sky-50/70 border border-sky-200/80 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-sky-200" />
              </div>
              <div className="text-xs sm:text-sm text-slate-800">
                <span className="font-heading font-black text-slate-900 block mb-0.5 uppercase tracking-wide">
                  Prinsip Utama Kami
                </span>
                &ldquo;Acara sukses bukan sekadar peserta datang dan pulang, melainkan pulang dengan senyum, cerita berharga, serta kenangan yang tak terlupakan.&rdquo;
              </div>
            </div>
          </div>

          {/* Right: Modern Acrylic Glass Showcase Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/90 shadow-xl relative overflow-hidden bg-white/85">
              <div className="flex items-center gap-3.5 mb-6 pb-5 border-b border-sky-100">
                <img
                  src="/images/sa-adventure-logo.png"
                  alt="SA Adventure Logo"
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <h3 className="font-heading font-black text-lg text-slate-900 leading-tight">SA ADVENTURE</h3>
                  <p className="text-xs text-[#0284c7] font-bold">Event Organizer & Outbound Specialist</p>
                </div>
              </div>

              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 mb-3.5">
                Cakupan Layanan Kegiatan Kami:
              </h4>

              <div className="grid grid-cols-2 gap-2.5">
                {serviceList.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-sky-50/70 border border-sky-100/90 text-xs font-semibold text-slate-800 hover:bg-sky-100/80 hover:border-sky-200 transition group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-white text-[#0052cc] flex items-center justify-center shrink-0 border border-sky-100 shadow-2xs group-hover:scale-105 transition-transform">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">{service.name}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-sky-100 flex items-center justify-between text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-[#0052cc]" />
                  <span>Caringin Bogor & Depok</span>
                </span>
                <span className="text-[#0052cc] font-extrabold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Siap Melayani 24/7
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= PART 2: WHY SA ADVENTURE ? ================= */}
        <div id="keunggulan" className="pt-10 border-t border-sky-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 font-heading font-black text-xs text-[#0052cc] tracking-wider uppercase mb-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
              <Award className="w-3.5 h-3.5 text-[#0052cc]" />
              <span>KEUNGGULAN UTAMA</span>
            </div>
            <h3 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-slate-900">
              WHY <span className="text-[#0052cc]">SA ADVENTURE ?</span>
            </h3>
            <p className="text-slate-600 text-sm mt-2 font-medium">
              Alasan mengapa perusahaan, instansi BUMN, dan komunitas mempercayakan momen terbaik mereka bersama kami.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-sky-100 shadow-sm hover:shadow-xl hover:border-sky-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center border border-sky-100 text-[#0052cc] group-hover:scale-105 group-hover:bg-[#0052cc] group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-heading font-extrabold uppercase px-2.5 py-1 rounded-full border bg-sky-50/80 text-[#0052cc] border-sky-200/80">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="font-heading font-black text-base text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
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
