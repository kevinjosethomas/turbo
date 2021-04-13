module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      height: {
        "header-titlebar": "2.75rem",
        "header-toolbar": "4.375rem",
      },
      maxWidth: {
        "tab-title": "6rem",
      },
      colors: {
        night: {
          mare: "var(--color-nightmare)",
          sky: {
            dawn: "var(--color-night-sky-dawn)",
            noon: "var(--color-night-sky-noon)",
            dusk: "var(--color-night-sky-dusk)",
          },
          tab: {
            DEFAULT: "var(--color-night-tab)",
            active: "var(--color-night-tab-active)",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
