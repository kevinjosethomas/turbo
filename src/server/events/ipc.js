const BrowserView = require('electron');

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

    console.log('new tab');
    store.set('openTabs', store.get('openTabs').push({
      url: 'https://google.com',
      view: 
    }))

  })

}
