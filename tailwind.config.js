/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B1020',
        surface: '#111827',
        text: '#E5E7EB',
        muted: '#9CA3AF',
        accent: '#2563EB',
        accentAlt: '#06D6A0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'md': '0.375rem',
        'lg': '0.75rem', // 12px
        'xl': '1rem',    // 16px
      }
    },
  },
  plugins: [],
}
