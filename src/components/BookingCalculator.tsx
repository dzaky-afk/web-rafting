"use client";

import { useState, useMemo, useEffect } from "react";
import { Plus, Minus, Check, MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const ADDONS = [
  { id: "fun-games", name: "Fun Games", price: 120000 },
  { id: "team-building", name: "Team Building", price: 180000 },
  { id: "paintball", name: "Paintball War Game", price: 130000 },
  { id: "flying-fox", name: "Flying Fox", price: 50000 },
  { id: "trekking", name: "Trekking Sentul", price: 190000 },
  { id: "offroad", name: "Offroad 4x4 Hambalang", price: 385000 },
  { id: "nasi-box", name: "Nasi Box Nusantara", price: 50000 },
  { id: "katering-prasmanan", name: "Katering Prasmanan Sunda", price: 65000 },
  { id: "akomodasi-camp", name: "Glamping / Camping Riverside", price: 175000 },
];

function formatRupiah(amount: number) {
  return "Rp " + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

interface CalculatorProps {
  selectedAddonFromCard?: string | null;
}

export default function BookingCalculator({ selectedAddonFromCard }: CalculatorProps) {
  const [selectedPkg, setSelectedPkg] = useState<"A" | "B">("B");
  const [pax, setPax] = useState<number>(20);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");

  // Sync when an addon is selected from an external card
  useEffect(() => {
    if (selectedAddonFromCard) {
      setSelectedAddons((prev) =>
        prev.includes(selectedAddonFromCard) ? prev : [...prev, selectedAddonFromCard]
      );
    }
  }, [selectedAddonFromCard]);

  // Default date: 7 days from now
  const defaultDateStr = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split("T")[0];
  }, []);

  const [targetDate, setTargetDate] = useState(defaultDateStr);
  const [targetWa, setTargetWa] = useState<"utama" | "cadangan">("utama");

  const mainPackagePrice = selectedPkg === "B" ? 199000 : 168000;
  const mainPackageName = selectedPkg === "B" ? "Paket B (Rafting Complete)" : "Paket A (Rafting Basic)";

  const mainTotal = mainPackagePrice * pax;

  const addonTotalPerPax = useMemo(() => {
    return selectedAddons.reduce((acc, addonId) => {
      const item = ADDONS.find((a) => a.id === addonId);
      return acc + (item ? item.price : 0);
    }, 0);
  }, [selectedAddons]);

  const totalAddonCost = addonTotalPerPax * pax;
  const grandTotal = mainTotal + totalAddonCost;

  const handleToggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePaxChange = (delta: number) => {
    setPax((prev) => {
      const next = prev + delta;
      return next < 20 ? 20 : next;
    });
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    let dateFormatted = targetDate;
    if (targetDate) {
      const d = new Date(targetDate);
      dateFormatted = d.toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    const chosenAddonsList = selectedAddons
      .map((id) => {
        const item = ADDONS.find((a) => a.id === id);
        return item ? `${item.name} (+${formatRupiah(item.price)}/pax)` : "";
      })
      .filter(Boolean);

    const addonText =
      chosenAddonsList.length > 0
        ? chosenAddonsList.map((str) => `   • ${str}`).join("\n")
        : "Tidak ada (Hanya Paket Rafting)";

    const waText = 
`*HALO SA ADVENTURE, SAYA INGIN RESERVASI RAFTING & OUTBOUND*
--------------------------------------------------
*DATA PEMESAN:*
• Nama PIC: ${name.trim() || "Pelanggan"}
• Rombongan / Instansi: ${group.trim() || "-"}
• Tanggal Rencana Kegiatan: ${dateFormatted}
• Jumlah Peserta: ${pax} Pax
• Titik Kumpul: Papalidan Outdoor Resto (Basecamp SA Adventure Caringin Bogor)
• Google Maps: https://maps.app.goo.gl/Papalidan

*PAKET & AKTIVITAS DIPILIH:*
• *Paket Utama:* ${mainPackageName} (${formatRupiah(mainPackagePrice)}/pax)
• *Tambahan Aktivitas:*
${addonText}

*ESTIMASI GRAND TOTAL:* 
*${formatRupiah(grandTotal)}*
--------------------------------------------------
Mohon info ketersediaan slot jadwal dan petunjuk pembayaran DP. Terima kasih!`;

    const encoded = encodeURIComponent(waText);
    const targetPhone = targetWa === "utama" ? "6281291068287" : "62895808755565";
    window.open(`https://wa.me/${targetPhone}?text=${encoded}`, "_blank");
  };

  return (
    <section id="kalkulator-booking" className="py-16 sm:py-24 bg-slate-50/50 text-slate-900 border-t border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200/80">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#0052cc] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100 mb-3">
              Simulasi & Estimasi Biaya
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              Kalkulator Booking Rafting
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2.5 leading-relaxed">
              Pilih paket rafting, tentukan jumlah peserta dan aktivitas tambahan untuk simulasi biaya transparan.
            </p>
          </div>

          <form onSubmit={handleSendToWhatsApp}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Paket & Peserta */}
              <div className="space-y-6">
                
                {/* Step 1: Pilih Paket */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                      Pilih Paket Rafting Utama
                    </h3>
                  </div>

                  <div className="grid gap-2.5">
                    {/* Paket B */}
                    <div
                      onClick={() => setSelectedPkg("B")}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        selectedPkg === "B"
                          ? "border-[#0052cc] bg-blue-50/40 ring-1 ring-[#0052cc]"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                              selectedPkg === "B"
                                ? "border-[#0052cc] bg-[#0052cc]"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {selectedPkg === "B" && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <span className="font-semibold text-sm sm:text-base text-slate-900">
                            Paket B - Rafting Complete
                          </span>
                          <span className="text-[11px] font-medium text-[#0052cc] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                            Favorit
                          </span>
                        </div>
                        <span className="font-bold text-slate-900 text-sm sm:text-base shrink-0">
                          Rp 199.000 <span className="text-xs font-normal text-slate-500">/pax</span>
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 pl-6 leading-relaxed">
                        Include: Rafting, Saung, Toilet, Snack, Makan 1x, Kelapa Muda/Jeruk, Sound, Dokumentasi, Banner
                      </p>
                    </div>

                    {/* Paket A */}
                    <div
                      onClick={() => setSelectedPkg("A")}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        selectedPkg === "A"
                          ? "border-[#0052cc] bg-blue-50/40 ring-1 ring-[#0052cc]"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                              selectedPkg === "A"
                                ? "border-[#0052cc] bg-[#0052cc]"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {selectedPkg === "A" && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <span className="font-semibold text-sm sm:text-base text-slate-900">
                            Paket A - Rafting Basic
                          </span>
                        </div>
                        <span className="font-bold text-slate-900 text-sm sm:text-base shrink-0">
                          Rp 168.000 <span className="text-xs font-normal text-slate-500">/pax</span>
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 pl-6 leading-relaxed">
                        Include: Rafting Standar Internasional, Saung, Toilet, Coffee Break & Snack
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2: Info Peserta & Tanggal */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                      Jumlah Peserta & Tanggal
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5 mb-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1.5">
                        Jumlah Peserta (Min. 20 Pax)
                      </label>
                      <div className="flex items-center h-10 border border-slate-200 rounded-lg overflow-hidden bg-white hover:border-slate-300 transition">
                        <button
                          type="button"
                          onClick={() => handlePaxChange(-5)}
                          className="w-10 h-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition border-r border-slate-200 cursor-pointer"
                          aria-label="Kurangi Peserta"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <input
                          type="number"
                          min="20"
                          value={pax}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 20;
                            setPax(val < 20 ? 20 : val);
                          }}
                          className="w-full text-center font-bold text-slate-900 text-sm focus:outline-none bg-transparent"
                        />
                        <button
                          type="button"
                          onClick={() => handlePaxChange(5)}
                          className="w-10 h-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition border-l border-slate-200 cursor-pointer"
                          aria-label="Tambah Peserta"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1.5">
                        Rencana Tanggal
                      </label>
                      <input
                        type="date"
                        required
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        className="w-full h-10 border border-slate-200 rounded-lg px-3 text-sm text-slate-800 focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] focus:outline-none bg-white transition hover:border-slate-300"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1.5">
                        Nama Pemesan / PIC
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-10 border border-slate-200 rounded-lg px-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] focus:outline-none bg-white transition hover:border-slate-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1.5">
                        Instansi / Rombongan
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Komunitas / Perusahaan"
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                        className="w-full h-10 border border-slate-200 rounded-lg px-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] focus:outline-none bg-white transition hover:border-slate-300"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Addons & Live Summary */}
              <div className="space-y-4 flex flex-col justify-between h-full">
                
                {/* Step 3: Addons (Simple & Compact) */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                        3
                      </span>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                        Tambah Aktivitas Outdoor <span className="text-xs font-normal text-slate-500">(Opsional)</span>
                      </h3>
                    </div>
                    {selectedAddons.length > 0 && (
                      <span className="text-[11px] font-bold text-[#0052cc] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                        {selectedAddons.length} Dipilih
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mb-2">
                    Pilih aktivitas pendukung acara Anda:
                  </p>

                  <div className="space-y-1.5 max-h-[190px] overflow-y-auto pr-1">
                    {ADDONS.map((addon) => {
                      const isChecked = selectedAddons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => handleToggleAddon(addon.id)}
                          className={`px-3 py-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                            isChecked
                              ? "border-[#0052cc] bg-blue-50/70 text-slate-900 ring-1 ring-[#0052cc]/30"
                              : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 transition-colors ${
                                isChecked
                                  ? "bg-[#0052cc] border-[#0052cc] text-white"
                                  : "border-slate-300 bg-white"
                              }`}
                            >
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span className="text-xs sm:text-sm font-semibold truncate">
                              {addon.name}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-slate-900 shrink-0">
                            +{formatRupiah(addon.price)} <span className="text-[10px] text-slate-400 font-normal">/pax</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Summary Card (Simple, Compact & Clean) */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/90 space-y-3">
                  
                  {/* Breakdown */}
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="flex justify-between items-center text-slate-600">
                      <span>{mainPackageName} ({pax} pax)</span>
                      <span className="font-semibold text-slate-900">{formatRupiah(mainTotal)}</span>
                    </div>
                    {selectedAddons.length > 0 && (
                      <div className="flex justify-between items-center text-slate-600">
                        <span>Aktivitas Tambahan ({selectedAddons.length} dipilih)</span>
                        <span className="font-semibold text-[#0052cc]">+{formatRupiah(totalAddonCost)}</span>
                      </div>
                    )}
                  </div>

                  {/* Total Bar */}
                  <div className="border-t border-slate-200 pt-2.5 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        Total Estimasi
                      </span>
                      <span className="text-[11px] text-slate-400">
                        ({pax} pax • Rp {Math.round(grandTotal / (pax || 20)).toLocaleString("id-ID")}/pax)
                      </span>
                    </div>
                    <div className="font-heading font-black text-2xl text-[#0052cc]">
                      {formatRupiah(grandTotal)}
                    </div>
                  </div>

                  {/* Compact WhatsApp Switcher */}
                  <div className="pt-0.5">
                    <div className="flex items-center justify-between mb-1.5 text-xs">
                      <span className="font-medium text-slate-600">Hubungi Admin:</span>
                      <span className="text-slate-500 font-mono text-[11px]">
                        {targetWa === "utama" ? "0812-9106-8287 (Utama)" : "0895-8087-55565 (Cadangan)"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 bg-white p-1 rounded-xl border border-slate-200 text-xs font-bold">
                      <button
                        type="button"
                        onClick={() => setTargetWa("utama")}
                        className={`py-1.5 px-2.5 rounded-lg text-center transition-all cursor-pointer ${
                          targetWa === "utama"
                            ? "bg-[#0052cc] text-white shadow-sm"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        Admin Utama
                      </button>
                      <button
                        type="button"
                        onClick={() => setTargetWa("cadangan")}
                        className={`py-1.5 px-2.5 rounded-lg text-center transition-all cursor-pointer ${
                          targetWa === "cadangan"
                            ? "bg-[#0052cc] text-white shadow-sm"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        Admin Cadangan
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#10b981] hover:bg-[#059669] active:scale-[0.99] text-white font-heading font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                    <span>Kirim Estimasi ke WhatsApp</span>
                  </button>

                  {/* Location Info */}
                  <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Titik Kumpul:</span>
                    <a
                      href="https://www.google.com/maps/place/Papalidan+Outdoor+Resto/@-6.7029647,106.8263511,932m/data=!3m1!1e3!4m6!3m5!1s0x2e69c97505cbbd4d:0x3efd818443a97b1e!8m2!3d-6.7030124!4d106.8263064!16s%2Fg%2F11hmz948fj"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-brand-dark hover:text-emerald-700 underline underline-offset-2 transition"
                    >
                      Papalidan Outdoor Resto &rarr;
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </form>

        </div>

      </div>
    </section>
  );
}
