import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#07182c",
          dark: "#040e1b",
          deep: "#0c243f",
          card: "#0f2c4c",
        },
        rapids: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
        },
        energy: {
          yellow: "#ffbe0b",
          amber: "#fb8500",
          orange: "#ff5400",
          gold: "#f59e0b",
          light: "#fffbeb",
        },
        jungle: {
          green: "#10b981",
          emerald: "#059669",
          lime: "#84cc16",
        },
        wa: {
          green: "#25d366",
          dark: "#128c7e",
          light: "#dcf8c6",
        }
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(14, 165, 233, 0.25), transparent 70%)",
        "gold-shine": "linear-gradient(135deg, #ffe066 0%, #f59e0b 50%, #ea580c 100%)",
        "cyan-shine": "linear-gradient(135deg, #38bdf8 0%, #0284c7 50%, #0369a1 100%)",
      },
      boxShadow: {
        "glow-gold": "0 0 25px rgba(245, 158, 11, 0.45)",
        "glow-cyan": "0 0 25px rgba(14, 165, 233, 0.45)",
        "glow-green": "0 0 25px rgba(37, 211, 102, 0.45)",
        "card-hover": "0 20px 40px -15px rgba(2, 132, 199, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
