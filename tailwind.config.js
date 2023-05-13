/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      peyda: ['var(--font-peyda)'],
    },
    colors: {
      primary: '#27A3CB',
      secondary: '#303842',
      white: '#fff',
      black: '#000',
    },
    extend: {},
  },
  plugins: [],
}
