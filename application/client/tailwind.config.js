/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          100: '#FFD1DC',
          200: '#FF9AA2',
          300: '#FF6B6B',
          400: '#FF4D4D',
          500: '#800000',
          600: '#C71F37',
          700: '#A71E34',
          800: '#861B2D',
          900: '#661726',
        },
        gray:{
          100:'#f3f3f3',
        }
      },
    },
  },
  plugins: [],
};
