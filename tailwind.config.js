/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#41635c",
          DEFAULT: " #20332F;",
          dark: "#1d2e2a",
        },
        "white":  "#FCFDFD"
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
        poppins: ["Poppings", "sans-serif"],
      },
    },
  },
  plugins: [],
};
