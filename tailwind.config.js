/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'black' : '#000000',
      'myGreen': '#25a56a',
      'myBorder' : '#2a2a2a',
      'bgbg' : '#16151a',
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

