module.exports = {
  prefix: "",
  purge: {
    enabled:true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: { fontfamily: { 'montserrat': ["Montserrat"] } },
  },
  variants: {
    extend: {},
  },
  plugins: []
};
