
exports.windowEventHandler = (win) => {

  win.webContents.on('minimize', () => {
    console.log('minimize')
  })

  win.webContents.on('resize', () => {
    console.log('resized')
    win.webContents.send('receive-window-maximized', win.isMaximized());
  })

}
