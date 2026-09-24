import Image from "next/image";
import { Compass, Waves, Coffee } from "lucide-react";

export default function RapidsShowcase() {
  const rapidsLeft = [
    {
      id: "01",
      name: "Jeram Kerikil",
      grade: "Grade II (Pemanasan)",
      gradeShort: "Grade II",
      desc: "Jeram pembuka dengan bebatuan kecil berombak ritmis. Titik terbaik untuk adaptasi mendayung dan kekompakan tim.",
    },
    {
      id: "02",
      name: "Jeram Kuda Liar",
      grade: "Grade III (Adrenalin)",
      gradeShort: "Grade III",
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
      desc: "Hempasan buih putih menyerupai salju. Spot favorit fotografer SA Adventure untuk mengabadikan momen aksi terbaik Anda.",
    },
    {
      id: "04",
      name: "Jeram Badak",
      grade: "Grade III+ (Teknikal)",
      gradeShort: "Grade III+",
      desc: "Jeram dengan formasi batu andesit besar menyerupai punggung badak. Manuver lincah pemandu menjamin keseruan maksimal.",
    },
  ];

  return (
    <section id="jeram-cisadane" className="py-20 sm:py-24 bg-brand-dark text-white relative overflow-hidden border-t border-neutral-800">
      <div className="absolute inset-0 z-0 opacity-15">
        <Image
          src="/images/drive_uploads/29598.jpg"
          alt="Rapids Texture"
          fill
          sizes="100vw"
          quality={50}
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-3 block">
            RIVER NAVIGATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white">
            5 Iconic Rapids of Cisadane
          </h2>
          <p className="text-gray-400 font-light text-sm md:text-base mt-4 leading-relaxed">
            Sungai Cisadane Caringin terkenal dengan formasi jeram alami yang menantang namun tetap aman untuk semua kalangan. Inilah 5 jeram ikonik yang akan Anda taklukkan:
          </p>
        </div>

        {/* 5 Cards Grid: 2 Left, 1 Center (Climax), 2 Right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-stretch">
          
          {/* Left: 2 Cards */}
          <div className="flex flex-col gap-6">
            {rapidsLeft.map((r) => (
              <div
                key={r.id}
                className="bg-neutral-900/90 border border-neutral-800 p-6 flex-1 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 border border-white/20 text-white font-serif flex items-center justify-center text-xs">
                      {r.id}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 border border-neutral-700 px-2.5 py-0.5">
                      {r.gradeShort}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-white mb-2">
                    {r.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center: 1 Climax Card (Dam Drop 2M) */}
          <div className="order-last md:order-none bg-neutral-900 border-2 border-white/80 p-6 sm:p-8 flex flex-col justify-between relative shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-9 h-9 bg-white text-brand-dark font-serif font-bold flex items-center justify-center text-sm">
                  {rapidCenter.id}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white border border-white px-3 py-1 flex items-center gap-1.5">
                  <Waves className="w-3 h-3 text-white" />
                  <span>{rapidCenter.gradeShort}</span>
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-1">
                {rapidCenter.name}
              </h3>
              <p className="text-xs uppercase font-bold text-gray-400 mb-4 tracking-wider">
                {rapidCenter.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6">
                {rapidCenter.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-gray-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>{rapidCenter.safety}</span>
            </div>
          </div>

          {/* Right: 2 Cards */}
          <div className="flex flex-col gap-6">
            {rapidsRight.map((r) => (
              <div
                key={r.id}
                className="bg-neutral-900/90 border border-neutral-800 p-6 flex-1 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 border border-white/20 text-white font-serif flex items-center justify-center text-xs">
                      {r.id}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 border border-neutral-700 px-2.5 py-0.5">
                      {r.gradeShort}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-white mb-2">
                    {r.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Rest Area Banner */}
        <div className="bg-neutral-900/90 border border-neutral-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-12 h-12 border border-white/30 text-white flex items-center justify-center shrink-0">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-white">
                Rest Area Tepi Sungai: Kelapa Muda &amp; Snack
              </h4>
              <p className="text-xs text-gray-400 font-light mt-1">
                Di tengah pengarungan, kita akan singgah di saung bambu tepi sungai untuk menikmati kelapa muda segar dan gorengan hangat.
              </p>
            </div>
          </div>
          <a
            href="#services"
            className="shrink-0 w-full sm:w-auto text-center border border-white text-white hover:bg-white hover:text-brand-dark uppercase tracking-widest text-xs font-bold px-8 py-3 transition-colors duration-300"
          >
            Pilih Paket
          </a>
        </div>

      </div>
    </section>
  );
}
