import { ShieldCheck, LifeBuoy, HardHat, Megaphone, CheckCircle } from "lucide-react";

export default function SafetyItinerary() {
  const safetyItems = [
    {
      icon: LifeBuoy,
      title: "Life Vest (Pelampung) Daya Apung Tinggi",
      desc: "Sertifikasi ISO/CE dengan daya apung minimal 100 Newton, menjaga kepala tetap berada di atas permukaan air secara otomatis.",
    },
    {
      icon: HardHat,
      title: "Helm Arung Jeram Khusus (CE Water Sports)",
      desc: "Melindungi kepala dari benturan dayung maupun batu kali dengan sistem ventilasi air cepat.",
    },
    {
      icon: Megaphone,
      title: "Briefing & Simulasi Penyelamatan Sebelum Start",
      desc: "Instruktur memberikan penjelasan komprehensif terkait teknik mendayung, posisi duduk aman, dan prosedur jika terjatuh ke air.",
    },
  ];

  const timeline = [
    { time: "08.30 – 09.00", title: "Kedatangan & Welcome Drink", desc: "Penyambutan di basecamp SA Adventure tepi sungai, menikmati teh/kopi hangat & snack tradisional." },
    { time: "09.00 – 09.30", title: "Fitting Gear & Safety Briefing", desc: "Pembagian pelampung dan helm, fitting ukuran pas, foto rombongan, serta pengarahan instruktur profesional." },
    { time: "09.30 – 11.30", title: "Start Arung Jeram & Rest Area", desc: "Mengarungi jeram-jeram ikonik Cisadane, istirahat menikmati kelapa muda segar di saung tepi kali, lalu lanjut menaklukkan Dam 3 Meter." },
    { time: "11.30 – 12.30", title: "Finish, Bilas Bersih & Kamar Mandi", desc: "Penjemputan mobil lokal di titik finish kembali ke basecamp untuk mandi dan berganti pakaian bersih." },
    { time: "12.30 – SELESAI", title: "Makan Siang Prasmanan Khas Sunda", desc: "Santap siang lezat di saung (Ayam goreng, sayur asem, tahu tempe, ikan asin, sambal lalap) & penyerahan file dokumentasi." },
  ];

  return (
    <section id="keamanan" className="py-16 sm:py-24 bg-brand-gray border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 2-Column Editorial Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Panel Kiri: Safety Standards */}
          <div className="bg-white border border-gray-200 p-5 sm:p-8 lg:p-10">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-3 block font-sans">
              SAFETY FIRST
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark mb-4 leading-tight">
              Safety & Equipment Standards
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 font-sans">
              Tidak bisa berenang?{" "}
              <strong className="text-brand-dark font-bold">Sama sekali tidak masalah!</strong>{" "}
              Arung jeram di SA Adventure didesain aman untuk semua peserta mulai usia 6 tahun hingga 65 tahun berkat standar SOP ketat kami:
            </p>

            <div className="space-y-4">
              {safetyItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-4 border border-gray-100 bg-brand-gray">
                    <div className="w-10 h-10 border border-brand-dark text-brand-dark flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-sm text-brand-dark mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-500 font-sans">
              <span className="flex items-center gap-1.5 font-bold text-brand-dark">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                Termasuk Asuransi Resmi
              </span>
              <span>Usia Peserta: 6 - 65 Tahun</span>
            </div>
          </div>

          {/* Panel Kanan: Timeline */}
          <div className="bg-white border border-gray-200 p-5 sm:p-8 lg:p-10">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-3 block font-sans">
              DAILY ITINERARY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark mb-4 leading-tight">
              One-Day Adventure Rundown
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 font-sans">
              Alur kegiatan terstruktur untuk kenyamanan rombongan gathering, kantor, maupun keluarga:
            </p>

            {/* Timeline */}
            <div className="relative border-l-2 border-gray-200 ml-4 space-y-6 pl-7">
              {timeline.map((step, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[32px] top-1 w-6 h-6 bg-brand-dark text-white flex items-center justify-center text-xs font-bold ring-4 ring-white font-sans">
                    {i + 1}
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans">
                    {step.time}
                  </div>
                  <h3 className="font-sans font-bold text-sm text-brand-dark mt-0.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed font-sans font-light">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-gray-500 font-sans">
              <span className="font-bold text-brand-dark">*Jadwal Fleksibel</span>
              <span>Dapat disesuaikan dengan agenda rombongan</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
