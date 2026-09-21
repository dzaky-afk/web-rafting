"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Home,
  Utensils,
  CheckCircle2,
  Users,
  Flame,
  Coffee,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Tv,
  Waves,
  Music,
  Maximize2,
  Calendar,
  X,
  Eye,
  BookOpen,
  Layers,
  Star,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface VillaPhoto {
  src: string;
  title: string;
  caption: string;
}

interface VillaData {
  id: "mawar" | "zanara";
  name: string;
  location: string;
  badge: string;
  capacity: string;
  description: string;
  features: string[];
  photos: VillaPhoto[];
}

const VILLAS: VillaData[] = [
  {
    id: "mawar",
    name: "Villa Mawar Puncak",
    location: "Kawasan Puncak - Bogor, Jawa Barat",
    badge: "Paling Favorit untuk Rombongan & Gathering",
    capacity: "Kapasitas 30 - 70+ Orang",
    description:
      "Villa megah dengan halaman hijau sangat luas dan udara sejuk pegunungan Puncak. Dilengkapi kolam renang privat, rooftop dengan panorama 360° pegunungan, area karaoke, ruang kumpul keluarga/kantor yang lapang, serta gazebo santai.",
    features: [
      "Kolam Renang Privat (Private Swimming Pool)",
      "Rooftop Panorama View Pegunungan Puncak",
      "Fasilitas Karaoke & Billiard Seru",
      "Ruang Kumpul & Ruang Tamu Sangat Luas",
      "Kamar Tidur Bersih & Nyaman (Banyak Bed)",
      "Halaman Rumput Luas untuk Fun Games / BBQ",
      "Dapur Lengkap & Alat Masak Rombongan",
      "Parkir Luas Muat Hingga Mobil & Bus Medium",
    ],
    photos: [
      {
        src: "/images/villas/mawar/mawar1.jpg",
        title: "Tampak Depan Villa Mawar",
        caption: "Bangunan megah berarsitektur modern di kelilingi perbukitan hijau Puncak.",
      },
      {
        src: "/images/villas/mawar/mawar2.jpg",
        title: "Kolam Renang & Halaman Luas",
        caption: "Private swimming pool jernih dengan dek santai dan area rumput hijau.",
      },
      {
        src: "/images/villas/mawar/mawar_rooftop.jpg",
        title: "Rooftop View Pegunungan",
        caption: "Spot favorit menikmati matahari terbit, kabut pagi, dan pemandangan bukit.",
      },
      {
        src: "/images/villas/mawar/mawar3.jpg",
        title: "Taman & Gazebo Santai",
        caption: "Area santai outdoor berhawa sejuk untuk bercengkerama bersama keluarga.",
      },
      {
        src: "/images/villas/mawar/mawar4.jpg",
        title: "Ruang Kumpul & Ruang Tamu",
        caption: "Ruang utama luas dengan sofa empuk, cocok untuk briefing dan acara keakraban.",
      },
      {
        src: "/images/villas/mawar/mawar_karaoke.jpg",
        title: "Area Karaoke & Hiburan",
        caption: "Sound system dan fasilitas karaoke untuk memeriahkan malam keakraban.",
      },
      {
        src: "/images/villas/mawar/mawar5.jpg",
        title: "Kamar Tidur Utama",
        caption: "Kamar tidur bersih, rapi, dan sejuk dengan kasur berkualitas.",
      },
      {
        src: "/images/villas/mawar/mawar6.jpg",
        title: "Kamar Tidur Rombongan",
        caption: "Penataan kamar ideal untuk menampung peserta gathering dalam jumlah besar.",
      },
      {
        src: "/images/villas/mawar/mawar7.jpg",
        title: "Balkon & Area Santai Lantai Atas",
        caption: "Balkon menghadap langsung ke hamparan perbukitan dan taman villa.",
      },
      {
        src: "/images/villas/mawar/mawar_kamar_mandi.jpg",
        title: "Kamar Mandi Bersih & Higienis",
        caption: "Fasilitas sanitasi terawat dengan water heater untuk kenyamanan mandi air hangat.",
      },
    ],
  },
  {
    id: "zanara",
    name: "Villa Zanara",
    location: "Kawasan Sejuk Bogor, Jawa Barat",
    badge: "Eksklusif, Asri & Tenang",
    capacity: "Kapasitas 20 - 45 Orang",
    description:
      "Villa bernuansa asri dan elegan dengan taman tropis rindang serta kolam renang pribadi yang tenang. Sangat cocok untuk gathering divisi, liburan keluarga besar, atau acara reuni intim yang mengutamakan privasi dan kenyamanan.",
    features: [
      "Private Swimming Pool dengan Taman Tropis",
      "Suasana Hening, Asri & Sangat Privat",
      "Ruang Santai & Living Room Estetik",
      "Kamar Tidur Nyaman dengan Pencahayaan Alami",
      "Balkon Santai Menghadap View Hijau Rindang",
      "Dapur Bersih Lengkap Perlengkapan Memasak",
      "Area Outdoor untuk Santap Bersama & Barbeque",
      "Akses Mudah & Lingkungan Tenang Bebas Bising",
    ],
    photos: [
      {
        src: "/images/villas/zanara/zanara1.jpg",
        title: "Tampak Depan Villa Zanara",
        caption: "Desain villa estetik dan asri dengan taman hijau yang tertata indah.",
      },
      {
        src: "/images/villas/zanara/zanara2.jpg",
        title: "Private Pool & Taman Tropis",
        caption: "Kolam renang pribadi dikelilingi pepohonan rimbun dan suasana tenang.",
      },
      {
        src: "/images/villas/zanara/zanara3.jpg",
        title: "Interior & Ruang Santai",
        caption: "Interior hangat dan bersih, siap menyambut momen kebersamaan Anda.",
      },
      {
        src: "/images/villas/zanara/zanara_4.jpg",
        title: "Kamar Tidur Villa Zanara",
        caption: "Suasana kamar tidur tenang, nyaman, dan sejuk untuk istirahat optimal.",
      },
      {
        src: "/images/villas/zanara/zanara_5.jpg",
        title: "Area Bersantai & Teras Kolam",
        caption: "Spot santai tepi kolam untuk kumpul sore dan bercengkerama bersama rekan.",
      },
    ],
  },
];

