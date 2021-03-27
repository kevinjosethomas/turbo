const electronLocalshortcut = require('electron-localshortcut');

exports.keyboardEventHandler = (win, util) => {

  const { tablist } = util;

  console.log('hi')

  electronLocalshortcut.register(win, 'Ctrl+D', () => {
    console.log('reloading')
  })

  console.log(electronLocalshortcut.isRegistered(win, 'Ctrl+D'))

}
