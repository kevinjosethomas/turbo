const path = require('path');
const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const globalShortcut = electron.globalShortcut;
let mainWindow;

function createWindow() {

  mainWindow = new BrowserWindow({
    show: false,
    frame: false,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
      enableRemoteModule: true
    }
  });

  mainWindow.loadURL('http://localhost:3000');
  mainWindow.maximize();
  mainWindow.removeMenu();
  mainWindow.show();

  mainWindow.webContents.openDevTools();

  globalShortcut.register("CommandOrControl+R", () => {
    mainWindow.reload();
  });

  mainWindow.on('closed', function () {
    mainWindow = null
  });

}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
