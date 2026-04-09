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
        primary: {
          green: "#2D6A4F", // Agriculture & Natural Resources
          blue: "#1A3A6B",  // Lake Victoria & Water Resources
          white: "#FFFFFF", // Peace & Harmony
        },
        gov: {
          black: "#111827",
          white: "#FFFFFF",
          "grey-light": "#F9FAFB",
          "grey-mid": "#4B5563",
          "grey-border": "#E5E7EB",
          "green-light": "#F0FDF4",
          "blue-light": "#EFF6FF",
          danger: "#DC2626",
          success: "#16A34A",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      lineHeight: {
        body: "1.7",
        heading: "1.2",
      },
      borderRadius: {
        gov: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
