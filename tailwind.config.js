/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2F6D97',
        'primary-green': '#2E6848',
        'accent-lime': '#A2CB58',
        'cta-gold': '#F2B532',
        'bg-light': '#FDFDFD',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '3.5rem', fontWeight: '700' }],
        'h2': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '700' }],
        'h3': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        'body': ['1rem', { lineHeight: '1.625rem', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
