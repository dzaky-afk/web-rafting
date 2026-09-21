import Image from "next/image";
import { Compass, Waves, Coffee } from "lucide-react";

export default function RapidsShowcase() {
  const rapidsLeft = [
    {
      id: "01",
      name: "Jeram Kerikil",
      grade: "Grade II (Pemanasan)",
      gradeShort: "Grade II",
      gradeColor: "bg-slate-800 text-sky-300 border-slate-700",
      desc: "Jeram pembuka dengan bebatuan kecil berombak ritmis. Titik terbaik untuk adaptasi mendayung dan kekompakan tim.",
    },
    {
      id: "02",
      name: "Jeram Kuda Liar",
      grade: "Grade III (Adrenalin)",
      gradeShort: "Grade III",
      gradeColor: "bg-slate-800 text-sky-300 border-slate-700",
      desc: "Arus bergelombang cepat yang menghentak perahu seperti menunggang kuda liar! Sensasi dingin menyegarkan.",
    },
  ];

  const rapidCenter = {
    id: "05",
    name: "Dam Jeram Pelangi",
    subtitle: "Sensasi Terjun Dam 2 Meter",
    grade: "The Climax Drop 2 Meter",
    gradeShort: "Drop 2M",
    desc: "Sensasi paling ditunggu di Cisadane! Perahu akan meluncur di kemiringan dam air terjun setinggi 2 meter. Sangat aman berkat bantalan air hidrolik dan penjagaan ketat tim rescue profesional di tepi kolam luncur.",
    safety: "Rescue Standby • 100% Aman",
  };

  const rapidsRight = [
    {
      id: "03",
      name: "Jeram Ombak Salju",
      grade: "Grade III (Fotogenik)",
      gradeShort: "Grade III",
      gradeColor: "bg-slate-800 text-sky-300 border-slate-700",
      desc: "Hempasan buih putih menyerupai salju. Spot favorit fotografer SA Adventure untuk mengabadikan momen aksi terbaik Anda.",
    },
    {
      id: "04",
      name: "Jeram Badak",
      grade: "Grade III+ (Teknikal)",
      gradeShort: "Grade III+",
      gradeColor: "bg-slate-800 text-sky-300 border-slate-700",
      desc: "Jeram dengan formasi batu andesit besar menyerupai punggung badak. Manuver lincah pemandu menjamin keseruan maksimal.",
    },
  ];

  return (
    <section id="jeram-cisadane" className="py-14 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/80">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="/images/drive_uploads/29598.jpg" alt="Rapids Texture" fill className="object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 font-heading font-black text-xs text-sky-300 tracking-wider uppercase mb-2 sm:mb-3 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-900 border border-slate-700">
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span>PANDUAN JERAM SUNGAI CISADANE</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            SENSASI MENAKLUKKAN <span className="text-sky-400">5 JERAM IKONIK</span>
          </h2>
          <p className="text-slate-300 text-[13px] sm:text-base mt-2 sm:mt-3 leading-relaxed">
            Sungai Cisadane Caringin terkenal dengan formasi jeram alami yang menantang namun tetap aman untuk semua kalangan. Inilah jeram-jeram favorit yang akan Anda arungi:
          </p>
        </div>

        {/* 5 Kotak Jeram: 2 di Kiri, 1 di Tengah (Utama), 2 di Kanan (Tampil 2-1-2 di HP maupun Desktop) */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-6 mb-8 sm:mb-12 items-stretch">
          
          {/* Sisi Kiri: 2 Kotak (Jeram 01 & Jeram 02) */}
          <div className="flex flex-col gap-1.5 sm:gap-6">
            {rapidsLeft.map((r) => (
              <div
                key={r.id}
                className="bg-slate-900/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-6 border border-slate-800 hover:border-sky-500/50 transition-all duration-200 group flex-1 flex flex-col justify-between min-h-[155px] sm:min-h-0"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2 sm:mb-3">
                    <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-slate-800 text-sky-300 font-heading font-black flex items-center justify-center text-[11px] sm:text-xs border border-slate-700 shrink-0">
                      {r.id}
                    </span>
                    <span className={`text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full border truncate ${r.gradeColor}`}>
                      <span className="hidden sm:inline">{r.grade}</span>
                      <span className="sm:hidden">{r.gradeShort}</span>
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-[13px] sm:text-xl text-white group-hover:text-sky-300 transition-colors mb-1 leading-tight">
                    {r.name}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-slate-200 leading-[1.35] sm:leading-relaxed font-normal line-clamp-4 sm:line-clamp-none">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sisi Tengah: 1 Kotak Utama (Jeram 05: Dam Jeram Pelangi - The Climax Drop 2 Meter) */}
          <div className="bg-gradient-to-b from-blue-950/80 via-slate-900/95 to-slate-900 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-7 border-2 border-sky-400/80 hover:border-sky-400 shadow-xl shadow-sky-500/20 flex flex-col justify-between relative overflow-hidden group min-h-[320px] sm:min-h-0">
            {/* Subtle glow orb behind header */}
            <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-1 mb-2.5 sm:mb-4">
                <span className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#0052cc] text-white font-heading font-black flex items-center justify-center text-xs sm:text-sm shadow-md shadow-blue-500/30 shrink-0">
                  {rapidCenter.id}
                </span>
                <span className="text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-sky-500/25 text-sky-300 border border-sky-400/50 uppercase tracking-wider flex items-center gap-1 shrink-0">
                  <Waves className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-sky-400 animate-pulse" />
                  <span className="hidden sm:inline">{rapidCenter.grade}</span>
                  <span className="sm:hidden">{rapidCenter.gradeShort}</span>
                </span>
              </div>

              <h3 className="font-heading font-black text-sm sm:text-3xl text-white group-hover:text-sky-300 transition-colors mb-0.5 sm:mb-1 leading-tight">
                {rapidCenter.name}
              </h3>
              <p className="text-[10px] sm:text-xs font-bold text-sky-400 mb-2 sm:mb-3 tracking-wide uppercase leading-tight">
                {rapidCenter.subtitle}
              </p>

              <p className="text-[11px] sm:text-sm text-slate-100 leading-[1.35] sm:leading-relaxed font-normal mb-3 sm:mb-5 line-clamp-5 sm:line-clamp-none">
                {rapidCenter.desc}
              </p>
            </div>

            <div className="pt-2 sm:pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] sm:text-[11px] text-emerald-400 font-semibold leading-tight">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span className="truncate">{rapidCenter.safety}</span>
            </div>
          </div>

          {/* Sisi Kanan: 2 Kotak (Jeram 03 & Jeram 04) */}
          <div className="flex flex-col gap-1.5 sm:gap-6">
            {rapidsRight.map((r) => (
              <div
                key={r.id}
                className="bg-slate-900/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-6 border border-slate-800 hover:border-sky-500/50 transition-all duration-200 group flex-1 flex flex-col justify-between min-h-[155px] sm:min-h-0"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2 sm:mb-3">
                    <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-slate-800 text-sky-300 font-heading font-black flex items-center justify-center text-[11px] sm:text-xs border border-slate-700 shrink-0">
                      {r.id}
                    </span>
                    <span className={`text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full border truncate ${r.gradeColor}`}>
                      <span className="hidden sm:inline">{r.grade}</span>
                      <span className="sm:hidden">{r.gradeShort}</span>
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-[13px] sm:text-xl text-white group-hover:text-sky-300 transition-colors mb-1 leading-tight">
                    {r.name}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-slate-200 leading-[1.35] sm:leading-relaxed font-normal line-clamp-4 sm:line-clamp-none">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Rest Area Banner */}
        <div className="bg-slate-900/80 rounded-2xl p-5 sm:p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow">
              <Coffee className="w-6 h-6 text-sky-200" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white">Rest Area Tepi Sungai: Kelapa Muda & Snack</h4>
              <p className="text-xs text-slate-300 mt-0.5">Di tengah pengarungan, kita akan singgah di saung tepi kali untuk menikmati es kelapa muda murni dan gorengan hangat.</p>
            </div>
          </div>
          <a href="#kalkulator-booking" className="shrink-0 bg-[#0052cc] hover:bg-[#0041a8] text-white font-heading font-bold text-xs px-6 py-3 rounded-xl transition-colors shadow">
            Hitung Estimasi Biaya
          </a>
        </div>

      </div>
    </section>
  );
}
