const { BrowserView } = require('electron');

const { settings } = require('../data/settings');

exports.ipcEventHandler = (win, util) => {

  const {
    ipcMain,
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

    const view = new BrowserView();
    win.addBrowserView(view);

    win.tabList.push({
      url: 'https://google.com',
      view: view
    })

    console.log(win.tabList)

  })

}
