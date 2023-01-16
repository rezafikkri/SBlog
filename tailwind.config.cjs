/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'overlay': 'rgba(255,255,255,.7)',
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
