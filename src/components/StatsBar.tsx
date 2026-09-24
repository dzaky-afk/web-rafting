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
      desc: "Standar Keselamatan Teruji CE/ISO",
    },
    {
      icon: Compass,
      title: "7+",
      desc: "Wahana & Petualangan Outdoor",
    },
    {
      icon: Star,
      title: "4.9 / 5.0",
      desc: "Rating Kepuasan Ulasan",
    },
  ];

  return (
    <div className="relative z-20 -mt-6 sm:-mt-10 mb-10 max-w-6xl mx-auto px-3 sm:px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white border border-gray-200 p-3.5 sm:p-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3.5 shadow-sm hover:border-gray-400 transition-colors"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 border border-brand-dark text-brand-dark flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-lg sm:text-2xl md:text-3xl text-brand-dark leading-none mb-1 font-bold">
                  {stat.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-medium leading-tight">
                  {stat.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
