"use client";

import { useState, useMemo, useEffect } from "react";
import {
  X,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Building2,
  Sparkles,
  Camera,
  Utensils,
  Home,
  Copy,
  Check,
  FileText,
  BadgeCheck,
  MapPin,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export interface BookingFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageId?: string;
  initialPax?: number;
}

interface PackageOption {
  id: string;
  name: string;
  distance: string;
  duration: string;
  pricePerPax: number;
  badge?: string;
  desc: string;
}

const PACKAGES: PackageOption[] = [
  {
    id: "paket-b",
    name: "Paket B (Rafting Complete)",
    distance: "11 KM",
    duration: "2 - 2.5 Jam",
    pricePerPax: 199000,
    badge: "Paling Populer & Lengkap",
    desc: "Rute favorit dengan jeram terlengkap, flying fox finish, kelapa muda & makan siang.",
  },
  {
    id: "paket-a",
    name: "Paket A (Rafting Explorer)",
    distance: "7 KM",
    duration: "1.5 - 2 Jam",
    pricePerPax: 168000,
    badge: "Best Value",
    desc: "Sensasi arung jeram seru jalur menengah dengan snack & kelapa muda segar.",
  },
  {
    id: "paket-c",
    name: "Paket C (Family & Fun)",
    distance: "5 KM",
    duration: "1 Jam",
    pricePerPax: 145000,
    desc: "Cocok untuk rombongan keluarga, pemula, dan anak-anak dengan jeram aman berbusa.",
  },
];

interface AddonOption {
  id: string;
  name: string;
  type: "per_pax" | "flat";
  price: number;
  icon: any;
  desc: string;
}

const ADDON_OPTIONS: AddonOption[] = [
  {
    id: "drone-photo",
    name: "Dokumentasi Drone & DSLR HD",
    type: "flat",
    price: 450000,
    icon: Camera,
    desc: "Foto aksi di jeram & video cinematic drone 4K siap tayang untuk rombongan.",
  },
  {
    id: "katering-prasmanan",
    name: "Upgrade Prasmanan Sunda Lengkap",
    type: "per_pax",
    price: 65000,
    icon: Utensils,
    desc: "Prasmanan hangat di saung: ayam bekakak, sayur asem, lalapan sambal & buah.",
  },
  {
    id: "fun-games",
    name: "Fun Games & Ice Breaking",
    type: "per_pax",
    price: 120000,
    icon: Sparkles,
    desc: "Fasilitator games outbound seru untuk mencairkan suasana dan kekompakan tim.",
  },
  {
    id: "paintball",
    name: "Paintball War Game Battle",
    type: "per_pax",
    price: 130000,
    icon: ShieldCheck,
    desc: "Simulasi tempur hutan taktis lengkap dengan senjata semi-otomatis & rompi safety.",
  },
  {
    id: "villa-mawar",
    name: "Akomodasi Villa Mawar Puncak (1 Malam)",
    type: "flat",
    price: 3500000,
    icon: Home,
    desc: "Kapasitas 30-70 orang, private pool, rooftop view gunung & fasilitas karaoke.",
  },
  {
    id: "villa-zanara",
    name: "Akomodasi Villa Zanara Bogor (1 Malam)",
    type: "flat",
    price: 2800000,
    icon: Home,
    desc: "Kapasitas 20-45 orang, private pool tropis sejuk, nyaman & hening privat.",
  },
];

const TIME_SLOTS = [
  { id: "08:30", label: "08:30 WIB (Trip Pagi 1)", desc: "Udara segar & debit air optimal" },
  { id: "10:00", label: "10:00 WIB (Trip Pagi 2)", desc: "Paling favorit rombongan kantor" },
  { id: "13:00", label: "13:00 WIB (Trip Siang 1)", desc: "Selesai makan siang langsung rafting" },
  { id: "14:30", label: "14:30 WIB (Trip Sore)", desc: "Suasana sejuk teduh pepohonan" },
];

