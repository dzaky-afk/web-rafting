import { Waves, Shield, Compass, Star } from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      icon: Waves,
      title: "10.000+",
      desc: "Peserta Rafting Puas",
    },
    {
      icon: Shield,
      title: "100%",
      desc: "Safety Equipment & Rescue",
    },
    {
      icon: Compass,
      title: "7+",
      desc: "Wahana Outdoor Pilihan",
    },
    {
      icon: Star,
      title: "4.9 / 5.0",
      desc: "Rating Ulasan Acara",
    },
  ];

  return (
    <div className="relative z-20 mt-6 sm:mt-10 mb-4 sm:mb-8 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200/80 p-4 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className={`flex items-center gap-2.5 sm:gap-4 ${
                i !== stats.length - 1 ? "lg:border-r lg:border-slate-100 pr-4" : ""
              }`}
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-sky-50 text-[#0052cc] border border-sky-100 flex items-center justify-center shrink-0 shadow-sm"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-heading font-black text-xl sm:text-3xl text-brand-navy leading-none mb-1">
                  {stat.title}
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-500 font-semibold">{stat.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
