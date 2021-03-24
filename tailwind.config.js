module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
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
