module.exports = {
  important: false,
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      colors: {
        primary: "#B87DFF",
        bg_dark: "#17202A",
        gray: {
          100: "#302F3F",
          300: "#464650",
          400: "#0D0D0D",
          600: "#FDFDFD",
        },
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
