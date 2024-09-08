/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'default-blue': {
          500: '#38B6FF',
          600: '#309DDB',
          700: '#277FB3',
          800: '#1E628A',
          900: '#154561',
        },
        'default-yellow' : '#ffdf2b',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
    
  },
  plugins: [
    addVariablesForColors,

  ],
}
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  // Assuming `flattenColorPalette` is a function you have that mimics Tailwind's internal functionality
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  
  addBase({
    ":root": newVars,
  });
}


