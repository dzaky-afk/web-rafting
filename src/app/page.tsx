"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhyUs from "@/components/WhyUs";
import PricingCards from "@/components/PricingCards";
import RapidsShowcase from "@/components/RapidsShowcase";

// Code-split below-the-fold components to reduce initial JS execution and TBT
const Activities = dynamic(() => import("@/components/Activities"), { ssr: true });
const AccommodationCatering = dynamic(() => import("@/components/AccommodationCatering"), { ssr: true });
const SafetyItinerary = dynamic(() => import("@/components/SafetyItinerary"), { ssr: true });
const EventCategories = dynamic(() => import("@/components/EventCategories"), { ssr: true });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: true });
const CtaBanner = dynamic(() => import("@/components/CtaBanner"), { ssr: true });
const FaqContact = dynamic(() => import("@/components/FaqContact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

const BookingFlowModal = dynamic(() => import("@/components/BookingFlowModal"), {
  ssr: false,
});

export default function Home() {
  const [isBookingFlowOpen, setIsBookingFlowOpen] = useState(false);
  const [initialBookingPkg, setInitialBookingPkg] = useState("paket-b");

  const handleOpenBookingFlow = (pkgId = "paket-b") => {
    let pkgName = "Paket B (Rafting Complete 11 KM - Rp 199.000/pax)";
    if (pkgId.toLowerCase().includes("11") || pkgId.toLowerCase().includes("complete") || pkgId === "paket-b") {
      pkgName = "Paket B (Rafting Complete 11 KM - Rp 199.000/pax)";
    } else if (pkgId.toLowerCase().includes("7") || pkgId.toLowerCase().includes("explore") || pkgId === "paket-a") {
      pkgName = "Paket A (Rafting Explorer 7 KM - Rp 168.000/pax)";
    } else if (pkgId.toLowerCase().includes("combo") || pkgId.toLowerCase().includes("paintball")) {
      pkgName = "Paket Combo (Rafting 11 KM + Paintball)";
    } else if (pkgId.toLowerCase().includes("5") || pkgId.toLowerCase().includes("family") || pkgId === "paket-c") {
      pkgName = "Paket C (Family & Fun 5 KM - Rp 145.000/pax)";
    }

    const message = `Halo SA Adventure, saya ingin reservasi / booking tiket:\n• Pilihan: ${pkgName}\n\nMohon informasi jadwal yang tersedia dan panduan reservasi. Terima kasih!`;
    const waUrl = `https://wa.me/6281291068287?text=${encodeURIComponent(message)}`;
    const newWin = window.open(waUrl, "_blank", "noopener,noreferrer");
    if (!newWin || newWin.closed || typeof newWin.closed === "undefined") {
      window.location.href = waUrl;
    }
  };

  const handleCloseBookingFlow = () => {
    setIsBookingFlowOpen(false);
  };

  // Global event listener & link interceptor
  useEffect(() => {
    const handleCustomBookingOpen = (e: any) => {
      const pkg = e.detail?.packageId || "paket-b";
      handleOpenBookingFlow(pkg);
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        'a[href="#booking"], a[href="#reservasi"], a[href="/booking"], [data-open-booking]'
      );
      if (target) {
        e.preventDefault();
        handleOpenBookingFlow("paket-b");
      }
    };

    window.addEventListener("open-booking-modal", handleCustomBookingOpen);
    window.addEventListener("open-booking-flow", handleCustomBookingOpen);
    window.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("open-booking-modal", handleCustomBookingOpen);
      window.removeEventListener("open-booking-flow", handleCustomBookingOpen);
      window.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 ">
      <Header onOpenBooking={() => handleOpenBookingFlow("paket-b")} />
      
      <main className="flex-grow">
        <Hero onOpenBooking={() => handleOpenBookingFlow("paket-b")} />
        <StatsBar />
        <WhyUs onOpenBooking={() => handleOpenBookingFlow("paket-b")} />
        <PricingCards onSelectPackage={(pkgName) => handleOpenBookingFlow(pkgName)} />
        <RapidsShowcase />
        <Activities />
        <AccommodationCatering />
        <SafetyItinerary />
        <EventCategories />
        <Gallery />
        <CtaBanner onOpenBooking={() => handleOpenBookingFlow("paket-b")} />
        <FaqContact />
      </main>

      <Footer />
      <BookingFlowModal
        isOpen={isBookingFlowOpen}
        onClose={handleCloseBookingFlow}
        initialPackageId={initialBookingPkg}
      />
    </div>
  );
}
