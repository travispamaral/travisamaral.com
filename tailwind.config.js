/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Arial", "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};
