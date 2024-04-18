/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8C6646",
        },
        secondary: {
          DEFAULT: "white",
        },
        ternary: {
          DEFAULT: "rgba(48, 45, 56, 0.4)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        link: ["Archivo", "sans-serif"],
        primary: ["ArcanNine", "sans-serif"],
      },
    },
  },
  plugins: [],
};
