/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { sm: "480px", md: "768px", lg: "976px", xl: "1440pd" },
      colors: {
        header: "#24292f",

        bgPrimary: "#0d1117",
        bgSecondary: "#161b22",

        gray: "#d0d7de",
        lightGray: "#f6f8fa",
        darkGray: "#8e95a4",

        primary: "#e6edf3",

        purple: "#585FDE",
        purpleDark: "#30368B",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
