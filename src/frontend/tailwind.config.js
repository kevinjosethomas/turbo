module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        back: {
          10: "var(--color-back-10)",
          20: "var(--color-back-20)",
          30: "var(--color-back-30)",
        },
        fore: {
          10: "var(--color-fore-10)",
          20: "var(--color-fore-20)",
          30: "var(--color-fore-30)",
        },
      },
      spacing: {
        18: "4.5rem",
      },
      maxWidth: {
        xxs: "8.5rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
