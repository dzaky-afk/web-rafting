"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import PricingCards from "@/components/PricingCards";
import RapidsShowcase from "@/components/RapidsShowcase";
import BookingCalculator from "@/components/BookingCalculator";
import SafetyItinerary from "@/components/SafetyItinerary";
import Activities from "@/components/Activities";
import AccommodationCatering from "@/components/AccommodationCatering";
import WhyUs from "@/components/WhyUs";
import EventCategories from "@/components/EventCategories";
import Gallery from "@/components/Gallery";
import CtaBanner from "@/components/CtaBanner";
import FaqContact from "@/components/FaqContact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BookingModal from "@/components/BookingModal";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Home() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    packageName: string;
    pricePerPax: number;
  }>({
    isOpen: false,
    packageName: "Paket B (Rafting Complete 11 KM)",
    pricePerPax: 199000,
  });

  const [selectedAddon, setSelectedAddon] = useState<string | null>(null);

  const handleOpenModal = (
    packageName = "Paket B (Rafting Complete 11 KM)",
    pricePerPax = 199000
  ) => {
    setModalState({
      isOpen: true,
      packageName,
      pricePerPax,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleAddActivity = (addonId: string) => {
    setSelectedAddon(addonId);
    const calc = document.getElementById("kalkulator-booking");
    if (calc) {
      calc.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-mesh-river text-slate-900 pb-16 md:pb-0">
      <Header onOpenBooking={() => handleOpenModal()} />
      
      <main className="flex-grow">
        <Hero />
        <StatsBar />
        <PricingCards onSelectPackage={handleOpenModal} />
        <RapidsShowcase />
        <BookingCalculator selectedAddonFromCard={selectedAddon} />
        <SafetyItinerary />
        <Activities onAddActivity={handleAddActivity} />
        <AccommodationCatering />
        <WhyUs />
        <EventCategories />
        <Gallery />
        <CtaBanner />
        <FaqContact />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomNav onOpenBooking={() => handleOpenModal()} />

      <BookingModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        packageName={modalState.packageName}
        pricePerPax={modalState.pricePerPax}
      />
    </div>
  );
}
