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
      },
      backgroundImage:{
        'poker-table':"url('images/table.png')",
        'card-back':"url('images/card_back.png')"
      }
      // background: linear-gradient(
      //         rgb(255, 255, 255),
      //         rgb(255, 255, 255));
      // background-size: 100% 4px;
      // background-position: 100% 100%, 0 100%;
      // background-repeat: no-repeat;
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

