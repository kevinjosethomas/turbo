const tlds = require('tlds');
const { BrowserView } = require('electron');
const buildChromeContextMenu = require('electron-chrome-context-menu').default;

const { checkURL } = require('../utility/methods');

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

  ipcMain.on('request-tabs', event => {
    event.reply('receive-tabs', tablist.friendlyTablist);
  });

  ipcMain.on('create-tab', (event, openURL) => {
    
    let url;
    let favicon = title = null;

    if (openURL) {
      if (checkURL(openURL)) {
        if (!openURL.startsWith('http://') && !openURL.startsWith('https://')) {
          url = `https://${openURL}`
        } else {
          url = openURL;
        }
      } else {
        url = `https://google.com/search?q=${openURL.replace(' ', '+')}`
      }
    } else {
      url = 'https://google.com/'
    }
    
    const view = new BrowserView();
    const id = view.webContents.id;
    view.webContents.loadURL(url)
    win.addBrowserView(view);

    tablist.push({
      id: id,
      url: url,
      view: view,
      favicon: favicon,
      title: title
    });

    tablist.setActiveTab(id);

    view.webContents.on('context-menu', (e, params) => {
      const menu = buildChromeContextMenu({
        params: params,
        webContents: view.webContents,
        openLink: (url, disposition) => {
          view.webContents.loadURL(url);
        }
      })
      menu.popup();
    })

    view.webContents.on('page-title-updated', (_, title) => {
      if (title) {
        tablist.setTabTitle(id, title);
        event.reply('receive-tabs', tablist.friendlyTablist);
      } 
    })

    view.webContents.on('page-favicon-updated', (_, favicons) => {
      if (favicons.length) {
        favicon = favicons[0];
        tablist.setTabFavicon(id, favicon);
        event.reply('receive-tabs', tablist.friendlyTablist);
      }
    });

    view.webContents.on('did-navigate', (_, url) => {
      tablist.setTabURL(id, url);
      event.reply('receive-tabs', tablist.friendlyTablist);
    });

    view.webContents.on('did-navigate-in-page', (_, url) => {
      tablist.setTabURL(id, url);
      event.reply('receive-tabs', tablist.friendlyTablist);
    })

    event.reply('receive-tabs', tablist.friendlyTablist);

  });

  ipcMain.on('set-active-tab', (event, id) => {
    tablist.setActiveTab(id);
    event.reply('receive-tabs', tablist.friendlyTablist);
  });

  ipcMain.on('set-active-tab-url', (event, { id, url }) => {
    let formattedUrl;
    checkURL(url)
    if (checkURL(url)) {
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        formattedUrl = `https://${url}`
      } else {
        formattedUrl = url;
      }
    } else {
      formattedUrl = `https://google.com/search?q=${url.replace(' ', '+')}`
    }
    tablist.setActiveTabURL(id, formattedUrl)
    event.reply('receive-tabs', tablist.friendlyTablist);
  });

  ipcMain.on('reload-tab', () => {
    tablist.reloadTab();
  })

  ipcMain.on('close-tab', (event, id) => {
    tablist.closeTab(id);
    event.reply('receive-tabs', tablist.friendlyTablist);
  });

}
