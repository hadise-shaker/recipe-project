/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#E7FAFE',
        mainHover: '#c5f5ff',
      },
    },
  },
  plugins: [],
}
