const electronLocalshortcut = require('electron-localshortcut');

exports.keyboardEventHandler = (win, util) => {

  const { tablist } = util;

  electronLocalshortcut.unregisterAll(win);

  electronLocalshortcut.register(win, 'Ctrl+O', () => {
    tablist.reloadTab();
  })

}
