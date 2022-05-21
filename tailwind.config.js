module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/content/svg/*.svg"
  ],
  theme: {
    extend: {
      keyframes: {
        animateStars: {
          '0%':   { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-2000px)' },
        }
      }
    },
  },
  plugins: [],
}
