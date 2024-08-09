/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "inner1-shadow": "inset 0px 20px 20px rgba(0,0,0, 1)", // lightgrey in rgba
      },
    },
  },
  plugins: [],
};