function formatRupiah(num: number) {
  return "Rp " + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function BookingFlowModal({
  isOpen,
  onClose,
  initialPackageId = "paket-b",
  initialPax = 20,
}: BookingFlowModalProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Step 1: Date & Time
  const defaultDateStr = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split("T")[0];
  }, []);

  const [selectedDate, setSelectedDate] = useState(defaultDateStr);
  const [selectedSlot, setSelectedSlot] = useState("09:00");

  // Step 2: Package & Participants
  const [selectedPkgId, setSelectedPkgId] = useState(initialPackageId);
  const [paxCount, setPaxCount] = useState(initialPax);

  // Step 3: Addons & Accommodations
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Step 4: Customer Details
  const [picName, setPicName] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [whatsappPhone, setWhatsappPhone] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // Unique Booking Code
  const bookingCode = useMemo(() => {
    const year = new Date().getFullYear();
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `SA-${year}-${rand}`;
  }, []);

  // Update initial values if props change
  useEffect(() => {
    if (initialPackageId) setSelectedPkgId(initialPackageId);
    if (initialPax) setPaxCount(initialPax);
  }, [initialPackageId, initialPax]);

  // Reset to Step 1 whenever opened, and lock body scroll
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Selected package object
  const currentPackage =
    PACKAGES.find((p) => p.id === selectedPkgId) || PACKAGES[0];

  // Calculators
  const packageTotal = currentPackage.pricePerPax * paxCount;

  const boatsEstimate = Math.ceil(paxCount / 5);

  const addonBreakdown = selectedAddons.map((id) => {
    const addon = ADDON_OPTIONS.find((a) => a.id === id);
    if (!addon) return { name: "", cost: 0 };
    const cost = addon.type === "per_pax" ? addon.price * paxCount : addon.price;
    return { name: addon.name, cost };
  });

  const addonTotal = addonBreakdown.reduce((sum, item) => sum + item.cost, 0);
  const grandTotal = packageTotal + addonTotal;
  const downPayment = Math.round((grandTotal * 0.3) / 1000) * 1000;
  const remainingPayment = grandTotal - downPayment;

  // Toggle Addon
  const handleToggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Date formatting for human reading
  const formattedDate = useMemo(() => {
    if (!selectedDate) return "-";
    const d = new Date(selectedDate);
    return d.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [selectedDate]);

  // Generate Booking Text for WhatsApp
  const generateBookingMessage = () => {
    const addonLines =
      addonBreakdown.length > 0
        ? addonBreakdown
            .map((a) => `  + ${a.name}: ${formatRupiah(a.cost)}`)
            .join("\n")
        : "  - Tidak ada layanan tambahan";

    return `*RESERVASI RESMI SA ADVENTURE CISADANE*
--------------------------------------------------
*KODE BOOKING : #${bookingCode}*
*STATUS       : MENUNGGU VERIFIKASI SLOT*

*1. DATA PEMESAN:*
• Nama PIC     : ${picName.trim() || "-"}
• Instansi/Grup: ${agencyName.trim() || "Pribadi / Rombongan"}
• No. WhatsApp : ${whatsappPhone.trim() || "-"}
• Email        : ${emailAddress.trim() || "-"}

*2. JADWAL & TRIP:*
• Tanggal Trip : ${formattedDate}
• Sesi Waktu   : ${selectedSlot} WIB
• Titik Kumpul : Papalidan Outdoor Resto (Basecamp SA Adventure Caringin Bogor)
• Google Maps  : https://maps.app.goo.gl/Papalidan

*3. RINCIAN PAKET & PESERTA:*
• Paket Utama  : ${currentPackage.name} (${currentPackage.distance})
• Tarif Paket  : ${formatRupiah(currentPackage.pricePerPax)} / Pax
• Jumlah Peserta: ${paxCount} Orang (~${boatsEstimate} Perahu Rafting)
• Subtotal Paket: ${formatRupiah(packageTotal)}

*4. LAYANAN TAMBAHAN (ADD-ON):*
${addonLines}
• Subtotal Add-on: ${formatRupiah(addonTotal)}

--------------------------------------------------
*TOTAL BIAYA   : ${formatRupiah(grandTotal)}*
*ESTIMASI DP 30%: ${formatRupiah(downPayment)}*
*SISA DI LOKASI: ${formatRupiah(remainingPayment)}*
--------------------------------------------------
*Catatan Khusus:*
"${specialNotes.trim() || "Tidak ada catatan khusus."}"

Mohon konfirmasi ketersediaan perahu dan panduan pembayaran DP untuk nomor booking #${bookingCode}. Terima kasih!`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateBookingMessage());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSendBooking = () => {
    const text = encodeURIComponent(generateBookingMessage());
    const waUrl = `https://wa.me/6281291068287?text=${text}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white max-w-5xl w-full border border-gray-200 shadow-2xl flex flex-col max-h-[95vh] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= MODAL HEADER ================= */}
        <div className="p-4 sm:p-6 border-b border-gray-200 bg-[#fbfbfb] flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase font-sans">
                SISTEM PEMESANAN ONLINE RESMI
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider font-sans">
                Real-Time Booking
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-dark">
              Reservasi Tiket & Paket Rafting
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
            aria-label="Tutup Pemesanan"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* ================= STEP INDICATOR (4 STEPS) ================= */}
        <div className="border-b border-gray-200 bg-white px-4 sm:px-8 py-3.5">
          <div className="grid grid-cols-4 gap-2 text-center font-sans">
            {[
              { num: 1, title: "Jadwal & Waktu" },
              { num: 2, title: "Paket & Peserta" },
              { num: 3, title: "Layanan Tambahan" },
              { num: 4, title: "Data & Invoice" },
            ].map((s) => {
              const isPassed = currentStep > s.num;
              const isCurrent = currentStep === s.num;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setCurrentStep(s.num as any)}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 pb-1 transition-all cursor-pointer ${
                    isCurrent
                      ? "text-brand-dark font-bold border-b-2 border-brand-dark"
                      : isPassed
                      ? "text-emerald-700 font-semibold"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full text-xs flex items-center justify-center shrink-0 transition-colors ${
                      isCurrent
                        ? "bg-brand-dark text-white"
                        : isPassed
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {isPassed ? <Check className="w-3.5 h-3.5" /> : s.num}
                  </span>
                  <span className="text-[11px] sm:text-xs truncate max-w-[120px]">
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= MODAL BODY (FORM + LIVE SUMMARY SIDEBAR) ================= */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT / MAIN COLUMN (STEP CONTENT) - 8 COLS */}
            <div className="lg:col-span-8">
              
              {/* STEP 1: JADWAL & WAKTU */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200 font-sans">
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-brand-dark mb-1">
                      Langkah 1: Tentukan Tanggal & Sesi Kunjungan
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
                      Pilih tanggal rencana kedatangan rombongan Anda dan pilih sesi jam rafting yang diinginkan.
                    </p>
                  </div>

                  {/* Date Input */}
                  <div className="bg-[#fcfcfc] border border-gray-200 p-5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Pilih Tanggal Kedatangan
                    </label>
                    <div className="relative max-w-sm">
                      <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-white border border-gray-300 px-4 py-3 text-sm font-medium text-brand-dark focus:outline-hidden focus:border-brand-dark transition"
                      />
                    </div>
                    <p className="text-xs text-gray-500 font-light mt-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>Tanggal Terpilih: <strong>{formattedDate}</strong></span>
                    </p>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                      Pilih Sesi Jam Rafting
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {TIME_SLOTS.map((slot) => {
                        const isSelected = selectedSlot === slot.id;
                        return (
                          <div
                            key={slot.id}
                            onClick={() => setSelectedSlot(slot.id)}
                            className={`p-4 border transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? "border-brand-dark bg-[#f8f9fa] shadow-xs"
                                : "border-gray-200 hover:border-gray-400 bg-white"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-sm font-bold text-brand-dark flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-gray-400" />
                                {slot.label}
                              </span>
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                  isSelected
                                    ? "border-brand-dark bg-brand-dark text-white"
                                    : "border-gray-300"
                                }`}
                              >
                                {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                              </div>
                            </div>
                            <span className="text-xs text-gray-500 font-light">
                              {slot.desc}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Basecamp Location Info */}
                  <div className="p-4 bg-gray-50 border border-gray-200 text-xs text-gray-600 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-brand-dark block mb-0.5">Titik Kumpul: Papalidan Outdoor Resto (Basecamp SA Adventure)</strong>
                      <span>Fasilitas parkir luas mobil &amp; bus besar, saung istirahat, kamar bilas bersih terawat, serta musholla tersedia lengkap.</span>
                      <div className="mt-2">
                        <a
                          href="https://www.google.com/maps/place/Papalidan+Outdoor+Resto/@-6.7029647,106.8263511,932m/data=!3m1!1e3!4m6!3m5!1s0x2e69c97505cbbd4d:0x3efd818443a97b1e!8m2!3d-6.7030124!4d106.8263064!16s%2Fg%2F11hmz948fj"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-bold text-brand-dark hover:text-emerald-700 transition"
                        >
                          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Buka Titik Lokasi di Google Maps &rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: PAKET & PESERTA */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200 font-sans">
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-brand-dark mb-1">
                      Langkah 2: Pilih Paket Rafting & Jumlah Peserta
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
                      Sesuaikan jarak tempuh arung jeram dan jumlah peserta yang akan ikut.
                    </p>
                  </div>

                  {/* Package Cards */}
                  <div className="space-y-3">
                    {PACKAGES.map((pkg) => {
                      const isSelected = selectedPkgId === pkg.id;
                      return (
                        <div
                          key={pkg.id}
                          onClick={() => setSelectedPkgId(pkg.id)}
                          className={`p-5 border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                            isSelected
                              ? "border-brand-dark bg-[#fbfbfb] shadow-sm ring-1 ring-brand-dark"
                              : "border-gray-200 hover:border-gray-400 bg-white"
                          }`}
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="font-serif text-lg text-brand-dark">
                                {pkg.name}
                              </h5>
                              {pkg.badge && (
                                <span className="bg-brand-dark text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                                  {pkg.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 font-light mb-2">
                              {pkg.desc}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-gray-600 font-medium">
                              <span>Jarak: <strong>{pkg.distance}</strong></span>
                              <span>•</span>
                              <span>Durasi: <strong>{pkg.duration}</strong></span>
                            </div>
                          </div>

                          <div className="text-left sm:text-right shrink-0">
                            <div className="font-serif text-xl font-bold text-brand-dark">
                              {formatRupiah(pkg.pricePerPax)}
                            </div>
                            <span className="text-[11px] text-gray-400">per orang / pax</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Participants Counter */}
                  <div className="bg-[#fcfcfc] border border-gray-200 p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Jumlah Peserta Rombongan
                        </label>
                        <p className="text-xs text-gray-500 font-light">
                          Standar minimal reservasi adalah 10 orang (dihitung per perahu isi 5-6 orang).
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setPaxCount((prev) => Math.max(10, prev - 5))}
                          className="w-10 h-10 border border-gray-300 hover:border-black bg-white flex items-center justify-center font-bold text-base transition cursor-pointer"
                        >
                          -5
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaxCount((prev) => Math.max(10, prev - 1))}
                          className="w-10 h-10 border border-gray-300 hover:border-black bg-white flex items-center justify-center font-bold text-base transition cursor-pointer"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min={10}
                          max={500}
                          value={paxCount}
                          onChange={(e) => setPaxCount(Math.max(10, parseInt(e.target.value) || 10))}
                          className="w-20 text-center py-2 border border-gray-300 font-serif text-xl font-bold text-brand-dark"
                        />
                        <button
                          type="button"
                          onClick={() => setPaxCount((prev) => prev + 1)}
                          className="w-10 h-10 border border-gray-300 hover:border-black bg-white flex items-center justify-center font-bold text-base transition cursor-pointer"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaxCount((prev) => prev + 5)}
                          className="w-10 h-10 border border-gray-300 hover:border-black bg-white flex items-center justify-center font-bold text-base transition cursor-pointer"
                        >
                          +5
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between text-xs text-gray-600 gap-2">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Users className="w-4 h-4 text-gray-400" />
                        Estimasi Kebutuhan Perahu: <strong>~{boatsEstimate} Perahu Karet</strong> (5-6 pax/boat)
                      </span>
                      {paxCount >= 50 && (
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1">
                          Rombongan Besar: Termasuk Banner Dokumentasi Gratis
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: ADDONS & ACCOMMODATION */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200 font-sans">
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-brand-dark mb-1">
                      Langkah 3: Tambah Layanan & Penginapan Villa
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
                      Lengkapi acara rafting Anda dengan dokumentasi drone, katering prasmanan, games outbound, atau villa penginapan.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ADDON_OPTIONS.map((addon) => {
                      const isSelected = selectedAddons.includes(addon.id);
                      const IconComp = addon.icon;
                      const calculatedPrice =
                        addon.type === "per_pax"
                          ? addon.price * paxCount
                          : addon.price;

                      return (
                        <div
                          key={addon.id}
                          onClick={() => handleToggleAddon(addon.id)}
                          className={`p-5 border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? "border-brand-dark bg-[#fbfbfb] shadow-xs ring-1 ring-brand-dark"
                              : "border-gray-200 hover:border-gray-400 bg-white"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-7 h-7 flex items-center justify-center ${
                                    isSelected
                                      ? "bg-brand-dark text-white"
                                      : "bg-gray-100 text-gray-600"
                                  }`}
                                >
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                  {addon.type === "per_pax" ? "Per Orang" : "Paket Rombongan"}
                                </span>
                              </div>
                              <div
                                className={`w-5 h-5 border flex items-center justify-center transition-colors ${
                                  isSelected
                                    ? "bg-brand-dark border-brand-dark text-white"
                                    : "border-gray-300 bg-white"
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5" />}
                              </div>
                            </div>

                            <h5 className="font-serif text-base text-brand-dark mb-1">
                              {addon.name}
                            </h5>
                            <p className="text-xs text-gray-500 font-light mb-4">
                              {addon.desc}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                            <span className="text-gray-400">
                              {addon.type === "per_pax"
                                ? `${formatRupiah(addon.price)} / pax`
                                : "Harga Flat"}
                            </span>
                            <span className="font-serif font-bold text-sm text-brand-dark">
                              + {formatRupiah(calculatedPrice)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: DATA PEMESAN & INVOICE TICKET */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in duration-200 font-sans">
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-brand-dark mb-1">
                      Langkah 4: Data Pemesan & Faktur Reservasi
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
                      Lengkapi identitas penanggung jawab rombongan (PIC) untuk penerbitan tiket dan konfirmasi booking resmi.
                    </p>
                  </div>

                  {/* PIC Form */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#fcfcfc] border border-gray-200 p-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Nama Lengkap PIC *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso"
                        value={picName}
                        onChange={(e) => setPicName(e.target.value)}
                        className="w-full bg-white border border-gray-300 px-3.5 py-2.5 text-sm text-brand-dark focus:outline-hidden focus:border-brand-dark"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Nama Instansi / Rombongan
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: PT Sumber Makmur / Keluarga Budi"
                        value={agencyName}
                        onChange={(e) => setAgencyName(e.target.value)}
                        className="w-full bg-white border border-gray-300 px-3.5 py-2.5 text-sm text-brand-dark focus:outline-hidden focus:border-brand-dark"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Contoh: 081234567890"
                        value={whatsappPhone}
                        onChange={(e) => setWhatsappPhone(e.target.value)}
                        className="w-full bg-white border border-gray-300 px-3.5 py-2.5 text-sm text-brand-dark focus:outline-hidden focus:border-brand-dark"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Email PIC (Opsional)
                      </label>
                      <input
                        type="email"
                        placeholder="Contoh: budi@company.com"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className="w-full bg-white border border-gray-300 px-3.5 py-2.5 text-sm text-brand-dark focus:outline-hidden focus:border-brand-dark"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Catatan Khusus / Permintaan Acara
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Contoh: Minta instruktur senior, peserta ada 3 anak-anak, dsb."
                        value={specialNotes}
                        onChange={(e) => setSpecialNotes(e.target.value)}
                        className="w-full bg-white border border-gray-300 px-3.5 py-2 text-sm text-brand-dark focus:outline-hidden focus:border-brand-dark"
                      />
                    </div>
                  </div>

                  {/* Digital Booking Ticket Preview */}
                  <div className="border border-brand-dark bg-white p-6 relative overflow-hidden shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 mb-4 gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 block font-sans">
                          E-TICKET & INVOICE SIMULASI
                        </span>
                        <h5 className="font-serif text-xl text-brand-dark">
                          SA Adventure Rafting Cisadane
                        </h5>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="text-xs text-gray-400 block">Kode Reservasi:</span>
                        <span className="font-mono text-sm font-bold text-brand-dark bg-gray-100 px-2 py-0.5 border border-gray-300">
                          #{bookingCode}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-4">
                      <div>
                        <span className="text-gray-400 block">Tanggal Trip:</span>
                        <strong className="text-brand-dark">{formattedDate}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Sesi Jam:</span>
                        <strong className="text-brand-dark">{selectedSlot} WIB</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Paket:</span>
                        <strong className="text-brand-dark">{currentPackage.name}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Peserta:</span>
                        <strong className="text-brand-dark">{paxCount} Orang (~{boatsEstimate} Perahu)</strong>
                      </div>
                    </div>

                    <div className="p-3.5 bg-gray-50 border border-gray-200 text-xs space-y-1.5 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal Rafting ({paxCount} pax):</span>
                        <span className="font-medium text-brand-dark">{formatRupiah(packageTotal)}</span>
                      </div>
                      {addonBreakdown.map((a, i) => (
                        <div key={i} className="flex justify-between text-gray-600">
                          <span>+ {a.name}:</span>
                          <span>{formatRupiah(a.cost)}</span>
                        </div>
                      ))}
                      <div className="pt-2 border-t border-gray-300 flex justify-between font-bold text-sm text-brand-dark">
                        <span>Total Biaya Keseluruhan:</span>
                        <span>{formatRupiah(grandTotal)}</span>
                      </div>
                      <div className="flex justify-between text-emerald-700 font-bold text-xs pt-1">
                        <span>Estimasi DP Reservasi (30%):</span>
                        <span>{formatRupiah(downPayment)}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="inline-flex items-center gap-1.5 px-4 py-2 border border-gray-300 hover:border-black text-xs font-bold uppercase tracking-wider text-gray-700 transition cursor-pointer"
                      >
                        {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                        <span>{isCopied ? "Berhasil Disalin!" : "Salin Ringkasan Invoice"}</span>
                      </button>
                    </div>
                  </div>

                </div>
              )}

              {/* STEP NAVIGATION BUTTONS */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between gap-4 font-sans">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => (prev - 1) as any)}
                    className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black hover:border-black transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Kembali</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => (prev + 1) as any)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Lanjut Langkah Berikutnya</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSendBooking}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Konfirmasi Booking ke WA Admin</span>
                  </button>
                )}
              </div>

            </div>

            {/* RIGHT COLUMN: STICKY ORDER BREAKDOWN SIDEBAR - 4 COLS */}
            <div className="lg:col-span-4 bg-[#f8f9fa] border border-gray-200 p-6 font-sans">
              <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-1">
                RINGKASAN PEMESANAN
              </span>
              <h5 className="font-serif text-lg text-brand-dark pb-3 border-b border-gray-200 mb-4">
                Faktur Real-Time
              </h5>

              <div className="space-y-3 text-xs mb-6">
                <div>
                  <span className="text-gray-400 block text-[11px]">Jadwal Kunjungan:</span>
                  <span className="font-semibold text-brand-dark">{formattedDate}</span>
                  <div className="text-[11px] text-gray-500">{selectedSlot} WIB</div>
                </div>

                <div>
                  <span className="text-gray-400 block text-[11px]">Paket Rafting:</span>
                  <span className="font-semibold text-brand-dark">{currentPackage.name}</span>
                  <div className="text-[11px] text-gray-500">
                    {paxCount} Orang × {formatRupiah(currentPackage.pricePerPax)}
                  </div>
                </div>

                {addonBreakdown.length > 0 && (
                  <div>
                    <span className="text-gray-400 block text-[11px]">Layanan Tambahan:</span>
                    <ul className="space-y-1 text-gray-600 mt-1">
                      {addonBreakdown.map((item, idx) => (
                        <li key={idx} className="flex justify-between">
                          <span className="truncate pr-2">• {item.name}</span>
                          <span className="font-medium shrink-0">{formatRupiah(item.cost)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Price Calculation Box */}
              <div className="pt-4 border-t border-gray-200 space-y-2 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal Paket:</span>
                  <span className="font-semibold">{formatRupiah(packageTotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal Add-on:</span>
                  <span className="font-semibold">{formatRupiah(addonTotal)}</span>
                </div>
                <div className="pt-2 border-t border-gray-300 flex justify-between font-serif text-base font-bold text-brand-dark">
                  <span>Total Biaya:</span>
                  <span>{formatRupiah(grandTotal)}</span>
                </div>
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 mt-3">
                  <div className="flex justify-between font-bold text-xs">
                    <span>Estimasi DP 30%:</span>
                    <span>{formatRupiah(downPayment)}</span>
                  </div>
                  <div className="text-[10px] text-emerald-700 mt-0.5">
                    Pelunasan 70% ({formatRupiah(remainingPayment)}) dibayarkan di basecamp saat hari H.
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-4 border-t border-gray-200 space-y-2 text-[11px] text-gray-500">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Garansi Resmi Asuransi Rafting</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bisa Reschedule Jadwal Jika Cuaca Buruk</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pemandu Berlisensi Resmi BNSP</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
