import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        foregroundTwo: "var(--foregroundTwo)",
        textGold: "var(--textGold)",
        optionGray: "var(--optionGray)",
      },
    },
  },
  plugins: [],
} satisfies Config;
