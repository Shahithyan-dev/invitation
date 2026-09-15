/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wedding-maroon': '#800000',
        'wedding-burgundy': '#5B0F18',
        'wedding-gold': '#D4AF37',
        'wedding-gold-light': '#F3E5AB',
        'wedding-ivory': '#FFFFF0',
        'wedding-cream': '#FFFDD0',
        'wedding-dark': '#1A1A1A'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
        script: ['Great Vibes', 'cursive']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
