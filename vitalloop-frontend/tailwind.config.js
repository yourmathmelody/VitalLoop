/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vital-bg': '#F8F4EA',
        'vital-main': '#4F6F52',
        'vital-accent': '#D2E9E9',
        'vital-text': '#2D3142',
      },
    },
  },
  plugins: [],
}