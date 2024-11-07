import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        danfo: ["var(--font-danfo, sans)"],
        cambon: ["var(--font-cambon, sans)"],
        lobster: ["var(--font-lobster, sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
