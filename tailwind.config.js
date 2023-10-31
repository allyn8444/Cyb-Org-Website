/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#41635c",
          DEFAULT: "#21332f",
          dark: "#1d2e2a",
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
      },
    },
  },
  plugins: [],
};
