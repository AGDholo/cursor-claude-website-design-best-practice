/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'oklch(0.97 0.03 259.8)',
          100: 'oklch(0.93 0.06 259.8)',
          200: 'oklch(0.87 0.1 259.8)',
          300: 'oklch(0.8 0.15 259.8)',
          400: 'oklch(0.735 0.175 259.8)',
          500: 'oklch(0.62 0.214 259.8)',
          600: 'oklch(0.55 0.245 262.9)',
          700: 'oklch(0.45 0.22 265)',
          800: 'oklch(0.35 0.18 267)',
          900: 'oklch(0.25 0.12 270)',
          950: 'oklch(0.15 0.08 272)',
        },
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-strong': '0 8px 32px rgba(0, 0, 0, 0.15)',
        'brand': '0 8px 24px -6px rgb(var(--color-brand-500) / 0.3)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'lg': 'var(--radius-lg)',
        '2xl': 'var(--radius-2xl)',
      },
      transitionDuration: {
        'fast': 'var(--time-fast)',
        'std': 'var(--time-std)',
        'portal': 'var(--time-portal)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--easing-smooth)',
      },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [],
}; 