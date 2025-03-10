module.exports = {
 
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
  
  theme: {
    extend: {
      colors: {
        'green-600': '#359351',
        'green-900': '#003329',
        'aliceblue': '#f0f8ff',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
      textShadow: {
        default: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        lg: '4px 4px 8px rgba(0, 0, 0, 0.8)',
        xl: '6px 6px 12px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)',
        },
        '.text-shadow-xl': {
          textShadow: '6px 6px 12px rgba(0, 0, 0, 1)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};