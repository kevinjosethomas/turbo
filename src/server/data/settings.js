exports.settings = {
  core: {
    userAgent: {
      win32:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0",
      darwin:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 11.2; rv:87.0) Gecko/20100101 Firefox/87.0",
      linux:
        "Mozilla/5.0 (X11; Linux i686; rv:87.0) Gecko/20100101 Firefox/87.0",
    },
  },
  path: {
    settings: "/settings",
  },
  colors: {
    "--color-nightmare": "#141414",
    "--color-night-tab": "#1C1C1C",
    "--color-night-tab-active": "#282828",
    "--color-night-sky-dawn": "#E0E0E0",
    "--color-night-sky-noon": "#BDBDBD",
    "--color-night-sky-dusk": "#828282",
  },
  size: {
    window: {
      min: {
        width: 1000,
        height: 600,
      },
    },
    modal: {
      min: {
        width: 1000,
        height: 600,
      },
      default: {
        width: 0.7,
        height: 0.7,
      },
    },
    header: {
      default: {
        height: 128,
      },
    },
  },
};
