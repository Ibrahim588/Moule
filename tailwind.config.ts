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
        moule: {
          ivory: "#FAF7F2",       // عاجي دافئ فاخر (Warm Ivory)
          espresso: "#30231F",    // بني إسبريسو داكن (Deep Espresso)
          champagne: "#D7BD91",   // شامبانيا ذهبية ناعمة (Soft Champagne)
          beige: "#E9DFD2",       // بيج دافئ متناسق (Warm Beige)
          olive: "#777B60",       // زيتوني معتق هادئ (Muted Olive)
          sand: "#F5EFE6",        // خلفيات خفيفة
          surface: "#FFFFFF",     // أسطح البطاقات
          accent: "#C4A470",      // لون التركيز الذهبي
        },
      },
      fontFamily: {
        arabic: ["var(--font-ibm-arabic)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        luxury: "0 10px 30px -5px rgba(48, 35, 31, 0.08), 0 4px 6px -2px rgba(48, 35, 31, 0.03)",
        card: "0 4px 20px -2px rgba(48, 35, 31, 0.06)",
        hover: "0 20px 40px -10px rgba(48, 35, 31, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

