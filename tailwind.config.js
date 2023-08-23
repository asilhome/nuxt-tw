/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.neutral,
        error: colors.red,
        info: colors.teal,
        success: colors.green,
        warning: colors.yellow,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