export interface CateringMenu {
  id: string;
  name: string;
  category: "box" | "sunda" | "tumpeng";
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  image: string;
  desc: string;
  items: string[];
}

export const CATERING_ITEMS: CateringMenu[] = [
  {
    id: "nasi-liwet-ayam-bakar",
    name: "Paket Nasi Liwet Ayam Bakar",
    category: "sunda",
    categoryLabel: "Tradisional Sunda",
    badge: "Paling Favorit",
    badgeColor: "bg-amber-500 text-white",
    image: "/images/catering/clean/paket-nasi-liwet-ayam-bakar.jpg",
    desc: "Nasi liwet bakar aroma daun pisang wangi rempah pandan dan kemangi, dipadu ayam bakar empuk juicy berlumur bumbu meresap.",
    items: [
      "Nasi liwet bakar bungkus daun pisang",
      "Ayam bakar bumbu spesial rempah",
      "Tempe & tahu goreng gurih",
      "Lalapan mentimun segar & sambal khas",
    ],
  },
  {
    id: "ayam-bakar-kumplit",
    name: "Paket Ayam Bakar Kumplit",
    category: "box",
    categoryLabel: "Nasi Box Pilihan",
    badge: "Best Seller",
    badgeColor: "bg-emerald-600 text-white",
    image: "/images/catering/clean/paket-ayam-bakar-kumplit.jpg",
    desc: "Paket komplit ayam bakar paha/dada dengan olesan bumbu kecap manis gurih medok, tahu tempe goreng, dan sambal pedas nampol.",
    items: [
      "Nasi timbel bungkus daun pisang",
      "Potongan ayam bakar bumbu kecap gurih",
      "Tahu & tempe goreng kuning",
      "Lalapan segar timun selada & sambal terasi",
    ],
  },
  {
    id: "sayur-asem-sunda",
    name: "Paket Sayur Asem Sunda",
    category: "sunda",
    categoryLabel: "Tradisional Sunda",
    badge: "Kuah Segar Sunda",
    badgeColor: "bg-sky-600 text-white",
    image: "/images/catering/clean/paket-sayur-asem.jpg",
    desc: "Kombinasi klasik legendaris Sunda: sayur asem kuah gurih asam segar dipadu ayam goreng rempah bertabur serundeng renyah.",
    items: [
      "Nasi timbel bungkus daun pisang",
      "Ayam goreng serundeng rempah gurih",
      "Sayur asem segar mangkuk terpisah",
      "Tahu goreng, mentimun segar & sambal dadak",
    ],
  },
  {
    id: "bento-ayam-bakar",
    name: "Paket Bento Ayam Bakar",
    category: "box",
    categoryLabel: "Kemasan Bento",
    badge: "Praktis & Higienis",
    badgeColor: "bg-indigo-600 text-white",
    image: "/images/catering/clean/paket-bento-ayam-bakar.jpg",
    desc: "Sajian modern dalam kotak bento bersekat higienis. Pilihan favorit gathering kantor, pelatihan, dan acara outbound dinamis.",
    items: [
      "Nasi putih pulen porsi pas bento",
      "Ayam bakar paha/dada berbumbu",
      "Tumis capcay sayuran bakso jagung muda",
      "Lalap mentimun & cup sambal cabai",
    ],
  },
  {
    id: "ayam-bakar-kuning",
    name: "Paket Ayam Bakar Kuning",
    category: "box",
    categoryLabel: "Nasi Box Pilihan",
    badge: "Bumbu Kuning",
    badgeColor: "bg-amber-600 text-white",
    image: "/images/catering/clean/paket-ayam-bakar-kuning.jpg",
    desc: "Ayam bakar racikan bumbu kuning kaya kunyit dan rempah alamiah beraroma sedap, gurih meresap dengan lauk pelengkap komplit.",
    items: [
      "Nasi timbel bungkus daun",
      "Ayam bumbu kuning bakar harum",
      "Tahu & tempe goreng renyah",
      "Lalapan mentimun & cup sambal istimewa",
    ],
  },
  {
    id: "daging-sukiyaki",
    name: "Paket Daging Sukiyaki",
    category: "box",
    categoryLabel: "Spesial Daging",
    badge: "Menu Premium",
    badgeColor: "bg-rose-600 text-white",
    image: "/images/catering/clean/paket-daging-sukiyaki.jpg",
    desc: "Olahan irisan daging sapi sukiyaki lembut dengan saus gurih manis khas, dipadukan sambal goreng kentang balado dan sayuran bergizi.",
    items: [
      "Nasi timbel daun pisang pulen",
      "Irisan daging sukiyaki saus gurih manis",
      "Sambal goreng kentang balado pedas manis",
      "Tumis sayur wortel & jagung manis muda",
    ],
  },
  {
    id: "tumpeng-ayam-bekakak",
    name: "Tumpeng Urap Ayam Bekakak",
    category: "tumpeng",
    categoryLabel: "Tumpeng & Gathering",
    badge: "Spesial Acara & Syukuran",
    badgeColor: "bg-amber-700 text-white",
    image: "/images/catering/clean/tumpeng-urap-ayam-bekakak.jpg",
    desc: "Nasi tumpeng megah berhias mahkota daun pisang lengkap dengan ayam bekakak utuh panggang bumbu rempah, urap kelapa, dan aneka lauk perayaan.",
    items: [
      "Tumpeng nasi kerucut khas syukuran",
      "Ayam bekakak utuh panggang rempah Sunda",
      "Urap aneka sayuran segar bumbu parut kelapa",
      "Telur rebus hias, abon/kering tempe, garnish cabe",
    ],
  },
  {
    id: "nasi-ikan",
    name: "Paket Nasi Ikan",
    category: "box",
    categoryLabel: "Pilihan Ikan",
    badge: "Sehat & Lezat",
    badgeColor: "bg-teal-600 text-white",
    image: "/images/catering/clean/paket-nasi-ikan.jpg",
    desc: "Fillet ikan lembut berbalut saus asam manis lezat, disajikan dengan tumis buncis bakso dan sambal goreng kentang balado gurih.",
    items: [
      "Nasi putih pulen hangat",
      "Olahan fillet ikan saus asam manis",
      "Tumis buncis bakso gurih segar",
      "Sambal goreng kentang balado",
    ],
  },
  {
    id: "ikan-asam-manis",
    name: "Paket Ikan Asam Manis",
    category: "box",
    categoryLabel: "Pilihan Ikan",
    badge: "Renyah Asam Manis",
    badgeColor: "bg-emerald-700 text-white",
    image: "/images/catering/clean/paket-ikan-asam-manis.jpg",
    desc: "Ikan goreng tepung renyah berpadu saus asam manis segar, tumis buncis bakso iris, dan sambal goreng kentang balado.",
    items: [
      "Nasi timbel bungkus daun",
      "Ikan goreng renyah saus asam manis",
      "Tumis buncis sayur bakso segar",
      "Kentang balado pedas manis & sambal",
    ],
  },
  {
    id: "nasi-bakar-telur",
    name: "Nasi Bakar Paket Telur",
    category: "sunda",
    categoryLabel: "Nasi Bakar",
    badge: "Aroma Bakar",
    badgeColor: "bg-orange-600 text-white",
    image: "/images/catering/clean/nasi-bakar-paket-telur.jpg",
    desc: "Nasi bakar gurih aroma daun pisang bakar dengan isian rempah, lauk telur bumbu sedap, kerupuk renyah dan sambal tomat pedas.",
    items: [
      "Nasi bakar aroma daun pisang panggang",
      "Lauk telur berbumbu sedap",
      "Bungkus kerupuk renyah",
      "Cup sambal tomat pedas mantap",
    ],
  },
  {
    id: "nasi-box-ekonomis",
    name: "Paket Nasi Box + Buah Segar",
    category: "box",
    categoryLabel: "Nasi Box Pilihan",
    badge: "Komplit + Buah",
    badgeColor: "bg-blue-600 text-white",
    image: "/images/catering/clean/paket-nasi-box-ekonomis.jpg",
    desc: "Pilihan praktis bergizi komplit dengan ayam bakar bumbu kecap empuk, tumis jagung wortel bakso, cup sambal, dan 1 buah jeruk manis segar.",
    items: [
      "Nasi timbel bungkus daun",
      "Ayam bakar bumbu gurih legit",
      "Tumis sayuran jagung wortel bakso",
      "1 buah jeruk segar & sambal pedas",
    ],
  },
];

