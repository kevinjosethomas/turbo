
exports.ipcEventHandler = (ipcMain, win) => {

  ipcMain.on('request-window-maximized', (event) => {
    event.reply('receive-window-maximized', win.isMaximized());
  })
  
  ipcMain.on('window-change', (_, type) => {
    switch (type) {
      case 'minimize':
        win.minimize();
        break;
      case 'maximize':
        console.log('maximize')
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

}
