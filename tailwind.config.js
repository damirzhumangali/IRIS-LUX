/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',
        accent: '#8B7FD4',
        accentSoft: '#E8E5F8',
        bg: '#F5F5F3',
        card: '#FFFFFF',
        text: '#0A0A0A',
        muted: '#888888',
      },
      fontFamily: {
        cormorant: ['Cormorant', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
