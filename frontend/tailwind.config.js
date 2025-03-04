/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66aaff',
          400: '#338eff',
          500: '#0072ff',
          600: '#005bcc',
          700: '#004499',
          800: '#002d66',
          900: '#001733',
        },
        dark: {
          950: '#0a0c14',
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
        }
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px 10px rgba(0, 114, 255, 0.1)' },
          '100%': { boxShadow: '0 0 40px 20px rgba(0, 114, 255, 0.2)' },
        },
      },
    },
  },
  plugins: [],
};