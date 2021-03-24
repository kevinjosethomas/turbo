
class Tablist {

  constructor(win) {
    this.win = win;
    this.tablist = [];
  }

  push({ url, view, id }) {
    this.tablist.push({
      id: id,
      url: url,
      view: view,
      active: false
    });
  }

  setActiveTab(id) {
    this.tablist.forEach((item, index) => {
      if (item.id === id) {
        this.tablist[index].active = true;
      } else if (item.active && item.id !== id) {
        this.tablist[index].active = false;
      }
    });
  }

}

exports.Tablist = Tablist;
