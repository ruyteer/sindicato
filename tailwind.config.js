/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Peaky Blinders
        coal: {
          900: '#0a0908',
          800: '#111110',
          700: '#1a1817',
          600: '#23201e',
          500: '#2d2a27',
        },
        brass: {
          500: '#c9a961',
          400: '#d4b870',
          300: '#e0c988',
          200: '#ead9a8',
          100: '#f3e8c7',
        },
        blood: {
          700: '#5a0f0f',
          600: '#7a1515',
          500: '#8b1a1a',
          400: '#a82828',
        },
        parchment: {
          400: '#8a7f6c',
          300: '#a89d87',
          200: '#c4b89f',
          100: '#d9cdb4',
        },
      },
      fontFamily: {
        display: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0.4 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'vignette': 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
      },
      boxShadow: {
        'brass': '0 0 0 1px rgba(201, 169, 97, 0.3), 0 4px 20px rgba(0, 0, 0, 0.4)',
        'brass-lg': '0 0 0 1px rgba(201, 169, 97, 0.5), 0 10px 40px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
