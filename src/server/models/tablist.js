const { settings } = require('../data/settings');

class Tablist {

  constructor(win) {
    this.win = win;
    this.tablist = [];
    this.friendlyTablist = [];
    this.tabHistory = [];
  }

  push({ url, view, id, favicon }) {
    this.tablist.push({
      id: id,
      url: url,
      view: view,
      favicon: favicon,
      active: false
    });
    this.friendlyTablist.push({
      id: id,
      url: url,
      active: false,
      favicon: favicon,
    })
  }

  setTabTitle(id, title) {
    const index = this.tablist.findIndex(el => el.id === id);
    this.tablist[index].title = title;
    this.friendlyTablist[index].title = title;
  }

  setTabFavicon(id, favicon) {
    const index = this.tablist.findIndex(el => el.id === id);
    this.tablist[index].favicon = favicon;
    this.friendlyTablist[index].favicon = favicon;
  }

  setTabURL(id, url) {
    const index = this.tablist.findIndex(el => el.id === id);
    this.tablist[index].url = url;
    this.friendlyTablist[index].url = url;
  }

  setActiveTabURL(id, url) {
    const index = this.tablist.findIndex(el => el.id === id);
    this.tablist[index].url = url;
    this.tablist[index].view.webContents.loadURL(url);
    this.friendlyTablist[index].url = url;
  }

  setActiveTab(id) {
    this.tablist.forEach((item, index) => {
      if (item.id === id) {
        this.tablist[index].active = true;
        this.friendlyTablist[index].active = true;
        this.tabHistory.push(item.id);

        const windowSize = this.win.getSize();
        this.tablist[index].view.setBounds({
          x: 0,
          y: settings.minHeight,
          width: windowSize[0],
          height: windowSize[1] - settings.minHeight
        });
      } else if (item.active && item.id !== id) {
        this.tablist[index].active = false;
        this.friendlyTablist[index].active = false;
        this.tablist[index].view.setBounds({
          x: 0,
          y: 0,
          width: 0,
          height: 0
        });
      }
    });
  }

  closeTab(id) {
    const index = this.tablist.findIndex(el => el.id === id);
    if (index >= 0) {
      this.win.removeBrowserView(this.tablist[index].view);
      this.tablist.splice(index, 1);
      this.friendlyTablist.splice(index, 1);
      this.tabHistory = this.tabHistory.filter(el => el !== id);
      if (this.tablist.length && this.tabHistory.length) {
        this.setActiveTab(this.tabHistory[this.tabHistory.length - 1]);
      }
    }
  }

}

exports.Tablist = Tablist;
