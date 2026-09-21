import { ShieldCheck, LifeBuoy, HardHat, UserCheck, Megaphone, Clock } from "lucide-react";

export default function SafetyItinerary() {
  return (
    <section id="keamanan" className="py-20 sm:py-24 bg-white/60 border-t border-b border-sky-100 backdrop-blur-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Standar Keselamatan */}
          <div>
            <div className="inline-flex items-center gap-1.5 font-heading font-black text-xs text-[#0052cc] tracking-wider uppercase mb-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200">
              <ShieldCheck className="w-4 h-4 text-[#0052cc]" />
              <span>PRIORITAS KESELAMATAN #1</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-slate-900 mb-4">
              STANDAR KEAMANAN <br /><span className="text-[#0052cc]">ARUNG JERAM RESMI</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
              Tidak bisa berenang? <strong>Sama sekali tidak masalah!</strong> Arung jeram di SA Adventure didesain aman untuk semua peserta mulai usia 6 tahun hingga 65 tahun berkat standar SOP ketat kami:
            </p>

            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-4 flex items-start gap-4 border border-sky-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052cc] flex items-center justify-center shrink-0 border border-sky-200">
                  <LifeBuoy className="w-5 h-5 text-[#0052cc]" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-sm text-slate-900">Life Vest (Pelampung) Daya Apung Tinggi</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Sertifikasi ISO/CE dengan daya apung minimal 100 Newton, menjaga kepala tetap berada di atas permukaan air secara otomatis.</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 flex items-start gap-4 border border-sky-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052cc] flex items-center justify-center shrink-0 border border-sky-200">
                  <HardHat className="w-5 h-5 text-[#0052cc]" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-sm text-slate-900">Helm Arung Jeram Khusus (CE Water Sports)</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Melindungi kepala dari benturan dayung maupun batu kali dengan sistem ventilasi air cepat.</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 flex items-start gap-4 border border-sky-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052cc] flex items-center justify-center shrink-0 border border-sky-200">
                  <UserCheck className="w-5 h-5 text-[#0052cc]" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-sm text-slate-900">Skipper BNSP & River Rescue Team Standby</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Setiap perahu didampingi 1 skipper berlisensi BNSP, serta tim rescue tali lempar (throw bag) siaga di jeram ekstrem.</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 flex items-start gap-4 border border-sky-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052cc] flex items-center justify-center shrink-0 border border-sky-200">
                  <Megaphone className="w-5 h-5 text-[#0052cc]" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-sm text-slate-900">Briefing & Simulasi Penyelamatan Sebelum Start</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Instruktur memberikan penjelasan komprehensif terkait teknik mendayung, posisi duduk aman, dan prosedur jika terjatuh ke air.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Rundown / Timeline Kegiatan */}
          <div>
            <div className="inline-flex items-center gap-1.5 font-heading font-black text-xs text-[#0052cc] tracking-wider uppercase mb-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200">
              <Clock className="w-4 h-4 text-[#0052cc]" />
              <span>ALUR KEGIATAN EVENT</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-slate-900 mb-4">
              RUNDOWN KEGIATAN <br /><span className="text-[#0052cc]">SATU HARI SERU</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
              Alur kegiatan terstruktur untuk kenyamanan rombongan gathering, kantor, maupun keluarga:
            </p>

            <div className="relative border-l-2 border-sky-200 ml-4 space-y-6 pl-6">
              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#0052cc] text-white flex items-center justify-center text-xs font-bold">1</div>
                <div className="text-xs font-black text-[#0052cc] uppercase tracking-wider">08.30 – 09.00</div>
                <h4 className="font-heading font-black text-base text-slate-900 mt-0.5">Kedatangan & Welcome Drink</h4>
                <p className="text-xs text-slate-600 mt-1">Penyambutan di basecamp SA Adventure tepi sungai, menikmati teh/kopi hangat & snack tradisional.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#0052cc] text-white flex items-center justify-center text-xs font-bold">2</div>
                <div className="text-xs font-black text-[#0052cc] uppercase tracking-wider">09.00 – 09.30</div>
                <h4 className="font-heading font-black text-base text-slate-900 mt-0.5">Fitting Gear & Safety Briefing</h4>
                <p className="text-xs text-slate-600 mt-1">Pembagian pelampung dan helm, fitting ukuran pas, foto rombongan, serta pengarahan instruktur profesional.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#0052cc] text-white flex items-center justify-center text-xs font-bold">3</div>
                <div className="text-xs font-black text-[#0052cc] uppercase tracking-wider">09.30 – 11.30</div>
                <h4 className="font-heading font-black text-base text-slate-900 mt-0.5">Start Arung Jeram & Rest Area</h4>
                <p className="text-xs text-slate-600 mt-1">Mengarungi jeram-jeram ikonik Cisadane, istirahat menikmati kelapa muda segar di saung tepi kali, lalu lanjut menaklukkan Dam 2 Meter.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#0052cc] text-white flex items-center justify-center text-xs font-bold">4</div>
                <div className="text-xs font-black text-[#0052cc] uppercase tracking-wider">11.30 – 12.30</div>
                <h4 className="font-heading font-black text-base text-slate-900 mt-0.5">Finish, Bilas Bersih & Kamar Mandi</h4>
                <p className="text-xs text-slate-600 mt-1">Penjemputan mobil lokal di titik finish kembali ke basecamp untuk mandi dan berganti pakaian bersih.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#0052cc] text-white flex items-center justify-center text-xs font-bold">5</div>
                <div className="text-xs font-black text-[#0052cc] uppercase tracking-wider">12.30 – Selesai</div>
                <h4 className="font-heading font-black text-base text-slate-900 mt-0.5">Makan Siang Prasmanan Khas Sunda</h4>
                <p className="text-xs text-slate-600 mt-1">Santap siang lezat di saung (Ayam goreng, sayur asem, tahu tempe, ikan asin, sambal lalap) & penyerahan file dokumentasi.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
