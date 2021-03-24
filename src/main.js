const {
  app,
  ipcMain,
  BrowserView,
  BrowserWindow
} = require('electron');
const path = require('path');
const Store = require('electron-store');

const { settings } = require('./server/data/settings');
const { ipcEventHandler } = require('./server/handlers/ipc');
const { windowEventHandler } = require('./server/handlers/window');

// Creates global window and store objects
let win;
const store = new Store({
  openTabs: {
    type: "array",
    items: {
      type: "object"
    }
  },
  tabHistory: {
    type: "array",
    items: {
      type: "object"
    }
  }
});

const createWindow = () => {

  // Create BrowserWindow instance
  win = new BrowserWindow({
    show: false,
    frame: false,
    minWidth: settings.minWidth,
    minHeight: settings.minHeight,
    webPreferences: {
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load React application
  win.loadURL(settings.reactURL);
  win.maximize();
  win.show();

  win.webContents.openDevTools();

  ipcEventHandler(win, { ipcMain: ipcMain, store: store });
  windowEventHandler(win);

  // Null window on close
  win.on('closed', () => {
    win = null;
  });

}

app.on('ready', createWindow);

app.on('activate', () => win === null ? createWindow : void(0));

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
