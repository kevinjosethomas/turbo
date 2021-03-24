const {
  app,
  ipcMain,
  BrowserView,
  BrowserWindow
} = require('electron');
const path = require('path');
const Store = require('electron-store');

const { ipcEventHandler } = require('./server/events/ipc');
const { windowEventHandler } = require('./server/events/window');

// Creates global window and store objects
let win;
const store = new Store();

const createWindow = () => {

  const headerHeight = 112;

  // Create BrowserWindow instance
  win = new BrowserWindow({
    show: false,
    frame: false,
    minWidth: 300,
    minHeight: headerHeight,
    webPreferences: {
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load React application
  win.loadURL('http://localhost:3000');
  win.maximize();
  win.show();

  win.webContents.openDevTools();

  // Create BrowserView instance
  const view = new BrowserView();
  const windowSize = win.getSize();
  
  win.setBrowserView(view);
  view.setBounds({
    x: 0,
    y: headerHeight, 
    width: windowSize[0],
    height: windowSize[1] - headerHeight
  });
  view.webContents.loadURL('https://electronjs.org');

  ipcEventHandler(ipcMain, win);
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