export const PRASMANAN_MENUS = [
  {
    id: "menu-1",
    title: "Menu 1",
    subtitle: "Rendang Daging & Ikan Mas Asam Manis",
    items: [
      "Nasi Putih",
      "Sop Ayam Jamur",
      "Rendang Daging Sapi",
      "Ikan Mas Asam Manis",
      "Cah Soun Cabe Ijo",
      "Asinan Buah Segar",
      "Kerupuk Udang",
      "Cake Potong & Buah Potong",
      "Pudding Lembut",
      "Soft Drink & Air Mineral",
    ],
  },
  {
    id: "menu-2",
    title: "Menu 2",
    subtitle: "Daging Sukiyaki & Rollade Ayam",
    items: [
      "Nasi Putih",
      "Sop Kimlo",
      "Daging Sukiyaki",
      "Rollade Ayam",
      "Sambel Goreng Kentang Ati",
      "Asinan Penganten",
      "Kerupuk Udang",
      "Cake Potong & Buah Potong",
      "Pudding Lembut",
      "Soft Drink & Air Mineral",
    ],
  },
  {
    id: "menu-3",
    title: "Menu 3",
    subtitle: "Ayam Kare & Rollade Daging",
    items: [
      "Nasi Putih",
      "Sop Mutiara",
      "Ayam Kare Spesial",
      "Rollade Daging Sapi",
      "Cah Pelangi",
      "Asinan Buah",
      "Kerupuk Udang",
      "Cake Potong & Buah Potong",
      "Pudding Lembut",
      "Soft Drink & Air Mineral",
    ],
  },
  {
    id: "menu-4",
    title: "Menu 4",
    subtitle: "Daging Sukiyaki & Ikan Sambal Mangga",
    items: [
      "Nasi Putih & Nasi Goreng",
      "Sop Bakso Brokoli",
      "Daging Sukiyaki",
      "Rollade Ayam",
      "Ikan Sambal Mangga",
      "Krecek Gurih",
      "Asinan Buah & Kerupuk Udang",
      "Kue Tampah & Aneka Buah",
      "Pudding Lembut",
      "Soft Drink & Air Mineral",
    ],
  },
  {
    id: "menu-5",
    title: "Menu 5",
    subtitle: "Rollade Daging, Ayam Mentega & Sosis Asam Manis",
    items: [
      "Nasi Putih & Nasi Goreng",
      "Sop Daging Sapi",
      "Rollade Daging",
      "Ayam Goreng Mentega",
      "Sosis Asam Manis",
      "Cah Pelangi & Kredok Sunda",
      "Kerupuk Udang & Kue Tampah",
      "Aneka Buah & Pudding",
      "Soft Drink & Air Mineral",
    ],
  },
  {
    id: "menu-6",
    title: "Menu 6",
    subtitle: "Balado Daging Basah, Udang Goreng & Ikan Sambal Mangga",
    items: [
      "Nasi Putih & Nasi Goreng",
      "Sop Kimlo",
      "Balado Daging Basah",
      "Udang Goreng Tepung",
      "Ikan Sambal Mangga",
      "Cah Buncis Bakso & Salad Bangkok",
      "Kerupuk Udang & Kue Tampah",
      "Aneka Buah & Pudding",
      "Soft Drink & Air Mineral",
    ],
  },
];

