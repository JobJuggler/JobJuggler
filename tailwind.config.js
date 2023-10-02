/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        dominant: '#0f172a', //Background type
        secondary: '#475569',//Button background, highlights
        accent: '#e2e8f0',   //Text button outlines
      },
    },
    },
   
  plugins: [],
};
