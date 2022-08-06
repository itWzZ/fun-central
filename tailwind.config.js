/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      '2xl':'1.5rem',
      xs: ['0.75rem', 'normal'],
    },
  },
  plugins: [],
  corePlugins: {
    lineHeight: false,
  }
}
