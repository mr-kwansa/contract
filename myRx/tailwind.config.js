/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#6200E0',
        secondary: '#9747FF',
        inactive: '#E9D7FE',
      },
    },
  },
  plugins: [],
};
