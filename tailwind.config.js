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
      transparent: 'transparent',
      primary: '#27A3CB',
      secondary: '#303842',
      white: '#fff',
      black: '#000',
      neutral: {
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#A9A9A9',
      },
    },
    extend: {},
  },
  plugins: [],
}
