/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // ✅ IMPORTANT
    "./pages/**/*.{js,jsx}",        // safety
    "./components/**/*.{js,jsx}",   // safety
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};