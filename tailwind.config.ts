import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '1.6'],
        md: ['16px', '1.6'],
        lg: ['18px', '1.6'],
        xl: ['24px', '1.6'],
        '2xl': ['32px', '1.6'],
        '3xl': ['44px', '1.6'],
        'cta': ['48px', '1.6'],
      },
      colors: {
        brand: '#66FF66',
        gray: {
          100: '#E1E1E6',
          300: '#C3C4C5',
          600: '#0F1417',
          900: '#010409',
        }
      },
    },
  },
  plugins: [],
}
export default config
