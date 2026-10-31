import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.json",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#080c16",   // Deep midnight slate (Linear style)
          surface: "#0d1322",   // Elevated surface
          card: "#121b2f",      // Frosted card base
          "card-hover": "#16233d",
          border: "#1e293b",    // Slate border
          "border-light": "#334155",
        },
        accent: {
          DEFAULT: "#6366f1",   // Electric indigo-500
          light: "#818cf8",     // Indigo-400
          bright: "#a5b4fc",    // Indigo-300
          dim: "#4f46e5",       // Indigo-600
        },
        violet: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          bright: "#c4b5fd",
        },
        cyan: {
          DEFAULT: "#0ea5e9",
          light: "#38bdf8",
        },
        ink: {
          DEFAULT: "#f8fafc",   // Crisp slate-50
          muted: "#94a3b8",     // Slate-400
          dim: "#64748b",       // Slate-500
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "blink": "blink 1.2s step-end infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ping-slow": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
