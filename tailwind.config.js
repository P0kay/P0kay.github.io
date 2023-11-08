/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": '4px 4px 0 0 #820e0e'
      }
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

