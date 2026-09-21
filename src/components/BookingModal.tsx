"use client";

import { useState, useMemo } from "react";
import { X, Calendar, Users, Phone, User, FileText } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  pricePerPax: number;
}

function formatRupiah(amount: number) {
  return "Rp " + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function BookingModal({
  isOpen,
  onClose,
  packageName,
  pricePerPax,
}: BookingModalProps) {
  const [pax, setPax] = useState<number>(20);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const defaultDateStr = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split("T")[0];
  }, []);
  const [date, setDate] = useState(defaultDateStr);

  const [targetWa, setTargetWa] = useState<"utama" | "cadangan">("utama");

  if (!isOpen) return null;

  const total = pricePerPax * (pax < 20 ? 20 : pax);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let dateFormatted = date;
    if (date) {
      const d = new Date(date);
      dateFormatted = d.toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    const waText =
      `*HALO SA ADVENTURE, SAYA INGIN BOOKING ${packageName.toUpperCase()}*
--------------------------------------------------
*DATA PEMESAN:*
• Nama Lengkap: ${name.trim() || "Pelanggan"}
• No. WhatsApp / HP: ${phone.trim() || "-"}
• Tanggal Acara: ${dateFormatted}
• Jumlah Peserta: ${pax} Pax

*PAKET DIPILIH:*
• ${packageName} (${formatRupiah(pricePerPax)}/Pax)
• Catatan Khusus: ${notes.trim() || "Tidak ada"}

*ESTIMASI TOTAL:* 
*${formatRupiah(total)}*
--------------------------------------------------
Mohon konfirmasi ketersediaan slot tanggal dan info pembayaran DP. Terima kasih!`;

    const encoded = encodeURIComponent(waText);
    const targetPhone = targetWa === "utama" ? "6281291068287" : "62895808755565";
    onClose();
    window.open(`https://wa.me/${targetPhone}?text=${encoded}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-xl border border-slate-200/80 my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-3.5 border-b border-slate-100 mb-4">
          <h3 className="font-heading font-bold text-lg text-slate-900">
            Reservasi Paket Rafting
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">

          {/* Selected Package Badge */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-slate-900 text-xs sm:text-sm flex justify-between items-center">
            <span className="font-medium text-slate-700">{packageName}</span>
            <span className="text-[#0052cc] font-bold">{formatRupiah(pricePerPax)} /pax</span>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
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
            <label className="block text-xs font-medium text-slate-600 mb-1.5 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              Nomor WhatsApp / HP
            </label>
            <input
              type="tel"
              required
              placeholder="Contoh: 08123456789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-10 border border-slate-200 rounded-lg px-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] focus:outline-none bg-white transition hover:border-slate-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                Peserta (Min. 20)
              </label>
              <input
                type="number"
                min="20"
                required
                value={pax}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 20;
                  setPax(val < 20 ? 20 : val);
                }}
                className="w-full h-10 border border-slate-200 rounded-lg px-3 text-sm text-slate-800 focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] focus:outline-none bg-white transition hover:border-slate-300"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Tanggal Acara
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-10 border border-slate-200 rounded-lg px-3 text-sm text-slate-800 focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] focus:outline-none bg-white transition hover:border-slate-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1.5 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              Catatan Khusus (Opsional)
            </label>
            <textarea
              rows={2}
              placeholder="Tambahan paintball, flying fox, request menu, dll."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#0052cc] focus:ring-1 focus:ring-[#0052cc] focus:outline-none bg-white transition hover:border-slate-300"
            ></textarea>
          </div>

          {/* Total Box */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 flex justify-between items-center">
            <span className="text-xs font-medium text-slate-600">Estimasi Total Biaya:</span>
            <strong className="font-heading font-extrabold text-lg text-slate-900">
              {formatRupiah(total)}
            </strong>
          </div>

          {/* Pilihan Tujuan Kontak WhatsApp */}
          <div className="pt-1">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Tujuan Kontak WhatsApp:
              </label>
              <span className="text-[11px] text-slate-500">
                {targetWa === "utama" ? "Prioritas Utama" : "Opsi Cadangan"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setTargetWa("utama")}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  targetWa === "utama"
                    ? "border-emerald-500 bg-emerald-50/80 text-emerald-950 ring-1 ring-emerald-500 shadow-sm"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold">Admin 1 (Utama)</span>
                  <span className="text-[10px] font-bold bg-emerald-600 text-white px-1.5 py-0.5 rounded">Prioritas</span>
                </div>
                <div className="text-xs text-slate-700 mt-1 font-semibold tracking-wide">
                  0812-9106-8287
                </div>
              </button>

              <button
                type="button"
                onClick={() => setTargetWa("cadangan")}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  targetWa === "cadangan"
                    ? "border-emerald-500 bg-emerald-50/80 text-emerald-950 ring-1 ring-emerald-500 shadow-sm"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold">Admin 2 (Cadangan)</span>
                  <span className="text-[10px] font-semibold bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">Cadangan</span>
                </div>
                <div className="text-xs text-slate-700 mt-1 font-semibold tracking-wide">
                  0895-8087-55565
                </div>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#10b981] hover:bg-[#059669] active:scale-[0.99] text-white font-semibold text-sm py-3.5 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current text-white" />
            <span>
              Kirim ke {targetWa === "utama" ? "WhatsApp Utama (0812-9106-8287)" : "WhatsApp Cadangan (0895-8087-55565)"}
            </span>
          </button>

          <p className="text-[11px] text-slate-500 text-center leading-relaxed">
            {targetWa === "utama" ? (
              <>
                Admin Utama sibuk / slow respon?{" "}
                <button
                  type="button"
                  onClick={() => setTargetWa("cadangan")}
                  className="text-emerald-700 font-semibold underline hover:text-emerald-800 cursor-pointer"
                >
                  Gunakan Admin Cadangan (0895-8087-55565)
                </button>
              </>
            ) : (
              <>
                Kembali ke{" "}
                <button
                  type="button"
                  onClick={() => setTargetWa("utama")}
                  className="text-emerald-700 font-semibold underline hover:text-emerald-800 cursor-pointer"
                >
                  Admin Utama (0812-9106-8287)
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
