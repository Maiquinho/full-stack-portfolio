import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite',
      },
      fontFamily: {
        mono: 'var(--font-jet-brains-mono)',
        sans: 'var(--font-inter)',
      },
      fontSize: {
        sm: ['14px', '1.6'],
        md: ['16px', '1.6'],
        lg: ['18px', '1.6'],
        '2lg': ['20px', '1.6'],
        xl: ['24px', '1.6'],
        '2xl': ['32px', '1.6'],
        '3xl': ['44px', '1.6'],
        cta: ['48px', '1.6'],
      },
      colors: {
        alert: '#e3b341',
        brand: '#66FF66',
        whatsapp: '#25d366',
        gray: {
          100: '#E1E1E6',
          300: '#C3C4C5',
          600: '#0F1417',
          900: '#010409',
        },
      },
      dropShadow: {
        md: '0 4px 100px rgba(102, 255, 102, .60)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
