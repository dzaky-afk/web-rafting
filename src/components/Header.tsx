"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Menu, X, Calendar } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface HeaderProps {
  onOpenBooking?: () => void;
}

// Editorial Nav Items matching reference prototype
const DESKTOP_NAV_ITEMS = [
  { id: "home", label: "Home", shortLabel: "Home" },
  { id: "about", label: "About Us", shortLabel: "About" },
  { id: "paket-rafting", label: "Pilihan Paket", shortLabel: "Paket" },
  { id: "accommodation", label: "Pemilihan Villa & Akomodasi", shortLabel: "Villa" },
  { id: "galeri", label: "Gallery", shortLabel: "Galeri" },
  { id: "kontak", label: "Contact", shortLabel: "Kontak" },
];

// Complete Section List for Mobile Drawer & Section Indicator
const ALL_NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "paket-rafting", label: "Pilihan Paket Rafting" },
  { id: "jeram-cisadane", label: "Jeram Ikonik" },
  { id: "keamanan", label: "Standar Keamanan" },
  { id: "aktivitas", label: "Aktivitas Outdoor" },
  { id: "accommodation", label: "Pemilihan Villa & Akomodasi" },
  { id: "galeri", label: "Gallery" },
  { id: "kontak", label: "Contact & Location" },
];

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
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
      "keamanan",
      "aktivitas",
      "accommodation",
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
      const el = document.getElementById(id)
        || (id === "paket-rafting" ? (document.getElementById("services") || document.getElementById("paket") || document.getElementById("paket-rafting")) : null)
        || (id === "about" ? (document.getElementById("about") || document.getElementById("filosofi") || document.getElementById("tentang-kami")) : null)
        || (id === "accommodation" ? (document.getElementById("accommodation") || document.getElementById("akomodasi")) : null)
        || (id === "galeri" ? (document.getElementById("galeri") || document.getElementById("gallery")) : null)
        || (id === "kontak" ? (document.getElementById("kontak") || document.getElementById("contact") || document.getElementById("about")) : null);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent background scroll and keep header visible when drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // 2. Throttled RAF Scroll Handler for Smart Hide on Scroll Down, Reveal on Scroll Up
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isMobileOpen) return;

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
  }, [isMobileOpen]);

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
      let el = document.getElementById(id);
      if (!el) {
        if (id === "paket-rafting" || id === "services" || id === "paket" || id === "packages" || id === "pilihan-paket") {
          el = document.getElementById("paket-rafting") || document.getElementById("paket") || document.getElementById("services") || document.getElementById("pilihan-paket") || document.getElementById("packages");
        } else if (id === "about" || id === "tentang-kami") {
          el = document.getElementById("about") || document.getElementById("tentang-kami") || document.getElementById("filosofi");
        } else if (id === "accommodation" || id === "akomodasi" || id === "villa" || id === "pemilihan-villa") {
          el = document.getElementById("villa") || document.getElementById("pemilihan-villa") || document.getElementById("accommodation") || document.getElementById("akomodasi") || document.getElementById("akomodasi-katering");
        } else if (id === "galeri" || id === "gallery") {
          el = document.getElementById("galeri") || document.getElementById("gallery");
        } else if (id === "kontak" || id === "contact") {
          el = document.getElementById("kontak") || document.getElementById("contact") || document.getElementById("faq");
        }
      }

      if (el) {
        const headerOffset = 70;
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out will-change-transform ${
        isVisible || isMobileOpen ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/95 md:backdrop-blur-xl border-b border-slate-200/80 shadow-md shadow-slate-900/5 py-2.5"
          : "bg-white/95 md:backdrop-blur-md border-b border-slate-100 py-3.5"
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
          <Image
            src="/images/sa-adventure-logo.webp"
            alt="SA Adventure Logo"
            width={160}
            height={44}
            priority
            className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop Navigation Links (Hanya di layar besar) */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 font-sans">
          {DESKTOP_NAV_ITEMS.map((item) => {
            const isActive =
              activeSection === item.id ||
              (item.id === "home" && (activeSection === "" || activeSection === "home")) ||
              (item.id === "about" && (activeSection === "about" || activeSection === "tentang-kami")) ||
              (item.id === "paket-rafting" && (activeSection === "paket-rafting" || activeSection === "jeram-cisadane" || activeSection === "aktivitas"));

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className={`nav-link text-xs uppercase tracking-wider font-semibold transition-colors duration-200 no-underline ${
                  isActive ? "text-brand-dark font-bold active" : "text-gray-600 hover:text-black"
                }`}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Corner: Desktop Booking & Garis Tiga (Hamburger) di Pojok Kanan Atas */}
        <div className="flex items-center gap-2 sm:gap-4 font-sans">
          <a
            href="https://wa.me/6281291068287?text=Halo%20SA%20Adventure,%20saya%20ingin%20booking%20tiket%20rafting%20Cisadane.%20Mohon%20informasi%20jadwal%20dan%20ketersediaan%20slot."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-slate-800 hover:text-black py-1 border-b border-transparent hover:border-black transition-all cursor-pointer no-underline"
            title="Booking Online via WhatsApp"
          >
            <Calendar className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>Booking Online</span>
          </a>

          <a
            href="https://wa.me/6281291068287?text=Halo%20SA%20Adventure,%20saya%20ingin%20reservasi%20paket%20rafting"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase bg-[#10b981] hover:bg-[#059669] text-white px-3.5 py-1.5 rounded-full shadow-xs transition active:scale-95 no-underline"
            title="Hubungi Kami"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-white shrink-0" />
            <span>WA Admin</span>
          </a>

          {/* Garis Tiga (Hamburger Menu) di Pojok Kanan Atas pada Tampilan HP */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden w-11 h-11 text-slate-900 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 rounded-xl transition-all active:scale-95 cursor-pointer flex items-center justify-center border border-gray-300 shadow-2xs touch-manipulation"
            aria-label="Buka Menu"
          >
            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
              <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
              <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
              <line x1="4" y1="18" x2="20" y2="18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer rendered via Portal to prevent any CSS transform trap */}
      {isMounted && isMobileOpen && createPortal(
        <div className="fixed inset-0 z-[99999] lg:hidden font-sans">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-200 cursor-pointer"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 w-80 max-w-[85vw] h-[100dvh] bg-white text-slate-900 shadow-2xl flex flex-col border-l border-gray-200 z-10 animate-in slide-in-from-right duration-200">
            {/* Header (Pinned Top) */}
            <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <Image
                  src="/images/sa-adventure-logo.webp"
                  alt="SA Adventure Logo"
                  width={40}
                  height={36}
                  className="h-9 w-auto max-h-[36px] max-w-[42px] object-contain shrink-0"
                  style={{ height: "36px", width: "auto" }}
                />
                <div className="min-w-0 truncate">
                  <span className="font-serif font-bold text-sm text-brand-dark block leading-tight truncate">
                    SA ADVENTURE
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium font-sans block truncate">
                    Event Organizer &amp; Adventure Bogor
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center shrink-0 cursor-pointer transition-colors"
                aria-label="Tutup Menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Nav Area */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5 space-y-3">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1 font-sans">
                Menu Navigasi
              </div>

              <ul className="flex flex-col space-y-1 list-none p-0 m-0 font-sans">
                {ALL_NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleSmoothScroll(e, item.id)}
                        className={`block px-3 py-2 rounded-xl text-xs uppercase tracking-wider transition-all duration-150 flex items-center justify-between no-underline ${
                          isActive
                            ? "bg-brand-dark text-white font-bold shadow-xs"
                            : "text-gray-700 hover:text-black hover:bg-gray-100 font-semibold"
                        }`}
                      >
                        <span className="truncate">{item.label}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 ml-2" />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Bottom Contact (Pinned Bottom) */}
            <div className="p-4 sm:p-5 border-t border-gray-100 space-y-2 font-sans bg-gray-50/70 shrink-0">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block px-1">
                Kontak Cepat WhatsApp
              </span>

              <a
                href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%201%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20rafting%20Cisadane"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold uppercase tracking-wider text-xs py-2.5 px-3.5 rounded-xl flex items-center justify-center gap-2 shadow-xs transition active:scale-95 cursor-pointer no-underline"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current text-white shrink-0" />
                <span>Admin 1: 0812-9106-8287</span>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=62895808755565&text=Halo%20Admin%202%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20rafting%20Cisadane"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="w-full bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 font-semibold uppercase tracking-wider text-xs py-2 px-3.5 rounded-xl flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer no-underline shadow-2xs"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current text-emerald-600 shrink-0" />
                <span>Admin 2: 0895-8087-55565</span>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
