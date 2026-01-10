// tailwind.config.js
// Tailwind CSS v4 uses CSS-based configuration
// This file is kept for backwards compatibility but is not used in v4
// Configuration should be done in your CSS file using @theme directive

module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        '90vh': '90vh',
      },
    },
  },
  plugins: [],
};