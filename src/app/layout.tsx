import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://web-rafting.vercel.app"),
  title: "Rafting Cisadane Bogor - Paket Arung Jeram & Outbound Terbaik | SA Adventure",
  description:
    "Paket Rafting Cisadane Bogor & Arung Jeram Caringin terlengkap mulai Rp 168rb/pax. Standar safety internasional, guide lisensi BNSP, makan prasmanan Sunda, outbound gathering & paintball.",
  keywords: [
    // === Kata Kunci Utama (Volume Tertinggi) ===
    "rafting cisadane",
    "rafting bogor",
    "arung jeram bogor",
    "arung jeram cisadane",
    "wisata rafting bogor",
    "rafting cisadane caringin",

    // === Kata Kunci Transaksional / Pencari Harga ===
    "paket rafting cisadane",
    "harga rafting cisadane",
    "harga rafting bogor",
    "biaya arung jeram bogor",
    "paket rafting cisadane murah",
    "promo rafting cisadane bogor",
    "booking rafting cisadane",
    "rafting cisadane 168000",
    "rafting bogor murah 2024",
    "rafting bogor murah 2025",
    "harga tiket rafting cisadane bogor",
    "paket rafting bogor weekend",

    // === Kata Kunci Lokasi Spesifik ===
    "rafting caringin bogor",
    "arung jeram cisadane caringin",
    "tempat rafting di bogor",
    "rafting cisadane terbaik",
    "basecamp rafting cisadane bogor",
    "rafting sungai cisadane bogor selatan",
    "rafting dekat jakarta",
    "rafting 1 jam dari jakarta",
    "rafting bogor depok tangerang bekasi",
    "wisata alam bogor rafting",
    "rafting cisadane exit tol caringin",

    // === Kata Kunci Rombongan, Outbound & Gathering ===
    "paket family gathering bogor",
    "outbound bogor",
    "company outing bogor",
    "rafting dan paintball bogor",
    "event organizer bogor",
    "team building bogor",
    "paket gathering perusahaan bogor",
    "outbound rafting bogor 2024",
    "paket outbound bogor murah",
    "rafting untuk rombongan sekolah bogor",
    "gathering kantor rafting bogor",
    "paket outing kantor bogor",
    "wisata edukasi arung jeram bogor",

    // === Kata Kunci Aktivitas Tambahan ===
    "flying fox bogor",
    "paintball bogor",
    "offroad bogor",
    "paket rafting paintball bogor",
    "paket rafting flying fox bogor",

    // === Kata Kunci Brand ===
    "sa adventure",
    "sa adventure rafting",
    "sa adventure bogor",
    "sa adventure cisadane",
  ],
  authors: [{ name: "SA Adventure", url: "https://saadventure.com" }],
  creator: "SA Adventure",
  publisher: "SA Adventure",
  alternates: {
    canonical: "https://saadventure.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rafting Cisadane Bogor - Paket Arung Jeram & Outbound Seru | SA Adventure",
    description:
      "Taklukkan jeram alami Cisadane Caringin Bogor! Paket Rafting mulai Rp 168.000/Pax lengkap saung, makan siang prasmanan Sunda, guide BNSP & asuransi resmi.",
    url: "https://saadventure.com",
    siteName: "SA Adventure Rafting Cisadane",
    images: [
      {
        url: "/images/drive_uploads/DSCN9999.JPG",
        width: 1200,
        height: 630,
        alt: "Petualangan Rafting Cisadane Bogor bersama SA Adventure",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafting Cisadane Bogor - SA Adventure",
    description:
      "Paket Rafting Cisadane Bogor & Arung Jeram Caringin terlengkap mulai Rp 168rb/pax.",
    images: ["/images/drive_uploads/DSCN9999.JPG"],
  },
  icons: {
    icon: "/images/sa-adventure-logo.png",
    shortcut: "/images/sa-adventure-logo.png",
    apple: "/images/sa-adventure-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        {/* Structured Data / Schema.org JSON-LD for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["SportsActivityLocation", "TouristAttraction", "LocalBusiness"],
              name: "SA Adventure - Rafting Cisadane Bogor",
              description:
                "Wisata arung jeram dan event organizer profesional untuk paket rafting Cisadane Bogor, outbound, paintball, offroad, dan family gathering di Caringin Bogor.",
              url: "https://saadventure.com",
              telephone: "+6281291068287",
              priceRange: "Rp 168.000 - Rp 345.000",
              image: "https://saadventure.com/images/drive_uploads/DSCN9999.JPG",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Papalidan Outdoor Resto, Jl. Raya Bogor - Sukabumi Desa No.1, RT.02/RW.03",
                addressLocality: "Caringin, Bogor Kabupaten",
                addressRegion: "Jawa Barat",
                postalCode: "16730",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.7030124,
                longitude: 106.8263064,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "528",
                bestRating: "5",
                worstRating: "1",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "07:00",
                  closes: "18:00",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Paket Rafting Cisadane",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Paket A - Rafting Short 7 KM" },
                    price: "168000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Paket B - Rafting Complete 11 KM" },
                    price: "199000",
                    priceCurrency: "IDR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Paket C - Rafting + Outbound Lengkap" },
                    price: "345000",
                    priceCurrency: "IDR",
                  },
                ],
              },
            }),
          }}
        />
        {/* FAQ Schema for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Berapa harga paket rafting Cisadane Bogor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Harga paket rafting Cisadane Bogor di SA Adventure mulai dari Rp 168.000 per pax untuk Paket A (7 KM), Rp 199.000 per pax untuk Paket B (11 KM Complete), dan Rp 345.000 per pax untuk Paket C (Rafting + Outbound Lengkap). Sudah termasuk makan siang prasmanan Sunda, pemandu berlisensi BNSP, dan asuransi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah rafting Cisadane aman untuk pemula dan anak-anak?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, sangat aman. Setiap peserta wajib menggunakan pelampung (life jacket) bersertifikasi internasional dan helm pelindung. Setiap perahu didampingi pemandu (skipper) berpengalaman berlisensi BNSP dan tim rescue di sungai. Cocok untuk pemula, anak-anak (min. 7 tahun), dan yang tidak bisa berenang sekalipun.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Di mana lokasi basecamp rafting Cisadane SA Adventure?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Basecamp SA Adventure berlokasi di Papalidan Outdoor Resto, Jl. Raya Bogor - Sukabumi Desa No.1, RT.02/RW.03, Caringin, Bogor Kabupaten, Jawa Barat 16730. Mudah dijangkau, dekat exit Tol Caringin (bebas ganjil-genap), dan hanya sekitar 1-1.5 jam dari Jakarta.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apa saja yang termasuk dalam paket rafting Cisadane?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Paket rafting Cisadane di SA Adventure sudah termasuk: perlengkapan rafting lengkap (pelampung, helm, dayung), pemandu BNSP berpengalaman, makan siang prasmanan Sunda, saung istirahat, kamar bilas/MCK, asuransi kecelakaan, dan dokumentasi foto/video.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Berapa minimal peserta untuk paket rafting?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Minimal peserta adalah 20 pax untuk paket reguler. Untuk jumlah kurang dari 20 pax, silakan hubungi admin kami melalui WhatsApp di 0812-9106-8287 untuk mendapatkan penawaran khusus.",
                  },
                },
              ],
            }),
          }}
        />
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Beranda", item: "https://saadventure.com" },
                { "@type": "ListItem", position: 2, name: "Paket Rafting", item: "https://saadventure.com/#paket-rafting" },
                { "@type": "ListItem", position: 3, name: "Kontak", item: "https://saadventure.com/#kontak" },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans bg-white text-slate-900 antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
