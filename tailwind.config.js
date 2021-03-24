module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      height: {
        "header-titlebar": "3.625rem",
        "header-toolbar": "4.375rem"
      },
      colors: {
        night: {
          mare: "#141414",
          sky: {
            dawn: "#E0E0E0",
            noon: "#BDBDBD",
            dusk: "#828282"
          },
          tab: {
            DEFAULT: "#1C1C1C",
            active: "#282828"
          }
        },
      }
    },
  },
  variants: {},
  plugins: [],
}
