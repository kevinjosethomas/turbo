const path = require('path');
const {
  app,
  BrowserWindow,
  BrowserView,
  globalShortcut,
  ipcMain
} = require('electron');

let mainWindow;
function createWindow() {

  const headerHeight = 112;

  mainWindow = new BrowserWindow({
    show: false,
    frame: false,
    minWidth: 300,
    minHeight: headerHeight,
    webPreferences: {
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadURL('http://localhost:3000');
  mainWindow.maximize();
  mainWindow.show();

  const view = new BrowserView();
  const windowSize = mainWindow.getSize();
  
  mainWindow.setBrowserView(view);
  view.setBounds({ x: 0, y: headerHeight, width: windowSize[0], height: windowSize[1] - headerHeight });
  view.webContents.loadURL('https://electronjs.org');

  mainWindow.webContents.openDevTools();

  globalShortcut.register('CommandOrControl+R', () => {
    mainWindow.reload();
  });

  // mainWindow.on('resized', (event, _) => {
  //   ipcMain.send('receive-window-maximized', mainWindow.isMaximized());
  // })

  mainWindow.on('closed', function () {
    mainWindow = null
  });

}

app.on('ready', createWindow);

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('window-change', (event, type) => {

  switch (type) {
    case 'minimize':
      mainWindow.minimize();
      break;
    case 'maximize':
      console.log('maximize')
      mainWindow.maximize();
      break;
    case 'restore':
      console.log('restore')
      mainWindow.setMinimumSize(800, 600);
      mainWindow.setBounds(800, 600);
      break;
    case 'close':
      mainWindow.close();
  }

});

ipcMain.on('request-window-maximized', (event, _) => {
  event.reply('receive-window-maximized', mainWindow.isMaximized());
})

