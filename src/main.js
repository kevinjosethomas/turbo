const {
  app,
  ipcMain,
  BrowserView,
  BrowserWindow,
  globalShortcut
} = require('electron');
const path = require('path');
const Store = require('electron-store');

// Creates global window and store objects
let win;
const store = new Store();

function createWindow() {

  const headerHeight = 112;

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

  win.loadURL('http://localhost:3000');
  win.maximize();
  win.show();

  const view = new BrowserView();
  const windowSize = win.getSize();
  
  win.setBrowserView(view);
  view.setBounds({ x: 0, y: headerHeight, width: windowSize[0], height: windowSize[1] - headerHeight });
  view.webContents.loadURL('https://electronjs.org');

  win.webContents.openDevTools();

  globalShortcut.register('CommandOrControl+R', () => {
    win.reload();
  });

  // mainWindow.on('resized', (event, _) => {
  //   ipcMain.send('receive-window-maximized', mainWindow.isMaximized());
  // })

  win.on('closed', function () {
    win = null
  });

}

app.on('ready', createWindow);

app.on('activate', function () {
  if (win === null) {
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
      win.minimize();
      break;
    case 'maximize':
      console.log('maximize')
      win.maximize();
      break;
    case 'restore':
      console.log('restore')
      win.setSize(800, 600);
      break;
    case 'close':
      win.close();
  }

});

ipcMain.on('request-window-maximized', (event, _) => {
  event.reply('receive-window-maximized', win.isMaximized());
})

