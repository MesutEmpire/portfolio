/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#282C33",
        gray: "#ABB2BF",
        primary: "#C778DD",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
