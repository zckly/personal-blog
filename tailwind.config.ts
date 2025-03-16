import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "retro-dark": "#1a1a2e",
        "retro-highlight": "#8d5cf4",
      },
    },
  },
  plugins: [],
} satisfies Config;
