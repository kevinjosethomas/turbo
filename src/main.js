const path = require('path');
const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const globalShortcut = electron.globalShortcut;
const ipcMain = electron.ipcMain;
let mainWindow;

function createWindow() {

  mainWindow = new BrowserWindow({
    show: false,
    frame: false,
    webPreferences: {
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
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

function eventHandler() {

}

app.on('ready', createWindow);

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("window-change", (event, type) => {

  switch (type) {
    case "minimize":
      mainWindow.minimize();
      break;
    case "maximize":
      mainWindow.maximize();
      break;
    case "restore":
      mainWindow.setSize(1000, 500);
      break;
    case "close":
      mainWindow.close();
  }

});

ipcMain.on('request-window-maximized', (event, _) => {
  event.reply('receive-window-maximized', mainWindow.isMaximized());
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
