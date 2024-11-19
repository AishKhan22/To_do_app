import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'], // Add custom font
        roboto: ['Roboto', 'sans-serif'],     // Example: Roboto from Google Fonts
      
      },
    },
  },
  plugins: [],
} satisfies Config;
