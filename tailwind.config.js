/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        dominant: '#0f172a', //Background type
        secondary: '#475569',//Button background, highlights
        accent: '#e2e8f0',   //Text button outlines
        primaryText: '#3d3d3d', // dark slate
        secondaryText: '#6d6d6d', // slate
        tertiaryText: '#ffffff', // white
      },
    },
    fontFamily: {
      Exo: ["Exo", "cursive"]
    }
    },
   
  plugins: [],
};
