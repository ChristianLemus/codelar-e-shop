module.exports = {
  prefix: "tw-",
  important: false,
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#f1b106",
        gray: {
          100: "#302F3F",
          300: "#464650",
          400: "#0D0D0D",
          600: "#FDFDFD",
        },
        black: "#000",
      },
      fontFamily: {
        sans: ['"Nunito Sans"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
