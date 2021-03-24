
exports.windowEventHandler = (win) => {

  win.webContents.on('did-finish-load', () => {
    console.log('loaded')
  })

  win.webContents.on('minimize', () => {
    console.log('minimize')
  })

  win.webContents.on('resize', () => {
    console.log('resized')
    win.webContents.send('receive-window-maximized', win.isMaximized());
  })

}
