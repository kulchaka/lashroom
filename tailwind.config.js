// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx}', // Adjust if your files are elsewhere
  ],
  theme: {
    extend: {
      height: {
        '90vh': '90vh', // custom utility for 90vh
      },
    },
  },
  variants: {
    extend: {
      height: ['responsive'], // make height responsive
    },
  },
  plugins: [],
};