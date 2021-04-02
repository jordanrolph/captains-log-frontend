const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["Averia Serif Libre", ...defaultTheme.fontFamily.serif],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: (theme) => ({
        "pattern-dark": "url('../public/pattern-dark.svg')",
        "pattern-light": "url('../public/pattern-light.svg')",
        "wave-dark": "url('../public/wave-dark.svg')",
      }),
      outline: {
        light: ["2px dashed #DACAA2", "2px"],
        dark: ["2px dashed #041D35", "2px"],
      },
    },
    colors: {
      light: "#DACAA2",
      dark: "#041D35",
    },
  },
  variants: {
    extend: {
      outline: ["hover", "active"],
    },
  },
  plugins: [],
};