export const GUBUKAN_OPTIONS = [
  "Kambing Guling Live",
  "Sate Ayam Madura",
  "Zuppa Soup",
  "Bakso Sapi",
  "Bakso Malang",
  "Siomay Bandung",
  "Pempek Palembang",
  "Soto Ayam Ambengan",
  "Es Cendol Durian",
  "Es Doger",
  "Es Koktail Buah",
];

export const NASI_GORENG_OPTIONS = [
  "Nasi Goreng Seafood",
  "Nasi Goreng Ayam",
  "Nasi Goreng Daging Sapi",
  "Nasi Goreng Bakso",
];

export default function AccommodationCatering() {
  const [activeVillaId, setActiveVillaId] = useState<"mawar" | "zanara">("mawar");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [cateringCategory, setCateringCategory] = useState<"all" | "box" | "sunda" | "tumpeng" | "prasmanan">("all");
  const [activePrasmananTab, setActivePrasmananTab] = useState(0);
  const [lightboxPhoto, setLightboxPhoto] = useState<{ src: string; title: string; desc: string; category?: string } | null>(null);
  const whatsappNumber = "6281291068287";
  const whatsappBackupNumber = "62895808755565";

  const currentVilla = VILLAS.find((v) => v.id === activeVillaId) || VILLAS[0];

  // Reset slider index when changing villa
  const handleSelectVilla = (id: "mawar" | "zanara") => {
    setActiveVillaId(id);
    setPhotoIndex(0);
  };

  const handleNextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % currentVilla.photos.length);
  };

  const handlePrevPhoto = () => {
    setPhotoIndex((prev) =>
      prev === 0 ? currentVilla.photos.length - 1 : prev - 1
    );
  };

  const activePhoto = currentVilla.photos[photoIndex];

  return (
    <section
      id="akomodasi-katering"
      className="py-20 sm:py-28 bg-slate-50/70 border-t border-sky-100 relative overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-200/20 via-blue-200/15 to-emerald-200/20 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 font-heading font-black text-xs sm:text-sm text-[#0052cc] tracking-wider uppercase mb-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Fasilitas Lengkap One-Stop Service</span>
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-900 mb-3">
            PILIHAN <span className="text-[#0052cc]">AKOMODASI VILLA</span> & KATERING
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Lengkapi liburan dan gathering Anda dengan menginap di villa pilihan terbaik serta sajian katering prasmanan Sunda dan kambing guling istimewa.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* VILLA SHOWCASE SLIDER WITH 2 CHOICES */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden mb-16">
          
          {/* Villa Selector Header Tabs */}
          <div className="bg-slate-900 text-white p-4 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Home className="w-4 h-4 text-sky-400" />
                <span>Pilih Opsi Villa Penginapan</span>
              </div>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
                Galeri Foto & Fasilitas Villa
              </h3>
            </div>

            {/* 2 Villa Choice Buttons */}
            <div className="flex items-center gap-2.5 bg-slate-800/90 p-1.5 rounded-2xl border border-slate-700 w-full sm:w-auto">
              <button
                onClick={() => handleSelectVilla("mawar")}
                className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-heading font-black text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  activeVillaId === "mawar"
                    ? "bg-[#0052cc] text-white shadow-md shadow-blue-500/30 scale-[1.02]"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Villa Mawar Puncak</span>
              </button>

              <button
                onClick={() => handleSelectVilla("zanara")}
                className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-heading font-black text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  activeVillaId === "zanara"
                    ? "bg-[#0052cc] text-white shadow-md shadow-blue-500/30 scale-[1.02]"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Villa Zanara</span>
              </button>
            </div>
          </div>

          {/* Villa Details & Interactive Photo Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Col (Slider & Thumbnails) - 7 cols */}
            <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 bg-slate-950 flex flex-col justify-between">
              
              {/* Main Photo Slider Viewport */}
              <div className="relative h-72 sm:h-96 md:h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  priority
                  className="object-cover object-center transition-all duration-500"
                />

                {/* Dark Gradient Overlay for Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Counter & Category Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-heading font-bold text-xs border border-white/20">
                    {currentVilla.name}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-sky-500/80 backdrop-blur-md text-white font-heading font-black text-xs">
                    {photoIndex + 1} / {currentVilla.photos.length} Foto
                  </span>
                </div>

                {/* Slider Nav Prev Button */}
                <button
                  onClick={handlePrevPhoto}
                  aria-label="Foto Sebelumnya"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition hover:scale-110 active:scale-95 cursor-pointer z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Slider Nav Next Button */}
                <button
                  onClick={handleNextPhoto}
                  aria-label="Foto Selanjutnya"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition hover:scale-110 active:scale-95 cursor-pointer z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Bottom Slide Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 pointer-events-none">
                  <h4 className="font-heading font-bold text-base sm:text-lg text-white drop-shadow">
                    {activePhoto.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5 line-clamp-2">
                    {activePhoto.caption}
                  </p>
                </div>
              </div>

              {/* Thumbnail Strip Selector */}
              <div className="mt-4 flex items-center gap-2.5 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {currentVilla.photos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPhotoIndex(idx)}
                    className={`relative w-16 sm:w-20 h-12 sm:h-14 rounded-xl overflow-hidden shrink-0 transition-all cursor-pointer ${
                      photoIndex === idx
                        ? "ring-2 ring-sky-400 scale-105 opacity-100 shadow-md"
                        : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Col (Specs, Features, WhatsApp CTA) - 5 cols */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div>
                {/* Badge & Name */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#0052cc] text-xs font-heading font-bold border border-sky-200 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                  <span>{currentVilla.badge}</span>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 leading-tight mb-2">
                  {currentVilla.name}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-semibold mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0052cc]" />
                    {currentVilla.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-800 font-bold bg-slate-100 px-2.5 py-0.5 rounded-md">
                    <Users className="w-3.5 h-3.5 text-sky-600" />
                    {currentVilla.capacity}
                  </span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {currentVilla.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">
                    Fasilitas Unggulan Villa:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                    {currentVilla.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Halo SA Adventure, saya ingin cek ketersediaan tanggal dan harga sewa untuk ${currentVilla.name} (${currentVilla.capacity}). Mohon informasinya.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-gradient-to-r from-sky-500 to-[#0052cc] hover:from-sky-600 hover:to-blue-700 text-white font-heading font-black text-sm py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2.5 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01] active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Cek Jadwal & Harga {currentVilla.name}</span>
                </a>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 text-center font-medium">
                  <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Konfirmasi Langsung</span>
                  <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Bisa Survey Lokasi</span>
                  <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Layanan 24 Jam</span>
                </div>

                <div className="text-center text-[11px] text-slate-500 pt-1">
                  Admin Utama lambat merespons?{" "}
                  <a
                    href={`https://wa.me/${whatsappBackupNumber}?text=${encodeURIComponent(
                      `Halo SA Adventure, saya ingin cek ketersediaan tanggal dan harga sewa untuk ${currentVilla.name} (${currentVilla.capacity}). Mohon informasinya.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-700 font-semibold underline hover:text-emerald-800"
                  >
                    Hubungi WA Cadangan (0895-8087-55565)
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* KATERING & JAMUAN KULINER SHOWCASE */}
        {/* ========================================================================= */}
        <div className="mt-14 pt-12 border-t border-slate-200/80">
          
          {/* Section Sub-Header */}
          <div className="text-center max-w-3xl mx-auto mb-9">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-heading font-bold tracking-wide border border-emerald-200/80 mb-2.5 shadow-2xs">
              <Utensils className="w-3.5 h-3.5 text-emerald-600" />
              <span>KULINER & KATERING SA ADVENTURE BOGOR</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight mb-2.5">
              Pilihan Menu <span className="text-emerald-600">Nasi Box, Bento & Prasmanan</span>
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-normal">
              Diracik dari bahan segar dan bumbu rempah otentik khas Sunda & Nusantara. Siap disajikan hangat di basecamp rafting maupun di villa.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                { id: "all", label: "Semua Box (11)" },
                { id: "box", label: "Nasi Box & Bento (7)" },
                { id: "sunda", label: "Tradisional Sunda (3)" },
                { id: "tumpeng", label: "Tumpeng Syukuran (1)" },
                { id: "prasmanan", label: "Prasmanan (Menu 1-6)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCateringCategory(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-bold tracking-wide transition-all cursor-pointer ${
                    cateringCategory === tab.id
                      ? "bg-slate-900 text-white shadow-md scale-105"
                      : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* COMPACT CATERING ITEMS GRID (2 cols on mobile, 3 on tablet, 4 on desktop) */}
          {cateringCategory !== "prasmanan" && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 mb-14">
              {CATERING_ITEMS.filter(
                (item) => cateringCategory === "all" || item.category === cateringCategory
              ).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/70 shadow-xs hover:shadow-lg hover:border-emerald-300/80 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  {/* Photo with 4:3 Aspect Ratio */}
                  <div
                    onClick={() =>
                      setLightboxPhoto({
                        src: item.image,
                        title: item.name,
                        desc: item.desc,
                        category: item.categoryLabel,
                      })
                    }
                    className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-3 py-1 rounded-full bg-slate-900/85 text-white text-[10px] font-heading font-bold tracking-wide backdrop-blur-sm flex items-center gap-1 shadow-md">
                        <Eye className="w-3 h-3 text-emerald-400" />
                        <span>Perbesar</span>
                      </span>
                    </div>
                    {/* Badge */}
                    <div className="absolute top-2.5 left-2.5">
                      <span
                        className={`text-[9px] sm:text-[10px] font-heading font-bold tracking-wide px-2.5 py-0.5 rounded-full shadow-xs backdrop-blur-xs ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-1">
                        {item.categoryLabel}
                      </div>
                      
                      {/* Dish Title with neat typography and 2-line space */}
                      <h4 className="font-heading font-bold text-[13px] sm:text-[15px] text-slate-800 leading-snug tracking-tight group-hover:text-emerald-700 transition-colors line-clamp-2 min-h-[36px] sm:min-h-[42px]">
                        {item.name}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2 my-2 font-normal">
                        {item.desc}
                      </p>

                      {/* Checklist Items */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-100 mb-3.5">
                        {item.items.slice(0, 3).map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span className="truncate">{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Order Button */}
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Halo SA Adventure, saya tertarik memesan "${item.name}". Mohon info harga dan minimal ordernya.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-heading font-bold text-[11px] sm:text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-[0.98]"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                      <span>Pesan Menu Ini</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ========================================================================= */}
          {/* PRASMANAN (BUFFET) & GUBUKAN SECTION */}
          {/* ========================================================================= */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 rounded-2xl p-5 sm:p-7 lg:p-9 text-white shadow-xl mb-10">
            <div className="max-w-4xl mx-auto">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/15">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-heading font-bold tracking-wide border border-emerald-400/30 mb-2">
                    <Utensils className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Layanan Prasmanan & Live Stall</span>
                  </div>
                  <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                    Paket Prasmanan Lengkap (Menu 1 s/d 6)
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm font-normal mt-1 leading-relaxed">
                    Sajian prasmanan prasmanan khas Parahyangan untuk Company Gathering, Outbound, & Reuni.
                  </p>
                </div>

                <button
                  onClick={() =>
                    setLightboxPhoto({
                      src: "/images/catering/clean/daftar-menu-prasmanan-lengkap.jpg",
                      title: "Daftar Menu Prasmanan & Gubukan Lengkap",
                      desc: "Brosur resmi pilihan Menu 1 s/d 6, aneka gubukan, dan varian nasi goreng.",
                      category: "Brosur Resmi",
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-bold tracking-wide border border-white/20 transition-all cursor-pointer shrink-0"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Lihat Brosur Menu Lengkap</span>
                </button>
              </div>

              {/* Prasmanan Tabs 1 - 6 (Modern Segmented Bar) */}
              <div className="bg-slate-950/80 p-1.5 rounded-2xl border border-white/10 mb-6 backdrop-blur-sm shadow-inner">
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                  {PRASMANAN_MENUS.map((menu, idx) => {
                    const isActive = activePrasmananTab === idx;
                    return (
                      <button
                        key={menu.id}
                        onClick={() => setActivePrasmananTab(idx)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-heading font-bold tracking-wide transition-all cursor-pointer flex items-center justify-center text-center ${
                          isActive
                            ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-900/40 border border-emerald-400/50"
                            : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <span>{menu.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Menu Detail Card */}
              {(() => {
                const activeMenu = PRASMANAN_MENUS[activePrasmananTab];
                return (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 mb-6 backdrop-blur-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3.5 pb-2.5 border-b border-white/10">
                      <div>
                        <span className="text-[10px] font-heading font-bold text-emerald-400 uppercase tracking-wider">
                          Pilihan {activeMenu.title}
                        </span>
                        <h5 className="font-heading font-bold text-base sm:text-lg text-white tracking-tight">
                          {activeMenu.subtitle}
                        </h5>
                      </div>
                      <span className="text-[11px] font-medium text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10 self-start sm:self-auto">
                        10 Sajian Lengkap
                      </span>
                    </div>

                    {/* Grid of Dishes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                      {activeMenu.items.map((dish, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2 p-2 rounded-lg bg-white/5 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="text-xs text-slate-100">{dish}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Pilihan Gubukan & Nasi Goreng Extra */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {/* Gubukan */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-heading font-bold text-xs uppercase tracking-wider mb-2.5">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    <span>Pilihan Menu Gubukan (Live Stall)</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {GUBUKAN_OPTIONS.map((gubuk, gIdx) => (
                      <span
                        key={gIdx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-200 border border-slate-700/80 font-medium tracking-wide"
                      >
                        {gubuk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pilihan Nasi Goreng */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-sky-400 font-heading font-bold text-xs uppercase tracking-wider mb-2.5">
                    <Utensils className="w-3.5 h-3.5 text-sky-400" />
                    <span>Pilihan Varian Nasi Goreng</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {NASI_GORENG_OPTIONS.map((nasgor, nIdx) => (
                      <span
                        key={nIdx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-200 border border-slate-700/80 font-medium tracking-wide"
                      >
                        {nasgor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3.5">
                <div className="text-xs text-slate-300 font-normal text-center sm:text-left leading-relaxed">
                  Prasmanan mulai <strong className="text-white font-semibold">Rp 45.000 / pax</strong>. Tersedia Kambing Guling utuh & Barbeque Night.
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Halo SA Adventure, saya ingin konsultasi paket katering prasmanan (Menu 1-6) dan live stall gubukan untuk acara gathering kami."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-heading font-bold text-xs py-2.5 px-5 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Konsultasi via WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* LIGHTBOX MODAL (FOR HIGH-RES FULL VIEW) */}
        {/* ========================================================================= */}
        {lightboxPhoto && (
          <div
            onClick={() => setLightboxPhoto(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-slate-950/60">
                <div>
                  {lightboxPhoto.category && (
                    <span className="text-[10px] sm:text-xs font-heading font-bold text-emerald-400 uppercase tracking-wider block">
                      {lightboxPhoto.category}
                    </span>
                  )}
                  <h4 className="font-heading font-black text-base sm:text-xl text-white">
                    {lightboxPhoto.title}
                  </h4>
                </div>
                <button
                  onClick={() => setLightboxPhoto(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Photo Area */}
              <div className="relative flex-1 min-h-[320px] sm:min-h-[480px] bg-black">
                <Image
                  src={lightboxPhoto.src}
                  alt={lightboxPhoto.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-slate-950/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl text-center sm:text-left">
                  {lightboxPhoto.desc}
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Halo SA Adventure, saya ingin memesan "${lightboxPhoto.title}". Mohon info harga dan minimal pemesanannya.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-heading font-black text-xs py-2.5 px-5 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Pesan Menu Ini</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
