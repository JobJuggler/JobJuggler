/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        dominantDark: '#050c1e',
        dominant: '#0f172a',
        dominantLight: '#1a2337', 

        secondaryDark: '#3a475b',
        secondary: '#475569',
        secondaryLight: '#556377',
        
        accentDark: '#d2d8e0',
        accent: '#e2e8f0',
        accentLight: '#f4f8ff',

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
