"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Home,
  Utensils,
  CheckCircle2,
  Users,
  ChevronRight,
  ChevronLeft,
  MapPin,
  X,
  Sparkles,
  ArrowRight,
  Flame,
  Coffee,
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
    badge: "Favorit Gathering & Rombongan",
    capacity: "Kapasitas 30 - 70+ Orang",
    description:
      "Villa megah dengan halaman hijau sangat luas dan udara sejuk pegunungan Puncak. Dilengkapi kolam renang privat, rooftop dengan panorama 360° pegunungan, area karaoke, ruang kumpul keluarga/kantor yang lapang, serta gazebo santai.",
    features: [
      "Kolam Renang Privat (Private Swimming Pool)",
      "Rooftop Panorama View 360° Pegunungan Puncak",
      "Fasilitas Karaoke & Billiard Seru",
      "Ruang Kumpul & Ruang Tamu Sangat Luas",
      "Kamar Tidur Bersih & Nyaman (Banyak Bed)",
      "Halaman Rumput Luas untuk Fun Games & BBQ",
      "Dapur Lengkap & Alat Masak Rombongan",
      "Parkir Luas Muat Mobil & Bus Medium",
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
      "Private Swimming Pool dengan Taman Tropis Rindang",
      "Suasana Hening, Asri & Sangat Privat",
      "Ruang Santai & Living Room Bernuansa Hangat",
      "Kamar Tidur Nyaman dengan Pencahayaan Alami",
      "Balkon Santai Menghadap Hamparan Hijau",
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
    categoryLabel: "Tumpeng Syukuran",
    badge: "Spesial Acara",
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
    categoryLabel: "Tradisional Sunda",
    badge: "Aroma Bakar",
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

export default function AccommodationCatering() {
  const [activeVillaId, setActiveVillaId] = useState<"mawar" | "zanara">("mawar");
  const [photoIndex, setPhotoIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const [isVillaModalOpen, setIsVillaModalOpen] = useState(false);

  // Catering state
  const [isCateringMenuOpen, setIsCateringMenuOpen] = useState(false);
  const [cateringTab, setCateringTab] = useState<"box" | "prasmanan">("box");
  const [boxSubCategory, setBoxSubCategory] = useState<"all" | "box" | "sunda" | "tumpeng">("all");
  const [activePrasmananIdx, setActivePrasmananIdx] = useState(0);
  const [lightboxItem, setLightboxItem] = useState<CateringMenu | null>(null);

  const whatsappNumber = "6281291068287";
  const whatsappBackupNumber = "62895808755565";

  const currentVilla = VILLAS.find((v) => v.id === activeVillaId) || VILLAS[0];

  const handleToggleCateringMenu = () => {
    setIsCateringMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => {
          const el = document.getElementById("catering-content-area");
          if (el) {
            const yOffset = -90;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 150);
      }
      return next;
    });
  };

  const handleOpenVillaDetail = (id: "mawar" | "zanara") => {
    setActiveVillaId(id);
    setPhotoIndex(0);
    setIsVillaModalOpen(true);
  };

  const handleNextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % currentVilla.photos.length);
  };

  const handlePhotoTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handlePhotoTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handlePhotoTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 30) {
      if (diff > 0) {
        handleNextPhoto();
      } else {
        handlePrevPhoto();
      }
    }
  };

  const handlePrevPhoto = () => {
    setPhotoIndex((prev) =>
      prev === 0 ? currentVilla.photos.length - 1 : prev - 1
    );
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVillaModalOpen(false);
        setLightboxItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activePhoto = currentVilla.photos[photoIndex];

  const filteredBoxItems = CATERING_ITEMS.filter((item) => {
    if (boxSubCategory === "all") return true;
    return item.category === boxSubCategory;
  });

  return (
    <section
      id="accommodation"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-gray-100 relative overflow-hidden scroll-mt-20"
    >
      <div id="villa" className="scroll-mt-20" />
      <div id="pemilihan-villa" className="scroll-mt-20" />
      <div id="akomodasi" className="scroll-mt-20" />
      <div id="akomodasi-katering" className="scroll-mt-20" />

      <div className="max-w-7xl mx-auto">
        {/* ================= PART 1: EDITORIAL HEADER ================= */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-16 mb-20">

          {/* Right Text Column */}
          <div className="w-full md:w-1/2 pl-0 md:pl-8">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-3 block font-sans">
              REST & RECHARGE
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-tight">
              Stay in the Heart<br />of Nature
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed font-light text-sm sm:text-base font-sans">
              Setelah seharian memacu adrenalin menaklukkan jeram Cisadane, nikmati kenyamanan istirahat di villa eksklusif berhawa sejuk di kawasan Puncak & Bogor. Sangat cocok untuk rombongan kantor, komunitas, maupun keluarga besar.
            </p>
            <ul className="space-y-4 mb-8 font-sans">
              <li className="flex items-start text-gray-600 font-light text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-dark mr-3 mt-2 shrink-0" />
                <span>Villa Eksklusif Privat: Villa Mawar (30-70+ orang) & Villa Zanara (20-45 orang)</span>
              </li>
              <li className="flex items-start text-gray-600 font-light text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-dark mr-3 mt-2 shrink-0" />
                <span>Fasilitas Lengkap: Private Swimming Pool, Rooftop View Gunung, Karaoke & Halaman BBQ</span>
              </li>
              <li className="flex items-start text-gray-600 font-light text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-dark mr-3 mt-2 shrink-0" />
                <span>Tersedia Layanan Katering Prasmanan Sunda Tradisional & Kambing Guling Hangat</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 font-sans w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleOpenVillaDetail("mawar")}
                className="w-full sm:w-auto text-center justify-center inline-block bg-brand-dark text-white px-8 py-3.5 uppercase tracking-widest text-xs font-bold hover:bg-neutral-800 transition-colors duration-300 cursor-pointer shadow-sm"
              >
                Buka Galeri & Fasilitas Villa
              </button>
              <a
                href="#menu-katering"
                className="w-full sm:w-auto text-center justify-center inline-block border border-brand-dark text-brand-dark px-8 py-3.5 uppercase tracking-widest text-xs font-bold hover:bg-brand-dark hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Lihat Menu Katering
              </a>
            </div>
          </div>

          {/* Left: Overlapping Photo Collage with Editorial Accent */}
          <div className="w-full md:w-1/2 relative h-[260px] sm:h-[340px] md:h-[440px]">
            <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gray-100 shadow-md overflow-hidden">
              <Image
                src="/images/villas/mawar/mawar1.jpg"
                alt="Villa Mawar Puncak"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gray-200 shadow-xl overflow-hidden border-4 border-white">
              <Image
                src="/images/villas/zanara/zanara2.jpg"
                alt="Villa Zanara Kolam Renang"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border-l-2 border-b-2 border-brand-dark hidden md:block pointer-events-none" />
          </div>

        </div>

        {/* ================= PART 2: 2 ELEGANT VILLA PREVIEW CARDS ================= */}
        <div className="pt-12 border-t border-gray-100 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2 block font-sans">
              ACCOMMODATION OPTIONS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-brand-dark">
              Pilihan Villa Rombongan
            </h3>
            <p className="text-gray-500 text-sm mt-3 font-light leading-relaxed font-sans">
              Klik salah satu villa untuk melihat galeri foto lengkap, denah fasilitas, dan informasi ketersediaan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {VILLAS.map((villa) => (
              <div
                key={villa.id}
                className="bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 flex flex-col group shadow-sm hover:shadow-md"
              >
                {/* Image Container with Editorial Badge */}
                <div
                  onClick={() => handleOpenVillaDetail(villa.id)}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 cursor-pointer"
                >
                  <Image
                    src={villa.photos[0].src}
                    alt={villa.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-xs text-brand-dark text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-sm font-sans">
                      {villa.badge}
                    </span>
                  </div>

                  {/* Photo Count */}
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-brand-dark/85 backdrop-blur-xs text-white text-[11px] font-sans font-bold px-3 py-1 shadow-sm">
                      {villa.photos.length} Foto Galeri
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-sans mb-3">
                      <span className="flex items-center gap-1 font-medium text-gray-700">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        {villa.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-bold text-brand-dark">
                        <Users className="w-3.5 h-3.5 text-gray-400" />
                        {villa.capacity}
                      </span>
                    </div>

                    <h4 className="font-serif text-2xl text-brand-dark mb-3">
                      {villa.name}
                    </h4>

                    <p className="text-gray-600 text-sm font-light leading-relaxed mb-6 font-sans line-clamp-3">
                      {villa.description}
                    </p>

                    {/* Features Preview (4 items) */}
                    <ul className="space-y-2 mb-8 font-sans text-xs text-gray-700">
                      {villa.features.slice(0, 4).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-sans">
                    <button
                      type="button"
                      onClick={() => handleOpenVillaDetail(villa.id)}
                      className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark hover:text-neutral-600 transition-colors cursor-pointer group-hover:translate-x-1 duration-300 py-1"
                    >
                      <span>Lihat Galeri & Fasilitas</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Halo SA Adventure, saya ingin cek ketersediaan tanggal dan harga sewa untuk ${villa.name} (${villa.capacity}). Mohon informasinya.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs text-center"
                    >
                      Cek Jadwal
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PART 3: KULINER & KATERING SECTION ================= */}
        <div id="menu-katering" className="pt-16 border-t border-gray-200">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2 block font-sans">
              KULINER & KATERING SA ADVENTURE
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-brand-dark">
              Pilihan Nasi Box, Bento & Prasmanan
            </h3>
            <p className="text-gray-500 text-sm mt-3 font-light leading-relaxed font-sans max-w-xl mx-auto">
              Diracik dari bahan segar dan bumbu rempah otentik khas Sunda & Nusantara. Siap disajikan hangat di saung basecamp arung jeram maupun di villa rombongan Anda.
            </p>

            {/* Toggle Button to Reveal/Hide Catering Menu */}
            <div className="mt-6 sm:mt-8 flex justify-center">
              <button
                id="btn-toggle-catering"
                type="button"
                onClick={handleToggleCateringMenu}
                aria-expanded={isCateringMenuOpen}
                aria-controls="catering-content-area"
                className="inline-flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 bg-brand-dark hover:bg-neutral-800 text-white font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-amber-400" />
                <span>{isCateringMenuOpen ? "Sembunyikan Menu" : "Lihat Pilihan Menu Katering"}</span>
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isCateringMenuOpen ? "-rotate-90" : "rotate-90"}`} />
              </button>
            </div>
          </div>

          {/* Collapsible Catering Content */}
          {isCateringMenuOpen && (
            <div id="catering-content-area" className="scroll-mt-24 transition-opacity duration-300">
              <div className="text-center mb-6 sm:mb-8">
                {/* Segmented Switcher: Nasi Box vs Prasmanan */}
                <div className="inline-flex border border-gray-300 p-1 bg-white mt-4 sm:mt-6 font-sans">
                  <button
                    type="button"
                    onClick={() => setCateringTab("box")}
                    className={`px-3 sm:px-6 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${cateringTab === "box"
                        ? "bg-brand-dark text-white shadow-xs"
                        : "text-gray-600 hover:text-black"
                      }`}
                  >
                    <Utensils className="w-3.5 h-3.5 shrink-0" />
                    <span>Nasi Box & Bento ({CATERING_ITEMS.length})</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCateringTab("prasmanan")}
                    className={`px-3 sm:px-6 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${cateringTab === "prasmanan"
                        ? "bg-brand-dark text-white shadow-xs"
                        : "text-gray-600 hover:text-black"
                      }`}
                  >
                    <Flame className="w-3.5 h-3.5 shrink-0" />
                    <span>Prasmanan Sunda ({PRASMANAN_MENUS.length} Menu)</span>
                  </button>
                </div>

                {/* Sub-Filters for Nasi Box */}
                {cateringTab === "box" && (
                  <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3 font-sans text-[11px] sm:text-xs">
                    {[
                      { id: "all", label: `Semua (${CATERING_ITEMS.length})` },
                      { id: "box", label: "Nasi Box & Bento" },
                      { id: "sunda", label: "Tradisional Sunda" },
                      { id: "tumpeng", label: "Tumpeng Syukuran" },
                    ].map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setBoxSubCategory(f.id as any)}
                        className={`px-2.5 sm:px-4 py-1 sm:py-1.5 transition-colors cursor-pointer ${boxSubCategory === f.id
                            ? "border-b-2 border-brand-dark text-brand-dark font-bold"
                            : "text-gray-500 hover:text-black font-medium"
                          }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* VIEW A: NASI BOX & BENTO GRID */}
              {cateringTab === "box" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 font-sans mb-12">
                  {filteredBoxItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 flex flex-col group shadow-2xs hover:shadow-sm"
                    >
                      {/* Photo with Click to Lightbox */}
                      <div
                        onClick={() => setLightboxItem(item)}
                        className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 cursor-pointer"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-brand-dark/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 shadow-sm">
                            Lihat Foto Detail
                          </span>
                        </div>

                        <div className="absolute top-3 left-3">
                          <span className="bg-white/95 text-brand-dark text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 shadow-2xs">
                            {item.badge}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                            {item.categoryLabel}
                          </span>
                          <h5 className="font-serif text-lg text-brand-dark mb-2 leading-snug">
                            {item.name}
                          </h5>
                          <p className="text-gray-500 text-xs font-light leading-relaxed mb-4 line-clamp-2">
                            {item.desc}
                          </p>

                          <ul className="space-y-1 mb-5 text-[11px] text-gray-600">
                            {item.items.slice(0, 3).map((it, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-emerald-600 shrink-0 font-bold">•</span>
                                <span className="truncate">{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => setLightboxItem(item)}
                            className="text-xs font-bold text-gray-700 hover:text-black uppercase tracking-wider cursor-pointer"
                          >
                            Detail Menu
                          </button>

                          <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                              `Halo SA Adventure, saya ingin pesan katering "${item.name}". Mohon info harga & minimal pemesanannya.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
                          >
                            Pesan Menu
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* VIEW B: PRASMANAN SUNDA SHOWCASE */}
              {cateringTab === "prasmanan" && (
                <div className="space-y-8 font-sans mb-12">

                  {/* 6 Prasmanan Menu Tabs */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-200 scrollbar-none">
                    {PRASMANAN_MENUS.map((m, idx) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setActivePrasmananIdx(idx)}
                        className={`px-5 py-3 text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${activePrasmananIdx === idx
                            ? "border-b-2 border-brand-dark text-brand-dark font-bold bg-[#fafafa]"
                            : "text-gray-500 hover:text-black font-medium"
                          }`}
                      >
                        {m.title}
                      </button>
                    ))}
                  </div>

                  {/* Active Prasmanan Menu Details */}
                  {(() => {
                    const activeMenu = PRASMANAN_MENUS[activePrasmananIdx];
                    return (
                      <div className="bg-[#fafafa] border border-gray-200 p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 mb-6 gap-2">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 block">
                              SAJIAN PRASMANAN
                            </span>
                            <h4 className="font-serif text-2xl text-brand-dark">
                              {activeMenu.title}: {activeMenu.subtitle}
                            </h4>
                          </div>
                          <span className="self-start sm:self-auto bg-white border border-gray-300 text-gray-700 text-xs font-bold uppercase tracking-wider px-3 py-1">
                            10 Menu Komplit
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                          {activeMenu.items.map((dish, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex items-center gap-3 p-3 bg-white border border-gray-200 text-xs text-gray-700 font-medium"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>{dish}</span>
                            </div>
                          ))}
                        </div>

                        {/* Live Stall Gubukan & Kambing Guling */}
                        <div className="p-5 bg-white border border-gray-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Flame className="w-4 h-4 text-amber-500" />
                            <h5 className="font-serif text-base text-brand-dark font-bold">
                              Pilihan Pondokan / Live Stall Gubukan:
                            </h5>
                          </div>
                          <div className="flex flex-wrap gap-2 text-xs">
                            {GUBUKAN_OPTIONS.map((gubuk, gIdx) => (
                              <span
                                key={gIdx}
                                className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 font-medium"
                              >
                                {gubuk}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA Box */}
                        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="text-xs text-gray-600 font-light text-center sm:text-left">
                            Prasmanan mulai <strong className="text-brand-dark font-bold">Rp 45.000 / pax</strong>. Tersedia hidangan Kambing Guling utuh & Barbeque Night.
                          </div>

                          <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                              `Halo SA Adventure, saya ingin konsultasi paket katering prasmanan (${activeMenu.title}: ${activeMenu.subtitle}) untuk acara kami.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                          >
                            <WhatsAppIcon className="w-4 h-4 fill-current" />
                            <span>Konsultasi Menu Prasmanan</span>
                          </a>
                        </div>
                      </div>
                    );
                  })()}

                </div>
              )}

            </div>
          )}

        </div>

        {/* ================= PART 4: VILLA DETAIL MODAL (EDITORIAL THEME) ================= */}
        {isVillaModalOpen && (
          <div
            onClick={() => setIsVillaModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 transition-all animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-white rounded-none border border-gray-200 shadow-2xl flex flex-col max-h-[94vh] overflow-hidden animate-in zoom-in-95 duration-200"
            >
              {/* Modal Top Bar */}
              <div className="p-5 sm:p-6 border-b border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#fcfcfc]">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase block font-sans">
                    FASILITAS & GALERI VILLA
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-dark mt-0.5">
                    {currentVilla.name}
                  </h3>
                </div>

                {/* Minimalist Switcher & Close */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="flex items-center border border-gray-300 p-0.5 bg-white">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveVillaId("mawar");
                        setPhotoIndex(0);
                      }}
                      className={`px-4 py-2 text-xs font-bold font-sans uppercase tracking-wider transition-colors cursor-pointer ${activeVillaId === "mawar"
                          ? "bg-brand-dark text-white"
                          : "text-gray-600 hover:text-black"
                        }`}
                    >
                      Villa Mawar
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveVillaId("zanara");
                        setPhotoIndex(0);
                      }}
                      className={`px-4 py-2 text-xs font-bold font-sans uppercase tracking-wider transition-colors cursor-pointer ${activeVillaId === "zanara"
                          ? "bg-brand-dark text-white"
                          : "text-gray-600 hover:text-black"
                        }`}
                    >
                      Villa Zanara
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsVillaModalOpen(false)}
                    className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
                    aria-label="Tutup"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content Scrollable Area */}
              <div className="overflow-y-auto p-5 sm:p-8 flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* Left Column: Photo Viewer & Thumbnails (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col gap-3">

                    {/* Main Image Frame */}
                    <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden shadow-sm select-none" onTouchStart={handlePhotoTouchStart} onTouchMove={handlePhotoTouchMove} onTouchEnd={handlePhotoTouchEnd}>
                      <Image
                        src={activePhoto.src}
                        alt={activePhoto.title}
                        fill
                        priority
                        className="object-cover transition-opacity duration-300"
                      />

                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Photo Counter */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/60 backdrop-blur-xs text-white text-xs font-sans font-bold px-3 py-1">
                          {photoIndex + 1} / {currentVilla.photos.length}
                        </span>
                      </div>

                      {/* Mobile touch guidance */}
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xs text-white text-[10px] font-sans px-2.5 py-1 rounded sm:hidden pointer-events-none">
                        Swipe &larr; &rarr; untuk ganti foto
                      </div>
                      {/* Navigation Chevrons */}
                      <button
                        type="button"
                        onClick={handlePrevPhoto}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Foto Sebelumnya"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextPhoto}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Foto Selanjutnya"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Caption */}
                      <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                        <h5 className="font-serif text-base sm:text-lg">
                          {activePhoto.title}
                        </h5>
                        <p className="text-xs text-gray-300 font-sans font-light mt-0.5 line-clamp-2">
                          {activePhoto.caption}
                        </p>
                      </div>
                    </div>

                    {/* Thumbnail Selector */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                      {currentVilla.photos.map((photo, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setPhotoIndex(idx)}
                          className={`relative w-16 sm:w-20 aspect-[16/10] overflow-hidden shrink-0 transition-all cursor-pointer ${photoIndex === idx
                              ? "border-2 border-brand-dark opacity-100"
                              : "border border-gray-200 opacity-60 hover:opacity-100"
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

                  {/* Right Column: Details, Features, CTA (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full font-sans">
                    <div>
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3 font-medium">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />
                          {currentVilla.location}
                        </span>
                        <span>•</span>
                        <span className="font-bold text-brand-dark">
                          {currentVilla.capacity}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
                        {currentVilla.description}
                      </p>

                      <div className="mb-6">
                        <span className="text-xs font-bold tracking-wider text-gray-400 uppercase block mb-3">
                          Fasilitas Unggulan:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-700">
                          {currentVilla.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Box */}
                    <div className="pt-6 border-t border-gray-200 space-y-3">
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          `Halo SA Adventure, saya ingin cek ketersediaan tanggal dan harga sewa untuk ${currentVilla.name} (${currentVilla.capacity}). Mohon informasinya.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white uppercase tracking-widest text-xs font-bold py-3.5 px-5 flex items-center justify-center gap-2 transition-colors duration-300 shadow-sm"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-current" />
                        <span>Cek Jadwal & Harga {currentVilla.name}</span>
                      </a>

                      <div className="text-center text-[11px] text-gray-500">
                        Admin Utama lambat merespons?{" "}
                        <a
                          href={`https://wa.me/${whatsappBackupNumber}?text=${encodeURIComponent(
                            `Halo SA Adventure, saya ingin cek ketersediaan tanggal dan harga sewa untuk ${currentVilla.name} (${currentVilla.capacity}). Mohon informasinya.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 font-semibold underline hover:text-emerald-800"
                        >
                          Hubungi WA Cadangan (0895-8087-55565)
                        </a>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* ================= PART 5: LIGHTBOX MODAL (FOR HIGH-RES FOOD PHOTO) ================= */}
        {lightboxItem && (
          <div
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 transition-all animate-in fade-in duration-200 font-sans"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white border border-gray-200 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-[#fbfbfb]">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                    {lightboxItem.categoryLabel}
                  </span>
                  <h4 className="font-serif text-xl text-brand-dark">
                    {lightboxItem.name}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxItem(null)}
                  className="p-1.5 text-gray-400 hover:text-black cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Photo */}
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src={lightboxItem.image}
                  alt={lightboxItem.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Footer */}
              <div className="p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-gray-600 font-light max-w-sm text-center sm:text-left">
                  {lightboxItem.desc}
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Halo SA Adventure, saya ingin memesan "${lightboxItem.name}". Mohon info harga dan minimal pemesanannya.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors text-center shrink-0"
                >
                  Pesan Menu Ini
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
