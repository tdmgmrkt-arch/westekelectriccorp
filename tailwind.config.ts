import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Deep Navy Blue - Trust, professionalism
        navy: {
          50: '#E8EEF3',
          100: '#C5D4E1',
          200: '#9FB7CC',
          300: '#7999B7',
          400: '#5C82A7',
          500: '#3F6B97',
          600: '#37638F',
          700: '#2D5884',
          800: '#244E7A',
          900: '#0B3C5D', // Primary
          950: '#062A42',
        },
        // Secondary: Bright Electrical Red - Energy, urgency, CTAs
        electric: {
          50: '#FFEBEE',
          100: '#FFCDD2',
          200: '#EF9A9A',
          300: '#E57373',
          400: '#EF5350',
          500: '#E53935', // Primary red
          600: '#E53935',
          700: '#D32F2F',
          800: '#C62828',
          900: '#B71C1C',
        },
        // Accent: Soft Neutral Blue / Gray - Backgrounds, sections
        accent: {
          50: '#FAFBFC',
          100: '#F5F7FA',
          200: '#EAF1F7', // Primary accent
          300: '#D8E4EE',
          400: '#C5D4E1',
          500: '#B0C4D4',
          600: '#8FA8BC',
          700: '#6E8CA3',
          800: '#4D708A',
          900: '#2C5471',
        },
        // Text colors
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4A4A4A',
          800: '#333333', // Primary text
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(11, 60, 93, 0.07), 0 10px 20px -2px rgba(11, 60, 93, 0.04)',
        'medium': '0 4px 25px -5px rgba(11, 60, 93, 0.1), 0 10px 30px -5px rgba(11, 60, 93, 0.08)',
        'strong': '0 10px 40px -10px rgba(11, 60, 93, 0.15), 0 20px 50px -10px rgba(11, 60, 93, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
