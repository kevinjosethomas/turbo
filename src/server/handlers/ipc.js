const { BrowserView } = require('electron');

const { settings } = require('../data/settings');

exports.ipcEventHandler = (win, util) => {

  const {
    ipcMain,
    tablist,
    store
  } = util;

  ipcMain.on('request-window-maximized', (event) => {
    event.reply('receive-window-maximized', win.isMaximized());
  })
  
  ipcMain.on('window-change', (_, type) => {
    switch (type) {
      case 'minimize':
        win.minimize();
        break;
      case 'maximize':
        win.maximize();
        break;
      case 'restore':
        win.unmaximize();
        win.setSize(800, 600);
        break; 
      case 'close':
        win.close();
    }
  });

  ipcMain.on('create-tab', () => {

    const url = 'https://google.com/'
    const view = new BrowserView();
    const id =view.webContents.id;
    view.webContents.loadURL(url)
    win.addBrowserView(view);

    tablist.push({
      id: id,
      url: url,
      view: view
    });

    tablist.setActiveTab(id);
    
    ipcMain.reply('update-tabs', tablist.tablist);

  })

}
