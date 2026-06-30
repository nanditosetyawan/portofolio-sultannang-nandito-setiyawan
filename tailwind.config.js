/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,ts}"],
  theme: {
    extend: {
      colors: {
        bg: '#FFFAF3',
        surface: '#FFFDF8',
        surface2: '#FCF8F1',
        border: '#E8E1D7',
        text: '#1A312C',
        text2: '#53645F',
        accent: '#428475',
        accent2: '#89D7B7',
      },
      boxShadow: {
        soft: '0 12px 36px rgba(26,49,44,0.08)',
        soft2: '0 18px 52px rgba(26,49,44,0.11)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')],
}