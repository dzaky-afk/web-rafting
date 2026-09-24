/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optimalkan gambar untuk hosting
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },

  // Kompres output
  compress: true,

  // Matikan powered-by header
  poweredByHeader: false,

  // Security & performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Cache gambar selama 1 tahun
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
