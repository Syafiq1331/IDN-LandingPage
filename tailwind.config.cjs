const plugin = require("tailwindcss/plugin");

module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'idn-background' : "url('/src/img/bg1.jpeg')",
      }
    },
    fontFamily: {
      'montserrat': []
    },
  },

  plugins: [

    require("daisyui"),

    plugin(function({ addComponents }) {
      addComponents({
        '.btn-hoverBlue': {
          backgroundColor: '#0284c7',
        },
      })
    })

  ],
}