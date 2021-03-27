const electronLocalshortcut = require('electron-localshortcut');

exports.keyboardEventHandler = (win, util) => {

  const { tablist } = util;

  electronLocalshortcut.unregisterAll(win);

  console.log('hi')

  electronLocalshortcut.register(win, 'Ctrl+O', () => {
    console.log('reloading')

    tablist.reloadTab();
  })

  console.log(electronLocalshortcut.isRegistered(win, 'Ctrl+O'))

}
