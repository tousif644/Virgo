module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["dark"],
    base : false
  },
  plugins: [require('daisyui')],
}