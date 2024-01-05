/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'vsk-1': '#F6BB31',
        'vsk-2': '#F46619',
      },
      fontFamily: {
        vsk: ['"VSKRegular"', 'sans-serif'],
      },
    },
  },
}
