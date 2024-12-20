module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'eslint:recommended'
  ],
  plugins: ['tailwindcss'],
  rules: {
    'no-unused-vars': 'error',
    'prefer-const': 'error',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/classnames-order': 'warn'
  },
  settings: {
    tailwindcss: {
      config: 'tailwind.config.js',
    },
  },
}

