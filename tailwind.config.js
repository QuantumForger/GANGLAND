module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-space-blue': {
          DEFAULT: '#0B2447',
          light: '#233A60',
          dark: '#08192C',
        },
        'elite-navy': {
          DEFAULT: '#19376D',
          light: '#294B8B',
          dark: '#0F204A',
        },
        'quantum-purple': {
          DEFAULT: '#7C3AED',
          light: '#9F61F5',
          dark: '#5D2DB0',
        },
        'success-green': {
          DEFAULT: '#059669',
          light: '#34D399',
          dark: '#047857',
        },
      },
    },
  },
  darkMode: 'class', // Enables dark mode support
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

