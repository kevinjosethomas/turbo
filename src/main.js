const url = require("url");
const path = require("path");
const Store = require("electron-store");
const { app, ipcMain, BrowserWindow } = require("electron");

const { settings } = require("./server/data/settings");
const { Tablist } = require("./server/models/tablist");
const { ipcEventHandler } = require("./server/handlers/ipc");
const { windowEventHandler } = require("./server/handlers/window");
const { keyboardEventHandler } = require("./server/handlers/keyboard");

let win;
const store = new Store();

const createWindow = () => {
  store.clear();

  setDefaultColors();

  win = new BrowserWindow({
    show: false,
    frame: false,
    hasShadow: false,
    minWidth: settings.size.window.min.width,
    minHeight: settings.size.window.min.height,
    webPreferences: {
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const reactURL =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "../build/index.html"),
      protocol: "file:",
      slashes: true,
    });
  win.loadURL(reactURL);
  win.maximize();
  win.show();
  win.webContents.openDevTools();

  const winSize = win.getSize();

  const tablist = new Tablist(win);

  ipcEventHandler(win, {
    ipcMain: ipcMain,
    tablist: tablist,
    store: store,
  });
  windowEventHandler(win);
  keyboardEventHandler(win, { tablist: tablist });

  win.on("closed", () => {
    win = null;
  });
};

const setDefaultColors = () => {
  Object.keys(settings.colors).map((color) => {
    if (!store.get(`design.colors.${color}`)) {
      store.set(`design.colors.${color}`, settings.colors[color]);
    }
  });
};

app.on("ready", createWindow);

app.on("activate", () => {
  if (win === null) {
    createWindow();
  } else {
    return;
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
