import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefdfb',
          100: '#fcfbf7',
        },
        lavender: {
          100: '#f3f0ff',
          200: '#e9e5ff',
        },
        sky: {
          100: '#e8f4fd',
          200: '#d0e8fa',
        },
        sage: {
          100: '#f0f5f1',
          200: '#e1ebe4',
        },
        peach: {
          100: '#fef3f0',
          200: '#fde8e2',
        },
        text: {
          primary: '#2c2a2b',
          secondary: '#6b6768',
        },
        accent: {
          blue: '#4a90e2',
          teal: '#2d9b9e',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      spacing: {
        gutter: '2rem',
        'gutter-lg': '3rem',
        'gutter-xl': '4rem',
      },
      borderRadius: {
        lg: '1.5rem',
        xl: '2rem',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(44, 42, 43, 0.06)',
        'soft-lg': '0 4px 16px rgba(44, 42, 43, 0.08)',
        'soft-xl': '0 8px 24px rgba(44, 42, 43, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
