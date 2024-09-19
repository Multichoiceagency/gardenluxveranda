import type { Config } from "tailwindcss";

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '3.75rem' }], // 60px
        'h2': ['2rem', { lineHeight: '3.125rem' }], // 32px
        'h3': ['1.75rem', { lineHeight: '2.25rem' }], // 28px
        'h4': ['1.5rem', { lineHeight: '2rem' }], // 24px
        'h5': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        'h6': ['1rem', { lineHeight: '1.5rem' }], // 16px
        'body': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
      },
      fontWeight: {
        'h1': '700', // bold
        'h2': '600',
        'h3': '500',
        'h4': '500',
        'h5': '500',
        'h6': '400', // regular
        'body': '400', // regular for body text
      },
    },
  },
  plugins: [],
}
