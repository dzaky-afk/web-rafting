"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface HeaderProps {
  onOpenBooking?: () => void;
}

// 5 Core Essential Links for Desktop Navbar (Title Case)
const DESKTOP_NAV_ITEMS = [
  { id: "home", label: "Beranda" },
  { id: "paket-rafting", label: "Paket Rafting" },
  { id: "aktivitas", label: "Aktivitas" },
  { id: "akomodasi-katering", label: "Akomodasi & Katering" },
  { id: "tentang-kami", label: "Tentang Kami" },
  { id: "kontak", label: "Kontak" },
];

// Complete Section List for Mobile Drawer & Section Indicator
const ALL_NAV_ITEMS = [
  { id: "home", label: "Beranda" },
  { id: "paket-rafting", label: "Paket Rafting" },
  { id: "jeram-cisadane", label: "Jeram Ikonik" },
  { id: "kalkulator-booking", label: "Kalkulator Booking" },
  { id: "keamanan", label: "Standar Keamanan" },
  { id: "aktivitas", label: "Aktivitas Outdoor" },
  { id: "akomodasi-katering", label: "Akomodasi & Katering" },
  { id: "tentang-kami", label: "Tentang Kami" },
  { id: "galeri", label: "Galeri Dokumentasi" },
  { id: "kontak", label: "Lokasi & Kontak" },
];

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Lock flag so intermediate sections don't cause flicker while smooth-scrolling from click
  const isClickScrollingRef = useRef(false);
  const clickScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = useRef(0);

  // 1. High-Performance IntersectionObserver for Scrollspy
  useEffect(() => {
    const sectionIds = [
      "home",
      "paket-rafting",
      "jeram-cisadane",
      "kalkulator-booking",
      "keamanan",
      "aktivitas",
      "tentang-kami",
      "galeri",
      "kontak",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        // Skip updating active section during programmatic click scrolling
        if (isClickScrollingRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px", // Accurate detection zone in reading area
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 2. Throttled RAF Scroll Handler for Smart Hide on Scroll Down, Reveal on Scroll Up
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Scrolled glass effect
          const scrolled = scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

          // Smart Auto-Hide Logic
          if (!isClickScrollingRef.current) {
            const delta = scrollY - lastScrollYRef.current;

            if (scrollY <= 60) {
              // Always show near top
              setIsVisible(true);
            } else if (delta > 12 && scrollY > 100) {
              // Scrolling down: hide smoothly
              setIsVisible(false);
            } else if (delta < -10) {
              // Scrolling up: reveal smoothly
              setIsVisible(true);
            }
          } else {
            setIsVisible(true);
          }

          lastScrollYRef.current = scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Ultra-Silky Smooth Scroll on Click
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    setActiveSection(id);
    setIsVisible(true);

    isClickScrollingRef.current = true;
    if (clickScrollTimerRef.current) clearTimeout(clickScrollTimerRef.current);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 76;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    // Release lock when smooth scrolling settles
    clickScrollTimerRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 1200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out will-change-transform before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-sky-400/40 before:to-transparent ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-slate-950/92 backdrop-blur-2xl border-b border-sky-500/20 shadow-xl shadow-black/50 py-2.5"
          : "bg-slate-950/75 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "home")}
          className="flex items-center group shrink-0"
          aria-label="SA Adventure Beranda"
        >
          <img
            src="/images/sa-adventure-logo.png"
            alt="SA Adventure Logo"
            className="h-10 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop Navigation Links - Dark Glassy Capsule */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-medium bg-slate-900/85 p-1 rounded-full border border-slate-700/60 backdrop-blur-md">
          {DESKTOP_NAV_ITEMS.map((item) => {
            const isActive =
              activeSection === item.id ||
              (item.id === "paket-rafting" && activeSection === "jeram-cisadane") ||
              (item.id === "paket-rafting" && activeSection === "kalkulator-booking") ||
              (item.id === "aktivitas" && activeSection === "keamanan") ||
              (item.id === "tentang-kami" && activeSection === "galeri");

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-300 ease-out whitespace-nowrap text-center ${
                  isActive
                    ? "bg-[#0052cc] text-white font-bold shadow-md shadow-blue-500/30 scale-[1.02]"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/70"
                }`}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Header Action Button: Rapi dan proporsional di HP & Desktop */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/6281291068287?text=Halo%20SA%20Adventure,%20saya%20ingin%20reservasi%20paket%20rafting"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#0284c7] to-[#0052cc] hover:from-[#0369a1] hover:to-[#0041a8] text-white font-heading font-black text-xs sm:text-sm px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full shadow-md shadow-blue-500/25 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-white" />
            <span>Reservasi</span>
          </a>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-200"
            onClick={() => setIsMobileOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 w-72 max-w-[85vw] h-full bg-slate-950 text-white p-6 shadow-2xl flex flex-col justify-between border-l border-slate-800 animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex justify-between items-center border-b border-slate-800/80 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/images/sa-adventure-logo.png"
                    alt="SA Adventure Logo"
                    className="h-9 w-auto object-contain"
                  />
                  <div>
                    <span className="font-heading font-bold text-sm text-white block leading-tight">SA ADVENTURE</span>
                    <span className="text-[10px] text-slate-400 font-medium">Rafting Cisadane</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-900 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">
                Navigasi Halaman
              </div>

              <ul className="flex flex-col gap-1 text-sm text-slate-300">
                {ALL_NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleSmoothScroll(e, item.id)}
                        className={`block px-3 py-2 rounded-xl transition-all duration-200 flex items-center justify-between ${
                          isActive
                            ? "bg-sky-500/15 text-sky-400 font-bold border border-sky-500/30"
                            : "hover:bg-slate-900 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <a
                href="https://wa.me/6281291068287?text=Halo%20SA%20Adventure,%20saya%20ingin%20tanya%20informasi%20paket%20rafting"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition active:scale-95"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Reservasi WhatsApp (Utama)</span>
              </a>

              <a
                href="https://wa.me/62895808755565?text=Halo%20SA%20Adventure,%20saya%20ingin%20tanya%20informasi%20paket%20rafting"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current text-emerald-400" />
                <span>WA Cadangan: 0895-8087-55565</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
